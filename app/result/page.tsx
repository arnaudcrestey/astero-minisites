import { Suspense } from "react";
import { ResultClient } from "@/components/ResultClient";

export default function ResultPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <Suspense fallback={<div className="text-white">Chargement...</div>}>
        <ResultClient />
      </Suspense>
    </main>
  );
}
