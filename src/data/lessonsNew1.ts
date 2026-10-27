/**
 * Neue Lektionen Teil 1: Notfälle, Wunden, Schmerz und Palliativpflege, Pflegetechniken.
 * Lernhilfe der App in einfachem Deutsch, KEIN Buchtext. Es gelten immer Anordnung und Hausstandard.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const NEW_LESSONS_1: Lesson[] = [
  // ───────── Krankheitslehre: Notfälle ─────────
  {
    id: "reanimation", group: "krank", area: "notfall", title: "Reanimation (Basismaßnahmen)", emoji: "🫀",
    ar: "الإنعاش القلبي الرئوي للبالغين: تحقق من الوعي والتنفس (حتى 10 ثوانٍ)، اتصل بالإسعاف 112، اضغط على منتصف الصدر 100–120 مرة/دقيقة وعمق 5–6 سم، 30 ضغطة ثم 2 تنفستين، واستخدم جهاز AED فوراً.",
    blocks: [
      B("Erkennen", "Ansprechen und vorsichtig an den Schultern rütteln. Keine Reaktion: Atmung prüfen.", "Kopf überstrecken, Kinn anheben, bis zu 10 Sekunden sehen, hören, fühlen.", "Keine normale Atmung (oder nur Schnappatmung): Das ist ein Herz-Kreislauf-Stillstand."),
      B("Handeln: die Reihenfolge", "Notruf 112 absetzen (oder absetzen lassen) und einen AED (Defibrillator) holen lassen.", "Sofort mit der Herzdruckmassage beginnen: Druckpunkt in der Mitte des Brustkorbs (untere Hälfte des Brustbeins).", "Drucktiefe etwa 5 bis 6 cm, Frequenz 100 bis 120 pro Minute, nach jeder Kompression den Brustkorb voll entlasten.", "Verhältnis 30 Herzdruckmassagen zu 2 Beatmungen, wenn man beatmen kann und möchte. Sonst nur Herzdruckmassage."),
      B("Defibrillator (AED)", "Sofort einschalten und den gesprochenen Anweisungen folgen. Klebeelektroden laut Bild aufkleben.", "Während der Analyse und des Schocks niemanden berühren, danach sofort weiter drücken."),
      B("Wichtig im Beruf", "Herzdruckmassage nicht unnötig unterbrechen, Wechsel alle etwa 2 Minuten, wenn mehrere Helfer da sind.", "Patientenverfügung und Reanimationsstatus („DNR“, Nicht-Wiederbelebung) beachten: Sie müssen vorher bekannt und dokumentiert sein. Im Zweifel beginnt man mit der Reanimation.", "Nach dem Ereignis: Dokumentation, Übergabe (SBAR) und Nachbesprechung im Team."),
      B("Kinder (kurz)", "Bei Kindern beginnt man häufig mit 5 Beatmungen, Atemwege sind besonders wichtig. Die Handgriffe werden in speziellen Kursen geübt."),
    ],
  },
  {
    id: "schock", group: "krank", area: "notfall", title: "Schock", emoji: "⚠️",
    ar: "الصدمة: عدم كفاية تروية الأعضاء. العلامات: نبض سريع وضغط منخفض وجلد شاحب بارد ومتعرق وقلق. مؤشر الصدمة = النبض ÷ الضغط الانقباضي (أكثر من 1 خطر). اتصل بالإسعاف وراقب العلامات الحيوية.",
    blocks: [
      B("Was ist ein Schock?", "Die Organe bekommen zu wenig Blut und Sauerstoff. Das ist lebensbedrohlich."),
      B("Arten (Überblick)", "Volumenmangel: starker Blutverlust, Erbrechen, Durchfall, Verbrennung.", "Kardiogen: Herz pumpt zu schwach (z. B. Herzinfarkt).", "Anaphylaktisch: schwere allergische Reaktion.", "Septisch: Blutvergiftung durch Infektion.", "Neurogen: Gefäße weiten sich nach Nervenschaden."),
      B("Zeichen", "Schneller, schwacher Puls, niedriger Blutdruck", "Blasse, kalte, feuchte Haut, später auch Blaufärbung", "Unruhe, Angst, dann Teilnahmslosigkeit, Bewusstseinstrübung", "Schockindex = Puls geteilt durch systolischen Blutdruck. Normal etwa 0,5. Ab 1 ist das ein Warnzeichen."),
      B("Was tun?", "Notruf 112, Ruhe bewahren, nicht allein lassen.", "Bei Volumenmangel: flach lagern mit erhöhten Beinen (Schocklage). Bei Atemnot oder Herzproblemen eher Oberkörper hoch. Im Zweifel nach Anweisung der Leitstelle.", "Blutung stoppen, wärmen, nichts zu essen oder trinken geben.", "Vitalzeichen und Bewusstsein regelmäßig prüfen und aufschreiben."),
    ],
  },
  {
    id: "sepsis", group: "krank", area: "notfall", title: "Sepsis (Blutvergiftung)", emoji: "🦠",
    ar: "الإنتان: استجابة جسم خطيرة لعدوى. علامات: حمى أو انخفاض حرارة، تسارع نبض وتنفس، هبوط ضغط، ارتباك. حالة طوارئ، بلّغ فوراً.",
    blocks: [
      B("Was ist das?", "Eine Infektion führt zu einer gefährlichen Reaktion des ganzen Körpers. Organe können versagen."),
      B("Warnzeichen", "Fieber oder Untertemperatur mit Schüttelfrost", "Schneller Puls, schnelle Atmung", "Niedriger Blutdruck, kalte oder marmorierte Haut", "Neue Verwirrtheit oder Schläfrigkeit (bei alten Menschen oft das erste Zeichen)", "Wenig Urin"),
      B("Schnelle Warnhilfe", "Drei Hinweise sind: Atemfrequenz hoch (etwa 22 oder mehr), systolischer Blutdruck niedrig (etwa 100 oder weniger), verändertes Bewusstsein. Zwei davon sind ein Alarmzeichen."),
      B("Was tun?", "Sofort Arzt oder Notruf informieren (SBAR), Vitalzeichen messen.", "Behandlung im Krankenhaus: Antibiotika und Flüssigkeit möglichst innerhalb der ersten Stunde.", "Vorbeugen: Hygiene, Händedesinfektion, Katheter und Wunden gut pflegen, Infekte früh melden."),
    ],
  },
  {
    id: "verlegung", group: "krank", area: "notfall", title: "Verschlucken und Atemwegsverlegung", emoji: "😮‍💨",
    ar: "الاختناق بجسم غريب: إذا كان السعال فعّالاً شجّعه. إذا لم يفلح: 5 ضربات بين لوحي الكتف ثم 5 ضغطات هايمليخ. إذا فقد الوعي ابدأ الإنعاش.",
    blocks: [
      B("Zeichen", "Plötzlich Husten, Würgen, Luftnot, die Hände greifen zum Hals", "Der Mensch kann nicht mehr sprechen, die Lippen werden bläulich."),
      B("Wenn der Husten wirksam ist", "Zum Husten ermutigen, daneben stehen und beobachten. Nicht auf den Rücken schlagen."),
      B("Wenn der Husten unwirksam ist", "Bis zu fünf kräftige Schläge zwischen die Schulterblätter (vorgebeugt).", "Hilft das nicht: bis zu fünf Heimlich-Handgriffe (von hinten umfassen, Faust zwischen Nabel und Brustbein, nach innen und oben ziehen).", "Wechsel von 5 Schlägen und 5 Handgriffen, Notruf 112 nicht vergessen."),
      B("Wenn die Person bewusstlos wird", "Vorsichtig hinlegen, Notruf, mit der Herz-Lungen-Wiederbelebung beginnen."),
      B("Vorbeugen in der Pflege", "Schluckstörungen erkennen und melden.", "Aufrecht sitzen beim Essen, kleine Bissen, ruhige Umgebung.", "Kostform nach Anordnung, bei Bedarf Logopädie."),
    ],
  },

  // ───────── Krankheitslehre: Wunden und Haut ─────────
  {
    id: "wunden", group: "krank", area: "haut", title: "Wunden und Wundversorgung", emoji: "🩹",
    ar: "الجروح: ثلاث مراحل شفاء (التنظيف، التكوين، التغطية بالبشرة). المراقبة: الموقع والحجم وقاع الجرح والحواف والإفرازات وما حول الجرح. التضميد بتقنية معقمة وتوثيق دقيق.",
    blocks: [
      B("Arten", "Akute Wunden: z. B. Schnitt, Operationswunde, Verbrennung.", "Chronische Wunden: heilen nach etwa 8 Wochen nicht (z. B. Dekubitus, Ulcus cruris, diabetischer Fuß)."),
      B("Phasen der Wundheilung", "1. Reinigungsphase (Exsudation): Die Wunde blutet, sondert Flüssigkeit ab, Abwehrzellen reinigen.", "2. Granulationsphase: neues Gewebe, die Wunde füllt sich auf.", "3. Epithelisierungsphase: Die Haut wächst von den Rändern über die Wunde."),
      B("Was beeinflusst die Heilung?", "Förderlich: gute Durchblutung, Eiweiß, Vitamine, ausreichend Trinken, Hygiene, feuchtes Wundmilieu.", "Hinderlich: Diabetes, Durchblutungsstörungen, Rauchen, Unterernährung, Infektion, Druck."),
      B("Wundbeobachtung und Dokumentation", "Wundlokalisation, Wundgröße, Wundgrund, Wundrand, Wundexsudat (Menge, Farbe, Geruch), Wundumgebung.", "Schmerzen erfragen. Fotos nur mit Einwilligung und nach Hausregeln.", "Dokumentation bei jedem Verband, Veränderungen an Arzt oder Wundexperte melden."),
      B("Infektionszeichen", "Rötung, Schwellung, Überwärmung, Schmerz, Funktionseinschränkung, eitriges Sekret, Geruch, Fieber. Sofort melden."),
      B("Verbandwechsel", "Hygienische Händedesinfektion, Arbeitsfläche desinfizieren, Material steril und vollständig bereitlegen.", "Möglichst ohne Berührung der Wundfläche (No-Touch-Technik), mit sterilen Handschuhen oder Pinzette arbeiten.", "Angebrochene Packungen, die offen gelegen haben oder verschmutzt wurden, gelten nicht mehr als steril."),
      B("Beratung", "Mit dem Menschen besprechen, warum der Verband wichtig ist. Warnzeichen erklären und wer erreichbar ist."),
    ],
  },
  {
    id: "ulcus", group: "krank", area: "haut", title: "Offenes Bein (Ulcus cruris)", emoji: "🦵",
    ar: "قرحة الساق: الوريدية في الجزء الداخلي قرب الكاحل مع تورم، والشريانية على الأصابع والكعب مع ألم وبرودة. العلاج يختلف: الضغط (الربط) مناسب للوريدية فقط بعد التأكد من الشرايين.",
    blocks: [
      B("Zwei häufige Formen", "Venös (Venenschwäche): Wunde meist am Innenknöchel, Beine geschwollen, braune Hautverfärbung, Schmerz bessert sich beim Hochlegen.", "Arteriell (pAVK): Wunde an Zehen, Fersen oder Fußrand, sehr schmerzhaft, Fuß blass und kalt, Schmerz bessert sich beim Tieflagern."),
      B("Behandlung", "Venös: Kompression (Verband oder Strümpfe) und Bewegung, nach Anordnung und nachdem die Arterien geprüft wurden.", "Arteriell: Durchblutung verbessern (Gefäßchirurgie), keine starke Kompression.", "Wundversorgung nach Plan, Schmerzbehandlung, Infektionen früh erkennen."),
      B("Pflege und Beratung", "Beine bewegen, Sprunggelenke kreisen, Beine hochlegen (venös).", "Haut pflegen, Rauchstopp und Gewicht besprechen.", "Auf den Expertenstandard „Pflege von Menschen mit chronischen Wunden“ achten."),
    ],
  },

  // ───────── Krankheitslehre: Schmerz und Palliativ ─────────
  {
    id: "schmerz", group: "krank", area: "schmerz", title: "Schmerz erfassen und lindern", emoji: "😣",
    ar: "الألم هو ما يقوله المريض. استخدم مقياس 0–10 (NRS). عند من لا يتكلم (خرف) استخدم مقاييس ملاحظة. العلاج: خطوات منظمة منظمة الصحة (WHO) مع إجراءات غير دوائية. مع الأفيونات: وقاية من الإمساك.",
    blocks: [
      B("Schmerz erfassen", "Schmerz ist das, was der Mensch sagt. Immer erfragen: Wo? Wie (stechend, brennend, dumpf)? Wie stark? Wann? Was verbessert oder verschlechtert?", "Skalen: numerisch (0 bis 10), visuell (Linie) oder Gesichter.", "Bei Menschen, die nicht sprechen können (z. B. schwere Demenz): Beobachtungsskalen wie BESD nutzen (Gesicht, Atmung, Körpersprache, Laute)."),
      B("Akut oder chronisch", "Akuter Schmerz ist ein Warnsignal und endet meist mit der Ursache.", "Chronischer Schmerz hält länger an (oft über Monate) und braucht Plan, Gespräche und ein Team.", "Zwei wichtige Expertenstandards: „Schmerzmanagement in der Pflege bei akuten Schmerzen oder tumorbedingten chronischen Schmerzen“ und „… bei chronischen nicht tumorbedingten Schmerzen“."),
      B("Medikamente nach WHO-Stufenschema", "Stufe 1: nicht-opioide Schmerzmittel (z. B. Paracetamol, Ibuprofen).", "Stufe 2: schwache Opioide, Stufe 3: starke Opioide, jeweils mit Stufe 1.", "Co-Analgetika (z. B. bei Nervenschmerz) können zusätzlich nötig sein.", "Gabe nach Plan, Wirkung nach etwa 30 bis 60 Minuten prüfen und dokumentieren."),
      B("Opioide: worauf achten?", "Häufige Nebenwirkungen: Verstopfung (gleichzeitig Abführmittel nach Anordnung), Übelkeit, Müdigkeit.", "Warnzeichen für Überdosierung: sehr langsame Atmung, kaum erweckbar: sofort Hilfe holen.", "Pflaster nicht erwärmen (Wärmflasche, Fieber): mehr Wirkstoff wird aufgenommen.", "Betäubungsmittel werden gesichert gelagert und besonders dokumentiert."),
      B("Nichtmedikamentös", "Lagerung, Wärme oder Kälte (nach Anordnung und Verträglichkeit), Entspannung, Ablenkung, Musik, Zuwendung.", "Auch Angst, Einsamkeit und Sorgen verstärken Schmerz."),
    ],
  },
  {
    id: "palliativ", group: "krank", area: "schmerz", title: "Palliativpflege und Sterbebegleitung", emoji: "🕊️",
    ar: "الرعاية التلطيفية: هدفها جودة الحياة وتخفيف الأعراض (ألم، ضيق نفس، قلق) واحترام إرادة المريض. الحضور والاستماع مهمان. الطبيب وحده يثبت الوفاة.",
    blocks: [
      B("Ziel von Palliative Care", "Lebensqualität verbessern, wenn eine Krankheit nicht mehr heilbar ist.", "Körperliche, seelische, soziale und spirituelle Bedürfnisse zusammen betrachten.", "Angehörige einbeziehen und begleiten."),
      B("Wichtige Beschwerden lindern", "Schmerz, Atemnot (Oberkörper hoch, frische Luft, ruhig bleiben), Übelkeit, Unruhe, Angst, Mundtrockenheit.", "Mundpflege: Befeuchten, Lippenpflege, Lieblingsgeschmack. Das ist oft wichtiger als Trinkmenge.", "Rasselatmung in der Sterbephase: Position ändern, nicht routinemäßig absaugen, Angehörige erklären, dass dies für Sterbende meist nicht belastend ist."),
      B("Begleitung", "Zeit schenken, aushalten, zuhören. Du musst nicht immer etwas sagen.", "Wünsche (Religion, Musik, Menschen) erfragen und möglich machen.", "Ein Ritual oder eine Seelsorge anbieten, wenn der Mensch das möchte."),
      B("Haltung zu Sterbephasen", "Das Modell von Kübler-Ross nennt fünf Reaktionen: Leugnen, Zorn, Verhandeln, Depression, Akzeptanz. Sie müssen nicht in dieser Reihenfolge auftreten. Jeder trauert und stirbt auf eigene Weise."),
      B("Rechtlicher Rahmen", "Töten auf Verlangen ist strafbar. Zulässig ist, lebensverlängernde Maßnahmen nicht zu beginnen oder zu beenden, wenn das dem Willen des Menschen entspricht (Patientenverfügung, mutmaßlicher Wille).", "Symptome dürfen konsequent gelindert werden, auch wenn dies unerwünschte Wirkungen haben kann."),
      B("Nach dem Tod", "Den Tod stellt eine Ärztin oder ein Arzt fest. Sichere Todeszeichen sind z. B. Totenflecke und Totenstarre.", "Würde wahren, ruhige Verabschiedung ermöglichen, Dokumentation.", "Eigene Belastung ernst nehmen: Gespräch im Team oder Supervision."),
      B("Versorgungsformen", "Palliativstation, stationäres Hospiz, ambulanter Hospizdienst, spezialisierte ambulante Palliativversorgung (SAPV) zu Hause."),
    ],
  },

  // ───────── Ausbildung: Pflegetechniken ─────────
  {
    id: "medikamente", group: "ausbildung", area: "pflege", title: "Medikamente sicher geben", emoji: "💊",
    ar: "إعطاء الدواء بأمان: قاعدة الـ 10 R (المريض الصحيح، الدواء، الجرعة، الطريقة، الوقت، التوثيق...)، تحقق ثلاث مرات، وأمر طبي كامل. لا تسحق الأدوية ممتدة المفعول. أبلغ عن الأخطاء.",
    blocks: [
      B("Ärztliche Anordnung", "Pflichtangaben: Name der Person, Arzneimittel, Darreichungsform, Art der Anwendung, Dosierung, Zeitpunkt und Unterschrift der Ärztin oder des Arztes.", "Bei Bedarfsmedikation zusätzlich: wann sie gegeben werden darf (Anlass), Einzeldosis und Höchstmenge pro Tag.", "Fehlende oder unklare Angaben: nachfragen, nichts erraten."),
      B("Die 10-R-Regel (Beispiel für eine Liste)", "Richtige Person, richtiges Medikament, richtige Dosis, richtige Anwendungsart, richtiger Zeitpunkt.", "Richtige Dokumentation, richtige Aufbewahrung, richtiges (nicht abgelaufenes) Verfallsdatum, richtige Information an die Person, richtige Kontrolle der Wirkung.", "Je nach Lehrbuch sind die zehn Punkte leicht unterschiedlich benannt. Die Sicherheit ist überall dieselbe."),
      B("Richten und Kontrollieren", "Ruhiger, ungestörter Ort, saubere Arbeitsfläche, Hände desinfizieren.", "Dreimal prüfen: beim Entnehmen, beim Richten, beim Zurückstellen.", "Nur selbst gerichtete Medikamente geben, nicht Medikamente aus fremder Hand.", "Hochrisikomedikamente (z. B. Insulin, Opioide, Gerinnungshemmer) nach Vier-Augen-Prinzip, wenn im Standard vorgesehen."),
      B("Medikamente über die Sonde (z. B. PEG)", "Nur Medikamente geben, die für die Sondengabe geeignet sind. Retard- oder magensaftresistente Tabletten dürfen meist nicht zerkleinert werden.", "Jedes Medikament einzeln geben, vor und nach jedem mit Wasser spülen.", "Nicht in die Sondennahrung mischen.", "Oberkörper hochlagern, Lage der Sonde kontrollieren."),
      B("Nach der Gabe", "Wirkung und Nebenwirkungen beobachten und dokumentieren.", "Fehler (falsche Dosis, falscher Mensch, vergessene Gabe) sofort melden: Arzt informieren, Beobachtung, Dokumentation und Fehlermeldesystem (CIRS).", "Betäubungsmittel nach BtM-Vorgaben lagern und dokumentieren."),
    ],
  },
  {
    id: "absaugen", group: "ausbildung", area: "pflege", title: "Tracheostoma und endotracheales Absaugen", emoji: "🫁",
    ar: "فغر القصبة والشفط: الحجم والنظافة. كل مرة قسطرة معقمة جديدة، ادخلها دون شفط، مدة الشفط حتى 15 ثانية، راقب النبض واللون، وانتبه لخطر العدوى والإصابة.",
    blocks: [
      B("Was ist ein Tracheostoma?", "Eine Öffnung am Hals führt direkt in die Luftröhre. Meist liegt eine Trachealkanüle darin. Die Luft läuft an Nase und Mund vorbei: Sie wird nicht angewärmt und befeuchtet."),
      B("Warum absaugen?", "Wenn die Person Sekret nicht selbst abhusten kann, behindert es die Atmung. Absaugen entfernt es. Nur absaugen, wenn es nötig ist, nicht nach Uhr."),
      B("Vorbereitung und Hygiene", "Hygienische Händedesinfektion, Schutzkleidung, Mundschutz bei Spritzgefahr.", "Steriler Absaugkatheter in passender Größe, für jeden Absaugvorgang ein neuer Katheter.", "Sterile Handschuhe oder steriler Handschuh an der Hand, die den Katheter führt.", "Sitz der Kanüle und Fixierung kontrollieren."),
      B("Durchführung", "Katheter ohne Sog einführen, Sog mit möglichst geringer Stärke einstellen, unter Drehen langsam zurückziehen.", "Absaugdauer höchstens etwa 15 Sekunden. Zwischen den Vorgängen kurz erholen lassen.", "Puls, Hautfarbe, Atmung und Hustenreiz beobachten."),
      B("Mögliche Komplikationen", "Infektion der unteren Atemwege, Schleimhautverletzung, Luftnot, Herzrhythmusstörung (Vagusreiz), Husten oder Erbrechen, Verrutschen der Kanüle.", "Bei Zeichen von Luftnot, Blauwerden oder starkem Husten: Abbruch, Hilfe holen."),
      B("Nachbereitung", "Material entsorgen, Absauggerät nach Plan reinigen, Kanüle und Haut am Stoma pflegen.", "Menge, Farbe und Konsistenz des Sekrets dokumentieren.", "Auszubildende führen das Absaugen nur nach Anleitung, Übung und mit Aufsicht durch."),
    ],
  },
  {
    id: "ernaehrung", group: "ausbildung", area: "pflege", title: "Ernährung, Trinken und Sondenkost", emoji: "🍲",
    ar: "التغذية: افحص خطر سوء التغذية (فقدان وزن، BMI)، شجع على الأكل والشرب بوضعية جلوس مستقيمة، وانتبه لصعوبة البلع. التغذية عبر PEG: وضعية مرتفعة، أدوية منفصلة، نظافة مكان الأنبوب.",
    blocks: [
      B("Mangelernährung erkennen", "Gewichtsverlust (z. B. mehr als 5 % in einem Monat oder 10 % in sechs Monaten), niedriger BMI (unter etwa 18,5), wenig Appetit, Kauprobleme.", "Screening-Bögen (z. B. MNA bei älteren Menschen) helfen. Der Expertenstandard „Ernährungsmanagement“ beschreibt das Vorgehen."),
      B("Maßnahmen", "Wünsche, Gewohnheiten, Religion und Kultur beachten.", "Kleine Portionen, mehrere Zwischenmahlzeiten, Lieblingsspeisen, angereicherte Kost.", "Ruhige Atmosphäre, Hilfe beim Schneiden, geeignetes Besteck, Mundpflege, gut sitzende Zahnprothese."),
      B("Schluckstörung (Dysphagie)", "Zeichen: Husten beim Essen, feuchte Stimme, Speisereste im Mund, langes Kauen.", "Aufrecht sitzen, Kopf leicht nach vorn, kleine Bissen, nicht sprechen beim Essen.", "Kostform (pürriert, angedickt) nach Anordnung. Logopädie einbinden."),
      B("Sondenkost über PEG", "Oberkörper beim Füttern und etwa eine halbe Stunde danach hochlagern (etwa 30 bis 45 Grad).", "Nahrung und Spülung mit passender Geschwindigkeit geben, bei Übelkeit oder Husten stoppen.", "Eintrittsstelle auf Rötung, Schwellung, Sekret und Schmerz kontrollieren und nach Plan pflegen.", "Medikamente getrennt und nach Vorgaben geben (siehe Lektion Medikamente)."),
      B("Trinken", "Richtwert 1,5 bis 2 Liter am Tag, sofern keine Einschränkung besteht.", "Trinken anbieten, sichtbar bereitstellen, an Gewohnheiten anknüpfen (Tee, Suppe, Obst)."),
    ],
  },
  {
    id: "ausscheidung", group: "ausbildung", area: "pflege", title: "Ausscheidung, Inkontinenz und Stoma", emoji: "🚽",
    ar: "الإخراج: أنواع سلس البول (إجهادي، إلحاحي، فيضي، انعكاسي). الوقاية من الإمساك. العناية بالستوما والجلد. احترم الخصوصية.",
    blocks: [
      B("Formen der Harninkontinenz", "Belastungsinkontinenz: Urin geht beim Husten, Lachen, Heben verloren.", "Dranginkontinenz: plötzlicher starker Harndrang, schafft es nicht rechtzeitig.", "Überlaufinkontinenz: Blase füllt sich zu stark, Tropfen fließen ab.", "Reflexinkontinenz: Entleerung ohne Gefühl, z. B. bei Rückenmarkschäden.", "Funktionelle Inkontinenz: Toilette nicht erreichbar oder nicht gefunden."),
      B("Pflegemaßnahmen", "Ursachen suchen: Infekt, Medikamente, Verstopfung, Bewegung, Toilette erreichbar?", "Toilettentraining nach Plan, Trinkmenge nicht einschränken.", "Beckenbodentraining, passende Hilfsmittel, Hautschutz.", "Mit Würde und Diskretion pflegen. Der Expertenstandard „Förderung der Harnkontinenz“ hilft bei Vorgehen."),
      B("Verstopfung (Obstipation)", "Vorbeugen: ausreichend Flüssigkeit, Ballaststoffe, Bewegung, ruhige Toilettensituation.", "Abführmittel nur nach Anordnung. Stuhlgang beobachten und dokumentieren.", "Nach Opioiden und bei Immobilität besonders aufmerksam."),
      B("Durchfall", "Flüssigkeit und Elektrolyte ersetzen, Hautschutz, strenge Hygiene (Noro, Clostridioides), Arzt informieren."),
      B("Stoma", "Ileostoma (Dünndarm): dünnflüssiger Stuhl. Colostoma (Dickdarm): festerer Stuhl.", "Beutelwechsel: Haut reinigen, richtig zuschneiden, dicht kleben. Haut um das Stoma beobachten (Rötung, Wunden).", "Beratung zu Ernährung, Geruch, Alltag. Selbständigkeit fördern."),
    ],
  },
  {
    id: "mobilisation", group: "ausbildung", area: "pflege", title: "Mobilisation und rückengerechtes Arbeiten", emoji: "🧍",
    ar: "التحريك: شجع الاستقلالية، استخدم وسائل مساعدة، اشرح الخطوات. للتمريض: اعمل بظهر سليم، قرّب الحمل، وسّع القاعدة، استخدم الأجهزة. الوقاية من التقفّع والسقوط.",
    blocks: [
      B("Ziele", "Selbstständigkeit erhalten oder fördern, Komplikationen verhindern (Kontraktur, Dekubitus, Thrombose, Pneumonie), Lebensqualität verbessern.", "Der Expertenstandard „Erhaltung und Förderung der Mobilität“ beschreibt das Vorgehen."),
      B("Vorgehen beim Mobilisieren", "Mit der Person absprechen und ankündigen, was passiert. Hilfsmittel prüfen (Rollator, Gehstock, Rollstuhlbremsen, Gleitmatte).", "Schritt für Schritt: aufsetzen, Kreislauf beobachten, stehen, dann gehen.", "Auf Schwindel, Blässe, Atemnot, Schmerz achten und sofort stoppen.", "Eigenbewegung zulassen: Aktivieren statt alles abzunehmen."),
      B("Konzepte", "Kinästhetik: Bewegungen mit der Person gemeinsam und mit natürlichen Bewegungsmustern.", "Bobath: besonders nach Schlaganfall, die betroffene Seite wird einbezogen.", "Basale Stimulation: Wahrnehmung über Berührung und Position fördern."),
      B("Rückengerechtes Arbeiten", "Bett auf Arbeitshöhe stellen, nah am Körper arbeiten, breiter Stand, Beine statt Rücken nutzen.", "Nicht verdrehen, Gewicht mit Körperdrehung verlagern.", "Hilfsmittel verwenden: Lifter, Rutschbrett, Gleitmatte. Niemals allein heben, wenn es vermeidbar ist."),
      B("Kontrakturen vorbeugen", "Gelenke in Funktionsstellung lagern und täglich bewegen (passiv, wenn nötig)."),
    ],
  },
];
