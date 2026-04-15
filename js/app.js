// app.js — punto di ingresso, collega tutto insieme

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // Cache dei file di dati già caricati
  // { dataFile → oggetto dati }
  // ─────────────────────────────────────────
  const dataCache = {};

  // ─────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────
  StudyPanel.init();

  TreeEngine.init(TREE, handleTopicClick);

  // ─────────────────────────────────────────
  // GESTIONE CLICK SU UN TOPIC (foglia dell'albero)
  // nodeData: oggetto dal TREE con id, label, level, dataFile, subtopic?
  // ─────────────────────────────────────────
  function handleTopicClick(nodeData) {
    if (!nodeData.dataFile) return;

    loadTopicData(nodeData.dataFile, (topicData) => {
      if (!topicData) {
        console.warn('Dati non trovati per:', nodeData.dataFile);
        return;
      }

      // Costruisce il breadcrumb risalendo l'albero
      const breadcrumbParts = buildBreadcrumb(nodeData.id);

      // Se il nodo specifica un subtopic iniziale, usalo
      // Altrimenti usa il primo subtopic disponibile
      const initialSubtopic = nodeData.subtopic || Object.keys(topicData)[0];

      StudyPanel.open(topicData, initialSubtopic, breadcrumbParts);
    });
  }

  // ─────────────────────────────────────────
  // CARICAMENTO DATI DEL TOPIC
  // Il file è già incluso come <script> nella pagina tramite import dinamico
  // oppure è già in memoria come variabile globale.
  // Strategia: ogni file data/ esporta una variabile globale con nome prevedibile.
  // ─────────────────────────────────────────
  function loadTopicData(dataFile, callback) {
    // Se già in cache, usa direttamente
    if (dataCache[dataFile]) {
      callback(dataCache[dataFile]);
      return;
    }

    // Controlla se la variabile globale è già disponibile (file precaricato via <script> tag)
    const preloaded = resolveDataVariable(dataFile);
    if (preloaded) {
      dataCache[dataFile] = preloaded;
      callback(preloaded);
      return;
    }

    // Carica il file dinamicamente (funziona solo con server HTTP, non con file://)
    const script = document.createElement('script');
    script.src = dataFile;
    script.onload = () => {
      // Il file ha definito una variabile globale — la troviamo per nome
      const data = resolveDataVariable(dataFile);
      if (data) {
        dataCache[dataFile] = data;
        callback(data);
      } else {
        callback(null);
      }
    };
    script.onerror = () => {
      console.warn('File dati non ancora scritto:', dataFile);
      callback(null);
    };
    document.head.appendChild(script);
  }

  // ─────────────────────────────────────────
  // Mappa dataFile → nome variabile globale
  // Convenzione: ogni file data/ definisce una variabile TOPIC_XXXX
  // ─────────────────────────────────────────
  const FILE_TO_VAR = {
    // Informatica
    'data/informatica/informatica-basi-di-dati.js':   'TOPIC_BASI_DI_DATI',
    'data/informatica/informatica-reti.js':            'TOPIC_RETI',
    'data/informatica/informatica-programmazione.js':  'TOPIC_PROGRAMMAZIONE',
    'data/informatica/informatica-sistemi-operativi.js': 'TOPIC_SISTEMI_OPERATIVI',
    'data/informatica/informatica-web.js':             'TOPIC_WEB',
    'data/informatica/sistemi-reti-architetture.js':   'TOPIC_ARCHITETTURE',
    'data/informatica/sistemi-reti-lan.js':            'TOPIC_LAN',
    'data/informatica/sistemi-reti-protocolli.js':     'TOPIC_PROTOCOLLI',
    'data/informatica/sistemi-reti-sicurezza.js':      'TOPIC_SICUREZZA_SISTEMI',
    'data/informatica/sistemi-reti-cloud.js':          'TOPIC_CLOUD',
    'data/informatica/tpsit-concorrenza.js':           'TOPIC_CONCORRENZA',
    'data/informatica/tpsit-socket.js':                'TOPIC_SOCKET',
    'data/informatica/tpsit-web-server.js':            'TOPIC_WEB_SERVER',
    'data/informatica/tpsit-webservices.js':           'TOPIC_WEBSERVICES',
    'data/informatica/tpsit-progettazione.js':         'TOPIC_PROGETTAZIONE',
    // Scientifico
    'data/scientifico/mat-limiti.js':              'TOPIC_LIMITI',
    'data/scientifico/mat-continuita.js':          'TOPIC_CONTINUITA',
    'data/scientifico/mat-derivate.js':            'TOPIC_DERIVATE',
    'data/scientifico/mat-studio-funzione.js':     'TOPIC_STUDIO_FUNZIONE',
    'data/scientifico/mat-integrali.js':           'TOPIC_INTEGRALI',
    'data/scientifico/mat-geometria-analitica.js': 'TOPIC_GEOMETRIA_ANALITICA',
    'data/scientifico/mat-probabilita.js':         'TOPIC_PROBABILITA',
    'data/scientifico/fis-meccanica.js':           'TOPIC_MECCANICA',
    'data/scientifico/fis-termodinamica.js':       'TOPIC_TERMODINAMICA',
    'data/scientifico/fis-elettromagnetismo.js':   'TOPIC_ELETTROMAGNETISMO',
    'data/scientifico/fis-ottica.js':              'TOPIC_OTTICA',
    'data/scientifico/fis-moderna.js':             'TOPIC_FISICA_MODERNA',
    'data/scientifico/sci-chimica-organica.js':    'TOPIC_CHIMICA_ORGANICA',
    'data/scientifico/sci-biologia.js':            'TOPIC_BIOLOGIA',
    'data/scientifico/sci-terra.js':               'TOPIC_SCIENZE_TERRA',
    // Comune (Italiano, Storia, Filosofia)
    'data/comune/ita-origini.js':           'TOPIC_ITA_ORIGINI',
    'data/comune/ita-umanesimo.js':         'TOPIC_ITA_UMANESIMO',
    'data/comune/ita-illuminismo.js':       'TOPIC_ITA_ILLUMINISMO',
    'data/comune/ita-romanticismo.js':      'TOPIC_ITA_ROMANTICISMO',
    'data/comune/ita-verismo.js':           'TOPIC_ITA_VERISMO',
    'data/comune/ita-decadentismo.js':      'TOPIC_ITA_DECADENTISMO',
    'data/comune/ita-novecento-prosa.js':   'TOPIC_ITA_NOV_PROSA',
    'data/comune/ita-novecento-poesia.js':  'TOPIC_ITA_NOV_POESIA',
    'data/comune/ita-dopoguerra.js':        'TOPIC_ITA_DOPOGUERRA',
    'data/comune/sto-fine-ottocento.js':    'TOPIC_STO_FINE_800',
    'data/comune/sto-belle-epoque.js':      'TOPIC_STO_BELLE_EPOQUE',
    'data/comune/sto-ww1.js':              'TOPIC_STO_WW1',
    'data/comune/sto-totalitarismi.js':    'TOPIC_STO_TOTALITARISMI',
    'data/comune/sto-ww2.js':              'TOPIC_STO_WW2',
    'data/comune/sto-guerra-fredda.js':    'TOPIC_STO_GUERRA_FREDDA',
    'data/comune/sto-italia-repubblicana.js': 'TOPIC_STO_ITALIA_REP',
    'data/comune/fil-idealismo.js':          'TOPIC_FIL_IDEALISMO',
    'data/comune/fil-reazione-idealismo.js': 'TOPIC_FIL_REAZIONE',
    'data/comune/fil-marx.js':              'TOPIC_FIL_MARX',
    'data/comune/fil-positivismo.js':       'TOPIC_FIL_POSITIVISMO',
    'data/comune/fil-nietzsche.js':         'TOPIC_FIL_NIETZSCHE',
    'data/comune/fil-freud.js':             'TOPIC_FIL_FREUD',
    'data/comune/fil-epistemologia.js':     'TOPIC_FIL_EPISTEMOLOGIA',
    'data/comune/fil-esistenzialismo.js':   'TOPIC_FIL_ESISTENZIALISMO',
    // Classico
    'data/classico/lat-grammatica.js': 'TOPIC_LAT_GRAMMATICA',
    'data/classico/lat-virgilio.js':   'TOPIC_LAT_VIRGILIO',
    'data/classico/lat-cicerone.js':   'TOPIC_LAT_CICERONE',
    'data/classico/lat-tacito.js':     'TOPIC_LAT_TACITO',
    'data/classico/lat-orazio.js':     'TOPIC_LAT_ORAZIO',
    'data/classico/lat-seneca.js':     'TOPIC_LAT_SENECA',
    'data/classico/gre-grammatica.js': 'TOPIC_GRE_GRAMMATICA',
    'data/classico/gre-omero.js':      'TOPIC_GRE_OMERO',
    'data/classico/gre-platone.js':    'TOPIC_GRE_PLATONE',
    'data/classico/gre-teatro.js':     'TOPIC_GRE_TEATRO',
    'data/classico/gre-storici.js':    'TOPIC_GRE_STORICI',
    // Linguistico
    'data/linguistico/eng-romanticismo.js': 'TOPIC_ENG_ROM',
    'data/linguistico/eng-vittoriano.js':   'TOPIC_ENG_VIT',
    'data/linguistico/eng-modernismo.js':   'TOPIC_ENG_MOD',
    'data/linguistico/eng-dopoguerra.js':   'TOPIC_ENG_DOPO',
    // Scienze Umane
    'data/scienze-umane/psi-origini.js':          'TOPIC_PSI_ORIGINI',
    'data/scienze-umane/psi-freud.js':             'TOPIC_PSI_FREUD',
    'data/scienze-umane/psi-comportamentismo.js':  'TOPIC_PSI_COMPORTAMENTISMO',
    'data/scienze-umane/psi-umanistica.js':        'TOPIC_PSI_UMANISTICA',
    'data/scienze-umane/psi-cognitiva.js':         'TOPIC_PSI_COGNITIVA',
    'data/scienze-umane/psi-sociale.js':           'TOPIC_PSI_SOCIALE',
    'data/scienze-umane/soc-fondatori.js':         'TOPIC_SOC_FONDATORI',
    'data/scienze-umane/soc-istituzioni.js':       'TOPIC_SOC_ISTITUZIONI',
    'data/scienze-umane/soc-devianza.js':          'TOPIC_SOC_DEVIANZA',
    'data/scienze-umane/soc-globalizzazione.js':   'TOPIC_SOC_GLOBALIZZAZIONE',
    'data/scienze-umane/soc-welfare.js':           'TOPIC_SOC_WELFARE',
    'data/scienze-umane/ped-storia.js':            'TOPIC_PED_STORIA',
    'data/scienze-umane/ped-novecento.js':         'TOPIC_PED_NOVECENTO',
    'data/scienze-umane/ped-contemporanea.js':     'TOPIC_PED_CONTEMPORANEA',
    'data/scienze-umane/ant-cultura.js':           'TOPIC_ANT_CULTURA',
    'data/scienze-umane/ant-etnografia.js':        'TOPIC_ANT_ETNOGRAFIA',
    'data/scienze-umane/ant-relativismo.js':       'TOPIC_ANT_RELATIVISMO',
    // Artistico
    'data/artistico/art-antica-medievale.js':    'TOPIC_ART_ANTICA',
    'data/artistico/art-rinascimento.js':        'TOPIC_ART_RINASCIMENTO',
    'data/artistico/art-barocco.js':             'TOPIC_ART_BAROCCO',
    'data/artistico/art-ottocento.js':           'TOPIC_ART_OTTOCENTO',
    'data/artistico/art-post-impressionismo.js': 'TOPIC_ART_POST_IMPR',
    'data/artistico/art-novecento.js':           'TOPIC_ART_NOVECENTO',
  };

  function resolveDataVariable(dataFile) {
    const varName = FILE_TO_VAR[dataFile];
    if (!varName) return null;
    return window[varName] || null;
  }

  // ─────────────────────────────────────────
  // BREADCRUMB — risale l'albero per trovare il percorso
  // ─────────────────────────────────────────
  function buildBreadcrumb(nodeId) {
    const parts = [];
    let current = findNodeById(TREE, nodeId);
    while (current) {
      parts.unshift(current.label);
      current = findParentNode(TREE, current.id);
    }
    // Rimuove il root ("Maturità Prep") dal breadcrumb
    if (parts[0] === TREE.label) parts.shift();
    return parts;
  }

  function findNodeById(node, id) {
    if (node.id === id) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = findNodeById(child, id);
        if (found) return found;
      }
    }
    return null;
  }

  function findParentNode(tree, childId) {
    if (!tree.children) return null;
    for (const child of tree.children) {
      if (child.id === childId) return tree;
      const found = findParentNode(child, childId);
      if (found) return found;
    }
    return null;
  }

  // ─────────────────────────────────────────
  // BARRA DI RICERCA
  // ─────────────────────────────────────────
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    if (q.length === 0) {
      TreeEngine.clearSearch();
    } else {
      TreeEngine.search(q);
    }
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      TreeEngine.clearSearch();
    }
  });

  // ─────────────────────────────────────────
  // PULSANTI ESPANDI / CHIUDI TUTTO
  // ─────────────────────────────────────────
  document.getElementById('btn-expand-all').addEventListener('click', () => {
    TreeEngine.expandAll();
  });

  document.getElementById('btn-collapse-all').addEventListener('click', () => {
    TreeEngine.collapseAll();
  });

  // ─────────────────────────────────────────
  // SIDEBAR TOGGLE (mobile / narrow view)
  // ─────────────────────────────────────────
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar       = document.getElementById('sidebar');

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
  });

  // ─────────────────────────────────────────
  // DRAG TO PAN — tieni premuto il mouse per spostare l'albero
  // ─────────────────────────────────────────
  const treeContainer = document.getElementById('tree-scroll');

  let isPanning   = false;
  let panStartX   = 0;
  let panStartY   = 0;
  let scrollStartX = 0;
  let scrollStartY = 0;
  let didPan      = false;   // distingue click da drag

  treeContainer.addEventListener('mousedown', (e) => {
    // Solo tasto sinistro, non su un nodo (i nodi hanno il proprio handler)
    if (e.button !== 0) return;
    if (e.target.closest('.tree-node')) return;

    isPanning    = true;
    didPan       = false;
    panStartX    = e.clientX;
    panStartY    = e.clientY;
    scrollStartX = treeContainer.scrollLeft;
    scrollStartY = treeContainer.scrollTop;

    treeContainer.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning) return;

    const dx = e.clientX - panStartX;
    const dy = e.clientY - panStartY;

    // Considera "drag" solo se si è mosso più di 4px (evita falsi drag su click)
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) didPan = true;

    treeContainer.scrollLeft = scrollStartX - dx;
    treeContainer.scrollTop  = scrollStartY - dy;
  });

  window.addEventListener('mouseup', () => {
    if (!isPanning) return;
    isPanning = false;
    treeContainer.style.cursor = '';
  });

  // Se il mouse esce dalla finestra ferma il pan
  window.addEventListener('mouseleave', () => {
    isPanning = false;
    treeContainer.style.cursor = '';
  });

  // Touch support (mobile)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchScrollX = 0;
  let touchScrollY = 0;

  treeContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    if (e.target.closest('.tree-node')) return;
    touchStartX  = e.touches[0].clientX;
    touchStartY  = e.touches[0].clientY;
    touchScrollX = treeContainer.scrollLeft;
    touchScrollY = treeContainer.scrollTop;
  }, { passive: true });

  treeContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    treeContainer.scrollLeft = touchScrollX - dx;
    treeContainer.scrollTop  = touchScrollY - dy;
  }, { passive: true });

  // ─────────────────────────────────────────
  // RESIZE — ricalcola layout se la finestra cambia dimensione
  // ─────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      TreeEngine.collapseAll();
    }, 300);
  });

});
