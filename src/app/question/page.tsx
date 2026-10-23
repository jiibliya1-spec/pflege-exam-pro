import { Suspense } from "react";
import { QuestionDetail } from "@/components/QuestionDetail";

export const metadata = { title: "Aufgabe" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <QuestionDetail />
    </Suspense>
  );
}
