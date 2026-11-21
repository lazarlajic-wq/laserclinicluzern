import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ratgeber/ArticleCard";
import { listRatgeberArticles } from "@/lib/ratgeber/ratgeber.functions";
import { SITE_URL } from "@/lib/site";

const TITLE = "Ratgeber Laser-Haarentfernung für Männer | Laser Clinic Luzern";
const DESCRIPTION =
  "Ratgeber zur Laser-Haarentfernung für Männer: Ablauf, Sitzungen, Hauttypen, Pflege und Ergebnisse – verständlich erklärt von der Laser Clinic Luzern.";
const URL = `${SITE_URL}/ratgeber`;

export const Route = createFileRoute("/ratgeber/")({
  loader: () => listRatgeberArticles(),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: RatgeberPage,
});

function RatgeberPage() {
  const articles = Route.useLoaderData();
  return (
    <>
      <section className="px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Wissen für Männer
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">Ratgeber</h1>
          <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
            Alles, was du über Laser-Haarentfernung wissen musst: wie die Behandlung funktioniert, wie viele Sitzungen
            du brauchst, was du vorher und nachher beachten solltest und welche Ergebnisse realistisch sind – ehrlich
            und verständlich erklärt.
          </p>
        </motion.div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl">
          {articles.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card px-6 py-14 text-center">
              <p className="text-lg text-foreground/90">In Kürze findest du hier unsere ersten Ratgeber-Beiträge.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
