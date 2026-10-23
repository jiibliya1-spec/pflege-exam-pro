import { Suspense } from "react";
import { Flashcards } from "@/components/Flashcards";

export const metadata = { title: "Karteikarten" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Flashcards />
    </Suspense>
  );
}
