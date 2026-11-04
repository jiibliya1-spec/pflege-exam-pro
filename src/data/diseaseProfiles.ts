import type { Lang } from "@/lib/i18n";
import { P1 } from "./prof/p1";
import { P2 } from "./prof/p2";
import { P3 } from "./prof/p3";
import { P4 } from "./prof/p4";
import { P5 } from "./prof/p5";
import { P6 } from "./prof/p6";
import { P7 } from "./prof/p7";
import { P8 } from "./prof/p8";
import { P9 } from "./prof/p9";
import { P10 } from "./prof/p10";
import { P11 } from "./prof/p11";
import { P12 } from "./prof/p12";
import { P13 } from "./prof/p13";
import { P14 } from "./prof/p14";

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

export const PROFILES: Record<string, Profile> = { ...P1, ...P2, ...P3, ...P4, ...P5, ...P6, ...P7, ...P8, ...P9, ...P10, ...P11, ...P12, ...P13, ...P14 };

const TR: Partial<Record<Lang, Record<string, Profile>>> = {};
/** Arabische Profile werden erst bei Bedarf nachgeladen. */
export function loadProfileTr(lang: Lang): Promise<void> {
  if (lang !== "ar" || TR.ar) return Promise.resolve();
  return import("./tr/profAr").then((m) => { TR.ar = m.AR_PROFILES; });
}

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
