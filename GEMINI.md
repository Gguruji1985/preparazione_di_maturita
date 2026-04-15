# GEMINI.md — Project Rules for Maturità Prep

## START OF EVERY CONVERSATION
**Always read `PROGRESS.md` before doing anything.** It tells you which files are done, which are TODO, and what the next step is. Do not skip this.

---

## AFTER WRITING ANY FILE
**Immediately update `PROGRESS.md`** — mark the file as `✅ DONE` in the status table. Do this every single time, right after writing or editing a file. No exceptions.

---

## DATA FILE RULES

### 1. Always use `var`, never `const` or `let`
Every data file must declare its variable with `var`:
```js
// CORRECT
var TOPIC_BASI_DI_DATI = { ... };

// WRONG — breaks window lookup
const TOPIC_BASI_DI_DATI = { ... };
```
This is required because `resolveDataVariable()` in `app.js` looks up `window[varName]`.
`const` and `let` do not attach to `window` — the panel will silently fail to load.

### 2. Variable naming convention
```
data/informatica/informatica-basi-di-dati.js  →  var TOPIC_BASI_DI_DATI
data/comune/fil-nietzsche.js                  →  var TOPIC_FIL_NIETZSCHE
data/scientifico/mat-limiti.js                →  var TOPIC_LIMITI
```
The mapping is defined in `FILE_TO_VAR` inside `js/app.js`. Always check it matches.

### 3. Data file structure
Every data file must follow this exact shape:
```js
var TOPIC_XXXX = {

  "subtopic-key": {
    titolo: "Nome del Subtopic",
    spiegazione: `HTML content here — use <strong>, <em>, <code> tags`,
    domande: [
      "Domanda 1?",
      "Domanda 2?",
    ],
    qa: [
      { domanda: "Domanda?", risposta: "Risposta." },
    ],
    daRicordare: [
      "Punto chiave 1",
      "Punto chiave 2",
    ],
    daNonDire: [
      "Errore da evitare 1",
    ],
    raccomandazioni: `Testo libero con consigli per l'orale.`,
  },

  "altro-subtopic": {
    // ...
  },

};
```

### 4. All content must be in Italian
No English in any data file content (labels, explanations, questions, tips).

---

## INDEX.HTML RULE
Every time a new data file is written, **add its `<script>` tag to `index.html`** in the preloaded block:
```html
<!-- Preloaded data files (add new ones here as they are written) -->
<script src="data/informatica/informatica-basi-di-dati.js"></script>
<!-- add new line here -->
```
Without this, the file won't load when the site is opened directly via `file://`.

---

## ADDING A NEW TREE SECTION
All sections except Informatica are commented out in `js/data.js`.
To enable a section when its data files are ready:
1. Open `js/data.js`
2. Find the `/* ... */` block for that section and remove the comment markers
3. Add all the section's `<script>` tags to `index.html`
4. Mark the section as enabled in `PROGRESS.md`

Do NOT uncomment a section until ALL its data files are written.

---

## GENERAL PROJECT RULES

- **Never use `document.write`** anywhere.
- **Never modify `js/data.js`** unless the tree structure itself needs changing — it is the single source of truth for the navigation tree.
- **Never modify core engine files** (`tree-engine.js`, `study-panel.js`, `app.js`, CSS files) unless fixing a real bug. Do not refactor working code.
- **Content comes first** — the priority is writing the remaining ~60 data files. Engine work is secondary.
- **Do not add extra files** — no new JS modules, no new CSS files, no build tools. The project is intentionally simple and static.

---

## QUICK REFERENCE — Files Written So Far

See `PROGRESS.md` for the full up-to-date status table.

Core engine: **DONE** — index.html, all CSS, all JS engine files.

Data files done: see `PROGRESS.md → Data Files Status`.
