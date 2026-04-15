// data/comune/ita-romanticismo.js
var TOPIC_ITA_ROMANTICISMO = {

  "foscolo": {
    titolo: "Ugo Foscolo",
    spiegazione: `
<strong>Ugo Foscolo</strong> (1778–1827) è la figura di transizione tra Neoclassicismo e Romanticismo. Vive la contraddizione tra ideali illuministi e delusione storica (Trattato di Campoformio, 1797, con cui Napoleone cede Venezia all'Austria).

<strong>Pensiero:</strong>
- Materialismo: l'uomo è mortale, non c'è aldilà
- Le tre illusioni consolatorie: amore, gloria, bellezza
- La poesia come unico strumento di immortalità

<strong>Opere principali:</strong>

<em>Ultime Lettere di Jacopo Ortis (1802):</em>
Romanzo epistolare. Jacopo, deluso politicamente e infelice in amore, si suicida. Autobiografico: Foscolo → Jacopo, Teresa → Isabella Roncioni.
Temi: delusione politica, amore impossibile, libertà, morte come scelta eroica.

<em>Sonetti (1802):</em>
- "Alla sera": la sera come metafora della morte, il nulla come pace.
- "A Zacinto": esilio, patria, mito di Ulisse. Chiusura: "un sasso ignudo" (morte senza sepoltura né patria).
- "In morte del fratello Giovanni": fratello suicida, tema della tomba, affetti familiari.

<em>Dei Sepolcri (1807):</em>
Carme in endecasillabi sciolti. Occasione: editto di Saint-Cloud (1806) che vietava sepolture nelle chiese e imponeva cimiteri uguali per tutti.
Tesi di Foscolo: le tombe hanno una funzione civile, poetica e storica.
Struttura: 3 parti — la tomba come legame tra vivi e morti → tombe dei grandi come stimolo alla virtù (Santa Croce, Firenze) → mito omerico (Troia, Elettra, Cassandra).

<em>Le Grazie (incompiuto):</em>
Inno alle tre Grazie (Venere, Vesta, Pallade). La bellezza come velo che nasconde le durezze della vita.
    `,
    domande: [
      "Chi è Foscolo e qual è il suo contesto storico?",
      "Quali sono le tre illusioni foscoliane?",
      "Analizzare 'A Zacinto' — temi e struttura.",
      "Qual è la tesi de 'I Sepolcri'?",
      "Confrontare Ortis con Werther di Goethe.",
    ],
    qa: [
      { domanda: "Cosa sono le 'tre illusioni' di Foscolo?", risposta: "Foscolo è materialista: l'uomo muore e non c'è aldilà. Per sopportare questa condizione, l'uomo si affida a tre illusioni: l'amore (sentimento che rende la vita degna di essere vissuta), la gloria (la fama che sopravvive alla morte), e la bellezza/poesia (che immortala gli uomini nelle opere d'arte)." },
      { domanda: "Qual è la tesi centrale dei Sepolcri?", risposta: "Contro l'editto che rendeva le tombe anonime e uguali, Foscolo sostiene che le tombe hanno un valore civile (mantengono il legame tra vivi e morti, stimolano al pianto e alla virtù), poetico (la poesia immortala i grandi) e storico (le tombe dei grandi sono memoria della civiltà)." },
      { domanda: "Perché 'A Zacinto' è importante?", risposta: "Il sonetto esprime il tema dell'esilio: Foscolo non potrà tornare a Zacinto (Zante, sua isola natale). Il confronto con Ulisse è amaro: Ulisse tornò, Foscolo no. La chiusura 'un sasso ignudo' sintetizza la sua condizione di esiliato che morirà senza patria né sepoltura." },
    ],
    daRicordare: [
      "Foscolo: materialismo + 3 illusioni (amore, gloria, poesia)",
      "Ortis: romanzo epistolare, autobiografico, delusione politica + amore",
      "Sonetti chiave: A Zacinto (esilio), In morte del fratello Giovanni (tomba)",
      "Sepolcri: tesi = le tombe hanno funzione civile, poetica, storica",
      "Editto di Saint-Cloud 1806 = occasione dei Sepolcri",
    ],
    daNonDire: [
      "Non dire che Foscolo è solo romantico — è figure di transizione tra Neoclassicismo e Romanticismo",
      "Non confondere Ortis (personaggio) con Foscolo (autore) — anche se autobiografici",
      "Non dire che i Sepolcri sono solo contro l'editto — la tesi è molto più ampia",
    ],
    raccomandazioni: `
Inizia con il contesto storico: Campoformio 1797 spiega tutta la delusione politica di Foscolo.
Poi le 3 illusioni come chiave interpretativa di tutte le sue opere.
Porta sempre almeno un verso memorabile (es. finale di 'A Zacinto': "a me non dette / che le lagrime mie su la tua riva").
    `,
  },

  "leopardi": {
    titolo: "Giacomo Leopardi",
    spiegazione: `
<strong>Giacomo Leopardi</strong> (1798–1837) è il massimo poeta dell'Ottocento italiano. La sua opera è inseparabile dalla sua visione filosofica: il <strong>pessimismo</strong>.

<strong>Evoluzione del pessimismo:</strong>

<em>Pessimismo individuale (prima fase):</em>
La sua infelicità è dovuta alla sua condizione personale (salute cagionevole, isolamento a Recanati).

<em>Pessimismo storico:</em>
L'infelicità dipende dall'allontanamento dalla Natura: gli antichi erano felici perché vivevano nell'illusione. La ragione (progresso, Illuminismo) ha distrutto le illusioni e ha rivelato il vero.

<em>Pessimismo cosmico (fase matura):</em>
L'infelicità è insita nella Natura stessa. La Natura è matrigna: crea gli esseri capaci di desiderare la felicità, poi li condanna alla sofferenza e alla morte. Non è colpa degli uomini né della storia: è la condizione universale.

<strong>Zibaldone:</strong> diario intellettuale, ~4500 pagine. Contiene la teoria del piacere, la teoria del vago e dell'indefinito.

<strong>Operette Morali (1827):</strong> dialoghi filosofici in prosa.
Più noti: Dialogo della Natura e di un Islandese, Dialogo di un venditore di almanacchi, Dialogo di Tristano e di un amico.

<strong>Canti (1831/36):</strong>
- <em>Idilli:</em> "L'Infinito", "La sera del dì di festa" — natura, infinito, memoria
- <em>Canzoni civili:</em> "All'Italia", "Ad Angelo Mai"
- <em>Grandi idilli (1828-30):</em> "A Silvia", "Le Ricordanze", "La quiete dopo la tempesta", "Il sabato del villaggio", "Canto notturno di un pastore errante dell'Asia"
- <em>Ciclo di Aspasia:</em> amore per Fanny Targioni Tozzetti
- <em>La Ginestra (1836):</em> testamento poetico — la solidarietà tra gli uomini contro la Natura matrigna.
    `,
    domande: [
      "Descrivere le fasi del pessimismo leopardiano.",
      "Analizzare 'L'Infinito'.",
      "Qual è il tema de 'La Ginestra'? Perché è importante?",
      "Confrontare Leopardi con il Romanticismo europeo.",
      "Cosa si intende per 'teoria del piacere' nello Zibaldone?",
    ],
    qa: [
      { domanda: "Cos'è il pessimismo cosmico di Leopardi?", risposta: "Nella fase matura, Leopardi conclude che l'infelicità non è individuale né storica, ma cosmica: è la Natura stessa, matrigna, che condanna ogni essere vivente alla sofferenza. La Natura crea il desiderio di felicità negli esseri, ma non può soddisfarlo — è una condizione universale, non una colpa dell'uomo o della civiltà." },
      { domanda: "Qual è il tema de 'L'Infinito'?", risposta: "Il poeta seduto sulla collina non può vedere l'orizzonte (la siepe lo nasconde). Questo ostacolo fisico stimola l'immaginazione: il poeta si immagina spazi e silenzi infiniti. Il confronto tra il presente finito e l'infinito immaginato gli provoca un senso di dolce naufragio — il piacere del pensiero dell'infinito." },
      { domanda: "Cosa sostiene Leopardi nella Ginestra?", risposta: "La ginestra, fiore fragile che sboccia sul Vesuvio (simbolo della Natura distruttrice), diventa simbolo della dignità umana. La risposta alla condanna della Natura non è il progresso ottimista né la rassegnazione, ma la solidarietà tra gli uomini che riconoscono di avere lo stesso nemico: la Natura matrigna." },
    ],
    daRicordare: [
      "3 fasi pessimismo: individuale → storico → cosmico",
      "Natura matrigna: crea desiderio di felicità ma non può soddisfarlo",
      "L'Infinito: siepe → immaginazione → naufragio dolce nell'infinito",
      "La Ginestra: solidarietà umana contro la Natura matrigna",
      "Grandi idilli: A Silvia, Il sabato del villaggio, Canto notturno...",
    ],
    daNonDire: [
      "Non dire che Leopardi era pessimista 'perché stava male' — la sua filosofia supera l'autobiografia",
      "Non confondere i diversi periodi del Leopardi — il pessimismo evolve",
      "Non dire che La Ginestra è nichilista — propone una risposta positiva (solidarietà)",
    ],
    raccomandazioni: `
Il percorso di Leopardi si racconta bene cronologicamente: prima il giovane di Recanati, poi la svolta filosofica, poi i Grandi idilli, poi La Ginestra come conclusione.
Memorizza almeno i versi iniziali di 'L'Infinito' e la chiusura ('e il naufragar m'è dolce in questo mare').
    `,
  },

  "manzoni": {
    titolo: "Alessandro Manzoni",
    spiegazione: `
<strong>Alessandro Manzoni</strong> (1785–1873) è il più importante romanziere italiano dell'Ottocento. La sua fede cattolica e il suo impegno civile (Risorgimento) sono centrali nella sua opera.

<strong>Conversione religiosa (1810):</strong> punto di svolta. La Provvidenza divina diventa il principio organizzatore della storia e della vita umana.

<strong>Poetica manzoniana:</strong>
- Il vero storico (fedeltà alla storia) + il vero umano (psicologia reale dei personaggi)
- Rifiuto del meraviglioso e dell'inverosimile
- Impegno morale e civile della letteratura
- Questione della lingua: unificazione linguistica attraverso il fiorentino colto parlato

<strong>Opere:</strong>

<em>Inni Sacri (1812–15):</em> poesie religiose. La pentecoste è la più nota.

<em>Odi civili:</em> "Marzo 1821" (unità d'Italia), "Cinque Maggio" (morte di Napoleone — grande lirica sull'ambiguità del potere).

<em>Tragedie:</em> Il Conte di Carmagnola, Adelchi. Temi: potere, libertà, Provvidenza. Personaggi divisi tra ideale e storia.

<em>I Promessi Sposi (1827, definitivo 1840):</em>
Romanzo storico. Ambientato nella Lombardia spagnola del Seicento.
Protagonisti: Renzo Tramaglino e Lucia Mondella, umili filatori di seta, ostacolati da don Rodrigo (signorotto prepotente).
Temi: Provvidenza (la storia è guidata da Dio), giustizia (i potenti opprimono ma vengono puniti), la donna (Lucia come personaggio forte), la conversione (Innominato), la storia (la peste del 1630).
Struttura: 38 capitoli. Narratore onnisciente con ironia.
La Monaca di Monza: personaggio tragico, storia nel romanzo.
    `,
    domande: [
      "Qual è la poetica di Manzoni?",
      "Riassumere la trama dei Promessi Sposi.",
      "Qual è il ruolo della Provvidenza nel romanzo?",
      "Chi è l'Innominato e qual è la sua funzione nel romanzo?",
      "Cosa si intende per 'questione della lingua' in Manzoni?",
    ],
    qa: [
      { domanda: "Cos'è la Provvidenza in Manzoni?", risposta: "Manzoni è cattolico: crede che la storia sia guidata dalla Provvidenza divina. Anche nelle situazioni più buie, Dio guida gli eventi verso il bene. I Promessi Sposi illustrano questa tesi: Renzo e Lucia, nonostante le oppressioni, si sposano alla fine; i malvagi vengono puniti (don Rodrigo muore di peste)." },
      { domanda: "Chi è l'Innominato?", risposta: "È un potente signore che lavora per il Male (aiuta don Rodrigo a rapire Lucia). La notte dopo il rapimento, ossessionato dall'innocenza di Lucia, vive una crisi spirituale e si converte. La sua conversione è il momento più alto del romanzo: dimostra che anche i più corrotti possono essere toccati dalla grazia divina." },
      { domanda: "Cosa vuole Manzoni con la 'questione della lingua'?", risposta: "Manzoni voleva che tutta l'Italia unita parlasse e scrivesse la stessa lingua. Scelse il fiorentino colto parlato come modello, perché era la lingua più viva e diffusa. Per questo riscrisse i Promessi Sposi nel 1840 ('sciacquò i panni in Arno') eliminando i lombardismi della prima edizione." },
    ],
    daRicordare: [
      "Conversione 1810: Provvidenza divina come asse del pensiero",
      "Romanzo storico: fedeltà storica + verosimiglianza psicologica",
      "Cinque Maggio: ode a Napoleone, ambiguità del potere, Provvidenza",
      "Promessi Sposi: Renzo + Lucia vs don Rodrigo, Lombardia spagnola '600",
      "Innominato: conversione, momento centrale del romanzo",
      "Questione della lingua: fiorentino colto → 'sciacquò i panni in Arno'",
    ],
    daNonDire: [
      "Non dire che i Promessi Sposi sono solo un romanzo d'amore — è soprattutto un romanzo storico e religioso",
      "Non dimenticare il ruolo della Provvidenza — è il tema unificante",
      "Non confondere le due edizioni (1827 e 1840) — hanno differenze linguistiche significative",
    ],
    raccomandazioni: `
Puoi aprire il discorso su Manzoni collegandolo al Romanticismo italiano e alla questione dell'identità nazionale (Risorgimento).
Il contrasto Manzoni/Leopardi (Provvidenza vs Natura matrigna) è un collegamento sempre apprezzato dalla commissione.
    `,
  },

};
