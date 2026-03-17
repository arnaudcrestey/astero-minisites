"use client";

import RadarLove from "@/components/RadarLove";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ResultClient() {

  const params = useSearchParams();
  const router = useRouter();

  const score = Number(params.get("score")) || 0;

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

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    async function generateAnalysis() {
      try {
        const res = await fetch("/api/analyse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score })
        });

        const data = await res.json();

        if (data.analysis) setAnalysis(data.analysis);

      } catch {
        setAnalysis("Impossible de générer l'analyse.");
      } finally {
        setLoading(false);
      }
    }

    generateAnalysis();
  }, [score]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

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

        setTimeout(() => {
          router.push("/astrae");
        }, 2500);
      }

    } catch {
      alert("Erreur serveur.");
    }

    setSending(false);
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="glass max-w-xl rounded-2xl p-10">
          <h2 className="text-3xl font-semibold mb-4">✓ Demande envoyée</h2>
          <p className="text-white/80">
            Votre analyse arrive dans quelques instants ✨
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">

      <section className="glass-card w-full max-w-5xl rounded-3xl px-6 py-10 text-center md:px-14">

        <p className="text-xs tracking-widest text-slate-300/70">
          RÉSULTAT LOVE SCAN
        </p>

        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Score relationnel : {score} %
        </h1>

        {/* CARDS */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white/5 p-6 text-left">
            <h3 className="font-semibold mb-2">
              Diagnostic principal
            </h3>
            <p className="text-sm text-slate-200/80">
              Votre score reflète votre manière d’aimer et d’entrer en relation.
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

        {/* ANALYSE */}
        <div className="mt-8 rounded-2xl bg-white/5 p-6 text-left">
          <h3 className="font-semibold mb-2">
            Analyse personnalisée
          </h3>

          {loading ? (
            <p className="text-sm text-slate-200/80">Analyse en cours...</p>
          ) : (
            <p className="text-sm text-slate-200/80 whitespace-pre-line">
              {analysis}
            </p>
          )}
        </div>

        {/* 🔥 FORMULAIRE PREMIUM */}
        <section className="mt-16 rounded-2xl bg-white/5 p-8 text-center max-w-2xl mx-auto">

          <h2 className="text-2xl font-semibold mb-3">
            Comprendre réellement votre fonctionnement amoureux
          </h2>

         <p className="text-white/70 text-sm mb-3">
  Au <span className="font-semibold text-white">Cabinet Astrae</span>, nous utilisons l’étude du thème astral pour comprendre les dynamiques profondes qui influencent votre vie amoureuse.
</p>

          <p className="text-white/50 text-xs mb-2">
            Sans engagement • Résultat immédiat
          </p>

          <p className="text-white/80 mb-6">
            🎁 Recevez <span className="text-cyan-300 font-semibold">gratuitement</span> votre lecture amoureuse personnalisée
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
            />

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
            />

            <div className="text-left text-sm text-white/70">
  Date de naissance
</div>

<div className="grid grid-cols-3 gap-3">

  {/* MOBILE */}
  <input
    placeholder="JJ"
    maxLength={2}
    onChange={(e)=>setBirthDate(prev => `${e.target.value}/${prev.split("/")[1]||""}/${prev.split("/")[2]||""}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black block md:hidden"
  />

  <input
    placeholder="MM"
    maxLength={2}
    onChange={(e)=>setBirthDate(prev => `${prev.split("/")[0]||""}/${e.target.value}/${prev.split("/")[2]||""}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black block md:hidden"
  />

  <input
    placeholder="AA"
    maxLength={4}
    onChange={(e)=>setBirthDate(prev => `${prev.split("/")[0]||""}/${prev.split("/")[1]||""}/${e.target.value}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black block md:hidden"
  />

  {/* DESKTOP */}
  <input
    placeholder="Jour"
    maxLength={2}
    onChange={(e)=>setBirthDate(prev => `${e.target.value}/${prev.split("/")[1]||""}/${prev.split("/")[2]||""}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black hidden md:block"
  />

  <input
    placeholder="Mois"
    maxLength={2}
    onChange={(e)=>setBirthDate(prev => `${prev.split("/")[0]||""}/${e.target.value}/${prev.split("/")[2]||""}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black hidden md:block"
  />

  <input
    placeholder="Année"
    maxLength={4}
    onChange={(e)=>setBirthDate(prev => `${prev.split("/")[0]||""}/${prev.split("/")[1]||""}/${e.target.value}`)}
    className="rounded-xl bg-white/90 px-3 py-3 text-center text-black hidden md:block"
  />

</div>

            <div className="text-left text-sm text-white/70">
              Heure de naissance
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Heure" maxLength={2}
                onChange={(e)=>setBirthTime(prev => `${e.target.value}:${prev.split(":")[1]||""}`)}
                className="rounded-xl bg-white/90 px-3 py-3 text-center text-black"/>
              <input placeholder="Minute" maxLength={2}
                onChange={(e)=>setBirthTime(prev => `${prev.split(":")[0]||""}:${e.target.value}`)}
                className="rounded-xl bg-white/90 px-3 py-3 text-center text-black"/>
            </div>

            <input
              type="text"
              placeholder="Ville de naissance"
              value={birthPlace}
              onChange={(e)=>setBirthPlace(e.target.value)}
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-lg font-semibold text-white"
            >
              {sending ? "Envoi..." : "Recevoir ma première analyse"}
            </button>

          </form>

          {/* SHARE */}
          <div className="mt-10">
            <p className="text-white/70 mb-4 text-sm">
              Quelqu’un doit voir ça 👀
            </p>

            <div className="flex justify-center gap-3 flex-wrap">

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                className="px-4 py-2 rounded-full bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Je viens de découvrir mon profil amoureux ❤️")}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                className="px-4 py-2 rounded-full bg-white/10"
              >
                Twitter
              </a>

              <a
                href={`https://wa.me/?text=${encodeURIComponent("Fais ce test Love Scan ❤️ " + currentUrl)}`}
                target="_blank"
                className="px-4 py-2 rounded-full bg-white/10"
              >
                WhatsApp
              </a>

            </div>
          </div>

        </section>

      </section>
    </main>
  );
}
