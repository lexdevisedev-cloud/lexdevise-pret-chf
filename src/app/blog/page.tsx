import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blogArticles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Blog prêt CHF : guides sur recours, risque de change et frontaliers",
  description:
    "Guides pédagogiques sur les prêts immobiliers en francs suisses : recours prêt CHF, risque de change, frontaliers, jurisprudence, documents utiles et simulation.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog prêt CHF : guides et ressources",
    description:
      "Articles pédagogiques sur les prêts immobiliers en francs suisses, le risque de change, l'éligibilité et la jurisprudence.",
    url: `${SITE_URL}/blog`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog prêt CHF : guides sur recours, risque de change et frontaliers",
    description:
      "Guides pédagogiques sur les prêts immobiliers en francs suisses : recours prêt CHF, risque de change, frontaliers, jurisprudence, documents utiles et simulation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog`,
      url: `${SITE_URL}/blog`,
      name: "Blog prêt CHF : guides sur recours, risque de change et frontaliers",
      description:
        "Guides pédagogiques sur les prêts immobiliers en francs suisses.",
      inLanguage: "fr-FR",
      publisher: {
        "@type": "Organization",
        name: "Prêts CHF Info",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Articles blog prêt CHF",
      itemListElement: BLOG_ARTICLES.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${article.slug}`,
        name: article.title,
      })),
    },
  ],
};

const START_ITEMS = [
  {
    icon: "✓",
    title: "Tester mon éligibilité",
    desc: "3 questions pour identifier les principaux signaux d'un prêt CHF à vérifier.",
    href: "/eligibilite",
    cta: "Faire le test",
  },
  {
    icon: "⚖",
    title: "Comprendre la jurisprudence",
    desc: "Les décisions récentes de la Cour de cassation sur les prêts immobiliers en francs suisses.",
    href: "/jurisprudence",
    cta: "Voir la jurisprudence",
  },
  {
    icon: "∿",
    title: "Faire une simulation indicative",
    desc: "Estimer l'impact du taux EUR/CHF sur le capital restant dû ou le coût d'un remboursement.",
    href: "/simulation",
    cta: "Lancer une simulation",
  },
];

export default function BlogPage() {
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
            <span className="blog-eyebrow-tag">Ressources prêts CHF</span>
            <h1>Blog prêt CHF : guides et ressources</h1>
            <p className="blog-hero-subtitle">
              Retrouvez des articles pédagogiques pour comprendre les prêts
              immobiliers en francs suisses, le risque de change, la
              jurisprudence récente et les critères à vérifier avant d'analyser
              un dossier.
            </p>
            <div className="blog-hero-badges">
              <span className="blog-hero-badge">Frontaliers</span>
              <span className="blog-hero-badge">Risque de change</span>
              <span className="blog-hero-badge">Jurisprudence</span>
            </div>
            <div className="blog-hero-actions">
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

      {/* GRILLE ARTICLES */}
      <section className="blog-grid-section">
        <div className="section-inner">
          <div className="blog-grid-inner">
            <div className="blog-section-header">
              <p className="eyebrow">Articles</p>
              <h2>Nos derniers articles sur les prêts CHF</h2>
            </div>
            <div className="blog-grid">
              {BLOG_ARTICLES.map((article) => (
                <article key={article.slug} className="blog-card">
                  <span className="blog-card-cat">{article.category}</span>
                  <h3 className="blog-card-title">{article.title}</h3>
                  <p className="blog-card-desc">{article.description}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-time">
                      {article.readingTime} de lecture
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="blog-card-link"
                      aria-label={`Lire l'article : ${article.title}`}
                    >
                      Lire l&apos;article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAR OÙ COMMENCER */}
      <section className="blog-start-section">
        <div className="section-inner">
          <div className="blog-start-inner">
            <div className="blog-start-header">
              <p className="eyebrow">Navigation</p>
              <h2>Par où commencer ?</h2>
            </div>
            <div className="blog-start-grid">
              {START_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="blog-start-card">
                  <span className="blog-start-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="blog-start-cta-link">{item.cta} →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="blog-cta-section">
        <div className="section-inner">
          <div className="blog-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>
              Première étape
            </p>
            <h2>Vous ne savez pas par où commencer&nbsp;?</h2>
            <p>
              Le test d'éligibilité permet d'identifier en quelques questions les
              principaux signaux à vérifier avant d'analyser un prêt immobilier
              en francs suisses.
            </p>
            <div className="blog-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Faire le test d&apos;éligibilité
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
