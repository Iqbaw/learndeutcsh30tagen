"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProvider";
import { DAILY_TASKS } from "@/data/dailyPlan";
import { IconCheck, IconClock } from "@/components/icons";

const ACCENT: Record<string, string> = {
  blue: "from-brand-500 to-brand-600",
  violet: "from-violetx-500 to-violetx-600",
  cyan: "from-cyanx-400 to-cyanx-500",
  lime: "from-limex-400 to-limex-500",
};

export function DailyChecklist({ compact = false }: { compact?: boolean }) {
  const { toggleDailyTask, isDailyTaskDone, hydrated } = useApp();

  return (
    <ul className="space-y-2">
      {DAILY_TASKS.map((task) => {
        const done = hydrated && isDailyTaskDone(task.id);
        return (
          <li key={task.id}>
            <button
              onClick={() => toggleDailyTask(task.id)}
              className={`w-full text-left flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                done
                  ? "border-green-500/40 bg-green-500/5"
                  : "border-[var(--border)] hover:border-brand-400"
              }`}
              aria-pressed={done}
            >
              <span
                className={`relative grid place-items-center w-6 h-6 rounded-lg shrink-0 mt-0.5 transition-colors ${
                  done ? "bg-green-500" : `bg-gradient-to-br ${ACCENT[task.accent]}`
                }`}
              >
                <motion.span
                  initial={false}
                  animate={done ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                >
                  <IconCheck width={14} height={14} className="text-white" />
                </motion.span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-medium ${done ? "line-through text-muted" : ""}`}
                  >
                    {task.title}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-muted shrink-0">
                    <IconClock width={12} height={12} />
                    {task.minutes}m
                  </span>
                </span>
                {!compact && (
                  <span className="block text-xs text-muted mt-1 leading-relaxed">
                    {task.description}
                  </span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
