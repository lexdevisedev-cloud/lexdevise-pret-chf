import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pret-chf-gouv.org";

export const metadata: Metadata = {
  title: "Sources et méthodologie | Prêts CHF Info",
  description:
    "Découvrez comment Prêts CHF Info construit ses contenus pédagogiques sur les prêts immobiliers en francs suisses, les sources utilisées, les limites des informations et la méthode de mise à jour.",
  alternates: { canonical: `${SITE_URL}/sources-methodologie` },
  openGraph: {
    title: "Sources et méthodologie | Prêts CHF Info",
    description:
      "Découvrez comment Prêts CHF Info construit ses contenus pédagogiques sur les prêts immobiliers en francs suisses, les sources utilisées, les limites des informations et la méthode de mise à jour.",
    url: `${SITE_URL}/sources-methodologie`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sources et méthodologie | Prêts CHF Info",
    description:
      "Sources utilisées, méthode éditoriale, limites des informations et mise à jour des contenus de Prêts CHF Info.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/sources-methodologie`,
      url: `${SITE_URL}/sources-methodologie`,
      name: "Sources et méthodologie",
      description:
        "Page expliquant les sources, la méthode éditoriale, les limites et la mise à jour des contenus de Prêts CHF Info.",
      inLanguage: "fr-FR",
      publisher: { "@type": "Organization", name: "Prêts CHF Info" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sources et méthodologie",
          item: `${SITE_URL}/sources-methodologie`,
        },
      ],
    },
  ],
};

