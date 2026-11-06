/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BUSINESS as B } from "@/data/business";

export const metadata = {
  title: "Pflege Exam Pro – Prüfungsvorbereitung für die Pflege",
  description:
    "Lektionen, Fallbeispiele, Prüfungsfragen mit Erwartungshorizont und Karteikarten für die Pflegefachfrau-/Pflegefachmann-Prüfung. Auf Deutsch und Arabisch. Läuft im Browser, ohne App Store.",
};

const STATS = [
  { n: "210", l: "Lektionen" },
  { n: "466", l: "Prüfungsfragen" },
  { n: "35", l: "Fallbeispiele" },
  { n: "119", l: "Krankheitsprofile" },
];

const FEATURES = [
  { t: "Lektionen mit Grafiken", d: "Krankheitslehre und Ausbildungsthemen verständlich erklärt, durchsuchbar und nach Patientengruppe filterbar.", i: "M4 5h7a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4zM20 5h-7a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h8z" },
  { t: "Schriftliche Fallbeispiele", d: "Realistische Fälle mit mehreren Aufgaben und Erwartungshorizont, so wie sie in der Prüfung gestellt werden.", i: "M9 3h6l1 2h3v16H5V5h3zM9 12h6M9 16h4" },
  { t: "Mündliche Prüfung", d: "Ablauf, Vorbereitungszeit mit Timer und Prüfungsfälle mit Antwortschema für das Prüfungsgespräch.", i: "M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4" },
  { t: "Quiz und Probeprüfung", d: "Üben mit direktem Feedback oder als Probeprüfung mit Zeitlimit, einstellbar nach Thema und Umfang.", i: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" },
  { t: "Karteikarten", d: "Fragen vorne, Musterlösung hinten. Bewerte dich selbst und wiederhole, was noch nicht sitzt.", i: "M3 7h14v12H3zM7 7V4h14v12h-4" },
  { t: "Fehler gezielt üben", d: "Die App merkt sich deine Fehler und stellt sie dir wieder, bis du sie sicher kannst. Mit Fortschrittsübersicht.", i: "M4 12a8 8 0 1 0 3-6.2M4 4v4h4" },
];

const FAQ = [
  { q: "Brauche ich einen App Store?", a: "Nein. Pflege Exam Pro läuft im Browser. Auf dem Handy kannst du die App mit „Zum Home-Bildschirm“ wie eine normale App installieren (iPhone: in Safari, Android: in Chrome)." },
  { q: "Wie bekomme ich Zugang?", a: "Du bezahlst per PayPal und bekommst deinen persönlichen Zugangscode per E-Mail, in der Regel innerhalb von 24 Stunden. Den Code gibst du einmal ein, danach bleibt dein Gerät freigeschaltet." },
  { q: "Auf wie vielen Geräten kann ich lernen?", a: "Der Code gilt für ein Gerät. Bei einem Gerätewechsel setzen wir ihn auf Anfrage zurück." },
  { q: "Sind das die echten Prüfungsaufgaben?", a: "Nein. Die Fälle, Fragen und Musterlösungen sind Übungsmaterial im Prüfungsformat und keine amtlichen Originalaufgaben. Sie ersetzen weder Unterricht noch Lehrbuch." },
  { q: "Gibt es eine Bestehensgarantie?", a: "Nein. Die App unterstützt dein Lernen; die Prüfung legst du selbst ab." },
  { q: "Gibt es die Inhalte auch auf Arabisch?", a: "Ja. Lektionen und viele Inhalte sind auf Deutsch und Arabisch verfügbar, damit du Fachbegriffe in beiden Sprachen verstehst." },
];

const isSet = (v: string) => !v.startsWith("[");

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2.2rem] border-[7px] border-[#0b1220] bg-[#0b1220] shadow-2xl shadow-black/40 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
    </div>
  );
}

