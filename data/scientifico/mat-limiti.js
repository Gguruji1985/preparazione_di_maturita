var TOPIC_LIMITI = {

  "concetto-limite": {
    titolo: "Concetto di Limite",
    spiegazione: `
Il <strong>limite</strong> è il concetto fondamentale dell'Analisi Matematica. Descrive il comportamento di una funzione quando la variabile indipendente si avvicina a un certo valore.

<strong>Definizione intuitiva:</strong>
<em>lim<sub>x→c</sub> f(x) = L</em> significa: man mano che x si avvicina a c (senza necessariamente raggiungerlo), f(x) si avvicina a L.

<strong>Definizione formale (ε-δ di Cauchy-Weierstrass):</strong>
∀ε > 0, ∃δ > 0 tale che 0 < |x − c| < δ ⟹ |f(x) − L| < ε.

<strong>Tipi di limite:</strong>
- <strong>Limite finito per x→c finito:</strong> lim<sub>x→c</sub> f(x) = L
- <strong>Limite infinito:</strong> lim<sub>x→c</sub> f(x) = ±∞
- <strong>Limite all'infinito:</strong> lim<sub>x→±∞</sub> f(x) = L
- <strong>Limiti destro e sinistro:</strong> lim<sub>x→c<sup>+</sup></sub> e lim<sub>x→c<sup>−</sup></sub>

Il limite esiste e vale L se e solo se i limiti destro e sinistro esistono e valgono entrambi L.

<strong>Forme indeterminate:</strong>
0/0, ∞/∞, ∞−∞, 0·∞, 1<sup>∞</sup>, 0<sup>0</sup>, ∞<sup>0</sup>
Richiedono tecniche specifiche per essere risolte (de l'Hôpital, sviluppi di Taylor, ecc.)
    `,
    domande: [
      "Cosa si intende per limite di una funzione?",
      "Qual è la definizione formale (ε-δ) di limite?",
      "Cosa sono i limiti destro e sinistro?",
      "Cosa sono le forme indeterminate?",
    ],
    qa: [
      { domanda: "Perché il limite è importante nell'analisi?", risposta: "Il limite è lo strumento con cui si studiano i comportamenti 'al confine': cosa succede a una funzione vicino a un punto dove potrebbe non essere definita, o all'infinito. Senza il concetto di limite non si possono definire continuità, derivata o integrale." },
      { domanda: "Quando un limite non esiste?", risposta: "Un limite non esiste quando: i limiti destro e sinistro sono diversi (es. f(x)=|x|/x per x→0), quando la funzione oscilla senza avvicinarsi a nessun valore (es. sin(1/x) per x→0), o quando diverge a ±∞ da sinistra e destra diversamente." },
    ],
    daRicordare: [
      "lim f(x)=L: f(x) si avvicina a L quando x si avvicina a c",
      "Definizione ε-δ: per ogni ε>0 esiste δ>0 tale che ...",
      "Il limite esiste ⟺ limite destro = limite sinistro",
      "Forme indeterminate: 0/0, ∞/∞, ∞−∞, 0·∞, 1^∞, 0^0, ∞^0",
    ],
    daNonDire: [
      "Non dire che il limite 'è il valore della funzione in c': la funzione potrebbe non essere definita in c",
    ],
    raccomandazioni: `Il limite è la base di tutto l'Analisi. La commissione chiede spesso la definizione intuitiva e poi quella formale, e il calcolo di limiti con forme indeterminate.`,
  },

  "calcolo-limiti": {
    titolo: "Calcolo dei Limiti e Teoremi",
    spiegazione: `
<strong>Teoremi fondamentali sui limiti:</strong>

<strong>Algebra dei limiti</strong> (se i limiti esistono finiti):
- lim [f(x) + g(x)] = lim f(x) + lim g(x)
- lim [f(x) · g(x)] = lim f(x) · lim g(x)
- lim [f(x) / g(x)] = lim f(x) / lim g(x)  (se lim g(x) ≠ 0)

<strong>Limiti notevoli (fondamentali):</strong>
- lim<sub>x→0</sub> sin(x)/x = 1
- lim<sub>x→0</sub> (1−cos x)/x² = 1/2
- lim<sub>x→0</sub> (e<sup>x</sup>−1)/x = 1
- lim<sub>x→0</sub> ln(1+x)/x = 1
- lim<sub>x→∞</sub> (1 + 1/x)<sup>x</sup> = e

<strong>Regola di De l'Hôpital:</strong>
Per le forme indeterminate 0/0 e ∞/∞:
lim f(x)/g(x) = lim f'(x)/g'(x)
purché il secondo limite esista.

<strong>Teorema del confronto (carabinieri):</strong>
Se g(x) ≤ f(x) ≤ h(x) e lim g(x) = lim h(x) = L, allora lim f(x) = L.

<strong>Limite di funzioni composte, funzioni razionali, irrazionali, esponenziali, logaritmiche.</strong>
    `,
    domande: [
      "Quali sono i limiti notevoli più importanti?",
      "Come si applica la regola di De l'Hôpital?",
      "Cosa dice il teorema del confronto?",
      "Come si calcola lim (1+1/x)^x per x→∞?",
    ],
    qa: [
      { domanda: "Perché lim sin(x)/x = 1 per x→0?", risposta: "Geometricamente: per x piccolo (in radianti), sin(x) ≈ x (l'arco e la corda si avvicinano). Rigorosamente si dimostra con il teorema del confronto: per 0 < x < π/2 si ha cos(x) < sin(x)/x < 1, e poiché lim cos(x) = 1, per il teorema dei carabinieri il limite vale 1." },
      { domanda: "Quando si può applicare De l'Hôpital?", risposta: "Solo nelle forme indeterminate 0/0 e ∞/∞. Si derivano separatamente numeratore e denominatore (non si applica la regola del quoziente!). Si può applicare più volte. Attenzione: si può applicare solo se il limite delle derivate esiste." },
    ],
    daRicordare: [
      "Limiti notevoli: sin(x)/x→1, (e^x-1)/x→1, ln(1+x)/x→1, (1+1/x)^x→e",
      "De l'Hôpital: per 0/0 e ∞/∞, derivare num. e den. separatamente",
      "Teorema del confronto: se g≤f≤h e lim g=lim h=L allora lim f=L",
    ],
    daNonDire: [
      "Non applicare De l'Hôpital a forme che non sono 0/0 o ∞/∞",
    ],
    raccomandazioni: `I limiti notevoli devono essere memorizzati. La commissione li chiede spesso nel calcolo di limiti con forme indeterminate.`,
  },

  "asintoti": {
    titolo: "Asintoti",
    spiegazione: `
Un <strong>asintoto</strong> è una retta a cui la curva si avvicina indefinitamente.

<strong>Asintoto orizzontale:</strong>
y = L se lim<sub>x→+∞</sub> f(x) = L oppure lim<sub>x→−∞</sub> f(x) = L.
Esempio: y = 1/(1+e<sup>−x</sup>) ha asintoto y=0 per x→−∞ e y=1 per x→+∞.

<strong>Asintoto verticale:</strong>
x = c se lim<sub>x→c<sup>±</sup></sub> f(x) = ±∞.
Esempio: y = 1/x ha asintoto verticale x = 0.

<strong>Asintoto obliquo:</strong>
y = mx + q se:
- m = lim<sub>x→∞</sub> f(x)/x  (deve essere finito e non nullo)
- q = lim<sub>x→∞</sub> [f(x) − mx]  (deve essere finito)

Se m = 0 si ricade nell'asintoto orizzontale.

<strong>Una funzione può avere:</strong>
- Al massimo 2 asintoti orizzontali (uno per +∞, uno per −∞).
- Infiniti asintoti verticali (se ha infiniti punti di discontinuità).
- Al massimo 2 asintoti obliqui (uno per +∞, uno per −∞).
    `,
    domande: [
      "Come si trovano gli asintoti orizzontali, verticali e obliqui?",
      "Quando una funzione ha asintoto obliquo?",
      "Come si calcola l'equazione dell'asintoto obliquo?",
    ],
    qa: [
      { domanda: "Quando non c'è asintoto obliquo?", risposta: "Quando m = lim f(x)/x è infinito, zero, o non esiste. Se m=0 c'è asintoto orizzontale. Se m non esiste, non c'è né orizzontale né obliquo per quel ramo. Se m è finito non nullo ma q = lim[f(x)−mx] non è finito, non c'è asintoto obliquo." },
    ],
    daRicordare: [
      "Asintoto orizzontale: lim f(x) = L per x→±∞",
      "Asintoto verticale: lim f(x) = ±∞ per x→c",
      "Asintoto obliquo: m = lim f(x)/x, q = lim[f(x)−mx]",
      "Una funzione ha al massimo 2 asintoti obliqui",
    ],
    daNonDire: [
      "Non dire che la curva non può toccare l'asintoto: può toccarla o anche attraversarla, si avvicina 'definitivamente' solo all'infinito",
    ],
    raccomandazioni: `Gli asintoti sono parte fondamentale dello studio di funzione. Esercitarsi a trovarli per funzioni razionali, irrazionali e trascendenti.`,
  },

};
