"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/AppProvider";
import { curriculum } from "@/data/curriculum";
import { SearchModal } from "@/components/SearchModal";
import {
  IconHome,
  IconMap,
  IconPlay,
  IconFolder,
  IconCalendar,
  IconBook,
  IconSearch,
  IconSun,
  IconMoon,
  IconArrowRight,
  IconMenu,
  IconClose,
  IconCheck,
  IconLock,
} from "@/components/icons";

const NAV = [
  { href: "/", label: "Dashboard", icon: IconHome },
  { href: "/curriculum", label: "Kurikulum", icon: IconMap },
  { href: "/playground", label: "Playground", icon: IconPlay },
  { href: "/portfolio", label: "Portfolio", icon: IconFolder },
  { href: "/daily-plan", label: "Daily Plan", icon: IconCalendar },
  { href: "/glossary", label: "Glosarium", icon: IconBook },
];

const MOBILE_NAV = NAV.slice(0, 5);

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violetx-500 shadow-glow">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-400 to-violetx-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative">
          <path d="M4 18 L9 6 L12 14 L15 6 L20 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold tracking-tight">UX Mastery Lab</span>
        <span className="block text-[10px] text-muted">Belajar UI/UX Profesional</span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-1" aria-label="Navigasi utama">
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              active
                ? "text-white"
                : "text-muted hover:text-current hover:bg-brand-500/5"
            }`}
          >
            {active && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 shadow-glow"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Icon className="relative shrink-0" />
            <span className="relative">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function ModuleMiniList({ onNavigate }: { onNavigate?: () => void }) {
  const { moduleProgressPct, isModuleComplete, isModuleUnlocked, hydrated } = useApp();
  return (
    <div className="space-y-1">
      {curriculum.map((m) => {
        const pct = hydrated ? moduleProgressPct(m.id) : 0;
        const done = hydrated && isModuleComplete(m.id);
        const unlocked = !hydrated ? m.month === 1 : isModuleUnlocked(m.id);
        const inProgress = pct > 0 && !done;

        const badge = (
          <span
            className={`grid place-items-center w-7 h-7 rounded-lg text-[11px] font-bold shrink-0 ${
              done
                ? "bg-green-500 text-white"
                : inProgress
                  ? "bg-amber-400 text-ink-950"
                  : "surface text-muted"
            }`}
          >
            {done ? (
              <IconCheck width={14} height={14} />
            ) : !unlocked ? (
              <IconLock width={12} height={12} />
            ) : (
              m.month
            )}
          </span>
        );

        const body = (
          <span className="min-w-0 flex-1">
            <span
              className={`block text-[12.5px] font-medium truncate transition-colors ${
                unlocked ? "group-hover:text-brand-500" : ""
              }`}
            >
              {m.title}
            </span>
            <span className="mt-1 block h-1 rounded-full bg-current/10 overflow-hidden">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400 transition-all"
                style={{ width: `${pct}%` }}
              />
            </span>
          </span>
        );

        if (!unlocked) {
          return (
            <div
              key={m.id}
              className="flex items-center gap-3 px-2.5 py-2 rounded-lg opacity-55 cursor-not-allowed select-none"
              title="Selesaikan modul sebelumnya untuk membuka modul ini"
              aria-disabled="true"
            >
              {badge}
              {body}
            </div>
          );
        }

        return (
          <Link
            key={m.id}
            href={`/lesson/${m.slug}`}
            onClick={onNavigate}
            className="flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-brand-500/5 transition-colors group"
          >
            {badge}
            {body}
          </Link>
        );
      })}
    </div>
  );
}

function ContinueButton({ full }: { full?: boolean }) {
  const { lastOpenedModule } = useApp();
  const router = useRouter();
  const target =
    lastOpenedModule ?? curriculum[0].slug;
  return (
    <button
      onClick={() => router.push(`/lesson/${target}`)}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violetx-600 text-white text-sm font-semibold px-4 py-2.5 shadow-glow hover:brightness-110 active:scale-[0.98] transition ${
        full ? "w-full" : ""
      }`}
    >
      Lanjutkan Belajar
      <IconArrowRight width={16} height={16} />
    </button>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, hydrated } = useApp();
  return (
    <button
      onClick={toggleTheme}
      className="grid place-items-center w-9 h-9 rounded-xl surface hover:border-brand-400 transition-colors"
      aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title="Ganti tema"
    >
      {hydrated && theme === "dark" ? (
        <IconSun width={18} height={18} />
      ) : (
        <IconMoon width={18} height={18} />
      )}
    </button>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = usePathname();
  const { totalProgressPct } = useApp();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing =
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app-bg">
      <div className="relative z-10 flex min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex flex-col w-72 shrink-0 h-screen sticky top-0 border-r border-[var(--border)] glass">
          <div className="p-4 border-b border-[var(--border)]">
            <Logo />
          </div>
          <div className="flex-1 overflow-y-auto scroll-thin p-3 space-y-5">
            <NavList />
            <div>
              <p className="px-3 text-[11px] uppercase tracking-wider text-muted font-semibold mb-2">
                Modul Belajar
              </p>
              <ModuleMiniList />
            </div>
          </div>
          <div className="p-3 border-t border-[var(--border)]">
            <ContinueButton full />
          </div>
        </aside>

        {/* Main column */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 glass border-b border-[var(--border)]">
            <div className="flex items-center gap-3 px-4 sm:px-6 h-16">
              <button
                className="lg:hidden grid place-items-center w-9 h-9 rounded-xl surface"
                onClick={() => setDrawer(true)}
                aria-label="Buka menu"
              >
                <IconMenu width={18} height={18} />
              </button>

              <div className="lg:hidden">
                <Logo />
              </div>

              <button
                onClick={() => setSearch(true)}
                className="hidden sm:flex items-center gap-2 flex-1 max-w-md text-left surface rounded-xl px-3.5 py-2 text-sm text-muted hover:border-brand-400 transition-colors"
              >
                <IconSearch width={16} height={16} />
                <span>Cari materi...</span>
                <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded border border-[var(--border)]">
                  /
                </span>
              </button>

              <button
                onClick={() => setSearch(true)}
                className="sm:hidden grid place-items-center w-9 h-9 rounded-xl surface ml-auto"
                aria-label="Cari materi"
              >
                <IconSearch width={18} height={18} />
              </button>

              <div className="hidden sm:flex items-center gap-2 ml-auto">
                <div className="hidden md:flex items-center gap-2 surface rounded-xl px-3 py-1.5">
                  <span className="text-[11px] text-muted">Progress</span>
                  <span className="w-24 h-1.5 rounded-full bg-current/10 overflow-hidden">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-cyanx-400 transition-all duration-700"
                      style={{ width: `${totalProgressPct}%` }}
                    />
                  </span>
                  <span className="text-xs font-semibold tabular-nums">
                    {totalProgressPct}%
                  </span>
                </div>
                <ThemeToggle />
                <div className="hidden xl:block">
                  <ContinueButton />
                </div>
              </div>

              <div className="sm:hidden">
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Page content with CSS-based fade (paints without waiting for JS) */}
          <main className="flex-1 px-4 sm:px-6 py-6 pb-24 lg:pb-10">
            <div key={pathname} className="page-enter">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-[var(--border)] px-2 py-1.5"
        aria-label="Navigasi bawah"
      >
        <div className="flex items-center justify-around">
          {MOBILE_NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[10px] font-medium ${
                  active ? "text-brand-500" : "text-muted"
                }`}
              >
                <Icon width={20} height={20} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[55]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              className="absolute left-0 top-0 h-full w-80 max-w-[85vw] glass border-r border-[var(--border)] flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setDrawer(false)}
                  className="grid place-items-center w-9 h-9 rounded-xl surface"
                  aria-label="Tutup menu"
                >
                  <IconClose width={18} height={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto scroll-thin p-3 space-y-5">
                <NavList onNavigate={() => setDrawer(false)} />
                <div>
                  <p className="px-3 text-[11px] uppercase tracking-wider text-muted font-semibold mb-2">
                    Modul Belajar
                  </p>
                  <ModuleMiniList onNavigate={() => setDrawer(false)} />
                </div>
              </div>
              <div className="p-3 border-t border-[var(--border)]">
                <ContinueButton full />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={search} onClose={() => setSearch(false)} />
    </div>
  );
}
