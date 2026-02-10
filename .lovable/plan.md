

## Fix: Kontakt-Checkliste auf Mobile zentrieren

### Problem

Die Aufzaehlungsliste (Zeile 377) verwendet `inline-flex flex-col mx-auto`. Das macht die Liste nur so breit wie ihr laengster Eintrag und zentriert sie als Block. Die einzelnen Eintraege (Chevron + Text) sind darin aber linksbuendig -- das sieht auf Mobile nicht mittig aus.

### Aenderung (nur `src/pages/Index.tsx`, Zeile 377)

```
Vorher:  "font-body space-y-3 mb-8 inline-flex flex-col mx-auto md:mx-0"
Nachher: "font-body space-y-3 mb-8 flex flex-col items-center md:items-start"
```

- `inline-flex` wird zu `flex` (volle Breite)
- `mx-auto md:mx-0` entfaellt (nicht mehr noetig bei voller Breite)
- `items-center md:items-start` zentriert die Listeneintraege auf Mobile, linksbuendig auf Desktop

### Ergebnis

Die Checklistenpunkte stehen auf Mobile mittig im Container, genau wie der restliche Text darueber und darunter.

