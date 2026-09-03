import type { CertModule } from './types';

export const itil4: CertModule = {
  id: 'itil4',
  title: 'ITIL 4 Foundation',
  subtitle: 'Wereldwijd erkende standaard voor IT-servicemanagement — fundament voor iedere IT-professional.',
  vendor: 'Axelos / PeopleCert',
  level: 'Foundation',
  examCode: 'ITILFND V4',
  totalQuestions: 40,
  duration: 60,
  passScore: 65,
  cost: '€330',
  domains: [
    {
      id: 'key-concepts',
      title: 'Kernconcepten van Servicemanagement',
      weight: 15,
      lesson: {
        overview: 'ITIL 4 begint met de basisvocabulaire van servicemanagement. De centrale begrippen zijn: service (het middel om waarde te co-creëren), utility (fit for purpose — doet het wat het moet doen?), warranty (fit for use — werkt het betrouwbaar?), en de rollen van klant, gebruiker en sponsor. Zonder deze begrippen is de rest van ITIL moeilijk te begrijpen.',
        keyPoints: [
          'Service: een middel om waardeco-creatie mogelijk te maken door klanten de gewenste uitkomsten te faciliteren, zonder dat zij specifieke kosten en risico\'s hoeven te beheren',
          'Waarde: de gepercipieerde voordelen, bruikbaarheid en importantie van iets — altijd co-gecreëerd tussen provider en consument',
          'Utility (fit for purpose): de functionaliteit die een dienst biedt om in een specifieke behoefte te voorzien',
          'Warranty (fit for use): de garantie dat een dienst afgesproken prestatieniveaus haalt (beschikbaarheid, capaciteit, beveiliging, continuïteit)',
          'Zowel utility ALS warranty zijn nodig voor waardecreatie — zonder één van beide faalt de dienst',
          'Klant: stelt eisen en is verantwoordelijk voor uitkomsten',
          'Gebruiker: gebruikt de dienst dagelijks',
          'Sponsor: keurt het budget voor dienstconsumptie goed',
          'Uitkomst (outcome): het resultaat voor een stakeholder, mogelijk gemaakt door outputs',
          'Output: een tastbaar of ontastbaar resultaat van een activiteit'
        ],
        studyTip: 'Het examen test het verschil tussen utility en warranty regelmatig. Onthoud: utility = "doet het de juiste dingen?" (fit for purpose), warranty = "werkt het betrouwbaar?" (fit for use). Beide zijn nodig.'
      },
      questions: [
        {
          id: 'kc-1',
          domain: 'key-concepts',
          question: 'Welke term beschrijft de gepercipieerde voordelen, bruikbaarheid en importantie van een dienst?',
          options: ['Utility', 'Warranty', 'Waarde', 'Uitkomst'],
          correct: 2,
          explanation: 'Waarde is perceptie — het is wat stakeholders als nuttig beschouwen. Het omvat directe voordelen en de vermindering van risico\'s en kosten, en wordt altijd co-gecreëerd.'
        },
        {
          id: 'kc-2',
          domain: 'key-concepts',
          question: 'Een dienst wordt het BEST omschreven als:',
          options: [
            'Een product dat een bedrijf aan klanten verkoopt',
            'Een middel om waardeco-creatie mogelijk te maken door klanten de gewenste uitkomsten te faciliteren zonder specifieke kosten en risico\'s te hoeven beheren',
            'Elk IT-systeem of elke applicatie geleverd aan gebruikers',
            'Een proces dat een tastbaar output produceert'
          ],
          correct: 1,
          explanation: 'ITIL 4 definieert een dienst als een middel om waardeco-creatie mogelijk te maken. Klanten hoeven de bijbehorende kosten en risico\'s van levering niet zelf te beheren.'
        },
        {
          id: 'kc-3',
          domain: 'key-concepts',
          question: 'Utility verwijst naar:',
          options: [
            'De garantie dat een dienst afgesproken prestatieniveaus haalt',
            'De functionaliteit die een product of dienst biedt om in een specifieke behoefte te voorzien',
            'De betrouwbaarheid en beschikbaarheid van een dienst',
            'De financiële kosten van het leveren van een dienst'
          ],
          correct: 1,
          explanation: 'Utility = "fit for purpose" — doet de dienst wat het moet doen? Warranty = "fit for use" — werkt de dienst betrouwbaar? Beide zijn nodig voor waardecreatie.'
        },
        {
          id: 'kc-4',
          domain: 'key-concepts',
          question: 'Welke term beschrijft wat een klant bereikt door gebruik van een dienst?',
          options: ['Output', 'Uitkomst', 'Waarde', 'Utility'],
          correct: 1,
          explanation: 'Uitkomst (outcome) = het resultaat mogelijk gemaakt door de dienst vanuit het perspectief van de klant. Output = het tastbare resultaat van een proces/activiteit. Uitkomsten zijn wat klanten eigenlijk willen.'
        },
        {
          id: 'kc-5',
          domain: 'key-concepts',
          question: 'Wie is PRIMAIR verantwoordelijk voor het definiëren van eisen voor een dienst?',
          options: ['Gebruiker', 'Sponsor', 'Klant', 'Serviceprovider'],
          correct: 2,
          explanation: 'Klant = stelt eisen en is verantwoordelijk voor uitkomsten. Gebruiker = gebruikt de dienst dagelijks. Sponsor = keurt het budget goed. Deze rollen kunnen in één persoon samenvallen.'
        },
        {
          id: 'kc-6',
          domain: 'key-concepts',
          question: 'Servicemanagement is het BEST omschreven als:',
          options: [
            'Een set IT-tools voor het beheren van incidenten en problemen',
            'Een set gespecialiseerde organisatorische mogelijkheden om waarde voor klanten te creëren in de vorm van diensten',
            'Het proces van ontwerpen en implementeren van IT-systemen',
            'Het financieel beheer van IT-diensten'
          ],
          correct: 1,
          explanation: 'ITIL 4 definieert servicemanagement als een set gespecialiseerde organisatorische mogelijkheden die waardeco-creatie mogelijk maken. Het is breder dan IT — het gaat over organisatorische capability.'
        },
        {
          id: 'kc-7',
          domain: 'key-concepts',
          question: 'Welke bewering over waarde in ITIL 4 is CORRECT?',
          options: [
            'Waarde wordt uitsluitend bepaald door de serviceprovider op basis van kosten',
            'Waarde is altijd financieel van aard',
            'Waarde wordt co-gecreëerd tussen serviceproviders en consumenten',
            'Waarde ligt vast zodra de dienst ontworpen is'
          ],
          correct: 2,
          explanation: 'ITIL 4 benadrukt waardeco-creatie — het ontstaat uit de interactie tussen provider en consument. De context en behoeften van de consument bepalen wat waarde betekent.'
        }
      ],
      flashcards: [
        { term: 'Dienst (Service)', definition: 'Een middel om waardeco-creatie mogelijk te maken door klanten de gewenste uitkomsten te faciliteren, zonder dat zij specifieke kosten en risico\'s hoeven te beheren' },
        { term: 'Waarde (Value)', definition: 'De gepercipieerde voordelen, bruikbaarheid en importantie van iets' },
        { term: 'Utility', definition: '"Fit for purpose" — de functionaliteit die een dienst biedt om in een specifieke behoefte te voorzien' },
        { term: 'Warranty', definition: '"Fit for use" — de garantie dat een dienst afgesproken prestatieniveaus haalt (beschikbaarheid, capaciteit, beveiliging, continuïteit)' },
        { term: 'Klant (Customer)', definition: 'Persoon die eisen stelt voor een dienst en verantwoordelijkheid neemt voor uitkomsten' },
        { term: 'Gebruiker (User)', definition: 'Persoon die de dienst dagelijks gebruikt' },
        { term: 'Sponsor', definition: 'Persoon die het budget voor dienstconsumptie goedkeurt' },
        { term: 'Uitkomst (Outcome)', definition: 'Een resultaat voor een stakeholder, mogelijk gemaakt door outputs' },
        { term: 'Output', definition: 'Een tastbaar of ontastbaar resultaat van een activiteit' },
        { term: 'Servicemanagement', definition: 'Een set gespecialiseerde organisatorische mogelijkheden om waarde voor klanten te creëren in de vorm van diensten' },
        { term: 'Kosten (Cost)', definition: 'Het bedrag dat wordt besteed aan een specifieke activiteit of resource' },
        { term: 'Risico (Risk)', definition: 'Een mogelijk event dat schade, verlies of belemmeringen kan veroorzaken voor het bereiken van doelstellingen' },
        { term: 'Waardeco-creatie', definition: 'Waarde ontstaat gezamenlijk door provider en consument — geen van beide creëert het alleen' }
      ]
    },
    {
      id: 'four-dimensions',
      title: 'De Vier Dimensies van Servicemanagement',
      weight: 12,
      lesson: {
        overview: 'ITIL 4 beschrijft vier dimensies die samen een holistische kijk op servicemanagement garanderen. Elke dimensie is essentieel — overfocus op één dimensie (bijv. alleen technologie) leidt tot suboptimale diensten. Alle vier worden beïnvloed door externe PESTLE-factoren (Political, Economic, Social, Technological, Legal, Environmental).',
        keyPoints: [
          'Dimensie 1 — Organisaties en Mensen: structuur, rollen, cultuur, personeel en competenties',
          'Dimensie 2 — Informatie en Technologie: data, kennissystemen, AI, automatisering en technologische tools',
          'Dimensie 3 — Partners en Leveranciers: relaties met externe organisaties die goederen en diensten leveren',
          'Dimensie 4 — Waardeketen en Processen: hoe activiteiten in sequentie waarde creëren — workflows en processen',
          'Alle vier dimensies worden beïnvloed door externe PESTLE-factoren buiten de controle van de organisatie',
          'Een waardestroom (value stream) is een reeks stappen die de organisatie gebruikt om producten en diensten te creëren en te leveren',
          'Silo-denken (optimaliseren van één dimensie ten koste van andere) is een anti-patroon dat ITIL 4 expliciet afwijst',
          'Organisatiecultuur valt onder Organisaties en Mensen — cultuur bepaalt hoe medewerkers samenwerken en diensten leveren',
          'AI, machine learning en automatisering vallen onder Informatie en Technologie'
        ],
        studyTip: 'Het examen geeft scenario\'s en vraagt welke dimensie het meest relevant is. Onthoud: als het over mensen/cultuur/structuur gaat → Organisaties en Mensen; leveranciers → Partners en Leveranciers; processen/workflows → Waardeketen en Processen; systemen/data → Informatie en Technologie.'
      },
      questions: [
        {
          id: 'fd-1',
          domain: 'four-dimensions',
          question: 'De vier dimensies van servicemanagement zorgen ervoor dat:',
          options: [
            'Diensten binnen budget en op tijd worden geleverd',
            'Een holistische benadering van servicemanagement wordt gevolgd waarbij alle aspecten die een dienst beïnvloeden worden meegenomen',
            'IT-systemen aan technische prestatievereisten voldoen',
            'Externe leveranciers effectief worden beheerd'
          ],
          correct: 1,
          explanation: 'De vier dimensies (Organisaties & Mensen, Informatie & Technologie, Partners & Leveranciers, Waardeketen & Processen) voorkomen silo-denken en zorgen dat alle aspecten van dienstlevering worden overwogen.'
        },
        {
          id: 'fd-2',
          domain: 'four-dimensions',
          question: 'Welke dimensie behandelt formele structuren, rollen en cultuur binnen een organisatie?',
          options: ['Waardeketen en Processen', 'Informatie en Technologie', 'Partners en Leveranciers', 'Organisaties en Mensen'],
          correct: 3,
          explanation: 'Organisaties en Mensen behandelt structuur, rollen, verantwoordelijkheden, cultuur en competenties. Een serviceorganisatie heeft de juiste mensen met de juiste vaardigheden nodig, werkend in een positieve cultuur.'
        },
        {
          id: 'fd-3',
          domain: 'four-dimensions',
          question: 'Een bedrijf gebruikt een externe cloudprovider voor infrastructuur. Deze relatie wordt PRIMAIR behandeld in welke dimensie?',
          options: ['Organisaties en Mensen', 'Informatie en Technologie', 'Partners en Leveranciers', 'Waardeketen en Processen'],
          correct: 2,
          explanation: 'Partners en Leveranciers behandelt relaties met externe organisaties: wat extern in te kopen, hoe leveranciersrelaties te beheren en governance van diensten van derden.'
        },
        {
          id: 'fd-4',
          domain: 'four-dimensions',
          question: 'Welke dimensie behandelt de workflow van activiteiten die waarde creëren voor dienstconsumenten?',
          options: ['Organisaties en Mensen', 'Informatie en Technologie', 'Partners en Leveranciers', 'Waardeketen en Processen'],
          correct: 3,
          explanation: 'Waardeketen en Processen definieert hoe de organisatie werk uitvoert — welke activiteiten waarde creëren, in welke volgorde, en hoe processen zijn geoptimaliseerd voor efficiëntie.'
        },
        {
          id: 'fd-5',
          domain: 'four-dimensions',
          question: 'PESTLE-factoren (Political, Economic, Social, Technological, Legal, Environmental) vertegenwoordigen:',
          options: [
            'ITIL-praktijkgebieden',
            'Externe factoren die alle vier de dimensies beïnvloeden',
            'Activiteiten van de servicewaardeketens',
            'Richtinggevende principes voor servicemanagement'
          ],
          correct: 1,
          explanation: 'ITIL 4 erkent dat alle vier de dimensies worden beïnvloed door externe PESTLE-factoren buiten de controle van de organisatie. Deze beperkingen moeten worden meegenomen in dienstontwerp.'
        },
        {
          id: 'fd-6',
          domain: 'four-dimensions',
          question: 'Welke dimensie omvat overwegingen over kunstmatige intelligentie, machine learning en automatisering?',
          options: ['Organisaties en Mensen', 'Informatie en Technologie', 'Partners en Leveranciers', 'Waardeketen en Processen'],
          correct: 1,
          explanation: 'Informatie en Technologie behandelt informatiesystemen, data, AI, automatisering en de technologieën die nodig zijn om diensten te leveren en te beheren.'
        },
        {
          id: 'fd-7',
          domain: 'four-dimensions',
          question: 'Een serviceorganisatie merkt dat het incidentbeheerproces te lang duurt door onnodige goedkeuringsstappen. Dit bekijken is PRIMAIR een zorg voor welke dimensie?',
          options: ['Organisaties en Mensen', 'Informatie en Technologie', 'Partners en Leveranciers', 'Waardeketen en Processen'],
          correct: 3,
          explanation: 'Inefficiënte processen worden aangepakt in de dimensie Waardeketen en Processen — hoe werk stroomt om waarde te creëren en waar knelpunten of verspilling bestaan.'
        }
      ],
      flashcards: [
        { term: 'Vier Dimensies', definition: 'De vier perspectieven voor een holistische aanpak: Organisaties & Mensen, Informatie & Technologie, Partners & Leveranciers, Waardeketen & Processen' },
        { term: 'Organisaties en Mensen', definition: 'Dimensie over structuur, rollen, cultuur, personeel en competenties' },
        { term: 'Informatie en Technologie', definition: 'Dimensie over data, kennis, technologie en tools die nodig zijn om diensten te leveren' },
        { term: 'Partners en Leveranciers', definition: 'Dimensie over relaties met externe organisaties die goederen en diensten leveren' },
        { term: 'Waardeketen en Processen', definition: 'Dimensie over workflows en processen die waarde creëren' },
        { term: 'PESTLE', definition: 'Political, Economic, Social, Technological, Legal, Environmental — externe factoren die alle vier dimensies beïnvloeden' },
        { term: 'Organisatiecultuur', definition: 'Gedeelde waarden, gedragingen en werkwijzen — onderdeel van Organisaties & Mensen dimensie' },
        { term: 'Configuratiemanagementsysteem', definition: 'Repository die informatie bijhoudt over alle CI\'s — Informatie & Technologie dimensie' },
        { term: 'Integratie', definition: 'Hoe de verschillende dimensies en hun componenten samenwerken' },
        { term: 'Waardestroom (Value Stream)', definition: 'Een reeks stappen die de organisatie gebruikt om producten en diensten te creëren en te leveren aan een consument' },
        { term: 'Proces', definition: 'Een set van onderling verbonden activiteiten die inputs omzetten in outputs' },
        { term: 'Workflow', definition: 'Een reeks taken of stappen die nodig zijn om een specifiek proces of procedure te voltooien' },
        { term: 'Uitbesteding (Outsourcing)', definition: 'Dienstlevering overdragen aan een externe leverancier — Partners & Leveranciers dimensie' }
      ]
    },
    {
      id: 'guiding-principles',
      title: 'De Zeven Richtinggevende Principes',
      weight: 18,
      lesson: {
        overview: 'De zeven richtinggevende principes van ITIL 4 zijn aanbevelingen die een organisatie in alle omstandigheden begeleiden, ongeacht veranderingen in doelen of managementstructuren. Ze zijn niet prescriptief maar bieden praktische wijsheid. Ze zijn nauw verwant aan Agile, DevOps en Lean principes.',
        keyPoints: [
          '1. Focus op Waarde: alles moet gekoppeld zijn aan waardecreatie voor stakeholders',
          '2. Begin Waar Je Bent: beoordeel de huidige staat; gooi niet weg wat werkt zonder evaluatie',
          '3. Itereer met Feedback: werk in kleinere stappen; gebruik feedback om bij te sturen',
          '4. Werk Samen en Bevorder Zichtbaarheid: betrek stakeholders; deel informatie transparant',
          '5. Denk en Werk Holistisch: overweeg hoe componenten op elkaar inwerken; vermijd silo-optimalisatie',
          '6. Houd Het Eenvoudig en Praktisch: elimineer onnodige complexiteit; als het geen waarde toevoegt, verwijder het',
          '7. Optimaliseer en Automatiseer: eerst optimaliseren (verspilling verwijderen), dan automatiseren wat overblijft',
          'Automatiseer nooit een slecht proces — je maakt een slecht proces alleen maar sneller',
          'Alle zeven principes zijn onderling verbonden en versterken elkaar',
          'De principes zijn gebaseerd op ITIL 4\'s intentie om samen te werken met Agile, DevOps, Lean en andere benaderingen'
        ],
        studyTip: 'Leer de namen van alle zeven principes uit je hoofd. Het examen vraagt scenario\'s waarbij je het meest toepasselijke principe moet identificeren. "Optimaliseer en Automatiseer" = eerst optimaliseren, dan automatiseren. "Begin Waar Je Bent" = niet alles weggooien en opnieuw beginnen.'
      },
      questions: [
        {
          id: 'gp-1',
          domain: 'guiding-principles',
          question: 'Een organisatie wil een nieuw ITSM-tool implementeren. Welk principe adviseert: beoordeel de huidige staat en bewaar wat werkt voordat je wijzigingen doorvoert?',
          options: [
            'Focus op Waarde',
            'Begin Waar Je Bent',
            'Houd Het Eenvoudig en Praktisch',
            'Werk Samen en Bevorder Zichtbaarheid'
          ],
          correct: 1,
          explanation: '"Begin Waar Je Bent" voorkomt verspilling door onnodige vervanging. Beoordeling van de huidige staat onthult vaak waardevolle mogelijkheden die bewaard en voortgebouwd moeten worden.'
        },
        {
          id: 'gp-2',
          domain: 'guiding-principles',
          question: 'Het principe "Focus op Waarde" vereist dat:',
          options: [
            'Alle activiteiten direct inkomsten genereren voor de organisatie',
            'Alles wat de organisatie doet gekoppeld moet zijn aan waarde voor stakeholders',
            'Waarde altijd gedefinieerd wordt door de serviceprovider',
            'Financiële waarde geprioriteerd wordt boven operationele waarde'
          ],
          correct: 1,
          explanation: 'Elke activiteit, beslissing en verbetering moet gekoppeld zijn aan hoe het waarde creëert voor klanten, gebruikers, de organisatie of andere stakeholders.'
        },
        {
          id: 'gp-3',
          domain: 'guiding-principles',
          question: 'Welk principe moedigt aan om stakeholders te betrekken en informatie transparant te delen?',
          options: [
            'Focus op Waarde',
            'Houd Het Eenvoudig en Praktisch',
            'Werk Samen en Bevorder Zichtbaarheid',
            'Optimaliseer en Automatiseer'
          ],
          correct: 2,
          explanation: '"Werk Samen en Bevorder Zichtbaarheid" erkent dat betere beslissingen voortkomen uit diverse perspectieven, en dat verborgen agenda\'s en silo-werk effectiviteit ondermijnen.'
        },
        {
          id: 'gp-4',
          domain: 'guiding-principles',
          question: 'Het principe "Itereer met Feedback" betekent:',
          options: [
            'Voltooi alle planning voordat je begint met implementatie',
            'Organiseer werk in kleinere iteraties en gebruik feedback om bij te sturen',
            'Maak slechts één wijziging tegelijk en wacht op volledige stabilisatie',
            'Automatiseer feedbackverzameling voordat je verdergaat'
          ],
          correct: 1,
          explanation: 'Grote, monolithische initiatieven zijn riskant. Itereren in kleinere stappen, leren van feedback en bijsturen vermindert risico\'s en verbetert uitkomsten. Nauw verwant aan Agile principes.'
        },
        {
          id: 'gp-5',
          domain: 'guiding-principles',
          question: 'Een organisatie herontwerpt haar servicedesk-proces en wil onnodige complexiteit elimineren. Welk principe is MEEST direct van toepassing?',
          options: [
            'Focus op Waarde',
            'Optimaliseer en Automatiseer',
            'Denk en Werk Holistisch',
            'Houd Het Eenvoudig en Praktisch'
          ],
          correct: 3,
          explanation: '"Houd Het Eenvoudig en Praktisch" adviseert onnodige stappen, formulieren en processen te elimineren. Als een element niet bijdraagt aan waardecreatie, stel dan de vraag of het moet bestaan.'
        },
        {
          id: 'gp-6',
          domain: 'guiding-principles',
          question: 'Het principe "Denk en Werk Holistisch" waarschuwt tegen:',
          options: [
            'Te veel investeren in automatisering',
            'Silo-denken dat negeert hoe componenten van een systeem op elkaar inwerken',
            'Te snel bewegen zonder input van stakeholders',
            'Verbeteringen starten zonder de huidige staat te beoordelen'
          ],
          correct: 1,
          explanation: 'Het optimaliseren van één component in isolatie kan het geheel sub-optimaliseren. Diensten, praktijken en processen zijn onderling verbonden — wijzigingen moeten het volledige systeem overwegen.'
        },
        {
          id: 'gp-7',
          domain: 'guiding-principles',
          question: 'Het principe "Optimaliseer en Automatiseer" stelt dat automatisering:',
          options: [
            'Alle menselijke besluitvorming in servicemanagement moet vervangen',
            'Alleen toegepast moet worden op kansen geïdentificeerd in de Design & Transition activiteit',
            'Menselijke optimalisatie moet volgen — eerst verspilling elimineren, dan automatiseren',
            'Alleen geïmplementeerd mag worden via AI-gebaseerde oplossingen'
          ],
          correct: 2,
          explanation: 'Een slecht proces automatiseren maakt het alleen maar sneller slecht. Eerst optimaliseren (vereenvoudigen, verspilling elimineren), dan automatiseren wat overblijft. Gebruik automatisering niet om slecht procesontwerp te maskeren.'
        }
      ],
      flashcards: [
        { term: 'Richtinggevende Principes', definition: 'Aanbevelingen die organisaties in alle omstandigheden begeleiden, ongeacht veranderingen in doelen of managementstructuren' },
        { term: 'Focus op Waarde', definition: 'Alles moet gekoppeld zijn aan waardecreatie voor stakeholders' },
        { term: 'Begin Waar Je Bent', definition: 'Beoordeel de huidige staat; gooi niet weg wat werkt zonder evaluatie' },
        { term: 'Itereer met Feedback', definition: 'Organiseer werk in kleinere iteraties; gebruik feedback om bij te sturen' },
        { term: 'Werk Samen en Bevorder Zichtbaarheid', definition: 'Betrek stakeholders; deel informatie transparant' },
        { term: 'Denk en Werk Holistisch', definition: 'Overweeg hoe componenten op elkaar inwerken; vermijd silo-optimalisatie' },
        { term: 'Houd Het Eenvoudig en Praktisch', definition: 'Elimineer onnodige complexiteit; als het geen waarde toevoegt, verwijder het' },
        { term: 'Optimaliseer en Automatiseer', definition: 'Eerst optimaliseren (verspilling verwijderen), dan automatiseren wat overblijft' },
        { term: 'Iteratie', definition: 'Een kleine, tijdsgebonden stap werk met een gedefinieerd doel en feedbacklus' },
        { term: 'Stakeholder', definition: 'Elke persoon die een belang heeft bij of beïnvloed wordt door de diensten van de organisatie' },
        { term: 'Transparantie', definition: 'Informatie zichtbaar en toegankelijk maken voor degenen die het nodig hebben' },
        { term: 'Verspilling (Waste)', definition: 'Elke activiteit die resources verbruikt zonder waarde toe te voegen' },
        { term: 'Automatisering', definition: 'Technologie gebruiken om taken uit te voeren met minimale menselijke tussenkomst — na optimalisatie, niet ervoor' }
      ]
    },
    {
      id: 'service-value-system',
      title: 'Het Service Value System',
      weight: 20,
      lesson: {
        overview: 'Het Service Value System (SVS) is het overkoepelende model van ITIL 4 dat beschrijft hoe alle componenten en activiteiten van een organisatie samenwerken om waardecreatie mogelijk te maken. Inputs zijn Kans en Vraag; de output is Waarde. Het SVS bestaat uit: Richtinggevende Principes, Governance, de Servicewaardeketens, Praktijken en Continu Verbeteren.',
        keyPoints: [
          'SVS inputs: Kans (mogelijkheden om waarde toe te voegen) en Vraag (behoefte aan producten/diensten)',
          'SVS output: Waarde (voor alle stakeholders)',
          'SVS componenten: Richtinggevende Principes, Governance, Servicewaardeketen, Praktijken, Continu Verbeteren',
          'Governance: de manier waarop een organisatie wordt bestuurd en gecontroleerd',
          'Continu Verbeteren is van toepassing op ALLE componenten van het SVS — niet alleen processen',
          'ITIL Continu Verbetermodel (7 stappen): Wat is de visie? → Waar zijn we nu? → Waar willen we zijn? → Hoe komen we er? → Actie ondernemen → Zijn we er? → Momentum behouden',
          'Praktijken zijn sets van organisatorische resources die bijdragen aan meerdere waardeketensactiviteiten',
          'Het SVS is flexibel — organisaties kunnen het aanpassen aan hun context',
          'De Servicewaardeketen verbindt richtinggevende principes, governance, praktijken en continu verbeteren tot een samenhangend systeem'
        ],
        studyTip: 'Leer de zeven stappen van het Continu Verbetermodel. Het examen test regelmatig welke stap "Waar zijn we nu?" of "Wat is de visie?" is. De eerste stap is altijd de visie — je kunt niet verbeteren zonder richting.'
      },
      questions: [
        {
          id: 'svs-1',
          domain: 'service-value-system',
          question: 'Het ITIL Service Value System (SVS) beschrijft:',
          options: [
            'Een stap-voor-stap proces voor het leveren van IT-diensten',
            'Hoe alle componenten en activiteiten van een organisatie samenwerken om waardecreatie mogelijk te maken',
            'De organisatiestructuur van een typische IT-afdeling',
            'Een set metrics voor het meten van servicekwaliteit'
          ],
          correct: 1,
          explanation: 'Het SVS is het grote plaatje — het toont hoe inputs (kans/vraag) stromen door richtinggevende principes, governance, de servicewaardeketen, praktijken en continu verbeteren om waarde te creëren.'
        },
        {
          id: 'svs-2',
          domain: 'service-value-system',
          question: 'Wat zijn de twee inputs tot het ITIL Service Value System?',
          options: ['Vraag en Aanbod', 'Kans en Vraag', 'Klanten en Gebruikers', 'Producten en Diensten'],
          correct: 1,
          explanation: 'Kans (mogelijkheden om waarde toe te voegen of te verbeteren) en Vraag (behoefte of wens naar producten/diensten van interne/externe klanten) zijn de inputs tot het SVS. De output is Waarde.'
        },
        {
          id: 'svs-3',
          domain: 'service-value-system',
          question: 'Governance in het ITIL SVS verwijst naar:',
          options: [
            'De set IT-tools die gebruikt worden om serviceverzoeken te beheren',
            'De manier waarop een organisatie wordt bestuurd en gecontroleerd',
            'Externe regelgevende kaders waaraan organisaties moeten voldoen',
            'Het proces van het goedkeuren van wijzigingen aan productiesystemen'
          ],
          correct: 1,
          explanation: 'Governance biedt het richtings- en verantwoordingskader — het zorgt dat het SVS werkt zoals bedoeld en dat beslissingen aansluiten bij organisatiedoelstellingen.'
        },
        {
          id: 'svs-4',
          domain: 'service-value-system',
          question: 'Continu Verbeteren in ITIL 4 is van toepassing op:',
          options: [
            'Alleen de IT-infrastructuur en technologiecomponenten',
            'Alleen processen die als onderpresterend zijn geïdentificeerd',
            'Alle componenten van het SVS en alle diensten, producten en praktijken',
            'Alleen activiteiten binnen de Verbeter servicewaardeketensactiviteit'
          ],
          correct: 2,
          explanation: 'Continu verbeteren is een constante activiteit in het gehele SVS — geen project of eenmalige gebeurtenis. Elk component kan altijd verbeterd worden.'
        },
        {
          id: 'svs-5',
          domain: 'service-value-system',
          question: 'Het ITIL Continu Verbetermodel begint met de vraag:',
          options: [
            '"Wat is de visie?"',
            '"Waar zijn we nu?"',
            '"Hoe komen we er?"',
            '"Zijn we er?"'
          ],
          correct: 0,
          explanation: 'De 7 stappen: 1. Wat is de visie? 2. Waar zijn we nu? 3. Waar willen we zijn? 4. Hoe komen we er? 5. Actie ondernemen 6. Zijn we er? 7. Hoe houden we het momentum vast?'
        },
        {
          id: 'svs-6',
          domain: 'service-value-system',
          question: 'Een organisatie adopteert ITIL-praktijken. Welke bewering weerspiegelt BEST de ITIL 4-aanpak?',
          options: [
            'ITIL moet in zijn geheel worden geadopteerd met alle praktijken zoals beschreven',
            'Organisaties moeten ITIL-praktijken selecteren en aanpassen aan hun context',
            'ITIL is verplicht voor alle organisaties die IT-diensten leveren',
            'ITIL-praktijken vervangen alle bestaande organisatieprocessen'
          ],
          correct: 1,
          explanation: 'ITIL 4 stelt expliciet dat het niet prescriptief is — organisaties moeten adoptieren wat werkt voor hun context, praktijken aanpassen aan hun behoeften, en het niet implementeren omwille van het implementeren.'
        },
        {
          id: 'svs-7',
          domain: 'service-value-system',
          question: 'Welk element verbindt de ITIL richtinggevende principes, governance, praktijken en continu verbeteren tot een samenhangend systeem?',
          options: [
            'De servicecatalogus',
            'De servicewaardeketen',
            'De vier dimensies',
            'Het wijzigingsbeheerproces'
          ],
          correct: 1,
          explanation: 'De servicewaardeketen is het centrale operationele model van het SVS — de zes activiteiten (Plan, Verbeter, Engageer, Ontwerp & Transitie, Verwerf/Bouw, Lever & Ondersteun) tonen hoe werk stroomt om waarde te creëren.'
        }
      ],
      flashcards: [
        { term: 'Service Value System (SVS)', definition: 'Het ITIL-model dat toont hoe alle componenten en activiteiten van een organisatie samenwerken om waardecreatie mogelijk te maken' },
        { term: 'Kans (Opportunity)', definition: 'Een mogelijkheid om waarde toe te voegen of te verbeteren — input tot het SVS' },
        { term: 'Vraag (Demand)', definition: 'Behoefte of wens naar producten/diensten van interne/externe consumenten — input tot het SVS' },
        { term: 'Governance', definition: 'De manier waarop een organisatie wordt bestuurd en gecontroleerd' },
        { term: 'Continu Verbeteren', definition: 'Voortdurende activiteit die afstemming met veranderende behoeften en verbetering van alle SVS-componenten waarborgt' },
        { term: 'ITIL Continu Verbetermodel', definition: '7-stappencyclus: Wat is de visie? → Waar zijn we nu? → Waar willen we zijn? → Hoe komen we er? → Actie → Zijn we er? → Momentum behouden' },
        { term: 'Praktijken (Practices)', definition: 'Sets van organisatorische resources ontworpen voor het uitvoeren van werk of het bereiken van een doelstelling' },
        { term: 'Servicewaardeketen', definition: 'Zes activiteiten (Plan, Verbeter, Engageer, Ontwerp & Transitie, Verwerf/Bouw, Lever & Ondersteun) die het centrale operationele model vormen' },
        { term: 'Feedbacklus', definition: 'Mechanisme voor het verzamelen van informatie over uitkomsten en het gebruiken ervan voor verbetering' },
        { term: 'Verbeterregister', definition: 'Een gestructureerde repository van verbeterideeën in de hele organisatie' },
        { term: 'Benchmark', definition: 'Een referentiepunt voor het meten van prestaties' },
        { term: 'KPI', definition: 'Key Performance Indicator — een metric voor het meten van het bereiken van doelstellingen' },
        { term: 'Kritische Succesfactor', definition: 'Iets dat moet gebeuren om een initiatief of praktijk te laten slagen' }
      ]
    },
    {
      id: 'service-value-chain',
      title: 'De Servicewaardeketen',
      weight: 15,
      lesson: {
        overview: 'De Servicewaardeketen (SVC) is het centrale operationele model van ITIL 4. Het bestaat uit zes activiteiten die samen beschrijven hoe een organisatie waardecreatie mogelijk maakt. Elke activiteit kan bijdragen aan meerdere waardestromen, en praktijken kunnen meerdere activiteiten ondersteunen. De SVC is geen lineair proces maar een flexibel model.',
        keyPoints: [
          'Plan: gedeeld begrip creëren van visie, huidige staat en richting op alle niveaus (strategisch, tactisch, operationeel)',
          'Verbeter (Improve): continu verbeteren van alle producten, diensten en praktijken — voedt alle andere activiteiten',
          'Engageer (Engage): goed begrip van behoeften van stakeholders, transparantie en voortdurende betrokkenheid — primaire klantinteractie',
          'Ontwerp & Transitie (Design & Transition): ervoor zorgen dat producten en diensten aan kwaliteits-, kosten- en tijdsverwachtingen voldoen',
          'Verwerf/Bouw (Obtain/Build): componenten verwerven of bouwen die nodig zijn voor dienstlevering',
          'Lever & Ondersteun (Deliver & Support): dagelijkse levering en ondersteuning conform afgesproken specificaties',
          'De SVC is geen lineair proces — activiteiten kunnen in verschillende combinaties en volgorden worden uitgevoerd',
          'Elke praktijk kan meerdere SVC-activiteiten ondersteunen',
          'Waardestromen gebruiken de SVC-activiteiten als bouwstenen'
        ],
        studyTip: 'Het examen geeft scenario\'s en vraagt welke SVC-activiteit het meest relevant is. "Engageer" = klantcontact. "Plan" = richting. "Verbeter" = continu verbeteren. "Lever & Ondersteun" = dagelijkse diensten. "Ontwerp & Transitie" = nieuwe/gewijzigde diensten naar productie.'
      },
      questions: [
        {
          id: 'svc-1',
          domain: 'service-value-chain',
          question: 'De servicewaardeketensactiviteit "Engageer" is verantwoordelijk voor:',
          options: [
            'De langetermijnrichting van diensten plannen',
            'Goed begrip van behoeften van stakeholders bieden, transparantie en voortdurende betrokkenheid',
            'Componenten inzetten in live-omgevingen',
            'Ervoor zorgen dat diensten afgesproken beschikbaarheid bereiken'
          ],
          correct: 1,
          explanation: '"Engageer" behandelt alle stakeholderinteractie — behoeften begrijpen, relaties opbouwen, verzoeken afhandelen en feedback beheren. Het is de klantgerichte activiteit.'
        },
        {
          id: 'svc-2',
          domain: 'service-value-chain',
          question: 'Welke servicewaardeketensactiviteit is verantwoordelijk voor het garanderen dat nieuwe en gewijzigde diensten aan afgesproken specificaties voldoen?',
          options: ['Verwerf/Bouw', 'Lever & Ondersteun', 'Ontwerp & Transitie', 'Engageer'],
          correct: 2,
          explanation: '"Ontwerp & Transitie" zorgt dat producten en diensten continu voldoen aan de verwachtingen van stakeholders qua kwaliteit, kosten en time-to-market — inclusief ontwerp, testen en transitie naar live.'
        },
        {
          id: 'svc-3',
          domain: 'service-value-chain',
          question: 'De activiteit "Verwerf/Bouw" in de servicewaardeketen:',
          options: [
            'Levert diensten aan eindgebruikers',
            'Verwerft of bouwt componenten die nodig zijn voor dienstlevering',
            'Plant wijzigingen aan diensten',
            'Betrekt klanten bij serviceverzoeken'
          ],
          correct: 1,
          explanation: '"Verwerf/Bouw" zorgt dat servicecomponenten (hardware, software, tools) beschikbaar zijn wanneer en waar nodig. Het behandelt zowel inkoop als ontwikkeling.'
        },
        {
          id: 'svc-4',
          domain: 'service-value-chain',
          question: '"Lever & Ondersteun" richt zich PRIMAIR op:',
          options: [
            'Strategische planning voor toekomstige diensten',
            'Ervoor zorgen dat diensten worden geleverd en ondersteund conform afgesproken specificaties',
            'Het ontwerpen van nieuwe diensten vanaf nul',
            'Relaties met externe leveranciers beheren'
          ],
          correct: 1,
          explanation: '"Lever & Ondersteun" behandelt dagelijkse dienstlevering en -ondersteuning — diensten draaiende houden, incidenten afhandelen, verzoeken vervullen.'
        },
        {
          id: 'svc-5',
          domain: 'service-value-chain',
          question: 'De "Plan"-activiteit in de servicewaardeketen zorgt voor:',
          options: [
            'Alle incidenten worden opgelost binnen SLA-tijden',
            'Een gedeeld begrip van visie, huidige staat en richting voor alle dimensies van het SVS',
            'Nieuwe componenten worden gebouwd en getest voor implementatie',
            'Klantbetrokkenheid wordt gedurende dienstlevering gehandhaafd'
          ],
          correct: 1,
          explanation: '"Plan" biedt strategische richting — plannen creëren op alle niveaus (strategisch, tactisch, operationeel) die alle SVS-activiteiten afstemmen op de organisatievisie.'
        },
        {
          id: 'svc-6',
          domain: 'service-value-chain',
          question: 'De "Verbeter"-activiteit in de servicewaardeketen is verantwoordelijk voor:',
          options: [
            'Dagelijkse serviceverzoeken afhandelen',
            'Continu verbeteren van alle producten, diensten en praktijken waarborgen',
            'De organisatiestrategie plannen',
            'Nieuwe diensten ontwerpen en naar productie overzetten'
          ],
          correct: 1,
          explanation: '"Verbeter" zorgt dat verbetering is ingebed in elk aspect van het SVS — het voedt alle andere waardeketensactiviteiten, niet alleen een aparte verbeterfunctie.'
        }
      ],
      flashcards: [
        { term: 'Servicewaardeketen (SVC)', definition: 'Zes activiteiten die het centrale operationele model van het SVS vormen: Plan, Verbeter, Engageer, Ontwerp & Transitie, Verwerf/Bouw, Lever & Ondersteun' },
        { term: 'Plan', definition: 'SVC-activiteit — gedeeld begrip creëren van visie, richting en huidige staat' },
        { term: 'Verbeter (Improve)', definition: 'SVC-activiteit — continu verbeteren van alle producten, diensten en praktijken waarborgen' },
        { term: 'Engageer (Engage)', definition: 'SVC-activiteit — behoeften van stakeholders begrijpen, relaties onderhouden, transparante communicatie' },
        { term: 'Ontwerp & Transitie', definition: 'SVC-activiteit — ervoor zorgen dat producten en diensten aan kwaliteits-, kosten- en tijdsverwachtingen voldoen' },
        { term: 'Verwerf/Bouw (Obtain/Build)', definition: 'SVC-activiteit — componenten verwerven of bouwen die nodig zijn voor dienstlevering' },
        { term: 'Lever & Ondersteun', definition: 'SVC-activiteit — diensten leveren en ondersteunen conform afgesproken specificaties' },
        { term: 'Waardestroomkaart', definition: 'Een visuele weergave van alle stappen in een waardestroom, knelpunten en verbeterkansen identificerend' },
        { term: 'Serviceverzoek', definition: 'Een verzoek van een gebruiker voor iets dat geleverd moet worden (standaard, vooraf goedgekeurd)' },
        { term: 'Incident', definition: 'Een ongeplande onderbreking van of vermindering in kwaliteit van een dienst' },
        { term: 'Probleem', definition: 'Een oorzaak of potentiële oorzaak van één of meer incidenten' },
        { term: 'Wijziging (Change)', definition: 'De toevoeging, wijziging of verwijdering van iets dat direct of indirect invloed kan hebben op diensten' },
        { term: 'Release', definition: 'Een versie van een dienst of ander configuratie-item beschikbaar gemaakt voor gebruik' }
      ]
    },
    {
      id: 'itil-practices',
      title: 'ITIL Praktijken',
      weight: 20,
      lesson: {
        overview: 'ITIL 4 definieert 34 praktijken, waarvan 15 expliciet worden getoetst op het Foundation-examen. De praktijken zijn sets van organisatorische resources ontworpen voor het uitvoeren van werk. Het examen legt de nadruk op Incidentbeheer, Probleembeheer, Wijzigingsbeheer, Servicedesk, Serviceniveaubeheer en Continu Verbeteren.',
        keyPoints: [
          'Incidentbeheer: zo snel mogelijk normale dienstverlening herstellen na een ongeplande onderbreking',
          'Probleembeheer: oorzaken van incidenten identificeren en beheren van workarounds en bekende fouten',
          'Wijzigingsbeheer (Change Enablement): wijzigingen beoordelen, autoriseren en beheren om het succespercentage te maximaliseren',
          'Servicedesk: het primaire communicatiekanaal — één aanspreekpunt (SPOC) voor incidenten en serviceverzoeken',
          'Serviceniveaubeheer: doelen voor serviceprestaties instellen en bewaken (SLA\'s)',
          'Configuratiebeheer: nauwkeurige informatie over configuratie-items (CI\'s) beschikbaar stellen',
          'Bekende Fout (Known Error): een probleem met gedocumenteerde oorzaak EN workaround',
          'Workaround: tijdelijke oplossing die impact vermindert zonder de oorzaak te verhelpen',
          'Standaardwijziging: vooraf goedgekeurd, laag risico, vaste procedure',
          'ITIL 4 heeft 34 praktijken verdeeld over: Algemeen Management, Servicemanagement en Technologiebeheer'
        ],
        studyTip: 'Leer het verschil: Incident = ongeplande onderbreking (herstel zo snel mogelijk). Probleem = onderliggende oorzaak (onderzoek en voorkomen). Wijziging = autorisatieproces. Serviceverzoek = standaard, vooraf goedgekeurd verzoek. Het examen test deze definities regelmatig.'
      },
      questions: [
        {
          id: 'ip-1',
          domain: 'itil-practices',
          question: 'Het doel van de Incidentbeheerpraktijk is:',
          options: [
            'Oorzaken van incidenten identificeren en herhaling voorkomen',
            'Normale dienstverlening zo snel mogelijk herstellen om impact te minimaliseren',
            'Verzoeken voor standaardwijzigingen beheren',
            'Dienstniveaus bewaken aan de hand van afgesproken doelen'
          ],
          correct: 1,
          explanation: 'Het primaire doel van Incidentbeheer is zo snel mogelijk diensten herstellen. Oorzaakanalyse is het doel van Probleembeheer. Incident ≠ Probleem in ITIL-terminologie.'
        },
        {
          id: 'ip-2',
          domain: 'itil-practices',
          question: 'Een probleem in ITIL is:',
          options: [
            'Een ongeplande onderbreking van of vermindering in kwaliteit van een dienst',
            'Een oorzaak of potentiële oorzaak van één of meer incidenten',
            'Een verzoek ingediend door een gebruiker',
            'Een wijziging die een onverwacht negatief effect heeft'
          ],
          correct: 1,
          explanation: 'Incident = ongeplande verstoring. Probleem = de onderliggende oorzaak van incidenten. Een probleem kan bestaan vóór een incident optreedt (bekend als een proactief probleem).'
        },
        {
          id: 'ip-3',
          domain: 'itil-practices',
          question: 'De Wijzigingsbeheer (Change Enablement) praktijk beheert wijzigingen om:',
          options: [
            'Alle wijzigingen aan productiesystemen te voorkomen',
            'Succesvolle IT-wijzigingen te maximaliseren door juiste risicobeoordeling te waarborgen',
            'Ervoor te zorgen dat alleen noodwijzigingen snel worden goedgekeurd',
            'Het wijzigingsproces te standaardiseren ongeacht risiconiveau'
          ],
          correct: 1,
          explanation: 'Wijzigingsbeheer (vroeger Change Management) zorgt dat wijzigingen worden beoordeeld, goedgekeurd en geïmplementeerd met passende controls om het succespercentage te maximaliseren en risico te beheren.'
        },
        {
          id: 'ip-4',
          domain: 'itil-practices',
          question: 'Een standaardwijziging is:',
          options: [
            'Een hoog-risico wijziging die CAB-goedkeuring vereist',
            'Een laag-risico, vooraf geautoriseerde wijziging met een vaste procedure',
            'Een wijziging die onmiddellijke implementatie vereist',
            'Een wijziging die gedocumenteerd moet worden in het wijzigingslogboek'
          ],
          correct: 1,
          explanation: 'Standaardwijzigingen: vooraf goedgekeurd, laag risico, goed begrepen procedures. Normale wijzigingen: beoordeeld via het normale proces. Noodwijzigingen: urgent, versnelde autorisatie.'
        },
        {
          id: 'ip-5',
          domain: 'itil-practices',
          question: 'De Servicedesk-praktijk:',
          options: [
            'Behandelt alleen technische incidenten die specialistische kennis vereisen',
            'Vangt vraag op naar incidentoplossing en serviceverzoeken',
            'Beheert alle wijzigingen aan IT-diensten',
            'Onderhoudt relaties met key-accounts en klanten'
          ],
          correct: 1,
          explanation: 'De Servicedesk is het primaire communicatiekanaal tussen serviceprovider en gebruikers — vangt incidenten, serviceverzoeken en vragen op. Het is een praktijk, niet alleen een team.'
        },
        {
          id: 'ip-6',
          domain: 'itil-practices',
          question: 'Welk document registreert workarounds en bekende fouten in Probleembeheer?',
          options: ['Wijzigingsrecord', 'Service Level Agreement', 'Known Error Record', 'Serviceverzoek'],
          correct: 2,
          explanation: 'Een Known Error Record documenteert een probleem dat geanalyseerd en begrepen is (ook al is het nog niet opgelost), samen met beschikbare workarounds — dit helpt de servicedesk incidenten sneller op te lossen.'
        },
        {
          id: 'ip-7',
          domain: 'itil-practices',
          question: 'Welke praktijk zorgt ervoor dat nauwkeurige informatie over CI\'s (configuratie-items) beschikbaar is wanneer nodig?',
          options: ['Wijzigingsbeheer', 'IT-assetbeheer', 'Dienstconfiguratibeheer', 'Release Management'],
          correct: 2,
          explanation: 'Dienstconfiguratibeheer onderhoudt een CMDB (Configuration Management Database) die CI\'s en hun relaties documenteert. Dit ondersteunt wijzigingsimpactbeoordeling, incidentoplossing en planning.'
        },
        {
          id: 'ip-8',
          domain: 'itil-practices',
          question: 'De Serviceniveaubeheerpraktijk is verantwoordelijk voor:',
          options: [
            'Netwerkuptime en -prestaties bewaken',
            'Doelen voor serviceprestaties instellen, bewaken en beheren',
            'Wijzigingen autoriseren die de beschikbaarheid van diensten beïnvloeden',
            'Personeelsniveaus van de servicedesk beheren'
          ],
          correct: 1,
          explanation: 'Serviceniveaubeheer (SLM) onderhandelt SLA\'s, bewaakt prestaties aan de hand ervan en stuurt verbetering aan wanneer doelen worden gemist — het gaat over de overeenkomst en prestatiemeting.'
        },
        {
          id: 'ip-9',
          domain: 'itil-practices',
          question: 'IT-assetbeheer zorgt voor:',
          options: [
            'Alle serviceverzoeken worden vervuld binnen afgesproken tijden',
            'De volledige levenscyclus van assets wordt goed beheerd om waarde te maximaliseren',
            'Configuratie-items worden gedocumenteerd in de CMDB',
            'Relaties met hardwareleveranciers worden onderhouden'
          ],
          correct: 1,
          explanation: 'IT-assetbeheer volgt de volledige levenscyclus van IT-assets (aankoop, inzet, onderhoud, verwijdering) om kosten, licentie-compliance en risico\'s te optimaliseren.'
        },
        {
          id: 'ip-10',
          domain: 'itil-practices',
          question: 'Een IT-team lost een terugkerend netwerkprobleem op door het tijdelijk te patchen in plaats van de oorzaak te onderzoeken. Wat moet er ook worden opgevoerd?',
          options: ['Een serviceverzoek', 'Een groot incident', 'Een probleemrecord', 'Een wijzigingsverzoek'],
          correct: 2,
          explanation: 'Terugkerende incidenten wijzen op een onderliggend probleem dat onderzoek vereist. Probleembeheer moet worden ingeschakeld om de oorzaak te vinden en aan te pakken, niet alleen het symptoom.'
        }
      ],
      flashcards: [
        { term: 'Incidentbeheer', definition: 'Praktijk die normale dienstverlening zo snel mogelijk herstelt na een ongeplande onderbreking om zakelijke impact te minimaliseren' },
        { term: 'Probleembeheer', definition: 'Praktijk die oorzaken van incidenten identificeert en workarounds en bekende fouten beheert' },
        { term: 'Wijzigingsbeheer (Change Enablement)', definition: 'Praktijk die ervoor zorgt dat wijzigingen goed worden beoordeeld, geautoriseerd en beheerd om het succespercentage te maximaliseren' },
        { term: 'Servicedesk', definition: 'Praktijk die vraag naar incidentoplossing en serviceverzoeken opvangt; primair communicatiekanaal met gebruikers (SPOC)' },
        { term: 'Serviceniveaubeheer', definition: 'Praktijk die doelen voor serviceprestaties instelt en bewaakt (SLA\'s, OLA\'s)' },
        { term: 'Serviceverzoekbeheer', definition: 'Praktijk die kwaliteit van vooraf goedgekeurde, standaardwijzigingen en serviceverzoeken ondersteunt' },
        { term: 'Bekende Fout (Known Error)', definition: 'Een probleem met gedocumenteerde oorzaak én een workaround' },
        { term: 'Workaround', definition: 'Een oplossing die impact van een incident of probleem vermindert of elimineert zonder de onderliggende oorzaak te verhelpen' },
        { term: 'SLA (Service Level Agreement)', definition: 'Gedocumenteerde overeenkomst tussen serviceprovider en klant die het vereiste dienstniveau definieert' },
        { term: 'Standaardwijziging', definition: 'Een vooraf geautoriseerde, laag-risico, goed begrepen wijziging met een vaste procedure' },
        { term: 'Normale Wijziging', definition: 'Een wijziging beoordeeld via het standaard wijzigingsbeheerproces' },
        { term: 'Noodwijziging', definition: 'Een wijziging die snelle implementatie vereist om een kritieke situatie aan te pakken' },
        { term: 'CMDB', definition: 'Configuration Management Database — slaat data op over configuratie-items en hun relaties' }
      ]
    }
  ],
  mockExam: [
    { id: 'mock-it-1', domain: 'key-concepts', question: 'Welke bewering over utility en warranty is CORRECT?', options: ['Utility waarborgt beschikbaarheid; warranty waarborgt functionaliteit', 'Zowel utility als warranty moeten aanwezig zijn voor een dienst om waarde te creëren', 'Utility is optioneel als warranty hoge normen haalt', 'Warranty is alleen relevant voor hardware-gebaseerde diensten'], correct: 1, explanation: 'Utility (fit for purpose) en warranty (fit for use) zijn beide noodzakelijk. Een dienst met geweldige functionaliteit maar slechte beschikbaarheid (utility zonder warranty) of perfecte uptime maar verkeerde functies (warranty zonder utility) slaagt er niet in waarde te creëren.' },
    { id: 'mock-it-2', domain: 'service-value-chain', question: 'Wat is het doel van de "Engageer"-activiteit van de servicewaardeketen?', options: ['Servicecomponenten inzetten in live-omgevingen', 'Goed begrip van en relaties met alle stakeholders onderhouden', 'Nieuwe servicecomponenten ontwerpen en bouwen', 'Ervoor zorgen dat diensten continu worden verbeterd'], correct: 1, explanation: '"Engageer" is de primaire interface met consumenten en andere stakeholders — behoeften begrijpen, relaties opbouwen, feedback afhandelen en transparantie handhaven.' },
    { id: 'mock-it-3', domain: 'itil-practices', question: 'Welke praktijk is verantwoordelijk voor het herstellen van normale dienstverlening na een ongeplande uitval?', options: ['Probleembeheer', 'Wijzigingsbeheer', 'Servicedesk', 'Incidentbeheer'], correct: 3, explanation: 'Incidentbeheer herstelt de dienst. Probleembeheer onderzoekt oorzaken. De Servicedesk is het kanaal — Incidentbeheer is de praktijk.' },
    { id: 'mock-it-4', domain: 'itil-practices', question: 'Het e-mailsysteem van een organisatie is uitgevallen voor alle gebruikers. Volgens ITIL is dit:', options: ['Een probleem', 'Een groot incident', 'Een serviceverzoek', 'Een bekende fout'], correct: 1, explanation: 'Een service-uitval die veel gebruikers treft wordt typisch geclassificeerd als een groot incident. Een probleem zou de onderliggende oorzaak zijn. Grote incidenten vereisen verhoogde responsprocedures.' },
    { id: 'mock-it-5', domain: 'guiding-principles', question: 'Het zevende richtinggevende principe "Optimaliseer en Automatiseer" stelt dat automatisering:', options: ['Altijd moet worden toegepast om kosten te verlagen', 'Alleen op incidentbeheer moet worden toegepast', 'Optimalisatie moet volgen — eerst vereenvoudigen, dan automatiseren', 'Menselijke besluitvorming in alle servicebeslissingen moet vervangen'], correct: 2, explanation: 'Een slecht proces automatiseren geeft je een sneller slecht proces. Eerst optimaliseren (verspilling verwijderen, vereenvoudigen), dan automatiseren wat overblijft.' },
    { id: 'mock-it-6', domain: 'four-dimensions', question: 'Welke dimensie van servicemanagement behandelt de workflow van activiteiten die waarde creëren?', options: ['Organisaties en Mensen', 'Partners en Leveranciers', 'Informatie en Technologie', 'Waardeketen en Processen'], correct: 3, explanation: 'Waardeketen en Processen definieert hoe werk stroomt om waarde te creëren — de reeks activiteiten, handoffs en beslissingen die inputs omzetten in outputs en uitkomsten.' },
    { id: 'mock-it-7', domain: 'itil-practices', question: 'Een bekende fout in ITIL is:', options: ['Een incident dat geëscaleerd is naar het management', 'Een probleem met een gedocumenteerde oorzaak en workaround', 'Een ongeautoriseerde wijziging die een dienstverstoring veroorzaakte', 'Een klacht van een gebruiker over servicekwaliteit'], correct: 1, explanation: 'Bekende fout = probleem waarvoor de oorzaak bekend is en een workaround bestaat. Het documenteren van bekende fouten stelt de servicedesk in staat gerelateerde incidenten sneller op te lossen zonder escalatie.' },
    { id: 'mock-it-8', domain: 'itil-practices', question: 'Het primaire doel van Wijzigingsbeheer is:', options: ['Alle wijzigingen aan productiesystemen te voorkomen', 'Succesvolle IT-wijzigingen te maximaliseren door juiste risicobeoordeling en autorisatie te waarborgen', 'Alleen noodwijzigingen snel goed te keuren', 'Alle wijzigingen aan IT-infrastructuur te documenteren'], correct: 1, explanation: 'Wijzigingsbeheer balanceert snelheid en risico — het zorgt dat wijzigingen worden beoordeeld, geautoriseerd en geïmplementeerd met passende controls om het succespercentage te maximaliseren.' },
    { id: 'mock-it-9', domain: 'itil-practices', question: 'Welk type wijziging is vooraf geautoriseerd, laag risico en volgt een vaste procedure?', options: ['Normale wijziging', 'Noodwijziging', 'Standaardwijziging', 'Routinewijziging'], correct: 2, explanation: 'Standaardwijzigingen: vooraf goedgekeurd, laag risico, goed begrepen. Normale wijzigingen: risicobeoordeling en autorisatie vereist. Noodwijzigingen: urgent, versnelde autorisatie.' },
    { id: 'mock-it-10', domain: 'service-value-system', question: 'Het Service Value System (SVS) toont hoe:', options: ['Incidenten worden geëscaleerd en opgelost', 'Alle componenten en activiteiten samenwerken om waardecreatie mogelijk te maken', 'Diensten worden geprijsd en gefactureerd aan klanten', 'Personeel is georganiseerd in een servicemanagementfunctie'], correct: 1, explanation: 'Het SVS is het grote plaatje — het integreert richtinggevende principes, governance, servicewaardeketen, praktijken en continu verbeteren tot een samenhangend systeem voor waardecreatie.' },
    { id: 'mock-it-11', domain: 'guiding-principles', question: 'Welk richtinggevend principe adviseert om bestaande processen niet te verwijderen zonder eerst hun waarde te evalueren?', options: ['Focus op Waarde', 'Begin Waar Je Bent', 'Houd Het Eenvoudig en Praktisch', 'Werk Samen en Bevorder Zichtbaarheid'], correct: 1, explanation: '"Begin Waar Je Bent" voorkomt verspilling door onnodige vervanging. Beoordeling van de huidige staat onthult vaak waardevolle mogelijkheden die bewaard en voortgebouwd moeten worden.' },
    { id: 'mock-it-12', domain: 'itil-practices', question: 'Serviceniveaubeheer is verantwoordelijk voor:', options: ['Netwerkuptime en -prestaties bewaken', 'Doelen voor serviceprestaties instellen, afspreken en bewaken', 'Wijzigingen autoriseren die beschikbaarheid beïnvloeden', 'Personeelsniveaus van de servicedesk beheren'], correct: 1, explanation: 'Serviceniveaubeheer (SLM) onderhandelt SLA\'s, bewaakt prestaties aan de hand ervan en stuurt verbetering aan wanneer doelen worden gemist.' },
    { id: 'mock-it-13', domain: 'itil-practices', question: 'Welke ITIL-praktijk beheert de levenscyclus van IT-assets van aanschaf tot verwijdering?', options: ['Dienstconfiguratibeheer', 'IT-assetbeheer', 'Release Management', 'Wijzigingsbeheer'], correct: 1, explanation: 'IT-assetbeheer volgt alle assets gedurende hun volledige levenscyclus — aanschaf, inzet, onderhoud en verwijdering — om kosten, licentie-compliance en risico\'s te optimaliseren.' },
    { id: 'mock-it-14', domain: 'guiding-principles', question: 'Het principe "Werk Samen en Bevorder Zichtbaarheid" erkent dat:', options: ['Alleen senior management beslissingen moet nemen over dienstontwerp', 'Betere uitkomsten voortkomen uit samenwerken en informatie toegankelijk maken', 'Zichtbaarheid in metrics voldoende is voor samenwerking', 'Teams onafhankelijk moeten werken om groupthink te vermijden'], correct: 1, explanation: 'Samenwerking benut diverse perspectieven. Transparantie (zichtbaarheid bevorderen) maakt geïnformeerde beslissingen mogelijk en bouwt vertrouwen. Silo-werk en ondoorzichtigheid ondermijnen beide.' },
    { id: 'mock-it-15', domain: 'key-concepts', question: 'Waardeco-creatie betekent:', options: ['De serviceprovider bepaalt wat waarde betekent voor de klant', 'Waarde ontstaat uit de interactie tussen provider en consument', 'Klanten en providers splitsen de kosten van dienstlevering gelijkelijk', 'Meerdere serviceproviders werken samen om één dienst te leveren'], correct: 1, explanation: 'ITIL 4 wijst de provider-centrische visie expliciet af. Waarde wordt co-gecreëerd — de provider biedt resources en activiteiten, maar waarde materialiseert alleen wanneer de consument er in hun context mee interageert.' },
    { id: 'mock-it-16', domain: 'four-dimensions', question: 'Welke bewering over de vier dimensies is CORRECT?', options: ['Organisaties moeten zich focussen op de meest belangrijke dimensie voor hun sector', 'Elke dimensie kan onafhankelijk worden geoptimaliseerd', 'Alle vier dimensies moeten worden overwogen voor een holistische aanpak', 'De Informatie en Technologie dimensie is altijd het meest kritiek'], correct: 2, explanation: 'Alle vier dimensies zijn even belangrijk en onderling afhankelijk. Focussen op één terwijl je andere negeert creëert ongebalanceerde diensten die niet voldoen aan behoeften van stakeholders.' },
    { id: 'mock-it-17', domain: 'itil-practices', question: 'Het doel van Dienstconfiguratibeheer is:', options: ['Het beheren van de aanschaf van nieuwe IT-apparatuur', 'Ervoor zorgen dat nauwkeurige configuratie-informatie beschikbaar is wanneer nodig', 'Wijzigingen aan IT-diensten autoriseren en bijhouden', 'Registraties bijhouden van alle incidenten en problemen'], correct: 1, explanation: 'Configuratibeheer onderhoudt een CMDB met nauwkeurige registraties van CI\'s en hun relaties — maakt wijzigingsimpactbeoordeling, incidentoplossing en capaciteitsplanning mogelijk.' },
    { id: 'mock-it-18', domain: 'service-value-system', question: 'PESTLE-factoren zijn relevant voor ITIL 4 omdat:', options: ['Ze een kader bieden voor het beoordelen van servicekwaliteit', 'Externe factoren alle vier de dimensies van servicemanagement beïnvloeden', 'Ze de ITIL-praktijken bepalen die een organisatie moet adopteren', 'Ze de richtinggevende principes van servicemanagement vertegenwoordigen'], correct: 1, explanation: 'PESTLE (Political, Economic, Social, Technological, Legal, Environmental) factoren zijn externe beperkingen die beïnvloeden hoe organisaties diensten beheren — ze kunnen niet worden gecontroleerd maar moeten worden overwogen.' },
    { id: 'mock-it-19', domain: 'service-value-chain', question: 'Welke waardeketensactiviteit is verantwoordelijk voor het garanderen dat componenten beschikbaar zijn wanneer en waar nodig?', options: ['Plan', 'Ontwerp & Transitie', 'Verwerf/Bouw', 'Lever & Ondersteun'], correct: 2, explanation: '"Verwerf/Bouw" verwerft en bouwt de benodigde servicecomponenten — hardware, software, documentatie. Het zorgt dat de juiste elementen aanwezig zijn voordat "Lever & Ondersteun" het overneemt.' },
    { id: 'mock-it-20', domain: 'guiding-principles', question: 'Een organisatie wil klanttevredenheid verbeteren. Volgens "Focus op Waarde" is de EERSTE stap:', options: ['Kosten voor dienstlevering verlagen', 'Begrijpen wat klanten waarderen en welke uitkomsten ze nastreven', 'Een klanttevredenheidsonderzoek implementeren', 'Prestaties benchmarken ten opzichte van concurrenten'], correct: 1, explanation: 'Voor verbetering moet je begrijpen wat waarde betekent voor je klanten. Hun doelstellingen, beperkingen en waardeperceptie definiëren waarde — niet de aannames van de provider.' },
    { id: 'mock-it-21', domain: 'service-value-system', question: 'De Continu Verbetermodel-stap "Waar zijn we nu?" wordt het best beantwoord door:', options: ['Sectorale benchmarks en concurrentieprestaties te bekijken', 'De huidige staat te beoordelen via metingen, basislijnen en feedback van stakeholders', 'Het visiedocument van de organisatie te raadplegen', 'Alleen historische incidentdata te bekijken'], correct: 1, explanation: 'De huidige staat begrijpen vereist objectieve beoordeling — metrics, basislijnen, interviews met stakeholders. Zonder nauwkeurige beoordeling van de huidige staat zijn verbeterdoelen gebaseerd op aannames.' },
    { id: 'mock-it-22', domain: 'itil-practices', question: 'Welke praktijk biedt één aanspreekpunt voor gebruikers om incidenten te melden en serviceverzoeken in te dienen?', options: ['Incidentbeheer', 'Probleembeheer', 'Servicedesk', 'Serviceniveaubeheer'], correct: 2, explanation: 'De Servicedesk is het Single Point of Contact (SPOC) — vangt incidenten, serviceverzoeken en algemene vragen op. Stuurt werk door naar de juiste teams en houdt gebruikers geïnformeerd.' },
    { id: 'mock-it-23', domain: 'itil-practices', question: 'Release Management verschilt van Deployment Management doordat Release Management:', options: ['De verplaatsing van componenten naar live-omgevingen afhandelt', 'Het volledige releasepakket beheert — communicatie, rollback-planning, wat zit erin', 'Nieuwe diensten test voordat ze live gaan', 'De autorisatie van wijzigingen beheert'], correct: 1, explanation: 'Release Management beheert het volledige releasepakket (wat zit erin, communicatie, rollback-planning). Deployment Management handelt de daadwerkelijke technische implementatie van componenten af.' },
    { id: 'mock-it-24', domain: 'itil-practices', question: 'Welke praktijk is verantwoordelijk voor het onderhouden van relaties met key-accounts en begrijpen van klantbehoeften?', options: ['Serviceniveaubeheer', 'Leveranciersbeheer', 'Relatiebeheer', 'Servicedesk'], correct: 2, explanation: 'Relatiebeheer stelt strategische relaties met stakeholders en klanten op en onderhoudt deze. Het verschilt van SLM (prestatiedoelen beheren) en Servicedesk (operationeel contact).' },
    { id: 'mock-it-25', domain: 'guiding-principles', question: 'Het principe "Denk en Werk Holistisch" is MEEST relevant wanneer:', options: ['Een nieuw geautomatiseerd workflow ontwerpen', 'De impact van een wijziging op onderling verbonden diensten beoordelen', 'De complexiteit van één enkel proces verminderen', 'Personeel trainen op een nieuw ITSM-tool'], correct: 1, explanation: 'Holistisch denken is cruciaal wanneer wijzigingen meerdere componenten raken — een wijziging in één dienst/proces kan rimpeleffecten hebben. Alleen focussen op het onmiddellijke doel mist systemische impacts.' },
    { id: 'mock-it-26', domain: 'itil-practices', question: 'Een workaround in ITIL Probleembeheer is:', options: ['Een definitieve oplossing voor een bekend probleem', 'Een tijdelijke oplossing die impact vermindert zonder de oorzaak te verhelpen', 'Een noodwijziging die normale autorisatie omzeilt', 'Een serviceverzoek voor extra resources'], correct: 1, explanation: 'Workarounds zijn tussentijdse maatregelen — ze verminderen of elimineren incidentimpact maar pakken de oorzaken niet aan. Ze worden gedocumenteerd in known error records totdat een definitieve oplossing wordt geïmplementeerd.' },
    { id: 'mock-it-27', domain: 'guiding-principles', question: 'Welk richtinggevend principe is MEEST van toepassing wanneer een organisatie wordt verteld alle ITIL-praktijken tegelijk te implementeren?', options: ['Focus op Waarde', 'Werk Samen en Bevorder Zichtbaarheid', 'Itereer met Feedback', 'Begin Waar Je Bent'], correct: 2, explanation: '"Itereer met Feedback" adviseert tegen big-bang implementaties. Implementeer incrementeel — leer, pas aan en bouw voort op elke iteratie. Dit vermindert risico\'s en verbetert uitkomsten.' },
    { id: 'mock-it-28', domain: 'itil-practices', question: 'Leveranciersbeheer is verantwoordelijk voor:', options: ['Gebruikersverzoeken voor externe software beheren', 'Ervoor zorgen dat leveranciers en hun prestaties worden beheerd ter ondersteuning van de organisatiedoelstellingen', 'SLA\'s onderhandelen met interne serviceteams', 'Alleen de aanschaf van IT-hardware beheren'], correct: 1, explanation: 'Leveranciersbeheer zorgt dat externe leveranciers leveren zoals afgesproken, waarbij contracten, prestaties en relaties worden beheerd om de waarde van supply chain-partnerschappen te maximaliseren.' },
    { id: 'mock-it-29', domain: 'service-value-system', question: 'Welke bewering over governance in het ITIL SVS is CORRECT?', options: ['Governance is een optioneel component dat organisaties kunnen kiezen te implementeren', 'Governance is alleen van toepassing op activiteiten voor regulatoire compliance', 'Governance zorgt dat de organisatie consistent wordt bestuurd en gecontroleerd in lijn met de strategie', 'Governance is de verantwoordelijkheid van het servicedesk-managementteam'], correct: 2, explanation: 'Governance is een kern-SVS-component — het biedt verantwoording, richting en controle. Het zorgt dat richtinggevende principes worden toegepast, doelstellingen worden bereikt en het SVS werkt zoals bedoeld.' },
    { id: 'mock-it-30', domain: 'itil-practices', question: 'Welke praktijk zorgt voor continu verbeteren van alle producten, diensten en praktijken?', options: ['Serviceniveaubeheer', 'Probleembeheer', 'Continu Verbeteren', 'Wijzigingsbeheer'], correct: 2, explanation: 'Continu Verbeteren is geen project — het heeft geen einddatum. Het is ingebed in elk SVS-component en elke praktijk. "Verbeter" is één van de zes waardeketensactiviteiten omdat verbetering constant is.' },
    { id: 'mock-it-31', domain: 'key-concepts', question: 'In ITIL 4: welke beschrijft het BEST "waarde"?', options: ['De totale kosten van het leveren van een dienst', 'De prestaties van een dienst ten opzichte van afgesproken SLA\'s', 'De gepercipieerde voordelen, bruikbaarheid en importantie van iets', 'De outputs geproduceerd door een dienst'], correct: 2, explanation: 'Waarde is perceptie — het is wat stakeholders als nuttig beschouwen. Het omvat directe voordelen en vermindering van risico\'s en kosten, en wordt altijd co-gecreëerd.' },
    { id: 'mock-it-32', domain: 'itil-practices', question: 'Een incident dat bedrijfsactiviteiten aanzienlijk verstoort en onmiddellijke aandacht van senior management vereist, heet:', options: ['Een probleem', 'Een groot incident', 'Een noodwijzigingstrigger', 'Een hoog-prioriteit serviceverzoek'], correct: 1, explanation: 'Grote incidenten krijgen verhoogde prioriteit en een speciale responsprocedure. Ze veroorzaken vaak parallele Probleembeheer-activiteit om oorzaken te onderzoeken.' },
    { id: 'mock-it-33', domain: 'four-dimensions', question: 'PESTLE-factoren beïnvloeden de vier dimensies doordat:', options: ['Ze bepalen welke ITIL-praktijken verplicht zijn', 'Ze externe beperkingen zijn die buiten de controle van de organisatie liggen maar overwogen moeten worden', 'Ze interne factoren zijn die door governance worden gecontroleerd', 'Ze alleen van invloed zijn op de dimensie Partners en Leveranciers'], correct: 1, explanation: 'PESTLE-factoren zijn externe krachten (politiek, economisch, sociaal, technologisch, juridisch, milieu) die organisaties niet kunnen controleren maar wel moeten overwegen in hun servicemanagement.' },
    { id: 'mock-it-34', domain: 'service-value-chain', question: 'Welke waardeketensactiviteit produceert plannen op strategisch, tactisch en operationeel niveau?', options: ['Verbeter', 'Engageer', 'Ontwerp & Transitie', 'Plan'], correct: 3, explanation: 'De "Plan"-activiteit creëert afgestemde plannen op alle niveaus — strategisch (richting), tactisch (hoe te bereiken) en operationeel (dagelijks). Alle andere waardeketensactiviteiten vertrouwen op deze richting.' },
    { id: 'mock-it-35', domain: 'guiding-principles', question: 'Het principe "Houd Het Eenvoudig en Praktisch" adviseert dat wanneer eenvoud conflicteert met een uitgebreide oplossing:', options: ['Uitgebreide oplossingen altijd de voorkeur verdienen voor volledigheid', 'Een minimum aantal stappen gebruikt moet worden om doelstellingen te bereiken', 'Complexiteit acceptabel is als het de controleerbaarheid verbetert', 'Beide benaderingen gedocumenteerd moeten worden voor keuzevrijheid'], correct: 1, explanation: 'ITIL 4 waarschuwt expliciet tegen over-engineering. Gebruik het minimale levensvatbare aantal stappen, formulieren en goedkeuringen. Als het geen waarde toevoegt, verwijder het.' },
    { id: 'mock-it-36', domain: 'service-value-system', question: 'Continu Verbeteren verschilt van een projectmatig verbeterinitiatief omdat continu verbeteren:', options: ['Alleen gericht is op technologische verbeteringen', 'Eenmaal per jaar wordt uitgevoerd als onderdeel van de jaarlijkse planningscyclus', 'Een voortdurende activiteit is ingebed in alle onderdelen van het SVS', 'Altijd wordt aangestuurd door klachten van klanten'], correct: 2, explanation: 'Continu verbeteren is geen project — het heeft geen einddatum. Het is ingebed in elk SVS-component en elke praktijk. "Verbeter" is één van de zes waardeketensactiviteiten precies omdat verbetering constant is.' },
    { id: 'mock-it-37', domain: 'guiding-principles', question: 'Het principe "Itereer met Feedback" is afgestemd op welke moderne werkmethodologie?', options: ['PRINCE2 projectmanagement', 'Waterval softwareontwikkeling', 'Agile en DevOps', 'Six Sigma DMAIC'], correct: 2, explanation: 'Iteratieve ontwikkeling met feedbacklussen is fundamenteel voor zowel Agile als DevOps. De richtinggevende principes van ITIL 4 zijn afgestemd op deze moderne methodologieën — een bewuste ontwerpkeuze.' },
    { id: 'mock-it-38', domain: 'itil-practices', question: 'Welke praktijk zorgt ervoor dat de infrastructuur en applicaties van de organisatie afgesproken prestatiedoelen halen?', options: ['Serviceniveaubeheer', 'Beschikbaarheidsbeheer', 'Capaciteit- en Prestatiebeheer', 'IT-assetbeheer'], correct: 2, explanation: 'Capaciteit- en Prestatiebeheer zorgt dat diensten voldoende capaciteit en prestaties hebben om huidige en toekomstige vraag te vervullen binnen afgesproken dienstniveaus — vooruitkijkend (groei plannen) en reactief (knelpunten aanpakken).' },
    { id: 'mock-it-39', domain: 'key-concepts', question: 'Welke rol keurt het budget goed voor dienstconsumptie maar gebruikt de dienst zelf niet dagelijks?', options: ['Klant', 'Gebruiker', 'Sponsor', 'Serviceprovider'], correct: 2, explanation: 'Sponsor = keurt budget goed. Klant = stelt eisen en is verantwoordelijk voor uitkomsten. Gebruiker = gebruikt de dienst dagelijks. Deze rollen kunnen samenvallen in één persoon maar zijn conceptueel distinct.' },
    { id: 'mock-it-40', domain: 'itil-practices', question: 'Een serviceorganisatie implementeert een nieuw ITSM-tool. Welk principe beveelt aan gebruikers en stakeholders te betrekken bij selectie en ontwerp?', options: ['Focus op Waarde', 'Houd Het Eenvoudig en Praktisch', 'Optimaliseer en Automatiseer', 'Werk Samen en Bevorder Zichtbaarheid'], correct: 3, explanation: 'Tool-implementaties slagen wanneer stakeholders betrokken zijn — zij begrijpen behoeften, identificeren vereisten, ondersteunen adoptie en signaleren risico\'s die geïsoleerde teams missen.' }
  ]
};
