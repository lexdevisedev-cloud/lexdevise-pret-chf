import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Mentions légales | Prêts CHF Info",
  description:
    "Consultez les mentions légales du site Prêts CHF Info, plateforme indépendante d'information sur les prêts immobiliers en francs suisses.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="legal-page">
      <div className="section-inner legal-page-inner">

        <div className="legal-page-header">
          <p className="eyebrow">Informations légales</p>
          <h1>Mentions légales</h1>
          <p className="legal-page-intro">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
            l&apos;économie numérique, les présentes mentions légales sont mises à la disposition des utilisateurs.
          </p>
        </div>

        <div className="legal-sections">

          <section className="legal-section">
            <h2>Éditeur du site</h2>
            <p>Le site <strong>Prêts CHF Info</strong> est édité par LexDevise.</p>
            <ul className="legal-list">
              <li><strong>Raison sociale :</strong> LexDevise</li>
              <li><strong>Adresse :</strong> à compléter</li>
              <li><strong>Responsable de publication :</strong> à compléter</li>
              <li><strong>Contact :</strong> <a href="mailto:contact@lexdevise.com">contact@lexdevise.com</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Hébergeur</h2>
            <ul className="legal-list">
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>
                <strong>Site :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  https://vercel.com
                </a>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Nature du site</h2>
            <p>
              Prêts CHF Info est un site d&apos;information pédagogique indépendant. Il n&apos;est pas un service officiel,
              ni une plateforme gouvernementale, ni un cabinet de conseil juridique.
            </p>
            <ul className="legal-list">
              <li>Les contenus publiés ont une vocation pédagogique et ne constituent pas une consultation juridique.</li>
              <li>Aucune garantie de résultat n&apos;est associée aux informations diffusées.</li>
              <li>Les informations doivent être vérifiées et complétées selon les spécificités de chaque dossier.</li>
              <li>Le site n&apos;est pas affilié à une administration publique, une juridiction ou un établissement bancaire.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des textes, éléments graphiques, structure éditoriale et contenus publiés sur ce site
              sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation ou
              diffusion, totale ou partielle, sans autorisation préalable écrite de l&apos;éditeur, est interdite.
            </p>
          </section>

          <section className="legal-section">
            <h2>Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont de nature générale et pédagogique. Elles peuvent
              évoluer sans préavis à mesure que la jurisprudence et la réglementation progressent.
            </p>
            <p>
              L&apos;éditeur ne saurait être tenu responsable des décisions prises sur la base des informations
              publiées. Chaque utilisateur est invité à faire vérifier sa situation personnelle par un professionnel
              du droit compétent.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact</h2>
            <p>
              Pour toute question relative au site :{" "}
              <a href="mailto:contact@lexdevise.com">contact@lexdevise.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
