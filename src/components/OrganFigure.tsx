"use client";
import type { ReactNode } from "react";
import { useT } from "@/lib/i18n";

/** Schematische, animierte Abbildung je Organsystem (reine SVG/CSS, ohne Bibliothek, respektiert „reduzierte Bewegung“). */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const FIG: Record<string, ReactNode> = {
  herz: (
    <g>
      <g className="of-beat" style={{ transformOrigin: "100px 90px" }}>
        <path {...S} className="of-fill" d="M100 140 C40 100 40 50 78 50 C92 50 100 60 100 68 C100 60 108 50 122 50 C160 50 160 100 100 140Z" />
      </g>
      <path {...S} className="of-draw" strokeWidth={2.5} d="M10 160 H60 L70 140 L82 175 L94 150 L102 160 H190" />
    </g>
  ),
  atmung: (
    <g>
      <path {...S} d="M100 30 V80 M100 80 L70 100 M100 80 L130 100" />
      <g className="of-breathe" style={{ transformOrigin: "100px 120px" }}>
        <path {...S} className="of-fill" d="M70 90 C40 90 28 130 32 160 C34 172 60 172 70 160 C78 148 76 110 70 90Z" />
        <path {...S} className="of-fill" d="M130 90 C160 90 172 130 168 160 C166 172 140 172 130 160 C122 148 124 110 130 90Z" />
      </g>
    </g>
  ),
  nerven: (
    <g>
      <path {...S} className="of-fill" d="M45 90 C40 50 80 28 105 36 C140 30 165 55 158 90 C165 110 145 128 125 124 C115 140 85 138 78 124 C55 130 38 112 45 90Z" />
      <path {...S} strokeWidth={2} d="M80 70 C95 85 110 60 130 75 M70 100 C90 95 100 110 120 100 M100 125 V170" />
      <circle className="of-pulse" cx="80" cy="70" r="4" fill="currentColor" />
      <circle className="of-pulse of-d2" cx="120" cy="100" r="4" fill="currentColor" />
      <circle className="of-pulse of-d3" cx="100" cy="150" r="4" fill="currentColor" />
    </g>
  ),
  verdauung: (
    <g>
      <path {...S} className="of-fill" d="M70 40 C40 40 40 90 75 100 C100 108 110 90 105 70 C102 55 90 42 70 40Z" />
      <path {...S} d="M105 95 C150 90 165 120 140 135 C115 148 160 160 120 168 C80 175 60 150 90 140 C110 133 80 120 100 112" />
      <circle className="of-flow" cx="105" cy="95" r="4" fill="currentColor" />
      <circle className="of-flow of-d2" cx="105" cy="95" r="4" fill="currentColor" />
    </g>
  ),
  niere: (
    <g>
      <path {...S} className="of-fill" d="M110 40 C150 40 165 80 150 115 C140 140 110 150 95 130 C105 115 95 105 85 95 C75 70 85 40 110 40Z" />
      <path {...S} d="M95 130 V175" />
      <circle className="of-drop" cx="100" cy="150" r="4" fill="currentColor" />
      <circle className="of-drop of-d2" cx="100" cy="150" r="4" fill="currentColor" />
      <circle className="of-drop of-d3" cx="100" cy="150" r="4" fill="currentColor" />
    </g>
  ),
  haut: (
    <g>
      <path {...S} className="of-fill" d="M20 50 H180 V80 H20Z" />
      <path {...S} d="M20 100 H180 M20 125 H180 M20 150 H180" />
      <path {...S} d="M60 100 V165 M130 100 V165" />
      <rect className="of-shimmer" x="20" y="50" width="40" height="30" fill="currentColor" opacity="0.25" />
    </g>
  ),
  blut: (
    <g>
      <path {...S} d="M10 70 H190 M10 130 H190" />
      <g className="of-slide">
        <ellipse {...S} className="of-fill" cx="30" cy="100" rx="16" ry="12" />
        <ellipse {...S} className="of-fill" cx="80" cy="95" rx="16" ry="12" />
        <ellipse {...S} className="of-fill" cx="125" cy="105" rx="16" ry="12" />
        <circle {...S} cx="165" cy="98" r="9" />
      </g>
    </g>
  ),
  bewegung: (
    <g>
      <g className="of-swing" style={{ transformOrigin: "100px 100px" }}>
        <path {...S} className="of-fill" d="M100 100 L150 140 M150 140 a10 10 0 1 0 14 14 a10 10 0 1 0 -14 -14" />
      </g>
      <path {...S} className="of-fill" d="M100 100 L60 40 M60 40 a10 10 0 1 1 -14 -14 a10 10 0 1 1 14 14" />
      <circle {...S} cx="100" cy="100" r="9" />
    </g>
  ),
  psyche: (
    <g>
      <path {...S} className="of-fill" d="M70 165 V135 C45 125 42 90 55 70 C68 45 110 40 128 62 C145 80 140 110 125 122 V165Z" />
      <circle className="of-float" cx="150" cy="48" r="5" fill="currentColor" />
      <circle className="of-float of-d2" cx="165" cy="30" r="8" fill="currentColor" opacity="0.6" />
      <path {...S} d="M85 95 C95 105 110 105 118 95" />
    </g>
  ),
  sinne: (
    <g>
      <path {...S} className="of-fill" d="M20 100 C55 55 145 55 180 100 C145 145 55 145 20 100Z" />
      <g className="of-blink" style={{ transformOrigin: "100px 100px" }}>
        <circle {...S} cx="100" cy="100" r="22" />
        <circle cx="100" cy="100" r="9" fill="currentColor" />
      </g>
    </g>
  ),
  geschlecht: (
    <g>
      <circle {...S} className="of-fill of-beat" style={{ transformOrigin: "70px 100px" }} cx="70" cy="100" r="30" />
      <circle {...S} className="of-fill of-beat of-d2" style={{ transformOrigin: "130px 100px" }} cx="130" cy="100" r="30" />
      <path {...S} d="M100 70 V130" />
    </g>
  ),
  infektion: (
    <g>
      <g className="of-spin" style={{ transformOrigin: "100px 100px" }}>
        <circle {...S} className="of-fill" cx="100" cy="100" r="26" />
        <path {...S} d="M100 62 V74 M100 126 V138 M62 100 H74 M126 100 H138 M73 73 L81 81 M119 119 L127 127 M127 73 L119 81 M81 119 L73 127" />
      </g>
      <path {...S} className="of-pulse" d="M100 20 L165 40 V100 C165 140 130 165 100 178 C70 165 35 140 35 100 V40Z" />
    </g>
  ),
  stoffwechsel: (
    <g>
      <path {...S} className="of-fill of-beat" style={{ transformOrigin: "100px 110px" }} d="M100 25 C100 25 52 85 52 120 C52 150 75 172 100 172 C125 172 148 150 148 120 C148 85 100 25 100 25Z" />
      <path {...S} d="M80 125 C88 138 112 138 120 125" />
    </g>
  ),
  schmerz: (
    <g>
      <path {...S} className="of-fill of-pulse" d="M110 20 L60 105 H98 L86 180 L142 85 H104Z" />
    </g>
  ),
  notfall: (
    <g>
      <rect {...S} className="of-fill of-beat" style={{ transformOrigin: "100px 100px" }} x="62" y="62" width="76" height="76" rx="14" />
      <path {...S} d="M100 78 V122 M78 100 H122" />
    </g>
  ),
};

