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

const home = read("dist/index.html");
const bot = read("dist/bot/index.html");
const research = read("dist/research/index.html");
const essay = read("dist/research/agent-native-ui/index.html");
const spa = read("dist/404.html");

for (const [dist, root] of [
  ["dist/index.html", "index.html"],
  ["dist/bot/index.html", "bot/index.html"],
  ["dist/research/index.html", "research/index.html"],
  ["dist/research/agent-native-ui/index.html", "research/agent-native-ui/index.html"],
  ["dist/404.html", "404.html"],
  ["dist/robots.txt", "robots.txt"],
  ["dist/sitemap.xml", "sitemap.xml"],
  ["public/robots.txt", "dist/robots.txt"],
  ["public/sitemap.xml", "dist/sitemap.xml"],
  ["public/research/rack/status.json", "dist/research/rack/status.json"],
  ["dist/research/rack/status.json", "research/rack/status.json"],
]) {
  same(dist, root);
}

mustInclude(
  home,
  [
    "Akash Premkumar",
    "I live in Redwood City.",
    "I worked on vehicle service systems",
    "diagnostics",
    "telemetry",
    "data analysis for service",
    "Worked at Tesla in Redwood City on vehicle service systems",
    "Previously I worked on vehicle engineering",
    "bill of materials",
    "fullstack applications",
    "https://www.tesla.com/robotaxi",
    ">Robotaxi</a>",
    "https://www.tesla.com/AI",
    ">Optimus</a>",
    "https://grok.com",
    ">Grok</a>",
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
    'src="/marks/cursor.svg"',
    "mailto:akashnaren@gmail.com",
    "akashnaren@gmail.com",
    "mailto:apn@agentmail.to",
    "apn@agentmail.to",
    "bots' inbox",
    "this site is managed by",
    'href="/bot"',
    "grok bot",
    'class="managed-copy"',
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
  ],
  "home",
);

