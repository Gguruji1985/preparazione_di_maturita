// data/informatica/tpsit-concorrenza.js
var TOPIC_CONCORRENZA = {

  "processi-thread": {
    titolo: "Processi e Thread",
    spiegazione: `
La <strong>programmazione concorrente</strong> permette a più attività di procedere apparentemente o realmente in parallelo, migliorando le prestazioni e la reattività dei sistemi.

<strong>Processo:</strong>
Istanza di un programma in esecuzione. Ha il proprio spazio di memoria, file aperti, PID.
I processi sono <em>isolati</em>: un crash non influenza gli altri.
Comunicazione tra processi (IPC): pipe, socket, memoria condivisa, messaggi.

<strong>Thread:</strong>
<em>Unità di esecuzione</em> all'interno di un processo. Condivide memoria e risorse con gli altri thread dello stesso processo.
Più leggero del processo (meno overhead per creazione/switch).
Problema: accesso concorrente alla memoria condivisa → <em>race condition</em>.

<strong>Multitasking:</strong>
- <em>Cooperativo</em>: ogni processo/thread cede volontariamente la CPU
- <em>Preemptivo</em>: lo scheduler interrompe forzatamente il processo (usato nei SO moderni)

<strong>Parallelismo vs Concorrenza:</strong>
- <em>Concorrenza</em>: più task attivi contemporaneamente, non necessariamente in esecuzione simultanea (un core, scheduling a rotazione)
- <em>Parallelismo</em>: più task eseguiti simultaneamente su più core/CPU

<strong>Race condition:</strong>
Si verifica quando due o più thread accedono agli stessi dati condivisi e il risultato dipende dall'ordine di esecuzione.
Esempio: due thread leggono e incrementano un contatore → possono perdere un aggiornamento.
Soluzione: <em>sincronizzazione</em> (mutex, semafori, monitor).

<strong>Sezione critica:</strong>
Porzione di codice che accede a risorse condivise. Solo un thread alla volta deve eseguirla.
Condizioni di Dijkstra: mutua esclusione, progresso, attesa limitata.
    `,
    domande: [
      "Differenza tra processo e thread.",
      "Cos'è una race condition e come si evita?",
      "Differenza tra parallelismo e concorrenza.",
      "Cos'è la sezione critica e quali proprietà deve rispettare?",
      "Come comunicano i processi tra loro?",
    ],
    qa: [
      { domanda: "Differenza tra processo e thread?", risposta: "Un processo è un programma in esecuzione con la propria memoria isolata. Un thread è un'unità di esecuzione dentro un processo — condivide la memoria del processo con gli altri thread. I thread sono più leggeri (meno overhead) ma più vulnerabili a race condition." },
      { domanda: "Cos'è una race condition?", risposta: "Una situazione in cui il risultato di un'operazione dipende dall'ordine casuale con cui thread concorrenti accedono a dati condivisi. Produce comportamenti imprevedibili e bug difficili da riprodurre. Si risolve con meccanismi di sincronizzazione (mutex, semafori)." },
      { domanda: "Cos'è la sezione critica?", risposta: "La porzione di codice che accede a risorse condivise e che deve essere eseguita da un solo thread alla volta. Per proteggerla correttamente deve garantire: mutua esclusione (un thread alla volta), progresso (non blocco indefinito), attesa limitata (ogni thread entra prima o poi)." },
    ],
    daRicordare: [
      "Processo = isolato, memoria propria. Thread = condivide memoria del processo",
      "Race condition = risultato dipende dall'ordine di esecuzione → imprevedibile",
      "Sezione critica: mutua esclusione + progresso + attesa limitata",
      "Concorrenza = alternanza. Parallelismo = simultaneità su più core",
      "Thread più leggeri dei processi ma più rischiosi per la memoria condivisa",
    ],
    daNonDire: [
      "Non dire che concorrenza e parallelismo sono la stessa cosa",
      "Non dire che i thread hanno memoria isolata — condividono quella del processo",
    ],
    raccomandazioni: `La distinzione processo/thread e il concetto di race condition sono fondamentali in TPSIT.
Porta sempre un esempio concreto di race condition (contatore incrementato da due thread).
Collega la sezione critica alla sincronizzazione nel subtopic successivo.`,
  },

  "sincronizzazione": {
    titolo: "Sincronizzazione e Semafori",
    spiegazione: `
La <strong>sincronizzazione</strong> coordina l'accesso alle risorse condivise tra thread/processi concorrenti per evitare race condition.

<strong>Mutex (Mutual Exclusion lock):</strong>
Il meccanismo più semplice: un lock che solo un thread alla volta può acquisire.
- <em>lock()</em>: acquisisce il mutex (blocca se già acquisito)
- <em>unlock()</em>: rilascia il mutex
Solo il thread che ha acquisito il mutex può rilasciarlo.

<strong>Semaforo (Dijkstra):</strong>
Variabile intera con due operazioni atomiche:
- <em>wait(S)</em> / P(S): decrementa S; se S < 0, il thread si blocca
- <em>signal(S)</em> / V(S): incrementa S; se ci sono thread in attesa, ne sveglia uno

Tipi:
- <em>Semaforo binario</em> (0 o 1): equivalente al mutex
- <em>Semaforo contatore</em>: gestisce accesso a N istanze di una risorsa

<strong>Monitor:</strong>
Struttura di alto livello che incapsula dati condivisi e le operazioni su di essi.
Garantisce mutua esclusione automaticamente. Usato in Java (<code>synchronized</code>).

<strong>Deadlock:</strong>
Situazione in cui due o più thread si bloccano aspettando risorse tenute dagli altri → nessuno procede mai.

Condizioni di Coffman (necessarie e sufficienti):
1. <em>Mutua esclusione</em>: le risorse non sono condivisibili
2. <em>Hold and wait</em>: un thread tiene una risorsa e aspetta un'altra
3. <em>No preemption</em>: le risorse non possono essere forzatamente tolte
4. <em>Attesa circolare</em>: ciclo di thread che si aspettano a vicenda

<strong>Gestione deadlock:</strong>
- <em>Prevenzione</em>: eliminare una delle 4 condizioni di Coffman
- <em>Rilevamento e ripristino</em>: rilevare il deadlock e terminare processi
- <em>Algoritmo del banchiere</em> (Dijkstra): evita il deadlock allocando risorse solo in stati sicuri

<strong>Starvation:</strong>
Un thread non ottiene mai la risorsa perché altri hanno sempre priorità maggiore.
Soluzione: aging (aumentare progressivamente la priorità di chi aspetta).
    `,
    domande: [
      "Cos'è un semaforo e come funziona?",
      "Differenza tra mutex e semaforo.",
      "Descrivere il deadlock e le condizioni di Coffman.",
      "Come si previene un deadlock?",
      "Cos'è lo starvation e come si risolve?",
    ],
    qa: [
      { domanda: "Cos'è un semaforo?", risposta: "Una variabile intera con due operazioni atomiche: wait (P) che decrementa e blocca il thread se il valore è negativo, e signal (V) che incrementa e risveglia un thread in attesa. Usato per sincronizzare l'accesso a risorse condivise." },
      { domanda: "Cos'è il deadlock?", risposta: "Una situazione in cui due o più thread sono bloccati permanentemente, ognuno in attesa di una risorsa tenuta dall'altro. Si verifica quando si verificano contemporaneamente le 4 condizioni di Coffman: mutua esclusione, hold&wait, no preemption, attesa circolare." },
      { domanda: "Differenza tra deadlock e starvation?", risposta: "Nel deadlock tutti i thread coinvolti sono bloccati per sempre — nessuno avanza. Nella starvation un thread continua ad aspettare indefinitamente perché altri hanno sempre priorità maggiore, ma gli altri thread avanzano. La starvation si risolve con aging." },
      { domanda: "Cos'è l'algoritmo del banchiere?", risposta: "Algoritmo di Dijkstra per evitare il deadlock: prima di allocare risorse, verifica se lo stato risultante è 'sicuro' (esiste una sequenza in cui tutti i processi possono completare). Se lo stato non è sicuro, il processo viene messo in attesa." },
    ],
    daRicordare: [
      "Mutex = lock binario. Semaforo = contatore con wait/signal",
      "4 condizioni di Coffman: mutua esclusione, hold&wait, no preemption, attesa circolare",
      "Basta eliminare UNA delle 4 condizioni per prevenire il deadlock",
      "Starvation ≠ deadlock: nella starvation gli altri avanzano, nel deadlock nessuno avanza",
      "Monitor = mutex automatico (Java: synchronized)",
      "Algoritmo del banchiere: alloca solo se lo stato rimane sicuro",
    ],
    daNonDire: [
      "Non confondere deadlock (tutti bloccati) con starvation (uno solo bloccato, altri avanzano)",
      "Non dire che il semaforo binario e il mutex sono sempre intercambiabili — il mutex ha ownership",
    ],
    raccomandazioni: `Le 4 condizioni di Coffman sono quasi sempre chieste — memorizzale tutte e quattro.
Spiega il deadlock con un esempio concreto: Thread A tiene R1 e aspetta R2; Thread B tiene R2 e aspetta R1.
L'algoritmo del banchiere è un ottimo approfondimento che fa bella figura.`,
  },

  "modelli-concorrenti": {
    titolo: "Modelli di Programmazione Concorrente",
    spiegazione: `
Esistono diversi <strong>modelli</strong> per strutturare programmi concorrenti, ognuno con pro e contro.

<strong>Modello a thread condivisi:</strong>
Thread dello stesso processo condividono memoria. Comunicazione tramite variabili condivise.
Veloce ma pericoloso (race condition) → richiede sincronizzazione esplicita.
Usato in: Java (Thread, synchronized), C (pthreads), Python (threading).

<strong>Modello a messaggi (Message Passing):</strong>
I processi/thread comunicano scambiando messaggi espliciti — nessuna memoria condivisa.
Più sicuro: niente race condition per definizione.
- <em>Sincrono</em>: il mittente aspetta che il destinatario riceva
- <em>Asincrono</em>: il mittente continua senza aspettare (message queue)
Usato in: sistemi distribuiti, MPI, Erlang, Go (goroutine + channel), actor model.

<strong>Problemi classici di sincronizzazione:</strong>

<em>Produttore-Consumatore:</em>
Un thread produce dati, un altro li consuma da un buffer condiviso.
Buffer pieno → produttore aspetta. Buffer vuoto → consumatore aspetta.
Soluzione: 2 semafori (empty, full) + mutex.

<em>Lettori-Scrittori:</em>
Più lettori possono leggere contemporaneamente; uno scrittore ha accesso esclusivo.
Problema: dare priorità ai lettori o agli scrittori? Rischio starvation.

<em>Filosofi a cena (Dining Philosophers):</em>
5 filosofi che mangiano e pensano, condividendo 5 bacchette.
Illustra il deadlock: tutti prendono la bacchetta sinistra e aspettano la destra → ciclo.
Soluzioni: gerarchia delle risorse, asimmetria, semaforo per numero di filosofi.

<strong>Programmazione asincrona moderna:</strong>
Alternativa ai thread: event loop + callback/Promise/async-await.
Un solo thread gestisce molte operazioni I/O concorrenti senza bloccarsi.
Usato in: Node.js, Python asyncio, JavaScript browser.
    `,
    domande: [
      "Differenza tra comunicazione tramite memoria condivisa e message passing.",
      "Descrivere il problema Produttore-Consumatore.",
      "Descrivere il problema dei Filosofi a cena.",
      "Cos'è la programmazione asincrona e quando si preferisce ai thread?",
    ],
    qa: [
      { domanda: "Cos'è il problema Produttore-Consumatore?", risposta: "Un produttore genera elementi e li inserisce in un buffer; un consumatore li preleva. Il problema è sincronizzare: il produttore non deve inserire se il buffer è pieno; il consumatore non deve prelevare se è vuoto. Si risolve con due semafori (full/empty) e un mutex per il buffer." },
      { domanda: "Cos'è il message passing?", risposta: "Modello di comunicazione tra processi in cui non c'è memoria condivisa: i processi si scambiano messaggi espliciti (send/receive). Elimina le race condition per definizione ma introduce overhead di comunicazione. È il modello usato nei sistemi distribuiti e nel linguaggio Go." },
      { domanda: "Quando usare async invece dei thread?", risposta: "L'approccio asincrono (event loop) è ideale per operazioni I/O bound (rete, disco) dove il thread passerebbe la maggior parte del tempo ad aspettare. Con async un solo thread gestisce migliaia di connessioni concorrenti. I thread sono meglio per operazioni CPU bound che richiedono vero parallelismo." },
    ],
    daRicordare: [
      "Memoria condivisa = veloce ma rischiosa (race condition). Message passing = sicuro ma con overhead",
      "Produttore-Consumatore: semafori full + empty + mutex",
      "Filosofi a cena = illustrazione classica del deadlock",
      "Async/event loop = ideale per I/O bound. Thread = ideale per CPU bound",
      "Node.js usa event loop asincrono — un thread gestisce molte connessioni",
    ],
    daNonDire: [
      "Non dire che l'async elimina la concorrenza — la gestisce diversamente",
      "Non confondere concorrenza I/O-bound con parallelismo CPU-bound",
    ],
    raccomandazioni: `Il problema Produttore-Consumatore è il classico esercizio di TPSIT — descrivi la soluzione con semafori.
I Filosofi a cena sono utili per illustrare il deadlock in modo intuitivo.
Cita Node.js come esempio di programmazione asincrona per mostrare conoscenza applicata.`,
  },

};
