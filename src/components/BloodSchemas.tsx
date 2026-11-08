"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D keine Blutzellen, kein Knochenmark
 * und keine Lymphknoten enthält: Lymphknoten (anklickbar), Blutbestandteile mit Normwerten, Abwehr, AB0-Tabelle, Gerinnung.
 * Normwerte sind laborabhängige Richtwerte.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

interface Info { de: string; la: string; ar: string; t: [string, string] }
const L: Record<string, Info> = {
  capsule: { de: "Kapsel", la: "Capsula", ar: "المحفظة", t: ["Bindegewebige Hülle des Lymphknotens.", "غلاف ضام يحيط بالعقدة اللمفاوية."] },
  afferent: { de: "Zuführendes Lymphgefäß", la: "Vas lymphaticum afferens", ar: "الوعاء اللمفاوي الوارد", t: ["Bringt Lymphe aus dem Gewebe; mehrere pro Knoten. Mit der Lymphe kommen auch Erreger und Tumorzellen.", "ينقل اللمف من النسيج؛ عدة أوعية لكل عقدة. ومع اللمف قد تصل جراثيم وخلايا ورمية."] },
  cortex: { de: "Rinde mit Follikeln (B-Zellen)", la: "Cortex, folliculi", ar: "القشرة والجريبات (خلايا بائية)", t: ["Hier sitzen B-Lymphozyten; bei Infekt vergrößern sich die Keimzentren, der Knoten schwillt an und kann schmerzen.", "هنا الخلايا اللمفاوية البائية؛ في العدوى تكبر المراكز الجرثومية فتتورم العقدة وقد تؤلم."] },
  paracortex: { de: "Parakortex (T-Zellen)", la: "Paracortex", ar: "جنب القشرة (خلايا تائية)", t: ["Zone der T-Lymphozyten und dendritischen Zellen, die Antigene präsentieren.", "منطقة الخلايا التائية والخلايا الغصنية التي تعرض المستضدات."] },
  medulla: { de: "Mark mit Plasmazellen", la: "Medulla", ar: "اللب (خلايا بلازمية)", t: ["Plasmazellen bilden Antikörper; die Lymphe wird zum Abfluss gesammelt.", "الخلايا البلازمية تصنع الأضداد؛ ويُجمع اللمف نحو الخروج."] },
  efferent: { de: "Abführendes Lymphgefäß", la: "Vas lymphaticum efferens", ar: "الوعاء اللمفاوي الصادر", t: ["Führt gefilterte Lymphe zum nächsten Knoten, später über den Milchbrustgang zur Vene. Bei Lymphödem Hochlagerung und Entstauung nach Anordnung.", "ينقل اللمف المرشح إلى العقدة التالية ثم عبر القناة الصدرية إلى الوريد. في الوذمة اللمفية رفع الطرف وتصريف حسب الأمر."] },
};

// Blutbestandteile mit Richtwerten
const COMP: [string, string, string, string][] = [
  ["Erythrozyten", "الكريات الحمراء", "Frauen etwa 4,1 bis 5,1, Männer etwa 4,5 bis 5,9 Mio/µl", "Sauerstofftransport; Lebensdauer etwa 120 Tage"],
  ["Hämoglobin (Hb)", "الهيموغلوبين", "Frauen etwa 12 bis 16, Männer etwa 14 bis 18 g/dl", "Bindet Sauerstoff; Abfall = Anämie"],
  ["Leukozyten", "الكريات البيضاء", "etwa 4 000 bis 10 000/µl", "Abwehr; erhöht bei Infekt, erniedrigt bei Knochenmarkschädigung"],
  ["Thrombozyten", "الصفيحات", "etwa 150 000 bis 400 000/µl", "Gerinnung; unter etwa 50 000 Blutungsgefahr"],
  ["Plasma", "البلازما", "etwa 55 % des Blutvolumens", "Wasser, Eiweiße (Albumin, Gerinnungsfaktoren, Antikörper), Elektrolyte"],
  ["Hämatokrit", "الهيماتوكريت", "Frauen etwa 37 bis 47 %, Männer etwa 42 bis 52 %", "Zellanteil am Blut; erhöht bei Flüssigkeitsmangel"],
];
const COMP_AR: Record<string, string> = {
  "Erythrozyten": "نقل الأكسجين؛ العمر نحو 120 يوماً",
  "Hämoglobin (Hb)": "يرتبط بالأكسجين؛ الانخفاض = فقر الدم",
  "Leukozyten": "الدفاع؛ ترتفع في العدوى وتنخفض عند تضرر النخاع",
  "Thrombozyten": "التخثر؛ أقل من نحو 50 ألفاً خطر نزف",
  "Plasma": "ماء وبروتينات (ألبومين وعوامل التخثر وأضداد) وشوارد",
  "Hämatokrit": "نسبة الخلايا من الدم؛ ترتفع عند نقص السوائل",
};

