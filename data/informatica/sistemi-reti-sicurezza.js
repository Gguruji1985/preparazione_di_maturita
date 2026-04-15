// data/informatica/sistemi-reti-sicurezza.js
var TOPIC_SICUREZZA_SISTEMI = {

  "crittografia": {
    titolo: "Crittografia",
    spiegazione: `
La <strong>crittografia</strong> è la scienza che studia tecniche per rendere i dati illeggibili a chi non è autorizzato.

<strong>Concetti base:</strong>
- <em>Plaintext</em>: dato originale leggibile
- <em>Ciphertext</em>: dato cifrato
- <em>Chiave</em>: parametro che controlla la cifratura/decifratura
- <em>Algoritmo (cipher)</em>: la procedura matematica di cifratura

<strong>Crittografia simmetrica:</strong>
Stessa chiave per cifrare e decifrare.
- Veloce ed efficiente per grandi quantità di dati
- Problema: come condividere la chiave in modo sicuro?
- Algoritmi: <strong>AES</strong> (Advanced Encryption Standard, 128/256 bit) — lo standard attuale, <strong>DES</strong> (obsoleto, 56 bit — troppo corto)

<strong>Crittografia asimmetrica (a chiave pubblica):</strong>
Coppia di chiavi matematicamente collegate: <em>chiave pubblica</em> (condivisibile) e <em>chiave privata</em> (segreta).
- Ciò che si cifra con la pubblica si decifra solo con la privata (e viceversa)
- Risolve il problema dello scambio di chiavi
- Più lenta della simmetrica → usata solo per scambiare la chiave simmetrica
- Algoritmi: <strong>RSA</strong> (Rivest–Shamir–Adleman), <strong>ECC</strong> (Elliptic Curve Cryptography)

<strong>Funzioni hash:</strong>
Trasformano input di qualsiasi lunghezza in output di lunghezza fissa (digest).
Proprietà: deterministiche, irreversibili, piccola modifica → grande cambiamento.
Usi: verifica integrità file, password storage, firma digitale.
Algoritmi: <strong>SHA-256</strong>, SHA-3 (sicuri). MD5, SHA-1 (obsoleti, vulnerabili).

<strong>Firma digitale:</strong>
Garantisce autenticità e integrità di un documento.
Processo: mittente cifra l'hash del documento con la sua chiave <em>privata</em> → il destinatario verifica con la chiave <em>pubblica</em> del mittente.

<strong>Certificati digitali e PKI:</strong>
Un certificato associa una chiave pubblica all'identità del proprietario, firmato da una <em>CA (Certificate Authority)</em> fidata.
HTTPS usa certificati TLS/SSL per autenticare il server.
    `,
    domande: [
      "Differenza tra crittografia simmetrica e asimmetrica.",
      "Cos'è una funzione hash e come si usa per le password?",
      "Come funziona la firma digitale?",
      "Cos'è un certificato digitale e chi lo rilascia?",
      "Perché AES è preferito a DES oggi?",
    ],
    qa: [
      { domanda: "Differenza tra simmetrica e asimmetrica?", risposta: "Simmetrica: stessa chiave per cifrare e decifrare — veloce ma il problema è condividere la chiave. Asimmetrica: coppia di chiavi pubblica/privata — risolve lo scambio di chiavi ma è lenta. In pratica si usa asimmetrica per scambiare la chiave simmetrica, poi simmetrica per i dati (es. TLS)." },
      { domanda: "Come si salvano le password in modo sicuro?", risposta: "Non si salva la password in chiaro né cifrata, ma il suo hash con salt. Il salt è un valore casuale aggiunto prima dell'hash — impedisce attacchi con rainbow table. All'autenticazione si ricalcola l'hash e si confronta." },
      { domanda: "Cos'è la firma digitale?", risposta: "Garantisce che un documento provenga davvero dal mittente e non sia stato alterato. Il mittente calcola l'hash del documento e lo cifra con la sua chiave privata. Il destinatario decifra con la chiave pubblica del mittente e confronta con il proprio hash del documento." },
      { domanda: "Cos'è TLS/SSL?", risposta: "Transport Layer Security (TLS, successor di SSL): protocollo crittografico che protegge la comunicazione su Internet. Usato in HTTPS. Combina crittografia asimmetrica (scambio chiave + autenticazione server tramite certificato) con simmetrica (cifratura dei dati)." },
    ],
    daRicordare: [
      "Simmetrica = stessa chiave (AES). Asimmetrica = coppia pubblica/privata (RSA)",
      "TLS usa entrambe: asimmetrica per autenticazione e scambio chiave, simmetrica per i dati",
      "Hash = funzione unidirezionale (SHA-256). Non è cifratura — non si può invertire",
      "Firma digitale: cifra l'hash con la chiave PRIVATA del mittente",
      "Salt + hash per le password — mai in chiaro, mai senza salt",
      "CA = Certificate Authority — ente che firma i certificati digitali",
    ],
    daNonDire: [
      "Non confondere hash (irreversibile) con cifratura (reversibile)",
      "Non dire che MD5 è sicuro — è vulnerabile e non si usa per sicurezza",
      "Non dire che la chiave pubblica è segreta — è pubblica per definizione",
    ],
    raccomandazioni: `La crittografia è un argomento trasversale — collegala a HTTPS, VPN, email sicura.
Il meccanismo TLS (asimmetrica per scambio chiave + simmetrica per dati) è una risposta elegante e completa.
Cita sempre SHA-256 come hash sicuro; menziona che MD5 è obsoleto.`,
  },

  "attacchi-difese": {
    titolo: "Attacchi e Difese",
    spiegazione: `
Conoscere i principali <strong>attacchi informatici</strong> è fondamentale per progettare sistemi sicuri.

<strong>Principali tipi di attacco:</strong>

<em>Malware:</em>
Software malevolo che si installa su un sistema senza consenso.
- <em>Virus</em>: si replica allegandosi a file eseguibili
- <em>Worm</em>: si propaga autonomamente nella rete senza file ospite
- <em>Trojan</em>: sembra legittimo ma contiene codice malevolo nascosto
- <em>Ransomware</em>: cifra i dati della vittima e chiede riscatto
- <em>Spyware</em>: raccoglie informazioni all'insaputa dell'utente

<em>Phishing:</em>
Email/siti falsi che imitano entità legittime per rubare credenziali o dati sensibili.
<em>Spear phishing</em>: phishing mirato a una persona specifica.

<em>DoS / DDoS (Denial of Service):</em>
Sovraccarica un server con richieste fino a renderlo irraggiungibile.
DDoS usa una <em>botnet</em> (rete di macchine compromesse) per amplificare l'attacco.

<em>Man-in-the-Middle (MitM):</em>
L'attaccante si interpone nella comunicazione tra due parti, leggendo o modificando i messaggi.
Contromisura: HTTPS + certificati digitali che autenticano il server.

<em>SQL Injection:</em>
Inserimento di codice SQL malevolo in un campo di input per manipolare il database.
Esempio: inserire <code>' OR '1'='1</code> in un campo login per bypassare l'autenticazione.
Contromisura: <em>prepared statements</em>, validazione input.

<em>Cross-Site Scripting (XSS):</em>
Iniezione di script malevoli in pagine web viste da altri utenti.
Contromisura: sanitizzare l'output, Content Security Policy.

<em>Brute Force:</em>
Prova tutte le combinazioni possibili di password.
Contromisura: password forti, rate limiting, autenticazione a due fattori (2FA).

<strong>Strumenti di difesa:</strong>
- <em>Firewall</em>: filtra traffico in base a regole (IP, porte, protocolli)
- <em>IDS/IPS</em>: Intrusion Detection/Prevention System — rileva/blocca attività sospette
- <em>Antivirus</em>: rileva e rimuove malware
- <em>VPN</em>: tunnel cifrato per comunicazioni sicure su reti pubbliche
- <em>DMZ</em>: zona demilitarizzata — segmento di rete isolato per server pubblici
- <em>Autenticazione a due fattori (2FA)</em>: qualcosa che sai + qualcosa che hai
    `,
    domande: [
      "Descrivere i principali tipi di malware.",
      "Cos'è un attacco SQL injection e come si previene?",
      "Differenza tra DoS e DDoS.",
      "Cos'è un attacco Man-in-the-Middle e come ci si difende?",
      "Cos'è un firewall e come funziona?",
      "Cos'è la DMZ in una rete aziendale?",
    ],
    qa: [
      { domanda: "Cos'è il ransomware?", risposta: "Un tipo di malware che cifra i file della vittima rendendoli inaccessibili, poi chiede un riscatto (ransom) in criptovaluta per fornire la chiave di decifratura. È una delle minacce informatiche più diffuse e dannose per aziende e privati." },
      { domanda: "Cos'è una SQL injection?", risposta: "Un attacco in cui l'attaccante inserisce codice SQL malevolo in un campo di input (es. login) per manipolare le query al database. Può permettere l'accesso non autorizzato, la modifica o cancellazione di dati. Si previene con prepared statements e validazione degli input." },
      { domanda: "Cos'è un firewall?", risposta: "Un sistema (hardware o software) che monitora e filtra il traffico di rete in base a regole predefinite (ACL — Access Control Lists). Può bloccare connessioni in base a IP, porta, protocollo, direzione. Protegge la rete da accessi non autorizzati." },
      { domanda: "Cos'è la 2FA?", risposta: "Autenticazione a due fattori: richiede due prove di identità di categorie diverse: qualcosa che sai (password), qualcosa che hai (smartphone, token OTP), o qualcosa che sei (biometrica). Anche se la password è rubata, l'attaccante non può accedere senza il secondo fattore." },
    ],
    daRicordare: [
      "Virus si allega a file. Worm si propaga da solo. Trojan si maschera da programma legittimo",
      "Ransomware = cifra i dati e chiede riscatto",
      "SQL Injection → prepared statements come contromisura",
      "DDoS usa botnet per amplificare l'attacco",
      "MitM contromisura: HTTPS con certificati digitali",
      "DMZ = zona isolata per server pubblici (web, mail) — riduce rischio interno",
    ],
    daNonDire: [
      "Non confondere virus (si allega a file) con worm (si propaga autonomamente)",
      "Non dire che un firewall è sufficiente da solo — serve sicurezza a più livelli",
      "Non confondere IDS (rileva) con IPS (rileva E blocca)",
    ],
    raccomandazioni: `Cita sempre una contromisura per ogni attacco — non basta descrivere il problema.
SQL Injection è molto chiesta in informatica — porta l'esempio del login bypass e i prepared statements.
La sicurezza a livelli (defence in depth) è un concetto chiave: firewall + IDS + antivirus + 2FA insieme.`,
  },

  "vpn-firewall": {
    titolo: "VPN e Firewall",
    spiegazione: `
<strong>Firewall</strong> e <strong>VPN</strong> sono due strumenti fondamentali per la sicurezza delle reti aziendali.

<strong>Firewall — tipi:</strong>

<em>Packet filter (stateless):</em>
Esamina ogni pacchetto singolarmente in base a regole su IP, porta, protocollo.
Non ricorda le connessioni precedenti — semplice ma limitato.

<em>Stateful inspection:</em>
Tiene traccia delle connessioni attive (tabella di stato).
Permette il traffico di ritorno per connessioni già stabilite — più sicuro.

<em>Application layer firewall (proxy / WAF):</em>
Analizza il contenuto a livello applicazione (es. HTTP, SQL).
WAF (Web Application Firewall) protegge dalle SQL injection, XSS, ecc.

<em>Next-Generation Firewall (NGFW):</em>
Combina stateful inspection, IPS, deep packet inspection, filtraggio applicazioni.

<strong>Regole firewall (ACL):</strong>
Liste di regole applicate nell'ordine: <em>permit</em> o <em>deny</em> basate su IP sorgente/destinazione, porta, protocollo.
Regola implicita finale: <em>deny all</em> — blocca tutto ciò che non è esplicitamente permesso.

<strong>VPN (Virtual Private Network):</strong>
Crea un <em>tunnel cifrato</em> su una rete pubblica (Internet), simulando una connessione privata.

<em>Come funziona:</em>
I dati vengono cifrati prima di uscire dal dispositivo, trasmessi cifrati su Internet, e decifrati all'altro capo del tunnel.

<em>Protocolli VPN principali:</em>
- <strong>IPsec</strong>: opera a livello 3, cifra i pacchetti IP. Usato in VPN site-to-site aziendali.
- <strong>SSL/TLS VPN</strong>: usa HTTPS, non richiede client speciale. Comodo per accesso remoto.
- <strong>OpenVPN</strong>: open source, flessibile, usa TLS.
- <strong>WireGuard</strong>: moderno, veloce, codice semplice.

<em>Tipi di VPN:</em>
- <em>Remote access VPN</em>: singolo utente si connette alla rete aziendale da remoto
- <em>Site-to-site VPN</em>: collega due sedi aziendali tramite Internet in modo sicuro

<strong>DMZ (Demilitarized Zone):</strong>
Segmento di rete posizionato tra Internet e la rete interna.
Contiene i server pubblici (web, mail, DNS).
Se compromessi, non hanno accesso diretto alla rete interna.
Implementata con due firewall o un firewall con tre interfacce.
    `,
    domande: [
      "Cos'è una VPN e perché si usa in azienda?",
      "Differenza tra firewall stateless e stateful.",
      "Cos'è la DMZ e perché si usa?",
      "Quali sono i principali protocolli VPN?",
      "Come funziona una regola ACL in un firewall?",
    ],
    qa: [
      { domanda: "Cos'è una VPN?", risposta: "Virtual Private Network: crea un tunnel cifrato tra il dispositivo e un server VPN (o tra due reti) attraverso Internet. Il traffico è cifrato e protetto da intercettazioni. Usata per connessione remota sicura alla rete aziendale e per privacy su reti pubbliche." },
      { domanda: "Differenza tra stateless e stateful firewall?", risposta: "Il firewall stateless esamina ogni pacchetto isolatamente in base a regole fisse (IP, porta). Il firewall stateful mantiene una tabella delle connessioni attive: permette automaticamente il traffico di ritorno di connessioni già stabilite, bloccando pacchetti non associati a connessioni valide." },
      { domanda: "Cos'è la DMZ?", risposta: "Una zona di rete intermedia tra Internet e la rete interna aziendale. I server accessibili pubblicamente (web, email, DNS) sono posti in DMZ: sono esposti a Internet ma isolati dalla rete interna. Se un server DMZ viene compromesso, l'attaccante non accede direttamente ai sistemi interni." },
    ],
    daRicordare: [
      "Firewall stateless = esamina singoli pacchetti. Stateful = tiene traccia delle sessioni",
      "ACL: regole in ordine, prima corrispondenza vince, deny all implicito alla fine",
      "VPN = tunnel cifrato su rete pubblica",
      "IPsec = VPN a livello 3 (site-to-site). SSL VPN = accesso remoto via browser",
      "DMZ = zona isolata per server pubblici — separa Internet dalla rete interna",
    ],
    daNonDire: [
      "Non dire che la VPN rende completamente anonimi — protegge la comunicazione, non l'identità",
      "Non confondere VPN (tunnel cifrato) con proxy (solo reindirizzamento traffico)",
    ],
    raccomandazioni: `La DMZ è un argomento molto apprezzato in Sistemi e Reti — descrivi la topologia con due firewall.
VPN site-to-site vs remote access è una distinzione classica da conoscere.
Collega il firewall alla sicurezza a livelli: non è l'unica difesa ma è il primo perimetro.`,
  },

};
