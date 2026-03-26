import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import ScrollProgress from "@/components/premium/ScrollProgress";

const navLinks = [
  { label: "Behandlungen", href: "/#bereiche" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Ergebnisse", href: "/#resultate" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

const WHATSAPP_URL = "https://wa.me/41762208228?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Laser-Haarentfernung.";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change (non-hash navigation)
  useEffect(() => {
    setMenuOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    const wasOpen = menuOpen;
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        const scrollToEl = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        // Delay scroll on mobile to let menu close animation finish
        if (wasOpen) {
          setTimeout(scrollToEl, 350);
        } else {
          scrollToEl();
        }
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Laser Clinic Luzern" className="h-10 md:h-12 brightness-0 invert" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Termin sichern
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menü"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden"
            >
              <div className="px-5 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left text-base font-medium text-foreground py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent text-accent-foreground w-full py-3.5 rounded text-sm font-bold mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  Kostenlose Beratung
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── MAIN ─── */}
      <main>{children}</main>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-bottom">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent text-accent-foreground w-full py-3.5 rounded text-sm font-bold"
        >
          <MessageCircle className="w-5 h-5" />
          Kostenlose Beratung starten
        </a>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-background border-t border-border py-16 md:py-20 px-5 md:px-8 pb-24 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            <div className="md:col-span-1">
              <img src={logo} alt="Laser Clinic Luzern" className="h-12 brightness-0 invert mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Laser-Haarentfernung speziell für Männer. Premium Klinik in Luzern.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Behandlungen</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/laser-ruecken-maenner" className="hover:text-foreground transition-colors">Rücken</Link></li>
                <li><Link to="/laser-brust-maenner" className="hover:text-foreground transition-colors">Brust</Link></li>
                <li><Link to="/laser-intim-maenner" className="hover:text-foreground transition-colors">Intimbereich</Link></li>
                <li><Link to="/laser-bart-maenner" className="hover:text-foreground transition-colors">Bartkontur</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Standorte</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/laser-haarentfernung-maenner-luzern" className="hover:text-foreground transition-colors">Luzern</Link></li>
                <li><Link to="/laser-haarentfernung-maenner-zuerich" className="hover:text-foreground transition-colors">Zürich</Link></li>
              </ul>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4 mt-6">Ratgeber</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/rasieren-oder-lasern-maenner" className="hover:text-foreground transition-colors">Rasieren oder Lasern?</Link></li>
                <li><Link to="/wie-viele-sitzungen-laser-maenner" className="hover:text-foreground transition-colors">Wie viele Sitzungen?</Link></li>
                <li><Link to="/eingewachsene-haare-maenner-loesung" className="hover:text-foreground transition-colors">Eingewachsene Haare</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Kontakt</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="tel:+41762208228" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4 text-accent" /> +41 76 220 82 28
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Gerliswilstrasse 98<br />6020 Emmenbrücke</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground/60">
                  Mo–Do: 9–19 Uhr · Fr: 9–21 Uhr<br />
                  Sa: 9–17 Uhr · So: Geschlossen
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Laser Clinic Luzern. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground/50">
              <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
