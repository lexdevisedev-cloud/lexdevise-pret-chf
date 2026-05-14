import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Clause abusive prêt CHF : les points à vérifier",
  description:
    "Découvrez les clauses à examiner dans un prêt immobilier en francs suisses : devise, conversion, remboursement, information sur le risque de change et transparence.",
  alternates: { canonical: `${SITE_URL}/blog/clause-abusive-pret-chf` },
  openGraph: {
    title: "Clause abusive prêt CHF : les points à vérifier",
    description:
      "Les clauses à examiner dans un prêt immobilier en francs suisses pour comprendre les enjeux contractuels.",
    url: `${SITE_URL}/blog/clause-abusive-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Qu'est-ce qu'une clause abusive dans un prêt CHF ?",
    a: "Une clause peut être qualifiée d'abusive lorsqu'elle crée un déséquilibre significatif entre les droits et obligations des parties, au détriment du consommateur. Dans le cadre des prêts CHF, les clauses relatives à la devise, à la conversion et à l'information sur le risque de change sont les plus souvent examinées.",
  },
  {
    q: "Une clause générale sur le risque de change peut-elle suffire ?",
    a: "Selon les exigences jurisprudentielles, une clause générale peut ne pas suffire si elle ne permet pas à l'emprunteur de mesurer concrètement les conséquences économiques du risque de change sur la durée du contrat.",
  },
  {
    q: "Faut-il conserver les documents originaux du contrat ?",
    a: "Oui. L'offre de prêt, les conditions générales et particulières, les notices d'information, les simulations remises et les échanges avec la banque sont des pièces essentielles pour permettre une analyse des clauses contractuelles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/clause-abusive-pret-chf`,
      headline: "Clause abusive prêt CHF : ce qu'il faut vérifier dans le contrat",
      description:
        "Les clauses relatives à la devise, au remboursement et au risque de change peuvent être déterminantes dans l'analyse d'un prêt CHF.",
      url: `${SITE_URL}/blog/clause-abusive-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/clause-abusive-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Clause abusive prêt CHF", item: `${SITE_URL}/blog/clause-abusive-pret-chf` },
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

export default function ArticleClauseAbusive() {
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
              <span>Clause abusive prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Clauses contractuelles</span>
            <h1>Clause abusive prêt CHF : ce qu'il faut vérifier dans le contrat</h1>
            <p className="article-hero-intro">
              Dans un prêt immobilier en francs suisses, certaines clauses
              méritent une attention particulière : celles qui définissent la
              devise du prêt, les modalités de conversion, le remboursement et
              surtout l'information sur le risque de change. Ce guide explique
              quels éléments peuvent être déterminants dans l'analyse d'un
              contrat CHF.
            </p>
            <div className="article-meta">
              <span>Clauses contractuelles</span>
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

          <h2>Qu'entend-on par clause abusive dans un prêt CHF ?</h2>
          <p>
            Le droit de la consommation européen définit une clause abusive comme
            toute stipulation qui crée un déséquilibre significatif entre les
            droits et obligations des parties, au détriment du consommateur. Ce
            cadre s'applique aux contrats de crédit immobilier conclus entre un
            établissement professionnel et un consommateur.
          </p>
          <p>
            Dans le contexte des prêts en francs suisses, ce sont principalement
            les clauses liées à la devise, à la conversion et à l'information sur
            le risque de change qui ont été examinées par les tribunaux. Une
            clause peut être analysée non pas parce qu'elle est clairement
            défavorable en apparence, mais parce qu'elle ne permet pas à
            l'emprunteur de comprendre réellement ce à quoi il s'engage.
          </p>

          <h2>Les clauses de devise : ce qu'elles prévoient</h2>
          <p>
            Une clause de devise définit dans quelle monnaie le prêt est libellé
            ou exprimé. Dans un prêt CHF, cette clause peut prévoir que le
            capital emprunté est exprimé en francs suisses, que les remboursements
            sont calculés sur la base d'un capital en CHF, et que le taux de
            change applicable est celui du jour du remboursement.
          </p>
          <p>
            Ce type de clause transfère à l'emprunteur l'intégralité du risque
            de change. Si elle n'est pas accompagnée d'une explication claire de
            ses conséquences économiques, elle peut être susceptible d'être
            analysée sous l'angle de la transparence contractuelle.
          </p>

          <h2>Les clauses de conversion : un point technique souvent méconnu</h2>
          <p>
            Certains contrats incluent une clause de conversion permettant à
            l'emprunteur — ou parfois à la banque — de convertir le prêt en
            euros. Ces clauses méritent une lecture attentive : les conditions de
            déclenchement, le taux de conversion applicable, les frais éventuels
            et les délais peuvent varier considérablement d'un contrat à l'autre.
          </p>
          <p>
            Si la clause de conversion n'était pas présentée clairement comme une
            option concrète, avec ses modalités précises, elle peut ne pas avoir
            constitué une protection réelle pour l'emprunteur.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Les clauses de devise définissent qui supporte le risque de change : en général, l'emprunteur.</li>
              <li>Les clauses de conversion doivent être claires et accessibles pour constituer une vraie protection.</li>
              <li>L'exigence de transparence porte sur la compréhension réelle, pas sur la simple mention dans le contrat.</li>
            </ul>
          </div>

          <h2>L'information précontractuelle sur le risque de change</h2>
          <p>
            C'est souvent le point central de l'analyse. Les tribunaux ont
            progressivement affirmé que mentionner le risque de change dans une
            clause générale ne suffisait pas. L'emprunteur devait être en mesure
            de comprendre, avant de signer, les conséquences concrètes d'une
            appréciation du franc suisse sur :
          </p>
          <ul>
            <li>Le montant total à rembourser ;</li>
            <li>Le capital restant dû en euros ;</li>
            <li>Le coût d'un remboursement anticipé ou d'une revente.</li>
          </ul>
          <p>
            Si les documents remis avant signature ne contenaient pas de
            simulations chiffrées sur ces points, ou si les explications étaient
            trop abstraites, cela peut justifier un examen du dossier.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez savoir si votre contrat prêt CHF mérite une analyse ?
              Le test d'éligibilité identifie les signaux à vérifier.
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>La documentation remise à la signature</h2>
          <p>
            L'analyse d'un prêt CHF repose en grande partie sur les documents
            effectivement remis à l'emprunteur avant ou au moment de la
            signature. Il ne suffit pas qu'une information existe dans un
            document interne à la banque : encore faut-il qu'elle ait été
            communiquée à l'emprunteur de façon accessible et compréhensible.
          </p>
          <p>
            Les pièces qui peuvent faire la différence dans une analyse
            incluent notamment l'offre de prêt, les conditions générales et
            particulières, les notices spécifiques au risque de change, les
            simulations chiffrées et les échanges écrits avec le conseiller
            bancaire.
          </p>

          <h2>Que dit la jurisprudence sur ces clauses ?</h2>
          <p>
            La jurisprudence européenne, notamment via les décisions de la CJUE
            relatives à la directive sur les clauses abusives, a renforcé
            progressivement l'exigence de transparence sur les clauses de devise.
            En France, la Cour de cassation a suivi cette évolution, notamment
            dans ses arrêts de 2024 et 2025.
          </p>
          <p>
            Pour comprendre les implications de ces décisions,{" "}
            <Link href="/jurisprudence">
              consultez notre analyse de la jurisprudence des prêts CHF
            </Link>
            . Chaque dossier étant différent, l'appréciation dépend toujours
            des clauses spécifiques du contrat et des documents disponibles.
          </p>

          <h2>Dans quels cas envisager une vérification ?</h2>
          <p>
            Une analyse peut être envisagée, selon les pièces disponibles, dans
            les situations suivantes :
          </p>
          <ul>
            <li>Les conditions générales ne contiennent qu'une mention générale du risque de change ;</li>
            <li>Aucune simulation chiffrée n'a été remise avant la signature ;</li>
            <li>La clause de conversion était peu accessible ou assortie de conditions restrictives ;</li>
            <li>L'explication du mécanisme du prêt en devise était abstraite ou inexistante ;</li>
            <li>La notice spécifique au risque de change était absente ou non datée.</li>
          </ul>

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
            <h2>Votre contrat prêt CHF mérite peut-être une lecture attentive</h2>
            <p>
              Le test d'éligibilité permet d'identifier les principaux signaux
              liés aux clauses contractuelles d'un prêt immobilier en francs
              suisses.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité à un recours prêt CHF
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
