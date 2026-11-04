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

export const FIG: Record<string, ReactNode> = {
  herz: (
    <g>
      <defs>
        <G id="hz1" a="#e8545f" b="#8e1b2c" />
        <G id="hz2" a="#f08a8f" b="#b8334a" />
        <G id="hz3" a="#e04a58" b="#a3202f" />
      </defs>
      <P i={6}>
      <path d="M74 62 V22 H92 V62Z" fill="#4f74c2" {...O()} />
      </P>
      <g className="of-beat" style={{ transformOrigin: "120px 130px" }}>
        <P i={0}>
        <path d="M118 70 C150 62 186 88 182 128 C178 164 154 188 134 204 C108 192 72 160 68 124 C65 92 88 74 118 70Z" fill="url(#hz1)" {...O()} />
        </P>
        <P i={1}>
        <path d="M70 118 C68 92 86 74 112 70 L118 74 C112 110 118 160 134 204 C110 192 74 162 70 118Z" fill="url(#hz2)" {...O()} />
        </P>
        <P i={2}>
        <path d="M64 86 C56 70 70 56 90 58 C102 60 110 70 106 84 C96 98 72 100 64 86Z" fill="url(#hz3)" {...O()} />
        </P>
        <P i={3}>
        <path d="M170 70 C186 72 194 86 186 100 C178 96 172 84 170 70Z" fill="#9c2233" {...O()} />
        </P>
        <P i={4}>
        <path d="M128 72 C122 42 140 22 164 26 C184 30 192 52 190 74 L178 74 C178 56 172 46 160 44 C148 44 142 56 144 74Z" fill="#e0303c" {...O()} />
        </P>
        <P i={5}>
        <path d="M106 76 C98 54 110 38 124 40 C134 42 136 56 130 74Z" fill="#6b83cc" {...O()} />
        <path d="M124 42 C138 34 160 32 170 38" {...L} stroke="#6b83cc" strokeWidth="7" />
        </P>
        <D>
        <path d="M114 74 C108 112 116 162 134 204" {...L} stroke="#5a1020" strokeWidth="2" opacity="0.6" />
        </D>
        <P i={7}>
        <path d="M122 78 C119 112 125 152 134 192" {...L} stroke="#ffb54d" strokeWidth="2.6" />
        <path d="M100 84 C76 100 70 130 86 152" {...L} stroke="#ffb54d" strokeWidth="2.4" />
        <path d="M150 84 C166 110 164 150 142 186" {...L} stroke="#5b7fd1" strokeWidth="2" opacity="0.8" />
        </P>
        <D>
        <ellipse cx="148" cy="108" rx="14" ry="26" fill="#fff" opacity="0.14" transform="rotate(14 148 108)" />
        </D>
      </g>
      <path d="M10 212 H62 L70 200 L80 218 L90 204 L96 212 H230" {...L} className="of-draw" stroke="#e8545f" strokeWidth="2" />
    </g>
  ),
  atmung: (
    <g>
      <defs>
        <G id="lg1" a="#f6b3b8" b="#d9707e" />
        <G id="lg2" a="#f9c0c4" b="#dd7a88" />
      </defs>
      <P i={0}>
      <rect x="111" y="12" width="18" height="70" rx="6" fill="#bcd3e6" {...O()} />
      <path d="M111 24 H129 M111 36 H129 M111 48 H129 M111 60 H129 M111 72 H129" {...L} stroke="#6f8fb0" strokeWidth="2" />
      </P>
      <g className="of-breathe" style={{ transformOrigin: "120px 130px" }}>
        <P i={2}>
        <path d="M108 66 C80 62 48 84 42 128 C38 168 50 196 76 196 C100 196 110 180 110 152Z" fill="url(#lg1)" {...O()} />
        </P>
        <P i={3}>
        <path d="M132 66 C160 62 192 84 198 128 C202 168 190 196 164 196 C142 196 130 184 134 166 C120 154 126 122 132 102Z" fill="url(#lg2)" {...O()} />
        </P>
        <P i={2}>
        <path d="M46 112 C70 118 92 112 108 100 M44 150 C68 150 92 156 110 164" {...L} stroke="#b85565" strokeWidth="1.6" opacity="0.7" />
        </P>
        <P i={3}>
        <path d="M198 128 C176 130 150 124 134 116" {...L} stroke="#b85565" strokeWidth="1.6" opacity="0.7" />
        </P>
        <P i={1}>
        <path d="M120 82 L96 112 L80 128 M96 112 L96 150 M120 82 L144 112 L160 130 M144 112 L146 150 M80 128 L62 140 M96 150 L84 170 M146 150 L158 172" {...L} stroke="#4b7fb0" strokeWidth="3" />
        </P>
        <P i={4}>
        <circle cx="62" cy="142" r="4" fill="#4b7fb0" opacity="0.5" /><circle cx="84" cy="172" r="4" fill="#4b7fb0" opacity="0.5" /><circle cx="158" cy="174" r="4" fill="#4b7fb0" opacity="0.5" />
        </P>
      </g>
      <P i={5}>
      <path d="M30 204 C80 190 160 190 210 204" {...L} stroke="#9aa5b1" strokeWidth="3" opacity="0.7" />
      </P>
    </g>
  ),
  nerven: (
    <g>
      <defs>
        <clipPath id="br-c"><path d="M40 112 C26 70 68 28 120 30 C172 32 208 66 202 108 C200 130 182 140 160 140 C140 152 100 152 88 140 C60 140 44 130 40 112Z" /></clipPath>
        <G id="cb1" a="#d9a577" b="#a8764c" />
      </defs>
      <D><g clipPath="url(#br-c)"><rect x="20" y="20" width="200" height="140" fill="#f0b0aa" /></g></D>
      <P i={0}><g clipPath="url(#br-c)"><path d="M20 20 H112 L104 150 H20Z" fill="#f2a7a0" /></g></P>
      <P i={1}><g clipPath="url(#br-c)"><path d="M112 20 H196 L170 90 L116 78Z" fill="#f7c97e" /></g></P>
      <P i={2}><g clipPath="url(#br-c)"><path d="M170 90 L196 20 H220 V160 H150Z" fill="#9dc4e8" /></g></P>
      <P i={3}><g clipPath="url(#br-c)"><path d="M60 118 C84 100 110 104 140 116 L170 140 L60 150Z" fill="#a9d29a" /></g></P>
      <D><g clipPath="url(#br-c)"><path d="M50 70 C68 56 82 80 98 66 C112 54 124 78 140 64 M62 96 C78 82 96 104 112 90 C128 78 144 100 160 86 C172 76 184 92 194 84 M140 40 C156 50 172 36 186 48 M90 40 C100 52 114 42 124 52" {...L} stroke="#8a4b4f" strokeWidth="2.2" opacity="0.65" /></g></D>
      <D>
      <path d="M40 112 C26 70 68 28 120 30 C172 32 208 66 202 108 C200 130 182 140 160 140 C140 152 100 152 88 140 C60 140 44 130 40 112Z" fill="none" {...O(2)} />
      </D>
      <P i={4}>
      <path d="M150 140 C168 132 198 140 196 158 C192 176 160 180 146 164Z" fill="url(#cb1)" {...O()} />
      <path d="M154 148 C168 146 184 150 190 156 M152 158 C166 158 180 162 186 166" {...L} stroke="#7a4f2f" strokeWidth="1.6" />
      </P>
      <P i={5}>
      <path d="M112 146 L130 146 L134 196 L116 196Z" fill="#e6bfa6" {...O()} />
      </P>
      <P i={6}>
      <path d="M118 196 V216 H130 V196" fill="#f0d8c8" {...O()} />
      </P>
      <D>
      <circle className="of-pulse" cx="80" cy="70" r="5" fill="#ffd54a" />
      <circle className="of-pulse of-d2" cx="140" cy="62" r="5" fill="#ffd54a" />
      <circle className="of-pulse of-d3" cx="168" cy="100" r="5" fill="#ffd54a" />
      </D>
    </g>
  ),
  verdauung: (
    <g>
      <defs>
        <G id="lv1" a="#b86a46" b="#7c3a24" />
        <G id="st1" a="#f4a7a0" b="#d9707a" />
      </defs>
      <P i={0}>
      <path d="M148 8 V50 C148 58 146 62 142 66" {...L} stroke="#d97b85" strokeWidth="9" />
      </P>
      <P i={6}>
      <path d="M52 192 V128 H190 V192" {...L} stroke="#e48d63" strokeWidth="15" />
      <path d="M52 192 V128 H190 V192" {...L} stroke="#f0b08c" strokeWidth="9" />
      </P>
      <P i={5}>
      <path d="M72 140 C90 132 96 150 112 144 C128 138 132 156 148 150 C164 144 168 160 172 168 C150 176 148 160 130 168 C112 176 108 160 92 168 C80 174 72 170 70 160 M80 182 C100 172 110 190 126 182 C142 174 150 190 164 184" {...L} stroke="#f2937f" strokeWidth="9" />
      <path d="M72 140 C90 132 96 150 112 144 C128 138 132 156 148 150 C164 144 168 160 172 168 C150 176 148 160 130 168 C112 176 108 160 92 168 C80 174 72 170 70 160 M80 182 C100 172 110 190 126 182 C142 174 150 190 164 184" {...L} stroke="#fbb9a8" strokeWidth="4" />
      </P>
      <P i={4}>
      <path d="M96 112 C120 100 150 104 176 112 C170 120 140 118 96 122Z" fill="#f2c94c" {...O()} />
      </P>
      <P i={1}>
      <path d="M142 62 C176 58 196 86 180 112 C170 128 148 126 140 114 C136 104 150 98 152 90 C150 78 138 76 142 62Z" fill="url(#st1)" {...O()} />
      </P>
      <P i={2}>
      <path d="M40 66 C68 44 122 46 150 64 C142 88 100 98 62 94 C42 88 34 76 40 66Z" fill="url(#lv1)" {...O()} />
      </P>
      <P i={3}>
      <path d="M90 90 C86 98 90 108 98 108 C104 106 104 96 100 90Z" fill="#4f9a5f" {...O()} />
      </P>
      <P i={2}>
      <ellipse cx="74" cy="64" rx="22" ry="7" fill="#fff" opacity="0.14" />
      </P>
      <D>
      <circle className="of-flow" cx="148" cy="30" r="4" fill="#ffd54a" />
      </D>
    </g>
  ),
  niere: (
    <g>
      <defs>
        <G id="kd1" a="#c24a58" b="#7d1f2e" />
        <G id="bl1" a="#f6dc7a" b="#d9b13d" />
      </defs>
      <P i={4}>
      <path d="M126 10 V132" {...L} stroke="#e0303c" strokeWidth="9" />
      </P>
      <P i={5}>
      <path d="M110 10 V132" {...L} stroke="#4f74c2" strokeWidth="9" />
      </P>
      <D>
      <path d="M110 70 C92 70 86 74 80 80 M126 70 C146 70 150 74 156 80" {...L} stroke="#9a6fc4" strokeWidth="5" />
      </D>
      <P i={0}><g>
        <path d="M156 38 C184 34 198 66 190 96 C184 122 160 124 152 106 C160 96 156 86 150 78 C146 62 146 40 156 38Z" fill="url(#kd1)" {...O()} />
        <path d="M156 52 C176 52 184 74 178 92 C170 78 160 72 152 74Z" fill="#e57b83" opacity="0.7" />
      </g></P>
      <P i={1}><g>
        <path d="M150 78 C142 84 144 96 152 104" {...L} stroke="#f6dc7a" strokeWidth="5" />
      </g></P>
      <P i={0} m><g transform="translate(236 0) scale(-1 1)">
        <path d="M156 38 C184 34 198 66 190 96 C184 122 160 124 152 106 C160 96 156 86 150 78 C146 62 146 40 156 38Z" fill="url(#kd1)" {...O()} />
        <path d="M156 52 C176 52 184 74 178 92 C170 78 160 72 152 74Z" fill="#e57b83" opacity="0.7" />
      </g></P>
      <P i={1} m><g transform="translate(236 0) scale(-1 1)">
        <path d="M150 78 C142 84 144 96 152 104" {...L} stroke="#f6dc7a" strokeWidth="5" />
      </g></P>
      <P i={2}>
      <path d="M92 100 C90 130 108 150 114 168 M144 100 C146 130 128 150 122 168" {...L} stroke="#f2cf5c" strokeWidth="4" />
      </P>
      <P i={3}>
      <path d="M96 172 C96 160 144 160 144 172 C146 200 98 204 96 172Z" fill="url(#bl1)" {...O()} />
      </P>
      <D>
      <circle className="of-drop" cx="92" cy="104" r="3.5" fill="#f6dc7a" />
      <circle className="of-drop of-d2" cx="144" cy="104" r="3.5" fill="#f6dc7a" />
      </D>
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
            <svg viewBox="-34 -22 308 264" className="mx-auto h-auto w-full max-w-md" role="img" aria-label={title} onClick={() => setSel(null)}>
              {FIG[k]}
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
