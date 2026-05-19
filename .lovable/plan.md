## Ziel
Die 3 besten Google-Rezensionen von Laser Clinic Luzern auf der Startseite einbauen – im Premium Dunkelgrün/Gold-Stil.

## Vorgehen

1. **Reviews abrufen**: Via Firecrawl die Google-Maps-Seite scrapen und die 3 besten Rezensionen extrahieren (5-Sterne, längster/aussagekräftigster Text, idealerweise mit Bezug zu Männer-Behandlung).

2. **Neue Komponente `src/components/GoogleReviews.tsx`**:
   - Header: Google-Logo (G-Icon), "5.0 ★★★★★", Gesamtanzahl Reviews, Button "Alle auf Google ansehen" → verlinkt auf Google-Maps-URL
   - 3 Review-Karten nebeneinander (Desktop) / gestapelt (Mobile):
     - Avatar-Initiale in Gold-Kreis
     - Name + Datum
     - 5 goldene Sterne
     - Reviewtext
     - Dezenter Google-G-Badge unten rechts
   - Premium-Effekte: TiltCard-Hover, SectionReveal, Gold-Gradient-Border bei Hover

3. **Integration in `src/pages/Index.tsx`**: Bestehende Testimonial-Sektion durch `<GoogleReviews />` ersetzen.

4. **SEO**: `AggregateRating` + 3× `Review` JSON-LD Schema für Rich-Snippets in Google.

## Frage
Soll ich die 3 Reviews **automatisch via Firecrawl** von der Google-Seite ziehen, oder schickst du mir die 3 Wunsch-Reviews (Name + Text) direkt?
