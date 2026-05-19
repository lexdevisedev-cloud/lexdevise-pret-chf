import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Conséquences d'un contentieux bancaire : prêt CHF et litige | Prêts CHF Info",
  description:
    "Comprendre les conséquences possibles d'un contentieux bancaire : échanges avec la banque, médiation, délais, documents, et cas particulier des prêts en francs suisses.",
  alternates: { canonical: `${SITE_URL}/guides/consequences-contentieux-bancaire` },
  openGraph: {
    title: "Conséquences d'un contentieux bancaire : prêt CHF et litige | Prêts CHF Info",
    description:
      "Conséquences amiables, financières, documentaires et juridiques d'un contentieux bancaire — avec le cas particulier des prêts en francs suisses.",
    url: `${SITE_URL}/guides/consequences-contentieux-bancaire`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conséquences d'un contentieux bancaire : prêt CHF et litige | Prêts CHF Info",
    description:
      "Conséquences amiables, financières et juridiques d'un contentieux bancaire, avec le cas particulier des prêts immobiliers en francs suisses.",
  },
};

const faq = [
  {
    q: "Quelles sont les conséquences d'un contentieux bancaire ?",
    a: "Un contentieux bancaire peut avoir des conséquences amiables (réclamation, médiation), financières (coût du crédit, frais, capital), documentaires (recherche et conservation des pièces) et potentiellement judiciaires (procédure, délais, incertitude). L'issue dépend du type de litige, des documents disponibles et des délais applicables.",
  },
  {
    q: "Un contentieux bancaire est-il toujours judiciaire ?",
    a: "Non. La plupart des contentieux débutent par une phase amiable : réclamation écrite, échanges avec la banque, médiation bancaire. Une procédure devant les tribunaux n'intervient que si ces étapes échouent. Elle représente une démarche longue, coûteuse et à l'issue incertaine, qui nécessite une analyse préalable du dossier.",
  },
  {
    q: "Un contentieux bancaire peut-il avoir un impact financier ?",
    a: "Oui. Selon la nature du litige, les conséquences financières peuvent concerner le coût total du crédit, le capital restant dû, des frais à récupérer ou des coûts liés à la procédure elle-même. Pour les prêts en CHF, le taux de change est souvent au cœur de l'impact financier.",
  },
  {
    q: "Que faut-il faire avant de contester une banque ?",
    a: "Il est conseillé de rassembler tous les documents écrits (contrat, courriers, notices, tableaux d'amortissement), d'identifier précisément le motif du désaccord, de vérifier les délais légaux applicables et de demander une analyse personnalisée à un professionnel du droit avant d'engager toute démarche.",
  },
  {
    q: "Le prêt CHF est-il un cas particulier dans un contentieux bancaire ?",
    a: "Oui. Les prêts immobiliers en francs suisses présentent des caractéristiques spécifiques : risque de change sur le capital restant dû, obligations d'information renforcées, clauses relatives à la devise examinées par la jurisprudence. Ces éléments rendent l'analyse de ces dossiers plus technique et nécessitent une appréciation documentaire précise.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/consequences-contentieux-bancaire`,
      url: `${SITE_URL}/guides/consequences-contentieux-bancaire`,
      name: "Conséquences d'un contentieux bancaire : prêt CHF et litige",
      description:
        "Conséquences possibles d'un contentieux bancaire : amiables, financières, documentaires, juridiques, et cas particulier des prêts en francs suisses.",
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
          name: "Conséquences d'un contentieux bancaire",
          item: `${SITE_URL}/guides/consequences-contentieux-bancaire`,
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

export default function GuideConsequencesContentieux() {
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
              <span>Conséquences d&apos;un contentieux bancaire</span>
            </nav>
            <span className="article-cat-badge">Contentieux</span>
            <h1>Conséquences d&apos;un contentieux bancaire : ce qu&apos;il faut comprendre</h1>
            <p className="article-hero-intro">
              Un contentieux bancaire peut avoir des conséquences très différentes
              selon la nature du désaccord, les documents disponibles, les délais
              applicables et la réponse de la banque. Ce guide les présente de
              façon pédagogique, avec un focus particulier sur les prêts
              immobiliers en francs suisses.
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

          <h2>Les conséquences amiables d&apos;un contentieux bancaire</h2>
          <p>
            La grande majorité des contentieux bancaires débutent sans procédure
            judiciaire. La phase amiable est souvent obligatoire et peut
            suffire à résoudre le désaccord ou à clarifier les positions des
            parties.
          </p>
          <ul>
            <li>
              <strong>Réclamation écrite :</strong> la première étape consiste
              à adresser une réclamation formelle à la banque, par courrier
              recommandé ou via son service dédié. Cette réclamation précise
              le motif du désaccord et les pièces à l&apos;appui. La banque dispose
              d&apos;un délai réglementaire pour répondre.
            </li>
            <li>
              <strong>Échanges avec la banque :</strong> des échanges écrits
              suivent souvent la réclamation. Ces correspondances font partie
              du dossier et peuvent être déterminantes pour la suite. Il est
              important de conserver toutes les réponses reçues.
            </li>
            <li>
              <strong>Demande de documents :</strong> la phase amiable peut
              aussi inclure une demande formelle de communication de pièces
              — contrat, tableaux d&apos;amortissement, notices d&apos;information — que
              la banque peut être tenue de fournir.
            </li>
            <li>
              <strong>Médiation bancaire :</strong> si la réponse de la banque
              est insatisfaisante ou absente, le recours au médiateur bancaire
              est possible. Cette procédure est gratuite pour le client et
              aboutit à une recommandation non contraignante. Elle est souvent
              une étape préalable à toute saisine judiciaire.
            </li>
            <li>
              <strong>Négociation éventuelle :</strong> dans certains cas, la
              phase amiable peut aboutir à une proposition de la banque. Cette
              proposition doit être analysée avec attention avant toute
              acceptation, car elle peut emporter des conséquences sur la
              suite du dossier.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez comprendre ce qu&apos;est un contentieux bancaire avant
              d&apos;en analyser les conséquences ?
            </p>
            <Link href="/guides/c-est-quoi-un-contentieux-bancaire" className="article-inline-cta-btn">
              Lire la définition du contentieux bancaire →
            </Link>
          </div>

          <h2>Les conséquences financières possibles</h2>
          <p>
            Un contentieux bancaire peut avoir un impact financier direct sur
            la situation de l&apos;emprunteur. Cet impact varie selon la nature du
            litige et les sommes en cause.
          </p>
          <ul>
            <li>
              <strong>Coût total du crédit :</strong> si le désaccord porte
              sur un taux d&apos;intérêt, une clause de taux ou une condition
              appliquée à tort, le coût total du crédit peut être remis en
              cause. L&apos;enjeu financier dépend du capital, du taux et de la
              durée du prêt.
            </li>
            <li>
              <strong>Capital restant dû :</strong> dans certains cas, le
              capital restant dû peut être affecté par la nature du litige —
              notamment si une clause relative à son calcul est contestée.
              Pour les prêts en devise, le taux de change joue un rôle central.
            </li>
            <li>
              <strong>Remboursement anticipé :</strong> si le désaccord porte
              sur les conditions de remboursement anticipé — indemnités,
              pénalités, taux appliqué — l&apos;enjeu peut être significatif pour
              les emprunteurs qui ont soldé ou souhaitent solder leur prêt.
            </li>
            <li>
              <strong>Frais contestés :</strong> des frais prélevés sans base
              contractuelle claire, ou calculés de façon opaque, peuvent
              constituer un enjeu financier propre au contentieux.
            </li>
            <li>
              <strong>Incertitude sur l&apos;issue :</strong> un contentieux bancaire
              n&apos;aboutit pas nécessairement à une décision favorable. L&apos;analyse
              préalable du dossier est indispensable pour évaluer les éléments
              disponibles et les risques associés à une procédure.
            </li>
            <li>
              <strong>Cas particulier du prêt CHF — risque de change :</strong>{" "}
              pour les prêts immobiliers libellés en francs suisses, le taux
              de change EUR/CHF est au cœur de l&apos;impact financier. Lorsque
              le franc suisse s&apos;apprécie, le capital restant dû en euros
              augmente, même si les mensualités sont honorées. Cet écart
              peut représenter plusieurs dizaines de milliers d&apos;euros sur la
              durée. La{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d&apos;en estimer l&apos;ordre de grandeur.
            </li>
          </ul>

          <h2>Les conséquences documentaires</h2>
          <p>
            Tout contentieux bancaire repose sur des pièces écrites. La
            recherche, la conservation et l&apos;organisation des documents sont
            une étape essentielle, quelle que soit la phase du litige.
          </p>
          <ul className="article-checklist">
            <li>Offre de prêt ou contrat de crédit</li>
            <li>Conditions générales applicables au contrat</li>
            <li>Courriers échangés avec la banque</li>
            <li>E-mails et messages écrits reçus ou envoyés</li>
            <li>Tableaux d&apos;amortissement successifs</li>
            <li>Décomptes et relevés de compte</li>
            <li>Notices d&apos;information remises avant la signature</li>
            <li>Simulations chiffrées fournies par la banque</li>
          </ul>
          <p>
            Si certains documents ont été perdus ou n&apos;ont jamais été remis,
            il est possible d&apos;en demander la communication formelle à la banque.
            Certaines pièces sont conservées plusieurs années par les
            établissements. Pour les prêts CHF, consultez notre guide sur les{" "}
            <Link href="/blog/risque-change-pret-chf">
              documents utiles liés au risque de change
            </Link>
            .
          </p>

          <h2>Les conséquences juridiques possibles</h2>
          <p>
            Si la phase amiable n&apos;aboutit pas, des conséquences juridiques
            peuvent se présenter. Elles nécessitent une attention particulière
            et l&apos;assistance d&apos;un professionnel.
          </p>
          <ul>
            <li>
              <strong>Analyse par un professionnel du droit :</strong> avant
              d&apos;envisager une procédure, une analyse personnalisée du dossier
              est indispensable. Elle permet d&apos;évaluer la solidité des éléments
              disponibles, les moyens invocables et les risques associés.
            </li>
            <li>
              <strong>Délais de prescription :</strong> des délais légaux
              s&apos;appliquent selon la nature de l&apos;action. Ces délais varient
              et peuvent être opposés si la démarche est engagée trop tard.
              Leur appréciation nécessite une analyse au cas par cas.
            </li>
            <li>
              <strong>Procédure éventuelle :</strong> une procédure judiciaire
              implique des délais souvent longs, des frais à anticiper et une
              issue qui n&apos;est jamais garantie à l&apos;avance. Elle ne constitue
              pas la seule voie possible et n&apos;est pas adaptée à toutes les
              situations.
            </li>
            <li>
              <strong>Aucune garantie de résultat :</strong> un contentieux
              bancaire, même fondé sur des éléments solides, n&apos;aboutit pas
              nécessairement à une décision favorable. La jurisprudence est
              évolutive et chaque dossier est apprécié selon ses propres
              caractéristiques.
            </li>
          </ul>
          <p>
            Pour suivre l&apos;évolution des décisions judiciaires sur les prêts
            en francs suisses, consultez la{" "}
            <Link href="/jurisprudence">
              page jurisprudence prêt CHF
            </Link>
            .
          </p>

          <h2>Cas particulier du prêt immobilier en CHF</h2>
          <p>
            Les prêts immobiliers en francs suisses présentent des
            caractéristiques qui leur confèrent une place à part dans les
            contentieux bancaires.
          </p>
          <ul>
            <li>
              <strong>Risque de change sur la durée :</strong> le capital
              restant dû est exprimé en CHF. Lorsque le franc suisse s&apos;apprécie
              face à l&apos;euro, le capital à rembourser en euros augmente
              mécaniquement, même sans incident de paiement. Sur 20 ou 25 ans,
              cet effet peut être considérable.
            </li>
            <li>
              <strong>Impact en cas de revente :</strong> si le bien immobilier
              est revendu avant la fin du prêt, le capital restant dû en euros
              peut dépasser la valeur de revente du bien dans certains cas,
              selon l&apos;évolution du taux EUR/CHF.
            </li>
            <li>
              <strong>Capital restant dû et information :</strong> la
              jurisprudence a précisé que la banque devait informer clairement
              l&apos;emprunteur du risque d&apos;augmentation du capital. Une information
              insuffisante ou abstraite sur ce point constitue un motif d&apos;analyse
              du dossier.
            </li>
            <li>
              <strong>Cas des frontaliers :</strong> les travailleurs frontaliers
              suisses perçoivent leur salaire en CHF, ce qui modifie
              partiellement l&apos;exposition au risque de change. Cette situation
              particulière est prise en compte dans l&apos;analyse des dossiers.
              Notre{" "}
              <Link href="/guides/contentieux-bancaire-pret-chf">
                guide contentieux prêt CHF
              </Link>{" "}
              détaille ces spécificités.
            </li>
            <li>
              <strong>Documents bancaires spécifiques :</strong> pour un prêt
              en devise, les documents clés incluent les clauses de change,
              les simulations en devise, les notices d&apos;information sur le
              risque et les échanges relatifs à la conversion. Ces pièces
              sont centrales dans l&apos;analyse.
            </li>
          </ul>

          <h2>Comment limiter les erreurs au départ ?</h2>
          <ol>
            <li>
              <strong>Ne pas conclure trop vite :</strong> un contentieux
              bancaire nécessite une analyse préalable sérieuse. Éviter de
              s&apos;engager dans une démarche sans avoir d&apos;abord identifié
              précisément le motif du désaccord et les documents à l&apos;appui.
            </li>
            <li>
              <strong>Rassembler les documents :</strong> réunir toutes les
              pièces écrites disponibles — contrat, courriers, notices,
              tableaux d&apos;amortissement, simulations, échanges. Un dossier
              incomplet limite la portée de toute analyse.
            </li>
            <li>
              <strong>Faire le test d&apos;éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d&apos;éligibilité</Link>{" "}
              identifie en 3 questions les principaux signaux présents dans
              un dossier de prêt CHF. C&apos;est un premier outil d&apos;orientation.
            </li>
            <li>
              <strong>Réaliser une simulation si le prêt est en CHF :</strong>{" "}
              la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d&apos;estimer l&apos;impact du taux EUR/CHF sur le capital restant
              dû. Elle donne un ordre de grandeur pédagogique utile pour
              mesurer l&apos;enjeu financier.
            </li>
            <li>
              <strong>Lire la jurisprudence récente :</strong> les décisions
              récentes de la Cour de cassation et de la CJUE précisent les
              critères applicables aux prêts en devise. La{" "}
              <Link href="/jurisprudence">
                page jurisprudence
              </Link>{" "}
              en présente une synthèse pédagogique.
            </li>
            <li>
              <strong>Demander une analyse personnalisée :</strong> les outils
              pédagogiques de ce site permettent une première orientation.
              Ils ne remplacent pas une consultation avec un professionnel du
              droit, qui seul peut apprécier la situation au regard du dossier
              complet.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Un contentieux bancaire peut avoir des conséquences amiables,
                financières, documentaires et juridiques. Elles varient selon
                la nature du litige, les pièces disponibles et les délais
                applicables.
              </li>
              <li>
                Les documents écrits sont au cœur de tout contentieux bancaire.
                Les conserver — ou les demander à la banque — est une première
                étape indispensable.
              </li>
              <li>
                Pour les prêts en francs suisses, le risque de change est
                souvent au cœur de l&apos;impact financier. Une analyse documentaire
                précise est nécessaire avant d&apos;envisager toute démarche.
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
            juridique personnalisé. Les conséquences d&apos;un contentieux bancaire
            dépendent toujours des pièces du dossier, de la situation de
            l&apos;emprunteur et des délais applicables.
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
              indicative permet d&apos;estimer l&apos;impact du taux EUR/CHF.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Faire le test d&apos;éligibilité
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
