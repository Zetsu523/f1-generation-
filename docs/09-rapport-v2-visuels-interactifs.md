# Rapport V2 - Visuels interactifs, contenus enrichis et publication

Date : 17 juin 2026

## 1. Objectif de la V2

L'objectif de la V2 etait de rendre F1 Knowledge Hub plus visuel, plus interactif et plus complet.

La V1 contenait deja la base React, les routes principales, les donnees JSON et le design general. La V2 ajoute :

- des parcours plus visuels ;
- une monoplace interactive basee sur une vraie photo ;
- une page ecuries ;
- des fiches de grands pilotes ;
- une section sur les crashs marquants et les progres de securite ;
- des visuels pour le glossaire et les equipes ;
- des photos documentees pour plusieurs pages ;
- des donnees JSON enrichies ;
- la publication effective sur GitHub Pages.

## 2. Contraintes respectees

- Site React en JavaScript avec Vite.
- Conservation de `HashRouter` pour eviter les erreurs 404 sur GitHub Pages.
- Projet statique, sans backend.
- Aucune cle API, aucun mot de passe et aucune donnee privee ajoutes.
- Aucune API payante ou necessitant un secret.
- Donnees pedagogiques placees dans `src/data/`.
- Contenu redige en francais.
- Design sombre, sportif, premium et responsive.
- Documents de conception conserves.
- Build GitHub Pages verifie avant publication.

## 3. Pages et routes concernees

La navigation contient maintenant les routes suivantes :

- `#/` : Accueil.
- `#/histoire` : Histoire de la F1.
- `#/moteurs` : Moteurs.
- `#/composants` : Composants.
- `#/ecuries` : Ecuries F1.
- `#/aerodynamique` : Aerodynamique.
- `#/pneus` : Pneus.
- `#/reglements` : Reglements.
- `#/monoplace-interactive` : Monoplace interactive.
- `#/comparateur-epoques` : Comparateur d'epoques.
- `#/glossaire` : Glossaire.
- `#/sources` : A propos et sources.

La route `#/ecuries` est maintenant presente dans le routeur et dans le menu.

## 4. Nouveaux composants reutilisables

Les composants V2 suivants sont disponibles dans `src/components/` :

- `VisualSection` : section pedagogique avec texte, faits rapides et visuel.
- `QuickFact` : encart court pour mettre en avant une idee cle.
- `TechDiagram` : diagrammes techniques reutilisables.
- `QuizCard` : mini quiz interactif avec etat React.
- `PhotoMedia` : bloc image avec credit, position d'image et fallback simple.
- `TeamVisual` : visuel d'identite pour les fiches d'ecuries.
- `GlossaryVisual` : visuel compact associe aux termes du glossaire.

Ces composants permettent de reduire la densite de texte et de rendre les explications plus lisibles.

## 5. Monoplace interactive

La page `#/monoplace-interactive` a ete enrichie avec une vraie photo de monoplace.

Fichiers principaux :

- `src/pages/InteractiveCar.jsx`
- `src/pages/InteractiveCar.css`
- `src/data/interactiveParts.json`
- `src/data/interactiveCarImage.json`

La page contient :

- une image reelle d'une Ferrari SF21 vue de cote ;
- des marqueurs cliquables places sur la voiture ;
- une liste de zones selectionnables ;
- un panneau descriptif mis a jour avec `useState` et `useMemo` ;
- des informations sur le role technique de chaque zone ;
- des credits image dans les donnees JSON.

Zones couvertes :

- aileron avant ;
- cockpit ;
- halo ;
- pneus ;
- freins ;
- pontons ;
- fond plat ;
- diffuseur ;
- aileron arriere ;
- unite de puissance.

## 6. Page Histoire enrichie

La page Histoire propose maintenant trois parcours :

- Histoire de la F1 ;
- Grands pilotes ;
- Grands crashs.

Fichiers principaux :

- `src/pages/History.jsx`
- `src/pages/History.css`
- `src/data/eras.json`
- `src/data/legendDrivers.json`
- `src/data/historicCrashes.json`

Ajouts realises :

- choix de parcours avec boutons accessibles ;
- cartes pour les pilotes legendaires ;
- photos de pilotes quand elles sont disponibles ;
- fallback par initiales quand une photo ne charge pas ;
- fiches sur des accidents marquants ;
- explication de l'impact de ces accidents sur la securite ;
- utilisation de `PhotoMedia` pour afficher les images et credits ;
- mise en page responsive dediee.

## 7. Page Ecuries ajoutee et enrichie

La page `#/ecuries` est maintenant integree au site.

Fichiers principaux :

- `src/pages/Teams.jsx`
- `src/pages/Teams.css`
- `src/components/TeamVisual/TeamVisual.jsx`
- `src/components/TeamVisual/TeamVisual.css`
- `src/data/teams.json`

La page contient :

- une introduction pedagogique sur le role d'une ecurie ;
- des fiches rapides par equipe ;
- pays, annee de creation, identite, pilotes, forces et voitures marquantes ;
- un visuel par ecurie ;
- deux faits rapides sur le developpement et la strategie ;
- une grille responsive en deux colonnes sur desktop et une colonne sur mobile.

