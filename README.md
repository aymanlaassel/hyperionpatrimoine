# Hyperion Patrimoine — Horizon 1

Site vitrine du programme immobilier **Horizon 1** (Tamesna) du promoteur
**Hyperion Patrimoine**. Construit avec **React + Vite**, déployé sur GitHub Pages.
Design d'origine : maquette `index 2.html` (landing bleu/or, Playfair Display + Jost).

## Pages

| Page | URL | Composant |
|---|---|---|
| Accueil (landing Horizon 1) | `index.html` | `src/views/Home.jsx` |
| Espace SAV client | `sav.html` | `src/views/Sav.jsx` |
| 404 | `404.html` | `src/views/NotFound.jsx` |

Topbar, navigation sticky et footer sont dans `src/components/Layout.jsx`.

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

## Visuels à déposer dans `public/assets/`

Tant qu'un fichier manque, le site affiche un habillage de remplacement élégant.
Dès que vous déposez le fichier, il apparaît automatiquement :

- `logo.png` — logo Hyperion Patrimoine (header + footer)
- `render1.jpg` — visuel principal (hero)
- `render2.jpg` — visuel du programme (section Horizon 1 + galerie)
- `render3.jpg`, `render4.jpg` — galerie
- `plan.png` — plan d'étage (section Prix)

## À compléter avant mise en production

- [ ] Numéro de téléphone réel (actuellement `+212 ___ ___ ___`) — dans
      `src/components/Layout.jsx` (topbar), `src/views/Home.jsx` et `src/views/Sav.jsx`
- [ ] Visuels du programme (voir ci-dessus)
- [ ] Formulaires : actuellement en `mailto:`. Pour un envoi serveur,
      brancher [Formspree](https://formspree.io) ou équivalent dans les
      gestionnaires `handleSubmit`.
- [ ] Domaine personnalisé éventuel (Settings → Pages → Custom domain)
