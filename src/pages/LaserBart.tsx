import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function LaserBart() {
  return (
    <TreatmentTemplate
      title="Bartkontur"
      heroTitle="Saubere Bartkontur. Ohne Rasieren."
      heroSubtitle="Definierte Linien, kein Rasurbrand. Unser Diodenlaser entfernt unerwünschte Barthaare dauerhaft – für eine perfekte Kontur."
      metaKeyword="Laser Bart Männer"
      sessionsNeeded="4–6"
      durationPerSession="15 min"
      reductionRate="90%"
      problems={[
        "Tägliches Rasieren der Bartkonturen kostet Zeit",
        "Rasurbrand und Irritationen am Hals und Wangen",
        "Ungleichmässiger Bartwuchs und unsaubere Übergänge",
        "Eingewachsene Haare am Hals, die sich entzünden",
        "Ständige Pflege nötig, um sauber auszusehen",
      ]}
      benefits={[
        "Dauerhaft definierte Bartkonturen ohne tägliche Pflege",
        "Keine eingewachsenen Haare am Hals mehr",
        "Schnelle Behandlung in nur 10–15 Minuten",
        "Präzise Linienführung durch erfahrene Spezialisten",
        "Gleichmässiges Ergebnis für einen gepflegten Look",
      ]}
      bodyContent={[
        "Die Laser-Bartkontur ist eine der schnellsten und effektivsten Behandlungen für Männer. Statt jeden Tag die Bartkonturen nachzurasieren und mit Rasurbrand zu kämpfen, bietet der Laser eine dauerhafte Lösung.",
        "Bei der Behandlung definieren wir gemeinsam deine gewünschte Bartkontur. Anschliessend entfernt der Laser alle Haare ausserhalb dieser Linie dauerhaft. Das Ergebnis: eine saubere, definierte Kontur – jeden Tag, ohne Aufwand.",
        "Besonders beliebt ist die Behandlung des Halsbereichs und der Wangenknochen. Hier wachsen bei vielen Männern Haare in unregelmässigen Mustern, die durch ständiges Rasieren zu eingewachsenen Haaren und Entzündungen führen.",
        "Die Behandlung dauert nur 10–15 Minuten pro Sitzung und ist dank des Kühlsystems sehr komfortabel. Nach 4–6 Sitzungen ist die Kontur dauerhaft definiert.",
        "Viele unserer Kunden sparen durch die Laserbehandlung nicht nur Zeit beim täglichen Grooming, sondern profitieren auch von einem deutlich besseren Hautbild. Keine roten Punkte, keine Stoppeln, keine Irritationen.",
      ]}
      faqs={[
        { q: "Kann ich die Form meiner Bartkontur selbst bestimmen?", a: "Ja, wir definieren die gewünschte Kontur gemeinsam vor der ersten Behandlung. Du bestimmst, wo der Bart aufhört." },
        { q: "Wie lange dauert eine Bartkontur-Behandlung?", a: "Nur 10–15 Minuten pro Sitzung. Die Bartkontur ist eine der schnellsten Laserbehandlungen." },
        { q: "Schadet der Laser dem vorhandenen Bart?", a: "Nein. Der Laser wird nur ausserhalb der gewünschten Bartlinie eingesetzt. Dein Bart bleibt vollständig erhalten." },
        { q: "Wie oft muss ich kommen?", a: "4–6 Sitzungen im Abstand von 4–6 Wochen für ein dauerhaftes Ergebnis." },
      ]}
    />
  );
}
