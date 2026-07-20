export default function Legal() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Informations légales</span>
          <h1>Mentions légales &amp; confidentialité</h1>
        </div>
      </section>

      <section className="section">
        <div className="container legal">
          {/* ⚠️ À COMPLÉTER : remplacer les champs entre crochets par les
              informations réelles du cabinet avant mise en production. */}

          <h2>Éditeur du site</h2>
          <p>
            Le site hyperionpatrimoine est édité par&nbsp;: <strong>[Raison sociale]</strong>,
            [forme juridique] au capital de [montant]&nbsp;€, immatriculée au RCS de [ville] sous
            le numéro [numéro], dont le siège social est situé [adresse complète].
          </p>
          <ul>
            <li>Directeur de la publication&nbsp;: [nom]</li>
            <li>Email&nbsp;: contact@hyperionpatrimoine.fr</li>
            <li>Téléphone&nbsp;: +33 (0)1 00 00 00 00</li>
          </ul>

          <h2>Statuts réglementaires</h2>
          <p>
            [Raison sociale] exerce en qualité de Conseiller en Investissements Financiers (CIF),
            enregistrée sous le numéro [numéro ORIAS] auprès de l'ORIAS (www.orias.fr) et adhérente
            de [association professionnelle agréée par l'AMF]. Activités également exercées&nbsp;:
            courtage en assurance (COA), intermédiaire en opérations de banque et en services de
            paiement (IOBSP), carte de transaction immobilière [le cas échéant].
          </p>
          <p>
            Assurance responsabilité civile professionnelle et garantie financière conformes aux
            exigences du Code des assurances et du Code monétaire et financier, souscrites auprès
            de [assureur].
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA
            94107, États-Unis (service GitHub Pages).
          </p>

          <h2>Protection des données personnelles (RGPD)</h2>
          <p>
            Les données collectées via le formulaire de contact (nom, email, téléphone, message)
            sont utilisées exclusivement pour traiter votre demande et vous recontacter. Elles ne
            sont ni cédées, ni vendues à des tiers, et sont conservées pendant une durée maximale
            de trois ans après le dernier contact.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
            Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
            d'effacement, d'opposition et de portabilité de vos données. Pour l'exercer, écrivez à{" "}
            <a href="mailto:contact@hyperionpatrimoine.fr" style={{ color: "var(--gold-500)" }}>
              contact@hyperionpatrimoine.fr
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>

          <h2>Cookies</h2>
          <p>Ce site n'utilise aucun cookie de suivi ni outil de mesure d'audience tiers.</p>

          <h2>Avertissement</h2>
          <p>
            Les informations diffusées sur ce site sont fournies à titre purement informatif et ne
            constituent en aucun cas un conseil en investissement personnalisé, une sollicitation
            ou une offre de souscription. Tout investissement comporte des risques, notamment de
            perte en capital. Les performances passées ne préjugent pas des performances futures.
            Toute décision d'investissement doit être précédée d'un conseil personnalisé tenant
            compte de votre situation.
          </p>

          <h2>Médiation</h2>
          <p>
            En cas de litige, vous pouvez recourir gratuitement au médiateur compétent&nbsp;:
            Médiateur de l'AMF (activité CIF) — Autorité des marchés financiers, 17 place de la
            Bourse, 75082 Paris Cedex 02, ou le médiateur de [association professionnelle].
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus du site (textes, graphismes, logo) est la propriété exclusive
            de l'éditeur. Toute reproduction sans autorisation écrite préalable est interdite.
          </p>
        </div>
      </section>
    </>
  );
}
