import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MapPin, Star, MessageCircle, CheckCircle, XCircle, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import treatment from "@/assets/treatment.png";
import storefront from "@/assets/storefront.png";
import team from "@/assets/team.png";
import ermin from "@/assets/ermin.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] } },
};

const reviews = [
  {
    name: "Daniel Wiederkehr",
    rating: 5,
    text: "Meinen ersten Termin hatte ich im November. Ich wurde gut über die Behandlung aufgeklärt und Ermin konnte meine Fragen kompetent beantworten. Die Laser Clinic Luzern arbeitet mit modernen Geräten, die Behandlung ist für mich schmerzfrei.",
    time: "vor 23 Stunden",
  },
  {
    name: "André Rosado",
    rating: 5,
    text: "Ich habe mich vom ersten Moment an sehr wohlgefühlt. Das Team ist extrem freundlich, einfühlsam und professionell. Der gesamte Ablauf war ruhig, angenehm und alles wurde verständlich erklärt.",
    time: "vor 2 Tagen",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const { scrollYProgress: treatmentProgress } = useScroll({ target: treatmentRef, offset: ["start end", "end start"] });
  const treatmentY = useTransform(treatmentProgress, [0, 1], [80, -80]);

  const { scrollYProgress: teamProgress } = useScroll({ target: teamRef, offset: ["start end", "end start"] });
  const teamY = useTransform(teamProgress, [0, 1], [60, -60]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <img src={treatment} alt="Laser Behandlung" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <motion.img
              src={logo}
              alt="Laser Clinic Luzern"
              className="h-20 md:h-28 mb-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            />

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8"
            >
              Der Mann hinter dem Laser,{" "}
              <span className="text-gradient-gold italic">der liefert.</span>
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4 space-y-3"
            >
              <p>Professionelle Laser Haarentfernung für Männer in der Zentralschweiz und Zürich.</p>
              <p>
                Viele unserer Kunden sehen bereits nach <strong className="text-foreground">4–6 Sitzungen</strong> eine{" "}
                <span className="underline decoration-accent underline-offset-4 text-foreground">Haarreduktion von bis zu 80–90 %</span>.
              </p>
              <p>
                Wir arbeiten mit einem der <strong className="text-foreground">leistungsstärksten Laser-Systeme auf dem Markt</strong> – mit einem klaren Ziel:{" "}
                <span className="underline decoration-accent underline-offset-4 text-foreground">sichtbare Ergebnisse, nicht endlose Sitzungen.</span>
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-10 space-y-4">
              <Button
                size="lg"
                className="bg-gradient-cta text-accent-foreground font-body font-bold text-base md:text-lg px-10 py-7 uppercase tracking-wider shadow-2xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Kostenloses Beratung starten
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <motion.p
                className="text-accent font-body text-sm font-semibold"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                👉 Bereits 2'824 erfolgreiche Behandlungen durchgeführt
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[120px] hidden lg:block"
        />
      </section>

      {/* Die Realität am Markt */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-8">
            Die Realität am Markt
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-body text-muted-foreground text-lg mb-10 max-w-2xl">
            Die meisten Männer starten Laser mit Hoffnung – und hören nach Monaten frustriert wieder auf. Nicht weil Laser nicht wirkt. Sondern weil er falsch angewendet wird.
          </motion.p>
          <div className="space-y-5">
            {[
              "ZU VIELE SITZUNGEN (TEILWEISE 15–20)",
              "SCHWACHE LASER ERFASSEN TIEFE HAARE NICHT",
              "STANDARDBEHANDLUNG OHNE KLARE STRATEGIE",
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="flex items-center gap-4 font-body text-sm md:text-base font-semibold uppercase tracking-wide bg-destructive/10 rounded-xl px-6 py-4 border border-destructive/20"
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Lösung - with treatment image parallax */}
      <section ref={treatmentRef} className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="font-display text-3xl md:text-5xl font-bold mb-8">
                Unsere Lösung
              </motion.h2>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="font-body text-muted-foreground text-lg mb-10">
                Unser Laser funktioniert – wenn Technik, Erfahrung und Strategie stimmen. Genau darauf ist unsere Behandlung ausgelegt.
              </motion.p>
              <div className="space-y-4">
                {[
                  "SICHTBARE RESULTATE NACH WENIGEN SITZUNGEN",
                  "MED. HOCHLEISTUNGSLASER ERFASST ALLE HAARE",
                  "INDIVIDUELLE BEHANDLUNGSSTRATEGIE",
                ].map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    className="flex items-center gap-4 font-body text-sm md:text-base font-semibold uppercase tracking-wide bg-accent/10 rounded-xl px-6 py-4 border border-accent/20"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div style={{ y: treatmentY }} className="relative">
              <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <img src={treatment} alt="Laser Behandlung" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </motion.div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Was uns am Herzen liegt */}
      <section className="py-20 md:py-28 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-8">
            Was uns am Herzen liegt
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-body text-muted-foreground text-lg mb-10 max-w-2xl">
            Unsere langjährige Erfahrung mit Männerhaaren und Hochleistungsdiodenlaser ermöglichen eine diskrete, schnelle und effiziente Behandlung zur Haarfreiheit.
          </motion.p>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="flex items-center gap-4 font-body text-base bg-destructive/10 rounded-xl px-6 py-4 border border-destructive/20">
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              Unser Ziel ist nicht: Viele Sitzungen
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="flex items-center gap-4 font-body text-base font-semibold bg-accent/10 rounded-xl px-6 py-4 border border-accent/20">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              Unser Ziel ist: Schnelle, sichtbare Haarfreiheit
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bereits über 2824 - full width image section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={storefront} alt="Laser Clinic Luzern Standort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-8">
            Bereits über 2824 Behandlungen durchgeführt.
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-body text-muted-foreground text-lg space-y-4 max-w-2xl">
            <p>Die meisten Kunden kommen zu mir, nachdem sie Laser bereits ausprobiert haben – ohne Ergebnis oder nach 15–20 Sitzungen ohne sichtbare Veränderung.</p>
            <p>Mein Fokus liegt auf einem Ziel: Dauerhafte Haarreduktion in möglichst wenigen Sitzungen – speziell bei Männern und starken Haarstrukturen.</p>
            <p className="text-foreground font-medium">Erfahrung aus 8 Jahren professioneller Laserarbeit. Keine Experimente. Keine Beauty-Spielereien. Nur Resultate.</p>
          </motion.div>
        </div>
      </section>

      {/* Luzern. Keine Kette. - with storefront image */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img src={storefront} alt="Laser Clinic Luzern Standort" className="w-full h-[400px] object-cover" />
            </motion.div>
            <div className="order-1 md:order-2">
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="font-display text-3xl md:text-5xl font-bold mb-8">
                Luzern. Keine Kette.{" "}
                <span className="text-gradient-gold">Keine Massenabfertigung.</span>
              </motion.h2>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="font-body text-muted-foreground text-lg space-y-3">
                <p className="font-semibold text-foreground text-xl">Ein Studio. Ein Fokus. Echte Betreuung.</p>
                <p>Bei uns landest du nicht im System einer Beauty-Kette, sondern bei Spezialisten für Laser-Haarentfernung bei Männern.</p>
                <p>Diskret. Persönlich. Auf Resultate ausgerichtet.</p>
                <p>Zentral in Luzern – gut erreichbar aus Zug, Zürich & Umgebung.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Präzise. Medizinisch. Effektiv. */}
      <section className="py-20 md:py-28 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-8">
            Präzise. Medizinisch.{" "}
            <span className="text-gradient-gold italic">Effektiv.</span>
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-body text-muted-foreground text-lg space-y-3 max-w-2xl mx-auto">
            <p>Hochleistungs-Diodenlaser auf Klinikniveau – entwickelt für dicke, tiefe Männerhaare.</p>
            <p>Kein kosmetischer Studio-Laser. Kein IPL. Keine Spielerei.</p>
            <p className="text-foreground font-medium">Konzentrierte Energie trifft gezielt die Haarwurzel – für sichtbare Reduktion statt endlose Sitzungen.</p>
          </motion.div>
        </div>
      </section>

      {/* In 3 Schritten */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-16 text-accent-foreground">
            In <span className="underline decoration-accent decoration-4 underline-offset-8">3 Schritten</span> zur Haarfreiheit
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", icon: MessageCircle, title: "Schreib uns auf Whatsapp", desc: "Kurz schreiben. Haarstruktur beschreiben. Wir sagen dir ehrlich, ob und wie schnell Laser bei dir wirkt." },
              { step: "2", icon: Clock, title: "Kostenlose Beratung & erster Termin", desc: "Wir planen deine Behandlung individuell, für schnelle und sichtbare Ergebnisse." },
              { step: "3", icon: CheckCircle, title: "Sichtbare Haarreduktion", desc: "Nach wenigen Sitzungen deutlich weniger Haare und glattere Haut." },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex flex-col items-center bg-background/50 backdrop-blur rounded-2xl p-8 shadow-lg border border-border/50"
              >
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                  <item.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-accent-foreground">{item.step}. {item.title}</h3>
                <p className="font-body text-sm text-accent-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "2824", label: "BEHANDLUNGEN" },
              { value: "8+", label: "JAHRE ERFAHRUNG" },
              { value: "5.0 ⭐", label: "GOOGLE BEWERTUNG" },
            ].map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-accent">{stat.value}</div>
                <div className="font-body text-xs md:text-sm text-muted-foreground mt-3 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          {reviews.map((review, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl hover:shadow-accent/10 transition-shadow duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-lg text-accent">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-body font-semibold">{review.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{review.time}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team + CTA */}
      <section ref={teamRef} className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div style={{ y: teamY }} className="h-[120%] -mt-[10%]">
            <img src={team} alt="Laser Clinic Luzern Team" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Viele unserer Kunden hatten bereits Laserbehandlungen{" "}
              <span className="text-gradient-gold">ohne Ergebnis.</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-2">
              Heute kommen sie gezielt zu uns – weil sie echte Resultate wollen, nicht endlose Sitzungen.
            </p>
            <p className="font-body text-foreground font-semibold text-xl mb-8">
              Werde der nächste zufriedene Kunde.
            </p>
            <Button
              size="lg"
              className="bg-gradient-cta text-accent-foreground font-body font-bold uppercase tracking-wider px-10 py-7 text-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              Zufriedener Kunde werden
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Ermin image */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                Dauerhaft haarfrei beginnt mit{" "}
                <span className="text-gradient-gold italic">einer Nachricht.</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg mb-4">
                Schreib uns auf WhatsApp für eine kostenlose Laser-Beratung.<br />
                Du erfährst direkt:
              </p>
              <ul className="font-body space-y-3 mb-8">
                {[
                  "wie viele Sitzungen du brauchst",
                  "welche Ergebnisse realistisch sind",
                  "ob Laser bei dir wirklich funktioniert",
                ].map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <ChevronRight className="w-5 h-5 text-accent flex-shrink-0" />
                    <strong>{item}</strong>
                  </motion.li>
                ))}
              </ul>
              <p className="font-body text-muted-foreground mb-8">Diskret. Ehrlich. Unverbindlich.</p>
              <Button
                size="lg"
                className="bg-gradient-cta text-accent-foreground font-body font-bold uppercase tracking-wider px-10 py-7 text-lg shadow-2xl hover:scale-105 transition-transform duration-300 mb-3"
              >
                Kostenlose Beratung starten
                <MessageCircle className="w-5 h-5 ml-1" />
              </Button>
              <p className="font-body text-sm text-muted-foreground italic">
                Antwort meist innerhalb weniger Minuten.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <img src={ermin} alt="Ermin – Laser Clinic Luzern" className="w-full h-[550px] object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-dark border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.img src={logo} alt="Laser Clinic Luzern" className="h-20 mx-auto mb-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Das Ziel von Laser Clinic Luzern besteht darin dich in kurzer Zeit sichtbar haarfrei zu machen.
          </p>
          <div className="space-y-3 font-body text-sm text-muted-foreground mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-accent" /> +41 76 220 82 28
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-4 h-4 text-accent" /> Gerliswilstrasse 98, 6020 Emmenbrücke
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Öffnungszeiten</h4>
            <div className="font-body text-sm text-muted-foreground space-y-1">
              <p>Mo–Do: 9:00 – 19:00 · Fr: 9:00 – 21:00</p>
              <p>Sa: 9:00 – 17:00 · So: Geschlossen</p>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-border font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Laser Clinic Luzern. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
