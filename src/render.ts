import {
  agentNote,
  body,
  contact,
  fleetLine,
  fleetMarkSize,
  fleetMarks,
  isLink,
  managedBy,
  managedMark,
  name,
  role,
  type Phrase,
} from "./content.ts";

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

function renderMark(src: string, size: number, className: string): string {
  return `<img class="${className}" src="${escapeHtml(src)}" alt="" width="${String(size)}" height="${String(size)}" decoding="async" />`;
}

function renderManagedBy(): string {
  return `<p class="managed">${renderMark(managedMark.src, managedMark.width, "grok-bot-mark")} ${managedBy.map(renderPhrase).join("")}</p>`;
}

function renderContact(): string {
  const links = contact
    .map(
      (item) =>
        `<a class="contact-link" href="${escapeHtml(item.href)}"><img class="contact-mark" src="${escapeHtml(item.mark)}" alt="" width="14" height="14" decoding="async" /><span>${escapeHtml(item.label)}</span></a>`,
    )
    .join("");
  return `<p class="contact">${links}</p>`;
}

function renderFleet(): string {
  const marks = fleetMarks
    .map((src) => renderMark(src, fleetMarkSize, "fleet-mark"))
    .join("");
  return `<p class="fleet" aria-hidden="true">${marks}</p>
          <p class="fleet-line">${escapeHtml(fleetLine)}</p>`;
}

export function renderSite(): string {
  const paragraphs = body.map(renderParagraph).join("\n        ");

  return `<div id="holder">
      <div id="left"></div>
      <main>
        <header>
          <h1>${escapeHtml(name)}</h1>
          <p class="meta">${escapeHtml(role.prefix)}<a href="${escapeHtml(role.company.href)}">${escapeHtml(role.company.label)}</a></p>
        </header>
        ${paragraphs}
        ${renderContact()}
        <div class="site-stack">
          ${renderManagedBy()}
          ${renderFleet()}
          ${renderParagraph(agentNote)}
        </div>
      </main>
      <div id="right"></div>
    </div>`;
}
