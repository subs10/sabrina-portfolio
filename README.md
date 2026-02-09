# Sabrina Feld — Portfolio

Personal portfolio website showcasing product design, fine art, and creative practice.

## Tech Stack

- **Next.js 16** (Static Export) — React framework with file-based routing
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **Framer Motion** — Animations and interactions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Project Structure

```
src/
├── app/          # Pages (Home, Projects, Art, About, Contact)
├── components/   # Reusable UI components
├── data/         # Content data (projects, art, navigation)
└── lib/          # Utility functions
```

## Adding Content

- **New project:** Edit `src/data/projects.ts`, add images to `public/images/projects/`
- **New art piece:** Edit `src/data/art.ts`, add images to `public/images/art/`

## Build

```bash
npm run build
```

Static files output to `out/` directory, ready for deployment.
