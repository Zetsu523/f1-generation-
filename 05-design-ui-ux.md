# Design UI/UX — Site F1

## 1. Direction artistique
Le site doit donner une impression de vitesse, de technologie et de précision.

Style recommandé :
- Fond sombre.
- Contrastes forts.
- Accent rouge inspiré de la compétition.
- Cartes avec effet léger de profondeur.
- Typographie moderne et lisible.

## 2. Palette proposée
```css
:root {
  --color-bg: #090909;
  --color-surface: #151515;
  --color-surface-light: #202020;
  --color-primary: #e10600;
  --color-text: #f5f5f5;
  --color-muted: #b5b5b5;
  --color-border: #333333;
}
```

## 3. Typographie
- Titres : police forte, sportive, sans-serif.
- Textes : police simple et lisible.
- Éviter les textes trop petits sur mobile.

## 4. Layout
### Desktop
- Header horizontal.
- Contenu centré avec largeur maximale.
- Sections espacées.
- Grilles de cartes en 3 colonnes si possible.

### Mobile
- Menu burger.
- Cartes en une colonne.
- Tableaux adaptables ou scroll horizontal.
- Boutons larges et faciles à cliquer.

## 5. Composants visuels
### Cartes
Utilisées pour :
- Composants techniques.
- Voitures.
- Écuries.
- Périodes historiques.

Chaque carte doit avoir :
- Titre clair.
- Texte court.
- Image optionnelle.
- Lien ou bouton “Découvrir”.

### Frise chronologique
Utilisée pour :
- Histoire de la F1.
- Évolution des moteurs.

### Tableaux comparatifs
Utilisés pour :
- Comparer les moteurs par époque.
- Comparer les monoplaces.

## 6. Accessibilité
- Contraste suffisant entre texte et fond.
- Liens visibles.
- Boutons avec état hover/focus.
- Images avec texte alternatif.
- Titres dans le bon ordre : h1, h2, h3.

## 7. Ton éditorial
Le ton doit être :
- Pédagogique.
- Clair.
- Passionné.
- Accessible aux débutants.

Exemple :
> Le diffuseur est une pièce située à l'arrière du fond plat. Son rôle est d'accélérer l'air sous la voiture pour créer de l'appui aérodynamique.
