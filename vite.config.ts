import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import {
  applyPageMeta,
  botMeta,
  renderBot,
  renderSite,
  replaceHolder,
} from "./src/render.ts";

const holderPattern = /<div id="holder"><\/div>/;

export default defineConfig({
  base: "/",
  plugins: [
    {
      name: "inject-site",
      transformIndexHtml(html) {
        if (!holderPattern.test(html)) {
          throw new Error("index.html is missing the #holder root");
        }
        return html.replace(holderPattern, renderSite());
      },
      closeBundle() {
        const distHtml = resolve("dist/index.html");
        if (!existsSync(distHtml)) {
          throw new Error("inject-site: dist/index.html was not written");
        }
        const home = readFileSync(distHtml, "utf8");
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
