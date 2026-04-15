// data/informatica/sistemi-reti-protocolli.js
var TOPIC_PROTOCOLLI = {

  "suite-tcpip": {
    titolo: "Suite TCP/IP",
    spiegazione: `
La <strong>suite TCP/IP</strong> è il modello protocollare reale usato in Internet, più semplice dell'OSI: 4 livelli invece di 7.

<strong>Livelli TCP/IP:</strong>
1. <em>Accesso alla rete</em> (= OSI L1+L2): Ethernet, Wi-Fi, trasmissione fisica
2. <em>Internet</em> (= OSI L3): IP, ICMP, ARP — instradamento pacchetti
3. <em>Trasporto</em> (= OSI L4): TCP, UDP — comunicazione end-to-end
4. <em>Applicazione</em> (= OSI L5+L6+L7): HTTP, FTP, SMTP, DNS, SSH…

<strong>IP (Internet Protocol):</strong>
Protocollo di livello 3 — instradamento. Caratteristiche:
- <em>Connectionless</em>: non stabilisce connessione prima di inviare
- <em>Best effort</em>: non garantisce consegna, ordine, né tempi
- Ogni pacchetto è indipendente e può seguire percorsi diversi
- Versioni: <strong>IPv4</strong> (32 bit, ~4 miliardi di indirizzi) e <strong>IPv6</strong> (128 bit, praticamente illimitati)

<strong>IPv4 — formato indirizzo:</strong>
4 ottetti in decimale: <code>192.168.1.1</code>
Classi storiche (oggi superate da CIDR):
- Classe A: 1.0.0.0 – 126.255.255.255 (grandi reti)
- Classe B: 128.0.0.0 – 191.255.255.255 (reti medie)
- Classe C: 192.0.0.0 – 223.255.255.255 (reti piccole)

Indirizzi privati (non instradabili su Internet):
- <code>10.0.0.0/8</code>
- <code>172.16.0.0/12</code>
- <code>192.168.0.0/16</code>

<strong>NAT (Network Address Translation):</strong>
Permette a più dispositivi con IP privato di condividere un unico IP pubblico.
Il router sostituisce l'IP privato con l'IP pubblico nelle comunicazioni verso Internet.

<strong>ICMP:</strong>
Protocollo di controllo — usato per messaggi di errore e diagnostica.
<code>ping</code> usa ICMP Echo Request/Reply.
<code>traceroute</code> usa ICMP TTL exceeded.
    `,
    domande: [
      "Confrontare il modello OSI con il modello TCP/IP.",
      "Cos'è IP e perché è definito 'best effort'?",
      "Differenza tra IPv4 e IPv6.",
      "Cos'è il NAT e perché è necessario?",
      "Cosa fa il comando ping e quale protocollo usa?",
    ],
    qa: [
      { domanda: "Cos'è TCP/IP?", risposta: "È la suite di protocolli su cui si basa Internet. Organizzata in 4 livelli: Accesso alla rete, Internet (IP), Trasporto (TCP/UDP), Applicazione. TCP/IP è il modello reale usato nella pratica; OSI è il modello teorico di riferimento." },
      { domanda: "Perché IP è 'best effort'?", risposta: "Perché non garantisce che i pacchetti arrivino, arrivino nell'ordine corretto, o arrivino in tempi definiti. Si occupa solo di instradare ogni pacchetto verso la destinazione. L'affidabilità, se necessaria, è delegata a TCP (livello trasporto)." },
      { domanda: "Cos'è NAT?", risposta: "Network Address Translation: il router traduce gli indirizzi IP privati della rete locale in un unico indirizzo IP pubblico nelle comunicazioni verso Internet. Risolve il problema della scarsità di indirizzi IPv4 e aggiunge un livello di sicurezza (i dispositivi interni non sono direttamente visibili dall'esterno)." },
      { domanda: "Differenza tra IPv4 e IPv6?", risposta: "IPv4 usa indirizzi a 32 bit (~4 miliardi), ormai esauriti. IPv6 usa 128 bit, con uno spazio di indirizzi praticamente illimitato. IPv6 include anche sicurezza integrata (IPsec), autoconfigurazione e nessun bisogno di NAT." },
    ],
    daRicordare: [
      "TCP/IP ha 4 livelli; OSI ne ha 7 — TCP/IP è il modello usato in pratica",
      "IP = connectionless + best effort: nessuna garanzia di consegna",
      "IPv4 = 32 bit. IPv6 = 128 bit (praticamente illimitato)",
      "Indirizzi privati (192.168.x.x, 10.x.x.x) non sono instradabili su Internet",
      "NAT = più dispositivi condividono un IP pubblico tramite il router",
      "ICMP = diagnostica rete (ping, traceroute)",
    ],
    daNonDire: [
      "Non confondere IP (livello 3, instradamento) con TCP (livello 4, affidabilità)",
      "Non dire che IPv4 ha indirizzi illimitati — sono esauriti",
      "Non confondere indirizzo privato con indirizzo pubblico",
    ],
    raccomandazioni: `Distingui sempre IP (best effort, livello 3) da TCP (affidabile, livello 4) — è una domanda frequente.
NAT è un argomento pratico che la commissione apprezza: spiega il problema della scarsità IPv4.
Cita IPv6 come soluzione a lungo termine.`,
  },

  "tcp-udp": {
    titolo: "TCP e UDP",
    spiegazione: `
I protocolli di <strong>livello trasporto</strong> gestiscono la comunicazione end-to-end tra processi su macchine diverse. I due principali sono TCP e UDP.

<strong>TCP (Transmission Control Protocol):</strong>
Protocollo <em>orientato alla connessione</em> e <em>affidabile</em>.

<em>Three-way handshake</em> (apertura connessione):
1. Client → Server: <code>SYN</code>
2. Server → Client: <code>SYN-ACK</code>
3. Client → Server: <code>ACK</code>

Garanzie di TCP:
- <em>Consegna garantita</em>: ogni segmento viene confermato (ACK); se manca il riscontro, viene ritrasmesso
- <em>Ordine garantito</em>: i segmenti vengono riordinati se arrivano fuori sequenza (numeri di sequenza)
- <em>Controllo di flusso</em>: il ricevente regola la velocità del mittente (finestra scorrevole)
- <em>Controllo della congestione</em>: riduce la velocità se la rete è congestionata (slow start, AIMD)

Usi tipici: HTTP/HTTPS, FTP, SMTP, SSH — dove i dati devono arrivare integri.

<strong>UDP (User Datagram Protocol):</strong>
Protocollo <em>connectionless</em> e <em>non affidabile</em>.
- Non stabilisce connessione
- Non garantisce consegna, ordine, né integrità
- Nessun ACK, nessuna ritrasmissione
- Velocissimo, overhead minimo

Usi tipici: DNS, streaming video/audio, VoIP, giochi online, DHCP — dove la velocità è prioritaria sulla perfezione.

<strong>Porte (Port numbers):</strong>
Identificano il processo/servizio sul dispositivo. 16 bit → 0-65535.
- 0-1023: <em>well-known ports</em> (riservate a servizi standard)
- 1024-49151: <em>registered ports</em>
- 49152-65535: <em>dynamic/ephemeral ports</em> (client)

Porte note:
- HTTP: 80 | HTTPS: 443 | FTP: 21 | SSH: 22
- SMTP: 25 | DNS: 53 | DHCP: 67/68 | POP3: 110 | IMAP: 143
    `,
    domande: [
      "Differenza tra TCP e UDP.",
      "Descrivere il three-way handshake di TCP.",
      "Cos'è una porta e a cosa serve?",
      "Quali applicazioni usano UDP e perché?",
      "Cos'è il controllo di flusso in TCP?",
    ],
    qa: [
      { domanda: "Differenza tra TCP e UDP?", risposta: "TCP è orientato alla connessione: garantisce consegna, ordine e integrità dei dati tramite ACK, ritrasmissioni e three-way handshake. UDP è connectionless: invia datagrammi senza garanzie, molto più veloce. TCP si usa dove servono dati integri (HTTP, email); UDP dove serve velocità (streaming, DNS, VoIP)." },
      { domanda: "Cos'è il three-way handshake?", risposta: "La procedura di apertura connessione TCP in tre passi: 1) Client invia SYN. 2) Server risponde con SYN-ACK. 3) Client conferma con ACK. Al termine entrambi hanno sincronizzato i numeri di sequenza e la connessione è stabilita." },
      { domanda: "Cos'è una porta?", risposta: "Un numero a 16 bit (0-65535) che identifica un processo specifico su un dispositivo. L'indirizzo IP identifica la macchina, la porta identifica il servizio. Es: IP 192.168.1.1 porta 80 = server web su quella macchina." },
      { domanda: "Perché DNS usa UDP?", risposta: "Le query DNS sono piccole e veloci. UDP elimina l'overhead del three-way handshake di TCP, rendendo le risoluzioni DNS molto più rapide. Se la risposta è persa, il client invia semplicemente una nuova query." },
    ],
    daRicordare: [
      "TCP = affidabile, ordinato, con connessione (handshake). UDP = veloce, senza garanzie",
      "Three-way handshake: SYN → SYN-ACK → ACK",
      "TCP usa ACK + ritrasmissioni per garantire la consegna",
      "Porta 80=HTTP, 443=HTTPS, 22=SSH, 21=FTP, 53=DNS, 25=SMTP",
      "Socket = IP + porta (identifica univocamente una connessione)",
      "UDP si usa per streaming, giochi, VoIP, DNS — velocità > affidabilità",
    ],
    daNonDire: [
      "Non dire che UDP è 'sbagliato' — è scelto intenzionalmente per performance",
      "Non confondere il numero di porta con l'indirizzo IP",
      "Non dimenticare che TCP ha overhead significativo rispetto a UDP",
    ],
    raccomandazioni: `Il confronto TCP/UDP è una domanda quasi certa — preparala bene.
Porta esempi concreti: HTTP usa TCP perché la pagina deve arrivare integra; streaming usa UDP perché un frame perso è meno grave di un ritardo.
Cita le porte principali — la commissione le chiede spesso.`,
  },

  "protocolli-applicativi": {
    titolo: "Protocolli Applicativi",
    spiegazione: `
I <strong>protocolli applicativi</strong> definiscono come le applicazioni comunicano sulla rete. Operano al livello 7 (applicazione) di OSI.

<strong>DNS (Domain Name System) — porta 53, UDP:</strong>
Traduce nomi di dominio (es. <code>google.com</code>) in indirizzi IP.
Gerarchia: root → TLD (.com, .it) → dominio → sottodominio.
Il client interroga il suo <em>resolver</em>, che interroga i server DNS a cascata (ricorsivo o iterativo).

<strong>HTTP/HTTPS — porta 80/443, TCP:</strong>
Protocollo per il trasferimento di pagine web. Stateless.
HTTPS aggiunge TLS per cifrare la comunicazione.

<strong>FTP (File Transfer Protocol) — porta 21 (controllo), 20 (dati), TCP:</strong>
Trasferisce file tra client e server. Usa due connessioni separate: una per i comandi, una per i dati.
<em>SFTP</em> (SSH FTP) e <em>FTPS</em> (FTP + TLS) sono versioni sicure.

<strong>SMTP (Simple Mail Transfer Protocol) — porta 25/587, TCP:</strong>
Invia email dal client al server e tra server. Solo invio.
POP3 (porta 110) e IMAP (porta 143) scaricano/accedono alle email ricevute.
IMAP è preferito: mantiene le email sul server, accessibili da più dispositivi.

<strong>SSH (Secure Shell) — porta 22, TCP:</strong>
Accesso remoto sicuro a shell di un server. Cifra tutta la comunicazione.
Sostituisce Telnet (non sicuro, testo in chiaro).

<strong>DHCP (Dynamic Host Configuration Protocol) — porta 67/68, UDP:</strong>
Assegna automaticamente indirizzi IP ai dispositivi nella rete.
Processo DORA: Discover → Offer → Request → Acknowledge.

<strong>SNMP (Simple Network Management Protocol) — porta 161, UDP:</strong>
Monitoraggio e gestione di dispositivi di rete (router, switch, server).
    `,
    domande: [
      "Cos'è il DNS e come funziona la risoluzione di un nome?",
      "Differenza tra SMTP, POP3 e IMAP.",
      "Cos'è DHCP e come assegna gli indirizzi IP?",
      "Perché SSH ha sostituito Telnet?",
      "Differenza tra FTP e SFTP.",
    ],
    qa: [
      { domanda: "Cos'è il DNS?", risposta: "Domain Name System: servizio distribuito che traduce nomi di dominio leggibili (es. google.com) in indirizzi IP numerici. Senza DNS dovremmo ricordare gli IP di tutti i siti. Funziona con una gerarchia di server: root, TLD, authoritative." },
      { domanda: "Differenza tra POP3 e IMAP?", risposta: "POP3 scarica le email sul dispositivo e le elimina dal server — accessibili solo da quel dispositivo. IMAP mantiene le email sul server e le sincronizza su tutti i dispositivi. IMAP è lo standard moderno (webmail, smartphone, PC tutti sincronizzati)." },
      { domanda: "Come funziona DHCP?", risposta: "Con il processo DORA: il client invia un Discover broadcast; i server DHCP rispondono con un Offer (IP disponibile); il client invia una Request per accettare; il server conferma con Acknowledge. Il client ottiene IP, subnet mask, gateway e DNS." },
      { domanda: "Perché usare SSH invece di Telnet?", risposta: "Telnet trasmette tutto in chiaro — credenziali, comandi e dati sono visibili a chiunque intercetti il traffico. SSH cifra l'intera sessione con crittografia asimmetrica per l'autenticazione e simmetrica per i dati. Oggi Telnet è considerato insicuro e non viene usato." },
    ],
    daRicordare: [
      "DNS porta 53 UDP — traduce nomi in IP",
      "HTTP 80, HTTPS 443, FTP 21, SSH 22, SMTP 25, DNS 53, DHCP 67/68",
      "IMAP > POP3: mantiene email sul server, multi-dispositivo",
      "DHCP: processo DORA (Discover, Offer, Request, Acknowledge)",
      "SSH cifra tutto; Telnet no — SSH ha sostituito Telnet",
      "FTP usa 2 connessioni: porta 21 (comandi) + porta 20 (dati)",
    ],
    daNonDire: [
      "Non confondere SMTP (invio) con IMAP/POP3 (ricezione)",
      "Non dire che FTP è sicuro — usare SFTP o FTPS per i dati sensibili",
      "Non confondere DNS con DHCP — DNS risolve nomi, DHCP assegna IP",
    ],
    raccomandazioni: `Memorizza le porte principali — quasi sempre chieste all'orale.
Distingui chiaramente SMTP (invio) da IMAP/POP3 (ricezione).
Il processo DORA di DHCP è un ottimo dettaglio tecnico che fa bella figura.`,
  },

};
