# Charte Graphique — ASI (African Society of Informatics)

*Document établi à partir de l'analyse du site [asisarl.com](https://asisarl.com/) (code source des pages Accueil, Solutions et Contact).*

---

## 1. Identité générale

- **Nom** : ASI (African Society of Informatics) — ASI SARL
- **Positionnement** : conseil, développement de produits et formation numérique, à destination des entreprises et institutions ouest-africaines
- **Signature/baseline** : *« Transformez vos idées en solutions digitales innovantes »*
- **Logo** : wordmark texte simple **« ASI »**, en majuscules, sans logotype graphique complexe — utilisé tel quel sur fond clair et sur fond sombre (couleur adaptée automatiquement)

---

## 2. Palette de couleurs

### Couleurs principales

| Rôle | Couleur | Code HEX | Usage |
|---|---|---|---|
| Bleu marine / Primaire | ⬛ Bleu nuit profond | `#000052` | Fonds sombres (hero, sections dark), dégradés, texte accentué sur fond clair |
| Bleu accent / Secondaire | 🟦 Bleu électrique | `#03AEFF` | CTA, liens, icônes, éléments d'accent, hover, bordures |
| Blanc | ⬜ Blanc | `#FFFFFF` | Fonds clairs, texte sur fond sombre |
| Noir (texte) | ⬛ Noir | `#000000` | Titres sur fond clair (souvent en `rgba(0,0,0,0.7)` pour le corps de texte) |

### Dégradés

- **Dégradé principal (fond sombre / hero)** :
  `linear-gradient(155deg, #000052 0%, #071a5c 42%, #0d2a6e 100%)`
- **Dégradé CTA / boutons de mise en avant** :
  `linear-gradient(135deg, #03AEFF 0%, #000052 100%)`
- **Dégradé pastille "step badge"** : même dégradé bleu clair → bleu marine

### Couleurs d'accompagnement (touches décoratives, orbes/particules du hero)

| Couleur | Code HEX | Usage |
|---|---|---|
| Violet | `#6c5ce7` | Orbe décoratif secondaire (hero) |
| Vert menthe / teal | `#00d4aa` | Orbe décoratif tertiaire (hero), touche de contraste |

### Nuances de texte (opacité sur blanc ou noir plutôt que nouvelles couleurs)

- Texte principal sur fond clair : `rgba(0, 0, 0, 0.7)`
- Texte secondaire / léger sur fond clair : `rgba(0, 0, 0, 0.55)` à `rgba(0, 0, 0, 0.65)`
- Texte sur fond sombre : `rgba(255, 255, 255, 0.9)` (fort) / `rgba(255, 255, 255, 0.7-0.8)` (léger, classe `mil-light-soft`)

**Règle d'usage** : le site alterne strictement des sections à fond blanc (`#FFFFFF`) et des sections à fond sombre (dégradé bleu marine), jamais de gris neutre en fond de section — le contraste se fait uniquement blanc / bleu marine, avec le bleu électrique `#03AEFF` comme unique couleur d'accent transversale.

---

## 3. Typographie

Les polices exactes sont chargées via `css/style.css` (non exposé dans le HTML fourni) — à confirmer directement dans ce fichier si une reproduction fidèle est nécessaire. Ce qui est observable dans la structure :

- **Hiérarchie** : `h1` / `h2` pour les titres de section (grande taille, ex. `clamp(42px, 8vw, 72px)` sur le hero), `h4`/`h6` pour les sous-titres de cartes
- **Graisses** : titres en `font-weight: 700` (voire variantes "thin" via la classe `mil-thin` pour un contraste léger/gras dans un même titre — ex. *"idées"* en fin allégée)
- **Style de titre signature** : un même `<h1>`/`<h2>` mélange souvent une partie en graisse normale et une partie en graisse fine (classe `.mil-thin`), créant un effet de contraste éditorial
- **Interlignage** : généreux sur le corps de texte (`line-height: 1.6` à `1.85`)
- **Casse** : labels/tags en majuscules avec `letter-spacing` (ex. `COMPTABILITÉ`, `RESSOURCES HUMAINES`)

---

## 4. Boutons & CTA

Trois styles de boutons cohabitent, tous en `border-radius` arrondi (10px pour rectangulaire, 50px pour "pill") :

