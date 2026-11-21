import { createFileRoute } from "@tanstack/react-router";
import { LEGACY_CANONICAL } from "@/lib/site";
import BlogEingewachseneHaare from "@/pages/BlogEingewachseneHaare";

export const Route = createFileRoute("/eingewachsene-haare-maenner-loesung")({
  head: () => ({
    meta: [{ property: "og:url", content: LEGACY_CANONICAL }],
    links: [{ rel: "canonical", href: LEGACY_CANONICAL }],
  }),
  component: BlogEingewachseneHaare,
});
