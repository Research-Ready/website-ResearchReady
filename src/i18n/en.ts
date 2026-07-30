export const en = {
  lang: 'en',
  nav: {
    home: 'Home',
    pipelines: 'Pipelines',
    contact: 'Contact',
    pitch: 'Presentation',
    langToggle: 'NL',
  },
  footer: {
    blurb: 'Digitally sovereign AI pipelines, self-hosted and fully under European control.',
    navTitle: 'Navigation',
    githubLabel: 'Research-Ready on GitHub',
    copyright: '© 2026 Research-Ready',
  },
  home: {
    title: 'Research-Ready',
    tagline: 'Digitally sovereign AI pipelines for research, government, and business.',
    eyebrow: 'Digitally sovereign AI infrastructure',
    headline: 'AI pipelines that keep running on your own infrastructure',
    lede: 'Research-Ready builds self-directed AI pipelines that stay fully under European control. No dependency on external cloud platforms for the core of your work — but the full power of modern AI, applied to research, public services, and business processes.',
    ctaPrimary: 'View our pipelines',
    ctaSecondary: 'Book a call',
    stats: [
      { num: '8', label: 'production pipelines' },
      { num: '100%', label: 'self-hosted' },
      { num: 'NL/EU', label: 'under European control' },
    ],
    sovereign: {
      eyebrow: 'Why self-hosted',
      title: 'No dependency on external cloud platforms',
      body: 'Every pipeline runs on a self-hosted AI stack. Data, source code, and models stay inside the environment you control — even while the pipeline makes decisions on its own.',
      points: [
        'Data and models stay inside your own environment',
        'No vendor lock-in with large cloud platforms',
        'Every pipeline can be audited and adapted',
      ],
    },
    pipelinesTeaser: {
      title: 'Eight pipelines, one approach',
      intro: 'From citable research to business creation — each pipeline is a self-contained, adaptable production line with its own repository.',
      cta: 'View all eight pipelines',
    },
    closingCta: {
      title: 'Curious what a pipeline could do for your organization?',
      body: 'Book a short, no-obligation call, or send us a message directly.',
      primary: 'Book a call',
      secondary: 'Send an email',
    },
  },
  pipelines: {
    title: 'Pipelines',
    intro: 'Eight self-directed AI pipelines, each with its own private repository within the Research-Ready organization.',
    items: [
      {
        title: 'Citable reproducible research',
        repo: 'uc1-research',
        description: 'A research workflow that automatically makes results citable and reproducible, from data to publication.',
      },
      {
        title: 'App and serious games builder',
        repo: 'uc2-app-builder',
        description: 'A pipeline that builds interactive applications and serious games from a functional description.',
      },
      {
        title: 'Chatbot with voice',
        repo: 'uc3-chatbot-voice',
        description: 'Conversational AI with voice interaction, deployable for customer contact and internal services.',
      },
      {
        title: 'Supply chain visualization',
        repo: 'uc4-supply-chain',
        description: 'Insight into complex supply chains through automatic visualization and analysis.',
      },
      {
        title: 'Business creation pipeline',
        repo: 'uc5-business-creation',
        description: 'Supports the steps of setting up a new business, from plan to registration.',
      },
      {
        title: 'Specialized model creation',
        repo: 'uc6-model-creation',
        description: 'Trains and refines AI models tailored to a specific domain or task.',
      },
      {
        title: 'Careermaker',
        repo: 'uc7-careermaker',
        description: 'Guides career orientation and development with personalized AI advice.',
      },
      {
        title: 'Survey report',
        repo: 'uc8-survey-report',
        description: 'Automatically processes survey results into clear, well-organized reports.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Get in touch, or book a call directly.',
    emailLabel: 'Prefer email first? Reach us at',
    bookingLabel: 'Book a call',
  },
  pitch: {
    institution: 'Value Chain Hackers Lab · Windesheim University of Applied Sciences',
    problem: {
      eyebrow: 'The shared problem',
      title: 'Applied AI is becoming infrastructure — on someone else’s terms',
      body: 'Research groups, public institutions, and businesses are all being pulled onto the same handful of commercial AI clouds: closed models, opaque pricing, data leaving the institution by default.',
      points: [
        'Research needs pipelines that are reproducible and inspectable, not black-box APIs',
        'Public institutions need to know exactly where data and decisions happen',
        'Long-term dependency on external platforms is a structural risk, not just a cost line',
      ],
    },
    builtToday: {
      eyebrow: 'What exists today',
      title: 'Eight pipelines, three domains',
      groups: [
        { label: 'Research & knowledge', indices: [0, 7] },
        { label: 'Public & business services', indices: [2, 3, 4] },
        { label: 'Applied AI tooling', indices: [1, 5, 6] },
      ],
    },
    closerLook: {
      eyebrow: 'A closer look',
      title: 'Citable, reproducible research — end to end',
      body: 'A research workflow that automatically makes results citable and reproducible, from data to publication — built around exactly the kind of reproducibility standard research institutions are expected to meet.',
    },
    academic: {
      eyebrow: 'Where this comes from',
      title: 'Built inside applied research, not a pitch deck',
      body: 'Research-Ready grew out of the Value Chain Hackers Lab at the Supply Chain Finance Lectorate, Windesheim University of Applied Sciences — pipelines are developed and tested in real research and teaching contexts before they become reusable products.',
    },
    collaborate: {
      eyebrow: 'Ways to work together',
      title: 'What a partnership could look like',
      points: [
        'A pilot on one existing pipeline, adapted to your context',
        'A co-developed pipeline for a new research or public-service question',
        'Shared infrastructure for a research group or consortium',
        'A joint research or funding proposal',
      ],
    },
    closing: {
      title: 'Let’s explore what fits',
      body: 'Book a short call, or send a message — we can look together at which pipeline, or which new one, makes sense for your institution.',
      primary: 'Book a call',
      secondary: 'Send an email',
    },
  },
} as const;
