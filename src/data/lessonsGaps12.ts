/** Ergänzende Lektionen 12: Intensivpflege (Monitoring, Beatmung, Zugänge) und Wundversorgung vertieft. */
import type { Lesson } from "./lessons";

export const GAPS12_LESSONS: Lesson[] = 
[
 {
  "id": "g12-intensiv-monitoring",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Intensivpflege: Monitoring, Messfehler und Übernahme eines Patienten",
  "icon": "HeartPulse",
  "ar": "المراقبة في العناية المركزة سريرية وبالأجهزة ومخبرية وللعدوى. الجهاز يكمّل النظر إلى المريض ولا يغني عنه. لكل قياس مصادر خطأ (التشبع، الضغط، الحرارة، التنفس) ويجب ضبط حدود الإنذار فردياً وفحص كل إنذار عند المريض أولاً. وعند الاستلام نراجع الجهاز والمضخات والمداخل ومكان السرير.",
  "blocks": [
   {
    "h": "Was ist Monitoring?",
    "li": [
     "Monitoring ist die Summe aller Maßnahmen, mit denen Lebensfunktionen, Therapieziele und Nebenwirkungen über einen bestimmten Zeitraum überwacht werden.",
     "Ziel ist, gefährliche Veränderungen früh zu erkennen, bevor sie bedrohlich werden, und die Therapie rechtzeitig anzupassen.",
     "Invasive Überwachung (zum Beispiel arterielle Druckmessung) ist genauer, aber nicht ohne Risiko. Sie braucht strenge Hygiene und regelmäßige Kontrolle der Zugänge."
    ]
   },
   {
    "h": "Klinische Beobachtung am Patienten",
    "li": [
     "Haut: rosig, warm und trocken ist normal. Blässe, Blau-Färbung der Lippen (Zyanose), graue Haut, Gelbfärbung (Ikterus) oder kalte, feuchte Haut sind Warnzeichen.",
     "Bewusstsein und Motorik: wach, schläfrig, ansprechbar auf Reize, kooperativ oder nicht. Pupillen nach Größe, Form und Lichtreaktion beurteilen.",
     "Atmung: Frequenz, Tiefe, Zyanose, Atemgeräusche und Atemgeruch beobachten. Bekannte Atemtypen: Kussmaul (tief und regelmäßig, bei Übersäuerung), Cheyne-Stokes (an- und abschwellend mit Pausen), Biot (unregelmäßig mit Pausen) und Schnappatmung (bei Sterbenden).",
     "Atemgeruch kann Hinweise geben: Azeton bei entgleistem Zucker, Ammoniak oder Urin bei Nierenversagen."
    ]
   },
   {
    "h": "Messwerte richtig erheben",
    "li": [
     "Pulsoxymetrie: Normal sind bei Gesunden meist 96 bis 98 Prozent. Das Messorgan muss warm und gut durchblutet sein. Bei Kohlenmonoxidvergiftung ist der Wert unbrauchbar.",
     "Blutdruck: Manschette mit richtiger Breite, Arm auf Herzhöhe. Hängt der Arm tiefer, wird der Wert zu hoch gemessen, liegt er höher, zu niedrig. Zehn Zentimeter Höhenunterschied verändern den Wert um etwa 8 mmHg. Bei Verdacht beide Arme vergleichen.",
     "Temperatur: wenn möglich als Kerntemperatur messen (zum Beispiel rektal oder über einen Blasenkatheter mit Sensor). Bei Zentralisation sind Hautwerte irreführend.",
     "Alarmgrenzen werden individuell eingestellt und nie einfach ausgeschaltet. Ein Alarm ist immer erst am Patienten zu prüfen, nicht nur am Gerät."
    ]
   },
   {
    "h": "Übernahme eines Intensivpatienten: Checkliste",
    "li": [
     "Monitor: Alarme aktiv und Grenzen angepasst, Elektroden richtig, Kabel ohne Druckstellen, Manschettengröße passend, Druckbeutel wirksam.",
     "Pumpen: richtige Medikamente und Laufraten nach Anordnung, nichts muss noch vorbereitet werden.",
     "Zugänge und Verbindungen: Wie lange liegen sie, sind sie fixiert und richtig verbunden, wie sieht die Einstichstelle aus?",
     "Bettplatz: Absaugung betriebsbereit und in verschiedenen Größen vorhanden, Beatmungsbeutel mit Sauerstoff griffbereit, Klingel erreichbar."
    ]
   },
   {
    "h": "Beispiel: Alarm am Monitor",
    "li": [
     "Die Sättigung fällt auf 85 Prozent. Erster Blick geht zum Patienten: Atmet er? Ist die Haut blau? Sitzt der Sensor am kalten Finger? Dann Sensor wechseln, Atemwege prüfen, absaugen, Sauerstoff nach Anordnung, bei Verschlechterung sofort Arzt rufen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Vier Arten des Monitorings",
    "items": [
     {
      "t": "Klinisch",
      "s": "Haut, Bewusstsein, Pupillen, Atmung, Urinmenge",
      "icon": "Eye",
      "tone": "info"
     },
     {
      "t": "Apparativ",
      "s": "EKG, Blutdruck, Sättigung, Atemfrequenz, Temperatur",
      "icon": "HeartPulse",
      "tone": "ok"
     },
     {
      "t": "Labor",
      "s": "Elektrolyte, Blutbild, Gerinnung, Blutgase",
      "icon": "TestTube",
      "tone": "info"
     },
     {
      "t": "Infektion",
      "s": "Sekret, Blut, Abstriche, Entzündungswerte",
      "icon": "Microscope",
      "tone": "warn"
     }
    ],
    "note": "Das Gerät ergänzt den Blick auf den Menschen, es ersetzt ihn nicht."
   },
   {
    "kind": "table",
    "title": "Typische Messfehler und was man tut",
    "head": [
     "Messung",
     "Fehlerquelle",
     "Gegenmaßnahme"
    ],
    "rows": [
     [
      "Pulsoxymeter",
      "Kalte Finger, Zentralisation, Bewegung, Nagellack, Kohlenmonoxidvergiftung",
      "Messort wechseln und wärmen, Klinik beurteilen, bei Zweifel Blutgasanalyse"
     ],
     [
      "Blutdruckmanschette",
      "Falsche Breite, Arm nicht in Herzhöhe",
      "Breite etwa zwei Drittel des Oberarms, Arm auf Herzhöhe"
     ],
     [
      "EKG-Monitor",
      "Elektroden schlecht geklebt, Bewegung, Alarmgrenzen zu weit",
      "Haut vorbereiten, Elektroden prüfen, Grenzen individuell anpassen"
     ],
     [
      "Atemfrequenz am Monitor",
      "Misst nur Brustkorbbewegung",
      "Atmung zusätzlich selbst beobachten und zählen"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-beatmung-tubus-kanuele",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Beatmung in der Pflege: Tubus, Cuff, Tracheostoma, Kanülenwechsel, Extubation und Mundpflege",
  "icon": "Wind",
  "ar": "يتولى التنفس الاصطناعي جهد التنفس مؤقتاً عبر أنبوب رغامي أو قنية في فغرة العنق. على التمريض تثبيت الأنبوب ومراقبة ضغط الكفة (لا منخفضاً ولا مرتفعاً) والشفط والعناية بالفم وبالفغرة وتجهيز طقم الطوارئ. وبعد نزع الأنبوب يلزم تعاون المريض ومراقبة لصيقة.",
  "blocks": [
   {
    "h": "Wann braucht ein Mensch Beatmung?",
    "li": [
     "Wenn Lunge oder Kreislauf versagen, bei zentraler oder peripherer Atemlähmung, bei Bewusstlosigkeit oder schwerer Erschöpfung. Die Maschine übernimmt die Atemarbeit vorübergehend, bis der Körper sie wieder selbst leistet.",
     "Der Zugang zu den Atemwegen ist ein Endotrachealtubus (über Mund oder Nase) oder eine Trachealkanüle durch ein Tracheostoma am Hals."
    ]
   },
   {
    "h": "Tubus sichern",
    "li": [
     "Der Tubus wird mit einem Band fixiert, mindestens einmal täglich und bei Bedarf erneuert. Dabei hält eine zweite Person den Tubus fest, damit er nicht verrutscht.",
     "Orale Tuben wechseln regelmäßig die Position im Mundwinkel, nasale Tuben dürfen die Nasenöffnung nicht berühren. So vermeidet man Druckgeschwüre und Schleimhautnekrosen.",
     "Nach jeder Fixierung die Lunge abhören, um zu prüfen, ob beide Seiten belüftet werden. Zu tiefer Sitz kann nur eine Lunge belüften (einseitige Intubation)."
    ]
   },
   {
    "h": "Cuff und Aspirationsschutz",
    "li": [
     "Der Cuff dichtet die Luftröhre ab. Sein Druck wird regelmäßig mit einem Cuffdruckmesser kontrolliert, meist im Bereich von 20 bis 30 cmH2O nach dem Standard des Hauses.",
     "Zusätzlich schützen Oberkörperhochlagerung, Absaugen von Mund und Rachen, Ableiten von Magensekret und gute Mundpflege vor Aspiration und Beatmungspneumonie."
    ]
   },
   {
    "h": "Tracheostoma und Kanülenwechsel",
    "li": [
     "Die Stomapflege entspricht einer sterilen Wundpflege. Verband und Halteband werden meist täglich und bei Bedarf erneuert, Wundränder auf Rötung, Sekret und Druck kontrolliert.",
     "Der Kanülenwechsel erfolgt nach Herstellerangabe und Hausstandard, bei Bedarf auch früher. Davor gut absaugen, Sauerstoff geben, und alles für den Notfall bereithalten.",
     "Notfallset am Bett: Ersatzkanülen (gleiche Größe und eine Nummer kleiner), Spreizer, Absaugung mit Katheter, Beatmungsbeutel mit Maske und Sauerstoff, gutes Licht."
    ]
   },
   {
    "h": "Extubation",
    "li": [
     "Sie erfolgt, wenn die Grunderkrankung behandelt ist: stabile Kreislaufwerte, vorhandene Schutzreflexe, ausreichende Atmung und gute Blutgaswerte, wenn möglich mit Mitarbeit des Menschen.",
     "Pflege: Oberkörper hoch, gründlich absaugen, den Cuff entblocken und den Tubus ziehen. Danach zum Abhusten auffordern, Sauerstoff nach Anordnung und engmaschig beobachten. Material für eine erneute Intubation bleibt bereit.",
     "Mögliche Komplikationen sind Aspiration, Atemnot, Heiserkeit oder Stridor und Erschöpfung. Dann sofort melden."
    ]
   },
   {
    "h": "Beatmungssystem und Mundpflege",
    "li": [
     "Das Beatmungssystem wird nach Hausstandard gewechselt. Währenddessen wird per Beatmungsbeutel oder tragbarem Gerät beatmet. Danach Dichtigkeit und Funktion prüfen und den Wechsel dokumentieren.",
     "Mundpflege bei intubierten Menschen mindestens zweimal pro Schicht und bei Bedarf: erst Cuffdruck prüfen, Mund und Rachen absaugen, Zähne und Zahnfleisch reinigen, Mundhöhle spülen und absaugen, Lippen pflegen. Mund-Rachen und Luftröhre immer mit getrennten Kathetern absaugen.",
     "Bei Mundsoor, Borken oder starkem Speichelfluss gibt es zusätzliche Maßnahmen nach ärztlicher Anordnung. Zähne und Zahnfleisch sind bei Gerinnungshemmung besonders vorsichtig zu pflegen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Sicherheit am beatmeten Patienten: der Ablauf im Dienst",
    "steps": [
     {
      "t": "Sitz und Fixierung",
      "s": "Tubus oder Kanüle fest und frei von Druck, Lage kontrollieren",
      "icon": "Lock"
     },
     {
      "t": "Cuffdruck",
      "s": "Regelmäßig messen, meist etwa 20 bis 30 cmH2O nach Hausstandard",
      "icon": "Scale",
      "tone": "warn"
     },
     {
      "t": "Atemwege freihalten",
      "s": "Bei Bedarf absaugen, Mund und Rachen getrennt vom Tubus",
      "icon": "Wind"
     },
     {
      "t": "Mund- und Hautpflege",
      "s": "Mundpflege, Druckstellen an Nase, Mund und Stoma verhindern",
      "icon": "Smile"
     },
     {
      "t": "Notfallmaterial bereit",
      "s": "Beatmungsbeutel mit Sauerstoff, Absaugung, Ersatzkanülen",
      "icon": "Siren",
      "tone": "bad"
     }
    ]
   },
   {
    "kind": "compare",
    "title": "Cuffdruck: zu niedrig oder zu hoch",
    "cols": [
     {
      "t": "Zu niedrig",
      "icon": "TriangleAlert",
      "tone": "warn",
      "items": [
       "Sekret läuft am Cuff vorbei in die Lunge (Aspiration)",
       "Luft entweicht, die Beatmung ist undicht"
      ]
     },
     {
      "t": "Zu hoch",
      "icon": "TriangleAlert",
      "tone": "bad",
      "items": [
       "Schleimhaut wird schlecht durchblutet, Druckschäden und Nekrosen",
       "Später Verengung der Luftröhre möglich"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g12-zugaenge-intensiv",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Intensivpflege: ZVK, ZVD, arterielle Kanüle, Magensonde und PEG",
  "icon": "Syringe",
  "ar": "لكل مدخل في العناية المركزة نقاط عناية خاصة: القثطرة المركزية (ضماد معقم، خطر العدوى وانصمام الهواء)، قياس الضغط الوريدي المركزي (نفس الوضعية ونفس نقطة الصفر)، القنية الشريانية (لا حقن أدوية وفحص تروية اليد)، وأنبوب المعدة وPEG (فحص المكان والتثبيت). عند الحمى مع قثطرة نفكر بالعدوى ونبلّغ.",
  "blocks": [
   {
    "h": "Zentraler Venenkatheter (ZVK)",
    "li": [
     "Ein ZVK liegt in einer großen Vene nahe dem Herzen. Er dient für Medikamente, Ernährung, Blutentnahmen und die Messung des zentralen Venendrucks (ZVD).",
     "Pflege: Verbandwechsel steril, bei Durchfeuchtung oder Ablösung sofort. Einstichstelle auf Rötung, Schwellung, Schmerz und Sekret beobachten. Fixierung und Verbindungen prüfen, Zuspritzstellen vor jeder Benutzung desinfizieren.",
     "Gefahren: Infektion, Verschluss, Verrutschen, Luftembolie, Thrombose. Bei Fieber ohne erkennbare Ursache auch an den Katheter denken."
    ]
   },
   {
    "h": "ZVD messen",
    "li": [
     "Der ZVD zeigt den Druck im Bereich des rechten Vorhofs und gibt Hinweise auf Flüssigkeitshaushalt und Herzfunktion. Gemessen wird in Rückenlage mit dem Nullpunkt auf Höhe des rechten Vorhofs, am besten am Ende der Ausatmung.",
     "Als grober Anhalt gelten Werte um 5 bis 10 cmH2O, aber die Zielwerte legt der Arzt fest. Wichtig ist, immer in gleicher Lage und mit gleichem Nullpunkt zu messen, damit Verläufe vergleichbar sind."
    ]
   },
   {
    "h": "Arterielle Kanüle und Druckmessung",
    "li": [
     "Sie liefert Schlag für Schlag den Blutdruck und erlaubt Blutentnahmen. Das System steht unter Druck und wird mit Spüllösung offengehalten. Der Druckaufnehmer wird auf Herzhöhe gehalten und regelmäßig auf Null abgeglichen.",
     "Nie Medikamente in die arterielle Leitung spritzen. Hand und Finger auf Farbe, Wärme und Beweglichkeit prüfen. Bei einer Ablösung droht eine starke Blutung, deshalb muss die Leitung gut sichtbar und fixiert sein."
    ]
   },
   {
    "h": "Periphere Zugänge, Magensonde und PEG",
    "li": [
     "Periphere Venenkanülen täglich beurteilen. Bei Rötung, Schwellung, Schmerz oder fühlbarem Strang an der Vene entfernen und melden (Phlebitis).",
     "Magensonde: Lage vor jeder Nutzung kontrollieren, nach den Regeln des Hauses (zum Beispiel pH-Test des Aspirats oder Röntgenkontrolle nach dem Legen). Fixierung täglich prüfen und Druckstellen an der Nase vermeiden.",
     "PEG-Verband: Haut um die Sonde sauber und trocken halten, Sonde täglich drehen und etwas bewegen, auf Rötung, Sekret und Schmerz achten, Halteplatte nicht zu fest."
    ]
   },
   {
    "h": "Beispiel: Fieber bei liegendem ZVK",
    "li": [
     "Ein Patient mit ZVK bekommt Fieber und Schüttelfrost. Die Einstichstelle ist leicht gerötet. Maßnahmen: sofort Arzt informieren, Vitalwerte messen, Verbandwechsel steril, Blutkulturen nach Anordnung entnehmen, Katheter nur nach ärztlicher Entscheidung entfernen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Zugänge auf der Intensivstation im Vergleich",
    "head": [
     "Zugang",
     "Wofür?",
     "Besonders wichtig"
    ],
    "rows": [
     [
      "Periphere Venenkanüle",
      "Infusionen, Medikamente",
      "Einstichstelle täglich beurteilen, Phlebitis erkennen"
     ],
     [
      "Zentraler Venenkatheter (ZVK)",
      "Konzentrierte Medikamente, Ernährung, ZVD",
      "Steriler Verbandwechsel, Luftembolie und Infektion verhindern"
     ],
     [
      "Arterielle Kanüle",
      "Dauerhafte Blutdruckmessung, Blutentnahme",
      "Nie Medikamente spritzen, Durchblutung der Hand prüfen"
     ],
     [
      "Magensonde / PEG",
      "Ernährung, Ableiten von Magensaft",
      "Lage kontrollieren, Verband und Fixierung prüfen"
     ]
    ]
   },
   {
    "kind": "flow",
    "title": "ZVK-Entfernung ohne Luftembolie",
    "steps": [
     {
      "t": "Vorbereiten",
      "s": "Anordnung prüfen, Material bereit, Infusionen stoppen",
      "icon": "ScrollText"
     },
     {
      "t": "Lagern",
      "s": "Flach oder Kopf tief, damit kein Sog in der Vene entsteht",
      "icon": "User"
     },
     {
      "t": "Ziehen",
      "s": "Zügig und am Ende der Ausatmung oder bei angehaltenem Atem",
      "icon": "Wind",
      "tone": "warn"
     },
     {
      "t": "Abdichten",
      "s": "Sofort fest abdrücken und luftdicht verbinden, danach beobachten",
      "icon": "ShieldCheck",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g12-sauerstoff-bga-bilanz",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Sauerstoffgabe, Pulsoxymeter, Blutgasanalyse und Bilanzierung",
  "icon": "Gauge",
  "ar": "الأكسجين دواء يُعطى بأمر الطبيب مع قيمة مستهدفة للتشبع، عبر نظارة أنفية أو قناع أو قناع بخزان، وبحذر عند مرضى الانسداد الرئوي المزمن. يقيس مقياس التشبع نسبة الهيموغلوبين المؤكسج فقط. تحليل غازات الدم يعطي pH والغازات. وحساب الميزان هو الداخل ناقص الخارج لكل نوبة ولكل 24 ساعة.",
  "blocks": [
   {
    "h": "Sauerstoff geben",
    "li": [
     "Sauerstoff ist ein Arzneimittel und wird nach Anordnung gegeben, mit Zielwert für die Sättigung. Je nach Bedarf über Nasenbrille, Maske oder Maske mit Reservoir.",
     "Bei Menschen mit COPD kann zu viel Sauerstoff gefährlich sein, weil der Atemantrieb nachlässt. Deshalb nur nach Anordnung und mit Kontrolle der Atmung.",
     "Sicherheit: Keine offene Flamme und kein Rauchen, keine fetthaltigen Salben im Gesicht. Atemluft anfeuchten, besonders bei längerer Gabe. Haut an Nase und Ohren auf Druckstellen prüfen."
    ]
   },
   {
    "h": "Pulsoxymeter richtig verwenden",
    "li": [
     "Er misst, wie viel Prozent des roten Blutfarbstoffs mit Sauerstoff beladen ist. Er sagt nichts über Atemfrequenz, Kohlendioxid oder Atemarbeit.",
     "Der Sensor sitzt an einem warmen, gut durchbluteten Finger oder Ohrläppchen, ohne Nagellack. Den Messort regelmäßig wechseln, um Druckstellen zu vermeiden."
    ]
   },
   {
    "h": "Blutgasanalyse (BGA)",
    "li": [
     "Die BGA misst Säure-Basen-Haushalt und Gase im Blut, meist aus arteriellem Blut. Richtwerte: pH 7,35 bis 7,45, PaCO2 35 bis 45 mmHg, Bikarbonat etwa 22 bis 26 mmol/l, PaO2 etwa 70 bis 100 mmHg.",
     "Pflege: Probe luftblasenfrei und rasch zum Gerät bringen, Entnahmestelle danach gut abdrücken, Ergebnis dem Arzt melden, wenn die Werte auffällig sind."
    ]
   },
   {
    "h": "Bilanzieren",
    "li": [
     "Bilanzieren heißt, alle Flüssigkeiten, die in den Körper gehen (Einfuhr), und alle, die ihn verlassen (Ausfuhr), zu erfassen und zu vergleichen. Auf der Intensivstation geschieht das meist schichtweise und über 24 Stunden.",
     "Zur Ausfuhr zählen Urin, Stuhl, Drainagen, Erbrechen und abgeleiteter Magensaft. Dazu kommen unsichtbare Verluste über Atmung und Haut, die bei Fieber und Schwitzen steigen.",
     "Beispiel: Einfuhr 2400 ml, Ausfuhr 1900 ml. Die Bilanz ist +500 ml. Ein Plus über mehrere Tage kann auf Wassereinlagerung hinweisen, ein starkes Minus auf Austrocknung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "table",
    "title": "Sauerstoffgabe im Überblick",
    "head": [
     "System",
     "Übliche Menge",
     "Hinweis"
    ],
    "rows": [
     [
      "Nasenbrille",
      "etwa 1 bis 6 l/min",
      "Gut verträglich, Nasenschleimhaut beobachten"
     ],
     [
      "Einfache Maske",
      "etwa 5 bis 10 l/min",
      "Mindestfluss beachten, sonst wird Atemluft rückgeatmet"
     ],
     [
      "Maske mit Reservoir",
      "etwa 10 bis 15 l/min",
      "Höhere Sauerstoffkonzentration, Beutel muss gefüllt bleiben"
     ]
    ],
    "note": "Die Menge richtet sich immer nach ärztlicher Anordnung und Zielsättigung."
   },
   {
    "kind": "bar",
    "title": "Bilanz: Einfuhr und Ausfuhr",
    "parts": [
     {
      "t": "Einfuhr",
      "s": "Trinken, Infusionen, Sondenkost, Medikamente in Lösung",
      "w": 3,
      "tone": "info"
     },
     {
      "t": "Ausfuhr",
      "s": "Urin, Stuhl, Drainagen, Erbrechen, Magensaft",
      "w": 3,
      "tone": "warn"
     },
     {
      "t": "Unsichtbar",
      "s": "Atmung, Schwitzen, Fieber erhöhen den Verlust",
      "w": 2,
      "tone": "bad"
     }
    ],
    "note": "Die Bilanz wird je Schicht und pro 24 Stunden gezogen. Einfuhr minus Ausfuhr ergibt die Bilanz."
   }
  ]
 },
 {
  "id": "g12-wundphasen-wundauflagen",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Wundheilungsphasen, feuchte Wundbehandlung und Wundauflagen",
  "icon": "Layers",
  "ar": "يمر الالتئام بثلاث مراحل: التنظيف ثم التحبّب ثم التظهّر، ولكل مرحلة هدف وضماد مناسب. المعالجة الرطبة أفضل غالباً من الجفاف. نختار الضماد حسب المرحلة والإفراز والعدوى، ونبدّله بلطف ونوثق المظهر، ونُعلم الطبيب عند علامات العدوى.",
  "blocks": [
   {
    "h": "Warum Phasen wichtig sind",
    "li": [
     "Eine Wunde heilt nicht gleichmäßig. Je nach Phase braucht sie etwas anderes. Wer die Phase erkennt, wählt die passende Auflage und den richtigen Wechselrhythmus."
    ]
   },
   {
    "h": "Feuchte Wundbehandlung",
    "li": [
     "Wunden heilen in einem feuchten, aber nicht nassen Milieu meist besser und schneller als an trockener Luft. Ein Schorf bremst die Heilung, weil neue Haut erst darunter durchwachsen muss.",
     "Traditionelle Verbände wie Gaze saugen auf, trocknen aus und können beim Wechsel Gewebe abreißen. Moderne feuchte Auflagen schützen das neue Gewebe und lassen sich oft schmerzärmer entfernen."
    ]
   },
   {
    "h": "Wundauflagen auswählen",
    "li": [
     "Die Auswahl richtet sich nach Phase, Sekretmenge, Infektionszeichen und Wundrand. Es gibt zum Beispiel saugstarke Schaumstoffe für viel Sekret, Gele zum Aufweichen von Belägen, Alginate für stark sezernierende Wunden und dünne Folien für oberflächliche, trockene Wunden.",
     "Eine ideale Auflage hält das Milieu feucht, nimmt überschüssiges Sekret auf, schützt vor Keimen, ist atraumatisch beim Wechsel und lässt sich gut anpassen. Die Wechselintervalle richten sich nach Herstellerangabe und Hausstandard."
    ]
   },
   {
    "h": "Verbandwechsel richtig durchführen",
    "li": [
     "Vorbereiten: Hände desinfizieren, Material richten, Schmerzen vorher erfragen und ggf. nach Anordnung ein Schmerzmittel ermöglichen. Alten Verband vorsichtig lösen, bei Verkleben mit Kochsalz anfeuchten.",
     "Beurteilen und dokumentieren: Größe, Tiefe, Wundgrund, Rand, Sekret, Geruch, Schmerz, Infektionszeichen. Fotodokumentation nur mit Einwilligung. Bei Rötung, Überwärmung, Eiter, Fieber oder Geruch den Arzt informieren."
    ]
   },
   {
    "h": "Beispiel: Wunde mit Belag",
    "li": [
     "Eine Wunde ist gelblich belegt und nässt stark. Das spricht für die Reinigungsphase. Ziel: Belag lösen und Sekret aufnehmen, Wundrand schützen, Verband bei Durchfeuchtung früher wechseln. Zeigt sich Rötung und Geruch, ärztlich abklären lassen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Die drei Phasen der Wundheilung",
    "steps": [
     {
      "t": "Reinigungsphase",
      "s": "Blutung stoppt, Wunde wird von Belägen und Keimen gereinigt, Sekret ist reichlich",
      "icon": "Droplets",
      "tone": "warn"
     },
     {
      "t": "Granulationsphase",
      "s": "Neues rotes, körniges Gewebe füllt die Wunde auf, die Oberfläche wirkt wie eine Himbeere",
      "icon": "Sprout",
      "tone": "ok"
     },
     {
      "t": "Epithelisierung",
      "s": "Von den Rändern wächst rosa Haut über das Gewebe, die Narbe reift",
      "icon": "ShieldCheck",
      "tone": "info"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Ziele der Wundversorgung je Phase",
    "head": [
     "Phase",
     "Ziel",
     "Auflage soll"
    ],
    "rows": [
     [
      "Reinigung",
      "Belag lösen, Sekret aufnehmen, Infektion vermeiden",
      "Sekret binden und Beläge aufweichen"
     ],
     [
      "Granulation",
      "Gewebe schützen, feuchtes Milieu halten",
      "Feucht halten, nicht verkleben"
     ],
     [
      "Epithelisierung",
      "Neue Haut schonen",
      "Sehr schonend, ohne Verkleben"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-diabetischer-fuss",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Diabetisches Fußsyndrom: Ursachen, Fußpflege und Entlastung",
  "icon": "Footprints",
  "ar": "تنتج القدم السكرية عن اعتلال الأعصاب واضطراب التروية مع إصابة صغيرة تُهمل. نفحص القدمين يومياً ونغسلهما بماء فاتر ونجففهما ونرطّبهما ولا نمشي حافين، ونفرّغ الضغط عن أي جرح، ونتجه للطبيب فوراً عند احمرار أو صديد أو رائحة أو حمى.",
  "blocks": [
   {
    "h": "Was ist das diabetische Fußsyndrom?",
    "li": [
     "Bei langjährigem Diabetes schädigt der hohe Zucker Nerven und Gefäße. Der Fuß spürt Schmerzen, Hitze und Druck schlechter, die Haut wird trocken und rissig, und Wunden heilen schlecht.",
     "Dadurch bleiben kleine Verletzungen unbemerkt. Schmerzfreiheit bedeutet hier nicht Unbedenklichkeit, sondern ist ein Warnzeichen."
    ]
   },
   {
    "h": "Fußinspektion und Pflege",
    "li": [
     "Täglich beide Füße ansehen, auch zwischen den Zehen und an der Sohle (bei Bedarf mit Spiegel). Auf Rötung, Blasen, Risse, Druckstellen, Hornhaut, Nagelveränderungen und Verfärbungen achten.",
     "Füße lauwarm waschen, gut abtrocknen, besonders zwischen den Zehen. Wassertemperatur mit dem Ellbogen oder Thermometer prüfen, nicht mit dem Fuß. Eincremen, aber nicht zwischen die Zehen.",
     "Nicht barfuß gehen, keine Wärmflaschen oder Heizkissen am Fuß, keine Hühneraugenpflaster oder scharfen Instrumente. Nägel gerade und vorsichtig feilen, Hornhaut nur durch Fachpersonal entfernen lassen."
    ]
   },
   {
    "h": "Schuhe, Entlastung und Kontrolle",
    "li": [
     "Schuhe müssen gut passen, weit genug sein und innen glatt. Nie ohne Strümpfe tragen und vor dem Anziehen in den Schuh fassen, um Fremdkörper zu finden. Bei Druckstellen helfen spezielle Einlagen oder Schuhe vom Fachmann.",
     "Eine Wunde am Fuß braucht Druckentlastung, sonst heilt sie nicht. Entlastung bedeutet, dass die betroffene Stelle beim Gehen und Stehen möglichst wenig belastet wird, zum Beispiel durch Spezialschuh oder Entlastungsschiene nach Anordnung."
    ]
   },
   {
    "h": "Wann sofort zum Arzt?",
    "li": [
     "Bei Rötung, Schwellung, Überwärmung, Eiter, Geruch, neuer Wunde, Schmerzen oder Fieber. Bei Diabetes kann eine Infektion rasch gefährlich werden, deshalb nicht abwarten.",
     "Beispiel: Ein Patient bemerkt eine Blase an der Ferse und sagt, es tue nicht weh. Richtig ist: Blase nicht aufstechen, Fuß entlasten, Arzt oder Wundexperten informieren und die Stelle täglich kontrollieren."
    ]
   },
   {
    "h": "Mitarbeit stärken",
    "li": [
     "Der Erfolg hängt stark davon ab, ob der Mensch die Regeln im Alltag umsetzen kann. Statt Vorwürfen helfen einfache Erklärungen, gemeinsame Ziele und das Einbeziehen von Angehörigen. Gut ist, wenn die Person versteht, warum die Regel wichtig ist."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Warum entsteht das diabetische Fußsyndrom?",
    "items": [
     {
      "t": "Polyneuropathie",
      "s": "Schmerz und Druck werden kaum gespürt",
      "icon": "Zap",
      "tone": "warn"
     },
     {
      "t": "Durchblutungsstörung",
      "s": "Wunden heilen schlecht (pAVK)",
      "icon": "HeartPulse",
      "tone": "bad"
     },
     {
      "t": "Kleine Verletzung",
      "s": "Blase, Druckstelle oder Nagelpilz wird unbemerkt zur Wunde",
      "icon": "TriangleAlert",
      "tone": "warn"
     },
     {
      "t": "Infektion",
      "s": "Kann sich rasch in die Tiefe ausbreiten",
      "icon": "Bug",
      "tone": "bad"
     }
    ]
   },
   {
    "kind": "table",
    "title": "Schweregrade nach Wagner",
    "head": [
     "Grad",
     "Befund"
    ],
    "rows": [
     [
      "0",
      "Kein Geschwür, aber Risikofuß"
     ],
     [
      "1",
      "Oberflächliches Geschwür"
     ],
     [
      "2",
      "Tiefes Geschwür bis zu Sehnen oder Kapsel"
     ],
     [
      "3",
      "Tiefes Geschwür mit Abszess oder Knochenbeteiligung"
     ],
     [
      "4 und 5",
      "Absterbendes Gewebe an Teilen oder am ganzen Fuß"
     ]
    ]
   }
  ]
 },
 {
  "id": "g12-kinder-krankenhaus-charta",
  "group": "ausbildung",
  "area": "pflege",
  "title": "Kinder im Krankenhaus: Rechte und kindgerechte Pflege (EACH-Charta)",
  "icon": "Baby",
  "ar": "يجمع الميثاق الأوروبي حقوق الطفل المريض: لا إدخال إلا عند الضرورة، وجود الأهل في كل وقت مع إمكانية المبيت، معلومات تناسب العمر، مشاركة في القرار، رعاية مع أطفال وبيئة للعب والتعلم، وطاقم مدرّب. ليس قانوناً لكنه معيار مهني.",
  "blocks": [
   {
    "h": "Wozu gibt es die Charta?",
    "li": [
     "Die europäische Charta für Kinder im Krankenhaus (EACH-Charta) fasst Rechte zusammen, die kranke Kinder und ihre Familien haben. Sie ist kein Gesetz, dient aber als fachlicher Maßstab für kindgerechte Pflege."
    ]
   },
   {
    "h": "Die zentralen Aussagen",
    "li": [
     "Ein Kind soll nur dann stationär aufgenommen werden, wenn die nötige Behandlung zu Hause oder ambulant nicht möglich ist.",
     "Eltern oder eine Bezugsperson dürfen jederzeit beim Kind sein, und die Klinik soll ihnen eine Übernachtung (Rooming-in) und Teilnahme an der Pflege ermöglichen.",
     "Kinder und Eltern werden verständlich informiert und wirken an Entscheidungen mit. Das Kind wird vor unnötigen Untersuchungen und Behandlungen geschützt.",
     "Kinder werden gemeinsam mit Kindern ähnlichen Alters betreut, nicht auf Erwachsenenstationen, und haben Möglichkeiten zum Spielen und Lernen.",
     "Das Personal ist für die Bedürfnisse von Kindern und Familien geschult, die Betreuung erfolgt möglichst durch ein festes Team, und die Privatsphäre wird respektiert."
    ]
   },
   {
    "h": "Praxis in der Pflege",
    "li": [
     "Vor Eingriffen kindgerecht erklären, zum Beispiel mit Puppen, Bildern oder Spiel. Eltern bei Schmerz, Angst und Trennung einbeziehen und bei Maßnahmen wie Blutentnahme möglichst bei ihnen bleiben lassen.",
     "Beispiel: Ein Vierjähriger weint vor der Blutentnahme. Richtig ist, ehrlich und einfach zu sagen, dass es kurz piekst, die Mutter dabeizulassen, Ablenkung zu bieten und nach dem Eingriff zu loben."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Die wichtigsten Rechte kranker Kinder",
    "items": [
     {
      "t": "Eltern dabei",
      "s": "Eltern oder eine Vertrauensperson dürfen jederzeit bleiben",
      "icon": "Users",
      "tone": "ok"
     },
     {
      "t": "Verständlich informiert",
      "s": "Erklärung passend zu Alter und Verständnis",
      "icon": "MessageCircle",
      "tone": "info"
     },
     {
      "t": "Mitbestimmen",
      "s": "Kind und Eltern entscheiden mit, unnötige Eingriffe vermeiden",
      "icon": "ShieldCheck",
      "tone": "ok"
     },
     {
      "t": "Kindgerechte Umgebung",
      "s": "Spielen, Lernen, Betreuung unter Kindern",
      "icon": "Baby",
      "tone": "info"
     }
    ]
   }
  ]
 }
];
