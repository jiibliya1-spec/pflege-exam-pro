import { Suspense } from "react";
import { Admin } from "@/components/Admin";

export const metadata = { title: "Import & Qualität" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Admin />
    </Suspense>
  );
}
