import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Magazin – Laser Clinic Luzern";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute(
      "content",
      "Magazin der Laser Clinic Luzern: Ratgeber, Tipps und Wissen rund um Laser-Haarentfernung für Männer."
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.href ?? "";
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://laserclinicluzern.ch/blog";

    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/f971177f-bbe9-4268-a7f7-c0edb5caa67c";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.title = prev;
      if (metaDesc && prevDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonical && prevCanonical) canonical.href = prevCanonical;
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-8 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-foreground/80 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-3 h-3" />
              Zurück zur Startseite
            </Link>

            <span className="block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Magazin
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-foreground">
              Wissen, Ratgeber & Insights
            </h1>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Alles rund um Laser-Haarentfernung für Männer – fundiert, ehrlich
              und auf den Punkt. Direkt aus unserer Praxis in Luzern.
            </p>
            <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* SORO EMBED */}
      <section className="pb-24 md:pb-32 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div id="soro-blog" />
        </div>
      </section>

      {/* Override Soro embed colors for dark theme readability */}
      <style>{`
        /* Make Soro embed text readable on dark theme without painting dark bars */
        #soro-blog, #soro-blog * {
          color: hsl(var(--foreground)) !important;
          background-color: transparent !important;
          background-image: none !important;
          border-color: hsl(var(--foreground) / 0.12) !important;
          text-decoration: none !important;
        }
        #soro-blog h1, #soro-blog h2, #soro-blog h3, #soro-blog h4, #soro-blog h5, #soro-blog h6 {
          color: hsl(var(--foreground)) !important;
          font-family: 'Playfair Display', Georgia, serif !important;
          font-weight: 600 !important;
        }
        #soro-blog p, #soro-blog li, #soro-blog span {
          color: hsl(var(--foreground) / 0.85) !important;
        }
        #soro-blog time,
        #soro-blog [class*="date"],
        #soro-blog [class*="muted"],
        #soro-blog [class*="gray"],
        #soro-blog [class*="slate"] {
          color: hsl(var(--foreground) / 0.65) !important;
          font-size: 0.8rem !important;
        }
        #soro-blog a {
          color: inherit !important;
          text-decoration: none !important;
          transition: color 0.2s ease;
        }
        #soro-blog a:hover,
        #soro-blog a:hover * {
          color: hsl(var(--accent)) !important;
        }
        #soro-blog article,
        #soro-blog [class*="card"],
        #soro-blog [class*="post"] {
          background-color: hsl(160 35% 6% / 0.6) !important;
          border: 1px solid hsl(var(--foreground) / 0.08) !important;
          border-radius: 0.5rem !important;
        }
        #soro-blog img {
          opacity: 1 !important;
          border-radius: 0.375rem;
        }
      `}</style>
    </>
  );
}