import { existsSync, readdirSync, readFileSync } from "node:fs";

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
  "https://huggingface.co/akashnaren",
  "https://www.kaggle.com/akashpnaren",
  'src="/marks/github.svg"',
  'src="/marks/linkedin.svg"',
  'src="/marks/x.svg"',
  'src="/marks/cursor.svg"',
  'src="/marks/huggingface.svg"',
  'src="/marks/kaggle.svg"',
  ">huggingface</span>",
  ">kaggle</span>",
  'class="contact-marks"',
  'class="human-mail"',
  'class="mail-label"',
  "email",
  "mailto:akashnaren@gmail.com",
  "akashnaren@gmail.com",
  "mailto:apn@agentmail.to",
  "apn@agentmail.to",
  "bots' email",
  'class="inbox"',
  "this site is managed by",
  "https://x.ai/bot",
  "grok bot",
  'class="managed-copy"',
  'class="scope"',
  'src="/fleet/05.png"',
  'class="grok-bot-mark"',
  'class="grok-bot-eyes"',
  'class="fleet"',
  "nine grok bots, more coming.",
  'class="him"',
  'class="panel"',
  'class="fact"',
  'name="twitter:card"',
  'property="og:url" content="https://akashnaren.github.io/"',
  'name="theme-color" content="#0a0a0a"',
  ...fleetSrcs.map((src) => `src="${src}"`),
];

