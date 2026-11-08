"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * Zwei klar gekennzeichnete SCHEMATA (kein 3D-Modell, nicht maßstabsgetreu), weil BodyParts3D keine weiblichen Fortpflanzungsorgane enthält:
 * weibliche Organe (Frontalschnitt, Schema) und Zyklusdiagramm. Inhalte sind Standardwissen der Anatomie und Physiologie.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

interface Part { de: string; la: string; ar: string; fn: [string, string]; kl: [string, string] }
const F: Record<string, Part> = {
  ovary: { de: "Eierstock", la: "Ovarium", ar: "المبيض", fn: ["Bildet Eizellen (Follikelreifung, Eisprung) und die Hormone Östrogen und Progesteron. Etwa 1 bis 2 Millionen Anlagen bei Geburt, einige hundert Eisprünge im Leben.", "ينتج البويضات (نضج الجريبات والإباضة) والإستروجين والبروجسترون. نحو 1 إلى 2 مليون جريب عند الولادة وبضع مئات من الإباضات في العمر."], kl: ["Zysten, Ovarialkarzinom (spät erkannt), polyzystisches Ovarsyndrom (PCOS). Akute Unterbauchschmerzen: auch Ovarialtorsion bedenken, Arzt.", "الأكياس وسرطان المبيض (يُكتشف متأخراً) ومتلازمة المبيض المتعدد الكيسات. ألم أسفل البطن الحاد: التفكير بالتواء المبيض وإبلاغ الطبيب."] },
  tube: { de: "Eileiter", la: "Tuba uterina", ar: "قناة فالوب", fn: ["Fängt die Eizelle auf und transportiert sie zur Gebärmutter; Befruchtung findet meist im äußeren Drittel statt.", "تلتقط البويضة وتنقلها نحو الرحم؛ ويحدث الإخصاب غالباً في الثلث الخارجي."], kl: ["Eileiterschwangerschaft (Extrauteringravidität): Unterbauchschmerz, Blutung, positiver Schwangerschaftstest; Notfall bei Ruptur (Schock). Eileiterentzündung kann zu Unfruchtbarkeit führen.", "الحمل خارج الرحم: ألم أسفل البطن ونزف واختبار حمل إيجابي؛ طارئ عند التمزق (صدمة). والتهاب القناة قد يسبب العقم."] },
  uterus: { de: "Gebärmutter", la: "Uterus (Corpus uteri)", ar: "الرحم", fn: ["Hohlmuskel (etwa birnengroß), in dem sich der Embryo einnistet und der Fetus wächst; Wehen durch Oxytocin. Innen die Schleimhaut (Endometrium), die sich zyklisch aufbaut und abgestoßen wird.", "عضو عضلي مجوف (بحجم الإجاصة) تتعشش فيه الجنين وينمو؛ والمخاض بتأثير الأوكسيتوسين. في الداخل الغشاء المبطن (بطانة الرحم) الذي يُبنى دورياً ويُطرح."], kl: ["Myome, Endometriose, Endometriumkarzinom (Blutung nach den Wechseljahren abklären). Nach Geburt und Operation: Fundusstand, Blutung (Lochien), Schmerzen beobachten.", "الأورام الليفية والانتباذ البطاني الرحمي وسرطان بطانة الرحم (النزف بعد سن اليأس يُفحص). بعد الولادة والجراحة: ملاحظة ارتفاع قاع الرحم والنزف (النفاس) والألم."] },
  cervix: { de: "Gebärmutterhals", la: "Cervix uteri", ar: "عنق الرحم", fn: ["Verschlussring zur Scheide mit Schleimpfropf; öffnet sich unter der Geburt.", "حلقة إغلاق نحو المهبل مع سدادة مخاطية؛ تنفتح عند الولادة."], kl: ["Zervixkarzinom (meist durch HPV): Vorsorge mit Abstrich (Pap) und HPV-Impfung. Auffälliger Abstrich ärztlich abklären.", "سرطان عنق الرحم (غالباً بسبب HPV): الوقاية بمسحة (بابانيكولاو) ولقاح HPV. المسحة غير الطبيعية تُفحص طبياً."] },
  vagina: { de: "Scheide", la: "Vagina", ar: "المهبل", fn: ["Muskulöser Schlauch (etwa 8 bis 10 cm) als Geschlechtsorgan und Geburtsweg; saures Milieu (Milchsäurebakterien) schützt vor Infektionen.", "أنبوب عضلي (نحو 8 إلى 10 سم) عضو جنسي ومسار الولادة؛ وبيئته الحمضية (بكتيريا حمض اللبن) تحمي من العدوى."], kl: ["Scheideninfektionen (Pilz, bakterielle Vaginose), Ausfluss, Juckreiz, Brennen. Intimpflege ohne Seife, Wasser, Baumwolle. Katheter bei der Frau: Harnröhre liegt vor der Scheide, kurze Harnröhre erhöht Infektionsrisiko (etwa 4 cm).", "التهابات المهبل (فطرية وبكتيرية) وإفرازات وحكة وحرقة. عناية حميمة بالماء دون صابون وقطن. القسطرة عند المرأة: الإحليل أمام المهبل وقصره (نحو 4 سم) يزيد خطر العدوى."] },
};

