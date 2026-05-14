import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Prêt CHF déjà remboursé : analyse possible ?",
  description:
    "Un prêt en francs suisses déjà remboursé, renégocié ou soldé peut parfois mériter une vérification selon les dates, les documents disponibles et la situation du dossier.",
  alternates: { canonical: `${SITE_URL}/blog/pret-chf-deja-rembourse` },
  openGraph: {
    title: "Prêt CHF déjà remboursé : analyse possible ?",
    description:
      "Un prêt CHF soldé ou renégocié n'exclut pas forcément toute analyse selon les circonstances.",
    url: `${SITE_URL}/blog/pret-chf-deja-rembourse`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
};

const faq = [
  {
    q: "Existe-t-il un délai pour agir sur un prêt CHF remboursé ?",
    a: "Des délais légaux s'appliquent selon la nature des demandes. Ces délais dépendent du type d'action envisagée, de la date des faits et des circonstances propres au dossier. Un professionnel du droit peut apprécier les délais applicables à une situation spécifique.",
  },
  {
    q: "Un prêt renégocié peut-il encore être analysé ?",
    a: "Oui, sous réserve des documents disponibles et des délais applicables. La renégociation modifie les conditions du prêt, mais ne supprime pas les questions qui peuvent se poser sur l'information initiale ou sur les conditions de la renégociation elle-même.",
  },
  {
    q: "Faut-il encore avoir les documents pour une analyse ?",
    a: "Les documents sont très importants pour permettre une analyse. Même si certaines pièces ont été perdues, il est parfois possible d'en retrouver auprès de la banque, du notaire ou dans des archives personnelles.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/pret-chf-deja-rembourse`,
      headline: "Prêt CHF déjà remboursé : peut-il encore être analysé ?",
      description:
        "Un prêt soldé ou renégocié n'exclut pas forcément toute analyse. Les dates, les documents et les conditions de remboursement doivent être vérifiés.",
      url: `${SITE_URL}/blog/pret-chf-deja-rembourse`,
      datePublished: "2025-05-13",
      dateModified: "2025-05-13",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/blog/pret-chf-deja-rembourse`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "Prêt CHF déjà remboursé", item: `${SITE_URL}/blog/pret-chf-deja-rembourse` },
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

export default function ArticlePretDejaSolde() {
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
              <span>Prêt CHF déjà remboursé</span>
            </nav>
            <span className="article-cat-badge">Situations particulières</span>
            <h1>Prêt CHF déjà remboursé : peut-il encore être analysé ?</h1>
            <p className="article-hero-intro">
              Un prêt en francs suisses soldé, renégocié ou remboursé par
              anticipation n'exclut pas nécessairement toute possibilité
              d'analyse. Selon les dates, les documents disponibles et les
              circonstances du remboursement, certains dossiers peuvent encore
              mériter une vérification. Ce guide explique les éléments à
              considérer avec prudence.
            </p>
            <div className="article-meta">
              <span>Situations particulières</span>
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

          <h2>Un prêt soldé clôt-il toute question juridique ?</h2>
          <p>
            Il est souvent admis, à tort, qu'une fois un prêt remboursé, il ne
            peut plus faire l'objet d'aucune vérification. En réalité, le
            remboursement d'un prêt ne met pas automatiquement fin à toutes les
            questions qui peuvent se poser sur l'information donnée lors de la
            souscription, les conditions contractuelles ou les conséquences
            économiques subies.
          </p>
          <p>
            Tout dépend de la nature des questions posées, des délais légaux
            applicables et des documents disponibles. Ces éléments sont
            spécifiques à chaque dossier et doivent être appréciés
            individuellement.
          </p>

          <h2>Les différentes situations d'un prêt "remboursé"</h2>
          <p>
            Le terme "prêt remboursé" recouvre en réalité plusieurs situations
            très différentes, qui n'appellent pas le même type d'analyse :
          </p>
          <ul>
            <li><strong>Prêt arrivé à échéance normale :</strong> le prêt a suivi son cours naturel, les mensualités ont été honorées jusqu'au terme prévu.</li>
            <li><strong>Remboursement anticipé :</strong> l'emprunteur a soldé le prêt avant le terme, souvent lors d'une revente du bien ou d'un refinancement. C'est dans ce cas que le taux de change du moment peut avoir eu un impact significatif.</li>
            <li><strong>Renégociation :</strong> le prêt a été restructuré, parfois converti en euros, avec de nouvelles conditions. Les modalités de cette renégociation peuvent elles aussi faire l'objet d'une analyse.</li>
            <li><strong>Vente du bien :</strong> le prêt a été soldé suite à la cession du bien immobilier. Si le capital restant dû en CHF excédait le prix de vente converti en euros, une perte de change peut avoir été supportée.</li>
          </ul>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>Le remboursement d'un prêt CHF ne met pas automatiquement fin à toute analyse possible.</li>
              <li>Les conditions du remboursement (date, taux de change, montant soldé) sont des éléments importants.</li>
              <li>Les délais légaux applicables dépendent de la nature des questions et des dates des faits.</li>
            </ul>
          </div>

          <h2>L'importance des dates dans un dossier prêt CHF soldé</h2>
          <p>
            Les dates jouent un rôle central dans l'analyse d'un prêt CHF déjà
            remboursé. La date de souscription du prêt détermine le contexte
            réglementaire applicable. La date du remboursement ou de la
            renégociation fixe le point de référence pour apprécier l'impact du
            taux de change à ce moment précis.
          </p>
          <p>
            Des délais légaux s'appliquent selon la nature des demandes. Ces
            délais varient selon le type d'action, la nature du contrat et les
            circonstances propres au dossier. Un prêt remboursé il y a plusieurs
            années peut parfois encore être analysé, mais pas nécessairement dans
            les mêmes conditions qu'un prêt encore en cours. Un professionnel
            peut apprécier ces délais en fonction de la situation spécifique.
          </p>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Votre prêt CHF est soldé ou renégocié ? Le test d'éligibilité
              permet d'identifier les signaux à vérifier selon votre situation.
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Le remboursement anticipé dans un contexte de franc fort</h2>
          <p>
            Le remboursement anticipé est souvent le moment où l'impact du risque
            de change d'un prêt CHF est le plus visible. Si le franc suisse s'est
            apprécié depuis la souscription, le capital restant dû exprimé en
            CHF représente une somme plus importante en euros qu'au moment de la
            signature.
          </p>
          <p>
            Un emprunteur qui a soldé son prêt lors d'une revente de bien, d'un
            refinancement ou d'une renégociation peut ainsi avoir supporté un
            surcoût lié au change. Ce surcoût peut être estimé de façon indicative
            grâce à la{" "}
            <Link href="/simulation">simulation indicative prêt CHF</Link>.
          </p>

          <h2>La renégociation : un accord qui peut avoir ses propres enjeux</h2>
          <p>
            Lorsqu'un prêt CHF a été renégocié — notamment converti en euros —
            les conditions de cette renégociation méritent attention. À quel taux
            la conversion a-t-elle été réalisée ? L'emprunteur disposait-il de
            toutes les informations pour apprécier les conditions proposées ?
            Y avait-il des alternatives ?
          </p>
          <p>
            Ces questions sont propres à chaque dossier et ne permettent pas de
            conclure à l'existence d'un recours. Elles indiquent simplement que
            la renégociation, comme la souscription initiale, peut faire partie
            des éléments examinés.
          </p>

          <h2>Les documents à conserver ou à retrouver</h2>
          <p>
            Pour un prêt déjà remboursé, les documents utiles à une analyse
            incluent l'offre de prêt originale, les conditions générales et
            particulières, les tableaux d'amortissement, le relevé de
            remboursement final, les éventuels avenants et les échanges avec la
            banque au moment du remboursement.
          </p>
          <p>
            Pour plus de détails sur les pièces à réunir,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
            </Link>
            .
          </p>

          <h2>Jurisprudence et prêts soldés</h2>
          <p>
            La jurisprudence récente n'exclut pas les prêts déjà remboursés du
            champ des analyses possibles. Mais les conditions d'une telle analyse
            dépendent étroitement des circonstances, des délais et des pièces
            disponibles. Pour comprendre les évolutions jurisprudentielles,{" "}
            <Link href="/jurisprudence">
              consultez notre page dédiée à la jurisprudence des prêts CHF
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
            <h2>Votre prêt CHF est soldé : mérite-t-il encore une vérification ?</h2>
            <p>
              Le test d'éligibilité prend en compte les prêts en cours et les
              prêts déjà remboursés pour identifier les signaux à examiner.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité à un recours prêt CHF
              </Link>
              <Link href="/jurisprudence" className="juri-cta-secondary-btn">
                Comprendre la jurisprudence des prêts CHF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
