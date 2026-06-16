"use client";

import { usePersistentState } from "@/lib/usePersistentState";
import { CopyButton } from "@/components/playground/CopyButton";
import { InfoCallout } from "@/components/ui";

interface ShadowState {
  x: number;
  y: number;
  blur: number;
  spread: number;
  opacity: number;
  radius: number;
}

const DEFAULT: ShadowState = { x: 0, y: 12, blur: 32, spread: -6, opacity: 14, radius: 20 };

function Slider({
  label,
  value,
  min,
  max,
  unit = "px",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm mb-1">
        <span className="text-muted">{label}</span>
        <span className="font-semibold tabular-nums">
          {value}
          {unit}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-500"
      />
    </label>
  );
}

const PRESETS: { name: string; s: ShadowState }[] = [
  { name: "Soft", s: { x: 0, y: 4, blur: 12, spread: -2, opacity: 8, radius: 16 } },
  { name: "Card", s: { x: 0, y: 12, blur: 32, spread: -6, opacity: 14, radius: 20 } },
  { name: "Floating", s: { x: 0, y: 24, blur: 48, spread: -8, opacity: 22, radius: 24 } },
  { name: "Sharp", s: { x: 0, y: 2, blur: 0, spread: 0, opacity: 30, radius: 8 } },
];

export function ShadowPlayground() {
  const [s, setS] = usePersistentState<ShadowState>("shadow", DEFAULT);
  const set = (k: keyof ShadowState) => (v: number) => setS((p) => ({ ...p, [k]: v }));

  const shadow = `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px rgba(15, 23, 42, ${(
    s.opacity / 100
  ).toFixed(2)})`;
  const css = `box-shadow: ${shadow};\nborder-radius: ${s.radius}px;`;

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5 mb-1">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => setS(p.s)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full surface hover:border-brand-400 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>
        <Slider label="Offset X" value={s.x} min={-40} max={40} onChange={set("x")} />
        <Slider label="Offset Y" value={s.y} min={-40} max={60} onChange={set("y")} />
        <Slider label="Blur" value={s.blur} min={0} max={80} onChange={set("blur")} />
        <Slider label="Spread" value={s.spread} min={-30} max={30} onChange={set("spread")} />
        <Slider label="Opacity" value={s.opacity} min={0} max={60} unit="%" onChange={set("opacity")} />
        <Slider label="Border radius" value={s.radius} min={0} max={40} onChange={set("radius")} />
      </div>

      <div className="flex flex-col">
        <div className="flex-1 grid place-items-center rounded-2xl bg-gradient-to-br from-brand-500/5 to-violetx-500/5 p-8 min-h-[220px]">
          <div
            className="bg-[var(--bg-soft)] w-40 h-40 grid place-items-center text-sm font-semibold text-muted"
            style={{ boxShadow: shadow, borderRadius: s.radius }}
          >
            Preview
          </div>
        </div>
        <div className="mt-3 surface rounded-xl p-3 flex items-center justify-between gap-3">
          <code className="text-[11px] font-mono text-muted truncate">{css.replace(/\n/g, " ")}</code>
          <CopyButton value={css} />
        </div>
        <div className="mt-3">
          <InfoCallout tone="blue" title="Tips shadow premium">
            Shadow yang mahal biasanya halus: opacity rendah, blur besar, dan spread negatif agar bayangan tidak melebar kaku.
          </InfoCallout>
        </div>
      </div>
    </div>
  );
}
