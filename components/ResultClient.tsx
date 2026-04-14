"use client";

import RadarLove from "@/components/RadarLove";
import { ShareButtons } from "@/components/ShareButtons";
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

    // 👉 NE PAS preventDefault ici

    if (!e.currentTarget.checkValidity()) {
      e.preventDefault(); // bloque uniquement si invalide
      e.currentTarget.reportValidity();
      return;
    }

    e.preventDefault(); // ok ici → tout est valide

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
          router.push("/");
        }, 2500);
      } else {
        alert(result?.error || "Erreur serveur.");
      }
    } catch {
      alert("Erreur serveur.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Demande confirmée
          </h2>
          <p className="text-white/70">
            Votre analyse personnalisée vous sera envoyée très prochainement.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="glass-card w-full max-w-5xl rounded-3xl px-6 py-10 text-center md:px-14">

        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Score relationnel : {score} %
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">

          <input
            type="text"
            name="firstName"
            placeholder="Votre prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
          />

          <div className="grid grid-cols-3 gap-2">
            <input
              name="birthDay"
              placeholder="Jour"
              value={birthDay}
              onChange={(e) =>
                setBirthDay(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black text-center"
            />
            <input
              name="birthMonth"
              placeholder="Mois"
              value={birthMonth}
              onChange={(e) =>
                setBirthMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black text-center"
            />
            <input
              name="birthYear"
              placeholder="Année"
              value={birthYear}
              onChange={(e) =>
                setBirthYear(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black text-center"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              name="birthHour"
              placeholder="Heure"
              value={birthHour}
              onChange={(e) =>
                setBirthHour(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black text-center"
            />
            <input
              name="birthMinute"
              placeholder="Minute"
              value={birthMinute}
              onChange={(e) =>
                setBirthMinute(e.target.value.replace(/\D/g, "").slice(0, 2))
              }
              required
              className="w-full rounded-xl bg-white/90 px-4 py-3 text-black text-center"
            />
          </div>

          <input
            name="birthPlace"
            placeholder="Ville de naissance"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            required
            className="w-full rounded-xl bg-white/90 px-4 py-3 text-black"
          />

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-white"
          >
            {sending ? "Envoi..." : "Recevoir mon analyse"}
          </button>
        </form>

        <div className="mt-10">
          <ShareButtons score={score} />
        </div>

      </section>
    </main>
  );
}
