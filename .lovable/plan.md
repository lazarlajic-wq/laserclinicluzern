

## Fix: "Ueber uns" und "Kontakt" an "Kundenstimmen" angleichen

### Das eigentliche Problem

Die "Kundenstimmen"-Sektion verwendet eine andere Container-Struktur als "Ueber uns" und "Kontakt". Genau das verursacht den Versatz nach rechts.

**Kundenstimmen (korrekt zentriert):**
- Section: `px-5 md:px-12`
- Container: `max-w-5xl`

**Ueber uns und Kontakt (nach rechts verschoben):**
- Section: `px-8 md:px-12`
- Container: `max-w-6xl`
- Zusaetzlich: `max-w-lg mx-auto` auf Text-Containern

Das Problem: `max-w-6xl` (1152px) ist breiter als `max-w-5xl` (1024px). Zusammen mit unterschiedlichem Padding (`px-8` vs `px-5`) ergibt sich ein anderes Layout-Verhalten auf Mobile. Ausserdem fuegt `max-w-lg mx-auto` auf den Text-Containern eine zusaetzliche Begrenzung hinzu, die den Inhalt nicht gleich verteilt wie bei Kundenstimmen.

### Aenderungen (nur `src/pages/Index.tsx`)

**1. "Ueber uns" Sektion (Zeile 175):**
- `px-8 md:px-12` aendern zu `px-5 md:px-12` (gleich wie Kundenstimmen)
- `max-w-6xl` aendern zu `max-w-5xl` (gleich wie Kundenstimmen)
- `max-w-lg mx-auto md:max-w-none md:mx-0` vom Text-Container (Zeile 198) entfernen -- nur `items-center md:items-start` behalten

**2. "Kontakt" Sektion (Zeile 366):**
- `px-8 md:px-12` aendern zu `px-5 md:px-12` (gleich wie Kundenstimmen)
- `max-w-6xl` aendern zu `max-w-5xl` (gleich wie Kundenstimmen)
- `max-w-lg mx-auto md:max-w-none md:mx-0` vom Text-Container (Zeile 369) entfernen

### Ergebnis

Beide Sektionen verwenden danach exakt dieselbe Container-Struktur wie "Kundenstimmen": `px-5 md:px-12` und `max-w-5xl`. Damit sitzen sie identisch zentriert auf Mobile.

