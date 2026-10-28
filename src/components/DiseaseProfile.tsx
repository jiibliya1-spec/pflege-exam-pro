"use client";
import { AlertTriangle, BookOpen, HeartHandshake, Pill, Search, Stethoscope } from "lucide-react";
import type { ReactNode } from "react";
import { profileFor, type Profile } from "@/data/diseaseProfiles";
import { useT, normalizeLang, useLang } from "@/lib/i18n";

const SEC: { k: keyof Omit<Profile, "def">; icon: ReactNode; cls: string }[] = [
  { k: "sym", icon: <Stethoscope className="h-4 w-4" aria-hidden />, cls: "border-sky-500/40 bg-sky-500/10" },
  { k: "urs", icon: <Search className="h-4 w-4" aria-hidden />, cls: "border-teal/40 bg-tealsoft" },
  { k: "risk", icon: <AlertTriangle className="h-4 w-4" aria-hidden />, cls: "border-warn/50 bg-warnsoft" },
  { k: "ther", icon: <Pill className="h-4 w-4" aria-hidden />, cls: "border-ok/40 bg-oksoft" },
  { k: "pfl", icon: <HeartHandshake className="h-4 w-4" aria-hidden />, cls: "border-teal/40 bg-tealsoft" },
];

/** Steckbrief: Definition, Symptome, Ursachen, Risikofaktoren, Therapie, pflegerische Maßnahmen. */
export function DiseaseProfile({ id }: { id: string }) {
  const t = useT();
  const lang = normalizeLang(useLang());
  const r = profileFor(id, lang);
  if (!r) return null;
  const { p, translated } = r;
  const shown = translated ? lang : "de";
  const dir = shown === "ar" ? "rtl" : "ltr";
  return (
    <section dir={dir} lang={shown} className="mb-4 rounded-2xl border border-line bg-surface p-4" aria-label={t("prof.title")}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-teal">
        <BookOpen className="h-4 w-4" aria-hidden /> {t("prof.title")}
      </h2>
      <p className="mb-3 rounded-xl border border-teal/30 bg-tealsoft p-3 text-sm leading-relaxed">
        <span className="font-semibold">{t("prof.def")}: </span>
        {p.def}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {SEC.filter((s) => p[s.k].length).map((s) => (
          <div key={s.k} className={`rounded-xl border p-3 ${s.cls}`}>
            <h3 className="mb-1.5 flex items-center gap-2 text-sm font-semibold">
              {s.icon} {t(`prof.${s.k}`)}
            </h3>
            <ul className="space-y-1 text-sm">
              {p[s.k].map((x, i) => (
                <li key={i} className={dir === "rtl" ? "relative pr-4 before:absolute before:right-0 before:content-['•']" : "relative pl-4 before:absolute before:left-0 before:content-['•']"}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
