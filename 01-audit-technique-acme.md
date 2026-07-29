# Audit technique — group-acme.com

**Client :** Africa Construction & Mining Equipment (ACME)
**Site actuel :** https://group-acme.com/
**Pages auditées :** Accueil, Nous ACME (about), Services, Contacts

## 1. Stack actuelle

- **CMS :** WordPress 6.9.5
- **Thème :** Kava (thème parent) + Builderry (thème enfant)
- **Page builder :** Elementor 4.1.4 (avec fonctionnalités expérimentales activées : e_classes, e_variables, atomic widgets…)
- **Plugins identifiés :** Jet Menu, Jet Elements, Jet Blocks, Jet Blog, Jet Theme Core, Jet Tricks, Contact Form 7, Hostinger Reach (newsletter), Ecwid (boutique — non utilisée mais son CSS est quand même chargé sur chaque page)
- **Librairies JS embarquées :** jQuery + jQuery Migrate, Vue.js (pour le mega-menu), Swiper, Slick, imagesLoaded, Masonry, anime.js, ts-particles, Tippy/Popper, hoverIntent
- **Cache :** LiteSpeed Cache 7.8.1

## 2. Constats critiques

### a. Contenu de démonstration non remplacé (bloquant)
La page **Contacts** affiche encore les données du template d'origine et non celles d'ACME :
- Adresse : *11559 Ventura Boulevard, Studio City, CA 91604*
- Téléphone/fax : *555.748.6051*
- E-mail : *builderry@demolink.org*
- Carte Google Maps : centrée sur le **London Eye, Londres** (au lieu de Ouagadougou)

Le formulaire de contact (Contact Form 7) est en anglais ("Full Name", "Send us a message"...) alors que le reste du site est en français.

De nombreux boutons pointent encore vers le site démo du template et non vers group-acme.com :
`https://ld-wp73.template-help.com/wordpress/prod_523/v1/...` — présent sur les CTA "Découvrir nos projets", "View More Projects", les 8 vignettes du portfolio, et le bouton "Contact us" de la page Services.

La page **Services** est restée intégralement en anglais (texte de démonstration du template Builderry), jamais traduite ni adaptée au métier réel d'ACME.

### b. Poids et performance
- CSS et JS du plugin e-commerce Ecwid chargés sur toutes les pages sans qu'aucune boutique ne soit utilisée.
- Polices Google chargées deux fois par des méthodes différentes (`cx-google-fonts-kava-css` en `@import` classique + `elementor-gf-poppins-css`, `elementor-gf-roboto-css`, `elementor-gf-robotoslab-css` en liens séparés) → requêtes redondantes.
- Roboto Slab est chargé mais n'apparaît nulle part dans le CSS utilisé (police morte).
- Images du portfolio non optimisées, nommées par défaut par WhatsApp (`WhatsApp-Image-2025-11-20-at-...jpeg`), certaines en résolution native 2560×1920 sans compression visible.
- Chaque page recharge l'intégralité du bloc `global-styles-inline-css` (palette WordPress par défaut complète, non utilisée par le design réel) + le CSS du thème Kava en entier (plusieurs milliers de lignes inline).
- Un moteur de particules (`ts-particles`), une librairie d'animation (`anime.js`) et un slider dédié (`slider-pro`) sont chargés en permanence même sur des pages qui ne les utilisent pas visiblement.

### c. Incohérences de contenu
- Bloc statistiques de la page "Nous, ACME" : l'ordre des libellés (*Projets Délivrés / Membres d'équipe / Pays couverts / Awards gagnés*) et leurs valeurs (1250 / 15 / 3 / 2) semble hérité du template et mérite d'être revérifié avec le client — un cabinet de construction basé uniquement au Burkina Faso couvrant "3 pays" et ayant "2 awards" n'est pas cohérent avec le récit "07 ans d'existence" affiché plus haut sur la même page.
- Les breadcrumbs sont codés en dur en `display:none` plutôt que désactivés proprement dans les réglages du thème.
- `lang="fr-FR"` déclaré sur `<html>` alors que plusieurs sections (Services entier, formulaire de contact) sont en anglais — mauvais signal pour le SEO et l'accessibilité.

### d. Structure Elementor
- Sections imbriquées sur plusieurs niveaux (`section > inner-section > column > widget`), typique d'un export de template — génère un DOM lourd et rend toute reprise manuelle du HTML fastidieuse.
- Aucune sémantique HTML5 avancée (pas de `<article>`, `<figure>` pour le portfolio, etc.), tout est en `<div>` avec classes Elementor.

## 3. Recommandation générale

Le site tourne sur un **template WordPress/Elementor jamais réellement fini** : au moins un quart du contenu visible (page Services, page Contacts, la majorité des CTA) provient encore du template démo, pas d'ACME. Une refonte front-end complète, hors CMS lourd, est justifiée — dans la continuité de l'approche déjà retenue pour les projets APSFD et UA Burkina (Tailwind CSS + Alpine.js + Swup + GSAP), afin de repartir sur une base saine, légère et entièrement maîtrisée.
