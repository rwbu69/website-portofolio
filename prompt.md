# PROMPT REVISI: Rombak Ulang Portofolio — Arah Desain Retro Jepang, Fokus Konversi & Performa

> Catatan: Ini adalah revisi dari brief sebelumnya. Perubahan utama ada di **arah estetika** (dari "modern terminal minimal" menjadi "retro web Jepang era 90–2000an, padat informasi, low-frills") dan **penekanan tujuan** (setiap halaman harus punya jalur jelas menuju "hire me", serta performa & retensi jadi metrik keberhasilan, bukan sekadar estetika).

Rombak ulang website portofolio saya secara menyeluruh dengan tech stack: **Astro + React (islands) + TailwindCSS**.

---

## 1. ARAH DESAIN (NON-NEGOTIABLE)

Referensi mood: web Jepang lama (era GeoCities JP, personal homepage developer/doujin circle, official site band indie 2000-an, portal seperti 2ch/Yahoo! JAPAN generasi awal). Ciri yang diambil, bukan ditiru mentah-mentah:

- **Padat tapi rapi**: informasi disusun dalam grid/list yang rapat, bukan whitespace besar ala landing page SaaS modern. Density tinggi = terkesan "isinya banyak, orang ini beneran kerja", bukan portofolio kosong dengan 1 kalimat besar di tengah layar.
- **Hairline border**, bukan shadow atau glow. Border tipis 1px sebagai pemisah section, mengingatkan pada layout tabel lama.
- **Tidak ada gradient, tidak ada blur/glow, tidak ada glassmorphism, tidak ada rounded-full di semua elemen.** Sudut boleh sedikit membulat (2–4px) di tempat terbatas (badge/tag), sisanya tegas/kotak.
- **Teks kecil-menengah sebagai default**, bukan heading raksasa. Hierarchy dibangun lewat border, spacing mikro, dan weight—bukan ukuran font ekstrem.
- **Sentuhan nostalgia yang disengaja, bukan gimmick murahan**: elemen seperti visitor counter kecil di footer (asli, pakai kv-store/API sendiri, bukan gambar animasi jadul), "last updated" timestamp, struktur navigasi ala direktori/sitemap eksplisit — dipakai secukupnya agar terasa personal & genuine, bukan pastiche.
- **Hindari ciri khas "AI-generated look"**: tidak ada gradient mesh ungu-pink generik, tidak ada ilustrasi 3D floating shapes, tidak ada font generic (Inter/Poppins tanpa karakter) sebagai body text, tidak ada copywriting generik ala "Turning Ideas Into Reality ✨".

### Palet warna (tetap dipakai persis, tidak ditambah/gradient):

```css
@theme {
  --color-term-bg: rgba(15, 23, 42, 0.65);
  --color-pink: #E39494;
  --color-tosca: #82C8C5;
}

:root {
  --bg-color: #050505;
  --text-main: #e2e8f0;
  --text-muted: #64748b;
  --pink: #E39494;
  --tosca: #82C8C5;
  --green: #4ade80;
  --yellow: #facc15;
}
```

- `pink` & `tosca`: aksen saja (hover, link, border highlight, tag) — bukan warna dominan.
- `green` & `yellow`: khusus status/feedback (success/warning), terutama di Code Playground.
- Background tetap `#050505` (bukan pure black), supaya nuansa retro terasa "layar CRT lama" bukan flat design modern.

### Tipografi

- Kombinasi **monospace** (elemen teknikal/terminal/label) + **serif/mincho-leaning sans** untuk body text yang punya karakter kuat — hindari default system font atau Inter polos. Pertimbangkan font dengan sedikit sentuhan "dot-matrix" atau serif tegas untuk judul, agar terasa seperti media cetak/dokumen teknis lama, bukan UI kit modern.
- Ukuran teks body sedikit lebih kecil dari standar modern (14–15px base), line-height ketat tapi tetap nyaman baca — konsisten dengan kesan "dense information page".

### Checklist anti-"terlihat AI" (wajib dicek di setiap halaman)

