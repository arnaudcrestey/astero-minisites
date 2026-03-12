import { Quiz } from "@/components/Quiz";
import { questionsByType } from "@/lib/questions";

export default function CelibatairePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">

      {/* Background halos */}
      <div className="halo -left-20 top-10 h-72 w-72 bg-pink-300/30" />
      <div className="halo right-10 bottom-0 h-72 w-72 bg-purple-400/30" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-2xl">

        {/* Intro */}
        <div className="mb-6 text-center text-slate-200/80 text-sm md:text-base">
          Répondez instinctivement. Il n’y a pas de bonne ou mauvaise réponse.
        </div>

        {/* Quiz */}
        <Quiz
          type="celibataire"
          questions={questionsByType.celibataire}
        />

      </div>

    </main>
  );
}
