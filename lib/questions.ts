export type QuizType = 'celibataire' | 'couple';

export type Question = {
  id: number;
  question: string;
  answers: string[];
};

export const SCORE_MAP = [10, 6, 2] as const;

const baseAnswers = ['Souvent, cela me ressemble', 'Parfois, selon les situations', "Rarement, ce n'est pas mon cas"];

export const questionsByType: Record<QuizType, Question[]> = {
  celibataire: [
    'Je répète des schémas relationnels qui me frustrent.',
    'Je communique clairement mes besoins émotionnels.',
    'Je choisis des partenaires alignés avec mes valeurs.',
    'Je prends du recul avant de m\'attacher rapidement.',
    'Je me sens confiant(e) dans ma valeur affective.',
    'Je sais dire non quand une relation me déséquilibre.',
    'Je comprends mes peurs autour de l\'engagement.',
    'Je garde un équilibre entre amour et projets personnels.',
    'Je me remets facilement après une déception amoureuse.',
    'Je suis prêt(e) à construire une relation saine et stable.'
  ].map((question, index) => ({ id: index + 1, question, answers: baseAnswers })),
  couple: [
    'Nous arrivons à nous écouter sans nous interrompre.',
    'Nous exprimons nos besoins sans accusation.',
    'Nous faisons équipe face au stress du quotidien.',
    'Nous partageons des moments de qualité régulièrement.',
    'Nous réparons vite après un conflit.',
    'Nous nous sentons soutenus émotionnellement.',
    'Nous parlons ouvertement de notre avenir.',
    'Nous respectons nos différences sans jugement.',
    'Nous entretenons notre intimité avec attention.',
    'Nous cultivons la confiance même dans les périodes difficiles.'
  ].map((question, index) => ({ id: index + 1, question, answers: baseAnswers }))
};

export const MAX_SCORE = 100;
