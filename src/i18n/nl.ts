export const nl = {
  lang: 'nl',
  nav: {
    home: 'Home',
    pipelines: 'Pipelines',
    contact: 'Contact',
    pitch: 'Presentatie',
    docs: 'Documenten',
    langToggle: 'EN',
  },
  footer: {
    blurb: 'Reproduceerbare, forensisch onderbouwde AI-pipelines — zelf gehost en volledig onder Europese controle.',
    navTitle: 'Navigatie',
    githubLabel: 'Research-Ready op GitHub',
    copyright: '© 2026 Research-Ready',
  },
  home: {
    title: 'Research-Ready',
    tagline: 'Reproduceerbaar, forensisch onderbouwd onderzoek en documentatie met AI — zelf gehost en volledig onder Europese controle.',
    eyebrow: 'Reproduceerbaar, forensisch onderbouwd onderzoek',
    headline: 'AI versnelt onderzoek. Wij zorgen dat het overeind blijft.',
    lede: 'AI maakt onderzoek en documentatie sneller — en maakt het ook makkelijker om een bron te verzinnen, andermans werk over te nemen zonder vermelding, of het spoor van een conclusie kwijt te raken. Research-Ready bouwt software en een methodologie die dat omkeert: onderzoek dat net zo natrekbaar is als forensisch bewijs, volgens de discipline van het Electronic Discovery Reference Model (EDRM) — zelf gehost, zodat niemand anders dat spoor kan wissen.',
    ctaPrimary: 'Bekijk onze pipelines',
    ctaSecondary: 'Plan een gesprek',
    stats: [
      { num: '8', label: 'productiepipelines' },
      { num: '100%', label: 'zelf gehost' },
      { num: 'NL/EU', label: 'onder Europese controle' },
    ],
    sovereign: {
      eyebrow: 'De technische basis',
      title: 'Zelf gehost, omdat controle een voorwaarde is voor verantwoording',
      body: 'Elke pipeline draait op een zelf-gehoste AI-stack. Reproduceerbaar betekent hier iets concreets: iemand die niet bij het project betrokken was, kan uit de opgeslagen data en het logboek reconstrueren hoe een resultaat tot stand kwam — zonder het team te hoeven vragen. Data, broncode en modellen blijven binnen de omgeving die u zelf beheert, ook wanneer de pipeline zelfstandig beslissingen neemt.',
      points: [
        'Elke stap — wie deed wat, wanneer, op basis waarvan — staat in een versiebeheerd, tijdgestempeld archief',
        'Diensten draaien met minimale rechten en verifiëren elkaar onderling voordat ze data uitwisselen',
        'Wachtwoorden en sleutels staan versleuteld opgeslagen, nooit in platte tekst',
        'Geen vendor lock-in: modellen en providers zijn onderling inwisselbaar',
      ],
    },
    pipelinesTeaser: {
      title: 'Acht pipelines, één aanpak',
      intro: 'Van citeerbaar onderzoek tot bedrijfsoprichting — elke pipeline is een zelfstandige, aanpasbare productielijn met een eigen repository.',
      cta: 'Bekijk alle acht pipelines',
    },
    approach: {
      eyebrow: 'De methode',
      title: 'Onderzoek behandeld als bewijs, niet als bewering',
      intro: 'Elke pipeline volgt een forensische discipline voor onderzoek en documentatie — geïnspireerd op de ketenbewaking (chain of custody) uit het Electronic Discovery Reference Model (EDRM), en uitgewerkt in onderzoek naar reproduceerbare onderzoeksinfrastructuur aan het Value Chain Hackers Lab, Windesheim.',
      steps: [
        {
          title: 'Vaste werkruimte, vooraf',
          body: 'Elk project start in een vaste structuur. Bronnen, aannames en scope liggen vast voordat er data wordt verzameld of geanalyseerd.',
        },
        {
          title: 'Redenering wordt vastgelegd, niet alleen het resultaat',
          body: 'Elke belangrijke interpretatieslag wordt onderbouwd op het moment dat hij gebeurt — niet achteraf gereconstrueerd uit het geheugen van het team.',
        },
        {
          title: 'Niets wordt overschreven',
          body: 'Eerdere versies blijven bewaard, zodat het pad van eerste opzet naar eindresultaat stap voor stap te volgen is.',
        },
        {
          title: 'Reconstructie-toets vóór oplevering',
          body: 'Voordat een pipeline live gaat, testen we of iemand buiten het team de conclusies kan navolgen op basis van alleen de opgeslagen data en het logboek.',
        },
      ],
      closing: 'Zo blijft een citaat een citaat, een bron een bron — en een conclusie te herleiden tot het bewijs erachter.',
      link: { label: 'Meer over waar dit vandaan komt', href: '/pitch/' },
    },
    gettingStarted: {
      eyebrow: 'Kosten en start',
      title: 'Vaste infrastructuur, geen rekening per gebruiker',
      body: 'Rekenkracht wordt verdeeld over een compacte serveropstelling — geen datacenter nodig. Wilt u taalmodellen volledig lokaal draaien, zonder enige externe doorschakeling? Dat is uit te breiden zodra de behoefte ontstaat.',
      points: [
        'Voorspelbare infrastructuurkosten in plaats van meebewegende SaaS-facturen',
        'Geen kosten per gebruiker of per seat',
        'Te delen tussen meerdere teams of afdelingen binnen dezelfde organisatie',
      ],
      pilot: {
        title: 'Klein beginnen, snel resultaat zien',
        phases: [
          { range: 'Week 1–2', label: 'Intake', body: 'Eigenaar en één proces of pipeline kiezen.' },
          { range: 'Week 3–6', label: 'Inrichten', body: 'Platform koppelen aan bestaande systemen en data.' },
          { range: 'Week 7–10', label: 'Pilot live', body: 'Draait naast de bestaande werkwijze, met menselijke controle.' },
          { range: 'Week 11–13', label: 'Evaluatie', body: 'Op kwaliteit, tijdswinst en kosten — daarna een besluit om op te schalen.' },
        ],
        asks: ['Eén proceseigenaar', 'Een pilotbudget', 'Toegang tot één afgebakend proces'],
        note: 'Geen langjarig contract. Geen leverancierslock-in. Zichtbaar vanaf dag 1.',
      },
    },
    closingCta: {
      title: 'Benieuwd wat een pipeline voor uw organisatie kan doen?',
      body: 'Plan een kort, vrijblijvend gesprek, of stuur ons meteen een bericht.',
      primary: 'Plan een gesprek',
      secondary: 'Stuur een e-mail',
    },
  },
  pipelines: {
    title: 'Pipelines',
    intro: 'Acht zelfsturende AI-pipelines, elk met een eigen privé-repository binnen de Research-Ready organisatie.',
    items: [
      {
        title: 'Citeerbaar reproduceerbaar onderzoek',
        repo: 'uc1-research',
        description: 'Neemt een onderzoeksvraag in gewone taal, doorzoekt het open web en zet een driekoppig team van AI-agents — onderzoeker, analist, schrijver — aan het werk om bevindingen met volledige bronvermelding te bundelen. Elke bevinding komt in een kennisgrafiek terecht, zodat een volgende vraag voortbouwt op eerder werk. Het eindresultaat is een geformatteerd rapport, vastgelegd in een versiebeheerd archief met een navolgbaar spoor.',
      },
      {
        title: 'App- en serious games-bouwer',
        repo: 'uc2-app-builder',
        description: 'Neemt een functionele beschrijving of ontwerpbrief en doorloopt zelfstandig specificatie, architectuur, code en tests, met bij elke commit automatische controle. Een menselijk controlemoment blijft mogelijk via een browser-IDE, maar is geen verplichte stap.',
      },
      {
        title: 'Chatbot met spraak',
        repo: 'uc3-chatbot-voice',
        description: 'Conversationele AI met spraak in en uit: lokale spraakherkenning met een cloud-alternatief als vangnet, geheugen dat eerdere gesprekken onthoudt, en optioneel beeldgeneratie op verzoek. Inzetbaar voor klantcontact of interne dienstverlening waar spraak de natuurlijke interactievorm is.',
      },
      {
        title: 'Supply chain-visualisatie',
        repo: 'uc4-supply-chain',
        description: 'Brengt een toeleveringsketen in kaart vanaf een product of bedrijfsnaam: wie levert dit onderdeel, wie levert aan die leverancier, waar komen grondstoffen vandaan. Waar directe gegevens ontbreken, leidt de AI ontbrekende schakels af. Resultaat is een doorzoekbare ketengrafiek met dashboards voor ketenanalisten.',
      },
      {
        title: 'Bedrijfsoprichtingspipeline',
        repo: 'uc5-business-creation',
        description: 'Zet een kort intakeformulier om in een compleet startpakket voor een nieuw bedrijf: marktonderzoek, een geschreven businessplan, een wiki-pagina, gestructureerde data en een Nederlandse vertaling — automatisch gegenereerd en vastgelegd in een versiebeheerd archief.',
      },
      {
        title: 'Gespecialiseerde modelontwikkeling',
        repo: 'uc6-model-creation',
        description: 'Traint een kleine, gespecialiseerde AI op uw eigen documenten: van ruwe tekst via annotatie naar een fijngeslepen model, met elk experiment bijgehouden en elk resultaat getoetst tegen het basismodel. Zo zet bijvoorbeeld één toepassing losse tekstbeschrijvingen om in consistente, gestructureerde data.',
      },
      {
        title: 'Careermaker',
        repo: 'uc7-careermaker',
        description: 'Volgt een sollicitatietraject van begin tot eind: vacatures verzamelen en beoordelen, bedrijfsonderzoek, een aangepast cv en motivatiebrief, en gespreksvoorbereiding — zeven stappen die elk hun eigen status bijhouden in één centrale administratie.',
      },
      {
        title: 'Survey-rapportage',
        repo: 'uc8-survey-report',
        description: 'Verwerkt ruwe enquête-exports automatisch tot een overzichtelijk rapport: open antwoorden worden thematisch samengevat en patronen in de data worden uitgelicht — zonder dat iemand handmatig honderden losse antwoorden hoeft door te nemen.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Neem contact op, of plan direct een gesprek in.',
    emailLabel: 'Liever eerst e-mailen? Stuur ons een bericht via',
    bookingLabel: 'Plan een gesprek',
  },
  pitch: {
    institution: 'Value Chain Hackers Lab · Windesheim',
    problem: {
      eyebrow: 'Het gedeelde probleem',
      title: 'Toegepaste AI wordt infrastructuur — op andermans voorwaarden',
      body: 'Onderzoeksgroepen, publieke instellingen en bedrijven komen allemaal terecht op dezelfde handvol commerciële AI-clouds: gesloten modellen, ondoorzichtige prijzen, data die standaard de instelling verlaat.',
      points: [
        'Gegenereerde tekst verzint moeiteloos bronnen en citaten — zonder een spoor terug naar het bewijs is dat niet van een feit te onderscheiden',
        'Onderzoek heeft reproduceerbare, inspecteerbare pipelines nodig, geen black-box API’s',
        'Publieke instellingen moeten precies weten waar data en beslissingen plaatsvinden',
        'Langdurige afhankelijkheid van externe platformen is een structureel risico, geen kostenpost',
      ],
    },
    builtToday: {
      eyebrow: 'Wat er nu al is',
      title: 'Acht pipelines, drie domeinen',
      groups: [
        { label: 'Onderzoek & kennis', indices: [0, 7] },
        { label: 'Publieke & bedrijfsdiensten', indices: [2, 3, 4] },
        { label: 'Toegepaste AI-tooling', indices: [1, 5, 6] },
      ],
    },
    closerLook: {
      eyebrow: 'Uitgelicht',
      title: 'Citeerbaar, reproduceerbaar onderzoek — van begin tot eind',
      body: 'Een onderzoeksworkflow die resultaten automatisch citeerbaar en reproduceerbaar maakt, van data tot publicatie — gebouwd rond precies het soort reproduceerbaarheid dat van onderzoeksinstellingen wordt verwacht.',
    },
    academic: {
      eyebrow: 'Waar dit vandaan komt',
      title: 'Ontstaan binnen toegepast onderzoek, niet in een pitchdeck',
      body: 'Research-Ready komt voort uit het Value Chain Hackers Lab bij het Lectoraat Supply Chain Finance, Windesheim — een onderzoeksprogramma gericht op “de supply chain-sector vernieuwen door relentless innovatie, gedreven samenwerking en praktische toepassing”, samen met industriepartners zoals een Europese fabrikant van zware voertuigen. Pipelines doorstaan eerst een formele reconstrueerbaarheidstoets — kan iemand buiten het project de conclusies navolgen uit alleen de opgeslagen data? — voordat ze herbruikbare producten worden.',
    },
    collaborate: {
      eyebrow: 'Manieren om samen te werken',
      title: 'Hoe een samenwerking eruit kan zien',
      points: [
        'Een pilot op een bestaande pipeline, aangepast aan uw context',
        'Een samen ontwikkelde pipeline voor een nieuwe onderzoeks- of dienstverleningsvraag',
        'Gedeelde infrastructuur voor een onderzoeksgroep of consortium',
        'Een gezamenlijk onderzoeks- of subsidievoorstel',
      ],
    },
    closing: {
      title: 'Laten we kijken wat past',
      body: 'Plan een kort gesprek, of stuur een bericht — dan bekijken we samen welke pipeline, of welke nieuwe, aansluit bij uw instelling.',
      primary: 'Plan een gesprek',
      secondary: 'Stuur een e-mail',
    },
  },
} as const;
