import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const root = path.resolve('dist');
const mime = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.json':'application/json' };
const server = createServer(async (req,res) => {
  try {
    const url = new URL(req.url,'http://localhost');
    if (!url.pathname.startsWith('/Apple-orc/')) { res.writeHead(404).end(); return; }
    let relative = decodeURIComponent(url.pathname.slice('/Apple-orc/'.length));
    if (!relative || relative.endsWith('/')) relative += 'index.html';
    const file = path.resolve(root,relative);
    if (!file.startsWith(root+path.sep) || !(await stat(file)).isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200,{'Content-Type':mime[path.extname(file)] || 'application/octet-stream'}); res.end(await readFile(file));
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(4173,'127.0.0.1',resolve));
const origin = 'http://127.0.0.1:4173';
const base = origin + '/Apple-orc/';
await mkdir('evidence/screenshots',{recursive:true});
const results=[], errors=[], consoleErrors=[], warnings=[], networkErrors=[], screenshots=[];
const browser = await chromium.launch({headless:false,args:['--enable-unsafe-webgpu','--enable-gpu','--use-angle=vulkan','--use-vulkan=swiftshader','--use-webgpu-adapter=swiftshader','--enable-features=Vulkan','--disable-vulkan-surface']});
const context = await browser.newContext({viewport:{width:1600,height:1000},deviceScaleFactor:1.5,locale:'en-US',permissions:['clipboard-read','clipboard-write']});
const page = await context.newPage();
await page.clock.install();
page.setDefaultTimeout(30000);
page.on('pageerror',e=>errors.push(e.message));
page.on('console',m=>{if(m.type()==='warning')warnings.push(m.text());if(m.type()==='error')consoleErrors.push({text:m.text(),location:m.location()});});
page.on('response',r=>{if(new URL(r.url()).origin===origin&&r.status()>=400)networkErrors.push({url:r.url(),status:r.status()});});
page.on('requestfailed',r=>{if(new URL(r.url()).origin===origin&&!r.failure()?.errorText.includes('ABORTED'))networkErrors.push({url:r.url(),failure:r.failure()});});
async function check(name,run){try{await run();results.push({name,pass:true});console.log('PASS',name);}catch(e){results.push({name,pass:false,error:e.message});console.error('FAIL',name,e.message);}}
async function waitForRenderers(gpuOnly=false){
  await page.waitForFunction(gpu=>{
    const nodes=[...document.querySelectorAll('[data-renderer]')];
    for(const frame of document.querySelectorAll('iframe')){try{nodes.push(...frame.contentDocument.querySelectorAll('[data-renderer]'));}catch{}}
    return nodes.length>0&&nodes.every(n=>gpu?n.dataset.renderer==='gpu':n.dataset.renderer!=='loading');
  },gpuOnly,{timeout:gpuOnly?90000:30000});
}
async function open(route){
  const response=await page.goto(base+route,{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await waitForRenderers();await page.waitForTimeout(2500);
}
async function photograph(file){
  const at=await page.evaluate(()=>Date.now());
  await page.clock.pauseAt(new Date(at+1000));
  try {await page.waitForTimeout(1500);await page.screenshot({path:file,fullPage:false,timeout:90000});}
  finally {await page.clock.resume();}
}
async function capture(name){
  await waitForRenderers(true);
  const renderer=[];for(const frame of page.frames())renderer.push(...await frame.locator('[data-renderer]').evaluateAll(nodes=>nodes.map(n=>n.dataset.renderer)));
  const file=`evidence/screenshots/${name}.png`;console.log('CAPTURE',name,'start');await photograph(file);
  screenshots.push({file:`${name}.png`,sha256:createHash('sha256').update(await readFile(file)).digest('hex'),url:page.url(),viewport:{width:1600,height:1000},deviceScaleFactor:1.5,pixelSize:[2400,1500],renderer,animationClock:'paused only during screenshot, resumed for interactions',capturedAt:new Date().toISOString()});
  console.log('CAPTURE',name,'complete');
}
try{
  await check('workbench loads with all 13 presets and loaded thumbnails',async()=>{await open('');assert.match(await page.title(),/Apple Orc/);assert.equal(await page.locator('.orc-preset').count(),13);assert.ok(await page.locator('.orc-preset img').evaluateAll(imgs=>imgs.every(img=>img.complete&&img.naturalWidth>0)));});
  await check('product header is visible and not covered',async()=>{const point=await page.locator('.orc-wordmark').boundingBox();assert.ok(point&&point.y>=0);assert.ok(await page.evaluate(p=>document.elementFromPoint(p.x+p.width/2,p.y+p.height/2)?.closest('.orc-product-bar')!==null,point));});
  await check('preset selection and scene mode respond',async()=>{await page.locator('.orc-preset').nth(1).click();assert.equal(await page.locator('.orc-preset').nth(1).getAttribute('aria-pressed'),'true');await page.getByRole('radio',{name:'Scene',exact:true}).click();await page.waitForSelector('.orc-scene-pill-text');await page.getByRole('radio',{name:'Orb',exact:true}).click();await page.waitForSelector('[data-renderer="gpu"]',{timeout:60000});await page.waitForTimeout(1800);});
  await capture('01-workbench');
  await check('exported iframe targets an HTTP-200 file',async()=>{await page.getByRole('button',{name:'Copy Code',exact:true}).click();const text=await page.locator('.orc-code').innerText();const match=text.match(/src="([^"]+)"/);assert.ok(match);assert.ok(match[1].includes('embed.html#'));assert.equal((await context.request.get(match[1].split('#')[0])).status(),200);await page.getByRole('button',{name:'Close',exact:true}).click();});
  await check('React example changes state, preset and text',async()=>{await open('showcase.html?view=interface');await page.getByRole('button',{name:'Idle',exact:true}).click();assert.ok(await page.getByRole('heading',{name:'Ready when you are'}).isVisible());await page.getByRole('button',{name:'Thinking',exact:true}).click();await page.getByLabel('Status text',{exact:true}).fill('Thinking it through');await page.getByLabel('Preset',{exact:true}).selectOption('siri');assert.ok(await page.getByRole('heading',{name:'Thinking it through'}).isVisible());await page.getByRole('button',{name:'Copy integration code'}).click();assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/AppleOrc/);});
  await page.waitForTimeout(2100);await capture('02-interface');
  await check('six preset choices switch one live GPU preview',async()=>{await open('showcase.html?view=presets');assert.equal(await page.locator('.live-preset-grid article').count(),6);assert.equal(await page.locator('.live-preset-grid [data-renderer]').count(),1);await page.locator('[data-preset="chromaticMetal"]').click();assert.equal(await page.locator('[data-preset="chromaticMetal"]').getAttribute('aria-pressed'),'true');await page.getByRole('button',{name:'Idle',exact:true}).click();await page.getByRole('button',{name:'Thinking',exact:true}).click();await waitForRenderers(true);assert.ok(await page.locator('.live-preset-grid img').evaluateAll(imgs=>imgs.every(img=>img.complete&&img.naturalWidth>0)));});
  await page.waitForTimeout(2500);await capture('03-presets');
  await check('iframe handshake and state round trip',async()=>{await open('showcase.html?view=embed');await page.getByRole('button',{name:'Thinking',exact:true}).click();await page.frameLocator('iframe').locator('main[data-state="thinking"]').waitFor();await page.getByLabel('Widget text',{exact:true}).fill('Thinking it through');assert.equal(await page.frameLocator('iframe').locator('.orc-scene-pill-text').innerText(),'Thinking it through');await page.getByRole('button',{name:'Ping widget'}).click();await page.waitForFunction(()=>document.querySelector('output').textContent.includes('pong'));});
  await capture('04-iframe');
  await check('malformed messages from valid parent are ignored',async()=>{const before=await page.frameLocator('iframe').locator('main').getAttribute('data-state');await page.evaluate(()=>{const w=document.querySelector('iframe').contentWindow;for(const data of [{source:'apple-orc',type:'setState',state:'broken'},{source:'apple-orc',type:'setText',text:{}},{source:'apple-orc',type:'setText',text:'x'.repeat(10000)}])w.postMessage(data,location.origin);});await page.waitForTimeout(150);assert.equal(await page.frameLocator('iframe').locator('main').getAttribute('data-state'),before);assert.equal(await page.frameLocator('iframe').locator('.orc-scene-pill-text').innerText(),'Thinking it through');});
  await check('sibling-window messages are ignored',async()=>{await page.evaluate(()=>{const sibling=document.createElement('iframe');sibling.id='adversarial-sibling';document.body.append(sibling);sibling.contentWindow.eval('parent.document.querySelector("iframe").contentWindow.postMessage({source:"apple-orc",type:"setText",text:"SIBLING_OVERRIDE"},parent.location.origin)');});await page.waitForTimeout(150);assert.equal(await page.frameLocator('iframe[title="Live Apple Orc widget"]').locator('.orc-scene-pill-text').innerText(),'Thinking it through');await page.locator('#adversarial-sibling').evaluate(el=>el.remove());});
  await check('query state and preview work without preset',async()=>{await open('embed.html?state=idle&preview=orb');assert.equal(await page.locator('main').getAttribute('data-state'),'idle');assert.equal(await page.locator('main').getAttribute('data-preview'),'orb');});
  await check('invalid explicit parent origin fails closed',async()=>{await open('showcase.html?view=embed');await page.locator('iframe').evaluate(frame=>{const url=new URL(frame.src);url.searchParams.set('parentOrigin','not-an-origin');frame.src=url.href;});await page.frameLocator('iframe').locator('main').waitFor();await page.waitForTimeout(1000);await page.evaluate(()=>document.querySelector('iframe').contentWindow.postMessage({source:'apple-orc',type:'setText',text:'UNTRUSTED'},location.origin));await page.waitForTimeout(150);assert.notEqual(await page.frameLocator('iframe').locator('.orc-scene-pill-text').innerText(),'UNTRUSTED');});
  await check('mobile views have no horizontal document overflow',async()=>{await page.setViewportSize({width:390,height:844});for(const route of ['', 'showcase.html?view=interface','showcase.html?view=presets','showcase.html?view=embed']){await open(route);const sizes=await page.evaluate(()=>({width:innerWidth,document:document.documentElement.scrollWidth,app:document.querySelector('.showcase-app')?.scrollWidth??innerWidth}));assert.ok(sizes.document<=sizes.width+1&&sizes.app<=sizes.width+1,JSON.stringify({route,sizes}));}await photograph('evidence/mobile.png');});
  await check('fallback works with WebGPU unavailable',async()=>{const noGPU=await browser.newContext({viewport:{width:1000,height:800}});await noGPU.addInitScript(()=>Object.defineProperty(navigator,'gpu',{get:()=>undefined}));const tab=await noGPU.newPage();await tab.goto(base+'showcase.html?view=interface');await tab.waitForSelector('[data-renderer="fallback"]');assert.ok(await tab.locator('h1').isVisible());await noGPU.close();});
  await check('no application exceptions, console errors or failed local assets',()=>{assert.deepEqual(errors,[]);assert.deepEqual(networkErrors,[]);assert.deepEqual(consoleErrors,[]);});
}finally{
  const failed=results.filter(r=>!r.pass).length;
  const accepted=failed===0&&results.length===14&&screenshots.length===4;
  await writeFile('evidence/browser.json',JSON.stringify({status:accepted?'PASS':'FAIL_OR_INCOMPLETE',sourceCommit:process.env.GITHUB_SHA??'local',browser:await browser.version(),method:'Playwright headed Chromium under Xvfb; production Pages bundle; real WGSL via software Vulkan; animation clock paused only for still captures; no generated mockups or pixel retouching',gallery:'Six preset choices: selected orb is live WebGPU, other tiles are the repository preset thumbnails.',screenshotCount:screenshots.length,checked:results.length,passed:results.length-failed,failed,results,screenshots,errors,consoleErrors,warnings,networkErrors,limitations:['Chromium only; not Safari/iOS certification','Software Vulkan executes the real WebGPU shader; no physical-GPU speed claim','Local component examples; no model API, microphone or customer deployment']},null,2));
  await browser.close();await new Promise(resolve=>server.close(resolve));if(!accepted)process.exitCode=1;
}
