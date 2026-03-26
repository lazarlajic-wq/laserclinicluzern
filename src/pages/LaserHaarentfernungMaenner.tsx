import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageCircle, CheckCircle, ChevronRight, Clock, Shield, Zap, Star,
  Award, Users, TrendingUp, ArrowRight, XCircle
} from "lucide-react";
import heroImg from "@/assets/hero-men.jpg";
import areaRuecken from "@/assets/area-ruecken.jpg";
import areaBrust from "@/assets/area-brust.jpg";
import areaBart from "@/assets/area-bart.jpg";
import areaIntim from "@/assets/area-intim.jpg";

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

const faqs = [
  { q: "Wie viele Sitzungen brauche ich?", a: "In der Regel 4–6 Sitzungen für bis zu 90% dauerhafte Haarreduktion. Das ist deutlich weniger als bei herkömmlichen Anbietern (12–15 Sitzungen)." },
  { q: "Tut die Behandlung weh?", a: "Dank integriertem Kühlsystem ist die Behandlung gut auszuhalten. Die meisten Kunden beschreiben ein leichtes Pieksen, vergleichbar mit einem Gummiband." },
  { q: "Funktioniert Laser bei dicken, dunklen Haaren?", a: "Ja – genau dafür ist unser Diodenlaser optimiert. Je dunkler und dicker das Haar, desto besser wirkt der Laser." },
  { q: "Ist die Behandlung wirklich dauerhaft?", a: "Ja. Nach Abschluss der Behandlungsserie bleiben die Haarwurzeln dauerhaft deaktiviert. Gelegentlich kann eine Auffrischung nötig sein." },
  { q: "Was kostet die Behandlung?", a: "Die Kosten hängen vom Behandlungsbereich ab. Schreib uns auf WhatsApp für ein kostenloses, unverbindliches Angebot." },
  { q: "Für welche Hauttypen funktioniert der Laser?", a: "Unser Diodenlaser ist für alle Hauttypen geeignet. Wir passen die Parameter individuell an deinen Haut- und Haartyp an." },
];

const treatmentAreas = [
  { title: "Rücken", img: areaRuecken, href: "/laser-ruecken-maenner", desc: "Grosse Fläche, starke Haare – unser Spezialgebiet." },
  { title: "Brust", img: areaBrust, href: "/laser-brust-maenner", desc: "Glatte Brust ohne tägliches Rasieren." },
  { title: "Intimbereich", img: areaIntim, href: "/laser-intim-maenner", desc: "Diskret, professionell, dauerhaft." },
  { title: "Bartkontur", img: areaBart, href: "/laser-bart-maenner", desc: "Saubere Konturen ohne Rasurbrand." },
];

