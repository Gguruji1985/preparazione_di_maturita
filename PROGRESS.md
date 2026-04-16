# Maturità Prep — Project Progress

## What This Project Is
A website for studying for the Esame di Maturità.
Dynamic tree graph navigation (centered, grows downward).
Left = interactive tree. Right/Bottom = study panel.
All content in Italian.

## File Structure
```
maturita-prep/
├── PROGRESS.md               ← this file
├── index.html
├── css/
│   ├── reset.css
│   ├── layout.css
│   ├── tree.css
│   ├── animations.css
│   └── study-panel.css
├── js/
│   ├── data.js
│   ├── tree-engine.js
│   ├── tree-layout.js
│   ├── tree-animations.js
│   ├── study-panel.js
│   └── app.js
└── data/
    ├── informatica/
    │   ├── informatica-basi-di-dati.js
    │   ├── informatica-reti.js
    │   ├── informatica-programmazione.js
    │   ├── informatica-sistemi-operativi.js
    │   ├── informatica-web.js
    │   ├── sistemi-reti-architetture.js
    │   ├── sistemi-reti-lan.js
    │   ├── sistemi-reti-protocolli.js
    │   ├── sistemi-reti-sicurezza.js
    │   ├── sistemi-reti-cloud.js
    │   ├── tpsit-concorrenza.js
    │   ├── tpsit-socket.js
    │   ├── tpsit-web-server.js
    │   ├── tpsit-webservices.js
    │   └── tpsit-progettazione.js
    ├── scientifico/
    │   ├── mat-limiti.js
    │   ├── mat-continuita.js
    │   ├── mat-derivate.js
    │   ├── mat-studio-funzione.js
    │   ├── mat-integrali.js
    │   ├── mat-geometria-analitica.js
    │   ├── mat-probabilita.js
    │   ├── fis-meccanica.js
    │   ├── fis-termodinamica.js
    │   ├── fis-elettromagnetismo.js
    │   ├── fis-ottica.js
    │   ├── fis-moderna.js
    │   ├── sci-chimica-organica.js
    │   ├── sci-biologia.js
    │   └── sci-terra.js
    ├── comune/
    │   ├── ita-origini.js
    │   ├── ita-umanesimo.js
    │   ├── ita-illuminismo.js
    │   ├── ita-romanticismo.js
    │   ├── ita-verismo.js
    │   ├── ita-decadentismo.js
    │   ├── ita-novecento-prosa.js
    │   ├── ita-novecento-poesia.js
    │   ├── ita-dopoguerra.js
    │   ├── sto-fine-ottocento.js
    │   ├── sto-belle-epoque.js
    │   ├── sto-ww1.js
    │   ├── sto-totalitarismi.js
    │   ├── sto-guerra-civile-spagna.js
    │   ├── sto-ww2.js
    │   ├── sto-guerra-fredda.js
    │   ├── sto-italia-repubblicana.js
    │   ├── fil-idealismo.js
    │   ├── fil-reazione-idealismo.js
    │   ├── fil-marx.js
    │   ├── fil-positivismo.js
    │   ├── fil-nietzsche.js
    │   ├── fil-freud.js
    │   ├── fil-epistemologia.js
    │   └── fil-esistenzialismo.js
    ├── classico/
    │   ├── lat-grammatica.js
    │   ├── lat-virgilio.js
    │   ├── lat-cicerone.js
    │   ├── lat-tacito.js
    │   ├── lat-orazio.js
    │   ├── lat-seneca.js
    │   ├── gre-grammatica.js
    │   ├── gre-omero.js
    │   ├── gre-platone.js
    │   ├── gre-teatro.js
    │   └── gre-storici.js
    ├── linguistico/
    │   ├── eng-romanticismo.js
    │   ├── eng-vittoriano.js
    │   ├── eng-modernismo.js
    │   └── eng-dopoguerra.js
    ├── scienze-umane/
    │   ├── psi-origini.js
    │   ├── psi-freud.js
    │   ├── psi-comportamentismo.js
    │   ├── psi-umanistica.js
    │   ├── psi-cognitiva.js
    │   ├── psi-sociale.js
    │   ├── soc-fondatori.js
    │   ├── soc-istituzioni.js
    │   ├── soc-devianza.js
    │   ├── soc-globalizzazione.js
    │   ├── soc-welfare.js
    │   ├── ped-storia.js
    │   ├── ped-novecento.js
    │   ├── ped-contemporanea.js
    │   ├── ant-cultura.js
    │   ├── ant-etnografia.js
    │   └── ant-relativismo.js
    └── artistico/
        ├── art-antica-medievale.js
        ├── art-rinascimento.js
        ├── art-barocco.js
        ├── art-ottocento.js
        ├── art-post-impressionismo.js
        └── art-novecento.js
```

