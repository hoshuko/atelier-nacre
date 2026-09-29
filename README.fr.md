<div align="center">

<a href="https://hoshuko.github.io/atelier-nacre/"><img src="https://hoshuko.github.io/assets/readme/nacre-banner-fr.jpg" alt="Atelier Nacre sur ordinateur et sur téléphone" width="100%"></a>

# Atelier Nacre

**Le site d’un atelier de prothésiste ongulaire à Bordeaux : une pose démontée couche par couche, un essayage de couleur et la réservation en ligne.**

[English](README.md) · **Français** · [Español](README.es.md)

[![Démo en ligne](https://img.shields.io/badge/D%C3%A9mo_en_ligne-hoshuko.github.io-5B0E22?style=for-the-badge)](https://hoshuko.github.io/atelier-nacre/) [![Vidéo promo](https://img.shields.io/badge/Vid%C3%A9o_promo-60_s_%C2%B7_3_formats-B8924E?style=for-the-badge)](https://hoshuko.github.io/#nacre) [![Langues](https://img.shields.io/badge/Langues-FR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#langues) [![Licence](https://img.shields.io/badge/Licence-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Aperçu

<a href="https://hoshuko.github.io/#nacre"><img src="https://hoshuko.github.io/assets/readme/nacre-preview-fr.webp" alt="Aperçu animé de Atelier Nacre" width="100%"></a>

L’animation phare du site, extraite de sa vidéo promo de 60 secondes. [Voir la vidéo promo en entier →](https://hoshuko.github.io/#nacre)

## Points forts

- **Anatomie d’une pose.** La page zoome sur l’ongle de la photo, puis la pose en gel se sépare en six couches en 3D, chacune avec sa durée.
- **Essayage de couleur.** Douze teintes et quatre finitions (brillant, mat, chrome, pailleté) appliquées à la photo d’une main, reflets conservés.
- **Quelle forme ?** Carré, ovale, amande, ballerine et stiletto se transforment l’une en l’autre.
- **Galerie et tarifs.** Une galerie filtrable avec visionneuse, les prestations avec durées et prix, et le protocole d’hygiène.
- **Réservation en une ligne.** Les boutons Réserver mènent à Planity, Treatwell, Booksy, Calendly ou Instagram, au choix dans la configuration.

## Captures d’écran

| Ordinateur | Mobile |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/nacre-desktop-fr.webp" alt="Atelier Nacre sur ordinateur" width="560"> | <img src="https://hoshuko.github.io/assets/shots/nacre-mobile-fr.webp" alt="Atelier Nacre sur téléphone" width="200"> |

## Vidéos promo

Trois formats de 60 secondes, avec une musique et des bruitages créés de toutes pièces (aucun son sous droits). Cliquez sur une affiche pour lancer la vidéo.

| Paysage · 16:9 | Fil · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/nacre-169-fr.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-169-fr.jpg" alt="Vidéo promo Atelier Nacre, Paysage · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-45-fr.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-45-fr.jpg" alt="Vidéo promo Atelier Nacre, Fil · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-916-fr.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-916-fr.jpg" alt="Vidéo promo Atelier Nacre, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, sites web</sub> | <sub>Fils Facebook et Instagram</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Langues

Le site existe en français (`index.html`, par défaut), en anglais (`en.html`) et en espagnol (`es.html`). Chaque langue est une page statique : les moteurs de recherche et les aperçus de liens voient le bon texte, et le sélecteur de langue se trouve dans la navigation.

## Sous le capot

- Les six couches sont tracées à partir de la photo et empilées en 3D CSS ; l’essayage recolore les ongles sur un canvas en mode produit (multiply) avec des masques au pixel près, pour garder les reflets.
- HTML, CSS et JavaScript, sans framework ni dépendance : rien à installer ni à compiler pour le lancer.
- Les contenus et les textes de l’interface tiennent dans un fichier par langue (`assets/js/config.fr.js · config.en.js · config.es.js`).
- Images WebP, polices hébergées avec le site, prise en compte de `prefers-reduced-motion`, navigation au clavier et mise en page vérifiée dès 360 px de large.
- Respect de la vie privée : ni cookies, ni mesure d’audience, ni requête vers un service tiers, et une politique de sécurité du contenu (CSP) stricte.

## Lancer en local

N’importe quel serveur web statique convient. Avec Python :

```bash
git clone https://github.com/hoshuko/atelier-nacre.git
cd atelier-nacre
python3 -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000>. Pour le mettre en ligne, déposez le dossier chez n’importe quel hébergeur statique (GitHub Pages, Netlify, Apache, Nginx…).

## Personnaliser

Tout le contenu est dans `assets/js/config.fr.js`, `config.en.js` et `config.es.js` : marque, adresse, horaires, plateforme de réservation, couches, teintes, formes, galerie, tarifs, hygiène, avis, FAQ et textes de l’interface. `demo: true` affiche la mention de démonstration et empêche les boutons de réservation et Instagram de quitter la page ; passez-le à `false` avec vos vrais liens.

## Crédits

Les photos viennent d’Unsplash, de Pexels et de Wikimedia Commons ; toutes les attributions sont dans [CREDITS.md](CREDITS.md). Les polices sont sous licence SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). Les noms, adresses, numéros, prix et avis sont fictifs.

## Licence

Le code est publié sous [licence PolyForm Noncommercial 1.0.0](LICENSE). Vous pouvez l’utiliser, l’étudier et le modifier pour tout usage non commercial : projets personnels, apprentissage, enseignement, associations. Un usage commercial, par exemple livrer cette maquette à un client, demande une licence à part : ouvrez un ticket (issue) sur ce dépôt pour en faire la demande. Les photos et les polices gardent leurs propres licences (voir plus haut).

## Sécurité

Vous avez trouvé une faille ? Signalez-la en privé depuis l’onglet **Security** du dépôt (« Report a vulnerability »), plutôt que dans un ticket public. Voir [SECURITY.md](SECURITY.md).

## Autres maquettes

Cette maquette fait partie de **Vitrines en mouvement**, une série de quatre sites animés au défilement :

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.fr.md)**: Le site vitrine animé d’une boucherie artisanale : la découpe du bœuf expliquée pièce par pièce.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.fr.md)**: Le site d’une équipe de femmes qui fait le ménage à domicile sur la côte kabyle : au défilement, une raclette nettoie la vitre.
- **[Tiziri](https://github.com/hoshuko/tiziri/blob/main/README.fr.md)**: La garde-robe d’une boutique de vêtements en ligne : chaque pièce, photographiée en magasin, est portée par un mannequin en bois qui prend vie.

Portfolio: <https://hoshuko.github.io/> · YouTube: <https://www.youtube.com/@Hosh-uko>
