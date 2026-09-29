<div align="center">

<a href="https://hoshuko.github.io/atelier-nacre/es.html"><img src="https://hoshuko.github.io/assets/readme/nacre-banner-es.jpg" alt="Atelier Nacre en ordenador y en móvil" width="100%"></a>

# Atelier Nacre

**La web de un estudio de uñas en Burdeos: una manicura desmontada capa a capa, un probador de color y reservas en línea.**

[English](README.md) · [Français](README.fr.md) · **Español**

[![Demo en línea](https://img.shields.io/badge/Demo_en_l%C3%ADnea-hoshuko.github.io-5B0E22?style=for-the-badge)](https://hoshuko.github.io/atelier-nacre/es.html) [![Vídeo promocional](https://img.shields.io/badge/V%C3%ADdeo_promocional-60_s_%C2%B7_3_formatos-B8924E?style=for-the-badge)](https://hoshuko.github.io/es.html#nacre) [![Idiomas](https://img.shields.io/badge/Idiomas-FR_%C2%B7_EN_%C2%B7_ES-555555?style=for-the-badge)](#idiomas) [![Licencia](https://img.shields.io/badge/Licencia-PolyForm_Noncommercial-555555?style=for-the-badge)](LICENSE)

</div>

## Vista previa

<a href="https://hoshuko.github.io/es.html#nacre"><img src="https://hoshuko.github.io/assets/readme/nacre-preview-es.webp" alt="Vista previa animada de Atelier Nacre" width="100%"></a>

La animación estrella de la web, extraída de su vídeo promocional de 60 segundos. [Ver el vídeo promocional completo →](https://hoshuko.github.io/es.html#nacre)

## Lo más destacado

- **Anatomía de una manicura.** La página se acerca a una uña de la foto y la manicura de gel se separa en seis capas en 3D, cada una con su duración.
- **Probador de color.** Doce tonos y cuatro acabados (brillo, mate, cromado, purpurina) aplicados a la foto de una mano, conservando sus reflejos.
- **¿Qué forma?** Cuadrada, ovalada, almendra, bailarina y stiletto se transforman unas en otras.
- **Galería y precios.** Una galería filtrable con visor, los servicios con duración y precio, y el protocolo de higiene.
- **Reservas en una línea.** Los botones de reserva llevan a Planity, Treatwell, Booksy, Calendly o Instagram, según la configuración.

## Capturas de pantalla

| Ordenador | Móvil |
| :---: | :---: |
| <img src="https://hoshuko.github.io/assets/shots/nacre-desktop-es.webp" alt="Atelier Nacre en ordenador" width="560"> | <img src="https://hoshuko.github.io/assets/shots/nacre-mobile-es.webp" alt="Atelier Nacre en móvil" width="200"> |

## Vídeos promocionales

Tres formatos de 60 segundos, con música y efectos de sonido creados desde cero (sin audio sujeto a derechos). Haz clic en un póster para ver el vídeo.

| Horizontal · 16:9 | Feed · 4:5 | Vertical · 9:16 |
| :---: | :---: | :---: |
| <a href="https://hoshuko.github.io/assets/video/nacre-169-es.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-169-es.jpg" alt="Vídeo promocional de Atelier Nacre, Horizontal · 16:9" width="360"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-45-es.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-45-es.jpg" alt="Vídeo promocional de Atelier Nacre, Feed · 4:5" width="180"></a> | <a href="https://hoshuko.github.io/assets/video/nacre-916-es.mp4"><img src="https://hoshuko.github.io/assets/video/nacre-916-es.jpg" alt="Vídeo promocional de Atelier Nacre, Vertical · 9:16" width="152"></a> |
| <sub>YouTube, webs</sub> | <sub>Feed de Facebook e Instagram</sub> | <sub>Reels, Stories, WhatsApp</sub> |

## Idiomas

La web está disponible en francés (`index.html`, por defecto), inglés (`en.html`) y español (`es.html`). Cada idioma es una página estática, así que los buscadores y las vistas previas de enlaces ven el texto correcto; el selector de idioma está en la navegación.

## Por dentro

- Las seis capas se trazan a partir de la foto y se apilan en 3D con CSS; el probador colorea las uñas en un canvas con fusión multiplicar y máscaras al píxel, para que los brillos se mantengan.
- HTML, CSS y JavaScript, sin frameworks ni dependencias: no hay nada que instalar ni compilar para ponerla en marcha.
- Los contenidos y los textos de la interfaz están en un archivo por idioma (`assets/js/config.fr.js · config.en.js · config.es.js`).
- Imágenes WebP, fuentes alojadas con la web, compatibilidad con `prefers-reduced-motion`, navegación con teclado y diseño comprobado desde 360 px de ancho.
- Privacidad desde el diseño: sin cookies, sin analítica, sin peticiones a terceros y con una política de seguridad de contenido (CSP) estricta.

## Ejecutar en local

Sirve cualquier servidor web estático. Con Python:

```bash
git clone https://github.com/hoshuko/atelier-nacre.git
cd atelier-nacre
python3 -m http.server 8000
```

Después abre <http://localhost:8000>. Para publicarla, sube la carpeta a cualquier alojamiento estático (GitHub Pages, Netlify, Apache, Nginx…).

## Personalizar

Todo el contenido está en `assets/js/config.fr.js`, `config.en.js` y `config.es.js`: marca, dirección, horario, plataforma de reservas, capas, tonos, formas, galería, precios, higiene, opiniones, preguntas frecuentes y textos de la interfaz. `demo: true` muestra el aviso de demostración e impide que los botones de reserva e Instagram salgan de la página; cámbialo a `false` con tus enlaces reales.

## Créditos

Las fotos proceden de Unsplash, Pexels y Wikimedia Commons; todas las atribuciones están en [CREDITS.md](CREDITS.md). Las fuentes tienen licencia SIL Open Font License 1.1 ([`assets/fonts/OFL.txt`](assets/fonts/OFL.txt)). Los nombres, direcciones, teléfonos, precios y opiniones son ficticios.

## Licencia

El código se publica con la [licencia PolyForm Noncommercial 1.0.0](LICENSE). Puedes usarlo, estudiarlo y modificarlo para cualquier fin no comercial: proyectos personales, aprendizaje, docencia, asociaciones. El uso comercial, por ejemplo entregar esta maqueta a un cliente, requiere una licencia aparte: abre una incidencia (issue) en este repositorio para solicitarla. Las fotos y las fuentes conservan sus propias licencias (ver arriba).

## Seguridad

¿Has encontrado una vulnerabilidad? Comunícala de forma privada desde la pestaña **Security** del repositorio («Report a vulnerability»), no en una incidencia pública. Consulta [SECURITY.md](SECURITY.md).

## Más maquetas

Forma parte de **Escaparates en movimiento**, una serie de cinco webs animadas al desplazarse:

- **[Maison Billot](https://github.com/hoshuko/maison-billot/blob/main/README.es.md)**: La web animada de una carnicería artesanal: el despiece del vacuno explicado pieza a pieza.
- **[Tafat](https://github.com/hoshuko/tafat/blob/main/README.es.md)**: La web de un equipo de mujeres que limpia casas en la costa de Cabilia: al desplazarte, una rasqueta limpia el cristal.
- **[Tiziri](https://github.com/hoshuko/tiziri/blob/main/README.es.md)**: El armario de una tienda de ropa en línea: cada prenda, fotografiada en la tienda, la lleva un maniquí de madera que cobra vida.
- **[Lalla Warda](https://github.com/hoshuko/lalla-warda/blob/main/README.es.md)**: La web de una marca de cosmética natural de Kenitra: una rosa en 3D se abre hasta revelar un frasco de sérum, y cada producto muestra de qué está hecho y cómo se aplica en el rostro y el cabello.

Portafolio: <https://hoshuko.github.io/es.html> · YouTube: <https://www.youtube.com/@Hosh-uko>
