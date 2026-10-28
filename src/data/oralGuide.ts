/**
 * Hilfen für die mündliche Prüfung: Ablauf, Antwortschema, Operatoren und Tipps.
 * Lernhilfe der App in eigenen Worten. Grundlage: Hinweise im Kapitel "Die mündliche Prüfung" des Prüfungsbuchs
 * und die Operatoren-Tabelle (Anforderungsbereiche I bis III). Maßgeblich bleiben PflAPrV und die Vorgaben deiner Pflegeschule.
 */
import type { Diagram } from "./diagram";

export interface OperatorHelp {
  id: string;
  /** Anzeigename, z. B. "Erläutern" */
  label: string;
  /** Regex-Quellen, die in der Aufgabe nach diesem Operator suchen */
  match: string[];
  ab: 1 | 2 | 3;
  /** Was die Prüfenden erwarten, in einem Satz */
  idea: string;
  /** Wie du aufbaust */
  steps: string[];
  /** Kurzer Satzanfang zum Einstieg */
  starter: string;
  ar: string;
}

export const AB_LABEL: Record<1 | 2 | 3, string> = {
  1: "AB I: Wissen wiedergeben",
  2: "AB II: Wissen anwenden und erklären",
  3: "AB III: Beurteilen, begründen, Lösungen entwickeln",
};

