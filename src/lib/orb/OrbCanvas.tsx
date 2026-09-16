import { useEffect, useRef, useState } from "react";
import { createFallbackRenderer } from "./fallback-renderer";
import { createOrbRenderer } from "./orb-renderer";
import type { OrbRenderTarget } from "./orb-states";
import { cn } from "@/lib/utils";
export type OrbCanvasStatus = "loading" | "gpu" | "fallback";
type OrbCanvasProps = { getTarget: () => OrbRenderTarget; className?: string; label?: string; onStatus?: (status: OrbCanvasStatus) => void };
export function OrbCanvas({ getTarget, className, label, onStatus }: OrbCanvasProps) {
  const gpuRef = useRef<HTMLCanvasElement | null>(null);
  const fallbackRef = useRef<HTMLCanvasElement | null>(null);
  const targetRef = useRef(getTarget);
  const [status, setStatus] = useState<OrbCanvasStatus>("loading");
  targetRef.current = getTarget;
  useEffect(() => { onStatus?.(status); }, [onStatus, status]);
  // Stop the hidden fallback loop once the GPU is ready; restart on GPU failure.
  useEffect(() => {
    const canvas = fallbackRef.current;
    if (!canvas || status === "gpu") return;
    return createFallbackRenderer({ canvas, getTarget: () => targetRef.current() });
  }, [status]);
  useEffect(() => {
    const canvas = gpuRef.current;
    if (!canvas || typeof navigator === "undefined" || !navigator.gpu) { setStatus("fallback"); return; }
    let cancelled = false;
    const dispose = createOrbRenderer({ canvas, getTarget: () => targetRef.current(),
      onError: () => { if (!cancelled) setStatus("fallback"); },
      onReady: () => { if (!cancelled) setStatus("gpu"); },
    });
    const timeout = window.setTimeout(() => setStatus(current => current === "loading" ? "fallback" : current), 2200);
    return () => { cancelled = true; window.clearTimeout(timeout); dispose(); };
  }, []);
  return <div className={cn("orc-canvas-stack", className)} data-renderer={status} role="img" aria-label={label ?? "Animated liquid glass orb"}>
    <canvas ref={fallbackRef} className="orc-canvas orc-canvas-fallback" aria-hidden="true"/>
    <canvas ref={gpuRef} className="orc-canvas orc-canvas-gpu" data-ready={status === "gpu" ? "true" : "false"} aria-hidden="true"/>
  </div>;
}
