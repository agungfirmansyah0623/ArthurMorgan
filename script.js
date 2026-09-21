/* ===== JADWAL BUKA WEB (waktu WIB, format: TAHUN-BULAN-TANGGALTJAM:MENIT:DETIK+07:00) ===== */
const BUKA_PADA  = "2026-09-20T08:00:00+07:00"; /* web baru bisa dibuka mulai waktu ini. Kosongkan ("") jika tidak dipakai */
const TUTUP_PADA = "";                            /* opsional: web tertutup lagi setelah waktu ini. Contoh: "2026-09-27T17:00:00+07:00" */
const INTRO_DETIK =3; /* lama hitung mundur (detik). Isi 0 untuk mematikan */
document.documentElement.classList.add("js");
/* ============ ISI HALAMAN: ubah bagian ini saja ============ */
const GROUP = {
  name: "Kelompok 7" ,
  marquee: ["Kelompok 7", "LKMM Unand",  "Hidup FTI", "Informatika", "Sistem Informasi", "Teknik Komputer" ],
  tagline: ["GA SOMBONG GA AROGAN, ARTHUR MORGAN"],
  about: [
    "Kelompok ini dibentuk dalam melaksanakan kegiatan LKMM, Arthur Morgan adalah salah satu kelompok peserta LKMM (Latihan Keterampilan Manajemen Mahasiswa) Universitas Andalas. Kami terdiri dari 16 mahasiswa dengan latar belakang, jurusan, dan pengalaman organisasi yang berbeda, yang dipertemukan untuk belajar kepemimpinan dan manajemen organisasi secara langsung.Selama LKMM, kami berdiskusi, mengerjakan tugas, dan menjalankan kegiatan bersama. Di situ kami belajar mendengarkan, membagi peran, mengambil keputusan, dan bertanggung jawab atas hasil kerja tim. Bagi kami, kepemimpinan bukan soal jabatan, tetapi soal kemauan untuk belajar dan bergerak bersama. Halaman ini kami buat sebagai tempat menyimpan perkenalan anggota, dokumentasi kegiatan, dan cerita selama mengikuti LKMM Unand.",
  ],
  facts: [
    ["Mentor", "UDA & UNI"],
    ["ANGGOTA", "16 orang"],
    ["Terbentuk", "2026"],
    ["Kegiatan", "KEGIATAN LKMM"],
    ["Asal", "UNIVERSITAS ANDALAS"]
  ],
  members: [
    { name: "NAMA MENTOR  ", role: "MENTOR",  bio: "Tulis bio singkat di sini.", handle: "FADIL ABISALI" },
    { name: "NAMA MENTOR  ", role: "MENTOR",  bio: "Tulis bio singkat di sini.", handle: "RAYYA" },
    { name: "NAMA KETUA   ", role: "KETUA",   bio: "Tulis bio singkat di sini.", handle: "AGUNG FIRMANSYAH" },
    { name: "NAMA PDD     ", role: "PDD",     bio: "Tulis bio singkat di sini.", handle: "NAILAHUSNA" },
    { name: "NAMA PDD     ", role: "PDD",     bio: "Tulis bio singkat di sini.", handle: "SITI AZIZI RAHIMA" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "SABIRIL RAUF" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "HAVIS LUTFI" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "AFIF QASIM AL GHIFARI" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "M. FADLAN MALIK" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "NUR HAFIJA PANJAITAN" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "ADRYAN AKBAR" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "FAJRIL ATTHAR RAHMAN" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "AURA AULIA ZULFI" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "IBNU ZABDI AL FARUQI" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "ACHMAD LEDO KAUTSAR ERWINSYAH" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "ALEA DAGNA ANINDYA" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "ASIYAH SHAHIRA DELHAN" },
    { name: "NAMA ANGGOTA ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "CLAUDYA ANNISA" },
  ],
  gallery: [
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto1.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto2.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto3.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto4.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto_profil.png", ukuran: "kecil" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto5.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto6.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto7.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto8.jpeg" },
    { cap: "DAY 1", w: 800, h: 600, photo: "foto/foto9.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto10.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto11.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto12.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto13.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto14.jpeg" },
    { cap: "DAY 2", w: 800, h: 600, photo: "foto/foto15.jpeg" },    
  ],
  social: [
    { platform: "Instagram", handle: "@7.arthurmorgan", url: "https://www.instagram.com/7.arthurmorgan/?utm_source=ig_web_button_share_sheet" },
    { platform: "Instagram", handle: "UDA @mufa.by", url: "https://www.instagram.com/mufa.by_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" },
    { platform: "Instagram", handle: "UNI @rayyasyaqinah", url: "https://www.instagram.com/rayyasyaqinah?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" },
  ]
};
/* ============================================================ */

