export const siriAiShapeNames = ["sphere", "island", "wave", "capsule"] as const;
export type SiriAiShapeName = (typeof siriAiShapeNames)[number];

export const siriAiShapeMorph: Record<SiriAiShapeName, number> = {
  sphere: 0,
  island: 0.34,
  wave: 0.67,
  capsule: 1,
};

export const siriAiShapeLabels: Record<"zh" | "en", Record<SiriAiShapeName, string>> = {
  zh: {
    sphere: "圆球",
    island: "灵动岛",
    wave: "波纹",
    capsule: "胶囊",
  },
  en: {
    sphere: "Sphere",
    island: "Island",
    wave: "Wave",
    capsule: "Capsule",
  },
};

export type SiriAiLayout = {
  shape: SiriAiShapeName;
  widthScale: number;
  heightScale: number;
  /** Offset from center as a fraction of half-height. 0 = equator, 1 = bottom edge. */
  waveY: number;
  waveAmp: number;
  waveThick: number;
  bodyAlpha: number;
  glass: number;
  cutout: number;
  corner: number;
};

const layoutKeys: Array<SiriAiLayout & { morph: number }> = [
  {
    shape: "sphere",
    morph: 0,
    widthScale: 1,
    heightScale: 1,
    waveY: 0,
    waveAmp: 0.17,
    waveThick: 0.12,
    bodyAlpha: 1,
    glass: 1,
    cutout: 0,
    corner: 1,
  },
  {
    shape: "island",
    morph: 0.34,
    widthScale: 1.26,
    heightScale: 0.8,
    waveY: 0.4,
    waveAmp: 0.13,
    waveThick: 0.1,
    bodyAlpha: 1,
    glass: 1,
    cutout: 0.94,
    corner: 0.98,
  },
  {
    shape: "wave",
    morph: 0.67,
    widthScale: 2.1,
    heightScale: 0.46,
    waveY: 0,
    waveAmp: 0.44,
    waveThick: 0.18,
    bodyAlpha: 0,
    glass: 0,
    cutout: 0,
    corner: 0.5,
  },
  {
    shape: "capsule",
    morph: 1,
    widthScale: 1.92,
    heightScale: 0.94,
    waveY: 0.84,
    waveAmp: 0.065,
    waveThick: 0.048,
    bodyAlpha: 1,
    glass: 0.98,
    cutout: 0.3,
    corner: 0.32,
  },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smooth01(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

/** Apple-like ease-out used for shape morph (approx cubic-bezier(0.16, 1, 0.3, 1)). */
export function siriAiMorphEase(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return 1 - (1 - x) ** 4;
}

export function siriAiShapeFromMorph(morph: number): SiriAiShapeName {
  if (morph < 0.17) return "sphere";
  if (morph < 0.505) return "island";
  if (morph < 0.835) return "wave";
  return "capsule";
}

export function siriAiLayout(morph: number): SiriAiLayout {
  const m = Math.min(1, Math.max(0, morph));
  let from = layoutKeys[0];
  let to = layoutKeys[1];
  for (let i = 0; i < layoutKeys.length - 1; i += 1) {
    if (m >= layoutKeys[i].morph && m <= layoutKeys[i + 1].morph) {
      from = layoutKeys[i];
      to = layoutKeys[i + 1];
      break;
    }
    if (m > layoutKeys[i + 1].morph) {
      from = layoutKeys[i + 1];
      to = layoutKeys[Math.min(i + 2, layoutKeys.length - 1)];
    }
  }
  const span = Math.max(to.morph - from.morph, 0.0001);
  const t = smooth01((m - from.morph) / span);
  return {
    shape: t < 0.5 ? from.shape : to.shape,
    widthScale: lerp(from.widthScale, to.widthScale, t),
    heightScale: lerp(from.heightScale, to.heightScale, t),
    waveY: lerp(from.waveY, to.waveY, t),
    waveAmp: lerp(from.waveAmp, to.waveAmp, t),
    waveThick: lerp(from.waveThick, to.waveThick, t),
    bodyAlpha: lerp(from.bodyAlpha, to.bodyAlpha, t),
    glass: lerp(from.glass, to.glass, t),
    cutout: lerp(from.cutout, to.cutout, t),
    corner: lerp(from.corner, to.corner, t),
  };
}

export function siriAiFrameVars(morph: number): {
  width: string;
  height: string;
  radius: string;
  aspect: string;
} {
  const layout = siriAiLayout(morph);
  const widthPct = Math.min(100, 58 * layout.widthScale);
  return {
    width: `${widthPct}%`,
    height: "auto",
    aspect: `${layout.widthScale} / ${layout.heightScale}`,
    radius: `${Math.max(30, 48 * layout.corner)}%`,
  };
}
