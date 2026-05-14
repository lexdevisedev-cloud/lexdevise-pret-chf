import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Adresse IONOS qui reçoit l'email (et le redirige ensuite depuis IONOS)
const TO_EMAIL = process.env.SMTP_TO_EMAIL ?? "contact@lexdevise.com";
// Adresse IONOS utilisée comme expéditeur (doit correspondre au compte SMTP)
const FROM_EMAIL = process.env.SMTP_FROM_EMAIL ?? "noreply@pretschfinfo.fr";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(v: string): boolean {
  return EMAIL_REGEX.test(v.trim());
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.ionos.fr",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true", // false pour port 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const {
    nom,
    email,
    telephone,
    banque,
    dateDebut,
    montantCredit,
    duree,
    consentement,
    estimation,
    company, // honeypot
  } = body as Record<string, string | boolean | number>;

  // Honeypot — rejet silencieux
  if (company) {
    return NextResponse.json({ success: true });
  }

  // Validation serveur
  const errors: string[] = [];
  if (!nom || String(nom).trim() === "") errors.push("Nom manquant.");
  if (!email || !isValidEmail(String(email))) errors.push("Email invalide.");
  if (!telephone || String(telephone).trim() === "") errors.push("Téléphone manquant.");
  if (!banque || String(banque).trim() === "") errors.push("Banque manquante.");
  if (!dateDebut || String(dateDebut).trim() === "") errors.push("Date de début manquante.");
  const montant = Number(montantCredit);
  if (!montantCredit || isNaN(montant) || montant <= 0) errors.push("Montant invalide.");
  const dureeNum = Number(duree);
  if (!duree || isNaN(dureeNum) || dureeNum <= 0) errors.push("Durée invalide.");
  if (consentement !== true) errors.push("Consentement RGPD requis.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[simulation-lead] SMTP_USER ou SMTP_PASS non définis — email non envoyé.");
    return NextResponse.json({ success: true, warning: "Email non envoyé (config serveur)." });
  }

  const dateHeure = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "long",
    timeStyle: "short",
  });

  const htmlBody = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouvelle simulation prêt CHF</title></head>
<body style="font-family:Arial,sans-serif;background:#f6f8f7;padding:32px 16px;color:#10201a;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #dce7e1;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#123d2e,#1a5c42);padding:28px 32px;">
      <h1 style="color:#fff;font-size:22px;margin:0;">Nouvelle simulation prêt CHF</h1>
      <p style="color:rgba(255,255,255,0.78);font-size:14px;margin:8px 0 0;">Via pretschfinfo.fr/simulation</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;width:45%;">Nom et prénom</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(nom)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Email</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(email)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(telephone)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Banque prêteuse</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(banque)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Date de début du prêt</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(dateDebut)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Montant du crédit</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${Number(montantCredit).toLocaleString("fr-FR")} €</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Durée du crédit</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${String(duree)} ans</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Estimation indicative</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;color:#123d2e;">${String(estimation)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Consentement RGPD</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">Oui</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Date de la demande</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${dateHeure}</td></tr>
        <tr><td style="padding:10px 0;color:#5f6f68;">Rapport PDF proposé</td><td style="padding:10px 0;font-weight:700;">Oui</td></tr>
      </table>
    </div>
    <div style="background:#f6f8f7;padding:16px 32px;font-size:12px;color:#8c9d95;border-top:1px solid #dce7e1;">
      Source : /simulation — Prêts CHF Info
    </div>
  </div>
</body>
</html>`;

  const textBody = `Nouvelle simulation prêt CHF — ${String(nom)}

Nom : ${String(nom)}
Email : ${String(email)}
Téléphone : ${String(telephone)}
Banque : ${String(banque)}
Date de début du prêt : ${String(dateDebut)}
Montant : ${Number(montantCredit).toLocaleString("fr-FR")} €
Durée : ${String(duree)} ans
Estimation indicative : ${String(estimation)}
Consentement RGPD : Oui
Date : ${dateHeure}
Rapport PDF proposé à l'utilisateur : Oui
Source : /simulation`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Prêts CHF Info" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: `Nouvelle simulation prêt CHF — ${String(nom)}`,
      html: htmlBody,
      text: textBody,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[simulation-lead] Erreur envoi email SMTP:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
