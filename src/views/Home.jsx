import { useState } from "react";

const ASSETS = import.meta.env.BASE_URL + "assets/";

// Photo si le fichier existe dans public/assets/, sinon fallback CSS élégant.
function Photo({ file, className }) {
  const [loaded, setLoaded] = useState(false);
  const url = `${ASSETS}${file}`;
  return (
    <div
      className={`${className}${loaded ? " has-photo" : ""}`}
      style={loaded ? { background: `url(${url}) center/cover no-repeat` } : undefined}
    >
      <img
        src={url}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
        onError={(e) => e.target.remove()}
      />
    </div>
  );
}

function GalleryItem({ file, alt }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <div className="g placeholder">Visuel à venir</div>;
  return (
    <div className="g">
      <img src={`${ASSETS}${file}`} alt={alt} loading="lazy" onError={() => setOk(false)} />
    </div>
  );
}

// Plan d'étage : image réelle si fournie, sinon schéma SVG des 4 lots par étage.
function FloorPlan() {
  const [hasImage, setHasImage] = useState(true);
  if (hasImage) {
    return <img src={`${ASSETS}plan.png`} alt="Plan d'étage Horizon 1" onError={() => setHasImage(false)} />;
  }
  return (
    <figure className="plan-placeholder">
      <svg viewBox="0 0 440 320" role="img" aria-label="Schéma d'étage : quatre appartements autour d'un palier central">
        <rect x="8" y="8" width="424" height="304" fill="#fff" stroke="#1E3A78" strokeWidth="2" />
        <line x1="220" y1="8" x2="220" y2="312" stroke="#C9A66B" strokeWidth="1.4" strokeDasharray="6 5" />
        <line x1="8" y1="160" x2="432" y2="160" stroke="#C9A66B" strokeWidth="1.4" strokeDasharray="6 5" />
        <rect x="185" y="125" width="70" height="70" fill="#faf8f4" stroke="#1E3A78" strokeWidth="1.4" />
        <text x="220" y="155" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="11" fill="#777" letterSpacing="1">PALIER</text>
        <text x="220" y="172" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="11" fill="#777" letterSpacing="1">ASCENSEUR</text>
        {[
          { x: 114, y: 84, n: "Apt. A" },
          { x: 326, y: 84, n: "Apt. B" },
          { x: 114, y: 236, n: "Apt. C" },
          { x: 326, y: 236, n: "Apt. D" },
        ].map((a) => (
          <g key={a.n}>
            <text x={a.x} y={a.y} textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="22" fill="#1E3A78">{a.n}</text>
            <text x={a.x} y={a.y + 22} textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="12" fill="#a9690a" letterSpacing="1">~80 m²</text>
          </g>
        ))}
      </svg>
      <figcaption>Schéma indicatif — 4 appartements par étage</figcaption>
    </figure>
  );
}

