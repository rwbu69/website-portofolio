Rombak ulang website portofolio saya secara menyeluruh dengan tech stack: Astro + React (islands) + TailwindCSS.

## DESIGN SYSTEM (NON-NEGOTIABLE)
Gunakan persis token warna ini, jangan diubah/ditambah gradient atau efek glassmorphism baru:

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

Aesthetic direction:
- Dark mode only, base background #050505, bukan pure black (#000) supaya tidak terlalu keras.
- Hindari arah desain yang terlalu "AI-generated look": jangan pakai gradient mesh, jangan pakai blur glow berlebihan, jangan pakai rounded-full di semua elemen, jangan pakai font generic seperti Inter tanpa personality.
- Pakai pink (#E39494) dan tosca (#82C8C5) sebagai accent saja (hover state, link, tag, border highlight) — bukan warna dominan.
- green (#4ade80) dan yellow (#facc15) dipakai khusus untuk status/feedback (success, warning) terutama di Code Playground.
- Typography harus punya karakter: pertimbangkan kombinasi monospace font (untuk elemen teknikal/terminal) dengan sans-serif yang distinctive untuk body text — bukan default system font.
- Spacing harus generous, grid-based, dengan hierarchy yang jelas lewat ukuran & weight, bukan lewat warna mencolok.

## STRUKTUR NAVBAR
Navbar berisi: Home, Projects, Blog, Code Playground, Contact Me
- Sticky navbar, minimal, dengan active-state indicator yang subtle (underline atau dot, pakai accent color)
- Responsive: hamburger/drawer menu di mobile

## HALAMAN: HOME
- TIDAK pakai hero section konvensional (tidak ada headline besar + CTA button + ilustrasi).
- Pendekatan yang lebih personal & simplistik: bisa berupa intro singkat ala "log entry" atau "status line" (contoh: nama, role, lokasi, status ketersediaan kerja) yang terasa seperti developer profile, bukan landing page marketing.
- Tampilkan ringkasan/preview: 2-3 project terbaru, 2-3 blog post terbaru, dan tech stack/skill yang dikuasai (bisa dalam bentuk list atau tag, jangan icon grid generic).
- Boleh ada sedikit sentuhan playful yang konsisten dengan tema "code/terminal" (misal: status bar kecil, bukan elemen besar yang mendominasi).

## HALAMAN: PROJECTS
- Data project disimpan sebagai static data file (JSON atau TypeScript object) yang saya edit manual — buatkan struktur tipe data yang jelas (title, description, tech stack, link demo, link repo, image/thumbnail, status: ongoing/completed, featured: boolean).
- Render sebagai grid/list dengan card minimalis, hover state pakai accent color border atau text color shift (jangan shadow heavy).
- Bisa ada filter sederhana berdasarkan tech stack/tag.

## HALAMAN: BLOG
- Konten artikel akan diintegrasikan dengan Headless CMS (saya belum final pilih provider — siapkan arsitektur fetching/data layer yang fleksibel, idealnya lewat satu abstraction layer/service function supaya nanti gampang ganti provider CMS-nya tanpa rombak banyak komponen).
- Untuk sekarang, buatkan dengan dummy/mock data dulu (3-5 artikel palsu) supaya struktur halaman list + halaman detail artikel bisa langsung terlihat dan ditest.
- Halaman list: card per artikel (title, excerpt, tanggal publish, reading time estimate, tag/category).
- Halaman detail: typography yang nyaman dibaca (line-height, max-width content sekitar 65-75ch), syntax highlighting untuk code block (karena kemungkinan banyak artikel teknikal), table of contents opsional untuk artikel panjang.

## HALAMAN: CODE PLAYGROUND
Konsep: terminal interaktif sebagai "fun zone" portofolio, kombinasi dua hal:

1. **Fake terminal dengan custom commands** (seperti CLI portfolio):
   - Command dasar: `help`, `whoami`, `about`, `skills`, `projects`, `contact`, `clear`, `sudo hire-me` (easter egg lucu), `cat resume.txt` (link ke CV), `ls`, `social` (link socmed)
   - Setiap command return output dengan styling yang sesuai theme (pakai --color-term-bg sebagai background terminal window, dengan warna text dari --green untuk prompt/success, --yellow untuk warning/info)
   - Command history (bisa navigasi pakai arrow up/down)
   - Tab autocomplete untuk command (nice to have)

2. **Mini JS Playground**:
   - Editor sederhana (textarea atau lightweight code editor — pertimbangkan library ringan seperti CodeMirror) di mana user bisa tulis & run JavaScript snippet sandbox, lalu lihat output/console.log result-nya di panel sebelah/bawah
   - Harus aman (jangan ada akses ke browser API yang sensitive, jalankan di scope terbatas, bukan eval() polos — gunakan pendekatan yang lebih aman seperti Function constructor dengan scope terbatas atau web worker)
   - Tampilan terminal window-style konsisten dengan fake terminal di atas (pakai --color-term-bg, border subtle)

Kedua mode ini bisa berupa tab switcher di dalam satu halaman Code Playground, atau side-by-side layout — desain sesuai yang paling clean.

## HALAMAN: CONTACT ME
- Form contact sederhana (nama, email, message) — gunakan pendekatan static-friendly (misal: integrasi dengan service form-handling seperti Formspree/Web3Forms, karena project ini Astro static-first) atau API route jika SSR diaktifkan.
- Tampilkan juga alternative contact: email langsung, social media links (GitHub, LinkedIn, dll), dengan icon minimal monoline (bukan colorful icon set).
- Styling tetap konsisten: terminal-ish feel boleh dipertahankan dikit (misal label form pakai `>` prefix ala command line) tapi tetap usable dan accessible.

## TECHNICAL & UX REQUIREMENTS TAMBAHAN
- SEO: setiap halaman punya meta title, description, dan Open Graph tags yang proper (penting untuk blog & projects khususnya).
- Performance: pertahankan keunggulan Astro — komponen interaktif (terminal, JS playground, filter project) di-load sebagai React island dengan `client:idle` atau `client:visible`, jangan hydrate semua jadi client-side app.
- Accessibility: pastikan kontras warna teks terhadap background #050505 memenuhi WCAG AA minimal, semua interactive element (terminal, form, navbar) bisa diakses keyboard-only.
- Responsive: mobile-first, terutama untuk Code Playground (terminal experience di mobile harus tetap usable, bisa pertimbangkan keyboard yang muncul tidak menutupi output).
- Dark mode adalah satu-satunya mode (tidak perlu light mode toggle), tapi pastikan tidak ada elemen yang ketinggalan/hardcode warna luar token yang sudah didefinisikan.
- 404 page custom yang konsisten dengan tema (misal: "command not found" style).
- Favicon & metadata dasar (title, description) untuk keseluruhan site.
- Struktur folder project Astro yang jelas: pisahkan `components/` (React islands vs Astro components), `content/` atau `data/` untuk projects.ts dan mock blog data, `lib/` untuk abstraction layer CMS fetching.

Tolong mulai dengan setup struktur project & design token dulu, baru implementasi per halaman, supaya saya bisa review tahap demi tahap.