# Guide for Writing Data Files — Maturità Prep

This document explains exactly how to write new data files for this project.
Give this file to Gemini along with the file you want written.

---

## What the project is

A static website for studying the Italian Esame di Maturità.
The left sidebar shows a navigation tree. Clicking a leaf node opens a study panel on the right with content for that topic.

All content must be in **Italian**.

---

## Exact file template

Every data file must follow this structure exactly:

```js
// data/[folder]/[filename].js
var TOPIC_XXXX = {

  "subtopic-key-1": {
    titolo: "Nome del Subtopic",
    spiegazione: `
Testo HTML della spiegazione. Puoi usare tag HTML:
<strong>testo in grassetto</strong>
<em>testo enfatizzato (in verde nel sito)</em>
<code>codice inline</code>

Usa paragrafi separati da righe vuote.
Usa elenchi puntati con il trattino: - elemento
    `,
    domande: [
      "Domanda 1 che la commissione potrebbe fare?",
      "Domanda 2?",
      "Domanda 3?",
    ],
    qa: [
      {
        domanda: "Domanda breve?",
        risposta: "Risposta diretta e completa in 2-3 frasi."
      },
      {
        domanda: "Altra domanda?",
        risposta: "Altra risposta."
      },
    ],
    daRicordare: [
      "Punto chiave da memorizzare 1",
      "Punto chiave da memorizzare 2",
      "Punto chiave da memorizzare 3",
    ],
    daNonDire: [
      "Errore comune da evitare 1",
      "Confusione tipica da non fare 2",
    ],
    raccomandazioni: `Consigli pratici per l'orale scritti come testo libero.
Puoi usare più righe.`,
  },

  "subtopic-key-2": {
    titolo: "Secondo Subtopic",
    spiegazione: `...`,
    domande: [ "..." ],
    qa: [ { domanda: "...", risposta: "..." } ],
    daRicordare: [ "..." ],
    daNonDire: [ "..." ],
    raccomandazioni: `...`,
  },

};
```

---

## Critical rules — do not break these

**1. Always use `var`, never `const` or `let`**
```js
// CORRECT
var TOPIC_LIMITI = { ... };

// WRONG — breaks the site silently
const TOPIC_LIMITI = { ... };
```
The site uses `window['TOPIC_LIMITI']` to find the variable.
`const` and `let` do NOT attach to `window` — the panel will never open.

**2. The variable name must match exactly**
Each file has a specific variable name. See the full list below.

**3. The subtopic keys must match exactly**
The tree navigation uses specific subtopic keys (listed below per file).
If a key doesn't match, clicking that node in the tree opens the wrong subtopic.

**4. All content in Italian** — no English in explanations, questions, tips.

**5. `spiegazione` is HTML** — use `<strong>`, `<em>`, `<code>` tags freely.
`domande`, `daRicordare`, `daNonDire` are plain text strings (no HTML).
`raccomandazioni` is plain text (backtick string, newlines allowed).

---

## Files still to write

### data/informatica/ — Variable names and subtopic keys

| File | Variable name | Subtopic keys |
|------|--------------|---------------|
| `sistemi-reti-protocolli.js` | `TOPIC_PROTOCOLLI` | free (create 2-3 logical subtopics) |
| `sistemi-reti-sicurezza.js` | `TOPIC_SICUREZZA_SISTEMI` | free (create 2-3 logical subtopics) |
| `sistemi-reti-cloud.js` | `TOPIC_CLOUD` | free (create 2-3 logical subtopics) |
| `tpsit-concorrenza.js` | `TOPIC_CONCORRENZA` | free (create 2-3 logical subtopics) |
| `tpsit-socket.js` | `TOPIC_SOCKET` | free (create 2-3 logical subtopics) |
| `tpsit-web-server.js` | `TOPIC_WEB_SERVER` | free (create 2-3 logical subtopics) |
| `tpsit-webservices.js` | `TOPIC_WEBSERVICES` | free (create 2-3 logical subtopics) |
| `tpsit-progettazione.js` | `TOPIC_PROGETTAZIONE` | free (create 2-3 logical subtopics) |

### data/comune/ — Files needed for the ITI tree

| File | Variable name | Subtopic keys |
|------|--------------|---------------|
| `ita-origini.js` | `TOPIC_ITA_ORIGINI` | free (create 2-3: es. dolce-stil-novo, dante, petrarca) |
| `ita-verismo.js` | `TOPIC_ITA_VERISMO` | free (es. verga, naturalismo, novelle) |
| `ita-decadentismo.js` | `TOPIC_ITA_DECADENTISMO` | free (es. pascoli, dannunzio, estetismo) |
| `ita-novecento-prosa.js` | `TOPIC_ITA_NOV_PROSA` | free (es. svevo, pirandello, calvino) |
| `ita-dopoguerra.js` | `TOPIC_ITA_DOPOGUERRA` | free (es. neorealismo, pavese, pasolini) |
| `sto-ww1.js` | `TOPIC_STO_WW1` | free (es. cause, fronte italiano, esiti) |
| `sto-totalitarismi.js` | `TOPIC_STO_TOTALITARISMI` | free (es. fascismo, nazismo, stalinismo) |
| `sto-ww2.js` | `TOPIC_STO_WW2` | free (es. cause, shoah, resistenza, esiti) |
| `sto-guerra-fredda.js` | `TOPIC_STO_GUERRA_FREDDA` | free (es. blocchi, crisi, caduta muro) |
| `sto-italia-repubblicana.js` | `TOPIC_STO_ITALIA_REP` | free (es. costituzione, anni60, anni-di-piombo) |

