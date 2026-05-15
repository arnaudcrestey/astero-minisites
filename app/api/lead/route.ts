import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ ok: true, route: "lead GET OK" });
}

export async function POST(req: Request) {
  try {
    console.log("LOVE SCAN /api/lead - START");

    const body = await req.json();
    console.log("LOVE SCAN /api/lead - BODY RECEIVED", {
      firstName: body?.firstName,
      email: body?.email,
      score: body?.score,
      profile: body?.profile,
    });

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
      console.error("LOVE SCAN /api/lead - MISSING REQUIRED FIELDS");

      return NextResponse.json(
        { success: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      leadEmail: process.env.LEAD_EMAIL,
      hasPassword: Boolean(process.env.SMTP_PASS),
    };

    console.log("LOVE SCAN /api/lead - SMTP CONFIG", smtpConfig);

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.LEAD_EMAIL
    ) {
      console.error("LOVE SCAN /api/lead - MISSING SMTP ENV");

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

    console.log("LOVE SCAN /api/lead - BEFORE SENDMAIL");

    const info = await transporter.sendMail({
      from: `"LOVE SCAN - Cabinet Astrae" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_EMAIL,
      replyTo: email,
      subject: "Nouveau lead LOVE SCAN",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111;max-width:640px;margin:0 auto;padding:24px;">
          <h2>Nouveau lead LOVE SCAN</h2>
          <p>Un utilisateur vient de compléter le diagnostic.</p>

          <hr />

          <h3>Informations</h3>
          <p><strong>Prénom :</strong> ${firstName}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>

          <hr />

          <h3>Résultat</h3>
          <p><strong>Score relationnel :</strong> ${safeScore}%</p>
          <p><strong>Profil détecté :</strong> ${safeProfile}</p>

          <hr />

          <h3>Données personnelles</h3>
          <ul>
            <li><strong>Date de naissance :</strong> ${safeBirthDate}</li>
            <li><strong>Heure de naissance :</strong> ${safeBirthTime}</li>
            <li><strong>Ville de naissance :</strong> ${safeBirthPlace}</li>
          </ul>
        </div>
      `,
    });

    console.log("LOVE SCAN /api/lead - MAIL SENT", {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    });
  } catch (error: any) {
    console.error("LOVE SCAN /api/lead - ERROR", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      response: error?.response,
      stack: error?.stack,
    });

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Erreur serveur.",
        code: error?.code || null,
        response: error?.response || null,
      },
      { status: 500 }
    );
  }
}
