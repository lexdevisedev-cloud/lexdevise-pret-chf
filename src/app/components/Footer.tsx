import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-disclaimer">
          Prêts CHF Info est un site indépendant d&apos;information pédagogique. Il n&apos;est pas affilié à une
          administration publique.
        </p>
        <nav className="site-footer-links" aria-label="Liens légaux">
          <Link href="/guides">Guides</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Confidentialité</Link>
        </nav>
        <p className="site-footer-copy">
          © {new Date().getFullYear()} Prêts CHF Info
        </p>
      </div>
    </footer>
  );
}