export default function LaserHaarentfernungMaenner() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Laser Haarentfernung Männer Schweiz",
            description: "Dauerhafte Laser-Haarentfernung für Männer in der Schweiz. Modernste Diodenlaser-Technologie für Rücken, Brust, Intim und Bart.",
            procedureType: "NoninvasiveProcedure",
            provider: {
              "@type": "LocalBusiness",
              name: "Laser Clinic Luzern",
              telephone: "+41762208228",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gerliswilstrasse 98",
                addressLocality: "Emmenbrücke",
                postalCode: "6020",
                addressCountry: "CH",
              },
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[80svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Laser Haarentfernung für Männer Schweiz"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold text-accent uppercase tracking-[0.15em]">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              Dauerhafte Haarentfernung für Männer
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Du rasierst noch?{" "}
              <span className="text-gradient-gold">Wir lösen das dauerhaft.</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Glatte Haut in 4–6 Sitzungen statt 12–15. Modernste Diodenlaser-Technologie speziell für Männer. Kein IPL. Kein Studio. Klinik-Niveau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Das Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Rasieren nervt. <span className="text-gradient-gold">Laser löst.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-destructive/80 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Ohne Laser
              </h3>
              {[
                "Tägliches Rasieren – jeden einzelnen Tag",
                "Eingewachsene Haare und Entzündungen",
                "Rasierbrand, Juckreiz, pickelige Haut",
                "Schweiss und Geruch durch dichte Behaarung",
                "12–15 Sitzungen bei anderen Anbietern",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Mit Laser Clinic Luzern
              </h3>
              {[
                "Dauerhaft haarfrei – nie wieder rasieren",
                "Keine eingewachsenen Haare mehr",
                "Glatte, gesunde Haut ohne Irritationen",
                "Weniger Schweiss, frischeres Gefühl",
                "Nur 4–6 Sitzungen nötig",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
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
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Technologie</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Warum unser Laser anders ist.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kein IPL. Kein kosmetischer Studio-Laser. Unser Hochleistungs-Diodenlaser arbeitet auf medizinischem Klinikniveau – speziell kalibriert für dicke, dunkle Männerhaare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Hochleistungs-Diodenlaser", desc: "Tiefere Penetration, höhere Energie. Erreicht auch tief verwurzelte Haare, die andere Laser nicht schaffen." },
              { icon: Clock, title: "4–6 statt 12–15 Sitzungen", desc: "Dank höherer Leistung brauchst du deutlich weniger Termine. Du sparst Zeit und Geld." },
              { icon: Shield, title: "Integriertes Kühlsystem", desc: "Kontaktkühlung auf 5°C. Maximaler Komfort auch in empfindlichen Bereichen wie Intimbereich oder Gesicht." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEREICHE */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">Behandlungsbereiche</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Welcher Bereich nervt dich?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatmentAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={area.href}
                  className="block bg-background border border-border rounded-lg overflow-hidden group hover:border-accent/40 transition-all"
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

      {/* SEO BODY CONTENT */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Laser Haarentfernung für Männer in der Schweiz – Alles was du wissen musst</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Die Laser-Haarentfernung für Männer hat sich in der Schweiz als die effektivste Methode zur dauerhaften Haarreduktion etabliert. Im Gegensatz zu Rasieren, Wachsen oder Epilieren bietet der Laser eine permanente Lösung – ohne täglichen Aufwand, ohne Hautirritationen und ohne eingewachsene Haare.
            </p>
            <p>
              Bei der Laser Clinic Luzern sind wir spezialisiert auf Männer. Das ist wichtig, denn männliche Körperbehaarung unterscheidet sich grundlegend von weiblicher: Die Haare sind dicker, tiefer verwurzelt und wachsen in höherer Dichte. Deshalb braucht es einen Laser, der dafür optimiert ist – unseren Hochleistungs-Diodenlaser auf medizinischem Klinikniveau.
            </p>
            <h3 className="text-xl font-bold text-foreground pt-4">Warum Männer sich für Laser entscheiden</h3>
            <p>
              Die Gründe sind vielfältig: Viele Männer sind es leid, jeden Tag zu rasieren. Andere leiden unter eingewachsenen Haaren, besonders am Rücken, auf der Brust oder im Intimbereich. Wieder andere wollen einfach ein saubereres, gepflegteres Erscheinungsbild – ohne den täglichen Aufwand.
            </p>
            <p>
              Die dauerhafte Haarentfernung per Laser löst all diese Probleme in nur 4–6 Sitzungen. Im Vergleich: Herkömmliche Anbieter mit IPL-Geräten oder kosmetischen Lasern brauchen typischerweise 12–15 Sitzungen für ein vergleichbares Ergebnis.
            </p>
            <h3 className="text-xl font-bold text-foreground pt-4">So funktioniert die Behandlung</h3>
            <p>
              Der Diodenlaser sendet konzentriertes Licht in die Haarwurzel. Das Melanin im Haar absorbiert die Energie und wandelt sie in Wärme um. Diese Wärme deaktiviert die Haarwurzel dauerhaft – ohne die umliegende Haut zu beschädigen. Das integrierte Kühlsystem sorgt dabei für maximalen Komfort.
            </p>
            <p>
              Da Haare in verschiedenen Wachstumsphasen sind, sind mehrere Sitzungen nötig, um alle Haare in der aktiven Wachstumsphase (Anagenphase) zu erwischen. Mit unserem Behandlungsplan erreichst du nach 4–6 Sitzungen eine dauerhafte Haarreduktion von bis zu 90%.
            </p>
            <h3 className="text-xl font-bold text-foreground pt-4">Unsere Standorte</h3>
            <p>
              Unser Studio befindet sich in Emmenbrücke bei Luzern – optimal erreichbar aus der gesamten Zentralschweiz. Viele unserer Kunden kommen auch aus Zürich, Zug, Schwyz und Bern. Mit kostenlosen Parkplätzen und flexiblen Öffnungszeiten (inkl. Freitagabend und Samstag) machen wir es dir so einfach wie möglich.
            </p>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">So läuft's ab</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">In 3 Schritten haarfrei.</h2>
          </motion.div>

          <div className="space-y-0">
            {[
              { num: "01", title: "Kostenlose Beratung", desc: "WhatsApp oder Anruf. Du beschreibst dein Ziel, wir sagen dir ehrlich, was möglich ist." },
              { num: "02", title: "Behandlung", desc: "30–45 Minuten pro Sitzung. Modernster Diodenlaser mit Kühlsystem. Diskret und professionell." },
              { num: "03", title: "Ergebnis", desc: "Bereits nach der 2. Sitzung sichtbar weniger Haare. Nach 4–6 Sitzungen: bis zu 90% dauerhafte Reduktion." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
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

      {/* FAQ */}
      <section className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Häufige Fragen</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between hover:text-accent transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-5 md:px-8 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Hör auf mit Rasieren. <span className="text-gradient-gold">Starte heute.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Schreib uns auf WhatsApp für eine kostenlose Beratung. Du erfährst direkt, wie viele Sitzungen du brauchst.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-accent/90 transition-all glow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Jetzt Beratung starten
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
