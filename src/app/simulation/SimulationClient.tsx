"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SimulationReportDownload from "../components/SimulationReportDownload";

const BANQUES = [
  "Crédit Agricole",
  "Banque Populaire",
  "Caisse d'Épargne",
  "Crédit Mutuel",
  "CIC",
  "BNP Paribas",
  "Société Générale",
  "Crédit Foncier",
  "Autre banque",
  "Je ne sais pas",
];

interface FormValues {
  nom: string;
  email: string;
  telephone: string;
  banque: string;
  dateDebut: string;
  montantCredit: string;
  duree: string;
  consentement: boolean;
  // honeypot
  company: string;
}

interface FieldErrors {
  nom?: string;
  email?: string;
  telephone?: string;
  banque?: string;
  dateDebut?: string;
  montantCredit?: string;
  duree?: string;
  consentement?: string;
}

interface SimResult {
  borneBasse: number;
  borneHaute: number;
}

const INITIAL: FormValues = {
  nom: "",
  email: "",
  telephone: "",
  banque: "",
  dateDebut: "",
  montantCredit: "",
  duree: "",
  consentement: false,
  company: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function roundToNearest1000(v: number): number {
  return Math.round(v / 1000) * 1000;
}

function fmtEUR(v: number): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(v);
}

function coeffDuree(annees: number): number {
  if (annees < 10) return 0.85;
  if (annees > 20) return 1.05;
  return 1;
}

function computeResult(form: FormValues): SimResult | null {
  const montant = parseFloat(form.montantCredit);
  const duree = parseFloat(form.duree);
  if (!montant || montant <= 0) return null;
  if (!duree || duree <= 0) return null;
  const coeff = coeffDuree(duree);
  const centrale = montant * 0.37 * coeff;
  return {
    borneBasse: roundToNearest1000(centrale * 0.8),
    borneHaute: roundToNearest1000(centrale * 1.2),
  };
}

function validateFields(form: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.nom.trim()) errors.nom = "Veuillez renseigner votre nom.";
  if (!form.email.trim() || !EMAIL_RE.test(form.email.trim()))
    errors.email = "Veuillez renseigner une adresse email valide.";
  if (!form.telephone.trim()) errors.telephone = "Veuillez renseigner votre téléphone.";
  if (!form.banque) errors.banque = "Veuillez sélectionner une banque.";
  if (!form.dateDebut) errors.dateDebut = "Veuillez renseigner la date de début du prêt.";
  const montant = parseFloat(form.montantCredit);
  if (!form.montantCredit || isNaN(montant) || montant <= 0)
    errors.montantCredit = "Veuillez renseigner un montant valide.";
  const duree = parseFloat(form.duree);
  if (!form.duree || isNaN(duree) || duree <= 0)
    errors.duree = "Veuillez renseigner une durée valide.";
  if (!form.consentement)
    errors.consentement = "Vous devez accepter le traitement de vos données pour continuer.";
  return errors;
}

