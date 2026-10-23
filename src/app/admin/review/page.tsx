import { Suspense } from "react";
import { AdminReview } from "@/components/AdminReview";

export const metadata = { title: "Review" };

export default function Page() {
  return (
    <Suspense fallback={<div role="status" className="py-16 text-center text-muted">Lädt …</div>}>
      <AdminReview />
    </Suspense>
  );
}