export default function Page() {
  const price = isSet(B.price) ? B.price : "Preis folgt";
  return (
    <div className="bg-[#f5f8fb] text-[#0b2a4a]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b2a4a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="text-lg font-extrabold tracking-tight text-white">Pflege Exam Pro</span>
          <nav className="flex items-center gap-3 text-sm">
            <Link href="/activate/" className="hidden rounded-lg px-3 py-2 font-semibold text-white/90 hover:text-white sm:block">Ich habe einen Code</Link>
            <Link href="/activate/" className="rounded-lg bg-teal-400 px-4 py-2 font-bold text-[#06283a] hover:bg-teal-300">Zugang sichern</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2a4a] via-[#0d3a63] to-[#0b8f8f] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-0 pt-12 md:grid-cols-2 md:pt-20">
          <div className="pb-10 md:pb-20">
            <p className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-teal-200">Für die Prüfung zur Pflegefachfrau / zum Pflegefachmann</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Pflegeprüfung bestehen: lernen mit Plan</h1>
            <p className="mt-5 text-lg text-white/85">
              Lektionen, Fallbeispiele, Prüfungsfragen mit Erwartungshorizont und Karteikarten, jeweils auf Deutsch und Arabisch.
            </p>
            <p dir="rtl" lang="ar" className="mt-3 text-base text-teal-100">حضّر لامتحان التمريض بذكاء: دروس، حالات سريرية وأسئلة بالألمانية والعربية.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/activate/" className="rounded-xl bg-teal-400 px-6 py-3.5 text-base font-bold text-[#06283a] shadow-lg hover:bg-teal-300">Jetzt Zugang sichern</Link>
              <a href="#video" className="rounded-xl border border-white/30 px-6 py-3.5 text-base font-semibold hover:bg-white/10">Video ansehen</a>
            </div>
            <p className="mt-5 text-sm text-white/70">Kein App Store nötig · läuft auf iPhone, Android und PC · Zahlung per PayPal</p>
          </div>
          <div className="relative mx-auto flex h-[420px] w-full max-w-md items-end justify-center md:h-[560px]">
            <Phone src="/landing/app-lernen.webp" alt="Lektionen in Pflege Exam Pro" className="absolute bottom-[-40px] left-0 w-[44%] -rotate-6 opacity-95" />
            <Phone src="/landing/app-faelle.webp" alt="Schriftliche Fallbeispiele" className="absolute bottom-[-40px] right-0 w-[44%] rotate-6 opacity-95" />
            <Phone src="/landing/app-start.webp" alt="Startseite von Pflege Exam Pro" className="relative z-10 mb-[-60px] w-[52%]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
              <dt className="order-2 mt-1 text-sm font-semibold text-slate-500">{s.l}</dt>
              <dd className="text-4xl font-extrabold text-[#0b8f8f]">{s.n}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <h2 className="text-center text-3xl font-extrabold">Lernmaterial im Überblick</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Du arbeitest dich von der ersten Lektion bis zur Probeprüfung vor, und die Fortschrittsanzeige zeigt dir, wo du stehst.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.t} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0b8f8f]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={f.i} /></svg>
              </span>
              <h3 className="text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Die App im Einsatz</h2>
            <p className="mt-3 text-slate-600">Die Oberfläche hat große Schrift und lässt sich mit einer Hand bedienen.</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {["Lektionen nach Fachgebiet und Patientengruppe", "Fälle mit Szene, Aufgaben und Musterlösung", "Quiz mit Feedback oder Probeprüfung mit Zeitlimit", "Fortschritt und Fehlertrainer im Überblick"].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-1 h-5 w-5 flex-none rounded-full bg-teal-500/15 text-center text-xs font-bold leading-5 text-[#0b8f8f]">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
            {[["app-lektion", "Lektion mit Grafik"], ["app-fall", "Fall mit Szene"], ["app-muendlich", "Mündliche Prüfung"], ["app-karten", "Karteikarten"], ["app-quiz", "Quiz und Prüfung"]].map(([f, a]) => (
              <Phone key={f} src={`/landing/${f}.webp`} alt={a} className="w-52 flex-none snap-center" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b2a4a] py-14 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Deutsche Fachbegriffe, arabische Erklärung</h2>
            <p className="mt-3 text-white/80">Lektionen und viele Inhalte stehen in zwei Sprachen nebeneinander: Auf Arabisch verstehst du den Zusammenhang, auf Deutsch lernst du die Begriffe, die in der Prüfung gefragt sind.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
            <p className="text-lg font-bold">Gerötete Stellen massieren wir nicht.</p>
            <p dir="rtl" lang="ar" className="mt-2 text-lg font-semibold text-teal-200">لا ندلّك المناطق المحمرّة.</p>
            <p className="mt-4 text-sm text-white/60">Beispiel aus dem Thema Dekubitusprophylaxe</p>
          </div>
        </div>
      </section>

      <section id="video" className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="mx-auto w-full max-w-[300px]">
            <video className="w-full rounded-[2rem] border-[7px] border-[#0b1220] bg-black shadow-2xl" controls playsInline preload="none" poster="/landing/erklaervideo.webp">
              <source src="/landing/erklaervideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Erklärvideos</h2>
            <p className="mt-3 text-slate-600">Kurze Videos zu wichtigen Themen, mit Untertiteln auf Deutsch und Arabisch. Du findest sie auch auf Instagram.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <h2 className="text-center text-3xl font-extrabold">So startest du</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {[["Zugang sichern", "Bezahle bequem per PayPal."], ["Code erhalten", "Du bekommst deinen persönlichen Zugangscode per E-Mail."], ["Loslegen", "Code eingeben, zum Home-Bildschirm hinzufügen und lernen."]].map(([t, d], i) => (
            <li key={t} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0b8f8f] font-bold text-white">{i + 1}</span>
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-1 text-[15px] text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="preis" className="mx-auto max-w-3xl px-5 py-14">
        <div className="rounded-3xl bg-gradient-to-br from-[#0b2a4a] to-[#0b8f8f] p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="text-3xl font-extrabold">Dein Zugang zu Pflege Exam Pro</h2>
          <p className="mt-6 text-5xl font-extrabold">{price}</p>
          {isSet(B.access) ? <p className="mt-2 text-white/80">Zugang: {B.access}</p> : null}
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-[15px]">
            {["Alle Lektionen, Fälle und Prüfungsfragen", "Mündliche Prüfung, Quiz und Karteikarten", "Deutsch und Arabisch", "Neue Inhalte, die hinzukommen"].map((x) => (
              <li key={x} className="flex gap-3"><span className="text-teal-200">✓</span>{x}</li>
            ))}
          </ul>
          <Link href="/activate/" className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#0b2a4a] hover:bg-teal-50">Jetzt Zugang sichern</Link>
          <p className="mt-4 text-xs text-white/70">Zahlung per PayPal. Hinweise zum Widerrufsrecht findest du unter <Link href="/widerruf/" className="underline">Widerruf</Link>.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <h2 className="text-center text-3xl font-extrabold">Häufige Fragen</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <span className="text-[#0b8f8f] transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-[#0b2a4a] px-5 py-10 text-center text-sm text-white/70">
        <p className="font-bold text-white">Pflege Exam Pro</p>
        <p className="mt-1">Übungsmaterial zur Prüfungsvorbereitung. Keine amtlichen Prüfungsaufgaben, keine Bestehensgarantie.</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <Link href="/impressum/" className="underline">Impressum</Link>
          <Link href="/datenschutz/" className="underline">Datenschutz</Link>
          <Link href="/agb/" className="underline">AGB</Link>
          <Link href="/widerruf/" className="underline">Widerruf</Link>
          <Link href="/activate/" className="underline">Code eingeben</Link>
        </nav>
      </footer>
    </div>
  );
}
