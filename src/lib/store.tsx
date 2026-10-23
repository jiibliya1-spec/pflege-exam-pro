"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState, type ReactNode } from "react";
import { get, set } from "idb-keyval";
import { STORAGE_KEY } from "./defaults";
import { emptyState, sanitizeState, type QuestionPatch, type UserState } from "./userState";
import type {
  Question,
  AttemptRecord,
  QuestionUserData,
  SessionState,
  Settings,
  StudyLogEntry,
} from "./types";

type Action =
  | { type: "load"; state: UserState }
  | { type: "settings"; patch: Partial<Settings> }
  | { type: "attempt"; attempt: AttemptRecord }
  | { type: "attempts-replace"; sessionId: string; attempts: AttemptRecord[] }
  | { type: "session"; session: SessionState; makeActive?: boolean }
  | { type: "session-delete"; id: string }
  | { type: "active"; id: string | null }
  | { type: "qdata"; id: string; patch: Partial<QuestionUserData> }
  | { type: "log"; entry: StudyLogEntry }
  | { type: "override"; id: string; patch: QuestionPatch | null; audit?: string }
  | { type: "manual"; question: Question | null; id?: string }
  | { type: "rerun-pages"; pages: number[] }
  | { type: "reset-progress" }
  | { type: "reset-all" };

function reducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case "load":
      return action.state;
    case "settings":
      return { ...state, settings: { ...state.settings, ...action.patch } };
    case "attempt": {
      // Upsert: gleiche ID (Sitzung:Frage) überschreibt, z. B. nach nachträglicher Selbstbewertung
      const idx = state.attempts.findIndex((a) => a.id === action.attempt.id);
      if (idx === -1) return { ...state, attempts: [...state.attempts, action.attempt] };
      const attempts = state.attempts.slice();
      attempts[idx] = action.attempt;
      return { ...state, attempts };
    }
    case "attempts-replace":
      return {
        ...state,
        attempts: [...state.attempts.filter((a) => a.sessionId !== action.sessionId), ...action.attempts],
      };
    case "session":
      return {
        ...state,
        sessions: { ...state.sessions, [action.session.id]: action.session },
        activeSessionId: action.makeActive ? action.session.id : state.activeSessionId,
      };
    case "session-delete": {
      const sessions = { ...state.sessions };
      delete sessions[action.id];
      return { ...state, sessions, activeSessionId: state.activeSessionId === action.id ? null : state.activeSessionId };
    }
    case "active":
      return { ...state, activeSessionId: action.id };
    case "qdata": {
      const prev = state.qdata[action.id] ?? { bookmarked: false, note: "", box: 0, dueAt: null };
      return { ...state, qdata: { ...state.qdata, [action.id]: { ...prev, ...action.patch } } };
    }
    case "log": {
      const rest = state.log.filter((l) => l.sessionId !== action.entry.sessionId);
      return { ...state, log: [...rest, action.entry] };
    }
    case "override": {
      const overrides = { ...state.overrides };
      if (action.patch === null) delete overrides[action.id];
      else overrides[action.id] = { ...overrides[action.id], ...action.patch };
      return {
        ...state,
        overrides,
        adminLog: [...state.adminLog, { at: Date.now(), action: action.audit ?? "edit", questionId: action.id }].slice(-500),
      };
    }
    case "manual": {
      const manual = { ...state.manual };
      if (action.question) manual[action.question.id] = action.question;
      else if (action.id) delete manual[action.id];
      return { ...state, manual, adminLog: [...state.adminLog, { at: Date.now(), action: action.question ? "manual-add" : "manual-delete", questionId: action.question?.id ?? action.id }].slice(-500) };
    }
    case "rerun-pages":
      return { ...state, rerunPages: [...new Set(action.pages)].sort((a, b) => a - b) };
    case "reset-progress":
      // Einstellungen und Admin-Korrekturen bleiben erhalten
      return {
        ...emptyState(),
        settings: state.settings,
        overrides: state.overrides,
        manual: state.manual,
        rerunPages: state.rerunPages,
        adminLog: state.adminLog,
        qdata: Object.fromEntries(
          Object.entries(state.qdata).map(([k, v]) => [k, { ...v, box: 0, dueAt: null }])
        ),
      };
    case "reset-all":
      return emptyState();
  }
}

