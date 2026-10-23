import { Suspense } from "react";
import { CaseList } from "@/components/Cases";

export const metadata = { title: "Fallbeispiele" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <CaseList />
    </Suspense>
  );
}
