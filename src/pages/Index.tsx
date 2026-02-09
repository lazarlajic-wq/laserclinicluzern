import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MapPin, Star, MessageCircle, CheckCircle, XCircle, ChevronRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import treatmentImg from "@/assets/treatment.png";
import storefrontImg from "@/assets/storefront.png";
import teamImg from "@/assets/team.png";
import erminImg from "@/assets/ermin.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const reviews = [
  {
    name: "Daniel Wiederkehr",
    text: "Ich wurde gut über die Behandlung aufgeklärt und Ermin konnte meine Fragen kompetent beantworten. Bereits nach der ersten Sitzung Ergebnisse gesehen.",
  },
  {
    name: "André Rosado",
    text: "Vom ersten Moment an sehr wohlgefühlt. Das Team ist extrem freundlich, einfühlsam und professionell.",
  },
];

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img src={treatmentImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-12 py-16">
          <div className="max-w-xl">
            <motion.img
              src={logo}
              alt="Laser Clinic Luzern"
              className="h-16 md:h-24 mb-8 brightness-0 invert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary-foreground mb-5"
            >
              Der Mann hinter dem Laser, der liefert.
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-body text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-md"
            >
              Professionelle Laser-Haarentfernung für Männer.{" "}
              <strong className="text-primary-foreground">4–6 Sitzungen</strong> statt 15–20.{" "}
              <strong className="text-primary-foreground">80–90 % Haarreduktion.</strong>
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground font-body font-bold text-sm md:text-base px-8 py-6 uppercase tracking-wider shadow-xl hover:bg-accent/90 transition-colors"
              >
                Kostenlose Beratung
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body px-8 py-6"
              >
                <Phone className="w-4 h-4" />
                +41 76 220 82 28
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="font-body text-xs md:text-sm text-primary-foreground/50 mt-5"
            >
              ✓ 2'824 Behandlungen · ✓ 5.0 Google-Bewertung · ✓ 8+ Jahre Erfahrung
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / LÖSUNG SPLIT ─── */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-destructive mb-3 block">Das Problem</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Die Realität am Markt</h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Die meisten Männer starten Laser mit Hoffnung – und hören frustriert auf. Nicht weil Laser nicht wirkt, sondern weil er falsch angewendet wird.
              </p>
              <div className="space-y-3">
                {["Zu viele Sitzungen (15–20)", "Schwache Laser für tiefe Haare", "Keine individuelle Strategie"].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 font-body text-sm">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lösung */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Unsere Lösung</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Was wir anders machen</h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Technik, Erfahrung und Strategie – genau darauf ist unsere Behandlung ausgelegt. Ergebnisse, wo andere scheitern.
              </p>
              <div className="space-y-3">
                {["Sichtbare Resultate nach wenigen Sitzungen", "Med. Hochleistungslaser für alle Haare", "Individuelle Behandlungsstrategie"].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 font-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INLINE CTA BANNER ─── */}
      <section className="px-5 md:px-12 pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-cta rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                Unser Ziel ist nicht viele Sitzungen.
              </h3>
              <p className="font-body text-primary-foreground/70 text-sm md:text-base">
                Unser Ziel: <strong className="text-primary-foreground">Schnelle, sichtbare Haarfreiheit.</strong>
              </p>
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground font-body font-bold uppercase tracking-wider px-8 py-6 whitespace-nowrap shadow-lg hover:bg-accent/90 transition-colors">
              Jetzt beraten lassen
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── ÜBER UNS / ERMIN + STANDORT ─── */}
      <section ref={parallaxRef} className="py-16 md:py-24 px-5 md:px-12 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <motion.img style={{ y: imgY }} src={erminImg} alt="Ermin – Gründer" className="w-full h-[400px] md:h-[520px] object-cover object-top" />
              </div>
              {/* Small overlay card */}
              <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-background rounded-xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-body text-xs font-bold uppercase tracking-wider">8+ Jahre Erfahrung</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">2'824 Behandlungen durchgeführt</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Über uns</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Keine Kette.<br />Keine Massenabfertigung.
              </h2>
              <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  <strong className="text-foreground">Ein Studio. Ein Fokus. Echte Betreuung.</strong> Bei uns landest du nicht im System einer Beauty-Kette, sondern bei Spezialisten für Laser-Haarentfernung bei Männern.
                </p>
                <p>Diskret. Persönlich. Auf Resultate ausgerichtet.</p>
                <p>
                  Erfahrung aus 8 Jahren professioneller Laserarbeit. Keine Experimente. Keine Beauty-Spielereien. <strong className="text-foreground">Nur Resultate.</strong>
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Zentral in Luzern – erreichbar aus Zug, Zürich & Umgebung
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STANDORT BILD ─── */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Technologie</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Präzise. Medizinisch. Effektiv.
              </h2>
              <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
                <p>Hochleistungs-Diodenlaser auf Klinikniveau – entwickelt für dicke, tiefe Männerhaare.</p>
                <p><strong className="text-foreground">Kein kosmetischer Studio-Laser. Kein IPL. Keine Spielerei.</strong></p>
                <p>Konzentrierte Energie trifft gezielt die Haarwurzel – für sichtbare Reduktion statt endlose Sitzungen.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={storefrontImg} alt="Laser Clinic Luzern Standort" className="w-full h-[350px] md:h-[420px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3 SCHRITTE ─── */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">So funktioniert's</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              In 3 Schritten zur Haarfreiheit
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: MessageCircle, title: "WhatsApp schreiben", desc: "Haarstruktur beschreiben. Wir sagen dir ehrlich, ob und wie schnell Laser bei dir wirkt." },
              { num: "02", icon: Clock, title: "Kostenlose Beratung", desc: "Wir planen deine Behandlung individuell, für schnelle und sichtbare Ergebnisse." },
              { num: "03", icon: CheckCircle, title: "Sichtbare Reduktion", desc: "Nach wenigen Sitzungen deutlich weniger Haare und glattere Haut." },
            ].map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-4xl font-bold text-border group-hover:text-primary transition-colors">{step.num}</span>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS (dark section) ─── */}
      <section className="bg-dark-section py-16 md:py-20 px-5 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {[
              { value: "2'824", label: "Behandlungen" },
              { value: "8+", label: "Jahre Erfahrung" },
              { value: "5.0 ★", label: "Google-Bewertung" },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display text-3xl md:text-5xl font-bold text-accent">{s.value}</div>
                <div className="font-body text-xs md:text-sm text-primary-foreground/60 mt-2 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Kundenstimmen</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Was unsere Kunden sagen</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-4 italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-sm text-primary">
                    {r.name[0]}
                  </div>
                  <span className="font-body text-sm font-semibold">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM + CTA ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto max-w-5xl px-5 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Werde der nächste zufriedene Kunde.
            </h2>
            <p className="font-body text-primary-foreground/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Viele unserer Kunden hatten bereits Laserbehandlungen ohne Ergebnis. Heute kommen sie zu uns – für echte Resultate.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground font-body font-bold uppercase tracking-wider px-10 py-7 text-base shadow-xl hover:bg-accent/90 transition-colors">
              Zufriedener Kunde werden
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-24 px-5 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
            <div className="md:col-span-3">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Kontakt</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Dauerhaft haarfrei beginnt mit einer Nachricht.
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Schreib uns auf WhatsApp für eine kostenlose Laser-Beratung. Du erfährst direkt:
              </p>
              <ul className="font-body space-y-3 mb-8">
                {["Wie viele Sitzungen du brauchst", "Welche Ergebnisse realistisch sind", "Ob Laser bei dir wirklich funktioniert"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <strong>{t}</strong>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm text-muted-foreground mb-6">Diskret. Ehrlich. Unverbindlich.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-accent text-accent-foreground font-body font-bold uppercase tracking-wider px-8 py-6 shadow-lg hover:bg-accent/90 transition-colors">
                  Kostenlose Beratung starten
                  <MessageCircle className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3 italic">Antwort meist innerhalb weniger Minuten.</p>
            </div>
            <motion.div className="md:col-span-2"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={erminImg} alt="Ermin" className="w-full h-[400px] md:h-[480px] object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-dark-section py-12 md:py-16 px-5 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div>
              <img src={logo} alt="Laser Clinic Luzern" className="h-14 brightness-0 invert mb-4" />
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
                Dein Ziel: sichtbar haarfrei in kurzer Zeit.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">Kontakt</h4>
              <div className="space-y-2 font-body text-sm text-primary-foreground/60">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +41 76 220 82 28</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Gerliswilstrasse 98, 6020 Emmenbrücke</div>
                <div className="flex items-center gap-2"><span className="text-accent">✉</span> info@laserclinicluzern.ch</div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-primary-foreground mb-4">Öffnungszeiten</h4>
              <div className="font-body text-sm text-primary-foreground/60 space-y-1">
                <p>Mo–Do: 9:00 – 19:00</p>
                <p>Fr: 9:00 – 21:00</p>
                <p>Sa: 9:00 – 17:00</p>
                <p>So: Geschlossen</p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Laser Clinic Luzern. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
