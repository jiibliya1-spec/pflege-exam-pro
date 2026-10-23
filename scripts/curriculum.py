"""Kapitel- und Fallbeispiel-Struktur des Buches.

Quelle: Inhaltsverzeichnis des Buches (PDF-Seiten 1–2, gedruckte Seiten 6–7), von Hand aus dem
Seitenbild übertragen, weil die OCR der Punktlinien-Zeilen unzuverlässig ist. Gedruckte Seitenzahlen;
PDF-Seite = gedruckte Seite − 5 (bestätigt: PDF-Seite 1 zeigt gedruckte Seite 6, PDF-Seite 50 zeigt 55).
"""
PRINTED_OFFSET = 5          # printed = pdf + 5
PDF_PAGES = 333             # Seiten im bereitgestellten PDF → gedruckt 6–338

# (id, nummer, titel, parent, gedruckte Startseite)
CHAPTERS = [
    ("k1", "1", "Auf die Prüfungen, fertig, los!", None, 10),
    ("k1-1", "1.1", "Ein paar Worte, bevor Sie loslegen", "k1", 10),
    ("k1-2", "1.2", "Kompetenzbegriff und Kompetenzbereiche", "k1", 10),
    ("k1-3", "1.3", "Operatoren und Anforderungsbereiche", "k1", 11),
    ("k1-4", "1.4", "Noten und Bewertung", "k1", 11),
    ("k1-5", "1.5", "Die Abschlussprüfungen im Überblick", "k1", 13),
    ("k1-6", "1.6", "Kompetenzschwerpunkte in den Prüfungen", "k1", 14),
    ("k1-7", "1.7", "Beste Voraussetzungen für stressfreies Lernen", "k1", 16),
    ("k1-8", "1.8", "Praktische Lerntipps für Ihren Erfolg", "k1", 18),
    ("k2", "2", "Die schriftliche Prüfung", None, 22),
    ("k2-1", "2.1", "Einführung", "k2", 22),
    ("k2-2", "2.2", "Der erste Prüfungstag", "k2", 30),
    ("k2-3", "2.3", "Der zweite Prüfungstag", "k2", 100),
    ("k2-4", "2.4", "Der dritte Prüfungstag", "k2", 168),
    ("k3", "3", "Die mündliche Prüfung", None, 240),
    ("k3-1", "3.1", "Einführung", "k3", 240),
    ("k3-2", "3.2", "Die mündlichen Prüfungsfälle", "k3", 246),
]

# (case-id, kapitel-id, titel, gedruckte Startseite)
CASES = [
    ("f01", "k2-2", "Aufruhr im Nachtdienst", 32),
    ("f02", "k2-2", "Paul will nach Hause", 42),
    ("f03", "k2-2", "Max' Geheimnis", 54),
    ("f04", "k2-2", "Emilia mag sich nicht waschen", 66),
    ("f05", "k2-2", "Frau Mazur hat einen Wunsch", 76),
    ("f06", "k2-2", "Herr Sommer ekelt sich", 86),
    ("f07", "k2-3", "Aslan und sein bester Freund", 102),
    ("f08", "k2-3", "Frau Krüger bekommt Besuch", 114),
    ("f09", "k2-3", "Mein Leben ändern? Das schaffe ich doch nie!", 124),
    ("f10", "k2-3", "Zu Hause bei Tom und seinen Pflegeeltern", 134),
    ("f11", "k2-3", "So eine Enttäuschung!", 146),
    ("f12", "k2-3", "Es muss ja weitergehen", 156),
    ("f13", "k2-4", "Noteinsatz beim Festival", 170),
    ("f14", "k2-4", "Neulich in der Notaufnahme", 182),
    ("f15", "k2-4", "Herr Kovac macht sich unbeliebt", 192),
    ("f16", "k2-4", "Wenn ein Augenblick alles verändert", 204),
    ("f17", "k2-4", "Frau Seifert braucht eine Pause", 214),
    ("f18", "k2-4", "Sie ist meine Sandkastenliebe", 226),
    ("m01", "k3-2", "Klara versteht die Welt nicht mehr", 248),
    ("m02", "k3-2", "Herr Sander braucht einen Plan", 256),
    ("m03", "k3-2", "Alles für die Patienten?", 266),
    ("m04", "k3-2", "Nika hat ein normales Leben verdient!", 278),
    ("m05", "k3-2", "Nichts ist mehr so, wie es einmal war", 288),
    ("m06", "k3-2", "Eine Wohnung voller Müll", 298),
    ("m07", "k3-2", "Zwischenfall in der Frühstückspause", 308),
    ("m08", "k3-2", "36 Grad, und es wird noch heißer", 318),
    ("m09", "k3-2", "Über meinen Körper bestimme ich", 328),
]

# Bereiche ohne Fälle (Zusammenfassungen "Mein Prüfungstraining im Überblick") – gedruckte Seiten
OVERVIEW_PAGES = {"k2-2": (98, 99), "k2-3": (166, 167), "k2-4": (236, 239)}

# Im PDF NICHT enthalten (laut Inhaltsverzeichnis, aber jenseits gedruckter Seite 338):
MISSING_FROM_PDF = [
    "Herr Konrad hätte gern ein Bier (S. 340)",
    "Willkommen im Team (S. 350)",
    "Auf dem Dorf ist es nicht so einfach (S. 360)",
    "Mein Prüfungstraining im Überblick – Kap. 3 (S. 370)",
    "Kapitel 4 'Zu guter Letzt: Was ist, wenn …?' (S. 374–379)",
    "Literatur, Bildquellen, Meine Prüfungstermine (S. 380–383)",
]
