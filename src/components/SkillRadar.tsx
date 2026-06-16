"use client";

import { motion } from "framer-motion";
import { SKILL_ORDER } from "@/lib/skills";
import { SKILL_LABELS } from "@/data/curriculum";
import type { SkillKey } from "@/lib/types";

interface Props {
  scores: Record<SkillKey, number>;
  size?: number;
}

export function SkillRadar({ scores, size = 260 }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 38;
  const n = SKILL_ORDER.length;
  const levels = 4;

  const pointFor = (i: number, value: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (value / 100) * radius;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  };

  const labelPos = (i: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = radius + 18;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  };

  const polygon = SKILL_ORDER.map((k, i) => pointFor(i, scores[k] || 0))
    .map((p) => p.join(","))
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[320px] mx-auto"
      role="img"
      aria-label="Skill radar perkembangan kemampuan"
    >
      <defs>
        <linearGradient id="radar-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3461ff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* grid rings */}
      {Array.from({ length: levels }).map((_, l) => {
        const rr = (radius * (l + 1)) / levels;
        const pts = SKILL_ORDER.map((_, i) => {
          const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
          return [cx + rr * Math.cos(angle), cy + rr * Math.sin(angle)].join(",");
        }).join(" ");
        return (
          <polygon
            key={l}
            points={pts}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
          />
        );
      })}

      {/* spokes */}
      {SKILL_ORDER.map((_, i) => {
        const [x, y] = pointFor(i, 100);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeOpacity={0.08}
          />
        );
      })}

      {/* data polygon */}
      <motion.polygon
        points={polygon}
        fill="url(#radar-fill)"
        stroke="#3461ff"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* points */}
      {SKILL_ORDER.map((k, i) => {
        const [x, y] = pointFor(i, scores[k] || 0);
        return <circle key={k} cx={x} cy={y} r={3} fill="#8b5cf6" />;
      })}

      {/* labels */}
      {SKILL_ORDER.map((k, i) => {
        const [x, y] = labelPos(i);
        const anchor = x < cx - 4 ? "end" : x > cx + 4 ? "start" : "middle";
        return (
          <text
            key={k}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            className="fill-current"
            fontSize="9"
            opacity={0.75}
          >
            {SKILL_LABELS[k]}
          </text>
        );
      })}
    </svg>
  );
}
