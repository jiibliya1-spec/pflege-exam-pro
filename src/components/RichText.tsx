import { Fragment } from "react";
import { cn } from "./ui";
import { parseAnswerTable, parseQuestionTable } from "@/lib/tables";
import { AnswerTableView, QuestionTableView } from "./TableView";
import { GlossText } from "./Gloss";

/**
 * Stellt bereinigten Buchtext dar: Absätze, Aufzählungen ("•", "–") und Tabellenblöcke
 * ("⟦Tabelle⟧ … ⟦/Tabelle⟧" bzw. "[Tabelle: …]"). Der Text selbst wird nie verändert.
 */
function Lines({ lines, seen }: { lines: string[]; seen: Set<string> }) {
  const out: React.ReactNode[] = [];
  let list: { sub: boolean; text: string }[] = [];
  const flush = () => {
    if (!list.length) return;
    out.push(
      <ul key={`ul${out.length}`} className="my-1.5 space-y-1">
        {list.map((li, i) => (
          <li key={i} className={cn("relative pl-4 before:absolute before:left-0 before:content-['•']", li.sub && "ml-4 before:content-['–']")}>
            <GlossText text={li.text} seen={seen} />
          </li>
        ))}
      </ul>
    );
    list = [];
  };
  let para: string[] = [];
  const flushPara = () => {
    if (!para.length) return;
    out.push(
      <p key={`p${out.length}`} className="my-1.5">
        <GlossText text={para.join(" ")} seen={seen} />
      </p>
    );
    para = [];
  };
  for (const raw of lines) {
    const ln = raw.trim();
    if (!ln) {
      flush();
      flushPara();
      continue;
    }
    const b = /^[•]\s*(.*)$/.exec(ln);
    const s = /^[–-]\s+(.*)$/.exec(ln);
    if (b) {
      flushPara();
      list.push({ sub: false, text: b[1] });
    } else if (s && list.length) {
      list.push({ sub: true, text: s[1] });
    } else if (s) {
      flushPara();
      list.push({ sub: true, text: s[1] });
    } else if (list.length) {
      list[list.length - 1].text += " " + ln; // Folgezeile einer Aufzählung
    } else {
      para.push(ln);
    }
  }
  flush();
  flushPara();
  return <>{out}</>;
}

export function RichText({ text, className, hideTables }: { text: string; className?: string; hideTables?: boolean }) {
  const seen = new Set<string>();
  const parts = text.split(/(⟦Tabelle⟧[\s\S]*?⟦\/Tabelle⟧|\[Tabelle:[\s\S]*?\])/g);
  return (
    <div className={cn("prose-de", className)}>
      {parts.map((part, i) => {
        if (part.startsWith("⟦Tabelle⟧")) {
          const inner = part.replace("⟦Tabelle⟧", "").replace("⟦/Tabelle⟧", "").trim();
          const parsed = parseAnswerTable(inner);
          if (parsed) return <AnswerTableView key={i} t={parsed} />;
          return (
            <div key={i} className="my-2 rounded-lg border border-line bg-surface2 p-3 text-[0.95em]">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Tabelle (aus dem Buch)</p>
              <Lines lines={inner.split("\n")} seen={seen} />
            </div>
          );
        }
        if (part.startsWith("[Tabelle:")) {
          const qt = parseQuestionTable(part.replace(/^\[Tabelle:\s*/, "").replace(/\]$/, ""));
          if (qt) return hideTables ? null : <QuestionTableView key={i} t={qt} />;
          return (
            <div key={i} className="my-2 rounded-lg border border-line bg-surface2 p-3 text-[0.95em]">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Tabelle (aus dem Buch)</p>
              <p>{part.replace(/^\[Tabelle:\s*/, "").replace(/\]$/, "")}</p>
            </div>
          );
        }
        return (
          <Fragment key={i}>
            <Lines lines={part.split("\n")} seen={seen} />
          </Fragment>
        );
      })}
    </div>
  );
}
