"use client";

import type { ReactNode } from "react";
import type { Place, RoleKey, ScenePerson } from "@/data/caseScenes";

/** Gemalte Szene zum Fall: Ort im Hintergrund, Beteiligte als Figuren (Alter, Rolle, Kleidung). Rein dekorativ (SVG). */

const SKIN = ["#f2cdae", "#e0a97f", "#c98a5e", "#f6d9bd", "#a86f48"];
const HAIR_YOUNG = ["#3b2a20", "#6b4528", "#d9b25f", "#1f1b1a", "#8a3b22"];
const CLOTH: Record<RoleKey, string[]> = {
  patient: ["#9ec5e8"],
  kind: ["#f6b94a", "#f28ab2", "#7cc7a0"],
  pflege: ["#14b8a6"],
  azubi: ["#38bdf8"],
  angehoerig: ["#c084fc", "#fb923c", "#60a5fa", "#f472b6"],
  team: ["#818cf8", "#34d399", "#f59e0b"],
  arzt: ["#f8fafc"],
};

function Person({ x, p, i, mode, ground = 150 }: { x: number; p: ScenePerson; i: number; mode: "stand" | "sit"; ground?: number }) {
  const age = p.age ?? 35;
  const s = age < 8 ? 0.55 : age < 13 ? 0.7 : age < 18 ? 0.88 : 1;
  const skin = SKIN[(i * 2 + (p.name.length % 3)) % SKIN.length];
  const hair = age >= 65 ? "#d8dde3" : HAIR_YOUNG[(i + p.name.length) % HAIR_YOUNG.length];
  const cloth = CLOTH[p.role][(i + p.name.length) % CLOTH[p.role].length];
  const coat = p.role === "arzt";
  const legH = mode === "sit" ? 14 * s : 26 * s;
  const torsoH = 28 * s;
  const headR = 8.5 * s;
  const yFeet = ground;
  const yHip = yFeet - legH;
  const yShoulder = yHip - torsoH;
  const yHead = yShoulder - headR - 1;
  const w = 17 * s;
  return (
    <g className="art-bob" style={{ animationDelay: `${i * 0.45}s` }}>
      {mode === "stand" ? (
        <>
          <rect x={x - w * 0.55} y={yHip} width={w * 0.45} height={legH} rx={2} fill="#334155" />
          <rect x={x + w * 0.1} y={yHip} width={w * 0.45} height={legH} rx={2} fill="#334155" />
        </>
      ) : (
        <>
          <rect x={x - w * 0.5} y={yHip - 2} width={w} height={8 * s} rx={3} fill="#334155" />
          <rect x={x + w * 0.2} y={yHip + 2} width={w * 0.9} height={6 * s} rx={3} fill="#334155" />
        </>
      )}
      <rect x={x - w} y={yShoulder} width={w * 2} height={torsoH} rx={7 * s} fill={cloth} stroke="#00000022" />
      {coat && <path d={`M${x - 3} ${yShoulder} L${x} ${yShoulder + torsoH} L${x + 3} ${yShoulder}Z`} fill="#cbd5e1" />}
      {p.role === "pflege" && <rect x={x - w * 0.55} y={yShoulder + 7 * s} width={w * 0.6} height={7 * s} rx={1.5} fill="#0f766e" opacity={0.55} />}
      <rect x={x - w - 3 * s} y={yShoulder + 3 * s} width={5 * s} height={torsoH * 0.8} rx={2.5 * s} fill={cloth} stroke="#00000022" />
      <rect x={x + w - 2 * s} y={yShoulder + 3 * s} width={5 * s} height={torsoH * 0.8} rx={2.5 * s} fill={cloth} stroke="#00000022" />
      <rect x={x - 3 * s} y={yShoulder - 3 * s} width={6 * s} height={5 * s} fill={skin} />
      <circle cx={x} cy={yHead} r={headR} fill={skin} stroke="#00000022" />
      <path d={`M${x - headR} ${yHead} C${x - headR} ${yHead - headR * 1.5} ${x + headR} ${yHead - headR * 1.5} ${x + headR} ${yHead} C${x + headR * 0.4} ${yHead - headR * 0.7} ${x - headR * 0.4} ${yHead - headR * 0.7} ${x - headR} ${yHead}Z`} fill={hair} />
      {p.role === "pflege" && <path d={`M${x - headR} ${yHead - headR * 0.6} H${x + headR}`} stroke="#0f766e" strokeWidth={2 * s} />}
      <circle cx={x - headR * 0.35} cy={yHead + headR * 0.1} r={0.9 * s} fill="#1f2937" />
      <circle cx={x + headR * 0.35} cy={yHead + headR * 0.1} r={0.9 * s} fill="#1f2937" />
      <path d={`M${x - headR * 0.3} ${yHead + headR * 0.5} Q${x} ${yHead + headR * 0.8} ${x + headR * 0.3} ${yHead + headR * 0.5}`} stroke="#7c2d12" strokeWidth={0.9} fill="none" strokeLinecap="round" />
    </g>
  );
}

