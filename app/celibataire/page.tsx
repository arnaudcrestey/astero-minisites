import { Quiz } from '@/components/Quiz';
import { questionsByType } from '@/lib/questions';

export default function CelibatairePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="halo left-0 top-10 h-72 w-72 bg-pink-300/30" />
      <Quiz type="celibataire" questions={questionsByType.celibataire} />
    </main>
  );
}
