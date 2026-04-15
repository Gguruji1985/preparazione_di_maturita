// data/informatica/informatica-web.js
var TOPIC_WEB = {

  "html-css": {
    titolo: "HTML e CSS",
    spiegazione: `
<strong>HTML (HyperText Markup Language)</strong> è il linguaggio di markup che definisce la struttura di una pagina web. Non è un linguaggio di programmazione: descrive il contenuto tramite <em>tag</em>.

<strong>Struttura base di un documento HTML:</strong>
<code>&lt;!DOCTYPE html&gt;</code> → dichiara la versione HTML5
<code>&lt;html&gt;</code> → radice del documento
<code>&lt;head&gt;</code> → metadati (titolo, charset, CSS collegati)
<code>&lt;body&gt;</code> → contenuto visibile

<strong>Tag fondamentali:</strong>
- Struttura: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>
- Testo: <code>&lt;h1&gt;..&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>
- Link e media: <code>&lt;a href=""&gt;</code>, <code>&lt;img src=""&gt;</code>
- Form: <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>
- Lista: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>
- Tabella: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>

<strong>CSS (Cascading Style Sheets)</strong> controlla la presentazione visiva. Si applica tramite:
- <em>Selettori</em>: <code>tag</code>, <code>.classe</code>, <code>#id</code>, <code>parent &gt; child</code>
- <em>Proprietà</em>: <code>color</code>, <code>font-size</code>, <code>margin</code>, <code>padding</code>, <code>display</code>, <code>position</code>

<strong>Box Model:</strong> ogni elemento è una scatola composta da content → padding → border → margin.

<strong>Layout moderni:</strong>
- <code>display: flex</code> → Flexbox: allinea elementi su un asse
- <code>display: grid</code> → Grid: layout a colonne e righe
- <code>position: relative/absolute/fixed</code>

<strong>Responsive Design:</strong> media queries adattano il layout alla dimensione dello schermo.
<code>@media (max-width: 768px) { ... }</code>
    `,
    domande: [
      "Qual è la differenza tra HTML e CSS?",
      "Spiegare il box model CSS.",
      "Cosa sono i selettori CSS e quali tipi esistono?",
      "Differenza tra Flexbox e Grid Layout.",
      "Cos'è il responsive design e come si implementa?",
      "Differenza tra tag semantici e non semantici in HTML5.",
    ],
    qa: [
      { domanda: "Cos'è HTML?", risposta: "È il linguaggio di markup standard per creare pagine web. Definisce la struttura e il contenuto tramite tag annidati." },
      { domanda: "Cos'è il box model?", risposta: "Ogni elemento HTML è rappresentato come un rettangolo composto da: content (contenuto), padding (spazio interno), border (bordo), margin (spazio esterno). Le dimensioni totali dipendono dalla somma di questi livelli." },
      { domanda: "Differenza tra class e id in CSS?", risposta: "L'id (#) è unico nella pagina — identifica un solo elemento. La classe (.) può essere applicata a più elementi. L'id ha specificità maggiore." },
      { domanda: "Cos'è Flexbox?", risposta: "Un modello di layout CSS che dispone gli elementi figli di un container lungo un asse (orizzontale o verticale), gestendo allineamento, distribuzione dello spazio e avvolgimento automatico." },
      { domanda: "Cosa sono i media query?", risposta: "Regole CSS che si attivano solo quando la pagina soddisfa certe condizioni (es. larghezza schermo), usate per creare layout responsivi che si adattano a dispositivi diversi." },
    ],
    daRicordare: [
      "HTML struttura il contenuto, CSS lo stile — sono due linguaggi separati",
      "Il box model: content → padding → border → margin (dall'interno verso l'esterno)",
      "Flexbox = layout 1D (un asse). Grid = layout 2D (righe e colonne)",
      "I tag semantici HTML5 (header, main, footer, nav, section) migliorano accessibilità e SEO",
      "La specificità CSS: id > class > tag. L'inline style batte tutti",
      "Responsive design con @media queries: mobile-first è la buona pratica",
    ],
    daNonDire: [
      "Non dire che HTML è un linguaggio di programmazione — è un linguaggio di markup",
      "Non confondere margin (esterno) con padding (interno)",
      "Non dire che CSS e HTML sono la stessa cosa",
    ],
    raccomandazioni: `Collega sempre HTML e CSS mostrando che uno definisce struttura e l'altro stile — la commissione apprezza la chiarezza sulla separazione dei ruoli.
Menziona HTML5 e i tag semantici: mostrano la tua conoscenza degli standard moderni.
Se chiesto del responsive design, cita le media query e il concetto mobile-first.`,
  },

  "javascript": {
    titolo: "JavaScript",
    spiegazione: `
<strong>JavaScript (JS)</strong> è il linguaggio di programmazione del web lato client. Permette di rendere le pagine dinamiche e interattive.

<strong>Caratteristiche principali:</strong>
- Linguaggio interpretato, eseguito dal browser
- Debolmente tipizzato (<em>loosely typed</em>): le variabili non hanno tipo fisso
- Orientato agli eventi: risponde ad azioni dell'utente (click, input, ecc.)
- Supporta la programmazione funzionale e orientata agli oggetti

<strong>Variabili:</strong>
- <code>var</code>: scope di funzione, hoisting
- <code>let</code>: scope di blocco, no hoisting
- <code>const</code>: scope di blocco, valore non riassegnabile

<strong>Tipi di dati:</strong> number, string, boolean, null, undefined, object, array, function

<strong>Strutture di controllo:</strong> if/else, switch, for, while, do-while, for...of, for...in

<strong>Funzioni:</strong>
- Classiche: <code>function nome(params) { ... }</code>
- Arrow function: <code>const f = (x) => x * 2</code>

<strong>DOM (Document Object Model):</strong>
JS interagisce con la pagina HTML tramite il DOM — rappresentazione ad albero degli elementi HTML.
<code>document.getElementById("id")</code>
<code>element.addEventListener("click", callback)</code>
<code>element.innerHTML = "nuovo testo"</code>

<strong>Programmazione asincrona:</strong>
- <em>Callback</em>: funzione passata come argomento
- <em>Promise</em>: oggetto che rappresenta il risultato futuro di un'operazione
- <em>async/await</em>: sintassi moderna per gestire le Promise

<strong>JSON (JavaScript Object Notation):</strong> formato di scambio dati leggero, usato nelle API REST.
    `,
    domande: [
      "Cos'è il DOM e come si manipola con JavaScript?",
      "Differenza tra var, let e const.",
      "Cosa sono le funzioni callback e quando si usano?",
      "Cos'è una Promise in JavaScript?",
      "Differenza tra programmazione sincrona e asincrona.",
      "Cos'è il JSON e perché si usa nelle applicazioni web?",
    ],
    qa: [
      { domanda: "Cos'è il DOM?", risposta: "È una rappresentazione ad albero del documento HTML che il browser costruisce in memoria. JavaScript lo usa per accedere e modificare dinamicamente gli elementi della pagina senza ricaricarla." },
      { domanda: "Differenza tra let e var?", risposta: "var ha scope di funzione e viene 'hoistato' (dichiarazione spostata in cima). let ha scope di blocco (valido solo dentro le graffe) e non viene hoistato. let è preferito nel codice moderno." },
      { domanda: "Cos'è una Promise?", risposta: "È un oggetto che rappresenta il completamento (o il fallimento) di un'operazione asincrona. Ha tre stati: pending, fulfilled, rejected. Si gestisce con .then() e .catch(), oppure con async/await." },
      { domanda: "Cos'è async/await?", risposta: "È una sintassi ES2017 che permette di scrivere codice asincrono in modo sincrono. Una funzione async restituisce sempre una Promise. await sospende l'esecuzione finché la Promise non si risolve." },
      { domanda: "Cos'è JSON?", risposta: "JavaScript Object Notation: formato testuale per scambiare dati strutturati. È indipendente dal linguaggio, leggibile, e usato nelle API REST per inviare/ricevere dati tra client e server." },
    ],
    daRicordare: [
      "JS è eseguito nel browser (client-side); Node.js lo porta lato server",
      "DOM = rappresentazione ad albero della pagina, modificabile con JS",
      "let e const preferiti a var nel codice moderno",
      "Programmazione asincrona: callback → Promise → async/await (evoluzione)",
      "JSON è solo testo — si converte con JSON.parse() e JSON.stringify()",
      "addEventListener separa la logica JS dall'HTML (no onclick inline)",
    ],
    daNonDire: [
      "Non confondere JavaScript con Java — sono linguaggi completamente diversi",
      "Non dire che JS è solo per animazioni — è usato per logica complessa, API, server (Node.js)",
      "Non usare var nel codice moderno senza spiegarne i limiti",
    ],
    raccomandazioni: `Se parli di JavaScript all'orale, menziona sempre il DOM e l'interazione con l'utente — è il cuore del linguaggio nel contesto web.
Distingui subito JS da Java se la commissione sembra confonderli.
Async/await è un ottimo argomento avanzato da citare per fare bella figura.`,
  },

  "client-server": {
    titolo: "Architettura Client-Server",
    spiegazione: `
L'architettura <strong>client-server</strong> è il modello dominante del web: un client (browser) invia richieste a un server che risponde con dati o pagine.

<strong>Client:</strong> chi fa la richiesta. Nel web è il browser. Gestisce la visualizzazione (HTML/CSS/JS).

<strong>Server:</strong> chi risponde. Elabora le richieste, accede al database, restituisce dati.

<strong>Protocollo HTTP/HTTPS:</strong>
- <em>HTTP</em> (HyperText Transfer Protocol): protocollo stateless a livello applicazione
- <em>HTTPS</em>: HTTP + TLS/SSL → comunicazione cifrata
- Metodi principali: <strong>GET</strong> (leggi), <strong>POST</strong> (crea), <strong>PUT</strong> (aggiorna), <strong>DELETE</strong> (elimina)
- Status code: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error

<strong>Struttura di una richiesta HTTP:</strong>
- Request line: <code>GET /index.html HTTP/1.1</code>
- Headers: Host, Content-Type, Authorization, Cookie…
- Body (solo POST/PUT): dati inviati al server

<strong>Architetture applicative:</strong>
- <em>Monolitica</em>: tutto il codice in un unico processo
- <em>A livelli (n-tier)</em>: presentazione, logica, dati separati
- <em>Microservizi</em>: tanti servizi indipendenti comunicanti via API

<strong>Sessioni e Cookie:</strong>
HTTP è stateless — ogni richiesta è indipendente. Per mantenere lo stato si usano:
- <em>Cookie</em>: piccoli dati salvati nel browser
- <em>Session</em>: dati mantenuti lato server, identificati da un session ID nel cookie
- <em>JWT (JSON Web Token)</em>: token firmato per autenticazione stateless

<strong>Scaling:</strong>
- Orizzontale: aggiungere più server (load balancing)
- Verticale: potenziare il server esistente
    `,
    domande: [
      "Descrivere l'architettura client-server e il ruolo di HTTP.",
      "Quali sono i principali metodi HTTP e quando si usano?",
      "Cosa significa che HTTP è stateless? Come si gestisce lo stato?",
      "Differenza tra HTTP e HTTPS.",
      "Cos'è il load balancing e perché si usa?",
      "Spiegare i codici di stato HTTP più importanti.",
    ],
    qa: [
      { domanda: "Cos'è l'architettura client-server?", risposta: "Un modello di comunicazione dove il client (es. browser) invia richieste e il server le elabora e risponde. I ruoli sono separati: il client gestisce la presentazione, il server la logica e i dati." },
      { domanda: "Cos'è HTTP?", risposta: "HyperText Transfer Protocol: protocollo di comunicazione a livello applicazione usato nel web. Definisce come client e server si scambiano messaggi. È stateless: ogni richiesta è indipendente." },
      { domanda: "Differenza tra GET e POST?", risposta: "GET recupera dati; i parametri sono nell'URL, visibili e cacheable. POST invia dati al server (es. form); i dati sono nel body della richiesta, non visibili nell'URL. POST è usato per operazioni che modificano stato." },
      { domanda: "Come si mantiene la sessione in HTTP stateless?", risposta: "Con cookie (dati nel browser), session server-side (il server memorizza lo stato associato a un ID), o JWT (token firmato inviato in ogni richiesta che contiene le info utente)." },
      { domanda: "Cosa significa HTTPS?", risposta: "HTTP Secure: usa TLS/SSL per cifrare la comunicazione tra client e server. Garantisce confidenzialità (i dati non sono leggibili da terzi), integrità e autenticità del server tramite certificato digitale." },
    ],
    daRicordare: [
      "HTTP è stateless: ogni richiesta è indipendente dal passato",
      "GET = lettura dati (idempotente). POST = invio/creazione dati",
      "HTTPS = HTTP + TLS: tutto il traffico è cifrato",
      "Cookie e session servono a simulare lo stato in un protocollo stateless",
      "Status 2xx = successo, 3xx = reindirizzamento, 4xx = errore client, 5xx = errore server",
      "Architettura a 3 livelli: presentation layer, business logic, data layer",
    ],
    daNonDire: [
      "Non dire che GET e POST sono uguali — hanno semantiche diverse",
      "Non dire che HTTPS cifra solo la password — cifra tutta la comunicazione",
      "Non confondere session (lato server) con cookie (lato client)",
    ],
    raccomandazioni: `L'architettura client-server è fondamentale per TPSIT e Sistemi e Reti — collega bene i concetti.
Ricorda i codici HTTP: la commissione li chiede spesso.
Menziona HTTPS e la sicurezza nella comunicazione per dimostrare consapevolezza moderna.`,
  },

  "api-rest": {
    titolo: "API REST",
    spiegazione: `
Una <strong>API (Application Programming Interface)</strong> è un'interfaccia che permette a due sistemi software di comunicare tra loro.

<strong>REST (Representational State Transfer)</strong> è uno stile architetturale per progettare API web, definito da Roy Fielding nel 2000.

<strong>Principi REST:</strong>
1. <em>Stateless</em>: ogni richiesta contiene tutte le informazioni necessarie
2. <em>Client-Server</em>: separazione tra chi consuma e chi espone
3. <em>Uniform Interface</em>: interfaccia standardizzata (URL + metodi HTTP)
4. <em>Cacheable</em>: le risposte possono essere memorizzate nella cache
5. <em>Layered System</em>: il client non sa con quanti livelli sta comunicando
6. <em>Resource-Based</em>: tutto è una risorsa identificata da un URL

<strong>Risorse e URL:</strong>
Una risorsa è un'entità (utente, prodotto, ordine). Si identifica con un URL:
- <code>GET /utenti</code> → lista utenti
- <code>GET /utenti/42</code> → utente con ID 42
- <code>POST /utenti</code> → crea nuovo utente
- <code>PUT /utenti/42</code> → aggiorna utente 42
- <code>DELETE /utenti/42</code> → elimina utente 42

<strong>Formato dei dati:</strong> solitamente <strong>JSON</strong>, talvolta XML.

<strong>Autenticazione in REST:</strong>
- <em>API Key</em>: chiave segreta nell'header
- <em>Bearer Token / JWT</em>: token firmato, inviato con ogni richiesta
- <em>OAuth 2.0</em>: protocollo standard per autorizzazione delegata

<strong>REST vs SOAP:</strong>
REST usa HTTP puro + JSON, è leggero e flessibile.
SOAP usa XML, è più rigido ma garantisce più funzionalità enterprise (transazioni, sicurezza avanzata).

<strong>API REST nel progetto ITI:</strong>
Frontend JS chiama API REST → server elabora → risponde con JSON → JS aggiorna il DOM senza ricaricare la pagina (AJAX/fetch).
    `,
    domande: [
      "Cos'è un'API REST e quali sono i suoi principi fondamentali?",
      "Come si progetta un URL RESTful?",
      "Differenza tra REST e SOAP.",
      "Come si gestisce l'autenticazione in un'API REST?",
      "Cos'è il formato JSON e perché è usato nelle API?",
      "Spiegare il concetto di risorsa in REST.",
    ],
    qa: [
      { domanda: "Cos'è REST?", risposta: "È uno stile architetturale per API web basato su HTTP. Le risorse sono identificate da URL, e le operazioni usano i metodi HTTP standard (GET, POST, PUT, DELETE). È stateless, leggero e ampiamente adottato." },
      { domanda: "Cos'è un'API?", risposta: "Un'interfaccia che permette a due sistemi di comunicare. Definisce come fare richieste e come interpretare le risposte. Le API REST usano HTTP come protocollo." },
      { domanda: "Differenza tra PUT e PATCH?", risposta: "PUT sostituisce completamente la risorsa con i dati forniti. PATCH aggiorna parzialmente la risorsa, modificando solo i campi specificati." },
      { domanda: "Cos'è JWT?", risposta: "JSON Web Token: un token compatto e firmato digitalmente, usato per l'autenticazione stateless. Contiene claims (es. ID utente, ruolo) e viene verificato dal server tramite una chiave segreta. Non richiede sessioni lato server." },
      { domanda: "Perché REST è preferito a SOAP oggi?", risposta: "REST è più semplice, leggero e flessibile. Usa JSON invece di XML (meno verboso), sfrutta direttamente HTTP, ed è più facile da consumare da browser e app mobile. SOAP è ancora usato in ambienti enterprise che richiedono transazioni formali." },
    ],
    daRicordare: [
      "REST non è un protocollo ma uno stile architetturale (set di vincoli)",
      "Ogni risorsa ha un URL univoco — non mettere verbi negli URL REST",
      "GET=leggi, POST=crea, PUT=sostituisci, PATCH=aggiorna parziale, DELETE=elimina",
      "REST è stateless: autenticazione tramite token (JWT) in ogni richiesta",
      "JSON è lo standard de facto per lo scambio dati nelle API moderne",
      "Status code HTTP fanno parte del contratto REST",
    ],
    daNonDire: [
      "Non dire che REST è un protocollo — è uno stile architetturale",
      "Non mettere verbi negli URL REST (es. /getUtenti è sbagliato — usa GET /utenti)",
      "Non confondere autenticazione (chi sei) con autorizzazione (cosa puoi fare)",
    ],
    raccomandazioni: `Le API REST collegano TPSIT, Informatica e Sistemi e Reti — usa questo argomento per mostrare visione d'insieme.
Porta un esempio concreto: "GET /prodotti/5 restituisce il prodotto con ID 5 in formato JSON".
Menziona JWT per l'autenticazione: dimostra conoscenza pratica delle API moderne.`,
  },

};
