export type QuizType = "celibataire" | "couple";

export type Question = {
  id: number;
  question: string;
  answers: string[];
};

export const SCORE_MAP = [10, 6, 2] as const;

const baseAnswers = [
  "Souvent",
  "Parfois",
  "Rarement"
];

export const questionsByType: Record<QuizType, Question[]> = {

  celibataire: [
    "Dans mes relations passées, j’ai souvent reproduit les mêmes schémas.",
    "Je prends le temps d’observer une personne avant de m’attacher.",
    "Je communique clairement mes attentes émotionnelles.",
    "Je ressens parfois de la peur à l’idée de trop m’investir.",
    "Je me sens légitime d’être aimé(e) tel(le) que je suis.",
    "Je remarque rapidement quand une relation devient déséquilibrée.",
    "Je suis attiré(e) par des personnes émotionnellement disponibles.",
    "Je garde un équilibre entre ma vie personnelle et mes relations.",
    "Je me relève facilement après une déception sentimentale.",
    "Je prends conscience de ce que chaque relation m’apprend."
  ].map((question, index) => ({
    id: index + 1,
    question,
    answers: baseAnswers
  })),

  couple: [
    "Dans notre relation, nous prenons le temps de vraiment nous écouter.",
    "Nous arrivons à exprimer nos frustrations sans blesser l’autre.",
    "Nous faisons équipe face aux difficultés du quotidien.",
    "Nous trouvons régulièrement des moments de qualité ensemble.",
    "Après un conflit, nous arrivons à nous rapprocher rapidement.",
    "Je me sens émotionnellement soutenu(e) dans cette relation.",
    "Nous pouvons parler librement de notre avenir.",
    "Nous respectons les différences de l’autre.",
    "Nous entretenons notre intimité avec attention.",
    "La confiance entre nous reste solide même dans les moments difficiles."
  ].map((question, index) => ({
    id: index + 1,
    question,
    answers: baseAnswers
  }))

};

export const MAX_SCORE = 100;
