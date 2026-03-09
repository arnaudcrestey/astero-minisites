export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch("https://formsubmit.co/ajax/arnaud.crestey14@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "Nouvelle demande BEST",
        message: `
Nom : ${body.nom}
Prénom : ${body.prenom}
Email : ${body.email}

Description :
${body.description}
        `,
      }),
    });

    return Response.json({
      result: "Votre demande a bien été envoyée. Nous reviendrons vers vous rapidement.",
    });

  } catch (error) {
    return Response.json({
      result: "Une erreur est survenue lors de l'envoi.",
    });
  }
}
