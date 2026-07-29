# Direction créative — refonte group-acme.com

## Positionnement visuel cible
Un site vitrine BTP/mining crédible pour l'Afrique de l'Ouest, avec un niveau de finition et de sobriété proche d'une agence tech (référence asisarl.com) plutôt qu'un template de construction générique américain — c'est-à-dire : moins de blocs décoratifs isolés, plus de grilles claires et cliquables, des chiffres clés resserrés, un CTA WhatsApp assumé.

## Palette proposée pour la refonte

Basée sur le bleu de marque déjà identitaire (`#0066cc` / `#0971f2`), étendue avec un accent chaud propre au secteur BTP :

| Usage | Couleur | Hex |
|---|---|---|
| Bleu de marque (fond header, CTA principaux) | 🟦 | `#0066cc` |
| Bleu vif (liens, hover, éléments interactifs) | 🔵 | `#0971f2` |
| Accent chantier (badges, indicateurs secondaires, icônes BTP) | 🟧 | `#e8641c` *(à valider avec le client — orange sécurité/chantier)* |
| Fond sombre (sections contrastées, footer) | ⬛ | `#12181f` |
| Gris texte | ◻️ | `#5c6470` |
| Blanc | ⬜ | `#ffffff` |

*(La couleur accent est une proposition à discuter — le CSS actuel d'ACME ne contient aucune couleur chaude, il faudra trancher avec le client plutôt que l'imposer.)*

## Typographie
- Conserver **Poppins** (déjà utilisée, bonne lisibilité, disponible en variable font) pour titres et interface
- Une police secondaire à empattements légers pour les citations/témoignages clients, si le contenu s'y prête plus tard

## Principes structurels à appliquer (héritage asisarl.com + corrections de l'audit)
1. **Grille de services cliquable** (4 à 6 entrées, chacune vers une page dédiée) au lieu des 6 blocs statiques actuels sans lien
2. **2-3 chiffres clés maximum** en façade, cohérents avec le discours "7 ans d'existence" (résoudre l'incohérence "3 pays couverts / 2 awards")
3. **CTA WhatsApp flottant** relié aux deux numéros déjà publiés
4. **Portfolio en vraies fiches projet** (titre, lieu, type de chantier, 1 visuel retravaillé) plutôt que des vignettes WhatsApp brutes avec libellés génériques ("Contrôle", "Hydraulique"…)
5. **Une seule langue par page** — plus de mélange français/anglais (page Services et formulaire de contact actuellement en anglais)
6. Remplacer tout contenu de démonstration résiduel (adresse Studio City, aéroport de San Diego, London Eye) avant tout export final

## Niveau d'animation/interaction (mis à jour — validé avec le client)
Direction revue : le client souhaite finalement un site **immersif, façon Awwwards**, plus démonstratif que la sobriété initialement proposée — sur le modèle du niveau d'interaction du projet UA Burkina, mais sans WebGL/Three.js (poids JS et contraintes réseau/matériel en Afrique de l'Ouest à préserver).

Niveau retenu : **GSAP avancé sans WebGL**
- Hero avec animation de texte en cascade (lettres/mots) à l'entrée
- Curseur personnalisé sur desktop (grossissement au survol des liens/CTA)
- Parallax léger sur les visuels de sections (hero, portfolio, chiffres clés)
- Révélations au scroll travaillées : cascades, décalages (stagger), scale + fade plutôt qu'un simple fade-in
- Transitions de page Swup avec animation de sortie/entrée (pas juste un crossfade)
- Compteurs animés avec easing marqué
- Micro-interactions sur les cartes (hover avec inclinaison/élévation), boutons magnétiques sur les CTA principaux

Le sérieux institutionnel reste préservé par la palette (bleu/orange ACME) et le contenu — l'immersion vient de l'exécution technique et du rythme, pas de gadgets visuels superflus.
