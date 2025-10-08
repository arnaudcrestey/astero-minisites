const recipes = [
  {
    id: 'pizza-dough-classic',
    name: 'Pâte à Pizza Napolitaine Longue Fermentation',
    baseServings: 4,
    preparationTime: '25 min (hors fermentation)',
    totalTime: '48 h avec maturation',
    difficulty: 'Intermédiaire',
    summary:
      "Une pâte légère, alvéolée et digeste, inspirée des laboratoires napolitains avec maturation à froid.",
    keywords: [
      'recette pate pizza',
      'pizza napolitaine',
      'pâte à pizza',
      'pizza',
    ],
    equipment: [
      'Robot pâtissier avec crochet pétrisseur (KitchenAid, Kenwood, etc.)',
      'Balance de précision',
      'Grille ou bac de fermentation',
      'Spatule coupe-pâte',
      'Pierre à pizza ou plaque en acier',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de blé T00 (W280-300)', quantity: 640, unit: 'g' },
          { name: 'Eau filtrée à 20 °C', quantity: 415, unit: 'g' },
          { name: 'Sel fin', quantity: 18, unit: 'g' },
          { name: 'Levure fraîche de boulanger', quantity: 2, unit: 'g' },
          { name: 'Huile d’olive extra vierge (facultatif)', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Préparation du plan de travail',
        items: [{ name: 'Semoule de blé dur fine ou farine', quantity: 30, unit: 'g' }],
      },
    ],
    steps: [
      {
        title: 'Autolyse — 20 minutes',
        description:
          "Dans la cuve du robot, verser 90 % de l'eau et toute la farine. Mélanger 2 min en vitesse 1 pour hydrater, couvrir et laisser reposer 20 min afin de relâcher le gluten.",
      },
      {
        title: 'Pétrissage — 12 minutes',
        description:
          "Ajouter le sel dissous dans le reste de l'eau, puis la levure émiettée. Pétrir 6 min en vitesse 1, puis 6 min en vitesse 2 jusqu'à ce que la pâte soit lisse et à 24-25 °C. Incorporer l'huile en fin de pétrissage.",
      },
      {
        title: 'Pointage et rabats',
        description:
          "Verser la pâte sur le plan de travail légèrement huilé, réaliser deux tours de rabats toutes les 30 min pendant 1 h 30. Puis placer en bac huilé, filmer et laisser pousser 1 h à 22 °C.",
      },
      {
        title: 'Maturation à froid',
        description:
          'Diviser en pâtons de 250 g, bouler délicatement et disposer dans des boîtes légèrement farinées. Maturer 24 à 48 h au réfrigérateur à 4 °C pour développer les arômes.',
      },
      {
        title: 'Température et détente',
        description:
          'Sortir les pâtons 2 h avant cuisson. Laisser revenir à 20-22 °C pour détendre le réseau glutineux.',
      },
      {
        title: 'Façonnage',
        description:
          'Fariner généreusement le plan de travail avec la semoule. Étaler du centre vers l’extérieur en conservant une corniche épaisse. Éviter le rouleau pour ne pas chasser les gaz.',
      },
      {
        title: 'Garnissage et cuisson',
        description:
          "Garnir sur pelle puis enfourner sur pierre préchauffée à 300-320 °C (ou 250 °C chaleur maximale). Cuire 90 s à 2 min sur four à bois/électrique haute température, ou 6-7 min sur four domestique avec grill en fin de cuisson.",
      },
    ],
    tips: [
      'Utiliser une eau entre 18 et 20 °C pour maîtriser la température finale de pâte (objectif : 24-25 °C).',
      'Surveiller la température du pétrin : si la pâte chauffe, faire une pause de 5 min.',
      'Pour une version directe (sans maturation longue), augmenter la levure à 8 g et réduire la fermentation froide à 4 h.',
    ],
    storage:
      'Les pâtons se conservent 48 h au frais. Après cuisson, les pizzas peuvent être réchauffées 2 min au four à 200 °C. Pâtons crus : congélation possible 3 semaines après 12 h de maturation.',
  },
  {
    id: 'baguette-tradition',
    name: 'Baguette Tradition Française',
    baseServings: 4,
    preparationTime: '30 min (hors fermentation)',
    totalTime: '20 h',
    difficulty: 'Intermédiaire',
    summary:
      'Baguette à poolish, croûte craquante et mie crème, respectant le cahier des charges tradition française.',
    keywords: ['pain', 'baguette', 'tradition', 'poolish'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Banneton ou couches farinées',
      'Lame de grignage',
      'Plaque perforée',
      'Vaporisateur ou buée',
    ],
    ingredients: [
      {
        section: 'Poolish (12 h avant)',
        items: [
          { name: 'Farine de tradition française T65', quantity: 250, unit: 'g' },
          { name: 'Eau à 20 °C', quantity: 250, unit: 'g' },
          { name: 'Levure fraîche', quantity: 1, unit: 'g' },
        ],
      },
      {
        section: 'Pâte finale',
        items: [
          { name: 'Poolish', quantity: 501, unit: 'g' },
          { name: 'Farine de tradition française T65', quantity: 250, unit: 'g' },
          { name: 'Farine de blé T55', quantity: 250, unit: 'g' },
          { name: 'Eau à 22 °C', quantity: 340, unit: 'g' },
          { name: 'Sel gris de Guérande', quantity: 18, unit: 'g' },
          { name: 'Levure fraîche', quantity: 5, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Frasage',
        description:
          'Mélanger au crochet le poolish, les farines, l’eau et la levure 4 min en vitesse 1 jusqu’à homogénéité.',
      },
      {
        title: 'Pétrissage',
        description:
          'Ajouter le sel, pétrir 3 min vitesse 1 puis 4 min vitesse 2. Température de pâte visée : 24 °C.',
      },
      {
        title: 'Pointage',
        description:
          'Laisser pointer 2 h à 24 °C avec deux rabats toutes les 45 min. Préformer, couvrir et placer 16 h au froid à 4 °C.',
      },
      {
        title: 'Division et détente',
        description:
          'Diviser en pâtons de 350 g, bouler, couvrir 20 min.',
      },
      {
        title: 'Façonnage baguette',
        description:
          'Allonger délicatement en baguettes de 50 cm, déposer dans les couches farinées couture vers le haut. Détente 40 min à 26 °C.',
      },
      {
        title: 'Grignage et cuisson',
        description:
          'Retourner sur plaque, grigner 5 coups. Cuire à 250 °C four à sole 22 min avec buée les 10 premières minutes.',
      },
    ],
    tips: [
      'Utiliser une farine riche en gluten pour un développement optimal.',
      'Charger de buée dès l’enfournement pour une belle expansion.',
      'Laisser les baguettes refroidir sur grille pour conserver le croustillant.',
    ],
    storage: 'Conservation 8 h à température ambiante. Passer 5 min à 200 °C pour retrouver le croustillant. Congélation possible 1 mois.',
  },
  {
    id: 'pain-campagne-levain',
    name: 'Pain de Campagne au Levain Naturel',
    baseServings: 2,
    preparationTime: '35 min (hors fermentation)',
    totalTime: '48 h',
    difficulty: 'Avancé',
    summary:
      'Pain rustique mêlant farines de blé et de seigle, fermentation lente au levain liquide maturé.',
    keywords: ['pain', 'levain', 'campagne', 'boulangerie'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Banneton rond ou ovale',
      'Cocotte en fonte ou four à sole',
      'Lame de boulanger',
      'Thermomètre de pâte',
    ],
    ingredients: [
      {
        section: 'Levain liquide rafraîchi (12 h avant)',
        items: [
          { name: 'Levain chef', quantity: 50, unit: 'g' },
          { name: 'Farine de blé T65', quantity: 50, unit: 'g' },
          { name: 'Eau à 25 °C', quantity: 50, unit: 'g' },
        ],
      },
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de blé T65', quantity: 500, unit: 'g' },
          { name: 'Farine de seigle T130', quantity: 100, unit: 'g' },
          { name: 'Eau à 24 °C', quantity: 430, unit: 'g' },
          { name: 'Levain liquide prêt', quantity: 150, unit: 'g' },
          { name: 'Sel gris', quantity: 12, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Autolyse',
        description:
          'Mélanger farines et eau sans sel ni levain, reposer 1 h couvert à 24 °C.',
      },
      {
        title: 'Pétrissage',
        description:
          'Ajouter levain et sel. Pétrir 5 min vitesse 1 puis 4 min vitesse 2 jusqu’à obtention d’une pâte satinée (température 25 °C).',
      },
      {
        title: 'Pointage',
        description:
          'Laisser pointer 3 h à 25 °C, réaliser 3 rabats toutes les 45 min. Placer ensuite 18 h au froid à 5 °C.',
      },
      {
        title: 'Façonnage',
        description:
          'Diviser en deux pâtons de 540 g, bouler ou façonner en bâtards. Mettre en banneton fariné couture vers le haut.',
      },
      {
        title: 'Apprêt',
        description:
          'Apprêt 1 h 30 à 25 °C ou jusqu’à empreinte lente.',
      },
      {
        title: 'Cuisson',
        description:
          'Chauffer cocotte à 250 °C. Inciser la pâte, cuire 20 min couvercle fermé puis 25 min couvercle ouvert à 230 °C.',
      },
    ],
    tips: [
      'Rafraîchir le levain 2 fois avant utilisation pour un maximum d’activité.',
      'Adapter l’hydratation selon l’absorption des farines.',
      'Cuire en cocotte assure une poussée maximale même sans four à sole.',
    ],
    storage:
      'Se conserve 72 h à température ambiante, coupé côté planche. Congélation en tranches possible 1 mois.',
  },
  {
    id: 'pain-complet-multigraines',
    name: 'Pain Complet Multigraines',
    baseServings: 2,
    preparationTime: '30 min (hors fermentation)',
    totalTime: '24 h',
    difficulty: 'Intermédiaire',
    summary: 'Pain riche en fibres et graines trempées pour un moelleux durable.',
    keywords: ['pain complet', 'multigraines', 'boulangerie'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Moule à pain ou banneton',
      'Cuillère en bois',
      'Thermomètre',
    ],
    ingredients: [
      {
        section: 'Pré-trempage des graines',
        items: [
          { name: 'Mélange de graines (tournesol, lin, courge, sésame)', quantity: 120, unit: 'g' },
          { name: 'Eau chaude 50 °C', quantity: 200, unit: 'g' },
        ],
      },
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de blé T110', quantity: 400, unit: 'g' },
          { name: 'Farine complète T150', quantity: 200, unit: 'g' },
          { name: 'Levure fraîche', quantity: 12, unit: 'g' },
          { name: 'Eau à 25 °C', quantity: 420, unit: 'g' },
          { name: 'Sel fin', quantity: 12, unit: 'g' },
          { name: 'Miel de châtaignier', quantity: 20, unit: 'g' },
          { name: 'Huile d’olive', quantity: 20, unit: 'g' },
          { name: 'Graines trempées et égouttées', quantity: 320, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Verser farines, levure, miel et eau dans la cuve. Pétrir 5 min vitesse 1 puis 5 min vitesse 2. Ajouter sel, huile et graines en fin de pétrissage.',
      },
      {
        title: 'Pointage',
        description:
          'Pointage 1 h 30 à 26 °C avec un rabat à mi-parcours.',
      },
      {
        title: 'Façonnage',
        description:
          'Façonner en bâtard ou déposer dans moule graissé. Apprêt 1 h à 26 °C.',
      },
      {
        title: 'Cuisson',
        description:
          'Cuire à 230 °C 15 min avec buée puis 30 min à 200 °C. Démouler et refroidir sur grille.',
      },
    ],
    tips: [
      'Le trempage des graines évite qu’elles ne pompent l’humidité de la mie.',
      'Ajouter 20 g de levain liquide pour plus d’arômes si disponible.',
      'En moule, couvrir à mi-cuisson pour une croûte plus douce.',
    ],
    storage: 'Conservation 4 jours emballé dans un torchon. Congélation en tranches possible 6 semaines.',
  },
  {
    id: 'ciabatta-italienne',
    name: 'Ciabatta Italienne Haute Hydratation',
    baseServings: 6,
    preparationTime: '35 min',
    totalTime: '24 h',
    difficulty: 'Avancé',
    summary: 'Pain italien à mie alvéolée et croûte fine, idéal pour sandwiches gourmets.',
    keywords: ['pain', 'ciabatta', 'italie', 'boulangerie'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Spatule inox',
      'Bac rectangulaire',
      'Pierre de cuisson',
    ],
    ingredients: [
      {
        section: 'Biga (12 h avant)',
        items: [
          { name: 'Farine de blé T65', quantity: 300, unit: 'g' },
          { name: 'Eau à 18 °C', quantity: 180, unit: 'g' },
          { name: 'Levure fraîche', quantity: 3, unit: 'g' },
        ],
      },
      {
        section: 'Pâte finale',
        items: [
          { name: 'Biga', quantity: 483, unit: 'g' },
          { name: 'Farine de blé T65', quantity: 300, unit: 'g' },
          { name: 'Farine de blé dur', quantity: 100, unit: 'g' },
          { name: 'Eau à 20 °C', quantity: 360, unit: 'g' },
          { name: 'Huile d’olive', quantity: 30, unit: 'g' },
          { name: 'Sel fin', quantity: 12, unit: 'g' },
          { name: 'Levure fraîche', quantity: 5, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Mélange',
        description:
          'Déchirer la biga, ajouter farines, eau et levure. Mélanger 4 min vitesse 1 puis 6 min vitesse 2 pour développer le gluten.',
      },
      {
        title: 'Hydratation finale',
        description:
          'Ajouter l’huile et le sel en fin de pétrissage, poursuivre 2 min. Température visée : 24 °C.',
      },
      {
        title: 'Fermentation en bac',
        description:
          'Débarrasser dans un bac huilé. Réaliser 4 rabats toutes les 30 min sur 2 h. Placer au froid 12 h.',
      },
      {
        title: 'Division',
        description:
          'Renverser sur plan fariné, diviser délicatement en rectangles de 250 g sans dégazer.',
      },
      {
        title: 'Apprêt et cuisson',
        description:
          'Apprêt 45 min sur toile farinée, cuire à 240 °C sur pierre 18 min avec vapeur.',
      },
    ],
    tips: [
      'Manipuler la pâte avec douceur pour préserver les bulles.',
      'Utiliser une farine à force élevée (W300) pour supporter l’hydratation.',
      'Cuire sur pierre chaude pour une croûte fine.',
    ],
    storage: 'Consommer dans les 24 h. Réchauffer 6 min à 200 °C pour raviver la croûte. Congélation possible 1 mois.',
  },
  {
    id: 'focaccia-genovese',
    name: 'Focaccia Genovese Extra Vierge',
    baseServings: 8,
    preparationTime: '30 min',
    totalTime: '16 h',
    difficulty: 'Facile',
    summary: 'Focaccia moelleuse, alvéolée, parfumée à l’huile d’olive ligure et fleur de sel.',
    keywords: ['pain', 'focaccia', 'italie', 'boulangerie'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Plaque 30 × 40 cm',
      'Bac de fermentation',
      'Balance de précision',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de blé T55', quantity: 600, unit: 'g' },
          { name: 'Eau à 20 °C', quantity: 450, unit: 'g' },
          { name: 'Levure fraîche', quantity: 12, unit: 'g' },
          { name: 'Sel fin', quantity: 12, unit: 'g' },
          { name: 'Huile d’olive extra vierge', quantity: 40, unit: 'g' },
          { name: 'Sucre', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Saumure',
        items: [
          { name: 'Eau', quantity: 60, unit: 'g' },
          { name: 'Huile d’olive', quantity: 40, unit: 'g' },
          { name: 'Fleur de sel', quantity: 5, unit: 'g' },
        ],
      },
      {
        section: 'Finition',
        items: [{ name: 'Romarin frais et tomates cerise', quantity: 1, unit: 'QS' }],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, eau, sucre et levure 4 min vitesse 1. Ajouter sel puis huile, pétrir 6 min vitesse 2. Température finale 24 °C.',
      },
      {
        title: 'Pointage',
        description:
          'Pointage 1 h 30 à 26 °C avec un rabat à 45 min. Placer ensuite 12 h au froid à 5 °C.',
      },
      {
        title: 'Mise en plaque',
        description:
          'Huiler la plaque, étaler délicatement la pâte. Repos 45 min.',
      },
      {
        title: 'Empreintes et garniture',
        description:
          'Appuyer avec les doigts huilés pour créer les alvéoles, répartir la saumure, romarin et tomates.',
      },
      {
        title: 'Cuisson',
        description:
          'Cuire à 230 °C chaleur tournante 18-20 min jusqu’à coloration ambrée.',
      },
    ],
    tips: [
      'Pour une version plus alvéolée, prolonger le repos à 18 h au froid.',
      'Ajouter 2 g de levure sèche pour une version sans levure fraîche.',
      'Badigeonner d’huile à la sortie du four pour accentuer le brillant.',
    ],
    storage: 'Conserver 24 h sous cloche. Réchauffer 5 min à 200 °C. Congélation possible en parts.',
  },
  {
    id: 'brioche-nantaise',
    name: 'Brioche Nantaise Beurre Bordier',
    baseServings: 10,
    preparationTime: '40 min',
    totalTime: '18 h',
    difficulty: 'Intermédiaire',
    summary: 'Brioche riche en beurre, texture filante, idéale en tranches ou tressée.',
    keywords: ['brioche', 'viennoiserie', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Thermomètre de pâte',
      'Moule à cake ou à brioche',
      'Chambre de pousse',
    ],
    ingredients: [
      {
        section: 'Pâte à brioche',
        items: [
          { name: 'Farine de gruau T45', quantity: 500, unit: 'g' },
          { name: 'Œufs entiers (froids)', quantity: 300, unit: 'g' },
          { name: 'Levure fraîche', quantity: 20, unit: 'g' },
          { name: 'Sucre semoule', quantity: 60, unit: 'g' },
          { name: 'Sel fin', quantity: 10, unit: 'g' },
          { name: 'Beurre doux Bordier 12 °C', quantity: 250, unit: 'g' },
        ],
      },
      {
        section: 'Dorure',
        items: [
          { name: 'Œuf entier', quantity: 1, unit: 'pièce' },
          { name: 'Lait entier', quantity: 10, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, œufs, levure et sucre 5 min vitesse 1. Ajouter sel. Incorporer beurre en cubes progressivement, pétrir 10 min vitesse 2 jusqu’à pâte lisse (température 24 °C).',
      },
      {
        title: 'Pointage',
        description:
          'Pointage 1 h à 26 °C, rabattre, filmer et bloquer 12 h au froid.',
      },
      {
        title: 'Façonnage',
        description:
          'Diviser en 6 pâtons de 140 g, bouler, déposer dans moule beurré. Apprêt 2 h à 28 °C.',
      },
      {
        title: 'Cuisson',
        description:
          'Dorer, cuire à 165 °C chaleur tournante 30-35 min. Décercler et refroidir sur grille.',
      },
    ],
    tips: [
      'Utiliser des œufs froids pour éviter une montée excessive de température.',
      'Ne pas sur-pétrir après incorporation du beurre pour garder la structure filante.',
      'Bloquer au froid améliore la saveur et la tenue de façonnage.',
    ],
    storage: 'Conserver 48 h emballée dans film alimentaire. Toastage 2 min pour raviver. Congélation possible 1 mois.',
  },
  {
    id: 'brioche-feuilletee',
    name: 'Brioche Feuilletée Vanille',
    baseServings: 8,
    preparationTime: '1 h (hors repos)',
    totalTime: '24 h',
    difficulty: 'Avancé',
    summary: 'Brioche laminée façon kouign avec beurre vanillé pour un feuilletage fondant.',
    keywords: ['brioche', 'feuilletage', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Laminoir ou rouleau',
      'Moule à cake',
      'Thermomètre',
    ],
    ingredients: [
      {
        section: 'Pâte à brioche',
        items: [
          { name: 'Farine T45', quantity: 400, unit: 'g' },
          { name: 'Œufs entiers', quantity: 200, unit: 'g' },
          { name: 'Lait entier', quantity: 40, unit: 'g' },
          { name: 'Sucre', quantity: 60, unit: 'g' },
          { name: 'Sel', quantity: 8, unit: 'g' },
          { name: 'Levure fraîche', quantity: 16, unit: 'g' },
          { name: 'Beurre doux', quantity: 120, unit: 'g' },
        ],
      },
      {
        section: 'Beurre feuilleté',
        items: [
          { name: 'Beurre sec 84 % MG', quantity: 200, unit: 'g' },
          { name: 'Sucre cassonade', quantity: 80, unit: 'g' },
          { name: 'Graines de vanille', quantity: 1, unit: 'gousse' },
        ],
      },
      {
        section: 'Finition',
        items: [{ name: 'Sucre demerara', quantity: 30, unit: 'g' }],
      },
    ],
    steps: [
      {
        title: 'Pâte de base',
        description:
          'Pétrir farine, œufs, lait, sucre, levure 5 min vitesse 1 puis 5 min vitesse 2. Ajouter sel et beurre pommade, pétrir 8 min. Repos 1 h puis blocage 12 h au froid.',
      },
      {
        title: 'Tourage',
        description:
          'Étaler la pâte en rectangle 30 × 20 cm. Enfermer le beurre parfumé. Donner 3 tours simples avec repos 30 min au froid entre chaque.',
      },
      {
        title: 'Façonnage',
        description:
          'Abaisser à 4 mm, saupoudrer de sucre demerara, rouler en boudin, couper et disposer dans moule.',
      },
      {
        title: 'Apprêt et cuisson',
        description:
          'Laisser pousser 1 h 30 à 27 °C. Cuire à 170 °C 35 min, démouler immédiatement.',
      },
    ],
    tips: [
      'Travailler la pâte et le beurre à 16 °C pour un feuilletage net.',
      'Utiliser du beurre sec pour limiter la fonte.',
      'Saupoudrer de sucre pour un croustillant caramélisé.',
    ],
    storage: 'Consommer sous 48 h. Réchauffer 5 min à 160 °C. Congélation possible en portions.',
  },
  {
    id: 'croissant-beurre',
    name: 'Croissants Tradition Beurre AOP',
    baseServings: 12,
    preparationTime: '1 h 30 (hors tours et pousse)',
    totalTime: '2 jours',
    difficulty: 'Avancé',
    summary:
      "Feuilletage inversé avec beurre AOP Charentes-Poitou pour une viennoiserie crousti-fondante.",
    keywords: ['croissant', 'viennoiserie', 'tourage', 'pâte levée feuilletée'],
    equipment: [
      'Robot pâtissier avec crochet',
      'Thermomètre de pâte',
      'Rouleau à pâtisserie ou laminoir',
      'Toile de cuisson ou plaque perforée',
      'Chambre de pousse ou four réglable à 26 °C',
    ],
    ingredients: [
      {
        section: 'Détrempe',
        items: [
          { name: 'Farine de gruau (W320)', quantity: 500, unit: 'g' },
          { name: 'Eau froide', quantity: 250, unit: 'g' },
          { name: 'Beurre doux fondu refroidi', quantity: 50, unit: 'g' },
          { name: 'Sucre semoule', quantity: 50, unit: 'g' },
          { name: 'Sel fin', quantity: 10, unit: 'g' },
          { name: 'Levure fraîche de boulanger', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Beurrage',
        items: [{ name: 'Beurre AOP Charentes-Poitou', quantity: 300, unit: 'g' }],
      },
      {
        section: 'Dorure',
        items: [
          { name: 'Jaunes d’œufs', quantity: 2, unit: 'pièces' },
          { name: 'Crème liquide 35 %', quantity: 20, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pétrissage de la détrempe',
        description:
          "Dans la cuve, placer farine, sucre, sel, levure émiettée, eau et beurre fondu froid. Pétrir 4 min en vitesse 1 puis 4 min en vitesse 2. Température finale : 23 °C. Filmer et bloquer 30 min au froid.",
      },
      {
        title: 'Préparation du beurre de tourage',
        description:
          "Former un carré de 20 x 20 cm entre deux feuilles de papier cuisson, placer 15 min au froid pour qu'il soit souple (16 °C).",
      },
      {
        title: 'Tourage inversé',
        description:
          "Étaler la détrempe en rectangle de 35 x 25 cm, déposer le beurre au centre et enfermer en portefeuille. Donner un tour double, reposer 30 min au froid, puis un tour simple. Repos 1 h au froid avant abaisse finale.",
      },
      {
        title: 'Façonnage',
        description:
          'Abaisser à 3 mm, découper des triangles de 8 x 25 cm, étirer légèrement la base puis rouler sans serrer. Dorer légèrement.',
      },
      {
        title: 'Pousse contrôlée',
        description:
          "Laisser lever 2 h 30 à 26 °C et 80 % d'hygrométrie jusqu'à ce que les strates soient visibles.",
      },
      {
        title: 'Cuisson',
        description:
          "Préchauffer le four à 175 °C chaleur tournante. Dorer une deuxième fois et cuire 15-17 min jusqu'à coloration homogène.",
      },
      {
        title: 'Finition',
        description:
          'Refroidir sur grille 15 min avant dégustation pour fixer les couches.',
      },
    ],
    tips: [
      'Respecter la température de pâte : trop chaude, le beurre fondra et le feuilletage sera irrégulier.',
      "Utiliser une hygrométrie suffisante durant l'étuve pour éviter la croûte.",
      'Congeler les croissants crus après façonnage : décongélation et pousse directe le lendemain.',
    ],
    storage:
      "À conserver 24 h à température ambiante dans une boîte hermétique. Réchauffer 5 min à 160 °C. Congélation crue ou cuite possible jusqu'à 1 mois.",
  },
  {
    id: 'pain-chocolat',
    name: 'Pains au Chocolat Pur Beurre',
    baseServings: 12,
    preparationTime: '1 h 30',
    totalTime: '2 jours',
    difficulty: 'Avancé',
    summary: 'Pâte levée feuilletée pur beurre garnie de bâtons chocolat 64 %.',
    keywords: ['viennoiserie', 'pain au chocolat', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier',
      'Laminoir',
      'Thermomètre de pâte',
      'Plaques perforées',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de gruau T45', quantity: 500, unit: 'g' },
          { name: 'Lait entier froid', quantity: 260, unit: 'g' },
          { name: 'Sucre semoule', quantity: 60, unit: 'g' },
          { name: 'Sel', quantity: 10, unit: 'g' },
          { name: 'Levure fraîche', quantity: 20, unit: 'g' },
          { name: 'Beurre doux fondu refroidi', quantity: 40, unit: 'g' },
        ],
      },
      {
        section: 'Beurrage',
        items: [{ name: 'Beurre AOP Charentes-Poitou', quantity: 280, unit: 'g' }],
      },
      {
        section: 'Garniture',
        items: [{ name: 'Bâtons de chocolat 64 %', quantity: 24, unit: 'pièces' }],
      },
      {
        section: 'Dorure',
        items: [{ name: 'Œuf entier battu', quantity: 1, unit: 'pièce' }],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, lait, sucre, levure 4 min vitesse 1 puis 4 min vitesse 2. Ajouter sel et beurre fondu, pétrir 2 min. Température cible 23 °C.',
      },
      {
        title: 'Blocage',
        description:
          'Filmer la pâte et placer 1 h au froid puis 12 h à 4 °C.',
      },
      {
        title: 'Tourage',
        description:
          'Enfermer le beurre, donner un tour double puis un tour simple avec repos 30 min au froid entre chaque.',
      },
      {
        title: 'Façonnage',
        description:
          'Abaisser à 3 mm, découper des rectangles 9 × 16 cm, déposer 2 bâtons de chocolat et rouler serré.',
      },
      {
        title: 'Pousse',
        description:
          'Pousse 2 h à 26 °C hygrométrie 75 % jusqu’à volume doublé.',
      },
      {
        title: 'Cuisson',
        description:
          'Dorer, cuire à 180 °C 16-18 min. Refroidir sur grille.',
      },
    ],
    tips: [
      'Utiliser un chocolat résistant à la cuisson pour éviter les fuites.',
      'Refroidir les bâtons avant façonnage pour une meilleure tenue.',
      'Congeler crus après façonnage pour cuisson jour J.',
    ],
    storage: 'Conserver 24 h à température ambiante. Réchauffer 5 min à 170 °C. Congélation crue ou cuite 1 mois.',
  },
  {
    id: 'kouign-amann',
    name: 'Kouign-Amann Traditionnel',
    baseServings: 12,
    preparationTime: '45 min',
    totalTime: '24 h',
    difficulty: 'Avancé',
    summary: 'Spécialité bretonne croustillante, caramel beurre salé et feuilletage serré.',
    keywords: ['viennoiserie', 'kouign amann', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier',
      'Laminoir',
      'Cercle individuel ou moule à tarte',
      'Balance',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine T55', quantity: 500, unit: 'g' },
          { name: 'Eau', quantity: 300, unit: 'g' },
          { name: 'Levure fraîche', quantity: 15, unit: 'g' },
          { name: 'Sel de Guérande', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Tourage',
        items: [
          { name: 'Beurre demi-sel 82 % MG', quantity: 350, unit: 'g' },
          { name: 'Sucre semoule', quantity: 350, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pâte de base',
        description:
          'Pétrir farine, eau, levure 4 min vitesse 1 puis 4 min vitesse 2. Ajouter sel en fin. Pointage 30 min, blocage 1 h au froid.',
      },
      {
        title: 'Tourage sucré',
        description:
          'Étaler, enfermer beurre, saupoudrer 1/3 du sucre. Donner un tour simple. Répéter deux fois avec repos 30 min au froid.',
      },
      {
        title: 'Façonnage',
        description:
          'Découper en carrés, replier les coins au centre, déposer en moules beurrés. Saupoudrer sucre restant.',
      },
      {
        title: 'Apprêt',
        description:
          'Laisser pousser 45 min à 26 °C.',
      },
      {
        title: 'Cuisson',
        description:
          'Cuire à 200 °C 25 min. Démouler aussitôt pour éviter le collage.',
      },
    ],
    tips: [
      'Travailler rapidement pour éviter la fonte du beurre.',
      'Utiliser du beurre demi-sel pour l’authenticité.',
      'Caraméliser légèrement en fin de cuisson sous salamandre.',
    ],
    storage: 'Déguster jour même. Réchauffer 5 min à 180 °C pour croustillant. Congélation crue 2 semaines.',
  },
  {
    id: 'pain-viennois',
    name: 'Pain Viennois Lait Malté',
    baseServings: 6,
    preparationTime: '30 min',
    totalTime: '6 h',
    difficulty: 'Facile',
    summary: 'Pain moelleux légèrement sucré, idéal pour sandwiches gourmands.',
    keywords: ['pain viennois', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier',
      'Grignette',
      'Plaque de cuisson',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine T55', quantity: 500, unit: 'g' },
          { name: 'Lait entier', quantity: 280, unit: 'g' },
          { name: 'Levure fraîche', quantity: 20, unit: 'g' },
          { name: 'Sucre', quantity: 50, unit: 'g' },
          { name: 'Beurre doux', quantity: 60, unit: 'g' },
          { name: 'Sel', quantity: 9, unit: 'g' },
          { name: 'Poudre de malt (facultatif)', quantity: 5, unit: 'g' },
        ],
      },
      {
        section: 'Dorure',
        items: [{ name: 'Œuf battu', quantity: 1, unit: 'pièce' }],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, lait, sucre, levure et malt 4 min vitesse 1 puis 4 min vitesse 2. Ajouter sel et beurre pommade, pétrir 3 min.',
      },
      {
        title: 'Pointage',
        description:
          'Repos 1 h à 26 °C. Rabattre.',
      },
      {
        title: 'Façonnage',
        description:
          'Diviser en 3 pâtons de 260 g, façonner en boudins, déposer sur plaque. Apprêt 1 h à 27 °C.',
      },
      {
        title: 'Finition et cuisson',
        description:
          'Dorer, grigner en épis, cuire à 180 °C 18 min.',
      },
    ],
    tips: [
      'Ajouter 30 g de pépites de chocolat pour une version gourmande.',
      'Réduire la levure à 10 g et prolonger la pousse pour plus de saveur.',
      'Vaporiser d’eau avant cuisson pour une croûte fine.',
    ],
    storage: 'Conserver 48 h filmé. Congélation possible en tranches 1 mois.',
  },
  {
    id: 'chausson-pommes',
    name: 'Chaussons aux Pommes Caramélisées',
    baseServings: 12,
    preparationTime: '1 h',
    totalTime: '24 h',
    difficulty: 'Intermédiaire',
    summary: 'Feuilletage inversé garni de compotée de pommes vanillée.',
    keywords: ['viennoiserie', 'chausson', 'pâtisserie boulangère'],
    equipment: [
      'Robot pâtissier',
      'Laminoir',
      'Emporte-pièce demi-lune',
      'Plaque perforée',
    ],
    ingredients: [
      {
        section: 'Pâte feuilletée inversée',
        items: [
          { name: 'Farine T55', quantity: 500, unit: 'g' },
          { name: 'Beurre sec 84 % MG', quantity: 400, unit: 'g' },
          { name: 'Eau froide', quantity: 220, unit: 'g' },
          { name: 'Sel', quantity: 10, unit: 'g' },
          { name: 'Vinaigre blanc', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Compotée',
        items: [
          { name: 'Pommes Golden', quantity: 800, unit: 'g' },
          { name: 'Sucre', quantity: 80, unit: 'g' },
          { name: 'Beurre', quantity: 40, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 1, unit: 'pièce' },
          { name: 'Pectine NH', quantity: 6, unit: 'g' },
          { name: 'Jus de citron', quantity: 15, unit: 'g' },
        ],
      },
      {
        section: 'Dorure',
        items: [{ name: 'Œuf entier', quantity: 1, unit: 'pièce' }],
      },
    ],
    steps: [
      {
        title: 'Pâte',
        description:
          'Réaliser la feuilletée inversée (2 tours doubles, 1 tour simple) et reposer 12 h au froid.',
      },
      {
        title: 'Compotée',
        description:
          'Caraméliser beurre et sucre, ajouter pommes en cubes, vanille, cuire 10 min. Incorporer pectine mélangée au sucre, cuire 2 min, ajouter citron. Refroidir.',
      },
      {
        title: 'Façonnage',
        description:
          'Abaisser à 3 mm, détailler des disques 14 cm, garnir 60 g de compotée, refermer en demi-lune et sceller.',
      },
      {
        title: 'Pousse et cuisson',
        description:
          'Repos 1 h au froid, dorer, cuire à 190 °C 22 min. Glacer au sirop.',
      },
    ],
    tips: [
      'Utiliser des pommes acidulées pour un meilleur contraste.',
      'Refroidir totalement la compotée avant garnissage pour éviter les fuites.',
      'Inciser légèrement pour laisser échapper la vapeur.',
    ],
    storage: 'Conserver 24 h à température ambiante. Réchauffer 5 min à 180 °C. Congélation possible avant cuisson.',
  },
  {
    id: 'tarte-citron',
    name: 'Tarte Citron Meringuée Signature',
    baseServings: 8,
    preparationTime: '1 h 15',
    totalTime: '6 h avec repos',
    difficulty: 'Intermédiaire',
    summary:
      'Une tarte acidulée avec appareil citron velouté, meringue italienne soyeuse et finition contemporaine.',
    keywords: ['tarte', 'citron', 'pâtisserie', 'meringue italienne'],
    equipment: [
      'Robot pâtissier avec feuille et fouet',
      'Mixeur plongeant',
      'Thermomètre de cuisson',
      'Cercle à tarte 22 cm',
      'Plaque perforée et tapis micro-perforé',
    ],
    ingredients: [
      {
        section: 'Pâte sucrée',
        items: [
          { name: 'Beurre doux pommade', quantity: 150, unit: 'g' },
          { name: 'Sucre glace', quantity: 95, unit: 'g' },
          { name: 'Poudre d’amande', quantity: 30, unit: 'g' },
          { name: 'Œuf entier', quantity: 50, unit: 'g' },
          { name: 'Farine T55', quantity: 250, unit: 'g' },
          { name: 'Sel fin', quantity: 1, unit: 'g' },
        ],
      },
      {
        section: 'Crémeux citron',
        items: [
          { name: 'Jus de citron frais', quantity: 150, unit: 'g' },
          { name: 'Zestes de citron jaune', quantity: 3, unit: 'pièces' },
          { name: 'Sucre semoule', quantity: 120, unit: 'g' },
          { name: 'Œufs entiers', quantity: 150, unit: 'g' },
          { name: 'Beurre doux froid en cubes', quantity: 120, unit: 'g' },
          { name: 'Gélatine feuille 200 bloom', quantity: 4, unit: 'g' },
        ],
      },
      {
        section: 'Meringue italienne',
        items: [
          { name: 'Blancs d’œufs', quantity: 120, unit: 'g' },
          { name: 'Sucre semoule', quantity: 200, unit: 'g' },
          { name: 'Eau', quantity: 60, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pâte sucrée',
        description:
          "Crémer beurre, sucre glace et poudre d'amande à la feuille. Ajouter l'œuf puis la farine et le sel. Fraiser légèrement, filmer et reposer 2 h au froid.",
      },
      {
        title: 'Fonçage et cuisson à blanc',
        description:
          'Abaisser à 3 mm, foncer le cercle, piquer et bloquer 30 min au congélateur. Cuire à 165 °C 18 min avec poids puis 5 min sans.',
      },
      {
        title: 'Crémeux citron',
        description:
          "Hydrater la gélatine. Chauffer jus, zestes et moitié du sucre. Blanchir œufs avec le reste du sucre, verser le jus chaud et cuire à 83 °C. Chinoiser, incorporer gélatine puis beurre au mixeur plongeant. Couler, filmer au contact et refroidir 3 h.",
      },
      {
        title: 'Garnissage',
        description:
          'Pocher le crémeux dans le fond refroidi, lisser et bloquer 1 h au froid.',
      },
      {
        title: 'Meringue italienne',
        description:
          "Cuire eau et sucre à 118 °C. Commencer à monter les blancs à vitesse moyenne. Verser le sirop en filet sur les blancs et fouetter jusqu'à complet refroidissement.",
      },
      {
        title: 'Finition',
        description:
          'Pocher la meringue en vagues, dorer au chalumeau. Ajouter zestes frais et poudre de yuzu si souhaité.',
      },
    ],
    tips: [
      'Toujours travailler la pâte sucrée froide pour une découpe nette.',
      'Ajouter 10 g de maïzena au crémeux pour une tenue renforcée si la tarte doit voyager.',
      'Pour une version sans gélatine, remplacer par 12 g de pectine NH nappage ajoutée au sucre.',
    ],
    storage:
      'Conserver au réfrigérateur 48 h maximum. Sortir 20 min avant dégustation. Congélation possible sans meringue.',
  },
  {
    id: 'paris-brest',
    name: 'Paris-Brest Praliné Noisette',
    baseServings: 8,
    preparationTime: '1 h 20',
    totalTime: '6 h',
    difficulty: 'Avancé',
    summary: 'Couronne de pâte à choux croustillante garnie de mousseline pralinée intense.',
    keywords: ['pâtisserie', 'paris-brest', 'praliné'],
    equipment: [
      'Robot pâtissier',
      'Mixeur coupe praliné',
      'Plaque perforée',
      'Poche à douille cannelée',
    ],
    ingredients: [
      {
        section: 'Pâte à choux',
        items: [
          { name: 'Eau', quantity: 125, unit: 'g' },
          { name: 'Lait entier', quantity: 125, unit: 'g' },
          { name: 'Beurre demi-sel', quantity: 110, unit: 'g' },
          { name: 'Sucre', quantity: 10, unit: 'g' },
          { name: 'Farine T55', quantity: 140, unit: 'g' },
          { name: 'Œufs entiers', quantity: 250, unit: 'g' },
        ],
      },
      {
        section: 'Craquelin',
        items: [
          { name: 'Beurre doux', quantity: 80, unit: 'g' },
          { name: 'Cassonade', quantity: 80, unit: 'g' },
          { name: 'Farine T55', quantity: 80, unit: 'g' },
        ],
      },
      {
        section: 'Praliné noisette',
        items: [
          { name: 'Noisettes torréfiées', quantity: 250, unit: 'g' },
          { name: 'Sucre', quantity: 125, unit: 'g' },
        ],
      },
      {
        section: 'Crème mousseline praliné',
        items: [
          { name: 'Lait entier', quantity: 500, unit: 'g' },
          { name: 'Jaunes d’œufs', quantity: 100, unit: 'g' },
          { name: 'Sucre', quantity: 100, unit: 'g' },
          { name: 'Maïzena', quantity: 40, unit: 'g' },
          { name: 'Beurre doux', quantity: 250, unit: 'g' },
          { name: 'Praliné noisette', quantity: 180, unit: 'g' },
        ],
      },
      {
        section: 'Décor',
        items: [{ name: 'Noisettes caramélisées concassées', quantity: 40, unit: 'g' }],
      },
    ],
    steps: [
      {
        title: 'Pâte à choux',
        description:
          'Réaliser la panade, dessécher 2 min, incorporer œufs au robot jusqu’à ruban. Pocher une couronne de 20 cm, recouvrir de craquelin.',
      },
      {
        title: 'Cuisson choux',
        description:
          'Cuire à 170 °C chaleur tournante 45 min sans ouvrir le four.',
      },
      {
        title: 'Praliné',
        description:
          'Cuire sucre en caramel blond, ajouter noisettes, refroidir, mixer jusqu’à texture lisse.',
      },
      {
        title: 'Crème mousseline',
        description:
          'Cuire crème pâtissière, refroidir à 30 °C. Ajouter beurre pommade et praliné, monter au fouet.',
      },
      {
        title: 'Montage',
        description:
          'Couper la couronne, pocher mousseline en rosaces, parsemer de noisettes, refermer et poudrer sucre glace.',
      },
    ],
    tips: [
      'Bien dessécher la panade pour éviter l’affaissement.',
      'Stabiliser la mousseline avec 3 g de gélatine si transport.',
      'Préparer le praliné maison pour une intensité maximale.',
    ],
    storage: 'Conserver 24 h au réfrigérateur. Sortir 20 min avant service. Congélation déconseillée.',
  },
  {
    id: 'eclair-chocolat',
    name: 'Éclairs Chocolat Grand Cru',
    baseServings: 12,
    preparationTime: '1 h',
    totalTime: '5 h',
    difficulty: 'Intermédiaire',
    summary: 'Éclair glaçage miroir cacao, crème pâtissière chocolat 70 %.',
    keywords: ['pâtisserie', 'éclair', 'chocolat'],
    equipment: [
      'Robot pâtissier',
      'Thermomètre',
      'Douilles PF16',
      'Grille à glaçage',
    ],
    ingredients: [
      {
        section: 'Pâte à choux',
        items: [
          { name: 'Eau', quantity: 125, unit: 'g' },
          { name: 'Lait', quantity: 125, unit: 'g' },
          { name: 'Beurre', quantity: 110, unit: 'g' },
          { name: 'Farine', quantity: 140, unit: 'g' },
          { name: 'Œufs', quantity: 250, unit: 'g' },
          { name: 'Sel', quantity: 2, unit: 'g' },
        ],
      },
      {
        section: 'Crème chocolat',
        items: [
          { name: 'Lait entier', quantity: 500, unit: 'g' },
          { name: 'Jaunes', quantity: 120, unit: 'g' },
          { name: 'Sucre', quantity: 120, unit: 'g' },
          { name: 'Maïzena', quantity: 40, unit: 'g' },
          { name: 'Chocolat noir 70 %', quantity: 200, unit: 'g' },
          { name: 'Beurre', quantity: 60, unit: 'g' },
        ],
      },
      {
        section: 'Glaçage',
        items: [
          { name: 'Eau', quantity: 150, unit: 'g' },
          { name: 'Sucre', quantity: 150, unit: 'g' },
          { name: 'Crème 35 %', quantity: 150, unit: 'g' },
          { name: 'Cacao poudre', quantity: 60, unit: 'g' },
          { name: 'Gélatine', quantity: 10, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Cuisson des éclairs',
        description:
          'Pocher en boudins 14 cm, cuire 25 min à 170 °C puis 5 min porte entrouverte.',
      },
      {
        title: 'Crème chocolat',
        description:
          'Réaliser crème pâtissière, incorporer chocolat puis beurre à 35 °C. Filmer, refroidir, lisser avant garnissage.',
      },
      {
        title: 'Glaçage miroir',
        description:
          'Cuire eau, sucre, crème, cacao à 103 °C. Ajouter gélatine, mixer, refroidir à 32 °C avant nappage.',
      },
      {
        title: 'Montage',
        description:
          'Garnir les choux, glacer sur grille, décorer de copeaux.',
      },
    ],
    tips: [
      'Percer sous les éclairs pour un garnissage net.',
      'Stabiliser la crème avec 20 g de beurre de cacao pour transport.',
      'Congeler garnis puis glacer pour un rendu parfait.',
    ],
    storage: 'Conserver 36 h à 4 °C. Déguster à 12 °C. Congélation possible sans glaçage.',
  },
  {
    id: 'mille-feuille',
    name: 'Mille-Feuille Vanille Madagascar',
    baseServings: 10,
    preparationTime: '1 h 30',
    totalTime: '2 jours',
    difficulty: 'Avancé',
    summary: 'Feuilletage inversé caramélisé, crème diplomate vanillée, finition graphique.',
    keywords: ['pâtisserie', 'mille-feuille', 'vanille'],
    equipment: [
      'Laminoir',
      'Plaque perforée',
      'Tapis siliconé',
      'Cadre inox',
    ],
    ingredients: [
      {
        section: 'Feuilletage inversé',
        items: [
          { name: 'Farine T55', quantity: 500, unit: 'g' },
          { name: 'Beurre sec 84 %', quantity: 450, unit: 'g' },
          { name: 'Eau', quantity: 220, unit: 'g' },
          { name: 'Sel', quantity: 10, unit: 'g' },
          { name: 'Vinaigre', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Crème diplomate',
        items: [
          { name: 'Lait entier', quantity: 750, unit: 'g' },
          { name: 'Gousses de vanille', quantity: 2, unit: 'pièces' },
          { name: 'Jaunes', quantity: 160, unit: 'g' },
          { name: 'Sucre', quantity: 180, unit: 'g' },
          { name: 'Maïzena', quantity: 60, unit: 'g' },
          { name: 'Gélatine', quantity: 8, unit: 'g' },
          { name: 'Crème montée 35 %', quantity: 300, unit: 'g' },
          { name: 'Beurre', quantity: 80, unit: 'g' },
        ],
      },
      {
        section: 'Glaçage et décor',
        items: [
          { name: 'Fondant blanc', quantity: 300, unit: 'g' },
          { name: 'Chocolat noir fondu', quantity: 40, unit: 'g' },
          { name: 'Sucre glace', quantity: 20, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Feuilletage',
        description:
          'Réaliser 2 tours doubles et 1 tour simple, reposer 2 h au froid entre chaque. Abaisser à 3 mm, cuire entre deux plaques à 180 °C 30 min. Saupoudrer sucre glace et caraméliser 5 min à 220 °C.',
      },
      {
        title: 'Crème diplomate',
        description:
          'Cuire crème pâtissière, ajouter gélatine, refroidir à 25 °C, incorporer beurre puis crème montée.',
      },
      {
        title: 'Montage',
        description:
          'Superposer trois plaques de feuilletage, pocher crème entre chaque couche, lisser et bloquer 2 h au froid.',
      },
      {
        title: 'Glaçage',
        description:
          'Réchauffer fondant à 35 °C, glacer la surface, tracer lignes chocolat et marbrer.',
      },
    ],
    tips: [
      'Égaliser les plaques avec une règle pour un montage net.',
      'Chablonner le feuilletage avec chocolat blanc pour préserver le croustillant.',
      'Utiliser une scie à génoise pour détailler proprement.',
    ],
    storage: 'Conserver 36 h au réfrigérateur. Sortir 15 min avant service. Congélation possible sans glaçage.',
  },
  {
    id: 'opera',
    name: 'Opéra Café Chocolat',
    baseServings: 10,
    preparationTime: '1 h 40',
    totalTime: '12 h',
    difficulty: 'Avancé',
    summary: 'Biscuit Joconde imbibé café, ganache Guanaja et crème au beurre légère.',
    keywords: ['pâtisserie', 'opéra', 'entremets'],
    equipment: [
      'Robot pâtissier',
      'Cadre inox 30 × 20 cm',
      'Thermomètre',
      'Spatules coudées',
    ],
    ingredients: [
      {
        section: 'Biscuit Joconde',
        items: [
          { name: 'Poudre d’amande', quantity: 200, unit: 'g' },
          { name: 'Sucre glace', quantity: 200, unit: 'g' },
          { name: 'Farine T55', quantity: 50, unit: 'g' },
          { name: 'Œufs entiers', quantity: 300, unit: 'g' },
          { name: 'Beurre fondu', quantity: 40, unit: 'g' },
          { name: 'Blancs montés', quantity: 200, unit: 'g' },
          { name: 'Sucre semoule', quantity: 40, unit: 'g' },
        ],
      },
      {
        section: 'Sirop café',
        items: [
          { name: 'Eau', quantity: 150, unit: 'g' },
          { name: 'Sucre', quantity: 100, unit: 'g' },
          { name: 'Extrait de café', quantity: 10, unit: 'g' },
          { name: 'Grand Marnier', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Ganache chocolat',
        items: [
          { name: 'Crème 35 %', quantity: 250, unit: 'g' },
          { name: 'Glucose', quantity: 30, unit: 'g' },
          { name: 'Chocolat noir 70 %', quantity: 300, unit: 'g' },
          { name: 'Beurre', quantity: 60, unit: 'g' },
        ],
      },
      {
        section: 'Crème au beurre café',
        items: [
          { name: 'Sucre', quantity: 150, unit: 'g' },
          { name: 'Eau', quantity: 50, unit: 'g' },
          { name: 'Jaunes', quantity: 80, unit: 'g' },
          { name: 'Beurre doux', quantity: 220, unit: 'g' },
          { name: 'Extrait de café', quantity: 5, unit: 'g' },
        ],
      },
      {
        section: 'Glaçage chocolat',
        items: [
          { name: 'Chocolat noir 70 %', quantity: 250, unit: 'g' },
          { name: 'Beurre de cacao', quantity: 50, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Biscuit Joconde',
        description:
          'Monter poudre d’amande, sucre glace et œufs au ruban. Incorporer farine, beurre fondu puis blancs montés serrés au sucre. Étaler sur plaques, cuire 8 min à 220 °C.',
      },
      {
        title: 'Ganache',
        description:
          'Chauffer crème et glucose, verser sur chocolat, mixer, ajouter beurre, réserver à 35 °C.',
      },
      {
        title: 'Crème au beurre',
        description:
          'Cuire sirop à 118 °C, verser sur jaunes montés, foisonner jusqu’à 30 °C, incorporer beurre pommade et extrait de café.',
      },
      {
        title: 'Montage',
        description:
          'Alterner biscuits imbibés, crème au beurre, ganache. Bloquer 4 h au froid.',
      },
      {
        title: 'Finition',
        description:
          'Chauffer glaçage à 35 °C, couler, lisser, parer les côtés.',
      },
    ],
    tips: [
      'Préparer biscuits la veille pour faciliter le montage.',
      'Imbiber légèrement pour éviter le détrempé.',
      'Utiliser un chocolat de couverture riche en beurre de cacao pour un glaçage brillant.',
    ],
    storage: 'Conserver 48 h à 4 °C. Congélation possible 2 semaines emballé.',
  },
  {
    id: 'fraisier-tradition',
    name: 'Fraisier Traditionnel Diplomaté',
    baseServings: 8,
    preparationTime: '1 h 30',
    totalTime: '8 h',
    difficulty: 'Intermédiaire',
    summary: 'Biscuit génoise imbibé, crème diplomate vanille et fraises Gariguette fraîches.',
    keywords: ['pâtisserie', 'fraisier', 'entremets'],
    equipment: [
      'Robot pâtissier',
      'Cadre 20 cm',
      'Spatule coudée',
      'Thermomètre',
    ],
    ingredients: [
      {
        section: 'Génoise',
        items: [
          { name: 'Œufs entiers', quantity: 200, unit: 'g' },
          { name: 'Sucre', quantity: 120, unit: 'g' },
          { name: 'Farine T45', quantity: 120, unit: 'g' },
          { name: 'Beurre fondu', quantity: 30, unit: 'g' },
        ],
      },
      {
        section: 'Punch fraise',
        items: [
          { name: 'Purée de fraise', quantity: 120, unit: 'g' },
          { name: 'Sirop de sucre', quantity: 40, unit: 'g' },
          { name: 'Kirsch', quantity: 15, unit: 'g' },
        ],
      },
      {
        section: 'Crème diplomate',
        items: [
          { name: 'Lait entier', quantity: 400, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 1, unit: 'pièce' },
          { name: 'Jaunes', quantity: 80, unit: 'g' },
          { name: 'Sucre', quantity: 80, unit: 'g' },
          { name: 'Maïzena', quantity: 30, unit: 'g' },
          { name: 'Gélatine', quantity: 6, unit: 'g' },
          { name: 'Crème montée 35 %', quantity: 200, unit: 'g' },
          { name: 'Beurre', quantity: 40, unit: 'g' },
        ],
      },
      {
        section: 'Montage',
        items: [
          { name: 'Fraises Gariguette', quantity: 500, unit: 'g' },
          { name: 'Pâte d’amande verte', quantity: 120, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Génoise',
        description:
          'Monter œufs et sucre à 45 °C, fouetter jusqu’à ruban. Incorporer farine tamisée, beurre. Étaler et cuire 12 min à 180 °C.',
      },
      {
        title: 'Crème diplomate',
        description:
          'Cuire crème pâtissière, ajouter gélatine, beurre, refroidir à 25 °C puis incorporer crème montée.',
      },
      {
        title: 'Montage',
        description:
          'Chemiser cadre avec fraises coupées, poser génoise imbibée, garnir de crème, ajouter fraises, terminer par génoise et pâte d’amande.',
      },
      {
        title: 'Repos',
        description:
          'Bloquer 4 h au froid avant découpe.',
      },
    ],
    tips: [
      'Utiliser des fraises de même calibre pour un montage régulier.',
      'Stabiliser avec 2 g de gélatine supplémentaires pour transport long.',
      'Pocher une fine couche de crème contre le cadre pour coller les fraises.',
    ],
    storage: 'Conserver 24 h à 4 °C. Consommation rapide recommandée. Congélation déconseillée.',
  },
  {
    id: 'saint-honore',
    name: 'Saint-Honoré Vanille Caramel',
    baseServings: 10,
    preparationTime: '2 h',
    totalTime: '8 h',
    difficulty: 'Avancé',
    summary: 'Base feuilletée, couronne de choux caramélisés et chantilly mascarpone vanille.',
    keywords: ['pâtisserie', 'saint-honoré', 'choux'],
    equipment: [
      'Robot pâtissier',
      'Laminoir',
      'Douilles PF16 et saint-honoré',
      'Thermomètre',
    ],
    ingredients: [
      {
        section: 'Base feuilletée',
        items: [
          { name: 'Pâte feuilletée inversée', quantity: 400, unit: 'g' },
        ],
      },
      {
        section: 'Pâte à choux',
        items: [
          { name: 'Eau', quantity: 125, unit: 'g' },
          { name: 'Lait', quantity: 125, unit: 'g' },
          { name: 'Beurre', quantity: 110, unit: 'g' },
          { name: 'Farine', quantity: 140, unit: 'g' },
          { name: 'Œufs', quantity: 250, unit: 'g' },
        ],
      },
      {
        section: 'Crème chiboust',
        items: [
          { name: 'Lait', quantity: 300, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 1, unit: 'pièce' },
          { name: 'Jaunes', quantity: 80, unit: 'g' },
          { name: 'Sucre', quantity: 80, unit: 'g' },
          { name: 'Maïzena', quantity: 25, unit: 'g' },
          { name: 'Gélatine', quantity: 6, unit: 'g' },
          { name: 'Blancs montés', quantity: 120, unit: 'g' },
        ],
      },
      {
        section: 'Caramel',
        items: [
          { name: 'Sucre', quantity: 150, unit: 'g' },
          { name: 'Eau', quantity: 50, unit: 'g' },
        ],
      },
      {
        section: 'Chantilly mascarpone',
        items: [
          { name: 'Crème 35 %', quantity: 400, unit: 'g' },
          { name: 'Mascarpone', quantity: 150, unit: 'g' },
          { name: 'Sucre glace', quantity: 40, unit: 'g' },
          { name: 'Graines de vanille', quantity: 1, unit: 'gousse' },
        ],
      },
    ],
    steps: [
      {
        title: 'Base',
        description:
          'Abaisser feuilletage à 3 mm, détailler disque 24 cm, piquer, cuire 25 min à 180 °C.',
      },
      {
        title: 'Choux',
        description:
          'Pocher et cuire 25 min à 170 °C. Garnir de chiboust.',
      },
      {
        title: 'Caramel',
        description:
          'Cuire sucre et eau à 180 °C, tremper les choux pour les coller sur la couronne.',
      },
      {
        title: 'Montage',
        description:
          'Pocher chiboust au centre, disposer choux caramélisés, terminer par rosaces de chantilly mascarpone.',
      },
    ],
    tips: [
      'Maintenir le caramel sur feu doux pour rester fluide.',
      'Utiliser une poche saint-honoré pour une finition professionnelle.',
      'Stabiliser la chantilly avec 2 g de gélatine si nécessaire.',
    ],
    storage: 'Conserver 12 h au frais, montage à faire à la demande pour préserver le croustillant.',
  },
  {
    id: 'macaron-framboise',
    name: 'Macarons Framboise & Litchi',
    baseServings: 40,
    preparationTime: '1 h 30',
    totalTime: '24 h',
    difficulty: 'Avancé',
    summary: 'Coques meringue italienne, ganache montée framboise-litchi et confit acidulé.',
    keywords: ['pâtisserie', 'macaron', 'meringue italienne'],
    equipment: [
      'Robot pâtissier',
      'Thermomètre',
      'Mixeur plongeant',
      'Tapis siliconé macaron',
    ],
    ingredients: [
      {
        section: 'Coques',
        items: [
          { name: 'Poudre d’amande extra-fine', quantity: 300, unit: 'g' },
          { name: 'Sucre glace', quantity: 300, unit: 'g' },
          { name: 'Blancs d’œufs', quantity: 110, unit: 'g' },
          { name: 'Colorant framboise hydrosoluble', quantity: 1, unit: 'g' },
        ],
      },
      {
        section: 'Meringue italienne',
        items: [
          { name: 'Sucre', quantity: 300, unit: 'g' },
          { name: 'Eau', quantity: 80, unit: 'g' },
          { name: 'Blancs d’œufs', quantity: 110, unit: 'g' },
        ],
      },
      {
        section: 'Ganache montée',
        items: [
          { name: 'Chocolat blanc 34 %', quantity: 250, unit: 'g' },
          { name: 'Crème 35 % (1)', quantity: 150, unit: 'g' },
          { name: 'Crème 35 % (2)', quantity: 200, unit: 'g' },
          { name: 'Purée framboise', quantity: 120, unit: 'g' },
          { name: 'Purée litchi', quantity: 60, unit: 'g' },
          { name: 'Gélatine', quantity: 6, unit: 'g' },
        ],
      },
      {
        section: 'Confit framboise',
        items: [
          { name: 'Purée framboise', quantity: 200, unit: 'g' },
          { name: 'Sucre', quantity: 40, unit: 'g' },
          { name: 'Pectine NH', quantity: 4, unit: 'g' },
          { name: 'Jus de citron vert', quantity: 10, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Macaronnage',
        description:
          'Mixer poudre d’amande et sucre glace, ajouter blancs crus et colorant. Réaliser meringue italienne à 118 °C, incorporer délicatement jusqu’à ruban.',
      },
      {
        title: 'Pocher et croûter',
        description:
          'Pocher sur tapis, tapoter, laisser croûter 30 min.',
      },
      {
        title: 'Cuisson',
        description:
          'Cuire 14 min à 145 °C chaleur tournante, laisser refroidir.',
      },
      {
        title: 'Ganache montée',
        description:
          'Hydrater gélatine, chauffer purées et crème (1), verser sur chocolat, mixer, ajouter crème (2), maturer 12 h au froid puis monter.',
      },
      {
        title: 'Confit',
        description:
          'Chauffer purée, ajouter sucre mélangé à pectine, cuire 2 min, refroidir.',
      },
      {
        title: 'Garnissage',
        description:
          'Pocher anneau de ganache, cœur de confit, refermer. Maturer 24 h au froid.',
      },
    ],
    tips: [
      'Utiliser des blancs vieillis 48 h pour une meringue stable.',
      'Cuire en chaleur tournante douce pour éviter les fissures.',
      'Congeler garnis puis décongeler 12 h au frais pour une texture optimale.',
    ],
    storage: 'Conserver 4 jours à 4 °C. Congélation possible 2 mois en boîte hermétique.',
  },
  {
    id: 'entremets-trois-chocolats',
    name: 'Entremets Trois Chocolats Équilibrés',
    baseServings: 10,
    preparationTime: '2 h',
    totalTime: '12 h',
    difficulty: 'Avancé',
    summary: 'Biscuit cacao, mousses chocolat noir, lait et ivoire, glaçage miroir velours.',
    keywords: ['entremets', 'chocolat', 'pâtisserie'],
    equipment: [
      'Robot pâtissier',
      'Cadre inox 20 cm',
      'Mixeur plongeant',
      'Pistolet à flocage (option)',
    ],
    ingredients: [
      {
        section: 'Biscuit cacao sans farine',
        items: [
          { name: 'Blancs d’œufs', quantity: 200, unit: 'g' },
          { name: 'Sucre', quantity: 100, unit: 'g' },
          { name: 'Poudre d’amande', quantity: 80, unit: 'g' },
          { name: 'Cacao poudre', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Mousse chocolat noir',
        items: [
          { name: 'Chocolat noir 66 %', quantity: 200, unit: 'g' },
          { name: 'Crème anglaise', quantity: 220, unit: 'g' },
          { name: 'Crème montée', quantity: 200, unit: 'g' },
          { name: 'Gélatine', quantity: 4, unit: 'g' },
        ],
      },
      {
        section: 'Mousse chocolat lait',
        items: [
          { name: 'Chocolat lait 40 %', quantity: 200, unit: 'g' },
          { name: 'Crème anglaise', quantity: 220, unit: 'g' },
          { name: 'Crème montée', quantity: 200, unit: 'g' },
          { name: 'Gélatine', quantity: 4, unit: 'g' },
        ],
      },
      {
        section: 'Mousse chocolat blanc',
        items: [
          { name: 'Chocolat blanc 34 %', quantity: 200, unit: 'g' },
          { name: 'Crème anglaise', quantity: 220, unit: 'g' },
          { name: 'Crème montée', quantity: 200, unit: 'g' },
          { name: 'Gélatine', quantity: 4, unit: 'g' },
        ],
      },
      {
        section: 'Glaçage miroir noir',
        items: [
          { name: 'Eau', quantity: 150, unit: 'g' },
          { name: 'Sucre', quantity: 300, unit: 'g' },
          { name: 'Glucose', quantity: 300, unit: 'g' },
          { name: 'Cacao poudre', quantity: 100, unit: 'g' },
          { name: 'Crème 35 %', quantity: 200, unit: 'g' },
          { name: 'Gélatine', quantity: 12, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Biscuit',
        description:
          'Monter blancs et sucre, incorporer poudre d’amande et cacao, cuire 12 min à 180 °C. Détailler disque.',
      },
      {
        title: 'Mousses',
        description:
          'Pour chaque mousse : hydrater gélatine, réaliser crème anglaise à 82 °C, verser sur chocolat, mixer, refroidir à 35 °C, incorporer crème montée.',
      },
      {
        title: 'Montage',
        description:
          'Chemiser cadre, couler mousse noire, bloquer, ajouter mousse lait, puis mousse blanche, poser biscuit, surgeler.',
      },
      {
        title: 'Glaçage',
        description:
          'Mixer glaçage à 32 °C et napper entremets gelé ou flocker au pistolet.',
      },
    ],
    tips: [
      'Respecter les températures pour éviter la fonte des mousses.',
      'Utiliser du chocolat de couverture pour une texture lisse.',
      'Surgeler minimum 6 h avant glaçage.',
    ],
    storage: 'Conserver 48 h au réfrigérateur après décongélation. Congélation 1 mois.',
  },
  {
    id: 'tarte-tatin',
    name: 'Tarte Tatin Caramélisée Beurre Salé',
    baseServings: 8,
    preparationTime: '45 min',
    totalTime: '3 h',
    difficulty: 'Intermédiaire',
    summary: 'Pommes fondantes caramélisées, pâte feuilletée inversée croustillante.',
    keywords: ['pâtisserie', 'tarte tatin', 'caramel'],
    equipment: [
      'Poêle ou moule tatin',
      'Spatule',
      'Four',
    ],
    ingredients: [
      {
        section: 'Garniture',
        items: [
          { name: 'Pommes Reine des Reinettes', quantity: 1.2, unit: 'kg' },
          { name: 'Sucre', quantity: 150, unit: 'g' },
          { name: 'Beurre demi-sel', quantity: 120, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 1, unit: 'pièce' },
        ],
      },
      {
        section: 'Pâte',
        items: [{ name: 'Pâte feuilletée inversée', quantity: 350, unit: 'g' }],
      },
    ],
    steps: [
      {
        title: 'Caramel',
        description:
          'Cuire sucre à sec jusqu’à caramel blond, ajouter beurre et vanille, napper le moule.',
      },
      {
        title: 'Montage',
        description:
          'Disposer pommes pelées en rosace, cuire 25 min sur feu doux pour confire.',
      },
      {
        title: 'Cuisson',
        description:
          'Recouvrir de pâte, cuire 30 min à 190 °C. Reposer 10 min puis retourner.',
      },
    ],
    tips: [
      'Utiliser des pommes acidulées pour éviter l’écœurement.',
      'Précuire les pommes pour limiter le jus.',
      'Servir tiède avec crème crue.',
    ],
    storage: 'Conserver 24 h au frais, réchauffer 10 min à 160 °C avant service.',
  },
  {
    id: 'galette-rois',
    name: 'Galette des Rois Frangipane Tradition',
    baseServings: 10,
    preparationTime: '1 h',
    totalTime: '4 h',
    difficulty: 'Intermédiaire',
    summary: 'Feuilletage inversé, crème frangipane amande-rhum, décor rosace classique.',
    keywords: ['pâtisserie', 'galette des rois', 'frangipane'],
    equipment: [
      'Laminoir',
      'Cercle 26 cm',
      'Pince à ourler',
    ],
    ingredients: [
      {
        section: 'Crème d’amande',
        items: [
          { name: 'Beurre pommade', quantity: 150, unit: 'g' },
          { name: 'Sucre glace', quantity: 150, unit: 'g' },
          { name: 'Poudre d’amande', quantity: 150, unit: 'g' },
          { name: 'Œufs entiers', quantity: 150, unit: 'g' },
          { name: 'Rhum ambré', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Crème pâtissière',
        items: [
          { name: 'Lait entier', quantity: 250, unit: 'g' },
          { name: 'Jaune', quantity: 40, unit: 'g' },
          { name: 'Sucre', quantity: 40, unit: 'g' },
          { name: 'Maïzena', quantity: 25, unit: 'g' },
          { name: 'Vanille', quantity: 1, unit: 'gousse' },
        ],
      },
      {
        section: 'Montage',
        items: [
          { name: 'Pâte feuilletée inversée', quantity: 700, unit: 'g' },
          { name: 'Fève', quantity: 1, unit: 'pièce' },
          { name: 'Dorure œuf', quantity: 1, unit: 'QS' },
          { name: 'Sirop 30°B', quantity: 30, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Frangipane',
        description:
          'Mélanger crème d’amande et crème pâtissière froide. Garnir poche.',
      },
      {
        title: 'Montage',
        description:
          'Détailler deux disques, pocher frangipane en spirale, insérer fève, humidifier bord, refermer et chiqueter.',
      },
      {
        title: 'Décor et cuisson',
        description:
          'Dorer deux fois, dessiner rosace, cuire 45 min à 175 °C. Napper de sirop à la sortie.',
      },
    ],
    tips: [
      'Bloquer la galette 30 min au froid avant cuisson pour fixer les couches.',
      'Percer une cheminée centrale pour évacuer la vapeur.',
      'Ajouter 50 g de crème pâtissière supplémentaire pour une texture plus fondante.',
    ],
    storage: 'Conserver 48 h à température ambiante sous cloche. Réchauffer 10 min à 160 °C.',
  },
  {
    id: 'pain-burger',
    name: 'Pains Burger Briochés Sésame',
    baseServings: 10,
    preparationTime: '30 min',
    totalTime: '4 h',
    difficulty: 'Facile',
    summary: 'Buns moelleux à mie filante, parfaits pour burgers gastronomiques.',
    keywords: ['pain', 'burger', 'boulangerie'],
    equipment: [
      'Robot pâtissier',
      'Plaques de cuisson',
      'Pinceau de dorure',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de gruau T45', quantity: 500, unit: 'g' },
          { name: 'Lait entier', quantity: 220, unit: 'g' },
          { name: 'Eau', quantity: 60, unit: 'g' },
          { name: 'Œuf entier', quantity: 50, unit: 'g' },
          { name: 'Sucre', quantity: 40, unit: 'g' },
          { name: 'Sel', quantity: 10, unit: 'g' },
          { name: 'Levure fraîche', quantity: 18, unit: 'g' },
          { name: 'Beurre doux', quantity: 60, unit: 'g' },
        ],
      },
      {
        section: 'Dorure et graines',
        items: [
          { name: 'Œuf battu', quantity: 1, unit: 'pièce' },
          { name: 'Graines de sésame', quantity: 20, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, liquides, sucre, levure 5 min vitesse 1. Ajouter sel puis beurre, pétrir 8 min vitesse 2.',
      },
      {
        title: 'Pointage',
        description:
          'Laisser lever 1 h 30 à 26 °C, rabattre.',
      },
      {
        title: 'Façonnage',
        description:
          'Diviser en boules de 80 g, bouler serré, déposer sur plaque, aplatir légèrement.',
      },
      {
        title: 'Apprêt et cuisson',
        description:
          'Apprêt 1 h, dorer, parsemer sésame, cuire 15 min à 190 °C.',
      },
    ],
    tips: [
      'Vaporiser d’eau avant cuisson pour une croûte brillante.',
      'Ajouter 30 g de purée de pomme de terre pour un moelleux accru.',
      'Congeler après cuisson pour stock tampon.',
    ],
    storage: 'Conserver 48 h emballés. Congélation possible 1 mois.',
  },
  {
    id: 'bagel-newyork',
    name: 'Bagels New-Yorkais Fermentation Froide',
    baseServings: 12,
    preparationTime: '40 min',
    totalTime: '24 h',
    difficulty: 'Intermédiaire',
    summary: 'Bagels authentiques pochés au miel, mie dense et mastication idéale.',
    keywords: ['pain', 'bagel', 'boulangerie'],
    equipment: [
      'Robot pâtissier',
      'Casserole large',
      'Plaque perforée',
    ],
    ingredients: [
      {
        section: 'Pâte',
        items: [
          { name: 'Farine de blé T65', quantity: 700, unit: 'g' },
          { name: 'Eau à 25 °C', quantity: 420, unit: 'g' },
          { name: 'Levure fraîche', quantity: 20, unit: 'g' },
          { name: 'Sel', quantity: 14, unit: 'g' },
          { name: 'Sucre', quantity: 40, unit: 'g' },
          { name: 'Huile de tournesol', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Pochage',
        items: [
          { name: 'Eau', quantity: 4, unit: 'l' },
          { name: 'Miel', quantity: 80, unit: 'g' },
          { name: 'Bicarbonate', quantity: 10, unit: 'g' },
        ],
      },
      {
        section: 'Finition',
        items: [
          { name: 'Graines variées (sésame, pavot)', quantity: 40, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Pétrissage',
        description:
          'Pétrir 5 min vitesse 1 puis 6 min vitesse 2 jusqu’à pâte ferme à 25 °C.',
      },
      {
        title: 'Fermentation froide',
        description:
          'Pointage 30 min, bouler, reposer 10 min, façonner bagels, placer 12 h au froid.',
      },
      {
        title: 'Pochage',
        description:
          'Pocher 45 s de chaque côté dans eau miel/bicarbonate, égoutter.',
      },
      {
        title: 'Cuisson',
        description:
          'Cuire 18 min à 220 °C sur plaque huilée.',
      },
    ],
    tips: [
      'La pâte doit être ferme pour conserver le trou central.',
      'Utiliser un bain légèrement sucré pour accentuer la coloration.',
      'Cuire sur pierre pour plus de croustillant.',
    ],
    storage: 'Conserver 48 h emballé. Congélation possible 1 mois.',
  },
  {
    id: 'pain-mie-hokkaido',
    name: 'Pain de Mie Hokkaido Tangzhong',
    baseServings: 2,
    preparationTime: '30 min',
    totalTime: '8 h',
    difficulty: 'Intermédiaire',
    summary: 'Pain de mie japonais ultra moelleux grâce à la méthode tangzhong.',
    keywords: ['pain de mie', 'tangzhong', 'boulangerie'],
    equipment: [
      'Robot pâtissier',
      'Thermomètre',
      'Moule à pain de mie avec couvercle',
    ],
    ingredients: [
      {
        section: 'Tangzhong',
        items: [
          { name: 'Lait', quantity: 100, unit: 'g' },
          { name: 'Eau', quantity: 20, unit: 'g' },
          { name: 'Farine T45', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Pâte',
        items: [
          { name: 'Farine T45', quantity: 450, unit: 'g' },
          { name: 'Sucre', quantity: 50, unit: 'g' },
          { name: 'Sel', quantity: 8, unit: 'g' },
          { name: 'Levure fraîche', quantity: 12, unit: 'g' },
          { name: 'Lait entier', quantity: 180, unit: 'g' },
          { name: 'Crème liquide 30 %', quantity: 60, unit: 'g' },
          { name: 'Beurre doux', quantity: 45, unit: 'g' },
          { name: 'Tangzhong', quantity: 140, unit: 'g' },
        ],
      },
      {
        section: 'Dorure',
        items: [{ name: 'Lait', quantity: 20, unit: 'g' }],
      },
    ],
    steps: [
      {
        title: 'Tangzhong',
        description:
          'Cuire lait, eau et farine à 65 °C en fouettant. Refroidir à 25 °C.',
      },
      {
        title: 'Pétrissage',
        description:
          'Mélanger farine, sucre, sel, levure, tangzhong, lait et crème 4 min vitesse 1, puis 6 min vitesse 2. Ajouter beurre en fin.',
      },
      {
        title: 'Fermentation',
        description:
          'Pointage 1 h à 27 °C, rabattre, reposer 30 min au froid.',
      },
      {
        title: 'Façonnage',
        description:
          'Diviser en 3 pâtons, bouler, étaler en ovales, rouler serré, placer dans moule.',
      },
      {
        title: 'Apprêt et cuisson',
        description:
          'Laisser pousser jusqu’à 1 cm du bord (1 h 30), couvrir, cuire 30 min à 190 °C. Démouler aussitôt.',
      },
    ],
    tips: [
      'Le tangzhong peut se préparer 12 h à l’avance.',
      'Ne pas dépasser 26 °C de pâte pour conserver la texture filante.',
      'Badigeonner de beurre fondu à la sortie pour une croûte souple.',
    ],
    storage: 'Conserver 72 h emballé. Congélation possible en tranches.',
  },
  {
    id: 'flan-parisien',
    name: 'Flan Pâtissier Vanille Bourbon',
    baseServings: 10,
    preparationTime: '25 min',
    totalTime: '4 h',
    difficulty: 'Facile',
    summary: 'Flan crémeux à base de pâte brisée croustillante et appareil vanillé.',
    keywords: ['pâtisserie', 'flan', 'vanille'],
    equipment: [
      'Robot pâtissier',
      'Cercle 22 cm haut',
      'Mixeur plongeant',
    ],
    ingredients: [
      {
        section: 'Pâte brisée',
        items: [
          { name: 'Farine T55', quantity: 250, unit: 'g' },
          { name: 'Beurre demi-sel', quantity: 125, unit: 'g' },
          { name: 'Eau froide', quantity: 60, unit: 'g' },
          { name: 'Sucre', quantity: 20, unit: 'g' },
        ],
      },
      {
        section: 'Appareil à flan',
        items: [
          { name: 'Lait entier', quantity: 750, unit: 'g' },
          { name: 'Crème 35 %', quantity: 250, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 2, unit: 'pièces' },
          { name: 'Œufs entiers', quantity: 200, unit: 'g' },
          { name: 'Jaunes', quantity: 80, unit: 'g' },
          { name: 'Sucre', quantity: 180, unit: 'g' },
          { name: 'Maïzena', quantity: 120, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Fonçage',
        description:
          'Réaliser pâte brisée, foncer cercle chemisé, cuire 10 min à blanc à 180 °C.',
      },
      {
        title: 'Appareil',
        description:
          'Chauffer lait, crème, vanille. Blanchir œufs, jaunes, sucre, maïzena. Verser liquide bouillant, cuire 2 min à ébullition, mixer.',
      },
      {
        title: 'Cuisson',
        description:
          'Verser appareil, cuire 55 min à 170 °C. Refroidir 3 h avant découpe.',
      },
    ],
    tips: [
      'Mixer l’appareil assure une texture satinée.',
      'Cuire sur plaque perforée pour une base croustillante.',
      'Flamber légèrement au chalumeau pour accentuer la couleur.',
    ],
    storage: 'Conserver 48 h au frais. Servir à 8-10 °C.',
  },
  {
    id: 'canele-bordelais',
    name: 'Canelés Bordelais Tradition',
    baseServings: 24,
    preparationTime: '20 min',
    totalTime: '48 h',
    difficulty: 'Intermédiaire',
    summary: 'Intérieur moelleux, extérieur caramélisé grâce à la cuisson cuivre et cire.',
    keywords: ['pâtisserie', 'canelé', 'bordelais'],
    equipment: [
      'Casserole',
      'Moules cuivre cannelés',
      'Balance de précision',
    ],
    ingredients: [
      {
        section: 'Appareil',
        items: [
          { name: 'Lait entier', quantity: 1, unit: 'l' },
          { name: 'Beurre demi-sel', quantity: 50, unit: 'g' },
          { name: 'Gousse de vanille', quantity: 1, unit: 'pièce' },
          { name: 'Œufs entiers', quantity: 100, unit: 'g' },
          { name: 'Jaunes', quantity: 120, unit: 'g' },
          { name: 'Sucre', quantity: 250, unit: 'g' },
          { name: 'Farine T55', quantity: 125, unit: 'g' },
          { name: 'Rhum brun', quantity: 60, unit: 'g' },
        ],
      },
      {
        section: 'Préparation des moules',
        items: [
          { name: 'Cire d’abeille', quantity: 50, unit: 'g' },
          { name: 'Beurre', quantity: 50, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Appareil',
        description:
          'Chauffer lait, vanille, beurre. Mélanger œufs, jaunes, sucre, farine. Verser lait chaud, ajouter rhum. Reposer 24 h au frais.',
      },
      {
        title: 'Préparation moules',
        description:
          'Fondre cire et beurre, chemiser moules chauds, égoutter.',
      },
      {
        title: 'Cuisson',
        description:
          'Remplir moules, cuire 15 min à 250 °C puis 45 min à 190 °C.',
      },
    ],
    tips: [
      'Laisser maturer l’appareil 24 à 48 h pour un développement aromatique.',
      'Ne pas graisser excessivement pour éviter les bulles.',
      'Démouler à chaud pour garder le croustillant.',
    ],
    storage: 'Déguster le jour même. Réchauffer 5 min à 200 °C pour croustillant.',
  },
  {
    id: 'madeleine-miel',
    name: 'Madeleines Miel & Citron',
    baseServings: 24,
    preparationTime: '15 min',
    totalTime: '4 h',
    difficulty: 'Facile',
    summary: 'Madeleines bosselées moelleuses, parfumées au miel d’acacia et citron.',
    keywords: ['pâtisserie', 'madeleine', 'goûter'],
    equipment: [
      'Robot pâtissier ou fouet',
      'Plaques à madeleines antiadhésives',
      'Réfrigérateur',
    ],
    ingredients: [
      {
        section: 'Appareil',
        items: [
          { name: 'Farine T55', quantity: 200, unit: 'g' },
          { name: 'Sucre', quantity: 150, unit: 'g' },
          { name: 'Levure chimique', quantity: 8, unit: 'g' },
          { name: 'Beurre noisette', quantity: 150, unit: 'g' },
          { name: 'Œufs entiers', quantity: 200, unit: 'g' },
          { name: 'Miel d’acacia', quantity: 40, unit: 'g' },
          { name: 'Zestes de citron', quantity: 1, unit: 'pièce' },
          { name: 'Sel fin', quantity: 2, unit: 'g' },
        ],
      },
    ],
    steps: [
      {
        title: 'Appareil',
        description:
          'Mélanger œufs, sucre, miel. Ajouter farine, levure, sel, puis beurre noisette et zestes. Reposer 2 h au froid.',
      },
      {
        title: 'Cuisson',
        description:
          'Pocher 20 g par moule, cuire 4 min à 220 °C puis 6 min à 190 °C.',
      },
    ],
    tips: [
      'Utiliser des moules bien beurrés et farinés pour une belle caramélisation.',
      'Choquer la plaque sur plan de travail pour éliminer les bulles.',
      'Congeler la pâte crue en poches pour cuisson minute.',
    ],
    storage: 'Conserver 3 jours dans boîte hermétique. Réchauffer 2 min à 160 °C.',
  },
];

export default recipes;
