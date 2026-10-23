import { Suspense } from "react";
import { Mistakes } from "@/components/ListPages";

export const metadata = { title: "Fehler" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Mistakes />
    </Suspense>
  );
}
