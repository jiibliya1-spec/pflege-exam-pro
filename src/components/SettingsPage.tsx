"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { useStore } from "@/lib/store";
import { DEFAULT_SETTINGS } from "@/lib/defaults";
import type { ExamMode, Settings } from "@/lib/types";
import { Button, Card, ConfirmDialog, Field, Input, Notice, PageHeader, Select, Toggle } from "./ui";
import { useToast } from "./Toast";
import { playTone } from "@/lib/sound";

export function SettingsPage() {
  const { state, dispatch, exportJson, importJson, flush } = useStore();
  const { toast } = useToast();
  const s = state.settings;
  const fileRef = useRef<HTMLInputElement>(null);
  const [confirm, setConfirm] = useState<"progress" | "all" | null>(null);
  const set = (patch: Partial<Settings>) => dispatch({ type: "settings", patch });
  const num = (v: string, min: number, max: number, fallback: number) => {
    const n = Number(v);
    return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
  };

  function download() {
    const blob = new Blob([exportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pflege-exam-pro-sicherung-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("Sicherung heruntergeladen.", "ok");
  }

  async function onImport(file: File | undefined) {
    if (!file) return;
    if (file.size > 25 * 1024 * 1024) return toast("Datei ist zu groß (max. 25 MB).", "error");
    const text = await file.text();
    const r = importJson(text);
    toast(r.message, r.ok ? "ok" : "error");
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <>
      <PageHeader title="Einstellungen" subtitle="Alle Einstellungen werden sofort gespeichert und wirken in der ganzen App." crumbs={[{ label: "Start", href: "/" }, { label: "Einstellungen" }]} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="font-semibold">Darstellung</h2>
          <Field label="Design" htmlFor="theme">
            <Select id="theme" value={s.theme} onChange={(e) => set({ theme: e.target.value as Settings["theme"] })}>
              <option value="system">Systemeinstellung</option>
              <option value="light">Hell</option>
              <option value="dark">Dunkel</option>
            </Select>
          </Field>
          <Field label="Oberflächensprache" htmlFor="lang" hint="Optional arabische Beschriftungen in der Navigation. Die Prüfungsinhalte bleiben immer im deutschen Original.">
            <Select id="lang" value={s.uiLanguage} onChange={(e) => set({ uiLanguage: e.target.value as Settings["uiLanguage"] })}>
              <option value="de">Deutsch</option>
              <option value="de-ar">Deutsch + العربية (Navigationshilfe)</option>
            </Select>
          </Field>
          <Field label="Sprache der Originalinhalte" htmlFor="content" hint="Die Aufgaben stammen aus einem deutschen Buch und werden nicht übersetzt oder verändert.">
            <Select id="content" value="de" disabled>
              <option value="de">Deutsch (Original)</option>
            </Select>
          </Field>
          <Field label={`Schriftgröße (${Math.round(s.fontScale * 100)} %)`} htmlFor="font">
            <input id="font" type="range" min={0.9} max={1.4} step={0.05} value={s.fontScale} onChange={(e) => set({ fontScale: Number(e.target.value) })} className="w-full accent-[var(--teal)]" />
          </Field>
          <div className="divide-y divide-line">
            <Toggle checked={s.animations} onChange={(v) => set({ animations: v })} label="Animationen" hint="Übergänge und Einblendungen" />
            <Toggle checked={s.reducedMotion} onChange={(v) => set({ reducedMotion: v })} label="Bewegung reduzieren" hint="Schaltet alle Animationen ab (Barrierefreiheit)" />
            <Toggle
              checked={s.sound}
              onChange={(v) => {
                set({ sound: v });
                if (v) playTone("ok");
              }}
              label="Töne"
              hint="Kurzer Ton bei richtiger / falscher Antwort im Sofort-Feedback"
            />
          </div>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-semibold">Lernen & Prüfung</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Standard-Modus" htmlFor="mode">
              <Select id="mode" value={s.defaultMode} onChange={(e) => set({ defaultMode: e.target.value as ExamMode })}>
                <option value="practice">Üben</option>
                <option value="mock">Probeprüfung</option>
                <option value="chapter">Kapitelprüfung</option>
                <option value="custom">Eigenes Quiz</option>
              </Select>
            </Field>
            <Field label="Standard-Fragenzahl" htmlFor="cnt">
              <Input id="cnt" type="number" min={1} max={1000} value={s.defaultQuestionCount} onChange={(e) => set({ defaultQuestionCount: Math.floor(num(e.target.value, 1, 1000, 10)) })} />
            </Field>
            <Field label="Standard-Zeitlimit (Min., 0 = ohne)" htmlFor="tl">
              <Input id="tl" type="number" min={0} max={600} value={s.defaultTimeLimitMin} onChange={(e) => set({ defaultTimeLimitMin: num(e.target.value, 0, 600, 0) })} />
            </Field>
            <Field label="Standard-Feedback" htmlFor="fb">
              <Select id="fb" value={s.defaultFeedback} onChange={(e) => set({ defaultFeedback: e.target.value as "instant" | "end" })}>
                <option value="instant">Sofort</option>
                <option value="end">Am Ende</option>
              </Select>
            </Field>
            <Field label="Bestehensgrenze (App, %)" htmlFor="pass" hint="Persönliche Lernschwelle – keine amtliche Regel.">
              <Input id="pass" type="number" min={0} max={100} value={s.passPercent} onChange={(e) => set({ passPercent: num(e.target.value, 0, 100, 60) })} />
            </Field>
            <Field label="Tagesziel (Aufgaben)" htmlFor="goal">
              <Input id="goal" type="number" min={1} max={500} value={s.studyGoalPerDay} onChange={(e) => set({ studyGoalPerDay: Math.floor(num(e.target.value, 1, 500, 10)) }) } />
            </Field>
          </div>
          <div className="divide-y divide-line">
            <Toggle checked={s.shuffleQuestions} onChange={(v) => set({ shuffleQuestions: v })} label="Fragen standardmäßig mischen" hint="Fallbeispiele bleiben dabei zusammen." />
            <Toggle checked={s.shuffleOptions} onChange={(v) => set({ shuffleOptions: v })} label="Antwortoptionen standardmäßig mischen" />
          </div>
          <Button variant="ghost" size="sm" onClick={() => { set({ ...DEFAULT_SETTINGS, theme: s.theme }); toast("Einstellungen zurückgesetzt (Design bleibt).", "ok"); }}>
            Einstellungen auf Standard zurücksetzen
          </Button>
        </Card>

        <Card className="space-y-3 lg:col-span-2">
          <h2 className="font-semibold">Daten & Speicher</h2>
          <Notice tone="teal" title="Wo liegen meine Daten?">
            Ihr Fortschritt wird lokal in diesem Browser (IndexedDB) gespeichert. Er ist an Browser und Gerät gebunden und geht verloren, wenn Sie Website-Daten löschen oder den Browser zurücksetzen. Sichern Sie ihn regelmäßig per Export. Es gibt kein Benutzerkonto und keine Übertragung an einen Server.
          </Notice>
          <div className="grid grid-cols-1 gap-2 text-sm text-muted sm:grid-cols-4">
            <span>Antworten: <strong className="text-fg">{state.attempts.length}</strong></span>
            <span>Sitzungen: <strong className="text-fg">{Object.keys(state.sessions).length}</strong></span>
            <span>Lesezeichen: <strong className="text-fg">{Object.values(state.qdata).filter((v) => v.bookmarked).length}</strong></span>
            <span>Admin-Korrekturen: <strong className="text-fg">{Object.keys(state.overrides).length}</strong></span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={download}>
              <Download className="h-4 w-4" aria-hidden /> Daten exportieren (JSON)
            </Button>
            <Button variant="secondary" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" aria-hidden /> Daten importieren
            </Button>
            <input ref={fileRef} type="file" accept="application/json,.json" className="sr-only" aria-label="Sicherungsdatei wählen" onChange={(e) => void onImport(e.target.files?.[0])} />
            <Button variant="secondary" onClick={() => void flush().then(() => toast("Gespeichert.", "ok"))}>Jetzt speichern</Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 border-t border-line pt-4">
            <Button variant="danger" onClick={() => setConfirm("progress")}>Lernfortschritt zurücksetzen</Button>
            <Button variant="danger" onClick={() => setConfirm("all")}>Alle lokalen Daten löschen</Button>
          </div>
          <p className="text-xs text-muted">Konto- und Sitzungseinstellungen entfallen: Die App benötigt keine Anmeldung.</p>
        </Card>
      </div>

      <ConfirmDialog
        open={confirm === "progress"}
        danger
        title="Lernfortschritt zurücksetzen?"
        confirmLabel="Fortschritt löschen"
        requireText="LÖSCHEN"
        onCancel={() => setConfirm(null)}
        onConfirm={() => {
          dispatch({ type: "reset-progress" });
          setConfirm(null);
          toast("Lernfortschritt wurde zurückgesetzt. Einstellungen und Admin-Korrekturen blieben erhalten.", "ok");
        }}
        message="Alle Antworten, Sitzungen, Verläufe und Wiederholungspläne werden gelöscht. Lesezeichen und Notizen bleiben erhalten. Das kann nicht rückgängig gemacht werden. Tipp: Exportieren Sie vorher eine Sicherung."
      />
      <ConfirmDialog
        open={confirm === "all"}
        danger
        title="Alle lokalen Daten löschen?"
        confirmLabel="Alles löschen"
        requireText="ALLES LÖSCHEN"
        onCancel={() => setConfirm(null)}
        onConfirm={() => {
          dispatch({ type: "reset-all" });
          setConfirm(null);
          toast("Alle lokalen Daten wurden gelöscht.", "ok");
        }}
        message="Fortschritt, Notizen, Lesezeichen, Einstellungen UND Ihre Admin-Korrekturen am Import werden unwiderruflich gelöscht."
      />
    </>
  );
}
