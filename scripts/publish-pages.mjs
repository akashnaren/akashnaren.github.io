import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
} from "node:fs";
import { join } from "node:path";

function findHtml(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      if (name === "assets" || name === "fleet" || name === "marks") continue;
      const nested = findHtml(path);
      if (nested) return nested;
    } else if (name.endsWith(".html")) {
      return path;
    }
  }
  return null;
}

const builtHtml = existsSync("dist/index.html")
  ? "dist/index.html"
  : findHtml("dist");

if (!builtHtml) {
  console.error("publish-pages: no HTML in dist/");
  process.exit(1);
}

if (builtHtml !== "dist/index.html") {
  mkdirSync("dist", { recursive: true });
  copyFileSync(builtHtml, "dist/index.html");
}

copyFileSync("dist/index.html", "index.html");

function syncDir(from, to) {
  if (!existsSync(from)) return;
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
}

syncDir("dist/assets", "assets");
syncDir("dist/fleet", "fleet");
syncDir("dist/marks", "marks");
syncDir("dist/bot", "bot");

for (const file of [
  "favicon.svg",
  "favicon.ico",
  "favicon-32.png",
  "site.webmanifest",
  ".nojekyll",
  "404.html",
]) {
  const src = join("dist", file);
  if (existsSync(src)) copyFileSync(src, file);
}

const html = readFileSync("index.html", "utf8");
if (!/\/assets\/index-[^"/]+\.js/.test(html)) {
  console.error(
    "publish-pages: root index.html is missing hashed /assets/index-*.js",
  );
  process.exit(1);
}
if (html.includes("/src/main.ts")) {
  console.error(
    "publish-pages: root index.html is still a Vite TypeScript shell",
  );
  process.exit(1);
}

if (!existsSync("bot/index.html") || !existsSync("404.html")) {
  console.error("publish-pages: bot/index.html or 404.html missing at repo root");
  process.exit(1);
}

console.log(
  "published dist to repo root for Files Pages (hashed assets, /bot profile, 404 SPA fallback).",
);
