"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * Zwei SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D keine Darmwandschichten und Zotten enthält:
 * Dünndarmzotte mit Resorptionswegen und eine Übersicht der Verdauungssekrete.
 */
type Row = [string, string, string, string, string];
const LG = ["de", "ar", "en", "fr", "tr"];
const useRow = () => { const lang = useLang(); return (r: Row) => r[Math.max(0, LG.indexOf(lang))]; };
interface Info { de: string; la: string; ar: string; t: [string, string] }

const VIL: Record<string, Info> = {
  lumen: { de: "Darmlumen mit Speisebrei", la: "Lumen intestini tenuis", ar: "تجويف الأمعاء", t: ["Hier liegt der Speisebrei, vermischt mit Galle, Bauchspeichel und Darmsaft. Die Bausteine der Nahrung (Zucker, Aminosäuren, Fettsäuren) werden aufgenommen.", "هنا يوجد الكيموس مختلطاً بالصفراء وعصارة البنكرياس والعصارة المعوية. وتُمتص لبنات الغذاء (السكريات والأحماض الأمينية والأحماض الدهنية)."] },
  villus: { de: "Darmzotte", la: "Villus intestinalis", ar: "الزغابة المعوية", t: ["Fingerförmige Ausstülpung der Schleimhaut von etwa 0,5 bis 1 mm Länge. Falten, Zotten und Mikrovilli vergrößern die Oberfläche auf mehrere Hundert Quadratmeter; deshalb können Nährstoffe rasch aufgenommen werden.", "نتوء إصبعي للمخاطية طوله نحو 0.5 إلى 1 ملم. تضاعف الثنيات والزغابات والزغيبات السطح إلى مئات الأمتار المربعة لتُمتص المغذيات بسرعة."] },
  enterocyte: { de: "Darmepithelzelle mit Bürstensaum", la: "Enterocytus (Limbus striatus)", ar: "الخلية المعوية والحافة الفرجونية", t: ["Mikrovilli tragen Enzyme (z. B. Laktase) und Transporter. Bei Laktasemangel bleibt Milchzucker ungespalten: Blähungen und Durchfall (Laktoseintoleranz). Bei Zöliakie sind die Zotten abgeflacht und die Aufnahme sinkt.", "تحمل الزغيبات إنزيمات (مثل اللاكتاز) وناقلات. وعند نقص اللاكتاز يبقى سكر الحليب غير مفكك: نفخة وإسهال (عدم تحمل اللاكتوز). وفي الداء البطني تتسطح الزغابات ويقل الامتصاص."] },
  capillary: { de: "Blutkapillare", la: "Vas capillare sanguineum", ar: "الشعيرة الدموية", t: ["Nimmt Zucker, Aminosäuren, wasserlösliche Vitamine und Mineralstoffe auf. Das Blut fließt über Gekrösevenen und Pfortader zuerst zur Leber.", "تمتص السكريات والأحماض الأمينية والفيتامينات الذوابة في الماء والمعادن. ويجري الدم عبر الأوردة المساريقية والوريد البابي أولاً إلى الكبد."] },
  lacteal: { de: "Lymphkapillare (Chylusgefäß)", la: "Vas lymphaticum centrale (Vas chyliferum)", ar: "الوعاء اللمفي (الوعاء الكيلوسي)", t: ["Fette werden in den Zellen zu Chylomikronen verpackt und gelangen über die Lymphe, den Milchbrustgang und die Schlüsselbeinvene ins Blut, also an der Leber vorbei. Bei Fettverdauungsstörungen fehlen auch die fettlöslichen Vitamine A, D, E und K.", "تُعبَّأ الدهون في الخلايا على شكل كيلوميكرونات وتصل عبر اللمف والقناة الصدرية والوريد تحت الترقوة إلى الدم أي متجاوزة الكبد. وعند اضطراب هضم الدهون تنقص الفيتامينات الذوابة في الدهن A وD وE وK."] },
  goblet: { de: "Becherzelle", la: "Exocrinocytus caliciformis", ar: "الخلية الكأسية", t: ["Bildet Schleim, der die Schleimhaut schützt und den Speisebrei gleiten lässt. Im Dickdarm gibt es besonders viele.", "تفرز المخاط الذي يحمي المخاطية ويجعل الكيموس ينزلق. وهي كثيرة خاصة في القولون."] },
  crypt: { de: "Krypte (Lieberkühn-Drüse)", la: "Glandula intestinalis (Crypta Lieberkuehni)", ar: "الغدة المعوية (غدة ليبركون)", t: ["Aus den Krypten wachsen laufend neue Epithelzellen nach; die Darmschleimhaut erneuert sich etwa alle drei bis fünf Tage. Deshalb sind Schleimhaut und Haare bei Chemotherapie besonders betroffen (Durchfall, Mundschleimhautentzündung).", "من الغدد تنمو باستمرار خلايا ظهارية جديدة؛ وتتجدد مخاطية الأمعاء كل ثلاثة إلى خمسة أيام تقريباً. ولهذا تتأثر المخاطية والشعر خاصة بالعلاج الكيميائي (إسهال والتهاب مخاطية الفم)."] },
  muscle: { de: "Muskelschichten und Nervengeflecht", la: "Tunica muscularis (Plexus myentericus)", ar: "الطبقات العضلية والضفيرة العصبية", t: ["Längs- und Ringmuskel erzeugen Peristaltik und Durchmischung. Das Darmnervensystem steuert sie weitgehend selbst; Opioide und Immobilität hemmen sie und fördern Obstipation.", "تولّد العضلات الطولية والحلقية الحركة الدودية والمزج. ويدير الجهاز العصبي المعوي ذلك بشكل كبير ذاتياً؛ وتثبطه الأفيونات وقلة الحركة فتسبب الإمساك."] },
};

