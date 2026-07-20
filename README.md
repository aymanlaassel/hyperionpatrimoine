# Hyperion Patrimoine

Site vitrine du cabinet de gestion de patrimoine **Hyperion Patrimoine**.
Site statique (HTML / CSS / JS), sans build ni dépendances — déployé sur GitHub Pages.

## Pages

| Page | Fichier |
|---|---|
| Accueil | `index.html` |
| Nos expertises | `services.html` |
| Le cabinet | `a-propos.html` |
| Contact (formulaire + FAQ) | `contact.html` |
| Mentions légales | `mentions-legales.html` |
| 404 | `404.html` |

## Développement local

Aucune installation nécessaire :

```bash
# depuis la racine du projet
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement (GitHub Pages)

Le déploiement est **entièrement automatique** : à chaque push sur `main`, le
workflow `.github/workflows/deploy.yml` synchronise `main` vers la branche
`gh-pages`, qui est la source configurée de GitHub Pages.

```bash
git push   # c'est tout — le site est en ligne ~1 minute plus tard
```

Site en ligne : https://aymanlaassel.github.io/hyperionpatrimoine/

## À personnaliser avant mise en production

- [ ] Coordonnées réelles (email, téléphone, adresse) dans les 5 pages HTML
- [ ] Champs `[entre crochets]` de `mentions-legales.html` (RCS, ORIAS, assureur…)
- [ ] Chiffres clés de la page d'accueil (années d'expérience, clients…)
- [ ] Témoignages clients (actuellement fictifs, à remplacer par de vrais avis)
- [ ] Formulaire de contact : actuellement en `mailto:`. Pour un envoi serveur,
      brancher [Formspree](https://formspree.io) ou équivalent dans `script.js`
      (gestionnaire `#contact-form`).
- [ ] Domaine personnalisé éventuel (Settings → Pages → Custom domain)
