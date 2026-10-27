/**
 * Pflege-Grundlagen, Techniken, Lebensphasen, Therapie und Konzepte.
 * Lernhilfe der App in einfachem Deutsch, in eigenen Worten zusammengefasst – KEIN Buchtext.
 * Quelle zum Nachlesen: Thieme „I care – PflegeExamen KOMPAKT“ (Stand des Buchs: 2019).
 * Hausstandards, Leitlinien und Gesetze ändern sich – immer aktuell prüfen. Anordnungen gehen vor.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_PFLEGE: Lesson[] = [
  // ───────── Mensch und Team ─────────
  {
    id: "b-entwicklung", group: "ausbildung", area: "mensch", title: "Entwicklungspsychologie, Persönlichkeit und Bedürfnisse", emoji: "🌱",
    ar: "نظريات النمو: فرويد (مراحل نفسية جنسية)، إريكسون (أزمة في كل مرحلة)، بياجيه (نمو معرفي)، هافيغهورست (مهام نمائية)، سكينر وباندورا (التعلم). الشخصية: العوامل الخمسة الكبرى. ماسلو: هرم الحاجات من الفسيولوجية إلى تحقيق الذات.",
    blocks: [
      B("Warum wichtig?", "Pflegende begleiten Menschen aller Lebensphasen. Wer weiß, welche Aufgaben und Krisen zu einem Alter gehören, versteht das Verhalten besser und pflegt passender."),
      B("Wichtige Theorien", "Freud: psychosexuelle Entwicklung in Phasen (oral, anal, phallisch, Latenz, genital).", "Erikson: Entwicklung über das ganze Leben, in jeder Phase ein Konflikt, z. B. Urvertrauen gegen Misstrauen im Säuglingsalter.", "Piaget: Denken entwickelt sich in Stufen (vom Handeln mit den Sinnen bis zum abstrakten Denken).", "Havighurst: Entwicklungsaufgaben in jedem Lebensabschnitt, die gemeistert werden müssen.", "Skinner und Bandura: Lernen durch Belohnung und Bestrafung (Skinner) sowie durch Beobachten und Nachahmen von Vorbildern (Bandura)."),
      B("Persönlichkeit: Big Five", "Fünf Grunddimensionen: Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit, Neurotizismus (emotionale Instabilität)."),
      B("Bedürfnispyramide nach Maslow", "Von unten nach oben: körperliche Grundbedürfnisse, Sicherheit, soziale Bindung, Wertschätzung, Selbstverwirklichung.", "Erst wenn die unteren Bedürfnisse einigermaßen erfüllt sind, rücken die höheren in den Vordergrund. Gut für die Pflegeplanung: Was braucht der Mensch zuerst?"),
    ],
  },
  {
    id: "b-kommunikation", group: "ausbildung", area: "mensch", title: "Kommunikation: Watzlawick, Schulz von Thun, Rogers", emoji: "🗣️",
    ar: "التواصل: قواعد واتزلافيك الخمس (لا يمكن ألا نتواصل، مستوى المحتوى والعلاقة، ...). نموذج شولتس فون تون: لكل رسالة 4 جوانب (المضمون، العلاقة، الكشف عن الذات، الطلب). روجرز: التعاطف، القبول غير المشروط، الصدق. الاستماع النشط.",
    blocks: [
      B("Watzlawick: 5 Axiome", "Man kann nicht nicht kommunizieren (auch Schweigen sendet eine Botschaft).", "Jede Mitteilung hat einen Inhalts- und einen Beziehungsaspekt; der Beziehungsaspekt bestimmt, wie der Inhalt verstanden wird.", "Kommunikation wird durch die Deutung von Ursache und Wirkung gegliedert (Interpunktion). Das führt oft zu Streit.", "Menschen nutzen digitale (Worte) und analoge Kommunikation (Mimik, Gestik, Tonfall).", "Kommunikation ist symmetrisch (gleichwertig) oder komplementär (ungleich, z. B. Pflegekraft und Patient)."),
      B("Vier-Seiten-Modell (Schulz von Thun)", "Jede Nachricht hat vier Seiten: Sachinhalt, Beziehung, Selbstoffenbarung, Appell.", "Der Empfänger hat „vier Ohren“ und versteht je nachdem anders. Missverständnisse entstehen, wenn Sender und Empfänger verschiedene Seiten betonen."),
      B("Personenzentrierter Ansatz (Rogers)", "Jeder Mensch kann wachsen und Probleme selbst lösen. Drei Grundhaltungen: Empathie, bedingungsfreie Akzeptanz, Kongruenz (echt sein)."),
      B("Aktives Zuhören", "Zugewandte, offene Körperhaltung, wertschätzend und nicht wertend, eigene Meinung und Ratschläge zurückhalten.", "Techniken: offene Fragen, Aufmerksamkeit signalisieren, Schweigen aushalten, zusammenfassen und paraphrasieren, Unklares klären."),
    ],
  },
  {
    id: "b-team", group: "ausbildung", area: "mensch", title: "Team, Rollen, Pflegebeziehung und Stress", emoji: "🤝",
    ar: "الفريق يمر بمراحل: تكوين، عاصفة، تنظيم، أداء (Forming, Storming, Norming, Performing). العلاقة المهنية تحتاج قرباً مع مسافة. الإجهاد: عامل مجهد، تقييم، استجابة؛ استراتيجيات التعامل: حل المشكلة أو تنظيم الانفعال.",
    blocks: [
      B("Teamentwicklung", "Forming: Kennenlernen, Orientierung.", "Storming: Rollen und Macht werden ausgehandelt, Konflikte.", "Norming: Regeln und Zusammenhalt entstehen.", "Performing: Das Team arbeitet leistungsstark.", "Rollen im Team: Aufgabe, Position und Erwartungen klären, Konflikte offen ansprechen."),
      B("Professionelle Pflegebeziehung", "Nähe und Distanz in Balance halten. Der Patient ist abhängig; Pflegende tragen Verantwortung dafür, die Beziehung nicht auszunutzen.", "Grenzen kennen: Geschenke, Duzen und private Kontakte im Team klären."),
      B("Stress", "Belastungsfaktor (Stressor), Bewertung durch die Person und Reaktion hängen zusammen.", "Bewältigung: problemorientiert (die Ursache ändern) oder emotionsorientiert (den Umgang mit dem Gefühl ändern).", "Im Pflegeberuf besonders wichtig: Austausch, Supervision, Pausen, Bewegung, Entspannung und Grenzen setzen."),
    ],
  },

  // ───────── Gesundheitswesen ─────────
  {
    id: "b-sozialsystem", group: "ausbildung", area: "system", title: "Sozialsystem, Pflegeorganisation und DRG", emoji: "🏛️",
    ar: "نظام التأمينات الاجتماعية 5 أعمدة: صحة، تقاعد، بطالة، حوادث، رعاية. أشكال تنظيم التمريض: وظيفية، بحسب القسم، بحسب المسؤول (Bezugspflege)، Primary Nursing. الدفع بالمجموعات التشخيصية DRG.",
    blocks: [
      B("Fünf Säulen der Sozialversicherung", "Krankenversicherung (SGB V), Rentenversicherung, Arbeitslosenversicherung, Unfallversicherung, Pflegeversicherung (SGB XI). Teilhabe und Rehabilitation: SGB IX."),
      B("Pflegeorganisation", "Funktionspflege: Aufgaben werden nach Tätigkeit verteilt (effizient, aber zerstückelt).", "Bereichspflege (Zimmerpflege): Ein Team oder eine Person betreut einen Bereich.", "Bezugspflege: Eine Pflegende ist für wenige Patienten über den ganzen Aufenthalt verantwortlich.", "Primary Nursing: Eine Pflegefachperson trägt die Verantwortung für den gesamten Pflegeprozess eines Patienten, 24 Stunden, auch bei Abwesenheit."),
      B("DRG", "Diagnosis Related Groups: Krankenhäuser werden pro Fall nach Diagnosegruppe bezahlt (Fallpauschale). Folge: kurze Verweildauer und hoher Dokumentationsaufwand."),
    ],
  },

  // ───────── Pflegen und Vorbeugen ─────────
  {
    id: "b-beobachtung-vital", group: "ausbildung", area: "pflege", title: "Beobachten und Vitalzeichen (Normwerte)", emoji: "🌡️",
    ar: "الملاحظة بالحواس الخمس. القيم الطبيعية للبالغين: النبض 60 إلى 100 بالدقيقة، التنفس 14 إلى 16، الحرارة المركزية نحو 37، ضغط الدم المثالي نحو 120 على 80. نبض غير منتظم: عدّ دقيقة كاملة. تنفس بطيء وسطحي: خطر تخدير CO2.",
    blocks: [
      B("Beobachten", "Systematisch mit allen Sinnen: sehen, hören, riechen, fühlen. Das Beobachtete beschreiben, nicht deuten, und dokumentieren."),
      B("Puls", "Normal beim Erwachsenen 60 bis 100 pro Minute. Über 100: Tachykardie, unter 60: Bradykardie.", "Achten auf Frequenz, Rhythmus und Qualität. Unregelmäßiger Puls: eine volle Minute zählen."),
      B("Atmung", "Eupnoe etwa 14 bis 16 Atemzüge pro Minute. Schneller: Tachypnoe, langsamer: Bradypnoe.", "Beobachten: Frequenz, Tiefe, Rhythmus, Geräusche (Stridor), Geruch, Haltung, Mimik.", "Bei flacher, langsamer Atmung nicht unkontrolliert Sauerstoff geben (CO2-Narkose, Blutgase kontrollieren lassen)."),
      B("Blutdruck", "Zielbereich etwa 120/80 mmHg. Ab 140/90 mmHg liegt eine Hypertonie vor. Die Zahlenbereiche der Tabelle im Buch sind unklar gedruckt, deshalb hier die gängigen Richtwerte."),
      B("Temperatur", "Körperkerntemperatur etwa 37 °C. Unterkühlung (Hypothermie) kann zu Herzrhythmusstörungen führen.", "Erhöhte Temperatur über 37,5 °C (Hyperthermie), Fieber ab etwa 38,1 °C. Fieber hängt mit Infektion oder Entzündung zusammen."),
      B("Wann messen?", "Bei Aufnahme (Ausgangswert), dann üblicherweise täglich, engmaschiger bei Verschlechterung.", "Bei Auffälligkeiten den Arzt informieren."),
    ],
  },
  {
    id: "b-hygiene", group: "ausbildung", area: "pflege", title: "Hygiene und Infektionsschutz", emoji: "🧼",
    ar: "الصحة والوقاية من العدوى: طرق الانتقال (تماس، قطيرات، هواء، دم)، النظافة اليدوية أهم إجراء (5 لحظات)، التعقيم والتطهير، العزل، الملابس الواقية، التعامل الآمن مع الإبر.",
    blocks: [
      B("Übertragungswege", "Kontakt (direkt oder über Gegenstände), Tröpfchen, Luft (Aerosole), Blut und Körperflüssigkeiten, Lebensmittel."),
      B("Händehygiene", "Wichtigste Einzelmaßnahme. Die 5 Momente: vor Patientenkontakt, vor aseptischen Tätigkeiten, nach Kontakt mit Körperflüssigkeiten, nach Patientenkontakt, nach Kontakt mit der Patientenumgebung.", "Händedesinfektion vor Händewaschen. Sichtbar verschmutzte Hände zuerst waschen."),
      B("Weitere Maßnahmen", "Persönliche Schutzausrüstung (Handschuhe, Kittel, Mund-Nasen-Schutz).", "Flächendesinfektion, Aufbereitung von Medizinprodukten, Abfallentsorgung.", "Isolierung je nach Erreger (Kontakt, Tröpfchen, Aerosol, Schutzisolierung).", "Nadelstichverletzung: bluten lassen, desinfizieren, sofort melden (Durchgangsarzt)."),
    ],
  },
  {
    id: "b-koerperpflege", group: "ausbildung", area: "pflege", title: "Körperpflege, Waschungen, Mobilisation und Schlaf", emoji: "🛁",
    ar: "العناية بالجسم: غسل مهدئ (بطيء، بالاتجاه مع نمو الشعر، ماء دافئ) مقابل غسل منشط (عكس اتجاه الشعر، ماء بارد أولاً). التحريك المبكر، ترتيب السرير، النوم.",
    blocks: [
      B("Körperpflege", "Selbstständigkeit fördern, Intimsphäre wahren, Hautzustand beobachten, auf Wassertemperatur und Zeit achten."),
      B("Waschungen", "Beruhigende Ganzkörperwaschung: ruhig, warm, in Haarwuchsrichtung, fördert Entspannung und Schlaf.", "Belebende Waschung: gegen Haarwuchsrichtung, kühleres Wasser, regt Kreislauf und Wachheit an."),
      B("Mobilisation", "So früh und so viel wie möglich, vor Risiken wie Sturz, Thrombose und Pneumonie schützen. Hilfsmittel und rückenschonendes Arbeiten einsetzen."),
      B("Schlaf", "Störungen erkennen (Lärm, Licht, Schmerz, Angst) und Rituale fördern. Beruhigende Waschung, ruhige Umgebung."),
    ],
  },
  {
    id: "b-ernaehrung-ausscheidung", group: "ausbildung", area: "pflege", title: "Ernährung, Flüssigkeit, Bilanz und Ausscheidung", emoji: "💧",
    ar: "التغذية والسوائل: قاعدة EDEKA (حساسية، حمية، قيود، مرض، حساسيات). الحاجة للسوائل نحو 35 مل لكل كغ. ميزان السوائل: الدخل مقابل الخرج، مع التعرق غير المحسوس نحو 900 مل. مراقبة البراز والبول والقيء.",
    blocks: [
      B("EDEKA-Regel (vor dem Essen prüfen)", "Empfindlichkeiten und Unverträglichkeiten, Diät, Einschränkungen bei der Nahrungsaufnahme, Krankheitsbedingte Kost, Allergien."),
      B("Flüssigkeit und Energie", "Richtwert Flüssigkeitsbedarf: etwa 35 ml pro kg Körpergewicht und Tag (Arzt und Erkrankung beachten).", "Energiebedarf = Ruheenergieumsatz mal Aktivitätsfaktor (PAL)."),
      B("Bilanz", "Einfuhr (Trinken, Infusion, Nahrung) minus Ausfuhr (Urin, Stuhl, Erbrechen, Drainagen, Schwitzen).", "Die Perspiratio insensibilis (unmerklicher Verlust über Haut und Atmung) beträgt etwa 900 ml pro Tag und wird bei der Bilanz geschätzt."),
      B("Ausscheidung beobachten", "Urin: Menge, Farbe, Geruch, Beimengungen. Stuhl: Häufigkeit, Konsistenz, Farbe (Teerstuhl, Blut), Geruch. Erbrochenes: Menge, Farbe, Beimengungen, Zeitpunkt.", "Auffälligkeiten melden: Teerstuhl, Blut, kaffeesatzartiges Erbrechen."),
    ],
  },
  {
    id: "b-prophylaxen", group: "ausbildung", area: "pflege", title: "Prophylaxen im Überblick", emoji: "🛡️",
    ar: "الوقاية: قرحة الضغط، ذات الرئة، الخثار، السقوط، التقلص، الجفاف، الالتهاب. اتبع المخاطر الفردية، التحريك المبكر، التنفس، الجوارب الضاغطة بأمر الطبيب.",
    blocks: [
      B("Grundsatz", "Risiko erkennen (Assessment), individuell planen, durchführen, Wirkung kontrollieren und dokumentieren."),
      B("Wichtige Prophylaxen", "Dekubitus: Druck entlasten, Haut beobachten, Mobilisation, Lagerung, Hilfsmittel.", "Pneumonie: Atemübungen, Oberkörper hoch, Mobilisation, Mundpflege.", "Thrombose: Bewegung, Kompression nach Anordnung, ausreichend trinken.", "Sturz: Umgebung sichern, Hilfsmittel, Schuhe, Beleuchtung, Medikamente prüfen.", "Kontraktur: Gelenke bewegen, richtig lagern.", "Soor und Parotitis: Mundpflege, Kauen anregen.", "Obstipation, Intertrigo, Dehydratation, Infektionen."),
    ],
  },

  // ───────── Pflegetechniken ─────────
  {
    id: "b-katheter-injektion", group: "ausbildung", area: "technik", title: "Katheter, Injektion und die 6-R-Regel", emoji: "💉",
    ar: "القسطرة البولية بتعقيم شديد (خطر عدوى). الحقن: قاعدة 6 R (المريض الصحيح، الدواء، الجرعة، الطريقة، الوقت، التوثيق). مواقع الحقن: تحت الجلد، عضل، وريد، جلد. تحقق قبل الإعطاء.",
    blocks: [
      B("6-R-Regel", "Richtiger Patient, richtiges Medikament, richtige Dosis, richtige Applikationsart, richtiger Zeitpunkt, richtige Dokumentation. Dreimal prüfen: beim Richten, vor der Gabe, danach."),
      B("Injektion", "Subkutan, intramuskulär, intravenös und intrakutan. Asepsis, Desinfektion der Einstichstelle, Entsorgung der Kanüle ohne Rückstecken in die Schutzkappe.", "Aspirieren bei intramuskulärer Injektion, passende Stelle, Gefäße und Nerven meiden."),
      B("Harnblasenkatheter", "Immer steril einlegen. Indikation klären und täglich prüfen, ob er noch nötig ist (Harnwegsinfektion ist die häufigste Komplikation).", "Geschlossenes System, Urinbeutel unter Blasenniveau, nicht auf dem Boden, Intimpflege."),
    ],
  },
  {
    id: "b-zugaenge-infusion", group: "ausbildung", area: "technik", title: "Gefäßzugänge, Infusion und Transfusion", emoji: "🩸",
    ar: "المدخل الوريدي: محيطي أو مركزي. التسريب: تحقق من السائل، الجرعة، السرعة. نقل الدم: فحص الهوية والفصيلة، اختبار بجانب السرير، مراقبة 30 دقيقة الأولى، أخبر الطبيب عند حمى أو قشعريرة أو ضيق نفس.",
    blocks: [
      B("Zugänge", "Peripherer Venenkatheter (Venenverweilkanüle), zentraler Venenkatheter (ZVK), Port.", "Eintrittsstelle beobachten (Rötung, Schwellung, Schmerz = Phlebitis oder Infektion), steril verbinden, Dokumentation."),
      B("Infusion", "Lösung, Menge, Laufgeschwindigkeit nach Anordnung prüfen. Luft aus dem System entfernen. Auf Paravasat (Flüssigkeit im Gewebe), Schmerz und Kreislauf achten."),
      B("Bluttransfusion", "Nur ärztliche Aufgabe, Pflege assistiert und überwacht.", "Verträglichkeit: Blutgruppe, Kreuzprobe, Bedside-Test vor Gabe.", "Zu Beginn und danach engmaschig Vitalzeichen. Bei Schüttelfrost, Fieber, Luftnot, Rückenschmerz, Hautausschlag: sofort stoppen und Arzt rufen (Transfusionsreaktion)."),
    ],
  },
  {
    id: "b-sonden-drainagen", group: "ausbildung", area: "technik", title: "Sonden, Drainagen, Punktion und Biopsie", emoji: "🧪",
    ar: "الأنابيب: أنبوب أنفي معدي، PEG، تغذية بالأنبوب (التحقق من الموضع قبل البدء، رفع الجذع). المصارف: مراقبة الكمية واللون. البزل والخزعة: تحضير وموافقة ومراقبة بعدها.",
    blocks: [
      B("Magensonde und PEG", "Lage der Sonde vor jeder Nutzung kontrollieren (nach Hausstandard). Oberkörper hoch lagern. Nach Gabe mit Wasser spülen. Medikamente einzeln geben.", "Bei PEG: Verbandwechsel und Hautbeobachtung, Sonde mobilisieren."),
      B("Drainagen", "Menge, Farbe, Konsistenz beobachten und dokumentieren, Zug vermeiden, Ableitung unter Niveau, steril arbeiten."),
      B("Punktion und Biopsie", "Aufklärung und Einwilligung prüfen, Gerinnung beachten.", "Danach: Vitalzeichen, Einstichstelle auf Blutung und Infektion, Ruhelagerung nach Anordnung."),
    ],
  },
  {
    id: "b-stoma-einlauf-atem", group: "ausbildung", area: "technik", title: "Stoma, Einlauf, Atemtechniken und Tracheostoma", emoji: "🫁",
    ar: "الفغر (Stoma): مراقبة لون وإفراز، العناية بالجلد حوله. الحقنة الشرجية: وضع الاستلقاء على اليسار. أساليب التنفس: شفة مضمومة، تنفس بطني. فغر القصبة: شفط معقم، ترطيب، لا تترك المريض وحده.",
    blocks: [
      B("Stoma", "Rosige, feuchte Schleimhaut ist normal. Blass, blau oder dunkel kann auf Durchblutungsstörung hinweisen. Haut um das Stoma schützen, Versorgung anpassen, Ernährungsberatung."),
      B("Einlauf und Darmentleerung", "Linksseitenlage, Wärme der Lösung beachten, langsam einlaufen lassen, Toilette in der Nähe bereithalten."),
      B("Atemtechniken", "Lippenbremse, Bauchatmung, Husten-Hilfen, Oberkörperhochlagerung, Atemstimulierende Einreibung."),
      B("Tracheostoma", "Sterile Absaugung nach Bedarf, Atemluft befeuchten, Kanüle und Haut beobachten, Notfallset bereit. Patienten nicht allein lassen, Kommunikationshilfen anbieten."),
    ],
  },
  {
    id: "b-wunde-verband", group: "ausbildung", area: "technik", title: "Wundversorgung und Verbände", emoji: "🩹",
    ar: "الجرح: أنواع (حاد، مزمن)، مراحل الشفاء (التنظيف، الحبيبات، التبشر). تغيير الضماد بتقنية معقمة. علامات العدوى: احمرار، تورم، حرارة، ألم، إفراز. لا تعالج الجرح المزمن دون تقييم السبب.",
    blocks: [
      B("Wundarten und Heilung", "Akut (OP, Verletzung) oder chronisch (Dekubitus, Ulcus cruris, diabetischer Fuß).", "Phasen: Reinigung (Exsudation), Granulation (Aufbau), Epithelisierung (Abschluss)."),
      B("Verbandwechsel", "Aseptisch arbeiten, Hände desinfizieren, Wunde beurteilen (Größe, Wundgrund, Rand, Exsudat, Geruch, Schmerz) und dokumentieren.", "Moderne Wundauflagen halten ein feuchtes Wundmilieu."),
      B("Infektionszeichen", "Rötung, Schwellung, Überwärmung, Schmerz, Funktionseinschränkung, Eiter, Fieber. Sofort melden."),
    ],
  },

  // ───────── Lebensphasen ─────────
  {
    id: "b-schwangerschaft", group: "ausbildung", area: "lebensphasen", title: "Schwangerschaft, Geburt, Wochenbett und Präeklampsie", emoji: "🤰",
    ar: "الحمل والولادة والنفاس. تسمم الحمل (Präeklampsie): ضغط مرتفع وبروتين في البول، خطر التشنج (Eklampsie) ومتلازمة HELLP. الأعراض: صداع، رؤية غير واضحة، ألم أعلى البطن. تحتاج مراقبة دقيقة ونقلاً عاجلاً.",
    blocks: [
      B("Schwangerschaft", "Etwa 40 Wochen. Vorsorge, Folsäure, Ernährung, Verzicht auf Alkohol und Nikotin."),
      B("Hypertensive Schwangerschaftserkrankungen", "Präeklampsie: Bluthochdruck mit Eiweiß im Urin. Warnzeichen: Kopfschmerz, Sehstörung, Oberbauchschmerz, Ödeme.", "HELLP: Hämolyse, erhöhte Leberwerte, niedrige Thrombozyten, lebensbedrohlich.", "Eklampsie: Krampfanfälle. Sofort Arzt, Seitenlage, Atemwege schützen."),
      B("Wochenbett", "Rückbildung, Wochenfluss, Stillen anleiten, Dammpflege, Beobachtung von Fieber, Blutung und Stimmung (Babyblues, Wochenbettdepression)."),
    ],
  },
  {
    id: "b-kind-alter", group: "ausbildung", area: "lebensphasen", title: "Kind im Krankenhaus, alte Menschen und Menschen mit Behinderung", emoji: "🧒",
    ar: "طفل في المستشفى: وجود الأهل، لعب، شرح مناسب للعمر. كبار السن: أدوية متعددة، سقوط، خرف، تعدد الأمراض. إعاقة ذهنية: لغة بسيطة، تعزيز الاستقلال. الرعاية المنزلية: مشاركة الأقارب وإرشادهم.",
    blocks: [
      B("Kinder", "Angst vor Trennung und Schmerz, Eltern einbeziehen (Rooming-in), kindgerecht erklären, Spielen als Ressource.", "Vitalwerte altersabhängig: Säuglinge atmen deutlich schneller (40 bis 50 pro Minute) als Erwachsene."),
      B("Alte Menschen", "Mehrere Erkrankungen gleichzeitig, mehrere Medikamente (Polypharmazie), erhöhte Sturzgefahr, Demenz und Delir, Dehydratationsgefahr.", "Selbstständigkeit erhalten und Ressourcen fördern."),
      B("Geistige Behinderung", "Einfache, klare Sprache, Zeit lassen, Vertrauensperson einbeziehen, Selbstbestimmung achten."),
      B("Häusliche Pflege", "Angehörige anleiten und entlasten, Wohnumfeld anpassen, Pflegekurse und Beratungsangebote (SGB XI) vermitteln."),
    ],
  },

  // ───────── Therapie und besondere Situationen ─────────
  {
    id: "b-medikamente", group: "ausbildung", area: "therapie", title: "Medikamente, Antikoagulation und Lyse", emoji: "💊",
    ar: "الأدوية: قاعدة 6 R، التخزين، التفاعلات والآثار الجانبية. مميعات الدم (هيبارين، مضادات الفيتامين K): مراقبة النزيف، لا حقن عضلية. التحليل (Lyse): فقط تحت مراقبة طبية.",
    blocks: [
      B("Umgang mit Medikamenten", "6-R-Regel, Verfalldatum, Lagerung, Dokumentation. Nebenwirkungen und Wechselwirkungen beobachten. Pflegende stellen nicht ohne Anordnung, ändern keine Dosis."),
      B("Antikoagulation", "Heparin und Cumarine (Vitamin-K-Antagonisten) hemmen die Blutgerinnung.", "Blutungszeichen beobachten (Zahnfleisch, Urin, Stuhl, Haut), keine intramuskulären Injektionen, Gerinnungswerte (INR) kontrollieren, Patienten beraten."),
      B("Lyse", "Medikamentöse Auflösung von Blutgerinnseln (z. B. Herzinfarkt, Schlaganfall, Lungenembolie). Hohe Blutungsgefahr, strenge Überwachung."),
    ],
  },
  {
    id: "b-wickel-fieber", group: "ausbildung", area: "therapie", title: "Wickel, Fieber und perioperative Pflege", emoji: "🔥",
    ar: "اللفائف: حارة أو باردة حسب الهدف، تحقق من الراحة. الحمى: قياس، سوائل، تبريد برفق بأمر الطبيب. الرعاية حول العملية: قبلها (تحضير، صيام)، أثناءها، بعدها (مراقبة العلامات الحيوية، ألم، جرح).",
    blocks: [
      B("Wickel und Auflagen", "Wärme oder Kälte je nach Ziel. Hautzustand und Wohlbefinden prüfen, Verbrühungen und Erfrierungen vermeiden, Kontraindikationen beachten."),
      B("Fieber", "Temperatur messen, Flüssigkeit anbieten, Haut beobachten, Wadenwickel nur bei warmen Beinen und nach Hausstandard, fiebersenkende Medikamente nach Anordnung."),
      B("Perioperative Pflege", "Präoperativ: Aufklärung, Nüchternheit, Körperpflege, Prämedikation, Identität prüfen.", "Postoperativ: Vitalzeichen, Wunde, Drainagen, Schmerz, Übelkeit, Mobilisation, Prophylaxen."),
    ],
  },
  {
    id: "b-chronisch-onko", group: "ausbildung", area: "therapie", title: "Chronische Krankheit, Onkologie, Intensiv, Brand und Transplantation", emoji: "🏥",
    ar: "المرض المزمن: التكيف، التثقيف. الأورام: التعامل مع آثار العلاج (غثيان، سقوط الشعر، التهاب الفم)، الدعم النفسي. العناية المركزة: مراقبة دقيقة. الحروق: قاعدة التسعات. زرع الأعضاء: كبت المناعة وخطر العدوى.",
    blocks: [
      B("Chronisch krank und multimorbid", "Dauerhafte Anpassung nötig. Selbstmanagement fördern, Schulung, Beratung, Rückfälle und Krisen erkennen."),
      B("Onkologie", "Therapie: OP, Chemotherapie, Strahlentherapie. Nebenwirkungen lindern: Übelkeit, Mundschleimhautentzündung, Haarverlust, Müdigkeit, Infektionsgefahr.", "Psychische Begleitung der Patienten und Angehörigen."),
      B("Intensivpflege", "Engmaschige Überwachung von Kreislauf und Atmung, Beatmungspflege, Schmerz und Sedierung, Angehörige einbeziehen."),
      B("Verbrennungen", "Schweregrad nach Tiefe und betroffener Körperoberfläche. Kühlen mit lauwarmem Wasser, Schockgefahr, Infektionsgefahr."),
      B("Transplantation", "Immunsuppression nötig. Infektionsschutz, Abstoßungszeichen erkennen, Medikamente lebenslang."),
    ],
  },
  {
    id: "b-sterben", group: "ausbildung", area: "therapie", title: "Sterbebegleitung: Phasen, Finalphase und Todeszeichen", emoji: "🕯️",
    ar: "مرافقة المحتضر: مرحلة الاحتضار (أسابيع إلى أشهر) ثم المرحلة النهائية (أيام). مراحل كوبلر-روس الخمس: الإنكار، الغضب، المساومة، الاكتئاب، القبول. السمع يبقى طويلاً. علامات الموت غير المؤكدة ثم المؤكدة.",
    blocks: [
      B("Zwei Phasen", "Terminalphase: letzte Wochen bis Monate. Finalphase: letzte Tage bis Stunden."),
      B("Kübler-Ross: 5 Phasen", "Nicht-wahrhaben-Wollen, Zorn, Verhandeln, Depression, Annahme.", "Betroffene und Angehörige durchlaufen sie, aber nicht starr und nicht immer vollständig. Mischformen sind möglich."),
      B("Finalphase", "Müdigkeit und Schwäche, evtl. Angst und Unruhe, Hörvermögen bleibt lange erhalten: sprechen Sie mit dem Sterbenden.", "Kreislauf schwächer: kalte Extremitäten, blasse oder marmorierte Haut.", "Mundpflege, Schmerz- und Symptomlinderung, Ruhe, Nähe, Besuchszeiten flexibel."),
      B("Angehörige", "Erklären, was geschieht, Beistand und Ruhephasen ermöglichen, Seelsorge einbinden, Abschiedsrituale ermöglichen."),
      B("Nach dem Tod", "Unsichere und sichere Todeszeichen unterscheiden. Die Feststellung des Todes ist eine ärztliche Aufgabe. Würdevolle Versorgung des Verstorbenen nach Hausstandard."),
    ],
  },
  {
    id: "b-kultursensibel", group: "ausbildung", area: "therapie", title: "Kultursensible Pflege", emoji: "🌍",
    ar: "التمريض الحساس ثقافياً: احترام الدين والعادات (الغذاء، النظافة، الجنس، الصلاة)، مترجمون مؤهلون وليس الأقارب غالباً، سؤال المريض بدل التخمين، تجنب التنميط.",
    blocks: [
      B("Grundhaltung", "Offenheit und Respekt. Jeder Mensch ist individuell; Herkunft erklärt nie alles. Nachfragen statt annehmen."),
      B("Praxis", "Ernährungsgewohnheiten, Körperpflege und Scham, Geschlecht der Pflegeperson, Gebete und Rituale, Sterbe- und Trauerbräuche beachten.", "Sprachbarrieren: professionelle Dolmetscher bevorzugen, einfache Sprache, Bilder."),
    ],
  },

  // ───────── Konzepte ─────────
  {
    id: "b-anleiten-beraten", group: "ausbildung", area: "konzepte", title: "Anleiten, Beraten und Schulen", emoji: "🎯",
    ar: "التوجيه والاستشارة والتدريب: تحديد الحاجة، أهداف واقعية، شرح بسيط، عرض عملي ثم تطبيق المريض ثم تقييم. الاستشارة تحترم قرار المريض. التدريب لمجموعة.",
    blocks: [
      B("Anleiten", "Schritte: Bedarf klären, Ziel vereinbaren, vormachen, gemeinsam üben, selbst durchführen lassen, Rückmeldung geben und Wirkung prüfen."),
      B("Beraten", "Informieren und unterstützen bei Entscheidungen. Entscheidung bleibt bei der Person. Auf Rogers-Haltung und aktives Zuhören achten."),
      B("Schulen", "Gruppenangebot mit Lernzielen, Methoden und Auswertung."),
    ],
  },
  {
    id: "b-kinaesthetik-basal-bobath", group: "ausbildung", area: "konzepte", title: "Kinästhetik, Basale Stimulation und Bobath", emoji: "🤲",
    ar: "مفاهيم التمريض: الكينستيتيك (حركة طبيعية، تقليل الجهد)، التحفيز القاعدي (إدراك الجسم والبيئة لدى المرضى ذوي الإدراك المحدود)، بوباث (تحفيز الجانب المصاب لدى مرضى السكتة).",
    blocks: [
      B("Kinästhetik", "Bewegung gemeinsam gestalten, sodass der Mensch seine eigene Bewegung wahrnimmt und mithilft. Schont Rücken der Pflegenden und fördert die Selbstständigkeit."),
      B("Basale Stimulation", "Wahrnehmung anregen bei eingeschränkter Wahrnehmung (Berührung, Bewegung, Hören, Sehen, Riechen). Ruhige, klare Berührung, Vorhersehbarkeit."),
      B("Bobath-Konzept", "Fördert die betroffene Körperseite bei Halbseitenlähmung (z. B. nach Schlaganfall). Pflege und Ansprache von der betroffenen Seite, richtige Lagerung, Handling ohne Zug am Arm."),
    ],
  },
];
