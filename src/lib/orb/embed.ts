import { createWebExport, createSwiftExport } from "./code-export";
import type { OrbEditorState } from "./hash";
import { resolveOrbStateParams } from "./orb-states";
import type { PreviewMode } from "./control-specs";

export const ORC_MESSAGE_SOURCE = "apple-orc";
export const MAX_WIDGET_TEXT_LENGTH = 280;
export type OrcHostMessage =
  | { source: typeof ORC_MESSAGE_SOURCE; type: "setState"; state: "idle" | "thinking" }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "setText"; text: string }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "ping" };
export type OrcWidgetMessage =
  | { source: typeof ORC_MESSAGE_SOURCE; type: "ready" | "state"; state: "idle" | "thinking" }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "pong" };

/** Validate payloads before they enter React state, even from a trusted host. */
export function isOrcHostMessage(data: unknown): data is OrcHostMessage {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const m = data as Record<string, unknown>;
  if (m.source !== ORC_MESSAGE_SOURCE) return false;
  if (m.type === "ping") return true;
  if (m.type === "setState") return m.state === "idle" || m.state === "thinking";
  if (m.type === "setText") return typeof m.text === "string" && m.text.length <= MAX_WIDGET_TEXT_LENGTH;
  return false;
}

/** Optional host origin pin. Invalid explicit values deliberately fail closed. */
export function resolveParentOrigin(search: string, referrer: string): string | null {
  const explicit = new URLSearchParams(search).get("parentOrigin");
  const candidate = explicit ?? referrer;
  if (!candidate) return null;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : null;
  } catch { return null; }
}

/** Origin + Vite base path, without a trailing slash. */
export function resolvePublicBase(origin: string, baseUrl = "/"): string {
  const cleanedOrigin = origin.replace(/\/$/, "");
  const base = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
  return `${cleanedOrigin}${base}`;
}

function embedUrl(origin: string, hash: string): string {
  const url = new URL(`${resolvePublicBase(origin)}/embed.html`);
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Embed URLs require HTTP(S)");
  url.hash = hash.replace(/^#/, "");
  return url.href;
}
function htmlAttribute(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function embedHeight(height: number): number {
  return Number.isFinite(height) ? Math.round(Math.min(1200, Math.max(72, height))) : 120;
}

export function createIframeSnippet(origin: string, hash: string, height = 120): string {
  return `<iframe\n  title="Apple Orc"\n  src="${htmlAttribute(embedUrl(origin, hash))}"\n  style="border:0;width:100%;max-width:420px;height:${embedHeight(height)}px;background:transparent"\n></iframe>`;
}

export function createReactSnippet(origin: string, hash: string, height = 120): string {
  const src = embedUrl(origin, hash);
  const targetOrigin = new URL(src).origin;
  return `import { useRef } from "react";\n\nexport function AppleOrcEmbed() {\n  const frame = useRef(null);\n  return (\n    <>\n      <iframe\n        ref={frame}\n        title="Apple Orc"\n        src=${JSON.stringify(src)}\n        style={{ border: 0, width: "100%", maxWidth: 420, height: ${embedHeight(height)}, background: "transparent" }}\n      />\n      <button onClick={() => frame.current?.contentWindow?.postMessage(\n        { source: "apple-orc", type: "setState", state: "thinking" },\n        ${JSON.stringify(targetOrigin)},\n      )}>Thinking</button>\n    </>\n  );\n}\n\n// JavaScript / JSX example. In TSX use useRef<HTMLIFrameElement>(null).\n// Wait for the iframe load or ready event before sending commands.\n// Add ?parentOrigin=YOUR_ENCODED_ORIGIN before # when using no-referrer.`;
}
export function createDropInSnippet(): string {
  return `import { AppleOrc } from "@/lib/orb";\n\nexport function StatusOrb() {\n  return <AppleOrc preset="siri" state="thinking" size={72} label="Thinking..." />;\n}\n\n// Source import, not an npm package. Copy src/lib/orb, src/lib/utils.ts,\n// required styles and license notices; see the integration guide.`;
}
export function createJsonConfig(editorState: OrbEditorState, previewMode: PreviewMode, sceneText: string): string {
  const thinking = resolveOrbStateParams(editorState.configuration, "thinking");
  const idle = resolveOrbStateParams(editorState.configuration, "idle");
  return JSON.stringify({ preset: thinking.style, state: editorState.activeState, preview: previewMode,
    text: sceneText, activationDuration: editorState.configuration.activationDuration,
    transitionDuration: editorState.configuration.transitionDuration, thinking, idle }, null, 2);
}
export function createExportBundle(editorState: OrbEditorState, origin: string, hash: string, previewMode: PreviewMode, sceneText: string) {
  const height = previewMode === "scene" ? 120 : 360;
  return {
    web: createWebExport(editorState.configuration, editorState.activeState),
    swift: createSwiftExport(editorState.configuration, editorState.activeState),
    iframe: createIframeSnippet(origin, hash, height),
    react: createReactSnippet(origin, hash, height),
    dropin: createDropInSnippet(), json: createJsonConfig(editorState, previewMode, sceneText),
  };
}
export type ExportKind = keyof ReturnType<typeof createExportBundle>;
