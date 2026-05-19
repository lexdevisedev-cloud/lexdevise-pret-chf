import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt CHF déjà remboursé : analyse possible ? | Prêts CHF Info",
  description:
    "Un prêt en francs suisses déjà remboursé, renégocié ou soldé peut parfois mériter une vérification selon les dates, les documents disponibles et la situation du dossier.",
  alternates: { canonical: `${SITE_URL}/blog/pret-chf-deja-rembourse` },
  openGraph: {
    title: "Prêt CHF déjà remboursé : analyse possible ?",
    description:
      "Revente, rachat de crédit, prêt soldé à échéance : quelles questions se posent encore après le remboursement d'un prêt CHF ?",
    url: `${SITE_URL}/blog/pret-chf-deja-rembourse`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt CHF déjà remboursé : analyse possible ?",
    description:
      "Revente, rachat de crédit, prêt soldé à échéance : quelles questions se posent encore après le remboursement d'un prêt CHF ?",
  },
};

const faq = [
  {
    q: "Un prêt CHF remboursé peut-il encore être vérifié ?",
    a: "Le remboursement d'un prêt ne met pas automatiquement fin à toutes les questions qui peuvent se poser sur l'information délivrée lors de la souscription ou les conséquences économiques subies. Des délais légaux s'appliquent selon la nature des demandes et les circonstances propres à chaque dossier.",
  },
  {
    q: "Le remboursement anticipé empêche-t-il toute analyse ?",
    a: "Non. Le remboursement anticipé est souvent le moment où l'impact du risque de change est le plus visible : si le franc suisse s'est apprécié depuis la souscription, le capital soldé en euros peut dépasser le capital initial. Ce surcoût peut être estimé de façon indicative.",
  },
  {
    q: "Quels documents faut-il retrouver pour un prêt soldé ?",
    a: "L'offre de prêt initiale, les conditions générales et particulières, les tableaux d'amortissement, le décompte de remboursement final, les avenants et les échanges avec la banque lors du remboursement sont les pièces les plus utiles. La banque est tenue de conserver les contrats et peut en fournir des copies sur demande.",
  },
  {
    q: "Les délais sont-ils importants pour un prêt remboursé ?",
    a: "Oui. Des délais légaux s'appliquent selon la nature des questions posées, le type d'action envisagée et les dates des faits. Ces délais varient selon les circonstances propres à chaque dossier. Un prêt remboursé il y a plusieurs années peut parfois encore être analysé, mais pas nécessairement dans les mêmes conditions qu'un prêt en cours.",
  },
  {
    q: "La revente du bien révèle-t-elle le risque de change subi ?",
    a: "Souvent oui. Lors d'une revente, le capital restant dû en CHF doit être soldé. Si le franc suisse s'est apprécié depuis la souscription, ce capital représente une somme plus importante en euros qu'anticipé. Le décompte notarial de la vente permet de reconstituer le montant effectivement payé pour solder le prêt.",
  },
];

