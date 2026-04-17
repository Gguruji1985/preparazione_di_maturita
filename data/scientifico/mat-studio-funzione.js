var TOPIC_STUDIO_FUNZIONE = {

  "schema-studio": {
    titolo: "Schema Completo dello Studio di Funzione",
    spiegazione: `
Lo <strong>studio di funzione</strong> è la procedura sistematica per analizzare e tracciare il grafico di una funzione.

<strong>Schema generale:</strong>

<strong>1. Dominio:</strong>
Trovare l'insieme dei valori per cui f è definita.
- Funzioni razionali: escludere gli zeri del denominatore.
- Radici pari: imporre argomento ≥ 0.
- Logaritmi: imporre argomento > 0.

<strong>2. Simmetrie:</strong>
- f(−x) = f(x) → funzione pari (simmetria rispetto all'asse y)
- f(−x) = −f(x) → funzione dispari (simmetria rispetto all'origine)
- Periodicità (sin, cos, ecc.)

<strong>3. Intersezioni con gli assi:</strong>
- Con asse y: calcola f(0) (se 0 è nel dominio).
- Con asse x: risolvere f(x) = 0 (zeri della funzione).

<strong>4. Segno della funzione:</strong>
Studio dove f(x) > 0 e dove f(x) < 0.

<strong>5. Limiti e asintoti:</strong>
- Limiti agli estremi del dominio e all'infinito.
- Determinare asintoti orizzontali, verticali, obliqui.

<strong>6. Derivata prima — monotonia e massimi/minimi:</strong>
- Calcolare f'(x), trovare gli zeri e i punti di non derivabilità.
- Studio del segno di f'(x) → intervalli di crescenza/decrescenza.
- Massimi e minimi relativi (dove f' cambia segno).

<strong>7. Derivata seconda — concavità e flessi:</strong>
- Calcolare f''(x), trovare gli zeri.
- f''(x) > 0 → concavità verso l'alto; f''(x) < 0 → concavità verso il basso.
- Punti di flesso: dove f'' cambia segno.

<strong>8. Grafico:</strong>
Raccogliere tutte le informazioni e tracciare il grafico.
    `,
    domande: [
      "Quali sono i passi dello studio di funzione?",
      "Come si trovano massimi e minimi relativi?",
      "Come si determina la concavità di una funzione?",
      "Come si trovano i punti di flesso?",
    ],
    qa: [
      { domanda: "Come si distingue massimo relativo da massimo assoluto?", risposta: "Il massimo relativo è un punto in cui f(x₀) ≥ f(x) per x in un intorno di x₀ — è il punto più alto in una 'zona'. Il massimo assoluto è il punto più alto su tutto il dominio. Un massimo assoluto può coincidere con un massimo relativo, ma non sempre. Es: una funzione può avere un massimo relativo inferiore al valore a bordo del dominio." },
      { domanda: "Cosa sono i punti di flesso?", risposta: "I punti in cui la funzione cambia concavità: passa da concava verso il basso a concava verso l'alto (flesso ascendente) o viceversa (flesso discendente). Si trovano dove f''(x) = 0 E f'' cambia segno. Se f'' = 0 ma non cambia segno, non è un flesso." },
    ],
    daRicordare: [
      "Dominio → simmetrie → intersezioni → segno → asintoti → f' → f''",
      "f'>0: crescente; f'<0: decrescente; cambio di segno di f' = max/min",
      "f''>0: concava su; f''<0: concava giù; cambio di segno di f'' = flesso",
      "Massimo/minimo relativo dove f'=0 e cambia segno (non dove f'=0 tout court)",
    ],
    daNonDire: [
      "Non dimenticare di verificare che f'' cambi segno per i punti di flesso",
      "Non confondere punti critici (f'=0) con massimi/minimi: bisogna verificare il cambio di segno",
    ],
    raccomandazioni: `Lo studio di funzione è quasi sempre presente nella seconda prova di matematica. Bisogna saper eseguire tutti i passi con precisione e giustificare ogni affermazione.`,
  },

  "massimi-minimi": {
    titolo: "Massimi, Minimi e Ottimizzazione",
    spiegazione: `
<strong>Classificazione dei punti critici:</strong>
Un punto c con f'(c) = 0 può essere:

<strong>Criterio della derivata prima:</strong>
- Se f' cambia da + a −: massimo relativo.
- Se f' cambia da − a +: minimo relativo.
- Se f' non cambia segno: punto di flesso a tangente orizzontale.

<strong>Criterio della derivata seconda:</strong>
Se f'(c) = 0 e f''(c) ≠ 0:
- f''(c) < 0 → massimo relativo.
- f''(c) > 0 → minimo relativo.
- f''(c) = 0 → non conclusivo (usare il criterio della derivata prima).

<strong>Massimi e minimi assoluti su [a, b]:</strong>
Per trovare il massimo/minimo assoluto di f continua su [a, b]:
1. Calcola f nei punti critici interni.
2. Calcola f(a) e f(b).
3. Confronta tutti i valori.

<strong>Problemi di ottimizzazione:</strong>
Trovare il massimo o minimo di una quantità soggetta a vincoli.
Passi:
1. Identificare la funzione da ottimizzare.
2. Esprimere tutto in una sola variabile usando il vincolo.
3. Derivare e trovare i punti critici.
4. Verificare che sia max o min con f'' o con il contesto.
    `,
    domande: [
      "Come si classificano i punti critici?",
      "Come si trovano massimi e minimi assoluti su un intervallo chiuso?",
      "Come si risolvono i problemi di ottimizzazione?",
    ],
    qa: [
      { domanda: "Quando non si può usare il criterio della derivata seconda?", risposta: "Quando f''(c) = 0. In questo caso non dice nulla sul tipo di punto critico: potrebbe essere un max, un min, o un flesso orizzontale. Si deve usare il criterio della derivata prima (analisi del segno di f' attorno a c)." },
    ],
    daRicordare: [
      "f'=0 e f'': -<0 → max relativo, >0 → min relativo, =0 → non conclusivo",
      "Max/min assoluto su [a,b]: confronta f nei punti critici e agli estremi",
      "Ottimizzazione: modellare, derivare, trovare critici, verificare",
    ],
    daNonDire: [
      "Non dire che ogni punto con f'=0 è massimo o minimo: potrebbe essere un flesso",
    ],
    raccomandazioni: `I problemi di ottimizzazione sono classici nelle prove d'esame. Esercitarsi con problemi geometrici (rettangolo iscritto in un cerchio, triangolo di area massima, ecc.).`,
  },

};
