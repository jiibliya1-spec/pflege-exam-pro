/**
 * Lernbibliothek: kurze Lektionen zu Krankheiten (Krankheitslehre) und zur Pflegeausbildung.
 * Das sind Lernhilfen der App in einfachem Deutsch – KEIN Buchtext. Sie ersetzen kein Lehrbuch;
 * Anordnungen, Dosierungen und Hausstandards des Betriebs gehen immer vor.
 */
import { KRANK_PLUS } from "./lessonsPlusKrank";
import { MODELLE_LESSONS } from "./lessonsModelle";
import { RECHT_LESSONS } from "./lessonsRecht";
import { BUCH_KRANK_1 } from "./lessonsBuchKrank1";
import { BUCH_KRANK_2 } from "./lessonsBuchKrank2";
import { BUCH_PFLEGE } from "./lessonsBuchPflege";
import { ASSESSMENT_LESSONS } from "./lessonsAssessment";
import { AUSBILDUNG_PLUS } from "./lessonsPlusAusbildung";
import { NEW_LESSONS_1 } from "./lessonsNew1";
import { NEW_LESSONS_2 } from "./lessonsNew2";
import { EXTRA } from "./lessonsExtra";
import { BUCH_NEU_1 } from "./lessonsBuchNeu1";
import { BUCH_NEU_2 } from "./lessonsBuchNeu2";
import { WHO, type Who } from "./lessonsWho";
import type { Diagram } from "./diagram";

export type LessonGroup = "krank" | "ausbildung";

export interface LessonBlock {
  h: string;
  li: string[];
}
export interface Lesson {
  id: string;
  group: LessonGroup;
  /** Organsystem bzw. Themenbereich */
  area: string;
  title: string;
  icon: string;
  /** Kurze Zusammenfassung auf Arabisch */
  ar: string;
  blocks: LessonBlock[];
  /** Ein bis zwei Lern-Diagramme (Ablauf, Vergleich, Stufen ...) */
  diagrams?: Diagram[];
  /** Patientengruppen (Kinder, Frauen, Männer, Erwachsene, alle) – nur bei Krankheits-Lektionen */
  who?: Who[];
}

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const AREAS: Record<LessonGroup, { id: string; label: string; icon: string }[]> = {
  krank: [
    { id: "herz", label: "Herz und Kreislauf", icon: "Heart" },
    { id: "atmung", label: "Atmung", icon: "Wind" },
    { id: "stoffwechsel", label: "Stoffwechsel", icon: "Droplet" },
    { id: "nerven", label: "Nerven und Gehirn", icon: "Brain" },
    { id: "bewegung", label: "Bewegungsapparat", icon: "Bone" },
    { id: "verdauung", label: "Verdauung und Leber", icon: "Utensils" },
    { id: "niere", label: "Niere und Harnwege", icon: "Droplets" },
    { id: "psyche", label: "Psyche", icon: "CloudRain" },
    { id: "infektion", label: "Infektionen", icon: "Bug" },
    { id: "notfall", label: "Notfälle", icon: "Siren" },
    { id: "haut", label: "Haut und Wunden", icon: "Bandage" },
    { id: "schmerz", label: "Schmerz und Palliativ", icon: "Feather" },
    { id: "blut", label: "Blut und Immunsystem", icon: "Droplet" },
    { id: "sinne", label: "Augen und Ohren", icon: "Eye" },
    { id: "geschlecht", label: "Geschlechtsorgane", icon: "Flower2" },
  ],
  ausbildung: [
    { id: "start", label: "Ausbildung und Prüfung", icon: "GraduationCap" },
    { id: "pflege", label: "Pflegen und Vorbeugen", icon: "BedDouble" },
    { id: "kommunikation", label: "Kommunikation", icon: "MessageCircle" },
    { id: "recht", label: "Recht und Verantwortung", icon: "Scale" },
    { id: "qualitaet", label: "Qualität und Standards", icon: "ChartBar" },
    { id: "ethik", label: "Ethik und Beruf", icon: "Compass" },
    { id: "gesundheit", label: "Gesundheit der Pflegenden", icon: "Dumbbell" },
    { id: "system", label: "Gesundheitswesen", icon: "Landmark" },
    { id: "modelle", label: "Pflegemodelle und Theorien", icon: "Puzzle" },
    { id: "mensch", label: "Mensch, Team und Kommunikation", icon: "Users" },
    { id: "technik", label: "Pflegetechniken", icon: "Syringe" },
    { id: "lebensphasen", label: "Lebensphasen", icon: "Sprout" },
    { id: "therapie", label: "Therapie und besondere Situationen", icon: "Hospital" },
    { id: "konzepte", label: "Pflegekonzepte", icon: "HandHelping" },
    { id: "assessment", label: "Assessment und Einschätzung", icon: "ClipboardCheck" },
  ],
};

