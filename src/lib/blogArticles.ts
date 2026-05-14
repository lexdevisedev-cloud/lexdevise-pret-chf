export interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "pret-chf-frontalier",
    category: "Frontaliers",
    title: "Prêt CHF frontalier : êtes-vous concerné par un recours ?",
    description:
      "Comprendre pourquoi un emprunteur frontalier peut souhaiter vérifier son prêt immobilier en francs suisses.",
    readingTime: "6 min",
    metaTitle: "Prêt CHF frontalier : critères à vérifier",
    metaDescription:
      "Découvrez pourquoi un emprunteur frontalier ayant souscrit un prêt immobilier en francs suisses peut souhaiter vérifier son contrat, notamment en cas de bien situé en France.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
  {
    slug: "risque-change-pret-chf",
    category: "Risque de change",
    title: "Risque de change prêt CHF : comprendre l'impact EUR/CHF",
    description:
      "Un guide simple pour comprendre comment le franc suisse peut influencer la contrevaleur d'un prêt.",
    readingTime: "5 min",
    metaTitle: "Risque de change prêt CHF : comprendre l'impact EUR/CHF",
    metaDescription:
      "Comprenez comment le taux EUR/CHF peut influencer la contrevaleur d'un prêt immobilier en francs suisses et pourquoi une simulation indicative peut être utile.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
  {
    slug: "clause-abusive-pret-chf",
    category: "Clauses contractuelles",
    title: "Clause abusive prêt CHF : ce qu'il faut vérifier dans le contrat",
    description:
      "Les clauses liées à la devise, au remboursement et au risque de change peuvent être déterminantes.",
    readingTime: "7 min",
    metaTitle: "Clause abusive prêt CHF : les points à vérifier",
    metaDescription:
      "Découvrez les clauses à examiner dans un prêt immobilier en francs suisses : devise, conversion, remboursement, information sur le risque de change et transparence.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
  {
    slug: "documents-pret-chf",
    category: "Documents",
    title: "Documents prêt CHF : quelles pièces réunir pour une analyse ?",
    description:
      "Offre de prêt, notices, simulations, tableaux d'amortissement : les pièces utiles à préparer.",
    readingTime: "5 min",
    metaTitle: "Documents prêt CHF : pièces utiles pour vérifier un dossier",
    metaDescription:
      "Liste des documents utiles pour vérifier un prêt immobilier en francs suisses : offre de prêt, notices, simulations, tableaux d'amortissement, avenants et échanges avec la banque.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
  {
    slug: "pret-chf-deja-rembourse",
    category: "Situations particulières",
    title: "Prêt CHF déjà remboursé : peut-il encore être analysé ?",
    description:
      "Un prêt soldé, renégocié ou remboursé peut parfois mériter une vérification selon les documents disponibles.",
    readingTime: "6 min",
    metaTitle: "Prêt CHF déjà remboursé : analyse possible ?",
    metaDescription:
      "Un prêt en francs suisses déjà remboursé, renégocié ou soldé peut parfois mériter une vérification selon les dates, les documents disponibles et la situation du dossier.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
  {
    slug: "cour-cassation-9-juillet-2025-pret-chf",
    category: "Jurisprudence",
    title:
      "Cour de cassation du 9 juillet 2025 : ce que cela change pour les prêts CHF",
    description:
      "Comprendre l'évolution récente sur les prêts CHF, le risque de change et l'information des emprunteurs.",
    readingTime: "8 min",
    metaTitle: "Cour de cassation 9 juillet 2025 et prêts CHF",
    metaDescription:
      "Comprendre les décisions du 9 juillet 2025 sur les prêts immobiliers en francs suisses, le risque de change et l'information due aux emprunteurs frontaliers.",
    publishedAt: "2025-05-13",
    updatedAt: "2025-05-13",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}
