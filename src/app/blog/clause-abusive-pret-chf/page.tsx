import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Clause abusive prêt CHF : les points à vérifier | Prêts CHF Info",
  description:
    "Comprendre les clauses à examiner dans un prêt immobilier en francs suisses : devise, conversion, remboursement, risque de change, transparence et documents bancaires.",
  alternates: { canonical: `${SITE_URL}/blog/clause-abusive-pret-chf` },
  openGraph: {
    title: "Clause abusive prêt CHF : les points à vérifier | Prêts CHF Info",
    description:
      "Les clauses à examiner dans un prêt immobilier en francs suisses pour comprendre les enjeux contractuels.",
    url: `${SITE_URL}/blog/clause-abusive-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clause abusive prêt CHF : les points à vérifier | Prêts CHF Info",
    description:
      "Comprendre les clauses à examiner dans un prêt immobilier en francs suisses : devise, conversion, remboursement, risque de change et transparence.",
  },
};

const faq = [
  {
    q: "Toute clause de risque de change est-elle abusive ?",
    a: "Non. Une clause de risque de change n'est pas abusive en elle-même. Ce qui peut être examiné, c'est la clarté de la clause : l'emprunteur était-il en mesure de comprendre concrètement les conséquences économiques d'une variation du taux EUR/CHF sur le capital restant dû, le coût de remboursement ou le prix d'une revente ?",
  },
  {
    q: "Une clause réputée non écrite annule-t-elle le prêt ?",
    a: "Pas nécessairement. Lorsqu'une clause est écartée, les conséquences dépendent de la nature de la clause concernée et de la structure du contrat. Dans certains cas, le contrat peut subsister sans la clause. Dans d'autres, les effets peuvent être différents. Chaque situation doit être analysée individuellement.",
  },
  {
    q: "Une simple mention du risque suffit-elle à remplir l'obligation d'information ?",
    a: "Selon les critères jurisprudentiels, une mention générale dans les conditions générales peut ne pas suffire. L'obligation d'information implique que l'emprunteur soit en mesure de comprendre le mécanisme concret du risque, ses conséquences chiffrées et son impact potentiel sur la durée du contrat.",
  },
  {
    q: "Quels documents relire en priorité pour les clauses ?",
    a: "L'offre de prêt et les conditions particulières contiennent les clauses spécifiques au contrat. Les conditions générales précisent les règles applicables à la devise et à la conversion. Les notices d'information permettent de vérifier si le risque de change a été expliqué de façon claire et illustrée.",
  },
  {
    q: "Un frontalier peut-il invoquer une clause abusive ?",
    a: "Potentiellement. Le statut de frontalier ne constitue pas une protection automatique contre une clause insuffisamment transparente. La jurisprudence récente rappelle que l'obligation d'information s'apprécie selon la clarté des documents remis, indépendamment des revenus perçus par l'emprunteur.",
  },
];

const clausesSensibles = [
  {
    title: "Clause de devise",
    text: "Elle définit la monnaie dans laquelle le capital est exprimé. Si le capital est libellé en CHF, le montant à rembourser en euros dépend directement du taux de change en vigueur au moment du remboursement.",
  },
  {
    title: "Clause de remboursement",
    text: "Elle précise comment les mensualités sont calculées et converties. Si le remboursement est effectué en euros à partir d'un capital en CHF, le taux de change applicable à chaque échéance est déterminant.",
  },
  {
    title: "Clause de conversion",
    text: "Certains contrats prévoient la possibilité de convertir le prêt en euros. Les conditions d'exercice de cette option — délais, taux applicable, frais — doivent être précises et accessibles pour constituer une protection réelle.",
  },
  {
    title: "Clause de risque de change",
    text: "Elle informe l'emprunteur de l'existence d'un risque lié à la variation EUR/CHF. Son analyse porte sur la clarté : l'emprunteur pouvait-il comprendre concrètement les conséquences économiques d'une appréciation du franc suisse ?",
  },
  {
    title: "Clause de remboursement anticipé",
    text: "Elle fixe les modalités de remboursement anticipé. Dans un prêt CHF, le montant à solder est converti au taux du jour. Une clause opaque sur ce point peut ne pas avoir permis à l'emprunteur d'anticiper le coût réel d'un remboursement anticipé.",
  },
  {
    title: "Clause de capital restant dû",
    text: "Elle définit comment le capital restant dû est calculé et exprimé. Si ce capital est exprimé en CHF, sa contrevaleur en euros varie avec le taux de change, ce qui peut affecter la situation lors d'une revente ou d'un bilan patrimonial.",
  },
  {
    title: "Clause d'adossement éventuel",
    text: "Certains prêts in fine étaient adossés à un support de capitalisation en CHF. La clause d'adossement précise les conditions de ce mécanisme. Sa compréhension est importante pour apprécier le risque global.",
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
        "Comprendre les clauses à examiner dans un prêt immobilier en francs suisses : devise, conversion, remboursement, risque de change, transparence et documents bancaires.",
      url: `${SITE_URL}/blog/clause-abusive-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-19",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Clause abusive prêt CHF",
          item: `${SITE_URL}/blog/clause-abusive-pret-chf`,
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
            <h1>Clause abusive prêt CHF : ce qu&apos;il faut vérifier dans le contrat</h1>
            <p className="article-hero-intro">
              Une clause d&apos;un prêt CHF peut mériter une vérification lorsqu&apos;elle fait peser un risque de
              change sur l&apos;emprunteur sans lui permettre d&apos;en comprendre clairement les conséquences
              économiques. L&apos;analyse dépend toujours du contrat, des documents remis et de la situation
              de l&apos;emprunteur.
            </p>
            <div className="article-meta">
              <span>Clauses contractuelles</span>
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

          <h2>Qu&apos;est-ce qu&apos;une clause abusive dans un prêt CHF ?</h2>
          <p>
            Le droit de la consommation européen définit une clause abusive comme toute stipulation qui crée un
            déséquilibre significatif entre les droits et obligations des parties, au détriment du consommateur.
            Ce cadre s&apos;applique aux contrats de crédit immobilier conclus entre un établissement professionnel
            et un particulier.
          </p>
          <p>
            Dans le contexte des prêts en francs suisses, ce sont principalement les clauses liées à la devise,
            à la conversion et à l&apos;information sur le risque de change qui ont été examinées par les tribunaux.
            Une clause peut faire l&apos;objet d&apos;une analyse non pas parce qu&apos;elle est clairement défavorable en
            apparence, mais parce qu&apos;elle ne permet pas à l&apos;emprunteur de comprendre réellement ce à quoi il
            s&apos;engage.
          </p>
          <p>
            Il est important de souligner que la présence d&apos;une clause de risque de change dans un contrat n&apos;est
            pas abusive en elle-même. Ce qui peut être analysé, c&apos;est la clarté avec laquelle cette clause
            permet à l&apos;emprunteur de mesurer les conséquences économiques concrètes d&apos;une variation du taux
            EUR/CHF sur la durée du prêt. L&apos;analyse est toujours conduite dossier par dossier, sans automaticité.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Une clause de risque de change n&apos;est pas abusive par nature : c&apos;est sa clarté qui est examinée.</li>
              <li>L&apos;analyse porte sur la compréhension réelle, pas sur la simple présence d&apos;une mention dans le contrat.</li>
              <li>Chaque dossier est apprécié individuellement selon ses clauses et ses documents propres.</li>
            </ul>
          </div>

          <h2>Les clauses les plus sensibles dans un prêt en francs suisses</h2>
          <p>
            Dans un prêt CHF, plusieurs types de clauses méritent une attention particulière. Voici les
            principales catégories et leur enjeu spécifique.
          </p>
          <ul>
            {clausesSensibles.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong> — {c.text}
              </li>
            ))}
          </ul>

          <h2>Pourquoi la transparence est déterminante</h2>
          <p>
            L&apos;exigence de transparence est au cœur de l&apos;analyse des clauses d&apos;un prêt CHF. Selon les critères
            progressivement dégagés par la jurisprudence française et européenne, une clause relative au risque
            de change doit permettre à l&apos;emprunteur de comprendre concrètement et non pas seulement
            formellement ce à quoi il s&apos;engage.
          </p>
          <p>
            Cela implique plusieurs conditions. D&apos;abord, la clause doit être rédigée de façon accessible :
            des termes techniques non définis, des formules trop abstraites ou des renvois complexes entre
            plusieurs documents peuvent rendre la compréhension difficile. Ensuite, l&apos;emprunteur doit pouvoir
            mesurer les <strong>conséquences économiques concrètes</strong> d&apos;une variation du taux de change.
            Une mention générale du type "le taux de change peut varier" ne suffit pas si aucun exemple
            chiffré ne vient l&apos;illustrer.
          </p>
          <p>
            Enfin, l&apos;information doit porter sur la durée effective du prêt. Un crédit immobilier s&apos;étend
            souvent sur 15 à 25 ans. Les conséquences d&apos;une appréciation du franc suisse doivent être
            présentées sur cette durée, dans des scénarios réalistes incluant des hypothèses défavorables.
            Si les simulations remises avant signature ne couvrent que des scénarios favorables, l&apos;information
            peut être considérée comme insuffisante.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez savoir si votre contrat prêt CHF mérite une analyse ? Le test d&apos;éligibilité
              identifie les signaux principaux.
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester mon éligibilité →
            </Link>
          </div>

          <h2>Clause réputée non écrite : ce que cela peut signifier</h2>
          <p>
            Lorsqu&apos;un tribunal considère qu&apos;une clause ne satisfait pas aux exigences de transparence ou qu&apos;elle
            crée un déséquilibre significatif, il peut la déclarer réputée non écrite. Cette notion juridique
            signifie que la clause est écartée du contrat comme si elle n&apos;avait jamais existé.
          </p>
          <p>
            Les conséquences de cette qualification varient selon la nature de la clause concernée et la
            structure du contrat. Dans certains cas, le contrat peut se poursuivre sans la clause, avec
            les effets qui en découlent. Dans d&apos;autres, l&apos;absence de la clause peut avoir des implications
            plus profondes sur les droits et obligations des parties.
          </p>
          <p>
            Il est important de préciser que ces conséquences ne sont pas automatiques. Elles dépendent de
            l&apos;appréciation du juge au regard des clauses spécifiques du contrat, des documents remis, de la
            situation de l&apos;emprunteur et des demandes formulées. Aucun résultat ne peut être garanti à l&apos;avance.
            Pour comprendre les décisions récentes sur ce point,{" "}
            <Link href="/jurisprudence">
              consultez notre page sur la jurisprudence des prêts CHF
            </Link>
            .
          </p>

          <h2>Quels documents permettent d&apos;apprécier les clauses ?</h2>
          <p>
            L&apos;analyse des clauses repose sur les documents effectivement remis à l&apos;emprunteur. Ce tableau
            récapitule les principales pièces et ce qu&apos;elles permettent de vérifier.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="article-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Ce qu&apos;il permet de vérifier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Offre de prêt</td>
                  <td>La devise du capital, le montant en CHF, les conditions initiales et les clauses principales</td>
                </tr>
                <tr>
                  <td>Conditions particulières</td>
                  <td>Les clauses spécifiques au contrat : taux, durée, garanties, conversion éventuelle</td>
                </tr>
                <tr>
                  <td>Conditions générales</td>
                  <td>Les règles applicables à la devise, à la conversion et au risque de change</td>
                </tr>
                <tr>
                  <td>Notice d&apos;information sur le risque de change</td>
                  <td>L&apos;existence, la date, le contenu et les simulations éventuelles sur le risque EUR/CHF</td>
                </tr>
                <tr>
                  <td>Simulations chiffrées</td>
                  <td>La présence de scénarios défavorables EUR/CHF illustrés avant signature</td>
                </tr>
                <tr>
                  <td>Tableaux d&apos;amortissement</td>
                  <td>L&apos;évolution du capital restant dû en CHF et sa contrevaleur en euros</td>
                </tr>
                <tr>
                  <td>Avenants</td>
                  <td>Les modifications contractuelles et leurs conditions de mise en place</td>
                </tr>
                <tr>
                  <td>Échanges avec la banque</td>
                  <td>Les informations effectivement communiquées à l&apos;emprunteur avant et pendant le contrat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Pour une liste complète et un guide de lecture des pièces,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents à vérifier pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Comment vérifier votre situation ?</h2>
          <p>
            Si vous pensez que certaines clauses de votre contrat méritent une attention particulière, voici
            une démarche structurée pour commencer une première vérification.
          </p>
          <ol>
            <li>
              <strong>Identifier les clauses liées à la devise</strong> — Repérez dans l&apos;offre de prêt et les
              conditions générales les clauses relatives à la devise du capital, aux modalités de remboursement,
              à la conversion éventuelle et au risque de change.
            </li>
            <li>
              <strong>Retrouver les documents de souscription</strong> — Réunissez les notices d&apos;information,
              les simulations remises par la banque et les échanges écrits avec le conseiller. Ces pièces
              permettent de vérifier si les clauses étaient accompagnées d&apos;explications concrètes.
            </li>
            <li>
              <strong>Faire le test d&apos;éligibilité</strong> — Le{" "}
              <Link href="/eligibilite">test en 3 questions</Link>{" "}
              permet d&apos;identifier rapidement les signaux principaux à examiner dans votre dossier.
            </li>
            <li>
              <strong>Faire une simulation indicative</strong> — Le{" "}
              <Link href="/simulation">simulateur indicatif</Link>{" "}
              permet de visualiser l&apos;impact du taux EUR/CHF sur votre capital, indépendamment de l&apos;analyse
              des clauses.
            </li>
            <li>
              <strong>Comparer avec les exigences de la jurisprudence</strong> — La{" "}
              <Link href="/jurisprudence">page jurisprudence prêt CHF</Link>{" "}
              explique les critères retenus par les décisions récentes pour apprécier la transparence
              contractuelle.
            </li>
          </ol>

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
            Cet article a une vocation pédagogique et ne constitue pas un avis juridique personnalisé.
            L&apos;analyse dépend toujours du contrat, des documents remis et de la situation de l&apos;emprunteur.
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
              Le test d&apos;éligibilité permet d&apos;identifier les principaux signaux liés aux clauses contractuelles
              d&apos;un prêt immobilier en francs suisses.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/jurisprudence" className="juri-cta-secondary-btn">
                Comprendre la jurisprudence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
