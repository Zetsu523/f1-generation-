# Rapport d'initialisation V1 - F1 Knowledge Hub

Date : 16 juin 2026

Note : ce rapport couvre uniquement l'initialisation V1 du projet. Les ajouts realises ensuite, notamment les visuels interactifs, la page ecuries, les photos, les donnees enrichies et la publication GitHub Pages, sont decrits dans `docs/09-rapport-v2-visuels-interactifs.md`.

## 1. Objectif de l'intervention

L'objectif etait de transformer le depot, qui contenait uniquement les documents de conception, en une premiere version fonctionnelle d'un site React educatif sur la Formule 1.

Le site devait etre :

- code en JavaScript avec React ;
- lanceable avec `npm install` puis `npm run dev` ;
- compilable avec `npm run build` ;
- statique et compatible avec GitHub Pages ;
- organise avec des composants, pages, donnees et styles separes ;
- responsive desktop, tablette et mobile ;
- redige en francais ;
- conforme aux consignes du fichier `AGENTS.md`.

## 2. Etat initial du depot

Avant l'intervention, le depot contenait principalement :

- `AGENTS.md` ;
- `README.md` ;
- `01-cahier-des-charges.md` ;
- `02-specifications-fonctionnelles.md` ;
- `03-specifications-techniques.md` ;
- `04-arborescence-et-routes.md` ;
- `05-design-ui-ux.md` ;
- `06-backlog-user-stories.md` ;
- `07-plan-deploiement-github-pages.md`.

Aucun projet React n'etait encore present :

- pas de `package.json` ;
- pas de `src/` ;
- pas de `vite.config.js` ;
- pas de configuration Vite ;
- pas de routes React ;
- pas de composants applicatifs.

Les fichiers de conception existants ont ete conserves.

## 3. Choix techniques appliques

La V1 utilise :

- React en JavaScript ;
- Vite comme outil de developpement et de build ;
- React Router avec `HashRouter`, pour eviter les erreurs 404 sur GitHub Pages ;
- des fichiers JSON dans `src/data/` pour les donnees pedagogiques ;
- du CSS classique organise par composant et styles globaux ;
- un workflow GitHub Actions pour publier le dossier `dist/` sur GitHub Pages.

Aucun backend, aucune base de donnees distante et aucune cle API n'ont ete ajoutes.

## 4. Structure creee

La structure applicative suivante a ete ajoutee :

