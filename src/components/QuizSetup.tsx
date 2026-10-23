"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { PlayCircle, RotateCcw } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import { useUserContext, newId } from "@/lib/hooks";
import { ALL_TYPES, TYPE_LABELS, buildSession, chapterDescendantsFn, defaultConfig, eligibleQuestions, validateConfig } from "@/lib/exam";
import type { ExamConfig, ExamMode, QuestionSource, QuestionType } from "@/lib/types";
import { Button, Card, EmptyState, Field, Input, Notice, PageHeader, Select, Spinner, Toggle, cn } from "./ui";

const MODES: { id: ExamMode; label: string; hint: string }[] = [
  { id: "practice", label: "Üben", hint: "Eigenes Tempo, Feedback nach jeder Antwort." },
  { id: "mock", label: "Probeprüfung", hint: "Prüfungsnah: Zeitlimit, Feedback erst am Ende." },
  { id: "chapter", label: "Kapitelprüfung", hint: "Fragen aus ausgewählten Kapiteln." },
  { id: "custom", label: "Eigenes Quiz", hint: "Alle Einstellungen frei wählbar." },
];

const SOURCES: { id: QuestionSource; label: string }[] = [
  { id: "all", label: "Alle Fragen" },
  { id: "chapters", label: "Ausgewählte Kapitel" },
  { id: "case", label: "Ausgewählte Fallbeispiele" },
  { id: "bookmarks", label: "Lesezeichen" },
  { id: "incorrect", label: "Falsch beantwortete Fragen" },
  { id: "unanswered", label: "Noch nicht beantwortet" },
  { id: "due", label: "Fällige Wiederholungen" },
];

export function QuizSetup() {
  const bank = useBank();
  if (bank.status === "loading") return <Spinner label="Fragenbank wird geladen …" />;
  return <SetupInner />;
}

