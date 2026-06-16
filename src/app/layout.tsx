import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppProvider";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "UX Mastery Lab — Belajar UI/UX Designer Profesional",
  description:
    "Belajar UI/UX dari nol sampai level internasional lewat kurikulum 12 bulan, playground interaktif, dan panduan portfolio. Tanpa login, progress tersimpan di perangkatmu.",
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('uxlab:theme');var d=t?JSON.parse(t):(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(d==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
