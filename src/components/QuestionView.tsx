"use client";

import { BookMarked, CheckCircle2, Languages, XCircle } from "lucide-react";
import { LANGS, useLang, useT } from "@/lib/i18n";
import type { CaseStudy, ChoiceOption, Question, SessionAnswer } from "@/lib/types";
import { TYPE_LABELS } from "@/lib/exam";
import { isChoice, maxPoints, type GradeResult } from "@/lib/grading";
import { Badge, Notice, Textarea, cn } from "./ui";
import { RichText } from "./RichText";
import { TableInput } from "./TableView";
import { parseQuestionTable, type QuestionTable } from "@/lib/tables";

export function QuestionMeta({ q }: { q: Question; showSource?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <Badge tone="navy">{q.label === "0" ? "Fallanalyse" : `Aufgabe ${q.label}`}</Badge>
      <Badge>{TYPE_LABELS[q.type]}</Badge>
      {q.points ? <Badge tone="teal">{String(q.points).replace(".", ",")} P.</Badge> : null}
    </div>
  );
}

export function QuestionText({ q, hideTable }: { q: Question; hideTable?: boolean }) {
  return (
    <div className="space-y-3">
      {q.stem && (
        <div className="rounded-xl bg-surface2 p-3 text-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Aufgabe (Kontext)</p>
          <RichText text={q.stem} />
        </div>
      )}
      <RichText text={q.text} className="text-base font-medium" hideTables={hideTable} />
    </div>
  );
}

