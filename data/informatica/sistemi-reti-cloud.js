// data/informatica/sistemi-reti-cloud.js
var TOPIC_CLOUD = {

  "virtualizzazione": {
    titolo: "Virtualizzazione",
    spiegazione: `
La <strong>virtualizzazione</strong> è la tecnologia che permette di eseguire più sistemi operativi o ambienti isolati su un unico hardware fisico.

<strong>Concetto base:</strong>
Un <em>hypervisor</em> (o VMM — Virtual Machine Monitor) astrae l'hardware fisico e lo presenta come risorse virtuali a più <em>macchine virtuali (VM)</em>.

<strong>Tipi di hypervisor:</strong>
<em>Tipo 1 (bare-metal):</em> gira direttamente sull'hardware, senza sistema operativo host.
Esempi: VMware ESXi, Microsoft Hyper-V, Xen. Usato in datacenter — più performante.

<em>Tipo 2 (hosted):</em> gira sopra un sistema operativo host come un'applicazione normale.
Esempi: VirtualBox, VMware Workstation. Usato per sviluppo e test.

<strong>Vantaggi della virtualizzazione:</strong>
- <em>Consolidamento server</em>: più VM su un server fisico → meno hardware, meno costi
- <em>Isolamento</em>: ogni VM è indipendente — un crash non influenza le altre
- <em>Portabilità</em>: una VM può essere spostata o copiata facilmente
- <em>Snapshot</em>: salvare lo stato corrente della VM per ripristini veloci
- <em>Disaster recovery</em>: ripristino rapido in caso di guasto

<strong>Container vs VM:</strong>
I <em>container</em> (es. Docker) virtualizzano a livello di sistema operativo invece che di hardware.
Più leggeri delle VM: condividono il kernel del SO host, si avviano in secondi, occupano meno spazio.
Le VM includono un intero SO guest (più isolamento, più overhead).
Kubernetes orchestra i container in produzione.

<strong>Rete virtuale:</strong>
Le VM possono comunicare tramite <em>switch virtuali</em> e <em>NIC virtuali</em> configurati dall'hypervisor.
Modalità: NAT (VM accede a Internet tramite l'host), Bridge (VM sulla stessa rete dell'host), Host-only (solo comunicazione tra VM e host).
    `,
    domande: [
      "Cos'è la virtualizzazione e quali sono i suoi vantaggi?",
      "Differenza tra hypervisor di tipo 1 e tipo 2.",
      "Differenza tra macchine virtuali e container.",
      "Cosa sono gli snapshot e a cosa servono?",
    ],
    qa: [
      { domanda: "Cos'è la virtualizzazione?", risposta: "Tecnologia che astrae le risorse hardware fisiche per creare ambienti virtuali isolati (VM o container). Permette di eseguire più sistemi operativi contemporaneamente su un unico server fisico, migliorando l'utilizzo dell'hardware e riducendo i costi." },
      { domanda: "Differenza tra VM e container?", risposta: "Una VM virtualizza l'intera macchina (hardware incluso) e include un SO guest completo — più isolamento ma più overhead. Un container virtualizza solo a livello di processo/SO, condivide il kernel dell'host — molto più leggero, si avvia in secondi, ma con minor isolamento." },
      { domanda: "Cos'è uno snapshot?", risposta: "Una 'fotografia' dello stato completo di una VM (disco, memoria, configurazione) in un preciso momento. Permette di ripristinare la VM a quello stato in caso di problemi. Usato per test, aggiornamenti rischiosi, backup rapidi." },
    ],
    daRicordare: [
      "Hypervisor T1 = bare-metal (su hardware, datacenter). T2 = hosted (sopra OS, sviluppo)",
      "VM = OS completo isolato. Container = processo isolato, kernel condiviso",
      "Docker = container. Kubernetes = orchestrazione container in produzione",
      "Vantaggi VM: isolamento, portabilità, snapshot, consolidamento server",
      "Container più veloci e leggeri delle VM; VM più isolate",
    ],
    daNonDire: [
      "Non confondere hypervisor T1 con T2 — hanno contesti d'uso diversi",
      "Non dire che container e VM sono la stessa cosa",
    ],
    raccomandazioni: `Il confronto VM vs container (Docker) è molto attuale — preparalo bene.
Cita i casi d'uso: VM per ambienti isolati completi, container per microservizi e deploy rapido.`,
  },

  "cloud-computing": {
    titolo: "Cloud Computing",
    spiegazione: `
Il <strong>cloud computing</strong> è l'erogazione di servizi informatici (server, storage, database, software) tramite Internet, a consumo, senza dover gestire infrastruttura fisica propria.

<strong>Modelli di servizio:</strong>

<em>IaaS (Infrastructure as a Service):</em>
Fornisce infrastruttura virtualizzata: VM, storage, rete. Il cliente gestisce OS e applicazioni.
Esempi: Amazon EC2, Google Compute Engine, Azure VMs.
Usato da: sysadmin, sviluppatori che vogliono controllo completo.

<em>PaaS (Platform as a Service):</em>
Fornisce una piattaforma per sviluppare e distribuire applicazioni. Il provider gestisce OS, runtime, middleware.
Esempi: Google App Engine, Heroku, Azure App Service.
Usato da: sviluppatori che vogliono concentrarsi sul codice.

<em>SaaS (Software as a Service):</em>
Applicazioni complete fruibili via browser. Il provider gestisce tutto.
Esempi: Gmail, Google Docs, Microsoft 365, Salesforce.
Usato da: utenti finali.

<strong>Modelli di deployment:</strong>
- <em>Public cloud</em>: risorse condivise tra più clienti (AWS, Azure, GCP) — economico, scalabile
- <em>Private cloud</em>: infrastruttura dedicata a una sola organizzazione — più controllo, più costoso
- <em>Hybrid cloud</em>: combinazione di public e private — flessibilità e controllo
- <em>Multi-cloud</em>: uso di più provider cloud contemporaneamente

<strong>Caratteristiche del cloud (NIST):</strong>
1. <em>On-demand self-service</em>: le risorse si ottengono autonomamente
2. <em>Broad network access</em>: accessibile da qualsiasi dispositivo
3. <em>Resource pooling</em>: risorse condivise tra più utenti (multi-tenancy)
4. <em>Rapid elasticity</em>: scala automaticamente con il carico
5. <em>Measured service</em>: paghi solo quello che usi (pay-per-use)

<strong>Vantaggi:</strong>
Riduzione CAPEX (costi hardware), scalabilità, alta disponibilità, aggiornamenti automatici.

<strong>Svantaggi:</strong>
Dipendenza dalla connessione, vendor lock-in, privacy e sicurezza dei dati, latenza.
    `,
    domande: [
      "Descrivere i tre modelli di servizio cloud: IaaS, PaaS, SaaS.",
      "Differenza tra public, private e hybrid cloud.",
      "Quali sono le caratteristiche fondamentali del cloud secondo il NIST?",
      "Vantaggi e svantaggi del cloud computing.",
      "Cos'è la scalabilità elastica nel cloud?",
    ],
    qa: [
      { domanda: "Differenza tra IaaS, PaaS e SaaS?", risposta: "IaaS fornisce infrastruttura virtuale (VM, storage) — il cliente gestisce OS e app. PaaS fornisce una piattaforma di sviluppo — il cliente gestisce solo il codice. SaaS fornisce applicazioni complete — il cliente usa e basta. Man mano che si sale, il provider gestisce di più." },
      { domanda: "Cos'è il pay-per-use?", risposta: "Il modello di pagamento cloud dove si paga solo per le risorse effettivamente consumate (ore di CPU, GB di storage, traffico). Elimina i costi fissi dell'infrastruttura propria e permette di scalare senza investimenti anticipati." },
      { domanda: "Cos'è il vendor lock-in?", risposta: "Il rischio di dipendere eccessivamente da un unico provider cloud, rendendo difficile o costoso migrare a un altro. Si mitiga usando standard aperti, container e architetture cloud-agnostic." },
      { domanda: "Differenza tra public e private cloud?", risposta: "Public cloud: risorse condivise tra molti clienti su infrastruttura del provider (AWS, Azure) — economico e scalabile. Private cloud: infrastruttura dedicata esclusivamente all'organizzazione — più controllo su sicurezza e compliance, ma più costoso." },
    ],
    daRicordare: [
      "IaaS = VM e infrastruttura. PaaS = piattaforma sviluppo. SaaS = app pronta",
      "Public cloud = condiviso + economico. Private = dedicato + costoso. Hybrid = entrambi",
      "5 caratteristiche NIST: on-demand, broad access, pooling, elasticità, misurato",
      "Pay-per-use: paghi solo ciò che consumi",
      "Vantaggi: scalabilità, no CAPEX, HA. Svantaggi: lock-in, privacy, latenza",
    ],
    daNonDire: [
      "Non confondere IaaS, PaaS, SaaS — ognuno ha diverso livello di astrazione",
      "Non dire che il cloud è sempre più sicuro del datacenter proprio — dipende dalla configurazione",
    ],
    raccomandazioni: `IaaS/PaaS/SaaS è la domanda cloud più comune — porta esempi concreti (EC2 per IaaS, Heroku per PaaS, Gmail per SaaS).
Cita le 5 caratteristiche NIST per una risposta strutturata e autorevole.
Il pay-per-use e l'elasticità sono i vantaggi chiave del cloud rispetto all'infrastruttura tradizionale.`,
  },

};
