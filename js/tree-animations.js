// tree-animations.js — gestisce tutte le animazioni dei nodi e delle linee SVG

const TreeAnimations = (() => {

  // ─────────────────────────────────────────
  // Anima i nodi esistenti verso le loro nuove posizioni
  // oldPositions: { id → {x,y} }   (dove erano)
  // newPositions: { id → {x,y} }   (dove devono andare)
  // nodeElements: { id → DOMElement }
  // ─────────────────────────────────────────
  function moveNodes(oldPositions, newPositions, nodeElements) {
    Object.keys(newPositions).forEach(id => {
      const el = nodeElements[id];
      if (!el) return;

      const newPos = newPositions[id];

      // Se il nodo non aveva una posizione precedente, sta entrando ora
      if (!oldPositions[id]) return;

      el.style.left = newPos.x + 'px';
      el.style.top  = newPos.y + 'px';
      // La transizione CSS in tree.css (transition: transform 0.35s) gestisce il movimento
    });
  }

  // ─────────────────────────────────────────
  // Anima l'entrata di nuovi nodi
  // ─────────────────────────────────────────
  function enterNodes(nodeIds, nodeElements, positions) {
    nodeIds.forEach((id, i) => {
      const el = nodeElements[id];
      if (!el || !positions[id]) return;

      // Posiziona subito dove deve stare
      el.style.left = positions[id].x + 'px';
      el.style.top  = positions[id].y + 'px';

      // Piccolo delay a cascata per i fratelli
      el.style.animationDelay = (i * 40) + 'ms';
      el.classList.add('entering');

      el.addEventListener('animationend', () => {
        el.classList.remove('entering');
        el.style.animationDelay = '';
      }, { once: true });
    });
  }

  // ─────────────────────────────────────────
  // Anima l'uscita dei nodi che scompaiono
  // Restituisce una Promise che si risolve quando l'animazione finisce
  // ─────────────────────────────────────────
  function exitNodes(nodeIds, nodeElements) {
    return Promise.all(nodeIds.map(id => {
      const el = nodeElements[id];
      if (!el) return Promise.resolve();

      return new Promise(resolve => {
        el.classList.add('exiting');
        el.addEventListener('animationend', () => {
          resolve();
        }, { once: true });
        // Fallback timeout se l'animazione non parte
        setTimeout(resolve, 350);
      });
    }));
  }

  // ─────────────────────────────────────────
  // Disegna una linea SVG tra due punti con animazione
  // ─────────────────────────────────────────
  function drawLine(svg, fromX, fromY, toX, toY, lineId, level) {
    // Rimuovi la linea precedente se esiste
    const existing = svg.querySelector(`[data-line-id="${lineId}"]`);
    if (existing) existing.remove();

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Curva smooth verticale: parte dal centro del genitore, arriva al centro del figlio
    const midY = (fromY + toY) / 2;
    const d = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;

    path.setAttribute('d', d);
    path.setAttribute('data-line-id', lineId);
    path.classList.add('tree-line', `tree-line--level-${level}`);

    // Calcola lunghezza per animazione stroke-dasharray
    svg.appendChild(path);
    const length = path.getTotalLength();
    path.style.setProperty('--line-length', length + 'px');
    path.classList.add('line-drawing');

    path.addEventListener('animationend', () => {
      path.classList.remove('line-drawing');
      path.style.removeProperty('--line-length');
    }, { once: true });

    return path;
  }

  // ─────────────────────────────────────────
  // Rimuove una linea SVG con animazione di uscita
  // ─────────────────────────────────────────
  function eraseLine(svg, lineId) {
    const path = svg.querySelector(`[data-line-id="${lineId}"]`);
    if (!path) return Promise.resolve();

    return new Promise(resolve => {
      const length = path.getTotalLength();
      path.style.setProperty('--line-length', length + 'px');
      path.classList.add('line-erasing');

      path.addEventListener('animationend', () => {
        path.remove();
        resolve();
      }, { once: true });

      setTimeout(resolve, 400);
    });
  }

  // ─────────────────────────────────────────
  // Evidenzia il percorso attivo (linee lungo il ramo selezionato)
  // ─────────────────────────────────────────
  function highlightPath(svg, activePath, allLines) {
    // Prima rimuovi highlight da tutte le linee
    svg.querySelectorAll('.tree-line').forEach(el => {
      el.classList.remove('tree-line--active');
    });

    // Aggiungi highlight alle linee del percorso attivo
    activePath.forEach(lineId => {
      const el = svg.querySelector(`[data-line-id="${lineId}"]`);
      if (el) el.classList.add('tree-line--active');
    });
  }

  return {
    moveNodes,
    enterNodes,
    exitNodes,
    drawLine,
    eraseLine,
    highlightPath,
  };

})();
