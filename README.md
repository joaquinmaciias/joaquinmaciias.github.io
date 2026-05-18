# joaquinmaciias.github.io

Personal portfolio for Joaquín Mir Macías.

## Stack
Static site. No build step. Three source files:

- `index.html` — page shell + static fallback text (ES).
- `styles.css` — full stylesheet.
- `script.js` — DOM rendering, language switcher, timeline layout, command palette (⌘K).
- `translations.js` — **all content** (EN + ES): hero, about, experience, education, projects, skills, timeline, currently.

To edit any content (experience entry, project description, skills list, timeline date, "currently" block), edit `translations.js` and reload. No rebuild needed.

## Assets
- `assets/pictures/profile.png` — hero portrait (initials `JMM` shown as fallback if missing).
- `assets/icons/experience/*.png` — company logos (`bbva.png`, `redsys.png`, `comillas.png`). Missing logos fall back to initials chip.
- `assets/icons/education/comillas.png` — education logo.
- `assets/icons/flags/{spain,uk}.png` — language switcher flags.
- `assets/projects/*.png` — project thumbnails.
- `CV_Joaquin_Mir_Macias.pdf`, `TFG - Mir Macias, Joaquin.pdf`, `Carta_recomendación_JMM.pdf` — hero PDF links.

## Local preview
```
python -m http.server 8000
```
Then open http://localhost:8000

## Deploy
GitHub Pages serves directly from the `main` branch root.
