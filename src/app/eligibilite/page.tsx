import type { Metadata } from "next";
import Link from "next/link";
import EligibilityQuiz from "./EligibilityQuiz";

// TODO: Définir NEXT_PUBLIC_SITE_URL dans .env.local (ex: https://pretschfinfo.fr)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Éligibilité recours prêt CHF : test en 3 questions",
  description:
    "Testez votre éligibilité à un recours sur un prêt immobilier en francs suisses. 3 questions pour identifier les critères liés au risque de change, au bien financé en France et à l'information bancaire.",
  alternates: {
    canonical: `${SITE_URL}/eligibilite`,
  },
  openGraph: {
    title: "Éligibilité recours prêt CHF : test en 3 questions",
    description:
      "Identifiez en 3 questions si votre prêt immobilier en francs suisses mérite une première vérification.",
    url: `${SITE_URL}/eligibilite`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Éligibilité recours prêt CHF : test en 3 questions",
    description:
      "Identifiez en 3 questions si votre prêt immobilier en francs suisses mérite une première vérification.",
  },
};

const FAQ = [
  {
    q: "Ce test suffit-il à confirmer un recours ?",
    a: "Non. Ce test est indicatif. Il permet seulement d'identifier des signaux pouvant justifier une première analyse du contrat, des notices et des documents remis par la banque.",
  },
  {
    q: "Comment savoir si mon prêt est indexé sur le CHF ?",
    a: "L'offre de prêt, les conditions particulières, les tableaux d'amortissement et les clauses relatives à la devise permettent généralement de vérifier si le crédit est libellé, remboursable ou indexé sur le franc suisse.",
  },
  {
    q: "Pourquoi le bien situé en France est-il important ?",
    a: "Un bien situé en France est généralement valorisé en euros, alors que le capital restant dû peut dépendre du franc suisse. Ce décalage peut rendre le risque de change plus sensible.",
  },
  {
    q: "Un frontalier payé en francs suisses peut-il être concerné ?",
    a: "Oui, potentiellement. Le fait de percevoir des revenus en CHF ne suffit pas toujours à exclure le risque, notamment lorsque le bien financé est situé en France ou lorsque la situation professionnelle évolue.",
  },
  {
    q: "Pourquoi les explications chiffrées sont-elles importantes ?",
    a: "Elles peuvent aider à vérifier si l'emprunteur a été mis en mesure de comprendre concrètement l'impact d'une variation du taux de change sur le coût du crédit ou le capital restant dû.",
  },
  {
    q: "Un prêt CHF déjà remboursé peut-il être analysé ?",
    a: "Oui, dans certains cas. Il faut notamment examiner les dates, les conditions du remboursement, les documents contractuels et les délais applicables.",
  },
  {
    q: "Un résultat positif garantit-il une action gagnante ?",
    a: "Non. Un résultat positif signifie seulement que plusieurs critères justifient une analyse plus complète. L'issue dépend des pièces disponibles, de la rédaction du contrat et de la situation de l'emprunteur.",
  },
  {
    q: "Quels documents dois-je préparer avant une analyse ?",
    a: "Les documents les plus utiles sont l'offre de prêt, les conditions générales, les conditions particulières, les notices d'information, les simulations chiffrées, les avenants et les échanges avec la banque.",
  },
  {
    q: "Le test fonctionne-t-il pour un prêt in fine ?",
    a: "Oui, à titre indicatif. Un prêt in fine peut nécessiter une vérification particulière, car le capital est souvent remboursé à l'échéance, ce qui peut rendre le risque de change plus sensible.",
  },
  {
    q: "Le test remplace-t-il une analyse juridique ?",
    a: "Non. Le test est un outil pédagogique. L'analyse dépend du contrat, des documents remis, des délais applicables et de la situation personnelle de l'emprunteur.",
  },
];

const DOCS = [
  "Offre de prêt",
  "Conditions particulières",
  "Conditions générales",
  "Notice d'information",
  "Simulations chiffrées remises par la banque",
  "Tableaux d'amortissement",
  "Avenants ou renégociations",
  "Courriers et emails avec la banque",
  "Documents de revente ou de remboursement anticipé",
  "Justificatifs de revenus au moment de la souscription",
  "Décompte de remboursement anticipé",
  "Relevés ou courriers relatifs au capital restant dû",
];

