// data/informatica/sistemi-reti-architetture.js
var TOPIC_ARCHITETTURE = {

  "architettura-computer": {
    titolo: "Architettura del Computer",
    spiegazione: `
L'<strong>architettura di un computer</strong> descrive la struttura hardware e come i componenti interagiscono.

<strong>Modello di Von Neumann (1945):</strong>
La base di tutti i computer moderni. Prevede:
- <em>CPU (Central Processing Unit)</em>: elabora le istruzioni
- <em>Memoria principale (RAM)</em>: contiene programmi e dati in esecuzione
- <em>Bus di sistema</em>: collegamento tra componenti (dati, indirizzi, controllo)
- <em>Unità I/O</em>: interazione con il mondo esterno
- <em>Programma memorizzato</em>: le istruzioni sono in memoria come i dati

<strong>CPU — componenti interni:</strong>
- <em>ALU (Arithmetic Logic Unit)</em>: esegue operazioni aritmetiche e logiche
- <em>CU (Control Unit)</em>: decodifica e coordina l'esecuzione delle istruzioni
- <em>Registri</em>: memoria velocissima interna alla CPU (PC, IR, ACC, MAR, MDR)
- <em>Cache</em>: memoria veloce tra CPU e RAM (L1, L2, L3)

<strong>Ciclo fetch-decode-execute:</strong>
1. <em>Fetch</em>: preleva l'istruzione dalla RAM (indirizzo in PC)
2. <em>Decode</em>: la CU decodifica l'istruzione
3. <em>Execute</em>: l'ALU esegue l'operazione
4. <em>Writeback</em>: salva il risultato

<strong>Memoria — gerarchia:</strong>
Registri (velocissimi, pochi byte) → Cache L1/L2/L3 → RAM → SSD/HDD → Archivio remoto
Più ci si allontana dalla CPU, più la memoria è lenta ma capiente.

<strong>Tipi di architetture:</strong>
- <em>CISC</em> (Complex Instruction Set Computer): molte istruzioni complesse (es. x86)
- <em>RISC</em> (Reduced Instruction Set Computer): poche istruzioni semplici, più veloci (es. ARM)
- <em>Multi-core</em>: più CPU sullo stesso chip, esecuzione parallela
    `,
    domande: [
      "Descrivere il modello di Von Neumann.",
      "Quali sono i componenti principali della CPU?",
      "Spiegare il ciclo fetch-decode-execute.",
      "Cos'è la gerarchia di memoria e perché esiste?",
      "Differenza tra architettura CISC e RISC.",
    ],
    qa: [
      { domanda: "Cos'è il modello di Von Neumann?", risposta: "È l'architettura base del computer moderno: CPU, memoria, I/O collegati da bus. L'idea chiave è il 'programma memorizzato': le istruzioni stanno in memoria come i dati e vengono eseguite sequenzialmente dalla CPU." },
      { domanda: "Cos'è la cache?", risposta: "È una memoria molto veloce (più della RAM) posizionata vicino alla CPU. Memorizza dati e istruzioni usati di frequente per ridurre i tempi di accesso. Esiste in livelli: L1 (la più veloce e piccola), L2, L3." },
      { domanda: "Cosa fa la CU?", risposta: "La Control Unit (Unità di Controllo) decodifica le istruzioni prelevate dalla memoria e coordina gli altri componenti della CPU (ALU, registri) per eseguirle nell'ordine corretto." },
      { domanda: "Differenza tra CISC e RISC?", risposta: "CISC ha un set di istruzioni ampio e complesso (una sola istruzione può fare molto); usato in PC (x86). RISC ha istruzioni semplici e uniformi, più veloci da eseguire; usato in dispositivi mobili (ARM). RISC favorisce la pipeline." },
    ],
    daRicordare: [
      "Von Neumann: CPU + RAM + I/O + Bus + programma memorizzato",
      "CPU = ALU (calcola) + CU (coordina) + Registri (memoria interna)",
      "Ciclo: Fetch → Decode → Execute → Writeback",
      "Gerarchia memoria: più vicino alla CPU = più veloce ma più costoso",
      "Cache risolve il collo di bottiglia tra CPU veloce e RAM lenta",
      "RISC usato in smartphone (ARM), CISC nei PC (Intel/AMD x86)",
    ],
    daNonDire: [
      "Non confondere RAM (volatile) con ROM (permanente)",
      "Non dire che la cache è uguale alla RAM — è più veloce e molto più piccola",
      "Non confondere bus dati, bus indirizzi e bus di controllo — hanno ruoli diversi",
    ],
    raccomandazioni: `Collega l'architettura del computer ai sistemi operativi (gestione memoria, processi) — mostra visione d'insieme.
Il ciclo fetch-decode-execute è quasi sempre chiesto: memorizzalo bene.
Menziona la gerarchia di memoria come motivazione per la cache.`,
  },

  "sistemi-distribuiti": {
    titolo: "Sistemi Distribuiti",
    spiegazione: `
Un <strong>sistema distribuito</strong> è un insieme di computer indipendenti che appaiono agli utenti come un singolo sistema coerente.

<strong>Caratteristiche:</strong>
- Concorrenza: più nodi lavorano simultaneamente
- Mancanza di orologio globale: difficile sincronizzare gli eventi
- Fallimenti indipendenti: un nodo può cadere senza bloccare tutto

<strong>Vantaggi:</strong>
- <em>Scalabilità</em>: aggiungere nodi per gestire più carico
- <em>Affidabilità</em>: ridondanza — se un nodo cade, altri continuano
- <em>Condivisione risorse</em>: storage, CPU, dati condivisi tra nodi

<strong>Svantaggi:</strong>
- Complessità di progettazione e gestione
- Latenza di rete tra nodi
- Problemi di consistenza dei dati

<strong>Modelli architetturali distribuiti:</strong>
- <em>Client-Server</em>: client richiedono, server rispondono
- <em>Peer-to-Peer (P2P)</em>: tutti i nodi sono equivalenti (es. BitTorrent)
- <em>Cluster</em>: nodi omogenei che lavorano come un unico server
- <em>Grid Computing</em>: risorse distribuite geograficamente
- <em>Cloud Computing</em>: risorse virtualizzate su internet

<strong>Teorema CAP (Brewer):</strong>
In un sistema distribuito è impossibile garantire contemporaneamente:
- <em>Consistency</em>: tutti i nodi vedono gli stessi dati
- <em>Availability</em>: il sistema risponde sempre
- <em>Partition tolerance</em>: funziona anche se la rete si divide
Bisogna scegliere due delle tre (le reti reali hanno sempre partizioni → si sceglie CA o CP).

<strong>Middleware:</strong> software intermedio che facilita la comunicazione tra componenti distribuiti (es. message broker, RPC, REST).
    `,
    domande: [
      "Cosa si intende per sistema distribuito?",
      "Vantaggi e svantaggi di un sistema distribuito.",
      "Spiegare il teorema CAP.",
      "Differenza tra cluster e grid computing.",
      "Cos'è il middleware in un sistema distribuito?",
    ],
    qa: [
      { domanda: "Cos'è un sistema distribuito?", risposta: "Un insieme di nodi (computer) collegati in rete che cooperano per fornire un servizio, apparendo all'utente come un unico sistema. I nodi comunicano scambiando messaggi." },
      { domanda: "Cos'è il teorema CAP?", risposta: "Afferma che un sistema distribuito può garantire al massimo due delle tre proprietà: Consistency (dati coerenti ovunque), Availability (sempre disponibile), Partition tolerance (funziona nonostante interruzioni di rete). Dato che le partizioni accadono sempre, si sceglie tra CP e AP." },
      { domanda: "Differenza tra scalabilità verticale e orizzontale?", risposta: "Verticale: potenziare il singolo nodo (più RAM, CPU più potente). Orizzontale: aggiungere più nodi al sistema. La scalabilità orizzontale è preferita nei sistemi distribuiti moderni perché non ha limiti fisici." },
    ],
    daRicordare: [
      "Sistema distribuito = più nodi indipendenti che appaiono come uno solo",
      "Teorema CAP: non si può avere Consistency + Availability + Partition tolerance insieme",
      "Scalabilità orizzontale (più nodi) preferita a verticale (nodo più potente)",
      "Affidabilità = ridondanza: se un nodo cade, altri continuano",
      "Il principale problema è la consistenza dei dati distribuiti",
    ],
    daNonDire: [
      "Non confondere sistema distribuito con sistema parallelo (multi-core su stessa macchina)",
      "Non dire che il teorema CAP si risolve scegliendo tutte e tre le proprietà",
    ],
    raccomandazioni: `Il teorema CAP è frequentemente chiesto — spiega bene il trade-off.
Collega i sistemi distribuiti al cloud computing e alla virtualizzazione.`,
  },

};
