// data/informatica/tpsit-progettazione.js
var TOPIC_PROGETTAZIONE = {

  "uml": {
    titolo: "UML — Unified Modeling Language",
    spiegazione: `
<strong>UML</strong> è un linguaggio di modellazione standard per descrivere visivamente sistemi software. Non è un linguaggio di programmazione, ma un linguaggio grafico per documentare e progettare.

<strong>Categorie di diagrammi UML:</strong>

<em>Diagrammi strutturali</em> (descrivono la struttura statica):
- <strong>Diagramma delle classi</strong>: classi, attributi, metodi, relazioni — il più usato
- <strong>Diagramma dei componenti</strong>: componenti software e dipendenze
- <strong>Diagramma di deployment</strong>: distribuzione su hardware fisico

<em>Diagrammi comportamentali</em> (descrivono il comportamento dinamico):
- <strong>Diagramma dei casi d'uso</strong>: interazioni tra attori e sistema
- <strong>Diagramma di sequenza</strong>: messaggi tra oggetti nel tempo
- <strong>Diagramma delle attività</strong>: flusso di attività (simile a flowchart)
- <strong>Diagramma degli stati</strong>: stati di un oggetto e transizioni

<strong>Diagramma delle classi — elementi principali:</strong>
- Classe: rettangolo con nome, attributi, metodi
- Visibilità: + pubblico, - privato, # protetto
- <em>Associazione</em>: relazione generica tra classi (linea)
- <em>Aggregazione</em>: "ha un" (losanga vuota) — il componente può esistere senza il contenitore
- <em>Composizione</em>: "è parte di" (losanga piena) — il componente non esiste senza il contenitore
- <em>Ereditarietà (Generalizzazione)</em>: freccia con triangolo vuoto
- <em>Dipendenza</em>: freccia tratteggiata — usa temporaneamente
- <em>Interfaccia/Realizzazione</em>: freccia tratteggiata con triangolo

<strong>Diagramma dei casi d'uso:</strong>
- <em>Attore</em>: entità esterna che interagisce col sistema (omino stilizzato)
- <em>Caso d'uso</em>: funzionalità del sistema (ellisse)
- <em>Include</em>: un caso d'uso include sempre un altro (dipendenza obbligatoria)
- <em>Extend</em>: un caso d'uso estende opzionalmente un altro (comportamento condizionale)

<strong>Diagramma di sequenza:</strong>
Mostra la collaborazione tra oggetti nel tempo.
- Linee verticali = lifeline degli oggetti
- Frecce orizzontali = messaggi (chiamate a metodo)
- Barre di attivazione = quando l'oggetto è attivo
    `,
    domande: [
      "Cos'è UML e a cosa serve?",
      "Descrivere il diagramma delle classi e le principali relazioni.",
      "Differenza tra aggregazione e composizione in UML.",
      "Cos'è il diagramma dei casi d'uso?",
      "Differenza tra include ed extend nei casi d'uso.",
    ],
    qa: [
      { domanda: "Cos'è UML?", risposta: "Unified Modeling Language: linguaggio grafico standard per modellare sistemi software. Fornisce diagrammi per descrivere struttura (diagramma classi, componenti) e comportamento (casi d'uso, sequenza, stati). Facilita la comunicazione tra sviluppatori, clienti e progettisti." },
      { domanda: "Differenza tra aggregazione e composizione?", risposta: "Aggregazione (losanga vuota): relazione 'ha un' debole — il componente può esistere indipendentemente. Es: Università ha Studenti, ma gli studenti esistono senza l'università. Composizione (losanga piena): relazione 'è parte di' forte — il componente non può esistere senza il contenitore. Es: Casa ha Stanze; le stanze non esistono senza la casa." },
      { domanda: "Differenza tra include ed extend?", risposta: "Include: il caso d'uso base include sempre il caso d'uso incluso — è obbligatorio e riutilizzato (es. ogni operazione include 'Verifica Autenticazione'). Extend: il caso d'uso esteso aggiunge comportamento opzionale al base in certi punti di estensione (es. 'Mostra Promo' può estendere 'Acquisto')." },
      { domanda: "Quando si usa il diagramma di sequenza?", risposta: "Per mostrare come gli oggetti collaborano nel tempo per realizzare uno scenario specifico. Evidenzia l'ordine dei messaggi tra oggetti, chi chiama chi e le risposte. Utile per documentare i casi d'uso in dettaglio e progettare l'interazione tra componenti." },
    ],
    daRicordare: [
      "Diagramma classi = struttura. Diagramma sequenza = comportamento nel tempo",
      "Associazione > Aggregazione (losanga vuota) > Composizione (losanga piena)",
      "Composizione = ciclo di vita dipendente. Aggregazione = ciclo di vita indipendente",
      "Include = obbligatorio sempre. Extend = opzionale/condizionale",
      "Attore nei casi d'uso = entità esterna (utente, altro sistema)",
      "Visibilità classi: + pubblico, - privato, # protetto",
    ],
    daNonDire: [
      "Non confondere aggregazione e composizione — la differenza sta nel ciclo di vita",
      "Non dire che UML è un linguaggio di programmazione",
      "Non confondere include (obbligatorio) con extend (opzionale)",
    ],
    raccomandazioni: `Il diagramma delle classi è quasi sempre chiesto — sii preciso sulle relazioni.
La distinzione aggregazione/composizione è una domanda classica: usa l'esempio università/studenti vs casa/stanze.
Include/extend nei casi d'uso: prepara un esempio concreto per ognuno.`,
  },

  "design-patterns": {
    titolo: "Design Patterns",
    spiegazione: `
I <strong>design pattern</strong> sono soluzioni riusabili a problemi ricorrenti nella progettazione del software. Introdotti da GoF (Gang of Four) nel libro "Design Patterns" (1994).

<strong>Categorie (GoF):</strong>

<em>Creazionali</em> — gestiscono la creazione degli oggetti:
- <strong>Singleton</strong>: garantisce che una classe abbia una sola istanza e fornisce un punto di accesso globale
- <strong>Factory Method</strong>: delega la creazione dell'oggetto alle sottoclassi
- <strong>Abstract Factory</strong>: crea famiglie di oggetti correlati senza specificare classi concrete

<em>Strutturali</em> — gestiscono la composizione di classi e oggetti:
- <strong>Adapter</strong>: converte l'interfaccia di una classe in un'altra compatibile (adattatore)
- <strong>Decorator</strong>: aggiunge funzionalità a un oggetto dinamicamente senza modificarne la classe
- <strong>Facade</strong>: fornisce un'interfaccia semplificata a un sottosistema complesso

<em>Comportamentali</em> — gestiscono la comunicazione tra oggetti:
- <strong>Observer</strong>: un oggetto (Subject) notifica automaticamente i suoi dipendenti (Observer) quando cambia stato. Usato in event listener, MVC
- <strong>Strategy</strong>: definisce una famiglia di algoritmi intercambiabili. Il client sceglie quale usare a runtime
- <strong>Iterator</strong>: accede sequenzialmente agli elementi di una collezione senza esporne la struttura interna

<strong>Singleton in dettaglio:</strong>
<code>public class Database {</code>
<code>  private static Database istanza;</code>
<code>  private Database() {} // costruttore privato</code>
<code>  public static Database getInstance() {</code>
<code>    if (istanza == null) istanza = new Database();</code>
<code>    return istanza;</code>
<code>  }</code>
<code>}</code>
Attenzione: in ambienti multi-thread serve la sincronizzazione (<code>synchronized</code> o double-checked locking).

<strong>Observer in dettaglio:</strong>
Subject mantiene una lista di Observer. Quando cambia stato, chiama <code>notifica()</code> su tutti.
Usato in: GUI (eventi), MVC (Model notifica la View), sistemi di notifiche.

<strong>Principi SOLID:</strong>
- <em>S</em>ingle Responsibility: una classe, una responsabilità
- <em>O</em>pen/Closed: aperta all'estensione, chiusa alla modifica
- <em>L</em>iskov Substitution: le sottoclassi devono sostituire la classe base
- <em>I</em>nterface Segregation: interfacce specifiche meglio di una generale
- <em>D</em>ependency Inversion: dipendi da astrazioni, non da implementazioni
    `,
    domande: [
      "Cos'è un design pattern e perché si usa?",
      "Descrivere il pattern Singleton.",
      "Descrivere il pattern Observer e fare un esempio.",
      "Differenza tra Adapter e Facade.",
      "Cos'è il principio SOLID?",
    ],
    qa: [
      { domanda: "Cos'è un design pattern?", risposta: "Una soluzione consolidata e riusabile a un problema ricorrente nella progettazione OOP. Non è codice copiabile ma uno schema concettuale. I pattern GoF sono catalogati in tre categorie: creazionali, strutturali e comportamentali." },
      { domanda: "Cos'è il Singleton?", risposta: "Pattern creazionale che garantisce l'esistenza di una sola istanza di una classe, con un punto di accesso globale. Il costruttore è privato; un metodo statico getInstance() crea l'istanza solo se non esiste. Usato per connessioni DB, configurazioni, logger." },
      { domanda: "Cos'è l'Observer?", risposta: "Pattern comportamentale in cui un Subject mantiene una lista di Observer e li notifica automaticamente quando il suo stato cambia. Implementa il principio publish-subscribe. Usato in GUI (event listener), MVC (il Model notifica la View), sistemi di notifiche in tempo reale." },
      { domanda: "Cos'è il principio Open/Closed?", risposta: "Una classe deve essere aperta all'estensione (si può aggiungere comportamento) ma chiusa alla modifica (non si deve cambiare il codice esistente). Si realizza tramite ereditarietà e interfacce: si aggiunge una nuova sottoclasse invece di modificare quella esistente." },
    ],
    daRicordare: [
      "GoF: Creazionali (Singleton, Factory), Strutturali (Adapter, Facade, Decorator), Comportamentali (Observer, Strategy)",
      "Singleton: costruttore privato + getInstance() statico",
      "Observer = publish-subscribe: Subject notifica tutti gli Observer registrati",
      "SOLID: Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion",
      "Strategy: algoritmo intercambiabile a runtime",
      "Adapter: converte interfaccia incompatibile. Facade: semplifica interfaccia complessa",
    ],
    daNonDire: [
      "Non confondere Adapter (compatibilità interfacce) con Facade (semplificazione)",
      "Non dire che il Singleton è sempre una buona scelta — può creare problemi nei test",
    ],
    raccomandazioni: `Singleton e Observer sono i pattern più chiesti all'orale — conosci il codice del Singleton a memoria.
SOLID è un ottimo argomento per dimostrare maturità progettuale.
Collega Observer al pattern MVC: il Model è il Subject, la View è l'Observer.`,
  },

  "ciclo-sviluppo": {
    titolo: "Ciclo di Sviluppo del Software",
    spiegazione: `
Il <strong>ciclo di sviluppo del software (SDLC)</strong> descrive le fasi attraverso cui passa un sistema software dalla concezione al rilascio e manutenzione.

<strong>Fasi principali:</strong>
1. <em>Analisi dei requisiti</em>: cosa deve fare il sistema? Requisiti funzionali e non funzionali
2. <em>Progettazione</em>: come lo facciamo? Architettura, UML, scelta tecnologie
3. <em>Implementazione</em>: scrittura del codice
4. <em>Testing</em>: verifica che il sistema funzioni correttamente
5. <em>Deploy</em>: messa in produzione
6. <em>Manutenzione</em>: correzioni, aggiornamenti, nuove funzionalità

<strong>Modelli di sviluppo:</strong>

<em>Modello a cascata (Waterfall):</em>
Fasi sequenziali: una fase deve completarsi prima di iniziare la successiva.
Vantaggi: semplice, documentazione chiara.
Svantaggi: rigido, difficile gestire i cambiamenti; i problemi emergono tardi.
Adatto per: requisiti stabili e ben definiti.

<em>Modello iterativo/incrementale:</em>
Sviluppo per incrementi successivi — ogni iterazione aggiunge funzionalità.
I problemi vengono scoperti prima.

<em>Agile:</em>
Filosofia di sviluppo flessibile e adattiva. Principi nel Manifesto Agile (2001).
- Individui e interazioni > processi e strumenti
- Software funzionante > documentazione esaustiva
- Collaborazione con il cliente > negoziazione del contratto
- Rispondere al cambiamento > seguire un piano

<em>Scrum</em> (framework Agile):
- Sviluppo in <em>Sprint</em> (iterazioni di 2-4 settimane)
- <em>Product Backlog</em>: lista di tutte le funzionalità da sviluppare
- <em>Sprint Planning</em>: pianificazione dello sprint
- <em>Daily Scrum</em>: meeting giornaliero breve (15 min)
- <em>Sprint Review</em> e <em>Retrospective</em>
- Ruoli: Product Owner, Scrum Master, Development Team

<strong>Testing:</strong>
- <em>Unit test</em>: testa singole funzioni/metodi in isolamento
- <em>Integration test</em>: testa l'interazione tra componenti
- <em>System test</em>: testa il sistema completo
- <em>TDD (Test-Driven Development)</em>: scrivi il test prima del codice
- <em>CI/CD</em>: Continuous Integration/Deployment — automatizza build, test, deploy

<strong>Versionamento — Git:</strong>
Sistema di controllo versione distribuito. Branching per feature, merge, pull request.
GitHub/GitLab per repository remoto e collaborazione.
    `,
    domande: [
      "Descrivere le fasi del ciclo di vita del software.",
      "Differenza tra modello Waterfall e Agile.",
      "Cos'è Scrum e come funziona?",
      "Tipi di testing nel software.",
      "Cos'è il CI/CD?",
    ],
    qa: [
      { domanda: "Differenza tra Waterfall e Agile?", risposta: "Waterfall è sequenziale e rigido: ogni fase deve completarsi prima della successiva, i requisiti sono definiti all'inizio. Agile è iterativo e flessibile: sviluppa in brevi sprint, accetta i cambiamenti, consegna software funzionante frequentemente. Agile è preferito quando i requisiti cambiano durante lo sviluppo." },
      { domanda: "Cos'è uno Sprint in Scrum?", risposta: "Un'iterazione di sviluppo di durata fissa (1-4 settimane) alla fine della quale si produce un incremento funzionante del software. Ogni sprint inizia con lo Sprint Planning (scegliere cosa fare) e finisce con Sprint Review (demo) e Retrospective (miglioramento processo)." },
      { domanda: "Cos'è il TDD?", risposta: "Test-Driven Development: metodologia in cui si scrive prima il test (che fallisce), poi il codice minimo per farlo passare, poi si refactora. Ciclo: Red (test fallisce) → Green (codice passa il test) → Refactor. Produce codice più testabile e con meno bug." },
      { domanda: "Cos'è CI/CD?", risposta: "Continuous Integration: ogni commit viene automaticamente compilato e testato. Continuous Deployment: il software testato viene automaticamente messo in produzione. Riduce i tempi di rilascio, rileva errori subito e riduce il rischio di deploy." },
    ],
    daRicordare: [
      "Waterfall = sequenziale, rigido. Agile = iterativo, flessibile",
      "Scrum: Sprint + Product Backlog + Daily Scrum + Review + Retrospective",
      "Unit test (funzione) → Integration test (componenti) → System test (sistema completo)",
      "TDD: scrivi test prima del codice (Red → Green → Refactor)",
      "CI/CD: automatizza build, test, deploy ad ogni commit",
      "Git = controllo versione distribuito. Branch per ogni feature",
    ],
    daNonDire: [
      "Non confondere Agile (filosofia) con Scrum (framework specifico che implementa Agile)",
      "Non dire che Waterfall è sempre sbagliato — è adatto per requisiti stabili e contratti fissi",
    ],
    raccomandazioni: `Il confronto Waterfall/Agile è quasi sempre chiesto — usa esempi per rendere concreta la differenza.
Scrum è il framework Agile più usato — conosci i ruoli e gli eventi principali.
CI/CD è un argomento molto attuale: cita GitHub Actions o Jenkins come esempi.`,
  },

};
