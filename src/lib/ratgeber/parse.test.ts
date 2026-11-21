import { describe, expect, it } from "vitest";
import { parseFeed, slugFor } from "./parse";
import { buildSitemap } from "./sitemap";

const rss = (items: string) =>
  `<?xml version="1.0"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>T</title>${items}</channel></rss>`;

describe("Ratgeber feed", () => {
  it("treats an empty feed as zero articles", () => {
    expect(parseFeed(rss(""))).toEqual([]);
  });

  it("rejects a document that is not RSS so the last good copy is kept", () => {
    expect(() => parseFeed("<html><body>Fehler</body></html>")).toThrow();
  });

  it("takes the slug from the last path part of the link", () => {
    expect(slugFor("https://example.com/blog/laser-am-ruecken/", "Anderer Titel")).toBe("laser-am-ruecken");
  });

  it("falls back to the title for the slug when there is no link", () => {
    expect(slugFor(null, "Wie viele Sitzungen brauche ich?")).toBe("wie-viele-sitzungen-brauche-ich");
  });

  it("sorts newest first and survives missing fields", () => {
    const articles = parseFeed(
      rss(`
      <item><title>Alt</title><pubDate>Mon, 02 Nov 2026 08:00:00 GMT</pubDate></item>
      <item><title>Neu</title><link>https://x.ch/neu-artikel</link><pubDate>Fri, 20 Nov 2026 08:00:00 GMT</pubDate>
        <description>Kurz</description><content:encoded><![CDATA[<h1>Titel</h1><p>Text</p><h1>X</h1><script>alert(1)</script>]]></content:encoded>
        <enclosure url="https://x.ch/bild.jpg" type="image/jpeg" length="1"/></item>`),
    );
    expect(articles.map((a) => a.slug)).toEqual(["neu-artikel", "alt"]);
    expect(articles[0]!.image).toBe("https://x.ch/bild.jpg");
    expect(articles[0]!.contentHtml).not.toContain("script");
    expect(articles[0]!.contentHtml).toContain("<h2>X</h2>");
    expect(articles[1]!.image).toBeNull();
  });

  it("uses media:content as the image when there is no enclosure", () => {
    const [a] = parseFeed(rss(`<item><title>A</title><media:content url="https://x.ch/m.webp" medium="image"/></item>`));
    expect(a!.image).toBe("https://x.ch/m.webp");
  });

  it("lists every article in the sitemap with lastmod from pubDate", () => {
    const xml = buildSitemap([{ slug: "neu-artikel", publishedAt: "2026-11-20T08:00:00.000Z" }]);
    expect(xml).toContain("<loc>https://laserclinicluzern.ch/ratgeber/neu-artikel</loc>\n    <lastmod>2026-11-20</lastmod>");
  });
});
