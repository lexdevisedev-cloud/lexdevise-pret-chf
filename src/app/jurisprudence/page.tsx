import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title:
    "Jurisprudence prêt CHF : recours, risque de change et clauses abusives | Prêts CHF Info",
  description:
    "Comprendre les évolutions de jurisprudence sur les prêts immobiliers en francs suisses, le risque de change, les clauses abusives et les recours possibles pour les emprunteurs frontaliers ou résidents en France.",
  alternates: {
    canonical: `${SITE_URL}/jurisprudence`,
  },
  openGraph: {
    title:
      "Jurisprudence prêt CHF : recours, risque de change et clauses abusives | Prêts CHF Info",
    description:
      "Comprendre les évolutions de jurisprudence sur les prêts immobiliers en francs suisses, le risque de change, les clauses abusives et les recours possibles pour les emprunteurs frontaliers ou résidents en France.",
    url: `${SITE_URL}/jurisprudence`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jurisprudence prêt CHF : recours, risque de change et clauses abusives | Prêts CHF Info",
    description:
      "Comprendre les évolutions de jurisprudence sur les prêts immobiliers en francs suisses, le risque de change, les clauses abusives et les recours possibles pour les emprunteurs frontaliers ou résidents en France.",
  },
};

/* ── Données existantes ────────────────────────────────── */

const evolutionsCards = [
  {
    title: "Une information plus concrète",
    text: "La banque ne peut pas se limiter à une mention abstraite du risque de change. L'emprunteur doit pouvoir comprendre le fonctionnement réel du mécanisme.",
  },
  {
    title: "Une appréciation sur toute la durée",
    text: "Le risque peut apparaître lors d'une revente, d'un remboursement anticipé, d'une perte de revenus en CHF ou à l'échéance d'un prêt in fine.",
  },
  {
    title: "Une analyse dossier par dossier",
    text: "Chaque contrat doit être examiné à partir des clauses, notices, simulations, avenants et échanges remis à l'emprunteur.",
  },
];

const frontaliersSituations = [
  "bien immobilier situé en France",
  "capital restant dû exprimé ou calculé en CHF",
  "revenus initialement en CHF puis revenus en euros",
  "retraite, préretraite ou perte d'emploi suisse",
  "revente du bien pour solder le prêt",
  "prêt in fine ou remboursement important à l'échéance",
  "absence de simulation chiffrée avant signature",
];

const risquePhases = [
  {
    title: "À la souscription",
    text: "Un taux EUR/CHF favorable peut donner l'impression d'un financement attractif.",
  },
  {
    title: "Pendant la durée du prêt",
    text: "L'évolution du taux peut modifier la contrevaleur du capital restant dû.",
  },
  {
    title: "Au moment de solder le prêt",
    text: "Le risque devient concret si le bien est revendu en euros alors que la dette reste liée au CHF.",
  },
];

const timelineItems = [
  {
    period: "Avant les évolutions récentes",
    label: "Une protection limitée pour les frontaliers",
    text: "Les frontaliers rémunérés en CHF étaient parfois considérés comme moins exposés au risque de change lorsque le prêt était remboursable dans la même devise.",
  },
  {
    period: "Apport du droit européen",
    label: "Un standard de transparence renforcé",
    text: "L'exigence de transparence ne se limite pas à la lisibilité grammaticale. L'emprunteur doit pouvoir comprendre les conséquences économiques potentiellement significatives du contrat.",
  },
  {
    period: "Cour de cassation — 18 septembre 2024",
    label: "L'exigence de transparence confirmée",
    text: "L'exigence de transparence est réaffirmée : la banque doit être en mesure de démontrer que l'emprunteur a pu comprendre concrètement le mécanisme et ses conséquences.",
  },
  {
    period: "Cour de cassation — 9 juillet 2025",
    label: "Une nouvelle analyse unifiée",
    text: "Les décisions rendues ce jour-là renforcent l'analyse du risque sur toute la durée du prêt, y compris pour les emprunteurs percevant des revenus en francs suisses.",
  },
  {
    period: "Aujourd'hui",
    label: "Une appréciation globale du dossier",
    text: "L'analyse repose sur les clauses, les documents remis, la situation de l'emprunteur et la capacité à démontrer la compréhension réelle du risque de change.",
  },
];

const cass2025Cards = [
  {
    title: "Le frontalier n'est pas automatiquement exclu",
    text: "La perception de revenus en CHF ne suffit pas toujours à neutraliser le risque, notamment lorsque le bien est situé en France.",
  },
  {
    title: "Le risque doit être projeté dans le temps",
    text: "Le contrat doit permettre de comprendre les effets possibles sur toute la durée du prêt.",
  },
  {
    title: "La transparence est centrale",
    text: "La banque doit avoir fourni une information claire, intelligible et concrète.",
  },
  {
    title: "Le résultat n'est pas automatique",
    text: "Si la documentation remise était suffisamment précise, certaines demandes peuvent être rejetées. Chaque dossier doit être analysé.",
  },
];

const sept2024Items = [
  "présence d'exemples chiffrés",
  "notice explicative",
  "simulations avant signature",
  "explication du risque en cas de revente",
  "explication du risque en cas de perte de revenus CHF",
  "clarté des clauses de conversion",
  "cohérence entre les documents remis",
];

