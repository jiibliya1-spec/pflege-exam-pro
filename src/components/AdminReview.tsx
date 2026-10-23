"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Check, Plus, RotateCcw, X } from "lucide-react";
import { useBank } from "@/lib/bank";
import { useStore } from "@/lib/store";
import { newId } from "@/lib/hooks";
import { TYPE_LABELS, ALL_TYPES } from "@/lib/exam";
import type { ChoiceOption, ExtractionStatus, Question, QuestionType } from "@/lib/types";
import type { QuestionPatch } from "@/lib/userState";
import { Badge, Button, Card, Dialog, EmptyState, Field, Input, Notice, PageHeader, Select, Spinner, Textarea, cn } from "./ui";
import { loadPageTexts, pageImage } from "./Source";
import { useToast } from "./Toast";

type Filter = "review" | "approved" | "rejected" | "ok" | "all";

export function AdminReview() {
  const bank = useBank();
  const router = useRouter();
  const id = useSearchParams().get("id") ?? "";
  const [filter, setFilter] = useState<Filter>("review");
  const [term, setTerm] = useState("");
  const [adding, setAdding] = useState(false);

  const list = useMemo(
    () =>
      bank.questions.filter((q) => (filter === "all" ? true : q.extraction.status === filter) && (!term || q.text.toLowerCase().includes(term.toLowerCase()) || q.label.includes(term) || String(q.source.pdfPage) === term)),
    [bank.questions, filter, term]
  );
  if (bank.status === "loading") return <Spinner />;
  if (bank.status !== "ready") return <EmptyState title="Keine Fragen zum Prüfen">Die Fragenbank ist leer.</EmptyState>;
  const selected = bank.byId.get(id) ?? undefined;

  return (
    <>
      <PageHeader
        title="Review-Queue"
        subtitle="OCR-Ergebnisse prüfen, korrigieren, Musterlösungen verifizieren und freigeben. Der ursprüngliche OCR-Text bleibt zum Vergleich erhalten."
        crumbs={[{ label: "Import & Qualität", href: "/admin/" }, { label: "Review" }]}
        actions={
          <Button variant="secondary" onClick={() => setAdding(true)}>
            <Plus className="h-4 w-4" aria-hidden /> Aufgabe manuell ergänzen
          </Button>
        }
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[20rem_1fr]">
        <div>
          <div className="mb-3 space-y-2">
            <Select aria-label="Status" value={filter} onChange={(e) => setFilter(e.target.value as Filter)}>
              <option value="review">Zu prüfen ({bank.questions.filter((q) => q.extraction.status === "review").length})</option>
              <option value="ok">Automatisch ok</option>
              <option value="approved">Freigegeben</option>
              <option value="rejected">Verworfen</option>
              <option value="all">Alle</option>
            </Select>
            <Input aria-label="Suche" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Text, Nr. oder Seite …" />
          </div>
          <ul className="max-h-[70vh] space-y-1.5 overflow-y-auto pr-1">
            {list.length === 0 && <li className="text-sm text-muted">Keine Einträge.</li>}
            {list.map((q) => (
              <li key={q.id}>
                <button onClick={() => router.push(`/admin/review/?id=${q.id}`)} aria-current={q.id === id ? "true" : undefined} className={cn("w-full rounded-xl border p-2.5 text-left text-sm", q.id === id ? "border-teal bg-tealsoft" : "border-line hover:bg-surface2")}>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <Badge tone="navy">{q.label}</Badge> S. {q.source.pdfPage}
                    {q.extraction.status === "approved" && <Badge tone="ok">frei</Badge>}
                    {q.extraction.status === "rejected" && <Badge tone="bad">verworfen</Badge>}
                    {q.extraction.status === "review" && <Badge tone="warn">prüfen</Badge>}
                  </span>
                  <span className="mt-1 line-clamp-2 block">{q.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selected ? <Editor key={selected.id} q={selected} /> : <Card><p className="text-sm text-muted">Wählen Sie links eine Aufgabe aus.</p></Card>}
      </div>
      <AddDialog open={adding} onClose={() => setAdding(false)} onCreated={(qid) => { setAdding(false); router.push(`/admin/review/?id=${qid}`); }} />
    </>
  );
}

function Editor({ q }: { q: Question }) {
  const { state, dispatch } = useStore();
  const bank = useBank();
  const { toast } = useToast();
  const base = bank.bank?.questions.find((x) => x.id === q.id) ?? state.manual[q.id];
  const [text, setText] = useState(q.text);
  const [points, setPoints] = useState(q.points?.toString() ?? "");
  const [ab, setAb] = useState(q.ab ?? "");
  const [type, setType] = useState<QuestionType>(q.type);
  const [chapterId, setChapterId] = useState(q.chapterId);
  const [caseId, setCaseId] = useState(q.caseId ?? "");
  const [ma, setMa] = useState(q.modelAnswer?.text ?? "");
  const [maStatus, setMaStatus] = useState(q.modelAnswer?.status ?? "unavailable");
  const [options, setOptions] = useState((q.options ?? []).map((o) => `${o.id}: ${o.text}`).join("\n"));
  const [correct, setCorrect] = useState((q.modelAnswer?.correctOptionIds ?? []).join(", "));
  const [pageText, setPageText] = useState("");
  const [showOrig, setShowOrig] = useState(false);
  const choice = type === "single" || type === "multiple" || type === "truefalse";

  useEffect(() => {
    void loadPageTexts().then((t) => setPageText(t.find((p) => p.pdfPage === q.source.pdfPage)?.text ?? ""));
  }, [q.source.pdfPage]);

  function parseOptions(): ChoiceOption[] {
    return options.split("\n").map((l) => l.trim()).filter(Boolean).map((l, i) => {
      const m = l.match(/^([A-Za-z0-9]+)\s*[:.)]\s*(.+)$/);
      return m ? { id: m[1].toUpperCase(), text: m[2] } : { id: String.fromCharCode(65 + i), text: l };
    });
  }

  function save(statusOverride?: ExtractionStatus) {
    const pts = points.trim() === "" ? undefined : Number(points.replace(",", "."));
    if (pts !== undefined && !(pts > 0)) return toast("Punkte müssen größer als 0 sein.", "error");
    if (!text.trim()) return toast("Der Aufgabentext darf nicht leer sein.", "error");
    const ids = correct.split(/[ ,;]+/).map((s) => s.trim().toUpperCase()).filter(Boolean);
    const opts = choice ? parseOptions() : undefined;
    if (maStatus === "verified") {
      if (choice && (ids.length === 0 || !ids.every((i) => opts?.some((o) => o.id === i)))) return toast("Für „verifiziert“ müssen richtige Optionen angegeben sein, die in der Optionsliste vorkommen.", "error");
      if (!choice && !ma.trim()) return toast("Für „verifiziert“ wird ein Musterlösungstext benötigt.", "error");
    }
    const patch: QuestionPatch = {
      text,
      points: pts,
      ab: (ab || undefined) as Question["ab"],
      type,
      chapterId,
      caseId: caseId || undefined,
      options: opts,
      modelAnswer: ma.trim() || (choice && ids.length) ? { text: ma, status: maStatus, ...(choice && ids.length ? { correctOptionIds: ids } : {}), sourcePage: q.modelAnswer?.sourcePage } : { text: "", status: "unavailable" },
      extractionStatus: statusOverride ?? (q.extraction.status === "rejected" ? "rejected" : "approved"),
    };
    if (state.manual[q.id]) {
      dispatch({ type: "manual", question: { ...state.manual[q.id], ...patch, extraction: { ...q.extraction, status: patch.extractionStatus! }, text } as Question });
    } else {
      dispatch({ type: "override", id: q.id, patch, audit: statusOverride ? `status:${statusOverride}` : "edit" });
    }
    toast(statusOverride === "rejected" ? "Aufgabe verworfen." : statusOverride === "review" ? "Zurück in die Review-Queue." : "Gespeichert und freigegeben.", "ok");
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card className="space-y-3 p-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Quelle: PDF-Seite {q.source.pdfPage}</span>
            <Link className="text-teal hover:underline" href={`/source/?page=${q.source.pdfPage}`}>Vollansicht</Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pageImage(q.source.pdfPage)} alt={`Scan Seite ${q.source.pdfPage}`} className="max-h-[70vh] w-full rounded-lg object-contain" />
        </Card>
        <Card className="space-y-3">
          <h2 className="font-semibold">Seiten-OCR (Vergleich)</h2>
          <pre className="max-h-[60vh] overflow-auto whitespace-pre-wrap font-sans text-sm">{pageText || "—"}</pre>
        </Card>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-semibold">Aufgabe {q.label}</h2>
          <Badge tone={q.extraction.status === "approved" ? "ok" : q.extraction.status === "rejected" ? "bad" : "warn"}>{q.extraction.status}</Badge>
          <Badge>OCR {Math.round(q.extraction.confidence)} %</Badge>
        </div>
        {q.extraction.notes?.length ? (
          <Notice tone="warn" title="Hinweise der Extraktion">
            <ul className="list-disc pl-5">{q.extraction.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
          </Notice>
        ) : null}

        <Field label="Aufgabentext" htmlFor="rv-text">
          <Textarea id="rv-text" value={text} onChange={(e) => setText(e.target.value)} rows={6} className="w-full" />
        </Field>
        <button className="text-sm text-teal hover:underline" onClick={() => setShowOrig(!showOrig)} aria-expanded={showOrig}>
          {showOrig ? "Original-OCR ausblenden" : "Original-OCR zum Vergleich anzeigen"}
        </button>
        {showOrig && <pre className="whitespace-pre-wrap rounded-xl bg-surface2 p-3 font-sans text-sm">{base?.originalText ?? q.originalText}</pre>}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Field label="Punkte" htmlFor="rv-pts"><Input id="rv-pts" value={points} onChange={(e) => setPoints(e.target.value)} inputMode="decimal" /></Field>
          <Field label="Anforderungsbereich" htmlFor="rv-ab">
            <Select id="rv-ab" value={ab} onChange={(e) => setAb(e.target.value)}>
              <option value="">unbekannt</option><option value="I">AB I</option><option value="II">AB II</option><option value="III">AB III</option>
            </Select>
          </Field>
          <Field label="Typ" htmlFor="rv-type">
            <Select id="rv-type" value={type} onChange={(e) => setType(e.target.value as QuestionType)}>
              {ALL_TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
            </Select>
          </Field>
          <Field label="Kapitel" htmlFor="rv-ch">
            <Select id="rv-ch" value={chapterId} onChange={(e) => setChapterId(e.target.value)}>
              {bank.chapters.map((c) => <option key={c.id} value={c.id}>{c.number} {c.title}</option>)}
            </Select>
          </Field>
          <Field label="Fallbeispiel" htmlFor="rv-case">
            <Select id="rv-case" value={caseId} onChange={(e) => setCaseId(e.target.value)}>
              <option value="">— keiner —</option>
              {bank.cases.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
            </Select>
          </Field>
        </div>

        {choice && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Antwortoptionen (eine je Zeile, z. B. „A: Text“)" htmlFor="rv-opt"><Textarea id="rv-opt" value={options} onChange={(e) => setOptions(e.target.value)} rows={5} className="w-full" /></Field>
            <Field label="Richtige Option(en), z. B. „A, C“" htmlFor="rv-cor" hint="Nur eintragen, wenn Sie den Schlüssel im Buch geprüft haben."><Input id="rv-cor" value={correct} onChange={(e) => setCorrect(e.target.value)} /></Field>
          </div>
        )}

        <Field label="Musterlösung / Erwartungshorizont" htmlFor="rv-ma">
          <Textarea id="rv-ma" value={ma} onChange={(e) => setMa(e.target.value)} rows={7} className="w-full" />
        </Field>
        <Field label="Status der Musterlösung" htmlFor="rv-mas" hint="„Verifiziert“ nur setzen, wenn der Text gegen die Buchseite geprüft wurde.">
          <Select id="rv-mas" value={maStatus} onChange={(e) => setMaStatus(e.target.value as "verified" | "unverified" | "unavailable")}>
            <option value="unverified">OCR · nicht verifiziert</option>
            <option value="verified">Verifiziert (gegen Buchseite geprüft)</option>
            <option value="unavailable">Nicht vorhanden</option>
          </Select>
        </Field>

        <div className="flex flex-wrap gap-2 border-t border-line pt-4">
          <Button variant="teal" onClick={() => save("approved")}><Check className="h-4 w-4" aria-hidden /> Speichern & freigeben</Button>
          <Button variant="secondary" onClick={() => save("review")}><RotateCcw className="h-4 w-4" aria-hidden /> Speichern (weiter prüfen)</Button>
          <Button variant="danger" onClick={() => save("rejected")}><X className="h-4 w-4" aria-hidden /> Verwerfen</Button>
          {state.overrides[q.id] && (
            <Button variant="ghost" onClick={() => { dispatch({ type: "override", id: q.id, patch: null, audit: "revert" }); toast("Korrekturen zurückgesetzt – Original-OCR-Werte aktiv.", "ok"); }}>Korrekturen zurücksetzen</Button>
          )}
          {state.manual[q.id] && (
            <Button variant="ghost" onClick={() => { dispatch({ type: "manual", question: null, id: q.id }); toast("Manuelle Aufgabe gelöscht.", "ok"); }}>Manuelle Aufgabe löschen</Button>
          )}
        </div>
        <p className="text-xs text-muted">Korrekturen werden lokal in diesem Browser gespeichert und überlagern die importierten Daten (Export unter Einstellungen).</p>
      </Card>
    </div>
  );
}

function AddDialog({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated: (id: string) => void }) {
  const bank = useBank();
  const { dispatch } = useStore();
  const { toast } = useToast();
  const [caseId, setCaseId] = useState("");
  const [label, setLabel] = useState("");
  const [text, setText] = useState("");
  const [points, setPoints] = useState("");
  const [page, setPage] = useState("");

  function create() {
    const c = bank.caseById.get(caseId);
    const pg = Number(page);
    if (!c) return toast("Bitte ein Fallbeispiel wählen.", "error");
    if (!label.trim() || !text.trim()) return toast("Nummer und Aufgabentext sind Pflicht.", "error");
    if (!(pg >= 1 && pg <= (bank.bank?.report.pagesInPdf ?? 333))) return toast("Bitte eine gültige PDF-Seite angeben.", "error");
    const pts = points ? Number(points.replace(",", ".")) : undefined;
    if (pts !== undefined && !(pts > 0)) return toast("Punkte müssen größer als 0 sein.", "error");
    const sibs = bank.questions.filter((q) => q.caseId === c.id);
    const order = (sibs.length ? Math.max(...sibs.map((q) => q.order)) : (bank.questions.length ? bank.questions[bank.questions.length - 1].order : 0)) + 0.5;
    const q: Question = {
      id: newId("m"),
      order,
      chapterId: c.chapterId,
      topic: c.title,
      caseId: c.id,
      label: label.trim(),
      type: "open",
      text: text.trim(),
      originalText: text.trim(),
      ...(pts ? { points: pts } : {}),
      source: { pdfPage: pg, printedPage: pg + (bank.bank?.report.printedPageOffset ?? 5) },
      extraction: { status: "approved", confidence: 100, notes: ["Manuell im Admin-Bereich ergänzt – nicht aus OCR."] },
      manual: true,
      tags: [c.title],
    };
    dispatch({ type: "manual", question: q });
    toast("Aufgabe ergänzt.", "ok");
    setText(""); setLabel(""); setPoints("");
    onCreated(q.id);
  }

  return (
    <Dialog open={open} onClose={onClose} title="Aufgabe manuell ergänzen" wide footer={<><Button variant="secondary" onClick={onClose}>Abbrechen</Button><Button onClick={create}>Ergänzen</Button></>}>
      <p className="mb-3 text-sm text-muted">Für Aufgaben, die die OCR nicht erkannt hat. Bitte den Text exakt aus dem Buch übernehmen.</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Fallbeispiel" htmlFor="ad-case"><Select id="ad-case" value={caseId} onChange={(e) => setCaseId(e.target.value)}><option value="">— wählen —</option>{bank.cases.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}</Select></Field>
        <Field label="Aufgabennummer (z. B. 3b)" htmlFor="ad-label"><Input id="ad-label" value={label} onChange={(e) => setLabel(e.target.value)} /></Field>
        <Field label="PDF-Seite" htmlFor="ad-page"><Input id="ad-page" inputMode="numeric" value={page} onChange={(e) => setPage(e.target.value)} /></Field>
        <Field label="Punkte (optional)" htmlFor="ad-pts"><Input id="ad-pts" inputMode="decimal" value={points} onChange={(e) => setPoints(e.target.value)} /></Field>
      </div>
      <div className="mt-3"><Field label="Aufgabentext" htmlFor="ad-text"><Textarea id="ad-text" value={text} onChange={(e) => setText(e.target.value)} rows={5} className="w-full" /></Field></div>
    </Dialog>
  );
}
