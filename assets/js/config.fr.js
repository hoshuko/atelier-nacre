/* =====================================================================
   config.fr.js — tout le contenu modifiable du site Atelier Nacre, en français.
   Même structure dans config.en.js (anglais) et config.es.js (espagnol).
   Modifiez les textes entre guillemets, enregistrez, rechargez la page.
   ===================================================================== */
window.SITE = {
  // Maquette de démonstration : affiche la mention « données fictives » et
  // n'ouvre pas la plateforme de réservation. Passez à false avec vos vraies infos.
  demo: true,
  locale: 'fr-FR',

  marque: { nom: 'Atelier Nacre', artiste: 'Inès Morel', metier: 'Prothésiste ongulaire', ville: 'Bordeaux' },

  contact: {
    adresse: '14 rue Notre-Dame', codePostal: '33000', ville: 'Bordeaux', quartier: 'Chartrons',
    telephone: '05 36 49 20 24',
    instagram: 'atelier.nacre',
    horaires: [['Mardi – vendredi', '10 h – 19 h'], ['Samedi', '9 h – 17 h'], ['Dimanche, lundi', 'fermé']]
  },

  // Plateforme de réservation : Planity, Treatwell, Booksy, Calendly ou Instagram
  reservation: { plateforme: 'Planity', url: 'https://www.planity.com/', libelle: 'Réserver sur Planity' },

  // Anatomie d'une pose : de l'ongle naturel au top coat
  couches: [
    { nom: 'Ongle naturel', note: 'Limé, cuticules repoussées, dégraissé', duree: 15 },
    { nom: 'Base', note: 'Accroche le gel et protège l’ongle', duree: 5 },
    { nom: 'Gel de construction', note: 'La forme, la courbe et la solidité', duree: 20 },
    { nom: 'Couleur, deux couches', note: 'Chacune 60 s sous lampe LED', duree: 15 },
    { nom: 'Nail art', note: 'Feuille d’or et perles, posées à la pince', duree: 15 },
    { nom: 'Top coat', note: 'Brillance et protection, sans couche collante', duree: 5 }
  ],
  pose: { prix: 'dès 55 €', tenue: '3 à 4 semaines' },

  // Nuancier de l'essayage
  teintes: [
    { nom: 'Lait d’amande', hex: '#EFE2D6', ref: 'N-01', famille: 'Nudes' },
    { nom: 'Rose thé', hex: '#E2B4A9', ref: 'N-02', famille: 'Nudes' },
    { nom: 'Nude poudré', hex: '#CD978A', ref: 'N-03', famille: 'Nudes' },
    { nom: 'Sable', hex: '#C4A083', ref: 'N-04', famille: 'Nudes' },
    { nom: 'Rouge noir', hex: '#5B0E22', ref: 'R-05', famille: 'Rouges' },
    { nom: 'Cerise', hex: '#B0122C', ref: 'R-06', famille: 'Rouges' },
    { nom: 'Corail', hex: '#E2573F', ref: 'R-07', famille: 'Rouges' },
    { nom: 'Lilas', hex: '#B6A0D3', ref: 'C-08', famille: 'Couleurs' },
    { nom: 'Sauge', hex: '#93A98C', ref: 'C-09', famille: 'Couleurs' },
    { nom: 'Bleu nuit', hex: '#1C2C58', ref: 'C-10', famille: 'Couleurs' },
    { nom: 'Chocolat', hex: '#5A3A2D', ref: 'C-11', famille: 'Couleurs' },
    { nom: 'Noir laqué', hex: '#151114', ref: 'C-12', famille: 'Couleurs' }
  ],
  finitions: [
    { id: 'brillant', nom: 'Brillant' }, { id: 'mat', nom: 'Mat' }, { id: 'chrome', nom: 'Chrome' }, { id: 'paillete', nom: 'Pailleté' }
  ],

  formes: [
    { id: 'carre', nom: 'Carré', texte: 'Net et moderne. Idéal sur ongles courts et pour les mains qui travaillent.', longueur: 'Courte à moyenne', pourQui: 'Doigts longs, mains actives', solidite: 5 },
    { id: 'ovale', nom: 'Ovale', texte: 'La forme classique, qui allonge le doigt sans rien exagérer.', longueur: 'Courte à moyenne', pourQui: 'Toutes les mains', solidite: 4 },
    { id: 'amande', nom: 'Amande', texte: 'Affine et allonge les doigts. C’est la forme la plus demandée à l’atelier.', longueur: 'Moyenne', pourQui: 'Doigts courts ou fins', solidite: 3 },
    { id: 'ballerine', nom: 'Ballerine', texte: 'Côtés effilés et bout droit, pour les longueurs moyennes à longues.', longueur: 'Moyenne à longue', pourQui: 'Amatrices de nail art', solidite: 3 },
    { id: 'stiletto', nom: 'Stiletto', texte: 'Pointue et spectaculaire. Uniquement en rallongement gel.', longueur: 'Longue', pourQui: 'Les audacieuses', solidite: 2 }
  ],

  galerie: {
    filtres: [['tout', 'Tout'], ['french', 'French'], ['babyboomer', 'Baby boomer'], ['chrome', 'Chrome et paillettes'], ['art', 'Nail art'], ['mini', 'Minimaliste']],
    photos: [
      { img: 'g-french', cat: 'french', titre: 'French classique' },
      { img: 'g-art-lignes', cat: 'art', titre: 'Stiletto métallique' },
      { img: 'g-baby-boomer', cat: 'babyboomer', titre: 'Baby boomer rose' },
      { img: 'g-rouge-court', cat: 'mini', titre: 'Cerise, carré court' },
      { img: 'g-chrome-bleu', cat: 'chrome', titre: 'Amande bleu chrome' },
      { img: 'g-art-bleu', cat: 'art', titre: 'Hiver bleu et blanc' },
      { img: 'g-mariee', cat: 'french', titre: 'French de mariée' },
      { img: 'g-bordeaux', cat: 'mini', titre: 'Bordeaux et bagues dorées' },
      { img: 'g-chrome-perle', cat: 'babyboomer', titre: 'Baby boomer bleu nacré' },
      { img: 'g-art-leopard', cat: 'art', titre: 'Léopard' },
      { img: 'g-paillettes', cat: 'chrome', titre: 'Paillettes nude' },
      { img: 'g-pastel', cat: 'mini', titre: 'Pastels dépareillés' },
      { img: 'g-art-noir-blanc', cat: 'art', titre: 'Graphique noir et blanc' },
      { img: 'g-rouge-perles', cat: 'mini', titre: 'Rouge et perles' },
      { img: 'g-nude', cat: 'mini', titre: 'Lait d’amande' }
    ]
  },

  prestations: [
    { groupe: 'Mains', items: [
      ['Semi-permanent', 'Vernis gel sur ongles naturels', '45 min', '35 €'],
      ['Gel sur ongles naturels', 'Renforcement, forme et couleur', '1 h 15', '55 €'],
      ['Rallongement gel', 'Chablon, jusqu’à la longueur de votre choix', '1 h 45', '70 €'],
      ['Remplissage', 'Toutes les 3 à 4 semaines', '1 h 15', '50 €'],
      ['Dépose et soin', 'Dépose douce, huile et crème', '30 min', '20 €'] ] },
    { groupe: 'Décors', items: [
      ['French ou baby boomer', 'Sur toute pose', '+ 15 min', '+ 10 €'],
      ['Chrome ou paillettes', 'Poudre ou top pailleté', '+ 10 min', '+ 8 €'],
      ['Nail art', 'Par ongle, dessin, feuille d’or, perles', '+ 5 min', '+ 3 €'] ] },
    { groupe: 'Pieds', items: [
      ['Semi-permanent pieds', 'Préparation et couleur', '50 min', '40 €'],
      ['Beauté des pieds', 'Bain, gommage, callosités, couleur', '1 h 10', '55 €'] ] },
    { groupe: 'Occasions', items: [
      ['Forfait mariée', 'Essai un mois avant, pose la veille', '2 × 1 h', '90 €'] ] }
  ],

  hygiene: [
    { img: 'hyg-outils', titre: 'Instruments stérilisés', texte: 'Autoclave de classe B, sachets scellés ouverts devant vous.' },
    { img: 'hyg-limes', titre: 'Limes à usage unique', texte: 'Limes et polissoirs neufs pour chaque cliente, et offerts à la fin.' },
    { img: 'studio-lampe', titre: 'Lampe LED, sans UV longs', texte: 'Catalyse en 60 secondes, avec des mitaines anti-UV si vous le souhaitez.' },
    { img: 'studio-salon', titre: 'Une cliente à la fois', texte: 'Table désinfectée entre chaque rendez-vous, pièce aérée, jamais de travail à la chaîne.' }
  ],

  avis: [
    ['Ma pose en gel a tenu quatre semaines sans un éclat. Et Inès prend le temps d’expliquer ce qu’elle fait.', 'Camille', 'Chartrons'],
    ['J’avais les ongles abîmés par des poses faites ailleurs. Deux mois plus tard, ils ont repoussé sains.', 'Sarah', 'Bordeaux'],
    ['Le forfait mariée : un essai, puis la pose la veille. Sur les photos du mariage, c’est parfait.', 'Léa', 'Talence']
  ],

  faq: [
    ['Combien de temps tient une pose ?', 'Trois à quatre semaines pour le gel, deux à trois pour le semi-permanent. Un remplissage toutes les trois à quatre semaines garde des ongles impeccables.'],
    ['Le gel abîme-t-il les ongles ?', 'Non, si la dépose est bien faite : on retire le gel au polissoir doux, jamais en arrachant, et sans fraise sur l’ongle naturel.'],
    ['Puis-je venir avec une photo d’inspiration ?', 'Oui. Envoyez-la sur Instagram avant le rendez-vous : on vérifie ensemble le temps à prévoir.'],
    ['Et si un ongle casse ?', 'La réparation est offerte pendant les sept jours qui suivent la pose.'],
    ['Comment annuler un rendez-vous ?', 'Directement sur la plateforme de réservation, sans frais jusqu’à 24 heures avant.'],
    ['Faites-vous les pieds ?', 'Oui : semi-permanent et beauté des pieds complète, sur rendez-vous.']
  ],

  credits: [
    ['Main de l’essayage et de l’anatomie', 'Ellie Eshaghi, Chelson Tamares', 'Unsplash'],
    ['Galerie', 'Jodene Isakowitz, Margarita Yutsaytis, de Aura, zain ali, Konstantin Shmatov, Tainara Paixão, Divaris Shirichena, 한별 정, Noel Oviedo', 'Unsplash'],
    ['Galerie et studio', 'Roman Titov, Anna McDonald, honggyu kim, Leeloo The First, Artem Podrez, cottonbro studio', 'Pexels'],
    ['Studio, outils et textures', 'Daniel, Ondrej Supitar, pure julia, H&CO, Karolina De Costa, Daria Trofimova, Tasha Kostyuk, Katie Harp, Kristina Tochilko, Logan Voss', 'Unsplash']
  ],

  // Textes de l'interface
  ui: {
    selected: 'Texte sélectionné : copiez-le', copiedPhone: 'Numéro copié', copiedRef: 'Référence copiée',
    bookShade: 'Réserver avec cette teinte',
    demoBook: p => `Démo : ce bouton ouvrira votre page ${p}.`,
    demoInsta: h => `Démo : lien vers @${h} sur Instagram.`,
    menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu',
    totals: (n, dur, prix, tenue) => `<span><b>${n}</b> couches</span><span><b>${dur}</b> de pose</span><span>${prix}</span><span>tenue <b>${tenue}</b></span>`,
    shadeRef: (brand, shade, ref, finish) => `${brand} · ${shade} (${ref}), finition ${finish}`,
    length: 'Longueur', idealFor: 'Idéal pour', strength: 'Solidité', outOf5: n => `${n} sur 5`,
    beyond: mm => `≈ ${mm} mm au-delà de l’ongle`,
    seeOnInsta: t => `Voir ${t} sur Instagram`,
    colon: ' : '
  }
};
