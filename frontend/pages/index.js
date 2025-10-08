import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import recipes from '../utils/recipes';

const highlights = [
  {
    title: 'Précision professionnelle',
    description:
      'Grammes, températures, vitesses : chaque fiche recette est calibrée pour un résultat de chef, que vous soyez passionné ou artisan.',
  },
  {
    title: 'Compatibles robots',
    description:
      'Instructions dédiées aux robots pâtissiers (KitchenAid, Kenwood…) pour un pétrissage et des montages impeccables.',
  },
  {
    title: 'Astuces & conservation',
    description:
      'Conseils de pro, erreurs à éviter et méthodes de stockage pour servir vos créations à leur apogée.',
  },
];

const formatQuantity = (value) => {
  const rounded = Math.round(value * 10) / 10;
  if (Number.isInteger(rounded)) {
    return rounded.toString();
  }
  return rounded.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
};

export default function Home() {
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [people, setPeople] = useState(recipes[0].baseServings);

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const haystack = [recipe.name, recipe.summary, ...(recipe.keywords || [])]
        .join(' ')
        .toLowerCase();
      return normalizedQuery.split(/\s+/).every((term) => haystack.includes(term));
    });
  }, [query]);

  useEffect(() => {
    if (!filteredRecipes.includes(selectedRecipe)) {
      const nextRecipe = filteredRecipes[0] || recipes[0];
      setSelectedRecipe(nextRecipe);
      setPeople(nextRecipe.baseServings);
    }
  }, [filteredRecipes, selectedRecipe]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setPeople(recipe.baseServings);
  };

  const handlePeopleChange = (event) => {
    const value = Number(event.target.value);
    if (Number.isNaN(value) || value < 1) {
      return;
    }
    setPeople(value);
  };

  return (
    <>
      <Head>
        <title>Atelier Boulanger-Pâtissier — Recettes professionnelles</title>
      </Head>
      <div className="page">
        <header className="hero">
          <div className="hero__content">
            <p className="badge">Chef Virtuel Boulanger · Pâtissier · Pizzaiolo</p>
            <h1>Des fiches recettes de maître, prêtes à l&#39;emploi.</h1>
            <p className="hero__subtitle">
              Saisissez votre envie (ex. « recette pâte pizza »), précisez le nombre de convives et obtenez instantanément une fiche
              ultra structurée, conçue par des chefs pour une exécution fluide en cuisine.
            </p>
            <div className="search">
              <input
                type="search"
                placeholder="Que souhaitez-vous préparer aujourd'hui ?"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <p className="search__hint">Essayez : pâte à pizza pour 4 personnes, flan pâtissier 10 convives, baguette tradition…</p>
            </div>
          </div>
          <div className="hero__glow" aria-hidden />
        </header>

        <section className="highlights" aria-label="Avantages principaux">
          {highlights.map((item) => (
            <article key={item.title} className="highlights__card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <main className="layout" aria-label="Résultats de recettes">
          <aside className="results" aria-label="Sélection de recettes">
            <div className="results__header">
              <h2>{filteredRecipes.length} recette{filteredRecipes.length > 1 ? 's' : ''} trouvée{filteredRecipes.length > 1 ? 's' : ''}</h2>
              <p className="results__legend">Sélectionnez une fiche puis ajustez le nombre de personnes pour calibrer les grammages.</p>
            </div>
            <div className="results__list">
              {filteredRecipes.map((recipe) => {
                const isActive = recipe.id === selectedRecipe.id;
                return (
                  <button
                    key={recipe.id}
                    type="button"
                    className={`results__item${isActive ? ' results__item--active' : ''}`}
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <div className="results__item-header">
                      <span className="results__badge">{recipe.difficulty}</span>
                      <h3>{recipe.name}</h3>
                    </div>
                    <p>{recipe.summary}</p>
                    <ul className="results__meta">
                      <li>
                        <strong>Préparation</strong>
                        <span>{recipe.preparationTime}</span>
                      </li>
                      <li>
                        <strong>Total</strong>
                        <span>{recipe.totalTime}</span>
                      </li>
                      <li>
                        <strong>Personnes</strong>
                        <span>{recipe.baseServings}</span>
                      </li>
                    </ul>
                  </button>
                );
              })}
              {filteredRecipes.length === 0 && (
                <p className="results__empty">
                  Aucune recette ne correspond à votre recherche. Essayez un autre terme ou consultez notre sélection signature.
                </p>
              )}
            </div>
          </aside>

          {selectedRecipe && (
            <section className="recipe" aria-label="Fiche recette détaillée">
              <header className="recipe__header">
                <div>
                  <p className="recipe__badge">Fiche métier</p>
                  <h2>{selectedRecipe.name}</h2>
                  <p className="recipe__summary">{selectedRecipe.summary}</p>
                </div>
                <div className="recipe__meta">
                  <div>
                    <span className="meta__label">Préparation</span>
                    <strong className="meta__value">{selectedRecipe.preparationTime}</strong>
                  </div>
                  <div>
                    <span className="meta__label">Total</span>
                    <strong className="meta__value">{selectedRecipe.totalTime}</strong>
                  </div>
                  <div>
                    <span className="meta__label">Difficulté</span>
                    <strong className="meta__value">{selectedRecipe.difficulty}</strong>
                  </div>
                </div>
              </header>

              <section className="recipe__servings" aria-label="Ajuster le nombre de personnes">
                <label htmlFor="people">Nombre de personnes</label>
                <input
                  id="people"
                  type="number"
                  min={1}
                  value={people}
                  onChange={handlePeopleChange}
                />
                <span>Base : {selectedRecipe.baseServings} personne{selectedRecipe.baseServings > 1 ? 's' : ''}</span>
              </section>

              <section className="recipe__grid">
                <article className="card" aria-label="Ingrédients">
                  <h3>Ingrédients</h3>
                  {selectedRecipe.ingredients.map((group) => (
                    <div key={group.section} className="card__group">
                      <h4>{group.section}</h4>
                      <ul>
                        {group.items.map((item) => {
                          const scaledQuantity = (item.quantity * people) / selectedRecipe.baseServings;
                          return (
                            <li key={item.name}>
                              <span className="card__quantity">{formatQuantity(scaledQuantity)} {item.unit}</span>
                              <span>{item.name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </article>

                <article className="card" aria-label="Matériel nécessaire">
                  <h3>Matériel & préparation</h3>
                  <ul className="card__equipment">
                    {selectedRecipe.equipment.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              </section>

              <article className="card card--steps" aria-label="Étapes détaillées">
                <h3>Déroulé professionnel</h3>
                <ol>
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={step.title}>
                      <div className="step__number">{index + 1}</div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>

              <section className="recipe__grid">
                <article className="card" aria-label="Astuces de chef">
                  <h3>Astuces de chef</h3>
                  <ul>
                    {selectedRecipe.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </article>

                <article className="card" aria-label="Conservation">
                  <h3>Conservation</h3>
                  <p>{selectedRecipe.storage}</p>
                </article>
              </section>
            </section>
          )}
        </main>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: radial-gradient(circle at 20% 20%, #1f2a44 0%, #0d1117 55%, #05070d 100%);
          color: #f5f5f5;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding-bottom: 6rem;
        }

        .hero {
          position: relative;
          padding: 6rem clamp(2rem, 5vw, 6rem) 4rem;
          overflow: hidden;
        }

        .hero__glow {
          position: absolute;
          inset: -30% -40% auto auto;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(66, 159, 255, 0.35), rgba(29, 78, 216, 0));
          filter: blur(30px);
          pointer-events: none;
        }

        .hero__content {
          position: relative;
          max-width: 820px;
          z-index: 1;
        }

        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #cbd5f5;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          line-height: 1.1;
          color: #ffffff;
        }

        .hero__subtitle {
          margin-top: 1.5rem;
          max-width: 620px;
          line-height: 1.6;
          color: rgba(229, 231, 235, 0.86);
          font-size: 1.05rem;
        }

        .search {
          margin-top: 2.5rem;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 24px;
          padding: 1.4rem 1.6rem 1rem;
          backdrop-filter: blur(18px);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.35);
        }

        .search input {
          width: 100%;
          border: none;
          background: transparent;
          color: #f9fafb;
          font-size: 1.1rem;
          padding: 0.4rem 0;
          outline: none;
        }

        .search input::placeholder {
          color: rgba(148, 163, 184, 0.9);
        }

        .search__hint {
          margin: 0.6rem 0 0;
          color: rgba(148, 163, 184, 0.9);
          font-size: 0.9rem;
        }

        .highlights {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          padding: 0 clamp(2rem, 5vw, 6rem) 3rem;
        }

        .highlights__card {
          background: linear-gradient(145deg, rgba(17, 25, 40, 0.85), rgba(15, 23, 42, 0.65));
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 20px;
          padding: 1.8rem;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .highlights__card h2 {
          margin: 0 0 0.6rem;
          font-size: 1.2rem;
          color: #e0e7ff;
        }

        .highlights__card p {
          margin: 0;
          line-height: 1.6;
          color: rgba(203, 213, 225, 0.9);
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
          gap: 2.5rem;
          padding: 0 clamp(2rem, 5vw, 6rem);
        }

        .results {
          background: rgba(13, 19, 33, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 24px;
          padding: 1.8rem;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.35);
          backdrop-filter: blur(16px);
          max-height: calc(100vh - 6rem);
          position: sticky;
          top: 3rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .results__header h2 {
          margin: 0;
          font-size: 1.1rem;
          color: #e2e8f0;
        }

        .results__legend {
          margin: 0.4rem 0 1.2rem;
          color: rgba(148, 163, 184, 0.9);
          font-size: 0.85rem;
        }

        .results__list {
          overflow-y: auto;
          padding-right: 0.6rem;
          display: grid;
          gap: 1rem;
        }

        .results__list::-webkit-scrollbar {
          width: 6px;
        }

        .results__list::-webkit-scrollbar-thumb {
          background: rgba(96, 165, 250, 0.35);
          border-radius: 999px;
        }

        .results__item {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid transparent;
          border-radius: 18px;
          padding: 1.2rem 1.4rem;
          text-align: left;
          color: inherit;
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .results__item:hover {
          border-color: rgba(96, 165, 250, 0.35);
          transform: translateY(-2px);
        }

        .results__item--active {
          border-color: rgba(96, 165, 250, 0.75);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
        }

        .results__item h3 {
          margin: 0.3rem 0 0.6rem;
          font-size: 1.05rem;
          color: #e0e7ff;
        }

        .results__item p {
          margin: 0 0 0.8rem;
          color: rgba(203, 213, 225, 0.85);
          line-height: 1.6;
        }

        .results__meta {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          gap: 1.2rem;
          font-size: 0.85rem;
          color: rgba(148, 163, 184, 0.9);
        }

        .results__meta strong {
          display: block;
          color: rgba(226, 232, 240, 0.95);
          font-weight: 600;
        }

        .results__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.2rem 0.8rem;
          background: rgba(37, 99, 235, 0.2);
          border-radius: 999px;
          color: #93c5fd;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .results__item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .results__empty {
          margin: 0;
          color: rgba(148, 163, 184, 0.9);
          font-size: 0.95rem;
        }

        .recipe {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .recipe__header {
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 24px;
          padding: 2rem 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .recipe__badge {
          display: inline-flex;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.25);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.75rem;
          color: #bfdbfe;
        }

        .recipe__header h2 {
          margin: 0.8rem 0 0.6rem;
          font-size: clamp(2rem, 4vw, 2.6rem);
          color: #f9fafb;
        }

        .recipe__summary {
          margin: 0;
          max-width: 680px;
          line-height: 1.6;
          color: rgba(203, 213, 225, 0.9);
        }

        .recipe__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .meta__label {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(148, 163, 184, 0.9);
        }

        .meta__value {
          font-size: 1.2rem;
          color: #f1f5f9;
        }

        .recipe__servings {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 18px;
          padding: 1rem 1.4rem;
          font-size: 0.95rem;
          color: rgba(203, 213, 225, 0.9);
        }

        .recipe__servings label {
          font-weight: 600;
          color: #e2e8f0;
        }

        .recipe__servings input {
          width: 80px;
          padding: 0.5rem 0.7rem;
          border-radius: 12px;
          border: 1px solid rgba(96, 165, 250, 0.4);
          background: rgba(15, 23, 42, 0.9);
          color: #f1f5f9;
          font-size: 1rem;
        }

        .recipe__grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .card {
          background: rgba(13, 19, 33, 0.8);
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(96, 165, 250, 0.2);
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.35);
        }

        .card h3 {
          margin: 0 0 1rem;
          font-size: 1.3rem;
          color: #f8fafc;
        }

        .card h4 {
          margin: 1.2rem 0 0.6rem;
          font-size: 1rem;
          color: #cbd5f5;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .card ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.8rem;
        }

        .card__group:first-of-type h4 {
          margin-top: 0;
        }

        .card__quantity {
          display: block;
          font-weight: 600;
          color: #93c5fd;
          font-size: 0.95rem;
        }

        .card__equipment li {
          position: relative;
          padding-left: 1.2rem;
        }

        .card__equipment li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.45rem;
          width: 0.5rem;
          height: 0.5rem;
          background: rgba(96, 165, 250, 0.6);
          border-radius: 999px;
        }

        .card--steps ol {
          counter-reset: steps;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 1.4rem;
          list-style: none;
        }

        .card--steps li {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          align-items: start;
        }

        .step__number {
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #bfdbfe;
          font-size: 1.1rem;
        }

        .card--steps h4 {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          color: #e2e8f0;
        }

        .card--steps p {
          margin: 0;
          line-height: 1.65;
          color: rgba(203, 213, 225, 0.9);
        }

        @media (max-width: 1080px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .results {
            position: static;
            max-height: none;
          }
        }

        @media (max-width: 720px) {
          .hero {
            padding-top: 5rem;
          }

          .highlights {
            padding-bottom: 2rem;
          }

          .recipe__header,
          .card,
          .results {
            padding: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}
