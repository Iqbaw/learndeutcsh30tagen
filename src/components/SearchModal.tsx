"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { buildSearchIndex, searchItems, type SearchItem } from "@/lib/searchIndex";
import { IconSearch, IconClose } from "@/components/icons";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SUGGESTIONS = [
  "Figma",
  "Typography",
  "Spacing",
  "User Flow",
  "Wireframe",
  "Prototype",
  "Design System",
  "Accessibility",
  "Portfolio",
  "Research",
  "Handoff",
  "Mobile App",
  "Dashboard",
  "SaaS",
  "AI Product Design",
];

export function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchItems(query, index), [query, index]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cari materi"
            className="relative w-full max-w-xl glass rounded-2xl shadow-glow overflow-hidden"
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
              <IconSearch className="text-muted shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari materi: Figma, Typography, User Flow..."
                className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-muted"
                aria-label="Kata kunci pencarian"
              />
              <button
                onClick={onClose}
                className="text-muted hover:text-current p-1 rounded-lg"
                aria-label="Tutup pencarian"
              >
                <IconClose width={18} height={18} />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto scroll-thin p-2">
              {query.trim() === "" ? (
                <div className="p-3">
                  <p className="text-xs text-muted mb-2 px-1">Topik populer</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="text-xs px-3 py-1.5 rounded-full surface hover:border-brand-400 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <p className="p-6 text-center text-sm text-muted">
                  Tidak ada hasil untuk &quot;{query}&quot;. Coba kata kunci lain.
                </p>
              ) : (
                <ul className="space-y-1">
                  {results.map((r: SearchItem, i) => (
                    <li key={`${r.href}-${i}`}>
                      <button
                        onClick={() => go(r.href)}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-500/10 transition-colors flex items-center gap-3 group"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-md surface text-muted shrink-0">
                          {r.kind}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium truncate">
                            {r.title}
                          </span>
                          <span className="block text-xs text-muted truncate">
                            {r.subtitle}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
