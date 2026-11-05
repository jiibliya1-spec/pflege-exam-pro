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
      <P i={0}>
      <rect x="20" y="64" width="200" height="22" fill="#f4c9a3" {...O()} />
      </P>
      <P i={1}>
      <rect x="20" y="86" width="200" height="56" fill="#ee9d86" {...O()} />
      </P>
      <P i={2}>
      <rect x="20" y="142" width="200" height="56" rx="0" fill="#f8e3a6" {...O()} />
      </P>
      <P i={0}>
      <path d="M20 64 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="#f1b88f" {...O()} />
      </P>
      <P i={3}>
      <path d="M92 66 V40 C92 28 98 18 102 8 L108 8 C110 20 106 30 106 40 V66" fill="#5b3a29" {...O()} />
      <path d="M90 66 C88 90 92 110 98 124 C104 110 110 90 108 66Z" fill="#7a5238" {...O()} />
      </P>
      <P i={4}>
      <ellipse cx="118" cy="104" rx="9" ry="12" fill="#f8d977" {...O()} />
      </P>
      <P i={5}>
      <path d="M170 66 C174 82 166 92 172 104 C178 116 168 122 172 136" {...L} stroke="#4aa3a0" strokeWidth="3" />
      <circle cx="172" cy="148" r="12" fill="none" stroke="#4aa3a0" strokeWidth="3" /><circle cx="172" cy="148" r="5" fill="none" stroke="#4aa3a0" strokeWidth="3" />
      </P>
      <P i={6}>
      <path d="M48 98 C60 100 70 110 74 124 C76 134 76 150 76 190 M200 98 C190 104 188 120 190 190" {...L} stroke="#d4343f" strokeWidth="3" />
      <path d="M58 100 C64 112 62 140 62 190" {...L} stroke="#4f74c2" strokeWidth="3" />
      </P>
      <P i={2}>
      <circle cx="40" cy="168" r="14" fill="#fbeab4" {...O()} /><circle cx="110" cy="176" r="16" fill="#fbeab4" {...O()} /><circle cx="156" cy="170" r="13" fill="#fbeab4" {...O()} /><circle cx="198" cy="176" r="14" fill="#fbeab4" {...O()} />
      </P>
      <D>
      <rect className="of-shimmer" x="20" y="64" width="40" height="22" fill="#fff" opacity="0.3" />
      </D>
    </g>
  ),
  blut: (
    <g>
      <defs><G id="rb" a="#ee4b57" b="#a4182a" /></defs>
      <P i={3}>
      <path d="M0 52 H240 M0 168 H240" {...L} stroke="#c4535e" strokeWidth="8" />
      <rect x="0" y="56" width="240" height="108" fill="#f6b6bb" opacity="0.35" />
      </P>
      <g className="of-slide">
        <P i={0}>
        <g transform="translate(36 100)"><ellipse rx="26" ry="22" fill="url(#rb)" {...O()} /><ellipse rx="11" ry="9" fill="#7a0f20" opacity="0.35" /></g>
        <g transform="translate(100 134)"><ellipse rx="24" ry="20" fill="url(#rb)" {...O()} /><ellipse rx="10" ry="8" fill="#7a0f20" opacity="0.35" /></g>
        <g transform="translate(150 88)"><ellipse rx="25" ry="21" fill="url(#rb)" {...O()} /><ellipse rx="10" ry="8" fill="#7a0f20" opacity="0.35" /></g>
        </P>
        <P i={1}>
        <g transform="translate(196 128)"><circle r="26" fill="#f2f2f8" {...O()} /><path d="M-12 -8 C-2 -18 14 -10 10 2 C14 12 -2 18 -10 8 C-18 2 -16 -4 -12 -8Z" fill="#7a5bc0" /></g>
        </P>
        <P i={2}>
        <circle cx="70" cy="76" r="5" fill="#f2c94c" /><circle cx="128" cy="100" r="4" fill="#f2c94c" /><circle cx="224" cy="86" r="5" fill="#f2c94c" /><circle cx="20" cy="140" r="4" fill="#f2c94c" />
        </P>
      </g>
    </g>
  ),
  bewegung: (
    <g>
      <defs><G id="bn" a="#f6efd8" b="#cdbb8c" /></defs>
      <P i={0}>
      <path d="M92 8 H148 C152 50 156 80 164 104 C150 112 90 112 76 104 C84 80 88 50 92 8Z" fill="url(#bn)" {...O()} />
      </P>
      <P i={3}>
      <path d="M72 100 C78 92 162 92 168 100 C172 118 160 128 120 126 C80 128 68 118 72 100Z" fill="#9fd1e8" {...O()} />
      <path d="M72 128 C96 118 142 118 168 128 C158 138 82 138 72 128Z" fill="#7fb6d6" {...O()} />
      </P>
      <P i={4}>
      <ellipse cx="82" cy="122" rx="16" ry="6" fill="#e9eef2" {...O()} /><ellipse cx="158" cy="122" rx="16" ry="6" fill="#e9eef2" {...O()} />
      </P>
      <P i={5}>
      <path d="M104 100 L132 134 M136 100 L108 134" {...L} stroke="#c94b57" strokeWidth="4" />
      </P>
      <P i={1}>
      <path d="M72 138 C70 150 76 160 78 214 H156 C158 160 166 150 170 138 C140 142 100 142 72 138Z" fill="url(#bn)" {...O()} />
      <path d="M170 140 C190 170 190 196 184 214 H164" fill="#e7ddc0" {...O()} />
      </P>
      <P i={2}>
      <path d="M170 60 C198 70 204 120 176 134 C196 118 190 80 168 76Z" fill="#fff" opacity="0.7" {...O()} />
      </P>
      <P i={6}>
      <ellipse cx="190" cy="104" rx="14" ry="22" fill="#d7efff" {...O()} />
      </P>
    </g>
  ),
  psyche: (
    <g>
      <defs><G id="ps1" a="#f9b9c4" b="#e68aa0" /></defs>
      <P i={0}>
      <path d="M66 214 V160 C48 150 50 118 54 100 C58 54 96 26 132 30 C170 34 190 66 186 100 L200 128 L186 134 L186 148 C184 160 170 162 160 158 V214Z" fill="#f2cdae" {...O()} />
      </P>
      <P i={1}>
      <path d="M76 102 C72 66 100 44 132 46 C160 48 176 76 168 102 C160 120 140 120 130 114 C116 124 84 122 76 102Z" fill="url(#ps1)" {...O()} />
      <path d="M92 66 C104 56 112 76 124 64 C136 54 144 74 156 66 M84 92 C96 80 108 98 120 86 C132 76 144 96 158 84" {...L} stroke="#b05468" strokeWidth="2" />
      </P>
      <P i={2}>
      <path d="M118 112 C130 108 150 112 156 122 C150 134 126 132 118 122Z" fill="#d9a577" {...O()} />
      </P>
      <P i={3}>
      <circle className="of-float" cx="206" cy="48" r="6" fill="#9a8bd8" /><circle className="of-float of-d2" cx="220" cy="28" r="9" fill="#9a8bd8" opacity="0.7" />
      </P>
    </g>
  ),
  sinne: (
    <g>
      <defs>
        <radialGradient id="ir" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stopColor="#5aa7d6" /><stop offset="1" stopColor="#2b5f8a" /></radialGradient>
      </defs>
      <P i={0}>
      <circle cx="104" cy="110" r="62" fill="#f6f7f9" {...O()} />
      </P>
      <P i={4}>
      <circle cx="104" cy="110" r="52" fill="#d4e9f4" />
      </P>
      <P i={5}>
      <path d="M62 142 C48 120 50 90 66 72 C54 92 56 122 72 146Z" fill="#e2553c" />
      <path d="M62 142 C48 120 50 90 66 72" {...L} stroke="#e2553c" strokeWidth="4" />
      </P>
      <P i={6}>
      <path d="M50 134 C34 146 24 160 14 178" {...L} stroke="#f0c44a" strokeWidth="11" />
      </P>
      <P i={1}>
      <path d="M150 76 C196 82 200 138 150 144 C158 124 158 96 150 76Z" fill="#eaf5fb" {...O()} />
      <path d="M146 70 C196 74 210 146 146 150 C160 128 160 92 146 70Z" fill="none" stroke="#9cc4dc" strokeWidth="2" />
      </P>
      <P i={3}>
      <ellipse cx="140" cy="110" rx="9" ry="21" fill="#fff0b8" {...O()} />
      </P>
      <P i={2}>
      <g className="of-blink" style={{ transformOrigin: "148px 110px" }}>
        <path d="M144 66 L156 68 L148 92 L142 92Z M144 154 L156 152 L148 128 L142 128Z" fill="url(#ir)" {...O()} />
      </g>
      </P>
      <D>
      <path d="M86 92 L128 100 M86 128 L128 120" {...L} stroke="#8fb7cf" strokeWidth="1.5" strokeDasharray="3 4" />
      </D>
    </g>
  ),
  geschlecht: (
    <g>
      <defs><G id="ut" a="#f1a2ae" b="#cf6479" /></defs>
      <P i={1}>
      <path d="M104 84 C80 70 54 72 42 90" {...L} stroke="#e58d9a" strokeWidth="7" />
      <path d="M136 84 C160 70 186 72 198 90" {...L} stroke="#e58d9a" strokeWidth="7" />
      <path d="M40 92 L30 84 M40 92 L28 96 M40 92 L36 106 M200 92 L210 84 M200 92 L212 96 M200 92 L204 106" {...L} stroke="#e58d9a" strokeWidth="3" />
      </P>
      <P i={2}>
      <ellipse cx="46" cy="112" rx="16" ry="11" fill="#f6c58f" {...O()} /><ellipse cx="194" cy="112" rx="16" ry="11" fill="#f6c58f" {...O()} />
      <circle cx="42" cy="110" r="3" fill="#fff" opacity="0.8" /><circle cx="196" cy="114" r="3" fill="#fff" opacity="0.8" />
      </P>
      <P i={0}>
      <g className="of-beat" style={{ transformOrigin: "120px 120px" }}>
        <path d="M120 66 C152 66 164 108 142 140 C136 150 128 160 120 160 C112 160 104 150 98 140 C76 108 88 66 120 66Z" fill="url(#ut)" {...O()} />
        <path d="M120 96 C132 96 136 118 126 134 C122 140 118 140 114 134 C104 118 108 96 120 96Z" fill="#a83a52" opacity="0.5" />
      </g>
      </P>
      <P i={4}>
      <path d="M112 160 V206 M128 160 V206" {...L} stroke="#e58d9a" strokeWidth="9" />
      </P>
      <P i={3}>
      <ellipse cx="120" cy="162" rx="12" ry="6" fill="#d9697f" {...O()} />
      </P>
    </g>
  ),
  infektion: (
    <g>
      <P i={0}>
      <g className="of-spin" style={{ transformOrigin: "78px 106px" }}>
        <circle cx="78" cy="106" r="34" fill="#e8744a" {...O()} />
        <path d="M78 66 V52 M78 146 V160 M38 106 H24 M118 106 H132 M50 78 L40 68 M106 134 L116 144 M106 78 L116 68 M50 134 L40 144" {...L} stroke="#b9472a" strokeWidth="4" />
        <circle cx="78" cy="48" r="6" fill="#b9472a" /><circle cx="78" cy="164" r="6" fill="#b9472a" /><circle cx="20" cy="106" r="6" fill="#b9472a" /><circle cx="136" cy="106" r="6" fill="#b9472a" />
        <circle cx="37" cy="64" r="5" fill="#b9472a" /><circle cx="119" cy="148" r="5" fill="#b9472a" /><circle cx="119" cy="64" r="5" fill="#b9472a" /><circle cx="37" cy="148" r="5" fill="#b9472a" />
        <circle cx="64" cy="94" r="6" fill="#fff" opacity="0.25" />
      </g>
      </P>
      <P i={1}>
      <g transform="rotate(-24 188 54)"><rect x="160" y="40" width="58" height="26" rx="13" fill="#6fbf73" {...O()} /><path d="M218 53 C230 46 236 62 244 54" {...L} stroke="#4a8f4f" strokeWidth="3" /></g>
      <g transform="rotate(30 186 170)"><rect x="158" y="158" width="56" height="24" rx="12" fill="#7cc67f" {...O()} /><path d="M158 170 C148 164 142 178 134 170" {...L} stroke="#4a8f4f" strokeWidth="3" /></g>
      </P>
      <P i={2}>
      <circle className="of-pulse" cx="190" cy="112" r="20" fill="#dfe8f6" {...O()} /><circle className="of-pulse" cx="190" cy="112" r="9" fill="#7a5bc0" />
      </P>
    </g>
  ),
  stoffwechsel: (
    <g>
      <defs><G id="pn" a="#f6d68a" b="#e2a23c" /></defs>
      <P i={2}>
      <path d="M36 70 C20 80 22 140 44 160 C60 172 84 164 88 148" {...L} stroke="#ee9a8c" strokeWidth="16" />
      <path d="M36 70 C20 80 22 140 44 160 C60 172 84 164 88 148" {...L} stroke="#f7c0b6" strokeWidth="8" />
      </P>
      <P i={0}>
      <path d="M44 112 C70 90 112 88 150 102 C176 110 194 100 214 110 C218 128 190 138 156 130 C116 122 76 140 48 134Z" fill="url(#pn)" {...O()} />
      </P>
      <P i={1}>
      <path d="M56 120 C100 108 150 116 206 118" {...L} stroke="#c88a2c" strokeWidth="2.5" />
      </P>
      <P i={0}>
      <g fill="#c88a2c" opacity="0.5"><circle cx="86" cy="112" r="3" /><circle cx="122" cy="108" r="3" /><circle cx="160" cy="114" r="3" /><circle cx="192" cy="112" r="3" /></g>
      </P>
      <P i={3}>
      <path className="of-drop" d="M150 24 C150 24 134 46 134 56 C134 66 142 72 150 72 C158 72 166 66 166 56 C166 46 150 24 150 24Z" fill="#4aa3d9" {...O()} />
      <path className="of-drop of-d2" d="M196 20 C196 20 186 34 186 42 C186 48 190 52 196 52 C202 52 206 48 206 42 C206 34 196 20 196 20Z" fill="#4aa3d9" {...O()} />
      </P>
    </g>
  ),
  schmerz: (
    <g>
      <defs><G id="nr" a="#f6c85a" b="#e08f2f" /></defs>
      <P i={1}>
      <path d="M44 50 L28 30 M52 44 L50 22 M60 52 L74 30 M36 66 L16 62 M38 82 L20 96" {...L} stroke="#e8a63a" strokeWidth="4" />
      </P>
      <P i={0}>
      <ellipse cx="52" cy="66" rx="26" ry="24" fill="url(#nr)" {...O()} />
      <circle cx="52" cy="66" r="9" fill="#a85a1c" opacity="0.7" />
      </P>
      <P i={2}>
      <path d="M76 70 H208" {...L} stroke="#f0d9a0" strokeWidth="10" />
      </P>
      <P i={3}>
      <g fill="#fff3c4" {...O()}><rect x="92" y="62" width="26" height="16" rx="8" /><rect x="126" y="62" width="26" height="16" rx="8" /><rect x="160" y="62" width="26" height="16" rx="8" /></g>
      </P>
      <P i={1}>
      <path d="M208 70 L226 56 M208 70 L228 72 M208 70 L224 88" {...L} stroke="#e8a63a" strokeWidth="4" />
      </P>
      <P i={4}>
      <circle className="of-flow" cx="76" cy="70" r="5" fill="#ff5a3c" /><circle className="of-flow of-d2" cx="76" cy="70" r="5" fill="#ff5a3c" />
      <path className="of-pulse" d="M130 112 L108 160 H128 L120 204 L156 148 H134 L146 112Z" fill="#ffd23c" {...O()} />
      </P>
    </g>
  ),
  notfall: (
    <g>
      <defs><G id="ne" a="#ee5560" b="#9b1b2c" /></defs>
      <g className="of-beat" style={{ transformOrigin: "120px 92px" }}>
        <P i={0}>
        <path d="M120 150 C56 108 56 46 96 46 C110 46 120 56 120 68 C120 56 130 46 144 46 C184 46 184 108 120 150Z" fill="url(#ne)" {...O()} />
        </P>
        <P i={1}>
        <rect x="112" y="76" width="16" height="48" rx="3" fill="#fff" /><rect x="96" y="92" width="48" height="16" rx="3" fill="#fff" />
        </P>
      </g>
      <P i={2}>
      <path d="M10 184 H70 L82 164 L96 204 L110 174 L118 184 H230" {...L} className="of-draw" stroke="#e8545f" strokeWidth="3" />
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
