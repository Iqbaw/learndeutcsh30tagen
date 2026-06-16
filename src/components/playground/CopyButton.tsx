"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconCheck } from "@/components/icons";

interface Props {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({ value, label = "Salin CSS", className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
        copied
          ? "border-green-500/40 bg-green-500/10 text-green-500"
          : "border-[var(--border)] hover:border-brand-400 text-muted"
      } ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="ok"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="inline-flex items-center gap-1.5"
          >
            <IconCheck width={13} height={13} /> Tersalin
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