function PatientInBed({ x, p, i }: { x: number; p: ScenePerson; i: number }) {
  const age = p.age ?? 60;
  const skin = SKIN[(i * 2 + (p.name.length % 3)) % SKIN.length];
  const hair = age >= 65 ? "#d8dde3" : HAIR_YOUNG[(i + p.name.length) % HAIR_YOUNG.length];
  const small = age < 13;
  return (
    <g className="art-bob" style={{ animationDelay: "0.2s" }}>
      <rect x={x - 46} y={112} width={104} height={8} rx={3} fill="#94a3b8" />
      <rect x={x - 50} y={92} width={6} height={50} rx={3} fill="#64748b" />
      <rect x={x + 56} y={102} width={6} height={40} rx={3} fill="#64748b" />
      <rect x={x - 46} y={104} width={102} height={12} rx={5} fill="#e2e8f0" />
      <ellipse cx={x - 28} cy={101} rx={15} ry={7} fill="#fff" stroke="#00000022" />
      <circle cx={x - 28} cy={97} r={small ? 7 : 9} fill={skin} stroke="#00000022" />
      <path d={`M${x - 37} ${96} C${x - 36} ${86} ${x - 20} ${86} ${x - 19} ${96} C${x - 24} ${92} ${x - 32} ${92} ${x - 37} ${96}Z`} fill={hair} />
      <circle cx={x - 31} cy={98} r={0.9} fill="#1f2937" />
      <circle cx={x - 25} cy={98} r={0.9} fill="#1f2937" />
      <path d={`M${x - 18} 101 H${x + 54} V116 H${x - 18}Z`} fill="#7dd3fc" stroke="#00000022" />
      <path d={`M${x - 18} 101 q18 -5 36 0 t36 0`} fill="none" stroke="#fff" strokeOpacity={0.6} />
    </g>
  );
}

