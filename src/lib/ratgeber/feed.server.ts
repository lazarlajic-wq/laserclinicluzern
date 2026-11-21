import { createClient } from "@supabase/supabase-js";
import { parseFeed, type RatgeberArticle } from "./parse";

const FEED_URL =
  "https://app.anfrageheld.de/api/v1/public/feeds/nTzQIlCjjmn4DDvlzE7peqis5J1rdjQRktBCVGWCuhs.xml";
const CACHE_MS = 60 * 60 * 1000;
const RETRY_AFTER_ERROR_MS = 5 * 60 * 1000;

interface Snapshot {
  articles: RatgeberArticle[];
  fetchedAt: number;
}

let memory: Snapshot | null = null;
let inflight: Promise<RatgeberArticle[]> | null = null;

function admin() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

async function readStored(): Promise<Snapshot | null> {
  try {
    const db = admin();
    if (!db) return null;
    const { data } = await db.from("ratgeber_feed_cache").select("articles, fetched_at").eq("id", "main").maybeSingle();
    if (!data) return null;
    return { articles: data.articles as unknown as RatgeberArticle[], fetchedAt: new Date(data.fetched_at).getTime() };
  } catch {
    return null;
  }
}

async function writeStored(snapshot: Snapshot): Promise<void> {
  try {
    const db = admin();
    if (!db) return;
    const at = new Date(snapshot.fetchedAt).toISOString();
    await db.from("ratgeber_feed_cache").upsert({ id: "main", articles: snapshot.articles as never, fetched_at: at, updated_at: at });
  } catch {
    // keep serving the in-memory copy
  }
}

async function fetchFeed(): Promise<RatgeberArticle[]> {
  const res = await fetch(FEED_URL, {
    headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Feed responded ${res.status}`);
  return parseFeed(await res.text());
}

async function refresh(): Promise<RatgeberArticle[]> {
  const stored = await readStored();
  if (stored && Date.now() - stored.fetchedAt < CACHE_MS) {
    memory = stored;
    return stored.articles;
  }
  try {
    const articles = await fetchFeed();
    memory = { articles, fetchedAt: Date.now() };
    await writeStored(memory);
    return articles;
  } catch (error) {
    console.error("Ratgeber feed refresh failed; serving last good copy", error);
    const fallback = stored ?? memory;
    const articles = fallback?.articles ?? [];
    // Retry soon instead of hammering the feed on every request.
    memory = { articles, fetchedAt: Date.now() - CACHE_MS + RETRY_AFTER_ERROR_MS };
    return articles;
  }
}

/** All articles, newest first, cached for about an hour. */
export async function getArticles(): Promise<RatgeberArticle[]> {
  if (memory && Date.now() - memory.fetchedAt < CACHE_MS) return memory.articles;
  inflight ??= refresh().finally(() => {
    inflight = null;
  });
  return inflight;
}
