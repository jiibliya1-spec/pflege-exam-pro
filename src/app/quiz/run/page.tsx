import { Suspense } from "react";
import { QuizRunner } from "@/components/QuizRunner";

export const metadata = { title: "Quiz" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <QuizRunner />
    </Suspense>
  );
}
