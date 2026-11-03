# akashnaren.github.io

Akash Premkumar’s personal site. Making things, and the odd project that does not fit anywhere else.

https://akashnaren.github.io/

## Run

```bash
npm install
npm run dev
npm run build
npm test
```

`dev` writes the Vite entry from TypeScript and starts the local server. `build` typechecks, writes the pages, and copies them to the repo root for GitHub Pages. `test` checks that built HTML.

## Layout

- `src/` holds the copy, the landing page, and the styles. Work, research, projects, profiles, and mail render on that one page.
- `public/` holds the favicon, marks, and the fire-whirls poster. Vite copies it into the build.
- `scripts/publish-pages.mjs` copies `dist/` onto the repo root (`index.html`, hashed `/assets`) so Pages can serve the files.

GitHub Actions builds on push to `main` and deploys `dist/`.