```txt
f1-generation-/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── 08-rapport-initialisation-v1.md
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-f1-tech.png
│       └── logo.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── router/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 5. Pages ajoutees

Les pages suivantes ont ete creees :

- Accueil ;
- Histoire de la F1 ;
- Moteurs et evolution ;
- Composants d'une F1 ;
- Aerodynamique ;
- Pneus et strategie ;
- Reglements techniques ;
- Glossaire F1 ;
- A propos et sources.

Les routes sont gerees dans `src/router/AppRouter.jsx` avec `HashRouter`.

## 6. Composants reutilisables crees

Les composants suivants ont ete ajoutes :

- `Header` : navigation principale responsive avec menu mobile ;
- `Footer` : mentions du site et liens secondaires ;
- `Card` : carte reutilisable pour les contenus pedagogiques ;
- `Timeline` : frise chronologique pour l'histoire de la F1 ;
- `SearchBar` : recherche reutilisable ;
- `ComparisonTable` : tableau comparatif responsive ;
- `PageTitle` : en-tete uniforme pour les pages.

## 7. Donnees separees

Les donnees pedagogiques ont ete placees dans `src/data/` :

- `eras.json` : grandes periodes historiques ;
- `engines.json` : generations de moteurs ;
- `components.json` : composants principaux d'une F1 ;
- `aerodynamics.json` : notions aerodynamiques ;
- `tyres.json` : pneus et strategie ;
- `regulations.json` : reperes de reglementation technique ;
- `glossary.json` : termes du glossaire ;
- `sources.json` : sources et references.

Cette organisation permet de completer le contenu plus tard sans modifier la logique des pages.

## 8. Fonctionnalites presentes dans la V1

La premiere version contient :

- une page d'accueil avec hero visuel ;
- une navigation responsive ;
- une frise chronologique ;
- des cartes pedagogiques reutilisables ;
- un tableau comparatif des moteurs ;
- un tableau de principes de strategie pneus ;
- un filtrage par categorie sur les composants ;
- une recherche instantanee dans le glossaire ;
- une page de sources ;
- un design sombre, sportif, lisible et responsive ;
- une configuration compatible GitHub Pages.

## 9. Design et assets

Le design applique suit les consignes du projet :

- theme sombre ;
- accents rouges, blancs, gris metal et bleu technique ;
- cartes lisibles ;
- tableaux avec scroll horizontal sur petits ecrans ;
- header mobile avec bouton menu ;
- hero visuel pleine largeur.

Un visuel generique de monoplace moderne en soufflerie a ete genere et ajoute dans :

```txt
public/images/hero-f1-tech.png
```

Le visuel ne contient pas de logo d'equipe, pas de sponsor et pas de texte.

## 10. Configuration et scripts npm

Le fichier `package.json` contient les scripts suivants :

```bash
npm run dev
npm run build
npm run build:pages
npm run preview
```

Le script `build:pages` compile le site avec le `base` adapte au depot :

```bash
vite build --base=/f1-generation-/
```

## 11. Verification effectuee

Les commandes suivantes ont ete lancees avec succes :

```bash
npm.cmd install react react-dom react-router-dom
npm.cmd install -D vite @vitejs/plugin-react
npm.cmd run build
npm.cmd run build:pages
```

Resultat :

- le build Vite s'est termine correctement ;
- le dossier `dist/` a ete genere ;
- le serveur de developpement Vite a ete lance ;
- la page locale a repondu avec un statut HTTP `200`.

URL locale de test :

```txt
http://127.0.0.1:5173/
```

Note : PowerShell bloque l'execution directe de `npm.ps1` sur cette machine. Les commandes ont donc ete lancees avec `npm.cmd`, sans modifier la configuration systeme.

## 12. Deploiement GitHub Pages

Un workflow GitHub Actions a ete cree :

```txt
.github/workflows/deploy.yml
```

Il effectue :

1. le checkout du depot ;
2. l'installation de Node ;
3. `npm ci` ;
4. `npm run build:pages` ;
5. l'envoi du dossier `dist/` vers GitHub Pages.

Dans GitHub, il faudra regler la source Pages sur `GitHub Actions`.

## 13. Fichiers crees ou modifies

Fichiers de configuration :

- `.gitignore` ;
- `index.html` ;
- `package.json` ;
- `package-lock.json` ;
- `vite.config.js` ;
- `.github/workflows/deploy.yml`.

Assets :

- `public/favicon.svg` ;
- `public/images/logo.svg` ;
- `public/images/hero-f1-tech.png`.

Application React :

- `src/main.jsx` ;
- `src/App.jsx` ;
- `src/router/AppRouter.jsx` ;
- `src/router/routes.js`.

Composants :

- `src/components/Header/Header.jsx` ;
- `src/components/Header/Header.css` ;
- `src/components/Footer/Footer.jsx` ;
- `src/components/Footer/Footer.css` ;
- `src/components/Card/Card.jsx` ;
- `src/components/Card/Card.css` ;
- `src/components/Timeline/Timeline.jsx` ;
- `src/components/Timeline/Timeline.css` ;
- `src/components/SearchBar/SearchBar.jsx` ;
- `src/components/SearchBar/SearchBar.css` ;
- `src/components/ComparisonTable/ComparisonTable.jsx` ;
- `src/components/ComparisonTable/ComparisonTable.css` ;
- `src/components/PageTitle/PageTitle.jsx` ;
- `src/components/PageTitle/PageTitle.css`.

Pages :

- `src/pages/Home.jsx` ;
- `src/pages/History.jsx` ;
- `src/pages/Engines.jsx` ;
- `src/pages/Components.jsx` ;
- `src/pages/Aerodynamics.jsx` ;
- `src/pages/Tyres.jsx` ;
- `src/pages/Regulations.jsx` ;
- `src/pages/Glossary.jsx` ;
- `src/pages/About.jsx`.

Donnees :

- `src/data/eras.json` ;
- `src/data/engines.json` ;
- `src/data/components.json` ;
- `src/data/aerodynamics.json` ;
- `src/data/tyres.json` ;
- `src/data/regulations.json` ;
- `src/data/glossary.json` ;
- `src/data/sources.json`.

Styles :

- `src/styles/variables.css` ;
- `src/styles/global.css`.

Documentation :

- `docs/08-rapport-initialisation-v1.md`.

## 14. Commandes utiles

Installer les dependances :

```bash
npm install
```

Lancer le site en developpement :

```bash
npm run dev
```

Tester le build de production :

```bash
npm run build
```

Tester le build GitHub Pages :

```bash
npm run build:pages
```

Previsualiser le build :

```bash
npm run preview
```

Si PowerShell bloque `npm`, utiliser :

```bash
npm.cmd run dev
npm.cmd run build
npm.cmd run build:pages
```

## 15. Prochaines etapes conseillees

Les ameliorations recommandees pour la suite sont :

- ajouter les pages `Monoplaces mythiques` et `Ecuries` ;
- creer `cars.json` et `teams.json` ;
- enrichir les sources pour chaque information historique precise ;
- ajouter des schemas explicatifs plus detailles pour l'aerodynamique, l'ERS, les freins et les pneus ;
- verifier le rendu mobile dans plusieurs largeurs d'ecran ;
- ajouter un lint si souhaite ;
- publier sur GitHub Pages via le workflow cree ;
- faire un premier commit manuel avec un message clair en francais.

## 16. Notes importantes

- Aucun commit automatique n'a ete effectue.
- Aucun push GitHub n'a ete effectue.
- Aucun backend n'a ete ajoute.
- Aucune cle API ou donnee privee n'a ete ajoutee.
- Les fichiers de conception existants ont ete conserves.
- Le projet reste statique et compatible GitHub Pages.
