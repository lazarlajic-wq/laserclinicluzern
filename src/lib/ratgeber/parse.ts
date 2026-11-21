import { XMLParser } from "fast-xml-parser";
import xssModule from "xss";
import type * as Xss from "xss";

// xss is CommonJS; read its exports from the default import.
const { FilterXSS, whiteList } = xssModule as unknown as typeof Xss;

export type { RatgeberArticle } from "./format";
import type { RatgeberArticle } from "./format";

type XmlValue = unknown;

function text(value: XmlValue): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (Array.isArray(value)) return text(value[0]);
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    return text(obj["#text"] ?? obj["__cdata"] ?? "");
  }
  return "";
}

function attr(value: XmlValue, name: string): string {
  const node = Array.isArray(value) ? value[0] : value;
  if (node && typeof node === "object") return text((node as Record<string, unknown>)[`@_${name}`]);
  return "";
}

const ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  auml: "ä", ouml: "ö", uuml: "ü", Auml: "Ä", Ouml: "Ö", Uuml: "Ü", szlig: "ß",
  ndash: "–", mdash: "—", hellip: "…", laquo: "«", raquo: "»", bdquo: "„", ldquo: "“", rdquo: "”", rsquo: "’", lsquo: "‘",
};

export function decodeEntities(input: string): string {
  return input.replace(/&(#x?[0-9a-f]+|\w+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1]?.toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code] ?? match;
  });
}

export function htmlToText(html: string): string {
  return decodeEntities(html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90)
    .replace(/-+$/g, "");
}

/** Slug from the last path part of the link, else from the title. */
export function slugFor(link: string | null, title: string): string {
  if (link) {
    try {
      const parts = new URL(link).pathname.split("/").filter(Boolean);
      const last = parts.at(-1);
      if (last) {
        const slug = slugify(decodeURIComponent(last).replace(/\.(html?|php)$/i, ""));
        if (slug) return slug;
      }
    } catch {
      // invalid link: fall back to the title
    }
  }
  return slugify(title);
}

const sanitizer = new FilterXSS({
  whiteList: {
    ...whiteList,
    figure: ["class"],
    figcaption: ["class"],
    picture: [],
    source: ["srcset", "type", "media"],
    img: ["src", "alt", "title", "width", "height", "loading", "srcset", "sizes"],
    a: ["href", "title", "target", "rel"],
  },
  stripIgnoreTagBody: ["script", "style", "iframe", "noscript"],
  onTag(tag, html, options) {
    // The page title owns the only H1.
    if (tag === "h1") return options.isClosing ? "</h2>" : "<h2>";
    return undefined;
  },
});

export function sanitizeHtml(html: string): string {
  // A leading H1 repeats the title, which the page already shows as its H1.
  return sanitizer.process(html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, ""));
}

function imageFor(item: Record<string, unknown>, html: string): string | null {
  const candidates: string[] = [];
  const enclosures = ([] as unknown[]).concat(item["enclosure"] ?? []);
  for (const e of enclosures) {
    const type = attr(e, "type");
    if (!type || type.startsWith("image")) candidates.push(attr(e, "url"));
  }
  for (const key of ["media:content", "media:thumbnail"]) {
    for (const m of ([] as unknown[]).concat(item[key] ?? [])) {
      const medium = attr(m, "medium");
      const type = attr(m, "type");
      if ((!medium || medium === "image") && (!type || type.startsWith("image"))) candidates.push(attr(m, "url"));
    }
  }
  const group = item["media:group"] as Record<string, unknown> | undefined;
  if (group) for (const m of ([] as unknown[]).concat(group["media:content"] ?? [])) candidates.push(attr(m, "url"));
  const inline = html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  if (inline) candidates.push(decodeEntities(inline));
  return candidates.find((u) => /^https?:\/\//i.test(u)) ?? null;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  isArray: (name) => name === "item",
  processEntities: true,
  htmlEntities: true,
  trimValues: true,
});

/** Parses an RSS document. Throws when it is not RSS, so callers keep their last good copy. */
export function parseFeed(xml: string): RatgeberArticle[] {
  const doc = parser.parse(xml) as Record<string, unknown>;
  const rss = doc["rss"] as Record<string, unknown> | undefined;
  const channel = rss?.["channel"] as Record<string, unknown> | undefined;
  if (!channel || typeof channel !== "object") throw new Error("Feed has no RSS channel");
  const items = (channel["item"] as Record<string, unknown>[] | undefined) ?? [];

  const used = new Set<string>();
  const articles: RatgeberArticle[] = [];
  for (const item of items) {
    const title = htmlToText(text(item["title"]));
    if (!title) continue;
    const link = text(item["link"]) || null;
    const rawHtml = text(item["content:encoded"]);
    const rawDescription = text(item["description"]);
    const contentHtml = sanitizeHtml(rawHtml || rawDescription);
    const description = htmlToText(rawDescription) || htmlToText(rawHtml).slice(0, 300);
    const date = new Date(text(item["pubDate"]));
    let slug = slugFor(link, title) || "beitrag";
    for (let n = 2; used.has(slug); n++) slug = `${slugFor(link, title) || "beitrag"}-${n}`;
    used.add(slug);
    articles.push({
      slug,
      title,
      link,
      guid: text(item["guid"]) || null,
      publishedAt: Number.isNaN(date.getTime()) ? null : date.toISOString(),
      description,
      contentHtml,
      image: imageFor(item, rawHtml || rawDescription),
    });
  }
  return sortNewestFirst(articles);
}

export function sortNewestFirst(articles: RatgeberArticle[]): RatgeberArticle[] {
  return [...articles].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

