import { useState } from "react";

const FAQ = [
  {
    q: "Le premier rendez-vous est-il vraiment gratuit ?",
    a: "Oui. Le premier entretien de découverte est offert et sans engagement. Il nous permet de comprendre votre situation et de vous dire, en toute transparence, si et comment nous pouvons vous être utiles.",
  },
  {
    q: "Comment le cabinet est-il rémunéré ?",
    a: "Notre rémunération est présentée par écrit avant toute mission : honoraires de conseil et/ou commissions sur les solutions mises en place, toujours communiqués en amont et détaillés dans la lettre de mission.",
  },
  {
    q: "Faut-il un patrimoine minimum pour être accompagné ?",
    a: "Non. Nous accompagnons aussi bien les personnes qui débutent la constitution de leur patrimoine que les familles disposant d'actifs importants. C'est le projet qui compte, pas le point de départ.",
  },
  {
    q: "Travaillez-vous avec mon notaire ou mon expert-comptable ?",
    a: "Oui, et c'est même recommandé. Nous coordonnons volontiers nos travaux avec vos conseils habituels (notaire, expert-comptable, avocat) pour garantir la cohérence de l'ensemble.",
  },
  {
    q: "Les échanges sont-ils confidentiels ?",
    a: "Absolument. Toutes les informations que vous nous confiez sont strictement confidentielles et ne sont jamais transmises à des tiers sans votre accord écrit.",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  // Sans backend, le formulaire ouvre le client mail du visiteur avec un
  // message pré-rempli. Pour un envoi serveur, brancher Formspree / Resend ici.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (!data.get("consent")) {
      setStatus("Merci de cocher la case de consentement.");
      return;
    }

    const sujet = encodeURIComponent(
      `Demande de rendez-vous — ${data.get("objet") || "Bilan patrimonial"}`
    );
    const corps = encodeURIComponent(
      [
        `Nom : ${data.get("nom")}`,
        `Email : ${data.get("email")}`,
        `Téléphone : ${data.get("telephone") || "—"}`,
        `Objet : ${data.get("objet")}`,
        "",
        data.get("message"),
      ].join("\n")
    );

    window.location.href = `mailto:contact@hyperionpatrimoine.fr?subject=${sujet}&body=${corps}`;
    setStatus("Votre client mail va s'ouvrir. Vous pouvez aussi nous appeler directement.");
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Parlons de votre patrimoine</h1>
          <p>
            Le premier entretien est offert et sans engagement. Décrivez-nous votre projet, nous
            revenons vers vous sous 24&nbsp;heures ouvrées.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <form className="form reveal" id="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="field">
                <label htmlFor="nom">Nom complet *</label>
                <input type="text" id="nom" name="nom" required autoComplete="name" placeholder="Votre nom" />
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required autoComplete="email" placeholder="vous@exemple.fr" />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" name="telephone" autoComplete="tel" placeholder="06 00 00 00 00" />
              </div>
              <div className="field">
                <label htmlFor="objet">Votre besoin *</label>
                <select id="objet" name="objet" required defaultValue="Bilan patrimonial">
                  <option value="Bilan patrimonial">Bilan patrimonial</option>
                  <option value="Investissement immobilier">Investissement immobilier</option>
                  <option value="Assurance-vie et placements">Assurance-vie &amp; placements</option>
                  <option value="Préparation retraite">Préparation de la retraite</option>
                  <option value="Optimisation fiscale">Optimisation fiscale</option>
                  <option value="Transmission / succession">Transmission &amp; succession</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Votre message *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Décrivez brièvement votre situation et votre projet…"
              ></textarea>
            </div>
            <label className="form__consent">
              <input type="checkbox" name="consent" required />
              <span>
                J'accepte que mes données soient utilisées pour être recontacté(e) dans le cadre de
                ma demande. Elles ne seront jamais transmises à des tiers. *
              </span>
            </label>
            <div className="form__status" role="status" aria-live="polite">{status}</div>
            <button type="submit" className="btn btn--gold">Envoyer ma demande</button>
          </form>

          <aside className="info-card reveal">
            <h3>Nos coordonnées</h3>
            <ul>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:contact@hyperionpatrimoine.fr">contact@hyperionpatrimoine.fr</a>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+33100000000">+33 (0)1 00 00 00 00</a>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Adresse du cabinet
                  <br />
                  (reçoit uniquement sur rendez-vous)
                </span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>
                  Lundi – vendredi
                  <br />
                  9h00 – 19h00, sur rendez-vous
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>Avant de nous rencontrer</h2>
          </div>
          <div className="faq reveal">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