export function TranslateLink({ text }: { text: string }) {
  const lang = useLang();
  const t = useT();
  if (lang === "de" || !text) return null;
  const g = LANGS.find((l) => l.id === lang)!.google;
  const href = `https://translate.google.com/?sl=de&tl=${g}&op=translate&text=${encodeURIComponent(text.slice(0, 4500))}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-teal/40 px-2.5 py-1 text-xs font-medium text-teal hover:bg-teal/10">
      <Languages className="h-3.5 w-3.5" aria-hidden /> {t("tr.button")}
    </a>
  );
}

export function CaseNarrative({ c, compact }: { c: CaseStudy; compact?: boolean }) {
  return (
    <section aria-label={`Fallsituation ${c.title}`} className={cn("rounded-2xl border border-line bg-surface2 p-4", compact && "max-h-[70vh] overflow-y-auto")}>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">{c.title}</h3>
      </div>
      {(c.setting || c.themes) && (
        <p className="mb-2 text-xs text-muted">
          {c.setting && (
            <>
              <span className="font-semibold">Setting:</span> {c.setting}
            </>
          )}
          {c.setting && c.themes && " · "}
          {c.themes && (
            <>
              <span className="font-semibold">Themenschwerpunkte:</span> {c.themes}
            </>
          )}
        </p>
      )}
      {c.narrative && (
        <div className="mb-2">
          <TranslateLink text={c.narrative} />
        </div>
      )}
      {c.narrative ? <RichText text={c.narrative} className="text-sm" /> : <Notice>Die Fallsituation konnte nicht extrahiert werden. Bitte die Quellseite öffnen.</Notice>}
      {c.footnote && <p className="mt-2 text-xs text-muted">{c.footnote}</p>}
      {!compact && c.preparation && (
        <details className="mt-3 rounded-lg border border-line bg-surface p-3 text-sm">
          <summary className="cursor-pointer font-medium">Vorbereitung &amp; Schwerpunkte</summary>
          <RichText text={c.preparation} className="mt-2 text-sm" />
        </details>
      )}
    </section>
  );
}

export function ChoiceInput({
  q,
  options,
  value,
  onChange,
  locked,
  grade,
}: {
  q: Question;
  options: ChoiceOption[];
  value: string[];
  onChange: (ids: string[]) => void;
  locked?: boolean;
  grade?: GradeResult | null;
}) {
  const multi = q.type === "multiple";
  const key = new Set(q.modelAnswer?.status === "verified" ? q.modelAnswer.correctOptionIds : []);
  return (
    <fieldset className="space-y-2" disabled={locked}>
      <legend className="sr-only">{multi ? "Mehrfachauswahl" : "Einzelauswahl"}</legend>
      {options.map((o) => {
        const checked = value.includes(o.id);
        const show = locked && grade && key.size > 0;
        const isRight = show && key.has(o.id);
        const isWrong = show && checked && !key.has(o.id);
        return (
          <label
            key={o.id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors",
              checked ? "border-teal bg-tealsoft" : "border-line hover:bg-surface2",
              isRight && "border-ok bg-oksoft",
              isWrong && "border-bad bg-badsoft"
            )}
          >
            <input
              type={multi ? "checkbox" : "radio"}
              name={`q-${q.id}`}
              checked={checked}
              onChange={() => onChange(multi ? (checked ? value.filter((v) => v !== o.id) : [...value, o.id]) : [o.id])}
              className="mt-1 h-4 w-4 accent-[var(--teal)]"
            />
            <span>
              <span className="mr-1 font-semibold">{o.id}.</span>
              {o.text}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}

/** Erste sauber erkennbare Tabelle der Aufgabe (nur bei Tabellen-Aufgaben). */
export function questionTable(q: Question): QuestionTable | null {
  if (q.type !== "table") return null;
  for (const m of q.text.matchAll(/\[Tabelle:([\s\S]*?)\]/g)) {
    const t = parseQuestionTable(m[1]);
    if (t) return t;
  }
  return null;
}

export function FreeTextInput({ q, answer, onChange, onCells, locked }: { q: Question; answer?: SessionAnswer; onChange: (text: string) => void; onCells?: (cells: string[]) => void; locked?: boolean }) {
  const table = onCells ? questionTable(q) : null;
  if (table && onCells) return <TableInput q={q} t={table} cells={answer?.tableCells ?? []} onChange={onCells} locked={locked} />;
  const hint =
    q.type === "table"
      ? "Tragen Sie Ihre Antwort tabellarisch oder zeilenweise ein (z. B. „Pflegeproblem – Ressource – ATL“ je Zeile)."
      : q.type === "short"
        ? "Kurze Antwort eingeben."
        : "Antwort formulieren. Stichpunkte sind erlaubt.";
  return (
    <div>
      <label htmlFor={`ans-${q.id}`} className="mb-1.5 block text-sm font-medium">
        Ihre Antwort
      </label>
      <Textarea
        id={`ans-${q.id}`}
        value={answer?.text ?? ""}
        onChange={(e) => onChange(e.target.value)}
        disabled={locked}
        rows={q.type === "short" ? 3 : 8}
        placeholder={hint}
        className="w-full"
      />
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}

/** Zeigt Musterlösung bzw. verifizierten Schlüssel – nie als "offiziell" bezeichnet, wenn nicht verifiziert. */
export function ModelAnswerBox({ q }: { q: Question; caseSolutionPages?: [number, number | null] }) {
  const ma = q.modelAnswer;
  const hasText = !!ma?.text?.trim();
  return (
    <div className="rounded-xl border border-teal/30 bg-tealsoft p-4 text-sm">
      <div className="mb-2 flex items-center gap-2">
        <BookMarked className="h-4 w-4 text-teal" aria-hidden />
        <span className="font-semibold">Musterlösung</span>
      </div>
      {hasText && <RichText text={ma!.text} />}
      {q.explanation && <p className="prose-de mt-3 border-t border-line pt-3">{q.explanation}</p>}
    </div>
  );
}

export function SelfAssess({ q, value, onChange }: { q: Question; value?: number; onChange: (v: number) => void }) {
  const max = maxPoints(q);
  // Schrittweite 0,5 – wie im Buch üblich
  const steps: number[] = [];
  for (let p = 0; p <= max + 1e-9; p += 0.5) steps.push(Math.round(p * 10) / 10);
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <p className="mb-1 text-sm font-semibold">Selbstbewertung</p>
      <p className="mb-3 text-xs text-muted">
        Vergleichen Sie Ihre Antwort mit der Musterlösung und vergeben Sie sich ehrlich Punkte (max. {String(max).replace(".", ",")}). Offene Antworten werden nicht automatisch bewertet.
      </p>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Erreichte Punkte">
        {steps.length > 25 ? (
          <input
            type="number"
            min={0}
            max={max}
            step={0.5}
            value={value ?? ""}
            onChange={(e) => onChange(Math.min(max, Math.max(0, Number(e.target.value))))}
            className="h-9 w-24 rounded-lg border border-line bg-surface px-2 text-sm"
            aria-label="Erreichte Punkte"
          />
        ) : (
          steps.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={value === p}
              onClick={() => onChange(p)}
              className={cn("h-9 min-w-10 rounded-lg border px-2 text-sm tabular-nums", value === p ? "border-teal bg-teal text-white dark:text-[#04222a]" : "border-line hover:bg-surface2")}
            >
              {String(p).replace(".", ",")}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export function GradeBadge({ g }: { g: GradeResult | undefined }) {
  if (!g) return null;
  if (g.status === "ungraded") return <Badge tone="warn">unbewertet{g.reason ? ` · ${g.reason}` : ""}</Badge>;
  if (g.status === "unanswered") return <Badge tone="neutral">nicht beantwortet</Badge>;
  const full = g.correct;
  return (
    <Badge tone={full ? "ok" : (g.pointsAwarded ?? 0) > 0 ? "warn" : "bad"}>
      {full ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> : <XCircle className="h-3.5 w-3.5" aria-hidden />}
      {String(g.pointsAwarded ?? 0).replace(".", ",")} / {String(g.pointsMax).replace(".", ",")} P.
      {g.gradedBy === "self" ? " (Selbstbewertung)" : ""}
    </Badge>
  );
}

export { isChoice };
