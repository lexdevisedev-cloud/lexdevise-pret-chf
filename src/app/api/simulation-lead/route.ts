import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(v: string): boolean {
  return EMAIL_REGEX.test(v.trim());
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  console.log("API simulation-lead appelée");
  const resendKey = process.env.RESEND_API_KEY;
  console.log("[Resend] clé présente :", !!resendKey);
  console.log("[Resend] commence par re_ :", resendKey?.startsWith("re_"));
  console.log("[Resend] longueur :", resendKey?.length);
  console.log("RESEND_FROM_EMAIL :", process.env.RESEND_FROM_EMAIL);
  console.log("RESEND_TO_EMAIL :", process.env.RESEND_TO_EMAIL);

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
  } = body as Record<string, string | boolean | number>;

  // Honeypot
  const honeypot =
    typeof body.contact_website_check === "string"
      ? body.contact_website_check.trim()
      : "";

  console.log(
    "[simulation-lead] Honeypot rempli :",
    Boolean(honeypot.length > 0)
  );

  if (honeypot.length > 0) {
    console.log("[simulation-lead] EARLY RETURN — honeypot déclenché.");
    return Response.json({ success: true }, { status: 200 });
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

  if (!process.env.RESEND_API_KEY) {
    console.log("[simulation-lead] EARLY RETURN — RESEND_API_KEY non définie.");
    return NextResponse.json({ success: true, warning: "Email non envoyé (config serveur)." });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    console.log("[simulation-lead] EARLY RETURN — RESEND_FROM_EMAIL ou RESEND_TO_EMAIL non définis.");
    return NextResponse.json({ success: true, warning: "Email non envoyé (config serveur)." });
  }

  const dateHeure = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "long",
    timeStyle: "short",
  });

  const eSNom = escapeHtml(String(nom));
  const eSEmail = escapeHtml(String(email));
  const eSTelephone = escapeHtml(String(telephone));
  const eSBanque = escapeHtml(String(banque));
  const eSDateDebut = escapeHtml(String(dateDebut));
  const eSEstimation = escapeHtml(String(estimation));
  const eSDateHeure = escapeHtml(dateHeure);

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
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;width:45%;">Nom et prénom</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSNom}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Email</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSEmail}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSTelephone}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Banque prêteuse</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSBanque}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Date de début du prêt</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSDateDebut}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Montant du crédit</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${Number(montantCredit).toLocaleString("fr-FR")} €</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Durée du crédit</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${escapeHtml(String(duree))} ans</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Estimation indicative</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;color:#123d2e;">${eSEstimation}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Consentement RGPD</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">Oui</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #dce7e1;color:#5f6f68;">Date de la demande</td><td style="padding:10px 0;border-bottom:1px solid #dce7e1;font-weight:700;">${eSDateHeure}</td></tr>
        <tr><td style="padding:10px 0;color:#5f6f68;">Rapport PDF proposé</td><td style="padding:10px 0;font-weight:700;">Oui</td></tr>
      </table>
    </div>
    <div style="background:#f6f8f7;padding:16px 32px;font-size:12px;color:#8c9d95;border-top:1px solid #dce7e1;">
      Source : pretschfinfo.fr/simulation — Prêts CHF Info
    </div>
  </div>
</body>
</html>`;

  console.log("Tentative envoi Resend");

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: String(email),
    subject: `Nouvelle simulation prêt CHF — ${String(nom)}`,
    html: htmlBody,
  });

  console.log("Resend data :", data);
  console.log("Resend error :", error);

  if (error) {
    console.log("[simulation-lead] Erreur envoi Resend:", error.name, error.message);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  console.log("Email Resend envoyé :", data?.id);

  return NextResponse.json({ success: true, id: data?.id });
}

export function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
