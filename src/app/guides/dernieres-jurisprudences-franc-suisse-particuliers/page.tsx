import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Dernières jurisprudences franc suisse pour particuliers | Prêts CHF Info",
  description:
    "Synthèse pédagogique des dernières jurisprudences concernant les particuliers ayant souscrit un prêt immobilier en francs suisses ou indexé sur le CHF.",
  alternates: {
    canonical: `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
  },
  openGraph: {
    title: "Dernières jurisprudences franc suisse pour particuliers | Prêts CHF Info",
    description:
      "Cour de cassation 2024, arrêts de juillet 2025, exigence de transparence CJUE : synthèse des décisions clés pour les particuliers ayant souscrit un prêt CHF.",
    url: `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dernières jurisprudences franc suisse pour particuliers | Prêts CHF Info",
    description:
      "Synthèse pédagogique des décisions récentes sur les prêts immobiliers en francs suisses pour les particuliers.",
  },
};

const decisionsCards = [
  {
    title: "Cour de cassation, 18 septembre 2024",
    pointCle: "Appréciation du risque sur la durée totale",
    text: "La Cour de cassation a confirmé que l'information sur le risque de change devait permettre à l'emprunteur de mesurer les conséquences économiques possibles non seulement à la souscription, mais sur l'ensemble de la durée du prêt.",
    prudence:
      "Cette décision ne vaut pas pour tous les dossiers. Les conditions d'application dépendent du contrat et des documents remis.",
  },
  {
    title: "Cour de cassation, 9 juillet 2025",
    pointCle: "Transparence des clauses de risque de change",
    text: "Les arrêts n° 24-19.647 et n° 24-18.018 ont précisé les critères permettant d'apprécier si une clause de risque de change satisfaisait à l'exigence de transparence. Une mention générale ne suffit pas si l'emprunteur ne pouvait pas mesurer les effets économiques concrets.",
    prudence:
      "Ces décisions cadrent l'analyse mais ne créent pas un droit automatique. Chaque dossier reste à examiner individuellement.",
  },
  {
    title: "CJUE et exigence de transparence",
    pointCle: "Standard européen applicable aux clauses de change",
    text: "La Cour de justice de l'Union européenne a posé le principe selon lequel un consommateur doit être en mesure de comprendre les conséquences économiques concrètes d'une clause de risque de change, notamment en termes d'augmentation possible du capital restant dû.",
    prudence:
      "Le standard européen constitue un cadre de référence. Son application concrète dépend du droit national et des faits du dossier.",
  },
];

const garantiesCards = [
  {
    title: "Pas d'annulation automatique",
    text: "Une décision favorable dans un dossier n'entraîne pas l'annulation de tous les prêts CHF. Chaque contrat est analysé individuellement selon ses clauses et ses pièces.",
  },
  {
    title: "Pas d'indemnisation automatique",
    text: "Une jurisprudence favorable ne garantit pas une indemnisation. Le préjudice et le lien de causalité doivent être établis dans chaque dossier.",
  },
  {
    title: "Pas de recours garanti",
    text: "Même avec une jurisprudence favorable, un recours n'est pas automatiquement possible. Les délais applicables, la disponibilité des documents et les faits propres au dossier sont déterminants.",
  },
  {
    title: "Contrat à analyser",
    text: "La jurisprudence fixe un cadre d'analyse, mais c'est le contrat signé, les documents remis et la situation de l'emprunteur qui déterminent si les critères sont réunis.",
  },
];

const checklistDocs = [
  "Offre de prêt originale",
  "Conditions particulières du contrat",
  "Conditions générales du prêt",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises par la banque",
  "Tableaux d'amortissement (initial et actualisés)",
  "Avenants ou actes de renégociation",
  "Courriers et e-mails échangés avec la banque",
];

