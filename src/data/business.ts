/**
 * Angaben zum Anbieter. Diese Werte erscheinen in Impressum, Datenschutzerklärung, AGB und Widerrufsbelehrung.
 * WICHTIG: Alle Einträge in [eckigen Klammern] vor dem Verkauf durch echte Angaben ersetzen.
 * Die Rechtstexte sind Vorlagen und ersetzen keine Rechtsberatung. Bitte vor dem Start prüfen lassen
 * (z. B. IHK Düsseldorf, Verbraucherzentrale-Muster, Rechtsanwalt oder Händlerbund).
 */
export const BUSINESS = {
  product: "Pflege Exam Pro",
  name: "Khalid Essousy",
  street: "Lützowstr. [Hausnummer]",
  zip: "[PLZ]",
  city: "Neuss",
  email: "[E-Mail-Adresse]",
  phone: "", // optional
  /** Preis inkl. aller Abgaben, z. B. "29,00 €" */
  price: "[Preis, z. B. 29,00 €]",
  /** Zugangsdauer, z. B. "12 Monate ab Freischaltung" oder "unbefristet" */
  access: "[Zugangsdauer, z. B. 12 Monate ab Freischaltung]",
  /** Kleinunternehmer nach § 19 UStG? Dann erscheint der Hinweis im Impressum und in den AGB. */
  kleinunternehmer: true,
  /** Umsatzsteuer-ID, falls vorhanden (sonst leer lassen) */
  ustId: "",
  supervisory: "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf",
  updated: "November 2026",
} as const;

export const ADDRESS_LINE = `${BUSINESS.street}, ${BUSINESS.zip} ${BUSINESS.city}`;
