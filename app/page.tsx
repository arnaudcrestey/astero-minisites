import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">

      {/* Halos background */}
      <div className="halo -left-24 -top-14 h-80 w-80 bg-[#ff6b81]/50" />
      <div className="halo -bottom-24 left-1/2 h-80 w-[34rem] -translate-x-1/2 bg-[#6c63ff]/45" />
      <div className="halo -bottom-16 right-10 h-72 w-72 bg-[#8b5cf6]/30" />

      <section className="glass-card relative z-10 w-full max-w-3xl rounded-3xl px-6 py-10 text-center md:px-14 md:py-14">

        {/* Logo */}
        <span className="mb-6 inline-block animate-float text-5xl">💖</span>

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          LOVE SCAN
        </h1>

        {/* New Hook */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-100/90 md:text-2xl md:leading-relaxed">
          En <strong>10 questions</strong>, découvrez ce que votre façon d’aimer révèle vraiment.
          <br />
          Certaines réponses mettent en lumière  <strong>les erreurs invisibles</strong>{' '}qui peuvent saboter vos relations.
        </p>

        {/* Credibility */}
        <div className="mt-6 text-sm text-slate-200/80 md:text-base">
          ✔ Test anonyme &nbsp;•&nbsp; ✔ 3 minutes &nbsp;•&nbsp; ✔ Analyse relationnelle
        </div>

        {/* Buttons */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4">

          <Link
            href="/celibataire"
            className="rounded-2xl bg-gradient-to-r from-[#ff6b86] to-[#be90ff] px-6 py-4 text-lg font-bold shadow-xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            ❤️ Je suis célibataire
          </Link>

          <Link
            href="/couple"
            className="rounded-2xl bg-gradient-to-r from-[#ff6b86] to-[#be90ff] px-6 py-4 text-lg font-bold shadow-xl shadow-indigo-950/40 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            💑 Je suis en couple
          </Link>

        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-slate-200/70">
          ❤️ 3 842 personnes ont déjà fait ce test cette semaine
        </p>

        {/* Astrae subtle link */}
        <p className="mt-6 text-xs text-slate-300/60 md:text-sm">
          Analyse proposée par{" "}
          <a
            href="https://arnaudcrestey.com"
            className="underline decoration-fuchsia-300/60 hover:text-white"
          >
            Cabinet Astrae
          </a>
        </p>

      </section>
    </main>
  );
}
