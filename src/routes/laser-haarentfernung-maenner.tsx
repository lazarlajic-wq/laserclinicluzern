import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import LaserHaarentfernungMaenner from "@/pages/LaserHaarentfernungMaenner";

export const Route = createFileRoute("/laser-haarentfernung-maenner")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: LaserHaarentfernungMaenner,
});
