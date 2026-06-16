import { curriculum } from "@/data/curriculum";
import { glossary } from "@/data/glossary";

export interface SearchItem {
  title: string;
  subtitle: string;
  href: string;
  kind: "Modul" | "Lesson" | "Glosarium" | "Halaman" | "Topik";
  keywords: string;
}

const pages: SearchItem[] = [
  {
    title: "Dashboard Belajar",
    subtitle: "Ringkasan progress, skill radar, dan tugas harian",
    href: "/",
    kind: "Halaman",
    keywords: "dashboard progress skill radar beranda",
  },
  {
    title: "Peta Kurikulum 12 Bulan",
    subtitle: "Timeline modul dari nol sampai profesional",
    href: "/curriculum",
    kind: "Halaman",
    keywords: "kurikulum roadmap timeline 12 bulan modul",
  },
  {
    title: "Design Playground",
    subtitle: "Latihan interaktif typography, spacing, kontras, flow",
    href: "/playground",
    kind: "Halaman",
    keywords:
      "playground latihan typography spacing kontras contrast user flow wireframe button state komponen",
  },
  {
    title: "Portfolio Builder Guide",
    subtitle: "Template case study SaaS, mobile, dan landing page",
    href: "/portfolio",
    kind: "Halaman",
    keywords: "portfolio case study saas mobile landing conversion",
  },
  {
    title: "Daily Learning Plan",
    subtitle: "Checklist harian dan streak belajar lokal",
    href: "/daily-plan",
    kind: "Halaman",
    keywords: "daily plan harian checklist streak rutin",
  },
  {
    title: "Glosarium UI/UX",
    subtitle: "Kamus istilah penting UI/UX",
    href: "/glossary",
    kind: "Halaman",
    keywords: "glosarium kamus istilah definisi",
  },
];

export function buildSearchIndex(): SearchItem[] {
  const moduleItems: SearchItem[] = curriculum.map((m) => ({
    title: m.title,
    subtitle: `Bulan ${m.month} • ${m.level} • ${m.tagline}`,
    href: `/lesson/${m.slug}`,
    kind: "Modul",
    keywords: `${m.title} ${m.tagline} ${m.description} ${m.skills.join(" ")}`,
  }));

  const lessonItems: SearchItem[] = curriculum.flatMap((m) =>
    m.lessons.map((l) => ({
      title: l.title,
      subtitle: `${m.title} • ${l.estimatedMinutes} menit`,
      href: `/lesson/${m.slug}#${l.id}`,
      kind: "Lesson" as const,
      keywords: `${l.title} ${l.objective} ${m.title}`,
    })),
  );

  const glossaryItems: SearchItem[] = glossary.map((g) => ({
    title: g.term,
    subtitle: g.short,
    href: `/glossary#${encodeURIComponent(g.term)}`,
    kind: "Glosarium",
    keywords: `${g.term} ${g.short} ${g.full}`,
  }));

  return [...pages, ...moduleItems, ...lessonItems, ...glossaryItems];
}

export function searchItems(query: string, index: SearchItem[]): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return index
    .map((item) => {
      const hay = `${item.title} ${item.subtitle} ${item.keywords}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (item.title.toLowerCase().includes(t)) score += 3;
        else if (hay.includes(t)) score += 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((r) => r.item);
}
