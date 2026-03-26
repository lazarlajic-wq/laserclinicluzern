import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

interface CityPageProps {
  city: string;
  heroTitle: string;
  heroSubtitle: string;
  metaKeyword: string;
  bodyContent: string[];
  faqs: { q: string; a: string }[];
}

export default function CityTemplate({ city, heroTitle, heroSubtitle, metaKeyword, bodyContent, faqs }: CityPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Laser Clinic Luzern – ${city}`,
            description: heroSubtitle,
            telephone: "+41762208228",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gerliswilstrasse 98",
              addressLocality: "Emmenbrücke",
              postalCode: "6020",
              addressCountry: "CH",
            },
            areaServed: { "@type": "City", name: city },
          }),
        }}
      />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors mb-6">
              ← Startseite
            </Link>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 block">{metaKeyword}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{heroTitle}</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{heroSubtitle}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold">
              <MessageCircle className="w-5 h-5" /> Kostenlose Beratung
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto space-y-6">
          {bodyContent.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
              className="text-muted-foreground leading-relaxed">
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* SERVICES QUICK LINKS */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Unsere Behandlungen in {city}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Rücken", href: "/laser-ruecken-maenner" },
              { title: "Brust", href: "/laser-brust-maenner" },
              { title: "Intimbereich", href: "/laser-intim-maenner" },
              { title: "Bartkontur", href: "/laser-bart-maenner" },
            ].map((area, i) => (
              <Link key={i} to={area.href}
                className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:border-accent/40 transition-colors group">
                <span className="font-bold group-hover:text-accent transition-colors">{area.title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen – {city}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-background border border-border rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">So erreichst du uns</h2>
          <div className="flex flex-col items-center gap-3 text-muted-foreground mb-8">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Gerliswilstrasse 98, 6020 Emmenbrücke</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +41 76 220 82 28</div>
            <p className="text-sm">Erreichbar aus {city} in wenigen Minuten.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold">
            <MessageCircle className="w-5 h-5" /> Termin vereinbaren
          </a>
        </div>
      </section>
    </>
  );
}
