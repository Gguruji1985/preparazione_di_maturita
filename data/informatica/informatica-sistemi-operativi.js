// data/informatica/informatica-sistemi-operativi.js
var TOPIC_SISTEMI_OPERATIVI = {

  "processi": {
    titolo: "Processi e Thread",
    spiegazione: `
Un <strong>processo</strong> è un programma in esecuzione. Include il codice, i dati, lo stack e le risorse allocate dal sistema operativo.

<strong>Stati di un processo:</strong>
- <em>Nuovo</em>: il processo è stato creato
- <em>Pronto</em>: aspetta di essere assegnato alla CPU
- <em>In esecuzione</em>: la CPU sta eseguendo le sue istruzioni
- <em>In attesa (bloccato)</em>: aspetta un evento (I/O, lock)
- <em>Terminato</em>: ha finito l'esecuzione

<strong>PCB (Process Control Block):</strong> struttura dati che il SO mantiene per ogni processo. Contiene: PID, stato, program counter, registri CPU, priorità, risorse.

<strong>Thread:</strong> unità di esecuzione all'interno di un processo. Più thread dello stesso processo condividono memoria e risorse, ma hanno stack e registri propri.

<strong>Vantaggi dei thread rispetto ai processi:</strong>
- Creazione più veloce (meno overhead)
- Comunicazione più semplice (memoria condivisa)
- Cambio di contesto più leggero

<strong>Problemi dei thread (concorrenza):</strong>
- Race condition: più thread accedono e modificano la stessa risorsa contemporaneamente → risultato imprevedibile
- Necessità di sincronizzazione (mutex, semafori)

<strong>Multithreading:</strong> esecuzione di più thread in parallelo (su CPU multi-core) o in pseudo-parallelo (su CPU singola con time-slicing).
    `,
    domande: [
      "Cos'è un processo? Quali stati può avere?",
      "Differenza tra processo e thread.",
      "Cos'è il PCB?",
      "Cosa si intende per race condition?",
    ],
    qa: [
      { domanda: "Differenza tra processo e thread?", risposta: "Un processo è un programma in esecuzione con il proprio spazio di memoria isolato. Un thread è un'unità di esecuzione dentro un processo — più thread condividono la stessa memoria del processo padre. I thread sono più leggeri ma richiedono sincronizzazione per evitare race condition." },
      { domanda: "Cos'è una race condition?", risposta: "Avviene quando due o più thread accedono alla stessa risorsa condivisa e il risultato dipende dall'ordine di esecuzione. Es: due thread che leggono e incrementano lo stesso contatore possono perdere degli incrementi se non sincronizzati." },
    ],
    daRicordare: [
      "5 stati del processo: Nuovo, Pronto, In esecuzione, Bloccato, Terminato",
      "PCB: struttura dati del SO per gestire ogni processo",
      "Thread: condivide memoria del processo, ha stack proprio",
      "Race condition: accesso concorrente non sincronizzato → risultato imprevedibile",
    ],
    daNonDire: [
      "Non confondere processo con programma — il programma è statico (file), il processo è dinamico (in esecuzione)",
      "Non dire che i thread sono indipendenti — condividono memoria e possono interferire",
    ],
    raccomandazioni: "Collega subito ai semafori e mutex quando parli di thread — mostra che conosci anche la soluzione ai problemi di concorrenza.",
  },

  "scheduling": {
    titolo: "Scheduling",
    spiegazione: `
Lo <strong>scheduling</strong> decide quale processo/thread assegnare alla CPU e per quanto tempo.

<strong>Tipi di scheduler:</strong>
- <em>Long-term</em>: decide quali processi ammettere in memoria
- <em>Short-term (CPU scheduler)</em>: decide quale processo pronto eseguire prossimo
- <em>Medium-term</em>: decide quali processi sospendere (swap out) per liberare memoria

<strong>Criteri di valutazione:</strong>
- Utilizzo CPU: massimizzare
- Throughput: massimizzare (processi completati per unità di tempo)
- Turnaround time: minimizzare (tempo dall'arrivo al completamento)
- Waiting time: minimizzare
- Response time: minimizzare (importante nei sistemi interattivi)

<strong>Algoritmi di scheduling:</strong>

<em>FCFS (First Come First Served):</em> non preemptive, semplice. Problema: convoy effect (processi lunghi bloccano quelli corti).

<em>SJF (Shortest Job First):</em> esegue il processo con burst time minore. Ottimale per waiting time ma richiede conoscere i burst time.

<em>Round Robin:</em> ogni processo riceve un quantum di tempo fisso, poi va in fondo alla coda. Adatto ai sistemi time-sharing. Scegliere il quantum è critico.

<em>Priority Scheduling:</em> ogni processo ha una priorità; esegue il più prioritario. Problema: starvation (processi a bassa priorità non eseguiti mai). Soluzione: aging (la priorità aumenta con il tempo di attesa).

<em>Multilevel Queue:</em> code separate per tipi diversi di processi (interattivi, batch, sistema).
    `,
    domande: [
      "Cos'è lo scheduling della CPU?",
      "Descrivere gli algoritmi FCFS, SJF e Round Robin.",
      "Cosa si intende per starvation? Come si risolve?",
      "Cos'è il quantum nel Round Robin?",
    ],
    qa: [
      { domanda: "Cos'è il Round Robin?", risposta: "Ogni processo riceve un intervallo di tempo fisso (quantum) per eseguire. Alla scadenza, se non ha finito, viene messo in fondo alla coda ready. Equo e adatto a sistemi interattivi. Un quantum troppo piccolo → troppi context switch; troppo grande → degenera in FCFS." },
      { domanda: "Cos'è la starvation e come si risolve?", risposta: "La starvation avviene quando un processo a bassa priorità non viene mai eseguito perché arrivano continuamente processi a priorità più alta. Si risolve con l'aging: la priorità del processo aumenta gradualmente col tempo di attesa, garantendo che prima o poi venga eseguito." },
    ],
    daRicordare: [
      "FCFS: semplice, non preemptive, convoy effect",
      "SJF: minimizza waiting time, richiede burst time noti",
      "Round Robin: quantum fisso, equo, ottimo per time-sharing",
      "Priority: starvation → risolto con aging",
    ],
    daNonDire: ["Non dire che SJF è sempre il migliore — richiede di conoscere in anticipo il burst time, impossibile in pratica"],
    raccomandazioni: "Fai un esempio di Gantt chart per Round Robin con 3 processi e quantum=2 — è il tipo di esercizio che la commissione può chiedere.",
  },

  "memoria": {
    titolo: "Gestione della Memoria",
    spiegazione: `
Il SO gestisce la memoria principale (RAM) per allocarla ai processi in modo efficiente.

<strong>Problemi principali:</strong>
- Frammentazione interna: spazio allocato ma non usato dentro un blocco
- Frammentazione esterna: spazio totale disponibile ma in blocchi non contigui

<strong>Tecniche di gestione:</strong>

<em>Paginazione:</em>
La memoria fisica è divisa in frame di dimensione fissa.
La memoria logica di ogni processo è divisa in pagine della stessa dimensione.
Una page table mappa pagine → frame.
Elimina la frammentazione esterna; può avere frammentazione interna (ultima pagina parzialmente usata).

<em>Segmentazione:</em>
La memoria logica è divisa in segmenti di dimensione variabile (codice, stack, dati...).
Più vicina alla visione del programmatore ma può creare frammentazione esterna.

<em>Memoria virtuale:</em>
Permette a un processo di usare più memoria di quella fisicamente disponibile.
Le pagine non usate vengono spostate su disco (swap).
<strong>Page fault</strong>: si accede a una pagina non in RAM → il SO la carica dal disco.
<strong>Thrashing</strong>: troppi page fault rallentano il sistema perché si passa più tempo a swappare che a elaborare.
    `,
    domande: [
      "Differenza tra paginazione e segmentazione.",
      "Cos'è la memoria virtuale?",
      "Cosa si intende per page fault?",
      "Cos'è il thrashing?",
    ],
    qa: [
      { domanda: "Cos'è la paginazione?", risposta: "Tecnica che divide la memoria fisica in frame di dimensione fissa e la memoria logica del processo in pagine della stessa dimensione. Una page table mappa ogni pagina al frame corrispondente. Elimina la frammentazione esterna perché le pagine non devono essere contigue." },
      { domanda: "Cos'è il thrashing?", risposta: "Avviene quando un processo (o il sistema) passa più tempo a gestire page fault che a eseguire istruzioni utili. Le pagine vengono continuamente caricate e scaricate dal disco. Causa: troppa multiprogrammazione o working set troppo grande rispetto alla RAM disponibile." },
    ],
    daRicordare: [
      "Paginazione: frame fissi, page table, no frammentazione esterna",
      "Segmentazione: segmenti variabili, più naturale, frammentazione esterna",
      "Memoria virtuale: usa disco come estensione della RAM",
      "Page fault: pagina non in RAM → caricamento dal disco",
      "Thrashing: troppi page fault → sistema si blocca",
    ],
    daNonDire: ["Non confondere paginazione (hardware-oriented) con memoria virtuale (concetto più ampio che la usa)"],
    raccomandazioni: "Collega la memoria virtuale a esempi pratici: aprire molte schede nel browser può causare swap su macchine con poca RAM.",
  },

  "filesystem": {
    titolo: "File System",
    spiegazione: `
Il <strong>file system</strong> gestisce come i dati sono organizzati, memorizzati e recuperati sul disco.

<strong>Struttura logica:</strong>
- File: unità base di memorizzazione con nome e attributi (dimensione, data, permessi)
- Directory: contenitore gerarchico di file e sottodirectory
- Percorso assoluto vs relativo

<strong>Struttura fisica:</strong>
Il disco è diviso in blocchi. Il file system mappa i file ai blocchi fisici.
Metodi di allocazione:
- <em>Contigua</em>: file in blocchi adiacenti. Accesso rapido ma frammentazione.
- <em>Collegata</em>: blocchi collegati da puntatori. No frammentazione esterna, ma accesso lento.
- <em>Indicizzata</em>: un blocco indice punta a tutti i blocchi del file. Buon compromesso (usato in UNIX con inode).

<strong>Permessi (Unix):</strong>
r (read), w (write), x (execute) × 3 categorie: proprietario, gruppo, altri.
Es: rwxr-xr-- = 754

<strong>File system comuni:</strong>
- FAT32: semplice, compatibile, limite 4GB per file
- NTFS: Windows, permessi avanzati, journaling
- ext4: Linux, efficiente, journaling
- APFS: macOS

<strong>Journaling:</strong> log delle operazioni prima di eseguirle → permette recupero dopo crash.
    `,
    domande: [
      "Cos'è un file system?",
      "Descrivere i metodi di allocazione dei file su disco.",
      "Come funzionano i permessi Unix?",
      "Cos'è il journaling?",
    ],
    qa: [
      { domanda: "Cos'è l'inode in Unix?", risposta: "L'inode è una struttura dati che contiene tutti i metadati di un file (permessi, proprietario, dimensione, timestamp, puntatori ai blocchi dati) tranne il nome. Il nome è memorizzato nella directory. Ogni file ha un inode univoco." },
      { domanda: "Cos'è il journaling?", risposta: "Prima di modificare il file system, il SO scrive le operazioni pianificate in un log (journal). Se il sistema crasha durante l'operazione, al riavvio il SO può completare o annullare l'operazione usando il log, evitando corruzione dei dati." },
    ],
    daRicordare: [
      "Inode (Unix): metadati + puntatori ai blocchi, non il nome",
      "Permessi Unix: rwx per proprietario/gruppo/altri",
      "Allocazione indicizzata: usata in pratica (inode)",
      "Journaling: log preventivo → recupero dopo crash",
      "FAT32: limite 4GB | NTFS: Windows | ext4: Linux",
    ],
    daNonDire: ["Non confondere file system logico (struttura directory) con file system fisico (come i blocchi sono allocati)"],
    raccomandazioni: "I permessi Unix appaiono spesso. Esercitati a leggere e scrivere permessi in notazione ottale (chmod 755).",
  },

  "deadlock": {
    titolo: "Deadlock",
    spiegazione: `
Il <strong>deadlock</strong> (stallo) avviene quando due o più processi si bloccano reciprocamente aspettando risorse che l'altro detiene, in modo circolare.

<strong>Esempio classico:</strong>
- Processo A tiene la risorsa 1, aspetta la risorsa 2
- Processo B tiene la risorsa 2, aspetta la risorsa 1
→ Stallo permanente

<strong>Le 4 condizioni necessarie di Coffman:</strong>
Devono verificarsi TUTTE e 4 contemporaneamente:
1. <em>Mutua esclusione</em>: le risorse sono usate da un solo processo alla volta
2. <em>Hold and Wait</em>: un processo che tiene una risorsa aspetta altre risorse
3. <em>No preemption</em>: le risorse non possono essere tolte forzatamente
4. <em>Attesa circolare</em>: esiste un ciclo di processi che si aspettano a vicenda

<strong>Strategie:</strong>

<em>Prevenzione:</em> eliminare almeno una delle 4 condizioni di Coffman.

<em>Avoidance (Banker's Algorithm):</em> prima di allocare una risorsa, verifica che il sistema rimanga in uno stato sicuro.

<em>Detection & Recovery:</em> rileva quando si verifica un deadlock (grafo di allocazione risorse) e lo risolve (termina processi, revoca risorse).

<em>Ignorare (Ostrich Algorithm):</em> usato nella pratica (Windows, Linux) per i deadlock rari — si riavvia il processo.
    `,
    domande: [
      "Cos'è un deadlock? Fai un esempio.",
      "Quali sono le 4 condizioni di Coffman?",
      "Come si può prevenire un deadlock?",
      "Cos'è il Banker's Algorithm?",
    ],
    qa: [
      { domanda: "Come si previene il deadlock eliminando l'attesa circolare?", risposta: "Si impone un ordinamento totale delle risorse e si obbligano tutti i processi a richiedere le risorse sempre nello stesso ordine. Se tutti seguono lo stesso ordine di acquisizione, non può formarsi un ciclo." },
      { domanda: "Cos'è il Banker's Algorithm?", risposta: "Un algoritmo di deadlock avoidance proposto da Dijkstra. Prima di assegnare una risorsa, simula l'allocazione e verifica se il sistema resta in uno stato 'sicuro' (esiste una sequenza di completamento per tutti i processi). Se non sicuro, l'allocazione viene rimandataata." },
    ],
    daRicordare: [
      "4 condizioni Coffman: Mutua esclusione, Hold & Wait, No preemption, Attesa circolare",
      "Devono verificarsi TUTTE e 4 — eliminarne una = nessun deadlock",
      "Banker's Algorithm: verifica stato sicuro prima di allocare",
      "In pratica: spesso si ignora (Ostrich) o si rileva e risolve",
    ],
    daNonDire: [
      "Non confondere deadlock con starvation — starvation un processo aspetta molto ma non è bloccato in ciclo",
      "Non dire che eliminare la mutua esclusione è sempre praticabile — alcune risorse per natura non sono condivisibili",
    ],
    raccomandazioni: "L'esempio filosofi a cena (Dijkstra) è perfetto per spiegare deadlock in modo visivo e memorabile. Usalo.",
  },

};
