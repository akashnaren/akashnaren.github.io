import { copyFileSync, existsSync } from "node:fs";

if (!existsSync("src/shell.html")) {
  console.error("restore-shell: src/shell.html is missing");
  process.exit(1);
}

copyFileSync("src/shell.html", "index.html");
