"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { glossary } from "@/data/glossary";
import { PageHeader, Card } from "@/components/ui";
import { IconSearch } from "@/components/icons";

export default function GlossaryPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return glossary;
    return glossary.filter(
      (g) =>
        g.term.toLowerCase().includes(t) ||
        g.short.toLowerCase().includes(t) ||
        g.full.toLowerCase().includes(t),
    );
  }, [q]);

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        eyebrow="Glosarium UI/UX"
        title="Kamus Istilah Penting"
        desc="Dua puluh satu istilah inti yang akan kamu temui terus selama berkarier. Pahami artinya agar bisa berbicara seperti designer profesional."
      />

      <div className="surface rounded-xl px-3.5 py-2.5 flex items-center gap-2 mb-6 max-w-md">
        <IconSearch width={18} height={18} className="text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari istilah... (mis. Wireframe, Funnel)"
          className="flex-1 bg-transparent outline-none text-sm"
          aria-label="Cari istilah glosarium"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted">Tidak ada istilah cocok dengan &quot;{q}&quot;.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((g, i) => (
            <motion.div
              key={g.term}
              id={encodeURIComponent(g.term)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className="scroll-mt-24"
            >
              <Card className="p-5 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violetx-600 text-white text-sm font-bold">
                    {g.term.charAt(0)}
                  </span>
                  <h2 className="font-bold">{g.term}</h2>
                </div>
                <p className="text-sm font-medium">{g.short}</p>
                <p className="text-sm text-muted mt-2 leading-relaxed">{g.full}</p>
                <div className="mt-3 rounded-xl bg-brand-500/[0.05] border border-brand-500/15 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-500 mb-0.5">
                    Contoh
                  </p>
                  <p className="text-sm text-muted">{g.example}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
