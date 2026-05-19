"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isJuri = pathname.startsWith("/jurisprudence");
  const isElig = pathname.startsWith("/eligibilite");
  const isSim = pathname.startsWith("/simulation");
  const isBlog = pathname.startsWith("/blog");
  const isGuides = pathname.startsWith("/guides");

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          Prêts CHF Info
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          <Link href="/" className={isHome ? "nav-active" : ""}>
            Accueil
          </Link>
          <Link href="/jurisprudence" className={isJuri ? "nav-active" : ""}>
            Jurisprudence
          </Link>
          <Link href="/eligibilite" className={isElig ? "nav-active" : ""}>
            Éligibilité
          </Link>
          <Link href="/simulation" className={isSim ? "nav-active" : ""}>
            Simulation
          </Link>
          <Link href="/blog" className={isBlog ? "nav-active" : ""}>
            Blog
          </Link>
          <Link href="/guides" className={isGuides ? "nav-active" : ""}>
            Guides
          </Link>
        </nav>

        <Link href="/simulation" className="cta-button header-cta">
          Faire une estimation
        </Link>

        <button
          className="burger-btn"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="burger-icon" aria-hidden="true">
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${mobileOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Menu mobile">
          <Link
            href="/"
            className={`mobile-link${isHome ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/jurisprudence"
            className={`mobile-link${isJuri ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Jurisprudence
          </Link>
          <Link
            href="/eligibilite"
            className={`mobile-link${isElig ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Éligibilité
          </Link>
          <Link
            href="/simulation"
            className={`mobile-link${isSim ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Simulation
          </Link>
          <Link
            href="/blog"
            className={`mobile-link${isBlog ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/guides"
            className={`mobile-link${isGuides ? " nav-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            Guides
          </Link>

          <Link
            href="/simulation"
            className="mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Faire une estimation
          </Link>
        </nav>
      </div>
    </header>
  );
}
