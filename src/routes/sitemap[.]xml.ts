import { createFileRoute } from "@tanstack/react-router";
import { getArticles } from "@/lib/ratgeber/feed.server";
import { buildSitemap } from "@/lib/ratgeber/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articles = await getArticles();
        return new Response(buildSitemap(articles), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
