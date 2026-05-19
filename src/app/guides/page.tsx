import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Guides prêt CHF : risque de change, banques et recours | Prêts CHF Info",
  description:
    "Consultez nos guides pratiques sur les prêts immobiliers en francs suisses : risque de change, documents à vérifier, jurisprudence, banques prêteuses et situations particulières.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Guides prêt CHF : risque de change, banques et recours | Prêts CHF Info",
    description:
      "Consultez nos guides pratiques sur les prêts immobiliers en francs suisses : risque de change, documents à vérifier, jurisprudence, banques prêteuses et situations particulières.",
    url: `${SITE_URL}/guides`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides prêt CHF : risque de change, banques et recours | Prêts CHF Info",
    description:
      "Guides pratiques sur les prêts immobiliers en francs suisses : risque de change, documents, jurisprudence et situations particulières.",
  },
};

const activeGuides = [
  {
    category: "Banques prêteuses",
    title: "Prêt en devise CHF Crédit Mutuel",
    description:
      "Comprendre les points à vérifier lorsqu'un prêt immobilier en devise CHF a été souscrit auprès du Crédit Mutuel : clauses, documents, information sur le risque de change et situations fréquentes.",
    slug: "pret-en-devise-chf-credit-mutuel",
    readingTime: "8 min",
  },
  {
    category: "Situations particulières",
    title: "Prêt toxique en francs suisses",
    description:
      "Comprendre pourquoi certains prêts immobiliers en francs suisses sont perçus comme toxiques : risque de change, capital restant dû, clauses et information bancaire.",
    slug: "pret-toxique-franc-suisse",
    readingTime: "8 min",
  },
  {
    category: "Contentieux",
    title: "Contentieux bancaire prêt CHF",
    description:
      "Les principales causes de litige liées aux prêts immobiliers en francs suisses : risque de change, information précontractuelle, clauses et documents à vérifier.",
    slug: "contentieux-bancaire-pret-chf",
    readingTime: "8 min",
  },
  {
    category: "Jurisprudence",
    title: "Dernières jurisprudences franc suisse pour particuliers",
    description:
      "Synthèse pédagogique des décisions récentes — Cour de cassation 2024 et 2025, CJUE — concernant les particuliers ayant souscrit un prêt CHF en France.",
    slug: "dernieres-jurisprudences-franc-suisse-particuliers",
    readingTime: "7 min",
  },
  {
    category: "Frontaliers",
    title: "Prêt frontalier Suisse et CHF",
    description:
      "Les points à vérifier lorsqu'un frontalier suisse a souscrit un prêt immobilier lié au franc suisse : risque de change sur la durée, bien situé en France, clauses et documents.",
    slug: "pret-frontalier-suisse-chf",
    readingTime: "7 min",
  },
  {
    category: "Contentieux",
    title: "C'est quoi un contentieux bancaire ?",
    description:
      "Définition simple d'un contentieux bancaire, ses causes fréquentes, ses conséquences possibles et le lien avec les prêts immobiliers en francs suisses.",
    slug: "c-est-quoi-un-contentieux-bancaire",
    readingTime: "6 min",
  },
  {
    category: "Contentieux",
    title: "Conséquences d'un contentieux bancaire",
    description:
      "Les conséquences possibles d'un contentieux bancaire : amiables, financières, documentaires et juridiques — avec le cas particulier des prêts immobiliers en francs suisses.",
    slug: "consequences-contentieux-bancaire",
    readingTime: "7 min",
  },
];

const howToSteps = [
  {
    num: "1",
    title: "Lire le guide correspondant",
    desc: "Identifiez le guide qui correspond à votre situation : banque prêteuse, type de prêt, situation personnelle.",
  },
  {
    num: "2",
    title: "Faire le test d'éligibilité",
    desc: "Répondez à 3 questions pour identifier les principaux signaux présents dans votre dossier prêt CHF.",
    href: "/eligibilite",
  },
  {
    num: "3",
    title: "Rassembler les documents et simuler",
    desc: "Retrouvez les pièces utiles et réalisez une simulation indicative de l'impact du taux EUR/CHF.",
    href: "/simulation",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides`,
      url: `${SITE_URL}/guides`,
      name: "Guides prêt CHF : risque de change, banques et recours",
      description:
        "Guides pratiques sur les prêts immobiliers en francs suisses : risque de change, documents à vérifier, jurisprudence et banques prêteuses.",
      inLanguage: "fr-FR",
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Guides prêt CHF disponibles",
      itemListElement: activeGuides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/guides/${g.slug}`,
        name: g.title,
      })),
    },

  ],
};