export default function SimulationClient() {
  const [form, setForm] = useState<FormValues>(INITIAL);
  const [, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [result, setResult] = useState<SimResult | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "emailError">(
    "idle"
  );

  function setField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
    // Invalider le résultat si l'utilisateur modifie un champ après calcul
    if (result !== null) {
      setResult(null);
      setSubmitStatus("idle");
    }
  }

  const errors = useMemo(() => validateFields(form), [form]);
  const isFormValid = Object.keys(errors).length === 0;

  function getVisible(field: keyof FieldErrors): string | undefined {
    return touched[field] ? errors[field] : undefined;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Marquer tous les champs comme touchés pour afficher les erreurs
    const allTouched = Object.keys(INITIAL).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormValues, boolean>
    );
    setTouched(allTouched);
    setFieldErrors(errors);

    if (!isFormValid) return;

    const computed = computeResult(form);
    if (!computed) return;

    const estimation = `${fmtEUR(computed.borneBasse)} € à ${fmtEUR(computed.borneHaute)} €`;

    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/simulation-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          banque: form.banque,
          dateDebut: form.dateDebut,
          montantCredit: form.montantCredit,
          duree: form.duree,
          consentement: form.consentement,
          estimation,
          company: form.company,
        }),
      });

      setResult(computed);

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("emailError");
      }
    } catch {
      setResult(computed);
      setSubmitStatus("emailError");
    }
  }

  return (
    <main className="sim-page">
      {/* Hero */}
      <section className="sim-hero">
        <div className="sim-hero-inner">
          <h1 className="sim-hero-h1">Simulateur prêt CHF</h1>
          <p className="sim-hero-sub">
            Obtenez une estimation indicative du préjudice potentiel lié à
            l&apos;évolution du taux de change EUR/CHF.
          </p>
        </div>
      </section>

      {/* Layout deux colonnes */}
      <div className="sim-body">
        <div className="sim-layout">

          {/* Colonne gauche — Formulaire */}
          <section className="sim-card">
            <div className="sim-card-head">
              <span className="sim-eyebrow">SIMULATION</span>
              <h2 className="sim-card-title">Renseignez vos informations</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* Honeypot — invisible pour les humains */}
              <div className="sim-honeypot" aria-hidden="true">
                <label htmlFor="sim-company">
                  Ne pas remplir
                  <input
                    id="sim-company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                  />
                </label>
              </div>

              <div className="sim-form-grid">

                {/* Nom */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-nom">
                    Nom et prénom <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-nom"
                    type="text"
                    className={`sim-input${getVisible("nom") ? " sim-input--error" : ""}`}
                    placeholder="Votre nom complet"
                    value={form.nom}
                    onChange={(e) => setField("nom", e.target.value)}
                    aria-describedby={getVisible("nom") ? "err-nom" : undefined}
                    aria-invalid={!!getVisible("nom")}
                    required
                  />
                  {getVisible("nom") && (
                    <span id="err-nom" className="sim-field-error" role="alert">
                      {getVisible("nom")}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-email">
                    Email <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-email"
                    type="email"
                    className={`sim-input${getVisible("email") ? " sim-input--error" : ""}`}
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    aria-describedby={getVisible("email") ? "err-email" : undefined}
                    aria-invalid={!!getVisible("email")}
                    required
                  />
                  {getVisible("email") && (
                    <span id="err-email" className="sim-field-error" role="alert">
                      {getVisible("email")}
                    </span>
                  )}
                </div>

                {/* Téléphone */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-tel">
                    Téléphone <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-tel"
                    type="tel"
                    className={`sim-input${getVisible("telephone") ? " sim-input--error" : ""}`}
                    placeholder="06 00 00 00 00"
                    value={form.telephone}
                    onChange={(e) => setField("telephone", e.target.value)}
                    aria-describedby={getVisible("telephone") ? "err-tel" : undefined}
                    aria-invalid={!!getVisible("telephone")}
                    required
                  />
                  {getVisible("telephone") && (
                    <span id="err-tel" className="sim-field-error" role="alert">
                      {getVisible("telephone")}
                    </span>
                  )}
                </div>

                {/* Banque */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-banque">
                    Banque prêteuse <span className="sim-required">*</span>
                  </label>
                  <select
                    id="sim-banque"
                    className={`sim-input sim-select${getVisible("banque") ? " sim-input--error" : ""}`}
                    value={form.banque}
                    onChange={(e) => setField("banque", e.target.value)}
                    aria-describedby={getVisible("banque") ? "err-banque" : undefined}
                    aria-invalid={!!getVisible("banque")}
                    required
                  >
                    <option value="">Sélectionnez une banque</option>
                    {BANQUES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {getVisible("banque") && (
                    <span id="err-banque" className="sim-field-error" role="alert">
                      {getVisible("banque")}
                    </span>
                  )}
                </div>

                {/* Date de début */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-date">
                    Date de début du prêt <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-date"
                    type="month"
                    className={`sim-input${getVisible("dateDebut") ? " sim-input--error" : ""}`}
                    value={form.dateDebut}
                    onChange={(e) => setField("dateDebut", e.target.value)}
                    aria-describedby={getVisible("dateDebut") ? "err-date" : undefined}
                    aria-invalid={!!getVisible("dateDebut")}
                    required
                  />
                  <small className="sim-hint">Exemple : janvier 2010</small>
                  {getVisible("dateDebut") && (
                    <span id="err-date" className="sim-field-error" role="alert">
                      {getVisible("dateDebut")}
                    </span>
                  )}
                </div>

                {/* Montant */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-montant">
                    Montant du crédit (€) <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-montant"
                    type="number"
                    min="1"
                    step="any"
                    inputMode="decimal"
                    className={`sim-input${getVisible("montantCredit") ? " sim-input--error" : ""}`}
                    placeholder="300000"
                    value={form.montantCredit}
                    onChange={(e) => setField("montantCredit", e.target.value)}
                    aria-describedby={getVisible("montantCredit") ? "err-montant" : undefined}
                    aria-invalid={!!getVisible("montantCredit")}
                    required
                  />
                  {getVisible("montantCredit") && (
                    <span id="err-montant" className="sim-field-error" role="alert">
                      {getVisible("montantCredit")}
                    </span>
                  )}
                </div>

                {/* Durée */}
                <div className="sim-field">
                  <label className="sim-label" htmlFor="sim-duree">
                    Durée du crédit (années) <span className="sim-required">*</span>
                  </label>
                  <input
                    id="sim-duree"
                    type="number"
                    min="1"
                    max="40"
                    step="1"
                    inputMode="numeric"
                    className={`sim-input${getVisible("duree") ? " sim-input--error" : ""}`}
                    placeholder="20"
                    value={form.duree}
                    onChange={(e) => setField("duree", e.target.value)}
                    aria-describedby={getVisible("duree") ? "err-duree" : undefined}
                    aria-invalid={!!getVisible("duree")}
                    required
                  />
                  {getVisible("duree") && (
                    <span id="err-duree" className="sim-field-error" role="alert">
                      {getVisible("duree")}
                    </span>
                  )}
                </div>

              </div>{/* /sim-form-grid */}

              {/* RGPD */}
              <div className="sim-rgpd">
                <label className="sim-rgpd-label" htmlFor="sim-consent">
                  <input
                    id="sim-consent"
                    type="checkbox"
                    className="sim-rgpd-checkbox"
                    checked={form.consentement}
                    onChange={(e) => setField("consentement", e.target.checked)}
                    aria-describedby={getVisible("consentement") ? "err-consent" : undefined}
                    aria-invalid={!!getVisible("consentement")}
                    required
                  />
                  <span className="sim-rgpd-text">
                    J&apos;accepte que mes données personnelles soient collectées et traitées dans
                    le cadre de ma demande d&apos;estimation indicative et à des fins de contact.
                    J&apos;ai compris que cette simulation ne constitue pas un avis juridique,
                    bancaire ou comptable définitif.{" "}
                    <Link href="/mentions-legales" className="sim-rgpd-link">
                      En savoir plus sur le traitement des données
                    </Link>
                  </span>
                </label>
                {getVisible("consentement") && (
                  <span id="err-consent" className="sim-field-error" role="alert">
                    {getVisible("consentement")}
                  </span>
                )}
              </div>

              {/* Messages de retour */}
              {submitStatus === "success" && (
                <div className="sim-success" role="status" aria-live="polite">
                  Votre demande a bien été prise en compte.
                </div>
              )}
              {submitStatus === "emailError" && (
                <div className="sim-warn" role="status" aria-live="polite">
                  Votre estimation est affichée, mais l&apos;envoi de votre demande n&apos;a pas
                  abouti. Vous pouvez réessayer.
                </div>
              )}

              <button
                type="submit"
                className="sim-btn"
                disabled={submitStatus === "loading"}
                aria-disabled={submitStatus === "loading" || !isFormValid}
              >
                {submitStatus === "loading" ? "Envoi en cours…" : "Calculer mon estimation"}
              </button>

              {/* Mentions légales sous le bouton */}
              <div className="sim-legal-inline">
                <p className="sim-legal-inline-main">
                  Vos données sont confidentielles et ne sont pas revendues.
                </p>
                <p className="sim-legal-inline-detail">
                  Les informations transmises sont utilisées uniquement pour traiter votre demande
                  et vous recontacter si nécessaire. Vous pouvez demander l&apos;accès, la
                  rectification ou la suppression de vos données à tout moment en écrivant à{" "}
                  <a href="mailto:contact@lexdevise.com" className="sim-legal-link">
                    contact@lexdevise.com
                  </a>
                  .
                </p>
              </div>

            </form>
          </section>

          {/* Colonne droite — Résultat */}
          <aside className="sim-card sim-result-card">
            <h2 className="sim-result-title">Estimation du préjudice</h2>

            {!result ? (
              <div className="sim-result-empty">
                <p>
                  Renseignez vos informations pour obtenir une estimation indicative.
                </p>
              </div>
            ) : (
              <div className="sim-result-content" aria-live="polite">
                <div className="sim-result-range-box">
                  <div className="sim-result-range">
                    {fmtEUR(result.borneBasse)} € à {fmtEUR(result.borneHaute)} €
                  </div>
                  <p className="sim-result-sub">
                    Estimation indicative basée sur une fourchette
                  </p>
                </div>
                <p className="sim-result-disclaimer">
                  Cette estimation est indicative et ne constitue pas une évaluation juridique,
                  bancaire ou comptable définitive.
                </p>
                <SimulationReportDownload
                  nom={form.nom}
                  email={form.email}
                  telephone={form.telephone}
                  banque={form.banque}
                  dateDebut={form.dateDebut}
                  montantCredit={form.montantCredit}
                  duree={form.duree}
                  borneBasse={result.borneBasse}
                  borneHaute={result.borneHaute}
                />
                <Link href="/eligibilite" className="sim-btn sim-btn-secondary">
                  Tester mon éligibilité
                </Link>
              </div>
            )}
          </aside>

        </div>

        {/* Mention légale bas de page */}
        <p className="sim-legal">
          Cette simulation est indicative et ne constitue pas une évaluation juridique, bancaire ou
          comptable définitive. L&apos;analyse réelle dépend du contrat, des documents remis et de
          la situation de l&apos;emprunteur.
        </p>
      </div>
    </main>
  );
}
