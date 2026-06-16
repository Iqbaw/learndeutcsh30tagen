"use client";

import { useEffect, useState } from "react";
import { PageHeader, Card, Reveal } from "@/components/ui";
import { TypographyPlayground } from "@/components/playground/TypographyPlayground";
import { SpacingPlayground } from "@/components/playground/SpacingPlayground";
import { ContrastChecker } from "@/components/playground/ContrastChecker";
import { UserFlowBuilder } from "@/components/playground/UserFlowBuilder";
import { ComponentSimulator } from "@/components/playground/ComponentSimulator";
import { WireframeBuilder } from "@/components/playground/WireframeBuilder";
import { PaletteGenerator } from "@/components/playground/PaletteGenerator";
import { ShadowPlayground } from "@/components/playground/ShadowPlayground";
import { GradientBuilder } from "@/components/playground/GradientBuilder";

interface Tool {
  id: string;
  label: string;
  desc: string;
  group: "Visual" | "Warna" | "Komponen" | "Struktur";
}

const TOOLS: Tool[] = [
  { id: "typography", label: "Typography", desc: "Atur skala teks dan rasakan kapan hierarchy jadi jelas. Salin CSS-nya.", group: "Visual" },
  { id: "spacing", label: "Spacing", desc: "Geser padding & jarak, cek keselarasan dengan grid 8pt.", group: "Visual" },
  { id: "shadow", label: "Shadow & Elevation", desc: "Racik bayangan halus ala desain premium, lalu salin box-shadow.", group: "Visual" },
  { id: "palette", label: "Color Palette", desc: "Hasilkan skala warna 50–900 dari satu warna + saran accent.", group: "Warna" },
  { id: "contrast", label: "Kontras Warna", desc: "Uji pasangan warna teks-background terhadap standar WCAG.", group: "Warna" },
  { id: "gradient", label: "Gradient", desc: "Bangun gradient untuk hero, kartu, atau tombol.", group: "Warna" },
  { id: "components", label: "Component State", desc: "Jelajahi semua state button dan input.", group: "Komponen" },
  { id: "userflow", label: "User Flow", desc: "Susun node alur: Start, Action, Decision, Success, Error.", group: "Struktur" },
  { id: "wireframe", label: "Wireframe", desc: "Seret blok untuk menyusun struktur halaman.", group: "Struktur" },
];

export default function PlaygroundPage() {
  const [active, setActive] = useState("typography");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && TOOLS.some((t) => t.id === hash)) {
      setActive(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        eyebrow="Design Playground"
        title="Belajar dengan Mencoba, Bukan Cuma Membaca"
        desc="Sembilan alat interaktif untuk melatih intuisi desainmu. Eksperimen bebas — setiap perubahan langsung memberi feedback, banyak yang bisa langsung kamu salin sebagai CSS. Hasil eksperimenmu otomatis tersimpan di perangkat."
      />

      {/* tab nav */}
      <div className="sticky top-16 z-30 -mx-4 px-4 py-2 mb-6 glass border-y border-[var(--border)]">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              onClick={() => go(t.id)}
              className={`whitespace-nowrap text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                active === t.id
                  ? "bg-gradient-to-r from-brand-600 to-violetx-600 text-white"
                  : "surface text-muted hover:border-brand-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {TOOLS.map((t) => (
          <Reveal key={t.id}>
            <Card id={t.id} className="p-5 sm:p-6 scroll-mt-32">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500">
                  {t.group}
                </span>
                <h2 className="text-lg font-bold">{t.label} Playground</h2>
              </div>
              <p className="text-sm text-muted mb-5">{t.desc}</p>
              {t.id === "typography" && <TypographyPlayground />}
              {t.id === "spacing" && <SpacingPlayground />}
              {t.id === "shadow" && <ShadowPlayground />}
              {t.id === "palette" && <PaletteGenerator />}
              {t.id === "contrast" && <ContrastChecker />}
              {t.id === "gradient" && <GradientBuilder />}
              {t.id === "components" && <ComponentSimulator />}
              {t.id === "userflow" && <UserFlowBuilder />}
              {t.id === "wireframe" && <WireframeBuilder />}
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
