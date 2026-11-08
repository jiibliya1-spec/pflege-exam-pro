/**
 * Welche Organe/Strukturen im 3D-Modell zu einer Krankheits-Lektion gezeigt werden (nur das betroffene Organ, nicht das ganze System).
 * Schlüssel: Lektions-ID. Werte: Atlas-key und Strukturnamen aus dem jeweiligen BodyParts3D-Modell.
 */
export interface LessonOrgan { atlas: string; ids: string[] }
const BR = ["trachea", "right-main-bronchus", "left-main-bronchus", "ru-bronchi", "rm-bronchi", "rl-bronchi", "lu-bronchi", "ll-bronchi"];
const KID = ["right-kidney", "left-kidney"];
const LIVER = ["liver-caudate", "liver-segments-2-3", "liver-segment-4", "liver-segment-5", "liver-segment-6", "liver-segment-8"];
const LOBES = ["frontal-lobe", "parietal-lobe", "temporal-lobe", "occipital-lobe"];
const AORTA = ["ascending-aorta", "aortic-arch", "descending-thoracic-aorta"];
const COR = ["left-main-coronary-artery", "left-anterior-descending-artery", "circumflex-artery", "right-coronary-artery"];
const HEARTCH = ["left-ventricle", "right-ventricle", "left-atrium", "right-atrium"];
const MARROW = ["sternum-ribs", "vertebral-column", "pelvis", "femur-humerus"];
const BONES_LEG = ["femur", "tibia", "fibula", "patella"];
const R = (atlas: string, ids: string[]): LessonOrgan => ({ atlas, ids });

