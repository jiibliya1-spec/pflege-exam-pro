import { LegalDoc } from "@/components/LegalDoc";
import { ADDRESS_LINE, BUSINESS as B } from "@/data/business";

export const metadata = { title: "Impressum" };

export default function Page() {
  return (
    <LegalDoc title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {B.name}
        <br />
        {ADDRESS_LINE}
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: {B.email}
        {B.phone ? (
          <>
            <br />
            Telefon: {B.phone}
          </>
        ) : null}
      </p>
      {B.kleinunternehmer ? <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p> : null}
      {B.ustId ? <p>Umsatzsteuer-Identifikationsnummer: {B.ustId}</p> : null}
      <h2>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
      <p>
        {B.name}, {ADDRESS_LINE}
      </p>
      <h2>Streitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h2>Hinweis zu den Inhalten</h2>
      <p>
        {B.product} ist ein Lernangebot zur Prüfungsvorbereitung. Die Inhalte wurden mit Sorgfalt erstellt, ersetzen aber weder Lehrbücher,
        den Unterricht noch verbindliche Vorgaben der Schule oder der Prüfungsbehörde. Übungsfälle und Musterlösungen sind eigene Beispiele
        und keine amtlichen Prüfungsaufgaben.
      </p>
    </LegalDoc>
  );
}
