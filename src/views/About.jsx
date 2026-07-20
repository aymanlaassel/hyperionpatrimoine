const COMMITMENTS = [
  { title: "Indépendance", text: "Aucun produit imposé, aucun conflit d'intérêts." },
  { title: "Transparence", text: "Frais et rémunérations communiqués avant toute mission." },
  { title: "Confidentialité", text: "Vos données et votre situation restent strictement confidentielles." },
  { title: "Disponibilité", text: "Un conseiller dédié, joignable et réactif." },
];

const VALUES = [
  { num: "01", title: "L'écoute d'abord", text: "Comprendre votre histoire, vos projets et vos inquiétudes avant de parler de solutions." },
  { num: "02", title: "La pédagogie", text: "Vous ne signez jamais ce que vous ne comprenez pas. Chaque préconisation est expliquée." },
  { num: "03", title: "La prudence", text: "Pas de promesse de rendement miracle : une gestion des risques rigoureuse et assumée." },
  { num: "04", title: "La durée", text: "Un patrimoine se construit sur des décennies. Notre accompagnement aussi." },
];

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Le cabinet</span>
          <h1>Un cabinet indépendant, à taille humaine</h1>
          <p>
            Hyperion Patrimoine est né d'une conviction simple : le conseil patrimonial de qualité
            repose sur l'indépendance, l'écoute et l'engagement dans la durée.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Notre histoire</span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", marginBottom: "1rem" }}>
              L'exigence comme point de départ
            </h2>
            <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>
              Après plusieurs années passées au sein de grands réseaux bancaires et de sociétés de
              gestion, nos fondateurs ont fait le choix de l'indépendance pour offrir un conseil
              réellement centré sur l'intérêt du client.
            </p>
            <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>
              Libéré de tout objectif commercial imposé, le cabinet sélectionne ses solutions parmi
              l'ensemble du marché et construit chaque stratégie à partir d'une seule question :{" "}
              <em>est-ce la meilleure option pour vous&nbsp;?</em>
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Aujourd'hui, Hyperion Patrimoine accompagne des particuliers, des familles et des
              dirigeants d'entreprise dans toutes les étapes de leur vie patrimoniale.
            </p>
          </div>
          <div className="split__panel reveal">
            <h3>Nos engagements</h3>
            <ul className="checklist" style={{ marginTop: "1rem" }}>
              {COMMITMENTS.map((c) => (
                <li key={c.title}>
                  <Check />
                  <div>
                    <strong style={{ color: "var(--gold-300)" }}>{c.title}</strong>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nos valeurs</span>
            <h2>Ce qui guide chacune de nos recommandations</h2>
          </div>
          <div className="steps">
            {VALUES.map((v) => (
              <div className="step reveal" key={v.num}>
                <div className="step__num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta reveal">
            <div>
              <h2>Faisons connaissance</h2>
              <p>Rencontrons-nous pour un premier échange, offert et sans engagement.</p>
            </div>
            <a className="btn btn--gold" href="contact.html">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>
  );
}
