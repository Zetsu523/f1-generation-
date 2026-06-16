# Rapport V2 - Visuels interactifs et pédagogie

Date : 16 juin 2026

## 1. Objectif de la V2

La V2 vise à rendre le site F1 Knowledge Hub plus visuel et plus pédagogique. La V1 fonctionnait déjà, mais plusieurs pages reposaient surtout sur des blocs de texte. Cette évolution ajoute des schémas, des faits rapides, une monoplace interactive, un comparateur d'époques et un mini quiz.

## 2. Contraintes respectées

- React JavaScript avec Vite.
- Conservation de `HashRouter` pour GitHub Pages.
- Aucun backend.
- Aucune dépendance supplémentaire.
- Contenu en français.
- Design sombre, sportif, moderne et responsive.
- Aucun document de conception supprimé.
- Aucun commit et aucun push effectués pendant cette intervention.

## 3. Nouveaux composants réutilisables

Quatre composants ont été ajoutés :

- `VisualSection` : section en deux colonnes associant texte court, faits rapides et diagramme.
- `QuickFact` : encart court pour mettre en avant une idée clé.
- `TechDiagram` : diagrammes SVG génériques pour moteurs, aérodynamique, pneus, règlements, glossaire et comparaison.
- `QuizCard` : mini quiz interactif avec état React, réponse sélectionnée et retour pédagogique.

Ces composants réduisent la densité textuelle et facilitent l'ajout de nouvelles explications visuelles.

## 4. Nouvelles pages

Deux pages ont été ajoutées :

### Monoplace interactive

Route :

```txt
#/monoplace-interactive
```

La page affiche une F1 générique en SVG avec des zones sélectionnables :

- aileron avant ;
- cockpit ;
- halo ;
- pneus ;
- freins ;
- pontons ;
- fond plat ;
- diffuseur ;
- aileron arrière ;
- unité de puissance.

Chaque zone affiche une catégorie, un rôle, une idée à retenir et un signal de performance.

### Comparateur d'époques

Route :

```txt
#/comparateur-epoques
```

La page permet de comparer deux générations de F1 parmi :

- années 1950-1960 ;
- années 1970-1980 ;
- années 1990 ;
- années 2000 ;
- années 2014+ hybride ;
- années 2022+ effet de sol.

La comparaison couvre :

- moteur ;
- aérodynamique ;
- sécurité ;
- pneus ;
- règlement.

## 5. Nouvelles données

Les données V2 ont été séparées dans `src/data/` :

- `interactiveParts.json` : zones de la monoplace interactive.
- `eraComparisons.json` : données du comparateur d'époques.
- `quickFacts.json` : faits rapides affichés sur les pages.
- `quizQuestions.json` : questions du mini quiz.

## 6. Pages améliorées

Les pages suivantes ont été enrichies avec des éléments plus visuels :

- Accueil : ajout d'une section visuelle, nouveaux accès vers la monoplace et le comparateur, mini quiz.
- Histoire : ajout d'un diagramme de comparaison et de faits rapides.
- Moteurs et évolution : ajout d'un schéma de groupe propulseur hybride.
- Composants : ajout d'une section visuelle sur la logique système d'une F1.
- Aérodynamique : remplacement du bloc principal par un diagramme SVG réutilisable.
- Pneus et stratégie : ajout d'un schéma sur les composés et le relais.
- Règlements techniques : ajout d'un diagramme de zones réglementaires.
- Glossaire : ajout d'une carte visuelle du vocabulaire et d'un filtre par catégorie.

## 7. Navigation

Le menu principal contient désormais deux nouvelles entrées :

- `Monoplace`
- `Comparateur`

Le header a été légèrement ajusté pour mieux accueillir les liens supplémentaires.

## 8. Accessibilité et responsive

Les ajouts utilisent :

- des boutons pour les zones interactives ;
- `aria-pressed` pour signaler les sélections ;
- des libellés accessibles sur les schémas SVG ;
- des grilles qui passent en une colonne sur mobile ;
- des tableaux et comparaisons lisibles sur petits écrans.

## 9. Vérifications

Un build intermédiaire a été lancé avec succès pendant l'implémentation :

```bash
npm.cmd run build
```

Les vérifications finales demandées sont :

```bash
npm.cmd run build
npm.cmd run build:pages
```

## 10. Prochaines étapes conseillées

- Ajouter des pages dédiées aux monoplaces mythiques et aux écuries.
- Ajouter des schémas plus détaillés sur l'ERS, les freins carbone et les suspensions.
- Ajouter plusieurs quiz courts par rubrique.
- Ajouter un mode de comparaison plus avancé avec filtres par thème.
- Vérifier visuellement le site sur mobile réel avant une nouvelle publication.
- Mettre à jour le README avec les nouvelles routes lorsque la V2 sera validée.

