import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Prêt frontalier Suisse et CHF : risques à vérifier | Prêts CHF Info",
  description:
    "Comprendre les points à vérifier lorsqu'un frontalier suisse a souscrit un prêt immobilier lié au franc suisse pour financer un bien en France.",
  alternates: { canonical: `${SITE_URL}/guides/pret-frontalier-suisse-chf` },
  openGraph: {
    title: "Prêt frontalier Suisse et CHF : risques à vérifier | Prêts CHF Info",
    description:
      "Revenus en CHF, bien en France, revente ou retraite : les points à vérifier dans un prêt immobilier en francs suisses souscrit par un frontalier.",
    url: `${SITE_URL}/guides/pret-frontalier-suisse-chf`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prêt frontalier Suisse et CHF : risques à vérifier | Prêts CHF Info",
    description:
      "Les points à vérifier dans un prêt immobilier en francs suisses souscrit par un frontalier : risque de change, clauses, documents et jurisprudence.",
  },
};

const checklistDocs = [
  "Offre de prêt originale",
  "Conditions particulières du contrat",
  "Conditions générales du prêt",
  "Notice d'information sur le risque de change",
  "Simulations chiffrées remises par la banque",
  "Tableau d'amortissement initial",
  "Tableaux d'amortissement actualisés",
  "Avenants ou actes de renégociation",
  "Courriers et e-mails échangés avec la banque",
  "Justificatifs de revenus au moment de la souscription",
];

