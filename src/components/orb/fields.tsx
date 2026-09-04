import * as Slider from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function GlassSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <section className="orc-section">
      <button
        type="button"
        className="orc-section-head"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown className={cn("orc-section-chevron", open && "is-open")} />
      </button>
      {open ? <div className="orc-section-body">{children}</div> : null}
    </section>
  );
}

export function ParamSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unit,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  unit?: string;
}) {
  const decimals = step < 0.01 ? 3 : step < 1 ? 2 : 0;
  const display = `${value.toFixed(decimals)}${unit ?? ""}`;

  return (
    <div className="orc-slider">
      <div className="orc-slider-head">
        <span>{label}</span>
        <span className="orc-slider-value">{display}</span>
      </div>
      <Slider.Root
        className="orc-slider-root"
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(next) => onChange(next[0] ?? min)}
      >
        <Slider.Track className="orc-slider-track">
          <Slider.Range className="orc-slider-range" />
        </Slider.Track>
        <Slider.Thumb className="orc-slider-thumb" aria-label={label} />
      </Slider.Root>
    </div>
  );
}

export function ColorSwatch({
  label,
  hex,
  onChange,
}: {
  label: string;
  hex: string;
  onChange: (hex: string) => void;
}) {
  return (
    <label className="orc-swatch">
      <input
        type="color"
        value={hex.toLowerCase()}
        aria-label={label}
        onChange={(event) => onChange(event.target.value.toUpperCase())}
      />
      <span className="orc-swatch-meta">
        <span className="orc-swatch-label">{label}</span>
        <span className="orc-swatch-hex">{hex}</span>
      </span>
    </label>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  ariaLabel,
  onChange,
}: {
  value: T;
  options: readonly { label: string; value: T }[];
  ariaLabel: string;
  onChange: (value: T) => void;
}) {
  return (
    <div className="orc-segmented" role="radiogroup" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          className={cn("orc-segment", value === option.value && "is-active")}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="orc-toggle">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={cn("orc-switch", checked && "is-on")}
        onClick={() => onChange(!checked)}
      >
        <span className="orc-switch-knob" />
      </button>
    </label>
  );
}
