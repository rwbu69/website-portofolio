# RWBU Portfolio

Personal portfolio website for Sebastian Vay Yosafat Pardamean Hutagalung (RWBU), a software developer based in Indonesia.

The site combines a soft pastel visual direction with nostalgic Web 1.0 details. It showcases selected web applications, desktop tools, AI experiments, writing, and contact information.

## Tech stack

- [Astro](https://astro.build/) for the site and static page generation
- [React](https://react.dev/) for interactive islands
- [Tailwind CSS](https://tailwindcss.com/) and custom CSS for styling
- [Bun](https://bun.sh/) for package management and scripts
- [Cloudflare Pages](https://pages.cloudflare.com/) for static deployment

## Project structure

```text
src/
├── components/site/   Reusable site and project components
├── content/blog/      Blog posts
├── data/              Profile and project data
├── layouts/           Shared site layout
├── lib/cms/           Content helpers
├── pages/             Routes and API endpoints
└── styles/            Global site styles

public/projects/       Project screenshots and other public assets
```

Project content is managed in [`src/data/projects.ts`](./src/data/projects.ts). Profile and contact details are managed in [`src/data/profile.ts`](./src/data/profile.ts).

## Local development

Install dependencies:

```sh
bun install
```

Start the development server:

```sh
bun run dev
```

The site is available at `http://localhost:4321`.

## Production commands

Build the static site:

```sh
bun run build
```

Preview the production build locally:

```sh
bun run preview
```

The generated site is written to `dist/`.

## Deployment

The project is configured for a static Cloudflare deployment. The Wrangler configuration serves the generated `dist/` directory.

Before deploying, run:

```sh
bun run build
```

The canonical site URL is configured in [`astro.config.mjs`](./astro.config.mjs).
