import type { Lang } from "@/lib/i18n";
import { P1 } from "./prof/p1";
import { P2 } from "./prof/p2";
import { P3 } from "./prof/p3";
import { P4 } from "./prof/p4";
import { P5 } from "./prof/p5";
import { P6 } from "./prof/p6";
import { P7 } from "./prof/p7";
import { AR_P1 } from "./tr/prof/ar1";
import { AR_P2 } from "./tr/prof/ar2";
import { AR_P3 } from "./tr/prof/ar3";
import { AR_P4 } from "./tr/prof/ar4";
import { AR_P5 } from "./tr/prof/ar5";
import { AR_P6 } from "./tr/prof/ar6";
import { AR_P7 } from "./tr/prof/ar7";

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

export const PROFILES: Record<string, Profile> = { ...P1, ...P2, ...P3, ...P4, ...P5, ...P6, ...P7 };

const TR: Partial<Record<Lang, Record<string, Profile>>> = { ar: { ...AR_P1, ...AR_P2, ...AR_P3, ...AR_P4, ...AR_P5, ...AR_P6, ...AR_P7 } };

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