function Backdrop({ place }: { place: Place }): ReactNode {
  switch (place) {
    case "klinik":
      return (
        <>
          <rect width="360" height="180" fill="#e6f4f1" />
          <rect y="140" width="360" height="40" fill="#cfe3de" />
          <rect x="250" y="26" width="76" height="62" rx="4" fill="#bfe3f5" stroke="#94a3b8" strokeWidth="3" />
          <path d="M288 26 V88 M250 57 H326" stroke="#94a3b8" strokeWidth="2" />
          <rect x="20" y="30" width="52" height="34" rx="4" fill="#0f172a" />
          <path d="M26 50 H36 L40 40 L46 58 L50 48 H66" fill="none" stroke="#34d399" strokeWidth="2" />
          <rect x="214" y="70" width="3" height="70" fill="#94a3b8" /><rect x="205" y="66" width="22" height="3" fill="#94a3b8" />
          <path d="M215 69 v10" stroke="#94a3b8" /><rect x="209" y="78" width="12" height="18" rx="4" fill="#fff" stroke="#7dd3fc" />
          <path d="M215 96 C215 120 160 110 160 112" stroke="#7dd3fc" fill="none" />
        </>
      );
    case "notaufnahme":
      return (
        <>
          <rect width="360" height="180" fill="#fdecec" />
          <rect y="140" width="360" height="40" fill="#e9cfcf" />
          <rect x="140" y="12" width="80" height="12" rx="6" fill="#ef4444" />
          <rect x="176" y="8" width="8" height="20" fill="#fff" /><rect x="170" y="14" width="20" height="8" fill="#fff" />
          <rect x="268" y="40" width="64" height="100" rx="3" fill="#fff" stroke="#94a3b8" strokeWidth="3" />
          <path d="M300 40 V140" stroke="#94a3b8" strokeWidth="2" /><rect x="278" y="76" width="12" height="16" fill="#fecaca" /><rect x="310" y="76" width="12" height="16" fill="#fecaca" />
          <circle cx="40" cy="38" r="7" fill="#f97316" className="art-blink" /><path d="M24 54 h32" stroke="#f97316" strokeWidth="3" />
        </>
      );
    case "heim":
      return (
        <>
          <rect width="360" height="180" fill="#f1eafe" />
          <rect y="140" width="360" height="40" fill="#d7c9ee" />
          <rect x="230" y="30" width="80" height="64" rx="4" fill="#fde68a" stroke="#a78bfa" strokeWidth="3" />
          <path d="M270 30 V94 M230 62 H310" stroke="#a78bfa" strokeWidth="2" />
          <path d="M226 26 H254 V100 H226Z M286 26 H314 V100 H286Z" fill="#c4b5fd" opacity="0.7" />
          <rect x="30" y="34" width="46" height="36" rx="3" fill="#fff" stroke="#a78bfa" strokeWidth="3" /><circle cx="53" cy="52" r="9" fill="#fbcfe8" />
          <rect x="190" y="104" width="4" height="36" fill="#64748b" /><path d="M180 104 H204 L198 88 H186Z" fill="#fbbf24" />
          <ellipse cx="120" cy="148" rx="70" ry="9" fill="#c4b5fd" opacity="0.6" />
        </>
      );
    case "ambulant":
      return (
        <>
          <rect width="360" height="180" fill="#e5f3fc" />
          <rect y="140" width="360" height="40" fill="#c5dcee" />
          <rect x="262" y="34" width="60" height="106" rx="3" fill="#fff" stroke="#7aa6c7" strokeWidth="3" /><circle cx="312" cy="92" r="3" fill="#7aa6c7" />
          <rect x="30" y="100" width="90" height="40" rx="8" fill="#93c5fd" /><rect x="30" y="84" width="90" height="22" rx="8" fill="#7eb6fa" />
          <rect x="120" y="116" width="26" height="24" rx="4" fill="#0f766e" /><rect x="127" y="110" width="12" height="7" rx="2" fill="none" stroke="#0f766e" strokeWidth="2" />
          <rect x="196" y="118" width="12" height="22" rx="2" fill="#a16207" /><path d="M202 118 c-14 -10 -6 -26 0 -22 c6 -4 14 12 0 22Z" fill="#4ade80" />
        </>
      );
    case "wg":
      return (
        <>
          <rect width="360" height="180" fill="#fde7f3" />
          <rect y="140" width="360" height="40" fill="#ecc7dc" />
          <rect x="30" y="30" width="80" height="60" rx="4" fill="#fff" stroke="#f472b6" strokeWidth="3" /><path d="M42 50 H98 M42 64 H98 M42 78 H80" stroke="#f9a8d4" strokeWidth="4" />
          <rect x="230" y="40" width="70" height="54" rx="4" fill="#bae6fd" stroke="#f472b6" strokeWidth="3" />
          <rect x="130" y="108" width="100" height="10" rx="3" fill="#b45309" /><rect x="140" y="118" width="6" height="22" fill="#b45309" /><rect x="214" y="118" width="6" height="22" fill="#b45309" />
          <circle cx="160" cy="102" r="6" fill="#fde047" /><circle cx="190" cy="102" r="6" fill="#fb7185" />
        </>
      );
    case "festival":
      return (
        <>
          <rect width="360" height="180" fill="#fff1cf" />
          <rect y="140" width="360" height="40" fill="#bfe0a0" />
          <path d="M0 30 Q90 8 180 30 T360 30" fill="none" stroke="#a16207" strokeWidth="2" />
          {[18, 58, 98, 140, 180, 222, 262, 304, 344].map((cx, k) => (
            <circle key={cx} cx={cx} cy={30 + (k % 2 ? 8 : 0) + (cx > 120 && cx < 240 ? -8 : 0)} r="5" fill={["#f43f5e", "#facc15", "#22d3ee", "#a78bfa"][k % 4]} className="art-blink" style={{ animationDelay: `${k * 0.2}s` }} />
          ))}
          <path d="M250 140 V70 L300 40 L350 70 V140Z" fill="#fb923c" stroke="#c2410c" strokeWidth="2" /><path d="M300 40 V140" stroke="#c2410c" strokeWidth="2" />
          <rect x="14" y="76" width="66" height="64" rx="4" fill="#475569" /><circle cx="47" cy="106" r="12" fill="#1e293b" /><circle cx="47" cy="106" r="5" fill="#94a3b8" />
        </>
      );
    default:
      return (
        <>
          <rect width="360" height="180" fill="#e8eaff" />
          <rect y="140" width="360" height="40" fill="#cdd0f0" />
          <rect x="30" y="26" width="110" height="64" rx="4" fill="#fff" stroke="#818cf8" strokeWidth="3" /><path d="M42 44 H126 M42 58 H110 M42 72 H96" stroke="#c7d2fe" strokeWidth="4" />
          <rect x="190" y="104" width="120" height="10" rx="3" fill="#6366f1" /><rect x="200" y="114" width="6" height="26" fill="#6366f1" /><rect x="294" y="114" width="6" height="26" fill="#6366f1" />
          <rect x="225" y="92" width="34" height="12" rx="2" fill="#94a3b8" />
        </>
      );
  }
}

