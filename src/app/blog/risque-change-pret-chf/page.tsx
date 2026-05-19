import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF | Prêts CHF Info",
  description:
    "Comprendre comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses, le capital restant dû et les situations de revente ou remboursement anticipé.",
  alternates: { canonical: `${SITE_URL}/blog/risque-change-pret-chf` },
  openGraph: {
    title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF | Prêts CHF Info",
    description:
      "Comprendre comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses, le capital restant dû et les situations de revente.",
    url: `${SITE_URL}/blog/risque-change-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF | Prêts CHF Info",
    description:
      "Comprendre comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses.",
  },
};

const faq = [
  {
    q: "Le taux EUR/CHF suffit-il à calculer un préjudice ?",
    a: "Non. Le taux de change donne un indicateur de l'évolution de la contrevaleur, mais le calcul d'un préjudice réel dépend du type de prêt, du capital restant dû, des remboursements effectués, des clauses contractuelles et de la situation de l'emprunteur.",
  },
  {
    q: "Le simulateur donne-t-il un montant définitif ?",
    a: "Non. Le simulateur fournit une estimation indicative sous forme de fourchette. Il ne constitue pas une évaluation juridique ou financière définitive. Les résultats doivent être complétés par l'analyse du contrat et des documents bancaires.",
  },
  {
    q: "Pourquoi le capital restant dû peut-il sembler élevé ?",
    a: "Dans un prêt CHF, le capital restant dû exprimé en euros dépend du taux EUR/CHF au moment du calcul. Si le franc suisse s'est apprécié depuis la souscription, la contrevaleur en euros peut être supérieure au montant initialement emprunté converti au taux d'origine.",
  },
  {
    q: "Un prêt en CHF avec revenus en CHF comporte-t-il un risque ?",
    a: "Oui, potentiellement. Les revenus en CHF couvrent une partie du risque sur les mensualités courantes, mais le risque reste présent lors d'une revente (bien valorisé en euros), d'un remboursement anticipé ou d'une évolution de la situation professionnelle.",
  },
  {
    q: "Quels documents sont nécessaires pour analyser un prêt CHF ?",
    a: "Les documents essentiels sont l'offre de prêt originale, les conditions particulières et générales, les notices d'information sur le risque de change, les simulations remises par la banque, les tableaux d'amortissement, les avenants éventuels et les échanges avec l'établissement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/risque-change-pret-chf`,
      headline: "Risque de change prêt CHF : comprendre l'impact EUR/CHF",
      description:
        "Comprendre comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses, le capital restant dû et les situations de revente ou remboursement anticipé.",
      url: `${SITE_URL}/blog/risque-change-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-19",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/risque-change-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Risque de change prêt CHF",
          item: `${SITE_URL}/blog/risque-change-pret-chf`,
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

export default function ArticleRisqueChange() {
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
              <span>Risque de change prêt CHF</span>
            </nav>
            <span className="article-cat-badge">Risque de change</span>
            <h1>Risque de change prêt CHF : comprendre l&apos;impact EUR/CHF</h1>
            <p className="article-hero-intro">
              Le risque de change d&apos;un prêt CHF correspond à l&apos;effet de la variation entre l&apos;euro et le franc
              suisse sur la contrevaleur du capital, des remboursements ou du montant à solder. Il peut devenir
              important lorsque le bien financé est situé en France et valorisé en euros.
            </p>
            <div className="article-meta">
              <span>Risque de change</span>
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

          <h2>Qu&apos;est-ce que le risque de change dans un prêt CHF ?</h2>
          <p>
            Dans un <strong>prêt immobilier en francs suisses</strong>, tout ou partie du crédit est exprimé en CHF.
            Cela signifie que la valeur en euros du capital, des mensualités ou du montant à rembourser varie en
            fonction du taux de change entre l&apos;euro et le franc suisse.
          </p>
          <p>
            Le <strong>risque de change</strong> correspond précisément à cette dépendance. Lorsque le franc suisse
            s&apos;apprécie face à l&apos;euro — c&apos;est-à-dire lorsque le taux EUR/CHF baisse — un montant exprimé en CHF
            représente davantage d&apos;euros. À l&apos;inverse, lorsque l&apos;euro se renforce, la contrevaleur en euros diminue.
          </p>
          <p>
            Ce mécanisme devient particulièrement significatif lorsque le bien immobilier financé est situé en
            France et valorisé en euros. La dette est alors libellée dans une devise, le bien dans une autre. Cette
            asymétrie structurelle — <strong>dette en CHF, bien en euros</strong> — est au cœur des contentieux sur
            les prêts en francs suisses.
          </p>

          <h2>Pourquoi le taux EUR/CHF peut modifier le capital restant dû</h2>
          <p>
            Pour illustrer ce mécanisme, voici un exemple purement indicatif et pédagogique, sans valeur de
            calcul définitif.
          </p>
          <p>
            Supposons un prêt souscrit en 2008 pour un capital de 150 000 CHF, à une époque où le taux EUR/CHF
            était d&apos;environ 1,60. À ce taux, ce capital correspondait à environ 93 750 euros. Si, au moment d&apos;une
            revente ou d&apos;un remboursement, le taux EUR/CHF est tombé à 0,93, ce même capital de 150 000 CHF
            représente environ 161 000 euros — soit une différence indicative de l&apos;ordre de 67 000 euros.
          </p>
          <p>
            Cet exemple est strictement illustratif. Il ne tient pas compte des remboursements intermédiaires, du
            type de prêt, des conditions contractuelles ni de la situation personnelle de l&apos;emprunteur. Il sert
            uniquement à visualiser la mécanique de la variation de contrevaleur. Chaque dossier est différent.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le risque de change ne porte pas seulement sur les mensualités : il touche surtout le capital restant dû.</li>
              <li>La revente et le remboursement anticipé sont les moments les plus exposés.</li>
              <li>Une variation EUR/CHF significative peut modifier la contrevaleur en euros de plusieurs dizaines de milliers d&apos;euros.</li>
            </ul>
          </div>

          <h2>Risque sur les mensualités, le capital et la revente</h2>
          <p>
            Le risque de change peut se manifester différemment selon la phase du prêt et la structure du contrat :
          </p>
          <ul>
            <li>
              <strong>Sur les mensualités</strong> : si les remboursements sont calculés ou convertis en euros au
              taux du jour, leur montant peut varier selon l&apos;évolution EUR/CHF. Ce risque est plus visible dans
              les prêts libellés en CHF avec remboursement converti mensuellement.
            </li>
            <li>
              <strong>Sur le capital restant dû</strong> : c&apos;est souvent le risque principal. Le montant à
              rembourser en euros dépend du taux de change en vigueur. Si le franc suisse s&apos;est apprécié, la
              contrevaleur peut être sensiblement supérieure au capital initialement emprunté.
            </li>
            <li>
              <strong>Sur le coût total du crédit</strong> : l&apos;ensemble des remboursements effectués et du capital
              soldé peut représenter une somme en euros supérieure à ce qu&apos;un prêt en euros aurait coûté.
            </li>
            <li>
              <strong>Lors d&apos;une revente</strong> : le prix de vente est perçu en euros. Si le capital restant dû
              en CHF, converti au taux du jour, dépasse ce prix, l&apos;emprunteur doit combler la différence.
            </li>
            <li>
              <strong>Lors d&apos;un remboursement anticipé</strong> : le montant à solder dépend du taux EUR/CHF
              au moment du remboursement. Un franc suisse fort renchérit mécaniquement ce montant en euros.
            </li>
          </ul>

          <h2>Cas particulier du prêt in fine</h2>
          <p>
            Le prêt in fine est une structure dans laquelle le capital n&apos;est pas remboursé progressivement, mais
            en totalité à l&apos;échéance du contrat. Pendant la durée du prêt, seuls les intérêts sont payés.
          </p>
          <p>
            Dans le cadre d&apos;un <strong>prêt CHF in fine</strong>, le risque de change est concentré sur la date de
            remboursement final. Le capital à solder — exprimé en CHF — doit être converti en euros au taux en
            vigueur à cette date. Si le franc suisse s&apos;est fortement apprécié depuis la souscription, la contrevaleur
            en euros peut être très sensiblement supérieure au montant emprunté.
          </p>
          <p>
            Ce type de prêt était parfois proposé en association avec un support d&apos;assurance-vie en CHF ou un
            placement de capitalisation. L&apos;analyse des documents remis avant signature est ici particulièrement
            importante, car l&apos;emprunteur devait comprendre cette concentration du risque sur une seule échéance.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez estimer l&apos;impact du taux EUR/CHF sur votre prêt ? La simulation indicative vous
              donne un ordre de grandeur.
            </p>
            <Link href="/simulation" className="article-inline-cta-btn">
              Faire une simulation →
            </Link>
          </div>

          <h2>Pourquoi la banque devait expliquer le risque</h2>
          <p>
            La jurisprudence relative aux prêts CHF a progressivement renforcé l&apos;exigence de transparence à
            l&apos;égard de l&apos;emprunteur. Une simple mention du risque de change dans les conditions générales ne suffit
            pas si elle ne permet pas de comprendre concrètement les effets possibles sur la durée du contrat.
          </p>
          <p>
            Selon les critères dégagés par les décisions récentes, la banque devait expliquer le fonctionnement
            du mécanisme de change, fournir des simulations chiffrées sur plusieurs scénarios d&apos;évolution du taux
            EUR/CHF, illustrer l&apos;impact sur le capital restant dû et mettre en évidence les risques en cas de
            revente ou de remboursement anticipé.
          </p>
          <p>
            Si cette information n&apos;a pas été fournie ou était trop abstraite pour permettre une compréhension
            réelle, cela peut justifier un examen du dossier. Pour en savoir plus sur les critères
            jurisprudentiels,{" "}
            <Link href="/jurisprudence">
              consultez notre page sur la jurisprudence des prêts CHF
            </Link>{" "}
            ou l&apos;analyse de la{" "}
            <Link href="/blog/cour-cassation-9-juillet-2025-pret-chf">
              décision du 9 juillet 2025
            </Link>
            .
          </p>

          <h2>Comment estimer l&apos;impact d&apos;un prêt CHF ?</h2>
          <p>
            Avant de faire analyser un dossier, il est utile de réunir les éléments essentiels du prêt. Ce tableau
            récapitule les informations les plus importantes, leur utilité et où les trouver.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="article-table">
              <thead>
                <tr>
                  <th>Élément</th>
                  <th>Pourquoi il compte</th>
                  <th>Où le trouver</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Montant initial en CHF</td>
                  <td>Base de calcul pour la contrevaleur actuelle</td>
                  <td>Offre de prêt, conditions particulières</td>
                </tr>
                <tr>
                  <td>Taux EUR/CHF à la souscription</td>
                  <td>Permet de calculer la contrevaleur d&apos;origine</td>
                  <td>Conditions particulières, archives banque</td>
                </tr>
                <tr>
                  <td>Capital restant dû</td>
                  <td>Montant à rembourser exprimé en CHF</td>
                  <td>Dernier tableau d&apos;amortissement</td>
                </tr>
                <tr>
                  <td>Durée du prêt</td>
                  <td>Période sur laquelle s&apos;apprécie le risque</td>
                  <td>Offre de prêt</td>
                </tr>
                <tr>
                  <td>Date de souscription</td>
                  <td>Permet de situer le taux EUR/CHF d&apos;origine</td>
                  <td>Offre de prêt</td>
                </tr>
                <tr>
                  <td>Type de prêt</td>
                  <td>In fine ou amortissable : profil de risque différent</td>
                  <td>Offre de prêt, conditions générales</td>
                </tr>
                <tr>
                  <td>Avenants éventuels</td>
                  <td>Peuvent avoir modifié le capital ou les conditions</td>
                  <td>Avenants signés</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Le{" "}
            <Link href="/simulation">simulateur indicatif</Link>{" "}
            permet d&apos;obtenir une première fourchette à partir de ces informations. Il ne remplace pas l&apos;analyse du
            contrat, mais peut aider à visualiser un ordre de grandeur. Pour savoir quels documents réunir,
            consultez le{" "}
            <Link href="/blog/documents-pret-chf">
              guide sur les documents à vérifier pour un prêt CHF
            </Link>
            . Pour comprendre le profil spécifique des emprunteurs frontaliers,{" "}
            <Link href="/blog/pret-chf-frontalier">
              lisez notre article sur le prêt CHF frontalier
            </Link>
            .
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
            <h2>Estimez l&apos;impact EUR/CHF sur votre prêt</h2>
            <p>
              La simulation indicative vous permet de visualiser l&apos;impact d&apos;une variation du taux de change
              sur votre capital restant dû ou votre coût de remboursement.
            </p>
            <div className="article-cta-actions">
              <Link href="/simulation" className="juri-cta-primary-btn">
                Faire une simulation indicative
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
