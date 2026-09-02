import {
  agentNote,
  body,
  botRoster,
  grokBotMark,
  isLink,
  managedBy,
  name,
  reachOut,
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

function renderManagedBy(): string {
  return `<p class="managed"><img class="grok-bot-mark" src="${escapeHtml(grokBotMark.src)}" alt="" width="${String(grokBotMark.width)}" height="${String(grokBotMark.height)}" decoding="async" /> ${managedBy.map(renderPhrase).join("")}</p>`;
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
        ${renderParagraph(reachOut)}
        <div class="site-stack">
          ${renderManagedBy()}
          ${renderParagraph(botRoster)}
          ${renderParagraph(agentNote)}
        </div>
      </main>
      <div id="right"></div>
    </div>`;
}
