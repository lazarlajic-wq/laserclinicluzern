import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import Laserhaarentfernung from "@/pages/Laserhaarentfernung";

export const Route = createFileRoute("/laserhaarentfernung")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: Laserhaarentfernung,
});