const forbidden = [
  "AI engineer",
  "AI Engineer",
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
  "Job Assistant",
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
  "bygrok",
  "mailto:gmail",
  "/marks/gmail",
  "/marks/email",
  "inboxapn",
  "inboxapn@",
  "to(not",
  "emailapn",
  "engineer @ tesla",
  "engineer @ Tesla",
  "engineer @ ",
  "Engineer at Tesla",
  "Engineer @ tesla",
  "well-hole",
  "well-disk",
  "well-ring",
  "well-canvas",
  "well-glance",
  "well-static",
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

const hasManagedSpace = html.includes("by grok") || html.includes("by <a");
if (!hasManagedSpace) {
  console.error(
    "dist/index.html must keep a real space in managed-by (by grok or by <a), never bygrok",
  );
  process.exit(1);
}

if (html.includes("bygrok")) {
  console.error("dist/index.html contains bygrok");
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

if (!/\/assets\/index-[^"]+\.js/.test(html)) {
  console.error("dist/index.html must reference hashed /assets/index-*.js");
  process.exit(1);
}

if (/class="inbox"[\s\S]{0,500}akashnaren@gmail\.com/.test(html)) {
  console.error("Gmail must not sit in the bots' inbox line");
  process.exit(1);
}

if (/class="human-mail"[\s\S]{0,400}apn@agentmail\.to/.test(html)) {
  console.error("Agent inbox must not sit in the human mail line");
  process.exit(1);
}

if (/class="contact-link"[\s\S]{0,220}mailto:akashnaren@gmail\.com/.test(html)) {
  console.error("Gmail must not be a fifth contact mark");
  process.exit(1);
}

const assets = [
  ...fleetSrcs.map((src) => `dist${src}`),
  "dist/marks/github.svg",
  "dist/marks/linkedin.svg",
  "dist/marks/x.svg",
  "dist/marks/cursor.svg",
  "dist/marks/huggingface.svg",
  "dist/marks/kaggle.svg",
  "dist/favicon.svg",
];
const absent = assets.filter((path) => !existsSync(path));
if (absent.length > 0) {
  console.error("dist is missing required marks:");
  for (const path of absent) console.error(`  - ${path}`);
  process.exit(1);
}

const favicon = readFileSync("dist/favicon.svg", "utf8");
if (!favicon.includes("<title>A</title>") || !favicon.includes('aria-label="A"')) {
  console.error("dist/favicon.svg must be the letter A mark");
  process.exit(1);
}
if (favicon.includes("rotate(-26") || (favicon.includes("#ff6b00") && favicon.includes("circle"))) {
  console.error("dist/favicon.svg must not be the grok bot face");
  process.exit(1);
}
if (!existsSync("dist/favicon-32.png")) {
  console.error("dist is missing favicon-32.png");
  process.exit(1);
}

if (!existsSync("index.html")) {
  console.error("root index.html is missing; Files Pages would serve nothing");
  process.exit(1);
}

const root = readFileSync("index.html", "utf8");
if (!/\/assets\/index-[^"]+\.js/.test(root)) {
  console.error(
    "root index.html must contain hashed /assets/index-*.js so Files Pages is not a Vite shell",
  );
  process.exit(1);
}
if (root.includes("/src/main.ts")) {
  console.error("root index.html must not be a blank /src/main.ts Vite shell");
  process.exit(1);
}
if (!root.includes("mailto:akashnaren@gmail.com") || !root.includes("akashnaren@gmail.com")) {
  console.error("root index.html must include mailto:akashnaren@gmail.com");
  process.exit(1);
}
if (!root.includes("mailto:apn@agentmail.to") || !root.includes("apn@agentmail.to")) {
  console.error("root index.html must include mailto:apn@agentmail.to");
  process.exit(1);
}
if (!root.includes("by grok") && !root.includes("by <a")) {
  console.error("root index.html must keep a real space before grok bot");
  process.exit(1);
}
if (root.includes("bygrok")) {
  console.error("root index.html contains bygrok");
  process.exit(1);
}

if (!root.includes("mailto:akashnaren@gmail.com") || !html.includes("mailto:akashnaren@gmail.com")) {
  console.error("both built pages must keep mailto:akashnaren@gmail.com");
  process.exit(1);
}

if (!root.includes("mailto:apn@agentmail.to") || !html.includes("mailto:apn@agentmail.to")) {
  console.error("both built pages must keep mailto:apn@agentmail.to");
  process.exit(1);
}

if (/job assistant/i.test(html) || /job assistant/i.test(root)) {
  console.error("pages must not mention Job Assistant");
  process.exit(1);
}

if (/looking for a job/i.test(html) || /looking for a job/i.test(root)) {
  console.error("pages must not mention looking for a job");
  process.exit(1);
}

if (!/class="him"[\s\S]{0,8000}mailto:akashnaren@gmail\.com/.test(html)) {
  console.error("Gmail must stay in the him column");
  process.exit(1);
}

if (!/class="panel"[\s\S]{0,4000}mailto:apn@agentmail\.to/.test(html)) {
  console.error("Agent inbox must stay in the fleet panel");
  process.exit(1);
}

if (/class="panel"[\s\S]{0,4000}akashnaren@gmail\.com/.test(html)) {
  console.error("Gmail must not sit in the fleet panel");
  process.exit(1);
}

const cssName = existsSync("dist/assets")
  ? readdirSync("dist/assets").find((name) => name.endsWith(".css"))
  : undefined;
if (!cssName) {
  console.error("dist/assets is missing the hashed stylesheet");
  process.exit(1);
}
const css = readFileSync(`dist/assets/${cssName}`, "utf8");
if (
  !css.includes("min-width:880px") &&
  !css.includes("min-width: 880px") &&
  !css.includes("width>=880px") &&
  !css.includes("width >= 880px")
) {
  console.error("stylesheet must keep the 880px two-column breakpoint");
  process.exit(1);
}
if (!css.includes("position:sticky") && !css.includes("position: sticky")) {
  console.error("stylesheet must keep the sticky fleet panel");
  process.exit(1);
}

const overflowHidden =
  /html\s*,\s*body\s*\{[^}]*overflow:\s*hidden/.test(css) ||
  (/html\s*\{[^}]*overflow:\s*hidden/.test(css) &&
    /body\s*\{[^}]*overflow:\s*hidden/.test(css));
if (!overflowHidden) {
  console.error("stylesheet must keep overflow hidden on html and body");
  process.exit(1);
}

if (!css.includes("100dvh")) {
  console.error("stylesheet must size the document to 100dvh");
  process.exit(1);
}

if (
  !css.includes("flex-direction:column") &&
  !css.includes("flex-direction: column")
) {
  console.error("stylesheet must stack the type stage above the sky");
  process.exit(1);
}

if (!/min-height:\s*20vh/.test(css)) {
  console.error("stylesheet must keep a sky band at the bottom");
  process.exit(1);
}

if (!css.includes("24px") || !css.includes("linear-gradient")) {
  console.error("stylesheet must keep a short soft fade at the type/sky join");
  process.exit(1);
}

if (
  html.includes("well-hole") ||
  root.includes("well-hole") ||
  html.includes("well-canvas") ||
  root.includes("well-canvas") ||
  html.includes('class="well"') ||
  root.includes('class="well"')
) {
  console.error("built HTML must not keep the black-hole well");
  process.exit(1);
}

if (!html.includes('class="sky"') || !root.includes('class="sky"')) {
  console.error("built HTML must keep a first-paint sky band");
  process.exit(1);
}

if (!html.includes('class="system"') || !root.includes('class="system"')) {
  console.error("built HTML must keep the first-paint solar system");
  process.exit(1);
}

if (!/class="stage"[\s\S]+class="sky"/.test(html) || /class="sky"[\s\S]+class="stage"/.test(html)) {
  console.error("type stage must sit above the sky, never behind it");
  process.exit(1);
}

const jsName = existsSync("dist/assets")
  ? readdirSync("dist/assets").find((name) => name.endsWith(".js"))
  : undefined;
if (!jsName) {
  console.error("dist/assets is missing the hashed script");
  process.exit(1);
}
const js = readFileSync(`dist/assets/${jsName}`, "utf8");
if (/getContext\(\s*["']webgl/i.test(js) || js.includes("GL_FRAGMENT_PRECISION")) {
  console.error("sky must stay CSS/SVG; no WebGL shader path");
  process.exit(1);
}

if (/requestAnimationFrame/.test(js) || /webkitRequestAnimationFrame/.test(js)) {
  console.error("sky idle must stay CSS; no requestAnimationFrame");
  process.exit(1);
}

if (
  /\bship\b/.test(js) ||
  /chevron/i.test(js) ||
  /lineTo\(0,\s*-0\.7\)/.test(js) ||
  /moveTo\(-len/.test(js)
) {
  console.error("sky must not keep a ship or drifting chevron");
  process.exit(1);
}

if (!/@keyframes\s+orbit-spin/.test(css)) {
  console.error("stylesheet must keep a slow orbit idle on the system");
  process.exit(1);
}

if (
  /\.sky\s*\{[^}]*animation:/.test(css) ||
  /\.system[^{]*\{[^}]*animation:/.test(css) ||
  /\.system[^{]*\{[^}]*opacity:\s*0/.test(css) ||
  /\.sky[^{]*\{[^}]*opacity:\s*0/.test(css)
) {
  console.error("sky and system must be visible on first paint; no band fade-in");
  process.exit(1);
}

if (!css.includes("radial-gradient")) {
  console.error("stylesheet must keep first-paint stars as CSS radials in the sky");
  process.exit(1);
}

for (const page of [html, root]) {
  if (/engineer\s*@/i.test(page) || /Engineer at Tesla/.test(page)) {
    console.error("pages must not label him engineer @ tesla");
    process.exit(1);
  }
}

if (!html.includes("huggingface.co/akashnaren") || !root.includes("huggingface.co/akashnaren")) {
  console.error("both built pages must keep huggingface.co/akashnaren");
  process.exit(1);
}

if (!html.includes("kaggle.com/akashpnaren") || !root.includes("kaggle.com/akashpnaren")) {
  console.error("both built pages must keep kaggle.com/akashpnaren");
  process.exit(1);
}

for (const page of [html, root]) {
  if (page.includes("inboxapn") || page.includes("inboxapn@") || page.includes("to(not")) {
    console.error("built HTML must not concatenate the bots' email line");
    process.exit(1);
  }
}

console.log(
  "dist/index.html has the two-column split, type above a first-paint solar system, no job-title line, HF+Kaggle marks, locked copy, both labeled mailtos, spaced managed-by line, nine unlabeled faces, overflow-hidden 100dvh, and hashed Pages assets.",
);
