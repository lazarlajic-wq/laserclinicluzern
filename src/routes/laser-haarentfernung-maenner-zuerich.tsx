import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import LaserZuerich from "@/pages/LaserZuerich";

export const Route = createFileRoute("/laser-haarentfernung-maenner-zuerich")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: LaserZuerich,
});
