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
      birthPlace,
      score
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({

      from: `"LOVE SCAN - Cabinet Astrae" <${process.env.EMAIL_USER}>`,

      to: "arnaud.crestey14@gmail.com",

      subject: "Nouveau lead LOVE SCAN",

      html: `
        <h2>Nouveau lead LOVE SCAN</h2>

        <p><strong>Score relationnel :</strong> ${score}%</p>

        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Email :</strong> ${email}</p>

        <h3>Données astrologiques</h3>

        <ul>
          <li><strong>Date de naissance :</strong> ${birthDate}</li>
          <li><strong>Heure de naissance :</strong> ${birthTime || "Non précisée"}</li>
          <li><strong>Lieu de naissance :</strong> ${birthPlace}</li>
        </ul>

        <p>Demande envoyée depuis l'outil <strong>LOVE SCAN</strong>.</p>
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
