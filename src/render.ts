import {
  agentInbox,
  body,
  contact,
  fleetFact,
  fleetLine,
  fleetMarkSize,
  fleetMarks,
  isLink,
  managedBy,
  managedMarkSize,
  name,
  personalMail,
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
  return `<span class="grok-bot-wrap" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="22" height="22" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="15.2" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.2"/><circle class="grok-bot-photon-arc" cx="16" cy="16" r="15.2" fill="none" stroke="#ff6b00" stroke-width="1.15" stroke-linecap="round" stroke-dasharray="13 82" opacity="0.4"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${size}" height="${size}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`;
}

function renderManagedBy(): string {
  return `<p class="managed">${renderGrokBotMark()}<span class="managed-copy">${managedBy.map(renderPhrase).join("")}</span></p>`;
}

function renderContact(): string {
  const links = contact
    .map(
      (item) =>
        `<a class="contact-link" href="${escapeHtml(item.href)}"><img class="contact-mark" src="${escapeHtml(item.mark)}" alt="" width="14" height="14" decoding="async" /><span>${escapeHtml(item.label)}</span></a>`,
    )
    .join("");
  return `<div class="contact">
          <p class="contact-marks">${links}</p>
          <p class="human-mail"><span class="mail-label">${escapeHtml(personalMail.label)}</span><a class="mail-address" href="${escapeHtml(personalMail.href)}">${escapeHtml(personalMail.address)}</a></p>
        </div>`;
}

function renderFleet(): string {
  const marks = fleetMarks
    .map((src) => renderMark(src, fleetMarkSize, "fleet-mark"))
    .join("");
  return `<p class="fleet" aria-hidden="true">${marks}</p>
          <p class="fleet-line">${escapeHtml(fleetLine)}</p>`;
}

function renderInbox(): string {
  return `<p class="inbox"><span class="inbox-label">${escapeHtml(agentInbox.label)}</span><a class="inbox-address" href="${escapeHtml(agentInbox.href)}">${escapeHtml(agentInbox.address)}</a></p>`;
}

function renderFact(): string {
  return `<p class="fact">${escapeHtml(fleetFact)}</p>`;
}

export function renderSite(): string {
  const paragraphs = body.map(renderParagraph).join("\n          ");

  return `<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${escapeHtml(name)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="meta">${escapeHtml(role.prefix)}<a href="${escapeHtml(role.company.href)}">${escapeHtml(role.company.label)}</a></p>
          </header>
          ${paragraphs}
        </div>
        ${renderContact()}
      </main>
      <aside class="panel">
        ${renderFact()}
        ${renderFleet()}
        ${renderManagedBy()}
        ${renderInbox()}
      </aside>
      </div>
      <div class="well" aria-hidden="true">
        <div class="well-static"></div>
        <canvas class="well-canvas"></canvas>
      </div>
    </div>`;
}