const BASE_LESSONS: Lesson[] = [
  // ───────── Krankheitslehre ─────────
  {
    id: "hypertonie", group: "krank", area: "herz", title: "Bluthochdruck (Hypertonie)", icon: "Stethoscope",
    ar: "ارتفاع ضغط الدم: غالباً بدون أعراض لكنه يرفع خطر السكتة والنوبة القلبية. التمريض: قياس منتظم، الأدوية، تقليل الملح.",
    blocks: [
      B("Was ist das?", "Der Blutdruck ist dauerhaft zu hoch: ab 140/90 mmHg bei wiederholten Messungen.", "Oft gibt es lange keine Beschwerden. Deshalb wird die Krankheit leicht übersehen."),
      B("Mögliche Folgen", "Schlaganfall und Herzinfarkt", "Herzschwäche (Herzinsuffizienz)", "Nierenschäden und Augenschäden"),
      B("Zeichen, die man ernst nehmen muss", "Starke Kopfschmerzen, Schwindel, Sehstörungen, Nasenbluten oder Atemnot. Dann sofort die Pflegefachkraft oder den Arzt informieren."),
      B("Pflege und Beratung", "Blutdruck regelmäßig messen und dokumentieren (immer am gleichen Arm, in Ruhe).", "Medikamente pünktlich geben und auf Nebenwirkungen achten.", "Beraten: Salz reduzieren, Gewicht senken, Bewegung, Rauchstopp, wenig Alkohol."),
    ],
  },
  {
    id: "herzinsuffizienz", group: "krank", area: "herz", title: "Herzschwäche (Herzinsuffizienz)", icon: "Heart",
    ar: "قصور القلب: القلب لا يضخ بشكل كافٍ. أعراض: ضيق نفس، وذمات، زيادة وزن. التمريض: وزن يومي، جدول السوائل، رفع الجزء العلوي.",
    blocks: [
      B("Was ist das?", "Das Herz pumpt nicht genug Blut. Der Körper wird schlechter versorgt und Wasser staut sich."),
      B("Typische Zeichen", "Atemnot bei Belastung, später auch in Ruhe oder beim Liegen", "Wasser in den Beinen (Ödeme)", "Schnelle Gewichtszunahme, Müdigkeit, nächtlicher Harndrang"),
      B("Pflege", "Täglich wiegen: morgens, nüchtern, nach dem Wasserlassen, gleiche Waage.", "Ein- und Ausfuhr bilanzieren, Trinkmenge nach ärztlicher Anordnung.", "Bei Atemnot den Oberkörper hochlagern.", "Beine beobachten (Schwellung, Haut) und Medikamente, z. B. Entwässerungstabletten, nach Anordnung geben.", "Gewichtszunahme von mehr als 1 kg über Nacht oder 2 kg in 3 Tagen melden."),
    ],
  },
  {
    id: "herzinfarkt", group: "krank", area: "herz", title: "Herzinfarkt", icon: "Ambulance",
    ar: "النوبة القلبية: انسداد شريان تاجي. ألم صدر وتعرق وخوف. إسعاف 112 فوراً، رفع الجزء العلوي، عدم ترك المريض وحده.",
    blocks: [
      B("Was ist das?", "Ein Herzkranzgefäß ist verschlossen. Ein Teil des Herzmuskels bekommt kein Blut mehr und stirbt ab."),
      B("Typische Zeichen", "Starker Druck oder Enge in der Brust, auch Ausstrahlung in Arm, Kiefer, Rücken oder Oberbauch", "Kaltschweißigkeit, Übelkeit, Todesangst, Atemnot", "Bei Frauen, älteren Menschen und Diabetikern oft untypisch: nur Übelkeit, Oberbauchschmerz oder Erschöpfung"),
      B("Was tun?", "Sofort Notruf 112 und das Team informieren.", "Oberkörper hochlagern, enge Kleidung öffnen, Ruhe vermitteln, nicht allein lassen.", "Vitalzeichen messen, Zeitpunkt des Beginns notieren.", "Medikamente nur nach ärztlicher Anordnung geben."),
    ],
  },
  {
    id: "pavk", group: "krank", area: "herz", title: "Durchblutungsstörung der Beine (pAVK)", icon: "Footprints",
    ar: "مرض الشرايين الطرفية: ألم الساق عند المشي. الرعاية: فحص القدمين، لا تدفئة بالقوة، الإقلاع عن التدخين.",
    blocks: [
      B("Was ist das?", "Die Arterien der Beine sind verengt (meist durch Arteriosklerose). Die Muskeln bekommen zu wenig Blut.", "Risiken: Rauchen, Diabetes, Bluthochdruck, hohe Blutfette."),
      B("Zeichen", "Schmerzen in der Wade beim Gehen. Nach einer Pause wird es besser („Schaufensterkrankheit“).", "Später Schmerzen auch in Ruhe, kalte, blasse Füße, schlecht heilende Wunden."),
      B("Pflege", "Füße täglich ansehen: Wunden, Druckstellen, Farbe, Temperatur.", "Gut passende Schuhe, vorsichtige Fußpflege.", "Keine Wärmflasche und kein heißes Fußbad: Das Gefühl ist oft gestört, Verbrennungsgefahr.", "Gehtraining nach Anleitung, Rauchstopp beraten."),
    ],
  },
  {
    id: "thrombose", group: "krank", area: "herz", title: "Thrombose und Lungenembolie", icon: "Droplet",
    ar: "الجلطة الوريدية: تورم وألم في ساق واحدة. الخطر: انصمام رئوي. لا تدلّك الساق، بلّغ الطبيب. الوقاية: حركة وجوارب ضاغطة.",
    blocks: [
      B("Was ist das?", "Ein Blutgerinnsel verstopft eine tiefe Beinvene.", "Löst es sich, kann es in die Lunge wandern: Lungenembolie."),
      B("Zeichen der Thrombose", "Einseitige Schwellung, Spannungsgefühl oder Schmerz im Bein", "Überwärmte, gerötete oder bläuliche Haut"),
      B("Zeichen der Lungenembolie", "Plötzliche Atemnot, Brustschmerz, schneller Puls, Angst. Das ist ein Notfall."),
      B("Bei Verdacht", "Das Bein nicht massieren und nicht bewegen lassen, bis der Arzt entschieden hat.", "Sofort die Pflegefachkraft oder den Arzt informieren."),
      B("Vorbeugen (Thromboseprophylaxe)", "Früh mobilisieren und Beine bewegen, genug trinken.", "Kompressionsstrümpfe richtig anlegen.", "Blutverdünnende Spritzen nur nach ärztlicher Anordnung."),
    ],
  },
  {
    id: "asthma", group: "krank", area: "atmung", title: "Asthma bronchiale", icon: "Wind",
    ar: "الربو: التهاب مزمن في الشعب الهوائية بنوبات ضيق نفس وصفير. أثناء النوبة: الهدوء، وضعية جلوس، بخاخ الطوارئ حسب التعليمات.",
    blocks: [
      B("Was ist das?", "Die Atemwege sind chronisch entzündet und reagieren überempfindlich. Es kommt zu Anfällen mit Atemnot."),
      B("Zeichen", "Pfeifendes Atemgeräusch, Husten, Engegefühl, Atemnot (oft nachts oder morgens)", "Auslöser: Allergene, Infekte, Kälte, Anstrengung, Stress"),
      B("Im Anfall", "Ruhe bewahren und beim Patienten bleiben.", "Aufrecht sitzen lassen, z. B. Kutschersitz oder Arme aufstützen. Lippenbremse üben.", "Bedarfsspray nach Anordnung. Wird es nicht besser: Notruf."),
      B("Pflege und Beratung", "Inhalationstechnik prüfen und üben.", "Auslöser erkennen und meiden, Spray immer griffbereit."),
    ],
  },
  {
    id: "copd", group: "krank", area: "atmung", title: "COPD", icon: "Cigarette",
    ar: "الانسداد الرئوي المزمن غالباً بسبب التدخين: سعال وبلغم وضيق نفس. التمريض: تنفس بشفاه مضمومة، تطعيم، أكسجين حسب الأمر الطبي فقط.",
    blocks: [
      B("Was ist das?", "Chronische Verengung der Atemwege, meist durch Rauchen. Sie ist nicht heilbar, aber behandelbar."),
      B("Zeichen", "Husten, Auswurf (besonders morgens), Atemnot bei Belastung, später auch in Ruhe"),
      B("Pflege", "Oberkörper hochlagern, Lippenbremse und Atemübungen anleiten.", "Infekte vorbeugen: Impfungen empfehlen, Hygiene beachten.", "Sauerstoff nur nach ärztlicher Anordnung: Zu viel kann bei COPD gefährlich sein.", "Beim Rauchstopp unterstützen."),
    ],
  },
  {
    id: "pneumonie", group: "krank", area: "atmung", title: "Lungenentzündung (Pneumonie)", icon: "Thermometer",
    ar: "التهاب رئوي: حرارة وسعال وضيق نفس، خطر أكبر عند المسنين والمرضى طريحي الفراش. الوقاية: تحريك وتمارين تنفس وعناية بالفم.",
    blocks: [
      B("Was ist das?", "Entzündung des Lungengewebes, meist durch Bakterien oder Viren."),
      B("Zeichen", "Fieber, Husten mit Auswurf, schnelle Atmung, Atemnot, Schwäche", "Bei alten Menschen manchmal nur Verwirrtheit und Appetitlosigkeit"),
      B("Wer ist gefährdet?", "Ältere, bettlägerige, geschwächte Menschen, Menschen mit Schluckstörung (Aspiration)"),
      B("Pflege und Vorbeugen", "Vitalzeichen und Sauerstoffsättigung beobachten.", "Oberkörper hochlagern, Atemübungen, früh mobilisieren.", "Genug trinken, gute Mundpflege.", "Pneumonieprophylaxe: Atemtraining, Lagerung, Mobilisation."),
    ],
  },
  {
    id: "diabetes", group: "krank", area: "stoffwechsel", title: "Diabetes mellitus", icon: "Droplet",
    ar: "السكري: النوع 1 نقص إنسولين، النوع 2 مقاومة إنسولين. الرعاية: قياس السكر، فحص القدمين، تثقيف، التعرف على الهبوط.",
    blocks: [
      B("Was ist das?", "Der Blutzucker ist zu hoch.", "Typ 1: Die Bauchspeicheldrüse stellt kein Insulin mehr her (meist jung, Insulin ist nötig).", "Typ 2: Der Körper reagiert schlecht auf Insulin (meist später, oft mit Übergewicht)."),
      B("Zeichen bei hohem Zucker", "Viel Durst, häufiges Wasserlassen, Müdigkeit, Infekte, schlecht heilende Wunden"),
      B("Folgeschäden", "Augen, Nieren, Nerven, Gefäße und Füße („diabetischer Fuß“)"),
      B("Pflege", "Blutzucker nach Plan messen und dokumentieren.", "Insulin und Tabletten nur nach Anordnung geben, Spritzstellen wechseln.", "Füße täglich kontrollieren und pflegen.", "Schulen und beraten: Ernährung, Bewegung, Unterzuckerung erkennen."),
    ],
  },
  {
    id: "hypoglykaemie", group: "krank", area: "stoffwechsel", title: "Unterzuckerung (Hypoglykämie)", icon: "Candy",
    ar: "هبوط السكر (أقل من 70 mg/dl): رجفة وتعرق وتشوش. واعٍ: سكر سريع ثم قياس بعد 15 دقيقة. فاقد الوعي: لا شيء بالفم، وضعية جانبية، إسعاف.",
    blocks: [
      B("Was ist das?", "Der Blutzucker ist zu niedrig, meist unter 70 mg/dl (3,9 mmol/l). Das ist ein Notfall."),
      B("Zeichen", "Schwitzen, Zittern, Heißhunger, Unruhe, Herzklopfen", "Später Verwirrtheit, Sprachstörung, Bewusstlosigkeit und Krampfanfall"),
      B("Wenn der Patient wach ist", "Schnell wirksame Kohlenhydrate geben, z. B. Traubenzucker oder Saft (etwa 15 bis 20 g).", "Nach etwa 15 Minuten Blutzucker kontrollieren und wenn nötig wiederholen.", "Danach etwas Langsames essen und den Arzt informieren."),
      B("Wenn der Patient bewusstlos ist", "Nichts in den Mund geben (Erstickungsgefahr).", "Stabile Seitenlage, Notruf, Vitalzeichen überwachen.", "Glukose oder Glukagon nur nach Anordnung."),
    ],
  },
  {
    id: "schlaganfall", group: "krank", area: "nerven", title: "Schlaganfall", icon: "Zap",
    ar: "السكتة الدماغية: كل دقيقة مهمة. علامات FAST: الوجه، الذراع، الكلام، الوقت. اتصل بالإسعاف فوراً ولا تعطِ أكلاً أو شرباً قبل فحص البلع.",
    blocks: [
      B("Was ist das?", "Ein Teil des Gehirns bekommt zu wenig Blut (meist durch ein Gerinnsel) oder es blutet. Jede Minute zählt."),
      B("FAST-Regel", "Face: Gesicht hängt auf einer Seite.", "Arms: ein Arm sinkt ab oder ist schwach.", "Speech: Sprache undeutlich oder verwirrt.", "Time: sofort Notruf 112, Uhrzeit des Beginns notieren."),
      B("Akut", "Nichts essen und trinken lassen, bis das Schlucken geprüft wurde (Aspirationsgefahr).", "Oberkörperlagerung nur nach Anordnung, Vitalzeichen überwachen."),
      B("Danach in der Pflege", "Lähmungen: betroffene Seite beachten, Kontrakturen und Druckgeschwüre vorbeugen.", "Schluckstörung (Dysphagie): Kostform und Ruhe beim Essen.", "Sprachstörung (Aphasie): einfache Sätze, Geduld, Zeit lassen.", "Frühe Mobilisation und Förderung von Selbstständigkeit."),
    ],
  },
  {
    id: "parkinson", group: "krank", area: "nerven", title: "Parkinson", icon: "Puzzle",
    ar: "باركنسون: نقص الدوبامين، رعشة وتيبّس وبطء حركة. الأدوية يجب في وقتها بالضبط. الوقاية من السقوط.",
    blocks: [
      B("Was ist das?", "Im Gehirn fehlt der Botenstoff Dopamin. Die Bewegungen werden langsam und steif."),
      B("Typische Zeichen", "Zittern in Ruhe (Tremor)", "Steifheit (Rigor)", "Langsame, kleine Bewegungen (Bradykinese/Akinese)", "Unsicherer Stand, Sturzgefahr"),
      B("Pflege", "Medikamente zeitgenau geben. Verspätung kann die Beweglichkeit stark verschlechtern.", "Sturzprophylaxe, Gehen mit Hilfe üben.", "Schluck- und Sprechprobleme beobachten, Verstopfung vorbeugen.", "Bei plötzlicher Bewegungsunfähigkeit (akinetische Krise) sofort den Arzt informieren."),
    ],
  },
  {
    id: "ms", group: "krank", area: "nerven", title: "Multiple Sklerose (MS)", icon: "Orbit",
    ar: "التصلب المتعدد: التهاب مزمن في الجهاز العصبي بنوبات. أعراض: اضطراب رؤية وشلل وتشنج وإرهاق. الحرارة قد تزيد الأعراض.",
    blocks: [
      B("Was ist das?", "Entzündliche Erkrankung von Gehirn und Rückenmark. Sie verläuft oft in Schüben."),
      B("Zeichen", "Sehstörungen, Gefühlsstörungen, Lähmungen, Spastik", "Starke Müdigkeit (Fatigue), Blasenstörungen"),
      B("Pflege", "Hitze kann die Beschwerden verschlechtern. Überwärmung vermeiden.", "Kontrakturen und Spastik vorbeugen: Bewegung, richtige Lagerung.", "Pausen einplanen, Blasenentleerung beobachten.", "Seelische Belastung ernst nehmen und Selbstbestimmung stärken."),
    ],
  },
  {
    id: "epilepsie", group: "krank", area: "nerven", title: "Epilepsie und Krampfanfall", icon: "Zap",
    ar: "الصرع: نوبات تشنج متكررة. أثناء النوبة: حماية من الإصابة، لا شيء في الفم، لا تثبيت، سجل المدة. بعدها وضعية جانبية.",
    blocks: [
      B("Was ist das?", "Das Gehirn entlädt sich plötzlich und es kommt zu wiederkehrenden Anfällen."),
      B("Im Anfall", "Ruhe bewahren, Zeit messen.", "Gegenstände wegräumen, Kopf weich lagern.", "Nichts in den Mund stecken, nicht festhalten.", "Beim Patienten bleiben."),
      B("Nach dem Anfall", "Stabile Seitenlage, Atmung und Bewusstsein beobachten.", "Der Patient ist oft verwirrt und müde: ruhig sprechen.", "Notruf, wenn der Anfall länger als etwa 5 Minuten dauert, sich wiederholt oder der Patient verletzt ist."),
      B("Dokumentation", "Beginn, Dauer, Ablauf des Anfalls und was danach war genau aufschreiben."),
    ],
  },
  {
    id: "demenz", group: "krank", area: "nerven", title: "Demenz (z. B. Alzheimer)", icon: "User",
    ar: "الخرف: تراجع الذاكرة والتوجه. الرعاية: روتين ثابت، لغة بسيطة، التقدير (Validation)، عدم التصحيح بقسوة، أمان.",
    blocks: [
      B("Was ist das?", "Das Gedächtnis, das Denken und die Orientierung lassen langsam nach. Die häufigste Form ist Alzheimer."),
      B("Zeichen", "Vergessen, Orientierungsprobleme, Wortfindungsstörungen", "Unruhe, Angst, Rückzug, manchmal Wegläufertendenz"),
      B("Pflege", "Fester Tagesablauf und vertraute Umgebung geben Sicherheit.", "Kurze, einfache Sätze, Blickkontakt, Zeit lassen.", "Nicht ständig korrigieren: Gefühle ernst nehmen (Validation).", "Biografie kennen: Lieblingsessen, Musik, frühere Arbeit.", "Auf Essen, Trinken und Sicherheit achten (Sturz, Weglaufen)."),
    ],
  },
  {
    id: "rheuma", group: "krank", area: "bewegung", title: "Rheumatoide Arthritis", icon: "Hand",
    ar: "الروماتويد: التهاب مزمن في المفاصل، تيبّس صباحي طويل. الرعاية: حماية المفاصل، حركة لطيفة، وسائل مساعدة.",
    blocks: [
      B("Was ist das?", "Chronische Entzündung der Gelenke, oft beidseitig (Finger, Hände, Füße)."),
      B("Zeichen", "Schmerz, Schwellung, Überwärmung der Gelenke", "Morgensteifigkeit, die länger als etwa 30 bis 60 Minuten dauert"),
      B("Pflege", "Gelenke schonen und trotzdem bewegen. Pausen einplanen.", "Hilfsmittel zum Greifen, Anziehen und Essen anbieten.", "Bei akuter Entzündung eher Kälte, bei Steifheit eher Wärme (nach Rücksprache).", "Schmerzen erfragen und weitergeben."),
    ],
  },
  {
    id: "osteoporose", group: "krank", area: "bewegung", title: "Osteoporose", icon: "Bone",
    ar: "هشاشة العظام: العظام ضعيفة وتنكسر بسهولة. الوقاية: كالسيوم وفيتامين D وحركة ومنع السقوط.",
    blocks: [
      B("Was ist das?", "Die Knochen verlieren an Masse und brechen leichter, z. B. Wirbel, Oberschenkelhals, Handgelenk."),
      B("Risiken", "Höheres Alter, Frauen nach den Wechseljahren, Bewegungsmangel, Rauchen, langfristig Kortison"),
      B("Pflege", "Sturzprophylaxe ist der wichtigste Schutz.", "Bewegung, Sonnenlicht, ausreichend Kalzium und Vitamin D in der Ernährung.", "Rückenschmerzen und Größenverlust ernst nehmen."),
    ],
  },
  {
    id: "crohn", group: "krank", area: "verdauung", title: "Morbus Crohn", icon: "Orbit",
    ar: "داء كرون: التهاب مزمن في الجهاز الهضمي بنوبات. أعراض: ألم بطن وإسهال ونقص وزن. الرعاية: التغذية، العناية بالجلد والستوما.",
    blocks: [
      B("Was ist das?", "Chronische Entzündung im Verdauungstrakt, verläuft in Schüben. Sie kann den ganzen Darm betreffen."),
      B("Zeichen", "Bauchschmerzen, Durchfall, Gewichtsverlust, Müdigkeit, manchmal Fieber"),
      B("Pflege", "Gewicht und Ernährung beobachten, auf Flüssigkeit achten.", "Haut am After und rund ums Stoma schützen.", "Bei einem Stoma: Beutelwechsel, Hautpflege und Beratung.", "Scham und Belastung ansprechen, diskret pflegen."),
    ],
  },
  {
    id: "leberzirrhose", group: "krank", area: "verdauung", title: "Leberzirrhose", icon: "Beer",
    ar: "تشمع الكبد: تلف دائم للكبد (كحول، التهاب كبد). علامات: استسقاء، اصفرار، نزيف. الرعاية: وزن ومحيط البطن، مراقبة الوعي، النزيف.",
    blocks: [
      B("Was ist das?", "Die Leber wird bindegewebig umgebaut und arbeitet schlechter. Ursachen sind z. B. Alkohol oder Hepatitis."),
      B("Zeichen", "Bauchwasser (Aszites), Gelbfärbung der Haut, Juckreiz, Müdigkeit", "Blutungsneigung, Gefahr von Blutungen aus Krampfadern der Speiseröhre", "Bei Verschlechterung Verwirrtheit"),
      B("Pflege", "Gewicht und Bauchumfang regelmäßig messen.", "Ein- und Ausfuhr bilanzieren, Vorgaben zu Salz, Flüssigkeit und Eiweiß nach Anordnung beachten.", "Blutungen vorbeugen: weiche Zahnbürste, vorsichtige Rasur.", "Haut schützen, Bewusstsein beobachten.", "Beratung zum Alkoholverzicht, respektvoll und ohne Schuldzuweisung."),
    ],
  },
  {
    id: "harnweg", group: "krank", area: "niere", title: "Harnwegsinfektion", icon: "Droplets",
    ar: "التهاب المسالك البولية: حرقة وتكرار تبول. عند المسنين قد يظهر كارتباك فقط. الرعاية: شرب كافٍ ونظافة وعناية بالقسطرة.",
    blocks: [
      B("Was ist das?", "Entzündung von Blase oder Harnwegen, oft durch Bakterien."),
      B("Zeichen", "Brennen beim Wasserlassen, häufiger Harndrang, trüber oder übelriechender Urin", "Fieber und Flankenschmerz: mögliche Nierenbeckenentzündung, sofort melden", "Bei alten Menschen manchmal nur Verwirrtheit"),
      B("Pflege", "Ausreichend trinken, wenn nichts dagegen spricht.", "Intimpflege von vorn nach hinten.", "Bei Blasenkatheter: strikte Hygiene, geschlossenes System."),
    ],
  },
  {
    id: "niereninsuff", group: "krank", area: "niere", title: "Niereninsuffizienz", icon: "Bean",
    ar: "قصور الكلى: الكلية لا تُرشّح جيداً. أعراض: وذمات وقلة بول وحكة. الرعاية: جدول السوائل، الوزن، حماية ذراع الغسيل الكلوي.",
    blocks: [
      B("Was ist das?", "Die Nieren filtern das Blut nicht mehr ausreichend. Es gibt eine akute und eine chronische Form."),
      B("Zeichen", "Wassereinlagerungen (Ödeme), wenig Urin, Müdigkeit, Juckreiz, Übelkeit"),
      B("Pflege", "Trinkmenge und Ausscheidung bilanzieren, Gewicht kontrollieren.", "Vorgaben zu Flüssigkeit, Kalium und Eiweiß beachten.", "Am Dialyse-Shuntarm kein Blutdruckmessen, keine Blutentnahme und kein Druck.", "Haut pflegen (Juckreiz), Infektionen vorbeugen."),
    ],
  },
  {
    id: "depression", group: "krank", area: "psyche", title: "Depression", icon: "Cloud",
    ar: "الاكتئاب: حزن وفقدان اهتمام وطاقة. الرعاية: الإصغاء، روتين يومي، لا تقل \"اجمع نفسك\". عند أفكار انتحار أخبر الفريق والطبيب فوراً.",
    blocks: [
      B("Was ist das?", "Eine ernste Erkrankung. Traurigkeit, Interessenverlust und Antriebslosigkeit halten über Wochen an."),
      B("Zeichen", "Gedrückte Stimmung, Schlafstörungen, Appetitverlust, Grübeln, Schuldgefühle, Rückzug"),
      B("Pflege", "Zuhören, ernst nehmen, nicht „aufmuntern“ oder abwerten.", "Kleine Schritte und feste Tagesstruktur anbieten.", "Auf Äußerungen von Hoffnungslosigkeit achten und nach Suizidgedanken fragen.", "Bei Suizidgedanken sofort Team und Arzt informieren und den Menschen nicht allein lassen."),
    ],
  },
  {
    id: "mrsa", group: "krank", area: "infektion", title: "MRSA", icon: "Sparkles",
    ar: "MRSA جرثومة مقاومة للمضادات الحيوية تنتقل باليدين. الحماية: تعقيم اليدين، معطف وقفازات، عزل حسب خطة المؤسسة، ومع ذلك اهتمام إنساني.",
    blocks: [
      B("Was ist das?", "Ein Keim (Staphylococcus aureus), gegen den viele Antibiotika nicht wirken. Er wird vor allem über die Hände übertragen."),
      B("Schutzmaßnahmen", "Händedesinfektion vor und nach jedem Kontakt", "Schutzkittel und Handschuhe bei Pflege, nach Hygieneplan der Einrichtung", "Isolierung oder Einzelzimmer, Flächen und Materialien desinfizieren", "Besucher informieren und einweisen"),
      B("Wichtig für den Menschen", "Isolierung darf nicht heißen: Der Mensch wird vergessen. Zeit, Gespräche und Beschäftigung bleiben Teil der Pflege."),
    ],
  },

  // ───────── Ausbildung ─────────
  {
    id: "ausbildung", group: "ausbildung", area: "start", title: "Die Ausbildung im Überblick", icon: "GraduationCap",
    ar: "التكوين: ثلاث سنوات (مدرسة وتدريب عملي) ينتهي بامتحان. الكفاءات مقسّمة إلى خمسة مجالات (I–V).",
    blocks: [
      B("Dauer und Aufbau", "Die generalistische Pflegeausbildung dauert 3 Jahre (Vollzeit).", "Sie besteht aus Unterricht in der Pflegeschule und praktischer Ausbildung in verschiedenen Einsatzorten.", "Mindestens 2100 Stunden Unterricht und 2500 Stunden praktische Ausbildung."),
      B("Abschluss", "Staatliche Prüfung mit schriftlichem, mündlichem und praktischem Teil.", "Berufsbezeichnung: Pflegefachfrau oder Pflegefachmann."),
      B("Die fünf Kompetenzbereiche", "I: Pflegeprozesse und Pflegediagnostik verantwortlich planen, gestalten und steuern", "II: Kommunikation und Beratung personen- und situationsorientiert gestalten", "III: Intra- und interprofessionelles Handeln verantwortlich gestalten", "IV: Das eigene Handeln an Gesetzen, Verordnungen, ethischen Leitlinien und Qualitätskriterien ausrichten", "V: Das eigene Handeln auf der Grundlage von Pflegewissenschaft, Berufsethos und Reflexion begründen"),
    ],
  },
  {
    id: "pruefung", group: "ausbildung", area: "start", title: "Prüfungsaufgaben richtig lösen", icon: "PenLine",
    ar: "كيف تجيب في الامتحان: افهم فعل المهمة (اذكر، صِف، اشرح، علّل، قيّم)، وأجب على الحالة المعطاة وليس كلاماً عاماً.",
    blocks: [
      B("Operatoren: Was verlangt die Aufgabe?", "Nennen: kurz aufzählen, ohne Erklärung.", "Beschreiben: Sachverhalte in eigenen Worten darstellen.", "Erläutern: erklären und mit Beispielen deutlich machen.", "Begründen: Ursachen oder Argumente für eine Aussage angeben.", "Entwickeln: aus den Informationen eine Lösung oder einen Plan ableiten.", "Beurteilen: eine begründete Stellungnahme abgeben."),
      B("So gehst du vor", "Fallsituation genau lesen und Namen, Alter, Ort und Problem markieren.", "Die Aufgabe lesen: Welcher Operator? Wie viele Punkte?", "Auf den Fall bezogen antworten, nicht nur allgemein.", "Die Zahl der Punkte zeigt oft, wie viele Aspekte erwartet werden."),
      B("Tipp", "Stichpunkte in vollständigen, verständlichen Sätzen sind besser als lange Texte ohne Struktur."),
    ],
  },
  {
    id: "pflegeprozess", group: "ausbildung", area: "pflege", title: "Der Pflegeprozess", icon: "RefreshCw",
    ar: "عملية التمريض دورة: جمع المعلومات، تحديد المشكلات، تحديد الأهداف، التخطيط والتنفيذ، ثم التقييم.",
    blocks: [
      B("Die Schritte", "1. Informationen sammeln (Anamnese, Beobachtung, Gespräch)", "2. Probleme und Ressourcen erkennen (Pflegediagnose)", "3. Ziele gemeinsam mit dem Menschen festlegen", "4. Maßnahmen planen und durchführen", "5. Wirkung überprüfen (Evaluation) und anpassen"),
      B("Wichtig", "Ressourcen sind das, was der Mensch noch kann: Sie werden gefördert.", "Ziele müssen konkret und überprüfbar sein.", "Alles wird dokumentiert. Der Prozess ist ein Kreislauf und wird immer wieder neu angepasst."),
    ],
  },
  {
    id: "vitalzeichen", group: "ausbildung", area: "pflege", title: "Vitalzeichen und Normwerte", icon: "Thermometer",
    ar: "العلامات الحيوية: النبض، ضغط الدم، الحرارة، التنفس، تشبع الأكسجين. الأرقام تقريبية، والمرجع تعليمات المؤسسة.",
    blocks: [
      B("Richtwerte beim gesunden Erwachsenen (in Ruhe)", "Puls: etwa 60 bis 80 pro Minute (60 bis 100 gilt als normal).", "Blutdruck: unter 140/90 mmHg.", "Atmung: etwa 12 bis 18 Atemzüge pro Minute.", "Körpertemperatur: etwa 36 bis 37,4 °C.", "Sauerstoffsättigung: etwa 95 bis 100 %.", "Blutzucker nüchtern: etwa 70 bis 100 mg/dl."),
      B("Beim Messen", "Ruhe vor der Messung, immer gleiche Bedingungen, Ergebnis dokumentieren.", "Auffällige Werte und Veränderungen sofort weitergeben.", "Werte sind Richtwerte. Maßgeblich sind die Anordnung und der Standard der Einrichtung."),
    ],
  },
  {
    id: "prophylaxen", group: "ausbildung", area: "pflege", title: "Prophylaxen im Überblick", icon: "ShieldCheck",
    ar: "الوقاية: قرح الضغط، السقوط، الجلطة، الالتهاب الرئوي، التقفّع، الجفاف، الاستنشاق. الأساس: ملاحظة المخاطر مبكراً وتحريك المريض.",
    blocks: [
      B("Dekubitus (Druckgeschwür)", "Risiko erkennen (z. B. bettlägerig, wenig Bewegung, feuchte Haut).", "Druck entlasten: Positionswechsel nach Plan, Hilfsmittel nutzen.", "Haut beobachten, trocken und sauber halten, gut ernähren."),
      B("Sturz", "Stolperfallen beseitigen, gutes Schuhwerk, Licht, Hilfsmittel in Reichweite.", "Beim Gehen begleiten, Medikamente mit Sturzrisiko beachten."),
      B("Thrombose und Pneumonie", "Früh mobilisieren, Bewegung der Beine, Atemübungen, Oberkörper hoch."),
      B("Kontraktur", "Gelenke regelmäßig bewegen und richtig lagern, damit sie nicht versteifen."),
      B("Dehydratation (Austrocknung)", "Trinkmenge beobachten und Trinken anbieten, Getränke erreichbar machen.", "Zeichen: trockene Zunge, stehende Hautfalten, dunkler Urin, Verwirrtheit."),
      B("Aspiration", "Beim Essen aufrecht sitzen, ruhig essen lassen, Schluckstörungen melden."),
    ],
  },
  {
    id: "hygiene", group: "ausbildung", area: "pflege", title: "Hygiene und Händedesinfektion", icon: "Pipette",
    ar: "النظافة: تعقيم اليدين أهم وسيلة لمنع العدوى. اللحظات الخمس: قبل ملامسة المريض، قبل الإجراء المعقم، بعد التعرض لسوائل، بعد المريض، بعد محيطه.",
    blocks: [
      B("Warum?", "Die Hände sind der wichtigste Übertragungsweg für Keime. Händedesinfektion schützt Patienten und Personal."),
      B("Die 5 Momente der Händedesinfektion", "1. Vor Patientenkontakt", "2. Vor einer aseptischen (keimfreien) Tätigkeit", "3. Nach Kontakt mit Körperflüssigkeiten", "4. Nach Patientenkontakt", "5. Nach Kontakt mit der Patientenumgebung"),
      B("Gut zu wissen", "Mittel in ausreichender Menge nehmen, alle Flächen der Hände einreiben und die Einwirkzeit einhalten.", "Handschuhe ersetzen die Händedesinfektion nicht.", "Isolierung und Schutzkleidung richten sich nach dem Hygieneplan der Einrichtung."),
    ],
  },
  {
    id: "sbar", group: "ausbildung", area: "kommunikation", title: "Übergabe mit SBAR", icon: "ClipboardList",
    ar: "نموذج SBAR لتسليم المعلومات: الوضع، الخلفية، التقييم، التوصية. قصير وواضح وبالترتيب.",
    blocks: [
      B("Die vier Teile", "S – Situation: Worum geht es gerade? Wer ist der Patient?", "B – Background: Wichtige Vorgeschichte und Diagnosen", "A – Assessment: Meine Einschätzung, z. B. Vitalzeichen und was auffällt", "R – Recommendation: Was brauche ich oder was schlage ich vor?"),
      B("Warum?", "Informationen kommen vollständig, kurz und in gleicher Reihenfolge an. Das verhindert Missverständnisse."),
      B("Tipp", "Vorher kurz ordnen, laut und klar sprechen, am Ende nachfragen: „Ist das angekommen?“"),
    ],
  },
  {
    id: "kommunikation", group: "ausbildung", area: "kommunikation", title: "Gespräche mit Patienten und Angehörigen", icon: "MessageCircle",
    ar: "التواصل: الإصغاء، أسئلة مفتوحة، لغة بسيطة، التعاطف. مع الأقارب: الاحترام مع حدود السرّ المهني.",
    blocks: [
      B("Grundhaltung", "Respekt, Zeit nehmen, Blickkontakt, ruhige Sprache.", "Aktiv zuhören und Gefühle ernst nehmen."),
      B("Gut fragen", "Offene Fragen („Wie geht es Ihnen damit?“) erzählen mehr als Ja-/Nein-Fragen.", "Einfache Wörter, Fachbegriffe erklären, nachfragen, ob alles verstanden wurde."),
      B("Schwierige Situationen", "Bei Wut oder Ablehnung ruhig bleiben und nach dem Grund fragen.", "Bei Angehörigen die Schweigepflicht beachten: Informationen nur nach Erlaubnis des Patienten oder wenn es rechtlich zulässig ist."),
    ],
  },
  {
    id: "delegation", group: "ausbildung", area: "recht", title: "Delegation und Remonstration", icon: "Scale",
    ar: "التفويض: من يعطي المهمة مسؤول عن اختيار الشخص المناسب، ومن ينفذها مسؤول عن تنفيذها. وإن رأيت خطراً فعليك الاعتراض (Remonstration).",
    blocks: [
      B("Delegation", "Eine Aufgabe wird an eine andere Person übertragen.", "Anordnungsverantwortung: Wer delegiert, prüft, ob die Person dafür geeignet ist.", "Übernahmeverantwortung (Durchführungsverantwortung): Wer die Aufgabe übernimmt, muss sie kompetent und richtig ausführen."),
      B("Remonstration", "Wenn du eine Anweisung für falsch oder gefährlich hältst, darfst du sie nicht einfach ausführen.", "Du teilst deine Bedenken sofort mit (am besten schriftlich) und sprichst mit der verantwortlichen Person.", "Der Patient darf durch deine Verweigerung nicht gefährdet werden: Sag Bescheid, damit die Aufgabe anders gelöst wird."),
      B("Auszubildende", "Auszubildende dürfen nur Aufgaben übernehmen, die sie gelernt haben und sicher können, und nur unter Anleitung, wenn nötig.", "Im Zweifel: nachfragen. Unsicherheit ist kein Fehler."),
    ],
  },
  {
    id: "recht", group: "ausbildung", area: "recht", title: "Schweigepflicht, Einwilligung, Selbstbestimmung", icon: "Lock",
    ar: "السرّ المهني والموافقة وتقرير المصير: لا تُعطِ معلومات دون إذن، واطلب موافقة المريض، واحترم قراره حتى لو خالفك.",
    blocks: [
      B("Schweigepflicht", "Alles, was du über Patienten erfährst, ist vertraulich: Diagnose, Familie, Lebensumstände.", "Sie gilt auch nach Dienstende und gegenüber Freunden und oft gegenüber Angehörigen."),
      B("Einwilligung", "Maßnahmen brauchen grundsätzlich die Zustimmung des Patienten, nachdem er verständlich informiert wurde.", "Ein Patient darf Maßnahmen ablehnen, auch wenn Pflegende es anders sehen. Das wird dokumentiert und dem Team gemeldet."),
      B("Menschen, die nicht entscheiden können", "Dann entscheidet die rechtliche Betreuung oder eine Vorsorgevollmacht. Der mutmaßliche Wille und eine Patientenverfügung zählen.", "Freiheitseinschränkende Maßnahmen (z. B. Bettgitter) brauchen immer eine rechtliche Grundlage und ärztliche Anordnung."),
    ],
  },
  {
    id: "vorbehalt", group: "ausbildung", area: "recht", title: "Vorbehaltene Tätigkeiten", icon: "Pin",
    ar: "مهام محجوزة قانونياً للممرض المؤهل: تقدير الحاجة للرعاية، تنظيم عملية التمريض، وضمان جودتها. لا تُفوَّض.",
    blocks: [
      B("Was ist das?", "Das Pflegeberufegesetz (PflBG) reserviert bestimmte Aufgaben für Pflegefachpersonen. Andere dürfen sie nicht übernehmen."),
      B("Welche Aufgaben?", "Erhebung und Feststellung des individuellen Pflegebedarfs", "Organisation, Gestaltung und Steuerung des Pflegeprozesses", "Analyse, Evaluation, Sicherung und Entwicklung der Qualität der Pflege"),
      B("Warum wichtig?", "Diese Aufgaben dürfen weder Auszubildenden noch Hilfskräften überlassen werden. Sie bleiben bei der Pflegefachperson."),
    ],
  },
];

