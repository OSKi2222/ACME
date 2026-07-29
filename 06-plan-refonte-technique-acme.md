# Plan de refonte technique — group-acme.com

## Stack retenue
Cohérente avec les projets APSFD et UA Burkina déjà en cours :

- **Tailwind CSS** — styling utilitaire, remplace les milliers de lignes de CSS inline générées par Elementor
- **Alpine.js** — interactions légères (menu mobile, accordéons, formulaire de contact, filtre portfolio)
- **Swup** — transitions de page fluides sans rechargement complet, en remplacement du système WordPress classique
- **GSAP** (+ ScrollTrigger) — animations d'entrée sobres sur les sections et les compteurs, dans l'esprit défini au fichier 05

## Sortie du CMS lourd
- Suppression de toute la couche WordPress/Elementor/Jet plugins/Ecwid
- Site statique ou généré (HTML/Tailwind directement, ou générateur léger type Astro/Eleventy si un futur besoin de blog/actualités est confirmé — la section "Notre actualité" actuelle contient du contenu 100% démo à trancher : conserver un vrai blog ou la retirer)
- Formulaire de contact : conserver Contact Form 7 n'a plus de sens hors WordPress → prévoir un service de formulaire léger (ex. Formspree, ou endpoint mail simple côté serveur du client)

## Pages à reconstruire
1. **Accueil** — hero, grille de services (cf. 05), portfolio en fiches projet, chiffres clés resserrés, section historique
2. **Nous, ACME** — à propos, valeurs, équipe, chiffres corrigés
3. **Services** — entièrement retraduite en français avec du contenu réel ACME (remplacer BIM/San Diego)
4. **Contacts** — reconstruite avec les vraies coordonnées et la carte Ouagadougou/Kalgondin

## Assets à retraiter avant intégration
- Compression et renommage de toutes les images portfolio (`WhatsApp-Image-...` → noms descriptifs, formats optimisés WebP/AVIF, tailles responsives)
- Nouveau jeu d'icônes cohérent pour la grille de services (les icônes PNG actuelles `icon1.png` à `icon6.png` sont en basse résolution)
- Logo : fichier source vectoriel à demander si disponible (actuellement uniquement en PNG raster)

## Méthode de travail (comme pour APSFD/UA Burkina)
1. Validation de la palette (fichier 03) et de la direction créative (fichier 05) avec le client
2. Maquettage des 4 pages en Tailwind, section par section, en réutilisant le contenu du fichier 02 comme base texte
3. Intégration Alpine.js/Swup/GSAP une fois le HTML/CSS statique validé
4. Remplacement final de tout contenu résiduel du template d'origine avant mise en ligne

## Points à trancher avec le client avant de démarrer l'intégration
- Couleur accent chaude proposée en fichier 05 (`#e8641c`) — à valider ou remplacer
- Devenir de la section actualités/blog (vraie rubrique éditoriale vs suppression)
- Cohérence des chiffres clés (7 ans / 200+ projets vs "3 pays couverts, 2 awards, depuis 2006")
- Niveau d'animation souhaité (sobre par défaut, cf. fichier 05, ou plus démonstratif si le client le souhaite)