---

## After writing each file — two things to do

**1. Add a script tag in `index.html`**

Open `index.html` and find this block:
```html
<!-- Preloaded data files (add new ones here as they are written) -->
<script src="data/informatica/informatica-basi-di-dati.js"></script>
...
```
Add a new line:
```html
<script src="data/[folder]/[filename].js"></script>
```

**2. Update `PROGRESS.md`**

Find the file in the status table and change `⬜ TODO` to `✅ DONE`.

---

## Example of a complete real file

Here is the actual file for `informatica-reti.js` as a reference for quality and style:

```js
// data/informatica/informatica-reti.js
var TOPIC_RETI = {

  "osi": {
    titolo: "Modello OSI",
    spiegazione: `
Il <strong>modello OSI</strong> (Open Systems Interconnection) è uno standard ISO che divide
la comunicazione di rete in <em>7 livelli</em>, ognuno con responsabilità ben definite.

<strong>I 7 livelli (dal basso verso l'alto):</strong>
1. <em>Fisico</em>: trasmissione bit sul mezzo fisico (cavi, segnali elettrici/ottici)
2. <em>Data Link</em>: trasmissione frame tra nodi adiacenti, controllo errori (MAC, LLC)
3. <em>Rete</em>: instradamento pacchetti tra reti diverse (IP)
4. <em>Trasporto</em>: comunicazione end-to-end affidabile (TCP, UDP)
5. <em>Sessione</em>: gestione delle sessioni di comunicazione
6. <em>Presentazione</em>: formato dei dati, cifratura, compressione
7. <em>Applicazione</em>: interfaccia con le applicazioni utente (HTTP, FTP, SMTP)

<strong>Vantaggi del modello a livelli:</strong>
- Standardizzazione: produttori diversi possono interoperare
- Modularità: si può modificare un livello senza toccare gli altri
- Astrazione: ogni livello usa i servizi del livello inferiore
    `,
    domande: [
      "Descrivere il modello OSI e i suoi 7 livelli.",
      "Perché si usa un modello a livelli?",
      "A quale livello opera un router? E uno switch?",
    ],
    qa: [
      {
        domanda: "Cos'è il modello OSI?",
        risposta: "È un modello di riferimento ISO che divide la comunicazione di rete in 7 livelli funzionali, dal fisico all'applicazione. Ogni livello offre servizi al livello superiore e usa quelli del livello inferiore."
      },
      {
        domanda: "A quale livello opera un router?",
        risposta: "Livello 3 (Rete): instrada pacchetti in base all'indirizzo IP. Uno switch opera a livello 2 (Data Link) in base agli indirizzi MAC."
      },
    ],
    daRicordare: [
      "7 livelli OSI: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione",
      "Mnemonica dal basso: 'Per Davvero Non Temere Strane Parole Astruse'",
      "Switch = L2 (MAC). Router = L3 (IP). Firewall = L3/L4",
    ],
    daNonDire: [
      "Non confondere OSI (modello teorico) con TCP/IP (modello pratico usato in internet)",
    ],
    raccomandazioni: `Memorizza i 7 livelli con la mnemonica.
La commissione chiede spesso a che livello operano i dispositivi: switch L2, router L3.`,
  },

};
```

---

## Prompt to give Gemini

Copy and paste this prompt to Gemini, then add the specific file info:

---

*I need you to write a JavaScript data file for a study website. Follow these rules exactly:*

*1. Use `var TOPIC_XXX = { ... };` — never `const` or `let`*
*2. All content in Italian*
*3. The file must have this exact structure for each subtopic:*
*   - `titolo`: string*
*   - `spiegazione`: HTML string (use strong, em, code tags)*
*   - `domande`: array of strings (questions the exam committee might ask)*
*   - `qa`: array of `{ domanda, risposta }` objects*
*   - `daRicordare`: array of strings (key points to remember)*
*   - `daNonDire`: array of strings (mistakes to avoid)*
*   - `raccomandazioni`: plain text string (practical oral exam tips)*

*Write the file for: [FILENAME]*
*Variable name: [TOPIC_XXX]*
*Topic: [DESCRIBE THE TOPIC]*
*Subtopics to include: [LIST SUBTOPIC KEYS AND WHAT THEY SHOULD COVER]*

*Make the content thorough and exam-ready for an Italian maturità student.*

---