export const LESSON_ORGANS: Record<string, LessonOrgan> = {
  // Herz-Kreislauf
  herzinfarkt: R("heart", ["left-ventricle", ...COR]), khk: R("heart", COR), herzinsuffizienz: R("heart", HEARTCH),
  herzrhythmus: R("heart", ["right-atrium-wall", "left-atrium-wall", "ventricular-wall"]),
  "herz-entzuendung": R("heart", ["ventricular-wall", "mitral-valve", "aortic-valve", "tricuspid-valve", "pulmonary-valve"]),
  hypertonie: R("heart", ["left-ventricle", ...AORTA]), hypotonie: R("heart", ["left-ventricle", ...AORTA]), aneurysma: R("heart", AORTA),
  arterienverschluss: R("blood", ["aorta", "aortic-branches", "iliac-arteries"]), pavk: R("blood", ["aorta", "iliac-arteries"]),
  thrombose: R("blood", ["vena-cava", "iliac-veins"]), "varikosis-thrombophlebitis": R("blood", ["iliac-veins", "vena-cava"]),
  reanimation: R("heart", HEARTCH),
  // Atmung
  asthma: R("resp", BR), copd: R("resp", BR), pneumonie: R("resp", BR), tbc: R("resp", BR), bronchialkarzinom: R("resp", BR), mukoviszidose: R("resp", BR), lungenoedem: R("resp", BR), atemwegsmedikamente: R("resp", BR),
  lungenembolie: R("resp", ["pulmonary-trunk", "right-pulmonary-artery", "left-pulmonary-artery"]),
  verlegung: R("resp", ["epiglottis", "thyroid-cartilage", "cricoid-cartilage", "trachea"]),
  // Verdauung
  appendizitis: R("digestive", ["appendix", "ileocecal-junction", "ascending-colon"]), crohn: R("digestive", ["ileum", "ileocecal-junction", "ascending-colon"]),
  darmkrebs: R("digestive", ["ascending-colon", "transverse-colon", "descending-colon", "rectum"]), divertikel: R("digestive", ["descending-colon"]),
  galle: R("digestive", ["gallbladder", "extrahepatic-bile-ducts", "intrahepatic-bile-ducts", "duodenum"]), "gastritis-ulkus": R("digestive", ["stomach", "duodenum"]),
  "reflux-gerd": R("digestive", ["esophagus", "stomach"]), hepatitis: R("digestive", LIVER), leberzirrhose: R("digestive", [...LIVER, "portal-vein"]),
  ileus: R("digestive", ["jejunum", "ileum", "ascending-colon", "transverse-colon", "descending-colon"]), pankreatitis: R("digestive", ["pancreas", "pancreatic-duct", "duodenum"]),
  peritonitis: R("digestive", ["mesenteries", "jejunum", "ileum"]), "akutes-abdomen": R("digestive", ["stomach", "gallbladder", "pancreas", "appendix", "jejunum", "ileum"]),
  // Harnsystem
  dialyse: R("urinary", KID), glomerulonephritis: R("urinary", KID), niereninsuff: R("urinary", KID), "saeure-basen": R("urinary", KID), "wasser-elektrolyte": R("urinary", KID),
  harnweg: R("urinary", ["bladder", "right-ureter", "left-ureter", "urethra", ...KID]), urolithiasis: R("urinary", [...KID, "right-ureter", "left-ureter", "bladder"]),
  "vur-kinder": R("urinary", ["bladder", "right-ureter", "left-ureter", ...KID]),
  // Stoffwechsel
  diabetes: R("endocrine", ["pancreas", "pancreatic-duct"]), hypoglykaemie: R("endocrine", ["pancreas"]),
  // Nerven
  schlaganfall: R("nervous", LOBES), demenz: R("nervous", ["hippocampus", "temporal-lobe", "frontal-lobe"]), "vaskulaere-demenz": R("nervous", ["hippocampus", "temporal-lobe", "frontal-lobe"]),
  parkinson: R("nervous", ["midbrain", "caudate-nucleus", "putamen", "globus-pallidus"]), epilepsie: R("nervous", ["temporal-lobe", "hippocampus", "amygdala"]),
  hirntumor: R("nervous", LOBES), sht: R("nervous", LOBES), "zns-entzuendung": R("nervous", LOBES),
  hydrozephalus: R("nervous", ["lateral-ventricles", "third-ventricle", "fourth-ventricle", "choroid-plexus"]),
  ms: R("nervous", ["cerebral-white-matter", "corpus-callosum", "optic-nerves"]), "huntington-als": R("nervous", ["caudate-nucleus", "putamen"]),
  // Bewegungsapparat
  "arthrose-gelenkersatz": R("musculoskeletal", ["hip-bone", ...BONES_LEG]), bandscheibe: R("musculoskeletal", ["lumbar-spine", "intervertebral-discs", "sacrum"]),
  osteoporose: R("musculoskeletal", ["thoracic-spine", "lumbar-spine", "femur", "radius"]),
  "fraktur-grundlagen": R("musculoskeletal", ["humerus", "radius", "ulna", "femur", "tibia", "fibula"]), "fraktur-komplikationen": R("musculoskeletal", ["humerus", "radius", "ulna", "femur", "tibia", "fibula"]),
  "fraktur-schaedel-wirbel": R("musculoskeletal", ["skull", "cervical-spine", "thoracic-spine", "lumbar-spine", "hip-bone", "sacrum"]),
  "distorsion-luxation-amputation": R("musculoskeletal", ["humerus", "radius", "ulna", "femur", "tibia", "fibula", "tarsals"]),
  rheuma: R("musculoskeletal", ["radius", "ulna", "carpals", "metacarpals", "hand-phalanges"]),
  "knochen-gelenk-infekt-tumor": R("musculoskeletal", ["femur", "tibia", "hip-bone", "lumbar-spine"]),
  // Blut und Immunsystem
  anaemie: R("blood", MARROW), "leukaemie-lymphom": R("blood", [...MARROW, "spleen"]), "autoimmun-allergie": R("blood", ["spleen", "thymus"]), hiv: R("blood", ["thymus", "spleen"]),
  // Fortpflanzung
  "bph-prostata-op": R("reproductive", ["prostate", "urinary-bladder", "urethra"]), "maenner-organe": R("reproductive", ["testes", "epididymis", "deferent-ducts", "seminal-vesicles", "prostate"]),
  sti: R("reproductive", ["urethra", "testes", "epididymis", "prostate"]),
  // Haut
  arzneimittelexanthem: R("skin", ["skin"]), "haut-infektionen": R("skin", ["skin"]), hauterkrankungen: R("skin", ["skin"]), hauttumoren: R("skin", ["skin"]),
  neurodermitis: R("skin", ["skin"]), psoriasis: R("skin", ["skin"]), wunden: R("skin", ["skin"]), ulcus: R("skin", ["skin", "lower-leg-bones", "foot-bones"]),
};
