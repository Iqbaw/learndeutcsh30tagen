"use client";

import { motion } from "framer-motion";
import type { IllustrationType } from "@/lib/types";

interface Props {
  type: IllustrationType;
  className?: string;
  animate?: boolean;
}

const C = {
  brand: "#3461ff",
  brand2: "#598dff",
  violet: "#8b5cf6",
  cyan: "#06b6d4",
  lime: "#84cc16",
  amber: "#f59e0b",
  red: "#ef4444",
  green: "#22c55e",
};

const loop = (delay = 0) => ({
  animate: { y: [0, -4, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
});

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ill-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.brand} />
          <stop offset="1" stopColor={C.violet} />
        </linearGradient>
        <linearGradient id="ill-g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.cyan} />
          <stop offset="1" stopColor={C.brand} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

export function Illustration({ type, className, animate = true }: Props) {
  const a = animate;
  return (
    <div className={className} aria-hidden="true">
      <Frame>
        {type === "typography" && (
          <g>
            <motion.rect x="20" y="24" width="120" height="16" rx="4" fill="url(#ill-g1)" {...(a ? loop(0) : {})} />
            <motion.rect x="20" y="52" width="90" height="10" rx="3" fill={C.brand2} opacity="0.7" {...(a ? loop(0.3) : {})} />
            <rect x="20" y="72" width="150" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <rect x="20" y="84" width="150" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <rect x="20" y="96" width="110" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <motion.rect x="20" y="112" width="40" height="6" rx="3" fill={C.cyan} opacity="0.8" {...(a ? loop(0.6) : {})} />
          </g>
        )}

        {type === "spacing" && (
          <g>
            {[0, 1, 2, 3].map((i) => (
              <line key={`v${i}`} x1={30 + i * 40} y1="20" x2={30 + i * 40} y2="120" stroke="currentColor" strokeOpacity="0.12" />
            ))}
            {[0, 1, 2].map((i) => (
              <line key={`h${i}`} x1="20" y1={40 + i * 30} x2="180" y2={40 + i * 30} stroke="currentColor" strokeOpacity="0.12" />
            ))}
            <motion.rect x="40" y="44" width="80" height="52" rx="10" fill="url(#ill-g1)" {...(a ? { animate: { scale: [1, 1.03, 1] }, transition: { duration: 3, repeat: Infinity } } : {})} />
            <rect x="52" y="56" width="56" height="8" rx="4" fill="#fff" opacity="0.85" />
            <rect x="52" y="72" width="36" height="6" rx="3" fill="#fff" opacity="0.6" />
            <circle cx="150" cy="58" r="6" fill={C.cyan} />
            <circle cx="150" cy="88" r="6" fill={C.lime} />
          </g>
        )}

        {type === "userflow" && (
          <g>
            <motion.rect x="14" y="58" width="34" height="24" rx="8" fill="url(#ill-g1)" {...(a ? loop(0) : {})} />
            <rect x="84" y="58" width="34" height="24" rx="8" fill={C.brand2} />
            <motion.path d="M150 70 l16 -16 l16 16 l-16 16 z" fill={C.violet} {...(a ? loop(0.4) : {})} />
            <path d="M48 70 H84" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
            <path d="M118 70 H150" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
            <circle cx="84" cy="70" r="2.5" fill="currentColor" />
            <circle cx="150" cy="70" r="2.5" fill="currentColor" />
            <motion.circle cx="166" cy="116" r="9" fill={C.green} {...(a ? loop(0.8) : {})} />
            <motion.circle cx="166" cy="24" r="9" fill={C.red} opacity="0.85" {...(a ? loop(0.2) : {})} />
            <path d="M166 86 V107" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M166 54 V33" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {type === "wireframe" && (
          <g>
            <rect x="22" y="20" width="156" height="100" rx="10" stroke="currentColor" strokeOpacity="0.25" />
            <motion.rect x="34" y="32" width="60" height="10" rx="3" fill="url(#ill-g1)" {...(a ? loop(0) : {})} />
            <rect x="34" y="52" width="132" height="34" rx="6" fill="currentColor" opacity="0.08" />
            <rect x="42" y="60" width="40" height="6" rx="3" fill="currentColor" opacity="0.3" />
            <rect x="42" y="72" width="70" height="5" rx="2" fill="currentColor" opacity="0.2" />
            <motion.rect x="34" y="96" width="44" height="14" rx="7" fill={C.brand} {...(a ? loop(0.4) : {})} />
            <rect x="86" y="96" width="44" height="14" rx="7" stroke="currentColor" strokeOpacity="0.3" />
          </g>
        )}

        {type === "figma" && (
          <g>
            <motion.circle cx="70" cy="50" r="16" fill={C.red} {...(a ? loop(0) : {})} />
            <motion.circle cx="102" cy="50" r="16" fill={C.violet} {...(a ? loop(0.2) : {})} />
            <motion.circle cx="70" cy="86" r="16" fill={C.green} {...(a ? loop(0.4) : {})} />
            <motion.circle cx="102" cy="86" r="16" fill={C.cyan} {...(a ? loop(0.6) : {})} />
            <motion.circle cx="134" cy="86" r="16" fill={C.amber} {...(a ? loop(0.8) : {})} />
            <rect x="20" y="24" width="40" height="8" rx="4" fill="currentColor" opacity="0.2" />
          </g>
        )}

        {type === "mobile" && (
          <g>
            <rect x="74" y="16" width="52" height="108" rx="12" fill="url(#ill-g1)" />
            <rect x="80" y="26" width="40" height="76" rx="6" fill="#fff" opacity="0.92" />
            <rect x="86" y="34" width="28" height="6" rx="3" fill={C.brand} opacity="0.7" />
            <rect x="86" y="46" width="28" height="20" rx="4" fill={C.brand} opacity="0.12" />
            <motion.circle cx="88" cy="112" r="3" fill="#fff" {...(a ? loop(0) : {})} />
            <motion.circle cx="100" cy="112" r="3" fill="#fff" opacity="0.6" {...(a ? loop(0.3) : {})} />
            <motion.circle cx="112" cy="112" r="3" fill="#fff" opacity="0.6" {...(a ? loop(0.6) : {})} />
          </g>
        )}

        {type === "dashboard" && (
          <g>
            <rect x="18" y="22" width="36" height="96" rx="8" fill="url(#ill-g1)" />
            <rect x="62" y="22" width="120" height="22" rx="6" fill="currentColor" opacity="0.08" />
            <motion.rect x="62" y="52" width="36" height="28" rx="6" fill={C.brand} {...(a ? loop(0) : {})} />
            <motion.rect x="104" y="52" width="36" height="28" rx="6" fill={C.violet} {...(a ? loop(0.3) : {})} />
            <motion.rect x="146" y="52" width="36" height="28" rx="6" fill={C.cyan} {...(a ? loop(0.6) : {})} />
            <rect x="62" y="88" width="120" height="30" rx="6" fill="currentColor" opacity="0.08" />
            <rect x="70" y="96" width="104" height="5" rx="2" fill="currentColor" opacity="0.25" />
            <rect x="70" y="106" width="80" height="5" rx="2" fill="currentColor" opacity="0.2" />
          </g>
        )}

        {type === "designsystem" && (
          <g>
            <motion.path d="M100 22 L150 110 H50 Z" fill="url(#ill-g1)" opacity="0.18" {...(a ? { animate: { scale: [1, 1.02, 1] }, transition: { duration: 4, repeat: Infinity } } : {})} />
            <circle cx="100" cy="42" r="9" fill={C.brand} />
            <circle cx="84" cy="72" r="9" fill={C.violet} />
            <circle cx="116" cy="72" r="9" fill={C.cyan} />
            <circle cx="70" cy="102" r="9" fill={C.lime} />
            <circle cx="100" cy="102" r="9" fill={C.amber} />
            <circle cx="130" cy="102" r="9" fill={C.green} />
          </g>
        )}

        {type === "accessibility" && (
          <g>
            <motion.circle cx="100" cy="70" r="40" stroke="url(#ill-g1)" strokeWidth="6" {...(a ? { animate: { rotate: 360 }, transition: { duration: 16, repeat: Infinity, ease: "linear" } } : {})} style={{ transformOrigin: "100px 70px" }} />
            <circle cx="100" cy="48" r="7" fill={C.brand} />
            <rect x="92" y="60" width="16" height="30" rx="6" fill={C.violet} />
            <rect x="78" y="66" width="44" height="6" rx="3" fill={C.cyan} />
          </g>
        )}

        {type === "funnel" && (
          <g>
            <motion.path d="M40 28 H160 L132 60 H68 Z" fill={C.brand} {...(a ? loop(0) : {})} />
            <motion.path d="M68 66 H132 L116 96 H84 Z" fill={C.violet} {...(a ? loop(0.3) : {})} />
            <motion.path d="M84 102 H116 L108 124 H92 Z" fill={C.cyan} {...(a ? loop(0.6) : {})} />
          </g>
        )}

        {type === "handoff" && (
          <g>
            <rect x="24" y="34" width="60" height="72" rx="8" fill="url(#ill-g1)" />
            <rect x="32" y="44" width="44" height="6" rx="3" fill="#fff" opacity="0.8" />
            <rect x="32" y="56" width="30" height="6" rx="3" fill="#fff" opacity="0.5" />
            <motion.path d="M90 70 H110" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" markerEnd="url(#arrow)" {...(a ? { animate: { x: [0, 4, 0] }, transition: { duration: 2, repeat: Infinity } } : {})} />
            <rect x="116" y="34" width="60" height="72" rx="8" fill="none" stroke={C.cyan} strokeWidth="2" />
            <text x="124" y="60" fontSize="9" fill={C.cyan} fontFamily="monospace">&lt;div&gt;</text>
            <text x="128" y="74" fontSize="9" fill={C.violet} fontFamily="monospace">p-4</text>
            <text x="124" y="88" fontSize="9" fill={C.cyan} fontFamily="monospace">&lt;/div&gt;</text>
          </g>
        )}

        {type === "ai" && (
          <g>
            <motion.rect x="40" y="40" width="120" height="44" rx="12" fill="url(#ill-g1)" {...(a ? { animate: { opacity: [0.85, 1, 0.85] }, transition: { duration: 2.4, repeat: Infinity } } : {})} />
            <rect x="52" y="52" width="70" height="6" rx="3" fill="#fff" opacity="0.85" />
            <rect x="52" y="64" width="44" height="6" rx="3" fill="#fff" opacity="0.55" />
            <motion.circle cx="138" cy="62" r="4" fill="#fff" {...(a ? { animate: { scale: [1, 1.4, 1] }, transition: { duration: 1, repeat: Infinity } } : {})} />
            <rect x="40" y="96" width="84" height="16" rx="8" stroke="currentColor" strokeOpacity="0.3" />
            <rect x="132" y="96" width="28" height="16" rx="8" fill={C.cyan} />
          </g>
        )}

        {type === "portfolio" && (
          <g>
            <motion.rect x="28" y="30" width="64" height="80" rx="8" fill="url(#ill-g1)" {...(a ? loop(0) : {})} />
            <rect x="36" y="40" width="48" height="28" rx="4" fill="#fff" opacity="0.85" />
            <rect x="36" y="74" width="48" height="5" rx="2" fill="#fff" opacity="0.6" />
            <rect x="36" y="84" width="34" height="5" rx="2" fill="#fff" opacity="0.4" />
            <motion.rect x="104" y="40" width="68" height="12" rx="4" fill={C.violet} {...(a ? loop(0.3) : {})} />
            <rect x="104" y="60" width="68" height="6" rx="3" fill="currentColor" opacity="0.2" />
            <rect x="104" y="72" width="68" height="6" rx="3" fill="currentColor" opacity="0.2" />
            <rect x="104" y="84" width="44" height="6" rx="3" fill="currentColor" opacity="0.2" />
            <motion.rect x="104" y="98" width="40" height="12" rx="6" fill={C.cyan} {...(a ? loop(0.6) : {})} />
          </g>
        )}
      </Frame>
    </div>
  );
}
