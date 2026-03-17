"use client";

import RadarLove from "@/components/RadarLove";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ResultClient() {

  const params = useSearchParams();
  const router = useRouter();

  const score = Number(params.get("score")) || 0;

  // 🔥 Profil auto (important pour ton mail)
  const profile =
    score >= 70
      ? "Relation équilibrée"
      : score >= 40
      ? "Relation en construction"
      : "Relation fragile";

  const [analysis, setAnalysis] = useState("Analyse en cours...");
  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🔥 Génération analyse IA
  useEffect(() => {
    async function generateAnalysis() {
      try {
        const res = await fetch("/api/analyse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score })
        });

        const data = await res.json();

        if (data.analysis) {
          setAnalysis(data.analysis);
        }

      } catch {
        setAnalysis("Impossible de générer l'analyse pour le moment.");
      } finally {
        setLoading(false);
      }
    }

    generateAnalysis();
  }, [score]);

  // 🔥 ENVOI LEAD
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (sending) return;

    if (!email || !firstName) {
      alert("Merci de remplir les champs obligatoires");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          email,
          birthDate,
          birthTime,
          birthPlace,
          score,
          profile
        })
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);

        // 🔥 Redirection Astrae (optionnel)
        setTimeout(() => {
          router.push("/astrae");
        }, 2500);

      } else {
        alert("Une erreur est survenue.");
      }

    } catch (error) {
      console.error(error);
      alert("Erreur serveur.");
    }

    setSending(false);
  }

  // ✅ Écran succès
  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="glass max-w-xl rounded-2xl p-10">
          <h2 className="text-3xl font-semibold mb-4">
            ✓ Demande envoyée
          </h2>
          <p className="text-white/80">
            Votre analyse arrive dans quelques instants ✨
          </p>
          <p className="mt-6 text-white/60 text-sm">
            Pensez à vérifier vos spams.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10">

      <section className="glass-card w-full max-w-5xl rounded-3xl px-6 py-10 text-center md:px-14">

        <p className="text-xs tracking-widest text-slate-300/70">
          RÉSULTAT LOVE SCAN
        </p>

        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Score relationnel : {score} %
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white/5 p-6 text-left">
            <h3 className="font-semibold mb-2">
              Diagnostic principal
            </h3>
            <p className="text-sm text-slate-200/80">
              Votre score reflète votre manière d’aimer et d’entrer en relation.
              Il met en lumière vos forces et vos zones d’évolution émotionnelle.
            </p>

            <ul className="mt-4 text-sm space-y-1 text-slate-200/80">
              <li>• Conscience relationnelle</li>
              <li>• Capacité à créer du lien</li>
              <li>• Potentiel d’évolution émotionnelle</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="font-semibold mb-4 text-sm">
              Profil relationnel
            </h3>
            <RadarLove score={score} />
          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-white/5 p-6 text-left">
          <h3 className="font-semibold mb-2">
            Analyse personnalisée
          </h3>

          {loading ? (
            <p className="text-sm text-slate-200/80">
              Analyse en cours...
            </p>
          ) : (
            <p className="text-sm text-slate-200/80 whitespace-pre-line">
              {analysis}
            </p>
          )}
        </div>

        {/* 🔥 FORMULAIRE */}
        <section className="mt-12 p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Recevez votre lecture personnalisée
          </h2>

          <p className="text-white/80 mb-6">
            Analyse approfondie basée sur votre profil et votre thème.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">

            <input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              required
              className="rounded-xl px-4 py-3 text-black"
            />

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="rounded-xl px-4 py-3 text-black"
            />

            <input
              type="text"
              placeholder="Date de naissance (JJ/MM/AAAA)"
              onChange={(e)=>setBirthDate(e.target.value)}
              className="rounded-xl px-4 py-3 text-black"
            />

            <input
              type="text"
              placeholder="Heure de naissance"
              onChange={(e)=>setBirthTime(e.target.value)}
              className="rounded-xl px-4 py-3 text-black"
            />

            <input
              type="text"
              placeholder="Ville de naissance"
              value={birthPlace}
              onChange={(e)=>setBirthPlace(e.target.value)}
              className="rounded-xl px-4 py-3 text-black"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-lg font-semibold text-white"
            >
              {sending ? "Envoi en cours..." : "Recevoir ma première analyse"}
            </button>

          </form>

        </section>

      </section>

    </main>
  );
}
