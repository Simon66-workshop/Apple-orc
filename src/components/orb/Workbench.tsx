import {
  Code2,
  Copy,
  Link2,
  RotateCcw,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { GlassCard } from "@/components/glass/GlassCard";
import { ColorSwatch, GlassSection, ParamSlider, Segmented, ToggleRow } from "@/components/orb/fields";
import {
  activationDurationRange,
  clamp,
  compactPreviewStyles,
  defaultSceneText,
  hashSyncDelayMs,
  isSliderEnabled,
  limitSceneText,
  numericSpecByKey,
  numericSpecs,
  presetThumbUrl,
  transitionDurationRange,
  type PreviewMode,
} from "@/lib/orb/control-specs";
import { createExportBundle, resolvePublicBase, type ExportKind } from "@/lib/orb/embed";
import {
  colorLabels,
  localeOptions,
  numericLabels,
  styleLabels,
  uiCopy,
  type ColorKey,
  type Locale,
  type NumericKey,
} from "@/lib/orb/editor-i18n";
import {
  buildShareHash,
  persistLocale,
  readEditorStateFromHash,
  readInitialLocale,
  readPreviewModeFromHash,
  readSceneTextFromHash,
  writeHash,
  type OrbEditorState,
} from "@/lib/orb/hash";
import { OrbCanvas, type OrbCanvasStatus } from "@/lib/orb/OrbCanvas";
import {
  createPresetOrbStateConfiguration,
  defaultOrbState,
  resolveOrbStateParams,
  updateOrbStateParam,
  type OrbStateName,
} from "@/lib/orb/orb-states";
import { effectDefaults, styleNames, type OrbParams, type StyleName } from "@/lib/orb/presets";
import { extraCopy } from "@/lib/orb/workbench-copy";
import { cn } from "@/lib/utils";

const glassColors: ColorKey[] = ["shellInner", "shellMid", "shellEdge", "sheenColor", "specColor"];
const bodyColors: ColorKey[] = ["colorA", "colorB", "colorC", "colorD", "highlightColor", "canvasColor"];

export function Workbench() {
  const [locale, setLocale] = useState<Locale>("en");
  const [editorState, setEditorState] = useState<OrbEditorState>(() => ({
    configuration: createPresetOrbStateConfiguration(effectDefaults.style),
    activeState: defaultOrbState,
  }));
  const [previewMode, setPreviewMode] = useState<PreviewMode>("orb");
  const [sceneText, setSceneText] = useState(defaultSceneText);
  const [previewScale, setPreviewScale] = useState(1);
  const [codeOpen, setCodeOpen] = useState(false);
  const [codeTab, setCodeTab] = useState<ExportKind>("iframe");
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState<OrbCanvasStatus>("loading");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    scene: true,
    state: true,
    motion: true,
    colors: false,
    shape: false,
    glass: true,
    edge: true,
  });
  const stageRef = useRef<HTMLElement | null>(null);
  const copy = uiCopy[locale];
  const extra = extraCopy[locale];

  const params = resolveOrbStateParams(editorState.configuration, editorState.activeState);
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

  useEffect(() => {
    setLocale(readInitialLocale());
    setEditorState(readEditorStateFromHash());
    setPreviewMode(readPreviewModeFromHash());
    setSceneText(readSceneTextFromHash());
  }, []);

  useEffect(() => {
    persistLocale(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    }
  }, [locale]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      writeHash(editorState, previewMode, sceneText);
    }, hashSyncDelayMs);
    return () => window.clearTimeout(timeout);
  }, [editorState, previewMode, sceneText]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const onWheel = (event: WheelEvent) => {
      if (event.target instanceof Element && event.target.closest("[data-stage-controls]")) {
        return;
      }
      event.preventDefault();
      const delta = clamp(-event.deltaY * 0.001, -0.1, 0.1);
      setPreviewScale((current) => Math.round(clamp(current + delta, 0.6, 1.6) * 100) / 100);
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, []);

  const setParam = useCallback(<Key extends keyof OrbParams>(key: Key, value: OrbParams[Key]) => {
    setEditorState((current) => ({
      ...current,
      configuration: updateOrbStateParam(current.configuration, current.activeState, key, value),
    }));
  }, []);

  const applyStyle = useCallback((style: StyleName) => {
    setEditorState((current) => ({
      activeState: current.activeState,
      configuration: {
        ...createPresetOrbStateConfiguration(style),
        activationDuration: current.configuration.activationDuration,
        transitionDuration: current.configuration.transitionDuration,
      },
    }));
  }, []);

  const resetAll = useCallback(() => {
    setEditorState({
      activeState: defaultOrbState,
      configuration: createPresetOrbStateConfiguration(effectDefaults.style),
    });
    setSceneText(defaultSceneText);
    setPreviewScale(1);
  }, []);

  const hash = useMemo(
    () => buildShareHash(editorState, previewMode, sceneText),
    [editorState, previewMode, sceneText],
  );

  const origin =
    typeof window === "undefined"
      ? ""
      : resolvePublicBase(window.location.origin, import.meta.env.BASE_URL);
  const bundle = useMemo(
    () => createExportBundle(editorState, origin, hash, previewMode, sceneText),
    [editorState, hash, origin, previewMode, sceneText],
  );

  const copyText = useCallback(async (value: string, token: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(token);
    } catch {
      setCopied("error");
    }
    window.setTimeout(() => setCopied(null), 1600);
  }, []);

  function slider(key: NumericKey) {
    const spec = numericSpecByKey.get(key);
    if (!spec || !isSliderEnabled(spec, params.style)) return null;
    return (
      <ParamSlider
        key={key}
        label={numericLabels[locale][key]}
        value={params[key]}
        min={spec.min}
        max={spec.max}
        step={spec.step}
        onChange={(value) => setParam(key, value)}
      />
    );
  }

  function swatch(key: ColorKey) {
    return (
      <ColorSwatch
        key={key}
        label={colorLabels[locale][key]}
        hex={params[key]}
        onChange={(hex) => setParam(key, hex)}
      />
    );
  }

  const toggleSection = (key: string) => () => {
    setOpenSections((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className="orc-app">
      <div className="orc-bg" aria-hidden="true" />

      <aside className="orc-rail orc-rail-left">
        <GlassCard sheen={false} radius="1.5rem" padding="0.9rem" className="orc-panel">
          <div className="orc-panel-title">{copy.presets}</div>
          <div className="orc-preset-grid" role="list">
            {styleNames.map((style) => (
              <button
                key={style}
                type="button"
                role="listitem"
                aria-pressed={params.style === style}
                className={cn("orc-preset", params.style === style && "is-active")}
                onClick={() => applyStyle(style)}
                aria-label={styleLabels[locale][style]}
              >
                <img
                  src={presetThumbUrl[style]}
                  alt=""
                  className={cn(
                    "orc-preset-thumb",
                    compactPreviewStyles.has(style) && "is-compact",
                  )}
                />
                <span>{styleLabels[locale][style]}</span>
              </button>
            ))}
          </div>
        </GlassCard>
      </aside>

      <section
        ref={stageRef}
        className="orc-stage"
        data-preview-mode={previewMode}
        aria-label={previewMode === "scene" ? copy.scenePreview : copy.orbPreview}
      >
        <div className="orc-stage-top" data-stage-controls>
          <Segmented
            ariaLabel={copy.switchLanguage}
            value={locale}
            options={localeOptions}
            onChange={setLocale}
          />
          <Segmented
            ariaLabel={copy.switchPreviewMode}
            value={previewMode}
            options={[
              { label: copy.orbMode, value: "orb" },
              { label: copy.sceneMode, value: "scene" },
            ]}
            onChange={(value) => {
              setPreviewMode(value);
              setPreviewScale(1);
            }}
          />
        </div>

        <div
          className={cn("orc-preview", previewMode === "scene" && "is-scene")}
          style={{ transform: `scale(${previewScale})` }}
        >
          {previewMode === "scene" ? (
            <div className="orc-scene-pill">
              <div className="orc-scene-pill-orb">
                <OrbCanvas
                  getTarget={() => targetRef.current}
                  label={copy.animatedOrbPreview}
                  onStatus={setStatus}
                />
              </div>
              <span className="orc-scene-pill-text">{sceneText || "\u00a0"}</span>
            </div>
          ) : (
            <div className="orc-orb-frame">
              <OrbCanvas
                getTarget={() => targetRef.current}
                label={copy.animatedOrbPreview}
                onStatus={setStatus}
              />
            </div>
          )}
        </div>

        {status === "fallback" ? (
          <p className="orc-fallback-note">{extra.fallbackNote}</p>
        ) : null}

        <div className="orc-stage-bottom" data-stage-controls>
          <button type="button" className="orc-code-btn" onClick={() => setCodeOpen(true)}>
            <Code2 size={16} />
            {copy.copyCode}
          </button>
          <button
            type="button"
            className="orc-icon-btn"
            onClick={() => {
              const url = `${window.location.origin}${window.location.pathname}#${hash}`;
              void copyText(url, "link");
            }}
            aria-label={extra.shareLink}
          >
            <Link2 size={16} />
          </button>
        </div>
      </section>

      <aside className="orc-rail orc-rail-right">
        <GlassCard sheen={false} radius="1.5rem" padding="0.85rem" className="orc-panel orc-controls">
          <div className="orc-panel-title-row">
            <div className="orc-panel-title">{copy.orbControls}</div>
            <button type="button" className="orc-icon-btn" onClick={resetAll} aria-label={copy.resetControls}>
              <RotateCcw size={14} />
            </button>
          </div>
          <div className="orc-controls-scroll">
            {previewMode === "scene" ? (
              <GlassSection
                title={copy.sceneSection}
                open={openSections.scene}
                onToggle={toggleSection("scene")}
              >
                <label className="orc-field">
                  <span className="orc-field-label">
                    {copy.displayText}
                    <span>
                      {Array.from(sceneText).length}/20
                    </span>
                  </span>
                  <input
                    className="orc-text-input"
                    value={sceneText}
                    maxLength={40}
                    onChange={(event) => setSceneText(limitSceneText(event.target.value))}
                  />
                </label>
              </GlassSection>
            ) : null}

            <GlassSection
              title={copy.stateSection}
              open={openSections.state}
              onToggle={toggleSection("state")}
            >
              <Segmented
                ariaLabel={copy.switchOrbState}
                value={editorState.activeState}
                options={[
                  { label: copy.idleState, value: "idle" },
                  { label: copy.thinkingState, value: "thinking" },
                ]}
                onChange={(value) =>
                  setEditorState((current) => ({ ...current, activeState: value as OrbStateName }))
                }
              />
              <ParamSlider
                label={copy.activationDuration}
                value={editorState.configuration.activationDuration}
                min={activationDurationRange.min}
                max={activationDurationRange.max}
                step={activationDurationRange.step}
                unit="s"
                onChange={(value) =>
                  setEditorState((current) => ({
                    ...current,
                    configuration: { ...current.configuration, activationDuration: value },
                  }))
                }
              />
              <ParamSlider
                label={copy.transitionDuration}
                value={editorState.configuration.transitionDuration}
                min={transitionDurationRange.min}
                max={transitionDurationRange.max}
                step={transitionDurationRange.step}
                unit="s"
                onChange={(value) =>
                  setEditorState((current) => ({
                    ...current,
                    configuration: { ...current.configuration, transitionDuration: value },
                  }))
                }
              />
            </GlassSection>

            <GlassSection
              title={copy.motionSection}
              open={openSections.motion}
              onToggle={toggleSection("motion")}
            >
              {slider("speed")}
            </GlassSection>

            <GlassSection
              title={copy.colorsSection}
              open={openSections.colors}
              onToggle={toggleSection("colors")}
            >
              <div className="orc-swatch-grid">{bodyColors.map(swatch)}</div>
              {slider("shade")}
              {slider("exposure")}
            </GlassSection>

            <GlassSection
              title={copy.shapeSection}
              open={openSections.shape}
              onToggle={toggleSection("shape")}
            >
              {slider("radius")}
              {slider("contourDeform")}
              {slider("zoom")}
              {slider("warp")}
              {slider("ridgeAmt")}
              {slider("sharp")}
              {slider("metalDepth")}
              {slider("metalRoughness")}
              {slider("chromaticShift")}
              {slider("metalScale")}
              {slider("metalStretch")}
              {slider("metalAngle")}
              {slider("bandDensity")}
              {slider("metalOffset")}
              {slider("metalPhase")}
              {slider("metalEvolution")}
              {slider("particleDensity")}
              {slider("ribbonCount")}
              {slider("ribbonWidth")}
              {slider("ribbonTwist")}
              {slider("ribbonFold")}
              {slider("ribbonBreath")}
              {slider("particleSize")}
              {slider("particleBloom")}
            </GlassSection>

            <GlassSection
              title={copy.glassSection}
              open={openSections.glass}
              onToggle={toggleSection("glass")}
            >
              <ToggleRow
                label={copy.enableGlass}
                checked={params.glassEnabled}
                onChange={(checked) => setParam("glassEnabled", checked)}
              />
              {params.glassEnabled ? (
                <>
                  {slider("glassOpacity")}
                  {slider("sheen")}
                  {slider("gloss")}
                  {slider("shellMidAlpha")}
                  {slider("shellEdgeAlpha")}
                  <div className="orc-swatch-grid">{glassColors.map(swatch)}</div>
                </>
              ) : null}
            </GlassSection>

            <GlassSection
              title={copy.edgeSection}
              open={openSections.edge}
              onToggle={toggleSection("edge")}
            >
              {slider("edgeSoftness")}
              {slider("edgeGlow")}
              {swatch("glowColor")}
            </GlassSection>
          </div>
        </GlassCard>
      </aside>

      {codeOpen ? (
        <div className="orc-sheet-backdrop" role="presentation" onClick={() => setCodeOpen(false)}>
          <div
            className="orc-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="orc-copy-title"
            onClick={(event) => event.stopPropagation()}
          >
            <GlassCard sheen={false} radius="1.6rem" padding="1.1rem" className="orc-sheet-card">
              <div className="orc-sheet-head">
                <div>
                  <h2 id="orc-copy-title">{copy.copyCode}</h2>
                  <p>{extra.widgetHint}</p>
                </div>
                <button
                  type="button"
                  className="orc-icon-btn"
                  onClick={() => setCodeOpen(false)}
                  aria-label={copy.close}
                >
                  <X size={16} />
                </button>
              </div>
              <div className="orc-sheet-tabs">
                {(
                  [
                    ["iframe", extra.embedIframe],
                    ["react", extra.embedReact],
                    ["dropin", extra.embedDropin],
                    ["json", extra.embedJson],
                    ["web", copy.webCode],
                    ["swift", copy.swiftCode],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className={cn("orc-tab", codeTab === id && "is-active")}
                    onClick={() => setCodeTab(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <pre className="orc-code"><code>{bundle[codeTab]}</code></pre>
              <div className="orc-sheet-actions">
                <p className="orc-sheet-hint">{extra.hostApi}</p>
                <button
                  type="button"
                  className="orc-code-btn"
                  onClick={() => void copyText(bundle[codeTab], codeTab)}
                >
                  <Copy size={16} />
                  {copied === "error"
                    ? copy.copyFailed
                    : copied === codeTab
                      ? copy.copied
                      : copy.copyCode}
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      ) : null}

      {copied === "link" ? (
        <div className="orc-toast" role="status">
          {extra.linkCopied}
        </div>
      ) : null}
    </div>
  );
}
