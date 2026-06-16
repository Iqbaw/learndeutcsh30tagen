"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies, portfolioChecklist } from "@/data/portfolio";
import { PageHeader, Card, InfoCallout } from "@/components/ui";
import { Illustration } from "@/components/Illustration";
import { Checklist } from "@/components/Checklist";

export default function PortfolioPage() {
  const [active, setActive] = useState(caseStudies[0].id);
  const study = caseStudies.find((c) => c.id === active)!;

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        eyebrow="Portfolio Builder Guide"
        title="Susun Portfolio yang Bersaing Internasional"
        desc="Portfolio bukan galeri gambar, tapi bukti cara berpikirmu. Pakai template ini untuk menyusun tiga case study yang menunjukkan proses, keputusan, dan dampak."
      />

      <InfoCallout tone="violet" title="Designer Mahal Berpikir Begini">
        Hiring manager tidak menghitung jumlah mockup-mu. Mereka mencari satu hal: apakah kamu bisa berpikir, memutuskan, dan belajar. Tunjukkan prosesnya.
      </InfoCallout>

      {/* tabs */}
      <div className="mt-6 flex gap-2 overflow-x-auto hide-scrollbar">
        {caseStudies.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
              active === c.id
                ? "bg-gradient-to-r from-brand-600 to-violetx-600 text-white shadow-glow"
                : "surface text-muted hover:border-brand-400"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-5 grid lg:grid-cols-[1fr_300px] gap-6 items-start"
        >
          <div className="space-y-4 min-w-0">
            <Card glass className="p-5 flex gap-4 items-center">
              <div className="rounded-xl bg-gradient-to-br from-brand-500/10 to-violetx-500/10 p-2 text-brand-500 shrink-0 w-32">
                <Illustration type={study.illustration} className="w-full h-20" />
              </div>
              <div>
                <h2 className="text-lg font-bold">{study.title}</h2>
                <p className="text-sm text-muted mt-1">{study.summary}</p>
              </div>
            </Card>

            <div className="relative">
              <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-brand-500/40 to-cyanx-400/40" />
              <div className="space-y-3">
                {study.steps.map((step, i) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="relative pl-10"
                  >
                    <span className="absolute left-0 top-3 grid place-items-center w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 text-xs font-bold">
                      {i + 1}
                    </span>
                    <Card className="p-4">
                      <h3 className="font-semibold text-[15px]">{step.title}</h3>
                      <p className="text-xs text-muted mt-1">{step.guide}</p>
                      <div className="mt-2.5 rounded-xl bg-brand-500/[0.04] border border-brand-500/15 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-500 mb-1">
                          Contoh Kalimat
                        </p>
                        <p className="text-sm text-muted italic leading-relaxed">
                          &ldquo;{step.example}&rdquo;
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-5 border border-amber-400/30 bg-amber-400/[0.04]">
              <h3 className="font-semibold text-sm text-amber-500 mb-2">
                Common Mistake — Hindari Ini
              </h3>
              <ul className="space-y-1.5">
                {study.mistakes.map((m, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="text-amber-500 shrink-0">⚠</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-4">
            <Card className="p-5">
              <h3 className="font-semibold text-sm mb-3">Checklist Portfolio</h3>
              <Checklist storageKey="portfolio-global" items={portfolioChecklist} />
            </Card>
            <InfoCallout tone="blue" title="Tips Presentasi">
              Latih menceritakan tiap case study dalam 5-7 menit: masalah, proses, keputusan kunci, hasil. Pimpin cerita, jangan membaca slide.
            </InfoCallout>
          </aside>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
