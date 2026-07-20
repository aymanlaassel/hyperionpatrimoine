# Hyperion Patrimoine

Site vitrine du cabinet de gestion de patrimoine **Hyperion Patrimoine**.
Construit avec **React + Vite** (multi-pages), déployé sur GitHub Pages.

## Pages

| Page | URL | Composant |
|---|---|---|
| Accueil | `index.html` | `src/views/Home.jsx` |
| Nos expertises | `services.html` | `src/views/Services.jsx` |
| Le cabinet | `a-propos.html` | `src/views/About.jsx` |
| Contact (formulaire + FAQ) | `contact.html` | `src/views/Contact.jsx` |
| Mentions légales | `mentions-legales.html` | `src/views/Legal.jsx` |
| 404 | `404.html` | `src/views/NotFound.jsx` |

Le header, le footer et les comportements communs (menu mobile, révélation au
défilement, compteurs animés) sont dans `src/components/Layout.jsx`.

## Développement local

```bash
npm install     # une seule fois
npm run dev     # serveur de dev → http://localhost:5173/hyperionpatrimoine/
```

Build de production et prévisualisation :

```bash
npm run build   # génère dist/
npm run preview # sert dist/ en local
```

## Déploiement (GitHub Pages)

Le déploiement est **entièrement automatique** : à chaque push sur `main`, le
workflow `.github/workflows/deploy.yml` exécute `npm run build` et publie
`dist/` sur la branche `gh-pages`, qui est la source configurée de GitHub Pages.

```bash
git push   # c'est tout — le site est en ligne quelques minutes plus tard
```

Site en ligne : https://aymanlaassel.github.io/hyperionpatrimoine/

## À personnaliser avant mise en production

- [ ] Coordonnées réelles (email, téléphone, adresse) — `src/components/Layout.jsx`,
      `src/views/Contact.jsx`, `src/views/Legal.jsx`
- [ ] Champs `[entre crochets]` de `src/views/Legal.jsx` (RCS, ORIAS, assureur…)
- [ ] Chiffres clés de la page d'accueil (`src/views/Home.jsx`)
- [ ] Témoignages clients (actuellement fictifs, à remplacer par de vrais avis)
- [ ] Formulaire de contact : actuellement en `mailto:`. Pour un envoi serveur,
      brancher [Formspree](https://formspree.io) ou équivalent dans le
      gestionnaire `handleSubmit` de `src/views/Contact.jsx`.
- [ ] Domaine personnalisé éventuel (Settings → Pages → Custom domain)
