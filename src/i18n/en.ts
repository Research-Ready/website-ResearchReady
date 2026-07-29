export const en = {
  lang: 'en',
  nav: {
    home: 'Home',
    pipelines: 'Pipelines',
    contact: 'Contact',
    langToggle: 'NL',
  },
  footer: {
    text: '© 2026 Research-Ready · info@research-ready.nl',
  },
  home: {
    title: 'Research-Ready',
    tagline: 'Digitally sovereign AI pipelines for research, government, and business.',
    mission:
      'Research-Ready builds self-directed AI pipelines that stay fully under European control. No dependency on external cloud platforms for the core of your work — but the full power of modern AI, applied to research, public services, and business processes.',
    cta: 'View our pipelines',
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
} as const;
