import { createWebExport, createSwiftExport } from "./code-export";
import type { OrbEditorState } from "./hash";
import { resolveOrbStateParams } from "./orb-states";
import type { PreviewMode } from "./control-specs";

export const ORC_MESSAGE_SOURCE = "apple-orc";

export type OrcHostMessage =
  | { source: typeof ORC_MESSAGE_SOURCE; type: "setState"; state: "idle" | "thinking" }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "setText"; text: string }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "ping" };

export type OrcWidgetMessage =
  | { source: typeof ORC_MESSAGE_SOURCE; type: "ready"; state: "idle" | "thinking" }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "state"; state: "idle" | "thinking" }
  | { source: typeof ORC_MESSAGE_SOURCE; type: "pong" };

export function isOrcHostMessage(data: unknown): data is OrcHostMessage {
  if (!data || typeof data !== "object") return false;
  const message = data as { source?: unknown; type?: unknown };
  return message.source === ORC_MESSAGE_SOURCE && typeof message.type === "string";
}

/** Origin + Vite base path, without a trailing slash. */
export function resolvePublicBase(origin: string, baseUrl = "/"): string {
  const cleanedOrigin = origin.replace(/\/$/, "");
  const base = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
  return `${cleanedOrigin}${base}`;
}

export function createIframeSnippet(origin: string, hash: string, height = 120): string {
  const src = `${resolvePublicBase(origin)}/embed#${hash}`;
  return `<iframe
  title="Apple Orc"
  src="${src}"
  style="border:0;width:100%;max-width:420px;height:${height}px;background:transparent"
  allow="autoplay"
></iframe>`;
}

export function createReactSnippet(origin: string, hash: string): string {
  const src = `${resolvePublicBase(origin)}/embed#${hash}`;
  return `export function AppleOrcEmbed() {
  return (
    <iframe
      title="Apple Orc"
      src=${JSON.stringify(src)}
      style={{
        border: 0,
        width: "100%",
        maxWidth: 420,
        height: 120,
        background: "transparent",
      }}
      allow="autoplay"
    />
  );
}

// Drive the orb from the host page:
// iframe.contentWindow.postMessage(
//   { source: "apple-orc", type: "setState", state: "thinking" },
//   "*",
// );`;
}

export function createDropInSnippet(): string {
  return `import { AppleOrc } from "@/lib/orb";

export function StatusOrb() {
  return (
    <AppleOrc
      preset="siri"
      state="thinking"
      size={72}
      label="Thinking..."
    />
  );
}`;
}

export function createJsonConfig(
  editorState: OrbEditorState,
  previewMode: PreviewMode,
  sceneText: string,
): string {
  const thinking = resolveOrbStateParams(editorState.configuration, "thinking");
  const idle = resolveOrbStateParams(editorState.configuration, "idle");
  return JSON.stringify(
    {
      preset: thinking.style,
      state: editorState.activeState,
      preview: previewMode,
      text: sceneText,
      activationDuration: editorState.configuration.activationDuration,
      transitionDuration: editorState.configuration.transitionDuration,
      thinking,
      idle,
    },
    null,
    2,
  );
}

export function createExportBundle(
  editorState: OrbEditorState,
  origin: string,
  hash: string,
  previewMode: PreviewMode,
  sceneText: string,
) {
  return {
    web: createWebExport(editorState.configuration, editorState.activeState),
    swift: createSwiftExport(editorState.configuration, editorState.activeState),
    iframe: createIframeSnippet(origin, hash, previewMode === "scene" ? 120 : 360),
    react: createReactSnippet(origin, hash),
    dropin: createDropInSnippet(),
    json: createJsonConfig(editorState, previewMode, sceneText),
  };
}

export type ExportKind = keyof ReturnType<typeof createExportBundle>;
