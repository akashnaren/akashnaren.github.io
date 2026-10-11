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
    'title="Tesla — Vehicle Service"',
    '<span class="entry-detail"> — Vehicle Service</span>',
    'title="Tesla — Vehicle Engineering"',
    '<span class="entry-detail"> — Vehicle Engineering</span>',
    "https://www.tesla.com/",
    ">Tesla</a>",
    "https://www.rtx.com/raytheon",
    ">Raytheon</a>",
    'title="Raytheon — Avionics Networking Test Suite"',
    '<span class="entry-detail"> — Avionics Networking Test Suite</span>',
    "https://www.lspace.asu.edu/",
    ">NASA L’SPACE</a>",
    'title="NASA L’SPACE — Workforce Program"',
    '<span class="entry-detail"> — Workforce Program</span>',
    '<h2 id="research">Research</h2>',
    "Multiscale Flow Physics Lab, UC San Diego",
    'href="https://asanchez.ucsd.edu/"',
    ">Multiscale Flow Physics Lab, UC San Diego<svg",
    '<h2 id="profiles">Profiles</h2>',
    ">GitHub</span>",
    ">LinkedIn</span>",
    ">X</span>",
    ">Cursor</span>",
    ">Hugging Face</span>",
    ">Kaggle</span>",
    '<h2 id="mail">Mail</h2>',
    "Managed by ",
    'href="#bot">Grok Bot</a>',
    '<meta name="description" content="Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego." />',
    '<meta property="og:description" content="Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego." />',
    '<meta name="twitter:description" content="Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego." />',
    "<title>Akash Premkumar</title>",
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
    "mailto:akashnaren@mail.grokbot.com",
    "akashnaren@mail.grokbot.com",
    "bots' inbox",
    "the agents' inbox — not his personal Gmail",
    'href="#bot"',
    'class="managed-copy"',
    'class="foot home-foot"',
    'class="layout"',
    'class="collection"',
    'class="roster"',
    'id="bot"',
    "<h2 id=\"bot\">personal agents collection</h2>",
    "<h2 id=\"projects\">Projects</h2>",
    ">OpenPi<svg",
    "Agent-Native UI",
    'href="/research/agent-native-ui/paper.pdf"',
    'href="https://seller-hotels-stay-role.trycloudflare.com/"',
    'tabindex="0"',
    'role="tooltip"',
    'href="https://temporal-buddies5.vercel.app/"',
    ">Temporal<svg",
    'href="https://meetlavalamp.com"',
    ">Lavalamp<svg",
    'class="ext"',
    'rel="noopener noreferrer"',
    'name="color-scheme" content="light"',
    'name="theme-color" content="#fffff8"',
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
    ">optimus</a>",
    ">grok</a>",
    ">robotaxi</a>",
    "full stack applications",
    "I work on",
    "og:image",
    "#e3925a",
    "family=Geist",
    "fonts.googleapis.com",
    "color-scheme:dark",
    'content="#0a0a0a"',
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
    "Internal Tooling",
    "Part Data Hub",
    "Cybercab",
    "Robotaxi",
    "Grok Integrations",
    "https://www.tesla.com/robotaxi",
    "https://grok.com",
    "asteroid preliminary design review",
    "terrain mapping",
    "this site is managed by",
    "Fire whirl",
    "fire whirl",
    'class="managed byline"',
    "Independent work",
    "grok bot collection",
    "Raspberry Pi Inference Mesh",
    "Structured Views for Agent-Native UIs",
    "Entity Resolution",
    "reactive-flows",
    ">openpi<",
    "ARC-AGI",
    "Entity Resolution Across Fragmented Records",
    "I am running local language-model chat on a Raspberry Pi mesh.",
    "screenshots or a flat accessibility tree",
    "I am looking at how to reason over fragmented records",
    "fragmented records",
    "hallucination",
    "more coming",
    'class="count"',
    'class="thread-fig"',
    'class="status"',
    "still researching",
    "exploring",
    "drafting",
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|\d+)\s+grok bots\b/i,
  ],
  "home",
);

