import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt toxique en francs suisses : comprendre les risques | Prêts CHF Info",
  description:
    "Comprendre pourquoi certains prêts immobiliers en francs suisses peuvent être perçus comme des prêts toxiques : risque de change, capital restant dû, clauses et information bancaire.",
  alternates: { canonical: `${SITE_URL}/guides/pret-toxique-franc-suisse` },
  openGraph: {
    title: "Prêt toxique en francs suisses : comprendre les risques | Prêts CHF Info",
    description:
      "Risque de change, capital restant dû, clauses de conversion : pourquoi certains prêts CHF sont perçus comme toxiques et comment vérifier son dossier.",
    url: `${SITE_URL}/guides/pret-toxique-franc-suisse`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt toxique en francs suisses : comprendre les risques | Prêts CHF Info",
    description:
      "Risque de change, capital restant dû, clauses de conversion : pourquoi certains prêts CHF sont perçus comme toxiques.",
  },
};

const situationsCards = [
  {
    title: "Frontalier suisse",
    text: "Payé en CHF, le frontalier semble protégé contre le risque de change. Mais en cas de perte d'emploi suisse, de retraite ou de revente du bien immobilier situé en France, l'exposition au change peut devenir significative.",
  },
  {
    title: "Emprunteur payé en euros",
    text: "Sans revenus en CHF, l'emprunteur est directement exposé au risque de change à chaque remboursement. Le coût effectif en euros varie selon le taux EUR/CHF du moment.",
  },
  {
    title: "Bien immobilier en France",
    text: "Un bien valorisé en euros doit être vendu en euros. Si le CHF s'est apprécié, le capital restant dû en euros peut dépasser le prix de vente, créant un déficit à la revente.",
  },
  {
    title: "Prêt déjà remboursé",
    text: "Un prêt soldé n'échappe pas nécessairement à l'analyse. Les conditions du remboursement — taux de change, montant soldé, date — peuvent révéler l'impact réel du risque de change.",
  },
  {
    title: "Prêt in fine",
    text: "Dans un prêt in fine, le capital est remboursé en une seule fois à l'échéance. Si le CHF s'est apprécié, ce remboursement final peut être très supérieur au montant initialement emprunté.",
  },
  {
    title: "Revente ou remboursement anticipé",
    text: "Ces moments cristallisent souvent le risque de change. Le capital restant dû en CHF est converti en euros au taux du jour — qui peut être très différent du taux de souscription.",
  },
];

