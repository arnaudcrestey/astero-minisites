import { useMemo, useState } from "react";
import Head from "next/head";
import {
  chefProfiles,
  recipes,
  searchRecipes,
  scaleIngredients,
  formatQuantity,
} from "../utils/recipes";

const highlights = [
  {
    label: "Protocoles",
    value: "100 % pros",
    description: "Pétrissage, fermentation, cuisson détaillés au gramme près.",
  },
  {
    label: "Compatibilité",
    value: "Robots & fours",
    description: "Paramètres KitchenAid, Kenwood, fours pro et domestiques.",
  },
  {
    label: "Guides",
    value: "Chefs experts",
    description: "Conseils de boulangers, pâtissiers et pizzaiolos titrés.",
  },
];

function buildSuggestions(activeId, matches = []) {
  const suggestedIds = new Set();
  const ordered = [];

  matches.forEach((match) => {
    if (match.recipe.id !== activeId && !suggestedIds.has(match.recipe.id)) {
      ordered.push(match.recipe);
      suggestedIds.add(match.recipe.id);
    }
  });

  recipes.forEach((recipe) => {
    if (recipe.id !== activeId && !suggestedIds.has(recipe.id)) {
      ordered.push(recipe);
      suggestedIds.add(recipe.id);
    }
  });

  return ordered.slice(0, 3);
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [portions, setPortions] = useState("");
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [scaledIngredients, setScaledIngredients] = useState([]);
  const [error, setError] = useState("");
  const [matches, setMatches] = useState([]);

  const scalingInfo = useMemo(() => {
    if (!activeRecipe || !activeRecipe.targetPortions) {
      return null;
    }
    const factor = activeRecipe.targetPortions / activeRecipe.basePortions;
    return {
      factor,
      formattedFactor: factor % 1 === 0 ? factor.toFixed(0) : factor.toFixed(2),
    };
  }, [activeRecipe]);

  const suggestions = useMemo(() => {
    return buildSuggestions(activeRecipe?.id, matches);
  }, [activeRecipe?.id, matches]);

  const handleSearch = (event) => {
    event.preventDefault();
    setError("");

    if (!query.trim()) {
      setError("Indiquez le produit à réaliser (ex. pâte pizza, brioche, croissant).");
      return;
    }

    if (!portions.trim()) {
      setError("Précisez le nombre de portions/pâtons pour adapter les grammages.");
      return;
    }

    const normalizedPortions = Number.parseFloat(portions.replace(",", "."));
    if (!Number.isFinite(normalizedPortions) || normalizedPortions <= 0) {
      setError("Le nombre de portions doit être un chiffre positif.");
      return;
    }

    const found = searchRecipes(query);
    if (found.length === 0) {
      setError("Aucune recette correspondante. Essayez \"pizza\", \"brioche\" ou \"croissant\".");
      return;
    }

    const selected = found[0].recipe;
    const scaled = scaleIngredients(selected, normalizedPortions);
    setActiveRecipe({
      ...selected,
      targetPortions: normalizedPortions,
    });
    setScaledIngredients(scaled);
    setMatches(found);
  };

  const applyRecipe = (recipe) => {
    setError("");

    if (!portions.trim()) {
      setError("Renseignez d'abord le nombre de portions pour adapter la recette.");
      return;
    }

    const normalizedPortions = Number.parseFloat(portions.replace(",", "."));
    if (!Number.isFinite(normalizedPortions) || normalizedPortions <= 0) {
      setError("Le nombre de portions doit être un chiffre positif.");
      return;
    }

    const scaled = scaleIngredients(recipe, normalizedPortions);
    setActiveRecipe({
      ...recipe,
      targetPortions: normalizedPortions,
    });
    setScaledIngredients(scaled);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="app-shell">
      <Head>
        <title>Atelier Pro | Assistant Boulanger, Pâtissier & Pizzaïolo</title>
      </Head>
      <header className="hero">
        <div className="page-container">
          <div className="navbar">
            <div className="brand">
              <div className="brand-icon">AP</div>
              <div>
                <div className="badge-pro">Cellule Chef 5/5</div>
                <h1>Atelier Pro Boulangerie · Pâtisserie · Pizza</h1>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <h2 className="hero-title">
              Votre chef virtuel pour des recettes 100 % professionnelles, calibrées au gramme près.
            </h2>
            <p className="hero-subtitle">
              Décrivez la création souhaitée et indiquez le nombre de portions. Nous vous livrons une fiche recette
              complète : ingrédients pesés, paramètres de robot pâtissier, fermentations, cuisson, astuces de chefs et
              conservation.
            </p>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <div key={item.label} className="highlight-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p className="helper-text">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="search-panel">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-grid">
                  <input
                    type="text"
                    placeholder="Produit recherché (ex. pâte pizza, croissant beurre, brioche)"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    aria-label="Produit à réaliser"
                  />
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    placeholder="Nombre de portions / pâtons"
                    value={portions}
                    onChange={(event) => setPortions(event.target.value)}
                    aria-label="Nombre de portions"
                  />
                  <button type="submit" className="search-button" aria-label="Lancer la recherche">
                    ▶
                  </button>
                </div>
              </form>
              <p className="helper-text">
                Exemple : tapez « recette pâte pizza » puis précisez le nombre de pâtons souhaités pour obtenir une fiche
                prête à imprimer.
              </p>
              {error && <div className="error-banner">{error}</div>}
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="page-container">
          {activeRecipe && (
            <section className="recipe-section">
              <div className="recipe-card">
                <div className="recipe-header">
                  <div className="recipe-header-top">
                    <div className="recipe-title">
                      <div className="badge-pro">Fiche technique validée chef</div>
                      <h2>{activeRecipe.title}</h2>
                      <p>{activeRecipe.description}</p>
                    </div>
                    <div className="recipe-summary">
                      <div className="summary-card">
                        <span>Portions demandées</span>
                        <strong>{activeRecipe.targetPortions}</strong>
                        <p className="helper-text">Base fiche : {activeRecipe.basePortions} portions</p>
                      </div>
                      <div className="summary-card">
                        <span>Rendement</span>
                        <strong>{activeRecipe.yieldDescription}</strong>
                        <p className="helper-text">Difficulté : {activeRecipe.difficulty}</p>
                      </div>
                      <div className="summary-card">
                        <span>Timing</span>
                        <strong>{activeRecipe.readyIn}</strong>
                        <p className="helper-text">Scaling × {scalingInfo?.formattedFactor ?? "-"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="recipe-metrics">
                    {activeRecipe.metrics?.map((metric) => (
                      <div key={metric.label} className="metric-chip">
                        {metric.label} · {metric.value}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="button" className="print-button" onClick={handlePrint}>
                  Imprimer la fiche recette
                </button>

                <div>
                  <h3 className="section-title">Matériel requis</h3>
                  <ul className="equipment-list">
                    {activeRecipe.equipment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="section-title">Ingrédients pesés</h3>
                  <div className="ingredients-grid">
                    {scaledIngredients.map((section) => (
                      <div key={section.section} className="ingredients-card">
                        <h3>{section.section}</h3>
                        <ul className="ingredients-list">
                          {section.items.map((item, index) => (
                            <li key={`${section.section}-${item.item}-${index}`}>
                              <span className="item-label">
                                {item.item}
                                {item.notes ? <br /> : null}
                                {item.notes ? <small className="helper-text">{item.notes}</small> : null}
                              </span>
                              <span className="item-quantity">
                                {formatQuantity(item.quantity)} {item.unit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="section-title">Étapes maîtrisées</h3>
                  <div className="steps-timeline">
                    {activeRecipe.steps.map((step, index) => (
                      <div key={`${step.title}-${index}`} className="step-card">
                        <div className="step-header">
                          <h4 className="step-title">
                            {index + 1}. {step.title}
                          </h4>
                          <div className="step-meta">
                            {step.duration && <span>⏱ {step.duration}</span>}
                            {step.temperature && <span>🌡 {step.temperature}</span>}
                            {step.speed && <span>⚙️ {step.speed}</span>}
                          </div>
                        </div>
                        <ol className="step-list">
                          {step.instructions.map((instruction, idx) => (
                            <li key={`${step.title}-instruction-${idx}`}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="section-title">Conseils de chef</h3>
                  <ul className="tips-list chef-tips">
                    {activeRecipe.chefTips.map((tip, index) => (
                      <li key={`${activeRecipe.id}-tip-${index}`}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="section-title">Conservation & service</h3>
                  <ul className="conservation-list">
                    {activeRecipe.conservation.map((mode) => (
                      <li key={`${activeRecipe.id}-${mode.method}`}>
                        <strong>{mode.method} — {mode.duration}</strong>
                        <span>{mode.instructions}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="section-title">Autres recettes signatures</h3>
                <div className="secondary-recipes">
                  {suggestions.map((recipe) => (
                    <div key={recipe.id} className="secondary-card" onClick={() => applyRecipe(recipe)}>
                      <h4>{recipe.title}</h4>
                      <p>{recipe.subtitle}</p>
                      <span className="helper-text">Base : {recipe.basePortions} portions · {recipe.readyIn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="recipe-section">
            <div>
              <h3 className="section-title">Équipe d'experts</h3>
              <p className="helper-text">
                Chaque fiche est validée par nos chefs partenaires : boulanger MOF, cheffe pâtissière consultante et
                champion du monde pizza napolitaine.
              </p>
              <div className="profile-grid">
                {chefProfiles.map((profile) => (
                  <div key={profile.name} className="profile-card">
                    <h4>{profile.name}</h4>
                    <span>{profile.title}</span>
                    <p>{profile.expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="page-container">
          © {new Date().getFullYear()} Atelier Pro — Recettes premium prêtes à imprimer. Optimisé pour tablettes en
          laboratoire ou à la maison.
        </div>
      </footer>
    </div>
  );
}
