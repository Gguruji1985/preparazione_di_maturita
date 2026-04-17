var TOPIC_DERIVATE = {

  "definizione-derivata": {
    titolo: "Definizione e Significato della Derivata",
    spiegazione: `
La <strong>derivata</strong> è uno dei concetti fondamentali del Calcolo. Misura il <em>tasso di variazione</em> istantaneo di una funzione.

<strong>Definizione:</strong>
La derivata di f in x₀ è:
<code>f'(x₀) = lim<sub>h→0</sub> [f(x₀+h) − f(x₀)] / h</code>
se questo limite esiste finito.

<strong>Significato geometrico:</strong>
f'(x₀) è il coefficiente angolare della retta tangente al grafico di f nel punto (x₀, f(x₀)).

<strong>Significato fisico:</strong>
Se f(t) è la posizione di un oggetto al tempo t, allora f'(t) è la <strong>velocità istantanea</strong>. Se f'(t) è la velocità, f''(t) è l'accelerazione.

<strong>Derivabilità e continuità:</strong>
Se f è derivabile in x₀, allora è continua in x₀.
Il contrario non vale: f(x) = |x| è continua ma non derivabile in x₀ = 0.

<strong>Punti di non derivabilità:</strong>
- <em>Punto angoloso:</em> limiti destro e sinistro del rapporto incrementale esistono ma sono diversi.
- <em>Cuspide:</em> entrambi i limiti sono infiniti con segno opposto.
- <em>Punto di flesso a tangente verticale:</em> entrambi i limiti sono +∞ o entrambi −∞.
    `,
    domande: [
      "Come si definisce la derivata?",
      "Qual è il significato geometrico della derivata?",
      "Qual è la relazione tra derivabilità e continuità?",
      "Cosa sono i punti angolosi e le cuspidi?",
    ],
    qa: [
      { domanda: "Perché la derivabilità implica continuità ma non viceversa?", risposta: "Se f è derivabile in x₀, il rapporto incrementale ha un limite finito. Si può dimostrare che questo implica che f(x₀+h)−f(x₀)→0, cioè f è continua. Ma la continuità non garantisce derivabilità: |x| è continua in 0, ma ha un angolo — i limiti destro e sinistro del rapporto incrementale sono +1 e −1, diversi." },
    ],
    daRicordare: [
      "f'(x₀) = lim [f(x₀+h)−f(x₀)]/h per h→0",
      "Significato geometrico: coefficiente angolare della tangente",
      "Significato fisico: velocità istantanea",
      "Derivabile ⟹ continuo (non viceversa)",
      "Punto angoloso: limiti destro e sinistro diversi del rapporto incrementale",
    ],
    daNonDire: [
      "Non dire che continuità implica derivabilità: |x| è il controesempio classico",
    ],
    raccomandazioni: `La derivata è il cuore dell'Analisi. La commissione chiede definizione, interpretazione geometrica/fisica e calcolo.`,
  },

  "regole-derivazione": {
    titolo: "Regole di Derivazione",
    spiegazione: `
<strong>Derivate fondamentali:</strong>
- (c)' = 0  (costante)
- (x<sup>n</sup>)' = n·x<sup>n−1</sup>
- (e<sup>x</sup>)' = e<sup>x</sup>
- (a<sup>x</sup>)' = a<sup>x</sup>·ln a
- (ln x)' = 1/x
- (log<sub>a</sub> x)' = 1/(x·ln a)
- (sin x)' = cos x
- (cos x)' = −sin x
- (tan x)' = 1/cos²x = 1 + tan²x
- (arcsin x)' = 1/√(1−x²)
- (arctan x)' = 1/(1+x²)

<strong>Regole di calcolo:</strong>
- <strong>Linearità:</strong> (f + g)' = f' + g';   (kf)' = k·f'
- <strong>Prodotto:</strong> (f·g)' = f'·g + f·g'
- <strong>Quoziente:</strong> (f/g)' = (f'·g − f·g') / g²
- <strong>Funzione composta (chain rule):</strong> [f(g(x))]' = f'(g(x))·g'(x)
- <strong>Funzione inversa:</strong> (f<sup>−1</sup>)'(y) = 1 / f'(x)

<strong>Derivate di ordine superiore:</strong>
f''(x) = (f'(x))'  — derivata seconda (accelerazione, concavità)
f<sup>(n)</sup> = n-esima derivata.
    `,
    domande: [
      "Quali sono le principali regole di derivazione?",
      "Come si deriva una funzione composta?",
      "Come si deriva un prodotto di funzioni?",
      "Qual è la derivata di e^x e di ln(x)?",
    ],
    qa: [
      { domanda: "Come si applica la chain rule?", risposta: "Si deriva la funzione esterna valutata nella funzione interna, moltiplicata per la derivata della funzione interna. Es: [sin(x²)]' = cos(x²)·2x. Mentalmente: 'derivata del fuori × derivata del dentro'." },
      { domanda: "Come si deriva ln(f(x))?", risposta: "[ln(f(x))]' = f'(x)/f(x). È la chain rule applicata a ln: la derivata di ln è 1/x, valutata in f(x) dà 1/f(x), poi si moltiplica per f'(x)." },
    ],
    daRicordare: [
      "(x^n)' = n·x^(n-1);  (e^x)' = e^x;  (ln x)' = 1/x",
      "(sin x)' = cos x;  (cos x)' = -sin x",
      "Prodotto: (fg)' = f'g + fg'",
      "Quoziente: (f/g)' = (f'g - fg')/g²",
      "Catena: [f(g(x))]' = f'(g(x))·g'(x)",
    ],
    daNonDire: [
      "Non confondere la regola del prodotto con la derivazione di una composizione",
    ],
    raccomandazioni: `Le derivate fondamentali devono essere sapute a memoria. Esercitarsi sui calcoli più complessi con composizione e quoziente.`,
  },

  "teoremi-derivate": {
    titolo: "Teoremi di Rolle, Lagrange e Cauchy",
    spiegazione: `
<strong>Teorema di Rolle:</strong>
Se f è:
- continua su [a, b]
- derivabile su (a, b)
- f(a) = f(b)
allora ∃c ∈ (a, b) tale che f'(c) = 0.
Interpretazione: se la funzione ha lo stesso valore agli estremi, in mezzo c'è almeno un punto di tangente orizzontale.

<strong>Teorema di Lagrange (del valor medio):</strong>
Se f è continua su [a, b] e derivabile su (a, b), allora:
∃c ∈ (a, b) tale che:
<code>f'(c) = [f(b) − f(a)] / (b − a)</code>
Interpretazione: esiste almeno un punto in cui la tangente è parallela alla corda che unisce (a, f(a)) e (b, f(b)).

<strong>Corollari di Lagrange:</strong>
- Se f'(x) = 0 su (a, b) → f è costante.
- Se f'(x) > 0 su (a, b) → f è strettamente crescente.
- Se f'(x) < 0 su (a, b) → f è strettamente decrescente.

<strong>Teorema di Cauchy (valor medio generalizzato):</strong>
Se f e g soddisfano le ipotesi di Lagrange e g'(x) ≠ 0:
∃c ∈ (a, b) tale che:
<code>[f(b)−f(a)] / [g(b)−g(a)] = f'(c)/g'(c)</code>
(Usato per dimostrare De l'Hôpital)
    `,
    domande: [
      "Cosa afferma il Teorema di Rolle?",
      "Cosa afferma il Teorema di Lagrange?",
      "Quali sono i corollari del Teorema di Lagrange?",
    ],
    qa: [
      { domanda: "Cosa ci dice il Teorema di Lagrange intuitivamente?", risposta: "Che tra due punti di una curva liscia esiste sempre un punto in cui la tangente è parallela alla corda che li unisce. Come dire: se in un viaggio in auto la velocità media è 100 km/h, in un certo istante la velocità istantanea era esattamente 100 km/h." },
    ],
    daRicordare: [
      "Rolle: f(a)=f(b) → ∃c tale che f'(c)=0",
      "Lagrange: ∃c tale che f'(c) = [f(b)-f(a)]/(b-a)",
      "Corollari: f'>0 ↔ crescente, f'<0 ↔ decrescente, f'=0 ↔ costante",
    ],
    daNonDire: [
      "Non dimenticare le ipotesi (continuità su [a,b], derivabilità su (a,b))",
    ],
    raccomandazioni: `Lagrange è il teorema più importante per lo studio di funzione. Collegarlo ai corollari sulla monotonia.`,
  },

};