- [ ] Tidak ada gradient mesh atau glow di background
- [ ] Tidak ada copy generik ("passionate developer", "turning ideas into reality")
- [ ] Tidak ada icon set 3D/gradient colorful
- [ ] Tidak ada spacing simetris berlebihan yang terasa "template landing page"
- [ ] Semua angka/klaim (jumlah project, tahun pengalaman) adalah data asli, bukan placeholder yang dibiarkan

---

## 2. NAVBAR

Struktur tetap: Home, Projects, Blog, Code Playground, Contact Me.

- Sticky, tapi tipis (bukan bar besar dengan padding lebar) — lebih mirip menu bar aplikasi/direktori lama.
- Active-state pakai underline tipis atau dot kecil dengan warna aksen (pink/tosca).
- Mobile: drawer/hamburger sederhana, tanpa animasi slide mewah — transisi cepat & instan lebih penting daripada animasi halus (selaras dengan tujuan load time).

---

## 3. HALAMAN: HOME — Fokus Konversi

Tujuan utama halaman ini: **pengunjung dalam 5–10 detik pertama tahu (1) siapa saya, (2) bisa apa, (3) bagaimana cara menghubungi saya untuk kerja sama.**

- **Tidak ada hero besar konvensional.** Tetap pendekatan "log entry / status line" seperti brief awal: nama, role, lokasi, status ketersediaan kerja (available for freelance / open to work).
- Tambahkan **satu baris value proposition yang konkret dan spesifik** tepat di bawah status line, contoh arah: "Frontend developer — 1+ tahun pengalaman, spesialisasi React/Astro, sudah menyelesaikan N+ project untuk klien/organisasi." Ini yang membedakan dari sekadar bio kosong.
- **Bukti kerja instan** (bukan testimoni palsu): ringkasan 2–3 project terbaru lengkap dengan tech stack singkat & link demo/repo langsung dari halaman Home, bukan cuma judul.
- **Tech stack/skill** ditampilkan sebagai list/tag padat (bukan icon grid generik) — kelompokkan per kategori (Frontend, Tooling, Bahasa) agar terasa terstruktur seperti dokumentasi teknis.
- **CTA kontak eksplisit** diletakkan tidak jauh dari atas halaman — bisa berupa baris kecil bergaya command line, misalnya format `> hubungi saya via email / whatsapp`, tetap dalam nuansa terminal tapi fungsinya jelas sebagai ajakan bertindak.
- Preview blog (2–3 post terbaru) ditaruh di bagian bawah, sebagai sinyal bahwa saya aktif menulis/berbagi ilmu (menambah kredibilitas untuk yang mempertimbangkan menyewa).
- Sentuhan playful ala terminal tetap boleh ada di footer/status bar kecil (bukan elemen dominan).

---

## 4. HALAMAN: PROJECTS

- Data disimpan sebagai static data file TypeScript (`data/projects.ts`) dengan tipe eksplisit:
  ```ts
  interface Project {
    title: string;
    description: string;
    techStack: string[];
    demoUrl?: string;
    repoUrl?: string;
    thumbnail: string;
    status: "ongoing" | "completed";
    featured: boolean;
    role?: string; // peran saya di project (relevan untuk hiring)
    year: number;
  }
  ```
- Render sebagai **list/grid padat** dengan card minimalis: border tipis, hover pakai shift warna aksen (border/text), bukan shadow.
- Filter sederhana berdasarkan tech stack/tag.
- Project dengan `featured: true` mendapat penanda kecil (bukan badge besar mencolok) — tetap kontras minimal.
- Setiap card menonjolkan **peran & dampak**, bukan cuma deskripsi teknis, agar recruiter/klien langsung paham value yang saya berikan.

---

## 5. HALAMAN: BLOG

- Abstraction layer untuk fetching CMS (`lib/cms/`) dengan interface generik supaya provider bisa diganti tanpa rombak komponen.
- Mock data dulu (3–5 artikel dummy) untuk uji struktur list + detail.
- List: card per artikel (title, excerpt, tanggal, reading time, tag).
- Detail: max-width konten 65–75ch, line-height nyaman, syntax highlighting untuk code block, table of contents opsional untuk artikel panjang.
- Layout list boleh lebih padat (mendekati arsip/direktori artikel lama) dibanding kartu besar bergambar dominan — foto/gambar thumbnail kecil saja, teks yang jadi fokus utama (selaras retro & load time).

