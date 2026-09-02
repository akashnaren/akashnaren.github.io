import { existsSync, readFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");

const fleetSrcs = [
  "/fleet/01.png",
  "/fleet/02.png",
  "/fleet/03.png",
  "/fleet/04.png",
  "/fleet/05.png",
  "/fleet/06.png",
  "/fleet/07.png",
  "/fleet/08.png",
  "/fleet/09.png",
];

const required = [
  "Akash Premkumar",
  "engineer @ ",
  "I live in Redwood City.",
  "diagnostics",
  "telemetry",
  "data analysis for service engineering",
  "bill of materials",
  "full stack applications",
  "https://www.tesla.com/robotaxi",
  "robotaxi",
  "https://www.tesla.com/AI",
  "optimus",
  "https://grok.com",
  "grok",
  "https://www.rtx.com/raytheon",
  "avionics networking test suite",
  "NASA L’SPACE",
  "fire-whirl research",
  "CS and Math",
  "https://github.com/akashnaren",
  "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
  "https://x.com/akashpn",
  "https://cursor.com/@akashpn",
  'src="/marks/github.ico"',
  'src="/marks/linkedin.ico"',
  'src="/marks/x.ico"',
  'src="/marks/cursor.svg"',
  "mailto:apn@agentmail.to",
  "apn@agentmail.to",
  "bots' inbox",
  "(not me)",
  'class="inbox"',
  "this site is managed by",
  "https://x.ai/bot",
  "grok bot",
  'src="/fleet/05.png"',
  'class="grok-bot-mark"',
  'class="grok-bot-eyes"',
  'class="fleet"',
  "nine grok bots, more coming.",
  'name="twitter:card"',
  'property="og:url" content="https://akashnaren.github.io/"',
  'name="theme-color" content="#0a0a0a"',
  ...fleetSrcs.map((src) => `src="${src}"`),
];

const forbidden = [
  "AI engineer",
  "AI Engineer",
  "gmail.com",
  "usage stats",
  "https://grok.com/bot",
  "https://x.ai/grok-bot",
  "https://x.ai/icon.png",
  "https://x.ai/favicon.ico",
  'src="/icon.png"',
  'src="/grok-bot-mark.png"',
  "the grok bots on this are",
  "a dozen grok bots",
  "keep this page",
  "work on this page",
  "Write my grok bots at",
  "job assistant",
  "job search",
  "looking for a job",
  "hiring",
  "startup advisor",
  "Money Engineer",
  "Personal CFO",
  "New Bot",
  "secretary",
  "article writer",
  "Systems Engineer",
  "chief of staff",
  "profile assistant",
  "research advisor",
  "software engineer",
  "product engineer",
];

const missing = required.filter((needle) => !html.includes(needle));
const leaked = forbidden.filter((needle) => html.includes(needle));

if (missing.length > 0 || leaked.length > 0) {
  if (missing.length > 0) {
    console.error("dist/index.html is missing required copy:");
    for (const needle of missing) console.error(`  - ${needle}`);
  }
  if (leaked.length > 0) {
    console.error("dist/index.html contains forbidden copy:");
    for (const needle of leaked) console.error(`  - ${needle}`);
  }
  process.exit(1);
}

if (/\bprofessor\b/i.test(html)) {
  console.error("dist/index.html must not name bots");
  process.exit(1);
}

const fleetHits = fleetSrcs.filter((src) => html.includes(`src="${src}"`));
if (fleetHits.length !== 9) {
  console.error("dist/index.html must include all nine unlabeled fleet marks");
  process.exit(1);
}

if (!html.includes('href="/favicon.svg"') && !html.includes("favicon.svg")) {
  console.error("dist/index.html is missing the favicon");
  process.exit(1);
}

if (html.includes("og:image") && /og:image[\s\S]{0,80}akash/i.test(html)) {
  console.error("dist/index.html must not invent a photo og:image of Akash");
  process.exit(1);
}

const assets = [
  ...fleetSrcs.map((src) => `dist${src}`),
  "dist/marks/github.ico",
  "dist/marks/linkedin.ico",
  "dist/marks/x.ico",
  "dist/marks/cursor.svg",
];
const absent = assets.filter((path) => !existsSync(path));
if (absent.length > 0) {
  console.error("dist is missing required marks:");
  for (const path of absent) console.error(`  - ${path}`);
  process.exit(1);
}

console.log(
  "dist/index.html has the locked copy, quiet grok footnote, nine unlabeled faces, and agent inbox chip.",
);