const DEF: [string, string, string, string][] = [
  ["Angeborene Abwehr", "المناعة الفطرية", "Sofort, unspezifisch: Haut, Schleimhaut, Magensäure, Fresszellen (Makrophagen), Granulozyten, Komplement, Fieber. Kein Gedächtnis.", "فورية وغير نوعية: الجلد والمخاطيات وحمض المعدة والبلاعم والحبيبيات والمتممة والحمى. دون ذاكرة."],
  ["Erworbene humorale Abwehr", "المناعة المكتسبة الخلطية", "B-Zellen werden zu Plasmazellen und bilden Antikörper; Gedächtnis-B-Zellen schützen nach Impfung oder Infekt.", "تتحول الخلايا البائية إلى بلازمية وتصنع الأضداد؛ وخلايا الذاكرة تحمي بعد التطعيم أو العدوى."],
  ["Erworbene zelluläre Abwehr", "المناعة المكتسبة الخلوية", "T-Helferzellen steuern, zytotoxische T-Zellen töten virusinfizierte Zellen und Tumorzellen.", "الخلايا التائية المساعدة تنظم والسامة تقتل الخلايا المصابة بالفيروس والورمية."],
];

const ABO: [string, string, string, string][] = [
  ["A", "Anti-B", "A und 0", "A und AB"],
  ["B", "Anti-A", "B und 0", "B und AB"],
  ["AB", "keine", "alle (A, B, AB, 0)", "nur AB"],
  ["0", "Anti-A und Anti-B", "nur 0", "alle (A, B, AB, 0)"],
];

const COAG: [string, string, string, string][] = [
  ["1. Gefäßverengung", "1. تضيق الوعاء", "Die verletzte Gefäßwand zieht sich zusammen.", "جدار الوعاء المصاب ينقبض."],
  ["2. Primäre Hämostase", "2. الإرقاء الأولي", "Thrombozyten haften und bilden einen weichen Pfropf.", "تلتصق الصفيحات وتشكل سدادة رخوة."],
  ["3. Sekundäre Hämostase", "3. الإرقاء الثانوي", "Gerinnungsfaktoren (viele in der Leber, Vitamin K) bilden Fibrin, das den Pfropf festigt.", "عوامل التخثر (كثير منها في الكبد وفيتامين ك) تكوّن الفيبرين الذي يثبت السدادة."],
  ["4. Auflösung", "4. التحلل", "Fibrinolyse baut das Gerinnsel nach der Heilung wieder ab.", "انحلال الفيبرين يزيل الجلطة بعد الشفاء."],
];

