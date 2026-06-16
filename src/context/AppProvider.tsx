"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { loadJSON, saveJSON, todayKey, daysBetween } from "@/lib/storage";
import { curriculum } from "@/data/curriculum";

type Theme = "light" | "dark";

interface DailyChecklistMap {
  [dateKey: string]: { [taskId: string]: boolean };
}

interface AppState {
  theme: Theme;
  toggleTheme: () => void;

  completedLessons: string[];
  completedModules: string[];
  lastOpenedModule: string | null;

  dailyChecklist: DailyChecklistMap;
  streak: number;

  hydrated: boolean;

  toggleLesson: (lessonId: string) => void;
  isLessonDone: (lessonId: string) => boolean;
  setLastOpenedModule: (slug: string) => void;

  toggleDailyTask: (taskId: string) => void;
  isDailyTaskDone: (taskId: string, dateKey?: string) => boolean;

  totalLessons: number;
  totalProgressPct: number;
  moduleProgressPct: (moduleId: string) => number;
  isModuleComplete: (moduleId: string) => boolean;
  isModuleUnlocked: (moduleId: string) => boolean;
}

const AppContext = createContext<AppState | null>(null);

const allLessonIds = curriculum.flatMap((m) => m.lessons.map((l) => l.id));

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [lastOpenedModule, setLastOpenedModuleState] = useState<string | null>(
    null,
  );
  const [dailyChecklist, setDailyChecklist] = useState<DailyChecklistMap>({});
  const [streak, setStreak] = useState<number>(0);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const storedTheme = loadJSON<Theme>("theme", "light");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme =
      (loadJSON<Theme | null>("theme", null) as Theme | null) ??
      (prefersDark ? "dark" : "light");
    setTheme(storedTheme ?? initialTheme);

    setCompletedLessons(loadJSON<string[]>("completedLessons", []));
    setLastOpenedModuleState(loadJSON<string | null>("lastOpenedModule", null));
    const dc = loadJSON<DailyChecklistMap>("dailyChecklist", {});
    setDailyChecklist(dc);
    setStreak(loadJSON<number>("streak", 0));
    setHydrated(true);
  }, []);

  // Apply theme class
  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    saveJSON("theme", theme);
  }, [theme, hydrated]);

  const persist = useCallback(
    (next: {
      completedLessons?: string[];
      lastOpenedModule?: string | null;
      dailyChecklist?: DailyChecklistMap;
      streak?: number;
    }) => {
      if (next.completedLessons) saveJSON("completedLessons", next.completedLessons);
      if (next.lastOpenedModule !== undefined)
        saveJSON("lastOpenedModule", next.lastOpenedModule);
      if (next.dailyChecklist) saveJSON("dailyChecklist", next.dailyChecklist);
      if (next.streak !== undefined) saveJSON("streak", next.streak);
    },
    [],
  );

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const toggleLesson = useCallback(
    (lessonId: string) => {
      setCompletedLessons((prev) => {
        const next = prev.includes(lessonId)
          ? prev.filter((id) => id !== lessonId)
          : [...prev, lessonId];
        persist({ completedLessons: next });
        return next;
      });
    },
    [persist],
  );

  const isLessonDone = useCallback(
    (lessonId: string) => completedLessons.includes(lessonId),
    [completedLessons],
  );

  const setLastOpenedModule = useCallback(
    (slug: string) => {
      setLastOpenedModuleState(slug);
      persist({ lastOpenedModule: slug });
    },
    [persist],
  );

  const recomputeStreak = useCallback(
    (dc: DailyChecklistMap) => {
      // Streak = consecutive days (ending today or yesterday) with >=1 completed task
      const today = todayKey();
      const hasAny = (k: string) =>
        dc[k] && Object.values(dc[k]).some(Boolean);

      // Determine the most recent active anchor
      let anchor = today;
      if (!hasAny(today)) {
        // if today not active yet, allow streak to continue from yesterday
        const d = new Date();
        d.setDate(d.getDate() - 1);
        anchor = todayKey(d);
        if (!hasAny(anchor)) return 0;
      }

      let count = 0;
      const cursor = new Date(anchor + "T00:00:00");
      // walk backwards while days are active
      // safety bound 400 iterations
      for (let i = 0; i < 400; i++) {
        const k = todayKey(cursor);
        if (hasAny(k)) {
          count += 1;
          cursor.setDate(cursor.getDate() - 1);
        } else {
          break;
        }
      }
      // If anchor was today, count includes today. Good.
      void daysBetween;
      return count;
    },
    [],
  );

  const toggleDailyTask = useCallback(
    (taskId: string) => {
      const key = todayKey();
      setDailyChecklist((prev) => {
        const day = { ...(prev[key] ?? {}) };
        day[taskId] = !day[taskId];
        const next = { ...prev, [key]: day };
        const newStreak = recomputeStreak(next);
        setStreak(newStreak);
        persist({ dailyChecklist: next, streak: newStreak });
        return next;
      });
    },
    [persist, recomputeStreak],
  );

  const isDailyTaskDone = useCallback(
    (taskId: string, dateKey?: string) => {
      const key = dateKey ?? todayKey();
      return Boolean(dailyChecklist[key]?.[taskId]);
    },
    [dailyChecklist],
  );

  const moduleProgressPct = useCallback(
    (moduleId: string) => {
      const mod = curriculum.find((m) => m.id === moduleId);
      if (!mod || mod.lessons.length === 0) return 0;
      const done = mod.lessons.filter((l) =>
        completedLessons.includes(l.id),
      ).length;
      return Math.round((done / mod.lessons.length) * 100);
    },
    [completedLessons],
  );

  const isModuleComplete = useCallback(
    (moduleId: string) => moduleProgressPct(moduleId) === 100,
    [moduleProgressPct],
  );

  // A module is unlocked when it is the first module, has any progress,
  // or the previous module is fully complete.
  const isModuleUnlocked = useCallback(
    (moduleId: string) => {
      const idx = curriculum.findIndex((m) => m.id === moduleId);
      if (idx <= 0) return true;
      if (moduleProgressPct(moduleId) > 0) return true;
      return isModuleComplete(curriculum[idx - 1].id);
    },
    [moduleProgressPct, isModuleComplete],
  );

  const completedModules = useMemo(
    () => curriculum.filter((m) => isModuleComplete(m.id)).map((m) => m.id),
    [isModuleComplete],
  );

  const totalLessons = allLessonIds.length;
  const totalProgressPct = useMemo(() => {
    if (totalLessons === 0) return 0;
    const done = completedLessons.filter((id) =>
      allLessonIds.includes(id),
    ).length;
    return Math.round((done / totalLessons) * 100);
  }, [completedLessons, totalLessons]);

  const value: AppState = {
    theme,
    toggleTheme,
    completedLessons,
    completedModules,
    lastOpenedModule,
    dailyChecklist,
    streak,
    hydrated,
    toggleLesson,
    isLessonDone,
    setLastOpenedModule,
    toggleDailyTask,
    isDailyTaskDone,
    totalLessons,
    totalProgressPct,
    moduleProgressPct,
    isModuleComplete,
    isModuleUnlocked,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
