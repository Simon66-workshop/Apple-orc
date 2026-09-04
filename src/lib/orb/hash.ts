import type { Locale } from "./editor-i18n";
import {
  activationDurationRange,
  clamp,
  colorKeys,
  defaultSceneText,
  limitSceneText,
  localeStorageKey,
  normalizeColor,
  numericSpecByKey,
  numericSpecs,
  type PreviewMode,
  transitionDurationRange,
} from "./control-specs";
import {
  createOrbStateConfiguration,
  createPresetOrbStateConfiguration,
  defaultOrbActivationDuration,
  defaultOrbState,
  defaultOrbTransitionDuration,
  isOrbStateProfileKey,
  orbStateNames,
  orbStateProfileKeys,
  resolveOrbStateParams,
  updateOrbStateParam,
  type OrbStateConfiguration,
  type OrbStateName,
} from "./orb-states";
import {
  effectDefaults,
  styleNames,
  stylePresets,
  type OrbParams,
  type StyleName,
} from "./presets";

export type OrbEditorState = {
  configuration: OrbStateConfiguration;
  activeState: OrbStateName;
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function readInitialLocale(): Locale {
  if (!isBrowser()) return "en";
  try {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    if (storedLocale === "zh" || storedLocale === "en") return storedLocale;
  } catch {
    // ignore
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function persistLocale(locale: Locale): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch {
    // ignore
  }
}

function hashParams(): URLSearchParams {
  return new URLSearchParams(window.location.hash.replace(/^#/, ""));
}

export function readPreviewModeFromHash(): PreviewMode {
  if (!isBrowser()) return "orb";
  return hashParams().get("preview") === "scene" ? "scene" : "orb";
}

export function readSceneTextFromHash(): string {
  if (!isBrowser()) return defaultSceneText;
  const text = hashParams().get("text");
  return text === null ? defaultSceneText : limitSceneText(text);
}

function stateHashKey(state: OrbStateName, key: string): string {
  if (state === "thinking") return key;
  return `idle${key.charAt(0).toUpperCase()}${key.slice(1)}`;
}

export function defaultEditorState(): OrbEditorState {
  return {
    configuration: createPresetOrbStateConfiguration(effectDefaults.style),
    activeState: defaultOrbState,
  };
}

export function readEditorStateFromHash(): OrbEditorState {
  if (!isBrowser()) return defaultEditorState();

  const search = hashParams();
  const style = search.get("style");
  const selectedStyle =
    style && styleNames.includes(style as StyleName)
      ? (style as StyleName)
      : effectDefaults.style;
  const params: OrbParams = {
    style: selectedStyle,
    ...stylePresets[selectedStyle],
  };

  const glass = search.get("glass");
  if (glass === "1") params.glassEnabled = true;
  if (glass === "0") params.glassEnabled = false;

  for (const spec of numericSpecs) {
    const raw = search.get(spec.key);
    if (raw === null) continue;
    const value = Number(raw);
    if (Number.isFinite(value)) {
      params[spec.key] = clamp(value, spec.min, spec.max);
    }
  }

  for (const key of colorKeys) {
    const raw = search.get(key);
    if (raw === null) continue;
    const value = normalizeColor(raw);
    if (value) params[key] = value;
  }

  const transitionRaw = search.get("transition");
  const transitionValue = transitionRaw === null ? null : Number(transitionRaw);
  const transitionDuration =
    transitionValue !== null && Number.isFinite(transitionValue)
      ? clamp(transitionValue, transitionDurationRange.min, transitionDurationRange.max)
      : defaultOrbTransitionDuration;
  const activationRaw = search.get("activation");
  const activationValue = activationRaw === null ? null : Number(activationRaw);
  const activationDuration =
    activationValue !== null && Number.isFinite(activationValue)
      ? clamp(activationValue, activationDurationRange.min, activationDurationRange.max)
      : defaultOrbActivationDuration;

  let configuration = createOrbStateConfiguration(
    params,
    transitionDuration,
    activationDuration,
  );

  for (const key of orbStateProfileKeys) {
    const raw = search.get(stateHashKey("idle", key));
    if (raw === null) continue;

    if (typeof configuration.profiles.idle[key] === "number") {
      const spec = numericSpecByKey.get(key as (typeof numericSpecs)[number]["key"]);
      const value = Number(raw);
      if (spec && Number.isFinite(value)) {
        configuration = updateOrbStateParam(
          configuration,
          "idle",
          key,
          clamp(value, spec.min, spec.max),
        );
      }
    } else {
      const color = normalizeColor(raw);
      if (color) configuration = updateOrbStateParam(configuration, "idle", key, color);
    }
  }

  const state = search.get("state");
  const activeState =
    state && orbStateNames.includes(state as OrbStateName)
      ? (state as OrbStateName)
      : defaultOrbState;

  return { configuration, activeState };
}

export function buildShareHash(
  editorState: OrbEditorState,
  previewMode: PreviewMode,
  sceneText: string,
): string {
  const { configuration, activeState } = editorState;
  const params = resolveOrbStateParams(configuration, "thinking");
  const search = new URLSearchParams();
  search.set("effect", "orb-glass-liquid");
  search.set("style", params.style);
  search.set("glass", params.glassEnabled ? "1" : "0");
  search.set("state", activeState);
  search.set("activation", String(configuration.activationDuration));
  search.set("transition", String(configuration.transitionDuration));
  search.set("preview", previewMode);
  search.set("text", sceneText);
  for (const spec of numericSpecs) {
    search.set(spec.key, String(params[spec.key]));
    if (isOrbStateProfileKey(spec.key)) {
      search.set(
        stateHashKey("idle", spec.key),
        String(configuration.profiles.idle[spec.key]),
      );
    }
  }
  for (const key of colorKeys) {
    search.set(key, params[key]);
    if (isOrbStateProfileKey(key)) {
      search.set(stateHashKey("idle", key), configuration.profiles.idle[key]);
    }
  }
  return search.toString();
}

export function writeHash(
  editorState: OrbEditorState,
  previewMode: PreviewMode,
  sceneText: string,
): void {
  if (!isBrowser()) return;
  window.history.replaceState(null, "", `#${buildShareHash(editorState, previewMode, sceneText)}`);
}
