import { Suspense } from "react";
import { Chapters } from "@/components/Chapters";

export const metadata = { title: "Kapitel" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Chapters />
    </Suspense>
  );
}
