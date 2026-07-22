import { useState } from "react";

export default function Sav() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const sujet = encodeURIComponent(`SAV Horizon 1 — Lot ${data.get("lot") || "?"}`);
    const corps = encodeURIComponent(
      [
        `Nom : ${data.get("nom")}`,
        `Téléphone : ${data.get("telephone")}`,
        `Email : ${data.get("email") || "—"}`,
        `Appartement / lot : ${data.get("lot")}`,
        "",
        "Description de la demande :",
        data.get("message"),
      ].join("\n")
    );
    window.location.href = `mailto:hyperionpatrimoine@gmail.com?subject=${sujet}&body=${corps}`;
    setStatus("Votre client mail va s'ouvrir avec votre demande pré-remplie.");
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label center">Espace client</span>
          <h1>Service après-vente</h1>
          <p>
            Propriétaire à Horizon 1 ? Signalez-nous une demande ou un désordre :
            nous revenons vers vous rapidement.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <div className="grid reveal">
            <div className="info">
              <span className="label">Hyperion Patrimoine — SAV</span>
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
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nom" placeholder="Nom complet" required autoComplete="name" />
              <input type="tel" name="telephone" placeholder="Téléphone" required autoComplete="tel" />
              <input type="email" name="email" placeholder="E-mail" autoComplete="email" />
              <input type="text" name="lot" placeholder="N° d'appartement / lot" required />
              <textarea name="message" placeholder="Décrivez votre demande (pièce concernée, nature du désordre…)" required></textarea>
              <div className="form-status" role="status" aria-live="polite">{status}</div>
              <button type="submit" className="btn">Envoyer ma demande</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