const PALETTES = [
  ["#2340D9","#FFD84D","#FF8FB8"],["#FF8FB8","#2340D9","#FFD84D"],["#FFD84D","#FF6B4A","#2340D9"],
  ["#5AD1B0","#2340D9","#FFD84D"],["#9B7BFF","#FFD84D","#FF8FB8"],["#FF6B4A","#FFD84D","#5AD1B0"]
];
function svgUri(svg){ return "data:image/svg+xml;utf8," + encodeURIComponent(svg); }
function personArt(i){
  const p = PALETTES[i % PALETTES.length];
  return svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="${p[0]}"/><circle cx="330" cy="70" r="46" fill="${p[1]}"/><circle cx="200" cy="160" r="70" fill="${p[2]}"/><path d="M60 400c0-88 62-140 140-140s140 52 140 140z" fill="${p[2]}"/><rect x="0" y="360" width="400" height="40" fill="${p[1]}" opacity=".35"/></svg>`);
}
function sceneArt(i, w, h){
  const p = PALETTES[(i + 2) % PALETTES.length], m = Math.min(w, h);
  return svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><circle cx="${w*0.72}" cy="${h*0.28}" r="${m*0.22}" fill="${p[1]}"/><path d="M0 ${h*0.72} Q ${w*0.3} ${h*0.5} ${w*0.6} ${h*0.72} T ${w} ${h*0.66} V ${h} H 0z" fill="${p[2]}"/><rect x="${w*0.12}" y="${h*0.2}" width="${m*0.2}" height="${m*0.2}" rx="10" fill="${p[2]}" opacity=".8" transform="rotate(${(i%2?1:-1)*12} ${w*0.2} ${h*0.3})"/></svg>`);
}
function esc(s){ const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

/* nama & tagline */
document.title = GROUP.name;
["brandName","heroName","footName"].forEach(id => document.getElementById(id).textContent = GROUP.name);
document.getElementById("heroTagline").textContent = GROUP.tagline;

/* hero: tiga foto */
document.getElementById("heroStack").innerHTML = [0,2,4].map(i => {
  const g = GROUP.gallery[i] || { cap: "", w: 400, h: 400 };
  return `<figure class="pola"><img src="${g.photo || sceneArt(i, 400, 400)}" alt=""><figcaption>${esc(g.cap)}</figcaption></figure>`;
}).join("");

/* tentang */
document.getElementById("aboutText").innerHTML = GROUP.about.map(t => `<p>${esc(t)}</p>`).join("");
document.getElementById("facts").innerHTML = GROUP.facts.map(f => `<li><span>${esc(f[0])}</span><strong>${esc(f[1])}</strong></li>`).join("");

/* anggota */
document.getElementById("memberGrid").innerHTML = GROUP.members.map((m, i) => `
  <article class="member">
    <div class="initial" aria-hidden="true" style="background:${PALETTES[i % PALETTES.length][1]}">${esc(m.name.trim().charAt(0).toUpperCase())}</div>
    <h3>${esc(m.name)}</h3>
    <span class="role">${esc(m.role)}</span>
    <p>${esc(m.bio)}</p>
    <a class="handle" href="#sosial">${esc(m.handle)}</a>
  </article>`).join("");

/* galeri: carousel geser */
const shots = GROUP.gallery.map((g, i) => ({ ...g, src: g.photo || sceneArt(i, g.w, g.h) }));
const UKURAN = {
  kecil:  { lebar: "min(82%,600px)", rasio: "1/1"  },
  tinggi: { lebar: "min(70%,400px)", rasio: "3/4"  },
  besar:  { lebar: "min(92%,900px)", rasio: "16/9" },
  penuh:  { lebar: "100%",           rasio: "21/9" }
};
function bingkai(g){
  const u = UKURAN[g.ukuran] || {};
  const bersih = v => String(v || "").replace(/["'<>;]/g, "");
  const lebar = bersih(g.lebar || u.lebar), rasio = bersih(g.rasio || u.rasio);
  return { fig: lebar ? ` style="flex:0 0 ${lebar}"` : "", img: rasio ? ` style="aspect-ratio:${rasio}"` : "" };
}
const track = document.getElementById("track");
track.innerHTML = shots.map((g, i) => {
  const b = bingkai(g);
  return `<figure class="slide" data-i="${i}"${b.fig} aria-roledescription="slide" aria-label="${i+1} dari ${shots.length}"><img src="${g.src}" alt="${esc(g.cap)}" draggable="false" width="${g.w}" height="${g.h}"${b.img}><figcaption>${esc(g.cap)}</figcaption></figure>`;
}).join("");
const slides = [...track.querySelectorAll(".slide")];
const dotsEl = document.getElementById("dots"), counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn"), nextBtn = document.getElementById("nextBtn");
dotsEl.innerHTML = shots.map((g, i) => `<button type="button" data-i="${i}" aria-label="Foto ${i+1}: ${esc(g.cap)}"></button>`).join("");
const dots = [...dotsEl.children];
let active = 0;

function goTo(i){
  i = Math.max(0, Math.min(shots.length - 1, i));
  const s = slides[i];
  track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.clientWidth) / 2, behavior: "smooth" });
}
function nearest(){
  const c = track.scrollLeft + track.clientWidth / 2;
  let best = 0, bd = Infinity;
  slides.forEach((s, i) => { const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - c); if (d < bd) { bd = d; best = i; } });
  return best;
}
function update(){
  active = nearest();
  slides.forEach((s, i) => s.setAttribute("aria-current", i === active ? "true" : "false"));
  dots.forEach((d, i) => d.setAttribute("aria-current", i === active ? "true" : "false"));
  counter.textContent = (active + 1) + " / " + shots.length;
  prevBtn.disabled = active === 0;
  nextBtn.disabled = active === shots.length - 1;
}
let ticking = false;
track.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false; }); } });
prevBtn.onclick = () => goTo(active - 1);
nextBtn.onclick = () => goTo(active + 1);
dotsEl.addEventListener("click", e => { const b = e.target.closest("button"); if (b) goTo(+b.dataset.i); });
track.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(active - 1); }
  if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
});

