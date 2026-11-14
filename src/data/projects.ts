export interface Project {
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  impact?: string;
  tech: string[];
  role: string;
  year: number;
  featured: boolean;
  image?: string;
  demoLink?: string;
  repoLink?: string;
  actionLabel?: string;
}

export const projects: Project[] = [
  {
    title: "ProposalArena",
    category: "Local-First AI · Thesis Defense Simulator",
    description: "Thesis defense simulator that runs directly in the browser. Helps students practice proposal presentations with AI examiner questioning and rubric evaluation without sending data to paid third-party APIs.",
    highlights: [
      "Client-side RAG pipeline with IndexedDB and minisearch to parse proposal documents locally.",
      "Two-way voice simulation using the Web Speech API for oral examination practice.",
      "Evaluation rubric and scoring state built with Svelte 5 runes."
    ],
    impact: "Runs 100% locally in the browser with zero server API cost and complete user data privacy.",
    tech: ["Astro", "Svelte 5", "Tailwind CSS", "IndexedDB", "minisearch", "Web Speech API"],
    role: "Fullstack & AI Engineer",
    year: 2026,
    featured: true,
    image: "/projects/proposalarena.png",
    repoLink: "https://github.com/rwbu69/ProposalArena",
  },
  {
    title: "noachanassist",
    category: "Native Desktop · Agentic AI Companion",
    description: "Native desktop AI assistant focused on local data privacy. Integrates local SQLite storage, offline vector search for past conversations, and system shortcuts.",
    highlights: [
      "IPC communication bridge between Tauri v2 and Bun sidecar processes.",
      "Offline conversation recall using Orama Vector and SQLite.",
      "Kept background memory usage under 120MB with quick hotkey access."
    ],
    impact: "Operates completely offline without sending conversation history to external cloud servers.",
    tech: ["Tauri v2", "Bun", "Svelte 5", "SQLite", "Orama Vector", "Elysia"],
    role: "Desktop & Agentic Systems Developer",
    year: 2026,
    featured: true,
    image: "/projects/noachan.png",
    repoLink: "https://github.com/rwbu69/noachanassist",
  },
  {
    title: "Yokai Web Studio",
    category: "Production Web & Headless CMS",
    description: "Website and headless CMS for Yokai, a wotagei performance team in Yogyakarta. Features custom performance animations and an easy content publishing setup for the team.",
    highlights: [
      "Headless CMS setup with Sanity for managing show schedules and media.",
      "Custom choreography animation curves built with anime.js.",
      "Asset bundling and CDN caching achieving a 98+ Lighthouse performance score."
    ],
    impact: "Allowed the team to update event schedules directly without developer intervention.",
    tech: ["Astro", "Sanity CMS", "Tailwind CSS", "anime.js", "Bun", "Cloudflare"],
    role: "Frontend Developer & Designer",
    year: 2026,
    featured: true,
    image: "/projects/yokaiweb.png",
    demoLink: "https://yokai.id",
    repoLink: "https://github.com/rwbu69/yokai-web",
  },
  {
    title: "ElToolkitDeRWBU",
    category: "Cross-Platform Desktop Utility",
    description: "Desktop GUI utility for FFmpeg and yt-dlp. Simplifies media downloading, audio extraction, ID3 metadata editing, and batch file renaming.",
    highlights: [
      "Desktop GUI frontend built with Tauri v2, React, and TypeScript.",
      "Audio conversion, tagging, and batch regex renaming tools.",
      "BPM detection utility using Python."
    ],
    impact: "Replaces command-line scripts with an easy-to-use desktop application for daily media tasks.",
    tech: ["Tauri v2", "React", "TypeScript", "Rust", "FFmpeg", "yt-dlp", "Python"],
    role: "Creator & Desktop Developer",
    year: 2026,
    featured: true,
    image: "/projects/eltoolkit.png",
    demoLink: "https://github.com/rwbu69/eltoolkitde_rwbu/releases",
    repoLink: "https://github.com/rwbu69/eltoolkitde_rwbu",
    actionLabel: "Releases (Download)",
  },
  {
    title: "Retroda Website",
    category: "Commercial Rental Profile",
    description: "Company profile website for Retroda, a vintage car rental business in the Jabodetabek area.",
    tech: ["Astro", "Tailwind CSS", "TypeScript", "Keystatic CMS"],
    role: "Fullstack Developer",
    year: 2024,
    featured: false,
    image: "/projects/retroda.png",
    demoLink: "https://retroda.id",
  },
  {
    title: "Comipara 6 Interactive Map",
    category: "Event Navigation System",
    description: "Event floor navigation tool that calculates shortest-path walking routes between convention booths.",
    tech: ["Vanilla JavaScript", "Pathfinding Algorithm", "HTML5 Canvas"],
    role: "Frontend & Pathfinding Developer",
    year: 2024,
    featured: false,
    image: "/projects/comipara6-interactive-map.png",
    demoLink: "https://comipara6-map.vercel.app/",
  },
  {
    title: "RentCos Project",
    category: "Rental Management System",
    description: "Cosplay costume rental management system with QR code tracking for item check-out and returns.",
    tech: ["Laravel", "PHP", "Blade", "QR Code Engine", "MySQL"],
    role: "Fullstack Developer",
    year: 2023,
    featured: false,
    repoLink: "https://github.com/rwbu69/cosu-rent",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
