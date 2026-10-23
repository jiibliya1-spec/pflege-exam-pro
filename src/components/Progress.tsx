"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { nowMs } from "@/lib/clock";
import { BarChart3 } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { chapterStats, formatDuration, localDayKey, overallStats, repeatedMistakes, weakestTopics } from "@/lib/stats";
import { SRS_INTERVAL_DAYS } from "@/lib/srs";
import { Badge, Card, EmptyState, LinkButton, Notice, PageHeader, Spinner, StatCard } from "./ui";

const DAY = 86_400_000;

function BarChart({ data, label, max }: { data: { label: string; value: number }[]; label: string; max?: number }) {
  const m = max ?? Math.max(1, ...data.map((d) => d.value));
  return (
    <figure>
      <svg role="img" aria-label={label} viewBox={`0 0 ${data.length * 28} 120`} className="h-40 w-full">
        {data.map((d, i) => {
          const h = (d.value / m) * 90;
          return (
            <g key={i}>
              <rect x={i * 28 + 4} y={100 - h} width={20} height={h} rx={4} className="fill-teal" />
              <text x={i * 28 + 14} y={96 - h} textAnchor="middle" className="fill-current text-[9px]">
                {d.value ? Math.round(d.value) : ""}
              </text>
              <text x={i * 28 + 14} y={114} textAnchor="middle" className="fill-current text-[8px] opacity-60">
                {d.label}
              </text>
            </g>
          );
        })}
        <line x1="0" x2={data.length * 28} y1="100" y2="100" stroke="currentColor" opacity="0.15" />
      </svg>
      <figcaption className="sr-only">
        {label}: {data.map((d) => `${d.label} ${Math.round(d.value)}`).join(", ")}
      </figcaption>
    </figure>
  );
}

