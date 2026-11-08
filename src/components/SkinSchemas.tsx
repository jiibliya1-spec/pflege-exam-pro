"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D keine Hautschichten, Follikel und Drüsen enthält:
 * Hautquerschnitt (anklickbar), Dekubituskategorien, Neunerregel, Wundheilungsphasen.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

interface Info { de: string; la: string; ar: string; t: [string, string] }
const L: Record<string, Info> = {
  epidermis: { de: "Oberhaut", la: "Epidermis", ar: "البشرة", t: ["Mehrschichtiges verhorntes Plattenepithel ohne Gefäße (0,05 bis 1,5 mm). Hornschicht als Barriere, Basalschicht erneuert die Haut (etwa 28 Tage). Melanozyten bilden Pigment.", "ظهارة حرشفية متعددة الطبقات متقرنة بلا أوعية (0.05 إلى 1.5 ملم). الطبقة المتقرنة حاجز والطبقة القاعدية تجدد الجلد (نحو 28 يوماً). الخلايا الصباغية تصنع الصباغ."] },
  dermis: { de: "Lederhaut", la: "Dermis (Corium)", ar: "الأدمة", t: ["Bindegewebe mit Gefäßen, Nerven, Rezeptoren, Haarfollikeln und Drüsen. Gibt Festigkeit und Elastizität; hier liegt die Blutversorgung der Epidermis.", "نسيج ضام فيه أوعية وأعصاب ومستقبلات وجريبات شعر وغدد. يمنح الصلابة والمرونة وفيه التروية الدموية للبشرة."] },
  subcutis: { de: "Unterhaut", la: "Subcutis (Hypodermis)", ar: "تحت الجلد", t: ["Lockeres Bindegewebe mit Fettgewebe: Polster, Wärmeisolation, Energiespeicher. Ort der subkutanen Injektion (Heparin, Insulin).", "نسيج ضام رخو مع نسيج دهني: وسادة وعزل حراري ومخزون طاقة. موضع الحقن تحت الجلد (هيبارين وإنسولين)."] },
  follicle: { de: "Haarfollikel und Haarbalgmuskel", la: "Folliculus pili, M. arrector pili", ar: "جريب الشعر وعضلة الشعر المنتصبة", t: ["Aus dem Follikel wächst das Haar; der kleine Muskel stellt es bei Kälte oder Angst auf (Gänsehaut).", "ينمو الشعر من الجريب؛ والعضلة الصغيرة تنصبه عند البرد أو الخوف (قشعريرة)."] },
  sebaceous: { de: "Talgdrüse", la: "Glandula sebacea", ar: "الغدة الدهنية", t: ["Bildet Talg, der Haut und Haar geschmeidig hält. Verstopft sie, entsteht Akne.", "تفرز الدهون التي تحافظ على ليونة الجلد والشعر. وانسدادها يسبب حب الشباب."] },
  sweat: { de: "Schweißdrüse", la: "Glandula sudorifera (ekkrin)", ar: "الغدة العرقية", t: ["Etwa 2 bis 4 Millionen; Schweiß kühlt durch Verdunstung (Temperaturregulation). Bei Fieber und Hitze Flüssigkeitsverlust beachten.", "نحو 2 إلى 4 ملايين؛ العرق يبرد بالتبخر (تنظيم الحرارة). في الحمى والحر الانتباه لفقد السوائل."] },
  receptors: { de: "Rezeptoren (Meissner-, Vater-Pacini-Körperchen, freie Nervenenden)", la: "Receptores cutanei", ar: "المستقبلات (جسيمات مايسنر وباتشيني ونهايات عصبية حرة)", t: ["Berührung, Druck, Vibration, Wärme, Kälte und Schmerz. Bei Neuropathie (Diabetes) fehlt der Schutz: Verletzungen werden nicht bemerkt.", "اللمس والضغط والاهتزاز والحرارة والبرودة والألم. عند الاعتلال العصبي (السكري) يغيب الحماية: لا تُلاحظ الإصابات."] },
  vessels: { de: "Blutgefäße und Lymphgefäße", la: "Vasa sanguinea et lymphatica", ar: "الأوعية الدموية واللمفية", t: ["Die Gefäße der Dermis regeln Wärmeabgabe (Weitstellung: Rötung, Engstellung: Blässe). Bei Druck bricht die Durchblutung zusammen: Dekubitus.", "أوعية الأدمة تنظم فقد الحرارة (توسع: احمرار وتضيق: شحوب). عند الضغط تنقطع التروية: قرحة الضغط."] },
};

