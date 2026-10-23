import { Suspense } from "react";
import { QuizResults } from "@/components/QuizResults";

export const metadata = { title: "Ergebnis" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <QuizResults />
    </Suspense>
  );
}