---

## 6. HALAMAN: CODE PLAYGROUND

Tetap dua mode: **Fake Terminal** (command CLI portfolio) dan **Mini JS Playground**.

### Fake Terminal
- Command: `help`, `whoami`, `about`, `skills`, `projects`, `contact`, `clear`, `sudo hire-me` (easter egg), `cat resume.txt`, `ls`, `social`.
- Styling pakai `--color-term-bg`, `--green` untuk prompt/success, `--yellow` untuk warning/info.
- Command history dengan navigasi arrow up/down.
- Tab autocomplete (nice to have).

### Mini JS Playground
- Editor ringan (textarea atau library kecil seperti CodeMirror), eksekusi lewat scope terbatas (Function constructor terbatas atau web worker) — **bukan eval() polos**, tanpa akses browser API sensitif.
- Output/console log tampil di panel sebelah/bawah, styling konsisten dengan fake terminal (`--color-term-bg`, border tipis).

- Kedua mode dimuat sebagai React island dengan `client:visible` agar tidak membebani initial load — halaman ini yang paling berat, jadi harus paling ketat soal lazy-loading.

---

## 7. HALAMAN: CONTACT ME

- Form sederhana (nama, email, message) via Formspree/Web3Forms (static-friendly) atau API route bila SSR diaktifkan.
- Label form pakai prefix `>` ala command line, tetap accessible (label asosiatif, bukan cuma placeholder).
- Alternative contact: email langsung, social links (GitHub, LinkedIn, dll) dengan icon monoline.
- **Letakkan juga kalimat ajakan eksplisit untuk kerja sama** di atas form (bukan cuma "Contact Me" generik), misalnya framing seputar ketersediaan untuk project freelance/kontrak.

---

## 8. PERFORMA & RETENSI (metrik keberhasilan, bukan sekadar checklist)

- Target **LCP < 2.5s** dan **CLS mendekati 0** di koneksi 4G rata-rata.
- Komponen interaktif (terminal, JS playground, filter project) sebagai React island dengan `client:idle`/`client:visible` — tidak ada full client-side hydration.
- Font di-subset dan di-preload hanya untuk weight yang benar-benar dipakai; hindari memuat seluruh family font jika hanya butuh 2 style.
- Gambar project/thumbnail dikompresi & lazy-load, gunakan format modern (WebP/AVIF) dengan fallback.
- **Retensi**: dorong pengunjung menjelajah lebih dari 1 halaman lewat internal link yang natural (mis. dari Home ke Projects/Blog, dari detail artikel ke artikel terkait), bukan pop-up atau modal yang mengganggu.
- Elemen nostalgia seperti visitor counter/"last updated" bisa jadi micro-hook agar pengunjung penasaran kembali, tapi tidak boleh menghambat performa (fetch async, non-blocking).

---

## 9. TECHNICAL & UX REQUIREMENTS LAINNYA

- SEO: meta title, description, Open Graph tiap halaman (krusial untuk Blog & Projects).
- Accessibility: kontras teks vs `#050505` memenuhi WCAG AA, semua elemen interaktif (terminal, form, navbar) bisa diakses keyboard-only.
- Responsive mobile-first, khususnya Code Playground — pastikan output tidak tertutup keyboard virtual.
- Dark mode satu-satunya mode; audit agar tidak ada warna hardcode di luar token yang didefinisikan.
- 404 custom bergaya "command not found", konsisten tema.
- Favicon & metadata dasar situs.
- Struktur folder jelas: `components/` (React islands vs Astro components), `data/` untuk `projects.ts` & mock blog data, `lib/` untuk abstraction layer CMS.

---

## 10. URUTAN PENGERJAAN

Mulai dari setup struktur project & design token (termasuk checklist anti-AI-look di atas), lalu implementasi per halaman secara bertahap agar bisa direview satu per satu, dimulai dari **Home** (karena ini yang paling menentukan konversi awal pengunjung).