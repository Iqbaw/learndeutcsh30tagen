"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // surface the error in the console for debugging
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto text-center py-16">
      <p className="text-5xl font-bold bg-gradient-to-r from-brand-500 to-violetx-500 bg-clip-text text-transparent">
        Ups
      </p>
      <h1 className="mt-3 text-xl font-bold">Ada yang tidak beres di halaman ini</h1>
      <p className="mt-2 text-muted text-sm">
        Jangan khawatir, progresmu aman tersimpan. Coba muat ulang halaman ini.
      </p>
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow hover:brightness-110 transition"
        >
          Coba Lagi
        </button>
        <a
          href="/"
          className="text-sm font-medium px-4 py-2.5 rounded-xl surface hover:border-brand-400 transition-colors"
        >
          Ke Dashboard
        </a>
      </div>
    </div>
  );
}
