// data/informatica/tpsit-webservices.js
var TOPIC_WEBSERVICES = {

  "web-services": {
    titolo: "Web Services",
    spiegazione: `
Un <strong>Web Service</strong> è un sistema software progettato per supportare l'interoperabilità tra macchine attraverso una rete. Permette a applicazioni diverse (linguaggi, piattaforme) di comunicare.

<strong>Caratteristiche:</strong>
- Comunicazione via HTTP/HTTPS
- Formato dati standard (XML o JSON)
- Indipendente dalla piattaforma e dal linguaggio
- Interfaccia ben definita (contratto)

<strong>Tipi principali:</strong>

<em>SOAP (Simple Object Access Protocol):</em>
Protocollo basato su XML. Strutturato e formale.
- I messaggi sono in formato XML con busta SOAP (Envelope, Header, Body)
- Il contratto è definito in WSDL (Web Services Description Language)
- Supporta WS-Security, WS-Transaction — funzionalità enterprise
- Trasporto: HTTP, ma anche SMTP, altri
- Verboso e pesante; tipicamente usato in ambienti bancari, sanitari, enterprise

<em>REST (Representational State Transfer):</em>
Stile architetturale che usa HTTP direttamente. Leggero e flessibile.
- Dati in JSON (tipicamente), XML o altri formati
- Nessun contratto obbligatorio (ma si usa OpenAPI/Swagger per documentazione)
- Sfrutta i metodi HTTP (GET, POST, PUT, DELETE)
- Stateless, scalabile, più semplice da usare

<strong>Confronto SOAP vs REST:</strong>
| Aspetto | SOAP | REST |
|---------|------|------|
| Formato | XML | JSON/XML |
| Protocollo | Multiplo | HTTP |
| Contratto | WSDL (obbligatorio) | OpenAPI (opzionale) |
| Sicurezza | WS-Security | HTTPS + JWT |
| Uso | Enterprise, banking | Web, mobile, API pubbliche |
| Complessità | Alta | Bassa |

<strong>WSDL (Web Service Description Language):</strong>
File XML che descrive formalmente un Web Service SOAP:
- Operazioni disponibili
- Parametri di input/output
- Indirizzo del servizio (endpoint)
Usato per generare automaticamente il client (stub).

<strong>OpenAPI / Swagger:</strong>
Standard per documentare API REST. Descrive endpoint, parametri, risposte in formato YAML/JSON.
Swagger UI genera documentazione interattiva navigabile dal browser.
    `,
    domande: [
      "Cos'è un Web Service e a cosa serve?",
      "Differenza tra SOAP e REST.",
      "Cos'è il WSDL?",
      "Cos'è OpenAPI/Swagger e perché si usa?",
      "Perché REST è diventato più popolare di SOAP?",
    ],
    qa: [
      { domanda: "Cos'è un Web Service?", risposta: "Un sistema software che espone funzionalità via HTTP con un'interfaccia standard, permettendo a applicazioni scritte in linguaggi diversi su piattaforme diverse di comunicare. Il Web Service nasconde i dettagli implementativi dietro un'interfaccia pubblica." },
      { domanda: "Differenza tra SOAP e REST?", risposta: "SOAP è un protocollo formale basato su XML con contratto WSDL obbligatorio — rigido ma con funzionalità avanzate per l'enterprise (sicurezza, transazioni). REST è uno stile architetturale leggero che usa HTTP con JSON — semplice, scalabile, preferito per API web e mobile." },
      { domanda: "Cos'è il WSDL?", risposta: "Web Services Description Language: file XML che descrive formalmente un servizio SOAP — le operazioni disponibili, i tipi di dati, i parametri e l'indirizzo dell'endpoint. Permette di generare automaticamente il client (stub) per chiamare il servizio." },
      { domanda: "Cos'è Swagger/OpenAPI?", risposta: "Standard per documentare API REST. Il file OpenAPI (YAML/JSON) descrive tutti gli endpoint, i parametri, i corpi delle richieste e le risposte. Swagger UI genera una pagina web interattiva che permette di esplorare e testare l'API dal browser." },
    ],
    daRicordare: [
      "Web Service = interoperabilità tra sistemi eterogenei via HTTP",
      "SOAP = XML + WSDL + WS-Security — enterprise, verboso",
      "REST = HTTP + JSON + stateless — leggero, usato ovunque oggi",
      "WSDL descrive il contratto SOAP. OpenAPI descrive il contratto REST",
      "Swagger UI = documentazione REST interattiva generata automaticamente",
    ],
    daNonDire: [
      "Non dire che SOAP è obsoleto — è ancora usato in banche e sanità",
      "Non confondere REST (architettura) con HTTP (protocollo) — REST usa HTTP ma non è HTTP",
    ],
    raccomandazioni: `Il confronto SOAP vs REST è quasi sempre chiesto — usa la tabella come schema mentale.
Cita esempi concreti: API di PayPal (SOAP storico), Google Maps API, Twitter API (REST).
OpenAPI/Swagger è un dettaglio moderno apprezzato dalla commissione.`,
  },

  "xml-json": {
    titolo: "XML e JSON",
    spiegazione: `
<strong>XML</strong> e <strong>JSON</strong> sono i due formati principali per lo scambio di dati strutturati tra applicazioni.

<strong>XML (eXtensible Markup Language):</strong>
Formato basato su tag come HTML, ma per dati strutturati (non presentazione).
<code>&lt;studente&gt;</code>
<code>  &lt;nome&gt;Mario&lt;/nome&gt;</code>
<code>  &lt;eta&gt;18&lt;/eta&gt;</code>
<code>  &lt;materie&gt;</code>
<code>    &lt;materia&gt;Informatica&lt;/materia&gt;</code>
<code>  &lt;/materie&gt;</code>
<code>&lt;/studente&gt;</code>

Caratteristiche XML:
- Auto-descrittivo (i tag spiegano il contenuto)
- Validabile con <em>DTD</em> o <em>XML Schema (XSD)</em>
- Trasformabile con <em>XSLT</em>
- Verboso (molto testo per pochi dati)
- Usato in SOAP, configurazioni (Maven, Spring), RSS, SVG

<strong>JSON (JavaScript Object Notation):</strong>
Formato testuale leggero derivato dalla sintassi degli oggetti JS.
<code>{ "studente": { "nome": "Mario", "eta": 18, "materie": ["Informatica"] } }</code>

Tipi supportati: string, number, boolean, null, array, object.

Caratteristiche JSON:
- Leggero e compatto (meno verboso di XML)
- Nativo in JavaScript (<code>JSON.parse()</code>, <code>JSON.stringify()</code>)
- Facilmente leggibile dagli umani
- Standard de facto per API REST

<strong>Confronto XML vs JSON:</strong>
| Aspetto | XML | JSON |
|---------|-----|------|
| Leggibilità | Buona | Ottima |
| Dimensione | Maggiore | Minore |
| Schema | DTD/XSD | JSON Schema |
| Attributi | Sì | No |
| Uso tipico | SOAP, config, documenti | REST API, web, mobile |

<strong>Parsing in Java:</strong>
XML: DOM (Document Object Model), SAX (event-based), JAXB (mapping Java↔XML).
JSON: Jackson, Gson — serializzazione/deserializzazione automatica di oggetti Java.

<strong>Serializzazione:</strong>
Conversione di un oggetto in memoria in un formato testuale (JSON/XML) per trasporto o storage.
<em>Deserializzazione</em>: il processo inverso.
    `,
    domande: [
      "Differenza tra XML e JSON.",
      "Cos'è la serializzazione e la deserializzazione?",
      "Perché JSON è preferito a XML nelle API REST moderne?",
      "Come si valida un documento XML?",
    ],
    qa: [
      { domanda: "Differenza principale tra XML e JSON?", risposta: "XML usa tag annidati, è verboso ma supporta attributi, namespace, validazione con XSD e trasformazioni con XSLT. JSON è più compatto, usa coppie chiave-valore, è nativo in JavaScript e più facile da parsare. JSON è lo standard per le API REST; XML rimane usato in SOAP e documenti strutturati complessi." },
      { domanda: "Cos'è la serializzazione?", risposta: "Il processo di convertire un oggetto in memoria in un formato testuale (JSON, XML) o binario per trasmetterlo sulla rete o salvarlo. La deserializzazione è il processo inverso: ricostruire l'oggetto dal formato serializzato. In Java si usa Jackson per JSON, JAXB per XML." },
      { domanda: "Cos'è XSD?", risposta: "XML Schema Definition: documento che definisce la struttura valida di un file XML — quali elementi sono permessi, in quale ordine, con quali tipi di dati. Permette di validare automaticamente i documenti XML rispetto al contratto definito." },
    ],
    daRicordare: [
      "JSON = leggero, compatto, nativo JS, usato in REST. XML = verboso, potente, usato in SOAP",
      "JSON.parse() → stringa JSON in oggetto. JSON.stringify() → oggetto in stringa JSON",
      "Serializzazione = oggetto → testo. Deserializzazione = testo → oggetto",
      "XSD valida XML. JSON Schema valida JSON",
      "Jackson/Gson in Java per gestire JSON. JAXB per XML",
    ],
    daNonDire: [
      "Non dire che XML è obsoleto — è ancora usato in molti sistemi enterprise e configurazioni",
      "Non confondere XML (dati) con HTML (presentazione) — entrambi usano tag ma scopi diversi",
    ],
    raccomandazioni: `Il confronto XML/JSON è classico — usa la tabella come riferimento.
Porta esempi concreti di struttura JSON e XML per lo stesso dato.
Cita Jackson/Gson per dimostrare conoscenza pratica della serializzazione in Java.`,
  },

};
