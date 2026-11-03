import { LegalDoc } from "@/components/LegalDoc";
import { ADDRESS_LINE, BUSINESS as B } from "@/data/business";

export const metadata = { title: "AGB" };

export default function Page() {
  return (
    <LegalDoc title="Allgemeine Geschäftsbedingungen">
      <p>Stand: {B.updated}</p>
      <h2>1. Geltungsbereich und Anbieter</h2>
      <p>
        Diese AGB gelten für den Kauf von Zugängen zur Lern-App „{B.product}“ von {B.name}, {ADDRESS_LINE} (nachfolgend „Anbieter“) durch
        Verbraucher und Unternehmer.
      </p>
      <h2>2. Vertragsgegenstand</h2>
      <p>
        Gegenstand ist der Zugang zu einer webbasierten Lern-App zur Vorbereitung auf die Abschlussprüfung in der Pflege (Lektionen,
        Übungsfälle, Fragen, Karteikarten) für den Zeitraum: {B.access}. Der Zugang erfolgt über einen persönlichen Zugangscode. Es besteht kein
        Anspruch auf bestimmte Inhalte oder Erweiterungen, die in der Zukunft hinzukommen.
      </p>
      <h2>3. Vertragsschluss, Preis und Zahlung</h2>
      <p>
        Der Vertrag kommt zustande, wenn der Kunde die Zahlung über PayPal ausführt und der Anbieter den Zugangscode zusendet. Der Preis beträgt{" "}
        {B.price} {B.kleinunternehmer ? "(gemäß § 19 UStG ohne Ausweis von Umsatzsteuer)" : "inklusive gesetzlicher Umsatzsteuer"}. Die
        Zahlung erfolgt im Voraus über PayPal.
      </p>
      <h2>4. Freischaltung</h2>
      <p>
        Nach Zahlungseingang sendet der Anbieter den Zugangscode an die vom Kunden angegebene E-Mail-Adresse, in der Regel innerhalb von 24 Stunden
        (im Einzelfall auch später). Der Kunde ist dafür verantwortlich, eine korrekte E-Mail-Adresse anzugeben.
      </p>
      <h2>5. Nutzungsrechte und Weitergabeverbot</h2>
      <ul>
        <li>Der Zugangscode ist personenbezogen und nur für den Kunden bestimmt. Er darf auf einem Gerät aktiviert werden.</li>
        <li>Die Weitergabe von Code, Zugang oder Inhalten an Dritte sowie das Vervielfältigen, Veröffentlichen oder Weiterverkaufen der Inhalte ist untersagt.</li>
        <li>Bei Verstoß darf der Anbieter den Zugang ohne Erstattung sperren. Gesetzliche Rechte bleiben unberührt.</li>
        <li>Ein Gerätewechsel ist auf Anfrage möglich.</li>
      </ul>
      <h2>6. Inhalte, keine Prüfungsgarantie</h2>
      <p>
        Die Inhalte dienen der Lernunterstützung und wurden mit Sorgfalt erstellt. Übungsfälle und Musterantworten sind eigene Beispiele und nicht amtlich.
        Der Anbieter übernimmt keine Gewähr dafür, dass eine Prüfung bestanden wird, und keine Gewähr für die Übereinstimmung mit den Vorgaben
        einzelner Schulen oder Prüfungsstellen. Medizinische oder pflegerische Inhalte ersetzen keine Fachliteratur oder ärztliche Anordnung.
      </p>
      <h2>7. Verfügbarkeit</h2>
      <p>Der Anbieter bemüht sich um hohe Verfügbarkeit, kann aber Wartungsarbeiten oder Störungen nicht ausschließen.</p>
      <h2>8. Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit sowie nach dem
        Produkthaftungsgesetz. Bei leichter Fahrlässigkeit haftet er nur bei Verletzung wesentlicher Vertragspflichten und nur für den
        vorhersehbaren, vertragstypischen Schaden.
      </p>
      <h2>9. Widerrufsrecht</h2>
      <p>Verbraucher haben ein Widerrufsrecht. Einzelheiten stehen in der Widerrufsbelehrung.</p>
      <h2>10. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Zwingende Verbraucherschutzvorschriften des Staates, in dem der Verbraucher
        seinen gewöhnlichen Aufenthalt hat, bleiben unberührt. Sollte eine Bestimmung unwirksam sein, bleibt der Rest wirksam.
      </p>
    </LegalDoc>
  );
}
