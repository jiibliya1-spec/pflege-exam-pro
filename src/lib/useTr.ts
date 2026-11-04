"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { loadTranslations } from "@/data/lessonsI18n";
import { loadProfileTr } from "@/data/diseaseProfiles";

/** Lädt die Übersetzungen der gewählten Sprache nach und gibt true zurück, sobald sie bereit sind. */
export function useTranslationsReady(lang: Lang, withProfiles = false): boolean {
  const [done, setDone] = useState<string>("");
  useEffect(() => {
    let alive = true;
    Promise.all([loadTranslations(lang), withProfiles ? loadProfileTr(lang) : Promise.resolve()]).then(() => alive && setDone(lang + (withProfiles ? "+p" : "")));
    return () => { alive = false; };
  }, [lang, withProfiles]);
  return lang === "de" || done === lang + (withProfiles ? "+p" : "");
}
