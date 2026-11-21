import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import LaserGanzkoerper from "@/pages/LaserGanzkoerper";

export const Route = createFileRoute("/laser-ganzkoerper-maenner")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: LaserGanzkoerper,
});
