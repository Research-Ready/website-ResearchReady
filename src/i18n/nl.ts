export const nl = {
  lang: 'nl',
  nav: {
    home: 'Home',
    pipelines: 'Pipelines',
    contact: 'Contact',
    pitch: 'Presentatie',
    langToggle: 'EN',
  },
  footer: {
    blurb: 'Digitaal soevereine AI-pipelines, zelf gehost en volledig onder Europese controle.',
    navTitle: 'Navigatie',
    githubLabel: 'Research-Ready op GitHub',
    copyright: '© 2026 Research-Ready',
  },
  home: {
    title: 'Research-Ready',
    tagline: 'Digitaal soevereine AI-pipelines voor onderzoek, overheid en bedrijfsleven.',
    eyebrow: 'Digitaal soevereine AI-infrastructuur',
    headline: 'AI-pipelines die op uw eigen infrastructuur blijven draaien',
    lede: 'Research-Ready bouwt zelfsturende AI-pipelines die volledig binnen Europese controle blijven. Geen afhankelijkheid van externe cloudplatformen voor de kern van uw werk — wel de kracht van moderne AI, toegepast op onderzoek, publieke dienstverlening en bedrijfsprocessen.',
    ctaPrimary: 'Bekijk onze pipelines',
    ctaSecondary: 'Plan een gesprek',
    stats: [
      { num: '8', label: 'productiepipelines' },
      { num: '100%', label: 'zelf gehost' },
      { num: 'NL/EU', label: 'onder Europese controle' },
    ],
    sovereign: {
      eyebrow: 'Waarom zelf-gehost',
      title: 'Geen afhankelijkheid van externe cloudplatformen',
      body: 'Elke pipeline draait op een zelf-gehoste AI-stack. Data, broncode en modellen blijven binnen de omgeving die u zelf beheert — ook wanneer de pipeline zelfstandig beslissingen neemt.',
      points: [
        'Data en modellen blijven binnen uw eigen omgeving',
        'Geen vendor lock-in bij grote cloudplatformen',
        'Elke pipeline is te auditen en aan te passen',
      ],
    },
    pipelinesTeaser: {
      title: 'Acht pipelines, één aanpak',
      intro: 'Van citeerbaar onderzoek tot bedrijfsoprichting — elke pipeline is een zelfstandige, aanpasbare productielijn met een eigen repository.',
      cta: 'Bekijk alle acht pipelines',
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
        description: 'Onderzoeksworkflow die resultaten automatisch citeerbaar en reproduceerbaar maakt, van data tot publicatie.',
      },
      {
        title: 'App- en serious games-bouwer',
        repo: 'uc2-app-builder',
        description: 'Pipeline die interactieve applicaties en serious games opzet vanuit een functionele beschrijving.',
      },
      {
        title: 'Chatbot met spraak',
        repo: 'uc3-chatbot-voice',
        description: 'Conversationele AI met spraakinteractie, inzetbaar voor klantcontact en interne dienstverlening.',
      },
      {
        title: 'Supply chain-visualisatie',
        repo: 'uc4-supply-chain',
        description: 'Inzicht in complexe toeleveringsketens door automatische visualisatie en analyse.',
      },
      {
        title: 'Bedrijfsoprichtingspipeline',
        repo: 'uc5-business-creation',
        description: 'Ondersteunt de stappen van het opzetten van een nieuw bedrijf, van plan tot registratie.',
      },
      {
        title: 'Gespecialiseerde modelontwikkeling',
        repo: 'uc6-model-creation',
        description: 'Traint en verfijnt AI-modellen die toegesneden zijn op een specifiek domein of taak.',
      },
      {
        title: 'Careermaker',
        repo: 'uc7-careermaker',
        description: 'Begeleidt loopbaanoriëntatie en -ontwikkeling met gepersonaliseerd AI-advies.',
      },
      {
        title: 'Survey-rapportage',
        repo: 'uc8-survey-report',
        description: 'Verwerkt enquêteresultaten automatisch tot heldere, overzichtelijke rapportages.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Neem contact op, of plan direct een gesprek in.',
    emailLabel: 'Liever eerst e-mailen? Stuur ons een bericht via',
    bookingLabel: 'Plan een gesprek',
  },
} as const;
