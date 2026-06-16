"use client";

import { useMemo, useState } from "react";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").trim();
  if (![3, 6].includes(m.length)) return null;
  const full =
    m.length === 3
      ? m.split("").map((c) => c + c).join("")
      : m;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance([r, g, b]: [number, number, number]): number {
  const a = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(fg: string, bg: string): number | null {
  const a = hexToRgb(fg);
  const b = hexToRgb(bg);
  if (!a || !b) return null;
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function Pill({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
        ok ? "bg-green-500/15 text-green-500" : "bg-red-500/15 text-red-500"
      }`}
    >
      {ok ? "Lulus" : "Gagal"} {label}
    </span>
  );
}

export function ContrastChecker() {
  const [fg, setFg] = useState("#0B1020");
  const [bg, setBg] = useState("#F7FAFC");

  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);
  const r = ratio ?? 0;

  const aaNormal = r >= 4.5;
  const aaLarge = r >= 3;
  const aaaNormal = r >= 7;

  const advice = !ratio
    ? "Masukkan kode hex yang valid (mis. #1A2B3C)."
    : aaaNormal
      ? "Kontras sangat baik. Aman untuk semua ukuran teks."
      : aaNormal
        ? "Kontras baik untuk teks normal. Tetap nyaman dibaca."
        : aaLarge
          ? "Hanya aman untuk teks besar/tebal. Untuk body text, gelapkan teks atau terangkan background."
          : "Kontras terlalu rendah. Teks akan sulit dibaca, terutama di layar terang. Tingkatkan perbedaan terang-gelap.";

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm text-muted">Warna teks</span>
            <div className="mt-1 flex items-center gap-2 surface rounded-xl p-2">
              <input
                type="color"
                value={hexToRgb(fg) ? fg : "#000000"}
                onChange={(e) => setFg(e.target.value)}
                className="w-9 h-9 rounded-lg cursor-pointer bg-transparent"
                aria-label="Pilih warna teks"
              />
              <input
                value={fg}
                onChange={(e) => setFg(e.target.value)}
                className="w-full bg-transparent outline-none text-sm font-mono"
                aria-label="Kode hex warna teks"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-sm text-muted">Background</span>
            <div className="mt-1 flex items-center gap-2 surface rounded-xl p-2">
              <input
                type="color"
                value={hexToRgb(bg) ? bg : "#ffffff"}
                onChange={(e) => setBg(e.target.value)}
                className="w-9 h-9 rounded-lg cursor-pointer bg-transparent"
                aria-label="Pilih warna background"
              />
              <input
                value={bg}
                onChange={(e) => setBg(e.target.value)}
                className="w-full bg-transparent outline-none text-sm font-mono"
                aria-label="Kode hex warna background"
              />
            </div>
          </label>
        </div>

        <div className="surface rounded-2xl p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted">Rasio kontras</p>
              <p className="text-3xl font-bold tabular-nums">
                {ratio ? r.toFixed(2) : "—"}
                <span className="text-base text-muted">:1</span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <Pill ok={aaNormal} label="AA teks" />
              <Pill ok={aaLarge} label="AA besar" />
              <Pill ok={aaaNormal} label="AAA" />
            </div>
          </div>
          <p className="mt-3 text-sm text-muted leading-relaxed">{advice}</p>
        </div>
      </div>

      <div
        className="rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[var(--border)]"
        style={{ background: hexToRgb(bg) ? bg : "#fff", color: hexToRgb(fg) ? fg : "#000" }}
      >
        <p className="text-2xl font-bold">Aa</p>
        <p className="text-lg font-semibold mt-2">Teks judul contoh</p>
        <p className="text-sm mt-1 opacity-90">
          Body text untuk mengecek kenyamanan baca pada pasangan warna ini.
        </p>
        <span className="text-xs mt-2 opacity-75">Caption kecil 12px</span>
      </div>
    </div>
  );
}
