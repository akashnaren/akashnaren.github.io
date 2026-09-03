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
  return `<span class="grok-bot-wrap" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="20" height="20" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${size}" height="${size}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`;
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
      <div class="sky" aria-hidden="true">
        <svg class="system" viewBox="0 0 240 240" focusable="false">
          <g class="orbits" fill="none" stroke="rgba(250,250,247,0.1)" stroke-width="0.45">
            <circle cx="120" cy="120" r="16"/>
            <circle cx="120" cy="120" r="26"/>
            <circle cx="120" cy="120" r="38"/>
            <circle cx="120" cy="120" r="52"/>
            <circle cx="120" cy="120" r="68"/>
            <circle cx="120" cy="120" r="84"/>
            <circle cx="120" cy="120" r="98"/>
            <circle cx="120" cy="120" r="110"/>
          </g>
          <g transform="translate(120 120)">
            <circle class="sun" cx="0" cy="0" r="4.4" fill="#d4b56a"/>
            <g class="spin spin-1"><circle cx="16" cy="0" r="1.05" fill="#9a9590"/></g>
            <g class="spin spin-2"><circle cx="26" cy="0" r="1.45" fill="#b8a078"/></g>
            <g class="spin spin-3"><circle cx="38" cy="0" r="1.55" fill="#6d8a9a"/></g>
            <g class="spin spin-4"><circle cx="52" cy="0" r="1.2" fill="#a86a50"/></g>
            <g class="spin spin-5"><circle cx="68" cy="0" r="2.25" fill="#b89870"/></g>
            <g class="spin spin-6"><circle cx="84" cy="0" r="1.9" fill="#c4b48a"/></g>
            <g class="spin spin-7"><circle cx="98" cy="0" r="1.45" fill="#7a9aa8"/></g>
            <g class="spin spin-8"><circle cx="110" cy="0" r="1.35" fill="#5a6f9a"/></g>
          </g>
        </svg>
      </div>
    </div>`;
}
