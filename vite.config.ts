import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { essayMetaFrom, parseArticle } from "./src/article.ts";
import {
  applyPageMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderEssay,
  renderResearch,
  renderSite,
  replaceHolder,
  researchMeta,
} from "./src/render.ts";

const holderPattern = /<div id="holder"><\/div>/;

function rewritePageIndex(req: { url?: string }): void {
  if (req.url === "/bot") req.url = "/bot/";
  if (req.url === "/research") req.url = "/research/";
  if (req.url === "/research/agent-native-ui") req.url = "/research/agent-native-ui/";
}

export default defineConfig({
  base: "/",
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
        return applyPageMeta(html.replace(holderPattern, renderSite()), homeMeta);
      },
      closeBundle() {
        const distHtml = resolve("dist/index.html");
        if (!existsSync(distHtml)) {
          throw new Error("inject-site: dist/index.html was not written");
        }
        const home = applyPageMeta(readFileSync(distHtml, "utf8"), homeMeta);
        writeFileSync(distHtml, home);
        mkdirSync(resolve("dist/bot"), { recursive: true });
        writeFileSync(
          resolve("dist/bot/index.html"),
          applyPageMeta(replaceHolder(home, renderBot()), botMeta),
        );
        mkdirSync(resolve("dist/research"), { recursive: true });
        writeFileSync(
          resolve("dist/research/index.html"),
          applyPageMeta(replaceHolder(home, renderResearch()), researchMeta),
        );
        const essayDoc = parseArticle(
          readFileSync(resolve("content/research/agent-native-ui.md"), "utf8"),
        );
        mkdirSync(resolve("dist/research/agent-native-ui"), { recursive: true });
        writeFileSync(
          resolve("dist/research/agent-native-ui/index.html"),
          applyPageMeta(replaceHolder(home, renderEssay(essayDoc)), essayMetaFrom(essayDoc)),
        );
        writeFileSync(
          resolve("dist/404.html"),
          replaceHolder(home, '<div id="holder"></div>'),
        );
      },
    },
  ],
});