/* geser dengan mouse (di layar sentuh sudah bawaan) */
let drag = null;
track.addEventListener("pointerdown", e => {
  if (e.pointerType !== "mouse" || e.button !== 0) return;
  drag = { x: e.clientX, left: track.scrollLeft, moved: false };
});
window.addEventListener("pointermove", e => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (!drag.moved && Math.abs(dx) > 4) { drag.moved = true; track.classList.add("dragging"); }
  if (drag.moved) track.scrollLeft = drag.left - dx;
});
window.addEventListener("pointerup", () => {
  if (!drag) return;
  const moved = drag.moved; drag = null;
  if (moved) { track.classList.remove("dragging"); goTo(nearest()); }
});
window.addEventListener("resize", update);
update();

/* sosial media */
document.getElementById("socialList").innerHTML = GROUP.social.map(s => {
  const ext = /^https?:/.test(s.url);
  return `<li><a href="${esc(s.url)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}><span class="plat">${esc(s.platform)}</span><span class="hnd">${esc(s.handle)}</span><span class="go">Buka</span></a></li>`;
}).join("");


/* ============ ANIMASI ============ */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 1. teks berjalan */
(function(){
  const items = GROUP.marquee || [GROUP.name];
  const one = items.map(t => `<span>${esc(t)}</span><span>\u2726</span>`).join("");
  document.getElementById("marqueeTrack").innerHTML = one + one;
})();

