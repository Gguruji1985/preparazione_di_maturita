// tree-engine.js — sidebar collapsible tree (list style)

const TreeEngine = (() => {

  const treeRoot = document.getElementById('tree-root');

  const openNodes   = new Set();
  const doneNodes   = new Set();
  let   activeNodeId = null;
  let   onTopicClick = null;

  // id → { li, nodeRow, childrenUl }
  const nodeMap = {};

  // ─────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────
  function init(tree, topicClickCallback) {
    onTopicClick = topicClickCallback;
    treeRoot.innerHTML = '';
    _buildItem(tree, treeRoot, null);
  }

  // ─────────────────────────────────────────
  // Builds one <li> and recurses into children
  // ─────────────────────────────────────────
  function _buildItem(nodeData, parentUl, parentId) {
    const li = document.createElement('li');
    li.className = `tree-item tree-item--level-${nodeData.level}`;
    li.dataset.id = nodeData.id;

    // ── Node row ──
    const row = document.createElement('div');
    row.className = 'tree-node';
    row.setAttribute('role', 'treeitem');
    row.dataset.id = nodeData.id;

    const hasChildren = nodeData.children && nodeData.children.length > 0;
    const isLeaf = !!nodeData.dataFile;

    // Arrow / dot indicator
    const indicator = document.createElement('span');
    if (hasChildren) {
      indicator.className = 'node-arrow';
      indicator.textContent = '▶';
      indicator.setAttribute('aria-hidden', 'true');
    } else {
      indicator.className = 'node-arrow-leaf';
      indicator.textContent = '●';
      indicator.setAttribute('aria-hidden', 'true');
    }
    row.appendChild(indicator);

    // Label
    const label = document.createElement('span');
    label.className = 'node-label';
    label.textContent = nodeData.label;
    row.appendChild(label);

    li.appendChild(row);

    // ── Children list (if any) ──
    let childrenUl = null;
    if (hasChildren) {
      childrenUl = document.createElement('ul');
      childrenUl.className = 'tree-children';
      childrenUl.setAttribute('role', 'group');

      // Build children immediately (they are hidden via CSS max-height)
      nodeData.children.forEach(child => {
        _buildItem(child, childrenUl, nodeData.id);
      });

      li.appendChild(childrenUl);
    }

    // ── Store refs ──
    nodeMap[nodeData.id] = { li, row, childrenUl, nodeData };

    // ── Click handler ──
    row.addEventListener('click', () => _handleClick(nodeData));

    parentUl.appendChild(li);
  }

  // ─────────────────────────────────────────
  // CLICK HANDLER
  // ─────────────────────────────────────────
  function _handleClick(nodeData) {
    if (nodeData.dataFile) {
      // Leaf — open study panel
      _setActive(nodeData.id);
      if (onTopicClick) onTopicClick(nodeData);
      return;
    }

    if (nodeData.children && nodeData.children.length > 0) {
      _toggle(nodeData.id);
    }
  }

  // ─────────────────────────────────────────
  // EXPAND / COLLAPSE / TOGGLE
  // ─────────────────────────────────────────
  function _toggle(id) {
    if (openNodes.has(id)) {
      _collapse(id);
    } else {
      _expand(id);
    }
  }

  function _expand(id) {
    const entry = nodeMap[id];
    if (!entry || !entry.childrenUl) return;

    openNodes.add(id);
    entry.row.classList.add('node-open');
    entry.childrenUl.classList.add('open');
  }

  function _collapse(id) {
    const entry = nodeMap[id];
    if (!entry || !entry.childrenUl) return;

    openNodes.delete(id);
    entry.row.classList.remove('node-open');
    entry.childrenUl.classList.remove('open');

    // Recursively collapse all descendants
    _collapseDescendants(entry.nodeData);
  }

  function _collapseDescendants(nodeData) {
    if (!nodeData.children) return;
    nodeData.children.forEach(child => {
      if (openNodes.has(child.id)) {
        openNodes.delete(child.id);
        const e = nodeMap[child.id];
        if (e) {
          e.row.classList.remove('node-open');
          if (e.childrenUl) e.childrenUl.classList.remove('open');
        }
      }
      _collapseDescendants(child);
    });
  }

  // ─────────────────────────────────────────
  // SET ACTIVE TOPIC
  // ─────────────────────────────────────────
  function _setActive(id) {
    if (activeNodeId) {
      const prev = nodeMap[activeNodeId];
      if (prev) prev.row.classList.remove('node-active');
    }
    activeNodeId = id;
    const curr = nodeMap[id];
    if (curr) {
      curr.row.classList.add('node-active');
      // Scroll into view in the sidebar
      curr.row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  // ─────────────────────────────────────────
  // MARK DONE
  // ─────────────────────────────────────────
  function markDone(id) {
    doneNodes.add(id);
    const entry = nodeMap[id];
    if (entry) entry.row.classList.add('node-done');
  }

  // ─────────────────────────────────────────
  // EXPAND ALL / COLLAPSE ALL
  // ─────────────────────────────────────────
  function expandAll(nodeData = TREE) {
    if (nodeData.children && nodeData.children.length > 0) {
      _expand(nodeData.id);
      nodeData.children.forEach(child => expandAll(child));
    }
  }

  function collapseAll() {
    openNodes.clear();
    Object.values(nodeMap).forEach(({ row, childrenUl }) => {
      row.classList.remove('node-open');
      if (childrenUl) childrenUl.classList.remove('open');
    });
  }

  // ─────────────────────────────────────────
  // SEARCH
  // ─────────────────────────────────────────
  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) { clearSearch(); return; }

    let anyMatch = false;

    Object.entries(nodeMap).forEach(([id, { row, nodeData }]) => {
      const label = nodeData.label.toLowerCase();
      if (label.includes(q)) {
        row.classList.add('node-highlighted');
        row.classList.remove('node-dimmed');
        anyMatch = true;
        // Expand all ancestors so the match is visible
        _expandAncestors(id);
      } else {
        row.classList.remove('node-highlighted');
        row.classList.add('node-dimmed');
      }
    });
  }

  function _expandAncestors(id) {
    // Walk up the tree and expand every parent
    let found = _findParentId(TREE, id);
    while (found) {
      _expand(found);
      found = _findParentId(TREE, found);
    }
  }

  function _findParentId(node, targetId) {
    if (!node.children) return null;
    for (const child of node.children) {
      if (child.id === targetId) return node.id;
      const found = _findParentId(child, targetId);
      if (found) return found;
    }
    return null;
  }

  function clearSearch() {
    Object.values(nodeMap).forEach(({ row }) => {
      row.classList.remove('node-highlighted', 'node-dimmed');
    });
  }

  return { init, markDone, expandAll, collapseAll, search, clearSearch };

})();
