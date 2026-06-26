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
    tech: ["JavaScript", "Pathfinding Algorithm"],
    demoLink: "https://comipara6-map.vercel.app/",
    status: "live",
    featured: true,
  },
  {
    title: "Yokai Website",
    description: "Team profile website for Yokai, a Yogyakarta-based wotagei team. Responsible for development and deployment.",
    type: "website",
    tech: ["Astro", "React", "TailwindCSS", "Sanity"],
    demoLink: "https://yokai-website.lovelyrwbu69.workers.dev/",
    status: "deploying-soon",
    featured: false,
  },
  {
    title: "Retroda Website",
    description: "Company profile website for Retroda, a vintage car rental business operating in the Jabodetabek area. Responsible for development and deployment.",
    type: "website",
    tech: ["Astro", "TailwindCSS", "TypeScript", "Keystatic"],
    demoLink: "https://retroda.id",
    status: "live",
    featured: true,
  },
  {
    title: "RentCos Project",
    description: "A self-made project to streamline the cosplay rental process. Built on Laravel, uses QR codes for each costume part to provide a foolproof borrowing/return system.",
    type: "website",
    tech: ["Laravel", "PHP", "Blade Templates", "QR Code Integration"],
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

export const getFeaturedProjects = () => [...projects, ...tools].filter(p => p.featured);
