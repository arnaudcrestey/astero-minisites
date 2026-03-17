"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AnalysePage() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/result"); // ⚠️ adapte au bon chemin
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">

      <div className="glass-card w-full max-w-xl p-10 text-center">

        <h1 className="text-2xl font-semibold mb-6">
          Analyse de votre profil amoureux...
        </h1>

        <div className="space-y-3 text-sm text-slate-300">
          <p>✔ Analyse de vos réponses</p>
          <p>✔ Identification de votre dynamique relationnelle</p>
          <p>✔ Génération de vos axes d’évolution</p>
        </div>

        <div className="mt-6 h-2 w-full rounded bg-slate-800 overflow-hidden">
          <div className="h-full animate-pulse bg-gradient-to-r from-pink-400 to-violet-500 w-full"/>
        </div>

      </div>

    </div>
  );
}
