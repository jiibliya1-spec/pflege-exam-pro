/**
 * Neue Lektionen Teil 2: Qualität, Ethik und Beruf, Gesundheit der Pflegenden, Gesundheitswesen, Kinder.
 * Lernhilfe der App in einfachem Deutsch, KEIN Buchtext. Gesetze und Zahlen können sich ändern.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const NEW_LESSONS_2: Lesson[] = [
  // ───────── Qualität und Standards ─────────
  {
    id: "qualitaet", group: "ausbildung", area: "qualitaet", title: "Pflegequalität und Qualitätsmanagement", icon: "ChartBar",
    ar: "جودة الرعاية: بنية، عملية، نتيجة (دونابيديان). مستويات فيشتر وماير 0–3. دورة PDCA. الإبلاغ عن الأخطاء (CIRS) ونظم الإدارة (ISO 9001، EFQM، KTQ). ملزمة قانونياً (§135a SGB V).",
    blocks: [
      B("Drei Dimensionen nach Donabedian", "Strukturqualität: Rahmen, z. B. genug qualifiziertes Personal, Räume, Hilfsmittel, Fortbildung.", "Prozessqualität: Abläufe, z. B. Standards, Pflegeplanung, Dokumentation.", "Ergebnisqualität: Was kommt heraus? Z. B. Zufriedenheit, Sturzrate, Dekubitusrate, Erreichen der Pflegeziele."),
      B("Vier Stufen nach Fiechter und Meier", "Stufe 0 – gefährliche Pflege: Fehler führen zu Schäden oder können es.", "Stufe 1 – sichere Pflege: nur das Notwendigste, keine Gefahr.", "Stufe 2 – angemessene Pflege: bedürfnisorientiert, Selbstständigkeit wird unterstützt.", "Stufe 3 – optimale Pflege: individuell, der Mensch ist gleichberechtigter Partner, Selbstständigkeit gefördert."),
      B("Qualität sichern: Werkzeuge", "PDCA-Zyklus: planen, ausführen, überprüfen, verbessern.", "Pflegestandards, Expertenstandards, Pflegevisiten, Fallbesprechungen.", "Fehlermeldesystem CIRS: Beinahe-Fehler und Zwischenfälle melden, damit das System lernt.", "Beschwerdemanagement, Befragungen, Audits."),
      B("Qualitätsmanagementsysteme (Beispiele)", "DIN EN ISO 9001, EFQM, KTQ.", "Grundsätze sind u. a. Kundenorientierung, Führung, Einbeziehung der Mitarbeitenden, prozessorientierter Ansatz, ständige Verbesserung, faktenbasierte Entscheidungen."),
      B("Rechtlicher Rahmen", "Leistungserbringer sind zur Qualitätssicherung verpflichtet (§ 135a SGB V).", "Externe Prüfung erfolgt in der Pflege durch den Medizinischen Dienst."),
    ],
  },
  {
    id: "expertenstandards", group: "ausbildung", area: "qualitaet", title: "Expertenstandards und Evidence-Based Nursing", icon: "Library",
    ar: "معايير الخبراء (DNQP) مبنية على الأدلة، وتوجه الرعاية في مواضيع مثل القرح والسقوط والألم. التمريض المبني على الأدلة يجمع بين العلم والخبرة ورغبة المريض.",
    blocks: [
      B("Was sind Expertenstandards?", "Sie werden vom Deutschen Netzwerk für Qualitätsentwicklung in der Pflege (DNQP) entwickelt.", "Sie beruhen auf aktueller Forschung und Praxiserfahrung und gelten als anerkannte Maßstäbe der Berufsgruppe.", "Sie sind für Einrichtungen verbindlich anzuwenden, ambulant und stationär."),
      B("Aufbau", "Eine Standardaussage mit Begründung.", "Kriterien zu Struktur (Voraussetzungen), Prozess (Vorgehen) und Ergebnis (Wirkung)."),
      B("Wichtige Themen (Auswahl)", "Dekubitusprophylaxe, Sturzprophylaxe, Schmerzmanagement, Entlassungsmanagement, Förderung der Harnkontinenz, Pflege von Menschen mit chronischen Wunden, Ernährungsmanagement, Erhaltung und Förderung der Mobilität, Beziehungsgestaltung bei Demenz, Förderung der Mundgesundheit."),
      B("Evidence-Based Nursing", "Wissensbasierte Pflege: Entscheidungen stützen sich auf wissenschaftliche Belege (Evidenz), Erfahrung der Pflegenden und Wünsche der Person.", "Pflegefachpersonen bleiben auf dem aktuellen Stand durch lebenslanges Lernen, Fachliteratur und Fortbildung."),
      B("Prüfungstipp", "Expertenstandard immer am Fall begründen: Welches Risiko hat die Person? Welche Maßnahme folgt daraus? Wie wird die Wirkung überprüft?"),
    ],
  },
  {
    id: "entlassung", group: "ausbildung", area: "qualitaet", title: "Entlassungsmanagement", icon: "House",
    ar: "إدارة الخروج من المستشفى: تقييم مبكر خلال 24 ساعة، خطة، تنسيق مع الرعاية المنزلية وطلب درجة الرعاية، ومتابعة لتجنب تأثير الباب الدوار (إعادة الدخول).",
    blocks: [
      B("Warum?", "Nach dem Krankenhaus darf es keine Versorgungslücke geben. Sonst droht der „Drehtüreffekt“: Der Mensch kommt kurz danach wieder ins Krankenhaus.", "Der Expertenstandard „Entlassungsmanagement in der Pflege“ regelt das Vorgehen."),
      B("Ablauf (Überblick)", "Früh einschätzen: Bedarf und Risiken sofort nach der Aufnahme erheben, spätestens innerhalb von etwa 24 Stunden.", "Individuellen Entlassungsplan erstellen, Mensch und Angehörige beraten und schulen.", "Maßnahmen koordinieren und umsetzen.", "Wirkung prüfen (Evaluation), kurz nach der Entlassung nachfragen."),
      B("Beteiligte und Strukturen", "Pflege, Ärztinnen, Sozialdienst, Therapeuten, Hausarzt, ambulanter Pflegedienst, Pflegestützpunkt.", "Übergabe-Informationen sicherstellen: Entlassbrief, Medikamentenplan, Pflegeüberleitungsbogen.", "Pflegegrad beantragen, Hilfsmittel, Folgetherapien und Tagespflege oder Kurzzeitpflege klären."),
      B("Praxisbeispiel", "Nach einer Amputation mit Insulinpflicht müssen Wundversorgung, Blutzuckerkontrolle und häusliche Hilfe vor der Entlassung organisiert sein."),
    ],
  },

  // ───────── Ethik und Beruf ─────────
  {
    id: "ethik", group: "ausbildung", area: "ethik", title: "Ethik: Prinzipien und Dilemmata", icon: "Compass",
    ar: "الأخلاقيات: أربعة مبادئ (بيوشامب وتشيلدرس): الاستقلالية، عدم الإضرار، الإحسان، العدالة. المعضلة الأخلاقية: خياران متعارضان. استخدم نماذج التفكير المنظمة.",
    blocks: [
      B("Vier Prinzipien nach Beauchamp und Childress", "Autonomie (Selbstbestimmung): Der Mensch entscheidet selbst über sich, wenn er einwilligungsfähig ist.", "Schadensvermeidung: keinen Schaden zufügen und Schaden abwenden.", "Fürsorge: das Wohl des Menschen fördern.", "Gerechtigkeit: faire, nachvollziehbare Verteilung von Zeit und Mitteln."),
      B("Ethisches Dilemma", "Es gibt mindestens zwei Handlungsmöglichkeiten, die sich widersprechen. Jede hat gute Gründe, beide gleichzeitig sind nicht möglich.", "Beispiel: Autonomie (Bier trinken wollen) gegen Schadensvermeidung (Leber schützen)."),
      B("Strukturiert nachdenken", "Situation beschreiben und Perspektiven aller Beteiligten klären.", "Ethisches Problem benennen, Prinzipien und Werte zuordnen.", "Handlungsoptionen abwägen und eine begründete Entscheidung treffen.", "Modelle: Rabe (Situationsanalyse, ethische Reflexion, Ergebnisse) oder Nimwegener Methode für Fallbesprechungen."),
      B("Strukturen im Betrieb", "Ethik-Arbeitskreis, Ethikkomitee, ethische Fallbesprechung, Supervision, Leitbild, Fortbildung.", "Der ICN-Ethikkodex nennt vier Aufgaben der Pflege: Gesundheit fördern, Krankheit verhüten, Gesundheit wiederherstellen, Leiden lindern."),
      B("Praktisch", "Wünsche erfragen, aufklären, Alternativen anbieten, Entscheidungen dokumentieren, im Team offen besprechen.", "Auch Wünsche respektieren, die du nicht gut findest, solange der Mensch einwilligungsfähig ist und niemand gefährdet wird."),
    ],
  },
  {
    id: "pflegecharta", group: "ausbildung", area: "ethik", title: "Pflege-Charta: Rechte pflegebedürftiger Menschen", icon: "ScrollText",
    ar: "ميثاق حقوق المحتاجين للرعاية: ثمانية مواد: تقرير المصير، السلامة، الخصوصية، الرعاية المؤهلة، المعلومات، التقدير والتواصل، الدين والثقافة، الموت بكرامة.",
    blocks: [
      B("Was ist die Pflege-Charta?", "Eine Sammlung der Rechte hilfe- und pflegebedürftiger Menschen in acht Artikeln. Sie ist kein Gesetz, bündelt aber Rechte aus Grundgesetz und Gesetzen."),
      B("Die acht Artikel", "1: Selbstbestimmung und Hilfe zur Selbsthilfe", "2: Körperliche und seelische Unversehrtheit, Freiheit und Sicherheit", "3: Privatheit", "4: Pflege, Betreuung und Behandlung", "5: Information, Beratung und Aufklärung", "6: Wertschätzung, Kommunikation und Teilhabe", "7: Religion, Kultur und Weltanschauung", "8: Palliative Begleitung, Sterben und Tod"),
      B("In der Prüfung nutzen", "Zu einem Fall den passenden Artikel nennen: z. B. Artikel 4 beim Recht auf angemessene Pflege, Artikel 1 bei Selbstbestimmung.", "Beziehe immer die konkrete Person und Situation ein."),
    ],
  },
  {
    id: "berufsentwicklung", group: "ausbildung", area: "ethik", title: "Beruf, Kompetenzen und lebenslanges Lernen", icon: "Sprout",
    ar: "الكفاءات: معرفية، منهجية، اجتماعية، شخصية. بينر: خمس مراحل من المبتدئ إلى الخبير. التفكير الانعكاسي (كورتاغن). التمثيل المهني: نقابات، اتحادات، غرف التمريض.",
    blocks: [
      B("Handlungskompetenz", "Fachkompetenz: Wissen und Können.", "Methodenkompetenz: Arbeit planen, Probleme lösen.", "Sozialkompetenz: kommunizieren, im Team arbeiten.", "Personalkompetenz: sich selbst reflektieren und Verantwortung übernehmen."),
      B("Kompetenzstufen nach Benner", "1 Neuling, 2 fortgeschrittener Anfänger, 3 kompetent Pflegende, 4 erfahrene Pflegende, 5 Pflegeexperte.", "Mit Erfahrung wächst das Gefühl für Situationen. Der Abschluss der Ausbildung ist der Anfang, nicht das Ende des Lernens."),
      B("Reflexion lernen (Korthagen)", "Fünf Schritte: Handeln, Rückblick, wesentliche Aspekte erkennen, Handlungsalternativen entwickeln, Ausprobieren.", "Gute Fragen: Was wollte ich erreichen? Was ist passiert? Warum habe ich so gehandelt? Was mache ich nächstes Mal anders?"),
      B("Berufspolitik", "Berufsverbände (z. B. DBfK) vertreten fachliche Interessen und Ausbildung.", "Gewerkschaften (z. B. ver.di) verhandeln Tarife und Arbeitsbedingungen.", "Pflegekammern regeln Berufsordnung, Fortbildung und Berufsaufsicht, je nach Bundesland."),
      B("Wandel des Berufs", "Früher oft Pflege aus Nächstenliebe in Klöstern, dann Professionalisierung. Heute generalistische Ausbildung, Akademisierung und eigene Fachwissenschaft."),
    ],
  },

  // ───────── Gesundheit der Pflegenden ─────────
  {
    id: "stress", group: "ausbildung", area: "gesundheit", title: "Stress, Resilienz und Entlastung", icon: "PersonStanding",
    ar: "الضغط النفسي: نموذج لازاروس (تقييم أولي وثانوي) وسيلي (إنذار، مقاومة، إنهاك). الصلابة النفسية (Kohärenzgefühl). الحلول: إشراف، استشارة الزملاء، استرخاء، توازن العمل والحياة.",
    blocks: [
      B("Stressmodelle", "Lazarus: Stress entsteht aus der Bewertung. Primär: Ist das bedrohlich? Sekundär: Habe ich Mittel zur Bewältigung? Danach Neubewertung.", "Selye: Alarmphase, Widerstandsphase, Erschöpfungsphase."),
      B("Belastungen in der Pflege", "Körperlich: Heben, Schichtdienst, Zeitdruck.", "Seelisch: Leid, Sterben, Konflikte, Verantwortung, Personalmangel.", "Folgen: Erschöpfung, Schlafprobleme, Rückenschmerzen, Distanzverlust, Burn-out, Kündigung."),
      B("Kohärenzgefühl und Resilienz", "Kohärenzgefühl (Antonovsky): Dinge sind verstehbar, handhabbar und sinnvoll.", "Resilienz: Widerstandskraft. Sie wächst durch soziale Kontakte, Selbstvertrauen, realistische Ziele, Akzeptanz von Veränderung."),
      B("Was hilft?", "Supervision (Einzel-, Team-, Fallsupervision) und kollegiale Beratung in sechs Schritten: Casting, Spontanerzählung, Schlüsselfrage, Methodenwahl, Beratung, Abschluss.", "Pausen einhalten, Entspannung, Bewegung, Freizeit, Schlaf, Gespräche mit Menschen, die zuhören.", "Auch Vorgesetzte und Praxisanleitung ansprechen, wenn dich etwas überfordert."),
      B("Ekel und Scham", "Ekel ist ein normaler Schutzreflex. Darüber im Team sprechen, Strategien lernen (Lüften, Duft, Maske), Betroffene nicht beschämen."),
    ],
  },
  {
    id: "arbeitsschutz", group: "ausbildung", area: "gesundheit", title: "Arbeitszeit und Arbeitsschutz", icon: "Clock",
    ar: "ساعات العمل: 8 ساعات يومياً (حتى 10 بشروط)، استراحة 30 دقيقة بعد 6 ساعات و45 بعد 9 ساعات، راحة 11 ساعة بين الورديتين، 15 أحداً حرة سنوياً. جدول الدوام ملزم والتعديل في حالة الطوارئ فقط.",
    blocks: [
      B("Arbeitszeitgesetz (Überblick)", "Werktägliche Arbeitszeit bis 8 Stunden. Sie darf auf bis zu 10 Stunden verlängert werden, wenn im Durchschnitt innerhalb von sechs Monaten 8 Stunden nicht überschritten werden.", "Pausen: ab mehr als 6 Stunden 30 Minuten, ab mehr als 9 Stunden 45 Minuten. Pausenblöcke mindestens 15 Minuten.", "Ruhezeit zwischen zwei Diensten: mindestens 11 Stunden.", "Sonntage und Feiertage: Ersatzruhetag innerhalb von zwei Wochen. Mindestens 15 Sonntage im Jahr sind frei."),
      B("Dienstplan", "Dienstpläne gelten verbindlich. Änderungen sind nur bei echten Notfällen oder mit Zustimmung möglich.", "Dauerhafter Personalmangel ist kein Notfall. Zuerst andere Lösungen prüfen: Springerpool, Nachbarstation, Leiharbeit."),
      B("Arbeitsschutz im Alltag", "Arbeitgeber müssen Gefährdungen beurteilen und Schutz bieten (Arbeitsschutzgesetz).", "Schutzkleidung, rückengerechte Hilfsmittel, Hautschutz, Impfangebote (z. B. Hepatitis B), Unterweisungen.", "Bei Hitze: Raumtemperatur senken, Getränke, leichte Kleidung, Pausen."),
      B("Dein Recht auf Hilfe", "Überlastung anzeigen (Überlastungsanzeige) und dokumentieren, mit Betriebsrat oder Gewerkschaft sprechen."),
    ],
  },

  // ───────── Gesundheitswesen und Sozialrecht ─────────
  {
    id: "pflegeversicherung", group: "ausbildung", area: "system", title: "Pflegeversicherung und Pflegegrade", icon: "Landmark",
    ar: "تأمين الرعاية (SGB XI): خمس درجات رعاية حسب مدى الاستقلالية (ست وحدات تقييم). تُمنح بعد تقييم المركز الطبي MD. خدمات: مال رعاية، رعاية عينية، رعاية نهارية، رعاية قصيرة، رعاية بديلة. الرعاية المنزلية العلاجية تحت SGB V.",
    blocks: [
      B("Grundlagen", "Soziale Pflegeversicherung (SGB XI): Teilleistungsversicherung. Sie deckt einen Teil der Kosten, den Rest zahlt die Person oder das Sozialamt.", "Antrag bei der Pflegekasse. Der Medizinische Dienst (bei Privatversicherten Medicproof) begutachtet."),
      B("Pflegegrade 1 bis 5", "Maßgeblich ist die Selbstständigkeit, nicht die Diagnose. Grad 1: geringe Beeinträchtigung. Grad 5: schwerste Beeinträchtigung mit besonderen Anforderungen.", "Sechs Bereiche: Mobilität, kognitive und kommunikative Fähigkeiten, Verhaltensweisen und psychische Problemlagen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen, Gestaltung des Alltagslebens."),
      B("Leistungen (Überblick)", "Pflegegeld, wenn Angehörige pflegen. Pflegesachleistung bei ambulantem Dienst. Kombination ist möglich.", "Tages- und Nachtpflege, Kurzzeitpflege, Verhinderungspflege, Pflegehilfsmittel, Wohnumfeldverbesserung, Pflegekurse, Pflegeberatung und Beratungsbesuche.", "Vollstationäre Pflege im Heim. Zahlbeträge und Leistungen ändern sich, immer aktuell nachschlagen."),
      B("Andere Sozialgesetzbücher", "SGB V (Krankenversicherung): häusliche Krankenpflege, Behandlungspflege nach ärztlicher Verordnung.", "SGB XII: Hilfe zur Pflege, wenn Mittel nicht reichen.", "SGB IX und Bundesteilhabegesetz: Teilhabe und Eingliederungshilfe."),
      B("Wohnformen", "Zuhause mit Angehörigen oder ambulantem Dienst, Pflege-WG, Tagespflege, Kurzzeitpflege, Pflegeheim. Die Entscheidung hängt von Bedarf, Wunsch, Familie und Finanzen ab."),
    ],
  },
  {
    id: "teamarbeit", group: "ausbildung", area: "system", title: "Intra- und interprofessionelle Zusammenarbeit", icon: "Handshake",
    ar: "التعاون داخل المهنة الواحدة (تمريض بمؤهلات مختلفة) وبين المهن (أطباء، معالجون، اجتماعيون). ميزته: رؤية أشمل. تحديه: وقت واتصال وحدود صلاحيات.",
    blocks: [
      B("Begriffe", "Intraprofessionell: innerhalb einer Berufsgruppe (Pflegefachpersonen, Pflegehilfskräfte, Auszubildende).", "Interprofessionell: verschiedene Berufsgruppen (Ärztinnen, Therapeuten, Sozialdienst, Psychologie, Hauswirtschaft)."),
      B("Wer macht was? (Beispiele)", "Ärztinnen: Diagnose, Therapie, Verordnung.", "Pflegefachpersonen: Pflegeprozess, Behandlungspflege nach Anordnung, Beobachtung, Beratung, Koordination.", "Physiotherapie: Beweglichkeit und Kraft. Ergotherapie: Alltagsfähigkeiten und Feinmotorik. Logopädie: Sprechen und Schlucken.", "Sozialdienst und Sozialarbeit: Anträge, Hilfen, Entlassung. Psychologie: seelische Belastungen."),
      B("Gelingt Zusammenarbeit?", "Respekt und klare Rollen, regelmäßiger Austausch (Visite, Fallbesprechung, Übergabe), gemeinsame Dokumentation.", "Abstimmung kostet Zeit, kann Konflikte bringen, verbessert aber Behandlung und Sicherheit."),
      B("Aufgaben der Pflege im Team", "Beobachtungen zeitnah und vollständig weitergeben (SBAR), Anordnungen prüfen und umsetzen, bei Verschlechterung Ärztin informieren, Veränderungen dokumentieren."),
    ],
  },
  {
    id: "kinder", group: "ausbildung", area: "recht", title: "Kinder und Jugendliche: Recht und Pflege", icon: "UserRound",
    ar: "الأطفال والمراهقون: الوالدان يمارسان الرعاية القانونية لمصلحة الطفل، وللطفل حق في أن يُسمع رأيه (اتفاقية حقوق الطفل المادة 12). عند الاشتباه بخطر على الطفل بلّغ الفريق. اشرح للطفل حسب عمره.",
    blocks: [
      B("Elterliche Sorge", "Eltern üben die Sorge gemeinsam und zum Wohl des Kindes aus (§ 1627 BGB). Bei Streit sollen sie sich einigen.", "Für Behandlung brauchen Ärztinnen in der Regel die Einwilligung der Sorgeberechtigten, zusätzlich wird die Meinung des Kindes nach Reife einbezogen."),
      B("Rechte der Kinder", "Kinder haben ein Recht auf Leben, Entwicklung und Gehör. In der UN-Kinderrechtskonvention (Art. 12) steht, dass die Meinung des Kindes angemessen berücksichtigt werden muss.", "Eine Jugendliche kann einwilligungsfähig sein, auch wenn sie noch minderjährig ist. Das prüft das ärztliche Team im Einzelfall."),
      B("Kindeswohlgefährdung", "Wenn Fürsorge dauerhaft oder wiederholt fehlt und das Kind Schaden nehmen kann (§ 1666 BGB).", "Bei Verdacht: Beobachtungen sachlich dokumentieren, mit Leitung oder Kinderschutzfachkraft sprechen, die Hilfestellen (Jugendamt) einbinden. Nicht allein entscheiden und nichts ungeprüft unterstellen."),
      B("Kindgerechte Pflege", "Altersgerecht erklären, ehrlich sein, Eltern einbeziehen, Spielen und Vertrautes ermöglichen.", "Schmerz mit kindgerechten Skalen (Gesichter) erfassen.", "Bei Jugendlichen: Selbstbestimmung ernst nehmen, Vereinbarungen treffen, wenn es um Therapietreue geht (z. B. Diabetes), Eltern zusätzlich informieren."),
    ],
  },
];
