# Loc-Phat Truong · personal website

An Astro + TypeScript static site preserving the original dark academic design. No Hugo installation, block schema, theme, or React runtime is required.

## Develop

Use Node.js 24 LTS.

```sh
npm ci
npm run dev
```

Before submitting changes:

```sh
npm run check
npm run build
npm run preview
```

The production build checks local links, images, the CV download, and key homepage sections. Output is in `dist/`.

## Editing

- Biography, profile links, portrait: `content/authors/admin/`.
- News: add a folder containing `index.md` under `content/news/`. Use `title`, `date`, and an optional `link`. The three latest entries appear initially; the rest expand using **Earlier news** without JavaScript.
- Papers: edit `content/publication/*/index.md` and their `featured.png` images. Add a short `summary` for the sentence below the title. Resource URLs are optional: `url_project`, `url_code`, `url_pdf`, `url_arxiv`, `url_dataset`. Existing arXiv `url_source` values also work. Missing resources are omitted. At most five icons appear, each with a tooltip and accessible label. Venue is plain text, with no badge.
- Projects: `content/project/`.
- CV: `content/authors/admin-cv/_index.md`; awards/languages use the main profile. PDFs live in `site-assets/uploads/` (existing filenames are preserved).
- Layout and styling: `src/layouts/Layout.astro`, `src/components/`, `src/styles/global.css`. These are ordinary frontend components; change their markup freely.
- Research statement: `src/pages/index.astro`.

`prepare-assets.mjs` assembles `.astro-assets/` from original content images, `site-assets/`, and `static/`. Restart the development server after adding media. Thumbnails are optimized to WebP at build time. The old Hugo-generated `public/` folder is never used by Astro. Original Hugo source/configuration is retained as migration reference; its section/block definitions are not read by the frontend. Real publication, project, news, industrial-project, and personal-project detail routes are rebuilt from Markdown. Hugo tutorial/sample posts, example talks, and teaching demos are retained in source but are not part of this frontend.

## Deploy to GitHub Pages

The existing publish workflow now builds Astro and deploys `dist/` on pushes to `main`. In the repository's **Settings → Pages**, set the source to **GitHub Actions** if it is not already selected. Nothing needs to run on a server. The site is configured for `https://locphattruong.github.io/`; separate project repositories such as `/DualVTOFF/` retain their own deployments.

The Hugo updater is disabled during migration. The optional BibTeX importer can still write compatible Markdown publication records and does not build or deploy the site.
