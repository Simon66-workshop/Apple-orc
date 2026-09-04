import {
  createOrbTransitionController,
  type OrbRenderTarget,
} from "./orb-states";
import type { OrbParams, StyleName } from "./presets";

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