const faq = [
  {
    q: "Tous les prêts CHF sont-ils des prêts toxiques ?",
    a: "Non. Le terme prêt toxique est utilisé dans le langage courant pour désigner un produit financier dont le risque est difficile à mesurer. Certains prêts CHF comportaient des informations claires, des simulations chiffrées et des notices détaillées. L'analyse dépend du contrat et des documents remis.",
  },
  {
    q: "Quelle différence entre prêt toxique et prêt en devise ?",
    a: "Le prêt en devise est une qualification contractuelle : le capital est libellé en devises étrangères. Le prêt toxique est une expression informelle qui désigne un produit dont le risque réel était difficile à anticiper pour l'emprunteur. Les deux notions peuvent se recouper sans se confondre.",
  },
  {
    q: "Le risque de change suffit-il à contester un prêt ?",
    a: "Non. L'existence d'un risque de change est inhérente à tout prêt en devise. Ce qui peut être analysé, c'est la qualité de l'information remise avant signature : les clauses étaient-elles compréhensibles ? Des simulations défavorables ont-elles été présentées ? Ces questions dépendent du dossier.",
  },
  {
    q: "Quels documents permettent de vérifier ?",
    a: "L'offre de prêt, les conditions particulières, la notice d'information sur le risque de change, les simulations chiffrées remises avant signature et les tableaux d'amortissement constituent les pièces centrales. Les échanges écrits avec la banque complètent le dossier.",
  },
  {
    q: "Que faire en cas de doute ?",
    a: "Commencer par rassembler les documents disponibles, faire le test d'éligibilité pour identifier les signaux présents dans le dossier, et réaliser une simulation indicative pour mesurer l'impact du taux de change. Ces étapes permettent d'avoir une première vision avant toute démarche.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/pret-toxique-franc-suisse`,
      headline: "Prêt toxique en francs suisses : comprendre les risques",
      description:
        "Guide pédagogique sur les caractéristiques d'un prêt CHF perçu comme toxique : risque de change, information bancaire et situations sensibles.",
      url: `${SITE_URL}/guides/pret-toxique-franc-suisse`,
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/guides/pret-toxique-franc-suisse`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prêt toxique en francs suisses",
          item: `${SITE_URL}/guides/pret-toxique-franc-suisse`,
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

export default function GuidePretToxique() {
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
              <span>Prêt toxique en francs suisses</span>
            </nav>
            <span className="article-cat-badge">Situations particulières</span>
            <h1>Prêt toxique en francs suisses : comprendre les risques</h1>
            <p className="article-hero-intro">
              Le terme "prêt toxique" est souvent utilisé pour désigner un crédit
              dont le risque réel est difficile à mesurer pour l'emprunteur. Dans
              le cas d'un prêt en francs suisses, ce risque peut venir de la
              devise, du taux EUR/CHF, du capital restant dû ou de la qualité
              de l'information remise avant signature.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Le terme prêt toxique ne suffit pas à qualifier juridiquement un
              contrat. Chaque dossier doit être analysé selon ses clauses, ses
              documents et sa situation.
            </p>
            <div className="article-meta">
              <span>Situations particulières</span>
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

          <h2>Qu'appelle-t-on un prêt toxique ?</h2>
          <p>
            Dans le langage courant, un prêt toxique désigne un produit
            financier dont le risque réel est difficile à anticiper pour
            l'emprunteur au moment de la souscription. Cette caractérisation
            est informelle et ne correspond pas à une catégorie juridique
            précise.
          </p>
          <p>
            Elle recouvre généralement plusieurs situations : un produit
            financier complexe, dont le fonctionnement n'est pas immédiatement
            compréhensible ; un coût final potentiellement variable et
            imprévisible ; un risque difficile à quantifier au moment de la
            signature. Dans le domaine des prêts immobiliers, elle a été
            associée aux crédits en francs suisses souscrits par des
            emprunteurs n'ayant pas nécessairement perçu le risque de change
            dans toute son ampleur.
          </p>
          <p>
            Il est important de distinguer le langage courant de l'analyse
            juridique. Un prêt peut être perçu comme toxique sans que cela
            suffise à établir un manquement de la banque à ses obligations
            d'information. À l'inverse, un contrat peut comporter des clauses
            problématiques sans que l'emprunteur ait utilisé ce terme.
          </p>

          <h2>Pourquoi certains prêts CHF peuvent être perçus comme toxiques</h2>
          <p>
            Les prêts immobiliers en francs suisses présentaient plusieurs
            caractéristiques pouvant rendre le risque difficile à anticiper.
          </p>
          <ul>
            <li>
              <strong>Dette liée au franc suisse :</strong> le capital emprunté
              ou le capital restant dû était exprimé en CHF. Toute appréciation
              du franc suisse augmentait mécaniquement le montant à rembourser
              en euros.
            </li>
            <li>
              <strong>Bien situé en France :</strong> financé en CHF mais
              valorisé en euros, le bien immobilier ne protégeait pas
              l'emprunteur contre le risque de change. En cas de revente, le
              produit en euros devait couvrir un capital en CHF dont la valeur
              en euros avait pu augmenter.
            </li>
            <li>
              <strong>Variation EUR/CHF :</strong> le taux de change n'est
              pas stable. Entre 2005 et 2015, le franc suisse s'est fortement
              apprécié face à l'euro. Les emprunteurs qui n'avaient pas mesuré
              cette possibilité ont pu se retrouver avec un capital restant dû
              en euros très supérieur à leur investissement initial.
            </li>
            <li>
              <strong>Capital restant dû :</strong> même en remboursant
              régulièrement les mensualités, certains emprunteurs ont vu leur
              capital restant dû en euros augmenter, ce qui créait un effet
              contraire à l'amortissement habituel d'un prêt.
            </li>
            <li>
              <strong>Prêt in fine :</strong> pour ce type de prêt, le capital
              n'est remboursé qu'à l'échéance finale. En cas d'appréciation
              du CHF, ce remboursement terminal pouvait être très supérieur au
              montant emprunté.
            </li>
          </ul>

          <h2>Prêt toxique, prêt en devise et risque de change : quelles différences ?</h2>
          <table className="article-table">
            <thead>
              <tr>
                <th>Notion</th>
                <th>Explication</th>
                <th>Document à vérifier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prêt en devise</td>
                <td>Prêt dont le capital est libellé en devises étrangères (ici le CHF)</td>
                <td>Offre de prêt — article sur la devise</td>
              </tr>
              <tr>
                <td>Prêt indexé CHF</td>
                <td>Prêt dont certains paramètres (capital, mensualités) sont liés au taux EUR/CHF</td>
                <td>Conditions particulières — clauses de conversion</td>
              </tr>
              <tr>
                <td>Risque de change</td>
                <td>Incertitude sur la valeur en euros d'un capital ou d'une mensualité en CHF</td>
                <td>Notice d'information — simulations chiffrées</td>
              </tr>
              <tr>
                <td>Capital restant dû</td>
                <td>Montant encore à rembourser, pouvant augmenter en cas d'appréciation du CHF</td>
                <td>Tableau d'amortissement — relevés annuels</td>
              </tr>
              <tr>
                <td>Clause de conversion</td>
                <td>Mécanisme contractuel définissant le passage entre CHF et EUR</td>
                <td>Conditions générales — conditions particulières</td>
              </tr>
              <tr>
                <td>Simulation chiffrée</td>
                <td>Projection illustrant l'évolution du prêt selon différents scénarios de change</td>
                <td>Documents précontractuels — brochures remises</td>
              </tr>
            </tbody>
          </table>

          <h2>Les situations les plus sensibles</h2>
          <p>
            Certaines configurations personnelles peuvent rendre l'exposition
            au risque de change d'un prêt CHF plus significative.
          </p>
          <div className="juri-four-grid">
            {situationsCards.map((card) => (
              <div key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez identifier les signaux de risque présents dans
              votre dossier prêt CHF ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Le rôle de l'information bancaire</h2>
          <p>
            Dans l'analyse d'un prêt CHF, la qualité de l'information remise
            avant signature est souvent le point central. Le risque de change
            existe dans tout prêt en devise — ce n'est pas son existence qui
            est en cause, mais la manière dont il a été expliqué à
            l'emprunteur.
          </p>
          <ul>
            <li>
              <strong>Information claire :</strong> l'emprunteur moyen devait
              pouvoir comprendre le fonctionnement du mécanisme EUR/CHF et ses
              conséquences concrètes sur le capital restant dû.
            </li>
            <li>
              <strong>Simulations chiffrées :</strong> de simples projections
              favorables ne suffisent pas. Des hypothèses défavorables réalistes
              auraient dû permettre à l'emprunteur de mesurer le risque dans
              des scénarios de franc fort.
            </li>
            <li>
              <strong>Notice de risque :</strong> document spécifique destiné
              à expliquer le risque de change. Son existence, sa date, son
              contenu et sa précision sont souvent des éléments clés de
              l'analyse.
            </li>
            <li>
              <strong>Compréhension sur toute la durée :</strong> l'information
              devait permettre de comprendre non seulement la situation à la
              souscription, mais aussi l'évolution possible sur vingt ans ou
              plus.
            </li>
            <li>
              <strong>Pas seulement une mention générale :</strong> la
              jurisprudence a précisé qu'une mention abstraite du risque de
              change est insuffisante si elle ne permet pas à l'emprunteur
              d'en mesurer les effets économiques concrets.
            </li>
          </ul>
          <p>
            Pour approfondir ce point,{" "}
            <Link href="/blog/risque-change-pret-chf">
              consultez notre article sur le risque de change dans les prêts CHF
            </Link>{" "}
            et{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              notre guide sur les clauses abusives
            </Link>
            .
          </p>

          <h2>Comment vérifier si votre prêt présente des signaux de risque</h2>
          <ol>
            <li>
              <strong>Identifier la devise :</strong> relire l'offre de prêt
              pour confirmer si le capital est libellé en CHF, en euros ou en
              devise mixte. Cette information est généralement dans les premières
              pages du contrat.
            </li>
            <li>
              <strong>Relire les clauses :</strong> identifier les clauses de
              change, de conversion, de remboursement et de capital restant dû.
              Vérifier si le mécanisme est décrit de façon compréhensible.
            </li>
            <li>
              <strong>Retrouver les simulations :</strong> vérifier si des
              projections sur différents scénarios EUR/CHF ont été remises.
              En particulier, vérifier si des hypothèses défavorables (CHF fort)
              étaient présentes.
            </li>
            <li>
              <strong>Faire le test d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              permet d'identifier en 3 questions les principaux signaux présents
              dans votre dossier.
            </li>
            <li>
              <strong>Réaliser une simulation indicative :</strong> la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d'estimer l'impact d'une variation EUR/CHF sur le capital
              de votre prêt.
            </li>
            <li>
              <strong>Comparer avec la jurisprudence :</strong> les{" "}
              <Link href="/jurisprudence">décisions récentes de la Cour de cassation</Link>{" "}
              précisent les critères retenus pour apprécier la qualité de
              l'information délivrée dans les prêts CHF. Le{" "}
              <Link href="/guides/dernieres-jurisprudences-franc-suisse-particuliers">
                guide sur les dernières jurisprudences
              </Link>{" "}
              synthétise ces évolutions.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Le terme "prêt toxique" est informel et ne correspond pas à une
                catégorie juridique. L'analyse repose sur le contrat, les
                documents et la situation de l'emprunteur.
              </li>
              <li>
                Le risque de change d'un prêt CHF peut s'exprimer lors d'une
                revente, d'un remboursement anticipé ou à l'échéance d'un prêt
                in fine.
              </li>
              <li>
                La qualité de l'information remise avant signature — notices,
                simulations, exemples chiffrés — est souvent le point central
                de l'analyse.
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
            <h2>Identifier les signaux de votre prêt CHF</h2>
            <p>
              Le test d'éligibilité analyse les principaux critères de votre
              dossier. La simulation indicative estime l'impact du taux de
              change sur votre capital.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/simulation" className="juri-cta-secondary-btn">
                Faire une simulation indicative
              </Link>
            </div>
            <p style={{ marginTop: "18px", textAlign: "center", fontSize: "14px", opacity: 0.7 }}>
              <Link href="/jurisprudence" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                Comprendre la jurisprudence prêt CHF →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
