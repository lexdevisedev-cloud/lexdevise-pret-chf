import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Prêts CHF Info",
    template: "%s | Prêts CHF Info",
  },
  description:
    "Informations pédagogiques sur les prêts immobiliers en francs suisses : risque de change, jurisprudence, test d'éligibilité et simulation indicative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}