export function VillusSchema() {
  const T = useRow();
  const [sel, setSel] = useState<string | null>("lacteal");
  const info = sel ? VIL[sel] : null;
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": VIL[k].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(k); } } });
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="villus-schema">
      <h2 className="text-lg font-bold">{T(["Dünndarmzotte und Resorption (Schema)", "الزغابة المعوية والامتصاص (رسم تخطيطي)", "Small-intestine villus and absorption (schematic)", "Villosité intestinale et absorption (schéma)", "İnce bağırsak villusu ve emilim (şema)"])}</h2>
      <p className="text-sm text-muted">{T(["Schematische Lernzeichnung, nicht maßstabsgetreu. Zotten und Wandschichten sind im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي. الزغابات وطبقات الجدار غير موجودة في النموذج ثلاثي الأبعاد.", "Schematic learning drawing, not to scale. Villi and wall layers are not part of the 3D model.", "Dessin schématique hors échelle. Villosités et couches non présentes dans le modèle 3D.", "Şematik çizim, ölçeksiz. Villuslar ve duvar katmanları 3B modelde yoktur."])}</p>
      <svg viewBox="0 0 640 380" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={T(["Schema einer Dünndarmzotte", "رسم زغابة معوية", "Schematic of a villus", "Schéma d'une villosité", "Villus şeması"])}>
        <g {...hot("muscle")}><rect x="20" y="318" width="600" height="44" rx="6" fill="#c97a6a" stroke="#8a4a3c" strokeWidth="2" {...ring("muscle")} /><text x="320" y="345" textAnchor="middle" fontSize="12" fill="#fff">{T(["Muskelschichten (Peristaltik)", "الطبقات العضلية (الحركة الدودية)", "Muscle layers (peristalsis)", "Couches musculaires (péristaltisme)", "Kas katmanları (peristaltizm)"])}</text></g>
        <g {...hot("lumen")}><rect x="20" y="16" width="600" height="60" rx="6" fill="#f2d9a0" opacity="0.75" {...ring("lumen")} /><text x="320" y="52" textAnchor="middle" fontSize="12" fill="#6a4a10">{T(["Darmlumen: Speisebrei", "التجويف: الكيموس", "Lumen: chyme", "Lumière : chyme", "Lümen: kimus"])}</text></g>
        <g {...hot("crypt")}>
          <path d="M 315 268 L 315 304 M 540 268 L 540 304" stroke="#a84a6a" strokeWidth="14" strokeLinecap="round" {...ring("crypt")} />
          <text x="328" y="292" fontSize="11" fill="currentColor">{T(["Krypte", "غدة", "Crypt", "Crypte", "Kript"])}</text>
        </g>
        <g {...hot("villus")}>
          <path d="M 150 306 L 150 130 Q 150 84 200 84 Q 250 84 250 130 L 250 306 Z" fill="#f0b6a4" stroke="#b05f4c" strokeWidth="3" {...ring("villus")} />
          <path d="M 400 306 L 400 150 Q 400 110 440 110 Q 480 110 480 150 L 480 306 Z" fill="#f0b6a4" stroke="#b05f4c" strokeWidth="3" opacity="0.7" />
        </g>
        <g {...hot("enterocyte")}>
          {Array.from({ length: 9 }).map((_, i) => <path key={i} d={`M ${158 + i * 10} 90 q 0 -10 0 -14`} stroke="#8a4a3c" strokeWidth="2" fill="none" />)}
          <path d="M 152 130 Q 152 88 200 88 Q 248 88 248 130" fill="none" stroke="#b05f4c" strokeWidth="6" {...ring("enterocyte")} />
          <text x="258" y="106" fontSize="11" fill="currentColor">{T(["Bürstensaum", "الحافة الفرجونية", "Brush border", "Bordure en brosse", "Fırçamsı kenar"])}</text>
        </g>
        <g {...hot("capillary")}>
          <path d="M 165 300 L 165 160 Q 165 138 183 138 Q 195 138 195 160 L 195 300" fill="none" stroke="#c4362f" strokeWidth="7" {...ring("capillary")} />
          <text x="24" y="232" fontSize="11" fill="currentColor">{T(["Blutkapillare → Leber", "شعيرة دموية ← الكبد", "Blood capillary → liver", "Capillaire → foie", "Kılcal → karaciğer"])}</text>
        </g>
        <g {...hot("lacteal")}>
          <path d="M 215 300 L 215 150 Q 215 128 225 128 Q 235 128 235 150 L 235 300" fill="none" stroke="#e8d27a" strokeWidth="9" {...ring("lacteal")} />
          <text x="262" y="230" fontSize="11" fill="currentColor">{T(["Lymphgefäß (Fette)", "وعاء لمفي (الدهون)", "Lacteal (fats)", "Chylifère (graisses)", "Lenf damarı (yağlar)"])}</text>
        </g>
        <g {...hot("goblet")}><ellipse cx="156" cy="170" rx="6" ry="10" fill="#9ac0e0" stroke="#4a6a8a" {...ring("goblet")} /><text x="82" y="173" fontSize="10" fill="currentColor">{T(["Becherzelle", "خلية كأسية", "Goblet cell", "Cellule caliciforme", "Goblet hücre"])}</text></g>
        {/* Resorptionspfeile */}
        {[0, 1, 2].map((i) => <path key={i} d={`M ${176 + i * 22} 60 L ${176 + i * 22} 84`} stroke="#d98a2a" strokeWidth="3" markerEnd="url(#arr)" />)}
        <defs><marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d98a2a" /></marker></defs>
      </svg>
      <p className="mt-1 text-xs text-muted">{T(["Tippe auf Teile der Zeichnung.", "المس أجزاء الرسم.", "Tap parts of the drawing.", "Touchez les éléments du dessin.", "Çizimin parçalarına dokunun."])}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Object.keys(VIL).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-2.5 text-xs", sel === k ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{VIL[k].de}</button>
        ))}
      </div>
      {info && (
        <div className="mt-3 rounded-lg bg-surface2 p-3" data-testid="villus-info">
          <h3 className="font-semibold">{info.de}</h3>
          <p className="text-sm italic text-muted">{info.la}</p>
          <p dir="rtl" lang="ar" className="text-sm font-semibold text-teal">{info.ar}</p>
          <p className="mt-1 text-sm">{info.t[0]}</p>
          <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.t[1]}</p>
        </div>
      )}
    </div>
  );
}