export function ProgressPage() {
  const { state } = useStore();
  const bank = useBank();
  const [now] = useState(nowMs);

  const stats = useMemo(() => overallStats(bank.questions, state.attempts, state.log, now), [bank.questions, state.attempts, state.log, now]);
  const chStats = useMemo(() => chapterStats(bank.chapters, bank.questions, state.attempts), [bank.chapters, bank.questions, state.attempts]);
  const weak = useMemo(() => weakestTopics(chStats, 2, 5), [chStats]);
  const repeated = useMemo(() => repeatedMistakes(state.attempts), [state.attempts]);

  const days = useMemo(() => {
    const out: { label: string; value: number }[] = [];
    for (let d = 13; d >= 0; d--) {
      const t = now - d * DAY;
      const key = localDayKey(t);
      out.push({ label: new Date(t).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }).slice(0, 5), value: state.attempts.filter((a) => localDayKey(a.at) === key).length });
    }
    return out;
  }, [state.attempts, now]);

  const exams = useMemo(
    () =>
      state.log
        .filter((l) => l.finishedAt && l.scorePercent !== null && l.mode !== "practice")
        .sort((a, b) => (a.finishedAt ?? 0) - (b.finishedAt ?? 0))
        .slice(-14)
        .map((l, i) => ({ label: `#${i + 1}`, value: l.scorePercent ?? 0 })),
    [state.log]
  );

  const boxes = useMemo(() => {
    const counts = SRS_INTERVAL_DAYS.map(() => 0);
    for (const v of Object.values(state.qdata)) if (v.dueAt !== null) counts[v.box]++;
    return counts.map((c, i) => ({ label: `Box ${i}`, value: c }));
  }, [state.qdata]);

  if (bank.status === "loading") return <Spinner />;
  const empty = state.attempts.length === 0;

  return (
    <>
      <PageHeader title="Fortschritt" subtitle="Alle Auswertungen basieren auf Ihren tatsächlich gespeicherten Antworten." crumbs={[{ label: "Start", href: "/" }, { label: "Fortschritt" }]} />
      {empty ? (
        <EmptyState icon={<BarChart3 className="h-6 w-6" />} title="Noch keine Lernaktivität" action={<LinkButton href="/quiz/setup/">Erstes Quiz starten</LinkButton>}>
          Sobald Sie Aufgaben bearbeitet haben, sehen Sie hier Verlauf, Themen-Auswertung und Empfehlungen.
        </EmptyState>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Bearbeitete Aufgaben" value={`${stats.answered} / ${stats.total}`} />
            <StatCard label="Trefferquote" value={stats.accuracy === null ? "–" : `${String(stats.accuracy).replace(".", ",")} %`} />
            <StatCard label="Lernzeit" value={formatDuration(stats.studyTimeMs)} />
            <StatCard label="Lernserie" value={stats.streakDays ? `${stats.streakDays} Tage` : "–"} />
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Card>
              <h2 className="mb-2 font-semibold">Beantwortete Aufgaben (letzte 14 Tage)</h2>
              <BarChart data={days} label="Beantwortete Aufgaben pro Tag" />
            </Card>
            <Card>
              <h2 className="mb-2 font-semibold">Prüfungsergebnisse (%)</h2>
              {exams.length === 0 ? <p className="py-8 text-center text-sm text-muted">Noch keine abgeschlossenen Prüfungen mit Bewertung.</p> : <BarChart data={exams} label="Prüfungsergebnisse in Prozent" max={100} />}
            </Card>
            <Card>
              <h2 className="mb-3 font-semibold">Quote nach Kapitel</h2>
              <ul className="space-y-2 text-sm">
                {chStats.map((c) => (
                  <li key={c.chapterId} className="flex items-center justify-between gap-3">
                    <Link href={`/library/?chapter=${c.chapterId}`} className="min-w-0 truncate hover:underline">{c.title}</Link>
                    <span className="shrink-0 tabular-nums text-muted">{c.accuracy === null ? "unbewertet" : `${String(c.accuracy).replace(".", ",")} %`} · {c.answered}/{c.total}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="mb-2 font-semibold">Wiederholungsplan (Leitner)</h2>
              <BarChart data={boxes} label="Aufgaben pro Leitner-Box" />
              <p className="mt-2 text-xs text-muted">Regeln: richtig → nächste Box (Intervalle {SRS_INTERVAL_DAYS.join(" / ")} Tage), nicht voll richtig → zurück zu Box 0 und sofort fällig.</p>
            </Card>
          </div>

          <Card className="mt-6">
            <h2 className="mb-1 font-semibold">Empfehlungen</h2>
            <Badge tone="neutral">App-generiert – keine offizielle Aussage</Badge>
            <ul className="mt-3 space-y-2 text-sm">
              {weak.length === 0 && repeated.size === 0 && <li className="text-muted">Noch nicht genug bewertete Antworten für Empfehlungen.</li>}
              {weak.map((w) => (
                <li key={w.chapterId}>
                  Wiederholen Sie <Link className="text-teal hover:underline" href={`/quiz/setup/?chapter=${w.chapterId}`}>{w.title}</Link> – bisherige Quote {String(w.accuracy).replace(".", ",")} %.
                </li>
              ))}
              {repeated.size > 0 && (
                <li>
                  {repeated.size} Aufgabe(n) wurden mehrfach nicht voll richtig beantwortet. <Link className="text-teal hover:underline" href="/mistakes/">Fehler ansehen</Link>
                </li>
              )}
            </ul>
          </Card>

          <Card className="mt-6">
            <h2 className="mb-3 font-semibold">Sitzungsverlauf</h2>
            {state.log.length === 0 ? (
              <p className="text-sm text-muted">Keine Sitzungen.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Sitzungsverlauf</caption>
                  <thead className="text-xs text-muted">
                    <tr>
                      <th className="py-2 pr-3">Sitzung</th>
                      <th className="py-2 pr-3">Datum</th>
                      <th className="py-2 pr-3">Aufgaben</th>
                      <th className="py-2 pr-3">Quote</th>
                      <th className="py-2 pr-3">Zeit</th>
                      <th className="py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {[...state.log].sort((a, b) => (b.finishedAt ?? b.startedAt) - (a.finishedAt ?? a.startedAt)).slice(0, 30).map((l) => (
                      <tr key={l.sessionId}>
                        <td className="py-2 pr-3"><Link className="hover:underline" href={l.finishedAt ? `/quiz/results/?id=${l.sessionId}` : `/quiz/run/?id=${l.sessionId}`}>{l.title}</Link></td>
                        <td className="py-2 pr-3 whitespace-nowrap">{new Date(l.startedAt).toLocaleDateString("de-DE")}</td>
                        <td className="py-2 pr-3 tabular-nums">{l.answered}/{l.total}</td>
                        <td className="py-2 pr-3 tabular-nums">{l.scorePercent === null ? "–" : `${String(l.scorePercent).replace(".", ",")} %`}</td>
                        <td className="py-2 pr-3 whitespace-nowrap">{formatDuration(l.durationMs)}</td>
                        <td className="py-2">{l.finishedAt ? (l.passed === null ? "beendet" : l.passed ? <Badge tone="ok">bestanden</Badge> : <Badge tone="bad">nicht bestanden</Badge>) : <Badge tone="warn">offen</Badge>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
          <div className="mt-4"><Notice tone="teal">„Bestanden“ bezieht sich auf Ihre in der App eingestellte Schwelle, nicht auf die staatliche Prüfung.</Notice></div>
        </>
      )}
    </>
  );
}
