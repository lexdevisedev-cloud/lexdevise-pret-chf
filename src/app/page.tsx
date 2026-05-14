import type { Metadata } from "next";
import Link from "next/link";

// TODO: remplacer par l'URL réelle du site en production
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pretschfinfo.fr";

export const metadata: Metadata = {
  title: "Prêt CHF : recours, risque de change et simulation",
  description:
    "Comprenez les prêts immobiliers en francs suisses, le risque de change, la jurisprudence récente et les critères à vérifier. Test d'éligibilité et simulation indicative.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prêt CHF : comprendre vos droits face au risque de change",
    description:
      "Guides, test d'éligibilité et simulation indicative pour les prêts immobiliers en francs suisses.",
    type: "website",
    locale: "fr_FR",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce qu'un prêt immobilier en francs suisses ?",
    a: "Un prêt immobilier en francs suisses est un crédit dont le capital, le remboursement ou certains mécanismes sont exprimés ou indexés sur le CHF. Il peut concerner des emprunteurs frontaliers ou des biens situés en France.",
  },
  {
    q: "Un frontalier payé en CHF peut-il être concerné ?",
    a: "Oui, potentiellement. Le fait de percevoir des revenus en francs suisses ne suffit pas toujours à exclure tout risque, notamment lorsque le bien financé est situé en France ou lorsque la situation professionnelle évolue.",
  },
  {
    q: "Pourquoi le risque de change est-il important ?",
    a: "Le taux EUR/CHF peut modifier la contrevaleur en euros d'un montant exprimé en francs suisses. Cela peut peser sur le capital restant dû, une revente ou un remboursement anticipé.",
  },
  {
    q: "Une simple mention du risque de change suffit-elle ?",
    a: "Pas nécessairement. L'analyse porte sur la clarté et la compréhension concrète de l'information remise à l'emprunteur, notamment les notices, simulations et clauses contractuelles.",
  },
  {
    q: "Comment savoir si mon prêt mérite une vérification ?",
    a: "Le test d'éligibilité en 3 questions permet de repérer les principaux signaux : prêt lié au CHF, bien situé en France et qualité de l'information bancaire.",
  },
  {
    q: "Le simulateur calcule-t-il un préjudice certain ?",
    a: "Non. Le simulateur donne une estimation indicative. Le résultat dépend ensuite de l'analyse du contrat, des pièces bancaires et de la situation de l'emprunteur.",
  },
  {
    q: "Quels documents faut-il réunir ?",
    a: "Les documents utiles sont notamment l'offre de prêt, les conditions particulières, les conditions générales, les notices, les simulations, les tableaux d'amortissement, les avenants et les échanges avec la banque.",
  },
];

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prêts CHF Info",
  url: SITE_URL,
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prêt CHF : comprendre vos droits face au risque de change",
  description:
    "Page d'information sur les prêts immobiliers en francs suisses, le risque de change, l'éligibilité et la simulation indicative.",
  inLanguage: "fr-FR",
  url: SITE_URL,
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
  ],
};

const concernedProfiles = [
  "Vous avez souscrit un prêt immobilier en francs suisses.",
  "Votre bien est situé en France.",
  "Vous êtes ou étiez frontalier suisse.",
  "Vous avez remboursé, renégocié ou revendu le bien.",
  "Le capital restant dû paraît élevé.",
  "Vous ne retrouvez pas de simulation chiffrée sur le risque de change.",
  "Votre situation professionnelle a évolué.",
  "Votre prêt est in fine ou adossé à un support de remboursement.",
];

const guidedSteps = [
  {
    num: "1",
    title: "Identifier la nature du prêt",
    text: "Vérifier si le contrat est libellé, remboursable ou indexé sur le CHF.",
  },
  {
    num: "2",
    title: "Tester les critères principaux",
    text: "Utiliser le test d'éligibilité pour repérer les premiers signaux.",
  },
  {
    num: "3",
    title: "Estimer l'impact économique",
    text: "Réaliser une simulation indicative pour visualiser un ordre de grandeur.",
  },
  {
    num: "4",
    title: "Lire la jurisprudence",
    text: "Comprendre les critères retenus par les décisions récentes.",
  },
  {
    num: "5",
    title: "Préparer les documents",
    text: "Réunir l'offre de prêt, les notices, simulations, avenants et échanges avec la banque.",
  },
];

