import CityTemplate from "@/components/CityTemplate";

export default function LaserZuerich() {
  return (
    <CityTemplate
      city="Zürich"
      heroTitle="Laser-Haarentfernung für Männer aus Zürich"
      heroSubtitle="Du kommst aus Zürich und suchst eine professionelle Laser-Haarentfernung? Unsere Premium Klinik in Luzern ist schnell erreichbar – und die Fahrt lohnt sich."
      metaKeyword="Laser Haarentfernung Männer Zürich"
      bodyContent={[
        "Viele unserer Kunden kommen aus Zürich zur Laser Clinic Luzern. Der Grund: In Zürich gibt es zwar viele Anbieter, aber nur wenige, die auf Männer spezialisiert sind und mit medizinischen Hochleistungslasern arbeiten.",
        "Unsere Klinik in Emmenbrücke bei Luzern ist von Zürich aus in ca. 45 Minuten mit dem Auto oder ca. 1 Stunde mit dem Zug erreichbar. Viele unserer Zürcher Kunden kombinieren den Termin mit einem Ausflug an den Vierwaldstättersee.",
        "Was uns von Zürcher Anbietern unterscheidet: Wir arbeiten ausschliesslich mit Hochleistungs-Diodenlasern auf Klinikniveau. Keine IPL-Geräte, keine Kompromisse. Das Ergebnis: Deutlich weniger Sitzungen (4–6 statt 12–15) und eine höhere Erfolgsquote.",
        "Unsere Spezialisierung auf Männer bedeutet, dass wir die besonderen Anforderungen männlicher Haut und Haare verstehen. Dicke, tief verwurzelte Haare am Rücken, auf der Brust oder im Intimbereich erfordern andere Lasereinstellungen als weibliche Körperbehaarung.",
        "Überzeuge dich selbst von unseren Ergebnissen und unserer Expertise. Schreib uns auf WhatsApp für eine kostenlose Beratung – wir sagen dir ehrlich, ob und wie schnell Laser bei dir funktioniert.",
      ]}
      faqs={[
        { q: "Lohnt sich die Fahrt von Zürich nach Luzern?", a: "Absolut. Unsere Kunden aus Zürich schätzen die Spezialisierung, die medizinische Technologie und die deutlich weniger nötigen Sitzungen. Das spart unterm Strich Zeit und Geld." },
        { q: "Wie komme ich am besten zur Klinik?", a: "Mit dem Auto: A14 Richtung Luzern, Ausfahrt Emmenbrücke. Mit dem Zug: Luzern Hbf, dann Bus Nr. 1 bis Gerliswil." },
        { q: "Kann ich mehrere Bereiche am gleichen Tag behandeln lassen?", a: "Ja, das ist sogar empfehlenswert, um die Anfahrt optimal zu nutzen. Wir planen gerne einen Kombi-Termin für dich." },
        { q: "Bietet ihr auch Samstags-Termine an?", a: "Ja, samstags sind wir von 9–17 Uhr für dich da. Ideal für Kunden aus Zürich." },
      ]}
    />
  );
}
