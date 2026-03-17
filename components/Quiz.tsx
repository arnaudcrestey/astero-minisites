"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "./ProgressBar";
import { Question, QuizType, SCORE_MAP } from "@/lib/questions";

interface QuizProps {
  type: QuizType;
  questions: Question[];
}

export function Quiz({ type, questions }: QuizProps) {

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedScores, setSelectedScores] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const currentQuestion = questions[currentIndex];
  const total = questions.length;

  const isLast = currentIndex === total - 1;

  const score = useMemo(
    () => selectedScores.reduce((acc, value) => acc + value, 0),
    [selectedScores]
  );

  const handleAnswer = async (answerIndex: number) => {

    if (loading) return;

    const answerScore = SCORE_MAP[answerIndex];
    const nextScores = [...selectedScores, answerScore];
    setSelectedScores(nextScores);

    // 👉 DERNIÈRE QUESTION
    if (isLast) {

      setLoading(true);

      const finalScore = score + answerScore;

      // 🔥 ENVOI DU LEAD
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: localStorage.getItem("firstName"),
            email: localStorage.getItem("email"),
            birthDate: localStorage.getItem("birthDate"),
            birthTime: localStorage.getItem("birthTime"),
            birthPlace: localStorage.getItem("birthPlace"),
            score: finalScore,
            profile: localStorage.getItem("profile")
          })
        });
      } catch (error) {
        console.error("Erreur envoi lead", error);
      }

      // 🔗 REDIRECTION ANALYSE
      const search = new URLSearchParams({
        type,
        score: String(finalScore),
        answers: nextScores.join(",")
      });

      router.push(`/analyse?${search.toString()}`);
      return;
    }

    // 👉 QUESTION SUIVANTE
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 200);
  };

  return (
    <section className="glass-card relative z-10 w-full max-w-2xl rounded-3xl p-6 md:p-10">

      <ProgressBar current={currentIndex + 1} total={total} />

      <h2 className="text-2xl font-semibold md:text-3xl">
        Question {currentQuestion.id}
      </h2>

      <p className="mt-4 text-lg text-slate-100/95 md:text-xl">
        {currentQuestion.question}
      </p>

      <div className="mt-8 flex flex-col gap-3">

        {currentQuestion.answers.map((answer, index) => (
          <button
            key={answer}
            type="button"
            disabled={loading}
            onClick={() => handleAnswer(index)}
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-base font-medium transition hover:bg-white/20 disabled:opacity-50"
          >
            {answer}
          </button>
        ))}

      </div>

    </section>
  );
}
