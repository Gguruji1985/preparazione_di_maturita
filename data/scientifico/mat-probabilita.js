var TOPIC_PROBABILITA = {

  "probabilita-classica": {
    titolo: "Probabilità Classica e Assiomi",
    spiegazione: `
La <strong>probabilità</strong> misura la possibilità che un evento si verifichi.

<strong>Definizione classica (Laplace):</strong>
<code>P(E) = casi favorevoli / casi totali</code>
Valida quando tutti gli esiti sono ugualmente probabili.

<strong>Definizione frequentista:</strong>
P(E) = limite della frequenza relativa al crescere delle prove.

<strong>Assiomi di Kolmogorov (definizione assiomatica):</strong>
1. P(E) ≥ 0  per ogni evento E
2. P(Ω) = 1  (l'evento certo ha probabilità 1)
3. P(A ∪ B) = P(A) + P(B) se A e B sono incompatibili (A ∩ B = ∅)

<strong>Conseguenze:</strong>
- P(∅) = 0
- P(Ā) = 1 − P(A)  (evento complementare)
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B)  (eventi non necessariamente incompatibili)

<strong>Spazio campionario e eventi:</strong>
- Ω: spazio campionario (tutti gli esiti possibili).
- Evento: sottoinsieme di Ω.
- Evento elementare: singolo esito {ω}.
- Evento impossibile: ∅; evento certo: Ω.
    `,
    domande: [
      "Come si calcola la probabilità classica?",
      "Quali sono gli assiomi di Kolmogorov?",
      "Come si calcola la probabilità dell'unione di due eventi?",
    ],
    qa: [
      { domanda: "Qual è la differenza tra probabilità classica e frequentista?", risposta: "La probabilità classica (Laplace) è applicabile quando gli esiti sono finiti e ugualmente probabili: P(E) = favorevoli/totali. La probabilità frequentista si basa sulla ripetizione: P(E) è il limite del rapporto frequenza/numero di prove. La seconda è più generale e applicabile a esperimenti reali." },
    ],
    daRicordare: [
      "P classica = casi favorevoli / casi totali",
      "Assiomi Kolmogorov: P≥0, P(Ω)=1, additività per eventi incompatibili",
      "P(Ā) = 1 − P(A)",
      "P(A∪B) = P(A) + P(B) − P(A∩B)",
    ],
    daNonDire: [
      "Non dire che P(A∪B) = P(A)+P(B) in generale: vale solo per eventi incompatibili",
    ],
    raccomandazioni: `La probabilità è spesso nella seconda prova. Esercitarsi con la formula dell'unione e i vari tipi di problemi combinatori.`,
  },

  "probabilita-condizionata": {
    titolo: "Probabilità Condizionata e Indipendenza",
    spiegazione: `
<strong>Probabilità condizionata:</strong>
La probabilità di A dato B (con P(B) > 0):
<code>P(A|B) = P(A ∩ B) / P(B)</code>
Equivalentemente: P(A ∩ B) = P(A|B) · P(B).

<strong>Indipendenza:</strong>
A e B sono indipendenti se:
<code>P(A ∩ B) = P(A) · P(B)</code>
Equivalentemente: P(A|B) = P(A) (conoscere B non cambia la probabilità di A).
Attenzione: indipendenza ≠ incompatibilità!

<strong>Formula della probabilità totale:</strong>
Se B₁, B₂, …, Bₙ formano una partizione di Ω:
<code>P(A) = Σ P(A|Bᵢ) · P(Bᵢ)</code>

<strong>Teorema di Bayes:</strong>
<code>P(Bₖ|A) = [P(A|Bₖ) · P(Bₖ)] / P(A)</code>
Permette di «invertire» la probabilità condizionata: da P(effetto|causa) a P(causa|effetto).
Applicazioni: diagnosi medica, test di screening, classificatori probabilistici.
    `,
    domande: [
      "Come si calcola la probabilità condizionata?",
      "Cosa significa che due eventi sono indipendenti?",
      "Come funziona il Teorema di Bayes?",
    ],
    qa: [
      { domanda: "Qual è la differenza tra eventi incompatibili e eventi indipendenti?", risposta: "Gli eventi incompatibili non possono verificarsi insieme (P(A∩B)=0). Gli eventi indipendenti possono verificarsi insieme, ma il verificarsi di uno non influenza la probabilità dell'altro. Attenzione: due eventi incompatibili non sono indipendenti (se A si verifica, B non può)." },
      { domanda: "Un esempio intuitivo del Teorema di Bayes?", risposta: "Test medico: P(malato|positivo) si calcola da P(positivo|malato) (sensibilità), P(malato) (prevalenza della malattia) e P(positivo). Spesso il risultato sorprende: se la malattia è rara, anche un test molto accurato può dare molti falsi positivi." },
    ],
    daRicordare: [
      "P(A|B) = P(A∩B)/P(B)",
      "Indipendenza: P(A∩B) = P(A)·P(B)",
      "Formula della probabilità totale: P(A) = ΣP(A|Bᵢ)·P(Bᵢ)",
      "Bayes: P(Bₖ|A) = P(A|Bₖ)·P(Bₖ) / P(A)",
    ],
    daNonDire: [
      "Non confondere eventi incompatibili (P(A∩B)=0) con eventi indipendenti",
    ],
    raccomandazioni: `Il Teorema di Bayes è molto apprezzato dalla commissione perché unisce matematica e ragionamento critico. Utile collegarlo a diagnosi mediche o test clinici.`,
  },

  "distribuzioni": {
    titolo: "Distribuzioni di Probabilità",
    spiegazione: `
Una <strong>variabile aleatoria</strong> X associa un numero reale a ogni esito dell'esperimento.

<strong>Variabile aleatoria discreta:</strong>
Assume valori in un insieme finito o numerabile.
Funzione di probabilità: P(X = xᵢ) = pᵢ, con Σpᵢ = 1.
Valore atteso: E[X] = Σxᵢ·pᵢ
Varianza: Var(X) = E[(X−μ)²] = E[X²] − (E[X])²

<strong>Distribuzione Binomiale:</strong>
n prove indipendenti, probabilità di successo p costante.
P(X=k) = C(n,k)·p<sup>k</sup>·(1−p)<sup>n−k</sup>
E[X] = np;  Var(X) = np(1−p).

<strong>Distribuzione di Poisson:</strong>
P(X=k) = e<sup>−λ</sup>·λ<sup>k</sup>/k!
Per eventi rari in un intervallo di tempo. E[X] = Var(X) = λ.

<strong>Variabile aleatoria continua:</strong>
Ha densità di probabilità f(x): P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(x)dx.

<strong>Distribuzione Normale (Gaussiana):</strong>
Campana di Gauss: f(x) = 1/(σ√2π) · e<sup>−(x−μ)²/(2σ²)</sup>
μ = valore atteso; σ = deviazione standard.
Standardizzazione: Z = (X−μ)/σ → N(0,1).
    `,
    domande: [
      "Cos'è una variabile aleatoria?",
      "Cos'è la distribuzione binomiale?",
      "Cos'è la distribuzione normale?",
      "Cosa sono valore atteso e varianza?",
    ],
    qa: [
      { domanda: "Quando si usa la distribuzione binomiale?", risposta: "Quando si contano i successi in n prove indipendenti, ciascuna con la stessa probabilità p di successo. Es: lanciare una moneta 10 volte e contare le teste, testare 100 prodotti e contare i difettosi." },
    ],
    daRicordare: [
      "Binomiale: P(X=k)=C(n,k)·p^k·(1-p)^(n-k); E[X]=np",
      "Normale: curva a campana, simmetrica attorno a μ; σ = larghezza",
      "Valore atteso E[X] = media ponderata; varianza = dispersione quadratica",
    ],
    daNonDire: [
      "Non confondere deviazione standard (σ) e varianza (σ²)",
    ],
    raccomandazioni: `La distribuzione normale è fondamentale in statistica e fisica. La commissione può chiedere di standardizzare e usare la tavola della distribuzione normale.`,
  },

};
