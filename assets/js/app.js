(() => {
  'use strict';
  const C = window.SITE, D = window.NACRE, U = C.ui;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const k01 = (v, a, d) => clamp((v - a) / d);
  const eo = t => 1 - Math.pow(1 - t, 3);
  const eio = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = () => innerWidth <= 820;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  const pad2 = n => String(n).padStart(2, '0');

  /* ---------- Contenus simples ---------- */
  $$('[data-cfg]').forEach(el => { const v = get(C, el.dataset.cfg); if (v != null && typeof v !== 'object') el.textContent = v; });
  $('#demo-note').hidden = !C.demo;

  let toastT = 0;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2800); }
  function copyText(text, el, done) {
    const fallback = () => { const s = getSelection(), r = document.createRange(); r.selectNodeContents(el); s.removeAllRanges(); s.addRange(r); toast(U.selected); };
    try { navigator.clipboard.writeText(text).then(() => toast(done), fallback); } catch (e) { fallback(); }
  }
  $('#copy-phone').addEventListener('click', () => copyText(C.contact.telephone, $('[data-cfg="contact.telephone"]'), U.copiedPhone));

  // réservation : plateforme externe réglable dans config.js
  $$('[data-book]').forEach(a => {
    a.textContent = a.id === 'essai-book' ? U.bookShade : a.textContent;
    if (!C.demo) { a.href = C.reservation.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    a.addEventListener('click', e => { if (C.demo) { e.preventDefault(); toast(U.demoBook(C.reservation.plateforme)); } });
  });
  const insta = C.demo ? 'https://www.instagram.com/' : `https://www.instagram.com/${encodeURIComponent(C.contact.instagram)}/`;
  $('#insta-link').href = insta;

  /* ---------- Navigation ---------- */
  const nav = $('#nav'), burger = $('#nav-burger');
  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? U.menuClose : U.menuOpen);
  });
  $$('#nav-links a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

  /* ---------- 1. Anatomie d'une pose ---------- */
  const NA = D.nails.anatomie, IW = 2400, IH = 1350;
  const bb = (() => { const xs = NA.ongle.map(p => p[0]), ys = NA.ongle.map(p => p[1]); return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) }; })();
  const toPlate = ([x, y]) => [(x - bb.x0) / (bb.x1 - bb.x0) * 100, (y - bb.y0) / (bb.y1 - bb.y0) * 100];
  const clip = poly => `polygon(${poly.map(p => toPlate(p).map(v => v.toFixed(2) + '%').join(' ')).join(',')})`;
  const edge = poly => poly.map(p => toPlate(p).map(v => v.toFixed(2)).join(',')).join(' ');
  const tip = toPlate(NA.ongle.reduce((a, p) => (p[0] > a[0] ? p : a)));
  const A = {
    sec: $('#accueil'), pin: $('#ana-pin'), photo: $('#ana-photo'), veil: $('#ana-veil'), copy: $('#ana-copy'), stage: $('#ana-stage'), stack: $('#stack'),
    labels: $('#ana-labels'), svg: $('#ana-leaders'), total: $('#ana-total'), hint: $('.scroll-hint'), p: 0, pT: 0, lock: null, plates: [], lis: [], lines: []
  };
  const KINDS = ['naturel', 'base', 'gel', 'couleur', 'art', 'top'];
  const ART = `<svg class="art" viewBox="0 0 146.5 100" preserveAspectRatio="none" aria-hidden="true"><defs>
      <pattern id="p-or" patternUnits="userSpaceOnUse" width="70" height="46"><image href="assets/img/tx-or.webp" width="70" height="46" preserveAspectRatio="xMidYMid slice"/></pattern>
      <pattern id="p-perle" patternUnits="userSpaceOnUse" width="16" height="11"><image href="assets/img/tx-perles.webp" width="16" height="11" preserveAspectRatio="xMidYMid slice"/></pattern></defs>
      <path d="M21 9 C9 27 9 50 21 66" fill="none" stroke="url(#p-or)" stroke-width="4.2" stroke-linecap="round"/>
      <path d="M29 14 C21 29 21 47 29 60" fill="none" stroke="url(#p-or)" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>
      <g><circle cx="33" cy="24" r="3.6" fill="url(#p-perle)"/><circle cx="28.5" cy="37" r="4.3" fill="url(#p-perle)"/><circle cx="33" cy="50" r="3.6" fill="url(#p-perle)"/>
      <circle cx="32" cy="22.8" r="1.1" fill="#fff" opacity=".9"/><circle cx="27.3" cy="35.6" r="1.3" fill="#fff" opacity=".9"/><circle cx="32" cy="48.8" r="1.1" fill="#fff" opacity=".9"/></g></svg>`;
  C.couches.forEach((c, i) => {
    const kind = KINDS[i] || 'base';
    const pl = document.createElement('div');
    pl.className = 'plate pl-' + kind;
    const poly = kind === 'naturel' ? NA.naturel : NA.ongle;
    pl.innerHTML = `<div class="pl-fill" style="clip-path:${clip(poly)};-webkit-clip-path:${clip(poly)}">${kind === 'art' ? ART : ''}</div>
      <svg class="pl-edge" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="${edge(poly)}"/></svg>
      <i class="pl-dot" style="left:${tip[0].toFixed(1)}%;top:${tip[1].toFixed(1)}%"></i><i class="pl-num" style="left:${tip[0].toFixed(1)}%;top:${tip[1].toFixed(1)}%">${i + 1}</i>`;
    if (kind === 'naturel' || kind === 'couleur') pl.querySelector('.pl-fill').style.backgroundImage = 'url(assets/img/anatomie-ongle.webp)';
    A.stack.appendChild(pl);
    A.plates.push(pl);
    const li = document.createElement('li');
    li.innerHTML = `<span class="n">${pad2(i + 1)}</span><div class="t"><b>${esc(c.nom)}</b><em>${c.duree} min</em></div><span class="nt">${esc(c.note)}</span>`;
    A.labels.appendChild(li); A.lis.push(li);
    const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    A.svg.appendChild(ln); A.lines.push(ln);
  });
  const totalMin = C.couches.reduce((a, c) => a + c.duree, 0);
  A.total.innerHTML = U.totals(C.couches.length, `${Math.floor(totalMin / 60)} h ${pad2(totalMin % 60)}`, esc(C.pose.prix), esc(C.pose.tenue));

  function anaLayout() {
    const vw = A.pin.clientWidth, vh = A.pin.clientHeight, m = mobile();
    const s0 = Math.max(vw / IW, vh / IH), pw = IW * s0, ph = IH * s0;
    A.ncx = (bb.x0 + bb.x1) / 200 * pw; A.ncy = (bb.y0 + bb.y1) / 200 * ph;
    A.nw = (bb.x1 - bb.x0) / 100 * pw; A.nh = (bb.y1 - bb.y0) / 100 * ph;
    // sur mobile, on cadre à gauche pour garder l'ongle dans l'écran
    A.ox = m ? clamp(vw * .42 - A.ncx, vw - pw, 0) : (vw - pw) / 2;
    A.oy = m ? clamp(vh * .3 - A.ncy, vh - ph, 0) : (vh - ph) / 2;
    Object.assign(A.photo.style, { width: pw + 'px', height: ph + 'px', left: A.ox + 'px', top: A.oy + 'px' });
    const tw = m ? vw * .74 : Math.min(560, vw * .36);
    A.Z = tw / A.nw;
    A.tx = m ? vw * .5 : vw * .31; A.ty = m ? vh * .41 : vh * .52;
    const W = A.nw * A.Z, H = A.nh * A.Z;
    A.W = W; A.H = H; A.m = m; A.vw = vw; A.vh = vh;
    Object.assign(A.stack.style, { width: W + 'px', height: H + 'px', left: (A.tx - W / 2) + 'px', top: (A.ty - H / 2) + 'px' });
    const [zx0, zy0, zx1, zy1] = NA.zoom;
    const bgW = (zx1 - zx0) / (bb.x1 - bb.x0) * W, bgH = (zy1 - zy0) / (bb.y1 - bb.y0) * H;
    const bgX = -(bb.x0 - zx0) / (bb.x1 - bb.x0) * W, bgY = -(bb.y0 - zy0) / (bb.y1 - bb.y0) * H;
    $$('.pl-naturel .pl-fill, .pl-couleur .pl-fill', A.stack).forEach(f => { f.style.backgroundSize = `${bgW}px ${bgH}px`; f.style.backgroundPosition = `${bgX}px ${bgY}px`; });
    A.pin.style.perspectiveOrigin = `${A.tx}px ${A.ty}px`;
    A.labels.style.left = '0px'; A.labels.style.top = '0px';
    renderAna(A.p);
  }
  function renderAna(p) {
    if (!A.W) return;
    const zk = reduce ? 1 : eio(k01(p, .04, .32));
    const S = Math.pow(A.Z, zk);
    const cx = lerp(A.ox + A.ncx, A.tx, zk), cy = lerp(A.oy + A.ncy, A.ty, zk);
    A.photo.style.transform = `translate(${(cx - A.ox - S * A.ncx).toFixed(2)}px,${(cy - A.oy - S * A.ncy).toFixed(2)}px) scale(${S.toFixed(5)})`;
    const ck = k01(p, .03, .13);
    A.copy.style.opacity = (1 - ck).toFixed(3);
    A.copy.style.transform = A.m ? `translateY(${(ck * 30).toFixed(1)}px)` : `translateY(calc(-50% - ${(ck * 40).toFixed(1)}px))`;
    A.copy.style.visibility = ck >= 1 ? 'hidden' : 'visible';
    A.hint.style.opacity = 1 - k01(p, .01, .05);
    const dk = k01(p, .34, .1);
    A.photo.style.opacity = (1 - .88 * dk).toFixed(3);
    A.veil.style.opacity = (dk * .96).toFixed(3);
    const ak = k01(p, .3, .06);
    A.stage.style.opacity = ak.toFixed(3);
    // la pile suit l'ongle de la photo pendant le zoom, puis s'éclate en 3D
    const ek = reduce ? 1 : eio(k01(p, .4, .34));
    const fs = S / A.Z * lerp(1, A.m ? .86 : .9, ek);
    A.stack.style.transform = `translate(${(cx - A.tx).toFixed(2)}px,${(cy - A.ty + (A.m ? -10 : 30) * ek).toFixed(2)}px) scale(${fs.toFixed(5)}) rotateX(${(56 * ek).toFixed(2)}deg) rotateZ(${(-9 * ek).toFixed(2)}deg)`;
    const gap = A.m ? 34 : 58;
    A.plates.forEach((pl, i) => {
      const e = reduce ? 1 : eio(k01(p, .4 + i * .022, .32));
      pl.style.transform = `translateZ(${(i * gap * e).toFixed(2)}px)`;
    });
    // étiquettes et lignes de rappel
    const pr = A.pin.getBoundingClientRect();
    const anchors = A.plates.map(pl => { const r = pl.querySelector('.pl-dot').getBoundingClientRect(); return [r.left + r.width / 2 - pr.left, r.top + r.height / 2 - pr.top]; });
    const labX = Math.max(...anchors.map(a => a[0])) + 56;
    let lastY = Infinity;
    A.lis.forEach((li, i) => {
      const o = reduce ? 1 : k01(p, .56 + i * .045, .07);
      li.style.opacity = o.toFixed(3);
      A.plates[i].querySelector('.pl-num').style.opacity = A.m ? o.toFixed(3) : 0;
      if (A.m) { li.style.transform = ''; return; }
      const y = Math.min(anchors[i][1], lastY - 64); lastY = y;
      li.style.transform = `translate(${(labX + (1 - o) * 14).toFixed(1)}px,${(y - 14).toFixed(1)}px)`;
      const ln = A.lines[i];
      ln.setAttribute('x1', anchors[i][0].toFixed(1)); ln.setAttribute('y1', anchors[i][1].toFixed(1));
      ln.setAttribute('x2', (labX - 12).toFixed(1)); ln.setAttribute('y2', y.toFixed(1));
      ln.style.opacity = o.toFixed(3);
    });
    A.total.style.opacity = (reduce ? 1 : k01(p, .8, .06)).toFixed(3);
  }

  /* ---------- 2. Essayez la couleur ---------- */
  const E = { cv: $('#essai-cv'), W: 935, H: 704, im: {}, t: C.teintes[4], f: 'brillant', k: 1, orig: false, raf: 0 };
  E.ctx = E.cv.getContext('2d');
  const mkc = () => { const c = document.createElement('canvas'); c.width = E.W; c.height = E.H; return c; };
  E.cur = mkc(); E.prev = mkc(); E.tmp = mkc(); E.gl = mkc();
  (function glitter() { // paillettes générées une fois
    const g = E.gl.getContext('2d');
    const cols = ['#ffffff', '#fff3cf', '#e2e2f2', '#ffd9e8', '#d8f2ff'];
    for (let i = 0; i < 16000; i++) {
      const x = Math.random() * E.W, y = Math.random() * E.H, r = .4 + Math.random() * 1.3;
      g.globalAlpha = .25 + Math.random() * .75; g.fillStyle = cols[i % cols.length];
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
    g.globalAlpha = 1;
  })();
  function paint(cv, hex, fin) {
    const g = cv.getContext('2d');
    g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1; g.clearRect(0, 0, E.W, E.H);
    g.drawImage(E.im.ombre, 0, 0, E.W, E.H);
    g.globalCompositeOperation = 'multiply'; g.fillStyle = hex; g.fillRect(0, 0, E.W, E.H);
    if (fin === 'chrome') { g.globalCompositeOperation = 'overlay'; g.globalAlpha = .9; g.drawImage(E.im.chrome, 0, 0, E.W, E.H); g.globalAlpha = 1; }
    if (fin === 'paillete') { g.globalCompositeOperation = 'screen'; g.globalAlpha = .85; g.drawImage(E.gl, 0, 0); g.globalAlpha = 1; }
    if (fin === 'mat') { g.globalCompositeOperation = 'screen'; g.fillStyle = 'rgba(255,255,255,.07)'; g.fillRect(0, 0, E.W, E.H); }
    g.globalCompositeOperation = 'destination-in'; g.drawImage(E.im.masque, 0, 0, E.W, E.H);
    g.globalCompositeOperation = 'screen'; g.globalAlpha = { brillant: .95, mat: .1, chrome: 1, paillete: .75 }[fin]; g.drawImage(E.im.reflets, 0, 0, E.W, E.H);
    if (fin === 'chrome') g.drawImage(E.im.reflets, 0, 0, E.W, E.H);
    g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
  }
  function essaiDraw() {
    const g = E.ctx;
    if (!E.ready) return;
    g.globalCompositeOperation = 'source-over';
    g.drawImage(E.im.photo, 0, 0, E.W, E.H);
    if (E.orig) return;
    if (E.k < 1) {
      g.drawImage(E.prev, 0, 0);
      // la nouvelle teinte arrive comme un coup de pinceau, de la cuticule vers le bout de l'ongle
      const t = E.tmp.getContext('2d');
      t.globalCompositeOperation = 'source-over'; t.clearRect(0, 0, E.W, E.H); t.drawImage(E.cur, 0, 0);
      const ux = .54, uy = .84, d = lerp(-60, E.W * ux + E.H * uy + 60, eo(E.k));
      const gr = t.createLinearGradient(ux * (d - 90), uy * (d - 90), ux * d, uy * d);
      gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
      t.globalCompositeOperation = 'destination-in'; t.fillStyle = gr; t.fillRect(0, 0, E.W, E.H);
      g.drawImage(E.tmp, 0, 0);
    } else g.drawImage(E.cur, 0, 0);
  }
  function essaiAnim() {
    cancelAnimationFrame(E.raf);
    if (reduce) { E.k = 1; essaiDraw(); return; }
    const t0 = performance.now();
    const f = now => { E.k = clamp((now - t0) / 700); essaiDraw(); if (E.k < 1) E.raf = requestAnimationFrame(f); };
    E.raf = requestAnimationFrame(f);
  }
  function essaiUpdate(instant) {
    const pc = E.prev.getContext('2d'); pc.clearRect(0, 0, E.W, E.H); pc.drawImage(E.cur, 0, 0);
    paint(E.cur, E.t.hex, E.f);
    const fin = C.finitions.find(x => x.id === E.f);
    const tag = $('#essai-tag');
    tag.style.setProperty('--c', E.t.hex);
    tag.innerHTML = `<i aria-hidden="true"></i><span>${esc(E.t.nom)} · ${esc(fin.nom.toLowerCase())}</span><small>${esc(E.t.ref)}</small>`;
    $$('.sw').forEach(b => b.setAttribute('aria-checked', b.dataset.ref === E.t.ref));
    $$('.fin').forEach(b => b.setAttribute('aria-checked', b.dataset.id === E.f));
    if (instant) { E.k = 1; essaiDraw(); } else { E.k = 0; essaiAnim(); }
  }
  const sw = $('#swatches');
  C.teintes.forEach(t => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw'; b.dataset.ref = t.ref; b.setAttribute('role', 'radio');
    b.setAttribute('aria-label', `${t.nom}, ${t.ref}`);
    b.style.setProperty('--c', t.hex);
    b.innerHTML = `<i aria-hidden="true"></i><span>${esc(t.nom)}</span>`;
    b.addEventListener('click', () => { E.t = t; if (E.ready) essaiUpdate(); });
    sw.appendChild(b);
  });
  const fins = $('#finishes');
  C.finitions.forEach(f => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip fin'; b.dataset.id = f.id; b.setAttribute('role', 'radio'); b.textContent = f.nom;
    b.addEventListener('click', () => { E.f = f.id; if (E.ready) essaiUpdate(); });
    fins.appendChild(b);
  });
  const radioKeys = (box, sel) => box.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
    const items = $$(sel, box), i = items.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const n = items[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length];
    n.focus(); n.click();
  });
  radioKeys(sw, '.sw'); radioKeys(fins, '.fin');
  const hold = on => { if (E.orig === on) return; E.orig = on; essaiDraw(); };
  E.cv.addEventListener('pointerdown', () => hold(true));
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => E.cv.addEventListener(ev, () => hold(false)));
  E.cv.addEventListener('contextmenu', e => e.preventDefault());
  $('#essai-copy').addEventListener('click', () => copyText(U.shadeRef(C.marque.nom, E.t.nom, E.t.ref, C.finitions.find(x => x.id === E.f).nom.toLowerCase()), $('#essai-tag'), U.copiedRef));
  const loadImg = src => new Promise(res => { const i = new Image(); i.decoding = 'async'; i.onload = () => res(i); i.onerror = () => res(i); i.src = src; });
  Promise.all(['essai.webp', 'essai-ombre.png', 'essai-masque.png', 'essai-reflets.png', 'tx-chrome.webp'].map(n => loadImg('assets/img/' + n))).then(([photo, ombre, masque, reflets, chrome]) => {
    Object.assign(E.im, { photo, ombre, masque, reflets, chrome });
    E.ready = true;
    paint(E.cur, E.t.hex, E.f);
    essaiUpdate(true);
  });

  /* ---------- 3. Quelle forme ? ---------- */
  const EXT = {
    carre: s => { const d = s * 144; if (d <= 74) return [162, 150 - d]; if (d <= 96) { const a = (d - 74) / 22 * Math.PI / 2; return [148 + 14 * Math.cos(a), 76 - 14 * Math.sin(a)]; } return [148 - (d - 96), 62]; },
    ovale: s => { const a = s * Math.PI / 2; return [100 + 62 * Math.cos(a), 150 - 104 * Math.sin(a)]; },
    amande: s => [100 + 62 * Math.pow(1 - Math.pow(s, 2.2), .5), 150 - 120 * s],
    ballerine: s => {
      const d = s * 140.8;
      if (d <= 117.4) { const t = d / 117.4; return [lerp(162, 121, t), lerp(150, 40, t)]; }
      if (d <= 126.8) { const t = (d - 117.4) / 9.4, u = 1 - t; return [u * u * 121 + 2 * u * t * 119 + t * t * 114, u * u * 40 + 2 * u * t * 34 + t * t * 34]; }
      return [114 - (d - 126.8), 34];
    },
    stiletto: s => [100 + 62 * Math.pow(1 - s, .9), 150 - 146 * s]
  };
  const TIP = { carre: 62, ovale: 46, amande: 30, ballerine: 34, stiletto: 4 };
  function outline(kind) {
    const r = [];
    for (let i = 0; i <= 6; i++) { const t = i / 6; r.push([100 + 62 * Math.sin(t * Math.PI / 2), 278 + 24 * Math.cos(t * Math.PI / 2)]); }
    for (let i = 1; i <= 5; i++) { const s = i / 5; r.push([162 + 2 * Math.sin(s * Math.PI), 278 - 128 * s]); }
    for (let i = 1; i <= 16; i++) r.push(EXT[kind](i / 16));
    const l = r.slice(1, -1).reverse().map(([x, y]) => [200 - x, y]);
    return r.concat(l);
  }
  function pathD(p) {
    const n = p.length; let d = `M${p[0][0].toFixed(2)} ${p[0][1].toFixed(2)}`;
    for (let i = 0; i < n; i++) {
      const p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
      d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(2)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(2)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(2)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
    }
    return d + 'Z';
  }
  const SH = { path: $('#shape-path'), clip: $('#shape-clip-path'), mm: $('#shape-mm'), info: $('#shape-info'), cur: null, pts: null, raf: 0 };
  const shapePts = {}; Object.keys(EXT).forEach(k => { shapePts[k] = outline(k); });
  const drawShape = pts => { const d = pathD(pts); SH.path.setAttribute('d', d); SH.clip.setAttribute('d', d); };
  C.formes.forEach((f, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip shape-tab'; b.id = 'shape-' + f.id; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === 2);
    b.innerHTML = `<svg viewBox="0 0 200 310" aria-hidden="true"><path d="${pathD(shapePts[f.id])}"/></svg>${esc(f.nom)}`;
    b.addEventListener('click', () => setShape(f.id));
    b.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const k = (i + (e.key === 'ArrowRight' ? 1 : -1) + C.formes.length) % C.formes.length;
      setShape(C.formes[k].id); $('#shape-' + C.formes[k].id).focus();
    });
    $('#shape-tabs').appendChild(b);
  });
  function setShape(id, instant) {
    const f = C.formes.find(x => x.id === id);
    if (!f) return;
    SH.cur = id;
    $$('.shape-tab').forEach(t => t.setAttribute('aria-selected', t.id === 'shape-' + id));
    SH.info.setAttribute('aria-labelledby', 'shape-' + id);
    SH.info.innerHTML = `<h3>${esc(f.nom)}</h3><p>${esc(f.texte)}</p><dl class="specs"><div><dt>${U.length}</dt><dd>${esc(f.longueur)}</dd></div><div><dt>${U.idealFor}</dt><dd>${esc(f.pourQui)}</dd></div><div><dt>${U.strength}</dt><dd><span class="pips" aria-label="${U.outOf5(f.solidite)}">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= f.solidite ? 'on' : ''}"></i>`).join('')}</span></dd></div></dl>`;
    SH.mm.textContent = U.beyond(Math.round((150 - TIP[id]) / 22));
    const to = shapePts[id], from = SH.pts || to;
    cancelAnimationFrame(SH.raf);
    if (instant || reduce || !SH.pts) { SH.pts = to; drawShape(to); return; }
    const t0 = performance.now();
    const f2 = now => {
      const k = eio(clamp((now - t0) / 700));
      SH.pts = from.map((p, j) => [lerp(p[0], to[j][0], k), lerp(p[1], to[j][1], k)]);
      drawShape(SH.pts);
      if (k < 1) SH.raf = requestAnimationFrame(f2);
    };
    SH.raf = requestAnimationFrame(f2);
  }
  setShape('amande', true);

  /* ---------- 4. Galerie et visionneuse ---------- */
  const CATS = Object.fromEntries(C.galerie.filtres);
  const G = { box: $('#gal'), f: 'tout', figs: [], idx: 0, back: null };
  C.galerie.photos.forEach((ph, i) => {
    const s = D.sizes[ph.img] || [1200, 1500];
    const fig = document.createElement('figure');
    fig.dataset.cat = ph.cat; fig.tabIndex = 0; fig.setAttribute('role', 'button');
    fig.setAttribute('aria-label', `${ph.titre}, ${CATS[ph.cat]} : agrandir`);
    fig.innerHTML = `<img src="assets/img/${ph.img}.webp" alt="${esc(ph.titre)}" width="${s[0]}" height="${s[1]}" loading="lazy" decoding="async"><figcaption><span>${esc(ph.titre)}</span><small>${esc(CATS[ph.cat])}</small></figcaption>`;
    fig.addEventListener('click', () => openLB(i));
    fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB(i); } });
    G.box.appendChild(fig); G.figs.push(fig);
  });
  C.galerie.filtres.forEach(([id, label]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.textContent = label; b.dataset.f = id; b.setAttribute('aria-pressed', id === 'tout');
    b.addEventListener('click', () => {
      G.f = id;
      $$('#gal-chips .chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.f === id));
      G.figs.forEach((fig, i) => {
        const on = id === 'tout' || fig.dataset.cat === id;
        fig.hidden = !on;
        if (on && !reduce) { fig.classList.remove('pop'); void fig.offsetWidth; fig.style.animationDelay = (i % 8) * 40 + 'ms'; fig.classList.add('pop'); }
      });
    });
    $('#gal-chips').appendChild(b);
  });
  const LB = { el: $('#lightbox'), img: $('#lb-img'), cap: $('#lb-cap'), fig: $('#lb-fig') };
  const visible = () => G.figs.map((f, i) => (f.hidden ? -1 : i)).filter(i => i >= 0);
  function showLB(i) {
    const ph = C.galerie.photos[i]; G.idx = i;
    LB.fig.classList.remove('zoom');
    LB.img.src = `assets/img/${ph.img}.webp`; LB.img.alt = ph.titre;
    const v = visible();
    LB.cap.textContent = `${ph.titre} · ${CATS[ph.cat]} · ${v.indexOf(i) + 1} / ${v.length}`;
  }
  function openLB(i) {
    if (LB.el.hidden) G.back = document.activeElement;
    showLB(i); LB.el.hidden = false; document.documentElement.style.overflow = 'hidden';
    $('#lb-close').focus({ preventScroll: true });
  }
  function closeLB() { LB.el.hidden = true; document.documentElement.style.overflow = ''; if (G.back && G.back.focus) G.back.focus({ preventScroll: true }); }
  const stepLB = k => { const v = visible(); const j = v.indexOf(G.idx); showLB(v[(j + k + v.length) % v.length]); };
  $('#lb-close').addEventListener('click', closeLB);
  $('#lb-prev').addEventListener('click', () => stepLB(-1));
  $('#lb-next').addEventListener('click', () => stepLB(1));
  LB.el.addEventListener('click', e => { if (e.target === LB.el) closeLB(); });
  LB.img.addEventListener('click', e => {
    const r = LB.img.getBoundingClientRect();
    LB.img.style.transformOrigin = `${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`;
    LB.fig.classList.toggle('zoom');
  });
  addEventListener('keydown', e => {
    if (LB.el.hidden) return;
    if (e.key === 'Escape') closeLB();
    else if (e.key === 'ArrowRight') stepLB(1);
    else if (e.key === 'ArrowLeft') stepLB(-1);
    else if (e.key === 'Tab') {
      const f = $$('button', LB.el);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  /* ---------- 5 à 10. Listes ---------- */
  $('#menu').innerHTML = C.prestations.map(g => `<div class="menu-group"><h3>${esc(g.groupe)}</h3>${g.items.map(([n, d, t, p]) => `<div class="row"><b>${esc(n)}</b><span class="d">${esc(t)}</span><span class="p">${esc(p)}</span><p>${esc(d)}</p></div>`).join('')}</div>`).join('');
  $('#hyg').innerHTML = C.hygiene.map(h => `<figure class="rv"><img src="assets/img/${h.img}.webp" alt="" loading="lazy" decoding="async"><h3>${esc(h.titre)}</h3><p>${esc(h.texte)}</p></figure>`).join('');
  $('#avis').innerHTML = C.avis.map(([q, n, w]) => `<blockquote class="rv"><q>${esc(q)}</q><cite>${esc(n)} · ${esc(w)}</cite></blockquote>`).join('');
  $('#faq-list').innerHTML = C.faq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(q)}<i aria-hidden="true"></i></summary><p>${esc(a)}</p></details>`).join('');
  $('#hours').innerHTML = C.contact.horaires.map(([d, h]) => `${esc(d)} · ${esc(h)}`).join('<br>');
  $('#credits').innerHTML = C.credits.map(([w, a, l]) => `<li><b>${esc(w)}</b>${U.colon}${esc(a)} (${esc(l)})</li>`).join('');
  $('#insta').innerHTML = C.galerie.photos.slice(0, 6).map(ph => `<a href="${insta}" target="_blank" rel="noopener noreferrer" aria-label="${esc(U.seeOnInsta(ph.titre))}"><img src="assets/img/${ph.img}.webp" alt="" loading="lazy" decoding="async"></a>`).join('');
  $$('#insta a, #insta-link').forEach(a => a.addEventListener('click', e => { if (C.demo) { e.preventDefault(); toast(U.demoInsta(C.contact.instagram)); } }));

  /* ---------- Apparitions ---------- */
  $$('.sec-head, .essai-photo, .shape-fig, .row, .artiste-photo, .stats > div').forEach(el => el.classList.add('rv'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.rv').forEach(el => io.observe(el));
  } else $$('.rv').forEach(el => el.classList.add('in'));

  /* ---------- Boucle de rendu ---------- */
  const prog = sec => { const r = sec.getBoundingClientRect(); const len = sec.offsetHeight - innerHeight; return len > 0 ? clamp(-r.top / len) : 0; };
  let raf = 0;
  function tick() {
    raf = 0;
    A.pT = A.lock != null ? A.lock : prog(A.sec);
    const d = A.pT - A.p;
    let again = false;
    if (Math.abs(d) > .0004) { A.p += reduce ? d : d * (Math.abs(d) > .1 ? .3 : .16); again = true; } else A.p = A.pT;
    const r = A.sec.getBoundingClientRect();
    if (r.bottom > 0) renderAna(A.p);
    if (again) raf = requestAnimationFrame(tick);
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
  addEventListener('scroll', kick, { passive: true });
  let rt = 0;
  const relayout = () => { anaLayout(); kick(); };
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(relayout, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
  addEventListener('load', relayout);
  relayout();

})();