export const OPERATORS: OperatorHelp[] = [
  {
    id: "zusammenfassen", label: "Zusammenfassen (Fall in eigenen Worten)", match: ["zusammenfassung", "zusammenfass", "in eigenen worten", "notizen zu den folgenden situationsmerkmalen"], ab: 1,
    idea: "Du zeigst, dass du den Fall verstanden hast. Das ist ein Prüfungsschwerpunkt.",
    steps: ["Wer ist beteiligt? (Akteure: Patient, Angehörige, Auszubildende, Team)", "Wie erleben und deuten sie die Lage? (Gefühle, Sichtweisen)", "Was tun sie und warum? (Handlungsanlässe)", "Welche Umstände spielen mit? (Kontext: Einrichtung, Zeit, Personal, Recht)", "Dann der Kernsatz: Das zentrale Problem ist …"],
    starter: "In der Fallsituation geht es um … Beteiligt sind …",
    ar: "لخّص الحالة بكلماتك: الأشخاص، كيف يشعرون ويفسّرون، ماذا يفعلون ولماذا، والظروف المحيطة، ثم المشكلة الأساسية.",
  },
  {
    id: "nennen", label: "Nennen, Benennen, Aufzählen, Angeben", match: ["\\bnennen sie\\b", "\\bbenennen sie\\b", "\\bzählen sie\\b.*\\bauf\\b", "\\bgeben sie\\b.*\\ban\\b", "\\bskizzieren sie\\b"], ab: 1,
    idea: "Kurz und vollständig aufzählen. Keine langen Erklärungen.",
    steps: ["Anzahl ankündigen: „Ich nenne vier Punkte.“", "Stichwortartig aufzählen, in sinnvoller Reihenfolge", "Fachbegriffe richtig benutzen", "Nur nachfragen lassen, wenn die Prüfenden vertiefen wollen"],
    starter: "Ich nenne … Erstens …, zweitens …",
    ar: "اذكر النقاط باختصار وبالترتيب، بدون شرح طويل. ابدأ بعدد النقاط.",
  },
  {
    id: "definieren", label: "Definieren", match: ["\\bdefinieren sie\\b", "\\bwas versteht man\\b"], ab: 1,
    idea: "Ein Begriff wird in einem klaren Satz bestimmt.",
    steps: ["Oberbegriff nennen (Was ist es?)", "Wichtige Merkmale ergänzen (Was macht es aus?)", "Optional: kurzes Beispiel aus dem Fall"],
    starter: "Unter … versteht man …",
    ar: "عرّف المصطلح بجملة واضحة: الفئة العامة ثم الخصائص، ويمكن مثال من الحالة.",
  },
  {
    id: "beschreiben", label: "Beschreiben, Darstellen, Schildern", match: ["\\bbeschreiben sie\\b", "\\bstellen sie\\b.*\\bdar\\b", "\\bschildern sie\\b", "\\bcharakterisieren sie\\b"], ab: 1,
    idea: "Sachlich und geordnet wiedergeben, ohne Wertung.",
    steps: ["Gliederung nennen (z. B. in Phasen oder Bereichen)", "Der Reihe nach beschreiben (Ablauf oder Merkmale)", "Fachbegriffe verwenden", "Wo es passt, auf den Fall beziehen"],
    starter: "Es gibt … Phasen. Zuerst …, dann …",
    ar: "صِف بشكل موضوعي ومنظم (مراحل أو خصائص) مع ربط بالحالة، بدون حكم.",
  },
  {
    id: "erklaeren", label: "Erklären, Erläutern", match: ["\\berklären sie\\b", "\\berläutern sie\\b", "(?<![a-zäöüß])übertragen sie\\b", "\\bverdeutlichen sie\\b"], ab: 2,
    idea: "Du zeigst Zusammenhänge: Was bedeutet das und warum ist es so?",
    steps: ["Aussage: Das Wichtigste in einem Satz", "Begründung: Warum? (Fachwissen, Recht, Prinzip)", "Beispiel: Bezug zur Fallsituation (Name nennen)", "Kurzes Fazit"],
    starter: "… bedeutet, dass … Das zeigt sich im Fall bei Frau/Herrn … darin, dass …",
    ar: "اشرح العلاقة: الفكرة، السبب (معرفة أو قانون أو مبدأ)، مثال من الحالة، ثم خلاصة.",
  },
  {
    id: "analysieren", label: "Analysieren, Ermitteln", match: ["\\banalysieren sie\\b", "\\bermitteln sie\\b"], ab: 2,
    idea: "Du zerlegst die Situation in Teile und erkennst Ursachen und Zusammenhänge.",
    steps: ["Beteiligte und ihre Interessen oder Ziele", "Auslöser und Ursachen (Wer, was, warum?)", "Folgen und Zusammenhänge", "Zusammenfassend: Kernproblem und mögliche Ansatzpunkte"],
    starter: "Ich betrachte zuerst die Beteiligten, dann die Ursachen und Folgen.",
    ar: "حلّل الموقف إلى أجزاء: الأطراف ومصالحهم، الأسباب، النتائج، ثم نقطة المشكلة الأساسية.",
  },
  {
    id: "vergleichen", label: "Vergleichen, Unterscheiden, Gegenüberstellen", match: ["\\bvergleichen sie\\b", "\\bunterscheiden sie\\b", "\\bstellen sie\\b.*\\bgegenüber\\b"], ab: 2,
    idea: "Gemeinsamkeiten und Unterschiede nach klaren Kriterien.",
    steps: ["Kriterien nennen (Worin vergleichst du?)", "Gemeinsamkeiten", "Unterschiede", "Schluss: Was folgt daraus für den Fall?"],
    starter: "Ich vergleiche anhand von … Gemeinsam ist …, unterschiedlich ist …",
    ar: "قارن حسب معايير واضحة: أوجه الشبه والاختلاف ثم ماذا يعني ذلك للحالة.",
  },
  {
    id: "abwaegen", label: "Abwägen (konkurrierende Prinzipien oder Interessen)", match: ["\\bwägen sie\\b", "\\bwaegen sie\\b", "\\babwägen\\b"], ab: 3,
    idea: "Du stellst Gründe gegeneinander und gewichtest sie.",
    steps: ["Die konkurrierenden Prinzipien oder Interessen nennen", "Für jede Seite: Argument mit Bezug zum Fall", "Gewichtung: Was wiegt hier schwerer und warum?", "Entscheidung oder Vorschlag mit Rücksicht auf die andere Seite"],
    starter: "Auf der einen Seite steht …, auf der anderen …",
    ar: "ضع الأسباب مقابل بعضها: كل جانب بحجته مع الحالة، ثم رجّح بتعليل، ثم اقتراح يراعي الطرف الآخر.",
  },
  {
    id: "begruenden", label: "Begründen", match: ["\\bbegründen sie\\b", "\\bbelegen sie\\b"], ab: 3,
    idea: "Zu einer Aussage gehören nachvollziehbare Gründe.",
    steps: ["Behauptung klar sagen", "Grund 1 aus Fachwissen, Recht oder ethischem Prinzip", "Grund 2 mit Bezug zum Fall", "Verbinden: „Deshalb …“"],
    starter: "Ich begründe das so: … Das passt zum Fall, weil …",
    ar: "قل رأيك ثم أسبابه: من المعرفة أو القانون أو المبدأ، ومن الحالة، ثم اربط بـ \"لذلك\".",
  },
  {
    id: "beurteilen", label: "Beurteilen, Bewerten, Einschätzen, Überprüfen", match: ["\\bbeurteilen sie\\b", "\\bbewerten sie\\b", "\\bschätzen sie\\b.*\\bein\\b", "(?<![a-zäöüß])überprüfen sie\\b"], ab: 3,
    idea: "Ein begründetes Urteil mit Maßstab.",
    steps: ["Kriterien nennen (Fachstandard, Gesetz, Berufsethik, Pflege-Charta)", "Was ist im Fall passiert? Beobachtungen beschreiben", "Was war gut, was nicht?", "Eigenes Urteil mit Begründung", "Verbesserung oder Alternative nennen"],
    starter: "Ich beurteile das Handeln anhand von … Positiv ist …, kritisch ist …",
    ar: "قيّم بمعيار: المعايير (معيار مهني، قانون، أخلاقيات)، ماذا حدث، الإيجابي والسلبي، حكمك مع التعليل، وبديل أفضل.",
  },
  {
    id: "reflektieren", label: "Reflektieren, Sich auseinandersetzen", match: ["\\breflektieren sie\\b", "\\bsetzen sie sich\\b.*\\bauseinander\\b"], ab: 3,
    idea: "Du hinterfragst Handeln und Haltung, auch das eigene.",
    steps: ["Situation und Handlung kurz beschreiben", "Gefühle und Beweggründe der Beteiligten", "Was ging gut, was ist problematisch (Prinzipien, Recht, Qualität)?", "Was würdest du als Pflegefachperson tun und warum?"],
    starter: "Das Handeln von … lässt sich so einordnen: … Ich würde …",
    ar: "تأمّل في التصرف ودوافع الأطراف، ما الإيجابي وما الإشكالي، وماذا ستفعل أنت ولماذا.",
  },
  {
    id: "entwickeln", label: "Entwickeln, Vorschlagen, Ableiten, Handlungsalternativen", match: ["\\bentwickeln sie\\b", "\\bschlagen sie\\b.*\\bvor\\b", "\\bleiten sie\\b.*\\bab\\b", "\\bzeigen sie\\b.*\\bauf\\b", "\\bhandlungsalternativ", "\\blösungsvorschläge\\b"], ab: 3,
    idea: "Realistische Lösungen mit Begründung und Rollen.",
    steps: ["Ziel: Was soll erreicht werden?", "Zwei bis drei Optionen nennen", "Eine wählen und begründen (Wirkung, Machbarkeit, Rechte der Beteiligten)", "Wer tut was? (Rollen, Gespräch, Team, Leitung, Beratung)", "Wie kontrollierst du, ob es wirkt?"],
    starter: "Als Lösung schlage ich vor: … Ich wähle …, weil …",
    ar: "اقترح حلولاً واقعية: الهدف، 2-3 خيارات، اختر واحداً مع التعليل، من يفعل ماذا، وكيف تتحقق من النتيجة.",
  },
  {
    id: "stellung", label: "Stellung nehmen, Positionieren, Diskutieren, Erörtern", match: ["\\bnehmen sie\\b.*\\bstellung\\b", "\\bpositionieren sie\\b", "\\bdiskutieren sie\\b", "\\berörtern sie\\b", "\\bnehmen sie bezug\\b"], ab: 3,
    idea: "Eine begründete Position mit Argumenten und Gegenargumenten.",
    steps: ["Position klar nennen", "Zwei bis drei Argumente dafür", "Mögliche Gegenargumente ansprechen", "Abwägen und Fazit mit Bezug zum Fall"],
    starter: "Meine Position ist … Dafür spricht … Dagegen könnte man einwenden …",
    ar: "اتخذ موقفاً واضحاً: حجج مؤيدة، حجج معارضة محتملة، ثم موازنة وخلاصة مرتبطة بالحالة.",
  },
];

