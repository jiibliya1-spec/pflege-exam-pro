import { LegalDoc } from "@/components/LegalDoc";
import { ADDRESS_LINE, BUSINESS as B } from "@/data/business";

export const metadata = { title: "Widerrufsbelehrung" };

export default function Page() {
  return (
    <LegalDoc title="Widerrufsbelehrung">
      <h2>Widerrufsrecht</h2>
      <p>
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab
        dem Tag des Vertragsschlusses. Um dein Widerrufsrecht auszuüben, musst du uns ({B.name}, {ADDRESS_LINE}, E-Mail: {B.email}) mittels einer
        eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen,
        informieren. Du kannst dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der
        Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
      </p>
      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn
        Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe
        Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast.
      </p>
      <h2>Vorzeitiges Erlöschen des Widerrufsrechts</h2>
      <p>
        Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten, wenn
        wir mit der Ausführung begonnen haben, nachdem du ausdrücklich zugestimmt hast, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen,
        und du bestätigt hast, dass du dadurch dein Widerrufsrecht verlierst, sobald der Vertrag erfüllt ist (§ 356 Abs. 5 BGB). Das ist der Fall, sobald du
        den Zugangscode erhalten hast.
      </p>
      <h2>Muster-Widerrufsformular</h2>
      <p>(Wenn du den Vertrag widerrufen willst, fülle dieses Formular aus und sende es zurück.)</p>
      <p>
        An {B.name}, {ADDRESS_LINE}, E-Mail: {B.email}:
        <br />
        Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Dienstleistung: Zugang zu {B.product}
        <br />
        Bestellt am: ________ · Name: ________ · Anschrift: ________ · Datum: ________ · Unterschrift (nur bei Mitteilung auf Papier): ________
      </p>
    </LegalDoc>
  );
}
