import { body, isLink, name, role, type Phrase } from "./content.ts";

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

export function renderSite(): string {
  const paragraphs = body
    .map((paragraph) => `<p>${paragraph.map(renderPhrase).join("")}</p>`)
    .join("\n        ");

  return `<div id="holder">
      <div id="left"></div>
      <main>
        <header>
          <h1>${escapeHtml(name)}</h1>
          <p class="meta">${escapeHtml(role.prefix)}<a href="${escapeHtml(role.company.href)}">${escapeHtml(role.company.label)}</a></p>
        </header>
        ${paragraphs}
      </main>
      <div id="right"></div>
    </div>`;
}
