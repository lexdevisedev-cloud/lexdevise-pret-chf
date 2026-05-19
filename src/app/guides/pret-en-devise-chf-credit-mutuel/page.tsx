import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt en devise CHF Crédit Mutuel : points à vérifier | Prêts CHF Info",
  description:
    "Vous avez souscrit un prêt en devise CHF auprès du Crédit Mutuel ? Découvrez les clauses, documents et informations à vérifier pour comprendre le risque de change.",
  alternates: { canonical: `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel` },
  openGraph: {
    title: "Prêt en devise CHF Crédit Mutuel : points à vérifier | Prêts CHF Info",
    description:
      "Vous avez souscrit un prêt en devise CHF auprès du Crédit Mutuel ? Découvrez les clauses, documents et informations à vérifier pour comprendre le risque de change.",
    url: `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt en devise CHF Crédit Mutuel : points à vérifier | Prêts CHF Info",
    description:
      "Clauses, documents et informations à vérifier pour un prêt en devise CHF souscrit auprès du Crédit Mutuel.",
  },
};

const faq = [
  {
    q: "Un prêt Crédit Mutuel en CHF est-il automatiquement contestable ?",
    a: "Non. L'analyse dépend du contrat, des documents remis, de l'information donnée à l'emprunteur, de la situation personnelle et des délais applicables. Le nom de la banque ne suffit pas à conclure.",
  },
  {
    q: "Que signifie prêt en devise CHF ?",
    a: "Cela désigne un prêt dont le montant, le remboursement ou certains calculs financiers dépendent du franc suisse. Le capital emprunté peut être libellé en CHF, remboursable en CHF ou lié au CHF via un mécanisme d'indexation.",
  },
  {
    q: "Quels documents vérifier en priorité ?",
    a: "L'offre de prêt, les conditions particulières, les conditions générales, les notices d'information sur le risque de change, les simulations chiffrées remises avant signature et les tableaux d'amortissement constituent les pièces centrales.",
  },
  {
    q: "Un frontalier payé en francs suisses peut-il être concerné ?",
    a: "Oui, selon les cas, notamment si le bien financé est situé en France ou si la situation professionnelle a évolué pendant la durée du prêt. La cohérence entre les revenus en CHF et les modalités de remboursement fait partie des éléments à vérifier.",
  },
  {
    q: "Une simulation suffit-elle à prouver un préjudice ?",
    a: "Non. Une simulation donne seulement un ordre de grandeur indicatif sur l'impact d'une variation EUR/CHF. Elle doit être complétée par l'analyse du contrat, des documents bancaires et de la situation précise de l'emprunteur.",
  },
  {
    q: "Le nom de la banque suffit-il à savoir si un recours est possible ?",
    a: "Non. Le nom de la banque ne suffit pas. Il faut étudier le contrat signé, les documents remis avant signature, les simulations fournies et la situation précise de l'emprunteur. Deux contrats d'une même banque peuvent être très différents.",
  },
];

const checklistDocs = [
  "Offre de prêt originale",
  "Conditions particulières du contrat",
  "Conditions générales du prêt",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises par la banque",
  "Tableau d'amortissement initial",
  "Tableaux d'amortissement actualisés",
  "Avenants ou actes de renégociation",
  "Courriers et e-mails avec la banque",
  "Décompte de remboursement anticipé (si applicable)",
  "Documents de revente du bien (si applicable)",
  "Justificatifs de revenus au moment de la souscription",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel`,
      headline: "Prêt en devise CHF Crédit Mutuel : quels points vérifier ?",
      description:
        "Guide pédagogique sur les points à vérifier dans un prêt en devise CHF souscrit auprès du Crédit Mutuel.",
      url: `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel`,
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prêt en devise CHF Crédit Mutuel",
          item: `${SITE_URL}/guides/pret-en-devise-chf-credit-mutuel`,
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

export default function GuideCreditMutuel() {
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
              <span>Prêt en devise CHF Crédit Mutuel</span>
            </nav>
            <span className="article-cat-badge">Banques prêteuses</span>
            <h1>Prêt en devise CHF Crédit Mutuel : quels points vérifier ?</h1>
            <p className="article-hero-intro">
              Certains emprunteurs recherchent des informations sur les prêts en
              devise CHF souscrits auprès du Crédit Mutuel, notamment lorsque le
              crédit a servi à financer un bien situé en France. L'objectif de ce
              guide est d'expliquer les points à vérifier : devise du prêt,
              clauses de conversion, risque de change, documents remis avant
              signature et information bancaire.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Cette page ne signifie pas qu'un prêt Crédit Mutuel serait
              automatiquement contestable. Chaque dossier dépend de ses clauses,
              des documents remis, de la situation de l'emprunteur et des délais
              applicables.
            </p>
            <div className="article-meta">
              <span>Banques prêteuses</span>
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

          <h2>Qu'est-ce qu'un prêt en devise CHF ?</h2>
          <p>
            Un prêt en devise CHF est un prêt immobilier dont tout ou partie
            des mécanismes financiers est lié au franc suisse. Il peut prendre
            plusieurs formes.
          </p>
          <ul>
            <li>
              <strong>Prêt libellé en francs suisses :</strong> le capital
              emprunté est exprimé en CHF. Le montant que l'emprunteur doit
              rembourser est donc calculé en francs suisses, puis converti en
              euros selon le taux de change en vigueur.
            </li>
            <li>
              <strong>Prêt remboursable en francs suisses :</strong> les
              mensualités sont versées en CHF, soit directement, soit via une
              conversion automatique depuis un compte en euros. Dans les deux
              cas, le montant en euros varie en fonction du taux de change.
            </li>
            <li>
              <strong>Prêt indexé ou lié au CHF :</strong> certains contrats
              prévoient une indexation partielle sur le franc suisse, affectant
              le capital restant dû ou les échéances.
            </li>
          </ul>
          <p>
            La distinction entre la devise du prêt, la devise de remboursement
            et la devise du bien financé est importante. Un bien situé en France
            est valorisé en euros : si le CHF s'apprécie, le capital restant dû
            en euros peut augmenter même si les mensualités semblent constantes.
            C'est pourquoi la relecture de l'offre de prêt, notamment ses
            clauses relatives à la devise et au change, constitue le point de
            départ de toute analyse.
          </p>

          <h2>Pourquoi vérifier un prêt CHF souscrit auprès du Crédit Mutuel ?</h2>
          <p>
            Certains emprunteurs souhaitent comprendre les conditions dans
            lesquelles leur prêt CHF a été mis en place. Cette démarche est
            légitime et peut être utile quelle que soit la banque concernée.
          </p>
          <p>
            Il est important de souligner que l'analyse ne dépend pas du nom
            de la banque prêteuse. Deux contrats signés auprès du même
            établissement peuvent être très différents : le contenu des clauses,
            la qualité de l'information précontractuelle et les documents remis
            varient selon les agences, les périodes et les situations
            personnelles.
          </p>
          <p>
            Ce qu'il faut vérifier, c'est le dossier lui-même : les clauses
            contractuelles, les notices d'information, les simulations chiffrées
            remises avant la signature et les tableaux d'amortissement. Aucune
            conclusion automatique ne peut être tirée du seul fait d'avoir
            souscrit un prêt CHF auprès du Crédit Mutuel.
          </p>

          <h2>Les clauses à relire dans un prêt en devise CHF</h2>
          <p>
            L'offre de prêt et les conditions générales contiennent plusieurs
            types de clauses qui méritent une lecture attentive.
          </p>
          <ul>
            <li>
              <strong>Clause de devise :</strong> précise la monnaie dans
              laquelle le capital est exprimé et les règles applicables en cas
              de variation du taux de change.
            </li>
            <li>
              <strong>Clause de remboursement :</strong> détermine comment les
              mensualités sont calculées et dans quelle devise elles sont
              effectuées.
            </li>
            <li>
              <strong>Clause de conversion :</strong> définit les modalités
              de passage entre CHF et EUR — taux applicable, moment de la
              conversion, frais éventuels.
            </li>
            <li>
              <strong>Clause de risque de change :</strong> décrit les
              conséquences d'une variation EUR/CHF sur le capital restant dû et
              sur le coût total du crédit. Son existence, sa lisibilité et sa
              précision sont souvent examinées.
            </li>
            <li>
              <strong>Clause de remboursement anticipé :</strong> définit les
              conditions de solde du prêt avant le terme, y compris les
              indemnités éventuelles et le taux de change appliqué à la date du
              remboursement.
            </li>
            <li>
              <strong>Clause liée au capital restant dû :</strong> précise
              comment le capital est recalculé à chaque échéance en fonction du
              taux de change, ce qui peut révéler un mécanisme d'augmentation
              du capital en cas de franc fort.
            </li>
            <li>
              <strong>Clause liée aux avenants ou renégociations :</strong> si
              le prêt a été renégocié ou restructuré, les clauses de l'avenant
              peuvent modifier les conditions initiales et méritent une lecture
              spécifique.
            </li>
            <li>
              <strong>Clause d'adossement éventuel :</strong> certains prêts
              CHF étaient adossés à un compte en devises ou à un mécanisme de
              couverture. Ces clauses peuvent avoir des implications sur la
              manière dont le risque était géré.
            </li>
          </ul>
          <p>
            La présence d'une clause de risque de change ne suffit pas toujours.
            L'enjeu est de savoir si le mécanisme était compréhensible et si ses
            conséquences économiques pouvaient être mesurées par l'emprunteur
            au moment de la signature. Pour approfondir ce point,{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              consultez notre article sur les clauses abusives dans les prêts CHF
            </Link>
            .
          </p>

          <h2>L'information remise avant signature</h2>
          <p>
            Au-delà des clauses contractuelles, la qualité de l'information
            précontractuelle est un élément central de l'analyse d'un prêt CHF.
          </p>
          <ul>
            <li>
              <strong>Notice d'information :</strong> document spécifique
              destiné à expliquer le mécanisme du risque de change, ses
              conséquences sur le capital restant dû et les incertitudes
              inhérentes aux fluctuations monétaires. Son existence, sa date,
              son contenu et son niveau de détail sont souvent examinés.
            </li>
            <li>
              <strong>Simulations chiffrées :</strong> projections illustrant
              l'évolution du prêt selon différents scénarios EUR/CHF. Si elles
              ne couvraient pas des hypothèses défavorables réalistes, cela peut
              constituer un signal à vérifier.
            </li>
            <li>
              <strong>Exemples de variation défavorable :</strong> l'information
              remise devait permettre à l'emprunteur de comprendre ce qui se
              passerait si le franc suisse s'appréciait significativement.
            </li>
            <li>
              <strong>Tableau d'amortissement :</strong> remis à la souscription,
              il constitue une référence pour comprendre les prévisions initiales
              et mesurer l'écart avec la réalité du prêt.
            </li>
            <li>
              <strong>Mise en garde écrite :</strong> certains établissements
              remettaient une mise en garde spécifique sur le risque de change.
              Son existence et sa précision sont des éléments à vérifier.
            </li>
            <li>
              <strong>Compréhension sur toute la durée du prêt :</strong>{" "}
              l'information doit permettre à l'emprunteur moyen de mesurer les
              conséquences économiques du prêt non seulement à la souscription,
              mais sur l'ensemble de la durée du contrat.
            </li>
          </ul>
          <p>
            La date de souscription est également importante : le cadre
            réglementaire et jurisprudentiel applicable évolue, et les
            obligations d'information ont été progressivement précisées.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez identifier les signaux présents dans votre dossier
              prêt CHF Crédit Mutuel ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Frontaliers et bien immobilier en France</h2>
          <p>
            Les prêts en devise CHF ont souvent été proposés aux travailleurs
            frontaliers, dont les revenus étaient perçus en francs suisses. Cette
            situation présentait une cohérence apparente : être remboursé en CHF
            avec des revenus en CHF. Mais la réalité est plus nuancée.
          </p>
          <ul>
            <li>
              <strong>Bien situé en France, valorisé en euros :</strong> la
              valeur du bien immobilier est exprimée en euros. En cas de revente,
              le produit de la vente en euros doit couvrir un capital restant dû
              en CHF — dont la valeur en euros dépend du taux de change du moment.
            </li>
            <li>
              <strong>Remboursement anticipé :</strong> si le prêt est soldé
              lors d'une revente, d'un refinancement ou d'un changement de
              situation, le taux de change au moment du remboursement détermine
              le montant effectivement payé en euros.
            </li>
            <li>
              <strong>Perte d'emploi suisse ou retour en France :</strong> un
              emprunteur qui n'est plus frontalier doit continuer à rembourser
              en CHF (ou à couvrir le change) depuis des revenus désormais en
              euros. Cette évolution peut avoir des conséquences significatives.
            </li>
            <li>
              <strong>Retraite ou passage à des revenus en euros :</strong> même
              progressive, cette transition modifie l'équation initiale et peut
              rendre le risque de change plus exposé.
            </li>
          </ul>
          <p>
            Le statut de frontalier ne permet pas de conclure automatiquement
            à l'existence d'un recours. Tout dépend des pièces disponibles,
            des clauses du contrat et de l'évolution de la situation
            personnelle. Pour en savoir plus,{" "}
            <Link href="/blog/pret-chf-frontalier">
              consultez notre guide dédié aux prêts CHF frontaliers
            </Link>
            .
          </p>

          <h2>Documents à rassembler pour un prêt CHF Crédit Mutuel</h2>
          <p>
            Quelle que soit la banque prêteuse, les documents à réunir pour
            permettre une analyse d'un prêt en devise CHF sont les mêmes.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            En cas de documents manquants, une demande formelle à la banque
            permet généralement d'en obtenir des copies. Pour une liste complète
            et des conseils pour retrouver les pièces manquantes,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Points de vérification d'un prêt en devise CHF</h2>
          <table className="article-table">
            <thead>
              <tr>
                <th>Point à vérifier</th>
                <th>Pourquoi c'est important</th>
                <th>Où le trouver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Devise du prêt</td>
                <td>Permet de savoir si le capital est lié au CHF</td>
                <td>Offre de prêt</td>
              </tr>
              <tr>
                <td>Clause de conversion</td>
                <td>Explique les modalités de passage entre CHF et EUR</td>
                <td>Conditions particulières</td>
              </tr>
              <tr>
                <td>Risque de change</td>
                <td>Permet d'évaluer l'information donnée à l'emprunteur</td>
                <td>Notice d'information / contrat</td>
              </tr>
              <tr>
                <td>Simulations chiffrées</td>
                <td>Montre si des scénarios concrets ont été présentés</td>
                <td>Documents précontractuels</td>
              </tr>
              <tr>
                <td>Capital restant dû</td>
                <td>Peut révéler l'impact du taux de change sur le temps</td>
                <td>Tableau d'amortissement</td>
              </tr>
              <tr>
                <td>Remboursement anticipé</td>
                <td>Peut faire apparaître le coût réel à solder</td>
                <td>Décompte bancaire</td>
              </tr>
            </tbody>
          </table>

          <h2>Comment commencer une première vérification ?</h2>
          <ol>
            <li>
              <strong>Identifier la devise exacte du prêt :</strong> relire la
              première page de l'offre de prêt pour confirmer si le capital est
              libellé en CHF, en euros ou en devise mixte. Cette information
              détermine le type d'analyse applicable.
            </li>
            <li>
              <strong>Vérifier si le bien financé est situé en France :</strong>{" "}
              un bien valorisé en euros est exposé au risque de change lors d'une
              revente ou d'un remboursement anticipé.
            </li>
            <li>
              <strong>Relire l'information remise avant signature :</strong>{" "}
              identifier si une notice sur le risque de change, des simulations
              chiffrées et une mise en garde écrite ont été remises. En cas
              d'absence, noter ce point.
            </li>
            <li>
              <strong>Tester les critères d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              permet d'identifier en 3 questions les principaux signaux présents
              dans votre dossier.
            </li>
            <li>
              <strong>Réaliser une simulation indicative :</strong> la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              donne un ordre de grandeur sur l'impact d'une variation EUR/CHF
              sur le capital initial et les sommes remboursées.
            </li>
            <li>
              <strong>Comparer avec la jurisprudence récente :</strong> les{" "}
              <Link href="/jurisprudence">décisions de la Cour de cassation</Link>{" "}
              sur les prêts CHF, notamment les arrêts de juillet 2025, précisent
              les critères retenus pour l'analyse des clauses de risque de change.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Le nom de la banque ne suffit pas à conclure à l'existence d'un
                recours. Deux contrats du même établissement peuvent être
                différents.
              </li>
              <li>
                Les clauses de risque de change, les notices d'information et
                les simulations remises avant signature sont les éléments clés
                de l'analyse.
              </li>
              <li>
                Les frontaliers ne sont pas automatiquement exclus du périmètre
                d'analyse, mais tout dépend des documents disponibles et de
                l'évolution de leur situation personnelle.
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
            documents remis et de la situation de l'emprunteur. Il ne signifie
            pas que les prêts Crédit Mutuel seraient automatiquement
            contestables.
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
              dossier. La simulation indicative donne un ordre de grandeur sur
              l'impact du change.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité prêt CHF
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
