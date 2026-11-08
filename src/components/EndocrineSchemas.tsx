"use client";
import { useLang } from "@/lib/i18n";

/**
 * SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D Schilddrüse, Nebenschilddrüsen, Eierstöcke
 * und Inselzellen nicht enthält: Regelkreis mit negativer Rückkopplung, Blutzuckerregulation, Hormontabelle.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

const HORM: [string, string, string, string, string][] = [
  ["Hypothalamus", "تحت المهاد", "Releasing- und Inhibiting-Hormone, ADH, Oxytocin", "هرمونات محفزة ومثبطة وADH وأوكسيتوسين", "im Modell"],
  ["Hypophyse (Vorderlappen)", "النخامية (الأمامي)", "TSH, ACTH, FSH, LH, GH, Prolaktin", "TSH وACTH وFSH وLH وGH وبرولاكتين", "im Modell"],
  ["Zirbeldrüse", "الصنوبرية", "Melatonin", "ميلاتونين", "im Modell"],
  ["Schilddrüse", "الدرقية", "T3, T4 (Stoffwechsel), Calcitonin", "T3 وT4 (الأيض) وكالسيتونين", "nicht im Modell"],
  ["Nebenschilddrüsen", "جارات الدرقية", "Parathormon (hebt Calcium)", "هرمون جارات الدرقية (يرفع الكالسيوم)", "nicht im Modell"],
  ["Nebennierenrinde", "قشرة الكظر", "Cortisol, Aldosteron, Androgene", "كورتيزول وألدوستيرون وأندروجينات", "im Modell"],
  ["Nebennierenmark", "لب الكظر", "Adrenalin, Noradrenalin", "أدرينالين ونورأدرينالين", "im Modell"],
  ["Bauchspeicheldrüse (Inseln)", "البنكرياس (الجزر)", "Insulin, Glukagon, Somatostatin", "إنسولين وغلوكاغون وسوماتوستاتين", "im Modell (Organ)"],
  ["Hoden", "الخصيتان", "Testosteron", "تستوستيرون", "im Modell"],
  ["Eierstöcke", "المبيضان", "Östrogen, Progesteron", "إستروجين وبروجسترون", "nicht im Modell"],
  ["Niere", "الكلية", "Erythropoetin, Renin, Calcitriol", "إريثروبويتين ورينين وكالسيتريول", "im Modell (Organ)"],
  ["Herz (Vorhof)", "القلب (الأذين)", "ANP (senkt Blutvolumen)", "ANP (يخفض حجم الدم)", "siehe Atlas Herz"],
  ["Thymus", "الغدة الزعترية", "Thymosin (T-Zell-Reifung)", "ثايموسين (نضج الخلايا التائية)", "im Modell"],
];

export function EndocrineSchemas() {
  const t = useT();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="endocrine-schemas">
      <div className="rounded-xl border border-line bg-surface p-4" data-testid="feedback-schema">
        <h2 className="text-lg font-bold">{t("Regelkreis mit negativer Rückkopplung (Schema)", "دارة التحكم بالتغذية الراجعة السلبية (رسم تخطيطي)")}</h2>
        <p className="text-sm text-muted">{t("Schematische Lernzeichnung. Die Schilddrüse als Beispiel-Zielorgan ist im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي. الغدة الدرقية كعضو هدف مثالي غير موجودة في النموذج ثلاثي الأبعاد.")}</p>
        <svg viewBox="0 0 640 260" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Regelkreis Hypothalamus Hypophyse Schilddrüse", "دارة تحت المهاد النخامية الدرقية")}>
          <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#445" /></marker></defs>
          <rect x="30" y="20" width="170" height="50" rx="10" fill="#f0c890" stroke="#a87a3a" strokeWidth="2" />
          <text x="115" y="50" textAnchor="middle" fontSize="13" fill="#222">{t("Hypothalamus (TRH)", "تحت المهاد (TRH)")}</text>
          <rect x="30" y="105" width="170" height="50" rx="10" fill="#9fdcc8" stroke="#2a8a7a" strokeWidth="2" />
          <text x="115" y="135" textAnchor="middle" fontSize="13" fill="#222">{t("Hypophyse (TSH)", "النخامية (TSH)")}</text>
          <rect x="30" y="190" width="170" height="50" rx="10" fill="#e8d8f0" stroke="#7a5a9a" strokeWidth="2" />
          <text x="115" y="220" textAnchor="middle" fontSize="13" fill="#222">{t("Schilddrüse (T3, T4)", "الدرقية (T3 وT4)")}</text>
          <g stroke="#445" strokeWidth="2.5" fill="none" markerEnd="url(#ar)"><path d="M 115 70 L 115 103" /><path d="M 115 155 L 115 188" /></g>
          <g stroke="#c0392b" strokeWidth="2.5" fill="none" strokeDasharray="6 4" markerEnd="url(#ar)"><path d="M 200 215 Q 250 215 250 160 Q 250 130 202 130" /><path d="M 200 215 Q 290 215 290 120 Q 290 50 202 45" /></g>
          <g fontSize="12" fill="currentColor">
            <text x="305" y="215" fill="#c0392b">{t("Negative Rückkopplung: viel T3/T4 hemmt TRH und TSH", "تغذية راجعة سلبية: كثرة T3/T4 تثبط TRH وTSH")}</text>
            <text x="230" y="30">{t("Steigt T4 an, sinkt TSH; fällt T4, steigt TSH.", "إذا ارتفع T4 انخفض TSH وإذا انخفض T4 ارتفع TSH.")}</text>
            <text x="230" y="95">{t("Klinik: TSH hoch + fT4 niedrig = primäre Unterfunktion.", "سريرياً: TSH مرتفع وfT4 منخفض = قصور أولي.")}</text>
          </g>
        </svg>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="glucose-schema">
        <h2 className="text-lg font-bold">{t("Blutzuckerregulation (Schema)", "تنظيم سكر الدم (رسم تخطيطي)")}</h2>
        <p className="text-sm text-muted">{t("Schematisch. Einzelne Inselzellen sind im 3D-Modell nicht darstellbar.", "تخطيطي. خلايا الجزر المنفردة لا يمكن عرضها في النموذج ثلاثي الأبعاد.")}</p>
        <svg viewBox="0 0 640 250" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema Blutzuckerregulation", "رسم تنظيم السكر")}>
          <rect x="250" y="95" width="140" height="60" rx="12" fill="#f6d86a" stroke="#a88a1a" strokeWidth="2" />
          <text x="320" y="120" textAnchor="middle" fontSize="13" fill="#222">{t("Blutzucker", "سكر الدم")}</text>
          <text x="320" y="140" textAnchor="middle" fontSize="12" fill="#222">{t("normal nüchtern etwa 70 bis 100 mg/dl", "طبيعي صائماً نحو 70 إلى 100 ملغ/دل")}</text>
          <rect x="20" y="20" width="190" height="64" rx="10" fill="#bfe0f0" stroke="#2a6a9a" strokeWidth="2" />
          <text x="115" y="46" textAnchor="middle" fontSize="13" fill="#222">{t("Nach dem Essen: hoch", "بعد الأكل: مرتفع")}</text>
          <text x="115" y="66" textAnchor="middle" fontSize="12" fill="#222">{t("B-Zellen → Insulin", "خلايا بيتا ← إنسولين")}</text>
          <rect x="430" y="20" width="190" height="64" rx="10" fill="#f0c0b0" stroke="#a84a3a" strokeWidth="2" />
          <text x="525" y="46" textAnchor="middle" fontSize="13" fill="#222">{t("Hunger, Stress: niedrig", "الجوع والإجهاد: منخفض")}</text>
          <text x="525" y="66" textAnchor="middle" fontSize="12" fill="#222">{t("A-Zellen → Glukagon, Adrenalin", "خلايا ألفا ← غلوكاغون وأدرينالين")}</text>
          <rect x="20" y="170" width="250" height="64" rx="10" fill="#d8f0d8" stroke="#3a8a3a" strokeWidth="2" />
          <text x="145" y="196" textAnchor="middle" fontSize="13" fill="#222">{t("Insulin: Zucker in Zellen, Glykogen, Fett", "الإنسولين: السكر إلى الخلايا وغلايكوجين ودهن")}</text>
          <text x="145" y="216" textAnchor="middle" fontSize="12" fill="#222">{t("→ Blutzucker sinkt", "← ينخفض السكر")}</text>
          <rect x="370" y="170" width="250" height="64" rx="10" fill="#f0d8d8" stroke="#a84a4a" strokeWidth="2" />
          <text x="495" y="196" textAnchor="middle" fontSize="13" fill="#222">{t("Glukagon: Leber setzt Zucker frei", "الغلوكاغون: الكبد يطلق السكر")}</text>
          <text x="495" y="216" textAnchor="middle" fontSize="12" fill="#222">{t("→ Blutzucker steigt", "← يرتفع السكر")}</text>
        </svg>
        <p className="mt-2 text-sm">{t("Pflegebezug: Bei Typ-1-Diabetes fehlt Insulin: ohne Insulin steigt der Zucker, es entsteht eine Ketoazidose. Zu viel Insulin oder zu wenig Essen führt zur Hypoglykämie. Insulin immer nach ärztlicher Anordnung, Blutzucker kontrollieren, Injektionsorte wechseln.", "الصلة التمريضية: في السكري النوع 1 ينقص الإنسولين: بدونه يرتفع السكر ويحدث حماض كيتوني. وكثرة الإنسولين أو قلة الأكل تسبب نقص السكر. الإنسولين دائماً بأمر الطبيب مع قياس السكر وتغيير مواضع الحقن.")}</p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="hormone-table">
        <h2 className="text-lg font-bold">{t("Hormondrüsen im Überblick (Tabelle)", "نظرة على الغدد الصماء (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Die Spalte „Modell“ zeigt, welche Drüsen im 3D-Modell enthalten sind.", "عمود «النموذج» يبين أي الغدد موجودة في النموذج.")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead><tr className="border-b border-line text-left"><th className="p-1">{t("Organ", "العضو")}</th><th className="p-1">{t("Hormone", "الهرمونات")}</th><th className="p-1">{t("Modell", "النموذج")}</th></tr></thead>
            <tbody>{HORM.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td><td className="p-1">{r[4] === "nicht im Modell" ? t("nicht im Modell", "غير موجود") : r[4] === "im Modell" ? t("im Modell", "موجود") : r[4]}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
