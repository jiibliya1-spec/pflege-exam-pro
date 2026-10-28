import type { Lang } from "@/lib/i18n";
import { P1 } from "./prof/p1";
import { AR_P1 } from "./tr/prof/ar1";

/** Krankheitsprofil: einheitliche Gliederung für jede Krankheits-Lektion. */
export interface Profile {
  /** Definition (ein bis zwei Sätze). */
  def: string;
  sym: string[];
  urs: string[];
  risk: string[];
  ther: string[];
  pfl: string[];
}
export const PROFILE_KEYS = ["sym", "urs", "risk", "ther", "pfl"] as const;

export const PROFILES: Record<string, Profile> = { ...P1 };

const TR: Partial<Record<Lang, Record<string, Profile>>> = { ar: { ...AR_P1 } };

export function profileFor(id: string, lang: Lang): { p: Profile; translated: boolean } | null {
  const de = PROFILES[id];
  if (!de) return null;
  if (lang === "de") return { p: de, translated: true };
  const t = TR[lang]?.[id];
  return t ? { p: t, translated: true } : { p: de, translated: false };
}
export function profileTranslated(lang: Lang): string[] {
  return Object.keys(TR[lang] ?? {});
}
