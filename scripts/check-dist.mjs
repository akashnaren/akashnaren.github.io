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

/** Home may name the OpenPi detail, and no other Raspberry Pi copy. */
const homeLeakNeedles = leakNeedles.map((needle) =>
  needle instanceof RegExp && needle.source === "raspberry pi"
    ? /raspberry pi(?! distributed inference)/i
    : needle,
);

const home = read("dist/index.html");
const research = read("dist/research/index.html");
const essay = read("dist/research/agent-native-ui/index.html");
const piPaperPage = read("dist/research/pi-0.2-high/index.html");
const spa = read("dist/404.html");

for (const [dist, root] of [
  ["dist/index.html", "index.html"],
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
  ["dist/site.webmanifest", "site.webmanifest"],
  ["public/site.webmanifest", "dist/site.webmanifest"],
  ["public/fire-whirls-poster.jpg", "dist/fire-whirls-poster.jpg"],
  ["dist/fire-whirls-poster.jpg", "fire-whirls-poster.jpg"],
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
    '<span class="entry-detail"> — <a href="https://service.tesla.com/en-US/" target="_blank" rel="noopener noreferrer">Vehicle Service<svg class="ext"',
    'title="Tesla — Vehicle Engineering"',
    '<span class="entry-detail"> — <a href="https://www.tesla.com/AI" target="_blank" rel="noopener noreferrer">Vehicle Engineering<svg class="ext"',
    "https://service.tesla.com/en-US/",
    "https://www.tesla.com/AI",
    "https://www.tesla.com/",
    ">Tesla</a>",
    "https://www.rtx.com/raytheon",
    ">Raytheon</a>",
    'title="Raytheon — Avionics Networking Test Suite"',
    '<span class="entry-detail"> — <a href="https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/" target="_blank" rel="noopener noreferrer">Avionics Networking Test Suite<svg class="ext"',
    "https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/",
    "https://www.lspace.asu.edu/",
    ">NASA L’SPACE</a>",
    'title="NASA L’SPACE — Proposals, Preliminary Design Review"',
    '<span class="entry-detail"> — <a href="https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing" target="_blank" rel="noopener noreferrer">Proposals, Preliminary Design Review<svg class="ext"',
    "https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing",
    '<h2 id="research">Research</h2>',
    "Multiscale Flow Physics Lab, UC San Diego",
    'href="https://asanchez.ucsd.edu/"',
    ">Multiscale Flow Physics Lab, UC San Diego</a>",
    '<span class="entry-detail"> — <a href="/fire-whirls-poster.jpg" target="_blank" rel="noopener noreferrer">Research<svg class="ext"',
    'href="/fire-whirls-poster.jpg"',
    '<h2 id="profiles">Profiles</h2>',
    ">GitHub</span>",
    ">LinkedIn</span>",
    ">X</span>",
    ">Cursor</span>",
    ">Hugging Face</span>",
    ">Kaggle</span>",
    '<h2 id="mail">Mail</h2>',
    "Managed by ",
    'href="https://x.ai/bot" target="_blank" rel="noopener noreferrer">Grok Bot</a>',
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
    'class="managed-copy"',
    'class="foot home-foot"',
    'class="layout"',
    "<h2 id=\"projects\">Projects</h2>",
    ">OpenPi</a>",
    "Agent-Native UI",
    'href="/research/agent-native-ui/paper.pdf"',
    'href="https://glenn-night-reasoning-subsection.trycloudflare.com/"',
    'href="https://meetlavalamp.com"',
    ">Lavalamp</a>",
    "Network Intelligence Platform",
    "Raspberry Pi Distributed Inference",
    "Interfaces for Computer-Use Agents",
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
    ...homeLeakNeedles,
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
    /fire-whirl(?!s)/,
    'class="bio"',
    'class="page-link"',
    "Optimus",
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
    "temporal-buddies5.vercel.app",
    ">Temporal",
    "more coming",
    'class="count"',
    'class="thread-fig"',
    'class="status"',
    "still researching",
    "exploring",
    "drafting",
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|\d+)\s+grok bots\b/i,
    'class="collection"',
    'class="roster"',
    'class="row"',
    'id="bot"',
    'href="#bot"',
    "personal agents collection",
    "data-seat=",
    "/fleet/",
    'role="tooltip"',
  ],
  "home",
);

