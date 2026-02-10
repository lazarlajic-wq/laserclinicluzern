

## Fix: "Ueber uns"-Sektion Mobile-Zentrierung

### Problem

Die "Ueber uns"-Sektion tendiert auf Mobile nach rechts. Ursache ist eine Kombination aus:

1. Das Parallax-Bild (`motion.img` mit vertikalem Transform) kann horizontal ueber den Container hinausragen
2. `shadow-2xl` auf dem Bild-Container erzeugt einen grossen Schatten, der am rechten Rand abgeschnitten wird
3. Das Erfahrungs-Badge hat `md:-right-6`, was zwar nur auf Desktop greift, aber zusammen mit `w-fit` und `mx-auto` auf Mobile trotzdem asymmetrisch wirken kann

### Aenderungen (nur `src/pages/Index.tsx`)

**1. Bild-Container (Zeile 173):** `overflow-hidden` hinzufuegen, damit der Parallax-Effekt nicht ueberlaeuft:
```
Vorher:  className="relative order-2 md:order-1"
Nachher: className="relative order-2 md:order-1 overflow-hidden"
```

**2. Schatten reduzieren auf Mobile (Zeile 175):**
```
Vorher:  className="rounded-2xl overflow-hidden shadow-2xl w-full"
Nachher: className="rounded-2xl overflow-hidden shadow-lg md:shadow-2xl w-full"
```

**3. Badge-Zentrierung sicherstellen (Zeile 178):** Explizit zentrieren auf Mobile:
```
Vorher:  className="mt-3 md:mt-0 md:absolute md:bottom-6 md:-right-6 bg-background rounded-xl shadow-xl p-3 md:p-4 border border-border w-fit mx-auto md:mx-0"
Nachher: className="mt-3 md:mt-0 md:absolute md:bottom-6 md:-right-6 bg-background rounded-xl shadow-lg md:shadow-xl p-3 md:p-4 border border-border w-fit mx-auto md:mx-0"
```

### Ergebnis

Der Parallax-Effekt bleibt auf Desktop erhalten, aber auf Mobile ragt nichts mehr ueber den rechten Rand hinaus. Die Sektion ist symmetrisch zentriert.