const faq = [
  {
    q: "Quelle est la dernière jurisprudence sur les prêts CHF ?",
    a: "Les arrêts de la Cour de cassation du 9 juillet 2025 (n° 24-19.647 et n° 24-18.018) constituent les décisions les plus récentes. Ils ont précisé les critères d'appréciation de la transparence des clauses de risque de change dans les prêts immobiliers en francs suisses.",
  },
  {
    q: "Les particuliers sont-ils concernés par ces décisions ?",
    a: "Oui. Ces décisions portent sur les prêts immobiliers en francs suisses souscrits par des particuliers résidant en France. Elles s'appliquent aux dossiers dans lesquels les clauses de risque de change et l'information précontractuelle sont en question.",
  },
  {
    q: "Les frontaliers sont-ils concernés ?",
    a: "Oui, potentiellement. Le statut de frontalier — payé en CHF — ne protège pas nécessairement contre le risque de change lorsque le bien immobilier est situé en France et valorisé en euros. Ces décisions s'appliquent selon les circonstances propres à chaque dossier.",
  },
  {
    q: "Une jurisprudence favorable suffit-elle à confirmer un recours ?",
    a: "Non. Une jurisprudence favorable fixe un cadre d'analyse mais ne suffit pas à elle seule à confirmer un recours. Il faut encore que les faits du dossier correspondent aux critères retenus : contenu des clauses, qualité de l'information remise, documents disponibles, délais applicables.",
  },
  {
    q: "Quels documents vérifier après une jurisprudence ?",
    a: "L'offre de prêt, les conditions particulières, la notice d'information sur le risque de change, les simulations chiffrées remises avant signature et les tableaux d'amortissement. Ces pièces permettent de vérifier si les critères de transparence posés par la jurisprudence étaient respectés.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
      headline: "Dernières jurisprudences franc suisse pour particuliers",
      description:
        "Synthèse pédagogique des dernières décisions de jurisprudence concernant les particuliers ayant souscrit un prêt immobilier en francs suisses.",
      url: `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dernières jurisprudences franc suisse pour particuliers",
          item: `${SITE_URL}/guides/dernieres-jurisprudences-franc-suisse-particuliers`,
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

export default function GuideJurisprudences() {
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
              <span>Dernières jurisprudences franc suisse</span>
            </nav>
            <span className="article-cat-badge">Jurisprudence</span>
            <h1>Dernières jurisprudences franc suisse pour particuliers</h1>
            <p className="article-hero-intro">
              Cette page synthétise les évolutions jurisprudentielles récentes
              utiles pour les particuliers ayant souscrit un prêt immobilier en
              francs suisses ou indexé sur le CHF. Elle présente les décisions
              clés et ce qu'elles impliquent concrètement pour l'analyse d'un
              dossier.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Une décision de jurisprudence donne un cadre d'analyse, mais elle
              ne suffit pas à elle seule à confirmer un recours.
            </p>
            <div className="article-meta">
              <span>Jurisprudence</span>
              <span className="article-meta-sep" />
              <span>7 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Pourquoi les particuliers sont concernés par la jurisprudence prêt CHF</h2>
          <p>
            Les prêts immobiliers en francs suisses ont été souscrits en grande
            partie par des particuliers résidant en France, souvent pour financer
            un bien immobilier situé sur le territoire français. La jurisprudence
            développée ces dernières années porte précisément sur cette
            configuration.
          </p>
          <ul>
            <li>
              <strong>Prêt immobilier :</strong> les décisions portent
              principalement sur des crédits destinés à financer l'acquisition
              d'un bien immobilier à usage d'habitation, ce qui déclenche
              l'application des protections du droit de la consommation.
            </li>
            <li>
              <strong>Bien situé en France :</strong> un bien valorisé en euros
              mais financé en CHF crée une exposition structurelle au risque de
              change, indépendamment de la situation professionnelle de
              l'emprunteur.
            </li>
            <li>
              <strong>Risque de change :</strong> la jurisprudence s'est
              intéressée à la qualité de l'information délivrée sur ce risque,
              notamment la transparence des clauses contractuelles et l'existence
              de simulations chiffrées.
            </li>
            <li>
              <strong>Frontaliers et non frontaliers :</strong> la jurisprudence
              ne se limite pas aux frontaliers. Des emprunteurs ayant des revenus
              en euros peuvent également être concernés selon les circonstances
              de leur dossier.
            </li>
          </ul>
          <p>
            Pour en savoir plus sur le profil des emprunteurs concernés,{" "}
            <Link href="/blog/pret-chf-frontalier">
              consultez notre guide sur le prêt CHF frontalier
            </Link>
            .
          </p>

          <h2>Les décisions récentes à connaître</h2>
          <p>
            Plusieurs décisions majeures ont précisé le cadre d'analyse
            applicable aux prêts immobiliers en francs suisses.
          </p>
          {decisionsCards.map((card) => (
            <div key={card.title} className="article-retenir" style={{ marginBottom: "20px" }}>
              <p className="article-retenir-label">{card.title}</p>
              <ul>
                <li><strong>Point clé :</strong> {card.pointCle}</li>
                <li>{card.text}</li>
                <li style={{ fontStyle: "italic", opacity: 0.85 }}>{card.prudence}</li>
              </ul>
            </div>
          ))}
          <p>
            Pour une analyse détaillée de l'arrêt du 9 juillet 2025,{" "}
            <Link href="/blog/cour-cassation-9-juillet-2025-pret-chf">
              consultez notre article dédié à ces décisions
            </Link>
            .
          </p>

          <h2>Ce que ces décisions changent pour les emprunteurs</h2>
          <p>
            Ces évolutions jurisprudentielles ont plusieurs conséquences
            pratiques pour l'analyse des dossiers de prêts CHF.
          </p>
          <ul>
            <li>
              <strong>Risque de change apprécié sur la durée :</strong>{" "}
              l'information devait permettre de comprendre les effets possibles
              non seulement à la souscription, mais sur vingt ans ou plus.
              Une vision limitée au court terme est insuffisante.
            </li>
            <li>
              <strong>Transparence :</strong> les clauses relatives au risque de
              change doivent être rédigées de manière à permettre à l'emprunteur
              moyen de comprendre leur fonctionnement et leurs conséquences
              économiques concrètes.
            </li>
            <li>
              <strong>Information concrète :</strong> une mention générale du
              risque de change ne suffit pas. Des exemples chiffrés, des
              simulations sur des scénarios défavorables et une explication des
              mécanismes sont nécessaires.
            </li>
            <li>
              <strong>Frontaliers potentiellement concernés :</strong> même pour
              les emprunteurs payés en CHF, la jurisprudence prend en compte
              l'évolution possible de la situation professionnelle et les risques
              liés à la revente du bien en euros.
            </li>
            <li>
              <strong>Analyse des documents :</strong> les pièces remises avant
              la signature — notices, simulations, brochures — sont des éléments
              centraux de l'appréciation. Leur existence et leur contenu
              déterminent souvent l'issue de l'analyse.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez vérifier si les critères jurisprudentiels
              correspondent à votre dossier ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Ce que ces décisions ne garantissent pas</h2>
          <p>
            Il est important de ne pas sur-interpréter les évolutions
            jurisprudentielles. Ces décisions fixent un cadre d'analyse,
            mais ne créent pas de droits automatiques.
          </p>
          <div className="juri-four-grid">
            {garantiesCards.map((card) => (
              <div key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <h2>Quels documents relire après une jurisprudence ?</h2>
          <p>
            Pour vérifier si les critères posés par la jurisprudence récente
            s'appliquent à votre dossier, les documents suivants sont
            essentiels.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Pour une présentation complète des pièces à réunir,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Comment vérifier votre propre dossier ?</h2>
          <ol>
            <li>
              <strong>Lire la page jurisprudence :</strong> la{" "}
              <Link href="/jurisprudence">page jurisprudence prêt CHF</Link>{" "}
              présente les critères retenus par les juridictions et les
              principales évolutions depuis 2020.
            </li>
            <li>
              <strong>Faire le test d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              identifie les principaux signaux présents dans votre dossier en
              3 questions.
            </li>
            <li>
              <strong>Réaliser une simulation indicative :</strong> la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d'estimer l'impact du taux EUR/CHF sur votre capital.
            </li>
            <li>
              <strong>Rassembler les documents :</strong> réunir l'offre de
              prêt, les conditions particulières, les notices d'information et
              les simulations remises avant signature.
            </li>
            <li>
              <strong>Comparer avec les critères de transparence :</strong>{" "}
              vérifier si les clauses de votre contrat permettaient de
              comprendre le mécanisme du risque de change et d'en mesurer les
              conséquences économiques possibles. Pour les dossiers Crédit
              Mutuel, consultez également le{" "}
              <Link href="/guides/pret-en-devise-chf-credit-mutuel">
                guide dédié
              </Link>
              .
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                La jurisprudence récente — notamment les arrêts du 9 juillet 2025
                — a renforcé les exigences de transparence sur les clauses de
                risque de change dans les prêts CHF.
              </li>
              <li>
                Ces décisions ne créent pas de droit automatique. Chaque dossier
                reste à analyser selon ses clauses, ses documents et ses délais.
              </li>
              <li>
                Les documents remis avant signature — notices, simulations,
                exemples chiffrés — sont les pièces centrales de l'appréciation.
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
            juridique personnalisé. L'analyse dépend toujours du contrat, des
            documents remis et de la situation de l'emprunteur.
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
            <h2>Vérifier votre dossier prêt CHF</h2>
            <p>
              Le test d'éligibilité identifie les signaux correspondant aux
              critères jurisprudentiels. La simulation indicative estime
              l'impact du taux de change.
            </p>
            <div className="article-cta-actions">
              <Link href="/jurisprudence" className="juri-cta-primary-btn">
                Comprendre la jurisprudence prêt CHF
              </Link>
              <Link href="/eligibilite" className="juri-cta-secondary-btn">
                Tester mon éligibilité
              </Link>
            </div>
            <p style={{ marginTop: "18px", textAlign: "center", fontSize: "14px", opacity: 0.7 }}>
              <Link href="/simulation" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                Faire une simulation indicative →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
