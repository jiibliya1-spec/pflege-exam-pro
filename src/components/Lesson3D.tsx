"use client";
import Link from "next/link";
import { AtlasViewer } from "./AtlasViewer";
import { ATLAS_CFGS } from "@/data/atlasRegistry";
import { LESSON_ORGANS } from "@/data/lessonOrgans";
import { useLang } from "@/lib/i18n";

const L = {
  title: ["3D-Modell des betroffenen Organs", "نموذج ثلاثي الأبعاد للعضو المصاب"],
  full: ["Zum vollständigen Atlas", "إلى الأطلس الكامل"],
  hint: ["Ziehen = drehen, Tippen auf ein Teil = Beschreibung.", "اسحب للتدوير، واضغط على جزء لرؤية الوصف."],
};
const SYS: Record<string, string> = { heart: "herz", resp: "atmung", urinary: "niere", digestive: "verdauung", nervous: "nerven", musculoskeletal: "bewegung", endocrine: "stoffwechsel", reproductive: "geschlecht", skin: "haut", blood: "blut" };

/** Zeigt nur das zur Krankheit gehörende Organ in 3D (ersetzt die frühere Zeichnung). Gibt false zurück, wenn kein Modell zugeordnet ist. */
export function hasLesson3D(id: string) { return !!LESSON_ORGANS[id]; }

export function Lesson3D({ id }: { id: string }) {
  const ar = useLang() === "ar";
  const m = LESSON_ORGANS[id];
  const cfg = m ? ATLAS_CFGS.find((c) => c.key === m.atlas) : null;
  if (!m || !cfg) return null;
  const T = (r: string[]) => (ar ? r[1] : r[0]);
  return (
    <div className="mb-4 rounded-2xl border border-teal/30 bg-surface p-3" data-testid="lesson-3d" dir={ar ? "rtl" : "ltr"}>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold">{T(L.title)}</h2>
        <Link href={`/atlas/?sys=${SYS[cfg.key]}`} className="text-xs text-teal underline">{T(L.full)}</Link>
      </div>
      <p className="mb-2 text-xs text-muted">{T(L.hint)}</p>
      <AtlasViewer cfg={cfg} compact only={m.ids} initialSel={m.ids.length === 1 ? m.ids[0] : null} />
    </div>
  );
}
