import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, CheckCircle, XCircle, ChevronRight,
  Clock, Shield, Zap, Star, Award, Users, TrendingUp, Droplets, Scissors, Flame, AlertCircle
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import areaRuecken from "@/assets/area-ruecken.jpg";
import areaBrust from "@/assets/area-brust.jpg";
import areaBart from "@/assets/area-bart.jpg";
import areaIntim from "@/assets/area-intim.jpg";
import areaGanzkoerper from "@/assets/area-ganzkoerper.jpg";
import erminImg from "@/assets/ermin.jpg";

import AnimatedCounter from "@/components/premium/AnimatedCounter";
import TextReveal from "@/components/premium/TextReveal";
import MagneticButton from "@/components/premium/MagneticButton";
import TiltCard from "@/components/premium/TiltCard";
import GoldDivider from "@/components/premium/GoldDivider";
import GoldParticles from "@/components/premium/GoldParticles";
import ProgressRing from "@/components/premium/ProgressRing";
import Marquee from "@/components/premium/Marquee";
import SectionReveal from "@/components/premium/SectionReveal";
import ImageReveal from "@/components/premium/ImageReveal";
import FAQAccordion from "@/components/premium/FAQAccordion";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
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
    area: "Rücken",
  },
];

const treatmentAreas = [
  { title: "Rücken", img: areaRuecken, href: "/laser-ruecken-maenner", desc: "Grosse Fläche, starke Haare – unser Spezialgebiet." },
  { title: "Brust", img: areaBrust, href: "/laser-brust-maenner", desc: "Glatte Brust ohne tägliches Rasieren." },
  { title: "Intimbereich", img: areaIntim, href: "/laser-intim-maenner", desc: "Diskret, professionell, dauerhaft." },
  { title: "Ganzkörper", img: areaGanzkoerper, href: "/laser-ganzkoerper-maenner", desc: "Komplett haarfrei – von Kopf bis Fuss." },
  { title: "Bartkontur", img: areaBart, href: "/laser-bart-maenner", desc: "Saubere Konturen ohne Rasurbrand." },
];

const problemIcons = [Scissors, AlertCircle, Droplets, Flame];

const faqItems = [
  { q: "Wie viele Sitzungen brauche ich?", a: "In der Regel 4–6 Sitzungen für bis zu 90% dauerhafte Haarreduktion. Das ist deutlich weniger als bei herkömmlichen Anbietern (12–15 Sitzungen)." },
  { q: "Tut die Behandlung weh?", a: "Dank integriertem Kühlsystem ist die Behandlung gut auszuhalten. Die meisten Kunden beschreiben ein leichtes Pieksen, vergleichbar mit einem Gummiband." },
  { q: "Funktioniert Laser bei dicken, dunklen Haaren?", a: "Ja – genau dafür ist unser Diodenlaser optimiert. Je dunkler und dicker das Haar, desto besser wirkt der Laser." },
  { q: "Ist die Behandlung wirklich dauerhaft?", a: "Ja. Nach Abschluss der Behandlungsserie bleiben die Haarwurzeln dauerhaft deaktiviert. Gelegentlich kann eine Auffrischung nötig sein." },
  { q: "Was kostet die Behandlung?", a: "Die Kosten hängen vom Behandlungsbereich ab. Schreib uns auf WhatsApp für ein kostenloses, unverbindliches Angebot." },
  { q: "Ist die Behandlung sicher?", a: "Ja. Wir arbeiten mit zertifizierten medizinischen Geräten und geschultem Fachpersonal. Die Behandlung ist seit Jahren etabliert und sicher." },
];

const sectionNumbers = ["01", "02", "03", "04", "05", "06", "07", "08"];

