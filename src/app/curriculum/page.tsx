"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { curriculum } from "@/data/curriculum";
import { SKILL_LABELS } from "@/data/curriculum";
import { useApp } from "@/context/AppProvider";
import { Illustration } from "@/components/Illustration";
import {
  PageHeader,
  LevelBadge,
  StatusBadge,
  Reveal,
} from "@/components/ui";
import { IconArrowRight, IconCheck, IconLock, IconClock } from "@/components/icons";

function ModuleWrapper({
  unlocked,
  slug,
  children,
}: {
  unlocked: boolean;
  slug: string;
  children: React.ReactNode;
}) {
  if (!unlocked) {
    return (
      <div
        className="block group cursor-not-allowed select-none"
        title="Selesaikan modul sebelumnya untuk membuka modul ini"
        aria-disabled="true"
      >
        {children}
      </div>
    );
  }
  return (
    <Link href={`/lesson/${slug}`} className="block group">
      {children}
    </Link>
  );
}

export default function CurriculumPage() {
  const { moduleProgressPct, isModuleComplete, isModuleUnlocked, hydrated, totalProgressPct } = useApp();

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        eyebrow="Kurikulum 12 Bulan"
        title="Peta Belajar Jadi UI/UX Designer Profesional"
        desc="Dua belas modul yang dirancang bertahap, dari fondasi visual sampai portfolio yang siap bersaing internasional. Selesaikan satu per satu, skill-mu akan naik level."
      />

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="surface rounded-xl px-4 py-2 flex items-center gap-3">
          <span className="text-xs text-muted">Total progress</span>
          <span className="w-32 h-2 rounded-full bg-current/10 overflow-hidden">
            <span
              className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400 transition-all duration-700"
              style={{ width: `${hydrated ? totalProgressPct : 0}%` }}
            />
          </span>
          <span className="text-sm font-bold tabular-nums">
            {hydrated ? totalProgressPct : 0}%
          </span>
        </div>
      </div>

      <div className="relative">
        {/* vertical timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-500/40 via-violetx-500/40 to-cyanx-400/40 hidden sm:block" />

        <div className="space-y-4">
          {curriculum.map((m, i) => {
            const pct = hydrated ? moduleProgressPct(m.id) : 0;
            const done = hydrated && isModuleComplete(m.id);
            const unlocked = !hydrated ? m.month === 1 : isModuleUnlocked(m.id);
            const inProgress = pct > 0 && !done;
            const status = done ? "completed" : inProgress ? "in-progress" : "locked";

            return (
              <Reveal key={m.id} delay={Math.min(i * 0.04, 0.32)} className="relative sm:pl-12">
                {/* node */}
                <span
                  className={`absolute left-0 top-5 hidden sm:grid place-items-center w-10 h-10 rounded-xl text-sm font-bold z-10 ${
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

                <ModuleWrapper unlocked={unlocked} slug={m.slug}>
                  <motion.div
                    whileHover={unlocked ? { y: -3 } : undefined}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`surface rounded-2xl p-5 shadow-soft transition-shadow ${
                      unlocked ? "hover:shadow-glow" : "opacity-60"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-brand-500/8 to-violetx-500/8 p-3 text-brand-500 shrink-0 sm:w-44">
                        <Illustration type={m.illustrationType} className="w-full h-24" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[11px] text-muted sm:hidden font-semibold">
                            Bulan {m.month}
                          </span>
                          <LevelBadge level={m.level} />
                          <StatusBadge status={status} />
                          <span className="inline-flex items-center gap-1 text-[11px] text-muted ml-auto">
                            <IconClock width={12} height={12} />
                            {m.estimatedHours} jam • {m.lessons.length} lesson
                          </span>
                        </div>
                        <h2 className="text-lg font-bold group-hover:text-brand-500 transition-colors">
                          {m.title}
                        </h2>
                        <p className="text-sm text-muted mt-1 line-clamp-2">
                          {m.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {m.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-500/8 text-brand-500"
                            >
                              {SKILL_LABELS[s]}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <span className="flex-1 h-1.5 rounded-full bg-current/10 overflow-hidden max-w-xs">
                            <span
                              className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400 transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </span>
                          <span className="text-[11px] font-semibold tabular-nums">{pct}%</span>
                          {unlocked ? (
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 ml-auto group-hover:gap-2 transition-all">
                              {done ? "Tinjau" : pct > 0 ? "Lanjutkan" : "Mulai"}
                              <IconArrowRight width={14} height={14} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-muted ml-auto">
                              <IconLock width={13} height={13} /> Terkunci
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ModuleWrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
