"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { pick, useLang, useT } from "@/lib/i18n";
import { sceneFor, type Place } from "@/data/caseScenes";
import { cn } from "./ui";
import { Icon } from "./Icon";

export const PLACE_STYLE: Record<Place, { icon: string; from: string; to: string }> = {
  klinik: { icon: "Hospital", from: "#0f766e", to: "#14b8a6" },
  notaufnahme: { icon: "Ambulance", from: "#b91c1c", to: "#f97316" },
  heim: { icon: "House", from: "#7c3aed", to: "#a78bfa" },
  ambulant: { icon: "House", from: "#0369a1", to: "#38bdf8" },
  wg: { icon: "Baby", from: "#be185d", to: "#f472b6" },
  festival: { icon: "Tent", from: "#c2410c", to: "#facc15" },
  team: { icon: "Users", from: "#4338ca", to: "#818cf8" },
};

const AVATAR = ["#0f766e", "#7c3aed", "#0369a1", "#be185d", "#c2410c", "#4338ca"];

export function PlaceBadge({ caseId, className }: { caseId: string; className?: string }) {
  const sc = sceneFor(caseId);
  const ps = PLACE_STYLE[sc?.place ?? "klinik"];
  return (
    <span aria-hidden className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm", className)} style={{ background: `linear-gradient(135deg, ${ps.from}, ${ps.to})` }}>
      <Icon name={ps.icon} className="h-6 w-6" />
    </span>
  );
}

/** Animierte Kurz-Szene zum Fall: Ort, Beteiligte, Ablauf, Problem. */
export function CaseScene({ caseId }: { caseId: string }) {
  const sc = sceneFor(caseId);
  const lang = useLang();
  const t = useT();
  const [run, setRun] = useState(0);
  if (!sc) return null;
  const ps = PLACE_STYLE[sc.place];
  return (
    <section aria-label={t("scene.title")} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div key={`h${run}`} className="scene-hero relative flex items-center gap-3 px-4 py-4 text-white" style={{ background: `linear-gradient(135deg, ${ps.from}, ${ps.to})` }}>
        <span aria-hidden className="scene-float"><Icon name={ps.icon} className="h-9 w-9" /></span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide opacity-90">{t("scene.title")}</p>
          <p className="text-lg font-semibold leading-tight">{t(`place.${sc.place}`)}</p>
        </div>
        <button type="button" onClick={() => setRun((r) => r + 1)} className="ms-auto inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium hover:bg-white/30" aria-label={t("scene.replay")}>
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> {t("scene.replay")}
        </button>
      </div>

      <div key={`b${run}`} className="space-y-4 p-4">
        <ul className="flex flex-wrap gap-2" aria-label={t("scene.who")}>
          {sc.who.map((w, i) => (
            <li key={w.name} className="scene-pop flex items-center gap-2 rounded-full border border-line bg-surface2 py-1 pe-3 ps-1" style={{ animationDelay: `${i * 120}ms` }}>
              <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: AVATAR[i % AVATAR.length] }}>
                {w.name.charAt(0)}
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold">
                  {w.name}
                  {w.age ? `, ${w.age}` : ""}
                </span>
                <span className="block text-muted">{t(`role.${w.role}`)}</span>
              </span>
            </li>
          ))}
        </ul>

        <ol className="relative space-y-3 ps-1" aria-label={t("scene.steps")}>
          {sc.steps.map((s, i) => (
            <li key={i} className="scene-step flex items-start gap-3" style={{ animationDelay: `${500 + i * 650}ms` }}>
              <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-xl"><Icon name={s.icon} className="h-5 w-5 text-teal" /></span>
              <p className="pt-1.5 text-sm">{pick(s.t, lang)}</p>
            </li>
          ))}
        </ol>

        <div className="scene-problem rounded-xl border border-amber-400/60 bg-amber-50 p-3 text-sm text-amber-950 dark:bg-amber-950/30 dark:text-amber-100" style={{ animationDelay: `${500 + sc.steps.length * 650}ms` }}>
          <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"><Icon name="TriangleAlert" className="h-3.5 w-3.5" /> {t("scene.problem")}</p>
          <p className="mt-0.5 font-medium">{pick(sc.problem, lang)}</p>
        </div>
        <p className="text-[11px] text-muted">{t("scene.note")}</p>
      </div>
    </section>
  );
}
