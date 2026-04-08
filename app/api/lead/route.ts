import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ ok: true, route: "lead GET OK" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      email,
      birthDay,
      birthMonth,
      birthYear,
      birthHour,
      birthMinute,
      birthPlace,
      score,
      profile,
    } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.LEAD_EMAIL
    ) {
      console.error("Missing SMTP environment variables");

      return NextResponse.json(
        { success: false, error: "Configuration e-mail incomplète." },
        { status: 500 }
      );
    }

    const safeBirthDate =
      [birthDay, birthMonth, birthYear].filter(Boolean).join("/") ||
      "Non précisée";

    const safeBirthTime =
      [birthHour, birthMinute].filter(Boolean).join(":") ||
      "Non précisée";

    const safeBirthPlace = birthPlace?.trim() || "Non précisé";
    const safeProfile = profile?.trim() || "Non défini";
    const safeScore = typeof score === "number" ? score : "Non défini";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"LOVE SCAN - Cabinet Astrae" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_EMAIL,
      replyTo: email,
      subject: "Nouveau lead LOVE SCAN",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px;">
          <h2 style="margin:0 0 16px 0;">Nouveau lead LOVE SCAN</h2>
          <p style="margin:0 0 20px 0;">Un utilisateur vient de compléter le diagnostic.</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

          <h3 style="margin:0 0 12px 0;">Informations</h3>
          <p><strong>Prénom :</strong> ${firstName}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

          <h3 style="margin:0 0 12px 0;">Résultat</h3>
          <p><strong>Score relationnel :</strong> ${safeScore}%</p>
          <p><strong>Profil détecté :</strong> ${safeProfile}</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />

          <h3 style="margin:0 0 12px 0;">Données personnelles</h3>
          <ul style="padding-left:18px;margin:0;">
            <li><strong>Date de naissance :</strong> ${safeBirthDate}</li>
            <li><strong>Heure de naissance :</strong> ${safeBirthTime}</li>
            <li><strong>Ville de naissance :</strong> ${safeBirthPlace}</li>
          </ul>

          <p style="margin-top:28px;">
            <a
              href="mailto:${email}"
              style="display:inline-block;background:#06b6d4;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:600;"
            >
              Contacter ce lead
            </a>
          </p>

          <p style="margin-top:24px;font-size:12px;color:#6b7280;">
            Lead généré automatiquement via LOVE SCAN — Cabinet Astrae
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erreur envoi mail :", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Erreur serveur.",
      },
      { status: 500 }
    );
  }
}
