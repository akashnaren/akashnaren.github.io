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

`dev` restores the Vite shell and starts the local server. `build` typechecks, writes the pages, and copies them to the repo root for GitHub Pages. `test` checks that built HTML.

`npm run ingest:article` copies the agent-native UI paper PDF into `public/research/agent-native-ui/` when you have the file locally.

## Layout

- `src/` holds the copy, the HTML for each page, and the styles. Vite injects that into the shell at build time.
- `public/` holds the favicon, fleet faces, marks, and research PDFs. Vite copies it into the build.
- `scripts/publish-pages.mjs` copies `dist/` onto the repo root (`index.html`, `/bot`, `/research`, hashed `/assets`) so Pages can serve the files.

GitHub Actions builds on push to `main` and deploys `dist/`.