export function SceneArt({ place, who }: { place: Place; who: ScenePerson[] }) {
  const lying = place === "klinik" || place === "notaufnahme";
  const focalIdx = who.findIndex((w) => w.role === "patient" || w.role === "kind");
  const focal = focalIdx >= 0 ? who[focalIdx] : null;
  const sitFocal = !lying && focal && (focal.age ?? 0) >= 60 && (place === "heim" || place === "ambulant");
  const others = who.map((w, i) => ({ w, i })).filter((o) => o.i !== focalIdx || (!lying && !sitFocal));
  const n = others.length;
  const startX = lying && focal ? 190 : 70;
  const gap = n > 1 ? Math.min(52, (330 - startX) / (n - 1)) : 0;
  return (
    <svg viewBox="0 0 360 180" className="block h-auto w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <Backdrop place={place} />
      {lying && focal && <PatientInBed x={92} p={focal} i={focalIdx} />}
      {sitFocal && focal && (
        <g>
          <rect x="52" y="102" width="52" height="38" rx="9" fill="#a78bfa" /><rect x="46" y="86" width="14" height="54" rx="7" fill="#8b5cf6" /><rect x="96" y="96" width="14" height="44" rx="7" fill="#8b5cf6" />
          <Person x={78} p={focal} i={focalIdx} mode="sit" ground={132} />
        </g>
      )}
      {others.map((o, k) => (
        <Person key={o.i} x={startX + k * gap + (sitFocal ? 60 : 0)} p={o.w} i={o.i} mode="stand" />
      ))}
    </svg>
  );
}
