import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, CheckCircle, ChevronRight,
  Clock, Shield, Zap, Star
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

interface TreatmentPageProps {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  metaKeyword: string;
  problems: string[];
  benefits: string[];
  sessionsNeeded: string;
  durationPerSession: string;
  reductionRate: string;
  faqs: { q: string; a: string }[];
  bodyContent: string[];
}

export default function TreatmentTemplate({
  title,
  heroTitle,
  heroSubtitle,
  metaKeyword,
  problems,
  benefits,
  sessionsNeeded,
  durationPerSession,
  reductionRate,
  faqs,
  bodyContent,
}: TreatmentPageProps) {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: `Laser Haarentfernung ${title} Männer`,
            description: heroSubtitle,
            procedureType: "NoninvasiveProcedure",
            provider: {
              "@type": "LocalBusiness",
              name: "Laser Clinic Luzern",
              telephone: "+41762208228",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#bereiche"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              ← Alle Behandlungen
            </Link>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 block">{metaKeyword}</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {heroTitle}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {heroSubtitle}
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
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-10 px-5 md:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{sessionsNeeded}</div>
            <p className="text-xs text-muted-foreground mt-1">Sitzungen</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{durationPerSession}</div>
            <p className="text-xs text-muted-foreground mt-1">pro Sitzung</p>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{reductionRate}</div>
            <p className="text-xs text-muted-foreground mt-1">Haarreduktion</p>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Das Problem</h2>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Unsere Lösung</h2>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY CONTENT (SEO) */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-sm max-w-none space-y-6">
            {bodyContent.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">So läuft die Behandlung ab</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: MessageCircle, title: "Beratung", desc: "Kostenloses Erstgespräch via WhatsApp. Wir analysieren deinen Haut- und Haartyp." },
              { num: "02", icon: Zap, title: "Behandlung", desc: `${durationPerSession} pro Sitzung mit modernster Diodenlaser-Technologie und Kühlsystem.` },
              { num: "03", icon: Star, title: "Ergebnis", desc: `Nach ${sessionsNeeded} Sitzungen: bis zu ${reductionRate} dauerhafte Haarreduktion.` },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center mx-auto mb-4 text-accent font-bold text-sm">
                  {step.num}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Häufige Fragen – {title}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-background border border-border rounded-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Bereit für glatte Haut am {title}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schreib uns auf WhatsApp für eine kostenlose, unverbindliche Beratung. Du erfährst sofort, was möglich ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Jetzt Beratung starten
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
