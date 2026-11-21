import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import LaserLuzern from "@/pages/LaserLuzern";

export const Route = createFileRoute("/laser-haarentfernung-maenner-luzern")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: LaserLuzern,
});
