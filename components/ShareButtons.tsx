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
    <section className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md sm:p-6">
      <h3 className="text-center text-xl font-semibold text-white sm:text-2xl">
        Faire découvrir Love Scan
      </h3>

      <p className="mx-auto mt-2 max-w-xl text-center text-xs leading-relaxed text-white/75 sm:text-sm">
        Partagez ce diagnostic amoureux avec une personne de votre entourage ou sur vos réseaux.
      </p>

      <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-relaxed text-white/55 sm:mt-3 sm:text-sm">
        Cliquez sur un bouton pour partager le test avec un message déjà préparé.
      </p>

      <div className="mx-auto mt-4 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 text-left sm:mt-6 sm:p-4">
        <p className="mb-2 text-[10px] uppercase tracking-wide text-pink-300 sm:text-xs">
          Aperçu du message envoyé
        </p>

        <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
          {shareText}
        </p>
      </div>

      <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-3 py-2 text-center text-xs text-white/85 transition hover:bg-white/10 sm:px-4 sm:text-sm"
        >
          WhatsApp
        </a>

        <button
          onClick={copyMessage}
          className="rounded-full border border-white/20 px-3 py-2 text-center text-xs text-white/85 transition hover:bg-white/10 sm:px-4 sm:text-sm"
        >
          {copied ? "Message Copié ✓" : "Copier le message"}
        </button>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-3 py-2 text-center text-xs text-white/85 transition hover:bg-white/10 sm:px-4 sm:text-sm"
        >
          Facebook
        </a>

        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-3 py-2 text-center text-xs text-white/85 transition hover:bg-white/10 sm:px-4 sm:text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