if (!home.includes("by grok") && !home.includes("by <a")) {
  fail("home must keep a real space before grok bot");
}
if (!/<a href="#bot">Grok Bot<\/a>/.test(home)) {
  fail("home footer must link Grok Bot to #bot");
}
if (home.includes('href="/bot"') || home.includes('href="/research"')) {
  fail("home must link the footer to #bot and inline research, not the old routes");
}
if (/>(?:Tesla|Cybercab \+ Robotaxi Program|Grok|Raytheon|NASA L’SPACE)<svg class="ext"/.test(home)) {
  fail("biography links must stay unmarked");
}
const workSection = home.match(/aria-labelledby="work">[\s\S]*?<\/section>/)?.[0] ?? "";
const workRows = [...workSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
if (workRows.length !== 4) fail(`work must list four rows, found ${String(workRows.length)}`);
const expectedWork = [
  '<li title="Tesla — Vehicle Service"><span class="entry-name"><a href="https://www.tesla.com/">Tesla</a></span><span class="entry-detail"> — Vehicle Service</span></li>',
  '<li title="Tesla — Vehicle Engineering"><span class="entry-name"><a href="https://www.tesla.com/">Tesla</a></span><span class="entry-detail"> — Vehicle Engineering</span></li>',
  '<li title="Raytheon — Avionics Networking Test Suite"><span class="entry-name"><a href="https://www.rtx.com/raytheon">Raytheon</a></span><span class="entry-detail"> — Avionics Networking Test Suite</span></li>',
  '<li title="NASA L’SPACE — Workforce Program"><span class="entry-name"><a href="https://www.lspace.asu.edu/">NASA L’SPACE</a></span><span class="entry-detail"> — Workforce Program</span></li>',
];
for (const [index, row] of expectedWork.entries()) {
  if (workRows[index] !== row) fail(`work row ${String(index + 1)} must keep the dash layout: ${row}`);
}
if ((workSection.match(/<a /g) ?? []).length !== 4) {
  fail("work rows must link only Tesla, Tesla, Raytheon, and NASA L’SPACE");
}
if (workSection.includes("Project Engineer")) fail("NASA L’SPACE work row must not use the title");
if (/target="_blank"/.test(home)) fail("home links stay in the same tab");
const homeSections = home.match(/<section class="section"/g) ?? [];
if (homeSections.length !== 5) {
  fail(`home must have Work, Research, Projects, Profiles, and Mail sections, found ${String(homeSections.length)}`);
}
const sectionOrder = ["work", "research", "projects", "profiles", "mail", "bot"].map((id) => home.indexOf(`id="${id}"`));
if (sectionOrder.some((at) => at < 0) || sectionOrder.some((at, i) => i > 0 && at < sectionOrder[i - 1])) {
  fail("home sections must run Work, Research, Projects, Profiles, Mail, then the bot collection");
}
const mainEnd = home.indexOf("</main>");
const botAt = home.indexOf('id="bot"');
const footAt = home.indexOf('class="foot home-foot"');
if (mainEnd < 0 || botAt < mainEnd) {
  fail("the bot collection must follow the main column");
}
const mainHtml = home.slice(home.indexOf("<main"), mainEnd);
if (mainHtml.includes('class="foot home-foot"') || mainHtml.includes("Managed by ")) {
  fail("the Managed by line must sit after the roster in source order");
}
if (footAt < botAt) {
  fail("the Managed by line must follow the personal agents collection");
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
  ["software-engineer", "software engineer", "i ship quiet diffs that compile clean."],
  ["research-engineer", "research engineer", "i read the papers that matter."],
  ["chief-executive-officer", "chief executive officer", "i keep the work moving."],
  ["executive-secretary", "executive secretary", "i keep the notes in order."],
  ["chief-financial-officer", "chief financial officer", "i stay even."],
  ["finance-engineer", "finance engineer", "i check the math twice."],
  ["product-engineer", "product engineer", "i file what ships."],
  ["chief-technical-officer", "chief technical officer", "i build grok bots like these."],
  ["integration-engineer", "integration engineer", "i wrap apis into quiet plugins."],
  ["imagine-engineer", "imagine engineer", "i turn big ideas into something you can build."],
  ["social-lead", "social lead", "i find the events worth showing up for."],
  ["storage-engineer", "storage engineer", "i keep the disk honest."],
  ["triage-engineer", "triage engineer", "i sort what lands first."],
];

mustInclude(
  home,
  [
    ...seats.flatMap(([id, name, blurb]) => [
      `data-seat="${id}"`,
      `data-name="${name}"`,
      `aria-label="${name}"`,
      `aria-describedby="tip-${id}"`,
      `id="tip-${id}" role="tooltip">${blurb}</span>`,
      `>${name}</span>`,
    ]),
    ...Array.from({ length: 14 }, (_, i) => `src="/fleet/${String(i + 1).padStart(2, "0")}.png"`),
  ],
  "home roster",
);

const roster = home.match(/<ul class="roster">[\s\S]*?<\/ul>/)?.[0] ?? "";
const rowCount = (roster.match(/<li class="row"/g) ?? []).length;
if (rowCount !== 14) fail(`home roster must list fourteen seats, found ${String(rowCount)}`);
if ((roster.match(/tabindex="0"/g) ?? []).length !== 14) {
  fail("every seat must be keyboard focusable");
}
if ((roster.match(/role="tooltip"/g) ?? []).length !== 14) {
  fail("every seat blurb must live in a tooltip");
}
if (roster.includes('class="row-blurb"')) {
  fail("seat blurbs must not render as a visible sub-line");
}
const firstRow = roster.match(/<li class="row"[\s\S]*?<\/li>/)?.[0] ?? "";
if (!firstRow.includes('data-seat="profile-lead"') || !firstRow.includes(">profile lead</span>")) {
  fail("the host seat must be profile lead");
}
if (!firstRow.includes('role="tooltip">i keep his profiles and ship this site.</span>')) {
  fail("the host seat tooltip must keep its blurb");
}
if (/>secretary</.test(home)) fail("the notes seat is executive secretary");
if ((home.match(/<ul class="roster"/g) ?? []).length !== 1) {
  fail("home must have one bot roster");
}

const researchSection = home.match(/aria-labelledby="research">[\s\S]*?<\/section>/)?.[0] ?? "";
const projectsSection = home.match(/aria-labelledby="projects">[\s\S]*?<\/section>/)?.[0] ?? "";
const researchItems = researchSection.match(/<li[\s>]/g) ?? [];
if (researchItems.length !== 3) {
  fail(`research must list the lab, OpenPi, and Agent-Native UI, found ${String(researchItems.length)}`);
}
const projectItems = projectsSection.match(/<li[\s>]/g) ?? [];
if (projectItems.length !== 2) {
  fail(`projects must list Temporal and Lavalamp, found ${String(projectItems.length)}`);
}
if (/<p[\s>]/.test(researchSection) || /<p[\s>]/.test(projectsSection)) {
  fail("research and projects must not include blurbs");
}
const lab = researchSection.match(/<li>[\s\S]*?<\/li>/)?.[0] ?? "";
if ((lab.match(/<a /g) ?? []).length !== 1) {
  fail("the lab line must be a single link");
}
mustIconInside(
  lab,
  "https://asanchez.ucsd.edu/",
  "Multiscale Flow Physics Lab, UC San Diego",
  "lab",
);
if (!lab.includes('rel="noopener noreferrer"') || lab.includes("reactive-flows") || /target="_blank"/.test(lab)) {
  fail("the lab link must open https://asanchez.ucsd.edu/ like other external links");
}
const openPi = researchSection.match(/<li data-entry="openpi">[\s\S]*?<\/li>/)?.[0] ?? "";
if ((openPi.match(/<a /g) ?? []).length !== 1) {
  fail("OpenPi must be a single link");
}
if (/paper\.pdf|>openpi</.test(openPi)) {
  fail("OpenPi must not keep a PDF link or a separate openpi link");
}
mustIconInside(
  openPi,
  "https://seller-hotels-stay-role.trycloudflare.com/",
  "OpenPi",
  "OpenPi",
);
if (!openPi.includes('rel="noopener noreferrer"') || /target="_blank"/.test(openPi)) {
  fail("OpenPi must open like other external links");
}
if (/trycloudflare/.test(projectsSection) || /trycloudflare/.test(researchSection.replace(openPi, ""))) {
  fail("OpenPi must stay on its own entry");
}
if (home.includes('href="/research/pi-0.2-high/paper.pdf"')) {
  fail("the home page must not link the Pi paper PDF");
}
const views = researchSection.match(/<li data-entry="agent-native-ui">[\s\S]*?<\/li>/)?.[0] ?? "";
if ((views.match(/<a /g) ?? []).length !== 1 || !views.includes("Agent-Native UI") || views.includes("Structured Views")) {
  fail("Agent-Native UI must be a single PDF link with no blurb");
}
mustIconInside(
  home,
  "/research/agent-native-ui/paper.pdf",
  "Agent-Native UI",
  "home",
);
if (/Entity Resolution|entity-resolution/.test(projectsSection) || /<p[\s>]/.test(projectsSection) || /paper\.pdf/i.test(projectsSection)) {
  fail("Projects must show only the Temporal and Lavalamp links");
}
const projectAnchors = projectsSection.match(/<a /g) ?? [];
if (projectAnchors.length !== 2) {
  fail(`Projects must show exactly two links, found ${String(projectAnchors.length)}`);
}
mustIconInside(
  projectsSection,
  "https://temporal-buddies5.vercel.app/",
  "Temporal",
  "Projects",
);
mustIconInside(
  projectsSection,
  "https://meetlavalamp.com",
  "Lavalamp",
  "Projects",
);
const temporalAt = projectsSection.indexOf(">Temporal<svg");
const lavalampAt = projectsSection.indexOf(">Lavalamp<svg");
if (temporalAt === -1 || lavalampAt < temporalAt) {
  fail("Lavalamp must follow Temporal");
}
if (/lavalamp|meetlavalamp|temporal-buddies/i.test(researchSection)) {
  fail("Temporal and Lavalamp must stay in Projects");
}

mustExclude(
  home,
  [
    "three-node",
    "Three-Node",
    "pi rack",
    "Pi PAIR",
    "data-bay",
    "status.json",
    "/research/rack",
    'class="thread-link"',
    ">read</a>",
    ">flow</a>",
    ">mesh</a>",
    ">code</a>",
    ">demo</a>",
    "/research/fishbowl/",
    "OpenAI-style route",
  ],
  "home research",
);

function mustBeSectionRedirect(page, href, title, description, label) {
  mustInclude(
    page,
    [
      `<title>${title}</title>`,
      `<meta name="description" content="${description}" />`,
      'http-equiv="refresh"',
      `content="0;url=${href}"`,
      `location.replace(${JSON.stringify(href)})`,
      `<a href="${href}">${title}</a>`,
      'rel="canonical" href="https://akashnaren.github.io/"',
      "data-cf-beacon",
    ],
    label,
  );
  if (
    page.includes('class="roster"') ||
    page.includes('class="thread"') ||
    page.includes('class="page home"') ||
    page.includes("/assets/index-") ||
    page.includes("<iframe")
  ) {
    fail(`${label} must stay a tiny redirect to the home section`);
  }
}

mustBeSectionRedirect(
  bot,
  "/#bot",
  "personal agents collection · Akash Premkumar",
  "The personal agents collection behind akashnaren.github.io.",
  "bot redirect",
);
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
    "fourteen grok bots",
    "Fourteen grok bots",
    "more coming",
    'class="count"',
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|\d+)\s+grok bots\b/i,
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
    "data-seat=",
    "profile lead",
    "grok bot collection",
  ],
  "bot redirect",
);

