import {
  createOrbTransitionController,
  type OrbRenderTarget,
} from "./orb-states";
import type { OrbParams, StyleName } from "./presets";
import { siriAiLayout, siriAiSilhouette } from "./siri-ai";

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

function bodyPath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  bodyW: number,
  bodyH: number,
  stadium: boolean,
): void {
  if (stadium) {
    roundRectPath(ctx, cx - bodyW / 2, cy - bodyH / 2, bodyW, bodyH, Math.min(bodyW, bodyH) / 2);
    return;
  }
  ctx.beginPath();
  ctx.ellipse(cx, cy, bodyW / 2, bodyH / 2, 0, 0, Math.PI * 2);
}

type WaveOpts = {
  crossing?: boolean;
  wrapSphere?: boolean;
  backWave?: boolean;
  soft?: number;
};

function filamentY(
  nx: number,
  amp: number,
  phase: number,
  pass: number,
  wrapSphere: boolean,
): { y: number; env: number } {
  const env = wrapSphere
    ? Math.sqrt(Math.max(0, 1 - nx * nx))
    : Math.pow(Math.max(0, Math.cos(Math.min(Math.abs(nx), 1) * Math.PI * 0.5)), 1.18);
  const y =
    Math.sin(nx * Math.PI * 2.18 + phase * 2.05 + pass) * amp * env +
    Math.sin(nx * Math.PI * 4.4 - phase * 1.18 + pass * 0.45) * amp * 0.16 * env;
  return { y, env };
}

function strokeFilament(
  ctx: CanvasRenderingContext2D,
  halfW: number,
  amp: number,
  phase: number,
  pass: number,
  wrapSphere: boolean,
  yOffset: number,
  steps: number,
): void {
  ctx.beginPath();
  for (let i = 0; i <= steps; i += 1) {
    const nx = (i / steps) * 2 - 1;
    const { y, env } = filamentY(nx, amp, phase, pass, wrapSphere);
    const x = nx * halfW;
    const py = y + yOffset * env;
    if (i === 0) ctx.moveTo(x, py);
    else ctx.lineTo(x, py);
  }
}

