# Spécifications techniques — Site F1 React

## 1. Architecture générale
Le projet sera une application React statique générée avec Vite. Les données seront stockées localement dans des fichiers JSON afin de rester compatible avec GitHub Pages.

## 2. Choix techniques
| Besoin | Solution |
|---|---|
| Interface | React |
| Build | Vite |
| Routage | React Router |
| Hébergement | GitHub Pages |
| Données | JSON local |
| Style | CSS Modules ou CSS classique |
| Versioning | Git + GitHub |
| Agent IA | Codex avec AGENTS.md |

## 3. Routage
Pour GitHub Pages, il est recommandé d'utiliser `HashRouter`, car GitHub Pages sert des fichiers statiques et peut provoquer des erreurs 404 lors du rafraîchissement d'une route interne.

Exemple d'URL :
```txt
https://utilisateur.github.io/f1-knowledge-hub/#/moteurs
```

## 4. Arborescence recommandée
```txt
src/
├── components/
├── data/
├── pages/
├── router/
├── styles/
├── App.jsx
└── main.jsx
```

## 5. Modèle de données
### eras.json
```json
[
  {
    "id": "1950-1960",
    "title": "Les débuts de la F1",
    "period": "1950-1960",
    "description": "Naissance du championnat du monde moderne.",
    "highlights": ["Moteurs avant", "Sécurité limitée", "Circuits routiers"]
  }
]
```

### engines.json
```json
[
  {
    "id": "v10",
    "name": "Moteurs V10",
    "period": "années 1990-2005",
    "type": "Atmosphérique",
    "description": "Moteurs très hauts dans les tours, emblématiques par leur son.",
    "keyFeatures": ["Régime élevé", "Son très aigu", "Puissance importante"]
  }
]
```

### components.json
```json
[
  {
    "id": "diffuser",
    "name": "Diffuseur",
    "category": "Aérodynamique",
    "role": "Accélère l'air sous la voiture pour générer de l'appui.",
    "simpleExplanation": "Il aide la voiture à coller à la piste dans les virages."
  }
]
```

### glossary.json
```json
[
  {
    "term": "DRS",
    "definition": "Système qui ouvre une partie de l'aileron arrière pour réduire la traînée et faciliter les dépassements.",
    "category": "Aérodynamique"
  }
]
```

## 6. Composants principaux
- `Header` : navigation principale.
- `Footer` : liens secondaires et mention site non officiel.
- `Card` : carte réutilisable.
- `Timeline` : frise chronologique.
- `SearchBar` : recherche dans le glossaire.
- `ComparisonTable` : tableau comparatif des moteurs.
- `PageTitle` : titre uniforme des pages.

## 7. Gestion des données
Les pages importent les fichiers JSON directement :
```js
import engines from '../data/engines.json'
```

Avantage :
- Simple.
- Rapide.
- Compatible GitHub Pages.
- Facile à versionner.

## 8. Déploiement GitHub Pages
### Option recommandée : GitHub Actions
Créer un workflow qui :
1. Installe les dépendances.
2. Lance `npm run build`.
3. Publie le dossier `dist`.

### Configuration Vite
Si le dépôt s'appelle `f1-knowledge-hub`, configurer :
```js
base: '/f1-knowledge-hub/'
```

## 9. Performance
- Images optimisées.
- Composants simples.
- Pas de dépendances inutiles.
- Lazy loading possible plus tard.

## 10. Sécurité
- Pas de clé API.
- Pas de formulaire envoyant des données sensibles.
- Pas de stockage utilisateur.
- Dépendances mises à jour régulièrement.
