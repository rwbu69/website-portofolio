Implementasikan data diri berikut ke dalam struktur website portofolio yang sudah dibuat sebelumnya (Home, Projects, Code Playground, Contact Me). Gunakan data ini secara konsisten di semua tempat yang relevan — jangan duplikasi penulisan manual, ambil dari satu source data yang sama.

## 1. PROFILE / IDENTITY
- Full name: Sebastian Vay Yosafat Pardamean Hutagalung
- Alias/handle: RWBU
- Role: Front End Developer
- Bio (gunakan sebagai basis, boleh dipersingkat untuk Home tapi jangan ubah makna):
  "A front end developer currently pursuing a Computer Science degree at Universitas Kristen Immanuel. Interested in web animations, prompt engineering, and new static frameworks. Mostly works alongside AI to streamline development workflow and deliver quickly."

Gunakan data ini di:
- Home: sebagai intro singkat ala "log entry/status line" (sesuai konsep sebelumnya — bukan hero section)
- Code Playground terminal: command `whoami` dan `about` menampilkan versi singkat & panjang dari bio ini

## 2. WORK EXPERIENCE
- Web Developer @ PT MultiIntegra Digital — Rawamangun, East Jakarta — durasi: 1 tahun
- Status saat ini: Freelance Web Developer (currently active/open for freelance work)

Tampilkan di:
- Home: sebagai bagian kecil dari status line (misal indikator "currently freelancing" / available for work)
- Terminal command `whoami` atau command baru `experience`: tampilkan riwayat kerja di atas dalam format list

## 3. SOCIALS (gunakan PERSIS URL ini, jangan tambahkan platform lain)
- LinkedIn: https://www.linkedin.com/in/sebastianvyhutagalung/
- Instagram: https://www.instagram.com/shunshunrwbu
- GitHub: https://github.com/rwbu69

Gunakan di:
- Footer (semua halaman)
- Contact Me page
- Terminal command `social`

## 4. PROJECTS DATA
Isi file static data projects (projects.ts) dengan struktur berikut. Field `tech` yang aku tandai sudah pasti, field yang tidak disebutkan biarkan sebagai array kosong/placeholder komentar `// TODO: isi tech stack` — JANGAN ditebak/diisi otomatis oleh agent.

```typescript
export type ProjectType = "website" | "tool";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  demoLink?: string;
  repoLink?: string;
  status: "live" | "deploying-soon" | "completed" | "in-progress";
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Comipara 6 Interactive Map",
    description: "A passionate collaborative project built with 2 other people. Responsible for building the path navigation system using native JavaScript to calculate shortest distances between nodes.",
    type: "website",
    tech: ["JavaScript (Vanilla)", "Pathfinding Algorithm"],
    demoLink: "https://comipara6-map.vercel.app/",
    status: "live",
    featured: true,
  },
  {
    title: "Yokai Website",
    description: "Team profile website for Yokai, a Yogyakarta-based wotagei team. Responsible for development and deployment.",
    type: "website",
    tech: [], // TODO: isi tech stack — deployment terindikasi via Cloudflare Workers dari URL
    demoLink: "https://yokai-website.lovelyrwbu69.workers.dev/",
    status: "deploying-soon",
    featured: false,
  },
  {
    title: "Retroda Website",
    description: "Company profile website for Retroda, a vintage car rental business operating in the Jabodetabek area. Responsible for development and deployment.",
    type: "website",
    tech: [], // TODO: isi tech stack sebenarnya
    demoLink: "https://retroda.id",
    status: "live",
    featured: true,
  },
  {
    title: "RentCos Project",
    description: "A self-made project to streamline the cosplay rental process. Built on Laravel, uses QR codes for each costume part to provide a foolproof borrowing/return system.",
    type: "website",
    tech: ["Laravel", "PHP", "QR Code Integration"],
    repoLink: "https://github.com/rwbu69/cosu-rent",
    status: "completed",
    featured: false,
  },
];

export const tools: Project[] = [
  {
    title: "El Toolkit de RWBU",
    description: "A terminal-based toolkit for converting YouTube videos to various media formats. Built using ffmpeg, yt-dlp, and other CLI utilities.",
    type: "tool",
    tech: ["FFmpeg", "yt-dlp", "CLI/Terminal"],
    repoLink: "https://github.com/rwbu69/eltoolkitde_rwbu",
    status: "completed",
    featured: false,
  },
];
```

Catatan implementasi:
- `featured: true` dipakai untuk preview project di Home (pilih 2-3 yang paling representatif — sudah aku tandai default di atas, boleh diubah).
- Pisahkan rendering antara `projects` (website) dan `tools` (CLI/utility) di halaman Projects — bisa berupa tab/filter, karena keduanya punya konteks beda (live demo vs repo only).
- Field `tech` yang masih kosong/TODO: jangan diisi otomatis dengan tebakan framework, biarkan saya isi manual nanti.

## 5. SKILLS / TAGS (untuk ditampilkan di Home & terminal command `skills`)
Berdasarkan deskripsi profile & project di atas, susun tag skill berikut (boleh disesuaikan grouping-nya):
- Frontend: JavaScript (Vanilla), Web Animations
- Backend/Framework: Laravel, PHP
- Workflow: Prompt Engineering, AI-assisted Development
- Interests: Static Site Frameworks
- Misc: QR Code Systems, Pathfinding/Graph Algorithms, CLI Tooling (FFmpeg, yt-dlp)

## 6. TERMINAL COMMANDS YANG PERLU DIPERBARUI (Code Playground)
Pastikan command-command berikut memakai data di atas:
- `whoami` → nama, alias, role
- `about` → bio lengkap
- `experience` → riwayat kerja (poin 2)
- `skills` → daftar skill (poin 5)
- `projects` → list ringkas project dari projects.ts (judul + status, arahkan ke halaman Projects untuk detail)
- `social` → daftar 3 social link (poin 3)
- `contact` → arahkan ke halaman Contact Me

## CONSTRAINT PENTING
- JANGAN menambahkan link/URL eksternal apa pun di luar yang sudah disebutkan di atas (3 social link + 5 project/tool link).
- JANGAN menebak tech stack untuk Yokai dan Retroda — biarkan placeholder kosong/TODO seperti yang sudah ditandai.
- Field tambahan seperti `type`, `status`, `featured`, dan grouping skill di atas adalah hasil inferensi untuk melengkapi struktur data — boleh disesuaikan, tapi jangan menambah entitas baru (social media baru, project baru, dll) yang tidak ada di data asli.