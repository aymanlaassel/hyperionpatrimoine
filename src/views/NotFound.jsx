export default function NotFound() {
  return (
    <main>
      <section className="hero" style={{ minHeight: "100vh", height: "auto" }}>
        <div className="bg"></div>
        <div className="veil"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="label" style={{ justifyContent: "center" }}>Erreur 404</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>Page introuvable</h1>
          <p className="sub" style={{ marginInline: "auto", marginBottom: 30 }}>
            Le lien que vous avez suivi est peut-être obsolète, ou l'adresse a été mal saisie.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a className="btn" href={import.meta.env.BASE_URL}>Retour à l'accueil</a>
          </div>
        </div>
      </section>
    </main>
  );
}
