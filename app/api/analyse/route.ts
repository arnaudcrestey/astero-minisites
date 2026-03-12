import { NextResponse } from 'next/server';
import OpenAI from 'openai';

type AnalyseRequestBody = {
  score: number;
  type: 'celibataire' | 'couple';
  answers: string;
};

const fallbackAnalysis = (score: number, type: 'celibataire' | 'couple') => {
  const context = type === 'couple' ? 'votre dynamique de couple' : 'votre posture amoureuse';

  return `Analyse\nVotre score (${score}%) révèle des forces et des zones à ajuster dans ${context}.\n\nRecommandations\n1. Clarifiez vos besoins essentiels chaque semaine.\n2. Pratiquez une communication émotionnelle simple et honnête.\n3. Posez une action concrète pour nourrir la confiance.\n\nConclusion\nVous avez une base solide pour évoluer avec plus de sérénité.`;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AnalyseRequestBody;
    const { score, type, answers } = body;

    if (typeof score !== 'number' || !['celibataire', 'couple'].includes(type)) {
      return NextResponse.json({ error: 'Paramètres invalides' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ analysis: fallbackAnalysis(score, type) });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'Tu es un coach relationnel. Réponds en français, 80 mots maximum, ton clair, empathique, orienté coaching. Structure stricte: Analyse, Recommandations (1,2,3), Conclusion.'
        },
        {
          role: 'user',
          content: `Type: ${type}. Score: ${score}%. Réponses: ${answers}. Donne une analyse utile et concrète.`
        }
      ],
      temperature: 0.7,
      max_tokens: 220
    });

    const analysis = completion.choices[0]?.message?.content?.trim() || fallbackAnalysis(score, type);

    return NextResponse.json({ analysis });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
