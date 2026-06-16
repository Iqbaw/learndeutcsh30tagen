"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePersistentState } from "@/lib/usePersistentState";
import {
  generateScale,
  complementary,
  readableText,
  hexToRgb,
} from "@/lib/color";
import { CopyButton } from "@/components/playground/CopyButton";
import { InfoCallout } from "@/components/ui";
import { IconStar } from "@/components/icons";

const PRESETS = ["#3461ff", "#8b5cf6", "#06b6d4", "#16a34a", "#f59e0b", "#ef4444"];

function SwatchCell({ name, hex, idx }: { name: number; hex: string; idx: number }) {
  const txt = readableText(hex);
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.03 }}
      onClick={() => navigator.clipboard?.writeText(hex)}
      className="group relative h-16 sm:h-20 flex flex-col items-center justify-center transition-transform hover:scale-[1.04] hover:z-10 hover:rounded-lg hover:shadow-glow"
      style={{ background: hex, color: txt }}
      title={`Klik untuk salin ${hex}`}
    >
      <span className="text-[11px] font-bold">{name}</span>
      <span className="text-[10px] font-mono opacity-80 uppercase">{hex}</span>
      <span className="absolute inset-x-0 bottom-1 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
        klik = salin
      </span>
    </motion.button>
  );
}

export function PaletteGenerator() {
  const [base, setBase] = usePersistentState<string>("palette-base", "#3461ff");

  const valid = Boolean(hexToRgb(base));
  const scale = useMemo(() => (valid ? generateScale(base) : []), [base, valid]);
  const accent = useMemo(() => (valid ? complementary(base) : base), [base, valid]);
  const accentScale = useMemo(
    () => (valid ? generateScale(accent) : []),
    [accent, valid],
  );

  const cssVars = scale
    .map((s) => `  --color-${s.name}: ${s.hex};`)
    .join("\n");
  const css = `:root {\n${cssVars}\n  --color-accent: ${accent};\n}`;

  const find = (n: number) => scale.find((s) => s.name === n)?.hex ?? base;
  const bg = find(50);
  const surface = "#ffffff";
  const text = find(900);
  const muted = find(600);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-4">
        <label className="block">
          <span className="text-sm text-muted">Warna dasar (primary)</span>
          <div className="mt-1 flex items-center gap-2 surface rounded-xl p-2">
            <input
              type="color"
              value={valid ? base : "#3461ff"}
              onChange={(e) => setBase(e.target.value)}
              className="w-10 h-10 rounded-lg cursor-pointer bg-transparent"
              aria-label="Pilih warna dasar"
            />
            <input
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-28 bg-transparent outline-none text-sm font-mono uppercase"
              aria-label="Kode hex warna dasar"
            />
          </div>
        </label>
        <div>
          <span className="text-sm text-muted block mb-1">Preset cepat</span>
          <div className="flex gap-1.5">
            {PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => setBase(p)}
                className="w-7 h-7 rounded-lg ring-2 ring-transparent hover:ring-brand-400 transition"
                style={{ background: p }}
                aria-label={`Pakai warna ${p}`}
              />
            ))}
          </div>
        </div>
        <CopyButton value={css} label="Salin CSS variables" className="ml-auto" />
      </div>

      {!valid ? (
        <InfoCallout tone="amber" title="Kode warna belum valid">
          Masukkan hex yang benar, contoh #3461ff.
        </InfoCallout>
      ) : (
        <>
          <div>
            <p className="text-sm font-semibold mb-2">Primary scale (50–900)</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 rounded-xl overflow-hidden border border-[var(--border)]">
              {scale.map((s, i) => (
                <SwatchCell key={s.name} name={s.name} hex={s.hex} idx={i} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2 flex items-center gap-1.5">
              <IconStar width={14} height={14} className="text-cyanx-500" />
              Saran accent (komplementer)
            </p>
            <div className="grid grid-cols-5 sm:grid-cols-10 rounded-xl overflow-hidden border border-[var(--border)]">
              {accentScale.map((s, i) => (
                <SwatchCell key={s.name} name={s.name} hex={s.hex} idx={i} />
              ))}
            </div>
          </div>

          {/* live preview */}
          <div>
            <p className="text-sm font-semibold mb-2">Preview UI dengan palet ini</p>
            <div
              className="rounded-2xl p-5 border border-[var(--border)]"
              style={{ background: bg, color: text }}
            >
              <div
                className="rounded-xl p-4 max-w-sm"
                style={{ background: surface, boxShadow: "0 8px 24px rgba(15,23,42,0.08)" }}
              >
                <span
                  className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: find(100), color: find(700) }}
                >
                  Paket Pro
                </span>
                <h4 className="mt-2 text-lg font-bold" style={{ color: text }}>
                  Bangun standar internasional
                </h4>
                <p className="text-sm mt-1" style={{ color: muted }}>
                  Lihat bagaimana warna dasar bekerja sebagai teks, latar, dan tombol aksi.
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    className="text-sm font-semibold px-4 py-2 rounded-lg"
                    style={{ background: find(600), color: readableText(find(600)) }}
                  >
                    Mulai
                  </button>
                  <button
                    className="text-sm font-semibold px-4 py-2 rounded-lg"
                    style={{ background: accentScale[4]?.hex ?? accent, color: readableText(accentScale[4]?.hex ?? accent) }}
                  >
                    Lihat Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
