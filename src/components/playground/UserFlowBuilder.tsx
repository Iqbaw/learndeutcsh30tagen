"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconClose } from "@/components/icons";

type NodeType = "Start" | "Action" | "Decision" | "Success" | "Error";

interface FlowNode {
  id: number;
  type: NodeType;
}

const NODE_STYLE: Record<NodeType, { cls: string; shape: string }> = {
  Start: { cls: "from-brand-500 to-brand-600 text-white", shape: "rounded-full" },
  Action: { cls: "from-slate-500 to-slate-600 text-white", shape: "rounded-xl" },
  Decision: { cls: "from-violetx-500 to-violetx-600 text-white", shape: "rounded-xl rotate-45" },
  Success: { cls: "from-green-500 to-green-600 text-white", shape: "rounded-xl" },
  Error: { cls: "from-red-500 to-orange-500 text-white", shape: "rounded-xl" },
};

const PALETTE: NodeType[] = ["Start", "Action", "Decision", "Success", "Error"];

let counter = 100;

export function UserFlowBuilder() {
  const [nodes, setNodes] = useState<FlowNode[]>([
    { id: 1, type: "Start" },
    { id: 2, type: "Action" },
    { id: 3, type: "Decision" },
  ]);

  const add = (type: NodeType) => {
    setNodes((n) => [...n, { id: ++counter, type }]);
  };
  const remove = (id: number) => setNodes((n) => n.filter((x) => x.id !== id));
  const reset = () =>
    setNodes([
      { id: 1, type: "Start" },
      { id: 2, type: "Action" },
      { id: 3, type: "Decision" },
    ]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm text-muted mr-1">Tambah node:</span>
        {PALETTE.map((t) => (
          <button
            key={t}
            onClick={() => add(t)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full surface hover:border-brand-400 transition-colors"
          >
            + {t}
          </button>
        ))}
        <button
          onClick={reset}
          className="text-xs font-medium px-3 py-1.5 rounded-full text-muted hover:text-current ml-auto"
        >
          Reset
        </button>
      </div>

      <div className="surface rounded-2xl p-5 overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-1 min-w-max py-4">
          <AnimatePresence mode="popLayout">
            {nodes.map((node, i) => {
              const s = NODE_STYLE[node.type];
              const isDiamond = node.type === "Decision";
              return (
                <motion.div
                  key={node.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="flex items-center"
                >
                  <div className="relative group">
                    <div
                      className={`grid place-items-center w-[88px] h-[60px] bg-gradient-to-br shadow-soft ${s.cls} ${
                        isDiamond ? "rounded-xl rotate-45 w-[58px] h-[58px]" : "rounded-xl"
                      }`}
                    >
                      <span className={`text-xs font-bold ${isDiamond ? "-rotate-45" : ""}`}>
                        {node.type}
                      </span>
                    </div>
                    <button
                      onClick={() => remove(node.id)}
                      className="absolute -top-2 -right-2 grid place-items-center w-5 h-5 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Hapus node ${node.type}`}
                    >
                      <IconClose width={11} height={11} />
                    </button>
                  </div>
                  {i < nodes.length - 1 && (
                    <svg width="36" height="12" className="text-muted shrink-0">
                      <line x1="0" y1="6" x2="28" y2="6" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                      <path d="M28 2 L34 6 L28 10" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          {nodes.length === 0 && (
            <p className="text-sm text-muted">Belum ada node. Tambahkan dari tombol di atas.</p>
          )}
        </div>
      </div>
      <p className="text-xs text-muted mt-2">
        Tip: flow yang baik selalu punya jalur Success dan Error, bukan cuma happy path.
      </p>
    </div>
  );
}
