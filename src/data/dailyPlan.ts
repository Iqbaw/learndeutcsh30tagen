export interface DailyTask {
  id: string;
  title: string;
  minutes: number;
  description: string;
  accent: "blue" | "violet" | "cyan" | "lime";
}

export const DAILY_TASKS: DailyTask[] = [
  {
    id: "theory",
    title: "30 menit teori",
    minutes: 30,
    description:
      "Baca satu lesson dan tangkap satu prinsip yang bisa langsung kamu pakai hari ini.",
    accent: "blue",
  },
  {
    id: "practice",
    title: "90 menit praktik Figma",
    minutes: 90,
    description:
      "Eksekusi langsung di Figma: tiru, redesign, atau bangun komponen. Praktik mengalahkan teori.",
    accent: "violet",
  },
  {
    id: "review",
    title: "30 menit review desain",
    minutes: 30,
    description:
      "Bandingkan karyamu dengan referensi kelas dunia. Catat 3 hal yang membuat desain itu terasa mahal.",
    accent: "cyan",
  },
  {
    id: "docs",
    title: "15 menit dokumentasi",
    minutes: 15,
    description:
      "Tulis keputusan dan alasanmu hari ini. Kebiasaan ini menjadi bahan emas untuk case study.",
    accent: "lime",
  },
];

export const DAILY_QUOTES: string[] = [
  "Hari ini fokusmu bukan bikin desain cantik, tapi bikin alur yang masuk akal.",
  "Desain mahal selalu punya alasan.",
  "Kalau user bingung, bukan user-nya yang bodoh. Desainmu yang perlu diperjelas.",
  "UI yang bagus terlihat rapi. UX yang bagus terasa mudah.",
  "Konsistensi kecil setiap hari mengalahkan ledakan motivasi sesekali.",
];
