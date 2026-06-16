"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppProvider";
import { DailyChecklist } from "@/components/DailyChecklist";
import { PageHeader, Card, InfoCallout } from "@/components/ui";
import { DAILY_TASKS, DAILY_QUOTES } from "@/data/dailyPlan";
import { todayKey } from "@/lib/storage";
import { IconFlame } from "@/components/icons";

const DAY_LABELS = ["S", "S", "R", "K", "J", "S", "M"]; // Sen-Min (id)

export default function DailyPlanPage() {
  const { dailyChecklist, streak, isDailyTaskDone, hydrated } = useApp();

  const totalMinutes = DAILY_TASKS.reduce((a, t) => a + t.minutes, 0);
  const doneToday = hydrated
    ? DAILY_TASKS.filter((t) => isDailyTaskDone(t.id)).length
    : 0;

  const { cells, monthName } = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const first = new Date(year, month, 1);
    const startDay = (first.getDay() + 6) % 7; // make Monday=0
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const arr: ({ day: number; key: string; active: boolean; today: boolean } | null)[] = [];
    for (let i = 0; i < startDay; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const key = todayKey(new Date(year, month, d));
      const active = Boolean(
        dailyChecklist[key] && Object.values(dailyChecklist[key]).some(Boolean),
      );
      arr.push({
        day: d,
        key,
        active,
        today: key === todayKey(),
      });
    }
    return {
      cells: arr,
      monthName: now.toLocaleDateString("id-ID", { month: "long", year: "numeric" }),
    };
  }, [dailyChecklist]);

  const quote = DAILY_QUOTES[new Date().getDate() % DAILY_QUOTES.length];

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader
        eyebrow="Daily Learning Plan"
        title="Rutinitas Belajar 2 Jam 45 Menit"
        desc="Konsistensi kecil setiap hari mengalahkan ledakan motivasi sesekali. Centang tugasmu, jaga streak, dan biarkan kebiasaan bekerja."
      />

      <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-4">
          <Card glass className="p-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-amber-400/15 text-amber-500">
                  <IconFlame width={22} height={22} />
                </span>
                <div>
                  <p className="text-2xl font-bold tabular-nums leading-none">
                    {hydrated ? streak : 0}
                  </p>
                  <p className="text-xs text-muted">hari streak</p>
                </div>
              </div>
              <div className="h-10 w-px bg-[var(--border)] hidden sm:block" />
              <div>
                <p className="text-2xl font-bold tabular-nums leading-none">
                  {doneToday}/{DAILY_TASKS.length}
                </p>
                <p className="text-xs text-muted">tugas hari ini</p>
              </div>
              <div className="h-10 w-px bg-[var(--border)] hidden sm:block" />
              <div>
                <p className="text-2xl font-bold tabular-nums leading-none">
                  {Math.floor(totalMinutes / 60)}j {totalMinutes % 60}m
                </p>
                <p className="text-xs text-muted">target harian</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="font-bold text-lg mb-1">Checklist Hari Ini</h2>
            <p className="text-sm text-muted mb-4">{quote}</p>
            <DailyChecklist />
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="p-5">
            <h3 className="font-semibold text-sm mb-3 capitalize">{monthName}</h3>
            <div className="grid grid-cols-7 gap-1.5 text-center">
              {DAY_LABELS.map((d, i) => (
                <span key={i} className="text-[10px] text-muted font-medium py-1">
                  {d}
                </span>
              ))}
              {cells.map((cell, i) =>
                cell === null ? (
                  <span key={`e${i}`} />
                ) : (
                  <motion.span
                    key={cell.key}
                    initial={cell.active ? { scale: 0.6 } : false}
                    animate={{ scale: 1 }}
                    className={`grid place-items-center aspect-square rounded-lg text-xs font-medium ${
                      cell.active
                        ? "bg-gradient-to-br from-limex-400 to-cyanx-500 text-ink-950 font-bold"
                        : cell.today
                          ? "ring-2 ring-brand-500/50 text-brand-500"
                          : "surface text-muted"
                    }`}
                  >
                    {cell.day}
                  </motion.span>
                ),
              )}
            </div>
            <p className="text-[11px] text-muted mt-3">
              Hari dengan minimal satu tugas selesai akan tersorot hijau.
            </p>
          </Card>

          <InfoCallout tone="green" title="Kenapa rutinitas ini bekerja">
            Teori membangun pemahaman, praktik membangun keahlian, review membangun selera, dan dokumentasi membangun portfolio. Empat-empatnya saling menguatkan.
          </InfoCallout>
        </aside>
      </div>
    </div>
  );
}
