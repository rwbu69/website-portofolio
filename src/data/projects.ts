export type ProjectType = "website" | "tool" | "ai" | "desktop";

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  demoLink?: string;
  repoLink?: string;
  image?: string;
  status: "live" | "deploying-soon" | "completed" | "in-progress";
  featured: boolean;
  role: string;
  year: number;
  colorClass: "c1" | "c2" | "c3" | "c4" | "c5";
}

export const projects: Project[] = [
  {
    title: "ProposalArena",
    description: "Local-first thesis proposal defense simulator. Upload academic proposals, face an adaptive AI examiner via text or voice, and receive granular evaluation rubrics and simulated defense scoring powered by client-side RAG.",
    type: "ai",
    tech: ["Astro", "Svelte 5", "TailwindCSS", "IndexedDB", "minisearch", "Web Speech API"],
    repoLink: "https://github.com/rwbu69/ProposalArena",
    image: "/projects/proposalarena.png",
    status: "live",
    featured: true,
    role: "Fullstack & AI Engineer",
    year: 2024,
    colorClass: "c1",
  },
  {
    title: "noachanassist",
    description: "Native desktop AI companion built with Tauri v2, Bun, and Svelte 5. Features compiled sidecar backend, persistent vector memory search over past conversations, and system tooling.",
    type: "desktop",
    tech: ["Tauri v2", "Bun", "Svelte 5", "SQLite", "Orama Vector", "Elysia"],
    repoLink: "https://github.com/rwbu69/noachanassist",
    image: "/projects/noachan.png",
    status: "completed",
    featured: true,
    role: "Desktop & Agentic Systems Developer",
    year: 2024,
    colorClass: "c2",
  },
  {
    title: "Yokai Web Studio",
    description: "Web application and headless content management system for Yokai, an independent wotagei performance team based in Yogyakarta. Built with Astro, Sanity CMS, Tailwind CSS, and anime.js.",
    type: "website",
    tech: ["Astro", "Tailwind CSS", "Sanity CMS", "anime.js", "Bun", "Cloudflare"],
    demoLink: "https://yokai-website.lovelyrwbu69.workers.dev/",
    repoLink: "https://github.com/rwbu69/yokai-web",
    image: "/projects/yokaiweb.png",
    status: "live",
    featured: true,
    role: "Frontend Developer & Designer",
    year: 2024,
    colorClass: "c3",
  },
  {
    title: "ElToolkitDeRWBU",
    description: "Cross-platform desktop media utility putting FFmpeg and yt-dlp behind a clean GUI: media downloading, audio extraction, ID3 metadata editing, batch regex renaming, and Python BPM detection.",
    type: "tool",
    tech: ["Tauri v2", "React", "TypeScript", "Rust", "FFmpeg", "yt-dlp", "Python"],
    repoLink: "https://github.com/rwbu69/eltoolkitde_rwbu",
    demoLink: "https://github.com/rwbu69/eltoolkitde_rwbu/releases",
    image: "/projects/eltoolkit.png",
    status: "completed",
    featured: true,
    role: "Creator & Desktop Developer",
    year: 2024,
    colorClass: "c4",
  },
  {
    title: "Retroda Website",
    description: "Commercial company profile website for Retroda, a vintage car rental business operating across the Jabodetabek area. Responsible for development and deployment.",
    type: "website",
    tech: ["Astro", "TailwindCSS", "TypeScript", "Keystatic CMS"],
    demoLink: "https://retroda.id",
    image: "",
    status: "live",
    featured: false,
    role: "Fullstack Developer",
    year: 2024,
    colorClass: "c5",
  },
  {
    title: "Comipara 6 Interactive Map",
    description: "Collaborative navigation project built with 2 other developers. Shortest-path navigation system calculating distances between convention booth nodes in native JavaScript.",
    type: "website",
    tech: ["JavaScript (Vanilla)", "Pathfinding Algorithm"],
    demoLink: "https://comipara6-map.vercel.app/",
    status: "live",
    featured: false,
    role: "Frontend & Pathfinding Developer",
    year: 2024,
    colorClass: "c3",
  },
  {
    title: "RentCos Project",
    description: "Cosplay costume rental management system built on Laravel, utilizing QR code tagging for each costume component to provide a reliable check-out and return tracking system.",
    type: "website",
    tech: ["Laravel", "PHP", "Blade Templates", "QR Code"],
    repoLink: "https://github.com/rwbu69/cosu-rent",
    status: "completed",
    featured: false,
    role: "Fullstack Developer",
    year: 2023,
    colorClass: "c2",
  },
];
export const getFeaturedProjects = () => projects.filter((p) => p.featured).slice(0, 4);
