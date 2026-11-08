"use client";
import { useLang } from "@/lib/i18n";

/**
 * SCHEMATISCHE Lernhilfen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D Rückenmark, periphere Nerven und
 * Nervenzellen nicht enthält: Neuron mit Synapse, Reflexbogen mit Rückenmark-Querschnitt, Tabelle der zwölf Hirnnerven.
 */
const useT = () => { const lang = useLang(); return (de: string, ar: string) => (lang === "ar" ? ar : de); };

const CN: [string, string, string, string][] = [
  ["I", "N. olfactorius", "Riechnerv", "الشمّ"],
  ["II", "N. opticus", "Sehnerv", "البصر"],
  ["III", "N. oculomotorius", "Augenbewegung, Pupillenverengung, Lidhebung", "حركة العين وتضييق الحدقة ورفع الجفن"],
  ["IV", "N. trochlearis", "Augenbewegung (oberer schräger Muskel)", "حركة العين (العضلة المائلة العلوية)"],
  ["V", "N. trigeminus", "Gesichtsgefühl, Kaumuskeln", "إحساس الوجه وعضلات المضغ"],
  ["VI", "N. abducens", "Augenbewegung nach außen", "حركة العين للخارج"],
  ["VII", "N. facialis", "Mimik, Geschmack vordere Zunge, Tränen- und Speicheldrüsen", "تعابير الوجه وتذوق مقدمة اللسان والدمع واللعاب"],
  ["VIII", "N. vestibulocochlearis", "Hören und Gleichgewicht", "السمع والتوازن"],
  ["IX", "N. glossopharyngeus", "Schlucken, Geschmack hintere Zunge, Rachengefühl", "البلع وتذوق مؤخرة اللسان وحس البلعوم"],
  ["X", "N. vagus", "Parasympathikus für Herz und Verdauung, Kehlkopf, Schlucken", "الجهاز نظير الودي للقلب والهضم والحنجرة والبلع"],
  ["XI", "N. accessorius", "Kopfdrehen und Schulterheben", "إدارة الرأس ورفع الكتف"],
  ["XII", "N. hypoglossus", "Zungenbewegung", "حركة اللسان"],
];

