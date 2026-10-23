import { Suspense } from "react";
import { Dashboard } from "@/components/Dashboard";

export const metadata = { title: "Dashboard" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <Dashboard />
    </Suspense>
  );
}
