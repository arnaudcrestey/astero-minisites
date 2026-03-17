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
      score,
      profile
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

      subject: " Nouveau lead LOVE SCAN",

      html: `
        <h2> Nouveau lead LOVE SCAN</h2>
        <p>Un utilisateur vient de compléter le diagnostic.</p>

        <hr/>

        <h3>👤 Informations</h3>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>

        <hr/>

        <h3>📊 Résultat</h3>
        <p><strong>Score relationnel :</strong> ${score}%</p>
        <p><strong>Profil détecté :</strong> ${profile || "Non défini"}</p>

        <hr/>

        <h3>🪐 Données personnelles</h3>
        <ul>
          <li><strong>Date de naissance :</strong> ${birthDate}</li>
          <li><strong>Heure :</strong> ${birthTime || "Non précisée"}</li>
          <li><strong>Lieu :</strong> ${birthPlace}</li>
        </ul>

        <hr/>

        <p style="margin-top:20px;">
          🔗 <strong>Action :</strong> 
          <a href="mailto:${email}" style="background:#06b6d4;color:white;padding:10px 15px;border-radius:8px;text-decoration:none;">
            Contacter ce lead
          </a>
        </p>

        <p style="margin-top:20px;font-size:12px;color:#888;">
          Lead généré automatiquement via LOVE SCAN — Cabinet Astrae
        </p>
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