if (!home.includes("by grok") && !home.includes("by <a")) {
  fail("home must keep a real space before grok bot");
}
if (!/<a href="https:\/\/x\.ai\/bot" target="_blank" rel="noopener noreferrer">Grok Bot<\/a>/.test(home)) {
  fail("home footer must link Grok Bot to https://x.ai/bot in a new tab");
}
if (home.includes('href="/bot"') || home.includes('href="/research"') || home.includes('href="#bot"')) {
  fail("home must link the footer to https://x.ai/bot and inline research, not the old routes");
}
if (/>(?:Tesla|Cybercab \+ Robotaxi Program|Grok|Raytheon|NASA L’SPACE|Multiscale Flow Physics Lab, UC San Diego|Lavalamp|OpenPi|Agent-Native UI)<svg class="ext"/.test(home)) {
  fail("name links must stay unmarked");
}
const workSection = home.match(/aria-labelledby="work">[\s\S]*?<\/section>/)?.[0] ?? "";
const workRows = [...workSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
if (workRows.length !== 4) fail(`work must list four rows, found ${String(workRows.length)}`);
const roleIcon = `<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`;
const expectedWork = [
  `<li title="Tesla — Vehicle Service"><span class="entry-name"><a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">Tesla</a></span><span class="entry-detail"> — <a href="https://service.tesla.com/en-US/" target="_blank" rel="noopener noreferrer">Vehicle Service${roleIcon}</a></span></li>`,
  `<li title="Tesla — Vehicle Engineering"><span class="entry-name"><a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">Tesla</a></span><span class="entry-detail"> — <a href="https://www.tesla.com/AI" target="_blank" rel="noopener noreferrer">Vehicle Engineering${roleIcon}</a></span></li>`,
  `<li title="Raytheon — Avionics Networking Test Suite"><span class="entry-name"><a href="https://www.rtx.com/raytheon" target="_blank" rel="noopener noreferrer">Raytheon</a></span><span class="entry-detail"> — <a href="https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/" target="_blank" rel="noopener noreferrer">Avionics Networking Test Suite${roleIcon}</a></span></li>`,
  `<li title="NASA L’SPACE — Proposals, Preliminary Design Review"><span class="entry-name"><a href="https://www.lspace.asu.edu/" target="_blank" rel="noopener noreferrer">NASA L’SPACE</a></span><span class="entry-detail"> — <a href="https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing" target="_blank" rel="noopener noreferrer">Proposals, Preliminary Design Review${roleIcon}</a></span></li>`,
];
for (const [index, row] of expectedWork.entries()) {
  if (workRows[index] !== row) fail(`work row ${String(index + 1)} must keep the dash layout: ${row}`);
}
if ((workSection.match(/<a /g) ?? []).length !== 8) {
  fail("work rows must link Tesla, Vehicle Service, Tesla, Vehicle Engineering, Raytheon, Avionics Networking Test Suite, NASA L’SPACE, and Proposals, Preliminary Design Review");
}
mustIconInside(workSection, "https://service.tesla.com/en-US/", "Vehicle Service", "Vehicle Service");
mustIconInside(workSection, "https://www.tesla.com/AI", "Vehicle Engineering", "Vehicle Engineering");
mustIconInside(
  workSection,
  "https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/",
  "Avionics Networking Test Suite",
  "Avionics Networking Test Suite",
);
mustIconInside(
  workSection,
  "https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing",
  "Proposals, Preliminary Design Review",
  "Proposals, Preliminary Design Review",
);
if (workSection.includes("Project Engineer")) fail("NASA L’SPACE work row must not use the title");
function sameTabHref(href) {
  if (href.startsWith("#")) return true;
  const path = href.split(/[?#]/, 1)[0] ?? "";
  return path === "/research" || path === "/research/";
}

const homeAnchors = [...home.matchAll(/<a\b([^>]*)>/g)];
if (homeAnchors.length === 0) fail("home is missing links");
for (const match of homeAnchors) {
  const attrs = match[1];
  const href = attrs.match(/\bhref="([^"]*)"/)?.[1] ?? "";
  const target = attrs.match(/\btarget="([^"]*)"/)?.[1] ?? "";
  const rel = attrs.match(/\brel="([^"]*)"/)?.[1] ?? "";
  if (sameTabHref(href)) {
    if (target || rel) fail(`in-page or legacy home link must stay in this tab: ${href}`);
    continue;
  }
  if (target !== "_blank") fail(`outbound home link must set target="_blank": ${href}`);
  const tokens = rel.split(/\s+/).filter(Boolean);
  if (!tokens.includes("noopener") || !tokens.includes("noreferrer")) {
    fail(`outbound home link must set rel="noopener noreferrer": ${href}`);
  }
}
const homeSections = home.match(/<section class="section"/g) ?? [];
if (homeSections.length !== 5) {
  fail(`home must have Work, Research, Projects, Profiles, and Mail sections, found ${String(homeSections.length)}`);
}
const sectionOrder = ["work", "research", "projects", "profiles", "mail"].map((id) => home.indexOf(`id="${id}"`));
if (sectionOrder.some((at) => at < 0) || sectionOrder.some((at, i) => i > 0 && at < sectionOrder[i - 1])) {
  fail("home sections must run Work, Research, Projects, Profiles, then Mail");
}
const mainEnd = home.indexOf("</main>");
const footAt = home.indexOf('class="foot home-foot"');
if (mainEnd < 0 || footAt < mainEnd) {
  fail("the Managed by line must follow the main column");
}
const mainHtml = home.slice(home.indexOf("<main"), mainEnd);
if (mainHtml.includes('class="foot home-foot"') || mainHtml.includes("Managed by ") || mainHtml.includes('class="collection"')) {
  fail("the Managed by line must sit in the footer after the main column");
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

const researchSection = home.match(/aria-labelledby="research">[\s\S]*?<\/section>/)?.[0] ?? "";
const projectsSection = home.match(/aria-labelledby="projects">[\s\S]*?<\/section>/)?.[0] ?? "";
const researchItems = researchSection.match(/<li[\s>]/g) ?? [];
if (researchItems.length !== 1) {
  fail(`research must list only the lab, found ${String(researchItems.length)}`);
}
if (researchSection.includes("Agent-Native UI") || researchSection.includes("agent-native-ui")) {
  fail("Agent-Native UI must not be listed under Research");
}
const projectItems = projectsSection.match(/<li[\s>]/g) ?? [];
if (projectItems.length !== 3) {
  fail(`projects must list Lavalamp, OpenPi, and Agent-Native UI, found ${String(projectItems.length)}`);
}
if (/<p[\s>]/.test(researchSection) || /<p[\s>]/.test(projectsSection)) {
  fail("research and projects must not include blurbs");
}
const lab = researchSection.match(/<li>[\s\S]*?<\/li>/)?.[0] ?? "";
const expectedLab = `<li><a href="https://asanchez.ucsd.edu/" target="_blank" rel="noopener noreferrer">Multiscale Flow Physics Lab, UC San Diego</a><span class="entry-detail"> — <a href="/fire-whirls-poster.jpg" target="_blank" rel="noopener noreferrer">Research${roleIcon}</a></span></li>`;
if (lab !== expectedLab) {
  fail(`research lab row must keep the lab link and add a Research detail: ${expectedLab}`);
}
if ((lab.match(/<a /g) ?? []).length !== 2) {
  fail("the lab line must link the lab and Research");
}
mustIconInside(lab, "/fire-whirls-poster.jpg", "Research", "lab poster");
if (!lab.includes('rel="noopener noreferrer"') || lab.includes("reactive-flows") || !lab.includes('target="_blank"')) {
  fail("the lab link must open https://asanchez.ucsd.edu/ in a new tab");
}
const projectRows = [...projectsSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
const expectedProjects = [
  `<li title="Lavalamp — Network Intelligence Platform"><span class="entry-name"><a href="https://meetlavalamp.com" target="_blank" rel="noopener noreferrer">Lavalamp</a></span><span class="entry-detail"> — Network Intelligence Platform</span></li>`,
  `<li title="OpenPi — Raspberry Pi Distributed Inference"><span class="entry-name"><a href="https://glenn-night-reasoning-subsection.trycloudflare.com/" target="_blank" rel="noopener noreferrer">OpenPi</a></span><span class="entry-detail"> — Raspberry Pi Distributed Inference</span></li>`,
  `<li title="Agent-Native UI — Interfaces for Computer-Use Agents"><span class="entry-name"><a href="/research/agent-native-ui/paper.pdf" target="_blank" rel="noopener noreferrer">Agent-Native UI</a></span><span class="entry-detail"> — Interfaces for Computer-Use Agents</span></li>`,
];
for (const [index, row] of expectedProjects.entries()) {
  if (projectRows[index] !== row) fail(`project row ${String(index + 1)} must keep the dash layout: ${row}`);
}
const openPi = projectRows[1] ?? "";
if ((openPi.match(/<a /g) ?? []).length !== 1) {
  fail("OpenPi must be a single link");
}
if (/paper\.pdf|>openpi</.test(openPi)) {
  fail("OpenPi must not keep a PDF link or a separate openpi link");
}
if (!openPi.includes('rel="noopener noreferrer"') || !openPi.includes('target="_blank"')) {
  fail("OpenPi must open in a new tab");
}
if (researchSection.includes("OpenPi") || researchSection.includes('data-entry="openpi"') || /trycloudflare/.test(researchSection) || /trycloudflare/.test(projectsSection.replace(openPi, ""))) {
  fail("OpenPi must stay on its own Projects entry");
}
if (home.includes('href="/research/pi-0.2-high/paper.pdf"')) {
  fail("the home page must not link the Pi paper PDF");
}
const views = projectRows[2] ?? "";
if ((views.match(/<a /g) ?? []).length !== 1 || !views.includes("Agent-Native UI") || views.includes("Structured Views")) {
  fail("Agent-Native UI must be a single PDF link with no blurb");
}
if (!views.includes('rel="noopener noreferrer"') || !views.includes('target="_blank"')) {
  fail("Agent-Native UI must open its PDF in a new tab");
}
if (/Entity Resolution|entity-resolution/.test(projectsSection) || /<p[\s>]/.test(projectsSection)) {
  fail("Projects must not include blurbs");
}
const projectPdfs = projectsSection.match(/paper\.pdf/gi) ?? [];
if (projectPdfs.length !== 1) {
  fail("Projects must link only the Agent-Native UI PDF");
}
const projectAnchors = projectsSection.match(/<a /g) ?? [];
if (projectAnchors.length !== 3) {
  fail(`Projects must show exactly three links, found ${String(projectAnchors.length)}`);
}
const lavalampAt = projectsSection.indexOf(">Lavalamp</a>");
const openPiAt = projectsSection.indexOf(">OpenPi</a>");
const agentAt = projectsSection.indexOf(">Agent-Native UI</a>");
if (lavalampAt === -1 || openPiAt === -1 || agentAt === -1 || lavalampAt > openPiAt || openPiAt > agentAt) {
  fail("Projects must run Lavalamp, OpenPi, then Agent-Native UI");
}
if (/lavalamp|meetlavalamp|temporal-buddies/i.test(researchSection)) {
  fail("Lavalamp must stay in Projects");
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
      `<a href="${href}">${title}</a>`,
      'rel="canonical" href="https://akashnaren.github.io/"',
      'http-equiv="Content-Security-Policy"',
      "script-src 'self'",
    ],
    label,
  );
  if (
    page.includes('class="roster"') ||
    page.includes('class="thread"') ||
    page.includes('class="page home"') ||
    page.includes("/assets/index-") ||
    page.includes("<iframe") ||
    page.includes("<script")
  ) {
    fail(`${label} must stay a tiny redirect to the home section`);
  }
}

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
    'http-equiv="Content-Security-Policy"',
  ],
  "essay redirect",
);
if (essay.includes('class="essay-pdf"') || essay.includes("<iframe") || essay.includes("<script") || essay.includes("still researching")) {
  fail("agent-native route must redirect to the PDF, not an HTML reader");
}
mustExclude(essay, leakNeedles, "essay redirect");

