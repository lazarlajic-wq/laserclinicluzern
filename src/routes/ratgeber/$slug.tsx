import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, MessageCircle } from "lucide-react";
import ArticleCard from "@/components/ratgeber/ArticleCard";
import NotFound from "@/pages/NotFound";
import { getRatgeberArticle } from "@/lib/ratgeber/ratgeber.functions";
import { formatDate } from "@/lib/ratgeber/format";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/ratgeber/$slug")({
  loader: async ({ params }) => {
    const result = await getRatgeberArticle({ data: { slug: params.slug } });
    if (!result.article) throw notFound();
    return { article: result.article, related: result.related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Seite nicht gefunden | Laser Clinic Luzern" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    const url = `${SITE_URL}/ratgeber/${article.slug}`;
    const title = `${article.title} | ${SITE_NAME}`;
    const description = article.description.slice(0, 160);
    const logoUrl = `${SITE_URL}/favicon.ico`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description,
      ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
      image: [article.image ?? DEFAULT_OG_IMAGE],
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      inLanguage: "de-CH",
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: logoUrl } },
    };
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${SITE_URL}/ratgeber` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    };
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index,follow" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        ...(article.image
          ? [
              { property: "og:image", content: article.image },
              { name: "twitter:image", content: article.image },
            ]
          : []),
        ...(article.publishedAt ? [{ property: "article:published_time", content: article.publishedAt }] : []),
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(jsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  return (
    <>
      <article className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Brotkrumen" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-foreground/70">
              <li><Link to="/" className="transition-colors hover:text-accent">Start</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li><Link to="/ratgeber" className="transition-colors hover:text-accent">Ratgeber</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li aria-current="page" className="line-clamp-1 text-foreground/90">{article.title}</li>
            </ol>
          </nav>

          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">{article.title}</h1>
          {article.publishedAt && (
            <time dateTime={article.publishedAt} className="mb-10 block text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {formatDate(article.publishedAt)}
            </time>
          )}
        </div>

        {article.image && (
          <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-lg border border-border">
            <img src={article.image} alt={article.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        )}

        <div className="ratgeber-prose mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </article>

      <section className="bg-card px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Bereit für den nächsten Schritt?</h2>
          <p className="mx-auto mb-8 max-w-xl text-foreground/80">
            Kostenlose, unverbindliche Beratung via WhatsApp. Wir sagen dir ehrlich, was bei dir möglich ist.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-gold inline-flex items-center gap-2 rounded bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent/90"
          >
            <MessageCircle className="h-5 w-5" />
            Termin sichern
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">Weitere Ratgeber-Beiträge</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