const banqueObligations = [
  {
    title: "Le fonctionnement du prêt en devise",
    text: "Capital, remboursement, conversion et devise utilisée devaient être présentés clairement.",
  },
  {
    title: "L'effet d'une variation EUR/CHF",
    text: "L'emprunteur devait pouvoir comprendre l'impact d'une hausse ou d'une baisse du franc suisse.",
  },
  {
    title: "Le capital restant dû",
    text: "Le contrat devait permettre d'apprécier comment la contrevaleur en euros pouvait évoluer.",
  },
  {
    title: "Le risque de revente",
    text: "Une revente en euros peut révéler un décalage avec une dette liée au CHF.",
  },
  {
    title: "L'évolution de la situation personnelle",
    text: "Perte de revenus en CHF, retraite ou changement professionnel peuvent modifier l'exposition au risque.",
  },
  {
    title: "Des exemples compréhensibles",
    text: "Des simulations chiffrées peuvent aider à démontrer la compréhension du mécanisme.",
  },
];

const documentsItems = [
  "Offre de prêt",
  "Conditions particulières",
  "Conditions générales",
  "Notice d'information",
  "Simulations chiffrées",
  "Tableaux d'amortissement",
  "Avenants",
  "Documents de renégociation",
  "Courriers et emails avec la banque",
  "Justificatifs de revenus",
  "Documents de revente",
  "Décompte de remboursement anticipé",
];

const tableauRows = [
  {
    situation: "Prêt CHF + bien situé en France",
    point: "Risque de change entre dette liée au CHF et actif valorisé en euros",
    niveau: "eleve",
    niveauLabel: "Élevé",
  },
  {
    situation: "Frontalier payé en CHF au jour de la signature",
    point: "Le risque doit être apprécié sur toute la durée du contrat",
    niveau: "verifier",
    niveauLabel: "À vérifier",
  },
  {
    situation: "Absence de simulation chiffrée",
    point: "Qualité de l'information précontractuelle",
    niveau: "eleve",
    niveauLabel: "Élevé",
  },
  {
    situation: "Prêt in fine",
    point: "Risque concentré au remboursement du capital",
    niveau: "verifier",
    niveauLabel: "À vérifier",
  },
  {
    situation: "Revente ou remboursement anticipé",
    point: "Contrevaleur du capital restant dû en euros",
    niveau: "eleve",
    niveauLabel: "Élevé",
  },
  {
    situation: "Notice détaillée et signée",
    point: "Peut renforcer la position de la banque selon son contenu",
    niveau: "analyse",
    niveauLabel: "Analyse nécessaire",
  },
  {
    situation: "Prêt déjà remboursé",
    point: "Dates, délais, effets du remboursement et pièces disponibles",
    niveau: "verifier",
    niveauLabel: "À vérifier",
  },
];

const effetsCards = [
  {
    title: "Clause réputée non écrite",
    text: "Une clause abusive peut être écartée du contrat, selon l'analyse retenue.",
  },
  {
    title: "Restitution éventuelle",
    text: "Certaines situations peuvent ouvrir une discussion sur les sommes versées ou les effets économiques du contrat.",
  },
  {
    title: "Rééquilibrage du contrat",
    text: "Le débat peut porter sur la manière dont le risque de change a été réparti.",
  },
  {
    title: "Négociation",
    text: "Certains dossiers peuvent être étudiés dans une logique de discussion ou de solution amiable.",
  },
  {
    title: "Action judiciaire",
    text: "Dans d'autres situations, une action peut être envisagée sous réserve de l'analyse des pièces et délais.",
  },
];

const limitesCards = [
  {
    title: "Documentation claire",
    text: "Une notice précise, datée et compréhensible peut peser dans l'analyse.",
  },
  {
    title: "Preuve de compréhension",
    text: "La banque peut chercher à démontrer que l'emprunteur avait compris les mécanismes du prêt.",
  },
  {
    title: "Délais et prescription",
    text: "Les dates de souscription, de remboursement ou de découverte du risque peuvent être déterminantes.",
  },
  {
    title: "Situation personnelle",
    text: "Revenus, patrimoine, évolution professionnelle et opérations sur le bien doivent être examinés.",
  },
];

const etapesAction = [
  {
    num: "01",
    title: "Tester les critères principaux",
    text: "Utiliser le test d'éligibilité pour vérifier les trois signaux essentiels.",
  },
  {
    num: "02",
    title: "Rassembler les documents",
    text: "Réunir l'offre de prêt, les notices, les simulations, les avenants et les échanges avec la banque.",
  },
  {
    num: "03",
    title: "Estimer l'impact économique",
    text: "Faire une simulation indicative pour visualiser un ordre de grandeur.",
  },
  {
    num: "04",
    title: "Comparer avec la jurisprudence",
    text: "Identifier si les exigences de transparence semblent respectées.",
  },
  {
    num: "05",
    title: "Demander une première lecture",
    text: "Si plusieurs signaux apparaissent, une analyse individualisée peut être pertinente.",
  },
];

/* ── Nouvelles données ─────────────────────────────────── */

