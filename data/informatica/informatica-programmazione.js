// data/informatica/informatica-programmazione.js
var TOPIC_PROGRAMMAZIONE = {

  "algoritmi": {
    titolo: "Algoritmi e Complessità",
    spiegazione: `
Un <strong>algoritmo</strong> è una sequenza finita di istruzioni non ambigue che risolve un problema in un tempo finito.

<strong>Proprietà di un algoritmo:</strong>
- Finitezza: termina in un numero finito di passi
- Definitezza: ogni istruzione è non ambigua
- Input/Output: ha zero o più input e almeno un output
- Efficacia: ogni passo è eseguibile concretamente

<strong>Complessità computazionale:</strong>
Misura le risorse (tempo, spazio) necessarie al crescere dell'input n.

<strong>Notazione O-grande (Big-O):</strong>
Descrive il comportamento nel caso peggiore:
- O(1) — costante: accesso a un array per indice
- O(log n) — logaritmica: ricerca binaria
- O(n) — lineare: ricerca sequenziale
- O(n log n) — merge sort, quick sort (caso medio)
- O(n²) — quadratica: bubble sort, selection sort
- O(2^n) — esponenziale: problemi NP

<strong>Algoritmi di ordinamento:</strong>
- <em>Bubble Sort</em>: confronta coppie adiacenti, O(n²)
- <em>Selection Sort</em>: trova il minimo, O(n²)
- <em>Insertion Sort</em>: inserisce nella posizione giusta, O(n²) peggio / O(n) migliore
- <em>Merge Sort</em>: divide e ricombina, O(n log n), stabile
- <em>Quick Sort</em>: pivot, O(n log n) medio / O(n²) peggio

<strong>Algoritmi di ricerca:</strong>
- <em>Ricerca sequenziale</em>: O(n)
- <em>Ricerca binaria</em>: O(log n), richiede array ordinato
    `,
    domande: [
      {
        domanda: "Cos'è la complessità computazionale?",
        risposta: "La complessità computazionale è la branca dell'informatica che studia le risorse, principalmente tempo di esecuzione e spazio in memoria, necessarie a un algoritmo per elaborare un input di dimensione 'n'. Invece di misurare i secondi effettivi, che variano in base all'hardware, si misura il numero di operazioni fondamentali eseguite. Questo permette di classificare gli algoritmi in classi di complessità e prevedere come scaleranno al crescere dei dati. Comprendere la complessità è vitale per scegliere l'algoritmo più efficiente per problemi del mondo reale dove i dati possono essere milioni."
      },
      {
        domanda: "Spiegare la notazione Big-O con esempi.",
        risposta: "La notazione O-grande (Big-O) esprime il limite superiore della crescita del tempo di esecuzione di un algoritmo nel caso peggiore, fornendo una stima pessimistica ma sicura. Ad esempio, O(1) indica un tempo costante come l'accesso a un elemento di un array tramite indice, che non dipende dalla dimensione dell'array. O(n) indica un tempo lineare come la ricerca sequenziale dove, nel peggiore dei casi, dobbiamo scorrere tutti gli elementi. Complessità più alte come O(n²) indicano algoritmi inefficienti per grandi input, come il bubble sort, dove il tempo quadruplica al raddoppiare dei dati. Questa notazione trascura le costanti moltiplicative e i termini di ordine inferiore per concentrarsi sulla tendenza di crescita dominante."
      },
      {
        domanda: "Descrivere e confrontare bubble sort e merge sort.",
        risposta: "Il bubble sort è un algoritmo semplice ma inefficiente (O(n²)) che ordina confrontando coppie adiacenti e scambiandole se fuori ordine, portando gradualmente gli elementi più grandi verso la fine. Al contrario, il merge sort è un algoritmo molto più potente (O(n log n)) basato sul paradigma 'divide et impera': divide ricorsivamente l'array a metà fino ad arrivare a elementi singoli e poi li ricombina ordinatamente. Mentre il bubble sort opera 'in place' (non richiede memoria extra), il merge sort richiede spazio aggiuntivo per la fase di fusione. Il merge sort è preferibile per array di grandi dimensioni, garantendo prestazioni ottime anche nel caso peggiore, dove il bubble sort risulterebbe impraticabile."
      },
      {
        domanda: "Quando si usa la ricerca binaria?",
        risposta: "La ricerca binaria si utilizza esclusivamente su strutture dati che contengono elementi già ordinati, come un array o una lista ordinata. Essa dimezza lo spazio di ricerca a ogni passo, confrontando l'elemento centrale con quello cercato e decidendo se proseguire nella metà destra o sinistra. Grazie alla sua complessità logaritmica O(log n), è incredibilmente veloce: in un array di un milione di elementi, trova un valore in al massimo 20 confronti. Se l'array non è ordinato, la ricerca binaria non può essere applicata a meno di non ordinarlo preventivamente, operazione che richiede O(n log n) e che conviene solo se si devono effettuare numerose ricerche successive."
      },
      {
        domanda: "Qual è la differenza tra complessità in tempo e in spazio?",
        risposta: "La complessità in tempo si riferisce alla crescita del numero di operazioni (e quindi del tempo di calcolo) necessarie a un algoritmo al crescere della dimensione dell'input. La complessità in spazio, invece, misura la crescita della memoria ausiliaria (oltre a quella dell'input stesso) richiesta dall'algoritmo per completare l'esecuzione. Spesso esiste un compromesso tra le due (trade-off): alcuni algoritmi possono essere resi più veloci utilizzando più memoria per memorizzare risultati intermedi, mentre altri risparmiano memoria a costo di un tempo di esecuzione più lungo. Nella progettazione software moderna, si tende a privilegiare la velocità (tempo) data la relativa abbondanza di RAM, ma lo spazio rimane critico nei sistemi embedded o con dataset giganteschi."
      }
    ],
    qa: [
      { domanda: "Cos'è O(n log n)?", risposta: "È la complessità dei migliori algoritmi di ordinamento per confronto (merge sort, quick sort nel caso medio). Significa che il tempo cresce come n moltiplicato per il logaritmo di n — molto meglio di O(n²) per input grandi." },
      { domanda: "Quando la ricerca binaria non funziona?", risposta: "La ricerca binaria richiede che l'array sia ordinato. Su array non ordinati bisogna prima ordinare (O(n log n)) e poi cercare (O(log n)), quindi conviene solo se si fanno molte ricerche." },
      { domanda: "Perché merge sort è preferito a quick sort in certi casi?", risposta: "Merge sort ha sempre complessità O(n log n), anche nel caso peggiore, ed è stabile (mantiene l'ordine relativo degli elementi uguali). Quick sort ha O(n²) nel caso peggiore (pivot mal scelto) ma in media è più veloce e usa meno memoria." },
    ],
    daRicordare: [
      "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n)",
      "Merge sort: O(n log n) sempre, stabile",
      "Quick sort: O(n log n) medio, O(n²) peggiore",
      "Ricerca binaria: O(log n) — solo su array ordinato",
      "Bubble/Selection/Insertion sort: O(n²) — solo per piccoli input",
    ],
    daNonDire: [
      "Non dire che quick sort è 'sempre il migliore' — ha caso peggiore O(n²)",
      "Non confondere complessità in tempo con complessità in spazio",
      "Non dimenticare che la ricerca binaria richiede array ordinato",
    ],
    raccomandazioni: `
Prepara un esempio di trace (passo per passo) di bubble sort su un array piccolo (es. [5,3,8,1]).
Mostrare che si capisce come funziona manualmente vale più che recitare la definizione.
    `,
  },

  "strutture-dati": {
    titolo: "Strutture Dati",
    spiegazione: `
Le <strong>strutture dati</strong> organizzano i dati in memoria per permettere operazioni efficienti.

<strong>Array:</strong> sequenza di elementi dello stesso tipo in posizioni contigue.
Accesso: O(1) | Inserimento/Rimozione in mezzo: O(n)

<strong>Lista collegata (Linked List):</strong> nodi connessi tramite puntatori. Ogni nodo ha un valore e un puntatore al successivo.
Accesso: O(n) | Inserimento/Rimozione in testa: O(1)

<strong>Pila (Stack):</strong> LIFO (Last In First Out). Operazioni: push (inserisci in cima), pop (rimuovi dalla cima), peek.
Usi: gestione chiamate funzioni, undo/redo, valutazione espressioni.

<strong>Coda (Queue):</strong> FIFO (First In First Out). Operazioni: enqueue (inserisci in fondo), dequeue (rimuovi dalla testa).
Usi: gestione richieste, scheduling processi.

<strong>Albero binario:</strong> ogni nodo ha al massimo 2 figli (sinistro e destro).
- BST (Binary Search Tree): figlio sinistro < nodo < figlio destro. Ricerca O(log n) se bilanciato.
- Visita: in-order (sx, nodo, dx), pre-order, post-order.

<strong>Grafo:</strong> insieme di nodi (vertici) e archi. Può essere orientato (diretto) o non orientato.
Rappresentazione: matrice di adiacenza, lista di adiacenza.
Algoritmi: BFS (visita in ampiezza), DFS (visita in profondità).

<strong>Hash Table:</strong> struttura che associa chiavi a valori tramite una funzione hash.
Accesso medio: O(1). Problemi: collisioni (gestite con chaining o open addressing).
    `,
    domande: [
      {
        domanda: "Differenza tra stack e queue. Esempi d'uso.",
        risposta: "Lo stack (pila) è una struttura dati LIFO (Last-In First-Out), dove l'ultimo elemento inserito è il primo a essere rimosso, come avviene in una pila di piatti; si usa per la gestione delle chiamate a funzione nel sistema operativo o per la funzione 'undo' negli editor. La queue (coda) è invece una struttura FIFO (First-In First-Out), dove il primo che entra è il primo a uscire, come una fila alla cassa; si usa per gestire processi in attesa della CPU o per gestire i pacchetti nei router di rete. Entrambe hanno operazioni di inserimento e rimozione molto veloci, ma servono a risolvere problemi di gestione dell'ordine di elaborazione opposti."
      },
      {
        domanda: "Cos'è un BST? Come si fa una ricerca?",
        risposta: "Un BST (Binary Search Tree) è un albero binario in cui ogni nodo segue una regola di ordinamento precisa: tutti i valori nel sottoalbero sinistro sono minori del valore del nodo, mentre tutti quelli nel sottoalbero destro sono maggiori. Questa struttura permette di effettuare ricerche in modo simile alla ricerca binaria: partendo dalla radice, se il valore cercato è minore del nodo vado a sinistra, se è maggiore vado a destra, ripetendo il processo fino a trovare l'elemento o un ramo vuoto. In un albero bilanciato, la ricerca richiede tempo logaritmico O(log n), rendendo il BST ideale per set di dati dinamici dove si devono eseguire frequenti inserimenti e ricerche."
      },
      {
        domanda: "Differenza tra array e lista collegata.",
        risposta: "L'array memorizza gli elementi in posizioni di memoria contigue, permettendo l'accesso istantaneo tramite indice O(1) ma rendendo costosi gli inserimenti o le rimozioni in posizioni intermedie poiché richiedono lo spostamento di tutti gli elementi successivi O(n). La lista collegata, invece, memorizza i dati in nodi sparsi collegati da puntatori; l'accesso richiede di scorrere la lista dall'inizio O(n), ma l'inserimento o la rimozione di un nodo sono istantanei O(1) una volta individuata la posizione, poiché basta aggiornare i puntatori. In sintesi, l'array è migliore se si accede spesso ai dati per indice, mentre la lista è preferibile se la dimensione cambia spesso e si fanno molti inserimenti."
      },
      {
        domanda: "Cos'è una hash table e cosa sono le collisioni?",
        risposta: "Una hash table è una struttura dati che associa chiavi a valori utilizzando una 'funzione hash' per calcolare l'indice dell'array in cui memorizzare il dato, puntando a fornire un accesso in tempo costante O(1). Una collisione si verifica quando due chiavi diverse producono, tramite la funzione hash, lo stesso indice di destinazione. Per gestire questo problema si usano tecniche come il 'chaining', dove ogni cella dell'array contiene una lista di elementi con lo stesso hash, o l'indirizzamento aperto, dove si cerca la prima cella libera successiva. Se il numero di collisioni aumenta troppo, le prestazioni della hash table degradano verso la complessità lineare O(n), vanificando il vantaggio di velocità."
      },
      {
        domanda: "Come funzionano BFS e DFS su un grafo?",
        risposta: "La BFS (Breadth-First Search) visita il grafo 'in ampiezza', esplorando tutti i vicini di un nodo prima di passare al livello successivo, utilizzando una coda (queue) per tenere traccia dei nodi da visitare; è ottima per trovare il percorso più breve in termini di numero di archi. La DFS (Depth-First Search) visita invece 'in profondità', seguendo un percorso il più lontano possibile dalla radice prima di tornare indietro (backtracking), utilizzando uno stack o la ricorsione. Mentre la BFS è ideale per analizzare livelli di vicinanza, la DFS è più indicata per compiti come la ricerca di cicli nel grafo o il controllo della connettività tra componenti. Entrambe hanno una complessità che dipende dal numero di vertici e di archi."
      }
    ],
    qa: [
      { domanda: "Differenza tra stack e queue?", risposta: "Stack: LIFO — l'ultimo elemento inserito è il primo a uscire (come una pila di piatti). Queue: FIFO — il primo a entrare è il primo a uscire (come una fila al supermercato). Stack: gestione chiamate, undo. Queue: scheduling, code di messaggi." },
      { domanda: "Cos'è una collisione in una hash table?", risposta: "Avviene quando due chiavi diverse producono lo stesso valore hash (stesso indice). Si gestisce con chaining (ogni cella contiene una lista di elementi) o open addressing (si cerca la prossima cella libera)." },
      { domanda: "Differenza tra BFS e DFS?", risposta: "BFS (Breadth-First Search) visita tutti i nodi livello per livello usando una queue — trova il percorso più corto in grafi non pesati. DFS (Depth-First Search) esplora un ramo fino in fondo usando uno stack (o ricorsione) — utile per rilevare cicli e componenti connesse." },
    ],
    daRicordare: [
      "Stack: LIFO (push/pop) | Queue: FIFO (enqueue/dequeue)",
      "Array: accesso O(1), inserimento O(n) | Lista: accesso O(n), inserimento testa O(1)",
      "BST: figlio sx < nodo < figlio dx — ricerca O(log n) se bilanciato",
      "Hash table: accesso O(1) medio | collisioni: chaining o open addressing",
      "BFS: usa queue, livello per livello | DFS: usa stack/ricorsione, in profondità",
    ],
    daNonDire: [
      "Non confondere albero binario generico con BST — BST ha una proprietà di ordinamento specifica",
      "Non dire che hash table ha sempre O(1) — in caso di molte collisioni degrada a O(n)",
    ],
    raccomandazioni: "Disegna le strutture dati mentre le spieghi — stack come torre di blocchi, queue come fila, albero con nodi e frecce. La visualizzazione convince più della definizione.",
  },

  "oop": {
    titolo: "Programmazione Orientata agli Oggetti (OOP)",
    spiegazione: `
La <strong>OOP (Object-Oriented Programming)</strong> è un paradigma che organizza il codice in oggetti, combinando dati (attributi) e comportamento (metodi).

<strong>Classe:</strong> modello/blueprint che definisce attributi e metodi.
<strong>Oggetto:</strong> istanza di una classe.

<strong>I 4 pilastri della OOP:</strong>

<em>1 — Incapsulamento:</em>
Nascondere i dettagli interni di un oggetto. Gli attributi sono privati, accessibili solo tramite metodi pubblici (getter/setter). Protegge l'integrità dei dati.

<em>2 — Ereditarietà:</em>
Una classe figlia (subclass) eredita attributi e metodi dalla classe padre (superclass). Permette il riuso del codice. Relazione IS-A: un Cane IS-A Animale.
Parole chiave: <code>extends</code> (Java/JS), <code>:</code> (C#/C++)

<em>3 — Polimorfismo:</em>
Lo stesso metodo si comporta diversamente in classi diverse.
- Override: la classe figlia ridefinisce un metodo del padre.
- Overload: stesso nome metodo con parametri diversi.
Un Animale ha un metodo parla() — Cane lo implementa come "Bau", Gatto come "Miao".

<em>4 — Astrazione:</em>
Esporre solo le funzionalità necessarie, nascondendo la complessità.
Implementata con classi astratte e interfacce.

<strong>Interfaccia:</strong> contratto che specifica i metodi che una classe DEVE implementare, senza implementarli. Supporta il polimorfismo.

<strong>Classe astratta:</strong> non può essere istanziata direttamente. Può avere metodi implementati e metodi astratti (da implementare nei figli).
    `,
    domande: [
      {
        domanda: "Quali sono i 4 pilastri della OOP?",
        risposta: "I quattro pilastri fondamentali della OOP sono l'incapsulamento, l'ereditarietà, il polimorfismo e l'astrazione. L'incapsulamento protegge i dati rendendoli accessibili solo tramite metodi sicuri; l'ereditarietà permette di creare nuove classi basandosi su classi esistenti per favorire il riuso del codice. Il polimorfismo consente di trattare oggetti di tipi diversi attraverso un'interfaccia comune, mentre l'astrazione serve a semplificare la complessità esponendo solo le caratteristiche essenziali degli oggetti. Insieme, questi concetti rendono il software più modulare, manutenibile e facile da estendere."
      },
      {
        domanda: "Differenza tra ereditarietà e composizione.",
        risposta: "L'ereditarietà modella una relazione di tipo 'IS-A' (è un), dove una classe specializza un'altra (es. un 'Quadrato' è un 'Rettangolo'), ereditandone i comportamenti. La composizione modella invece una relazione 'HAS-A' (ha un), dove una classe complessa contiene altre classi come attributi (es. una 'Auto' ha un 'Motore'). Mentre l'ereditarietà crea un legame forte e rigido tra le classi, la composizione è spesso considerata più flessibile poiché permette di cambiare il comportamento a runtime sostituendo gli oggetti componenti. Una regola d'oro nello sviluppo software è 'favorire la composizione rispetto all'ereditarietà' per ridurre l'accoppiamento tra le parti del sistema."
      },
      {
        domanda: "Cos'è il polimorfismo? Esempio pratico.",
        risposta: "Il polimorfismo è la capacità di una variabile di riferimento di puntare a oggetti di classi diverse e di invocare i loro metodi in modo che il comportamento vari in base alla classe effettiva dell'oggetto. Ad esempio, se abbiamo una classe base 'Forma' con un metodo 'disegna()', e le sottoclassi 'Cerchio' e 'Triangolo' che ne fanno l'override, possiamo avere una lista di Forme e chiamare disegna() su ognuna: il Cerchio si disegnerà come cerchio e il Triangolo come triangolo. Questo permette di scrivere codice generico che funziona con qualsiasi forma esistente o futura, senza dover conoscere i dettagli specifici di ogni sottoclasse a tempo di compilazione."
      },
      {
        domanda: "Differenza tra classe astratta e interfaccia.",
        risposta: "Una classe astratta è un modello parzialmente implementato che può contenere sia metodi con codice effettivo sia metodi astratti (senza implementazione); serve per raggruppare classi strettamente correlate che condividono una base comune. Un'interfaccia è invece un contratto puro che definisce solo i 'nomi' dei metodi che una classe deve possedere, senza fornire alcuna implementazione predefinita. Mentre una classe può estendere una sola classe astratta, può implementare molteplici interfacce, permettendo di simulare l'ereditarietà multipla e di garantire comportamenti comuni ad oggetti appartenenti a gerarchie completamente diverse."
      },
      {
        domanda: "Cos'è l'incapsulamento e perché è importante?",
        risposta: "L'incapsulamento è la pratica di nascondere i dettagli dello stato interno di un oggetto (attributi) rendendoli privati e permettendone l'accesso o la modifica solo attraverso metodi pubblici controllati (getter e setter). Questo è fondamentale per l'integrità del sistema, perché impedisce a codice esterno di impostare valori non validi o incoerenti (es. un'età negativa). Inoltre, permette allo sviluppatore di modificare l'implementazione interna di una classe senza rompere il codice che la utilizza, garantendo una separazione netta tra l'interfaccia pubblica e i dettagli tecnici, facilitando così il debugging e l'evoluzione del software."
      }
    ],
    qa: [
      { domanda: "Cos'è il polimorfismo?", risposta: "La capacità di oggetti di classi diverse di rispondere alla stessa chiamata di metodo in modo diverso. Es: Animal[] animals = {new Dog(), new Cat()}; for (Animal a : animals) a.speak(); — ogni animale 'parla' a modo suo. Il comportamento corretto viene scelto a runtime." },
      { domanda: "Differenza tra classe astratta e interfaccia?", risposta: "La classe astratta può avere attributi, metodi implementati e astratti. L'interfaccia definisce solo metodi astratti (contratto puro). Una classe può estendere una sola classe astratta ma implementare più interfacce. Regola: 'IS-A' → ereditarietà; 'CAN-DO' → interfaccia." },
      { domanda: "Cos'è l'incapsulamento?", risposta: "Il principio di nascondere lo stato interno di un oggetto (attributi privati) e permetterne l'accesso solo tramite metodi pubblici (getter/setter). Protegge l'integrità dei dati e riduce l'accoppiamento tra le classi." },
    ],
    daRicordare: [
      "4 pilastri: Incapsulamento, Ereditarietà, Polimorfismo, Astrazione",
      "Incapsulamento: attributi privati + getter/setter pubblici",
      "Ereditarietà: IS-A relationship, riuso del codice",
      "Polimorfismo: stesso metodo, comportamenti diversi (override/overload)",
      "Interfaccia: contratto (CAN-DO) | Classe astratta: IS-A parzialmente implementata",
    ],
    daNonDire: [
      "Non confondere override (ridefinizione in sottoclasse) con overload (stesso nome, parametri diversi)",
      "Non dire che una classe può estendere più classi — in Java/C# c'è ereditarietà singola (ma multiple interfacce)",
    ],
    raccomandazioni: "Porta un esempio coerente per tutti i 4 pilastri (es. gerarchia Veicolo → Auto → ElettricAuto). Usare lo stesso esempio per tutto il discorso è più convincente che esempi sparsi.",
  },

  "ricorsione": {
    titolo: "Ricorsione",
    spiegazione: `
La <strong>ricorsione</strong> è una tecnica in cui una funzione chiama sé stessa per risolvere un problema, dividendolo in sottoproblemi più piccoli dello stesso tipo.

<strong>Struttura di una funzione ricorsiva:</strong>
1. <em>Caso base</em>: condizione che ferma la ricorsione (senza di essa → stack overflow)
2. <em>Caso ricorsivo</em>: la funzione chiama sé stessa con un input ridotto

<strong>Esempio classico — Fattoriale:</strong>
fattoriale(0) = 1           ← caso base
fattoriale(n) = n × fattoriale(n−1)   ← caso ricorsivo

<strong>Esempio — Fibonacci:</strong>
fib(0) = 0, fib(1) = 1     ← casi base
fib(n) = fib(n−1) + fib(n−2)  ← caso ricorsivo (esponenziale senza memoization)

<strong>Come funziona a livello di memoria:</strong>
Ogni chiamata ricorsiva crea un nuovo frame sullo stack.
Troppa profondità → StackOverflowError.

<strong>Ricorsione vs Iterazione:</strong>
- La ricorsione è più leggibile per problemi naturalmente ricorsivi (alberi, grafi, divide et impera).
- L'iterazione è più efficiente in memoria (nessuno stack di chiamate).
- Ogni ricorsione può essere convertita in iterazione (con stack esplicito).

<strong>Memoization:</strong> tecnica per evitare calcoli ripetuti salvando i risultati già computati in una cache. Trasforma Fibonacci da O(2^n) a O(n).
    `,
    domande: [
      {
        domanda: "Cos'è la ricorsione? Quando si usa?",
        risposta: "La ricorsione è un metodo di risoluzione di problemi in cui una funzione risolve un compito chiamando sé stessa su versioni via via più semplici del problema originale. Si utilizza preferibilmente quando un problema ha una struttura intrinsecamente ricorsiva, come la visita di strutture dati gerarchiche (alberi, file system) o l'implementazione di algoritmi basati sul paradigma 'divide et impera' (come il merge sort). Sebbene spesso più elegante e leggibile dell'iterazione, la ricorsione richiede una gestione attenta della memoria poiché ogni chiamata impegna spazio sullo stack di sistema. È fondamentale definire sempre una condizione di terminazione per evitare che il processo prosegua all'infinito."
      },
      {
        domanda: "Cos'è il caso base e perché è necessario?",
        risposta: "Il caso base è la condizione all'interno di una funzione ricorsiva che permette di terminare le chiamate a sé stessa, fornendo una soluzione diretta per l'input più piccolo possibile. È strettamente necessario perché senza di esso la funzione continuerebbe a chiamarsi indefinitamente, consumando tutto lo spazio disponibile nello stack di memoria e portando inevitabilmente a un errore di 'Stack Overflow' e al crash del programma. Idealmente, ogni chiamata ricorsiva deve avvicinare l'input verso il caso base. Possiamo vederlo come l'ancora di salvezza che permette alla catena di calcoli di risalire verso il risultato finale."
      },
      {
        domanda: "Scrivere la funzione fattoriale ricorsiva.",
        risposta: "La funzione fattoriale di un numero 'n' si scrive ricorsivamente definendo come caso base che il fattoriale di 0 è 1. Per tutti gli altri valori positivi di 'n', la funzione restituisce 'n' moltiplicato per la chiamata ricorsiva della funzione stessa con l'argomento 'n-1'. In pseudocodice: 'se n è 0 allora ritorna 1, altrimenti ritorna n * fattoriale(n-1)'. Questo esempio illustra perfettamente come un problema matematico complesso possa essere ridotto a una serie di moltiplicazioni elementari attraverso la scomposizione ricorsiva. Bisogna però fare attenzione a non passare numeri negativi, che non farebbero mai scattare il caso base."
      },
      {
        domanda: "Quale problema ha la ricorsione Fibonacci senza ottimizzazioni?",
        risposta: "La versione ricorsiva ingenua per calcolare i numeri di Fibonacci soffre di una complessità temporale esponenziale, tipicamente O(2^n), perché effettua un numero enorme di ricalcoli inutili per gli stessi valori. Ad esempio, per calcolare il quinto numero, la funzione calcola più volte il secondo e il terzo in rami diversi dell'albero delle chiamate. Al crescere di 'n', il tempo di esecuzione diventa rapidamente inaccettabile anche per computer potenti. Questo problema viene risolto brillantemente con la 'memoization' o con approcci iterativi, che riducono la complessità a un tempo lineare O(n) salvando i risultati intermedi."
      },
      {
        domanda: "Differenza tra ricorsione e iterazione.",
        risposta: "L'iterazione utilizza cicli espliciti (come for o while) per ripetere un blocco di codice e utilizza variabili locali per mantenere lo stato del progresso; è generalmente più efficiente in termini di memoria e velocità pura poiché non ha l'overhead delle chiamate a funzione. La ricorsione, invece, utilizza la struttura dello stack di sistema per mantenere lo stato e risolve il problema tramite l'auto-invocazione; tende a produrre codice più pulito e facile da verificare matematicamente per problemi complessi. La scelta tra le due dipende spesso dal problema specifico: l'iterazione è preferibile per compiti semplici e lineari, mentre la ricorsione eccelle nella gestione di strutture dati non lineari o algoritmi complessi."
      }
    ],
    qa: [
      { domanda: "Cosa succede senza caso base?", risposta: "La funzione chiama sé stessa all'infinito, riempiendo lo stack di chiamate fino a causare un StackOverflowError (o equivalente). È come un ciclo infinito ma che esaurisce la memoria dello stack invece del tempo." },
      { domanda: "Cos'è la memoization?", risposta: "Una tecnica di ottimizzazione che salva in una cache i risultati già calcolati. Se la funzione viene chiamata con lo stesso input, restituisce il risultato dalla cache invece di ricalcolarlo. Fibonacci con memoization: O(2^n) → O(n)." },
    ],
    daRicordare: [
      "Ogni funzione ricorsiva DEVE avere un caso base",
      "Struttura: caso base + caso ricorsivo con input ridotto",
      "Stack overflow: troppa profondità di ricorsione",
      "Memoization: cache dei risultati per evitare ricalcoli",
      "Fibonacci senza ottimizzazione: O(2^n) — lentissimo per n grande",
    ],
    daNonDire: [
      "Non dire che la ricorsione è sempre migliore dell'iterazione — ha overhead dello stack",
      "Non dimenticare il caso base — è la parte più importante",
    ],
    raccomandazioni: "Fai il trace manuale del fattoriale(4): mostra come ogni chiamata viene impilata e poi risolta. Visivo e convincente per la commissione.",
  },

};
