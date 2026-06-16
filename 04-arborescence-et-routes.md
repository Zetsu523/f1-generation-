# Arborescence et routes

## 1. Arborescence complète proposée
```txt
f1-knowledge-hub/
├── public/
│   ├── images/
│   │   ├── cars/
│   │   ├── components/
│   │   ├── teams/
│   │   └── logo.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── Timeline/
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   └── ComparisonTable/
│   │       ├── ComparisonTable.jsx
│   │       └── ComparisonTable.css
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
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── docs/
├── AGENTS.md
├── README.md
├── package.json
├── vite.config.js
└── index.html
```

## 2. Routes prévues
| Route | Page | Description |
|---|---|---|
| `#/` | Accueil | Présentation globale du site |
| `#/histoire` | Histoire | Évolution de la F1 par période |
| `#/moteurs` | Moteurs | Évolution des moteurs |
| `#/composants` | Composants | Pièces principales d'une F1 |
| `#/monoplaces` | Monoplaces | Voitures mythiques |
| `#/ecuries` | Écuries | Équipes importantes |
| `#/glossaire` | Glossaire | Définitions techniques |
| `#/a-propos` | À propos | Projet, sources, mentions |

## 3. Navigation mobile
Sur petit écran :
- Afficher le logo.
- Afficher un bouton menu.
- Ouvrir/fermer la navigation au clic.
- Fermer le menu après clic sur un lien.
