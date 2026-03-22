# gayankanishka.github.io

![CI/CD](https://github.com/gayankanishka/gayankanishka.github.io/workflows/CI/CD/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Personal portfolio site for [Gayan Kanishka Wijetunga](https://gayankanishka.github.io) — Lead Software Engineer based in Colombo, Sri Lanka.

Built with Vite + React + TypeScript, deployed to GitHub Pages.

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + react-intersection-observer
- **Contact form:** Web3Forms
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions

---

## Project Structure

```
├── components/          # Page sections
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/                # Static content
│   ├── config.ts        # Name, title, social links
│   ├── skills.ts        # Skill categories
│   └── experience.ts    # Work history
├── scripts/
│   └── fetch-pinned-repos.mjs   # Build-time GitHub pinned repos fetch
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── data/
│       └── pinned-repos.json    # Generated at build time, gitignored
└── public/
    ├── profile.jpg
    ├── resume.pdf
    └── robots.txt
```

---

## Local Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
# Install dependencies
pnpm install

# Copy env template and fill in values
cp .env.local.example .env.local
```

### Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key for the contact form ([get one free](https://web3forms.com)) |
| `GH_TOKEN` | GitHub Personal Access Token — build-time only, never bundled into the browser |

> `GH_TOKEN` is used by `scripts/fetch-pinned-repos.mjs` to fetch your pinned GitHub repositories at build time via the GraphQL API. It is never included in the client bundle.

### Run

```bash
pnpm dev       # starts dev server at http://localhost:3000
pnpm build     # production build → dist/
pnpm preview   # preview the production build locally
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `develop` via GitHub Actions (`.github/workflows/build-and-publish.yml`).

**Required repository secrets:**

| Secret | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key |
| `GH_TOKEN` | GitHub PAT for fetching pinned repos at build time |

### Manual deploy

```bash
pnpm deploy
```

Builds the site and pushes `dist/` to the `master` branch, which GitHub Pages serves.

---

## Pinned Repos

The Projects section displays your GitHub profile's pinned repositories. They are fetched at build time (not at runtime) by `scripts/fetch-pinned-repos.mjs` using the GitHub GraphQL API, written to `src/data/pinned-repos.json`, and bundled statically. No token is ever shipped to the browser.

`src/data/pinned-repos.json` is gitignored — it is regenerated on every build.

To refresh pinned repos locally without a full build:

```bash
node scripts/fetch-pinned-repos.mjs
```

---

## License

MIT
