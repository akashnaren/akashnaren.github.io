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
  "agentmail",
  "this site is managed by",
  "https://x.ai/bot",
  "grok bot",
];

const forbidden = [
  "AI engineer",
  "AI Engineer",
  "gmail.com",
  "usage stats",
  "https://grok.com/bot",
  "https://x.ai/grok-bot",
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

console.log("dist/index.html has the locked copy, cursor, grok bot, and agentmail.");
