import { readFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");

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
  "mailto:apn@agentmail.to",
  "apn@agentmail.to",
  "Write my grok bots at",
  "their inbox, not mine",
  "this site is managed by",
  "https://x.ai/bot",
  "grok bot",
  'src="/icon.png"',
  'class="grok-bot-mark"',
  "the grok bots on this are",
  "chief of staff",
  "profile assistant",
  "job assistant",
  "research advisor",
  "professor",
  "software engineer",
  "product engineer",
  "startup advisor",
  'name="twitter:card"',
  'property="og:url" content="https://akashnaren.github.io/"',
  'name="theme-color" content="#0a0a0a"',
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
  "Money Engineer",
  "Personal CFO",
  "New Bot",
  "secretary",
  "article writer",
  "Systems Engineer",
  "QA",
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

if (!html.includes('href="/favicon.svg"') && !html.includes("favicon.svg")) {
  console.error("dist/index.html is missing the favicon");
  process.exit(1);
}

if (html.includes("og:image") && /og:image[\s\S]{0,80}akash/i.test(html)) {
  console.error("dist/index.html must not invent a photo og:image of Akash");
  process.exit(1);
}

console.log(
  "dist/index.html has the locked copy, public grok bot roster, agent inbox, and local grok bot mark.",
);
