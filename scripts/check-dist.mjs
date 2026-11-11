import { createHash } from "node:crypto";
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
  /fishbowl/i,
  /raspberry pi/i,
];

const allowedOpenPiHref = "https://rpi-pi4.taild6c87d.ts.net/";

const home = read("dist/index.html");
const spa = read("dist/404.html");

for (const [dist, root] of [
  ["dist/index.html", "index.html"],
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
    'title="Tesla — Vehicle Service (Software, Service, Parts)"',
    '<span class="entry-detail"> — Vehicle Service <span class="aspects">(<a class="aspect" href="https://www.tesla.com/careers/vehicle-software" target="_blank" rel="noopener noreferrer">Software</a>, <a class="aspect" href="https://service.tesla.com/en-US/" target="_blank" rel="noopener noreferrer">Service</a>, <a class="aspect" href="https://parts.tesla.com/en-US/landingpage" target="_blank" rel="noopener noreferrer">Parts</a>)</span>',
    'title="Tesla — Vehicle Engineering (SI, Manufacturing, Robotaxi)"',
    '<span class="entry-detail"> — Vehicle Engineering <span class="aspects">(<a class="aspect" href="https://www.tesla.com/SI" target="_blank" rel="noopener noreferrer">SI</a>',
    '<a class="aspect" href="https://www.tesla.com/manufacturing" target="_blank" rel="noopener noreferrer">Manufacturing</a>',
    '<a class="aspect" href="https://www.tesla.com/robotaxi" target="_blank" rel="noopener noreferrer">Robotaxi</a>',
    "https://www.tesla.com/careers/vehicle-software",
    "https://service.tesla.com/en-US/",
    "https://parts.tesla.com/en-US/landingpage",
    "https://www.tesla.com/SI",
    "https://www.tesla.com/manufacturing",
    "https://www.tesla.com/robotaxi",
    "https://www.tesla.com/",
    ">Tesla</a>",
    "https://www.rtx.com/raytheon",
    ">Raytheon</a>",
    'title="Raytheon — Avionics Networking Test Suite (Avionics)"',
    "https://www.rtx.com/collinsaerospace/what-we-do/industries/military-and-defense/avionics#gdpr",
    "https://www.lspace.asu.edu/",
    ">NASA L’SPACE</a>",
    'title="NASA L’SPACE — Research Projects (PDR, Proposal)"',
    "https://drive.google.com/file/d/1_4rUkE6szP9zwGZnvw2Pxn4_UPHdr7fI/view?usp=sharing",
    "https://drive.google.com/file/d/1ggGNBfAx8vliZn4ClRC5ZWsN55CeIcLg/view?usp=sharing",
    '<h2 id="research">Research</h2>',
    "Multiscale Flow Physics Lab",
    'href="https://asanchez.ucsd.edu/"',
    ">Multiscale Flow Physics Lab</a>",
    'title="Multiscale Flow Physics Lab — Fire Whirls (Poster)"',
    'href="/fire-whirls-poster.jpg"',
    '<h2 id="profiles">Profiles</h2>',
    ">GitHub</span>",
    ">LinkedIn</span>",
    ">X</span>",
    ">Cursor</span>",
    ">Hugging Face</span>",
    ">Kaggle</span>",
    '<h2 id="mail">Mail</h2>',
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
    'class="layout"',
    "<h2 id=\"projects\">Projects</h2>",
    ">OpenPi</a>",
    `href="${allowedOpenPiHref}"`,
    'href="https://meetlavalamp.com"',
    ">LavaLamp</a>",
    'rel="noopener noreferrer"',
    'name="color-scheme" content="light"',
    'name="theme-color" content="#fffff8"',
  ],
  "home",
);