function SetupInner() {
  const { state, dispatch, flush } = useStore();
  const bank = useBank();
  const ctx = useUserContext();
  const router = useRouter();
  const params = useSearchParams();
  const s = state.settings;

  const [cfg, setCfg] = useState<ExamConfig>(() => {
    const base = defaultConfig({
      mode: s.defaultMode === "mistakes" || s.defaultMode === "bookmarks" || s.defaultMode === "case" || s.defaultMode === "due" ? "practice" : s.defaultMode,
      questionCount: s.defaultQuestionCount,
      timeLimitMin: s.defaultTimeLimitMin,
      feedback: s.defaultFeedback,
      showExplanations: s.defaultFeedback,
      passPercent: s.passPercent,
      order: s.shuffleQuestions ? "random" : "source",
      shuffleOptions: s.shuffleOptions,
    });
    // Voreinstellungen aus der URL (z. B. von "Fehler" oder "Fallbeispiele") – einmalig beim Öffnen.
    const preset = params.get("preset");
    const caseId = params.get("case");
    const chapterId = params.get("chapter");
    const next: ExamConfig = { ...base };
    if (preset === "mistakes") Object.assign(next, { source: "incorrect", mode: "practice", title: "Fehler wiederholen" });
    if (preset === "bookmarks") Object.assign(next, { source: "bookmarks", mode: "practice", title: "Lesezeichen" });
    if (preset === "due") Object.assign(next, { source: "due", mode: "practice", title: "Fällige Wiederholungen" });
    if (preset === "unanswered") Object.assign(next, { source: "unanswered", title: "Noch nicht beantwortet" });
    if (preset === "mock") Object.assign(next, { mode: "mock", feedback: "end", showExplanations: "end", timeLimitMin: base.timeLimitMin || 60, order: "random", title: "Probeprüfung" });
    if (caseId) Object.assign(next, { source: "case", caseIds: [caseId], mode: "practice", title: bank.caseById.get(caseId)?.title ?? "Fallbeispiel", questionCount: bank.questions.filter((q) => q.caseId === caseId).length || 1 });
    if (chapterId) Object.assign(next, { source: "chapters", chapterIds: [chapterId], mode: "chapter" });
    return next;
  });
  const [error, setError] = useState<{ errors: string[]; alternatives: number[] } | null>(null);

  function countFor(src: QuestionSource) {
    return eligibleQuestions(bank.questions, { ...cfg, source: src }, ctx, chapterDescendantsFn(bank.chapters)).length;
  }

  const descendants = useMemo(() => chapterDescendantsFn(bank.chapters), [bank.chapters]);
  const eligible = useMemo(() => eligibleQuestions(bank.questions, cfg, ctx, descendants), [bank.questions, cfg, ctx, descendants]);
  const issues = useMemo(() => validateConfig(cfg), [cfg]);
  const set = <K extends keyof ExamConfig>(k: K, v: ExamConfig[K]) => {
    setError(null);
    setCfg((c) => ({ ...c, [k]: v }));
  };

  if (bank.status !== "ready")
    return (
      <>
        <PageHeader title="Quiz & Prüfung" />
        <EmptyState title="Keine Fragen vorhanden">Die Fragenbank ist leer oder konnte nicht geladen werden. Prüfen Sie den Import unter „Import & Qualität“.</EmptyState>
      </>
    );

  const parentChapters = bank.chapters.filter((c) => bank.questions.some((q) => descendants(c.id).includes(q.chapterId)));
  const err = (f: keyof ExamConfig) => issues.find((i) => i.field === f)?.message;

  function start() {
    const res = buildSession(bank.questions, cfg, ctx, { id: newId("s"), now: Date.now(), chapterDescendants: descendants });
    if (!res.ok) {
      setError({ errors: res.errors, alternatives: res.alternatives });
      return;
    }
    dispatch({ type: "session", session: res.session, makeActive: true });
    void flush().then(() => router.push(`/quiz/run/?id=${res.session.id}`));
  }

  function chooseMode(m: ExamMode) {
    // Modus setzt NUR beim Wechsel sinnvolle Voreinstellungen – danach bleibt alles frei änderbar.
    setError(null);
    setCfg((c) => {
      if (m === "mock") return { ...c, mode: m, feedback: "end", showExplanations: "end", timeLimitMin: c.timeLimitMin || 60, order: "random" };
      if (m === "practice") return { ...c, mode: m, feedback: "instant", showExplanations: "instant", timeLimitMin: 0 };
      if (m === "chapter") return { ...c, mode: m, source: "chapters" };
      return { ...c, mode: m };
    });
  }

  const toggleType = (t: QuestionType) => set("questionTypes", cfg.questionTypes.includes(t) ? cfg.questionTypes.filter((x) => x !== t) : [...cfg.questionTypes, t]);
  const toggleList = (k: "chapterIds" | "caseIds", id: string) => set(k, cfg[k].includes(id) ? cfg[k].filter((x) => x !== id) : [...cfg[k], id]);
  const presentTypes = ALL_TYPES.filter((t) => bank.questions.some((q) => q.type === t));

  return (
    <>
      <PageHeader title="Quiz & Prüfung" subtitle="Stellen Sie Ihre Sitzung zusammen. Alle Einstellungen bleiben genau so, wie Sie sie wählen." crumbs={[{ label: "Start", href: "/" }, { label: "Quiz & Prüfung" }]} />

      {state.activeSessionId && state.sessions[state.activeSessionId] && (
        <Notice tone="teal" title="Unfertige Sitzung vorhanden">
          <a className="underline" href={`/quiz/run/?id=${state.activeSessionId}`}>
            Sitzung „{state.sessions[state.activeSessionId].config.title || "ohne Titel"}“ fortsetzen
          </a>
        </Notice>
      )}

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-5">
          <Card>
            <h2 className="mb-3 font-semibold">1 · Modus</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {MODES.map((m) => (
                <button key={m.id} onClick={() => chooseMode(m.id)} aria-pressed={cfg.mode === m.id} className={cn("rounded-xl border p-3 text-left transition-colors", cfg.mode === m.id ? "border-teal bg-tealsoft" : "border-line hover:bg-surface2")}>
                  <span className="block font-medium">{m.label}</span>
                  <span className="text-xs text-muted">{m.hint}</span>
                </button>
              ))}
            </div>
            <div className="mt-4">
              <Field label="Titel (optional)" htmlFor="title">
                <Input id="title" value={cfg.title} maxLength={80} onChange={(e) => set("title", e.target.value)} placeholder="z. B. Probeprüfung Tag 1" />
              </Field>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 font-semibold">2 · Fragenquelle</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Quelle" htmlFor="source">
                <Select id="source" value={cfg.source} onChange={(e) => set("source", e.target.value as QuestionSource)}>
                  {SOURCES.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label} ({countFor(o.id)})
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Reihenfolge" htmlFor="order" hint="Bei Fallbeispielen bleiben zusammengehörige Aufgaben immer zusammen.">
                <Select id="order" value={cfg.order} onChange={(e) => set("order", e.target.value as "source" | "random")}>
                  <option value="source">Originalreihenfolge des Buches</option>
                  <option value="random">Zufällig</option>
                </Select>
              </Field>
            </div>

            {cfg.source === "chapters" && (
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Kapitel</legend>
                {err("chapterIds") && <p role="alert" className="mb-1 text-xs text-bad">{err("chapterIds")}</p>}
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {parentChapters.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 rounded-lg border border-line p-2 text-sm">
                      <input type="checkbox" className="accent-[var(--teal)]" checked={cfg.chapterIds.includes(c.id)} onChange={() => toggleList("chapterIds", c.id)} />
                      {c.number} {c.title}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
            {cfg.source === "case" && (
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Fallbeispiele</legend>
                {err("caseIds") && <p role="alert" className="mb-1 text-xs text-bad">{err("caseIds")}</p>}
                <div className="grid max-h-64 gap-1.5 overflow-y-auto sm:grid-cols-2">
                  {bank.cases.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 rounded-lg border border-line p-2 text-sm">
                      <input type="checkbox" className="accent-[var(--teal)]" checked={cfg.caseIds.includes(c.id)} onChange={() => toggleList("caseIds", c.id)} />
                      {c.title}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            <fieldset className="mt-4">
              <legend className="mb-1 text-sm font-medium">Fragetypen</legend>
              {err("questionTypes") && <p role="alert" className="mb-1 text-xs text-bad">{err("questionTypes")}</p>}
              <div className="flex flex-wrap gap-2">
                {presentTypes.map((t) => (
                  <label key={t} className={cn("flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 text-sm", cfg.questionTypes.includes(t) ? "border-teal bg-tealsoft" : "border-line")}>
                    <input type="checkbox" className="sr-only" checked={cfg.questionTypes.includes(t)} onChange={() => toggleType(t)} />
                    {TYPE_LABELS[t]}
                  </label>
                ))}
              </div>
              <p className="mt-1 text-xs text-muted">Im Buch kommen überwiegend offene Fallaufgaben vor; Multiple-Choice-Typen erscheinen nur, wenn sie importiert wurden.</p>
            </fieldset>
          </Card>

          <Card>
            <h2 className="mb-3 font-semibold">3 · Umfang & Zeit</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="Anzahl Fragen" htmlFor="count" error={err("questionCount")}>
                <Input id="count" type="number" min={1} max={1000} value={cfg.questionCount} onChange={(e) => set("questionCount", Math.floor(Number(e.target.value)))} />
              </Field>
              <Field label="Gesamtzeit (Min., 0 = ohne)" htmlFor="tl" error={err("timeLimitMin")}>
                <Input id="tl" type="number" min={0} max={600} value={cfg.timeLimitMin} onChange={(e) => set("timeLimitMin", Number(e.target.value))} />
              </Field>
              <Field label="Zeit je Frage (Sek., 0 = ohne)" htmlFor="pq" error={err("perQuestionSec")}>
                <Input id="pq" type="number" min={0} max={3600} value={cfg.perQuestionSec} onChange={(e) => set("perQuestionSec", Number(e.target.value))} />
              </Field>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 font-semibold">4 · Feedback & Bewertung</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="Feedback" htmlFor="fb">
                <Select id="fb" value={cfg.feedback} onChange={(e) => set("feedback", e.target.value as "instant" | "end")}>
                  <option value="instant">Sofort nach jeder Antwort</option>
                  <option value="end">Erst nach Abgabe</option>
                </Select>
              </Field>
              <Field label="Musterlösung anzeigen" htmlFor="ex">
                <Select id="ex" value={cfg.showExplanations} onChange={(e) => set("showExplanations", e.target.value as "instant" | "end")}>
                  <option value="instant">Nach jeder Antwort</option>
                  <option value="end">Erst am Ende</option>
                </Select>
              </Field>
              <Field label="Bestehensgrenze (App, %)" htmlFor="pp" error={err("passPercent")} hint="Eigene Lernschwelle – keine amtliche Bestehensregel.">
                <Input id="pp" type="number" min={0} max={100} value={cfg.passPercent} onChange={(e) => set("passPercent", Number(e.target.value))} />
              </Field>
            </div>
            <div className="mt-3 divide-y divide-line">
              <Toggle checked={cfg.shuffleOptions} onChange={(v) => set("shuffleOptions", v)} label="Antwortoptionen mischen" hint="Nur bei Auswahlfragen; Optionen wie „Alle genannten …“ werden nie gemischt." />
              <Toggle checked={cfg.allowRepeat} onChange={(v) => set("allowRepeat", v)} label="Bereits beantwortete Fragen erneut zulassen" />
              <Toggle checked={cfg.saveSession} onChange={(v) => set("saveSession", v)} label="Sitzung speichern (später fortsetzen & im Verlauf)" />
            </div>
          </Card>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <Card>
            <h2 className="font-semibold">Zusammenfassung</h2>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between"><dt className="text-muted">Passende Fragen</dt><dd className="font-medium tabular-nums">{eligible.length}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Gewählt</dt><dd className="font-medium tabular-nums">{cfg.questionCount}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Zeit</dt><dd className="font-medium">{cfg.timeLimitMin ? `${cfg.timeLimitMin} Min.` : "ohne Limit"}</dd></div>
              <div className="flex justify-between"><dt className="text-muted">Feedback</dt><dd className="font-medium">{cfg.feedback === "instant" ? "sofort" : "am Ende"}</dd></div>
            </dl>
            {eligible.length === 0 && <p className="mt-3 text-sm text-warn">Mit diesen Filtern gibt es keine Fragen.</p>}
            {error && (
              <div role="alert" className="mt-4 rounded-xl bg-badsoft p-3 text-sm text-bad">
                {error.errors.map((e, i) => <p key={i}>{e}</p>)}
                {error.alternatives.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Mögliche Alternativen:</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {error.alternatives.map((n) => (
                        <Button key={n} size="sm" variant="secondary" onClick={() => set("questionCount", n)}>
                          {n} Fragen
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            <Button size="lg" className="mt-4 w-full" onClick={start} disabled={issues.length > 0 || eligible.length === 0}>
              <PlayCircle className="h-5 w-5" aria-hidden /> Starten
            </Button>
            <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={() => { setCfg(defaultConfig()); setError(null); }}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Auf Standard zurücksetzen
            </Button>
          </Card>
        </aside>
      </div>
    </>
  );
}
