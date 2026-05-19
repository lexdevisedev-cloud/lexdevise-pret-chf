import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Contentieux bancaire prêt CHF : comprendre les litiges possibles | Prêts CHF Info",
  description:
    "Comprendre les principaux points de litige liés aux prêts immobiliers en francs suisses : risque de change, information bancaire, clauses et documents à vérifier.",
  alternates: { canonical: `${SITE_URL}/guides/contentieux-bancaire-pret-chf` },
  openGraph: {
    title: "Contentieux bancaire prêt CHF : comprendre les litiges possibles | Prêts CHF Info",
    description:
      "Risque de change mal compris, clauses de devise, absence de simulations : les principales causes de litige sur un prêt immobilier en francs suisses.",
    url: `${SITE_URL}/guides/contentieux-bancaire-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contentieux bancaire prêt CHF : comprendre les litiges possibles | Prêts CHF Info",
    description:
      "Principales causes de litige sur un prêt immobilier en francs suisses et documents à vérifier.",
  },
};

const causesCards = [
  {
    title: "Risque de change mal compris",
    text: "L'emprunteur n'a pas pleinement mesuré le mécanisme EUR/CHF au moment de la signature. Ce point est souvent lié à l'insuffisance ou à l'absence d'informations précontractuelles concrètes.",
  },
  {
    title: "Absence de simulations chiffrées",
    text: "Aucune projection illustrant l'évolution du prêt en cas d'appréciation du CHF n'a été remise. L'emprunteur ne disposait pas d'éléments concrets pour apprécier le risque défavorable.",
  },
  {
    title: "Clause de devise complexe",
    text: "La clause définissant la devise du prêt ou le mécanisme de conversion était rédigée dans des termes difficiles à comprendre pour un emprunteur non spécialiste.",
  },
  {
    title: "Capital restant dû élevé",
    text: "Suite à l'appréciation du franc suisse, le capital restant dû en euros a fortement augmenté, créant un écart important avec le capital initial emprunté.",
  },
  {
    title: "Remboursement anticipé coûteux",
    text: "Le solde du prêt a été effectué à un taux de change défavorable, augmentant significativement le coût réel du crédit par rapport aux projections initiales.",
  },
  {
    title: "Revente du bien",
    text: "Le produit de la vente en euros s'est révélé insuffisant pour couvrir le capital restant dû en CHF, générant un reste à charge imprévu pour l'emprunteur.",
  },
  {
    title: "Changement de revenus",
    text: "Une perte d'emploi en Suisse, un passage à la retraite ou un retour à des revenus en euros a modifié l'équation initiale, exposant davantage l'emprunteur au risque de change.",
  },
];

const checklistDocs = [
  "Offre de prêt originale",
  "Conditions générales du prêt",
  "Conditions particulières du contrat",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises par la banque",
  "Tableaux d'amortissement (initial et actualisés)",
  "Avenants ou actes de renégociation",
  "Courriers et e-mails échangés avec la banque",
  "Décompte de remboursement anticipé (si applicable)",
];

const faq = [
  {
    q: "Qu'est-ce qu'un contentieux bancaire ?",
    a: "Un contentieux bancaire désigne un désaccord entre un emprunteur et un établissement de crédit sur les conditions ou l'exécution d'un contrat de prêt. Il peut se traduire par une demande de révision des termes du contrat, une demande d'indemnisation ou d'autres types d'actions selon la nature du litige.",
  },
  {
    q: "Un prêt CHF peut-il donner lieu à un litige bancaire ?",
    a: "Oui, selon les circonstances. Les prêts immobiliers en francs suisses ont fait l'objet de nombreuses décisions de justice, notamment sur la question de l'information remise à l'emprunteur avant signature. Chaque dossier doit être analysé individuellement.",
  },
  {
    q: "Faut-il d'abord contacter la banque ?",
    a: "Une démarche préalable auprès de la banque est souvent recommandée. Elle peut prendre la forme d'une demande d'information sur les documents contractuels ou d'une demande de révision. Mais cette étape est distincte d'une action contentieuse et ne préjuge pas des recours possibles.",
  },
  {
    q: "Quels documents sont utiles pour préparer une analyse ?",
    a: "L'offre de prêt, les conditions générales et particulières, la notice d'information sur le risque de change, les simulations chiffrées, les tableaux d'amortissement, les avenants et les échanges écrits avec la banque constituent les pièces essentielles.",
  },
  {
    q: "Le site Prêts CHF Info donne-t-il un avis juridique ?",
    a: "Non. Prêts CHF Info est un site indépendant d'information pédagogique. Il ne remplace pas une consultation juridique personnalisée. Les contenus publiés permettent de comprendre les mécanismes des prêts CHF, non de conclure à l'existence d'un recours.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/contentieux-bancaire-pret-chf`,
      headline: "Contentieux bancaire prêt CHF : comprendre les litiges possibles",
      description:
        "Guide pédagogique sur les principales causes de litige liées aux prêts immobiliers en francs suisses.",
      url: `${SITE_URL}/guides/contentieux-bancaire-pret-chf`,
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/guides/contentieux-bancaire-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contentieux bancaire prêt CHF",
          item: `${SITE_URL}/guides/contentieux-bancaire-pret-chf`,
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

export default function GuideContentieux() {
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
              <Link href="/guides">Guides</Link>
              <span className="article-breadcrumb-sep">›</span>
              <span>Contentieux bancaire prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Contentieux</span>
            <h1>Contentieux bancaire prêt CHF : comprendre les litiges possibles</h1>
            <p className="article-hero-intro">
              Un contentieux bancaire lié à un prêt CHF peut naître lorsque
              l'emprunteur estime ne pas avoir compris le fonctionnement réel
              du crédit, le risque de change, le capital à solder ou les
              conséquences économiques possibles sur la durée du prêt.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Cette page est informative. Elle ne constitue pas une consultation
              juridique et ne permet pas de conclure seule à l'existence d'un
              litige fondé.
            </p>
            <div className="article-meta">
              <span>Contentieux</span>
              <span className="article-meta-sep" />
              <span>8 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Qu'est-ce qu'un contentieux bancaire lié à un prêt CHF ?</h2>
          <p>
            Un contentieux bancaire désigne un désaccord entre un emprunteur et
            un établissement de crédit sur les conditions ou l'exécution d'un
            contrat de prêt. Dans le contexte des prêts en francs suisses, ce
            désaccord peut porter sur plusieurs points.
          </p>
          <ul>
            <li>
              <strong>Compréhension du contrat :</strong> l'emprunteur estime
              que la structure du prêt, notamment le mécanisme de change, ne
              lui a pas été clairement expliquée au moment de la signature.
            </li>
            <li>
              <strong>Information remise :</strong> les documents fournis avant
              la signature étaient insuffisants, incomplets ou ne permettaient
              pas de mesurer les conséquences concrètes d'une variation
              EUR/CHF.
            </li>
            <li>
              <strong>Conséquences financières :</strong> l'appréciation du
              franc suisse a entraîné une augmentation du capital restant dû,
              un surcoût lors du remboursement ou des difficultés lors de la
              revente du bien.
            </li>
            <li>
              <strong>Analyse des pièces :</strong> un contentieux bancaire
              nécessite l'examen des documents contractuels, des documents
              d'information et des échanges écrits. Il est propre à chaque
              dossier et ne peut pas être généralisé.
            </li>
          </ul>

          <h2>Les causes fréquentes de litige sur un prêt en francs suisses</h2>
          <p>
            Plusieurs situations ont conduit des emprunteurs à s'interroger sur
            les conditions dans lesquelles leur prêt CHF a été mis en place.
          </p>
          <div className="juri-four-grid">
            {causesCards.map((card) => (
              <div key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <h2>Le rôle de l'information précontractuelle</h2>
          <p>
            Dans l'analyse d'un contentieux bancaire prêt CHF, l'information
            remise avant la signature occupe une place centrale. La
            jurisprudence a progressivement précisé les exigences applicables.
          </p>
          <ul>
            <li>
              <strong>Notices d'information :</strong> un document spécifique
              décrivant le risque de change, son fonctionnement et ses
              conséquences économiques devait être remis à l'emprunteur. Son
              contenu doit être suffisamment précis et concret.
            </li>
            <li>
              <strong>Simulations chiffrées :</strong> de simples projections
              favorables ne suffisent pas. L'emprunteur devait pouvoir mesurer
              l'impact d'une appréciation significative du CHF sur son capital
              et ses remboursements.
            </li>
            <li>
              <strong>Exemples chiffrés personnalisés :</strong> les projections
              devaient être adaptées à la situation de l'emprunteur : montant du
              prêt, durée, situation professionnelle.
            </li>
            <li>
              <strong>Explications avant signature :</strong> l'information
              devait être communiquée en temps utile, permettant à l'emprunteur
              de prendre sa décision en connaissance de cause.
            </li>
            <li>
              <strong>Compréhension économique :</strong> l'emprunteur devait
              pouvoir comprendre non seulement le mécanisme du prêt à la
              souscription, mais aussi ses conséquences possibles sur l'ensemble
              de la durée du contrat.
            </li>
          </ul>
          <p>
            Pour en savoir plus,{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              consultez notre article sur les clauses abusives dans les prêts CHF
            </Link>
            .
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez identifier les signaux présents dans votre dossier
              avant toute démarche ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Contentieux bancaire et clauses abusives</h2>
          <p>
            Une partie des contentieux liés aux prêts CHF porte sur la question
            des clauses abusives, notamment les clauses relatives au risque de
            change. Plusieurs points méritent attention.
          </p>
          <ul>
            <li>
              <strong>Clause claire ou non :</strong> une clause abusive au sens
              du droit de la consommation est une clause qui crée un déséquilibre
              significatif entre les droits et obligations des parties. La
              clarté de la rédaction est un facteur important.
            </li>
            <li>
              <strong>Mécanisme économique :</strong> la clause doit permettre
              à l'emprunteur de comprendre concrètement comment fonctionne le
              mécanisme de change et quelles en sont les conséquences
              économiques.
            </li>
            <li>
              <strong>Risque supporté par l'emprunteur :</strong> si la clause
              transfère l'intégralité du risque de change sur l'emprunteur sans
              que celui-ci ait pu en mesurer l'ampleur, c'est un point à
              examiner.
            </li>
            <li>
              <strong>Pas d'automaticité :</strong> la présence d'une clause de
              risque de change ne suffit pas à établir qu'elle est abusive. Il
              faut analyser le contenu du contrat et les documents remis.
            </li>
            <li>
              <strong>Lien avec la jurisprudence :</strong> les{" "}
              <Link href="/jurisprudence">décisions récentes de la Cour de cassation</Link>{" "}
              et la jurisprudence européenne ont précisé les critères
              d'appréciation applicables aux clauses de risque de change dans
              les prêts CHF.
            </li>
          </ul>

          <h2>Documents à préparer avant toute vérification</h2>
          <p>
            Quelle que soit la nature du litige envisagé, rassembler les
            documents du dossier constitue la première étape.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Pour retrouver des documents manquants et comprendre leur utilité,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Comment commencer une première analyse ?</h2>
          <ol>
            <li>
              <strong>Rassembler les documents :</strong> commencer par réunir
              l'offre de prêt, les conditions générales et particulières, les
              notices d'information et les échanges écrits avec la banque.
            </li>
            <li>
              <strong>Identifier la structure du prêt :</strong> confirmer la
              devise du capital, les mécanismes de conversion et les clauses
              relatives au risque de change.
            </li>
            <li>
              <strong>Faire le test d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              identifie en 3 questions les principaux signaux présents dans
              le dossier.
            </li>
            <li>
              <strong>Réaliser une simulation indicative :</strong> la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              donne un ordre de grandeur sur l'impact du taux de change sur
              le capital.
            </li>
            <li>
              <strong>Relire la jurisprudence :</strong> la{" "}
              <Link href="/jurisprudence">page jurisprudence</Link>{" "}
              présente les critères retenus par les juridictions pour analyser
              les prêts CHF. Consultez aussi le{" "}
              <Link href="/guides/dernieres-jurisprudences-franc-suisse-particuliers">
                guide sur les dernières jurisprudences
              </Link>
              .
            </li>
            <li>
              <strong>Demander une analyse individualisée si nécessaire :</strong>{" "}
              un contentieux bancaire nécessite une analyse personnalisée du
              dossier par un professionnel. Les outils disponibles sur ce site
              sont pédagogiques et ne remplacent pas une consultation juridique.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Un contentieux bancaire prêt CHF repose sur l'analyse des
                clauses contractuelles et des documents d'information remis
                avant la signature.
              </li>
              <li>
                L'information précontractuelle — notices, simulations, exemples
                chiffrés — est souvent le point central des litiges.
              </li>
              <li>
                Ce guide est informatif. Il ne remplace pas une consultation
                juridique personnalisée adaptée à votre situation.
              </li>
            </ul>
          </div>

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
            Ce guide a une vocation pédagogique et ne constitue pas un avis
            juridique personnalisé. L'analyse d'un contentieux bancaire dépend
            toujours des pièces du dossier et de la situation de l'emprunteur.
          </p>

          <Link href="/guides" className="article-back">
            ← Retour aux guides
          </Link>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="article-cta-section">
        <div className="section-inner">
          <div className="article-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Étape suivante</p>
            <h2>Analyser les signaux de votre dossier prêt CHF</h2>
            <p>
              Le test d'éligibilité identifie les signaux clés. La simulation
              indicative donne un ordre de grandeur sur l'impact du change.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester les critères d'éligibilité
              </Link>
              <Link href="/simulation" className="juri-cta-secondary-btn">
                Faire une simulation indicative
              </Link>
            </div>
            <p style={{ marginTop: "18px", textAlign: "center", fontSize: "14px", opacity: 0.7 }}>
              <Link href="/jurisprudence" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                Lire la jurisprudence prêt CHF →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
