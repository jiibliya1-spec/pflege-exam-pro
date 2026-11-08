"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * Zwei SCHEMATISCHE Lernzeichnungen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D Alveolen und Pleura nicht als 3D-Fläche enthält:
 * Gasaustausch Alveole/Kapillare und Pleura mit Pneumothorax und Erguss.
 */
type Row = [string, string, string, string, string];
const LG = ["de", "ar", "en", "fr", "tr"];
const useRow = () => { const lang = useLang(); return (r: Row) => r[Math.max(0, LG.indexOf(lang))]; };
interface Info { de: string; la: string; ar: string; t: [string, string] }

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    try { setR(window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch { /* ignore */ }
  }, []);
  return r;
}

const GAS: Record<string, Info> = {
  bronchiole: { de: "Atemwegsende (Bronchiolus)", la: "Bronchiolus terminalis, Bronchiolus respiratorius", ar: "القصيبة", t: ["Die letzten Atemwege führen die Luft zu den Alveolen. Sie haben keinen Knorpel mehr, aber glatte Muskulatur; bei Asthma verengen sie sich.", "آخر المجاري الهوائية تقود الهواء إلى الحويصلات. لا غضروف فيها لكن فيها عضلات ملساء، وتضيق في الربو."] },
  alveolus: { de: "Lungenbläschen", la: "Alveolus pulmonis", ar: "الحويصلة الهوائية", t: ["Dünnwandiges Bläschen von etwa 0,2 mm Durchmesser. Etwa 300 bis 400 Millionen davon ergeben eine Austauschfläche von 70 bis 100 m². Die Innenseite ist mit Surfactant ausgekleidet.", "كيس رقيق الجدار قطره نحو 0.2 مم. نحو 300 إلى 400 مليون منها تعطي مساحة تبادل من 70 إلى 100 متر مربع. وتبطّن داخلها مادة السورفاكتانت."] },
  pneu1: { de: "Pneumozyt Typ I", la: "Pneumocytus typus I (Epitheliocytus respiratorius)", ar: "الخلية الرئوية من النوع الأول", t: ["Sehr flache Zellen, die den größten Teil der Alveolenwand bilden (etwa 95 % der Oberfläche). Durch sie diffundieren die Gase.", "خلايا مسطحة جداً تكوّن معظم جدار الحويصلة (نحو 95% من السطح) وتنتشر عبرها الغازات."] },
  pneu2: { de: "Pneumozyt Typ II", la: "Pneumocytus typus II (Epitheliocytus granularis)", ar: "الخلية الرئوية من النوع الثاني", t: ["Bildet das Surfactant, das die Oberflächenspannung senkt und den Kollaps der Alveolen verhindert. Bei Frühgeborenen fehlt es oft: Atemnotsyndrom (RDS). Die Zellen können auch Typ-I-Zellen ersetzen.", "تفرز السورفاكتانت الذي يخفض التوتر السطحي ويمنع انهيار الحويصلات. وغالباً ينقص عند الخدّج: متلازمة الضائقة التنفسية. ويمكنها أيضاً تعويض خلايا النوع الأول."] },
  surfactant: { de: "Surfactant", la: "Surfactans pulmonale", ar: "السورفاكتانت", t: ["Dünner Film aus Fetten und Eiweißen auf der Alveolenoberfläche. Er verringert die Oberflächenspannung, sodass die Bläschen beim Ausatmen offen bleiben.", "طبقة رقيقة من الدهون والبروتينات على سطح الحويصلة تقلل التوتر السطحي فتبقى الحويصلات مفتوحة عند الزفير."] },
  barrier: { de: "Blut-Luft-Schranke", la: "Barrier haematoaerica", ar: "الحاجز الدموي الهوائي", t: ["Alveolarepithel, gemeinsame Basalmembran und Kapillarendothel sind zusammen nur etwa 0,5 µm dick. Bei Lungenödem, Pneumonie oder Fibrose ist sie verdickt, der Gasaustausch wird gestört.", "ظهارة الحويصلة والغشاء القاعدي المشترك وبطانة الشعيرة معاً بسماكة نحو 0.5 ميكرومتر فقط. وعند الوذمة الرئوية أو الالتهاب أو التليف تزداد سماكتها ويضطرب التبادل."] },
  capillary: { de: "Lungenkapillare", la: "Vas capillare pulmonale", ar: "الشعيرة الرئوية", t: ["Dichtes Kapillarnetz um jede Alveole. Das Blut verweilt nur etwa 0,75 Sekunden; der Austausch ist in Ruhe bereits nach etwa einem Drittel dieser Zeit weitgehend abgeschlossen.", "شبكة شعيرات كثيفة حول كل حويصلة. يمكث الدم نحو 0.75 ثانية فقط، ويكتمل التبادل في الراحة بعد نحو ثلث هذه المدة."] },
  rbc: { de: "Rotes Blutkörperchen", la: "Erythrocytus", ar: "كرية الدم الحمراء", t: ["Das Hämoglobin der Erythrozyten bindet fast den gesamten Sauerstoff (etwa 98 %). Beim Aufnehmen von O2 wird das Blut hellrot. Kohlendioxid wird überwiegend als Bikarbonat im Plasma transportiert.", "يرتبط الهيموغلوبين في الكريات بمعظم الأكسجين (نحو 98%). وعند أخذ الأكسجين يصبح الدم أحمر فاتحاً. أما ثاني أكسيد الكربون فينقل غالباً كبيكربونات في البلازما."] },
  macro: { de: "Alveolarmakrophage (Staubzelle)", la: "Macrophagus alveolaris", ar: "البلعمية الحويصلية", t: ["Frisst Staub, Rauchpartikel und Erreger, die bis in die Alveolen gelangen. Bei Rauchern sind sie stark beladen.", "تلتهم الغبار وجسيمات الدخان والجراثيم التي تصل إلى الحويصلات، وتكون محمّلة بشدة عند المدخنين."] },
  o2: { de: "Sauerstoff (O2)", la: "Oxygenium", ar: "الأكسجين", t: ["Wandert entlang des Partialdruckgefälles von der Alveole (pO2 etwa 100 mmHg) ins Blut (zufließend etwa 40 mmHg) und bindet an Hämoglobin.", "ينتقل وفق فرق الضغط الجزئي من الحويصلة (pO2 نحو 100 ملم زئبق) إلى الدم (نحو 40 عند الوصول) ويرتبط بالهيموغلوبين."] },
  co2: { de: "Kohlendioxid (CO2)", la: "Dioxidum carbonei", ar: "ثاني أكسيد الكربون", t: ["Diffundiert aus dem Blut (pCO2 etwa 46 mmHg) in die Alveole (etwa 40 mmHg) und wird ausgeatmet. CO2 diffundiert etwa 20-mal besser als O2.", "ينتشر من الدم (pCO2 نحو 46 ملم زئبق) إلى الحويصلة (نحو 40) ويُزفر. ويمتاز بانتشار أفضل من الأكسجين بنحو 20 مرة."] },
};
const GAS_STEPS: { id: number; t: Row }[] = [
  { id: 1, t: ["1 Einatmung", "1 الشهيق", "1 Inhale", "1 Inspiration", "1 Soluk alma"] },
  { id: 2, t: ["2 Sauerstoff ins Blut", "2 الأكسجين إلى الدم", "2 Oxygen to blood", "2 O2 vers le sang", "2 Kana oksijen"] },
  { id: 3, t: ["3 CO2 zur Alveole", "3 CO2 إلى الحويصلة", "3 CO2 to alveolus", "3 CO2 vers l'alvéole", "3 CO2 alveole"] },
  { id: 0, t: ["Alles", "الكل", "All", "Tout", "Tümü"] },
];
const ARC = (r: number, a0: number, a1: number) => {
  const p = (a: number) => [200 + r * Math.cos((a * Math.PI) / 180), 180 + r * Math.sin((a * Math.PI) / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
};

export function GasExchangeSchema() {
  const T = useRow();
  const reduced = useReduced();
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState<string | null>("barrier");
  const [anim, setAnim] = useState(true);
  const run = anim && !reduced;
  const info = sel ? GAS[sel] : null;
  const show = (s: number) => step === 0 || step === s;
  const cap = ARC(165, -58, 58);
  const hot = (id: string) => ({ onClick: () => setSel(id), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": GAS[id].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(id); } } });
  const ring = (id: string) => (sel === id ? { stroke: "#ffd24a", strokeWidth: 3 } : {});
  const dots = [-32, -8, 16, 38];
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="gas-schema">
      <h2 className="text-lg font-bold">{T(["Gasaustausch: Alveole und Kapillare (Schema)", "تبادل الغازات: الحويصلة والشعيرة (رسم تخطيطي)", "Gas exchange: alveolus and capillary (schematic)", "Échanges gazeux : alvéole et capillaire (schéma)", "Gaz değişimi: alveol ve kılcal (şema)"])}</h2>
      <p className="text-sm text-muted">{T(["Schematische Lernzeichnung, nicht maßstabsgetreu. Sie ersetzt keinen Atlas; Alveolen sind im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي ولا يغني عن الأطلس؛ والحويصلات غير موجودة في النموذج ثلاثي الأبعاد.", "Schematic learning drawing, not to scale. It does not replace an atlas; alveoli are not part of the 3D model.", "Dessin schématique, pas à l'échelle. Les alvéoles ne sont pas dans le modèle 3D.", "Şematik çizim, ölçekli değil. Alveoller 3B modelde yok."])}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {GAS_STEPS.map((s) => (
          <button key={s.id} onClick={() => setStep(s.id)} aria-pressed={step === s.id} data-testid={`gas-step-${s.id}`} className={cn("min-h-9 rounded-lg border px-3 text-sm", step === s.id ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{T(s.t)}</button>
        ))}
        <button onClick={() => setAnim((a) => !a)} aria-pressed={!run} className="min-h-9 rounded-lg border border-line px-3 text-sm hover:bg-surface2">{run ? T(["Animation anhalten", "إيقاف الحركة", "Pause animation", "Pause", "Duraklat"]) : T(["Animation starten", "تشغيل الحركة", "Start animation", "Lancer", "Başlat"])}</button>
      </div>
      <svg viewBox="0 0 640 360" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={T(["Schema: Alveole mit umgebender Kapillare", "رسم: حويصلة تحيط بها شعيرة", "Schematic: alveolus with surrounding capillary", "Schéma : alvéole et capillaire", "Şema: alveol ve kılcal"])}>
        <defs>
          <linearGradient id="gx-blood" gradientUnits="userSpaceOnUse" x1="0" y1="45" x2="0" y2="315">
            <stop offset="0" stopColor="#6b1d3e" /><stop offset="1" stopColor="#e0473d" />
          </linearGradient>
          <radialGradient id="gx-air" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stopColor="#f7fbff" /><stop offset="1" stopColor="#dcecf7" /></radialGradient>
        </defs>
        {/* Bronchiolus */}
        <g {...hot("bronchiole")}>
          <rect x="0" y="162" width="68" height="36" fill="#cfdce8" stroke="#8aa0b4" strokeWidth="2" {...ring("bronchiole")} />
          <rect x="0" y="168" width="68" height="24" fill="url(#gx-air)" />
          <text x="6" y="152" fontSize="12" fill="currentColor">{T(["Bronchiolus", "قصيبة", "Bronchiole", "Bronchiole", "Bronşiyol"])}</text>
        </g>
        {/* Alveole (Lumen) */}
        <g {...hot("alveolus")}>
          <circle cx="200" cy="180" r="136" fill="url(#gx-air)" {...ring("alveolus")} />
        </g>
        {/* Wand: Pneumozyt I */}
        <g {...hot("pneu1")}>
          <circle cx="200" cy="180" r="140" fill="none" stroke="#e5a79c" strokeWidth="7" {...ring("pneu1")} />
        </g>
        {/* Blut-Luft-Schranke */}
        <g {...hot("barrier")}>
          <path d={ARC(146.5, -58, 58)} fill="none" stroke={sel === "barrier" ? "#ffb300" : "#f0d36a"} strokeWidth={sel === "barrier" ? 7 : 5} />
        </g>
        {/* Kapillare */}
        <g {...hot("capillary")}>
          <path d={cap} fill="none" stroke="url(#gx-blood)" strokeWidth="28" strokeLinecap="round" opacity="0.9" />
          <path d={cap} fill="none" stroke="#00000030" strokeWidth="30" strokeLinecap="round" opacity="0.25" {...ring("capillary")} />
        </g>
        {/* Pneumozyt II + Surfactant */}
        <g {...hot("pneu2")}>
          <ellipse cx="108" cy="104" rx="15" ry="10" transform="rotate(-38 108 104)" fill="#c98a86" stroke="#8b4c49" strokeWidth="2" {...ring("pneu2")} />
          <circle cx="102" cy="100" r="2" fill="#f6e6c8" /><circle cx="108" cy="107" r="2" fill="#f6e6c8" /><circle cx="114" cy="101" r="2" fill="#f6e6c8" />
        </g>
        <g {...hot("surfactant")}>
          <circle cx="200" cy="180" r="130" fill="none" stroke="#fff3c4" strokeWidth="3" strokeDasharray="4 4" {...ring("surfactant")} />
        </g>
        {/* Makrophage */}
        <g {...hot("macro")}>
          <circle cx="132" cy="262" r="14" fill="#b9a1c4" stroke="#7d6390" strokeWidth="2" {...ring("macro")} />
          <circle cx="127" cy="259" r="3" fill="#6b5a77" /><circle cx="137" cy="266" r="2.5" fill="#6b5a77" />
        </g>

        {/* Erythrozyten auf der Kapillare */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} {...hot("rbc")}>
            <ellipse rx="9" ry="6" fill="#6b1d3e" stroke="#fff" strokeWidth="1" {...ring("rbc")}>
              {run ? (
                <>
                  <animateMotion dur="7s" begin={`${-i * 1.4}s`} repeatCount="indefinite" path={cap} rotate="auto" />
                  <animate attributeName="fill" values="#6b1d3e;#6b1d3e;#e0473d" keyTimes="0;0.18;0.6" dur="7s" begin={`${-i * 1.4}s`} repeatCount="indefinite" />
                </>
              ) : null}
            </ellipse>
            {!run && <ellipse cx={200 + 165 * Math.cos(((-48 + i * 24) * Math.PI) / 180)} cy={180 + 165 * Math.sin(((-48 + i * 24) * Math.PI) / 180)} rx="9" ry="6" fill={i < 2 ? "#6b1d3e" : "#e0473d"} stroke="#fff" strokeWidth="1" />}
          </g>
        ))}

        {/* Luft strömt ein (Schritt 1) */}
        {show(1) && [0, 1, 2].map((i) => (
          <circle key={`a${i}`} r="5" fill="#9ec9e8" opacity="0.95" cx={run ? undefined : 20 + i * 30} cy={run ? undefined : 180}>
            {run && <animateMotion dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" path="M 6 180 L 120 180" />}
          </circle>
        ))}
        {/* O2 in das Blut (Schritt 2) */}
        {show(2) && dots.map((a, i) => {
          const r = (d: number) => [200 + d * Math.cos((a * Math.PI) / 180), 180 + d * Math.sin((a * Math.PI) / 180)];
          const [x0, y0] = r(90), [x1, y1] = r(165);
          return (
            <g key={`o${i}`} {...hot("o2")}>
              <circle r="6" fill="#f2b84b" stroke="#a06b12" strokeWidth="1" cx={run ? undefined : (x0 + x1) / 2} cy={run ? undefined : (y0 + y1) / 2} {...ring("o2")}>
                {run && <animateMotion dur="3.2s" begin={`${-i * 0.8}s`} repeatCount="indefinite" path={`M ${x0.toFixed(1)} ${y0.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)}`} />}
              </circle>
              <text fontSize="8" textAnchor="middle" fill="#5a3a00" x={(x0 + x1) / 2} y={(y0 + y1) / 2 - 9}>{!run ? "O₂" : ""}</text>
            </g>
          );
        })}
        {/* CO2 aus dem Blut (Schritt 3) */}
        {show(3) && dots.map((a, i) => {
          const aa = a + 12;
          const r = (d: number) => [200 + d * Math.cos((aa * Math.PI) / 180), 180 + d * Math.sin((aa * Math.PI) / 180)];
          const [x0, y0] = r(165), [x1, y1] = r(70);
          return (
            <g key={`c${i}`} {...hot("co2")}>
              <circle r="6" fill="#8a97a3" stroke="#4b5864" strokeWidth="1" cx={run ? undefined : (x0 + x1) / 2} cy={run ? undefined : (y0 + y1) / 2} {...ring("co2")}>
                {run && <animateMotion dur="3.6s" begin={`${-i * 0.9}s`} repeatCount="indefinite" path={`M ${x0.toFixed(1)} ${y0.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)}`} />}
              </circle>
              <text fontSize="8" textAnchor="middle" fill="#2c3640" x={(x0 + x1) / 2} y={(y0 + y1) / 2 - 9}>{!run ? "CO₂" : ""}</text>
            </g>
          );
        })}
        {step === 3 && [0, 1].map((i) => (
          <circle key={`e${i}`} r="5" fill="#b5b9bd" cx={run ? undefined : 40 + i * 25} cy={run ? undefined : 180}>
            {run && <animateMotion dur="4s" begin={`${-i * 1.5}s`} repeatCount="indefinite" path="M 120 180 L 6 180" />}
          </circle>
        ))}

        {/* Beschriftungen */}
        <text x="200" y="185" textAnchor="middle" fontSize="13" fill="#52708a">{T(["Alveole (Luft)", "حويصلة (هواء)", "Alveolus (air)", "Alvéole (air)", "Alveol (hava)"])}</text>
        <text x="400" y="190" fontSize="12" fill="currentColor">{T(["Kapillare", "شعيرة", "Capillary", "Capillaire", "Kılcal"])}</text>
        <text x="366" y="40" fontSize="11" fill="currentColor">{T(["sauerstoffarm", "قليل الأكسجين", "low O₂", "pauvre en O₂", "O₂ düşük"])}</text>
        <text x="366" y="330" fontSize="11" fill="currentColor">{T(["sauerstoffreich", "غني بالأكسجين", "rich in O₂", "riche en O₂", "O₂ zengin"])}</text>
        <text x="352" y="72" fontSize="10" fill="currentColor" opacity="0.8">{T(["Blut-Luft-Schranke", "الحاجز الدموي الهوائي", "Blood-air barrier", "Barrière air-sang", "Kan-hava bariyeri"])}</text>
      </svg>
      <p className="mt-1 text-xs text-muted">{T(["Tippe auf Teile der Zeichnung (Alveole, Wand, Schranke, Kapillare, Erythrozyt, Gasteilchen).", "المس أجزاء الرسم (الحويصلة والجدار والحاجز والشعيرة والكريات وجسيمات الغاز).", "Tap parts of the drawing (alveolus, wall, barrier, capillary, red cell, gas particles).", "Touchez les éléments du dessin.", "Çizimin parçalarına dokunun."])}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Object.keys(GAS).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-2.5 text-xs", sel === k ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{GAS[k].de}</button>
        ))}
      </div>
      {info && (
        <div className="mt-3 rounded-lg bg-surface2 p-3" data-testid="gas-info">
          <h3 className="font-semibold">{info.de}</h3>
          <p className="text-sm italic text-muted">{info.la}</p>
          <p dir="rtl" lang="ar" className="text-sm font-semibold text-teal">{info.ar}</p>
          <p className="mt-1 text-sm">{info.t[0]}</p>
          <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.t[1]}</p>
        </div>
      )}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <caption className="mb-1 text-left text-xs font-semibold text-muted">{T(["Richtwerte der Partialdrücke (mmHg)", "قيم تقريبية للضغوط الجزئية (ملم زئبق)", "Typical partial pressures (mmHg)", "Pressions partielles indicatives (mmHg)", "Tipik kısmi basınçlar (mmHg)"])}</caption>
          <thead><tr className="border-b border-line text-left text-xs text-muted"><th className="py-1">&nbsp;</th><th>pO₂</th><th>pCO₂</th></tr></thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-1">{T(["Einatemluft", "هواء الشهيق", "Inspired air", "Air inspiré", "Solunan hava"])}</td><td>≈ 160</td><td>≈ 0,3</td></tr>
            <tr className="border-b border-line"><td className="py-1">{T(["Alveolarluft", "هواء الحويصلة", "Alveolar air", "Air alvéolaire", "Alveol havası"])}</td><td>≈ 100</td><td>≈ 40</td></tr>
            <tr className="border-b border-line"><td className="py-1">{T(["Blut vor der Lunge (venös)", "الدم قبل الرئة (وريدي)", "Blood before the lung (venous)", "Sang avant le poumon (veineux)", "Akciğer öncesi kan (venöz)"])}</td><td>≈ 40</td><td>≈ 46</td></tr>
            <tr><td className="py-1">{T(["Blut nach der Lunge (arteriell)", "الدم بعد الرئة (شرياني)", "Blood after the lung (arterial)", "Sang après le poumon (artériel)", "Akciğer sonrası kan (arteriyel)"])}</td><td>≈ 95–100</td><td>≈ 40</td></tr>
          </tbody>
        </table>
        <p className="mt-1 text-xs text-muted">{T(["Gase wandern vom höheren zum niedrigeren Partialdruck (Diffusion). Individuelle Werte weichen ab.", "تنتقل الغازات من الضغط الجزئي الأعلى إلى الأدنى (الانتشار). والقيم الفردية تختلف.", "Gases move from higher to lower partial pressure (diffusion). Individual values vary.", "Les gaz diffusent du côté de plus forte pression vers la plus faible.", "Gazlar yüksek kısmi basınçtan düşüğe geçer (difüzyon)."])}</p>
      </div>
    </div>
  );
}

