import { defineConfig } from "vite";
import { renderSite } from "./src/render.ts";

const holderPattern =
  /<div id="holder">[\s\S]*?<div id="right"><\/div>\s*<\/div>/;

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
    },
  ],
});
