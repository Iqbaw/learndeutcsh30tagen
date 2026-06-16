"use client";

import { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { IconClose, IconMenu } from "@/components/icons";

type BlockType = "Header" | "Hero" | "Text" | "Image" | "Button" | "Cards";

interface Block {
  id: number;
  type: BlockType;
}

const PALETTE: BlockType[] = ["Header", "Hero", "Text", "Image", "Button", "Cards"];

let uid = 200;

function BlockPreview({ type }: { type: BlockType }) {
  switch (type) {
    case "Header":
      return (
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-current/30" />
          <div className="flex gap-2">
            <div className="h-2.5 w-10 rounded bg-current/15" />
            <div className="h-2.5 w-10 rounded bg-current/15" />
          </div>
        </div>
      );
    case "Hero":
      return (
        <div className="space-y-2">
          <div className="h-4 w-2/3 rounded bg-current/30" />
          <div className="h-2.5 w-full rounded bg-current/15" />
          <div className="h-7 w-24 rounded-lg bg-brand-500/60" />
        </div>
      );
    case "Text":
      return (
        <div className="space-y-1.5">
          <div className="h-2.5 w-full rounded bg-current/15" />
          <div className="h-2.5 w-5/6 rounded bg-current/15" />
          <div className="h-2.5 w-3/4 rounded bg-current/15" />
        </div>
      );
    case "Image":
      return <div className="h-16 w-full rounded-lg bg-current/10 grid place-items-center text-[10px] text-muted">IMG</div>;
    case "Button":
      return <div className="h-8 w-28 rounded-lg bg-brand-500/60" />;
    case "Cards":
      return (
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-14 rounded-lg bg-current/10" />
          ))}
        </div>
      );
  }
}

function Item({ block, onRemove }: { block: Block; onRemove: () => void }) {
  const controls = useDragControls();
  return (
    <Reorder.Item
      value={block}
      dragListener={false}
      dragControls={controls}
      className="relative surface rounded-xl p-4 group"
      whileDrag={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}
    >
      <div className="flex items-center gap-3">
        <button
          onPointerDown={(e) => controls.start(e)}
          className="cursor-grab active:cursor-grabbing text-muted touch-none"
          aria-label="Geser untuk mengatur urutan"
        >
          <IconMenu width={16} height={16} />
        </button>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted w-14 shrink-0">
          {block.type}
        </span>
        <div className="flex-1 min-w-0">
          <BlockPreview type={block.type} />
        </div>
        <button
          onClick={onRemove}
          className="grid place-items-center w-6 h-6 rounded-lg text-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Hapus ${block.type}`}
        >
          <IconClose width={14} height={14} />
        </button>
      </div>
    </Reorder.Item>
  );
}

export function WireframeBuilder() {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: 1, type: "Header" },
    { id: 2, type: "Hero" },
    { id: 3, type: "Cards" },
  ]);

  const add = (type: BlockType) => setBlocks((b) => [...b, { id: ++uid, type }]);
  const remove = (id: number) => setBlocks((b) => b.filter((x) => x.id !== id));

  return (
    <div className="grid lg:grid-cols-[200px_1fr] gap-5">
      <div>
        <p className="text-sm text-muted mb-2">Tambah blok</p>
        <div className="flex lg:flex-col flex-wrap gap-2">
          {PALETTE.map((t) => (
            <button
              key={t}
              onClick={() => add(t)}
              className="text-xs font-semibold px-3 py-2 rounded-xl surface hover:border-brand-400 transition-colors text-left flex-1 lg:flex-none"
            >
              + {t}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted mt-3 hidden lg:block">
          Seret ikon garis untuk mengubah urutan blok.
        </p>
      </div>

      <div className="surface rounded-2xl p-4 min-h-[280px]">
        <div className="text-[10px] text-muted mb-2 text-center">— Canvas Wireframe —</div>
        {blocks.length === 0 ? (
          <div className="grid place-items-center h-48 text-sm text-muted">
            Belum ada blok. Tambahkan dari panel kiri.
          </div>
        ) : (
          <Reorder.Group axis="y" values={blocks} onReorder={setBlocks} className="space-y-2.5">
            {blocks.map((block) => (
              <Item key={block.id} block={block} onRemove={() => remove(block.id)} />
            ))}
          </Reorder.Group>
        )}
      </div>
    </div>
  );
}
