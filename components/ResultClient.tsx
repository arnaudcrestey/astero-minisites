'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { MAX_SCORE, QuizType } from '@/lib/questions';

export function ResultClient() {
  const searchParams = useSearchParams();
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(true);

  const type = (searchParams.get('type') as QuizType) || 'celibataire';
  const rawScore = Number(searchParams.get('score') || '0');
  const answers = searchParams.get('answers') || '';

  const percentScore = useMemo(() => Math.min(100, Math.round((rawScore / MAX_SCORE) * 100)), [rawScore]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/analyse', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ score: percentScore, type, answers })
        });

        const data = await response.json();
        setAnalysis(data.analysis || 'Analyse indisponible pour le moment.');
      } catch {
        setAnalysis('Impossible de charger l\'analyse. Réessayez dans quelques instants.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [answers, percentScore, type]);

  return (
    <section className="glass-card relative z-10 w-full max-w-2xl rounded-3xl p-6 md:p-10">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-100/70">Résultat LOVE SCAN</p>
      <h1 className="mt-4 text-3xl font-bold md:text-5xl">Score relationnel : {percentScore} %</h1>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <article className="mt-6 whitespace-pre-line rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-100/95">
          {analysis}
        </article>
      )}

      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-rose-400 to-violet-400 px-5 py-3 font-semibold shadow-lg shadow-violet-950/30 transition hover:brightness-110"
      >
        Refaire le test
      </Link>
    </section>
  );
}
