import {
  contact,
  description,
  isLink,
  mailHeading,
  name,
  personalMail,
  profilesHeading,
  projectLinks,
  projectsHeading,
  researchHeading,
  researchLines,
  themeColor,
  workHeading,
  workLines,
  url,
  type AspectGroup,
  type Contact,
  type Paragraph,
  type Phrase,
} from "./content.ts";

export type PageMeta = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly themeColor?: string;
};

export const homeMeta: PageMeta = {
  title: name,
  description,
  url,
  themeColor,
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const contentSecurityPolicy =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-src 'none'; script-src 'self' https://www.googletagmanager.com 'sha256-LU2QzDVigt8c/qPI4OSrXdouXbBTBxWXKoloB3+onaA='; style-src 'self'; img-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com; manifest-src 'self'";

export function cspMetaTag(): string {
  return `<meta http-equiv="Content-Security-Policy" content="${escapeHtml(contentSecurityPolicy)}" />`;
}

export function renderDevShell(): string {
  const title = escapeHtml(name);
  const desc = escapeHtml(description);
  const href = escapeHtml(url);
  const color = escapeHtml(themeColor ?? "#fffff8");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="google-site-verification" content="_FQKIy1kMNXEJEOOs5sO2g0oFi9VCUe4d5lkvEPumRE" />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QCH628QG8H"></script>
    <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QCH628QG8H');
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <meta name="color-scheme" content="light" />
    <meta name="theme-color" content="${color}" />
    <link rel="canonical" href="${href}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${href}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/favicon.svg" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/src/style.css" />
  </head>
  <body>
    <div id="holder"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`;
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
  return path === "/research" || path === "/research/";
}

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

function renderAspectGroup(group: AspectGroup): string {
  const links = group.aspects
    .map(
      (aspect) =>
        `<a class="aspect" href="${escapeHtml(aspect.href)}"${linkAttrs(aspect.href)}>${escapeHtml(aspect.label)}</a>`,
    )
    .join(", ");
  return `${escapeHtml(group.role)} <span class="aspects">(${links})</span>`;
}

function renderPhrase(part: Phrase): string {
  if (typeof part === "string") return escapeHtml(part);
  if (isLink(part)) {
    const icon = isSitePageHref(part.href) ? renderLinkIcon() : "";
    return `<a href="${escapeHtml(part.href)}"${linkAttrs(part.href)}>${escapeHtml(part.label)}${icon}</a>`;
  }
  switch (part.kind) {
    case "aspects":
      return renderAspectGroup(part);
    default: {
      const unexpected: never = part.kind;
      return unexpected;
    }
  }
}

function phraseText(part: Phrase): string {
  if (typeof part === "string") return part;
  if (isLink(part)) return part.label;
  switch (part.kind) {
    case "aspects":
      return `${part.role} (${part.aspects.map((aspect) => aspect.label).join(", ")})`;
    default: {
      const unexpected: never = part.kind;
      return unexpected;
    }
  }
}

function lineText(line: readonly Phrase[]): string {
  return line.map(phraseText).join("");
}

function splitLedger(line: readonly Phrase[]): { label: readonly Phrase[]; detail: readonly Phrase[] } {
  const [first, ...rest] = line;
  if (first && isLink(first)) return { label: [first], detail: rest };
  return { label: [...line], detail: [] };
}

function renderDetailPhrase(part: Phrase): string {
  if (typeof part === "string") return escapeHtml(part);
  if (isLink(part)) return renderDocLink(part.href, part.label);
  switch (part.kind) {
    case "aspects":
      return renderAspectGroup(part);
    default: {
      const unexpected: never = part.kind;
      return unexpected;
    }
  }
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

function renderContactLink(item: Contact): string {
  const mark = `<img class="contact-mark" src="${escapeHtml(item.mark)}" alt="" width="14" height="14" decoding="async" />`;
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
        </ul>
      </section>`;
}

function renderDocLink(href: string, label: string): string {
  const external = /^https?:\/\//i.test(href);
  const existingRel = external ? "noopener noreferrer" : "";
  const icon = external || /\.(?:pdf|jpe?g)(?:$|[?#])/i.test(href) ? renderLinkIcon() : "";
  return `<a href="${escapeHtml(href)}"${linkAttrs(href, existingRel)}>${escapeHtml(label)}${icon}</a>`;
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
        ${renderBand("research", researchHeading, researchLines, true)}
        ${renderProjectsSection()}
        ${renderProfiles()}
        ${renderMail()}
      </main>
    </div>
  </div>`;
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
}
