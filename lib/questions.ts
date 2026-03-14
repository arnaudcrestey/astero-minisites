export type QuizType = "celibataire" | "couple";

export type Question = {
  id: number;
  question: string;
  answers: string[];
};

export const SCORE_MAP = [10, 6, 2] as const;

export const questionsByType: Record<QuizType, Question[]> = {

  celibataire: [
    {
      id: 1,
      question: "Quand je rencontre quelqu’un qui me plaît…",
      answers: [
        "Je prends le temps de découvrir réellement la personne.",
        "Je me laisse porter par l’élan du moment.",
        "Je m’attache très vite."
      ]
    },
    {
      id: 2,
      question: "Dans mes relations passées…",
      answers: [
        "J’ai appris beaucoup sur moi-même.",
        "Certaines situations restent floues pour moi.",
        "J’ai souvent l’impression de répéter les mêmes erreurs."
      ]
    },
    {
      id: 3,
      question: "Quand une relation commence à devenir sérieuse…",
      answers: [
        "Je communique clairement mes attentes.",
        "J’observe avant de m’engager davantage.",
        "Je préfère éviter les discussions trop profondes."
      ]
    },
    {
      id: 4,
      question: "Face à l’idée de m’engager…",
      answers: [
        "Je me sens prêt(e) à construire quelque chose.",
        "Je ressens parfois une hésitation.",
        "Je préfère garder mes distances."
      ]
    },
    {
      id: 5,
      question: "Quand une relation se termine…",
      answers: [
        "Je prends du recul pour comprendre ce qui s’est joué.",
        "Je mets du temps à tourner la page.",
        "Je préfère ne pas trop y repenser."
      ]
    },
    {
      id: 6,
      question: "Dans une relation idéale…",
      answers: [
        "La confiance et la communication sont centrales.",
        "L’attirance et l’émotion comptent beaucoup.",
        "Je préfère rester libre et indépendant."
      ]
    },
    {
      id: 7,
      question: "Quand quelqu’un me montre de l’intérêt…",
      answers: [
        "Je reste authentique et naturel(le).",
        "Je prends le temps d’observer ses intentions.",
        "Je doute souvent de la sincérité."
      ]
    },
    {
      id: 8,
      question: "Dans mes relations sentimentales…",
      answers: [
        "Je cherche un équilibre entre autonomie et proximité.",
        "Je m’adapte beaucoup à l’autre.",
        "Je protège fortement mon indépendance."
      ]
    },
    {
      id: 9,
      question: "Quand une difficulté apparaît dans une relation…",
      answers: [
        "Je préfère en parler ouvertement.",
        "Je laisse le temps calmer les choses.",
        "J’évite le conflit autant que possible."
      ]
    },
    {
      id: 10,
      question: "Aujourd’hui, dans ma vie amoureuse…",
      answers: [
        "Je sais mieux ce que je veux construire.",
        "Je suis encore en train de comprendre ce qui me correspond.",
        "Je préfère ne pas trop me projeter."
      ]
    }
  ],

  couple: [
    {
      id: 1,
      question: "Dans notre relation…",
      answers: [
        "Nous prenons le temps de vraiment nous écouter.",
        "Nous échangeons surtout quand c’est nécessaire.",
        "Certaines choses restent difficiles à dire."
      ]
    },
    {
      id: 2,
      question: "Quand un désaccord apparaît…",
      answers: [
        "Nous essayons de comprendre le point de vue de l’autre.",
        "Nous laissons passer un peu de temps.",
        "Les tensions peuvent rester longtemps."
      ]
    },
    {
      id: 3,
      question: "Dans notre quotidien…",
      answers: [
        "Nous faisons équipe face aux difficultés.",
        "Chacun gère surtout de son côté.",
        "Nous avons parfois du mal à nous accorder."
      ]
    },
    {
      id: 4,
      question: "Notre relation évolue…",
      answers: [
        "Avec des projets et une vision commune.",
        "Au fil des événements.",
        "Sans vraiment savoir où nous allons."
      ]
    },
    {
      id: 5,
      question: "Dans les moments difficiles…",
      answers: [
        "Nous nous soutenons mutuellement.",
        "Chacun cherche son équilibre.",
        "Je me sens parfois seul(e)."
      ]
    },
    {
      id: 6,
      question: "La communication entre nous est…",
      answers: [
        "Ouverte et sincère.",
        "Variable selon les périodes.",
        "Parfois compliquée."
      ]
    },
    {
      id: 7,
      question: "Concernant l’avenir…",
      answers: [
        "Nous partageons une vision commune.",
        "Nous avançons sans trop en parler.",
        "Nos attentes semblent différentes."
      ]
    },
    {
      id: 8,
      question: "L’intimité dans notre relation…",
      answers: [
        "Reste un espace important et entretenu.",
        "Dépend beaucoup du contexte.",
        "Est devenue plus rare."
      ]
    },
    {
      id: 9,
      question: "Dans les décisions importantes…",
      answers: [
        "Nous décidons ensemble.",
        "Nous trouvons souvent un compromis.",
        "Les décisions créent parfois des tensions."
      ]
    },
    {
      id: 10,
      question: "Globalement, notre relation…",
      answers: [
        "Nous fait grandir tous les deux.",
        "A des hauts et des bas.",
        "Manque parfois d’équilibre."
      ]
    }
  ]
};

export const MAX_SCORE = 100;
