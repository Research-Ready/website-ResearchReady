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
    blurb: 'Reproducible, forensically grounded AI pipelines — self-hosted and fully under European control.',
    navTitle: 'Navigation',
    githubLabel: 'Research-Ready on GitHub',
    copyright: '© 2026 Research-Ready',
  },
  home: {
    title: 'Research-Ready',
    tagline: 'Reproducible, forensically grounded AI research and documentation — self-hosted and fully under European control.',
    eyebrow: 'Reproducible, forensically grounded research',
    headline: 'AI makes research faster. We make sure it still holds up.',
    lede: 'AI makes research and documentation faster — and makes it easier to fabricate a source, lift someone else’s work without attribution, or lose track of how a conclusion was reached. Research-Ready builds software and a methodology that reverses that: research as traceable as forensic evidence, following the discipline of the Electronic Discovery Reference Model (EDRM) — self-hosted, so no one else can erase that trail.',
    ctaPrimary: 'View our pipelines',
    ctaSecondary: 'Book a call',
    stats: [
      { num: '8', label: 'production pipelines' },
      { num: '100%', label: 'self-hosted' },
      { num: 'NL/EU', label: 'under European control' },
    ],
    sovereign: {
      eyebrow: 'The technical foundation',
      title: 'Self-hosted, because control is a precondition for accountability',
      body: 'Every pipeline runs on a self-hosted AI stack. Reproducible means something concrete here: someone who wasn’t part of the project can reconstruct how a result came about from the stored data and the log alone — without asking the team. Data, source code, and models stay inside the environment you control, even while the pipeline makes decisions on its own.',
      points: [
        'Every step — who did what, when, based on what — sits in a version-controlled, timestamped archive',
        'Services run with least privilege and verify each other before exchanging data',
        'Passwords and keys are stored encrypted, never in plain text',
        'No vendor lock-in: models and providers are interchangeable',
      ],
    },
    pipelinesTeaser: {
      title: 'Eight pipelines, one approach',
      intro: 'From citable research to business creation — each pipeline is a self-contained, adaptable production line with its own repository.',
      cta: 'View all eight pipelines',
    },
    approach: {
      eyebrow: 'The method',
      title: 'Research treated as evidence, not as claims',
      intro: 'Every pipeline follows a forensic discipline for research and documentation — inspired by the chain-of-custody rigor of the Electronic Discovery Reference Model (EDRM), and developed through research into reproducible research infrastructure at the Value Chain Hackers Lab, Windesheim.',
      steps: [
        {
          title: 'A fixed workspace, upfront',
          body: 'Every project starts inside a fixed structure. Sources, assumptions, and scope are settled before any data is collected or analyzed.',
        },
        {
          title: 'Reasoning gets recorded, not just the result',
          body: 'Every significant interpretive step is written down as it happens — not reconstructed afterward from the team’s memory.',
        },
        {
          title: 'Nothing gets overwritten',
          body: 'Earlier versions are kept, so the path from first draft to final result can be followed step by step.',
        },
        {
          title: 'A reconstructability check before handover',
          body: 'Before a pipeline goes live, we test whether someone outside the team can follow the conclusions using only the stored data and the log.',
        },
      ],
      closing: 'That way a citation stays a citation, a source stays a source — and a conclusion can be traced back to the evidence behind it.',
      link: { label: 'More on where this comes from', href: '/en/pitch/' },
    },
    gettingStarted: {
      eyebrow: 'Cost and getting started',
      title: 'Fixed infrastructure, no per-user bill',
      body: 'Compute is spread across a compact server setup — no data center required. Want language models running fully locally, with no external fallback at all? That can be added once the need arises.',
      points: [
        'Predictable infrastructure costs instead of a SaaS bill that grows with usage',
        'No per-user or per-seat pricing',
        'Shareable across multiple teams or departments within the same organization',
      ],
      pilot: {
        title: 'Start small, see results fast',
        phases: [
          { range: 'Weeks 1–2', label: 'Intake', body: 'Pick an owner and one process or pipeline.' },
          { range: 'Weeks 3–6', label: 'Setup', body: 'Connect the platform to existing systems and data.' },
          { range: 'Weeks 7–10', label: 'Pilot live', body: 'Runs alongside the existing workflow, with human oversight.' },
          { range: 'Weeks 11–13', label: 'Evaluation', body: 'On quality, time saved, and cost — then a decision on scaling up.' },
        ],
        asks: ['One process owner', 'A pilot budget', 'Access to one bounded process'],
        note: 'No long-term contract. No vendor lock-in. Visible from day one.',
      },
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
        description: 'Takes a research question in plain language, searches the open web, and sets a three-agent team — researcher, analyst, writer — to work bundling findings with full citations. Every finding lands in a knowledge graph, so the next question builds on prior work. The output is a formatted report, committed to a version-controlled archive with a traceable trail.',
      },
      {
        title: 'App and serious games builder',
        repo: 'uc2-app-builder',
        description: 'Takes a functional spec or design brief and autonomously works through specification, architecture, code, and tests, with automated checks on every commit. A human review checkpoint remains available via a browser IDE, but is never a required step.',
      },
      {
        title: 'Chatbot with voice',
        repo: 'uc3-chatbot-voice',
        description: 'Conversational AI with voice in and out: local speech recognition with a cloud fallback, memory that recalls earlier conversations, and optional image generation on request. Deployable for customer contact or internal services where voice is the natural interaction.',
      },
      {
        title: 'Supply chain visualization',
        repo: 'uc4-supply-chain',
        description: 'Maps a supply chain backward from a product or company name: who supplies this component, who supplies that supplier, where raw materials originate. Where direct data is missing, AI infers the missing links. The result is a searchable supply graph with dashboards for chain analysts.',
      },
      {
        title: 'Business creation pipeline',
        repo: 'uc5-business-creation',
        description: 'Turns a short intake form into a complete starter package for a new business: market research, a written business plan, a wiki page, structured data, and a translated version — all generated automatically and committed to a version-controlled archive.',
      },
      {
        title: 'Specialized model creation',
        repo: 'uc6-model-creation',
        description: 'Fine-tunes a small, specialized model on your own documents: from raw text through annotation to a tuned model, with every experiment tracked and every result benchmarked against the base model. One such application turns free-text descriptions into consistent, structured data.',
      },
      {
        title: 'Careermaker',
        repo: 'uc7-careermaker',
        description: 'Follows a job search from start to finish: gathering and scoring vacancies, company research, a tailored CV and cover letter, and interview prep — seven stages, each tracking its own status in one shared record.',
      },
      {
        title: 'Survey report',
        repo: 'uc8-survey-report',
        description: 'Automatically turns raw survey exports into a clear report: open-ended answers get summarized by theme and patterns in the data are surfaced — without anyone manually reading through hundreds of individual responses.',
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
        'Generated text fabricates sources and citations effortlessly — without a trail back to the evidence, that’s indistinguishable from a fact',
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
      body: 'Research-Ready grew out of the Value Chain Hackers Lab at the Supply Chain Finance Lectorate, Windesheim University of Applied Sciences — an applied research program built around "revolutionizing the supply chain industry through relentless innovation, spirited collaboration, and hands-on practical application," working alongside industry partners including a European heavy-vehicle manufacturer. Pipelines first pass a formal reconstructability test — can someone outside the project follow the conclusions from the stored data alone? — before they become reusable products.',
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