if (!home.includes("by grok") && !home.includes("by <a")) {
  fail("home must keep a real space before grok bot");
}
mustIconInside(home, "/research", "Research", "home");
mustIconInside(home, "/bot", "grok bot", "home");
if (/>(?:Tesla|Robotaxi|Optimus|Grok|Raytheon|fire-whirl research)<svg class="ext"/.test(home)) {
  fail("biography links must stay unmarked");
}
if (!/\/assets\/index-[^"]+\.js/.test(home)) fail("home must reference hashed /assets/index-*.js");
if (home.includes("/src/main.ts")) fail("built home must not be the Vite shell");

const seats = [
  ["profile-engineer", "profile engineer", "i keep his profiles and ship this site."],
  ["software-engineer", "software engineer", "quiet diffs. a clean compile."],
  ["research-engineer", "research engineer", "i read the papers that matter."],
  ["chief-executive-officer", "chief executive officer", "i keep the work moving."],
  ["secretary", "secretary", "i keep the notes in order."],
  ["chief-financial-officer", "chief financial officer", "i stay even."],
  ["finance-engineer", "finance engineer", "i keep the sheets in order."],
  ["product-engineer", "product engineer", "i file what ships."],
  ["chief-technical-officer", "chief technical officer", "i build grok bots like these."],
  ["integration-engineer", "integration engineer", "i wrap apis into quiet plugins."],
];

mustInclude(
  bot,
  [
    "<title>grok bot collection</title>",
    "Ten grok bots. A quiet collection.",
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
    ...Array.from({ length: 10 }, (_, i) => `src="/fleet/${String(i + 1).padStart(2, "0")}.png"`),
  ],
  "bot",
);

const rowCount = (bot.match(/<li class="row"/g) ?? []).length;
if (rowCount !== 10) fail(`bot roster must list ten seats, found ${String(rowCount)}`);
mustIconInside(bot, "/bot", "grok bot", "bot");

mustExclude(
  bot,
  [
    ...leakNeedles,
    "Tesla",
    "tesla.com",
    "Redwood City",
    "Raytheon",
    "ten grok bots, more coming",
    "Job Assistant",
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
    "Structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.",
    "Structured Views for Agent-Native UIs",
    'href="/research/agent-native-ui/paper.pdf"',
    "ARC-AGI and Hallucination Risk",
    "Entity Investigation Across Fragmented Records",
    'href="https://temporal-buddies5.vercel.app/"',
    'class="ext"',
    "rel=\"noopener noreferrer\"",
    "screenshots or a flat accessibility tree",
    "ARC-AGI-1",
    "fragmented records",
    "this site is managed by",
    'href="/bot"',
    'class="thread"',
    "Pi 0.2 High",
    'class="rack"',
    'aria-label="Pi 0.2 High"',
    'data-bay="bay-1"',
    'data-bay="bay-2"',
    'data-bay="bay-3"',
    'class="rack-name">mesh</p>',
    "Qwen mesh",
    "mesh peer",
    "local qwen2.5",
    "pi2",
  ],
  "research",
);

const articles = research.match(/<article class="thread"[\s\S]*?<\/article>/g) ?? [];
if (articles.length !== 3) fail(`research must list three threads, found ${String(articles.length)}`);
const arc = articles.find((article) => article.includes("ARC-AGI and Hallucination Risk")) ?? "";
if (arc.includes("<a ")) fail("ARC-AGI thread must not invent a link");
if (!articles.some((article) => article.includes('href="/research/agent-native-ui/paper.pdf"') && article.includes("Structured Views for Agent-Native UIs"))) {
  fail("agent-native title must open the PDF directly");
}
mustIconInside(research, "/bot", "grok bot", "research");
mustIconInside(
  research,
  "/research/agent-native-ui/paper.pdf",
  "Structured Views for Agent-Native UIs",
  "research",
);
mustIconInside(
  research,
  "https://temporal-buddies5.vercel.app/",
  "Entity Investigation Across Fragmented Records",
  "research",
);
if (arc.includes('class="ext"')) fail("ARC-AGI thread must not show a link icon");
const rackAt = research.indexOf('class="rack"');
const threadAt = research.indexOf('class="thread"');
if (rackAt < 0 || threadAt < 0 || rackAt > threadAt) {
  fail("Pi 0.2 High rack must sit above the model threads");
}
for (const article of articles) {
  if (article.includes('class="status"') || article.includes("exploring") || article.includes("drafting")) {
    fail("model threads must not carry status or exploring tags");
  }
}

mustExclude(
  research,
  [
    ...leakNeedles,
    "still researching",
    "exploring",
    "drafting",
    "pi rack",
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
    "noindex",
    "/research/fishbowl/",
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

for (const [page, label] of [
  [home, "home"],
  [bot, "bot"],
  [research, "research"],
  [essay, "essay redirect"],
  [spa, "404"],
]) {
  if (/<iframe/i.test(page)) fail(`${label} must not embed a paper in an iframe`);
}

mustInclude(spa, ['<div id="holder"></div>'], "404");
if (!/\/assets\/index-[^"]+\.js/.test(spa)) fail("404 must reference hashed js");
if (spa.includes('class="sky"') || spa.includes('class="bio"')) fail("404 must not pre-paint a page");

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
mustInclude(css, ["100dvh", "color-scheme:dark", "overflow-x:hidden", "Geist", ".rack", "live-pulse"], "css");
mustExclude(
  css,
  ["orbit-spin", ".sky", "grok-glance", "fleet-idle", "scope-sweep", "essay-pdf", "essay-back", ".page.essay"],
  "css",
);
mustInclude(js, ["/research/rack/status.json", "setInterval"], "js");
mustExclude(js, ["requestAnimationFrame", "webgl", "essay-pdf", "essay-back", /raspberry pi/i], "js");

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

const rackStatus = read("public/research/rack/status.json");
mustInclude(
  rackStatus,
  ['"id": "bay-1"', '"id": "bay-2"', '"id": "bay-3"', "Qwen mesh", "mesh peer", "local qwen2.5"],
  "rack status",
);
mustExclude(rackStatus, [/fishbowl/i, "MiniShop", "Meridian", "/research/fishbowl/"], "rack status");

for (const path of [
  "dist/research/fishbowl",
  "public/research/fishbowl",
  "research/fishbowl",
  "scripts/build-fishbowl-paper.py",
  "scripts/fishbowl-manuscript.pdf",
]) {
  if (existsSync(path)) fail(`removed path still present: ${path}`);
}

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
