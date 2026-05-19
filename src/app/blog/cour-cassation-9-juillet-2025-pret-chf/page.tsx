import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Cour de cassation 9 juillet 2025 et prêts CHF | Prêts CHF Info",
  description:
    "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses, le risque de change, les frontaliers et l'exigence d'information claire.",
  alternates: { canonical: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf` },
  openGraph: {
    title: "Cour de cassation 9 juillet 2025 et prêts CHF | Prêts CHF Info",
    description:
      "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses et le risque de change.",
    url: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cour de cassation 9 juillet 2025 et prêts CHF | Prêts CHF Info",
    description:
      "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses, le risque de change et l'exigence d'information claire.",
  },
};

const faq = [
  {
    q: "Que disent les arrêts du 9 juillet 2025 ?",
    a: "Les arrêts Cass. 1re civ., 9 juillet 2025 (n° 24-19.647 et n° 24-18.018) précisent que le risque de change d'un prêt CHF doit être apprécié sur toute la durée du contrat, que l'information doit être claire et concrète, et que le statut de frontalier ne dispense pas la banque de son obligation d'information transparente.",
  },
  {
    q: "Les frontaliers sont-ils concernés par ces décisions ?",
    a: "Potentiellement. La Cour de cassation rappelle que le fait de percevoir des revenus en CHF ne suffit pas à exclure l'exigence d'information transparente. Chaque situation doit être appréciée selon le contrat, les documents remis et l'évolution de la situation professionnelle.",
  },
  {
    q: "Tous les prêts CHF peuvent-ils être annulés grâce à ces décisions ?",
    a: "Non. Ces décisions ne créent pas de droit automatique à l'annulation. Elles précisent les critères d'appréciation de l'information contractuelle, mais chaque recours dépend des clauses spécifiques du contrat, des pièces disponibles, des délais applicables et de la situation de l'emprunteur.",
  },
  {
    q: "Quels documents vérifier après ces décisions ?",
    a: "Il est utile de relire l'offre de prêt, les conditions particulières contenant les clauses devise, les notices d'information sur le risque de change, les simulations remises avant signature, les tableaux d'amortissement, les avenants et les échanges avec la banque.",
  },
  {
    q: "Comment savoir si mon dossier mérite une analyse ?",
    a: "Le test d'éligibilité en 3 questions permet d'identifier les premiers signaux. Une simulation indicative peut compléter cette première lecture. Une analyse approfondie nécessite ensuite la réunion des documents contractuels et une appréciation des pièces disponibles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
      headline:
        "Cour de cassation du 9 juillet 2025 : ce que cela change pour les prêts CHF",
      description:
        "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses, le risque de change, les frontaliers et l'exigence d'information claire.",
      url: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-19",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cour de cassation 9 juillet 2025",
          item: `${SITE_URL}/blog/cour-cassation-9-juillet-2025-pret-chf`,
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

export default function ArticleCourdeCassation2025() {
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
              <span>Cour de cassation 9 juillet 2025</span>
            </nav>
            <span className="article-cat-badge">Jurisprudence</span>
            <h1>Cour de cassation du 9 juillet 2025 : ce que cela change pour les prêts CHF</h1>
            <p className="article-hero-intro">
              Les décisions du 9 juillet 2025 rappellent que le risque de change d&apos;un prêt en francs suisses
              doit être apprécié sur toute la durée du contrat. Elles peuvent concerner certains emprunteurs
              frontaliers, mais ne signifient pas que tous les prêts CHF sont automatiquement contestables.
            </p>
            <div className="article-meta">
              <span>Jurisprudence</span>
              <span className="article-meta-sep" />
              <span>8 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Le contexte des prêts immobiliers en francs suisses</h2>
          <p>
            Les <strong>prêts immobiliers en francs suisses</strong> — aussi appelés prêts CHF — ont été
            principalement commercialisés entre les années 2000 et 2010 par plusieurs établissements bancaires
            français. Ils s&apos;adressaient souvent à des emprunteurs frontaliers percevant des revenus en CHF, mais
            aussi à des emprunteurs ayant des revenus en euros, attirés par des taux d&apos;intérêt apparemment
            avantageux.
          </p>
          <p>
            La structure de ces prêts crée une asymétrie fondamentale : le bien financé est situé en France et
            valorisé en euros, tandis que la dette dépend du franc suisse. Lorsque le taux EUR/CHF évolue
            défavorablement — ce qui fut le cas à partir de 2011 — la contrevaleur en euros du capital restant
            dû peut augmenter substantiellement.
          </p>
          <p>
            Ce contentieux porte principalement sur la qualité de l&apos;information remise aux emprunteurs avant la
            signature : la banque a-t-elle expliqué clairement le mécanisme de change, ses effets concrets et les
            risques à long terme ? C&apos;est cette question qui a donné lieu à une jurisprudence progressivement
            structurée.
          </p>

          <h2>Ce que la Cour de cassation a rappelé le 9 juillet 2025</h2>
          <p>
            Le 9 juillet 2025, la première chambre civile de la Cour de cassation a rendu deux décisions
            importantes dans des dossiers relatifs à des prêts immobiliers en francs suisses :
          </p>
          <ul>
            <li><strong>Cass. 1re civ., 9 juillet 2025, n° 24-19.647</strong></li>
            <li><strong>Cass. 1re civ., 9 juillet 2025, n° 24-18.018</strong></li>
          </ul>
          <p>
            Ces arrêts précisent plusieurs points importants pour les prêts CHF. D&apos;abord, le risque de change
            doit être apprécié sur <strong>toute la durée du contrat</strong>, pas seulement au moment de la
            souscription. L&apos;emprunteur devait être en mesure de comprendre les effets possibles d&apos;une
            appréciation du franc suisse sur le capital restant dû tout au long de la vie du prêt.
          </p>
          <p>
            Ensuite, l&apos;information remise devait être suffisamment transparente pour permettre à un emprunteur
            normalement attentif de comprendre le fonctionnement concret du mécanisme de change. Une clause
            générale dans les conditions générales ne peut pas valoir information éclairée si elle ne permet pas
            une compréhension concrète des effets économiques.
          </p>
          <p>
            Enfin, le statut de frontalier — c&apos;est-à-dire le fait de percevoir des revenus en CHF — ne constitue
            pas, à lui seul, une présomption suffisante de compréhension du risque sur la durée.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le risque de change devait être présenté sur la durée totale du prêt, y compris les scénarios défavorables.</li>
              <li>Le statut de frontalier ne dispense pas la banque de son obligation d&apos;information transparente.</li>
              <li>Une clause générale ne suffit pas : l&apos;information devait être claire, concrète et compréhensible.</li>
              <li>Ces décisions ne créent pas de droit automatique : chaque dossier reste apprécié individuellement.</li>
              <li>L&apos;analyse des documents contractuels reste indispensable avant toute démarche.</li>
            </ul>
          </div>

          <h2>Pourquoi les frontaliers peuvent être concernés</h2>
          <p>
            Pendant longtemps, le statut de frontalier — percevoir ses revenus en CHF — a pu être présenté comme
            une protection naturelle. L&apos;argument était le suivant : si l&apos;emprunteur gagne en CHF et rembourse en
            CHF, le risque de change est naturellement absorbé.
          </p>
          <p>
            La Cour de cassation rappelle que ce raisonnement atteint ses limites. D&apos;abord, le bien immobilier
            est valorisé en euros : lors d&apos;une revente, c&apos;est le prix en euros qui est perçu. Si le capital restant
            dû en CHF dépasse ce prix une fois converti, l&apos;emprunteur supporte une perte. Ensuite, la situation
            professionnelle peut évoluer : retraite, retour en France, perte d&apos;emploi suisse. À ce moment-là, la
            couverture naturelle supposée par les revenus en CHF disparaît.
          </p>
          <p>
            L&apos;obligation d&apos;information portait précisément sur ces scénarios d&apos;évolution défavorable : la banque
            devait alerter sur les effets possibles en cas de revente, d&apos;évolution professionnelle ou de variation
            du taux de change sur la durée. Pour comprendre ces mécanismes en détail,{" "}
            <Link href="/blog/pret-chf-frontalier">
              consultez notre article sur le prêt CHF frontalier
            </Link>
            .
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez vérifier si votre prêt CHF peut être analysé à la lumière de ces décisions récentes ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester mon éligibilité →
            </Link>
          </div>

          <h2>Ce que ces arrêts ne signifient pas</h2>
          <p>
            Ces décisions sont importantes, mais elles doivent être comprises avec précision. Elles ne signifient
            pas que tous les prêts CHF sont automatiquement contestables ni que tous les recours aboutissent.
          </p>
          <div className="juri-four-grid" style={{ marginTop: "24px" }}>
            <article className="juri-revirement-card">
              <h3>Pas d&apos;annulation automatique</h3>
              <p>
                La qualification d&apos;un manquement à l&apos;obligation d&apos;information ne conduit pas automatiquement
                à l&apos;annulation du contrat. L&apos;issue dépend de l&apos;analyse complète du dossier et des clauses concernées.
              </p>
            </article>
            <article className="juri-revirement-card">
              <h3>Pas de recours garanti</h3>
              <p>
                Chaque dossier est apprécié individuellement. L&apos;existence d&apos;une jurisprudence favorable ne garantit
                pas le résultat d&apos;un recours. Les délais applicables et la situation de l&apos;emprunteur sont également
                pris en compte.
              </p>
            </article>
            <article className="juri-revirement-card">
              <h3>Chaque contrat doit être analysé</h3>
              <p>
                Les clauses, les documents remis et les conditions propres à chaque prêt font la différence.
                Deux contrats similaires peuvent conduire à des appréciations différentes selon les pièces disponibles.
              </p>
            </article>
            <article className="juri-revirement-card">
              <h3>La documentation peut être déterminante</h3>
              <p>
                Les notices, simulations et échanges remis avant signature sont souvent décisifs. Leur présence
                détaillée ou leur absence peut changer fondamentalement l&apos;analyse du dossier.
              </p>
            </article>
          </div>

          <h2>Quels documents relire après ces décisions ?</h2>
          <p>
            Ces décisions renforcent l&apos;importance de disposer des pièces contractuelles. Voici les documents à
            réunir et à relire en priorité :
          </p>
          <ul>
            <li>
              <strong>Offre de prêt</strong> — vérifier si la devise et le mécanisme de change sont clairement
              décrits.
            </li>
            <li>
              <strong>Conditions particulières</strong> — les clauses relatives à la devise, au taux de change et
              au capital sont généralement dans cette section.
            </li>
            <li>
              <strong>Notices d&apos;information sur le risque de change</strong> — leur présence, leur précision et
              les scénarios chiffrés éventuels.
            </li>
            <li>
              <strong>Simulations remises avant signature</strong> — vérifier si elles illustrent des scénarios de
              variation EUR/CHF défavorables.
            </li>
            <li>
              <strong>Tableaux d&apos;amortissement</strong> — permettent de reconstituer l&apos;évolution du capital en CHF
              et sa contrevaleur en euros.
            </li>
            <li>
              <strong>Avenants éventuels</strong> — une renégociation peut avoir modifié les conditions initiales
              du contrat.
            </li>
            <li>
              <strong>Échanges avec la banque</strong> — courriers, emails ou courriers électroniques relatifs
              au prêt.
            </li>
          </ul>
          <p>
            Pour une liste complète et un guide de lecture, consultez le{" "}
            <Link href="/blog/documents-pret-chf">
              guide sur les documents à vérifier pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Comment utiliser cette jurisprudence dans une première vérification ?</h2>
          <p>
            Ces décisions sont un point de repère utile, mais elles ne se substituent pas à une analyse
            personnalisée du dossier. Voici comment aborder une première vérification de manière structurée :
          </p>
          <ol>
            <li>
              <strong>Faire le test d&apos;éligibilité</strong> — Le{" "}
              <Link href="/eligibilite">test en 3 questions</Link>{" "}
              permet d&apos;identifier rapidement les premiers signaux dans votre dossier.
            </li>
            <li>
              <strong>Réaliser une simulation indicative</strong> — Le{" "}
              <Link href="/simulation">simulateur</Link>{" "}
              donne un ordre de grandeur de l&apos;impact du taux EUR/CHF sur votre capital ou votre coût de
              remboursement.
            </li>
            <li>
              <strong>Rassembler les documents</strong> — Réunissez l&apos;offre de prêt, les notices, les simulations
              remises par la banque, les tableaux d&apos;amortissement et les avenants éventuels.
            </li>
            <li>
              <strong>Comparer avec les exigences de transparence</strong> — Vérifiez si les documents remis
              contenaient des explications claires et des simulations chiffrées sur le risque de change.
            </li>
            <li>
              <strong>Solliciter une lecture individualisée si nécessaire</strong> — Une analyse spécifique du
              contrat et des pièces disponibles est indispensable avant toute démarche.
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
            <h2>Votre prêt CHF est-il concerné par ces évolutions ?</h2>
            <p>
              Le test d&apos;éligibilité permet d&apos;identifier les signaux à vérifier dans votre dossier, à la lumière
              des critères jurisprudentiels récents.
            </p>
            <div className="article-cta-actions">
              <Link href="/jurisprudence" className="juri-cta-primary-btn">
                Comprendre la jurisprudence complète
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
