"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLang, useT } from "@/lib/i18n";
import { ORGAN_PARTS, ORGAN_TITLE } from "@/data/organParts";
import { Dialog, cn } from "./ui";

/** Anatomisch angelegte, farbige und leicht animierte Abbildung je Organsystem (reine SVG/CSS, ohne Bibliothek, respektiert „reduzierte Bewegung“). */
const L = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;
const O = (w = 1.6) => ({ stroke: "#00000040", strokeWidth: w, strokeLinejoin: "round" }) as const;

export const PartCtx = createContext<{ on: boolean; sel: number | null; vec: (i: number) => [number, number]; pick: (i: number) => void }>({ on: false, sel: null, vec: () => [0, 0], pick: () => {} });
/** Ein anklickbares Teil der Zeichnung; in der Explosionsansicht wandert es nach außen. */
function P({ i, m, children }: { i: number; m?: boolean; children: ReactNode }) {
  const c = useContext(PartCtx);
  const [dx, dy] = c.vec(i);
  return (
    <g
      className={c.on ? "organ-part" : undefined}
      onClick={c.on ? (e) => { e.stopPropagation(); c.pick(i); } : undefined}
      style={c.on ? { transform: `translate(${m ? -dx : dx}px, ${dy}px)`, opacity: c.sel !== null && c.sel !== i ? 0.28 : 1 } : undefined}
    >
      {children}
    </g>
  );
}
/** Beiwerk (Schatten, Verzierung): in der Explosionsansicht ausgeblendet. */
function D({ children }: { children: ReactNode }) {
  const c = useContext(PartCtx);
  return <g style={c.on ? { opacity: 0, transition: "opacity .3s" } : undefined}>{children}</g>;
}

const G = ({ id, a, b }: { id: string; a: string; b: string }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0.9" y2="1">
    <stop offset="0" stopColor={a} />
    <stop offset="1" stopColor={b} />
  </linearGradient>
);

/** Gemeinsame Licht- und Schattenwirkung: gibt den flachen Formen Volumen und feuchten Glanz. */
export function Shade() {
  return (
    <defs>
      <filter id="og3d" x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.4" result="b" />
        <feDiffuseLighting in="b" surfaceScale="5" diffuseConstant="1.05" lightingColor="#ffffff" result="diff">
          <feDistantLight azimuth="235" elevation="58" />
        </feDiffuseLighting>
        <feComposite in="SourceGraphic" in2="diff" operator="arithmetic" k1="1.22" k2="0" k3="0" k4="0" result="lit" />
        <feSpecularLighting in="b" surfaceScale="5" specularConstant="0.8" specularExponent="26" lightingColor="#ffffff" result="spec">
          <fePointLight x="50" y="-20" z="90" />
        </feSpecularLighting>
        <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
        <feComposite in="lit" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="0.5" k4="0" result="shiny" />
        <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="7" result="n" />
        <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.22 0.17" result="grain" />
        <feComposite in="grain" in2="SourceAlpha" operator="in" result="grainIn" />
        <feMerge><feMergeNode in="shiny" /><feMergeNode in="grainIn" /></feMerge>
      </filter>
    </defs>
  );
}

