import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import {
  applyPageMeta,
  botMeta,
  homeMeta,
  renderBot,
  renderSite,
  replaceHolder,
} from "./src/render.ts";

const holderPattern = /<div id="holder"><\/div>/;

function rewriteBotIndex(req: { url?: string }): void {
  if (req.url === "/bot") req.url = "/bot/";
}

export default defineConfig({
  base: "/",
  plugins: [
    {
      name: "rewrite-bot-index",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          rewriteBotIndex(req);
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          rewriteBotIndex(req);
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
        writeFileSync(
          resolve("dist/404.html"),
          replaceHolder(home, '<div id="holder"></div>'),
        );
      },
    },
  ],
});
