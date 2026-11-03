import { LegalDoc } from "@/components/LegalDoc";
import { ADDRESS_LINE, BUSINESS as B } from "@/data/business";

export const metadata = { title: "Datenschutzerklärung" };

export default function Page() {
  return (
    <LegalDoc title="Datenschutzerklärung">
      <p>Stand: {B.updated}</p>
      <h2>1. Verantwortlicher</h2>
      <p>
        {B.name}, {ADDRESS_LINE}, E-Mail: {B.email}
      </p>
      <h2>2. Was die App speichert</h2>
      <p>
        <strong>Lernfortschritt, Notizen, Lesezeichen und Einstellungen</strong> werden ausschließlich lokal in deinem Browser (IndexedDB bzw.
        localStorage) gespeichert. Sie werden nicht an uns übertragen. Wenn du die Browserdaten löschst, sind sie weg. Mit der Export-Funktion
        kannst du eine Sicherung erstellen.
      </p>
      <h2>3. Zugangscode und Freischaltung</h2>
      <p>Zur Prüfung deines Zugangs verarbeiten wir folgende Daten (Art. 6 Abs. 1 lit. b DSGVO, Vertragserfüllung):</p>
      <ul>
        <li>Zugangscode, Zeitpunkt der Freischaltung und der letzten Nutzung,</li>
        <li>deine E-Mail-Adresse und ggf. eine Notiz zur Zahlung (z. B. Name laut PayPal),</li>
        <li>eine zufällige Geräte-Kennung sowie Browser- und Gerätetyp (z. B. „iPhone, Safari“), um die Begrenzung auf ein Gerät durchzusetzen,</li>
        <li>die Anzahl abgelehnter Anmeldeversuche weiterer Geräte (Schutz vor Weitergabe).</li>
      </ul>
      <p>
        Nach der Freischaltung wird ein technisch notwendiges Sitzungs-Cookie gesetzt (Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 Nr. 2 TDDDG).
        Es enthält keine Werbe- oder Tracking-Informationen. Wir setzen keine Analyse- und Werbedienste ein.
      </p>
      <h2>4. Zahlung über PayPal</h2>
      <p>
        Die Zahlung erfolgt über PayPal. Deine Zahlungsdaten gibst du direkt bei PayPal ein; wir erhalten nur die Angaben, die PayPal uns zur
        Zahlung übermittelt (z. B. Name, E-Mail-Adresse, Betrag, Transaktionsnummer). Es gilt zusätzlich die Datenschutzerklärung von PayPal.
        Rechnungs- und Zahlungsdaten bewahren wir gemäß gesetzlicher Aufbewahrungspflichten (z. B. § 147 AO, § 257 HGB) auf.
      </p>
      <h2>5. Hosting und Dienstleister</h2>
      <p>
        Die App wird über Cloudflare, Inc. (Workers und KV-Speicher) ausgeliefert. Dabei werden technisch notwendige Verbindungsdaten
        (z. B. IP-Adresse, Zeitpunkt, angeforderte Datei) verarbeitet. Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag; eine
        Übermittlung in Drittländer kann auf Standardvertragsklauseln bzw. den EU-US Data Privacy Framework gestützt sein. Den Versand der
        Zugangs-E-Mail übernimmt, sofern eingerichtet, der Dienst Resend (Auftragsverarbeiter).
      </p>
      <h2>6. Speicherdauer</h2>
      <p>
        Zugangsdaten werden gespeichert, solange dein Zugang besteht, und danach gelöscht, soweit keine Aufbewahrungspflichten entgegenstehen.
      </p>
      <h2>7. Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
        (Art. 15–21 DSGVO). Schreib uns dazu an {B.email}. Außerdem kannst du dich bei einer Aufsichtsbehörde beschweren, z. B.: {B.supervisory}.
      </p>
    </LegalDoc>
  );
}
