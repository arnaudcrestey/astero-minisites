import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">

      {/* Background halos */}
      <div className="halo -left-24 -top-14 h-80 w-80 bg-[#ff6b81]/50" />
      <div className="halo -bottom-24 left-1/2 h-80 w-[34rem] -translate-x-1/2 bg-[#6c63ff]/45" />
      <div className="halo -bottom-16 right-10 h-72 w-72 bg-[#8b5cf6]/30" />

      {/* Card */}
      <section className="glass-card relative z-10 w-full max-w-3xl rounded-3xl px-6 py-10 text-center md:px-14 md:py-14">

        {/* Logo */}
        <span className="mb-6 inline-block animate-float text-5xl">💖</span>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          LOVE SCAN
        </h1>

        {/* Hook */}
        <div className="mx-auto mt-6 max-w-xl space-y-4">

          <p className="text-lg font-medium text-white md:text-2xl">
            Découvrez ce que votre façon d’aimer révèle vraiment.
          </p>

          <p className="text-sm text-slate-200/85 md:text-lg">
            En <strong>10 questions</strong>, identifiez les
            <span className="font-semibold text-white"> erreurs invisibles</span>{" "}
            qui sabotent souvent les relations sans qu’on s’en rende compte.
          </p>

        </div>

        {/* Credibility */}
        <div className="mt-6 text-xs text-slate-200/70 md:text-sm">
          ✔ Test anonyme &nbsp;•&nbsp; ✔ 3 minutes &nbsp;•&nbsp; ✔ Analyse Relationnelle
        </div>

        {/* Buttons */}
        <div className="mx-auto mt-10 flex max-w-md flex-col gap-4">

          <Link
            href="/celibataire"
            className="rounded-2xl bg-gradient-to-r from-[#ff6b86] to-[#be90ff] px-6 py-4 text-base font-semibold shadow-xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5 hover:brightness-110 md:text-lg"
          >
            ❤️ Je suis célibataire
          </Link>

          <Link
            href="/couple"
            className="rounded-2xl bg-gradient-to-r from-[#ff6b86] to-[#be90ff] px-6 py-4 text-base font-semibold shadow-xl shadow-indigo-950/40 transition hover:-translate-y-0.5 hover:brightness-110 md:text-lg"
          >
            💑 Je suis en couple
          </Link>

        </div>

        {/* Social proof */}
        <p className="mt-8 text-xs text-slate-300/70 md:text-sm">
          ❤️ 3 842 personnes ont déjà fait ce test cette semaine
        </p>

        {/* Astrae link */}
        <p className="mt-4 text-xs text-slate-300/60 md:text-sm">
          Analyse proposée par{" "}
          <a
            href="https://arnaudcrestey.com"
            className="underline decoration-fuchsia-300/70 hover:text-white"
          >
            Cabinet Astrae
          </a>
        </p>

      </section>
    </main>
  );
}
