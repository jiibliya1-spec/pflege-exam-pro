import Link from "next/link";

/** Einfache, öffentlich erreichbare Seite für Rechtstexte (ohne App-Navigation). */
export function LegalDoc({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-8 leading-relaxed">
      <p className="mb-6 text-sm">
        <Link href="/" className="font-semibold text-teal-700 underline">← Pflege Exam Pro</Link>
      </p>
      <h1 className="mb-6 text-2xl font-bold">{title}</h1>
      <div className="space-y-4 text-[15px] [&_h2]:mt-6 [&_h2]:text-lg [&_h2]:font-semibold [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_a]:underline">
        {children}
      </div>
      <nav className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-300/40 pt-4 text-sm">
        <Link href="/impressum/">Impressum</Link>
        <Link href="/datenschutz/">Datenschutz</Link>
        <Link href="/agb/">AGB</Link>
        <Link href="/widerruf/">Widerruf</Link>
      </nav>
    </main>
  );
}