mustInclude(
  piPaperPage,
  [
    'http-equiv="refresh"',
    "/research/pi-0.2-high/paper.pdf",
    'http-equiv="Content-Security-Policy"',
    "Raspberry Pi Inference Mesh",
  ],
  "pi paper redirect",
);
if (piPaperPage.includes('class="essay-pdf"') || piPaperPage.includes('class="rack"') || piPaperPage.includes("<iframe") || piPaperPage.includes("<script")) {
  fail("pi paper route must redirect to the PDF, not a viewer or a rack");
}
mustExclude(piPaperPage, researchLeakNeedles, "pi paper redirect");

for (const [page, label] of [
  [home, "home"],
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

function assertNoInlineScripts(page, label) {
  const tags = [...page.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  for (const [, attrs, body] of tags) {
    if (!/\bsrc\s*=/i.test(attrs) || body.trim().length > 0) {
      fail(`${label} has an inline script`);
    }
  }
}

for (const [page, label] of [
  [home, "home"],
  [research, "research"],
  [essay, "essay redirect"],
  [piPaperPage, "pi paper redirect"],
  [spa, "404"],
]) {
  assertNoInlineScripts(page, label);
  if (!page.includes('http-equiv="Content-Security-Policy"') || !page.includes("script-src 'self'")) {
    fail(`${label} must include the content security policy`);
  }
  if (page.includes("cloudflareinsights") || page.includes("data-cf-beacon") || page.includes("fonts.googleapis.com")) {
    fail(`${label} must not load third-party analytics or fonts`);
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
    ".page.home .layout{width:100%;max-width:calc(var(--text-col) + 2 * var(--pad-x))",
  ],
  "css",
);
mustExclude(
  css,
  [
    "orbit-spin",
    ".sky",
    "grok-glance",
    "fleet-idle",
    "scope-sweep",
    "essay-pdf",
    "essay-back",
    ".page.essay",
    ".rack",
    "live-pulse",
    "@keyframes",
    "Geist",
    "color-scheme:dark",
    "#0a0a0a",
    ".inbox-address",
    ".collection",
    ".roster",
    ".row-tip",
    "position:sticky",
    "--side-col",
    "--page-max",
    ".home-foot{grid-column:1}",
  ],
  "css",
);
const profilesRule = css.match(/\.page\.home \.profiles\{[^}]*\}/)?.[0] ?? "";
if (!profilesRule.includes("flex-direction:column") || profilesRule.includes("flex-wrap")) {
  fail(`profiles must stack one link per row: ${profilesRule}`);
}
const profilesList = home.match(/<ul class="profiles">[\s\S]*?<\/ul>/)?.[0] ?? "";
const profileRows = profilesList.match(/<li>/g) ?? [];
if (profileRows.length !== 6 || (profilesList.match(/class="contact-mark"/g) ?? []).length !== 6) {
  fail("profiles must keep six icon links, one list item each");
}
if (readdirSync("dist/assets").some((name) => name.endsWith(".map"))) {
  fail("dist must not ship source maps");
}
mustExclude(js, ["requestAnimationFrame", "setInterval", "/research/rack/status.json", "webgl", "essay-pdf", "essay-back", "agentmail", "ARC-AGI", "Entity Resolution", "Structured Views for Agent-Native UIs", "reactive-flows", "fragmented records", "hallucination", "screenshots or a flat accessibility tree", ">openpi<", "Internal Tooling", "Part Data Hub", "Cybercab", "Robotaxi", "Grok Integrations", "https://www.tesla.com/robotaxi", "https://grok.com", "asteroid preliminary design review", "terrain mapping", "temporal-buddies5.vercel.app", "Temporal", "sourceMappingURL", "cloudflareinsights", "personal agents collection", "profile lead", "/fleet/", 'class="collection"', "data-seat"], "js");

const manifest = read("dist/site.webmanifest");
mustInclude(
  manifest,
  [
    "Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego.",
  ],
  "manifest",
);
mustExclude(
  manifest,
  ["Redwood City", "Robotaxi", "Optimus", "telemetry", "diagnostics", "Grok Integrations"],
  "manifest",
);

function assertPoster(path) {
  if (!existsSync(path)) fail(`missing ${path}`);
  const bytes = readFileSync(path);
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) fail(`${path} is not a JPEG`);
  let i = 2;
  let width = 0;
  let height = 0;
  while (i < bytes.length - 8) {
    if (bytes[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = bytes[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9)) {
      i += 2;
      continue;
    }
    if (marker === 0xda) break;
    const seglen = bytes.readUInt16BE(i + 2);
    if (marker === 0xe1 && bytes.subarray(i + 4, i + 8).toString("latin1") === "Exif") {
      fail(`${path} still has EXIF`);
    }
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      height = bytes.readUInt16BE(i + 5);
      width = bytes.readUInt16BE(i + 7);
    }
    i += 2 + seglen;
  }
  const longEdge = Math.max(width, height);
  if (longEdge < 2000) fail(`${path} long edge must be at least 2000px, found ${String(longEdge)}`);
}

assertPoster("public/fire-whirls-poster.jpg");

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
  "bot/index.html",
  "dist/bot",
  "public/fleet",
  "fleet",
  "dist/fleet",
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
    "Allow: /research/",
    "Allow: /assets/",
    "Sitemap: https://akashnaren.github.io/sitemap.xml",
  ],
  "robots.txt",
);
mustExclude(robots, [/fishbowl/i, "Disallow: /research/fishbowl", "Allow: /bot/", "Allow: /fleet/"], "robots.txt");

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
    "<loc>https://akashnaren.github.io/research/</loc>",
    "<loc>https://akashnaren.github.io/research/pi-0.2-high/paper.pdf</loc>",
    "<loc>https://akashnaren.github.io/research/agent-native-ui/paper.pdf</loc>",
  ],
  "sitemap.xml",
);
mustExclude(
  sitemap,
  ["fishbowl", "status.json", "/research/rack", "ARC-AGI", "fragmented records", "hallucination", "Raspberry Pi Inference Mesh", "Structured Views for Agent-Native UIs", "Entity Resolution", "reactive-flows", "https://akashnaren.github.io/bot/"],
  "sitemap.xml",
);

console.log("dist matches the public pages, favicon, research PDF, fire-whirls poster, robots.txt, and sitemap.xml.");