const ULC: [string, string, string, string][] = [
  ["Kategorie 1", "الفئة 1", "Nicht wegdrückbare Rötung bei intakter Haut", "احمرار لا يزول بالضغط مع جلد سليم"],
  ["Kategorie 2", "الفئة 2", "Teilverlust der Haut: Blase oder flaches Ulkus ohne Beläge", "فقد جزئي للجلد: فقاعة أو قرحة سطحية دون طبقات"],
  ["Kategorie 3", "الفئة 3", "Verlust aller Hautschichten, Fettgewebe sichtbar, ohne freiliegende Knochen oder Sehnen", "فقد كل طبقات الجلد ويظهر الدهن دون ظهور عظم أو وتر"],
  ["Kategorie 4", "الفئة 4", "Gewebeverlust mit freiliegendem Knochen, Sehne oder Muskel; Gefahr der Knochen- und Weichteilinfektion", "فقد النسيج مع ظهور العظم أو الوتر أو العضل؛ خطر التهاب العظم والأنسجة"],
];
const NINES: [string, string, string][] = [
  ["Kopf und Hals", "الرأس والعنق", "9 %"], ["Jeder Arm", "كل ذراع", "9 %"], ["Rumpf vorn", "الجذع الأمامي", "18 %"], ["Rumpf hinten", "الجذع الخلفي", "18 %"], ["Jedes Bein", "كل ساق", "18 %"], ["Genitalbereich", "منطقة التناسل", "1 %"],
];
const HEAL: [string, string, string, string, string][] = [
  ["Exsudationsphase", "طور الإفراز", "Tag 1 bis 3", "الأيام 1 إلى 3", "Blutstillung und Entzündung, Reinigung der Wunde"],
  ["Granulationsphase", "طور التحبب", "Tag 4 bis 10", "الأيام 4 إلى 10", "Neues Bindegewebe und Gefäße füllen die Wunde (rot, feucht)"],
  ["Epithelisierungsphase", "طور التظهر", "ab Tag 10", "من اليوم 10", "Epithel schließt die Wunde; Narbenreifung über Wochen bis Monate"],
];