const documents = [
  "Offre de prêt",
  "Conditions particulières",
  "Conditions générales",
  "Notice d'information",
  "Simulations chiffrées",
  "Tableaux d'amortissement",
  "Avenants ou renégociations",
  "Courriers et emails avec la banque",
  "Documents de revente",
  "Justificatifs de revenus",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <main className="home-page">

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section className="home-section home-hero">
          <div className="section-inner hero-layout">
            <div className="hero-copy">
              <p className="home-badge">Prêts immobiliers en francs suisses</p>
              <h1>
                Prêt CHF : comprendre vos droits face au risque de change
              </h1>
              <p>
                Vous avez souscrit un prêt immobilier en francs suisses ou
                indexé sur le CHF ? Identifiez les situations à risque,
                comprenez la jurisprudence récente et réalisez une première
                vérification indicative de votre dossier.
              </p>

              <div className="hero-actions">
                <Link href="/eligibilite" className="primary-btn">
                  Tester mon éligibilité
                </Link>
                <Link href="/simulation" className="secondary-btn">
                  Faire une simulation
                </Link>
              </div>

              <Link href="/jurisprudence" className="home-tertiary-link">
                Comprendre la jurisprudence &rarr;
              </Link>

              <p className="home-hero-note">
                Informations pédagogiques — ne constitue pas un avis juridique
                personnalisé.
              </p>
            </div>

            <div className="juri-hero-card" aria-label="Points clés">
              <p className="juri-hero-card-label">Points clés</p>
              <ul>
                <li>Prêt en francs suisses ou indexé CHF</li>
                <li>Bien immobilier situé en France</li>
                <li>Risque de change sur la durée</li>
                <li>Information bancaire à vérifier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 2. POURQUOI LES PRÊTS CHF POSENT PROBLÈME ────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Pourquoi les prêts immobiliers en francs suisses peuvent poser
                problème ?
              </h2>
              <p>
                Un prêt immobilier en francs suisses peut sembler attractif au
                moment de la souscription, notamment lorsque le taux d'intérêt
                paraît favorable. Mais lorsque le bien financé est situé en
                France et valorisé en euros, l'évolution du taux EUR/CHF peut
                créer un décalage entre la valeur du bien et le capital restant
                dû.
              </p>
            </div>
            <div className="home-cards-grid">
              <article className="home-card">
                <h3>Une dette liée au franc suisse</h3>
                <p>
                  Le capital ou les remboursements peuvent dépendre du CHF. En
                  cas d'évolution défavorable du taux de change, la
                  contrevaleur en euros peut augmenter.
                </p>
              </article>
              <article className="home-card">
                <h3>Un bien souvent valorisé en euros</h3>
                <p>
                  Lorsque le bien immobilier est situé en France, sa valeur de
                  revente est généralement exprimée en euros, ce qui peut créer
                  un déséquilibre avec une dette liée au CHF.
                </p>
              </article>
              <article className="home-card">
                <h3>Une information bancaire déterminante</h3>
                <p>
                  L'analyse porte souvent sur la clarté des explications remises
                  avant la signature : notices, simulations, clauses de risque
                  de change et exemples chiffrés.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── 3. ÊTES-VOUS CONCERNÉ ? ───────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Êtes-vous concerné par un recours prêt CHF ?</h2>
              <p>
                Certaines situations peuvent justifier une première
                vérification, sans préjuger de l'existence d'un recours. Le{" "}
                <Link href="/eligibilite">test d'éligibilité</Link> permet
                d'identifier rapidement les principaux signaux à examiner.
              </p>
            </div>
            <ul className="home-concerned-list">
              {concernedProfiles.map((item) => (
                <li key={item} className="home-concerned-item">
                  <span className="juri-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="home-section-cta">
              <Link href="/eligibilite" className="primary-btn">
                Faire le test en 3 questions
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. COMPRENDRE LE RISQUE DE CHANGE ────────────────────────── */}
        <section className="home-section dark-green-section">
          <div className="section-inner home-risk-layout">
            <div>
              <p className="eyebrow">Risque de change</p>
              <h2>Risque de change prêt CHF : ce qu'il faut comprendre</h2>
              <p>
                Le risque de change correspond à l'impact de la variation entre
                l'euro et le franc suisse. Dans un prêt immobilier en CHF, ce
                risque peut apparaître lors du remboursement, d'une revente,
                d'un remboursement anticipé ou lorsque la situation de
                l'emprunteur évolue.
              </p>
              <p className="home-risk-note">
                Ces exemples sont pédagogiques. Une simulation précise dépend
                des montants, dates, conditions du contrat et documents
                disponibles.
              </p>
              <div className="home-section-cta">
                <Link href="/simulation" className="juri-cta-primary-btn">
                  Faire une simulation indicative
                </Link>
              </div>
            </div>

            <div className="rate-snapshot" aria-label="Exemples de taux EUR/CHF">
              <div>
                <span>Exemple favorable</span>
                <strong>1,60</strong>
                <small>
                  Situation EUR/CHF plus favorable à la souscription dans
                  certains dossiers anciens.
                </small>
              </div>
              <div>
                <span>Exemple défavorable</span>
                <strong>0,95</strong>
                <small>
                  Contrevaleur en euros potentiellement plus lourde pour un
                  montant exprimé en CHF.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. JURISPRUDENCE RÉCENTE ──────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Jurisprudence prêt CHF : pourquoi les décisions récentes sont
                importantes
              </h2>
              <p>
                Les décisions récentes ont renforcé l'attention portée à
                l'information donnée aux emprunteurs. L'enjeu n'est pas
                uniquement de savoir si le prêt était libellé ou indexé sur le
                franc suisse, mais de vérifier si le risque de change a été
                expliqué de manière claire, concrète et compréhensible sur
                toute la durée du contrat.
              </p>
            </div>
            <div className="home-cards-grid">
              <article className="home-card">
                <h3>Information claire</h3>
                <p>
                  La banque devait permettre à l'emprunteur de comprendre le
                  fonctionnement concret du mécanisme de change.
                </p>
              </article>
              <article className="home-card">
                <h3>Analyse sur la durée</h3>
                <p>
                  Le risque peut être apprécié sur toute la durée du prêt,
                  notamment en cas de revente, remboursement anticipé ou
                  évolution des revenus.
                </p>
              </article>
              <article className="home-card">
                <h3>Chaque dossier dépend des pièces</h3>
                <p>
                  L'offre de prêt, les notices, les simulations et les échanges
                  avec la banque sont essentiels pour apprécier la situation.
                </p>
              </article>
            </div>
            <div className="home-section-cta">
              <Link href="/jurisprudence" className="secondary-btn">
                Comprendre la jurisprudence prêt CHF
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. LES 3 CRITÈRES ────────────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Les 3 critères essentiels à vérifier dans un prêt CHF</h2>
              <p>
                Une première analyse peut commencer par trois questions simples.
                Elles permettent d'identifier si le dossier mérite une
                vérification plus approfondie.
              </p>
            </div>
            <div className="home-cards-grid">
              <article className="home-card">
                <span className="home-card-num">01</span>
                <h3>Le prêt est-il lié au franc suisse ?</h3>
                <p>
                  Le crédit peut être libellé en CHF, remboursable en CHF ou
                  indexé sur le franc suisse. Cette information figure
                  généralement dans l'offre de prêt ou les conditions
                  particulières.
                </p>
              </article>
              <article className="home-card">
                <span className="home-card-num">02</span>
                <h3>Le bien financé est-il situé en France ?</h3>
                <p>
                  Un bien situé en France est généralement valorisé en euros,
                  alors que le capital restant dû peut dépendre du CHF.
                </p>
              </article>
              <article className="home-card">
                <span className="home-card-num">03</span>
                <h3>L'information sur le risque était-elle claire ?</h3>
                <p>
                  Il faut vérifier si des explications concrètes, des exemples
                  chiffrés ou des simulations ont été remis avant la signature.
                </p>
              </article>
            </div>
            <div className="home-section-cta">
              <Link href="/eligibilite" className="primary-btn">
                Tester mon éligibilité
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. PARCOURS GUIDÉ ─────────────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Un parcours guidé pour comprendre votre situation</h2>
            </div>
            <div className="juri-timeline home-steps-timeline">
              {guidedSteps.map((step) => (
                <div key={step.num} className="juri-timeline-item">
                  <div className="juri-timeline-marker">
                    <span>{step.num}</span>
                  </div>
                  <div className="juri-timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home-section-cta">
              <Link href="/eligibilite" className="primary-btn">
                Commencer par le test
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. SIMULATION INDICATIVE ──────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-sim-layout">
              <div>
                <h2 className="home-sim-h2">
                  Simulateur prêt CHF : obtenir une première estimation
                  indicative
                </h2>
                <p className="home-sim-intro">
                  Le simulateur permet d'obtenir une fourchette indicative à
                  partir des informations principales du prêt. Il ne constitue
                  pas une évaluation juridique ou bancaire définitive, mais
                  peut aider à visualiser un ordre de grandeur avant d'analyser
                  les documents.
                </p>
                <ul className="home-sim-points">
                  <li>
                    <span className="juri-check-icon" aria-hidden="true">
                      ✓
                    </span>
                    Estimation rapide
                  </li>
                  <li>
                    <span className="juri-check-icon" aria-hidden="true">
                      ✓
                    </span>
                    Résultat indicatif
                  </li>
                  <li>
                    <span className="juri-check-icon" aria-hidden="true">
                      ✓
                    </span>
                    À confirmer par l'analyse du contrat
                  </li>
                </ul>
                <div className="home-section-cta">
                  <Link href="/simulation" className="primary-btn">
                    Faire une estimation
                  </Link>
                </div>
              </div>

              <div className="home-sim-visual">
                <p className="home-sim-visual-label">Simulation indicative</p>
                <p className="home-sim-visual-text">
                  Renseignez le montant, la date de souscription, la devise et
                  les conditions pour obtenir une fourchette d'estimation.
                </p>
                <Link href="/simulation" className="home-sim-visual-link">
                  Accéder au simulateur &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. DOCUMENTS UTILES ───────────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Documents utiles pour analyser un prêt immobilier en francs
                suisses
              </h2>
              <p>
                L'analyse d'un prêt CHF dépend fortement des pièces disponibles.
                Les documents remis avant la signature permettent de vérifier la
                clarté de l'information et les mécanismes du contrat.
              </p>
            </div>
            <div className="home-docs-grid">
              {documents.map((doc) => (
                <div key={doc} className="juri-doc-item">
                  <span className="home-doc-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                  {doc}
                </div>
              ))}
            </div>
            <div className="home-section-cta">
              <Link href="/eligibilite#documents" className="secondary-btn">
                Voir la liste complète des documents à vérifier
              </Link>
            </div>
          </div>
        </section>

        {/* ── 10. BLOG / RESSOURCES ─────────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Guides et ressources sur les prêts CHF</h2>
            </div>
            <div className="blog-grid">
              <Link
                href="/blog/pret-chf-frontalier"
                className="blog-card"
              >
                <span className="blog-card-cat">Frontaliers</span>
                <h3 className="blog-card-title">
                  Prêt CHF frontalier : êtes-vous concerné ?
                </h3>
                <p className="blog-card-desc">
                  Comprendre pourquoi un emprunteur frontalier peut souhaiter
                  vérifier son prêt immobilier en francs suisses.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">6 min de lecture</span>
                  <span className="blog-card-link">Lire l'article &rarr;</span>
                </div>
              </Link>

              <Link
                href="/blog/risque-change-pret-chf"
                className="blog-card"
              >
                <span className="blog-card-cat">Risque de change</span>
                <h3 className="blog-card-title">
                  Risque de change prêt CHF : comprendre l'impact EUR/CHF
                </h3>
                <p className="blog-card-desc">
                  Un guide simple pour comprendre comment le franc suisse peut
                  influencer la contrevaleur d'un prêt.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">5 min de lecture</span>
                  <span className="blog-card-link">Lire l'article &rarr;</span>
                </div>
              </Link>

              <Link
                href="/blog/clause-abusive-pret-chf"
                className="blog-card"
              >
                <span className="blog-card-cat">Clauses contractuelles</span>
                <h3 className="blog-card-title">
                  Clause abusive prêt CHF : ce qu'il faut vérifier
                </h3>
                <p className="blog-card-desc">
                  Les clauses liées à la devise, au remboursement et au risque
                  de change peuvent être déterminantes.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">7 min de lecture</span>
                  <span className="blog-card-link">Lire l'article &rarr;</span>
                </div>
              </Link>
            </div>
            <div className="home-section-cta">
              <Link href="/blog" className="secondary-btn">
                Voir tous les articles
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. FAQ ───────────────────────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Questions fréquentes sur les prêts CHF</h2>
            </div>
            <div className="juri-faq">
              {faqItems.map((item) => (
                <details key={item.q} className="juri-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. CTA FINAL / FORMULAIRE ────────────────────────────────── */}
        <section className="home-section contact-section">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Première vérification</p>
              <h2>Faites identifier les éléments utiles de votre dossier</h2>
              <p>
                Prêt en cours ou déjà remboursé, frontalier ou non : quelques
                informations permettent d'orienter une première lecture et de
                savoir quelles pièces réunir.
              </p>
            </div>

            <form className="contact-form">
              <label>
                Nom complet
                <input type="text" name="name" placeholder="Votre nom" />
              </label>
              <label>
                Adresse e-mail
                <input type="email" name="email" placeholder="vous@email.fr" />
              </label>
              <label>
                Année de souscription
                <input type="text" name="year" placeholder="Ex. 2008" />
              </label>
              <label>
                Votre situation
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Montant, année, banque, devise du prêt, situation actuelle"
                />
              </label>
              <button type="submit">Demander une première lecture</button>
              <p className="home-form-note">
                Cette demande ne constitue pas un avis juridique personnalisé.
                Elle permet uniquement d'orienter les pièces à examiner.
              </p>
            </form>
          </div>
        </section>

        {/* ── MENTION LÉGALE ────────────────────────────────────────────── */}
        <div className="home-legal-bar">
          <div className="section-inner">
            <p>
              Les informations présentées ont une vocation pédagogique et ne
              constituent pas un avis juridique personnalisé.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
