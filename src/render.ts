import {
  agentInbox,
  body,
  botDescription,
  botTitle,
  botUrl,
  collectionLine,
  collectionPath,
  collectionTitle,
  contact,
  description,
  fleetFact,
  fleetInvite,
  fleetLine,
  fleetMarkSize,
  isLink,
  managedBy,
  managedByHere,
  managedMarkSize,
  marketplace,
  name,
  personalMail,
  pickLine,
  seats,
  url,
  type Contact,
  type Paragraph,
  type Phrase,
  type Seat,
} from "./content.ts";

export type PageMeta = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
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

function renderGrokBotMark(kind: "managed" | "seat" | "fleet" = "managed"): string {
  const seat = kind === "seat";
  const fleet = kind === "fleet";
  const size = String(fleet ? fleetMarkSize : seat ? 36 : managedMarkSize);
  const photon = fleet ? "24" : seat ? "40" : "20";
  const wrap = fleet ? "grok-bot-wrap fleet-wrap" : seat ? "grok-bot-wrap seat-wrap" : "grok-bot-wrap";
  return `<span class="${wrap}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${photon}" height="${photon}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${size}" height="${size}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`;
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

function renderFleetFace(seat: Seat): string {
  const name = escapeHtml(seat.name);
  const href = escapeHtml(collectionPath);
  const host = seat.id === "profile-assistant";
  const mark = host
    ? renderGrokBotMark("fleet")
    : renderMark(seat.face, fleetMarkSize, "fleet-mark");
  const klass = host ? "fleet-face is-host" : "fleet-face";
  return `<a class="${klass}" href="${href}" title="${name}" aria-label="${name}">${mark}<span class="fleet-tip" aria-hidden="true">${name}</span></a>`;
}

function renderFleet(): string {
  const marks = seats.map(renderFleetFace).join("");
  return `<p class="fleet">${marks}</p>
          <p class="fleet-line">${escapeHtml(fleetLine)}</p>
          <p class="fleet-invite"><a href="${escapeHtml(collectionPath)}">${escapeHtml(fleetInvite)}</a></p>`;
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

function renderFact(): string {
  return `<p class="fact">${escapeHtml(fleetFact)}</p>`;
}

function renderSolarSystem(): string {
  return `<svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>`;
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
        ${renderSolarSystem()}
      </div>
    </div>`;
}

function renderRow(seat: Seat, on = false): string {
  const pressed = on ? "true" : "false";
  const klass = on ? "row is-on" : "row";
  return `<button type="button" class="${klass}" role="listitem" data-seat="${escapeHtml(seat.id)}" data-name="${escapeHtml(seat.name)}" data-blurb="${escapeHtml(seat.blurb)}" aria-pressed="${pressed}" aria-label="${escapeHtml(seat.name)}">${renderMark(seat.face, 40, "row-face")}<span class="row-id"><span class="row-name">${escapeHtml(seat.name)}</span><span class="row-blurb">${escapeHtml(seat.blurb)}</span></span></button>`;
}

function renderBoard(): string {
  const host = seats[0];
  const rows = seats.map((seat, index) => renderRow(seat, index === 0)).join("");
  const name = host?.name ?? pickLine;
  const copy = host?.blurb ?? "";
  return `<main class="board" data-cycle="3000">
        <aside class="brief is-open" aria-live="off">
          <p class="brief-name">${escapeHtml(name)}</p>
          <p class="brief-copy">${escapeHtml(copy)}</p>
        </aside>
        <div class="roster" role="list">${rows}</div>
        <p class="fleet-line">${escapeHtml(fleetLine)}</p>
      </main>`;
}

export function renderBot(): string {
  return `<div class="page profile" id="holder">
      <div class="stage">
      <div class="rail">
        <header class="mast">
          ${renderGrokBotMark("seat")}
          <div class="mast-id">
            <h1>${escapeHtml(collectionTitle)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="seat-line">${collectionLine.map(renderPhrase).join("")}</p>
          </div>
        </header>
        <section class="write">
          ${renderInbox(agentInbox.label, agentInbox.tip)}
        </section>
      </div>
      ${renderBoard()}
      <footer class="foot">
        ${renderManagedBy(managedByHere)}
        <p class="market"><a class="market-link" href="${escapeHtml(marketplace.href)}">${escapeHtml(marketplace.label)}</a></p>
      </footer>
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
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${href}$2`);
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
  ];
  for (const [selector, value] of pairs) {
    document.querySelector(selector)?.setAttribute("content", value);
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", meta.url);
}
