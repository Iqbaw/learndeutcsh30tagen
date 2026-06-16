"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { QuizQuestion } from "@/lib/types";
import { IconCheck, IconClose } from "@/components/icons";

interface Props {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export function Quiz({ questions, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q?.answer;

  const choose = (i: number) => {
    if (locked) return;
    setSelected(i);
    setLocked(true);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setLocked(false);
    } else {
      setDone(true);
      onComplete?.(score + (isCorrect ? 0 : 0));
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const great = pct >= 67;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-6"
      >
        <div
          className={`mx-auto grid place-items-center w-16 h-16 rounded-2xl mb-3 ${
            great ? "bg-green-500/15 text-green-500" : "bg-amber-400/15 text-amber-500"
          }`}
        >
          <span className="text-2xl font-bold">{pct}%</span>
        </div>
        <p className="font-semibold">
          {great ? "Mantap. Kamu mulai berpikir seperti designer." : "Lumayan, ayo perkuat lagi konsepnya."}
        </p>
        <p className="text-sm text-muted mt-1">
          Benar {score} dari {questions.length} soal.
        </p>
        <button
          onClick={restart}
          className="mt-4 text-sm font-medium px-4 py-2 rounded-xl surface hover:border-brand-400 transition-colors"
        >
          Ulangi Quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-muted">
          Soal {current + 1} dari {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i < current
                  ? "bg-brand-500"
                  : i === current
                    ? "bg-brand-400"
                    : "bg-current/15"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
        >
          <p className="font-medium mb-4">{q.q}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isThis = selected === i;
              const showCorrect = locked && i === q.answer;
              const showWrong = locked && isThis && i !== q.answer;
              return (
                <motion.button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={locked}
                  whileTap={!locked ? { scale: 0.98 } : undefined}
                  animate={
                    showWrong
                      ? { x: [0, -6, 6, -4, 4, 0] }
                      : showCorrect
                        ? { scale: [1, 1.02, 1] }
                        : {}
                  }
                  transition={{ duration: 0.4 }}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border text-sm transition-colors ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showWrong
                        ? "border-red-500 bg-red-500/10"
                        : "border-[var(--border)] hover:border-brand-400"
                  } ${locked ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span
                    className={`grid place-items-center w-6 h-6 rounded-lg shrink-0 text-xs font-semibold ${
                      showCorrect
                        ? "bg-green-500 text-white"
                        : showWrong
                          ? "bg-red-500 text-white"
                          : "surface"
                    }`}
                  >
                    {showCorrect ? (
                      <IconCheck width={14} height={14} />
                    ) : showWrong ? (
                      <IconClose width={14} height={14} />
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>
                  <span>{opt}</span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {locked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className={`mt-3 p-3 rounded-xl text-sm ${
                    isCorrect
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-amber-400/10 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  <p className="font-semibold mb-0.5">
                    {isCorrect ? "Benar. Kamu mulai berpikir seperti designer." : "Belum tepat. Coba lihat lagi konsepnya."}
                  </p>
                  <p className="opacity-90">{q.explain}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-3 w-full text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white shadow-glow hover:brightness-110 transition"
                >
                  {current + 1 < questions.length ? "Soal Berikutnya" : "Lihat Hasil"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
