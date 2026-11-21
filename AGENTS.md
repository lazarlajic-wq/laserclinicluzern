# Project rules

- Keep Search Console verification in the root route head and serve the sitemap from a server route at /sitemap.xml so Google can read both without JavaScript and new Ratgeber articles appear automatically.
- Ratgeber articles come only from the RSS feed via server-side code with an hourly cache and a stored last-good snapshot; keep the feed URL out of browser code so it never appears in the visible frontend.
