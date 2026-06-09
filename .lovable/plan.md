## Neue Unterseite `/blog` mit Soro-Embed

### Ziel
Eine neue Route `/blog` mit eigenem Hero-Bereich im Stil der Seite (Dark, Emerald/Gold, Playfair Headline) und darunter das Soro-Blog-Embed.

### Umfang
1. **Neue Seite `src/pages/Blog.tsx`**
   - Bestehende Navigation (Header) und Footer wiederverwenden
   - Hero-Sektion: Playfair-Headline „Magazin", kurzer Untertitel, dezenter Gold-Akzent (analog Hero anderer Seiten, aber ohne Video — schlanker Page-Hero)
   - Container-Sektion mit `<div id="soro-blog"></div>`
   - Soro-Script wird per `useEffect` einmalig dynamisch in den `<body>` geladen (mit `defer`) und beim Unmount entfernt, damit Re-Mounts kein Duplikat erzeugen
   - SEO via `react-helmet-async` (falls bereits genutzt; sonst Title/Meta wie auf anderen Unterseiten gehandhabt): Title „Magazin – Laser Clinic Luzern", Description, canonical `https://laserclinicluzern.ch/blog`

2. **Route in `src/App.tsx` registrieren**
   - `/blog` → `<Blog />`

3. **Optional Navigation**
   - Frage: Soll „Magazin/Blog" als Link im Header-Menü auftauchen, oder bleibt die Seite vorerst nur über Direkt-URL erreichbar?

### Nicht enthalten
- Kein Anpassen des Soro-Embeds selbst (third-party)
- Keine Änderungen an bestehenden Seiten außer App.tsx (und ggf. Header bei Menüeintrag)

### Technische Details
- Script-Inject Pattern:
  ```ts
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://app.trysoro.com/api/embed/f971177f-bbe9-4268-a7f7-c0edb5caa67c";
    s.defer = true;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);
  ```
- Anchor-Offset 5rem für den Hero (Core-Regel) berücksichtigen.
