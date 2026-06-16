"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { curriculum } from "@/data/curriculum";
import { useApp } from "@/context/AppProvider";
import { Illustration } from "@/components/Illustration";
import { StatusBadge } from "@/components/ui";
import { IconCheck, IconLock } from "@/components/icons";

export function RoadmapTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const lineX = useTransform(scrollXProgress, [0, 1], ["0%", "-8%"]);
  const { moduleProgressPct, isModuleComplete, isModuleUnlocked, hydrated } = useApp();

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar pb-4 -mx-1 px-1"
      >
        <div className="relative min-w-max">
          {/* connecting line with parallax */}
          <motion.div
            style={{ x: lineX }}
            className="absolute left-0 right-0 top-[78px] h-0.5 bg-gradient-to-r from-brand-500/40 via-violetx-500/40 to-cyanx-400/40"
          />
          <div className="relative flex gap-4">
            {curriculum.map((m, i) => {
              const pct = hydrated ? moduleProgressPct(m.id) : 0;
              const done = hydrated && isModuleComplete(m.id);
              const unlocked = !hydrated ? m.month === 1 : isModuleUnlocked(m.id);
              const inProgress = pct > 0 && !done;
              const status = done
                ? "completed"
                : inProgress
                  ? "in-progress"
                  : "locked";

              const inner = (
                <motion.div
                  whileHover={unlocked ? { y: -6 } : undefined}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`surface rounded-2xl p-4 shadow-soft transition-shadow h-full ${
                    unlocked ? "hover:shadow-glow" : "opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`grid place-items-center w-9 h-9 rounded-xl text-sm font-bold ${
                        done
                          ? "bg-green-500 text-white"
                          : inProgress
                            ? "bg-amber-400 text-ink-950"
                            : "surface text-muted"
                      }`}
                    >
                      {done ? (
                        <IconCheck width={16} height={16} />
                      ) : !unlocked ? (
                        <IconLock width={14} height={14} />
                      ) : (
                        m.month
                      )}
                    </span>
                    <StatusBadge status={status} />
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-brand-500/5 to-violetx-500/5 p-2 mb-3 text-brand-500/80">
                    <Illustration type={m.illustrationType} className="h-20 w-full" />
                  </div>
                  <p className="text-[11px] text-muted">Bulan {m.month}</p>
                  <h3
                    className={`font-semibold text-[15px] leading-snug transition-colors ${
                      unlocked ? "group-hover:text-brand-500" : ""
                    }`}
                  >
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted mt-1 line-clamp-2">
                    {!unlocked ? "Terkunci — selesaikan modul sebelumnya dulu." : m.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex-1 h-1.5 rounded-full bg-current/10 overflow-hidden">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="text-[11px] font-semibold tabular-nums">
                      {pct}%
                    </span>
                  </div>
                </motion.div>
              );

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.45 }}
                  className="w-[230px] shrink-0"
                >
                  {unlocked ? (
                    <Link href={`/lesson/${m.slug}`} className="block group">
                      {inner}
                    </Link>
                  ) : (
                    <div
                      className="block cursor-not-allowed select-none"
                      title="Selesaikan modul sebelumnya untuk membuka modul ini"
                      aria-disabled="true"
                    >
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted mt-1 flex items-center gap-1.5">
        <span className="hidden sm:inline">Geser ke samping untuk menjelajah 12 bulan perjalanan</span>
        <span className="sm:hidden">Geser untuk lihat semua bulan</span>
      </p>
    </div>
  );
}
