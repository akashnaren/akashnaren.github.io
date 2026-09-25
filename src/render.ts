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
  type Seat,
  type Thread,
} from "./content.ts";
import {
  fishbowlPaperHref,
  fishbowlPaperTitle,
  flowHref,
  meshHref,
  paperHref,
  paperTitle,
} from "./article.ts";

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

function renderPhrase(part: Phrase): string {
  if (isLink(part)) {
    return `<a href="${escapeHtml(part.href)}">${escapeHtml(part.label)}</a>`;
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
      <p class="page-link"><a href="${escapeHtml(researchPath)}">${escapeHtml(researchLinkLabel)}${renderExternalIcon()}</a></p>
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

function renderExternalIcon(): string {
  return `<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`;
}

function renderThread(thread: Thread): string {
  const title = escapeHtml(thread.title);
  const heading = thread.href
    ? `<h2><a href="${escapeHtml(thread.href)}"${thread.external ? ` rel="noopener noreferrer"` : ""}>${title}${renderExternalIcon()}</a></h2>`
    : `<h2>${title}</h2>`;
  return `<article class="thread" data-thread="${escapeHtml(thread.id)}">
        ${renderThreadFigure(thread.figure)}
        <div class="thread-copy">
          ${heading}
          <p>${escapeHtml(thread.abstract)}</p>
        </div>
      </article>`;
}

export function renderResearch(): string {
  return `<div class="page research" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${escapeHtml(researchTitle)}</h1>
      </header>
      <div class="threads">${threads.map(renderThread).join("")}</div>
      <footer class="foot">
        ${renderManagedBy()}
      </footer>
    </main>
  </div>`;
}

export function renderFishbowl(): string {
  const href = escapeHtml(fishbowlPaperHref);
  const title = escapeHtml(fishbowlPaperTitle);
  const flow = escapeHtml(flowHref);
  const mesh = escapeHtml(meshHref);
  return `<div class="page essay" id="holder">
    <p class="essay-back"><a href="${escapeHtml(researchPath)}">Research</a> <a href="${href}">pdf</a> <a href="${flow}">flow</a> <a href="${mesh}">mesh</a></p>
    <iframe class="essay-pdf" src="${href}" title="${title}"></iframe>
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
