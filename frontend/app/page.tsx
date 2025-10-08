'use client';

import { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm";
import RecipeCard from "../components/RecipeCard";
import HistoryPanel, { type HistoryEntry } from "../components/HistoryPanel";
import { generateRecipe, type GeneratedRecipe, type RecipeInput } from "../lib/recipeGenerator";

const STORAGE_KEY = "assistant-recette-pro-history";

const HomePage = () => {
  const [currentRecipe, setCurrentRecipe] = useState<GeneratedRecipe | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: HistoryEntry[] = JSON.parse(stored);
        setHistory(parsed);
        if (parsed[0]) {
          setCurrentRecipe(parsed[0].recipe);
        }
      }
    } catch (error) {
      console.error("Impossible de charger l'historique", error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const handleGenerate = (input: RecipeInput) => {
    setIsGenerating(true);
    window.setTimeout(() => {
      const recipe = generateRecipe(input);
      setCurrentRecipe(recipe);
      setHistory((prev) => {
        const next: HistoryEntry[] = [
          { id: recipe.id, createdAt: new Date().toISOString(), recipe },
          ...prev.filter((entry) => entry.recipe.title !== recipe.title || entry.recipe.servings !== recipe.servings),
        ].slice(0, 10);
        return next;
      });
      setIsGenerating(false);
    }, 420);
  };

  const handleSelectFromHistory = (id: string) => {
    const entry = history.find((item) => item.id === id);
    if (entry) {
      setCurrentRecipe(entry.recipe);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand/80 p-8 text-white shadow-soft">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-medium uppercase tracking-wide">
              Assistant Recette Pro
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl">Fiches techniques instantanées pour boulangers et pâtissiers</h1>
            <p className="text-sm sm:text-base text-white/80">
              De la viennoiserie au flan en passant par la pâte à pizza, obtenez en quelques secondes une fiche claire,
              professionnelle et adaptée à votre matériel. Prêt pour la production ?
            </p>
            <ul className="grid gap-2 text-xs sm:grid-cols-3 sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-lg">⚙️</span>
                <span>Adapter aux équipements sélectionnés</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-lg">📏</span>
                <span>Grammages recalculés instantanément</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-lg">🧠</span>
                <span>Tips de chef & check-list finale</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <div className="space-y-6">
            <RecipeForm onGenerate={handleGenerate} isGenerating={isGenerating} />
            {currentRecipe ? (
              <RecipeCard recipe={currentRecipe} onReset={() => setCurrentRecipe(null)} />
            ) : (
              <div className="card flex flex-col items-start gap-4 p-6 text-sm text-slate-600 sm:p-10">
                <h2 className="text-lg font-semibold text-slate-900">Votre fiche apparaîtra ici</h2>
                <p>
                  Renseignez le formulaire ci-dessus pour générer automatiquement une fiche complète : ingrédients, matériel,
                  étapes avec temps et astuces de chef.
                </p>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li>• Ajoutez plusieurs équipements pour obtenir des recommandations adaptées.</li>
                  <li>• Les fiches restent enregistrées dans l'historique local pour consultation ultérieure.</li>
                  <li>• Utilisez le bouton « Imprimer » pour obtenir une version papier ou PDF.</li>
                </ul>
              </div>
            )}
          </div>
          <HistoryPanel entries={history} onSelect={handleSelectFromHistory} onClear={handleClearHistory} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
