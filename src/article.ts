import { essayUrl, name } from "./content.ts";

export type ArticleMeta = {
  readonly title: string;
  readonly dek: string;
  readonly author: string;
  readonly date: string;
  readonly status: string;
  readonly source: string;
  readonly code: string;
  readonly notes: string;
};

export type ArticleHeading = {
  readonly id: string;
  readonly text: string;
};

export type ArticleDocument = {
  readonly meta: ArticleMeta;
  readonly headings: readonly ArticleHeading[];
  readonly bodyHtml: string;
};

export const essayFile = "content/research/agent-native-ui.md";

const defaults: ArticleMeta = {
  title: "Agent-native UI",
  dek: "Four ways to show one store to a model.",
  author: name,
  date: "11 September 2026",
  status: "exploring",
  source: "stub",
  code: "https://github.com/akashnaren/agent-ui-metrics",
  notes: "https://github.com/akashnaren/research",
};

const keys = [
  "title",
  "dek",
  "author",
  "date",
  "status",
  "source",
  "code",
  "notes",
] as const;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function parseFrontmatter(source: string): {
  readonly fields: Partial<ArticleMeta>;
  readonly body: string;
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { fields: {}, body: source };

  const fields: Partial<Record<(typeof keys)[number], string>> = {};
  for (const line of (match[1] ?? "").split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!pair) continue;
    const key = pair[1];
    const value = pair[2]?.trim() ?? "";
    if (value && (keys as readonly string[]).includes(key)) {
      fields[key as (typeof keys)[number]] = value;
    }
  }
  return { fields, body: source.slice(match[0].length) };
}

function renderInline(raw: string): string {
  const stash: string[] = [];
  const hold = (html: string): string => {
    const token = `\u0000${String(stash.length)}\u0000`;
    stash.push(html);
    return token;
  };

  let text = raw;
  text = text.replace(/`([^`]+)`/g, (_all, code: string) =>
    hold(`<code>${escapeHtml(code)}</code>`),
  );
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g,
    (_all, label: string, href: string) =>
      hold(`<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`),
  );
  text = text.replace(/\*\*([^*]+)\*\*/g, (_all, inner: string) =>
    hold(`<strong>${escapeHtml(inner)}</strong>`),
  );
  text = text.replace(/\*([^*]+)\*/g, (_all, inner: string) =>
    hold(`<em>${escapeHtml(inner)}</em>`),
  );
  text = escapeHtml(text);
  return text.replace(/\u0000(\d+)\u0000/g, (_all, index: string) => {
    return stash[Number(index)] ?? "";
  });
}

function renderBlocks(body: string): {
  readonly html: string;
  readonly headings: readonly ArticleHeading[];
} {
  const cleaned = body
    .replace(/\r\n/g, "\n")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();
  const headings: ArticleHeading[] = [];
  const used = new Set<string>();
  const html: string[] = [];

  for (const chunk of cleaned.split(/\n{2,}/)) {
    const lines = chunk.split("\n").filter((line) => line.length > 0);
    if (lines.length === 0) continue;

    const heading = chunk.match(/^(#{1,3})\s+(.+)$/);
    if (heading && lines.length === 1) {
      const level = heading[1]?.length ?? 2;
      const text = heading[2]?.trim() ?? "";
      if (level === 1 || text.length === 0) continue;
      const base = slugify(text);
      let id = base;
      let n = 2;
      while (used.has(id)) {
        id = `${base}-${String(n)}`;
        n += 1;
      }
      used.add(id);
      if (level === 2) headings.push({ id, text });
      const tag = level === 3 ? "h3" : "h2";
      html.push(`<${tag} id="${escapeHtml(id)}">${renderInline(text)}</${tag}>`);
      continue;
    }

    if (lines.every((line) => /^[-*]\s+\S/.test(line))) {
      const items = lines
        .map((line) => `<li>${renderInline(line.replace(/^[-*]\s+/, ""))}</li>`)
        .join("");
      html.push(`<ul>${items}</ul>`);
      continue;
    }

    html.push(`<p>${renderInline(lines.join(" "))}</p>`);
  }

  return { html: html.join("\n"), headings };
}

export function parseArticle(source: string): ArticleDocument {
  const { fields, body } = parseFrontmatter(source);
  const { html, headings } = renderBlocks(body);
  return {
    meta: { ...defaults, ...fields },
    headings,
    bodyHtml: html,
  };
}

export function essayMetaFrom(doc: ArticleDocument): {
  readonly title: string;
  readonly description: string;
  readonly url: string;
} {
  return {
    title: doc.meta.title,
    description: doc.meta.dek,
    url: essayUrl,
  };
}
