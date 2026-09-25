import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const html = resolve("papers/pi-0.2-high/paper.html");
const pdf = resolve("public/research/pi-0.2-high/paper.pdf");
const chrome = ["/usr/bin/google-chrome", "/usr/bin/google-chrome-stable"].find((path) =>
  existsSync(path),
);

if (!chrome) {
  console.error("build-pi-paper: google-chrome is not installed");
  process.exit(1);
}
if (!existsSync(html)) {
  console.error(`build-pi-paper: missing ${html}`);
  process.exit(1);
}

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdf}`,
    html,
  ],
  { stdio: "inherit", timeout: 60000 },
);

if (!existsSync(pdf)) {
  console.error(`build-pi-paper: chrome did not write ${pdf}`);
  process.exit(result.status ?? 1);
}

console.log(`build-pi-paper: wrote ${pdf}`);