const PHASES: [string, string, string, string, string][] = [
  ["1 bis 5", "الأيام 1 إلى 5", "Menstruation", "الحيض", "Abstoßung der Gebärmutterschleimhaut; Östrogen und Progesteron niedrig."],
  ["6 bis 13", "الأيام 6 إلى 13", "Follikelphase / Proliferation", "طور الجريب / التكاثر", "FSH reift einen Follikel; Östrogen steigt, Schleimhaut baut sich auf."],
  ["14", "اليوم 14", "Eisprung (Ovulation)", "الإباضة", "LH-Gipfel löst den Eisprung aus; Eizelle etwa 12 bis 24 Stunden befruchtbar."],
  ["15 bis 28", "الأيام 15 إلى 28", "Gelbkörperphase / Sekretion", "الطور الأصفري / الإفراز", "Gelbkörper bildet Progesteron; Schleimhaut bereitet die Einnistung vor; ohne Befruchtung sinken die Hormone, die Regel beginnt."],
];

export function ReproSchemas() {
  const t = useT();
  const [sel, setSel] = useState<string>("uterus");
  const p = F[sel];
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": F[k].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") setSel(k); } });
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="repro-schemas">
      <div className="rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-500/10 p-3 text-sm" data-testid="repro-notice">
        {t("Hinweis: Das 3D-Modell oben zeigt nur männliche Organe. Weibliche Organe sind im Quellmodell nicht enthalten; die folgenden Zeichnungen sind Lernschemata, keine 3D-Atlasbilder.", "تنبيه: النموذج ثلاثي الأبعاد أعلاه يعرض الأعضاء الذكرية فقط. الأعضاء الأنثوية غير موجودة في النموذج المصدر؛ والرسوم التالية مخططات تعليمية وليست صور أطلس ثلاثية الأبعاد.")}
      </div>
      <div className="rounded-xl border border-line bg-surface p-4" data-testid="female-schema">
        <h2 className="text-lg font-bold">{t("Weibliche Organe (Schema, kein 3D-Modell)", "الأعضاء الأنثوية (مخطط، ليس نموذجاً ثلاثي الأبعاد)")}</h2>
        <p className="text-sm text-muted">{t("Frontalschnitt, schematisch, nicht maßstabsgetreu. Teile antippen.", "مقطع أمامي تخطيطي وليس بمقياس حقيقي. اضغط على الأجزاء.")}</p>
        <svg viewBox="0 0 640 360" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema der weiblichen Organe", "مخطط الأعضاء الأنثوية")}>
          <g {...hot("tube")}><path d="M 250 90 C 170 70 120 90 100 130 M 390 90 C 470 70 520 90 540 130" stroke="#d88a8a" strokeWidth="14" fill="none" strokeLinecap="round" {...ring("tube")} /></g>
          <g {...hot("ovary")}><ellipse cx="85" cy="150" rx="30" ry="22" fill="#f0c890" stroke="#a87a3a" strokeWidth="2" {...ring("ovary")} /><ellipse cx="555" cy="150" rx="30" ry="22" fill="#f0c890" stroke="#a87a3a" strokeWidth="2" {...ring("ovary")} /></g>
          <g {...hot("uterus")}><path d="M 250 90 Q 320 60 390 90 L 370 210 L 270 210 Z" fill="#e8a0a8" stroke="#a84a5a" strokeWidth="3" {...ring("uterus")} /><path d="M 285 110 Q 320 95 355 110 L 345 190 L 295 190 Z" fill="#c0505a" opacity="0.55" /></g>
          <g {...hot("cervix")}><rect x="290" y="210" width="60" height="38" rx="8" fill="#d87a8a" stroke="#a84a5a" strokeWidth="3" {...ring("cervix")} /></g>
          <g {...hot("vagina")}><path d="M 280 248 L 360 248 L 372 330 L 268 330 Z" fill="#f0b8c0" stroke="#a84a5a" strokeWidth="3" {...ring("vagina")} /></g>
          <g fontSize="12" fill="currentColor"><text x="20" y="196">{t("Eierstock", "المبيض")}</text><text x="150" y="70">{t("Eileiter", "قناة فالوب")}</text><text x="395" y="140">{t("Gebärmutter", "الرحم")}</text><text x="360" y="234">{t("Gebärmutterhals", "عنق الرحم")}</text><text x="380" y="300">{t("Scheide", "المهبل")}</text><text x="300" y="150" fill="#fff">{t("Schleimhaut", "البطانة")}</text></g>
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">{Object.keys(F).map((k) => <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-3 text-sm", sel === k ? "border-teal bg-teal/10" : "border-line")}>{t(F[k].de, F[k].ar)}</button>)}</div>
        <div className="mt-3 text-sm" data-testid="female-detail">
          <h3 className="font-semibold">{t(p.de, p.ar)} <span className="italic text-muted">({p.la})</span></h3>
          <p className="mt-1">{t(p.fn[0], p.fn[1])}</p>
          <p className="mt-2"><strong>{t("Klinik und Pflege: ", "السريرية والتمريض: ")}</strong>{t(p.kl[0], p.kl[1])}</p>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="cycle-table">
        <h2 className="text-lg font-bold">{t("Menstruationszyklus (28 Tage, Schema)", "الدورة الشهرية (28 يوماً، مخطط)")}</h2>
        <p className="text-sm text-muted">{t("Idealisierter Zyklus; die Länge schwankt individuell (etwa 25 bis 35 Tage).", "دورة مثالية؛ والطول يتفاوت فردياً (نحو 25 إلى 35 يوماً).")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead><tr className="border-b border-line text-left"><th className="p-1">{t("Tage", "الأيام")}</th><th className="p-1">{t("Phase", "الطور")}</th><th className="p-1">{t("Geschehen", "ما يحدث")}</th></tr></thead>
            <tbody>{PHASES.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{t(r[0], r[1])}</td><td className="p-1">{t(r[2], r[3])}</td><td className="p-1">{r[4]}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-2 text-sm">{t("Pflegebezug: Zyklus und letzte Regel in der Anamnese erfragen; vor Medikamentengabe oder Röntgen an eine mögliche Schwangerschaft denken. Wechseljahre (Menopause) etwa um das 50. Lebensjahr: Hitzewallungen, Osteoporoserisiko.", "الصلة التمريضية: السؤال عن الدورة وآخر حيض في التاريخ المرضي؛ والتفكير بإمكان الحمل قبل إعطاء الأدوية أو الأشعة. سن اليأس نحو عمر 50: هبات حرارة وخطر هشاشة العظام.")}</p>
      </div>
    </div>
  );
}
