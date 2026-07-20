import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "index.html", label: "Accueil" },
  { href: "services.html", label: "Nos expertises" },
  { href: "a-propos.html", label: "Le cabinet" },
  { href: "contact.html", label: "Contact" },
];

export function Brand() {
  return (
    <a className="brand" href="index.html">
      <span className="brand__mark">H</span>
      <span className="brand__name">
        Hyperion <span>Patrimoine</span>
      </span>
    </a>
  );
}

export function Header({ current }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Brand />
        <button
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav__links${open ? " is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.href === current ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn--gold nav__cta" href="contact.html" onClick={() => setOpen(false)}>
              Prendre rendez-vous
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Brand />
            <p>
              Cabinet indépendant de conseil en gestion de patrimoine. Nous aidons nos clients à
              construire, protéger et transmettre leur patrimoine.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Expertises</h4>
            <ul>
              <li><a href="services.html#bilan">Bilan patrimonial</a></li>
              <li><a href="services.html#immobilier">Immobilier</a></li>
              <li><a href="services.html#retraite">Retraite</a></li>
              <li><a href="services.html#transmission">Transmission</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@hyperionpatrimoine.fr">contact@hyperionpatrimoine.fr</a></li>
              <li><a href="tel:+33100000000">+33 (0)1 00 00 00 00</a></li>
              <li>Sur rendez-vous, du lundi au vendredi</li>
            </ul>
          </div>
        </div>
        <p className="footer__disclaimer">
          Les informations présentées sur ce site ont un caractère purement informatif et ne
          constituent ni un conseil en investissement, ni une offre de souscription. Tout
          investissement comporte des risques, notamment de perte en capital. Les performances
          passées ne préjugent pas des performances futures.
        </p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Hyperion Patrimoine. Tous droits réservés.</span>
          <a href="mentions-legales.html">Mentions légales &amp; confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

export function LegalFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom" style={{ borderTop: "none", paddingTop: 0 }}>
          <span>© {new Date().getFullYear()} Hyperion Patrimoine. Tous droits réservés.</span>
          <a href="index.html">Retour à l'accueil</a>
        </div>
      </div>
    </footer>
  );
}

// Révélation au défilement + compteurs animés (comportements d'origine).
function usePageEffects() {
  useEffect(() => {
    const cleanups = [];

    const revealables = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealables.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealables.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealables.forEach((el) => el.classList.add("is-visible"));
    }

    const counters = document.querySelectorAll("[data-count]");
    if ("IntersectionObserver" in window && counters.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || "";
            const duration = 1400;
            const start = performance.now();

            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(target * eased) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

export default function Layout({ current, footer = "full", children }) {
  usePageEffects();

  return (
    <>
      <Header current={current} />
      <main>{children}</main>
      {footer === "legal" ? <LegalFooter /> : <Footer />}
    </>
  );
}
