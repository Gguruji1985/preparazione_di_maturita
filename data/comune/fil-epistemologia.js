var TOPIC_FIL_EPISTEMOLOGIA = {

  "popper-falsificazionismo": {
    titolo: "Popper: Falsificazionismo e Conoscenza",
    spiegazione: `
<strong>Karl Popper (1902–1994)</strong> è il maggiore filosofo della scienza del Novecento. Pone il problema: cosa distingue la scienza dalla pseudoscienza?

<strong>Il problema della demarcazione:</strong>
Popper è colpito dal contrasto tra:
- Einstein: una previsione verificabile, rischiosa (la luce si deflette vicino al Sole).
- Marx, Freud, Adler: ogni fatto sembra confermare le loro teorie. Spiegano tutto — quindi non spiegano nulla.

<strong>Il Falsificazionismo:</strong>
Una teoria è scientifica se è <em>falsificabile</em>: se è possibile, in linea di principio, immaginare un'osservazione che la smentisca.
- Teoria scientifica: «Tutti i corvi sono neri» → basta trovare un corvo non nero per falsificarla.
- Pseudoscienza: la psicoanalisi, il marxismo dogmatico → per ogni contro-evidenza c'è una spiegazione ad hoc.

<strong>La scienza per Popper:</strong>
Non procede per verificazione (non possiamo verificare tutti i corvi), ma per <em>tentativi ed errori</em>:
1. Formuliamo una congettura (ipotesi audace).
2. La sottoponiamo a test severi.
3. Se resiste → continua (provvisoriamente); se è falsificata → la scartiamo.

<strong>La logica della scoperta scientifica (1934):</strong>
Opera principale. Confuta il metodo induttivo (da molti casi particolari a legge generale): non importa quante conferme — una sola falsificazione basta.
    `,
    domande: [
      "Cos'è il falsificazionismo di Popper?",
      "Come distingue Popper scienza e pseudoscienza?",
      "Perché Popper critica il marxismo e la psicoanalisi?",
      "Cosa critica Popper dell'induzione?",
    ],
    qa: [
      { domanda: "Perché una teoria che spiega tutto non è scientifica?", risposta: "Perché una teoria che può essere adattata a qualunque evidenza non rischia mai di essere falsificata — e quindi non dice nulla di preciso sulla realtà. La forza di una teoria scientifica sta nella sua rischiosità: fa previsioni precise che potrebbero essere smentite. Se non può essere smentita, non impara nulla dalla realtà." },
    ],
    daRicordare: [
      "Falsificazionismo: una teoria è scientifica se può essere falsificata",
      "Non verifica (troppi casi), ma falsificazione (un solo contro-esempio basta)",
      "Metodo: congettura → test severo → falsificazione o conferma provvisoria",
      "Critica a Marx e Freud: non falsificabili → pseudoscienza",
    ],
    daNonDire: [
      "Non dire che Popper considera Marx o Freud stupidi: li considera pensatori interessanti ma non scientifici",
    ],
    raccomandazioni: `Popper è fondamentale per l'epistemologia moderna. Collegarlo a Kuhn per una visione più completa della filosofia della scienza.`,
  },

  "kuhn-lakatos": {
    titolo: "Kuhn, Lakatos e la Struttura delle Rivoluzioni Scientifiche",
    spiegazione: `
<strong>Thomas Kuhn (1922–1996)</strong> propone una visione storica e sociologica della scienza, in contrasto con Popper.

<strong>La Struttura delle Rivoluzioni Scientifiche (1962):</strong>
<strong>Paradigma:</strong> l'insieme di teorie, metodi e valori condivisi da una comunità scientifica in un'epoca.
Es: il paradigma aristotelico-tolemaico (Terra al centro); il paradigma newtoniano; la relatività di Einstein.

<strong>Scienza normale:</strong> gli scienziati lavorano all'interno del paradigma, risolvendo i «rompicapi» che esso pone. Non mettono in discussione il paradigma stesso.

<strong>Anomalie e crisi:</strong> alcune osservazioni non si spiegano con il paradigma. Inizialmente vengono ignorate o adattate. Ma se si accumulano → crisi.

<strong>Rivoluzione scientifica:</strong> il vecchio paradigma crolla e viene sostituito da uno nuovo. Non è un processo razionale lineare: è quasi una «conversione» — i vecchi scienziati non cambiano idea, i nuovi crescono con il nuovo paradigma.

<strong>Incommensurabilità:</strong> due paradigmi non sono direttamente confrontabili (non c'è un metro comune).

<strong>Imre Lakatos (1922–1974):</strong>
Propone la nozione di <em>Programma di Ricerca Scientifico</em>:
- Nucleo teorico fisso (non si tocca).
- Cintura protettiva (ipotesi ausiliarie) che si aggiustano quando ci sono anomalie.
- I programmi di ricerca possono essere progressivi (fanno nuove previsioni) o degenerativi (si difendono solo da critiche).
    `,
    domande: [
      "Cos'è un paradigma in Kuhn?",
      "Come avvengono le rivoluzioni scientifiche?",
      "Cosa si intende per incommensurabilità?",
      "Qual è la differenza tra Popper e Kuhn?",
    ],
    qa: [
      { domanda: "Perché Kuhn è in contrasto con Popper?", risposta: "Popper vede la scienza come un processo razionale di congetture e falsificazioni. Kuhn mostra storicamente che gli scienziati non abbandonano mai una teoria a causa di un'anomalia: la difendono, aggiustano, ignorano le difficoltà. Le rivoluzioni scientifiche hanno anche fattori sociologici e psicologici, non solo logici." },
    ],
    daRicordare: [
      "Kuhn: paradigma, scienza normale, crisi, rivoluzione scientifica",
      "Incommensurabilità: due paradigmi non si confrontano su un metro comune",
      "Lakatos: programma di ricerca progressivo vs degenerativo",
      "Contrasto Popper/Kuhn: razionalismo vs storicismo della scienza",
    ],
    daNonDire: [
      "Non dire che Kuhn nega la verità scientifica: mostra che la scienza è anche un'attività umana e sociale",
    ],
    raccomandazioni: `Kuhn e Popper si complementano: presentarli insieme dà un quadro completo del dibattito epistemologico del '900.`,
  },

  "neopositivismo": {
    titolo: "Il Neopositivismo e il Circolo di Vienna",
    spiegazione: `
Il <strong>Neopositivismo</strong> (o Empirismo Logico) è il movimento filosofico fondato a Vienna negli anni '20 dal <strong>Circolo di Vienna</strong>.

<strong>I membri principali:</strong> Moritz Schlick (fondatore), Rudolf Carnap, Otto Neurath, Hans Reichenbach.

<strong>Il principio di verificazione:</strong>
Un enunciato ha significato cognitivo solo se è empiricamente verificabile (o è una tautologia logico-matematica).
- «L'acqua bolle a 100°C» → verificabile → significativo.
- «Dio esiste» → non verificabile → privo di significato cognitivo (non è falso, è nonsense).

<strong>L'analisi del linguaggio:</strong>
La filosofia non deve fare affermazioni sulla realtà (questo spetta alle scienze), ma chiarire il linguaggio: eliminare le pseudo-proposizioni metafisiche.

<strong>Il Tractatus di Wittgenstein (1921):</strong>
Ludwig Wittgenstein: <em>"Di ciò di cui non si può parlare, si deve tacere."</em>
Il linguaggio descrive i fatti del mondo. Ciò che non è descrivibile (etica, estetica, religione) non può essere detto — solo mostrato.

<strong>Wittgenstein tardivo (Ricerche Filosofiche, 1953):</strong>
Abbandona il Tractatus. Il linguaggio non ha una struttura logica unica: ha molteplici usi (<em>giochi linguistici</em>). Il significato è l'uso.
    `,
    domande: [
      "Cos'è il principio di verificazione?",
      "Qual è la tesi del Tractatus di Wittgenstein?",
      "Come cambia la filosofia di Wittgenstein nel periodo tardo?",
      "Cos'è il Circolo di Vienna?",
    ],
    qa: [
      { domanda: "Perché il Neopositivismo critica la metafisica?", risposta: "Perché le affermazioni metafisiche ('l'Essere è', 'Dio è infinito') non sono né verificabili empiricamente né tautologie logiche. Per il principio di verificazione, non sono semplicemente false: sono <em>prive di significato cognitivo</em>. La metafisica è un errore linguistico, non una conoscenza errata." },
    ],
    daRicordare: [
      "Circolo di Vienna: Schlick, Carnap, Neurath",
      "Principio di verificazione: senso = verificabilità empirica",
      "Wittgenstein Tractatus: 'Di ciò che non si può parlare, si deve tacere'",
      "Wittgenstein tardivo: giochi linguistici, significato = uso",
    ],
    daNonDire: [
      "Non confondere il Tractatus (primo Wittgenstein) con le Ricerche Filosofiche (secondo Wittgenstein): sono quasi opposte",
    ],
    raccomandazioni: `Il Neopositivismo si collega bene a Popper (che ne critica il principio di verifica) e a Wittgenstein. La commissione ama il confronto tra questi approcci.`,
  },

};