interface StoreValue {
  state: UserState;
  ready: boolean;
  warnings: string[];
  persistenceError: string | null;
  dispatch: (a: Action) => void;
  /** Sofortiges Schreiben erzwingen (z. B. vor Navigation) */
  flush: () => Promise<void>;
  exportJson: () => string;
  importJson: (json: string) => { ok: boolean; message: string };
}

const StoreCtx = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, rawDispatch] = useReducer(reducer, undefined, emptyState);
  const [ready, setReady] = useState(false);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [persistenceError, setPersistenceError] = useState<string | null>(null);
  const latest = useRef(state);
  const dirty = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    latest.current = state;
  }, [state]);

  // Laden
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let raw: unknown = await get(STORAGE_KEY);
        if (raw === undefined) {
          // Fallback: localStorage (z. B. wenn IndexedDB blockiert war)
          try {
            const ls = window.localStorage.getItem(STORAGE_KEY);
            if (ls) raw = JSON.parse(ls);
          } catch {
            /* ignorieren */
          }
        }
        const { state: loaded, warnings: w } = sanitizeState(raw);
        if (cancelled) return;
        rawDispatch({ type: "load", state: loaded });
        setWarnings(w);
        try {
          await navigator.storage?.persist?.();
        } catch {
          /* optional */
        }
      } catch (e) {
        if (!cancelled) setPersistenceError("Speicher nicht verfügbar – Fortschritt wird nur in dieser Sitzung gehalten. " + String(e));
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const write = useCallback(async () => {
    if (!dirty.current) return;
    dirty.current = false;
    const snapshot = latest.current;
    try {
      await set(STORAGE_KEY, snapshot);
      setPersistenceError(null);
    } catch (e) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
        setPersistenceError(null);
      } catch {
        dirty.current = true;
        setPersistenceError("Speichern fehlgeschlagen (Speicher voll oder blockiert). Bitte exportieren Sie Ihre Daten unter Einstellungen. " + String(e));
      }
    }
  }, []);

  const dispatch = useCallback(
    (a: Action) => {
      rawDispatch(a);
      dirty.current = true;
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => void write(), 250);
    },
    [write]
  );

  useEffect(() => {
    const onHide = () => void write();
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") onHide();
    });
    return () => window.removeEventListener("pagehide", onHide);
  }, [write]);

  const flush = useCallback(async () => {
    if (timer.current) clearTimeout(timer.current);
    await write();
  }, [write]);

  const exportJson = useCallback(() => JSON.stringify({ app: "pflege-exam-pro", exportedAt: new Date().toISOString(), ...latest.current }, null, 2), []);

  const importJson = useCallback(
    (json: string) => {
      try {
        const parsed = JSON.parse(json);
        if (parsed?.app !== "pflege-exam-pro") return { ok: false, message: "Die Datei stammt nicht aus Pflege Exam Pro." };
        const { state: s, warnings: w } = sanitizeState(parsed);
        dispatch({ type: "load", state: s });
        return {
          ok: true,
          message: `Import erfolgreich: ${s.attempts.length} Antworten, ${Object.keys(s.sessions).length} Sitzungen.` + (w.length ? ` Hinweise: ${w.join(" ")}` : ""),
        };
      } catch (e) {
        return { ok: false, message: "Die Datei konnte nicht gelesen werden: " + String(e) };
      }
    },
    [dispatch]
  );

  const value = useMemo(
    () => ({ state, ready, warnings, persistenceError, dispatch, flush, exportJson, importJson }),
    [state, ready, warnings, persistenceError, dispatch, flush, exportJson, importJson]
  );
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(StoreCtx);
  if (!v) throw new Error("useStore außerhalb des StoreProvider verwendet");
  return v;
}
