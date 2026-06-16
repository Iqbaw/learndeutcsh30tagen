"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { curriculum, SKILL_LABELS } from "@/data/curriculum";
import { useApp } from "@/context/AppProvider";
import { Illustration } from "@/components/Illustration";
import { ProgressRing } from "@/components/ProgressRing";
import { Quiz } from "@/components/Quiz";
import { Checklist } from "@/components/Checklist";
import { Card, LevelBadge, Reveal, InfoCallout } from "@/components/ui";
import type { Lesson } from "@/lib/types";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconLock,
  IconPlay,
  IconSpark,
} from "@/components/icons";

const DEMO_HASH: Record<string, string> = {
  typography: "typography",
  spacing: "spacing",
  contrast: "contrast",
  buttonstate: "components",
  userflow: "userflow",
  wireframe: "wireframe",
};

function LessonBlock({ lesson, index }: { lesson: Lesson; index: number }) {
  const { isLessonDone, toggleLesson, hydrated } = useApp();
  const done = hydrated && isLessonDone(lesson.id);

  return (
    <Reveal>
      <Card id={lesson.id} className="p-5 sm:p-6 scroll-mt-24">
        <div className="flex items-start gap-3 mb-4">
          <span
            className={`grid place-items-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${
              done ? "bg-green-500 text-white" : "bg-brand-500/10 text-brand-500"
            }`}
          >
            {done ? <IconCheck width={16} height={16} /> : index + 1}
          </span>
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-bold leading-snug">
              {lesson.title}
            </h2>
            <p className="text-xs text-muted mt-1 inline-flex items-center gap-1">
              <IconClock width={12} height={12} /> {lesson.estimatedMinutes} menit
            </p>
          </div>
        </div>

        <InfoCallout tone="blue" title="Tujuan Lesson">
          {lesson.objective}
        </InfoCallout>

        <div className="mt-5 space-y-5">
          {lesson.sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-semibold text-[15px] mb-1.5">{s.heading}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              {s.list && (
                <ul className="mt-2 space-y-1.5">
                  {s.list.map((li, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-green-500 mb-1.5 flex items-center gap-1.5">
              <IconCheck width={14} height={14} /> Contoh Baik
            </p>
            <p className="text-sm text-muted leading-relaxed">{lesson.goodExample}</p>
          </div>
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-1.5">
              ✕ Contoh Buruk
            </p>
            <p className="text-sm text-muted leading-relaxed">{lesson.badExample}</p>
          </div>
        </div>

        {lesson.miniDemo.type !== "none" && (
          <Link
            href={`/playground#${DEMO_HASH[lesson.miniDemo.type] ?? ""}`}
            prefetch={false}
            className="mt-4 flex items-center gap-3 rounded-2xl border border-brand-500/30 bg-brand-500/5 p-4 hover:bg-brand-500/10 transition-colors group"
          >
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violetx-600 text-white shrink-0">
              <IconPlay width={18} height={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold">{lesson.miniDemo.title}</span>
              <span className="block text-xs text-muted">{lesson.miniDemo.description}</span>
            </span>
            <IconArrowRight width={16} height={16} className="text-brand-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}

        <div className="mt-6">
          <h3 className="font-semibold text-[15px] mb-2">Kesalahan Umum Pemula</h3>
          <ul className="space-y-1.5">
            {lesson.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <span className="text-amber-500 shrink-0">⚠</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <InfoCallout tone="violet" title="Designer Mahal Berpikir Begini">
            {lesson.designerMahal}
          </InfoCallout>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-[15px] mb-2 flex items-center gap-2">
            <IconSpark width={16} height={16} className="text-cyanx-500" /> Coba Latihan
          </h3>
          <ul className="space-y-1.5">
            {lesson.practice.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyanx-500 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl surface p-4">
          <h3 className="font-semibold text-[15px] mb-3">Checklist Lesson</h3>
          <Checklist storageKey={lesson.id} items={lesson.checklist} />
        </div>

        <div className="mt-6 rounded-2xl surface p-4">
          <h3 className="font-semibold text-[15px] mb-3 flex items-center gap-2">
            Uji Pemahaman
          </h3>
          <Quiz questions={lesson.quiz} />
        </div>

        <button
          onClick={() => toggleLesson(lesson.id)}
          className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold px-4 py-3 transition active:scale-[0.99] ${
            done
              ? "border border-green-500/40 bg-green-500/10 text-green-500"
              : "bg-gradient-to-r from-brand-600 to-violetx-600 text-white shadow-glow hover:brightness-110"
          }`}
        >
          {done ? (
            <>
              <IconCheck width={16} height={16} /> Selesai — Mantap, satu skill naik level
            </>
          ) : (
            <>Tandai Selesai</>
          )}
        </button>
      </Card>
    </Reveal>
  );
}

export function LessonView({ slug }: { slug: string }) {
  const modIndex = curriculum.findIndex((m) => m.slug === slug);
  const mod = modIndex >= 0 ? curriculum[modIndex] : undefined;
  const {
    setLastOpenedModule,
    moduleProgressPct,
    isLessonDone,
    isModuleUnlocked,
    hydrated,
  } = useApp();

  useEffect(() => {
    if (mod && isModuleUnlocked(mod.id)) setLastOpenedModule(mod.slug);
  }, [mod, isModuleUnlocked, setLastOpenedModule]);

  if (!mod) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <h1 className="text-xl font-bold">Modul tidak ditemukan</h1>
        <p className="mt-2 text-muted text-sm">
          Modul yang kamu cari belum tersedia.
        </p>
        <Link
          href="/curriculum"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow"
        >
          Lihat Kurikulum
        </Link>
      </div>
    );
  }

  const pct = hydrated ? moduleProgressPct(mod.id) : 0;
  const prev = modIndex > 0 ? curriculum[modIndex - 1] : null;
  const next = modIndex < curriculum.length - 1 ? curriculum[modIndex + 1] : null;
  const unlocked = !hydrated ? mod.month === 1 : isModuleUnlocked(mod.id);

  // Locked module: block access (only after hydration so real progress is known).
  if (hydrated && !unlocked) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-amber-400/15 text-amber-500 mb-4">
          <IconLock width={26} height={26} />
        </div>
        <h1 className="text-xl font-bold">Modul ini masih terkunci</h1>
        <p className="mt-2 text-muted text-sm">
          {prev
            ? `Selesaikan dulu modul “${prev.title}” untuk membuka ${mod.title}.`
            : `Selesaikan modul sebelumnya untuk membuka ${mod.title}.`}{" "}
          Belajar bertahap bikin fondasimu kuat.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {prev && (
            <Link
              href={`/lesson/${prev.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow hover:brightness-110 transition"
            >
              Lanjutkan {prev.title}
            </Link>
          )}
          <Link
            href="/curriculum"
            className="text-sm font-medium px-4 py-2.5 rounded-xl surface hover:border-brand-400 transition-colors"
          >
            Lihat Kurikulum
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-muted mb-4">
        <Link href="/curriculum" className="hover:text-brand-500">
          Kurikulum
        </Link>
        <span>/</span>
        <span className="text-current font-medium">Bulan {mod.month}</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="min-w-0 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card glass className="relative overflow-hidden p-6">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-violetx-500/10 blur-3xl" />
              <div className="relative flex flex-col sm:flex-row gap-5">
                <div className="rounded-2xl bg-gradient-to-br from-brand-500/10 to-violetx-500/10 p-3 text-brand-500 sm:w-48 shrink-0">
                  <Illustration type={mod.illustrationType} className="w-full h-28" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <LevelBadge level={mod.level} />
                    <span className="text-xs text-muted inline-flex items-center gap-1">
                      <IconClock width={12} height={12} /> {mod.estimatedHours} jam
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight">{mod.title}</h1>
                  <p className="mt-2 text-sm text-muted">{mod.description}</p>
                </div>
              </div>

              <div className="relative mt-5 rounded-2xl surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500 mb-2">
                  Tujuan Modul
                </p>
                <p className="text-sm">{mod.goal}</p>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {mod.learningGoals.map((g, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <IconCheck width={15} height={15} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {mod.lessons.map((lesson, i) => (
            <LessonBlock key={lesson.id} lesson={lesson} index={i} />
          ))}

          <Reveal>
            <Card className="p-6 border-2 border-dashed border-brand-500/30 bg-brand-500/[0.03]">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-500 mb-1">
                Project Modul
              </p>
              <h2 className="text-lg font-bold">{mod.project.title}</h2>
              <p className="text-sm text-muted mt-1">{mod.project.brief}</p>
              <div className="mt-3">
                <p className="text-sm font-semibold mb-2">Deliverables:</p>
                <ul className="space-y-1.5">
                  {mod.project.deliverables.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violetx-500 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {prev ? (
              <Link
                href={`/lesson/${prev.slug}`}
                className="flex-1 surface rounded-2xl p-4 hover:border-brand-400 transition-colors group"
              >
                <span className="text-xs text-muted">← Sebelumnya</span>
                <span className="block font-semibold group-hover:text-brand-500 transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next && (
              <Link
                href={`/lesson/${next.slug}`}
                className="flex-1 surface rounded-2xl p-4 hover:border-brand-400 transition-colors group text-right"
              >
                <span className="text-xs text-muted">Selanjutnya →</span>
                <span className="block font-semibold group-hover:text-brand-500 transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 space-y-4">
          <Card className="p-5 flex flex-col items-center text-center">
            <p className="text-sm font-semibold mb-3">Progress Modul</p>
            <ProgressRing value={pct} size={104} stroke={9} label="modul ini" />
            <div className="mt-4 w-full space-y-1.5">
              {mod.lessons.map((l, i) => {
                const ld = hydrated && isLessonDone(l.id);
                return (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    className="flex items-center gap-2 text-left text-sm px-2.5 py-1.5 rounded-lg hover:bg-brand-500/5 transition-colors"
                  >
                    <span
                      className={`grid place-items-center w-5 h-5 rounded-md shrink-0 text-[10px] font-bold ${
                        ld ? "bg-green-500 text-white" : "surface text-muted"
                      }`}
                    >
                      {ld ? <IconCheck width={11} height={11} /> : i + 1}
                    </span>
                    <span className="truncate text-muted">{l.title}</span>
                  </a>
                );
              })}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold text-sm mb-3">Checklist Kelulusan Modul</h3>
            <Checklist storageKey={`module:${mod.id}`} items={mod.checklist} />
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold text-sm mb-2">Skill yang Dilatih</h3>
            <div className="flex flex-wrap gap-1.5">
              {mod.skills.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-brand-500/8 text-brand-500"
                >
                  {SKILL_LABELS[s]}
                </span>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
