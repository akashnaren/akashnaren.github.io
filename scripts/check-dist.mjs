import { existsSync, readdirSync, readFileSync } from "node:fs";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function read(path) {
  if (!existsSync(path)) fail(`missing ${path}`);
  return readFileSync(path, "utf8");
}

function mustInclude(page, needles, label) {
  const missing = needles.filter((needle) => !page.includes(needle));
  if (missing.length === 0) return;
  console.error(`${label} is missing:`);
  for (const needle of missing) console.error(`  - ${needle}`);
  process.exit(1);
}

function mustExclude(page, needles, label) {
  const leaked = needles.filter((needle) =>
    needle instanceof RegExp ? needle.test(page) : page.includes(needle),
  );
  if (leaked.length === 0) return;
  console.error(`${label} contains forbidden copy:`);
  for (const needle of leaked) console.error(`  - ${String(needle)}`);
  process.exit(1);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** The link icon sits inside the same anchor as the label. */
function mustIconInside(page, href, label, where) {
  const re = new RegExp(
    `<a href="${escapeRegExp(href)}"[^>]*>${escapeRegExp(label)}<svg class="ext"[\\s\\S]*?</svg></a>`,
  );
  if (!re.test(page)) {
    fail(`${where}: "${label}" (${href}) must include the link icon inside the same anchor`);
  }
}

function same(left, right) {
  if (!existsSync(left) || !existsSync(right)) fail(`missing pair ${left} / ${right}`);
  const a = readFileSync(left);
  const b = readFileSync(right);
  if (!a.equals(b)) fail(`${left} and ${right} differ`);
}

const leakNeedles = [
  /job assistant/i,
  /startup advisor/i,
  /travel assistant/i,
  /looking for a job/i,
  "MiniShop",
  "harness",
  "bc-",
  "bygrok",
  "tailscale",
  "Tailscale",
  ".ts.net",
  "192.168.",
  "10.0.0.",
  "100.64.",
  "P2S",
  /fishbowl/i,
  /raspberry pi/i,
];

/** Research titles name the Raspberry Pi mesh. That phrase stays off the other pages. */
const researchLeakNeedles = leakNeedles.filter(
  (needle) => !(needle instanceof RegExp && needle.source === "raspberry pi"),
);

const home = read("dist/index.html");
const bot = read("dist/bot/index.html");
const research = read("dist/research/index.html");
const essay = read("dist/research/agent-native-ui/index.html");
const piPaperPage = read("dist/research/pi-0.2-high/index.html");
const spa = read("dist/404.html");

for (const [dist, root] of [
  ["dist/index.html", "index.html"],
  ["dist/bot/index.html", "bot/index.html"],
  ["dist/research/index.html", "research/index.html"],
  ["dist/research/agent-native-ui/index.html", "research/agent-native-ui/index.html"],
  ["dist/research/pi-0.2-high/index.html", "research/pi-0.2-high/index.html"],
  ["dist/research/pi-0.2-high/paper.pdf", "research/pi-0.2-high/paper.pdf"],
  ["public/research/pi-0.2-high/paper.pdf", "dist/research/pi-0.2-high/paper.pdf"],
  ["dist/404.html", "404.html"],
  ["dist/robots.txt", "robots.txt"],
  ["dist/sitemap.xml", "sitemap.xml"],
  ["public/robots.txt", "dist/robots.txt"],
  ["public/sitemap.xml", "dist/sitemap.xml"],
]) {
  same(dist, root);
}

mustInclude(
  home,
  [
    "Akash Premkumar",
    'class="page home"',
    '<h2 id="work">Work</h2>',
    "Vehicle Service (Internal Tooling, Diagnostics, Telemetry, Data Analysis)",
    "Vehicle Engineering (Part Data Hub, ",
    "https://www.tesla.com/",
    ">Tesla</a>",
    "https://www.tesla.com/robotaxi",
    ">Cybercab + Robotaxi Program</a>",
    "https://grok.com",
    ">Grok</a> Integrations)",
    "https://www.rtx.com/raytheon",
    ">Raytheon</a>",
    "Avionics Networking Test Suite",
    "NASA L’SPACE — Project Engineer",
    '<h2 id="research">Research</h2>',
    "Multiscale Flow Physics Lab, UC San Diego",
    "https://asanchez.ucsd.edu/research/reactive-flows/",
    ">Multiscale Flow Physics Lab, UC San Diego</a>",
    ">Independent work",
    '<h2 id="profiles">Profiles</h2>',
    ">GitHub</span>",
    ">LinkedIn</span>",
    ">X</span>",
    ">Cursor</span>",
    ">Hugging Face</span>",
    ">Kaggle</span>",
    '<h2 id="mail">Mail</h2>',
    "Managed by ",
    ">Grok Bot<svg",
    "Tesla — Vehicle Service (Internal Tooling, Diagnostics, Telemetry, Data Analysis). Tesla — Vehicle Engineering (Part Data Hub, Cybercab + Robotaxi Program, Grok Integrations). Raytheon — Avionics Networking Test Suite. NASA L’SPACE — Project Engineer. Multiscale Flow Physics Lab, UC San Diego, and independent work.",
    "https://github.com/akashnaren",
    "https://www.linkedin.com/in/akash-premkumar-39826b1b7/",
    "https://x.com/akashpn",
    "https://cursor.com/@akashpn",
    "https://huggingface.co/akashnaren",
    "https://www.kaggle.com/akashpnaren",
    'src="/marks/github.svg"',
    'src="/marks/cursor.svg"',
    "mailto:akashnaren@gmail.com",
    "akashnaren@gmail.com",
    "mailto:apn@agentmail.to",
    "apn@agentmail.to",
    "bots' inbox",
    'href="/bot"',
    'class="managed-copy"',
    'class="foot home-foot"',
    'href="/research"',
    'name="theme-color" content="#0a0a0a"',
    "family=Geist",
  ],
  "home",
);

mustExclude(
  home,
  [
    ...leakNeedles,
    'class="sky"',
    'class="system"',
    "orbit-spin",
    "ten grok bots",
    "Ten grok bots",
    "fourteen grok bots",
    "Fourteen grok bots",
    'class="fleet"',
    'class="fleet-face"',
    "new today",
    "data-posted",
    "still researching",
    "profile engineer",
    "software engineer",
    "secretary",
    "chief financial officer",
    "finance engineer",
    "integration engineer",
    ">optimus</a>",
    ">grok</a>",
    ">robotaxi</a>",
    "full stack applications",
    "I work on",
    "og:image",
    "#e3925a",
    "noindex",
    'class="rack"',
    "Pi 0.2 High",
    "Redwood City",
    "I live in",
    "Interests",
    "Academia",
    "CS and Math",
    "Collins",
    "fire-whirl",
    'class="bio"',
    'class="page-link"',
    "Optimus",
    "tesla.com/AI",
    "Bill of Materials",
    "Fullstack Applications",
    "Vehicle Service Systems",
    "this site is managed by",
    "grok bot",
    "Fire whirl",
    "fire whirl",
    'class="managed byline"',
  ],
  "home",
);

if (!home.includes("by grok") && !home.includes("by <a")) {
  fail("home must keep a real space before grok bot");
}
mustIconInside(home, "/research", "Independent work", "home");
mustIconInside(home, "/bot", "Grok Bot", "home");
if (/>(?:Tesla|Cybercab \+ Robotaxi Program|Grok|Raytheon|Multiscale Flow Physics Lab, UC San Diego)<svg class="ext"/.test(home)) {
  fail("biography links must stay unmarked");
}
if (/<a[^>]*>[^<]*NASA/.test(home)) fail("NASA L’SPACE stays unlinked");
if (/target="_blank"/.test(home)) fail("home links stay in the same tab");
for (const plain of ["Part Data Hub", "Internal Tooling", "Diagnostics", "Telemetry", "Data Analysis"]) {
  if (new RegExp(`<a[^>]*>[^<]*${plain}`).test(home)) {
    fail(`${plain} stays plain text`);
  }
}
const homeSections = home.match(/<section class="section"/g) ?? [];
if (homeSections.length !== 4) {
  fail(`home must have Work, Research, Profiles, and Mail sections, found ${String(homeSections.length)}`);
}
const sectionOrder = ["work", "research", "profiles", "mail"].map((id) => home.indexOf(`id="${id}"`));
if (sectionOrder.some((at) => at < 0) || sectionOrder.some((at, i) => i > 0 && at < sectionOrder[i - 1])) {
  fail("home sections must run Work, Research, Profiles, Mail");
}
const homeHeader = home.match(/<header>[\s\S]*?<\/header>/)?.[0] ?? "";
if (/managed|Grok Bot|grok bot/i.test(homeHeader)) {
  fail("home header must not include the Grok Bot line");
}
if ((home.match(/>Grok Bot</g) ?? []).length !== 1) {
  fail("home keeps a single Managed by Grok Bot cue in the footer");
}
if (!home.includes('class="foot home-foot"') || !/class="foot home-foot"[\s\S]*Managed by /.test(home)) {
  fail("home footer must keep Managed by Grok Bot");
}
if (!/\/assets\/index-[^"]+\.js/.test(home)) fail("home must reference hashed /assets/index-*.js");
if (home.includes("/src/main.ts")) fail("built home must not be the Vite shell");

const seats = [
  ["profile-lead", "profile lead", "i keep his profiles and ship this site."],
  ["software-engineer", "software engineer", "quiet diffs. a clean compile."],
  ["research-engineer", "research engineer", "i read the papers that matter."],
  ["chief-executive-officer", "chief executive officer", "i keep the work moving."],
  ["executive-secretary", "executive secretary", "i keep the notes in order."],
  ["chief-financial-officer", "chief financial officer", "i stay even."],
  ["finance-engineer", "finance engineer", "i keep the sheets in order."],
  ["product-engineer", "product engineer", "i file what ships."],
  ["chief-technical-officer", "chief technical officer", "i build grok bots like these."],
  ["integration-engineer", "integration engineer", "i wrap apis into quiet plugins."],
  ["imagine-engineer", "imagine engineer", "i turn big ideas into something you can build."],
  ["social-lead", "social lead", "i find the events worth showing up for."],
  ["storage-engineer", "storage engineer", "i keep the disk honest."],
  ["triage-engineer", "triage engineer", "i sort what lands first."],
];

mustInclude(
  bot,
  [
    "<title>grok bot collection</title>",
    '<meta name="description" content="fourteen grok bots, more coming." />',
    '<meta property="og:description" content="fourteen grok bots, more coming." />',
    '<meta name="twitter:description" content="fourteen grok bots, more coming." />',
    '<p class="count">fourteen grok bots, more coming.</p>',
    'class="page profile"',
    'class="roster"',
    "this site is managed by",
    'href="/bot"',
    ">grok bot<svg",
    "mailto:apn@agentmail.to",
    "bots' inbox",
    "the agents' inbox — not his personal Gmail",
    ...seats.flatMap(([id, name, blurb]) => [
      `data-seat="${id}"`,
      `data-name="${name}"`,
      `>${name}</span>`,
      blurb,
    ]),
    ...Array.from({ length: 14 }, (_, i) => `src="/fleet/${String(i + 1).padStart(2, "0")}.png"`),
  ],
  "bot",
);

const rowCount = (bot.match(/<li class="row"/g) ?? []).length;
if (rowCount !== 14) fail(`bot roster must list fourteen seats, found ${String(rowCount)}`);
if (/>secretary</.test(bot)) fail("the notes seat is executive secretary");
if (bot.includes("profile engineer")) fail("profile engineer was renamed to profile lead");
mustIconInside(bot, "/bot", "grok bot", "bot");

mustExclude(
  bot,
  [
    ...leakNeedles,
    "Tesla",
    "tesla.com",
    "Redwood City",
    "Raytheon",
    "Ten grok bots. A quiet collection.",
    "ten grok bots",
    "Job Assistant",
    "New Bot",
    "All Hands",
    "Application Team",
    "Finance Team",
    "Executive Team",
    "Operations Team",
    "Social Team",
    "desk",
    "glass",
    "models",
    'class="sky"',
    "akashnaren@gmail.com",
    "noindex",
    'class="rack"',
    "Pi 0.2 High",
  ],
  "bot",
);

mustInclude(
  research,
  [
    "<title>Research</title>",
    "Local language-model chat on a Raspberry Pi mesh, structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.",
    "Raspberry Pi Inference Mesh",
    'href="/research/pi-0.2-high/paper.pdf"',
    "I am running local language-model chat on a Raspberry Pi mesh.",
    "Structured Views for Agent-Native UIs",
    'href="/research/agent-native-ui/paper.pdf"',
    "ARC-AGI and Hallucination Risk",
    "Entity Investigation Across Fragmented Records",
    'href="https://temporal-buddies5.vercel.app/"',
    'href="https://www.meetlavalamp.com/"',
    ">Temporal<svg",
    ">Lavalamp<svg",
    'class="ext"',
    "rel=\"noopener noreferrer\"",
    "screenshots or a flat accessibility tree",
    "ARC-AGI-1",
    "fragmented records",
    "this site is managed by",
    'href="/bot"',
    'class="thread"',
  ],
  "research",
);

const articles = research.match(/<article class="thread"[\s\S]*?<\/article>/g) ?? [];
if (articles.length !== 4) fail(`research must list four threads, found ${String(articles.length)}`);
const piThread = articles[0] ?? "";
if (!piThread.includes("Raspberry Pi Inference Mesh")) {
  fail("Raspberry Pi Inference Mesh must be the first research thread");
}
if (!piThread.includes('href="/research/pi-0.2-high/paper.pdf"')) {
  fail("Pi 0.2 High title must open the PDF directly");
}
const arc = articles.find((article) => article.includes("ARC-AGI and Hallucination Risk")) ?? "";
if (arc.includes("<a ")) fail("ARC-AGI thread must not invent a link");
if (!articles.some((article) => article.includes('href="/research/agent-native-ui/paper.pdf"') && article.includes("Structured Views for Agent-Native UIs"))) {
  fail("agent-native title must open the PDF directly");
}
mustIconInside(research, "/bot", "grok bot", "research");
mustIconInside(
  research,
  "/research/pi-0.2-high/paper.pdf",
  "Raspberry Pi Inference Mesh",
  "research",
);
mustIconInside(
  research,
  "/research/agent-native-ui/paper.pdf",
  "Structured Views for Agent-Native UIs",
  "research",
);
const entity = articles.find((article) => article.includes("Entity Investigation Across Fragmented Records")) ?? "";
const entityHeading = entity.match(/<h2>[\s\S]*?<\/h2>/)?.[0] ?? "";
if (entityHeading !== "<h2>Entity Investigation Across Fragmented Records</h2>") {
  fail("entity investigation title must stay plain text");
}
if (!entity.includes("I am looking at how to reason over fragmented records and link events to the right address over time.")) {
  fail("entity investigation blurb changed");
}
if (/paper\.pdf/i.test(entity)) fail("entity investigation must not link a paper PDF");
const entityAnchors = entity.match(/<a /g) ?? [];
if (entityAnchors.length !== 2) {
  fail(`entity investigation must show exactly two sub-links, found ${String(entityAnchors.length)}`);
}
mustIconInside(
  entity,
  "https://temporal-buddies5.vercel.app/",
  "Temporal",
  "entity investigation",
);
mustIconInside(
  entity,
  "https://www.meetlavalamp.com/",
  "Lavalamp",
  "entity investigation",
);
if (articles.some((article) => article !== entity && /lavalamp|meetlavalamp|temporal-buddies/i.test(article))) {
  fail("Temporal and Lavalamp must stay under the entity investigation thread");
}
if (arc.includes('class="ext"')) fail("ARC-AGI thread must not show a link icon");
for (const article of articles) {
  if (article.includes('class="status"') || article.includes("exploring") || article.includes("drafting")) {
    fail("model threads must not carry status or exploring tags");
  }
}

mustExclude(
  research,
  [
    ...researchLeakNeedles,
    "still researching",
    "exploring",
    "drafting",
    "three-node",
    "Three-Node",
    "pi rack",
    "Pi PAIR",
    'class="rack"',
    "data-bay",
    "status.json",
    "/research/rack",
    "new today",
    "data-posted",
    'class="status"',
    'class="thread-link"',
    ">read</a>",
    ">flow</a>",
    ">mesh</a>",
    ">code</a>",
    ">demo</a>",
    "ten grok bots",
    "fourteen grok bots",
    "noindex",
    "/research/fishbowl/",
    "OpenAI-style route",
  ],
  "research",
);

mustInclude(
  essay,
  [
    'http-equiv="refresh"',
    "/research/agent-native-ui/paper.pdf",
    "location.replace",
    "data-cf-beacon",
  ],
  "essay redirect",
);
if (essay.includes('class="essay-pdf"') || essay.includes("<iframe") || essay.includes("still researching")) {
  fail("agent-native route must redirect to the PDF, not an HTML reader");
}
mustExclude(essay, leakNeedles, "essay redirect");

mustInclude(
  piPaperPage,
  [
    'http-equiv="refresh"',
    "/research/pi-0.2-high/paper.pdf",
    "location.replace",
    "Raspberry Pi Inference Mesh",
    "data-cf-beacon",
  ],
  "pi paper redirect",
);
if (piPaperPage.includes('class="essay-pdf"') || piPaperPage.includes('class="rack"') || piPaperPage.includes("<iframe")) {
  fail("pi paper route must redirect to the PDF, not a viewer or a rack");
}
mustExclude(piPaperPage, researchLeakNeedles, "pi paper redirect");

for (const [page, label] of [
  [home, "home"],
  [bot, "bot"],
  [research, "research"],
  [essay, "essay redirect"],
  [piPaperPage, "pi paper redirect"],
  [spa, "404"],
]) {
  if (/<iframe/i.test(page)) fail(`${label} must not embed a paper in an iframe`);
}

mustInclude(spa, ['<div id="holder"></div>'], "404");
if (!/\/assets\/index-[^"]+\.js/.test(spa)) fail("404 must reference hashed js");
if (spa.includes('class="sky"') || spa.includes('class="bio"') || spa.includes('class="page home"')) {
  fail("404 must not pre-paint a page");
}

for (const [page, label] of [
  [home, "home"],
  [bot, "bot"],
  [research, "research"],
  [spa, "404"],
]) {
  if (!page.includes("static.cloudflareinsights.com/beacon.min.js") || !page.includes("data-cf-beacon")) {
    fail(`${label} must include the Cloudflare beacon`);
  }
}

const favicon = read("dist/favicon.svg");
mustInclude(favicon, ["<title>A</title>", 'aria-label="A"', "#0a0a0a", "#fafaf7"], "favicon");
mustExclude(favicon, ["#e3925a", "#ff6b00", "rotate(-26"], "favicon");
if (!existsSync("dist/favicon-32.png") || !existsSync("dist/favicon.ico")) {
  fail("dist is missing favicon-32.png or favicon.ico");
}

const cssName = readdirSync("dist/assets").find((name) => name.endsWith(".css"));
const jsName = readdirSync("dist/assets").find((name) => name.endsWith(".js"));
if (!cssName || !jsName) fail("dist/assets is missing hashed css or js");
const css = read(`dist/assets/${cssName}`);
const js = read(`dist/assets/${jsName}`);
mustInclude(css, ["100dvh", "color-scheme:dark", "overflow-x:hidden", "Geist"], "css");
mustExclude(
  css,
  ["orbit-spin", ".sky", "grok-glance", "fleet-idle", "scope-sweep", "essay-pdf", "essay-back", ".page.essay", ".rack", "live-pulse", "@keyframes"],
  "css",
);
mustExclude(js, ["requestAnimationFrame", "setInterval", "/research/rack/status.json", "webgl", "essay-pdf", "essay-back"], "js");

const pdfs = [
  "public/research/agent-native-ui/paper.pdf",
  "dist/research/agent-native-ui/paper.pdf",
  "research/agent-native-ui/paper.pdf",
];
for (const path of pdfs) {
  if (!existsSync(path)) fail(`missing ${path}`);
  const bytes = readFileSync(path);
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") fail(`${path} is not a PDF`);
  const text = bytes.toString("latin1");
  if (/tailscale|192\.168\.|10\.0\.0\.|\.local\b|P2S/i.test(text)) {
    fail(`${path} must not carry LAN, Tailscale, or P2S`);
  }
}

for (const path of [
  "public/research/rack",
  "research/rack",
  "dist/research/rack",
  "src/rack.ts",
  "dist/research/fishbowl",
  "public/research/fishbowl",
  "research/fishbowl",
  "scripts/build-fishbowl-paper.py",
  "scripts/fishbowl-manuscript.pdf",
]) {
  if (existsSync(path)) fail(`removed path still present: ${path}`);
}

const piPdfPath = "public/research/pi-0.2-high/paper.pdf";
if (!existsSync(piPdfPath)) fail(`missing ${piPdfPath}`);
const piPdf = readFileSync(piPdfPath);
if (piPdf.subarray(0, 5).toString("latin1") !== "%PDF-") fail(`${piPdfPath} is not a PDF`);
let piJpegs = 0;
for (let at = 0; (at = piPdf.indexOf(Buffer.from([0xff, 0xd8, 0xff]), at)) !== -1; at += 3) {
  piJpegs += 1;
}
if (piJpegs < 3) fail(`pi paper should embed three photos, found ${String(piJpegs)}`);
const piPages = piPdf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g) ?? [];
if (piPages.length < 6 || piPages.length > 10) {
  fail(`pi paper should be 6–10 pages, found ${String(piPages.length)}`);
}
const piSource = read("papers/pi-0.2-high/paper.html");
mustInclude(
  piPdf.toString("latin1"),
  ["Raspberry Pi Inference Mesh"],
  "pi paper title",
);
mustExclude(
  piPdf.toString("latin1"),
  ["Three-Node Raspberry Pi Mesh"],
  "pi paper title",
);
mustInclude(
  piSource,
  [
    "Akash Premkumar",
    "qwen2.5:0.5b",
    "X-Pi-Target",
    "X-Pi-Mesh",
    "rpi-pi2",
    "rpi-pi3",
    "rpi-pi4",
    "Tailscale",
    "llama.cpp",
    "11434",
    "18080",
    "Figure 1",
    "Figure 2",
    "Figure 3",
    "figures/rack-hero.jpg",
    "figures/rack-front.jpg",
    "figures/rack-top.jpg",
    "does not fall through",
  ],
  "pi paper source",
);
mustExclude(
  piSource,
  ["Pi PAIR", "Fishbowl", "MiniShop", "Meridian", "harness", "10.0.0.", "192.168.", "AI Office", "OpenAI-style route", "OpenAI-style"],
  "pi paper source",
);

const robots = read("dist/robots.txt");
if (!robots.startsWith("User-agent:")) fail("robots.txt must start with User-agent");
if (robots.includes("<html") || robots.includes("<!DOCTYPE")) {
  fail("robots.txt must be plain text, not the HTML shell");
}
mustInclude(
  robots,
  [
    "Allow: /",
    "Allow: /bot/",
    "Allow: /research/",
    "Allow: /assets/",
    "Sitemap: https://akashnaren.github.io/sitemap.xml",
  ],
  "robots.txt",
);
mustExclude(robots, [/fishbowl/i, "Disallow: /research/fishbowl"], "robots.txt");

const sitemap = read("dist/sitemap.xml");
if (!sitemap.startsWith("<?xml")) fail("sitemap.xml must be XML");
if (sitemap.includes("<html") || sitemap.includes("<!DOCTYPE html")) {
  fail("sitemap.xml must be XML, not the HTML shell");
}
mustInclude(
  sitemap,
  [
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    "<loc>https://akashnaren.github.io/</loc>",
    "<loc>https://akashnaren.github.io/bot/</loc>",
    "<loc>https://akashnaren.github.io/research/</loc>",
    "<loc>https://akashnaren.github.io/research/pi-0.2-high/paper.pdf</loc>",
    "<loc>https://akashnaren.github.io/research/agent-native-ui/paper.pdf</loc>",
  ],
  "sitemap.xml",
);
mustExclude(
  sitemap,
  ["fishbowl", "status.json", "/research/rack"],
  "sitemap.xml",
);

console.log("dist matches the public pages, favicon, research PDF, robots.txt, and sitemap.xml.");