const PLUS: Record<string, LessonBlock[]> = { ...KRANK_PLUS, ...AUSBILDUNG_PLUS };

function withPlus(l: Lesson): Lesson {
  const extra = PLUS[l.id];
  if (!extra) return l;
  const seen = new Set(l.blocks.map((b) => b.h));
  const add = extra.map((b) => {
    let h = b.h;
    while (seen.has(h)) h += " (Vertiefung)";
    seen.add(h);
    return { ...b, h };
  });
  return { ...l, blocks: [...l.blocks, ...add] };
}

/** Hängt Vertiefungs-Abschnitte und Diagramme aus lessonsExtra an (Überschriften bleiben eindeutig). */
function withExtra(l: Lesson): Lesson {
  const x = EXTRA[l.id];
  if (!x) return l;
  const seen = new Set(l.blocks.map((b) => b.h));
  const add = (x.b ?? []).map((b) => {
    let h = b.h;
    while (seen.has(h)) h += " (2)";
    seen.add(h);
    return { ...b, h };
  });
  return { ...l, blocks: [...l.blocks, ...add], diagrams: x.d ?? l.diagrams };
}

/** Doppelte Kurzfassungen, deren Inhalt in den ausführlichen Lektionen steckt. */
const DROP = new Set(["b-hygiene", "b-prophylaxen", "b-beobachtung-vital"]);

const ALL = [...BASE_LESSONS.map(withPlus), ...NEW_LESSONS_1, ...NEW_LESSONS_2, ...MODELLE_LESSONS, ...RECHT_LESSONS, ...BUCH_KRANK_1, ...BUCH_KRANK_2, ...BUCH_PFLEGE, ...ASSESSMENT_LESSONS, ...BUCH_NEU_1, ...BUCH_NEU_2]
  .filter((l) => !DROP.has(l.id))
  .map(withExtra)
  .map((l) => (WHO[l.id] ? { ...l, who: WHO[l.id] } : l));

/** Sortiert nach Gruppe und Reihenfolge der Bereiche, damit Weiter/Zurück sinnvoll ist. */
export const LESSONS: Lesson[] = (["krank", "ausbildung"] as LessonGroup[]).flatMap((g) =>
  AREAS[g].flatMap((a) => ALL.filter((l) => l.group === g && l.area === a.id)),
);

export function lessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}
