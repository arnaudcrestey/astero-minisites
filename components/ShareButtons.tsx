"use client";

import { useState } from "react";

type ShareButtonsProps = {
  score: number;
};

export function ShareButtons({ score }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/`
      : "https://love-scan-three.vercel.app/";

  const shareText = `J’ai testé Love Scan. Mon score relationnel : ${score} %. Découvrez votre propre dynamique amoureuse en quelques minutes.`;

  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);

  const whatsappUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
      <h3 className="mb-2 text-center text-2xl font-semibold text-white">
        Faire découvrir Love Scan
      </h3>

      <p className="mx-auto mb-3 max-w-2xl text-center text-sm text-white/75">
        Partagez ce diagnostic amoureux avec une personne de votre entourage ou sur vos réseaux.
      </p>

      <p className="mb-5 text-center text-sm text-white/55">
        Cliquez sur un bouton pour partager le test avec un message déjà préparé.
      </p>

      <div className="mx-auto mb-5 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
        <p className="mb-2 text-xs uppercase tracking-wide text-pink-300">
          Aperçu du message envoyé
        </p>
        <p className="text-sm leading-relaxed text-white/80">
          {shareText}
        </p>
      </div>

     <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-white/85 transition hover:bg-white/10"
  >
    WhatsApp
  </a>

  <button
    onClick={copyMessage}
    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-white/85 transition hover:bg-white/10"
  >
    {copied ? "Copié ✓" : "Copier"}
  </button>

  <a
    href={facebookUrl}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-white/85 transition hover:bg-white/10"
  >
    Facebook
  </a>

  <a
    href={linkedInUrl}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-white/85 transition hover:bg-white/10"
  >
    LinkedIn
  </a>

  <a
    href={twitterUrl}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm text-white/85 transition hover:bg-white/10 sm:col-span-1"
  >
    X
  </a>
</div>
    </section>
  );
}
