// data/informatica/informatica-reti.js
var TOPIC_RETI = {

  "osi": {
    titolo: "Modello OSI",
    spiegazione: `
Il <strong>modello OSI (Open Systems Interconnection)</strong> è uno standard ISO che suddivide le funzioni di rete in <strong>7 livelli</strong>, ognuno con responsabilità precise.

<strong>I 7 livelli (dal basso verso l'alto):</strong>

<em>1 — Fisico:</em> trasmissione dei bit grezzi sul mezzo fisico (cavi, onde radio). Definisce tensioni, frequenze, connettori.

<em>2 — Data Link:</em> trasferimento affidabile di frame tra nodi adiacenti. Gestisce indirizzamento MAC, rilevamento errori (CRC), controllo di flusso. Protocolli: Ethernet, Wi-Fi (802.11).

<em>3 — Rete:</em> instradamento dei pacchetti tra reti diverse. Indirizzamento logico (IP). Dispositivo: router. Protocolli: IP, ICMP, ARP.

<em>4 — Trasporto:</em> comunicazione end-to-end tra processi. Segmentazione, riassemblaggio, controllo errori, controllo flusso. Protocolli: TCP (affidabile), UDP (veloce, non affidabile).

<em>5 — Sessione:</em> gestione delle sessioni di comunicazione. Apertura, mantenimento, chiusura di sessioni.

<em>6 — Presentazione:</em> traduzione, cifratura e compressione dei dati. Formati: JPEG, MP3, SSL/TLS.

<em>7 — Applicazione:</em> interfaccia per le applicazioni utente. Protocolli: HTTP, FTP, SMTP, DNS, DHCP.

<strong>Mnemonica:</strong> "Per Fare Reti Tante Sessioni Presentano Applicazioni"
(Fisico, Data link, Rete, Trasporto, Sessione, Presentazione, Applicazione)
    `,
    domande: [
      {
        domanda: "Descrivere i 7 livelli del modello OSI con le rispettive funzioni.",
        risposta: "Il modello OSI è una struttura teorica a sette livelli: Fisico (trasmissione bit), Data Link (indirizzamento MAC e frame), Rete (instradamento pacchetti IP), Trasporto (connessione end-to-end TCP/UDP), Sessione (gestione dialoghi), Presentazione (formattazione e cifratura dati) e Applicazione (interfaccia utente come HTTP). Ogni livello comunica con il corrispondente del sistema remoto e offre servizi al livello superiore, garantendo l'interoperabilità tra sistemi diversi. Questa scomposizione modulare facilita lo sviluppo di protocolli e la risoluzione dei problemi di rete isolando le diverse funzionalità."
      },
      {
        domanda: "Qual è la differenza tra livello 3 e livello 4?",
        risposta: "Il livello 3 (Rete) si occupa dell'instradamento dei pacchetti attraverso diverse reti interconnesse, utilizzando indirizzi logici come l'IP e dispositivi come i router per determinare il percorso migliore. Il livello 4 (Trasporto), invece, si occupa della comunicazione logica tra processi applicativi residenti su host diversi, gestendo la segmentazione dei dati, il controllo degli errori e il controllo del flusso. In sintesi, il livello 3 garantisce che i dati arrivino all'host corretto (host-to-host), mentre il livello 4 garantisce che arrivino all'applicazione corretta sul sistema di destinazione (process-to-process)."
      },
      {
        domanda: "A quale livello OSI opera un router? E uno switch?",
        risposta: "Il router opera tipicamente al livello 3 (Rete) del modello OSI, poiché basa le sue decisioni di inoltro sugli indirizzi IP contenuti nei pacchetti per instradarli tra reti diverse. Lo switch opera invece al livello 2 (Data Link), utilizzando gli indirizzi fisici MAC memorizzati nei frame per inoltrare i dati solo alla porta specifica a cui è collegato il destinatario, riducendo così il traffico inutile e le collisioni. Esistono anche switch di livello 3 (L3 Switch) che integrano alcune funzioni di routing, ma la distinzione classica rimane fondamentale per comprendere l'architettura delle reti."
      },
      {
        domanda: "Qual è la funzione del livello Data Link?",
        risposta: "Il livello Data Link (livello 2) ha il compito principale di garantire un trasferimento affidabile dei dati attraverso un collegamento fisico diretto tra due nodi adiacenti. Organizza i bit provenienti dal livello fisico in strutture logiche chiamate 'frame', gestisce l'indirizzamento fisico tramite i MAC address e implementa meccanismi di rilevamento degli errori (come il CRC) e di controllo del flusso. Inoltre, si occupa dell'accesso al mezzo condiviso (MAC - Media Access Control) per evitare che più dispositivi trasmettano contemporaneamente causando interferenze, come avviene nei protocolli Ethernet o Wi-Fi."
      },
      {
        domanda: "Perché il modello OSI è stato creato?",
        risposta: "Il modello OSI è stato creato dall'ISO (International Organization for Standardization) per fornire uno standard universale che permettesse la comunicazione tra sistemi informatici di produttori diversi, che in precedenza utilizzavano architetture proprietarie chiuse. L'obiettivo era favorire l'interoperabilità e la modularità: definendo interfacce chiare tra i livelli, è possibile aggiornare o cambiare un protocollo a un certo livello (ad esempio passare dal rame alla fibra ottica al livello fisico) senza dover modificare i livelli superiori (come l'applicazione web). Sebbene il modello TCP/IP sia quello effettivamente implementato in Internet, l'OSI rimane il riferimento didattico e tecnico fondamentale per l'analisi delle reti."
      }
    ],
    qa: [
      { domanda: "A quale livello OSI opera un router?", risposta: "Il router opera al livello 3 (Rete). Legge gli indirizzi IP nei pacchetti e decide il percorso migliore per inoltrarli verso la destinazione." },
      { domanda: "A quale livello opera uno switch?", risposta: "Lo switch opera al livello 2 (Data Link). Usa gli indirizzi MAC per inoltrare i frame solo alla porta corretta, riducendo le collisioni rispetto all'hub." },
      { domanda: "Qual è la differenza tra TCP e UDP?", risposta: "TCP (livello 4) è orientato alla connessione: garantisce la consegna ordinata e senza errori tramite handshake e acknowledgment. UDP è senza connessione: è più veloce ma non garantisce la consegna. TCP per web/email, UDP per streaming/gaming." },
      { domanda: "Cos'è un indirizzo MAC?", risposta: "È un identificatore fisico univoco assegnato alla scheda di rete (NIC) dal produttore. Opera al livello 2. È formato da 48 bit (6 byte) in esadecimale. Non è instradabile su Internet." },
    ],
    daRicordare: [
      "7 livelli: Fisico, Data Link, Rete, Trasporto, Sessione, Presentazione, Applicazione",
      "Router = livello 3 | Switch = livello 2 | Hub = livello 1",
      "TCP = affidabile, orientato connessione | UDP = veloce, non affidabile",
      "Indirizzo MAC = livello 2 | Indirizzo IP = livello 3",
      "Mnemonica: Per Fare Reti Tante Sessioni Presentano Applicazioni",
    ],
    daNonDire: [
      "Non confondere router (livello 3) con switch (livello 2) — errore comunissimo",
      "Non dire che il modello OSI è usato direttamente in Internet — in pratica si usa TCP/IP, OSI è il modello teorico",
      "Non dimenticare che i livelli 5 e 6 sono spesso assorbiti dalle applicazioni moderne",
    ],
    raccomandazioni: `
Memorizza i 7 livelli con la mnemonica. La commissione chiede quasi sempre quali dispositivi operano a quale livello.
Collega subito al modello TCP/IP spiegando che OSI è il modello teorico e TCP/IP quello pratico.
    `,
  },

  "tcpip": {
    titolo: "Modello TCP/IP",
    spiegazione: `
Il <strong>modello TCP/IP</strong> è il modello pratico su cui si basa Internet. Ha <strong>4 livelli</strong> (a volte descritti come 5).

<strong>I 4 livelli TCP/IP e corrispondenza con OSI:</strong>

<em>1 — Accesso alla rete</em> (= OSI livelli 1+2): gestione dell'hardware e dei frame locali. Ethernet, Wi-Fi.

<em>2 — Internet</em> (= OSI livello 3): indirizzamento e instradamento con IP. Protocolli: IP, ICMP, ARP.

<em>3 — Trasporto</em> (= OSI livello 4): comunicazione end-to-end. TCP e UDP.

<em>4 — Applicazione</em> (= OSI livelli 5+6+7): protocolli usati dalle applicazioni. HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH.

<strong>TCP — Three-Way Handshake:</strong>
1. Client invia SYN (synchronize)
2. Server risponde SYN-ACK
3. Client risponde ACK
→ La connessione è stabilita

<strong>UDP:</strong> nessun handshake, nessuna conferma di ricezione. Usato per streaming, VoIP, gaming online.

<strong>Porte TCP/UDP comuni:</strong>
- 80 = HTTP | 443 = HTTPS | 21 = FTP | 22 = SSH
- 25 = SMTP | 110 = POP3 | 143 = IMAP | 53 = DNS | 67/68 = DHCP
    `,
    domande: [
      {
        domanda: "Quanti livelli ha il modello TCP/IP? Come corrispondono ai livelli OSI?",
        risposta: "Il modello TCP/IP originale è composto da 4 livelli: Accesso alla Rete (che accorpa i livelli Fisico e Data Link dell'OSI), Internet (corrispondente al livello di Rete), Trasporto (stessa funzione dell'OSI) e Applicazione (che include i livelli di Sessione, Presentazione e Applicazione dell'OSI). Questa struttura è più snella e riflette l'implementazione reale dei protocolli di Internet. Mentre l'OSI è nato come standard formale, il TCP/IP si è evoluto sul campo diventando il protocollo dominante grazie alla sua flessibilità e robustezza. In molti testi moderni si usa un modello ibrido a 5 livelli per una spiegazione più dettagliata della parte hardware."
      },
      {
        domanda: "Spiegare il three-way handshake TCP.",
        risposta: "Il three-way handshake è la procedura utilizzata dal protocollo TCP per stabilire una connessione affidabile tra due host. Inizia con il client che invia un pacchetto SYN (Synchronize) per richiedere l'apertura della sessione; il server risponde con un pacchetto SYN-ACK (Synchronize-Acknowledgment) per confermare la ricezione e dare il proprio consenso; infine, il client invia un ultimo pacchetto ACK (Acknowledgment). Questo scambio di tre passaggi garantisce che entrambi i dispositivi siano pronti a trasmettere, abbiano sincronizzato i numeri di sequenza per l'ordinamento dei dati e abbiano verificato che il canale di comunicazione sia bidirezionale e funzionante."
      },
      {
        domanda: "Qual è la differenza tra TCP e UDP? Quando si usa ciascuno?",
        risposta: "La differenza principale risiede nell'affidabilità e nel controllo. Il TCP è un protocollo orientato alla connessione che garantisce che tutti i dati arrivino integri e nell'ordine corretto tramite meccanismi di conferma (ACK) e ritrasmissione; si usa per applicazioni dove la perdita di dati è inaccettabile, come web (HTTP) o email (SMTP). L'UDP, invece, è un protocollo senza connessione che invia dati 'al meglio' senza verificarne la ricezione; è molto più veloce e leggero del TCP, ed è ideale per applicazioni in tempo reale dove un piccolo ritardo o una perdita parziale sono preferibili a una ritrasmissione lenta, come nello streaming video, nel gaming online o nel VoIP."
      },
      {
        domanda: "Cosa sono le porte? Citare alcune porte note.",
        risposta: "Le porte sono identificatori numerici a 16 bit (da 0 a 65535) utilizzati al livello di Trasporto per indirizzare i dati verso un'applicazione o un servizio specifico all'interno di un host che possiede un unico indirizzo IP. Esse permettono il multiplexing, ovvero la gestione contemporanea di più connessioni diverse (ad esempio navigare sul web e scaricare la posta nello stesso momento). Alcune porte standard 'well-known' sono: la porta 80 per il traffico HTTP, la 443 per l'HTTPS sicuro, la 21 per il trasferimento file FTP, la 22 per l'accesso remoto SSH e la 53 per le query DNS. Senza le porte, un computer non saprebbe a quale programma consegnare i dati ricevuti dalla rete."
      }
    ],
    qa: [
      { domanda: "Cos'è il three-way handshake?", risposta: "È la procedura di apertura di una connessione TCP: 1) il client invia SYN, 2) il server risponde con SYN-ACK, 3) il client conferma con ACK. Solo dopo questi 3 scambi la connessione è attiva e i dati possono essere trasmessi." },
      { domanda: "Perché usare UDP invece di TCP?", risposta: "UDP si usa quando la velocità è più importante dell'affidabilità: streaming video/audio, giochi online, VoIP. Un piccolo ritardo nella musica è tollerabile, ma una ripetizione del pacchetto causerebbe interruzioni peggiori." },
      { domanda: "Cos'è una porta?", risposta: "È un numero (0-65535) che identifica un processo specifico sulla macchina di destinazione. Permette a più servizi di girare sullo stesso IP. Le porte 0-1023 sono riservate (well-known ports)." },
    ],
    daRicordare: [
      "TCP/IP ha 4 livelli: Accesso rete, Internet, Trasporto, Applicazione",
      "Three-way handshake: SYN → SYN-ACK → ACK",
      "HTTP=80, HTTPS=443, SSH=22, FTP=21, DNS=53",
      "TCP = affidabile e ordinato | UDP = veloce e senza garanzie",
    ],
    daNonDire: [
      "Non dire che TCP/IP e OSI sono la stessa cosa — sono modelli diversi (pratico vs teorico)",
      "Non confondere porta e protocollo — la porta identifica il servizio, il protocollo definisce come comunicano",
    ],
    raccomandazioni: `
Collega TCP/IP a esempi quotidiani: quando digiti un URL il browser usa HTTP (porta 80) o HTTPS (porta 443) sopra TCP.
Sapere il three-way handshake a memoria — viene chiesto spessissimo.
    `,
  },

  "protocolli": {
    titolo: "Protocolli Applicativi",
    spiegazione: `
I <strong>protocolli applicativi</strong> definiscono come le applicazioni si scambiano dati sulla rete.

<strong>HTTP / HTTPS:</strong>
- HTTP (HyperText Transfer Protocol): protocollo per il web. Senza cifratura.
- HTTPS: HTTP + TLS/SSL. Cifratura end-to-end. Porta 443.
- Metodi HTTP: GET (leggi), POST (invia dati), PUT (aggiorna), DELETE (cancella).
- Codici di risposta: 200 OK, 301 Redirect, 404 Not Found, 500 Server Error.

<strong>DNS (Domain Name System):</strong>
Traduce nomi di dominio (www.google.com) in indirizzi IP (142.250.x.x). Porta 53. Risoluzione gerarchica: client → resolver locale → root server → TLD server → authoritative server.

<strong>DHCP (Dynamic Host Configuration Protocol):</strong>
Assegna automaticamente un indirizzo IP ai dispositivi della rete. Porta 67 (server) / 68 (client). Sequenza DORA: Discover → Offer → Request → Acknowledge.

<strong>FTP (File Transfer Protocol):</strong>
Trasferimento di file. Porta 21 (controllo), porta 20 (dati). SFTP e FTPS sono versioni sicure.

<strong>SMTP / POP3 / IMAP (email):</strong>
- SMTP (porta 25/587): invio email
- POP3 (porta 110): scarica email sul client e le elimina dal server
- IMAP (porta 143): accede alle email lasciandole sul server (sincronizzazione)

<strong>SSH (Secure Shell):</strong>
Accesso remoto sicuro a un terminale. Porta 22. Cifra tutta la comunicazione.
    `,
    domande: [
      {
        domanda: "Qual è la differenza tra HTTP e HTTPS?",
        risposta: "L'HTTP è un protocollo di trasferimento ipertestuale che trasmette i dati in chiaro, rendendoli intercettabili da chiunque si trovi lungo il percorso di rete. L'HTTPS è l'evoluzione sicura dell'HTTP, che integra il protocollo TLS/SSL per cifrare la comunicazione tra client e server tramite crittografia asimmetrica e simmetrica. Oltre alla riservatezza, l'HTTPS garantisce l'autenticità del sito web visitato tramite certificati digitali e l'integrità dei dati scambiati, impedendo manomissioni durante il trasporto. Per questo motivo, l'uso dell'HTTPS (porta 443) è oggi obbligatorio per qualsiasi sito che gestisca credenziali, pagamenti o dati personali."
      },
      {
        domanda: "Come funziona il DNS?",
        risposta: "Il DNS opera come una sorta di 'rubrica telefonica' di Internet, traducendo i nomi di dominio mnemonici (come www.example.it) in indirizzi IP numerici necessari per l'instradamento dei pacchetti. Quando un utente digita un URL, il resolver locale interroga una gerarchia di server: partendo dai Root server, passando per i server TLD (.it, .com) fino ad arrivare al server autorevole del dominio specifico che fornisce l'indirizzo IP finale. Questo sistema è distribuito globalmente e utilizza massicciamente la cache per velocizzare le risposte successive. Senza il DNS, la navigazione sul web sarebbe estremamente difficile per gli esseri umani, che dovrebbero ricordare stringhe di numeri per ogni sito."
      },
      {
        domanda: "Cosa fa il DHCP? Descrivere la sequenza DORA.",
        risposta: "Il DHCP è un protocollo che automatizza la configurazione dei parametri di rete (indirizzo IP, subnet mask, gateway, DNS) per i dispositivi che si connettono a una LAN. Il processo avviene in quattro fasi, note come sequenza DORA: Discover (il client invia un broadcast per cercare un server), Offer (il server risponde offrendo un IP disponibile), Request (il client richiede formalmente quell'IP al server) e Acknowledge (il server conferma l'assegnazione e invia i parametri completi). Questo sistema elimina la necessità di configurazioni manuali (statiche) soggette a errori e permette una gestione efficiente degli indirizzi IP dinamici, specialmente in reti pubbliche o aziendali molto affollate."
      },
      {
        domanda: "Differenza tra POP3 e IMAP.",
        risposta: "Entrambi sono protocolli per la ricezione di email, ma con filosofie di gestione opposte. Il POP3 (Post Office Protocol v3) è progettato per scaricare i messaggi dal server al dispositivo locale e solitamente cancellarli dal server subito dopo; è adatto se si usa un solo client e si vuole risparmiare spazio sul server. L'IMAP (Internet Message Access Protocol), invece, permette di visualizzare e gestire i messaggi direttamente sul server, sincronizzando lo stato (letti, inviati, bozze) su tutti i dispositivi utilizzati dall'utente (PC, smartphone, tablet). Quest'ultimo è diventato lo standard moderno poiché permette una gestione flessibile della posta da più postazioni mantenendo i dati centralizzati e sicuri sul cloud."
      },
      {
        domanda: "Citare i principali protocolli applicativi con le relative porte.",
        risposta: "I protocolli applicativi più comuni operano su porte standardizzate per essere facilmente riconosciuti dai sistemi di rete. Tra questi troviamo l'HTTP sulla porta 80 e l'HTTPS sulla 443 per il web; il DNS sulla porta 53 per la risoluzione dei nomi; il protocollo SSH sulla 22 per l'amministrazione remota sicura. Per la gestione della posta elettronica si utilizzano l'SMTP sulla 25 o 587 per l'invio, il POP3 sulla 110 e l'IMAP sulla 143 per la ricezione. Altri protocolli importanti includono l'FTP (porta 21) per il trasferimento file e il DHCP (porte 67 e 68) per la configurazione automatica degli IP. Conoscere queste porte è fondamentale per la configurazione di firewall e servizi di rete."
      }
    ],
    qa: [
      { domanda: "Come funziona la risoluzione DNS?", risposta: "Il client chiede al resolver locale. Se non conosce la risposta, il resolver chiede a un root server, che indica il TLD server (es. .com), che indica l'authoritative server del dominio, che restituisce l'IP. Il risultato viene messo in cache." },
      { domanda: "Cosa fa il DHCP?", risposta: "Assegna automaticamente IP, subnet mask, gateway e DNS ai dispositivi che si connettono alla rete. Senza DHCP ogni dispositivo dovrebbe essere configurato manualmente. La sequenza è DORA: Discover (broadcast), Offer (server offre IP), Request (client accetta), Acknowledge (server conferma)." },
      { domanda: "Differenza tra POP3 e IMAP?", risposta: "POP3 scarica le email sul dispositivo e le elimina dal server — pensato per un solo dispositivo. IMAP le mantiene sul server e le sincronizza su tutti i dispositivi. Oggi si usa quasi sempre IMAP." },
    ],
    daRicordare: [
      "HTTP=80 (testo), HTTPS=443 (cifrato con TLS)",
      "DNS=53: traduce nomi → IP",
      "DHCP: sequenza DORA — assegna IP automaticamente",
      "SMTP=invio email | POP3=scarica ed elimina | IMAP=sincronizza",
      "SSH=22: terminale remoto sicuro",
    ],
    daNonDire: [
      "Non confondere SMTP (invio) con POP3/IMAP (ricezione)",
      "Non dire che HTTP è sicuro — è in chiaro, HTTPS è sicuro",
      "Non dimenticare che DNS usa UDP (per query veloci) ma può usare TCP per trasferimenti di zone",
    ],
    raccomandazioni: `
Quando parli di sicurezza nelle reti, collega subito HTTPS e SSH come esempi di protocolli sicuri.
Il DNS è spesso oggetto di domande trasversali (sicurezza: DNS poisoning; reti: risoluzione nomi).
    `,
  },

  "indirizzamento": {
    titolo: "Indirizzamento IP",
    spiegazione: `
<strong>IPv4:</strong> indirizzo a 32 bit, scritto come 4 ottetti decimali separati da punti.
Es: 192.168.1.100

<strong>Classi IPv4 (sistema classful, storicamente):</strong>
- Classe A: 1.0.0.0 – 126.0.0.0 → reti grandi
- Classe B: 128.0.0.0 – 191.255.0.0 → reti medie
- Classe C: 192.0.0.0 – 223.255.255.0 → reti piccole

<strong>Indirizzi privati (non instradabili su Internet):</strong>
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

<strong>Subnet mask:</strong> definisce quanti bit appartengono alla rete e quanti all'host.
Es: 255.255.255.0 = /24 → 254 host utilizzabili

<strong>Notazione CIDR:</strong> 192.168.1.0/24 indica subnet mask a 24 bit.

<strong>Subnetting:</strong> dividere una rete in sottoreti più piccole.
Formula host: 2^n − 2 (n = bit riservati agli host; si sottraggono indirizzo rete e broadcast)

<strong>NAT (Network Address Translation):</strong>
Traduce indirizzi IP privati in un IP pubblico per accedere a Internet.
Permette a molti dispositivi di condividere un solo IP pubblico.

<strong>IPv6:</strong> indirizzo a 128 bit in esadecimale.
Es: 2001:0db8:85a3::8a2e:0370:7334
Creato per risolvere l'esaurimento degli indirizzi IPv4.
    `,
    domande: [
      {
        domanda: "Cos'è un indirizzo IP? Differenza tra IPv4 e IPv6.",
        risposta: "Un indirizzo IP è un identificatore logico univoco assegnato a ogni dispositivo collegato a una rete informatica che utilizza il protocollo IP. L'IPv4 (Internet Protocol versione 4) utilizza indirizzi a 32 bit, solitamente espressi in quattro numeri decimali separati da punti (es. 192.168.1.1), il che limita il numero di indirizzi possibili a circa 4 miliardi. L'IPv6 è l'evoluzione del protocollo, progettato per superare l'esaurimento degli indirizzi IPv4; utilizza 128 bit ed è scritto in otto gruppi di cifre esadecimali (es. 2001:db8:...). Oltre a uno spazio di indirizzamento pressoché infinito, l'IPv6 introduce miglioramenti nell'instradamento, nella sicurezza (IPsec integrato) e nella configurazione automatica dei dispositivi."
      },
      {
        domanda: "Cos'è la subnet mask e come si usa?",
        risposta: "La subnet mask è un numero a 32 bit che lavora in coppia con l'indirizzo IP per definire quale parte dell'indirizzo identifica la rete e quale identifica lo specifico host all'interno di quella rete. Viene applicata tramite un'operazione logica di AND bit a bit: i bit impostati a '1' nella maschera indicano la porzione di rete, mentre i bit a '0' indicano la porzione host. Ad esempio, una maschera 255.255.255.0 (/24) indica che i primi tre byte sono fissi per la rete, lasciando l'ultimo byte per assegnare fino a 254 indirizzi diversi ai computer collegati. Senza la subnet mask, i dispositivi non saprebbero se un destinatario si trova nella stessa rete locale o se il pacchetto deve essere inviato al gateway per raggiungere una rete esterna."
      },
      {
        domanda: "Cosa sono gli indirizzi IP privati? Perché esistono?",
        risposta: "Gli indirizzi IP privati sono tre intervalli di indirizzi (definiti dalla RFC 1918) riservati esclusivamente all'uso interno alle LAN e che non vengono instradati dai router pubblici su Internet. Essi includono le classi 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Questi indirizzi sono stati creati per far fronte alla scarsità di indirizzi IPv4 pubblici, permettendo a miliardi di dispositivi (come quelli di una casa o di un ufficio) di comunicare localmente senza consumare indirizzi globali. Per accedere a Internet, questi dispositivi 'nascondono' il proprio IP privato dietro un unico IP pubblico tramite la tecnica del NAT eseguita dal router di confine."
      },
      {
        domanda: "Cos'è il NAT e a cosa serve?",
        risposta: "Il NAT (Network Address Translation) è una tecnica fondamentale che permette a una rete privata di connettersi a una rete pubblica (come Internet) utilizzando un numero limitato di indirizzi IP pubblici, spesso uno solo. Quando un pacchetto esce dalla LAN, il router sostituisce l'indirizzo IP privato del mittente con il proprio IP pubblico, memorizzando in una tabella di traduzione quale porta locale ha effettuato la richiesta. Quando riceve la risposta, il router consulta la tabella e reindirizza i dati al dispositivo corretto all'interno della rete. Il NAT non solo ha permesso di ritardare l'esaurimento degli indirizzi IPv4, ma offre anche un primo livello di sicurezza, poiché i dispositivi interni non sono direttamente raggiungibili dall'esterno senza una configurazione esplicita (port forwarding)."
      },
      {
        domanda: "Come si calcola il numero di host di una subnet?",
        risposta: "Il numero di host utilizzabili in una sottorete dipende dal numero di bit riservati alla parte host nella subnet mask. Se indichiamo con 'n' il numero di bit a zero nella maschera, il calcolo totale degli indirizzi è 2 elevato alla n. Tuttavia, per ottenere il numero di dispositivi effettivamente collegabili, bisogna sottrarre sempre 2: uno per l'indirizzo di rete (che identifica la subnet stessa ed è il primo indirizzo dell'intervallo) e uno per l'indirizzo di broadcast (usato per inviare messaggi a tutti gli host della rete ed è l'ultimo dell'intervallo). Ad esempio, in una maschera /28 (4 bit host), avremo 2^4 = 16 indirizzi totali, di cui solo 14 sono realmente utilizzabili per i computer o le interfacce dei router."
      }
    ],
    qa: [
      { domanda: "Quanti host si possono avere in una rete /24?", risposta: "Una rete /24 ha 8 bit per gli host, quindi 2^8 = 256 indirizzi. Si sottraggono l'indirizzo di rete (es. 192.168.1.0) e il broadcast (192.168.1.255), restano 254 host utilizzabili." },
      { domanda: "Cos'è il NAT?", risposta: "Il NAT (Network Address Translation) permette a tutti i dispositivi di una rete privata di accedere a Internet usando un unico indirizzo IP pubblico. Il router traduce gli indirizzi privati in quello pubblico in uscita, e fa l'operazione inversa per il traffico in entrata." },
      { domanda: "Perché IPv6?", risposta: "IPv4 ha ~4 miliardi di indirizzi, ormai esauriti. IPv6 ha 128 bit → 3.4 × 10^38 indirizzi, praticamente illimitati. Elimina la necessità del NAT e semplifica la configurazione (con autoconfiguration)." },
    ],
    daRicordare: [
      "IPv4 = 32 bit (4 ottetti) | IPv6 = 128 bit (8 gruppi esadecimali)",
      "Indirizzi privati: 10.x.x.x, 172.16-31.x.x, 192.168.x.x",
      "Subnet /24 → 254 host | /16 → 65534 host",
      "NAT: molteplici IP privati → un IP pubblico",
      "Host utilizzabili: 2^n − 2",
    ],
    daNonDire: [
      "Non dimenticare di sottrarre 2 quando calcoli gli host (rete + broadcast)",
      "Non confondere subnet mask con indirizzo IP — hanno formati simili ma ruoli diversi",
      "Non dire che IPv6 è 'più sicuro' per definizione — la sicurezza dipende da come viene configurato",
    ],
    raccomandazioni: `
Esercitati a fare subnetting manuale: dato 192.168.0.0/26, quanti host? (2^6−2=62).
La commissione di informatica quasi sempre chiede un calcolo di subnet.
    `,
  },

  "sicurezza": {
    titolo: "Sicurezza nelle Reti",
    spiegazione: `
<strong>Crittografia simmetrica:</strong>
Stessa chiave per cifrare e decifrare. Veloce, ma il problema è la distribuzione sicura della chiave.
Algoritmi: AES, DES (obsoleto), 3DES.

<strong>Crittografia asimmetrica (a chiave pubblica):</strong>
Coppia di chiavi: pubblica (distribuita a tutti) + privata (segreta).
Ciò che si cifra con la pubblica si decifra solo con la privata e viceversa.
Algoritmi: RSA, ECC.
Usata per: scambio di chiavi, firme digitali, certificati SSL/TLS.

<strong>HTTPS e TLS:</strong>
TLS (Transport Layer Security) cifra la comunicazione HTTP.
Processo: il server invia il certificato digitale → il client verifica l'autenticità → si negozia una chiave simmetrica (via asimmetrica) → la comunicazione prosegue cifrata con chiave simmetrica.

<strong>Firewall:</strong>
Filtra il traffico in entrata/uscita in base a regole (IP, porta, protocollo).
Tipi: packet filter, stateful inspection, application layer firewall (WAF).

<strong>VPN (Virtual Private Network):</strong>
Crea un tunnel cifrato su una rete pubblica. Permette di accedere a risorse private in modo sicuro da remoto.

<strong>Attacchi comuni:</strong>
- <em>SQL Injection</em>: inserimento di codice SQL malevolo in un form per manipolare il database.
- <em>XSS (Cross-Site Scripting)</em>: iniezione di script JavaScript in una pagina web per rubare cookie/sessioni.
- <em>Phishing</em>: sito/email falso che imita uno legittimo per rubare credenziali.
- <em>Man-in-the-Middle</em>: intercettazione del traffico tra client e server.
- <em>DoS/DDoS</em>: saturazione del server con richieste per renderlo irraggiungibile.
    `,
    domande: [
      {
        domanda: "Qual è la differenza tra crittografia simmetrica e asimmetrica?",
        risposta: "La crittografia simmetrica utilizza un'unica chiave segreta condivisa tra mittente e destinatario sia per cifrare che per decifrare il messaggio; è molto veloce ma presenta il rischio critico della distribuzione sicura della chiave iniziale. La crittografia asimmetrica, invece, utilizza una coppia di chiavi correlate: una pubblica, che può essere distribuita a chiunque, e una privata, che rimane segreta al proprietario. Ciò che viene cifrato con la chiave pubblica può essere decifrato solo con la corrispondente chiave privata, risolvendo brillantemente il problema dello scambio di chiavi ma richiedendo una potenza di calcolo molto superiore. Nei sistemi moderni come il TLS, si usano entrambe: l'asimmetrica per scambiare una chiave di sessione e la simmetrica per il trasferimento effettivo dei dati."
      },
      {
        domanda: "Come funziona HTTPS/TLS?",
        risposta: "L'HTTPS protegge la navigazione web attraverso il protocollo TLS in diverse fasi. Innanzitutto, il server invia al browser il proprio certificato digitale contenente la chiave pubblica, firmato da un'autorità di certificazione (CA) affidabile. Il browser verifica l'autenticità del certificato e, se valido, genera una chiave simmetrica temporanea, la cifra con la chiave pubblica del server e gliela invia. Il server decifra la chiave con la sua chiave privata; da quel momento in poi, client e server possiedono la stessa chiave segreta e possono scambiarsi dati in modo veloce e sicuro utilizzando la crittografia simmetrica. Questo processo garantisce la riservatezza, l'integrità dei dati e l'identità certa del proprietario del sito."
      },
      {
        domanda: "Cos'è un firewall e come funziona?",
        risposta: "Un firewall è un dispositivo hardware o un software di sicurezza che agisce come barriera tra una rete fidata (come una LAN aziendale) e una rete non fidata (come Internet). Esso analizza ogni pacchetto di dati in entrata e in uscita e decide se permetterne il passaggio o bloccarlo in base a un set di regole predefinite, definite 'policy'. I firewall possono filtrare il traffico in base a diversi criteri: indirizzi IP di origine e destinazione, numeri di porta o tipo di protocollo. I modelli più avanzati, chiamati firewall stateful o di nuova generazione (NGFW), sono in grado di analizzare anche lo stato delle connessioni attive e il contenuto applicativo del traffico per rilevare minacce nascoste."
      },
      {
        domanda: "Cosa si intende per SQL Injection? Come si previene?",
        risposta: "La SQL Injection è una tecnica di attacco in cui un malintenzionato inserisce frammenti di codice SQL malevolo all'interno di campi di input di un'applicazione web (come form di login o barre di ricerca) che non sono stati correttamente sanificati. Se l'applicazione concatena direttamente l'input utente nella query, l'attaccante può alterare il comando originale per bypassare l'autenticazione, rubare dati dal database o addirittura cancellarli. Per prevenire questo attacco è fondamentale utilizzare i 'Prepared Statements' o query parametrizzate, che separano nettamente la logica della query dai dati inseriti dall'utente, rendendo il codice SQL inerte e impedendone l'esecuzione non autorizzata. Altre misure includono la validazione degli input e l'uso del principio del minimo privilegio per l'utente del database."
      },
      {
        domanda: "Cos'è una VPN?",
        risposta: "Una VPN (Virtual Private Network) è una tecnologia che estende una rete privata attraverso una rete pubblica, come Internet, creando un canale di comunicazione cifrato e sicuro chiamato 'tunnel'. Grazie alla cifratura end-to-end, i dati trasmessi rimangono invisibili a chiunque provi a intercettarli lungo il percorso. Una VPN viene utilizzata principalmente per due scopi: permettere ai dipendenti di un'azienda di accedere da remoto alle risorse della rete locale in modo sicuro o nascondere l'indirizzo IP reale e la posizione geografica dell'utente per motivi di privacy o per aggirare restrizioni di rete. I protocolli più utilizzati per creare VPN sono OpenVPN, IPsec e il moderno WireGuard."
      }
    ],
    qa: [
      { domanda: "Differenza tra crittografia simmetrica e asimmetrica?", risposta: "Simmetrica: stessa chiave per cifrare e decifrare. Veloce ma il problema è condividere la chiave in modo sicuro. Asimmetrica: coppia chiave pubblica/privata. Risolve il problema dello scambio ma è più lenta. In pratica si usano insieme: asimmetrica per scambiare la chiave, simmetrica per i dati (es. TLS)." },
      { domanda: "Come funziona TLS?", risposta: "1) Il server invia il certificato digitale (con la sua chiave pubblica). 2) Il client verifica il certificato tramite una CA (Certificate Authority). 3) Si scambiano le chiavi in modo sicuro (usando la crittografia asimmetrica). 4) La comunicazione prosegue cifrata con una chiave simmetrica condivisa." },
      { domanda: "Cos'è la SQL Injection e come si previene?", risposta: "L'attaccante inserisce codice SQL in un campo di input (es. username) per manipolare la query del database. Prevenzione: usare prepared statements/query parametrizzate, mai concatenare input utente direttamente nella query, validare e sanificare tutti gli input." },
    ],
    daRicordare: [
      "Simmetrica: AES (stessa chiave) | Asimmetrica: RSA (coppia pubblica/privata)",
      "TLS: asimmetrica per scambio chiave → simmetrica per i dati",
      "Firewall: filtra traffico per IP, porta, protocollo",
      "SQL Injection → usa prepared statements | XSS → escaping dell'output",
      "VPN = tunnel cifrato su rete pubblica",
    ],
    daNonDire: [
      "Non dire che HTTPS rende un sito 'sicuro' in senso assoluto — cifra solo il trasporto",
      "Non confondere autenticazione (chi sei) con autorizzazione (cosa puoi fare)",
      "Non dimenticare di menzionare le contromisure quando descrivi un attacco",
    ],
    raccomandazioni: `
La sicurezza è un argomento trasversale: collegala sempre al contesto (web → HTTPS, database → SQL injection, reti → firewall/VPN).
Porta un esempio concreto per ogni attacco per dimostrare comprensione reale, non solo definizioni.
    `,
  },

};
