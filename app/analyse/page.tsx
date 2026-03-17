"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AnalysePage() {

  const router = useRouter();
  const params = useSearchParams();

  const [step, setStep] = useState(0);

  useEffect(() => {

    const step1 = setTimeout(() => setStep(1), 500);
    const step2 = setTimeout(() => setStep(2), 1200);
    const step3 = setTimeout(() => setStep(3), 1900);

    const timer = setTimeout(() => {
      router.push(`/result?${params.toString()}`);
    }, 2600);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(timer);
    };

  }, [router, params]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div className="glass-card w-full max-w-xl p-10 text-center">

        <h1 className="text-2xl font-semibold mb-6">
          Votre profil amoureux est en cours de révélation...
        </h1>

        <div className="space-y-3 text-sm text-slate-300 text-left max-w-sm mx-auto">

          <p className={step >= 1 ? "opacity-100" : "opacity-30"}>
            ✔ Analyse de vos réponses
          </p>

          <p className={step >= 2 ? "opacity-100" : "opacity-30"}>
            ✔ Identification de votre dynamique relationnelle
          </p>

          <p className={step >= 3 ? "opacity-100" : "opacity-30"}>
            ✔ Génération de vos axes d’évolution
          </p>

        </div>

        <div className="mt-6 h-2 w-full rounded bg-slate-800 overflow-hidden">
          <div className="h-full animate-pulse bg-gradient-to-r from-pink-400 to-violet-500 w-full"/>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Décodage de vos schémas affectifs en cours...
        </p>

      </div>

    </div>
  );
}
