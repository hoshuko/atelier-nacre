/* =====================================================================
   config.en.js — all the editable content of the Atelier Nacre site, in English.
   Same structure as config.fr.js (French) and config.es.js (Spanish).
   ===================================================================== */
window.SITE = {
  // Demo mode: shows the "fictional data" notice and does not open the
  // booking platform. Set to false once your real details are filled in.
  demo: true,
  locale: 'en-GB',

  marque: { nom: 'Atelier Nacre', artiste: 'Inès Morel', metier: 'Nail technician', ville: 'Bordeaux' },

  contact: {
    adresse: '14 rue Notre-Dame', codePostal: '33000', ville: 'Bordeaux', quartier: 'Chartrons',
    telephone: '05 36 49 20 24',
    instagram: 'atelier.nacre',
    horaires: [['Tuesday – Friday', '10:00 – 19:00'], ['Saturday', '9:00 – 17:00'], ['Sunday, Monday', 'closed']]
  },

  // Booking platform: Planity, Treatwell, Booksy, Calendly or Instagram
  reservation: { plateforme: 'Planity', url: 'https://www.planity.com/', libelle: 'Book on Planity' },

  // Anatomy of a gel set: from the natural nail to the top coat
  couches: [
    { nom: 'Natural nail', note: 'Filed, cuticles pushed back, cleansed', duree: 15 },
    { nom: 'Base coat', note: 'Helps the gel adhere and protects the nail', duree: 5 },
    { nom: 'Builder gel', note: 'Shape, curve and strength', duree: 20 },
    { nom: 'Colour, two coats', note: 'Each cured for 60 s under an LED lamp', duree: 15 },
    { nom: 'Nail art', note: 'Gold leaf and pearls, placed with tweezers', duree: 15 },
    { nom: 'Top coat', note: 'Shine and protection, no sticky layer', duree: 5 }
  ],
  pose: { prix: 'from €55', tenue: '3 to 4 weeks' },

  // Try-on shade chart
  teintes: [
    { nom: 'Almond milk', hex: '#EFE2D6', ref: 'N-01', famille: 'Nudes' },
    { nom: 'Tea rose', hex: '#E2B4A9', ref: 'N-02', famille: 'Nudes' },
    { nom: 'Powder nude', hex: '#CD978A', ref: 'N-03', famille: 'Nudes' },
    { nom: 'Sand', hex: '#C4A083', ref: 'N-04', famille: 'Nudes' },
    { nom: 'Oxblood', hex: '#5B0E22', ref: 'R-05', famille: 'Reds' },
    { nom: 'Cherry', hex: '#B0122C', ref: 'R-06', famille: 'Reds' },
    { nom: 'Coral', hex: '#E2573F', ref: 'R-07', famille: 'Reds' },
    { nom: 'Lilac', hex: '#B6A0D3', ref: 'C-08', famille: 'Colours' },
    { nom: 'Sage', hex: '#93A98C', ref: 'C-09', famille: 'Colours' },
    { nom: 'Midnight blue', hex: '#1C2C58', ref: 'C-10', famille: 'Colours' },
    { nom: 'Chocolate', hex: '#5A3A2D', ref: 'C-11', famille: 'Colours' },
    { nom: 'Black lacquer', hex: '#151114', ref: 'C-12', famille: 'Colours' }
  ],
  finitions: [
    { id: 'brillant', nom: 'Gloss' }, { id: 'mat', nom: 'Matte' }, { id: 'chrome', nom: 'Chrome' }, { id: 'paillete', nom: 'Glitter' }
  ],

  formes: [
    { id: 'carre', nom: 'Square', texte: 'Clean and modern. Ideal for short nails and for hands that work hard.', longueur: 'Short to medium', pourQui: 'Long fingers, busy hands', solidite: 5 },
    { id: 'ovale', nom: 'Oval', texte: 'The classic shape, which lengthens the finger without overdoing it.', longueur: 'Short to medium', pourQui: 'All hands', solidite: 4 },
    { id: 'amande', nom: 'Almond', texte: 'Slims and lengthens the fingers. It’s the most requested shape at the studio.', longueur: 'Medium', pourQui: 'Short or slender fingers', solidite: 3 },
    { id: 'ballerine', nom: 'Ballerina', texte: 'Tapered sides and a straight tip, for medium to long lengths.', longueur: 'Medium to long', pourQui: 'Nail art lovers', solidite: 3 },
    { id: 'stiletto', nom: 'Stiletto', texte: 'Pointed and striking. Only with gel extensions.', longueur: 'Long', pourQui: 'The daring', solidite: 2 }
  ],

  galerie: {
    filtres: [['tout', 'All'], ['french', 'French'], ['babyboomer', 'Baby boomer'], ['chrome', 'Chrome & glitter'], ['art', 'Nail art'], ['mini', 'Minimalist']],
    photos: [
      { img: 'g-french', cat: 'french', titre: 'Classic French' },
      { img: 'g-art-lignes', cat: 'art', titre: 'Metallic stiletto' },
      { img: 'g-baby-boomer', cat: 'babyboomer', titre: 'Pink baby boomer' },
      { img: 'g-rouge-court', cat: 'mini', titre: 'Cherry, short square' },
      { img: 'g-chrome-bleu', cat: 'chrome', titre: 'Blue chrome almond' },
      { img: 'g-art-bleu', cat: 'art', titre: 'Blue and white winter' },
      { img: 'g-mariee', cat: 'french', titre: 'Bridal French' },
      { img: 'g-bordeaux', cat: 'mini', titre: 'Burgundy with gold rings' },
      { img: 'g-chrome-perle', cat: 'babyboomer', titre: 'Pearly blue baby boomer' },
      { img: 'g-art-leopard', cat: 'art', titre: 'Leopard' },
      { img: 'g-paillettes', cat: 'chrome', titre: 'Nude glitter' },
      { img: 'g-pastel', cat: 'mini', titre: 'Mismatched pastels' },
      { img: 'g-art-noir-blanc', cat: 'art', titre: 'Black and white graphic' },
      { img: 'g-rouge-perles', cat: 'mini', titre: 'Red and pearls' },
      { img: 'g-nude', cat: 'mini', titre: 'Almond milk' }
    ]
  },

  prestations: [
    { groupe: 'Hands', items: [
      ['Gel polish', 'Gel polish on natural nails', '45 min', '€35'],
      ['Gel overlay', 'Strengthening, shape and colour', '1 h 15 min', '€55'],
      ['Gel extensions', 'Nail forms, to the length of your choice', '1 h 45 min', '€70'],
      ['Infill', 'Every 3 to 4 weeks', '1 h 15 min', '€50'],
      ['Removal and care', 'Gentle removal, oil and cream', '30 min', '€20'] ] },
    { groupe: 'Finishes', items: [
      ['French or baby boomer', 'On any set', '+ 15 min', '+ €10'],
      ['Chrome or glitter', 'Powder or glitter top coat', '+ 10 min', '+ €8'],
      ['Nail art', 'Per nail: design, gold leaf, pearls', '+ 5 min', '+ €3'] ] },
    { groupe: 'Feet', items: [
      ['Gel polish for toes', 'Prep and colour', '50 min', '€40'],
      ['Full pedicure', 'Soak, scrub, hard skin, colour', '1 h 10 min', '€55'] ] },
    { groupe: 'Occasions', items: [
      ['Bridal package', 'Trial a month before, set the day before', '2 × 1 h', '€90'] ] }
  ],

  hygiene: [
    { img: 'hyg-outils', titre: 'Sterilised instruments', texte: 'Class B autoclave, sealed pouches opened in front of you.' },
    { img: 'hyg-limes', titre: 'Single-use files', texte: 'New files and buffers for every client, and yours to keep afterwards.' },
    { img: 'studio-lampe', titre: 'LED lamp, no long UV', texte: 'Cures in 60 seconds, with anti-UV gloves if you’d like.' },
    { img: 'studio-salon', titre: 'One client at a time', texte: 'Table disinfected between appointments, room aired, never a production line.' }
  ],

  avis: [
    ['My gel set lasted four weeks without a single chip. And Inès takes the time to explain what she’s doing.', 'Camille', 'Chartrons'],
    ['My nails had been damaged by sets done elsewhere. Two months later, they’ve grown back healthy.', 'Sarah', 'Bordeaux'],
    ['The bridal package: a trial, then the set the day before. In the wedding photos, they’re perfect.', 'Léa', 'Talence']
  ],

  faq: [
    ['How long does a set last?', 'Three to four weeks for gel, two to three for gel polish. An infill every three to four weeks keeps your nails flawless.'],
    ['Does gel damage your nails?', 'Not if it’s removed properly: we take the gel off with a soft buffer, never by peeling it, and never use an e-file on the natural nail.'],
    ['Can I bring an inspiration photo?', 'Yes. Send it on Instagram before your appointment and we’ll work out together how much time to allow.'],
    ['What if a nail breaks?', 'Repairs are free for seven days after your appointment.'],
    ['How do I cancel an appointment?', 'Directly on the booking platform, free of charge up to 24 hours before.'],
    ['Do you do feet?', 'Yes: gel polish and full pedicures, by appointment.']
  ],

  credits: [
    ['Hand in the try-on and anatomy sections', 'Ellie Eshaghi, Chelson Tamares', 'Unsplash'],
    ['Gallery', 'Jodene Isakowitz, Margarita Yutsaytis, de Aura, zain ali, Konstantin Shmatov, Tainara Paixão, Divaris Shirichena, 한별 정, Noel Oviedo', 'Unsplash'],
    ['Gallery and studio', 'Roman Titov, Anna McDonald, honggyu kim, Leeloo The First, Artem Podrez, cottonbro studio', 'Pexels'],
    ['Studio, tools and textures', 'Daniel, Ondrej Supitar, pure julia, H&CO, Karolina De Costa, Daria Trofimova, Tasha Kostyuk, Katie Harp, Kristina Tochilko, Logan Voss', 'Unsplash']
  ],

  // Interface text
  ui: {
    selected: 'Text selected: copy it', copiedPhone: 'Number copied', copiedRef: 'Reference copied',
    bookShade: 'Book with this shade',
    demoBook: p => `Demo: this button will open your ${p} page.`,
    demoInsta: h => `Demo: link to @${h} on Instagram.`,
    menuOpen: 'Open menu', menuClose: 'Close menu',
    totals: (n, dur, prix, tenue) => `<span><b>${n}</b> layers</span><span><b>${dur}</b> in the chair</span><span>${prix}</span><span>lasts <b>${tenue}</b></span>`,
    shadeRef: (brand, shade, ref, finish) => `${brand} · ${shade} (${ref}), ${finish} finish`,
    length: 'Length', idealFor: 'Ideal for', strength: 'Strength', outOf5: n => `${n} out of 5`,
    beyond: mm => `≈ ${mm} mm beyond the nail`,
    seeOnInsta: t => `See ${t} on Instagram`,
    colon: ': '
  }
};