---

## Build Order & Status

| # | File | Status |
|---|------|--------|
| 1 | `PROGRESS.md` | ✅ DONE |
| 2 | `js/data.js` | ✅ DONE |
| 3 | `data/informatica/informatica-basi-di-dati.js` | ✅ DONE |
| 4 | `index.html` | ✅ DONE |
| 5 | `css/reset.css` | ✅ DONE |
| 6 | `css/layout.css` | ✅ DONE |
| 7 | `css/tree.css` | ✅ DONE |
| 8 | `css/animations.css` | ✅ DONE |
| 9 | `css/study-panel.css` | ✅ DONE |
| 10 | `js/tree-layout.js` | ✅ DONE |
| 11 | `js/tree-animations.js` | ✅ DONE |
| 12 | `js/study-panel.js` | ✅ DONE |
| 13 | `js/tree-engine.js` | ✅ DONE |
| 14 | `js/app.js` | ✅ DONE |
| 15 | All remaining `data/` files | 🔄 IN PROGRESS |

---

## Data Files Status

### data/informatica/
| File | Status |
|------|--------|
| informatica-basi-di-dati.js | ✅ DONE (aggiornato: aggiunti 9 subtopic di progettazione logica) |
| informatica-reti.js | ✅ DONE |
| informatica-programmazione.js | ✅ DONE |
| informatica-sistemi-operativi.js | ✅ DONE |
| informatica-web.js | ✅ DONE |
| sistemi-reti-architetture.js | ✅ DONE |
| sistemi-reti-lan.js | ✅ DONE |
| sistemi-reti-protocolli.js | ✅ DONE |
| sistemi-reti-sicurezza.js | ✅ DONE |
| sistemi-reti-cloud.js | ✅ DONE |
| tpsit-concorrenza.js | ✅ DONE |
| tpsit-socket.js | ✅ DONE |
| tpsit-web-server.js | ✅ DONE |
| tpsit-webservices.js | ✅ DONE |
| tpsit-progettazione.js | ✅ DONE |

### data/comune/ (Italiano, Storia, Filosofia)
| File | Status |
|------|--------|
| ita-origini.js | ✅ DONE |
| ita-umanesimo.js | ⬜ TODO |
| ita-illuminismo.js | ⬜ TODO |
| ita-romanticismo.js | ✅ DONE |
| ita-verismo.js | ✅ DONE |
| ita-decadentismo.js | ✅ DONE |
| ita-novecento-prosa.js | ✅ DONE |
| ita-novecento-poesia.js | ⬜ TODO |
| ita-dopoguerra.js | ✅ DONE |
| sto-fine-ottocento.js | ⬜ TODO |
| sto-belle-epoque.js | ⬜ TODO |
| sto-ww1.js | ✅ DONE |
| sto-totalitarismi.js | ✅ DONE |
| sto-guerra-civile-spagna.js | ✅ DONE |
| sto-ww2.js | ✅ DONE |
| sto-guerra-fredda.js | ✅ DONE |
| sto-italia-repubblicana.js | ✅ DONE |
| fil-idealismo.js | ⬜ TODO |
| fil-reazione-idealismo.js | ⬜ TODO |
| fil-marx.js | ⬜ TODO |
| fil-positivismo.js | ⬜ TODO |
| fil-nietzsche.js | ✅ DONE |
| fil-freud.js | ⬜ TODO |
| fil-epistemologia.js | ⬜ TODO |
| fil-esistenzialismo.js | ⬜ TODO |

