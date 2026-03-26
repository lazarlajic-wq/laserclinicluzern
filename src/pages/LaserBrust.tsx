import TreatmentTemplate from "@/components/TreatmentTemplate";

export default function LaserBrust() {
  return (
    <TreatmentTemplate
      title="Brust"
      heroTitle="Brusthaar dauerhaft entfernen."
      heroSubtitle="Glatte Brust, ohne tägliches Rasieren. Unser Diodenlaser entfernt Brusthaare dauerhaft – sicher, effizient und diskret."
      metaKeyword="Laser Brust Männer"
      sessionsNeeded="4–6"
      durationPerSession="30 min"
      reductionRate="90%"
      problems={[
        "Tägliches Rasieren der Brust kostet Zeit und nerft",
        "Stoppeln bereits wenige Stunden nach der Rasur",
        "Eingewachsene Haare und rote Punkte auf der Brust",
        "Rasierbrand und Juckreiz nach jeder Rasur",
        "Unebene Haut durch ständige Reizung",
      ]}
      benefits={[
        "Dauerhaft glatte Brust ohne tägliche Pflege",
        "Keine eingewachsenen Haare oder Rasierbrand mehr",
        "Schnelle Behandlung in nur 20–30 Minuten",
        "Gleichmässiges Ergebnis über die gesamte Fläche",
        "Sofort sichtbare Reduktion nach den ersten Sitzungen",
      ]}
      bodyContent={[
        "Die Laser-Haarentfernung an der Brust ist eine der beliebtesten Behandlungen bei Männern in der Schweiz. Immer mehr Männer wünschen sich eine glatte, gepflegte Brust – ohne den täglichen Aufwand des Rasierens.",
        "Mit unserem medizinischen Hochleistungs-Diodenlaser bieten wir eine dauerhafte Lösung. Der Laser zielt präzise auf das Melanin in der Haarwurzel und deaktiviert das Haarwachstum dauerhaft, ohne die umliegende Haut zu beschädigen.",
        "Die Brustbehandlung dauert in der Regel nur 20–30 Minuten und ist dank des integrierten Kühlsystems sehr komfortabel. Nach 4–6 Sitzungen erreichen wir eine Haarreduktion von bis zu 90%.",
        "Im Vergleich zu IPL oder kosmetischen Lasergeräten arbeitet unser Diodenlaser auf medizinischem Klinikniveau. Das bedeutet höhere Energie, tiefere Durchdringung und bessere Ergebnisse – besonders bei dunklen, dicken Brusthaaren.",
        "Viele unserer Kunden berichten, dass sie sich nach der Behandlung deutlich wohler fühlen – beim Sport, am Strand oder einfach im Alltag. Die Investition in eine dauerhafte Lösung spart langfristig Zeit, Geld und Nerven.",
      ]}
      faqs={[
        { q: "Wie schnell sehe ich Ergebnisse an der Brust?", a: "Die meisten Kunden sehen eine deutliche Reduktion bereits nach der 2. Sitzung. Die Haare fallen in den Tagen nach der Behandlung aus." },
        { q: "Kann ich direkt nach der Behandlung Sport machen?", a: "Wir empfehlen, 24–48h nach der Behandlung auf intensiven Sport und Schwitzen zu verzichten, um Hautirritationen zu vermeiden." },
        { q: "Funktioniert der Laser auch bei hellen Brusthaaren?", a: "Der Laser wirkt am besten bei dunklen Haaren. Bei sehr hellen oder weissen Haaren ist die Wirksamkeit eingeschränkt. Wir beraten dich gerne individuell." },
        { q: "Wie oft muss ich zur Behandlung kommen?", a: "Die Sitzungen finden im Abstand von 4–6 Wochen statt. Insgesamt sind 4–6 Sitzungen für ein optimales Ergebnis nötig." },
      ]}
    />
  );
}