function alongStroke(ctx: CanvasRenderingContext2D, halfW: number, params: OrbParams, alpha: number) {
  const g = ctx.createLinearGradient(-halfW, 0, halfW, 0);
  g.addColorStop(0, rgba(params.colorD, 0));
  g.addColorStop(0.1, rgba(params.colorA, alpha * 0.45));
  g.addColorStop(0.28, rgba(params.highlightColor, alpha));
  g.addColorStop(0.48, rgba(params.colorB, alpha * 0.9));
  g.addColorStop(0.68, rgba(params.colorC, alpha * 0.75));
  g.addColorStop(0.86, rgba(params.colorD, alpha * 0.45));
  g.addColorStop(1, rgba(params.colorD, 0));
  return g;
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
  opts: WaveOpts = {},
): void {
  const crossing = opts.crossing ?? false;
  const wrapSphere = opts.wrapSphere ?? false;
  const backWave = opts.backWave ?? false;
  const soft = opts.soft ?? 0.12;
  const breath = 0.94 + 0.06 * Math.sin(phase * 0.8);
  const liveAmp = amp * breath;
  const core = Math.max(1.4, thickness);
  const steps = crossing ? 160 : 120;
  const passes = crossing ? [0, Math.PI] : wrapSphere ? [0, 0.58] : [0];

  ctx.save();
  ctx.translate(cx, cy + extraY);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.globalCompositeOperation = "lighter";

  if (backWave) {
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.filter = `blur(${Math.max(1.2, core * 0.8)}px)`;
    ctx.strokeStyle = alongStroke(ctx, halfW, params, 0.55);
    ctx.lineWidth = core * 1.1;
    strokeFilament(ctx, halfW, liveAmp * 0.42, phase + 0.7, Math.PI, wrapSphere, 0, 80);
    ctx.stroke();
    ctx.restore();
  }

  ctx.filter = `blur(${Math.max(2.2, core * (1.6 + soft * 2.2))}px)`;
  for (const pass of passes) {
    const passAmp = wrapSphere && pass !== 0 ? liveAmp * 0.72 : liveAmp;
    ctx.strokeStyle = rgba(params.highlightColor, 0.5 * params.exposure);
    ctx.lineWidth = core * (2.4 + soft);
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, 0, steps);
    ctx.stroke();
  }
  ctx.filter = "none";

  for (const pass of passes) {
    const passAmp = wrapSphere && pass !== 0 ? liveAmp * 0.72 : liveAmp;
    const fringe = core * (1.15 + soft * 0.4);
    ctx.strokeStyle = alongStroke(ctx, halfW, params, 0.55);
    ctx.lineWidth = fringe;
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, core * 0.55, steps);
    ctx.stroke();

    ctx.strokeStyle = rgba(params.colorC, 0.5);
    ctx.lineWidth = fringe * 0.85;
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, -core * 0.45, steps);
    ctx.stroke();

    ctx.strokeStyle = rgba(params.colorB, 0.55);
    ctx.lineWidth = fringe * 0.8;
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, core * 0.7, steps);
    ctx.stroke();

    ctx.strokeStyle = alongStroke(ctx, halfW, params, 1);
    ctx.lineWidth = core * 0.95;
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, 0, steps);
    ctx.stroke();

    ctx.strokeStyle = rgba(params.highlightColor, 0.95);
    ctx.lineWidth = Math.max(1, core * 0.42);
    strokeFilament(ctx, halfW, passAmp, phase, pass, wrapSphere, 0, steps);
    ctx.stroke();
  }

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
  const squash = 1 + params.contourDeform * 0.42;
  const breath = 1 + 0.01 * Math.sin(phase * 0.62);
  const bodyW = Math.min(width * 0.94, minDim * layout.widthScale * params.radius) * squash * breath;
  const bodyH =
    Math.min(height * 0.9, minDim * layout.heightScale * params.radius) / Math.sqrt(squash) / breath;
  const cx = width / 2;
  const cy = height / 2;
  const stadium = siriAiSilhouette(layout) === "stadium";
  const freeWave = layout.bodyAlpha < 0.18;
  const wrapSphere = !freeWave && !stadium;
  const crossing = freeWave || layout.waveAmp > 0.2;
  const waveHalf = freeWave ? width * 0.46 : bodyW * 0.46;
  const amp =
    (freeWave ? height * 0.18 : Math.min(bodyH, bodyW) * layout.waveAmp) *
    (0.85 + params.ridgeAmt * 0.3);
  const thickness = freeWave
    ? Math.max(2.4, width * 0.007)
    : Math.min(bodyH, bodyW) * layout.waveThick * (0.9 + params.zoom * 0.25);
  const waveCy = cy + (freeWave ? 0 : bodyH * 0.5 * layout.waveY);
  const rimScale = Math.min(bodyW, bodyH);

  ctx.clearRect(0, 0, width, height);

  if (params.edgeGlow > 0.01 || freeWave) {
    const glowR = Math.max(bodyW, bodyH) * (0.55 + params.edgeGlow * 0.4);
    const glow = ctx.createRadialGradient(cx, waveCy, 2, cx, waveCy, glowR);
    glow.addColorStop(0, rgba(params.glowColor, 0.18 * Math.max(params.edgeGlow, 0.12) * params.exposure));
    glow.addColorStop(0.45, rgba(params.colorB, 0.04 * params.exposure));
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  if (freeWave) {
    drawIridescentWave(ctx, cx, waveCy, waveHalf, amp, thickness, phase, params, 0, {
      crossing: true,
      wrapSphere: false,
      backWave: false,
      soft: layout.waveSoft,
    });
    return;
  }

  if (stadium) {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.filter = `blur(${Math.max(3, rimScale * 0.035)}px)`;
    ctx.strokeStyle = rgba(params.highlightColor, 0.5 * layout.glass);
    ctx.lineWidth = Math.max(2.4, rimScale * 0.04);
    bodyPath(ctx, cx, cy, bodyW, bodyH, true);
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  ctx.globalAlpha = layout.bodyAlpha;
  bodyPath(ctx, cx, cy, bodyW, bodyH, stadium);
  ctx.clip();

  const base = ctx.createRadialGradient(
    cx - bodyW * 0.12,
    cy - bodyH * 0.28,
    rimScale * 0.04,
    cx,
    cy + bodyH * 0.08,
    Math.max(bodyW, bodyH) * 0.78,
  );
  base.addColorStop(0, mix("#1a1c28", params.colorA, 0.08));
  base.addColorStop(0.35, mix("#09090f", params.colorD, 0.06));
  base.addColorStop(1, "#030308");
  ctx.fillStyle = base;
  ctx.fillRect(cx - bodyW, cy - bodyH, bodyW * 2, bodyH * 2);

  const shade = ctx.createLinearGradient(cx, cy - bodyH / 2, cx, cy + bodyH / 2);
  shade.addColorStop(0, "rgba(255,255,255,0.1)");
  shade.addColorStop(0.4, "rgba(0,0,0,0)");
  shade.addColorStop(1, "rgba(0,0,0,0.5)");
  ctx.fillStyle = shade;
  ctx.fillRect(cx - bodyW, cy - bodyH, bodyW * 2, bodyH * 2);

  drawIridescentWave(ctx, cx, waveCy, waveHalf, amp, thickness, phase, params, 0, {
    crossing: false,
    wrapSphere,
    backWave: wrapSphere,
    soft: layout.waveSoft,
  });
  ctx.restore();

  if (params.glassEnabled && layout.glass > 0.05) {
    ctx.save();
    ctx.globalAlpha = layout.glass * Math.max(params.glassOpacity, 0.28);
    bodyPath(ctx, cx, cy, bodyW, bodyH, stadium);
    ctx.clip();

    ctx.globalCompositeOperation = "lighter";
    const spec = ctx.createRadialGradient(
      cx - bodyW * 0.26,
      cy - bodyH * 0.34,
      1,
      cx - bodyW * 0.18,
      cy - bodyH * 0.24,
      rimScale * 0.42,
    );
    spec.addColorStop(0, rgba(params.sheenColor, 0.7));
    spec.addColorStop(0.28, rgba(params.specColor, 0.16));
    spec.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = spec;
    ctx.beginPath();
    ctx.ellipse(cx - bodyW * 0.2, cy - bodyH * 0.28, bodyW * 0.22, bodyH * 0.16, -0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.save();
  const rimW = stadium ? Math.max(1.6, rimScale * 0.014) : Math.max(1.1, rimScale * 0.0075);
  const rimGrad = ctx.createLinearGradient(
    cx - bodyW * 0.4,
    cy - bodyH * 0.5,
    cx + bodyW * 0.4,
    cy + bodyH * 0.45,
  );
  rimGrad.addColorStop(0, rgba(params.highlightColor, stadium ? 0.55 : 0.38));
  rimGrad.addColorStop(0.45, rgba(params.colorB, stadium ? 0.22 : 0.1));
  rimGrad.addColorStop(1, rgba(params.shellEdge, 0.12));
  ctx.strokeStyle = rimGrad;
  ctx.lineWidth = rimW;
  bodyPath(ctx, cx, cy, bodyW - rimW, bodyH - rimW, stadium);
  ctx.stroke();
  ctx.restore();
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