| Style | Fond | Texte | Bordure | Usage |
|---|---|---|---|---|
| **Primaire** | `#03AEFF` | Blanc | — | Action principale (ex. "Découvrir nos services") |
| **Secondaire** | Transparent | Blanc/clair | `1px solid rgba(255,255,255,0.35)` | Action alternative sur fond sombre |
| **Tertiaire** | `rgba(255,255,255,0.08)` (verre dépoli) | Blanc | `1px solid rgba(255,255,255,0.22)` | Action tertiaire, effet "glassmorphism" (`backdrop-filter: blur`) |
| **CTA pill (footer/contact)** | Blanc | Bleu marine `#000052` | — | Boutons d'appel à l'action finaux (WhatsApp), forme pilule `border-radius: 50px` |

- **Icônes intégrées** aux boutons (Font Awesome) : fusée 🚀 pour "Découvrir", diplôme 🎓 pour "Programmes", WhatsApp pour le contact
- **Micro-interactions** : `translateY(-2px)` au survol + accentuation de l'ombre portée, transition `0.3s ease`
- **Ombres** : ombres colorées en teinte bleu accent, ex. `box-shadow: 0 12px 40px rgba(3, 174, 255, 0.35)`

---

## 5. Composants UI

- **Cartes de service / solution** : fond blanc, coins arrondis (`15-20px`), ombre douce (`box-shadow: 0 10px 30-40px rgba(0,0,0,0.08)`), légère élévation au survol
- **Badges d'étape numérotés** (processus) : pastille circulaire en dégradé bleu, chiffre centré, associée à un titre bleu marine `#000052` et un texte gris/noir léger
- **Pills technologiques** (stack technique) : petites étiquettes arrondies dans des panneaux "verre dépoli" (`asi-panel-glass`) sur fond sombre, listant les briques technologiques par catégorie (Expérience digitale, Plateforme applicative, Cloud & DevOps, Data & Intégrations)
- **Cartes partenaires** : grille de logos partenaires en cartes neutres, uniformes
- **Labels/tags** : petite étiquette en majuscules + couleur accent (catégorie) suivie d'une étiquette secondaire grise (type de produit, ex. "Web App", "SaaS")

---

## 6. Iconographie

- **Bibliothèque** : Font Awesome (icônes de contour/plein classiques : `fa-rocket`, `fa-graduation-cap`, `fa-whatsapp`, `fa-map-marker-alt`, `fa-envelope`, `fa-laptop-code`, `fa-server`, `fa-cloud`, `fa-database`, `fa-project-diagram`, `fa-clock`, `fa-facebook`, `fa-linkedin`)
- **Traitement** : icônes le plus souvent placées dans un cercle ou un carré arrondi avec fond bleu accent en dégradé, icône blanche ou bleue en aplat sur fond clair translucide

---

## 7. Style visuel & imagerie

- **Fond sombre "tech"** : grille pointillée (`background-image` en lignes fines `rgba(3,174,255,0.06)`), orbes flous animés (`filter: blur(72px)`) en bleu, violet et teal, symbole de code `{ }` flottant — évoque un univers technologique, feutré, spatial
- **Photographie** : photos d'équipe en situation, traitement naturel, pas de filtre stylisé marqué ; visuels de produits/écrans pour illustrer les solutions logicielles
- **Décoration géométrique** : cercles/orbes décoratifs semi-transparents en coin de section (`rgba(255,255,255,0.05)`), formes arrondies récurrentes (jamais d'angles vifs)
- **Ambiance générale** : sobre, corporate-tech, contrastée (fonds alternés blanc/bleu nuit), avec une seule couleur vive dominante (bleu électrique) pour guider l'œil

---

## 8. Ton éditorial

- Vouvoiement, ton direct et orienté bénéfice client (*"Transformez vos idées…", "Discutons de votre projet…"*)
- Vocabulaire d'expertise technique assumé (Agile/Scrum, PMI/PMBOK, CI/CD, sécurité, scalabilité) mêlé à un discours humain et de proximité (*"nous mettons l'humain au centre de chaque projet"*)
- Structure de contenu en sections courtes, chiffres clés mis en avant (50+ projets, 5+ ans d'expérience)

---

## 9. Limites de cette charte

Ce document est reconstitué par observation du code source (HTML + styles inline) des pages Accueil, Solutions et Contact fournies, sans accès direct à `css/style.css` (feuille de style principale du thème). Non confirmés à ce stade :
- Le nom exact des polices utilisées (`font-family`)
- L'existence éventuelle d'une grille d'espacement ou d'un design system formalisé au-delà de ce qui est observable
- D'éventuelles variantes de couleurs propres aux pages non fournies (Services, Programmes, pages Solutions individuelles)
