import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import LaserRuecken from "@/pages/LaserRuecken";

export const Route = createFileRoute("/laser-ruecken-maenner")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: LaserRuecken,
});
