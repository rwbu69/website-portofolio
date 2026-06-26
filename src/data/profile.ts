export const identity = {
  fullName: "Sebastian Vay Yosafat Pardamean Hutagalung",
  alias: "RWBU",
  role: "Front End Developer",
  bioShort: "A front end developer pursuing a CS degree. Interested in web animations, prompt engineering, and static frameworks.",
  bioLong: "A front end developer currently pursuing a Computer Science degree at Universitas Kristen Immanuel. Interested in web animations, prompt engineering, and new static frameworks. Mostly works alongside AI to streamline development workflow and deliver quickly."
};

export const experience = [
  {
    role: "Web Developer",
    company: "PT MultiIntegra Digital",
    location: "Rawamangun, East Jakarta",
    duration: "1 tahun"
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    duration: "Currently active/open for freelance work"
  }
];

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sebastianvyhutagalung/",
    iconPath: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shunshunrwbu",
    iconPath: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01"
  },
  {
    name: "GitHub",
    url: "https://github.com/rwbu69",
    iconPath: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }
];

export const skillsGrouped = [
  {
    category: "Frontend",
    skills: ["JavaScript (Vanilla)", "TypeScript", "TailwindCSS"]
  },
  {
    category: "Backend/Framework",
    skills: ["Laravel", "PHP"]
  },
  {
    category: "Frameworks",
    skills: ["Astro"]
  },
  {
    category: "Misc",
    skills: ["CLI Tooling (FFmpeg, yt-dlp)"]
  }
];

export const allSkillsFlat = skillsGrouped.flatMap(g => g.skills);
