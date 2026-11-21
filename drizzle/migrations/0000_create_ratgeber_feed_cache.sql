CREATE TABLE public.ratgeber_feed_cache (
  id TEXT PRIMARY KEY DEFAULT 'main',
  articles JSONB NOT NULL DEFAULT '[]'::jsonb,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.ratgeber_feed_cache TO service_role;

ALTER TABLE public.ratgeber_feed_cache ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.ratgeber_feed_cache IS 'Last successful Ratgeber RSS snapshot; only server code may read or write it.';