Les pilotes affiches dans les donnees ont ete prevus comme reperes de grille 2026.

## 8. Glossaire ameliore

La page Glossaire conserve la recherche instantanee et ajoute :

- un filtre par categorie ;
- un visuel par terme via `GlossaryVisual` ;
- une section introductive `VisualSection` ;
- des faits rapides issus de `quickFacts.json`.

Fichiers principaux :

- `src/pages/Glossary.jsx`
- `src/components/GlossaryVisual/GlossaryVisual.jsx`
- `src/components/GlossaryVisual/GlossaryVisual.css`
- `src/data/glossary.json`
- `src/data/quickFacts.json`

## 9. Pages techniques ameliorees

Plusieurs pages de la V1 ont ete enrichies :

- Accueil : ajout d'une section visuelle, de liens vers la monoplace et le comparateur, et d'un mini quiz.
- Moteurs : ajout d'une section visuelle sur le groupe propulseur.
- Composants : ajout de photos et de visuels explicatifs.
- Aerodynamique : ajout d'une section diagrammee.
- Pneus : ajout de photos et d'explications visuelles.
- Reglements : ajout de photos et d'une lecture plus visuelle des contraintes.
- Comparateur d'epoques : comparaison de generations de F1 par moteur, aero, securite, pneus et reglement.

## 10. Donnees ajoutees ou enrichies

Les fichiers de donnees suivants ont ete ajoutes ou modifies :

- `src/data/components.json`
- `src/data/glossary.json`
- `src/data/historicCrashes.json`
- `src/data/interactiveCarImage.json`
- `src/data/interactiveParts.json`
- `src/data/quizQuestions.json`
- `src/data/regulations.json`
- `src/data/sources.json`
- `src/data/teams.json`
- `src/data/tyres.json`
- `src/data/legendDrivers.json`
- `src/data/eraComparisons.json`
- `src/data/quickFacts.json`

Les sources et credits image ont ete places dans les donnees lorsque les informations etaient precises.

## 11. Styles et responsive

Les styles ont ete ajustes pour :

- ameliorer les grilles responsives ;
- afficher les cartes d'ecuries correctement ;
- rendre la monoplace interactive utilisable sur mobile ;
- encadrer les images avec credits ;
- rendre les cartes Histoire plus lisibles ;
- ajouter des variations visuelles sans casser le theme sombre ;
- garder les tableaux et cartes lisibles sur petits ecrans.

Fichiers principaux :

- `src/styles/global.css`
- `src/styles/variables.css`
- `src/pages/History.css`
- `src/pages/InteractiveCar.css`
- `src/pages/Teams.css`
- styles des composants V2.

## 12. Verification locale

Avant publication, le build GitHub Pages a ete lance avec succes :

```bash
npm.cmd run build:pages
```

Resultat :

- build Vite termine correctement ;
- `dist/index.html` genere ;
- assets JS et CSS generes avec la base `/f1-generation-/`.

Note Windows : PowerShell bloque l'execution directe de `npm.ps1` sur cette machine. Les commandes npm ont donc ete lancees avec `npm.cmd`.

## 13. Publication GitHub Pages

La V2 a ete committee et poussee sur GitHub.

Commit de publication :

```txt
d7fbda5 Publie la v2 du site F1
```

Le push sur `main` a declenche le workflow :

```txt
.github/workflows/deploy.yml
```

Le workflow GitHub Actions s'est termine avec succes :

```txt
https://github.com/Zetsu523/f1-generation-/actions/runs/27704837418
```

Site publie :

```txt
https://zetsu523.github.io/f1-generation-/
```

Verification effectuee apres publication :

- statut HTTP `200` sur l'URL publique ;
- titre du site detecte ;
- assets charges avec le prefixe `/f1-generation-/`.

## 14. Fichiers crees pendant la V2 finale

Composants :

- `src/components/PhotoMedia/PhotoMedia.jsx`
- `src/components/PhotoMedia/PhotoMedia.css`

Donnees :

- `src/data/historicCrashes.json`
- `src/data/interactiveCarImage.json`

Pages :

- `src/pages/Teams.css`

Ces fichiers s'ajoutent aux composants V2 deja presents : `VisualSection`, `QuickFact`, `TechDiagram`, `QuizCard`, `TeamVisual` et `GlossaryVisual`.

## 15. Etat final du depot

Apres publication :

- la branche locale `main` est alignee avec `origin/main` ;
- le depot local est propre ;
- le site public est deploye ;
- le workflow GitHub Actions de deploiement est passe en succes.

## 16. Prochaines etapes conseillees

- Ajouter une vraie page `Monoplaces mythiques` avec `cars.json`.
- Completer les sources historiques entree par entree.
- Ajouter des tests de rendu ou un lint si souhaite.
- Verifier le rendu mobile sur plusieurs largeurs reelles.
- Ajouter une page ou section qui explique les sources et licences image de facon plus detaillee.
- Mettre a jour le README pour refleter toutes les routes disponibles.
