

## Analyse und Fixes: Zentrierung auf Mobile

### Gefundene Probleme

**1. "Uber uns" Sektion (Zeilen 174-220)**
- Das Behandlungsbild (`treatmentImg`) ist mit `max-w-sm` begrenzt, aber der Container verwendet `flex justify-center` -- das funktioniert, ABER das Badge-Overlay ("8+ Jahre Erfahrung") ist mit `absolute` positioniert und ragt teilweise aus dem sichtbaren Bereich. Das verschiebt den visuellen Schwerpunkt.
- Die Textsektion hat `items-center` korrekt, aber der `div` mit "space-y-4" fuer die Absaetze hat `max-w-md` was den Text auf Mobile nochmal einschraenkt und nicht zentriert wirkt.

**2. "Kontakt" Sektion (Zeilen 366-403)**
- Die `<ul>` Liste (Zeile 377) hat keine Zentrierung -- die `<li>` Elemente sind mit `flex items-center gap-3` links ausgerichtet, waehrend der Eltern-Container `items-center` hat. Das Problem: Die Liste selbst ist ein Block-Element und nimmt die volle Breite ein, die einzelnen Items sind dann linksbundig.
- Das Ermin-Bild hat `max-w-sm` auf Mobile was es kleiner macht, aber korrekt zentriert.

**3. Weitere Probleme auf der gesamten Seite**
- "Problem/Loesung" Sektion: Die Listen mit `inline-block text-left` (Zeilen 117, 137) sind zwar bewusst links ausgerichtet, koennten aber besser zentriert werden als Block.
- Footer: Logo hat `mx-auto md:mx-0` -- korrekt.

---

### Geplante Aenderungen

Alle Aenderungen betreffen nur `src/pages/Index.tsx`:

**A) "Uber uns" Sektion:**
- Badge-Overlay Position vereinfachen: Auf Mobile unter das Bild setzen statt absolut positioniert, oder komplett zentriert mit sicheren Abstaenden.
- `max-w-md` vom Text-Container entfernen auf Mobile, damit der Text die volle Breite nutzt.

**B) "Kontakt" Sektion:**
- Die `<ul>` Liste mit `inline-flex flex-col` und `mx-auto` umwickeln, damit die Items als kompakter Block zentriert werden auf Mobile.
- Alternativ: Items einzeln mit `justify-center` auf Mobile zentrieren.

**C) Problem/Loesung Sektion:**
- Die `inline-block text-left` Listen-Container mit `mx-auto` versehen, damit sie auf Mobile zentriert im Container sitzen.

**D) Gesamtcheck:**
- Alle Sektionen durchgehen und sicherstellen, dass `text-center` auf Mobile konsistent mit der Ausrichtung der Kind-Elemente ist.
- Bilder: Alle Bild-Container bekommen `mx-auto` wo noetig.

### Technische Details

Aenderungen nur in einer Datei:
- `src/pages/Index.tsx` -- ca. 8-10 kleinere CSS-Klassen-Anpassungen an den betroffenen Containern

Keine neuen Abhaengigkeiten. Keine strukturellen Aenderungen am Layout oder Inhalt.