mustBeSectionRedirect(
  research,
  "/#research",
  "Research · Akash Premkumar",
  "Multiscale Flow Physics Lab, UC San Diego, OpenPi, and Agent-Native UI.",
  "research redirect",
);
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
    'class="thread"',
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
    "paper.pdf",
    "Raspberry Pi Inference Mesh",
    "Structured Views for Agent-Native UIs",
    "Entity Resolution",
    "reactive-flows",
    "ARC-AGI",
    "Entity Resolution Across Fragmented Records",
    "I am running local language-model chat on a Raspberry Pi mesh.",
    "screenshots or a flat accessibility tree",
    "fragmented records",
    "hallucination",
  ],
  "research redirect",
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
  if (/agentmail/i.test(page)) fail(`${label} still mentions agentmail`);
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
mustInclude(favicon, ["<title>A</title>", 'aria-label="A"', "#fffff8", "#1a1a1a"], "favicon");
mustExclude(favicon, ["#e3925a", "#ff6b00", "rotate(-26", "#0a0a0a", "#fafaf7"], "favicon");
if (!existsSync("dist/favicon-32.png") || !existsSync("dist/favicon.ico")) {
  fail("dist is missing favicon-32.png or favicon.ico");
}

const cssName = readdirSync("dist/assets").find((name) => name.endsWith(".css"));
const jsName = readdirSync("dist/assets").find((name) => name.endsWith(".js"));
if (!cssName || !jsName) fail("dist/assets is missing hashed css or js");
const css = read(`dist/assets/${cssName}`);
const js = read(`dist/assets/${jsName}`);
mustInclude(
  css,
  [
    "100dvh",
    "color-scheme:light",
    "overflow-x:hidden",
    "Charter",
    "6.5rem",
    "minmax(5.25rem,1fr)",
    ".row-tip",
    ".row:hover .row-tip",
    ".row:focus .row-tip",
    ".row.is-open .row-tip",
  ],
  "css",
);
mustExclude(
  css,
  ["orbit-spin", ".sky", "grok-glance", "fleet-idle", "scope-sweep", "essay-pdf", "essay-back", ".page.essay", ".rack", "live-pulse", "@keyframes", "Geist", "color-scheme:dark", "#0a0a0a", "position:sticky"],
  "css",
);
mustExclude(js, ["requestAnimationFrame", "setInterval", "/research/rack/status.json", "webgl", "essay-pdf", "essay-back", "agentmail", "ARC-AGI", "Entity Resolution", "Structured Views for Agent-Native UIs", "reactive-flows", "fragmented records", "hallucination", "screenshots or a flat accessibility tree", ">openpi<", "Internal Tooling", "Part Data Hub", "Cybercab", "Robotaxi", "Grok Integrations", "https://www.tesla.com/robotaxi", "https://grok.com", "asteroid preliminary design review", "terrain mapping"], "js");

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
  ["fishbowl", "status.json", "/research/rack", "ARC-AGI", "fragmented records", "hallucination", "Raspberry Pi Inference Mesh", "Structured Views for Agent-Native UIs", "Entity Resolution", "reactive-flows"],
  "sitemap.xml",
);

console.log("dist matches the public pages, favicon, research PDF, robots.txt, and sitemap.xml.");
