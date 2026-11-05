"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, ShieldCheck, TriangleAlert } from "lucide-react";
import { useBank } from "@/lib/bank";
import { useStore } from "@/lib/store";
import { TYPE_LABELS } from "@/lib/exam";
import type { QuestionType } from "@/lib/types";
import { Badge, Button, Card, EmptyState, LinkButton, Notice, PageHeader, Progress, Spinner, StatCard } from "./ui";

function download(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

const csv = (rows: (string | number)[][]) => rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""').replace(/\n/g, " ")}"`).join(";")).join("\n");

export function Admin() {
  const bank = useBank();
  const { state, dispatch } = useStore();
  const [pageInput, setPageInput] = useState("");
  if (bank.status === "loading") return <Spinner />;
  if (!bank.bank)
    return (
      <>
        <PageHeader title="Import & Qualität" />
        <EmptyState icon={<ShieldCheck className="h-6 w-6" />} title="Keine Fragenbank gefunden">
          {bank.error ?? "Führen Sie den Import aus (siehe README): python3 scripts/import_pdf.py …"}
        </EmptyState>
      </>
    );
  const r = bank.bank.report;
  const qs = bank.questions;
  const reviewQs = qs.filter((q) => q.extraction.status === "review");
  const approved = qs.filter((q) => q.extraction.status === "approved").length;
  const rejected = qs.filter((q) => q.extraction.status === "rejected").length;
  const verified = qs.filter((q) => q.modelAnswer?.status === "verified").length;
  const withAnswer = qs.filter((q) => q.modelAnswer?.text?.trim()).length;
  const pages = bank.bank.pages;
  const badPages = pages.filter((p) => p.status !== "ok");
  const types = qs.reduce<Record<string, number>>((m, q) => ((m[q.type] = (m[q.type] ?? 0) + 1), m), {});

  function exportReport() {
    const unresolved = reviewQs.map((q) => [q.id, q.source.pdfPage, q.label, q.extraction.confidence, (q.extraction.notes ?? []).join(" | ")]);
    const casesWithoutQuestions = bank.cases.filter((c) => !qs.some((q) => q.caseId === c.id)).map((c) => [`Fall ohne Aufgaben: ${c.title}`, c.source.pdfPage, "", "", ""]);
    const missing = badPages.map((p) => [`Seite ${p.status}`, p.pdfPage, "", p.meanConfidence, p.note ?? ""]);
    const body = csv([["Eintrag", "PDF-Seite", "Aufgabe", "OCR-Konfidenz", "Hinweise"], ...unresolved, ...casesWithoutQuestions, ...missing, ...r.notes.filter((n) => n.startsWith("Im PDF fehlen")).map((n) => [n, "", "", "", ""])]);
    download(`pflege-exam-pro-importbericht-${new Date().toISOString().slice(0, 10)}.csv`, "﻿" + body, "text/csv;charset=utf-8");
    download(`pflege-exam-pro-importbericht-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify({ report: r, unresolved: reviewQs.map((q) => ({ id: q.id, page: q.source.pdfPage, notes: q.extraction.notes })), badPages, rerunRequested: state.rerunPages }, null, 2), "application/json");
  }

  function addRerun() {
    const nums = pageInput.split(/[ ,;]+/).flatMap((t) => {
      const m = t.match(/^(\d+)-(\d+)$/);
      if (m) return Array.from({ length: Math.max(0, Number(m[2]) - Number(m[1]) + 1) }, (_, i) => Number(m[1]) + i);
      return /^\d+$/.test(t) ? [Number(t)] : [];
    }).filter((n) => n >= 1 && n <= r.pagesInPdf);
    if (nums.length) dispatch({ type: "rerun-pages", pages: [...state.rerunPages, ...nums] });
    setPageInput("");
  }

  const cmd = state.rerunPages.length ? `scripts/rerun_pages.sh ${state.rerunPages.join(" ")}` : "";

  return (
    <>
      <PageHeader
        title="Import & Qualität"
        subtitle="Transparenter Bericht über die PDF-Extraktion. Nichts hier gilt als vollständig geprüft, solange es nicht ausdrücklich verifiziert wurde."
        crumbs={[{ label: "Start", href: "/" }, { label: "Import & Qualität" }]}
        actions={
          <>
            <Button variant="secondary" onClick={exportReport}>
              <Download className="h-4 w-4" aria-hidden /> Bericht exportieren
            </Button>
            <LinkButton href="/admin/review/">Review-Queue ({reviewQs.length})</LinkButton>
          </>
        }
      />

      <Notice tone="warn" title="Abdeckung nicht verifiziert">
        Das PDF ist ein Foto-Scan ohne Textebene. Alle Texte stammen aus automatischer Texterkennung (OCR, {r.ocr.engine}, Sprache {r.ocr.language}, {r.ocr.dpi} dpi) und können Fehler enthalten. Die App behauptet <strong>nicht</strong>, dass das gesamte Buch korrekt importiert wurde.
      </Notice>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="PDF-Seiten verarbeitet" value={`${r.pagesProcessed} / ${r.pagesInPdf}`} hint={`gedruckte Seiten ${1 + r.printedPageOffset!}–${r.pagesInPdf + r.printedPageOffset!}`} />
        <StatCard label="Kapitel / Fallbeispiele" value={`${r.chapters} / ${bank.cases.length}`} />
        <StatCard label="Aufgaben extrahiert" value={qs.length} hint={`${Object.entries(types).map(([t, n]) => `${n}× ${TYPE_LABELS[t as QuestionType]}`).join(", ")}`} />
        <StatCard label="Musterlösungen" value={`${withAnswer} / ${qs.length}`} hint={`${verified} verifiziert`} />
        <StatCard label="Zur Prüfung markiert" value={reviewQs.length} hint="OCR unsicher oder unvollständig" />
        <StatCard label="Freigegeben / verworfen" value={`${approved} / ${rejected}`} />
        <StatCard label="Seiten mit Auffälligkeit" value={badPages.length} hint="niedrige Konfidenz / leer / Fehler" />
        <StatCard label="Berichtsstand" value={new Date(r.generatedAt).toLocaleDateString("de-DE")} hint={r.sourceFile} />
      </div>
      <Card className="mt-4">
        <p className="text-sm font-medium">Anteil geprüfter Aufgaben</p>
        <Progress value={qs.length ? ((approved + qs.filter((q) => q.modelAnswer?.status === "verified").length) / (qs.length * 2)) * 100 : 0} label="Prüfungsfortschritt" className="mt-2" />
        <p className="mt-1 text-xs text-muted">Zählt Freigaben und verifizierte Musterlösungen (je 50 %). Aktuell {approved} freigegeben, {verified} Musterlösungen verifiziert.</p>
      </Card>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="mb-2 flex items-center gap-2 font-semibold">
            <TriangleAlert className="h-4 w-4 text-warn" aria-hidden /> Nicht im PDF enthalten
          </h2>
          <p className="text-sm text-muted">Laut Inhaltsverzeichnis fehlen (jenseits gedruckter Seite 338):</p>
          <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm">
            {(r.notes.find((n) => n.startsWith("Im PDF fehlen"))?.replace("Im PDF fehlen laut Inhaltsverzeichnis: ", "").split("; ") ?? []).map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="mb-2 font-semibold">Hinweise des Imports</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {r.notes.filter((n) => !n.startsWith("Im PDF fehlen")).map((n, i) => (
              <li key={i}>{n}</li>
            ))}
            {r.errors.map((n, i) => (
              <li key={`e${i}`} className="text-bad">{n}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="mb-2 font-semibold">Fälle & Extraktion</h2>
          <div className="max-h-80 overflow-y-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Fälle und Aufgabenzahl</caption>
              <thead className="text-xs text-muted">
                <tr><th className="py-1 pr-2">Fall</th><th className="py-1 pr-2">Seiten</th><th className="py-1 pr-2">Aufg.</th><th className="py-1">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-line">
                {bank.cases.map((c) => {
                  const n = qs.filter((q) => q.caseId === c.id);
                  const rev = n.filter((q) => q.extraction.status === "review").length;
                  return (
                    <tr key={c.id}>
                      <td className="py-1.5 pr-2"><Link className="hover:underline" href={`/cases/view/?id=${c.id}`}>{c.title}</Link></td>
                      <td className="py-1.5 pr-2 tabular-nums">{c.source.pdfPage}–{c.source.endPdfPage}</td>
                      <td className="py-1.5 pr-2 tabular-nums">{n.length}</td>
                      <td className="py-1.5">{n.length === 0 ? <Badge tone="bad">keine</Badge> : rev ? <Badge tone="warn">{rev} prüfen</Badge> : <Badge tone="ok">ok</Badge>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <h2 className="mb-2 font-semibold">Seiten neu verarbeiten</h2>
          <p className="text-sm text-muted">
            Die OCR läuft nicht im Browser. Merken Sie Seiten vor und führen Sie anschließend den angezeigten Befehl im Projektordner aus – er löscht die OCR-Ergebnisse dieser Seiten, führt sie neu aus und startet den Import erneut (Ihre Admin-Korrekturen bleiben erhalten, da sie nur im Browser liegen).
          </p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); addRerun(); }}>
            <input aria-label="Seiten (z. B. 41, 45-47)" value={pageInput} onChange={(e) => setPageInput(e.target.value)} placeholder="z. B. 41, 45-47" className="h-10 flex-1 rounded-xl border border-line bg-surface px-3 text-sm" />
            <Button type="submit" variant="secondary">Vormerken</Button>
          </form>
          {state.rerunPages.length > 0 && (
            <div className="mt-3 text-sm">
              <p>Vorgemerkt: {state.rerunPages.join(", ")}</p>
              <code className="mt-1 block overflow-x-auto rounded-lg bg-surface2 p-2 text-xs">{cmd}</code>
              <Button size="sm" variant="ghost" className="mt-1" onClick={() => dispatch({ type: "rerun-pages", pages: [] })}>Liste leeren</Button>
            </div>
          )}
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="mb-2 font-semibold">Seiten mit Auffälligkeiten ({badPages.length})</h2>
        {badPages.length === 0 ? (
          <p className="text-sm text-muted">Keine Seite mit niedriger Konfidenz oder Fehler.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {badPages.map((p) => (
              <Link key={p.pdfPage} href={`/source/?page=${p.pdfPage}`} className="rounded-lg border border-line px-2 py-1 text-xs hover:border-teal" title={`${p.status} · ${Math.round(p.meanConfidence)} %`}>
                S. {p.pdfPage} <span className="text-muted">({p.status === "low-confidence" ? "unsicher" : p.status === "empty" ? "leer" : p.status === "error" ? "Fehler" : p.status})</span>
              </Link>
            ))}
          </div>
        )}
      </Card>
      <div className="mt-4 text-xs text-muted">
        Hinweis: Dieser Bereich ist in der statischen Version für alle Nutzer des Browsers zugänglich und speichert Korrekturen lokal. Für mehrere Benutzer wäre ein Backend mit Authentifizierung nötig (siehe README, „Grenzen“).
      </div>
    </>
  );
}
