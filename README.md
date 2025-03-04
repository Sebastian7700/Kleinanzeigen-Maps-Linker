# Kleinanzeigen Maps Linker

Eine leichte Chrome-Erweiterung, die Adressen auf Kleinanzeigen anklickbar macht und direkt zu Google Maps führt.

---

## Inhaltsverzeichnis

- [Überblick](#überblick)
- [Funktionen](#funktionen)
- [Installation](#installation)
- [Nutzung](#nutzung)
- [Haftungsausschluss](#haftungsausschluss)
- [Mitwirken](#mitwirken)
- [Lizenz](#lizenz)

---

## Überblick

Diese Erweiterung wurde entwickelt, um die Nutzung von Kleinanzeigen zu verbessern, indem sie Adressen in Anzeigen und Suchübersichten anklickbar macht. Mit einem Klick öffnet sich die Adresse in Google Maps in einem neuen Fenster – ideal, um schnell den Standort einer Anzeige zu finden.

*Hinweis: Ich habe diese Erweiterung allein für meinen eigenen Gebrauch erstellt, um Standorte auf Kleinanzeigen einfacher zu überprüfen. **Es wird keine fortlaufende Unterstützung oder Updates geben.***

---

## Funktionen

- **Anklickbare Adressen:** Adressen auf Kleinanzeigen werden automatisch zu Links, die in Google Maps öffnen.
- **Kompatibilität:** Funktioniert sowohl auf Anzeigen (z. B. `https://www.kleinanzeigen.de/s-anzeige/Deine-Anzeige`) als auch auf Übersichtsseiten (z. B. `https://www.kleinanzeigen.de/Deine-Suche`).
- **Einfache Navigation:** Öffnet Google Maps in einem neuen Tab mit dem Zoom auf ganz Deutschland fokussiert (Info: Manchmal werden Adressen nicht als Pins sondern umkreiste Orte angezeigt).

Hier ist ein kurzes Beispiel der Funktionalität:

![Funktionsweise](KleinanzeigenMapsLinker.gif)

---

## Installation

### Manuelle Installation für Chrome

1. **Repository klonen oder herunterladen:**

   ```bash
   git clone https://github.com/Sebastian7700/Kleinanzeigen-Maps-Linker.git
   ```

2. **Erweiterung in Chrome laden:**

   1. Öffne Chrome und gehe zu `chrome://extensions/`.
   2. Aktiviere den **Entwicklermodus** (Schalter oben rechts).
   3. Klicke auf **Entpackte Erweiterung laden**.
   4. Wähle den Ordner `Kleinanzeigen-Maps-Linker` aus.

---

## Nutzung

Nach der Installation:

- Besuche eine Seite auf [Kleinanzeigen](https://www.kleinanzeigen.de).
- Öffne eine Anzeige oder starte eine Suche. Die Erweiterung macht alle Adressen automatisch anklickbar.
- Klicke auf eine Adresse, um sie in Google Maps in einem neuen Tab zu öffnen.

Falls Probleme auftreten, beachte, dass diese Erweiterung **wie sie ist** bereitgestellt wird, ohne weitere Unterstützung oder Updates.

---

## Haftungsausschluss

Diese Chrome-Erweiterung wird ohne jegliche Garantie oder Gewährleistung für dauerhafte Funktionalität angeboten. Ich habe sie entwickelt, um mir das Überprüfen von Standorten auf Kleinanzeigen zu erleichtern, und obwohl ich nicht erwarte, dass sie Probleme verursacht, kann ich nicht garantieren, dass sie bei Änderungen an der Kleinanzeigen-Website weiterhin funktioniert. **Keine Unterstützung oder weiteren Funktionserweiterungen werden bereitgestellt.**

Nutze sie auf eigenes Risiko.

---

## Mitwirken

Wenn du den Code weiterentwickeln möchtest, kannst du gerne einen Fork erstellen und Pull Requests einreichen. Beachte jedoch, dass ich keine aktive Wartung dieses Projekts plane.

---

## Lizenz

Dieses Projekt wird unter der MIT-Lizenz bereitgestellt. Siehe die Datei [LICENSE](LICENSE) für Details.