const ATOUTS = [
  {
    title: "Architecture moderne",
    text: "Façade blanche et pierre de Taza, lignes épurées, balcons généreux.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
      </svg>
    ),
  },
  {
    title: "Emplacement de choix",
    text: "Entrée de Tamesna, à côté du nouveau Carrefour et de la zone commerciale.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Parking inclus",
    text: "Une place de parking en sous-sol pour chaque appartement.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13v5h-2v-2H7v2H5z" />
        <circle cx="7.5" cy="15.5" r="1" />
        <circle cx="16.5" cy="15.5" r="1" />
      </svg>
    ),
  },
  {
    title: "Aide de l'État",
    text: "Jusqu'à 70 000 DH (Daam Sakane) sur les lots éligibles.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Home() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const sujet = encodeURIComponent("Horizon 1 — Demande d'information / réservation");
    const corps = encodeURIComponent(
      [
        `Nom : ${data.get("nom")}`,
        `Téléphone : ${data.get("telephone")}`,
        `Email : ${data.get("email") || "—"}`,
        "",
        data.get("message") || "",
      ].join("\n")
    );
    window.location.href = `mailto:hyperionpatrimoine@gmail.com?subject=${sujet}&body=${corps}`;
    setStatus("Votre client mail va s'ouvrir avec votre demande pré-remplie.");
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Photo file="render1.jpg" className="bg" />
        <div className="veil"></div>
        <div className="wrap">
          <span className="label">Nouveau programme — Tamesna</span>
          <h1>Horizon&nbsp;1</h1>
          <p className="sub">
            Une résidence neuve et contemporaine à l'entrée de Tamesna, à côté du nouveau
            Carrefour et de la nouvelle zone commerciale.
          </p>
          <div className="meta">Appartements ~80 m² avec parking &nbsp;·&nbsp; 2 commerces &nbsp;·&nbsp; Livraison 2027</div>
          <div className="cta">
            <a className="btn" href="#contact">Demander la plaquette</a>
            <a className="btn btn-out" href="#projet">Découvrir le programme</a>
          </div>
        </div>
        <div className="scrollhint">Défiler</div>
        <div className="priceband">
          <div className="wrap">
            <span>À partir de <b>700 000 DH</b></span>
            <span>Parking <b>inclus</b></span>
            <span>Aide de l'État jusqu'à <b>70 000 DH</b></span>
          </div>
        </div>
      </section>

      {/* PROGRAMME / CHIFFRES */}
      <section id="programme" className="figures">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Le promoteur</span>
            <h2>Hyperion Patrimoine</h2>
            <p>
              Promoteur immobilier, nous concevons et réalisons des résidences neuves de qualité à
              Tamesna et dans la région de Rabat-Témara — alliant architecture contemporaine,
              emplacements de choix et achat sécurisé.
            </p>
          </div>
          <div className="grid reveal">
            <div className="fig"><div className="n">16</div><div className="t">Appartements</div></div>
            <div className="fig"><div className="n">~80 m²</div><div className="t">Surface moyenne</div></div>
            <div className="fig"><div className="n">2</div><div className="t">Commerces</div></div>
            <div className="fig"><div className="n">2027</div><div className="t">Livraison prévue</div></div>
          </div>
        </div>
      </section>

      {/* PROJET FEATURED */}
      <section id="projet">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Notre programme</span>
            <h2>Horizon 1, à l'entrée de Tamesna</h2>
          </div>
          <div className="project reveal">
            <Photo file="render2.jpg" className="ph" />
            <div className="body">
              <span className="label">Résidence R+4 · Tamesna</span>
              <h3>Vivre &amp; investir à Horizon 1</h3>
              <p>
                Seize appartements lumineux d'environ 80 m², chacun avec sa place de parking, et
                deux commerces en pied d'immeuble. Architecture moderne, façade blanche et pierre
                de Taza, larges balcons orientés.
              </p>
              <ul className="feats">
                <li><span>Typologie</span><span>Appartements ~80–82 m²</span></li>
                <li><span>Parking</span><span>1 place incluse</span></li>
                <li><span>Prix</span><span>À partir de 700 000 DH</span></li>
                <li><span>Paiement</span><span>30 % réservation / 70 % aux clés</span></li>
                <li><span>Livraison</span><span>2027</span></li>
              </ul>
              <a className="btn btn-dark" href="#contact">Réserver un lot</a>
            </div>
          </div>
        </div>
      </section>

      {/* ATOUTS */}
      <section id="atouts" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Pourquoi Horizon 1</span>
            <h2>Les atouts du programme</h2>
          </div>
          <div className="atouts reveal">
            {ATOUTS.map((a) => (
              <div className="atout" key={a.title}>
                <div className="ic">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section id="prix">
        <div className="wrap">
          <div className="split">
            <div className="reveal"><FloorPlan /></div>
            <div className="reveal">
              <span className="label">Typologies &amp; prix</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.5rem)", margin: "12px 0 8px" }}>
                Des appartements ~80 m², parking inclus
              </h2>
              <p style={{ color: "var(--muted)", fontWeight: 300 }}>
                Quatre appartements par étage (du 1ᵉʳ au 4ᵉ), toutes orientations. Deux commerces
                en pied d'immeuble.
              </p>
              <div className="price-tag">
                <small>Appartements à partir de</small>
                <span className="big">700 000 DH</span>
                <small>parking inclus · prix TTC selon étage et orientation</small>
              </div>
              <ul className="list">
                <li>Appartements de ~80 à 82 m²</li>
                <li>Place de parking en sous-sol incluse</li>
                <li>2 commerces en pied d'immeuble (RDC + mezzanine)</li>
                <li>Lots éligibles à l'aide de l'État (70 000 DH)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AIDE */}
      <section className="aide">
        <div className="wrap reveal">
          <span className="label center">Aide directe au logement</span>
          <h2>Jusqu'à <span className="or">70 000 DH</span> d'aide de l'État</h2>
          <p>
            Les appartements à 700 000 DH TTC ouvrent droit au programme <strong>Daam Sakane</strong> :
            70 000 DH versés à l'acquéreur, sous conditions (résidence principale, primo-accédant,
            conservation 5 ans).
          </p>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Galerie</span>
            <h2>Découvrez la résidence</h2>
          </div>
          <div className="gallery reveal">
            <GalleryItem file="render2.jpg" alt="Horizon 1 vue 1" />
            <GalleryItem file="render3.jpg" alt="Horizon 1 vue 2" />
            <GalleryItem file="render4.jpg" alt="Horizon 1 vue 3" />
          </div>
          <p className="gallery-note">Images non contractuelles.</p>
        </div>
      </section>

      {/* MODALITES */}
      <section id="modalites" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Modalités de paiement</span>
            <h2>30 % à la réservation, le reste aux clés</h2>
            <p>
              Vous réservez avec 30 % du prix, et réglez le solde à la remise des clés. Promesse
              de vente par acte notarié.
            </p>
          </div>
          <div className="steps reveal">
            <div className="step">
              <div className="pct">30 %</div>
              <h3>À la réservation</h3>
              <p>Signature de la promesse de vente notariée.</p>
            </div>
            <div className="step">
              <div className="pct">70 %</div>
              <h3>À la remise des clés</h3>
              <p>Solde réglé à la livraison, prévue en 2027.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="label center">Contact</span>
            <h2>Réservez votre lot</h2>
            <p>Demandez la plaquette, la grille de prix ou une simulation de financement.</p>
          </div>
          <div className="grid reveal">
            <div className="info">
              <span className="label">Hyperion Patrimoine</span>
              <div className="row">
                <div className="k">E-mail</div>
                <div className="v"><a href="mailto:hyperionpatrimoine@gmail.com">hyperionpatrimoine@gmail.com</a></div>
              </div>
              <div className="row">
                <div className="k">Téléphone</div>
                <div className="v">+212 ___ ___ ___</div>
              </div>
              <div className="row">
                <div className="k">Adresse</div>
                <div className="v">Programme Horizon 1 — Entrée de Tamesna, Sidi Yahia Zaër</div>
              </div>
              <div className="row">
                <div className="k">Société</div>
                <div className="v" style={{ fontSize: ".85rem", color: "var(--muted)" }}>RC 188747 · ICE 003751804000041</div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom complet" required autoComplete="name" />
              <input type="tel" name="telephone" placeholder="Téléphone" required autoComplete="tel" />
              <input type="email" name="email" placeholder="E-mail" autoComplete="email" />
              <textarea name="message" placeholder="Votre message (lot souhaité, budget, financement…)"></textarea>
              <div className="form-status" role="status" aria-live="polite">{status}</div>
              <button type="submit" className="btn">Envoyer ma demande</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
