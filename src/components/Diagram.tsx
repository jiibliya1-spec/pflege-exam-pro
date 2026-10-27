import { ArrowDown, RefreshCw } from "lucide-react";
import type { DNode, Diagram as D, Tone } from "@/data/diagram";
import { Icon } from "./Icon";
import { cn } from "./ui";

const TONE: Record<Tone | "base", { box: string; chip: string }> = {
  base: { box: "border-teal/40 bg-tealsoft", chip: "bg-teal text-white dark:text-[#04222a]" },
  info: { box: "border-sky-500/40 bg-sky-500/10", chip: "bg-sky-600 text-white" },
  ok: { box: "border-ok/40 bg-oksoft", chip: "bg-ok text-white dark:text-[#04220f]" },
  warn: { box: "border-warn/50 bg-warnsoft", chip: "bg-warn text-white dark:text-[#2a1a00]" },
  bad: { box: "border-bad/50 bg-badsoft", chip: "bg-bad text-white dark:text-[#2a0805]" },
};
const tone = (t?: Tone) => TONE[t ?? "base"];

function Head({ title }: { title: string }) {
  return <h3 className="mb-3 text-sm font-semibold">{title}</h3>;
}

function Steps({ steps, loop }: { steps: DNode[]; loop?: boolean }) {
  return (
    <ol className="flex flex-col items-stretch">
      {steps.map((s, i) => (
        <li key={i} className="flex flex-col items-center">
          <div className={cn("flex w-full items-start gap-3 rounded-xl border p-3", tone(s.tone).box)}>
            <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold", tone(s.tone).chip)}>{i + 1}</span>
            {s.icon && <Icon name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-teal" />}
            <div className="min-w-0 text-sm">
              <p className="font-semibold leading-snug">{s.t}</p>
              {s.s && <p className="mt-0.5 text-muted">{s.s}</p>}
            </div>
          </div>
          {i < steps.length - 1 && <ArrowDown className="my-1 h-4 w-4 text-muted" aria-hidden />}
        </li>
      ))}
      {loop && (
        <li className="mt-2 flex items-center justify-center gap-2 rounded-full border border-dashed border-teal/50 px-3 py-1.5 text-xs font-medium text-teal">
          <RefreshCw className="h-3.5 w-3.5" aria-hidden /> danach wieder bei Schritt 1
        </li>
      )}
    </ol>
  );
}

export function DiagramView({ d }: { d: D }) {
  let body: React.ReactNode = null;
  switch (d.kind) {
    case "flow":
      body = <Steps steps={d.steps} />;
      break;
    case "cycle":
      body = <Steps steps={d.steps} loop />;
      break;
    case "pyramid":
      body = (
        <div className="flex flex-col items-center gap-1.5">
          {d.levels.map((l, i) => {
            const n = d.levels.length;
            const width = n === 1 ? 100 : 38 + (62 * i) / (n - 1);
            return (
              <div key={i} style={{ width: `${width}%` }} className={cn("rounded-lg border px-3 py-2 text-center text-sm", tone(l.tone).box)}>
                <p className="font-semibold leading-snug">{l.t}</p>
                {l.s && <p className="text-xs text-muted">{l.s}</p>}
              </div>
            );
          })}
        </div>
      );
      break;
    case "compare":
      body = (
        <div className={cn("grid gap-3", d.cols.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
          {d.cols.map((c, i) => (
            <div key={i} className={cn("overflow-hidden rounded-xl border", tone(c.tone).box)}>
              <p className={cn("flex items-center gap-2 px-3 py-2 text-sm font-semibold", tone(c.tone).chip)}>
                {c.icon && <Icon name={c.icon} className="h-4 w-4" />} {c.t}
              </p>
              <ul className="space-y-1 p-3 text-sm">
                {c.items.map((x, k) => (
                  <li key={k} className="relative pl-3 before:absolute before:left-0 before:content-['–']">{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
      break;
    case "table":
      body = (
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[20rem] border-collapse text-sm">
            <thead>
              <tr className="bg-surface2">
                {d.head.map((h, i) => (
                  <th key={i} className="border-b border-line px-3 py-2 text-start font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.rows.map((r, i) => (
                <tr key={i} className="odd:bg-surface even:bg-surface2/50">
                  {r.map((c, k) => (
                    <td key={k} className={cn("border-b border-line px-3 py-2 align-top", k === 0 && "font-medium")}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      break;
    case "tree":
      body = (
        <div className="flex flex-col items-center">
          <div className={cn("flex items-center gap-2 rounded-xl border px-4 py-2 text-center text-sm font-semibold", tone(d.root.tone).box)}>
            {d.root.icon && <Icon name={d.root.icon} className="h-5 w-5 text-teal" />} {d.root.t}
          </div>
          <div className="h-4 w-px bg-line" aria-hidden />
          <div className="grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {d.kids.map((k, i) => (
              <div key={i} className={cn("rounded-xl border p-3", tone(k.tone).box)}>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  {k.icon && <Icon name={k.icon} className="h-4 w-4 text-teal" />} {k.t}
                </p>
                {k.items && (
                  <ul className="mt-1 space-y-0.5 text-sm text-muted">
                    {k.items.map((x, j) => (
                      <li key={j}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case "bar":
      body = (
        <div>
          <div className="flex overflow-hidden rounded-xl border border-line">
            {d.parts.map((p, i) => (
              <div key={i} style={{ flexGrow: p.w ?? 1, flexBasis: 0 }} className={cn("min-w-0 border-e border-white/40 px-1.5 py-2 text-center text-[11px] font-semibold leading-tight last:border-e-0", tone(p.tone).chip)}>
                {p.t}
              </div>
            ))}
          </div>
          <div className="mt-1 flex">
            {d.parts.map((p, i) => (
              <div key={i} style={{ flexGrow: p.w ?? 1, flexBasis: 0 }} className="min-w-0 px-1 text-center text-[11px] text-muted">
                {p.s}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case "tiles":
      body = (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {d.items.map((it, i) => (
            <div key={i} className={cn("rounded-xl border p-3 text-center", tone(it.tone).box)}>
              <span className={cn("mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-full", tone(it.tone).chip)}>
                <Icon name={it.icon ?? "CircleDot"} className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold leading-snug">{it.t}</p>
              {it.s && <p className="mt-0.5 text-xs text-muted">{it.s}</p>}
            </div>
          ))}
        </div>
      );
      break;
  }
  return (
    <figure className="rounded-2xl border border-line bg-surface p-4 shadow-sm">
      <Head title={d.title} />
      {body}
      {d.note && <figcaption className="mt-3 text-xs text-muted">{d.note}</figcaption>}
    </figure>
  );
}
