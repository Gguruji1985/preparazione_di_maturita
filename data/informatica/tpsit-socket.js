// data/informatica/tpsit-socket.js
var TOPIC_SOCKET = {

  "socket-tcp": {
    titolo: "Socket TCP",
    spiegazione: `
Un <strong>socket</strong> è un'interfaccia software che permette la comunicazione tra processi, anche su macchine diverse, tramite la rete. È il punto terminale di una connessione di rete.

<strong>Identificazione di un socket:</strong>
Un socket è identificato da una coppia: <em>indirizzo IP + numero di porta</em>.
Una connessione TCP è identificata univocamente da: IP sorgente + porta sorgente + IP destinazione + porta destinazione.

<strong>Socket TCP — flusso lato server:</strong>
1. <code>socket()</code> — crea il socket
2. <code>bind()</code> — associa il socket a IP e porta
3. <code>listen()</code> — mette il socket in ascolto di connessioni in arrivo
4. <code>accept()</code> — accetta una connessione in arrivo (bloccante) → restituisce nuovo socket per quella connessione
5. <code>recv()</code> / <code>send()</code> — riceve/invia dati
6. <code>close()</code> — chiude la connessione

<strong>Socket TCP — flusso lato client:</strong>
1. <code>socket()</code> — crea il socket
2. <code>connect()</code> — avvia il three-way handshake con il server
3. <code>send()</code> / <code>recv()</code> — invia/riceve dati
4. <code>close()</code> — chiude la connessione

<strong>Modello client-server con socket TCP:</strong>
Il server crea un <em>welcoming socket</em> su una porta nota (es. 80).
Per ogni client connesso, <code>accept()</code> crea un nuovo <em>connection socket</em> dedicato.
Il server può gestire più client:
- <em>Sequenzialmente</em>: un client alla volta (semplice ma lento)
- <em>Con thread</em>: un thread per ogni client (parallelismo reale)
- <em>Con select/epoll</em>: I/O multiplexing — un thread gestisce più socket (efficiente)

<strong>Socket bloccanti vs non bloccanti:</strong>
- <em>Bloccanti</em>: le operazioni (accept, recv) bloccano il thread fino al completamento
- <em>Non bloccanti</em>: restituiscono immediatamente anche se non ci sono dati (usati con select/epoll)
    `,
    domande: [
      "Cos'è un socket e come si identifica?",
      "Descrivere le fasi di una connessione TCP socket lato server.",
      "Come un server gestisce più client contemporaneamente con i socket?",
      "Differenza tra socket bloccante e non bloccante.",
      "Cos'è il welcoming socket e il connection socket?",
    ],
    qa: [
      { domanda: "Cos'è un socket?", risposta: "È l'astrazione software che rappresenta il punto terminale di una comunicazione di rete. Identificato da IP + porta, permette ai processi di inviare e ricevere dati tramite TCP o UDP. È l'interfaccia tra l'applicazione e il livello trasporto." },
      { domanda: "Differenza tra welcoming socket e connection socket?", risposta: "Il welcoming socket (o listening socket) è fisso sulla porta del server e accetta le richieste di connessione. Per ogni client che si connette, accept() crea un nuovo connection socket dedicato per quella comunicazione. Il welcoming socket rimane disponibile per nuove connessioni." },
      { domanda: "Come gestire più client con i thread?", risposta: "Il server rimane in loop su accept(). Quando arriva una connessione, crea un nuovo thread che gestisce quel client sul connection socket dedicato. Il thread principale torna subito ad accettare nuove connessioni. Ogni client ha il proprio thread indipendente." },
      { domanda: "Cos'è il multiplexing I/O con select?", risposta: "Tecnica che permette a un singolo thread di monitorare più socket contemporaneamente. select() blocca finché almeno uno dei socket è pronto per operazioni (lettura/scrittura). Più efficiente dei thread per molte connessioni con basso traffico (es. chat server)." },
    ],
    daRicordare: [
      "Socket = IP + porta. Connessione TCP = IP:porta sorgente + IP:porta destinazione",
      "Server: socket → bind → listen → accept → recv/send → close",
      "Client: socket → connect → send/recv → close",
      "accept() è bloccante e crea un nuovo connection socket per ogni client",
      "Multi-client: thread per client (semplice) o select/epoll (efficiente)",
      "Welcoming socket = sempre in ascolto. Connection socket = per ogni client",
    ],
    daNonDire: [
      "Non confondere socket TCP (orientato connessione) con socket UDP (senza connessione)",
      "Non dire che bind() è necessario per il client — di solito il client non fa bind()",
    ],
    raccomandazioni: `Descrivi sempre il flusso completo lato server (socket→bind→listen→accept→recv/send→close) — è quasi sempre chiesto.
La gestione multi-client con thread è un argomento classico di TPSIT.
Collega i socket al three-way handshake TCP per mostrare che capisci cosa succede sotto.`,
  },

  "socket-udp": {
    titolo: "Socket UDP",
    spiegazione: `
I socket <strong>UDP</strong> si usano per comunicazioni veloci dove non è richiesta la garanzia di consegna.

<strong>Differenze rispetto a TCP:</strong>
UDP è connectionless: non c'è handshake, non c'è connessione stabilita.
Ogni datagramma è indipendente e può arrivare fuori ordine o non arrivare.

<strong>Flusso socket UDP lato server:</strong>
1. <code>socket(AF_INET, SOCK_DGRAM)</code> — crea socket UDP
2. <code>bind()</code> — associa a IP e porta
3. <code>recvfrom()</code> — riceve datagramma (e indirizzo del mittente)
4. <code>sendto()</code> — invia datagramma a indirizzo specificato
5. <code>close()</code>

<strong>Flusso socket UDP lato client:</strong>
1. <code>socket(AF_INET, SOCK_DGRAM)</code>
2. <code>sendto(server_address, data)</code> — invia direttamente (no connect)
3. <code>recvfrom()</code> — riceve risposta
4. <code>close()</code>

Non c'è <code>listen()</code> né <code>accept()</code> — non c'è connessione.
<code>sendto()</code> specifica ogni volta l'indirizzo destinazione.
<code>recvfrom()</code> restituisce anche l'indirizzo del mittente.

<strong>Quando usare UDP:</strong>
- DNS: query piccole e veloci
- Streaming audio/video: meglio perdere un frame che avere ritardo
- VoIP: la latenza è più dannosa della perdita di qualche pacchetto
- Giochi online: aggiornamenti di stato continui, la perdita di uno è accettabile
- DHCP: broadcast di scoperta prima di avere un IP

<strong>Affidabilità su UDP:</strong>
Se serve affidabilità con UDP, si implementa a livello applicativo:
- Numeri di sequenza sui datagrammi
- ACK e ritrasmissioni gestite dall'applicazione
- Esempio: QUIC (HTTP/3) implementa affidabilità su UDP con migliori performance di TCP.
    `,
    domande: [
      "Differenza tra socket TCP e socket UDP.",
      "Descrivere il flusso di una comunicazione UDP lato server.",
      "Quando è preferibile usare UDP invece di TCP?",
      "Cos'è QUIC e perché usa UDP?",
    ],
    qa: [
      { domanda: "Perché UDP non ha connect() e accept()?", risposta: "Perché UDP è connectionless: non stabilisce una connessione prima di inviare dati. Ogni datagramma specifica esplicitamente sorgente e destinazione con sendto()/recvfrom(). Non c'è stato di connessione da mantenere." },
      { domanda: "Come si implementa affidabilità su UDP?", risposta: "A livello applicativo: si aggiungono numeri di sequenza ai datagrammi, si inviano ACK, si gestiscono ritrasmissioni per i pacchetti persi, e si riordinano i pacchetti fuori sequenza. QUIC (base di HTTP/3) è l'esempio più avanzato: implementa tutto questo su UDP, con prestazioni migliori di TCP." },
    ],
    daRicordare: [
      "UDP socket: socket → bind → recvfrom/sendto → close (no listen, no accept)",
      "sendto() e recvfrom() specificano/restituiscono l'indirizzo ogni volta",
      "UDP: veloce, no garanzie. Usato per DNS, streaming, VoIP, giochi",
      "QUIC (HTTP/3) = affidabilità implementata sopra UDP",
    ],
    daNonDire: [
      "Non dire che UDP è 'sbagliato' — è una scelta architetturale consapevole",
      "Non confondere il socket UDP con quello TCP nelle sequenze di chiamate",
    ],
    raccomandazioni: `Confronta sempre TCP e UDP socket quando parli di socket in TPSIT.
QUIC/HTTP3 è un argomento moderno che impressiona la commissione.
Porta esempi di quando UDP è la scelta giusta (streaming, DNS).`,
  },

  "programmazione-socket": {
    titolo: "Programmazione di Rete in Java/Python",
    spiegazione: `
Esempi pratici di socket in <strong>Java</strong> e <strong>Python</strong>, i linguaggi più usati in TPSIT.

<strong>Socket TCP in Java:</strong>

Lato server:
<code>ServerSocket server = new ServerSocket(8080);</code>
<code>Socket client = server.accept(); // bloccante</code>
<code>BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));</code>
<code>PrintWriter out = new PrintWriter(client.getOutputStream(), true);</code>
<code>String msg = in.readLine();</code>
<code>out.println("Risposta: " + msg);</code>
<code>client.close();</code>

Lato client:
<code>Socket s = new Socket("localhost", 8080);</code>
<code>PrintWriter out = new PrintWriter(s.getOutputStream(), true);</code>
<code>BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));</code>
<code>out.println("Ciao server");</code>
<code>String risposta = in.readLine();</code>
<code>s.close();</code>

<strong>Multi-client con Thread in Java:</strong>
<code>while(true) {</code>
<code>  Socket c = server.accept();</code>
<code>  new Thread(() -> gestisciClient(c)).start();</code>
<code>}</code>

<strong>Socket TCP in Python:</strong>

Lato server:
<code>import socket</code>
<code>s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</code>
<code>s.bind(('', 8080))</code>
<code>s.listen(5)</code>
<code>conn, addr = s.accept()</code>
<code>data = conn.recv(1024)</code>
<code>conn.send(b'Risposta')</code>
<code>conn.close()</code>

<strong>Protocolli applicativi personalizzati:</strong>
Nei progetti TPSIT si definisce spesso un protocollo custom su TCP:
- Definire il formato dei messaggi (es. JSON, testo con delimitatore)
- Definire i tipi di richiesta e risposta
- Gestire la chiusura della connessione (es. messaggio "QUIT")

<strong>Eccezioni da gestire:</strong>
- <code>SocketException</code>: errore di rete o connessione chiusa
- <code>IOException</code>: errore I/O sul socket
- Usare try-with-resources o finally per chiudere sempre i socket
    `,
    domande: [
      "Scrivere il codice di un server TCP in Java/Python che risponde ai client.",
      "Come si gestisce un server multi-client con i thread in Java?",
      "Quali eccezioni bisogna gestire nella programmazione con socket?",
      "Cos'è un protocollo applicativo custom e come si progetta?",
    ],
    qa: [
      { domanda: "Perché chiudere sempre i socket nel finally?", risposta: "Un socket non chiuso occupa risorse di sistema (file descriptor, porte). Se il programma lancia un'eccezione prima della close(), il socket rimane aperto. Il blocco finally (o try-with-resources in Java) garantisce la chiusura anche in caso di errore." },
      { domanda: "Come si progetta un protocollo su TCP?", risposta: "Si definisce il formato dei messaggi (es. JSON terminato da newline, o lunghezza prefissata), i tipi di richiesta (es. LOGIN, SEND, QUIT), le risposte del server (es. OK, ERROR, BYE), e come gestire la disconnessione. Il protocollo deve essere documentato chiaramente." },
    ],
    daRicordare: [
      "Java: ServerSocket per il server, Socket per il client",
      "Python: socket.socket(AF_INET, SOCK_STREAM) per TCP",
      "Chiudere sempre i socket (finally / try-with-resources)",
      "Multi-client: new Thread per ogni client in Java",
      "recv() può restituire dati parziali — bisogna ciclare fino al messaggio completo",
    ],
    daNonDire: [
      "Non dimenticare di chiudere il socket nel codice — la commissione lo nota",
      "Non assumere che recv() riceva sempre il messaggio completo in un'unica chiamata",
    ],
    raccomandazioni: `Conosci il codice a memoria per un semplice server echo TCP in Java o Python.
La gestione multi-client con thread è un esercizio classico del quinto anno.
Parla della gestione delle eccezioni — mostra che sai scrivere codice robusto.`,
  },

};
