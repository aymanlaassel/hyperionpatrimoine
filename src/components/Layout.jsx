import { useEffect, useState } from "react";

const ASSETS = import.meta.env.BASE_URL + "assets/";

// Vrai logo si assets/logo.png existe, sinon monogramme dans le style du site.
export function Logo({ compact = false }) {
  const [hasLogo, setHasLogo] = useState(true);
  return (
    <>
      {hasLogo ? (
        <img src={`${ASSETS}logo.png`} alt="Hyperion Patrimoine" onError={() => setHasLogo(false)} />
      ) : (
        <span className="mark" aria-hidden="true">H</span>
      )}
      {compact ? (
        <span className="nm">Hyperion Patrimoine</span>
      ) : (
        <span className="nm">
          Hyperion<small>Patrimoine</small>
        </span>
      )}
    </>
  );
}

export function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span className="tag">L'immobilier qui valorise votre patrimoine</span>
        <span className="right">
          <span className="or">✆</span> <a href="tel:+212000000000">+212 ___ ___ ___</a>
        </span>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { anchor: "#programme", label: "Le programme" },
  { anchor: "#projet", label: "Horizon 1" },
  { anchor: "#atouts", label: "Atouts" },
  { anchor: "#prix", label: "Prix" },
  { anchor: "#galerie", label: "Galerie" },
];

export function Nav({ isHome = true }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (anchor) => (isHome ? anchor : `index.html${anchor}`);
  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <div className="wrap">
        <nav id="nav" className={open ? "open" : undefined}>
          <a className="logo" href={isHome ? "#" : "index.html"}>
            <Logo />
          </a>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.anchor}>
                <a href={href(link.anchor)} onClick={close}>{link.label}</a>
              </li>
            ))}
            <li><a href="sav.html" onClick={close}>SAV</a></li>
            <li>
              <a href={href("#contact")} className="disp" style={{ color: "var(--or-d)" }} onClick={close}>
                Réserver
              </a>
            </li>
          </ul>
          <button
            className="burger"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div className="logo">
            <Logo compact />
          </div>
          <div>
            <a href="sav.html" style={{ color: "var(--or)", letterSpacing: "1.5px", textTransform: "uppercase", fontSize: ".78rem" }}>
              Espace SAV client
            </a>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Hyperion Patrimoine — Tous droits réservés.</span>
          <span>
            <a href="mailto:hyperionpatrimoine@gmail.com">hyperionpatrimoine@gmail.com</a> · RC 188747 · ICE 003751804000041
          </span>
        </div>
      </div>
    </footer>
  );
}

// Révélation au défilement (comportement du design d'origine).
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Layout({ isHome = true, children }) {
  useReveal();

  return (
    <>
      <Topbar />
      <Nav isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
