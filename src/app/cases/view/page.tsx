import { Suspense } from "react";
import { CaseView } from "@/components/Cases";

export const metadata = { title: "Fallbeispiel" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <CaseView />
    </Suspense>
  );
}
