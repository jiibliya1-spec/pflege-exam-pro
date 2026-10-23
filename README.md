# Pflege Exam Pro

Prüfungstrainer für die Pflegefachfrau/-mann-Prüfung auf Basis des Scans „Pflegias Prüfungstraining“.
Statische Web-App (Next.js 16, TypeScript, Tailwind 4, zod). Kein Server und keine Datenbank nötig:
Die Fragenbank liegt als JSON in `public/data/`, der Lernfortschritt im Browser (IndexedDB, Fallback localStorage).

## Schnellstart

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck && npm run lint && npm test
npm run build        # statischer Export nach ./out
```

Umgebungsvariablen: keine erforderlich. Optional `NEXT_PUBLIC_BASE_PATH=/unterpfad` für Hosting in einem Unterverzeichnis.

## Quelltreue – was die App garantiert und was nicht

- Aufgabentexte, Reihenfolge, Punkte, AB-Stufen und Seitenzahlen stammen aus dem Scan (OCR). Der Original-OCR-Text bleibt als `originalText` erhalten.
- Das PDF ist ein reiner Bildscan (kein Textlayer, ~83 ppi). OCR-Fehler sind **zu erwarten**; unsichere Seiten/Aufgaben stehen in der Review-Queue (`/admin/review`).
- **Nichts gilt als verifiziert, bevor es im Adminbereich gegen die Seite geprüft wurde.** Aktuell: 0 verifizierte Antworten.
- Das PDF enthält nur die gedruckten Seiten 6–338 (PDF-Seite = Buchseite − 5). Die mündlichen Übersichtsseiten, drei mündliche Fälle laut Inhaltsverzeichnis und Kapitel 4 fehlen in der Vorlage und können nicht importiert werden.
- Die Bestehensgrenze ist eine **App-Einstellung** (Standard 60 %), keine amtliche Regel.

## Bewertungsrichtlinie

Siehe Kopfkommentar in `src/lib/grading.ts`: Auswahlfragen nur mit verifiziertem Schlüssel (Teilpunkte bei Multiple-Select, nie negativ); offene/Tabellen-Aufgaben per Selbstbewertung gegen die Musterlösung; „unbewertet“ zählt nicht in den Prozentwert; unbeantwortete bewertbare Fragen zählen 0.
Das Buch besteht überwiegend aus offenen Fallaufgaben, daher sind aktuell alle importierten Fragen vom Typ „offen“ bzw. „Tabelle“ (Auswahlfragen werden unterstützt, kommen im Quellmaterial aber nicht vor).

## Import-Pipeline (restartbar)

Voraussetzungen: `tesseract` mit `deu.traineddata` (Modell *tessdata_best*; `TESSDATA_PREFIX` setzen), `poppler-utils`, Python 3.

```bash
PDF=/pfad/Pflege_examen_pro_.pdf scripts/ocr/ocr_all.sh   # OCR je Seite → ocr/pNNN.tsv (überspringt vorhandene)
python3 -I scripts/import_pdf.py --ocr scripts/ocr/ocr --out public/data
PDF=... scripts/rerun_pages.sh 12 40                       # einzelne Seiten neu verarbeiten
```

Ergebnis: `public/data/bank.json` (Kapitel, Fälle, Fragen, Importbericht) und `pages.json` (OCR-Text je Seite).
Die Kapitelstruktur (`scripts/curriculum.py`) wurde manuell aus dem Inhaltsverzeichnis übertragen, weil OCR-Überschriften unzuverlässig sind.
Seitenbilder liegen unter `public/source/pages/` (333 JPEGs, ~37 MB).

## Adminbereich

`/admin` (Importbericht, Abdeckung, Exportierbarer Bericht) und `/admin/review` (OCR-Text korrigieren, Antwort verifizieren, freigeben/verwerfen, Seiten zur Neuverarbeitung markieren, Aufgaben manuell ergänzen). Änderungen werden als Überlagerung im lokalen Nutzerzustand gespeichert und lassen sich exportieren; die Originaldaten werden nicht überschrieben. Es gibt bewusst **keine Server-Authentifizierung** – der Admin-Bereich schützt nichts vor Personen mit Zugriff auf das Gerät.

## Daten & Datenschutz

Alles bleibt im Browser. Einstellungen → Export (JSON), Import, Zurücksetzen, Löschen (jeweils mit Bestätigung). Browser-Speicher kann vom Nutzer/Browser gelöscht werden – regelmäßig exportieren.

## Deployment

`npm run build` erzeugt `out/`. Dieses Verzeichnis auf einen beliebigen Static-Host legen (Cloudflare Pages, Netlify, GitHub Pages, nginx). Build-Befehl: `npm run build`, Output: `out`. Für Unterpfade `NEXT_PUBLIC_BASE_PATH` setzen.
Hinweis: Der Scan ist urheberrechtlich geschützt – Seitenbilder nur nutzen/veröffentlichen, wenn Sie dazu berechtigt sind (sonst `public/source/` vor dem Deployment entfernen; die Seitenansicht zeigt dann Fehlerhinweise).

## Tests

`npm test` (Vitest, 26 Tests): Bewertung, Prüfungsaufbau, Fallgruppierung, Zufall (Seed), Zeitlimit, Quellenfilter, Leitner-SRS, Import-Validierung inkl. der ausgelieferten `bank.json`, Einstellungs-Persistenz, beschädigte Daten.

## Hinweis zu diesem Repository

Aus Größen- und Urheberrechtsgründen sind `public/source/` (Seitenbilder), `public/data/*.json` (generierte Fragenbank, ca. 1,2 MB) und `package-lock.json` nicht eingecheckt. Nach dem Klonen: `npm install`, die Import-Pipeline (siehe oben) mit dem eigenen PDF ausführen, um `public/data/` und `public/source/pages/` zu erzeugen, danach `npm run build`. Ohne `bank.json` zeigt die App eine Leer-Ansicht, und der Test gegen die ausgelieferte `bank.json` in `tests/data.test.ts` schlägt fehl.