const SITUATIONS_EXAMPLES = [
  {
    titre: "Frontalier payé en CHF, bien acheté en France",
    texte:
      "Vous avez emprunté en francs suisses pour financer un bien situé en France. Même si vos revenus étaient en CHF au départ, le risque peut apparaître lors d'une revente, d'un remboursement anticipé ou d'un changement de situation professionnelle.",
  },
  {
    titre: "Revente avec capital restant dû élevé",
    texte:
      "Vous envisagez de vendre le bien ou vous l'avez déjà revendu, mais le capital restant dû paraît élevé en euros. Cela peut justifier de vérifier les clauses de change et les informations remises par la banque.",
  },
  {
    titre: "Absence de simulation chiffrée",
    texte:
      "Vous ne retrouvez pas d'exemple chiffré montrant l'effet d'une hausse du franc suisse. L'analyse peut alors porter sur la transparence de l'information remise avant la signature.",
  },
  {
    titre: "Prêt déjà remboursé ou renégocié",
    texte:
      "Un prêt soldé ou renégocié peut parfois mériter une vérification selon les dates, les documents disponibles, les avenants et les conditions de remboursement.",
  },
];

const SITUATIONS_TABLE = [
  {
    situation: "Prêt en CHF + bien situé en France + absence d'explications chiffrées",
    niveau: "Fort",
    niveauClass: "elig-niveau-fort",
    pourquoi: "Les principaux signaux du test sont réunis.",
  },
  {
    situation: "Prêt en CHF + bien situé en France + documentation bancaire claire",
    niveau: "À vérifier",
    niveauClass: "elig-niveau-verif",
    pourquoi: "La qualité exacte des notices, simulations et clauses reste déterminante.",
  },
  {
    situation: "Frontalier payé en CHF au moment de la signature",
    niveau: "À vérifier",
    niveauClass: "elig-niveau-verif",
    pourquoi: "La perception de revenus en CHF n'exclut pas nécessairement le risque sur toute la durée du prêt.",
  },
  {
    situation: "Prêt en euros sans indexation sur le CHF",
    niveau: "Faible",
    niveauClass: "elig-niveau-faible",
    pourquoi: "Le risque de change semble absent, sous réserve de lecture du contrat.",
  },
  {
    situation: "Prêt déjà remboursé ou renégocié",
    niveau: "À vérifier",
    niveauClass: "elig-niveau-verif",
    pourquoi: "Les dates, avenants, remboursements et délais applicables doivent être examinés.",
  },
];

const ERRORS = [
  {
    titre: "Penser qu'un frontalier n'est jamais concerné",
    texte:
      "Le fait d'avoir perçu des revenus en CHF ne suffit pas toujours à écarter toute exposition au risque de change.",
  },
  {
    titre: "Se concentrer uniquement sur le taux d'intérêt",
    texte:
      "Un taux attractif ne permet pas à lui seul de comprendre le coût réel d'un prêt en devise.",
  },
  {
    titre: "Ne pas rechercher les notices",
    texte:
      "Les notices, simulations et annexes peuvent être déterminantes pour apprécier l'information reçue.",
  },
  {
    titre: "Confondre montant initial et capital restant dû",
    texte:
      "L'évolution du franc suisse peut modifier la contrevaleur en euros d'un montant exprimé en CHF.",
  },
  {
    titre: "Écarter trop vite un prêt déjà remboursé",
    texte:
      "Un prêt remboursé, renégocié ou soldé peut parfois mériter une vérification selon les dates et les documents disponibles.",
  },
  {
    titre: "Supposer qu'une clause suffit à informer",
    texte:
      "Une clause peut être présente dans le contrat sans pour autant permettre une compréhension concrète du risque économique.",
  },
];

const STEPS = [
  {
    num: "1",
    titre: "Identifier la devise et les clauses du prêt",
    texte: "Vérifier si le crédit est libellé, remboursable ou indexé sur le franc suisse.",
  },
  {
    num: "2",
    titre: "Rassembler les documents bancaires",
    texte: "Réunir l'offre de prêt, les conditions générales, les notices, les simulations et les avenants.",
  },
  {
    num: "3",
    titre: "Estimer l'impact économique",
    texte: "Utiliser une simulation indicative pour apprécier l'ordre de grandeur de l'exposition au taux EUR/CHF.",
  },
  {
    num: "4",
    titre: "Comparer avec les critères jurisprudentiels",
    texte: "Vérifier si l'information remise permettait de comprendre concrètement le risque de change sur la durée.",
  },
  {
    num: "5",
    titre: "Demander une première lecture si nécessaire",
    texte: "Si plusieurs critères sont réunis, une première vérification peut aider à déterminer les pistes envisageables.",
  },
];

