import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Documents prêt CHF : pièces utiles pour vérifier un dossier | Prêts CHF Info",
  description:
    "Liste des documents utiles pour vérifier un prêt immobilier en francs suisses : offre de prêt, notices, simulations, tableaux d'amortissement, avenants et échanges avec la banque.",
  alternates: { canonical: `${SITE_URL}/blog/documents-pret-chf` },
  openGraph: {
    title: "Documents prêt CHF : pièces utiles pour vérifier un dossier",
    description:
      "Offre de prêt, notices d'information, tableaux d'amortissement : quelles pièces réunir pour analyser un prêt CHF ?",
    url: `${SITE_URL}/blog/documents-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documents prêt CHF : pièces utiles pour vérifier un dossier",
    description:
      "Offre de prêt, notices d'information, tableaux d'amortissement : quelles pièces réunir pour analyser un prêt CHF ?",
  },
};

const faq = [
  {
    q: "Quels sont les documents indispensables pour une première analyse ?",
    a: "L'offre de prêt originale et les conditions particulières sont les pièces centrales. La notice d'information sur le risque de change, les simulations remises et les tableaux d'amortissement complètent le dossier de base. Les avenants et échanges écrits avec la banque peuvent apporter des précisions importantes.",
  },
  {
    q: "Que faire si j'ai perdu l'offre de prêt originale ?",
    a: "Vous pouvez en demander une copie à votre banque : tout établissement de crédit est tenu de conserver les contrats et peut vous les fournir. Le notaire, s'il était impliqué dans l'acte d'acquisition, peut aussi avoir conservé des éléments. Des archives numériques personnelles — e-mails, espace client — constituent également une piste.",
  },
  {
    q: "Les échanges par e-mail avec la banque sont-ils utiles ?",
    a: "Oui. Les e-mails, courriers et comptes rendus de rendez-vous peuvent permettre de retracer quelles informations ont été communiquées, quand, et sous quelle forme. Ils sont particulièrement utiles pour évaluer si les risques liés au change ont fait l'objet d'explications concrètes.",
  },
  {
    q: "Les tableaux d'amortissement suffisent-ils pour une analyse ?",
    a: "Ils sont très utiles mais insuffisants seuls. Les tableaux permettent de retracer l'évolution du capital restant dû et l'impact du taux de change. Mais l'analyse des clauses contractuelles et des documents d'information remis nécessite l'offre de prêt et les conditions générales.",
  },
  {
    q: "Mon prêt est remboursé depuis plusieurs années : quels documents chercher ?",
    a: "Les mêmes documents restent pertinents : offre initiale, conditions particulières, tableaux d'amortissement, relevé de remboursement final, avenants et échanges avec la banque lors du remboursement. La banque est tenue de conserver les contrats ; une demande formelle peut permettre d'en obtenir des copies.",
  },
];

const documents = [
  {
    icon: "📄",
    title: "L'offre de prêt",
    desc: "Document contractuel principal remis avant la signature. Il précise le montant, la devise, la durée, les modalités de remboursement et les clauses principales.",
  },
  {
    icon: "📋",
    title: "Les conditions générales",
    desc: "Contiennent les règles applicables à tous les prêts du même type. Les clauses de devise et les dispositions sur le risque de change y figurent souvent.",
  },
  {
    icon: "📝",
    title: "Les conditions particulières",
    desc: "Complètent les conditions générales avec les éléments spécifiques au contrat : capital, taux, durée, garanties, et parfois les clauses de conversion.",
  },
  {
    icon: "⚠️",
    title: "La notice d'information sur le risque de change",
    desc: "Document clé pour l'analyse. Son existence, sa date, son contenu et les simulations qu'elle contient peuvent être déterminants dans l'appréciation du dossier.",
  },
  {
    icon: "📊",
    title: "Les simulations remises par la banque",
    desc: "Les projections chiffrées remises avant ou lors de la signature permettent de vérifier si l'impact d'une variation EUR/CHF a été illustré concrètement.",
  },
  {
    icon: "📈",
    title: "Les tableaux d'amortissement",
    desc: "Indiquent le capital restant dû à chaque échéance, en CHF et parfois en euros. Utiles pour retracer l'évolution du prêt et calculer l'impact du change.",
  },
  {
    icon: "📎",
    title: "Les avenants",
    desc: "Modifications contractuelles survenues en cours de prêt : renégociation, modification du taux, changement de devise, réaménagement. Chacun peut avoir sa propre logique.",
  },
  {
    icon: "✉️",
    title: "Les échanges avec la banque",
    desc: "Courriers, e-mails, comptes rendus de rendez-vous. Ces éléments peuvent permettre de vérifier quelles informations ont effectivement été communiquées à l'emprunteur.",
  },
];

const checklistItems = [
  "Offre de prêt originale",
  "Conditions particulières du contrat",
  "Conditions générales du prêt",
  "Notice d'information sur le risque de change",
  "Simulations EUR/CHF remises par la banque",
  "Brochures ou plaquettes commerciales reçues",
  "Tableaux d'amortissement (initial et actualisés)",
  "Relevés de compte en CHF (mensuels ou annuels)",
  "Courriers de la banque sur le capital restant dû",
  "Avenants et actes de renégociation",
  "Échanges écrits (e-mails, courriers, comptes rendus)",
  "Justificatifs de revenus en CHF (si frontalier)",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/documents-pret-chf`,
      headline: "Documents prêt CHF : quelles pièces réunir pour une analyse ?",
      description:
        "Avant toute vérification, certains documents sont essentiels pour comprendre la structure du prêt et l'information remise par la banque.",
      url: `${SITE_URL}/blog/documents-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-19",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/documents-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Documents prêt CHF", item: `${SITE_URL}/blog/documents-pret-chf` },
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

export default function ArticleDocuments() {
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
              <span>Documents prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Documents</span>
            <h1>Documents prêt CHF : quelles pièces réunir pour une analyse ?</h1>
            <p className="article-hero-intro">
              Avant toute vérification d'un prêt immobilier en francs suisses,
              il est utile de rassembler les documents essentiels. L'offre de
              prêt, les notices d'information, les simulations remises et les
              échanges avec la banque sont souvent déterminants pour apprécier
              l'information communiquée et la structure contractuelle du dossier.
            </p>
            <div className="article-meta">
              <span>Documents</span>
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

          <h2>Pourquoi les documents sont essentiels dans un prêt CHF</h2>
          <p>
            L'analyse d'un prêt CHF repose en grande partie sur les pièces
            disponibles. Ce sont elles qui permettent de vérifier si
            l'information sur le risque de change était présente, précise et
            compréhensible au moment de la signature. Une clause contractuelle
            n'a pas la même portée si elle n'a jamais été expliquée
            concrètement à l'emprunteur.
          </p>
          <p>
            À l'inverse, des documents complets, datés et personnalisés peuvent
            démontrer que la banque a rempli ses obligations d'information et de
            mise en garde. Dans tous les cas, c'est l'ensemble du dossier
            documentaire qui permet une appréciation rigoureuse — et non un seul
            document isolé. La jurisprudence récente sur les{" "}
            <Link href="/blog/clause-abusive-pret-chf">clauses abusives dans les prêts CHF</Link>{" "}
            illustre ce point : la présence ou l'absence d'une notice sur le
            risque de change peut être décisive.
          </p>

          <h2>Les documents contractuels à retrouver</h2>
          <p>
            Les pièces contractuelles constituent le socle de tout dossier
            prêt CHF. Elles définissent les droits et obligations de chaque
            partie et fixent les conditions dans lesquelles le prêt a été mis
            en place.
          </p>
          <ul>
            <li>
              <strong>L'offre de prêt :</strong> document central remis avant
              la signature, il précise le montant en CHF, la durée, le taux,
              les modalités de remboursement et les clauses relatives à la
              devise et au change.
            </li>
            <li>
              <strong>Les conditions particulières :</strong> elles reprennent
              les éléments spécifiques au contrat — capital, taux, garanties —
              et peuvent contenir des clauses de conversion ou de remboursement
              propres à chaque dossier.
            </li>
            <li>
              <strong>Les conditions générales :</strong> elles encadrent
              l'ensemble des prêts du même type proposés par la banque. Les
              mécanismes de change et de remboursement y sont souvent détaillés.
            </li>
            <li>
              <strong>Les avenants :</strong> toute modification contractuelle
              intervenue en cours de prêt — renégociation, réaménagement,
              changement de taux ou de devise — est formalisée par un avenant.
              Chacun mérite une lecture attentive.
            </li>
            <li>
              <strong>Les actes de renégociation :</strong> si le prêt a été
              restructuré ou converti en euros, les conditions de cette
              opération (taux de change appliqué, nouveau capital, pénalités)
              font partie du dossier contractuel.
            </li>
          </ul>

          <h2>Les documents d'information précontractuelle</h2>
          <p>
            Au-delà du contrat lui-même, les documents remis avant ou lors de
            la signature renseignent sur l'information effectivement délivrée à
            l'emprunteur. C'est souvent là que se situent les éléments les plus
            significatifs pour une analyse.
          </p>
          <ul>
            <li>
              <strong>La notice d'information sur le risque de change :</strong>{" "}
              document spécifique destiné à expliquer le mécanisme EUR/CHF, ses
              conséquences sur le capital restant dû et l'incertitude inhérente
              à toute fluctuation monétaire. Son existence, sa date et son
              contenu sont souvent scrutés attentivement.
            </li>
            <li>
              <strong>Les simulations chiffrées :</strong> projections montrant
              l'évolution du prêt selon différents scénarios de taux de change.
              Si des hypothèses défavorables n'y figuraient pas, cela peut
              constituer un signal à examiner.
            </li>
            <li>
              <strong>Les exemples chiffrés personnalisés :</strong> tableaux ou
              graphiques illustrant concrètement l'impact d'une variation
              EUR/CHF sur le capital et les mensualités de l'emprunteur.
            </li>
            <li>
              <strong>Les brochures et plaquettes commerciales :</strong>{" "}
              documents de présentation du produit CHF remis lors de la phase
              commerciale. Ils permettent de reconstituer la mise en avant du
              produit et les arguments utilisés.
            </li>
            <li>
              <strong>Les échanges précontractuels :</strong> e-mails, courriers
              et comptes rendus de réunion antérieurs à la signature. Ils
              peuvent renseigner sur les informations communiquées et les
              questions posées par l'emprunteur.
            </li>
          </ul>

          <h2>Les documents financiers pendant la vie du prêt</h2>
          <p>
            Les documents produits durant la vie du prêt permettent de retracer
            son évolution et d'évaluer l'impact réel du taux de change sur le
            dossier.
          </p>
          <ul>
            <li>
              <strong>Les tableaux d'amortissement :</strong> remis à la
              souscription et parfois actualisés, ils indiquent le capital
              restant dû à chaque échéance, en CHF et parfois en euros. Ils
              sont utiles pour mesurer l'écart entre les projections initiales
              et la réalité du prêt.
            </li>
            <li>
              <strong>Les relevés de compte en CHF :</strong> les relevés
              mensuels ou annuels permettent de retracer les versements
              effectués et les variations du capital libellé en devise.
            </li>
            <li>
              <strong>Les courriers annuels de la banque :</strong> certains
              établissements adressaient des bilans annuels précisant le capital
              restant dû en CHF et son équivalent en euros au taux du moment.
              Ces documents illustrent directement l'exposition au change.
            </li>
            <li>
              <strong>Les attestations de capital restant dû :</strong>{" "}
              documents ponctuels fournis par la banque lors d'une demande de
              remboursement anticipé, d'une revente ou d'une renégociation.
            </li>
          </ul>

          <h2>Les documents liés à votre situation personnelle</h2>
          <p>
            Selon le profil de l'emprunteur, d'autres pièces peuvent compléter
            le dossier et apporter un éclairage sur les conditions dans
            lesquelles le prêt a été souscrit ou remboursé.
          </p>
          <ul>
            <li>
              <strong>Justificatifs de revenus en CHF :</strong> pour les
              frontaliers, les revenus perçus en francs suisses constituaient
              souvent l'argument commercial avancé pour souscrire ce type de
              prêt. Feuilles de paie, contrat de travail suisse, avis
              d'imposition.
            </li>
            <li>
              <strong>Documents liés à une perte de revenus CHF :</strong>{" "}
              changement d'employeur, retour en France, retraite : si les
              revenus en CHF ont cessé en cours de prêt, cette évolution peut
              être documentée et constitue un élément de contexte.
            </li>
            <li>
              <strong>Actes liés à la revente du bien :</strong> si le prêt a
              été soldé lors d'une cession immobilière, le compromis et l'acte
              définitif de vente, ainsi que le décompte notarial, permettent de
              reconstituer les conditions du remboursement.
            </li>
            <li>
              <strong>Documents de remboursement anticipé :</strong>{" "}
              décompte de remboursement, attestation de solde, relevé du taux de
              change appliqué le jour du solde.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous avez rassemblé vos documents et souhaitez identifier les
              signaux à vérifier dans votre dossier prêt CHF ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Que faire si certains documents manquent ?</h2>
          <p>
            L'absence de certaines pièces est fréquente, notamment pour des
            prêts souscrits il y a plus de dix ans. Plusieurs démarches peuvent
            permettre de les retrouver.
          </p>
          <ol>
            <li>
              <strong>Demander à la banque :</strong> tout établissement de
              crédit est tenu de conserver les contrats pendant une durée
              minimale. Une demande écrite et formelle (courrier recommandé ou
              e-mail avec accusé de lecture) permet généralement d'obtenir une
              copie de l'offre de prêt et des conditions contractuelles.
            </li>
            <li>
              <strong>Contacter le notaire :</strong> si le prêt était adossé à
              un acte d'acquisition, le notaire dispose en principe d'un
              exemplaire du dossier. Il peut fournir des copies sur demande.
            </li>
            <li>
              <strong>Fouiller les archives numériques personnelles :</strong>{" "}
              e-mails, espace client en ligne, documents scannés et sauvegardés,
              photos de documents. Beaucoup d'emprunteurs retrouvent des pièces
              importantes dans leur messagerie de l'époque.
            </li>
            <li>
              <strong>Solliciter l'intermédiaire ou le courtier :</strong> si un
              courtier en crédit immobilier était impliqué dans la mise en
              place du prêt, il peut avoir conservé des éléments du dossier.
            </li>
            <li>
              <strong>Reconstituer les données clés depuis les tableaux :</strong>{" "}
              même sans offre, le capital initial en CHF, le taux de change de
              souscription et les dates clés peuvent souvent être retrouvés dans
              les tableaux d'amortissement ou les relevés de compte.
            </li>
          </ol>

          <h2>Checklist des documents à réunir</h2>
          <p>
            Voici une liste de contrôle pour vous aider à identifier les pièces
            disponibles et celles qui restent à retrouver :
          </p>
          <ul className="article-checklist">
            {checklistItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                L'offre de prêt et la notice d'information sur le risque de
                change sont les pièces centrales de tout dossier prêt CHF.
              </li>
              <li>
                Les documents précontractuels (simulations, brochures, échanges)
                permettent d'évaluer l'information effectivement délivrée à
                l'emprunteur.
              </li>
              <li>
                En cas de documents manquants, une demande formelle à la banque
                ou au notaire permet souvent de les récupérer.
              </li>
            </ul>
          </div>

          {/* DOCUMENTS GRID */}
          <h2>Synthèse des pièces et leur utilité</h2>
          <p>
            Voici les principales catégories de documents et ce qu'elles
            permettent de vérifier dans un dossier prêt CHF.
          </p>
          <div className="article-docs-grid">
            {documents.map((doc, i) => (
              <div key={i} className="article-doc-card">
                <span className="article-doc-icon">{doc.icon}</span>
                <div>
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Pour aller plus loin,{" "}
            <Link href="/simulation">
              la simulation indicative prêt CHF
            </Link>{" "}
            permet d'estimer l'impact d'une variation EUR/CHF à partir du
            capital initial, du taux de souscription et de la durée du prêt.
            Ces informations figurent généralement dans l'offre de prêt et les
            tableaux d'amortissement.
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
            <h2>Prêt à vérifier votre dossier prêt CHF ?</h2>
            <p>
              Le test d'éligibilité identifie les signaux clés à partir des
              documents disponibles. La simulation indicative donne un ordre de
              grandeur sur l'impact du change.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité prêt CHF
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
