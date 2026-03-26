import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight, Clock, ArrowLeft } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

interface BlogPageProps {
  title: string;
  metaKeyword: string;
  readingTime: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: { heading: string; content: string[] }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { title: string; href: string }[];
}

export default function BlogTemplate({
  title,
  metaKeyword,
  readingTime,
  heroTitle,
  heroSubtitle,
  sections,
  faqs,
  relatedLinks,
}: BlogPageProps) {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: heroTitle,
            description: heroSubtitle,
            author: { "@type": "Organization", name: "Laser Clinic Luzern" },
            publisher: { "@type": "Organization", name: "Laser Clinic Luzern" },
            mainEntityOfPage: { "@type": "WebPage" },
          }),
        }}
      />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-3 h-3" />
              Zurück zur Startseite
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {metaKeyword}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {readingTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, idx) => (
        <section
          key={idx}
          className={`py-12 md:py-16 px-5 md:px-8 ${idx % 2 === 0 ? "bg-card" : ""}`}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((p, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-background border border-border rounded-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED + CTA */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          {relatedLinks.length > 0 && (
            <div className="mb-16">
              <h3 className="text-lg font-bold mb-6">Weiterführende Seiten</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:border-accent/40 transition-colors group"
                  >
                    <span className="font-medium group-hover:text-accent transition-colors text-sm">
                      {link.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Kostenlose, unverbindliche Beratung via WhatsApp. Wir sagen dir
              ehrlich, was bei dir möglich ist.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