### data/scientifico/
| File | Status |
|------|--------|
| mat-limiti.js | ⬜ TODO |
| mat-continuita.js | ⬜ TODO |
| mat-derivate.js | ⬜ TODO |
| mat-studio-funzione.js | ⬜ TODO |
| mat-integrali.js | ⬜ TODO |
| mat-geometria-analitica.js | ⬜ TODO |
| mat-probabilita.js | ⬜ TODO |
| fis-meccanica.js | ⬜ TODO |
| fis-termodinamica.js | ⬜ TODO |
| fis-elettromagnetismo.js | ⬜ TODO |
| fis-ottica.js | ⬜ TODO |
| fis-moderna.js | ⬜ TODO |
| sci-chimica-organica.js | ⬜ TODO |
| sci-biologia.js | ⬜ TODO |
| sci-terra.js | ⬜ TODO |

### data/classico/
| File | Status |
|------|--------|
| lat-grammatica.js | ⬜ TODO |
| lat-virgilio.js | ⬜ TODO |
| lat-cicerone.js | ⬜ TODO |
| lat-tacito.js | ⬜ TODO |
| lat-orazio.js | ⬜ TODO |
| lat-seneca.js | ⬜ TODO |
| gre-grammatica.js | ⬜ TODO |
| gre-omero.js | ⬜ TODO |
| gre-platone.js | ⬜ TODO |
| gre-teatro.js | ⬜ TODO |
| gre-storici.js | ⬜ TODO |

### data/linguistico/
| File | Status |
|------|--------|
| eng-romanticismo.js | ⬜ TODO |
| eng-vittoriano.js | ⬜ TODO |
| eng-modernismo.js | ⬜ TODO |
| eng-dopoguerra.js | ⬜ TODO |

### data/scienze-umane/
| File | Status |
|------|--------|
| psi-origini.js | ⬜ TODO |
| psi-freud.js | ⬜ TODO |
| psi-comportamentismo.js | ⬜ TODO |
| psi-umanistica.js | ⬜ TODO |
| psi-cognitiva.js | ⬜ TODO |
| psi-sociale.js | ⬜ TODO |
| soc-fondatori.js | ⬜ TODO |
| soc-istituzioni.js | ⬜ TODO |
| soc-devianza.js | ⬜ TODO |
| soc-globalizzazione.js | ⬜ TODO |
| soc-welfare.js | ⬜ TODO |
| ped-storia.js | ⬜ TODO |
| ped-novecento.js | ⬜ TODO |
| ped-contemporanea.js | ⬜ TODO |
| ant-cultura.js | ⬜ TODO |
| ant-etnografia.js | ⬜ TODO |
| ant-relativismo.js | ⬜ TODO |

### data/artistico/
| File | Status |
|------|--------|
| art-antica-medievale.js | ⬜ TODO |
| art-rinascimento.js | ⬜ TODO |
| art-barocco.js | ⬜ TODO |
| art-ottocento.js | ⬜ TODO |
| art-post-impressionismo.js | ⬜ TODO |
| art-novecento.js | ⬜ TODO |

---

## Tree Structure Summary
- Level 1: Root (Maturità Prep)
- Level 2: Liceo type (Scientifico, Classico, Informatica ITI, Linguistico, Scienze Umane, Artistico)
- Level 3: Subject (Matematica, Fisica, Informatica, ecc.)
- Level 4: Topic (Derivate, Basi di Dati, ecc.)
- Subtopics: tabs inside the study panel

## Study Panel Sections (per ogni subtopic)
1. Spiegazione
2. Domande possibili della commissione
3. Domande & Risposte
4. Da ricordare
5. Da non dire
6. Raccomandazioni