export default function GuidesPage() {
  return (
    <main className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="blog-hero">
        <div className="section-inner">
          <div className="blog-hero-inner">
            <nav className="article-breadcrumb" aria-label="Fil d'Ariane" style={{ marginBottom: "20px" }}>
              <Link href="/">Accueil</Link>
              <span className="article-breadcrumb-sep">›</span>
              <span>Guides</span>
            </nav>
            <span className="blog-eyebrow-tag">Guides pratiques</span>
            <h1>Guides pratiques sur les prêts CHF</h1>
            <p className="blog-hero-subtitle">
              Cette rubrique rassemble des guides spécialisés pour comprendre
              les principales situations liées aux prêts immobiliers en francs
              suisses : risque de change, clauses contractuelles, documents
              bancaires, banques prêteuses, jurisprudence et profils
              d'emprunteurs concernés.
            </p>
            <p className="blog-hero-subtitle" style={{ marginTop: "12px", fontStyle: "italic", opacity: 0.8 }}>
              Ces guides sont informatifs. Ils ne constituent pas un avis
              juridique personnalisé et ne permettent pas, seuls, de conclure
              à l'existence d'un recours.
            </p>
            <div className="blog-hero-actions" style={{ marginTop: "28px" }}>
              <Link href="/eligibilite" className="primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/simulation" className="secondary-btn">
                Faire une simulation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES ACTIFS */}
      <section className="blog-grid-section">
        <div className="section-inner">
          <div className="blog-grid-inner">
            <div className="blog-section-header">
              <p className="eyebrow">Guides disponibles</p>
              <h2>Guides sur les prêts en francs suisses</h2>
            </div>
            <div className="blog-grid">
              {activeGuides.map((guide) => (
                <article key={guide.slug} className="blog-card">
                  <span className="blog-card-cat">{guide.category}</span>
                  <h3 className="blog-card-title">{guide.title}</h3>
                  <p className="blog-card-desc">{guide.description}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-time">{guide.readingTime} de lecture</span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="blog-card-link"
                      aria-label={`Lire le guide : ${guide.title}`}
                    >
                      Lire le guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT UTILISER CES GUIDES */}
      <section className="blog-start-section">
        <div className="section-inner">
          <div className="blog-start-inner">
            <div className="blog-start-header">
              <p className="eyebrow">Mode d'emploi</p>
              <h2>Comment utiliser ces guides ?</h2>
            </div>
            <div className="blog-start-grid">
              {howToSteps.map((step) =>
                step.href ? (
                  <Link key={step.num} href={step.href} className="blog-start-card">
                    <span className="blog-start-icon" style={{ fontWeight: 700, fontSize: "22px" }}>
                      {step.num}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </Link>
                ) : (
                  <div key={step.num} className="blog-start-card" style={{ cursor: "default" }}>
                    <span className="blog-start-icon" style={{ fontWeight: 700, fontSize: "22px" }}>
                      {step.num}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESSOURCES COMPLÉMENTAIRES */}
      <section className="blog-grid-section" style={{ background: "#f7faf8" }}>
        <div className="section-inner">
          <div className="blog-grid-inner">
            <div className="blog-section-header">
              <p className="eyebrow">Ressources complémentaires</p>
              <h2>Pour aller plus loin</h2>
            </div>
            <div className="blog-start-grid">
              <Link href="/jurisprudence" className="blog-start-card">
                <span className="blog-start-icon">⚖</span>
                <h3>Jurisprudence prêt CHF</h3>
                <p>Les décisions récentes de la Cour de cassation et les critères retenus sur les prêts en francs suisses.</p>
                <span className="blog-start-cta-link">Voir la jurisprudence →</span>
              </Link>
              <Link href="/blog" className="blog-start-card">
                <span className="blog-start-icon">✎</span>
                <h3>Articles de blog</h3>
                <p>Guides pédagogiques sur le risque de change, les frontaliers, les clauses abusives et les documents utiles.</p>
                <span className="blog-start-cta-link">Voir les articles →</span>
              </Link>
              <Link href="/eligibilite" className="blog-start-card">
                <span className="blog-start-icon">✓</span>
                <h3>Test d'éligibilité</h3>
                <p>3 questions pour identifier les principaux signaux d'un prêt CHF à vérifier selon votre situation.</p>
                <span className="blog-start-cta-link">Faire le test →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="blog-cta-section">
        <div className="section-inner">
          <div className="blog-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Première étape</p>
            <h2>Vous ne savez pas par où commencer ?</h2>
            <p>
              Le test d'éligibilité permet d'identifier en quelques questions
              les principaux signaux à vérifier dans un prêt immobilier en
              francs suisses.
            </p>
            <div className="blog-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Faire le test d'éligibilité
              </Link>
              <Link href="/simulation" className="juri-cta-secondary-btn">
                Faire une simulation indicative
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
