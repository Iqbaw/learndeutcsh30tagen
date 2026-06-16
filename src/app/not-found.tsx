import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <p className="text-6xl font-bold bg-gradient-to-r from-brand-500 to-violetx-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-3 text-xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-muted text-sm">
        Modul atau halaman yang kamu cari belum ada. Kembali ke dashboard untuk
        melanjutkan belajar.
      </p>
      <Link
        href="/"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow hover:brightness-110 transition"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