const ENZ: [Row, string, string, string][] = [
  [["Mund", "الفم", "Mouth", "Bouche", "Ağız"], "Speichel: Amylase", "Stärke", "Beginn der Kohlenhydratspaltung"],
  [["Magen", "المعدة", "Stomach", "Estomac", "Mide"], "Salzsäure, Pepsin, Intrinsic Factor", "Eiweiß", "Denaturierung und Spaltung; B12-Aufnahme"],
  [["Leber/Galle", "الكبد/الصفراء", "Liver/bile", "Foie/bile", "Karaciğer/safra"], "Gallensäuren", "Fett", "Emulgierung (keine Enzyme)"],
  [["Pankreas", "البنكرياس", "Pancreas", "Pancréas", "Pankreas"], "Amylase, Lipase, Trypsin, Bikarbonat", "Stärke, Fett, Eiweiß", "Hauptverdauung im Zwölffingerdarm"],
  [["Dünndarm", "الأمعاء الدقيقة", "Small intestine", "Intestin grêle", "İnce bağırsak"], "Bürstensaum-Enzyme (z. B. Laktase)", "Zweifachzucker, Peptide", "Letzte Spaltung und Aufnahme"],
  [["Dickdarm", "القولون", "Large intestine", "Côlon", "Kalın bağırsak"], "Darmbakterien", "Ballaststoffe", "Wasser- und Salzaufnahme, Vitamin K, kurzkettige Fettsäuren"],
];
export function DigestiveTable() {
  const T = useRow();
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="digest-table">
      <h2 className="text-lg font-bold">{T(["Wo wird was verdaut? (Übersicht)", "أين يُهضم ماذا؟ (ملخص)", "Where is what digested? (overview)", "Où digère-t-on quoi ? (aperçu)", "Ne nerede sindirilir? (özet)"])}</h2>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead><tr className="border-b border-line text-left text-xs text-muted"><th className="py-1">{T(["Ort", "الموضع", "Site", "Site", "Yer"])}</th><th>{T(["Sekret / Enzyme", "الإفراز/الإنزيمات", "Secretion / enzymes", "Sécrétion / enzymes", "Salgı / enzimler"])}</th><th>{T(["Substrat", "الركيزة", "Substrate", "Substrat", "Substrat"])}</th><th>{T(["Wirkung", "التأثير", "Effect", "Effet", "Etki"])}</th></tr></thead>
          <tbody>{ENZ.map(([o, e, s, w], i) => <tr key={i} className="border-b border-line align-top"><td className="py-1 font-medium">{T(o)}</td><td>{e}</td><td>{s}</td><td>{w}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export function DigestiveSchemas() {
  return (
    <div className="space-y-4">
      <VillusSchema />
      <DigestiveTable />
    </div>
  );
}
