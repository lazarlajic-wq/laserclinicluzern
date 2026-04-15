import { Helmet } from "react-helmet-async";

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Impressum – Laser Clinic Luzern</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen pt-28 pb-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Impressum</h1>

          <h2 className="text-accent">Angaben gemäss § 5 TMG</h2>
          <p>
            Lash Clinic GmbH<br />
            Gerliswilstrasse 98<br />
            6020, Emmenbrücke<br />
            Schweiz
          </p>
          <p>
            Geschäftsführer: Ermin Taranis<br />
            Handelsregisteramt: Luzern<br />
            UID: CHE-264.921.300
          </p>

          <h2 className="text-accent">Kontaktmöglichkeiten</h2>
          <p>
            <a href="tel:+41762208228" className="text-accent hover:underline">+41 76 220 82 28</a><br />
            <a href="mailto:info@laserclinicluzern.ch" className="text-accent hover:underline">info@laserclinicluzern.ch</a>
          </p>

          <h2 className="text-accent">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-accent">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2 className="text-accent">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <p className="text-muted-foreground/50 text-xs mt-12">Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">e-recht24.de</a></p>
        </div>
      </div>
    </>
  );
}
