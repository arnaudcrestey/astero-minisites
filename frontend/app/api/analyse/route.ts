import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Tu es un conseiller spécialisé en droit du travail français. Analyse la situation et propose des pistes d'action claires et utiles pour un salarié.",
        },
        {
          role: "user",
          content: body.description,
        },
      ],
    });

    return Response.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    return Response.json({
      result: "Une erreur est survenue lors de l'analyse.",
    });
  }
}
