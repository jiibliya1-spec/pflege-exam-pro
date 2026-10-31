import type { Profile } from "../diseaseProfiles";
/** Krankheitsprofile Teil 13: Ergänzungen. */
export const P13: Record<string, Profile> = {
  "trisomie-21": {
    "def": "Trisomie 21: Das Chromosom 21 ist dreifach vorhanden. Folge sind typische Merkmale, geistige Beeinträchtigung und häufige Begleiterkrankungen.",
    "sym": [
      "Schräg stehende Lidachsen, flache Nasenwurzel, große Zunge, Vierfingerfurche",
      "Muskelhypotonie, Trinkschwäche, Entwicklungsverzögerung",
      "Häufig Herzfehler, Hör- und Sehstörungen, Schilddrüsenunterfunktion"
    ],
    "urs": [
      "Zusätzliches Chromosom 21 durch Fehlverteilung der Chromosomen",
      "Risiko steigt mit dem Alter der Mutter"
    ],
    "risk": [],
    "ther": [
      "Keine Heilung; Frühförderung (Physio, Logopädie, Ergo)",
      "Behandlung der Begleiterkrankungen (z. B. Herz-OP, Hörhilfe, Schilddrüsenhormon)"
    ],
    "pfl": [
      "Trink- und Fütterungshilfe, Gewicht kontrollieren",
      "Infekte vermeiden, Impfungen, regelmäßige Kontrollen von Herz, Gehör, Sehen, Schilddrüse",
      "Eltern beraten und entlasten, Selbstständigkeit und Teilhabe fördern"
    ]
  },
  "cvi": {
    "def": "Chronisch venöse Insuffizienz: Das Blut fließt aus den Beinvenen nicht ausreichend zum Herzen zurück; Stauung, Ödeme und Hautschäden folgen.",
    "sym": [
      "Schwere- und Spannungsgefühl, abendliche Beinödeme, nächtliche Wadenkrämpfe",
      "Braune Hautverfärbung, Verhärtung, Stauungsekzem",
      "Spätfolge: Ulcus cruris venosum"
    ],
    "urs": [
      "Defekte Venenklappen, Krampfadern",
      "Frühere Thrombose (postthrombotisches Syndrom)",
      "Bewegungsmangel, langes Stehen oder Sitzen"
    ],
    "risk": [],
    "ther": [
      "Kompression (Verband oder Strümpfe) als Basis",
      "Bewegung, Hochlagern, Gewichtsreduktion",
      "Krampfadern operativ oder durch Verödung behandeln"
    ],
    "pfl": [
      "Kompressionsverband morgens vor dem Aufstehen anlegen, faltenfrei, unten stärker",
      "Vor Kompression Fußpulse prüfen (pAVK ausschließen)",
      "Hautpflege, Beine täglich kontrollieren, Bewegung anleiten",
      "Einseitige Schwellung, Rötung, Schmerz sofort melden (Thromboseverdacht)"
    ]
  },
  "larynxkarzinom": {
    "def": "Bösartiger Tumor des Kehlkopfes, meist durch Rauchen und Alkohol. Bei vollständiger Entfernung bleibt ein dauerhaftes Tracheostoma.",
    "sym": [
      "Heiserkeit über etwa drei Wochen, Räusperzwang",
      "Fremdkörpergefühl, Schluckbeschwerden",
      "Atemnot, Bluthusten, Halslymphknoten im späteren Stadium"
    ],
    "urs": [
      "Rauchen und Alkohol, besonders kombiniert",
      "Männer häufiger betroffen"
    ],
    "risk": [],
    "ther": [
      "Frühe Tumoren: Laser oder Bestrahlung, Stimme oft erhaltbar",
      "Fortgeschritten: Laryngektomie, Neck Dissection, Strahlen- und Chemotherapie",
      "Ersatzstimme: Ösophagusstimme, Stimmprothese, elektronische Hilfe"
    ],
    "pfl": [
      "Stoma freihalten, bei Bedarf absaugen, Luft befeuchten",
      "Stomapflege und Hautbeobachtung, Kanülenpflege nach Standard",
      "Kommunikation über Tafel und Karten, Klingel in Reichweite",
      "Schluckfähigkeit prüfen, Ernährung und Gewicht beobachten",
      "Psychische Begleitung, Rauch- und Alkoholverzicht beraten"
    ]
  },
  "mammakarzinom": {
    "def": "Bösartiger Tumor der Brustdrüse, häufigste Krebserkrankung der Frau.",
    "sym": [
      "Derber, kaum verschieblicher Knoten",
      "Hauteinziehung, Orangenhaut, Veränderung oder Sekret der Brustwarze",
      "Größen- oder Formunterschied der Brüste"
    ],
    "urs": [
      "Höheres Alter, familiäre Belastung (BRCA), Hormone",
      "Übergewicht, Alkohol"
    ],
    "risk": [],
    "ther": [
      "Operation (brusterhaltend oder Mastektomie), Wächterlymphknoten",
      "Bestrahlung, Chemo-, Antihormon- und Antikörpertherapie je nach Tumor",
      "Nachsorge über Jahre"
    ],
    "pfl": [
      "Wunde und Drainagen beobachten, Schmerzen lindern",
      "Lymphödem vorbeugen: am operierten Arm keine Blutdruckmessung, Blutentnahme oder Injektion",
      "Arm früh mobilisieren, Krankengymnastik",
      "Seelische Begleitung, Körperbild, Selbsthilfegruppen und Breast Care Nurse"
    ]
  },
  "colitis-ulcerosa": {
    "def": "Chronisch-entzündliche Dickdarmerkrankung in Schüben mit Befall von Mastdarm und Dickdarm, vor allem der Schleimhaut.",
    "sym": [
      "Blutig-schleimige Durchfälle, Stuhldrang",
      "Krampfartige Bauchschmerzen, Fieber, Gewichtsverlust, Blutarmut",
      "Gelenk-, Haut- und Augenbeteiligung möglich"
    ],
    "urs": [
      "Unklar: Veranlagung, Immunsystem und Umwelt",
      "Beginn oft im jungen Erwachsenenalter"
    ],
    "risk": [],
    "ther": [
      "Mesalazin im Schub, Kortison bei starkem Schub",
      "Immunsuppressiva oder Biologika bei schwerem Verlauf",
      "Kolektomie bei Komplikationen oder Therapieversagen, Darmspiegelungen zur Kontrolle"
    ],
    "pfl": [
      "Stuhl beobachten und dokumentieren, Flüssigkeit bilanzieren",
      "Hautpflege im Analbereich, Toilette nah, Privatsphäre",
      "Leichte Kost im Schub, ausreichend Kalorien, Gewicht kontrollieren",
      "Warnzeichen melden: hartes aufgeblähtes Abdomen, Fieber, Kreislaufprobleme",
      "Psychische Belastung ernst nehmen, Stomaberatung"
    ]
  },
  "verbrennung": {
    "def": "Hitze-, Strom- oder Chemikalienschädigung der Haut; Verbrühung durch heiße Flüssigkeit. Tiefe und Ausdehnung bestimmen den Schweregrad.",
    "sym": [
      "Grad 1: Rötung; Grad 2: Blasen, starker Schmerz; Grad 3: weiß oder schwarz, schmerzlos",
      "Bei großen Flächen: Flüssigkeitsverlust, Schock, Auskühlung",
      "Inhalationstrauma: Ruß, Heiserkeit, Atemnot"
    ],
    "urs": [
      "Feuer, Heißes Wasser oder Dampf, Strom, Chemikalien",
      "Kleinkinder häufig durch Verbrühung im Haushalt"
    ],
    "risk": [],
    "ther": [
      "Erste Hilfe: Kleidung löschen, kurz mit lauwarmem Wasser kühlen, keimfrei abdecken",
      "Volumentherapie nach Formel, Schmerztherapie, ggf. Intubation",
      "Wundversorgung, Hauttransplantation bei Grad 3, Brandverletzungszentrum bei großen Verbrennungen"
    ],
    "pfl": [
      "Vitalzeichen, Urinmenge und Flüssigkeitsbilanz engmaschig kontrollieren",
      "Warm halten, Schmerzen vor Verbandwechsel behandeln",
      "Steriles Arbeiten, Infektionszeichen beobachten",
      "Lagerung und Mobilisation gegen Kontrakturen, Narbenpflege",
      "Hoher Eiweiß- und Kalorienbedarf; psychische Begleitung; Vorbeugung im Haushalt beraten"
    ]
  }
};
