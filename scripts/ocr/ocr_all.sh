#!/bin/bash
# usage: ocr_all.sh  -> OCR all pages into ocr/pNNN.txt and .tsv (restartable)
P=${PDF:-Pflege_examen_pro_.pdf}  # Pfad zur Quell-PDF per Umgebungsvariable PDF setzen
cd "$(dirname "$0")"; mkdir -p ocr img
export TESSDATA_PREFIX=$PWD OMP_THREAD_LIMIT=1
one() { n=$1; f=$(printf "%03d" $n)
  [ -s ocr/p$f.tsv ] && return
  pdftoppm -f $n -l $n -r 200 -gray -png "$P" img/p$f >/dev/null 2>&1
  img=$(ls img/p$f*.png | head -1)
  tesseract "$img" ocr/p$f -l deu --psm 4 tsv >/dev/null 2>&1
  rm -f "$img"; }
export -f one; export P
seq 1 333 | xargs -P $(nproc) -I{} bash -c 'one {}'
echo DONE > ocr/_done
