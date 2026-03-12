import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="halo -left-24 -top-14 h-80 w-80 bg-[#ff6b81]/50" />
      <div className="halo -bottom-24 left-1/2 h-80 w-[34rem] -translate-x-1/2 bg-[#6c63ff]/45" />
      <div className="halo -bottom-16 right-10 h-72 w-72 bg-[#8b5cf6]/30" />

      <section className="glass-card relative z-10 w-full max-w-3xl rounded-3xl px-6 py-10 text-center md:px-14 md:py-14">
        <span className="mb-6 inline-block text-5xl animate-float">💖</span>
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">LOVE SCAN</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-100/85 md:text-2xl md:leading-relaxed">
          Découvrez en 3 minutes les dynamiques invisibles qui influencent votre vie amoureuse.
        </p>

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
      </section>
    </main>
  );
}