if (!reduceMotion) {
  /* 2. judul: huruf naik satu-satu */
  const h1 = document.getElementById("heroName");
  const txt = h1.textContent;
  h1.setAttribute("aria-label", txt);
  h1.innerHTML = [...txt].map((c, i) => `<span class="ch" aria-hidden="true" style="--i:${i}">${esc(c)}</span>`).join("");

  /* 3. muncul saat di-scroll */
  const targets = document.querySelectorAll("section h2, section .lead, .about-grid p, .facts li, .member, .social-list li, .carousel");
  const groups = new Map();
  targets.forEach(el => {
    const p = el.parentElement;
    const n = groups.get(p) || 0; groups.set(p, n + 1);
    el.classList.add("reveal");
    el.style.setProperty("--d", Math.min(n % 4, 3) * 90 + "ms");
  });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(el => io.observe(el));

  /* 4. galeri jalan sendiri (berhenti jika disentuh) */
  let lastTouch = 0, hovering = false, visible = false;
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: 0.4 }).observe(track);
  const mark = () => { lastTouch = Date.now(); };
  ["pointerdown","touchstart","keydown","wheel"].forEach(ev => track.addEventListener(ev, mark, { passive: true }));
  prevBtn.addEventListener("click", mark); nextBtn.addEventListener("click", mark); dotsEl.addEventListener("click", mark);
  track.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") hovering = true; });
  track.addEventListener("pointerleave", () => { hovering = false; });
  setInterval(() => {
    if (!visible || hovering || document.hidden || Date.now() - lastTouch < 5000) return;
    goTo(active === shots.length - 1 ? 0 : active + 1);
  }, 3500);
}


/* ============ HITUNG MUNDUR SEBELUM WEB DIBUKA ============ */
let introStarted = false;
function startIntro(){
  if (introStarted) return; introStarted = true;
  const root = document.documentElement, el = document.getElementById("intro");
  if (!el) return;
  if (INTRO_DETIK <= 0) { el.remove(); root.classList.remove("intro-on"); return; }
  const num = document.getElementById("introNum"), bar = document.getElementById("introBar"), skip = document.getElementById("introSkip");
  document.getElementById("introName").textContent = GROUP.name;
  let left = INTRO_DETIK, timer, done = false;
  num.textContent = left;
  bar.style.transitionDuration = INTRO_DETIK + "s";
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transform = "scaleX(1)"; }));
  function finish(){
    if (done) return; done = true;
    clearInterval(timer);
    el.classList.add("leave");
    root.classList.remove("intro-on");
    setTimeout(() => el.remove(), 800);
  }
  timer = setInterval(() => {
    left--;
    if (left <= 0) { finish(); return; }
    num.textContent = left;
    num.classList.remove("pop"); void num.offsetWidth; num.classList.add("pop");
  }, 1000);
  skip.addEventListener("click", finish);
  skip.focus({ preventScroll: true });
}


