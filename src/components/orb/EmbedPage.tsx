import { useEffect, useMemo, useRef, useState } from "react";
import { defaultSceneText, type PreviewMode } from "@/lib/orb/control-specs";
import { isOrcHostMessage, MAX_WIDGET_TEXT_LENGTH, ORC_MESSAGE_SOURCE, resolveParentOrigin } from "@/lib/orb/embed";
import { readEditorStateFromHash, readPreviewModeFromHash, readSceneTextFromHash, type OrbEditorState } from "@/lib/orb/hash";
import { OrbCanvas } from "@/lib/orb/OrbCanvas";
import { createPresetOrbStateConfiguration, defaultOrbState, resolveOrbStateParams, type OrbStateName } from "@/lib/orb/orb-states";
import { effectDefaults, styleNames, type StyleName } from "@/lib/orb/presets";

function readLocation() {
  const search = new URLSearchParams(window.location.search);
  if (window.location.hash) return { editor: readEditorStateFromHash(), preview: readPreviewModeFromHash(), text: readSceneTextFromHash() };
  const requestedStyle = search.get("style") ?? search.get("preset");
  const style = requestedStyle && styleNames.includes(requestedStyle as StyleName) ? requestedStyle as StyleName : effectDefaults.style;
  const requestedState = search.get("state");
  const activeState: OrbStateName = requestedState === "idle" || requestedState === "thinking" ? requestedState : defaultOrbState;
  return {
    editor: { configuration: createPresetOrbStateConfiguration(style), activeState },
    preview: (search.get("preview") === "orb" ? "orb" : "scene") as PreviewMode,
    text: (search.get("text") ?? defaultSceneText).slice(0, MAX_WIDGET_TEXT_LENGTH),
  };
}
export function EmbedPage() {
  const [initial] = useState(readLocation);
  const [editorState, setEditorState] = useState<OrbEditorState>(initial.editor);
  const [previewMode, setPreviewMode] = useState<PreviewMode>(initial.preview);
  const [sceneText, setSceneText] = useState(initial.text);
  const parentOrigin = useMemo(() => resolveParentOrigin(window.location.search, document.referrer), []);
  useEffect(() => {
    document.documentElement.classList.add("is-orc-embed");
    return () => document.documentElement.classList.remove("is-orc-embed");
  }, []);
  useEffect(() => {
    const apply = () => { const next = readLocation(); setEditorState(next.editor); setPreviewMode(next.preview); setSceneText(next.text); };
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (window.parent === window || event.source !== window.parent || !parentOrigin || event.origin !== parentOrigin || !isOrcHostMessage(event.data)) return;
      const m = event.data;
      if (m.type === "setState") setEditorState(current => ({ ...current, activeState: m.state }));
      else if (m.type === "setText") setSceneText(m.text);
      else window.parent.postMessage({ source: ORC_MESSAGE_SOURCE, type: "pong" }, parentOrigin);
    };
    window.addEventListener("message", onMessage);
    if (parentOrigin && window.parent !== window) window.parent.postMessage({ source: ORC_MESSAGE_SOURCE, type: "ready", state: initial.editor.activeState }, parentOrigin);
    return () => window.removeEventListener("message", onMessage);
  }, [initial.editor.activeState, parentOrigin]);
  useEffect(() => {
    if (parentOrigin && window.parent !== window) window.parent.postMessage({ source: ORC_MESSAGE_SOURCE, type: "state", state: editorState.activeState }, parentOrigin);
  }, [editorState.activeState, parentOrigin]);
  const params = useMemo(() => resolveOrbStateParams(editorState.configuration, editorState.activeState), [editorState]);
  const targetRef = useRef({ state: editorState.activeState, params, activationDuration: editorState.configuration.activationDuration, transitionDuration: editorState.configuration.transitionDuration });
  targetRef.current = { state: editorState.activeState, params, activationDuration: editorState.configuration.activationDuration, transitionDuration: editorState.configuration.transitionDuration };
  return <main className="orc-embed" data-state={editorState.activeState} data-preview={previewMode}>
    {previewMode === "scene" ? <div className="orc-scene-pill"><div className="orc-scene-pill-orb"><OrbCanvas getTarget={() => targetRef.current} /></div><span className="orc-scene-pill-text">{sceneText || "\u00a0"}</span></div>
      : <div className="orc-embed-orb"><OrbCanvas getTarget={() => targetRef.current} /></div>}
  </main>;
}
