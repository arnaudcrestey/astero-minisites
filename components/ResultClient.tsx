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

  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthHour, setBirthHour] = useState("");
  const [birthMinute, setBirthMinute] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [currentUrl, setCurrentUrl] = useState("");

  const shareText = `Je viens de faire un test sur ma façon d’aimer ❤️

Résultat : ${score}%

Franchement, je ne m’attendais pas à ça…

Tu devrais essayer 👇`;

  const shareUrl = currentUrl;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    async function generateAnalysis() {
      try {
        const res = await fetch("/api/analyse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score }),
        });

        const data = await res.json();

        if (data?.analysis) {
          setAnalysis(data.analysis);
        } else {
          setAnalysis("Impossible de générer l'analyse.");
        }
      } catch {
        setAnalysis("Impossible de générer l'analyse.");
      } finally {
        setLoading(false);
      }
    }

    generateAnalysis();
  }, [score]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!firstName.trim() || !email.trim()) {
    alert("Merci de remplir les champs obligatoires.");
    return;
  }

  setSending(true);

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.trim(),
        email: email.trim(),
        birthDay: birthDay.trim(),
        birthMonth: birthMonth.trim(),
        birthYear: birthYear.trim(),
        birthHour: birthHour.trim(),
        birthMinute: birthMinute.trim(),
        birthPlace: birthPlace.trim(),
        score,
        profile,
      }),
    });

   const result = await res.json();

if (res.ok && result?.success) {
  setSubmitted(true);

  setTimeout(() => {
    router.push("/astrae");
  }, 2500);
} else {
  console.error("Erreur API /api/lead :", result);
  alert(result?.error || "Erreur serveur.");
}

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="glass max-w-xl rounded-2xl p-10">
          <h2 className="mb-4 text-3xl font-semibold">✓ Demande envoyée</h2>
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 text-left">
            <h3 className="mb-2 font-semibold">Diagnostic principal</h3>
            <p className="text-sm text-slate-200/80">
              Votre score reflète votre manière d’aimer et d’entrer en relation.
            </p>

            <ul className="mt-4 space-y-1 text-sm text-slate-200/80">
              <li>• Conscience relationnelle</li>
              <li>• Capacité à créer du lien</li>
              <li>• Potentiel d’évolution émotionnelle</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-semibold">Profil relationnel</h3>
            <RadarLove score={score} />
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white/5 p-6 text-left">
          <h3 className="mb-2 font-semibold">Analyse personnalisée</h3>

          {loading ? (
            <p className="text-sm text-slate-200/80">Analyse en cours...</p>
          ) : (
            <p className="whitespace-pre-line text-sm text-slate-200/80">
              {analysis}
            </p>
          )}
        </div>

        <section className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white/5 p-6 text-center sm:p-8">
          <h2 className="mb-3 text-2xl font-semibold">
            Comprendre réellement votre fonctionnement amoureux
          </h2>

          <p className="mb-3 text-sm text-white/70">
            Au{" "}
            <span className="font-semibold text-cyan-300">Cabinet Astrae</span>,
            nous utilisons l’étude du thème astral pour comprendre les dynamiques
            profondes qui influencent votre vie amoureuse.
          </p>

          <p className="mb-2 text-xs text-white/50">
            Sans engagement • Résultat immédiat
          </p>

          <p className="mb-6 text-white/80">
            🎁 Recevez{" "}
            <span className="font-semibold text-cyan-300">gratuitement</span>{" "}
            votre lecture amoureuse personnalisée
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black placeholder:text-gray-400"
            />

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black placeholder:text-gray-400"
            />

            <div className="pt-2 text-left text-sm text-white/80">
              Date de naissance
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Jour"
                maxLength={2}
                value={birthDay}
                onChange={(e) =>
                  setBirthDay(e.target.value.replace(/\D/g, "").slice(0, 2))
                }
                className="w-full rounded-xl bg-white/90 px-4 py-3 text-center text-black placeholder:text-gray-400"
              />

              <input
                type="text"
                inputMode="numeric"
                placeholder="Mois"
                maxLength={2}
                value={birthMonth}
                onChange={(e) =>
                  setBirthMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
                }
                className="w-full rounded-xl bg-white/90 px-4 py-3 text-center text-black placeholder:text-gray-400"
              />

              <input
                type="text"
                inputMode="numeric"
                placeholder="Année"
                maxLength={4}
                value={birthYear}
                onChange={(e) =>
                  setBirthYear(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                className="w-full rounded-xl bg-white/90 px-4 py-3 text-center text-black placeholder:text-gray-400"
              />
            </div>

            <div className="pt-2 text-left text-sm text-white/80">
              Heure de naissance
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Heure"
                maxLength={2}
                value={birthHour}
                onChange={(e) =>
                  setBirthHour(e.target.value.replace(/\D/g, "").slice(0, 2))
                }
                className="w-full rounded-xl bg-white/90 px-4 py-3 text-center text-black placeholder:text-gray-400"
              />

              <input
                type="text"
                inputMode="numeric"
                placeholder="Minute"
                maxLength={2}
                value={birthMinute}
                onChange={(e) =>
                  setBirthMinute(e.target.value.replace(/\D/g, "").slice(0, 2))
                }
                className="w-full rounded-xl bg-white/90 px-4 py-3 text-center text-black placeholder:text-gray-400"
              />
            </div>

            <input
              type="text"
              placeholder="Ville de naissance"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black placeholder:text-gray-400"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-lg font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? "Envoi..." : "Recevoir ma première analyse"}
            </button>
          </form>

          <div className="mt-10">
            <p className="mb-4 text-sm text-white/70">Quelqu’un doit voir ça 👀</p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                LinkedIn
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                Twitter
              </a>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${shareText} ${shareUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
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
