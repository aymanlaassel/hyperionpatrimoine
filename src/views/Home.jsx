const SERVICES = [
  {
    id: "bilan",
    title: "Bilan patrimonial",
    text: "Un diagnostic complet de votre situation — actifs, fiscalité, objectifs — pour bâtir une stratégie claire et hiérarchisée.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    id: "immobilier",
    title: "Investissement immobilier",
    text: "Résidence principale, locatif, SCPI, démembrement : sélection et structuration d'opérations adaptées à vos objectifs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    id: "placements",
    title: "Assurance-vie & placements",
    text: "Allocation d'actifs diversifiée, contrats haut de gamme et suivi régulier pour faire fructifier votre épargne dans la durée.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "retraite",
    title: "Préparation de la retraite",
    text: "Anticipez la baisse de revenus : PER, revenus complémentaires et stratégies de capitalisation adaptées à votre horizon.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "fiscalite",
    title: "Optimisation fiscale",
    text: "Réduisez votre pression fiscale dans un cadre maîtrisé : dispositifs d'investissement, structuration des revenus, IFI.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "transmission",
    title: "Transmission & succession",
    text: "Donations, démembrement, assurance-vie, pacte Dutreil : organisez la transmission de votre patrimoine au meilleur coût.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const STEPS = [
  { num: "01", title: "Écoute & découverte", text: "Un premier entretien offert pour comprendre votre situation, vos projets et vos contraintes." },
  { num: "02", title: "Audit patrimonial", text: "Analyse détaillée de vos actifs, de votre fiscalité et de votre protection familiale." },
  { num: "03", title: "Stratégie sur mesure", text: "Des préconisations chiffrées, hiérarchisées et expliquées en toute transparence." },
  { num: "04", title: "Mise en œuvre & suivi", text: "Accompagnement dans la durée avec des points réguliers pour ajuster la stratégie." },
];

const REASONS = [
  { title: "Conseil indépendant", text: "Aucun produit \"maison\" : nous sélectionnons librement les meilleures solutions du marché." },
  { title: "Transparence totale", text: "Rémunération et frais expliqués dès le premier rendez-vous, sans surprise." },
  { title: "Vision de long terme", text: "Une relation de confiance qui s'inscrit dans la durée, au rythme de vos projets de vie." },
  { title: "Interlocuteur unique", text: "Un conseiller dédié qui coordonne notaire, expert-comptable et avocat si nécessaire." },
];

const QUOTES = [
  {
    text: "« Un accompagnement remarquable pour la préparation de ma retraite. Des explications claires et une stratégie que je comprends enfin. »",
    author: "Marie L.",
    role: "Cadre dirigeante, 54 ans",
  },
  {
    text: "« Grâce à leur audit, nous avons restructuré nos investissements immobiliers et réduit sensiblement notre fiscalité. Professionnels et disponibles. »",
    author: "Karim & Sophie B.",
    role: "Investisseurs immobiliers",
  },
  {
    text: "« La transmission de mon entreprise familiale semblait insurmontable. Hyperion a coordonné tous les intervenants avec une grande rigueur. »",
    author: "Jean-Pierre D.",
    role: "Chef d'entreprise",
  },
];

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">Cabinet de gestion de patrimoine</span>
          <h1>
            Construisez, protégez et transmettez votre patrimoine <em>avec sérénité</em>.
          </h1>
          <p>
            Hyperion Patrimoine accompagne particuliers, familles et dirigeants d'entreprise dans
            chaque étape de leur vie patrimoniale : investissement, optimisation fiscale,
            préparation de la retraite et transmission.
          </p>
          <div className="hero__actions">
            <a className="btn btn--gold" href="contact.html">Demander un bilan patrimonial</a>
            <a className="btn btn--ghost" href="services.html">Découvrir nos expertises</a>
          </div>
          <ul className="hero__badges">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Conseil indépendant
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Premier entretien offert
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Approche sur mesure
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CHIFFRES ================= */}
      <section className="stats">
        <div className="container stats__grid">
          <div className="stat">
            <div className="stat__value" data-count="15" data-suffix="+">0</div>
            <div className="stat__label">années d'expérience</div>
          </div>
          <div className="stat">
            <div className="stat__value" data-count="400" data-suffix="+">0</div>
            <div className="stat__label">familles accompagnées</div>
          </div>
          <div className="stat">
            <div className="stat__value" data-count="98" data-suffix="%">0</div>
            <div className="stat__label">de clients satisfaits</div>
          </div>
          <div className="stat">
            <div className="stat__value" data-count="6">0</div>
            <div className="stat__label">domaines d'expertise</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nos expertises</span>
            <h2>Une réponse à chaque enjeu patrimonial</h2>
            <p>Six domaines d'intervention complémentaires, pilotés par une stratégie globale et personnalisée.</p>
          </div>
          <div className="cards">
            {SERVICES.map((s) => (
              <article className="card reveal" key={s.id}>
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="card__link" href={`services.html#${s.id}`}>En savoir plus →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPROCHE ================= */}
      <section className="section section--tinted" id="approche">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Notre méthode</span>
            <h2>Un accompagnement en quatre temps</h2>
            <p>De la découverte à la mise en œuvre, une démarche structurée et transparente.</p>
          </div>
          <div className="steps">
            {STEPS.map((step) => (
              <div className="step reveal" key={step.num}>
                <div className="step__num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POURQUOI NOUS ================= */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Pourquoi Hyperion&nbsp;?</span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", marginBottom: "0.5rem" }}>
              L'indépendance au service de vos intérêts
            </h2>
            <ul className="checklist">
              {REASONS.map((reason) => (
                <li key={reason.title}>
                  <Check />
                  <div>
                    <strong>{reason.title}</strong>
                    <span>{reason.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="split__panel reveal">
            <h3>Notre conviction</h3>
            <blockquote>
              « Un patrimoine bien géré n'est pas une accumulation d'actifs, c'est une stratégie
              cohérente au service d'un projet de vie. »
            </blockquote>
            <cite>L'équipe Hyperion Patrimoine</cite>
          </div>
        </div>
      </section>

      {/* ================= TÉMOIGNAGES ================= */}
      <section className="section section--tinted">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Ils nous font confiance</span>
            <h2>Ce que disent nos clients</h2>
          </div>
          <div className="quotes">
            {QUOTES.map((quote) => (
              <article className="quote reveal" key={quote.author}>
                <div className="quote__stars">★★★★★</div>
                <p>{quote.text}</p>
                <footer>
                  {quote.author} <span>{quote.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <div className="container">
          <div className="cta reveal">
            <div>
              <h2>Et si on parlait de votre patrimoine&nbsp;?</h2>
              <p>
                Le premier entretien est offert et sans engagement. Faisons le point ensemble sur
                votre situation et vos objectifs.
              </p>
            </div>
            <a className="btn btn--gold" href="contact.html">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>
  );
}
