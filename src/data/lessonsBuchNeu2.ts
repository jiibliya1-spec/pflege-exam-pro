/**
 * Ergänzende Krankheits-Lektionen (Bewegungsapparat, Nerven, Psyche, Ohr).
 * Inhaltlich orientiert an "I care – PflegeExamen KOMPAKT" (Thieme), in eigenen Worten und vereinfacht – KEIN Buchtext.
 * Anordnungen, Dosierungen und Hausstandards des Betriebs gehen immer vor.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_NEU_2: Lesson[] = [
  {
    id: "fraktur-grundlagen", group: "krank", area: "bewegung", title: "Knochenbruch (Fraktur): Zeichen, Einteilung und Behandlung", icon: "Bone",
    ar: "الكسر (Fraktur) انقطاع في استمرارية العظم. العلامات غير المؤكدة: ألم، تورم، تقييد الحركة، كدمات. العلامات المؤكدة: وضعية خاطئة، حركة غير طبيعية، احتكاك عظمي، كسر مفتوح. العلاج: جبس، شدّ (Extension)، مثبّت خارجي (Fixateur externe)، تثبيت جراحي (Osteosynthese) أو مفصل صناعي. فحص DMS (الدورة الدموية، الحركة، الإحساس) ضروري. قاعدة: المريض المجبّر دائماً على حق.",
    diagrams: [
      { kind: "compare", title: "Unsichere und sichere Frakturzeichen", cols: [
        { t: "Unsichere Zeichen", icon: "Search", tone: "warn", items: ["Druckschmerz", "Schwellung", "Funktionseinschränkung", "Hämatom"], },
        { t: "Sichere Zeichen", icon: "Bone", tone: "bad", items: ["Fehlstellung", "Abnorme Beweglichkeit", "Fühl- oder hörbares Knochenreiben", "Offene Fraktur"] },
      ], note: "Unsicher heißt: Die Zeichen können auch bei Prellung oder Entzündung vorkommen." },
      { kind: "table", title: "Behandlungsmöglichkeiten", head: ["Verfahren", "Wann?", "Pflege-Schwerpunkt"], rows: [
        ["Gips", "Geschlossene Fraktur ohne Weichteilverletzung", "Frischen Gips spalten, Finger oder Zehen bewegen, DMS, Druckstellen"],
        ["Extension (Zug)", "Instabile Frakturen von Bein, Becken, HWS, bis zur OP", "Schnüre frei, Gewichte richtig, Einstichstellen beobachten"],
        ["Fixateur externe", "Trümmerfrakturen, offene und infizierte Wunden, Polytrauma", "Pin-Stellen pflegen, Infektzeichen"],
        ["Osteosynthese", "Offene Fraktur, Nerven- oder Sehnenverletzung, nicht reponierbar", "DMS, Wunde, Frühmobilisation nach Anordnung"],
        ["Endoprothese", "z. B. Schenkelhalsfraktur (HEP), ältere Menschen (TEP)", "Siehe Lektion Arthrose und Gelenkersatz"],
      ] },
    ],
    blocks: [
      B("Was ist eine Fraktur?", "Komplette oder inkomplette Unterbrechung des Knochens, zwei oder mehr Bruchstücke werden durch die Bruchspalte getrennt.", "Einteilung: Ursache (Unfall oder pathologisch, z. B. bei Osteoporose oder Tumor), geschlossen oder offen, Gelenkbeteiligung, Verlauf der Bruchlinie (quer, schräg, Spiral, Y/T-förmig), vollständig oder unvollständig, einfach oder mehrere Fragmente."),
      B("Achtung Blutverlust", "Frakturen mit Gefäßverletzung können viel Blut verlieren. Bei geschlossenen Brüchen sieht man es spät als Schwellung oder Hämatom.", "Gefahr: Volumenmangelschock. Auf Puls, Blutdruck, Haut und Bewusstsein achten."),
      B("Gips richtig versorgen", "Gips immer in Funktionsstellung anlegen (Ellenbogen und Sprunggelenk etwa 90 Grad, Knie und Handgelenk etwa 160 Grad).", "Frische Frakturen: Gips vollständig spalten, damit die Schwellung Platz hat. Erst danach zirkulärer Gips.", "Finger oder Zehen regelmäßig bewegen. Bei Beingips Thromboseprophylaxe und Antikoagulanzien nach Anordnung.", "Bei Armgips keine Armschlinge: sie führt zu Fehlhaltung und Muskelschwund.", "Merke: Der gegipste Patient hat immer recht. Bei Druckgefühl oder Schmerz den Gips kontrollieren und ggf. neu anlegen."),
      B("DMS-Kontrolle", "D = Durchblutung (Hautfarbe, Wärme, Puls, Kapillarfüllung).", "M = Motorik (Finger oder Zehen bewegen).", "S = Sensibilität (Gefühl, Kribbeln, Taubheit).", "Auffälligkeiten sofort dem Arzt melden."),
      B("Operative Verfahren", "Osteosynthese: Fraktur wird reponiert und mit Schrauben, Platte, Marknagel oder Zuggurtung fixiert. Vorteil: schnellere Beweglichkeit. Nachteil: meist weitere OP zur Implantatentfernung.", "Marknagel: Bein ist sofort belastungsstabil. Plattenosteosynthese: nur übungsstabil, etwa 4 Monate Entlastung.", "Endoprothese: HEP ersetzt nur den Gelenkkopf (z. B. bei Schenkelhalsfraktur), TEP ersetzt Kopf und Pfanne."),
      B("Stabilisierungsgrade", "Instabil: keine Mobilisation.", "Lagerungsstabil: längere Seitenlage möglich (Dekubitusprophylaxe).", "Bewegungsstabil: aktive oder passive Bewegung erlaubt, z. B. Drehen zum Verbandwechsel.", "Belastungsstabil: Bewegung und Reha-Übungen erlaubt.", "Trainingsstabil: wiederholte aktive Bewegungsabläufe."),
    ],
  },
  {
    id: "fraktur-komplikationen", group: "krank", area: "bewegung", title: "Komplikationen nach Frakturen: Kompartmentsyndrom, Pseudarthrose, CRPS", icon: "TriangleAlert",
    ar: "مضاعفات الكسور: متلازمة الحيّز (Kompartmentsyndrom) حالة طارئة بألم شديد وتورم واضطراب إحساس، تحتاج إزالة كل الضمادات وإبلاغ الطبيب فوراً وقد تتطلب فتح اللفافة. تأخر الالتئام بعد 4–6 أسابيع، والمفصل الكاذب (Pseudarthrose) بعد 6–8 أسابيع. التهاب العظم والنقي، ومتلازمة الألم الناحي المركّب CRPS.",
    diagrams: [
      { kind: "table", title: "Komplikationen im Überblick", head: ["Komplikation", "Zeichen", "Maßnahme"], rows: [
        ["Kompartmentsyndrom", "Starke Schmerzen, Schwellung, Gefühlsstörung, evtl. Lähmung", "Arzt sofort, Verbände entfernen, ggf. Fasziotomie"],
        ["Verzögerte Heilung", "Nach 4–6 Wochen keine knöcherne Überbrückung", "Ursache behandeln, Ruhigstellung verbessern"],
        ["Pseudarthrose", "Nach 6–8 Wochen nicht verwachsen, Überbeweglichkeit", "Osteosynthese, Grunderkrankung behandeln"],
        ["Ostitis und Osteomyelitis", "Entzündungszeichen, Fieber, v. a. nach offenen Frakturen", "Antibiotika, OP, Entzündungszeichen sofort melden"],
        ["CRPS", "Schmerz, Dystrophie, Versteifung", "Schmerztherapie früh, Physio und Ergotherapie"],
      ] },
      { kind: "flow", title: "Kompartmentsyndrom: so läuft es ab", steps: [
        { t: "Hämatom oder Ödem in der Muskelloge", icon: "Droplet", tone: "warn" },
        { t: "Druck steigt, Gefäße und Nerven werden gedrückt", icon: "Gauge", tone: "bad" },
        { t: "Heftiger Schmerz, Schwellung, Gefühlsstörung", icon: "Zap", tone: "bad" },
        { t: "Arzt rufen, Verbände entfernen", icon: "Phone", tone: "bad" },
        { t: "Faszie wird gespalten (Fasziotomie)", icon: "Scissors", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Kompartmentsyndrom", "Durch Hämatom oder Ödem steigt der Druck in der von Faszien umhüllten Muskelkammer. Gefäße und Nerven werden eingeengt.", "Besonders gefährdet: Unterarm und Unterschenkel nach Frakturen.", "Symptome: starke Schmerzen, Schwellung, Sensibilitätsstörungen, ggf. Lähmung.", "Bei Verdacht: sofort Arzt informieren und alle Verbände entfernen. Bei gesicherter Diagnose spaltet der Chirurg die Faszie (Fasziotomie)."),
      B("Verzögerte Heilung und Pseudarthrose", "Verzögerte Heilung: nach 4 bis 6 Wochen noch keine knöcherne Überbrückung. Nach 6 bis 8 Wochen ohne Zusammenwachsen spricht man von Pseudarthrose (falsches Gelenk).", "Ursachen: hohes Alter, Diabetes, Osteoporose, schlechter Kontakt der Bruchenden, unzureichende Ruhigstellung, schlechte Durchblutung, Infektion.", "Therapie: Grunderkrankung behandeln, Osteosynthese."),
      B("Knocheninfektion", "Ostitis (Knochen) und Osteomyelitis (Knochenmark) entstehen vor allem bei offenen Frakturen und großen Weichteilverletzungen, weil Erreger direkt an den Knochen gelangen.", "Jegliche Entzündungszeichen sofort an den Arzt weitergeben."),
      B("CRPS (komplexes regionales Schmerzsyndrom)", "Durchblutungsstörungen können zu Entzündung, Dystrophie und völliger Gelenkversteifung führen.", "Therapie: Schmerzmittel (NSAR), Glukokortikoide, Sympathikusblockade, Physio- und Ergotherapie.", "Vorbeugen: ausreichende Ruhigstellung, Schmerztherapie von Anfang an, danach Unterstützung bei der Mobilisation."),
    ],
  },
  {
    id: "fraktur-schaedel-wirbel", group: "krank", area: "bewegung", title: "Schädel-, Wirbelsäulen- und Beckenfrakturen: Pflege", icon: "Brain",
    ar: "كسور الجمجمة والعمود الفقري: كسر قاعدة الجمجمة يظهر بكدمة حول العينين (Monokel/Brillenhämatom) وتسرّب دم أو سائل دماغي شوكي. اختبار سكر الدم يساعد على كشف السائل. الوضعية: رفع الجزء العلوي 30°. كسور العمود الفقري: المستقرة بلا إصابة النخاع، وغير المستقرة خطر الشلل: راحة تامة، دوران En-bloc، مراقبة الحالة العصبية. كسور الحوض.",
    diagrams: [
      { kind: "flow", title: "En-bloc-Drehung bei Wirbelsäulenfraktur", steps: [
        { t: "Mindestens 2, besser 3 Pflegende", icon: "Users", tone: "info" },
        { t: "Patient macht sich steif, Arme vor der Brust verschränkt", icon: "PersonStanding", tone: "info" },
        { t: "Erste Person hält den Kopf", icon: "Hand", tone: "info" },
        { t: "Zweite: Schulter und Hüfte, dritte: Hüfte und Knie", icon: "Hand", tone: "info" },
        { t: "Gemeinsam gleichzeitig zur Seite drehen, Wirbelsäule bleibt starr", icon: "RefreshCw", tone: "ok" },
      ] },
      { kind: "compare", title: "Wirbelsäulenfraktur: stabil oder instabil", cols: [
        { t: "Stabil", icon: "ShieldCheck", tone: "ok", items: ["Rückenmark nicht betroffen", "Druck-, Klopf-, Bewegungsschmerz", "1–2 Wochen strenge Bettruhe", "Flachlage, Oberkörper max. 30°", "Zervikalstütze bei HWS"] },
        { t: "Instabil", icon: "Siren", tone: "bad", items: ["Risiko für Rückenmarkverletzung und Querschnitt", "Spontan- und Bewegungsschmerz, Lähmung, Taubheit", "Operation", "Vorher: Flachlage, nur En-bloc-Drehung", "HWS: Philadelphia-Krawatte"] },
      ], note: "Veränderungen des neurologischen Status sofort dem Arzt melden: das kann Einengung des Rückenmarks bedeuten." },
    ],
    blocks: [
      B("Schädelbasisfraktur", "Ursache: stumpfe Gewalt, z. B. Verkehrsunfall. Diagnostik: CT des Kopfes und neurologische Untersuchung (Pupillen, Bewusstsein).", "Zeichen: Monokel- oder Brillenhämatom, Blut oder Liquor aus Nase, Mund oder Ohr.", "Tritt dauerhaft Liquor aus, muss operiert werden.", "Merke: Ein Blutzuckertest zeigt schnell, ob austretende Flüssigkeit Liquor ist (Liquor enthält viel Glukose). Auch ein heller Rand um einen Blutfleck auf der Kompresse ist ein Hinweis."),
      B("Kalotten- und Gesichtsschädelfrakturen", "Kalottenfraktur (Schädeldach): Prellmarken und Wunden, evtl. Impression (Bruchstück ins Schädelinnere gedrückt). Impressionsfrakturen werden operiert, sonst überwacht.", "Gesichtsschädel: Mittelgesichtsfrakturen oft mit Schädelbasisfraktur. Isolierte Brüche, z. B. Jochbein oder Nasenbein, meist durch Faustschlag. Bei Sehstörungen umgehende OP."),
      B("Pflege bei Schädelfrakturen", "Vitalzeichen engmaschig, ggf. Monitoring.", "Auf Hirndruck achten: Kopfschmerz, Übelkeit, Erbrechen, Bradykardie, Krampfanfälle, Atemstörungen, Bewusstseinstrübung, Pupillenreaktion.", "Test auf Liquoraustritt, Blutungen und Hämatome beobachten.", "Oberkörper etwa 30 Grad hochlagern.", "Ruhe vermitteln, Hektik vermeiden. Ängste ansprechen (Entstellung, Verlust von Geruch oder Sehen)."),
      B("Wirbelsäulenfrakturen: Ursache und Pflege", "Ursachen: Unfall (z. B. Kopfsprung ins flache Wasser, Auffahrunfall) oder pathologisch (Osteoporose, Tumor). Hals-, Brust- und Lendenwirbelsäule können betroffen sein.", "Neurologischen Status beobachten: DMS, Sensibilitätsstörungen, Inkontinenz, Bewusstsein. Bei Ausfällen MRT.", "Gehversuche mit höhenverstellbarem Gehwagen mit Unterarmauflagen.", "Reha: Muskelaufbau, schonende Bewegungsmuster, Sport nur nach Rücksprache mit dem Arzt."),
      B("Beckenfrakturen", "Beckenrandfrakturen: Stabilität bleibt, kurze Bettruhe, Schmerzmittel, frühe Mobilisation.", "Beckenringfrakturen: hohe Gewalt, oft Polytrauma. Stabil: 6 bis 12 Wochen Bettruhe, langsame Mobilisation. Instabil: Operation, Flachlage, Drehen und Beugen des Beckens vermeiden, Mobilisation en bloc, Prophylaxen."),
    ],
  },
  {
    id: "distorsion-luxation-amputation", group: "krank", area: "bewegung", title: "Verstauchung, Ausrenkung, Brüche von Arm und Bein, Amputation", icon: "Footprints",
    ar: "الالتواء (Distorsion): تمزق أو شدّ في أربطة المفصل بعد قوة خارجية، علاجه مسكنات وتثبيت. الخلع (Luxation): خروج رأس المفصل من الحفرة، ألم شديد وعدم حركة، العلاج بإرجاع المفصل مع أشعة وفحص DMS قبله وبعده. البتر (Amputation): رضّي أو علاجي؛ العضو المبتور يُحفظ نظيفاً وجافاً وبارداً دون ملامسة الجليد مباشرة.",
    diagrams: [
      { kind: "compare", title: "Distorsion und Luxation", cols: [
        { t: "Distorsion (Verstauchung)", icon: "Footprints", tone: "warn", items: ["Gelenkkapsel verletzt, Bänder überdehnt", "Handgelenk, Sprunggelenk, Knie, HWS", "Schmerz, Schwellung, Hämatom", "Ruhigstellung und Schmerzmittel"] },
        { t: "Luxation (Ausrenkung)", icon: "Bone", tone: "bad", items: ["Gelenkkopf aus der Pfanne", "Schulter (Sturz), Ellenbogen (starkes Trauma)", "Starker Schmerz, Schonhaltung, keine Bewegung", "Reposition, davor und danach Röntgen und DMS"] },
      ] },
      { kind: "table", title: "Häufige Verletzungen der Arme", head: ["Verletzung", "Ursache", "Behandlung"], rows: [
        ["Proximale Humerusfraktur", "Sturz auf die Schulter oder den ausgestreckten Arm", "Gilchrist-Verband, ggf. Operation oder Endoprothese, frühe Mobilisation"],
        ["Distale Radiusfraktur", "Sturz auf die Hand", "Kinder: Gips, Erwachsene: oft Operation"],
        ["Handwurzelfraktur (Kahnbein)", "Sturz auf die überstreckte Hand", "Meist Operation, Kahnbeingips für 3 Wochen"],
        ["Unterarmschaftfraktur", "Elle oder Speiche oder beide", "Gips 4–6 Wochen, instabil: Operation"],
      ], note: "Bei Unterarmfrakturen besteht eine besonders hohe Gefahr eines Kompartmentsyndroms." },
    ],
    blocks: [
      B("Distorsion", "Gelenkkapsel verletzt, Bänder gezerrt oder überdehnt, durch äußere Kraft.", "Häufig: Handgelenk, Sprunggelenk, Knie, Halswirbelsäule (Schleudertrauma).", "Therapie: Schmerzmittel, Ruhigstellung, bei HWS ggf. Halskrawatte."),
      B("Luxation", "Der Gelenkkopf sitzt nicht mehr in der Pfanne. Häufig Schulter (Sturz auf Arm oder Schulter) und Ellenbogen (erhebliches Trauma).", "Therapie: Reposition, ggf. Gilchrist-Verband oder Gips. Vor und nach der Reposition Röntgen und DMS-Kontrolle."),
      B("Schenkelhals- und Beinfrakturen", "Schenkelhalsfraktur: der Oberschenkelknochen bricht zwischen Hüftkopf und Trochanter, häufig bei älteren Menschen. Versorgung oft mit Hemiendoprothese.", "Bei älteren Patienten ist schnelle Mobilisierung wichtig, um Komplikationen längerer Bettlägerigkeit zu vermeiden (Pneumonie, Thrombose, Dekubitus)."),
      B("Amputation", "Abtrennung einer Gliedmaße im Knochenbereich. Abtrennung in Höhe des Gelenks heißt Exartikulation.", "Traumatisch: Unfall. Die abgetrennte Gliedmaße kann unter günstigen Bedingungen (glatte Schnittränder, saubere Wunde, geringe Quetschung) replantiert werden. Transport sauber, trocken und kühl, aber nicht direkt auf Eis.", "Therapeutisch: z. B. bei pAVK, bösartigen Tumoren, schweren Infektionen oder Nekrosen. Es wird so wenig wie möglich entfernt, damit viele Funktionen erhalten bleiben."),
    ],
  },
  {
    id: "arthrose-gelenkersatz", group: "krank", area: "bewegung", title: "Arthrose und Gelenkersatz (Hüft- und Knie-TEP)", icon: "Footprints",
    ar: "الفصال العظمي (Arthrose): تآكل غضروف المفصل تدريجياً. الأعراض: تيبّس صباحي وألم عند بدء الحركة ثم ألم مع الجهد وفي الراحة. الأسباب: سمنة، أحمال، تشوهات، كسور بالمفصل. العلاج: مسكنات NSAR، علاج طبيعي، وعند الفشل جراحة أو مفصل صناعي. بعد مفصل الورك الصناعي: تباعد الساق، لا دوران داخلي أو خارجي، لا ثني أكثر من 90°، لا تشبيك الساقين.",
    diagrams: [
      { kind: "table", title: "Nach Hüft-TEP: Do und Don't", head: ["Erlaubt", "Vermeiden (Luxationsgefahr)"], rows: [
        ["Bein in Abduktion lagern", "Innen- und Außenrotation"],
        ["Oberkörper bis etwa 60° hoch", "Hüfte mehr als 90° beugen"],
        ["Rückenlage und gesunde Seite", "Beine übereinanderschlagen"],
        ["Mobilisation über die betroffene Seite", "Zu schnelle, große Schritte (Kreislauf!)"],
      ], note: "Nach Entfernung der Drainagen darf vorsichtig auch auf der betroffenen Seite gelegen werden." },
      { kind: "flow", title: "Verlauf der Arthrose", steps: [
        { t: "Knorpel wird dünner und rau", icon: "Layers", tone: "warn" },
        { t: "Anlauf- und Morgensteifigkeit", icon: "Clock", tone: "warn" },
        { t: "Belastungs- und später Ruheschmerz", icon: "Zap", tone: "bad" },
        { t: "Entzündung, Deformation, Einsteifung", icon: "Bone", tone: "bad" },
        { t: "OP: Gelenk sanieren, versteifen oder ersetzen", icon: "Scissors", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist Arthrose?", "Schmerzhafte degenerative Gelenkerkrankung: Der Gelenkknorpel wird allmählich zerstört. Daraus entstehen Entzündungen, Verformungen und im Extremfall Einsteifung.", "Koxarthrose = Hüfte, Gonarthrose = Knie."),
      B("Ursachen und Risiken", "Primär: minderwertiges Knorpelgewebe, Ursache unbekannt.", "Sekundär: Übergewicht, Leistungssport oder schwere Arbeit, Fehlstellungen (X- oder O-Beine), Frakturen mit Gelenkbeteiligung, Stoffwechselerkrankungen (Gicht), Schilddrüsenunterfunktion.", "Monoarthrose: ein Gelenk. Oligoarthrose: 2 bis 4 Gelenke. Polyarthrose: mehr als 5."),
      B("Symptome und Therapie", "Am Anfang Morgensteifigkeit und Anlaufschmerz, später Belastungs- und Ruheschmerz. Dazu Muskelverspannung, Schwellung, Bewegungseinschränkung, Deformation.", "Therapie: NSAR, Massage, Wärme oder Kälte, orthopädische Einlagen, Risiken verringern (z. B. Gewicht).", "Bei zunehmender Einschränkung: operative Sanierung, Gelenkversteifung (Arthrodese, meist Wirbelsäule oder Hand-, Finger-, Zehengelenke) oder Endoprothese."),
      B("Pflege nach Hüft-TEP", "Allgemeine postoperative Pflege. Positionierung: Bein in Abduktion, Oberkörper max. 60 Grad.", "Zunächst nur Rückenlage und gesunde Seite. Keine Rotation, nicht über 90 Grad beugen, Beine nicht überkreuzen (ggf. Antirotationshose).", "Mobilisation immer über die betroffene Seite, in kleinen Etappen (Bettkante, Stehen, kurze Strecken), auf Kreislaufschwäche achten. Gehstützen mit Teil- oder Vollbelastung nach Anordnung."),
      B("Pflege nach Knie-TEP", "Wie bei Hüft-TEP, aber das Knie wird immer hoch und frei gelagert, ggf. leicht gebeugt.", "Frühe Mobilisation, weil sich schnell Kontrakturen bilden. Aktive Bewegung durch den Patienten und passive mit einer Kniebewegungsschiene. Bis zur Entlassung etwa 60 Grad Beugung."),
    ],
  },
  {
    id: "knochen-gelenk-infekt-tumor", group: "krank", area: "bewegung", title: "Knocheninfektion, eitrige Arthritis, Knochentumoren, Bechterew und Lupus", icon: "Microscope",
    ar: "التهاب العظم والنقي الحاد (Osteomyelitis): حمى، قشعريرة، ألم شديد؛ علاج بمضاد حيوي وريدي وتثبيت وجراحة تنظيف. التهاب المفصل القيحي (eitrige Arthritis) حالة طارئة تحتاج جراحة سريعة وإلا دُمّر المفصل. نقائل العظام تأتي من الثدي والبروستات والرئة والكلية والغدة الدرقية. مرض بختيريف (Bechterew) يصيب شباباً 15–35 سنة، والذئبة الحمامية SLE تصيب نساء 25–35 سنة.",
    diagrams: [
      { kind: "table", title: "Vier wichtige Krankheitsbilder", head: ["Krankheit", "Kern", "Wichtig"], rows: [
        ["Osteomyelitis", "Infektion des Knochenmarks, über Blut (endogen) oder durch offene Fraktur/OP (exogen)", "Fieber, Schüttelfrost, Schmerz. Antibiose i. v., Ruhigstellung, OP, Saug-Spül-Drainage"],
        ["Eitrige Arthritis", "Akute bakterielle Gelenkentzündung mit Eiter", "Notfall-OP, sonst Gelenkzerstörung. Risiko: Abwehrschwäche, Diabetes"],
        ["Knochenmetastasen", "Streuung aus Brust, Prostata, Lunge, Niere, Schilddrüse", "Pathologische Frakturen, Bisphosphonate, Bestrahlung"],
        ["Morbus Bechterew", "Entzündung der Wirbelgelenke und Iliosakralgelenke, Verknöcherung", "Beginn 15–35 Jahre, Bewegung ist Therapie"],
      ] },
      { kind: "tiles", title: "Kollagenose SLE: Was ist betroffen?", items: [
        { t: "Haut", icon: "Hand", tone: "info" },
        { t: "Gelenke", icon: "Bone", tone: "info" },
        { t: "Gefäße und Organe", icon: "Heart", tone: "warn" },
        { t: "Zentrales Nervensystem", icon: "Brain", tone: "warn" },
      ], note: "SLE trifft meist Frauen zwischen 25 und 35 Jahren. Auslöser bei Veranlagung: Virusinfekte, Sonne, Hormone, Medikamente." },
    ],
    blocks: [
      B("Akute Osteomyelitis", "Infektiöse Entzündung des Knochenmarks, oft mit Beteiligung des Knochens (Osteitis).", "Endogen über das Blut (z. B. nach Mandelentzündung) oder exogen durch offene Fraktur oder OP.", "Zeichen: schweres Krankheitsgefühl, Fieber, Schüttelfrost, starke Schmerzen, Entzündungszeichen.", "Therapie: Antibiotika i. v., Ruhigstellung. Bei exogener Form Wundreinigung, lokale Antibiotika, ggf. Saug-Spül-Drainage oder Vakuumtherapie. In schweren Fällen Amputation.", "Pflege: Verbandwechsel, Drainage kontrollieren und Flaschen wechseln, strenge Bettruhe sicherstellen."),
      B("Eitrige Arthritis", "Akute bakterielle Gelenkentzündung mit Eiter. Ohne schnelle Behandlung (Notfall-OP) wird das Gelenk zerstört.", "Meist exogen durch offene Gelenkverletzung, Injektion, Punktion oder OP. Besonders gefährdet sind Abwehrgeschwächte und Menschen mit Diabetes.", "Zeichen: klassische Entzündungszeichen, ggf. Fieber.", "Therapie: früh beginnen: Antibiotika, operative Sanierung, anschließend Physiotherapie, ggf. Versteifung oder Endoprothese."),
      B("Knochenmetastasen", "Ein bösartiger Tumor aus anderen Organen streut in den Knochen, v. a. Brust-, Prostata-, Lungen-, Nieren- und Schilddrüsenkrebs. Meist betroffen: Wirbelsäule, Becken, Oberschenkel.", "Der Knochen wird weniger belastbar, es kommt zu pathologischen Frakturen mit Schmerz und evtl. neurologischen Ausfällen.", "Therapie: Primärtumor behandeln, ggf. Bestrahlung, Schmerzmittel, Bisphosphonate."),
      B("Morbus Bechterew", "Entzündung der Wirbelgelenke, der Iliosakralgelenke und des Bandapparats, die Wirbelsäule verknöchert und krümmt sich zunehmend. Beginn meist mit 15 bis 35 Jahren.", "Pflege: Bei nächtlichen Schmerzen hilft Umhergehen. Gut gepolsterte Schuhe bei Fersen- oder Achillessehnenentzündung.", "Zur Physiotherapie motivieren und die Notwendigkeit erklären: wegen der Schmerzen lassen Patienten die Übungen oft aus."),
      B("Kollagenosen und SLE", "Kollagenosen sind entzündlich-rheumatische Erkrankungen des Bindegewebes. Sie schädigen Haut, Unterhaut, Muskeln, viele innere Organe und Gelenke.", "Der systemische Lupus erythematodes (SLE) betrifft Haut, Gelenke, Gefäße, Organe und ZNS. Meist erkranken Frauen zwischen 25 und 35 Jahren.", "Üblicher Pflegehinweis: Sonnenschutz, Therapietreue und regelmäßige Kontrollen."),
    ],
  },
  {
    id: "hydrozephalus", group: "krank", area: "nerven", title: "Wasserkopf (Hydrozephalus) und Liquor-Shunt", icon: "Brain",
    ar: "استسقاء الدماغ (Hydrozephalus): توسع في المسافات الحاملة للسائل الدماغي الشوكي (Liquor) وضمور النسيج الدماغي، بسبب فرط الإنتاج أو اضطراب الدوران أو ضعف الامتصاص. العلاج: تصريف خارجي (EVD) أو تحويلة دائمة (Shunt) إلى البطن غالباً. مضاعفات: نقص التصريف (ارتفاع ضغط الدماغ) أو فرطه (صداع يخف بالاستلقاء)، عدوى. المريض يحمل بطاقة الصمام.",
    diagrams: [
      { kind: "compare", title: "Unter- oder Überdrainage?", cols: [
        { t: "Unterdrainage", icon: "TrendingUp", tone: "bad", items: ["Hirndruck steigt", "Kopfschmerz, Übelkeit, Erbrechen", "Apathie, Schläfrigkeit", "Arzt sofort informieren"] },
        { t: "Überdrainage", icon: "TrendingDown", tone: "warn", items: ["Hirndruck ist erniedrigt", "Kopfschmerz nimmt im Liegen ab", "Schwindel, Sehstörung", "Arzt informieren"] },
      ] },
      { kind: "flow", title: "Ableitung des Liquors", steps: [
        { t: "Zu viel Liquor, gestörte Zirkulation oder Resorption", icon: "Waves", tone: "warn" },
        { t: "Ventrikel erweitern sich, Hirngewebe geht zurück", icon: "Brain", tone: "bad" },
        { t: "Externe Ventrikeldrainage (vorübergehend)", icon: "Syringe", tone: "info" },
        { t: "Interner Shunt, meist in die Bauchhöhle (ventrikuloperitoneal)", icon: "Wrench", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Die Liquorräume im Gehirn sind erweitert, das Hirngewebe geht zurück. Es kann Kinder und Erwachsene betreffen.", "Ursachen: zu viel Liquor, gestörte Zirkulation oder zu geringe Resorption."),
      B("Therapie", "Ziel: Liquorresorption normalisieren.", "Externe Ventrikeldrainage: überschüssiger Liquor wird über einen Katheter nach außen abgeleitet.", "Interner Liquor-Shunt: Ableitung z. B. in die Bauchhöhle (ventrikuloperitonealer Shunt) oder selten in den rechten Herzvorhof (ventrikuloatrial)."),
      B("Komplikationen", "Unterdrainage: Hirndruck steigt mit Kopfschmerz, Übelkeit, Erbrechen, Apathie.", "Überdrainage: niedriger Hirndruck, Kopfschmerz bessert sich im Liegen.", "Krampfanfälle (selten) und Infektionen am Kathetersystem, je nach Ableitung z. B. Endokarditis, Meningitis, Peritonitis."),
      B("Pflege nach Shunt-OP", "Allgemeine postoperative Pflege. Frühmobilisation am 1. Tag nach Rücksprache.", "Beobachten: Kopfschmerz, Übelkeit, Schwindel, Erbrechen, Sehstörung, Schläfrigkeit, Bauchschmerzen.", "Entlassmanagement: im ersten Monat körperliche Anstrengung vermeiden, keinen Druck auf Ventil und Katheter.", "Kontrollen im ersten Jahr alle 3 bis 6 Monate, danach jährlich. Patient und Angehörige für Notfallzeichen sensibilisieren, Ventil-Pass immer bei sich tragen."),
    ],
  },
  {
    id: "vaskulaere-demenz", group: "krank", area: "nerven", title: "Vaskuläre Demenz (durch Durchblutungsstörungen)", icon: "Brain",
    ar: "الخرف الوعائي (Vaskuläre Demenz) ينتج عن اضطرابات الدورة الدموية في الدماغ بسبب تصلب الشرايين وجلطات صغيرة متعددة. السير متدرّج على شكل قفزات. يبقى الطابع الشخصي والسلوك الاجتماعي محفوظين نسبياً. الأخطار: السكري وارتفاع الضغط. العلاج: خفض عوامل الخطر، علاج طبيعي ووظيفي ونطق. لا يوجد شفاء.",
    diagrams: [
      { kind: "compare", title: "Alzheimer oder vaskuläre Demenz?", cols: [
        { t: "Alzheimer-Typ", icon: "Brain", tone: "info", items: ["Mehr als 50 % aller Demenzen", "Ablagerung von Beta-Amyloid", "Langsam fortschreitend", "Persönlichkeit verändert sich"] },
        { t: "Vaskuläre Demenz", icon: "Heart", tone: "warn", items: ["Durchblutungsstörung, kleine Infarkte", "Schubweiser Verlauf", "Oft Lähmung, Sprach- und Gangstörung", "Persönlichkeit und Sozialverhalten bleiben länger erhalten"] },
      ] },
      { kind: "flow", title: "Wie entsteht sie?", steps: [
        { t: "Risiko: Diabetes, Bluthochdruck", icon: "Gauge", tone: "warn" },
        { t: "Arteriosklerose der Hirngefäße", icon: "Activity", tone: "warn" },
        { t: "Viele kleine Hirninfarkte", icon: "Zap", tone: "bad" },
        { t: "Stufenweise Verschlechterung", icon: "TrendingDown", tone: "bad" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Demenz durch Durchblutungsstörung im Gehirn. Betroffen sind Hirnbereiche unterhalb der Hirnrinde. Andere Namen: Multi-Infarkt-Demenz, arteriosklerotische Demenz."),
      B("Symptome", "Schubweiser Verlauf, passend zu den Infarkten.", "Antriebs- und Konzentrationsstörungen.", "Stimmungsschwankungen, rascher Wechsel von Lachen und Weinen.", "Fokale Ausfälle: Halbseitenlähmung, Sprach- und Gangstörung, gesteigerte Muskeleigenreflexe.", "Persönlichkeit und Sozialverhalten bleiben länger erhalten."),
      B("Diagnostik und Therapie", "Anamnese, CT oder MRT, Ultraschall der hirnversorgenden Arterien.", "Risikofaktoren senken, z. B. Blutdruck einstellen.", "Physiotherapie, Ergotherapie und Logopädie."),
      B("Pflege", "Wie bei Demenz vom Alzheimer-Typ: Orientierung geben, wertschätzend ansprechen, Stärken loben, nicht ständig wegen verlorenen Realitätsbezugs korrigieren.", "Keine Demenzform ist heilbar."),
    ],
  },
  {
    id: "migraene", group: "krank", area: "nerven", title: "Migräne", icon: "Zap",
    ar: "الصداع النصفي (Migräne): نوبات ألم شديد غالباً من جهة واحدة مع غثيان وحساسية للضوء والضجيج، وتستمر 4–72 ساعة. قد تسبقها هالة (Aura) كاضطراب بصري. العلاج: مسكن ومضاد قيء، وعند الشدة تريبتانات (Sumatriptan) بحد أقصى 10 أيام شهرياً. الوقاية: رياضة تحمّل، حاصرات بيتا. الإفراط بالمسكنات يسبب صداعاً دائماً. الرعاية: غرفة مظلمة وهادئة، دفتر ألم.",
    diagrams: [
      { kind: "flow", title: "Die Phasen einer Migräneattacke", steps: [
        { t: "Vorbote (Prodrom)", s: "Heißhunger, Euphorie oder Gereiztheit, Müdigkeit", icon: "Clock", tone: "info" },
        { t: "Aura (nicht immer)", s: "Flimmerskotom, Lähmung, Sprachstörung", icon: "Eye", tone: "warn" },
        { t: "Kopfschmerzphase 4–72 Stunden", s: "Bohrend-hämmernd, meist einseitig", icon: "Zap", tone: "bad" },
        { t: "Begleitsymptome", s: "Übelkeit, Licht- und Lärmempfindlichkeit", icon: "Sun", tone: "warn" },
      ] },
      { kind: "tiles", title: "Typische Auslöser", items: [
        { t: "Schlaf-Wach-Rhythmus", s: "z. B. Schichtarbeit", icon: "Moon", tone: "warn" },
        { t: "Hormone", s: "z. B. Menstruation", icon: "Flower2", tone: "warn" },
        { t: "Stress", icon: "Zap", tone: "warn" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Starke, oft einseitige Kopfschmerzattacken, häufig mit Übelkeit und Erbrechen sowie erhöhter Licht- und Lärmempfindlichkeit.", "Genetische Veranlagung führt zu erhöhter Erregbarkeit der Hirnrinde. Auslöser sind Schlafrhythmus, Hormone und Stress."),
      B("Verlauf", "Oft beginnt die Attacke Stunden bis Tage vorher mit einer Prodromalphase.", "Die Aura zeigt sich z. B. als einseitige Sehstörung (Flimmerskotom), Lähmung oder Sprachstörung.", "Die Kopfschmerzphase dauert 4 bis 72 Stunden. Bei Kindern kann die Migräne auch ohne Kopfschmerz nur mit Bauchschmerz und Schwindel ablaufen."),
      B("Therapie", "Akut: Schmerzmittel und Antiemetikum, bei starken Schmerzen Triptane (z. B. Sumatriptan).", "Triptane nur an höchstens 10 Tagen im Monat. Übermäßiger Schmerzmittelgebrauch führt zu Dauerkopfschmerz.", "Vorbeugung: Betablocker, Antikonvulsiva, Ausdauersport."),
      B("Pflege und Beratung", "Zimmer abdunkeln, Lärm vermeiden, auf ausreichend Flüssigkeit achten.", "Kalter Waschlappen auf die Stirn, Pfefferminzöl auf Stirn und Schläfen.", "Schmerzmanagement nach Anordnung und Expertenstandard.", "Schmerztagebuch führen, regelmäßiger Tagesablauf, Sport und Entspannungstechniken. Auf Auslöser wie Alkohol achten."),
    ],
  },
  {
    id: "kopfschmerz-trigeminus", group: "krank", area: "nerven", title: "Spannungskopfschmerz und Trigeminusneuralgie", icon: "Zap",
    ar: "صداع التوتر (Spannungskopfschmerz): ألم ثنائي الجانب ضاغط غير نابض خفيف إلى متوسط، كأن قبعة ضيقة على الرأس، لا يزيد مع الحركة. علاجه مسكنات قصيرة المدى ووقاية بالاسترخاء والعلاج الطبيعي. ألم العصب مثلث التوائم (Trigeminusneuralgie): نوبات ألم وجهي شديد مفاجئ من جهة واحدة قد يثيرها المضغ أو الكلام أو الهواء. العلاج: Carbamazepin. انتبه للتغذية والسوائل.",
    diagrams: [
      { kind: "table", title: "Drei Kopf- und Gesichtsschmerzen im Vergleich", head: ["", "Spannungskopfschmerz", "Migräne", "Trigeminusneuralgie"], rows: [
        ["Schmerzart", "Drückend-ziehend, beidseitig, nicht pulsierend", "Bohrend-hämmernd, meist einseitig", "Blitzartig, einseitig, im Gesicht"],
        ["Stärke", "Leicht bis mäßig", "Stark", "Sehr stark in Attacken"],
        ["Bewegung", "Keine Verstärkung", "Verstärkt durch Aktivität", "Auslöser: Kauen, Schlucken, Sprechen, Luftzug"],
        ["Typische Therapie", "Schmerzmittel kurz, Entspannung", "Triptane, Prophylaxe", "Carbamazepin"],
      ] },
    ],
    blocks: [
      B("Spannungskopfschmerz", "Kopfschmerz mittlerer Intensität ohne neurologische Begleitsymptome und ohne nachweisbare Ursache.", "Beidseitig, drückend-ziehend, nicht pulsierend (Gefühl eines zu engen Huts). Keine Verstärkung bei körperlicher Aktivität, evtl. Lärm- und Lichtempfindlichkeit.", "Therapie: kurzfristig Schmerzmittel (z. B. Ibuprofen), zur Vorbeugung bestimmte Antidepressiva, Entspannungsverfahren, Physiotherapie.", "Beraten: Dauergebrauch von NSAR kann Kopfschmerz auslösen. Ausdauersport, gesunde Ernährung, Entspannung, Verzicht auf Alkohol."),
      B("Trigeminusneuralgie", "Meist einseitiger, attackenartiger starker Gesichtsschmerz im Versorgungsgebiet des V. Hirnnervs.", "Idiopathisch (Ursache unklar, evtl. Gefäßschlinge drückt auf den Nerv) oder symptomatisch (z. B. bei MS, Gefäßschaden, Herpes zoster, Schädelbasisfraktur).", "Attacken bis zu 100-mal am Tag über Wochen bis Monate. Dazu Hautrötung, Tränen, Nasen- und Speichelfluss.", "Diagnostik: Anamnese, Befund, MRT, CT, Liquor zum Ausschluss der symptomatischen Form."),
      B("Therapie und Pflege bei Trigeminusneuralgie", "Antikonvulsiva wie Carbamazepin, Schmerzmittel allein reichen nicht.", "Bei Gefäßschlinge Entlastungs-OP, evtl. operative Läsion des Ganglion trigeminale.", "Aus Angst vor Schmerzen essen und trinken Patienten wenig: auf Flüssigkeit und Nährstoffe achten, Selbsthilfegruppen vermitteln."),
    ],
  },
  {
    id: "adhs-kinder", group: "krank", area: "psyche", title: "ADHS bei Kindern", icon: "Zap",
    ar: "اضطراب فرط الحركة وتشتت الانتباه (ADHS): الأطفال يجدون صعوبة في التركيز، كثيرو الحركة، قليلو تحمّل الإحباط. الأسباب غير واضحة: عوامل عصبية حيوية وبيئية. العلاج: تربوي ونفسي، وبعد سن 6 في الحالات الشديدة Methylphenidat (Ritalin). في المستشفى: ممرض مرجعي، إشراك الأهل، مدح النجاحات الصغيرة، قواعد واضحة وثابتة.",
    diagrams: [
      { kind: "tiles", title: "Kernsymptome", items: [
        { t: "Konzentrationsprobleme", icon: "Target", tone: "warn" },
        { t: "Unruhe, hoher Bewegungsdrang", icon: "Footprints", tone: "warn" },
        { t: "Geringe Frustrationstoleranz", icon: "Frown", tone: "warn" },
      ] },
      { kind: "table", title: "Umgang bei Klinikaufnahme", head: ["Ziel", "Praktisch"], rows: [
        ["Sicherheit und Vertrauen", "Bezugspflege, ausführliche Pflegeanamnese, Eltern einbeziehen"],
        ["Klarheit", "Erwartungen und Regeln klar nennen, sachlich und konsequent bleiben"],
        ["Selbstwert stärken", "Kleine Erfolge loben, Aufgaben mit Verantwortung geben"],
        ["Nicht aufschaukeln", "Negative Situationen nicht besonders hervorheben"],
      ] },
    ],
    blocks: [
      B("Was ist ADHS?", "Aufmerksamkeitsdefizit-Hyperaktivitätsstörung: Kinder können sich schlecht konzentrieren, sind unruhig, haben geringe Frustrationstoleranz und hohen Bewegungsdrang.", "Die Ursache ist unklar. Wahrscheinlich wirken neurobiologische Faktoren und Umweltfaktoren zusammen."),
      B("Behandlung", "Ziel ist, Symptome wie Hyperaktivität und Konzentrationsschwierigkeiten in den Griff zu bekommen.", "Hilfreich sind pädagogische und psychotherapeutische Maßnahmen.", "Nach dem 6. Lebensjahr kann in ausgeprägten Fällen Methylphenidat (z. B. Ritalin) die Symptome lindern, immer ärztlich verordnet und überwacht."),
      B("Pflege bei Klinikaufnahme", "Bezugspflege, ausführliche Pflegeanamnese, Eltern eng einbeziehen.", "Kleine Erfolge loben. Sachlich und konsequent bleiben.", "Erwartungen und Regeln klar kommunizieren.", "Negative Situationen nicht aufschaukeln.", "Aufgaben mit Verantwortung geben, das stärkt das Selbstwertgefühl."),
    ],
  },
  {
    id: "autismus-kinder", group: "krank", area: "psyche", title: "Frühkindlicher Autismus", icon: "Puzzle",
    ar: "التوحد الطفولي: اضطراب شديد في التواصل وبناء العلاقات يظهر قبل سن الثالثة. العلامات: تأخر الكلام، قلة الاهتمام بالتواصل (لا تواصل بصري، رفض الاحتضان)، صعوبة فهم مشاعر الآخرين، حركات نمطية، خوف شديد من التغيير. لا علاج سببي، بل دعم النمو (علاج سلوكي، موسيقي، إرشاد الأهل). في المستشفى: ممرض مرجعي، روتين معتاد، بيئة هادئة، تجنّب اللمس قدر الإمكان.",
    diagrams: [
      { kind: "tiles", title: "Typische Zeichen", items: [
        { t: "Später Sprechbeginn", icon: "MessageCircle", tone: "warn" },
        { t: "Wenig Blickkontakt, Abwehr von Körperkontakt", icon: "Eye", tone: "warn" },
        { t: "Schwer, Gefühle anderer zu erkennen", icon: "Smile", tone: "warn" },
        { t: "Stereotype Bewegungen", icon: "RefreshCw", tone: "warn" },
        { t: "Große Angst vor Veränderung", icon: "Clock", tone: "bad" },
      ] },
      { kind: "flow", title: "Aufnahme eines Kindes mit Autismus", steps: [
        { t: "Bezugspflege und ausführliche Pflegeanamnese", icon: "ClipboardCheck", tone: "info" },
        { t: "Eltern einbeziehen, gewohnten Tagesablauf erfragen", icon: "Users", tone: "info" },
        { t: "Besondere Gewohnheiten beibehalten", icon: "Clock", tone: "ok" },
        { t: "Ruhige Umgebung, Körperkontakt wenn möglich vermeiden", icon: "Moon", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Die Entwicklung von Kommunikation, Kontaktaufnahme und zwischenmenschlichen Beziehungen ist stark beeinträchtigt. Sie zeigt sich vor dem 3. Lebensjahr.", "Die Ursache ist nicht eindeutig geklärt. Vermutet wird eine hirnorganische Ursache mit genetischem Faktor."),
      B("Symptome", "Verspäteter Spracherwerb, kein Interesse an sozialen Kontakten (fehlender Blickkontakt, Abwehr von Körperkontakt).", "Schwierigkeiten, Emotionen anderer zu erkennen.", "Stereotype Bewegungen und Verhaltensweisen, große Angst vor Veränderungen."),
      B("Behandlung", "Man kann die Krankheit nicht ursächlich heilen. Ziel ist, Entwicklung und Lernfähigkeit zu fördern: Verhaltenstherapie, Musiktherapie, Elternberatung, Selbsthilfegruppen für Eltern."),
      B("Pflege im Krankenhaus", "Bezugspflege und ausführliche Pflegeanamnese bei Aufnahme.", "Eltern eng in die Pflege einbeziehen.", "Gewohnten Tagesablauf erfragen und beibehalten, besondere Gewohnheiten berücksichtigen.", "Ruhige Umgebung schaffen. Körperkontakt wenn möglich vermeiden. Eingriffe vorher in einfachen Worten ankündigen."),
    ],
  },
  {
    id: "persoenlichkeitsstoerung", group: "krank", area: "psyche", title: "Persönlichkeitsstörungen und Impulskontrollstörungen", icon: "Drama",
    ar: "اضطرابات الشخصية أنماط مزمنة منحرفة في الإدراك والسلوك والتفكير، سببها الاستعداد مع تجارب تعلّم مبكرة. أمثلة: الارتيابية (يتوقع الأسوأ ويشعر بأنه مراقب)، الفصامية (منغلق)، النرجسية (يعتقد أنه مميز، وعدوان عند قلة الاهتمام). الرعاية: بناء ثقة مهنية، اتفاقات واضحة، صبر، عدم التسامح مع العدوان. اضطرابات التحكم بالاندفاع: إشعال الحرائق، القمار، السرقة المرضية.",
    diagrams: [
      { kind: "table", title: "Drei Beispiele und die passende Haltung", head: ["Störung", "Typisch", "Pflege"], rows: [
        ["Paranoide", "Erwartet Schlechtes, fühlt sich beobachtet", "Vertrauensbasis, klare Absprachen, authentisch und glaubwürdig"],
        ["Schizoide", "Sehr verschlossen, keine engen Kontakte", "Vertrauensbasis, regelmäßige Kontaktangebote"],
        ["Narzisstische", "Hält sich für etwas Besonderes, aggressiv bei fehlender Aufmerksamkeit", "Geduld, aggressives Verhalten nicht tolerieren, klare Absprachen"],
      ] },
    ],
    blocks: [
      B("Was ist das?", "Chronische, von der Norm abweichende Wahrnehmungs-, Verhaltens- und Denkmuster.", "Ursachen: Veranlagung plus frühe Lernerfahrungen, z. B. selbstverstärkendes Vermeidungsverhalten."),
      B("Beispiele", "Paranoid: erwartet von der Umgebung Schlechtes, denkt, andere hätten es auf ihn abgesehen.", "Schizoid: verschlossen, unfähig zu engen sozialen Kontakten. Übergang zum Asperger-Syndrom fließend.", "Narzisstisch: überzeugt, etwas Besonderes zu sein, Aggression bei fehlender Aufmerksamkeit."),
      B("Pflegerischer Umgang", "Professionelle Vertrauensbasis schaffen.", "Klare Absprachen treffen und einhalten.", "Geduld, authentisch und glaubwürdig bleiben.", "Grenzen setzen: Aggressives Verhalten wird nicht toleriert."),
      B("Störungen der Impulskontrolle", "Betroffene leiden unter Impulsen, sich abnorm zu verhalten.", "Beispiele: pathologische Brandstiftung (Pyromanie), pathologisches Glücksspiel, pathologisches Stehlen (Kleptomanie)."),
    ],
  },
  {
    id: "otitis-media", group: "krank", area: "sinne", title: "Mittelohrentzündung (Otitis media)", icon: "Ear",
    ar: "التهاب الأذن الوسطى (Otitis media): التهاب مخاطية الأذن الوسطى، غالباً بعد عدوى المجاري التنفسية العلوية عبر قناة أوستاش، وأكثر عند الأطفال (القناة أقصر) أو تضخم اللحمية. الأعراض: ألم طاعن، ضغط، ضعف سمع، حمى؛ ثقب الطبلة يخرج سائلاً ويخف الألم. المضاعفات: التهاب الخشاء، تسمّم دماغي، كوليستياتوما. علاج: مسكنات، مضاد حيوي عند الاستمرار، شقّ الطبلة (Parazentese).",
    diagrams: [
      { kind: "flow", title: "Wie kommt es zur Otitis media?", steps: [
        { t: "Infekt der oberen Luftwege (Nase, Rachen)", icon: "Wind", tone: "warn" },
        { t: "Erreger wandern über die Ohrtrompete", icon: "Bug", tone: "warn" },
        { t: "Entzündung und Paukenerguss", icon: "Ear", tone: "bad" },
        { t: "Schmerz, Druck, Hörminderung, Fieber", icon: "Thermometer", tone: "bad" },
      ], note: "Kinder haben eine kürzere Ohrtrompete und oft vergrößerte Rachenmandeln: deshalb häufiger betroffen." },
      { kind: "table", title: "Komplikationen", head: ["Komplikation", "Was passiert?"], rows: [
        ["Mastoiditis", "Entzündung des Warzenfortsatzes"],
        ["Labyrinthitis", "Entzündung des Innenohrs"],
        ["Abszess oder Meningitis", "Durchbruch in Nachbarstrukturen"],
        ["Chronische Otitis, Cholesteatom", "Loch im Trommelfell, Plattenepithel wuchert ins Mittelohr, Gehörknöchelchen werden zerstört"],
      ] },
    ],
    blocks: [
      B("Ursachen", "Meist Infektion der oberen Luftwege. Erreger gelangen über die Ohrtrompete ins Mittelohr.", "Erhöhtes Risiko: verkürzte Ohrtrompete (Kinder) oder gestörte Belüftung, z. B. bei zu großen Rachenmandeln."),
      B("Symptome", "Stechende Schmerzen, Druckgefühl im Ohr, schlechtes Hören durch Paukenerguss, Fieber.", "Reißt das Trommelfell, fließt Flüssigkeit aus dem Ohr und der Schmerz lässt nach."),
      B("Therapie", "Akut: NSAR. Erst bei anhaltenden Beschwerden Antibiotika, ggf. Parazentese (Trommelfell wird geschlitzt, damit Sekret abfließt).", "Chronisch: Trommelfelldefekt verschließen, ggf. Cholesteatom operativ entfernen.", "Vorbeugung bei Kindern, die zu Otitis neigen: bei Schnupfen abschwellende und schleimlösende Nasentropfen oder -sprays."),
      B("Pflege", "Nasentropfen oder -spray verabreichen.", "Schmerzmanagement nach Anordnung. Ein Zwiebelwickel kann schmerzlindernd wirken.", "Hektik und Lärm vermeiden. Bei Fieber entsprechende Pflege."),
    ],
  },
  {
    id: "hoerstoerungen", group: "krank", area: "sinne", title: "Hörsturz, Tinnitus, Lärmschaden und Schwerhörigkeit", icon: "Ear",
    ar: "الصمم المفاجئ (Hörsturz): فقدان سمع مفاجئ غالباً في أذن واحدة مع طنين وضغط ودوار؛ السبب غالباً مجهول، يُعطى كورتيزون وريدي. الطنين (Tinnitus) صفير أو أزيز، أسبابه: ضجيج، صمم مفاجئ، شيخوخة، أدوية سامة للأذن، توتر. ضرر الضجيج من 85 ديسيبل. أنواع ضعف السمع: توصيلي وحسّي عصبي. ضعف السمع الشيخي يبدأ بالترددات العالية ويحتاج سماعة لتجنب العزلة.",
    diagrams: [
      { kind: "table", title: "Hörstörungen im Überblick", head: ["Krankheit", "Kern", "Therapie / Pflege"], rows: [
        ["Hörsturz", "Plötzlicher, meist einseitiger Hörverlust, oft mit Tinnitus, Druck, Schwindel", "Ursache meist unbekannt, oft Kortikosteroid-Infusionen"],
        ["Tinnitus", "Pfeifen, Piepsen oder Rauschen im Ohr", "Ursache behandeln, Psychotherapie hilft bei der Bewältigung"],
        ["Lärmschaden", "Haarzellen im Innenohr geschädigt, ab 85 dB über Jahre oder Knall", "Vorbeugen mit Gehörschutz, Schaden oft nicht umkehrbar"],
        ["Presbyakusis", "Altersschwerhörigkeit, hohe Töne zuerst", "Hörgerät, sonst droht Vereinsamung und Abbau der Kognition"],
      ] },
      { kind: "compare", title: "Zwei Formen der Schwerhörigkeit", cols: [
        { t: "Schallleitung", icon: "Ear", tone: "info", items: ["Schall wird auf dem Weg ins Innenohr behindert", "Ohrenschmalz, Fremdkörper, Mittelohrentzündung", "Oft gut behandelbar"] },
        { t: "Schallempfindung", icon: "Ear", tone: "warn", items: ["Innenohr kann den Schall nicht verarbeiten", "Haarzellen geschädigt", "Hörgerät oder weitere Hilfen"] },
      ] },
    ],
    blocks: [
      B("Hörsturz", "Plötzlicher, meist einseitiger Hörverlust, dazu oft Tinnitus mit Druckgefühl und Schwindel.", "Vermutete Auslöser: Durchblutungsstörungen, Entzündung des Hörnervs, psychosomatische Faktoren. Da die Ursache meist unbekannt ist, ist eine ursächliche Therapie schwierig. Oft werden Kortikosteroid-Infusionen versucht."),
      B("Tinnitus", "Pfeifen, Piepsen oder Rauschen im Ohr. Kann akut, chronisch oder vorübergehend sein.", "Auslöser: Lärmschäden, Hörsturz, Altersschwerhörigkeit, ototoxische Medikamente (z. B. Zytostatika), Morbus Menière, Stress, Akustikusneurinom.", "Meist in stiller Umgebung belastend. Viele Patienten haben Angst oder Depression. Liegt eine Erkrankung zugrunde, wird sie behandelt, sonst helfen Infusionen versuchsweise und Psychotherapie bei der Bewältigung."),
      B("Lärmschaden", "Schallwellen ab einem bestimmten Pegel beschädigen die Haarzellen im Innenohr, teils irreversibel.", "Ursachen: sehr lauter Knall, lautes Konzert, jahrelange Belastung ab 85 Dezibel (Verkehr, Industrielärm). Bei Explosion können sogar Trommelfell und Gehörknöchelchen reißen."),
      B("Schwerhörigkeit", "Schallleitungsschwerhörigkeit: Schall wird auf dem Weg ins Innenohr behindert (Ohrenschmalz, Fremdkörper, Mittelohrentzündung).", "Schallempfindungsschwerhörigkeit: Das Innenohr verarbeitet den Schall nicht.", "Altersschwerhörigkeit: Haarsinneszellen lassen nach, zuerst gehen hohe Frequenzen verloren. Unbehandelt führt sie oft zu Vereinsamung, kognitivem Abbau und psychischen Problemen. Ein Hörgerät ist wichtig."),
      B("Kommunikation in der Pflege", "Ruhige Umgebung, Blickkontakt, langsam und deutlich sprechen, nicht schreien.", "Hörgerät pflegen, Batterie prüfen, bei Bedarf einsetzen und dokumentieren."),
    ],
  },
];
