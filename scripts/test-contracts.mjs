import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const results = [];
try {
  const m = await server.ssrLoadModule('/src/lib/orb/embed.ts');
  const envelope = (type, extra = {}) => ({ source: 'apple-orc', type, ...extra });
  const checks = [
    ['valid ping accepted', () => assert.equal(m.isOrcHostMessage(envelope('ping')), true)],
    ['valid states accepted', () => { for (const state of ['idle', 'thinking']) assert.equal(m.isOrcHostMessage(envelope('setState', { state })), true); }],
    ['valid text accepted', () => assert.equal(m.isOrcHostMessage(envelope('setText', { text: 'Thinking...' })), true)],
    ['unknown commands rejected', () => assert.equal(m.isOrcHostMessage(envelope('execute')), false)],
    ['invalid states rejected', () => assert.equal(m.isOrcHostMessage(envelope('setState', { state: 'broken' })), false)],
    ['missing state rejected', () => assert.equal(m.isOrcHostMessage(envelope('setState')), false)],
    ['object text rejected', () => assert.equal(m.isOrcHostMessage(envelope('setText', { text: { html: 'not text' } })), false)],
    ['oversized text rejected', () => assert.equal(m.isOrcHostMessage(envelope('setText', { text: 'a'.repeat(10000) })), false)],
    ['null and foreign messages rejected', () => { for (const data of [null, [], 'ping', { source: 'elsewhere', type: 'ping' }]) assert.equal(m.isOrcHostMessage(data), false); }],
    ['GitHub Pages iframe uses existing HTML file', () => assert.ok(m.createIframeSnippet('https://example.com/Apple-orc', 'sample').includes('/Apple-orc/embed.html#sample'))],
    ['React embed uses existing HTML file', () => assert.ok(m.createReactSnippet('https://example.com/Apple-orc', 'sample').includes('/Apple-orc/embed.html#sample'))],
    ['React orb mode preserves requested height', () => assert.ok(m.createReactSnippet('https://example.com/Apple-orc', 'sample', 360).includes('height: 360'))],
    ['React messaging example avoids wildcard target', () => assert.ok(!m.createReactSnippet('https://example.com/Apple-orc', 'sample').includes('"*"'))],
    ['iframe attribute cannot be escaped by hash', () => assert.ok(!m.createIframeSnippet('https://example.com', 'x" onload="alert(1)').includes(' onload="'))],
    ['base path preserved', () => assert.equal(m.resolvePublicBase('https://example.com/', '/Apple-orc/'), 'https://example.com/Apple-orc')],
  ];
  for (const [name, run] of checks) {
    try { run(); results.push({ name, pass: true }); console.log('PASS', name); }
    catch (error) { results.push({ name, pass: false, error: error.message }); console.error('FAIL', name, error.message); }
  }
} finally {
  await server.close();
  mkdirSync('evidence', { recursive: true });
  const failed = results.filter(r => !r.pass).length;
  writeFileSync('evidence/contracts.json', JSON.stringify({ checked: results.length, passed: results.length - failed, failed, results }, null, 2));
  if (failed || results.length === 0) process.exitCode = 1;
}
