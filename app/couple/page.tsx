import { Quiz } from '@/components/Quiz';
import { questionsByType } from '@/lib/questions';

export default function CouplePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="halo right-0 top-10 h-72 w-72 bg-violet-300/30" />
      <Quiz type="couple" questions={questionsByType.couple} />
    </main>
  );
}