const decisionsClés = [
  {
    ref: "Cass. 1re civ., 18 septembre 2024, n° 22-17.746",
    title: "La preuve d'une information concrète",
    text: "La banque doit permettre à l'emprunteur de comprendre réellement le risque de change, pas seulement d'en avoir une connaissance abstraite. Une information trop générale peut être insuffisante si elle ne permet pas d'évaluer les conséquences économiques possibles.",
  },
  {
    ref: "Cass. 1re civ., 9 juillet 2025, n° 24-19.647",
    title: "Le risque apprécié sur toute la durée",
    text: "Même lorsqu'un emprunteur perçoit des revenus en francs suisses, le risque de change peut exister sur toute la durée du prêt. L'analyse ne se limite pas à la situation au jour de la signature.",
  },
  {
    ref: "Cass. 1re civ., 9 juillet 2025, n° 24-18.018",
    title: "Une transparence démontrée peut suffire",
    text: "Lorsque la banque démontre qu'une information claire, concrète et compréhensible a été remise à l'emprunteur, les demandes peuvent être rejetées. Le revirement n'implique pas que toutes les clauses soient automatiquement abusives.",
  },
  {
    ref: "CJUE, 10 juin 2021",
    title: "La transparence au-delà de la grammaire",
    text: "L'exigence de transparence ne se limite pas à la lisibilité formelle des clauses. L'emprunteur doit pouvoir comprendre le fonctionnement économique concret du mécanisme et les conséquences potentiellement significatives pendant toute la durée du contrat.",
  },
];

const juriNeSignifiePas = [
  {
    title: "Elle ne garantit pas une annulation automatique",
    text: "Chaque dossier dépend des clauses du contrat, des documents remis à l'emprunteur, de sa situation personnelle et du calendrier d'action applicable.",
  },
  {
    title: "Elle ne remplace pas l'analyse du contrat",
    text: "Il faut relire l'offre de prêt, les conditions générales, les notices d'information, les simulations, les tableaux d'amortissement et les échanges avec la banque.",
  },
  {
    title: "Elle ne se limite pas à la mensualité",
    text: "Le risque peut aussi porter sur le capital restant dû, la revente du bien, le remboursement anticipé ou une perte de revenus en francs suisses.",
  },
  {
    title: "Elle impose une analyse de la transparence",
    text: "Le point central est souvent de savoir si l'emprunteur a pu comprendre, avant de signer, le fonctionnement concret du risque de change et ses conséquences économiques possibles.",
  },
];

const checklistClauses = [
  "Clause de devise",
  "Clause de remboursement",
  "Clause de conversion",
  "Clause de risque de change",
  "Clause de remboursement anticipé",
  "Clause liée au capital restant dû",
  "Clause d'adossement éventuel",
  "Clauses liées aux avenants ou renégociations",
];

const checklistDocuments = [
  "Offre de prêt",
  "Conditions particulières",
  "Conditions générales",
  "Notice d'information",
  "Simulations chiffrées",
  "Tableaux d'amortissement",
  "Avenants",
  "Courriers et emails",
  "Relevés de prêt",
  "Documents de revente ou de remboursement anticipé",
];

/* ── FAQ (existante + nouvelles questions) ─────────────── */

const faq = [
  {
    q: "Qu'est-ce que la jurisprudence prêt CHF ?",
    a: "La jurisprudence prêt CHF désigne les décisions rendues à propos des crédits immobiliers libellés, remboursables ou indexés sur le franc suisse, notamment lorsque le risque de change et l'information de l'emprunteur sont discutés.",
  },
  {
    q: "La jurisprudence permet-elle d'annuler tous les prêts CHF ?",
    a: "Non. Les décisions récentes renforcent l'exigence de transparence, mais chaque dossier dépend du contrat, des documents remis, de la situation de l'emprunteur et de la prescription applicable.",
  },
  {
    q: "Un frontalier payé en CHF peut-il contester son prêt ?",
    a: "Potentiellement oui. Le fait de percevoir des revenus en francs suisses ne suffit pas toujours à exclure tout risque, surtout lorsque le bien financé est situé en France ou lorsque la situation évolue.",
  },
  {
    q: "Qu'a changé la Cour de cassation le 9 juillet 2025 ?",
    a: "Les décisions du 9 juillet 2025 rappellent que le risque de change doit être apprécié sur toute la durée du contrat et que l'information remise à l'emprunteur doit être claire et compréhensible.",
  },
  {
    q: "Pourquoi l'arrêt du 18 septembre 2024 est-il important ?",
    a: "Il souligne l'importance de la preuve de l'information. La question n'est pas seulement la présence d'une clause, mais la capacité de l'emprunteur à comprendre ses conséquences économiques.",
  },
  {
    q: "Quelle différence entre clause abusive et information insuffisante ?",
    a: "Une clause peut être examinée sous l'angle de sa clarté et de sa compréhension par l'emprunteur. Une information insuffisante peut empêcher de comprendre le mécanisme économique réel, ce qui peut conduire à contester certaines stipulations du contrat.",
  },
  {
    q: "Une clause de risque de change peut-elle être abusive ?",
    a: "Elle peut être examinée sous cet angle si elle n'est pas rédigée de manière claire et compréhensible. L'analyse dépend du contrat et des documents remis.",
  },
  {
    q: "Une clause réputée non écrite signifie-t-elle annulation du prêt ?",
    a: "Pas automatiquement. Les effets dépendent de la clause concernée, du contrat dans son ensemble et de l'analyse juridique retenue.",
  },
  {
    q: "Une simple mention du risque de change suffit-elle ?",
    a: "Pas nécessairement. Une information générale peut être insuffisante si elle ne permet pas de comprendre concrètement les conséquences économiques possibles.",
  },
  {
    q: "Quels documents faut-il réunir ?",
    a: "Les documents utiles sont notamment l'offre de prêt, les conditions générales, les conditions particulières, les notices, les simulations, les avenants et les échanges avec la banque.",
  },
  {
    q: "Une décision de jurisprudence favorable suffit-elle pour agir ?",
    a: "Non. Une décision donne un cadre d'analyse, mais il faut vérifier si les faits, les documents et les clauses du dossier sont comparables. L'issue dépend de l'appréciation des éléments propres à chaque contrat.",
  },
  {
    q: "Un prêt CHF déjà remboursé peut-il encore poser question ?",
    a: "Oui, notamment en cas de remboursement anticipé, de revente ou de difficulté à comprendre le coût réel du crédit. La question dépend toutefois des délais applicables et des pièces disponibles.",
  },
  {
    q: "Le résultat d'un recours prêt CHF est-il garanti ?",
    a: "Non. Chaque dossier dépend des pièces, de la rédaction du contrat, de l'information remise, des délais et de la situation personnelle de l'emprunteur.",
  },
];

