const HomePage = () => {
  return (
    <main className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,111,255,0.35),_transparent_55%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,_rgba(0,212,255,0.25),_transparent_55%)]" />
        <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              QLYK Studio
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              L&apos;excellence visuelle augmentée par l&apos;intelligence artificielle.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              QLYK Studio transforme vos photos brutes en contenus haut de gamme, fixes et animés, grâce à une IA
              maîtrisée et une exigence de rendu sans compromis. Sublimez le réel, sans jamais le transformer.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="button-primary">Demander une démonstration</button>
              <button className="button-secondary">Voir nos réalisations</button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Impact commercial immédiat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <span>Fidélité totale au réel</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⏱️</span>
                <span>Livraison rapide</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="glass-card space-y-6 p-8">
              <h2 className="text-xl font-semibold">Notre mission</h2>
              <p className="text-sm text-white/70">
                Aider les professionnels à vendre mieux, plus vite et avec plus d&apos;impact, en révélant le plein
                potentiel de leurs visuels, sans jamais trahir la réalité.
              </p>
              <div className="grid gap-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-lg">✔️</span>
                  <span>Automobile, immobilier, produits, savoir-faire…</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-lg">✔️</span>
                  <span>IA utilisée pour magnifier l&apos;existant, jamais pour inventer.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-lg">✔️</span>
                  <span>Visuels crédibles, rassurants et immédiatement exploitables.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-light">Une approche unique</p>
          <h2 className="text-3xl font-semibold">Sublimer le réel, jamais le transformer</h2>
          <p className="text-white/70">
            Chaque projet suit un protocole rigoureux, conçu pour préserver la vérité du visuel tout en maximisant son
            impact émotionnel et commercial.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Analyse experte",
              text: "Étude approfondie du visuel source et des objectifs de diffusion.",
            },
            {
              title: "Correction technique",
              text: "Redressement, colorimétrie précise et respect strict des matières.",
            },
            {
              title: "Optimisation lumière & ambiance",
              text: "Équilibre lumineux maîtrisé pour un rendu premium et authentique.",
            },
            {
              title: "Rendu photo-réaliste",
              text: "Visuels élégants, prêts à vendre, sans effets artificiels excessifs.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-light">Photo & Vidéo</p>
            <h2 className="text-3xl font-semibold">De la photo… à la vidéo courte à fort impact</h2>
            <p className="text-white/70">
              QLYK Studio transforme vos photos en vidéos courtes professionnelles (environ 8 secondes) pour captiver et
              convertir sur tous vos supports.
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-lg">🎬</span>
                <span>Animations fluides, mouvements de caméra élégants et transitions cinématographiques sobres.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-lg">📣</span>
                <span>Formats adaptés aux réseaux sociaux, publicités digitales et pages de vente premium.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-lg">🧩</span>
                <span>Mise en scène cohérente avec l&apos;univers du bien ou du produit.</span>
              </div>
            </div>
          </div>
          <div className="glass-card flex flex-col gap-6 p-8">
            <h3 className="text-xl font-semibold">Des contenus prêts à vendre</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>✔️ Annonces premium et plateformes spécialisées.</li>
              <li>✔️ Showrooms, vitrines et écrans événementiels.</li>
              <li>✔️ Présentations commerciales haut de gamme.</li>
              <li>✔️ Réseaux sociaux et campagnes ciblées.</li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70">
              Toujours avec un principe fondamental : la réalité reste intacte.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-light">Expertises</p>
          <h2 className="text-3xl font-semibold">Deux expertises mises en avant, une vision globale</h2>
          <p className="text-white/70">
            Des standards premium pour l&apos;automobile et l&apos;immobilier, appliqués ensuite à tous les secteurs où l&apos;image
            doit séduire sans mentir.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">🚗 Automobile</h3>
            <p className="mt-3 text-sm text-white/70">
              Valorisation de véhicules à partir de photos simples, intégrées dans des décors premium sans aucune
              modification du véhicule. Un rendu inspiré des standards des grandes marques.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">🏡 Immobilier</h3>
            <p className="mt-3 text-sm text-white/70">
              Photographie et vidéo immobilières réalistes : perspectives redressées, lumière optimisée, ambiance
              maîtrisée, sans altération des volumes ou finitions.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {["Produits", "Lieux & architectures", "Créations & savoir-faire"].map((label) => (
            <div key={label} className="glass-card p-6 text-sm text-white/70">
              <span className="text-lg font-semibold text-white">{label}</span>
              <p className="mt-2">La même exigence premium pour sublimer l&apos;existant et déclencher l&apos;envie.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20">
        <div className="glass-card p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Pourquoi choisir QLYK Studio ?</h2>
              <p className="text-white/70">
                Une expertise visuelle pensée pour générer confiance, émotion et conversion avec des contenus prêts à
                vendre immédiatement.
              </p>
              <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                {[
                  "Gain de temps et simplicité",
                  "Photos et vidéos courtes à partir de vos visuels existants",
                  "Rendu premium constant",
                  "Fidélité totale à la réalité",
                  "Contenus prêts à vendre immédiatement",
                  "Image de marque renforcée",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg text-brand-light">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-white/70">
              <h3 className="text-lg font-semibold text-white">QLYK Studio</h3>
              <p className="mt-2">L&apos;image et la vidéo professionnelles, sans compromis.</p>
              <p className="mt-4 text-white/80">Vous fournissez les photos. Nous créons l&apos;impact visuel.</p>
              <button className="button-primary mt-6 w-full">Programmer un échange</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-light">Contact</p>
          <h2 className="text-3xl font-semibold">QLYK Studio – Sublimer le réel, déclencher l&apos;envie.</h2>
          <p className="max-w-2xl text-sm text-white/70">
            Parlez-nous de vos visuels, de vos objectifs et des supports à privilégier. Nous construirons un rendu qui
            valorise votre réalité et accélère vos ventes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="button-primary">Recevoir un devis</button>
            <button className="button-secondary">Envoyer vos photos</button>
          </div>
          <p className="text-xs text-white/50">QLYK Studio © 2024</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