export default function EligibilitePage() {
  return (
    <main className="elig-page">
      {/* ── HERO ── */}
      <section className="elig-hero">
        <div className="section-inner">
          <div className="elig-hero-inner">
            <div className="elig-badges">
              <span className="elig-badge">Analyse indicative</span>
              <span className="elig-badge">Prêts CHF frontaliers</span>
              <span className="elig-badge">Risque de change</span>
            </div>
            <h1>
              Éligibilité recours prêt CHF : êtes-vous concerné&nbsp;?
            </h1>
            <p className="elig-hero-subtitle">
              Répondez à 3 questions clés pour savoir si votre prêt immobilier
              en francs suisses mérite une première vérification. Ce test est
              indicatif et ne remplace pas l&apos;analyse de votre contrat, des
              documents remis par la banque et de votre situation personnelle.
            </p>
            <p className="elig-hero-note">
              Les informations présentées ont une vocation pédagogique et ne
              constituent pas un avis juridique personnalisé.
            </p>
            <div className="elig-hero-ctas">
              <a href="#questionnaire" className="primary-btn">
                Commencer le test
              </a>
              <a href="#criteres" className="secondary-btn">
                Comprendre les critères
              </a>
            </div>
            <p className="elig-hero-microcopy">Durée estimée&nbsp;: moins d&apos;une minute.</p>
          </div>
        </div>
      </section>

      {/* ── SOMMAIRE ── */}
      <nav className="elig-sommaire" aria-label="Sommaire de la page">
        <div className="section-inner">
          <div className="elig-sommaire-inner">
            <span className="elig-sommaire-title">Sur cette page</span>
            <ul className="elig-sommaire-list">
              <li><a href="#questionnaire" className="elig-sommaire-cta">Faire le test</a></li>
              <li><a href="#criteres">Comprendre les critères</a></li>
              <li><a href="#profils">Profils concernés</a></li>
              <li><a href="#documents">Documents à vérifier</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── À QUOI SERT CE TEST ── */}
      <section className="elig-intro-section">
        <div className="section-inner">
          <div className="elig-intro-inner">
            <p className="eyebrow">Test d&apos;éligibilité indicatif</p>
            <h2>Pourquoi faire un test d&apos;éligibilité recours prêt CHF&nbsp;?</h2>
            <p className="elig-intro-text">
              Un prêt immobilier en francs suisses peut présenter des enjeux
              particuliers lorsque le bien financé est situé en France ou
              lorsque le contrat prévoit un mécanisme lié au CHF. Le test
              d&apos;éligibilité permet d&apos;identifier rapidement les principaux
              signaux à vérifier avant d&apos;analyser plus précisément l&apos;offre de
              prêt, les notices, les simulations et les clauses relatives au{" "}
              <Link href="/blog/risque-change-pret-chf">
                risque de change d&apos;un prêt CHF
              </Link>.
            </p>
            <div className="elig-cards-grid">
              <article className="elig-info-card">
                <span className="elig-info-card-icon">01</span>
                <h3>Identifier la devise du prêt</h3>
                <p>
                  Le premier point consiste à vérifier si le crédit est libellé
                  en CHF, remboursable en francs suisses ou indexé sur
                  l&apos;évolution du franc suisse.
                </p>
              </article>
              <article className="elig-info-card">
                <span className="elig-info-card-icon">02</span>
                <h3>Repérer le risque de change</h3>
                <p>
                  Lorsque le bien est situé en France, une dette liée au CHF
                  peut créer un décalage avec une valeur immobilière exprimée
                  en euros.
                </p>
              </article>
              <article className="elig-info-card">
                <span className="elig-info-card-icon">03</span>
                <h3>Vérifier l&apos;information bancaire</h3>
                <p>
                  L&apos;analyse porte aussi sur la clarté des explications remises
                  avant la signature, notamment les notices, exemples chiffrés
                  et simulations.
                </p>
              </article>
            </div>
            <div className="elig-intro-cta">
              <a href="#questionnaire" className="elig-intro-cta-link">
                Faire le test en 3 questions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUESTIONNAIRE ── */}
      <section className="elig-quiz-section" id="questionnaire">
        <div className="section-inner">
          <div className="elig-quiz-header">
            <p className="eyebrow">Test d&apos;éligibilité recours prêt CHF</p>
            <h2>Questionnaire d&apos;éligibilité en 3&nbsp;questions</h2>
            <p>
              Répondez aux 3 questions pour identifier les signaux liés à votre
              prêt immobilier en francs suisses. Résultat indicatif immédiat,
              sans engagement.
            </p>
          </div>
          <EligibilityQuiz />
        </div>
      </section>

      {/* ── INTERPRÉTER LE RÉSULTAT ── */}
      <section className="elig-interp-section" id="interpretation">
        <div className="section-inner">
          <div className="elig-interp-inner">
            <p className="eyebrow">Résultat indicatif</p>
            <h2>Comment interpréter le résultat du test&nbsp;?</h2>
            <p className="elig-interp-intro">
              Le résultat du questionnaire reste indicatif. Il sert à repérer
              des signaux, mais seule l&apos;analyse du contrat et des documents
              remis par la banque permet d&apos;évaluer les pistes envisageables.
            </p>
            <div className="elig-interp-grid">
              <article className="elig-interp-card elig-interp-high">
                <p className="elig-interp-level">Potentiel élevé</p>
                <h3>Potentiel élevé</h3>
                <p>
                  Plusieurs critères sont réunis&nbsp;: prêt lié au franc
                  suisse, bien situé en France ou information bancaire à
                  vérifier. Une première analyse peut être pertinente.
                </p>
              </article>
              <article className="elig-interp-card elig-interp-mid">
                <p className="elig-interp-level">À approfondir</p>
                <h3>À approfondir</h3>
                <p>
                  Certains éléments doivent être confirmés par les documents
                  contractuels&nbsp;: offre de prêt, notices, simulations,
                  avenants ou échanges avec la banque.
                </p>
              </article>
              <article className="elig-interp-card elig-interp-low">
                <p className="elig-interp-level">Potentiel limité</p>
                <h3>Potentiel limité</h3>
                <p>
                  Peu de signaux apparaissent à ce stade. Ce résultat ne
                  remplace toutefois pas la lecture des pièces si un doute
                  subsiste sur la devise ou les informations reçues.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── APRÈS LE TEST, QUE FAIRE ? ── */}
      <section className="elig-steps-section">
        <div className="section-inner">
          <div className="elig-steps-inner">
            <p className="eyebrow">Étapes suivantes</p>
            <h2>Après le test, que faire&nbsp;?</h2>
            <p className="elig-steps-intro">
              Le résultat du questionnaire sert de point de départ. Si plusieurs
              signaux apparaissent, les étapes suivantes permettent d&apos;avancer
              de manière structurée.
            </p>
            <ol className="elig-steps-list">
              {STEPS.map((s) => (
                <li key={s.num} className="elig-step-item">
                  <div className="elig-step-num" aria-hidden="true">{s.num}</div>
                  <div className="elig-step-content">
                    <h3>{s.titre}</h3>
                    <p>{s.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="elig-steps-cta">
              <Link href="/simulation" className="primary-btn">
                Faire une simulation indicative
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES 3 CRITÈRES ESSENTIELS ── */}
      <section className="elig-trois-crit-section" id="criteres">
        <div className="section-inner">
          <div className="elig-trois-crit-inner">
            <p className="eyebrow">Critères d&apos;analyse</p>
            <h2>Les 3 critères essentiels d&apos;un recours prêt CHF</h2>
            <p className="elig-trois-crit-intro">
              Le questionnaire repose volontairement sur trois points décisifs.
              Ils permettent de repérer rapidement si un prêt immobilier en
              francs suisses mérite une analyse plus approfondie.
            </p>
            <div className="elig-trois-crit-grid">
              <div className="elig-trois-crit-bloc">
                <div className="elig-trois-crit-num">1</div>
                <h3>Un prêt libellé ou indexé sur le franc suisse</h3>
                <p>
                  Le premier critère consiste à vérifier si le crédit est
                  exprimé en CHF, remboursable en CHF ou indexé sur le franc
                  suisse. L&apos;information figure généralement dans l&apos;offre de
                  prêt, les conditions particulières, les tableaux
                  d&apos;amortissement ou les clauses relatives à la devise.
                </p>
              </div>
              <div className="elig-trois-crit-bloc">
                <div className="elig-trois-crit-num">2</div>
                <h3>Un bien financé situé en France</h3>
                <p>
                  Le risque peut être renforcé lorsque le prêt en devise finance
                  un bien immobilier situé en France. Le bien est alors valorisé
                  en euros, tandis que le capital restant dû peut dépendre du
                  franc suisse. Cette différence peut devenir sensible lors
                  d&apos;une revente, d&apos;un remboursement anticipé ou d&apos;une évolution
                  défavorable du taux EUR/CHF.
                </p>
              </div>
              <div className="elig-trois-crit-bloc">
                <div className="elig-trois-crit-num">3</div>
                <h3>Une information bancaire claire et chiffrée</h3>
                <p>
                  L&apos;enjeu n&apos;est pas seulement de savoir si le contrat mentionne
                  un risque de change. Il faut aussi vérifier si l&apos;emprunteur a
                  reçu une information suffisamment concrète pour comprendre
                  l&apos;impact possible d&apos;une variation du franc suisse sur le coût
                  réel du crédit.
                </p>
              </div>
            </div>
            <div className="elig-retenir-box">
              <p className="elig-retenir-label">À retenir</p>
              <p className="elig-retenir-text">
                Un résultat positif au test ne signifie pas qu&apos;un recours est
                acquis. Il indique seulement que plusieurs signaux méritent une
                analyse du contrat et des documents remis par la banque.
              </p>
            </div>
            <div className="elig-trois-crit-cta">
              <a href="#questionnaire" className="primary-btn">
                Faire le test en 3 questions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUI PEUT ÊTRE CONCERNÉ ── */}
      <section className="elig-profils-section" id="profils">
        <div className="section-inner">
          <div className="elig-profils-inner">
            <p className="eyebrow">Profils concernés</p>
            <h2>Qui peut être concerné par un recours prêt CHF&nbsp;?</h2>
            <p className="elig-profils-intro">
              Plusieurs profils peuvent souhaiter vérifier leur situation,
              notamment lorsque le prêt est lié au franc suisse et que le bien
              financé est situé en France.
            </p>
            <div className="elig-profils-grid">
              <article className="elig-profil-card">
                <h3>Frontalier suisse</h3>
                <p>
                  Vous travailliez ou travaillez en Suisse et avez financé un
                  bien immobilier en France avec un prêt en CHF.
                </p>
              </article>
              <article className="elig-profil-card">
                <h3>Bien revendu ou revente envisagée</h3>
                <p>
                  Une revente en euros peut révéler un décalage avec un capital
                  restant dû exprimé ou calculé en francs suisses.
                </p>
              </article>
              <article className="elig-profil-card">
                <h3>Revenus en CHF modifiés</h3>
                <p>
                  Perte d&apos;emploi suisse, retraite, préretraite ou passage à des
                  revenus en euros peuvent modifier l&apos;exposition au risque.
                </p>
              </article>
              <article className="elig-profil-card">
                <h3>Absence de simulation chiffrée</h3>
                <p>
                  Vous ne vous souvenez pas avoir reçu d&apos;exemples concrets
                  montrant l&apos;impact d&apos;une évolution défavorable du taux de change.
                </p>
              </article>
              <article className="elig-profil-card">
                <h3>Prêt in fine ou long terme</h3>
                <p>
                  Lorsque le capital est remboursé en fin de prêt ou sur une
                  longue durée, l&apos;évolution du franc suisse peut peser davantage
                  sur le coût réel.
                </p>
              </article>
              <article className="elig-profil-card">
                <h3>Capital restant dû difficile à comprendre</h3>
                <p>
                  Le montant restant à rembourser paraît élevé ou difficile à
                  rapprocher du montant initialement emprunté.
                </p>
              </article>
            </div>
            <p className="elig-profils-note">
              Ces situations peuvent justifier une vérification. Elles ne
              présument pas d&apos;un recours et ne constituent pas un avis juridique.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXEMPLES DE SITUATIONS À VÉRIFIER ── */}
      <section className="elig-situations-section" id="situations">
        <div className="section-inner">
          <div className="elig-situations-inner">
            <p className="eyebrow">Cas concrets</p>
            <h2>Exemples de situations à vérifier</h2>
            <p className="elig-situations-intro">
              Certaines situations reviennent fréquemment dans l&apos;analyse des
              prêts immobiliers en francs suisses. Elles ne suffisent pas à
              confirmer un recours, mais peuvent justifier une première
              vérification.
            </p>
            <div className="elig-situations-grid">
              {SITUATIONS_EXAMPLES.map((s, i) => (
                <article key={i} className="elig-situation-card">
                  <h3>{s.titre}</h3>
                  <p>{s.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLEAU SITUATIONS ET NIVEAU DE VÉRIFICATION ── */}
      <section className="elig-verdict-table-section">
        <div className="section-inner">
          <div className="elig-verdict-table-inner">
            <p className="eyebrow">Lecture indicative</p>
            <h2>Situations fréquentes et niveau de vérification</h2>
            <p className="elig-verdict-table-intro">
              Le niveau de vérification dépend de la combinaison des critères.
              Le tableau ci-dessous donne une lecture indicative, sans remplacer
              l&apos;analyse du contrat.
            </p>
            <div className="elig-verdict-table-wrap">
              <table className="elig-verdict-table">
                <thead>
                  <tr>
                    <th scope="col">Situation</th>
                    <th scope="col">Niveau indicatif</th>
                    <th scope="col">Pourquoi vérifier</th>
                  </tr>
                </thead>
                <tbody>
                  {SITUATIONS_TABLE.map((row, i) => (
                    <tr key={i}>
                      <td>{row.situation}</td>
                      <td>
                        <span className={`elig-niveau-badge ${row.niveauClass}`}>
                          {row.niveau}
                        </span>
                      </td>
                      <td>{row.pourquoi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="elig-verdict-table-note">
              Ces appréciations sont indicatives. Elles ne se substituent pas à
              l&apos;examen des pièces contractuelles.
            </p>
          </div>
        </div>
      </section>

      {/* ── POURQUOI LA JURISPRUDENCE RÉCENTE COMPTE ── */}
      <section className="elig-juris-note-section">
        <div className="section-inner">
          <div className="elig-juris-note-inner">
            <p className="eyebrow">Contexte juridique</p>
            <h2>Pourquoi la jurisprudence récente compte pour l&apos;éligibilité&nbsp;?</h2>
            <p className="elig-juris-note-text">
              Les décisions récentes rappellent que l&apos;analyse ne se limite pas
              à la devise du salaire. Le risque de change peut être apprécié sur
              la durée du contrat, notamment lorsque le bien financé est situé
              en France ou lorsque la situation de l&apos;emprunteur évolue.
              C&apos;est pourquoi le test retient trois critères simples&nbsp;: devise
              du prêt, localisation du bien et qualité de l&apos;information bancaire.
            </p>
            <div className="elig-juris-note-cards">
              <article className="elig-info-card">
                <h3>Risque apprécié sur la durée</h3>
                <p>
                  Le risque peut être analysé au regard de toute la durée du
                  contrat, pas seulement au jour de la signature.
                </p>
              </article>
              <article className="elig-info-card">
                <h3>Frontaliers concernés</h3>
                <p>
                  Le fait de percevoir des revenus en CHF ne suffit pas toujours
                  à exclure toute exposition au risque de change. Pour en savoir
                  plus, consultez{" "}
                  <Link href="/blog/pret-chf-frontalier">
                    le guide sur les prêts CHF frontaliers
                  </Link>.
                </p>
              </article>
              <article className="elig-info-card">
                <h3>Information bancaire déterminante</h3>
                <p>
                  La clarté des documents remis avant signature peut être un
                  point central de l&apos;analyse.
                </p>
              </article>
            </div>
            <Link href="/jurisprudence" className="secondary-btn">
              Comprendre la jurisprudence des prêts CHF
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS UTILES ── */}
      <section className="elig-docs-section" id="documents">
        <div className="section-inner">
          <div className="elig-docs-inner">
            <p className="eyebrow">Documents contractuels</p>
            <h2>Documents utiles pour vérifier votre éligibilité à un recours prêt CHF</h2>
            <p className="elig-docs-intro">
              Pour confirmer les signaux identifiés par le test, l&apos;analyse des
              documents contractuels est essentielle. Ils permettent de vérifier
              la devise du prêt, les clauses de risque de change et la qualité
              de l&apos;information remise avant la signature.
            </p>
            <div className="elig-docs-grid">
              {DOCS.map((doc) => (
                <div key={doc} className="elig-doc-card">
                  <span className="elig-doc-icon" aria-hidden="true">✓</span>
                  {doc}
                </div>
              ))}
            </div>
            <p className="elig-docs-note">
              Si certains documents manquent, une première vérification peut
              tout de même permettre d&apos;identifier les pièces prioritaires à
              rechercher.{" "}
              <Link href="/blog/documents-pret-chf">
                Voir les documents utiles pour un prêt CHF
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── ERREURS FRÉQUENTES ── */}
      <section className="elig-errors-section">
        <div className="section-inner">
          <div className="elig-errors-inner">
            <p className="eyebrow">Points de vigilance</p>
            <h2>Les erreurs fréquentes avant de vérifier un prêt CHF</h2>
            <p className="elig-errors-intro">
              Avant de conclure qu&apos;un dossier est concerné ou non, certaines
              idées reçues doivent être évitées.
            </p>
            <div className="elig-errors-grid">
              {ERRORS.map((e, i) => (
                <article key={i} className="elig-error-card">
                  <h3>{e.titre}</h3>
                  <p>{e.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENCADRÉ DE CONFIANCE ── */}
      <section className="elig-trust-section">
        <div className="section-inner">
          <div className="elig-trust-inner">
            <div className="elig-trust-box">
              <p className="elig-trust-label">Une analyse indicative, pas une promesse de recours</p>
              <p className="elig-trust-text">
                Cette page a une vocation pédagogique. Le test ne remplace pas
                l&apos;étude d&apos;un contrat. Les résultats dépendent des pièces
                disponibles, de la rédaction des clauses, des informations
                remises avant la signature, des avenants éventuels et des
                délais applicables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="elig-faq-section">
        <div className="section-inner">
          <div className="elig-faq-inner">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>FAQ éligibilité recours prêt CHF</h2>
            <div className="juri-faq">
              {FAQ.map(({ q, a }) => (
                <details key={q} className="juri-faq-item">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
            <p className="juri-legal-mention" style={{ marginTop: "0" }}>
              Les informations présentées ont une vocation pédagogique et ne
              constituent pas un avis juridique personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="home-section dark-green-section">
        <div className="section-inner juri-cta-inner">
          <p className="eyebrow">Des points à vérifier&nbsp;?</p>
          <h2>Votre test révèle des points à vérifier&nbsp;?</h2>
          <p className="juri-frontalier-text">
            Si votre prêt est lié au franc suisse, si le bien financé est situé
            en France ou si l&apos;information sur le risque de change vous semble
            insuffisante, une première vérification peut aider à identifier les
            clauses sensibles de votre contrat.
          </p>
          <div className="hero-actions">
            <Link href="/simulation" className="juri-cta-primary-btn">
              Faire une simulation indicative
            </Link>
            <Link href="/jurisprudence" className="juri-cta-secondary-btn">
              Comprendre la jurisprudence prêt CHF
            </Link>
            <Link href="/blog" className="juri-cta-secondary-btn">
              Consulter les ressources sur les prêts CHF
            </Link>
          </div>
          <p className="elig-cta-final-mention">
            Cette démarche est indicative et ne constitue pas un avis juridique
            personnalisé.
          </p>
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
                "@id": `${SITE_URL}/eligibilite`,
                name: "Éligibilité recours prêt CHF : êtes-vous concerné ?",
                description:
                  "Test indicatif en 3 questions pour vérifier si un prêt immobilier en francs suisses mérite une première analyse.",
                url: `${SITE_URL}/eligibilite`,
                inLanguage: "fr-FR",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Éligibilité", item: `${SITE_URL}/eligibilite` },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQ.map(({ q, a }) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              },
            ],
          }),
        }}
      />
    </main>
  );
}
