"use client";

import { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "@/lib/storage";

/**
 * useState that hydrates from and persists to localStorage.
 * Starts from `initial` on the server and first client render to avoid
 * hydration mismatch, then loads the saved value after mount.
 */
export function usePersistentState<T>(
  key: string,
  initial: T,
): [T, (v: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    const saved = loadJSON<T | null>(`pg:${key}`, null);
    if (saved !== null) setValue(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = (v: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const next = typeof v === "function" ? (v as (p: T) => T)(prev) : v;
      saveJSON(`pg:${key}`, next);
      return next;
    });
  };

  return [value, update];
}
