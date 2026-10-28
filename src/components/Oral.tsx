"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useBank } from "@/lib/bank";
import { useStore } from "@/lib/store";
import { latestAttempts } from "@/lib/stats";
import { useLang, useT } from "@/lib/i18n";
import { AB_LABEL, ORAL_AR, ORAL_AREAS, ORAL_FLOW, ORAL_STEPS, ORAL_TASK_MIX, ORAL_TIPS, OPERATORS, findOperators, focusPoints, parseSetting } from "@/data/oralGuide";
import { Button, Card, EmptyState, PageHeader, Progress, Spinner, cn } from "./ui";
import { DiagramView } from "./Diagram";
import { Icon } from "./Icon";

/** "So antwortest du": zeigt zu den Operatoren einer Aufgabe, wie man aufbaut. */
export function OperatorHint({ text }: { text: string }) {
  const lang = useLang();
  const hits = findOperators(text);
  if (!hits.length) return null;
  return (
    <details className="rounded-xl border border-teal/30 bg-tealsoft">
      <summary className="flex min-h-11 cursor-pointer items-center gap-2 px-3 text-sm font-medium">
        <Icon name="Target" className="h-4 w-4 text-teal" /> So antwortest du
        <span className="ms-auto text-xs font-normal text-muted">{hits.map((h) => h.op.label.split(",")[0]).join(" + ")}</span>
      </summary>
      <div className="space-y-4 border-t border-teal/20 p-3 text-sm">
        {hits.map(({ op }) => (
          <div key={op.id}>
            <p className="font-semibold">
              {op.label} <span className="ms-1 whitespace-nowrap rounded-full bg-teal/15 px-2 py-0.5 text-xs font-medium text-teal">{AB_LABEL[op.ab].split(":")[0]}</span>
            </p>
            <p className="mt-0.5 text-muted">{op.idea}</p>
            <ol className="mt-2 list-decimal space-y-1 ps-5">
              {op.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="mt-2 rounded-lg bg-surface px-3 py-2 italic">„{op.starter}“</p>
            {(lang === "ar" || lang === "de") && (
              <p dir="rtl" lang="ar" className="mt-2 text-[0.85rem] text-muted">
                {op.ar}
              </p>
            )}
          </div>
        ))}
        <p className="text-xs text-muted">Danach vergleichst du mit der Musterlösung unten. Sinngemäß richtig reicht, du musst nicht wörtlich dasselbe sagen.</p>
      </div>
    </details>
  );
}

const mmss = (s: number) => `${String(Math.floor(Math.max(0, s) / 60)).padStart(2, "0")}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

type Phase = "idle" | "prep" | "talk" | "done";
interface TimerState {
  phase: Phase;
  endsAt: number;
}

function Choice({ value, set, opts, label, disabled }: { value: number; set: (n: number) => void; opts: number[]; label: string; disabled: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted">{label}</span>
      {opts.map((o) => (
        <button key={o} type="button" disabled={disabled} onClick={() => set(o)} aria-pressed={value === o} className={cn("h-8 rounded-lg border px-3 text-sm disabled:opacity-60", value === o ? "border-teal bg-tealsoft font-semibold" : "border-line")}>
          {o} Min.
        </button>
      ))}
    </div>
  );
}

/** Übungs-Timer: Vorbereitungszeit, dann Prüfungsgespräch. */
function OralTimer() {
  const [prepMin, setPrepMin] = useState(30);
  const [talkMin, setTalkMin] = useState(45);
  const [st, setSt] = useState<TimerState>({ phase: "idle", endsAt: 0 });
  const [now, setNow] = useState(0);
  const running = st.phase === "prep" || st.phase === "talk";

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      setSt((cur) => {
        if (cur.phase === "prep" && t >= cur.endsAt) return { phase: "talk", endsAt: t + talkMin * 60000 };
        if (cur.phase === "talk" && t >= cur.endsAt) return { phase: "done", endsAt: 0 };
        return cur;
      });
    }, 500);
    return () => clearInterval(id);
  }, [running, talkMin]);

  const start = (phase: "prep" | "talk", min: number) => {
    const t = Date.now();
    setNow(t);
    setSt({ phase, endsAt: t + min * 60000 });
  };
  const phase = st.phase;
  const left = running ? Math.max(0, Math.ceil((st.endsAt - now) / 1000)) : 0;
  return (
    <Card>
      <h2 className="mb-1 flex items-center gap-2 font-semibold"><Icon name="Timer" className="h-5 w-5 text-teal" /> Übungs-Timer</h2>
      <p className="mb-3 text-sm text-muted">Zieh einen Fall, starte die Vorbereitung und lies, markiere, notiere Stichpunkte. Danach läuft die Zeit für das Prüfungsgespräch. Sprich laut und nimm dich auf.</p>
      <div className="mb-3 flex flex-wrap gap-x-6 gap-y-2">
        <Choice value={prepMin} set={setPrepMin} opts={[20, 30]} label="Vorbereitung" disabled={phase !== "idle"} />
        <Choice value={talkMin} set={setTalkMin} opts={[30, 45]} label="Gespräch" disabled={phase !== "idle"} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div role="timer" aria-live="off" className={cn("min-w-32 rounded-2xl px-4 py-2 text-center text-4xl font-bold tabular-nums", phase === "prep" ? "bg-warnsoft text-warn" : phase === "talk" ? "bg-badsoft text-bad" : "bg-surface2")}>
          {phase === "idle" ? mmss(prepMin * 60) : phase === "done" ? "00:00" : mmss(left)}
        </div>
        <div className="text-sm">
          <p className="font-semibold">{phase === "idle" ? "Bereit" : phase === "prep" ? "Vorbereitungszeit" : phase === "talk" ? "Prüfungsgespräch" : "Zeit ist um"}</p>
          <p className="text-muted">{phase === "prep" ? "Lesen, markieren, Stichpunkte" : phase === "talk" ? "Zusammenfassen, dann Aufgaben beantworten" : phase === "done" ? "Vergleiche mit dem Erwartungshorizont" : "Wähle die Zeiten und starte"}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {phase === "idle" && <Button onClick={() => start("prep", prepMin)}>Vorbereitung starten</Button>}
        {phase === "prep" && <Button onClick={() => start("talk", talkMin)}>Jetzt zum Gespräch</Button>}
        {running && <Button variant="secondary" onClick={() => setSt({ phase: "idle", endsAt: 0 })}>Abbrechen</Button>}
        {phase === "done" && <Button variant="secondary" onClick={() => setSt({ phase: "idle", endsAt: 0 })}>Zurücksetzen</Button>}
      </div>
    </Card>
  );
}

export function OralHub() {
  const t = useT();
  const lang = useLang();
  const bank = useBank();
  const { state } = useStore();
  const router = useRouter();
  const latest = useMemo(() => latestAttempts(state.attempts), [state.attempts]);
  const [area, setArea] = useState("");
  const [age, setAge] = useState("");

  const oral = useMemo(() => bank.cases.filter((c) => c.kind === "oral"), [bank.cases]);
  const areas = useMemo(() => [...new Set(oral.map((c) => parseSetting(c.setting).area).filter(Boolean))], [oral]);
  const ages = useMemo(() => [...new Set(oral.map((c) => parseSetting(c.setting).age).filter(Boolean))], [oral]);
  const shown = oral.filter((c) => {
    const s = parseSetting(c.setting);
    return (!area || s.area === area) && (!age || s.age === age);
  });

  if (bank.status === "loading") return <Spinner />;

  const chip = (active: boolean) => cn("min-h-9 rounded-full border px-3 py-1 text-sm", active ? "border-teal bg-tealsoft font-semibold" : "border-line bg-surface");

  return (
    <>
      <PageHeader title={t("nav.oral")} subtitle="Ablauf, Antwortschema und 12 Prüfungsfälle mit Erwartungshorizont" crumbs={[{ label: "Start", href: "/" }, { label: t("nav.oral") }]} />

      {(lang === "ar" || lang === "de") && (
        <div dir="rtl" lang="ar" className="mb-5 rounded-2xl border border-teal/30 bg-tealsoft p-4 text-sm leading-relaxed">
          <p className="mb-1 text-xs font-semibold text-teal">الخلاصة</p>
          {ORAL_AR}
        </div>
      )}

      <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DiagramView d={ORAL_FLOW} />
        <div className="space-y-4">
          <DiagramView d={ORAL_AREAS} />
          <DiagramView d={ORAL_TASK_MIX} />
        </div>
      </div>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">So gehst du vor: 6 Schritte</h2>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ORAL_STEPS.map((s, i) => (
            <li key={i}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white dark:text-[#04222a]">{i + 1}</span>
                  <div>
                    <p className="flex items-center gap-1.5 font-semibold"><Icon name={s.icon} className="h-4 w-4 text-teal" /> {s.t}</p>
                    <p className="mt-1 text-sm text-muted">{s.s}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="mb-1 text-lg font-semibold">Operatoren: Wie sollst du antworten?</h2>
        <p className="mb-3 text-sm text-muted">Das Verb in der Aufgabe bestimmt Tiefe und Aufbau. Zu jeder Aufgabe in den Fällen zeigt dir die App diesen Hinweis direkt an.</p>
        {([1, 2, 3] as const).map((ab) => (
          <div key={ab} className="mb-3">
            <h3 className="mb-2 text-sm font-semibold text-teal">{AB_LABEL[ab]}</h3>
            <div className="space-y-2">
              {OPERATORS.filter((o) => o.ab === ab).map((o) => (
                <details key={o.id} className="rounded-xl border border-line bg-surface">
                  <summary className="min-h-11 cursor-pointer px-4 py-2.5 font-medium">{o.label}</summary>
                  <div className="space-y-2 border-t border-line p-4 text-sm">
                    <p className="text-muted">{o.idea}</p>
                    <ol className="list-decimal space-y-1 ps-5">
                      {o.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                    <p className="rounded-lg bg-surface2 px-3 py-2 italic">„{o.starter}“</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <OralTimer />
      </section>

      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold">Prüfungsfälle</h2>
        <p className="mb-3 text-sm text-muted">Wähle Altersgruppe und Versorgungsbereich, die du in der praktischen Prüfung nicht hattest.</p>
        {oral.length === 0 ? (
          <EmptyState title="Keine mündlichen Fälle gefunden">Die Fragenbank enthält noch keine mündlichen Prüfungsfälle.</EmptyState>
        ) : (
          <>
            <div className="mb-2 flex flex-wrap gap-2" role="group" aria-label="Versorgungsbereich">
              <button className={chip(!area)} onClick={() => setArea("")}>Alle Bereiche</button>
              {areas.map((a) => (
                <button key={a} className={chip(area === a)} aria-pressed={area === a} onClick={() => setArea(area === a ? "" : a)}>{a}</button>
              ))}
            </div>
            <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Altersgruppe">
              <button className={chip(!age)} onClick={() => setAge("")}>Alle Altersgruppen</button>
              {ages.map((a) => (
                <button key={a} className={chip(age === a)} aria-pressed={age === a} onClick={() => setAge(age === a ? "" : a)}>{a}</button>
              ))}
            </div>
            <div className="mb-3">
              <Button variant="teal" disabled={!shown.length} onClick={() => shown.length && router.push(`/cases/view/?id=${shown[Math.floor(Math.random() * shown.length)].id}`)}>
                <Icon name="Shuffle" className="h-4 w-4" /> Zufälligen Fall ziehen ({shown.length})
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((c) => {
                const qs = bank.questions.filter((q) => q.caseId === c.id);
                const done = qs.filter((q) => latest.has(q.id)).length;
                const s = parseSetting(c.setting);
                const fp = focusPoints(c.preparation);
                return (
                  <Link key={c.id} href={`/cases/view/?id=${c.id}`} className="group block">
                    <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-teal group-hover:shadow-md">
                      <h3 className="font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-1 text-xs text-muted">{s.area}{s.age ? `, ${s.age}` : ""}</p>
                      {fp.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {fp.slice(0, 4).map((f, i) => (
                            <li key={i} className="rounded-full bg-surface2 px-2 py-0.5 text-xs">{f.replace(/\s*\(KB[^)]*\)/g, "")}</li>
                          ))}
                          {fp.length > 4 && <li className="px-1 text-xs text-muted">+{fp.length - 4}</li>}
                        </ul>
                      )}
                      <Progress value={qs.length ? (done / qs.length) * 100 : 0} label={`${c.title}: Fortschritt`} className="mt-3" />
                      <p className="mt-1 text-xs text-muted">{done} / {qs.length} Aufgaben bearbeitet</p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">Tipps</h2>
        <div className="space-y-2">
          {ORAL_TIPS.map((g) => (
            <details key={g.h} className="rounded-xl border border-line bg-surface">
              <summary className="min-h-11 cursor-pointer px-4 py-2.5 font-medium">{g.h}</summary>
              <ul className="space-y-1.5 border-t border-line p-4 text-sm">
                {g.li.map((x, i) => (
                  <li key={i} className="relative ps-4 before:absolute before:start-0 before:content-['•']">{x}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>
      <p className="text-xs text-muted">Hilfen der App in eigenen Worten. Es gelten die Vorgaben der PflAPrV und deiner Pflegeschule. Die Musterlösungen stammen aus dem Prüfungsbuch (Erwartungshorizont).</p>
    </>
  );
}
