import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt CHF frontalier : critères à vérifier | Prêts CHF Info",
  description:
    "Comprendre pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat, notamment lorsque le bien est situé en France.",
  alternates: { canonical: `${SITE_URL}/blog/pret-chf-frontalier` },
  openGraph: {
    title: "Prêt CHF frontalier : critères à vérifier | Prêts CHF Info",
    description:
      "Comprendre pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat.",
    url: `${SITE_URL}/blog/pret-chf-frontalier`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt CHF frontalier : critères à vérifier | Prêts CHF Info",
    description:
      "Comprendre pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat.",
  },
};

const faq = [
  {
    q: "Un frontalier payé en CHF peut-il être concerné par le risque de change ?",
    a: "Oui, potentiellement. Le fait de percevoir des revenus en francs suisses couvre une partie du risque sur les mensualités, mais ne protège pas du risque de change lors d'une revente, d'un remboursement anticipé ou d'une évolution de la situation professionnelle.",
  },
  {
    q: "Le fait de travailler en Suisse suffit-il à exclure le risque ?",
    a: "Non. La jurisprudence récente rappelle que le statut de frontalier ne dispense pas la banque de son obligation d'information transparente sur le risque de change. L'appréciation dépend des clauses du contrat et des documents remis avant signature.",
  },
  {
    q: "Quels documents vérifier en priorité ?",
    a: "L'offre de prêt, les conditions particulières, les notices d'information sur le risque de change, les simulations chiffrées remises par la banque et les tableaux d'amortissement sont les pièces les plus importantes à réunir.",
  },
  {
    q: "Un prêt déjà remboursé peut-il être analysé ?",
    a: "Oui, dans certains cas. Une analyse peut rester possible selon les délais applicables et les circonstances du dossier, notamment en cas de revente ou de remboursement anticipé réalisé dans un contexte de franc suisse fort.",
  },
  {
    q: "La jurisprudence garantit-elle un recours ?",
    a: "Non. La jurisprudence précise les critères d'analyse de l'information contractuelle, mais ne crée pas de droit automatique. Chaque dossier est apprécié selon les clauses du contrat, les pièces disponibles et la situation de l'emprunteur.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/pret-chf-frontalier`,
      headline: "Prêt CHF frontalier : êtes-vous concerné par un recours ?",
      description:
        "Comprendre pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat, notamment lorsque le bien est situé en France.",
      url: `${SITE_URL}/blog/pret-chf-frontalier`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-19",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/pret-chf-frontalier`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prêt CHF frontalier",
          item: `${SITE_URL}/blog/pret-chf-frontalier`,
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

export default function ArticlePretCHFFrontalier() {
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
              <span>Prêt CHF frontalier</span>
            </nav>
            <span className="article-cat-badge">Frontaliers</span>
            <h1>Prêt CHF frontalier : êtes-vous concerné par un recours ?</h1>
            <p className="article-hero-intro">
              Un frontalier ayant souscrit un prêt immobilier en francs suisses peut être concerné par une
              vérification lorsque le bien financé est situé en France, que la dette dépend du CHF et que
              l&apos;information sur le risque de change n&apos;a pas été suffisamment claire. Ce guide explique
              pourquoi le statut de frontalier ne constitue pas toujours une protection totale.
            </p>
            <div className="article-meta">
              <span>Frontaliers</span>
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

          <h2>Pourquoi les frontaliers ont souscrit des prêts en CHF</h2>
          <p>
            Entre les années 2000 et 2010, de nombreux emprunteurs frontaliers travaillant en Suisse ont souscrit
            des prêts immobiliers en francs suisses pour financer un bien situé en France. Cette pratique reposait
            sur une logique apparente : percevoir des revenus en CHF et rembourser dans la même devise semblait
            naturellement cohérent.
          </p>
          <p>
            À cela s&apos;ajoutait un argument commercial fort : les taux d&apos;intérêt proposés sur les prêts en CHF
            étaient souvent inférieurs à ceux des crédits en euros. Dans un contexte de taux attractifs et de
            parité euro / franc suisse relativement stable, ces contrats paraissaient avantageux. La cohérence
            apparente entre la devise des revenus et celle du crédit donnait l&apos;impression d&apos;une protection naturelle
            contre le risque de change.
          </p>
          <p>
            La réalité s&apos;est avérée plus complexe. Le bien immobilier financé était situé en France, valorisé en
            euros. La dette, elle, dépendait du franc suisse. Cette asymétrie structurelle est au cœur de la
            problématique des <strong>prêts CHF frontaliers</strong>.
          </p>

          <h2>Pourquoi le risque de change peut exister malgré des revenus en CHF</h2>
          <p>
            Percevoir un salaire en francs suisses couvre effectivement une partie du risque de change sur les
            mensualités courantes. Mais ce raisonnement atteint ses limites dans plusieurs situations concrètes.
          </p>
          <p>
            D&apos;abord, lors d&apos;une <strong>revente du bien</strong>, le prix de cession est encaissé en euros. Si le
            capital restant dû — exprimé en CHF — est plus élevé que la valeur de vente une fois converti, l&apos;emprunteur
            peut se retrouver dans une situation délicate. Ce risque ne dépend pas des revenus au moment de la
            cession, mais du taux EUR/CHF à cette date.
          </p>
          <p>
            Ensuite, la situation professionnelle évolue. Un frontalier peut changer d&apos;employeur, rentrer travailler
            en France, partir à la retraite ou perdre son emploi suisse. À ce moment-là, les revenus ne sont plus
            en CHF, et la couverture naturelle supposée par le prêt disparaît. Le risque de change devient alors
            pleinement visible.
          </p>
          <p>
            Enfin, la durée d&apos;un crédit immobilier — souvent 15 à 25 ans — est suffisamment longue pour que le
            taux EUR/CHF connaisse des variations significatives. Ces variations peuvent modifier substantiellement
            la contrevaleur en euros du capital restant dû, indépendamment de la nature des revenus de l&apos;emprunteur.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Les revenus en CHF couvrent les mensualités, mais pas le capital lors d&apos;une revente.</li>
              <li>La retraite, le retour en France ou la perte d&apos;emploi suisse peuvent modifier l&apos;exposition au risque.</li>
              <li>L&apos;information sur ces scénarios devait être claire, chiffrée et remise avant la signature.</li>
            </ul>
          </div>

          <h2>Les situations fréquentes à vérifier</h2>
          <p>
            Certaines configurations méritent une attention particulière. Ce tableau présente les situations les
            plus courantes, les raisons de les examiner et les documents utiles dans chaque cas.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="article-table">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Pourquoi vérifier</th>
                  <th>Documents utiles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bien situé en France</td>
                  <td>La revente en euros peut créer un déséquilibre avec la dette en CHF</td>
                  <td>Offre de prêt, conditions particulières</td>
                </tr>
                <tr>
                  <td>Revente envisagée ou effectuée</td>
                  <td>Le capital à solder dépend du taux EUR/CHF au moment de la cession</td>
                  <td>Documents de vente, capital restant dû</td>
                </tr>
                <tr>
                  <td>Perte ou cessation de revenus en CHF</td>
                  <td>La couverture naturelle disparaît si les revenus en CHF cessent</td>
                  <td>Bulletins de salaire, documents RH</td>
                </tr>
                <tr>
                  <td>Prêt in fine</td>
                  <td>Le capital est remboursé en totalité à l&apos;échéance, concentrant le risque</td>
                  <td>Tableau d&apos;amortissement, type de contrat</td>
                </tr>
                <tr>
                  <td>Absence de simulation chiffrée</td>
                  <td>La banque devait illustrer l&apos;impact d&apos;une variation EUR/CHF</td>
                  <td>Dossier remis avant signature</td>
                </tr>
                <tr>
                  <td>Avenant ou renégociation</td>
                  <td>Une renégociation peut avoir modifié le capital ou les conditions</td>
                  <td>Avenant signé, nouveau tableau d&apos;amortissement</td>
                </tr>
                <tr>
                  <td>Prêt déjà remboursé</td>
                  <td>Une analyse peut rester possible selon les délais applicables</td>
                  <td>Documents d&apos;archives, actes de remboursement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Ce que la banque devait expliquer</h2>
          <p>
            Selon les exigences progressivement renforcées par la jurisprudence, la banque avait l&apos;obligation de
            fournir une information claire et compréhensible sur le risque de change. Cette obligation ne se
            résumait pas à l&apos;existence d&apos;une clause dans les conditions générales. Elle impliquait une information
            active, illustrée et adaptée à la situation concrète de l&apos;emprunteur.
          </p>
          <p>
            Concrètement, la banque devait expliquer comment fonctionne le mécanisme de change dans ce type de
            prêt, présenter l&apos;impact possible d&apos;une variation du taux EUR/CHF sur le capital restant dû, fournir
            des simulations chiffrées sur plusieurs scénarios — y compris défavorables — et alerter sur les
            conséquences possibles en cas de revente, de remboursement anticipé ou d&apos;évolution de la situation
            professionnelle.
          </p>
          <p>
            Si ces éléments n&apos;ont pas été remis avant la signature, ou si l&apos;information était trop abstraite pour
            permettre une compréhension concrète, cela peut justifier une vérification du dossier. Pour
            approfondir ce mécanisme,{" "}
            <Link href="/blog/risque-change-pret-chf">
              consultez notre guide sur le risque de change d&apos;un prêt CHF
            </Link>
            .
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous avez souscrit un prêt immobilier en francs suisses en tant que frontalier ? Identifiez
              les signaux à vérifier en moins d&apos;une minute.
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester mon éligibilité →
            </Link>
          </div>

          <h2>Ce que la jurisprudence récente a changé pour les frontaliers</h2>
          <p>
            Pendant longtemps, le statut de frontalier a pu être présenté comme une protection naturelle contre
            le risque de change. La jurisprudence récente a progressivement nuancé cette présomption.
          </p>
          <p>
            Les décisions rendues par la Cour de cassation, notamment en 2025, rappellent que le fait de
            percevoir des revenus en CHF ne dispense pas la banque de son obligation d&apos;information transparente.
            L&apos;appréciation du risque porte sur la durée totale du contrat, y compris les scénarios où la situation
            professionnelle de l&apos;emprunteur évolue défavorablement.
          </p>
          <p>
            Ces évolutions jurisprudentielles ne signifient pas que tous les recours aboutissent. Elles précisent
            les critères d&apos;analyse, mais chaque dossier reste examiné au regard de ses pièces propres. Pour
            comprendre l&apos;évolution de la jurisprudence et les décisions clés,{" "}
            <Link href="/jurisprudence">
              consultez notre page jurisprudence prêt CHF
            </Link>{" "}
            ou l&apos;analyse de la{" "}
            <Link href="/blog/cour-cassation-9-juillet-2025-pret-chf">
              décision de la Cour de cassation du 9 juillet 2025
            </Link>
            .
          </p>

          <h2>Que faire si vous êtes frontalier avec un prêt CHF ?</h2>
          <p>
            Si vous avez souscrit un prêt immobilier en francs suisses en tant que frontalier, voici une démarche
            pédagogique en cinq étapes pour mieux comprendre votre situation :
          </p>
          <ol>
            <li>
              <strong>Identifier la devise du prêt</strong> — Vérifiez dans l&apos;offre de prêt et les conditions
              particulières si le capital est libellé, remboursable ou indexé en CHF. Cette information figure
              généralement dans les premières pages du contrat.
            </li>
            <li>
              <strong>Relire les documents de souscription</strong> — Reprenez les notices d&apos;information, les
              simulations et les échanges remis avant la signature. La présence ou l&apos;absence de simulations
              chiffrées sur le risque de change est un signal important.
            </li>
            <li>
              <strong>Faire le test d&apos;éligibilité</strong> — Le{" "}
              <Link href="/eligibilite">test d&apos;éligibilité en 3 questions</Link>{" "}
              permet d&apos;identifier rapidement les signaux principaux à examiner dans votre dossier.
            </li>
            <li>
              <strong>Réaliser une simulation indicative</strong> — Le{" "}
              <Link href="/simulation">simulateur indicatif</Link>{" "}
              donne un ordre de grandeur avant d&apos;analyser les documents dans le détail. Le résultat est présenté
              sous forme de fourchette, non comme un montant définitif.
            </li>
            <li>
              <strong>Rassembler les pièces</strong> — Réunissez l&apos;offre de prêt, les conditions générales et
              particulières, les notices d&apos;information, les avenants éventuels, les tableaux d&apos;amortissement et les
              échanges avec la banque. Consultez le{" "}
              <Link href="/blog/documents-pret-chf">
                guide sur les documents à vérifier pour un prêt CHF
              </Link>
              .
            </li>
          </ol>

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
            Cet article a une vocation pédagogique et ne constitue pas un avis juridique personnalisé.
            L&apos;analyse dépend toujours du contrat, des documents remis et de la situation de l&apos;emprunteur.
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
            <h2>Votre prêt CHF mérite peut-être une vérification</h2>
            <p>
              Le test d&apos;éligibilité permet d&apos;identifier les signaux à vérifier dans un prêt immobilier en
              francs suisses, qu&apos;il soit en cours ou déjà remboursé.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester mon éligibilité
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
