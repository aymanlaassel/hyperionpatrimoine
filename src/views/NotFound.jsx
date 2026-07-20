export default function NotFound() {
  return (
    <main>
      <section className="hero" style={{ minHeight: "100vh" }}>
        <div
          className="container hero__inner"
          style={{ textAlign: "center", maxWidth: 560, marginInline: "auto" }}
        >
          <span className="eyebrow">Erreur 404</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
            Cette page n'existe pas <em>ou plus</em>.
          </h1>
          <p style={{ marginInline: "auto" }}>
            Le lien que vous avez suivi est peut-être obsolète, ou l'adresse a été mal saisie.
          </p>
          <div className="hero__actions" style={{ justifyContent: "center" }}>
            <a className="btn btn--gold" href="/hyperionpatrimoine/">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
