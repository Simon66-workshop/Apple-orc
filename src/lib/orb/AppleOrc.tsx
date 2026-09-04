import { useMemo, useRef } from "react";

import { OrbCanvas } from "./OrbCanvas";
import {
  createPresetOrbStateConfiguration,
  defaultOrbActivationDuration,
  defaultOrbTransitionDuration,
  resolveOrbStateParams,
  type OrbStateName,
} from "./orb-states";
import { type OrbParams, type StyleName } from "./presets";
import { cn } from "@/lib/utils";

export type AppleOrcProps = {
  preset?: StyleName;
  state?: OrbStateName;
  size?: number;
  label?: string;
  params?: Partial<OrbParams>;
  className?: string;
  activationDuration?: number;
  transitionDuration?: number;
};

export function AppleOrc({
  preset = "siri",
  state = "thinking",
  size = 72,
  label,
  params,
  className,
  activationDuration = defaultOrbActivationDuration,
  transitionDuration = defaultOrbTransitionDuration,
}: AppleOrcProps) {
  const configuration = useMemo(() => {
    const next = createPresetOrbStateConfiguration(preset);
    if (!params) {
      return {
        ...next,
        activationDuration,
        transitionDuration,
      };
    }
    return {
      ...next,
      activationDuration,
      transitionDuration,
      shared: { ...next.shared, ...pickShared(params) },
      profiles: {
        idle: { ...next.profiles.idle, ...pickProfile(params) },
        thinking: { ...next.profiles.thinking, ...pickProfile(params) },
      },
    };
  }, [activationDuration, params, preset, transitionDuration]);

  const resolved = resolveOrbStateParams(configuration, state);
  const targetRef = useRef({
    state,
    params: resolved,
    activationDuration: configuration.activationDuration,
    transitionDuration: configuration.transitionDuration,
  });
  targetRef.current = {
    state,
    params: resolved,
    activationDuration: configuration.activationDuration,
    transitionDuration: configuration.transitionDuration,
  };

  const orb = (
    <OrbCanvas
      getTarget={() => targetRef.current}
      className="orc-widget-canvas"
      label={label ? `${label} orb` : "Apple Orc"}
    />
  );

  if (!label) {
    return (
      <div className={cn("orc-widget", className)} style={{ width: size, height: size }}>
        {orb}
      </div>
    );
  }

  return (
    <div className={cn("orc-scene-pill", className)}>
      <div className="orc-scene-pill-orb" style={{ width: size, height: size }}>
        {orb}
      </div>
      <span className="orc-scene-pill-text">{label}</span>
    </div>
  );
}

function pickShared(params: Partial<OrbParams>): Partial<OrbParams> {
  const next = { ...params };
  delete next.speed;
  delete next.contourDeform;
  delete next.zoom;
  delete next.warp;
  delete next.ridgeAmt;
  delete next.sharp;
  delete next.shade;
  delete next.exposure;
  delete next.edgeGlow;
  delete next.colorA;
  delete next.colorB;
  delete next.colorC;
  delete next.colorD;
  delete next.highlightColor;
  delete next.glowColor;
  return next;
}

function pickProfile(params: Partial<OrbParams>): Partial<OrbParams> {
  const keys = [
    "speed",
    "contourDeform",
    "bandDensity",
    "chromaticShift",
    "metalStretch",
    "metalEvolution",
    "metalRoughness",
    "metalDepth",
    "ribbonWidth",
    "ribbonTwist",
    "ribbonFold",
    "ribbonBreath",
    "zoom",
    "warp",
    "ridgeAmt",
    "sharp",
    "shade",
    "exposure",
    "edgeGlow",
    "colorA",
    "colorB",
    "colorC",
    "colorD",
    "highlightColor",
    "glowColor",
  ] as const;
  const next: Partial<OrbParams> = {};
  for (const key of keys) {
    if (params[key] !== undefined) {
      Object.assign(next, { [key]: params[key] });
    }
  }
  return next;
}
