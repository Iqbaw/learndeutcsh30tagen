"use client";

import { type Variants } from "framer-motion";
import React from "react";

export function Card({
  children,
  className = "",
  glass = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`${glass ? "glass" : "surface"} rounded-2xl shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** kept for API compatibility; offset handled in CSS */
  y?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const LEVEL_STYLES: Record<string, string> = {
  Pemula: "bg-cyanx-400/15 text-cyanx-500",
  Intermediate: "bg-violetx-500/15 text-violetx-500",
  Mahir: "bg-brand-500/15 text-brand-500",
};

export function LevelBadge({ level }: { level: string }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        LEVEL_STYLES[level] ?? "surface"
      }`}
    >
      {level}
    </span>
  );
}

export function StatusBadge({
  status,
}: {
  status: "completed" | "in-progress" | "locked";
}) {
  const map = {
    completed: { label: "Selesai", cls: "bg-green-500/15 text-green-500" },
    "in-progress": { label: "Berjalan", cls: "bg-amber-400/15 text-amber-500" },
    locked: { label: "Terkunci", cls: "surface text-muted" },
  } as const;
  const s = map[status];
  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${s.cls}`}>
      {s.label}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500 mb-1.5">
          {eyebrow}
        </p>
      )}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
      {desc && <p className="mt-2 text-muted max-w-2xl">{desc}</p>}
    </div>
  );
}

export function InfoCallout({
  tone = "blue",
  title,
  children,
}: {
  tone?: "blue" | "green" | "amber" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const map = {
    blue: "border-brand-500/30 bg-brand-500/5",
    green: "border-green-500/30 bg-green-500/5",
    amber: "border-amber-400/40 bg-amber-400/5",
    violet: "border-violetx-500/30 bg-violetx-500/5",
  };
  return (
    <div className={`rounded-2xl border p-4 ${map[tone]}`}>
      <p className="font-semibold text-sm mb-1">{title}</p>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
