/**
 * Zuordnung der Lektionen zu Patientengruppen (Filter in der Lernbibliothek).
 * kinder = überwiegend Kinder und Jugendliche, frauen / maenner = geschlechtsspezifische Erkrankungen,
 * erwachsene = überwiegend Erwachsene, alle = Kinder und Erwachsene können betroffen sein.
 * Eine Lektion kann mehrere Gruppen haben. Das ist eine Lernhilfe zur Orientierung, keine Diagnoseregel.
 */
export type Who = "kinder" | "frauen" | "maenner" | "erwachsene" | "alle";

export const WHO_ORDER: Who[] = ["kinder", "frauen", "maenner", "erwachsene", "alle"];

const E: Who[] = ["erwachsene"];
const A: Who[] = ["alle"];
const K: Who[] = ["kinder"];
const F: Who[] = ["frauen"];
const M: Who[] = ["maenner"];

export const WHO: Record<string, Who[]> = {
  // Ergänzende Krankheitslehre
  "g7-obere-atemwege": A, "g7-kinderinfekte-atemweg": A, "g7-lunge-pleura": E, "g7-hormone-neben": E, "g7-herz-weitere": A, "g7-gefaess-gehirn": E, "g7-speiseroehre-magen": E, "g7-darm-leber-pankreas": E, "g7-niere-harnwege-weitere": A, "g7-maenner-weitere": M, "g7-frauen-entzuendung": F, "g7-frauen-tumoren": F, "g7-blut-lymphom": A, "g7-haut-weitere": A, "g7-virus-kinder-weitere": K, "g7-knochen-weitere": E,
  // Herz und Kreislauf
  hypertonie: E, herzinsuffizienz: E, herzinfarkt: E, pavk: E, thrombose: E, khk: E,
  herzrhythmus: A, "herz-entzuendung": A, hypotonie: A, arterienverschluss: E, aneurysma: E,
  "varikosis-thrombophlebitis": E, "lymph-erysipel": A,
  // Atmung
  asthma: A, copd: E, pneumonie: A, lungenembolie: E, lungenoedem: E, tbc: A, bronchialkarzinom: E, mukoviszidose: A, atemwegsmedikamente: A,
  // Stoffwechsel
  diabetes: A, hypoglykaemie: A, schilddruese: A, "lipide-adipositas": A,
  // Nerven
  schlaganfall: E, parkinson: E, ms: E, epilepsie: A, demenz: E, sht: A, "zns-entzuendung": A, "huntington-als": E, querschnitt: A,
  "kopfschmerz-nerven": A, "anlagestoerung-nerven": K, hydrozephalus: A, "vaskulaere-demenz": E, migraene: A, "kopfschmerz-trigeminus": E,
  // Bewegung
  rheuma: A, osteoporose: ["erwachsene", "frauen"], "bewegungssystem-pflege": A, bandscheibe: E,
  "fraktur-grundlagen": A, "fraktur-komplikationen": A, "fraktur-schaedel-wirbel": A, "distorsion-luxation-amputation": A,
  "arthrose-gelenkersatz": E, "knochen-gelenk-infekt-tumor": A,
  // Verdauung
  crohn: A, leberzirrhose: E, ileus: A, "akutes-abdomen": A, divertikel: E, darmkrebs: E, hepatitis: A, galle: E, pankreatitis: E, hernie: A,
  "reflux-gerd": E, "gastritis-ulkus": E, appendizitis: A, peritonitis: A,
  // Niere
  harnweg: A, niereninsuff: A, glomerulonephritis: A, dialyse: E, "saeure-basen": A, urolithiasis: E, "vur-kinder": K,
  // Psyche
  depression: E, schizophrenie: E, "affektive-stoerung": E, "alkohol-sucht": E, essstoerungen: A, delir: E, "belastung-angst": A, "psych-pflege": A,
  "adhs-kinder": K, "autismus-kinder": K, persoenlichkeitsstoerung: E,
  // Infektion und Notfall
  mrsa: A, kinderkrankheiten: K, clostridien: A, "legionellen-salmonellen": A, reanimation: A, schock: A, sepsis: A, verlegung: A,
  // Haut
  wunden: A, ulcus: E, hauterkrankungen: A, hauttumoren: E, psoriasis: A, neurodermitis: A, "haut-infektionen": A, arzneimittelexanthem: A,
  // Schmerz, Blut
  schmerz: A, palliativ: A, anaemie: A, "leukaemie-lymphom": A, hiv: A, "autoimmun-allergie": A,
  // Sinne
  auge: A, ohr: A, "otitis-media": A, hoerstoerungen: E,
  // Geschlechtsorgane
  "frauen-organe": F, "maenner-organe": M, sti: E, "bph-prostata-op": M,
  // Lebensphasen (Ausbildung)
  "wasser-elektrolyte": A, hirntumor: A, "periphere-nerven-wirbelkanal": E,
  "trisomie-21": K, cvi: E, larynxkarzinom: E, mammakarzinom: F, "colitis-ulcerosa": A, verbrennung: A,
  "g3-sucht-grundlagen": A, "g3-somatoform": A, "g3-borderline-narzissmus": E, "g3-trauma-krisen": A,
  "b-schwangerschaft": F, "b-kind-alter": ["kinder", "erwachsene"],
};

export const WHO_LABEL: Record<Who, string> = {
  kinder: "Kinder",
  frauen: "Frauen",
  maenner: "Männer",
  erwachsene: "Erwachsene",
  alle: "Kinder und Erwachsene",
};