export default function JurisprudencePage() {
  return (
    <main className="juri-page">

      {/* 1. HERO */}
      <section className="juri-hero">
        <div className="section-inner juri-hero-inner">
          <div className="juri-hero-copy">
            <p className="eyebrow">ÉVOLUTIONS JURISPRUDENTIELLES 2024–2025</p>
            <h1>
              Jurisprudence prêt CHF : comprendre vos recours face au risque de change
            </h1>
            <p>
              Les décisions récentes ont renforcé les exigences d&apos;information des banques sur les prêts immobiliers en francs suisses. Pour les emprunteurs frontaliers ou les particuliers ayant financé un bien situé en France, l&apos;enjeu est de vérifier si le risque de change a été expliqué clairement, concrètement et sur toute la durée du contrat.
            </p>
            <div className="hero-actions">
              <Link href="/eligibilite" className="primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/simulation" className="secondary-btn">
                Faire une simulation
              </Link>
            </div>
            <Link href="/eligibilite#documents" className="juri-discrete-link">
              Voir les documents à réunir
            </Link>
          </div>

          <div className="juri-hero-card">
            <p className="juri-hero-card-label">Points clés</p>
            <ul>
              <li>Risque de change apprécié sur la durée</li>
              <li>Frontaliers potentiellement concernés</li>
              <li>Information claire et chiffrée attendue</li>
              <li>Clauses à analyser selon le contrat</li>
              <li>Analyse individualisée indispensable</li>
            </ul>
            <p className="juri-hero-card-mention">
              Contenu pédagogique — ne constitue pas un avis juridique personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOMMAIRE */}
      <nav className="juri-sommaire" aria-label="Sommaire de la page">
        <div className="section-inner">
          <div className="juri-sommaire-inner">
            <span className="juri-sommaire-title">Sur cette page</span>
            <ol className="juri-sommaire-list">
              <li><a href="#evolutions">Évolutions récentes</a></li>
              <li><a href="#decisions-cles">Décisions clés</a></li>
              <li><a href="#frontaliers">Frontaliers</a></li>
              <li><a href="#risque-change">Risque de change</a></li>
              <li><a href="#decisions">Chronologie</a></li>
              <li><a href="#clauses">Clauses abusives</a></li>
              <li><a href="#juri-ne-signifie-pas">Ce que ça ne signifie pas</a></li>
              <li><a href="#documents">Documents utiles</a></li>
              <li><a href="#checklist">Checklist</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
        </div>
      </nav>

      {/* 3. CE QUE LA JURISPRUDENCE A CHANGÉ */}
      <section id="evolutions" className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Ce que la jurisprudence prêt CHF a changé</h2>
            <p className="juri-section-intro">
              Pendant longtemps, certains dossiers de prêts en francs suisses ont été analysés principalement au regard de la situation de l&apos;emprunteur au jour de la signature. Les décisions récentes invitent à une lecture plus large : le risque de change doit être compris dans la durée, en tenant compte du bien financé, de la monnaie de valorisation du bien, des revenus de l&apos;emprunteur et des conséquences économiques possibles.
            </p>
          </div>
          <div className="juri-risk-grid">
            {evolutionsCards.map((card) => (
              <article key={card.title} className="juri-risk-block">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DÉCISIONS CLÉS ← NOUVELLE SECTION */}
      <section id="decisions-cles" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Références jurisprudentielles</p>
            <h2>Les décisions clés à connaître sur les prêts CHF</h2>
            <p className="juri-section-intro">
              Quatre décisions structurent aujourd&apos;hui l&apos;analyse des prêts immobiliers en francs suisses. Ces décisions doivent être appréciées selon les clauses du contrat et les pièces remises à l&apos;emprunteur.
            </p>
          </div>
          <div className="juri-four-grid">
            {decisionsClés.map((d) => (
              <article key={d.ref} className="juri-revirement-card">
                <p className="juri-timeline-period" style={{ marginBottom: "8px" }}>{d.ref}</p>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "32px" }}>
            Ces décisions doivent être appréciées selon les clauses du contrat et les pièces remises à l&apos;emprunteur. Pour approfondir, consultez les{" "}
            <Link
              href="/blog/cour-cassation-9-juillet-2025-pret-chf"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              arrêts du 9 juillet 2025 sur les prêts CHF
            </Link>.
          </div>
        </div>
      </section>

      {/* 5. FRONTALIERS */}
      <section id="frontaliers" className="home-section dark-green-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header" style={{ maxWidth: "820px" }}>
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Frontaliers &amp; risque de change</p>
            <h2 style={{ color: "#ffffff" }}>
              Pourquoi les frontaliers peuvent être concernés par la jurisprudence prêt CHF
            </h2>
            <p className="juri-section-intro" style={{ color: "var(--dark-muted)" }}>
              Le fait de percevoir des revenus en francs suisses ne suffit pas nécessairement à écarter tout risque de change. Un emprunteur frontalier peut financer un bien situé en France, valorisé en euros, avec une dette libellée ou indexée sur le CHF. Le risque peut alors se manifester lors d&apos;une revente, d&apos;un remboursement anticipé ou d&apos;un changement de situation professionnelle.
            </p>
          </div>

          <div className="juri-frontalier-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div>
              <div className="juri-dark-callout">
                <p className="juri-dark-callout-label">À retenir</p>
                <p>
                  Le risque ne dépend pas seulement de la monnaie du salaire au jour de la signature. Il dépend aussi du bien financé, de la durée du prêt, du capital restant dû, des modalités de remboursement et de l&apos;évolution possible de la situation de l&apos;emprunteur.
                </p>
              </div>
              <div className="juri-section-cta">
                <Link href="/eligibilite" className="juri-cta-primary-btn">
                  Tester l&apos;éligibilité d&apos;un recours prêt CHF
                </Link>
              </div>
            </div>

            <div>
              <p className="juri-limits-title" style={{ color: "#8dc3a5" }}>Situations à surveiller</p>
              <div className="juri-frontalier-list">
                {frontaliersSituations.map((item) => (
                  <div key={item} className="juri-frontalier-list-item">
                    <span className="juri-frontalier-icon" aria-hidden="true">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FRONTALIERS — ÉVOLUTION ÉTENDUE ← NOUVELLE SECTION */}
      <section id="frontaliers-evolution" className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Prêt CHF frontalier</p>
            <h2>Prêt CHF frontalier : pourquoi la jurisprudence a évolué</h2>
          </div>
          <div className="juri-long-text">
            <p>
              Pendant longtemps, l&apos;argument avancé par certaines banques consistait à faire valoir qu&apos;un emprunteur travaillant en Suisse et percevant des revenus en francs suisses n&apos;était pas réellement exposé au risque de change. Le raisonnement semblait logique : si les revenus et les remboursements sont dans la même devise, la volatilité EUR/CHF affecte moins directement la capacité de remboursement mensuelle.
            </p>
            <p>
              Les décisions récentes invitent à dépasser cette vision limitée. L&apos;analyse du risque doit s&apos;apprécier sur toute la durée du contrat, pas uniquement au jour de la signature. Or, la situation d&apos;un emprunteur frontalier peut évoluer significativement : perte d&apos;emploi en Suisse, départ à la retraite, passage à un emploi en France, préretraite ou arrêt maladie. Dès lors que les revenus cessent d&apos;être en CHF, le rapport entre la dette liée à cette devise et les ressources disponibles peut se dégrader.
            </p>
            <p>
              Par ailleurs, le bien immobilier financé est souvent situé en France et valorisé en euros. En cas de revente ou de remboursement anticipé, l&apos;emprunteur peut se trouver dans une situation où le produit de la vente, exprimé en euros, ne suffit pas à solder une dette dont le montant en CHF s&apos;est apprécié. Ce décalage entre la valeur du bien en euros et la contrevaleur de la dette en CHF est au cœur de nombreux dossiers.
            </p>
            <p>
              Pour les prêts in fine, le risque est concentré à l&apos;échéance : la totalité du capital doit être remboursée, et si le CHF s&apos;est apprécié par rapport à l&apos;euro depuis la souscription, la somme à rembourser exprimée en euros peut avoir sensiblement augmenté.
            </p>
            <p>
              Cela ne signifie pas que tous les dossiers de frontaliers sont automatiquement fondés. Si la banque démontre avoir remis une information claire, concrète et compréhensible sur ces différents scénarios — notamment via des simulations chiffrées, une notice explicite sur les risques liés à l&apos;évolution du taux de change et une projection sur la durée du prêt — les demandes peuvent être rejetées. L&apos;enjeu est donc de vérifier la qualité de l&apos;information remise avant la signature.
            </p>
            <p>
              Pour approfondir ce sujet, consultez notre article dédié au{" "}
              <Link
                href="/blog/pret-chf-frontalier"
                style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
              >
                prêt CHF frontalier
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. RISQUE DE CHANGE */}
      <section id="risque-change" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Risque de change prêt CHF : comprendre le mécanisme</h2>
            <p className="juri-section-intro">
              Dans un prêt immobilier en francs suisses, le capital ou les remboursements peuvent dépendre du taux EUR/CHF. Lorsque le franc suisse s&apos;apprécie par rapport à l&apos;euro, la contrevaleur en euros d&apos;un montant exprimé en CHF peut devenir plus élevée. Ce phénomène peut être particulièrement sensible lors d&apos;une revente ou d&apos;un remboursement anticipé.
            </p>
          </div>
          <div className="juri-risk-grid">
            {risquePhases.map((phase) => (
              <article key={phase.title} className="juri-risk-block">
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "32px" }}>
            Ces exemples sont pédagogiques. Les effets réels dépendent du contrat, des montants, des dates et des documents disponibles.{" "}
            <Link
              href="/blog/risque-change-pret-chf"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              En savoir plus sur le risque de change d&apos;un prêt CHF
            </Link>{" "}
            ou{" "}
            <Link
              href="/simulation"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              estimer un impact financier indicatif
            </Link>.
          </div>
        </div>
      </section>

      {/* 8. CHRONOLOGIE */}
      <section id="decisions" className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Chronologie de la jurisprudence des prêts en francs suisses</h2>
            <p className="juri-section-intro">
              Les grandes étapes qui ont façonné l&apos;analyse actuelle des prêts immobiliers en francs suisses, du risque de change et des exigences d&apos;information à la charge des banques.
            </p>
          </div>
          <div className="juri-timeline">
            {timelineItems.map((item, i) => (
              <div key={i} className="juri-timeline-item">
                <div className="juri-timeline-marker">
                  <span>{i + 1}</span>
                </div>
                <div className="juri-timeline-content">
                  <p className="juri-timeline-period">{item.period}</p>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COUR DE CASSATION 9 JUILLET 2025 */}
      <section className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Revirement — Cour de cassation, 9 juillet 2025</p>
            <h2>Cour de cassation du 9 juillet 2025 : ce qu&apos;il faut retenir pour les prêts CHF</h2>
            <p className="juri-section-intro">
              Les décisions du 9 juillet 2025 ont marqué une évolution importante dans l&apos;analyse des prêts immobiliers en francs suisses. Elles rappellent que le risque de change doit être apprécié sur la durée du contrat, et non uniquement au jour de la signature.
            </p>
          </div>
          <div className="juri-alert-box">
            <strong>Références</strong>
            <p>
              Cass. 1re civ., 9 juillet 2025, n° 24-19.647 — Cass. 1re civ., 9 juillet 2025, n° 24-18.018.
              Pour approfondir, consultez{" "}
              <Link href="/blog/cour-cassation-9-juillet-2025-pret-chf" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>
                le guide sur les arrêts du 9 juillet 2025 sur les prêts CHF
              </Link>.
            </p>
          </div>
          <div className="juri-four-grid" style={{ marginTop: "36px" }}>
            {cass2025Cards.map((card) => (
              <article key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ARRÊT 18 SEPTEMBRE 2024 */}
      <section className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Arrêt du 18 septembre 2024 — n° 22-17.746</p>
            <h2>Arrêt du 18 septembre 2024 : l&apos;importance de la preuve de l&apos;information</h2>
            <p className="juri-section-intro">
              L&apos;arrêt du 18 septembre 2024 rappelle que la question n&apos;est pas seulement de savoir si le risque de change était mentionné dans le contrat. Il faut vérifier si l&apos;emprunteur a réellement été mis en mesure d&apos;en comprendre les conséquences économiques.
            </p>
          </div>
          <div className="juri-highlight-box">
            <p className="juri-highlight-label">Le point essentiel</p>
            <p className="juri-highlight-text">
              Une information générale ou abstraite peut être insuffisante si elle ne permet pas d&apos;évaluer concrètement l&apos;impact d&apos;une variation du franc suisse sur les obligations financières de l&apos;emprunteur.
            </p>
          </div>
          <div style={{ marginTop: "40px" }}>
            <p className="juri-limits-title">Éléments souvent vérifiés</p>
            <div className="juri-checklist-grid">
              {sept2024Items.map((item) => (
                <div key={item} className="juri-checklist-item">
                  <span className="juri-checklist-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLAUSES ABUSIVES */}
      <section id="clauses" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-split-layout">
            <div>
              <p className="eyebrow">Clauses abusives</p>
              <h2>Clause abusive prêt CHF : que signifie une clause réputée non écrite ?</h2>
              <p className="juri-section-intro">
                Dans certains dossiers, les clauses relatives au risque de change peuvent être analysées sous l&apos;angle des clauses abusives. Lorsqu&apos;une clause portant sur l&apos;objet principal du contrat n&apos;est pas rédigée de manière claire et compréhensible, elle peut faire l&apos;objet d&apos;un examen plus approfondi.
              </p>
              <p className="juri-section-intro" style={{ marginTop: "16px" }}>
                Pour{" "}
                <Link href="/blog/clause-abusive-pret-chf" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>
                  comprendre les clauses abusives dans un prêt CHF
                </Link>
                , les effets potentiels s&apos;apprécient toujours dossier par dossier.
              </p>
            </div>
            <div>
              <ul className="juri-effects-list">
                <li>
                  <span className="juri-check-icon" aria-hidden="true">✓</span>
                  <span>Une clause peu claire peut être contestée</span>
                </li>
                <li>
                  <span className="juri-check-icon" aria-hidden="true">✓</span>
                  <span>Elle peut être examinée au regard du déséquilibre significatif</span>
                </li>
                <li>
                  <span className="juri-check-icon" aria-hidden="true">✓</span>
                  <span>Si elle est jugée abusive, elle peut être réputée non écrite</span>
                </li>
                <li>
                  <span className="juri-check-icon" aria-hidden="true">✓</span>
                  <span>Cela peut ouvrir des discussions sur les effets du contrat</span>
                </li>
                <li>
                  <span className="juri-check-icon" aria-hidden="true">✓</span>
                  <span>Les conséquences dépendent fortement du dossier</span>
                </li>
              </ul>
              <div className="juri-prudence-box" style={{ marginTop: "20px" }}>
                Il ne faut pas en déduire que tous les prêts CHF sont annulables. L&apos;analyse dépend de la rédaction du contrat, des documents remis, des dates, des avenants et de la situation de l&apos;emprunteur.
              </div>
              <div className="juri-section-cta">
                <Link href="/eligibilite" className="primary-btn">
                  Vérifier les critères d&apos;éligibilité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CE QUE LA BANQUE DEVAIT EXPLIQUER */}
      <section className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Ce que la banque devait expliquer à l&apos;emprunteur</h2>
            <p className="juri-section-intro">
              L&apos;obligation d&apos;information ne se limite pas à indiquer l&apos;existence d&apos;un risque. L&apos;emprunteur devait pouvoir comprendre, de manière concrète, comment le mécanisme du prêt en francs suisses pouvait influencer le coût réel du crédit.
            </p>
          </div>
          <div className="juri-obligations-grid">
            {banqueObligations.map((item, i) => (
              <article key={item.title} className="juri-obligation-card">
                <span className="juri-card-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CE QUE LA JURISPRUDENCE NE SIGNIFIE PAS ← NOUVELLE SECTION */}
      <section id="juri-ne-signifie-pas" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Limites à comprendre</p>
            <h2>Ce que la jurisprudence prêt CHF ne signifie pas</h2>
            <p className="juri-section-intro">
              Le renforcement des exigences jurisprudentielles ne doit pas être interprété comme une garantie automatique. Comprendre ce que les décisions récentes ne disent pas est aussi important que de saisir ce qu&apos;elles établissent.
            </p>
          </div>
          <div className="juri-four-grid">
            {juriNeSignifiePas.map((block) => (
              <article key={block.title} className="juri-revirement-card">
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "32px" }}>
            Pour{" "}
            <Link
              href="/eligibilite"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              tester l&apos;éligibilité d&apos;un recours prêt CHF
            </Link>
            , le questionnaire permet d&apos;identifier les principaux signaux présents dans votre dossier.
          </div>
        </div>
      </section>

      {/* 14. DOCUMENTS */}
      <section id="documents" className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Documents utiles pour analyser la jurisprudence applicable à un prêt CHF</h2>
            <p className="juri-section-intro">
              L&apos;analyse de la jurisprudence ne peut pas être déconnectée des pièces du dossier. Les documents remis avant la signature sont essentiels pour vérifier la qualité de l&apos;information transmise à l&apos;emprunteur. Consultez notre guide sur les{" "}
              <Link
                href="/blog/documents-pret-chf"
                style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
              >
                documents à vérifier pour un prêt CHF
              </Link>.
            </p>
          </div>
          <div className="juri-doc-grid">
            {documentsItems.map((item) => (
              <div key={item} className="juri-doc-item">
                <span className="juri-doc-icon" aria-hidden="true">📄</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="juri-checklist-cta" style={{ marginTop: "36px" }}>
            <Link href="/eligibilite#documents" className="primary-btn">
              Voir la liste des documents à préparer
            </Link>
          </div>
        </div>
      </section>

      {/* 15. CHECKLIST CLAUSES ET DOCUMENTS ← NOUVELLE SECTION */}
      <section id="checklist" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">À relire</p>
            <h2>Checklist : clauses et documents à relire dans un prêt CHF</h2>
            <p className="juri-section-intro">
              La présence d&apos;une clause sur le risque de change ne suffit pas toujours : l&apos;enjeu est de savoir si l&apos;information permettait réellement de comprendre l&apos;impact économique possible.
            </p>
          </div>
          <div className="juri-checklist-two-col">
            <div>
              <p className="juri-limits-title">Clauses à vérifier</p>
              <div className="juri-checklist-grid">
                {checklistClauses.map((item) => (
                  <div key={item} className="juri-checklist-item">
                    <span className="juri-checklist-icon" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="juri-limits-title">Documents à vérifier</p>
              <div className="juri-checklist-grid">
                {checklistDocuments.map((item) => (
                  <div key={item} className="juri-checklist-item">
                    <span className="juri-checklist-icon" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "32px" }}>
            Pour une présentation complète, consultez le guide sur les{" "}
            <Link
              href="/blog/documents-pret-chf"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              documents à vérifier pour un prêt CHF
            </Link>.{" "}
            Pour une synthèse des décisions applicables aux particuliers, consultez le{" "}
            <Link
              href="/guides/dernieres-jurisprudences-franc-suisse-particuliers"
              style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
            >
              guide sur les dernières jurisprudences franc suisse
            </Link>.
          </div>
        </div>
      </section>

      {/* 16. TABLEAU */}
      <section className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Jurisprudence prêt CHF : situations fréquentes à vérifier</h2>
            <p className="juri-section-intro">
              Ce tableau présente les situations les plus souvent rencontrées dans les dossiers de prêts en francs suisses. Le niveau de vigilance indiqué est pédagogique et ne préjuge pas de l&apos;issue d&apos;une analyse individualisée.
            </p>
          </div>
          <div className="juri-table-wrapper">
            <table className="juri-table">
              <thead>
                <tr>
                  <th scope="col">Situation</th>
                  <th scope="col">Point juridique à examiner</th>
                  <th scope="col">Niveau de vigilance</th>
                </tr>
              </thead>
              <tbody>
                {tableauRows.map((row) => (
                  <tr key={row.situation}>
                    <td>{row.situation}</td>
                    <td>{row.point}</td>
                    <td>
                      <span
                        className={
                          row.niveau === "eleve"
                            ? "juri-niveau-eleve"
                            : row.niveau === "verifier"
                            ? "juri-niveau-verifier"
                            : "juri-niveau-analyse"
                        }
                      >
                        {row.niveauLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 17. EFFETS POSSIBLES */}
      <section className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Quels effets possibles en cas de clause contestable ?</h2>
            <p className="juri-section-intro">
              Lorsqu&apos;une clause relative au risque de change est contestée, plusieurs pistes peuvent être envisagées selon le contrat et la stratégie retenue. Les effets ne sont jamais automatiques et doivent être appréciés dossier par dossier.
            </p>
          </div>
          <div className="juri-revirement-points">
            {effetsCards.map((card) => (
              <article key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-prudence-box" style={{ marginTop: "36px" }}>
            Ces pistes sont indicatives. Elles ne constituent pas un avis juridique et ne préjugent pas de l&apos;issue d&apos;un dossier.
          </div>
        </div>
      </section>

      {/* 18. LIMITES */}
      <section className="home-section white-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <h2>Pourquoi tous les prêts CHF ne sont pas automatiquement contestables</h2>
            <p className="juri-section-intro">
              Le renforcement de la jurisprudence ne signifie pas que tous les contrats de prêt en francs suisses seront remis en cause. Certains dossiers peuvent comporter une information claire, des notices détaillées, des exemples chiffrés et une documentation suffisante.
            </p>
          </div>
          <div className="juri-four-grid">
            {limitesCards.map((card) => (
              <article key={card.title} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <div className="juri-limits-conclusion" style={{ marginTop: "36px", position: "static" }}>
            <p className="juri-limits-conclusion-label">Critère décisif</p>
            <p className="juri-limits-conclusion-text">
              Ce n&apos;est pas l&apos;existence d&apos;un prêt en francs suisses qui détermine l&apos;issue, mais la qualité de l&apos;information remise à l&apos;emprunteur et la capacité de la banque à prouver que celui-ci avait réellement compris le risque auquel il s&apos;exposait.
            </p>
          </div>
        </div>
      </section>

      {/* 19. QUE FAIRE */}
      <section className="home-section dark-green-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header" style={{ maxWidth: "820px" }}>
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Première étape</p>
            <h2 style={{ color: "#ffffff" }}>Que faire si votre prêt CHF semble concerné ?</h2>
            <p className="juri-section-intro" style={{ color: "var(--dark-muted)" }}>
              Une démarche structurée permet d&apos;identifier les éléments essentiels avant d&apos;envisager toute analyse individualisée.
            </p>
          </div>
          <div className="juri-obligations-grid" style={{ marginBottom: "44px" }}>
            {etapesAction.map((step) => (
              <article key={step.num} className="juri-obligation-card">
                <span className="juri-card-num">{step.num}</span>
                <h3 style={{ color: "var(--text)" }}>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link href="/eligibilite" className="juri-cta-primary-btn">
              Commencer par le test d&apos;éligibilité
            </Link>
            <Link href="/simulation" className="juri-cta-secondary-btn">
              Faire une estimation indicative
            </Link>
          </div>
        </div>
      </section>

      {/* 20. FAQ */}
      <section id="faq" className="home-section juri-soft-section">
        <div className="section-inner juri-section-inner">
          <div className="juri-section-header">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>FAQ jurisprudence prêt CHF</h2>
          </div>
          <div className="juri-faq">
            {faq.map((item) => (
              <details key={item.q} className="juri-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="juri-legal-mention">
            Les informations présentées ont une vocation pédagogique et ne constituent pas un avis juridique personnalisé.{" "}
            <Link href="/blog" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>
              Consulter les ressources sur les prêts CHF
            </Link>
          </p>
        </div>
      </section>

      {/* 21. CTA FINAL */}
      <section className="home-section dark-green-section">
        <div className="section-inner juri-cta-inner">
          <p className="eyebrow">Première vérification</p>
          <h2>Votre prêt CHF mérite-t-il une première vérification ?</h2>
          <p className="juri-frontalier-text">
            Si votre prêt est lié au franc suisse, si le bien financé est situé en France ou si l&apos;information sur le risque de change vous semble insuffisante, une première lecture peut aider à identifier les clauses et documents à examiner. Cette démarche est indicative et ne constitue pas un avis juridique personnalisé.
          </p>
          <div className="hero-actions" style={{ marginTop: "36px" }}>
            <Link href="/eligibilite" className="juri-cta-primary-btn">
              Tester mon éligibilité
            </Link>
            <Link href="/simulation" className="juri-cta-secondary-btn">
              Faire une simulation indicative
            </Link>
            <Link href="/blog" className="juri-cta-secondary-btn">
              Lire les ressources
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${SITE_URL}/jurisprudence`,
                name: "Jurisprudence prêt CHF : recours, risque de change et clauses abusives",
                description:
                  "Guide pédagogique sur la jurisprudence des prêts immobiliers en francs suisses, le risque de change, les clauses abusives et les documents à vérifier.",
                url: `${SITE_URL}/jurisprudence`,
                inLanguage: "fr-FR",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Jurisprudence",
                    item: `${SITE_URL}/jurisprudence`,
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
          }),
        }}
      />
    </main>
  );
}
