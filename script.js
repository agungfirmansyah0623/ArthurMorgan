
/* ============ ISI HALAMAN: ubah bagian ini saja ============ */
const BUKA_PADA  = "2026-09-19T08:00:00+07:00"; /* web baru bisa dibuka mulai waktu ini. Kosongkan ("") jika tidak dipakai */
const TUTUP_PADA = "";                            /* opsional: web tertutup lagi setelah waktu ini. Contoh: "2026-09-27T17:00:00+07:00" */
const INTRO_DETIK = 10; /* lama hitung mundur (detik). Isi 0 untuk mematikan */
document.documentElement.classList.add("js");
const GROUP = {
  name: "Kelompok 7",
  marquee: ["Kelompok 7", "LKMM Unand",  "Hidup FTI", "Informatika", "Sistem Informasi", "Teknologi Komputer" ],
  tagline: "GA SOMBONG GA AROGAN, ARTHUR MORGAN",
  about: [
    "Kami kelompok yang dibentuk untuk mengerjakan proyek bersama, dari ide awal sampai hasil akhir. Di halaman ini kamu bisa mengenal ANGGOTA, melihat dokumentasi kegiatan, dan mengikuti akun kami.",
    "Tulis di sini cerita singkat tentang bagaimana kelompok ini terbentuk, apa yang sedang dikerjakan, dan apa yang ingin dicapai."
  ],
  facts: [
    ["Mentor", "UDA & UNI"]
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
    { cap: "Rapat pertama", w: 800, h: 600, photo: "foto/foto1.jpeg" },
    { cap: "Kerja bareng", w: 800, h: 600, photo: "foto/foto2.jpeg" },
    { cap: "Makan-makan", w: 800, h: 600, photo: "foto/foto3.jpeg" },
    { cap: "Foto tim", w: 800, h: 600, photo: "foto/foto4.jpeg" },
    { cap: "Presentasi", w: 800, h: 600, photo: "foto/foto_profil.png" },
    { cap: "Survei lokasi", w: 800, h: 600, photo: "foto/foto5.jpeg" },
    { cap: "Latihan", w: 800, h: 600, photo: "foto/foto6.jpeg" },
    { cap: "Hari terakhir", w: 800, h: 600, photo: "foto/foto7.jpeg" }
  ],
  social: [
    { platform: "Instagram", handle: "@7.arthurmorgan", url: "https://www.instagram.com/7.arthurmorgan/?utm_source=ig_web_button_share_sheet" },
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

/* NAMA & tagline */
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

/* ANGGOTA */
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
const track = document.getElementById("track");
track.innerHTML = shots.map((g, i) =>
  `<figure class="slide" data-i="${i}" aria-roledescription="slide" aria-label="${i+1} dari ${shots.length}"><img src="${g.src}" alt="${esc(g.cap)}" draggable="false" width="${g.w}" height="${g.h}"><figcaption>${esc(g.cap)}</figcaption></figure>`).join("");
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
