var TOPIC_CONTINUITA = {

  "definizione-continuita": {
    titolo: "Continuità di una Funzione",
    spiegazione: `
Una funzione f è <strong>continua in x = c</strong> se:
1. f è definita in c (f(c) esiste)
2. esiste lim<sub>x→c</sub> f(x)
3. lim<sub>x→c</sub> f(x) = f(c)

Intuitivamente: la funzione non ha «salti» né «buchi» in c.

<strong>Continuità in un intervallo:</strong>
f è continua in [a, b] se è continua in ogni punto di (a, b) e nei sensi giusti agli estremi.

<strong>Funzioni continue elementari:</strong>
Polinomi, funzioni razionali (dove definite), sin, cos, e<sup>x</sup>, ln (per x > 0), √x (per x ≥ 0) sono continue nel loro dominio.

<strong>Operazioni che preservano la continuità:</strong>
Somma, prodotto, quoziente (denominatore ≠ 0), composizione di funzioni continue.

<strong>Discontinuità di prima specie (salto):</strong>
Esistono i limiti destro e sinistro ma sono diversi: lim<sub>x→c<sup>+</sup></sub> f ≠ lim<sub>x→c<sup>−</sup></sub> f.

<strong>Discontinuità di seconda specie:</strong>
Almeno uno dei due limiti unilaterali è infinito o non esiste.

<strong>Discontinuità eliminabile:</strong>
Il limite esiste ma non coincide con f(c) (o f non è definita in c).
    `,
    domande: [
      "Come si definisce la continuità di una funzione in un punto?",
      "Quali tipi di discontinuità esistono?",
      "Cosa è una discontinuità eliminabile?",
    ],
    qa: [
      { domanda: "Qual è la differenza tra discontinuità di prima e seconda specie?", risposta: "Nella discontinuità di prima specie (o salto) esistono entrambi i limiti unilaterali ma sono diversi, oppure il limite non coincide con il valore della funzione. Nella seconda specie almeno uno dei limiti unilaterali è ±∞ oppure non esiste (come per sin(1/x) in x=0)." },
    ],
    daRicordare: [
      "Continuità: f(c) esiste, lim f(x) esiste, lim f(x) = f(c)",
      "Discontinuità: prima specie (salto), seconda specie (asintoto verticale), eliminabile",
      "Funzioni elementari continue nel loro dominio",
    ],
    daNonDire: [
      "Non dire che 'continuo' significa che va sempre avanti: significa che non ha salti o buchi",
    ],
    raccomandazioni: `La continuità è prerequisito per la derivabilità. La commissione spesso chiede la classificazione delle discontinuità con esempi grafici.`,
  },

  "teoremi-continuita": {
    titolo: "Teoremi sulle Funzioni Continue",
    spiegazione: `
Le funzioni continue su intervalli chiusi godono di proprietà fondamentali, utilizzate in tutto l'Analisi.

<strong>Teorema di Weierstrass:</strong>
Una funzione continua su un intervallo chiuso e limitato [a, b] ammette massimo e minimo assoluti.
(Ci sono due punti x₁, x₂ ∈ [a, b] tali che f(x₁) ≤ f(x) ≤ f(x₂) per ogni x.)

<strong>Teorema dei valori intermedi (Bolzano-Cauchy):</strong>
Se f è continua su [a, b] e k è un valore compreso tra f(a) e f(b), allora esiste almeno un c ∈ (a, b) tale che f(c) = k.
Conseguenza: se f(a) e f(b) hanno segno opposto, esiste almeno uno zero in (a, b).

<strong>Teorema degli zeri:</strong>
Se f è continua su [a, b], f(a) < 0 e f(b) > 0 (o viceversa), allora ∃c ∈ (a, b) tale che f(c) = 0.
→ Usato per trovare soluzioni di equazioni in modo approssimato (bisezione).

<strong>Applicazioni:</strong>
- Verifica dell'esistenza di soluzioni di equazioni.
- Base per il teorema di Rolle e Lagrange (che richiedono la continuità).
    `,
    domande: [
      "Cosa afferma il teorema di Weierstrass?",
      "Cosa afferma il teorema degli zeri?",
      "Come si usa il teorema dei valori intermedi?",
    ],
    qa: [
      { domanda: "Perché è importante il teorema di Weierstrass?", risposta: "Garantisce che su un intervallo chiuso e limitato una funzione continua raggiunge effettivamente il suo massimo e il suo minimo. Non è scontato: senza la condizione di continuità o senza intervallo chiuso il massimo potrebbe non essere raggiunto (es. f(x)=x su (0,1) non raggiunge 1)." },
    ],
    daRicordare: [
      "Weierstrass: f continua su [a,b] → ha max e min assoluti",
      "Valori intermedi: f continua, prende tutti i valori tra f(a) e f(b)",
      "Teorema degli zeri: se f(a) e f(b) hanno segno opposto → ∃ zero in (a,b)",
    ],
    daNonDire: [
      "Non dimenticare che questi teoremi valgono solo su intervalli chiusi e limitati (per Weierstrass)",
    ],
    raccomandazioni: `Il teorema degli zeri è spesso usato negli esercizi per verificare l'esistenza di soluzioni di equazioni. Utile anche per il metodo di bisezione.`,
  },

};
