import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { excerpt, formatDate, type RatgeberArticle } from "@/lib/ratgeber/format";
import logo from "@/assets/logo.png";

export type ArticleCardData = Omit<RatgeberArticle, "contentHtml">;

export default function ArticleCard({ article }: { article: ArticleCardData }) {
  return (
    <Link
      to="/ratgeber/$slug"
      params={{ slug: article.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent/40"
    >
      <div className="aspect-[16/9] overflow-hidden bg-secondary">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <img src={logo} alt="" className="h-12 opacity-40 brightness-0 invert" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {article.publishedAt && (
          <time dateTime={article.publishedAt} className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {formatDate(article.publishedAt)}
          </time>
        )}
        <h2 className="mb-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
          {article.title}
        </h2>
        {article.description && (
          <p className="mb-6 text-sm leading-relaxed text-foreground/75">{excerpt(article.description)}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Weiterlesen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
