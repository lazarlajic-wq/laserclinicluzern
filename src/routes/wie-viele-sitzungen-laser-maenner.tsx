import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import BlogSitzungen from "@/pages/BlogSitzungen";

export const Route = createFileRoute("/wie-viele-sitzungen-laser-maenner")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: BlogSitzungen,
});
