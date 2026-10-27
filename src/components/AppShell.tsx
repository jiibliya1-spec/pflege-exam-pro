"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  BarChart3,
  BookOpen,
  Bookmark,
  ClipboardCheck,
  FileText,
  Layers,
  LayoutDashboard,
  Library,
  Menu,
  Moon,
  PlayCircle,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  Sun,
  X,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { useT } from "@/lib/i18n";
import { cn, Dialog, Input, Notice } from "./ui";

interface NavItem {
  href: string;
  key: string;
  de: string;
  ar: string;
  icon: ReactNode;
  mobile?: boolean;
}

export const NAV: NavItem[] = [
  { href: "/", key: "nav.dashboard", de: "Dashboard", ar: "لوحة التحكم", icon: <LayoutDashboard className="h-5 w-5" />, mobile: true },
  { href: "/library/", key: "nav.library", de: "Fragenbank", ar: "بنك الأسئلة", icon: <Library className="h-5 w-5" />, mobile: true },
  { href: "/cases/", key: "nav.cases", de: "Fallbeispiele", ar: "الحالات السريرية", icon: <Stethoscope className="h-5 w-5" />, mobile: true },
  { href: "/quiz/setup/", key: "nav.quiz", de: "Quiz & Prüfung", ar: "اختبار وامتحان", icon: <PlayCircle className="h-5 w-5" />, mobile: true },
  { href: "/chapters/", key: "nav.chapters", de: "Kapitel", ar: "الفصول", icon: <BookOpen className="h-5 w-5" /> },
  { href: "/flashcards/", key: "nav.flashcards", de: "Karteikarten", ar: "البطاقات التعليمية", icon: <Layers className="h-5 w-5" /> },
  { href: "/mistakes/", key: "nav.mistakes", de: "Fehler", ar: "أخطائي", icon: <RotateCcw className="h-5 w-5" /> },
  { href: "/bookmarks/", key: "nav.bookmarks", de: "Lesezeichen", ar: "المحفوظات", icon: <Bookmark className="h-5 w-5" /> },
  { href: "/progress/", key: "nav.progress", de: "Fortschritt", ar: "التقدّم", icon: <BarChart3 className="h-5 w-5" /> },
  { href: "/source/", key: "nav.source", de: "Quelle (PDF)", ar: "المصدر", icon: <FileText className="h-5 w-5" /> },
  { href: "/admin/", key: "nav.admin", de: "Import & Qualität", ar: "الاستيراد والمراجعة", icon: <ShieldCheck className="h-5 w-5" /> },
  { href: "/settings/", key: "nav.settings", de: "Einstellungen", ar: "الإعدادات", icon: <Settings className="h-5 w-5" /> },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { dispatch, persistenceError, warnings, ready } = useStore();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const setMenuOpen = (v: boolean) => setMenuPath(v ? pathname : null);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const t = useT();
  const mainRef = useRef<HTMLElement>(null);

  // Fokus auf Hauptbereich nach Seitenwechsel (Barrierefreiheit)
  useEffect(() => {
    mainRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // Tastaturkürzel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      } else if (!typing && e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
      } else if (!typing && e.altKey && /^[1-9]$/.test(e.key)) {
        const item = NAV[Number(e.key) - 1];
        if (item) router.push(item.href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const dark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    dispatch({ type: "settings", patch: { theme: isDark ? "light" : "dark" } });
  };

  const nav = (
    <nav aria-label="Hauptnavigation" className="flex flex-col gap-0.5">
      {NAV.map((n) => {
        const active = isActive(pathname, n.href);
        return (
          <Link
            key={n.href}
            href={n.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              active ? "bg-white/15 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
            )}
          >
            {n.icon}
            <span>{t(n.key)}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen md:flex">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:shadow-lg">
        Zum Inhalt springen
      </a>

      {/* Desktop-Sidebar */}
      <aside className="no-print sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-navy px-3 py-5 dark:border-r dark:border-line md:flex">
        <Link href="/" className="mb-6 flex items-center gap-3 px-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal2 text-[#04222a]">
            <ClipboardCheck className="h-6 w-6" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold">Pflege Exam Pro</span>
            <span className="block text-xs text-white/70">Pflegefachfrau / -mann</span>
          </span>
        </Link>
        <div className="flex-1 overflow-y-auto pr-1">{nav}</div>
        <p className="mt-4 px-3 text-xs text-white/60">Tipp: Strg/⌘ + K oder „/“ zum Suchen</p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <div className="no-print sticky top-0 z-30 flex items-center gap-2 border-b border-line bg-surface/90 px-4 pb-2.5 pt-[calc(0.625rem+env(safe-area-inset-top))] backdrop-blur md:px-8">
          <button className="rounded-lg p-2 hover:bg-surface2 md:hidden" aria-label="Menü öffnen" onClick={() => setMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="whitespace-nowrap font-bold md:hidden">
            Pflege Exam Pro
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-line bg-surface text-sm text-muted hover:border-teal sm:w-full sm:max-w-md sm:justify-start sm:px-3 md:ml-0"
            aria-label={t("search.open")}
          >
            <Search className="h-4 w-4" aria-hidden />
            <span className="hidden flex-1 text-left sm:inline">{t("search.placeholder")}</span>
            <kbd className="hidden rounded border border-line px-1.5 text-xs sm:inline">Strg K</kbd>
          </button>
          <button className="rounded-lg p-2 hover:bg-surface2 sm:ml-auto" aria-label={dark ? "Helles Design" : "Dunkles Design"} onClick={toggleTheme}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {(persistenceError || warnings.length > 0) && (
          <div className="space-y-2 px-4 pt-4 md:px-8">
            {persistenceError && (
              <Notice tone="bad" title="Speicherproblem">
                {persistenceError}
              </Notice>
            )}
            {warnings.map((w, i) => (
              <Notice key={i} tone="warn" title="Hinweis zu gespeicherten Daten">
                {w}
              </Notice>
            ))}
          </div>
        )}

        <main id="main" ref={mainRef} tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 outline-none md:px-8 md:pb-12">
          {ready ? children : <div role="status" className="py-24 text-center text-muted">Daten werden geladen …</div>}
        </main>
      </div>

      {/* Mobile: untere Leiste */}
      <nav aria-label="Schnellnavigation" className="no-print pb-safe fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-line bg-surface/95 shadow-[0_-4px_16px_rgba(11,42,74,0.08)] backdrop-blur md:hidden">
        {NAV.filter((n) => n.mobile).map((n) => {
          const active = isActive(pathname, n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={cn("flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium", active ? "text-teal" : "text-muted")}>
              {n.icon}
              {n.href === "/" ? t("nav.dashboard") : t(`nav.short.${n.href.split("/")[1] === "quiz" ? "quiz" : n.href.split("/")[1]}`)}
            </Link>
          );
        })}
        <button onClick={() => setMenuOpen(true)} className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium text-muted">
          <Menu className="h-5 w-5" />
          {t("nav.more")}
        </button>
      </nav>

      {/* Mobile: Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menü">
          <button className="absolute inset-0 bg-black/50" aria-label="Menü schließen" onClick={() => setMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85vw] overflow-y-auto bg-navy px-3 py-5">
            <div className="mb-4 flex items-center justify-between px-3 text-white">
              <span className="font-bold">Pflege Exam Pro</span>
              <button aria-label="Menü schließen" onClick={() => setMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {nav}
          </div>
        </div>
      )}

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onClose={onClose} title="Globale Suche" wide>
      {open && <SearchBody onClose={onClose} />}
    </Dialog>
  );
}

function SearchBody({ onClose }: { onClose: () => void }) {
  const { questions, cases, chapters, status } = useBank();
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(t);
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return null;
    const pages = NAV.filter((n) => n.de.toLowerCase().includes(term)).map((n) => ({ kind: "Seite", title: n.de, href: n.href }));
    const ch = chapters
      .filter((c) => `${c.number} ${c.title}`.toLowerCase().includes(term))
      .slice(0, 5)
      .map((c) => ({ kind: "Kapitel", title: `${c.number} ${c.title}`, href: `/chapters/?id=${c.id}` }));
    const cs = cases
      .filter((c) => c.title.toLowerCase().includes(term) || c.narrative.toLowerCase().includes(term))
      .slice(0, 5)
      .map((c) => ({ kind: "Fallbeispiel", title: c.title, href: `/cases/view/?id=${c.id}` }));
    const qs = questions
      .filter((x) => x.text.toLowerCase().includes(term) || (x.stem ?? "").toLowerCase().includes(term))
      .slice(0, 12)
      .map((x) => ({ kind: `Frage ${x.label}`, title: x.text.replace(/\s+/g, " ").slice(0, 110), href: `/question/?id=${x.id}` }));
    const pg = /^\d{1,3}$/.test(term) ? [{ kind: "Quelle", title: `PDF-Seite ${term} öffnen`, href: `/source/?page=${term}` }] : [];
    return [...pages, ...pg, ...ch, ...cs, ...qs];
  }, [q, questions, cases, chapters]);

  return (
    <>
      <Input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Suchbegriff oder PDF-Seitenzahl …"
        aria-label="Suchbegriff"
        onKeyDown={(e) => {
          if (e.key === "Enter" && results && results[0]) {
            router.push(results[0].href);
            onClose();
          }
        }}
      />
      <div className="mt-3 max-h-[50vh] overflow-y-auto">
        {status === "loading" && <p className="py-4 text-sm text-muted">Fragenbank wird geladen …</p>}
        {results === null && <p className="py-4 text-sm text-muted">Mindestens 2 Zeichen eingeben. Gesucht wird in Fragen, Fallbeispielen, Kapiteln und Seiten der App.</p>}
        {results && results.length === 0 && <p className="py-4 text-sm text-muted">Keine Treffer.</p>}
        <ul>
          {results?.map((r, i) => (
            <li key={i}>
              <Link href={r.href} onClick={onClose} className="flex items-start gap-3 rounded-lg px-2 py-2 text-sm hover:bg-surface2">
                <span className="mt-0.5 w-24 shrink-0 text-xs font-medium text-teal">{r.kind}</span>
                <span>{r.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
