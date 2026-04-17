var TOPIC_GEOMETRIA_ANALITICA = {

  "retta-parabola": {
    titolo: "Retta e Parabola",
    spiegazione: `
<strong>La Retta:</strong>
Equazione generale: <code>ax + by + c = 0</code>
Forma esplicita: <code>y = mx + q</code>  (m = pendenza, q = intercetta)
Retta verticale: x = k.

Distanza di un punto P(x₀,y₀) da una retta ax+by+c=0:
<code>d = |ax₀+by₀+c| / √(a²+b²)</code>

Due rette: parallele se stessa pendenza; perpendicolari se m₁·m₂ = −1.

<strong>La Parabola:</strong>
Asse parallelo all'asse y: <code>y = ax² + bx + c</code>  (a ≠ 0)
- Vertice: V = (−b/2a, −Δ/4a),  con Δ = b²−4ac
- Asse di simmetria: x = −b/2a
- a > 0: parabola verso l'alto; a < 0: verso il basso
- Intersezioni con asse x: Δ > 0 → due punti; Δ = 0 → tangente; Δ < 0 → nessuna

Asse parallelo all'asse x: <code>x = ay² + by + c</code>

<strong>Posizione reciproca retta-parabola:</strong>
Sostituire y = mx+q in y = ax²+bx+c → equazione di secondo grado.
Δ > 0: due intersezioni; Δ = 0: tangente; Δ < 0: nessuna intersezione.
    `,
    domande: [
      "Come si trova la distanza tra un punto e una retta?",
      "Come si trovano il vertice e l'asse di una parabola?",
      "Come si studia la posizione reciproca tra retta e parabola?",
    ],
    qa: [
      { domanda: "Come si trova la retta tangente a una parabola in un punto?", risposta: "In un punto P(x₀, y₀) sulla parabola y=ax²+bx+c, la tangente ha pendenza m = f'(x₀) = 2ax₀+b. L'equazione è y−y₀ = m(x−x₀). Alternativamente, con il metodo della duplicazione: si sostituisce y+y₀ = a(x+x₀)·(x) usando x² → xx₀ e y → (y+y₀)/2." },
    ],
    daRicordare: [
      "Retta: y=mx+q; distanza punto-retta: |ax₀+by₀+c|/√(a²+b²)",
      "Parabola: vertice V(−b/2a, −Δ/4a); asse x=−b/2a",
      "Posizione retta-parabola: studio del Δ del sistema",
      "Perpendicolare: m₁·m₂ = −1",
    ],
    daNonDire: [
      "Non confondere il discriminante Δ della parabola (b²−4ac) con altri usi di Δ",
    ],
    raccomandazioni: `Questi argomenti sono di geometria analitica di base, ma fondamentali. Esercitarsi sui problemi di posizione reciproca e di tangenti.`,
  },

  "coniche": {
    titolo: "Le Coniche: Circonferenza, Ellisse, Iperbole",
    spiegazione: `
Le <strong>sezioni coniche</strong> sono le curve ottenute intersecando un cono con un piano.

<strong>Circonferenza:</strong>
Centro C(a, b), raggio r:
<code>(x−a)² + (y−b)² = r²</code>
Forma generale: x²+y²+dx+ey+f=0 → completare il quadrato.
Condizione: d²/4+e²/4−f > 0 (cerchio reale).

<strong>Ellisse:</strong>
Centro all'origine, assi sugli assi cartesiani:
<code>x²/a² + y²/b² = 1</code>  (a ≠ b)
- Semiassi: a (asse x) e b (asse y).
- Se a > b: asse maggiore lungo x; fuochi F(±c, 0) con c²=a²−b².
- Se b > a: asse maggiore lungo y; fuochi F(0, ±c) con c²=b²−a².
- Eccentricità e = c/a (0 < e < 1 per ellisse).
- Definizione: luogo dei punti per cui la somma delle distanze dai fuochi è costante (= 2a).

<strong>Iperbole:</strong>
<code>x²/a² − y²/b² = 1</code>
- Fuochi F(±c, 0) con c²=a²+b².
- Asintoti: y = ±(b/a)x.
- Eccentricità e = c/a > 1.
- Definizione: luogo dei punti per cui |d₁−d₂| dai fuochi è costante (= 2a).
- Iperbole equilatera: xy = k (asintoti = assi cartesiani).
    `,
    domande: [
      "Qual è l'equazione di una circonferenza?",
      "Come si definisce un'ellisse?",
      "Qual è la differenza tra ellisse e iperbole?",
      "Come si trovano i fuochi di un'ellisse?",
    ],
    qa: [
      { domanda: "Cosa sono le sezioni coniche?", risposta: "Sono le curve risultanti dall'intersezione di un cono circolare con un piano: a seconda dell'inclinazione del piano si ottengono cerchio (piano perpendicolare all'asse), ellisse (piano obliquo), parabola (piano parallelo a una generatrice), iperbole (piano parallelo a due generatrici)." },
      { domanda: "Qual è la definizione focale dell'ellisse?", risposta: "L'ellisse è il luogo dei punti del piano la cui somma delle distanze da due punti fissi (fuochi F₁ e F₂) è costante e uguale a 2a (dove a è il semiasse maggiore). Questo spiega le orbite planetarie (Keplero: le orbite sono ellissi con il Sole in un fuoco)." },
    ],
    daRicordare: [
      "Circonferenza: (x-a)²+(y-b)²=r²",
      "Ellisse: x²/a²+y²/b²=1; somma distanze fuochi = 2a",
      "Iperbole: x²/a²-y²/b²=1; differenza distanze fuochi = 2a; asintoti y=±(b/a)x",
      "Fuochi ellisse: c²=a²-b²; fuochi iperbole: c²=a²+b²",
    ],
    daNonDire: [
      "Non confondere la formula dei fuochi dell'ellisse (c²=a²−b²) con quella dell'iperbole (c²=a²+b²)",
    ],
    raccomandazioni: `Le coniche sono spesso collegate alla fisica (orbite keplerine, ottica degli specchi). Utile sottolineare questi collegamenti interdisciplinari.`,
  },

};
