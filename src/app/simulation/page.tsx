import type { Metadata } from "next";
import Link from "next/link";
import SimulationClient from "./SimulationClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title:
    "Simulateur prêt CHF : estimation indicative du préjudice | Prêts CHF Info",
  description:
    "Estimez de manière indicative l'impact financier potentiel d'un prêt immobilier en francs suisses ou indexé CHF. Simulation pédagogique, non juridique, à compléter par l'analyse du contrat et des documents bancaires.",
  alternates: {
    canonical: `${SITE_URL}/simulation`,
  },
  openGraph: {
    title:
      "Simulateur prêt CHF : estimation indicative du préjudice | Prêts CHF Info",
    description:
      "Estimez de manière indicative l'impact financier potentiel d'un prêt immobilier en francs suisses ou indexé CHF. Simulation pédagogique, non juridique, à compléter par l'analyse du contrat et des documents bancaires.",
    url: `${SITE_URL}/simulation`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Simulateur prêt CHF : estimation indicative du préjudice | Prêts CHF Info",
    description:
      "Estimez de manière indicative l'impact financier potentiel d'un prêt immobilier en francs suisses ou indexé CHF. Simulation pédagogique, non juridique, à compléter par l'analyse du contrat et des documents bancaires.",
  },
};

const howItWorksCards = [
  {
    title: "Les informations utilisées",
    text: "La simulation utilise le montant du crédit, la date de début du prêt, la durée, la banque prêteuse et vos coordonnées pour transmettre la demande et vous recontacter.",
  },
  {
    title: "Une estimation par fourchette",
    text: "Le résultat est présenté sous forme de fourchette indicative. Il ne remplace pas une analyse contractuelle et dépend de la devise, de la structure du prêt et de la situation réelle de l'emprunteur.",
  },
  {
    title: "Pourquoi le taux EUR/CHF compte",
    text: "L'évolution du rapport euro / franc suisse peut modifier le coût réel d'un prêt CHF. Ce risque peut apparaître lors d'une revente, d'un remboursement anticipé ou d'une perte de revenus en francs suisses.",
  },
  {
    title: "Les limites du simulateur",
    text: "Il ne détermine pas si une clause est abusive et ne garantit pas un recours. Il ne tient pas compte de toutes les clauses du contrat et doit être complété par la lecture des documents bancaires.",
  },
];

const documents = [
  "Offre de prêt",
  "Conditions particulières",
  "Conditions générales",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises par la banque",
  "Tableaux d'amortissement",
  "Avenants ou renégociations",
  "Relevés ou courriers liés au prêt",
  "Documents de revente ou remboursement anticipé",
  "Justificatifs de revenus au moment de la souscription",
];

const faq = [
  {
    q: "Le simulateur calcule-t-il un préjudice certain ?",
    a: "Non. Il donne une estimation indicative. Le montant réel dépend du contrat, du capital restant dû, de la devise, des remboursements, de la situation de l'emprunteur et des documents bancaires.",
  },
  {
    q: "Pourquoi le résultat est-il présenté sous forme de fourchette ?",
    a: "Une fourchette permet de rester prudent lorsque toutes les informations contractuelles ne sont pas encore analysées. Elle donne un ordre de grandeur, pas un montant définitif.",
  },
  {
    q: "Le simulateur permet-il de savoir si mon recours est gagné ?",
    a: "Non. Un recours dépend notamment des clauses du contrat, de l'information remise avant signature, des simulations éventuelles, de la prescription et de la situation personnelle.",
  },
  {
    q: "Un prêt déjà remboursé peut-il être simulé ?",
    a: "Oui, une simulation indicative peut être utile, notamment en cas de revente, de remboursement anticipé ou de difficulté à comprendre le coût réel du prêt. L'analyse juridique reste toutefois nécessaire.",
  },
  {
    q: "Que faire après la simulation ?",
    a: "Il est recommandé de rassembler les documents du prêt puis de vérifier la structure du crédit, les clauses de devise, les notices d'information, les tableaux d'amortissement et les échanges avec la banque.",
  },
];

export default function SimulationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Simulateur prêt CHF",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: `${SITE_URL}/simulation`,
        description:
          "Estimation indicative de l'impact financier d'un prêt immobilier en francs suisses.",
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Simulation",
            item: `${SITE_URL}/simulation`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      {/* ── Introduction SEO ── */}
      <section className="home-section white-section sim-seo-intro">
        <div className="section-inner sim-seo-intro-inner">
          <p className="eyebrow">Simulation indicative</p>
          <h2 className="sim-seo-h2">
            Simulateur prêt CHF : estimer un impact financier indicatif
          </h2>
          <p className="juri-section-intro">
            Ce simulateur permet d&apos;obtenir une première estimation indicative de l&apos;impact potentiel
            d&apos;un prêt immobilier libellé, remboursable ou indexé sur le franc suisse. Le résultat ne
            constitue pas une évaluation juridique, bancaire ou comptable définitive. Il sert uniquement
            à mieux comprendre l&apos;ordre de grandeur possible avant l&apos;analyse du contrat, des tableaux
            d&apos;amortissement, des notices d&apos;information et des éventuelles simulations remises par la
            banque.
          </p>
          <p className="sim-seo-links">
            Pour comprendre les mécanismes,{" "}
            <Link href="/jurisprudence">consultez la jurisprudence prêt CHF</Link> ou{" "}
            <Link href="/eligibilite">testez les critères d&apos;éligibilité</Link> en amont.
          </p>
        </div>
      </section>

      {/* ── Simulateur ── */}
      <SimulationClient />

      {/* ── Comment fonctionne cette simulation ── */}
      <section className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Méthodologie</p>
            <h2>Comment fonctionne cette simulation prêt CHF ?</h2>
            <p className="juri-section-intro">
              La simulation est pédagogique. Elle donne un ordre de grandeur indicatif, pas un
              montant juridiquement opposable. Comprendre ses limites permet de mieux l&apos;utiliser.
            </p>
          </div>
          <div className="juri-four-grid">
            {howItWorksCards.map((card) => (
              <article key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "32px" }}>
            Pour aller plus loin, consultez notre article sur le{" "}
            <Link
              href="/blog/risque-change-pret-chf"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              risque de change d&apos;un prêt CHF
            </Link>
            .
          </div>
        </div>
      </section>

      {/* ── Documents à préparer ── */}
      <section className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Prochaine étape</p>
            <h2>Documents utiles après une simulation prêt CHF</h2>
            <p className="juri-section-intro">
              Ces documents permettent de vérifier si le risque de change a été expliqué de manière
              claire, concrète et compréhensible pendant toute la durée du prêt. Consultez notre{" "}
              <Link
                href="/blog/documents-pret-chf"
                style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
              >
                guide sur les documents à vérifier pour un prêt CHF
              </Link>
              .
            </p>
          </div>
          <div className="juri-doc-grid">
            {documents.map((item) => (
              <div key={item} className="juri-doc-item">
                <span className="juri-doc-icon" aria-hidden="true">📄</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="juri-checklist-cta" style={{ marginTop: "36px" }}>
            <Link href="/eligibilite#documents" className="primary-btn">
              Voir la liste complète des documents
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>FAQ simulateur prêt CHF</h2>
          </div>
          <div className="juri-faq">
            {faq.map((item) => (
              <details key={item.q} className="juri-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="juri-legal-mention" style={{ marginTop: "36px" }}>
            Les informations présentées ont une vocation pédagogique et ne constituent pas un avis
            juridique personnalisé.{" "}
            <Link
              href="/eligibilite"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              Tester les critères d&apos;éligibilité
            </Link>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
