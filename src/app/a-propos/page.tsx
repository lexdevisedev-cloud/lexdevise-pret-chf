import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "À propos | Prêts CHF Info",
  description:
    "Découvrez la vocation de Prêts CHF Info, site indépendant d'information sur les prêts immobiliers en francs suisses, le risque de change et les critères d'analyse d'un dossier CHF.",
  alternates: {
    canonical: `${SITE_URL}/a-propos`,
  },
};

const featuresCards = [
  {
    title: "Comprendre la jurisprudence",
    text: "Accédez aux évolutions récentes sur les prêts CHF, les décisions de la Cour de cassation et les critères d'analyse reconnus.",
  },
  {
    title: "Tester les critères d'éligibilité",
    text: "Répondez à quelques questions pour identifier les signaux essentiels présents dans votre dossier.",
  },
  {
    title: "Estimer un impact financier indicatif",
    text: "Simulez un ordre de grandeur des effets du risque de change selon les paramètres de votre prêt.",
  },
  {
    title: "Identifier les documents utiles",
    text: "Découvrez quelles pièces rassembler avant toute démarche : offre de prêt, notices, simulations, avenants.",
  },
];

export default function AProposPage() {
  return (
    <main className="apropos-page">

      {/* HERO */}
      <section className="home-section white-section">
        <div className="section-inner apropos-hero-inner">
          <p className="eyebrow">À propos</p>
          <h1>À propos de Prêts CHF Info</h1>
          <p className="apropos-intro">
            Prêts CHF Info est un site d&apos;information indépendant consacré aux prêts immobiliers libellés,
            remboursables ou indexés sur le franc suisse. Il vise à aider les emprunteurs à comprendre les
            principaux critères de risque, les documents à vérifier et les évolutions jurisprudentielles récentes.
          </p>
        </div>
      </section>

      {/* 1. PLATEFORME INDÉPENDANTE */}
      <section className="home-section juri-soft-section">
        <div className="section-inner apropos-section-inner">
          <div className="apropos-section-header">
            <p className="eyebrow">Notre vocation</p>
            <h2>Une plateforme d&apos;information indépendante</h2>
          </div>
          <div className="apropos-text-block">
            <p>
              Prêts CHF Info est un site d&apos;information indépendant consacré aux prêts immobiliers libellés,
              remboursables ou indexés sur le franc suisse. Il vise à aider les emprunteurs à comprendre les
              principaux critères de risque, les documents à vérifier et les évolutions jurisprudentielles récentes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VOCATION PÉDAGOGIQUE */}
      <section className="home-section white-section">
        <div className="section-inner apropos-section-inner">
          <div className="apropos-section-header">
            <p className="eyebrow">Information pédagogique</p>
            <h2>Une vocation pédagogique</h2>
          </div>
          <div className="apropos-pedagogy-grid">
            <div className="apropos-pedagogy-item">
              <h3>Pas un avis juridique personnalisé</h3>
              <p>
                Le site ne délivre pas de consultation juridique. Les contenus publiés ont pour seul
                objectif d&apos;aider à comprendre les mécanismes des prêts en francs suisses.
              </p>
            </div>
            <div className="apropos-pedagogy-item">
              <h3>Des contenus pour comprendre</h3>
              <p>
                Les informations publiées permettent de comprendre le fonctionnement du risque de change,
                les critères jurisprudentiels retenus et les documents généralement examinés.
              </p>
            </div>
            <div className="apropos-pedagogy-item">
              <h3>Une analyse propre à chaque dossier</h3>
              <p>
                Chaque situation doit être appréciée selon le contrat signé, les documents remis à
                l&apos;emprunteur et la situation personnelle. Aucune généralisation n&apos;est possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POURQUOI CE SITE */}
      <section className="home-section juri-soft-section">
        <div className="section-inner apropos-section-inner">
          <div className="apropos-section-header">
            <p className="eyebrow">Contexte</p>
            <h2>Pourquoi ce site existe</h2>
          </div>
          <div className="apropos-text-block">
            <p>
              De nombreux emprunteurs ont souscrit des prêts immobiliers libellés ou indexés en francs suisses,
              souvent entre 2005 et 2015. Certains dossiers peuvent être complexes à relire, notamment lorsque
              les documents remis avant signature sont incomplets ou difficiles à interpréter.
            </p>
            <p>
              Les questions posées portent fréquemment sur le risque de change, les documents remis avant
              signature, les simulations chiffrées réalisées en amont, la revente du bien, le remboursement
              anticipé ou les changements de revenus survenus au cours du prêt.
            </p>
            <p>
              Prêts CHF Info a été créé pour donner accès à des ressources pédagogiques permettant à chaque
              emprunteur de mieux comprendre sa situation avant d&apos;envisager toute démarche.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CE QUE LE SITE PERMET */}
      <section className="home-section white-section">
        <div className="section-inner apropos-section-inner">
          <div className="apropos-section-header">
            <p className="eyebrow">Fonctionnalités</p>
            <h2>Ce que le site permet de faire</h2>
          </div>
          <div className="juri-four-grid" style={{ marginTop: "32px" }}>
            {featuresCards.map((card) => (
              <article key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDÉPENDANCE */}
      <section className="home-section dark-green-section">
        <div className="section-inner apropos-section-inner">
          <div className="juri-alert-box" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}>
            <strong style={{ color: "#ffffff" }}>Indépendance et absence d&apos;affiliation publique</strong>
            <p style={{ color: "var(--dark-muted)" }}>
              Prêts CHF Info est un site indépendant. Il n&apos;est pas affilié à une administration publique,
              à un service gouvernemental, à une banque ou à une juridiction.
            </p>
          </div>
          <div className="apropos-text-block" style={{ marginTop: "24px" }}>
            <p style={{ color: "var(--dark-muted)" }}>
              Les contenus publiés reflètent une synthèse pédagogique des évolutions jurisprudentielles. Ils ne
              constituent pas une position officielle ni un engagement d&apos;une institution quelle qu&apos;elle soit.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section className="home-section juri-soft-section">
        <div className="section-inner apropos-section-inner">
          <div className="apropos-section-header">
            <p className="eyebrow">Contact</p>
            <h2>Nous contacter</h2>
          </div>
          <div className="apropos-contact-block">
            <p>Pour toute demande ou question relative au site :</p>
            <a href="mailto:contact@lexdevise.com" className="apropos-email-link">
              contact@lexdevise.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="home-section dark-green-section">
        <div className="section-inner juri-cta-inner">
          <p className="eyebrow" style={{ color: "#8dc3a5" }}>Prochaine étape</p>
          <h2 style={{ color: "#ffffff" }}>Tester votre situation</h2>
          <p className="juri-frontalier-text">
            Utilisez nos outils pédagogiques pour identifier les signaux présents dans votre dossier
            et estimer un impact indicatif.
          </p>
          <div className="hero-actions" style={{ marginTop: "36px" }}>
            <Link href="/eligibilite" className="juri-cta-primary-btn">
              Tester mon éligibilité
            </Link>
            <Link href="/simulation" className="juri-cta-secondary-btn">
              Faire une simulation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
