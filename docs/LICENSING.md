# Zugangscodes (Lizenzsystem)

Die App ist eine reine Web-App (kein App Store). Damit nicht jeder mit dem Link hineinkommt, läuft jede Anfrage
zuerst durch einen Cloudflare-Worker (`worker/index.ts`). Ohne gültigen Code werden weder Seiten noch JavaScript-
oder Datendateien ausgeliefert (auch nicht die Lerninhalte).

## So funktioniert es
1. Kunde zahlt (Stripe) oder du erstellst den Code von Hand.
2. Der Kunde bekommt per E-Mail einen Code: `PEP-XXXX-XXXX-XXXX`.
3. Er öffnet die App, gibt den Code **einmal** ein. Das Gerät bleibt 30 Tage freigeschaltet (verlängert sich beim Benutzen).
4. Ein Code gilt für höchstens `MAX_DEVICES` Geräte (Standard 2, z. B. Handy und Laptop). Weitere Geräte werden abgelehnt.
   Warum nicht 1? iPhone-Apps auf dem Home-Bildschirm haben einen eigenen Cookie-Speicher (Safari und App = zwei "Geräte").
5. Sperren, Zurücksetzen und neue Codes machst du mit der Admin-Schnittstelle (unten).

Ist `SESSION_SECRET` nicht gesetzt, bleibt die App offen wie vorher. Der Schutz wird erst mit der Einrichtung unten aktiv.

## Einrichtung (einmalig, Cloudflare)
Cloudflare Dashboard > Workers & Pages > pflege-exam-pro > Settings > Variables and Secrets:

| Name | Typ | Wert |
|---|---|---|
| `SESSION_SECRET` | Secret | lange Zufallszeichenfolge (z. B. `openssl rand -hex 32`) |
| `ADMIN_TOKEN` | Secret | zweite lange Zufallszeichenfolge, nur für dich |
| `STRIPE_WEBHOOK_SECRET` | Secret | `whsec_...` aus Stripe (siehe Zahlung) |
| `RESEND_API_KEY` | Secret | API-Schlüssel von resend.com (E-Mail-Versand) |
| `MAIL_FROM` | Variable | z. B. `Pflege Exam Pro <zugang@deine-domain.de>` (Domain bei Resend verifizieren) |
| `BUY_URL` | Variable | dein Stripe Payment Link (wird auf der Code-Seite als Kauf-Button gezeigt) |

Der KV-Speicher `LICENSES` wird beim Deploy automatisch angelegt.

## Zahlung (Stripe)
1. Stripe > Payment Links > Produkt anlegen (Preis nach Wahl). E-Mail-Erfassung bleibt aktiv.
2. Stripe > Developers > Webhooks > Endpoint `https://DEINE-DOMAIN/api/stripe-webhook`,
   Events: `checkout.session.completed` und `checkout.session.async_payment_succeeded`. Das Signing Secret als `STRIPE_WEBHOOK_SECRET` eintragen.
3. Nach der Zahlung erzeugt der Worker den Code und schickt ihn per E-Mail (doppelte Webhooks erzeugen keinen zweiten Code).

Zahlung in bar, per Überweisung oder PayPal: Code von Hand erzeugen (nächster Abschnitt) und selbst senden.

## Admin-Befehle
Ersetze `DOMAIN` und `TOKEN`.

```bash
# Neuen Code erzeugen (mit E-Mail wird er direkt verschickt, falls Resend eingerichtet ist)
curl -X POST https://DOMAIN/api/admin/mint -H "authorization: Bearer TOKEN" -d '{"count":1,"email":"kunde@mail.de","note":"Bar bezahlt"}'

# Code sperren / wieder freigeben / Geräte zurücksetzen / Status ansehen
curl -X POST https://DOMAIN/api/admin/revoke  -H "authorization: Bearer TOKEN" -d '{"code":"PEP-XXXX-XXXX-XXXX"}'
curl -X POST https://DOMAIN/api/admin/restore -H "authorization: Bearer TOKEN" -d '{"code":"PEP-XXXX-XXXX-XXXX"}'
curl -X POST https://DOMAIN/api/admin/reset   -H "authorization: Bearer TOKEN" -d '{"code":"PEP-XXXX-XXXX-XXXX"}'
curl -X POST https://DOMAIN/api/admin/info    -H "authorization: Bearer TOKEN" -d '{"code":"PEP-XXXX-XXXX-XXXX"}'

# Alle Codes
curl https://DOMAIN/api/admin/list -H "authorization: Bearer TOKEN"
```

## Grenzen
- Wer Code und Gerät teilt, kann ihn nutzen, aber nur auf `MAX_DEVICES` Geräten. Missbrauch siehst du in `list` (Geräte-Zähler).
- Ein Kunde kann Inhalte nach dem Login abfotografieren oder abtippen. Technisch verhindern lässt sich das nicht.
- Sperren wirken spätestens nach 6 Stunden (Prüfung gegen die Datenbank beim Seitenaufruf).
- Rate-Limit gegen Raten: Cloudflare > Security > WAF > Rate limiting rules auf `/api/activate` (z. B. 10 pro Minute pro IP). Ein Code hat ca. 2^60 Möglichkeiten.
- Jede Anfrage läuft durch den Worker. Der kostenlose Workers-Tarif hat 100.000 Anfragen pro Tag. Bei vielen Nutzern den Paid-Tarif nehmen (ca. 5 USD/Monat).
- Datenschutz: gespeichert werden nur Code, E-Mail, zufällige Geräte-Kennungen und Zeitstempel. In die Datenschutzerklärung aufnehmen.
