import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "C'est quoi un contentieux bancaire ? Définition et exemples | Prêts CHF Info",
  description:
    "Comprendre ce qu'est un contentieux bancaire, ses causes fréquentes, ses conséquences possibles et le cas particulier des prêts immobiliers en francs suisses.",
  alternates: { canonical: `${SITE_URL}/guides/c-est-quoi-un-contentieux-bancaire` },
  openGraph: {
    title: "C'est quoi un contentieux bancaire ? Définition et exemples | Prêts CHF Info",
    description:
      "Définition simple, causes fréquentes, conséquences possibles et lien avec les prêts immobiliers en francs suisses.",
    url: `${SITE_URL}/guides/c-est-quoi-un-contentieux-bancaire`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "C'est quoi un contentieux bancaire ? Définition et exemples | Prêts CHF Info",
    description:
      "Définition simple d'un contentieux bancaire, ses causes et son lien avec les prêts immobiliers en francs suisses.",
  },
};

const causesCards = [
  {
    title: "Crédit immobilier",
    text: "Un désaccord sur les conditions du crédit, l'information remise, les modalités de remboursement ou les conséquences financières d'une clause contractuelle.",
  },
  {
    title: "Clause contractuelle",
    text: "Une clause jugée incompréhensible, déséquilibrée ou insuffisamment expliquée peut être à l'origine d'une contestation portant sur le contrat lui-même.",
  },
  {
    title: "Information insuffisante",
    text: "La banque avait l'obligation d'informer le client des risques liés au produit proposé. Une information lacunaire ou absente peut constituer un motif de désaccord.",
  },
  {
    title: "Frais contestés",
    text: "Des frais prélevés sans base contractuelle claire, des commissions contestées ou des pénalités dont le calcul est opaque peuvent donner lieu à une réclamation.",
  },
  {
    title: "Remboursement anticipé",
    text: "Les conditions de solde d'un prêt avant son terme — indemnités, taux appliqué, calcul du capital — peuvent être à l'origine d'un désaccord.",
  },
  {
    title: "Prêt en devise",
    text: "Les prêts libellés en devises étrangères, comme le franc suisse, exposent l'emprunteur à un risque de change. Si ce risque n'a pas été clairement expliqué, cela peut constituer un point de litige.",
  },
  {
    title: "Assurance ou garantie",
    text: "Une assurance emprunteur, une caution ou une hypothèque mal expliquée ou imposée de façon abusive peut également être à l'origine d'un contentieux.",
  },
];

const checklistDocs = [
  "Contrat de prêt ou contrat bancaire",
  "Conditions générales applicables",
  "Courriers échangés avec la banque",
  "E-mails et messages écrits",
  "Tableaux d'amortissement",
  "Décomptes et relevés de compte",
  "Notices d'information remises avant signature",
  "Simulations chiffrées fournies par la banque",
];

