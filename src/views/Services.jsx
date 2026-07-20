const EXPERTISES = [
  {
    id: "bilan",
    num: "01",
    title: "Bilan patrimonial",
    tagline: "Le point de départ de toute stratégie réussie.",
    intro:
      "Le bilan patrimonial est une photographie complète de votre situation : actifs financiers et immobiliers, dettes, revenus, fiscalité, régimes matrimoniaux et protection de la famille. Il met en lumière les forces et les fragilités de votre organisation actuelle.",
    items: [
      "Inventaire et valorisation de l'ensemble de vos actifs",
      "Analyse de votre exposition fiscale (IR, IFI, plus-values)",
      "Audit de votre protection familiale et de vos régimes de prévoyance",
      "Cartographie de vos objectifs à court, moyen et long terme",
      "Restitution écrite avec préconisations hiérarchisées",
    ],
    outro:
      "À l'issue du bilan, vous disposez d'une feuille de route claire, chiffrée et actionnable — que vous soyez libre d'appliquer avec nous ou en toute autonomie.",
  },
  {
    id: "immobilier",
    num: "02",
    title: "Investissement immobilier",
    tagline: "Construire un patrimoine tangible et générateur de revenus.",
    intro:
      "L'immobilier reste le socle de la plupart des stratégies patrimoniales. Nous vous aidons à investir au bon endroit, avec la bonne structure juridique et le bon financement.",
    items: [
      "Investissement locatif nu ou meublé (LMNP / LMP)",
      "SCPI et immobilier \"pierre-papier\" pour une gestion déléguée",
      "Démembrement de propriété (nue-propriété / usufruit)",
      "Structuration en SCI et optimisation du financement",
      "Arbitrage et cession d'actifs existants",
    ],
    outro:
      "Chaque opération est étudiée sous trois angles : rendement, fiscalité et adéquation avec votre stratégie globale.",
  },
  {
    id: "placements",
    num: "03",
    title: "Assurance-vie & placements",
    tagline: "Faire fructifier votre épargne dans un cadre fiscal privilégié.",
    intro:
      "L'assurance-vie demeure l'enveloppe préférée des Français, à juste titre : souplesse, fiscalité avantageuse et outil de transmission redoutablement efficace. Encore faut-il choisir les bons contrats et la bonne allocation.",
    items: [
      "Sélection de contrats d'assurance-vie et de capitalisation haut de gamme",
      "Allocation d'actifs diversifiée et adaptée à votre profil de risque",
      "Contrats de droit luxembourgeois pour les patrimoines importants",
      "PEA, compte-titres et épargne salariale",
      "Suivi régulier et arbitrages en fonction des marchés",
    ],
  },
  {
    id: "retraite",
    num: "04",
    title: "Préparation de la retraite",
    tagline: "Anticiper aujourd'hui pour préserver votre niveau de vie demain.",
    intro:
      "La retraite se prépare 10, 15, 20 ans à l'avance. Nous évaluons vos droits futurs, chiffrons l'écart avec vos besoins et mettons en place les solutions pour le combler.",
    items: [
      "Bilan retraite et reconstitution de carrière",
      "Plan d'Épargne Retraite (PER) individuel et déductibilité fiscale",
      "Constitution de revenus complémentaires (immobilier locatif, rentes)",
      "Stratégies spécifiques pour dirigeants et professions libérales",
      "Optimisation de la date et des conditions de départ",
    ],
  },
  {
    id: "fiscalite",
    num: "05",
    title: "Optimisation fiscale",
    tagline: "Payer le juste impôt, dans un cadre parfaitement maîtrisé.",
    intro:
      "L'optimisation fiscale n'est pas une fin en soi : c'est la conséquence d'une bonne organisation patrimoniale. Nous privilégions les dispositifs éprouvés, en parfaite conformité avec la réglementation.",
    items: [
      "Réduction d'impôt sur le revenu (PER, dispositifs d'investissement)",
      "Stratégies IFI : démembrement, actifs professionnels exonérés",
      "Optimisation de la fiscalité des revenus locatifs (déficit foncier, LMNP)",
      "Structuration des revenus du dirigeant (arbitrage rémunération / dividendes)",
      "Anticipation des plus-values de cession",
    ],
  },
  {
    id: "transmission",
    num: "06",
    title: "Transmission & succession",
    tagline: "Transmettre à vos proches dans les meilleures conditions.",
    intro:
      "Sans anticipation, la transmission d'un patrimoine peut coûter jusqu'à 45 % de droits de succession en ligne directe. Une organisation en amont permet de réduire fortement ce coût tout en protégeant votre conjoint et vos enfants.",
    items: [
      "Donations en pleine propriété ou en démembrement",
      "Optimisation de la clause bénéficiaire de vos contrats d'assurance-vie",
      "Pacte Dutreil pour la transmission d'entreprise",
      "Protection du conjoint survivant (donation entre époux, régime matrimonial)",
      "Coordination avec votre notaire et votre expert-comptable",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Nos expertises</span>
          <h1>Six domaines, une seule stratégie&nbsp;: la vôtre</h1>
          <p>
            Chaque situation patrimoniale est unique. Nos six domaines d'expertise s'articulent
            autour d'une vision globale de votre patrimoine, de vos objectifs et de votre horizon.
          </p>
        </div>
      </section>

      <section className="container">
        {EXPERTISES.map((expertise) => (
          <article className="service-detail" id={expertise.id} key={expertise.id}>
            <div className="service-detail__aside reveal">
              <span className="eyebrow">Expertise {expertise.num}</span>
              <h2>{expertise.title}</h2>
              <p>{expertise.tagline}</p>
            </div>
            <div className="service-detail__body reveal">
              <p>{expertise.intro}</p>
              <ul>
                {expertise.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {expertise.outro && <p>{expertise.outro}</p>}
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="container">
          <div className="cta reveal">
            <div>
              <h2>Un projet, une question&nbsp;?</h2>
              <p>
                Chaque stratégie commence par une conversation. Le premier entretien est offert et
                sans engagement.
              </p>
            </div>
            <a className="btn btn--gold" href="contact.html">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>
  );
}
