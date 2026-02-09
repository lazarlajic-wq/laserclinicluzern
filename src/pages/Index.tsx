import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MapPin, Clock, Star, MessageCircle, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const reviews = [
  {
    name: "Daniel Wiederkehr",
    rating: 5,
    text: "Meinen ersten Termin hatte ich im November. Ich wurde gut über die Behandlung aufgeklärt und Ermin konnte meine Fragen kompetent beantworten. Die Laser Clinic Luzern arbeitet mit modernen Geräten, die Behandlung ist für mich schmerzfrei. Ich habe mich wohl und gut aufgehoben gefühlt und bereits nach der ersten Sitzung Ergebnisse gesehen.",
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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-dark py-12 md:py-20 px-6">
        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto max-w-3xl text-center">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Laser Clinic Luzern"
            className="h-24 md:h-32 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            Der Mann hinter dem Laser, der liefert.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto text-left"
          >
            <p className="mb-3">
              Professionelle Laser Haarentfernung für Männer in der Zentralschweiz und Zürich.
            </p>
            <p className="mb-3">
              Viele unserer Kunden sehen bereits nach <strong className="text-foreground">4–6 Sitzungen</strong> eine{" "}
              <span className="underline text-foreground">Haarreduktion von bis zu 80–90 %</span>.
            </p>
            <p>
              Wir arbeiten mit einem der <strong className="text-foreground">leistungsstärksten Laser-Systeme auf dem Markt</strong> – mit einem klaren Ziel:{" "}
              <span className="underline text-foreground">sichtbare Ergebnisse, nicht endlose Sitzungen.</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col items-center gap-3 mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-cta text-accent-foreground font-body font-bold text-base md:text-lg px-8 py-6 uppercase tracking-wider shadow-xl hover:opacity-90"
            >
              Kostenloses Beratung starten
            </Button>
            <p className="text-accent font-body text-sm font-medium flex items-center gap-1">
              👉 Bereits 2'824 erfolgreiche Behandlungen durchgeführt
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Die Realität am Markt */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Die Realität am Markt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground mb-8"
          >
            Die meisten Männer starten Laser mit Hoffnung – und hören nach Monaten frustriert wieder auf. Nicht weil Laser nicht wirkt. Sondern weil er falsch angewendet wird.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "ZU VIELE SITZUNGEN (TEILWEISE 15–20)",
              "SCHWACHE LASER ERFASSEN TIEFE HAARE NICHT",
              "STANDARDBEHANDLUNG OHNE KLARE STRATEGIE",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-wide">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unsere Lösung */}
      <section className="py-16 md:py-24 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Unsere Lösung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground mb-8"
          >
            Unser Laser funktioniert – wenn Technik, Erfahrung und Strategie stimmen. Genau darauf ist unsere Behandlung ausgelegt. So erreichen wir Ergebnisse, wo andere scheitern.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "SICHTBARE RESULTATE NACH WENIGEN SITZUNGEN",
              "MED. HOCHLEISTUNGSLASER ERFASST ALLE HAARE",
              "INDIVIDUELLE BEHANDLUNGSSTRATEGIE",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-wide">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Was uns am Herzen liegt */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Was uns am Herzen liegt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground mb-8"
          >
            Unsere langjährige Erfahrung mit Männerhaaren und Hochleistungsdiodenlaser ermöglichen eine diskrete, schnelle und effiziente Behandlung zur Haarfreiheit. Unsere geschulten Spezialisten streben stets danach Ihre Wünsche zu übertreffen.
          </motion.p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-body">
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
              <span>Unser Ziel ist nicht: Viele Sitzungen</span>
            </div>
            <div className="flex items-center gap-3 font-body">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-semibold">Unser Ziel ist: Schnelle, sichtbare Haarfreiheit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bereits über 2824 Behandlungen */}
      <section className="py-16 md:py-24 px-6 bg-gradient-dark">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Bereits über 2824 Behandlungen durchgeführt.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground space-y-4"
          >
            <p>Die meisten Kunden kommen zu mir, nachdem sie Laser bereits ausprobiert haben – ohne Ergebnis oder nach 15–20 Sitzungen ohne sichtbare Veränderung.</p>
            <p>Mein Fokus liegt auf einem Ziel: Dauerhafte Haarreduktion in möglichst wenigen Sitzungen – speziell bei Männern und starken Haarstrukturen.</p>
            <p>Erfahrung aus 8 Jahren professioneller Laserarbeit. Keine Experimente. Keine Beauty-Spielereien. Nur Resultate.</p>
          </motion.div>
        </div>
      </section>

      {/* Luzern. Keine Kette. */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Luzern. Keine Kette. Keine Massenabfertigung.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground space-y-3"
          >
            <p className="font-semibold text-foreground">Ein Studio. Ein Fokus. Echte Betreuung.</p>
            <p>Bei uns landest du nicht im System einer Beauty-Kette, sondern bei Spezialisten für Laser-Haarentfernung bei Männern.</p>
            <p>Diskret. Persönlich. Auf Resultate ausgerichtet.</p>
            <p>Zentral in Luzern – gut erreichbar aus Zug, Zürich & Umgebung.</p>
          </motion.div>
        </div>
      </section>

      {/* Präzise. Medizinisch. Effektiv. */}
      <section className="py-16 md:py-24 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-6"
          >
            Präzise. Medizinisch. Effektiv.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground space-y-3"
          >
            <p>Hochleistungs-Diodenlaser auf Klinikniveau – entwickelt für dicke, tiefe Männerhaare.</p>
            <p>Kein kosmetischer Studio-Laser. Kein IPL. Keine Spielerei.</p>
            <p>Konzentrierte Energie trifft gezielt die Haarwurzel – für sichtbare Reduktion statt endlose Sitzungen.</p>
          </motion.div>
        </div>
      </section>

      {/* In 3 Schritten zur Haarfreiheit */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-16 text-accent-foreground"
          >
            In <span className="underline">3 Schritten</span> zur Haarfreiheit
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                icon: MessageCircle,
                title: "Schreib uns auf Whatsapp",
                desc: "Kurz schreiben. Haarstruktur beschreiben. Wir sagen dir ehrlich, ob und wie schnell Laser bei dir wirkt.",
              },
              {
                step: "2",
                icon: Clock,
                title: "Kostenlose Beratung & erster Termin",
                desc: "Wir planen deine Behandlung individuell, für schnelle und sichtbare Ergebnisse.",
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Sichtbare Haarreduktion",
                desc: "Nach wenigen Sitzungen deutlich weniger Haare und glattere Haut.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center"
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
      <section className="py-16 md:py-24 px-6 bg-gradient-dark">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "2824", label: "BEHANDLUNGEN" },
              { value: "8+", label: "JAHRE ERFAHRUNG" },
              { value: "5.0 ⭐", label: "GOOGLE BEWERTUNG" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display text-3xl md:text-5xl font-bold text-accent">{stat.value}</div>
                <div className="font-body text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl space-y-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-body font-semibold text-sm">{review.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{review.time}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA: Zufriedener Kunde werden */}
      <section className="py-16 md:py-24 px-6 bg-gradient-dark">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Viele unserer Kunden hatten bereits Laserbehandlungen ohne Ergebnis.
            </h2>
            <p className="font-body text-muted-foreground mb-2">
              Heute kommen sie gezielt zu uns – weil sie echte Resultate wollen, nicht endlose Sitzungen.
            </p>
            <p className="font-body text-foreground font-semibold mb-6">
              Werde der nächste zufriedene Kunde.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-bold uppercase tracking-wider"
            >
              Zufriedener Kunde werden
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
              Dauerhaft haarfrei beginnt mit einer Nachricht.
            </h2>
            <p className="font-body text-muted-foreground mb-4">
              Schreib uns auf WhatsApp für eine kostenlose Laser-Beratung.<br />
              Du erfährst direkt:
            </p>
            <ul className="font-body text-sm space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-accent" />
                <strong>wie viele Sitzungen du brauchst</strong>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-accent" />
                <strong>welche Ergebnisse realistisch sind</strong>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-accent" />
                <strong>ob Laser bei dir wirklich funktioniert</strong>
              </li>
            </ul>
            <p className="font-body text-muted-foreground mb-6">Diskret. Ehrlich. Unverbindlich.</p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-bold uppercase tracking-wider mb-3"
            >
              Kostenlose Beratung starten
            </Button>
            <p className="font-body text-sm text-muted-foreground italic">
              Antwort meist innerhalb weniger Minuten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-dark border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <img src={logo} alt="Laser Clinic Luzern" className="h-20 mx-auto mb-6" />
          <p className="font-body text-sm text-muted-foreground mb-8">
            Das Ziel von Laser Clinic Luzern besteht darin dich in kurzer Zeit sichtbar haarfrei zu machen.
          </p>
          <div className="space-y-3 font-body text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              +41 76 220 82 28
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Gerliswilstrasse 98, 6020 Emmenbrücke
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-accent">✉</span>
              info@laserclinicluzern.ch
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-display font-semibold mb-4">Öffnungszeiten</h4>
            <div className="font-body text-sm text-muted-foreground space-y-1">
              <p>Montag: 9:00 – 19:00</p>
              <p>Dienstag: 9:00 – 19:00</p>
              <p>Mittwoch: 9:00 – 19:00</p>
              <p>Donnerstag: 9:00 – 19:00</p>
              <p>Freitag: 9:00 – 21:00</p>
              <p>Samstag: 9:00 – 17:00</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Laser Clinic Luzern. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