export const FIG: Record<string, ReactNode> = {
  herz: (
    <g>
      <defs>
        <radialGradient id="hzA" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#f3a5a0" /><stop offset="0.6" stopColor="#d9626a" /><stop offset="1" stopColor="#a02a3c" /></radialGradient>
        <radialGradient id="hzV" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#ff7f7f" /><stop offset="0.55" stopColor="#d4262f" /><stop offset="1" stopColor="#7a0c18" /></radialGradient>
        <linearGradient id="hzB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8b87c9" /><stop offset="1" stopColor="#4a4a96" /></linearGradient>
        <linearGradient id="hzBd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a5fa8" /><stop offset="1" stopColor="#2c2f6e" /></linearGradient>
        <linearGradient id="hzW" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f0a39b" /><stop offset="1" stopColor="#d0636e" /></linearGradient>
        <linearGradient id="hzAo" x1="0" y1="0" x2="1" y2="0.2"><stop offset="0" stopColor="#f6b0a8" /><stop offset="0.5" stopColor="#e07a80" /><stop offset="1" stopColor="#b9404f" /></linearGradient>
        <radialGradient id="hzM" cx="0.5" cy="0.4" r="0.8"><stop offset="0" stopColor="#f2c3b4" /><stop offset="1" stopColor="#e07e7a" /></radialGradient>
      </defs>
      <g className="of-beat" style={{ transformOrigin: "120px 130px" }}>
        {/* Linke Kammer: dicke Muskelwand außen, dunkler Innenraum */}
        <P i={0}>
          <path d="M138 96 C176 90 206 118 200 158 C194 188 160 206 140 210 C128 190 124 150 130 118Z" fill="url(#hzW)" {...O()} />
          <path d="M142 112 C172 108 190 132 184 160 C178 184 158 196 146 200 C138 180 136 150 140 124Z" fill="url(#hzV)" {...O(1.2)} />
          <path d="M160 128 q8 6 4 16 M170 150 q8 4 2 14 M152 160 q6 8 0 16 M178 138 q6 8 0 18" {...L} stroke="#5a0a14" strokeWidth="1.6" opacity="0.55" />
          <circle cx="190" cy="150" r="2" fill="#f7c4bd" opacity="0.7" /><circle cx="194" cy="166" r="2.4" fill="#f7c4bd" opacity="0.7" /><circle cx="184" cy="180" r="2" fill="#f7c4bd" opacity="0.7" /><circle cx="176" cy="190" r="1.8" fill="#f7c4bd" opacity="0.7" /><circle cx="196" cy="136" r="1.8" fill="#f7c4bd" opacity="0.7" />
        </P>
        {/* Rechte Kammer: nach links unten, innen blauviolett mit Trabekeln */}
        <P i={1}>
          <path d="M70 118 C86 104 118 108 130 118 C126 150 132 190 140 210 C112 206 78 184 70 150 C66 138 66 126 70 118Z" fill="url(#hzW)" {...O()} />
          <path d="M80 126 C94 116 116 120 122 128 C120 156 124 184 130 198 C108 192 88 172 82 152 C80 142 78 134 80 126Z" fill="url(#hzBd)" {...O(1.2)} />
          <path d="M92 150 q8 -4 14 2 M96 170 q8 -6 14 0 M88 138 q6 -4 10 0 M108 140 q4 8 -2 14 M104 182 q6 -4 10 0" {...L} stroke="#8c8ad0" strokeWidth="2.4" opacity="0.7" />
        </P>
        {/* Rechter Vorhof */}
        <P i={2}>
          <path d="M34 98 C30 128 42 156 62 164 C80 166 86 146 82 126 C80 108 84 92 72 84 C58 76 38 80 34 98Z" fill="url(#hzB)" {...O()} />
          <path d="M42 104 C42 124 50 142 60 152" {...L} stroke="#fff" strokeWidth="3.4" opacity="0.2" />
          <path d="M60 150 q8 6 16 2 M64 128 q8 2 12 8" {...L} stroke="#23265e" strokeWidth="1.8" opacity="0.5" />
        </P>
        {/* Linker Vorhof mit Herzohr */}
        <P i={3}>
          <path d="M150 66 C176 60 202 72 204 94 C196 104 172 106 150 100 C140 90 142 74 150 66Z" fill="url(#hzA)" {...O()} />
          <path d="M184 62 C196 52 214 56 212 68 C210 76 200 78 196 72Z" fill="#c0475a" {...O()} />
          <path d="M200 86 C214 84 226 90 230 98 M198 76 C212 70 224 72 230 78" {...L} stroke="#d9626a" strokeWidth="6" />
        </P>
        {/* Aortenbogen mit drei Abgängen */}
        <P i={4}>
          <path d="M130 112 C132 84 124 56 104 42 C92 34 78 38 70 50" {...L} stroke="#c9505e" strokeWidth="21" />
          <path d="M130 112 C132 84 124 56 104 42 C92 34 78 38 70 50" {...L} stroke="url(#hzAo)" strokeWidth="17" />
          <path d="M127 104 C128 82 120 60 104 48" {...L} stroke="#fff" strokeWidth="3" opacity="0.28" />
          <path d="M84 40 L82 14 M98 42 L100 16 M112 48 L122 24" {...L} stroke="#e98a8e" strokeWidth="9" />
          <path d="M84 40 L82 14 M98 42 L100 16 M112 48 L122 24" {...L} stroke="#fff" strokeWidth="1.6" opacity="0.3" />
        </P>
        {/* Lungenarterie (Truncus) */}
        <P i={5}>
          <path d="M112 122 C106 96 112 70 130 58 C150 48 176 52 198 62" {...L} stroke="#3c3f8a" strokeWidth="20" />
          <path d="M112 122 C106 96 112 70 130 58 C150 48 176 52 198 62" {...L} stroke="url(#hzB)" strokeWidth="16" />
          <path d="M110 108 C107 90 114 72 130 62" {...L} stroke="#fff" strokeWidth="3" opacity="0.25" />
        </P>
        {/* Obere Hohlvene */}
        <P i={6}>
          <path d="M56 96 L56 34" {...L} stroke="#2a2d70" strokeWidth="21" />
          <path d="M56 96 L56 34" {...L} stroke="#7479c4" strokeWidth="17" />
          <ellipse cx="56" cy="32" rx="9" ry="4.5" fill="#23265e" opacity="0.55" />
          <path d="M50 44 V88" {...L} stroke="#fff" strokeWidth="3" opacity="0.22" />
        </P>
        {/* Klappen: Mitral, Aorten, Pulmonal, Trikuspidal */}
        <P i={8}>
          <path d="M146 100 C152 92 164 92 172 100 C168 110 156 114 146 110Z" fill="url(#hzM)" {...O(1.2)} />
          <path d="M150 108 L148 124 M158 110 L158 128 M166 106 L170 122" {...L} stroke="#f2d2c4" strokeWidth="1.2" />
        </P>
        <P i={9}>
          <path d="M124 104 q4 -10 14 -8 q6 6 0 14 q-8 6 -14 -2Z" fill="url(#hzM)" {...O(1.2)} />
          <path d="M128 100 q4 4 8 0 M128 108 q5 2 9 -1" {...L} stroke="#fff" strokeWidth="1.4" opacity="0.8" />
        </P>
        <P i={10}>
          <path d="M104 116 q6 -10 22 -6 q2 10 -6 14 q-12 4 -16 -8Z" fill="url(#hzM)" {...O(1.2)} />
          <path d="M108 114 q6 4 12 -2" {...L} stroke="#fff" strokeWidth="1.4" opacity="0.8" />
        </P>
        <P i={11}>
          <path d="M70 134 C78 126 94 126 104 134 C98 146 80 148 70 142Z" fill="url(#hzM)" {...O(1.2)} />
          <path d="M76 142 L82 158 M88 144 L96 160 M98 140 L108 152" {...L} stroke="#f2d2c4" strokeWidth="1.2" />
        </P>
        {/* Herzkranzgefäße auf der Oberfläche */}
        <P i={7}>
          <path d="M132 112 C128 140 132 176 140 204" {...L} stroke="#ffb54d" strokeWidth="2.8" />
          <path d="M132 114 C112 122 92 118 78 134 C72 142 70 150 72 160" {...L} stroke="#ffb54d" strokeWidth="2.4" />
          <path d="M146 112 C170 118 184 138 190 158" {...L} stroke="#ffb54d" strokeWidth="2.2" />
          <path d="M132 150 C146 154 160 168 164 190" {...L} stroke="#ffb54d" strokeWidth="1.8" />
        </P>
      </g>
      <path d="M10 214 H62 L70 202 L80 220 L90 206 L96 214 H230" {...L} className="of-draw" stroke="#e8545f" strokeWidth="2" />
    </g>
  ),
  atmung: (
    <g>
      <defs>
        <linearGradient id="lgR" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7b9bd" /><stop offset="1" stopColor="#d8727f" /></linearGradient>
        <linearGradient id="lgT" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#9ebbd6" /><stop offset="0.5" stopColor="#d6e6f2" /><stop offset="1" stopColor="#8fadc9" /></linearGradient>
        <linearGradient id="lgD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9857a" /><stop offset="1" stopColor="#9c4a47" /></linearGradient>
      </defs>
      <P i={0}>
        <rect x="111" y="8" width="18" height="76" rx="7" fill="url(#lgT)" {...O()} />
        <path d="M112 18 H128 M112 28 H128 M112 38 H128 M112 48 H128 M112 58 H128 M112 68 H128 M112 78 H128" {...L} stroke="#5f84a8" strokeWidth="2.4" />
      </P>
      <g className="of-breathe" style={{ transformOrigin: "120px 130px" }}>
        {/* Rechte Lunge: drei Lappen */}
        <P i={2}>
          <path d="M108 76 C84 64 48 82 40 128 C36 168 46 198 74 200 C98 200 110 186 112 158 C114 126 112 98 108 76Z" fill="url(#lgR)" {...O()} />
          <path d="M108 76 C84 64 48 82 42 120 C70 124 94 116 110 100Z" fill="#f2a1aa" opacity="0.75" />
          <path d="M42 124 C70 128 94 120 110 106 C112 130 112 142 110 150 C90 142 64 146 44 156Z" fill="#fbcfcb" opacity="0.7" />
          <path d="M44 156 C64 148 90 142 110 152 C108 182 98 198 74 200 C52 198 42 176 44 156Z" fill="#e17e8e" opacity="0.7" />
          <path d="M42 124 C70 128 94 120 110 104 M44 156 C64 148 90 142 110 152" {...L} stroke="#a83f55" strokeWidth="1.6" opacity="0.7" />
        </P>
        {/* Linke Lunge: zwei Lappen mit Herzbucht */}
        <P i={3}>
          <path d="M132 76 C156 64 192 82 200 128 C204 168 194 198 166 200 C144 200 130 186 134 168 C122 156 126 126 132 100Z" fill="url(#lgR)" {...O()} />
          <path d="M132 76 C156 64 192 82 200 124 C176 134 150 128 134 110Z" fill="#f4a8b0" opacity="0.75" />
          <path d="M200 128 C176 138 150 130 134 112 C128 130 126 158 134 168 C130 186 144 200 166 200 C194 198 204 168 200 128Z" fill="#e58896" opacity="0.7" />
          <path d="M200 128 C176 138 150 130 134 112" {...L} stroke="#a83f55" strokeWidth="1.6" opacity="0.7" />
        </P>
        {/* Bronchialbaum */}
        <P i={1}>
          <path d="M120 82 L100 98 M120 82 L140 98" {...L} stroke="#3d6c99" strokeWidth="5" />
          <path d="M100 98 L72 106 M100 98 L78 134 M100 98 L90 170 M140 98 L164 114 M140 98 L158 160" {...L} stroke="#3d6c99" strokeWidth="3.4" />
          <path d="M72 106 L58 100 M72 106 L56 116 M78 134 L58 140 M78 134 L66 152 M90 170 L78 184 M90 170 L98 184 M164 114 L184 112 M164 114 L178 130 M158 160 L146 176 M158 160 L172 176 M90 150 L100 140 M148 134 L134 140" {...L} stroke="#5b8dbb" strokeWidth="2" />
        </P>
        {/* Lungenbläschen-Träubchen */}
        <P i={4}>
          <g fill="#fbd5d6" stroke="#c96a79" strokeWidth="0.8">
            <circle cx="55" cy="99" r="3.4" /><circle cx="60" cy="104" r="3.4" /><circle cx="53" cy="105" r="3.4" /><circle cx="58" cy="95" r="3" />
            <circle cx="55" cy="141" r="3.4" /><circle cx="61" cy="145" r="3.4" /><circle cx="54" cy="147" r="3.4" />
            <circle cx="76" cy="187" r="3.4" /><circle cx="82" cy="190" r="3.4" /><circle cx="75" cy="193" r="3.4" /><circle cx="100" cy="187" r="3.4" /><circle cx="105" cy="182" r="3.4" />
            <circle cx="187" cy="111" r="3.4" /><circle cx="192" cy="116" r="3.4" /><circle cx="186" cy="118" r="3.4" /><circle cx="181" cy="132" r="3.4" /><circle cx="186" cy="137" r="3.4" />
            <circle cx="144" cy="179" r="3.4" /><circle cx="150" cy="183" r="3.4" /><circle cx="174" cy="179" r="3.4" /><circle cx="179" cy="175" r="3.4" />
          </g>
        </P>
      </g>
      <P i={5}>
        <path d="M22 208 C60 186 180 186 218 208 L218 220 L22 220Z" fill="url(#lgD)" {...O()} />
        <path d="M34 206 C70 192 170 192 206 206" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.25" />
      </P>
    </g>
  ),
  nerven: (
    <g>
      <defs>
        <clipPath id="brOut"><path d="M40 118 C32 70 70 36 120 34 C176 32 214 62 214 106 C214 136 190 150 160 150 C130 152 100 150 78 148 C54 146 42 136 40 118Z" /></clipPath>
        <clipPath id="brLfr"><path d="M20 20 H100 V108 L72 122 V160 H20Z" /></clipPath>
        <radialGradient id="brGfr" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#f7bdb6" /><stop offset="1" stopColor="#f2a7a0" /></radialGradient>
        <clipPath id="brLpa"><path d="M100 20 H172 V100 L100 108Z" /></clipPath>
        <radialGradient id="brGpa" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#fbd99e" /><stop offset="1" stopColor="#f7c97e" /></radialGradient>
        <clipPath id="brLoc"><path d="M172 20 H230 V160 H172Z" /></clipPath>
        <radialGradient id="brGoc" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#b8d6f0" /><stop offset="1" stopColor="#9dc4e8" /></radialGradient>
        <clipPath id="brLte"><path d="M72 122 L100 108 L172 100 V160 H72Z" /></clipPath>
        <radialGradient id="brGte" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#bfe0b1" /><stop offset="1" stopColor="#a9d29a" /></radialGradient>
        <linearGradient id="brC" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e4b58c" /><stop offset="1" stopColor="#b9825a" /></linearGradient>
        <linearGradient id="brS" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#d9ae96" /><stop offset="0.5" stopColor="#f2d6c3" /><stop offset="1" stopColor="#d0a58c" /></linearGradient>
      </defs>
      <P i={0}>
        <g clipPath="url(#brLfr)"><g clipPath="url(#brOut)">
          <rect x="20" y="20" width="220" height="150" fill="url(#brGfr)" />
          <path d="M24 44 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 M24 54 q10 -7 20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 M24 64 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 74 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 84 q10 7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 M24 94 q10 7 20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 M24 104 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 114 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 8 8 0 M24 124 q10 -7 20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 M24 134 q10 7 20 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 M24 144 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 154 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0" {...L} stroke="#a8444f" strokeWidth="1.5" opacity="0.65" />
        </g></g>
        <path d="M20 20 H100 V108 L72 122 V160 H20Z" fill="none" />
      </P>
      <P i={1}>
        <g clipPath="url(#brLpa)"><g clipPath="url(#brOut)">
          <rect x="20" y="20" width="220" height="150" fill="url(#brGpa)" />
          <path d="M24 44 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 M24 54 q10 -7 20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 M24 64 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 74 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 84 q10 7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 M24 94 q10 7 20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 M24 104 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 114 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 8 8 0 M24 124 q10 -7 20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 M24 134 q10 7 20 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 M24 144 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 154 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0" {...L} stroke="#a8444f" strokeWidth="1.5" opacity="0.65" />
        </g></g>
        <path d="M100 20 H172 V100 L100 108Z" fill="none" />
      </P>
      <P i={2}>
        <g clipPath="url(#brLoc)"><g clipPath="url(#brOut)">
          <rect x="20" y="20" width="220" height="150" fill="url(#brGoc)" />
          <path d="M24 44 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 M24 54 q10 -7 20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 M24 64 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 74 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 84 q10 7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 M24 94 q10 7 20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 M24 104 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 114 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 8 8 0 M24 124 q10 -7 20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 M24 134 q10 7 20 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 M24 144 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 154 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0" {...L} stroke="#a8444f" strokeWidth="1.5" opacity="0.65" />
        </g></g>
        <path d="M172 20 H230 V160 H172Z" fill="none" />
      </P>
      <P i={3}>
        <g clipPath="url(#brLte)"><g clipPath="url(#brOut)">
          <rect x="20" y="20" width="220" height="150" fill="url(#brGte)" />
          <path d="M24 44 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 M24 54 q10 -7 20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 M24 64 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 74 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 84 q10 7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 M24 94 q10 7 20 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 M24 104 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 M24 114 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 8 8 0 M24 124 q10 -7 20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 t20 0 M24 134 q10 7 20 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 -8 8 0 t20 0 M24 144 q10 7 20 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0 q4 8 8 0 t20 0 q4 -8 8 0 M24 154 q10 -7 20 0 t20 0 q4 8 8 0 t20 0 t20 0 t20 0 t20 0 q4 -8 8 0 t20 0 t20 0 q4 8 8 0 t20 0" {...L} stroke="#a8444f" strokeWidth="1.5" opacity="0.65" />
        </g></g>
        <path d="M72 122 L100 108 L172 100 V160 H72Z" fill="none" />
      </P>
      <D>
        <path d="M40 118 C32 70 70 36 120 34 C176 32 214 62 214 106 C214 136 190 150 160 150 C130 152 100 150 78 148 C54 146 42 136 40 118Z" {...L} stroke="#00000040" strokeWidth="1.6" />
      </D>
      <P i={4}>
        <path d="M140 146 C148 134 178 130 204 138 C214 148 204 170 180 176 C158 178 140 168 140 146Z" fill="url(#brC)" {...O()} />
        <path d="M146 148 C166 144 190 146 206 146 M146 154 C168 152 192 154 205 154 M148 160 C168 160 188 162 202 162 M152 167 C168 168 184 169 194 169" {...L} stroke="#8a5a3a" strokeWidth="1.5" opacity="0.7" />
      </P>
      <P i={5}>
        <path d="M112 146 C112 164 116 182 122 196 H136 C134 180 132 162 130 148Z" fill="url(#brS)" {...O()} />
      </P>
      <P i={6}>
        <path d="M122 196 C122 206 124 214 126 222 H134 C134 214 136 206 136 196Z" fill="url(#brS)" {...O()} />
        <path d="M122 202 H136 M123 208 H135 M124 214 H134" {...L} stroke="#a77d63" strokeWidth="1.3" opacity="0.7" />
      </P>
    </g>
  ),
  verdauung: (
    <g>
      <defs>
        <radialGradient id="lvG" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#c8765a" /><stop offset="1" stopColor="#7d3524" /></radialGradient>
        <radialGradient id="stG" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#f4a5a2" /><stop offset="1" stopColor="#c8575f" /></radialGradient>
        <radialGradient id="gbG" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#8fd39a" /><stop offset="1" stopColor="#2f7a49" /></radialGradient>
        <linearGradient id="pcG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f7dc86" /><stop offset="1" stopColor="#d9ad45" /></linearGradient>
      </defs>
      <P i={4}>
        <path d="M108 104 C130 96 162 104 192 96 C200 102 196 112 186 116 C160 118 130 116 108 112Z" fill="url(#pcG)" {...O()} />
        <path d="M112 106 C140 106 170 106 190 102" {...L} stroke="#fff" strokeWidth="2" opacity="0.4" />
      </P>
      <P i={2}>
        <path d="M24 58 C36 40 92 34 128 46 C142 52 140 72 124 80 C100 94 58 98 38 86 C22 78 18 66 24 58Z" fill="url(#lvG)" {...O()} />
        <path d="M40 54 C70 46 100 48 124 56" {...L} stroke="#fff" strokeWidth="3" opacity="0.2" />
        <path d="M84 50 C86 64 92 76 100 84" {...L} stroke="#5a2214" strokeWidth="1.6" opacity="0.5" />
      </P>
      <P i={3}>
        <path d="M86 90 C78 102 84 120 96 118 C106 114 102 98 96 88Z" fill="url(#gbG)" {...O()} />
        <path d="M88 96 C86 104 88 110 92 114" {...L} stroke="#fff" strokeWidth="2" opacity="0.4" />
      </P>
      <P i={0}>
        <path d="M117 4 C117 22 119 36 123 52" {...L} stroke="#a94a58" strokeWidth="11" />
        <path d="M117 4 C117 22 119 36 123 52" {...L} stroke="#e48a94" strokeWidth="8" />
        <path d="M115 8 C115 22 117 34 120 46" {...L} stroke="#fff" strokeWidth="1.8" opacity="0.35" />
      </P>
      <P i={1}>
        <path d="M120 46 C140 38 178 46 186 74 C192 102 168 120 146 114 C130 110 128 96 138 90 C150 82 146 70 132 68 C124 64 120 56 120 46Z" fill="url(#stG)" {...O()} />
        <path d="M140 54 C160 54 172 68 174 84 M146 62 C158 64 164 72 166 82 M150 100 C158 98 164 92 168 86" {...L} stroke="#8d2c3a" strokeWidth="1.6" opacity="0.5" />
        <path d="M134 50 C150 46 168 52 176 64" {...L} stroke="#fff" strokeWidth="3" opacity="0.3" />
      </P>
      <P i={6}>
        <path d="M56 194 V132 C56 122 66 122 74 128 C110 144 142 144 172 128 C184 122 190 126 190 136 V172 C190 192 170 192 160 184 C150 178 140 192 152 204" {...L} stroke="#a8603a" strokeWidth="15" />
        <path d="M56 194 V132 C56 122 66 122 74 128 C110 144 142 144 172 128 C184 122 190 126 190 136 V172 C190 192 170 192 160 184 C150 178 140 192 152 204" {...L} stroke="#e9975f" strokeWidth="11" />
        <path d="M56 194 V132 C56 122 66 122 74 128 C110 144 142 144 172 128 C184 122 190 126 190 136 V172 C190 192 170 192 160 184 C150 178 140 192 152 204" {...L} stroke="#b86a40" strokeWidth="11" strokeDasharray="1.5 8" />
      </P>
      <P i={5}>
        <path d="M80 152 C110 148 140 156 170 152 C178 162 150 166 120 164 C90 162 74 170 84 178 C104 186 150 180 172 188 C150 198 110 198 84 194" {...L} stroke="#b85a58" strokeWidth="12" />
        <path d="M80 152 C110 148 140 156 170 152 C178 162 150 166 120 164 C90 162 74 170 84 178 C104 186 150 180 172 188 C150 198 110 198 84 194" {...L} stroke="#f3a08e" strokeWidth="8.5" />
        <path d="M82 150 C110 146 140 154 168 150" {...L} stroke="#fff" strokeWidth="1.6" opacity="0.35" />
      </P>
    </g>
  ),
  niere: (
    <g>
      <defs>
        <radialGradient id="kdG" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#d9707a" /><stop offset="0.6" stopColor="#a8323f" /><stop offset="1" stopColor="#6e1a2a" /></radialGradient>
        <radialGradient id="blG" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#f7e29a" /><stop offset="1" stopColor="#d5a93a" /></radialGradient>
        <clipPath id="kdC"><path d="M58 22 C32 20 14 48 16 78 C18 110 40 128 62 120 C70 116 68 108 62 100 C56 90 58 82 66 76 C58 64 60 44 70 30 C68 24 64 22 58 22Z" /></clipPath>
      </defs>
      <P i={4}>
        <path d="M131 6 V150" {...L} stroke="#8e1420" strokeWidth="14" />
        <path d="M131 6 V150" {...L} stroke="#e0303c" strokeWidth="10" />
        <path d="M128 12 V140" {...L} stroke="#fff" strokeWidth="2" opacity="0.3" />
        <path d="M131 84 C150 84 160 82 172 80 M131 92 C112 96 90 90 70 84" {...L} stroke="#e0303c" strokeWidth="4" />
        <path d="M131 150 L118 178 M131 150 L142 178" {...L} stroke="#e0303c" strokeWidth="8" />
      </P>
      <P i={5}>
        <path d="M110 6 V150" {...L} stroke="#2c4a94" strokeWidth="15" />
        <path d="M110 6 V150" {...L} stroke="#5878c8" strokeWidth="11" />
        <path d="M107 12 V140" {...L} stroke="#fff" strokeWidth="2" opacity="0.3" />
        <path d="M110 100 C124 106 150 94 172 88 M110 96 C96 98 84 92 70 90" {...L} stroke="#5878c8" strokeWidth="4" />
      </P>
      <g>
        <P i={0}>
          <path d="M58 22 C32 20 14 48 16 78 C18 110 40 128 62 120 C70 116 68 108 62 100 C56 90 58 82 66 76 C58 64 60 44 70 30 C68 24 64 22 58 22Z" fill="url(#kdG)" {...O()} />
          <g clipPath="url(#kdC)">
            <path d="M64 76 L34 44 L48 36Z M64 80 L22 66 L22 82Z M64 84 L28 100 L40 112Z M62 90 L50 118 L66 118Z" fill="#7f2230" opacity="0.8" />
          </g>
        </P>
        <P i={0} m>
          <g transform="translate(240 0) scale(-1 1)">
            <path d="M58 22 C32 20 14 48 16 78 C18 110 40 128 62 120 C70 116 68 108 62 100 C56 90 58 82 66 76 C58 64 60 44 70 30 C68 24 64 22 58 22Z" fill="url(#kdG)" {...O()} />
            <path d="M64 76 L34 44 L48 36Z M64 80 L22 66 L22 82Z M64 84 L28 100 L40 112Z M62 90 L50 118 L66 118Z" fill="#7f2230" opacity="0.8" clipPath="url(#kdC)" />
          </g>
        </P>
        <P i={1}>
          <path d="M66 76 C56 70 50 62 44 58 M66 76 C54 76 46 76 38 80 M66 80 C56 86 50 92 46 98 M66 72 C60 62 58 54 56 46" {...L} stroke="#f2cf5c" strokeWidth="3.4" />
          <path d="M66 70 C74 76 74 86 66 94 C62 86 62 78 66 70Z" fill="url(#blG)" {...O(1.2)} />
          <g transform="translate(240 0) scale(-1 1)">
            <path d="M66 76 C56 70 50 62 44 58 M66 76 C54 76 46 76 38 80 M66 80 C56 86 50 92 46 98 M66 72 C60 62 58 54 56 46" {...L} stroke="#f2cf5c" strokeWidth="3.4" />
            <path d="M66 70 C74 76 74 86 66 94 C62 86 62 78 66 70Z" fill="url(#blG)" {...O(1.2)} />
          </g>
        </P>
      </g>
      <P i={2}>
        <path d="M70 94 C78 126 98 150 108 176 M170 94 C162 126 142 150 132 176" {...L} stroke="#c9a02f" strokeWidth="6" />
        <path d="M70 94 C78 126 98 150 108 176 M170 94 C162 126 142 150 132 176" {...L} stroke="#f2cf5c" strokeWidth="3.6" />
      </P>
      <P i={3}>
        <path d="M94 176 C96 160 144 160 146 176 C148 202 134 218 120 218 C106 218 92 202 94 176Z" fill="url(#blG)" {...O()} />
        <path d="M102 180 C104 196 110 208 118 212" {...L} stroke="#fff" strokeWidth="3" opacity="0.4" />
        <ellipse cx="120" cy="172" rx="12" ry="3" fill="#a77c18" opacity="0.4" />
      </P>
    </g>
  ),
  haut: (
    <g>
      <defs>
        <linearGradient id="skE" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6cfa8" /><stop offset="1" stopColor="#e9a882" /></linearGradient>
        <linearGradient id="skD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3a58f" /><stop offset="1" stopColor="#dd7f74" /></linearGradient>
        <linearGradient id="skF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbe9a8" /><stop offset="1" stopColor="#efce6a" /></linearGradient>
      </defs>
      <P i={2}>
        <path d="M16 126 H224 V196 H16Z" fill="url(#skF)" {...O()} />
        <g fill="#fff3bf" stroke="#d6b04c" strokeWidth="1.2"><circle cx="40" cy="146" r="13" /><circle cx="72" cy="160" r="15" /><circle cx="106" cy="146" r="13" /><circle cx="140" cy="164" r="16" /><circle cx="176" cy="148" r="14" /><circle cx="206" cy="166" r="12" /><circle cx="54" cy="182" r="9" /><circle cx="196" cy="186" r="8" /></g>
      </P>
      <P i={1}>
        <path d="M16 62 H224 V128 H16Z" fill="url(#skD)" {...O()} />
        <path d="M20 80 C60 74 100 88 140 80 C170 74 200 86 220 80 M20 100 C60 94 100 108 140 100 C170 94 200 106 220 100 M20 118 C60 112 100 124 140 118 C170 112 200 122 220 118" {...L} stroke="#b5504a" strokeWidth="1.4" opacity="0.4" />
      </P>
      <P i={0}>
        <path d="M16 62 V50 C30 40 50 48 66 42 C84 36 100 46 120 42 C140 38 160 48 180 42 C196 38 212 46 224 40 V62Z" fill="url(#skE)" {...O()} />
        <path d="M22 46 C40 40 56 48 72 44 M126 44 C144 40 160 48 178 44" {...L} stroke="#fff" strokeWidth="2" opacity="0.35" />
        <g fill="#fff0e0" opacity="0.8"><ellipse cx="50" cy="38" rx="5" ry="1.6" /><ellipse cx="150" cy="36" rx="5" ry="1.6" /><ellipse cx="196" cy="40" rx="4" ry="1.4" /></g>
      </P>
      <P i={6}>
        <path d="M46 64 V196" {...L} stroke="#4a68b8" strokeWidth="6" /><path d="M58 64 V196" {...L} stroke="#d4343f" strokeWidth="6" />
        <path d="M46 84 C34 80 30 70 34 62 M58 90 C70 86 74 76 70 68 M46 110 C32 112 28 100 36 94 M58 112 C72 114 76 104 68 98 M16 160 H224" {...L} stroke="#d4343f" strokeWidth="2.4" />
        <path d="M46 150 C40 142 38 134 42 128 M58 150 C64 142 66 134 62 128" {...L} stroke="#d4343f" strokeWidth="2.4" />
      </P>
      <P i={3}>
        <path d="M98 4 C100 30 98 60 100 100" {...L} stroke="#4a2e1a" strokeWidth="5" />
        <path d="M98 4 C100 30 98 60 100 100" {...L} stroke="#8a5a38" strokeWidth="3" />
        <path d="M92 100 C90 112 100 120 108 112 C112 104 110 98 100 98Z" fill="#7a5238" {...O()} />
        <path d="M100 100 V56" {...L} stroke="#c28a62" strokeWidth="9" opacity="0.5" />
      </P>
      <P i={4}>
        <path d="M84 80 C74 76 72 90 82 96 C88 98 92 92 92 86Z M110 76 C122 70 128 84 120 92 C114 94 108 88 108 82Z" fill="#f8d977" {...O(1.2)} />
        <path d="M84 86 C90 86 94 86 98 84 M108 84 C104 84 102 84 100 84" {...L} stroke="#d4a82a" strokeWidth="2" />
      </P>
      <P i={5}>
        <path d="M168 40 V84" {...L} stroke="#2f8a86" strokeWidth="3" />
        <path d="M168 84 C150 84 150 98 168 98 C186 98 186 110 168 110 C150 110 152 124 170 122 C186 120 184 132 168 132" {...L} stroke="#2f8a86" strokeWidth="5" />
        <path d="M168 84 C150 84 150 98 168 98 C186 98 186 110 168 110 C150 110 152 124 170 122 C186 120 184 132 168 132" {...L} stroke="#6fd0cb" strokeWidth="2.2" />
        <circle cx="168" cy="40" r="3" fill="#2f8a86" />
      </P>
    </g>
  ),
  blut: (
    <g>
      <defs>
        <radialGradient id="bdR" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#ff7a80" /><stop offset="1" stopColor="#b3202f" /></radialGradient>
        <linearGradient id="bdP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbe7b8" /><stop offset="1" stopColor="#f2cf86" /></linearGradient>
        <radialGradient id="bdW" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#c9c4ea" /></radialGradient>
      </defs>
      <P i={3}>
        <path d="M6 30 H234 V50 H6Z M6 180 H234 V200 H6Z" fill="#d9707a" {...O()} />
        <path d="M6 40 H234 M6 190 H234" {...L} stroke="#9c3a48" strokeWidth="1.4" opacity="0.6" />
        <path d="M6 50 H234 V180 H6Z" fill="url(#bdP)" opacity="0.9" />
      </P>
      <P i={0}><g transform="rotate(-12 52 86)"><ellipse cx="52" cy="86" rx="17" ry="13.3" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="52" cy="86" rx="7.7" ry="5.4" fill="#a3202f" opacity="0.55" /></g><g transform="rotate(20 112 120)"><ellipse cx="112" cy="120" rx="18" ry="14.0" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="112" cy="120" rx="8.1" ry="5.8" fill="#a3202f" opacity="0.55" /></g><g transform="rotate(8 168 82)"><ellipse cx="168" cy="82" rx="16" ry="12.5" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="168" cy="82" rx="7.2" ry="5.1" fill="#a3202f" opacity="0.55" /></g><g transform="rotate(-25 86 140)"><ellipse cx="86" cy="140" rx="15" ry="11.7" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="86" cy="140" rx="6.8" ry="4.8" fill="#a3202f" opacity="0.55" /></g><g transform="rotate(30 196 128)"><ellipse cx="196" cy="128" rx="16" ry="12.5" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="196" cy="128" rx="7.2" ry="5.1" fill="#a3202f" opacity="0.55" /></g><g transform="rotate(-5 140 98)"><ellipse cx="140" cy="98" rx="14" ry="10.9" fill="url(#bdR)" {...O(1.2)} /><ellipse cx="140" cy="98" rx="6.3" ry="4.5" fill="#a3202f" opacity="0.55" /></g></P>
      <P i={1}>
        <circle cx="132" cy="150" r="30" fill="url(#bdW)" {...O()} />
        <path d="M118 140 C108 146 112 160 124 158 C132 154 126 148 134 148 C144 150 146 160 138 166 C150 168 156 154 148 146 C142 140 128 134 118 140Z" fill="#7a5bc0" />
        <g fill="#b6a4e0"><circle cx="112" cy="130" r="1.8" /><circle cx="150" cy="130" r="1.8" /><circle cx="158" cy="156" r="1.8" /><circle cx="106" cy="160" r="1.8" /></g>
      </P>
      <P i={2}>
        <g fill="#f2c94c" stroke="#b8932a" strokeWidth="1"><path d="M30 130 q6 -8 12 0 q-6 8 -12 0Z" /><path d="M84 66 q6 -8 12 0 q-6 8 -12 0Z" /><path d="M196 96 q6 -8 12 0 q-6 8 -12 0Z" /><path d="M200 160 q6 -8 12 0 q-6 8 -12 0Z" /><path d="M62 170 q6 -8 12 0 q-6 8 -12 0Z" /></g>
      </P>
    </g>
  ),
  bewegung: (
    <g>
      <defs>
        <linearGradient id="bnB" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#d9c593" /><stop offset="0.5" stopColor="#f6ecc9" /><stop offset="1" stopColor="#cdb77f" /></linearGradient>
        <linearGradient id="bnC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b9e3f3" /><stop offset="1" stopColor="#7cc0de" /></linearGradient>
      </defs>
      <P i={0}>
        <path d="M88 4 H152 C154 44 158 70 168 88 C176 108 152 114 138 108 C130 104 126 100 120 100 C114 100 110 104 102 108 C88 114 64 108 72 88 C82 70 86 44 88 4Z" fill="url(#bnB)" {...O()} />
        <path d="M100 10 C100 44 98 62 92 80" {...L} stroke="#a8935a" strokeWidth="2" opacity="0.5" />
      </P>
      <P i={1}>
        <path d="M66 132 C100 126 140 126 174 132 L166 152 C160 180 156 196 152 218 H90 C86 196 82 180 74 152Z" fill="url(#bnB)" {...O()} />
        <path d="M168 150 C186 160 186 200 176 218 H156" fill="#e8dcb4" {...O()} />
        <path d="M100 150 C102 180 100 200 98 214" {...L} stroke="#a8935a" strokeWidth="2" opacity="0.5" />
      </P>
      <P i={3}>
        <path d="M76 100 C86 116 104 118 118 108 C132 118 152 116 164 100" {...L} stroke="#5aa8cc" strokeWidth="9" />
        <path d="M76 100 C86 116 104 118 118 108 C132 118 152 116 164 100" {...L} stroke="url(#bnC)" strokeWidth="6" />
      </P>
      <P i={4}>
        <path d="M70 124 C80 112 100 114 110 124 C106 132 80 134 70 124Z M130 124 C140 114 160 112 170 124 C160 134 136 132 130 124Z" fill="#f4f6f8" {...O()} />
      </P>
      <P i={5}>
        <path d="M104 112 C112 120 122 126 128 132" {...L} stroke="#8e1b28" strokeWidth="7" />
        <path d="M104 112 C112 120 122 126 128 132" {...L} stroke="#d4505d" strokeWidth="4.4" />
        <path d="M136 112 C128 120 118 126 112 132" {...L} stroke="#8e1b28" strokeWidth="7" />
        <path d="M136 112 C128 120 118 126 112 132" {...L} stroke="#d4505d" strokeWidth="4.4" />
      </P>
      <P i={2}>
        <ellipse cx="120" cy="86" rx="15" ry="19" fill="#fbfaf2" {...O()} />
        <path d="M110 76 C112 70 118 68 122 70" {...L} stroke="#fff" strokeWidth="3" opacity="0.8" />
      </P>
      <P i={6}>
        <path d="M184 86 C176 74 196 66 208 74 C222 82 218 104 204 108 C190 110 180 98 184 86Z" fill="#d7efff" opacity="0.92" {...O()} />
        <path d="M190 84 C196 80 204 82 208 88" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.8" />
        <path d="M174 92 C178 92 180 92 184 90" {...L} stroke="#7fb6d8" strokeWidth="2" />
      </P>
    </g>
  ),
  psyche: (
    <g>
      <defs>
        <linearGradient id="psH" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f8d9bf" /><stop offset="1" stopColor="#e2a98a" /></linearGradient>
        <radialGradient id="psB" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#fbc7d0" /><stop offset="1" stopColor="#e58a9c" /></radialGradient>
        <clipPath id="psBc"><path d="M82 94 C80 58 116 40 152 50 C176 58 176 94 160 108 C140 122 96 120 84 104Z" /></clipPath>
      </defs>
      <P i={0}>
        <path d="M64 208 C60 160 48 126 56 90 C66 42 118 18 160 36 C190 50 196 78 194 100 L206 122 C208 128 202 130 197 130 C198 138 196 142 192 144 C194 150 192 154 188 156 C190 164 184 172 170 172 L158 176 C156 186 158 198 162 208Z" fill="url(#psH)" {...O()} />
        <path d="M70 60 C90 40 124 28 154 38" {...L} stroke="#fff" strokeWidth="3" opacity="0.3" />
        <circle cx="176" cy="92" r="3" fill="#4a3426" />
      </P>
      <P i={1}>
        <path d="M82 94 C80 58 116 40 152 50 C176 58 176 94 160 108 C140 122 96 120 84 104Z" fill="url(#psB)" {...O()} />
        <g clipPath="url(#psBc)"><path d="M70 60 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 M70 72 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 M70 84 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 M70 96 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0 M70 108 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0" {...L} stroke="#b24d62" strokeWidth="1.4" opacity="0.6" /></g>
      </P>
      <P i={2}>
        <path d="M84 112 C86 102 108 100 120 108 C124 118 112 128 98 126 C88 124 84 118 84 112Z" fill="#d9a577" {...O()} />
        <path d="M90 112 H114 M90 118 H112" {...L} stroke="#8a5a3a" strokeWidth="1.2" opacity="0.6" />
      </P>
      <P i={3}>
        <circle cx="208" cy="58" r="5" fill="#9a8bd8" {...O(1.2)} /><circle cx="218" cy="42" r="8" fill="#9a8bd8" {...O(1.2)} />
        <path d="M200 8 C190 0 176 8 180 20 C170 24 174 40 188 38 C196 46 214 42 216 30 C228 24 222 8 210 10 C208 4 202 4 200 8Z" fill="#b9acea" {...O(1.4)} />
        <path d="M194 22 q4 -6 10 0 M200 30 q6 4 12 -2" {...L} stroke="#6a5ab0" strokeWidth="1.6" />
      </P>
    </g>
  ),
  sinne: (
    <g>
      <defs>
        <radialGradient id="eyS" cx="0.4" cy="0.35" r="0.9"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#d9dde4" /></radialGradient>
        <radialGradient id="eyV" cx="0.4" cy="0.4" r="0.9"><stop offset="0" stopColor="#eaf6fc" /><stop offset="1" stopColor="#b8d9ea" /></radialGradient>
        <linearGradient id="eyI" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a95c4" /><stop offset="1" stopColor="#1f4f78" /></linearGradient>
        <radialGradient id="eyL" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stopColor="#fffbe0" /><stop offset="1" stopColor="#f2dc8a" /></radialGradient>
      </defs>
      <P i={0}>
        <circle cx="140" cy="112" r="68" fill="url(#eyS)" {...O()} />
      </P>
      <P i={4}>
        <circle cx="140" cy="112" r="58" fill="url(#eyV)" {...O(1.2)} />
        <path d="M120 80 C140 90 150 110 140 130 M150 74 C160 96 164 120 152 146" {...L} stroke="#fff" strokeWidth="2" opacity="0.5" />
      </P>
      <P i={5}>
        <path d="M161 54 A62 62 0 0 1 161 170" {...L} stroke="#a8321f" strokeWidth="8" />
        <path d="M161 54 A62 62 0 0 1 161 170" {...L} stroke="#e8613f" strokeWidth="5" />
        <path d="M190 90 C196 100 198 118 192 134 M178 76 C188 88 192 104 190 118" {...L} stroke="#c92f2f" strokeWidth="1.2" opacity="0.7" />
      </P>
      <P i={6}>
        <path d="M202 120 C216 122 226 128 236 134" {...L} stroke="#c99a1d" strokeWidth="13" />
        <path d="M202 120 C216 122 226 128 236 134" {...L} stroke="#f7d66a" strokeWidth="9" />
        <ellipse cx="236" cy="134" rx="3" ry="6" fill="#c99a1d" />
      </P>
      <P i={3}>
        <ellipse cx="94" cy="112" rx="11" ry="25" fill="url(#eyL)" {...O()} />
        <path d="M90 94 C88 104 88 116 90 128" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.7" />
      </P>
      <P i={2}>
        <path d="M80 76 H92 V101 H82Z M80 148 H92 V123 H82Z" fill="url(#eyI)" {...O()} />
        <path d="M84 82 V98 M84 142 V126" {...L} stroke="#9cc6e6" strokeWidth="1.4" opacity="0.7" />
        <circle cx="87" cy="112" r="0.01" />
      </P>
      <P i={1}>
        <path d="M80 70 C46 76 40 148 80 154 C70 134 70 90 80 70Z" fill="#dff1fb" opacity="0.85" {...O()} />
        <path d="M70 84 C58 94 56 124 70 140" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.8" />
      </P>
    </g>
  ),
  geschlecht: (
    <g>
      <defs>
        <radialGradient id="gsU" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#f8b9c3" /><stop offset="1" stopColor="#d66f86" /></radialGradient>
        <radialGradient id="gsO" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#fbd9b0" /><stop offset="1" stopColor="#e3a666" /></radialGradient>
        <linearGradient id="gsV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#c8566e" /><stop offset="0.5" stopColor="#e88fa2" /><stop offset="1" stopColor="#c8566e" /></linearGradient>
      </defs>
      <P i={4}>
        <path d="M108 150 H132 L136 214 H104Z" fill="url(#gsV)" {...O()} />
        <path d="M108 164 H132 M107 178 H133 M106 192 H134" {...L} stroke="#8e2f48" strokeWidth="1.6" opacity="0.55" />
      </P>
      <P i={3}>
        <path d="M106 128 H134 L132 152 H108Z" fill="#c95f78" {...O()} />
        <ellipse cx="120" cy="152" rx="12" ry="3" fill="#7a1f36" opacity="0.6" />
      </P>
      <P i={0}>
        <path d="M94 62 C106 52 134 52 146 62 C156 82 148 112 134 130 H106 C92 112 84 82 94 62Z" fill="url(#gsU)" {...O()} />
        <path d="M108 70 C120 66 130 70 134 78 C132 100 126 116 120 122 C114 116 108 100 106 78Z" fill="#9c3a52" opacity="0.55" />
        <path d="M100 70 C96 86 98 104 106 118" {...L} stroke="#fff" strokeWidth="3" opacity="0.28" />
      </P>
      <P i={1}>
        <path d="M96 66 C74 50 52 56 44 74 M144 66 C166 50 188 56 196 74" {...L} stroke="#b4546a" strokeWidth="8" />
        <path d="M96 66 C74 50 52 56 44 74 M144 66 C166 50 188 56 196 74" {...L} stroke="#ee9aac" strokeWidth="5" />
        <path d="M44 74 l-8 4 M44 74 l-6 -6 M44 74 l-2 10 M196 74 l8 4 M196 74 l6 -6 M196 74 l2 10" {...L} stroke="#ee9aac" strokeWidth="2.4" />
      </P>
      <P i={2}>
        <ellipse cx="36" cy="94" rx="16" ry="12" fill="url(#gsO)" {...O()} /><ellipse cx="204" cy="94" rx="16" ry="12" fill="url(#gsO)" {...O()} />
        <circle cx="30" cy="92" r="3.4" fill="#fff4de" stroke="#c18a48" strokeWidth="0.8" /><circle cx="40" cy="98" r="2.6" fill="#fff4de" stroke="#c18a48" strokeWidth="0.8" />
        <circle cx="210" cy="92" r="3.4" fill="#fff4de" stroke="#c18a48" strokeWidth="0.8" /><circle cx="200" cy="98" r="2.6" fill="#fff4de" stroke="#c18a48" strokeWidth="0.8" />
      </P>
    </g>
  ),
  infektion: (
    <g>
      <defs>
        <radialGradient id="ifV" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#ffb08a" /><stop offset="1" stopColor="#d4572a" /></radialGradient>
        <radialGradient id="ifB" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#b7ecb3" /><stop offset="1" stopColor="#3f9a4a" /></radialGradient>
        <radialGradient id="ifW" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#b9c8ea" /></radialGradient>
      </defs>
      <P i={0}>
        <path d="M84.0 66.0 L94.0 66.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="94.0" cy="66.0" r="3.2" fill="#f08a5a" /><path d="M81.8 75.5 L90.8 79.9" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="90.8" cy="79.9" r="3.2" fill="#f08a5a" /><path d="M75.7 83.2 L82.0 91.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="82.0" cy="91.0" r="3.2" fill="#f08a5a" /><path d="M66.9 87.4 L69.1 97.2" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="69.1" cy="97.2" r="3.2" fill="#f08a5a" /><path d="M57.1 87.4 L54.9 97.2" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="54.9" cy="97.2" r="3.2" fill="#f08a5a" /><path d="M48.3 83.2 L42.0 91.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="42.0" cy="91.0" r="3.2" fill="#f08a5a" /><path d="M42.2 75.5 L33.2 79.9" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="33.2" cy="79.9" r="3.2" fill="#f08a5a" /><path d="M40.0 66.0 L30.0 66.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="30.0" cy="66.0" r="3.2" fill="#f08a5a" /><path d="M42.2 56.5 L33.2 52.1" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="33.2" cy="52.1" r="3.2" fill="#f08a5a" /><path d="M48.3 48.8 L42.0 41.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="42.0" cy="41.0" r="3.2" fill="#f08a5a" /><path d="M57.1 44.6 L54.9 34.8" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="54.9" cy="34.8" r="3.2" fill="#f08a5a" /><path d="M66.9 44.6 L69.1 34.8" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="69.1" cy="34.8" r="3.2" fill="#f08a5a" /><path d="M75.7 48.8 L82.0 41.0" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="82.0" cy="41.0" r="3.2" fill="#f08a5a" /><path d="M81.8 56.5 L90.8 52.1" {...L} stroke="#c9522c" strokeWidth="2.4" /><circle cx="90.8" cy="52.1" r="3.2" fill="#f08a5a" />
        <circle cx="62" cy="66" r="22" fill="url(#ifV)" {...O()} />
        <circle cx="54" cy="58" r="5" fill="#fff" opacity="0.35" />
      </P>
      <P i={1}>
        <rect x="150" y="34" width="62" height="20" rx="10" fill="url(#ifB)" {...O()} transform="rotate(-14 181 44)" />
        <rect x="160" y="70" width="58" height="19" rx="9.5" fill="url(#ifB)" {...O()} transform="rotate(10 189 80)" />
        <rect x="140" y="100" width="56" height="19" rx="9.5" fill="url(#ifB)" {...O()} transform="rotate(-6 168 110)" />
        <path d="M150 52 C140 56 138 66 128 66 M218 80 C228 84 230 94 240 94" {...L} stroke="#3f9a4a" strokeWidth="1.8" />
      </P>
      <P i={2}>
        <path d="M30 168 C22 150 40 134 60 140 C70 124 104 120 118 138 C140 126 170 136 172 158 C196 160 204 184 184 196 C190 214 160 222 142 212 C124 224 90 224 74 212 C50 214 30 194 30 168Z" fill="url(#ifW)" {...O()} />
        <path d="M84 168 C74 172 78 188 92 186 C100 184 100 176 108 178 C118 182 116 196 104 198 C122 204 134 188 128 176 C122 164 96 158 84 168Z" fill="#7a5bc0" />
        <g fill="#aeb9dc"><circle cx="150" cy="172" r="2.4" /><circle cx="60" cy="176" r="2.4" /><circle cx="140" cy="196" r="2.4" /></g>
      </P>
    </g>
  ),
  stoffwechsel: (
    <g>
      <defs>
        <linearGradient id="smP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8dd96" /><stop offset="1" stopColor="#dcae4e" /></linearGradient>
        <linearGradient id="smD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7b6a8" /><stop offset="1" stopColor="#d9786c" /></linearGradient>
      </defs>
      <P i={2}>
        <path d="M82 52 C30 44 18 118 62 140" {...L} stroke="#a8503f" strokeWidth="19" />
        <path d="M82 52 C30 44 18 118 62 140" {...L} stroke="url(#smD)" strokeWidth="15" />
        <path d="M78 50 C42 48 28 90 44 122" {...L} stroke="#fff" strokeWidth="2.2" opacity="0.35" />
      </P>
      <P i={0}>
        <path d="M66 82 C100 62 150 76 198 54 C214 56 218 78 204 88 C158 112 106 112 70 112 C54 112 52 92 66 82Z" fill="url(#smP)" {...O()} />
        <g fill="#c9984a" opacity="0.4"><circle cx="100" cy="88" r="5" /><circle cx="124" cy="92" r="6" /><circle cx="152" cy="84" r="5" /><circle cx="176" cy="78" r="5" /><circle cx="140" cy="102" r="4" /></g>
        <path d="M80 80 C110 70 150 80 196 60" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.4" />
      </P>
      <P i={1}>
        <path d="M70 100 C110 96 160 90 200 72" {...L} stroke="#7a4a14" strokeWidth="4" />
        <path d="M70 100 C110 96 160 90 200 72" {...L} stroke="#c88a2c" strokeWidth="2.2" />
        <path d="M120 96 C122 108 120 114 116 120 M150 90 C152 102 150 110 146 116" {...L} stroke="#c88a2c" strokeWidth="1.8" />
      </P>
      <P i={3}>
        <polygon points="60,169 66,172.5 66,179.5 60,183 54,179.5 54,172.5" fill="#7cc4ee" {...O(1)} /><polygon points="96,183 102,186.5 102,193.5 96,197 90,193.5 90,186.5" fill="#7cc4ee" {...O(1)} /><polygon points="140,173 146,176.5 146,183.5 140,187 134,183.5 134,176.5" fill="#7cc4ee" {...O(1)} /><polygon points="180,185 186,188.5 186,195.5 180,199 174,195.5 174,188.5" fill="#7cc4ee" {...O(1)} /><polygon points="206,165 212,168.5 212,175.5 206,179 200,175.5 200,168.5" fill="#7cc4ee" {...O(1)} /><polygon points="120,199 126,202.5 126,209.5 120,213 114,209.5 114,202.5" fill="#7cc4ee" {...O(1)} /><circle cx="80" cy="184" r="3.4" fill="#6d54c8" /><circle cx="116" cy="176" r="3.4" fill="#6d54c8" /><circle cx="160" cy="190" r="3.4" fill="#6d54c8" /><circle cx="194" cy="180" r="3.4" fill="#6d54c8" /><circle cx="72" cy="204" r="3.4" fill="#6d54c8" />
        <path d="M30 196 C24 186 34 178 38 188 C42 180 52 186 44 196 C40 204 34 202 30 196Z" fill="#4aa3d9" {...O(1.2)} />
      </P>
    </g>
  ),
  schmerz: (
    <g>
      <defs>
        <radialGradient id="snS" cx="0.4" cy="0.3" r="0.9"><stop offset="0" stopColor="#ffe08a" /><stop offset="1" stopColor="#e8a63a" /></radialGradient>
        <linearGradient id="snM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffaf0" /><stop offset="1" stopColor="#ead9ae" /></linearGradient>
      </defs>
      <P i={1}>
        <path d="M44 96 C30 86 20 74 12 64 M44 96 C28 100 16 100 6 108 M42 88 C34 72 32 58 26 46 M46 106 C36 120 30 130 20 142 M30 84 C22 80 14 80 8 74 M26 62 C16 56 12 50 8 42" {...L} stroke="#c9882a" strokeWidth="5" />
        <path d="M44 96 C30 86 20 74 12 64 M44 96 C28 100 16 100 6 108 M42 88 C34 72 32 58 26 46 M46 106 C36 120 30 130 20 142" {...L} stroke="#f0b650" strokeWidth="2.6" />
      </P>
      <P i={0}>
        <circle cx="62" cy="100" r="26" fill="url(#snS)" {...O()} />
        <circle cx="64" cy="102" r="10" fill="#9a5a14" opacity="0.7" /><circle cx="61" cy="99" r="3" fill="#fff" opacity="0.5" />
      </P>
      <P i={2}>
        <path d="M88 100 C120 100 150 104 236 104" {...L} stroke="#c9b06a" strokeWidth="9" />
        <path d="M88 100 C120 100 150 104 236 104" {...L} stroke="#f2dfa8" strokeWidth="5.5" />
      </P>
      <P i={3}>
        <rect x="102" y="92" width="26" height="24" rx="11" fill="url(#snM)" {...O()} />
        <rect x="134" y="92" width="26" height="24" rx="11" fill="url(#snM)" {...O()} />
        <rect x="166" y="92" width="26" height="24" rx="11" fill="url(#snM)" {...O()} />
        <path d="M110 98 H122 M142 98 H154 M174 98 H186" {...L} stroke="#fff" strokeWidth="2.4" opacity="0.8" />
      </P>
      <P i={4}>
        <path d="M6 34 L18 54 L10 56 L24 80" {...L} stroke="#ff5a3c" strokeWidth="4" />
        <path d="M6 34 L18 54 L10 56 L24 80" {...L} stroke="#fff0a0" strokeWidth="1.4" />
        <circle cx="106" cy="104" r="6" fill="#ff5a3c" opacity="0.9" /><circle cx="150" cy="106" r="6" fill="#ff5a3c" opacity="0.6" /><circle cx="200" cy="106" r="6" fill="#ff5a3c" opacity="0.35" />
        <path d="M224 90 l12 14 l-12 14" {...L} stroke="#ff5a3c" strokeWidth="3" />
      </P>
    </g>
  ),
  notfall: (
    <g>
      <defs>
        <radialGradient id="nfH" cx="0.35" cy="0.3" r="0.9"><stop offset="0" stopColor="#ff8088" /><stop offset="0.6" stopColor="#d4222f" /><stop offset="1" stopColor="#8a0f1c" /></radialGradient>
      </defs>
      <rect x="6" y="196" width="228" height="20" fill="#fbe9e9" opacity="0.7" />
      <P i={2}>
        <path d="M6 206 H62 L72 188 L84 224 L96 196 L102 206 H234" {...L} stroke="#9c1a28" strokeWidth="5" />
        <path d="M6 206 H62 L72 188 L84 224 L96 196 L102 206 H234" {...L} stroke="#ff5a66" strokeWidth="2.6" />
      </P>
      <P i={0}>
        <path d="M110 176 C70 148 46 118 50 86 C54 56 92 48 110 76 C128 48 166 56 170 86 C174 118 150 148 110 176Z" fill="url(#nfH)" {...O()} />
        <path d="M64 84 C66 68 82 62 94 70" {...L} stroke="#fff" strokeWidth="4" opacity="0.4" />
      </P>
      <P i={1}>
        <circle cx="190" cy="64" r="34" fill="#fff" {...O()} />
        <path d="M180 40 H200 V54 H214 V74 H200 V88 H180 V74 H166 V54 H180Z" fill="#d4222f" />
        <path d="M184 44 H196 M170 58 H176" {...L} stroke="#fff" strokeWidth="2" opacity="0.4" />
      </P>
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
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [apart, setApart] = useState(false);
  const [sel, setSel] = useState<number | null>(null);
  const k = figureKey(id, area);
  useEffect(() => {
    if (!open) { setApart(false); setSel(null); return; }
    const h = setTimeout(() => setApart(true), 120);
    return () => clearTimeout(h);
  }, [open]);
  if (!k) return null;
  const parts = ORGAN_PARTS[k] ?? [];
  const title = ORGAN_TITLE[k]?.[lang] ?? t("learn.figure");
  const cur = sel !== null ? parts[sel] : null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${title}: ${t("learn.figure.tap")}`}
        className="mb-4 flex w-full flex-col items-center rounded-2xl border border-teal/30 bg-tealsoft p-3 text-teal transition-colors hover:border-teal"
      >
        <svg viewBox="0 0 240 220" className="h-48 w-48" role="img" aria-label={title}>
          {FIG[k]}
        </svg>
        <span className="mt-1 text-sm font-semibold">{title}</span>
        <span className="text-xs text-muted">{t("learn.figure.tap")}</span>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title={title} wide>
        <div className="rounded-2xl bg-tealsoft p-2 text-teal">
          <PartCtx.Provider value={{ on: true, sel, vec: (i) => (apart ? parts[i]?.v ?? [0, 0] : [0, 0]), pick: (i) => setSel((s) => (s === i ? null : i)) }}>
            <svg viewBox="-34 -22 308 264" className="og-lit mx-auto h-auto w-full max-w-md" role="img" aria-label={title} onClick={() => setSel(null)}>
              <Shade />
              <g filter="url(#og3d)">{FIG[k]}</g>
            </svg>
          </PartCtx.Provider>
          <div className="mt-1 flex justify-center">
            <button type="button" onClick={() => setApart((a) => !a)} className="rounded-full border border-teal/40 bg-surface px-4 py-1.5 text-sm font-medium text-teal hover:border-teal">
              {apart ? t("learn.figure.join") : t("learn.figure.split")}
            </button>
          </div>
        </div>
        <div aria-live="polite" className="mt-3 min-h-[5.5rem] rounded-2xl border border-line bg-surface p-3">
          {cur ? (
            <div className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 h-6 w-6 shrink-0 rounded-full border border-black/20" style={{ background: cur.color }} />
              <div>
                <p className="font-semibold leading-snug">{cur.name[lang]}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{cur.role[lang]}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted">{t("learn.figure.pick")}</p>
          )}
        </div>
        <ul className="mt-3 flex flex-wrap gap-2">
          {parts.map((p, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => setSel((s) => (s === i ? null : i))}
                aria-pressed={sel === i}
                className={cn("flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm leading-tight transition-colors", sel === i ? "border-teal bg-tealsoft font-semibold" : "border-line bg-surface hover:border-teal")}
              >
                <span aria-hidden className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/20" style={{ background: p.color }} />
                {p.name[lang]}
              </button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
}
