import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const dest = resolve("content/research/agent-native-ui.md");
const localRepo = process.env.RESEARCH_REPO;
const rawUrl =
  process.env.ARTICLE_URL ??
  "https://raw.githubusercontent.com/akashnaren/research/main/paper/paper.md";

const shell = `---
title: Agent-native UI
dek: Four ways to show one store to a model.
author: Akash Premkumar
date: 11 September 2026
status: exploring
source: research-repo
code: https://github.com/akashnaren/agent-ui-metrics
notes: https://github.com/akashnaren/research
---

`;

function withShell(markdown) {
  if (markdown.startsWith("---\n") || markdown.startsWith("---\r\n")) {
    return markdown;
  }
  return `${shell}${markdown}`;
}

mkdirSync(dirname(dest), { recursive: true });

if (localRepo) {
  const src = resolve(localRepo, "paper/paper.md");
  if (!existsSync(src)) {
    console.error(`ingest: missing ${src}`);
    process.exit(1);
  }
  writeFileSync(dest, withShell(readFileSync(src, "utf8")));
  console.log(`ingest: wrote ${dest} from ${src}`);
  process.exit(0);
}

let res;
try {
  res = await fetch(rawUrl);
} catch {
  console.error(
    "ingest: fetch failed. Set RESEARCH_REPO to a local clone of github.com/akashnaren/research",
  );
  process.exit(1);
}

if (!res.ok) {
  console.error(
    `ingest: ${rawUrl} returned ${String(res.status)}. Private repos need RESEARCH_REPO=/path/to/research`,
  );
  process.exit(1);
}

writeFileSync(dest, withShell(await res.text()));
console.log(`ingest: wrote ${dest} from ${rawUrl}`);
