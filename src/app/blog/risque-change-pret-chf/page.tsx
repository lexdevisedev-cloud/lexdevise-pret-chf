import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF",
  description:
    "Comprenez comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses et pourquoi une simulation indicative peut être utile.",
  alternates: { canonical: `${SITE_URL}/blog/risque-change-pret-chf` },
  openGraph: {
    title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF",
    description:
      "Comprenez comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses.",
    url: `${SITE_URL}/blog/risque-change-pret-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Le risque de change d'un prêt CHF concerne-t-il seulement les mensualités ?",
    a: "Non. Le risque porte principalement sur le capital restant dû. Même si les mensualités restent stables, le montant à rembourser exprimé en euros peut augmenter si le franc suisse s'apprécie. C'est souvent lors d'une revente ou d'un remboursement anticipé que l'impact devient visible.",
  },
  {
    q: "Peut-on estimer l'impact du risque de change avant de contacter un professionnel ?",
    a: "Une simulation indicative permet d'obtenir un ordre de grandeur. Elle ne remplace pas une analyse juridique ou financière, mais peut aider à visualiser l'impact d'une variation EUR/CHF sur le capital d'un prêt.",
  },
  {
    q: "La banque devait-elle expliquer ce risque de façon chiffrée ?",
    a: "Selon les exigences progressivement affirmées par la jurisprudence, une simple mention abstraite du risque de change peut ne pas suffire. Des simulations illustrant plusieurs scénarios de variation EUR/CHF étaient attendues pour que l'emprunteur puisse comprendre concrètement son engagement.",
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
        "Un guide simple pour comprendre comment l'évolution du franc suisse peut modifier la contrevaleur d'un capital ou d'un remboursement.",
      url: `${SITE_URL}/blog/risque-change-pret-chf`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
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
        { "@type": "ListItem", position: 3, name: "Risque de change prêt CHF", item: `${SITE_URL}/blog/risque-change-pret-chf` },
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
            <h1>Risque de change prêt CHF : comprendre l'impact EUR/CHF</h1>
            <p className="article-hero-intro">
              Le risque de change d'un prêt en francs suisses porte
              principalement sur le capital restant dû : lorsque le franc suisse
              s'apprécie face à l'euro, la contrevaleur en euros de ce capital
              augmente mécaniquement. Ce guide explique simplement comment ce
              mécanisme fonctionne et pourquoi une simulation indicative peut
              être utile.
            </p>
            <div className="article-meta">
              <span>Risque de change</span>
              <span className="article-meta-sep" />
              <span>5 min de lecture</span>
              <span className="article-meta-sep" />
              <span>Mai 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Comprendre le taux EUR/CHF</h2>
          <p>
            Le taux de change EUR/CHF indique combien de francs suisses
            correspondent à un euro à un instant donné. Lorsque ce taux baisse,
            cela signifie que l'euro perd de la valeur face au franc suisse — ou
            inversement, que le franc suisse devient plus fort.
          </p>
          <p>
            Pour un prêt immobilier libellé en CHF, c'est ce rapport qui
            détermine combien d'euros il faudra mobiliser pour rembourser une
            somme en francs suisses. Un taux de 1,50 signifie qu'un franc suisse
            vaut 0,67 euro. Un taux de 0,93 signifie qu'un franc suisse vaut
            désormais plus d'un euro.
          </p>

          <h2>Dette en CHF, bien en euros : une asymétrie structurelle</h2>
          <p>
            C'est l'un des points les plus importants à comprendre. Lorsqu'un
            emprunteur souscrit un prêt en francs suisses pour financer un bien
            situé en France, il crée une asymétrie structurelle : le bien est en
            euros, la dette est en CHF.
          </p>
          <p>
            Tant que le bien prend de la valeur en euros et que le franc suisse
            reste stable, cette asymétrie peut paraître sans conséquence. Mais si
            le franc suisse s'apprécie — comme ce fut le cas après 2008 — la
            situation peut se renverser. La valeur du bien en euros peut rester
            identique tandis que la dette en CHF convertie en euros augmente.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le risque de change ne se limite pas aux mensualités : il touche surtout le capital restant dû.</li>
              <li>La revente ou le remboursement anticipé sont les moments les plus exposés.</li>
              <li>Une variation EUR/CHF de 30 % sur 15 ans peut représenter plusieurs dizaines de milliers d'euros.</li>
            </ul>
          </div>

          <h2>L'impact sur le capital restant dû</h2>
          <p>
            Prenons un exemple indicatif. Un prêt souscrit en 2007 pour un
            capital de 200 000 CHF, à une époque où 1 euro valait environ 1,65
            CHF, correspondait à une dette d'environ 121 000 euros. En 2025, ce
            même capital de 200 000 CHF (s'il était encore dû) représente plus
            de 210 000 euros, car 1 euro ne vaut plus que 0,93 CHF.
          </p>
          <p>
            Cet exemple est purement illustratif et indicatif. Chaque dossier est
            différent selon la date de souscription, le taux contractuel, le
            type de prêt (in fine ou amortissable) et les remboursements déjà
            effectués. Une simulation personnalisée peut aider à visualiser
            l'impact sur une situation spécifique.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous souhaitez estimer l'impact du taux EUR/CHF sur votre prêt ?
              La simulation indicative vous donne un ordre de grandeur.
            </p>
            <Link href="/simulation" className="article-inline-cta-btn">
              Faire une simulation →
            </Link>
          </div>

          <h2>Revente et remboursement anticipé : les moments les plus sensibles</h2>
          <p>
            Le risque de change d'un prêt CHF devient particulièrement visible
            dans deux situations : la revente du bien immobilier et le
            remboursement anticipé.
          </p>
          <p>
            Lors d'une revente, le prix de vente est encaissé en euros. Si le
            capital restant dû — exprimé en CHF — dépasse ce prix de vente une
            fois converti, l'emprunteur doit combler la différence de sa propre
            poche. Ce scénario, souvent désigné comme une situation de
            "capital négatif en devise", peut bloquer une revente ou entraîner
            une perte réelle.
          </p>
          <p>
            Pour le remboursement anticipé, la logique est identique : le
            montant à solder dépend du taux de change en vigueur le jour du
            remboursement. Un franc suisse fort peut donc rendre un remboursement
            anticipé nettement plus coûteux qu'anticipé.
          </p>

          <h2>Ce que l'emprunteur devait pouvoir comprendre</h2>
          <p>
            La jurisprudence récente rappelle que l'emprunteur devait être mis en
            mesure de mesurer concrètement les effets du risque de change. Cela
            suppose une information qui va au-delà d'une mention générale : des
            simulations chiffrées sur différents scénarios EUR/CHF, projetées sur
            la durée réelle du prêt.
          </p>
          <p>
            Si cette information n'a pas été fournie — ou si elle était trop
            abstraite pour permettre une compréhension réelle — cela peut ouvrir
            une piste d'analyse. Pour en savoir plus sur les exigences
            jurisprudentielles,{" "}
            <Link href="/jurisprudence">
              consultez notre page sur la jurisprudence des prêts CHF
            </Link>
            .
          </p>

          <h2>Comment se préparer à l'analyse</h2>
          <p>
            Avant de faire analyser un dossier, il est utile de rassembler les
            documents disponibles : offre de prêt originale, conditions
            générales et particulières, tableaux d'amortissement, simulations
            remises par la banque et relevés de compte en CHF.
          </p>
          <p>
            Ces pièces permettent de vérifier si l'information sur le risque de
            change était présente, chiffrée et personnalisée. Pour plus de
            détails,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
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
            <h2>Estimez l'impact EUR/CHF sur votre prêt</h2>
            <p>
              La simulation indicative vous permet de visualiser l'impact d'une
              variation du taux de change sur votre capital restant dû ou votre
              coût de remboursement.
            </p>
            <div className="article-cta-actions">
              <Link href="/simulation" className="juri-cta-primary-btn">
                Faire une simulation indicative
              </Link>
              <Link href="/eligibilite" className="juri-cta-secondary-btn">
                Tester votre éligibilité à un recours prêt CHF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
