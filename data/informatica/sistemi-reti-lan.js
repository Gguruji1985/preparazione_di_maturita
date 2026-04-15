// data/informatica/sistemi-reti-lan.js
var TOPIC_LAN = {

  "topologie": {
    titolo: "Topologie di Rete",
    spiegazione: `
La <strong>topologia di rete</strong> descrive come i dispositivi sono collegati fisicamente o logicamente.

<strong>Topologie fisiche principali:</strong>

<em>Bus:</em> tutti i dispositivi condividono un unico cavo. Un segnale inviato raggiunge tutti.
- Vantaggio: semplice, poco cablaggio
- Svantaggio: una rottura blocca tutta la rete; collisioni frequenti

<em>Stella (Star):</em> ogni dispositivo è collegato a un nodo centrale (switch o hub).
- Vantaggio: guasto a un cavo isola solo quel dispositivo; facile gestione
- Svantaggio: guasto al nodo centrale blocca tutto
- È la topologia più usata nelle LAN moderne

<em>Anello (Ring):</em> i dispositivi formano un circolo chiuso; i dati viaggiano in un senso.
- Svantaggio: un guasto interrompe l'anello; difficile gestire aggiunte

<em>Maglia (Mesh):</em> ogni dispositivo è collegato a tutti gli altri (full mesh) o ad alcuni (partial mesh).
- Vantaggio: altissima ridondanza e affidabilità
- Svantaggio: costoso e complesso; usato in reti WAN e backbone

<em>Albero (Tree/Gerarchica):</em> combinazione di bus e stella; nodi organizzati in gerarchia.
- Usata in grandi reti aziendali

<strong>Topologia logica vs fisica:</strong>
La topologia fisica è come i cavi sono posati.
La topologia logica è come i dati viaggiano (es. Ethernet usa topologia fisica a stella ma logica a bus).

<strong>Dominio di collisione e di broadcast:</strong>
- <em>Dominio di collisione</em>: segmento di rete dove i frame possono collidere. Gli switch separano i domini di collisione.
- <em>Dominio di broadcast</em>: area dove un broadcast viene ricevuto da tutti. I router separano i domini di broadcast.
    `,
    domande: [
      "Descrivere le principali topologie di rete e i loro vantaggi/svantaggi.",
      "Qual è la topologia più usata nelle LAN moderne e perché?",
      "Differenza tra topologia fisica e topologia logica.",
      "Cos'è un dominio di collisione e come si riduce?",
    ],
    qa: [
      { domanda: "Qual è la topologia più comune oggi?", risposta: "La topologia a stella, con uno switch centrale. È robusta (un cavo rotto isola solo un dispositivo), facile da gestire e scalabile. È usata quasi universalmente nelle LAN moderne." },
      { domanda: "Cos'è un dominio di collisione?", risposta: "È un segmento di rete dove due dispositivi che trasmettono contemporaneamente causano una collisione. Gli hub creano un unico grande dominio di collisione; gli switch creano un dominio per porta, eliminando praticamente le collisioni." },
      { domanda: "Differenza tra hub e switch?", risposta: "L'hub invia i dati a tutte le porte (broadcast fisico) — crea un unico dominio di collisione. Lo switch apprende gli indirizzi MAC e invia i frame solo alla porta corretta — ogni porta è un dominio di collisione separato, molto più efficiente." },
    ],
    daRicordare: [
      "Stella = topologia più usata nelle LAN — switch centrale",
      "Maglia = massima ridondanza — usata in WAN e backbone",
      "Hub = un dominio di collisione. Switch = un dominio per porta",
      "Router = separa i domini di broadcast (divide le reti)",
      "Topologia fisica ≠ topologia logica",
    ],
    daNonDire: [
      "Non confondere hub (ripete su tutte le porte) con switch (commuta per MAC address)",
      "Non dire che la topologia a bus è ancora usata nelle LAN moderne",
    ],
    raccomandazioni: `La topologia a stella con switch è la risposta quasi sempre corretta per le LAN moderne.
Distingui sempre hub e switch — è una domanda classica.`,
  },

  "dispositivi": {
    titolo: "Dispositivi di Rete",
    spiegazione: `
I <strong>dispositivi di rete</strong> permettono la connessione, la commutazione e il routing del traffico.

<strong>Hub (livello 1 — Fisico):</strong>
Ripete il segnale su tutte le porte. Non distingue i dispositivi. Crea un unico dominio di collisione. Obsoleto.

<strong>Switch (livello 2 — Data Link):</strong>
Commuta i frame in base all'<em>indirizzo MAC</em>. Mantiene una <em>MAC address table</em>.
- Ogni porta è un dominio di collisione separato
- Supporta VLAN (Virtual LAN): segmentazione logica della rete

<strong>Router (livello 3 — Rete):</strong>
Instrada i pacchetti tra reti diverse in base all'<em>indirizzo IP</em>.
- Separa i domini di broadcast
- Implementa NAT, DHCP, firewall (in router casalinghi)
- Usa tabelle di routing (statiche o dinamiche: RIP, OSPF, BGP)

<strong>Access Point (AP):</strong>
Estende la rete via Wi-Fi (IEEE 802.11). Si collega a uno switch via Ethernet.

<strong>Firewall:</strong>
Filtra il traffico in entrata/uscita in base a regole. Può operare a livello 3 (IP) o 4 (TCP/UDP).

<strong>Modem:</strong>
Converte il segnale digitale (rete locale) in segnale analogico (linea telefonica/fibra) e viceversa.

<strong>Gateway:</strong>
Punto di accesso tra reti con protocolli diversi. Il router di casa funge da gateway verso internet.

<strong>NIC (Network Interface Card):</strong>
Scheda di rete nel dispositivo. Ha un indirizzo MAC univoco assegnato dal produttore.

<strong>Indirizzo MAC:</strong>
48 bit (6 ottetti esadecimali), es. <code>00:1A:2B:3C:4D:5E</code>.
I primi 3 ottetti = OUI (produttore), ultimi 3 = numero seriale.
Opera a livello 2 — usato nella stessa rete locale.
    `,
    domande: [
      "Differenza tra hub, switch e router.",
      "A quale livello OSI opera uno switch? E un router?",
      "Cos'è un indirizzo MAC e come si differenzia dall'IP?",
      "Cosa fa un firewall e a quale livello opera?",
      "Cos'è una VLAN e perché si usa?",
    ],
    qa: [
      { domanda: "Differenza tra switch e router?", risposta: "Lo switch opera a livello 2 (Data Link) e commuta frame in base agli indirizzi MAC nella stessa rete. Il router opera a livello 3 (Rete) e instrada pacchetti tra reti diverse in base agli indirizzi IP." },
      { domanda: "Cos'è una VLAN?", risposta: "Virtual LAN: segmentazione logica di una rete fisica. Permette di creare reti separate sullo stesso switch fisico. Migliora sicurezza (i dispositivi in VLAN diverse non comunicano direttamente) e performance (riduce broadcast)." },
      { domanda: "Cos'è il MAC address?", risposta: "Indirizzo fisico univoco a 48 bit della scheda di rete, assegnato dal produttore. Usato a livello 2 per la comunicazione nella stessa LAN. Non è modificabile (in teoria), a differenza dell'indirizzo IP che è logico e assegnabile." },
    ],
    daRicordare: [
      "Hub = L1 (fisico), Switch = L2 (MAC), Router = L3 (IP)",
      "Switch → MAC address table. Router → tabella di routing",
      "Switch separa domini di collisione. Router separa domini di broadcast",
      "MAC = indirizzo fisico (hardware). IP = indirizzo logico (software)",
      "VLAN = segmentazione logica su switch fisico",
    ],
    daNonDire: [
      "Non dire che hub e switch fanno la stessa cosa",
      "Non confondere MAC address (livello 2) con IP address (livello 3)",
    ],
    raccomandazioni: `La domanda hub/switch/router è classica — rispondila sempre citando il livello OSI.
Le VLAN sono un ottimo argomento avanzato da citare spontaneamente.`,
  },

  "cablaggio": {
    titolo: "Cablaggio e Standard LAN",
    spiegazione: `
Il <strong>cablaggio strutturato</strong> è l'insieme dei cavi, connettori e apparati passivi che formano l'infrastruttura fisica di rete.

<strong>Tipi di cavo:</strong>

<em>Doppino intrecciato (Twisted Pair):</em>
Il più usato nelle LAN.
- <em>UTP</em> (Unshielded): economico, il più comune
- <em>STP</em> (Shielded): schermato, maggiore immunità ai disturbi
- Categorie: Cat5e (100 Mbps/1 Gbps), <strong>Cat6</strong> (1 Gbps, standard attuale), Cat6a (10 Gbps), Cat7/8
- Connettore: <strong>RJ-45</strong>
- Pinout: T568A e T568B (standard di terminazione)
- Cavo diretto (straight): stesso standard ai due estremi → PC-Switch
- Cavo incrociato (crossover): standard diversi → PC-PC, Switch-Switch

<em>Cavo coassiale:</em>
Usato in reti bus (obsoleto per LAN) e per connessioni TV/antenna.

<em>Fibra ottica:</em>
Trasmette luce invece di segnale elettrico.
- <em>Single-mode</em> (SMF): un solo percorso di luce, distanze lunghissime (km), costosa
- <em>Multi-mode</em> (MMF): più percorsi, distanze brevi (centinaia di metri), meno costosa
- Immune alle interferenze elettromagnetiche, altissima larghezza di banda
- Usata in backbone, datacenter, connessioni WAN

<strong>Standard Ethernet (IEEE 802.3):</strong>
- <code>10BASE-T</code>: 10 Mbps su doppino
- <code>100BASE-TX</code> (Fast Ethernet): 100 Mbps
- <code>1000BASE-T</code> (Gigabit Ethernet): 1 Gbps — standard attuale LAN
- <code>10GBASE-T</code>: 10 Gbps

<strong>Wi-Fi (IEEE 802.11):</strong>
- 802.11n (Wi-Fi 4): fino a 600 Mbps, 2.4/5 GHz
- 802.11ac (Wi-Fi 5): fino a 3.5 Gbps, 5 GHz
- 802.11ax (Wi-Fi 6): fino a 9.6 Gbps, più efficiente in ambienti affollati
    `,
    domande: [
      "Tipi di cavi usati in una LAN e loro caratteristiche.",
      "Differenza tra cavo diretto e cavo incrociato.",
      "Quando si usa la fibra ottica invece del doppino?",
      "Qual è lo standard Ethernet più comune oggi?",
    ],
    qa: [
      { domanda: "Cos'è il cablaggio strutturato?", risposta: "È l'infrastruttura fisica di rete standardizzata: cavi, connettori, patch panel, organizzati in modo da supportare qualsiasi sistema (dati, voce, video). Segue standard internazionali (TIA/EIA, ISO/IEC)." },
      { domanda: "Differenza tra fibra single-mode e multi-mode?", risposta: "Single-mode usa un unico percorso di luce (laser), adatta per distanze molto lunghe (fino a decine di km). Multi-mode usa più percorsi, adatta per distanze brevi (fino a 500 m), meno costosa e usata in datacenter." },
      { domanda: "Perché si usa la fibra ottica?", risposta: "Per le sue caratteristiche: altissima banda passante, immune alle interferenze elettromagnetiche, nessuna attenuazione su lunghe distanze, e sicurezza (difficile da intercettare). È usata in backbone, datacenter e connessioni WAN." },
    ],
    daRicordare: [
      "UTP Cat6 con RJ-45 = standard LAN Gigabit attuale",
      "Cavo diretto (straight): PC-Switch. Cavo incrociato: PC-PC",
      "Fibra = immune a interferenze, altissima banda, lunga distanza",
      "Single-mode = lunga distanza (laser). Multi-mode = breve distanza",
      "IEEE 802.3 = Ethernet. IEEE 802.11 = Wi-Fi",
    ],
    daNonDire: [
      "Non dire che UTP e STP sono lo stesso cavo",
      "Non confondere le categorie Cat5e e Cat6 — Cat6 supporta Gigabit in modo affidabile",
    ],
    raccomandazioni: `Ricorda i nomi degli standard IEEE — la commissione li usa spesso.
Spiega perché la fibra è preferita al doppino nelle connessioni lunghe o ad alta banda.`,
  },

};