const SectionNumber = ({ num, className }: { num: string; className?: string }) => (
  <motion.span
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`absolute text-[6rem] md:text-[8rem] font-black text-accent/[0.04] leading-none select-none pointer-events-none ${className || ""}`}
  >
    {num}
  </motion.span>
);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
          HERO – Cinematic
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Laser Haarentfernung für Männer – Premium Klinik"
            className="w-full h-full object-cover"
            style={{ animation: "kenBurns 20s ease-in-out infinite alternate" }}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(160_40%_3%/0.85)] via-[hsl(160_40%_3%/0.6)] to-background" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ y: parallaxY }}
        >
          <span className="text-[18vw] md:text-[20vw] font-black text-foreground/[0.02] leading-none tracking-tighter whitespace-nowrap">
            LASER
          </span>
        </motion.div>

        <GoldParticles />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">
              Premium Laser Klinik · Luzern
            </span>
          </motion.div>

          <div className="mb-6">
            <TextReveal
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight"
              delay={0.3}
            >
              Nie wieder rasieren.
            </TextReveal>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-gradient-gold text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight block mt-4"
            >
              Dauerhafte Haarentfernung für Männer.
            </motion.span>
          </div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Ohne Rasierpickel. Ohne Stoppeln. Ohne eingewachsene Haare. Glatte Haut in 4–6 Sitzungen.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Kostenlose Probesitzung sichern
            </MagneticButton>
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={5}
            className="text-xs text-accent/80 mt-4 font-medium"
          >
            Begrenzt auf 25 Plätze – noch 4 Termine verfügbar
          </motion.p>

          {/* Guarantee Badge in Hero */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={6}
            className="mt-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 border border-accent/40 rounded-full px-5 py-2.5 bg-accent/10 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-xs md:text-sm font-bold text-accent uppercase tracking-wider">Ergebnisse mit Garantie – sonst Geld zurück</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════════ */}
      <Marquee />

      {/* ═══════════════════════════════════════════════════
          PROBLEM SECTION
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section className="relative py-24 md:py-40 px-5 md:px-8 noise-overlay">
          <SectionNumber num={sectionNumbers[0]} className="top-8 left-4 md:left-12" />
          <div className="absolute inset-0 radial-green-glow" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Das Problem</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight">
                Du kennst das.
              </TextReveal>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Tägliches Rasieren", desc: "Jeden Morgen das gleiche nervige Ritual. Zeitverschwendung, die nie aufhört." },
                { title: "Eingewachsene Haare", desc: "Rote Punkte, Entzündungen, Narben. Besonders am Rücken und Intimbereich." },
                { title: "Rasierpickel", desc: "Egal welche Klinge, welches Gel – deine Haut reagiert jedes Mal gereizt." },
                { title: "Stoppeln & Juckreiz", desc: "Schon nach einem Tag kratzt und juckt es wieder. Ein Teufelskreis." },
              ].map((item, i) => {
                const Icon = problemIcons[i];
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="gold-stripe-left bg-card border border-border rounded-lg p-6 pl-7 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-base font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-center text-muted-foreground mt-12 text-base md:text-lg max-w-2xl mx-auto"
            >
              Du willst deine Haare loswerden – <strong className="text-foreground">dauerhaft.</strong>
            </motion.p>

            {/* CTA Problem */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-8">
              <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Schluss damit – Termin sichern
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider symbol="✦" />

      {/* ═══════════════════════════════════════════════════
          LÖSUNG
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section className="relative py-24 md:py-40 px-5 md:px-8 bg-card noise-overlay">
          <SectionNumber num={sectionNumbers[1]} className="top-8 right-4 md:right-12" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Die Lösung</span>
                <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight mb-8">
                  Modernste Laser-Technologie.
                </TextReveal>
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Hochleistungs-Diodenlaser", desc: "Gezielte Zerstörung der Haarwurzel. Kein IPL, kein Studio-Laser. Medizinisches Klinikniveau." },
                    { icon: Clock, title: "4–6 statt 12–15 Sitzungen", desc: "Unsere Technologie arbeitet effizienter. Du sparst Zeit und Geld." },
                    { icon: Shield, title: "Ergebnisse mit Garantie", desc: "Bis zu 90% weniger Haare – oder Geld zurück. So überzeugt sind wir." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
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
                <div className="glass-card rounded-lg p-8 md:p-10 border border-border">
                  <div className="text-center space-y-8">
                    <div className="flex justify-center">
                      <ProgressRing value={90} label="90%" sublabel="weniger Haare nach Abschluss" />
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
                <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
              </motion.div>
            </div>

            {/* CTA Lösung */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-14">
              <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Jetzt kostenlos beraten lassen
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider />

      {/* ═══════════════════════════════════════════════════
          RESULTATE
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section id="resultate" className="relative py-24 md:py-40 px-5 md:px-8 noise-overlay">
          <SectionNumber num={sectionNumbers[2]} className="top-8 left-4 md:left-12" />
          <div className="absolute inset-0 radial-gold-glow" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Resultate</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight mb-4">
                Zahlen lügen nicht.
              </TextReveal>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Unsere Ergebnisse sprechen für sich. Echte Resultate, keine leeren Versprechen.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "2800+", label: "Behandlungen", icon: TrendingUp },
                { value: "90%", label: "Haarreduktion", icon: Zap },
                { value: "5.0 ★", label: "Google Rating", icon: Star },
                { value: "8+", label: "Jahre Erfahrung", icon: Award },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-lg p-6 text-center group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <AnimatedCounter value={stat.value} className="text-2xl md:text-3xl font-bold text-gradient-gold" />
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Guarantee badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="mt-12 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 border border-accent/30 rounded-full px-6 py-3 bg-accent/5">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">Ergebnisse mit Garantie – sonst Geld zurück</span>
              </div>
            </motion.div>

            {/* CTA Resultate */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-8">
              <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Diese Ergebnisse auch für dich – Termin buchen
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider />

      {/* ═══════════════════════════════════════════════════
          BEREICHE
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section id="bereiche" className="relative py-24 md:py-40 px-5 md:px-8 bg-card noise-overlay">
          <SectionNumber num={sectionNumbers[3]} className="top-8 right-4 md:right-12" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Behandlungsbereiche</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight mb-4">
                Welcher Bereich nervt dich?
              </TextReveal>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Klicke auf deinen Bereich für Details, Preise und häufige Fragen.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {treatmentAreas.map((area, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <TiltCard className="block">
                    <Link
                      to={area.href}
                      className="block rounded-lg overflow-hidden group relative h-72 md:h-80"
                    >
                      <img
                        src={area.img}
                        alt={`Laser Haarentfernung ${area.title} Männer`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        width={800}
                        height={1024}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160_40%_3%/0.9)] via-[hsl(160_40%_3%/0.3)] to-transparent" />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{area.title}</h3>
                        <p className="text-sm text-foreground/70">{area.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold mt-3 uppercase tracking-wider group-hover:gap-2 transition-all">
                          Mehr erfahren <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Bereiche */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-12">
              <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Welcher Bereich? Schreib uns
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider symbol="◆" />

      {/* ═══════════════════════════════════════════════════
          ABLAUF
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section id="ablauf" className="relative py-24 md:py-40 px-5 md:px-8 noise-overlay">
          <SectionNumber num={sectionNumbers[4]} className="top-8 left-4 md:left-12" />
          <div className="absolute inset-0 radial-green-glow" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">So läuft's ab</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight">
                In 3 Schritten haarfrei.
              </TextReveal>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
              <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/5 md:hidden" />
              {[
                { num: "01", title: "Kostenlose Beratung", desc: "Wir finden zuerst heraus, ob Laser bei dir überhaupt funktioniert – denn nicht jeder ist geeignet.", icon: MessageCircle },
                { num: "02", title: "Behandlung", desc: "30–45 Minuten pro Sitzung. Modernster Diodenlaser. Kühlsystem für maximalen Komfort.", icon: Zap },
                { num: "03", title: "Ergebnis", desc: "Bereits nach der 2. Sitzung sichtbar weniger Haare. Nach 4–6 Sitzungen: bis zu 90% Reduktion.", icon: CheckCircle },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`relative text-center md:text-left ${i < 2 ? "timeline-connector" : ""}`}
                >
                  <div className="relative z-10 w-16 h-16 rounded-full border-2 border-accent/40 bg-background flex items-center justify-center mx-auto md:mx-0 mb-5 glow-gold group">
                    <span className="text-accent font-bold text-lg group-hover:opacity-0 transition-opacity">{step.num}</span>
                    <step.icon className="w-6 h-6 text-accent absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA after steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-center mt-14"
            >
              <MagneticButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Buche jetzt – finde heraus ob Laser bei dir funktioniert
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider />

      {/* ═══════════════════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section id="ueber-uns" className="relative py-24 md:py-40 px-5 md:px-8 bg-card noise-overlay">
          <SectionNumber num={sectionNumbers[5]} className="top-8 right-4 md:right-12" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Kundenstimmen</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight mb-4">
                Was Männer über uns sagen.
              </TextReveal>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Echte Bewertungen von echten Kunden. Keine Fake-Reviews.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-5 mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative gradient-border-card glass-card rounded-lg p-6 pt-10 group hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 quote-mark"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{r.text}</p>
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
            </motion.div>

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
                <div key={i} className="flex flex-col items-center text-center p-4 border border-border rounded-lg bg-background hover:border-accent/20 transition-colors">
                  <badge.icon className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-semibold text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Reviews */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-12">
              <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all">
                <MessageCircle className="w-4 h-4" /> Überzeug dich selbst – Probesitzung buchen
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      <GoldDivider symbol="✦" />

      {/* ═══════════════════════════════════════════════════
          ÜBER UNS
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-40 px-5 md:px-8 noise-overlay">
        <SectionNumber num={sectionNumbers[6]} className="top-8 left-4 md:left-12" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Über uns</span>
              <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                Ein Studio. Ein Ziel. Dein Ergebnis.
              </TextReveal>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">100% spezialisiert auf Männer.</strong> Keine Beauty-Kette, kein Massengeschäft.
                  Wir machen eine Sache – und die richtig.
                </p>
                <p>
                  8 Jahre Erfahrung. Über 2800 Behandlungen. Modernste Diodenlaser-Technologie.
                  <strong className="text-foreground"> Ergebnisse, die du siehst und spürst.</strong>
                </p>
                <p>Diskret. Professionell. Auf Augenhöhe.</p>
              </div>
            </motion.div>

            <ImageReveal className="rounded-lg">
              <img
                src={erminImg}
                alt="Ermin – Gründer Laser Clinic Luzern"
                className="w-full h-[350px] md:h-[450px] object-cover object-top rounded-lg"
                loading="lazy"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <SectionReveal>
        <section className="relative py-24 md:py-40 px-5 md:px-8 bg-card noise-overlay">
          <SectionNumber num={sectionNumbers[7]} className="top-8 right-4 md:right-12" />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">FAQ</span>
              <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight">
                Häufige Fragen
              </TextReveal>
            </motion.div>

            <FAQAccordion items={faqItems} />
          </div>
        </section>
      </SectionReveal>

      <GoldDivider />

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section id="kontakt" className="relative py-28 md:py-48 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5" />
        <div className="absolute inset-0 radial-gold-glow-strong" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[25vw] font-black text-accent/[0.03] leading-none tracking-tighter">
            BEREIT?
          </span>
        </div>
        <GoldParticles />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block">Starte jetzt</span>
            <TextReveal as="h2" className="text-3xl md:text-6xl font-black tracking-tight mb-6">
              Sichere dir jetzt deine kostenlose Probesitzung.
            </TextReveal>
            <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              Schreib uns auf WhatsApp. Du erfährst direkt, wie viele Sitzungen du brauchst und welche Ergebnisse realistisch sind.
            </p>
            <p className="text-sm text-accent font-semibold mb-10">
              Nur 25 Plätze verfügbar – noch 4 frei
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all pulse-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Kostenlose Probesitzung sichern
              </MagneticButton>
              <MagneticButton
                href="tel:+41762208228"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:border-foreground/40 transition-all"
              >
                Anrufen: +41 76 220 82 28
              </MagneticButton>
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
