"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { cn } from "./ui";

/**
 * Zwei SCHEMATISCHE Lernzeichnungen (nicht maßstabsgetreu, keine Atlasbilder), weil BodyParts3D die Niere als Vollkörper enthält:
 * Aufbau der Niere im Längsschnitt und das Nephron mit Filtration, Rückresorption und Konzentrierung.
 */
type Row = [string, string, string, string, string];
const LG = ["de", "ar", "en", "fr", "tr"];
const useRow = () => { const lang = useLang(); return (r: Row) => r[Math.max(0, LG.indexOf(lang))]; };
interface Info { de: string; la: string; ar: string; t: [string, string] }

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => { try { setR(window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch { /* ignore */ } }, []);
  return r;
}

const NEPH: Record<string, Info> = {
  afferent: { de: "Zuführende Arteriole", la: "Arteriola glomerularis afferens", ar: "الشرينة الواردة", t: ["Bringt das Blut zum Glomerulus. Ihre Weite bestimmt den Filtrationsdruck; sie reagiert auf Blutdruckschwankungen und wird durch Prostaglandine weit gehalten (Vorsicht mit NSAR).", "تجلب الدم إلى الكبيبة. يحدد اتساعها ضغط الترشيح وتستجيب لتغيرات الضغط وتبقيها البروستاغلاندينات متسعة (الحذر من مضادات الالتهاب غير الستيرويدية)."] },
  glomerulus: { de: "Glomerulus (Kapillarknäuel)", la: "Glomerulus", ar: "الكبيبة", t: ["Knäuel aus Kapillaren. Der Blutdruck presst Plasma durch den Filter aus fenestriertem Endothel, Basalmembran und Podozytenfüßen. Blutzellen und große Eiweiße bleiben zurück. Es entstehen etwa 120 ml Primärharn pro Minute (GFR).", "كبّة من الشعيرات. يعصر ضغط الدم البلازما عبر مرشح من بطانة مثقبة وغشاء قاعدي وأقدام الخلايا الأرجلية. وتبقى الخلايا الدموية والبروتينات الكبيرة. ويتكوّن نحو 120 مل بول أولي في الدقيقة (معدل الترشيح الكبيبي)."] },
  bowman: { de: "Bowman-Kapsel", la: "Capsula glomeruli", ar: "محفظة بومان", t: ["Becherförmige Hülle um den Glomerulus, die das Filtrat (Primärharn) auffängt und in den proximalen Tubulus leitet. Glomerulus und Kapsel bilden zusammen das Nierenkörperchen.", "غلاف كأسي حول الكبيبة يستقبل المرشَّح (البول الأولي) ويوجهه إلى الأنبوب الداني. وتشكل الكبيبة والمحفظة معاً الجسيم الكلوي."] },
  efferent: { de: "Abführende Arteriole", la: "Arteriola glomerularis efferens", ar: "الشرينة الصادرة", t: ["Führt das gefilterte Blut aus dem Glomerulus ab und bildet danach ein zweites Kapillarnetz um die Tubuli. Dass sie enger ist als die zuführende, hält den Druck im Glomerulus hoch.", "تنقل الدم المرشَّح بعيداً عن الكبيبة ثم تكوّن شبكة شعيرية ثانية حول الأنابيب. وكونها أضيق من الواردة يحافظ على ارتفاع الضغط في الكبيبة."] },
  macula: { de: "Juxtaglomerulärer Apparat", la: "Apparatus juxtaglomerularis (Macula densa)", ar: "الجهاز المجاور للكبيبة", t: ["Wo der distale Tubulus die Arteriolen berührt, messen Zellen den Salzgehalt und den Druck. Bei Blutdruckabfall oder Salzmangel schütten sie Renin aus: Das startet das Renin-Angiotensin-Aldosteron-System, das den Blutdruck anhebt.", "حيث يلامس الأنبوب القاصي الشرينات تقيس الخلايا الملح والضغط. وعند هبوط الضغط أو نقص الملح تفرز الرينين فيبدأ نظام الرينين-أنجيوتنسين-ألدوستيرون الذي يرفع الضغط."] },
  proximal: { de: "Proximaler Tubulus", la: "Tubulus proximalis", ar: "الأنبوب الداني", t: ["Hier werden etwa zwei Drittel von Wasser und Natrium, fast die gesamte Glukose, Aminosäuren und kleine Eiweiße zurückgewonnen. Steigt die Blutglukose über etwa 180 mg/dl, reicht die Transportkapazität nicht mehr: Zucker erscheint im Urin (Glukosurie).", "هنا يُسترجع نحو ثلثي الماء والصوديوم وتقريباً كل الغلوكوز والأحماض الأمينية والبروتينات الصغيرة. وإذا ارتفع سكر الدم فوق نحو 180 ملغ/دل لا تكفي قدرة النقل فيظهر السكر في البول (بيلة سكرية)."] },
  descending: { de: "Henle-Schleife, absteigender Teil", la: "Pars descendens ansae nephroni", ar: "عروة هنلي، الجزء النازل", t: ["Die Wand ist durchlässig für Wasser, aber kaum für Salze. Weil das Nierenmark salzreich ist, strömt Wasser aus dem Harn heraus, der Harn wird konzentrierter.", "جدارها منفذ للماء لا للأملاح تقريباً. ولأن لبّ الكلية غني بالملح يخرج الماء من البول فيزداد تركيزه."] },
  ascending: { de: "Henle-Schleife, aufsteigender Teil", la: "Pars ascendens ansae nephroni", ar: "عروة هنلي، الجزء الصاعد", t: ["Wasserundurchlässig; Salze (Natrium, Kalium, Chlorid) werden aktiv herausgepumpt. So bleibt das Mark salzreich (Gegenstromprinzip). Schleifendiuretika wie Furosemid hemmen diesen Transport und führen zu starker Harnausscheidung.", "لا ينفذ منها الماء؛ وتُضخ الأملاح (الصوديوم والبوتاسيوم والكلوريد) بنشاط إلى الخارج. وهكذا يبقى اللب غنياً بالملح (مبدأ التيار المعاكس). وتثبّط مدرات العروة كالفوروسيميد هذا النقل فيزداد إدرار البول بشدة."] },
  distal: { de: "Distaler Tubulus", la: "Tubulus distalis", ar: "الأنبوب القاصي", t: ["Feineinstellung des Salz- und Säure-Basen-Haushalts. Aldosteron steigert die Natriumrückresorption und die Kaliumausscheidung. Thiaziddiuretika wirken hier; auch H⁺ wird ausgeschieden.", "الضبط الدقيق للأملاح والحموضة. يزيد الألدوستيرون إعادة امتصاص الصوديوم وإفراز البوتاسيوم. وتعمل المدرات الثيازيدية هنا، ويُطرح أيضاً H⁺."] },
  collecting: { de: "Sammelrohr", la: "Tubulus colligens", ar: "القناة الجامعة", t: ["Sammelt den Harn mehrerer Nephrone. Das Hormon ADH baut Wasserkanäle (Aquaporine) ein: Wasser wird zurückgewonnen, der Harn wird konzentriert. Fehlt ADH (Diabetes insipidus), entsteht große Mengen verdünnter Urin. Aldosteron-Gegenspieler wie Spironolacton wirken hier.", "تجمع بول عدة نفرونات. يُدخل هرمون ADH قنوات الماء (أكوابورين) فيُستعاد الماء ويتركز البول. وعند نقص ADH (السكري الكاذب) يُطرح بول مخفف بكمية كبيرة. وتعمل هنا مضادات الألدوستيرون كالسبيرونولاكتون."] },
  peritubular: { de: "Peritubuläre Kapillaren", la: "Capillaria peritubularia", ar: "الشعيرات حول الأنبوبية", t: ["Das Kapillarnetz nach der abführenden Arteriole umspinnt die Tubuli. Es nimmt die zurückgewonnenen Stoffe auf und gibt Substanzen zur Ausscheidung an die Tubuli ab (Sekretion, z. B. von Medikamenten).", "الشبكة الشعيرية بعد الشرينة الصادرة تلتف حول الأنابيب. تستقبل المواد المسترجعة وتعطي الأنابيب مواد للطرح (الإفراز، مثلاً الأدوية)."] },
  urine: { de: "Endharn", la: "Urina", ar: "البول النهائي", t: ["Aus etwa 180 Litern Primärharn werden etwa 1,5 Liter Endharn pro Tag. Er enthält Harnstoff, Kreatinin, Salze, Säuren und Medikamentenreste. Eiweiß, Blut oder Zucker im Urin sind Warnzeichen.", "من نحو 180 لتراً من البول الأولي يتكوّن نحو 1.5 لتر من البول النهائي يومياً. ويحتوي على اليوريا والكرياتينين والأملاح والأحماض وبقايا الأدوية. ووجود بروتين أو دم أو سكر في البول علامات إنذار."] },
};
const NSTEPS: { id: number; t: Row; seg: string[] }[] = [
  { id: 1, t: ["1 Filtration", "1 الترشيح", "1 Filtration", "1 Filtration", "1 Filtrasyon"], seg: ["afferent", "glomerulus", "bowman", "efferent"] },
  { id: 2, t: ["2 Rückresorption", "2 إعادة الامتصاص", "2 Reabsorption", "2 Réabsorption", "2 Geri emilim"], seg: ["proximal", "descending", "ascending", "peritubular"] },
  { id: 3, t: ["3 Feineinstellung", "3 الضبط الدقيق", "3 Fine tuning", "3 Réglage fin", "3 İnce ayar"], seg: ["macula", "distal"] },
  { id: 4, t: ["4 Konzentrierung", "4 التركيز", "4 Concentration", "4 Concentration", "4 Konsantrasyon"], seg: ["collecting", "urine"] },
  { id: 0, t: ["Alles", "الكل", "All", "Tout", "Tümü"], seg: [] },
];
const FLOW = "M 168 150 C 190 160 190 190 170 205 S 215 235 232 215 S 262 215 262 240 L 262 340 Q 262 362 288 362 Q 314 362 314 340 L 314 200 C 314 160 346 150 362 172 S 410 182 422 152 S 450 130 480 130 L 480 372";

