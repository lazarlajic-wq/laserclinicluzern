

## Max High-End Level -- Letzte Design-Upgrades

Was bereits vorhanden ist: Ken Burns Hero, Gold Particles, Tilt Cards, Animated Counters, Text Reveal, Progress Ring, Magnetic Buttons, Scroll Progress, Noise Textures, Glass Cards, Light Section. Das ist schon viel. Hier die verbleibenden Upgrades die den Unterschied zwischen "gute Seite" und "Agentur-Portfolio-Level" machen:

---

### 1. Horizontal Scroll Marquee (Vertrauensleiste)
Eine endlos scrollende Leiste zwischen Hero und Problem-Sektion mit Begriffen wie "SCHMERZARM · DAUERHAFT · KLINISCHE QUALITAET · 300+ BEHANDLUNGEN · 5.0 GOOGLE". Grosse Uppercase-Typo, Gold-Akzente, sanftes CSS-Marquee. Wirkt sofort wie eine High-End-Brand.

### 2. Smooth Section Reveal (Clip-Path Animation)
Sektionen kommen nicht nur mit fadeUp rein, sondern mit einem `clipPath`-Reveal von unten nach oben (wie ein Vorhang der sich hebt). Framer-motion `clipPath: "inset(100% 0 0 0)"` zu `"inset(0 0 0 0)"`. Macht einen massiven visuellen Unterschied.

### 3. Parallax Text Layers im Hero
Hinter dem Haupttext im Hero ein grosses, halbtransparentes "LASER" oder "GLATT" als dekorativer Hintergrund-Text (text-[20vw], opacity 3-5%). Bewegt sich langsamer als der Vordergrund-Text beim Scrollen. Gibt dem Hero extreme Tiefe.

### 4. Bild mit Reveal-Effekt (Ueber uns)
Das Ermin-Foto bekommt einen horizontalen Reveal: ein Gold-farbiger Block gleitet von links nach rechts und enthuellt das Bild dahinter. Klassischer Premium-Effekt.

### 5. Interaktive FAQ mit smooth Accordion
Statt nativer `<details>` ein richtiger animierter Accordion mit framer-motion (height auto-animate + Rotation des Chevrons). Wirkt deutlich polierter.

### 6. Footer-Upgrade
Groesserer Footer mit einem grossen "Bereit?" Headline darueber, visuell abgetrennt durch einen Gradient. Aktuell ist der Footer funktional aber nicht visuell "premium".

### 7. Sektion-Nummern (Section Counter)
Jede Sektion bekommt eine grosse, dezente Nummer am Rand (01, 02, 03...) die beim Scrollen sichtbar wird. Subtiler Agentur-Touch.

---

### Umsetzung

| Datei | Aenderung |
|-------|-----------|
| `src/components/premium/Marquee.tsx` | Neue Komponente: endlos scrollende Vertrauensleiste |
| `src/components/premium/SectionReveal.tsx` | Wrapper-Komponente mit clipPath-Animation |
| `src/components/premium/ImageReveal.tsx` | Gold-Block Reveal fuer Bilder |
| `src/pages/Index.tsx` | Marquee nach Hero, SectionReveal auf 2-3 Sektionen, Parallax-Text im Hero, FAQ zu animiertem Accordion, Section-Nummern, Footer-Headline |
| `src/index.css` | Marquee-Keyframes, Section-Counter-Styling |

