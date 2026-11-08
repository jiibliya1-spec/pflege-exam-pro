"use client";
import { useState } from "react";
import Link from "next/link";
import { Box } from "lucide-react";
import { AtlasViewer } from "./AtlasViewer";
import { atlasForLesson } from "@/data/atlasRegistry";
import { useLang } from "@/lib/i18n";

/** Struktur, die in der 3D-Ansicht der Lektion zuerst hervorgehoben wird. */
const FOCUS: Record<string, string> = {
  pankreatitis: "pancreas", galle: "gallbladder", "gastritis-ulkus": "stomach", "reflux-gerd": "esophagus", crohn: "ileum", divertikel: "descending-colon", darmkrebs: "ascending-colon",
  niereninsuff: "right-kidney", niere: "right-kidney", glomerulonephritis: "left-kidney", harnweg: "bladder", "bph-prostata-op": "prostate", prostate: "prostate",
  diabetes: "pancreas", schilddruese: "thyroid-cartilage", hypoglykaemie: "pancreas", asthma: "trachea", copd: "trachea",
  osteoporose: "lumbar-spine", bandscheibe: "intervertebral-discs", schlaganfall: "frontal-lobe", parkinson: "midbrain", epilepsie: "temporal-lobe", demenz: "temporal-lobe",
  "g7-blut-lymphom": "spleen",
};
const L = {
  show: ["3D-Modell zum Thema ansehen", "عرض النموذج ثلاثي الأبعاد للموضوع"],
  hide: ["3D-Modell ausblenden", "إخفاء النموذج ثلاثي الأبعاد"],
  full: ["Zum vollständigen Atlas", "إلى الأطلس الكامل"],
  hint: ["Tippe auf ein Organ: Es löst sich vom Körper und steht allein in der Mitte.", "اضغط على عضو: ينفصل عن الجسم ويظهر وحده في الوسط."],
};
const SYS: Record<string, string> = { heart: "herz", resp: "atmung", urinary: "niere", digestive: "verdauung", nervous: "nerven", musculoskeletal: "bewegung", endocrine: "stoffwechsel", reproductive: "geschlecht", skin: "haut", blood: "blut" };

export function Lesson3D({ id }: { id: string }) {
  const cfg = atlasForLesson(id);
  const ar = useLang() === "ar";
  const [on, setOn] = useState(false);
  if (!cfg) return null;
  const T = (r: string[]) => (ar ? r[1] : r[0]);
  const focus = FOCUS[id];
  return (
    <div className="mb-4 rounded-2xl border border-teal/30 bg-surface p-3" data-testid="lesson-3d" dir={ar ? "rtl" : "ltr"}>
      <div className="flex flex-wrap items-center gap-2">
        <button onClick={() => setOn((v) => !v)} aria-expanded={on} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-teal px-4 text-sm font-semibold text-white dark:text-[#04222a]" data-testid="lesson-3d-toggle"><Box className="h-4 w-4" />{T(on ? L.hide : L.show)}</button>
        <Link href={`/atlas/?sys=${SYS[cfg.key]}`} className="text-sm text-teal underline">{T(L.full)}</Link>
      </div>
      {on && (
        <div className="mt-3">
          <p className="mb-2 text-xs text-muted">{T(L.hint)}</p>
          <AtlasViewer cfg={cfg} compact initialSel={focus && cfg.items[focus] ? focus : null} />
        </div>
      )}
    </div>
  );
}
