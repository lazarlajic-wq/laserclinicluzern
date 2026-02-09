import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MapPin, Clock, Star, Sparkles, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/hero-bg.jpg";
import serviceTattoo from "@/assets/service-tattoo.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceAntiaging from "@/assets/service-antiaging.jpg";
import servicePmu from "@/assets/service-pmu.jpg";

const services = [
  {
    title: "Tattoo Lasern",
    description:
      "Modernste Picolaser-Technologie für schonende und effektive Tattooentfernung. Ultrakurze Lichtimpulse im Pikosekundenbereich für maximale Wirkung bei minimaler Belastung.",
    image: serviceTattoo,
    features: ["Picolaser-Technologie", "Alle Farben behandelbar", "Minimale Ausfallzeit"],
  },
  {
    title: "Haare Lasern",
    description:
      "Dauerhafte Haarentfernung mit weltweit führender Laser-Technologie unter ärztlicher Aufsicht. Für glatte, gepflegte Haut – langanhaltend und schmerzarm.",
    image: serviceHair,
    features: ["Dauerhafte Ergebnisse", "Alle Hauttypen", "Ärztliche Aufsicht"],
  },
  {
    title: "Anti-Aging Laser",
    description:
      "Neuste Anti-Aging Laserbehandlungen für eine sichtbare Hautverjüngung. Sanfte Verfahren für klare Hautstruktur und strahlende Ergebnisse.",
    image: serviceAntiaging,
    features: ["Hautverjüngung", "Faltenreduktion", "Strahlender Teint"],
  },
  {
    title: "Permanent Make-Up Lasern",
    description:
      "Präzise Entfernung von unerwünschtem Permanent Make-Up mit modernster Lasertechnologie. Schonend und effektiv für ein natürliches Ergebnis.",
    image: servicePmu,
    features: ["Präzise Entfernung", "Schonend", "Natürliches Ergebnis"],
  },
];

const stats = [
  { value: "10'000+", label: "Zufriedene Kunden" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "0%", label: "Finanzierung möglich" },
  { value: "⭐ 4.9", label: "Google Bewertung" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold tracking-tight">
              My Laser Clinic
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Behandlungen
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Über uns
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
          </div>
          <Button className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-body font-semibold shadow-lg">
            <Phone className="w-4 h-4" />
            Termin buchen
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Laser Clinic Luzern Behandlungsraum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-rose-light/60 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-body font-medium text-foreground">
                Europas führende Laser-Klinik
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
            >
              Schönheit durch{" "}
              <span className="text-gradient-gold italic">Präzision</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Die Lucerne Clinic ist das führende Schönheitszentrum für ästhetische
              Chirurgie und neuste medizinische Laser-Verfahren in der Schweiz.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-cta hover:opacity-90 text-primary-foreground font-body font-semibold text-lg px-8 py-6 shadow-xl animate-pulse-glow"
              >
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-body text-lg px-8 py-6 border-2"
              >
                <Phone className="w-5 h-5" />
                Last-Minute Termine
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-1/3 w-20 h-20 rounded-full bg-gradient-cta opacity-20 blur-xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-40 bottom-1/4 w-32 h-32 rounded-full bg-gold/20 blur-2xl hidden lg:block"
        />
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-2xl shadow-2xl border border-border/50 p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
              Unsere Behandlungen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Weltweit führende{" "}
              <span className="text-gradient-gold italic">Technologie</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              Unter ärztlicher Aufsicht bieten wir modernste Laserbehandlungen
              für Ihr Wohlbefinden und Ihre Schönheit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-8 -mt-12 relative">
                  <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="font-body text-xs font-medium bg-rose-light/50 text-primary rounded-full px-3 py-1"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section id="about" className="py-24 bg-gradient-beauty">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Ärztliche Aufsicht",
                desc: "Alle Behandlungen werden unter strenger ärztlicher Aufsicht und nach höchsten medizinischen Standards durchgeführt.",
              },
              {
                icon: Award,
                title: "Zertifizierte Technologie",
                desc: "Wir setzen europaweit führende Lasertechnologie ein – darunter den neusten Picolaser der nächsten Generation.",
              },
              {
                icon: Sparkles,
                title: "0% Finanzierung",
                desc: "Flexible Zahlungsmöglichkeiten mit 0% Finanzierung. Schönheit muss nicht warten.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card shadow-lg mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-cta rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6"
              >
                Bereit für Ihre
                <br />
                <span className="italic">Transformation?</span>
              </motion.h2>
              <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
                Vereinbaren Sie jetzt Ihre kostenlose Erstberatung. Unsere Experten
                beraten Sie persönlich und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-semibold text-lg px-10 py-7 shadow-xl"
                >
                  Jetzt Termin buchen
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-body text-lg px-10 py-7"
                >
                  <Phone className="w-5 h-5" />
                  041 552 08 08
                </Button>
              </div>
              <p className="font-body text-primary-foreground/60 text-sm mt-6">
                Auch Last-Minute-Termine verfügbar • Kostenlose Beratung • 0% Finanzierung
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-display text-lg font-semibold">My Laser Clinic</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Ein Kompetenzzentrum der Lucerne Clinic. Führend in der Schweiz für
                medizinische Laserbehandlungen.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3 font-body text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  041 552 08 08
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Luzern, Schweiz
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Mo–Fr: 09:00–18:00
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Behandlungen</h4>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>Tattoo Lasern</li>
                <li>Haare Lasern</li>
                <li>Anti-Aging Laser</li>
                <li>Permanent Make-Up Lasern</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} My Laser Clinic – Lucerne Clinic. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
