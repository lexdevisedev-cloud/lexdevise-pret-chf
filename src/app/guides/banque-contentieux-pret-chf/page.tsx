import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Banque et contentieux prêt CHF : points de vigilance | Prêts CHF Info",
  description:
    "Comprendre les points de vigilance lorsqu'un désaccord avec une banque concerne un prêt immobilier en francs suisses : information, clauses, risque de change et documents.",
  alternates: { canonical: `${SITE_URL}/guides/banque-contentieux-pret-chf` },
  openGraph: {
    title: "Banque et contentieux prêt CHF : points de vigilance | Prêts CHF Info",
    description:
      "Points de vigilance lorsqu'un désaccord avec une banque concerne un prêt immobilier en CHF : information, clauses, risque de change et documents à vérifier.",
    url: `${SITE_URL}/guides/banque-contentieux-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banque et contentieux prêt CHF : points de vigilance | Prêts CHF Info",
    description:
      "Information, clauses, risque de change et documents à vérifier lorsqu'un désaccord avec une banque concerne un prêt en francs suisses.",
  },
};

const litigesCards = [
  {
    title: "Risque de change non expliqué",
    text: "L'emprunteur n'a pas reçu d'information claire et concrète sur le fait que le capital restant dû en euros pouvait augmenter si le franc suisse s'appréciait. C'est l'un des points les plus fréquemment soulevés dans la jurisprudence récente.",
  },
  {
    title: "Capital restant dû en hausse",
    text: "Malgré des remboursements réguliers, le capital restant dû en euros a fortement augmenté suite à l'évolution du taux EUR/CHF. Cet écart entre le capital emprunté et le capital dû constitue un enjeu central.",
  },
  {
    title: "Clauses de change opaques",
    text: "Les clauses contractuelles relatives à la devise, à la conversion ou au mécanisme de taux de change n'étaient pas rédigées de façon suffisamment claire pour un emprunteur non professionnel.",
  },
  {
    title: "Simulation insuffisante",
    text: "La banque n'a pas fourni de simulation chiffrée illustrant l'impact d'une variation du taux EUR/CHF sur les mensualités ou le capital. L'information restait abstraite ou théorique.",
  },
  {
    title: "Documents incomplets à la signature",
    text: "Certaines pièces — notice d'information, conditions générales, tableau d'amortissement complet — n'ont pas été remises avant ou au moment de la signature du contrat.",
  },
  {
    title: "Remboursement anticipé contesté",
    text: "Les conditions de solde anticipé du prêt — capital dû en devise, taux de conversion appliqué, indemnités — ont pu faire l'objet d'un désaccord au moment du remboursement.",
  },
];

const faq = [
  {
    q: "Qu'est-ce qu'un contentieux avec une banque ?",
    a: "Un contentieux avec une banque désigne un désaccord entre un client et son établissement bancaire sur les conditions d'un contrat, l'information reçue, des frais ou les conséquences d'une opération. Il peut rester amiable — réclamation, médiation — ou évoluer vers une procédure judiciaire si les parties ne trouvent pas d'accord.",
  },
  {
    q: "Une banque peut-elle être contestée sur un prêt CHF ?",
    a: "Oui, selon les circonstances. La jurisprudence récente a précisé les obligations d'information des banques sur le risque de change lié aux prêts en devises étrangères. Un prêt CHF peut faire l'objet d'une analyse si les clauses contractuelles, les documents remis ou l'information précontractuelle présentent des lacunes selon les critères retenus par les tribunaux.",
  },
  {
    q: "Quels documents faut-il vérifier en priorité ?",
    a: "Les documents clés à vérifier sont : l'offre de prêt ou contrat de crédit, les conditions générales, les notices d'information sur le risque de change, les simulations chiffrées fournies avant la signature, les tableaux d'amortissement et les courriers échangés avec la banque. Ces pièces permettent d'apprécier la qualité de l'information reçue.",
  },
  {
    q: "Faut-il contacter la banque en premier avant d'envisager un contentieux ?",
    a: "Oui. La phase amiable — réclamation écrite, échanges avec la banque, médiation bancaire — est généralement la première étape et peut être obligatoire avant toute procédure. Elle permet aussi de constituer un dossier écrit et de tester la position de la banque. Une procédure judiciaire n'intervient que si cette phase échoue.",
  },
  {
    q: "Ce site remplace-t-il un avocat ou un conseil juridique ?",
    a: "Non. Prêts CHF Info est un site indépendant d'information pédagogique. Il ne fournit pas de conseil juridique personnalisé et ne permet pas de conclure à l'existence d'un recours. Les guides et outils disponibles permettent une première orientation, mais toute démarche contentieuse nécessite l'analyse d'un professionnel du droit.",
  },
];

const checklistDocs = [
  "Offre de prêt ou contrat de crédit immobilier",
  "Conditions générales applicables",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises avant la signature",
  "Tableaux d'amortissement successifs",
  "Courriers et e-mails échangés avec la banque",
  "Décomptes et relevés de compte",
  "Documents remis lors du remboursement anticipé (si applicable)",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/banque-contentieux-pret-chf`,
      url: `${SITE_URL}/guides/banque-contentieux-pret-chf`,
      name: "Banque et contentieux prêt CHF : points de vigilance",
      description:
        "Points de vigilance lorsqu'un désaccord avec une banque concerne un prêt immobilier en CHF : information, clauses, risque de change et documents.",
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
          name: "Banque et contentieux prêt CHF",
          item: `${SITE_URL}/guides/banque-contentieux-pret-chf`,
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

export default function GuideBanqueContentieuxCHF() {
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
              <span>Banque et contentieux prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Contentieux</span>
            <h1>Banque et contentieux prêt CHF : les points de vigilance</h1>
            <p className="article-hero-intro">
              Lorsqu&apos;un désaccord avec une banque concerne un prêt immobilier
              en francs suisses, plusieurs points méritent une attention
              particulière : la qualité de l&apos;information reçue, la rédaction
              des clauses, les documents remis et l&apos;impact du risque de change.
              Ce guide présente les principaux éléments à vérifier avant
              d&apos;envisager toute démarche.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Ce guide est informatif et pédagogique. Il ne constitue pas un
              avis juridique personnalisé et ne permet pas, seul, de conclure
              à l&apos;existence d&apos;un recours fondé.
            </p>
            <div className="article-meta">
              <span>Contentieux</span>
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

          <h2>Quand un désaccord avec une banque peut-il devenir un contentieux ?</h2>
          <p>
            Un désaccord avec une banque ne devient pas automatiquement un
            contentieux. Il faut que le client estime que la banque n&apos;a pas
            respecté ses obligations — contractuelles, d&apos;information ou
            réglementaires — et que ce désaccord ne soit pas résolu à l&apos;amiable.
          </p>
          <ul>
            <li>
              <strong>Un désaccord sur le contrat :</strong> les conditions
              du prêt ne correspondent pas à ce qui avait été présenté ou
              compris, une clause est jugée incompréhensible ou déséquilibrée,
              les modalités de remboursement ont évolué de façon inattendue.
            </li>
            <li>
              <strong>Une information insuffisante :</strong> la banque avait
              l&apos;obligation d&apos;informer clairement l&apos;emprunteur sur les
              caractéristiques et les risques du produit proposé. Si cette
              information était lacunaire ou abstraite, un désaccord peut
              naître a posteriori.
            </li>
            <li>
              <strong>Des conséquences financières imprévues :</strong> le
              capital restant dû a fortement augmenté, les mensualités ont
              évolué, ou le coût total du crédit s&apos;est révélé très supérieur
              à ce qui avait été anticipé lors de la souscription.
            </li>
            <li>
              <strong>La phase amiable échoue :</strong> si la réclamation
              adressée à la banque reste sans réponse satisfaisante et que
              la médiation n&apos;aboutit pas, le désaccord peut évoluer vers
              une procédure contentieuse.
            </li>
          </ul>

          <h2>Les litiges fréquents autour d&apos;un prêt en francs suisses</h2>
          <p>
            Les prêts immobiliers en francs suisses ont donné lieu à de
            nombreux contentieux. Voici les situations les plus fréquemment
            soulevées dans les dossiers et la jurisprudence récente.
          </p>
          <div className="juri-four-grid">
            {litigesCards.map((card) => (
              <div key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <p>
            Pour une synthèse des décisions récentes sur ces points,{" "}
            <Link href="/jurisprudence">
              consultez la page jurisprudence prêt CHF
            </Link>
            .
          </p>

          <h2>L&apos;importance de l&apos;information remise par la banque</h2>
          <p>
            L&apos;obligation d&apos;information de la banque envers l&apos;emprunteur est
            un élément central dans les contentieux liés aux prêts en devise.
            La jurisprudence a progressivement précisé les contours de cette
            obligation.
          </p>
          <ul>
            <li>
              <strong>Information sur le risque de change :</strong> la banque
              devait informer l&apos;emprunteur de façon claire et concrète que le
              capital restant dû en euros pouvait augmenter si le franc suisse
              s&apos;appréciait. Une mention générale ou abstraite dans les conditions
              générales peut être jugée insuffisante.
            </li>
            <li>
              <strong>Simulations chiffrées :</strong> plusieurs décisions ont
              retenu que la banque devait fournir des simulations illustrant
              l&apos;impact d&apos;une variation du taux EUR/CHF sur les mensualités
              ou le capital. L&apos;absence de tels documents est un point d&apos;attention.
            </li>
            <li>
              <strong>Information précontractuelle :</strong> l&apos;information
              devait être remise avant la signature du contrat, dans un délai
              suffisant pour permettre à l&apos;emprunteur de comprendre et d&apos;apprécier
              les risques. Une information délivrée au moment de la signature
              seulement peut être insuffisante.
            </li>
            <li>
              <strong>Compréhensibilité pour un emprunteur non professionnel :</strong>{" "}
              les explications données devaient être adaptées au profil de
              l&apos;emprunteur — un particulier, non initié aux mécanismes de change.
              Un langage technique ou des renvois à des formules complexes
              sans explication peuvent être problématiques.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Votre dossier porte sur un prêt CHF ? Le guide spécialisé
              détaille les causes de contentieux les plus fréquentes.
            </p>
            <Link href="/guides/contentieux-bancaire-pret-chf" className="article-inline-cta-btn">
              Voir le guide contentieux bancaire prêt CHF →
            </Link>
          </div>

          <h2>Les clauses contractuelles à vérifier</h2>
          <p>
            Les contrats de prêt en francs suisses contiennent des clauses
            spécifiques à la devise. Leur rédaction et leur compréhensibilité
            ont été examinées par les tribunaux.
          </p>
          <ul>
            <li>
              <strong>Clause de devise :</strong> elle précise dans quelle
              devise est exprimé le capital du prêt. Son libellé doit être
              clair sur les conséquences concrètes pour l&apos;emprunteur.
            </li>
            <li>
              <strong>Clause de taux de change :</strong> elle détermine
              comment le taux EUR/CHF est appliqué pour le calcul des
              mensualités et du capital restant dû. Une rédaction complexe
              ou renvoyant à des conditions non précisées peut poser question.
            </li>
            <li>
              <strong>Clause de capital restant dû :</strong> elle explique
              comment le capital à rembourser est recalculé en euros selon
              l&apos;évolution du taux de change. Son caractère compréhensible
              pour un emprunteur ordinaire est un critère retenu par la
              jurisprudence.
            </li>
            <li>
              <strong>Clauses sur le remboursement anticipé :</strong> elles
              précisent les conditions dans lesquelles l&apos;emprunteur peut
              solder son prêt avant le terme — taux de conversion appliqué,
              capital calculé en devise, indemnités éventuelles.
            </li>
            <li>
              <strong>Conditions générales :</strong> les conditions générales
              associées au contrat peuvent contenir des stipulations importantes
              sur le risque de change ou le fonctionnement du compte en devise.
              Leur contenu doit être examiné avec attention.
            </li>
          </ul>
          <p>
            Pour approfondir ce point, consultez notre article sur les{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              clauses abusives dans les prêts CHF
            </Link>
            .
          </p>

          <h2>Les documents utiles avant toute démarche</h2>
          <p>
            Rassembler les pièces disponibles est la première étape avant
            toute analyse. En cas de documents manquants, il est possible
            d&apos;en demander la communication à la banque.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Pour un prêt en CHF,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez le guide sur les documents utiles
            </Link>{" "}
            — il détaille chaque pièce et explique comment les retrouver si
            elles ont été perdues ou n&apos;ont jamais été remises.
          </p>

          <h2>Comment faire une première vérification ?</h2>
          <ol>
            <li>
              <strong>Identifier le désaccord :</strong> préciser en quoi
              le comportement ou les pratiques de la banque vous semblent
              problématiques — information insuffisante, clause incompréhensible,
              capital en hausse inexpliqué, documents manquants. Cette
              clarté est indispensable avant toute démarche.
            </li>
            <li>
              <strong>Rassembler les pièces :</strong> réunir le contrat,
              les conditions générales, les notices, les simulations et
              tous les échanges écrits avec la banque. Un dossier bien
              constitué est la base de toute analyse sérieuse.
            </li>
            <li>
              <strong>Faire le test d&apos;éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d&apos;éligibilité</Link>{" "}
              identifie en 3 questions les principaux signaux présents dans
              un dossier de prêt CHF. C&apos;est un premier outil d&apos;orientation
              pédagogique.
            </li>
            <li>
              <strong>Réaliser une simulation indicative :</strong> la{" "}
              <Link href="/simulation">simulation</Link>{" "}
              permet d&apos;estimer l&apos;impact du taux EUR/CHF sur le capital
              restant dû. Elle aide à mesurer l&apos;enjeu financier du désaccord.
            </li>
            <li>
              <strong>Lire la jurisprudence applicable :</strong> les
              décisions récentes de la Cour de cassation et de la CJUE
              précisent les critères retenus pour les prêts en devise.
              La{" "}
              <Link href="/jurisprudence">page jurisprudence</Link>{" "}
              en présente une synthèse accessible.
            </li>
            <li>
              <strong>Demander une analyse personnalisée :</strong> les
              outils pédagogiques de ce site permettent une première
              orientation. Ils ne remplacent pas une consultation avec un
              professionnel du droit, qui seul peut apprécier le dossier
              complet et les délais applicables.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Un contentieux avec une banque sur un prêt CHF peut porter
                sur l&apos;information précontractuelle, les clauses contractuelles,
                le risque de change ou les documents remis à la signature.
              </li>
              <li>
                Les pièces écrites — contrat, notices, simulations, courriers —
                sont au cœur de toute analyse. Les rassembler est la première
                étape.
              </li>
              <li>
                Un désaccord avec une banque ne débouche pas nécessairement
                sur une procédure judiciaire. La phase amiable est souvent
                la voie à explorer en premier.
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
            juridique personnalisé. L&apos;analyse d&apos;un contentieux bancaire lié
            à un prêt en francs suisses dépend toujours des pièces du dossier,
            de la situation de l&apos;emprunteur et des délais applicables.
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
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Première étape</p>
            <h2>Votre prêt immobilier est libellé en francs suisses ?</h2>
            <p>
              Le test d&apos;éligibilité identifie en quelques questions les principaux
              signaux à vérifier dans un dossier de prêt CHF. La simulation
              indicative permet d&apos;estimer l&apos;impact du taux EUR/CHF sur votre
              capital restant dû.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/simulation" className="juri-cta-secondary-btn">
                Faire une simulation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
