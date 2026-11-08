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
