"use client";

import { Plus } from "lucide-react";
import type { AnswerTable, QuestionTable } from "@/lib/tables";
import { cn } from "./ui";

const shell = "my-3 overflow-x-auto rounded-xl border border-line bg-surface";
const th = "border-b border-line bg-navy px-3 py-2 text-left text-xs font-semibold text-white dark:bg-navy2";
const td = "border-t border-line px-3 py-2 align-top text-sm";

/** Leere Tabelle aus dem Aufgabentext (nur Ansicht). */
export function QuestionTableView({ t }: { t: QuestionTable }) {
  const rows = t.rowLabels.length || 3;
  return (
    <div className={shell}>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {t.rowLabels.length > 0 && <th className={cn(th, "w-10")} aria-label="Zeile" />}
            {t.headers.map((h, i) => (
              <th key={i} className={th}>
                {h || "Antwort"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, r) => (
            <tr key={r}>
              {t.rowLabels.length > 0 && <td className={cn(td, "font-semibold text-muted")}>{t.rowLabels[r]}</td>}
              {t.headers.map((_, c) => (
                <td key={c} className={cn(td, "h-10 bg-surface2/50")} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Ausfüllbare Tabelle (Antworteingabe). Zellen werden zeilenweise in einem flachen Array gespeichert. */
export function TableInput({ q, t, cells, onChange, locked }: { q: { id: string }; t: QuestionTable; cells: string[]; onChange: (c: string[]) => void; locked?: boolean }) {
  const cols = t.headers.length;
  const rows = Math.max(t.rowLabels.length || 3, Math.ceil(cells.length / cols));
  const get = (r: number, c: number) => cells[r * cols + c] ?? "";
  const set = (r: number, c: number, v: string) => {
    const next = cells.slice();
    while (next.length < rows * cols) next.push("");
    next[r * cols + c] = v;
    onChange(next);
  };
  const addRow = () => {
    const next = cells.slice();
    while (next.length < (rows + 1) * cols) next.push("");
    onChange(next);
  };
  return (
    <div>
      <p className="mb-1.5 text-sm font-medium">Ihre Antwort (Tabelle ausfüllen)</p>
      <div className={shell}>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className={cn(th, "w-9")} aria-label="Zeile" />
              {t.headers.map((h, i) => (
                <th key={i} className={th}>
                  {h || "Antwort"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }, (_, r) => (
              <tr key={r}>
                <td className={cn(td, "font-semibold text-muted")}>{t.rowLabels[r] ?? `${r + 1}.`}</td>
                {t.headers.map((h, c) => (
                  <td key={c} className="border-t border-line p-1 align-top">
                    <textarea
                      rows={2}
                      value={get(r, c)}
                      disabled={locked}
                      onChange={(e) => set(r, c, e.target.value)}
                      aria-label={`${h || "Antwort"}, Zeile ${r + 1}`}
                      id={`cell-${q.id}-${r}-${c}`}
                      className="min-h-14 w-full resize-y rounded-lg border border-transparent bg-surface2/60 px-2 py-1.5 text-base outline-none focus:border-teal focus:bg-surface"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!locked && rows < 15 && (
        <button type="button" onClick={addRow} className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm hover:bg-surface2">
          <Plus className="h-4 w-4" aria-hidden /> Zeile hinzufügen
        </button>
      )}
    </div>
  );
}

/** Tabelle aus der Musterlösung – nur wenn die Zeilen eindeutig erkannt wurden. */
export function AnswerTableView({ t }: { t: AnswerTable }) {
  return (
    <div className={shell}>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {t.headers.map((h, i) => (
              <th key={i} className={th}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} className={cn(td, c === 0 && "bg-surface2/60 font-medium")}>
                  {cell.split("\n").map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-1" : ""}>
                      {t.rows.length > 0 && c === 1 && row[1].includes("\n") ? "• " : ""}
                      {line}
                    </p>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line px-3 py-1.5 text-[11px] text-muted">Tabelle aus dem Buchtext angeordnet. Der Wortlaut ist unverändert.</p>
    </div>
  );
}