export function SkinSchemas() {
  const t = useT();
  const [sel, setSel] = useState<string>("dermis");
  const p = L[sel];
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": L[k].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") setSel(k); } });
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="skin-schemas">
      <div className="rounded-xl border border-line bg-surface p-4" data-testid="skin-schema">
        <h2 className="text-lg font-bold">{t("Hautquerschnitt (Schema, kein 3D-Modell)", "مقطع الجلد (مخطط، ليس نموذجاً ثلاثي الأبعاد)")}</h2>
        <p className="text-sm text-muted">{t("Schematisch, nicht maßstabsgetreu. Hautschichten, Follikel und Drüsen sind im 3D-Modell nicht enthalten. Teile antippen.", "تخطيطي وليس بمقياس حقيقي. طبقات الجلد والجريبات والغدد غير موجودة في النموذج ثلاثي الأبعاد. اضغط على الأجزاء.")}</p>
        <svg viewBox="0 0 640 360" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema der Haut im Querschnitt", "مخطط مقطع الجلد")}>
          <g {...hot("subcutis")}><rect x="20" y="230" width="440" height="110" fill="#f6e08a" stroke="#a88a1a" strokeWidth="2" {...ring("subcutis")} /><g fill="#f0cc5a"><ellipse cx="90" cy="285" rx="30" ry="22" /><ellipse cx="180" cy="295" rx="34" ry="24" /><ellipse cx="290" cy="283" rx="32" ry="22" /><ellipse cx="390" cy="295" rx="32" ry="22" /></g></g>
          <g {...hot("dermis")}><rect x="20" y="90" width="440" height="140" fill="#f0b8a8" stroke="#a8584a" strokeWidth="2" {...ring("dermis")} /></g>
          <g {...hot("epidermis")}><rect x="20" y="50" width="440" height="40" fill="#e8c0a0" stroke="#8a5a3a" strokeWidth="2" {...ring("epidermis")} /><rect x="20" y="40" width="440" height="10" fill="#c8a080" /></g>
          <g {...hot("follicle")}><path d="M 150 20 L 150 150 Q 150 200 190 200 Q 190 170 170 150 Z" fill="#6a4a30" stroke="#3a2a1a" strokeWidth="2" {...ring("follicle")} /><path d="M 170 120 L 235 160" stroke="#c0504a" strokeWidth="6" strokeLinecap="round" /></g>
          <g {...hot("sebaceous")}><ellipse cx="205" cy="150" rx="22" ry="14" fill="#f8e8a0" stroke="#a88a1a" strokeWidth="2" {...ring("sebaceous")} /></g>
          <g {...hot("sweat")}><path d="M 330 50 Q 340 120 320 150 Q 300 175 330 190 Q 360 205 335 215" stroke="#3a7aa8" strokeWidth="4" fill="none" {...ring("sweat")} /><circle cx="335" cy="218" r="14" fill="#bfe0f0" stroke="#3a7aa8" strokeWidth="3" /></g>
          <g {...hot("receptors")}><ellipse cx="400" cy="108" rx="14" ry="10" fill="#d8c0f0" stroke="#7a5aa8" strokeWidth="2" {...ring("receptors")} /><ellipse cx="420" cy="200" rx="18" ry="12" fill="#d8c0f0" stroke="#7a5aa8" strokeWidth="2" {...ring("receptors")} /></g>
          <g {...hot("vessels")}><path d="M 80 160 Q 120 130 160 170 M 80 200 Q 120 185 160 215" stroke="#c0392b" strokeWidth="5" fill="none" {...ring("vessels")} /><path d="M 270 120 Q 300 100 340 130" stroke="#2a5aa8" strokeWidth="5" fill="none" /></g>
          <g fontSize="12" fill="currentColor"><text x="475" y="70">{t("Epidermis", "البشرة")}</text><text x="475" y="130">{t("Dermis", "الأدمة")}</text><text x="475" y="290">{t("Subkutis", "تحت الجلد")}</text><text x="475" y="30">{t("Haar", "الشعر")}</text><text x="475" y="200">{t("Schweißdrüse, Rezeptoren", "غدة عرقية ومستقبلات")}</text></g>
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">{Object.keys(L).map((k) => <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-3 text-sm", sel === k ? "border-teal bg-teal/10" : "border-line")}>{t(L[k].de, L[k].ar)}</button>)}</div>
        <div className="mt-3 text-sm" data-testid="skin-detail"><h3 className="font-semibold">{t(p.de, p.ar)} <span className="italic text-muted">({p.la})</span></h3><p className="mt-1">{t(p.t[0], p.t[1])}</p></div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="ulcer-table">
        <h2 className="text-lg font-bold">{t("Dekubituskategorien (Tabelle)", "فئات قرح الضغط (جدول)")}</h2>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><tbody>{ULC.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td></tr>)}</tbody></table></div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="nines-table">
        <h2 className="text-lg font-bold">{t("Neunerregel beim Erwachsenen (Tabelle)", "قاعدة التسعات عند البالغ (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Schätzung der verbrannten Körperoberfläche; bei Kindern andere Anteile. Alternative: Handflächenregel (Handfläche des Patienten mit Fingern etwa 1 %).", "تقدير مساحة الحرق؛ وعند الأطفال النسب مختلفة. بديل: قاعدة راحة اليد (راحة يد المريض مع أصابعها نحو 1%).")}</p>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[320px] text-sm"><tbody>{NINES.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{r[2]}</td></tr>)}</tbody></table></div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="heal-table">
        <h2 className="text-lg font-bold">{t("Wundheilungsphasen (Tabelle)", "مراحل التئام الجرح (جدول)")}</h2>
        <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><tbody>{HEAL.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td><td className="p-1">{r[4]}</td></tr>)}</tbody></table></div>
        <p className="mt-2 text-sm">{t("Pflegebezug: Verbandwechsel steril und phasengerecht; Wundverlauf dokumentieren (Größe, Tiefe, Rand, Exsudat, Geruch, Schmerz); Infektionszeichen melden (Rötung, Schwellung, Wärme, Schmerz, Eiter, Fieber).", "الصلة التمريضية: تغيير الضماد معقماً وحسب الطور؛ توثيق تطور الجرح (الحجم والعمق والحافة والإفراز والرائحة والألم)؛ إبلاغ علامات العدوى (احمرار وتورم وسخونة وألم وقيح وحمى).")}</p>
      </div>
    </div>
  );
}
