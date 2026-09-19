/* ============ ISI HALAMAN: ubah bagian ini saja ============ */
const GROUP = {
  name: "Kelompok 7",
  tagline: "GA SOMBONG GA AROGAN, ARTHUR MORGAN!!!",
  about: [
    "Kelompok ini dibentuk karena kegiatan LKMM yang ada di Fakultas Teknologi Informasi. Di halaman ini kamu bisa mengenal anggota, melihat dokumentasi kegiatan, dan mengikuti akun kami.",
    "Dengan segala keterbatasan kami selalu kompak dan aktif dalam berbagai kegiatan yang di adakan oleh acara LKMM tersebut, kami berharap LKMM ini membuat kami sebagai mahasiswa lebih percaya diri berbicara dan mengambil keputusan, lebih terampil mengatur waktu, tim, dan program kerja, serta lebih peduli pada lingkungan kampus dan masyarakat. Kami juga ingin membawa ilmu dari LKMM ke organisasi masing-masing, sehingga manfaatnya terasa lebih luas dan bertahan lama.."
  ],
  facts: [
    ["MENTOR", "UDA & UNI"]
    ["Anggota", "16 ORANG"],
    ["Terbentuk", "2026"],
    ["Kegiatan", "KELOMPOK 7 LKMM"],
    ["Asal", "  UNIVERSITAS ANDALAS"]
  ],
  members: [
    { name: "Nama Mentor  ", role: "UDA", bio: "Tulis bio singkat di sini.", handle: "FADIL ABISALI" },
    { name: "Nama Mentor  ", role: "UNI", bio: "Tulis bio singkat di sini.", handle: "RAYYA" },
    { name: "Nama Anggota ", role: "KETUA", bio: "Tulis bio singkat di sini.", handle: "AGUNG FIRMANSYAH" },
    { name: "Nama Anggota ", role: "PDD", bio: "Tulis bio singkat di sini.", handle: "NAILAHUSNA" },
    { name: "Nama Anggota ", role: "PDD", bio: "Tulis bio singkat di sini.", handle: "SITI AZIZI RAHIMA" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "SABIRIL RAUF" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "AFIF QASIM AL GHIFARI" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "M. FADLAN MALIK" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "NUR HAFIJA PANJAITAN" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "ADRYAN AKBAR" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "FAJRIL ATTHAR RAHMAN" },
    { name: "Nama Anggota ", role: "ANGGOTA", bio: "Tulis bio singkat di sini.", handle: "AURA AULIA ZULFI" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "IBNU ZABDI AL FARUQI" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "ACHMAD LEDO KAUTSAR ERWINSYAH" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "ALEA DAGNA ANINDYA" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "ASIYAH SHAHIRA DELHAN" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "HAVIS LUTFI" },
    { name: "Nama Anggota ", role: "Anggota", bio: "Tulis bio singkat di sini.", handle: "CLAUDYA ANNISA" }
  
  ],
  gallery: [
     { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto_profil.png" },
    { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto1.jpeg" },
    { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto2.jpeg" },
    { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto3.jpeg" },
    { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto4.jpeg" },
    { cap: "KEGIATAN", w: 800, h: 600, photo: "foto/foto5.jpeg" },
    { cap: "KEGIATAN", w: 800, h: 600 },
    { cap: "KEGIATAN", w: 800, h: 600 }
  ],
  social: [
    { platform: "Instagram", handle: "7.arthurmorgan", url: "https://www.instagram.com/7.arthurmorgan/?utm_source=ig_web_button_share_sheet" }
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
