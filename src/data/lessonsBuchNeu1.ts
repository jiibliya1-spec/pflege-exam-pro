/**
 * Ergänzende Krankheits-Lektionen (Gefäße, Verdauung, Niere, Prostata, Haut).
 * Inhaltlich orientiert an "I care – PflegeExamen KOMPAKT" (Thieme), in eigenen Worten und vereinfacht – KEIN Buchtext.
 * Anordnungen, Dosierungen und Hausstandards des Betriebs gehen immer vor.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_NEU_1: Lesson[] = [
  {
    id: "varikosis-thrombophlebitis", group: "krank", area: "herz", title: "Krampfadern (Varikosis) und oberflächliche Venenentzündung", icon: "Activity",
    ar: "الدوالي (Varikosis) توسّع في الأوردة السطحية للساق بسبب ضعف النسيج الضام، مع شعور بثقل وتعب. العلاج: جوارب ضاغطة، حركة، تجنّب الوقوف والجلوس الطويل. التهاب الوريد السطحي (Thrombophlebitis) غالباً بعد قنية: تُسحب القنية فوراً، رفع الطرف، تبريد، لفافات مطهّرة. خطر الانسداد الرئوي فيه قليل بخلاف الجلطة العميقة.",
    diagrams: [
      { kind: "compare", title: "Varikosis, Thrombophlebitis oder tiefe Thrombose?", cols: [
        { t: "Varikosis", icon: "Activity", tone: "info", items: ["Erweiterte oberflächliche Beinvenen", "Schwere- und Spannungsgefühl", "Besser durch Bewegung und Hochlegen", "Kompression, Bewegung"] },
        { t: "Thrombophlebitis", icon: "Thermometer", tone: "warn", items: ["Oberflächliche Vene entzündet", "Rot, warm, schmerzhafter Strang", "Oft nach Venenkanüle", "Kaum Emboliegefahr"] },
        { t: "Tiefe Beinvenenthrombose", icon: "TriangleAlert", tone: "bad", items: ["Tiefe Vene verschlossen", "Schwellung, Spannungsschmerz", "Lungenembolie möglich", "Immer ärztlich abklären"] },
      ], note: "Bei Verdacht auf tiefe Thrombose nie massieren oder selbst mobilisieren: Arzt informieren." },
      { kind: "flow", title: "Thrombophlebitis nach Venenzugang", steps: [
        { t: "Rötung und Schmerz an der Einstichstelle", icon: "Search", tone: "warn" },
        { t: "Zugang sofort entfernen", icon: "Syringe", tone: "bad" },
        { t: "Extremität hochlagern", icon: "Hand", tone: "info" },
        { t: "Kühlen und antiseptisch umschlagen", s: "z. B. Octenisept nach Anordnung", icon: "Snowflake", tone: "info" },
        { t: "Beobachten und dokumentieren", icon: "ClipboardCheck", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was sind Krampfadern?", "Sackartig erweiterte oberflächliche Beinvenen (V. saphena magna oder parva).", "Die Venenklappen schließen nicht mehr gut, das Blut staut sich in den Beinen.", "Beschwerden: Spannungs-, Druck-, Schwere- und Müdigkeitsgefühl, außerdem ein kosmetisches Problem."),
      B("Risikofaktoren", "Angeborene Bindegewebsschwäche.", "Weibliches Geschlecht und zunehmendes Alter.", "Langes Sitzen oder Stehen im Beruf, Bewegungsmangel."),
      B("Therapie und Pflege bei Varikosis", "Bewegen und Gehen statt langem Sitzen oder Stehen. Merkregel: Laufen und Liegen ist gut, Sitzen und Stehen ist schlecht.", "Kompressionsstrümpfe tragen (morgens anziehen, solange die Beine noch nicht geschwollen sind).", "Obstipation vorbeugen: Pressen erhöht den Druck in den Beinvenen.", "Keine schweren Lasten tragen. Hitze (Sauna, heißes Schwimmbad) meiden. Wechselduschen helfen.", "Bei fortgeschrittenen Stadien: operative Entfernung der Krampfadern (Varizenstripping)."),
      B("Thrombophlebitis", "Entzündliche Thrombose einer oberflächlichen Vene. Sehr oft an der Hand nach Gefäßpunktion.", "Im Unterschied zur tiefen Beinvenenthrombose besteht meist kein Embolierisiko.", "Vorbeugen: Venenzugänge täglich beurteilen und regelmäßig steril verbinden."),
      B("Prüfungswissen", "Varikosis = oberflächliche Venen, Thrombophlebitis = oberflächliche Entzündung, TVT = tiefe Vene.", "Venenzugang bei Phlebitis sofort entfernen, hochlagern, kühlen.", "Hitze und langes Stehen verschlechtern Krampfadern."),
    ],
  },
  {
    id: "lymph-erysipel", group: "krank", area: "herz", title: "Lymphgefäße: Lymphangitis, Erysipel (Wundrose) und Lymphödem", icon: "Droplets",
    ar: "التهاب الأوعية اللمفاوية يظهر كخط أحمر يمتد نحو العقد اللمفاوية. الحمرة (Erysipel) التهاب بكتيري بالمكورات العقدية، احمرار حاد الحدود بحواف لهبية، ويُعالج بالبنسلين. الوذمة اللمفاوية (Lymphödem) تراكم سوائل لا يترك أثراً عند الضغط، بعد استئصال العقد (مثلاً سرطان الثدي)، وتُعالج بالتصريف اللمفاوي والضغط وليس بمدرّات البول.",
    diagrams: [
      { kind: "table", title: "Drei Krankheitsbilder im Vergleich", head: ["", "Lymphangitis", "Erysipel", "Lymphödem"], rows: [
        ["Was ist es?", "Entzündete Lymphgefäße in Haut und Unterhaut", "Bakterielle Entzündung von Haut und Unterhaut", "Flüssigkeitsstau im Unterhautfett"],
        ["Typisches Zeichen", "Roter Strich zum Lymphknoten", "Scharf begrenzte Rötung mit flammenden Ausläufern", "Schwellung, Delle bleibt nicht (nicht eindrückbar)"],
        ["Ursache", "Lokale Infektion, z. B. Insektenstich", "Meist Streptokokken, häufig am Bein", "Lymphknoten entfernt oder Tumor blockiert Abfluss"],
        ["Behandlung", "Lokale Umschläge, oft folgenlos", "Penicillin", "Lymphdrainage, Kompression, Bewegung"],
      ], note: "Lymphangitis heißt im Volksmund Blutvergiftung, hat aber medizinisch meist nichts mit einer Sepsis zu tun." },
      { kind: "flow", title: "Warum entsteht ein Lymphödem nach Brustkrebs-OP?", steps: [
        { t: "Lymphknoten werden entfernt", icon: "Scissors", tone: "warn" },
        { t: "Lymphflüssigkeit kann nicht mehr abfließen", icon: "Droplets", tone: "warn" },
        { t: "Flüssigkeit sammelt sich im Unterhautfett", icon: "Waves", tone: "bad" },
        { t: "Arm schwillt an, Delle bleibt nicht", icon: "Hand", tone: "bad" },
        { t: "Lymphdrainage und Kompression", icon: "HandHelping", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Lymphangitis und Lymphadenitis", "Entzündung der Lymphgefäße in Haut und Unterhaut, sichtbar als roter Strich, der von der Eintrittsstelle zu den nächsten Lymphknoten zieht.", "Die Lymphknoten können geschwollen und schmerzhaft sein (Lymphadenitis).", "Häufig reichen lokale Umschläge, die Entzündung heilt oft folgenlos ab. Fieber oder Ausbreitung immer ärztlich melden."),
      B("Erysipel", "Örtlich begrenzte bakterielle Entzündung von Haut und Unterhaut, die sich über die Lymphgefäße ausbreitet. Auslöser sind meist Streptokokken.", "Meist am Unterschenkel. Typisch: scharf begrenzte, starke Rötung mit flammenden Ausläufern, Überwärmung, oft Fieber.", "Sehr gut mit Penicillin behandelbar.", "Pflege: Fieber, Ausbreitung der Rötung und Schmerz beobachten, Bein hochlagern und schonen, Eintrittspforte (z. B. Fußpilz, kleine Hautrisse) mitbehandeln lassen."),
      B("Lymphödem", "Sicht- und tastbare Flüssigkeitsansammlung im Unterhautfett. Im Unterschied zu normalen Ödemen lässt sie sich nicht eindrücken.", "Ursachen: Entfernung von Lymphknoten (z. B. bei Mammakarzinom), Abflussbehinderung durch Tumoren.", "Meist chronisch und für Betroffene stark belastend."),
      B("Behandlung des Lymphödems", "Physikalische Maßnahmen: regelmäßige Lymphdrainage, gezielte Bewegungsübungen, Kompressionstherapie.", "Diuretika (Entwässerungstabletten) sind nicht sinnvoll, weil der Stau nicht durch zu viel Wasser im Blut entsteht.", "Üblicher Pflegehinweis: Auf der betroffenen Seite Verletzungen vermeiden, Haut pflegen, nach Anordnung auf Blutdruckmessen und Blutentnahme am betroffenen Arm verzichten."),
      B("Prüfungswissen", "Erysipel: Streptokokken, flammende Rötung, Penicillin.", "Lymphödem: nicht eindrückbar, keine Diuretika, Lymphdrainage plus Kompression.", "Lymphangitis: roter Strich, hat meist nichts mit Sepsis zu tun."),
    ],
  },
  {
    id: "reflux-gerd", group: "krank", area: "verdauung", title: "Refluxkrankheit (Sodbrennen)", icon: "Flame",
    ar: "مرض الارتجاع المعدي المريئي: رجوع حمض المعدة إلى المريء مع حرقة. الأسباب: ضعف العضلة العاصرة السفلية للمريء، ضغط بطني مرتفع (حمل، سمنة)، زيادة الحمض (كحول، قهوة). المضاعفات: التهاب وتقرحات وقد يتطور سرطان المريء. التشخيص: تنظير المعدة وقياس pH. الرعاية: رفع الجزء العلوي من الجسم، تعديل نمط الحياة، أدوية خافضة للحمض على معدة فارغة.",
    diagrams: [
      { kind: "flow", title: "Vom Sodbrennen zur Komplikation", steps: [
        { t: "Unterer Schließmuskel der Speiseröhre schließt schlecht", icon: "Ribbon", tone: "warn" },
        { t: "Saurer Magensaft fließt zurück", icon: "Flame", tone: "warn" },
        { t: "NERD: gereizte Schleimhaut ohne Geschwür", icon: "Search", tone: "info" },
        { t: "ERD: Schleimhaut mit Geschwüren", icon: "TriangleAlert", tone: "bad" },
        { t: "Im schlimmsten Fall Speiseröhrenkrebs", icon: "Ribbon", tone: "bad" },
      ], note: "NERD = ohne Schleimhautdefekt, ERD = mit Schleimhautdefekt." },
      { kind: "tiles", title: "Typische Auslöser", items: [
        { t: "Übergewicht", s: "Mehr Druck im Bauch", icon: "Scale", tone: "warn" },
        { t: "Schwangerschaft", s: "Mehr Druck im Bauch", icon: "Baby", tone: "warn" },
        { t: "Alkohol und Kaffee", s: "Mehr Säure im Magen", icon: "Wine", tone: "warn" },
        { t: "Nikotin und fettes Essen", icon: "Cigarette", tone: "warn" },
      ] },
    ],
    blocks: [
      B("Was passiert?", "Saurer Magensaft fließt in die Speiseröhre zurück. Betroffene spüren Sodbrennen, Übelkeit, Völlegefühl und müssen oft sauer aufstoßen.", "Ursachen: mangelnder Verschluss des unteren Speiseröhren-Schließmuskels, erhöhter Bauchdruck (Schwangerschaft, Übergewicht), erhöhte Säureproduktion (Alkohol, Kaffee)."),
      B("Komplikationen", "Anfangs gleicht die Schleimhaut die Reizung aus (NERD, keine Geschwüre bei der Magenspiegelung).", "Bei längerer Reizung verändert sich die Schleimhaut, es entstehen Geschwüre (ERD).", "Ständige Reizung kann zu Speiseröhrenkrebs führen."),
      B("Diagnostik", "Meist beginnt es mit der Magenspiegelung (Gastroskopie).", "Langzeit-pH-Metrie: 24 Stunden lang misst eine dünne Sonde, wie oft Säure aufsteigt.", "Ösophagusmanometrie: zeigt, ob der untere Schließmuskel schlecht schließt."),
      B("Therapie", "Lebensweise ändern: Gewicht normalisieren, weniger fettreiches Essen, Kaffee, Nikotin und Alkohol.", "Säurehemmende Medikamente (Protonenpumpenhemmer, z. B. Pantoprazol).", "Bei fortgeschrittener Erkrankung Operation: Der Magenfundus wird wie eine Manschette um die untere Speiseröhre genäht (Fundoplicatio)."),
      B("Pflege und Beratung", "Oberkörper hochlagern: das verringert den Rückfluss.", "Säurehemmer im Stehen mit kohlensäurearmem Wasser auf nüchternen Magen einnehmen.", "Auf Programme der Krankenkasse hinweisen (z. B. Raucherentwöhnung) und auf regelmäßige Kontrollen beim Gastroenterologen."),
    ],
  },
  {
    id: "gastritis-ulkus", group: "krank", area: "verdauung", title: "Gastritis und Magen-/Zwölffingerdarmgeschwür", icon: "Pill",
    ar: "التهاب المعدة (Gastritis) التهاب في مخاطية المعدة، والقرحة (Ulkus) تقرّح يصل إلى عمق المخاطية. النوع A مناعي ذاتي، النوع B بكتيريا Helicobacter pylori، النوع C كيميائي (إيبوبروفين، ديكلوفيناك). الأعراض: غثيان، ألم شرسوفي، براز أسود وقيء دموي عند النزف. العلاج: علاج ثلاثي (مضادان حيويان + مثبط مضخة البروتون). المضاعفات: نزيف أو ثقب يؤدي لالتهاب الصفاق.",
    diagrams: [
      { kind: "table", title: "Chronische Gastritis: Typ A, B und C", head: ["Typ", "Eselsbrücke", "Ursache", "Behandlung"], rows: [
        ["A", "A wie autoimmun", "Antikörper gegen Belegzellen des Magens", "Folgen behandeln, Kontrollen"],
        ["B", "B wie Bakterium", "Helicobacter pylori", "Eradikation mit Triple-Therapie"],
        ["C", "C wie chemisch", "Schmerzmittel wie Ibuprofen oder Diclofenac", "Auslöser absetzen oder ersetzen"],
      ], note: "Die meisten Magengeschwüre entstehen auf dem Boden von Typ B oder Typ C." },
      { kind: "flow", title: "Wenn ein Geschwür gefährlich wird", steps: [
        { t: "Schleimhaut stark geschädigt", icon: "Flame", tone: "warn" },
        { t: "Magengeschwür (Ulkus)", icon: "CircleDot", tone: "warn" },
        { t: "Blutung: Teerstuhl und Bluterbrechen", icon: "Droplet", tone: "bad" },
        { t: "Durchbruch in die Bauchhöhle", icon: "TriangleAlert", tone: "bad" },
        { t: "Bauchfellentzündung (Peritonitis)", s: "Notfall", icon: "Siren", tone: "bad" },
      ] },
    ],
    blocks: [
      B("Begriffe", "Gastritis: Entzündung der Magenschleimhaut.", "Ulkus: Geschwür, das bis tief in die Schleimhaut reicht. Bei chronischen Geschwüren in Magen (Ulcus ventriculi) oder Zwölffingerdarm (Ulcus duodeni) spricht man von der gastroduodenalen Ulkuskrankheit."),
      B("Akute und chronische Gastritis", "Die akute Form tritt meist bei einer akuten Magen-Darm-Entzündung auf, häufig durch Viren (z. B. Noroviren). Sie heilt nach einigen Tagen Diät meist folgenlos aus.", "Wichtiger sind die chronischen Formen (Typ A, B, C, siehe Tabelle)."),
      B("Symptome", "Übelkeit und Erbrechen, saures Aufstoßen, Schmerzen im Oberbauch (epigastrisch), Appetitlosigkeit, manchmal Gewichtsabnahme.", "Alarmzeichen bei blutendem Ulkus: Teerstuhl (schwarzer, klebriger Stuhl) und Hämatinerbrechen (kaffeesatzartiges Erbrechen)."),
      B("Diagnostik", "Gastroskopie mit Schleimhautbiopsie.", "Nachweis von Helicobacter pylori durch Stuhluntersuchung und C13-Atemtest."),
      B("Therapie", "Auslöser behandeln. Bei Helicobacter: Triple-Therapie aus zwei verschiedenen Antibiotika plus einem Protonenpumpenhemmer (z. B. Pantoprazol).", "Lebensweise ändern: Gewicht normalisieren, weniger fettreiche Kost, Kaffee, Nikotin und Alkohol."),
      B("Komplikationen", "Das Geschwür kann bluten oder in die freie Bauchhöhle durchbrechen, danach folgt meist eine akute Peritonitis.", "Eine chronische Typ-A- oder Typ-B-Gastritis kann zu Magenkrebs führen."),
      B("Pflege", "Stuhl beobachten: Farbe (Teerstuhl?), Konsistenz, Häufigkeit.", "Bei akuter Gastritis mit Übelkeit schrittweiser Kostaufbau (z. B. Tee, Zwieback).", "Beraten: Lebensgewohnheiten, regelmäßige Medikamenteneinnahme, Krankheitsverlauf (fördert die Mitarbeit), mögliche Stuhlveränderungen."),
    ],
  },
  {
    id: "appendizitis", group: "krank", area: "verdauung", title: "Blinddarmentzündung (Appendizitis)", icon: "TriangleAlert",
    ar: "التهاب الزائدة الدودية: غالباً عند الشباب (أقل من 30 سنة) بسبب انسداد الزائدة. ألم أسفل البطن الأيمن عند الضغط على نقطتي McBurney و Lanz وألم الارتداد عند Blumberg، حرارة، غثيان. العلاج: عملية جراحية غالباً بالمنظار + مضاد حيوي وريدي. بعد الجراحة: مراقبة، ألم، صيام حتى أمر الطبيب، تجنّب حمل الأثقال 4 أسابيع.",
    diagrams: [
      { kind: "table", title: "Typische Schmerzpunkte", head: ["Punkt", "Lage", "Was löst Schmerz aus?"], rows: [
        ["McBurney", "Rechter Unterbauch, Mitte zwischen Nabel und vorderem Darmbeinstachel", "Druck auf den Punkt"],
        ["Lanz", "Rechter Unterbauch, im rechten Drittel der Verbindungslinie beider Darmbeinstachel", "Druck auf den Punkt"],
        ["Blumberg", "Linker Unterbauch", "Schmerz im rechten Bauch beim Loslassen (kontralateraler Loslassschmerz)"],
      ] },
      { kind: "flow", title: "Von der Verlegung zur OP", steps: [
        { t: "Appendix verlegt (Kotstein, Fremdkörper)", icon: "CircleDot", tone: "warn" },
        { t: "Entzündung mit Schmerz rechter Unterbauch", icon: "Flame", tone: "warn" },
        { t: "Untersuchung, Labor, Sonografie", icon: "Stethoscope", tone: "info" },
        { t: "Operation, meist per Bauchspiegelung", icon: "Scissors", tone: "ok" },
        { t: "Antibiotika i. v. nach der OP", icon: "Syringe", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Entzündung des Wurmfortsatzes (Appendix vermiformis) am Dickdarm. Im Alltag heißt sie Blinddarmentzündung.", "Auslöser ist meist eine Verlegung der Appendix, z. B. durch Kotsteine oder Fremdkörper.", "Typisch bei jungen Patienten unter 30 Jahren."),
      B("Symptome", "Schmerz im rechten Unterbauch bei Druck auf McBurney- oder Lanz-Punkt und kontralateraler Loslassschmerz (Blumberg-Zeichen).", "Schmerz bei der rektalen Untersuchung.", "Fieber, dabei ein Unterschied von etwa 1 °C zwischen axillärer und rektaler Messung.", "Übelkeit, Erbrechen, evtl. Durchfall."),
      B("Diagnostik", "Körperliche Untersuchung mit Tasten der Schmerzpunkte.", "Blutuntersuchung: erhöhte Entzündungswerte.", "Sonografie, bei Bedarf weitere Bildgebung."),
      B("Therapie", "Bei gesicherter Appendizitis wird operiert. Normalerweise laparoskopisch, nur bei schwierigen anatomischen Verhältnissen oder starker Umgebungsreaktion offen.", "Nach der OP Antibiotika intravenös. Bis dahin Nahrungskarenz."),
      B("Pflege", "Vitalzeichen beobachten, Schmerzen erfassen und nach Anordnung behandeln.", "Bauchdeckenentspannende Position: Knierolle, Oberkörper leicht hoch.", "Nahrungskarenz, Kostaufbau nur nach Arztanordnung. Flüssigkeit, Elektrolyte und Glukose nach Anordnung ersetzen.", "Üblicher Pflegehinweis bei unklarem Bauchschmerz: keine Wärme auf den Bauch und keine Abführmittel, solange die Ursache nicht geklärt ist.", "Nach der OP beraten: 4 Wochen nicht schwer tragen."),
      B("Prüfungswissen", "Rechter Unterbauch: McBurney, Lanz. Loslassschmerz: Blumberg.", "Appendizitis ist die häufigste Ursache einer Peritonitis.", "Akutes Abdomen ist ein Notfall mit sofortiger Diagnostik."),
    ],
  },
  {
    id: "peritonitis", group: "krank", area: "verdauung", title: "Bauchfellentzündung (Peritonitis)", icon: "Siren",
    ar: "التهاب الصفاق (Peritonitis) التهاب الغشاء المبطّن للبطن، وقد يشمل البطن كله. أشيع سبب: التهاب الزائدة. الأعراض: ألم بطني مع تشنج دفاعي (Abwehrspannung)، حمى عالية، وقد يتطور صدمة إنتانية. العلاج: مضادات حيوية وريدية، مراقبة مركّزة، وإيجاد السبب ومعالجته بسرعة.",
    diagrams: [
      { kind: "flow", title: "Entstehung und Verlauf", steps: [
        { t: "Entzündung im Bauch, z. B. Blinddarm, Gallenblase", icon: "Flame", tone: "warn" },
        { t: "Erreger breiten sich im Bauchfell aus", icon: "Bug", tone: "warn" },
        { t: "Druckschmerz, Abwehrspannung, hohes Fieber", icon: "Thermometer", tone: "bad" },
        { t: "Septischer Schock möglich", icon: "Siren", tone: "bad" },
        { t: "Antibiotika, Intensivstation, Ursache beseitigen", icon: "Syringe", tone: "ok" },
      ] },
      { kind: "tiles", title: "Wichtige Ursachen", items: [
        { t: "Appendizitis", s: "häufigste Ursache", icon: "TriangleAlert", tone: "bad" },
        { t: "Cholezystitis", icon: "Flame", tone: "warn" },
        { t: "Operation im Bauchraum", s: "nicht ausreichend steril", icon: "Scissors", tone: "warn" },
        { t: "Aszites", s: "ca. 15 % entwickeln eine spontan bakterielle Peritonitis", icon: "Droplets", tone: "warn" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Entzündung des Bauchfells. Das Bauchfell kleidet den ganzen Bauchraum aus, deshalb kann das gesamte Abdomen betroffen sein.", "Jede Entzündung oder nicht ausreichend sterile Operation im Bauchraum kann sie auslösen. Die häufigste Ursache ist die Appendizitis."),
      B("Spontan bakterielle Peritonitis", "Etwa 15 % der Patienten mit Aszites (Wasseransammlung im Bauch) entwickeln sie.", "Darmbakterien durchdringen die Darmwand und infizieren das Bauchfell."),
      B("Symptome", "Abdomineller Druckschmerz mit Abwehrspannung.", "Starkes Krankheitsgefühl und hohes Fieber.", "Im Verlauf Kreislaufprobleme durch septischen Schock, oft Intensivstation. Eine schwere Peritonitis kann auch heute noch tödlich verlaufen."),
      B("Diagnostik und Therapie", "Wie beim akuten Abdomen: Untersuchung, Blutentnahme mit Entzündungswerten, Sonografie und CT.", "Antibiotika intravenös und intensivmedizinische Überwachung.", "Wichtig: die Ursache finden und so schnell wie möglich behandeln."),
      B("Pflege", "Intensivmedizinische Überwachung, Vitalzeichen.", "Flüssigkeitshaushalt beobachten, bei septischem Schock Urinmenge und Hautzustand prüfen.", "Gabe und Überwachung der Antibiotikatherapie.", "Bei Verschlechterung sofort Arzt informieren."),
    ],
  },
  {
    id: "urolithiasis", group: "krank", area: "niere", title: "Nierensteine und Harnleiterkolik (Urolithiasis)", icon: "Droplets",
    ar: "حصوات المسالك البولية (Urolithiasis): تتكوّن من مواد مثل الكالسيوم وحمض اليوريك أو عند ارتفاع pH البول في التهابات المسالك. العرض الرئيسي: مغص شديد مع انتشار الألم ودم ظاهر في البول. التشخيص: السونار أو CT منخفض الجرعة. العلاج: مضادات التشنج والمسكنات، الحصوات الصغيرة تخرج وحدها، وإذا ترافقت مع حمى واحتباس البول يجب تصريف البول مع مضاد حيوي.",
    diagrams: [
      { kind: "flow", title: "Vom Stein zur Behandlung", steps: [
        { t: "Stein wandert im Harnleiter", icon: "CircleDot", tone: "warn" },
        { t: "Kolikartiger Schmerz mit Ausstrahlung, rotes Blut im Urin", icon: "Zap", tone: "bad" },
        { t: "Sonografie oder Niedrigdosis-CT", icon: "Search", tone: "info" },
        { t: "Spasmolytika und Schmerzmittel", icon: "Pill", tone: "ok" },
        { t: "Kleine Steine gehen oft spontan ab", icon: "Droplets", tone: "ok" },
      ] },
      { kind: "table", title: "Steine aktiv entfernen", head: ["Verfahren", "Kurz erklärt"], rows: [
        ["ESWL", "Extrakorporale Stoßwellenlithotripsie: Stein wird von außen mit Stoßwellen zertrümmert"],
        ["PNL", "Perkutane Nephrolithotomie: Zugang durch die Haut zur Niere"],
        ["Ureteroskopie", "Spiegelung des Harnleiters von der Blase aus"],
        ["Suprapubische Zystoskopie", "Blasenspiegelung über einen Zugang oberhalb des Schambeins"],
      ], note: "Fieber plus gestauter Harn ist ein Notfall: Urinableitung und Antibiotika." },
    ],
    blocks: [
      B("Entstehung", "Steine entstehen, wenn vermehrt steinbildende Stoffe ausgeschieden werden, z. B. Kalzium oder Harnsäure.", "Auch ein erhöhter Urin-pH, z. B. bei Harnwegsinfekten, begünstigt Steine."),
      B("Symptome", "Leitsymptom: kolikartige Schmerzen mit Ausstrahlung und Makrohämaturie (sichtbares Blut im Urin).", "Es kann ein akutes Abdomen oder ein Subileus entstehen."),
      B("Diagnostik und Therapie", "Sonografie oder Niedrigdosis-CT zeigen den Stein.", "Bei Harnleiterkolik: Spasmolytika und Analgetika.", "Bei fieberhafter Harnstauungsniere: Urinableitung inklusive Antibiotika.", "Aktive Steinentfernung z. B. durch ESWL, PNL, Ureteroskopie."),
      B("Pflege", "Schmerz erfassen, Medikamente nach Anordnung geben, Ausscheidung und Urinfarbe beobachten.", "Bilanzieren und auf ausreichende Flüssigkeitszufuhr achten (nur wenn keine Einschränkung angeordnet ist).", "Üblicher Hinweis: Urin sieben, wenn angeordnet, um abgegangene Steine aufzufangen.", "Nach Eingriffen: Katheter und Drainagen kontrollieren (abgeknickt? Blutgerinnsel?), Verbandwechsel, Katheterpflege."),
      B("Prüfungswissen", "Kolik + Blut im Urin = Verdacht auf Harnstein.", "Fieber + Stau = Notfall.", "Vorbeugen: viel trinken, nach ärztlicher Beratung Ernährung anpassen."),
    ],
  },
  {
    id: "vur-kinder", group: "krank", area: "niere", title: "Harnrückfluss bei Kindern (vesikoureteraler Reflux)", icon: "Baby",
    ar: "الارتجاع المثاني الحالبي (VUR): يرجع البول من المثانة إلى الحالبين وربما إلى الكليتين، فتتكرر التهابات المسالك. يصيب 1–5٪ من الأطفال والبنات أكثر. الأسباب: ولادية (حالب قصير عند التقائه بالمثانة) أو مكتسبة (مرض في المثانة أو انسداد تحتها). التشخيص بتصوير المثانة أثناء التبوّل (MCU).",
    diagrams: [
      { kind: "compare", title: "Primärer und sekundärer Reflux", cols: [
        { t: "Primär (angeboren)", icon: "Baby", tone: "info", items: ["Harnleiter an der Blasenwand falsch angelegt", "Harnleiter ist verkürzt", "Betrifft 1–5 % der Kinder", "Mädchen häufiger als Jungen"] },
        { t: "Sekundär (erworben)", icon: "Wrench", tone: "warn", items: ["Schaden der Harnblase durch Erkrankung", "Gestörter Harnabfluss unterhalb der Blase", "Kann in jedem Alter vorkommen"] },
      ] },
      { kind: "flow", title: "Warum wiederholen sich Infekte?", steps: [
        { t: "Harn fließt aus der Blase zurück", icon: "RefreshCw", tone: "warn" },
        { t: "Keime werden nach oben transportiert", icon: "Bug", tone: "warn" },
        { t: "Wiederholt Blasen- und Nierenbeckenentzündung", icon: "Thermometer", tone: "bad" },
        { t: "Nierenschmerzen, Narben in der Niere", icon: "Droplets", tone: "bad" },
      ], note: "Rezidivierende Harnwegsinfekte bei Kindern immer ärztlich abklären lassen." },
    ],
    blocks: [
      B("Was ist das?", "Beim vesikoureteralen Reflux (VUR) fließt Harn unphysiologisch aus der Blase in die Harnleiter oder bis in die Nieren zurück.", "Es besteht die Gefahr wiederholter Infektionen."),
      B("Ursachen und Häufigkeit", "Primär: Der Harnleiter ist falsch angelegt und verkürzt.", "Sekundär: Schädigung der Blase durch eine Blasenerkrankung oder gestörter Abfluss unterhalb der Blase.", "1–5 % aller Kinder sind betroffen, Mädchen häufiger als Jungen."),
      B("Symptome", "Wiederkehrende Harnwegsinfektionen, Nierenschmerzen, Fieber.", "Bei kleinen Kindern oft unspezifisch: Trinkschwäche, Erbrechen, unklares Fieber."),
      B("Diagnostik und Behandlung", "Miktionszystourethrografie (Röntgendarstellung beim Wasserlassen) und Sonografie.", "Gängige Behandlung: Infektprophylaxe und Kontrollen. Wenn die konservative Therapie nicht ausreicht oder es zu Reinfektionen kommt, gibt es operative oder endoskopische Möglichkeiten."),
      B("Pflege", "Urin und Diurese beobachten, bilanzieren, regelmäßig Gewicht kontrollieren.", "Auf ausreichende Flüssigkeitszufuhr achten.", "Nach einer Operation: Drainagen auf Lage prüfen (abgeknickt, Blutgerinnsel?), Verbandwechsel, Katheterpflege.", "Eltern in die Pflege einbeziehen und zur Intimhygiene beraten."),
    ],
  },
  {
    id: "bph-prostata-op", group: "krank", area: "geschlecht", title: "Gutartige Prostatavergrößerung (BPH) und Pflege nach Prostata-OP", icon: "UserRound",
    ar: "تضخم البروستاتا الحميد (BPH): زيادة خلايا الغدة بعد سن الخمسين، فيضعف تيار البول ويكثر التبوّل خاصة ليلاً. الدرجة I بلا بول متبقٍّ: أدوية (حاصرات ألفا 1 أو مثبطات 5 ألفا ردكتاز). الدرجة II-III مع بول متبقٍّ: عملية TUR-P. بعد العملية: غسل مستمر بمحلول NaCl 0.9٪، مراقبة لون البول والخثرات، تجنّب الإمساك، شرب 1.5 لتر.",
    diagrams: [
      { kind: "table", title: "BPH: Stadien und Behandlung", head: ["Stadium", "Beschwerden", "Behandlung"], rows: [
        ["I", "Probleme beim Wasserlassen, kein Restharn", "Pflanzliche Mittel, α1-Blocker (z. B. Tamsulosin), 5α-Reduktasehemmer (z. B. Finasterid)"],
        ["II und III", "Probleme beim Wasserlassen, mit Restharn", "Operation: TUR-P, bei sehr großer Prostata offene Adenomenukleation"],
        ["III", "Harnabfluss gefährdet", "Dauerkatheter sichert den Abfluss"],
      ] },
      { kind: "flow", title: "Pflege nach TUR-P", steps: [
        { t: "Vitalzeichen eng kontrollieren", icon: "HeartPulse", tone: "info" },
        { t: "Spülung mit 0,9 % NaCl läuft über Katheter", icon: "Droplets", tone: "info" },
        { t: "Urinfarbe, Blutgerinnsel, Zu- und Ablauf prüfen", icon: "Search", tone: "warn" },
        { t: "Bilanz am OP-Tag, bei Differenz Arzt informieren", icon: "Scale", tone: "warn" },
        { t: "Obstipation vermeiden, Bettruhe am OP-Tag", icon: "BedDouble", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Die Prostata ist durch eine Vermehrung von Drüsenzellen vergrößert (Prostataadenom).", "Vermutlich spielt ein Ungleichgewicht zwischen Östrogen und Testosteron mit. Betroffen sind sehr viele Männer über 50."),
      B("Symptome", "Abgeschwächter Harnstrahl, oft Nachträufeln.", "Häufiges Wasserlassen (Pollakisurie), nächtliches Wasserlassen (Nykturie).", "Starker Harndrang, teils mit Schmerzen."),
      B("Behandlung", "Stadium I: pflanzliche Präparate (z. B. Kürbissamen, Brennnesselwurzel) oder Medikamente, die den Auslasswiderstand senken oder die Prostata verkleinern.", "Stadium II und III: transurethrale Elektrosektion der Prostata (TUR-P). Bei sehr großer Prostata offene Operation.", "Im Stadium III sichert ein Dauerkatheter den Harnabfluss."),
      B("Vor und nach der OP", "Am Vorabend Enddarmreinigung (Klysma). Patient über strenge Bettruhe am OP-Tag informieren.", "Nach der OP: Vitalzeichen eng kontrollieren, Nachblutungsrisiko senken (Bettruhe am OP-Tag, Obstipationsprophylaxe).", "Dauerspülung mit 0,9 % NaCl über suprapubischen Katheter (Zufluss) und Dauerkatheter (Abfluss). Urin auf Blutgerinnsel beobachten, Zu- und Ableitungen kontrollieren, am OP-Tag bilanzieren.", "Bei Mengendifferenz Arzt informieren und Bauchumfang messen (Verletzung der Blase?).", "Kostaufbau: am OP-Tag nüchtern, danach normale Kost."),
      B("Beratung für die ersten 6 Wochen", "Nach Ende der Spülung etwa 1,5 Liter täglich trinken.", "Blut im Urin kann vorkommen, besonders wenn sich der Wundschorf am 7. bis 14. Tag löst. Häufiger Harndrang ist möglich.", "Ballaststoffreiche Kost, ggf. Milchzucker gegen Verstopfung.", "Schonung: kein Fahrradfahren, keine Vollbäder oder Sauna, kein Geschlechtsverkehr.", "Kontrollen und Früherkennung wahrnehmen."),
      B("Verwandte Erkrankungen", "Prostatitis: Fieber, Schmerz beim Wasserlassen, unvollständige Blasenentleerung, schmerzhafte Prostata. Therapie: Antibiotika i. v., Bettruhe, Schmerzmittel, ggf. Katheter. Für weichen Stuhl sorgen.", "Prostatakarzinom: häufigster bösartiger Tumor beim Mann, meist ab 70 Jahren, wächst langsam. Spät Blasenentleerungsstörungen oder Rückenschmerzen durch Knochenmetastasen. Häufig radikale Prostatektomie.", "Nach Prostatektomie: Katheterpflege, Urinfarbe beobachten, Kontinenztraining, Erektionsfähigkeit kann eingeschränkt sein, psychoonkologische Beratung anbieten."),
    ],
  },
  {
    id: "hauttumoren", group: "krank", area: "haut", title: "Hauttumoren: Nävus, Basaliom, Spinaliom, Melanom", icon: "Search",
    ar: "أورام الجلد: الحميدة (شامة Pigmentnävus، وحمة لهبية Nävus flammeus، ورم وعائي Hämangiom) والخبيثة: Basaliom (الأكثر شيوعاً، شبه خبيث بلا نقائل)، Spinaliom (خلايا حرشفية، ثاني الأكثر)، والميلانوما الخبيثة الأخطر. العلاج: استئصال واسع، وأحياناً علاج إشعاعي أو كيميائي. أي تغيّر في الجلد: إحالة لطبيب الجلد والفحص الوقائي المنتظم.",
    diagrams: [
      { kind: "table", title: "Die drei bösartigen Hautkrebsarten", head: ["Tumor", "Häufigkeit und Wachstum", "Behandlung"], rows: [
        ["Basaliom (Basalzellkarzinom)", "Häufigster Hauttumor, semimalignes Wachstum (wächst ein, streut nicht)", "Exzision, ggf. Bestrahlung"],
        ["Spinaliom (Plattenepithelkarzinom)", "Zweithäufigster, wächst in die Umgebung", "Großzügige Exzision, ggf. Strahlen- oder Chemotherapie"],
        ["Malignes Melanom (schwarzer Hautkrebs)", "Sehr bösartig, geht von den Melanozyten aus", "Sehr breite Exzision, Lymphknoten entfernen, je nach Stadium weitere Therapie"],
      ] },
      { kind: "compare", title: "Gutartig, semimaligne, bösartig", cols: [
        { t: "Benigne", icon: "ThumbsUp", tone: "ok", items: ["Verdrängt Gewebe, wächst nicht ein", "Keine Metastasen", "Z. B. Pigmentnävus, Feuermal, Hämangiom"] },
        { t: "Semimaligne", icon: "TriangleAlert", tone: "warn", items: ["Wächst in die Umgebung ein", "Bildet keine Metastasen", "Beispiel: Basaliom"] },
        { t: "Maligne", icon: "Siren", tone: "bad", items: ["Infiltration und Zerstörung von Gewebe", "Metastasen möglich", "Beispiele: Spinaliom, Melanom"] },
      ] },
    ],
    blocks: [
      B("Gutartige Hauttumoren", "Pigmentnävus (Leberfleck): mehr Melanozyten, hell- bis dunkelbraune Flecken. Auffällige Nävi werden im Zweifel entfernt.", "Kongenitaler Nävus: angeboren, beobachten. Riesennävi (über 10 cm) wegen Entartungsgefahr früh operieren.", "Nävus flammeus (Feuermal): angeborener hellroter Fleck durch erweiterte Kapillaren, Laser möglich.", "Hämangiom (Blutschwamm): gutartige Gefäßneubildung, kann sich bis zum 9. Lebensjahr zurückbilden, Entfernung nur bei Funktionsstörung."),
      B("Bösartige Hauttumoren", "Basaliom: häufigster Hauttumor, geht von den Basalzellen aus.", "Spinaliom: zweithäufigster, braucht eine großzügigere Exzision.", "Malignes Melanom: sehr bösartig, breite Exzision und Entfernung befallener Lymphknoten, bei Metastasen zusätzlich Strahlen-, Chemo- oder palliative Therapie."),
      B("Rolle der Pflege", "Auffällige Hautveränderung bemerkt? Den Patienten auf die fachärztliche Kontrolle hinweisen und im Pflegebericht festhalten.", "Vorsorgeuntersuchungen beim Hautarzt empfehlen.", "Sonnenschutz erklären und Sonnenbrand vermeiden."),
      B("Merkhilfe für auffällige Muttermale", "Üblich ist die ABCDE-Regel: Asymmetrie, unscharfe Begrenzung, uneinheitliche Farbe, Durchmesser über 6 mm, Entwicklung (Veränderung).", "Juckende, blutende oder wachsende Muttermale sind immer abklärungsbedürftig."),
    ],
  },
  {
    id: "psoriasis", group: "krank", area: "haut", title: "Schuppenflechte (Psoriasis)", icon: "Layers",
    ar: "الصدفية (Psoriasis): مرض مناعي ذاتي التهابي مزمن غير معدٍ يتقدم على شكل نوبات، يصيب الجلد والأظافر وأحياناً المفاصل، مع تسارع تجدد خلايا القرنية. لويحات حمراء محددة بقشور فضية على الأسطح الباسطة وفروة الرأس. المحفزات: التهابات، أدوية مثل حاصرات بيتا، توتر، ضغط ميكانيكي. العلاج: موضعي، علاج ضوئي، جهازي. الرعاية: تخفيف الحكة ودعم نفسي.",
    diagrams: [
      { kind: "tree", title: "Formen der Psoriasis", root: { t: "Psoriasis", icon: "Layers", tone: "info" }, kids: [
        { t: "Vulgaris", icon: "Layers", tone: "info", items: ["Scharf begrenzte rote Plaques", "Silbrig weiße Schuppung", "Streckseiten, Kopfhaut, Kreuzbein"] },
        { t: "Inversa", icon: "Layers", tone: "info", items: ["Nur Hautfalten betroffen", "Achsel, Leiste"] },
        { t: "Arthropathica", icon: "Bone", tone: "warn", items: ["Finger- und Zehengelenke schmerzhaft", "Ca. 5 % der Patienten"] },
        { t: "Pustulosa", icon: "Siren", tone: "bad", items: ["Schwerste, lebensbedrohliche Form", "Schmerzhafte Pusteln am ganzen Körper"] },
      ] },
      { kind: "cycle", title: "Der Juck-Kratz-Zirkel", steps: [
        { t: "Reiz: Hautreizung, Stress, Keime, Reibung", icon: "Flame", tone: "warn" },
        { t: "Juckreiz", icon: "Zap", tone: "warn" },
        { t: "Kratzen erleichtert kurz", icon: "Hand", tone: "info" },
        { t: "Haut entzündet sich, noch mehr Juckreiz", icon: "TriangleAlert", tone: "bad" },
      ], note: "Kratzalternativen: Nägel fest auf die Stelle drücken, klopfen, Massageball, kühlen." },
    ],
    blocks: [
      B("Was ist das?", "Chronisch-entzündliche, nichtinfektiöse, schubweise verlaufende Autoimmunerkrankung. Betroffen sind vor allem Haut und Nägel, seltener Gelenke.", "Die Neubildung von Hornzellen ist durch die Entzündung stark beschleunigt.", "Sie ist nicht ansteckend."),
      B("Ursachen und Auslöser", "Die Veranlagung ist erblich.", "Auslöser eines Schubs: Infektionen (v. a. der oberen Luftwege), Medikamente wie Betablocker, mechanische Hautreizung, Stress, Klimawechsel."),
      B("Therapie", "Lokal: abgestimmte Hautpflege und entzündungshemmende Salben (z. B. Glukokortikoide).", "Phototherapie bei stärkerer Ausdehnung.", "Systemisch bei großflächigem Befall oder ungenügendem Erfolg, Gegenanzeigen wie Kinderwunsch sorgfältig prüfen."),
      B("Pflege", "Haut beobachten: Farbe, Oberfläche, Nebenwirkungen der Therapie, Superinfektion.", "Juckreiz lindern: Nägel kurz, Kratzalternativen, Reibung vermeiden (lockere Naturfaser-Kleidung, kein Weichspüler, Haut abtupfen).", "Starke Hitze, Sonnenbrand, Alkohol, Drogen und Übergewicht meiden.", "Auf Selbsthilfegruppen hinweisen."),
      B("Seelische Folgen", "Die Haut ist für andere sichtbar: Stigmatisierung und Rückzug sind häufig.", "Mögliche Folgen: Isolation, Depression, Substanzmissbrauch. Pflegende sollen sensibel hinsehen und früh ansprechen."),
    ],
  },
  {
    id: "neurodermitis", group: "krank", area: "haut", title: "Neurodermitis (atopisches Ekzem)", icon: "Hand",
    ar: "التهاب الجلد التأتبي (Neurodermitis): التهاب جلدي مزمن بنوبات مع حكة شديدة وجفاف الجلد (نقص إفراز الدهون)، يصيب 10٪ من الأطفال و3٪ من البالغين. العلاج الأساسي: ترطيب منتظم عدة مرات يومياً؛ في النوبة: كورتيزون موضعي. الخطر: عدوى ثانوية بالمكورات العنقودية أو الهربس أو الفطريات. الرعاية: أظافر قصيرة، تجنّب المحفزات، دفتر يوميات.",
    diagrams: [
      { kind: "flow", title: "Zweistufige Behandlung", steps: [
        { t: "Basistherapie täglich", s: "Rückfettende Pflege, Ölbäder, mehrmals täglich", icon: "Droplet", tone: "ok" },
        { t: "Akuter Schub", s: "Entzündung hemmen", icon: "Flame", tone: "warn" },
        { t: "Leicht bis mittel: lokale Glukokortikoide", icon: "Pill", tone: "info" },
        { t: "Nicht ausreichend: topische Calcineurin-Inhibitoren", icon: "Pill", tone: "info" },
        { t: "Schwer: Glukokortikoide oder Ciclosporin oral", icon: "Syringe", tone: "bad" },
      ] },
      { kind: "tiles", title: "Typische Auslöser (Triggerfaktoren)", items: [
        { t: "Hautreizung", icon: "Hand", tone: "warn" },
        { t: "Allergene", icon: "Flower", tone: "warn" },
        { t: "Infektionen", icon: "Bug", tone: "warn" },
        { t: "Stress", icon: "Zap", tone: "warn" },
        { t: "Duftstoffe, Zusätze, chlorhaltiges Wasser", icon: "Droplets", tone: "warn" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Schubweise verlaufende, chronische Hauterkrankung mit stark juckenden Ekzemen. Ein Ekzem ist eine nichtinfektiöse Entzündungsreaktion der Haut.", "Etwa 10 % der Kinder und 3 % der Erwachsenen sind betroffen.", "Genetische Veranlagung wird angenommen. Die Hautbarriere ist gestört, die Haut reagiert empfindlich auf Reize."),
      B("Symptome", "Quälender Juckreiz mit hohem Leidensdruck.", "Trockene Haut und glanzloses Haar (verminderte Talgproduktion).", "Ekzeme heilen ohne Narben, langfristig aber Hautvergröberung (Lichenifikation).", "Gefürchtet: Superinfektion durch Kratzen mit Bakterien (z. B. Staphylokokken), Viren (z. B. Herpes simplex) oder Pilzen."),
      B("Pflege", "Haut und Haare beobachten, auf erhöhte Temperatur achten (Superinfektion?), psychosoziale Faktoren beachten.", "Nägel kurz halten, Haut nach dem Waschen nur abtupfen.", "Therapie unterstützen (lokal oder systemisch).", "Schlafen im ungeheizten Zimmer unter dünner Decke.", "Ernährung: schubauslösende Lebensmittel erfragen und dokumentieren."),
      B("Beratung", "Triggerfaktoren: künstliche Zusätze, Duftstoffe, Umweltbelastungen, chlorhaltiges Wasser. Ein Tagebuch über Nahrung und Aktivitäten hilft.", "Maßnahmen gegen Juckreiz (siehe Psoriasis), Selbsthilfegruppen, Sozialdienst.", "Phototherapie wird erst bei Patienten über 40 Jahren erwogen, weil sie Hautkrebs fördern kann."),
    ],
  },
  {
    id: "haut-infektionen", group: "krank", area: "haut", title: "Hautinfektionen: Furunkel, Pilze und Krätze", icon: "Bug",
    ar: "عدوى الجلد: الدمل (Furunkel) التهاب بكتيري بالمكورات العنقودية في جريبة الشعر؛ الدمامل في الوجه خطرة (انتقال العدوى إلى الجيب الكهفي) ولا تُفتح، بل مضادات حيوية ومنع الكلام والمضغ. الفطريات: قدم الرياضي، فطر الأظافر، فطريات الكانديدا؛ علاج بمضادات الفطريات وتجفيف الطيات. الجرب (Skabies) طفيلي يسبب حكة شديدة؛ علاج بمرهم Permethrin وعزل الحالات الشديدة.",
    diagrams: [
      { kind: "table", title: "Drei Gruppen von Hautinfektionen", head: ["Gruppe", "Erreger", "Typisch", "Wichtig in der Pflege"], rows: [
        ["Follikulitis, Furunkel, Karbunkel", "Staphylococcus aureus", "Rötung, Pustel, Abszess in Bart-, Gesäß- und Schambereich", "Zugsalbe, Stichinzision durch den Arzt, im Gesicht NICHT öffnen"],
        ["Pilzinfektionen", "Dermatophyten (Tinea), Candida", "Fußpilz, Nagelpilz, Mundsoor, Windelsoor", "Falten trocken halten, Antimykotika, Einmal-Waschhandschuh"],
        ["Krätze (Skabies)", "Milben", "Juckreiz entlang von Milbengängen, Ansteckung durch engen Körperkontakt", "Permethrin, Wäsche wechseln, Schutzkittel und Handschuhe"],
      ] },
      { kind: "flow", title: "Gefahr beim Gesichtsfurunkel", steps: [
        { t: "Furunkel im Gesicht", icon: "UserRound", tone: "warn" },
        { t: "Erreger wandern über die Vena angularis", icon: "Droplet", tone: "bad" },
        { t: "Sinus cavernosus: Thrombose, Meningitis, Enzephalitis", icon: "Brain", tone: "bad" },
        { t: "Nicht öffnen, Antibiotika, Sprech- und Kauverbot", icon: "Syringe", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Follikulitis, Furunkel, Karbunkel", "Follikulitis: oberflächliche bakterielle Infektion des Haarbalgs mit Staphylococcus aureus. Furunkel: tiefere Schichten betroffen. Karbunkel: mehrere verschmolzene Furunkel.", "Risiko: geschwächtes Immunsystem (z. B. Diabetes mellitus) und mangelnde Körperhygiene.", "Therapie: bei Follikulitis lokal antiseptisch (z. B. Jodlösung). Furunkel: Ichthyolsalbe (Zugsalbe) lässt den Abszess ausreifen, danach kann der Arzt ihn eröffnen und ausräumen, ggf. mit Drainage."),
      B("Gesicht beachten", "Furunkel im Gesicht dürfen nicht eröffnet werden.", "Behandlung mit Antibiotika, Sprech- und Kauverbot, flüssige Kost und Parotitisprophylaxe."),
      B("Pilzinfektionen", "Dermatophyten (Tinea): Fußpilz, Nagelpilz, Kopfhautpilz.", "Candida: Mundsoor (weiße abwischbare Beläge), Hautfalten (z. B. Achseln, unter der Brust, Windelbereich), genital. Bei sehr geschwächtem Immunsystem auch Candida-Pneumonie oder Sepsis.", "Behandlung: Antimykotika als Creme oder Nagellack, bei starker Ausprägung systemisch.", "Pflege: Körperfalten und Zehenzwischenräume trocken halten, gründlich abtrocknen, Kompressen einlegen, separater Einmal-Waschhandschuh und Handtuch.", "Mundsoor: Beläge mit Zahnbürste oder Zungenreiniger entfernen, Antimykotikum auftragen, danach eine halbe Stunde nichts essen oder trinken."),
      B("Krätze (Skabies)", "Milben graben Gänge in die Hornschicht. Der Körper reagiert allergisch auf den Milbenkot, dadurch juckt es entlang der Gänge. Ansteckung durch engen Körperkontakt.", "Behandlung meist ambulant. Säuglinge und Patienten mit starkem Befall werden stationär aufgenommen und für 14 Tage isoliert.", "Permethrin-Salbe auf die betroffenen Stellen oder den ganzen Körper, nach 8 bis 12 Stunden abduschen. Kleidung und Bettwäsche wechseln, dünne Stoffe tragen (Wärme verstärkt den Juckreiz).", "Eigener Schutz: Einmalhandschuhe, Schutzkittel, gründliche Händehygiene nach jedem Kontakt."),
    ],
  },
  {
    id: "arzneimittelexanthem", group: "krank", area: "haut", title: "Hautausschlag durch Medikamente (Arzneimittelexanthem)", icon: "Pill",
    ar: "الطفح الجلدي الدوائي (Arzneimittelexanthem): ردّ فعل تحسسي أو شبه تحسسي بعد تناول دواء. يظهر عادة من الأسبوع الثاني، على الجذع ثم الأطراف، مع حكة. أكثر الأدوية: المضادات الحيوية (خاصة أمبيسيلين)، المسكنات، أدوية الغدة الدرقية. العلاج: إيقاف الدواء، مضاد هيستامين وكورتيزون، وتسجيل الدواء في بطاقة الحساسية.",
    diagrams: [
      { kind: "flow", title: "Was tun bei Verdacht auf Arzneimittelexanthem?", steps: [
        { t: "Neuer Ausschlag, oft ab der 2. Behandlungswoche", icon: "Search", tone: "warn" },
        { t: "Arzt sofort informieren", icon: "Phone", tone: "bad" },
        { t: "Medikament nach Anordnung absetzen", icon: "Pill", tone: "bad" },
        { t: "Antihistaminikum, Glukokortikoide, Juckreiz lindern", icon: "Hand", tone: "ok" },
        { t: "Eintrag in den Allergiepass", icon: "ClipboardCheck", tone: "ok" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Eine unerwünschte Arzneimittelwirkung an der Haut: entweder eine allergische Reaktion oder eine Pseudoallergie (Unverträglichkeit ohne Allergie)."),
      B("Auslöser", "Grundsätzlich kann jedes Medikament einen Ausschlag verursachen.", "Gehäuft bei Antibiotika (besonders Ampicillin), Schmerzmitteln und Schilddrüsenmedikamenten."),
      B("Erkennen", "Meist ab der 2. Behandlungswoche.", "Beginn häufig am Stamm, dann Ausbreitung auf die Extremitäten.", "Sehr unterschiedliches Aussehen, meist mit Juckreiz.", "Zusätzliche Atemnot, Schwellung im Gesicht oder Kreislaufprobleme sind Notfallzeichen: sofort Arzt rufen."),
      B("Therapie und Pflege", "Medikament absetzen (nur nach ärztlicher Anordnung).", "Antihistaminikum, Glukokortikoide und lokale Maßnahmen gegen den Juckreiz.", "Das auslösende Medikament künftig meiden und im Allergiepass eintragen. Auf Dokumentation in der Patientenakte achten."),
    ],
  },
];
