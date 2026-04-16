// data/informatica/informatica-progettazione-logica.js
// Topic: Progettazione Logica dei Database

var TOPIC_PROGETTAZIONE_LOGICA = {

  // ─────────────────────────────────────────
  // SUBTOPIC 1: Le 3 Fasi della Progettazione
  // ─────────────────────────────────────────
  "fasi-progettazione": {
    titolo: "Le 3 Fasi della Progettazione",
    spiegazione: `
La progettazione di un database segue un processo strutturato in <strong>3 fasi</strong>.
Immagina di costruire una casa: prima si disegnano i piani architettonici (concettuale),
poi il progetto ingegneristico (logico), poi si costruisce fisicamente (fisico).

<strong>Fase 1 — Progettazione Concettuale:</strong>
- Input: requisiti del sistema informativo (documenti, moduli, regole di business)
- Output: Schema E/R (diagramma Entità-Relazione)
- Risponde alla domanda: COSA rappresentare
- Completamente indipendente dal DBMS usato

<strong>Fase 2 — Progettazione Logica:</strong>
- Input: Schema E/R
- Output: Schema Logico — insieme di tabelle con colonne e chiavi
- Risponde alla domanda: COME strutturare i dati in tabelle
- Ancora indipendente dal DBMS specifico
- Include la normalizzazione per eliminare la ridondanza

<strong>Fase 3 — Progettazione Fisica:</strong>
- Input: Schema Logico
- Output: Schema Fisico con comandi DDL (CREATE TABLE, ecc.)
- Dipende dal DBMS scelto (MySQL, Oracle, PostgreSQL...)
- È l'unica fase DBMS-dipendente
    `,
    domande: [
      {
        domanda: "Quali sono le 3 fasi della progettazione di un database e cosa producono?",
        risposta: "La progettazione di un database si articola in tre fasi distinte. La prima è la progettazione concettuale, che parte dai requisiti del sistema informativo e produce lo schema E/R, una rappresentazione formale della realtà indipendente dal DBMS utilizzato. La seconda è la progettazione logica, che traduce lo schema E/R in un insieme di tabelle relazionali, applicando le regole di derivazione e la normalizzazione per eliminare le ridondanze; anche questa fase è indipendente dal DBMS specifico. La terza è la progettazione fisica, che trasforma lo schema logico in strutture concrete tramite comandi DDL specifici per il DBMS scelto, come MySQL od Oracle, tenendo conto dei parametri fisici di memorizzazione."
      },
      {
        domanda: "Perché la progettazione logica è indipendente dal DBMS?",
        risposta: "La progettazione logica produce uno schema relazionale astratto — un insieme di tabelle con attributi, chiavi primarie e chiavi esterne — senza specificare come questi dati saranno fisicamente memorizzati. Il modello relazionale è uno standard teorico che prescinde dall'implementazione: le stesse tabelle possono essere create su MySQL, Oracle o PostgreSQL con minime differenze sintattiche. Solo nella progettazione fisica si sceglie il DBMS e si generano i comandi DDL specifici, che possono variare leggermente da sistema a sistema."
      },
      {
        domanda: "Cosa si intende per 'requisiti del sistema informativo'?",
        risposta: "I requisiti del sistema informativo sono le specifiche di partenza per la progettazione concettuale: documenti aziendali, moduli cartacei o digitali, interviste agli utenti, regole di business e vincoli operativi. Descrivono COSA il database deve rappresentare e gestire, senza entrare nel merito di COME le informazioni saranno strutturate tecnicamente. Analizzando i requisiti, si identificano le entità principali (sostantivi), i loro attributi e le relazioni tra di esse (verbi), che formeranno la base dello schema E/R."
      }
    ],
    qa: [
      { domanda: "Cosa produce la progettazione concettuale?", risposta: "Lo Schema E/R (Entità-Relazione), indipendente dal DBMS." },
      { domanda: "Cosa produce la progettazione logica?", risposta: "Lo Schema Logico: tabelle con attributi, PK e FK." },
      { domanda: "Cosa produce la progettazione fisica?", risposta: "Lo Schema Fisico con comandi DDL specifici per il DBMS scelto." },
      { domanda: "Quale fase dipende dal DBMS scelto?", risposta: "Solo la progettazione fisica." },
      { domanda: "La progettazione logica dipende dal DBMS?", risposta: "No, è ancora indipendente dal DBMS specifico." },
    ],
    daRicordare: [
      "Concettuale = COSA rappresentare → Schema E/R",
      "Logica = COME strutturare in tabelle → Schema Logico",
      "Fisica = DBMS-specifica → Schema Fisico con DDL",
      "Solo la fase fisica dipende dal DBMS scelto",
      "La logica include la normalizzazione per eliminare ridondanze",
    ],
    daNonDire: [
      "Non dire che la progettazione logica dipende dal DBMS — è ancora astratta",
      "Non confondere schema E/R (concettuale) con schema logico (tabelle)",
      "Non saltare la fase di ristrutturazione E/R prima della traduzione logica",
    ],
    raccomandazioni: `
Inizia sempre dalla metafora della casa: "progettare un database è come costruire una casa — prima i disegni, poi il progetto tecnico, poi la costruzione."
Poi collega le 3 fasi con le 3 domande chiave: COSA, COME, CON QUALE DBMS.
Usa la parola "indipendente dal DBMS" per le prime due fasi — dimostra che hai capito la differenza.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 2: Modelli Logici
  // ─────────────────────────────────────────
  "modelli-logici": {
    titolo: "I Modelli Logici dei Dati",
    spiegazione: `
Esistono <strong>4 modelli logici</strong> per organizzare i dati. Il modello relazionale è lo standard oggi.

<strong>Modello Gerarchico:</strong>
- Struttura: albero (tree)
- I nodi rappresentano entità, gli archi le associazioni (sempre 1:N)
- Un figlio ha sempre UN SOLO padre
- Limite: rigidità della struttura, causa ridondanza dei dati
- Esempio: AGENTE → CLIENTE, ORDINE → RIGA → ARTICOLO

<strong>Modello Reticolare:</strong>
- Struttura: grafo orientato — estensione del gerarchico
- Un record figlio può avere PIÙ padri
- Riduce la ridondanza rispetto al gerarchico
- Limite: più complesso da implementare e interrogare

<strong>Modello Relazionale (RDBMS):</strong>
- Struttura: tabelle
- Ogni tabella = insieme di record con lo stesso significato
- Il più semplice ed efficace
- Basato sulla teoria matematica degli insiemi
- Operazioni su INSIEMI di record (non uno alla volta)
- Standard de facto — MySQL, Oracle, PostgreSQL

<strong>Modello a Oggetti (ODBMS):</strong>
- I dati sono rappresentati come oggetti
- Usato in contesti specializzati (es. Postgres, Jasmine CA)
    `,
    domande: [
      {
        domanda: "Quali sono i modelli logici classici? Descrivili brevemente.",
        risposta: "I modelli logici classici sono tre: gerarchico, reticolare e relazionale. Il modello gerarchico organizza i dati come un albero, dove ogni nodo figlio ha esattamente un nodo padre; è semplice ma rigido e genera ridondanza quando lo stesso dato appare in più rami. Il modello reticolare è un'estensione del gerarchico che permette a un figlio di avere più padri, risolvendo alcuni problemi di ridondanza ma aumentando la complessità implementativa. Il modello relazionale, il più diffuso oggi, organizza i dati in tabelle bidimensionali con righe e colonne, sfruttando la teoria matematica degli insiemi; è lo standard per i moderni DBMS come MySQL, Oracle e PostgreSQL, grazie alla sua semplicità e potenza espressiva tramite SQL."
      },
      {
        domanda: "Perché il modello relazionale ha prevalso su gerarchico e reticolare?",
        risposta: "Il modello relazionale ha vinto per tre ragioni principali. Prima di tutto, è stato definito a livello teorico prima di qualsiasi implementazione su computer, a differenza degli altri due modelli che nacquero per astrazione da sistemi già esistenti. In secondo luogo, le sue operazioni agiscono su insiemi di record contemporaneamente, mentre le operazioni sui database gerarchici e reticolari agiscono su singoli record, rendendolo molto più efficiente nelle query complesse. Infine, è il modello più vicino al modo naturale di pensare i dati, utilizzando semplici tabelle comprensibili anche a non tecnici, e supporta il linguaggio standard SQL, che ne ha garantito la diffusione universale."
      },
      {
        domanda: "Qual è il limite principale del modello gerarchico?",
        risposta: "Il limite principale del modello gerarchico è la rigidità della struttura ad albero: ogni nodo figlio può avere uno e un solo padre. Questo genera inevitabilmente ridondanza dei dati quando lo stesso dato (ad esempio un articolo) deve apparire sotto più rami dell'albero (ad esempio in più ordini di clienti diversi). La conseguenza è che aggiornare quel dato richiede di modificarlo in tutti i punti dove è replicato, rischiando inconsistenza. Inoltre, la struttura ad albero non riesce a modellare naturalmente relazioni molti-a-molti (M:N), tipiche della realtà aziendale."
      }
    ],
    qa: [
      { domanda: "Struttura del modello gerarchico?", risposta: "Albero — un solo padre per ogni figlio, associazioni 1:N." },
      { domanda: "Struttura del modello reticolare?", risposta: "Grafo orientato — un figlio può avere più padri." },
      { domanda: "Struttura del modello relazionale?", risposta: "Tabelle (righe e colonne) — RDBMS." },
      { domanda: "Cosa significa RDBMS?", risposta: "Relational Database Management System — DBMS basato sul modello relazionale." },
      { domanda: "Gerarchico e reticolare sono ancora usati?", risposta: "No, sono considerati obsoleti. Il mercato usa il modello relazionale." },
    ],
    daRicordare: [
      "Gerarchico = albero, solo 1:N, un padre per figlio → ridondanza",
      "Reticolare = grafo, un figlio può avere più padri → meno ridondanza ma più complesso",
      "Relazionale = tabelle, standard de facto, SQL → RDBMS",
      "Il relazionale fu definito teoricamente PRIMA di essere implementato",
      "Le operazioni relazionali agiscono su INSIEMI di record",
    ],
    daNonDire: [
      "Non dire che il modello reticolare è uguale al gerarchico — la differenza chiave è che un figlio può avere più padri",
      "Non confondere modello relazionale con il linguaggio SQL — il modello è la teoria, SQL è l'implementazione",
      "Non dimenticare di spiegare PERCHÉ il relazionale ha vinto (definito teoricamente, opera su insiemi)",
    ],
    raccomandazioni: `
Fai una tabella mentale: Gerarchico = albero, Reticolare = grafo, Relazionale = tabelle.
Usa l'esempio dell'azienda con AGENTE → CLIENTE → ORDINE per spiegare il gerarchico.
Poi spiega il problema: se lo stesso articolo appare in più ordini, nel modello gerarchico devi ripetere i dati.
Concludi con il relazionale come soluzione elegante tramite le chiavi esterne.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 3: Relazioni come Tabelle
  // ─────────────────────────────────────────
  "relazioni-tabelle": {
    titolo: "Relazioni come Tabelle — Fondamenti Matematici",
    spiegazione: `
Il modello relazionale si basa sulla <strong>teoria matematica degli insiemi</strong>.

<strong>Prodotto Cartesiano:</strong>
Dati n insiemi A1, A2, ..., An — il prodotto cartesiano è l'insieme di TUTTE
le possibili n-uple ordinate (a1, a2, ..., an).

<strong>Relazione matematica:</strong>
Un qualsiasi sottoinsieme del prodotto cartesiano che soddisfa una condizione.

<strong>Terminologia fondamentale:</strong>
- Grado: numero di colonne (insiemi coinvolti)
- Dominio: l'insieme da cui provengono i valori di una colonna
- n-upla / t-upla: una riga della tabella
- Cardinalità: numero totale di righe

<strong>Le 5 proprietà di una relazione:</strong>
a) Tutte le righe hanno lo stesso numero di colonne
b) Tutti gli attributi sono ATOMICI (valori non scomponibili, un solo valore per cella)
c) I valori di una colonna appartengono tutti allo stesso dominio
d) Non esistono due righe identiche — esiste sempre una chiave che le distingue
e) L'ordine delle righe non è significativo

<strong>Esempio:</strong>
A = {6, 2, 15}, B = {3, 25, 4, 8}
Relazione R = "essere minore di": {(6,25), (2,3), (2,25), (2,4), (2,8), (15,25)}
Grado = 2, Cardinalità = 6
    `,
    domande: [
      {
        domanda: "Cos'è una relazione nel modello relazionale? Come si rappresenta?",
        risposta: "Nel modello relazionale, una relazione è matematicamente un sottoinsieme del prodotto cartesiano di n insiemi (i domini). Si rappresenta come una tabella bidimensionale dove le colonne corrispondono agli attributi della relazione e ogni riga rappresenta una n-upla, ovvero un'istanza specifica che soddisfa la relazione. Il numero di colonne è il grado della relazione, mentre il numero di righe è la sua cardinalità. Ogni riga è diversa da tutte le altre grazie alla chiave primaria, e l'ordine delle righe non ha significato semantico."
      },
      {
        domanda: "Quali sono le 5 proprietà che ogni relazione relazionale deve rispettare?",
        risposta: "Una relazione del modello relazionale deve rispettare cinque proprietà fondamentali. Prima: tutte le righe hanno lo stesso numero di colonne, ovvero la struttura è uniforme. Seconda: tutti gli attributi devono essere atomici, cioè contenere valori elementari non ulteriormente scomponibili, senza liste o gruppi. Terza: i valori di ogni colonna appartengono tutti allo stesso dominio, garantendo l'omogeneità. Quarta: non esistono due righe identiche nella stessa tabella, il che implica l'esistenza di una chiave che identifica univocamente ogni riga. Quinta: l'ordine delle righe non è rilevante e non porta informazione aggiuntiva."
      }
    ],
    qa: [
      { domanda: "Cos'è il grado di una relazione?", risposta: "Il numero di colonne (attributi) della tabella." },
      { domanda: "Cos'è la cardinalità di una relazione?", risposta: "Il numero di righe (t-uple) della tabella." },
      { domanda: "Cos'è un dominio?", risposta: "L'insieme dei valori possibili per una colonna (es. INTEGER, VARCHAR...)." },
      { domanda: "Cosa si intende per attributo atomico?", risposta: "Un attributo che contiene un solo valore semplice per riga, non scomponibile in parti." },
      { domanda: "L'ordine delle righe in una tabella è significativo?", risposta: "No, l'ordine delle righe è irrilevante nel modello relazionale." },
    ],
    daRicordare: [
      "Grado = numero di COLONNE; Cardinalità = numero di RIGHE",
      "Attributi ATOMICI = un solo valore per cella (violazione → 1NF)",
      "Ogni riga è diversa da tutte le altre grazie alla PK",
      "L'ordine delle righe NON ha significato",
      "Relazione = sottoinsieme del prodotto cartesiano",
    ],
    daNonDire: [
      "Non confondere grado (colonne) con cardinalità (righe)",
      "Non dire che l'ordine delle righe è importante",
      "Non dimenticare che 'atomico' significa un solo valore per cella — violarlo causa problemi con la 1NF",
    ],
    raccomandazioni: `
Usa l'esempio del campionato di calcio del PDF: A = {Juve, Napoli}, B = {PSP, Barca}, C = {1, x, 2}.
È concreto e dimostra la comprensione del prodotto cartesiano senza essere astratto.
Poi collega subito al concetto di tabella: il grado è il numero di colonne, la cardinalità il numero di righe.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 4: Ristrutturazione E/R — I 5 Passi
  // ─────────────────────────────────────────
  "ristrutturazione-er": {
    titolo: "Ristrutturazione E/R — I 5 Passi",
    spiegazione: `
Prima di tradurre uno schema E/R in tabelle, è obbligatorio <strong>ristrutturarlo</strong>.
Lo schema E/R contiene elementi che non possono essere convertiti direttamente in tabelle.

<strong>I 5 Passi di Ristrutturazione:</strong>

<strong>1. Analisi delle Ridondanze:</strong>
Una ridondanza è un'informazione derivabile da altre già presenti nello schema.
- Regola: eliminarle → riducono le prestazioni
- Eccezione: mantenere se il costo di ricalcolo è troppo alto
- 3 tipi: attributi derivabili matematicamente, da conteggio istanze, da cicli di associazioni

<strong>2. Eliminazione Attributi Multivalore:</strong>
Un attributo multivalore = prende più valori dello stesso tipo (es. più telefoni per una persona)
- Problema: viola l'atomicità (regola b delle relazioni)
- Soluzione: creare nuova ENTITÀ DEBOLE + relazione 1:N
- Prima: Persona --(1,n)-- Telefono [attributo]
- Dopo: Persona --(1,n)-- HaTelefono --(1,1)-- Telefono [entità]

<strong>3. Eliminazione IsA / Subset:</strong>
Subset = generalizzazione con una sola sottoclasse (es. Persona → Studente)
- Eliminare la freccia IsA → sostituire con relazione esplicita 1:1
- (0,1) lato Persona: può essere o meno Studente
- (1,1) lato Studente: ogni Studente è sempre una Persona

<strong>4. Eliminazione Generalizzazioni tra Entità:</strong>
Due metodi:
- Per FUSIONE: tutte le entità compattate in un'unica. Vale sia per parziali che complete. Svantaggio: valori NULL.
- Per SEPARAZIONE: il padre scompare, le figlie ereditano tutti gli attributi. Vale SOLO per generalizzazioni COMPLETE (totali).

<strong>5. Scelta degli Identificatori Principali:</strong>
Eliminare cicli di identificatori (dipendenze circolari) scegliendo un identificatore alternativo per spezzare il ciclo.
    `,
    domande: [
      {
        domanda: "Quali sono i 5 passi di ristrutturazione dello schema E/R? Perché sono necessari?",
        risposta: "La ristrutturazione è necessaria perché lo schema E/R contiene elementi — come gerarchie, attributi multivalore e ridondanze — che non possono essere tradotti direttamente in tabelle relazionali. I cinque passi sono: primo, l'analisi delle ridondanze, per eliminare attributi derivabili da altri dati, che peggiorano le prestazioni; secondo, l'eliminazione degli attributi multivalore, che violerebbero la regola di atomicità delle relazioni, trasformandoli in entità deboli collegate con 1:N; terzo, l'eliminazione dei subset (IsA), sostituendo la freccia gerarchica con una relazione esplicita 1:1; quarto, l'eliminazione delle generalizzazioni tra entità, per fusione o per separazione; quinto, la scelta degli identificatori principali, spezzando eventuali cicli di dipendenze circolari."
      },
      {
        domanda: "Qual è la differenza tra eliminazione per fusione e per separazione? Quando si usa ciascuna?",
        risposta: "L'eliminazione per fusione compatta tutte le entità della gerarchia (padre e figlie) in un'unica entità, aggiungendo un attributo 'Tipo' per distinguere le istanze e rendendo facoltativi con (0,1) gli attributi specifici delle figlie. Il vantaggio è avere tutte le informazioni in un'unica tabella; lo svantaggio è la presenza di valori NULL per gli attributi non applicabili a tutte le istanze. L'eliminazione per separazione, invece, fa scomparire il padre: le entità figlie ereditano tutti gli attributi del padre. Il vantaggio è l'assenza di sprechi di memoria. Lo svantaggio è la necessità di procedure per controllare l'integrità. La differenza cruciale è che la separazione funziona SOLO per le generalizzazioni complete (totali), dove ogni istanza del padre appartiene ad almeno una figlia; la fusione funziona per entrambi i tipi."
      },
      {
        domanda: "Cos'è un attributo multivalore e come si elimina?",
        risposta: "Un attributo multivalore è un attributo che può assumere più valori dello stesso tipo per una stessa istanza di entità. Ad esempio, una Persona può avere più numeri di telefono. Questo viola la regola di atomicità del modello relazionale, che richiede un solo valore per cella. Per eliminarlo, si crea una nuova entità debole — in questo caso Telefono — collegata all'entità originale tramite una relazione 1:N: una Persona può avere N Telefoni, ma ogni Telefono appartiene a una sola Persona. L'entità Telefono diventa una tabella con la propria PK e una FK verso la tabella Persone."
      }
    ],
    qa: [
      { domanda: "Cos'è una ridondanza nello schema E/R?", risposta: "Un'informazione derivabile da altre già presenti nello schema." },
      { domanda: "Perché si eliminano le ridondanze?", risposta: "Perché riducono le prestazioni nell'accesso ai dati." },
      { domanda: "Cos'è un attributo multivalore?", risposta: "Un attributo che prende più valori dello stesso tipo per la stessa entità (es. più telefoni)." },
      { domanda: "Come si elimina un attributo multivalore?", risposta: "Si crea una nuova entità debole + una relazione 1:N con l'entità originale." },
      { domanda: "La separazione funziona per tutti i tipi di generalizzazione?", risposta: "No, solo per le generalizzazioni COMPLETE (totali)." },
      { domanda: "La fusione funziona per tutti i tipi di generalizzazione?", risposta: "Sì, funziona sia per parziali che per complete." },
      { domanda: "Qual è lo svantaggio della fusione?", risposta: "Presenza di valori NULL per attributi non applicabili a tutte le istanze." },
    ],
    daRicordare: [
      "5 passi: Ridondanze → Multivalore → IsA → Generalizzazioni → Identificatori",
      "Attributo multivalore → nuova entità debole + relazione 1:N",
      "Per SEPARAZIONE: SOLO generalizzazioni complete",
      "Per FUSIONE: sia parziali che complete → ma produce valori NULL",
      "I subset (IsA singolo) diventano relazioni 1:1 esplicite",
    ],
    daNonDire: [
      "Non dire che la separazione funziona per tutti i tipi — vale SOLO per le complete",
      "Non dimenticare che gli attributi multivalore violano l'atomicità (regola b della 1NF)",
      "Non confondere subset (una sola figlia) con generalizzazione (più figlie)",
    ],
    raccomandazioni: `
Memorizza i 5 passi nell'ordine giusto come un elenco numerato — il professore potrebbe chiederteli.
Per la fusione vs separazione, usa la regola mnemonica: "SEParazione = Solo per le Complete".
L'esempio classico per la separazione è Persona → Uomo, Donna (totale, ogni persona è uomo o donna).
L'esempio per la fusione è Persona → Studente, Lavoratore (una persona può non essere né studente né lavoratore).
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 5: Regole di Derivazione
  // ─────────────────────────────────────────
  "regole-derivazione": {
    titolo: "Le 7 Regole di Derivazione",
    spiegazione: `
Dopo la ristrutturazione, si applicano le <strong>7 regole di derivazione</strong>
per tradurre lo schema E/R ristrutturato in schema logico (tabelle).

<strong>Le 7 Regole:</strong>

1. Ogni <strong>entità</strong> diventa una <strong>relazione (tabella)</strong>
   — nome al plurale, con attributi elencati dentro un rettangolo

2. Ogni <strong>attributo di un'entità</strong> diventa un <strong>attributo della relazione</strong>
   — stesso nome

3. Gli attributi <strong>ereditano le caratteristiche</strong> (tipo dato, NOT NULL, ecc.)

4. L'<strong>identificatore dell'entità</strong> diventa la <strong>Chiave Primaria (PK)</strong>
   — indicata con PK a sinistra

5. L'<strong>associazione 1:1</strong> diventa un'<strong>unica relazione</strong>
   — contiene gli attributi di ENTRAMBE le entità

6. Nell'<strong>associazione 1:N</strong>, l'identificatore del lato '1'
   diventa <strong>Chiave Esterna (FK)</strong> nel lato 'N'
   — Esempio: id_editore in Editori → FK nella tabella Libri

7. L'<strong>associazione M:N</strong> diventa una <strong>nuova tabella di collegamento</strong>
   — contiene le PK di entrambe le entità come PK+FK composita
   — più eventuali attributi dell'associazione
   — ERRORE COMUNE: non creare questa tabella!

<strong>Esempio Regola 6 — Biblioteca (1:N):</strong>
EDITORE(id_editore PK, ragione_sociale, indirizzo, citta)
LIBRO(ISBN PK, titolo, lingua, anno, prezzo, id_editore FK)

<strong>Esempio Regola 7 — Biblioteca (M:N):</strong>
AUTORE -M:N- LIBRO → si crea RUOLO(id_autore PK+FK, ISBN PK+FK, ruolo)
    `,
    domande: [
      {
        domanda: "Come si traduce un'associazione M:N nel modello logico? Fai un esempio.",
        risposta: "Un'associazione molti-a-molti non può essere memorizzata direttamente in nessuna delle due tabelle coinvolte, perché aggiunger la chiave esterna da un lato produrrebbe valori ripetuti o NULL. La soluzione è creare una terza tabella di collegamento che contiene le chiavi primarie di entrambe le entità originali, che diventano insieme la chiave primaria composta della nuova tabella e al contempo chiavi esterne verso le rispettive tabelle. Nella biblioteca, l'associazione HA_SCRITTO tra AUTORE e LIBRO (M:N, perché un autore scrive più libri e un libro può avere più autori) diventa la tabella RUOLO(id_autore PK+FK, ISBN PK+FK, ruolo), dove id_autore punta ad AUTORI e ISBN punta a LIBRI."
      },
      {
        domanda: "Come si traduce un'associazione 1:N nel modello logico?",
        risposta: "In un'associazione uno-a-molti, si applica la regola 6: l'identificatore (chiave primaria) dell'entità che sta dal lato '1' diventa chiave esterna (FK) nell'entità che sta dal lato 'N'. Ad esempio, tra EDITORE e LIBRO c'è una relazione 1:N (un editore pubblica molti libri, ma ogni libro ha un solo editore): id_editore è la PK di EDITORI e diventa FK nella tabella LIBRI. Questo è il modo più efficiente per rappresentare la relazione senza ridondanza: non si duplicano i dati dell'editore in ogni riga del libro, ma si conserva solo il riferimento tramite la chiave esterna."
      },
      {
        domanda: "Cos'è l'autorelazione M:N e come si gestisce?",
        risposta: "Un'autorelazione è quando un'entità si mette in relazione con se stessa. Nel caso M:N, ad esempio IMPIEGATO 'è collega di' IMPIEGATO, si crea una tabella di collegamento con due chiavi esterne che puntano entrambe alla stessa tabella IMPIEGATI, ma con nomi diversi per distinguerle. Ad esempio: COLLEGHI(matricola_1 PK+FK, matricola_2 PK+FK), dove sia matricola_1 che matricola_2 puntano a IMPIEGATI.matricola. La chiave primaria composta (matricola_1, matricola_2) garantisce che ogni coppia di colleghi sia registrata una sola volta."
      }
    ],
    qa: [
      { domanda: "Quante sono le regole di derivazione?", risposta: "7 regole." },
      { domanda: "Cosa diventa ogni entità nel modello logico?", risposta: "Una relazione (tabella), con nome al plurale." },
      { domanda: "Cosa diventa l'identificatore di un'entità?", risposta: "La chiave primaria (PK) della relazione." },
      { domanda: "Come si traduce un'associazione 1:N?", risposta: "La PK del lato '1' diventa FK nel lato 'N'." },
      { domanda: "Come si traduce un'associazione M:N?", risposta: "Diventa una nuova tabella di collegamento con PK+FK composita." },
      { domanda: "Come si traduce un'associazione 1:1?", risposta: "In un'unica relazione che contiene gli attributi di entrambe le entità." },
    ],
    daRicordare: [
      "Regola 6 (1:N): PK del lato '1' → FK nel lato 'N'",
      "Regola 7 (M:N): crea SEMPRE una tabella di collegamento con PK+FK composita",
      "Tabella di collegamento M:N: PK composta = (PK_entità1 + PK_entità2)",
      "L'associazione 1:1 fonde le due entità in un'unica tabella",
      "Le entità diventano tabelle con nome al PLURALE",
    ],
    daNonDire: [
      "Non mettere direttamente id_autore dentro Libri per risolvere M:N — serve la tabella di collegamento",
      "Non dimenticare che nella tabella M:N entrambe le PK sono anche FK",
      "Non confondere la regola 5 (1:1 = una tabella) con la regola 7 (M:N = tabella nuova)",
    ],
    raccomandazioni: `
La regola 7 (M:N) è quella che viene chiesta più spesso. Memorizza l'esempio della biblioteca:
AUTORE --M:N-- LIBRO diventa RUOLO(id_autore PK+FK, ISBN PK+FK, ruolo).
Spiega sempre perché serve questa terza tabella: "non posso mettere la FK in nessuna delle due tabelle perché produrrebbe valori ripetuti o NULL."
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 6: Chiavi e Vincoli di Integrità
  // ─────────────────────────────────────────
  "chiavi-integrita": {
    titolo: "Chiavi e Vincoli di Integrità",
    spiegazione: `
<strong>Superchiave:</strong>
Sottoinsieme K di campi tale che nessuna coppia di righe ha lo stesso valore per K.
I campi della superchiave si chiamano 'attributi primi'.

<strong>Chiave Candidata:</strong>
Una superchiave MINIMALE — non si può togliere nessun attributo senza perdere l'unicità.
Una tabella può avere più chiavi candidate.

<strong>Chiave Primaria (PK — Primary Key):</strong>
La chiave candidata scelta come identificatore principale.
- Ha il numero MINIMO di attributi
- NON PUÒ essere NULL (mai!)
- Indicata con PK a sinistra nello schema logico

<strong>Chiave Esterna (FK — Foreign Key):</strong>
Insieme di attributi di T1 i cui valori corrispondono alla PK di T2.
- Usata per collegare due tabelle
- Generalmente NON costituisce una PK per T1
- PUÒ essere NULL (a meno che non sia vincolata NOT NULL)

<strong>Vincolo di Univocità della PK (Primary Key Constraint):</strong>
Non è possibile inserire due righe con lo stesso valore di PK nella stessa tabella.

<strong>Vincolo di Integrità Referenziale (Foreign Key Constraint):</strong>
Si può inserire un valore nella colonna FK solo se quel valore ESISTE GIÀ
come valore PK nella tabella referenziata.

<strong>Integrità di Entità:</strong>
Nessuna componente della PK può avere valore NULL.
Ogni dato è accessibile tramite: nome tabella + nome/valore chiave + nome colonna.
    `,
    domande: [
      {
        domanda: "Qual è la differenza tra superchiave, chiave candidata e chiave primaria?",
        risposta: "Una superchiave è qualsiasi insieme di attributi che identifica univocamente ogni riga della tabella, ma può contenere attributi superflui. Una chiave candidata è una superchiave minimale: non si può rimuovere nessun suo attributo senza perdere la proprietà di unicità. Una tabella può avere più chiavi candidate. La chiave primaria è la chiave candidata scelta come identificatore ufficiale della tabella — tipicamente quella con il minor numero di attributi, semplice da gestire. A differenza delle chiavi candidate, la chiave primaria non può mai avere valori NULL, come stabilito dal vincolo di integrità di entità."
      },
      {
        domanda: "Cos'è una chiave esterna e quale vincolo deve rispettare?",
        risposta: "Una chiave esterna (FK) è un insieme di attributi di una tabella T1 i cui valori devono corrispondere ai valori della chiave primaria di un'altra tabella T2. Serve a stabilire un collegamento tra le due tabelle, implementando le associazioni del modello E/R nel modello logico. Il vincolo che deve rispettare è l'integrità referenziale: non è possibile inserire in T1 una riga con un valore FK che non esiste già come PK in T2. Ad esempio, se un libro ha id_editore = E999 ma E999 non esiste nella tabella EDITORI, l'inserimento verrà rifiutato dal DBMS. Questo garantisce che non esistano riferimenti a dati inesistenti."
      },
      {
        domanda: "Perché la chiave primaria non può essere NULL?",
        risposta: "La chiave primaria ha il compito di identificare univocamente ogni riga della tabella. Un valore NULL, per definizione, rappresenta un'informazione assente o sconosciuta. Se la PK fosse NULL, la riga sarebbe priva di identità: non potrebbe essere referenziata da altre tabelle tramite chiave esterna, non potrebbe essere aggiornata o cancellata in modo certo, e l'intero meccanismo di integrità referenziale collasserebbe. Il vincolo di integrità di entità afferma esplicitamente che nessuna componente della chiave primaria può assumere valore NULL — questo vale sia per PK formate da un singolo attributo che per quelle composite."
      }
    ],
    qa: [
      { domanda: "La PK può essere NULL?", risposta: "No, mai. La PK non può mai avere valore NULL." },
      { domanda: "La FK può essere NULL?", risposta: "Sì, può essere NULL a meno che non sia vincolata NOT NULL." },
      { domanda: "Cos'è il vincolo di integrità referenziale?", risposta: "Si può inserire un valore FK solo se esiste già come PK nella tabella referenziata." },
      { domanda: "Differenza tra PK e FK?", risposta: "PK identifica univocamente le righe della propria tabella; FK crea un collegamento verso la PK di un'altra tabella." },
      { domanda: "Cosa sono gli attributi primi?", risposta: "I campi che fanno parte di una superchiave." },
    ],
    daRicordare: [
      "PK: minimale, univoca, MAI NULL",
      "FK: referenzia la PK di un'altra tabella, PUÒ essere NULL",
      "Vincolo PK: no due righe con stessa PK",
      "Vincolo FK (integrità referenziale): il valore FK deve esistere come PK nell'altra tabella",
      "Superchiave > Chiave Candidata > Chiave Primaria (ordine di restrittività crescente)",
    ],
    daNonDire: [
      "Non dire che la FK non può essere NULL — può esserlo (a meno di vincolo esplicito NOT NULL)",
      "Non confondere chiave candidata con chiave primaria — ci possono essere più candidate",
      "Non dimenticare che anche le PK composite non possono avere NULL in NESSUNO dei loro componenti",
    ],
    raccomandazioni: `
Usa l'esempio della biblioteca: ISBN è PK di LIBRI, id_editore è FK in LIBRI che punta alla PK di EDITORI.
Concretizza il vincolo di integrità referenziale: "se inserisco un libro con id_editore = E999 ma E999 non esiste in EDITORI, il DBMS rifiuta l'operazione."
Questo dimostra comprensione pratica del concetto, non solo la definizione teorica.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 7: Normalizzazione
  // ─────────────────────────────────────────
  "normalizzazione": {
    titolo: "Normalizzazione — 1NF, 2NF, 3NF, BCNF",
    spiegazione: `
La normalizzazione è un <strong>processo di decomposizione</strong> che riduce le ridondanze.

<strong>Due requisiti per ogni decomposizione valida:</strong>
1. Senza perdita di informazione: T = T1 ∪ T2 (si può ricostruire l'originale)
2. Conservazione delle dipendenze: i vincoli originali sono mantenuti

<strong>Dipendenza Funzionale (X → Y):</strong>
Y dipende funzionalmente da X se i valori di X determinano univocamente il valore di Y.
- Completa: Y dipende da TUTTI gli attributi di X
- Parziale: Y dipende solo da un SOTTOINSIEME di X
- Transitiva: X → A → Y (Y dipende da A che dipende da X)
- Banale: Y è sottoinsieme di X (sempre vera, non dice nulla)

<strong>1NF — Prima Forma Normale:</strong>
- Tutti gli attributi sono ATOMICI (un solo valore per cella)
- Esiste una chiave primaria

<strong>2NF — Seconda Forma Normale:</strong>
- In 1NF + nessuna dipendenza funzionale PARZIALE dalla PK
- Rilevante solo se la PK è COMPOSTA
- Esempio problema: impiegato → livello (parziale da PK composta impiegato+progetto)

<strong>3NF — Terza Forma Normale:</strong>
- In 2NF + nessuna dipendenza funzionale TRANSITIVA dalla PK
- Esempio problema: (imp,prog) → ruolo → costo_orario (transitiva!)

<strong>BCNF — Forma Normale Boyce-Codd:</strong>
- In 3NF + per ogni DF non banale X → Y, X è una SUPERCHIAVE
- Più restrittiva della 3NF
- Gestisce anomalie con più chiavi candidate sovrapposte
    `,
    domande: [
      {
        domanda: "Cos'è la normalizzazione e quali sono le sue due proprietà fondamentali?",
        risposta: "La normalizzazione è un procedimento sistematico di decomposizione delle relazioni con l'obiettivo di eliminare le ridondanze presenti nel modello logico. Una ridondanza causa anomalie di inserimento, aggiornamento e cancellazione: ad esempio, se un dato è ripetuto in più righe, aggiornarne uno senza aggiornare gli altri crea inconsistenza. La decomposizione deve rispettare due proprietà fondamentali: deve essere senza perdita di informazione, il che significa che unendo le tabelle ottenute dalla decomposizione si deve poter ricostruire esattamente la tabella originale (formalmente T = T1 ∪ T2); e deve conservare le dipendenze, garantendo che tutti i vincoli di integrità originali rimangano verificabili nelle tabelle decomposte."
      },
      {
        domanda: "Spiega la differenza tra 1NF, 2NF e 3NF con esempi.",
        risposta: "La Prima Forma Normale richiede che tutti gli attributi siano atomici (un solo valore per cella) e che esista una chiave primaria. Ad esempio, un attributo 'nominativo' che contiene nome e cognome insieme viola la 1NF perché non è atomico. La Seconda Forma Normale richiede che, oltre alla 1NF, non esistano dipendenze funzionali parziali: ogni attributo non chiave deve dipendere dall'intera chiave primaria, non solo da una sua parte. Questo è rilevante solo con PK composte: nella tabella Incarichi con PK=(impiegato, progetto), il fatto che 'livello' dipenda solo da 'impiegato' è una violazione della 2NF. La Terza Forma Normale richiede inoltre l'assenza di dipendenze transitive: nessun attributo non chiave deve dipendere da un altro attributo non chiave. Nella stessa tabella, 'costo_orario' dipende da 'ruolo' che dipende dalla PK — questa catena transitiva viola la 3NF."
      },
      {
        domanda: "Cos'è la BCNF e in cosa differisce dalla 3NF?",
        risposta: "La Forma Normale di Boyce-Codd è più restrittiva della 3NF: una tabella è in BCNF se, per ogni dipendenza funzionale non banale X → Y, X è una superchiave della tabella. La 3NF permette alcune eccezioni quando il lato sinistro della dipendenza funzionale fa parte di una chiave candidata; la BCNF non fa eccezioni. Un esempio classico: la tabella (docente, materia, studente) dove ogni docente insegna solo una materia (docente → materia) e ogni studente studia ogni materia con un docente (materia, studente) → docente. Le chiavi candidate sono (materia, studente) e (docente, studente). La dipendenza docente → materia viola la BCNF perché docente da solo non è una superchiave, ma è parte di una chiave candidata (quindi la 3NF non la bloccherebbe). Per normalizzare in BCNF si decompone in (docente, materia) e (docente, studente)."
      }
    ],
    qa: [
      { domanda: "Cosa richiede la 1NF?", risposta: "Attributi atomici (un valore per cella) + chiave primaria esistente." },
      { domanda: "Cosa richiede la 2NF?", risposta: "1NF + nessuna dipendenza funzionale parziale dalla PK." },
      { domanda: "Cosa richiede la 3NF?", risposta: "2NF + nessuna dipendenza funzionale transitiva dalla PK." },
      { domanda: "Cosa richiede la BCNF?", risposta: "3NF + ogni determinante di ogni DF non banale è una superchiave." },
      { domanda: "La 2NF è rilevante con PK non composte?", risposta: "No, se la PK ha un solo attributo la 2NF è automaticamente soddisfatta." },
      { domanda: "Cos'è una dipendenza transitiva?", risposta: "PK → A → B: B dipende da A che dipende dalla PK, non direttamente dalla PK." },
      { domanda: "Cos'è una dipendenza parziale?", risposta: "Un attributo dipende solo da parte della PK composta, non dall'intera chiave." },
    ],
    daRicordare: [
      "1NF: attributi atomici + PK",
      "2NF: no DF parziali (solo con PK composte)",
      "3NF: no DF transitive (PK → A → B)",
      "BCNF: ogni determinante è superchiave (più restrittiva della 3NF)",
      "Decomposizione: SEMPRE senza perdita + conserva dipendenze",
    ],
    daNonDire: [
      "Non dire che la 2NF è rilevante anche con PK semplici — lo è solo con PK composte",
      "Non confondere dipendenza parziale (2NF) con dipendenza transitiva (3NF)",
      "Non dimenticare di verificare prima la 1NF, poi la 2NF, poi la 3NF — nell'ordine",
    ],
    raccomandazioni: `
Usa sempre la tabella Incarichi come esempio:
PK = (impiegato, progetto), attributi: livello, budget, anno, ruolo, costo_orario.
- impiegato → livello: DF PARZIALE → viola 2NF
- (impiegato, progetto) → ruolo → costo_orario: DF TRANSITIVA → viola 3NF
Poi mostra la soluzione finale con 4 tabelle: Incarichi, Impiegati, Progetti, Ruoli.
Questo esempio copre tutto e dimostra comprensione approfondita.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 8: SQL e Funzioni di Aggregazione
  // ─────────────────────────────────────────
  "sql-aggregazione": {
    titolo: "SQL e Funzioni di Aggregazione",
    spiegazione: `
<strong>SQL (Structured Query Language)</strong> è il linguaggio standard per RDBMS.
È dichiarativo: si dice COSA si vuole, non COME ottenerlo.

<strong>Parti di SQL:</strong>
- DDL (Data Definition Language): crea e modifica strutture → CREATE TABLE, ALTER, DROP
- DML (Data Manipulation Language): manipola dati → SELECT, INSERT, UPDATE, DELETE
- DCL (Data Control Language): gestisce permessi → GRANT, REVOKE

<strong>Il comando SELECT implementa 3 operazioni relazionali:</strong>
- Proiezione: quali colonne mostrare (SELECT colonna1, colonna2)
- Selezione: filtra righe (WHERE condizione)
- Join: combina tabelle (JOIN ... ON ...)

<strong>Sintassi base:</strong>
SELECT colonne FROM tabelle WHERE condizione

<strong>Funzioni di Aggregazione:</strong>
Calcolano valori su INSIEMI di tuple (non su singole righe):
- COUNT(colonna): conta valori NON NULL
- COUNT(*): conta TUTTE le righe inclusi i NULL
- COUNT(DISTINCT col): conta valori unici non NULL
- SUM(col): somma
- MAX(col): massimo
- MIN(col): minimo
- AVG(col): media
- STDEV(col): deviazione standard
- VARIANCE(col): varianza

<strong>REGOLA CRITICA:</strong>
Nella SELECT con aggregazione, la target list può contenere SOLO funzioni di aggregazione.
NON si possono mescolare colonne normali e funzioni di aggregazione senza GROUP BY.
    `,
    domande: [
      {
        domanda: "Qual è la differenza tra COUNT(colonna) e COUNT(*)?",
        risposta: "La differenza è nel trattamento dei valori NULL. COUNT(colonna) conta solo le righe in cui la colonna specificata ha un valore non NULL, escludendo quindi le righe dove quel campo è vuoto. COUNT(*), invece, conta tutte le righe della tabella indipendentemente dalla presenza di NULL in qualsiasi colonna. Ad esempio, se la sede S01 ha 4 impiegati di cui 2 con stipendio NULL: COUNT(Stipendio) restituisce 3 (esclude i NULL), mentre COUNT(*) restituisce 4 (conta tutte le righe). COUNT(DISTINCT Stipendio) conterebbe invece solo gli importi stipendiali distinti e non NULL."
      },
      {
        domanda: "Cosa si intende per regola di visibilità delle funzioni di aggregazione?",
        risposta: "La regola di visibilità stabilisce che in una SELECT che utilizza funzioni di aggregazione, la lista delle colonne nella clausola SELECT può contenere esclusivamente altre funzioni di aggregazione. Non è consentito mescolare nello stesso SELECT colonne normali (non aggregate) e funzioni di aggregazione. Questo perché le funzioni di aggregazione operano sull'intero insieme di tuple e restituiscono un singolo valore, mentre una colonna normale restituisce un valore per ogni riga: le due operazioni sono semanticamente incompatibili. Per poter usare sia colonne normali che funzioni di aggregazione insieme, è necessario utilizzare la clausola GROUP BY, che raggruppa le righe per i valori della colonna specificata prima di applicare l'aggregazione."
      }
    ],
    qa: [
      { domanda: "Cosa fa COUNT(colonna)?", risposta: "Conta le righe con valore NON NULL nella colonna specificata." },
      { domanda: "Cosa fa COUNT(*)?", risposta: "Conta TUTTE le righe, incluse quelle con valori NULL." },
      { domanda: "DISTINCT può essere usato con COUNT(*)?", risposta: "No, DISTINCT si usa solo con COUNT(colonna), mai con COUNT(*)." },
      { domanda: "SELECT Nome, COUNT(*) FROM Imp — è corretto?", risposta: "No, viola la regola di visibilità: si mescola colonna normale con funzione di aggregazione senza GROUP BY." },
      { domanda: "DDL, DML, DCL — cosa sono?", risposta: "DDL = struttura (CREATE/ALTER/DROP); DML = dati (SELECT/INSERT/UPDATE/DELETE); DCL = permessi (GRANT/REVOKE)." },
    ],
    daRicordare: [
      "COUNT(col) → esclude NULL; COUNT(*) → include tutto",
      "DISTINCT non funziona con COUNT(*)",
      "Target list con aggregati: SOLO funzioni di aggregazione (senza GROUP BY)",
      "SQL è DICHIARATIVO: dici COSA, non COME",
      "SELECT implementa: proiezione (colonne) + selezione (WHERE) + join",
    ],
    daNonDire: [
      "Non dire che COUNT(*) esclude i NULL — li include tutti",
      "Non mescolare colonne normali e funzioni di aggregazione senza GROUP BY",
      "Non dire che SQL è un linguaggio procedurale — è dichiarativo",
    ],
    raccomandazioni: `
Il COUNT è la funzione più probabile all'esame.
Prepara questo esempio concreto: la tabella Imp ha 4 impiegati nella sede S01, di cui 2 con Stipendio NULL.
COUNT(Stipendio) = 3, COUNT(*) = 4, COUNT(DISTINCT Stipendio) = 2.
Spiega ogni risultato commentando perché è diverso dagli altri.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 9: Operazioni Relazionali
  // ─────────────────────────────────────────
  "operazioni-relazionali": {
    titolo: "Operazioni Relazionali (Algebra Relazionale)",
    spiegazione: `
Le operazioni relazionali permettono di <strong>interrogare e manipolare</strong> le tabelle.
Sono la base teorica di SQL.

<strong>Selezione (σ — sigma):</strong>
- Filtra RIGHE che soddisfano una condizione
- Stesso numero di colonne dell'originale
- Cardinalità minore o uguale
- SQL: WHERE

<strong>Proiezione (π — pi):</strong>
- Estrae specifiche COLONNE
- Grado minore o uguale
- Cardinalità uguale (ma duplicati rimossi)
- SQL: SELECT colonna1, colonna2

<strong>Congiunzione/Join (⋈):</strong>
- Combina due tabelle usando un attributo comune
- Grado risultato = N1 + N2 - 1
- Cardinalità non prevedibile a priori
- SQL: JOIN ... ON ...

<strong>Operazioni tra tabelle omogenee</strong>
(stesse colonne, stesso tipo, stesso ordine):
- Unione: righe di entrambe senza duplicati
- Intersezione: solo le righe comuni
- Differenza: righe della prima non presenti nella seconda

<strong>Ordine ottimale per combinare operazioni:</strong>
1. Selezione prima (riduce le righe)
2. Congiunzione (combina)
3. Proiezione (riduce le colonne)
    `,
    domande: [
      {
        domanda: "Descrivi le tre operazioni fondamentali dell'algebra relazionale: selezione, proiezione e join.",
        risposta: "La selezione (sigma) filtra le righe di una tabella mantenendo solo quelle che soddisfano una condizione booleana; il risultato ha lo stesso numero di colonne dell'originale ma cardinalità minore o uguale. Corrisponde alla clausola WHERE in SQL. La proiezione (pi) estrae specifiche colonne da una tabella, producendo un risultato con meno colonne ma lo stesso numero di righe; eventuali duplicati vengono eliminati. Corrisponde alla lista di colonne nella SELECT di SQL. La congiunzione (o join) combina due tabelle abbinando le righe che hanno valori uguali in un attributo comune; il grado del risultato è N1+N2-1 (colonne di entrambe meno quella condivisa) e la cardinalità non è prevedibile a priori. Corrisponde al JOIN ... ON in SQL."
      },
      {
        domanda: "Quali sono le operazioni tra tabelle omogenee e cosa richiedono?",
        risposta: "Le operazioni tra tabelle omogenee sono l'unione, l'intersezione e la differenza. Per applicarle, le due tabelle devono avere struttura omogenea: stesso numero di attributi, dello stesso tipo e nello stesso ordine. L'unione genera una nuova tabella che contiene le righe di entrambe le tabelle, eliminando i duplicati. L'intersezione produce solo le righe presenti in entrambe le tabelle. La differenza genera le righe presenti nella prima tabella ma non nella seconda. Queste operazioni corrispondono agli operatori insiemistici UNION, INTERSECT e EXCEPT in SQL."
      }
    ],
    qa: [
      { domanda: "Cosa fa la selezione?", risposta: "Filtra le RIGHE che soddisfano una condizione. Stesso grado, cardinalità minore o uguale." },
      { domanda: "Cosa fa la proiezione?", risposta: "Estrae colonne specifiche. Grado minore, stessa cardinalità (duplicati rimossi)." },
      { domanda: "Grado del risultato di un join?", risposta: "N1 + N2 - 1 (colonne di entrambe, meno quella comune)." },
      { domanda: "Cosa richiede l'unione tra tabelle?", risposta: "Le tabelle devono essere omogenee: stesso numero di colonne, stesso tipo, stesso ordine." },
      { domanda: "Qual è l'ordine ottimale delle operazioni?", risposta: "Selezione → Join → Proiezione (ridurre righe prima, poi combinare, poi ridurre colonne)." },
    ],
    daRicordare: [
      "Selezione = filtra RIGHE (WHERE) — stesso grado",
      "Proiezione = filtra COLONNE (SELECT col) — stessa cardinalità",
      "Join = combina tabelle — grado N1+N2-1",
      "Operazioni insiemistiche (Unione, Intersezione, Differenza) richiedono tabelle omogenee",
      "Ordine ottimale: Selezione → Join → Proiezione",
    ],
    daNonDire: [
      "Non confondere selezione (filtra righe) con proiezione (filtra colonne)",
      "Non dire che la cardinalità del join è prevedibile — non lo è a priori",
      "Non dimenticare che le operazioni insiemistiche richiedono tabelle omogenee",
    ],
    raccomandazioni: `
Usa l'esempio pratico della biblioteca/azienda: "Ottenere RagioneSociale e NomeAgente per i clienti con CodiceAttivita = 3109."
Mostra i 3 passi: 1) Selezione su CodiceAttivita=3109, 2) Join con Agenti, 3) Proiezione su RagioneSociale e NomeAgente.
Collegalo subito all'SQL equivalente — dimostra che sai tradurre l'algebra in pratica.
    `,
  },

};
