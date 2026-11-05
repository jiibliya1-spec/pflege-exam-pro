import type { QuizTopic } from "./types";

export const T3: QuizTopic[] = [
  {
    id: "notfall", de: "Notfall & Reanimation", ar: "الطوارئ والإنعاش", icon: "Siren", color: "#dc2626",
    qs: [
      ["Verhältnis Herzdruckmassage zu Beatmung beim Erwachsenen?|نسبة ضغطات الصدر إلى التنفس عند البالغ؟", ["15:2|15:2", "30:2|30:2", "5:1|5:1", "10:10|10:10"], 1, "30 Kompressionen, dann 2 Beatmungen.|30 ضغطة ثم نفَسان."],
      ["Drucktiefe bei der Reanimation des Erwachsenen?|عمق الضغط في إنعاش البالغ؟", ["1–2 cm|1–2 سم", "5–6 cm|5–6 سم", "10 cm|10 سم", "So weit wie möglich|أقصى ما يمكن"], 1, "Frequenz 100–120/min.|بمعدل 100–120 في الدقيقة."],
      ["Erster Schritt bei einem Bewusstlosen?|أول خطوة مع فاقد الوعي؟", ["Ansprechen und Schmerzreiz prüfen, Atmung prüfen|مناداته واختبار المنبه المؤلم وفحص التنفس", "Wasser geben|إعطاؤه ماء", "Aufsetzen|إجلاسه", "Alleinlassen|تركه وحيدًا"], 0, "Atmung prüfen: sehen, hören, fühlen (max. 10 s).|فحص التنفس: نظر وسمع وإحساس (حتى 10 ثوانٍ)."],
      ["Wann ist die stabile Seitenlage sinnvoll?|متى تفيد الوضعية الجانبية المستقرة؟", ["Bewusstlos, aber normal atmend|فاقد الوعي ويتنفس بشكل طبيعي", "Bei Atemstillstand|عند توقف التنفس", "Bei Herzstillstand|عند توقف القلب", "Bei klarem Bewusstsein|عند الوعي الكامل"], 0, "Sichert die Atemwege vor Aspiration.|تحمي المجرى الهوائي من الاستنشاق."],
      ["Was gehört zu den „5 W“ des Notrufs?|ما الذي يندرج ضمن «5 W» للاتصال بالطوارئ؟", ["Wo, Was, Wie viele, Welche Verletzungen, Warten auf Rückfragen|أين وماذا وكم وأي إصابات وانتظار الأسئلة", "Wer, Wann, Wieso, Wohin, Weg|من ومتى ولماذا وإلى أين والطريق", "Wasser, Wärme, Wach, Wut, Wind|ماء ودفء ويقظة وغضب وريح", "Nur den eigenen Namen nennen|ذكر اسمك فقط"], 0, "Die Leitstelle fragt nach – erst auflegen, wenn sie es sagt.|غرفة العمليات تسأل – لا تُغلق الخط حتى تطلب ذلك."],
      ["Wie wird ein AED eingesetzt?|كيف يُستخدم جهاز AED؟", ["Anweisungen des Geräts befolgen, Elektroden kleben|اتباع تعليمات الجهاز ولصق الأقطاب", "Erst nach dem Notarzt|بعد وصول الطبيب فقط", "Nur durch Ärzte|بواسطة الأطباء فقط", "Bei Bewusstsein|عند الوعي"], 0, "AED führt per Sprachansage – Laien dürfen ihn nutzen.|الجهاز يرشد بالصوت ويجوز للعامة استخدامه."],
      ["Anaphylaktischer Schock – erste Maßnahme?|الصدمة التحسسية – أول إجراء؟", ["Allergenzufuhr stoppen, Notruf, Adrenalin nach Anordnung|إيقاف مصدر الحساسية والاتصال بالطوارئ وإعطاء أدرينالين حسب الأمر", "Abwarten|الانتظار", "Essen geben|إعطاء طعام", "Duschen|الاستحمام"], 0, "Schocklage, Zugang, Monitoring.|وضعية الصدمة وخط وريدي ومراقبة."],
      ["Schocklage bedeutet …|وضعية الصدمة تعني …", ["Beine hoch, Oberkörper flach|رفع الساقين والجذع مسطح", "Sitzen|الجلوس", "Bauchlage|الانبطاح", "Kopfhoch|رفع الرأس"], 0, "Nicht bei kardialem Schock mit Atemnot.|ليست للصدمة القلبية مع ضيق النفس."],
      ["Verbrennung 2. Grades zeigt …|الحرق من الدرجة الثانية يظهر …", ["Blasen, Schmerz, Rötung|فقاعات وألم واحمرار", "Verkohlung ohne Schmerz|تفحّم دون ألم", "Nur Röte|احمرار فقط", "Kein Befund|لا علامات"], 0, "Kühlen mit lauwarmem Wasser, ~10 Minuten.|تبريد بماء فاتر نحو 10 دقائق."],
      ["Bei starker Blutung hilft zuerst …|عند نزيف شديد يساعد أولًا …", ["Direkter Druck auf die Wunde|الضغط المباشر على الجرح", "Wunde auswaschen|غسل الجرح", "Alkohol auftragen|وضع كحول", "Wunde offen lassen|ترك الجرح مكشوفًا"], 0, "Druckverband, Schockprophylaxe, Notruf.|ضماد ضاغط ووقاية من الصدمة واتصال بالطوارئ."],
    ],
  },
  {
    id: "hygiene", de: "Hygiene & Infektion", ar: "النظافة والعدوى", icon: "ShieldCheck", color: "#06b6d4",
    qs: [
      ["Die Händedesinfektion dauert mindestens …|مدة تعقيم اليدين على الأقل …", ["5 Sekunden|5 ثوانٍ", "30 Sekunden|30 ثانية", "5 Minuten|5 دقائق", "1 Stunde|ساعة"], 1, "Mindestens 30 Sekunden Einwirkzeit, alle Areale benetzen.|30 ثانية على الأقل مع ترطيب كل المناطق."],
      ["„5 Momente der Händehygiene“ – wann desinfiziert man?|متى تُعقَّم اليدان؟", ["Vor Patientenkontakt und vor aseptischen Tätigkeiten|قبل ملامسة المريض وقبل الأعمال المعقّمة", "Nur am Dienstende|في نهاية الدوام فقط", "Nur bei sichtbarem Schmutz|عند الاتساخ الظاهر فقط", "Nie|أبدًا"], 0, "Außerdem nach Körperflüssigkeiten, Patientenkontakt, Umgebungskontakt.|وكذلك بعد سوائل الجسم وبعد المريض وبعد محيطه."],
      ["MRSA ist …|MRSA هو …", ["Methicillin-resistenter Staphylococcus aureus|مكورات عنقودية ذهبية مقاومة للميثيسيلين", "Ein Virus|فيروس", "Ein Pilz|فطر", "Ein Impfstoff|لقاح"], 0, "Isolierung und Kontaktschutz nach Hausregeln.|عزل وحماية من التماس وفق قواعد المؤسسة."],
      ["Ein Mund-Nasen-Schutz schützt …|الكمامة الجراحية تحمي …", ["vor Tröpfcheninfektion|من العدوى بالرذاذ", "vor Stichverletzung|من الوخز", "vor Strahlung|من الإشعاع", "vor nichts|من لا شيء"], 0, "FFP2 schützt zusätzlich vor Aerosolen.|وFFP2 يحمي أيضًا من الهباء الجوي."],
      ["Nach Kontamination mit Blut an der Haut …|بعد تلوث الجلد بالدم …", ["Gründlich waschen und desinfizieren, Meldung|غسل جيد وتعقيم وإبلاغ", "Ignorieren|التجاهل", "Nur abwischen|المسح فقط", "Pflaster kleben|وضع لاصق"], 0, "Bei Nadelstich: D-Arzt, Dokumentation.|عند وخز الإبرة: طبيب الحوادث وتوثيق."],
      ["Scharfe Instrumente werden entsorgt …|تُتلف الأدوات الحادة …", ["im durchstichsicheren Behälter|في حاوية مقاومة للثقب", "im Hausmüll|في القمامة المنزلية", "im Wäschesack|في كيس الغسيل", "Zurück in Schutzkappe|بإعادة الغطاء"], 0, "Nie Kanülen recappen!|لا تُعد الغطاء على الإبرة أبدًا!"],
      ["Welche Händehygiene bei Clostridioides difficile?|ما نظافة اليدين مع كلوستريديوم ديفيسيل؟", ["Waschen mit Seife (Sporen)|الغسل بالصابون (الأبواغ)", "Nur Desinfektion|التعقيم فقط", "Keine|لا شيء", "Handschuhe reichen|القفازات تكفي"], 0, "Alkohol wirkt nicht gegen Sporen – Händewaschen zusätzlich.|الكحول لا يقتل الأبواغ فيُضاف الغسل."],
      ["Standardhygiene gilt …|النظافة القياسية تسري …", ["für alle Patienten|لجميع المرضى", "nur bei bekannter Infektion|عند العدوى المعروفة فقط", "nur im OP|في غرفة العمليات فقط", "nur für Ärzte|للأطباء فقط"], 0, "Jeder Patient kann potenziell infektiös sein.|أي مريض قد يكون معديًا."],
      ["Ein Blasenkatheter erhöht das Risiko für …|القسطرة البولية تزيد خطر …", ["Harnwegsinfektion|عدوى المسالك البولية", "Knochenbruch|كسر العظام", "Heuschnupfen|حمى القش", "Sehstörungen|اضطرابات الرؤية"], 0, "Nur bei klarer Indikation und so kurz wie möglich.|عند وجود دواعٍ واضحة ولأقصر مدة."],
      ["Wie lange sollte Einmalhandschuhe getragen werden?|متى تُستخدم القفازات؟", ["Nur für die jeweilige Tätigkeit, dann wechseln|للمهمة المحددة فقط ثم تُبدّل", "Den ganzen Dienst|طوال الدوام", "Mehrere Patienten hintereinander|عدة مرضى متتالين", "Nie wechseln|لا تُبدَّل أبدًا"], 0, "Nach Handschuhen Händedesinfektion.|بعد القفازات تُعقَّم اليدان."],
    ],
  },
  {
    id: "system", de: "Pflegesystem & SGB", ar: "نظام الرعاية والتأمين", icon: "Landmark", color: "#6366f1",
    qs: [
      ["Die Pflegeversicherung ist geregelt im …|يُنظَّم التأمين التمريضي في …", ["SGB XI|SGB XI", "SGB V|SGB V", "SGB III|SGB III", "BGB allein|BGB وحده"], 0, "SGB V = Krankenversicherung, SGB XI = Pflegeversicherung.|SGB V تأمين صحي وSGB XI تأمين تمريضي."],
      ["Wie viele Pflegegrade gibt es?|كم عدد درجات الرعاية؟", ["3|3", "5|5", "7|7", "10|10"], 1, "Pflegegrad 1 bis 5 nach Selbstständigkeit.|من الدرجة 1 إلى 5 حسب الاستقلالية."],
      ["Der Pflegegrad wird begutachtet durch …|تُقيَّم درجة الرعاية بواسطة …", ["Medizinischen Dienst (MD)|الخدمة الطبية MD", "Das Finanzamt|مصلحة الضرائب", "Die Polizei|الشرطة", "Den Pflegedienst allein|خدمة الرعاية وحدها"], 0, "Instrument: Neues Begutachtungsassessment (NBA).|الأداة: NBA."],
      ["Das NBA bewertet u. a. …|يقيّم NBA من جملة ما يقيّم …", ["Selbstständigkeit in 6 Modulen|الاستقلالية في 6 وحدات", "Nur Gehstrecke|مسافة المشي فقط", "Nur Alter|العمر فقط", "Einkommen|الدخل"], 0, "Mobilität, kognitive Fähigkeiten, Verhalten, Selbstversorgung, Krankheitsbewältigung, Alltag.|الحركة والإدراك والسلوك والعناية الذاتية والتعامل مع المرض وتنظيم الحياة."],
      ["Bezugspflege bedeutet …|التمريض المرجعي يعني …", ["Eine feste Pflegekraft ist Hauptansprechpartner|ممرض ثابت هو المرجع الرئيسي", "Jeder macht alles|الكل يفعل كل شيء", "Nur Funktionspflege|تمريض وظيفي فقط", "Keine Planung|بلا تخطيط"], 0, "Kontinuität und Beziehung stehen im Vordergrund.|الاستمرارية والعلاقة في المقدمة."],
      ["Funktionspflege ist …|التمريض الوظيفي هو …", ["Aufgabenorientiert (jede Person ein Arbeitsschritt)|موجَّه بالمهام (كل شخص خطوة)", "Ganzheitlich|شمولي", "Patientenzentriert|محوره المريض", "Primary Nursing|Primary Nursing"], 0, "Effizient, aber fragmentiert.|فعّال لكنه مجزأ."],
      ["Der Pflegeprozess hat …|لعملية التمريض …", ["6 Schritte nach Fiechter/Meier|6 خطوات حسب فيشتر/ماير", "2 Schritte|خطوتان", "20 Schritte|20 خطوة", "keine feste Struktur|لا بنية ثابتة"], 0, "Informationssammlung, Probleme, Ziele, Maßnahmen, Durchführung, Evaluation.|جمع المعلومات والمشكلات والأهداف والإجراءات والتنفيذ والتقييم."],
      ["Qualität nach Donabedian umfasst …|الجودة عند دوناباديان تشمل …", ["Struktur-, Prozess-, Ergebnisqualität|جودة البنية والعملية والنتيجة", "Nur Ergebnisqualität|جودة النتيجة فقط", "Preis, Zeit, Ort|السعر والزمن والمكان", "Marketing|التسويق"], 0, "Drei Dimensionen guter Versorgung.|ثلاثة أبعاد للرعاية الجيدة."],
      ["Ein Fehlermeldesystem im Krankenhaus heißt …|نظام الإبلاغ عن الأخطاء في المستشفى …", ["CIRS|CIRS", "DRG|DRG", "NBA|NBA", "MD|MD"], 0, "Critical Incident Reporting System – lernen statt Schuld.|للتعلم لا للوم."],
      ["Die Krankenhausvergütung erfolgt überwiegend über …|يتم تمويل المستشفى بشكل رئيسي عبر …", ["Fallpauschalen (DRG)|مجموعات التشخيص DRG", "Tagessätze allein|أجور يومية فقط", "Spenden|تبرعات", "Mitgliedsbeiträge|اشتراكات"], 0, "Pauschale je Behandlungsfall.|مبلغ إجمالي لكل حالة."],
    ],
  },
];