const faq = [
  {
    q: "Un frontalier payé en CHF peut-il être concerné par l'analyse d'un prêt CHF ?",
    a: "Oui, selon les circonstances. Le fait d'être payé en CHF ne protège pas nécessairement contre le risque de change, notamment si le bien financé est situé en France et valorisé en euros. L'analyse dépend des clauses du contrat, des documents remis et de l'évolution de la situation personnelle.",
  },
  {
    q: "Le prêt frontalier en CHF est-il toujours risqué ?",
    a: "Non. Certains contrats comportaient une information claire, des simulations détaillées et des notices précises. L'analyse ne peut pas conclure au risque de façon automatique. Elle dépend du contrat signé, des pièces disponibles et de la situation de l'emprunteur.",
  },
  {
    q: "Le bien situé en France change-t-il l'analyse d'un prêt frontalier ?",
    a: "Oui, significativement. Un bien valorisé en euros doit être vendu en euros. Si le CHF s'est apprécié, le capital restant dû en euros peut dépasser le produit de la vente. Ce décalage entre la devise du prêt et la devise du bien est un élément central de l'analyse.",
  },
  {
    q: "Quels documents vérifier en priorité pour un prêt frontalier CHF ?",
    a: "L'offre de prêt, les conditions particulières, la notice d'information sur le risque de change et les simulations chiffrées remises avant signature sont les pièces les plus importantes. Les justificatifs de revenus en CHF au moment de la souscription complètent le dossier.",
  },
  {
    q: "Une simulation indicative suffit-elle à analyser un prêt frontalier ?",
    a: "Non. La simulation donne un ordre de grandeur sur l'impact du taux EUR/CHF, mais elle ne remplace pas l'analyse du contrat, des clauses et des documents remis. Elle constitue un premier outil pédagogique, non une conclusion.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/pret-frontalier-suisse-chf`,
      headline: "Prêt frontalier Suisse et CHF : quels risques vérifier ?",
      description:
        "Guide pédagogique sur les points à vérifier dans un prêt immobilier en francs suisses souscrit par un frontalier suisse.",
      url: `${SITE_URL}/guides/pret-frontalier-suisse-chf`,
      datePublished: "2025-05-20",
      dateModified: "2025-05-20",
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: "Prêts CHF Info" },
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
      mainEntityOfPage: `${SITE_URL}/guides/pret-frontalier-suisse-chf`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prêt frontalier Suisse et CHF",
          item: `${SITE_URL}/guides/pret-frontalier-suisse-chf`,
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

export default function GuideFrontalierCHF() {
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
              <Link href="/guides">Guides</Link>
              <span className="article-breadcrumb-sep">›</span>
              <span>Prêt frontalier Suisse et CHF</span>
            </nav>
            <span className="article-cat-badge">Frontaliers</span>
            <h1>Prêt frontalier Suisse et CHF : quels risques vérifier ?</h1>
            <p className="article-hero-intro">
              Un prêt en francs suisses peut sembler cohérent pour un frontalier
              percevant des revenus en CHF. Mais le risque doit être apprécié sur
              toute la durée du prêt : si le bien est situé en France, si les
              revenus évoluent ou si le prêt doit être soldé, l'exposition au
              change peut devenir significative.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px", fontStyle: "italic", opacity: 0.85 }}>
              Ce guide est informatif et pédagogique. Il ne constitue pas un avis
              juridique personnalisé et ne permet pas, seul, de conclure à
              l'existence d'un recours.
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

          <h2>Pourquoi les frontaliers ont souscrit des prêts en francs suisses</h2>
          <p>
            Entre 2005 et 2015, de nombreux frontaliers résidant en France et
            travaillant en Suisse ont souscrit des prêts immobiliers libellés
            ou remboursables en francs suisses. Plusieurs facteurs expliquaient
            l'attractivité de ce type de produit à l'époque.
          </p>
          <ul>
            <li>
              <strong>Revenus en CHF :</strong> un frontalier percevant son
              salaire en francs suisses pouvait rembourser un prêt dans la même
              devise, évitant ainsi — en apparence — tout risque de conversion.
              Cette cohérence semblait protéger contre les fluctuations du taux
              de change.
            </li>
            <li>
              <strong>Taux attractifs :</strong> les taux d'intérêt pratiqués
              sur les prêts en CHF étaient souvent inférieurs à ceux des prêts
              en euros, ce qui représentait un avantage financier immédiat sur
              les mensualités.
            </li>
            <li>
              <strong>Achat immobilier en France :</strong> le bien financé
              était situé en France, dans des zones frontalières (Haute-Savoie,
              Ain, Doubs, Haut-Rhin, Territoire de Belfort). Son prix et sa
              valeur de revente étaient exprimés en euros.
            </li>
            <li>
              <strong>Logique apparente au moment de la souscription :</strong>{" "}
              la combinaison revenus-en-CHF / prêt-en-CHF semblait équilibrée.
              Ce n'est que sur la durée, notamment avec l'appréciation du franc
              suisse, que le risque a pu se révéler.
            </li>
          </ul>
          <p>
            Pour comprendre la spécificité de cette situation,{" "}
            <Link href="/blog/pret-chf-frontalier">
              consultez notre article dédié aux prêts CHF frontaliers
            </Link>
            .
          </p>

          <h2>Le risque de change pour un frontalier</h2>
          <p>
            La cohérence apparente entre revenus en CHF et prêt en CHF peut
            masquer plusieurs sources de risque qui se révèlent sur la durée
            ou lors d'événements particuliers.
          </p>
          <ul>
            <li>
              <strong>Bien valorisé en euros :</strong> quelle que soit la
              devise du prêt, la valeur du bien immobilier situé en France est
              exprimée en euros. C'est en euros que l'emprunteur peut le vendre
              et que le marché l'évalue.
            </li>
            <li>
              <strong>Dette ou capital lié au CHF :</strong> le capital restant
              dû est exprimé en francs suisses. Si le CHF s'apprécie, ce capital
              représente un montant plus important en euros, même si les
              mensualités semblent stables.
            </li>
            <li>
              <strong>Revente du bien :</strong> lors d'une cession immobilière,
              le produit de la vente en euros doit couvrir un capital restant
              dû en CHF. En cas d'appréciation du franc suisse, le produit de
              la vente peut s'avérer insuffisant.
            </li>
            <li>
              <strong>Remboursement anticipé :</strong> si le prêt est soldé
              avant son terme — suite à un rachat de crédit, un refinancement ou
              une décision personnelle — le montant en euros à rembourser dépend
              du taux de change du jour, qui peut être très différent du taux
              de souscription.
            </li>
            <li>
              <strong>Perte d'emploi suisse :</strong> un licenciement, une
              rupture de contrat ou un retour à un emploi en France met fin aux
              revenus en CHF. L'emprunteur doit alors continuer à rembourser
              en CHF — ou à couvrir le change — depuis des revenus désormais
              en euros.
            </li>
            <li>
              <strong>Retraite ou revenus en euros :</strong> même progressive,
              la transition vers la retraite ou vers un emploi en France modifie
              l'équation initiale. L'exposition au risque de change devient
              plus directe lorsque les revenus ne sont plus en CHF.
            </li>
          </ul>
          <p>
            Pour mesurer cet impact, la{" "}
            <Link href="/simulation">simulation indicative prêt CHF</Link>{" "}
            permet d'estimer l'effet d'une variation EUR/CHF sur le capital.
            Pour comprendre les mécanismes sous-jacents,{" "}
            <Link href="/blog/risque-change-pret-chf">
              consultez notre article sur le risque de change dans les prêts CHF
            </Link>
            .
          </p>

          <h2>Prêt frontalier et bien situé en France</h2>
          <p>
            La localisation du bien immobilier est un élément structurant de
            l'analyse. Un bien situé en France présente des caractéristiques
            importantes à prendre en compte.
          </p>
          <ul>
            <li>
              <strong>Valeur en euros :</strong> les prix de l'immobilier en
              France sont cotés en euros. La valeur du bien évolue en euros,
              indépendamment du taux EUR/CHF. Cette valorisation en euros
              constitue la référence en cas de revente ou de refinancement.
            </li>
            <li>
              <strong>Marché immobilier français :</strong> les fluctuations
              du marché immobilier local (Haute-Savoie, bassin genevois,
              région de Bâle, Franche-Comté) s'expriment en euros. Un bien
              peut prendre de la valeur en euros tout en générant un manque
              à couvrir si le capital en CHF a davantage progressé.
            </li>
            <li>
              <strong>Décalage possible entre dette et valeur du bien :</strong>{" "}
              si le franc suisse s'est fortement apprécié, le capital restant
              dû en CHF peut représenter en euros une somme supérieure à la
              valeur du bien. Cette situation, qualifiée de dette supérieure
              au patrimoine, peut survenir même si l'emprunteur a remboursé
              régulièrement ses mensualités.
            </li>
          </ul>

          <div className="article-inline-cta">
            <p className="article-inline-cta-text">
              Vous êtes frontalier et souhaitez identifier les signaux présents
              dans votre dossier prêt CHF ?
            </p>
            <Link href="/eligibilite" className="article-inline-cta-btn">
              Tester votre éligibilité →
            </Link>
          </div>

          <h2>Les clauses à vérifier dans le contrat</h2>
          <p>
            Indépendamment du statut de frontalier, l'analyse d'un prêt CHF
            repose sur la lecture attentive des clauses contractuelles.
          </p>
          <ul>
            <li>
              <strong>Clause de devise :</strong> précise dans quelle monnaie
              le capital est exprimé et les règles applicables en cas de
              variation du taux de change. C'est la clause fondatrice du
              mécanisme CHF.
            </li>
            <li>
              <strong>Clause de conversion :</strong> définit les modalités
              de passage entre CHF et EUR — taux appliqué, moment de la
              conversion, frais éventuels. Sa clarté conditionne la
              compréhension du mécanisme.
            </li>
            <li>
              <strong>Clause de remboursement :</strong> précise comment les
              mensualités sont calculées, dans quelle devise elles sont
              effectuées et ce qui se passe en cas de variation du taux.
            </li>
            <li>
              <strong>Clause de risque de change :</strong> décrit les
              conséquences d'une variation EUR/CHF sur le capital restant dû
              et le coût total du crédit. Sa précision et son intelligibilité
              sont des éléments centraux de l'analyse.
            </li>
            <li>
              <strong>Clause liée au capital restant dû :</strong> certains
              contrats précisaient comment le capital était recalculé à chaque
              échéance selon le taux de change. Ce mécanisme peut produire une
              augmentation du capital même en cas de remboursement régulier.
            </li>
            <li>
              <strong>Clause de remboursement anticipé :</strong> définit les
              conditions du solde avant terme, notamment le taux de change
              appliqué à la date du remboursement et les indemnités éventuelles.
            </li>
            <li>
              <strong>Prêt in fine :</strong> si le prêt est structuré en
              in fine, le capital est remboursé en une seule fois à l'échéance.
              En cas de franc fort, ce remboursement final peut être très
              supérieur au montant initialement emprunté.
            </li>
          </ul>
          <p>
            Pour approfondir la lecture des clauses,{" "}
            <Link href="/blog/clause-abusive-pret-chf">
              consultez notre article sur les clauses à vérifier dans un prêt CHF
            </Link>
            .
          </p>

          <h2>Les documents utiles pour analyser un prêt frontalier CHF</h2>
          <p>
            Pour permettre une analyse complète, les pièces suivantes sont à
            réunir. En cas de documents manquants, une demande à la banque
            permet généralement d'en obtenir des copies.
          </p>
          <ul className="article-checklist">
            {checklistDocs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            Pour une présentation détaillée de chaque pièce et des conseils
            pour retrouver les documents manquants,{" "}
            <Link href="/blog/documents-pret-chf">
              consultez notre guide complet sur les documents utiles pour un
              prêt CHF
            </Link>
            .
          </p>

          <h2>Jurisprudence et frontaliers</h2>
          <p>
            La jurisprudence récente sur les prêts CHF n'exclut pas les
            frontaliers du périmètre d'analyse. Plusieurs points méritent
            attention.
          </p>
          <ul>
            <li>
              <strong>Le frontalier n'est pas automatiquement exclu :</strong>{" "}
              le fait de percevoir des revenus en CHF au moment de la
              souscription ne suffit pas à exclure toute question sur
              l'information remise. La jurisprudence apprécie la qualité de
              l'information délivrée, quelle que soit la situation
              professionnelle initiale de l'emprunteur.
            </li>
            <li>
              <strong>L'analyse dépend des documents :</strong> c'est le
              contenu du contrat, la qualité des notices d'information et
              la pertinence des simulations remises qui déterminent le cadre
              de l'analyse — pas le statut de frontalier en lui-même.
            </li>
            <li>
              <strong>Le risque peut être apprécié sur toute la durée :</strong>{" "}
              les décisions récentes ont précisé que l'information sur le
              risque de change devait permettre de mesurer les conséquences
              économiques possibles non seulement à la souscription, mais sur
              l'ensemble de la durée du prêt — y compris en cas de changement
              de situation professionnelle.
            </li>
            <li>
              <strong>L'évolution de situation compte :</strong> la perte
              d'emploi en Suisse, la retraite ou le passage à des revenus en
              euros peut modifier l'appréciation du risque. Ces évolutions
              prévisibles auraient pu, selon les cas, faire partie de
              l'information à délivrer.
            </li>
          </ul>
          <p>
            Pour comprendre les évolutions jurisprudentielles en détail,{" "}
            <Link href="/jurisprudence">
              consultez notre page dédiée à la jurisprudence des prêts CHF
            </Link>{" "}
            et le{" "}
            <Link href="/guides/dernieres-jurisprudences-franc-suisse-particuliers">
              guide sur les dernières jurisprudences franc suisse
            </Link>
            .
          </p>

          <h2>Comment vérifier sa situation de frontalier CHF</h2>
          <ol>
            <li>
              <strong>Identifier la devise exacte du prêt :</strong> relire la
              première page de l'offre de prêt pour confirmer si le capital est
              libellé en CHF, remboursable en CHF ou indexé sur le CHF.
            </li>
            <li>
              <strong>Faire le test d'éligibilité :</strong> le{" "}
              <Link href="/eligibilite">test d'éligibilité</Link>{" "}
              identifie en 3 questions les principaux signaux présents dans
              votre dossier, en tenant compte de votre situation de frontalier.
            </li>
            <li>
              <strong>Simuler l'impact du taux de change :</strong> la{" "}
              <Link href="/simulation">simulation indicative</Link>{" "}
              permet d'estimer l'écart entre le capital initial et ce que
              représente le capital restant dû en euros aujourd'hui.
            </li>
            <li>
              <strong>Rassembler les documents :</strong> réunir l'offre de
              prêt, les conditions particulières, la notice d'information et
              les simulations remises avant signature. Si des pièces manquent,
              les demander à la banque.
            </li>
            <li>
              <strong>Comparer avec la jurisprudence :</strong> vérifier si
              les clauses de votre contrat et les documents remis correspondent
              aux critères de transparence retenus par la jurisprudence récente
              sur les prêts CHF.
            </li>
          </ol>

          <div className="article-retenir">
            <p className="article-retenir-label">À retenir</p>
            <ul>
              <li>
                Le statut de frontalier ne protège pas contre le risque de
                change lorsque le bien est situé en France et valorisé en euros.
              </li>
              <li>
                Une perte d'emploi suisse, une retraite ou une revente du bien
                peut cristalliser le risque de change, même pour un frontalier
                initialement payé en CHF.
              </li>
              <li>
                L'analyse repose sur les clauses contractuelles et les documents
                remis avant signature — pas uniquement sur le statut de
                frontalier.
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
            Ce guide a une vocation pédagogique et ne constitue pas un avis
            juridique personnalisé. L'analyse dépend toujours du contrat, des
            documents remis et de la situation de l'emprunteur.
          </p>

          <Link href="/guides" className="article-back">
            ← Retour aux guides
          </Link>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="article-cta-section">
        <div className="section-inner">
          <div className="article-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Étape suivante</p>
            <h2>Vérifier votre dossier prêt frontalier CHF</h2>
            <p>
              Le test d'éligibilité identifie les signaux clés de votre dossier.
              La simulation indicative estime l'impact du taux EUR/CHF sur votre
              capital.
            </p>
            <div className="article-cta-actions">
              <Link href="/eligibilite" className="juri-cta-primary-btn">
                Tester mon éligibilité
              </Link>
              <Link href="/simulation" className="juri-cta-secondary-btn">
                Faire une simulation indicative
              </Link>
            </div>
            <p style={{ marginTop: "18px", textAlign: "center", fontSize: "14px", opacity: 0.7 }}>
              <Link href="/jurisprudence" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                Comprendre la jurisprudence prêt CHF →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
