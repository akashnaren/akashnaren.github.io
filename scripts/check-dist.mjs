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
];

const home = read("dist/index.html");
const bot = read("dist/bot/index.html");
const research = read("dist/research/index.html");
const fishbowl = read("dist/research/fishbowl/index.html");
const essay = read("dist/research/agent-native-ui/index.html");
const spa = read("dist/404.html");

for (const [dist, root] of [
  ["dist/index.html", "index.html"],
  ["dist/bot/index.html", "bot/index.html"],
  ["dist/research/index.html", "research/index.html"],
  ["dist/research/fishbowl/index.html", "research/fishbowl/index.html"],
  ["dist/research/agent-native-ui/index.html", "research/agent-native-ui/index.html"],
  ["dist/404.html", "404.html"],
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
    ">Research</a>",
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
  ],
  "home",
);

if (!home.includes("by grok") && !home.includes("by <a")) {
  fail("home must keep a real space before grok bot");
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
    'href="/bot">grok bot</a>',
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

mustExclude(
  research,
  [
    ...leakNeedles,
    "still researching",
    "exploring",
    "drafting",
    "Fishbowl on a Raspberry Pi",
    'class="rack"',
    "pi rack",
    "data-bay",
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
if (essay.includes('class="essay-pdf"') || essay.includes("still researching")) {
  fail("agent-native route must redirect to the PDF, not an HTML reader");
}

mustInclude(
  fishbowl,
  [
    "Fishbowl: An Event-Log Truthful Multi-Agent Office on a Raspberry Pi",
    'src="/research/fishbowl/paper.pdf"',
    'href="/research/fishbowl/paper.pdf"',
    'href="/research/fishbowl/flow.pdf"',
    'href="/research/fishbowl/mesh-architecture.pdf"',
    'href="/research"',
  ],
  "fishbowl",
);
mustExclude(fishbowl, [...leakNeedles, "coming soon", "still researching"], "fishbowl");

mustInclude(spa, ['<div id="holder"></div>'], "404");
if (!/\/assets\/index-[^"]+\.js/.test(spa)) fail("404 must reference hashed js");
if (spa.includes('class="sky"') || spa.includes('class="bio"')) fail("404 must not pre-paint a page");

for (const [page, label] of [
  [home, "home"],
  [bot, "bot"],
  [research, "research"],
  [fishbowl, "fishbowl"],
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
  ["orbit-spin", ".sky", "grok-glance", "fleet-idle", "live-pulse", "@keyframes"],
  "css",
);
mustExclude(js, ["requestAnimationFrame", "setInterval", "/research/rack/status.json", "webgl"], "js");

const pdfs = [
  "public/research/fishbowl/paper.pdf",
  "public/research/fishbowl/flow.pdf",
  "public/research/fishbowl/mesh-architecture.pdf",
  "public/research/agent-native-ui/paper.pdf",
  "dist/research/fishbowl/paper.pdf",
  "dist/research/fishbowl/flow.pdf",
  "dist/research/fishbowl/mesh-architecture.pdf",
  "dist/research/agent-native-ui/paper.pdf",
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

const renders = ["rack-hero-render", "rack-front-render", "rack-top-render"];
const photoDir = "public/research/fishbowl";
const present = renders.filter(
  (name) => existsSync(`${photoDir}/${name}.png`) || existsSync(`${photoDir}/${name}.jpg`),
);
if (present.length !== 0 && present.length !== renders.length) {
  fail(`fishbowl render set is partial: ${present.join(", ")}`);
}
const paper = readFileSync("public/research/fishbowl/paper.pdf");
const paperLatin = paper.toString("latin1");
for (const banned of ["rack-hero-studio", "rack-front-ports-studio", "rack-top-studio", "paper-crop", "P2S"]) {
  if (paperLatin.includes(banned)) fail(`fishbowl paper.pdf still names ${banned}`);
}
if (present.length === renders.length) {
  const hasRaster =
    paper.includes(Buffer.from("\xff\xd8\xff")) ||
    paper.includes(Buffer.from("IDAT")) ||
    paper.includes(Buffer.from("/DCTDecode")) ||
    paper.includes(Buffer.from("/FlateDecode"));
  if (!hasRaster) fail("fishbowl paper.pdf must embed the product renders");
}

console.log(
  present.length === renders.length
    ? "dist matches the public pages, favicon, and fishbowl renders."
    : "dist matches the public pages and favicon.",
);
