#!/bin/bash
# Einzelne PDF-Seiten neu per OCR verarbeiten und den Import neu laufen lassen.
# Aufruf:  PDF=/pfad/buch.pdf scripts/rerun_pages.sh 12 13 40
# Voraussetzung: tesseract (deu.traineddata, best_int empfohlen) + poppler-utils.
set -e
cd "$(dirname "$0")/.."
WORK=${OCR_WORK:-scripts/ocr}
for n in "$@"; do rm -f "$WORK/ocr/p$(printf %03d "$n").tsv"; done
bash "$WORK/ocr_all.sh"
python3 -I scripts/import_pdf.py --ocr "$WORK/ocr" --out public/data