export function NervousSchemas() {
  const t = useT();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-4" data-testid="nervous-schemas">
      <div className="rounded-xl border border-line bg-surface p-4" data-testid="neuron-schema">
        <h2 className="text-lg font-bold">{t("Nervenzelle und Synapse (Schema)", "الخلية العصبية والمشبك (رسم تخطيطي)")}</h2>
        <p className="text-sm text-muted">{t("Schematische Lernzeichnung, nicht maßstabsgetreu. Nervenzellen sind im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي. الخلايا العصبية غير موجودة في النموذج ثلاثي الأبعاد.")}</p>
        <svg viewBox="0 0 640 220" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema einer Nervenzelle", "رسم خلية عصبية")}>
          <g stroke="#6a4a8a" strokeWidth="3" fill="none"><path d="M 40 60 L 80 90 M 40 130 L 80 110 M 50 95 L 80 100" /></g>
          <circle cx="110" cy="100" r="32" fill="#c9a8e0" stroke="#6a4a8a" strokeWidth="3" />
          <circle cx="110" cy="100" r="11" fill="#6a4a8a" />
          <line x1="142" y1="100" x2="470" y2="100" stroke="#6a4a8a" strokeWidth="6" />
          {[190, 270, 350, 430].map((x) => <rect key={x} x={x - 25} y="90" width="50" height="20" rx="10" fill="#f0e6d6" stroke="#b09a7a" strokeWidth="2" />)}
          <g stroke="#6a4a8a" strokeWidth="3" fill="none"><path d="M 470 100 L 505 80 M 470 100 L 505 120" /></g>
          <circle cx="512" cy="78" r="8" fill="#e08a4a" /><circle cx="512" cy="122" r="8" fill="#e08a4a" />
          <path d="M 540 60 Q 600 100 540 140" fill="#c9a8e0" stroke="#6a4a8a" strokeWidth="3" />
          <g fontSize="12" fill="currentColor" textAnchor="middle">
            <text x="55" y="45">{t("Dendriten", "الزوائد الشجيرية")}</text>
            <text x="110" y="152">{t("Zellkörper", "جسم الخلية")}</text>
            <text x="310" y="78">{t("Axon mit Markscheide", "المحور مع غمد الميالين")}</text>
            <text x="310" y="132">{t("Ranvier-Schnürringe: Impuls springt", "عقد رانفييه: يقفز الدفع")}</text>
            <text x="512" y="52">{t("Synapse", "المشبك")}</text>
            <text x="590" y="168">{t("Folgezelle", "الخلية التالية")}</text>
          </g>
          <text x="320" y="200" fontSize="12" textAnchor="middle" fill="currentColor">{t("Am Ende setzen Bläschen Botenstoffe frei (z. B. Acetylcholin, Dopamin) und binden an Rezeptoren der Folgezelle.", "في النهاية تُطلق الحويصلات النواقل (مثل الأستيل كولين والدوبامين) فترتبط بمستقبلات الخلية التالية.")}</text>
        </svg>
        <p className="mt-2 text-sm">{t("Pflegebezug: Bei Multipler Sklerose wird die Markscheide zerstört, die Leitung verlangsamt sich. Bei Parkinson fehlt Dopamin als Botenstoff.", "الصلة التمريضية: في التصلب المتعدد يتلف غمد الميالين فيبطؤ التوصيل. وفي باركنسون ينقص الدوبامين كناقل.")}</p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="reflex-schema">
        <h2 className="text-lg font-bold">{t("Reflexbogen mit Rückenmark-Querschnitt (Schema)", "القوس الانعكاسي ومقطع النخاع الشوكي (رسم تخطيطي)")}</h2>
        <p className="text-sm text-muted">{t("Schematisch. Rückenmark und periphere Nerven sind im 3D-Modell nicht enthalten.", "تخطيطي. النخاع الشوكي والأعصاب المحيطية غير موجودة في النموذج ثلاثي الأبعاد.")}</p>
        <svg viewBox="0 0 640 260" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={t("Schema eines Reflexbogens", "رسم قوس انعكاسي")}>
          <ellipse cx="320" cy="120" rx="95" ry="80" fill="#f0e6d6" stroke="#b09a7a" strokeWidth="3" />
          <path d="M 320 120 C 270 90 250 50 300 40 C 320 70 320 95 320 120 C 320 95 320 70 340 40 C 390 50 370 90 320 120 C 370 150 390 190 340 200 C 320 170 320 145 320 120 C 320 145 320 170 300 200 C 250 190 270 150 320 120 Z" fill="#b8a0d0" stroke="#6a4a8a" strokeWidth="2" />
          <g stroke="#2a7ab8" strokeWidth="4" fill="none" markerEnd="url(#a)"><path d="M 60 40 L 240 40 L 300 80" /></g>
          <g stroke="#d8554a" strokeWidth="4" fill="none"><path d="M 340 170 L 400 215 L 580 215" /></g>
          <circle cx="40" cy="40" r="16" fill="#f0c8a0" stroke="#a87a4a" strokeWidth="2" />
          <rect x="580" y="196" width="46" height="38" rx="8" fill="#d8706a" />
          <g fontSize="12" fill="currentColor">
            <text x="20" y="75">{t("Rezeptor (Haut, Sehne)", "المستقبل (الجلد، الوتر)")}</text>
            <text x="90" y="30" fill="#2a7ab8">{t("sensibel (afferent) → Hinterhorn", "حسي (وارد) ← القرن الخلفي")}</text>
            <text x="410" y="205" fill="#d8554a">{t("motorisch (efferent) ← Vorderhorn", "حركي (صادر) ← القرن الأمامي")}</text>
            <text x="575" y="250">{t("Muskel", "العضلة")}</text>
            <text x="260" y="130">{t("graue Substanz", "المادة الرمادية")}</text>
            <text x="360" y="60">{t("weiße Substanz außen", "المادة البيضاء خارجاً")}</text>
          </g>
        </svg>
        <p className="mt-2 text-sm">{t("Beim Eigenreflex (z. B. Patellarsehnenreflex) wird der Impuls im Rückenmark direkt auf die motorische Zelle umgeschaltet, ohne das Gehirn. Ein fehlender Reflex weist auf eine Schädigung des Bogens oder Nervs hin. Ein Querschnitt hoch im Rückenmark führt zur Lähmung unterhalb der Verletzung; Pflege: Dekubitus-, Kontrakturen-, Blasen- und Darmmanagement, Beobachtung auf autonome Dysreflexie.", "في المنعكس الذاتي (مثل منعكس وتر الرضفة) ينتقل الدفع في النخاع مباشرة إلى الخلية الحركية دون الدماغ. وغياب المنعكس يدل على إصابة القوس أو العصب. والقطع العالي في النخاع يسبب شللاً تحت موضع الإصابة؛ التمريض: الوقاية من قرح الضغط والتقفع وتدبير المثانة والأمعاء ومراقبة خلل المنعكس اللاإرادي.")}</p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-4" data-testid="cranial-table">
        <h2 className="text-lg font-bold">{t("Die zwölf Hirnnerven (Tabelle)", "الأعصاب القحفية الاثنا عشر (جدول)")}</h2>
        <p className="text-sm text-muted">{t("Nur der Sehnerv (II) ist im 3D-Modell enthalten. Merkhilfe der Prüfung: Pupillen (II, III), Augenbewegung (III, IV, VI), Gesicht (V, VII), Schlucken (IX, X).", "العصب البصري (II) فقط موجود في النموذج. للفحص: الحدقتان (II وIII) وحركة العين (III وIV وVI) والوجه (V وVII) والبلع (IX وX).")}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead><tr className="border-b border-line text-left"><th className="p-1">#</th><th className="p-1">Nervus</th><th className="p-1">{t("Aufgabe", "الوظيفة")}</th></tr></thead>
            <tbody>{CN.map((r) => <tr key={r[0]} className="border-b border-line/50"><td className="p-1 font-semibold">{r[0]}</td><td className="p-1 italic">{r[1]}</td><td className="p-1">{t(r[2], r[3])}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
