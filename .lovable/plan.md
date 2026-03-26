

## Fix & Upgrade Plan

### 3 Probleme identifiziert

**1. Navigation funktioniert nicht**
- Die Section-IDs existieren (`bereiche`, `ablauf`, `resultate`, `ueber-uns`, `kontakt`), aber `scrollIntoView` scrollt das Element hinter die fixe Navbar (80px hoch). Der Inhalt wird verdeckt.
- Fix: `scroll-margin-top: 80px` auf alle Sections mit IDs setzen in CSS. Alternativ `scrollTo` mit manuellem Offset verwenden.
- Zusaetzlich: Auf Mobile schliesst `AnimatePresence` das Menu mit einer Animation, die das Scroll-Event blockieren kann. Fix: `setTimeout` von 300ms bevor `scrollIntoView` aufgerufen wird.

**2. Maus-Icon im Hero entfernen**
- Zeilen 200-209 in `Index.tsx`: Der "Scroll Indicator" (Maus-Pill-Form) wird entfernt.

**3. Von 2k auf 15k Webseite -- konkrete Empfehlungen**

Die Seite hat gute Grundelemente, aber es fehlt an **visueller Abwechslung und Tiefe**. Hier die wirkungsvollsten Upgrades:

| Upgrade | Warum es wirkt |
|---------|----------------|
| **Helle Sektion als Kontrast** | Aktuell ist alles schwarz/dunkel. Eine Sektion (z.B. Resultate oder Ablauf) mit hellem Hintergrund + dunklem Text bricht die Monotonie. Premium-Seiten wechseln bewusst zwischen hell/dunkel. |
| **Groessere Bilder / Bildwelt** | Die Treatment-Cards sind okay, aber der Ueber-uns-Bereich hat nur ein Foto. Ein Fullwidth-Bild zwischen Sektionen (z.B. nach Ablauf) als visueller Break wirkt sofort hochwertiger. |
| **Testimonials mit Foto-Avataren** | Die Initialen-Kreise (D, A, M) wirken generisch. Echte Fotos oder zumindest realistischere Placeholder erhoehen Vertrauen massiv. |
| **Vorher/Nachher Sektion** | Fehlt komplett. Das ist DER Conversion-Trigger fuer Laser-Kliniken. Slider mit Vorher/Nachher-Bildern. |
| **Video-Element** | Ein kurzes Testvideo oder auch nur ein Play-Button-Overlay auf einem Bild im Ueber-uns-Bereich. Gibt sofort "Agency"-Vibes. |
| **Mehr Whitespace** | Sections brauchen mehr vertikalen Abstand (py-32 statt py-20 auf Mobile). Gibt der Seite mehr "Luft" und wirkt luxurioeser. |
| **Sticky Social Proof Bar** | Ein schmaler Balken unter der Navbar: "2'824+ Behandlungen · 5.0 Google · Schweizer Qualitaet" -- verschwindet beim Scrollen. |
| **Bessere Section-Uebergaenge** | Statt nur GoldDivider: diagonale Cuts oder sanfte Gradient-Uebergaenge zwischen Sektionen. |
| **Loading Animation aufwerten** | Der aktuelle Ladescreen koennte das Logo animiert einblenden statt nur Text. |

---

### Umsetzung

**Dateien:**

| Datei | Aenderung |
|-------|-----------|
| `src/pages/Index.tsx` | Maus-Icon entfernen (Z.200-209), Whitespace erhoehen, eine helle Sektion einbauen, Vorher/Nachher-Platzhalter |
| `src/components/Layout.tsx` | Nav-Scroll-Fix mit Offset, optional Social-Proof-Bar |
| `src/index.css` | `scroll-margin-top` fuer Section-IDs, `.light-section` Variablen aktivieren |

