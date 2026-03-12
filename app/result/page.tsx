import { Suspense } from 'react';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { ResultClient } from '@/components/ResultClient';

export default function ResultPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="halo left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-pink-300/30 animate-pulseSoft" />
      <Suspense fallback={<LoadingAnimation />}>
        <ResultClient />
      </Suspense>
    </main>
  );
}
