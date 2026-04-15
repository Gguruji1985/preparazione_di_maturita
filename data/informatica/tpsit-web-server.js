// data/informatica/tpsit-web-server.js
var TOPIC_WEB_SERVER = {

  "architettura-web": {
    titolo: "Architettura Web Lato Server",
    spiegazione: `
Un'applicazione web lato server riceve richieste HTTP, le elabora e restituisce risposte.

<strong>Web server vs Application server:</strong>
- <em>Web server</em> (es. Apache, Nginx): gestisce richieste HTTP statiche (HTML, CSS, immagini) e fa da proxy verso l'application server
- <em>Application server</em>: esegue la logica applicativa, accede al database, genera contenuto dinamico

<strong>Architettura a 3 livelli (Three-tier):</strong>
1. <em>Presentation tier</em>: browser — HTML/CSS/JS
2. <em>Logic tier</em>: application server — elabora le richieste (PHP, Java, Python, Node.js)
3. <em>Data tier</em>: database — archivia i dati (MySQL, PostgreSQL, MongoDB)

<strong>Ciclo di una richiesta web:</strong>
Browser → DNS lookup → TCP connect → HTTP Request → Web server → App server → DB → risposta → HTML → browser render.

<strong>PHP (Hypertext Preprocessor):</strong>
Linguaggio server-side incorporato nell'HTML. Apache+PHP è la combinazione classica.
Il file PHP viene eseguito lato server; il client riceve solo l'HTML generato, non il codice PHP.
Accesso al DB: PDO (PHP Data Objects) con prepared statements.

<strong>Node.js:</strong>
Runtime JavaScript lato server basato su V8. Event-driven, non bloccante.
Framework: Express.js per API REST e web app.
Eccellente per applicazioni real-time (chat, notifiche) grazie all'I/O asincrono.

<strong>Sessioni e autenticazione web:</strong>
HTTP è stateless → per mantenere l'utente loggato:
- <em>Session-based</em>: server memorizza la sessione, invia session ID in un cookie
- <em>Token-based (JWT)</em>: token firmato inviato in ogni richiesta (stateless, ideale per API)

<strong>MVC (Model-View-Controller):</strong>
Pattern architetturale per separare le responsabilità:
- <em>Model</em>: dati e logica di business (accesso DB)
- <em>View</em>: presentazione (template HTML)
- <em>Controller</em>: gestisce le richieste HTTP, coordina Model e View
Esempi di framework MVC: Laravel (PHP), Spring MVC (Java), Django (Python), Ruby on Rails.
    `,
    domande: [
      "Descrivere l'architettura a tre livelli di un'applicazione web.",
      "Differenza tra web server e application server.",
      "Cos'è il pattern MVC e perché si usa?",
      "Come funziona la gestione delle sessioni in un'applicazione web?",
      "Differenza tra session-based e token-based authentication.",
    ],
    qa: [
      { domanda: "Cos'è il pattern MVC?", risposta: "Model-View-Controller: separa la logica in tre componenti. Il Model gestisce dati e business logic. La View gestisce la presentazione (HTML). Il Controller riceve le richieste HTTP, chiama il Model e passa i dati alla View. Migliora manutenibilità e testabilità." },
      { domanda: "Differenza tra web server e application server?", risposta: "Il web server (Apache, Nginx) gestisce richieste HTTP, serve file statici e fa da reverse proxy. L'application server esegue il codice dell'applicazione (PHP, Java, Python), elabora la logica di business e accede al database. Spesso il web server riceve la richiesta e la passa all'application server." },
      { domanda: "Come funziona la sessione web?", risposta: "Quando l'utente fa login, il server crea una sessione in memoria/DB con i dati dell'utente e invia al browser un cookie con il session ID. Ad ogni richiesta successiva, il browser invia il cookie; il server recupera la sessione corrispondente e sa chi è l'utente." },
    ],
    daRicordare: [
      "3 livelli: Presentation (browser) → Logic (app server) → Data (DB)",
      "MVC: Model (dati) + View (HTML) + Controller (logica HTTP)",
      "PHP esegue lato server — il client riceve HTML, non PHP",
      "Session = dati lato server + cookie con ID. JWT = token firmato lato client",
      "Node.js = JavaScript lato server, asincrono, ideale per real-time",
      "Apache/Nginx = web server. Tomcat/Node/PHP = application server",
    ],
    daNonDire: [
      "Non confondere web server (serve file) con application server (esegue logica)",
      "Non dire che il browser riceve il codice PHP — riceve solo l'HTML generato",
    ],
    raccomandazioni: `L'architettura a 3 livelli è fondamentale — disegnala mentalmente quando la spieghi.
MVC è un pattern usato in quasi tutti i framework moderni — conoscerlo fa bella figura.
Distingui session-based da JWT — è una domanda frequente in TPSIT.`,
  },

  "php-database": {
    titolo: "PHP e Accesso al Database",
    spiegazione: `
<strong>PHP</strong> è il linguaggio server-side più diffuso nel web. Viene eseguito dal server e genera HTML dinamico.

<strong>Sintassi base PHP:</strong>
<code>&lt;?php echo "Ciao Mondo"; ?&gt;</code>
Tag di apertura/chiusura PHP incorporati nell'HTML.
Variabili con prefisso $: <code>$nome = "Aryan";</code>
Array, funzioni, classi, namespace — OOP completo.

<strong>Gestione form e richieste HTTP:</strong>
- <code>$_GET["param"]</code>: parametri dalla URL
- <code>$_POST["param"]</code>: dati dal body del form
- <code>$_SESSION</code>: dati di sessione
- <code>$_COOKIE</code>: cookie del browser

<strong>Connessione a MySQL con PDO:</strong>
<code>$pdo = new PDO("mysql:host=localhost;dbname=scuola", "utente", "password");</code>
<code>$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);</code>

<strong>Query sicure con Prepared Statements:</strong>
<code>$stmt = $pdo->prepare("SELECT * FROM studenti WHERE id = ?");</code>
<code>$stmt->execute([$id]);</code>
<code>$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);</code>

Perché i prepared statements? Prevengono la <em>SQL injection</em>: i parametri non vengono mai interpretati come codice SQL.

<strong>CRUD con PHP e MySQL:</strong>
- <em>Create</em>: INSERT INTO
- <em>Read</em>: SELECT
- <em>Update</em>: UPDATE ... SET
- <em>Delete</em>: DELETE FROM

<strong>Sicurezza in PHP:</strong>
- Usare sempre prepared statements (no concatenazione di SQL)
- Validare e sanitizzare tutti gli input (<code>htmlspecialchars()</code> per XSS)
- Password: <code>password_hash()</code> e <code>password_verify()</code>
- HTTPS per tutte le comunicazioni sensibili
- Configurazione corretta di php.ini (disabilitare display_errors in produzione)
    `,
    domande: [
      "Come si accede a un database MySQL da PHP in modo sicuro?",
      "Cos'è un prepared statement e perché previene SQL injection?",
      "Differenza tra $_GET e $_POST.",
      "Come si gestisce la sessione in PHP?",
      "Come si salvano le password in modo sicuro in PHP?",
    ],
    qa: [
      { domanda: "Cos'è un prepared statement in PHP?", risposta: "Una query SQL precompilata in cui i parametri sono separati dal codice SQL. Il driver DB tratta i parametri come dati puri, mai come codice. Previene SQL injection: anche se l'utente inserisce codice SQL nel campo, viene trattato come stringa." },
      { domanda: "Differenza tra $_GET e $_POST?", risposta: "$_GET prende parametri dalla URL (es. pagina.php?id=5) — visibili, limitati in dimensione, cacheable. $_POST prende dati dal body della richiesta HTTP — non visibili nella URL, dimensione maggiore. POST si usa per dati sensibili e operazioni che modificano lo stato." },
      { domanda: "Come salvare le password in PHP?", risposta: "Con password_hash($password, PASSWORD_BCRYPT) che calcola un hash sicuro con salt automatico. Per verificare: password_verify($input, $hash). Mai salvare password in chiaro o con MD5/SHA1 semplice." },
    ],
    daRicordare: [
      "PDO = interfaccia PHP per DB. Prepared statements = sicurezza anti-SQL injection",
      "$_GET = URL parameters. $_POST = body form. $_SESSION = sessione server",
      "password_hash() + password_verify() per le password in PHP",
      "htmlspecialchars() converte caratteri HTML → previene XSS",
      "CRUD: INSERT / SELECT / UPDATE / DELETE",
      "Mai concatenare input utente in query SQL — sempre prepared statements",
    ],
    daNonDire: [
      "Non usare mysql_* functions — sono deprecate. Usare PDO o mysqli",
      "Non concatenare variabili in query SQL: 'SELECT * FROM t WHERE id='.$id è vulnerabile",
      "Non salvare password con MD5 o SHA1 — non sono sicuri per le password",
    ],
    raccomandazioni: `I prepared statements sono la risposta giusta a qualsiasi domanda su SQL injection in PHP.
Mostra che sai usare PDO con il pattern prepare → execute → fetch.
La sicurezza delle password con password_hash è un dettaglio tecnico che fa bella figura.`,
  },

  "nodejs-express": {
    titolo: "Node.js e Express",
    spiegazione: `
<strong>Node.js</strong> è un runtime JavaScript lato server, basato sul motore V8 di Chrome.
Caratteristica principale: <em>event-driven</em> e <em>non-blocking I/O</em> — un singolo thread gestisce migliaia di connessioni concorrenti.

<strong>Quando usare Node.js:</strong>
- API REST
- Applicazioni real-time (chat, notifiche push, streaming)
- Microservizi
- Non ideale per operazioni CPU-intensive (calcoli pesanti bloccano il thread)

<strong>npm (Node Package Manager):</strong>
Gestore di pacchetti di Node.js. <code>package.json</code> descrive il progetto e le dipendenze.
<code>npm install express</code> → installa Express.

<strong>Express.js:</strong>
Framework minimalista per applicazioni web e API REST su Node.js.

Server base:
<code>const express = require('express');</code>
<code>const app = express();</code>
<code>app.use(express.json());</code>
<code>app.get('/utenti', (req, res) => res.json(utenti));</code>
<code>app.post('/utenti', (req, res) => { ... res.status(201).json(nuovo); });</code>
<code>app.listen(3000);</code>

<strong>Middleware in Express:</strong>
Funzioni eseguite nell'ordine durante la gestione di una richiesta.
<code>app.use((req, res, next) => { console.log(req.method, req.url); next(); });</code>
Usi: logging, autenticazione, parsing JSON, CORS, gestione errori.

<strong>Routing:</strong>
<code>app.get('/utenti/:id', (req, res) => { const id = req.params.id; ... });</code>
Parametri URL con <code>req.params</code>, query string con <code>req.query</code>, body con <code>req.body</code>.

<strong>Accesso a DB con Node.js:</strong>
MySQL: libreria <code>mysql2</code> con supporto a prepared statements e Promise.
MongoDB: libreria <code>mongoose</code> (ODM).

<strong>Async/await in Express:</strong>
Le route handler possono essere async per gestire operazioni asincrone in modo leggibile.
Usare try/catch o middleware di error handling per gestire gli errori.
    `,
    domande: [
      "Cos'è Node.js e perché è adatto per le API REST?",
      "Cos'è il middleware in Express e come si usa?",
      "Descrivere come si crea un'API REST con Express.",
      "Perché Node.js non è adatto per operazioni CPU-intensive?",
    ],
    qa: [
      { domanda: "Cos'è il modello event-driven di Node.js?", risposta: "Node.js usa un singolo thread con un event loop. Invece di bloccare il thread su operazioni I/O (rete, disco), le registra come eventi e continua ad elaborare altre richieste. Quando l'operazione I/O completa, la callback viene eseguita. Permette gestione efficiente di molte connessioni concorrenti." },
      { domanda: "Cos'è il middleware in Express?", risposta: "Funzioni che si inseriscono nella pipeline di gestione delle richieste. Ogni middleware riceve (req, res, next) e può modificare req/res o passare al prossimo middleware con next(). Usato per autenticazione, parsing JSON, logging, gestione CORS e errori." },
    ],
    daRicordare: [
      "Node.js = JavaScript lato server, event-driven, non-blocking",
      "Express = framework su Node per routing e middleware",
      "Middleware: funzioni nella pipeline (req, res, next)",
      "req.params = URL params (:id). req.query = query string. req.body = POST body",
      "Node.js ideale per I/O-bound (API, real-time). Da evitare per CPU-bound",
      "npm + package.json gestiscono le dipendenze",
    ],
    daNonDire: [
      "Non confondere Node.js (runtime) con Express (framework)",
      "Non dire che Node.js è multi-thread — usa un singolo thread con event loop",
    ],
    raccomandazioni: `Express + REST è uno degli stack più usati in TPSIT — mostra di saperlo descrivere con codice.
Il concetto di middleware è fondamentale: spiega la catena req→middleware→route handler→res.
Cita il confronto con PHP: Node.js è asincrono, PHP è sincrono per default.`,
  },

};
