/**
 * Weitere ergänzende Krankheits-Lektionen (Wasser und Elektrolyte, Hirntumor, periphere Nerven, Wirbelkanal).
 * Inhaltlich orientiert an "I care – PflegeExamen KOMPAKT" (Thieme), in eigenen Worten und vereinfacht – KEIN Buchtext.
 * Normwerte sind Richtwerte, es gelten die Referenzbereiche des jeweiligen Labors.
 */
import type { Lesson, LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const BUCH_NEU_3: Lesson[] = [
  {
    id: "wasser-elektrolyte", group: "krank", area: "niere", title: "Wasser- und Elektrolythaushalt: Störungen erkennen", icon: "Droplets",
    ar: "توازن الماء والأملاح: الجسم يحافظ على توازن الماء والشوارد (Natrium, Kalium, Kalzium, Magnesium...). الجفاف (Dehydratation) ونقص أو زيادة الماء (Hyperhydratation) يكونان متساوي التوتر أو ناقصه أو زائده. ارتفاع البوتاسيوم (Hyperkaliämie) خطر على القلب. الرعاية: ميزان السوائل، مراقبة الوزن، مراقبة العلامات الحيوية، الوقاية من الجفاف.",
    diagrams: [
      { kind: "table", title: "Wichtige Elektrolyte (Richtwerte im Blut)", head: ["Elektrolyt", "Normwert (mmol/l)", "Wofür wichtig?"], rows: [
        ["Natrium", "135–145", "Wichtigstes Kation außerhalb der Zellen, Erregung von Nerven und Muskeln"],
        ["Kalium", "3,5–5,5", "Wichtigstes Kation in den Zellen, Herz, Nerven und Muskeln"],
        ["Chlorid", "95–110", "Osmotischer Druck, Säure-Basen-Haushalt"],
        ["Kalzium", "2,2–2,7", "Nerven, Muskeln, Knochen und Zähne"],
        ["Magnesium", "0,75–1,05", "Nerven, Muskeln, Enzyme"],
        ["Phosphat", "0,8–1,6", "Knochen, pH-Puffer"],
      ] },
      { kind: "table", title: "Typische Störungen und worauf man achtet", head: ["Störung", "Häufige Ursachen", "Zeichen", "Beachten"], rows: [
        ["Hyperkaliämie", "Niereninsuffizienz, Quetschungen, Azidose, kaliumsparende Diuretika", "Herzrhythmusstörungen, Muskelschwäche, Kribbeln", "Obstipationsprophylaxe, EKG und Arzt"],
        ["Hypokaliämie", "Durchfall, Erbrechen, Abführmittel, Insulin", "Rhythmusstörungen, Obstipation bis Darmlähmung", "Kaliumpräparate mit viel Wasser, Infusion exakt dosieren"],
        ["Hyperkalzämie", "Knochenmetastasen, Plasmozytom, Niereninsuffizienz", "Verwirrtheit, Übelkeit, Verstopfung, viel Urin", "Alle Elektrolyte kontrollieren"],
        ["Hypokalzämie", "Durchfall, CED, Schleifendiuretika", "Krämpfe, Kribbeln, Kehlkopfkrampf", "Bei Infusion EKG-Kontrolle"],
        ["Hypomagnesiämie", "Alkohol, Durchfall, Erbrechen", "Krämpfe, Rhythmusstörungen, Reizbarkeit", "Elektrolyt- und EKG-Kontrolle"],
      ] },
    ],
    blocks: [
      B("Wasser im Körper", "Etwa zwei Drittel des Körperwassers liegen in den Zellen (intrazellulär), ein Drittel außerhalb (extrazellulär).", "Außerhalb der Zellen verteilt sich das Wasser zu etwa drei Vierteln auf den Raum zwischen den Zellen (interstitiell) und zu einem Viertel in den Gefäßen (intravasal).", "Die Niere hält Wasser und Elektrolyte in engen Grenzen konstant, indem sie die Zusammensetzung des Urins anpasst."),
      B("Osmolalität", "Osmolalität ist die Konzentration der osmotisch wirksamen Teilchen. Zwischen innen und außen muss ein Gleichgewicht herrschen, sonst strömt Wasser in die Zelle oder aus ihr heraus.", "Draußen bestimmt vor allem Natrium den osmotischen Druck, in der Zelle vor allem Kalium."),
      B("Dehydratation (Wassermangel)", "Isoton: Wasser und Salz gehen im gleichen Maß verloren, z. B. bei Erbrechen, Durchfall, Blutverlust.", "Hyperton: es geht mehr Wasser als Salz verloren, z. B. wenn lange nichts getrunken wurde oder bei starkem Schwitzen.", "Hypoton: es geht mehr Salz als Wasser verloren, z. B. bei häufigem Erbrechen oder Überdosis von Diuretika oder Abführmitteln."),
      B("Hyperhydratation (zu viel Wasser)", "Isoton: z. B. bei Herzinsuffizienz oder zu großen Mengen isotoner Infusionen, es entstehen Ödeme.", "Hyperton: z. B. durch salzhaltiges Wasser oder hypertone NaCl-Infusion.", "Hypoton: z. B. durch mineralfreies (destilliertes) Wasser oder bei Niereninsuffizienz."),
      B("Wie der Körper reguliert", "Volumenrezeptoren im rechten Vorhof und in den Hohlvenen hemmen ADH, wenn das Volumen hoch ist.", "Osmolalitätsrezeptoren im Gehirn steigern ADH, wenn die Natriumkonzentration zu hoch ist, und lösen Durst aus.", "Sinkt das Volumen, setzt die Niere Renin frei und aktiviert das Renin-Angiotensin-Aldosteron-System.", "ADH und Aldosteron fördern die Rückresorption von Wasser und Natrium, ANP fördert die Natriumausscheidung. Insulin schiebt Kalium in die Zellen."),
      B("Pflege", "Flüssigkeit bilanzieren, Gewicht kontrollieren, Vitalzeichen und Hautzustand beobachten.", "Dehydratation vorbeugen: Trinkmenge anbieten, Trinkprotokoll, auf Durst und Mundtrockenheit achten, vor allem bei älteren Menschen.", "Bei Ödemen oder Herz- und Niereninsuffizienz Trinkmenge nach Anordnung beschränken.", "Auffällige Laborwerte und Rhythmusstörungen sofort melden."),
    ],
  },
  {
    id: "hirntumor", group: "krank", area: "nerven", title: "Hirntumoren", icon: "Brain",
    ar: "أورام الدماغ: خلايا جديدة حميدة أو خبيثة. الخبيثة تغزو النسيج السليم، والحميدة تضغط (Raumforderung). أولية (مثل Glioblastom) أو ثانوية (نقائل). الأعراض: صداع منتشر، غثيان وقيء (ضغط داخل الجمجمة)، تغيرات شخصية، شلل، نوبات صرع. التشخيص بالرنين وخزعة. العلاج: استئصال كامل قدر الإمكان، علاج إشعاعي وكيميائي. بعد الجراحة: عناية مركزة ومراقبة الضغط داخل الجمجمة وGCS.",
    diagrams: [
      { kind: "compare", title: "Primär oder sekundär?", cols: [
        { t: "Primär", icon: "Brain", tone: "info", items: ["Geht vom Hirngewebe aus", "Beispiel: Glioblastom", "Gutartig oder bösartig"] },
        { t: "Sekundär", icon: "Ribbon", tone: "warn", items: ["Metastasen anderer Tumoren", "Beispiel: malignes Melanom", "Streuung über das Blut"] },
      ] },
      { kind: "tiles", title: "Mögliche Symptome", items: [
        { t: "Diffuse Kopfschmerzen", icon: "Zap", tone: "warn" },
        { t: "Übelkeit und Erbrechen", s: "Hirndruck", icon: "Gauge", tone: "warn" },
        { t: "Wesensveränderung, Konzentrationsstörung", icon: "Brain", tone: "warn" },
        { t: "Lähmungen, Gefühlsstörungen", icon: "Hand", tone: "bad" },
        { t: "Epileptische Anfälle", icon: "Zap", tone: "bad" },
      ] },
    ],
    blocks: [
      B("Was ist das?", "Gutartige oder bösartige Zellneubildung im Gehirn.", "Bösartige Tumoren wachsen in das gesunde Gewebe hinein und zerstören es. Gutartige schaden durch Raumforderung, also durch Druck auf umliegendes Gewebe."),
      B("Symptome", "Erste Zeichen: diffuse Kopfschmerzen, Übelkeit, Erbrechen, evtl. durch erhöhten Hirndruck.", "Psychische Auffälligkeiten (Wesensveränderung, Konzentrationsstörungen), Lähmungen, Sensibilitätsstörungen, epileptische Anfälle.", "Bösartige Tumoren fallen meist schnell auf. Bei gutartigen können die ersten Zeichen erst nach Jahren auftreten."),
      B("Diagnostik und Therapie", "Anamnese, klinischer Befund und neurologischer Status (Glasgow Coma Scale), Bildgebung (MRT), Gewebeprobe zur Bestimmung der Tumorart.", "Therapie: möglichst vollständige Entfernung des Tumors, dazu Strahlen- und Chemotherapie."),
      B("Pflege nach der Operation", "Überwachung auf der Intensivstation, Fokus: Hirndruck früh erkennen. Hirndruckmessung, ZVD, Vitalzeichen und Glasgow Coma Scale.", "Körperpflege nach Bobath-Konzept und Basaler Stimulation.", "Dauerkatheter zur Überwachung der Urinausscheidung. Prophylaxen bedarfsgerecht.", "Psychosozial: Sorgen und Ängste ernst nehmen, Angehörige einbeziehen, psychoonkologische Beratung, Seelsorge oder Psychologen vermitteln, Selbsthilfegruppen."),
    ],
  },
  {
    id: "periphere-nerven-wirbelkanal", group: "krank", area: "nerven", title: "Guillain-Barré, Karpaltunnel und Spinalkanalstenose", icon: "Hand",
    ar: "متلازمة غيلان باريه: التهاب مناعي ذاتي حاد للأعصاب الطرفية، يسبب شللاً صاعداً من القدمين إلى عضلات التنفس والوجه، وغالباً يزول بعد أسابيع. قد تلزم عناية مركزة وتنفس صناعي وفصل بلازما. متلازمة النفق الرسغي: انضغاط العصب المتوسط، تنميل وألم وضعف في اليد. تضيّق القناة الشوكية: ألم وتنميل، يتحسن بالانحناء للأمام.",
    diagrams: [
      { kind: "flow", title: "Guillain-Barré: aufsteigende Lähmung", steps: [
        { t: "Autoimmunreaktion zerstört Myelinscheiden", icon: "ShieldCheck", tone: "warn" },
        { t: "Füße und Beine gelähmt", icon: "Footprints", tone: "warn" },
        { t: "Hände, Arme, Rumpf", icon: "Hand", tone: "bad" },
        { t: "Atem- und Gesichtsmuskulatur", s: "Intensivstation, Beatmung möglich", icon: "Wind", tone: "bad" },
        { t: "Rückbildung meist nach Wochen", icon: "Sprout", tone: "ok" },
      ] },
      { kind: "table", title: "Drei Erkrankungen im Vergleich", head: ["", "Guillain-Barré", "Karpaltunnel", "Spinalkanalstenose"], rows: [
        ["Was ist betroffen?", "Periphere Nerven und Nervenwurzeln", "N. medianus im Handgelenk", "Wirbelkanal verengt"],
        ["Zeichen", "Aufsteigende Lähmung", "Kribbeln, Taubheit, Kraftverlust in der Hand", "Nacken- oder Beinschmerz, besser beim Vorbeugen"],
        ["Behandlung", "Intensivpflege, Plasmapherese", "Schiene, ggf. Karpaldach durchtrennen", "Schmerzmittel, Physio, ggf. OP"],
      ] },
    ],
    blocks: [
      B("Guillain-Barré-Syndrom", "Akute entzündliche Erkrankung der peripheren Nerven und Nervenwurzeln. Durch eine Autoimmunreaktion werden die Myelinscheiden zerstört.", "Typisch: aufsteigende Lähmungen von den Füßen über Beine, Hände, Arme, Beckengürtel und Rumpf bis zur Atem- und Gesichtsmuskulatur. Ist das vegetative Nervensystem betroffen, droht Bradykardie.", "Die Lähmungen verschwinden meist nach einigen Wochen in umgekehrter Reihenfolge.", "Therapie: ggf. Intensivstation mit Beatmung, Plasmapherese entfernt die Antikörper aus dem Blut."),
      B("Pflege bei Guillain-Barré", "Prophylaxen: Kontrakturen und Thrombose.", "Fehlen Kau- und Schluckbewegungen, ist gründliche Mundpflege nötig (Speicheldrüsen werden nicht angeregt) und Ernährungsunterstützung, ggf. Sonde.", "Patienten aufklären: Die Symptome halten sehr wahrscheinlich nur vorübergehend an."),
      B("Karpaltunnelsyndrom", "Der Mittelnerv (N. medianus) wird im Karpaltunnel am Handgelenk eingeengt.", "Auslöser: Entzündung, Verletzung, Stoffwechsel (Diabetes, Schwangerschaft).", "Symptome: Kribbeln, Schmerz, Taubheit in der Hand, Feinmotorik und Kraft lassen nach, später Muskelschwund.", "Operative Therapie: Durchtrennung des Karpaltunnel-Dachs."),
      B("Spinalkanalstenose", "Der Wirbelkanal ist durch Weichteil- oder Knochengewebe eingeengt, z. B. durch knöcherne Auswüchse (Degeneration), Tumoren oder Entzündungen.", "Zervikal (Halswirbelsäule): Nackenschmerz, evtl. Ausstrahlung in den Arm, Gefühlsstörungen, Blasen- und Mastdarmstörungen.", "Lumbal (Lendenwirbelsäule): Schmerz und Gefühlsstörungen in den Beinen, besser bei Vorbeugen.", "Therapie: Schmerzmittel, Physiotherapie, bei neurologischen Ausfällen operative Erweiterung. Pflege wie beim Bandscheibenvorfall."),
    ],
  },
];
