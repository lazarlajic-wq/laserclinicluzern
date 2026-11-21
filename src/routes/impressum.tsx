import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import Impressum from "@/pages/Impressum";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: Impressum,
});
