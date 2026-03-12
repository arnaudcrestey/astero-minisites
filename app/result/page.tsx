import Link from "next/link";
import RadarLove from "@/components/RadarLove";

export default function ResultPage() {

  const score = 68;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">

      <section className="glass-card relative z-10 w-full max-w-3xl rounded-3xl px-6 py-10 text-center md:px-14">

        {/* Header */}

        <p className="text-xs tracking-widest text-slate-300/70">
          RÉSULTAT LOVE SCAN
        </p>

        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
          Score relationnel : {score} %
        </h1>

        {/* Radar + Diagnostic */}

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Diagnostic */}

          <div className="rounded-2xl bg-white/5 p-6 text-left">

            <h3 className="font-semibold mb-2">
              Diagnostic principal
            </h3>

            <p className="text-sm text-slate-200/80">
              Votre score indique une bonne capacité à construire
              des relations équilibrées, avec encore quelques
              ajustements possibles dans la communication émotionnelle.
            </p>

            <ul className="mt-4 text-sm space-y-1 text-slate-200/80">
              <li>• Bonne conscience relationnelle</li>
              <li>• Capacité à créer du lien</li>
              <li>• Potentiel d’évolution émotionnelle</li>
            </ul>

          </div>

          {/* Radar */}

          <div className="rounded-2xl bg-white/5 p-6">

            <h3 className="font-semibold mb-4 text-sm text-center">
              Profil relationnel
            </h3>

            <div className="flex items-center justify-center">
              <RadarLove score={score} />
            </div>

            <div className="mt-4 text-xs text-slate-300/70 text-center">
              Communication • Attachement • Stabilité • Vision
            </div>

          </div>

        </div>

        {/* Analyse personnalisée */}

        <div className="mt-8 rounded-2xl bg-white/5 p-6 text-left">

          <h3 className="font-semibold mb-2">
            Analyse personnalisée
          </h3>

          <p className="text-sm text-slate-200/80">
            Votre score relationnel révèle des forces dans votre capacité
            à créer du lien, mais aussi certaines dynamiques émotionnelles
            qui peuvent influencer vos choix amoureux.
          </p>

          <p className="text-sm text-slate-200/80 mt-3">
            Dans certaines situations, vous pouvez hésiter entre
            engagement et protection personnelle, ce qui peut créer
            des schémas relationnels répétitifs.
          </p>

        </div>

        {/* Astrae CTA */}

        <div className="mt-10 rounded-2xl bg-white/5 p-6">

          <h3 className="text-lg font-semibold">
            Comprendre vraiment votre profil amoureux
          </h3>

          <p className="mt-3 text-sm text-slate-200/80">
            Certaines dynamiques relationnelles peuvent être liées
            à votre personnalité profonde et à votre trajectoire
            émotionnelle.
          </p>

          <p className="mt-2 text-sm text-slate-200/80">
            Le Cabinet Astrae propose une analyse approfondie
            pour explorer ces mécanismes grâce à l’étude du thème
            astral et de votre histoire personnelle.
          </p>

          <Link
            href="https://arnaudcrestey.com"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold"
          >
            Découvrir mon analyse Astrae
          </Link>

        </div>

        {/* Restart */}

        <div className="mt-8">

          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold"
          >
            Refaire le test
          </Link>

        </div>

      </section>

    </main>
  );
}
