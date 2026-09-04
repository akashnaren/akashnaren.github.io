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
  "I worked on vehicle service systems",
  "diagnostics",
  "telemetry",
  "data analysis for service",
  "Worked at Tesla in Redwood City on vehicle service systems",
  "Previously I worked on vehicle engineering",
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
  'href="/bot"',
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
  "botsapn",
  "botsapn@",
  "write the bots",
  "279M",
  "279m",
  "tokens",
  "Longest Streak",
  "Current Streak",
  "15 agents",
  "https://grok.com/@akashpn",
  "I work on diagnostics",
  "I work on telemetry",
  "I work on",
  "At Tesla in Redwood City. Diagnostics",
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
if (!root.includes('href="/bot"')) {
  console.error("root index.html must link the grok footnote to /bot");
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

if (/profile assistant/i.test(html) || /profile assistant/i.test(root)) {
  console.error("home must not name Profile Assistant; that seat is named only on /bot");
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

if (!css.includes("color-scheme:dark") && !css.includes("color-scheme: dark")) {
  console.error("stylesheet must declare color-scheme dark");
  process.exit(1);
}

if (
  !css.includes("text-size-adjust:100%") &&
  !css.includes("text-size-adjust: 100%")
) {
  console.error("stylesheet must lock text-size-adjust at 100%");
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

if (
  !/\.inbox\s*\{[^}]*(?:flex-direction:\s*column|flex-flow:\s*column)/.test(css) &&
  !/\.inbox\{[^}]*(?:flex-direction:column|flex-flow:column)/.test(css)
) {
  console.error("inbox must stack label and address in a flex column so they never jam");
  process.exit(1);
}

if (!/\.inbox\s*\{[^}]*gap:/.test(css) && !/\.inbox\{[^}]*gap:/.test(css)) {
  console.error("inbox must keep a real CSS gap between label and address");
  process.exit(1);
}

if (
  !css.includes(".page.profile") &&
  !css.includes(".page.profile ")
) {
  console.error("stylesheet must keep a .page.profile studio layout");
  process.exit(1);
}

if (
  !/\.page\.profile[^{]*\{[^}]*width:\s*100vw/.test(css) &&
  !/\.page\.profile\{[^}]*width:100vw/.test(css)
) {
  console.error("/bot page must occupy the full viewport (100vw)");
  process.exit(1);
}

if (
  /\.page\.profile\s+\.stage\{[^}]*max-width:38rem/.test(css) ||
  /\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*38rem/.test(css) ||
  /\.page\.profile\s+\.stage\{[^}]*max-width:44rem/.test(css) ||
  /\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*44rem/.test(css) ||
  /\.page\.profile\s+\.stage\{[^}]*max-width:72rem/.test(css) ||
  /\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*72rem/.test(css)
) {
  console.error("/bot stage must not keep a 38rem, 44rem, or 72rem boxed room");
  process.exit(1);
}

if (
  !/\.page\.profile\s+\.stage\{[^}]*max-width:100vw/.test(css) &&
  !/\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*100vw/.test(css)
) {
  console.error("/bot stage must span 100vw — no boxed constellation room");
  process.exit(1);
}

if (!css.includes(".crew-sky") || !css.includes(".face") || !css.includes(".brief")) {
  console.error("stylesheet must keep the planetarium crew (crew-sky, face, brief)");
  process.exit(1);
}

if (!css.includes(".lead") || !css.includes(".orbit") || !css.includes(".spoke")) {
  console.error("stylesheet must keep the planetarium lead, orbit, and spoke");
  process.exit(1);
}

if (
  !/\.face\s*\{[^}]*width:\s*calc\(72px/.test(css) &&
  !/\.face\{[^}]*width:calc\(72px/.test(css) &&
  !css.includes("width:calc(72px") &&
  !css.includes("width: calc(72px")
) {
  console.error("/bot faces must be large hit targets (72px), not the old 42px chips");
  process.exit(1);
}

if (css.includes(".crew-grid") || css.includes(".board-split") || css.includes(".tile-face")) {
  console.error("stylesheet must not keep the stretching 3×3 crew grid");
  process.exit(1);
}

if (
  !/\.page\.profile[^{]*\{[^}]*overflow:\s*hidden/.test(css) &&
  !/\.page\.profile\{[^}]*overflow:hidden/.test(css)
) {
  console.error("/bot page must stay overflow hidden — no scrollbar when a seat is selected");
  process.exit(1);
}

if (
  /\.page\.profile[^{]*\{[^}]*overflow-y:\s*auto/.test(css) ||
  /\.page\.profile\{[^}]*overflow-y:auto/.test(css)
) {
  console.error("/bot must not opt into overflow-y auto on any viewport");
  process.exit(1);
}

if (
  !/\.brief\s*\{[^}]*height:/.test(css) &&
  !/\.brief\{[^}]*height:/.test(css)
) {
  console.error("brief slot must have a reserved fixed height so copy cannot grow the page");
  process.exit(1);
}

if (
  !/\.brief\s*\{[^}]*overflow:\s*hidden/.test(css) &&
  !/\.brief\{[^}]*overflow:hidden/.test(css)
) {
  console.error("brief slot must overflow hidden so detail text never reflows chrome");
  process.exit(1);
}

if (!css.includes("line-clamp:2") && !css.includes("line-clamp: 2") && !css.includes("-webkit-line-clamp:2") && !css.includes("-webkit-line-clamp: 2")) {
  console.error("brief copy must clamp so longer blurbs cannot grow the reserved slot");
  process.exit(1);
}

if (
  !/\.crew-sky\s*\{[^}]*height:/.test(css) &&
  !/\.crew-sky\{[^}]*height:/.test(css)
) {
  console.error("planetarium field must have a reserved height so the crew can fill the frame");
  process.exit(1);
}

if (
  /\.crew-sky\{[^}]*max-width:calc\(22rem/.test(css) ||
  /\.crew-sky\s*\{[^}]*max-width:\s*calc\(22rem/.test(css) ||
  /\.crew-sky\{[^}]*height:calc\(13\.5rem/.test(css) ||
  /\.crew-sky\s*\{[^}]*height:\s*calc\(13\.5rem/.test(css)
) {
  console.error("/bot must not keep the tiny 22rem × 13.5rem constellation widget");
  process.exit(1);
}

if (
  /\.page\.profile\s+\.stage\{[^}]*max-width:13\.6rem/.test(css) ||
  /\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*13\.6rem/.test(css)
) {
  console.error("/bot stage must not reuse the face-cluster max-width");
  process.exit(1);
}

if (!/p\.fleet\s*\{[^}]*max-width:/.test(css) && !/p\.fleet\{[^}]*max-width:/.test(css)) {
  console.error("face-cluster dimensions must be scoped to p.fleet so they cannot crush the page");
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
  /class=["']ship["']/.test(js) ||
  /class=["']chevron["']/.test(js) ||
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

if (!/max-height:\s*86%/.test(css) && !css.includes("max-height:86%")) {
  console.error("solar system must fill more of the sky band (86% cap) without clipping");
  process.exit(1);
}

if (css.includes("11rem")) {
  console.error("solar system must stay larger than the old 11rem cap");
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
  if (page.includes("I work on") || /At Tesla I work\b/.test(page)) {
    console.error("Tesla service copy must stay past tense");
    process.exit(1);
  }
  if (!page.includes("I worked on vehicle service systems")) {
    console.error("home bio must say Tesla vehicle service work in the past tense");
    process.exit(1);
  }
  if (!page.includes("Worked at Tesla in Redwood City on vehicle service systems")) {
    console.error("meta descriptions must state Tesla service work in the past tense");
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
  if (
    page.includes("inboxapn") ||
    page.includes("inboxapn@") ||
    page.includes("to(not") ||
    page.includes("botsapn") ||
    page.includes("botsapn@")
  ) {
    console.error("built HTML must not concatenate the bots' email line");
    process.exit(1);
  }
}

if (!existsSync("dist/bot/index.html") || !existsSync("bot/index.html")) {
  console.error("bot page must exist at dist/bot/index.html and bot/index.html");
  process.exit(1);
}

if (!existsSync("dist/404.html") || !existsSync("404.html")) {
  console.error("GitHub Pages SPA fallback 404.html is missing");
  process.exit(1);
}

const botHtml = readFileSync("dist/bot/index.html", "utf8");
const botRoot = readFileSync("bot/index.html", "utf8");
const spa = readFileSync("dist/404.html", "utf8");
const spaRoot = readFileSync("404.html", "utf8");

const botRequired = [
  "profile assistant",
  "software engineer",
  "research advisor",
  "chief of staff",
  "secretary",
  "chief financial officer",
  "finance engineer",
  "product engineer",
  "agent master",
  "hi. i keep his public faces tidy",
  "ship this little site",
  "i tinker on the real code",
  "i wander into papers for him",
  "i herd the nine of us",
  "i only send when he says so",
  "tap the glass if it looks a little spicy",
  "tiny trading experiments",
  "sharp corners get polite",
  "seats stay cute. seats stay tight",
  "the crew",
  "pick a seat.",
  "bots' email",
  'class="inbox-label"',
  'class="inbox-address"',
  "https://x.ai/bot",
  "grok bot",
  "this site is managed by",
  "mailto:apn@agentmail.to",
  "apn@agentmail.to",
  'href="/"',
  "https://github.com/akashnaren",
  "https://cursor.com/@akashpn",
  "https://x.com/akashpn",
  ">home</span>",
  ">github</span>",
  ">cursor</span>",
  ">x</span>",
  "nine grok bots, more coming.",
  'class="page profile"',
  'class="seat"',
  'class="rail"',
  'class="write"',
  'class="board"',
  'class="crew-sky"',
  'class="lead"',
  'class="orbit"',
  'class="spoke"',
  'class="lead-mark"',
  'class="face"',
  'class="brief"',
  'class="brief-name"',
  'class="brief-copy"',
  'class="foot"',
  'class="inbox"',
  'class="managed-copy"',
  'class="grok-bot-eyes"',
  "seat-wrap",
  "data-seat=",
  "data-blurb=",
  'src="/fleet/01.png"',
  'src="/fleet/09.png"',
  'property="og:url" content="https://akashnaren.github.io/bot"',
  "<title>Profile Assistant</title>",
  "Profile Assistant, a grok bot. I manage this site.",
  ...fleetSrcs.map((src) => `src="${src}"`),
];

for (const page of [botHtml, botRoot]) {
  const missingBot = botRequired.filter((needle) => !page.includes(needle));
  if (missingBot.length > 0) {
    console.error("bot page is missing required copy:");
    for (const needle of missingBot) console.error(`  - ${needle}`);
    process.exit(1);
  }

  const botFleet = fleetSrcs.filter((src) => page.includes(`src="${src}"`));
  if (botFleet.length !== 9) {
    console.error("bot page must include all nine unlabeled fleet marks");
    process.exit(1);
  }

  if (
    /Tesla/.test(page) ||
    /tesla\.com/.test(page) ||
    /engineer\s*@/i.test(page) ||
    /Redwood City/.test(page) ||
    /Raytheon/.test(page) ||
    /NASA/.test(page)
  ) {
    console.error("bot page must not carry Tesla or home bio copy");
    process.exit(1);
  }

  if (
    page.includes('class="sky"') ||
    page.includes('class="system"') ||
    page.includes('class="well"') ||
    page.includes("well-canvas")
  ) {
    console.error("bot page must not keep the solar system or the well");
    process.exit(1);
  }

  if (page.includes("akashnaren@gmail.com") || page.includes("human-mail")) {
    console.error("bot page should omit Gmail; it stays on home");
    process.exit(1);
  }

  if (
    /job assistant/i.test(page) ||
    /startup advisor/i.test(page) ||
    /looking for a job/i.test(page) ||
    /job search/i.test(page)
  ) {
    console.error("bot page must not name Job Assistant, Startup Advisor, or job-hunt");
    process.exit(1);
  }

  if (page.includes('class="page fleet"')) {
    console.error(
      "bot page root must be .page.profile, never .page.fleet — that class collides with the face cluster and crushes the room into a skinny strip",
    );
    process.exit(1);
  }

  if (page.includes('class="him"') || page.includes('class="panel"')) {
    console.error("bot page must not reuse the home him/panel split");
    process.exit(1);
  }

  if (page.includes('class="work"')) {
    console.error("bot page must not keep the vertical work bio stack");
    process.exit(1);
  }

  const faceCount = (page.match(/class="face"/g) ?? []).length;
  if (faceCount !== 9) {
    console.error(`bot page must paint nine planetarium faces, found ${String(faceCount)}`);
    process.exit(1);
  }

  if (page.includes('class="crew-grid"') || page.includes('class="board-split"') || page.includes('class="tile"')) {
    console.error("bot page must not keep the stretching 3×3 crew grid");
    process.exit(1);
  }

  if (!page.includes("profile assistant")) {
    console.error("bot page must name profile assistant as the seat that keeps the site");
    process.exit(1);
  }

  if (
    page.includes("we keep his profiles") ||
    page.includes("we research, draft, and watch") ||
    page.includes(" fleet for akash.")
  ) {
    console.error("bot fleet page must not keep the meek research/draft watch line");
    process.exit(1);
  }

  if (
    page.includes("fleet that manages") ||
    page.includes("managed by the fleet") ||
    page.includes("we run the site") ||
    page.includes("we manage the site") ||
    page.includes("we're akash") ||
    page.includes("we ship his") ||
    page.includes("fleet for akash")
  ) {
    console.error("bot page must speak as profile assistant, and must not say the fleet manages the site");
    process.exit(1);
  }

  if (!page.includes("by grok") && !page.includes("by <a")) {
    console.error("bot page must keep a real space in managed-by");
    process.exit(1);
  }

  if (!/class="write"[\s\S]{0,800}mailto:apn@agentmail\.to/.test(page)) {
    console.error("bots' inbox must sit in the write block");
    process.exit(1);
  }

  if (
    !page.includes(
      '<span class="inbox-label">bots\' email</span><a class="inbox-address" href="mailto:apn@agentmail.to">apn@agentmail.to</a>',
    )
  ) {
    console.error(
      "bot inbox must keep a separate bots' email label and mailto address, never one jammed string",
    );
    process.exit(1);
  }

  if (page.includes("write the bots") || page.includes("botsapn")) {
    console.error("bot inbox must not keep the old write-the-bots label or botsapn jam");
    process.exit(1);
  }

  if (/class="crew-sky"[\s\S]{0,4000}mailto:apn@agentmail\.to/.test(page)) {
    console.error("bots' inbox belongs in the write block, not the planetarium");
    process.exit(1);
  }

  if (!/\/assets\/index-[^"]+\.js/.test(page)) {
    console.error("bot page must reference hashed /assets/index-*.js");
    process.exit(1);
  }

  if (/279M|Longest Streak|Current Streak|15 agents/i.test(page) || page.includes("tokens")) {
    console.error("bot page must not invent Cursor token or streak stats");
    process.exit(1);
  }

  if (/\bprofessor\b/i.test(page)) {
    console.error("bot page must not name professor");
    process.exit(1);
  }
}

for (const page of [spa, spaRoot]) {
  if (!page.includes('<div id="holder"></div>')) {
    console.error("404.html must keep an empty #holder so the SPA can route");
    process.exit(1);
  }
  if (!/\/assets\/index-[^"]+\.js/.test(page)) {
    console.error("404.html must reference hashed /assets/index-*.js");
    process.exit(1);
  }
  if (page.includes('class="page"') || page.includes('class="sky"')) {
    console.error("404.html must not pre-paint home or the bot page");
    process.exit(1);
  }
}

if (!existsSync("dist/.nojekyll") && !existsSync(".nojekyll")) {
  console.error("Pages fallback needs .nojekyll");
  process.exit(1);
}

if (
  !/\.page\.profile\s+\.stage\{[^}]*display:flex/.test(css) &&
  !/\.page\.profile\s+\.stage\s*\{[^}]*display:\s*flex/.test(css)
) {
  console.error("stylesheet must keep /bot as a flex board, not the home two-column grid");
  process.exit(1);
}

if (/\.page\.fleet[\s{,]/.test(css)) {
  console.error("stylesheet must not put fleet sizing on the page root");
  process.exit(1);
}

if (
  !js.includes("is-on") ||
  !js.includes("aria-pressed") ||
  !js.includes("brief-copy") ||
  !js.includes("pick a seat") ||
  !js.includes("lead-mark") ||
  !js.includes("--aim")
) {
  console.error("script must bind planetarium face selection into the reserved brief slot and aim the spoke");
  process.exit(1);
}

console.log(
  "dist/index.html has the two-column split, type above a first-paint solar system, no job-title line, HF+Kaggle marks, locked copy, both labeled mailtos, spaced managed-by line to /bot, nine unlabeled faces, overflow-hidden 100dvh, dark color-scheme, text-size-adjust 100%, and hashed Pages assets. /bot is a full-viewport planetarium crew with a reserved brief slot and a 404 SPA fallback.",
);
