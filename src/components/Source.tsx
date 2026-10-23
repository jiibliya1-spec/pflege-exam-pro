"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { asset } from "@/lib/asset";
import { useBank } from "@/lib/bank";
import { Badge, Button, Card, Field, Input, PageHeader } from "./ui";

interface PageText {
  pdfPage: number;
  printedPage: number;
  meanConfidence: number;
  text: string;
}

let pagesCache: Promise<PageText[]> | null = null;
export function loadPageTexts(): Promise<PageText[]> {
  if (!pagesCache) {
    pagesCache = fetch(asset("/data/pages.json"))
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<PageText[]>;
      })
      .catch(() => {
        pagesCache = null;
        return [];
      });
  }
  return pagesCache;
}

export function pageImage(pdfPage: number) {
  return asset(`/source/pages/p${String(pdfPage).padStart(3, "0")}.jpg`);
}

export function SourceViewer({ embedded }: { embedded?: boolean }) {
  const sp = useSearchParams();
  const router = useRouter();
  const bank = useBank();
  const total = bank.bank?.report?.pagesInPdf ?? 333;
  const page = Math.min(total, Math.max(1, Number(sp.get("page")) || 1));
  const [zoom, setZoom] = useState(1);
  const [texts, setTexts] = useState<PageText[]>([]);
  const [jump, setJump] = useState("");
  const [errPage, setErrPage] = useState<number | null>(null);
  const imgError = errPage === page;
  const offset = bank.bank?.report?.printedPageOffset ?? 5;

  useEffect(() => {
    void loadPageTexts().then(setTexts);
  }, []);

  const go = (p: number) => router.push(`/source/?page=${Math.min(total, Math.max(1, p))}`);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight") go(page + 1);
      if (e.key === "ArrowLeft") go(page - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const info = bank.bank?.pages.find((p) => p.pdfPage === page);
  const text = texts.find((t) => t.pdfPage === page);
  const related = bank.questions.filter((q) => q.source.pdfPage === page);
  const caseHere = bank.cases.find((c) => page >= c.source.pdfPage && page <= (c.source.endPdfPage ?? c.source.pdfPage));

  return (
    <>
      {!embedded && (
        <PageHeader
          title="Originalseiten (PDF)"
          subtitle="Scan des Buches „Pflegias Prüfungstraining“ – zum Vergleichen und Prüfen der OCR-Texte."
          crumbs={[{ label: "Start", href: "/" }, { label: "Quelle (PDF)" }]}
        />
      )}
      <div className="mb-4 flex flex-wrap items-end gap-3">
        <Button variant="secondary" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Vorherige Seite">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <form
          className="flex items-end gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const n = Number(jump);
            if (n) go(n);
            setJump("");
          }}
        >
          <Field label={`PDF-Seite (1–${total})`} htmlFor="jump">
            <Input id="jump" inputMode="numeric" className="w-28" placeholder={String(page)} value={jump} onChange={(e) => setJump(e.target.value.replace(/\D/g, ""))} />
          </Field>
          <Button type="submit" variant="secondary">
            Gehe zu
          </Button>
        </form>
        <Button variant="secondary" onClick={() => go(page + 1)} disabled={page >= total} aria-label="Nächste Seite">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))} aria-label="Verkleinern">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center text-sm tabular-nums">{Math.round(zoom * 100)} %</span>
          <Button variant="ghost" size="sm" onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))} aria-label="Vergrößern">
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] [&>*]:min-w-0">
        <Card className="overflow-auto p-2">
          {imgError ? (
            <p className="p-8 text-center text-sm text-muted">Seitenbild konnte nicht geladen werden (public/source/pages/p{String(page).padStart(3, "0")}.jpg).</p>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={pageImage(page)} alt={`Scan der PDF-Seite ${page}`} onError={() => setErrPage(page)} style={{ width: `${zoom * 100}%`, maxWidth: "none" }} className="mx-auto h-auto" />
          )}
        </Card>
        <div className="min-w-0 space-y-4">
          <Card>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-semibold">
                PDF-Seite {page} · Buch S. {page + offset}
              </h2>
              {info && <Badge tone={info.status === "ok" ? "ok" : "warn"}>{info.status === "ok" ? "OCR ok" : info.status === "low-confidence" ? "OCR unsicher" : info.status === "empty" ? "wenig Text" : "nicht verarbeitet"}</Badge>}
              {info && <Badge>{Math.round(info.meanConfidence)} % Konfidenz</Badge>}
            </div>
            {caseHere && (
              <p className="mt-2 text-sm">
                Fall:{" "}
                <Link className="text-teal hover:underline" href={`/cases/view/?id=${caseHere.id}`}>
                  {caseHere.title}
                </Link>
              </p>
            )}
            {related.length > 0 && (
              <p className="mt-2 flex flex-wrap items-center gap-1.5 text-sm">
                Aufgaben auf dieser Seite:
                {related.map((q) => (
                  <Link key={q.id} className="rounded border border-line px-1.5 text-teal hover:bg-surface2" href={`/question/?id=${q.id}`}>
                    {q.label}
                  </Link>
                ))}
              </p>
            )}
          </Card>
          <Card>
            <h2 className="mb-2 font-semibold">OCR-Text dieser Seite</h2>
            {text ? <pre className="max-h-[60vh] max-w-full overflow-auto whitespace-pre-wrap break-words font-sans text-sm leading-relaxed">{text.text || "(kein Text erkannt)"}</pre> : <p className="text-sm text-muted">OCR-Text nicht verfügbar.</p>}
            <p className="mt-2 text-xs text-muted">Automatisch erkannter Text – kann Fehler enthalten. Maßgeblich ist das Seitenbild.</p>
          </Card>
        </div>
      </div>
    </>
  );
}
