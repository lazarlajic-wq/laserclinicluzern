

## Fix: Text und Bilder in "Ueber uns" und "Kontakt" richtig zentrieren

### Das eigentliche Problem (diesmal wirklich)

Die aeussere Container-Struktur (`px-5`, `max-w-5xl`) ist jetzt identisch mit Kundenstimmen. Aber das hat NICHT gereicht, weil der Unterschied INNEN liegt:

- **Kundenstimmen**: Inhalte stecken in Cards mit `p-6` (24px extra Padding). Gesamtabstand vom Bildschirmrand: 20px + 32px + 24px = **76px**
- **Ueber uns / Kontakt**: Text sitzt direkt im Container ohne Card-Wrapper. Gesamtabstand: 20px + 32px = **52px**

Ausserdem: Die `container`-Klasse im Tailwind-Config hat ein eingebautes `padding: 2rem`, das zusammen mit dem Section-`px-5` doppeltes Padding erzeugt. Das funktioniert, aber der Inhalt hat trotzdem weniger visuellen Abstand als Kundenstimmen.

### Loesung

Die Section-Klasse `px-5` entfernen (die Container-Klasse hat bereits `padding: 2rem` eingebaut). Stattdessen den inneren Text-Containern in beiden Sektionen mehr Padding geben, damit der visuelle Abstand zum Rand aehnlich wie bei Kundenstimmen wirkt.

### Aenderungen (nur `src/pages/Index.tsx`)

**1. "Ueber uns" Sektion:**
- Section (Zeile 175): `px-5 md:px-12` beibehalten
- Text-Container (Zeile 198): `px-4` hinzufuegen, damit der Text mehr Abstand vom Rand hat
- Bild-Container (Zeile 183): `mx-2` hinzufuegen, damit das Bild nicht an den Rand stoesst

**2. "Kontakt" Sektion:**
- Section (Zeile 366): gleich lassen
- Text-Container (Zeile 369): `px-4` hinzufuegen
- Bild-Container (Zeile 397): `mx-2` hinzufuegen

**3. Alternative (besserer Ansatz):** Das `container`-Padding im Tailwind-Config von `2rem` auf `2.5rem` erhoehen. Das wuerde ALLE Sektionen gleichmaessig beeinflussen und global mehr Abstand schaffen. Allerdings koennte das die Kundenstimmen-Sektion (die der User als korrekt betrachtet) auch veraendern.

**4. Empfohlener Ansatz:** Das Padding der beiden Sektionen auf `px-8` setzen (statt `px-5`), UND gleichzeitig die inneren Text-Container mit `px-2` versehen. Das ergibt: 32px + 32px + 8px = **72px** Abstand vom Rand -- fast identisch mit Kundenstimmen (76px).

### Konkrete Code-Aenderungen

**Ueber uns (Zeile 175):**
```
px-5 md:px-12  →  px-8 md:px-12
```

**Ueber uns Text-Container (Zeile 198):**
```
className="order-1 md:order-2 text-center md:text-left flex flex-col items-center md:items-start"
→
className="order-1 md:order-2 text-center md:text-left flex flex-col items-center md:items-start px-2"
```

**Kontakt (Zeile 366):**
```
px-5 md:px-12  →  px-8 md:px-12
```

**Kontakt Text-Container (Zeile 369):**
```
className="text-center md:text-left flex flex-col items-center md:items-start"
→
className="text-center md:text-left flex flex-col items-center md:items-start px-2"
```

**Kontakt Bild-Container (Zeile 397):**
```
className="rounded-2xl overflow-hidden shadow-2xl w-full"
→
className="rounded-2xl overflow-hidden shadow-2xl w-full mx-2"
```

**Ueber uns Bild-Container (Zeile 183):**
```
className="rounded-2xl overflow-hidden shadow-2xl w-full"
→
className="rounded-2xl overflow-hidden shadow-2xl w-full mx-2"
```

### Ergebnis

Beide Sektionen haben dann ca. 72px Abstand vom Bildschirmrand zum Textinhalt, aehnlich wie die 76px bei Kundenstimmen. Bilder bekommen ebenfalls etwas mehr Luft vom Rand.

