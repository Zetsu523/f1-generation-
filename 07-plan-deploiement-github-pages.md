# Plan de déploiement GitHub Pages

## 1. Préparation du projet
Vérifier que le projet compile :
```bash
npm run build
```

## 2. Configuration Vite
Dans `vite.config.js`, ajouter le `base` correspondant au nom du dépôt.

Exemple si le dépôt s'appelle `f1-knowledge-hub` :
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/f1-knowledge-hub/',
})
```

## 3. Routage conseillé
Utiliser `HashRouter` pour éviter les erreurs 404 sur GitHub Pages :
```jsx
import { HashRouter } from 'react-router-dom'
```

## 4. Déploiement avec GitHub Actions
Créer le fichier :
```txt
.github/workflows/deploy.yml
```

Contenu proposé :
```yml
name: Deploy React site to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 5. Réglage GitHub
Dans GitHub :
1. Aller dans le dépôt.
2. Settings.
3. Pages.
4. Source : GitHub Actions.
5. Vérifier l'URL générée après le premier déploiement.

## 6. Vérifications après publication
- Ouvrir la page d'accueil.
- Tester toutes les routes.
- Tester le responsive mobile.
- Vérifier les images.
- Vérifier que le rafraîchissement d'une page ne provoque pas d'erreur 404.
