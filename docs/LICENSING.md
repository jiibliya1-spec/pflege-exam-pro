# Zugangscodes (Lizenzsystem)

Die App ist eine reine Web-App (kein App Store). Damit nicht jeder mit dem Link hineinkommt, läuft jede Anfrage
zuerst durch einen Cloudflare-Worker (`worker/index.ts`). Ohne gültigen Code werden weder Seiten noch JavaScript-
oder Datendateien ausgeliefert (auch nicht die Lerninhalte).

## So funktioniert es
1. Kunde zahlt (Stripe) oder du erstellst den Code von Hand.
2. Der Kunde bekommt per E-Mail einen Code: `PEP-XXXX-XXXX-XXXX`.
3. Er öffnet die App, gibt den Code **einmal** ein. Das Gerät bleibt 30 Tage freigeschaltet (verlängert sich beim Benutzen).
4. Ein Code gilt standardmäßig für **ein** Gerät (`MAX_DEVICES`=1). Jedes weitere Gerät wird abgelehnt, auch wenn der Code weitergegeben wird.
   Der Admin sieht pro Code, welche Geräte aktiv sind (z. B. "iPhone, Safari") und wie oft ein weiteres Gerät abgelehnt wurde ("ABGELEHNT: 3x" = Code wird geteilt).
   Neues Handy oder Browserdaten gelöscht: In `/admin/` auf "Geräte zurücksetzen" tippen, dann kann der Kunde sich neu anmelden.
   iPhone: Safari und die App auf dem Home-Bildschirm haben getrennte Speicher. Der Kunde soll die App erst zum Home-Bildschirm hinzufügen und den Code **in der App** eingeben (die Code-Seite sagt das auch).
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

## Einfachster Weg: PayPal + Admin-Seite
1. In `BUY_URL` deinen PayPal.me-Link eintragen (z. B. `https://paypal.me/DEINNAME/29`). Er erscheint auf der Code-Seite.
2. Kunde zahlt und schickt dir Name/E-Mail (oder du siehst es in PayPal).
3. Du öffnest `https://DEINE-DOMAIN/admin/`, gibst den Admin-Token ein, tippst "Code erzeugen" und schickst den Code per WhatsApp oder E-Mail-Button.
4. Auf der Seite kannst du auch sperren und Geräte zurücksetzen. Funktioniert auf dem Handy.

## Admin-Befehle (für Fortgeschrittene)
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
- Wer Code und Gerät teilt, kann ihn nutzen, aber nur auf `MAX_DEVICES` Geräten (Standard 1). Versuche mit weiteren Geräten werden gezählt und im Admin rot angezeigt.
- Ein Kunde kann Inhalte nach dem Login abfotografieren oder abtippen. Technisch verhindern lässt sich das nicht.
- Sperren wirken spätestens nach 6 Stunden (Prüfung gegen die Datenbank beim Seitenaufruf).
- Rate-Limit gegen Raten: Cloudflare > Security > WAF > Rate limiting rules auf `/api/activate` (z. B. 10 pro Minute pro IP). Ein Code hat ca. 2^60 Möglichkeiten.
- Jede Anfrage läuft durch den Worker. Der kostenlose Workers-Tarif hat 100.000 Anfragen pro Tag. Bei vielen Nutzern den Paid-Tarif nehmen (ca. 5 USD/Monat).
- Datenschutz: gespeichert werden nur Code, E-Mail, zufällige Geräte-Kennungen und Zeitstempel. In die Datenschutzerklärung aufnehmen.