/** Offene W-Fragen ohne Operator: wird nur genutzt, wenn sonst nichts passt. */
export const OPEN_QUESTION: OperatorHelp = {
  id: "w-frage", label: "Offene Frage (Welche, Wo, Was, Wie …)", match: [], ab: 2,
  idea: "Keine Aufzählung auf Zuruf: Antworte kurz auf den Punkt und belege mit dem Fall.",
  steps: ["Kernaussage in einem Satz", "Zwei bis drei Punkte oder Beispiele, geordnet", "Bezug zur Fallsituation mit Namen", "Falls es um Rechte, Pflichten oder Qualität geht: Grundlage nennen (Gesetz, Standard, Prinzip)"],
  starter: "Meiner Einschätzung nach … Im Fall sieht man das bei …",
  ar: "أجب مباشرة: فكرة رئيسية، ثم نقطتان أو ثلاث مرتبة، وربطها بالحالة، وإن كان الأمر قانونياً اذكر الأساس.",
};

export interface OperatorHit {
  op: OperatorHelp;
  index: number;
}

/** Findet die Operatoren in einer Aufgabe (in der Reihenfolge ihres Auftretens, höchstens drei). */
export function findOperators(text: string): OperatorHit[] {
  const t = text.toLowerCase().replace(/\s+/g, " ");
  const hits: OperatorHit[] = [];
  for (const op of OPERATORS) {
    let best = -1;
    for (const m of op.match) {
      const r = new RegExp(m, "i").exec(t);
      if (r && (best < 0 || r.index < best)) best = r.index;
    }
    if (best >= 0) hits.push({ op, index: best });
  }
  hits.sort((a, b) => a.index - b.index);
  if (!hits.length && /^(welche|welchen|welcher|welches|wo|wovon|was|wie|warum|wozu|wann|unter welchen|inwiefern)\b/.test(t.trim())) return [{ op: OPEN_QUESTION, index: 0 }];
  return hits.slice(0, 3);
}

