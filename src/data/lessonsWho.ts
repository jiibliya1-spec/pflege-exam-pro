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
  "b-schwangerschaft": F, "b-kind-alter": ["kinder", "erwachsene"],
};

export const WHO_LABEL: Record<Who, string> = {
  kinder: "Kinder",
  frauen: "Frauen",
  maenner: "Männer",
  erwachsene: "Erwachsene",
  alle: "Kinder und Erwachsene",
};
