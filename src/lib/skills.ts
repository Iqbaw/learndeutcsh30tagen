import { curriculum } from "@/data/curriculum";
import type { SkillKey } from "@/lib/types";

const SKILL_ORDER: SkillKey[] = [
  "visualUI",
  "uxThinking",
  "research",
  "figma",
  "designSystem",
  "accessibility",
  "productThinking",
  "handoff",
  "portfolio",
];

export function computeSkillScores(
  completedLessons: string[],
): Record<SkillKey, number> {
  // For each skill, gather lessons from modules tagged with that skill,
  // score = completed / total within those modules.
  const totals: Record<string, number> = {};
  const done: Record<string, number> = {};
  for (const key of SKILL_ORDER) {
    totals[key] = 0;
    done[key] = 0;
  }

  for (const mod of curriculum) {
    for (const skill of mod.skills) {
      totals[skill] += mod.lessons.length;
      done[skill] += mod.lessons.filter((l) =>
        completedLessons.includes(l.id),
      ).length;
    }
  }

  const out = {} as Record<SkillKey, number>;
  for (const key of SKILL_ORDER) {
    out[key] = totals[key] === 0 ? 0 : Math.round((done[key] / totals[key]) * 100);
  }
  return out;
}

export { SKILL_ORDER };