/** Schwerpunkte eines mündlichen Falls aus dem Aufgabentext lesen (Zeilen mit "■" nach "Schwerpunkte"). */
export function focusPoints(preparation: string | undefined): string[] {
  if (!preparation) return [];
  const i = preparation.search(/Schwerpunkte/i);
  if (i < 0) return [];
  return preparation
    .slice(i)
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^[■•*-]/.test(l))
    .map((l) => l.replace(/^[■•*-]\s*/, "").trim())
    .filter(Boolean);
}

export interface Setting {
  area: string;
  age: string;
}
export function parseSetting(s: string | undefined): Setting {
  if (!s) return { area: "", age: "" };
  const [area, age] = s.split(/\s+-\s+/);
  return { area: (area || "").trim(), age: (age || "").replace(/^Altersgruppe\s*/i, "").trim() };
}

export const ORAL_FLOW: Diagram = {
  kind: "flow",
  title: "Ablauf der mündlichen Prüfung",
  steps: [
    { t: "Prüfungsaufgabe ziehen", s: "Du bekommst einen Fall mit Aufgaben", icon: "ClipboardList", tone: "info" },
    { t: "Vorbereitungszeit: 20 bis 30 Minuten", s: "Fall lesen, Aufgaben lesen, Schlüsselbegriffe markieren, Antworten in Stichpunkten notieren", icon: "Pencil", tone: "warn" },
    { t: "Prüfungsraum", s: "Zwei Fachprüfende, eventuell ein Vorsitz. Eine Person schreibt das Protokoll mit, das ist Pflicht und kein schlechtes Zeichen", icon: "Users", tone: "info" },
    { t: "Prüfungsgespräch: 30 bis höchstens 45 Minuten", s: "Einstieg mit Zusammenfassung oder Präsentation, dann die Kompetenzthemen. Prüfende können nachfragen", icon: "MessageCircle", tone: "warn" },
    { t: "Bewertung nach Notendefinitionen", s: "Geprüft werden die Kompetenzbereiche III, IV und V", icon: "Award", tone: "ok" },
  ],
};

export const ORAL_AREAS: Diagram = {
  kind: "tiles",
  title: "Was wird geprüft? Kompetenzbereiche III, IV und V",
  items: [
    { t: "III: In Pflegeteams handeln", s: "Verantwortung, Zusammenarbeit, ärztliche Anordnungen, Schnittstellen", icon: "Users" },
    { t: "IV: Recht, Qualität, Systeme", s: "Gesetze, Qualität sichern, Wirtschaft, Versorgungskontexte, Pflegewissenschaft", icon: "Scale" },
    { t: "V: Haltung und Selbstverständnis", s: "Ethik, Werte, eigene Entwicklung, berufliches Selbstverständnis", icon: "Compass" },
  ],
  note: "Altersgruppe und Versorgungsbereich unterscheiden sich von deiner praktischen Prüfung. Übe vor allem die Settings, die du dort nicht hattest.",
};

