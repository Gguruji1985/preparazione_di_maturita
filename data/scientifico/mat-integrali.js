var TOPIC_INTEGRALI = {

  "integrale-definito": {
    titolo: "Integrale Definito e Teorema Fondamentale",
    spiegazione: `
L'<strong>integrale definito</strong> misura l'area con segno tra il grafico di f e l'asse x sull'intervallo [a, b].

<strong>Costruzione (Riemann):</strong>
Si divide [a, b] in n sottointervalli, si calcola l'area dei rettangoli e si fa tendere n a ∞.

<strong>Proprietà dell'integrale definito:</strong>
- ∫<sub>a</sub><sup>b</sup> f = −∫<sub>b</sub><sup>a</sup> f
- ∫<sub>a</sub><sup>a</sup> f = 0
- ∫<sub>a</sub><sup>b</sup> [f + g] = ∫<sub>a</sub><sup>b</sup> f + ∫<sub>a</sub><sup>b</sup> g
- ∫<sub>a</sub><sup>b</sup> kf = k ∫<sub>a</sub><sup>b</sup> f
- ∫<sub>a</sub><sup>b</sup> f = ∫<sub>a</sub><sup>c</sup> f + ∫<sub>c</sub><sup>b</sup> f  (additività)
- Se f ≥ 0 su [a,b] → ∫<sub>a</sub><sup>b</sup> f ≥ 0

<strong>Teorema Fondamentale del Calcolo:</strong>
Sia F(x) = ∫<sub>a</sub><sup>x</sup> f(t)dt. Allora F'(x) = f(x).
Conseguenza (Formula di Newton-Leibniz):
<code>∫<sub>a</sub><sup>b</sup> f(x)dx = F(b) − F(a)</code>
dove F è una primitiva di f.

<strong>Questo collega integrazione e derivazione!</strong>
    `,
    domande: [
      "Cosa misura l'integrale definito?",
      "Cosa afferma il Teorema Fondamentale del Calcolo?",
      "Quali sono le proprietà dell'integrale definito?",
      "Come si calcola l'area tra due curve?",
    ],
    qa: [
      { domanda: "Perché l'integrale misura un'area 'con segno'?", risposta: "Perché se f(x) < 0 sull'intervallo, il contributo all'integrale è negativo. L'integrale dà l'area 'algebrica': la somma delle aree sopra l'asse (positive) meno le aree sotto l'asse (negative). Per l'area geometrica totale si prende il valore assoluto della funzione." },
      { domanda: "Area tra due curve f e g (con f≥g)?", risposta: "∫<sub>a</sub><sup>b</sup> [f(x)−g(x)]dx, dove a e b sono le ascisse delle intersezioni. Si può pensare come: area sotto f meno area sotto g." },
    ],
    daRicordare: [
      "Integrale definito = area con segno tra curva e asse x",
      "Teorema fondamentale: ∫f(x)dx = F(b)−F(a), dove F'=f",
      "Proprietà: linearità, additività, cambio di segno scambiando estremi",
      "Area tra curve: ∫[f(x)−g(x)]dx",
    ],
    daNonDire: [
      "Non dire che l'integrale è 'l'opposto della derivata': è più preciso dire che la derivazione e l'integrazione sono operazioni inverse (grazie al teorema fondamentale)",
    ],
    raccomandazioni: `L'integrale definito è fondamentale per la prova d'esame. Esercitarsi sul calcolo di aree e sul riconoscimento delle primitive.`,
  },

  "integrale-indefinito": {
    titolo: "Integrale Indefinito e Tecniche di Integrazione",
    spiegazione: `
L'<strong>integrale indefinito</strong> di f è la famiglia di tutte le primitive di f:
<code>∫f(x)dx = F(x) + C</code>
dove F'(x) = f(x) e C è una costante arbitraria.

<strong>Integrali immediati:</strong>
- ∫x<sup>n</sup>dx = x<sup>n+1</sup>/(n+1) + C  (n ≠ −1)
- ∫1/x dx = ln|x| + C
- ∫e<sup>x</sup>dx = e<sup>x</sup> + C
- ∫sin x dx = −cos x + C
- ∫cos x dx = sin x + C
- ∫1/cos²x dx = tan x + C
- ∫1/√(1−x²) dx = arcsin x + C
- ∫1/(1+x²) dx = arctan x + C

<strong>Tecniche di integrazione:</strong>

<strong>1. Sostituzione:</strong>
Porre u = g(x), du = g'(x)dx.
Es: ∫2x·e<sup>x²</sup>dx → u = x², du = 2xdx → ∫e<sup>u</sup>du = e<sup>u</sup> + C = e<sup>x²</sup> + C

<strong>2. Integrazione per parti:</strong>
∫f·g' = f·g − ∫f'·g
(«Per parti» = LIATE: Logaritmo, Inversa, Algebrica, Trigonometrica, Esponenziale — ordine di scelta di f)

<strong>3. Funzioni razionali:</strong>
Decomposizione in frazioni parziali, poi si integra ogni termine.

<strong>4. Integrazione di funzioni trigonometriche:</strong>
Formule di duplicazione, riduzione, sostituzioni.
    `,
    domande: [
      "Quali sono gli integrali immediati fondamentali?",
      "Come funziona il metodo di sostituzione?",
      "Come si applica l'integrazione per parti?",
      "Come si integrano le funzioni razionali?",
    ],
    qa: [
      { domanda: "Come si sceglie il metodo di integrazione?", risposta: "Prima cercare se è un integrale immediato o quasi. Se c'è una funzione composta con la sua derivata, usare la sostituzione. Se c'è un prodotto di funzioni di natura diversa (es. x·e^x, x·sin x, ln x), usare per parti. Per frazioni algebriche con denominatori polinomiali, la decomposizione in frazioni parziali." },
    ],
    daRicordare: [
      "Primitiva di x^n: x^(n+1)/(n+1); di 1/x: ln|x|; di e^x: e^x",
      "Sostituzione: u=g(x) → trasforma in integrale più semplice",
      "Per parti: ∫f·g' = f·g − ∫f'·g (regola LIATE per la scelta)",
    ],
    daNonDire: [
      "Non dimenticare la costante C nell'integrale indefinito",
    ],
    raccomandazioni: `Memorizzare gli integrali immediati. Per le tecniche, esercitarsi con tanti esempi: sostituzione e per parti sono le più frequenti in esame.`,
  },

};
