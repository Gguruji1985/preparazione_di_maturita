// data/informatica/informatica-basi-di-dati.js
// Topic: Basi di Dati — tutti i subtopic

var TOPIC_BASI_DI_DATI = {

  // ─────────────────────────────────────────
  // SUBTOPIC 1: Introduzione ai DBMS
  // ─────────────────────────────────────────
  "introduzione": {
    titolo: "Introduzione ai DBMS",
    spiegazione: `
Un <strong>database</strong> è una raccolta organizzata di dati correlati, gestita da un
<strong>DBMS (Database Management System)</strong> — un software che permette di creare,
leggere, aggiornare ed eliminare dati in modo efficiente e sicuro.

<strong>Problemi dei file tradizionali (senza DBMS):</strong>
- Ridondanza: stessi dati salvati in più file
- Inconsistenza: aggiornando un file si dimentica l'altro
- Difficoltà di accesso concorrente
- Nessun controllo sulla sicurezza

<strong>Vantaggi del DBMS:</strong>
- Indipendenza fisica e logica dei dati
- Controllo della ridondanza
- Gestione della concorrenza (più utenti contemporaneamente)
- Backup e ripristino
- Sicurezza e permessi

<strong>Tipi di DBMS:</strong>
- Relazionale (MySQL, PostgreSQL, Oracle) → usa tabelle e SQL
- NoSQL (MongoDB, Redis) → usa documenti, chiave-valore, grafi
- NewSQL → combina scalabilità NoSQL con garanzie SQL

<strong>Architettura ANSI/SPARC (3 livelli):</strong>
- Livello esterno (vista utente)
- Livello concettuale (schema logico)
- Livello interno (come i dati sono fisicamente memorizzati)
    `,
    domande: [
      {
        domanda: "Cos'è un DBMS e quali problemi risolve rispetto ai file tradizionali?",
        risposta: "Un DBMS (Database Management System) è un sistema software progettato per gestire in modo efficiente, sicuro e centralizzato grandi quantità di dati. Rispetto alla gestione tradizionale tramite file separati, risolve il problema della ridondanza, evitando che lo stesso dato sia duplicato inutilmente, e dell'inconsistenza, garantendo che ogni aggiornamento si rifletta ovunque. Inoltre, fornisce meccanismi per il controllo dell'accesso concorrente, permettendo a più utenti di operare contemporaneamente senza sovrascrivere i dati altrui. Infine, offre strumenti avanzati per la sicurezza, il backup e il ripristino dei dati in caso di guasti hardware o software."
      },
      {
        domanda: "Quali sono i vantaggi principali dell'uso di un database?",
        risposta: "L'uso di un database strutturato offre numerosi vantaggi, tra cui l'integrità dei dati garantita dai vincoli definiti a livello di schema. Un altro beneficio fondamentale è l'indipendenza dei dati, sia logica che fisica, che permette di modificare la struttura del database o la sua memorizzazione sul disco senza dover riscrivere le applicazioni che lo utilizzano. La centralizzazione delle informazioni facilita inoltre l'applicazione di politiche di sicurezza e permessi di accesso granulari per i diversi utenti. Infine, la gestione professionale delle transazioni assicura che le operazioni siano eseguite in modo atomico e persistente, preservando la correttezza dell'intera base di dati."
      },
      {
        domanda: "Spiegare l'architettura ANSI/SPARC a tre livelli.",
        risposta: "L'architettura ANSI/SPARC divide la gestione dei dati in tre livelli distinti per garantire l'indipendenza dei dati. Il livello esterno è costituito dalle 'viste', ovvero le porzioni di database visibili ai singoli utenti o applicazioni secondo le loro necessità. Il livello concettuale rappresenta lo schema logico dell'intero database, definendo entità, relazioni e vincoli in modo astratto rispetto all'hardware. Il livello interno (o fisico) descrive come i dati sono effettivamente memorizzati sui supporti fisici, includendo dettagli su indici e strutture di memorizzazione. Questa separazione permette, ad esempio, di cambiare il tipo di disco rigido senza influenzare la logica del programma che interroga il database."
      },
      {
        domanda: "Qual è la differenza tra database relazionale e NoSQL?",
        risposta: "I database relazionali si basano sul modello a tabelle e utilizzano il linguaggio SQL per la manipolazione dei dati, garantendo forti proprietà di consistenza (ACID) e una struttura rigida definita a priori. Al contrario, i database NoSQL sono nati per gestire grandi volumi di dati non strutturati o semi-strutturati, offrendo una maggiore scalabilità orizzontale e flessibilità nello schema. Esistono diversi tipi di NoSQL, come quelli orientati ai documenti (MongoDB), a chiave-valore (Redis) o ai grafi (Neo4j), ciascuno ottimizzato per casi d'uso specifici dove il modello relazionale risulterebbe troppo pesante o limitante. La scelta tra i due dipende dalla natura dei dati, dalla necessità di scalabilità e dal livello di consistenza richiesto dall'applicazione."
      },
      {
        domanda: "Cosa si intende per indipendenza fisica e logica dei dati?",
        risposta: "L'indipendenza dei dati è la capacità di modificare la struttura di una base di dati senza influenzare i livelli superiori. L'indipendenza fisica riguarda la possibilità di cambiare i dettagli della memorizzazione fisica (come cambiare il supporto di memoria o aggiungere indici per migliorare le performance) senza dover alterare lo schema concettuale o logico. L'indipendenza logica, invece, permette di modificare lo schema concettuale (ad esempio aggiungendo nuovi attributi o tabelle) senza che le viste esterne e le applicazioni esistenti debbano essere modificate. Queste proprietà sono essenziali per la manutenzione a lungo termine dei sistemi informativi, riducendo drasticamente i costi di aggiornamento del software."
      }
    ],
    qa: [
      {
        domanda: "Cos'è un DBMS?",
        risposta: "È un sistema software che gestisce l'accesso, la memorizzazione e la manipolazione di dati in un database, garantendo sicurezza, consistenza e accesso concorrente."
      },
      {
        domanda: "Cosa si intende per ridondanza dei dati?",
        risposta: "La presenza degli stessi dati in più posti del sistema. Il DBMS la riduce centralizzando le informazioni, evitando così inconsistenze quando i dati vengono aggiornati."
      },
      {
        domanda: "Qual è la differenza tra schema e istanza?",
        risposta: "Lo schema è la struttura del database (come sono organizzati i dati), definita una volta. L'istanza è il contenuto effettivo del database in un determinato momento, che cambia nel tempo."
      },
      {
        domanda: "Cos'è l'indipendenza fisica dei dati?",
        risposta: "La capacità di modificare come i dati sono memorizzati fisicamente (es. cambiare disco, indici) senza dover modificare il livello logico o le applicazioni che usano il DB."
      },
    ],
    daRicordare: [
      "DBMS = software per gestire database (non è il database stesso)",
      "Architettura ANSI/SPARC: 3 livelli — esterno, concettuale, interno",
      "Vantaggi principali: no ridondanza, concorrenza, sicurezza, backup",
      "DBMS relazionale usa tabelle e SQL; NoSQL usa strutture flessibili",
      "Schema = struttura fissa; Istanza = dati in un momento specifico",
    ],
    daNonDire: [
      "Non confondere il DBMS con il database stesso — il DBMS è il software, il database sono i dati",
      "Non dire che SQL e MySQL sono la stessa cosa — SQL è il linguaggio, MySQL è un DBMS",
      "Non affermare che NoSQL è 'meglio' del relazionale — dipende dal contesto",
      "Non dimenticare di citare il controllo della concorrenza come vantaggio chiave",
    ],
    raccomandazioni: `
Inizia il discorso così: "Il problema alla base dei database nasce dalla necessità di superare
i limiti dei file tradizionali, in particolare ridondanza e inconsistenza..."

Poi collega subito al concetto di DBMS come soluzione.

Puoi citare esempi reali (MySQL, Oracle) per dimostrare familiarità pratica.
Se sei di ITI, menziona che avete usato MySQL a scuola.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 2: Modello Entità-Relazione (ER)
  // ─────────────────────────────────────────
  "modello-er": {
    titolo: "Modello Entità-Relazione (ER)",
    spiegazione: `
Il <strong>modello ER</strong> è uno strumento di progettazione concettuale: permette di
rappresentare la realtà di interesse prima di pensare all'implementazione nel DBMS.

<strong>Componenti principali:</strong>

<strong>Entità:</strong> oggetto del mondo reale di cui vogliamo memorizzare informazioni.
Es: Studente, Corso, Professore
→ Si rappresenta con un rettangolo

<strong>Attributo:</strong> proprietà di un'entità o relazione.
- Attributo semplice (nome, cognome)
- Attributo composto (indirizzo → via, città, CAP)
- Attributo multivalore (numeri di telefono)
- Attributo derivato (età, derivato dalla data di nascita)
- Chiave (attributo che identifica univocamente → sottolineato)
→ Si rappresenta con un'ellisse

<strong>Relazione (Relationship):</strong> associazione tra due o più entità.
Es: Studente SEGUE Corso
→ Si rappresenta con un rombo

<strong>Cardinalità:</strong> quante istanze partecipano alla relazione:
- 1:1 (uno a uno) — ogni studente ha un libretto universitario
- 1:N (uno a molti) — un professore tiene molti corsi
- N:M (molti a molti) — molti studenti seguono molti corsi

<strong>Partecipazione:</strong>
- Totale (obbligatoria): ogni istanza partecipa alla relazione
- Parziale (opzionale): alcune istanze non partecipano

<strong>Entità debole:</strong> entità che non ha chiave propria, dipende da un'entità forte.
Es: Esame dipende da Studente

<strong>Generalizzazione/Specializzazione:</strong>
Relazione IS-A tra entità padre e figlio.
Es: Persona → Studente / Professore
    `,
    domande: [
      {
        domanda: "Cos'è un diagramma ER e a cosa serve?",
        risposta: "Un diagramma Entità-Relazione (ER) è un modello concettuale utilizzato per rappresentare la struttura logica di un database in modo astratto e indipendente dal software specifico. Serve a mappare i requisiti del mondo reale (oggetti e associazioni) in costrutti grafici facilmente comprensibili sia ai progettisti che ai committenti. Attraverso entità, attributi e relazioni, permette di visualizzare come le informazioni sono collegate tra loro prima di procedere alla realizzazione tecnica delle tabelle. È una fase fondamentale del ciclo di vita di un database che previene errori strutturali costosi da correggere in fasi successive."
      },
      {
        domanda: "Quali sono i costrutti fondamentali del modello ER?",
        risposta: "I costrutti fondamentali del modello ER sono le entità, gli attributi e le relazioni. Le entità (rettangoli) rappresentano classi di oggetti della realtà, come 'Dipendente' o 'Dipartimento'. Gli attributi (ellissi) descrivono le proprietà di tali entità, come il 'Nome' o lo 'Stipendio', e includono le chiavi primarie che identificano univocamente ogni istanza. Le relazioni (rombi) definiscono i legami logici tra le entità, come 'LavoraIn'. A questi si aggiungono la cardinalità (1:1, 1:N, N:M) e la partecipazione (totale o parziale), che specificano quantitativamente e qualitativamente come le istanze delle entità interagiscono tra loro."
      },
      {
        domanda: "Spiegare la differenza tra cardinalità 1:N e N:M con esempi.",
        risposta: "La cardinalità indica il numero massimo di istanze di un'entità che possono essere associate a un'istanza dell'altra entità coinvolta nella relazione. In una relazione 1:N (uno a molti), un'istanza dell'entità A può essere legata a molte istanze di B, ma ogni istanza di B è legata a una sola di A; un esempio classico è il rapporto tra 'Classe' e 'Studente' (una classe ha molti studenti, ma ogni studente appartiene a una sola classe). In una relazione N:M (molti a molti), ogni istanza di A può essere legata a molte di B e viceversa; un esempio è il rapporto tra 'Studente' e 'Corso' (uno studente segue molti corsi, e un corso è seguito da molti studenti). Questa distinzione è cruciale perché le relazioni N:M richiedono la creazione di una tabella associativa separata nel passaggio al modello relazionale."
      },
      {
        domanda: "Cos'è un'entità debole? Fare un esempio.",
        risposta: "Un'entità debole è un'entità che non possiede attributi sufficienti a formare una chiave primaria propria e la cui esistenza dipende totalmente da un'altra entità, detta 'forte' o 'identificante'. Per essere identificata, deve utilizzare la chiave primaria dell'entità forte combinata con un proprio attributo parziale (discriminatore). Un esempio tipico è l'entità 'Figlio' rispetto all'entità 'Impiegato' in un database aziendale per l'assicurazione sanitaria: un figlio non può essere registrato senza il genitore dipendente e la sua identità nel sistema è legata a quella del genitore. Graficamente, le entità deboli e le relative relazioni identificanti sono spesso rappresentate con un doppio bordo."
      },
      {
        domanda: "Come si rappresenta la generalizzazione nel modello ER?",
        risposta: "La generalizzazione nel modello ER è un processo che mette in relazione un'entità di livello superiore (padre) con una o più entità di livello inferiore (figlie), evidenziando proprietà comuni e specifiche. Viene rappresentata tramite un triangolo con all'interno la dicitura 'ISA' (is a), collegato all'entità genitore e alle sottoclassi. Le entità figlie ereditano tutti gli attributi e le relazioni dell'entità padre, ma possono avere attributi propri aggiuntivi. Esistono diverse varianti di generalizzazione: totale o parziale (se ogni istanza del padre deve o meno appartenere a una figlia) ed esclusiva o sovrapposta (se un'istanza può appartenere a una sola figlia o a più contemporaneamente)."
      },
      {
        domanda: "Come si passa da un diagramma ER a uno schema relazionale?",
        risposta: "Il passaggio dal diagramma ER allo schema relazionale segue regole precise di derivazione. Ogni entità forte diventa una tabella con gli stessi attributi, dove la chiave primaria ER diventa la chiave primaria della tabella. Le relazioni 1:N si traducono aggiungendo la chiave primaria dell'entità lato 'uno' come chiave esterna nella tabella lato 'molti'. Le relazioni N:M, invece, generano una nuova tabella (tabella di associazione) che contiene le chiavi primarie di entrambe le entità coinvolte come chiavi esterne, formando insieme una chiave primaria composta. Infine, le relazioni 1:1 si gestiscono solitamente accorpando le tabelle o inserendo la chiave esterna in una delle due, a seconda della partecipazione totale o parziale."
      }
    ],
    qa: [
      {
        domanda: "Cos'è un'entità nel modello ER?",
        risposta: "Un'entità rappresenta un oggetto del mondo reale di cui vogliamo conservare informazioni. Es: Studente, Prodotto. Si distingue da un'istanza: l'entità è la classe, l'istanza è il singolo oggetto (es. lo studente Mario Rossi)."
      },
      {
        domanda: "Qual è la differenza tra attributo e chiave?",
        risposta: "Un attributo è una proprietà dell'entità. La chiave è un attributo (o insieme di attributi) che identifica univocamente ogni istanza dell'entità. Nel diagramma ER la chiave è sottolineata."
      },
      {
        domanda: "Come si trasforma una relazione N:M in schema relazionale?",
        risposta: "Una relazione N:M diventa una tabella separata (tabella associativa) che contiene come chiave esterna le chiavi primarie delle due entità coinvolte, più eventuali attributi propri della relazione."
      },
      {
        domanda: "Cos'è un'entità debole?",
        risposta: "Un'entità che non può essere identificata dai suoi soli attributi, ma dipende da un'entità forte. La sua chiave include la chiave dell'entità forte. Es: Riga d'ordine dipende da Ordine."
      },
    ],
    daRicordare: [
      "Entità = rettangolo | Attributo = ellisse | Relazione = rombo",
      "Cardinalità: 1:1, 1:N, N:M — sapere fare examples per ognuna",
      "Chiave primaria = attributo sottolineato nel diagramma ER",
      "Entità debole = non ha chiave propria, dipende da entità forte",
      "N:M → diventa tabella separata nello schema relazionale",
      "Generalizzazione IS-A: eredità degli attributi dall'entità padre",
    ],
    daNonDire: [
      "Non confondere entità e istanza — entità è la classe, istanza è il singolo record",
      "Non dire che la relazione ER è uguale alla tabella relazionale — sono livelli diversi",
      "Non dimenticare la partecipazione (totale/parziale) quando si descrive una relazione",
      "Non chiamare il rombo 'tabella' — è una relazione a livello concettuale",
    ],
    raccomandazioni: `
Inizia sempre con: "Il modello ER si usa nella fase di progettazione concettuale,
prima ancora di pensare al DBMS specifico..."

Porta un esempio concreto che conosci bene (es. database di una scuola o di
un negozio online) e disegnalo mentalmente mentre parli.

Collegamento utile: dopo il modello ER, menziona che si passa alla
ristrutturazione e poi allo schema relazionale.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 3: Modello Relazionale
  // ─────────────────────────────────────────
  "modello-relazionale": {
    titolo: "Modello Relazionale",
    spiegazione: `
Il <strong>modello relazionale</strong> (Codd, 1970) organizza i dati in <strong>relazioni</strong>
(tabelle), dove ogni riga è una tupla e ogni colonna è un attributo.

<strong>Terminologia:</strong>
- Relazione → tabella
- Tupla → riga (record)
- Attributo → colonna
- Dominio → insieme dei valori ammissibili per un attributo
- Schema → struttura della tabella (nome + attributi)
- Istanza → contenuto effettivo della tabella

<strong>Chiavi:</strong>
- <em>Superchiave</em>: insieme di attributi che identifica univocamente ogni tupla
- <em>Chiave candidata</em>: superchiave minimale (non riducibile)
- <em>Chiave primaria (PK)</em>: chiave candidata scelta come identificatore principale → non può essere NULL
- <em>Chiave esterna (FK)</em>: attributo che fa riferimento alla PK di un'altra tabella → crea il legame tra tabelle

<strong>Vincoli di integrità:</strong>
- <em>Vincolo di dominio</em>: il valore deve appartenere al dominio dell'attributo
- <em>Vincolo di integrità dell'entità</em>: la PK non può essere NULL
- <em>Vincolo di integrità referenziale</em>: ogni FK deve corrispondere a una PK esistente (o essere NULL)

<strong>Algebra Relazionale (operazioni fondamentali):</strong>
- Selezione σ: filtra le righe (WHERE)
- Proiezione π: seleziona le colonne (SELECT)
- Prodotto cartesiano ×: combina tutte le righe di due tabelle
- Join ⋈: combina le righe correlate (il più usato)
- Unione ∪, Intersezione ∩, Differenza −
    `,
    domande: [
      {
        domanda: "Cos'è il modello relazionale? Chi lo ha introdotto?",
        risposta: "Il modello relazionale è un modello logico di database che organizza le informazioni in tabelle (chiamate tecnicamente 'relazioni') composte da righe e colonne. È stato introdotto nel 1970 da Edgar F. Codd, un ricercatore IBM, con l'obiettivo di fornire una base matematica solida alla gestione dei dati, superando i limiti dei precedenti modelli gerarchici e reticolari. In questo modello, i dati sono manipolati attraverso operazioni logiche che garantiscono la consistenza e l'indipendenza dei dati. Oggi rappresenta lo standard de facto per la maggior parte dei sistemi di gestione di basi di dati (RDBMS) come MySQL, Oracle e SQL Server."
      },
      {
        domanda: "Qual è la differenza tra chiave primaria e chiave esterna?",
        risposta: "La chiave primaria (PK) è un attributo o insieme di attributi che identifica in modo univoco ogni riga all'interno di una tabella; per definizione, non può contenere valori nulli e non possono esistere due righe con la stessa chiave primaria. La chiave esterna (FK), invece, è un attributo presente in una tabella che fa riferimento alla chiave primaria di un'altra tabella, stabilendo così un legame logico tra di esse. Mentre la chiave primaria serve a garantire l'unicità dei record all'interno della propria tabella, la chiave esterna serve a mantenere l'integrità referenziale tra tabelle correlate. In sintesi, la PK identifica 'chi' è l'oggetto, mentre la FK definisce 'con chi' è collegato."
      },
      {
        domanda: "Spiegare il vincolo di integrità referenziale.",
        risposta: "Il vincolo di integrità referenziale è una regola fondamentale del modello relazionale che assicura che i legami tra tabelle rimangano consistenti e validi nel tempo. Esso stabilisce che ogni valore presente in una chiave esterna (FK) debba necessariamente corrispondere a un valore esistente nella chiave primaria (PK) della tabella a cui fa riferimento, oppure essere nullo (se l'associazione è opzionale). Questo impedisce la creazione di 'record orfani', ovvero riferimenti a dati che non esistono più o non sono mai stati inseriti. Se si tenta di eliminare un record in una tabella primaria a cui fanno riferimento record in altre tabelle, il DBMS interviene bloccando l'operazione o applicando politiche come la cancellazione a cascata, preservando così la correttezza logica del database."
      },
      {
        domanda: "Quali sono le operazioni dell'algebra relazionale?",
        risposta: "L'algebra relazionale è un linguaggio formale che definisce le operazioni fondamentali per interrogare e manipolare i dati nel modello relazionale. Le operazioni principali includono la selezione (σ), che filtra le tuple di una tabella secondo una condizione, e la proiezione (π), che estrae solo determinate colonne. Altre operazioni essenziali sono il join (⋈), che combina tuple correlate di due tabelle diverse, e il prodotto cartesiano (×), che combina ogni riga della prima tabella con ogni riga della seconda. Esistono anche operazioni di insieme come l'unione (∪), l'intersezione (∩) e la differenza (−). Queste operazioni teoriche costituiscono la base su cui è costruito il linguaggio SQL usato nei moderni database."
      },
      {
        domanda: "Cosa si intende per NULL nel modello relazionale?",
        risposta: "Nel modello relazionale, il termine NULL rappresenta un marcatore speciale utilizzato per indicare che il valore di un attributo è mancante, ignoto o non applicabile in quella specifica tupla. È fondamentale comprendere che NULL non equivale a uno zero numerico né a una stringa vuota, ma indica proprio l'assenza di un dato informativo. La presenza di NULL introduce la logica a tre valori (vero, falso, ignoto) nelle espressioni booleane del database. Sebbene sia utile per gestire informazioni parziali, l'uso eccessivo di NULL può complicare le query e le funzioni aggregate; per questo motivo, attributi critici come le chiavi primarie non possono mai assumere il valore NULL."
      }
    ],
    qa: [
      {
        domanda: "Cos'è una chiave primaria?",
        risposta: "È un attributo (o insieme di attributi) che identifica univocamente ogni riga di una tabella. Non può contenere valori NULL e ogni tabella ne ha una sola."
      },
      {
        domanda: "Cos'è una chiave esterna?",
        risposta: "È un attributo in una tabella che fa riferimento alla chiave primaria di un'altra tabella, creando un legame (join) tra le due. Garantisce l'integrità referenziale."
      },
      {
        domanda: "Cosa succede se si elimina una riga riferita da una FK?",
        risposta: "Dipende dal comportamento configurato: CASCADE (elimina anche le righe figlie), SET NULL (mette NULL nella FK), RESTRICT (blocca l'eliminazione). Senza configurazione esplicita, la maggior parte dei DBMS blocca l'operazione."
      },
      {
        domanda: "Cosa fa l'operazione di JOIN?",
        risposta: "Combina le righe di due tabelle in base a una condizione (di solito FK = PK). Il risultato è una nuova tabella con le colonne di entrambe le tabelle originali."
      },
    ],
    daRicordare: [
      "Modello relazionale introdotto da Edgar F. Codd nel 1970",
      "PK: identifica la riga, non NULL, unica per tabella",
      "FK: punta a una PK di un'altra tabella → integrità referenziale",
      "Algebra relazionale: σ (selezione), π (proiezione), ⋈ (join)",
      "Ogni tabella ha uno schema (struttura) e un'istanza (dati)",
    ],
    daNonDire: [
      "Non confondere relazione (tabella) con relationship (associazione ER) — termini simili, cose diverse",
      "Non dire che NULL significa zero o stringa vuota — NULL significa valore sconosciuto/assente",
      "Non dimenticare che la PK non può MAI essere NULL",
    ],
    raccomandazioni: `
Collegamento forte con SQL: ogni operazione dell'algebra relazionale
corrisponde a un costrutto SQL (σ → WHERE, π → SELECT, ⋈ → JOIN).

Se la commissione chiede di SQL, puoi usare questo come ponte naturale.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 4: SQL
  // ─────────────────────────────────────────
  "sql": {
    titolo: "SQL — Structured Query Language",
    spiegazione: `
<strong>SQL</strong> è il linguaggio standard per interagire con i database relazionali.
Si divide in tre sottolinguaggi:

<strong>DDL — Data Definition Language</strong> (definisce la struttura):
<code>CREATE TABLE</code> — crea una tabella
<code>ALTER TABLE</code> — modifica la struttura
<code>DROP TABLE</code> — elimina la tabella

<strong>DML — Data Manipulation Language</strong> (gestisce i dati):
<code>SELECT</code> — legge i dati
<code>INSERT INTO</code> — inserisce nuovi record
<code>UPDATE</code> — modifica record esistenti
<code>DELETE FROM</code> — elimina record

<strong>DCL — Data Control Language</strong> (gestisce permessi):
<code>GRANT</code> — concede permessi
<code>REVOKE</code> — revoca permessi

---

<strong>SELECT — la query più importante:</strong>
SELECT colonne
FROM tabella
WHERE condizione
GROUP BY colonna
HAVING condizione_su_gruppo
ORDER BY colonna ASC/DESC
LIMIT n

<strong>JOIN (tipi principali):</strong>
- INNER JOIN: solo le righe che hanno corrispondenza in entrambe le tabelle
- LEFT JOIN: tutte le righe della tabella sinistra + corrispondenze (NULL se non trovate)
- RIGHT JOIN: tutte le righe della tabella destra + corrispondenze
- FULL OUTER JOIN: tutte le righe di entrambe le tabelle

<strong>Funzioni aggregate:</strong>
COUNT(), SUM(), AVG(), MAX(), MIN()
→ usate con GROUP BY per aggregare per gruppi

<strong>Subquery:</strong>
Query annidate — il risultato di una SELECT usato come condizione di un'altra.

<strong>Vista (VIEW):</strong>
Tabella virtuale definita da una SELECT. Non memorizza dati, li calcola ogni volta.
    `,
    domande: [
      {
        domanda: "Quali sono le tre categorie di istruzioni SQL?",
        risposta: "Le istruzioni SQL si dividono principalmente in tre categorie: DDL, DML e DCL. Il DDL (Data Definition Language) comprende comandi come CREATE, ALTER e DROP, utilizzati per definire, modificare o eliminare la struttura del database (tabelle, indici, vincoli). Il DML (Data Manipulation Language) include istruzioni come SELECT, INSERT, UPDATE e DELETE, che servono per interrogare e manipolare i dati contenuti nelle tabelle. Infine, il DCL (Data Control Language) gestisce la sicurezza e i permessi d'accesso attraverso i comandi GRANT e REVOKE. Conoscere queste distinzioni è fondamentale per gestire correttamente il ciclo di vita di un sistema informativo."
      },
      {
        domanda: "Scrivere una query con JOIN tra due tabelle.",
        risposta: "Una query con JOIN permette di combinare dati provenienti da più tabelle correlate. Ad esempio, per ottenere i nomi degli studenti e i nomi dei corsi che frequentano, la query sarebbe: SELECT Studenti.nome, Corsi.titolo FROM Studenti INNER JOIN Iscrizioni ON Studenti.id = Iscrizioni.id_studente INNER JOIN Corsi ON Iscrizioni.id_corso = Corsi.id. In questo esempio, utilizziamo l'istruzione INNER JOIN per collegare le tabelle attraverso le rispettive chiavi primarie ed esterne. È buona norma utilizzare degli alias per le tabelle per rendere il codice più leggibile e conciso, specialmente in database complessi."
      },
      {
        domanda: "Qual è la differenza tra WHERE e HAVING?",
        risposta: "Sebbene entrambe le clausole servano a filtrare i risultati, esse operano in momenti diversi del processo di esecuzione della query. La clausola WHERE viene applicata alle singole righe della tabella PRIMA che queste vengano raggruppate, e non può contenere funzioni aggregate (come SUM o AVG). La clausola HAVING, invece, viene applicata DOPO l'operazione di raggruppamento (GROUP BY) e serve a filtrare i gruppi stessi in base ai risultati delle funzioni aggregate. Ad esempio, useremo WHERE per selezionare solo i prodotti di una certa categoria, e HAVING per mostrare solo le categorie che hanno un prezzo medio superiore a una certa soglia."
      },
      {
        domanda: "Cos'è una subquery? Fare un esempio.",
        risposta: "Una subquery è una query SELECT annidata all'interno di un'altra istruzione SQL più ampia (SELECT, INSERT, UPDATE o DELETE). Essa viene eseguita per prima e il suo risultato viene passato alla query principale come valore di confronto o come sorgente dati. Un esempio tipico è cercare tutti i prodotti il cui prezzo è superiore alla media: SELECT nome FROM Prodotti WHERE prezzo > (SELECT AVG(prezzo) FROM Prodotti). Le subquery possono essere scalari (ritornano un solo valore), a riga singola o a riga multipla, e sono uno strumento estremamente potente per risolvere problemi complessi di estrazione dati senza dover ricorrere a passaggi intermedi o join eccessivi."
      },
      {
        domanda: "Spiegare la differenza tra INNER JOIN e LEFT JOIN.",
        risposta: "L'INNER JOIN e il LEFT JOIN differiscono nel modo in cui gestiscono le righe che non hanno una corrispondenza nella tabella collegata. L'INNER JOIN restituisce solo le tuple che trovano un riscontro in entrambe le tabelle coinvolte nella condizione di join; se una riga della prima tabella non ha corrispondenze nella seconda, essa viene esclusa dal risultato finale. Il LEFT JOIN (o Left Outer Join), invece, restituisce tutte le righe della tabella a sinistra, indipendentemente dalla presenza di un riscontro: se la corrispondenza esiste, i dati vengono uniti, altrimenti le colonne della tabella destra vengono riempite con valori NULL. Questa distinzione è fondamentale quando si vuole garantire che nessun dato della tabella principale venga perso durante la visualizzazione, come nel caso di un elenco di tutti i clienti, inclusi quelli che non hanno ancora effettuato ordini."
      },
      {
        domanda: "Cos'è una VIEW e quando si usa?",
        risposta: "Una VIEW (o vista) è una tabella virtuale basata sul set di risultati di una query SQL predefinita. A differenza di una tabella fisica, una vista non memorizza dati propriamente detti sul disco rigido, ma ogni volta che viene richiamata esegue la query su cui è costruita per generare i dati aggiornati in tempo reale. Si utilizza per semplificare l'accesso a dati provenienti da join complessi, nascondere la complessità dello schema logico agli utenti finali o per motivi di sicurezza, permettendo l'accesso solo a determinate colonne o righe di una tabella sensibile senza concedere permessi sull'intera struttura. Le viste rappresentano un livello di astrazione fondamentale per garantire l'indipendenza logica dei dati nelle architetture software moderne."
      }
    ],
    qa: [
      {
        domanda: "Qual è la differenza tra WHERE e HAVING?",
        risposta: "WHERE filtra le righe PRIMA del raggruppamento (GROUP BY). HAVING filtra i gruppi DOPO il raggruppamento. Non si può usare una funzione aggregata in WHERE, ma si può in HAVING."
      },
      {
        domanda: "Cosa fa GROUP BY?",
        risposta: "Raggruppa le righe con lo stesso valore in una o più colonne, permettendo di applicare funzioni aggregate (COUNT, SUM, AVG...) a ciascun gruppo."
      },
      {
        domanda: "Differenza tra DELETE e TRUNCATE?",
        risposta: "DELETE rimuove righe specifiche (con WHERE) e può essere annullato con ROLLBACK. TRUNCATE svuota tutta la tabella, è più veloce ma non può essere filtrato né facilmente annullato."
      },
      {
        domanda: "Cos'è una VIEW?",
        risposta: "Una tabella virtuale basata su una SELECT. Non contiene dati propri ma li recupera dalle tabelle reali ogni volta che viene interrogata. Utile per semplificare query complesse e limitare l'accesso ai dati."
      },
    ],
    daRicordare: [
      "DDL: CREATE, ALTER, DROP | DML: SELECT, INSERT, UPDATE, DELETE",
      "Ordine clausole SELECT: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
      "INNER JOIN: solo corrispondenze | LEFT JOIN: tutto il lato sinistro",
      "WHERE = prima del raggruppamento | HAVING = dopo il raggruppamento",
      "Funzioni aggregate: COUNT, SUM, AVG, MAX, MIN",
      "VIEW = tabella virtuale, non memorizza dati",
    ],
    daNonDire: [
      "Non dire che SQL e MySQL sono sinonimi — SQL è il linguaggio, MySQL è un DBMS",
      "Non confondere WHERE e HAVING — errore classico che la commissione nota subito",
      "Non dire che una VIEW memorizza dati — è una query salvata, non una copia",
      "Non scordare AS per gli alias nelle query — la commissione li apprezza",
    ],
    raccomandazioni: `
Preparati a scrivere query alla lavagna. Esercitati su:
1. SELECT con JOIN (almeno INNER e LEFT)
2. GROUP BY + HAVING con funzione aggregata
3. Subquery semplice con IN o EXISTS

Inizia il discorso con: "SQL è il linguaggio dichiarativo standard per i DBMS relazionali,
e si divide in DDL per la struttura e DML per la manipolazione dei dati..."
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 5: Normalizzazione
  // ─────────────────────────────────────────
  "normalizzazione": {
    titolo: "Normalizzazione",
    spiegazione: `
La <strong>normalizzazione</strong> è un processo di progettazione che elimina ridondanze
e anomalie dalle tabelle, organizzando i dati in forme normali progressive.

<strong>Anomalie che la normalizzazione risolve:</strong>
- Anomalia di inserimento: non si può inserire un dato senza altri
- Anomalia di aggiornamento: aggiornare un dato in un posto e non in un altro
- Anomalia di cancellazione: cancellando un record si perdono altre informazioni

<strong>Dipendenza funzionale (DF):</strong>
A → B significa: "il valore di A determina univocamente il valore di B"
Es: CodiceFiscale → Nome, Cognome, DataNascita

<strong>Prima Forma Normale (1NF):</strong>
- Ogni attributo contiene valori atomici (non divisibili)
- Non ci sono gruppi ripetuti
- Ogni riga è identificata da una chiave primaria

<strong>Seconda Forma Normale (2NF):</strong>
- È in 1NF
- Ogni attributo non-chiave dipende dall'INTERA chiave primaria (no dipendenze parziali)
- Si applica solo quando la PK è composta da più attributi

<strong>Terza Forma Normale (3NF):</strong>
- È in 2NF
- Nessun attributo non-chiave dipende transitivamente dalla chiave primaria
- A → B → C: se C dipende da B e B dipende da A, C non dovrebbe stare nella stessa tabella di A

<strong>Forma Normale di Boyce-Codd (BCNF):</strong>
- Versione più forte della 3NF
- Per ogni dipendenza funzionale X → Y, X deve essere una superchiave
    `,
    domande: [
      {
        domanda: "Cos'è la normalizzazione e perché è necessaria?",
        risposta: "La normalizzazione è un procedimento formale di ottimizzazione degli schemi relazionali che mira a eliminare le ridondanze e a prevenire le anomalie di gestione dei dati (inserimento, aggiornamento e cancellazione). È necessaria perché un database non normalizzato costringe l'utente a ripetere inutilmente le stesse informazioni, portando a spreco di spazio e, soprattutto, al rischio di inconsistenze se i dati duplicati non vengono aggiornati ovunque. Attraverso una serie di passaggi detti 'forme normali', i dati vengono scomposti in tabelle correlate più semplici e coerenti. Una corretta normalizzazione garantisce che ogni dato sia memorizzato 'in un solo posto', facilitando la manutenzione e l'integrità del sistema informativo."
      },
      {
        domanda: "Spiegare le tre forme normali principali con esempi.",
        risposta: "Le tre forme normali (1NF, 2NF, 3NF) rappresentano livelli crescenti di qualità del database. La 1NF richiede che tutti gli attributi siano atomici (non divisibili) e che non esistano gruppi ripetuti; ad esempio, un campo 'Telefono' non dovrebbe contenere più numeri separati da virgola. La 2NF si applica alle tabelle con chiave composta e impone che ogni attributo non chiave dipenda dall'intera chiave primaria e non solo da una sua parte; se abbiamo una tabella 'Esami' con PK (StudenteID, CorsoID), il nome dello studente non deve stare lì perché dipende solo da StudenteID. La 3NF richiede che non esistano dipendenze transitive, ovvero che un attributo non chiave dipenda da un altro attributo non chiave; ad esempio, in una tabella 'Ufficio', la città non deve dipendere dal CAP se quest'ultimo è un campo non chiave. Ogni forma normale successiva presuppone il soddisfacimento di quelle precedenti."
      },
      {
        domanda: "Cos'è una dipendenza funzionale?",
        risposta: "Una dipendenza funzionale è un vincolo tra due insiemi di attributi in una relazione. Si dice che un attributo B dipende funzionalmente da A (indicato come A → B) se, in ogni momento, a un determinato valore di A corrisponde esattamente un unico valore di B. Ad esempio, il Codice Fiscale determina univocamente il nome e il cognome di una persona, quindi esiste una dipendenza funzionale tra essi. Queste dipendenze sono il fondamento teorico su cui si basa il processo di normalizzazione, poiché permettono di identificare le ridondanze e decidere come decomporre correttamente le tabelle per isolare le informazioni indipendenti."
      },
      {
        domanda: "Qual è la differenza tra 2NF e 3NF?",
        risposta: "La differenza risiede nel tipo di dipendenza indesiderata che le due forme normali mirano a eliminare. La Seconda Forma Normale (2NF) si occupa delle 'dipendenze parziali', che si verificano quando un attributo dipende solo da una parte della chiave primaria composta; viene risolta spostando tali attributi in una nuova tabella legata alla parte di chiave da cui dipendono. La Terza Forma Normale (3NF), invece, si occupa delle 'dipendenze transitive', ovvero quando un attributo non chiave dipende da un altro attributo non chiave, che a sua volta dipende dalla chiave primaria. In sintesi, la 2NF assicura che tutto dipenda dalla chiave, mentre la 3NF assicura che tutto dipenda 'soltanto' dalla chiave, senza passaggi intermedi."
      },
      {
        domanda: "Cos'è la forma di Boyce-Codd?",
        risposta: "La Forma Normale di Boyce-Codd (BCNF) è una versione più restrittiva e forte della 3NF, creata per gestire casi particolari che la 3NF standard non copre, specialmente quando esistono più chiavi candidate che si sovrappongono. Una tabella è in BCNF se, per ogni dipendenza funzionale non banale X → Y, il determinante X è una superchiave della tabella. In termini più semplici, ciò significa che ogni attributo (anche quelli che fanno parte di una chiave) deve dipendere solo da una chiave completa e mai da attributi che non sono chiavi. Sebbene meno frequente nella pratica comune rispetto alla 3NF, la BCNF è essenziale per eliminare completamente ogni possibile ridondanza logica legata alle dipendenze funzionali."
      }
    ],
    qa: [
      {
        domanda: "Cos'è la 1NF?",
        risposta: "Una tabella è in 1NF se ogni attributo contiene valori atomici (non divisibili), non ci sono gruppi ripetuti e ogni riga ha una chiave primaria che la identifica."
      },
      {
        domanda: "Cos'è una dipendenza parziale?",
        risposta: "Quando un attributo non-chiave dipende solo da PARTE della chiave primaria (composta). La 2NF elimina questo tipo di dipendenza."
      },
      {
        domanda: "Cos'è una dipendenza transitiva?",
        risposta: "Quando un attributo non-chiave dipende da un altro attributo non-chiave (che a sua volta dipende dalla PK). La 3NF elimina questo tipo di dipendenza."
      },
      {
        domanda: "Perché normalizzare troppo può essere un problema?",
        risposta: "La normalizzazione spinta produce molte tabelle piccole, che richiedono più JOIN nelle query → prestazioni peggiori. In pratica si bilancia tra normalizzazione e performance (denormalizzazione controllata)."
      },
    ],
    daRicordare: [
      "1NF: valori atomici, no gruppi ripetuti, chiave primaria definita",
      "2NF: 1NF + no dipendenze parziali (ogni attributo dipende da TUTTA la PK)",
      "3NF: 2NF + no dipendenze transitive (A→B→C non ammesso)",
      "BCNF: ogni determinante deve essere superchiave",
      "Dipendenza funzionale: A → B (A determina B)",
    ],
    daNonDire: [
      "Non dire che la normalizzazione 'migliora sempre le performance' — può rallentare le query per i tanti JOIN necessari",
      "Non confondere dipendenza parziale (2NF) con dipendenza transitiva (3NF)",
      "Non saltare la definizione di dipendenza funzionale — è il fondamento di tutto",
    ],
    raccomandazioni: `
Porta un esempio concreto: tabella Ordini con (IDOrdine, IDCliente, NomeCliente, IDProdotto, NomeProdotto, Quantità).
Mostra passo per passo come portarla in 1NF, 2NF e 3NF decompandola.

Questo esercizio pratico impressiona molto la commissione.
    `,
  },

  // ─────────────────────────────────────────
  // SUBTOPIC 6: Transazioni e ACID
  // ─────────────────────────────────────────
  "transazioni": {
    titolo: "Transazioni e Proprietà ACID",
    spiegazione: `
Una <strong>transazione</strong> è una sequenza di operazioni sul database che viene
trattata come un'unità logica: o va a buon fine tutta, o non viene eseguita per niente.

<strong>Esempio classico — bonifico bancario:</strong>
1. Sottrai 100€ dal conto A
2. Aggiungi 100€ al conto B
→ Se tra il passo 1 e il 2 cade il sistema, senza transazioni il denaro sparisce.
Con la transazione, l'operazione viene annullata completamente (rollback).

<strong>Comandi di controllo transazione (TCL):</strong>
- <code>BEGIN</code> / <code>START TRANSACTION</code>: inizia la transazione
- <code>COMMIT</code>: conferma tutte le operazioni → salvate definitivamente
- <code>ROLLBACK</code>: annulla tutte le operazioni → torna allo stato precedente
- <code>SAVEPOINT</code>: punto intermedio di salvataggio

<strong>Proprietà ACID:</strong>

<em>Atomicità (Atomicity):</em>
La transazione è indivisibile: o tutte le operazioni vanno a buon fine, o nessuna.
Garantita da: ROLLBACK in caso di errore.

<em>Consistenza (Consistency):</em>
La transazione porta il database da uno stato consistente a un altro stato consistente,
rispettando tutti i vincoli di integrità.

<em>Isolamento (Isolation):</em>
Le transazioni concorrenti non si interferiscono. Il risultato è come se fossero eseguite
in sequenza, non in parallelo.
Livelli di isolamento: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE

<em>Durabilità (Durability):</em>
Una volta eseguito il COMMIT, i dati sono permanenti anche in caso di crash del sistema.
Garantita da: log delle transazioni (write-ahead log).

<strong>Problemi di concorrenza senza isolamento:</strong>
- Dirty read: leggere dati non ancora confermati
- Non-repeatable read: la stessa query dà risultati diversi nella stessa transazione
- Phantom read: compaiono nuove righe tra due letture nella stessa transazione
    `,
    domande: [
      {
        domanda: "Cos'è una transazione e perché è importante?",
        risposta: "Una transazione è un'unità logica di lavoro che raggruppa una serie di operazioni elementari sul database (letture e scritture) che devono essere eseguite come se fossero un'unica operazione indivisibile. È fondamentale per garantire che il database non si trovi mai in uno stato parziale o errato a causa di interruzioni improvvise del sistema o errori durante l'esecuzione. Senza il concetto di transazione, operazioni complesse come un trasferimento di denaro tra due conti potrebbero lasciare il database in uno stato inconsistente se il sistema dovesse spegnersi a metà procedura. La gestione delle transazioni permette di riportare il database a uno stato sicuro e noto attraverso il meccanismo del rollback in caso di qualsiasi fallimento."
      },
      {
        domanda: "Spiegare le proprietà ACID.",
        risposta: "Le proprietà ACID (Atomicità, Consistenza, Isolamento e Durabilità) definiscono i requisiti fondamentali che ogni DBMS deve soddisfare per garantire l'affidabilità delle transazioni. L'Atomicità assicura che la transazione sia 'tutto o niente', annullando ogni operazione se anche una sola fallisce. La Consistenza garantisce che ogni transazione porti il database da uno stato valido a un altro, rispettando tutti i vincoli di integrità. L'Isolamento impedisce che transazioni eseguite simultaneamente interferiscano tra loro, agendo come se fossero sequenziali. Infine, la Durabilità assicura che, una volta confermata la transazione con un COMMIT, le modifiche siano permanenti e resistenti anche a futuri crash del sistema grazie all'uso di log di ripristino."
      },
      {
        domanda: "Qual è la differenza tra COMMIT e ROLLBACK?",
        risposta: "COMMIT e ROLLBACK sono i due comandi principali che determinano il destino di una transazione aperta. Il comando COMMIT conferma definitivamente tutte le modifiche apportate durante la transazione, rendendole visibili agli altri utenti e salvandole permanentemente sui supporti di memoria. Al contrario, il comando ROLLBACK annulla tutte le operazioni eseguite dall'inizio della transazione (o dall'ultimo savepoint), riportando i dati esattamente allo stato in cui si trovavano prima dell'inizio delle modifiche. Mentre il COMMIT viene invocato quando tutto è andato a buon fine, il ROLLBACK viene tipicamente utilizzato dai meccanismi di gestione degli errori quando si verifica una condizione che impedisce il completamento corretto della transazione."
      },
      {
        domanda: "Cosa si intende per isolamento delle transazioni?",
        risposta: "L'isolamento è la proprietà che definisce come e quando le modifiche apportate da una transazione diventano visibili alle altre transazioni concorrenti. L'obiettivo è prevenire interferenze distruttive quando più utenti lavorano contemporaneamente sugli stessi dati. Esistono diversi livelli di isolamento (come Read Committed o Serializable) che bilanciano la coerenza dei dati con le prestazioni del sistema: un isolamento più alto garantisce massima correttezza ma può rallentare il database a causa dell'uso esteso di blocchi (lock). Senza un adeguato livello di isolamento, si potrebbero verificare fenomeni come la lettura di dati 'sporchi' (non ancora confermati) o la perdita di aggiornamenti effettuati da altri utenti."
      },
      {
        domanda: "Cosa sono i problemi di concorrenza (dirty read, ecc.)?",
        risposta: "I problemi di concorrenza sono anomalie che si verificano quando due o più transazioni accedono simultaneamente agli stessi dati senza un adeguato isolamento. Il 'Dirty Read' accade quando una transazione legge dati modificati da un'altra non ancora confermata; se questa fa rollback, i dati letti sono falsi. Il 'Non-Repeatable Read' si verifica quando, rileggendo lo stesso dato nella stessa transazione, il valore risulta cambiato perché un'altra transazione ha fatto commit nel frattempo. Il 'Phantom Read' avviene quando compaiono nuove righe che soddisfano una condizione di ricerca tra due letture successive. Gestire correttamente questi problemi tramite protocolli di lock o multiversioning è uno dei compiti più complessi e vitali di un DBMS moderno."
      }
    ],
    qa: [
      {
        domanda: "Cosa significa Atomicità?",
        risposta: "Una transazione è atomica: o tutte le sue operazioni vengono eseguite con successo, oppure, in caso di errore, vengono annullate tutte tramite ROLLBACK. Non è possibile uno stato intermedio parziale."
      },
      {
        domanda: "Cosa garantisce la Durabilità?",
        risposta: "Che una volta effettuato il COMMIT, i dati rimangono salvati anche in caso di crash del sistema. Il DBMS usa un log delle transazioni (WAL - Write-Ahead Log) per garantire il ripristino."
      },
      {
        domanda: "Cos'è un dirty read?",
        risposta: "Si verifica quando una transazione legge dati modificati da un'altra transazione non ancora confermata (COMMIT). Se quella transazione fa ROLLBACK, i dati letti erano 'sporchi' e non validi."
      },
      {
        domanda: "Perché l'isolamento è importante?",
        risposta: "Perché in un sistema reale molti utenti accedono al database contemporaneamente. Senza isolamento, le transazioni concorrenti potrebbero interferire, producendo dati inconsistenti o errati."
      },
    ],
    daRicordare: [
      "ACID: Atomicità, Consistenza, Isolamento, Durabilità",
      "COMMIT = salva definitivamente | ROLLBACK = annulla tutto",
      "Esempio chiave: bonifico bancario (spiega ACID perfettamente)",
      "Dirty read = leggere dati non confermati di un'altra transazione",
      "WAL (Write-Ahead Log) garantisce la durabilità dopo un crash",
    ],
    daNonDire: [
      "Non dire che ACID è solo per i database bancari — vale per qualsiasi sistema che richiede integrità",
      "Non confondere ROLLBACK con DELETE — ROLLBACK annulla le operazioni non confermate, DELETE rimuove dati",
      "Non dimenticare di spiegare perché ogni proprietà è necessaria con un esempio",
    ],
    raccomandazioni: `
L'esempio del bonifico bancario è FONDAMENTALE — usalo sempre per spiegare le proprietà ACID.
È concreto, comprensibile e dimostra che hai capito il concetto, non solo memorizzato la sigla.

Struttura ideale della risposta:
1. Definisci transazione
2. Porta l'esempio del bonifico
3. Spiega ACID una per una, collegando ogni lettera all'esempio
4. Menziona COMMIT e ROLLBACK
    `,
  },

};
