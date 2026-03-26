import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function LaserIntim() {
  return (
    <TreatmentTemplate
      title="Intimbereich"
      heroTitle="Intimbereich dauerhaft haarfrei."
      heroSubtitle="Diskret und professionell. Unser Diodenlaser entfernt Haare im Intimbereich dauerhaft – ohne Rasurbrand, ohne Einwachsen."
      metaKeyword="Laser Intim Männer"
      sessionsNeeded="5–7"
      durationPerSession="25 min"
      reductionRate="85%"
      problems={[
        "Rasurbrand und Juckreiz im Intimbereich nach dem Rasieren",
        "Eingewachsene Haare, die sich entzünden und schmerzen",
        "Empfindliche Haut, die auf Rasierer stark reagiert",
        "Ständiges Nachwachsen – Stoppeln schon am nächsten Tag",
        "Unangenehmes Gefühl und mangelnde Hygiene durch dichtes Haar",
      ]}
      benefits={[
        "Dauerhaft glatte Haut im Intimbereich",
        "Keine eingewachsenen Haare oder Entzündungen mehr",
        "Diskrete und professionelle Behandlung",
        "Verbesserte Hygiene und frisches Gefühl",
        "Maximaler Komfort durch integriertes Kühlsystem",
      ]}
      bodyContent={[
        "Die Laser-Haarentfernung im Intimbereich bei Männern gewinnt in der Schweiz zunehmend an Bedeutung. Immer mehr Männer entscheiden sich für eine dauerhafte Lösung, um den täglichen Rasur-Stress und die damit verbundenen Hautprobleme endgültig hinter sich zu lassen.",
        "Bei der Laser Clinic Luzern legen wir grössten Wert auf Diskretion und Professionalität. Unsere Behandlung findet in einer privaten, angenehmen Atmosphäre statt. Unser erfahrenes Team geht respektvoll und professionell mit jeder Behandlung um.",
        "Der Intimbereich ist eine empfindliche Zone, die besondere Sorgfalt erfordert. Unser Hochleistungs-Diodenlaser verfügt über ein leistungsstarkes Kühlsystem, das die Behandlung auch in sensiblen Bereichen komfortabel macht.",
        "Typischerweise sind 5–7 Sitzungen nötig, um eine dauerhafte Haarreduktion von bis zu 85% im Intimbereich zu erzielen. Die Sitzungen dauern jeweils nur ca. 20–25 Minuten.",
        "Nach der Behandlung berichten unsere Kunden von einem deutlich verbesserten Hautbild, weniger Schweissbildung und einem insgesamt frischeren Gefühl. Die Investition in eine professionelle Laserbehandlung ist eine Investition in dein Wohlbefinden.",
      ]}
      faqs={[
        { q: "Ist die Behandlung im Intimbereich peinlich?", a: "Nein. Unser Team ist erfahren und arbeitet professionell und diskret. Du bist in guten Händen – ohne peinliche Momente." },
        { q: "Wie schmerzhaft ist die Intimbehandlung?", a: "Dank des Kühlsystems ist die Behandlung gut auszuhalten. Die Empfindlichkeit variiert, aber die meisten Kunden bewerten den Komfort als überraschend gut." },
        { q: "Muss ich den Intimbereich vorher rasieren?", a: "Ja, die Behandlungsfläche sollte 24h vorher rasiert werden. Nicht wachsen oder epilieren in den 4 Wochen davor." },
        { q: "Wie viele Sitzungen brauche ich?", a: "Im Intimbereich empfehlen wir 5–7 Sitzungen für optimale Ergebnisse. Der Haarwachstumszyklus ist hier etwas kürzer." },
        { q: "Kann ich nach der Behandlung normal weitermachen?", a: "Ja, die meisten Kunden können direkt danach ihren Alltag fortsetzen. Wir empfehlen lediglich 24–48h auf Sport und enge Kleidung zu verzichten." },
      ]}
    />
  );
}