mustExclude(
  home.replaceAll(allowedOpenPiHref, ""),
  [
    ...leakNeedles,
    "Network Intelligence Platform",
    "Raspberry Pi Distributed Inference",
    "Agent-native views of websites",
    "Interface Compiler",
    "interface-compiler",
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
    "aim-online.com",
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
    "Grok Integrations",
    "https://grok.com",
    "asteroid preliminary design review",
    "terrain mapping",
    "Managed by ",
    "this site is managed by",
    "https://x.ai/bot",
    'class="site-credit"',
    "aspect-gap",
    "·",
    "mailto:akashnaren@mail.grokbot.com",
    "akashnaren@mail.grokbot.com",
    "bots' inbox",
    "the agents' inbox, not my personal Gmail",
    'class="managed-copy"',
    'class="foot home-foot"',
    'class="mail-kind"',
    "grok-bot-mark",
    ">Grok Bot</a>",
    "Fire whirl",
    "fire whirl",
    'class="managed byline"',
    "Independent work",
    "grok bot collection",
    "Raspberry Pi Inference Mesh",
    "Structured Views for Agent-Native UIs",
    "Agent-Native UI",
    "agent-native-ui",
    "Interfaces for Computer-Use Agents",
    "The Interface Is a Variable",
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

if (home.includes('href="/bot"') || home.includes('href="/research"') || home.includes('href="#bot"') || home.includes("https://x.ai/bot")) {
  fail("home must inline research and must not link /bot, /research, #bot, or x.ai/bot");
}
const managedNeedles = ["this site is managed by", "https://x.ai/bot", "site-credit"];
for (const [label, source] of [
  ["src/content.ts", read("src/content.ts")],
  ["src/render.ts", read("src/render.ts")],
  ["src/style.css", read("src/style.css")],
]) {
  const hit = managedNeedles.find((needle) => source.includes(needle));
  if (hit) fail(`${label} still includes managed-by markup: ${hit}`);
}
if (/>(?:Tesla|Cybercab \+ Robotaxi Program|Grok|Raytheon|NASA L’SPACE|Multiscale Flow Physics Lab|LavaLamp|OpenPi)<svg class="ext"/.test(home)) {
  fail("name links must stay unmarked");
}
const workSection = home.match(/aria-labelledby="work">[\s\S]*?<\/section>/)?.[0] ?? "";
const workRows = [...workSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
if (workRows.length !== 3) fail(`work must list three rows, found ${String(workRows.length)}`);
const expectedWork = [
  `<li title="Tesla — Vehicle Service (Software, Service, Parts)"><span class="entry-name"><a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">Tesla</a></span><span class="entry-detail"> — Vehicle Service <span class="aspects">(<a class="aspect" href="https://www.tesla.com/careers/vehicle-software" target="_blank" rel="noopener noreferrer">Software</a>, <a class="aspect" href="https://service.tesla.com/en-US/" target="_blank" rel="noopener noreferrer">Service</a>, <a class="aspect" href="https://parts.tesla.com/en-US/landingpage" target="_blank" rel="noopener noreferrer">Parts</a>)</span></span></li>`,
  `<li title="Tesla — Vehicle Engineering (SI, Manufacturing, Robotaxi)"><span class="entry-name"><a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer">Tesla</a></span><span class="entry-detail"> — Vehicle Engineering <span class="aspects">(<a class="aspect" href="https://www.tesla.com/SI" target="_blank" rel="noopener noreferrer">SI</a>, <a class="aspect" href="https://www.tesla.com/manufacturing" target="_blank" rel="noopener noreferrer">Manufacturing</a>, <a class="aspect" href="https://www.tesla.com/robotaxi" target="_blank" rel="noopener noreferrer">Robotaxi</a>)</span></span></li>`,
  `<li title="Raytheon — Avionics Networking Test Suite (Avionics)"><span class="entry-name"><a href="https://www.rtx.com/raytheon" target="_blank" rel="noopener noreferrer">Raytheon</a></span><span class="entry-detail"> — Avionics Networking Test Suite <span class="aspects">(<a class="aspect" href="https://www.rtx.com/collinsaerospace/what-we-do/industries/military-and-defense/avionics#gdpr" target="_blank" rel="noopener noreferrer">Avionics</a>)</span></span></li>`,
];
for (const [index, row] of expectedWork.entries()) {
  if (workRows[index] !== row) fail(`work row ${String(index + 1)} must keep the dash layout: ${row}`);
}
if ((workSection.match(/<a /g) ?? []).length !== 10) {
  fail("work rows must link Tesla, Software, Service, Parts, Tesla, SI, Manufacturing, Robotaxi, Raytheon, and Avionics");
}
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
if (mainEnd < 0) fail("home is missing </main>");
const mainHtml = home.slice(home.indexOf("<main"), mainEnd);
if (mainHtml.includes('class="collection"')) {
  fail("home main must not include a collection");
}
if (/<footer\b/i.test(home)) fail("home must not include a footer");
const mailSection = home.match(/aria-labelledby="mail">[\s\S]*?<\/section>/)?.[0] ?? "";
const mailLinks = mailSection.match(/<a /g) ?? [];
if (mailLinks.length !== 1 || !mailSection.includes("mailto:akashnaren@gmail.com")) {
  fail("mail must list only akashnaren@gmail.com");
}
if (!/\/assets\/index-[^"]+\.js/.test(home)) fail("home must reference hashed /assets/index-*.js");
if (home.includes("/src/main.ts")) fail("built home must not be the Vite shell");

const researchSection = home.match(/aria-labelledby="research">[\s\S]*?<\/section>/)?.[0] ?? "";
const projectsSection = home.match(/aria-labelledby="projects">[\s\S]*?<\/section>/)?.[0] ?? "";
const researchRows = [...researchSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
if (researchRows.length !== 2) {
  fail(`research must list 2 rows, found ${String(researchRows.length)}`);
}
if (researchSection.includes("Agent-Native UI") || researchSection.includes("agent-native-ui")) {
  fail("Agent-Native UI must not be listed under Research");
}
const projectItems = projectsSection.match(/<li[\s>]/g) ?? [];
if (projectItems.length !== 2) {
  fail(`projects must list LavaLamp and OpenPi, found ${String(projectItems.length)}`);
}
if (/<p[\s>]/.test(researchSection) || /<p[\s>]/.test(projectsSection)) {
  fail("research and projects must not include blurbs");
}
const expectedResearch = [
  `<li title="NASA L’SPACE — Research Projects (PDR, Proposal)"><span class="entry-name"><a href="https://www.lspace.asu.edu/" target="_blank" rel="noopener noreferrer">NASA L’SPACE</a></span><span class="entry-detail"> — Research Projects <span class="aspects">(<a class="aspect" href="https://drive.google.com/file/d/1_4rUkE6szP9zwGZnvw2Pxn4_UPHdr7fI/view?usp=sharing" target="_blank" rel="noopener noreferrer">PDR</a>, <a class="aspect" href="https://drive.google.com/file/d/1ggGNBfAx8vliZn4ClRC5ZWsN55CeIcLg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Proposal</a>)</span></span></li>`,
  `<li title="Multiscale Flow Physics Lab — Fire Whirls (Poster)"><span class="entry-name"><a href="https://asanchez.ucsd.edu/" target="_blank" rel="noopener noreferrer">Multiscale Flow Physics Lab</a></span><span class="entry-detail"> — Fire Whirls <span class="aspects">(<a class="aspect" href="/fire-whirls-poster.jpg" target="_blank" rel="noopener noreferrer">Poster</a>)</span></span></li>`,
];
for (const [index, row] of expectedResearch.entries()) {
  if (researchRows[index] !== row) fail(`research row ${String(index + 1)} must keep the dash layout: ${row}`);
}
const lab = researchRows[1] ?? "";
if ((lab.match(/<a /g) ?? []).length !== 2) {
  fail("the lab line must link the lab and Poster");
}
if (!lab.includes('rel="noopener noreferrer"') || lab.includes("reactive-flows") || !lab.includes('target="_blank"')) {
  fail("the lab link must open https://asanchez.ucsd.edu/ in a new tab");
}
const projectRows = [...projectsSection.matchAll(/<li[\s\S]*?<\/li>/g)].map((match) => match[0]);
const expectedProjects = [
  `<li title="LavaLamp"><span class="entry-name"><a href="https://meetlavalamp.com" target="_blank" rel="noopener noreferrer">LavaLamp</a></span></li>`,
  `<li title="OpenPi"><span class="entry-name"><a href="${allowedOpenPiHref}" target="_blank" rel="noopener noreferrer">OpenPi</a></span></li>`,
];
for (const [index, row] of expectedProjects.entries()) {
  if (projectRows[index] !== row) fail(`project row ${String(index + 1)} must be the name only: ${row}`);
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
if (/Entity Resolution|entity-resolution/.test(projectsSection) || /<p[\s>]/.test(projectsSection)) {
  fail("Projects must not include blurbs");
}
const projectPdfs = projectsSection.match(/paper\.pdf/gi) ?? [];
if (projectPdfs.length !== 0) {
  fail("Projects must not link a paper PDF");
}
const projectAnchors = projectsSection.match(/<a /g) ?? [];
if (projectAnchors.length !== 2) {
  fail(`Projects must show exactly two links, found ${String(projectAnchors.length)}`);
}
const lavalampAt = projectsSection.indexOf(">LavaLamp</a>");
const openPiAt = projectsSection.indexOf(">OpenPi</a>");
if (lavalampAt === -1 || openPiAt === -1 || lavalampAt > openPiAt) {
  fail("Projects must run LavaLamp, then OpenPi");
}
if (/lavalamp|meetlavalamp|temporal-buddies/i.test(researchSection)) {
  fail("LavaLamp must stay in Projects");
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

for (const [page, label] of [
  [home, "home"],
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

const gtagLoader =
  '<script async src="https://www.googletagmanager.com/gtag/js?id=G-QCH628QG8H"></script>';

function assertGtagSnippet(page, label) {
  if (!page.includes(gtagLoader)) fail(`${label} is missing the async gtag.js loader`);
  const tags = [...page.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  const inline = [];
  for (const [, attrs, body] of tags) {
    const external = /\bsrc\s*=/i.test(attrs);
    if (external && body.trim().length === 0) continue;
    inline.push(body);
  }
  if (inline.length !== 1) fail(`${label} must contain only the gtag config script`);
  const body = inline[0];
  if (
    !body.includes("window.dataLayer = window.dataLayer || [];") ||
    !body.includes("function gtag(){dataLayer.push(arguments);}") ||
    !body.includes("gtag('js', new Date());") ||
    !body.includes("gtag('config', 'G-QCH628QG8H');")
  ) {
    fail(`${label} gtag config script does not match the standard snippet`);
  }
  const hash = createHash("sha256").update(body).digest("base64");
  if (!page.includes(`'sha256-${hash}'`)) {
    fail(`${label} content security policy does not allow the gtag config script`);
  }
}

if (
  !home.includes(
    '<meta name="google-site-verification" content="_FQKIy1kMNXEJEOOs5sO2g0oFi9VCUe4d5lkvEPumRE" />',
  )
) {
  fail("home is missing the Search Console verification tag");
}

for (const [page, label] of [
  [home, "home"],
  [spa, "404"],
]) {
  assertGtagSnippet(page, label);
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
    ".page.home #research+.entries.ledger,.page.home #research+.entries.ledger li{display:block}",
    ".page.home #research+.entries.ledger .entry-name,.page.home #research+.entries.ledger .entry-detail{display:inline}",
  ],
  "css",
);
const aspectGroup = css.match(/\.page\.home \.aspects\{[^}]*\}/)?.[0] ?? "";
if (
  !aspectGroup.includes("font-size:var(--fs-small)") ||
  !aspectGroup.includes("color:var(--muted)") ||
  !aspectGroup.includes("font-weight:400") ||
  aspectGroup.includes("italic")
) {
  fail(`aspect group must be small, muted, and roman: ${aspectGroup || "missing"}`);
}
const aspectLink = css.match(/\.page\.home a\.aspect\{[^}]*\}/)?.[0] ?? "";
if (
  !aspectLink.includes("text-decoration:underline") ||
  !aspectLink.includes("color-mix(in srgb, currentColor 32%, transparent)")
) {
  fail(`aspect links must keep a light resting underline: ${aspectLink || "missing"}`);
}
const aspectHover = css.match(/\.page\.home a\.aspect:hover[^{]*\{[^}]*\}/)?.[0] ?? "";
if (!aspectHover.includes("text-decoration:underline") || !aspectHover.includes("text-decoration-color:var(--hover)")) {
  fail(`aspect links must underline on hover: ${aspectHover || "missing"}`);
}
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
    ".mail-kind",
    ".grok-bot-mark",
    ".managed",
    ".site-credit",
    ".aspect-gap",
    "font-style:italic",
    ".home-foot",
    ".foot{",
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
mustExclude(js, ["requestAnimationFrame", "setInterval", "/research/rack/status.json", "webgl", "essay-pdf", "essay-back", "agentmail", "mail.grokbot.com", "bots' inbox", "Managed by ", "this site is managed by", "https://x.ai/bot", "site-credit", "aspect-gap", "·", "grok-bot-mark", "ARC-AGI", "Entity Resolution", "Structured Views for Agent-Native UIs", "Agent-Native UI", "agent-native-ui", "Interfaces for Computer-Use Agents", "The Interface Is a Variable", "reactive-flows", "fragmented records", "hallucination", "screenshots or a flat accessibility tree", ">openpi<", "Internal Tooling", "Part Data Hub", "Cybercab", "Grok Integrations", "https://grok.com", "asteroid preliminary design review", "terrain mapping", "temporal-buddies5.vercel.app", "Temporal", "sourceMappingURL", "cloudflareinsights", "personal agents collection", "profile lead", "/fleet/", 'class="collection"', "data-seat"], "js");

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

for (const path of [
  "public/research/rack",
  "research/rack",
  "dist/research/rack",
  "src/rack.ts",
  "dist/research/fishbowl",
  "public/research/fishbowl",
  "public/research/agent-native-ui",
  "research/agent-native-ui",
  "dist/research/agent-native-ui",
  "src/article.ts",
  "scripts/ingest-research-article.mjs",
  "research/fishbowl",
  "scripts/build-fishbowl-paper.py",
  "scripts/build-pi-paper.mjs",
  "scripts/make-favicon.py",
  "scripts/fishbowl-manuscript.pdf",
  "src/shell.html",
  "papers",
  "public/research",
  "research",
  "dist/research",
  "bot/index.html",
  "dist/bot",
  "public/fleet",
  "fleet",
  "dist/fleet",
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
    "Allow: /assets/",
    "Sitemap: https://akashnaren.github.io/sitemap.xml",
  ],
  "robots.txt",
);
mustExclude(robots, [/fishbowl/i, "Allow: /research/", "Disallow: /research/fishbowl", "Allow: /bot/", "Allow: /fleet/"], "robots.txt");

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
  ],
  "sitemap.xml",
);
mustExclude(
  sitemap,
  ["fishbowl", "status.json", "/research/", "ARC-AGI", "fragmented records", "hallucination", "Raspberry Pi Inference Mesh", "Structured Views for Agent-Native UIs", "Entity Resolution", "reactive-flows", "https://akashnaren.github.io/bot/", "agent-native-ui"],
  "sitemap.xml",
);

console.log("dist matches the public pages, favicon, fire-whirls poster, robots.txt, and sitemap.xml.");
