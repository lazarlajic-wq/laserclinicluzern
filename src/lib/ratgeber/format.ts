export interface RatgeberArticle {
  slug: string;
  title: string;
  link: string | null;
  guid: string | null;
  /** ISO timestamp, or null when the feed gave no valid date. */
  publishedAt: string | null;
  /** Plain-text summary for meta description and cards. */
  description: string;
  /** Sanitized article HTML. */
  contentHtml: string;
  image: string | null;
}

export function excerpt(text: string, max = 170): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 80 ? cut.lastIndexOf(" ") : max).trim()} …`;
}

export function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("de-CH", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Zurich" }).format(new Date(iso));
}