export const ORAL_TASK_MIX: Diagram = {
  kind: "bar",
  title: "Aufgaben nach Schwierigkeit: typische Gewichtung",
  parts: [
    { t: "AB I", s: "ca. 30 %", tone: "info" },
    { t: "AB II", s: "ca. 40 %", tone: "warn", w: 1.3 },
    { t: "AB III", s: "ca. 30 %", tone: "bad" },
  ],
  note: "Übe deshalb nie nur eine Stufe. Je höher die Stufe, desto mehr wird erwartet.",
};

export const ORAL_STEPS: { t: string; s: string; icon: string }[] = [
  { t: "Fall verstehen", s: "Markiere Akteure, Erleben, Handlungsanlässe, Probleme und Kontext. Nur Schlüsselbegriffe unterstreichen.", icon: "Eye" },
  { t: "Aufgaben lesen und Operator finden", s: "Das Verb (nennen, erläutern, beurteilen …) sagt dir, wie tief und wie du antworten sollst.", icon: "Search" },
  { t: "Stichpunkte nach Kompetenzbereich", s: "Pro Aufgabe 3 bis 5 Stichpunkte. Sauber und lesbar, damit du den roten Faden behältst.", icon: "ClipboardList" },
  { t: "Mit Zusammenfassung starten", s: "In eigenen Worten und kurz: Wer, was, warum, Umfeld, Kernproblem.", icon: "MessageCircle" },
  { t: "Aufbau: Aussage, Begründung, Fallbezug", s: "Fachbegriff erklären und immer mit Namen und Situation aus dem Fall verbinden.", icon: "Layers" },
  { t: "Zuhören und nachfragen lassen", s: "Prüfende leiten das Gespräch. Frage bei Unklarheit nach und nimm den Faden auf.", icon: "Ear" },
];

export const ORAL_TIPS: { h: string; li: string[] }[] = [
  { h: "Auftreten", li: ["Gepflegtes Äußeres, passende Kleidung, pünktlich sein.", "Prüfende begrüßen, wenn möglich mit Namen.", "Blickkontakt halten, ruhiges Sprechtempo, deutlich sprechen.", "Zuhören und gezielt auf die Frage eingehen. Nicht alles aufsagen, was du weißt."] },
  { h: "Wenn die Nerven flattern", li: ["Etwas Anspannung ist normal und steigert die Konzentration.", "Die Prüfenden wollen, dass du bestehst. Sie sind wohlwollend.", "Beginne mit Aufgaben, die du sicher kannst, dann den schwierigen Teil.", "Notiere Stichpunkte, auch wenn nur Teile einfallen. Der Rest kommt oft nach."] },
  { h: "Bei einem Blackout", li: ["Offen sagen: „Ich habe gerade einen Blackout.“ Die meisten Prüfenden helfen mit einer anderen oder wiederholten Frage.", "Um einen Moment Zeit bitten, um den Faden zu finden.", "Aufmerksamkeit bewusst weglenken: an etwas Beruhigendes denken, ruhig atmen."] },
  { h: "Üben", li: ["Timer stellen: 20 bis 30 Minuten Vorbereitung, 30 bis 45 Minuten sprechen.", "Dich selbst aufnehmen und anhören: Tempo, Struktur, Ausdruck.", "Mit Lernpartner: Er hält die Musterlösung verdeckt, stellt Aufgaben und Nachfragen und gibt Feedback.", "Aus dem Erwartungshorizont einen „Spicker“ machen, laut vortragen und immer weniger ablesen."] },
  { h: "Wenn etwas schiefgeht", li: ["Krank am Prüfungstag: sofort Schule und Träger informieren und ein ärztliches Attest vorlegen. Sonst kann die Prüfung als nicht bestanden gelten.", "Nicht bestanden: Die mündliche Prüfung kann einmal wiederholt werden. Die Zusatzzeit entscheidet der Prüfungsausschuss."] },
];

export const ORAL_AR =
  "الامتحان الشفوي: تسحب حالة، تحضّر 20–30 دقيقة (قراءة، تحديد كلمات مفتاحية، نقاط مختصرة)، ثم نقاش 30–45 دقيقة مع لجنة من اثنين. يُقيَّم المجالان III وIV وV. ابدأ بتلخيص الحالة بكلماتك، ثم أجب عن كل سؤال حسب الـOperator (اذكر، اشرح، قيّم…) بترتيب: الفكرة، التعليل، ربط بالحالة. إذا نسيت، قل بصدق إنك متوقف وسيساعدك المُمتحِن.";
