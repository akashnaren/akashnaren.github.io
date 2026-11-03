import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { applyPageMeta, ensureCsp, homeMeta, renderSite, replaceHolder } from "./src/render.ts";

const holderPattern = /<div id="holder"><\/div>/;

export default defineConfig({
  base: "/",
  build: {
    sourcemap: false,
  },
  plugins: [
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
        writeFileSync(resolve("dist/404.html"), replaceHolder(home, '<div id="holder"></div>'));
      },
    },
  ],
});
