import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import BlogRasierenOderLasern from "@/pages/BlogRasierenOderLasern";

export const Route = createFileRoute("/rasieren-oder-lasern-maenner")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: BlogRasierenOderLasern,
});
