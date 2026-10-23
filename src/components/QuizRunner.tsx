"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Clock, Flag, Send, Timer } from "lucide-react";
import { useStore } from "@/lib/store";
import { useBank } from "@/lib/bank";
import type { SessionAnswer, SessionState } from "@/lib/types";
import { gradeQuestion, isAnswered, isChoice } from "@/lib/grading";
import { buildAttempts, buildLogEntry, progressOf, remainingMs, sessionQuestions } from "@/lib/session";
import { nextSrs } from "@/lib/srs";
import { playTone } from "@/lib/sound";
import { formatDuration } from "@/lib/stats";
import { Badge, Button, Card, ConfirmDialog, EmptyState, Notice, Progress, Spinner, Textarea, cn } from "./ui";
import { CaseNarrative, ChoiceInput, FreeTextInput, GradeBadge, ModelAnswerBox, QuestionMeta, QuestionText, SelfAssess } from "./QuestionView";

function fmtClock(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export function QuizRunner() {
  const params = useSearchParams();
  const id = params.get("id") ?? "";
  const { state, dispatch, flush } = useStore();
  const bank = useBank();
  const router = useRouter();
  const stored = state.sessions[id];

  // Lokale Arbeitskopie der Sitzung; wird debounced in den Speicher geschrieben.
  const [session, setSession] = useState<SessionState | null>(null);
  const sessionRef = useRef<SessionState | null>(null);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const lastTick = useRef<number>(Date.now());
  const finished = useRef(false);

  useEffect(() => {
    if (stored && !sessionRef.current) {
      sessionRef.current = stored;
      setSession(stored);
      lastTick.current = Date.now();
    }
  }, [stored]);

  const persist = useCallback(
    (s: SessionState) => {
      const withTime = { ...s, updatedAt: Date.now() };
      sessionRef.current = withTime;
      if (withTime.config.saveSession || !withTime.finishedAt) dispatch({ type: "session", session: withTime, makeActive: !withTime.finishedAt });
    },
    [dispatch]
  );

  const update = useCallback(
    (fn: (s: SessionState) => SessionState, save = true) => {
      setSession((prev) => {
        if (!prev) return prev;
        const next = fn(prev);
        sessionRef.current = next;
        if (save) persist(next);
        return next;
      });
    },
    [persist]
  );

  // Zeitmessung: nur bei sichtbarem Tab; Gesamtzeit und Zeit je Frage
  const [, forceTick] = useState(0);
  useEffect(() => {
    if (!session || session.finishedAt) return;
    const iv = setInterval(() => {
      if (document.visibilityState !== "visible") {
        lastTick.current = Date.now();
        return;
      }
      const now = Date.now();
      const delta = Math.min(now - lastTick.current, 5000);
      lastTick.current = now;
      const cur = sessionRef.current;
      if (!cur || cur.finishedAt) return;
      const qid = cur.questionIds[cur.currentIndex];
      const ans = cur.answers[qid] ?? { timeMs: 0 };
      // Nach "Prüfen" läuft die Antwortzeit nicht weiter
      const frozen = ans.submitted;
      const next: SessionState = {
        ...cur,
        elapsedMs: cur.elapsedMs + delta,
        answers: frozen ? cur.answers : { ...cur.answers, [qid]: { ...ans, timeMs: ans.timeMs + delta } },
      };
      sessionRef.current = next;
      setSession(next);
      forceTick((n) => n + 1);
    }, 1000);
    return () => clearInterval(iv);
  }, [session?.id, session?.finishedAt]); // eslint-disable-line react-hooks/exhaustive-deps

  // Autosave alle 5 Sekunden + beim Verlassen
  useEffect(() => {
    if (!session || session.finishedAt) return;
    const iv = setInterval(() => sessionRef.current && persist(sessionRef.current), 5000);
    const onHide = () => sessionRef.current && persist(sessionRef.current);
    window.addEventListener("pagehide", onHide);
    return () => {
      clearInterval(iv);
      window.removeEventListener("pagehide", onHide);
      onHide();
    };
  }, [session?.id, session?.finishedAt, persist]); // eslint-disable-line react-hooks/exhaustive-deps

  const questions = useMemo(() => (session ? sessionQuestions(session, bank.byId) : []), [session, bank.byId]);

  const finish = useCallback(
    async (auto = false) => {
      const cur = sessionRef.current;
      if (!cur || finished.current) return;
      finished.current = true;
      const now = Date.now();
      const done: SessionState = { ...cur, finishedAt: now, updatedAt: now };
      sessionRef.current = done;
      setSession(done);
      dispatch({ type: "session", session: done });
      dispatch({ type: "active", id: null });
      const attempts = buildAttempts(done, bank.byId, now);
      for (const a of attempts) {
        dispatch({ type: "attempt", attempt: a });
        // Spaced Repetition: nur bewertete Antworten
        if (a.gradedBy !== "none" && a.correct !== null) {
          const prev = state.qdata[a.questionId];
          const n = nextSrs(prev?.box ?? 0, a.correct, now);
          dispatch({ type: "qdata", id: a.questionId, patch: n });
        }
      }
      dispatch({ type: "log", entry: buildLogEntry(done, bank.byId, now) });
      await flush();
      if (auto) setNotice("Die Zeit ist abgelaufen – die Prüfung wurde automatisch abgegeben.");
      router.push(`/quiz/results/?id=${done.id}`);
    },
    [bank.byId, dispatch, flush, router, state.qdata]
  );

  // Gesamtzeit abgelaufen → automatisch abgeben
  const remaining = session ? remainingMs(session) : null;
  useEffect(() => {
    if (session && !session.finishedAt && remaining === 0) void finish(true);
  }, [remaining, session, finish]);

  // Tastatur: Pfeiltasten
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT" || t.isContentEditable)) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (bank.status === "loading") return <Spinner label="Fragenbank wird geladen …" />;
  if (!stored && !session)
    return (
      <EmptyState title="Sitzung nicht gefunden" action={<Link className="text-teal underline" href="/quiz/setup/">Neues Quiz starten</Link>}>
        Diese Sitzung existiert nicht (mehr). Sie wurde evtl. gelöscht oder auf einem anderen Gerät gestartet – der Fortschritt wird nur lokal im Browser gespeichert.
      </EmptyState>
    );
  if (!session) return <Spinner />;
  if (questions.length === 0)
    return (
      <EmptyState title="Keine Fragen in dieser Sitzung">
        Die Fragen dieser Sitzung sind in der aktuellen Fragenbank nicht mehr vorhanden.
      </EmptyState>
    );

  const cfg = session.config;
  const idx = Math.min(session.currentIndex, questions.length - 1);
  const q = questions[idx];
  const ans: SessionAnswer = session.answers[q.id] ?? { timeMs: 0 };
  const locked = !!ans.submitted && cfg.feedback === "instant";
  const caseOf = q.caseId ? bank.caseById.get(q.caseId) : undefined;
  const qd = state.qdata[q.id];
  const prog = progressOf(session, bank.byId);
  const instant = cfg.feedback === "instant";
  const grade = gradeQuestion(q, ans);
  const options = isChoice(q) && q.options ? (session.optionOrder[q.id] ?? q.options.map((o) => o.id)).map((oid) => q.options!.find((o) => o.id === oid)!).filter(Boolean) : [];
  const perQLeft = cfg.perQuestionSec ? cfg.perQuestionSec * 1000 - ans.timeMs : null;

  function go(delta: number) {
    update((s) => {
      const n = Math.min(Math.max(s.currentIndex + delta, 0), s.questionIds.length - 1);
      lastTick.current = Date.now();
      return { ...s, currentIndex: n };
    });
  }
  const goTo = (i: number) => update((s) => ({ ...s, currentIndex: i }));
  const setAnswer = (patch: Partial<SessionAnswer>) =>
    update((s) => ({ ...s, answers: { ...s.answers, [q.id]: { ...(s.answers[q.id] ?? { timeMs: 0 }), ...patch } } }));
  const toggleFlag = () => update((s) => ({ ...s, flagged: s.flagged.includes(q.id) ? s.flagged.filter((f) => f !== q.id) : [...s.flagged, q.id] }));

  // Zeit pro Frage abgelaufen → sperren/weiter
  const perQExpired = perQLeft !== null && perQLeft <= 0;

  const unanswered = prog.total - prog.answered;
  const isLast = idx === questions.length - 1;
  const showFeedback = instant && !!ans.submitted;
  const needsSelfAssess = !isChoice(q) && isAnswered(q, ans);

  return (
    <div className="fade-up">
      {notice && <Notice tone="teal">{notice}</Notice>}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-muted">{cfg.title || "Sitzung"}</p>
          <h1 className="text-xl font-bold">
            Frage {idx + 1} von {questions.length}
          </h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {remaining !== null && (
            <Badge tone={remaining < 60_000 ? "bad" : "teal"} className="text-sm">
              <Clock className="h-4 w-4" aria-hidden /> <span aria-label="Verbleibende Zeit">{fmtClock(remaining)}</span>
            </Badge>
          )}
          {perQLeft !== null && (
            <Badge tone={perQLeft < 10_000 ? "bad" : "neutral"} className="text-sm">
              <Timer className="h-4 w-4" aria-hidden /> {fmtClock(perQLeft)}
            </Badge>
          )}
          <Badge>{formatDuration(session.elapsedMs)}</Badge>
        </div>
      </div>
      <Progress value={(prog.answered / prog.total) * 100} label="Fortschritt der Sitzung" className="mb-5" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_16rem]">
        <div className="min-w-0 space-y-4">
          {caseOf && <CollapsibleCase c={caseOf} />}
          <Card className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <QuestionMeta q={q} />
              <div className="flex shrink-0 gap-1">
                <button
                  onClick={toggleFlag}
                  aria-pressed={session.flagged.includes(q.id)}
                  aria-label="Zur Wiederholung markieren"
                  title="Zur Wiederholung markieren"
                  className={cn("rounded-lg p-2 hover:bg-surface2", session.flagged.includes(q.id) && "text-warn")}
                >
                  <Flag className="h-5 w-5" />
                </button>
                <button
                  onClick={() => dispatch({ type: "qdata", id: q.id, patch: { bookmarked: !qd?.bookmarked } })}
                  aria-pressed={!!qd?.bookmarked}
                  aria-label="Lesezeichen"
                  title="Lesezeichen"
                  className={cn("rounded-lg p-2 hover:bg-surface2", qd?.bookmarked && "text-teal")}
                >
                  {qd?.bookmarked ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <QuestionText q={q} />

            {perQExpired && <Notice tone="warn">Die Zeit für diese Frage ist abgelaufen. Sie können zur nächsten Frage wechseln.</Notice>}

            {isChoice(q) && options.length > 0 ? (
              <ChoiceInput q={q} options={options} value={ans.selectedOptionIds ?? []} onChange={(ids) => setAnswer({ selectedOptionIds: ids })} locked={locked || perQExpired} grade={showFeedback ? grade : null} />
            ) : isChoice(q) ? (
              <Notice>Für diese Aufgabe wurden keine Antwortoptionen extrahiert. Bitte die Quellseite prüfen.</Notice>
            ) : (
              <FreeTextInput q={q} answer={ans} onChange={(text) => setAnswer({ text })} locked={locked || perQExpired} />
            )}

            {instant && !ans.submitted && (
              <div className="flex justify-end">
                <Button
                  variant="teal"
                  disabled={!isAnswered(q, ans)}
                  onClick={() => {
                    setAnswer({ submitted: true });
                    if (state.settings.sound && grade.status !== "ungraded") playTone(grade.correct ? "ok" : "bad");
                  }}
                >
                  Antwort prüfen
                </Button>
              </div>
            )}

            {showFeedback && (
              <div className="space-y-3 border-t border-line pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">Ergebnis:</span>
                  <GradeBadge g={grade} />
                </div>
                {isChoice(q) && grade.status === "ungraded" && <Notice>Für diese Aufgabe liegt kein verifizierter Antwortschlüssel vor – sie wird nicht automatisch bewertet.</Notice>}
                {cfg.showExplanations === "instant" && <ModelAnswerBox q={q} caseSolutionPages={caseOf?.sections?.solutions} />}
                {needsSelfAssess && <SelfAssess q={q} value={ans.selfPoints} onChange={(v) => setAnswer({ selfPoints: v })} />}
              </div>
            )}

            <NoteField id={q.id} />
          </Card>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button variant="secondary" onClick={() => go(-1)} disabled={idx === 0}>
              <ChevronLeft className="h-4 w-4" aria-hidden /> Zurück
            </Button>
            {isLast ? (
              <Button variant="teal" onClick={() => setConfirmSubmit(true)}>
                <Send className="h-4 w-4" aria-hidden /> Abgeben
              </Button>
            ) : (
              <Button onClick={() => go(1)}>
                Weiter <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>
            )}
          </div>
        </div>

        <aside aria-label="Fragenübersicht" className="space-y-3">
          <Card className="p-4">
            <p className="mb-2 text-sm font-semibold">Fragen</p>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-4">
              {questions.map((qq, i) => {
                const a = session.answers[qq.id];
                const done = isAnswered(qq, a);
                const fl = session.flagged.includes(qq.id);
                return (
                  <button
                    key={qq.id}
                    onClick={() => goTo(i)}
                    aria-label={`Frage ${i + 1}${done ? ", beantwortet" : ""}${fl ? ", markiert" : ""}`}
                    aria-current={i === idx ? "true" : undefined}
                    className={cn(
                      "relative h-9 rounded-lg border text-sm tabular-nums",
                      i === idx ? "border-navy2 bg-navy2 text-white dark:border-teal dark:bg-teal dark:text-[#04222a]" : done ? "border-teal bg-tealsoft text-teal" : "border-line hover:bg-surface2"
                    )}
                  >
                    {i + 1}
                    {fl && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-warn" aria-hidden />}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-muted">
              {prog.answered} von {prog.total} beantwortet · {session.flagged.length} markiert
            </p>
          </Card>
          <Button variant="teal" className="w-full" onClick={() => setConfirmSubmit(true)}>
            <Send className="h-4 w-4" aria-hidden /> Abgeben
          </Button>
          <p className="text-center text-xs text-muted">Fortschritt wird automatisch gespeichert.</p>
          <p className="hidden text-center text-xs text-muted lg:block">Tastatur: ← / → zum Blättern</p>
        </aside>
      </div>

      <ConfirmDialog
        open={confirmSubmit}
        title="Sitzung abgeben?"
        confirmLabel="Jetzt abgeben"
        onCancel={() => setConfirmSubmit(false)}
        onConfirm={() => {
          setConfirmSubmit(false);
          void finish();
        }}
        message={
          <>
            <p>
              Sie haben {prog.answered} von {prog.total} Fragen beantwortet.
              {unanswered > 0 && <strong className="text-warn"> {unanswered} Frage(n) sind noch offen und zählen dann als nicht beantwortet.</strong>}
            </p>
            {session.flagged.length > 0 && <p className="mt-2">{session.flagged.length} Frage(n) sind zur Wiederholung markiert.</p>}
            <p className="mt-2">Nach der Abgabe können Antworten nicht mehr geändert werden. Offene Aufgaben bewerten Sie auf der Ergebnisseite selbst.</p>
          </>
        }
      />
    </div>
  );
}

function CollapsibleCase({ c }: { c: NonNullable<ReturnType<typeof useBank>["caseById"] extends Map<string, infer V> ? V : never> }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="mb-2 text-sm font-medium text-teal hover:underline">
        {open ? "Fallsituation ausblenden" : "Fallsituation einblenden"}
      </button>
      {open && <CaseNarrative c={c} compact />}
    </div>
  );
}

export function NoteField({ id }: { id: string }) {
  const { state, dispatch } = useStore();
  const [open, setOpen] = useState(false);
  const note = state.qdata[id]?.note ?? "";
  return (
    <div className="border-t border-line pt-3">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="text-sm text-teal hover:underline">
        {open ? "Notiz ausblenden" : note ? "Notiz anzeigen (vorhanden)" : "Notiz hinzufügen"}
      </button>
      {open && (
        <Textarea
          aria-label="Persönliche Notiz"
          className="mt-2 w-full"
          value={note}
          onChange={(e) => dispatch({ type: "qdata", id, patch: { note: e.target.value } })}
          placeholder="Eigene Merkhilfe oder Notiz …"
        />
      )}
    </div>
  );
}