const faq = [
  {
    q: "C'est quoi un contentieux bancaire ?",
    a: "Un contentieux bancaire désigne un désaccord entre un client et un établissement bancaire. Ce désaccord peut porter sur un crédit, une clause contractuelle, une information insuffisante, des frais, un remboursement ou toute autre opération bancaire. Il peut rester amiable ou évoluer vers une procédure.",
  },
  {
    q: "Un contentieux bancaire commence-t-il toujours au tribunal ?",
    a: "Non. La plupart des contentieux débutent par une phase amiable : réclamation écrite, échange avec la banque, médiation. Une procédure judiciaire n'intervient que si ces étapes n'aboutissent pas. Elle représente une démarche longue et incertaine, qui nécessite une analyse préalable du dossier.",
  },
  {
    q: "Quels documents faut-il garder en cas de contentieux bancaire ?",
    a: "Tous les documents écrits sont précieux : contrat, conditions générales, courriers, e-mails, tableaux d'amortissement, notices d'information, simulations et décomptes. Ces pièces permettent de retracer les engagements pris et l'information effectivement communiquée.",
  },
  {
    q: "Une banque peut-elle être contestée sur un prêt en devise ?",
    a: "Oui, selon les circonstances. La jurisprudence récente sur les prêts immobiliers en francs suisses a précisé les obligations d'information des banques sur le risque de change. Un prêt en CHF peut faire l'objet d'une analyse si les clauses ou l'information précontractuelle présentent des lacunes, selon le contrat et les documents remis.",
  },
  {
    q: "Le site Prêts CHF Info donne-t-il un avis juridique ?",
    a: "Non. Prêts CHF Info est un site indépendant d'information pédagogique. Il ne remplace pas une consultation juridique personnalisée. Les contenus publiés permettent de comprendre les mécanismes bancaires et de préparer une première analyse, non de conclure à l'existence d'un recours.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/c-est-quoi-un-contentieux-bancaire`,
      url: `${SITE_URL}/guides/c-est-quoi-un-contentieux-bancaire`,
      name: "C'est quoi un contentieux bancaire ? Définition et exemples",
      description:
        "Définition simple d'un contentieux bancaire, ses causes fréquentes, ses conséquences possibles et le lien avec les prêts immobiliers en francs suisses.",
      inLanguage: "fr-FR",
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "C'est quoi un contentieux bancaire ?",
          item: `${SITE_URL}/guides/c-est-quoi-un-contentieux-bancaire`,
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

export default function GuideContentieuxDefinition() {
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
              <span>C&apos;est quoi un contentieux bancaire ?</span>
            </nav>
            <span className="article-cat-badge">Contentieux</span>
            <h1>C&apos;est quoi un contentieux bancaire ?</h1>
            <p className="article-hero-intro">
              Un contentieux bancaire désigne un désaccord entre un client et
              une banque. Il peut porter sur un crédit, une information donnée,
              des frais, un remboursement, une clause contractuelle ou une
              opération bancaire. Ce guide explique simplement ce qu'il recouvre,
              ses causes fréquentes et ce qu'il implique concrètement.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Ce guide est informatif et pédagogique. Il ne constitue pas un
              avis juridique personnalisé et ne permet pas, seul, de conclure
              à l'existence d'un recours fondé.
            </p>
            <div className="article-meta">
              <span>Contentieux</span>
              <span className="article-meta-sep" />
              <span>6 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Définition simple du contentieux bancaire</h2>
          <p>
            Un contentieux bancaire naît lorsqu'un client estime que sa banque
            n'a pas respecté ses engagements contractuels, ses obligations
            d'information ou les règles applicables à l'opération concernée.
            Ce désaccord peut prendre différentes formes et suivre plusieurs
            étapes.
          </p>
          <ul>
            <li>
              <strong>Désaccord client / banque :</strong> le client estime
              que les conditions du contrat n'ont pas été respectées, que
              l'information reçue était insuffisante ou que les conséquences
              financières d'une opération n'ont pas été correctement expliquées.
            </li>
            <li>
              <strong>Phase amiable :</strong> dans la plupart des cas, le
              contentieux débute par une tentative de résolution amiable —
              réclamation écrite à la banque, réponse du service clientèle,
              escalade vers un responsable ou un médiateur. Cette phase est
              souvent obligatoire avant toute procédure.
            </li>
            <li>
              <strong>Phase judiciaire éventuelle :</strong> si la phase
              amiable échoue et que les parties ne trouvent pas d'accord, une
              procédure devant les tribunaux peut être envisagée. Elle nécessite
              une analyse préalable du dossier, des délais parfois longs et
              des coûts à anticiper.
            </li>
            <li>
              <strong>Importance des documents :</strong> quelle que soit la
              phase, les pièces écrites sont centrales — contrat, courriers,
              notices d'information, simulations. C'est à partir de ces
              documents que le désaccord peut être instruit et apprécié.
            </li>
          </ul>

          <h2>Les causes fréquentes d'un contentieux bancaire</h2>
          <p>
            Les désaccords entre un client et sa banque peuvent naître dans
            de nombreuses situations. Voici les causes les plus fréquentes.
          </p>
          <div className="juri-four-grid">
            {causesCards.map((card) => (
              <div key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <h2>Quelles peuvent être les conséquences d'un contentieux bancaire ?</h2>
          <p>
            Un contentieux bancaire peut suivre plusieurs chemins. Ses
            conséquences pratiques dépendent de la nature du désaccord,
            des documents disponibles et des délais applicables.
          </p>
          <ul>
            <li>
              <strong>Échanges avec la banque :</strong> la première étape
              est souvent une réclamation écrite adressée au service concerné.
              La réponse de la banque — ou son absence — détermine la suite.
            </li>
            <li>
              <strong>Réclamation formelle :</strong> si la réponse initiale
              est insatisfaisante, une réclamation plus formelle peut être
              adressée au service réclamations, en précisant le motif et les
              documents à l'appui.
            </li>
            <li>
              <strong>Médiation :</strong> en France, le recours au médiateur
              bancaire est possible après avoir épuisé les voies internes.
              Cette procédure est gratuite pour le client et peut aboutir à
              une recommandation non contraignante.
            </li>
            <li>
              <strong>Expertise ou analyse :</strong> dans certains cas,
              notamment pour des prêts complexes, une expertise technique ou
              juridique peut être utile pour évaluer le bien-fondé du désaccord
              avant d'envisager une procédure.
            </li>
            <li>
              <strong>Procédure judiciaire éventuelle :</strong> si aucune
              solution amiable n'est trouvée, un recours devant les tribunaux
              peut être envisagé. Cette étape nécessite l'assistance d'un
              professionnel du droit et implique des délais et des coûts
              importants.
            </li>
            <li>
              <strong>Délais :</strong> des délais légaux de prescription
              s'appliquent selon la nature de la demande. Ces délais varient
              et peuvent être opposés si la démarche est trop tardive.
            </li>
            <li>
              <strong>Coûts et incertitudes :</strong> une procédure bancaire
              implique des coûts et ne garantit pas un résultat. L'analyse
              préalable du dossier permet d'évaluer la solidité des éléments
              disponibles avant d'engager des démarches.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Votre désaccord porte sur un prêt immobilier en francs suisses ?
              Découvrez le guide dédié au contentieux bancaire prêt CHF.
            </p>
            <Link href="/guides/contentieux-bancaire-pret-chf" className="article-inline-cta-btn">
              Voir le guide contentieux prêt CHF →
            </Link>
          </div>

          <h2>Contentieux bancaire et prêt immobilier en francs suisses</h2>
          <p>
            Les prêts immobiliers en francs suisses constituent l'un des
            domaines où les contentieux bancaires ont été les plus nombreux
            ces dernières années. Plusieurs caractéristiques de ces produits
            expliquent pourquoi.
          </p>
          <ul>
            <li>
              <strong>Risque de change :</strong> lorsque le franc suisse
              s'apprécie, le capital restant dû en euros augmente, même si
              l'emprunteur rembourse régulièrement ses mensualités. Ce
              mécanisme, difficile à anticiper, est au cœur de nombreux
              désaccords.
            </li>
            <li>
              <strong>Information précontractuelle :</strong> la jurisprudence
              a progressivement précisé que la banque devait informer
              l'emprunteur de façon claire et concrète sur le risque de change.
              Une information vague ou abstraite peut constituer un point de
              litige.
            </li>
            <li>
              <strong>Clauses contractuelles :</strong> les clauses relatives
              à la devise, à la conversion et au capital restant dû ont été
              examinées par les tribunaux. Leur rédaction et leur
              compréhensibilité sont des éléments centraux.
            </li>
            <li>
              <strong>Capital restant dû :</strong> dans certains dossiers,
              le capital restant dû en euros a fortement augmenté suite à
              l'appréciation du CHF, créant un écart important avec le capital
              initialement emprunté.
            </li>
            <li>
              <strong>Documents remis :</strong> les notices d'information,
              les simulations chiffrées et les échanges écrits avec la banque
              constituent les pièces centrales de l'analyse. Leur existence
              et leur contenu déterminent souvent la solidité du dossier.
            </li>
          </ul>
          <p>
            Pour approfondir ce point,{" "}
            <Link href="/guides/contentieux-bancaire-pret-chf">
              consultez notre guide spécialisé sur le contentieux bancaire
              prêt CHF
            </Link>{" "}
            et la{" "}
            <Link href="/jurisprudence">
              page dédiée à la jurisprudence des prêts en francs suisses
            </Link>
            .
          </p>

          <h2>Quels documents conserver en cas de contentieux bancaire ?</h2>
          <p>
            Que le désaccord soit récent ou ancien, conserver les pièces
            écrites est essentiel. En cas de documents manquants, une demande
            formelle à la banque permet souvent de les récupérer.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Pour un prêt immobilier en francs suisses,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide complet sur les documents utiles
            </Link>{" "}
            — il détaille chaque pièce et explique comment les retrouver si
            elles ont été perdues.
          </p>

          <h2>Comment commencer sans se tromper ?</h2>
          <ol>
            <li>
              <strong>Identifier le problème :</strong> préciser la nature du
              désaccord — clause mal comprise, information insuffisante, frais
              contestés, capital trop élevé. Cette clarté est indispensable
              avant d'engager toute démarche.
            </li>
            <li>
              <strong>Rassembler les pièces :</strong> réunir tous les
              documents écrits disponibles — contrat, courriers, notices,
              simulations, échanges par e-mail. Plus le dossier est complet,
              plus l'analyse sera précise.
            </li>
            <li>
              <strong>Vérifier les délais :</strong> des délais légaux
              s'appliquent selon la nature de la demande. Ces délais sont
              propres à chaque type d'action et ne peuvent pas être appréciés
              de façon générale. Un professionnel peut les évaluer pour
              votre situation.
            </li>
            <li>
              <strong>Faire une simulation si le prêt est en CHF :</strong>{" "}
              si le désaccord porte sur un prêt immobilier en francs suisses,
              la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d'estimer l'impact du taux EUR/CHF sur le capital.
              C'est un premier outil pédagogique utile pour mettre en
              perspective le désaccord.
            </li>
            <li>
              <strong>Faire le test d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              identifie en 3 questions les principaux signaux présents dans
              un dossier de prêt CHF.
            </li>
            <li>
              <strong>Demander une analyse individualisée si nécessaire :</strong>{" "}
              un contentieux bancaire nécessite une appréciation personnalisée
              du dossier. Les outils pédagogiques de ce site permettent une
              première orientation, mais ne remplacent pas une consultation
              avec un professionnel du droit.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Un contentieux bancaire est un désaccord entre un client et
                sa banque. Il commence souvent de façon amiable et n'implique
                pas nécessairement une procédure judiciaire.
              </li>
              <li>
                Les documents écrits — contrat, courriers, notices, simulations
                — sont les pièces centrales de tout contentieux bancaire.
              </li>
              <li>
                Les prêts immobiliers en francs suisses ont donné lieu à de
                nombreux litiges, notamment sur le risque de change et
                l'information précontractuelle.
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
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Pour aller plus loin</p>
            <h2>Votre désaccord porte sur un prêt en francs suisses ?</h2>
            <p>
              Le guide spécialisé sur le contentieux bancaire prêt CHF détaille
              les causes fréquentes de litige, les documents à préparer et les
              étapes d'une première analyse.
            </p>
            <div className="article-cta-actions">
              <Link href="/guides/contentieux-bancaire-pret-chf" className="juri-cta-primary-btn">
                Comprendre le contentieux bancaire prêt CHF
              </Link>
              <Link href="/eligibilite" className="juri-cta-secondary-btn">
                Tester mon éligibilité
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
