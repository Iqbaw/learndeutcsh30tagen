"use client";

import { usePersistentState } from "@/lib/usePersistentState";
import { CopyButton } from "@/components/playground/CopyButton";
import { InfoCallout } from "@/components/ui";

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
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
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-500"
      />
    </label>
  );
}

export function TypographyPlayground() {
  const [h1, setH1] = usePersistentState<number>("type-h1", 34);
  const [body, setBody] = usePersistentState<number>("type-body", 16);
  const [weight, setWeight] = usePersistentState<number>("type-weight", 700);
  const [lh, setLh] = usePersistentState<number>("type-lh", 1.5);

  const ratio = h1 / body;
  let feedback = {
    tone: "blue" as "blue" | "green" | "amber",
    title: "",
    msg: "",
  };
  if (body > 20) {
    feedback = {
      tone: "amber",
      title: "Teks body terlalu besar",
      msg: "Body di atas 20px membuat paragraf terasa seperti judul. Turunkan ke 15-18px agar nyaman dibaca.",
    };
  } else if (ratio < 1.4) {
    feedback = {
      tone: "amber",
      title: "Hierarchy belum jelas",
      msg: "Selisih judul dan body terlalu kecil. Perbesar H1 atau perkecil body agar judul menonjol.",
    };
  } else if (lh < 1.35 && body >= 14) {
    feedback = {
      tone: "amber",
      title: "Line height terlalu sempit",
      msg: "Paragraf terasa padat. Naikkan line-height ke sekitar 1.5 untuk keterbacaan.",
    };
  } else {
    feedback = {
      tone: "green",
      title: "Hierarchy sudah cukup jelas",
      msg: "Mata akan menangkap judul lebih dulu, lalu turun ke body. Pertahankan rasio ini.",
    };
  }

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="space-y-4">
        <Slider label="Ukuran H1" value={h1} min={18} max={56} unit="px" onChange={setH1} />
        <Slider label="Ukuran Body" value={body} min={10} max={28} unit="px" onChange={setBody} />
        <Slider label="Font Weight H1" value={weight} min={300} max={900} step={100} onChange={setWeight} />
        <Slider label="Line Height Body" value={lh} min={1} max={2} step={0.05} onChange={setLh} />
        <InfoCallout tone={feedback.tone} title={feedback.title}>
          {feedback.msg}
        </InfoCallout>
      </div>

      <div className="surface rounded-2xl p-6 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-wide text-muted">Preview langsung</p>
          <CopyButton
            value={`.heading {\n  font-size: ${h1}px;\n  font-weight: ${weight};\n  line-height: 1.1;\n}\n.body {\n  font-size: ${body}px;\n  line-height: ${lh};\n}`}
          />
        </div>
        <h2 style={{ fontSize: h1, fontWeight: weight, lineHeight: 1.1 }}>
          Desain mahal selalu punya alasan
        </h2>
        <p
          className="mt-3 text-muted"
          style={{ fontSize: body, lineHeight: lh }}
        >
          Hierarchy yang baik memandu mata user: mana yang dibaca lebih dulu, mana
          yang sekunder. Atur ukuran dan jarak hingga prioritas terasa jelas tanpa
          perlu dijelaskan.
        </p>
        <span
          className="mt-3 text-muted/70"
          style={{ fontSize: Math.max(11, body - 3) }}
        >
          Caption — informasi pendukung
        </span>
      </div>
    </div>
  );
}
