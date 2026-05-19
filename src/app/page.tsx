import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt CHF : recours, risque de change et simulation | Prêts CHF Info",
  description:
    "Comprenez les prêts immobiliers en francs suisses, le risque de change, la jurisprudence récente et les critères à vérifier. Test d'éligibilité gratuit et simulation indicative.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Prêt CHF : recours, risque de change et simulation | Prêts CHF Info",
    description:
      "Guides, test d'éligibilité et simulation indicative pour les prêts immobiliers en francs suisses.",
    url: `${SITE_URL}/`,
    siteName: "Prêts CHF Info",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt CHF : recours, risque de change et simulation | Prêts CHF Info",
    description:
      "Comprenez les prêts immobiliers en francs suisses, le risque de change, la jurisprudence récente et les critères à vérifier.",
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
  {
    q: "Le site Prêts CHF Info est-il officiel ?",
    a: "Non. Prêts CHF Info est un site indépendant d'information pédagogique. Il n'est affilié à aucune administration publique, aucun cabinet d'avocats ni aucun organisme gouvernemental. Les informations présentées ont une vocation pédagogique et ne constituent pas un avis juridique personnalisé.",
  },
];

const loanTypes = [
  {
    title: "Prêt libellé en CHF",
    text: "Le capital emprunté est exprimé en francs suisses. Les remboursements sont convertis en euros au taux du jour de chaque échéance, ce qui peut faire varier le montant effectivement prélevé selon l'évolution du taux EUR/CHF.",
  },
  {
    title: "Prêt indexé CHF",
    text: "Le capital peut être exprimé en euros mais évolue en fonction de l'indice CHF. Une appréciation du franc suisse peut augmenter le capital restant dû en valeur relative, même si les remboursements sont effectués en euros.",
  },
  {
    title: "Prêt remboursable en devise",
    text: "Les mensualités sont payées en francs suisses ou converties depuis des revenus en CHF. Ce mécanisme suppose une cohérence entre les revenus de l'emprunteur et la devise du prêt, qui peut être remise en cause en cas de changement de situation.",
  },
];

const concernedProfiles = [
  {
    title: "Frontalier suisse",
    text: "Vous travaillez ou travailliez en Suisse et avez souscrit un prêt pour financer un bien situé en France. Le fait de percevoir des revenus en CHF ne suffit pas à exclure tout risque sur la durée.",
  },
  {
    title: "Emprunteur payé en euros",
    text: "Vos revenus sont en euros mais votre prêt est lié au franc suisse. Le risque de change est structurellement présent à chaque remboursement, revente ou remboursement anticipé.",
  },
  {
    title: "Bien immobilier en France",
    text: "Votre bien est situé en France et valorisé en euros. Si votre dette est liée au CHF, une évolution défavorable du taux EUR/CHF peut créer un déséquilibre entre la valeur du bien et le capital restant dû.",
  },
  {
    title: "Prêt déjà remboursé",
    text: "Un prêt remboursé n'est pas nécessairement hors d'atteinte d'une vérification. Selon la prescription applicable, certaines situations peuvent encore faire l'objet d'une analyse.",
  },
  {
    title: "Revente ou remboursement anticipé",
    text: "Lors d'une revente ou d'un remboursement anticipé, le capital restant dû est converti au taux du moment. Si ce taux est défavorable, le coût réel du prêt peut dépasser les estimations initiales.",
  },
  {
    title: "Perte ou modification des revenus en CHF",
    text: "Si vos revenus en francs suisses ont diminué ou cessé, le mécanisme du prêt peut peser différemment sur votre budget. Cette évolution peut être pertinente dans l'analyse du dossier.",
  },
];

