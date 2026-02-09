

## Fix: "Ueber uns" und "Kontakt" endlich richtig zentrieren auf Mobile

### Ursache des Problems

Das Hauptproblem ist die Container-Struktur: `container mx-auto max-w-6xl px-5` gibt den Sektionen auf Mobile zu wenig seitlichen Abstand. Dazu kommt, dass die inneren Flex-Container (`items-center`) zwar die Kinder zentrieren, aber die Kinder selbst (Text, Listen, Buttons) ihre volle Breite nutzen und dadurch visuell nach rechts driften.

Konkret:
- **Kontakt-Sektion (Zeilen 366-403):** Der `div` mit `items-center` zentriert die Kinder, aber `h2`, `p`, `ul` und `Button` haben keine `max-width` Begrenzung auf Mobile und der Text laeuft ueber den sichtbaren Bereich hinaus. Der Button mit langem Text ragt rechts raus.
- **Ueber-uns-Sektion (Zeilen 174-220):** Aehnliches Problem -- die Location-Zeile mit Icon ist nicht richtig zentriert, weil `flex items-center gap-3` den gesamten Block links haelt.

### Geplante Aenderungen (nur `src/pages/Index.tsx`)

**1. Beide Sektionen: Container-Padding erhoehen auf Mobile**
- `px-5` aendern zu `px-6` oder besser noch die inneren Content-Bereiche mit `max-w-lg mx-auto md:max-w-none md:mx-0` begrenzen, damit der Text auf Mobile nicht zu breit wird.

**2. Kontakt-Sektion (Zeilen 366-403):**
- Dem Text-Container (Zeile 369) zusaetzlich `max-w-lg mx-auto md:mx-0` geben, damit der gesamte Block auf Mobile innerhalb des Viewports bleibt und zentriert ist.
- Die `ul` Liste (Zeile 377): `mx-auto md:mx-0` beibehalten, aber zusaetzlich sicherstellen dass die Items auch visuell zentriert wirken.
- Den Button (Zeile 386): `w-full sm:w-auto` hinzufuegen, damit er auf Mobile die volle Breite nutzt statt ueber den Rand zu ragen.
- Die Location/Antwort-Texte ebenfalls mit `justify-center md:justify-start` versehen.

**3. Ueber-uns-Sektion (Zeilen 195-217):**
- Dem Text-Container `max-w-lg mx-auto md:max-w-none md:mx-0` geben.
- Die Location-Zeile (Zeile 213-216): `justify-center md:justify-start` hinzufuegen, damit Icon und Text auf Mobile zentriert sind.

**4. Globaler Check:**
- Alle Sektionen mit `max-w-6xl` Container auf Mobile pruefen, ob die Padding-Werte ausreichen.
- Sicherstellen dass kein Element horizontal ueber den Viewport hinausragt (overflow).

### Technische Details

- Datei: `src/pages/Index.tsx`
- Ca. 6-8 CSS-Klassen-Aenderungen
- Keine neuen Abhaengigkeiten
- Keine strukturellen Aenderungen