/* ============ JADWAL BUKA WEB ============ */
(async function(){
  const openAt  = BUKA_PADA  ? Date.parse(BUKA_PADA)  : NaN;
  const closeAt = TUTUP_PADA ? Date.parse(TUTUP_PADA) : NaN;
  const hasOpen = !isNaN(openAt), hasClose = !isNaN(closeAt);
  if (!hasOpen && !hasClose) { startIntro(); return; }

  /* waktu acuan: jam server (header Date) supaya tidak bergantung jam perangkat; cadangan: jam perangkat */
  let offset = 0;
  try {
    const c = new AbortController(), t = setTimeout(() => c.abort(), 1500);
    const r = await fetch(location.href.split("#")[0], { method: "HEAD", cache: "no-store", signal: c.signal });
    clearTimeout(t);
    const d = r.headers.get("Date");
    if (d && !isNaN(Date.parse(d))) offset = Date.parse(d) - Date.now();
  } catch (e) {}
  const now = () => Date.now() + offset;

  const root = document.documentElement, gate = document.getElementById("gate");
  const $ = id => document.getElementById(id);
  document.getElementById("gateName").textContent = GROUP.name;
  const fmt = ms => new Date(ms).toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short", timeZone: "Asia/Jakarta" }) + " WIB";
  const pad = n => String(n).padStart(2, "0");

  let current = null;
  function state(){
    const t = now();
    if (hasOpen && t < openAt) return "before";
    if (hasClose && t >= closeAt) return "after";
    return "open";
  }
  function apply(s){
    if (s === "open") {
      gate.hidden = true; root.classList.remove("locked");
      startIntro();
      return;
    }
    root.classList.add("locked"); gate.hidden = false;
    if (s === "before") {
      $("gateTitle").textContent = "Web belum dibuka";
      $("gateWhen").textContent = "Dibuka pada " + fmt(openAt);
      $("gateCount").hidden = false;
      $("gateNote").textContent = "Halaman ini akan terbuka sendiri saat waktunya tiba. Kamu tidak perlu refresh.";
    } else {
      $("gateTitle").textContent = "Web sudah ditutup";
      $("gateWhen").textContent = "Ditutup pada " + fmt(closeAt);
      $("gateCount").hidden = true;
      $("gateNote").textContent = "Terima kasih sudah berkunjung.";
    }
  }
  function tick(){
    const s = state();
    if (s !== current) { current = s; apply(s); }
    if (s === "before") {
      let diff = Math.max(0, Math.floor((openAt - now()) / 1000));
      const d = Math.floor(diff / 86400); diff -= d * 86400;
      const h = Math.floor(diff / 3600);  diff -= h * 3600;
      const m = Math.floor(diff / 60), sec = diff - m * 60;
      $("gD").textContent = d; $("gH").textContent = pad(h); $("gM").textContent = pad(m); $("gS").textContent = pad(sec);
    }
  }
  tick();
  setInterval(tick, 500);
})();

/* ============ EFEK TEMBAKAN SAAT KLIK ============ */

const EFEK_TEMBAKAN  = true;    /* true = aktif, false = mati */
const KURSOR         = "bidik"; /* bentuk kursor: "bidik" | "pistol" | "biasa" */
const SUARA_TEMBAKAN = true;   /* true = ada suara letusan */
const SUARA_VOLUME   = 0.7;     /* keras suara: 0 sampai 1 */
const SUARA_FILE     = "";      /* opsional: file rekaman asli, contoh "suara/eagle.mp3" */

