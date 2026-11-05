/** Ergänzende Lektionen 6: Kommunikation und Beziehungsgestaltung (Fragetechniken, Gesprächsformen, Kanäle, Lebensphasen, Einschränkungen, Axiome, Zuhören, Beziehung). */
import type { Lesson } from "./lessons";

export const GAPS6_LESSONS: Lesson[] = [
 {
  "id": "g6-fragetechniken",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Fragetechniken im Gespräch",
  "icon": "MessageCircle",
  "ar": "نوع السؤال يحدد نوع الجواب. في التمريض نختار السؤال المفتوح لجمع معلومات جديدة، والمغلق لمعلومة محددة، ونتجنب الأسئلة الإيحائية لأنها تدفع المريض إلى جواب معيّن.",
  "blocks": [
   {
    "h": "Vier Frageformen",
    "li": [
     "Offene Frage (W-Frage): Wie, was, wann, wo? Sie lädt zum freien, ausführlichen Antworten ein.",
     "Geschlossene Frage: Antwort nur Ja oder Nein, sinnvoll für gezielte Informationen oder Entscheidungen.",
     "Alternativfrage: Es gibt wenige Antworten zur Auswahl, zum Beispiel Kaffee oder Tee?",
     "Suggestivfrage: Sie legt die gewünschte Antwort nahe, zum Beispiel Geht es Ihnen heute nicht schon viel besser?"
    ]
   },
   {
    "h": "Vor- und Nachteile",
    "li": [
     "Offen: viele neue Informationen, gut bei schwierigen Themen; Gefahr, vom Thema abzukommen.",
     "Geschlossen: schnelle, klare Antwort; wenig Information und wirkt schnell wie ein Verhör oder Bevormundung.",
     "Alternativ: hilft, wenn offene Fragen zu wenig bringen, zum Beispiel Schmerz vor, während oder nach dem Essen?",
     "Suggestiv: verfälscht die Antwort und sollte meist vermieden werden."
    ]
   },
   {
    "h": "Praxis",
    "li": [
     "Gespräch mit offener Frage beginnen, danach mit geschlossenen Fragen präzisieren.",
     "Bei der Anamnese und beim Schmerzassessment kombiniert man alle Formen bewusst.",
     "Eine Frage nach der anderen stellen und die Antwort abwarten."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Frageformen im Überblick",
    "items": [
     {
      "t": "Offen",
      "s": "Wie geht es Ihnen?",
      "icon": "MessageCircle",
      "tone": "ok"
     },
     {
      "t": "Geschlossen",
      "s": "Haben Sie Schmerzen?",
      "icon": "Hand",
      "tone": "info"
     },
     {
      "t": "Alternativ",
      "s": "Kaffee oder Tee?",
      "icon": "Shuffle",
      "tone": "info"
     },
     {
      "t": "Suggestiv",
      "s": "Geht es nicht besser?",
      "icon": "TriangleAlert",
      "tone": "bad"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-gespraechsformen",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Gesprächsformen, Gesprächsförderer und Gesprächsregeln",
  "icon": "Users",
  "ar": "هناك أشكال عامة للحوار (حوار، حديث جانبي، نقاش) وأشكال مهنية في التمريض (إعلام، استشارة، إرشاد، شكوى ونقد). تنجح المحادثة بسلوكيات معينة وتفشل بسلوكيات أخرى.",
  "blocks": [
   {
    "h": "Allgemeine Gesprächsformen",
    "li": [
     "Dialog: Rede und Gegenrede zwischen zwei oder mehr Personen.",
     "Smalltalk: Alltägliches wie Wetter oder Essen; baut Kontakt und Vertrauen auf.",
     "Diskussion: Austausch unterschiedlicher Meinungen, bei gegenseitigem Respekt."
    ]
   },
   {
    "h": "Berufliche Gesprächsformen",
    "li": [
     "Informationsgespräch, Beratungsgespräch, Anleitungsgespräch.",
     "Beschwerde- und Kritikgespräch: sachlich bleiben, zuhören, Lösungen suchen."
    ]
   },
   {
    "h": "Förderer und Hemmer",
    "li": [
     "Fördern: Zuhören, Ich-Botschaften, Paraphrasieren, Rückfragen, Feedback, Respekt.",
     "Hemmen: Unterbrechen, Du-Botschaften, eigene Erfahrungen in den Vordergrund stellen, Bewerten, Unkonzentriertheit."
    ]
   },
   {
    "h": "Wichtige Gesprächsregeln",
    "li": [
     "Ausreden lassen, anschauen, auf den anderen eingehen, ruhig und freundlich bleiben.",
     "Nicht abwerten und nichts unterstellen; konkrete Situationen ansprechen, nicht verallgemeinern.",
     "Gefühle und Bedürfnisse als Ich-Botschaft sagen; offene Fragen statt Suggestivfragen.",
     "Konflikte akzeptieren und selbst klären; Lob und Anerkennung äußern."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "compare",
    "title": "Fördern oder hemmen?",
    "cols": [
     {
      "t": "Gesprächsförderer",
      "items": [
       "Zuhören",
       "Ich-Botschaft",
       "Feedback"
      ],
      "icon": "ThumbsUp",
      "tone": "ok"
     },
     {
      "t": "Gesprächshemmer",
      "items": [
       "Unterbrechen",
       "Du-Botschaft",
       "Bewerten"
      ],
      "icon": "TriangleAlert",
      "tone": "bad"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-kanaele",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Verbal, paraverbal und nonverbal: Kanäle und Störungen",
  "icon": "Megaphone",
  "ar": "نتواصل عبر ثلاث قنوات: الكلمات (لفظي)، وطريقة قولها كالنبرة والسرعة (شبه لفظي)، ولغة الجسد (غير لفظي). عندما تتعارض القنوات يصدّق المتلقي غالباً لغة الجسد والنبرة.",
  "blocks": [
   {
    "h": "Drei Kanäle",
    "li": [
     "Verbal: gesprochene oder geschriebene Worte, wird bewusst wahrgenommen.",
     "Paraverbal: das Wie, also Betonung, Lautstärke, Tempo und Pausen.",
     "Nonverbal: Mimik, Gestik, Haltung, Blick, Nähe und Distanz; oft unbewusst."
    ]
   },
   {
    "h": "Gewichtung der Kanäle",
    "li": [
     "Bei widersprüchlichen Botschaften wirken Körpersprache und Stimme stärker als der Inhalt.",
     "Die oft genannten Prozentwerte (7, 38, 55) gelten nur für Gefühlsbotschaften, nicht für jedes Gespräch.",
     "Nonverbale Signale werden unterschiedlich gedeutet, auch kulturell."
    ]
   },
   {
    "h": "Störungen",
    "li": [
     "Lärm und Geräusche, Sprachbarrieren, unterschiedliche Voraussetzungen.",
     "Mehrfachübertragung (Stille Post) verfälscht Informationen, daher wichtige Dinge schriftlich weitergeben.",
     "Doppeldeutigkeit vermeiden und mit Rückfragen sichern, dass alles verstanden wurde.",
     "Positive Formulierung hilft: lösungsorientiert sagen, was möglich ist."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Drei Kanäle der Kommunikation",
    "items": [
     {
      "t": "Verbal",
      "s": "Worte, Inhalt",
      "icon": "MessageCircle",
      "tone": "info"
     },
     {
      "t": "Paraverbal",
      "s": "Stimme, Tempo, Betonung",
      "icon": "Mic",
      "tone": "warn"
     },
     {
      "t": "Nonverbal",
      "s": "Mimik, Gestik, Haltung",
      "icon": "Hand",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-altersgruppen",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Kommunikation in verschiedenen Lebensphasen und im Team",
  "icon": "Baby",
  "ar": "يتغير أسلوب التواصل بحسب العمر: ملاحظة إشارات الرضيع، وكسب ثقة الطفل ببطء، واحترام خصوصية المراهق، والصبر مع كبار السن، والوضوح والاحترام مع الزملاء والمسؤولين.",
  "blocks": [
   {
    "h": "Kinder und Jugendliche",
    "li": [
     "Neugeborene und Säuglinge: Signale deuten, Berührung und Blickkontakt, Eltern als Experten einbeziehen.",
     "Kleinkinder und Schulkinder: Zeit für Vertrauen, kindgerechte Sprache, vertraute Spielsachen, sachlich mit den Eltern sprechen.",
     "Jugendliche: sensibel, Privatsphäre achten, klare Absprachen und Grenzen, Ich-Botschaften."
    ]
   },
   {
    "h": "Erwachsene und ältere Menschen",
    "li": [
     "Erwachsene: auf Augenhöhe informieren und in Entscheidungen einbeziehen.",
     "Ältere Menschen: Geduld, Sinnesstörungen beachten, Erinnerungen und Biografie nutzen."
    ]
   },
   {
    "h": "Team und Vorgesetzte",
    "li": [
     "Übergabe, Visite, Dienstplan und Teamgespräche: sachlich, vollständig und respektvoll.",
     "Absprachen festhalten, Bedürfnisse in Ich-Form äußern, offen für Feedback sein.",
     "Nähe und Distanz wahren, Informationen nur weitergeben, wenn sie nötig sind."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Kommunikation nach Lebensphase",
    "steps": [
     {
      "t": "Säugling",
      "s": "Berührung, Blick",
      "icon": "Baby",
      "tone": "info"
     },
     {
      "t": "Kind",
      "s": "Zeit, Spielzeug",
      "icon": "Smile",
      "tone": "ok"
     },
     {
      "t": "Jugendlicher",
      "s": "Privatsphäre, Grenzen",
      "icon": "User",
      "tone": "warn"
     },
     {
      "t": "Älterer",
      "s": "Geduld, Biografie",
      "icon": "Hourglass",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-einschraenkung",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Kommunikation bei Hör-, Seh- und Sprachstörungen",
  "icon": "Ear",
  "ar": "عندما تكون إحدى القنوات ضعيفة نعوّض بقنوات أخرى: مع ضعاف السمع نستخدم النظر والإيماءات، ومع ضعاف البصر نصف ونخبر قبل اللمس، ومع اضطراب الكلام نمنح الوقت ونستخدم الصور.",
  "blocks": [
   {
    "h": "Schwerhörigkeit",
    "li": [
     "Ruhige Umgebung wählen und Hörgerät kontrollieren.",
     "Blickkontakt halten, Mimik und Gestik einsetzen.",
     "Normal laut, aber langsamer, tiefer und deutlicher sprechen, nicht schreien."
    ]
   },
   {
    "h": "Sehbeeinträchtigung",
    "li": [
     "Betreten und Verlassen des Raumes ankündigen, sich mit Namen vorstellen.",
     "Vor jeder Berührung informieren und Handlungen beschreiben.",
     "Orientierung im Raum erklären und Dinge am gleichen Platz lassen."
    ]
   },
   {
    "h": "Sprachstörung",
    "li": [
     "Zeit und Ruhe geben, Sätze nicht vorschnell beenden.",
     "Verbale und nonverbale Signale genau beachten, Bilder oder Kommunikationstafeln nutzen.",
     "Keine Kindersprache und keine abgehackten Sätze: Erwachsene werden als Erwachsene angesprochen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Hilfen je nach Einschränkung",
    "items": [
     {
      "t": "Hören",
      "s": "Blick, deutlich, ruhig",
      "icon": "Ear",
      "tone": "info"
     },
     {
      "t": "Sehen",
      "s": "ankündigen, beschreiben",
      "icon": "Eye",
      "tone": "info"
     },
     {
      "t": "Sprechen",
      "s": "Zeit, Bilder",
      "icon": "MessageCircle",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-watzlawick",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Die fünf Axiome nach Watzlawick im Pflegealltag",
  "icon": "RefreshCw",
  "ar": "تصف المسلّمات الخمس قواعد أساسية في كل تواصل بين البشر. فهمها يساعد الممرض على قراءة سوء الفهم والتوترات مع المرضى والزملاء.",
  "blocks": [
   {
    "h": "Die fünf Axiome",
    "li": [
     "1. Man kann nicht nicht kommunizieren: Auch Schweigen und Wegschauen sind Verhalten und Botschaft.",
     "2. Jede Mitteilung hat einen Inhalts- und einen Beziehungsaspekt; der Beziehungsaspekt bestimmt, wie der Inhalt verstanden wird.",
     "3. Kommunikation ist Ursache und Wirkung in einem Kreislauf: Jeder beeinflusst den anderen, die Satzzeichen setzt jeder anders.",
     "4. Kommunikation läuft digital (Worte) und analog (Mimik, Tonfall, Haltung) ab.",
     "5. Beziehungen sind symmetrisch (auf Augenhöhe) oder komplementär (über- und untergeordnet)."
    ]
   },
   {
    "h": "Beispiele aus der Pflege",
    "li": [
     "Eine Pflegekraft betritt wortlos das Zimmer und sieht auf den Monitor: Der Patient fühlt sich übersehen.",
     "Ein Lob in belehrendem Ton kann beim Kollegen als Bevormundung ankommen (Beziehungsebene).",
     "Fordernde Patienten und genervte Pflegende können sich gegenseitig verstärken (Kreislauf)."
    ]
   },
   {
    "h": "Symmetrisch und komplementär",
    "li": [
     "Komplementär ist nicht grundsätzlich schlecht, zum Beispiel bei Anleitung oder Notfall.",
     "Es kann aber Hilflosigkeit auslösen, wenn jemand dauerhaft in der unterlegenen Rolle bleibt.",
     "Metakommunikation (über das Gespräch sprechen) löst Beziehungsprobleme, am besten in ruhigem Rahmen."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "cycle",
    "title": "Ursache und Wirkung im Kreislauf",
    "steps": [
     {
      "t": "Patient fordert",
      "s": "wiederholt Klingeln",
      "icon": "Phone",
      "tone": "warn"
     },
     {
      "t": "Pflegekraft genervt",
      "s": "kurz angebunden",
      "icon": "Frown",
      "tone": "bad"
     },
     {
      "t": "Patient fühlt sich übergangen",
      "s": "fordert mehr",
      "icon": "TrendingUp",
      "tone": "warn"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-zuhoeren",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Aktives Zuhören und personenzentrierte Haltung nach Rogers",
  "icon": "Ear",
  "ar": "تقوم المحادثة الجيدة عند روجرز على ثلاث صفات: التعاطف وفهم الآخر من منظوره، والصدق والانسجام مع الذات، والتقدير غير المشروط. الإصغاء النشط يضع نفسك جانباً ويُبقي المريض في المركز.",
  "blocks": [
   {
    "h": "Drei Grundhaltungen",
    "li": [
     "Empathie: Gefühle und Sichtweise des anderen verstehen und das auch mitteilen.",
     "Kongruenz: stimmig und echt sein, eigene Gefühle im Gespräch wahrnehmen.",
     "Wertschätzung: den anderen annehmen, wie er ist, Interesse zeigen, Bewertungen zurückhalten."
    ]
   },
   {
    "h": "Techniken des aktiven Zuhörens",
    "li": [
     "Bestätigendes Zuhören: Blickkontakt, Nicken, zugewandte Haltung.",
     "Paraphrasieren: Das Gesagte in eigenen Worten wiedergeben, um zu prüfen, ob es richtig verstanden wurde.",
     "Verbalisieren: Gefühle in Worte fassen, zum Beispiel Das macht Ihnen Angst.",
     "Nachfragen: offen und ohne Druck vertiefen."
    ]
   },
   {
    "h": "Beispiel und Grenzen",
    "li": [
     "Patient: Ich habe Angst vor der Operation. Pflegekraft: Sie machen sich Sorgen vor dem Eingriff, möchten Sie mir mehr dazu sagen?",
     "Schweigen aushalten, nicht sofort trösten oder Ratschläge geben.",
     "Zuhören ersetzt keine Information; nach dem Zuhören folgt die fachliche Antwort."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "tiles",
    "title": "Rogers: Die drei Grundhaltungen",
    "items": [
     {
      "t": "Empathie",
      "s": "verstehen",
      "icon": "HeartHandshake",
      "tone": "ok"
     },
     {
      "t": "Kongruenz",
      "s": "echt sein",
      "icon": "ShieldCheck",
      "tone": "info"
     },
     {
      "t": "Wertschätzung",
      "s": "annehmen",
      "icon": "ThumbsUp",
      "tone": "ok"
     }
    ]
   }
  ]
 },
 {
  "id": "g6-beziehung",
  "group": "ausbildung",
  "area": "kommunikation",
  "title": "Pflegebeziehung gestalten: Nähe, Distanz und Beziehungsphasen",
  "icon": "HeartHandshake",
  "ar": "العلاقة المهنية تختلف عن الخاصة: ليست اختيارية، محدودة زمنياً، وتقوم على قرب مهني مع حفاظ على مسافة. تحتاج الممرضة إلى وعي ذاتي وتعاطف وقدرة على وضع الحدود.",
  "blocks": [
   {
    "h": "Privat und beruflich",
    "li": [
     "Privat: freiwillig gewählt, oft langfristig, emotionale Nähe, personengebunden.",
     "Beruflich: nicht frei gewählt, zeitlich begrenzt, professionelle Nähe, Personen können wechseln.",
     "Die Beziehung ist asymmetrisch: Pflegende haben Wissen und Macht, Patienten sind abhängig."
    ]
   },
   {
    "h": "Räumliche Distanzzonen",
    "li": [
     "Intime Zone: sehr nah (bis etwa 0,5 m), nur für vertraute Menschen; Pflege tritt oft hinein, daher ankündigen.",
     "Persönliche Zone: etwa 0,5 bis 1,2 m, typisch für Gespräche.",
     "Soziale Zone: etwa 1,2 bis 3,5 m; öffentliche Zone: darüber.",
     "Der Abstand ist individuell und kulturell verschieden."
    ]
   },
   {
    "h": "Voraussetzungen und Phasen",
    "li": [
     "Beziehung als Basis der Behandlung verstehen und sich selbst wahrnehmen.",
     "Empathie zeigen und professionelle Grenzen setzen, damit Überengagement und Burnout vermieden werden.",
     "Phasen nach Peplau: Orientierung, Identifikation, Nutzung, Ablösung."
    ]
   }
  ],
  "diagrams": [
   {
    "kind": "flow",
    "title": "Beziehungsphasen nach Peplau",
    "steps": [
     {
      "t": "Orientierung",
      "s": "Erstkontakt, Aufnahme",
      "icon": "Handshake",
      "tone": "info"
     },
     {
      "t": "Identifikation",
      "s": "Vertrauen wächst",
      "icon": "HeartHandshake",
      "tone": "ok"
     },
     {
      "t": "Nutzung",
      "s": "aktive Behandlung",
      "icon": "Activity",
      "tone": "ok"
     },
     {
      "t": "Ablösung",
      "s": "Entlassung",
      "icon": "DoorOpen",
      "tone": "warn"
     }
    ]
   }
  ]
 }
];
