---
title: Theme-Anleitung
published: 2025-01-26
updated: 2025-04-13
tags:
  - Blog Theme
  - Anleitung
pin: 99
lang: de
abbrlink: theme-anleitung
---

Neusatz ist ein statisches Blog-Theme basierend auf dem [Astro](https://astro.build/) Framework. Diese Anleitung zeigt, wie Sie die Theme-Konfiguration ändern und neue Beiträge erstellen, um schnell Ihren persönlichen Blog einzurichten.

## Theme-Konfiguration

Passen Sie Ihren Blog an, indem Sie die Konfigurationsdatei [src/config.ts](https://github.com/radishzzz/astro-theme-retypeset/blob/master/src/config.ts) bearbeiten.

### Website-Informationen

Konfigurieren Sie grundlegende Informationen über Ihre Website wie Titel, Beschreibung und Autor.

### Globale Einstellungen

Das Theme ist jetzt für Deutsch als Standardsprache und Englisch als Alternative konfiguriert. Sie können weitere Anpassungen in der Konfigurationsdatei vornehmen.

### Farbschema

Passen Sie die Farben für hellen und dunklen Modus an Ihre Vorlieben an.

### Kommentarsystem

Aktivieren Sie ein Kommentarsystem wie Giscus, Twikoo oder Waline für Benutzerinteraktion.

## Neuen Beitrag erstellen

Um einen neuen Beitrag zu erstellen:

1. Erstellen Sie eine neue Markdown-Datei im `src/content/posts/` Verzeichnis
2. Fügen Sie die erforderlichen Frontmatter-Eigenschaften hinzu:
   - `title`: Titel des Beitrags
   - `published`: Veröffentlichungsdatum
   - `lang`: Sprache des Beitrags ('de' für Deutsch, 'en' für Englisch)

### Beispiel

```markdown
---
title: Mein erster Beitrag
published: 2025-01-26
lang: de
tags:
  - Beispiel
---

Hier ist der Inhalt meines ersten Beitrags...
```

Weitere Details finden Sie in der englischen Version dieser Anleitung.
