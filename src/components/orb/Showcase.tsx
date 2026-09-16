import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Code2, Copy, Play, Square } from "lucide-react";
import { AppleOrc } from "@/lib/orb/AppleOrc";
import { styleNames, type StyleName } from "@/lib/orb/presets";
import { styleLabels } from "@/lib/orb/editor-i18n";
import type { OrbStateName } from "@/lib/orb/orb-states";

const repo = "https://github.com/Simon66-workshop/Apple-orc";
const base = import.meta.env.BASE_URL;
const views = ["interface", "presets", "embed"] as const;
type View = typeof views[number];
const viewLabels = { interface: "In your interface", presets: "Preset library", embed: "iframe lab" };
function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(children); setCopied(true); setError(false); } catch { setError(true); } }
  useEffect(() => { if (!copied) return; const id = setTimeout(() => setCopied(false), 1800); return () => clearTimeout(id); }, [copied]);
  return <div className="showcase-code"><div className="code-caption"><span>Integration example</span><button onClick={copy} aria-label="Copy integration code">{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? "Copied" : "Copy"}</button></div><pre tabIndex={0}><code>{children}</code></pre>{error && <p role="status">Clipboard unavailable. Select and copy the code.</p>}</div>;
}
function InterfaceExample() {
  const [state, setState] = useState<OrbStateName>("thinking");
  const [preset, setPreset] = useState<StyleName>("siri");
  const [text, setText] = useState("Thinking it through");
  return <div className="showcase-interface">
    <section className="showcase-intro"><h1>A little presence.<br/><span>A clearer state.</span></h1><p>A liquid-glass orb for the moments between a question and an answer. Tune its look, then put it in your own interface.</p><div className="showcase-facts">13 presets <span>·</span> React + iframe <span>·</span> MIT</div><a className="showcase-primary" href={base}>Open the workbench <ArrowUpRight size={18}/></a><p className="showcase-small">Interactive component demo. No model or microphone connected.</p></section>
    <section className="interface-example" aria-label="Live React integration"><div className="example-top"><span>Assistant interface</span><span className="local-label">Local demo</span></div><div className="example-orb"><AppleOrc preset={preset} state={state} size={260}/></div><h2>{state === "thinking" ? text || "Thinking" : "Ready when you are"}</h2><p>The component follows your app state.<br/>The rest of the conversation is yours.</p><div className="state-buttons" role="group" aria-label="Component state"><button aria-pressed={state === "idle"} onClick={() => setState("idle")}><Square size={14}/> Idle</button><button aria-pressed={state === "thinking"} onClick={() => setState("thinking")}><Play size={14}/> Thinking</button></div><div className="example-config"><label>Preset<select aria-label="Preset" value={preset} onChange={e => setPreset(e.target.value as StyleName)}>{styleNames.map(s => <option key={s} value={s}>{styleLabels.en[s]}</option>)}</select></label><label>Status text<input value={text} maxLength={60} onChange={e => setText(e.target.value)}/></label></div></section>
    <div className="interface-code"><CodeBlock>{`import { AppleOrc } from "@/lib/orb";\n\n<AppleOrc\n  preset="${preset}"\n  state="${state}"\n  size={72}\n  label="${state === "thinking" ? "Thinking..." : "Ready"}"\n/>`}</CodeBlock><p className="showcase-small">Source import, not an npm package. <a href={`${repo}/blob/main/docs/INTEGRATION.md`}>Integration guide ↗</a></p></div>
  </div>;
}
const gallery: StyleName[] = ["siri", "aurora", "chromaticMetal", "plasma", "opal", "particleRibbon"];
function PresetLibrary() {
  const [state, setState] = useState<OrbStateName>("thinking");
  return <section className="preset-showcase"><div className="section-heading"><div><h1>Same component.<br/><span>A different character.</span></h1><p>Six live previews from the 13-preset library. Change the state and compare.</p></div><div className="state-buttons" aria-label="Gallery state" role="group"><button aria-pressed={state === "idle"} onClick={() => setState("idle")}>Idle</button><button aria-pressed={state === "thinking"} onClick={() => setState("thinking")}>Thinking</button></div></div><div className="live-preset-grid">{gallery.map((preset, index) => <article key={preset}><div className="preset-orb"><AppleOrc preset={preset} state={state} size={170}/></div><div><span className="preset-number">0{index + 1}</span><h2>{styleLabels.en[preset]}</h2><code>{preset}</code></div></article>)}</div><a className="showcase-secondary" href={base}>Tune all 13 presets in the workbench <ArrowUpRight size={17}/></a></section>;
}
function EmbedLab() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<OrbStateName>("idle");
  const [text, setText] = useState("Ready when you are");
  const [lastEvent, setLastEvent] = useState("Waiting for widget");
  const origin = window.location.origin;
  const src = `${origin}${base}embed.html?style=aurora&state=idle&preview=scene&text=Ready%20when%20you%20are&parentOrigin=${encodeURIComponent(origin)}`;
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow || event.origin !== origin || event.data?.source !== "apple-orc") return;
      const data = event.data;
      if (data.type === "ready") { setReady(true); setLastEvent("ready · parent origin verified"); }
      if (data.type === "state" && (data.state === "idle" || data.state === "thinking")) { setState(data.state); setLastEvent(`state · ${data.state}`); }
      if (data.type === "pong") { setReady(true); setLastEvent("pong · round trip confirmed"); }
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [origin]);
  function send(type: "setState" | "setText" | "ping", extra: Record<string, string> = {}) { frame.current?.contentWindow?.postMessage({ source: "apple-orc", type, ...extra }, origin); }
  function switchState(next: OrbStateName) { send("setState", { state: next }); send("setText", { text: next === "thinking" ? "Thinking it through" : text }); }
  return <section className="embed-showcase"><div className="section-heading"><div><h1>Your page.<br/><span>One small embed.</span></h1><p>This panel controls an actual iframe. The widget replies with its state.</p></div><Code2 size={32} strokeWidth={1}/></div><div className="embed-layout"><div className="embed-live"><div className="example-top"><span>Host application</span><span className="local-label">Live iframe</span></div><div className="embed-stage"><iframe title="Live Apple Orc widget" ref={frame} src={src} onLoad={() => send("ping")} /><span className="embed-boundary-label">The iframe boundary</span></div><div className="embed-controls"><div className="state-buttons" role="group" aria-label="Iframe state"><button disabled={!ready} aria-pressed={state === "idle"} onClick={() => switchState("idle")}>Idle</button><button disabled={!ready} aria-pressed={state === "thinking"} onClick={() => switchState("thinking")}>Thinking</button></div><label>Widget text<input value={text} maxLength={280} onChange={e => { setText(e.target.value); send("setText", { text: e.target.value }); }}/></label><button className="showcase-secondary" disabled={!ready} onClick={() => send("ping")}>Ping widget</button><output aria-live="polite" data-testid="widget-event">{lastEvent}</output></div></div><div><CodeBlock>{`const frame = document.querySelector("iframe");\nconst widgetOrigin = new URL(frame.src).origin;\n\nframe.contentWindow.postMessage(\n  {\n    source: "apple-orc",\n    type: "setState",\n    state: "thinking"\n  },\n  widgetOrigin // exact origin, not "*"\n);`}</CodeBlock><div className="embed-notes"><h2>A small, explicit contract.</h2><p><code>setState</code> — idle or thinking</p><p><code>setText</code> — up to 280 characters</p><p><code>ping → pong</code> — connection check</p><p>Messages are checked against the parent window, parent origin and payload schema.</p><a href={`${repo}/blob/main/docs/INTEGRATION.md`}>Read the integration guide ↗</a></div></div></div></section>;
}
export function Showcase() {
  const initial = new URLSearchParams(window.location.search).get("view");
  const [view, setView] = useState<View>(views.includes(initial as View) ? initial as View : "interface");
  function changeView(next: View) { setView(next); const url = new URL(window.location.href); url.searchParams.set("view", next); window.history.replaceState(null, "", url); }
  useEffect(() => { document.title = "Apple Orc — Live integration examples"; }, []);
  return <div className="showcase-app"><header className="orc-product-bar"><a className="orc-wordmark" href={base}>Apple Orc <span>by 66Workshop</span></a><nav aria-label="Showcase views">{views.map(v => <button key={v} onClick={() => changeView(v)} aria-current={view === v ? "page" : undefined}>{viewLabels[v]}</button>)}</nav><a className="github-link" href={repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></header><main>{view === "interface" ? <InterfaceExample/> : view === "presets" ? <PresetLibrary/> : <EmbedLab/>}</main><footer><span>Open source. Small by design.</span><span>Shader & motion: <a href="https://github.com/LerSent001/orb">LerSent001/orb</a> · MIT · Independent of Apple</span></footer></div>;
}
