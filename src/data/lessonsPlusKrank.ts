/**
 * Vertiefung der Krankheitslehre: zusätzliche Blöcke je Lektion (Ursachen, Diagnostik, Therapie,
 * Komplikationen, Prüfungstipp). Lernhilfe der App in einfachem Deutsch, KEIN Buchtext.
 * Richtwerte und Vorgehen sind allgemeines Fachwissen; es gelten immer Anordnung und Hausstandard.
 */
import type { LessonBlock } from "./lessons";

const B = (h: string, ...li: string[]): LessonBlock => ({ h, li });

export const KRANK_PLUS: Record<string, LessonBlock[]> = {
  hypertonie: [
    B("Ursachen und Risikofaktoren", "Meist gibt es keine einzelne Ursache (primäre Hypertonie). Selten steckt eine Krankheit dahinter, z. B. von Niere oder Hormonen (sekundäre Hypertonie).", "Risiken: Übergewicht, viel Salz, Alkohol, Rauchen, Stress, Bewegungsmangel, Diabetes, Alter, erbliche Neigung."),
    B("Einteilung und Messen", "Richtwert in der Praxis: ab 140/90 mmHg erhöht. Bei Selbstmessung zu Hause gilt oft ab 135/85 mmHg als erhöht.", "Eine einzelne hohe Messung reicht nicht. Entscheidend sind wiederholte Messungen und das Tagesprofil.", "Manschette in Herzhöhe, passende Größe, vorher 5 Minuten Ruhe, nicht reden, Arm abgestützt."),
    B("Hypertensive Krise (Notfall)", "Sehr hohe Werte (etwa ab 180/110 mmHg) mit Kopfschmerz, Sehstörung, Brustschmerz, Atemnot oder Verwirrtheit.", "Ruhe, Oberkörper hoch, Vitalzeichen messen, sofort Arzt oder Notruf. Medikamente nur nach Anordnung, der Druck wird nicht auf eigene Faust schnell gesenkt."),
    B("Medikamente im Überblick (Beispiele)", "Entwässerungstabletten (Diuretika): mehr Wasserlassen, Elektrolyte beachten, morgens geben.", "ACE-Hemmer und Sartane: Reizhusten (bei ACE-Hemmern) und Schwindel möglich.", "Betablocker: senken den Puls, nicht abrupt absetzen.", "Kalziumantagonisten: geschwollene Knöchel möglich.", "Bei Schwindel beim Aufstehen (Orthostase) langsam aufstehen lassen und Sturzgefahr beachten."),
  ],
  herzinsuffizienz: [
    B("Links- und Rechtsherzschwäche", "Linksherz: Blut staut sich in die Lunge zurück. Folge: Atemnot, Husten, im schweren Fall Lungenödem (Notfall).", "Rechtsherz: Blut staut sich in den Körper zurück. Folge: Beinödeme, gestaute Halsvenen, Wasser im Bauch."),
    B("Ursachen und Schweregrad", "Häufige Ursachen: Bluthochdruck, Durchblutungsstörung der Herzkranzgefäße, Herzklappenfehler, Herzinfarkt.", "Der Schweregrad wird oft nach NYHA I bis IV beschrieben: von Beschwerden nur bei starker Belastung bis zu Beschwerden schon in Ruhe."),
    B("Behandlung und Alltag", "Medikamente: Entwässerung, ACE-Hemmer oder Sartane, Betablocker.", "Salzarme Kost, Trinkmenge nach ärztlicher Vorgabe, Alkohol meiden, Impfungen empfehlen.", "Bewegung nach Belastbarkeit: nicht schonen bis zur Schwäche, aber nicht überfordern."),
    B("Notfall: Lungenödem", "Plötzliche starke Atemnot, rasselnde Atmung, schaumiger Auswurf, Angst, Blässe oder Blaufärbung.", "Oberkörper hoch mit herabhängenden Beinen, Notruf 112, beim Menschen bleiben, Sauerstoff nach Anordnung."),
  ],
  herzinfarkt: [
    B("Ursache und Diagnostik", "Meist ist ein Herzkranzgefäß durch Ablagerungen (Arteriosklerose) und ein Gerinnsel verschlossen.", "Wichtig sind das EKG und Blutwerte (Troponin). Beides entscheidet über die Behandlung."),
    B("Behandlung im Krankenhaus", "Das Gefäß wird so schnell wie möglich wieder geöffnet, meist per Herzkatheter mit Stent.", "Zusätzlich gibt es Medikamente gegen Gerinnung und zur Entlastung des Herzens, nach Anordnung.", "Merksatz: „Time is muscle“ – je früher, desto weniger Herzmuskel stirbt ab."),
    B("Komplikationen", "Herzrhythmusstörungen, Herzschwäche, Herzstillstand (dann sofort Reanimation).", "Deshalb: Monitor, regelmäßige Vitalzeichen und genaue Beobachtung."),
    B("Pflege danach", "Stufenweise mobilisieren nach ärztlichem Plan.", "Verstopfung vorbeugen, damit nicht stark gepresst werden muss.", "Angst ernst nehmen, Gespräche anbieten, Risikofaktoren gemeinsam angehen (Rauchen, Blutdruck, Zucker, Gewicht).", "Reha und Nachsorge besprechen."),
  ],
  pavk: [
    B("Stadien nach Fontaine (Überblick)", "I: keine Beschwerden.", "II: Schmerz beim Gehen mit Pause (Claudicatio intermittens).", "III: Schmerz schon in Ruhe, vor allem nachts.", "IV: abgestorbenes Gewebe oder Geschwür (Nekrose, Ulkus)."),
    B("Diagnostik und Behandlung", "Pulse tasten, Knöchel-Arm-Index (ABI) messen, Ultraschall der Gefäße.", "Therapie: Gehtraining, Risikofaktoren senken, Medikamente zur Hemmung der Blutplättchen. Bei schweren Stadien Gefäßaufdehnung oder Bypass."),
    B("Lagerung und Wundschutz", "Bei Ruheschmerz hilft oft das Bein tief zu lagern. Hochlagern verschlechtert die Durchblutung.", "Keine engen Strümpfe oder einschnürende Verbände ohne Anordnung.", "Jede kleine Wunde am Fuß ernst nehmen und melden: Sie heilt schlecht."),
  ],
  thrombose: [
    B("Warum entsteht eine Thrombose?", "Die drei Hauptgründe (Virchow-Trias): veränderte Gefäßwand, langsamer Blutfluss, erhöhte Gerinnungsneigung.", "Risiko: Bettruhe, Operation, Schwangerschaft, Rauchen, Krebs, Dehydratation, Übergewicht."),
    B("Diagnostik und Behandlung", "Ultraschall der Venen und Blutwert (D-Dimere).", "Behandlung: Gerinnungshemmung (Spritzen oder Tabletten), Kompression nach Anordnung.", "Unter Gerinnungshemmung: auf Blutungszeichen achten (Nasenbluten, Blut im Urin oder Stuhl, blaue Flecken), Sturzgefahr senken."),
    B("Pflege bei Verdacht und danach", "Verdacht sofort melden, Bein nicht massieren.", "Umfang beider Beine nach Anordnung vergleichen und dokumentieren.", "Kompressionsstrümpfe: richtig sitzen, keine Falten, Haut beobachten."),
  ],
  asthma: [
    B("Zwei Arten von Medikamenten", "Bedarfsspray (Reliever): erweitert schnell die Atemwege, nur im Anfall oder vor Belastung.", "Dauermedikament (Controller), oft Kortison zum Einatmen: hemmt die Entzündung und wird regelmäßig genommen.", "Nach Kortison-Spray den Mund ausspülen, sonst kann sich ein Pilzbelag (Soor) bilden."),
    B("Selbstkontrolle und Notfall", "Peak-Flow-Messung zeigt, wie gut die Luft strömt. Werte werden im Tagebuch notiert.", "Notruf: Sprechen nur noch in Wortfetzen möglich, blaue Lippen, extreme Unruhe oder Erschöpfung, keine Besserung nach dem Bedarfsspray."),
    B("Beratung", "Allergene meiden, Rauchverzicht, Impfungen empfehlen.", "Mit dem Menschen üben, bis die Inhalationstechnik sicher sitzt."),
  ],
  copd: [
    B("Verlauf und Schweregrad", "Die Atemwege sind dauerhaft verengt, oft mit Lungenüberblähung (Emphysem).", "Der Schweregrad wird in Stufen (GOLD 1 bis 4) beschrieben.", "Plötzliche Verschlechterung (Exazerbation) durch Infekte: mehr Atemnot, mehr oder gelber Auswurf, Fieber. Der Arzt muss informiert werden."),
    B("Behandlung", "Inhalative Medikamente zur Erweiterung der Atemwege, bei Bedarf Kortison.", "Lungensport, Atemphysiotherapie, Rauchstopp (wichtigste Maßnahme), Impfung gegen Grippe und Pneumokokken."),
    B("Sauerstoff und Atemtechnik", "Sauerstoff nur in der angeordneten Menge. Bei einigen Betroffenen kann zu viel Sauerstoff den Atemantrieb schwächen.", "Lippenbremse: durch locker geschlossene Lippen langsam ausatmen, das hält die Atemwege offen.", "Sekret lösen: genug trinken, Inhalation, Abhusten üben, Kutschersitz."),
  ],
  pneumonie: [
    B("Diagnostik und Behandlung", "Abhören, Röntgenbild, Blutwerte (z. B. CRP, Leukozyten), manchmal Auswurfprobe.", "Bei Bakterien: Antibiotika nach Anordnung, pünktlich und bis zum Ende.", "Zusätzlich Flüssigkeit, Fiebermanagement, bei Bedarf Sauerstoff."),
    B("Ambulant und im Krankenhaus erworben", "Ambulant erworben: im Alltag angesteckt.", "Im Krankenhaus erworben (nosokomial): oft schwerer, weil Erreger häufiger resistent sind. Deshalb zählt gute Hygiene."),
    B("Pneumonieprophylaxe konkret", "Frühmobilisation, Atemübungen und Atemtraining (z. B. Atemtrainer).", "Oberkörper hochlagern, Positionswechsel, Mundpflege (weniger Keime), Schluckprobleme melden.", "Atemstimulierende Einreibung und Inhalation, wenn angeordnet oder im Standard vorgesehen."),
  ],
  diabetes: [
    B("Diagnose und Langzeitwert", "Richtwerte: Nüchternblutzucker ab 126 mg/dl, HbA1c ab 6,5 % oder ein Gelegenheitswert ab 200 mg/dl mit Beschwerden sprechen für Diabetes.", "Der HbA1c zeigt den Zucker der letzten Wochen („Langzeitwert“)."),
    B("Insulin in der Praxis", "Schnell wirksames Insulin (Mahlzeiten- oder Korrekturinsulin) wird zum Essen gespritzt, Basalinsulin deckt den Grundbedarf.", "Spritz-Ess-Abstand und Zeitpunkt genau nach Anordnung einhalten.", "Spritzstellen (Bauch, Oberschenkel) wechseln, damit keine Verhärtungen (Lipohypertrophie) entstehen.", "Pen in Gebrauch meist bei Zimmertemperatur, Vorrat im Kühlschrank. Immer Beschriftung und Haltbarkeit prüfen."),
    B("Ernährung und Berechnung", "Kohlenhydrate werden in Broteinheiten (BE) oder Kohlenhydrateinheiten (KE) gezählt: 1 BE entspricht etwa 10 bis 12 g Kohlenhydraten.", "Ernährung nach individuellem Plan, keine „Diabetikerprodukte“ nötig."),
    B("Notfälle bei Diabetes", "Hypoglykämie: schnell erkennen und behandeln (eigene Lektion).", "Sehr hoher Zucker: Ketoazidose (vor allem Typ 1) mit Übelkeit, tiefer Atmung, Azetongeruch, Bewusstseinstrübung oder hyperosmolares Koma (vor allem Typ 2) mit starker Austrocknung. Beides sind Notfälle.", "Bei Fieber, Erbrechen oder Durchfall (Krankheitstage) ändert sich der Insulinbedarf: Rücksprache mit dem Arzt."),
    B("Diabetischer Fuß", "Nervenschäden (Gefühl fehlt) und Durchblutungsstörung führen zu Druckstellen, die niemand spürt.", "Täglich Füße ansehen und eincremen (nicht zwischen den Zehen), Hornhaut nicht schneiden, Schuhe prüfen, ärztliche und podologische Fußpflege nutzen."),
  ],
  hypoglykaemie: [
    B("Ursachen", "Zu viel Insulin oder Tabletten, Mahlzeit ausgelassen oder verspätet, ungewohnte Bewegung, Alkohol, Durchfall oder Erbrechen.", "Betablocker können Warnzeichen wie Zittern oder Herzklopfen abschwächen."),
    B("Merkhilfe 15-15", "15 g schnell wirksame Kohlenhydrate geben, 15 Minuten warten, Blutzucker kontrollieren und wenn nötig wiederholen.", "Danach eine Kleinigkeit essen. Immer Ursache klären und Arzt informieren."),
    B("Vorbeugen", "Spritz-Ess-Abstand beachten, Mahlzeiten und Bewegung planen, Traubenzucker griffbereit, Blutzucker nach Plan messen."),
  ],
  schlaganfall: [
    B("Zwei Arten", "Meist (etwa 8 von 10 Fällen) verschließt ein Gerinnsel eine Hirnarterie (ischämischer Schlaganfall).", "Seltener blutet es im Gehirn (Hirnblutung). Die Behandlung ist völlig verschieden. Deshalb kommt zuerst die Bildgebung (CT oder MRT)."),
    B("Behandlung und Zeitfenster", "Bei einem Gerinnsel kann eine Auflösung (Lyse) oder die mechanische Entfernung helfen. Das geht nur in einem begrenzten Zeitfenster, deshalb zählt jede Minute.", "Behandelt wird idealerweise auf einer Stroke Unit (Schlaganfallstation).", "Der Blutdruck wird nur nach ärztlicher Anordnung gesenkt, ein zu schneller Abfall kann schaden."),
    B("Vorwarnung: TIA", "Eine kurze Durchblutungsstörung, die sich von selbst zurückbildet (meist in Minuten bis Stunden), ist ein Warnsignal.", "Auch sie wird wie ein Notfall behandelt."),
    B("Typische Folgen in der Pflege", "Halbseitenlähmung (Hemiparese): betroffene Seite wird in Pflege und Lagerung einbezogen, z. B. nach dem Bobath-Konzept.", "Vernachlässigung einer Körperseite (Neglect): auf der betroffenen Seite ansprechen und Dinge dorthin legen.", "Schluckstörung: Kost und Sitzposition anpassen, Aspirationszeichen melden (Husten beim Essen, feuchte Stimme).", "Sprachstörung: Ja-/Nein-Fragen, Zeichen und Bilder, nicht über den Kopf hinweg sprechen."),
    B("Vorbeugen", "Bluthochdruck behandeln, Rauchstopp, Bewegung, Vorhofflimmern erkennen, Zucker und Blutfette kontrollieren."),
  ],
  parkinson: [
    B("Medikamente und Zeitplan", "Wichtig ist Levodopa. Die Einnahme sollte zeitgenau erfolgen, meist etwa 30 Minuten vor oder etwa 90 Minuten nach eiweißreichen Mahlzeiten, damit der Wirkstoff gut aufgenommen wird.", "Mit der Zeit schwankt die Wirkung (On-off): gute und schlechte Phasen im Tagesverlauf dokumentieren.", "Überbewegungen (Dyskinesien), Halluzinationen und Schwindel können Nebenwirkungen sein und werden gemeldet."),
    B("Weitere Zeichen im Alltag", "Kleinschrittiger Gang mit Blockaden („Freezing“), kleine Schrift, leise Stimme, Maskengesicht, vermehrter Speichelfluss.", "Verstopfung, Blutdruckabfall beim Aufstehen, Schlafprobleme, Depression sind häufig."),
    B("Hilfen", "Bewegungsübungen, Physiotherapie, Logopädie, Ergotherapie.", "Bei Gangblockade helfen Taktgeber (Rhythmus, Zählen) oder Bodenmarkierungen als Schritthilfe.", "Genug Zeit beim Essen, Anziehen und Gehen einplanen, keine Hektik."),
    B("Akinetische Krise", "Plötzliche völlige Bewegungsunfähigkeit mit Schluckstörung und oft Fieber, z. B. bei vergessenen oder zu spät gegebenen Tabletten oder bei Durchfall.", "Das ist ein Notfall: Arzt oder Notruf, Ruhe bewahren, nicht allein lassen."),
  ],
  ms: [
    B("Verlauf und Schub", "Ein Schub sind neue oder deutlich schlimmere Beschwerden, die länger als 24 Stunden anhalten. Danach bilden sie sich ganz oder teilweise zurück.", "Bei einem Schub informiert man den Arzt, oft wird Kortison in hoher Dosis gegeben."),
    B("Typische Probleme", "Hitze verschlechtert die Zeichen vorübergehend (Uhthoff-Phänomen): kühle Räume, kühle Getränke, lauwarmes Duschen.", "Fatigue: Energie einteilen, Pausen vor Anstrengung.", "Blase: Restharn kann zu Infekten führen, auf Harnwegsinfekte achten.", "Spastik: dehnen, richtig lagern, Medikamente nach Anordnung."),
    B("Beratung", "Auf Selbstständigkeit achten, Hilfsmittel anbieten.", "Fragen zu Beruf, Familie und Zukunft ernst nehmen und Beratungsstellen nennen."),
  ],
  epilepsie: [
    B("Formen", "Fokale Anfälle: Die Entladung beginnt an einer Stelle des Gehirns, z. B. Zucken einer Hand, Wahrnehmungsstörung.", "Generalisierte Anfälle: das ganze Gehirn ist beteiligt, z. B. Bewusstlosigkeit mit Verkrampfung und Zuckungen (Grand mal) oder kurze Abwesenheiten (Absencen).", "Manche Menschen spüren vorher eine Aura (z. B. Geruch, Unruhe)."),
    B("Auslöser und Behandlung", "Auslöser: Schlafmangel, Alkohol, Stress, Flackerlicht, vergessene Tabletten.", "Antiepileptika müssen regelmäßig und nie eigenmächtig abgesetzt werden."),
    B("Status epilepticus", "Ein Anfall von mehr als etwa 5 Minuten oder Anfälle, die sich ohne Erholung wiederholen, sind ein lebensbedrohlicher Notfall.", "Notruf 112, Bedarfsmedikament nur nach Anordnung, Vitalzeichen überwachen."),
    B("Sicherheit im Alltag", "Duschen statt Baden oder Baden nur mit Aufsicht, Treppen und scharfe Kanten sichern.", "Verletzungen, Zungenbiss und Sturz nach dem Anfall kontrollieren."),
  ],
  demenz: [
    B("Formen und Stadien", "Häufig: Alzheimer-Demenz, vaskuläre Demenz (nach Durchblutungsstörungen), Lewy-Körper-Demenz, frontotemporale Demenz.", "Der Verlauf wird in leicht, mittel und schwer eingeteilt."),
    B("Delir nicht übersehen", "Ein Delir ist eine akute Verwirrtheit, die plötzlich beginnt und im Tagesverlauf schwankt.", "Ursachen: Infekt, Austrocknung, Schmerz, Medikamente, Operation. Es ist oft behandelbar: sofort melden und Ursache suchen."),
    B("Herausforderndes Verhalten verstehen", "Unruhe, Rufen oder Aggression haben fast immer einen Grund: Schmerz, Durst, Toilette, Angst, Langeweile, Lärm, Überforderung.", "Erst Ursache suchen und beheben, nicht sofort Medikamente oder Zwang einsetzen."),
    B("Konzepte in der Pflege", "Validation (nach Naomi Feil): Gefühle des Menschen wertschätzen, statt zu korrigieren.", "Biografiearbeit: Lebensgeschichte kennen und nutzen.", "Basale Stimulation: über Berührung, Gerüche, Musik und Bewegung erreichen, wenn Sprache schwindet.", "Der Expertenstandard „Beziehungsgestaltung in der Pflege von Menschen mit Demenz“ betont Beziehung, Verstehen und Sicherheit."),
    B("Sicherheit und Recht", "Freiheitsentziehende Maßnahmen wie Bettgitter oder Fixierung nur mit rechtlicher Grundlage (Einwilligung oder gerichtliche Genehmigung). Alternativen zuerst: Niedrigbett, Sensormatte, Begleitung.", "Auf Essen und Trinken achten, Gewicht beobachten."),
  ],
  rheuma: [
    B("Rheuma, Arthrose und Gicht", "Rheumatoide Arthritis: Entzündung, oft beidseitig, Morgensteifigkeit.", "Arthrose: Gelenkverschleiß, Anlauf- und Belastungsschmerz.", "Gicht: Harnsäurekristalle, meist plötzlicher heftiger Anfall im Großzeh."),
    B("Behandlung", "Basismedikamente bremsen die Krankheit (z. B. Methotrexat). Methotrexat wird oft nur einmal pro Woche genommen. Verwechslungen können gefährlich sein, daher genau nach Plan.", "Kortison hilft im Schub, hat aber viele Nebenwirkungen (Osteoporose, Zucker, Infekte).", "Schmerzmittel nach Anordnung, Physio- und Ergotherapie."),
    B("Alltagshilfen und Gelenkschutz", "Griffverdickungen, Anziehhilfen, Öffnungshilfen.", "Gelenke nicht dauerhaft einseitig belasten, große Gelenke statt kleiner Finger einsetzen.", "Bei Fehlstellungen der Hände frühzeitig Ergotherapie einbinden."),
  ],
  osteoporose: [
    B("Diagnostik und Therapie", "Knochendichtemessung (DXA). Ein T-Wert ab −2,5 spricht für Osteoporose.", "Therapie: Kalzium und Vitamin D, Bewegung, Medikamente zum Knochenaufbau oder zur Hemmung des Abbaus."),
    B("Wichtig bei Tabletten", "Manche Medikamente (Bisphosphonate) müssen nüchtern mit viel Wasser genommen werden und der Mensch muss danach etwa 30 Minuten aufrecht bleiben, um die Speiseröhre zu schützen. Immer nach Packungsbeilage und Anordnung.", "Hüftprotektoren schützen bei Sturzgefahr."),
    B("Warnzeichen", "Plötzlicher Rückenschmerz ohne Sturz, Größenverlust, Rundrücken können auf Wirbelbrüche hinweisen: melden.", "Nach einem Sturz mit Schmerz an Hüfte oder Handgelenk immer ärztlich abklären."),
  ],
  crohn: [
    B("Abgrenzung zur Colitis ulcerosa", "Morbus Crohn: kann vom Mund bis zum After auftreten, oft in einzelnen Abschnitten, alle Wandschichten betroffen.", "Colitis ulcerosa: betrifft den Dickdarm, fortlaufend von unten nach oben, typisch sind blutig-schleimige Durchfälle."),
    B("Komplikationen", "Engstellen (Stenosen), Fisteln, Abszesse, Mangel an Vitaminen und Eisen, Gewichtsverlust.", "Rauchen verschlechtert den Verlauf."),
    B("Behandlung und Ernährung", "Kortison im Schub, Medikamente zur Hemmung des Immunsystems, Biologika, manchmal Operation.", "Ernährung: keine feste „Crohn-Diät“, Verträglichkeit individuell herausfinden. Bei Mangel Zusatznahrung nach Anordnung.", "Infektionsrisiko durch Immunsuppression beachten (Hygiene, Impfstatus, Fieber melden)."),
  ],
  leberzirrhose: [
    B("Ursachen", "Alkohol, chronische Virushepatitis (B und C), Fettleber, bestimmte Autoimmunerkrankungen.", "Die Leber ist ein Entgiftungsorgan: Bei Ausfall steigen Giftstoffe im Blut."),
    B("Wichtige Komplikationen", "Aszites: Bauchwasser, Gewicht und Bauchumfang steigen.", "Ösophagusvarizen: Krampfadern in der Speiseröhre können stark bluten (Bluterbrechen, Teerstuhl, Kreislaufabfall): Notfall.", "Hepatische Enzephalopathie: Ammoniak schädigt das Gehirn (Schlaf-Wach-Umkehr, Verwirrtheit, Zittern der Hände).", "Blutungsneigung und Infektionen."),
    B("Ernährung und Medikamente", "Salzarm. Eiweiß wird nicht pauschal verboten, viele Betroffene sind mangelernährt: Vorgaben des Arztes befolgen.", "Viele Medikamente werden in der Leber abgebaut: nur angeordnete Mittel, Vorsicht bei Schmerzmitteln."),
    B("Haltung im Gespräch", "Alkoholverzicht respektvoll ansprechen. Auch bei bekannten Risiken hat der Mensch ein Recht auf eigene Entscheidungen; wichtig sind verständliche Aufklärung und Beratung zu Alternativen (z. B. alkoholfreie Getränke)."),
  ],
  harnweg: [
    B("Risikofaktoren", "Frauen sind häufiger betroffen (kurze Harnröhre).", "Blasenkatheter, Inkontinenz, zu wenig Trinken, Zuckerkrankheit, Harnabflussstörung (z. B. Prostatavergrößerung)."),
    B("Diagnostik", "Urinstreifentest und Urinkultur. Wichtig ist eine saubere Gewinnung (Mittelstrahlurin nach Intimreinigung).", "Antibiotika nur nach Anordnung, die ganze verordnete Dauer."),
    B("Blasenkatheter richtig pflegen", "Geschlossenes System nicht trennen, Beutel immer unter Blasenhöhe und nie auf dem Boden.", "Täglich Intimpflege am Katheter, Zug vermeiden.", "Täglich fragen, ob der Katheter noch nötig ist: Er ist eine häufige Infektionsquelle."),
    B("Ernstes Zeichen", "Fieber, Schüttelfrost, Flankenschmerz oder Verwirrtheit können auf Nierenbeckenentzündung oder Urosepsis hinweisen: sofort melden."),
  ],
  niereninsuff: [
    B("Ursachen und Folgen", "Häufigste Ursachen der chronischen Form: Diabetes und Bluthochdruck.", "Folgen: Wassereinlagerung, zu viel Kalium (Herzrhythmusstörungen), Blutarmut, Knochenstörungen, Juckreiz."),
    B("Dialyse (Überblick)", "Hämodialyse: Das Blut wird über eine Maschine gereinigt, meist mehrmals pro Woche für einige Stunden. Zugang ist oft ein Shunt am Arm.", "Peritonealdialyse: Die Reinigung läuft über das Bauchfell, oft zu Hause."),
    B("Shunt und Alltag", "Shunt täglich kontrollieren: Schwirren fühlen oder Strömungsgeräusch hören. Fehlt es, sofort melden.", "Kein Blutdruck, keine Spritzen, kein Druck, keine enge Kleidung am Shuntarm.", "Trinkmenge nach Vorgabe, Salz und Kalium beachten, Gewicht zwischen den Dialysen kontrollieren."),
    B("Medikamente", "Viele Medikamente müssen in der Dosis angepasst werden. Neue Mittel immer mit dem Arzt abstimmen."),
  ],
  depression: [
    B("Diagnose und Verlauf", "Typisch sind gedrückte Stimmung, Interessenverlust und Antriebsmangel, die über mindestens etwa zwei Wochen bestehen.", "Zusätzlich oft Schlaf-, Appetit- und Konzentrationsprobleme, Schuldgefühle, Hoffnungslosigkeit.", "Im Alter wirkt eine Depression manchmal wie eine Demenz: Das muss ärztlich abgeklärt werden."),
    B("Behandlung", "Gesprächstherapie, Medikamente (Antidepressiva), Bewegung, Lichttherapie, Tagesstruktur.", "Antidepressiva wirken oft erst nach zwei bis vier Wochen. Sie werden nicht eigenmächtig abgesetzt."),
    B("Suizidgefahr", "Nach Suizidgedanken zu fragen erhöht das Risiko nicht, es kann entlasten.", "Warnzeichen: Abschied nehmen, Verschenken von Dingen, plötzliche „Ruhe“ nach Phasen der Unruhe, konkrete Pläne.", "Bei konkreten Gedanken: nicht allein lassen, sofort Team und Arzt informieren, gefährliche Gegenstände sichern."),
    B("Pflege im Alltag", "Kleine, erreichbare Schritte statt großer Erwartungen.", "Morgens ist es oft am schlimmsten (Morgentief): realistische Ziele für den Tag.", "Nicht mit Sätzen wie „Reiß dich zusammen“ antworten."),
  ],
  mrsa: [
    B("Träger und Erkrankter", "Viele Menschen tragen Keime auf der Haut oder in der Nase, ohne krank zu sein (Besiedlung).", "Zur Infektion kommt es, wenn der Keim in Wunden oder Blut gelangt, vor allem bei geschwächter Abwehr."),
    B("Screening und Sanierung", "Abstriche von Nase, Rachen und Wunden zeigen, ob der Keim vorhanden ist.", "Sanierung (Dekolonisierung) nach ärztlicher Anordnung, meist mehrere Tage: Nasensalbe, desinfizierende Mundspülung, antiseptische Waschungen, täglicher Wäschewechsel.", "Erfolgskontrolle durch mehrere negative Abstriche."),
    B("Schutz im Alltag", "Händedesinfektion ist die wichtigste Maßnahme. Schutzkittel und Handschuhe bei Pflegemaßnahmen, Mund-Nasen-Schutz bei Kontakt mit Nase, Rachen oder beim Absaugen.", "Materialien im Zimmer lassen oder nach Gebrauch desinfizieren.", "Die Meldung richtet sich nach dem Infektionsschutzgesetz und dem Hausstandard. Der Nachweis im Blut oder Liquor ist meldepflichtig."),
    B("Ethik und Gefühl", "Isolierung kann einsam machen. Besuche, Telefon und Beschäftigung ermöglichen. Angehörige informieren, nicht ausgrenzen."),
  ],
};
