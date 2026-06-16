"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck, IconClose } from "@/components/icons";

const BUTTON_STATES = ["Default", "Hover", "Active", "Disabled"] as const;
const INPUT_STATES = ["Default", "Focus", "Error", "Success"] as const;

type BtnState = (typeof BUTTON_STATES)[number];
type InpState = (typeof INPUT_STATES)[number];

function btnClasses(state: BtnState): string {
  switch (state) {
    case "Default":
      return "bg-brand-600 text-white";
    case "Hover":
      return "bg-brand-500 text-white shadow-glow -translate-y-0.5";
    case "Active":
      return "bg-brand-700 text-white scale-95";
    case "Disabled":
      return "bg-brand-600/40 text-white/60 cursor-not-allowed";
  }
}

export function ComponentSimulator() {
  const [btn, setBtn] = useState<BtnState>("Default");
  const [inp, setInp] = useState<InpState>("Default");

  const inputBorder: Record<InpState, string> = {
    Default: "border-[var(--border)]",
    Focus: "border-brand-500 ring-2 ring-brand-500/30",
    Error: "border-red-500 ring-2 ring-red-500/20",
    Success: "border-green-500 ring-2 ring-green-500/20",
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {/* Button */}
      <div className="surface rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-sm">Button States</h4>
          <div className="flex gap-1">
            {BUTTON_STATES.map((s) => (
              <button
                key={s}
                onClick={() => setBtn(s)}
                className={`text-[11px] px-2 py-1 rounded-lg transition-colors ${
                  btn === s ? "bg-brand-500 text-white" : "surface text-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="grid place-items-center h-32 rounded-xl bg-gradient-to-br from-brand-500/5 to-violetx-500/5">
          <motion.button
            layout
            disabled={btn === "Disabled"}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${btnClasses(btn)}`}
          >
            Mulai Belajar
          </motion.button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {BUTTON_STATES.map((s) => (
            <div key={s} className="text-center">
              <button
                disabled={s === "Disabled"}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${btnClasses(s)}`}
              >
                Button
              </button>
              <p className="text-[10px] text-muted mt-1">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="surface rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-sm">Input States</h4>
          <div className="flex gap-1">
            {INPUT_STATES.map((s) => (
              <button
                key={s}
                onClick={() => setInp(s)}
                className={`text-[11px] px-2 py-1 rounded-lg transition-colors ${
                  inp === s ? "bg-brand-500 text-white" : "surface text-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="grid place-items-center h-32 rounded-xl bg-gradient-to-br from-brand-500/5 to-violetx-500/5 px-6">
          <div className="w-full max-w-xs">
            <label className="text-xs font-medium text-muted">Email</label>
            <div
              className={`mt-1 flex items-center gap-2 rounded-xl border bg-[var(--bg-soft)] px-3 py-2.5 transition-all ${inputBorder[inp]}`}
            >
              <input
                readOnly
                value={inp === "Default" ? "" : "nama@email.com"}
                placeholder="nama@email.com"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              {inp === "Success" && <IconCheck width={16} height={16} className="text-green-500" />}
              {inp === "Error" && <IconClose width={16} height={16} className="text-red-500" />}
            </div>
            {inp === "Error" && (
              <p className="text-xs text-red-500 mt-1">Email harus mengandung @</p>
            )}
            {inp === "Success" && (
              <p className="text-xs text-green-500 mt-1">Email valid</p>
            )}
            {inp === "Focus" && (
              <p className="text-xs text-brand-500 mt-1">Sedang diketik…</p>
            )}
          </div>
        </div>
        <p className="text-xs text-muted mt-4">
          Setiap komponen profesional punya state lengkap. Jangan lupakan disabled dan error.
        </p>
      </div>
    </div>
  );
}
