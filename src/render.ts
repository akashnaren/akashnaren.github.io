import {
  agentInbox,
  body,
  botDescription,
  botTitle,
  botUrl,
  collectionTitle,
  contact,
  description,
  isLink,
  managedBy,
  name,
  personalMail,
  rackBayOccupied,
  rackCue,
  rackHeartbeatFresh,
  rackPercent,
  rackStatus,
  researchDescription,
  researchLinkLabel,
  researchPath,
  researchTitle,
  researchUrl,
  seats,
  threads,
  url,
  type Contact,
  type Paragraph,
  type Phrase,
  type RackBay,
  type RackStatus,
  type Seat,
  type Thread,
} from "./content.ts";
import { paperHref, paperTitle } from "./article.ts";

export type PageMeta = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly themeColor?: string;
  /** When set, written as `<meta name="robots">`. Omit on public landings. */
  readonly robots?: string;
};

export const homeMeta: PageMeta = {
  title: name,
  description,
  url,
};

export const botMeta: PageMeta = {
  title: botTitle,
  description: botDescription,
  url: botUrl,
};

export const researchMeta: PageMeta = {
  title: researchTitle,
  description: researchDescription,
  url: researchUrl,
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderLinkIcon(): string {
  return `<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`;
}

function isSitePageHref(href: string): boolean {
  const path = href.split(/[?#]/, 1)[0] ?? "";
  return path === "/bot" || path === "/bot/" || path === researchPath || path === `${researchPath}/`;
}

function renderPhrase(part: Phrase): string {
  if (isLink(part)) {
    const icon = isSitePageHref(part.href) ? renderLinkIcon() : "";
    return `<a href="${escapeHtml(part.href)}">${escapeHtml(part.label)}${icon}</a>`;
  }
  return escapeHtml(part);
}

function renderParagraph(paragraph: readonly Phrase[]): string {
  return `<p>${paragraph.map(renderPhrase).join("")}</p>`;
}

function renderGrokBotMark(): string {
  return `<svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></svg>`;
}

function renderManagedBy(line: Paragraph = managedBy): string {
  return `<p class="managed">${renderGrokBotMark()}<span class="managed-copy">${line.map(renderPhrase).join("")}</span></p>`;
}

function renderContactLink(item: Contact): string {
  const mark = item.mark
    ? `<img class="contact-mark" src="${escapeHtml(item.mark)}" alt="" width="14" height="14" decoding="async" />`
    : "";
  return `<a class="contact-link" href="${escapeHtml(item.href)}">${mark}<span>${escapeHtml(item.label)}</span></a>`;
}

function renderContact(): string {
  const links = contact.map(renderContactLink).join("");
  return `<div class="contact">
        <p class="contact-marks">${links}</p>
        <p class="human-mail"><span class="mail-label">${escapeHtml(personalMail.label)}</span><a class="mail-address" href="${escapeHtml(personalMail.href)}">${escapeHtml(personalMail.address)}</a></p>
      </div>`;
}

function renderInbox(label: string = agentInbox.label, tip = ""): string {
  const described = tip ? ` aria-describedby="inbox-tip"` : "";
  const titled = tip ? ` title="${escapeHtml(tip)}"` : "";
  const tipHtml = tip
    ? `<span id="inbox-tip" class="inbox-tip" role="tooltip">${escapeHtml(tip)}</span>`
    : "";
  const extra = tip ? " has-tip" : "";
  return `<p class="inbox${extra}"><span class="inbox-label">${escapeHtml(label)}</span><a class="inbox-address" href="${escapeHtml(agentInbox.href)}"${described}${titled}>${escapeHtml(agentInbox.address)}</a>${tipHtml}</p>`;
}

export function renderSite(): string {
  const paragraphs = body.map(renderParagraph).join("\n        ");

  return `<div class="page" id="holder">
    <main class="stage">
      <header>
        <h1>${escapeHtml(name)}</h1>
      </header>
      <div class="bio">
        ${paragraphs}
      </div>
      ${renderContact()}
      <p class="page-link"><a href="${escapeHtml(researchPath)}">${escapeHtml(researchLinkLabel)}${renderLinkIcon()}</a></p>
      ${renderManagedBy()}
      ${renderInbox()}
    </main>
  </div>`;
}

function renderRow(seat: Seat): string {
  return `<li class="row" data-seat="${escapeHtml(seat.id)}" data-name="${escapeHtml(seat.name)}"><img class="row-face" src="${escapeHtml(seat.face)}" alt="" width="36" height="36" decoding="async" /><span class="row-id"><span class="row-name">${escapeHtml(seat.name)}</span><span class="row-blurb">${escapeHtml(seat.blurb)}</span></span></li>`;
}

export function renderBot(): string {
  const rows = seats.map(renderRow).join("");
  return `<div class="page profile" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${escapeHtml(collectionTitle)}</h1>
      </header>
      <ul class="roster">${rows}</ul>
      <footer class="foot">
        ${renderInbox(agentInbox.label, agentInbox.tip)}
        ${renderManagedBy()}
      </footer>
    </main>
  </div>`;
}

function renderProtocolFigure(): string {
  return `<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 18v72" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <rect x="24" y="16" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
          <rect x="28" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="59" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="90" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="24" y="43" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
          <path d="M44 52.2l16 6.2M44 51.4l36-.2M84 52.2l16 6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
          <rect x="24" y="70" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.75"/>
        </svg>`;
}

function renderAxesFigure(): string {
  return `<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
          <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
          <circle cx="74" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
          <circle cx="104" cy="60" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
        </svg>`;
}

function renderGapsFigure(): string {
  return `<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 90h108" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <circle cx="30" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="58" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="114" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <path d="M33.2 40h21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
          <path d="M61.2 40h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
        </svg>`;
}

function renderThreadFigure(figure: Thread["figure"]): string {
  if (figure === "protocol") return renderProtocolFigure();
  if (figure === "axes") return renderAxesFigure();
  return renderGapsFigure();
}

function threadOpensDocument(thread: Thread): boolean {
  if (!thread.href) return false;
  return (
    thread.external === true ||
    /\.pdf(?:$|[?#])/i.test(thread.href) ||
    /^https?:\/\//i.test(thread.href)
  );
}

function renderThread(thread: Thread): string {
  const title = escapeHtml(thread.title);
  const heading = thread.href
    ? `<h2><a href="${escapeHtml(thread.href)}"${thread.external ? ` rel="noopener noreferrer"` : ""}>${title}${threadOpensDocument(thread) ? renderLinkIcon() : ""}</a></h2>`
    : `<h2>${title}</h2>`;
  return `<article class="thread" data-thread="${escapeHtml(thread.id)}">
        ${renderThreadFigure(thread.figure)}
        <div class="thread-copy">
          ${heading}
          <p>${escapeHtml(thread.abstract)}</p>
        </div>
      </article>`;
}

function renderRackBayFigure(bay: RackBay): string {
  const empty = bay.state === "empty";
  const slot = empty
    ? `<rect class="rack-slot" x="16" y="20" width="40" height="70" fill="none" stroke="rgba(250,250,247,0.16)" stroke-width="0.7" stroke-dasharray="2.4 2.2"/>`
    : `<rect class="rack-slot" x="16" y="20" width="40" height="70" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.85"/>
            <path d="M20 26h32M20 31h22" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.7"/>
            <circle cx="22" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="28" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="34" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="40" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>`;
  return `<svg class="rack-fig" viewBox="0 0 72 108" width="72" height="108" focusable="false" aria-hidden="true">
            <rect x="3.5" y="3.5" width="65" height="101" fill="none" stroke="rgba(250,250,247,0.16)" stroke-width="0.75"/>
            <path d="M9 8v92M63 8v92" fill="none" stroke="rgba(250,250,247,0.22)" stroke-width="1.15"/>
            <circle cx="9" cy="16" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="9" cy="54" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="9" cy="92" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="16" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="54" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="92" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            ${slot}
            <circle class="rack-led" cx="36" cy="13" r="2.15"/>
          </svg>`;
}

function rackBayClass(state: RackBay["state"]): string {
  if (state === "empty") return "rack-bay is-empty";
  if (state === "active") return "rack-bay is-active";
  if (state === "reserved") return "rack-bay is-reserved";
  return "rack-bay is-held";
}

function renderRackLoad(bay: RackBay, now: number): string {
  if (!rackBayOccupied(bay) || !rackHeartbeatFresh(bay.heartbeat, now)) return "";
  const cpu = rackPercent(bay.cpu);
  if (cpu === null) return "";
  const shown = Math.round(cpu);
  const label = `cpu ${String(shown)}%`;
  const mem = rackPercent(bay.mem);
  const memHtml =
    mem === null ? "" : `<span class="rack-mem">mem ${String(Math.round(mem))}%</span>`;
  return `<p class="rack-load" style="--cpu:${String(shown)}"><span class="rack-meter" aria-hidden="true"><span class="rack-meter-fill"></span></span><span class="rack-cpu">${escapeHtml(label)}</span>${memHtml}</p>`;
}

function renderRackBay(bay: RackBay, now: number = Date.now()): string {
  const name = bay.name ?? "empty";
  const klass = rackBayClass(bay.state);
  const title = bay.href
    ? `<p class="rack-name"><a href="${escapeHtml(bay.href)}">${escapeHtml(name)}</a></p>`
    : `<p class="rack-name">${escapeHtml(name)}</p>`;
  const role = bay.role ? `<p class="rack-role">${escapeHtml(bay.role)}</p>` : "";
  const note = bay.note ? `<p class="rack-note">${escapeHtml(bay.note)}</p>` : "";
  const load = renderRackLoad(bay, now);
  return `<li class="${klass}" data-bay="${escapeHtml(bay.id)}" data-state="${escapeHtml(bay.state)}">
            ${renderRackBayFigure(bay)}
            <div class="rack-copy">${title}${role}${note}${load}</div>
          </li>`;
}

export function renderRackBays(status: RackStatus, now: number = Date.now()): string {
  return status.bays.map((bay) => renderRackBay(bay, now)).join("");
}

function renderRack(): string {
  return `<section class="rack" aria-label="${escapeHtml(rackCue)}">
          <p class="cue">${escapeHtml(rackCue)}</p>
          <div class="rack-chassis">
          <ol class="rack-bays">${renderRackBays(rackStatus)}</ol>
          </div>
        </section>`;
}

export function renderResearch(): string {
  return `<div class="page research" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${escapeHtml(researchTitle)}</h1>
      </header>
      ${renderRack()}
      <div class="threads">${threads.map(renderThread).join("")}</div>
      <footer class="foot">
        ${renderManagedBy()}
      </footer>
    </main>
  </div>`;
}

export function essayRedirectHtml(): string {
  const href = paperHref;
  const title = escapeHtml(paperTitle);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${title}" />
    <link rel="canonical" href="https://akashnaren.github.io${href}" />
    <meta http-equiv="refresh" content="0;url=${href}" />
    <script>location.replace(${JSON.stringify(href)})</script>
    <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0470f893bb1740a88848e29324507551"}'></script><!-- End Cloudflare Web Analytics -->
  </head>
  <body>
    <p><a href="${href}">${title}</a></p>
  </body>
</html>
`;
}

export function replaceHolder(html: string, next: string): string {
  const painted = html.search(/<div class="page(?: [^"]*)?" id="holder">/);
  const empty = html.indexOf('<div id="holder"></div>');
  const start = painted >= 0 ? painted : empty;
  const end = html.lastIndexOf("</body>");
  if (start < 0 || end < 0) {
    throw new Error("html is missing a holder root or </body>");
  }
  return `${html.slice(0, start)}${next}\n  ${html.slice(end)}`;
}

export function applyPageMeta(html: string, meta: PageMeta): string {
  const title = escapeHtml(meta.title);
  const desc = escapeHtml(meta.description);
  const href = escapeHtml(meta.url);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*("\s*\/?>)/,
      `$1${desc}$2`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*("\s*\/?>)/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*("\s*\/?>)/,
      `$1${desc}$2`,
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*("\s*\/?>)/,
      `$1${href}$2`,
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/,
      `$1${desc}$2`,
    )
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${href}$2`)
    .replace(
      /(<meta name="theme-color" content=")[^"]*("\s*\/?>)/,
      `$1${escapeHtml(meta.themeColor ?? "#0a0a0a")}$2`,
    )
    .replace(
      /\s*<meta name="robots" content="[^"]*"\s*\/?>/,
      "",
    )
    .replace(
      /(<meta name="description" content="[^"]*"\s*\/?>)/,
      meta.robots
        ? `$1\n    <meta name="robots" content="${escapeHtml(meta.robots)}" />`
        : "$1",
    );
}

export function applyDocumentMeta(meta: PageMeta): void {
  document.title = meta.title;
  const pairs: ReadonlyArray<readonly [string, string]> = [
    ['meta[name="description"]', meta.description],
    ['meta[property="og:title"]', meta.title],
    ['meta[property="og:description"]', meta.description],
    ['meta[property="og:url"]', meta.url],
    ['meta[name="twitter:title"]', meta.title],
    ['meta[name="twitter:description"]', meta.description],
    ['meta[name="theme-color"]', meta.themeColor ?? "#0a0a0a"],
  ];
  for (const [selector, value] of pairs) {
    document.querySelector(selector)?.setAttribute("content", value);
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", meta.url);
  const robots = document.querySelector('meta[name="robots"]');
  if (meta.robots) {
    const tag = robots ?? document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", meta.robots);
    if (!robots) document.head.appendChild(tag);
    return;
  }
  robots?.remove();
}
