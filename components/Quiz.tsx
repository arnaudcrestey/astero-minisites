'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProgressBar } from './ProgressBar';
import { Question, QuizType, SCORE_MAP } from '@/lib/questions';

interface QuizProps {
  type: QuizType;
  questions: Question[];
}

export function Quiz({ type, questions }: QuizProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedScores, setSelectedScores] = useState<number[]>([]);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const isLast = currentIndex === total - 1;

  const score = useMemo(() => selectedScores.reduce((acc, value) => acc + value, 0), [selectedScores]);

  const handleAnswer = (answerIndex: number) => {
    const answerScore = SCORE_MAP[answerIndex];
    const nextScores = [...selectedScores, answerScore];
    setSelectedScores(nextScores);

    if (isLast) {
      const search = new URLSearchParams({
        type,
        score: String(score + answerScore),
        answers: nextScores.join(',')
      });
      router.push(`/result?${search.toString()}`);
      return;
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 200);
  };

  return (
    <section className="glass-card relative z-10 w-full max-w-2xl rounded-3xl p-6 md:p-10">
      <ProgressBar current={currentIndex + 1} total={total} />
      <h2 className="text-2xl font-semibold md:text-3xl">Question {currentQuestion.id}</h2>
      <p className="mt-4 text-lg text-slate-100/95 md:text-xl">{currentQuestion.question}</p>

      <div className="mt-8 flex flex-col gap-3">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={answer}
            type="button"
            onClick={() => handleAnswer(index)}
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-base font-medium transition hover:bg-white/20"
          >
            {answer}
          </button>
        ))}
      </div>
    </section>
  );
}