export function BloodSchemas() {
  const t = useT();
  const [sel, setSel] = useState<string>("cortex");
  const p = L[sel];
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": L[k].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") setSel(k); } });
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  const box = "rounded-xl border border-line bg-surface p-4";
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="blood-schemas">
      <div className={box} data-testid="blood-schema">
        <h2 className="text-lg font-bold">{t("Lymphknoten (Schema, kein 3D-Modell)", "العقدة اللمفاوية (مخطط، ليس نموذجاً ثلاثي الأبعاد)")}</h2>
        <p className="text-sm text-muted">{t("Schematisch, nicht maßstabsgetreu. Lymphknoten, Lymphgefäße und Blutzellen sind im 3D-Modell nicht enthalten. Teile antippen.", "تخطيطي وليس بمقياس حقيقي. العقد والأوعية اللمفاوية وخلايا الدم غير موجودة في النموذج. اضغط على الأجزاء.")}</p>
        <svg viewBox="0 0 640 320" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema eines Lymphknotens", "مخطط عقدة لمفاوية")}>
          <g {...hot("capsule")}><ellipse cx="320" cy="170" rx="200" ry="115" fill="#e8dcc0" stroke="#8a7a50" strokeWidth="6" {...ring("capsule")} /></g>
          <g {...hot("cortex")}><ellipse cx="320" cy="170" rx="185" ry="100" fill="#c8b0e0" stroke="#7a5aa8" strokeWidth="2" {...ring("cortex")} /><g fill="#e8d8f8" stroke="#7a5aa8"><circle cx="220" cy="105" r="18" /><circle cx="290" cy="85" r="18" /><circle cx="360" cy="85" r="18" /><circle cx="425" cy="108" r="18" /></g></g>
          <g {...hot("paracortex")}><ellipse cx="320" cy="180" rx="130" ry="62" fill="#a8c8e8" stroke="#3a6aa8" strokeWidth="2" {...ring("paracortex")} /></g>
          <g {...hot("medulla")}><ellipse cx="330" cy="215" rx="75" ry="28" fill="#f0c0c0" stroke="#a8584a" strokeWidth="2" {...ring("medulla")} /></g>
          <g {...hot("afferent")}><path d="M 40 60 L 190 80 M 40 110 L 170 100 M 600 60 L 450 80" stroke="#3a8a6a" strokeWidth="7" fill="none" strokeLinecap="round" {...ring("afferent")} /></g>
          <g {...hot("efferent")}><path d="M 330 240 L 330 300" stroke="#c07a2a" strokeWidth="9" fill="none" strokeLinecap="round" {...ring("efferent")} /></g>
          <g fontSize="12" fill="currentColor"><text x="30" y="45">{t("zuführend", "وارد")}</text><text x="345" y="298">{t("abführend", "صادر")}</text><text x="250" y="190">{t("T-Zellen", "خلايا تائية")}</text><text x="285" y="62">{t("B-Zell-Follikel", "جريبات بائية")}</text></g>
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">{Object.keys(L).map((k) => <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-3 text-sm", sel === k ? "border-teal bg-teal/10" : "border-line")}>{t(L[k].de, L[k].ar)}</button>)}</div>
        <div className="mt-3 text-sm" data-testid="blood-detail"><h3 className="font-semibold">{t(p.de, p.ar)} <span className="italic text-muted">({p.la})</span></h3><p className="mt-1">{t(p.t[0], p.t[1])}</p></div>
        <p className="mt-2 text-sm">{t("Pflegebezug: vergrößerte, schmerzlose, derbe Lymphknoten über Wochen sind abklärungsbedürftig (Lymphom, Metastase); schmerzhafte, weiche Knoten treten bei Infekten auf. Lage, Größe und Konsistenz dokumentieren.", "الصلة التمريضية: العقد المتضخمة غير المؤلمة والقاسية لأسابيع تحتاج تقصياً (لمفوما أو نقائل)؛ والمؤلمة اللينة تحدث في العدوى. توثيق الموضع والحجم والقوام.")}</p>
      </div>

      <div className={box} data-testid="blood-composition">
        <h2 className="text-lg font-bold">{t("Blutbestandteile und Richtwerte (Tabelle)", "مكونات الدم والقيم المرجعية (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Richtwerte; die Referenzbereiche des jeweiligen Labors gelten.", "قيم إرشادية؛ والمعتمد هو المجال المرجعي لمخبر المنشأة.")}</p>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[520px] text-sm"><tbody>{COMP.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{r[2]}</td><td className="p-1">{t(r[3], COMP_AR[r[0]])}</td></tr>)}</tbody></table></div>
      </div>

      <div className={box} data-testid="blood-defence">
        <h2 className="text-lg font-bold">{t("Immunabwehr im Überblick (Tabelle)", "نظرة على المناعة (جدول)")}</h2>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><tbody>{DEF.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td></tr>)}</tbody></table></div>
      </div>

      <div className={box} data-testid="abo-table">
        <h2 className="text-lg font-bold">{t("AB0-System und Erythrozytenkonzentrate (Tabelle)", "نظام ABO وأكياس الكريات الحمراء (جدول)")}</h2>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><thead><tr className="border-b border-line text-left"><th className="p-1">{t("Blutgruppe", "الفصيلة")}</th><th className="p-1">{t("Antikörper im Plasma", "الأضداد في البلازما")}</th><th className="p-1">{t("Darf erhalten von", "يستقبل من")}</th><th className="p-1">{t("Darf spenden an", "يعطي إلى")}</th></tr></thead><tbody>{ABO.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{r[0]}</td><td className="p-1">{r[1]}</td><td className="p-1">{r[2]}</td><td className="p-1">{r[3]}</td></tr>)}</tbody></table></div>
        <p className="mt-2 text-sm">{t("Gilt für Erythrozytenkonzentrate. Rhesus-negative Empfänger erhalten Rhesus-negatives Blut. Vor jeder Transfusion Identität, Konserve und Bedside-Test prüfen; Verwechslung ist die gefährlichste Transfusionsreaktion (akute hämolytische Reaktion).", "ينطبق على أكياس الكريات الحمراء. متلقو الريسوس السالب يتلقون دماً سالب الريسوس. قبل كل نقل تُراجع الهوية والكيس واختبار قرب السرير؛ والخلط أخطر تفاعل نقل (انحلال حاد).")}</p>
      </div>

      <div className={box} data-testid="coag-table">
        <h2 className="text-lg font-bold">{t("Blutgerinnung in vier Schritten (Tabelle)", "تخثر الدم في أربع خطوات (جدول)")}</h2>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><tbody>{COAG.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td></tr>)}</tbody></table></div>
        <p className="mt-2 text-sm">{t("Pflegebezug: Marcumar (Vitamin-K-Antagonist) wird über den INR gesteuert, Heparin über die PTT bzw. anti-Xa; Blutungszeichen und Sturzrisiko beachten, Vitamin-K-reiche Kost konstant halten.", "الصلة التمريضية: مضادات فيتامين ك تُضبط بقيمة INR والهيبارين بـ PTT أو anti-Xa؛ مراقبة النزف وخطر السقوط وثبات الغذاء الغني بفيتامين ك.")}</p>
      </div>
    </div>
  );
}