/* ---------------- Pleura ---------------- */
const PL: Record<string, Info> = {
  wall: { de: "Brustwand mit Rippen", la: "Paries thoracis (Costae)", ar: "جدار الصدر مع الأضلاع", t: ["Rippen, Zwischenrippenmuskeln und Haut bilden den knöchernen Brustkorb. Die Rippen schützen Lunge und Herz; Gefäße und Nerven verlaufen am Unterrand jeder Rippe.", "الأضلاع والعضلات الوربية والجلد تكوّن القفص الصدري الذي يحمي الرئة والقلب. وتسير الأوعية والأعصاب عند الحافة السفلية لكل ضلع."] },
  parietal: { de: "Rippenfell", la: "Pleura parietalis", ar: "الجنبة الجدارية", t: ["Das äußere Blatt kleidet Brustwand, Zwerchfell und Mediastinum aus. Es ist schmerzempfindlich (Nervenversorgung durch Zwischenrippennerven), deshalb schmerzt eine Rippenfellentzündung beim Atmen.", "الورقة الخارجية تبطن جدار الصدر والحجاب والمنصف. وهي حساسة للألم (بأعصاب وربية) ولذلك يؤلم التهاب الجنبة عند التنفس."] },
  space: { de: "Pleuraspalt", la: "Cavitas pleuralis", ar: "الحيز الجنبي", t: ["Kapillarer Spalt mit wenigen Millilitern seröser Flüssigkeit. Sie lässt die Blätter gegeneinander gleiten. Im Spalt herrscht ein leichter Unterdruck, der die Lunge an der Brustwand hält.", "فراغ شعري فيه بضعة ملليلترات من سائل مصلي يسمح للورقتين بالانزلاق. وفيه ضغط سلبي خفيف يثبّت الرئة على جدار الصدر."] },
  visceral: { de: "Lungenfell", la: "Pleura visceralis (pulmonalis)", ar: "الجنبة الحشوية", t: ["Das innere Blatt überzieht die Lunge fest, auch in den Lappenspalten. Es hat keine Schmerzfasern, sondern wird vegetativ versorgt.", "الورقة الداخلية تغطي الرئة بإحكام حتى في شقوق الفصوص، وليس فيها ألياف ألم بل تعصيب نباتي."] },
  lung: { de: "Lunge", la: "Pulmo", ar: "الرئة", t: ["Das Organ des Gasaustauschs. Die Elastizität des Gewebes will die Lunge zusammenziehen, der Unterdruck im Pleuraspalt hält sie entfaltet.", "عضو تبادل الغازات. مرونة النسيج تميل إلى تقليص الرئة والضغط السلبي في الحيز الجنبي يبقيها متمددة."] },
  diaphragm: { de: "Zwerchfell", la: "Diaphragma", ar: "الحجاب الحاجز", t: ["Der Hauptatemmuskel bildet den Boden des Brustraums. Zwischen Zwerchfell und Brustwand liegt der Recessus costodiaphragmaticus: Hier sammelt sich ein Pleuraerguss zuerst.", "عضلة التنفس الرئيسية وتشكّل قاع الصدر. وبين الحجاب وجدار الصدر يقع الجيب الضلعي الحجابي حيث يتجمع الانصباب الجنبي أولاً."] },
  air: { de: "Luft im Pleuraspalt (Pneumothorax)", la: "Pneumothorax", ar: "هواء في الحيز الجنبي (استرواح صدري)", t: ["Luft hebt den Unterdruck auf, die Lunge kollabiert. Zeichen: plötzlicher Schmerz, Atemnot, abgeschwächtes Atemgeräusch. Beim Spannungspneumothorax droht Kreislaufversagen: Notfall. Therapie: Thoraxdrainage. Pflege: Notruf, Oberkörper hoch, Sauerstoff, Überwachung der Drainage.", "يلغي الهواء الضغط السلبي فتنهار الرئة. العلامات: ألم مفاجئ وضيق تنفس وضعف صوت التنفس. والاسترواح التوتري يهدد بفشل الدورة: طارئ. العلاج: تصريف صدري. التمريض: طلب الإسعاف ورفع الجزء العلوي والأكسجين ومراقبة التصريف."] },
  fluid: { de: "Flüssigkeit im Pleuraspalt (Pleuraerguss)", la: "Effusio pleuralis", ar: "سائل في الحيز الجنبي (انصباب جنبي)", t: ["Ursachen: Herzinsuffizienz, Pneumonie, Tumor, Embolie. Zeichen: Atemnot, gedämpfter Klopfschall, aufgehobenes Atemgeräusch über dem Erguss. Therapie: Punktion oder Drainage und Behandlung der Ursache. Pflege: Atmung, SpO2, Lagerung auf die kranke Seite je nach Anordnung, Punktionsstelle beobachten.", "الأسباب: قصور القلب والالتهاب الرئوي والأورام والانصمام. العلامات: ضيق تنفس وأصم عند القرع وغياب صوت التنفس فوق الانصباب. العلاج: بزل أو تصريف وعلاج السبب. التمريض: مراقبة التنفس وSpO2 والوضعية حسب الأمر وموضع البزل."] },
};
type PState = "normal" | "pneumo" | "effusion";
export function PleuraSchema() {
  const T = useRow();
  const [state, setState] = useState<PState>("normal");
  const [sel, setSel] = useState<string>("space");
  const key = sel === "air" && state !== "pneumo" ? "space" : sel === "fluid" && state !== "effusion" ? "space" : sel;
  const info = PL[key];
  const left = state === "pneumo" ? 250 : 176;
  const bottom = state === "effusion" ? 262 : 292;
  const hot = (id: string) => ({ onClick: () => setSel(id), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": PL[id].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(id); } } });
  const ring = (id: string) => (key === id ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  const lung = `M ${left + 50} 50 Q ${left} 50 ${left} 110 L ${left} ${bottom - 40} Q ${left} ${bottom} ${left + 50} ${bottom} L 520 ${bottom} Q 560 ${bottom} 560 ${bottom - 40} L 560 100 Q 560 50 520 50 Z`;
  const states: { id: PState; t: Row }[] = [
    { id: "normal", t: ["Normal", "طبيعي", "Normal", "Normal", "Normal"] },
    { id: "pneumo", t: ["Pneumothorax", "استرواح صدري", "Pneumothorax", "Pneumothorax", "Pnömotoraks"] },
    { id: "effusion", t: ["Pleuraerguss", "انصباب جنبي", "Pleural effusion", "Épanchement pleural", "Plevral efüzyon"] },
  ];
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="pleura-schema">
      <h2 className="text-lg font-bold">{T(["Pleura und Pleuraspalt (Schema)", "الجنبة والحيز الجنبي (رسم تخطيطي)", "Pleura and pleural space (schematic)", "Plèvre et cavité pleurale (schéma)", "Plevra ve plevral boşluk (şema)"])}</h2>
      <p className="text-sm text-muted">{T(["Vereinfachter Schnitt durch die rechte Brusthälfte (von vorn), nicht maßstabsgetreu. Die Pleura ist im 3D-Modell nicht enthalten.", "مقطع مبسّط في النصف الأيمن من الصدر (من الأمام) وليس بمقياس حقيقي. والجنبة غير موجودة في النموذج ثلاثي الأبعاد.", "Simplified section through the right chest (front view), not to scale. The pleura is not part of the 3D model.", "Coupe simplifiée du thorax droit, pas à l'échelle. La plèvre n'est pas dans le modèle 3D.", "Sağ göğüs yarısının basitleştirilmiş kesiti, ölçekli değil. Plevra 3B modelde yok."])}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {states.map((s) => (
          <button key={s.id} onClick={() => { setState(s.id); if (s.id === "pneumo") setSel("air"); else if (s.id === "effusion") setSel("fluid"); else setSel("space"); }} aria-pressed={state === s.id} data-testid={`pleura-state-${s.id}`} className={cn("min-h-9 rounded-lg border px-3 text-sm", state === s.id ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{T(s.t)}</button>
        ))}
      </div>
      <svg viewBox="0 0 640 360" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={T(["Schema: Brustwand, Pleura und Lunge", "رسم: جدار الصدر والجنبة والرئة", "Schematic: chest wall, pleura and lung", "Schéma : paroi thoracique, plèvre et poumon", "Şema: göğüs duvarı, plevra ve akciğer"])}>
        {/* Pleuraspalt: Raum zwischen Wand und Lunge */}
        <g {...hot("space")}>
          <path d={`M 150 40 L 566 40 L 566 ${bottom + 12} L 150 ${bottom + 12} Z`} fill={state === "pneumo" ? "#e6f1f8" : "#fbf0c8"} {...ring("space")} />
        </g>
        {state === "pneumo" && <g {...hot("air")}><rect x="152" y="44" width={left - 156} height={bottom - 34} fill="#eaf4fb" {...ring("air")} /><text x={(152 + left) / 2} y="170" textAnchor="middle" fontSize="12" fill="#52708a">{T(["Luft", "هواء", "Air", "Air", "Hava"])}</text></g>}
        {state === "effusion" && <g {...hot("fluid")}><rect x="152" y={bottom} width="410" height="20" fill="#e5b64a" opacity="0.85" {...ring("fluid")} /><text x="355" y={bottom + 15} textAnchor="middle" fontSize="12" fill="#5a3a00">{T(["Erguss (Flüssigkeit)", "انصباب (سائل)", "Effusion (fluid)", "Épanchement", "Efüzyon"])}</text></g>}
        {/* Lunge */}
        <g {...hot("lung")}>
          <path d={lung} fill="#e8aaa4" {...ring("lung")} />
          <path d={`M 330 60 L 330 ${bottom - 60} M 330 140 L 270 190 M 330 120 L 420 170 M 330 200 L 400 ${bottom - 40}`} stroke="#f7e8e4" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />
          <text x="430" y="120" fontSize="14" fill="#6a2f2a">{T(["Lunge", "الرئة", "Lung", "Poumon", "Akciğer"])}</text>
        </g>
        {/* Pleura visceralis */}
        <g {...hot("visceral")}>
          <path d={lung} fill="none" stroke={key === "visceral" ? "#ffb300" : "#2c6fb7"} strokeWidth={key === "visceral" ? 5 : 3} />
        </g>
        {/* Pleura parietalis */}
        <g {...hot("parietal")}>
          <path d={`M 566 40 L 150 40 L 150 ${bottom + 12} L 566 ${bottom + 12}`} fill="none" stroke={key === "parietal" ? "#ffb300" : "#c0392b"} strokeWidth={key === "parietal" ? 5 : 3} />
        </g>
        {/* Brustwand mit Rippen */}
        <g {...hot("wall")}>
          <rect x="108" y="30" width="38" height="300" rx="10" fill="#d9c9a8" {...ring("wall")} />
          {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="100" y={44 + i * 56} width="46" height="22" rx="10" fill="#efe3c6" stroke="#b39f75" strokeWidth="1.5" />)}
          <text x="124" y="352" textAnchor="middle" fontSize="11" fill="currentColor">{T(["Brustwand", "جدار الصدر", "Chest wall", "Paroi", "Göğüs duvarı"])}</text>
        </g>
        {/* Zwerchfell */}
        <g {...hot("diaphragm")}>
          <path d={`M 146 ${bottom + 24} Q 350 ${bottom + 24} 566 ${bottom + 34} L 566 340 L 146 340 Z`} fill="#b4574a" opacity="0.85" {...ring("diaphragm")} />
          <text x="356" y="326" textAnchor="middle" fontSize="13" fill="#fff">{T(["Zwerchfell", "الحجاب الحاجز", "Diaphragm", "Diaphragme", "Diyafram"])}</text>
        </g>
        {/* Legende */}
        <line x1="150" y1="22" x2="176" y2="22" stroke="#c0392b" strokeWidth="3" /><text x="182" y="26" fontSize="11" fill="currentColor">{T(["Pleura parietalis", "الجنبة الجدارية", "Parietal pleura", "Plèvre pariétale", "Parietal plevra"])}</text>
        <line x1="330" y1="22" x2="356" y2="22" stroke="#2c6fb7" strokeWidth="3" /><text x="362" y="26" fontSize="11" fill="currentColor">{T(["Pleura visceralis", "الجنبة الحشوية", "Visceral pleura", "Plèvre viscérale", "Visseral plevra"])}</text>
      </svg>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Object.keys(PL).filter((k) => (k !== "air" || state === "pneumo") && (k !== "fluid" || state === "effusion")).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={key === k} className={cn("min-h-9 rounded-lg border px-2.5 text-xs", key === k ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{PL[k].de}</button>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-surface2 p-3" data-testid="pleura-info">
        <h3 className="font-semibold">{info.de}</h3>
        <p className="text-sm italic text-muted">{info.la}</p>
        <p dir="rtl" lang="ar" className="text-sm font-semibold text-teal">{info.ar}</p>
        <p className="mt-1 text-sm">{info.t[0]}</p>
        <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.t[1]}</p>
      </div>
    </div>
  );
}

export function RespSchemas() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <GasExchangeSchema />
      <PleuraSchema />
    </div>
  );
}
