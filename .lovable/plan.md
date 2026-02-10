

## Fix: Text in "Kontakt" und "Ueber uns" auf Mobile korrekt zentrieren

### Ursache des Problems

Die Klasse `items-center` auf einem `flex flex-col` Container bewirkt, dass **jedes Kind-Element auf seine Textbreite schrumpft** und dann horizontal zentriert wird. Bei langen Texten, die umbrechen, entstehen schmale Textbloecke, die nicht die volle Breite nutzen -- dadurch sieht der Text visuell verschoben aus, als waere er "am Rand" des Bildschirms.

**Kundenstimmen (funktioniert korrekt):** Verwendet `text-center` OHNE `items-center` auf einem Flex-Container. Die Text-Elemente nehmen die volle Breite ein und `text-center` zentriert den Text darin gleichmaessig.

**Kontakt und Ueber uns (das Problem):** Verwenden `flex flex-col items-center`, wodurch die Text-Elemente schrumpfen und ungleichmaessig aussehen.

### Loesung

`items-center` auf Mobile durch `items-stretch` ersetzen, damit die Kinder die volle Breite einnehmen. `text-center` bleibt und sorgt fuer die optische Zentrierung des Textes. Nur auf `md:` wird `items-start` beibehalten fuer das Desktop-Layout (linksbuendiger Text).

Einzelne Elemente wie der Button, die wirklich horizontal zentriert sein muessen, bekommen `mx-auto` bzw. behalten `justify-center`.

### Aenderungen (nur `src/pages/Index.tsx`)

**1. "Ueber uns" Text-Container (Zeile 198):**
```
Vorher:  "order-1 md:order-2 text-center md:text-left flex flex-col items-center md:items-start"
Nachher: "order-1 md:order-2 text-center md:text-left flex flex-col md:items-start"
```
`items-center` entfernen. Auf Mobile werden die Kinder automatisch `stretch` (Flexbox-Standard) und nehmen die volle Breite ein. `text-center` zentriert den Text visuell.

**2. "Kontakt" Text-Container (Zeile 369):**
```
Vorher:  "text-center md:text-left flex flex-col items-center md:items-start"
Nachher: "text-center md:text-left flex flex-col md:items-start"
```
Gleiche Aenderung.

**3. "Kontakt" Button (Zeile 386):**
`mx-auto md:mx-0` hinzufuegen, damit der Button auf Mobile zentriert bleibt (da er ohne `items-center` nach links rutschen wuerde).

**4. "Kontakt" Antwort-Text (Zeile 390):**
Bleibt durch `text-center` automatisch zentriert, da er volle Breite einnimmt.

**5. "Ueber uns" Standort-Text (Zeile 213):**
`justify-center` ist bereits vorhanden. Kein Aenderungsbedarf.

### Ergebnis

Alle Textelemente in beiden Sektionen nehmen auf Mobile die volle Container-Breite ein. `text-center` zentriert den Text gleichmaessig -- genau wie bei "Kundenstimmen". Auf Desktop bleibt alles linksbuendig (`md:items-start`, `md:text-left`).

