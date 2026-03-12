"use client";

import RadarLove from "@/components/RadarLove";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ResultClient() {

  const params = useSearchParams();
  const score = Number(params.get("score")) || 0;

  const [analysis, setAnalysis] = useState("Analyse en cours...");
  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {

    async function generateAnalysis() {

      try {

        const res = await fetch("/api/analyse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            score
          })
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


  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    if (sending) return;

    setSending(true);

    const data = {
      firstName,
      email,
      birthDate,
      birthTime,
      birthPlace,
      score
    };

    try {

      const res = await fetch("/api/lead-astrologie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue.");
      }

    } catch (error) {

      console.error(error);
      alert("Erreur de connexion au serveur.");

    }

    setSending(false);

  }


  if (submitted) {

    return (

      <main className="flex min-h-screen items-center justify-center px-6 text-center">

        <div className="glass max-w-xl rounded-2xl p-10">

          <h2 className="text-3xl font-semibold mb-4">
            ✓ Demande envoyée
          </h2>

          <p className="text-white/80">
            Votre première lecture personnalisée vous sera envoyée
            par email dans quelques instants.
          </p>

          <p className="mt-6 text-white/60 text-sm">
            Pensez à vérifier vos spams si vous ne voyez rien apparaître.
          </p>

        </div>

      </main>

    );

  }

  return (

    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">

      <section className="glass-card relative z-10 w-full max-w-5xl rounded-3xl px-6 py-10 text-center md:px-14">

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
              Votre score indique une capacité à créer du lien et à
              construire des relations équilibrées, avec encore
              quelques ajustements possibles dans la communication
              émotionnelle.
            </p>

            <ul className="mt-4 text-sm space-y-1 text-slate-200/80">
              <li>• Bonne conscience relationnelle</li>
              <li>• Capacité à créer du lien</li>
              <li>• Potentiel d’évolution émotionnelle</li>
            </ul>

          </div>

          <div className="rounded-2xl bg-white/5 p-6">

            <h3 className="font-semibold mb-4 text-sm text-center">
              Profil relationnel
            </h3>

            <div className="flex items-center justify-center">
              <RadarLove score={score} />
            </div>

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


        <section className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 md:p-10 text-center shadow-xl">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Comprendre réellement votre dynamique amoureuse
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Certaines dynamiques relationnelles peuvent être liées à des
            facteurs plus profonds que la simple expérience sentimentale.
          </p>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Au <strong>Cabinet Astrae</strong>, l’étude du thème astral est utilisée
            pour mieux comprendre les mécanismes émotionnels qui influencent
            vos relations.
          </p>

          <p className="mt-6 text-lg text-white font-medium">
            🎁 Recevez <span className="text-cyan-300 font-bold">gratuitement</span> votre première lecture personnalisée
          </p>


          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 w-full max-w-md mx-auto"
          >

            <input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              required
              className="w-full rounded-xl bg-white px-4 py-3 text-black"
            />

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full rounded-xl bg-white px-4 py-3 text-black"
            />

            <p className="text-sm text-white/70 text-left">
              Date de naissance
            </p>

            <div className="grid grid-cols-3 gap-3">

              <input
                type="number"
                placeholder="Jour"
                min="1"
                max="31"
                onChange={(e)=>{
                  const day = e.target.value.padStart(2,"0");
                  setBirthDate(prev=>{
                    const parts = prev.split("-");
                    const month = parts[1] || "";
                    const year = parts[2] || "";
                    return `${day}-${month}-${year}`;
                  });
                }}
                className="rounded-xl bg-white px-4 py-3 text-black text-center"
              />

              <input
                type="number"
                placeholder="Mois"
                min="1"
                max="12"
                onChange={(e)=>{
                  const month = e.target.value.padStart(2,"0");
                  setBirthDate(prev=>{
                    const parts = prev.split("-");
                    const day = parts[0] || "";
                    const year = parts[2] || "";
                    return `${day}-${month}-${year}`;
                  });
                }}
                className="rounded-xl bg-white px-4 py-3 text-black text-center"
              />

              <input
                type="number"
                placeholder="Année"
                min="1900"
                max="2100"
                onChange={(e)=>{
                  const year = e.target.value;
                  setBirthDate(prev=>{
                    const parts = prev.split("-");
                    const day = parts[0] || "";
                    const month = parts[1] || "";
                    return `${day}-${month}-${year}`;
                  });
                }}
                className="rounded-xl bg-white px-4 py-3 text-black text-center"
              />

            </div>


            <p className="text-sm text-white/70 text-left">
              Heure de naissance (optionnel)
            </p>

            <div className="grid grid-cols-2 gap-3">

              <input
                type="number"
                placeholder="Heure"
                min="0"
                max="23"
                onChange={(e)=>{
                  const hour = e.target.value.padStart(2,"0");
                  setBirthTime(prev=>{
                    const parts = prev.split(":");
                    const minute = parts[1] || "";
                    return `${hour}:${minute}`;
                  });
                }}
                className="rounded-xl bg-white px-4 py-3 text-black text-center"
              />

              <input
                type="number"
                placeholder="Minute"
                min="0"
                max="59"
                onChange={(e)=>{
                  const minute = e.target.value.padStart(2,"0");
                  setBirthTime(prev=>{
                    const parts = prev.split(":");
                    const hour = parts[0] || "";
                    return `${hour}:${minute}`;
                  });
                }}
                className="rounded-xl bg-white px-4 py-3 text-black text-center"
              />

            </div>


            <input
              type="text"
              placeholder="Ville de naissance"
              value={birthPlace}
              onChange={(e)=>setBirthPlace(e.target.value)}
              required
              className="w-full rounded-xl bg-white px-4 py-3 text-black"
            />


            <button
              type="submit"
              disabled={sending}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-lg font-semibold text-white"
            >
              Recevoir ma première analyse
            </button>

          </form>

          <p className="mt-6 text-sm text-white/60">
            Vos informations restent confidentielles et ne seront jamais partagées.
          </p>

        </section>

      </section>

    </main>

  );

}
