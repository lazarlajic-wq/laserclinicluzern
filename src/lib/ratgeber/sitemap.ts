import { SITE_URL } from "@/lib/site";
import type { RatgeberArticle } from "./format";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function buildSitemap(articles: Pick<RatgeberArticle, "slug" | "publishedAt">[]): string {
  const newest = articles.map((a) => a.publishedAt).filter(Boolean).sort().at(-1) ?? null;
  const entries: { loc: string; lastmod: string | null }[] = [
    { loc: `${SITE_URL}/`, lastmod: null },
    { loc: `${SITE_URL}/ratgeber`, lastmod: newest },
    ...articles.map((a) => ({ loc: `${SITE_URL}/ratgeber/${encodeURIComponent(a.slug)}`, lastmod: a.publishedAt })),
  ];
  const urls = entries.map((e) =>
    [
      "  <url>",
      `    <loc>${escapeXml(e.loc)}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod.slice(0, 10)}</lastmod>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
