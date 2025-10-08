export const chefProfiles = [
  {
    name: "Matthieu Roussel",
    title: "Chef Boulanger MOF 2015",
    expertise:
      "Spécialiste des fermentations longues et des hydratations élevées pour une boulangerie d'exception.",
  },
  {
    name: "Aurélie Fontana",
    title: "Cheffe Pâtissière & Consultante",
    expertise:
      "Connue pour ses dossiers techniques ultra-structurés et ses finitions impeccables en boutique premium.",
  },
  {
    name: "Luca Romano",
    title: "Pizzaiolo Napolitain Champion du Monde 2022",
    expertise:
      "Maîtrise des cuissons haute température et des protocoles napolitains traditionnels revisités pour un service rapide.",
  },
];

export const recipes = [
  {
    id: "pizza-napolitaine-24h",
    title: "Pâte à Pizza Napolitaine 24h",
    subtitle: "Méthode directe avec contrôle précis des fermentations",
    basePortions: 4,
    yieldDescription: "4 disques de 250 g",
    difficulty: "Intermédiaire",
    readyIn: "24 h (incluant maturations)",
    keywords: [
      "pizza",
      "pâte",
      "napolitaine",
      "fermentation",
      "poolish",
      "napo",
      "levure fraîche",
      "longue fermentation",
    ],
    description:
      "Une pâte haut de gamme avec hydratation maîtrisée, corniche alvéolée et cuisson express adaptée aux fours domestiques et professionnels.",
    metrics: [
      { label: "Hydratation", value: "63%" },
      { label: "Pointage", value: "2 h à 24 °C" },
      { label: "Maturation", value: "18 h à 4 °C" },
      { label: "Cuisson", value: "420 °C · 90 s" },
    ],
    equipment: [
      "Robot pâtissier avec crochet (KitchenAid, Kenwood, etc.)",
      "Bac de fermentation huilé avec couvercle",
      "Balança de précision (1 g)",
      "Raclette souple et corne de boulanger",
      "Thermomètre laser pour four",
      "Pelle à pizza perforée",
    ],
    ingredients: [
      {
        section: "Pâte",
        items: [
          {
            quantity: 620,
            unit: "g",
            item: "Farine T00 (W300)",
            notes: "Température 18 °C, force moyenne/haute",
          },
          { quantity: 390, unit: "g", item: "Eau filtrée à 15 °C" },
          { quantity: 18, unit: "g", item: "Sel fin de Guérande" },
          { quantity: 4, unit: "g", item: "Levure fraîche de boulanger" },
          { quantity: 10, unit: "g", item: "Huile d'olive extra vierge" },
        ],
      },
      {
        section: "Finition",
        items: [
          { quantity: null, unit: "", item: "Semoule de blé dur pour l'enfournement" },
          { quantity: null, unit: "", item: "Garnitures premium selon saison" },
        ],
      },
    ],
    steps: [
      {
        title: "Mise en place & autolyse",
        duration: "30 min",
        speed: "Robot vitesse 1",
        temperature: "Cuve à 22 °C",
        instructions: [
          "Peser tous les ingrédients. Placer la farine et 90 % de l'eau froide dans la cuve du robot.",
          "Pétrir 3 min vitesse 1 juste pour amalgamer. Couvrir et laisser autolyser 30 min.",
        ],
      },
      {
        title: "Pétrissage professionnel",
        duration: "8 à 10 min",
        speed: "Vitesse 2",
        temperature: "Sortie de pâte 23-24 °C",
        instructions: [
          "Dissoudre le sel dans l'eau restante, couler en filet sur la pâte tout en pétrissant.",
          "Ajouter la levure émiettée à mi-parcours puis l'huile d'olive en fin de pétrissage pour lisser.",
          "Vérifier le voile de gluten : la pâte doit être soyeuse et élastique sans surchauffer.",
        ],
      },
      {
        title: "Pointage",
        duration: "2 h",
        speed: "Repos",
        temperature: "24 °C",
        instructions: [
          "Bouler serré, déposer dans un bac légèrement huilé, couvrir hermétiquement.",
          "Effectuer un rabat doux après 60 min pour renforcer la structure.",
        ],
      },
      {
        title: "Maturation au froid",
        duration: "16 à 18 h",
        speed: "Repos",
        temperature: "4 °C",
        instructions: [
          "Diviser en pâtons de 250 g, bouler sans serrer, huiler légèrement et ranger en caisses.",
          "Fermer et laisser maturer au froid pour développer les arômes lactiques signature.",
        ],
      },
      {
        title: "Remise à température & façonnage",
        duration: "2 h",
        speed: "Manuel",
        temperature: "23 °C",
        instructions: [
          "Sortir les pâtons 2 h avant le service, laisser reprendre 23-24 °C.",
          "Fariner le plan de travail, presser le centre du pâton du bout des doigts en conservant la corniche.",
          "Étendre avec les avant-bras en tournant, éviter le rouleau pour préserver les alvéoles.",
        ],
      },
      {
        title: "Cuisson",
        duration: "90 s",
        speed: "Four à pizza",
        temperature: "420 °C pierre, 450 °C voûte",
        instructions: [
          "Enfourner sur pierre préchauffée, tourner la pizza toutes les 20 s pour une coloration uniforme.",
          "Terminer flamme douce pour parfaire la corniche. Dressage immédiat sur assiette chaude.",
        ],
      },
    ],
    chefTips: [
      "Pour une version poolish, remplacez 20 % de l'eau par un levain liquide mûr et réduisez la levure à 1 g.",
      "Ajouter 1 % de miel dans l'eau pour booster la coloration si vous utilisez un four domestique à 300 °C.",
      "Toujours contrôler la température cœur pâte après pétrissage : au-delà de 24 °C, prévoir un passage en cellule froide.",
    ],
    conservation: [
      {
        method: "Pâtons au froid",
        duration: "48 h",
        instructions:
          "Conserver les pâtons maturés au réfrigérateur à 4 °C dans des boîtes hermétiques légèrement huilées.",
      },
      {
        method: "Congélation",
        duration: "3 mois",
        instructions:
          "Congeler les pâtons juste après le boulage, filmés séparément. Décongélation lente 12 h au réfrigérateur, puis 2 h à température.",
      },
      {
        method: "Après cuisson",
        duration: "6 h",
        instructions: "Réchauffer 2 min à 300 °C sur pierre pour retrouver croustillant et moelleux.",
      },
    ],
  },
  {
    id: "brioche-nantaise",
    title: "Brioche Nantaise Beurre AOP",
    subtitle: "Texture filante et riche, idéale petit déjeuner haut de gamme",
    basePortions: 2,
    yieldDescription: "2 brioches moules 22 cm",
    difficulty: "Avancé",
    readyIn: "18 h avec fermentation lente",
    keywords: [
      "brioche",
      "pâtisserie",
      "beurre",
      "levure",
      "pâte levée",
      "viennoiserie",
    ],
    description:
      "Une brioche professionnelle ultra filante avec beurre AOP et fermentation lente pour une mâche fondante.",
    metrics: [
      { label: "Beurre", value: "50 %" },
      { label: "Temps de pétrissage", value: "18 min" },
      { label: "Pousse", value: "3 h + nuit" },
      { label: "Cuisson", value: "170 °C · 25 min" },
    ],
    equipment: [
      "Robot pâtissier crochet + feuille",
      "Thermomètre sonde",
      "Moules à brioche ou cadres 22 cm",
      "Cellule ou réfrigérateur 4 °C",
      "Dorerie + pinceau",
    ],
    ingredients: [
      {
        section: "Pâte à brioche",
        items: [
          { quantity: 500, unit: "g", item: "Farine de gruau T45" },
          { quantity: 10, unit: "g", item: "Sel fin" },
          { quantity: 60, unit: "g", item: "Sucre semoule" },
          { quantity: 20, unit: "g", item: "Levure fraîche" },
          { quantity: 220, unit: "g", item: "Œufs entiers (≈ 4)" },
          { quantity: 40, unit: "g", item: "Lait entier 25 °C" },
          { quantity: 250, unit: "g", item: "Beurre AOP pommade" },
        ],
      },
      {
        section: "Finition",
        items: [
          { quantity: 1, unit: "", item: "Œuf entier pour la dorure" },
          { quantity: 1, unit: "pincée", item: "Sel fin" },
          { quantity: null, unit: "", item: "Sucre perlé, optionnel" },
        ],
      },
    ],
    steps: [
      {
        title: "Fraser & pétrissage",
        duration: "18 min",
        speed: "Feuille vitesse 1 puis crochet vitesse 2",
        temperature: "Sortie pâte 24 °C",
        instructions: [
          "Verser farine, sel, sucre, levure émiettée (séparée du sel), œufs et lait dans la cuve.",
          "Fraser 4 min vitesse 1 avec la feuille jusqu'à obtenir une pâte homogène.",
          "Installer le crochet, pétrir 6 min vitesse 2 pour développer le réseau glutineux.",
        ],
      },
      {
        title: "Incorporation du beurre",
        duration: "8 min",
        speed: "Vitesse 2",
        temperature: "Pâte 24-25 °C",
        instructions: [
          "Ajouter le beurre pommade en 4 fois, attendre absorption avant chaque ajout.",
          "Gratter les parois, terminer par 2 min vitesse 4 pour lisser. Vérifier le voile de gluten.",
        ],
      },
      {
        title: "Pointage & blocage",
        duration: "3 h + nuit",
        speed: "Repos",
        temperature: "26 °C puis 4 °C",
        instructions: [
          "Laisser pointer 90 min à 26 °C en donnant un rabat toutes les 30 min.",
          "Filmer au contact, bloquer au froid 1 h puis laisser au réfrigérateur toute la nuit.",
        ],
      },
      {
        title: "Façonnage & apprêt",
        duration: "3 h",
        speed: "Manuel",
        temperature: "27 °C",
        instructions: [
          "Peser des pâtons de 80 g, bouler serré puis disposer 6 boules par moule beurré.",
          "Laisser apprêter sous cloche 2 h 30 à 27 °C, la pâte doit quadrupler.",
        ],
      },
      {
        title: "Cuisson",
        duration: "25 min",
        speed: "Four ventilé",
        temperature: "170 °C",
        instructions: [
          "Dorer deux fois à 30 min d'intervalle, enfourner sur grille basse.",
          "Cuire jusqu'à 92 °C à cœur. Démouler sur grille, laisser tiédir avant de trancher.",
        ],
      },
    ],
    chefTips: [
      "Pour une version orange blossom, infuser le lait avec 1 gousse de vanille et 5 g d'eau de fleur d'oranger.",
      "Ajouter 30 g de levain liquide au pétrissage pour un profil aromatique plus complexe.",
      "Surveiller la température de pâte : au-delà de 26 °C, refroidir la cuve avec une poche froide.",
    ],
    conservation: [
      {
        method: "Température ambiante",
        duration: "48 h",
        instructions: "Emballer dans un linge propre puis dans une boîte hermétique pour préserver l'humidité.",
      },
      {
        method: "Congélation",
        duration: "1 mois",
        instructions:
          "Filmer serré en portions, congeler. Réchauffer 8 min à 150 °C puis laisser revenir à température.",
      },
      {
        method: "Pâte crue",
        duration: "24 h",
        instructions: "Conserver la pâte façonnée au réfrigérateur filmée. Laisser reprendre 2 h à 27 °C avant cuisson.",
      },
    ],
  },
  {
    id: "croissant-tradition",
    title: "Croissant Tradition Beurre Sec",
    subtitle: "Feuilletage inversé avec roulage au laminoir",
    basePortions: 12,
    yieldDescription: "12 croissants de 75 g",
    difficulty: "Expert",
    readyIn: "48 h",
    keywords: [
      "croissant",
      "viennoiserie",
      "tourage",
      "feuilletage",
      "boulangerie",
      "beurre sec",
    ],
    description:
      "Un croissant professionnel avec feuilletage inversé, alvéoles régulières et croustillant longue durée.",
    metrics: [
      { label: "Beurre", value: "50 %" },
      { label: "Tours", value: "1 double + 1 simple" },
      { label: "Apprêt", value: "2 h à 26 °C" },
      { label: "Cuisson", value: "190 °C · 17 min" },
    ],
    equipment: [
      "Laminoir ou rouleau inox lourd",
      "Thermomètre infrarouge",
      "Plaques perforées + tapis Silpain",
      "Cellule de pousse contrôlée",
      "Règle inox et couteau scie",
    ],
    ingredients: [
      {
        section: "Détrempe",
        items: [
          { quantity: 500, unit: "g", item: "Farine T45 tradition" },
          { quantity: 12, unit: "g", item: "Sel fin" },
          { quantity: 60, unit: "g", item: "Sucre" },
          { quantity: 20, unit: "g", item: "Levure fraîche" },
          { quantity: 50, unit: "g", item: "Beurre fondu" },
          { quantity: 250, unit: "g", item: "Eau froide" },
          { quantity: 50, unit: "g", item: "Lait entier froid" },
        ],
      },
      {
        section: "Beurre de tourage",
        items: [
          { quantity: 300, unit: "g", item: "Beurre sec 84 % MG" },
        ],
      },
      {
        section: "Dorure",
        items: [
          { quantity: 1, unit: "", item: "Œuf entier + 1 jaune" },
          { quantity: 1, unit: "pincée", item: "Sel fin" },
        ],
      },
    ],
    steps: [
      {
        title: "Pétrissage de la détrempe",
        duration: "6 min",
        speed: "Crochet vitesse 1 puis 2",
        temperature: "Sortie pâte 20 °C",
        instructions: [
          "Fraser farine, sel, sucre, levure, liquides et beurre fondu 4 min vitesse 1.",
          "Pétrir 2 min vitesse 2, filmer et laisser reposer 30 min au froid.",
        ],
      },
      {
        title: "Tourage inversé",
        duration: "2 h",
        speed: "Laminoir",
        temperature: "Beurre 12 °C / pâte 4 °C",
        instructions: [
          "Étaler le beurre entre deux feuilles de papier sulfurisé en carré de 25 cm.",
          "Envelopper la détrempe dans le beurre (méthode inversée), abaisser à 8 mm.",
          "Réaliser un tour double, reposer 30 min à 4 °C puis un tour simple.",
        ],
      },
      {
        title: "Détente & façonnage",
        duration: "1 h",
        speed: "Manuel",
        temperature: "20 °C",
        instructions: [
          "Abaisser à 3,5 mm, découper triangles de 26 cm base, incision de 1,5 cm.",
          "Roulage serré sans écraser les couches, pointes dessous sur Silpain.",
        ],
      },
      {
        title: "Apprêt",
        duration: "2 h",
        speed: "Cellule 26 °C / 75 % HR",
        temperature: "26 °C",
        instructions: [
          "Humidifier légèrement la cellule pour éviter le croûtage.",
          "Arrêter l'apprêt quand le croissant tremble légèrement au mouvement.",
        ],
      },
      {
        title: "Cuisson",
        duration: "17 min",
        speed: "Four ventilé",
        temperature: "190 °C",
        instructions: [
          "Dorer une fois, enfourner à 190 °C chaleur tournante.",
          "Défourner à 204 °C à cœur, laisser ressuyer sur grille 30 min.",
        ],
      },
    ],
    chefTips: [
      "Stabiliser le beurre à 12 °C pour un contraste optimal avec la pâte froide.",
      "Utiliser une lame bien aiguisée pour une coupe nette sans écraser le feuilletage.",
      "Vaporiser un léger nuage d'eau avant d'enfourner pour booster le développement.",
    ],
    conservation: [
      {
        method: "Température ambiante",
        duration: "12 h",
        instructions: "Conserver sur grille, re-cristalliser 5 min à 170 °C avant service.",
      },
      {
        method: "Congélation cru",
        duration: "6 semaines",
        instructions:
          "Congeler les croissants après apprêt partiel (50 %), décongeler 12 h à 4 °C puis terminer l'apprêt.",
      },
      {
        method: "Réfrigération",
        duration: "24 h",
        instructions: "Stocker cuits, filmés. Passer 4 min à 180 °C pour raviver le croustillant.",
      },
    ],
  },
];

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function searchRecipes(query) {
  const cleanedQuery = normalize(query.trim());
  const queryTokens = cleanedQuery.split(/[^a-z0-9]+/).filter(Boolean);

  return recipes
    .map((recipe) => {
      const haystack = normalize(
        [recipe.title, recipe.subtitle, recipe.description, recipe.keywords.join(" ")].join(" ")
      );

      let score = 0;
      queryTokens.forEach((token) => {
        if (!token) return;
        if (haystack.includes(token)) {
          score += 10;
        }
        if (normalize(recipe.title).includes(token)) {
          score += 5;
        }
      });

      if (normalize(recipe.title) === cleanedQuery) {
        score += 25;
      }

      return { recipe, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
}

export function scaleIngredients(recipe, targetPortions) {
  const ratio = targetPortions / recipe.basePortions;
  return recipe.ingredients.map((section) => ({
    ...section,
    items: section.items.map((item) => {
      if (item.quantity === null || typeof item.quantity === "undefined") {
        return { ...item };
      }

      const scaledQuantity = item.quantity * ratio;
      const rounded = Math.round((scaledQuantity + Number.EPSILON) * 10) / 10;
      return {
        ...item,
        quantity: rounded,
      };
    }),
  }));
}

export function formatQuantity(quantity) {
  if (quantity === null || typeof quantity === "undefined") {
    return "-";
  }

  if (Number.isInteger(quantity)) {
    return quantity.toString();
  }

  return quantity.toFixed(1).replace(/\.0$/, "");
}
