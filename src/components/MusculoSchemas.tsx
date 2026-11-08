"use client";
import { useLang } from "@/lib/i18n";

/**
 * SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D keine Gelenkkapseln, Bänder,
 * Knorpel und Wirbelsäulenkrümmung im Detail enthält: Aufbau eines Röhrenknochens und Gelenks, Wirbelsäulenabschnitte,
 * Muskelkraftgrade, Injektionsorte.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

const SPINE: [string, string, string, string][] = [
  ["Halswirbelsäule", "العنقي", "7 (C1 bis C7)", "Lordose, sehr beweglich; trägt den Kopf"],
  ["Brustwirbelsäule", "الصدري", "12 (Th1 bis Th12)", "Kyphose; Ansatz der Rippen, wenig beweglich"],
  ["Lendenwirbelsäule", "القطني", "5 (L1 bis L5)", "Lordose; trägt die größte Last"],
  ["Kreuzbein", "العجز", "5 verwachsen (S1 bis S5)", "Kyphose; Teil des Beckenrings"],
  ["Steißbein", "العصعص", "3 bis 5 verwachsen", "Rest der Schwanzwirbel (im Modell nicht enthalten)"],
];
const GRADES: [string, string, string][] = [
  ["0", "Keine Muskelaktivität sichtbar oder tastbar", "لا نشاط عضلي"],
  ["1", "Muskelzucken sichtbar oder tastbar, keine Bewegung", "انقباض بلا حركة"],
  ["2", "Bewegung nur ohne Schwerkraft (z. B. in Seitenlage)", "حركة دون الجاذبية"],
  ["3", "Bewegung gegen die Schwerkraft, aber nicht gegen Widerstand", "حركة ضد الجاذبية"],
  ["4", "Bewegung gegen mäßigen Widerstand", "حركة ضد مقاومة متوسطة"],
  ["5", "Volle Kraft", "قوة كاملة"],
];

export function MusculoSchemas() {
  const t = useT();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="musculo-schemas">
      <div className="rounded-xl border border-line bg-surface p-4" data-testid="joint-schema">
        <h2 className="text-lg font-bold">{t("Gelenk und Röhrenknochen (Schema)", "المفصل والعظم الطويل (رسم تخطيطي)")}</h2>
        <p className="text-sm text-muted">{t("Schematische Lernzeichnung, nicht maßstabsgetreu. Gelenkkapsel, Knorpel und Knochenmark sind im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي. المحفظة والغضروف ونخاع العظم غير موجودة في النموذج ثلاثي الأبعاد.")}</p>
        <svg viewBox="0 0 640 300" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema eines Gelenks", "رسم مفصل")}>
          <rect x="60" y="10" width="140" height="120" rx="14" fill="#efe6d0" stroke="#a89468" strokeWidth="3" />
          <rect x="95" y="10" width="70" height="105" rx="10" fill="#e8bf6a" />
          <rect x="60" y="130" width="140" height="22" rx="8" fill="#d6e8f0" stroke="#5a8aa8" strokeWidth="2" />
          <rect x="60" y="180" width="140" height="22" rx="8" fill="#d6e8f0" stroke="#5a8aa8" strokeWidth="2" />
          <rect x="60" y="202" width="140" height="90" rx="14" fill="#efe6d0" stroke="#a89468" strokeWidth="3" />
          <path d="M 60 152 Q 40 166 60 180 M 200 152 Q 220 166 200 180" stroke="#b07a4a" strokeWidth="6" fill="none" />
          <rect x="65" y="154" width="130" height="24" fill="#f6e08a" opacity="0.7" />
          <g fontSize="12" fill="currentColor">
            <text x="230" y="40">{t("Knochenrinde (Kompakta)", "القشرة العظمية (الكثيفة)")}</text>
            <text x="230" y="70">{t("Knochenmark (Hohlraum, Blutbildung)", "نخاع العظم (تجويف، تكوين الدم)")}</text>
            <text x="230" y="141">{t("Gelenkknorpel", "غضروف المفصل")}</text>
            <text x="230" y="168">{t("Gelenkspalt mit Gelenkflüssigkeit (Synovia)", "الشق المفصلي مع السائل الزليلي")}</text>
            <text x="230" y="195">{t("Gelenkknorpel", "غضروف المفصل")}</text>
            <text x="230" y="240">{t("Gelenkkapsel mit Bändern (Seiten)", "المحفظة المفصلية والأربطة (الجانبان)")}</text>
          </g>
        </svg>
        <p className="mt-2 text-sm">{t("Arthrose: Der Knorpel nutzt sich ab, Gelenkspalt wird schmal, Schmerz bei Belastung (Anlaufschmerz). Arthritis: Kapsel und Synovia entzünden sich, Schwellung, Überwärmung, Ruheschmerz. Pflege: Belastung dosieren, Bewegung, Wärme bei Arthrose, Kälte bei akuter Entzündung (nach Anordnung), Schmerzmanagement.", "الفصال العظمي: يتآكل الغضروف ويضيق الشق ويظهر ألم عند الحمل. التهاب المفصل: تلتهب المحفظة والسائل ويظهر تورم وسخونة وألم عند الراحة. التمريض: تنظيم الحمل والحركة وحرارة في الفصال وبرودة في الالتهاب الحاد (حسب الأمر) وإدارة الألم.")}</p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="spine-table">
        <h2 className="text-lg font-bold">{t("Abschnitte der Wirbelsäule (Tabelle)", "أقسام العمود الفقري (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Insgesamt 33 bis 34 Wirbel, doppelte S-Form als Stoßdämpfer.", "33 إلى 34 فقرة وشكل S مزدوج كماص للصدمات.")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead><tr className="border-b border-line text-left"><th className="p-1">{t("Abschnitt", "القسم")}</th><th className="p-1">{t("Wirbel", "الفقرات")}</th><th className="p-1">{t("Merkmal", "الميزة")}</th></tr></thead>
            <tbody>{SPINE.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{r[2]}</td><td className="p-1">{r[3]}</td></tr>)}</tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="muscle-grades">
        <h2 className="text-lg font-bold">{t("Muskelkraftgrade 0 bis 5 (Tabelle)", "درجات قوة العضلات من 0 إلى 5 (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Standardprüfung beim Neurostatus, nach Fraktur, Schlaganfall oder Nervenverletzung.", "فحص معياري للحالة العصبية وبعد الكسر أو السكتة أو إصابة العصب.")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm"><tbody>{GRADES.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-bold">{r[0]}</td><td className="p-1">{t(r[1], r[2])}</td></tr>)}</tbody></table>
        </div>
      </div>
    </div>
  );
}
