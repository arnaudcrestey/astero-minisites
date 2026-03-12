import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      firstName,
      email,
      birthDate,
      birthTime,
      birthPlace
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Cabinet Astrae" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Votre première lecture Astrae",
      html: `
        <h2>Bonjour ${firstName},</h2>
        <p>Merci pour votre demande.</p>

        <p>Votre première lecture personnalisée sera envoyée prochainement.</p>

        <p><strong>Données reçues :</strong></p>

        <ul>
          <li>Date de naissance : ${birthDate}</li>
          <li>Heure de naissance : ${birthTime || "Non précisée"}</li>
          <li>Lieu de naissance : ${birthPlace}</li>
        </ul>

        <p>Cabinet Astrae</p>
      `
    });

    return NextResponse.json({
      success: true
    });

  } catch (error) {

    console.error("Erreur envoi mail :", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }

}