export default function SourcesMethodologie() {
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
              <span>Sources et méthodologie</span>
            </nav>
            <span className="article-cat-badge">À propos du site</span>
            <h1>Sources et méthodologie</h1>
            <p className="article-hero-intro">
              Cette page présente la manière dont Prêts CHF Info construit ses
              contenus pédagogiques : les sources utilisées, la méthode
              éditoriale, les limites des informations publiées et la façon
              dont les contenus sont mis à jour.
            </p>
            <p className="article-hero-intro" style={{ marginTop: "14px" }}>
              <strong>
                Prêts CHF Info est un site indépendant d&apos;information
                pédagogique. Il n&apos;est pas affilié à une administration
                publique, à une banque, à une juridiction ou à un service
                gouvernemental.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          <h2>Une information pédagogique et indépendante</h2>
          <p>
            Prêts CHF Info a pour objectif de rendre compréhensibles les
            principaux sujets liés aux prêts immobiliers en francs suisses,
            pour des emprunteurs non spécialisés. Les contenus couvrent
            notamment :
          </p>
          <ul>
            <li>le risque de change et son impact sur le capital restant dû ;</li>
            <li>les clauses de devise et leur fonctionnement ;</li>
            <li>
              l&apos;information bancaire précontractuelle et les obligations
              associées ;
            </li>
            <li>les documents à réunir et à vérifier avant toute démarche ;</li>
            <li>
              la jurisprudence récente de la Cour de cassation et de la CJUE ;
            </li>
            <li>les situations particulières des travailleurs frontaliers ;</li>
            <li>
              les estimations indicatives de l&apos;impact du taux EUR/CHF.
            </li>
          </ul>
          <p>
            Ces contenus ne remplacent pas une analyse personnalisée du
            contrat, des documents bancaires et de la situation de
            l&apos;emprunteur. Ils constituent un premier niveau d&apos;information
            accessible, destiné à orienter la lecture du dossier.
          </p>

          <h2>Les sources utilisées</h2>
          <p>
            Les contenus publiés sur Prêts CHF Info s&apos;appuient sur des sources
            publiques et institutionnelles. Les principales sources consultées
            sont les suivantes.
          </p>
          <ul>
            <li>
              <strong>Cour de cassation :</strong> décisions rendues en
              matière de prêts en devises étrangères, notamment sur
              l&apos;obligation d&apos;information et les clauses contractuelles.
            </li>
            <li>
              <strong>Légifrance :</strong> textes législatifs et
              réglementaires applicables aux contrats de crédit immobilier
              et aux clauses abusives.
            </li>
            <li>
              <strong>Cour de justice de l&apos;Union européenne (CJUE / Curia) :</strong>{" "}
              décisions relatives aux clauses abusives dans les contrats de
              crédit en devise, notamment sur la transparence contractuelle.
            </li>
            <li>
              <strong>Directive 93/13/CEE :</strong> directive européenne
              concernant les clauses abusives dans les contrats conclus avec
              les consommateurs.
            </li>
            <li>
              <strong>Code de la consommation :</strong> dispositions
              applicables aux contrats de crédit immobilier et à l&apos;information
              précontractuelle.
            </li>
            <li>
              <strong>Documents contractuels :</strong> sur la base des
              pièces habituellement nécessaires à l&apos;analyse d&apos;un prêt — offre
              de prêt, conditions générales, notices d&apos;information, tableaux
              d&apos;amortissement.
            </li>
            <li>
              <strong>Informations publiques sur le risque de change :</strong>{" "}
              données relatives à l&apos;évolution historique du taux EUR/CHF et
              à ses effets sur les prêts en devise.
            </li>
          </ul>
          <p>
            Les contenus ne reproduisent pas les textes officiels dans leur
            intégralité. Ils en restituent le sens et les principes de façon
            accessible, en renvoyant aux sources lorsque cela est pertinent.
          </p>

          <h2>Comment les contenus sont rédigés</h2>
          <p>
            Chaque guide, article ou page d&apos;information suit une méthode
            éditoriale constante :
          </p>
          <ul>
            <li>
              les contenus sont rédigés pour être compréhensibles par des
              non-juristes — sans supposer de connaissances bancaires ou
              juridiques préalables ;
            </li>
            <li>
              les termes techniques sont reformulés ou expliqués lorsqu&apos;ils
              apparaissent ;
            </li>
            <li>
              les exemples utilisés sont pédagogiques et illustratifs — ils
              ne constituent pas des cas réels ni des engagements ;
            </li>
            <li>
              les informations sont présentées avec prudence : les formulations
              indiquant qu&apos;une situation &quot;peut&quot; ou &quot;est susceptible de&quot; constituer
              un point d&apos;analyse sont intentionnelles ;
            </li>
            <li>
              aucune page ne conclut automatiquement à l&apos;existence d&apos;un recours,
              d&apos;une annulation ou d&apos;une indemnisation.
            </li>
          </ul>

          <h2>Limites des informations publiées</h2>
          <p>
            Les informations publiées sur Prêts CHF Info sont générales et
            pédagogiques. Elles ne constituent pas un avis juridique, bancaire,
            fiscal ou comptable personnalisé.
          </p>
          <ul>
            <li>
              <strong>Chaque prêt dépend de son contrat :</strong> les
              clauses, les conditions générales et les documents remis à la
              signature peuvent varier significativement d&apos;un établissement à
              l&apos;autre et d&apos;une période à l&apos;autre.
            </li>
            <li>
              <strong>Les documents précontractuels sont déterminants :</strong>{" "}
              la présence ou l&apos;absence de notices d&apos;information, de simulations
              chiffrées ou d&apos;explications claires sur le risque de change
              conditionne l&apos;analyse.
            </li>
            <li>
              <strong>Les délais applicables doivent être vérifiés :</strong>{" "}
              des délais de prescription s&apos;appliquent selon la nature de
              l&apos;action envisagée. Ces délais ne peuvent pas être appréciés
              de façon générale et nécessitent une analyse au cas par cas.
            </li>
            <li>
              <strong>Une décision de jurisprudence ne garantit pas une issue favorable :</strong>{" "}
              les décisions des tribunaux sont rendues au cas par cas, en
              fonction des pièces du dossier, des clauses du contrat et de
              la situation de l&apos;emprunteur. L&apos;existence d&apos;une décision
              favorable dans un autre dossier ne préjuge pas de l&apos;issue
              d&apos;un dossier différent.
            </li>
          </ul>

          <h2>Méthodologie du simulateur</h2>
          <p>
            Le simulateur disponible sur ce site fournit une estimation
            indicative de l&apos;impact du taux EUR/CHF sur un prêt immobilier
            en francs suisses.
          </p>
          <ul>
            <li>
              Il ne calcule pas un préjudice certain, une indemnisation ou
              un montant récupérable.
            </li>
            <li>
              Il sert à donner un ordre de grandeur pédagogique, utile pour
              comprendre l&apos;effet du risque de change sur le capital.
            </li>
            <li>
              Le résultat dépend des informations renseignées par l&apos;utilisateur —
              montant, devise, date de souscription, taux appliqué.
            </li>
            <li>
              L&apos;analyse réelle d&apos;un prêt nécessite les documents originaux :
              offre de prêt, tableaux d&apos;amortissement, conditions générales
              et notices d&apos;information.
            </li>
          </ul>
          <p>
            <Link href="/simulation">Faire une simulation indicative →</Link>
          </p>

          <h2>Méthodologie du test d&apos;éligibilité</h2>
          <p>
            Le test d&apos;éligibilité repose sur trois critères simples permettant
            d&apos;identifier les principaux signaux présents dans un dossier de
            prêt CHF.
          </p>
          <ul>
            <li>
              Il permet d&apos;orienter une première lecture du dossier, pas de
              conclure à l&apos;existence d&apos;un recours.
            </li>
            <li>
              Un résultat positif au test ne confirme pas à lui seul qu&apos;une
              démarche est fondée.
            </li>
            <li>
              Il doit être complété par l&apos;analyse du contrat de prêt, des
              documents remis avant la signature et de la situation personnelle
              de l&apos;emprunteur.
            </li>
          </ul>
          <p>
            <Link href="/eligibilite">Tester les critères d&apos;éligibilité →</Link>
          </p>

          <h2>Mise à jour des contenus</h2>
          <p>
            Les contenus publiés sur Prêts CHF Info sont susceptibles d&apos;être
            mis à jour lorsque des évolutions importantes sont identifiées —
            notamment en cas de nouvelle décision de la Cour de cassation,
            de la CJUE ou d&apos;évolution significative du cadre juridique
            applicable aux prêts en devise.
          </p>
          <ul>
            <li>
              Les guides et articles peuvent être complétés ou corrigés pour
              refléter l&apos;état actuel de la jurisprudence.
            </li>
            <li>
              Les décisions récentes peuvent modifier certains angles
              d&apos;analyse — c&apos;est pourquoi la date de publication ou de
              dernière modification peut être mentionnée dans les articles.
            </li>
            <li>
              Aucune fréquence de mise à jour n&apos;est garantie. Les contenus
              sont revus lorsqu&apos;une évolution pertinente est identifiée.
            </li>
          </ul>

          <h2>Contact</h2>
          <p>
            Pour toute remarque sur les contenus, demande de correction ou
            question relative à la méthodologie :
          </p>
          <p>
            <a href="mailto:contact@lexdevise.com" style={{ color: "var(--primary)", fontWeight: 600 }}>
              contact@lexdevise.com
            </a>
          </p>
          <p>
            Prêts CHF Info s&apos;engage à traiter les signalements sérieux et
            à corriger toute erreur factuelle identifiée dans ses contenus.
          </p>

          <div className="article-retenir">
            <p className="article-retenir-label">En résumé</p>
            <ul>
              <li>
                Prêts CHF Info est un site indépendant d&apos;information
                pédagogique, sans affiliation à une administration, une banque
                ou un cabinet d&apos;avocats.
              </li>
              <li>
                Les contenus s&apos;appuient sur des sources publiques et
                institutionnelles — jurisprudence, textes législatifs,
                directives européennes.
              </li>
              <li>
                Ils ne remplacent pas une analyse personnalisée du dossier
                par un professionnel du droit.
              </li>
            </ul>
          </div>

          <Link href="/" className="article-back">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="article-cta-section">
        <div className="section-inner">
          <div className="article-cta-inner">
            <p className="eyebrow" style={{ color: "#8dc3a5" }}>Pour aller plus loin</p>
            <h2>Consulter les contenus du site</h2>
            <p>
              La jurisprudence prêt CHF présente les décisions récentes de la
              Cour de cassation et de la CJUE. Les guides pratiques approfondissent
              les principales situations liées aux prêts en francs suisses.
            </p>
            <div className="article-cta-actions">
              <Link href="/jurisprudence" className="juri-cta-primary-btn">
                Comprendre la jurisprudence prêt CHF
              </Link>
              <Link href="/guides" className="juri-cta-secondary-btn">
                Voir les guides pratiques
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
