import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Prêts CHF Info",
  description:
    "Découvrez comment Prêts CHF Info collecte, utilise et protège les données personnelles transmises via ses formulaires.",
  alternates: {
    canonical: `${SITE_URL}/politique-confidentialite`,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="legal-page">
      <div className="section-inner legal-page-inner">

        <div className="legal-page-header">
          <p className="eyebrow">Protection des données</p>
          <h1>Politique de confidentialité</h1>
          <p className="legal-page-intro">
            La présente politique de confidentialité décrit la manière dont Prêts CHF Info collecte,
            utilise et protège les données personnelles transmises via ses formulaires.
          </p>
        </div>

        <div className="legal-sections">

          <section className="legal-section">
            <h2>1. Données collectées</h2>
            <p>
              Dans le cadre de l&apos;utilisation du simulateur ou du formulaire de contact, le site peut collecter
              les données suivantes :
            </p>
            <ul className="legal-list">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Banque prêteuse</li>
              <li>Informations financières renseignées dans le formulaire (montant du prêt, taux de change, durée, etc.)</li>
              <li>Données techniques de navigation si des outils d&apos;analyse d&apos;audience sont présents</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées aux fins suivantes :</p>
            <ul className="legal-list">
              <li>Transmettre une estimation indicative à l&apos;utilisateur</li>
              <li>Recontacter l&apos;utilisateur suite à sa demande</li>
              <li>Analyser la demande afin d&apos;y apporter une réponse adaptée</li>
              <li>Améliorer le fonctionnement et le contenu du site</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Base légale</h2>
            <p>Le traitement des données repose sur les bases légales suivantes :</p>
            <ul className="legal-list">
              <li>
                <strong>Consentement de l&apos;utilisateur</strong> : en soumettant le formulaire, l&apos;utilisateur
                consent au traitement de ses données personnelles aux fins décrites.
              </li>
              <li>
                <strong>Intérêt légitime</strong> : répondre à une demande explicite formulée par l&apos;utilisateur.
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Destinataires des données</h2>
            <p>Les données collectées peuvent être transmises aux destinataires suivants :</p>
            <ul className="legal-list">
              <li>LexDevise, éditeur du site</li>
              <li>Prestataires techniques nécessaires au fonctionnement du site</li>
              <li>Vercel Inc., hébergeur du site</li>
              <li>Service email utilisé via SMTP IONOS pour l&apos;envoi des notifications</li>
            </ul>
            <p>
              Les données ne sont pas vendues ni cédées à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Durée de conservation</h2>
            <p>
              Les données issues des formulaires sont conservées pendant une durée maximale de 3 ans à compter
              du dernier contact, sauf obligation légale différente ou demande de suppression de l&apos;utilisateur.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Droits des utilisateurs</h2>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD), chaque utilisateur dispose
              des droits suivants sur ses données personnelles :
            </p>
            <ul className="legal-list">
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation</strong> : demander la suspension temporaire du traitement</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@lexdevise.com">contact@lexdevise.com</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies</h2>
            <p>
              À ce stade, le site n&apos;utilise pas de cookies publicitaires ou de suivi comportemental. Si des
              outils de mesure d&apos;audience sont ajoutés ultérieurement, cette politique sera mise à jour et les
              utilisateurs en seront informés.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Sécurité</h2>
            <p>
              Les données sont transmises via une connexion sécurisée (HTTPS). Des mesures raisonnables de
              sécurité technique et organisationnelle sont mises en place pour protéger les données personnelles
              contre l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact</h2>
            <p>
              Pour toute question relative à cette politique ou pour exercer vos droits :{" "}
              <a href="mailto:contact@lexdevise.com">contact@lexdevise.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
