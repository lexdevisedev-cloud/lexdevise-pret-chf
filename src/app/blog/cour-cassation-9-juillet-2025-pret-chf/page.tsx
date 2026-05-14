import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Cour de cassation 9 juillet 2025 et prêts CHF",
  description:
    "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses, le risque de change et l'information due aux emprunteurs frontaliers.",
  alternates: { canonical: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf` },
  openGraph: {
    title: "Cour de cassation 9 juillet 2025 et prêts CHF",
    description:
      "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses et le risque de change.",
    url: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Les décisions du 9 juillet 2025 concernent-elles tous les prêts CHF ?",
    a: "Non. Ces décisions concernent les contrats de crédit immobilier libellés ou indexés en francs suisses conclus avec des consommateurs. Chaque dossier doit être analysé individuellement selon les clauses du contrat, les documents remis et la situation de l'emprunteur.",
  },
  {
    q: "Le fait d'être frontalier change-t-il quelque chose après le 9 juillet 2025 ?",
    a: "Les décisions du 9 juillet 2025 ont clarifié que le statut de frontalier ne suffit pas à exclure l'exigence d'information transparente sur le risque de change. L'appréciation dépend toujours des documents et des clauses contractuelles spécifiques.",
  },
  {
    q: "Ces décisions garantissent-elles un recours pour les emprunteurs CHF ?",
    a: "Non. Ces décisions précisent les exigences d'information et les critères d'analyse, mais ne créent pas de droit automatique à un recours. Chaque situation doit être évaluée au regard du contrat, des pièces disponibles et des délais applicables.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
      headline: "Cour de cassation du 9 juillet 2025 : ce que cela change pour les prêts CHF",
      description:
        "Les décisions du 9 juillet 2025 ont renforcé l'intérêt d'analyser le risque de change sur toute la durée du contrat.",
      url: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Cour de cassation 9 juillet 2025", item: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf` },
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

