import type { Metadata } from "next";
import SimulationClient from "./SimulationClient";

// TODO: Définir NEXT_PUBLIC_SITE_URL dans .env.local (ex: https://pretschfinfo.fr)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://VOTRE-DOMAINE.fr";

export const metadata: Metadata = {
  title: "Simulateur prêt CHF : estimation indicative",
  description:
    "Obtenez une estimation indicative du préjudice potentiel lié à un prêt immobilier indexé ou libellé en francs suisses.",
  alternates: {
    canonical: `${SITE_URL}/simulation`,
  },
  openGraph: {
    title: "Simulateur prêt CHF : estimation indicative",
    description:
      "Obtenez une estimation indicative du préjudice potentiel lié à un prêt immobilier indexé ou libellé en francs suisses.",
    url: `${SITE_URL}/simulation`,
    siteName: "Prêts CHF Info",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur prêt CHF : estimation indicative",
    description:
      "Obtenez une estimation indicative du préjudice potentiel lié à un prêt immobilier indexé ou libellé en francs suisses.",
  },
};

export default function SimulationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/simulation`,
        name: "Simulateur prêt CHF : estimer l'impact du risque de change",
        description:
          "Simulez l'impact du taux EUR/CHF sur un prêt immobilier en francs suisses. Estimation indicative simple à partir du montant et des taux de change.",
        url: `${SITE_URL}/simulation`,
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Simulation",
            item: `${SITE_URL}/simulation`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SimulationClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
