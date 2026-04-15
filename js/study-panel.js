// study-panel.js — gestisce il pannello di studio

const StudyPanel = (() => {

  // Riferimenti DOM
  const panel         = document.getElementById('study-panel');
  const welcome       = document.getElementById('welcome');
  const breadcrumb    = document.getElementById('panel-breadcrumb');
  const titleEl       = document.getElementById('panel-title');
  const tabsContainer = document.getElementById('panel-subtopic-tabs');
  const closeBtn      = document.getElementById('panel-close-btn');

  // Stato attuale
  let currentTopicData = null;
  let currentSubtopicKey = null;

  // ─────────────────────────────────────────
  // APERTURA PANNELLO
  // topicData: oggetto del file data/ (es. TOPIC_BASI_DI_DATI)
  // initialSubtopic: chiave del subtopic da mostrare subito
  // breadcrumbParts: array di stringhe ['Informatica ITI', 'Informatica', 'Basi di Dati']
  // ─────────────────────────────────────────
  function open(topicData, initialSubtopic, breadcrumbParts) {
    currentTopicData = topicData;

    // Breadcrumb
    breadcrumb.innerHTML = breadcrumbParts
      .map(part => `<span>${part}</span>`)
      .join('');

    // Tabs subtopic
    renderTabs(topicData, initialSubtopic);

    // Mostra il pannello, nascondi welcome
    panel.classList.remove('panel-hidden');
    if (welcome) welcome.classList.add('hidden');

    // Scrolla il panel body in cima
    document.getElementById('panel-body').scrollTop = 0;
  }

  // ─────────────────────────────────────────
  // CHIUSURA PANNELLO
  // ─────────────────────────────────────────
  function close() {
    panel.classList.add('panel-hidden');
    if (welcome) welcome.classList.remove('hidden');
    currentTopicData = null;
    currentSubtopicKey = null;
  }

  // ─────────────────────────────────────────
  // RENDER TABS
  // ─────────────────────────────────────────
  function renderTabs(topicData, activeKey) {
    const keys = Object.keys(topicData);
    currentSubtopicKey = activeKey || keys[0];

    tabsContainer.innerHTML = '';
    tabsContainer.classList.add('refreshing');

    keys.forEach((key, i) => {
      const tab = document.createElement('button');
      tab.className = 'subtopic-tab';
      tab.textContent = topicData[key].titolo;
      tab.dataset.key = key;
      tab.style.animationDelay = (i * 40) + 'ms';

      if (key === currentSubtopicKey) {
        tab.classList.add('active');
      }

      tab.addEventListener('click', () => {
        selectSubtopic(key);
      });

      tabsContainer.appendChild(tab);
    });

    requestAnimationFrame(() => {
      tabsContainer.classList.remove('refreshing');
    });

    // Mostra il contenuto del subtopic attivo
    renderContent(topicData[currentSubtopicKey]);
  }

  // ─────────────────────────────────────────
  // SELEZIONE SUBTOPIC
  // ─────────────────────────────────────────
  function selectSubtopic(key) {
    if (!currentTopicData || !currentTopicData[key]) return;

    currentSubtopicKey = key;

    // Aggiorna tab attiva
    tabsContainer.querySelectorAll('.subtopic-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.key === key);
    });

    // Aggiorna contenuto
    renderContent(currentTopicData[key]);

    // Torna in cima al body
    document.getElementById('panel-body').scrollTop = 0;
  }

  // ─────────────────────────────────────────
  // RENDER CONTENUTO SUBTOPIC
  // ─────────────────────────────────────────
  function renderContent(data) {
    if (!data) return;

    titleEl.textContent = data.titolo;

    // Spiegazione
    document.getElementById('content-spiegazione').innerHTML = data.spiegazione || '';

    // Domande della commissione — supporta sia stringhe che { domanda, risposta }
    const domList = document.getElementById('content-domande');
    domList.innerHTML = (data.domande || [])
      .map(d => {
        if (typeof d === 'string') {
          return `<div class="domanda-item">${escapeHtml(d)}</div>`;
        }
        return `
          <div class="domanda-item domanda-item--qa">
            <div class="domanda-question">${escapeHtml(d.domanda)}</div>
            <div class="domanda-answer">${escapeHtml(d.risposta)}</div>
          </div>`;
      }).join('');

    // Click su domanda per aprire/chiudere risposta
    domList.querySelectorAll('.domanda-item--qa').forEach(item => {
      item.querySelector('.domanda-question').addEventListener('click', () => {
        item.classList.toggle('domanda-open');
      });
    });

    // Q&A
    const qaList = document.getElementById('content-qa');
    qaList.innerHTML = (data.qa || [])
      .map(item => `
        <div class="qa-item">
          <div class="qa-question">${escapeHtml(item.domanda)}</div>
          <div class="qa-answer">${escapeHtml(item.risposta)}</div>
        </div>
      `).join('');

    // Click su domanda Q&A per aprire/chiudere risposta
    qaList.querySelectorAll('.qa-item').forEach(item => {
      item.querySelector('.qa-question').addEventListener('click', () => {
        item.classList.toggle('qa-open');
      });
    });

    // Da ricordare
    const ricList = document.getElementById('content-ricordare');
    ricList.innerHTML = (data.daRicordare || [])
      .map(r => `<div class="ricordare-item">${escapeHtml(r)}</div>`)
      .join('');

    // Da non dire
    const nonDireList = document.getElementById('content-non-dire');
    nonDireList.innerHTML = (data.daNonDire || [])
      .map(n => `<div class="non-dire-item">${escapeHtml(n)}</div>`)
      .join('');

    // Raccomandazioni
    document.getElementById('content-raccomandazioni').innerHTML =
      (data.raccomandazioni || '').replace(/\n/g, '<br>');

    // Apri la prima sezione (spiegazione) per default, chiudi le altre
    resetSectionStates();
  }

  // ─────────────────────────────────────────
  // ACCORDION — sezioni espandi/chiudi
  // ─────────────────────────────────────────
  function initSectionToggles() {
    document.querySelectorAll('.section-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        const content = btn.nextElementSibling;

        btn.setAttribute('aria-expanded', !isOpen);
        content.classList.toggle('hidden', isOpen);
      });
    });
  }

  function resetSectionStates() {
    // Apre spiegazione, chiude tutto il resto
    document.querySelectorAll('.panel-section').forEach((section, i) => {
      const btn     = section.querySelector('.section-toggle');
      const content = section.querySelector('.section-content');
      const open    = i === 0;   // solo la prima
      btn.setAttribute('aria-expanded', open);
      content.classList.toggle('hidden', !open);
    });
  }

  // ─────────────────────────────────────────
  // UTILITY
  // ─────────────────────────────────────────
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#039;');
  }

  // ─────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────
  function init() {
    closeBtn.addEventListener('click', close);
    initSectionToggles();

    // Chiudi il pannello con Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  return { init, open, close };

})();
