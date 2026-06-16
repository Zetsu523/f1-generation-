# AGENTS.md — Projet F1 Knowledge Hub

## Objectif du projet
Créer un site web éducatif en React consacré à la Formule 1, permettant de comprendre l'histoire, les composants, les technologies et l'évolution des monoplaces de F1.

Le site doit être clair, moderne, responsive et hébergeable sur GitHub Pages.

## Stack technique
- JavaScript moderne
- React
- Vite recommandé pour le démarrage rapide et le build statique
- React Router avec `HashRouter` recommandé pour éviter les erreurs 404 sur GitHub Pages
- CSS Modules ou fichiers CSS classiques organisés par composant
- Données statiques au format JSON dans `/src/data`
- Déploiement GitHub Pages via GitHub Actions ou package `gh-pages`

## Règles générales pour Codex
- Toujours lire ce fichier avant de modifier le projet.
- Ne jamais supprimer une fonctionnalité existante sans explication claire.
- Préférer des composants simples, lisibles et réutilisables.
- Ne pas ajouter de backend : le site doit rester statique pour GitHub Pages.
- Ne pas utiliser d'API payante ou nécessitant une clé secrète.
- Ne jamais mettre de clé API, mot de passe ou donnée privée dans le code.
- Toute donnée historique doit venir de fichiers JSON versionnés.
- Toujours garder le site fonctionnel après chaque modification.

## Structure recommandée
```txt
f1-knowledge-hub/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Card/
│   │   ├── Timeline/
│   │   ├── SearchBar/
│   │   └── ComparisonTable/
│   ├── data/
│   │   ├── eras.json
│   │   ├── engines.json
│   │   ├── components.json
│   │   ├── cars.json
│   │   ├── teams.json
│   │   └── glossary.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── History.jsx
│   │   ├── Engines.jsx
│   │   ├── Components.jsx
│   │   ├── Cars.jsx
│   │   ├── Teams.jsx
│   │   ├── Glossary.jsx
│   │   └── About.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── docs/
├── AGENTS.md
├── package.json
└── vite.config.js
```

## Pages attendues
1. Accueil
   - Présentation du site
   - Accès rapide aux grandes rubriques
   - Mise en avant d'une frise chronologique

2. Histoire de la F1
   - Grandes périodes
   - Évolution des règlements
   - Évolution de la sécurité

3. Moteurs F1
   - Moteurs atmosphériques
   - Turbo
   - V10
   - V8
   - V6 turbo hybride
   - Tableau comparatif par époque

4. Composants d'une F1
   - Châssis
   - Aileron avant
   - Aileron arrière
   - Diffuseur
   - Suspension
   - Freins
   - Pneus
   - Volant
   - ERS
   - Boîte de vitesses

5. Monoplaces mythiques
   - Fiches voitures
   - Année
   - Écurie
   - Pilotes
   - Moteur
   - Particularités techniques

6. Écuries
   - Fiches équipes
   - Historique
   - Palmarès
   - Voitures marquantes

7. Glossaire
   - Définitions simples
   - Recherche par mot-clé

8. À propos / Sources
   - But pédagogique
   - Sources utilisées
   - Avertissement : site non officiel

## Qualité de code attendue
- Utiliser des noms de composants explicites.
- Un composant = une responsabilité.
- Éviter les fichiers trop longs.
- Factoriser les cartes, tableaux, filtres et timelines.
- Gérer les états simples avec `useState`.
- Utiliser `useMemo` si une recherche ou un filtrage devient coûteux.
- Garder les imports propres et inutilisés supprimés.

## Design attendu
- Style moderne, sportif, premium.
- Thème sombre recommandé avec accents rouge, blanc et gris métal.
- Responsive mobile/tablette/desktop.
- Navigation simple.
- Cartes lisibles.
- Tableaux comparatifs clairs.
- Frises chronologiques visuelles.

## Accessibilité
- Contrastes suffisants.
- Images avec attribut `alt`.
- Navigation clavier correcte.
- Titres hiérarchisés dans l'ordre.
- Ne pas transmettre une information uniquement par la couleur.

## SEO minimal
- Une balise `<title>` pertinente.
- Meta description dans `index.html`.
- Contenus textuels riches et structurés.
- URLs propres si possible, ou routes hash compatibles GitHub Pages.

## Commandes recommandées
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Tests avant validation
Avant de considérer une tâche terminée :
```bash
npm run build
```
Si ESLint est installé :
```bash
npm run lint
```

## Déploiement GitHub Pages
- Le projet doit produire un dossier `dist/`.
- Si le dépôt est un Project Pages, configurer `base` dans `vite.config.js` avec le nom du dépôt.
- Utiliser `HashRouter` pour éviter les problèmes de rafraîchissement sur les routes.

Exemple :
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nom-du-repo/',
})
```

## Convention de commits
Utiliser des messages clairs en français :
- `Initialise le projet React F1`
- `Ajoute la page moteurs`
- `Ajoute la frise chronologique`
- `Corrige le responsive du header`

## Règles de contenu
- Ne pas inventer de statistiques précises sans source.
- Ajouter une source dans les fichiers de données quand une information historique précise est renseignée.
- Garder un ton pédagogique et accessible.
- Expliquer les termes techniques simplement.

## Priorités de développement
1. Initialiser le projet React/Vite.
2. Créer le layout global : header, footer, routes.
3. Ajouter les données JSON de base.
4. Créer les pages principales.
5. Ajouter recherche, filtres et tableaux comparatifs.
6. Améliorer le design responsive.
7. Ajouter les sources et optimiser pour GitHub Pages.
