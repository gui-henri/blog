# Guigas — personal blog

A personal blog and artifact factory. The long-term record of what I learn, build, and ship,
deployed to [blog.guigas.com.br](https://blog.guigas.com.br) via GitHub Pages.

Built with [Astro](https://astro.build), MDX, and hand-written CSS.

## The maxim

> Each hour of study should ideally leave an artifact.
> Knowledge that produces nothing tends to disappear.

The content pipeline that enforces this is documented in [`content-method/`](./content-method).

## Project structure

```text
src/
├── content/
│   ├── posts/          # long-form essays (MDX)
│   ├── notes/          # small, frequent notes (MD)
│   └── inbox/          # capture notes — never published (MD)
├── content.config.ts   # collections + Zod schemas
├── data/site.ts        # profile, social links, projects
├── layouts/            # Base, Post, Note
├── components/         # Header, Footer, PostCard, NoteCard, TagChip
├── pages/              # index, about, projects, tags, posts/[slug], notes/[slug], rss, 404
└── styles/global.css   # design tokens (warm paper, muted ink, serif/mono)
```

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run check     # type-check
npm run build     # static build to dist/
npm run preview   # preview the build
```

## Write content

See [`content-method/`](./content-method) for the full framework.

Quick reference:

| Collection | Path | Purpose |
| --- | --- | --- |
| Inbox | `src/content/inbox/YYYY-MM-DD-slug.md` | Capture any new idea, ≤10 min. Never rendered. |
| Notes | `src/content/notes/YYYY-MM-DD-slug.md` | Small published notes. |
| Posts | `src/content/posts/YYYY-MM-DD-slug/index.mdx` | Long-form essays. |

`draft: true` keeps a note or post unpublished.

Templates live in [`content-method/templates/`](./content-method/templates).

## Deploy

The GitHub Actions workflow `.github/workflows/deploy.yml` builds and deploys to GitHub
Pages on every push to `main`. The `CNAME` file (in `public/`) holds the custom domain.

### DNS for blog.guigas.com.br

Subdomain sites use a single **CNAME record**. In your DNS provider, add:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `blog` | `gui-henri.github.io` |

The apex (`guigas.com.br`) is left untouched — no A/AAAA records needed.

In the GitHub repo settings (**Settings → Pages → Custom domain**), set `blog.guigas.com.br`
and enable **Enforce HTTPS**. The `CNAME` file keeps the domain in sync across builds.

> Note: DNS changes can take up to 24–48h to propagate.
