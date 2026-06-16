"use client";

import { usePersistentState } from "@/lib/usePersistentState";
import { hexToRgb, readableText } from "@/lib/color";
import { CopyButton } from "@/components/playground/CopyButton";

interface GradState {
  c1: string;
  c2: string;
  angle: number;
}

const DEFAULT: GradState = { c1: "#3461ff", c2: "#8b5cf6", angle: 135 };

const PRESETS: GradState[] = [
  { c1: "#3461ff", c2: "#8b5cf6", angle: 135 },
  { c1: "#06b6d4", c2: "#3461ff", angle: 120 },
  { c1: "#8b5cf6", c2: "#ec4899", angle: 135 },
  { c1: "#16a34a", c2: "#06b6d4", angle: 110 },
  { c1: "#f59e0b", c2: "#ef4444", angle: 130 },
];

export function GradientBuilder() {
  const [g, setG] = usePersistentState<GradState>("gradient", DEFAULT);
  const valid = Boolean(hexToRgb(g.c1) && hexToRgb(g.c2));
  const gradient = `linear-gradient(${g.angle}deg, ${g.c1}, ${g.c2})`;
  const css = `background: ${gradient};`;
  const txt = readableText(g.c1);

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => setG(p)}
              className="w-10 h-10 rounded-lg ring-2 ring-transparent hover:ring-brand-400 transition"
              style={{ background: `linear-gradient(${p.angle}deg, ${p.c1}, ${p.c2})` }}
              aria-label={`Preset gradient ${i + 1}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {(["c1", "c2"] as const).map((key, i) => (
            <label key={key} className="block">
              <span className="text-sm text-muted">Warna {i + 1}</span>
              <div className="mt-1 flex items-center gap-2 surface rounded-xl p-2">
                <input
                  type="color"
                  value={hexToRgb(g[key]) ? g[key] : "#000000"}
                  onChange={(e) => setG((p) => ({ ...p, [key]: e.target.value }))}
                  className="w-9 h-9 rounded-lg cursor-pointer bg-transparent"
                  aria-label={`Pilih warna ${i + 1}`}
                />
                <input
                  value={g[key]}
                  onChange={(e) => setG((p) => ({ ...p, [key]: e.target.value }))}
                  className="w-full bg-transparent outline-none text-sm font-mono uppercase"
                  aria-label={`Hex warna ${i + 1}`}
                />
              </div>
            </label>
          ))}
        </div>
        <label className="block">
          <span className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted">Sudut</span>
            <span className="font-semibold tabular-nums">{g.angle}°</span>
          </span>
          <input
            type="range"
            min={0}
            max={360}
            value={g.angle}
            onChange={(e) => setG((p) => ({ ...p, angle: Number(e.target.value) }))}
            className="w-full accent-brand-500"
          />
        </label>
        <div className="surface rounded-xl p-3 flex items-center justify-between gap-3">
          <code className="text-[11px] font-mono text-muted truncate">{gradient}</code>
          <CopyButton value={css} />
        </div>
      </div>

      <div
        className="rounded-2xl min-h-[220px] grid place-items-center p-6 text-center"
        style={{ background: valid ? gradient : "#888", color: txt }}
      >
        <div>
          <p className="text-xl font-bold">UX Mastery Lab</p>
          <p className="text-sm opacity-90 mt-1">Gradient untuk hero, kartu, atau tombol.</p>
        </div>
      </div>
    </div>
  );
}