export function NephronSchema() {
  const T = useRow();
  const reduced = useReduced();
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState<string | null>("glomerulus");
  const [anim, setAnim] = useState(true);
  const run = anim && !reduced;
  const on = (k: string) => step === 0 || NSTEPS.find((s) => s.id === step)!.seg.includes(k);
  const op = (k: string) => (on(k) ? 1 : 0.22);
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": NEPH[k].de, opacity: op(k), onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(k); } } });
  const info = sel ? NEPH[sel] : null;
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="neph-schema">
      <h2 className="text-lg font-bold">{T(["Nephron: Filtration, Rückresorption, Konzentrierung (Schema)", "النفرون: الترشيح وإعادة الامتصاص والتركيز (رسم تخطيطي)", "Nephron: filtration, reabsorption, concentration (schematic)", "Néphron : filtration, réabsorption, concentration (schéma)", "Nefron: filtrasyon, geri emilim, konsantrasyon (şema)"])}</h2>
      <p className="text-sm text-muted">{T(["Schematische Lernzeichnung, nicht maßstabsgetreu. Das Nephron ist mikroskopisch klein und im 3D-Modell nicht enthalten.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي. النفرون مجهري وغير موجود في النموذج ثلاثي الأبعاد.", "Schematic learning drawing, not to scale. The nephron is microscopic and not part of the 3D model.", "Dessin pédagogique schématique, hors échelle. Le néphron n'est pas dans le modèle 3D.", "Şematik öğrenme çizimi, ölçeksiz. Nefron 3B modelde yoktur."])}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {NSTEPS.map((s) => (
          <button key={s.id} onClick={() => setStep(s.id)} aria-pressed={step === s.id} data-testid={`neph-step-${s.id}`} className={cn("min-h-9 rounded-lg border px-3 text-sm", step === s.id ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{T(s.t)}</button>
        ))}
        <button onClick={() => setAnim((a) => !a)} aria-pressed={!run} className="min-h-9 rounded-lg border border-line px-3 text-sm hover:bg-surface2">{run ? T(["Animation anhalten", "إيقاف الحركة", "Pause animation", "Pause", "Duraklat"]) : T(["Animation starten", "تشغيل الحركة", "Start animation", "Lancer l'animation", "Animasyonu başlat"])}</button>
      </div>
      <svg viewBox="0 0 640 400" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={T(["Schema eines Nephrons", "رسم تخطيطي لنفرون", "Schematic of a nephron", "Schéma d'un néphron", "Nefron şeması"])}>
        {/* Peritubuläre Kapillaren */}
        <g {...hot("peritubular")}>
          <path d={FLOW} fill="none" stroke="#d8413a" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" {...ring("peritubular")} />
          <path d="M 70 200 C 90 260 150 270 230 270 S 360 300 390 240 S 450 230 560 200" fill="none" stroke="#d8413a" strokeWidth="3" strokeDasharray="2 5" />
        </g>
        {/* Arteriolen */}
        <g {...hot("afferent")}><path d="M 8 80 C 50 80 80 100 104 120" fill="none" stroke="#c4362f" strokeWidth="14" strokeLinecap="round" {...ring("afferent")} /></g>
        <g {...hot("efferent")}><path d="M 104 160 C 80 190 50 215 8 215" fill="none" stroke="#7a2a5a" strokeWidth="9" strokeLinecap="round" {...ring("efferent")} /></g>
        {/* Bowman-Kapsel und Glomerulus */}
        <g {...hot("bowman")}><circle cx="130" cy="140" r="52" fill="#fbf2dd" stroke="#c9a84e" strokeWidth="5" {...ring("bowman")} /></g>
        <g {...hot("glomerulus")}>
          <circle cx="130" cy="140" r="34" fill="#d8413a" stroke="#8a2420" strokeWidth="2" {...ring("glomerulus")} />
          <path d="M 108 130 q 12 -14 24 0 t 24 6 M 106 148 q 14 12 26 -2 t 20 8 M 118 118 q 10 10 22 4" fill="none" stroke="#f3a199" strokeWidth="2.5" />
        </g>
        {/* Tubulus */}
        <g {...hot("proximal")}><path d="M 168 150 C 190 160 190 190 170 205 S 215 235 232 215 S 262 215 262 240" fill="none" stroke="#e0a64a" strokeWidth="13" strokeLinecap="round" {...ring("proximal")} /></g>
        <g {...hot("descending")}><path d="M 262 240 L 262 340 Q 262 362 288 362" fill="none" stroke="#6fb0d6" strokeWidth="11" strokeLinecap="round" {...ring("descending")} /></g>
        <g {...hot("ascending")}><path d="M 288 362 Q 314 362 314 340 L 314 200" fill="none" stroke="#3f7fa8" strokeWidth="11" strokeLinecap="round" {...ring("ascending")} /></g>
        <g {...hot("distal")}><path d="M 314 200 C 314 160 346 150 362 172 S 410 182 422 152 S 450 130 480 130" fill="none" stroke="#8fbf6a" strokeWidth="11" strokeLinecap="round" {...ring("distal")} /></g>
        <g {...hot("collecting")}><path d="M 480 130 L 480 372" fill="none" stroke="#b98ad6" strokeWidth="16" strokeLinecap="round" {...ring("collecting")} /></g>
        <g {...hot("macula")}><circle cx="318" cy="182" r="13" fill="none" stroke="#2a8a7a" strokeWidth="3" strokeDasharray="4 3" {...ring("macula")} /></g>
        <g {...hot("urine")}><rect x="446" y="376" width="68" height="18" rx="9" fill="#f2d86a" stroke="#a88a12" {...ring("urine")} /><text x="480" y="389" fontSize="10" textAnchor="middle" fill="#5a4a00">{T(["Endharn", "البول النهائي", "Urine", "Urine", "İdrar"])}</text></g>
        {/* Fluss */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} r="4" fill="#fff6c8" stroke="#a88a12" strokeWidth="1" cx={run ? undefined : 168 + i * 6} cy={run ? undefined : 150 + i * 4} opacity={step === 0 || step === 1 || step === 2 || step === 3 || step === 4 ? 0.95 : 0}>
            {run && <animateMotion dur="14s" begin={`${-i * 2.3}s`} repeatCount="indefinite" path={FLOW} />}
          </circle>
        ))}
        {/* Wasserrückgewinnung im Sammelrohr */}
        {(step === 0 || step === 4) && [0, 1, 2].map((i) => (
          <circle key={`w${i}`} r="4" fill="#7ec4ea" cx={run ? undefined : 520} cy={run ? undefined : 180 + i * 40}>
            {run && <animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path={`M 484 ${190 + i * 40} L 560 ${190 + i * 40}`} />}
          </circle>
        ))}
        {/* Beschriftungen */}
        <text x="10" y="64" fontSize="11" fill="currentColor">{T(["Arterie (zu)", "شريان (وارد)", "Afferent", "Afférente", "Afferent"])}</text>
        <text x="10" y="236" fontSize="11" fill="currentColor">{T(["Arteriole (ab)", "شرينة (صادرة)", "Efferent", "Efférente", "Efferent"])}</text>
        <text x="96" y="76" fontSize="11" fill="currentColor">{T(["Nierenkörperchen", "الجسيم الكلوي", "Renal corpuscle", "Corpuscule rénal", "Renal korpüskül"])}</text>
        <text x="150" y="258" fontSize="11" fill="currentColor">{T(["proximal", "داني", "proximal", "proximal", "proksimal"])}</text>
        <text x="206" y="352" fontSize="11" fill="currentColor" textAnchor="end">{T(["Henle-Schleife", "عروة هنلي", "Loop of Henle", "Anse de Henlé", "Henle kıvrımı"])}</text>
        <text x="380" y="214" fontSize="11" fill="currentColor">{T(["distal", "قاصٍ", "distal", "distal", "distal"])}</text>
        <text x="500" y="260" fontSize="11" fill="currentColor">{T(["Sammelrohr", "القناة الجامعة", "Collecting duct", "Tube collecteur", "Toplayıcı kanal"])}</text>
        <text x="486" y="170" fontSize="10" fill="currentColor" opacity="0.85">{T(["Wasser zurück (ADH)", "الماء يعود (ADH)", "water back (ADH)", "eau récupérée (ADH)", "su geri (ADH)"])}</text>
      </svg>
      <p className="mt-1 text-xs text-muted">{T(["Tippe auf Teile der Zeichnung oder wähle einen Schritt.", "المس أجزاء الرسم أو اختر خطوة.", "Tap parts of the drawing or pick a step.", "Touchez les éléments ou choisissez une étape.", "Çizimin parçalarına dokunun veya bir adım seçin."])}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Object.keys(NEPH).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-2.5 text-xs", sel === k ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{NEPH[k].de}</button>
        ))}
      </div>
      {info && (
        <div className="mt-3 rounded-lg bg-surface2 p-3" data-testid="neph-info">
          <h3 className="font-semibold">{info.de}</h3>
          <p className="text-sm italic text-muted">{info.la}</p>
          <p dir="rtl" lang="ar" className="text-sm font-semibold text-teal">{info.ar}</p>
          <p className="mt-1 text-sm">{info.t[0]}</p>
          <p dir="rtl" lang="ar" className="mt-1 text-sm text-muted">{info.t[1]}</p>
        </div>
      )}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[420px] text-sm">
          <caption className="mb-1 text-left text-xs font-semibold text-muted">{T(["Richtwerte (Erwachsene, gesund)", "قيم تقريبية (بالغ سليم)", "Typical values (healthy adult)", "Valeurs indicatives (adulte sain)", "Tipik değerler (sağlıklı yetişkin)"])}</caption>
          <tbody>
            {([
              [["Nephrone pro Niere", "عدد النفرونات في الكلية", "Nephrons per kidney", "Néphrons par rein", "Böbrek başına nefron"], "≈ 1 Mio."],
              [["Nierendurchblutung (beide Nieren)", "تروية الكليتين", "Renal blood flow (both)", "Débit sanguin rénal", "Böbrek kan akımı"], "≈ 1,2 l/min (20–25 % HZV)"],
              [["Glomeruläre Filtrationsrate (GFR)", "معدل الترشيح الكبيبي", "Glomerular filtration rate", "Débit de filtration glomérulaire", "Glomerüler filtrasyon hızı"], "≈ 120 ml/min"],
              [["Primärharn pro Tag", "البول الأولي يومياً", "Primary urine per day", "Urine primitive par jour", "Günlük primer idrar"], "≈ 180 l"],
              [["Endharn pro Tag", "البول النهائي يومياً", "Final urine per day", "Urine définitive par jour", "Günlük son idrar"], "≈ 1–1,5 l"],
            ] as [Row, string][]).map(([l, v], i) => (
              <tr key={i} className="border-b border-line"><td className="py-1">{T(l)}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const KID: Record<string, Info> = {
  capsule: { de: "Nierenkapsel", la: "Capsula fibrosa renis", ar: "المحفظة الليفية للكلية", t: ["Dünne, feste Bindegewebshülle direkt auf der Niere. Außen folgen die Fettkapsel und die Nierenfaszie, die die Niere im Nierenlager halten. Bei starkem Gewichtsverlust kann die Niere absinken (Senkniere).", "غلاف ضام رقيق ومتين مباشرة على الكلية. وخارجه المحفظة الدهنية والصفاق الكلوي اللذان يثبّتان الكلية في موضعها. وعند فقدان وزن شديد قد تهبط الكلية (الكلية المتدلية)."] },
  cortex: { de: "Nierenrinde", la: "Cortex renalis", ar: "قشرة الكلية", t: ["Äußere Schicht mit den Nierenkörperchen (Glomeruli) und den gewundenen Tubuli. Hier beginnt die Harnbildung. Sie reicht als Nierensäulen zwischen die Pyramiden.", "الطبقة الخارجية وفيها الجسيمات الكلوية (الكبيبات) والأنابيب الملتوية. هنا يبدأ تكوين البول. وتمتد كأعمدة كلوية بين الأهرامات."] },
  pyramid: { de: "Nierenmark (Markpyramiden)", la: "Medulla renalis (Pyramides renales)", ar: "لب الكلية (الأهرامات الكلوية)", t: ["Etwa acht bis zehn Pyramiden aus Henle-Schleifen und Sammelrohren, gestreift im Aussehen. Hier wird der Harn durch das Gegenstromprinzip konzentriert.", "نحو ثمانية إلى عشرة أهرامات من عُرى هنلي والقنوات الجامعة بمظهر مخطط. وهنا يتركز البول بمبدأ التيار المعاكس."] },
  column: { de: "Nierensäule", la: "Columna renalis", ar: "العمود الكلوي", t: ["Rindengewebe zwischen den Markpyramiden. Durch die Säulen ziehen die Gefäße zur Rinde.", "نسيج قشري بين أهرامات اللب. وتسير عبر الأعمدة الأوعية نحو القشرة."] },
  papilla: { de: "Nierenpapille", la: "Papilla renalis", ar: "الحليمة الكلوية", t: ["Spitze einer Markpyramide. Aus ihr tropft der fertige Harn in den Nierenkelch. Bei Analgetika-Missbrauch kann die Papille absterben (Papillennekrose).", "رأس الهرم اللبّي. يقطر منه البول النهائي إلى الكأس الكلوي. وقد تموت الحليمة عند الإفراط في المسكنات (نخر حليمي)."] },
  calyx: { de: "Nierenkelche", la: "Calices renales minores et majores", ar: "الكؤوس الكلوية", t: ["Kleine Kelche fangen den Harn an den Papillen auf und münden in große Kelche. Diese vereinigen sich zum Nierenbecken.", "كؤوس صغرى تلتقط البول عند الحليمات وتصب في كؤوس كبرى تلتقي لتكوّن الحويضة."] },
  pelvis: { de: "Nierenbecken", la: "Pelvis renalis", ar: "حويضة الكلية", t: ["Trichter, der den Harn sammelt und zum Harnleiter weiterleitet. Eine Entzündung heißt Pyelonephritis (Fieber, Flankenschmerz, Schüttelfrost); bei Harnstau weitet es sich (Hydronephrose).", "قمع يجمع البول ويمرره إلى الحالب. والتهابه هو التهاب الحويضة والكلية (حمى وألم خاصرة وقشعريرة)، وعند احتباس البول يتوسع (استسقاء الكلية)."] },
  ureter: { de: "Harnleiter", la: "Ureter", ar: "الحالب", t: ["Führt den Harn zur Blase (siehe 3D-Modell). Der Abgang vom Nierenbecken ist die erste Engstelle.", "ينقل البول إلى المثانة (انظر النموذج ثلاثي الأبعاد). ومنشؤه من الحويضة هو التضيق الأول."] },
  hilum: { de: "Nierenhilus mit Gefäßen", la: "Hilum renale (Arteria und Vena renalis)", ar: "سرة الكلية والأوعية", t: ["Eintrittspforte für Nierenarterie und Austritt für Nierenvene und Harnleiter (von vorn nach hinten: Vene, Arterie, Nierenbecken).", "بوابة دخول الشريان الكلوي وخروج الوريد الكلوي والحالب (من الأمام إلى الخلف: الوريد ثم الشريان ثم الحويضة)."] },
};

export function KidneySectionSchema() {
  const T = useRow();
  const [sel, setSel] = useState<string | null>("pyramid");
  const info = sel ? KID[sel] : null;
  const ring = (k: string) => (sel === k ? { stroke: "#ffd24a", strokeWidth: 4 } : {});
  const hot = (k: string) => ({ onClick: () => setSel(k), style: { cursor: "pointer" } as const, role: "button" as const, tabIndex: 0, "aria-label": KID[k].de, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(k); } } });
  const ANG = [128, 168, 208, 248];
  const BEAN = "M 330 62 C 250 14 120 36 92 140 C 68 232 118 336 232 340 C 306 343 338 302 334 252 C 330 228 292 218 292 186 C 292 154 328 142 334 118 C 338 100 336 80 330 62 Z";
  return (
    <div className="rounded-xl border border-line bg-surface p-4" data-testid="kidney-schema">
      <h2 className="text-lg font-bold">{T(["Nierenaufbau im Längsschnitt (Schema)", "بنية الكلية في مقطع طولي (رسم تخطيطي)", "Kidney structure in longitudinal section (schematic)", "Structure du rein en coupe (schéma)", "Böbrek yapısı, boyuna kesit (şema)"])}</h2>
      <p className="text-sm text-muted">{T(["Schematische Lernzeichnung, nicht maßstabsgetreu. Das 3D-Modell zeigt die Niere als Vollkörper ohne Innenaufbau.", "رسم تعليمي تخطيطي وليس بمقياس حقيقي. النموذج ثلاثي الأبعاد يعرض الكلية جسماً مصمتاً بلا بنية داخلية.", "Schematic learning drawing, not to scale. The 3D model shows the kidney as a solid body without internal structure.", "Dessin schématique hors échelle. Le modèle 3D montre le rein plein.", "Şematik çizim, ölçeksiz. 3B model böbreği içi dolu gösterir."])}</p>
      <svg viewBox="0 0 640 380" className="mt-3 w-full rounded-lg bg-[#f4efe9] dark:bg-[#1d2a33]" role="img" aria-label={T(["Schema eines Nierenlängsschnitts", "رسم مقطع طولي للكلية", "Schematic kidney section", "Coupe schématique du rein", "Böbrek kesiti şeması"])}>
        <g {...hot("cortex")}><path d={BEAN} fill="#d98a72" {...ring("cortex")} /></g>
        <g {...hot("capsule")}><path d={BEAN} fill="none" stroke={sel === "capsule" ? "#ffd24a" : "#7a3a2c"} strokeWidth="5" /></g>
        {ANG.map((a, i) => (
          <g key={a} transform={`translate(292 190) rotate(${a})`} {...hot("pyramid")}>
            <polygon points="26,0 112,-34 112,34" fill="#a64a3a" stroke={sel === "pyramid" ? "#ffd24a" : "#7a2f24"} strokeWidth={sel === "pyramid" ? 4 : 1.5} />
            <path d="M 40 0 L 108 -22 M 40 0 L 108 0 M 40 0 L 108 22" stroke="#c9765f" strokeWidth="1.5" fill="none" />
            <g {...hot("papilla")}><circle cx="24" cy="0" r="7" fill="#f2d86a" stroke={sel === "papilla" ? "#ffd24a" : "#a88a12"} strokeWidth={sel === "papilla" ? 4 : 1.5} /></g>
            <text x="0" y="0" fontSize="0">{i}</text>
          </g>
        ))}
        <g {...hot("column")}><circle cx="188" cy="104" r="9" fill="#d98a72" stroke={sel === "column" ? "#ffd24a" : "#7a3a2c"} strokeWidth={sel === "column" ? 4 : 1} /></g>
        {/* Kelche und Becken */}
        <g {...hot("calyx")}>
          <path d="M 270 150 L 292 176 M 262 188 L 292 188 M 268 228 L 292 200 M 292 176 L 322 186 M 292 200 L 322 192" fill="none" stroke="#f2d86a" strokeWidth="11" strokeLinecap="round" {...ring("calyx")} />
        </g>
        <g {...hot("pelvis")}><path d="M 316 172 L 352 188 L 316 208 Z" fill="#f2d86a" stroke="#a88a12" strokeWidth="2" {...ring("pelvis")} /></g>
        <g {...hot("ureter")}><path d="M 348 192 C 380 230 372 290 392 360" fill="none" stroke="#e8d27a" strokeWidth="10" strokeLinecap="round" {...ring("ureter")} /></g>
        <g {...hot("hilum")}>
          <path d="M 560 130 C 480 140 420 160 332 168" fill="none" stroke="#c4362f" strokeWidth="9" strokeLinecap="round" {...ring("hilum")} />
          <path d="M 560 250 C 480 232 420 214 332 208" fill="none" stroke="#4a5fa8" strokeWidth="11" strokeLinecap="round" />
        </g>
        <text x="570" y="124" fontSize="11" fill="currentColor" textAnchor="end">{T(["Nierenarterie", "الشريان الكلوي", "Renal artery", "Artère rénale", "Renal arter"])}</text>
        <text x="570" y="274" fontSize="11" fill="currentColor" textAnchor="end">{T(["Nierenvene", "الوريد الكلوي", "Renal vein", "Veine rénale", "Renal ven"])}</text>
        <text x="130" y="60" fontSize="11" fill="currentColor">{T(["Rinde", "القشرة", "Cortex", "Cortex", "Korteks"])}</text>
        <text x="200" y="200" fontSize="11" fill="#fff">{T(["Mark", "اللب", "Medulla", "Médulla", "Medulla"])}</text>
        <text x="398" y="350" fontSize="11" fill="currentColor">{T(["Harnleiter", "الحالب", "Ureter", "Uretère", "Üreter"])}</text>
        <text x="408" y="194" fontSize="11" fill="currentColor">← {T(["Nierenbecken", "الحويضة", "Pelvis", "Bassinet", "Pelvis"])}</text>
      </svg>
      <p className="mt-1 text-xs text-muted">{T(["Tippe auf Teile der Zeichnung.", "المس أجزاء الرسم.", "Tap parts of the drawing.", "Touchez les éléments du dessin.", "Çizimin parçalarına dokunun."])}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {Object.keys(KID).map((k) => (
          <button key={k} onClick={() => setSel(k)} aria-pressed={sel === k} className={cn("min-h-9 rounded-lg border px-2.5 text-xs", sel === k ? "border-teal bg-teal/15 font-semibold" : "border-line hover:bg-surface2")}>{KID[k].de}</button>
        ))}
      </div>
      {info && (
        <div className="mt-3 rounded-lg bg-surface2 p-3" data-testid="kidney-info">
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

export function UrinarySchemas() {
  return (
    <div className="space-y-4">
      <KidneySectionSchema />
      <NephronSchema />
    </div>
  );
}
