import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => { document.title = "Datenschutz – Laser Clinic Luzern"; }, []);
  return (
    <>
      <div className="min-h-screen pt-28 pb-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p>
            Lash Clinic GmbH<br />
            Gerliswilstrasse 98<br />
            6020, Emmenbrücke<br />
            Schweiz
          </p>
          <p>
            <a href="tel:+41762208228" className="text-accent hover:underline">+41 76 220 82 28</a><br />
            <a href="mailto:info@laserclinicluzern.ch" className="text-accent hover:underline">info@laserclinicluzern.ch</a>
          </p>

          <h2 className="text-accent">Allgemeiner Hinweis</h2>
          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <p>
            Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.
          </p>

          <h2 className="text-accent">Bearbeitung von Personendaten</h2>
          <p>
            Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine betroffene Person ist eine Person, über die Personendaten bearbeitet werden. Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten.
          </p>
          <p>
            Wir bearbeiten Personendaten im Einklang mit dem schweizerischen Datenschutzrecht. Im Übrigen bearbeiten wir – soweit und sofern die EU-DSGVO anwendbar ist – Personendaten gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO:
          </p>
          <ul>
            <li><strong>Einwilligung</strong> (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</li>
            <li><strong>Vertragserfüllung und vorvertragliche Anfragen</strong> (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</li>
            <li><strong>Rechtliche Verpflichtung</strong> (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)</li>
            <li><strong>Schutz lebenswichtiger Interessen</strong> (Art. 6 Abs. 1 S. 1 lit. d. DSGVO)</li>
            <li><strong>Berechtigte Interessen</strong> (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</li>
          </ul>

          <h2 className="text-accent">Massgebliche Rechtsgrundlagen</h2>
          <p>
            Nach Massgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Massnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2 className="text-accent">Sicherheitsmassnahmen</h2>
          <p>
            Wir treffen nach Massgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmasses der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
          </p>

          <h2 className="text-accent">Übermittlung von personenbezogenen Daten</h2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schliessen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
          </p>

          <h2 className="text-accent">Datenverarbeitung in Drittländern</h2>
          <p>
            Sofern wir Daten in einem Drittland (d.h., ausserhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.
          </p>

          <h2 className="text-accent">Cookies</h2>
          <p>
            Diese Website verwendet Cookies. Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern.
          </p>
          <p>Die folgenden Cookie-Typen und Funktionen werden unterschieden:</p>
          <ul>
            <li><strong>Temporäre Cookies</strong> (Session-Cookies): werden nach Schliessung des Browsers gelöscht.</li>
            <li><strong>Permanente Cookies</strong>: bleiben auch nach dem Schliessen des Browsers gespeichert.</li>
            <li><strong>First-Party-Cookies</strong>: von uns selbst gesetzt.</li>
            <li><strong>Third-Party-Cookies</strong>: von Drittanbietern gesetzt.</li>
            <li><strong>Notwendige Cookies</strong>: für den Betrieb der Webseite erforderlich.</li>
            <li><strong>Statistik-, Marketing- und Personalisierung-Cookies</strong>: für Reichweitenmessung und interessenbasierte Inhalte.</li>
          </ul>
          <p>
            Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur Speicherdauer von permanenten Cookies mitteilen, gehen Sie bitte davon aus, dass die Speicherdauer bis zu zwei Jahre betragen kann.
          </p>
          <p>
            Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): Sie können Ihren Widerspruch mittels der Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren. Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch über die Webseiten <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-accent">optout.aboutads.info</a> und <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-accent">youronlinechoices.com</a> erklärt werden.
          </p>

          <h2 className="text-accent">SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2 className="text-accent">Dienste von Dritten</h2>
          <p>
            Diese Website verwenden allenfalls Google Maps für das Einbetten von Karten, Google Invisible reCAPTCHA für den Schutz gegen Bots und Spam sowie YouTube für das Einbetten von Videos. Diese Dienste der amerikanischen Google LLC verwenden unter anderem Cookies und infolgedessen werden Daten an Google in den USA übertragen. Weitere Informationen finden sich in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent">Datenschutzerklärung von Google</a>.
          </p>

          <h2 className="text-accent">Google Analytics</h2>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code «_anonymizeIp();» erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen zu gewährleisten.
          </p>

          <h2 className="text-accent">Google Ads & Remarketing</h2>
          <p>
            Diese Website nutzt das Google Conversion-Tracking sowie die Remarketing-Funktion der Google Inc. Cookies für Conversion-Tracking verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Möchten Sie nicht am Tracking teilnehmen, können Sie das erforderliche Setzen eines Cookies ablehnen – etwa per Browser-Einstellung.
          </p>

          <h2 className="text-accent">Google Tag Manager</h2>
          <p>
            Google Tag Manager ist eine Lösung, mit der wir Website-Tags über eine Oberfläche verwalten können. Der Tag Manager selbst verarbeitet keine personenbezogenen Daten der Nutzer. Nutzungsrichtlinien: <a href="https://www.google.com/intl/de/tagmanager/use-policy.html" target="_blank" rel="noopener noreferrer" className="text-accent">google.com/tagmanager</a>.
          </p>

          <h2 className="text-accent">Google Web Fonts</h2>
          <p>
            Diese Website nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts, die von Google bereitgestellt werden. Weitere Informationen unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-accent">developers.google.com/fonts/faq</a>.
          </p>

          <h2 className="text-accent">Instagram</h2>
          <p>
            Auf unserer Website sind Funktionen des Dienstes Instagram eingebunden (Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA). Weitere Informationen in der <a href="http://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent">Datenschutzerklärung von Instagram</a>.
          </p>

          <h2 className="text-accent">Rechte betroffener Personen</h2>
          <p>Als betroffene Person haben Sie folgende Rechte:</p>
          <ul>
            <li><strong>Recht auf Bestätigung</strong> – ob personenbezogene Daten verarbeitet werden</li>
            <li><strong>Recht auf Auskunft</strong> – über gespeicherte personenbezogene Daten</li>
            <li><strong>Recht auf Berichtigung</strong> – unrichtiger personenbezogener Daten</li>
            <li><strong>Recht auf Löschung</strong> (Recht auf Vergessen werden)</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung</strong></li>
            <li><strong>Recht auf Datenübertragbarkeit</strong></li>
            <li><strong>Recht auf Widerspruch</strong></li>
            <li><strong>Recht auf Widerruf</strong> einer datenschutzrechtlichen Einwilligung</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden.
          </p>

          <h2 className="text-accent">Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion von sämtlichen Dateien ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
          </p>

          <h2 className="text-accent">Haftungsausschluss</h2>
          <p>
            Alle Angaben unseres Internetangebotes wurden sorgfältig geprüft. Wir bemühen uns, unser Informationsangebot aktuell, inhaltlich richtig und vollständig anzubieten. Trotzdem kann das Auftreten von Fehlern nicht völlig ausgeschlossen werden, womit wir keine Garantie für Vollständigkeit, Richtigkeit und Aktualität von Informationen übernehmen können.
          </p>

          <h2 className="text-accent">Änderungen</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung.
          </p>

          <h2 className="text-accent">Fragen zum Datenschutz</h2>
          <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an <a href="mailto:info@laserclinicluzern.ch" className="text-accent hover:underline">info@laserclinicluzern.ch</a> oder wenden Sie sich direkt an die verantwortliche Person in unserer Organisation.
          </p>
        </div>
      </div>
    </>
  );
}
