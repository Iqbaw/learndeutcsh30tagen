"use client";

import { usePersistentState } from "@/lib/usePersistentState";
import { CopyButton } from "@/components/playground/CopyButton";
import { InfoCallout } from "@/components/ui";

export function SpacingPlayground() {
  const [padding, setPadding] = usePersistentState<number>("space-padding", 24);
  const [gap, setGap] = usePersistentState<number>("space-gap", 16);
  const [grid, setGrid] = usePersistentState<boolean>("space-grid", true);

  const onGrid8 = padding % 8 === 0 && gap % 8 === 0;
  const onGrid4 = padding % 4 === 0 && gap % 4 === 0;

  const feedback = onGrid8
    ? {
        tone: "green" as const,
        title: "Selaras dengan grid 8pt",
        msg: "Spacing memakai kelipatan 8. Layout akan terasa rapi dan konsisten.",
      }
    : onGrid4
      ? {
          tone: "blue" as const,
          title: "Masih di grid 4pt",
          msg: "Kelipatan 4 boleh untuk penyesuaian halus. Untuk ritme utama, usahakan kelipatan 8.",
        }
      : {
          tone: "amber" as const,
          title: "Spacing di luar sistem",
          msg: "Nilai ini bukan kelipatan 4/8. Mata akan merasa 'sedikit aneh'. Bulatkan ke 8 terdekat.",
        };

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="space-y-4">
        <label className="block">
          <span className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted">Padding kartu</span>
            <span className="font-semibold tabular-nums">{padding}px</span>
          </span>
          <input
            type="range"
            min={4}
            max={48}
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full accent-brand-500"
          />
        </label>
        <label className="block">
          <span className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted">Jarak antar elemen</span>
            <span className="font-semibold tabular-nums">{gap}px</span>
          </span>
          <input
            type="range"
            min={2}
            max={40}
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full accent-brand-500"
          />
        </label>
        <button
          onClick={() => setGrid((g) => !g)}
          className={`text-sm font-medium px-4 py-2 rounded-xl border transition-colors ${
            grid ? "border-brand-400 text-brand-500 bg-brand-500/5" : "border-[var(--border)] text-muted"
          }`}
        >
          {grid ? "Sembunyikan grid 8pt" : "Tampilkan grid 8pt"}
        </button>
        <InfoCallout tone={feedback.tone} title={feedback.title}>
          {feedback.msg}
        </InfoCallout>
        <CopyButton
          value={`padding: ${padding}px;\ngap: ${gap}px;`}
          label="Salin CSS spacing"
        />
      </div>

      <div className="surface rounded-2xl p-6 grid place-items-center">
        <div
          className="relative rounded-2xl bg-gradient-to-br from-brand-500 to-violetx-600 text-white w-full max-w-xs"
          style={{
            padding,
            backgroundImage: grid
              ? "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)"
              : undefined,
            backgroundSize: "8px 8px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap }}>
            <div className="h-3 w-2/3 rounded bg-white/90" />
            <div className="h-2 w-full rounded bg-white/50" />
            <div className="h-2 w-5/6 rounded bg-white/50" />
            <div className="h-7 w-28 rounded-lg bg-white/95 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
