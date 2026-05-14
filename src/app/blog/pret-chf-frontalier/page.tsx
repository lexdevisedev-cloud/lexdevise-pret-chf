import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Prêt CHF frontalier : critères à vérifier",
  description:
    "Découvrez pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat, notamment en cas de bien situé en France.",
  alternates: { canonical: `${SITE_URL}/blog/pret-chf-frontalier` },
  openGraph: {
    title: "Prêt CHF frontalier : critères à vérifier",
    description:
      "Découvrez pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat.",
    url: `${SITE_URL}/blog/pret-chf-frontalier`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Un frontalier payé en CHF est-il forcément protégé contre le risque de change ?",
    a: "Pas nécessairement. Le fait de percevoir des revenus en francs suisses peut réduire le risque de change sur les mensualités, mais ne protège pas de la même façon lorsque le bien est situé en France et que le capital doit être remboursé en euros — notamment en cas de revente.",
  },
  {
    q: "Le statut de frontalier peut-il changer au cours du prêt ?",
    a: "Oui. Un emprunteur peut cesser son activité transfrontalière, partir à la retraite ou changer d'employeur. Si à ce moment-là le capital restant dû est encore libellé en CHF, la situation de change peut devenir défavorable.",
  },
  {
    q: "Ce test est-il suffisant pour connaître ma situation ?",
    a: "Non. Ce guide a une vocation pédagogique. Seule l'analyse du contrat, des notices et des documents remis avant signature permet d'apprécier les éléments propres à chaque dossier.",
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
        "Comprendre pourquoi les frontaliers peuvent être concernés par le risque de change, même lorsqu'ils percevaient des revenus en francs suisses.",
      url: `${SITE_URL}/blog/pret-chf-frontalier`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
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
        { "@type": "ListItem", position: 3, name: "Prêt CHF frontalier", item: `${SITE_URL}/blog/pret-chf-frontalier` },
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
              Un prêt CHF frontalier peut mériter une vérification lorsque le
              crédit est lié au franc suisse, que le bien financé est situé en
              France et que l'information sur le risque de change n'a pas été
              suffisamment claire ou chiffrée. Ce guide pédagogique explique
              pourquoi le statut de frontalier ne constitue pas toujours une
              protection totale.
            </p>
            <div className="article-meta">
              <span>Frontaliers</span>
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

          <h2>Qu'est-ce qu'un prêt CHF frontalier ?</h2>
          <p>
            Un prêt CHF frontalier désigne un crédit immobilier souscrit par un
            emprunteur qui exerce son activité professionnelle en Suisse tout en
            résidant en France. Ces contrats sont souvent libellés en francs
            suisses ou indexés sur le franc suisse, ce qui signifie que le
            capital et parfois les mensualités sont exprimés dans cette devise.
          </p>
          <p>
            À l'époque de souscription, beaucoup de ces emprunteurs percevaient
            leurs revenus directement en CHF. Cette situation pouvait laisser
            penser que le risque de change était naturellement absorbé par la
            structure même du prêt. En réalité, la question est plus complexe.
          </p>

          <h2>Pourquoi les revenus en CHF ne suffisent pas toujours</h2>
          <p>
            Percevoir un salaire en francs suisses couvre effectivement une
            partie du risque de change sur les mensualités courantes. Mais ce
            raisonnement atteint ses limites dans plusieurs situations
            concrètes.
          </p>
          <p>
            D'abord, le bien immobilier financé est en France, libellé en euros.
            Lors d'une revente, c'est le prix en euros qui sera reçu. Si le
            capital restant dû est encore exprimé en CHF, et que le franc suisse
            s'est apprécié, le montant à rembourser en euros peut dépasser le
            prix de cession. C'est là que le risque se matérialise le plus
            clairement.
          </p>
          <p>
            Ensuite, la situation professionnelle peut évoluer. Un frontalier
            peut changer d'employeur, rentrer en France, partir en retraite ou
            traverser une période de chômage. À ce moment-là, les revenus ne
            sont plus en CHF, et le prêt peut devenir une charge difficile à
            absorber.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le bien financé est en euros, le prêt en CHF : une asymétrie fondamentale.</li>
              <li>La revente, la retraite ou un changement professionnel peuvent exposer à une perte de change.</li>
              <li>L'information sur ces scénarios devait être claire, chiffrée et remise avant signature.</li>
            </ul>
          </div>

          <h2>La durée du prêt : un facteur souvent sous-estimé</h2>
          <p>
            Un crédit immobilier s'étend généralement sur 15 à 25 ans. Sur cette
            durée, le taux EUR/CHF peut connaître des variations considérables.
            En 2007, un euro valait environ 1,68 franc suisse. En 2025, ce même
            euro ne vaut plus qu'environ 0,93 franc suisse. Pour un emprunteur
            qui avait souscrit un prêt de 200 000 CHF à cette époque, la
            contrevaleur en euros a augmenté de façon significative.
          </p>
          <p>
            C'est précisément sur ce point que l'exigence d'information
            transparente prend toute son importance. L'emprunteur devait être
            mis en mesure de comprendre que ce risque ne se limitait pas à une
            variation anecdotique, mais pouvait affecter substantiellement le
            coût réel du crédit.
          </p>

          <h2>Ce que la banque devait expliquer</h2>
          <p>
            Selon les exigences progressivement renforcées par la jurisprudence,
            la banque était tenue de fournir une information claire et
            compréhensible sur le risque de change. Cela peut impliquer :
          </p>
          <ul>
            <li>Des simulations chiffrées illustrant plusieurs hypothèses de variation EUR/CHF ;</li>
            <li>Une explication de l'impact sur le capital restant dû en cas d'appréciation du franc suisse ;</li>
            <li>Une mise en garde sur les conséquences possibles en cas de revente ou de remboursement anticipé ;</li>
            <li>Une information personnalisée, non une simple clause abstraite dans les conditions générales.</li>
          </ul>
          <p>
            Si ces éléments n'ont pas été remis ou si la documentation fournie
            ne permettait pas à l'emprunteur de comprendre concrètement son
            engagement, cela peut justifier une vérification du dossier.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous avez souscrit un prêt immobilier en francs suisses en tant
              que frontalier ? Identifiez les signaux à vérifier avant d'aller
              plus loin.
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Dans quels cas vérifier votre prêt CHF frontalier ?</h2>
          <p>
            Certaines situations peuvent justifier une analyse approfondie du
            contrat, sous réserve des documents disponibles et de la situation
            propre à chaque dossier :
          </p>
          <ul>
            <li>Vous avez souscrit le prêt en tant que frontalier, avec un bien situé en France ;</li>
            <li>Vous avez vendu ou revendu le bien et constaté un surcoût lié au change ;</li>
            <li>Vous avez cessé votre activité en Suisse avant d'avoir soldé le prêt ;</li>
            <li>Les documents remis avant signature ne contenaient pas de simulations chiffrées ;</li>
            <li>Vous avez effectué un remboursement anticipé dans un contexte de franc suisse fort.</li>
          </ul>
          <p>
            Ces situations ne garantissent pas un recours, mais peuvent ouvrir
            une piste d'analyse. L'appréciation dépend toujours du contrat, des
            pièces disponibles et des circonstances propres au dossier.
          </p>

          <h2>Prêt frontalier et jurisprudence récente</h2>
          <p>
            Les décisions rendues par la Cour de cassation en 2024 et 2025 ont
            progressivement renforcé l'attention portée à l'information due aux
            emprunteurs. En particulier, le fait de percevoir des revenus en CHF
            n'est plus considéré comme suffisant pour exclure toute question sur
            la transparence de l'information contractuelle.
          </p>
          <p>
            Pour comprendre l'évolution de cette jurisprudence et ses
            implications concrètes,{" "}
            <Link href="/jurisprudence">
              consultez notre analyse de la jurisprudence des prêts CHF
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
            <h2>Votre prêt CHF mérite peut-être une vérification</h2>
            <p>
              Le test d'éligibilité permet d'identifier les signaux à vérifier
              dans un prêt immobilier en francs suisses, qu'il soit en cours ou
              déjà remboursé.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité à un recours prêt CHF
              </Link>
              <Link href="/jurisprudence" className="juri-cta-secondary-btn">
                Comprendre la jurisprudence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
