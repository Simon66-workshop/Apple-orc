import { useEffect, useMemo, useRef, useState } from "react";

import { defaultSceneText, type PreviewMode } from "@/lib/orb/control-specs";
import { isOrcHostMessage, ORC_MESSAGE_SOURCE } from "@/lib/orb/embed";
import {
  readEditorStateFromHash,
  readPreviewModeFromHash,
  readSceneTextFromHash,
  type OrbEditorState,
} from "@/lib/orb/hash";
import { OrbCanvas } from "@/lib/orb/OrbCanvas";
import {
  createPresetOrbStateConfiguration,
  defaultOrbState,
  resolveOrbStateParams,
  type OrbStateName,
} from "@/lib/orb/orb-states";
import { effectDefaults, styleNames, type StyleName } from "@/lib/orb/presets";

export function EmbedPage() {
  const [editorState, setEditorState] = useState<OrbEditorState>(() => ({
    configuration: createPresetOrbStateConfiguration(effectDefaults.style),
    activeState: defaultOrbState,
  }));
  const [previewMode, setPreviewMode] = useState<PreviewMode>("scene");
  const [sceneText, setSceneText] = useState(defaultSceneText);

  useEffect(() => {
    const apply = () => {
      const fromHash = readEditorStateFromHash();
      const search = new URLSearchParams(window.location.search);
      const styleParam = search.get("style") ?? search.get("preset");
      if (styleParam && styleNames.includes(styleParam as StyleName) && !window.location.hash) {
        setEditorState({
          configuration: createPresetOrbStateConfiguration(styleParam as StyleName),
          activeState:
            search.get("state") === "idle" || search.get("state") === "thinking"
              ? (search.get("state") as OrbStateName)
              : defaultOrbState,
        });
        setPreviewMode(search.get("preview") === "orb" ? "orb" : "scene");
        setSceneText(search.get("text") ?? defaultSceneText);
        return;
      }
      setEditorState(fromHash);
      setPreviewMode(window.location.hash ? readPreviewModeFromHash() : "scene");
      setSceneText(window.location.hash ? readSceneTextFromHash() : (search.get("text") ?? defaultSceneText));
    };

    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isOrcHostMessage(event.data)) return;
      const message = event.data;
      if (message.type === "setState") {
        setEditorState((current) => ({ ...current, activeState: message.state }));
      }
      if (message.type === "setText") {
        setSceneText(message.text);
      }
      if (message.type === "ping") {
        event.source?.postMessage(
          {
            source: ORC_MESSAGE_SOURCE,
            type: "pong",
          },
          { targetOrigin: event.origin },
        );
      }
    };
    window.addEventListener("message", onMessage);
    window.parent?.postMessage(
      { source: ORC_MESSAGE_SOURCE, type: "ready", state: editorState.activeState },
      "*",
    );
    return () => window.removeEventListener("message", onMessage);
  }, [editorState.activeState]);

  const params = useMemo(
    () => resolveOrbStateParams(editorState.configuration, editorState.activeState),
    [editorState],
  );
  const targetRef = useRef({
    state: editorState.activeState,
    params,
    activationDuration: editorState.configuration.activationDuration,
    transitionDuration: editorState.configuration.transitionDuration,
  });
  targetRef.current = {
    state: editorState.activeState,
    params,
    activationDuration: editorState.configuration.activationDuration,
    transitionDuration: editorState.configuration.transitionDuration,
  };

  return (
    <main className="orc-embed">
      {previewMode === "scene" ? (
        <div className="orc-scene-pill">
          <div className="orc-scene-pill-orb">
            <OrbCanvas getTarget={() => targetRef.current} />
          </div>
          <span className="orc-scene-pill-text">{sceneText || "\u00a0"}</span>
        </div>
      ) : (
        <div className="orc-embed-orb">
          <OrbCanvas getTarget={() => targetRef.current} />
        </div>
      )}
    </main>
  );
}
