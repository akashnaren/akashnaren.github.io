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

const homeFleetSrcs = fleetSrcs.filter((src) => src !== "/fleet/01.png");

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
  'class="fleet-face"',
  'class="fleet-face is-host"',
  "fleet-wrap",
  'class="fleet-tip"',
  'class="fleet-invite"',
  "click on any bot",
  "nine grok bots, more coming.",
  'class="him"',
  'class="panel"',
  'class="fact"',
  'name="twitter:card"',
  'property="og:url" content="https://akashnaren.github.io/"',
  'name="theme-color" content="#0a0a0a"',
  ...homeFleetSrcs.map((src) => `src="${src}"`),
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
  "article writer",
  "Systems Engineer",
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

const fleetHits = homeFleetSrcs.filter((src) => html.includes(`src="${src}"`));
if (fleetHits.length !== 8) {
  console.error("dist/index.html must include the eight non-host unlabeled fleet marks");
  process.exit(1);
}

if (html.includes('src="/fleet/01.png"')) {
  console.error("home host seat must be the glancing grok SVG, not /fleet/01.png");
  process.exit(1);
}

if (
  !/class="fleet-face is-host"[\s\S]{0,900}grok-bot-eyes/.test(html) ||
  !/class="fleet-face is-host"[\s\S]{0,900}fleet-wrap/.test(html)
) {
  console.error("home host fleet face must keep the glancing grok-bot SVG");
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

const seatNames = [
  "profile assistant",
  "software engineer",
  "research advisor",
  "chief of staff",
  "secretary",
  "chief financial officer",
  "finance engineer",
  "product engineer",
  "agent master",
];

function assertHomeFleetInvite(page, label) {
  if (!page.includes("click on any bot") || !page.includes('class="fleet-invite"')) {
    console.error(`${label} must keep the quiet click on any bot invite`);
    process.exit(1);
  }
  if (!page.includes('<p class="fleet-invite"><a href="/bot">click on any bot</a></p>')) {
    console.error(`${label} must hyperlink the fleet invite to /bot`);
    process.exit(1);
  }

  const faces = [...page.matchAll(/<a class="fleet-face[^"]*"[^>]*>/g)].map((match) => match[0]);
  if (faces.length !== 9) {
    console.error(`${label} must wrap all nine fleet faces as /bot links, found ${String(faces.length)}`);
    process.exit(1);
  }

  for (const name of seatNames) {
    const face = faces.find(
      (markup) =>
        markup.includes('href="/bot"') &&
        markup.includes(`title="${name}"`) &&
        markup.includes(`aria-label="${name}"`),
    );
    if (!face) {
      console.error(`${label} must title and aria-label a /bot fleet face as ${name}`);
      process.exit(1);
    }
    if (!page.includes(`<span class="fleet-tip" aria-hidden="true">${name}</span>`)) {
      console.error(`${label} must keep a quiet fleet tip for ${name}`);
      process.exit(1);
    }
  }

  const him = page.match(/<main class="him">[\s\S]*?<\/main>/)?.[0] ?? "";
  if (seatNames.some((name) => him.includes(name))) {
    console.error(`${label} must not name seats in the him column`);
    process.exit(1);
  }
}

assertHomeFleetInvite(html, "dist/index.html");
assertHomeFleetInvite(root, "root index.html");

if (html.includes("https://x.ai/bot/marketplace") || root.includes("https://x.ai/bot/marketplace")) {
  console.error("home must not carry the grok bot marketplace link; that sits on /bot");
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

if (!/class="panel"[\s\S]{0,8000}mailto:apn@agentmail\.to/.test(html)) {
  console.error("Agent inbox must stay in the fleet panel");
  process.exit(1);
}

if (/class="panel"[\s\S]{0,8000}akashnaren@gmail\.com/.test(html)) {
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
  /\.page\.profile[^{]*\{[^}]*width:\s*100vw/.test(css) ||
  /\.page\.profile\{[^}]*width:100vw/.test(css)
) {
  console.error("/bot page must not force 100vw — the roster sits in a centered stage");
  process.exit(1);
}

if (
  !/\.page\.profile\s+\.stage\{[^}]*max-width:\s*46rem/.test(css) &&
  !/\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*46rem/.test(css) &&
  !/\.page\.profile\s+\.stage\{[^}]*max-width:46rem/.test(css)
) {
  console.error("/bot stage must use a 46rem readable max-width, matching home density");
  process.exit(1);
}

if (
  /\.page\.profile\s+\.stage\{[^}]*max-width:100vw/.test(css) ||
  /\.page\.profile\s+\.stage\s*\{[^}]*max-width:\s*100vw/.test(css)
) {
  console.error("/bot stage must not span 100vw — no full-bleed planetarium room");
  process.exit(1);
}

if (!css.includes(".roster") || !css.includes(".row") || !css.includes(".brief")) {
  console.error("stylesheet must keep the roster table (roster, row, brief)");
  process.exit(1);
}

if (
  css.includes(".crew-sky") ||
  css.includes(".plinth") ||
  css.includes(".orbit") ||
  css.includes(".spoke") ||
  css.includes(".face-mark") ||
  css.includes(".lead-mark")
) {
  console.error("stylesheet must not keep planetarium chrome (crew-sky, plinth, orbit, spoke, faces)");
  process.exit(1);
}

if (css.includes("@property --aim") || css.includes("--aim")) {
  console.error("stylesheet must not keep the planetarium spoke --aim property");
  process.exit(1);
}

if (!css.includes(".inbox-tip")) {
  console.error("stylesheet must keep the bots' email tooltip");
  process.exit(1);
}

if (!css.includes(".fleet-face") || !css.includes(".fleet-tip") || !css.includes(".fleet-invite")) {
  console.error("stylesheet must keep home fleet face links, name tips, and the invite line");
  process.exit(1);
}

if (
  !css.includes(".fleet-face:hover .fleet-tip") ||
  !css.includes(".fleet-face:focus-visible .fleet-tip")
) {
  console.error("stylesheet must show fleet name tips on hover and focus-visible");
  process.exit(1);
}

if (!/@keyframes\s+fleet-idle/.test(css) || !css.includes("fleet-idle")) {
  console.error("stylesheet must keep a quiet staggered fleet idle");
  process.exit(1);
}

if (!/@keyframes\s+grok-glance/.test(css) || !css.includes("grok-glance")) {
  console.error("stylesheet must keep the grok-bot eye glance");
  process.exit(1);
}

if (!css.includes(".market")) {
  console.error("stylesheet must keep the quiet grok bot marketplace line");
  process.exit(1);
}

if (css.includes("8.2vw") || css.includes("min-height:58vh") || css.includes("height:62vh")) {
  console.error("/bot must not keep the planetarium viewport face sizing");
  process.exit(1);
}

if (css.includes(".crew-grid") || css.includes(".board-split") || css.includes(".tile-face")) {
  console.error("stylesheet must not keep the stretching 3×3 crew grid");
  process.exit(1);
}

if (
  !/\.row[^{]*\{[^}]*transition:/.test(css) &&
  !/\.row\{[^}]*transition:/.test(css)
) {
  console.error("/bot rows must keep a restrained hover/focus transition");
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

if (
  !css.includes("line-clamp:3") &&
  !css.includes("line-clamp: 3") &&
  !css.includes("-webkit-line-clamp:3") &&
  !css.includes("-webkit-line-clamp: 3") &&
  !css.includes("line-clamp:2") &&
  !css.includes("line-clamp: 2") &&
  !css.includes("-webkit-line-clamp:2") &&
  !css.includes("-webkit-line-clamp: 2")
) {
  console.error("brief copy must clamp so longer blurbs cannot grow the reserved slot");
  process.exit(1);
}

if (css.includes(".crew-sky")) {
  console.error("/bot must not keep a crew-sky planetarium field");
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
  "grok bot collection",
  "profile assistant",
  "software engineer",
  "research advisor",
  "chief of staff",
  "secretary",
  "chief financial officer",
  "finance engineer",
  "product engineer",
  "agent master",
  "i keep his public profiles tidy and ship this site",
  "i live in the diffs",
  "i read the papers and bring back the parts that matter",
  "i keep the nine on the clock",
  "i send only when he says so",
  "tap the glass when it runs hot",
  "small trading experiments",
  "i file the sharp corners until the product feels finished",
  "i build grok bots like these. seats stay tight",
  "bots' email",
  "the agents' inbox — not his personal Gmail",
  'class="inbox-tip"',
  'role="tooltip"',
  'class="inbox-label"',
  'class="inbox-address"',
  "https://x.ai/bot",
  "https://x.ai/bot/marketplace",
  "browse and add grok bots",
  'class="market"',
  "grok bot",
  "this site is managed by",
  "mailto:apn@agentmail.to",
  "apn@agentmail.to",
  "nine grok bots, more coming.",
  'class="page profile"',
  'class="mast"',
  'class="rail"',
  'class="write"',
  'class="board"',
  'data-cycle="3000"',
  'class="roster"',
  'class="row',
  'class="row-face"',
  'class="row-name"',
  'class="row-blurb"',
  'class="brief',
  'class="brief-name"',
  'class="brief-copy"',
  'class="foot"',
  'class="inbox',
  'class="managed-copy"',
  'class="grok-bot-eyes"',
  "seat-wrap",
  "data-seat=",
  "data-blurb=",
  'src="/fleet/01.png"',
  'src="/fleet/09.png"',
  'property="og:url" content="https://akashnaren.github.io/bot"',
  "<title>grok bot collection</title>",
  "Nine grok bots. A quiet collection.",
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
    page.includes('class="well"') ||
    page.includes("well-canvas") ||
    page.includes('class="system"') ||
    page.includes('class="plinth"') ||
    page.includes('class="orbit"') ||
    page.includes('class="spoke"') ||
    page.includes('class="crew-sky"') ||
    page.includes('class="face"') ||
    page.includes('class="lead-mark"') ||
    page.includes('class="lead"')
  ) {
    console.error("bot page must not keep the planetarium, solar plinth, or home sky");
    process.exit(1);
  }

  if (
    page.includes("https://github.com/akashnaren") ||
    page.includes("https://cursor.com/@akashpn") ||
    page.includes("https://x.com/akashpn") ||
    page.includes('class="profile-links"')
  ) {
    console.error("bot page must not keep github / cursor / x links in the footer");
    process.exit(1);
  }

  if (page.includes("<title>Profile Assistant</title>") || page.includes(">profile assistant<span")) {
    console.error("bot page top title must be grok bot collection, not Profile Assistant");
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

  const rowCount = (page.match(/<button[^>]*class="row/g) ?? []).length;
  if (rowCount !== 9) {
    console.error(`bot page must paint nine roster rows, found ${String(rowCount)}`);
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
    !page.includes('<span class="inbox-label">bots\' email</span>') ||
    !page.includes('class="inbox-address"') ||
    !page.includes('href="mailto:apn@agentmail.to"') ||
    !page.includes(">apn@agentmail.to</a>")
  ) {
    console.error(
      "bot inbox must keep a separate bots' email label and mailto address, never one jammed string",
    );
    process.exit(1);
  }

  if (
    !page.includes('class="inbox-tip"') ||
    !page.includes("the agents' inbox — not his personal Gmail")
  ) {
    console.error("bot inbox must tooltip that apn@agentmail.to is the agents' inbox, not his Gmail");
    process.exit(1);
  }

  if (page.includes("write the bots") || page.includes("botsapn")) {
    console.error("bot inbox must not keep the old write-the-bots label or botsapn jam");
    process.exit(1);
  }

  if (/class="roster"[\s\S]{0,4000}mailto:apn@agentmail\.to/.test(page)) {
    console.error("bots' inbox belongs in the write block, not the roster");
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

if (
  !/\.page\.profile\s+\.stage\{[^}]*align-items:\s*stretch/.test(css) &&
  !/\.page\.profile\s+\.stage\s*\{[^}]*align-items:\s*stretch/.test(css)
) {
  console.error(
    "/bot stage must align-items:stretch so the home 880px align-items:start rule cannot shrink-wrap the crew into a left column",
  );
  process.exit(1);
}

if (
  !/\.board\s*\{[^}]*width:\s*100%/.test(css) &&
  !/\.board\{[^}]*width:100%/.test(css)
) {
  console.error("/bot board must be width:100% so the roster can span the stage");
  process.exit(1);
}

if (
  !/\.roster\s*\{[^}]*width:\s*100%/.test(css) &&
  !/\.roster\{[^}]*width:100%/.test(css)
) {
  console.error("/bot roster must be width:100% so rows are not a left widget");
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
  !js.includes("is-swap")
) {
  console.error("script must bind roster row selection into the reserved brief slot with a crossfade");
  process.exit(1);
}

if (js.includes("lead-mark") || js.includes("--aim") || js.includes("crew-sky")) {
  console.error("script must not keep planetarium aim, lead, or sky binding");
  process.exit(1);
}

if (!js.includes("3000") || (!js.includes("setInterval") && !js.includes("setTimeout"))) {
  console.error("script must auto-cycle seats every 3000ms");
  process.exit(1);
}

console.log(
  "dist/index.html has the two-column split, type above a first-paint solar system, no job-title line, HF+Kaggle marks, locked copy, both labeled mailtos, spaced managed-by line to /bot, nine /bot fleet faces with seat-name tips, a glancing host SVG, a staggered CSS idle, a click-on-any-bot invite, overflow-hidden 100dvh, dark color-scheme, text-size-adjust 100%, and hashed Pages assets. /bot is a centered grok bot collection roster with a 46rem stage, 3s auto-cycle, brief crossfade, email tooltip, and no footer socials.",
);
