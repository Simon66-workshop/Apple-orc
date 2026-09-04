import type { ColorKey, NumericKey } from "./editor-i18n";
import {
  orbRadiusRange,
  styleNames,
  type StyleName,
} from "./presets";

export type PreviewMode = "orb" | "scene";

export const defaultSceneText = "Thinking...";
export const maxSceneTextLength = 20;
export const hashSyncDelayMs = 500;
export const localeStorageKey = "apple-orc-editor-locale";

export const activationDurationRange = { min: 0.05, max: 0.8, step: 0.01 } as const;
export const transitionDurationRange = { min: 0.1, max: 2, step: 0.05 } as const;

export type NumericSpec = {
  key: NumericKey;
  min: number;
  max: number;
  step: number;
  enabledStyles?: readonly StyleName[];
};

const ridgeStyles: readonly StyleName[] = [
  "siri",
  "voiceWave",
  "spectrum",
  "aurora",
  "frost",
  "plasma",
  "blueDrop",
  "violetEmber",
  "refractiveBlob",
];
const sharpStyles: readonly StyleName[] = [
  "frost",
  "plasma",
  "chrome",
  "blueDrop",
  "violetEmber",
  "refractiveBlob",
];
const standardShapeStyles = styleNames.filter(
  (style) => style !== "chromaticMetal" && style !== "particleRibbon",
);
const chromaticMetalStyles: readonly StyleName[] = ["chromaticMetal"];
const particleRibbonStyles: readonly StyleName[] = ["particleRibbon"];

export const numericSpecs: readonly NumericSpec[] = [
  { key: "speed", min: 0, max: 3, step: 0.01 },
  { key: "radius", ...orbRadiusRange, step: 0.01 },
  { key: "contourDeform", min: 0, max: 1, step: 0.01, enabledStyles: standardShapeStyles },
  { key: "zoom", min: 0.05, max: 1, step: 0.01, enabledStyles: standardShapeStyles },
  { key: "warp", min: 0, max: 6, step: 0.05, enabledStyles: standardShapeStyles },
  { key: "ridgeAmt", min: 0, max: 1, step: 0.01, enabledStyles: ridgeStyles },
  { key: "sharp", min: 0.5, max: 6, step: 0.05, enabledStyles: sharpStyles },
  { key: "bandDensity", min: 1, max: 6, step: 0.1, enabledStyles: chromaticMetalStyles },
  { key: "metalDepth", min: 0, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalRoughness", min: 0, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "chromaticShift", min: 0, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalScale", min: 0.2, max: 2, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalStretch", min: 0, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalAngle", min: -180, max: 180, step: 1, enabledStyles: chromaticMetalStyles },
  { key: "metalOffset", min: -1, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalPhase", min: 0, max: 1, step: 0.01, enabledStyles: chromaticMetalStyles },
  { key: "metalEvolution", min: 0, max: 2, step: 0.02, enabledStyles: chromaticMetalStyles },
  { key: "particleDensity", min: 0.2, max: 1, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "ribbonCount", min: 2, max: 6, step: 1, enabledStyles: particleRibbonStyles },
  { key: "ribbonWidth", min: 0.1, max: 0.8, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "ribbonTwist", min: 0.1, max: 3, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "ribbonFold", min: 0, max: 1.2, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "ribbonBreath", min: 0, max: 0.8, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "particleSize", min: 0.6, max: 2.5, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "particleBloom", min: 0, max: 2, step: 0.01, enabledStyles: particleRibbonStyles },
  { key: "shade", min: 0, max: 1.5, step: 0.01 },
  { key: "exposure", min: 0.2, max: 3, step: 0.02 },
  { key: "sheen", min: 0, max: 2, step: 0.02 },
  { key: "gloss", min: 0, max: 2, step: 0.02 },
  { key: "glassOpacity", min: 0, max: 1, step: 0.01 },
  { key: "shellMidAlpha", min: 0, max: 1, step: 0.01 },
  { key: "shellEdgeAlpha", min: 0, max: 1, step: 0.01 },
  { key: "edgeSoftness", min: 0.005, max: 0.15, step: 0.005 },
  { key: "edgeGlow", min: 0, max: 1, step: 0.01 },
];

export const numericSpecByKey = new Map(numericSpecs.map((spec) => [spec.key, spec]));

export const colorKeys: readonly ColorKey[] = [
  "colorA",
  "colorB",
  "colorC",
  "colorD",
  "highlightColor",
  "shellInner",
  "shellMid",
  "shellEdge",
  "sheenColor",
  "specColor",
  "canvasColor",
  "glowColor",
];

export const compactPreviewStyles = new Set<StyleName>([
  "particleRibbon",
  "blueDrop",
  "violetEmber",
  "refractiveBlob",
  "chromaticMetal",
]);

export const presetThumbUrl: Record<StyleName, string> = {
  siri: "/presets/siri.png",
  voiceWave: "/presets/voiceWave.png",
  spectrum: "/presets/spectrum.png",
  aurora: "/presets/aurora.png",
  frost: "/presets/frost.png",
  plasma: "/presets/plasma.png",
  chrome: "/presets/chrome.png",
  opal: "/presets/opal.png",
  blueDrop: "/presets/blueDrop.png",
  violetEmber: "/presets/violetEmber.png",
  refractiveBlob: "/presets/refractiveBlob.png",
  particleRibbon: "/presets/particleRibbon.png",
  chromaticMetal: "/presets/chromaticMetal.png",
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function normalizeColor(value: string): string | null {
  return /^#[0-9a-f]{6}$/i.test(value) ? value.toUpperCase() : null;
}

export function limitSceneText(value: string): string {
  return Array.from(value).slice(0, maxSceneTextLength).join("");
}

export function isSliderEnabled(spec: NumericSpec, style: StyleName): boolean {
  return !spec.enabledStyles || spec.enabledStyles.includes(style);
}
