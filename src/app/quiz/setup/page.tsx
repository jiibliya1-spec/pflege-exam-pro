import { Suspense } from "react";
import { QuizSetup } from "@/components/QuizSetup";

export const metadata = { title: "Quiz & Prüfung" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <QuizSetup />
    </Suspense>
  );
}
