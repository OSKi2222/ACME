# Palette de couleurs — group-acme.com

Extraite directement du CSS compilé du thème Kava/Builderry (`kava-theme-style-inline-css`) tel que servi sur les 4 pages fournies.

## Couleurs de marque réellement utilisées

| Rôle | Couleur | Hex |
|---|---|---|
| Bleu primaire (boutons, CTA, fond du panneau "totop") | 🟦 | `#0066cc` |
| Bleu accent (liens, dates, hover secondaires) | 🔵 | `#0971f2` |
| Bleu hover clair (état :hover des boutons/liens primaires) | 🔷 | `#268cf2` *(rgb(38,140,242))* |
| Blanc (fond, titres sur sections sombres) | ⬜ | `#ffffff` |
| Gris texte courant (corps de texte, body) | ◻️ | `#888888` |

C'est une palette très resserrée : **un bleu institutionnel + du blanc + un gris neutre**, sans couleur secondaire chaude (pas d'orange BTP, pas de jaune sécurité, pas de rouge — pourtant fréquents dans le secteur construction/mining).

## Presets WordPress par défaut (chargés, mais non utilisés dans le design réel)

Le thème charge la palette standard Gutenberg/WordPress (`global-styles-inline-css`) qui n'apparaît dans aucun bloc réellement stylé sur le site : noir `#000000`, gris cyan `#abb8c3`, rose pâle `#f78da7`, rouge vif `#cf2e2e`, orange vif `#ff6900`, ambre `#fcb900`, vert cyan clair `#7bdcb5`, vert cyan vif `#00d084`, bleu cyan pâle `#8ed1fc`, bleu cyan vif `#0693e3`, violet vif `#9b51e0`. Ce sont des résidus de configuration à ignorer pour la refonte — ils alourdissent le CSS sans être exploités.

## Typographie associée

- **Poppins** (300/400/500/700) — police principale, titres et corps de texte
- **Roboto** — prévue pour les fil d'Ariane (désactivés en CSS, donc police jamais visible)
- **Roboto Slab** — chargée mais totalement inutilisée dans le CSS actif (police morte, à supprimer)

## Constat pour la refonte

Le bleu `#0066cc` / `#0971f2` est identitaire et cohérent (logo, header, CTA) — à conserver comme couleur de marque. En revanche la palette est pauvre pour un site BTP/mining : aucune couleur d'accent chaude pour hiérarchiser les CTA secondaires, les badges "chantier", les indicateurs de sécurité, etc. Le fichier `05-direction-creative-acme.md` propose une palette étendue inspirée du positionnement "tech/agence" observé sur asisarl.com tout en conservant le bleu ACME comme couleur pivot.
