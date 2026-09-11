import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const dest = resolve("public/research/agent-native-ui/paper.pdf");
const localRepo = process.env.RESEARCH_REPO;
const localFile = process.env.ARTICLE_FILE;
const sha = process.env.ARTICLE_SHA ?? "main";
const pdfPath = "papers/agent-native-ui/paper.pdf";
const rawUrl =
  process.env.ARTICLE_URL ??
  `https://raw.githubusercontent.com/akashnaren/research/${sha}/${pdfPath}`;

function assertPdf(bytes, origin) {
  if (bytes.length < 5 || bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    console.error(`ingest: ${origin} is not a PDF`);
    process.exit(1);
  }
}

function writePdf(bytes, origin) {
  assertPdf(bytes, origin);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, bytes);
  console.log(`ingest: wrote ${dest} (${String(bytes.length)} bytes) from ${origin}`);
}

function localPdf(root) {
  return resolve(root, pdfPath);
}

if (localFile) {
  const src = resolve(localFile);
  if (!existsSync(src)) {
    console.error(`ingest: missing ARTICLE_FILE ${src}`);
    process.exit(1);
  }
  writePdf(readFileSync(src), src);
  process.exit(0);
}

if (localRepo) {
  const src = localPdf(localRepo);
  if (!existsSync(src)) {
    console.error(`ingest: missing ${src}`);
    process.exit(1);
  }
  writePdf(readFileSync(src), src);
  process.exit(0);
}

let res;
try {
  res = await fetch(rawUrl);
} catch {
  console.error(
    "ingest: PDF fetch failed. The research repo is private to anonymous raw.githubusercontent.com. Set RESEARCH_REPO=/path/to/research, ARTICLE_FILE=/path/to/paper.pdf, or ARTICLE_URL to a readable PDF.",
  );
  process.exit(1);
}

if (!res.ok) {
  console.error(
    `ingest: ${rawUrl} returned ${String(res.status)}. Private repos need RESEARCH_REPO=/path/to/research, ARTICLE_FILE=/path/to/paper.pdf, or a readable ARTICLE_URL.`,
  );
  process.exit(1);
}

writePdf(Buffer.from(await res.arrayBuffer()), rawUrl);
