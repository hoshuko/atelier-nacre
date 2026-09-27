/* =====================================================================
   config.es.js — todo el contenido editable del sitio Atelier Nacre, en español.
   Misma estructura que config.fr.js (francés) y config.en.js (inglés).
   ===================================================================== */
window.SITE = {
  // Modo demostración: muestra el aviso de «datos ficticios» y no abre la
  // plataforma de reservas. Cámbialo a false cuando tengas tus datos reales.
  demo: true,
  locale: 'es-ES',

  marque: { nom: 'Atelier Nacre', artiste: 'Inès Morel', metier: 'Técnica de uñas', ville: 'Burdeos' },

  contact: {
    adresse: '14 rue Notre-Dame', codePostal: '33000', ville: 'Bordeaux', quartier: 'Chartrons',
    telephone: '05 36 49 20 24',
    instagram: 'atelier.nacre',
    horaires: [['Martes – viernes', '10:00 – 19:00'], ['Sábado', '9:00 – 17:00'], ['Domingo y lunes', 'cerrado']]
  },

  // Plataforma de reservas: Planity, Treatwell, Booksy, Calendly o Instagram
  reservation: { plateforme: 'Planity', url: 'https://www.planity.com/', libelle: 'Reservar en Planity' },

  // Anatomía de una manicura de gel: de la uña natural al top coat
  couches: [
    { nom: 'Uña natural', note: 'Limada, cutículas retiradas, desengrasada', duree: 15 },
    { nom: 'Base', note: 'Ayuda a fijar el gel y protege la uña', duree: 5 },
    { nom: 'Gel constructor', note: 'La forma, la curva y la resistencia', duree: 20 },
    { nom: 'Color, dos capas', note: 'Cada una, 60 s bajo lámpara LED', duree: 15 },
    { nom: 'Nail art', note: 'Pan de oro y perlas, colocados con pinzas', duree: 15 },
    { nom: 'Top coat', note: 'Brillo y protección, sin capa pegajosa', duree: 5 }
  ],
  pose: { prix: 'desde 55 €', tenue: '3 a 4 semanas' },

  // Carta de colores del probador
  teintes: [
    { nom: 'Leche de almendra', hex: '#EFE2D6', ref: 'N-01', famille: 'Nudes' },
    { nom: 'Rosa té', hex: '#E2B4A9', ref: 'N-02', famille: 'Nudes' },
    { nom: 'Nude empolvado', hex: '#CD978A', ref: 'N-03', famille: 'Nudes' },
    { nom: 'Arena', hex: '#C4A083', ref: 'N-04', famille: 'Nudes' },
    { nom: 'Granate', hex: '#5B0E22', ref: 'R-05', famille: 'Rojos' },
    { nom: 'Cereza', hex: '#B0122C', ref: 'R-06', famille: 'Rojos' },
    { nom: 'Coral', hex: '#E2573F', ref: 'R-07', famille: 'Rojos' },
    { nom: 'Lila', hex: '#B6A0D3', ref: 'C-08', famille: 'Colores' },
    { nom: 'Salvia', hex: '#93A98C', ref: 'C-09', famille: 'Colores' },
    { nom: 'Azul noche', hex: '#1C2C58', ref: 'C-10', famille: 'Colores' },
    { nom: 'Chocolate', hex: '#5A3A2D', ref: 'C-11', famille: 'Colores' },
    { nom: 'Negro lacado', hex: '#151114', ref: 'C-12', famille: 'Colores' }
  ],
  finitions: [
    { id: 'brillant', nom: 'Brillo' }, { id: 'mat', nom: 'Mate' }, { id: 'chrome', nom: 'Cromado' }, { id: 'paillete', nom: 'Purpurina' }
  ],

  formes: [
    { id: 'carre', nom: 'Cuadrada', texte: 'Limpia y moderna. Ideal en uñas cortas y para manos que trabajan mucho.', longueur: 'Corta a media', pourQui: 'Dedos largos, manos activas', solidite: 5 },
    { id: 'ovale', nom: 'Ovalada', texte: 'La forma clásica, que alarga el dedo sin exagerar.', longueur: 'Corta a media', pourQui: 'Todas las manos', solidite: 4 },
    { id: 'amande', nom: 'Almendra', texte: 'Estiliza y alarga los dedos. Es la forma más pedida en el estudio.', longueur: 'Media', pourQui: 'Dedos cortos o finos', solidite: 3 },
    { id: 'ballerine', nom: 'Bailarina', texte: 'Laterales afilados y punta recta, para largos medios y largos.', longueur: 'Media a larga', pourQui: 'Amantes del nail art', solidite: 3 },
    { id: 'stiletto', nom: 'Stiletto', texte: 'Puntiaguda y espectacular. Solo con extensiones de gel.', longueur: 'Larga', pourQui: 'Las más atrevidas', solidite: 2 }
  ],

  galerie: {
    filtres: [['tout', 'Todo'], ['french', 'French'], ['babyboomer', 'Baby boomer'], ['chrome', 'Cromado y purpurina'], ['art', 'Nail art'], ['mini', 'Minimalista']],
    photos: [
      { img: 'g-french', cat: 'french', titre: 'French clásica' },
      { img: 'g-art-lignes', cat: 'art', titre: 'Stiletto metalizado' },
      { img: 'g-baby-boomer', cat: 'babyboomer', titre: 'Baby boomer rosa' },
      { img: 'g-rouge-court', cat: 'mini', titre: 'Cereza, cuadrada corta' },
      { img: 'g-chrome-bleu', cat: 'chrome', titre: 'Almendra azul cromado' },
      { img: 'g-art-bleu', cat: 'art', titre: 'Invierno azul y blanco' },
      { img: 'g-mariee', cat: 'french', titre: 'French de novia' },
      { img: 'g-bordeaux', cat: 'mini', titre: 'Burdeos y anillos dorados' },
      { img: 'g-chrome-perle', cat: 'babyboomer', titre: 'Baby boomer azul nacarado' },
      { img: 'g-art-leopard', cat: 'art', titre: 'Leopardo' },
      { img: 'g-paillettes', cat: 'chrome', titre: 'Purpurina nude' },
      { img: 'g-pastel', cat: 'mini', titre: 'Pasteles desparejados' },
      { img: 'g-art-noir-blanc', cat: 'art', titre: 'Gráfico en blanco y negro' },
      { img: 'g-rouge-perles', cat: 'mini', titre: 'Rojo y perlas' },
      { img: 'g-nude', cat: 'mini', titre: 'Leche de almendra' }
    ]
  },

  prestations: [
    { groupe: 'Manos', items: [
      ['Semipermanente', 'Esmalte en gel sobre uña natural', '45 min', '35 €'],
      ['Gel sobre uña natural', 'Refuerzo, forma y color', '1 h 15 min', '55 €'],
      ['Extensión de gel', 'Con molde, hasta el largo que elijas', '1 h 45 min', '70 €'],
      ['Relleno', 'Cada 3 o 4 semanas', '1 h 15 min', '50 €'],
      ['Retirada y cuidado', 'Retirada suave, aceite y crema', '30 min', '20 €'] ] },
    { groupe: 'Decoración', items: [
      ['French o baby boomer', 'Sobre cualquier servicio', '+ 15 min', '+ 10 €'],
      ['Cromado o purpurina', 'Polvo o top con purpurina', '+ 10 min', '+ 8 €'],
      ['Nail art', 'Por uña: dibujo, pan de oro, perlas', '+ 5 min', '+ 3 €'] ] },
    { groupe: 'Pies', items: [
      ['Semipermanente en pies', 'Preparación y color', '50 min', '40 €'],
      ['Pedicura completa', 'Baño, exfoliación, durezas y color', '1 h 10 min', '55 €'] ] },
    { groupe: 'Ocasiones', items: [
      ['Pack novia', 'Prueba un mes antes y manicura la víspera', '2 × 1 h', '90 €'] ] }
  ],

  hygiene: [
    { img: 'hyg-outils', titre: 'Instrumental esterilizado', texte: 'Autoclave de clase B y bolsas selladas que se abren delante de ti.' },
    { img: 'hyg-limes', titre: 'Limas de un solo uso', texte: 'Limas y pulidores nuevos para cada clienta, que te llevas al terminar.' },
    { img: 'studio-lampe', titre: 'Lámpara LED, sin UV largos', texte: 'Curado en 60 segundos, con guantes anti-UV si lo prefieres.' },
    { img: 'studio-salon', titre: 'Una clienta cada vez', texte: 'Mesa desinfectada entre citas, sala ventilada y nunca trabajo en cadena.' }
  ],

  avis: [
    ['Mi manicura de gel duró cuatro semanas sin un solo desconchón. Y Inès se toma el tiempo de explicar lo que hace.', 'Camille', 'Chartrons'],
    ['Tenía las uñas estropeadas por manicuras hechas en otros sitios. Dos meses después, han vuelto a crecer sanas.', 'Sarah', 'Burdeos'],
    ['El pack novia: una prueba y luego la manicura la víspera. En las fotos de la boda, perfectas.', 'Léa', 'Talence']
  ],

  faq: [
    ['¿Cuánto dura una manicura?', 'De tres a cuatro semanas el gel y de dos a tres el semipermanente. Un relleno cada tres o cuatro semanas mantiene tus uñas impecables.'],
    ['¿El gel estropea las uñas?', 'No, si se retira bien: quitamos el gel con un pulidor suave, nunca arrancándolo, y sin fresa sobre la uña natural.'],
    ['¿Puedo venir con una foto de inspiración?', 'Sí. Envíanosla por Instagram antes de la cita y vemos juntas cuánto tiempo hay que reservar.'],
    ['¿Y si se rompe una uña?', 'La reparación es gratuita durante los siete días siguientes a la cita.'],
    ['¿Cómo anulo una cita?', 'Directamente en la plataforma de reservas, sin coste hasta 24 horas antes.'],
    ['¿También hay servicio de pies?', 'Sí: semipermanente y pedicura completa, con cita previa.']
  ],

  credits: [
    ['Mano del probador y de la anatomía', 'Ellie Eshaghi, Chelson Tamares', 'Unsplash'],
    ['Galería', 'Jodene Isakowitz, Margarita Yutsaytis, de Aura, zain ali, Konstantin Shmatov, Tainara Paixão, Divaris Shirichena, 한별 정, Noel Oviedo', 'Unsplash'],
    ['Galería y estudio', 'Roman Titov, Anna McDonald, honggyu kim, Leeloo The First, Artem Podrez, cottonbro studio', 'Pexels'],
    ['Estudio, herramientas y texturas', 'Daniel, Ondrej Supitar, pure julia, H&CO, Karolina De Costa, Daria Trofimova, Tasha Kostyuk, Katie Harp, Kristina Tochilko, Logan Voss', 'Unsplash']
  ],

  // Textos de la interfaz
  ui: {
    selected: 'Texto seleccionado: cópialo', copiedPhone: 'Número copiado', copiedRef: 'Referencia copiada',
    bookShade: 'Reservar con este tono',
    demoBook: p => `Demo: este botón abrirá tu página de ${p}.`,
    demoInsta: h => `Demo: enlace a @${h} en Instagram.`,
    menuOpen: 'Abrir el menú', menuClose: 'Cerrar el menú',
    totals: (n, dur, prix, tenue) => `<span><b>${n}</b> capas</span><span><b>${dur}</b> de trabajo</span><span>${prix}</span><span>dura <b>${tenue}</b></span>`,
    shadeRef: (brand, shade, ref, finish) => `${brand} · ${shade} (${ref}), acabado ${finish}`,
    length: 'Largo', idealFor: 'Ideal para', strength: 'Resistencia', outOf5: n => `${n} de 5`,
    beyond: mm => `≈ ${mm} mm más allá de la uña`,
    seeOnInsta: t => `Ver ${t} en Instagram`,
    colon: ': '
  }
};
