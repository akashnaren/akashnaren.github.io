import {
  agentInbox,
  contact,
  description,
  homeManagedBy,
  isLink,
  mailHeading,
  name,
  personalMail,
  profilesHeading,
  researchDescription,
  projectLinks,
  projectsHeading,
  researchEntries,
  researchHeading,
  researchLines,
  researchPath,
  researchTitle,
  researchUrl,
  themeColor,
  workHeading,
  workLines,
  url,
  type Contact,
  type ListedWork,
  type Paragraph,
  type Phrase,
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
  themeColor,
};

export const researchMeta: PageMeta = {
  title: `${researchTitle} · ${name}`,
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

/** Same-origin scripts, styles, images, and the web manifest. No inline scripts. */
export const contentSecurityPolicy =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; manifest-src 'self'";

export function cspMetaTag(): string {
  return `<meta http-equiv="Content-Security-Policy" content="${escapeHtml(contentSecurityPolicy)}" />`;
}

export function ensureCsp(html: string): string {
  if (html.includes("Content-Security-Policy")) return html;
  const charset = html.match(/<meta charset="utf-8"\s*\/?>/i);
  if (charset && charset.index !== undefined) {
    const insertAt = charset.index + charset[0].length;
    return `${html.slice(0, insertAt)}\n    ${cspMetaTag()}${html.slice(insertAt)}`;
  }
  const head = html.match(/<head[^>]*>/);
  if (!head || head.index === undefined) {
    throw new Error("html is missing <head>");
  }
  const insertAt = head.index + head[0].length;
  return `${html.slice(0, insertAt)}\n    ${cspMetaTag()}${html.slice(insertAt)}`;
}

function renderLinkIcon(): string {
  return `<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`;
}

function isSitePageHref(href: string): boolean {
  const path = href.split(/[?#]/, 1)[0] ?? "";
  return path === researchPath || path === `${researchPath}/`;
}

/** In-page anchors and the /research redirect stay in this tab. */
function keepsSameTab(href: string): boolean {
  return href.startsWith("#") || isSitePageHref(href);
}

function mergeRel(existing: string): string {
  const tokens = existing.split(/\s+/).filter(Boolean);
  for (const token of ["noopener", "noreferrer"]) {
    if (!tokens.includes(token)) tokens.push(token);
  }
  return tokens.join(" ");
}

function linkAttrs(href: string, existingRel = ""): string {
  if (keepsSameTab(href)) {
    return existingRel ? ` rel="${escapeHtml(existingRel)}"` : "";
  }
  return ` target="_blank" rel="${escapeHtml(mergeRel(existingRel))}"`;
}

function renderPhrase(part: Phrase): string {
  if (isLink(part)) {
    const icon = isSitePageHref(part.href) ? renderLinkIcon() : "";
    return `<a href="${escapeHtml(part.href)}"${linkAttrs(part.href)}>${escapeHtml(part.label)}${icon}</a>`;
  }
  return escapeHtml(part);
}

function lineText(line: readonly Phrase[]): string {
  return line.map((part) => (isLink(part) ? part.label : part)).join("");
}

function splitLedger(line: readonly Phrase[]): { label: readonly Phrase[]; detail: readonly Phrase[] } {
  if (line.length === 1 && !isLink(line[0])) {
    const text = line[0];
    const at = text.indexOf(" — ");
    if (at > 0) return { label: [text.slice(0, at)], detail: [text.slice(at)] };
  }
  const [first, ...rest] = line;
  if (first && isLink(first)) return { label: [first], detail: rest };
  return { label: [...line], detail: [] };
}

function renderDetailPhrase(part: Phrase): string {
  if (!isLink(part)) return escapeHtml(part);
  return renderDocLink(part.href, part.label);
}

function renderEntry(line: readonly Phrase[], ledger: boolean): string {
  const title = ` title="${escapeHtml(lineText(line))}"`;
  if (!ledger) return `<li${title}>${line.map(renderPhrase).join("")}</li>`;
  const { label, detail } = splitLedger(line);
  const detailHtml = detail.length
    ? `<span class="entry-detail">${detail.map(renderDetailPhrase).join("")}</span>`
    : "";
  return `<li${title}><span class="entry-name">${label.map(renderPhrase).join("")}</span>${detailHtml}</li>`;
}

function renderBand(id: string, heading: string, lines: readonly Paragraph[], ledger = false): string {
  const items = lines.map((line) => renderEntry(line, ledger)).join("\n          ");
  const listClass = ledger ? "entries ledger" : "entries";
  return `<section class="section" aria-labelledby="${escapeHtml(id)}">
        <h2 id="${escapeHtml(id)}">${escapeHtml(heading)}</h2>
        <ul class="${listClass}">
          ${items}
        </ul>
      </section>`;
}

function renderGrokBotMark(): string {
  return `<svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></svg>`;
}

function renderManagedBy(line: Paragraph, extra = ""): string {
  const cls = extra ? `managed ${extra}` : "managed";
  return `<p class="${cls}">${renderGrokBotMark()}<span class="managed-copy">${line.map(renderPhrase).join("")}</span></p>`;
}

function renderContactLink(item: Contact): string {
  const mark = item.mark
    ? `<img class="contact-mark" src="${escapeHtml(item.mark)}" alt="" width="14" height="14" decoding="async" />`
    : "";
  return `<a class="contact-link" href="${escapeHtml(item.href)}"${linkAttrs(item.href)}>${mark}<span>${escapeHtml(item.label)}</span></a>`;
}

function renderProfiles(): string {
  const items = contact.map((item) => `<li>${renderContactLink(item)}</li>`).join("");
  return `<section class="section" aria-labelledby="profiles">
        <h2 id="profiles">${escapeHtml(profilesHeading)}</h2>
        <ul class="profiles">${items}</ul>
      </section>`;
}

function renderMail(): string {
  return `<section class="section" aria-labelledby="mail">
        <h2 id="mail">${escapeHtml(mailHeading)}</h2>
        <ul class="mail-row">
          <li><a class="mail-address" href="${escapeHtml(personalMail.href)}"${linkAttrs(personalMail.href)}>${escapeHtml(personalMail.address)}</a></li>
          <li><span class="mail-kind">${escapeHtml(agentInbox.label)}</span><a class="mail-address" href="${escapeHtml(agentInbox.href)}"${linkAttrs(agentInbox.href)} title="${escapeHtml(agentInbox.tip)}">${escapeHtml(agentInbox.address)}</a></li>
        </ul>
      </section>`;
}

function renderDocLink(href: string, label: string): string {
  const external = /^https?:\/\//i.test(href);
  const existingRel = external ? "noopener noreferrer" : "";
  const icon = external || /\.(?:pdf|jpe?g)(?:$|[?#])/i.test(href) ? renderLinkIcon() : "";
  return `<a href="${escapeHtml(href)}"${linkAttrs(href, existingRel)}>${escapeHtml(label)}${icon}</a>`;
}

function renderListedWork(entry: ListedWork): string {
  const title = entry.href
    ? renderDocLink(entry.href, entry.title)
    : `<span class="entry-name">${escapeHtml(entry.title)}</span>`;
  const extra = (entry.links ?? []).map((link) => renderDocLink(link.href, link.label)).join("");
  return `<li data-entry="${escapeHtml(entry.id)}">${title}${extra}</li>`;
}

function renderNamedList(id: string, heading: string, items: string): string {
  return `<section class="section" aria-labelledby="${escapeHtml(id)}">
        <h2 id="${escapeHtml(id)}">${escapeHtml(heading)}</h2>
        <ul class="entries">
          ${items}
        </ul>
      </section>`;
}

function renderResearchSection(): string {
  const lab = researchLines.map((line) => {
    const linkIndex = line.findIndex(isLink);
    if (linkIndex < 0) return renderEntry(line, false);
    const link = line[linkIndex];
    if (!isLink(link)) return renderEntry(line, false);
    const detail = line.slice(linkIndex + 1);
    const detailHtml = detail.length
      ? `<span class="entry-detail">${detail.map(renderDetailPhrase).join("")}</span>`
      : "";
    return `<li>${renderPhrase(link)}${detailHtml}</li>`;
  });
  const items = [...lab, ...researchEntries.map(renderListedWork)].join("\n          ");
  return renderNamedList("research", researchHeading, items);
}

function renderProjectsSection(): string {
  return renderBand("projects", projectsHeading, projectLinks, true);
}

export function renderSite(): string {
  return `<div class="page home" id="holder">
    <div class="layout">
      <main class="stage">
        <header>
          <h1>${escapeHtml(name)}</h1>
        </header>
        ${renderBand("work", workHeading, workLines, true)}
        ${renderResearchSection()}
        ${renderProjectsSection()}
        ${renderProfiles()}
        ${renderMail()}
      </main>
      <footer class="foot home-foot">
        ${renderManagedBy(homeManagedBy)}
      </footer>
    </div>
  </div>`;
}

export function sectionRedirectHtml(href: string, title: string, description: string): string {
  const safeHref = escapeHtml(href);
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}" />
    <link rel="canonical" href="https://akashnaren.github.io/" />
    <meta http-equiv="refresh" content="0;url=${safeHref}" />
    ${cspMetaTag()}
  </head>
  <body>
    <p><a href="${safeHref}">${safeTitle}</a></p>
  </body>
</html>
`;
}

export function pdfRedirectHtml(href: string, title: string): string {
  const safeHref = escapeHtml(href);
  const safeTitle = escapeHtml(title);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle}</title>
    <meta name="description" content="${safeTitle}" />
    <link rel="canonical" href="https://akashnaren.github.io${safeHref}" />
    <meta http-equiv="refresh" content="0;url=${safeHref}" />
    ${cspMetaTag()}
  </head>
  <body>
    <p><a href="${safeHref}">${safeTitle}</a></p>
  </body>
</html>
`;
}

export function essayRedirectHtml(): string {
  return pdfRedirectHtml(paperHref, paperTitle);
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
      `$1${escapeHtml(meta.themeColor ?? "#fffff8")}$2`,
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
    ['meta[name="theme-color"]', meta.themeColor ?? "#fffff8"],
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
