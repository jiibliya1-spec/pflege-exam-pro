# 3D-Modelle: Quellen und Lizenz

## heart.glb

**BodyParts3D, © The Database Center for Life Science (DBCLS), Lizenz CC BY 4.0.**

- Lizenz: https://creativecommons.org/licenses/by/4.0/ (DBCLS: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html)
- Datensatz: BodyParts3D 4.0, https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
- Zitat: Mitsuhashi N, Fujieda K, Tamura T, Kawamoto S, Takagi T, Okubo K. BodyParts3D: 3D structure database for anatomical concepts. Nucleic Acids Res. 2009;37(Database issue):D782-5. doi:10.1093/nar/gkn613
- Es handelt sich um die Referenzanatomie eines erwachsenen Mannes, kein klinisches Werkzeug.

Bearbeitungen (nach CC BY 4.0 kenntlich gemacht): Die OBJ-Elemente wurden von „Human Atlas“ (github.com/ashemag/human-atlas, Daten CC BY 4.0, Code MIT) in Meter/Y-oben umgerechnet und vereinfacht. Das Projekt github.com/Niyaz-05/heart-anatomy-lab (MIT) hat daraus 142 Herz- und Gefäßelemente ausgewählt, zu 34 benannten Strukturen zusammengefasst und auf den Mittelpunkt der Herzwand zentriert. Dieses Projekt nutzt die Datei unverändert in der Geometrie; Farben und Beschriftungen kommen aus der App.

## resp.glb (Atmungssystem)

- Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0 (https://lifesciencedb.jp/bp3d/), bezogen über Human Atlas (ashemag/human-atlas).
- Enthalten: Nasenskelett, Kehlkopfknorpel, Trachea, Haupt- und Lappenbronchien, Pulmonalgefäße, Zwerchfell (30 Strukturen).
- Nicht im Modell: Lungenoberfläche, Pleura, Alveolen, Rachen. Dafür gibt es beschriftete Schemazeichnungen (keine 3D-Daten).
- Verarbeitung: `tools/extract-resp.mjs`; Element-IDs und Prüfsummen in `resp.provenance.json`.

## urinary.glb (Harnsystem)

- Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0 (https://lifesciencedb.jp/bp3d/), bezogen über Human Atlas (ashemag/human-atlas).
- Enthalten: Nieren, Nebennieren, Harnleiter (mit Nierenkelchen und Nierenbecken), Harnblase, Harnröhre, Prostata, Nierenarterien und -venen, Bauchaorta, untere Hohlvene, Beckengefäße, Kreuzbein (18 Strukturen). Referenzanatomie eines Mannes.
- Nicht im Modell: Nierenrinde und -mark, Nephron, Nierenhüllen, Blasenwand-Schichten, Schließmuskeln, weibliche Harnröhre. Dafür gibt es beschriftete Schemazeichnungen (keine 3D-Daten).
- Verarbeitung: `tools/extract-urinary.mjs`; Element-IDs und Prüfsummen in `urinary.provenance.json`.

## digestive.glb (Verdauungssystem)

- Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0 (https://lifesciencedb.jp/bp3d/), bezogen über Human Atlas (ashemag/human-atlas).
- Enthalten: Zunge, Unterkiefer- und Unterzungenspeicheldrüsen, Speiseröhre, Magen, Zwölffingerdarm, Leer- und Krummdarm, Ileozäkalklappe, Wurmfortsatz, Dickdarmabschnitte und Dickdarmbänder, Leber (als Segmente II bis VI und VIII sowie Lobus caudatus), Gallenblase und Gallenwege, Bauchspeicheldrüse mit Gang, Milz, Bauchorgan-Arterien, Pfortadersystem und Lebervenen, Gekröse, Zwerchfell (41 Strukturen). Referenzanatomie eines Mannes.
- Bewusst ausgelassen (mehrdeutig oder doppelte Geometrie): Hepatovenous segment VII (FJ2409) und IX (FJ1858), Pankreas-Parenchym und Gangbaum (FJ2629, FJ2630), FJ3082, FJ1846, FJ2013.
- Nicht im Modell: Mundboden und Rachen, Ohrspeicheldrüse, Sigmoid, Analkanal, Hauptgallengang, Peritoneum, Wandschichten, Zotten. Dafür gibt es ein beschriftetes Schema (keine 3D-Daten).
- Verarbeitung: `tools/extract-digestive.mjs`; Element-IDs und Prüfsummen in `digestive.provenance.json`.

## nervous.glb (Nervensystem)
Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0, über Human Atlas. 33 benannte Strukturen (Gehirn, Ventrikel, Sehbahn, Hypophyse, Zirbeldrüse, Schädel), gruppiert und zusammengeführt mit `tools/extract-model.mjs` und `tools/defs/nervous.json`; Herkunft je Struktur in `nervous.provenance.json`. Nicht im Quellmodell: Rückenmark, periphere Nerven, Hirnhäute, Hirngefäße.

## musculoskeletal.glb (Bewegungsapparat)
Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0, über Human Atlas. 58 benannte Strukturen (Skelett, Bandscheiben, ausgewählte Muskelgruppen, Hautkontur), rechts und links je Struktur zusammengeführt mit `tools/extract-model.mjs` und `tools/defs/musculoskeletal.json`; Herkunft in `musculoskeletal.provenance.json`. Nicht enthalten: Steißbein, Bänder (außer Tractus iliotibialis und Achillessehne), Gelenkknorpel, Menisken, Latissimus, gerader und innere Bauchmuskeln, Kau- und Mimikmuskeln, Binnenmuskeln von Hand und Fuß, äußerer schräger Bauchmuskel (Dateigröße). Einige Röhrenknochen sind im Quellmodell stark vereinfacht.

## endocrine.glb (Endokrines System)
Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0, über Human Atlas. 18 benannte Strukturen (Hypothalamus, Hypophyse, Zirbeldrüse, Nebennieren, Bauchspeicheldrüse, Thymus, Hoden; Orientierung: Nieren, Magen, Zwölffingerdarm, Gallenblase, Luftröhre, Schildknorpel, Skelett), erzeugt mit `tools/extract-model.mjs` und `tools/defs/endocrine.json`; Herkunft in `endocrine.provenance.json`. Nicht im Quellmodell: Schilddrüse, Nebenschilddrüsen, Eierstöcke.

## reproductive.glb (Fortpflanzungssystem)
Quelle: BodyParts3D 4.0, © DBCLS, CC BY 4.0, über Human Atlas. 16 benannte Strukturen: NUR männliche Organe (Hoden, Nebenhoden, Samenleiter, Bläschendrüsen, Prostata, Schwellkörper, Eichel), Harnwege, Enddarm, Beckenboden, Becken (Orientierung). Erzeugt mit `tools/extract-model.mjs` und `tools/defs/reproductive.json`. Weibliche Organe fehlen im Quellmodell und werden im Atlas nur als gekennzeichnetes Schema (kein 3D-Modell) gezeigt.
