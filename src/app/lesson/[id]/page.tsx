import { curriculum } from "@/data/curriculum";
import { LessonView } from "./LessonView";

// Pre-render every module page at build time so navigation is instant & cached.
export function generateStaticParams() {
  return curriculum.map((m) => ({ id: m.slug }));
}

// Only the known module slugs exist; anything else is a 404.
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { id: string } }) {
  const mod = curriculum.find((m) => m.slug === params.id);
  return {
    title: mod
      ? `${mod.title} — UX Mastery Lab`
      : "Modul — UX Mastery Lab",
    description: mod?.description,
  };
}

export default function LessonPage({ params }: { params: { id: string } }) {
  return <LessonView slug={params.id} />;
}
