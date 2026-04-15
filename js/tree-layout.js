// tree-layout.js — calcola le posizioni x,y di ogni nodo visibile
// Non tocca il DOM. Restituisce un oggetto positionMap: { nodeId → { x, y } }

const TreeLayout = (() => {

  // Costanti di spaziatura
  const NODE_WIDTH_BASE   = 160;  // larghezza stimata di un nodo (px)
  const NODE_HEIGHT       = 38;   // altezza di un nodo (px)
  const H_GAP             = 24;   // spazio orizzontale minimo tra nodi fratelli (px)
  const V_GAP             = 72;   // spazio verticale tra livelli (px)
  const ROOT_Y            = 80;   // y del nodo root

  // ─────────────────────────────────────────
  // ENTRY POINT
  // Prende la lista dei nodi visibili (con info su livello e genitore)
  // e restituisce la mappa delle posizioni
  // ─────────────────────────────────────────
  function calculate(visibleNodes, containerWidth) {
    const SIDE_PADDING = NODE_WIDTH_BASE / 2 + 20; // min distanza dal bordo sinistro/destro

    // Costruiamo un dizionario id → nodo per accesso rapido
    const nodeMap = {};
    visibleNodes.forEach(n => { nodeMap[n.id] = n; });

    // Raggruppiamo i nodi per genitore
    const childrenMap = {};
    visibleNodes.forEach(n => {
      if (n.parentId) {
        if (!childrenMap[n.parentId]) childrenMap[n.parentId] = [];
        childrenMap[n.parentId].push(n.id);
      }
    });

    const positions = {};

    const rootNode = visibleNodes.find(n => n.level === 0);
    if (!rootNode) return positions;

    // Calcoliamo la larghezza totale occupata da ogni sottoalbero
    const subtreeWidths = {};
    computeSubtreeWidths(rootNode.id, childrenMap, subtreeWidths);

    // Il root parte al centro tra il totale dell'albero e il contenitore,
    // scegliendo il valore più grande così da non andare mai fuori
    const treeWidth = subtreeWidths[rootNode.id];
    const cx = Math.max(containerWidth / 2, treeWidth / 2 + SIDE_PADDING);
    positions[rootNode.id] = { x: cx, y: ROOT_Y };

    // Assegniamo le posizioni top-down ricorsivamente
    assignPositions(rootNode.id, cx, ROOT_Y, childrenMap, positions, subtreeWidths);

    // Sicurezza: se qualche nodo ha x < SIDE_PADDING, trasla tutto a destra
    const minX = Math.min(...Object.values(positions).map(p => p.x));
    if (minX < SIDE_PADDING) {
      const shift = SIDE_PADDING - minX;
      Object.keys(positions).forEach(id => { positions[id].x += shift; });
    }

    return positions;
  }

  // ─────────────────────────────────────────
  // Calcola la larghezza totale del sottoalbero di un nodo
  // (somma ricorsiva dei figli, con gap tra di loro)
  // ─────────────────────────────────────────
  function computeSubtreeWidths(nodeId, childrenMap, subtreeWidths) {
    const children = childrenMap[nodeId] || [];

    if (children.length === 0) {
      // Nodo foglia: la sua larghezza è la larghezza del nodo stesso
      subtreeWidths[nodeId] = NODE_WIDTH_BASE;
      return NODE_WIDTH_BASE;
    }

    let totalWidth = 0;
    children.forEach((childId, i) => {
      const w = computeSubtreeWidths(childId, childrenMap, subtreeWidths);
      totalWidth += w;
      if (i < children.length - 1) totalWidth += H_GAP;
    });

    // Il nodo stesso deve essere almeno largo quanto il suo contenuto
    subtreeWidths[nodeId] = Math.max(totalWidth, NODE_WIDTH_BASE);
    return subtreeWidths[nodeId];
  }

  // ─────────────────────────────────────────
  // Assegna posizioni ricorsivamente top-down
  // parentX = centro orizzontale del genitore
  // parentY = y del genitore
  // ─────────────────────────────────────────
  function assignPositions(nodeId, parentX, parentY, childrenMap, positions, subtreeWidths) {
    const children = childrenMap[nodeId] || [];
    if (children.length === 0) return;

    const childY = parentY + NODE_HEIGHT / 2 + V_GAP;

    // Larghezza totale di tutti i figli messi in fila
    let totalChildrenWidth = 0;
    children.forEach((childId, i) => {
      totalChildrenWidth += subtreeWidths[childId];
      if (i < children.length - 1) totalChildrenWidth += H_GAP;
    });

    // Partenza x: centrata rispetto al genitore
    let startX = parentX - totalChildrenWidth / 2;

    children.forEach(childId => {
      const w = subtreeWidths[childId];
      const childX = startX + w / 2;

      positions[childId] = { x: childX, y: childY };

      // Ricorsione sui figli del figlio
      assignPositions(childId, childX, childY, childrenMap, positions, subtreeWidths);

      startX += w + H_GAP;
    });
  }

  // ─────────────────────────────────────────
  // Calcola l'altezza totale dell'albero (per dimensionare il contenitore)
  // ─────────────────────────────────────────
  function getTotalHeight(positions) {
    if (Object.keys(positions).length === 0) return 300;
    const maxY = Math.max(...Object.values(positions).map(p => p.y));
    return maxY + NODE_HEIGHT + 60;  // padding in fondo
  }

  // ─────────────────────────────────────────
  // Calcola la larghezza totale necessaria (per scroll orizzontale)
  // ─────────────────────────────────────────
  function getTotalWidth(positions) {
    if (Object.keys(positions).length === 0) return 600;
    // maxX is the center of the rightmost node — add half node width + padding
    const maxX = Math.max(...Object.values(positions).map(p => p.x));
    return maxX + NODE_WIDTH_BASE / 2 + 40;
  }

  return { calculate, getTotalHeight, getTotalWidth };

})();
