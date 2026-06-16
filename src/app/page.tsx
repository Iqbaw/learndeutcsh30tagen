"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppProvider";
import { curriculum } from "@/data/curriculum";
import { computeSkillScores } from "@/lib/skills";
import { ProgressRing } from "@/components/ProgressRing";
import { SkillRadar } from "@/components/SkillRadar";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { DailyChecklist } from "@/components/DailyChecklist";
import { Illustration } from "@/components/Illustration";
import { Card, Reveal, LevelBadge, staggerContainer, staggerItem } from "@/components/ui";
import { DAILY_QUOTES } from "@/data/dailyPlan";
import {
  IconArrowRight,
  IconPlay,
  IconFolder,
  IconSpark,
  IconMap,
  IconFlame,
} from "@/components/icons";

const QUICK_ACTIONS = [
  { href: "/playground", label: "Buka Playground", icon: IconPlay, tone: "from-brand-500 to-brand-600" },
  { href: "/portfolio", label: "Portfolio Guide", icon: IconFolder, tone: "from-violetx-500 to-violetx-600" },
  { href: "/curriculum", label: "Lihat Roadmap", icon: IconMap, tone: "from-cyanx-400 to-cyanx-500" },
  { href: "/daily-plan", label: "Rencana Harian", icon: IconSpark, tone: "from-limex-400 to-limex-500" },
];

export default function DashboardPage() {
  const {
    totalProgressPct,
    completedLessons,
    moduleProgressPct,
    isModuleComplete,
    lastOpenedModule,
    streak,
    hydrated,
  } = useApp();

  const skillScores = useMemo(
    () => computeSkillScores(completedLessons),
    [completedLessons],
  );

  const recommended = useMemo(() => {
    const continueMod = lastOpenedModule
      ? curriculum.find((m) => m.slug === lastOpenedModule && !isModuleComplete(m.id))
      : undefined;
    return (
      continueMod ??
      curriculum.find((m) => !isModuleComplete(m.id)) ??
      curriculum[curriculum.length - 1]
    );
  }, [lastOpenedModule, isModuleComplete]);

  const quote = DAILY_QUOTES[new Date().getDate() % DAILY_QUOTES.length];
  const recPct = hydrated ? moduleProgressPct(recommended.id) : 0;
  const completedCount = completedLessons.length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome + progress */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-3 gap-4"
      >
        <motion.div variants={staggerItem} className="lg:col-span-2">
          <Card glass className="relative overflow-hidden p-6 h-full">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="absolute right-4 bottom-2 text-violetx-500/40 hidden sm:block">
              <Illustration type="portfolio" className="w-40 h-28" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-500">
                <IconSpark width={12} height={12} /> UX Mastery Lab
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight max-w-md">
                Mulai dari skill kecil, bangun standar internasional.
              </h1>
              <p className="mt-2 text-muted max-w-md text-sm">
                {quote}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href={`/lesson/${recommended.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow hover:brightness-110 active:scale-[0.98] transition"
                >
                  {completedCount > 0 ? "Lanjutkan Belajar" : "Mulai Belajar"}
                  <IconArrowRight width={16} height={16} />
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <span className="grid place-items-center w-8 h-8 rounded-xl bg-amber-400/15 text-amber-500">
                    <IconFlame width={16} height={16} />
                  </span>
                  <span>
                    Streak <b className="text-current">{hydrated ? streak : 0}</b> hari
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Card className="p-6 h-full flex flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold mb-3">Progress Total</p>
            <ProgressRing value={hydrated ? totalProgressPct : 0} label="perjalanan" />
            <p className="mt-3 text-xs text-muted">
              {completedCount} dari{" "}
              {curriculum.reduce((a, m) => a + m.lessons.length, 0)} lesson selesai
            </p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Quick actions */}
      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map((qa) => {
            const Icon = qa.icon;
            return (
              <Link key={qa.href} href={qa.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="surface rounded-2xl p-4 shadow-soft hover:shadow-glow transition-shadow flex items-center gap-3"
                >
                  <span className={`grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${qa.tone} text-white shrink-0`}>
                    <Icon width={18} height={18} />
                  </span>
                  <span className="text-sm font-semibold leading-tight">{qa.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Reveal>

      {/* Roadmap */}
      <Reveal>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-lg">Peta Belajar 12 Bulan</h2>
              <p className="text-sm text-muted">Dari fondasi visual sampai portfolio internasional.</p>
            </div>
            <Link
              href="/curriculum"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:gap-2 transition-all"
            >
              Lihat semua <IconArrowRight width={14} height={14} />
            </Link>
          </div>
          <RoadmapTimeline />
        </Card>
      </Reveal>

      {/* Skill radar + recommended */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Reveal>
          <Card className="p-5 h-full">
            <h2 className="font-bold text-lg mb-1">Skill Radar</h2>
            <p className="text-sm text-muted mb-2">
              Kemampuanmu tumbuh otomatis saat menyelesaikan lesson.
            </p>
            <SkillRadar scores={skillScores} />
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 h-full flex flex-col">
            <Card className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-lg">Rekomendasi Hari Ini</h2>
                <LevelBadge level={recommended.level} />
              </div>
              <Link href={`/lesson/${recommended.slug}`} className="block group">
                <div className="flex gap-4 items-center">
                  <div className="rounded-xl bg-gradient-to-br from-brand-500/10 to-violetx-500/10 p-2 text-brand-500 shrink-0">
                    <Illustration type={recommended.illustrationType} className="w-24 h-16" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-muted">Bulan {recommended.month}</p>
                    <h3 className="font-semibold group-hover:text-brand-500 transition-colors">
                      {recommended.title}
                    </h3>
                    <p className="text-xs text-muted line-clamp-2 mt-0.5">
                      {recommended.tagline}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="flex-1 h-1.5 rounded-full bg-current/10 overflow-hidden">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400"
                      style={{ width: `${recPct}%` }}
                    />
                  </span>
                  <span className="text-[11px] font-semibold tabular-nums">{recPct}%</span>
                </div>
              </Link>
            </Card>

            <Card className="p-5 flex-1">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg">Latihan Hari Ini</h2>
                <Link href="/daily-plan" className="text-sm font-medium text-brand-500">
                  Detail
                </Link>
              </div>
              <DailyChecklist compact />
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
