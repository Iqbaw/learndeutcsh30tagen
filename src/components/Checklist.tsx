"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loadJSON, saveJSON } from "@/lib/storage";
import { IconCheck } from "@/components/icons";

interface Props {
  storageKey: string;
  items: string[];
}

export function Checklist({ storageKey, items }: Props) {
  const [checked, setChecked] = useState<boolean[]>(() =>
    items.map(() => false),
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadJSON<boolean[]>(`checklist:${storageKey}`, []);
    setChecked(items.map((_, i) => saved[i] ?? false));
    setHydrated(true);
  }, [storageKey, items]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      saveJSON(`checklist:${storageKey}`, next);
      return next;
    });
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-muted">
          {doneCount}/{items.length} selesai
        </span>
        <span className="w-28 h-1.5 rounded-full bg-current/10 overflow-hidden">
          <span
            className="block h-full rounded-full bg-gradient-to-r from-limex-500 to-cyanx-400 transition-all duration-500"
            style={{
              width: `${items.length ? (doneCount / items.length) * 100 : 0}%`,
            }}
          />
        </span>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => {
          const isChecked = hydrated && checked[i];
          return (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-3 text-left px-3 py-2.5 rounded-xl hover:bg-brand-500/5 transition-colors group"
                aria-pressed={isChecked}
              >
                <span
                  className={`relative grid place-items-center w-5 h-5 rounded-md border shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? "bg-green-500 border-green-500"
                      : "border-current/30 group-hover:border-brand-400"
                  }`}
                >
                  <motion.span
                    initial={false}
                    animate={isChecked ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <IconCheck width={13} height={13} className="text-white" />
                  </motion.span>
                </span>
                <span
                  className={`text-sm transition-colors ${
                    isChecked ? "text-muted line-through" : ""
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
