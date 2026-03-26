import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, CheckCircle, XCircle, ChevronRight,
  Clock, Shield, Zap, Star, Award, Users, TrendingUp
} from "lucide-react";
import heroImg from "@/assets/hero-men.jpg";
import areaRuecken from "@/assets/area-ruecken.jpg";
import areaBrust from "@/assets/area-brust.jpg";
import areaBart from "@/assets/area-bart.jpg";
import areaIntim from "@/assets/area-intim.jpg";
import erminImg from "@/assets/ermin.jpg";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const reviews = [
  {
    name: "Daniel W.",
    text: "Ich wurde gut über die Behandlung aufgeklärt. Bereits nach der ersten Sitzung sichtbare Ergebnisse. Absolut professionell.",
    area: "Rücken & Brust",
  },
  {
    name: "André R.",
    text: "Vom ersten Moment an sehr wohlgefühlt. Diskreter und professioneller Service. Kann ich jedem Mann empfehlen.",
    area: "Intimbereich",
  },
  {
    name: "Marco S.",
    text: "Endlich keine eingewachsenen Haare mehr. Nach 4 Sitzungen war das Ergebnis schon krass. Lohnt sich zu 100%.",
    area: "Bartkontur",
  },
];

const treatmentAreas = [
  { title: "Rücken", img: areaRuecken, href: "/laser-ruecken-maenner", desc: "Grosse Fläche, starke Haare – unser Spezialgebiet." },
  { title: "Brust", img: areaBrust, href: "/laser-brust-maenner", desc: "Glatte Brust ohne tägliches Rasieren." },
  { title: "Intimbereich", img: areaIntim, href: "/laser-intim-maenner", desc: "Diskret, professionell, dauerhaft." },
  { title: "Bartkontur", img: areaBart, href: "/laser-bart-maenner", desc: "Saubere Konturen ohne Rasurbrand." },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Laser Clinic Luzern",
            description: "Premium Laser-Haarentfernung für Männer in Luzern, Schweiz. Modernste Diodenlaser-Technologie.",
            url: "https://laserclinicluzern.lovable.app",
            telephone: "+41762208228",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gerliswilstrasse 98",
              addressLocality: "Emmenbrücke",
              postalCode: "6020",
              addressCountry: "CH",
            },
            geo: { "@type": "GeoCoordinates", latitude: 47.0767, longitude: 8.2756 },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "19:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "21:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
            ],
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
            priceRange: "$$",
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={heroImg}
            alt="Laser Haarentfernung für Männer"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">
              Premium Laser Klinik · Luzern
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Nie wieder rasieren.{" "}
            <span className="text-gradient-gold">Dauerhaft glatte Haut</span>{" "}
            in 4–6 Sitzungen.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Laser-Haarentfernung speziell für Männer in der Schweiz. Modernste Technologie. Diskret. Effizient. Dauerhaft.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Termin sichern
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:border-foreground/40 hover:bg-foreground/5 transition-all"
            >
              Kostenlose Beratung
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap gap-x-6 gap-y-2 justify-center mt-10 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> 2'824+ Behandlungen</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-accent fill-accent" /> 5.0 Google Bewertung</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-accent" /> 8+ Jahre Erfahrung</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROBLEM SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Das Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Du kennst das.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🪒", title: "Tägliches Rasieren", desc: "Jeden Tag das gleiche Ritual. Zeitverschwendung, die nie aufhört." },
              { icon: "😤", title: "Eingewachsene Haare", desc: "Rote Punkte, Entzündungen, Narben. Besonders am Rücken und Intimbereich." },
              { icon: "💦", title: "Schwitzen & Geruch", desc: "Dichte Körperbehaarung verstärkt Schweissbildung und Geruch." },
              { icon: "😑", title: "Hautirritationen", desc: "Rasierbrand, Juckreiz, pickelige Haut. Egal welche Methode." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground mt-12 text-base md:text-lg max-w-2xl mx-auto"
          >
            Du willst deine Haare loswerden. <strong className="text-foreground">Wir machen das.</strong>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LÖSUNG
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Die Lösung</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Modernste Laser-Technologie. <span className="text-gradient-gold">Für Männer.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Hochleistungs-Diodenlaser", desc: "Kein IPL, kein Studio-Laser. Medizinische Klinikniveau-Technologie für tiefe, dicke Männerhaare." },
                  { icon: Clock, title: "4–6 statt 12–15 Sitzungen", desc: "Unsere Technologie arbeitet effizienter. Du sparst Zeit und Geld." },
                  { icon: Shield, title: "Individueller Behandlungsplan", desc: "Kein Schema F. Jeder Haut- und Haartyp wird individuell analysiert und behandelt." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-secondary rounded-lg p-8 md:p-10 border border-border">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-5xl md:text-7xl font-bold text-gradient-gold">90%</div>
                    <p className="text-sm text-muted-foreground mt-2">weniger Haare nach Abschluss</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-accent">4–6</div>
                      <p className="text-xs text-muted-foreground mt-1">Sitzungen nötig</p>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-accent">30min</div>
                      <p className="text-xs text-muted-foreground mt-1">pro Behandlung</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 border border-accent/20 rounded-lg" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border border-accent/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESULTATE
      ═══════════════════════════════════════════════════ */}
      <section id="resultate" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Resultate</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Zahlen lügen nicht.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Unsere Ergebnisse sprechen für sich. Echte Resultate, keine leeren Versprechen.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "2'824+", label: "Behandlungen", icon: TrendingUp },
              { value: "90%", label: "Haarreduktion", icon: Zap },
              { value: "5.0 ★", label: "Google Rating", icon: Star },
              { value: "8+", label: "Jahre Erfahrung", icon: Award },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 text-center group hover:border-accent/30 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BEREICHE (CARDS)
      ═══════════════════════════════════════════════════ */}
      <section id="bereiche" className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Behandlungsbereiche</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Welcher Bereich nervt dich?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Klicke auf deinen Bereich für Details, Preise und häufige Fragen.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatmentAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  to={area.href}
                  className="block bg-background border border-border rounded-lg overflow-hidden group hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={area.img}
                      alt={`Laser Haarentfernung ${area.title} Männer`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={1024}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold mt-3 uppercase tracking-wider">
                      Mehr erfahren <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABLAUF
      ═══════════════════════════════════════════════════ */}
      <section id="ablauf" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">So läuft's ab</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              In 3 Schritten haarfrei.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              { num: "01", title: "Kostenlose Beratung", desc: "WhatsApp oder Anruf. Du beschreibst dein Ziel, wir sagen dir ehrlich, was möglich ist. Kein Verkaufsgespräch." },
              { num: "02", title: "Behandlung", desc: "30–45 Minuten pro Sitzung. Modernster Diodenlaser. Kühlsystem für maximalen Komfort. Diskret und professionell." },
              { num: "03", title: "Ergebnis", desc: "Bereits nach der 2. Sitzung sichtbar weniger Haare. Nach 4–6 Sitzungen: bis zu 90% dauerhafte Reduktion." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-6 md:gap-10 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent/40 flex items-center justify-center text-accent font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {step.num}
                  </div>
                  {i < 2 && <div className="w-px h-full min-h-[60px] bg-border mt-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST / REVIEWS
      ═══════════════════════════════════════════════════ */}
      <section id="ueber-uns" className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Kundenstimmen</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Was Männer über uns sagen.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Echte Bewertungen von echten Kunden. Keine Fake-Reviews.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-background border border-border rounded-lg p-6 group hover:border-accent/30 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <span className="text-sm font-semibold">{r.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{r.area}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {[
              { icon: Award, label: "Zertifizierte Geräte" },
              { icon: Shield, label: "Medizinisches Niveau" },
              { icon: Users, label: "Spezialisiert auf Männer" },
              { icon: CheckCircle, label: "Kostenlose Beratung" },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background">
                <badge.icon className="w-6 h-6 text-accent mb-2" />
                <span className="text-xs font-semibold text-muted-foreground">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ÜBER UNS / TEAM
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Über uns</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Keine Kette. Kein Schema F. <span className="text-gradient-gold">Nur Resultate.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Ein Studio. Ein Fokus.</strong> Wir sind keine Beauty-Kette mit 20 Standorten.
                  Wir sind Spezialisten für Laser-Haarentfernung bei Männern.
                </p>
                <p>
                  8+ Jahre Erfahrung. Über 2'800 Behandlungen. Und ein klares Ziel:
                  <strong className="text-foreground"> Schnelle, sichtbare Haarfreiheit.</strong>
                </p>
                <p>Diskret. Professionell. Auf Augenhöhe.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={erminImg}
                alt="Ermin – Gründer Laser Clinic Luzern"
                className="w-full h-[350px] md:h-[450px] object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Wie viele Sitzungen brauche ich?", a: "In der Regel 4–6 Sitzungen für bis zu 90% dauerhafte Haarreduktion. Das ist deutlich weniger als bei herkömmlichen Anbietern (12–15 Sitzungen)." },
              { q: "Tut die Behandlung weh?", a: "Dank integriertem Kühlsystem ist die Behandlung gut auszuhalten. Die meisten Kunden beschreiben ein leichtes Pieksen, vergleichbar mit einem Gummiband." },
              { q: "Funktioniert Laser bei dicken, dunklen Haaren?", a: "Ja – genau dafür ist unser Diodenlaser optimiert. Je dunkler und dicker das Haar, desto besser wirkt der Laser." },
              { q: "Ist die Behandlung wirklich dauerhaft?", a: "Ja. Nach Abschluss der Behandlungsserie bleiben die Haarwurzeln dauerhaft deaktiviert. Gelegentlich kann eine Auffrischung nötig sein." },
              { q: "Was kostet die Behandlung?", a: "Die Kosten hängen vom Behandlungsbereich ab. Schreib uns auf WhatsApp für ein kostenloses, unverbindliches Angebot." },
              { q: "Ist die Behandlung sicher?", a: "Ja. Wir arbeiten mit zertifizierten medizinischen Geräten und geschultem Fachpersonal. Die Behandlung ist seit Jahren etabliert und sicher." },
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-background border border-border rounded-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section id="kontakt" className="py-20 md:py-32 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Starte jetzt</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Hör auf mit Rasieren. <span className="text-gradient-gold">Starte heute.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Schreib uns auf WhatsApp für eine kostenlose, unverbindliche Beratung.
              Du erfährst direkt, wie viele Sitzungen du brauchst und welche Ergebnisse realistisch sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold"
              >
                <MessageCircle className="w-5 h-5" />
                Termin buchen
              </a>
              <a
                href="tel:+41762208228"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:border-foreground/40 transition-all"
              >
                Anrufen: +41 76 220 82 28
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Diskret · Ehrlich · Unverbindlich · Antwort meist innerhalb weniger Minuten
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