(function(){
  const kurangiGerak = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (KURSOR === "pistol") document.documentElement.classList.add("kursor-pistol");
  if (KURSOR === "biasa")  document.documentElement.classList.add("kursor-biasa");

  /* ---- kursor buatan JS: tampil di semua browser desktop, tidak bergantung pada CSS kursor ---- */
  const BENTUK = {
    bidik:  { hx: 24, hy: 24, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round"><g stroke="#14163A" stroke-width="6"><circle cx="24" cy="24" r="14"/><path d="M24 3V13M24 35V45M3 24H13M35 24H45"/></g><g stroke="#FFD84D" stroke-width="2.6"><circle cx="24" cy="24" r="14"/><path d="M24 3V13M24 35V45M3 24H13M35 24H45"/></g></g><circle cx="24" cy="24" r="3.2" fill="#FF8FB8" stroke="#14163A" stroke-width="1.8"/></svg>` },
    pistol: { hx: 2, hy: 10, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M2 9H31V17H24L28 36H20L17 19H12L10 17H2Z" fill="#2b2f3a" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><rect x="6" y="11" width="19" height="2" fill="#FFD84D"/><rect x="3" y="6" width="3" height="3" fill="#2b2f3a" stroke="#fff" stroke-width="1"/><path d="M12 17Q13 23 19 23" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>` }
  };
  const K = BENTUK[KURSOR];
  if (K && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const st = document.createElement("style");
    st.textContent = "html.kursor-js.kursor-js.kursor-js,html.kursor-js.kursor-js.kursor-js *{cursor:none!important}" +
      ".kursor-el{position:fixed;left:0;top:0;z-index:300;pointer-events:none;will-change:transform;display:none}.kursor-el svg{display:block}";
    document.head.appendChild(st);
    const el = document.createElement("div");
    el.className = "kursor-el"; el.setAttribute("aria-hidden", "true"); el.innerHTML = K.svg;
    document.body.appendChild(el);
    const svg = el.firstElementChild;
    svg.style.transformOrigin = K.hx + "px " + K.hy + "px";
    const root = document.documentElement;
    let px = 0, py = 0, raf = 0, aktif = false;
    const pindah = () => { raf = 0; el.style.transform = "translate(" + (px - K.hx) + "px," + (py - K.hy) + "px)"; };
    window.addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX; py = e.clientY;
      if (!aktif) { aktif = true; el.style.display = "block"; root.classList.add("kursor-js"); }
      if (!raf) raf = requestAnimationFrame(pindah);
    }, { passive: true });
    root.addEventListener("mouseleave", () => { aktif = false; el.style.display = "none"; root.classList.remove("kursor-js"); });
    document.addEventListener("click", e => {
      if (e.detail === 0 || kurangiGerak || !svg.animate) return;
      svg.animate([{ transform: "scale(1) rotate(0deg)" }, { transform: "scale(.72) rotate(-14deg)" }, { transform: "scale(1) rotate(0deg)" }], { duration: 200, easing: "ease-out" });
    });
  }

  if (!EFEK_TEMBAKAN) return;
  const fx = document.createElement("div");
  fx.className = "fx"; fx.setAttribute("aria-hidden", "true");
  document.body.appendChild(fx);

  function buat(kelas, x, y, umur, gaya, isi){
    const e = document.createElement("div");
    e.className = kelas; e.style.left = x + "px"; e.style.top = y + "px";
    if (gaya) Object.keys(gaya).forEach(k => e.style.setProperty(k, gaya[k]));
    if (isi) e.innerHTML = isi;
    fx.appendChild(e);
    setTimeout(() => e.remove(), umur);
    return e;
  }

  let audio, master, gema;
  function bunyi(){
    if (SUARA_FILE) {
      try { const a = new Audio(SUARA_FILE); a.volume = Math.min(1, SUARA_VOLUME); a.play().catch(() => {}); } catch (e) {}
      return;
    }
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === "suspended") audio.resume();
      const t = audio.currentTime;
      if (!master) {
        master = audio.createGain(); master.gain.value = SUARA_VOLUME;
        const komp = audio.createDynamicsCompressor();
        komp.threshold.value = -14; komp.ratio.value = 8;
        master.connect(komp); komp.connect(audio.destination);
        const len = Math.floor(audio.sampleRate * 1.4), ir = audio.createBuffer(2, len, audio.sampleRate);
        for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5); }
        gema = audio.createConvolver(); gema.buffer = ir;
        const basah = audio.createGain(); basah.gain.value = 0.35;
        gema.connect(basah); basah.connect(komp);
      }
      const derau = (dur, pangkat) => {
        const n = Math.floor(audio.sampleRate * dur), b = audio.createBuffer(1, n, audio.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, pangkat);
        const s = audio.createBufferSource(); s.buffer = b; return s;
      };
      const keluar = (node, gain) => { const g = audio.createGain(); g.gain.value = gain; node.connect(g); g.connect(master); g.connect(gema); };

      const retak = derau(0.06, 2), hp = audio.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 1800; retak.connect(hp); keluar(hp, 1.0); retak.start(t);

      const badan = derau(0.4, 2.2), lp = audio.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.setValueAtTime(3000, t); lp.frequency.exponentialRampToValueAtTime(300, t + 0.35);
      badan.connect(lp); keluar(lp, 0.9); badan.start(t);

      const o = audio.createOscillator(), og = audio.createGain(), sh = audio.createWaveShaper();
      o.type = "sine"; o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.4);
      og.gain.setValueAtTime(1.1, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
      const kurva = new Float32Array(256); for (let i = 0; i < 256; i++) kurva[i] = Math.tanh((i / 128 - 1) * 3);
      sh.curve = kurva;
      o.connect(og); og.connect(sh); sh.connect(master); o.start(t); o.stop(t + 0.6);
    } catch (e) {}
  }

  /* bekas tembakan: bintang kuning + cincin pink + lubang gelap + retakan */
  function lubang(s){
    const R = (a, b) => a + Math.random() * (b - a);
    const n = 14, pts = [];
    for (let k = 0; k < n * 2; k++) {
      const a = k * Math.PI / n + R(-0.05, 0.05), r = k % 2 ? R(13, 17) : R(22, 29);
      pts.push((Math.cos(a) * r).toFixed(1) + "," + (Math.sin(a) * r).toFixed(1));
    }
    let retak = "";
    for (let k = 0; k < 6; k++) {
      const a = R(0, Math.PI * 2), r1 = R(20, 26), r2 = r1 + R(6, 12);
      retak += `M${(Math.cos(a) * r1).toFixed(1)} ${(Math.sin(a) * r1).toFixed(1)}L${(Math.cos(a) * r2).toFixed(1)} ${(Math.sin(a) * r2).toFixed(1)}`;
    }
    return `<svg viewBox="-40 -40 80 80" width="${s}" height="${s}">
      <path d="${retak}" stroke="#14163A" stroke-width="2" stroke-linecap="round" fill="none"/>
      <polygon points="${pts.join(" ")}" fill="#FFD84D" stroke="#14163A" stroke-width="2.4" stroke-linejoin="round"/>
      <circle r="11" fill="#FF8FB8" stroke="#14163A" stroke-width="2.2"/>
      <circle r="6.5" fill="#14163A"/>
      <circle cx="-2.2" cy="-2.2" r="1.7" fill="#fff"/>
    </svg>`;
  }

  const warna = ["#FFD84D", "#FF8FB8", "#FFFFFF"], daftarLubang = [];
  document.addEventListener("click", e => {
    if (e.detail === 0) return;
    if (SUARA_TEMBAKAN) bunyi();
    if (kurangiGerak) return;
    const x = e.pageX, y = e.pageY;
    buat("fx-flash", x, y, 240);
    buat("fx-ring", x, y, 400);
    for (let i = 0; i < 10; i++) {
      const a = Math.random() * Math.PI * 2, r = 35 + Math.random() * 45;
      buat("fx-spark", x, y, 600, { "--dx": Math.cos(a) * r + "px", "--dy": Math.sin(a) * r + "px", "--c": warna[i % 3] });
    }
    const s = 84 + Math.random() * 24;
    const h = buat("fx-hole", x, y, 6400, { "--rot": Math.floor(Math.random() * 360) + "deg" }, lubang(s));
    daftarLubang.push(h);
    if (daftarLubang.length > 25) daftarLubang.shift().remove();
  });
})();
