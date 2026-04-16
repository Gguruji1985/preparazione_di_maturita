// data.js — Struttura dell'albero
// Aggiungi una sezione quando i suoi file di dati sono stati scritti.

const TREE = {
  id: "root",
  label: "Maturità Prep",
  level: 0,
  children: [

    // ─────────────────────────────────────────
    // INFORMATICA (ITI)
    // ─────────────────────────────────────────
    {
      id: "informatica",
      label: "Informatica (ITI)",
      level: 1,
      children: [
        {
          id: "inf-informatica",
          label: "Informatica",
          level: 2,
          children: [
            { id: "inf-inf-database",      label: "Basi di Dati",        level: 3, dataFile: "data/informatica/informatica-basi-di-dati.js" },
            { id: "inf-inf-reti",          label: "Reti e Internet",     level: 3, dataFile: "data/informatica/informatica-reti.js" },
            { id: "inf-inf-programmazione",label: "Programmazione",      level: 3, dataFile: "data/informatica/informatica-programmazione.js" },
            { id: "inf-inf-so",            label: "Sistemi Operativi",   level: 3, dataFile: "data/informatica/informatica-sistemi-operativi.js" },
            { id: "inf-inf-web",           label: "Web e Applicazioni",  level: 3, dataFile: "data/informatica/informatica-web.js" },
          ]
        },
        {
          id: "inf-sistemi",
          label: "Sistemi e Reti",
          level: 2,
          children: [
            { id: "inf-sis-arch",      label: "Architetture dei Sistemi", level: 3, dataFile: "data/informatica/sistemi-reti-architetture.js" },
            { id: "inf-sis-lan",       label: "Reti Locali (LAN)",        level: 3, dataFile: "data/informatica/sistemi-reti-lan.js" },
            { id: "inf-sis-proto",     label: "Protocolli di Rete",       level: 3, dataFile: "data/informatica/sistemi-reti-protocolli.js" },
            { id: "inf-sis-sicurezza", label: "Sicurezza dei Sistemi",    level: 3, dataFile: "data/informatica/sistemi-reti-sicurezza.js" },
            { id: "inf-sis-cloud",     label: "Virtualizzazione e Cloud", level: 3, dataFile: "data/informatica/sistemi-reti-cloud.js" },
          ]
        },
        {
          id: "inf-tpsit",
          label: "TPSIT",
          level: 2,
          children: [
            { id: "inf-tps-concorrenza", label: "Programmazione Concorrente",   level: 3, dataFile: "data/informatica/tpsit-concorrenza.js" },
            { id: "inf-tps-socket",      label: "Programmazione di Rete",       level: 3, dataFile: "data/informatica/tpsit-socket.js" },
            { id: "inf-tps-web",         label: "Applicazioni Web lato Server", level: 3, dataFile: "data/informatica/tpsit-web-server.js" },
            { id: "inf-tps-ws",          label: "Web Services e REST",          level: 3, dataFile: "data/informatica/tpsit-webservices.js" },
            { id: "inf-tps-prog",        label: "Progettazione Software (UML)", level: 3, dataFile: "data/informatica/tpsit-progettazione.js" },
          ]
        },
        {
          id: "inf-italiano",
          label: "Italiano",
          level: 2,
          children: [
            { id: "inf-ita-origini",      label: "Origini e Duecento",  level: 3, dataFile: "data/comune/ita-origini.js" },
            { id: "inf-ita-romanticismo", label: "Romanticismo",        level: 3, dataFile: "data/comune/ita-romanticismo.js" },
            { id: "inf-ita-verismo",      label: "Verismo",             level: 3, dataFile: "data/comune/ita-verismo.js" },
            { id: "inf-ita-decadentismo", label: "Decadentismo",        level: 3, dataFile: "data/comune/ita-decadentismo.js" },
            { id: "inf-ita-nov-prosa",    label: "Novecento — Prosa",   level: 3, dataFile: "data/comune/ita-novecento-prosa.js" },
            { id: "inf-ita-dopoguerra",   label: "Secondo Dopoguerra",  level: 3, dataFile: "data/comune/ita-dopoguerra.js" },
          ]
        },
        {
          id: "inf-storia",
          label: "Storia",
          level: 2,
          children: [
            { id: "inf-sto-ww1",          label: "Prima Guerra Mondiale",     level: 3, dataFile: "data/comune/sto-ww1.js" },
            { id: "inf-sto-totalit",      label: "Totalitarismi",             level: 3, dataFile: "data/comune/sto-totalitarismi.js" },
            { id: "inf-sto-gcs",          label: "Guerra Civile Spagnola",    level: 3, dataFile: "data/comune/sto-guerra-civile-spagna.js" },
            { id: "inf-sto-ww2",          label: "Seconda Guerra Mondiale",   level: 3, dataFile: "data/comune/sto-ww2.js" },
            { id: "inf-sto-guerra-fredda",label: "Guerra Fredda",          level: 3, dataFile: "data/comune/sto-guerra-fredda.js" },
            { id: "inf-sto-italia-rep",   label: "Italia Repubblicana",    level: 3, dataFile: "data/comune/sto-italia-repubblicana.js" },
          ]
        },
      ]
    },

    // ─────────────────────────────────────────
    // SEZIONI DISABILITATE — aggiungere quando i file sono scritti
    // Per aggiungere una sezione: decommentarla e scrivere i suoi file di dati.
    // ─────────────────────────────────────────

    // LICEO SCIENTIFICO — decommentare quando i file in data/scientifico/ e data/comune/ sono pronti
    /*
    {
      id: "scientifico",
      label: "Liceo Scientifico",
      level: 1,
      children: [
        {
          id: "sci-matematica",
          label: "Matematica",
          level: 2,
          children: [
            {
              id: "sci-mat-analisi",
              label: "Analisi",
              level: 3,
              children: [
                { id: "sci-mat-limiti",          label: "Limiti",             level: 4, dataFile: "data/scientifico/mat-limiti.js" },
                { id: "sci-mat-continuita",      label: "Continuità",         level: 4, dataFile: "data/scientifico/mat-continuita.js" },
                { id: "sci-mat-derivate",        label: "Derivate",           level: 4, dataFile: "data/scientifico/mat-derivate.js" },
                { id: "sci-mat-studio-funzione", label: "Studio di Funzione", level: 4, dataFile: "data/scientifico/mat-studio-funzione.js" },
                { id: "sci-mat-integrali",       label: "Integrali",          level: 4, dataFile: "data/scientifico/mat-integrali.js" },
              ]
            },
            {
              id: "sci-mat-geom-analitica",
              label: "Geometria Analitica",
              level: 3,
              children: [
                { id: "sci-mat-geom", label: "Retta, Parabola, Conica", level: 4, dataFile: "data/scientifico/mat-geometria-analitica.js" },
              ]
            },
            {
              id: "sci-mat-prob-stat",
              label: "Probabilità e Statistica",
              level: 3,
              children: [
                { id: "sci-mat-prob", label: "Probabilità e Statistica", level: 4, dataFile: "data/scientifico/mat-probabilita.js" },
              ]
            },
          ]
        },
        {
          id: "sci-fisica",
          label: "Fisica",
          level: 2,
          children: [
            { id: "sci-fis-meccanica",         label: "Meccanica",         level: 3, dataFile: "data/scientifico/fis-meccanica.js" },
            { id: "sci-fis-termodinamica",     label: "Termodinamica",     level: 3, dataFile: "data/scientifico/fis-termodinamica.js" },
            { id: "sci-fis-elettromagnetismo", label: "Elettromagnetismo", level: 3, dataFile: "data/scientifico/fis-elettromagnetismo.js" },
            { id: "sci-fis-ottica",            label: "Ottica",            level: 3, dataFile: "data/scientifico/fis-ottica.js" },
            { id: "sci-fis-moderna",           label: "Fisica Moderna",    level: 3, dataFile: "data/scientifico/fis-moderna.js" },
          ]
        },
        {
          id: "sci-italiano",
          label: "Italiano",
          level: 2,
          children: [
            { id: "sci-ita-origini",        label: "Origini e Duecento",          level: 3, dataFile: "data/comune/ita-origini.js" },
            { id: "sci-ita-umanesimo",      label: "Umanesimo e Rinascimento",    level: 3, dataFile: "data/comune/ita-umanesimo.js" },
            { id: "sci-ita-illuminismo",    label: "Illuminismo e Neoclassicismo",level: 3, dataFile: "data/comune/ita-illuminismo.js" },
            { id: "sci-ita-romanticismo",   label: "Romanticismo",                level: 3, dataFile: "data/comune/ita-romanticismo.js" },
            { id: "sci-ita-verismo",        label: "Verismo",                     level: 3, dataFile: "data/comune/ita-verismo.js" },
            { id: "sci-ita-decadentismo",   label: "Decadentismo",                level: 3, dataFile: "data/comune/ita-decadentismo.js" },
            { id: "sci-ita-nov-prosa",      label: "Novecento — Prosa",           level: 3, dataFile: "data/comune/ita-novecento-prosa.js" },
            { id: "sci-ita-nov-poesia",     label: "Novecento — Poesia",          level: 3, dataFile: "data/comune/ita-novecento-poesia.js" },
            { id: "sci-ita-dopoguerra",     label: "Secondo Dopoguerra",          level: 3, dataFile: "data/comune/ita-dopoguerra.js" },
          ]
        },
        {
          id: "sci-latino",
          label: "Latino",
          level: 2,
          children: [
            { id: "sci-lat-virgilio",   label: "Virgilio",   level: 3, dataFile: "data/classico/lat-virgilio.js" },
            { id: "sci-lat-orazio",     label: "Orazio",     level: 3, dataFile: "data/classico/lat-orazio.js" },
            { id: "sci-lat-grammatica", label: "Grammatica", level: 3, dataFile: "data/classico/lat-grammatica.js" },
          ]
        },
        {
          id: "sci-storia",
          label: "Storia",
          level: 2,
          children: [
            { id: "sci-sto-fine-800",     label: "Fine Ottocento",         level: 3, dataFile: "data/comune/sto-fine-ottocento.js" },
            { id: "sci-sto-belle-epoque", label: "Belle Époque",           level: 3, dataFile: "data/comune/sto-belle-epoque.js" },
            { id: "sci-sto-ww1",          label: "Prima Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww1.js" },
            { id: "sci-sto-totalit",      label: "Totalitarismi",            level: 3, dataFile: "data/comune/sto-totalitarismi.js" },
            { id: "sci-sto-gcs",          label: "Guerra Civile Spagnola",   level: 3, dataFile: "data/comune/sto-guerra-civile-spagna.js" },
            { id: "sci-sto-ww2",          label: "Seconda Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww2.js" },
            { id: "sci-sto-guerra-fredda",label: "Guerra Fredda",          level: 3, dataFile: "data/comune/sto-guerra-fredda.js" },
            { id: "sci-sto-italia-rep",   label: "Italia Repubblicana",    level: 3, dataFile: "data/comune/sto-italia-repubblicana.js" },
          ]
        },
        {
          id: "sci-filosofia",
          label: "Filosofia",
          level: 2,
          children: [
            { id: "sci-fil-idealismo",       label: "Idealismo Tedesco",          level: 3, dataFile: "data/comune/fil-idealismo.js" },
            { id: "sci-fil-reazione",        label: "Reazione all'Idealismo",     level: 3, dataFile: "data/comune/fil-reazione-idealismo.js" },
            { id: "sci-fil-marx",            label: "Marx",                       level: 3, dataFile: "data/comune/fil-marx.js" },
            { id: "sci-fil-positivismo",     label: "Positivismo",                level: 3, dataFile: "data/comune/fil-positivismo.js" },
            { id: "sci-fil-nietzsche",       label: "Nietzsche",                  level: 3, dataFile: "data/comune/fil-nietzsche.js" },
            { id: "sci-fil-freud",           label: "Freud e Psicoanalisi",       level: 3, dataFile: "data/comune/fil-freud.js" },
            { id: "sci-fil-epistemologia",   label: "Epistemologia del '900",     level: 3, dataFile: "data/comune/fil-epistemologia.js" },
            { id: "sci-fil-esistenzialismo", label: "Esistenzialismo",            level: 3, dataFile: "data/comune/fil-esistenzialismo.js" },
          ]
        },
        {
          id: "sci-scienze",
          label: "Scienze Naturali",
          level: 2,
          children: [
            { id: "sci-sci-chimica",  label: "Chimica Organica",    level: 3, dataFile: "data/scientifico/sci-chimica-organica.js" },
            { id: "sci-sci-biologia", label: "Biologia",            level: 3, dataFile: "data/scientifico/sci-biologia.js" },
            { id: "sci-sci-terra",    label: "Scienze della Terra", level: 3, dataFile: "data/scientifico/sci-terra.js" },
          ]
        },
      ]
    },
    */

    // LICEO CLASSICO — decommentare quando i file in data/classico/ e data/comune/ sono pronti
    /*
    {
      id: "classico",
      label: "Liceo Classico",
      level: 1,
      children: [
        {
          id: "cla-italiano",
          label: "Italiano",
          level: 2,
          children: [
            { id: "cla-ita-origini",      label: "Origini e Duecento",          level: 3, dataFile: "data/comune/ita-origini.js" },
            { id: "cla-ita-umanesimo",    label: "Umanesimo e Rinascimento",    level: 3, dataFile: "data/comune/ita-umanesimo.js" },
            { id: "cla-ita-illuminismo",  label: "Illuminismo e Neoclassicismo",level: 3, dataFile: "data/comune/ita-illuminismo.js" },
            { id: "cla-ita-romanticismo", label: "Romanticismo",                level: 3, dataFile: "data/comune/ita-romanticismo.js" },
            { id: "cla-ita-verismo",      label: "Verismo",                     level: 3, dataFile: "data/comune/ita-verismo.js" },
            { id: "cla-ita-decadentismo", label: "Decadentismo",                level: 3, dataFile: "data/comune/ita-decadentismo.js" },
            { id: "cla-ita-nov-prosa",    label: "Novecento — Prosa",           level: 3, dataFile: "data/comune/ita-novecento-prosa.js" },
            { id: "cla-ita-nov-poesia",   label: "Novecento — Poesia",          level: 3, dataFile: "data/comune/ita-novecento-poesia.js" },
            { id: "cla-ita-dopoguerra",   label: "Secondo Dopoguerra",          level: 3, dataFile: "data/comune/ita-dopoguerra.js" },
          ]
        },
        {
          id: "cla-latino",
          label: "Latino",
          level: 2,
          children: [
            { id: "cla-lat-grammatica", label: "Grammatica e Sintassi", level: 3, dataFile: "data/classico/lat-grammatica.js" },
            { id: "cla-lat-virgilio",   label: "Virgilio",              level: 3, dataFile: "data/classico/lat-virgilio.js" },
            { id: "cla-lat-cicerone",   label: "Cicerone",              level: 3, dataFile: "data/classico/lat-cicerone.js" },
            { id: "cla-lat-tacito",     label: "Tacito",                level: 3, dataFile: "data/classico/lat-tacito.js" },
            { id: "cla-lat-orazio",     label: "Orazio",                level: 3, dataFile: "data/classico/lat-orazio.js" },
            { id: "cla-lat-seneca",     label: "Seneca",                level: 3, dataFile: "data/classico/lat-seneca.js" },
          ]
        },
        {
          id: "cla-greco",
          label: "Greco",
          level: 2,
          children: [
            { id: "cla-gre-grammatica", label: "Grammatica e Sintassi",              level: 3, dataFile: "data/classico/gre-grammatica.js" },
            { id: "cla-gre-omero",      label: "Omero",                              level: 3, dataFile: "data/classico/gre-omero.js" },
            { id: "cla-gre-platone",    label: "Platone",                            level: 3, dataFile: "data/classico/gre-platone.js" },
            { id: "cla-gre-teatro",     label: "Teatro (Sofocle, Euripide, Eschilo)",level: 3, dataFile: "data/classico/gre-teatro.js" },
            { id: "cla-gre-storici",    label: "Storici (Tucidide, Erodoto)",        level: 3, dataFile: "data/classico/gre-storici.js" },
          ]
        },
        {
          id: "cla-storia",
          label: "Storia",
          level: 2,
          children: [
            { id: "cla-sto-fine-800",     label: "Fine Ottocento",         level: 3, dataFile: "data/comune/sto-fine-ottocento.js" },
            { id: "cla-sto-belle-epoque", label: "Belle Époque",           level: 3, dataFile: "data/comune/sto-belle-epoque.js" },
            { id: "cla-sto-ww1",          label: "Prima Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww1.js" },
            { id: "cla-sto-totalit",      label: "Totalitarismi",            level: 3, dataFile: "data/comune/sto-totalitarismi.js" },
            { id: "cla-sto-gcs",          label: "Guerra Civile Spagnola",   level: 3, dataFile: "data/comune/sto-guerra-civile-spagna.js" },
            { id: "cla-sto-ww2",          label: "Seconda Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww2.js" },
            { id: "cla-sto-guerra-fredda",label: "Guerra Fredda",          level: 3, dataFile: "data/comune/sto-guerra-fredda.js" },
            { id: "cla-sto-italia-rep",   label: "Italia Repubblicana",    level: 3, dataFile: "data/comune/sto-italia-repubblicana.js" },
          ]
        },
        {
          id: "cla-filosofia",
          label: "Filosofia",
          level: 2,
          children: [
            { id: "cla-fil-idealismo",       label: "Idealismo Tedesco",      level: 3, dataFile: "data/comune/fil-idealismo.js" },
            { id: "cla-fil-reazione",        label: "Reazione all'Idealismo", level: 3, dataFile: "data/comune/fil-reazione-idealismo.js" },
            { id: "cla-fil-marx",            label: "Marx",                   level: 3, dataFile: "data/comune/fil-marx.js" },
            { id: "cla-fil-positivismo",     label: "Positivismo",            level: 3, dataFile: "data/comune/fil-positivismo.js" },
            { id: "cla-fil-nietzsche",       label: "Nietzsche",              level: 3, dataFile: "data/comune/fil-nietzsche.js" },
            { id: "cla-fil-freud",           label: "Freud e Psicoanalisi",   level: 3, dataFile: "data/comune/fil-freud.js" },
            { id: "cla-fil-epistemologia",   label: "Epistemologia del '900", level: 3, dataFile: "data/comune/fil-epistemologia.js" },
            { id: "cla-fil-esistenzialismo", label: "Esistenzialismo",        level: 3, dataFile: "data/comune/fil-esistenzialismo.js" },
          ]
        },
      ]
    },
    */

    // LICEO LINGUISTICO — decommentare quando i file in data/linguistico/ sono pronti
    /*
    {
      id: "linguistico",
      label: "Liceo Linguistico",
      level: 1,
      children: [
        {
          id: "lin-inglese",
          label: "Letteratura Inglese",
          level: 2,
          children: [
            { id: "lin-eng-rom",  label: "Romanticismo",  level: 3, dataFile: "data/linguistico/eng-romanticismo.js" },
            { id: "lin-eng-vit",  label: "Età Vittoriana",level: 3, dataFile: "data/linguistico/eng-vittoriano.js" },
            { id: "lin-eng-mod",  label: "Modernismo",    level: 3, dataFile: "data/linguistico/eng-modernismo.js" },
            { id: "lin-eng-dopo", label: "Dopoguerra",    level: 3, dataFile: "data/linguistico/eng-dopoguerra.js" },
          ]
        },
        {
          id: "lin-italiano",
          label: "Italiano",
          level: 2,
          children: [
            { id: "lin-ita-romanticismo", label: "Romanticismo",      level: 3, dataFile: "data/comune/ita-romanticismo.js" },
            { id: "lin-ita-decadentismo", label: "Decadentismo",      level: 3, dataFile: "data/comune/ita-decadentismo.js" },
            { id: "lin-ita-nov-prosa",    label: "Novecento — Prosa", level: 3, dataFile: "data/comune/ita-novecento-prosa.js" },
            { id: "lin-ita-dopoguerra",   label: "Dopoguerra",        level: 3, dataFile: "data/comune/ita-dopoguerra.js" },
          ]
        },
        {
          id: "lin-storia",
          label: "Storia",
          level: 2,
          children: [
            { id: "lin-sto-ww1",    label: "Prima Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww1.js" },
            { id: "lin-sto-ww2",    label: "Seconda Guerra Mondiale",level: 3, dataFile: "data/comune/sto-ww2.js" },
            { id: "lin-sto-fredda", label: "Guerra Fredda",          level: 3, dataFile: "data/comune/sto-guerra-fredda.js" },
          ]
        },
      ]
    },
    */

    // SCIENZE UMANE — decommentare quando i file in data/scienze-umane/ sono pronti
    /*
    {
      id: "scienze-umane",
      label: "Scienze Umane",
      level: 1,
      children: [
        {
          id: "su-psicologia",
          label: "Psicologia",
          level: 2,
          children: [
            { id: "su-psi-origini",          label: "Origini della Psicologia", level: 3, dataFile: "data/scienze-umane/psi-origini.js" },
            { id: "su-psi-freud",            label: "Freud e Psicoanalisi",     level: 3, dataFile: "data/scienze-umane/psi-freud.js" },
            { id: "su-psi-comportamentismo", label: "Comportamentismo",         level: 3, dataFile: "data/scienze-umane/psi-comportamentismo.js" },
            { id: "su-psi-umanistica",       label: "Psicologia Umanistica",    level: 3, dataFile: "data/scienze-umane/psi-umanistica.js" },
            { id: "su-psi-cognitiva",        label: "Psicologia Cognitiva",     level: 3, dataFile: "data/scienze-umane/psi-cognitiva.js" },
            { id: "su-psi-sociale",          label: "Psicologia Sociale",       level: 3, dataFile: "data/scienze-umane/psi-sociale.js" },
          ]
        },
        {
          id: "su-sociologia",
          label: "Sociologia",
          level: 2,
          children: [
            { id: "su-soc-fondatori",       label: "Padri Fondatori",      level: 3, dataFile: "data/scienze-umane/soc-fondatori.js" },
            { id: "su-soc-istituzioni",     label: "Istituzioni Sociali",  level: 3, dataFile: "data/scienze-umane/soc-istituzioni.js" },
            { id: "su-soc-devianza",        label: "Devianza e Controllo", level: 3, dataFile: "data/scienze-umane/soc-devianza.js" },
            { id: "su-soc-globalizzazione", label: "Globalizzazione",      level: 3, dataFile: "data/scienze-umane/soc-globalizzazione.js" },
            { id: "su-soc-welfare",         label: "Welfare State",        level: 3, dataFile: "data/scienze-umane/soc-welfare.js" },
          ]
        },
        {
          id: "su-pedagogia",
          label: "Pedagogia",
          level: 2,
          children: [
            { id: "su-ped-storia",        label: "Storia della Pedagogia",  level: 3, dataFile: "data/scienze-umane/ped-storia.js" },
            { id: "su-ped-novecento",     label: "Pedagogia nel Novecento", level: 3, dataFile: "data/scienze-umane/ped-novecento.js" },
            { id: "su-ped-contemporanea", label: "Pedagogia Contemporanea", level: 3, dataFile: "data/scienze-umane/ped-contemporanea.js" },
          ]
        },
        {
          id: "su-antropologia",
          label: "Antropologia",
          level: 2,
          children: [
            { id: "su-ant-cultura",     label: "Cultura e Società",     level: 3, dataFile: "data/scienze-umane/ant-cultura.js" },
            { id: "su-ant-etnografia",  label: "Etnografia",            level: 3, dataFile: "data/scienze-umane/ant-etnografia.js" },
            { id: "su-ant-relativismo", label: "Relativismo Culturale", level: 3, dataFile: "data/scienze-umane/ant-relativismo.js" },
          ]
        },
      ]
    },
    */

    // LICEO ARTISTICO — decommentare quando i file in data/artistico/ sono pronti
    /*
    {
      id: "artistico",
      label: "Liceo Artistico",
      level: 1,
      children: [
        {
          id: "art-storia-arte",
          label: "Storia dell'Arte",
          level: 2,
          children: [
            { id: "art-art-antica",       label: "Arte Antica e Medievale", level: 3, dataFile: "data/artistico/art-antica-medievale.js" },
            { id: "art-art-rinascimento", label: "Rinascimento",            level: 3, dataFile: "data/artistico/art-rinascimento.js" },
            { id: "art-art-barocco",      label: "Barocco e Rococò",        level: 3, dataFile: "data/artistico/art-barocco.js" },
            { id: "art-art-ottocento",    label: "Ottocento",               level: 3, dataFile: "data/artistico/art-ottocento.js" },
            { id: "art-art-post-impr",    label: "Post-Impressionismo",     level: 3, dataFile: "data/artistico/art-post-impressionismo.js" },
            { id: "art-art-novecento",    label: "Novecento",               level: 3, dataFile: "data/artistico/art-novecento.js" },
          ]
        },
        {
          id: "art-italiano",
          label: "Italiano",
          level: 2,
          children: [
            { id: "art-ita-romanticismo", label: "Romanticismo",      level: 3, dataFile: "data/comune/ita-romanticismo.js" },
            { id: "art-ita-decadentismo", label: "Decadentismo",      level: 3, dataFile: "data/comune/ita-decadentismo.js" },
            { id: "art-ita-nov-prosa",    label: "Novecento — Prosa", level: 3, dataFile: "data/comune/ita-novecento-prosa.js" },
          ]
        },
        {
          id: "art-storia",
          label: "Storia",
          level: 2,
          children: [
            { id: "art-sto-ww1",    label: "Prima Guerra Mondiale",  level: 3, dataFile: "data/comune/sto-ww1.js" },
            { id: "art-sto-ww2",    label: "Seconda Guerra Mondiale",level: 3, dataFile: "data/comune/sto-ww2.js" },
            { id: "art-sto-fredda", label: "Guerra Fredda",          level: 3, dataFile: "data/comune/sto-guerra-fredda.js" },
          ]
        },
      ]
    },
    */

  ]
};
