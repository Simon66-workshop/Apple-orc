import {
  createOrbTransitionController,
  type OrbRenderTarget,
} from "./orb-states";
import type { OrbParams, StyleName } from "./presets";
import { siriAiLayout } from "./siri-ai";

export type FallbackRendererOptions = {
  canvas: HTMLCanvasElement;
  getTarget: () => OrbRenderTarget;
};

function hexRgb(hex: string): [number, number, number] {
  return [
    Number.parseInt(hex.slice(1, 3), 16),
    Number.parseInt(hex.slice(3, 5), 16),
    Number.parseInt(hex.slice(5, 7), 16),
  ];
}

function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mix(a: string, b: string, t: number): string {
  const ar = hexRgb(a);
  const br = hexRgb(b);
  const u = Math.min(1, Math.max(0, t));
  const r = Math.round(ar[0] + (br[0] - ar[0]) * u);
  const g = Math.round(ar[1] + (br[1] - ar[1]) * u);
  const bl = Math.round(ar[2] + (br[2] - ar[2]) * u);
  return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function palette(params: OrbParams, t: number): string {
  const x = ((t % 1) + 1) % 1;
  if (x < 0.25) return mix(params.colorA, params.colorB, x / 0.25);
  if (x < 0.5) return mix(params.colorB, params.colorC, (x - 0.25) / 0.25);
  if (x < 0.75) return mix(params.colorC, params.colorD, (x - 0.5) / 0.25);
  return mix(params.colorD, params.colorA, (x - 0.75) / 0.25);
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, w, h, radius);
    return;
  }
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function drawIridescentWave(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  halfW: number,
  amp: number,
  thickness: number,
  phase: number,
  params: OrbParams,
  extraY = 0,
  crossing = false,
): void {
  const breath = 0.92 + 0.08 * Math.sin(phase * 0.85);
  const liveAmp = amp * breath;
  const bands: Array<{
    color: string;
    offset: number;
    freq: number;
    lag: number;
    width: number;
    alpha: number;
  }> = [
    { color: params.colorD, offset: -0.7, freq: 1.82, lag: 0.28, width: 1.22, alpha: 0.62 },
    { color: params.colorC, offset: -0.34, freq: 2.12, lag: 1.02, width: 1.08, alpha: 0.86 },
    { color: params.highlightColor, offset: 0, freq: 2.02, lag: 0.12, width: 0.48, alpha: 1 },
    { color: params.colorB, offset: 0.32, freq: 2.26, lag: 2.05, width: 1.12, alpha: 0.88 },
    { color: params.colorA, offset: 0.68, freq: 1.9, lag: 2.68, width: 1.24, alpha: 0.78 },
  ];

  const passes = crossing ? [0, Math.PI] : [0];
  const steps = crossing ? 128 : 96;

  const sampleY = (
    nx: number,
    freq: number,
    lag: number,
    offset: number,
    pass: number,
  ): number => {
    const envelope = Math.pow(Math.max(0, Math.cos(Math.min(Math.abs(nx), 1) * Math.PI * 0.5)), 1.22);
    const sign = pass === 0 ? 1 : -0.82;
    return (
      Math.sin(nx * (2.02 + params.zoom * 2.6) * freq + phase * 2.08 + lag + pass) *
        liveAmp *
        envelope +
      Math.sin(nx * 4.7 - phase * 1.18 + lag * 0.42 + pass * 0.45) * liveAmp * 0.24 * envelope +
      offset * liveAmp * 0.88 * sign * envelope
    );
  };

  const fillRibbon = (
    freq: number,
    lag: number,
    offset: number,
    pass: number,
    halfThick: number,
    color: string,
    alpha: number,
  ) => {
    ctx.beginPath();
    for (let i = 0; i <= steps; i += 1) {
      const nx = (i / steps) * 2 - 1;
      const x = nx * halfW;
      const taper = 0.42 + 0.58 * Math.cos(nx * Math.PI * 0.5);
      const y = sampleY(nx, freq, lag, offset, pass) - halfThick * taper;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    for (let i = steps; i >= 0; i -= 1) {
      const nx = (i / steps) * 2 - 1;
      const x = nx * halfW;
      const taper = 0.42 + 0.58 * Math.cos(nx * Math.PI * 0.5);
      const y = sampleY(nx, freq, lag, offset, pass) + halfThick * taper;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    const fade = ctx.createLinearGradient(-halfW, 0, halfW, 0);
    fade.addColorStop(0, rgba(color, 0));
    fade.addColorStop(0.1, rgba(color, alpha * 0.4));
    fade.addColorStop(0.5, rgba(color, alpha));
    fade.addColorStop(0.9, rgba(color, alpha * 0.4));
    fade.addColorStop(1, rgba(color, 0));
    ctx.fillStyle = fade;
    ctx.fill();
  };

  ctx.save();
  ctx.translate(cx, cy + extraY);
  ctx.globalCompositeOperation = "lighter";

  ctx.filter = `blur(${Math.max(2.4, thickness * 0.55)}px)`;
  for (const pass of passes) {
    fillRibbon(2.05, 0.2, 0, pass, thickness * 1.65, params.glowColor, 0.28 * params.exposure);
    fillRibbon(2.12, 1.1, -0.2, pass, thickness * 1.2, params.colorC, 0.22 * params.exposure);
  }
  ctx.filter = "none";

  for (const pass of passes) {
    for (const layer of bands) {
      fillRibbon(
        layer.freq,
        layer.lag,
        layer.offset,
        pass,
        Math.max(1.1, thickness * layer.width * (pass === 0 ? 0.52 : 0.44)),
        layer.color,
        layer.alpha * (pass === 0 ? 1 : 0.82),
      );
    }
  }

  ctx.filter = `blur(${Math.max(1.1, thickness * 0.32)}px)`;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = rgba(params.highlightColor, 0.78);
  ctx.lineWidth = Math.max(1.1, thickness * 0.28);
  ctx.beginPath();
  for (let i = 0; i <= steps; i += 1) {
    const nx = (i / steps) * 2 - 1;
    const x = nx * halfW;
    const envelope = Math.pow(Math.max(0, Math.cos(Math.min(Math.abs(nx), 1) * Math.PI * 0.5)), 1.35);
    const y = Math.sin(nx * (2.12 + params.zoom * 2.4) + phase * 2.08) * liveAmp * envelope * 0.72;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.filter = "none";

  const bloom = ctx.createRadialGradient(0, 0, 1, 0, 0, Math.max(halfW * 0.42, liveAmp * 2.4));
  bloom.addColorStop(0, rgba(params.highlightColor, 0.22 * params.exposure));
  bloom.addColorStop(0.35, rgba(params.colorA, 0.08 * params.exposure));
  bloom.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = bloom;
  ctx.beginPath();
  ctx.ellipse(0, 0, halfW * 0.34, Math.max(liveAmp * 1.6, thickness * 1.8), 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawSiriAi(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  params: OrbParams,
): void {
  const layout = siriAiLayout(params.shapeMorph);
  const minDim = Math.min(width, height);
  const bodyW = Math.min(width * 0.94, minDim * layout.widthScale * params.radius);
  const bodyH = Math.min(height * 0.9, minDim * layout.heightScale * params.radius);
  const cx = width / 2;
  const cy = height / 2;
  const corner = Math.min(bodyW, bodyH) * 0.5 * layout.corner;
  const x = cx - bodyW / 2;
  const y = cy - bodyH / 2;
  const freeWave = layout.bodyAlpha < 0.18;
  const crossing = layout.waveAmp > 0.1;
  const waveHalf = freeWave ? width * 0.46 : bodyW * (layout.waveY > 0.6 ? 0.485 : 0.46);
  const amp = (freeWave ? height * 0.2 : Math.min(bodyH, bodyW) * layout.waveAmp) *
    (0.82 + params.ridgeAmt * 0.4);
  const thickness = freeWave
    ? Math.max(12, width * 0.036)
    : Math.min(bodyH, bodyW) * layout.waveThick * (0.92 + params.zoom * 0.35);
  const waveCy = cy + (freeWave ? 0 : (bodyH * 0.5) * layout.waveY);

  ctx.clearRect(0, 0, width, height);

  if (params.edgeGlow > 0.01 || layout.bodyAlpha < 0.45) {
    const glowR = Math.max(bodyW, bodyH) * (0.58 + params.edgeGlow * 0.45);
    const glow = ctx.createRadialGradient(cx, waveCy, 2, cx, waveCy, glowR);
    glow.addColorStop(0, rgba(params.glowColor, 0.3 * Math.max(params.edgeGlow, 0.16) * params.exposure));
    glow.addColorStop(0.4, rgba(params.colorB, 0.07 * params.exposure));
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  if (!freeWave) {
    ctx.save();
    ctx.globalAlpha = layout.bodyAlpha;
    roundRectPath(ctx, x, y, bodyW, bodyH, corner);
    ctx.clip();

    const base = ctx.createRadialGradient(
      cx,
      cy - bodyH * 0.2,
      Math.min(bodyW, bodyH) * 0.06,
      cx,
      cy,
      Math.max(bodyW, bodyH) * 0.76,
    );
    base.addColorStop(0, mix(params.colorA, "#07070e", 0.78 + params.shade * 0.14));
    base.addColorStop(0.5, mix(params.colorD, "#04040a", 0.84));
    base.addColorStop(1, "#020206");
    ctx.fillStyle = base;
    ctx.fillRect(x - 2, y - 2, bodyW + 4, bodyH + 4);

    const innerShade = ctx.createLinearGradient(cx, y, cx, y + bodyH);
    innerShade.addColorStop(0, "rgba(255,255,255,0.1)");
    innerShade.addColorStop(0.42, "rgba(0,0,0,0)");
    innerShade.addColorStop(1, "rgba(0,0,0,0.42)");
    ctx.fillStyle = innerShade;
    ctx.fillRect(x, y, bodyW, bodyH);

    drawIridescentWave(ctx, cx, waveCy, waveHalf, amp, thickness, phase, params, 0, crossing);

    if (layout.cutout > 0.04) {
      const cutW = bodyW * (0.28 + 0.14 * layout.cutout);
      const cutH = Math.max(9, bodyH * (0.12 + 0.1 * layout.cutout));
      const cutX = cx - cutW / 2;
      const cutY = y + bodyH * 0.08;
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      roundRectPath(ctx, cutX, cutY, cutW, cutH, cutH / 2);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();
      ctx.restore();

      ctx.save();
      roundRectPath(ctx, cutX, cutY, cutW, cutH, cutH / 2);
      ctx.fillStyle = "rgba(0,0,0,0.94)";
      ctx.fill();
      const lensX = cutX + cutW * 0.78;
      const lensY = cutY + cutH * 0.5;
      const lens = ctx.createRadialGradient(lensX, lensY, 0.4, lensX, lensY, cutH * 0.34);
      lens.addColorStop(0, "rgba(80,100,150,0.6)");
      lens.addColorStop(0.4, "rgba(24,28,48,0.45)");
      lens.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = lens;
      ctx.beginPath();
      ctx.arc(lensX, lensY, cutH * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();

    if (params.glassEnabled && layout.glass > 0.05) {
      ctx.save();
      ctx.globalAlpha = layout.glass * params.glassOpacity;
      roundRectPath(ctx, x, y, bodyW, bodyH, corner);
      ctx.clip();

      if (typeof ctx.createConicGradient === "function" && layout.corner > 0.72) {
        const conic = ctx.createConicGradient(-Math.PI * 0.55, cx, cy);
        conic.addColorStop(0, rgba(params.colorA, 0.28));
        conic.addColorStop(0.22, rgba(params.colorB, 0.2));
        conic.addColorStop(0.45, rgba(params.colorC, 0.26));
        conic.addColorStop(0.7, rgba(params.colorD, 0.2));
        conic.addColorStop(1, rgba(params.colorA, 0.28));
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = conic;
        ctx.lineWidth = Math.max(1.4, Math.min(bodyW, bodyH) * 0.018);
        roundRectPath(ctx, x + 1.2, y + 1.2, bodyW - 2.4, bodyH - 2.4, Math.max(0, corner - 1.2));
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      }

      const rim = ctx.createLinearGradient(x, y, x + bodyW, y + bodyH);
      rim.addColorStop(0, rgba(params.sheenColor, 0.22 + params.sheen * 0.14));
      rim.addColorStop(0.45, "rgba(255,255,255,0)");
      rim.addColorStop(1, rgba(params.shellEdge, 0.14 + params.shellEdgeAlpha * 0.2));
      ctx.fillStyle = rim;
      ctx.fillRect(x, y, bodyW, bodyH);

      ctx.globalCompositeOperation = "lighter";
      const spec = ctx.createRadialGradient(
        cx - bodyW * 0.22,
        cy - bodyH * 0.3,
        2,
        cx - bodyW * 0.16,
        cy - bodyH * 0.22,
        Math.min(bodyW, bodyH) * 0.44,
      );
      spec.addColorStop(0, rgba(params.sheenColor, 0.55));
      spec.addColorStop(0.38, rgba(params.specColor, 0.14));
      spec.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = spec;
      ctx.beginPath();
      ctx.ellipse(cx - bodyW * 0.16, cy - bodyH * 0.24, bodyW * 0.28, bodyH * 0.2, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.save();
    roundRectPath(ctx, x + 0.7, y + 0.7, bodyW - 1.4, bodyH - 1.4, Math.max(0, corner - 0.7));
    ctx.strokeStyle = rgba(params.highlightColor, 0.18 + params.sheen * 0.12);
    ctx.lineWidth = Math.max(1, Math.min(bodyW, bodyH) * (0.008 + params.edgeSoftness * 0.35));
    ctx.stroke();
    ctx.restore();
  } else {
    drawIridescentWave(
      ctx,
      cx,
      waveCy,
      Math.min(width * 0.48, Math.max(bodyW * 0.52, width * 0.42)),
      amp * 1.28,
      thickness * 1.28,
      phase,
      params,
      0,
      true,
    );
  }
}


function drawBand(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  phase: number,
  params: OrbParams,
): void {
  const amp = r * (0.1 + params.warp * 0.018) * (0.45 + params.ridgeAmt);
  const thickness = r * (0.16 + params.zoom * 0.22);
  const y0 = cy + Math.sin(phase * 1.15) * r * 0.1;
  ctx.save();
  ctx.translate(cx, y0);
  ctx.rotate(Math.sin(phase * 0.27) * 0.12 * (0.4 + params.contourDeform));
  ctx.filter = `blur(${Math.max(1.2, r * 0.055)}px)`;

  const grd = ctx.createLinearGradient(-r, 0, r, 0);
  grd.addColorStop(0, rgba(params.colorD, 0));
  grd.addColorStop(0.18, rgba(params.colorD, 0.85));
  grd.addColorStop(0.38, params.colorC);
  grd.addColorStop(0.52, params.colorB);
  grd.addColorStop(0.7, params.colorA);
  grd.addColorStop(0.88, rgba(params.colorD, 0.7));
  grd.addColorStop(1, rgba(params.colorD, 0));

  ctx.beginPath();
  ctx.moveTo(-r, 0);
  const steps = 48;
  for (let i = 0; i <= steps; i += 1) {
    const x = -r + (2 * r * i) / steps;
    const nx = x / r;
    const y =
      Math.sin(nx * (2.2 + params.zoom * 4) + phase * 2.1) * amp +
      Math.sin(nx * 5.4 - phase * 1.3) * amp * 0.28;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = grd;
  ctx.lineWidth = thickness;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.filter = `blur(${Math.max(0.6, r * 0.03)}px)`;
  ctx.globalCompositeOperation = "lighter";
  ctx.strokeStyle = rgba(params.highlightColor, 0.45);
  ctx.lineWidth = thickness * 0.28;
  ctx.stroke();
  ctx.restore();
}

function drawRibbon(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  phase: number,
  params: OrbParams,
): void {
  const layers = Math.max(2, Math.round(params.ribbonCount));
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (let layer = 0; layer < layers; layer += 1) {
    const t = phase * 0.7 + layer * 0.6;
    ctx.beginPath();
    const steps = 40;
    for (let i = 0; i <= steps; i += 1) {
      const u = i / steps;
      const theta = u * Math.PI * 2 + t * 0.4 + layer;
      const rad = r * (0.22 + 0.18 * Math.cos(theta * 2 + t));
      const x = cx + Math.cos(theta + layer * 0.4) * rad * 1.6;
      const y = cy + Math.sin(theta * 0.85 + t) * rad * 0.55;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = rgba(palette(params, layer * 0.18 + phase * 0.02), 0.55);
    ctx.lineWidth = Math.max(1.2, r * 0.045 * params.ribbonWidth * 2);
    ctx.lineCap = "round";
    ctx.filter = `blur(${Math.max(0.8, r * 0.02 * params.particleBloom)}px)`;
    ctx.stroke();
  }
  ctx.restore();
}

function drawMetal(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  phase: number,
  params: OrbParams,
): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((params.metalAngle * Math.PI) / 180);
  const bands = 10 + Math.round(params.bandDensity * 3);
  for (let i = 0; i < bands; i += 1) {
    const x = -r + (2 * r * i) / bands + Math.sin(phase + i) * r * 0.04;
    const g = ctx.createLinearGradient(x, -r, x + r * 0.18, r);
    g.addColorStop(0, rgba(params.colorA, 0.15));
    g.addColorStop(0.4, rgba(params.colorB, 0.55));
    g.addColorStop(0.7, rgba(params.shellMid, 0.4));
    g.addColorStop(1, rgba(params.colorD, 0.2));
    ctx.fillStyle = g;
    ctx.fillRect(x, -r, r * (0.08 + params.metalStretch * 0.1), r * 2);
  }
  ctx.restore();
}

function drawGlassShell(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  params: OrbParams,
): void {
  if (!params.glassEnabled) return;

  const rim = ctx.createRadialGradient(cx, cy, r * 0.55, cx, cy, r);
  rim.addColorStop(0, "rgba(255,255,255,0)");
  rim.addColorStop(0.72, rgba(params.shellInner, 0.02));
  rim.addColorStop(0.88, rgba(params.shellMid, 0.18 + params.sheen * 0.12));
  rim.addColorStop(1, rgba(params.shellEdge, 0.42 + params.shellEdgeAlpha * 0.35));
  ctx.fillStyle = rim;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  const spec = ctx.createRadialGradient(
    cx - r * 0.32,
    cy - r * 0.38,
    r * 0.02,
    cx - r * 0.22,
    cy - r * 0.32,
    r * 0.42,
  );
  spec.addColorStop(0, rgba(params.sheenColor, 0.55));
  spec.addColorStop(0.45, rgba(params.specColor, 0.12));
  spec.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = spec;
  ctx.beginPath();
  ctx.ellipse(cx - r * 0.18, cy - r * 0.28, r * 0.42, r * 0.28, -0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawOrb(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  params: OrbParams,
): void {
  if (params.style === "siriAi") {
    drawSiriAi(ctx, width, height, phase, params);
    return;
  }

  const cx = width / 2;
  const cy = height / 2;
  const r = Math.max(8, Math.min(width, height) * 0.5 * params.radius);

  ctx.clearRect(0, 0, width, height);

  if (params.edgeGlow > 0.01) {
    const glow = ctx.createRadialGradient(cx, cy, r * 0.7, cx, cy, r * (1.35 + params.edgeGlow));
    glow.addColorStop(0, rgba(params.glowColor, 0.22 * params.edgeGlow * params.exposure));
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();

  const base = ctx.createRadialGradient(cx, cy - r * 0.15, r * 0.08, cx, cy, r);
  base.addColorStop(0, mix(params.colorA, "#0a0a12", 0.55 + params.shade * 0.2));
  base.addColorStop(0.55, mix(params.colorD, "#050509", 0.72));
  base.addColorStop(1, "#030308");
  ctx.fillStyle = base;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);

  const style: StyleName = params.style;
  if (style === "particleRibbon") {
    drawRibbon(ctx, cx, cy, r, phase, params);
  } else if (style === "chromaticMetal" || style === "chrome") {
    drawMetal(ctx, cx, cy, r, phase, params);
    if (style === "chromaticMetal") {
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.filter = `blur(${r * 0.04}px)`;
      ctx.fillStyle = rgba(params.shellMid, 0.25 * params.chromaticShift);
      ctx.fillRect(cx - r + 3, cy - r, r * 2, r * 2);
      ctx.fillStyle = rgba(params.shellEdge, 0.2 * params.chromaticShift);
      ctx.fillRect(cx - r - 3, cy - r, r * 2, r * 2);
      ctx.restore();
    }
  } else {
    drawBand(ctx, cx, cy, r, phase, params);
    if (style === "aurora" || style === "plasma") {
      ctx.save();
      ctx.globalAlpha = 0.55;
      ctx.translate(0, r * 0.18);
      ctx.rotate(0.4);
      drawBand(ctx, cx, cy, r * 0.85, phase * 0.7 + 1.2, params);
      ctx.restore();
    }
  }

  ctx.restore();

  drawGlassShell(ctx, cx, cy, r, params);

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = rgba(params.highlightColor, 0.22 + params.sheen * 0.1);
  ctx.lineWidth = Math.max(1, r * (0.012 + params.edgeSoftness));
  ctx.stroke();
}

export function createFallbackRenderer({
  canvas,
  getTarget,
}: FallbackRendererOptions): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const context = ctx;

  let disposed = false;
  let animationFrame = 0;
  let lastFrameAt: number | null = null;
  let motionPhase = 0;
  const transition = createOrbTransitionController(getTarget());

  function frame(now: number): void {
    if (disposed) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const params = transition.sample(getTarget(), now);
    const frameDelta =
      lastFrameAt === null ? 0 : Math.min(0.1, Math.max(0, (now - lastFrameAt) / 1000));
    lastFrameAt = now;
    motionPhase += frameDelta * Math.max(params.speed, 0);
    drawOrb(context, width, height, motionPhase, params);
    animationFrame = requestAnimationFrame(frame);
  }

  animationFrame = requestAnimationFrame(frame);
  return () => {
    disposed = true;
    cancelAnimationFrame(animationFrame);
  };
}
