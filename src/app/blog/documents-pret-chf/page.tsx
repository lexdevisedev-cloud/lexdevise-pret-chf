import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Documents prêt CHF : pièces utiles pour vérifier un dossier",
  description:
    "Liste des documents utiles pour vérifier un prêt immobilier en francs suisses : offre de prêt, notices, simulations, tableaux d'amortissement, avenants et échanges avec la banque.",
  alternates: { canonical: `${SITE_URL}/blog/documents-pret-chf` },
  openGraph: {
    title: "Documents prêt CHF : pièces utiles pour vérifier un dossier",
    description:
      "Liste des documents essentiels pour analyser un prêt immobilier en francs suisses.",
    url: `${SITE_URL}/blog/documents-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Que faire si je n'ai plus l'offre de prêt originale ?",
    a: "Vous pouvez en demander une copie à votre banque ou à votre notaire. Certains documents comme les tableaux d'amortissement et les relevés de compte en CHF peuvent aussi avoir été conservés par voie électronique.",
  },
  {
    q: "Les avenants au contrat sont-ils importants ?",
    a: "Oui. Les avenants peuvent modifier les conditions initiales du prêt : taux, modalités de remboursement, conversion. Ils font partie intégrante de l'analyse contractuelle.",
  },
  {
    q: "Que contient une notice d'information sur le risque de change ?",
    a: "Une notice spécifique devait expliquer en termes clairs le mécanisme du risque de change, ses conséquences sur le capital restant dû et, idéalement, fournir des simulations chiffrées sur différents scénarios EUR/CHF. Si cette notice est absente ou très générale, c'est un signal à vérifier.",
  },
];

const documents = [
  {
    icon: "📄",
    title: "L'offre de prêt",
    desc: "Document contractuel principal remis avant la signature. Il précise le montant, la devise, la durée, les modalités de remboursement et les clauses principales.",
  },
  {
    icon: "📋",
    title: "Les conditions générales",
    desc: "Contiennent les règles applicables à tous les prêts du même type. Les clauses de devise et les dispositions sur le risque de change y figurent souvent.",
  },
  {
    icon: "📝",
    title: "Les conditions particulières",
    desc: "Complètent les conditions générales avec les éléments spécifiques au contrat : capital, taux, durée, garanties, et parfois les clauses de conversion.",
  },
  {
    icon: "⚠️",
    title: "La notice d'information sur le risque de change",
    desc: "Document clé pour l'analyse. Son existence, sa date, son contenu et les simulations qu'elle contient peuvent être déterminants dans l'appréciation du dossier.",
  },
  {
    icon: "📊",
    title: "Les simulations remises par la banque",
    desc: "Les projections chiffrées remises avant ou lors de la signature permettent de vérifier si l'impact d'une variation EUR/CHF a été illustré concrètement.",
  },
  {
    icon: "📈",
    title: "Les tableaux d'amortissement",
    desc: "Indiquent le capital restant dû à chaque échéance, en CHF et parfois en euros. Utiles pour retracer l'évolution du prêt et calculer l'impact du change.",
  },
  {
    icon: "📎",
    title: "Les avenants",
    desc: "Modifications contractuelles survenues en cours de prêt : renégociation, modification du taux, changement de devise, réaménagement. Chacun peut avoir sa propre logique.",
  },
  {
    icon: "✉️",
    title: "Les échanges avec la banque",
    desc: "Courriers, e-mails, comptes rendus de rendez-vous. Ces éléments peuvent permettre de vérifier quelles informations ont effectivement été communiquées à l'emprunteur.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/documents-pret-chf`,
      headline: "Documents prêt CHF : quelles pièces réunir pour une analyse ?",
      description:
        "Avant toute vérification, certains documents sont essentiels pour comprendre la structure du prêt et l'information remise par la banque.",
      url: `${SITE_URL}/blog/documents-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/documents-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Documents prêt CHF", item: `${SITE_URL}/blog/documents-pret-chf` },
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

export default function ArticleDocuments() {
  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="article-hero">
        <div className="section-inner">
          <div className="article-hero-inner">
            <nav className="article-breadcrumb" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span className="article-breadcrumb-sep">›</span>
              <Link href="/blog">Blog</Link>
              <span className="article-breadcrumb-sep">›</span>
              <span>Documents prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Documents</span>
            <h1>Documents prêt CHF : quelles pièces réunir pour une analyse ?</h1>
            <p className="article-hero-intro">
              Avant toute vérification d'un prêt immobilier en francs suisses,
              il est utile de rassembler les documents essentiels. L'offre de
              prêt, les notices, les simulations et les échanges avec la banque
              sont souvent déterminants pour apprécier l'information remise et
              la structure du contrat.
            </p>
            <div className="article-meta">
              <span>Documents</span>
              <span className="article-meta-sep" />
              <span>5 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Pourquoi les documents sont-ils si importants ?</h2>
          <p>
            L'analyse d'un prêt CHF repose en grande partie sur les pièces
            disponibles. Ce sont elles qui permettent de vérifier si
            l'information sur le risque de change était présente, précise et
            compréhensible. Une clause favorable dans le contrat n'a pas la même
            valeur si elle n'a jamais été expliquée à l'emprunteur.
          </p>
          <p>
            À l'inverse, des documents complets, datés et personnalisés peuvent
            démontrer que la banque a rempli ses obligations d'information. Dans
            tous les cas, c'est l'ensemble du dossier documentaire qui fait la
            différence — et non un seul document isolé.
          </p>

          <h2>La liste des documents à réunir</h2>
          <p>
            Voici les principales pièces utiles pour permettre une analyse d'un
            prêt immobilier en francs suisses. Cette liste n'est pas exhaustive
            et peut varier selon les banques et les contrats.
          </p>

          <div className="article-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} className="article-doc-card">
                <span className="article-doc-icon">{doc.icon}</span>
                <div>
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>L'offre de prêt et les conditions particulières sont les pièces les plus importantes.</li>
              <li>La notice d'information sur le risque de change est souvent le document clé.</li>
              <li>Les avenants et les échanges avec la banque complètent le tableau.</li>
            </ul>
          </div>

          <h2>Documents absents ou incomplets : que cela signifie-t-il ?</h2>
          <p>
            L'absence d'un document ne signifie pas automatiquement qu'il
            n'existait pas. Il est possible que certaines pièces n'aient pas été
            conservées, ou qu'elles n'aient jamais été remises à l'emprunteur.
          </p>
          <p>
            Dans les deux cas, la situation peut mériter une attention
            particulière. Si une notice sur le risque de change n'a jamais été
            remise, ou si les simulations présentées ne couvraient pas les
            hypothèses défavorables, cela peut constituer un signal à examiner
            plus attentivement.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous avez rassemblé vos documents et souhaitez identifier les
              signaux à vérifier dans votre dossier prêt CHF ?
            </p>
            <Link href="/eligibilite#documents" className="article-inline-cta-btn">
              Voir les critères d&apos;éligibilité →
            </Link>
          </div>

          <h2>Comment retrouver des documents manquants ?</h2>
          <p>
            Si vous n'avez pas conservé l'ensemble des pièces, plusieurs démarches
            peuvent permettre de les récupérer :
          </p>
          <ul>
            <li>Demande de copie à la banque : tout établissement est tenu de conserver les contrats et peut vous fournir les documents contractuels ;</li>
            <li>Notaire : si le prêt était lié à un acte authentique, le notaire peut avoir conservé des éléments du dossier ;</li>
            <li>Archives personnelles numériques : e-mails, espace client en ligne, documents scannés ;</li>
            <li>Courtier en prêt immobilier : s'il était impliqué dans la mise en place du crédit, il peut avoir gardé des traces.</li>
          </ul>

          <h2>Documents utiles pour la simulation indicative</h2>
          <p>
            Pour réaliser une simulation indicative de l'impact EUR/CHF sur votre
            prêt, les informations les plus utiles sont : le capital initial en
            CHF, la date de souscription, le capital restant dû en CHF et le taux
            de change auquel le prêt a été souscrit.
          </p>
          <p>
            Ces informations se trouvent généralement dans l'offre de prêt et les
            tableaux d'amortissement.{" "}
            <Link href="/simulation">
              Accédez à la simulation indicative
            </Link>{" "}
            pour visualiser l'impact d'une variation EUR/CHF sur votre dossier.
          </p>

          {/* FAQ */}
          <section className="article-faq">
            <h2>Questions fréquentes</h2>
            <div className="article-faq-list">
              {faq.map((item, i) => (
                <details key={i} className="article-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="article-legal">
            Cet article a une vocation pédagogique et ne constitue pas un avis
            juridique personnalisé. L'analyse dépend toujours du contrat, des
            documents remis et de la situation de l'emprunteur.
          </p>

          <Link href="/blog" className="article-back">
            ← Retour au blog
          </Link>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="article-cta-section">
        <div className="section-inner">
          <div className="article-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>
              Étape suivante
            </p>
            <h2>Prêt à vérifier votre dossier prêt CHF ?</h2>
            <p>
              Le test d'éligibilité identifie les signaux clés. La simulation
              indicative vous donne un ordre de grandeur sur l'impact du change.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité prêt CHF
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