export default function ArticleCourdeCassation2025() {
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
              <span>Cour de cassation 9 juillet 2025</span>
            </nav>
            <span className="article-cat-badge">Jurisprudence</span>
            <h1>Cour de cassation du 9 juillet 2025 : ce que cela change pour les prêts CHF</h1>
            <p className="article-hero-intro">
              Les décisions rendues par la Cour de cassation le 9 juillet 2025
              ont renforcé l'attention portée à l'information due aux emprunteurs
              ayant souscrit un prêt immobilier en francs suisses. Elles
              confirment notamment que le risque de change devait être apprécié
              sur toute la durée du contrat, y compris pour les emprunteurs
              frontaliers.
            </p>
            <div className="article-meta">
              <span>Jurisprudence</span>
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

          <h2>Le contexte : une jurisprudence en évolution depuis plusieurs années</h2>
          <p>
            Pour comprendre l'importance des décisions du 9 juillet 2025, il faut
            replacer ces arrêts dans une évolution jurisprudentielle plus large.
            Depuis plusieurs années, les tribunaux français et la Cour de justice
            de l'Union européenne ont progressivement renforcé les exigences de
            transparence applicables aux prêts libellés en devise étrangère.
          </p>
          <p>
            Cette évolution s'est fondée notamment sur la directive européenne
            relative aux clauses abusives, qui impose que les clauses
            contractuelles soient rédigées de façon claire et compréhensible.
            Pour les clauses liées au risque de change, cela implique que
            l'emprunteur soit en mesure de comprendre les conséquences
            économiques concrètes d'une variation du taux de change.
          </p>

          <h2>Ce que les décisions du 9 juillet 2025 apportent</h2>
          <p>
            Les décisions du 9 juillet 2025 s'inscrivent dans cette continuité
            en précisant plusieurs points importants pour les prêts CHF :
          </p>
          <ul>
            <li>Le risque de change doit être apprécié sur <strong>toute la durée du contrat</strong>, pas seulement à la date de souscription ;</li>
            <li>L'information remise devait permettre à l'emprunteur de comprendre les effets d'une appréciation du franc suisse sur le <strong>capital restant dû</strong> ;</li>
            <li>Le statut de frontalier ne constitue pas, à lui seul, une présomption suffisante de compréhension du risque ;</li>
            <li>Une clause générale dans les conditions générales ne peut pas valoir information éclairée si elle ne permet pas une compréhension concrète.</li>
          </ul>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le risque devait être présenté sur la durée totale du prêt, y compris les scénarios défavorables.</li>
              <li>Le statut de frontalier ne dispense pas la banque de son obligation d'information transparente.</li>
              <li>Ces décisions ne créent pas de droit automatique : chaque dossier reste apprécié individuellement.</li>
            </ul>
          </div>

          <h2>Le risque de change apprécié sur la durée : pourquoi c'est important</h2>
          <p>
            L'un des apports les plus significatifs de ces décisions est la
            précision sur la durée de l'appréciation du risque. Avant ces arrêts,
            certains contrats mentionnaient le risque de change en se fondant sur
            des hypothèses à court terme ou sur la situation au moment de la
            signature.
          </p>
          <p>
            Or, un crédit immobilier peut s'étendre sur 20 ou 25 ans. Un
            emprunteur qui souscrit en 2007, à un moment où l'euro est fort face
            au franc suisse, ne peut pas apprécier les conséquences de son
            engagement uniquement sur la base du taux de change de l'époque. La
            jurisprudence affirme que l'information devait couvrir des scénarios
            d'évolution défavorables sur toute la durée prévue du prêt.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez vérifier si votre prêt CHF peut être analysé à la
              lumière de ces décisions récentes ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>La situation des emprunteurs frontaliers après le 9 juillet 2025</h2>
          <p>
            Pendant longtemps, le statut de frontalier — c'est-à-dire le fait de
            percevoir ses revenus en francs suisses — a souvent été présenté comme
            une protection naturelle contre le risque de change. Les décisions du
            9 juillet 2025 nuancent cette présomption.
          </p>
          <p>
            La Cour rappelle que même un emprunteur percevant des revenus en CHF
            peut être exposé au risque de change sur la durée, notamment lorsque
            le bien financé est situé en France, ou lorsque sa situation
            professionnelle est susceptible d'évoluer. L'obligation d'information
            transparente ne disparaît pas en fonction du profil de l'emprunteur.
          </p>

          <h2>Information transparente : ce que cela signifie concrètement</h2>
          <p>
            L'exigence de transparence ne se réduit pas à l'existence d'une
            mention du risque de change dans le contrat. Elle implique que
            l'emprunteur ait été mis en mesure de comprendre :
          </p>
          <ul>
            <li>Comment fonctionne concrètement le prêt en devise étrangère ;</li>
            <li>Comment une variation EUR/CHF se répercute sur le capital restant dû ;</li>
            <li>Quelles seraient les conséquences en cas de revente ou de remboursement anticipé dans un contexte de franc fort ;</li>
            <li>Sur quelle période et avec quels scénarios ces risques ont été illustrés.</li>
          </ul>
          <p>
            Si ces éléments n'ont pas été communiqués avant la signature, ou si
            l'information était trop abstraite pour permettre une compréhension
            réelle, cela peut justifier un examen du dossier.
          </p>

          <h2>Absence d'automaticité : un point de prudence essentiel</h2>
          <p>
            Ces décisions ne créent pas de droit automatique à un recours. Elles
            précisent les conditions dans lesquelles un prêt CHF peut être
            analysé, mais chaque dossier reste apprécié individuellement selon :
          </p>
          <ul>
            <li>Les clauses spécifiques du contrat ;</li>
            <li>Les documents remis avant et lors de la signature ;</li>
            <li>La situation de l'emprunteur et son profil au moment de la souscription ;</li>
            <li>Les délais légaux applicables ;</li>
            <li>L'existence ou non d'un préjudice chiffrable.</li>
          </ul>

          <h2>Pour aller plus loin</h2>
          <p>
            Pour comprendre en détail l'évolution de la jurisprudence depuis les
            premières décisions jusqu'aux arrêts de 2025,{" "}
            <Link href="/jurisprudence">
              consultez notre page complète sur la jurisprudence des prêts CHF
            </Link>
            .
          </p>
          <p>
            Si vous avez souscrit un prêt immobilier en francs suisses et
            souhaitez identifier les éléments pertinents dans votre situation,
            vous pouvez également{" "}
            <Link href="/blog/pret-chf-frontalier">
              consulter notre guide sur le prêt CHF frontalier
            </Link>{" "}
            ou{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              notre article sur les clauses à vérifier dans un prêt CHF
            </Link>
            .
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
            <h2>Votre prêt CHF est-il concerné par ces évolutions ?</h2>
            <p>
              Le test d'éligibilité permet d'identifier les signaux à vérifier
              dans votre dossier, à la lumière des critères jurisprudentiels
              récents.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité prêt CHF
              </Link>
              <Link href="/jurisprudence" className="juri-cta-secondary-btn">
                Comprendre la jurisprudence des prêts CHF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
