import {
  agentInbox,
  body,
  contact,
  fleetLine,
  fleetMarkSize,
  fleetMarks,
  isLink,
  managedBy,
  managedMarkSize,
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

function renderGrokBotMark(): string {
  const size = String(managedMarkSize);
  return `<svg class="grok-bot-mark" viewBox="0 0 32 32" width="${size}" height="${size}" aria-hidden="true" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg>`;
}

function renderManagedBy(): string {
  return `<p class="managed">${renderGrokBotMark()} ${managedBy.map(renderPhrase).join("")}</p>`;
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

function renderInbox(): string {
  return `<p class="inbox"><span class="inbox-label">${escapeHtml(agentInbox.label)}</span><a class="inbox-address" href="${escapeHtml(agentInbox.href)}">${escapeHtml(agentInbox.address)}</a><span class="inbox-aside">${escapeHtml(agentInbox.aside)}</span></p>`;
}

export function renderSite(): string {
  const paragraphs = body.map(renderParagraph).join("\n          ");

  return `<div id="holder">
      <div id="left"></div>
      <main>
        <div class="bio">
          <header>
            <h1>${escapeHtml(name)}</h1>
            <p class="meta">${escapeHtml(role.prefix)}<a href="${escapeHtml(role.company.href)}">${escapeHtml(role.company.label)}</a></p>
          </header>
          ${paragraphs}
        </div>
        ${renderContact()}
        <div class="site-stack">
          ${renderManagedBy()}
          ${renderFleet()}
          ${renderInbox()}
        </div>
      </main>
      <div id="right"></div>
    </div>`;
}