const guidedSteps = [
  {
    num: "1",
    title: "Identifier la nature du prêt",
    text: "Vérifier si le contrat est libellé, remboursable ou indexé sur le CHF. Cette information figure généralement dans les conditions particulières ou l'offre de prêt.",
  },
  {
    num: "2",
    title: "Tester les critères principaux",
    text: "Utiliser le test d'éligibilité pour repérer les premiers signaux à examiner. Trois questions permettent d'orienter la première lecture en moins d'une minute.",
  },
  {
    num: "3",
    title: "Estimer l'impact économique",
    text: "Réaliser une simulation indicative pour visualiser un ordre de grandeur. Le résultat est présenté sous forme de fourchette, à compléter par l'analyse du contrat.",
  },
  {
    num: "4",
    title: "Lire la jurisprudence",
    text: "Comprendre les critères retenus par les décisions récentes. L'enjeu porte souvent sur la clarté de l'information remise à l'emprunteur avant la signature.",
  },
  {
    num: "5",
    title: "Préparer les documents",
    text: "Réunir l'offre de prêt, les notices, simulations, avenants et échanges avec la banque. Ces pièces permettent de vérifier si le risque de change a été expliqué de manière concrète et compréhensible.",
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

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prêts CHF Info",
  url: SITE_URL,
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prêts CHF Info",
  url: SITE_URL,
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@lexdevise.com",
    contactType: "customer support",
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prêt CHF : recours, risque de change et simulation | Prêts CHF Info",
  description:
    "Comprenez les prêts immobiliers en francs suisses, le risque de change, la jurisprudence récente et les critères à vérifier. Test d'éligibilité gratuit et simulation indicative.",
  inLanguage: "fr-FR",
  url: `${SITE_URL}/`,
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
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
                Prêts CHF Info est un site indépendant d&apos;information pédagogique.
                Il n&apos;est pas affilié à une administration publique.
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

        {/* ── 2. QU'EST-CE QU'UN PRÊT CHF ? ────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <p className="eyebrow">Définition</p>
              <h2>Qu&apos;est-ce qu&apos;un prêt immobilier en francs suisses ?</h2>
            </div>
            <div className="juri-long-text">
              <p>
                Un <strong>prêt immobilier en francs suisses</strong> — aussi appelé prêt CHF — est un crédit dans lequel
                la devise suisse joue un rôle central dans la structure du contrat. Le capital emprunté, les remboursements
                ou l&apos;indexation peuvent être exprimés en CHF, ce qui soumet l&apos;emprunteur à l&apos;évolution du
                taux de change euro / franc suisse tout au long de la vie du prêt.
              </p>
              <p>
                Ces prêts ont été principalement commercialisés entre les années 2000 et 2010 par plusieurs établissements
                bancaires français, souvent à destination d&apos;emprunteurs frontaliers travaillant en Suisse et percevant
                des revenus en CHF. L&apos;argument commercial reposait sur des taux d&apos;intérêt apparemment plus
                attractifs que ceux des crédits en euros. Mais la structure même de ces prêts comportait un{" "}
                <strong>risque de change structurel</strong> : si le taux EUR/CHF évoluait défavorablement, la contrevaleur
                en euros du capital ou des mensualités pouvait augmenter.
              </p>
              <p>
                Le risque s&apos;est concrétisé pour de nombreux emprunteurs à partir de 2011, lorsque le franc suisse
                s&apos;est fortement apprécié. Des contrats souscrits à un taux de 1,50 ou 1,60 EUR/CHF ont vu leur
                capital restant dû augmenter mécaniquement en valeur relative. Ce décalage peut être particulièrement
                marqué lors d&apos;une revente du bien, d&apos;un remboursement anticipé, ou lorsque les revenus en CHF
                cessent ou diminuent.
              </p>
              <p>
                L&apos;analyse juridique porte notamment sur la <strong>qualité de l&apos;information délivrée avant la
                signature</strong> : l&apos;emprunteur a-t-il reçu des explications claires, concrètes et compréhensibles
                sur le mécanisme de change ? Des simulations chiffrées ont-elles été remises ? Les notices d&apos;information
                étaient-elles suffisamment précises ? Ces questions sont au cœur de la jurisprudence récente sur les{" "}
                <strong>prêts CHF clause abusive</strong>.
              </p>
              <p>
                Il existe plusieurs structures de prêts CHF. La nature exacte du contrat — libellé en CHF, indexé CHF ou
                remboursable en devise — conditionne l&apos;analyse et les risques identifiables. Ces trois structures sont
                présentées ci-dessous.
              </p>
            </div>
            <div className="home-cards-grid" style={{ marginTop: "32px" }}>
              {loanTypes.map((type) => (
                <article key={type.title} className="home-card">
                  <h3>{type.title}</h3>
                  <p>{type.text}</p>
                </article>
              ))}
            </div>
            <div className="home-section-cta">
              <Link href="/jurisprudence" className="secondary-btn">
                Comprendre la jurisprudence prêt CHF
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3. POURQUOI LES PRÊTS CHF POSENT PROBLÈME ────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Pourquoi les prêts immobiliers en francs suisses peuvent poser
                problème ?
              </h2>
              <p>
                Un prêt immobilier en francs suisses peut sembler attractif au
                moment de la souscription, notamment lorsque le taux d&apos;intérêt
                paraît favorable. Mais lorsque le bien financé est situé en
                France et valorisé en euros, l&apos;évolution du taux EUR/CHF peut
                créer un décalage entre la valeur du bien et le capital restant
                dû.
              </p>
            </div>
            <div className="home-cards-grid">
              <article className="home-card">
                <h3>Une dette liée au franc suisse</h3>
                <p>
                  Le capital ou les remboursements peuvent dépendre du CHF. En
                  cas d&apos;évolution défavorable du taux de change, la
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
                  L&apos;analyse porte souvent sur la clarté des explications remises
                  avant la signature : notices, simulations, clauses de risque
                  de change et exemples chiffrés.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── 4. ÊTES-VOUS CONCERNÉ ? ───────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Êtes-vous concerné par un recours prêt CHF ?</h2>
              <p>
                Certaines situations peuvent justifier une première
                vérification, sans préjuger de l&apos;existence d&apos;un recours. Le{" "}
                <Link href="/eligibilite">test d&apos;éligibilité</Link> permet
                d&apos;identifier rapidement les principaux signaux à examiner.
              </p>
            </div>
            <div className="home-cards-grid">
              {concernedProfiles.map((profile) => (
                <article key={profile.title} className="home-card">
                  <h3>{profile.title}</h3>
                  <p>{profile.text}</p>
                </article>
              ))}
            </div>
            <div className="home-section-cta">
              <Link href="/eligibilite" className="primary-btn">
                Faire le test en 3 questions
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. COMPRENDRE LE RISQUE DE CHANGE ────────────────────────── */}
        <section className="home-section dark-green-section">
          <div className="section-inner home-risk-layout">
            <div>
              <p className="eyebrow">Risque de change</p>
              <h2>Risque de change prêt CHF : ce qu&apos;il faut comprendre</h2>
              <p>
                Le risque de change correspond à l&apos;impact de la variation entre
                l&apos;euro et le franc suisse. Dans un prêt immobilier en CHF, ce
                risque peut apparaître lors du remboursement, d&apos;une revente,
                d&apos;un remboursement anticipé ou lorsque la situation de
                l&apos;emprunteur évolue.
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
              <p style={{ marginTop: "16px" }}>
                <Link
                  href="/blog/risque-change-pret-chf"
                  style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline" }}
                >
                  Lire : comprendre le risque de change prêt CHF &rarr;
                </Link>
              </p>
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

        {/* ── 6. JURISPRUDENCE RÉCENTE ──────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Jurisprudence prêt CHF : pourquoi les décisions récentes sont
                importantes
              </h2>
              <p>
                Les décisions récentes ont renforcé l&apos;attention portée à
                l&apos;information donnée aux emprunteurs. L&apos;enjeu n&apos;est pas
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
                  La banque devait permettre à l&apos;emprunteur de comprendre le
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
                  L&apos;offre de prêt, les notices, les simulations et les échanges
                  avec la banque sont essentiels pour apprécier la situation.
                </p>
              </article>
            </div>

            <div className="juri-long-text" style={{ marginTop: "40px" }}>
              <p>
                La jurisprudence relative aux <strong>prêts CHF</strong> s&apos;est progressivement structurée autour
                d&apos;un principe central : l&apos;emprunteur doit avoir été mis en mesure de comprendre concrètement
                le fonctionnement du mécanisme de change avant de s&apos;engager. Cela signifie que la simple présence
                d&apos;une clause mentionnant un risque de change ne suffit pas si elle ne s&apos;accompagne pas
                d&apos;explications claires, de simulations chiffrées et d&apos;exemples concrets permettant de mesurer
                l&apos;ampleur possible du risque.
              </p>
              <p>
                Les tribunaux analysent notamment si la banque a remis une notice d&apos;information sur le risque de
                change, si des simulations dans différentes hypothèses de taux EUR/CHF ont été communiquées, si les
                clauses relatives à la devise étaient rédigées de manière compréhensible, et si l&apos;emprunteur a pu
                prendre la mesure de l&apos;impact possible sur ses remboursements ou sur le capital en cas de revente.
              </p>
              <p>
                La <strong>Cour de cassation</strong> a rendu plusieurs décisions importantes sur ces questions. Sa{" "}
                <Link
                  href="/blog/cour-cassation-9-juillet-2025-pret-chf"
                  style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
                >
                  décision du 9 juillet 2025
                </Link>{" "}
                apporte des précisions utiles sur les critères d&apos;appréciation de l&apos;information délivrée aux
                emprunteurs et sur les conséquences pouvant être tirées d&apos;un manquement à l&apos;obligation
                d&apos;information. Chaque dossier reste toutefois apprécié au cas par cas, en fonction des pièces
                disponibles et de la structure du contrat.
              </p>
              <p>
                Il est important de noter que la jurisprudence ne signifie pas que tous les recours aboutissent ni que
                tous les prêts CHF sont automatiquement contestables. L&apos;issue dépend du contrat, des documents
                remis, de la situation de l&apos;emprunteur et des pièces réunies. Une analyse spécifique du dossier
                est indispensable avant toute démarche.
              </p>
            </div>
            <div className="home-section-cta" style={{ marginTop: "24px" }}>
              <Link href="/jurisprudence" className="secondary-btn">
                Comprendre la jurisprudence prêt CHF
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. LES 3 CRITÈRES ────────────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Les 3 critères essentiels à vérifier dans un prêt CHF</h2>
              <p>
                Une première analyse peut commencer par trois questions simples.
                Elles permettent d&apos;identifier si le dossier mérite une
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
                  généralement dans l&apos;offre de prêt ou les conditions
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
                <h3>L&apos;information sur le risque était-elle claire ?</h3>
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

        {/* ── 8. PARCOURS GUIDÉ ─────────────────────────────────────────── */}
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

        {/* ── 9. SIMULATION INDICATIVE ──────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-sim-layout">
              <div>
                <h2 className="home-sim-h2">
                  Simulateur prêt CHF : obtenir une première estimation
                  indicative
                </h2>
                <p className="home-sim-intro">
                  Le simulateur permet d&apos;obtenir une fourchette indicative à
                  partir des informations principales du prêt. Il ne constitue
                  pas une évaluation juridique ou bancaire définitive, mais
                  peut aider à visualiser un ordre de grandeur avant d&apos;analyser
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
                    À confirmer par l&apos;analyse du contrat
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
                  les conditions pour obtenir une fourchette d&apos;estimation.
                </p>
                <Link href="/simulation" className="home-sim-visual-link">
                  Accéder au simulateur &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. DOCUMENTS UTILES ──────────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>
                Documents utiles pour analyser un prêt immobilier en francs
                suisses
              </h2>
              <p>
                L&apos;analyse d&apos;un prêt CHF dépend fortement des pièces disponibles.
                Les documents remis avant la signature permettent de vérifier si
                l&apos;information sur le risque de change a été communiquée de manière
                claire et compréhensible. Consultez le{" "}
                <Link
                  href="/blog/documents-pret-chf"
                  style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}
                >
                  guide sur les documents à vérifier pour un prêt CHF
                </Link>
                .
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
              <Link href="/blog/documents-pret-chf" className="secondary-btn">
                Voir les documents utiles pour un prêt CHF
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. BLOG / RESSOURCES ─────────────────────────────────────── */}
        <section className="home-section explanation-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <h2>Guides et ressources sur les prêts CHF</h2>
            </div>
            <div className="blog-grid">
              <Link href="/blog/pret-chf-frontalier" className="blog-card">
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
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
                </div>
              </Link>

              <Link href="/blog/risque-change-pret-chf" className="blog-card">
                <span className="blog-card-cat">Risque de change</span>
                <h3 className="blog-card-title">
                  Risque de change prêt CHF : comprendre l&apos;impact EUR/CHF
                </h3>
                <p className="blog-card-desc">
                  Un guide simple pour comprendre comment le franc suisse peut
                  influencer la contrevaleur d&apos;un prêt.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">5 min de lecture</span>
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
                </div>
              </Link>

              <Link href="/blog/clause-abusive-pret-chf" className="blog-card">
                <span className="blog-card-cat">Clauses contractuelles</span>
                <h3 className="blog-card-title">
                  Clause abusive prêt CHF : ce qu&apos;il faut vérifier
                </h3>
                <p className="blog-card-desc">
                  Les clauses liées à la devise, au remboursement et au risque
                  de change peuvent être déterminantes.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">7 min de lecture</span>
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
                </div>
              </Link>

              <Link href="/blog/documents-pret-chf" className="blog-card">
                <span className="blog-card-cat">Documents</span>
                <h3 className="blog-card-title">
                  Documents à vérifier pour un prêt CHF
                </h3>
                <p className="blog-card-desc">
                  Quels documents réunir et comment lire les pièces bancaires
                  pour analyser un prêt immobilier en francs suisses.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">5 min de lecture</span>
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
                </div>
              </Link>

              <Link href="/blog/pret-chf-deja-rembourse" className="blog-card">
                <span className="blog-card-cat">Remboursement</span>
                <h3 className="blog-card-title">
                  Prêt CHF déjà remboursé : est-il encore possible d&apos;agir ?
                </h3>
                <p className="blog-card-desc">
                  La prescription et les conditions d&apos;une éventuelle vérification
                  pour les prêts CHF déjà soldés.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">6 min de lecture</span>
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
                </div>
              </Link>

              <Link
                href="/blog/cour-cassation-9-juillet-2025-pret-chf"
                className="blog-card"
              >
                <span className="blog-card-cat">Jurisprudence</span>
                <h3 className="blog-card-title">
                  Cour de cassation 9 juillet 2025 : ce que la décision change
                </h3>
                <p className="blog-card-desc">
                  Analyse de la décision récente et ses implications pour les
                  emprunteurs ayant souscrit un prêt CHF.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">8 min de lecture</span>
                  <span className="blog-card-link">Lire l&apos;article &rarr;</span>
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

        {/* ── 12. GUIDES PRATIQUES ──────────────────────────────────────── */}
        <section className="home-section white-section">
          <div className="section-inner home-section-pad">
            <div className="home-section-header">
              <p className="eyebrow">Guides pratiques</p>
              <h2>Guides pratiques sur les prêts CHF</h2>
              <p>
                Approfondissez les situations fréquentes liées aux prêts
                immobiliers en francs suisses : frontaliers, risque de change,
                contentieux bancaire, banque prêteuse, jurisprudence et
                documents à vérifier.
              </p>
            </div>
            <div className="blog-grid">
              <Link href="/guides/pret-en-devise-chf-credit-mutuel" className="blog-card">
                <span className="blog-card-cat">Banques prêteuses</span>
                <h3 className="blog-card-title">Prêt en devise CHF Crédit Mutuel</h3>
                <p className="blog-card-desc">
                  Les points à vérifier lorsqu&apos;un prêt immobilier en devise
                  CHF a été souscrit auprès du Crédit Mutuel : clauses,
                  documents et risque de change.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">8 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>

              <Link href="/guides/pret-toxique-franc-suisse" className="blog-card">
                <span className="blog-card-cat">Situations particulières</span>
                <h3 className="blog-card-title">Prêt toxique en francs suisses</h3>
                <p className="blog-card-desc">
                  Comprendre pourquoi certains prêts immobiliers en francs
                  suisses sont perçus comme toxiques : risque de change,
                  capital restant dû et clauses.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">8 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>

              <Link href="/guides/contentieux-bancaire-pret-chf" className="blog-card">
                <span className="blog-card-cat">Contentieux</span>
                <h3 className="blog-card-title">Contentieux bancaire prêt CHF</h3>
                <p className="blog-card-desc">
                  Les principales causes de litige liées aux prêts immobiliers
                  en francs suisses : risque de change, information
                  précontractuelle, clauses et documents.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">8 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>

              <Link href="/guides/pret-frontalier-suisse-chf" className="blog-card">
                <span className="blog-card-cat">Frontaliers</span>
                <h3 className="blog-card-title">Prêt frontalier Suisse et CHF</h3>
                <p className="blog-card-desc">
                  Les points à vérifier lorsqu&apos;un frontalier suisse a souscrit
                  un prêt immobilier lié au franc suisse : risque de change,
                  clauses et documents.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">7 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>

              <Link href="/guides/dernieres-jurisprudences-franc-suisse-particuliers" className="blog-card">
                <span className="blog-card-cat">Jurisprudence</span>
                <h3 className="blog-card-title">Dernières jurisprudences franc suisse pour particuliers</h3>
                <p className="blog-card-desc">
                  Synthèse des décisions récentes — Cour de cassation 2024 et
                  2025, CJUE — concernant les particuliers ayant souscrit un
                  prêt CHF en France.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">7 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>

              <Link href="/guides/c-est-quoi-un-contentieux-bancaire" className="blog-card">
                <span className="blog-card-cat">Contentieux</span>
                <h3 className="blog-card-title">C&apos;est quoi un contentieux bancaire ?</h3>
                <p className="blog-card-desc">
                  Définition simple d&apos;un contentieux bancaire, ses causes
                  fréquentes, ses conséquences possibles et le lien avec les
                  prêts immobiliers en francs suisses.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-time">6 min de lecture</span>
                  <span className="blog-card-link">Lire le guide →</span>
                </div>
              </Link>
            </div>
            <div className="home-section-cta">
              <Link href="/guides" className="secondary-btn">
                Voir tous les guides
              </Link>
            </div>
          </div>
        </section>

        {/* ── 13. FAQ ───────────────────────────────────────────────────── */}
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

        {/* ── 13. CTA FINAL / FORMULAIRE ────────────────────────────────── */}
        <section className="home-section contact-section">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Première vérification</p>
              <h2>Faites identifier les éléments utiles de votre dossier</h2>
              <p>
                Prêt en cours ou déjà remboursé, frontalier ou non : quelques
                informations permettent d&apos;orienter une première lecture et de
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
                Elle permet uniquement d&apos;orienter les pièces à examiner.
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