/** Lektionen mit eigener Abbildung statt der Standardfigur ihres Bereichs. */
const BY_ID: Record<string, string> = {
  auge: "sinne", ohr: "sinne", "otitis-media": "sinne", "hoerstoerungen": "sinne",
  leberzirrhose: "verdauung", hepatitis: "verdauung", galle: "verdauung",
  diabetes: "stoffwechsel", hypoglykaemie: "stoffwechsel", schilddruese: "stoffwechsel", "lipide-adipositas": "stoffwechsel",
  "wasser-elektrolyte": "niere", "saeure-basen": "niere",
  anaemie: "blut", "leukaemie-lymphom": "blut", hiv: "infektion",
  reanimation: "notfall", schock: "notfall", sepsis: "infektion",
  schmerz: "schmerz",
};

export function figureKey(id: string, area: string): string | null {
  const k = BY_ID[id] ?? area;
  return FIG[k] ? k : null;
}

export function OrganFigure({ id, area }: { id: string; area: string }) {
  const t = useT();
  const k = figureKey(id, area);
  if (!k) return null;
  return (
    <figure className="mb-4 flex flex-col items-center rounded-2xl border border-teal/30 bg-tealsoft p-3 text-teal">
      <svg viewBox="0 0 200 190" className="h-40 w-40" role="img" aria-label={t("learn.figure")}>
        {FIG[k]}
      </svg>
      <figcaption className="mt-1 text-xs text-muted">{t("learn.figure")}</figcaption>
    </figure>
  );
}