const situationsCards = [
  {
    title: "Revente du bien immobilier",
    text:
      "Le prêt a été soldé lors de la cession du bien. Si le CHF s'était apprécié, le capital restant dû en euros au moment de la vente pouvait dépasser la valeur initiale du prêt. Le décompte notarial permet de reconstituer ce montant.",
  },
  {
    title: "Rachat de crédit",
    text:
      "Le prêt CHF a été refinancé par un crédit en euros. Les conditions de cette opération — taux de change appliqué, indemnités de remboursement anticipé, nouveau capital — méritent d'être examinées.",
  },
  {
    title: "Renégociation avec la banque",
    text:
      "Le prêt a été restructuré ou converti en euros suite à une démarche auprès de l'établissement prêteur. Les modalités de la renégociation (taux, capital converti, clause de sortie) constituent un élément du dossier.",
  },
  {
    title: "Prêt soldé à l'échéance normale",
    text:
      "Le prêt a suivi son cours jusqu'au terme prévu. Si le franc suisse s'est apprécié sur la durée, la somme totale remboursée en euros peut dépasser sensiblement le capital initial. Les tableaux d'amortissement permettent d'en estimer l'ampleur.",
  },
  {
    title: "Remboursement anticipé volontaire",
    text:
      "L'emprunteur a soldé le prêt avant le terme, par exemple suite à un changement professionnel ou personnel. Le taux de change en vigueur à cette date détermine le montant effectivement remboursé en euros.",
  },
  {
    title: "Héritage ou séparation",
    text:
      "Le prêt a été soldé dans le cadre d'une succession ou d'une séparation. Selon les circonstances et les conditions du remboursement, des questions spécifiques peuvent se poser sur la répartition du surcoût lié au change.",
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
      dateModified: "2025-05-19",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Prêt CHF déjà remboursé",
          item: `${SITE_URL}/blog/pret-chf-deja-rembourse`,
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
              mériter une vérification. Ce guide présente les éléments à
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

          <h2>Pourquoi un prêt remboursé peut encore poser question</h2>
          <p>
            Il est souvent admis, à tort, qu'une fois un prêt remboursé, il ne
            peut plus faire l'objet d'aucune vérification. En réalité, le
            remboursement d'un prêt CHF ne met pas automatiquement fin à toutes
            les questions qui peuvent se poser sur l'information délivrée lors
            de la souscription, les clauses contractuelles ou les conséquences
            économiques subies.
          </p>
          <p>
            Les{" "}
            <Link href="/blog/clause-abusive-pret-chf">clauses abusives dans les prêts CHF</Link>{" "}
            et le{" "}
            <Link href="/blog/risque-change-pret-chf">risque de change</Link>{" "}
            existaient au moment de la souscription, indépendamment de ce qui
            s'est passé ensuite. Le remboursement clôt la relation bancaire,
            mais pas nécessairement les questions sur les conditions dans
            lesquelles le contrat a été conclu ou exécuté.
          </p>
          <p>
            Tout dépend de la nature des questions posées, des délais légaux
            applicables et des documents disponibles. Ces éléments sont
            spécifiques à chaque dossier et doivent être appréciés
            individuellement, de préférence avec l'aide d'un professionnel.
          </p>

          <h2>Les situations fréquentes après remboursement</h2>
          <p>
            Le terme "prêt remboursé" recouvre plusieurs réalités très
            différentes, qui n'appellent pas le même type d'analyse.
          </p>
          <div className="juri-four-grid">
            {situationsCards.map((card, i) => (
              <div key={i} className="juri-revirement-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <h2>Quels documents retrouver après un prêt soldé ?</h2>
          <p>
            Pour un prêt déjà remboursé, les pièces à réunir sont les mêmes
            que pour un prêt en cours, auxquelles s'ajoutent les documents
            liés aux conditions du remboursement.
          </p>
          <ul>
            <li>
              <strong>L'offre de prêt initiale :</strong> socle contractuel
              contenant les clauses de devise, de remboursement et de risque de
              change. La banque est tenue de la conserver et peut en fournir une
              copie sur demande écrite.
            </li>
            <li>
              <strong>Le décompte de remboursement final :</strong> document
              remis lors du solde du prêt, précisant le capital restant dû en
              CHF, le taux de change appliqué le jour du solde, les éventuelles
              indemnités de remboursement anticipé et le montant total payé.
            </li>
            <li>
              <strong>Les tableaux d'amortissement :</strong> utiles pour
              retracer l'évolution du capital tout au long de la vie du prêt et
              estimer l'impact cumulé des variations EUR/CHF.
            </li>
            <li>
              <strong>Les relevés de compte en CHF :</strong> ils permettent de
              vérifier les versements effectués et de reconstituer l'historique
              du prêt période par période.
            </li>
            <li>
              <strong>Les actes notariés liés à la revente :</strong> en cas de
              cession du bien, le compromis, l'acte définitif et le décompte
              notarial permettent de reconstituer les conditions financières du
              remboursement.
            </li>
            <li>
              <strong>Les avenants et actes de renégociation :</strong>{" "}
              indispensables si le prêt a été restructuré ou converti avant
              d'être soldé.
            </li>
            <li>
              <strong>Les échanges écrits avec la banque :</strong> courriers,
              e-mails, comptes rendus de rendez-vous lors du remboursement ou
              de la renégociation.
            </li>
          </ul>
          <p>
            Pour une liste complète des pièces à réunir,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide sur les documents utiles pour un prêt CHF
            </Link>
            .
          </p>

          <h2>La question des délais et de la prescription</h2>
          <p>
            Les délais légaux constituent l'un des points les plus délicats pour
            les prêts déjà remboursés. Ils varient selon la nature des demandes,
            le type de contrat, les dates des faits et les circonstances propres
            à chaque dossier. Il n'existe pas de règle universelle applicable à
            tous les cas.
          </p>
          <p>
            Un prêt remboursé récemment peut en principe être analysé dans des
            conditions proches d'un prêt en cours. Un prêt soldé il y a
            plusieurs années nécessite une appréciation spécifique des délais
            applicables à la situation. Dans tous les cas, un examen précoce
            du dossier est préférable à une attente prolongée.
          </p>
          <p>
            Ce point est d'une importance particulière et ne peut être apprécié
            correctement que dans le cadre d'une analyse personnalisée. Aucune
            conclusion générale ne peut être tirée sans examen des éléments
            propres au dossier.
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

          <h2>Le prêt remboursé et la jurisprudence prêt CHF</h2>
          <p>
            La jurisprudence récente sur les prêts CHF ne distingue pas
            systématiquement les prêts en cours des prêts remboursés pour
            apprécier les questions relatives à l'information délivrée lors de
            la souscription. Ce sont les conditions de la conclusion du contrat
            — et non son état actuel — qui constituent le point d'analyse central.
          </p>
          <p>
            Les{" "}
            <Link href="/blog/cour-cassation-9-juillet-2025-pret-chf">
              arrêts de la Cour de cassation du 9 juillet 2025
            </Link>{" "}
            ont précisé les critères d'appréciation des clauses relatives au
            risque de change, sans exclure les prêts soldés du champ d'analyse
            possible. Pour comprendre ces évolutions,{" "}
            <Link href="/jurisprudence">
              consultez notre page dédiée à la jurisprudence des prêts CHF
            </Link>
            .
          </p>

          <h2>Comment commencer une première vérification ?</h2>
          <ol>
            <li>
              <strong>Identifier le type de remboursement :</strong> prêt arrivé
              à échéance, remboursement anticipé, rachat de crédit ou revente.
              Chaque situation appelle une approche spécifique.
            </li>
            <li>
              <strong>Rassembler les documents disponibles :</strong> offre de
              prêt initiale, décompte de remboursement final, tableaux
              d'amortissement, avenants, échanges écrits. Si des pièces
              manquent, une demande à la banque permet souvent de les obtenir.
            </li>
            <li>
              <strong>Estimer l'impact du change :</strong> la{" "}
              <Link href="/simulation">simulation indicative prêt CHF</Link>{" "}
              permet d'obtenir un ordre de grandeur sur l'écart entre le capital
              initial et les sommes effectivement versées en euros.
            </li>
            <li>
              <strong>Vérifier les grandes dates :</strong> date de souscription,
              date de remboursement ou de renégociation, taux de change EUR/CHF
              à ces moments clés. Ces informations figurent dans le contrat et
              le décompte final.
            </li>
            <li>
              <strong>Utiliser le test d'éligibilité :</strong> il permet
              d'identifier les signaux potentiels dans votre dossier à partir
              des informations disponibles, sans engagement.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Le remboursement d'un prêt CHF ne met pas automatiquement fin
                à toute possibilité d'analyse des conditions de souscription.
              </li>
              <li>
                Les conditions du remboursement (date, taux de change, montant
                soldé, décompte final) sont des éléments importants pour
                apprécier l'impact du risque de change.
              </li>
              <li>
                Des délais légaux s'appliquent selon les circonstances propres
                à chaque dossier et ne peuvent être appréciés qu'au cas par cas.
              </li>
            </ul>
          </div>

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
              prêts déjà remboursés pour identifier les signaux à examiner. La
              simulation indicative donne un ordre de grandeur sur l'impact du
              change.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester votre éligibilité prêt CHF
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
