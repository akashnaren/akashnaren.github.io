import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { piPaperHref, piPaperTitle } from "./src/content.ts";
import {
  applyPageMeta,
  ensureCsp,
  essayRedirectHtml,
  homeMeta,
  pdfRedirectHtml,
  renderSite,
  replaceHolder,
  researchMeta,
  sectionRedirectHtml,
} from "./src/render.ts";

const holderPattern = /<div id="holder"><\/div>/;

function rewritePageIndex(req: { url?: string }): void {
  if (req.url === "/research") req.url = "/research/";
  if (req.url === "/research/agent-native-ui") req.url = "/research/agent-native-ui/";
  if (req.url === "/research/pi-0.2-high") req.url = "/research/pi-0.2-high/";
}

export default defineConfig({
  base: "/",
  build: {
    sourcemap: false,
  },
  plugins: [
    {
      name: "rewrite-page-index",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          rewritePageIndex(req);
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          rewritePageIndex(req);
          next();
        });
      },
    },
    {
      name: "inject-site",
      transformIndexHtml(html) {
        if (!holderPattern.test(html)) {
          throw new Error("index.html is missing the #holder root");
        }
        return ensureCsp(applyPageMeta(html.replace(holderPattern, renderSite()), homeMeta));
      },
      closeBundle() {
        const distHtml = resolve("dist/index.html");
        if (!existsSync(distHtml)) {
          throw new Error("inject-site: dist/index.html was not written");
        }
        const home = ensureCsp(applyPageMeta(readFileSync(distHtml, "utf8"), homeMeta));
        writeFileSync(distHtml, home);
        mkdirSync(resolve("dist/research"), { recursive: true });
        writeFileSync(
          resolve("dist/research/index.html"),
          sectionRedirectHtml("/#research", researchMeta.title, researchMeta.description),
        );
        mkdirSync(resolve("dist/research/agent-native-ui"), { recursive: true });
        writeFileSync(
          resolve("dist/research/agent-native-ui/index.html"),
          essayRedirectHtml(),
        );
        mkdirSync(resolve("dist/research/pi-0.2-high"), { recursive: true });
        writeFileSync(
          resolve("dist/research/pi-0.2-high/index.html"),
          pdfRedirectHtml(piPaperHref, piPaperTitle),
        );
        writeFileSync(
          resolve("dist/404.html"),
          replaceHolder(home, '<div id="holder"></div>'),
        );
      },
    },
  ],
});
