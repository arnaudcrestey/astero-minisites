import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { answers, profile, score } = body;

    console.log("Score relationnel reçu :", score);

    const prompt = `
Vous êtes un expert en dynamique amoureuse et en psychologie des relations.

Votre mission est de fournir une analyse claire, crédible et utile
à partir d’un diagnostic basé sur 10 questions concernant la manière d'aimer.

IMPORTANT
Le score relationnel exact de cette personne est : ${score}%.
Ce score est calculé par le système et doit être repris exactement dans votre analyse.

Profil détecté : ${profile}

Réponses au questionnaire :
${JSON.stringify(answers)}

RÈGLES IMPORTANTES

- Adressez-vous directement à la personne en utilisant "vous".
- Ne parlez jamais de "la personne".
- Le score doit apparaître exactement sous la forme : ${score}%.
- Le texte doit rester naturel, crédible et facile à lire.
- Maximum : 60 à 80 mots.
- Évitez un ton moralisateur ou trop psychologique.

OBJECTIF

Aider l’utilisateur à comprendre rapidement :

- sa posture relationnelle actuelle
- ses forces dans la manière d'aimer
- les dynamiques qui peuvent freiner ses relations

STRUCTURE OBLIGATOIRE

Analyse

Rédigez un court paragraphe expliquant ce que signifie un score de ${score}% dans la manière d'aimer.

Recommandations

Proposez 3 recommandations concrètes permettant d'améliorer la qualité des relations.

1.
2.
3.

Conclusion

Terminez par une phrase ouvrant sur une réflexion plus profonde.

Expliquez que certaines dynamiques relationnelles peuvent être liées à :

- la personnalité
- l'histoire affective
- les cycles de vie
- les besoins émotionnels

Mentionnez que le Cabinet Astrae propose une analyse plus approfondie
pour explorer ces mécanismes, notamment grâce à l’étude du thème astral.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7
    });

    const analysis =
      completion.choices?.[0]?.message?.content ?? "Analyse indisponible.";

    return Response.json({ analysis });

  } catch (error) {

    console.error("OpenAI error:", error);

    return Response.json(
      { analysis: "Impossible de générer l'analyse pour le moment." },
      { status: 500 }
    );

  }

}
