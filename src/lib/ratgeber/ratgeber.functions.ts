import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getArticles } from "./feed.server";

export const listRatgeberArticles = createServerFn({ method: "GET" }).handler(async () => {
  const articles = await getArticles();
  return articles.map(({ contentHtml: _omit, ...card }) => card);
});

export const getRatgeberArticle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ slug: z.string().min(1).max(200) }).parse(input))
  .handler(async ({ data }) => {
    const articles = await getArticles();
    const article = articles.find((a) => a.slug === data.slug) ?? null;
    const related = articles
      .filter((a) => a.slug !== data.slug)
      .slice(0, 3)
      .map(({ contentHtml: _omit, ...card }) => card);
    return { article, related };
  });
