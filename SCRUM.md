# Research-Ready Website Backlog & Sprint Epics

Dit backlog bevat de geprioriteerde epics en Scrum-taken voor de doorontwikkeling van [research-ready.nl](https://research-ready.nl). Alle user stories en taken voldoen aan de **INVEST-criteria** (Independent, Negotiable, Valuable, Estimable, Small, Testable) met concrete acceptatiecriteria.

---

## Overzicht van Epics

| Epic ID | Titel | Prioriteit | Story Points | Status |
|---|---|---|---|---|
| **EPIC-WEB-01** | Homepage Showcase: Uitgelichte Use Cases | P1 (Hoog) | 8 SP | To Do |
| **EPIC-WEB-02** | Navigatie & Mobile UX: Use Cases Dropdown & Hamburger | P1 (Hoog) | 5 SP | To Do |
| **EPIC-WEB-03** | Interactieve Demo Previews (3D Graph & Tooltips) | P2 (Medium) | 8 SP | To Do |
| **EPIC-WEB-04** | Workshop & Intake Funnel (4-Stappen Traject & Cal.com) | P2 (Medium) | 8 SP | To Do |
| **EPIC-WEB-05** | Complete 21 Use Cases Directory & Filtermatrix | P3 (Laag) | 13 SP | To Do |
| **EPIC-WEB-06** | Trust Signals, EDRM Compliance & SEO Structured Data | P3 (Laag) | 5 SP | To Do |

---

## EPIC-WEB-01: Homepage Showcase — Uitgelichte Use Cases
**User Story:**  
*Als bezoeker van research-ready.nl wil ik direct op de homepage visuele previews zien van de werkende use cases (UC1, UC4, UC11, UC12), zodat ik binnen 5 seconden begrijp dat Research-Ready operationele software en geverifieerde data levert.*

**INVEST Validatie:**  
- **I:** Onafhankelijk van andere pagina's; gebruikt bestaande routes en afbeeldingen.  
- **N:** Indeling (grid vs. carousel) en tekstlengte kunnen worden aangepast.  
- **V:** Hoge conversiewaarde: verlaagt bounce rate door tastbare bewijzen boven de vouw.  
- **E:** In te schatten op ~8 SP (~1 werkdag).  
- **S:** Opgesplitst in 4 deeltaken van elk 1–3 uur.  
- **T:** Duidelijke visuele en functionele acceptatietests per taak.

### Taken:
* **TSK-WEB-01: Component `FeaturedShowcase.astro` ontwikkelen** (3 SP)
  * **Omschrijving:** Bouw een responsive 4-card grid component met screenshot miniatuur, status-pill (bijv. "Demo Live", "Gevalideerd met Scania"), kernboodschap en doorkliklink naar de 1-2 pager en de Reveal.js pitch.
  * **Acceptatiecriteria:**
    - [ ] Render 4 kaarten: UC1, UC4, UC11, UC12.
    - [ ] Elke kaart bevat een geoptimaliseerde afbeelding, titel, tag, en 2 links (Naar Use Case + Naar Pitch).
    - [ ] Responsive gedrag: 4 kolommen op breed scherm, 2 kolommen op tablet, 1 kolom op mobiel.
* **TSK-WEB-02: i18n content definities toevoegen** (2 SP)
  * **Omschrijving:** Breid `src/i18n/nl.ts` en `src/i18n/en.ts` uit met `home.featuredCases` data-structuur.
  * **Acceptatiecriteria:**
    - [ ] 100% tweetalige pariteit tussen NL en EN.
    - [ ] Geen hardcoded teksten in het Astro-component.
* **TSK-WEB-03: Integratie in `index.astro` en `en/index.astro`** (2 SP)
  * **Omschrijving:** Plaats de `FeaturedShowcase` sectie direct onder de Hero / stats-balk op de homepage.
  * **Acceptatiecriteria:**
    - [ ] Sectie vloeit naadloos over in het bestaande kleurenpalet (`--bg-alt`).
    - [ ] Directe navigatie naar de 1-2 pagers werkt vlekkeloos zonder layout shift (CLS < 0.1).
* **TSK-WEB-04: Toegankelijkheid & WCAG AA audit** (1 SP)
  * **Omschrijving:** Controleer contrastratio's, focus states bij toetsenbordnavigatie en `alt`-attributen van de screenshots.
  * **Acceptatiecriteria:**
    - [ ] Alle kaarten zijn navigeerbaar met Tab en enter.
    - [ ] Kleurcontrast van badges voldoet aan WCAG 2.1 AA (minstens 4.5:1).

---

## EPIC-WEB-02: Navigatie & Mobile UX Polish
**User Story:**  
*Als mobiele bezoeker of desktopgebruiker wil ik een overzichtelijke navigatiebalk met een gegroepeerd Use Cases menu, zodat de menubalk niet overloopt en ik op elk apparaat snel bij de juiste pagina kom.*

**INVEST Validatie:**  
- **I:** Beïnvloedt enkel de header/navigatie-architectuur.  
- **N:** Vormgeving van de dropdown (hover vs click) flexibel.  
- **V:** Voorkomt afbrekende regels en rommelige layout op schermen < 1200px.  
- **E:** In te schatten op 5 SP (~4 uur).  
- **S:** 3 compacte subtaken.  
- **T:** Testbaar op alle gangbare schermformaten en touch apparaten.

### Taken:
* **TSK-WEB-05: Toegankelijke Use Cases Dropdown in `Navbar.astro`** (2 SP)
  * **Omschrijving:** Vervang de losse `UC1`, `UC4`, `UC11`, `UC12` links op desktop door een gestroomlijnd dropdownmenu "Use Cases ▾".
  * **Acceptatiecriteria:**
    - [ ] Dropdown opent op hover en op click/focus.
    - [ ] Sluit met Escape of klik buiten het menu.
    - [ ] Bevat directe links naar de 4 gepubliceerde cases met duidelijke subtitels.
* **TSK-WEB-06: Mobiel Hamburger Menu implementeren** (2 SP)
  * **Omschrijving:** Voeg een mobiele menuknop toe voor schermen onder 768px die een inklapbaar menu opent.
  * **Acceptatiecriteria:**
    - [ ] Hamburger button met `aria-expanded` state.
    - [ ] Taalschakelaar (NL/EN) blijft prominent zichtbaar en bedienbaar.
    - [ ] Menu sluit automatisch na het klikken op een navigatielink.
* **TSK-WEB-07: Cross-device viewport audit** (1 SP)
  * **Omschrijving:** Test de navigatie op 375px (iPhone), 412px (Android), 768px (iPad) en 1440px desktop.
  * **Acceptatiecriteria:**
    - [ ] Geen horizontale scrollbalken (geen overflow-x).
    - [ ] Tap targets zijn minstens 44x44px.

---

## EPIC-WEB-03: Interactieve Demo Previews & Live Explorers
**User Story:**  
*Als analist of geïnteresseerde partner wil ik direct in de browser interactief kunnen experimenteren met de visualisaties van UC4, UC12 en UC1, zodat ik de diepgang van de pipelines ervaar zonder software te hoeven installeren.*

**INVEST Validatie:**  
- **I:** Kan per use case individueel worden geïmplementeerd.  
- **N:** Modale weergave versus inline embed bespreekbaar.  
- **V:** Hoge wow-factor en directe demonstratiewaarde voor pitches.  
- **E:** In te schatten op 8 SP (~1 dag).  
- **S:** Opgesplitst in 3 afgebakende viewers.  
- **T:** Testbaar op responstijd, browser rendering en touch interactie.

### Taken:
* **TSK-WEB-08: Three.js 3D Supply Chain Viewer voor UC4** (3 SP)
  * **Omschrijving:** Integreer een preview modal of embedded iframe voor `supplylens_3d.html` op de UC4 pagina met een "Start 3D Verkenner" knop.
  * **Acceptatiecriteria:**
    - [ ] Gebruiker kan de 3D-graaf roteren, inzoomen en knopen aanklikken.
    - [ ] Fallback naar statische afbeelding op trage verbindingen of mobiel.
* **TSK-WEB-09: Interactieve SVG Benchmark Tooltips voor UC12** (3 SP)
  * **Omschrijving:** Maak de vector benchmark charts op de UC12 pagina interactief met hover-tooltips voor individuele modelscores (Hermes vs Qwen vs Claude vs GPT).
  * **Acceptatiecriteria:**
    - [ ] Hoveren over een datapunt toont het model, de categorie en de exacte nauwkeurigheidsscore.
    - [ ] Directe CTA-link naar het live Quarto-boek op GitHub Pages.
* **TSK-WEB-10: Citable Report Sample Viewer voor UC1** (2 SP)
  * **Omschrijving:** Voeg een tabblad/modal toe om een gegenereerd citable Quarto-onderzoeksrapport in-browser door te bladeren en de BibTeX broncode te inspecteren.
  * **Acceptatiecriteria:**
    - [ ] Tab 1: Rendered DOCX/PDF preview van het rapport.
    - [ ] Tab 2: BibTeX bronvermelding en cryptografische chain-of-custody JSON viewer.

---

## EPIC-WEB-04: The Workshop & Intake Funnel
**User Story:**  
*Als onderzoeksleider of IT-manager wil ik een duidelijk 4-stappenplan zien van het samenwerkingstraject, zodat ik weet wat ik kan verwachten en direct een intake of workshop kan boeken.*

**INVEST Validatie:**  
- **I:** Breidt de marketing funnel uit zonder bestaande use-case pagina's te breken.  
- **N:** Stappentitels en intakevragen zijn open voor feedback.  
- **V:** Cruciaal voor commerciële en academische leadconversie (adresseert open TODO.md punten).  
- **E:** In te schatten op 8 SP (~1 dag).  
- **S:** 3 concrete taken.  
- **T:** E2E test van afspraak boeken via Cal.com en formulierbevestiging.

### Taken:
* **TSK-WEB-11: "Hoe het werkt" 4-stappen sectie bouwen** (3 SP)
  * **Omschrijving:** Ontwerp een visueel stappenplan: 1. Intake & Vraagdefinitie → 2. Soevereiniteitstoets & Modelselectie → 3. Live Demonstrator/Workshop → 4. Pipeline Oplevering.
  * **Acceptatiecriteria:**
    - [ ] Zowel op de homepage als op `/contact/` beschikbaar.
    - [ ] Duidelijke deliverables per stap gespecificeerd.
* **TSK-WEB-12: Cal.com Event Type & Responsive Embed** (3 SP)
  * **Omschrijving:** Vervang de placeholder link in `CalEmbed.astro` door geconfigureerde event types (bijv. `research-ready/intro-call` en `research-ready/workshop`).
  * **Acceptatiecriteria:**
    - [ ] Werkt responsive op zowel mobiel als desktop.
    - [ ] Bevestigingsmail wordt correct verzonden via Cal.com.
* **TSK-WEB-13: Formulier Fallback (Formbricks/Contact)** (2 SP)
  * **Omschrijving:** Bied een eenvoudig contactformulier als alternatief voor bezoekers die niet direct een agenda-afspraak willen plannen.
  * **Acceptatiecriteria:**
    - [ ] Valideert e-mailadres en berichtinvoer.
    - [ ] Toont een duidelijke succesmelding na verzending.

---

## EPIC-WEB-05: Complete 21 Use Cases Directory & Filtermatrix
**User Story:**  
*Als subsidieverlener of consortiumpartner wil ik een gestructureerde catalogus van alle 21 use cases zien, filterbaar op status en domein, zodat ik de volledige institutionele reikwijdte van Research-Ready overzie.*

**INVEST Validatie:**  
- **I:** Kan gebouwd worden bovenop `registry.yml` uit de workbook.  
- **N:** Filtercriteria (domein, status, hardware) zijn configureerbaar.  
- **V:** Toont institutionele volwassenheid en trekt specifieke sectorpartners aan.  
- **E:** In te schatten op 13 SP (~2 dagen).  
- **S:** Opgesplitst in data-extractie, UI-matrix en repository routing.  
- **T:** Filteracties werken direct in de browser zonder herladen.

### Taken:
* **TSK-WEB-14: Datamodel genereren voor 21 use cases** (3 SP)
  * **Omschrijving:** Compileer `src/data/usecases.json` uit de centrale `registry.yml` en repo-statussen.
  * **Acceptatiecriteria:**
    - [ ] Bevat UC1 t/m UC21 met ID, titel, domein, status (`demo-ready`, `build`, `design`), repo-link en documentatielink.
* **TSK-WEB-15: Filterbare Catalogus Component (`PipelineCatalog.astro`)** (6 SP)
  * **Omschrijving:** Bouw een interactieve tabel of kaartraster met filterknoppen voor Status (Live / In Ontwikkeling / Gepland) en Sector (Logistiek / Governance / Onderwijs / AI).
  * **Acceptatiecriteria:**
    - [ ] Filteren werkt realtime via vanille JavaScript (zonder zware frameworks).
    - [ ] Aantal getoonde resultaten update dynamisch.
* **TSK-WEB-16: Routing & Badging voor UC-dossiers** (4 SP)
  * **Omschrijving:** Koppel kaarten aan gepubliceerde pagina's (UC1, UC4, UC11, UC12) en voorzie overige cases van badges die linken naar de Quarto boeken of documentatie.
  * **Acceptatiecriteria:**
    - [ ] Geen dode links; elke use case heeft een werkend vervolgdoel.

---

## EPIC-WEB-06: Trust Signals, EDRM Compliance & SEO Structured Data
**User Story:**  
*Als zakelijke beslisser of toezichthouder wil ik formele keurmerken en referentiepartners zien, zodat de juridische en methodologische betrouwbaarheid direct duidelijk is.*

**INVEST Validatie:**  
- **I:** Modulair toe te voegen aan footer, homepage en use case templates.  
- **N:** Logo selectie en formaat flexibel.  
- **V:** Bouwt vertrouwen op bij enterprise en overheidsklanten; verbetert zoekmachine ranking.  
- **E:** In te schatten op 5 SP (~4 uur).  
- **S:** 3 kleine taken.  
- **T:** Valideerbaar via Google Rich Results Test en visuele controle.

### Taken:
* **TSK-WEB-17: Partner- & Validatiebalk (`TrustBar.astro`)** (2 SP)
  * **Omschrijving:** Maak een partnerstrip met badges/logo's van Scania AB (Grondwaarheid), Topsector Logistiek / SmartPort, en EDRM.
  * **Acceptatiecriteria:**
    - [ ] Neutrale, professionele monochrome styling passend bij het donkere/lichte palet.
    - [ ] Tooltip of ondertitel die de rol van elke partner toelicht.
* **TSK-WEB-18: EDRM & Datasoevereiniteit Modal** (2 SP)
  * **Omschrijving:** Voeg een beknopte toelichting toe over het Electronic Discovery Reference Model en wat 100% soevereine hosting concreet inhoudt voor AVG en intellectueel eigendom.
  * **Acceptatiecriteria:**
    - [ ] Toegankelijk via een "Waarom EDRM?" knop in de footer of hero.
* **TSK-WEB-19: Schema.org JSON-LD Structured Data** (1 SP)
  * **Omschrijving:** Voeg gestructureerde data toe aan `BaseLayout.astro` en `UseCasePage.astro` (`Organization`, `SoftwareApplication`).
  * **Acceptatiecriteria:**
    - [ ] Slaagt foutloos voor de Google Rich Results validator.
