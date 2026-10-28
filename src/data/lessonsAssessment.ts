/**
 * Assessment und Einschätzungsinstrumente in der Pflege.
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten – KEIN Buchtext.
 * Punktgrenzen sind gängige Richtwerte. Maßgeblich sind Hausstandard, Manual des Instruments und ärztliche Anordnung.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const ASSESSMENT_LESSONS: Lesson[] = [
  {
    id: "assess-grundlagen", group: "ausbildung", area: "assessment", title: "Assessment: Grundlagen und Ablauf", icon: "ClipboardCheck",
    ar: "التقييم (Assessment) هو جمع منظم للمعلومات عن المريض لاكتشاف المخاطر والموارد. الفحص السريع (Screening) يفرز، والتقييم المفصّل يحلل. أدوات التقييم تدعم الحكم المهني ولا تستبدله.",
    diagrams: [
      { kind: "flow", title: "Von der Beobachtung zur Maßnahme", steps: [
        { t: "Screening", s: "Kurzer Test: Gibt es ein Risiko?", icon: "Search", tone: "info" },
        { t: "Assessment", s: "Genaue Einschätzung mit Instrument", icon: "ClipboardCheck", tone: "info" },
        { t: "Pflegeproblem und Ziel", s: "Risiko oder Ressource benennen", icon: "Target", tone: "warn" },
        { t: "Maßnahmen planen und durchführen", icon: "HandHelping", tone: "ok" },
        { t: "Evaluation", s: "Wirkt es? Erneut einschätzen", icon: "RefreshCw", tone: "ok" },
      ] },
      { kind: "compare", title: "Screening oder Assessment?", cols: [
        { t: "Screening", icon: "Search", tone: "info", items: ["Schnell, wenige Fragen", "Findet Verdacht auf ein Problem", "Beispiel: MNA-Kurzform, Schmerz-NRS", "Bei Auffälligkeit folgt das Assessment"] },
        { t: "Assessment", icon: "ClipboardCheck", tone: "warn", items: ["Ausführlich, strukturiert", "Beschreibt Ausmaß und Ursachen", "Beispiel: Barthel, Braden, MMST", "Grundlage für die Pflegeplanung"] },
      ] },
    ],
    blocks: [
      B("Wozu Assessment?", "Risiken früh erkennen (Sturz, Dekubitus, Mangelernährung, Schmerz, Delir).", "Ressourcen sichtbar machen: Was kann der Mensch noch selbst?", "Pflege vergleichbar und nachvollziehbar machen, auch vor Gericht und für den MD.", "Den Erfolg von Maßnahmen messen (Verlauf)."),
      B("Fremd- und Selbsteinschätzung", "Selbsteinschätzung: Der Patient beurteilt selbst, z. B. Schmerzstärke auf der NRS. Das ist die erste Wahl, wenn möglich.", "Fremdeinschätzung: Pflegende beurteilen, z. B. Braden-Skala oder BESD bei Demenz.", "Beides ergänzt sich. Angehörige können wichtige Hinweise geben."),
      B("Gütekriterien eines Instruments", "Validität: Es misst, was es messen soll.", "Reliabilität: Verschiedene Personen kommen zum gleichen Ergebnis.", "Sensitivität: Es erkennt Betroffene. Spezifität: Es erkennt Gesunde als gesund.", "Praktikabilität: Es ist im Alltag in kurzer Zeit machbar."),
      B("Grenzen von Skalen", "Eine Skala ersetzt nie die klinische Beobachtung und das Fachwissen.", "Zahlen ohne Beobachtung führen zu falscher Sicherheit. Auffälligkeiten melden, auch wenn der Score unauffällig ist.", "Skalen nur für die Zielgruppe nutzen, für die sie entwickelt wurden (z. B. nicht jede Schmerzskala bei Demenz)."),
      B("Praxis", "Einschätzung bei Aufnahme, bei Zustandsänderung und nach Plan wiederholen.", "Ergebnis und Folgen in der Dokumentation festhalten: Score, Datum, Handzeichen, geplante Maßnahme.", "Immer mit dem Menschen sprechen: Zustimmung holen, erklären, warum gefragt wird."),
    ],
  },
  {
    id: "assess-barthel", group: "ausbildung", area: "assessment", title: "Selbstständigkeit: Barthel-Index und Pflegebedarf", icon: "Gauge",
    ar: "مؤشر بارثل يقيس الاستقلالية في 10 أنشطة يومية، من 0 إلى 100 نقطة. كلما ارتفع الرقم زادت الاستقلالية. يُستخدم في التأهيل والتخطيط للرعاية.",
    diagrams: [
      { kind: "table", title: "Barthel-Index: 10 Bereiche (Beispiele für die Punktvergabe)", head: ["Bereich", "Beispiel für volle Selbstständigkeit"], rows: [
        ["Essen", "Isst allein, Essen wird nur bereitgestellt"],
        ["Aufsetzen und Umsetzen", "Bett und Stuhl ohne Hilfe"],
        ["Sich waschen", "Gesicht, Zähne, Haare allein"],
        ["Toilettenbenutzung", "Geht allein zur Toilette und reinigt sich"],
        ["Baden/Duschen", "Duscht oder badet allein"],
        ["Aufstehen und Gehen", "Geht mindestens 50 m ohne Hilfe"],
        ["Treppensteigen", "Eine Treppe allein"],
        ["An- und Auskleiden", "Kleidung allein, Schuhe binden"],
        ["Stuhlkontrolle", "Kontinent"],
        ["Harnkontrolle", "Kontinent"],
      ], note: "Je Bereich 0, 5, 10 oder 15 Punkte. Summe 0 bis 100." },
      { kind: "bar", title: "Gesamtpunkte (Richtwerte)", parts: [
        { t: "Weitgehend pflegeabhängig", s: "0–30", tone: "bad" },
        { t: "Hilfsbedürftig", s: "35–80", tone: "warn", w: 1.6 },
        { t: "Punktuell Hilfe", s: "85–95", tone: "info" },
        { t: "Selbstständig", s: "100", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was der Index zeigt", "Er bildet die Alltagsfähigkeiten (ADL) ab, nicht die Pflegequalität.", "Er eignet sich für Verlaufskontrollen: Punkte steigen bei Reha-Erfolg, sinken bei Verschlechterung.", "Er erfasst nicht Kognition, Kommunikation oder Stimmung. Dazu braucht man andere Instrumente."),
      B("So wird eingeschätzt", "Beobachten, was der Mensch tatsächlich tut, nicht was er könnte oder früher konnte.", "Bei Unsicherheit die niedrigere Punktzahl wählen. Hilfsmittel (Gehstock, Rollator) zählen mit, wenn sie genutzt werden.", "Immer dasselbe Manual nutzen (z. B. Hamburger Einstufungsmanual), damit Ergebnisse vergleichbar bleiben."),
      B("Ressourcen fördern", "Nicht alles abnehmen: aktivierende Pflege nutzt die vorhandenen Fähigkeiten.", "Bewegung, Anleitung und Zeit sind Teil der Maßnahme. Hilfsmittel passend wählen und Üben anbieten.", "Beispiel: Wer sich noch teilweise waschen kann, bekommt die Utensilien hingestellt und Hilfe nur dort, wo nötig."),
      B("Ergänzende Instrumente", "Erweiterter Barthel-Index (zusätzlich Kognition und Kommunikation).", "FIM (Functional Independence Measure): feinere Abstufung, oft in der Reha.", "Katz-Index und Lawton-IADL für Alltagsaktivitäten und Haushaltsführung."),
    ],
  },
  {
    id: "assess-dekubitus", group: "ausbildung", area: "assessment", title: "Dekubitusrisiko: Braden, Norton und Kategorien", icon: "BedDouble",
    ar: "تقييم خطر قرحة الضغط: مقياس برادن (6 بنود، 6–23، أقل = خطر أكبر) ونورتون (5 بنود). لا يغني عن الفحص السريري للجلد. القرحة تُصنَّف في 4 فئات.",
    diagrams: [
      { kind: "table", title: "Braden-Skala: 6 Bereiche", head: ["Bereich", "Frage dahinter"], rows: [
        ["Sensorisches Empfindungsvermögen", "Spürt der Mensch Druck und Schmerz?"],
        ["Feuchtigkeit", "Ist die Haut oft nass (Schweiß, Urin)?"],
        ["Aktivität", "Läuft er, sitzt er, liegt er nur?"],
        ["Mobilität", "Kann er seine Lage selbst ändern?"],
        ["Ernährung", "Isst und trinkt er ausreichend?"],
        ["Reibung und Scherkräfte", "Rutscht er im Bett oder Stuhl?"],
      ], note: "Fünf Bereiche 1–4 Punkte, Reibung 1–3 Punkte. Summe 6 bis 23. Niedrig = hohes Risiko." },
      { kind: "bar", title: "Braden: Risiko nach Punkten (Richtwerte)", parts: [
        { t: "Sehr hoch", s: "9 oder weniger", tone: "bad" },
        { t: "Hoch", s: "10–12", tone: "bad" },
        { t: "Mäßig", s: "13–14", tone: "warn" },
        { t: "Gering", s: "15–18", tone: "info" },
        { t: "Kein Risiko", s: "19–23", tone: "ok" },
      ] },
      { kind: "pyramid", title: "Dekubitus-Kategorien (oben = tiefster Schaden)", levels: [
        { t: "Kategorie 4", s: "Defekt bis Muskel, Sehne oder Knochen", tone: "bad" },
        { t: "Kategorie 3", s: "Verlust aller Hautschichten, Fettgewebe sichtbar", tone: "bad" },
        { t: "Kategorie 2", s: "Teilverlust der Haut, Blase oder flaches Geschwür", tone: "warn" },
        { t: "Kategorie 1", s: "Nicht wegdrückbare Rötung, Haut intakt", tone: "info" },
      ], note: "Test: Mit dem Finger auf die Rötung drücken. Bleibt sie rot, ist sie nicht wegdrückbar = Kategorie 1." },
    ],
    blocks: [
      B("Risiko einschätzen nach Expertenstandard", "Zuerst die klinische Einschätzung: Mobilität, Aktivität, Hautzustand, Druckstellen. Skalen ergänzen sie.", "Einschätzung bei Aufnahme, bei Zustandsänderung (OP, Sturz, Infekt) und regelmäßig danach.", "Hautinspektion bei Risiko mindestens täglich, besonders über Knochenvorsprüngen: Kreuzbein, Fersen, Sitzbeinhöcker, Hüfte, Knöchel."),
      B("Norton-Skala", "Fünf Bereiche: Körperzustand, Bewusstsein, Aktivität, Beweglichkeit, Inkontinenz. Je 1–4 Punkte, Summe 5 bis 20.", "Auch hier gilt: wenig Punkte = hohes Risiko. Unter 15 ist der Mensch gefährdet.", "Die Skala ist einfacher als Braden, berücksichtigt aber Ernährung und Reibung nicht."),
      B("Maßnahmen", "Druck verteilen: Mikrolagerung, Positionswechsel nach individuellem Plan, 30-Grad-Lagerung, Weichlagerung oder Wechseldruck nach Bedarf.", "Fersen freilagern. Scherkräfte vermeiden: Oberkörper nicht dauernd hoch, Rutschen verhindern.", "Haut pflegen und trocken halten, Inkontinenzprodukte passend wählen.", "Ernährung und Flüssigkeit sichern, Mobilisation fördern, Patient und Angehörige beraten."),
      B("Wann sofort handeln?", "Rötung, die nicht verschwindet: Belastung sofort wegnehmen, melden, dokumentieren.", "Offene Stelle, Blase, schwarze Stelle oder Infektzeichen (Geruch, Eiter, Fieber): Arzt und Wundexperten informieren."),
    ],
  },
  {
    id: "assess-sturz", group: "ausbildung", area: "assessment", title: "Sturzrisiko einschätzen", icon: "Footprints",
    ar: "تقييم خطر السقوط: عوامل داخلية (ضعف، أدوية، دوخة) وخارجية (أرضية، إضاءة، أحذية). اختبار Timed Up and Go يقيس الوقت للنهوض والمشي 3 م والعودة. بعد السقوط: فحص، إبلاغ، توثيق.",
    diagrams: [
      { kind: "compare", title: "Risikofaktoren", cols: [
        { t: "Innere Faktoren", icon: "User", tone: "warn", items: ["Alter, Muskelschwäche, Gleichgewichtsstörung", "Sehschwäche, Schwindel, Kreislaufprobleme", "Demenz, Delir, Angst vor dem Fallen", "Inkontinenz, Dranggefühl, nächtliches Aufstehen", "Früherer Sturz, Schlaganfall, Parkinson"] },
        { t: "Äußere Faktoren", icon: "Home", tone: "info", items: ["Stolperfallen, Teppichkanten, nasser Boden", "Schlechte Beleuchtung", "Falsche Schuhe, lose Hosenbeine", "Fehlende Haltegriffe, Hilfsmittel nicht in Reichweite", "Bettrolle und Rollstuhlbremse nicht gesichert"] },
      ], note: "Medikamente zählen zu den inneren Faktoren: Beruhigungsmittel, Blutdrucksenker, Schlafmittel, viele Medikamente zugleich (Polypharmazie)." },
      { kind: "flow", title: "Nach einem Sturz", steps: [
        { t: "Nicht sofort aufrichten", s: "Ansprechen, Bewusstsein, Schmerz, Fehlstellung prüfen", icon: "Eye", tone: "warn" },
        { t: "Hilfe holen", s: "Bei Verletzung, Kopfanprall, Bewusstseinsstörung: Arzt/Notruf", icon: "Siren", tone: "bad" },
        { t: "Vitalzeichen kontrollieren", icon: "Activity", tone: "info" },
        { t: "Sicher mobilisieren", s: "Erst nach Abklärung, mit Hilfsmittel", icon: "HandHelping", tone: "ok" },
        { t: "Dokumentieren und Ursache suchen", s: "Was ist passiert? Welche Maßnahme ändert sich?", icon: "ClipboardList", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Einschätzung nach Expertenstandard", "Bei Aufnahme und nach jedem Sturz oder jeder Veränderung nach Risikofaktoren fragen.", "Gangbild und Gleichgewicht beobachten. Bewegungstests wie Timed Up and Go (TUG) oder Tinetti-Test können ergänzen.", "Bei Risiko eine individuelle Maßnahmenplanung mit dem Patienten erstellen."),
      B("Timed Up and Go (TUG)", "Der Mensch steht von einem Stuhl auf, geht 3 Meter, dreht um, geht zurück und setzt sich. Die Zeit wird gemessen.", "Unter 10 Sekunden: unauffällig. 10 bis 19 Sekunden: leicht eingeschränkt. Ab 20 Sekunden: deutlich eingeschränkt, Sturzrisiko erhöht. Ab 30 Sekunden: hohes Risiko, meist auf Hilfe angewiesen.", "Gehhilfen dürfen genutzt werden und werden dokumentiert."),
      B("Maßnahmen", "Kraft und Gleichgewicht trainieren (Gruppen oder Einzelübungen), Hilfsmittel prüfen, Sehhilfe und Schuhe kontrollieren.", "Umgebung anpassen: Licht, Nachtlicht, freie Wege, Haltegriffe, Bett niedrig stellen, Klingel in Reichweite.", "Medikamente mit dem Arzt überprüfen. Auf Toilettengang achten, damit der Mensch nicht allein hastig aufsteht.", "Hüftprotektoren können Brüche vermindern, wenn sie wirklich getragen werden."),
      B("Fixierung ist keine Sturzprophylaxe", "Bettgitter und Gurte erhöhen das Risiko für schwere Verletzungen. Freiheitsentziehende Maßnahmen brauchen Einwilligung oder richterliche Genehmigung.", "Besser: Niedrigbett, Sensormatte, Begleitung, Beschäftigung, Tagesstruktur."),
    ],
  },
  {
    id: "assess-ernaehrung", group: "ausbildung", area: "assessment", title: "Ernährungsstatus: BMI, MNA, NRS und MUST", icon: "Utensils",
    ar: "تقييم التغذية: مؤشر كتلة الجسم، فقدان الوزن، ومقاييس MNA (كبار السن)، NRS 2002 (مستشفى)، MUST (مجتمع). الهدف اكتشاف سوء التغذية مبكراً.",
    diagrams: [
      { kind: "table", title: "Welches Instrument für wen?", head: ["Instrument", "Einsatz", "Auswertung (Richtwert)"], rows: [
        ["MNA-SF", "Ältere Menschen, Pflege, Reha", "12–14 normal, 8–11 Risiko, 0–7 mangelernährt"],
        ["NRS 2002", "Krankenhaus", "3 Punkte oder mehr: Risiko, Ernährungsplan nötig"],
        ["MUST", "Ambulant, Pflegeheim", "0 niedriges, 1 mittleres, 2 oder mehr hohes Risiko"],
        ["BMI", "Erste Orientierung", "Unter 18,5 Untergewicht (bei Älteren oft schon unter 22 auffällig)"],
      ] },
      { kind: "bar", title: "BMI für Erwachsene (Richtwerte)", parts: [
        { t: "Untergewicht", s: "unter 18,5", tone: "warn" },
        { t: "Normal", s: "18,5–24,9", tone: "ok", w: 1.4 },
        { t: "Übergewicht", s: "25–29,9", tone: "warn" },
        { t: "Adipositas", s: "ab 30", tone: "bad" },
      ], note: "BMI = Gewicht in kg geteilt durch Größe in Meter zum Quadrat. Bei alten Menschen und Muskelschwund nur eingeschränkt aussagekräftig." },
    ],
    blocks: [
      B("Warnzeichen für Mangelernährung", "Ungewollter Gewichtsverlust: mehr als 5 Prozent in einem Monat oder mehr als 10 Prozent in sechs Monaten.", "Wenig Appetit, wenig Essen, Schluck- oder Kauprobleme, schlechte Zähne oder Prothese.", "Chronische Krankheit, Depression, Demenz, Schmerzen, Medikamente mit Appetitverlust.", "Trockene Haut, Muskelschwund, Ödeme, Schwäche, schlechte Wundheilung."),
      B("Vorgehen", "Gewicht und Größe messen oder schätzen (bei Bettlägerigen Armspannweite oder Kniehöhe). Regelmäßig wiegen, immer unter gleichen Bedingungen.", "Essgewohnheiten, Vorlieben, Unverträglichkeiten, Kultur und Religion erfragen.", "Trinkmenge und Essmenge beobachten, bei Risiko Protokoll führen und Ernährungsfachkraft einbeziehen."),
      B("Maßnahmen", "Mahlzeiten ansprechend anrichten, kleine häufige Portionen, Lieblingsspeisen, Ruhe beim Essen, Hilfe nur wo nötig.", "Anreichern (Sahne, Öl, Eiweißpulver), Trinknahrung nach Anordnung.", "Mundpflege und Zähne/Prothese prüfen, Schmerzen und Übelkeit behandeln.", "Bei Schluckstörung: Logopädie, angepasste Kost, ggf. Sondenernährung nach ärztlicher Entscheidung und Einwilligung."),
      B("Flüssigkeit nicht vergessen", "Richtwert etwa 30 bis 35 ml pro kg Körpergewicht und Tag, sofern keine Einschränkung besteht (z. B. Herz- oder Niereninsuffizienz).", "Zeichen von Austrocknung: trockene Zunge und Haut, stehende Hautfalte, dunkler Urin, Verwirrtheit, Schwindel."),
    ],
  },
  {
    id: "assess-schmerz", group: "ausbildung", area: "assessment", title: "Schmerzassessment: Skalen und Beobachtung", icon: "Feather",
    ar: "تقييم الألم: الألم هو ما يقوله المريض. مقياس NRS (0–10)، VAS، VRS للتعبير الكلامي. لمن لا يتكلم (خرف) تستخدم BESD. ثم توثيق وإعادة تقييم بعد العلاج.",
    diagrams: [
      { kind: "table", title: "Schmerzskalen im Überblick", head: ["Skala", "Für wen", "So geht es"], rows: [
        ["NRS", "Orientierte Erwachsene", "Zahl 0 (kein) bis 10 (stärkster vorstellbarer Schmerz)"],
        ["VAS", "Orientierte Erwachsene", "Schieber oder Linie, Schmerz markieren"],
        ["VRS", "Erwachsene mit Wortwahl", "Worte: kein, leicht, mäßig, stark, sehr stark"],
        ["Gesichterskala", "Kinder, Menschen mit Sprachproblemen", "Gesicht auswählen, das zum Schmerz passt"],
        ["BESD", "Menschen mit schwerer Demenz", "5 Beobachtungen je 0–2 Punkte: Atmung, Lautäußerung, Gesicht, Körpersprache, Trost"],
      ] },
      { kind: "flow", title: "Schmerz systematisch erfassen (Merkhilfe)", steps: [
        { t: "Wo?", s: "Ort und Ausstrahlung", icon: "MapPin" },
        { t: "Wann und wie lange?", s: "Beginn, Dauer, Verlauf, Tagesrhythmus", icon: "Clock" },
        { t: "Wie?", s: "stechend, brennend, dumpf, krampfartig", icon: "Zap", tone: "warn" },
        { t: "Wie stark?", s: "Ruhe, Belastung, Skala", icon: "Gauge", tone: "warn" },
        { t: "Was hilft oder verschlimmert?", s: "Lagerung, Wärme, Medikamente", icon: "Thermometer", tone: "info" },
        { t: "Wirkung kontrollieren", s: "Nach Maßnahme erneut messen", icon: "RefreshCw", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Grundsätze nach Expertenstandard", "Schmerz ist, was der Betroffene angibt. Er wird ernst genommen und nicht angezweifelt.", "Bei Aufnahme und regelmäßig nach Schmerz fragen, in Ruhe und bei Bewegung.", "Schmerzfreiheit oder tolerables Maß: individuell vereinbartes Ziel. Häufig gelten NRS-Werte unter 3 in Ruhe als Ziel."),
      B("Akuter und chronischer Schmerz", "Akut: klares Warnsignal, zeitlich begrenzt, Ursache meist erkennbar.", "Chronisch: länger als 3 bis 6 Monate, eigenes Krankheitsbild, oft Folgen für Schlaf, Stimmung, Alltag.", "Totaler Schmerz (Palliativ): körperliche, seelische, soziale und spirituelle Anteile."),
      B("Bei Menschen mit Demenz", "Hinweise sind oft nonverbal: Stöhnen, Gesichtsverziehen, Schonhaltung, Unruhe, Aggression, Rückzug, Essverweigerung.", "Mit BESD oder einem anderen Fremdeinschätzungsinstrument beobachten, immer im selben Rahmen (Ruhe, Bewegung).", "Bei Verdacht Schmerzmittel nach Anordnung geben und Wirkung beobachten."),
      B("Pflegerische Maßnahmen", "Lagerung, Wärme oder Kälte, Entspannung, Ablenkung, Massage nach Verträglichkeit.", "Medikamente nach Anordnung und Stufenschema der WHO (nichtopioid, schwach opioid, stark opioid) pünktlich geben, Nebenwirkungen beobachten (Übelkeit, Verstopfung, Sedierung).", "Vor schmerzhaften Maßnahmen rechtzeitig Analgetika wirken lassen."),
    ],
  },
  {
    id: "assess-bewusstsein-vital", group: "ausbildung", area: "assessment", title: "Bewusstsein und Vitalwerte: GCS, AVPU, Warnscores", icon: "Activity",
    ar: "تقييم الوعي: مقياس غلاسكو (فتح العين 1–4، الكلام 1–5، الحركة 1–6، المجموع 3–15). AVPU للتقييم السريع. علامات حيوية وأنظمة إنذار مبكر مثل NEWS وqSOFA تكشف التدهور.",
    diagrams: [
      { kind: "table", title: "Glasgow Coma Scale (GCS)", head: ["Bereich", "Punkte", "Beispiel"], rows: [
        ["Augen öffnen", "1–4", "4 spontan, 3 auf Ansprache, 2 auf Schmerz, 1 nie"],
        ["Verbale Antwort", "1–5", "5 orientiert, 4 verwirrt, 3 einzelne Worte, 2 Laute, 1 keine"],
        ["Motorik", "1–6", "6 befolgt Aufforderung, 5 gezielt, 4 Abwehr, 3 Beugen, 2 Strecken, 1 keine"],
      ], note: "Summe 3 bis 15. 13–15 leicht, 9–12 mittel, 8 oder weniger schwer gestört." },
      { kind: "flow", title: "AVPU: Schnelle Bewusstseinsprüfung", steps: [
        { t: "A – Alert", s: "wach", icon: "Eye", tone: "ok" },
        { t: "V – Voice", s: "reagiert auf Ansprache", icon: "MessageCircle", tone: "info" },
        { t: "P – Pain", s: "reagiert nur auf Schmerzreiz", icon: "Hand", tone: "warn" },
        { t: "U – Unresponsive", s: "keine Reaktion", icon: "Siren", tone: "bad" },
      ] },
      { kind: "table", title: "Vitalwerte Erwachsene (Richtwerte)", head: ["Wert", "Normal", "Hinweis"], rows: [
        ["Puls", "60–100 pro Minute", "Unregelmäßig oder sehr schnell/langsam: melden"],
        ["Blutdruck", "um 120/80 mmHg", "Ab 140/90 erhöht, systolisch unter 100 niedrig"],
        ["Atemfrequenz", "12–18 pro Minute", "Über 22 pro Minute ist ein Warnzeichen"],
        ["SpO2", "95–100 %", "Unter 90 % ist kritisch (COPD-Zielwerte beachten)"],
        ["Temperatur", "36,0–37,4 °C", "Ab 38,1 °C Fieber"],
      ] },
    ],
    blocks: [
      B("Bewusstseinsstörungen beschreiben", "Benommen: schläfrig, aber weckbar. Somnolent: schläft viel, auf Ansprache weckbar. Soporös: nur auf starke Reize weckbar. Komatös: nicht weckbar.", "Wichtig ist die genaue Beschreibung, nicht nur der Fachbegriff: Was passiert bei Ansprache, Berührung, Schmerzreiz?"),
      B("Pupillen und Neuro-Check", "Größe, Form, Seitengleichheit und Lichtreaktion prüfen.", "Ungleiche Pupillen, einseitige Lähmung, plötzliche Sprachstörung oder starke Kopfschmerzen: Notfall.", "Beim Schlaganfall hilft FAST: Face (Gesicht hängt), Arms (Arm sinkt), Speech (Sprache undeutlich), Time (sofort Notruf)."),
      B("Frühwarnscores", "NEWS (National Early Warning Score) fasst Atmung, SpO2, Blutdruck, Puls, Bewusstsein und Temperatur in einer Zahl zusammen. Je höher, desto dringlicher die ärztliche Reaktion.", "qSOFA hilft beim Sepsisverdacht: Atemfrequenz 22 oder mehr, Bewusstseinsänderung, systolischer Druck 100 oder weniger. Zwei oder mehr Kriterien = Alarm.", "Trend beobachten: Eine schleichende Verschlechterung ist oft das erste Zeichen."),
      B("Praxis", "Messwerte unter gleichen Bedingungen erfassen (Ruhe, gleiche Körperseite, gleiches Gerät).", "Gerät und Manschettengröße passend, Hände warm bei Pulsoxymeter.", "Auffällige Werte erneut messen, dann melden. Immer im Zusammenhang mit dem Befinden bewerten."),
    ],
  },
  {
    id: "assess-kognition-psyche", group: "ausbildung", area: "assessment", title: "Kognition und Stimmung: MMST, DemTect, Uhrentest, GDS, CAM", icon: "Brain",
    ar: "تقييم الإدراك والمزاج: MMST (0–30)، اختبار الساعة، DemTect، مقياس الاكتئاب GDS، وطريقة CAM للهذيان (Delir). الهذيان يبدأ فجأة ويتقلب ويمكن علاجه، الخرف يتطور ببطء.",
    diagrams: [
      { kind: "table", title: "Instrumente im Überblick", head: ["Instrument", "Frage", "Auswertung (Richtwert)"], rows: [
        ["MMST", "Orientierung, Gedächtnis, Sprache, Rechnen", "30 Punkte. 27–30 unauffällig, 20–26 leicht, 10–19 mittel, unter 10 schwer"],
        ["Uhrentest", "Zahlen und Zeiger einer Uhr zeichnen", "Fehler weisen auf Störung von Planung und Raumvorstellung"],
        ["DemTect", "Kurztest für frühe Demenz", "13–18 altersgemäß, 9–12 leicht beeinträchtigt, 8 oder weniger Demenzverdacht"],
        ["GDS (15 Fragen)", "Depression bei Älteren", "6 oder mehr Punkte: Hinweis auf Depression"],
        ["CAM", "Delir-Diagnose", "Siehe Diagramm"],
      ], note: "Tests zeigen einen Verdacht. Die Diagnose stellt der Arzt." },
      { kind: "compare", title: "Delir, Demenz, Depression", cols: [
        { t: "Delir", icon: "Zap", tone: "bad", items: ["Beginn akut, Stunden bis Tage", "Schwankt im Tagesverlauf, nachts schlimmer", "Aufmerksamkeit gestört, Bewusstsein verändert", "Meist ursächlich behandelbar (Infekt, Medikament, Exsikkose)"] },
        { t: "Demenz", icon: "Brain", tone: "warn", items: ["Beginn schleichend, Monate bis Jahre", "Gedächtnis, Orientierung, Alltagsfähigkeit nehmen ab", "Bewusstsein lange klar", "Nicht heilbar, aber beeinflussbar"] },
        { t: "Depression", icon: "CloudRain", tone: "info", items: ["Gedrückte Stimmung, Antriebslosigkeit", "Klagen über Gedächtnis, wirkt aber ansprechbar", "Schlaf- und Appetitstörung", "Behandelbar mit Therapie/Medikamenten"] },
      ] },
    ],
    blocks: [
      B("CAM: vier Merkmale", "1 Akuter Beginn und schwankender Verlauf.", "2 Aufmerksamkeitsstörung (z. B. kann Gespräch nicht verfolgen).", "3 Desorganisiertes Denken (wirre Sätze).", "4 Veränderte Bewusstseinslage (zu wach oder zu schläfrig).", "Delir wahrscheinlich bei 1 und 2 sowie 3 oder 4."),
      B("Delir erkennen und vorbeugen", "Risiko: Alter, Demenz, OP, Infekt, Schmerz, Dehydratation, viele Medikamente, Schlafmangel, Fixierung.", "Vorbeugung: Orientierung (Uhr, Kalender, Brille, Hörgerät), Tagesstruktur, Bewegung, Trinken, Schlafhygiene, Schmerztherapie, Ruhe, vertraute Personen.", "Bei Verdacht sofort Arzt informieren: Ursache suchen. Nicht allein lassen, ruhig sprechen, Sicherheit schaffen."),
      B("Tests mit Respekt durchführen", "Ruhige Umgebung, Brille und Hörgerät bereit, keine Prüfungsatmosphäre. Erklären, warum man fragt.", "Scham und Angst ernst nehmen. Ergebnis behutsam besprechen.", "Nicht als Beweis für Fähigkeiten im Alltag überbewerten. Verlauf beobachten."),
      B("Zeichen für Suizidgefährdung", "Äußerungen über Hoffnungslosigkeit oder Sterbewunsch, Rückzug, Abschiednehmen, Verschenken von Dingen.", "Sofort ernst nehmen, nicht allein lassen, Arzt und Team informieren, offen und ruhig ansprechen. Ansprechen erhöht das Risiko nicht."),
    ],
  },
  {
    id: "assess-kontinenz-schlucken", group: "ausbildung", area: "assessment", title: "Kontinenz und Schlucken einschätzen", icon: "Droplets",
    ar: "تقييم السلس البولي: أنواع (الجهد، الإلحاح، الفيض، المنعكس، الوظيفي) مع سجل التبول. تقييم البلع: علامات خطر الشفط (سعال أثناء الأكل، صوت مبحوح، حمّى). إشراك الطبيب والمعالج.",
    diagrams: [
      { kind: "table", title: "Formen der Harninkontinenz", head: ["Form", "Merkmal", "Beispiel/Hinweis"], rows: [
        ["Belastung", "Urinverlust bei Husten, Lachen, Heben", "Beckenboden schwach, nach Geburten"],
        ["Drang", "Plötzlicher starker Harndrang, schafft es nicht zur Toilette", "Überaktive Blase, Infekt, Demenz"],
        ["Überlauf", "Blase voll, tröpfelt ständig", "Prostatavergrößerung, Nervenschaden"],
        ["Reflex", "Entleerung ohne Gefühl, ohne Kontrolle", "Querschnitt, Nervenschäden"],
        ["Funktionell", "Blase gesund, aber Toilette nicht erreichbar oder Handeln unmöglich", "Mobilität, Demenz, fehlende Hilfe"],
      ], note: "Mischformen sind häufig. Medikamente prüfen: z. B. Entwässerungsmittel." },
      { kind: "tiles", title: "Warnzeichen beim Schlucken", items: [
        { t: "Husten beim Essen oder Trinken", icon: "Wind", tone: "warn" },
        { t: "Gurgelnde, feuchte Stimme", icon: "Mic", tone: "warn" },
        { t: "Essen bleibt im Mund", icon: "Utensils", tone: "warn" },
        { t: "Speichel läuft aus dem Mund", icon: "Droplets", tone: "warn" },
        { t: "Wiederkehrende Lungenentzündung", icon: "Siren", tone: "bad" },
        { t: "Gewichtsverlust, Angst vor dem Essen", icon: "TrendingDown", tone: "bad" },
      ] },
    ],
    blocks: [
      B("Kontinenzförderung nach Expertenstandard", "Bei Risiko nach Beschwerden fragen, Trink- und Miktionsprotokoll über mehrere Tage führen (Zeiten, Menge, Verlust, Auslöser).", "Maßnahmen: Toilettentraining, Beckenbodentraining, Hilfsmittel erreichbar, Umgebung anpassen, Obstipation behandeln, Trinkmenge nicht einschränken.", "Inkontinenzprodukte erst, wenn andere Maßnahmen nicht reichen. Sie sollen zum Befund passen."),
      B("Haut und Intimsphäre", "Feuchtigkeit und Urin schädigen die Haut: schonend reinigen, pflegen, Schutzfilm. Wechsel rechtzeitig.", "Diskretion und Würde: Gespräch unter vier Augen, Tür schließen, ohne Vorwürfe."),
      B("Schluckstörung (Dysphagie) beobachten", "Ursachen: Schlaganfall, Parkinson, Demenz, Tumor im Hals, Operationen.", "Nach Verdacht Logopäden oder Arzt informieren. Schluckscreenings (z. B. Wasserschlucktest) nur nach Hausstandard und Einweisung durchführen.", "Bis zur Klärung ggf. Nahrung und Trinken nach Anordnung anpassen."),
      B("Sicheres Essen anreichen", "Aufrechte Sitzhaltung, Kopf leicht nach vorn, ausreichend Zeit, kleine Portionen, nicht reden lassen.", "Nach dem Essen noch etwa 30 Minuten aufrecht bleiben und Mund kontrollieren (Reste).", "Bei Husten, Atemnot, Blauwerden: Essen stoppen und Hilfe holen."),
    ],
  },
  {
    id: "assess-sis-nba", group: "ausbildung", area: "assessment", title: "SIS, Pflegeanamnese und Pflegegrad (NBA)", icon: "ClipboardList",
    ar: "SIS هي الجمع المنظم للمعلومات في 6 مجالات مع مصفوفة المخاطر. الـNBA يحدد درجة الرعاية (1–5) بناءً على 6 وحدات بأوزان مختلفة، وتقيّمه هيئة المراجعة الطبية.",
    diagrams: [
      { kind: "tiles", title: "SIS: 6 Themenfelder", items: [
        { t: "Kognitive und kommunikative Fähigkeiten", icon: "Brain" },
        { t: "Mobilität und Beweglichkeit", icon: "Footprints" },
        { t: "Krankheitsbezogene Anforderungen", icon: "Stethoscope" },
        { t: "Selbstversorgung", icon: "ShowerHead" },
        { t: "Leben in sozialen Beziehungen", icon: "Users" },
        { t: "Wohnen und Häuslichkeit", icon: "Home" },
      ], note: "Dazu die Risikomatrix: Dekubitus, Sturz, Inkontinenz, Schmerz, Ernährung und Weiteres. Beginn mit der Sicht des Menschen." },
      { kind: "table", title: "Pflegegrad: Module und Gewichtung", head: ["Modul", "Gewichtung"], rows: [
        ["1 Mobilität", "10 %"],
        ["2 Kognitive und kommunikative Fähigkeiten und 3 Verhaltensweisen/psychische Problemlagen", "15 % (das höhere von beiden zählt)"],
        ["4 Selbstversorgung", "40 %"],
        ["5 Umgang mit krankheitsbedingten Anforderungen", "20 %"],
        ["6 Gestaltung des Alltagslebens und soziale Kontakte", "15 %"],
      ], note: "Module 7 (außerhäusliche Aktivitäten) und 8 (Haushaltsführung) werden erhoben, fließen aber nicht in den Pflegegrad ein." },
      { kind: "bar", title: "Pflegegrade nach Gesamtpunkten (0–100)", parts: [
        { t: "PG 1", s: "12,5 bis unter 27", tone: "info" },
        { t: "PG 2", s: "27 bis unter 47,5", tone: "info" },
        { t: "PG 3", s: "47,5 bis unter 70", tone: "warn" },
        { t: "PG 4", s: "70 bis unter 90", tone: "bad" },
        { t: "PG 5", s: "90 bis 100", tone: "bad" },
      ], note: "Maßgeblich ist das aktuelle Gesetz (SGB XI). Der Medizinische Dienst begutachtet." },
    ],
    blocks: [
      B("Strukturierte Informationssammlung (SIS)", "Entstanden im Entbürokratisierungsprojekt der Pflegedokumentation. Ziel: weniger Schreibaufwand, mehr Pflege.", "Ablauf: Gespräch mit dem Menschen, seine Wünsche und Sorgen in eigenen Worten aufnehmen, Themenfelder durchgehen, Risiken einschätzen.", "Daraus entstehen Maßnahmenplan, Berichte nach Auffälligkeiten und Evaluation."),
      B("Pflegeanamnese", "Biografie, Gewohnheiten, Wünsche, Gesundheit, Ressourcen, soziale Situation.", "Ein Mensch, der gehört wird, kooperiert besser. Nicht abfragen wie ein Formular: Zuhören und Zeit lassen.", "Angehörige und Betreuer einbeziehen, wenn der Betroffene nicht auskunftsfähig ist."),
      B("Begutachtung zum Pflegegrad", "Der Medizinische Dienst (MD) oder MEDICPROOF besucht den Menschen. Es zählt die Selbstständigkeit in 6 Modulen.", "Gut vorbereiten: Pflegetagebuch, Medikamentenliste, Arztberichte, Hilfsmittel, Angehörige anwesend.", "Wichtig: den schlechtesten, nicht den besten Tag beschreiben. Nichts beschönigen."),
      B("Leistungen im Überblick", "Pflegegeld, Pflegesachleistung, Kombination, Verhinderungspflege, Tages- und Nachtpflege, Entlastungsbetrag, Hilfsmittel, Wohnumfeldverbesserung.", "Beratungsbesuche für Pflegegeld-Bezieher. Pflegekurse für Angehörige.", "Höhe der Leistungen ändert sich gesetzlich, aktuelle Beträge nachschlagen."),
    ],
  },
  {
    id: "assess-wunde-haut", group: "ausbildung", area: "assessment", title: "Wund- und Hautassessment", icon: "Bandage",
    ar: "تقييم الجرح: الموقع، الحجم، قاع الجرح (أحمر، أصفر، أسود)، الحواف، المحيط، الإفرازات، الرائحة، الألم. وفحص الجلد اليومي في المناطق المعرضة للضغط. أبلغ عن علامات العدوى.",
    diagrams: [
      { kind: "flow", title: "Wundbeurteilung: Was wird beschrieben?", steps: [
        { t: "Ort und Ursache", s: "Dekubitus, Ulcus cruris, diabetischer Fuß, OP-Wunde", icon: "MapPin" },
        { t: "Größe und Tiefe", s: "Länge, Breite, Tiefe in cm, Foto nach Hausstandard", icon: "Ruler", tone: "info" },
        { t: "Wundgrund", s: "rot, gelb (Belag), schwarz (Nekrose)", icon: "Palette", tone: "warn" },
        { t: "Wundrand und Umgebung", s: "Rötung, Schwellung, Mazeration, Wärme", icon: "Eye", tone: "warn" },
        { t: "Exsudat und Geruch", s: "Menge, Farbe, Konsistenz", icon: "Droplet", tone: "warn" },
        { t: "Schmerz", s: "NRS, Verbandwechsel eingeschlossen", icon: "Feather", tone: "info" },
      ] },
      { kind: "table", title: "Ampel für den Wundgrund", head: ["Farbe", "Bedeutung", "Ziel"], rows: [
        ["Schwarz", "Abgestorbenes Gewebe (Nekrose)", "Reinigen/entfernen nach Arztplan"],
        ["Gelb", "Beläge, Fibrin, Eiter", "Wunde säubern"],
        ["Rot", "Gesundes Granulationsgewebe", "Schützen, feucht halten, Heilung unterstützen"],
        ["Rosa", "Neue Haut (Epithel)", "Schonend schützen"],
      ] },
    ],
    blocks: [
      B("Hautinspektion", "Bei Risiko täglich Haut ansehen und tasten: Knochenvorsprünge, Hautfalten, unter Verbänden, Schläuchen und Hilfsmitteln.", "Beurteilen: Farbe, Temperatur, Feuchtigkeit, Spannung (Turgor), Schwellung, Hautveränderungen.", "Rötungen mit dem Finger prüfen: wegdrückbar oder nicht."),
      B("Beteiligte Berufe", "Wundexperte (ICW), Arzt, Diabetesberatung, Gefäßchirurgie, Physiotherapie. Bei komplexen Wunden früh einbeziehen.", "Die Pflege dokumentiert fortlaufend (Wundverlaufsbogen), damit Veränderungen sichtbar werden."),
      B("Infektionszeichen", "Rötung, Überwärmung, Schwellung, Schmerz, Funktionsverlust (die klassischen fünf Entzündungszeichen).", "Zusätzlich: Eiter, Geruch, zunehmendes Exsudat, Fieber.", "Bei Verdacht Arzt informieren, Abstrich nur nach Anordnung."),
      B("Besondere Wunden", "Diabetischer Fuß: tägliche Fußkontrolle, gut sitzende Schuhe, Barfußgehen vermeiden, Verletzungen nie unterschätzen.", "Ulcus cruris venosum: Kompression, Beine hochlagern, Bewegung. Arteriell: Kompression meist verboten, Gefäßabklärung.", "Knöchel-Arm-Index (ABI) gehört in ärztliche Hand: unter 0,9 spricht für eine Durchblutungsstörung."),
    ],
  },
  {
    id: "assess-kind", group: "ausbildung", area: "assessment", title: "Assessment bei Neugeborenen und Kindern", icon: "Baby",
    ar: "تقييم حديثي الولادة بمقياس أبغار (5 بنود × 0–2، عند 1 و5 و10 دقائق). علامات حيوية الأطفال تختلف عن البالغين. الألم عند الأطفال يُقيَّم بمقاييس الوجوه أو بالملاحظة.",
    diagrams: [
      { kind: "table", title: "APGAR-Score", head: ["Merkmal", "0 Punkte", "1 Punkt", "2 Punkte"], rows: [
        ["Atmung", "keine", "langsam, unregelmäßig", "kräftiges Schreien"],
        ["Puls", "keiner", "unter 100 pro Minute", "über 100 pro Minute"],
        ["Grundtonus", "schlaff", "leichte Beugung", "aktive Bewegung"],
        ["Aussehen (Haut)", "blau, blass", "Körper rosig, Extremitäten blau", "ganz rosig"],
        ["Reflexe", "keine Reaktion", "Grimassieren", "Schreien, Husten, Niesen"],
      ], note: "Gemessen nach 1, 5 und 10 Minuten. 7–10 unauffällig, 4–6 mäßig, 0–3 schwer beeinträchtigt (Richtwerte)." },
      { kind: "table", title: "Vitalwerte nach Alter (Richtwerte)", head: ["Alter", "Puls/min", "Atmung/min"], rows: [
        ["Neugeborenes", "120–160", "40–60"],
        ["Säugling", "100–150", "30–50"],
        ["Kleinkind", "90–130", "25–35"],
        ["Schulkind", "70–110", "18–25"],
        ["Jugendlicher/Erwachsener", "60–100", "12–18"],
      ] },
    ],
    blocks: [
      B("Beobachten statt nur messen", "Kinder können nicht immer sagen, was weh tut. Verhalten ist ein Hauptzeichen: Trinkverhalten, Schreien, Spielen, Blässe, Atemarbeit.", "Bei Säuglingen auf Einziehungen, Nasenflügeln, Stöhnen, Trinkschwäche, Muskeltonus achten.", "Eltern kennen ihr Kind am besten: ihre Sorge ernst nehmen."),
      B("Schmerz bei Kindern", "Selbstauskunft ab etwa 4 bis 5 Jahren mit Gesichterskala (z. B. Faces Pain Scale).", "Jüngere Kinder: Beobachtungsskalen wie KUSS (Weinen, Gesichtsausdruck, Rumpfhaltung, Beinhaltung, motorische Unruhe).", "Ablenkung, Nähe der Eltern, Spiel und kindgerechte Erklärung gehören zur Schmerztherapie."),
      B("Hydratation und Fieber", "Austrocknung beim Säugling: eingesunkene Fontanelle, trockene Schleimhäute, wenig nasse Windeln, Schlappheit. Schnell ärztlich abklären.", "Fieber bei Säuglingen unter 3 Monaten ist immer ein Notfall-Hinweis. Fiebersenkung nur nach Anordnung."),
      B("Warnzeichen sofort melden", "Atemnot, Blaufärbung, Krampfanfall, Nackensteife, Bewusstseinsänderung, anhaltendes Erbrechen, Blut im Stuhl, starker Durchfall.", "Verdacht auf Misshandlung oder Vernachlässigung ernst nehmen: Team, Kinderschutz, Dokumentation."),
    ],
  },
  {
    id: "assess-evaluation-qualitaet", group: "ausbildung", area: "assessment", title: "Evaluation, Ziele und Qualitätsindikatoren", icon: "Target",
    ar: "التقييم الختامي: هل تحقق الهدف؟ أهداف SMART (محددة، قابلة للقياس، مقبولة، واقعية، محددة بزمن). مؤشرات الجودة في دور الرعاية: الحركة، قرحة الضغط، السقوط، فقدان الوزن.",
    diagrams: [
      { kind: "tiles", title: "SMART: Ziele formulieren", items: [
        { t: "S", s: "Spezifisch: genau beschrieben", icon: "Target" },
        { t: "M", s: "Messbar: Zahl, Skala, Beobachtung", icon: "Gauge" },
        { t: "A", s: "Akzeptiert: vom Patienten gewollt", icon: "Handshake" },
        { t: "R", s: "Realistisch: erreichbar", icon: "ShieldCheck" },
        { t: "T", s: "Terminiert: bis wann", icon: "Clock" },
      ], note: "Beispiel: Frau Meier geht bis zum 15. mit dem Rollator 20 Meter ohne Pause." },
      { kind: "cycle", title: "Evaluation im Regelkreis", steps: [
        { t: "Ziel prüfen", s: "Erreicht, teilweise, nicht erreicht?", icon: "Target", tone: "info" },
        { t: "Ursachen suchen", s: "Maßnahme falsch? Ziel zu hoch? Zustand verändert?", icon: "Search", tone: "warn" },
        { t: "Plan anpassen", s: "Neue Maßnahmen oder Ziele", icon: "Pencil", tone: "ok" },
        { t: "Weiter durchführen", icon: "HandHelping", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Evaluation im Alltag", "Täglich kleine Evaluation: Wie ging es heute? Pflegebericht bei Auffälligkeiten.", "Geplante Evaluation: nach festgelegtem Zeitpunkt, bei Änderung des Zustands, nach Krankenhaus.", "Ehrlich dokumentieren, auch wenn ein Ziel nicht erreicht wurde. Daraus lernt das Team."),
      B("Qualitätsindikatoren (stationäre Langzeitpflege)", "Seit 2019 bewertet ein System mit Indikatoren die Ergebnisqualität, z. B. Erhalt der Mobilität, Erhalt der Selbstständigkeit bei Alltagsverrichtungen, Dekubitusentstehung, schwerwiegende Sturzfolgen, Gewichtsverlust, Umgang mit Schmerz und Inkontinenz.", "Die Einrichtung erfasst Daten halbjährlich, externe Prüfer vergleichen sie mit den Prüfungen vor Ort.", "Gute Dokumentation von Assessments ist die Grundlage."),
      B("Verbesserung im Team", "Fallbesprechung, Pflegevisite, Expertenstandards, Fortbildung, Beschwerdemanagement, Fehlermeldesystem (CIRS).", "Fehler sind Lernchancen: ohne Schuldzuweisung melden."),
      B("Prüfungstipp", "Typische Fragen: Welche Skala passt zu welchem Risiko? Was ist ein hoher oder niedriger Wert? Was tun Pflegende bei Risiko?", "Merke: Dekubitus = Braden/Norton, Sturz = TUG/Tinetti, Ernährung = MNA/NRS/MUST, Schmerz = NRS/BESD, Bewusstsein = GCS, Selbstständigkeit = Barthel, Delir = CAM."),
    ],
  },
];
