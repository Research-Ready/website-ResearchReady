import type {
  Course,
  Module,
  Chapter,
  Section,
  Flashcard,
  KnowledgeCheck,
  LearningObjective,
} from './types';

// ---------------------------------------------------------------------------
// Helper factories — keep individual chapter objects under 20 lines each
// ---------------------------------------------------------------------------

function sec(id: string, title: string, placeholder: string): Section {
  return { id, title, contentPlaceholder: placeholder };
}

function fc(id: string, term: string, definition: string): Flashcard {
  return { id, term, definition };
}

function lo(level: LearningObjective['level'], text: string): LearningObjective {
  return { level, text };
}

function kc(
  id: string,
  question: string,
  options: [string, string, string, string],
  correct: 0 | 1 | 2 | 3,
  explanation: string,
): KnowledgeCheck {
  return { id, question, options, correct, explanation, bloomsLevel: 'remember' };
}

// ---------------------------------------------------------------------------
// Module 0 — Course Introduction
// ---------------------------------------------------------------------------

const mod0Ch1: Chapter = {
  id: 'itil4-mod0-ch1',
  title: 'Exam Format and Logistics',
  learningObjectives: [
    lo('remember', 'Student can recall that the ITIL 4 Foundation exam has 40 questions in 60 minutes with a 65% pass mark.'),
    lo('understand', 'Student can explain what question types appear on the ITIL 4 Foundation exam.'),
  ],
  sections: [
    sec('itil4-mod0-ch1-s1', 'About the Exam', 'The ITIL 4 Foundation exam consists of 40 multiple-choice questions to be answered in 60 minutes, with a pass mark of 65% (26 out of 40 correct). The exam is closed book with no negative marking, and all questions are single-best-answer format — not multiple-select. It is delivered by PeopleCert online (proctored) or at authorised test centres worldwide.'),
    sec('itil4-mod0-ch1-s2', 'Question Strategy', 'Start by eliminating obviously wrong answers to narrow the field. Watch for absolute words such as "always", "never", and "only" — ITIL is a flexible framework and rarely mandates absolutes, so answers using these words are often wrong. Look for answers that align with value creation and stakeholder focus, and when two options seem equally correct, choose the one that is more specifically grounded in ITIL terminology.'),
    sec('itil4-mod0-ch1-s3', 'Booking and Logistics', 'Book your exam at peoplecert.org. Online proctored exams require a webcam, stable internet connection, a clear desk, and a government-issued photo ID. Your certificate is issued digitally after passing; a physical certificate is available at extra cost. Bring your booking reference and ID on exam day — name discrepancies between your booking and ID can cause entry to be refused.'),
  ],
  flashcards: [
    fc('itil4-mod0-ch1-fc1', 'Pass mark', '65% — 26 out of 40 questions correct.'),
    fc('itil4-mod0-ch1-fc2', 'Exam duration', '60 minutes for 40 single-best-answer multiple-choice questions. No negative marking.'),
    fc('itil4-mod0-ch1-fc3', 'Exam provider', 'PeopleCert — the official ITIL exam body. Exams available online (proctored) and at test centres.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod0-ch1-kc1', 'How many questions must a candidate answer correctly to pass the ITIL 4 Foundation exam?', ['20 out of 40', '24 out of 40', '26 out of 40', '30 out of 40'], 2, '65% of 40 = 26. This is the exact pass mark. There is no negative marking, so answering every question is always beneficial even when guessing.'),
    kc('itil4-mod0-ch1-kc2', 'Which statement about the ITIL 4 Foundation exam format is CORRECT?', ['It contains 40 questions in 90 minutes', 'It contains 40 single-best-answer questions in 60 minutes', 'Candidates may use reference materials during the exam', 'Incorrect answers carry a negative mark'], 1, '40 questions, 60 minutes, single-best-answer, closed book, no negative marking — memorise all five facts. 90 minutes is wrong, open book is wrong, and negative marking does not apply.'),
  ],
  summary: ['40 single-best-answer MCQs, 60 minutes, 65% pass mark (26/40), closed book, no negative marking.', 'PeopleCert administers the exam online (proctored) or at test centres — government-issued ID required.', 'Elimination strategy: remove implausible options first, then choose the most ITIL-aligned answer.'],
  examTip: 'The pass mark is 65% — that is 26 correct answers out of 40. There is no negative marking, so always answer every question.',
};

const mod0Ch2: Chapter = {
  id: 'itil4-mod0-ch2',
  title: 'Pre-Assessment',
  learningObjectives: [
    lo('remember', 'Student can identify their current knowledge gaps across ITIL 4 domains.'),
    lo('understand', 'Student can interpret pre-assessment results to prioritise study effort.'),
  ],
  sections: [
    sec('itil4-mod0-ch2-s1', 'Diagnostic Quiz', 'A 2-question-per-domain diagnostic identifies knowledge gaps before you invest study time. Domains covered include Service Management Foundations, Four Dimensions, Guiding Principles, Service Value System, Service Value Chain, and ITIL Practices. Score each domain separately to build an honest picture of where you stand before beginning the course.'),
    sec('itil4-mod0-ch2-s2', 'Interpreting Results', 'Domains where you score 0 out of 2 need focused study first — these signal the biggest knowledge gaps. Domains where you score 2 out of 2 can be reviewed briefly for confirmation. Use the module structure of this course to map weak domains to targeted chapters, and allocate proportionally more revision time to high-exam-weight domains such as Guiding Principles (approximately 7 questions) and ITIL Practices (approximately 15 questions).'),
  ],
  flashcards: [
    fc('itil4-mod0-ch2-fc1', 'Conscious Competence model', 'A four-stage learning model: Unconscious Incompetence (do not know what you do not know) → Conscious Incompetence (aware of gaps) → Conscious Competence (can do it with effort) → Unconscious Competence (automatic).'),
    fc('itil4-mod0-ch2-fc2', 'Knowledge gap', 'A domain where current understanding is below the level needed to reliably answer exam questions.'),
    fc('itil4-mod0-ch2-fc3', 'Study prioritisation', 'Allocating more study time to high-exam-weight domains where diagnostic scores are lowest — the highest-leverage activity before sitting any certification exam.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod0-ch2-kc1', 'What is the PRIMARY purpose of a diagnostic pre-assessment?', ['To measure whether you are ready to sit the exam', 'To identify knowledge gaps so study effort can be prioritised', 'To practise the exact questions that appear in the exam', 'To fulfil a course completion requirement'], 1, 'The diagnostic surfaces gaps so you study what matters most, not what you already know. It is not predictive of readiness nor does it use real exam questions — it is a gap-finding tool, not a readiness gate.'),
    kc('itil4-mod0-ch2-kc2', 'A candidate scores 0/2 on the Guiding Principles domain and 2/2 on Exam Format. What should they do?', ['Spend equal time on all domains', 'Skip the Guiding Principles — the score is just luck', 'Prioritise the Guiding Principles module and briefly review Exam Format', 'Retake the diagnostic immediately'], 2, 'A 0/2 score signals a significant gap in a domain that carries approximately 7 exam questions. Prioritising it over an already-mastered domain is basic study efficiency — revisit mastered material only once gaps are closed.'),
  ],
  summary: ['The diagnostic reveals which ITIL domains need most attention before exam day.', 'Map 0/2 domain scores to the corresponding course modules and study them first.', 'High-exam-weight domains (Practices: ~15 questions, Guiding Principles: ~7 questions) deserve the most focus.'],
  examTip: 'Use the pre-assessment honestly — identifying gaps now saves time later and improves your pass probability.',
};

const module0: Module = {
  id: 'itil4-mod0',
  title: 'Course Introduction',
  description: 'Overview of the ITIL 4 Foundation exam, booking logistics, and a diagnostic pre-assessment to identify knowledge gaps.',
  chapters: [mod0Ch1, mod0Ch2],
};

// ---------------------------------------------------------------------------
// Module 1 — Service Management Foundations
// ---------------------------------------------------------------------------

const mod1Ch1: Chapter = {
  id: 'itil4-mod1-ch1',
  title: 'What Is a Service?',
  learningObjectives: [
    lo('remember', 'Student can recall the ITIL 4 definition of a service.'),
    lo('understand', 'Student can explain the difference between a product and a service in an IT context.'),
  ],
  sections: [
    sec('itil4-mod1-ch1-s1', 'ITIL Definition of Service', 'A service is "a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks." Three key ideas are packed in: (1) services enable outcomes — they exist to help customers achieve something; (2) value is co-created — the provider does not create value alone; (3) the provider absorbs certain costs and risks that the consumer would otherwise face.', 'The provider enables outcomes without the consumer bearing the associated costs and risks.'),
    sec('itil4-mod1-ch1-s2', 'Products vs Services', 'A product is a configuration of an organisation\'s resources designed to offer value for a consumer. Think of it as the "what": a software platform, a helpdesk system, a cloud environment. A service is the "how that product is offered and experienced" — it includes the relationship, support, guarantees, and intangible elements. The same product can underpin multiple services. ITIL 4 treats services as the primary unit of value exchange.', 'Products are resource configurations; services are how those resources are offered to deliver value.'),
    sec('itil4-mod1-ch1-s3', 'Real-World Example', 'Consider corporate email. The product is the mail server software plus infrastructure. The email service wraps that product with SLAs (99.9% uptime), support (helpdesk), security (spam filtering), and provisioning (account creation). The business user does not manage the servers, patches, or backups — those costs and risks stay with IT. The user gets the outcome: reliable business communication. That is a service.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch1-fc1', 'Service', 'A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.'),
    fc('itil4-mod1-ch1-fc2', 'Product', 'A configuration of an organisation\'s resources designed to offer value for a consumer. Products underpin services but are not services themselves.'),
    fc('itil4-mod1-ch1-fc3', 'Utility', 'The functionality offered by a product or service to meet a particular need — what the service does ("fit for purpose"). A service must have utility AND warranty to deliver value.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch1-kc1', 'Which statement BEST describes a service in ITIL 4?', [
      'A means of delivering technical infrastructure to users',
      'A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without them managing specific costs and risks',
      'A configuration of organisational resources designed to offer value',
      'A process for managing IT operations and support',
    ], 1, 'Option B is the exact ITIL 4 definition. Option A is too narrow (technology only). Option C describes a product. Option D describes a process, not a service.'),
    kc('itil4-mod1-ch1-kc2', 'An organisation deploys a cloud storage platform. Which term BEST describes the platform itself — the infrastructure and software configured to hold data?', [
      'Service',
      'Outcome',
      'Product',
      'Warranty',
    ], 2, 'A product is a configuration of resources designed to offer value — the platform itself. A service is how that product is offered to consumers with associated support, SLAs, and risk management. The platform becomes a service when it is offered with those elements.'),
  ],
  summary: [
    'A service enables value co-creation — the provider facilitates outcomes without the consumer bearing the associated costs and risks.',
    'A product is a configured bundle of resources; a service is the means by which value from that product reaches the consumer.',
    'Utility = what the service does (fit for purpose); Warranty = how reliably it does it (fit for use). Both are needed for value.',
  ],
  examTip: 'Memorise the exact ITIL definition of "service" — exam questions often use near-miss wording to catch candidates who only partially recall it.',
};

const mod1Ch2: Chapter = {
  id: 'itil4-mod1-ch2',
  title: 'Value, Outcomes, Costs, and Risks',
  learningObjectives: [
    lo('remember', 'Student can recall the definitions of value, outcomes, outputs, costs, and risks in ITIL 4.'),
    lo('understand', 'Student can distinguish between outputs (what is delivered) and outcomes (what the customer achieves).'),
  ],
  sections: [
    sec('itil4-mod1-ch2-s1', 'Value and Co-creation', 'Value is the perceived benefits, usefulness, and importance of something. ITIL 4 insists that value is always co-created — neither the provider nor the consumer creates it alone. The provider brings resources, capabilities, and processes; the consumer brings context, use cases, and adoption. A perfectly reliable email system creates no value if nobody uses it. Value emerges from the interaction between provider activity and consumer use.', 'Value is co-created: providers enable it, consumers realise it through use.'),
    sec('itil4-mod1-ch2-s2', 'Outputs vs Outcomes', 'An output is a tangible or intangible deliverable produced by an activity — a report, a software build, a resolved ticket. An outcome is the result that matters to a stakeholder — informed decisions, faster releases, uninterrupted operations. Services exist to deliver outcomes, not just outputs. A provider can deliver many outputs that produce no meaningful outcome, or one output that transforms business performance. The exam tests whether candidates understand this distinction.', 'Outputs are deliverables; outcomes are results that matter to stakeholders.'),
    sec('itil4-mod1-ch2-s3', 'Costs and Risks', 'Costs from the consumer perspective are what they give up when using a service — money, time, and resources. Services remove some costs from the consumer (they no longer run their own mail servers) but may impose others (subscription fees). Similarly, services remove certain risks (data loss, patching failures) but can introduce new ones (vendor lock-in, outage dependency). Good service design is transparent about which costs and risks are transferred, absorbed, and shared.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch2-fc1', 'Outcome', 'A result for a stakeholder enabled by one or more outputs — the "why" behind using a service.'),
    fc('itil4-mod1-ch2-fc2', 'Output', 'A tangible or intangible deliverable of an activity — the "what" that is produced.'),
    fc('itil4-mod1-ch2-fc3', 'Value', 'The perceived benefits, usefulness, and importance of something — always co-created between providers and consumers, never delivered unilaterally.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch2-kc1', 'A service desk team closes 500 tickets in a month. The business reports that end-user productivity has not improved. Which statement BEST explains this situation?', [
      'The service desk has delivered outputs but not outcomes',
      'The service desk has delivered outcomes but not outputs',
      'The service desk has failed to deliver utility',
      'The service desk has delivered value to the consumer',
    ], 0, 'Tickets closed = outputs (deliverables). Improved productivity = the outcome (result for the stakeholder). Producing outputs without achieving outcomes is a classic failure mode in IT service management.'),
    kc('itil4-mod1-ch2-kc2', 'According to ITIL 4, which statement about value is CORRECT?', [
      'Value is determined solely by the service provider based on the cost of delivery',
      'Value is co-created through active collaboration between providers and consumers',
      'Value is delivered by the provider when a service meets its SLA targets',
      'Value is created when outputs match the agreed specifications',
    ], 1, 'ITIL 4 explicitly states that value is co-created. The provider does not deliver value unilaterally — it is realised through the consumer\'s use. Meeting SLAs or specs produces outputs, not necessarily the outcomes that constitute value.'),
  ],
  summary: [
    'Value is co-created: providers enable it through resources and capabilities; consumers realise it through adoption and use.',
    'Outputs are tangible deliverables (resolved tickets, deployed software); outcomes are the results stakeholders care about (uptime, productivity, revenue).',
    'Services remove certain costs and risks from consumers but may introduce others — transparency about this trade-off is part of good service design.',
  ],
  examTip: 'Output vs outcome is a favourite trick question. An output is a deliverable (a report); an outcome is the result that matters to the stakeholder (informed decision-making).',
};

const mod1Ch3: Chapter = {
  id: 'itil4-mod1-ch3',
  title: 'Service Relationships',
  learningObjectives: [
    lo('remember', 'Student can recall the roles of service provider, service consumer, and service relationship.'),
    lo('understand', 'Student can explain the service relationship model including provisioning, consumption, and management.'),
  ],
  sections: [
    sec('itil4-mod1-ch3-s1', 'Provider and Consumer Roles', 'A service provider creates and delivers services. A service consumer receives them. The consumer role breaks into three sub-roles: the customer decides what services are needed and owns the service relationship; the user interacts with the service day-to-day; the sponsor authorises the budget. One person can occupy multiple roles — a small business owner is often customer, user, and sponsor simultaneously. Distinguishing these roles matters because different stakeholders have different concerns.', 'Consumer = customer (decides) + user (operates) + sponsor (funds) — often the same person in small organisations, always distinct concerns.'),
    sec('itil4-mod1-ch3-s2', 'Service Relationship Model', 'ITIL 4 defines a service relationship as the cooperation between a service provider and consumer. It has three components: service provisioning (the provider\'s activities — managing resources, ensuring access, fulfilling demands); service consumption (the consumer\'s activities — using resources, receiving outputs, realising outcomes); and service relationship management (the joint activities both parties perform — agreeing requirements, co-creating value, providing feedback). All three must work for value to be realised.', 'Provisioning + Consumption + Relationship Management together constitute the service relationship.'),
    sec('itil4-mod1-ch3-s3', 'Example Relationship Chain', 'A cloud provider (AWS) offers infrastructure to a SaaS company (Salesforce). Salesforce is AWS\'s consumer. Salesforce then offers CRM services to a retailer — making Salesforce both provider and consumer simultaneously. The retailer\'s IT team (provider) offers CRM access to its sales staff (consumers). Each link in the chain is a service relationship. This is why ITIL says organisations occupy both provider and consumer roles across their value chain.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch3-fc1', 'Service Provider', 'An organisation that provides services to consumers.'),
    fc('itil4-mod1-ch3-fc2', 'Service Consumer', 'An organisation that consumes services — may include customers, users, and sponsors.'),
    fc('itil4-mod1-ch3-fc3', 'Sponsor', 'A stakeholder who authorises the budget for service consumption. Distinct from the customer (who defines requirements) and the user (who operates the service).'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch3-kc1', 'A department manager negotiates the CRM contract and approves the budget. Their team uses the CRM daily. Which roles does the manager fulfil?', [
      'User and sponsor only',
      'Customer and sponsor',
      'Customer, user, and sponsor',
      'Provider and customer',
    ], 1, 'The manager approves budget (sponsor) and defines requirements/owns the relationship (customer), but does not use the service daily (that is the team = users). Customer + sponsor is correct. If the manager also used the CRM personally, they would additionally be a user.'),
    kc('itil4-mod1-ch3-kc2', 'Which of the following is NOT one of the three components of a service relationship in ITIL 4?', [
      'Service provisioning',
      'Service consumption',
      'Service relationship management',
      'Service level monitoring',
    ], 3, 'The three components are service provisioning, service consumption, and service relationship management. Service level monitoring is an activity that may occur within those components but is not itself a named component of the service relationship model.'),
  ],
  summary: [
    'Service consumer roles: customer (defines requirements), user (operates the service), sponsor (authorises budget) — one person can hold multiple roles.',
    'A service relationship has three components: service provisioning (provider activities), service consumption (consumer activities), and service relationship management (joint activities).',
    'Organisations are simultaneously providers and consumers across their supply chains — IT provides to staff while consuming from cloud vendors.',
  ],
  examTip: 'The same organisation can be both a provider and a consumer simultaneously — e.g., an IT department providing services to staff while consuming cloud services from a vendor.',
};

const module1: Module = {
  id: 'itil4-mod1',
  title: 'Service Management Foundations',
  description: 'Core concepts: what a service is, how value is co-created, and how service relationships work between providers and consumers.',
  examWeight: 5,
  chapters: [mod1Ch1, mod1Ch2, mod1Ch3],
};

// ---------------------------------------------------------------------------
// Module 2 — Key ITIL Concepts
// ---------------------------------------------------------------------------

const mod2Ch1: Chapter = {
  id: 'itil4-mod2-ch1',
  title: 'ITIL History and Evolution',
  learningObjectives: [
    lo('remember', 'Student can recall the major versions of ITIL and when they were published.'),
    lo('understand', 'Student can explain why ITIL evolved from a process-focused to a value-focused framework.'),
  ],
  sections: [
    sec('itil4-mod2-ch1-s1', 'ITIL Origins', 'ITIL originated in the UK\'s Central Computer and Telecommunications Agency (CCTA) in the late 1980s, initially published as a library of best practices for UK government IT. It standardised IT operations at a time when departments were building incompatible systems independently, and the first books were published in 1989. The framework quickly gained traction beyond government and became the globally dominant IT service management standard.'),
    sec('itil4-mod2-ch1-s2', 'ITIL v2, v3, and 2011', 'ITIL v2 (2001) consolidated earlier books into a popular certification path focused on Service Support and Service Delivery. ITIL v3 (2007) introduced the service lifecycle model with five phases: Strategy, Design, Transition, Operation, and Continual Improvement. The 2011 update refined v3 language and resolved internal inconsistencies without major structural changes.'),
    sec('itil4-mod2-ch1-s3', 'Why ITIL 4?', 'ITIL 4 (2019) responded to digital transformation — Agile, DevOps, cloud computing, and microservices had made the v3 lifecycle model feel rigid and sequential in a world of continuous delivery. ITIL 4 introduced the Service Value System and Four Dimensions, designed to integrate with Agile and Lean approaches rather than competing with them, and to support organisations operating at cloud speed.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch1-fc1', 'ITIL', 'Information Technology Infrastructure Library — a globally adopted framework of best practices for IT service management, originally developed by the UK government\'s CCTA in the 1980s.'),
    fc('itil4-mod2-ch1-fc2', 'ITIL 4', 'The 2019 update that replaced the service lifecycle model with the Service Value System, integrating ITIL with Agile, DevOps, and Lean thinking to support digital-era service delivery.'),
    fc('itil4-mod2-ch1-fc3', 'CCTA', 'Central Computer and Telecommunications Agency — the UK government body that commissioned the original ITIL library in the 1980s to standardise IT service management across departments.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch1-kc1', 'Which of the following BEST describes why ITIL 4 was introduced?', ['To add more processes to the ITIL v3 service lifecycle', 'To respond to Agile, DevOps, and digital transformation trends that made the v3 approach feel rigid', 'To replace Agile and DevOps with a single best-practice framework', 'To reduce the number of ITIL certifications available'], 1, 'ITIL 4 was driven by digital transformation — cloud, DevOps, Agile, and microservices changed how IT services are delivered. The SVS and guiding principles were designed to be compatible with these approaches, not to replace them.'),
    kc('itil4-mod2-ch1-kc2', 'In which decade did ITIL originate?', ['1970s', '1980s', '1990s', '2000s'], 1, 'ITIL originated in the late 1980s under the UK government\'s CCTA. The first books were published in 1989. The framework became widely adopted internationally during the 1990s.'),
  ],
  summary: ['ITIL originated in the late 1980s as a UK government initiative to standardise IT operations across departments.', 'ITIL v3 introduced the service lifecycle (2007); ITIL 4 replaced it with the Service Value System (2019).', 'ITIL 4 was designed to work alongside Agile, DevOps, and Lean — not to replace them.'],
  examTip: 'ITIL history itself carries few direct exam marks — focus effort on understanding why ITIL 4 integrates Agile and DevOps rather than on memorising version dates.',
};

const mod2Ch2: Chapter = {
  id: 'itil4-mod2-ch2',
  title: 'ITSM Today',
  learningObjectives: [
    lo('remember', 'Student can recall what IT Service Management (ITSM) means and its scope.'),
    lo('understand', 'Student can explain how ITSM relates to business value and digital services.'),
  ],
  sections: [
    sec('itil4-mod2-ch2-s1', 'Defining ITSM', 'IT Service Management (ITSM) is the set of specialised organisational capabilities for enabling value for customers in the form of services. It covers people, processes, and technology working together to plan, deliver, and continuously improve IT services. ITSM is not just about keeping systems running — it is about enabling business outcomes and ensuring that IT investments translate into stakeholder value.'),
    sec('itil4-mod2-ch2-s2', 'ITSM in a Digital World', 'Cloud computing, APIs, continuous delivery, and microservices have fundamentally changed the pace and complexity of service management. Services are now deployed in hours rather than months, and ITSM frameworks must support DevOps pipelines, SRE practices, and automated service provisioning alongside traditional governance needs. Modern ITSM success is measured by business outcomes, not just technical metrics.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch2-fc1', 'ITSM', 'IT Service Management — the set of specialised organisational capabilities (people, processes, technology) for enabling value to customers in the form of services.'),
    fc('itil4-mod2-ch2-fc2', 'Digital transformation', 'The integration of digital technology into all areas of a business, fundamentally changing how organisations operate and deliver value to customers — a key driver of ITIL 4.'),
    fc('itil4-mod2-ch2-fc3', 'SRE (Site Reliability Engineering)', 'A discipline that applies software engineering principles to operations, using automation to manage services at scale — a modern ITSM-compatible approach that complements ITIL 4.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch2-kc1', 'Which statement BEST describes the scope of ITSM?', ['ITSM covers only the technical infrastructure needed to run IT services', 'ITSM is the set of capabilities for enabling value to customers via services, covering people, processes, and technology', 'ITSM is a certification scheme for IT professionals', 'ITSM is limited to incident and problem management'], 1, 'ITSM encompasses all capabilities — people (roles, skills), processes (practices), and technology — needed to enable value. It is business-focused, not just technically focused, and its scope spans the full service lifecycle.'),
    kc('itil4-mod2-ch2-kc2', 'How has cloud computing changed ITSM demands?', ['Cloud has eliminated the need for service management', 'Cloud has slowed down service delivery, requiring more controls', 'Cloud has accelerated service delivery and provisioning, requiring ITSM to support faster change and automated operations', 'Cloud has made ITSM relevant only to infrastructure teams'], 2, 'Cloud enables provisioning in minutes rather than months. ITSM must support this speed — change enablement, service catalogue management, and monitoring practices all need to operate at cloud pace.'),
  ],
  summary: ['ITSM is the set of organisational capabilities — people, processes, and technology — that enable value delivery through IT services.', 'Modern ITSM must support cloud-native delivery, DevOps pipelines, and automated operations alongside traditional governance.', 'Business outcomes, not technical metrics, are the true measure of ITSM success.'],
  examTip: 'ITSM is about enabling value through services, not just about running IT. Exam questions test whether candidates understand the business focus, not just the technical process.',
};

const mod2Ch3: Chapter = {
  id: 'itil4-mod2-ch3',
  title: 'ITIL 4 as a Framework',
  learningObjectives: [
    lo('remember', 'Student can recall the two key structural components introduced in ITIL 4: the SVS and the Four Dimensions.'),
    lo('understand', 'Student can explain how ITIL 4 is designed to work alongside Agile, DevOps, and Lean.'),
  ],
  sections: [
    sec('itil4-mod2-ch3-s1', 'ITIL 4 Components Overview', 'ITIL 4 has four key structural components: the Service Value System (SVS — the overall model showing how value is created), the Four Dimensions Model (the four perspectives every service must consider), the 34 ITIL practices (activities and capabilities organised in three categories), and the 7 Guiding Principles (universal recommendations). The SVS contains the Service Value Chain at its centre, with the guiding principles, governance, practices, and continual improvement surrounding and enabling it.'),
    sec('itil4-mod2-ch3-s2', 'Integration with Other Frameworks', 'ITIL 4 is designed to be complementary to Agile, Scrum, DevOps, SAFe, Lean, and COBIT. It does not prescribe a single way of working — instead, guiding principles such as "Think and work holistically" and "Keep it simple and practical" encourage adopting whatever combination of practices delivers value. The SVS explicitly acknowledges that organisations can and should integrate ITIL with other frameworks, and that no single framework has all the answers.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch3-fc1', 'Service Value System (SVS)', 'The ITIL 4 model showing how all components and activities of an organisation work together to facilitate value creation through services.'),
    fc('itil4-mod2-ch3-fc2', 'Guiding Principles', 'Seven universal ITIL 4 recommendations that guide organisations in any circumstance — they are enduring advice, not prescriptive rules, and apply regardless of changes in strategy or context.'),
    fc('itil4-mod2-ch3-fc3', 'ITIL Practice', 'A set of organisational resources designed for performing work or accomplishing an objective. ITIL 4 defines 34 practices across three categories: general management, service management, and technical management.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch3-kc1', 'Which two structural components are unique to ITIL 4 (not present in ITIL v3)?', ['Service catalogue and service desk', 'Service Value System and Four Dimensions Model', 'Incident management and problem management', 'Continual improvement and service level management'], 1, 'The SVS and Four Dimensions Model are the two major structural innovations of ITIL 4. The other options list practices that existed under different names in ITIL v3 — they are not new structural components.'),
    kc('itil4-mod2-ch3-kc2', 'Which statement about ITIL 4 and Agile is CORRECT?', ['ITIL 4 replaces Agile in organisations that adopt it', 'ITIL 4 and Agile address the same concerns in the same way', 'ITIL 4 is designed to work alongside Agile, not replace it', 'ITIL 4 requires organisations to choose between ITIL and Agile'], 2, 'ITIL 4 is explicitly designed for compatibility with Agile, DevOps, and Lean. The guiding principles and SVS are framework-agnostic — organisations can apply ITIL thinking within Agile delivery contexts without conflict.'),
  ],
  summary: ['ITIL 4 has four pillars: the SVS, the Four Dimensions Model, 34 practices, and 7 Guiding Principles.', 'The Service Value System shows how all ITIL components work together to co-create value.', 'ITIL 4 is intentionally compatible with Agile, DevOps, Lean, and COBIT — it complements, not replaces, them.'],
  examTip: 'ITIL 4 does not replace Agile or DevOps — it integrates with them. Questions that suggest frameworks conflict are likely wrong answers.',
};

const module2: Module = {
  id: 'itil4-mod2',
  title: 'Key ITIL Concepts',
  description: 'ITIL history, the modern ITSM landscape, and ITIL 4 as an integrated framework for value delivery.',
  examWeight: 3,
  chapters: [mod2Ch1, mod2Ch2, mod2Ch3],
};

// ---------------------------------------------------------------------------
// Module 3 — Four Dimensions
// ---------------------------------------------------------------------------

const mod3Ch1: Chapter = {
  id: 'itil4-mod3-ch1',
  title: 'Organizations and People',
  learningObjectives: [
    lo('remember', 'Student can recall that Organizations and People is one of the Four Dimensions of ITIL 4.'),
    lo('understand', 'Student can explain how roles, culture, and organisational structure affect service delivery.'),
  ],
  sections: [
    sec('itil4-mod3-ch1-s1', 'Roles and Responsibilities', 'The Organizations and People dimension covers the roles, responsibilities, formal organisational structures, culture, and staffing that underpin service management. Clear roles prevent duplication and gaps — when everyone knows who is responsible for what, work flows without unnecessary escalation. Decision-making authority must be explicit, because ambiguity about who can approve changes or declare major incidents causes costly delays.'),
    sec('itil4-mod3-ch1-s2', 'Culture and Communication', 'Organisational culture shapes how people behave when no one is watching. A culture of blame suppresses incident reporting; a learning culture encourages it and drives faster improvement. ITIL 4 emphasises that cultural change is often the hardest part of service improvement — processes and tools are easier to change than mindsets and habits, and cultural issues frequently undermine technically sound process designs.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch1-fc1', 'Four Dimensions Model', 'The ITIL 4 model identifying four perspectives that must all be considered for effective service management: Organizations and People, Information and Technology, Partners and Suppliers, Value Streams and Processes.'),
    fc('itil4-mod3-ch1-fc2', 'Organizational culture', 'The shared values, beliefs, and behaviours that shape how work gets done in an organisation — one of the hardest things to change and one of the biggest influences on service quality.'),
    fc('itil4-mod3-ch1-fc3', 'PESTLE', 'Political, Economic, Social, Technological, Legal, Environmental — external factors that influence all four dimensions of service management and are outside the organisation\'s direct control.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch1-kc1', 'An organisation\'s incident response is slow because teams dispute who has authority to declare a major incident. Which dimension of the Four Dimensions Model is the PRIMARY gap?', ['Information and Technology', 'Partners and Suppliers', 'Organizations and People', 'Value Streams and Processes'], 2, 'Authority, roles, and decision-making accountability sit in the Organizations and People dimension. This is not a process gap — the process may exist, but the people dimension (who decides) is unclear, which blocks execution.'),
    kc('itil4-mod3-ch1-kc2', 'Which of the following is an example of an EXTERNAL factor affecting the Four Dimensions, according to ITIL 4?', ['The organisation\'s incident management process', 'A new regulation requiring data residency in the EU', 'The skills of the service desk team', 'The organisation\'s vendor contracts'], 1, 'External regulations (Legal, from PESTLE) sit outside the organisation\'s control and influence how all four dimensions must be configured. Processes, skills, and contracts are internal to the organisation.'),
  ],
  summary: ['The Organizations and People dimension covers roles, responsibilities, organisational structures, and culture.', 'Clear decision-making authority is essential — ambiguity about who can act causes service delivery delays.', 'Cultural factors are the hardest to change and often the greatest barrier to successful service improvement.'],
  examTip: 'Exam scenarios often describe a problem and ask which dimension is involved. People/culture issues map to "Organizations and People"; tool or automation issues map to "Information and Technology".',
};

const mod3Ch2: Chapter = {
  id: 'itil4-mod3-ch2',
  title: 'Information and Technology',
  learningObjectives: [
    lo('remember', 'Student can recall examples of what falls under the Information and Technology dimension.'),
    lo('understand', 'Student can explain how information management and technology choices affect service quality.'),
  ],
  sections: [
    sec('itil4-mod3-ch2-s1', 'Information as a Service Asset', 'The Information and Technology dimension covers the information, knowledge, and technologies required for service management. This includes the IT systems used to deliver services (cloud platforms, databases, networks) AND the tools used to manage services (ITSM platforms, monitoring, CMDB). Information itself — how it is created, stored, managed, and protected — is as important as the technology that hosts it.'),
    sec('itil4-mod3-ch2-s2', 'Technology Considerations', 'Key questions for this dimension include: What information does the service need to create, manage, and deliver? How will information be secured and governed? Which technologies support the service and are they compatible with the current environment? What are the legal and regulatory constraints on data handling, storage, and transfer? Answering these questions up front prevents costly redesigns later.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch2-fc1', 'CMDB', 'Configuration Management Database — a repository that stores information about IT assets (configuration items) and their relationships. Part of the Information and Technology dimension.'),
    fc('itil4-mod3-ch2-fc2', 'Configuration Item (CI)', 'Any component that needs to be managed in order to deliver an IT service. CIs are tracked in the CMDB and include hardware, software, documentation, and services.'),
    fc('itil4-mod3-ch2-fc3', 'Information security', 'Protecting the confidentiality, integrity, and availability of information — a cross-cutting concern across all four dimensions of service management.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch2-kc1', 'Which of the following belongs to the Information and Technology dimension of the Four Dimensions Model?', ['The contract with a cloud provider', 'The roles and responsibilities of the change advisory board', 'The monitoring platform used to detect service outages', 'The value stream for deploying new features'], 2, 'Monitoring platforms are technology components — they belong to Information and Technology. The cloud provider contract = Partners and Suppliers; CAB roles = Organizations and People; the deployment value stream = Value Streams and Processes.'),
    kc('itil4-mod3-ch2-kc2', 'A team discovers that customer data is stored in a country that violates data residency regulations. Which external PESTLE factor is driving the issue?', ['Political', 'Economic', 'Social', 'Legal'], 3, 'Data residency regulations are Legal constraints (L in PESTLE). They are external to the organisation and directly affect how the Information and Technology dimension must be configured.'),
  ],
  summary: ['Information and Technology covers both the technology used to deliver services and the tools and data used to manage them.', 'Information governance — how data is created, stored, secured, and governed — is as important as the technology stack.', 'PESTLE factors (especially Legal and Technological) heavily influence what information practices are permissible.'],
  examTip: 'This dimension covers both the information managed by services and the technology used to deliver them. Exam questions about CMDB, monitoring tools, or AI assistants all fall here.',
};

const mod3Ch3: Chapter = {
  id: 'itil4-mod3-ch3',
  title: 'Partners and Suppliers',
  learningObjectives: [
    lo('remember', 'Student can recall what the Partners and Suppliers dimension covers in ITIL 4.'),
    lo('understand', 'Student can explain how third-party relationships and contracts affect service delivery.'),
  ],
  sections: [
    sec('itil4-mod3-ch3-s1', 'Third-Party Relationships', 'The Partners and Suppliers dimension covers the relationships an organisation has with other organisations involved in service design, development, delivery, and support. Almost no organisation delivers services entirely in-house — cloud providers, software vendors, managed service providers, and contractors all contribute. Each relationship needs governance to ensure that external dependencies do not become unmanaged risks.'),
    sec('itil4-mod3-ch3-s2', 'Contracts and Agreements', 'The degree of reliance on external suppliers varies widely. Some organisations prefer to keep critical capabilities in-house (insourcing); others outsource heavily. ITIL 4 does not prescribe which approach is better — it requires that supplier relationships be managed deliberately, with clear contracts, measurable performance expectations, and defined escalation paths so that failures are visible and actionable.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch3-fc1', 'Service integration and management (SIAM)', 'A management methodology for organisations that use multiple service providers — it coordinates them to deliver seamless end-to-end services to the consumer.'),
    fc('itil4-mod3-ch3-fc2', 'Supplier management', 'The practice of ensuring an organisation\'s suppliers and their performances are managed appropriately to support the provisioning of seamless quality products and services.'),
    fc('itil4-mod3-ch3-fc3', 'Outsourcing', 'Transferring the delivery of a service or function to an external organisation. Reduces internal costs and complexity but introduces supplier risk and dependency.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch3-kc1', 'An organisation uses five different cloud providers and a managed service provider for its network. Which dimension of the Four Dimensions Model is MOST relevant to managing these relationships?', ['Organizations and People', 'Information and Technology', 'Partners and Suppliers', 'Value Streams and Processes'], 2, 'Relationships with external providers — cloud vendors, MSPs, contractors — belong to Partners and Suppliers. This dimension governs how those relationships are structured, contracted, and overseen to ensure service continuity.'),
    kc('itil4-mod3-ch3-kc2', 'Which of the following is a risk of heavy reliance on a single external supplier?', ['Improved service quality', 'Reduced operational complexity', 'Vendor lock-in limiting the organisation\'s flexibility', 'Lower total cost of ownership'], 2, 'Single-supplier dependency creates vendor lock-in — the organisation may struggle to switch providers, negotiate fair terms, or continue operating if the supplier fails. This is a key Partners and Suppliers risk to manage proactively.'),
  ],
  summary: ['Partners and Suppliers covers all external relationships that contribute to service design, delivery, and support.', 'Supplier relationships require deliberate governance: contracts, SLAs, performance monitoring, and escalation paths.', 'Heavy reliance on a single supplier creates vendor lock-in risk; SIAM helps manage multi-supplier environments.'],
  examTip: 'Sourcing strategy and contract management live in this dimension. If a scenario mentions a cloud vendor, SaaS platform, or outsourcing decision, think Partners and Suppliers.',
};

const mod3Ch4: Chapter = {
  id: 'itil4-mod3-ch4',
  title: 'Value Streams and Processes',
  learningObjectives: [
    lo('remember', 'Student can recall the definition of a value stream in ITIL 4.'),
    lo('understand', 'Student can explain how processes within value streams enable efficient service delivery.'),
  ],
  sections: [
    sec('itil4-mod3-ch4-s1', 'Value Streams', 'The Value Streams and Processes dimension defines how an organisation\'s activities are organised to create value. A value stream is a series of steps an organisation undertakes to create and deliver products and services to a consumer — from the initial trigger through to the point of value realisation. Value streams span multiple processes and often cross departmental boundaries, which means optimising a single department\'s process in isolation frequently misses the bigger picture.'),
    sec('itil4-mod3-ch4-s2', 'Processes and Procedures', 'Mapping value streams reveals waste — steps that consume time or resources without adding value to the consumer. Lean thinking (eliminate waste) and Agile (deliver incrementally) both apply directly to this dimension. ITIL 4 encourages organisations to design value streams that are efficient, visible, and adaptable rather than optimising individual processes in isolation, which can create local improvements at the expense of end-to-end flow.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch4-fc1', 'Value stream', 'A series of steps an organisation undertakes to create and deliver products and services to consumers — includes all activities from the initial trigger to the point of value realisation.'),
    fc('itil4-mod3-ch4-fc2', 'Process', 'A set of interrelated or interacting activities that transforms inputs into outputs. Processes have defined triggers, inputs, outputs, and outcomes — and are components within a broader value stream.'),
    fc('itil4-mod3-ch4-fc3', 'Waste (Lean)', 'Any activity that consumes resources without creating value for the consumer. Types include overproduction, waiting, unnecessary transport, overprocessing, excess inventory, unnecessary motion, and defects.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch4-kc1', 'A change goes through 12 approval steps before deployment. Eight of the steps add no value and exist due to outdated policy. Which concept BEST describes these eight steps?', ['Configuration items', 'Value streams', 'Waste', 'Service components'], 2, 'Steps that consume resources without adding value are waste — a Lean concept embraced by ITIL 4 in the Value Streams and Processes dimension. Identifying and eliminating such waste is a key continual improvement activity.'),
    kc('itil4-mod3-ch4-kc2', 'What is the difference between a value stream and a process in ITIL 4?', ['A value stream is a type of process used only in Agile environments', 'A process defines a series of steps; a value stream is a single step within a process', 'A value stream is a series of steps that creates end-to-end value for a consumer; a process transforms specific inputs into outputs within that stream', 'There is no difference — the terms are interchangeable in ITIL 4'], 2, 'Value streams are end-to-end sequences that span multiple processes. Processes are narrower — they define specific input/output transformations. A value stream for "deploy new feature" may include processes for change enablement, release management, and testing.'),
  ],
  summary: ['Value Streams and Processes defines how activities are organised to create and deliver value — from trigger to consumer realisation.', 'A value stream spans multiple processes and often crosses departmental boundaries.', 'Lean thinking (eliminate waste) and Agile (deliver incrementally) apply directly to this dimension.'],
  examTip: 'Value streams span the entire flow from demand to value realisation. Processes are components within that flow. Do not confuse the two in scenario-based questions.',
};

const module3: Module = {
  id: 'itil4-mod3',
  title: 'Four Dimensions',
  description: 'The four perspectives that must all be balanced for successful service management: Organizations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.',
  examWeight: 4,
  chapters: [mod3Ch1, mod3Ch2, mod3Ch3, mod3Ch4],
};

// ---------------------------------------------------------------------------
// Module 4 — Guiding Principles
// ---------------------------------------------------------------------------

const mod4Ch1: Chapter = {
  id: 'itil4-mod4-ch1',
  title: 'Focus on Value',
  learningObjectives: [
    lo('remember', 'Student can recall that "Focus on Value" is one of the seven ITIL 4 guiding principles.'),
    lo('understand', 'Student can explain how to apply the "Focus on Value" principle to service management decisions.'),
  ],
  sections: [
    sec('itil4-mod4-ch1-s1', 'What the Principle Means', 'Every activity, every decision, and every improvement initiative should link back to value for a stakeholder. "Focus on value" means asking "who benefits from this, and how?" before beginning any work. If an activity cannot be connected to a stakeholder outcome, it is a candidate for elimination — it exists for its own sake rather than for the people the organisation serves.'),
    sec('itil4-mod4-ch1-s2', 'Applying the Principle', 'Value is context-dependent — what is valuable to a CFO (cost reduction) may differ from what is valuable to an end user (ease of use) or a regulator (auditability). The principle requires understanding stakeholder perspectives before defining what "value" means for any given service or initiative. Starting an improvement without this understanding risks optimising for the wrong stakeholder or the wrong measure entirely.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch1-fc1', 'Focus on value', 'Guiding Principle 1: everything the organisation does should link, directly or indirectly, to value for the stakeholders.'),
    fc('itil4-mod4-ch1-fc2', 'Stakeholder', 'A person who has an interest in an organisation, product, or service. Stakeholders include customers, users, sponsors, employees, suppliers, and regulators.'),
    fc('itil4-mod4-ch1-fc3', 'Value (guiding principle application)', 'Not just financial return — value includes user experience, risk reduction, regulatory compliance, or strategic positioning, depending on the stakeholder\'s perspective.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch1-kc1', 'A team spends two hours producing a weekly report that no one reads. Which guiding principle suggests this should be stopped?', ['Start where you are', 'Focus on value', 'Optimise and automate', 'Keep it simple and practical'], 1, 'Focus on value: if no stakeholder is benefiting from the report, it has no value and should be eliminated. This principle drives the "does this serve a stakeholder outcome?" question for every activity.'),
    kc('itil4-mod4-ch1-kc2', 'According to the "Focus on value" principle, which action should come FIRST when starting a new service improvement?', ['Map the current process steps', 'Identify who benefits and how', 'Purchase the right tools', 'Train the team on new procedures'], 1, 'Before improving anything, establish who the stakeholders are and what value they expect. Without this, improvements may be technically correct but miss what matters to the people they affect.'),
  ],
  summary: ['Every activity should trace back to a stakeholder outcome — if it cannot, it is a candidate for elimination.', 'Value is context-dependent: understand stakeholder perspectives before defining what "valuable" means.', 'The "Focus on value" principle is the lens through which all other principles are applied.'],
  examTip: '"Focus on value" questions often ask what to do FIRST — the answer is almost always "understand stakeholder needs/value" before designing solutions.',
};

const mod4Ch2: Chapter = {
  id: 'itil4-mod4-ch2',
  title: 'Start Where You Are',
  learningObjectives: [
    lo('remember', 'Student can recall the "Start Where You Are" guiding principle.'),
    lo('understand', 'Student can explain why assessing the current state before redesigning processes saves time and waste.'),
  ],
  sections: [
    sec('itil4-mod4-ch2-s1', 'Assess Before Redesigning', 'Before designing a new solution, assess what already exists. Existing processes, tools, and relationships have value — discarding them wholesale is wasteful and risky. Reuse, improve, and build on current capabilities before investing in new ones, because the cost of replacing something that was already working is often invisible until it is too late.'),
    sec('itil4-mod4-ch2-s2', 'Measurement and Observation', '"Start where you are" requires honest measurement of the current state — not assuming it is broken, and not assuming it is fine. Direct observation is more reliable than secondhand reports, because what people document and what they actually do often diverge. Baseline current performance before making changes so that improvements can be measured against a known starting point.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch2-fc1', 'Start where you are', 'Guiding Principle 2: do not start from scratch unnecessarily — assess the current state, understand what already works, and build from there.'),
    fc('itil4-mod4-ch2-fc2', 'Baseline', 'A snapshot of current performance used as a reference point to measure the effect of improvements.'),
    fc('itil4-mod4-ch2-fc3', 'Direct observation', 'Gathering evidence by watching the process in action, rather than relying on reports or assumptions — key to accurate current-state assessment.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch2-kc1', 'An organisation wants to improve its change process. Following "Start where you are", what should it do FIRST?', ['Implement a new ITSM tool immediately', 'Assess the current change process to understand what works and what does not', 'Adopt another organisation\'s change process as a template', 'Remove all existing change controls and rebuild from scratch'], 1, 'Assess before acting. The current process may have working elements worth preserving. Starting from scratch without assessment wastes existing investment and risks losing what already works.'),
    kc('itil4-mod4-ch2-kc2', 'Why does "Start where you are" recommend direct observation rather than relying on reports?', ['Reports are always inaccurate', 'Direct observation reveals actual practice, which may differ significantly from documented procedures', 'Reports cost more to produce than observations', 'Documentation is never available in real organisations'], 1, 'What people document and what they actually do often diverge. Direct observation reveals the true current state — including informal workarounds, undocumented steps, and real bottlenecks that reports hide.'),
  ],
  summary: ['Assess the current state before designing improvements — existing processes and tools often have value worth preserving.', 'Use direct observation and baselines, not assumptions, to understand where you actually are.', 'Start where you are reduces waste, lowers risk, and accelerates improvement by building on what works.'],
  examTip: 'This principle prevents the "boil the ocean" mistake. When a question describes a rushed complete replacement, "Start where you are" is likely the violated principle.',
};

const mod4Ch3: Chapter = {
  id: 'itil4-mod4-ch3',
  title: 'Progress Iteratively with Feedback',
  learningObjectives: [
    lo('remember', 'Student can recall the "Progress Iteratively with Feedback" guiding principle.'),
    lo('understand', 'Student can explain how iterative delivery and feedback loops reduce risk in service improvement.'),
  ],
  sections: [
    sec('itil4-mod4-ch3-s1', 'Iteration Over Big Bang', 'Do not try to deliver everything at once. Break work into smaller iterations that each deliver value, and after each iteration gather feedback and adjust direction. This applies to service improvements, project delivery, and practice development alike. Iterations reduce the risk of large-scale failure by surfacing problems early, when they are still cheap to fix.'),
    sec('itil4-mod4-ch3-s2', 'Feedback Mechanisms', 'Feedback loops are essential — without them, iterations improve things in the wrong direction. Feedback comes from users, metrics, stakeholders, and the service itself. ITIL 4 aligns this principle with Agile and DevOps practices such as sprints, continuous deployment, and retrospectives, recognising that the speed of learning is as important as the speed of delivery.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch3-fc1', 'Progress iteratively with feedback', 'Guiding Principle 3: work in smaller increments, deliver value early, and use feedback after each iteration to guide the next.'),
    fc('itil4-mod4-ch3-fc2', 'Iteration', 'A time-boxed cycle of work that delivers a defined increment of value. Enables course correction based on real-world feedback rather than assumptions made at the start.'),
    fc('itil4-mod4-ch3-fc3', 'Feedback loop', 'A mechanism by which outputs or outcomes are measured and the information is fed back to inform the next cycle of activity — essential to making iterations useful.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch3-kc1', 'Which of the following BEST illustrates "Progress iteratively with feedback"?', ['Designing the complete solution before any testing begins', 'Deploying all service improvements simultaneously to minimise disruption', 'Releasing a minimum viable improvement, measuring its impact, then refining it', 'Gathering all stakeholder requirements before starting any work'], 2, 'Minimum viable improvement + measure + refine = iterative with feedback. Designing everything before testing, or deploying everything simultaneously, violates the iterative principle by delaying feedback until it is too expensive to change course.'),
    kc('itil4-mod4-ch3-kc2', 'Why is the feedback component of this principle critical?', ['Feedback proves that the work is finished', 'Without feedback, iterations may improve the service in the wrong direction', 'Feedback replaces the need for planning', 'Stakeholder feedback is legally required under ISO standards'], 1, 'Iterations without feedback are just small waterfalls. The feedback component ensures each iteration is steered by real evidence of what is working and what is not — without it, you iterate quickly toward the wrong destination.'),
  ],
  summary: ['Break improvement work into small, value-delivering iterations rather than large-bang implementations.', 'Gather feedback after every iteration to course-correct before investing further in the wrong direction.', 'This principle aligns with Agile, Scrum, Kanban, and DevOps delivery practices.'],
  examTip: 'When a question describes a failed large implementation with no testing or feedback, "Progress iteratively with feedback" is the principle that was violated.',
};

const mod4Ch4: Chapter = {
  id: 'itil4-mod4-ch4',
  title: 'Collaborate and Promote Visibility',
  learningObjectives: [
    lo('remember', 'Student can recall the "Collaborate and Promote Visibility" guiding principle.'),
    lo('understand', 'Student can explain why transparency and cross-team collaboration improve service outcomes.'),
  ],
  sections: [
    sec('itil4-mod4-ch4-s1', 'Breaking Down Silos', 'Working together with stakeholders across boundaries produces better outcomes than siloed effort. Collaboration includes customers, users, teams, suppliers, and leadership. The "collaborate" part means actively seeking input and involvement — not just informing people after decisions are made, which generates mistrust and misses the knowledge that only those closer to the work possess.'),
    sec('itil4-mod4-ch4-s2', 'Making Work Visible', 'Visibility means making work, decisions, and progress transparent to stakeholders. Hidden work creates mistrust — when people cannot see what is happening, they fill the gap with narratives, usually negative ones. Visible work enables accountability, faster feedback, and better decisions, and it surfaces risks earlier when they are still small enough to manage without escalation.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch4-fc1', 'Collaborate and promote visibility', 'Guiding Principle 4: work together across boundaries and make work, decisions, and progress visible to stakeholders.'),
    fc('itil4-mod4-ch4-fc2', 'Silo', 'An organisational pattern where teams work in isolation, withholding information from other teams — a barrier to collaboration and effective value delivery.'),
    fc('itil4-mod4-ch4-fc3', 'Transparency', 'Making information, decisions, and progress openly visible to stakeholders so they can understand, trust, and engage with what is happening.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch4-kc1', 'A change is approved by the change board without consulting the service desk or users. The change causes unexpected outages. Which guiding principle was most clearly violated?', ['Focus on value', 'Start where you are', 'Collaborate and promote visibility', 'Keep it simple and practical'], 2, 'Not consulting affected parties (service desk, users) before a change violates the collaborate part of this principle. Collaboration would have surfaced the risks that led to the outage — those closest to operations knew the impact the board did not see.'),
    kc('itil4-mod4-ch4-kc2', 'Why does "Promote visibility" matter in service management?', ['It allows managers to micromanage team members', 'It ensures all stakeholders can see progress, decisions, and risks — enabling better decisions and trust', 'It replaces the need for formal reporting', 'Visibility is required by ITIL certification standards'], 1, 'Visible work enables informed decisions, faster feedback, and trust. When stakeholders cannot see what is happening, they fill the gap with assumptions — usually leading to worse outcomes and eroded confidence in IT.'),
  ],
  summary: ['Collaboration means actively involving stakeholders in decisions, not just informing them after the fact.', 'Visibility makes work, risks, and progress transparent — building trust and enabling faster, better decisions.', 'Silos and hidden work are the two antipatterns this principle is designed to eliminate.'],
  examTip: 'Any scenario where a team makes a change without consulting affected parties is violating "Collaborate and promote visibility."',
};

const mod4Ch5: Chapter = {
  id: 'itil4-mod4-ch5',
  title: 'Think and Work Holistically',
  learningObjectives: [
    lo('remember', 'Student can recall the "Think and Work Holistically" guiding principle.'),
    lo('understand', 'Student can explain why optimising one part of a system without considering others can cause overall harm.'),
  ],
  sections: [
    sec('itil4-mod4-ch5-s1', 'System Thinking', 'No service, process, or practice works in isolation. Changes in one area produce effects elsewhere — sometimes intended, sometimes not. Thinking holistically means understanding how components interconnect before acting. Optimising a single process at the expense of the whole system is one of the most common failure modes in IT service management, and the SVS exists precisely to provide a whole-system view.'),
    sec('itil4-mod4-ch5-s2', 'Avoiding Local Optimisation', 'ITIL 4 uses the SVS as a holistic model — it shows how guiding principles, governance, practices, value chain, and continual improvement all connect. Working holistically means applying this whole-system view when designing, improving, or operating services. A metric that improves in one team while degrading the end-to-end consumer experience is not an improvement — it is a local optimisation that harms the system.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch5-fc1', 'Think and work holistically', 'Guiding Principle 5: understand how all parts of the organisation and service interact — optimise the whole system, not individual components in isolation.'),
    fc('itil4-mod4-ch5-fc2', 'System thinking', 'An approach that examines how components of a system interrelate and work together over time, rather than focusing on isolated parts — the intellectual foundation of this principle.'),
    fc('itil4-mod4-ch5-fc3', 'Unintended consequence', 'An effect of an action that was not anticipated — often produced by optimising one part of a system without considering its impact on the whole.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch5-kc1', 'A service desk reduces its call handling time by 40% by providing shorter answers. Repeat contacts increase by 60%. Which principle was violated?', ['Focus on value', 'Think and work holistically', 'Start where you are', 'Optimise and automate'], 1, 'Optimising call handling time in isolation (a single metric) damaged the broader system (first-contact resolution, overall contact volume). Think and work holistically requires considering system-wide effects, not just local metrics — the repeat contacts are the unintended consequence.'),
    kc('itil4-mod4-ch5-kc2', 'How does the Service Value System support "Think and work holistically"?', ['It provides a single process for all ITIL activities', 'It shows how all ITIL components — principles, governance, practices, value chain, and continual improvement — work together', 'It replaces the need for individual practices', 'It standardises how all services are delivered'], 1, 'The SVS is ITIL 4\'s holistic model. It shows the interconnections between all components so practitioners can see the whole system before making changes, reducing the risk of unintended consequences.'),
  ],
  summary: ['Optimising one process or metric in isolation often damages the broader system — always consider system-wide effects.', 'The SVS is ITIL 4\'s tool for holistic thinking — it maps how all components interconnect.', 'Unintended consequences are a signal that holistic thinking was absent from the design process.'],
  examTip: 'When a question describes a metric improvement causing a broader problem, "Think and work holistically" is almost certainly the answer.',
};

const mod4Ch6: Chapter = {
  id: 'itil4-mod4-ch6',
  title: 'Keep It Simple and Practical',
  learningObjectives: [
    lo('remember', 'Student can recall the "Keep It Simple and Practical" guiding principle.'),
    lo('understand', 'Student can explain how complexity in processes and procedures can reduce effectiveness.'),
  ],
  sections: [
    sec('itil4-mod4-ch6-s1', 'Eliminating Waste', 'Use the minimum number of steps, approvals, and controls needed to achieve an objective. Every added step has a cost — in time, confusion, and the cognitive load of the people who must follow it. When designing processes or practices, start with the simplest version that works and add complexity only when there is evidence that it is needed to achieve the stated outcome.'),
    sec('itil4-mod4-ch6-s2', 'Minimum Viable Process', '"Practical" means designed for the people who will use it. A process that works perfectly on paper but is ignored in practice provides no value. ITIL 4 encourages practitioners to involve the people who will follow a process in its design — they will identify unnecessary steps that those designing from a distance cannot see, and they will be more likely to follow something they helped create.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch6-fc1', 'Keep it simple and practical', 'Guiding Principle 6: use the minimum number of steps and controls needed to achieve the objective. Eliminate anything that does not add value.'),
    fc('itil4-mod4-ch6-fc2', 'Exception-based management', 'A management approach that focuses attention only on cases that deviate from the norm, rather than requiring approval for every action — keeps processes lean and reserves human judgement for situations that genuinely need it.'),
    fc('itil4-mod4-ch6-fc3', 'Minimum viable practice', 'The simplest version of a practice that delivers value — a starting point to iterate from, not a final destination. Add complexity only when evidence shows it is needed.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch6-kc1', 'A change process requires 9 approvals for a standard change that has been pre-approved as low-risk. Which principle does this violate?', ['Focus on value', 'Progress iteratively with feedback', 'Keep it simple and practical', 'Collaborate and promote visibility'], 2, 'Pre-approved standard changes should not require multiple approvals — that complexity adds no value and slows delivery. "Keep it simple and practical" demands removing unnecessary steps, especially for well-understood, low-risk activities.'),
    kc('itil4-mod4-ch6-kc2', 'Why should the people who will USE a process be involved in designing it?', ['To comply with ITIL certification requirements', 'They will follow it most closely and can identify unnecessary steps that designers might miss', 'To ensure the process meets ISO standards', 'They have authority to approve process designs'], 1, 'Practitioners using a process daily see what works and what does not in reality. Involving them in design surfaces practical obstacles and eliminates steps that are unnecessary in real-world contexts — this is a direct application of "keep it practical."'),
  ],
  summary: ['Every step, approval, and control has a cost — add complexity only when there is evidence it adds value.', 'Involve the people who will use a process in its design — they reveal practical obstacles that designers miss.', 'Start with the simplest version that works and iterate toward greater sophistication only when needed.'],
  examTip: 'Any question describing excessive approvals, redundant steps, or bureaucracy is likely testing "Keep it simple and practical."',
};

const mod4Ch7: Chapter = {
  id: 'itil4-mod4-ch7',
  title: 'Optimize and Automate',
  learningObjectives: [
    lo('remember', 'Student can recall the "Optimize and Automate" guiding principle.'),
    lo('understand', 'Student can explain why optimisation must precede automation to avoid automating inefficiency.'),
  ],
  sections: [
    sec('itil4-mod4-ch7-s1', 'Optimise First', 'Optimisation means making something as effective and efficient as possible. Before automating anything, optimise it — automating a broken process just produces broken results faster and at greater scale. Optimisation uses techniques from Lean (eliminate waste), Agile (iterate), and DevOps (continuous improvement) to find the best version of a process before applying technology to lock it in.'),
    sec('itil4-mod4-ch7-s2', 'Appropriate Use of Automation', 'Automation removes repetitive human effort, enabling people to focus on higher-value work that requires judgement, empathy, or creativity. ITIL 4 recommends automating only processes that are well-understood, stable, and optimised — because premature automation locks in bad practices and creates technical debt that is expensive and disruptive to unwind later.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch7-fc1', 'Optimise and automate', 'Guiding Principle 7: first make a process as effective and efficient as possible, then use technology to automate it — in that order.'),
    fc('itil4-mod4-ch7-fc2', 'Automation', 'The use of technology to perform tasks with minimal human intervention — effective only when applied to well-understood, stable, optimised processes.'),
    fc('itil4-mod4-ch7-fc3', 'Technical debt', 'The implied cost of rework resulting from shortcuts taken during development. Automating a flawed process creates technical debt by locking in the flaw at machine speed and scale.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch7-kc1', 'An organisation decides to automate its incident classification process. The process currently has many unnecessary steps. What should they do FIRST?', ['Implement the automation immediately to save time', 'Automate only the unnecessary steps first', 'Optimise the process by removing unnecessary steps, then automate', 'Hire a consultant to design the automation'], 2, 'Automate AFTER optimising. Automating a process with unnecessary steps makes those steps run faster — but they still produce no value. Remove waste first, then automate the lean version so the efficiency gains are real.'),
    kc('itil4-mod4-ch7-kc2', 'What is the risk of automating a process that has not been optimised?', ['The automation will fail to deploy', 'The automated process may produce wrong results faster and at greater scale', 'Automation always improves processes regardless of their design', 'Optimisation is not required before automation in ITIL 4'], 1, 'Automation amplifies whatever is in the process. A flawed process, automated, produces flawed outputs at machine speed and scale — often harder to catch and correct than manual errors because the volume is so much higher.'),
  ],
  summary: ['Optimise first, then automate — applying technology to a broken process makes it break faster at scale.', 'Automation frees humans for higher-value work but requires stable, well-understood processes to be effective.', 'Technical debt accumulates when automation is applied prematurely to unoptimised processes.'],
  examTip: 'The correct sequence is always: optimise then automate. Any answer suggesting automation without prior optimisation is wrong.',
};

const module4: Module = {
  id: 'itil4-mod4',
  title: 'Guiding Principles',
  description: 'The seven ITIL 4 guiding principles that inform all decisions and actions in service management.',
  examWeight: 7,
  chapters: [mod4Ch1, mod4Ch2, mod4Ch3, mod4Ch4, mod4Ch5, mod4Ch6, mod4Ch7],
};

// ---------------------------------------------------------------------------
// Module 5 — Service Value System
// ---------------------------------------------------------------------------

const mod5Ch1: Chapter = {
  id: 'itil4-mod5-ch1',
  title: 'SVS Overview',
  learningObjectives: [
    lo('remember', 'Student can recall the five components of the ITIL 4 Service Value System.'),
    lo('understand', 'Student can explain how the SVS shows how an organisation converts demand into value.'),
  ],
  sections: [
    sec('itil4-mod5-ch1-s1', 'SVS Components', 'The Service Value System (SVS) is ITIL 4\'s overarching model — it shows how all components and activities of an organisation work together as a system to enable value creation. The SVS has five components: Guiding Principles, Governance, Service Value Chain, Practices, and Continual Improvement. These are not sequential steps; they operate simultaneously and reinforce each other, with the Service Value Chain at the centre.'),
    sec('itil4-mod5-ch1-s2', 'How the SVS Works', 'The SVS input is opportunity and demand — what triggers service activity. The SVS output is value for the organisation\'s stakeholders. At the centre of the SVS is the Service Value Chain, which is the set of interconnected activities that transforms demand into value. The guiding principles, governance, and continual improvement surround and enable the Service Value Chain, and the 34 practices provide the specific capabilities.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch1-fc1', 'Service Value System (SVS)', 'The ITIL 4 model showing how all components (guiding principles, governance, service value chain, practices, continual improvement) work together to enable value creation. Input: opportunity and demand. Output: value.'),
    fc('itil4-mod5-ch1-fc2', 'SVS components', 'Five: Guiding Principles, Governance, Service Value Chain, Practices, and Continual Improvement. All operate simultaneously — the SVS is a system, not a sequential process.'),
    fc('itil4-mod5-ch1-fc3', 'Opportunity and demand', 'The inputs to the SVS — opportunities are possibilities to add value; demand is the need or desire for products and services from internal and external consumers.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch1-kc1', 'What are the FIVE components of the ITIL 4 Service Value System?', ['Strategy, Design, Transition, Operation, Improvement', 'Guiding Principles, Governance, Service Value Chain, Practices, Continual Improvement', 'Incident, Problem, Change, Service Request, Service Desk', 'Focus on value, Start where you are, Progress iteratively, Collaborate, Optimise'], 1, 'The five SVS components are Guiding Principles, Governance, Service Value Chain, Practices, and Continual Improvement. Option A is the ITIL v3 service lifecycle. Option C is a list of practices. Option D is some of the guiding principles.'),
    kc('itil4-mod5-ch1-kc2', 'What are the INPUT and OUTPUT of the Service Value System?', ['Input: processes; Output: SLAs', 'Input: opportunity and demand; Output: value', 'Input: incidents; Output: resolved tickets', 'Input: governance; Output: practices'], 1, 'The SVS takes opportunity (possibilities to add value) and demand (consumer needs) as inputs, and produces value for stakeholders as its output. Everything within the SVS works to convert that input to that output.'),
  ],
  summary: ['The SVS has five components: Guiding Principles, Governance, Service Value Chain, Practices, and Continual Improvement.', 'Inputs: opportunity and demand. Output: value for stakeholders.', 'The SVS is a system — all components operate simultaneously and reinforce each other.'],
  examTip: 'Know the five SVS components by name. The exam tests them directly. Inputs are opportunity and demand; the output is value.',
};

const mod5Ch2: Chapter = {
  id: 'itil4-mod5-ch2',
  title: 'Opportunity and Demand',
  learningObjectives: [
    lo('remember', 'Student can recall that opportunity and demand are the inputs to the SVS.'),
    lo('understand', 'Student can explain the difference between opportunity (external possibility) and demand (stakeholder need).'),
  ],
  sections: [
    sec('itil4-mod5-ch2-s1', 'Demand as a Trigger', 'Opportunity represents the possibilities available to an organisation to add value — arising from new technology, changing customer needs, regulatory changes, or competitive pressure. Organisations that identify and act on opportunities grow; those that ignore them stagnate. Understanding opportunity requires looking outward as well as inward.'),
    sec('itil4-mod5-ch2-s2', 'Opportunity', 'Demand is the need or desire for products and services from consumers. Understanding demand enables capacity planning, resource allocation, and service design. Value is what the SVS exists to produce — perceived benefits, usefulness, and importance experienced by stakeholders when demand is met through service delivery. Value is realised through use, not just through delivery.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch2-fc1', 'Opportunity', 'A possibility to add value for stakeholders or to improve the organisation — one of the two inputs to the ITIL 4 Service Value System.'),
    fc('itil4-mod5-ch2-fc2', 'Demand', 'The need or desire for products and services from internal or external consumers — the other input to the SVS.'),
    fc('itil4-mod5-ch2-fc3', 'Value realisation', 'The point at which a stakeholder actually receives the benefit from a service — value is realised through use, not just through delivery.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch2-kc1', 'What distinguishes an "opportunity" from "demand" as SVS inputs?', ['Opportunity is external; demand is always internal', 'Opportunity represents possibilities to add value; demand is the consumer\'s need for products or services', 'Demand drives opportunities; they are the same thing', 'Opportunity is a type of service request'], 1, 'Opportunity = potential value not yet captured (e.g., a new market, a technology capability). Demand = active consumer need (e.g., users requesting a service). Both feed the SVS but they are distinct inputs requiring different responses.'),
    kc('itil4-mod5-ch2-kc2', 'When is value realised according to ITIL 4?', ['When the service is designed and documented', 'When the service passes acceptance testing', 'When a consumer uses the service and experiences the benefit', 'When the SLA is signed'], 2, 'Value is realised through use, not just through delivery. A perfectly designed service that no one uses creates no value. The SVS exists to convert demand into value — that conversion happens at the moment of consumer benefit, not provider delivery.'),
  ],
  summary: ['Opportunity = possibilities to add value; Demand = active consumer needs — both are SVS inputs.', 'Value is realised by consumers through use — it is not produced by the provider in isolation.', 'Understanding demand enables better capacity planning, resource allocation, and service design decisions.'],
  examTip: 'Demand is reactive (a need exists now); opportunity is proactive (there is a chance to improve). Both are valid SVS inputs.',
};

const mod5Ch3: Chapter = {
  id: 'itil4-mod5-ch3',
  title: 'Governance',
  learningObjectives: [
    lo('remember', 'Student can recall the role of governance in the ITIL 4 SVS.'),
    lo('understand', 'Student can explain how governance directs and controls organisational activity in service management.'),
  ],
  sections: [
    sec('itil4-mod5-ch3-s1', 'What Governance Does', 'Governance in the SVS is the means by which an organisation is directed and controlled. It includes the policies, practices, and decisions made at the leadership level to guide the organisation toward its objectives. Governance sets the direction and ensures accountability — it answers the question "are we doing the right things?" while management answers "are we doing things right?"'),
    sec('itil4-mod5-ch3-s2', 'Governance vs Management', 'In ITIL 4, governance applies to the whole SVS — it shapes how the guiding principles are applied, which practices are adopted, and how the service value chain operates. Governance is not just compliance — it is the mechanism that ensures all SVS components work toward the same goals and that the organisation is accountable to its stakeholders for the outcomes it delivers.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch3-fc1', 'Governance', 'The means by which an organisation is directed and controlled — in ITIL 4, governance shapes how all SVS components work toward organisational objectives.'),
    fc('itil4-mod5-ch3-fc2', 'Governing body', 'The person or group responsible for directing and controlling the organisation at the highest level — e.g., a board of directors or executive committee.'),
    fc('itil4-mod5-ch3-fc3', 'Policy', 'A set of formal rules or guidelines that direct behaviour within an organisation — a key governance tool for ensuring consistent decision-making across the SVS.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch3-kc1', 'Where does governance sit within the ITIL 4 Service Value System?', ['Inside the Service Value Chain as one of its activities', 'As one of the five SVS components, directing and controlling the whole system', 'As part of the Continual Improvement component', 'As a guiding principle'], 1, 'Governance is one of the five SVS components. It directs and controls the system from above — it is not a value chain activity or a guiding principle, though it interacts with both.'),
    kc('itil4-mod5-ch3-kc2', 'Which statement BEST describes governance in ITIL 4?', ['Governance is only about regulatory compliance', 'Governance is the mechanism by which an organisation is directed and controlled toward its objectives', 'Governance applies only to financial decisions', 'Governance is a synonym for management'], 1, 'Governance = direction and control of the organisation as a whole. It is broader than compliance (which is one governance concern) and distinct from management (which implements governance decisions operationally).'),
  ],
  summary: ['Governance directs and controls the organisation — it is one of the five SVS components.', 'Governance shapes which practices are adopted, how principles are applied, and how the value chain operates.', 'Governance is not just compliance — it aligns all SVS activity toward organisational objectives.'],
  examTip: 'Governance vs management is a common exam trap. Governance = board/executive direction. Management = operational execution. The same body can do both but the activities are distinct.',
};

const mod5Ch4: Chapter = {
  id: 'itil4-mod5-ch4',
  title: 'Continual Improvement',
  learningObjectives: [
    lo('remember', 'Student can recall the seven steps of the Continual Improvement Model.'),
    lo('understand', 'Student can explain how continual improvement applies to the SVS and to individual practices.'),
  ],
  sections: [
    sec('itil4-mod5-ch4-s1', 'The Continual Improvement Model', 'Continual improvement is both an SVS component and a practice. As a component, it is the organisational commitment to improving services, practices, and capabilities at every level, continuously. ITIL 4 uses a seven-step model: What is the vision? Where are we now? Where do we want to be? How do we get there? Take action. Did we get there? How do we keep the momentum going? This model applies to any improvement initiative, from fixing a single process to transforming an entire service portfolio.'),
    sec('itil4-mod5-ch4-s2', 'Embedding Improvement', 'Continual improvement applies to all SVS components — principles, governance, practices, and the value chain itself. It is not a separate project or a quarterly review — it is embedded in everyday work. The improvement register is the practical tool for capturing opportunities so they are not lost between identification and implementation. Every employee is a potential source of improvement ideas, not just management.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch4-fc1', 'Continual Improvement Model', 'ITIL 4\'s seven-step improvement cycle: Vision → Current state → Target state → Plan → Act → Check → Sustain. Applies to any improvement initiative at any scale.'),
    fc('itil4-mod5-ch4-fc2', 'Continual improvement', 'An ongoing organisational practice of improving services, practices, and all SVS components incrementally over time — embedded in every layer of the SVS, not a one-time project.'),
    fc('itil4-mod5-ch4-fc3', 'Improvement register', 'A repository used to track improvement initiatives and opportunities — ensures nothing gets lost between identification and implementation.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch4-kc1', 'According to ITIL 4, continual improvement applies to:', ['Only service operations processes', 'The Service Value Chain activities only', 'All SVS components — guiding principles, governance, practices, value chain, and improvement itself', 'Only the seven key ITIL practices'], 2, 'Continual improvement is embedded at every level of the SVS. It applies to practices, governance, guiding principles application, the service value chain, and even the continual improvement practice itself.'),
    kc('itil4-mod5-ch4-kc2', 'What is the FIRST step of the ITIL 4 Continual Improvement Model?', ['Where are we now?', 'How do we get there?', 'What is the vision?', 'Did we get there?'], 2, 'The model starts with vision — understanding the overall direction and objectives before assessing the current state. Without a clear vision, you cannot determine whether current state is good or bad, or define what "better" looks like.'),
  ],
  summary: ['Continual improvement is both an SVS component and one of the 34 ITIL practices.', 'The seven-step model: Vision → Current state → Target → Plan → Act → Check → Sustain.', 'An improvement register captures and tracks all identified improvement opportunities so none are lost.'],
  examTip: 'Know the seven steps of the Continual Improvement Model in order. The exam frequently tests the first step ("What is the vision?") because it grounds all subsequent activity in business objectives.',
};

const module5: Module = {
  id: 'itil4-mod5',
  title: 'Service Value System',
  description: 'The ITIL 4 Service Value System — its five components, how opportunity and demand flow through it, the role of governance, and how continual improvement is embedded.',
  examWeight: 5,
  chapters: [mod5Ch1, mod5Ch2, mod5Ch3, mod5Ch4],
};

// ---------------------------------------------------------------------------
// Module 6 — Service Value Chain
// ---------------------------------------------------------------------------

const mod6Ch1: Chapter = {
  id: 'itil4-mod6-ch1',
  title: 'Plan',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Plan" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain what outputs the Plan activity produces and which other activities consume them.'),
  ],
  sections: [
    sec('itil4-mod6-ch1-s1', 'Purpose of Plan', 'Plan ensures a shared understanding of the vision, current status, and improvement direction across all four dimensions. It provides direction for all other value chain activities — without effective planning, activities operate without shared purpose and resources are misallocated. Plan is not a one-time activity; it receives feedback from all other activities and updates direction continuously.'),
    sec('itil4-mod6-ch1-s2', 'Plan Inputs and Outputs', 'Plan produces: policies, portfolios of products and services, architectures, improvement plans, and performance standards. It receives inputs from all other value chain activities (feedback, performance data, demand signals) and from the SVS governance layer. The outputs of Plan flow to every other SVC activity, making it the integrating activity that gives the whole system coherence and direction.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch1-fc1', 'Service Value Chain', 'An operating model within the ITIL 4 SVS that outlines the key activities required to respond to demand and facilitate value realisation through creation and management of products and services.'),
    fc('itil4-mod6-ch1-fc2', 'Plan (SVC activity)', 'Ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organisation.'),
    fc('itil4-mod6-ch1-fc3', 'Service portfolio', 'The complete set of products and services managed by an organisation — includes services in development, live services, and retired services. A key output of the Plan activity.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch1-kc1', 'What is the PRIMARY purpose of the "Plan" activity in the Service Value Chain?', ['To approve individual changes before deployment', 'To ensure a shared understanding of vision and direction across all SVC activities', 'To manage incidents and restore services', 'To negotiate contracts with suppliers'], 1, 'Plan provides shared direction — the vision, strategy, policies, and architectures that all other activities work toward. Without Plan, activities operate in isolation without a common compass.'),
    kc('itil4-mod6-ch1-kc2', 'Which of the following is an OUTPUT of the "Plan" activity?', ['Resolved incidents', 'Deployed software components', 'Improvement plans and service portfolios', 'Supplier contracts'], 2, 'Plan produces strategic outputs: policies, portfolios, architectures, and improvement plans. Resolved incidents = Deliver and Support output. Deployed components = Obtain/Build output. Supplier contracts relate to Engage.'),
  ],
  summary: ['Plan provides shared direction across all SVC activities — vision, strategy, policies, and architectures.', 'Without effective planning, activities operate without shared purpose and resources are wasted.', 'Plan receives feedback from all other SVC activities, making it a continuous rather than one-time function.'],
  examTip: 'The six SVC activities are not a linear process — they form a flexible combination. Know each activity\'s purpose and understand that demand can enter at any activity, not just Plan.',
};

const mod6Ch2: Chapter = {
  id: 'itil4-mod6-ch2',
  title: 'Improve',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Improve" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain how the Improve activity supports continual improvement across all SVC activities.'),
  ],
  sections: [
    sec('itil4-mod6-ch2-s1', 'Purpose of Improve', 'Improve ensures continual improvement of all products, services, and practices across all SVC activities and all four SVS components. Every SVC activity has an improvement component — Improve coordinates and enables this across the whole system. The Improve activity is what makes the SVS self-correcting rather than static.'),
    sec('itil4-mod6-ch2-s2', 'Improvement Inputs', 'Improve takes inputs including performance information, stakeholder feedback, and improvement opportunities from all other activities. It produces improvement plans and improvement initiatives that feed back into Plan, and improved practices or components that feed into all activities. The relationship is bidirectional — Improve is both fed by and feeds back to everything else in the SVC.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch2-fc1', 'Improve (SVC activity)', 'Ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management.'),
    fc('itil4-mod6-ch2-fc2', 'Improvement opportunity', 'Any situation where the current state of a product, service, or practice could be changed to produce better value for stakeholders — the raw material that feeds the Improve activity.'),
    fc('itil4-mod6-ch2-fc3', 'Performance information', 'Data about how services and practices are performing — feeds into the Improve activity to identify what needs to change and to measure whether changes are working.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch2-kc1', 'Which statement about the "Improve" activity is CORRECT?', ['Improve only applies to services that have failed an SLA', 'Improve is a separate project run annually by management', 'Improve ensures continual improvement across ALL SVC activities and all SVS components', 'Improve is the same as the Continual Improvement practice'], 2, 'Improve as an SVC activity applies across all other activities — Plan, Engage, Design and Transition, Obtain/Build, and Deliver and Support all have improvement embedded through the Improve activity. It is not limited to failures or SLA breaches.'),
    kc('itil4-mod6-ch2-kc2', 'What is the relationship between the "Improve" SVC activity and the "Continual Improvement" practice?', ['They are the same thing — just different names', 'The Improve activity implements the Continual Improvement practice across the value chain', 'The Continual Improvement practice is a step within the Improve activity', 'There is no relationship — they operate independently'], 1, 'The Continual Improvement practice provides methods, tools, and guidance. The Improve SVC activity applies those tools across the value chain. Practice = the capability; Activity = where it is applied.'),
  ],
  summary: ['Improve ensures continual improvement is embedded in every SVC activity, not just in dedicated improvement projects.', 'Inputs: performance data, stakeholder feedback, improvement opportunities from all activities.', 'The Improve activity applies the Continual Improvement practice across the whole value chain.'],
  examTip: 'Every SVC activity feeds into Improve, and Improve outputs feed back to every activity. This reinforces that improvement is not a separate phase — it is embedded everywhere.',
};

const mod6Ch3: Chapter = {
  id: 'itil4-mod6-ch3',
  title: 'Engage',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Engage" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain how Engage provides understanding of stakeholder needs and fosters transparency.'),
  ],
  sections: [
    sec('itil4-mod6-ch3-s1', 'Purpose of Engage', 'Engage provides a good understanding of stakeholder needs, transparency, and continual engagement with all stakeholders. It converts stakeholder demand and opportunity into actionable inputs for the SVC. Engage touches every stakeholder relationship — customers, users, suppliers, partners, and internal teams — ensuring that the organisation\'s activities are grounded in real needs rather than assumptions.'),
    sec('itil4-mod6-ch3-s2', 'Engage Inputs and Outputs', 'Engage is also responsible for stakeholder communication about service performance, incidents, and changes. It ensures stakeholders feel heard and informed, building the trust required for long-term service relationships. Without effective Engage, other SVC activities work from assumptions rather than real stakeholder needs, producing outputs that fail to deliver value.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch3-fc1', 'Engage (SVC activity)', 'Provides a good understanding of stakeholder needs, ensures transparency, and maintains continual engagement with all stakeholders — customers, users, suppliers, partners, and internal teams.'),
    fc('itil4-mod6-ch3-fc2', 'Stakeholder engagement', 'The process of actively involving stakeholders in service decisions and communications to build trust and understanding — a core function of the Engage SVC activity.'),
    fc('itil4-mod6-ch3-fc3', 'Demand capture', 'Understanding and recording what stakeholders need from services — a key output of the Engage activity that feeds Design and Transition and Obtain/Build.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch3-kc1', 'A new enterprise client has specific requirements for a service that differ from the standard offering. Which SVC activity is PRIMARILY responsible for understanding and capturing these requirements?', ['Plan', 'Improve', 'Engage', 'Obtain/Build'], 2, 'Engage is the activity that interfaces with stakeholders to understand their needs, capture demand, and ensure requirements are properly defined before they enter Design and Transition or Obtain/Build.'),
    kc('itil4-mod6-ch3-kc2', 'Which of the following is a key output of the "Engage" activity?', ['Deployed service components', 'Improvement plans', 'Consolidated stakeholder requirements and service feedback', 'Governance policies'], 2, 'Engage produces requirements (from customers and users), feedback (on service performance), and relationship intelligence — all of which feed into Design, Plan, and Improve. Deployed components = Obtain/Build. Governance policies = Plan.'),
  ],
  summary: ['Engage is the SVC\'s interface with all stakeholders — customers, users, suppliers, and internal teams.', 'Engage captures demand, gathers feedback, and ensures stakeholders are kept informed and heard.', 'Without effective Engage, other SVC activities work from assumptions rather than real stakeholder needs.'],
  examTip: 'Engage is the customer-facing activity. When a question describes managing customer expectations or gathering requirements, Engage is usually involved.',
};

const mod6Ch4: Chapter = {
  id: 'itil4-mod6-ch4',
  title: 'Design and Transition',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Design and Transition" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain how Design and Transition ensures new services meet quality expectations.'),
  ],
  sections: [
    sec('itil4-mod6-ch4-s1', 'Purpose of Design and Transition', 'Design and Transition ensures that products and services continually meet stakeholder expectations for quality, cost, and time to market. It covers all design activities (architecture, service models, process design) and the transition of new or changed services into live operation. This activity bridges stakeholder requirements and operational reality — it is where "what is needed" becomes "what will be built and how it will run."'),
    sec('itil4-mod6-ch4-s2', 'Design and Transition Outputs', 'Design and Transition takes requirements from Engage, components from Obtain/Build, and policies from Plan. It produces solutions and designs that then go to Obtain/Build for implementation, and it works with Deliver and Support to ensure smooth handover to operations. The combined name reflects DevOps reality — design and deployment happen in tight, iterative cycles, not in separate waterfall phases.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch4-fc1', 'Design and Transition (SVC activity)', 'Ensures that products and services continually meet stakeholder expectations for quality, costs, and time to market — covering design, testing, and release to live.'),
    fc('itil4-mod6-ch4-fc2', 'Service design', 'The activity of designing services that meet stakeholder requirements — covering architecture, processes, SLAs, and supporting tools.'),
    fc('itil4-mod6-ch4-fc3', 'Transition', 'The process of moving a new or changed service into live operation — including testing, training, and handover to operational teams.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch4-kc1', 'Which SVC activity is responsible for ensuring a new cloud service meets agreed quality, cost, and time-to-market targets before going live?', ['Plan', 'Engage', 'Design and Transition', 'Deliver and Support'], 2, 'Design and Transition ensures services meet quality, cost, and time targets before release. Deliver and Support takes over after the service is live. Plan sets direction; Engage captures requirements.'),
    kc('itil4-mod6-ch4-kc2', 'Which activities provide the PRIMARY inputs to Design and Transition?', ['Only Plan and Governance', 'Engage (requirements) and Obtain/Build (components)', 'Only Deliver and Support', 'Continual Improvement and external suppliers'], 1, 'Design and Transition works with requirements from Engage (what stakeholders need) and components from Obtain/Build (what has been built). Plan sets the policies and architectures that constrain design choices.'),
  ],
  summary: ['Design and Transition ensures services meet quality, cost, and time targets before going live.', 'Inputs: requirements from Engage, components from Obtain/Build, policies from Plan.', 'Design and Transition produces solutions and designs — it does not operate services (that is Deliver and Support).'],
  examTip: 'Design and Transition combined in ITIL 4 reflects the DevOps reality that design and deployment happen in tight cycles, not in separate waterfall phases.',
};

const mod6Ch5: Chapter = {
  id: 'itil4-mod6-ch5',
  title: 'Obtain/Build',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Obtain/Build" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain when to obtain components externally vs build them internally.'),
  ],
  sections: [
    sec('itil4-mod6-ch5-s1', 'Purpose of Obtain/Build', 'Obtain/Build ensures that service components are available when and where needed, meeting agreed specifications. Service components can be obtained (purchased, contracted, procured from suppliers) or built (developed in-house). This activity spans software development, infrastructure provisioning, and procurement — all are forms of making components available for service delivery.'),
    sec('itil4-mod6-ch5-s2', 'Build vs Buy Decisions', 'Obtain/Build takes architectural designs from Design and Transition, requirements from Engage, and policies from Plan. It produces service components — software, hardware, documentation, processes — that feed into Design and Transition for integration and into Deliver and Support for operation. Whether to build in-house or obtain externally is a strategic decision with implications for the Partners and Suppliers dimension.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch5-fc1', 'Obtain/Build (SVC activity)', 'Ensures that service components are available when and where they are needed, whether procured from suppliers or developed in-house.'),
    fc('itil4-mod6-ch5-fc2', 'Service component', 'Any resource used to deliver a service — software, hardware, people, information, or processes.'),
    fc('itil4-mod6-ch5-fc3', 'Procurement', 'The process of obtaining goods or services from external suppliers — a key mechanism within the Obtain/Build activity alongside in-house development.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch5-kc1', 'An organisation needs a new security monitoring tool. The decision is made to purchase it from a vendor rather than build it in-house. Which SVC activity manages this procurement?', ['Plan', 'Engage', 'Design and Transition', 'Obtain/Build'], 3, 'Obtain/Build covers both building in-house and obtaining from external sources. Procurement of the monitoring tool is an Obtain/Build activity — it ensures the component is available to specification.'),
    kc('itil4-mod6-ch5-kc2', 'What does Obtain/Build produce as its PRIMARY output?', ['Stakeholder requirements', 'Governance policies', 'Service components (software, hardware, processes)', 'Performance reports'], 2, 'Obtain/Build produces the components that other activities use — software builds, provisioned infrastructure, procured tools, and documented processes. Requirements = Engage output. Policies = Plan output.'),
  ],
  summary: ['Obtain/Build ensures service components — whether built or bought — are available to specification when needed.', 'Both in-house development and external procurement are Obtain/Build activities.', 'Outputs: service components that feed Design and Transition (integration) and Deliver and Support (operations).'],
  examTip: 'Obtain/Build covers both procurement and development. If a scenario describes acquiring a software package OR developing code internally, both fall under this activity.',
};

const mod6Ch6: Chapter = {
  id: 'itil4-mod6-ch6',
  title: 'Deliver and Support',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the "Deliver and Support" activity in the Service Value Chain.'),
    lo('understand', 'Student can explain how Deliver and Support ensures services meet agreed levels and user expectations.'),
  ],
  sections: [
    sec('itil4-mod6-ch6-s1', 'Purpose of Deliver and Support', 'Deliver and Support ensures services are delivered and supported according to agreed specifications. This is the day-to-day operational activity — incident management, service requests, monitoring, and user support all happen here. The goal is to ensure users receive value from the service reliably, consistently, and within agreed service levels.'),
    sec('itil4-mod6-ch6-s2', 'Key Outputs', 'Deliver and Support takes deployed components from Obtain/Build and Design and Transition, and produces delivered services and resolved issues as its primary outputs. It feeds performance information back to Improve (so operational data drives continual improvement) and stakeholder experience data back to Engage (so the customer relationship is informed by real service performance).'),
  ],
  flashcards: [
    fc('itil4-mod6-ch6-fc1', 'Deliver and Support (SVC activity)', 'Ensures that services are delivered and supported according to agreed specifications — the day-to-day operational activity covering incidents, requests, monitoring, and user support.'),
    fc('itil4-mod6-ch6-fc2', 'Service desk', 'The single point of contact between the service provider and users — part of the Deliver and Support activity. Handles incidents, service requests, and queries.'),
    fc('itil4-mod6-ch6-fc3', 'Operational stability', 'Maintaining services within agreed parameters day-to-day — the primary concern of Deliver and Support, measured through availability, incident frequency, and resolution times.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch6-kc1', 'A user cannot log into the CRM system and contacts the service desk. Which SVC activity handles this?', ['Plan', 'Design and Transition', 'Obtain/Build', 'Deliver and Support'], 3, 'Day-to-day user support, incident handling, and service request fulfilment are all Deliver and Support activities. Design and Transition handled the original release; Deliver and Support operates the live service.'),
    kc('itil4-mod6-ch6-kc2', 'Which of the following is an OUTPUT of the Deliver and Support activity?', ['New service requirements', 'Architectural designs', 'Performance information fed back to Improve', 'Service components built for deployment'], 2, 'Deliver and Support produces delivered services (value to users) and performance data (which feeds Improve and Engage). Requirements = Engage. Designs = Design and Transition. Components = Obtain/Build.'),
  ],
  summary: ['Deliver and Support is where day-to-day service delivery happens — incidents, requests, monitoring, user support.', 'Outputs: delivered services (to users) and performance information (to Improve and Engage).', 'The service desk is the key tool of Deliver and Support — the single point of contact for users.'],
  examTip: 'Deliver and Support is where most ITSM operational work happens: handling incidents, fulfilling requests, managing access. Know which practices primarily support this activity.',
};

const module6: Module = {
  id: 'itil4-mod6',
  title: 'Service Value Chain',
  description: 'The six interconnected activities of the ITIL 4 Service Value Chain: Plan, Improve, Engage, Design and Transition, Obtain/Build, and Deliver and Support.',
  examWeight: 5,
  chapters: [mod6Ch1, mod6Ch2, mod6Ch3, mod6Ch4, mod6Ch5, mod6Ch6],
};

// ---------------------------------------------------------------------------
// Module 7 — ITIL Practices (15 practices)
// ---------------------------------------------------------------------------

const mod7Ch1: Chapter = {
  id: 'itil4-mod7-ch1',
  title: 'Incident Management ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Incident Management practice.'),
    lo('understand', 'Student can explain how incidents are categorised, prioritised, and resolved.'),
  ],
  sections: [
    sec('itil4-mod7-ch1-s1', 'Purpose and Scope', 'An incident is an unplanned interruption or reduction in the quality of an IT service. The goal of Incident Management is to restore normal service operation as quickly as possible and minimise the adverse impact on business operations. This is distinct from Problem Management — incident management does not seek root cause, it focuses purely on speed of restoration.'),
    sec('itil4-mod7-ch1-s2', 'Incident Lifecycle', 'Incidents follow a defined lifecycle: identification (detecting the incident), logging (recording it with full details), categorisation (classifying by type), prioritisation (impact × urgency = priority), diagnosis (determining cause enough to resolve), resolution (restoring service), and closure (confirming resolution with the user). Major incidents — those with high business impact — require a separate escalated process with senior involvement and a post-incident review.'),
    sec('itil4-mod7-ch1-s3', 'Priority and Escalation', 'Priority is determined by two factors: impact (how much of the business is affected) and urgency (how quickly resolution is needed). High priority incidents get more resources, shorter SLA targets, and faster escalation paths. Workarounds — temporary fixes that reduce impact without resolving the root cause — are documented in the known error database and shared so all support teams can apply them consistently.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch1-fc1', 'Incident', 'An unplanned interruption to a service or reduction in the quality of a service.'),
    fc('itil4-mod7-ch1-fc2', 'Incident Management', 'The practice of minimising the negative impact of incidents by restoring normal service operation as quickly as possible.'),
    fc('itil4-mod7-ch1-fc3', 'Priority (Incident)', 'A category used to identify the relative importance of an incident, determined by impact and urgency.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch1-kc1', 'An email system used by 2,000 staff fails during business hours. What factor, combined with urgency, determines incident priority?', ['Volume of helpdesk calls received', 'Impact on the business', 'Age of the affected system', 'Number of technicians available'], 1, 'Priority = impact × urgency. Impact is the extent to which the business is affected — 2,000 staff unable to communicate is high impact. This combination drives resource allocation, SLA targets, and escalation.'),
    kc('itil4-mod7-ch1-kc2', 'Which statement BEST describes the purpose of Incident Management?', ['To identify and eliminate the root cause of recurring failures', 'To minimise the impact of incidents by restoring normal service as quickly as possible', 'To prevent incidents from occurring through proactive monitoring', 'To document all known errors and their workarounds'], 1, 'Incident Management goal = restore service quickly. Root cause elimination = Problem Management. Prevention through monitoring = Monitoring and Event Management. Known error documentation = Problem Management\'s error control phase.'),
  ],
  summary: ['An incident is any unplanned interruption or quality reduction in an IT service.', 'Incident Management goal: restore service quickly, not find root cause — that is Problem Management.', 'Priority = impact × urgency — it drives SLA targets, resource allocation, and escalation paths.'],
  examTip: 'The goal of Incident Management is service restoration, not root cause analysis — that is Problem Management. Exam scenarios that ask for the fastest path to recovery point to Incident Management.',
};

const mod7Ch2: Chapter = {
  id: 'itil4-mod7-ch2',
  title: 'Problem Management ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Problem Management practice and define problem, known error, and workaround.'),
    lo('understand', 'Student can explain the three phases of Problem Management: problem identification, problem control, error control.'),
  ],
  sections: [
    sec('itil4-mod7-ch2-s1', 'Problems, Known Errors, Workarounds', 'A problem is the cause of one or more incidents. A known error is a problem that has been analysed but not yet permanently resolved — a workaround may exist. A workaround is a temporary fix that reduces impact without eliminating the root cause. Known errors are documented in the known error database so workarounds are available to all support staff, accelerating incident resolution even before permanent fixes are deployed.'),
    sec('itil4-mod7-ch2-s2', 'Problem Management Phases', 'Problem Management has three phases: problem identification (finding recurring incident patterns and registering them as problems), problem control (analysis of root cause, development of workarounds, and logging as known errors), and error control (managing known errors through to permanent resolution, prioritised by risk and cost). These phases may overlap and run concurrently.'),
    sec('itil4-mod7-ch2-s3', 'Reactive vs Proactive Problem Management', 'Problem Management is both reactive and proactive. Reactive problem management responds to incidents — when recurring incidents reveal a pattern, a problem record is raised and root cause investigation begins. Proactive problem management identifies risks before incidents occur — through trend analysis, service reviews, and supplier feedback. Both modes are essential for reducing incident frequency over time.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch2-fc1', 'Problem', 'A cause, or potential cause, of one or more incidents.'),
    fc('itil4-mod7-ch2-fc2', 'Known Error', 'A problem that has been analysed but has not been resolved — a workaround may exist.'),
    fc('itil4-mod7-ch2-fc3', 'Workaround', 'A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch2-kc1', 'Users experience the same database timeout error repeatedly. Each time, the service desk applies a restart workaround. What should happen next?', ['Close each incident and take no further action', 'Raise a problem record to investigate the root cause', 'Escalate each incident to management', 'Change the SLA to allow for the recurring downtime'], 1, 'Recurring incidents with the same cause = a problem. A problem record should be raised so root cause investigation can begin, eliminating the need for the repeated workaround. Closing incidents without problem investigation allows the pattern to continue indefinitely.'),
    kc('itil4-mod7-ch2-kc2', 'What is a "known error" in ITIL 4?', ['Any error that has been reported to the service desk', 'A problem that has been analysed but not permanently resolved — a workaround may exist', 'An incident that has been escalated to a senior technician', 'A configuration error in the CMDB'], 1, 'A known error is a problem with a documented root cause analysis and (usually) a workaround. It has not yet been permanently resolved. Documenting known errors allows service desk staff to apply workarounds faster while permanent fixes are developed.'),
  ],
  summary: ['A problem is the cause of one or more incidents — Problem Management finds and removes root causes.', 'Known error = diagnosed problem with documented workaround, awaiting permanent fix.', 'Problem Management is both reactive (analysing incidents) and proactive (identifying risks before incidents occur).'],
  examTip: 'Incident = restore service. Problem = find and fix root cause. Known Error = diagnosed problem awaiting permanent fix. These three distinctions appear frequently in scenario questions.',
};

const mod7Ch3: Chapter = {
  id: 'itil4-mod7-ch3',
  title: 'Change Enablement ★',
  learningObjectives: [
    lo('remember', 'Student can recall the three change types in ITIL 4: standard, normal, and emergency.'),
    lo('understand', 'Student can explain the purpose of Change Enablement and how change authority is assigned per change type.'),
  ],
  sections: [
    sec('itil4-mod7-ch3-s1', 'Purpose of Change Enablement', 'Change Enablement maximises the number of successful IT changes by ensuring that risks are properly assessed, authorised, and managed. ITIL 4 renamed this practice from "Change Management" to signal that the practice should enable fast, safe change — not serve as a bureaucratic gate. The balance between risk reduction and speed of change is the central tension this practice manages.'),
    sec('itil4-mod7-ch3-s2', 'Change Types', 'ITIL 4 defines three change types: standard changes are pre-authorised, low-risk, and follow a defined procedure — no CAB review required (e.g., password reset). Normal changes must be assessed, authorised, and scheduled — they go through the change authority (which may include a CAB). Emergency changes are urgent and need expedited assessment and approval — the process is accelerated but not bypassed.'),
    sec('itil4-mod7-ch3-s3', 'Change Authority', 'Change authority is the person or group authorised to approve a change. It varies by risk and type — standard changes are pre-approved by policy; normal changes may require a change manager, change advisory board, or IT leadership depending on risk; emergency changes use a smaller, faster-convening emergency change advisory board (ECAB). The change model defines the process for each type.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch3-fc1', 'Change', 'The addition, modification, or removal of anything that could have a direct or indirect effect on services.'),
    fc('itil4-mod7-ch3-fc2', 'Standard Change', 'A pre-authorised change that is low risk, relatively common, and follows a procedure or work instruction.'),
    fc('itil4-mod7-ch3-fc3', 'Emergency Change', 'A change that must be introduced as soon as possible, with an expedited risk assessment and authorisation process.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch3-kc1', 'An organisation regularly replaces printer toner cartridges using a documented procedure approved by the change manager six months ago. What change type is this?', ['Emergency change', 'Normal change', 'Standard change', 'Major change'], 2, 'Pre-authorised, low-risk, documented procedure = standard change. Standard changes do not require individual CAB review for each occurrence because the risk has already been assessed and the procedure pre-approved.'),
    kc('itil4-mod7-ch3-kc2', 'A critical security patch must be applied within two hours to prevent an active exploit. No standard procedure exists. What change type applies?', ['Standard change — security patches are pre-approved', 'Normal change — it must go through the full CAB process', 'Emergency change — expedited assessment and approval', 'This cannot be a change — it is an incident response'], 2, 'Urgent, no existing standard procedure, significant risk if delayed = emergency change. Emergency changes use an expedited process — the assessment and approval still happen, but faster than normal through a smaller authority such as the ECAB.'),
  ],
  summary: ['Three change types: standard (pre-approved, low risk), normal (CAB review), emergency (expedited approval).', 'Change authority varies by type and risk — from policy pre-approval for standard to ECAB for emergency.', 'Change Enablement balances risk reduction with speed — it should enable changes, not block them.'],
  examTip: 'ITIL 4 renamed "Change Management" to "Change Enablement" to signal that the practice should enable fast, safe change — not be a bureaucratic gate. Exam questions may test both the old and new name.',
};

const mod7Ch4: Chapter = {
  id: 'itil4-mod7-ch4',
  title: 'Service Request Management ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Service Request Management practice.'),
    lo('understand', 'Student can explain the difference between a service request and an incident.'),
  ],
  sections: [
    sec('itil4-mod7-ch4-s1', 'Purpose and Scope', 'Service Request Management handles pre-defined, low-risk service requests — password resets, new equipment, software installations, access grants, and requests for information. These are planned, expected events that users initiate. The practice supports the agreed quality of a service by ensuring all pre-defined user-initiated requests are fulfilled efficiently, often through a service catalogue and self-service portal with a high degree of automation.'),
    sec('itil4-mod7-ch4-s2', 'Request vs Incident', 'A service request is NOT an incident. An incident is an unplanned interruption — something that should not have happened. A service request is something the user is entitled to ask for — it is a normal part of service delivery. The key test: was it planned and expected? Password reset = service request (planned). Email system down = incident (unplanned). Mixing these up leads to the wrong process and wrong SLA.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch4-fc1', 'Service request', 'A formal request from a user for something to be provided — for example, a request for information, advice, access to a resource, or standard service (password reset, new laptop).'),
    fc('itil4-mod7-ch4-fc2', 'Service Request Management', 'The practice of supporting the agreed quality of a service by handling all pre-defined, user-initiated service requests efficiently and consistently.'),
    fc('itil4-mod7-ch4-fc3', 'Service catalogue', 'The customer-facing list of available services and service requests — the mechanism through which users discover and initiate service requests.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch4-kc1', 'A user contacts the service desk asking for access to a shared drive they are entitled to use. How should this be classified?', ['Incident — access failure indicates a service interruption', 'Problem — the root cause of access failure needs investigation', 'Service request — it is a pre-defined, user-initiated request for access', 'Change — access grants require change enablement approval'], 2, 'Access requests for resources a user is entitled to are service requests — they are pre-defined, expected, and handled through the Service Request Management practice. No incident or change is needed for a standard access grant.'),
    kc('itil4-mod7-ch4-kc2', 'Which characteristic distinguishes a service request from an incident?', ['Service requests are always resolved faster than incidents', 'Service requests are pre-defined, planned, and user-initiated; incidents are unplanned disruptions', 'Service requests require CAB approval; incidents do not', 'Service requests are handled by a different team than incidents'], 1, 'The defining characteristic: service requests are planned and pre-defined (expected normal service delivery); incidents are unplanned interruptions (something that should not have happened). The process, SLA, and handling differ accordingly.'),
  ],
  summary: ['Service requests are pre-defined, user-initiated, low-risk requests — distinct from unplanned incidents.', 'The service catalogue enables users to discover and initiate service requests through self-service.', 'Automation and standardisation are key — the simpler and more consistent the fulfilment, the faster the value delivery.'],
  examTip: 'A password reset is a service request, not an incident — even though it is urgent for the user. The key test: was the event planned and pre-authorised? If yes, it is a request.',
};

const mod7Ch5: Chapter = {
  id: 'itil4-mod7-ch5',
  title: 'Service Desk ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Service Desk practice.'),
    lo('understand', 'Student can explain the different service desk staffing and channel models.'),
  ],
  sections: [
    sec('itil4-mod7-ch5-s1', 'Purpose of the Service Desk', 'The Service Desk is the single point of contact between the service provider and users. It captures demand for incident resolution and service requests, handles queries, escalates appropriately, and communicates status to users. The service desk is not just a call centre — it is the face of the IT organisation to the business, and the quality of its interactions directly shapes user perception of IT value.'),
    sec('itil4-mod7-ch5-s2', 'Service Desk Channels and Models', 'Service desks offer multiple channels: phone, email, chat, self-service portal, and walk-in. Structural models include: local (on-site, close to users), centralised (single location serving all users), virtual (distributed staff working as one logical team), and follow-the-sun (global coverage across time zones). No model is universally correct — the right model depends on user needs, geography, and cost.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch5-fc1', 'Service desk', 'The practice and team that acts as the single point of contact between the service provider and users — captures incidents, service requests, queries, and communications.'),
    fc('itil4-mod7-ch5-fc2', 'First contact resolution (FCR)', 'The percentage of contacts resolved by the service desk at first contact without escalation — a key service desk performance metric indicating quality and efficiency.'),
    fc('itil4-mod7-ch5-fc3', 'Follow-the-sun model', 'A service desk structure where teams in different time zones hand off work as they close, providing 24-hour coverage without requiring overnight staffing at any single location.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch5-kc1', 'What is the PRIMARY role of the Service Desk in ITIL 4?', ['To manage IT infrastructure and ensure uptime', 'To act as the single point of contact between the service provider and users for incidents, requests, and queries', 'To authorise changes before they are implemented', 'To negotiate service level agreements with customers'], 1, 'The service desk is the single point of contact — it captures demand (incidents and requests), communicates status, and escalates as needed. Infrastructure management, change authorisation, and SLA negotiation are separate practices.'),
    kc('itil4-mod7-ch5-kc2', 'A global organisation wants to provide 24-hour service desk coverage without requiring staff to work overnight shifts. Which model best supports this?', ['Local service desk model', 'Centralised service desk model', 'Virtual service desk model', 'Follow-the-sun model'], 3, 'Follow-the-sun provides continuous coverage by handing off between teams in different time zones — each team works normal business hours and passes active work to the next region. This is specifically designed for 24-hour coverage without overnight staffing.'),
  ],
  summary: ['The service desk is the single point of contact between IT and users — handling incidents, requests, queries, and communications.', 'Models: local, centralised, virtual, follow-the-sun — chosen based on user needs and geography.', 'Key metrics: first contact resolution (FCR) and customer satisfaction — both reflect the quality of the user experience.'],
  examTip: 'The Service Desk is a practice, not just a team or tool. It empathises with users, captures demand, and is the face of IT to the business — exam questions test the "single point of contact" role.',
};

const mod7Ch6: Chapter = {
  id: 'itil4-mod7-ch6',
  title: 'Service Level Management ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Service Level Management and define SLA.'),
    lo('understand', 'Student can explain the difference between SLA, OLA, and underpinning contract.'),
  ],
  sections: [
    sec('itil4-mod7-ch6-s1', 'Purpose of SLM', 'Service Level Management sets clear business-based targets for service performance and ensures that delivery is properly assessed, monitored, and managed against those targets. Service levels must be based on real business needs — not just what IT can deliver, and not aspirational numbers that cannot be met. The practice includes negotiation, definition, reporting, and review of service levels across the organisation.'),
    sec('itil4-mod7-ch6-s2', 'SLA, OLA, and UC', 'Three types of agreement underpin service level management: the Service Level Agreement (SLA) is between the service provider and the customer, defining what will be delivered and at what level. The Operational Level Agreement (OLA) is internal — between IT teams — supporting SLA delivery. The Underpinning Contract (UC) is with an external supplier and must support the SLA targets that depend on that supplier\'s performance.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch6-fc1', 'Service Level Agreement (SLA)', 'A documented agreement between a service provider and a customer that identifies both services required and the expected level of service.'),
    fc('itil4-mod7-ch6-fc2', 'Operational Level Agreement (OLA)', 'An agreement between an IT service provider and another part of the same organisation that supports delivery of services to customers.'),
    fc('itil4-mod7-ch6-fc3', 'Service Level Management (SLM)', 'The practice of setting clear business-based targets for service levels and ensuring delivery of services is properly assessed, monitored, and managed.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch6-kc1', 'An IT team agrees internally on response times to support the customer-facing uptime commitment. What type of agreement is this?', ['Service Level Agreement (SLA)', 'Operational Level Agreement (OLA)', 'Underpinning Contract (UC)', 'Service catalogue entry'], 1, 'An internal agreement between IT teams (not with the customer or an external supplier) that supports SLA delivery is an OLA. SLAs are with customers; UCs are with external suppliers; the service catalogue lists available services.'),
    kc('itil4-mod7-ch6-kc2', 'Which statement about Service Level Agreements is CORRECT according to ITIL 4?', ['SLAs should contain as many metrics as possible to ensure comprehensive coverage', 'SLAs should be based on real business needs and expressed in terms meaningful to the customer', 'SLAs are internal agreements between IT teams', 'SLAs are only needed for services delivered by external suppliers'], 1, 'ITIL 4 emphasises that SLAs must be business-based — not just technically possible metrics. They should be expressed in terms the customer understands and cares about, not internal IT jargon.'),
  ],
  summary: ['SLM sets, monitors, and reviews service level targets based on real business needs — not just IT capabilities.', 'SLA = with customer; OLA = internal between IT teams; UC = with external supplier. Know all three.', 'Service levels expressed in business terms create accountability; overly technical SLAs obscure whether the customer is receiving value.'],
  examTip: 'SLAs should be simple, engaging, and focused on business outcomes — not long lists of technical metrics. Exam questions often present watermelon SLAs (green on the outside, red on the inside) as an anti-pattern.',
};

const mod7Ch7: Chapter = {
  id: 'itil4-mod7-ch7',
  title: 'Continual Improvement (Practice) ★',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Continual Improvement practice.'),
    lo('understand', 'Student can explain how the Continual Improvement register is used to log and prioritise improvement ideas.'),
  ],
  sections: [
    sec('itil4-mod7-ch7-s1', 'Purpose of the Practice', 'The Continual Improvement practice aligns the organisation\'s practices and services with changing business needs through ongoing, incremental improvement at every level. As a practice, it provides the methods, tools, and culture needed to make improvement a daily habit rather than a periodic project. It encompasses maintaining an improvement register, analysing metrics, running improvement initiatives, and building an improvement culture throughout the organisation.'),
    sec('itil4-mod7-ch7-s2', 'The Continual Improvement Register', 'The Continual Improvement Register (CIR) is the structured repository where all improvement opportunities are logged regardless of their source or size. Every logged item is assessed, prioritised, and tracked through to completion or deliberate deferral. The CIR prevents good ideas from being lost and provides management visibility into the improvement pipeline. It is distinct from the incident and problem registers — it is forward-looking, not reactive.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch7-fc1', 'Continual Improvement Register (CIR)', 'A database or structured document used to track and manage improvement opportunities and their status — ensures no improvement idea is lost between identification and implementation.'),
    fc('itil4-mod7-ch7-fc2', 'Improvement initiative', 'A structured piece of work designed to improve a service, practice, or process — logged in the CIR, prioritised, and tracked to completion.'),
    fc('itil4-mod7-ch7-fc3', 'Improvement culture', 'The organisational disposition to treat improvement as a daily responsibility, not a periodic management exercise — the cultural outcome the Continual Improvement practice aims to build.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch7-kc1', 'What is the PRIMARY purpose of the Continual Improvement Register (CIR)?', ['To log all incidents and their resolutions', 'To track improvement opportunities from identification through to completion', 'To document all approved changes', 'To record service level breaches'], 1, 'The CIR tracks improvement opportunities — not incidents (that is the incident register) or changes (the change schedule). It ensures that identified opportunities are assessed, prioritised, and not lost.'),
    kc('itil4-mod7-ch7-kc2', 'How does the Continual Improvement practice differ from the Continual Improvement Model?', ['They are identical — the same tool called by two names', 'The Model is a seven-step thinking tool for guiding improvements; the Practice is the organisational capability and culture that applies it', 'The Practice applies only to services; the Model applies to processes', 'The Model is used only by management; the Practice is used only by operational staff'], 1, 'The seven-step Continual Improvement Model is a structured thinking tool. The Continual Improvement Practice is the broader organisational capability — including the CIR, improvement culture, and ongoing improvement activities. The practice uses the model.'),
  ],
  summary: ['The Continual Improvement practice provides the methods, tools, and culture to make improvement a daily habit.', 'The CIR logs all improvement opportunities so none are lost between identification and implementation.', 'This practice applies improvement thinking to services, practices, governance, and the SVS itself.'],
  examTip: 'Distinguish the Continual Improvement Model (seven steps — a thinking tool in Module 5) from the Continual Improvement Practice (an organisational capability). Both can appear in the same exam.',
};

const mod7Ch8: Chapter = {
  id: 'itil4-mod7-ch8',
  title: 'IT Asset Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the IT Asset Management practice.'),
    lo('understand', 'Student can explain the difference between an IT asset and a configuration item.'),
  ],
  sections: [
    sec('itil4-mod7-ch8-s1', 'Purpose of ITAM', 'IT Asset Management plans and manages the full lifecycle of all IT assets — from procurement through deployment, operation, and disposal — to maximise value, control costs, manage risks, and support decision-making about purchases, renewals, and retirements. ITAM covers hardware, software licences, and cloud subscriptions. Software licence compliance is a key ITAM concern: under-licensing creates legal risk; over-licensing wastes budget.'),
    sec('itil4-mod7-ch8-s2', 'Asset vs Configuration Item', 'An IT asset is any component with financial value that contributes to IT service delivery. A configuration item (CI) is any component managed to deliver an IT service — tracked in the CMDB with its relationships. All CIs can be assets, but not all assets are CIs (e.g., a box of unused network cables has financial value but may not be in the CMDB). ITAM focuses on financial and lifecycle management; Service Configuration Management focuses on relationships and service dependencies.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch8-fc1', 'IT Asset', 'Any financially valuable component that can contribute to delivery of an IT product or service — includes hardware, software licences, cloud subscriptions, and infrastructure.'),
    fc('itil4-mod7-ch8-fc2', 'IT Asset Management', 'The practice of planning and managing the full lifecycle of all IT assets to maximise value, control costs, manage risks, and support purchase and disposal decisions.'),
    fc('itil4-mod7-ch8-fc3', 'Software asset management (SAM)', 'The subset of ITAM concerned with software licences — ensuring compliance (not under-licensed) and efficiency (not over-licensed). A key risk and cost control domain.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch8-kc1', 'What is the PRIMARY purpose of IT Asset Management?', ['To manage incidents related to hardware failures', 'To plan and manage the full lifecycle of IT assets to maximise value and control costs', 'To track configuration items and their relationships in the CMDB', 'To approve purchases of new IT equipment'], 1, 'ITAM = full lifecycle management of assets for value maximisation and cost/risk control. Incident management handles hardware failures. CMDB relationship tracking = Service Configuration Management. Purchase approval = governance.'),
    kc('itil4-mod7-ch8-kc2', 'Which statement about the relationship between IT assets and configuration items is CORRECT?', ['All CIs are IT assets and all IT assets are CIs', 'IT assets and CIs are the same concept with different names', 'All CIs can be assets, but not all assets are CIs — ITAM focuses on financial value, SCM focuses on service relationships', 'Only hardware can be both an asset and a CI'], 2, 'IT assets = financially valuable components. CIs = components managed to deliver a service (tracked in CMDB with relationships). Overlap exists but the scope and focus differ — ITAM is financially oriented; SCM is operationally oriented.'),
  ],
  summary: ['ITAM manages the full lifecycle of IT assets — procurement, deployment, operation, and disposal.', 'IT asset = financial value; CI = managed to deliver a service — related but not identical concepts.', 'Software licence compliance is a key ITAM concern: under-licensing = legal risk; over-licensing = wasted budget.'],
  examTip: 'All configuration items can be assets, but not all assets are CIs. ITAM focuses on financial and lifecycle management; Service Configuration Management focuses on relationships and dependencies.',
};

const mod7Ch9: Chapter = {
  id: 'itil4-mod7-ch9',
  title: 'Monitoring and Event Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Monitoring and Event Management.'),
    lo('understand', 'Student can explain the three event types: informational, warning, and exception.'),
  ],
  sections: [
    sec('itil4-mod7-ch9-s1', 'Purpose', 'Monitoring and Event Management systematically observes services and service components, and records and reports selected changes of state called events. It is the practice that feeds all other operational practices with real-time intelligence about service health. Without monitoring, incidents are only detected when users call the service desk — with monitoring, many issues are detected and resolved before users are affected.'),
    sec('itil4-mod7-ch9-s2', 'Event Types', 'ITIL 4 defines three event types: informational events record normal operations (service started, backup completed) and require no action. Warning events indicate approaching thresholds (disk 80% full) — they may require action soon. Exception events signal that a threshold has been breached or a component has failed — they require immediate action and often trigger incident management.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch9-fc1', 'Event', 'Any change of state that has significance for the management of a service or other configuration item.'),
    fc('itil4-mod7-ch9-fc2', 'Monitoring and Event Management', 'The practice of systematically observing services and recording and reporting selected changes of state (events).'),
    fc('itil4-mod7-ch9-fc3', 'Exception Event', 'An event indicating that a service or CI has breached a threshold or failed — requires immediate action.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch9-kc1', 'A monitoring tool records that a web server has responded to a health-check ping. No action is required. What type of event is this?', ['Warning event', 'Exception event', 'Informational event', 'Incident event'], 2, 'A health-check ping response confirming normal operation is an informational event — it records what happened but requires no action. Warning events approach thresholds; exception events breach them or signal failures.'),
    kc('itil4-mod7-ch9-kc2', 'A monitoring alert fires because a database server\'s CPU has sustained 98% utilisation for five minutes, causing query timeouts. What type of event is this, and what should happen?', ['Informational — log and ignore', 'Warning — review next business day', 'Exception — trigger incident management immediately', 'Standard change — schedule maintenance'], 2, 'Sustained 98% CPU causing query timeouts = a threshold breached with active user impact = exception event. Exception events require immediate action and typically trigger incident management to restore service.'),
  ],
  summary: ['Monitoring and Event Management provides real-time intelligence about service health — enabling proactive response.', 'Three event types: informational (no action), warning (action may be needed soon), exception (immediate action required).', 'Exception events often trigger incident management — monitoring is the early-warning system for operations.'],
  examTip: 'Events are not incidents — an event is a change of state that may or may not require action. An exception event often triggers an incident; an informational event does not.',
};

const mod7Ch10: Chapter = {
  id: 'itil4-mod7-ch10',
  title: 'Release Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Release Management.'),
    lo('understand', 'Student can explain the relationship between Release Management and Change Enablement.'),
  ],
  sections: [
    sec('itil4-mod7-ch10-s1', 'Purpose', 'Release Management makes new and changed services and features available for use. It controls when, how, and to whom new capabilities are released — ensuring users and support teams are prepared before capabilities go live. A release may bundle multiple changes together, and Release Management coordinates the timing, communication, and deployment readiness of that bundle.'),
    sec('itil4-mod7-ch10-s2', 'Release vs Change', 'Deployment and release are related but distinct. Deployment (managed by Deployment Management) is the technical act of moving components to environments. Release is making the capability available to users — which includes communication, training, documentation updates, and support readiness. A release is authorised through Change Enablement; deploying it is an Obtain/Build and Deployment Management activity.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch10-fc1', 'Release', 'A version of a service or collection of service components made available for use — may bundle multiple changes together into a single coordinated rollout.'),
    fc('itil4-mod7-ch10-fc2', 'Release Management', 'The practice of making new and changed services and features available for use — including coordination of deployment readiness, communication, training, and support preparation.'),
    fc('itil4-mod7-ch10-fc3', 'Release window', 'A pre-defined period during which releases are permitted to be deployed — used to minimise disruption by concentrating change activity in agreed time slots.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch10-kc1', 'What is the PRIMARY purpose of Release Management?', ['To assess and authorise changes before they are implemented', 'To make new and changed services and features available for use in a controlled manner', 'To deploy software builds to production environments', 'To manage software licences and asset inventories'], 1, 'Release Management = making capabilities available to users, including communication, training, and support readiness. Change Enablement = authorising changes. Deployment Management = the technical act of deploying to environments. ITAM = asset management.'),
    kc('itil4-mod7-ch10-kc2', 'Which statement BEST distinguishes a "release" from a "deployment"?', ['They are the same thing with different names', 'A deployment makes components available to users; a release moves components to environments', 'A release makes a service or capability available to users; a deployment moves components to live environments', 'Releases require CAB approval; deployments do not'], 2, 'Release = making capability available to users (functional/business perspective). Deployment = moving technical components to environments (technical perspective). A release may involve one or more deployments, but the two are distinct activities.'),
  ],
  summary: ['Release Management controls when and how new capabilities are made available to users.', 'A release may bundle multiple changes; Release Management ensures readiness before going live.', 'Release (available to users) is distinct from deployment (components moved to environments).'],
  examTip: 'A release contains changes but is managed separately. Release Management focuses on packaging and deployment readiness; Change Enablement focuses on risk assessment and authorisation.',
};

const mod7Ch11: Chapter = {
  id: 'itil4-mod7-ch11',
  title: 'Service Configuration Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Service Configuration Management.'),
    lo('understand', 'Student can explain what a Configuration Management Database (CMDB) is and what it stores.'),
  ],
  sections: [
    sec('itil4-mod7-ch11-s1', 'Purpose', 'Service Configuration Management ensures that accurate and reliable information about configuration items and their relationships is available when and where it is needed. This enables impact assessment during incidents and changes — knowing which CIs depend on which lets teams predict the blast radius of a failure or change. Without accurate CMDB data, impact analysis is guesswork.'),
    sec('itil4-mod7-ch11-s2', 'CMDB and CIs', 'The Configuration Management Database (CMDB) stores configuration records and their relationships throughout their lifecycle. CIs include hardware, software, documentation, people, and services. The relationships between CIs are as important as the CIs themselves — a server CI linked to an application CI linked to a business service CI enables end-to-end impact tracing. The CMDB must be kept current to remain useful; stale data is often worse than no data.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch11-fc1', 'Configuration Item (CI)', 'Any component that needs to be managed in order to deliver an IT service.'),
    fc('itil4-mod7-ch11-fc2', 'Configuration Management Database (CMDB)', 'A database used to store configuration records throughout their lifecycle.'),
    fc('itil4-mod7-ch11-fc3', 'Service Configuration Management', 'The practice of ensuring accurate and reliable information about configuration items and their relationships is available when and where it is needed.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch11-kc1', 'What is the PRIMARY value of the CMDB during a major incident?', ['It shows the cost of each affected component', 'It enables rapid impact assessment by showing relationships between affected CIs and the services they support', 'It lists all outstanding change requests', 'It records the history of all past incidents'], 1, 'During a major incident, the CMDB\'s CI relationships reveal which services and business processes are affected by a failed component — enabling faster triage, escalation, and communication to the right stakeholders.'),
    kc('itil4-mod7-ch11-kc2', 'Which of the following BEST describes the purpose of Service Configuration Management?', ['Managing the financial value of IT assets throughout their lifecycle', 'Ensuring accurate information about CIs and their relationships is available when needed', 'Authorising and scheduling changes to configuration items', 'Detecting events that indicate CI failures'], 1, 'Service Configuration Management = accurate, available CI data and relationships. Financial lifecycle = ITAM. Change authorisation = Change Enablement. Event detection = Monitoring and Event Management.'),
  ],
  summary: ['Service Configuration Management maintains accurate CI data and relationships in the CMDB.', 'CI relationships enable impact analysis — knowing dependencies is the key value of the CMDB.', 'Stale CMDB data degrades incident response, change impact assessment, and problem analysis.'],
  examTip: 'The CMDB stores CI relationships, not just a list of assets. Knowing which CIs depend on which is what makes it valuable for impact analysis during incidents and changes.',
};

const mod7Ch12: Chapter = {
  id: 'itil4-mod7-ch12',
  title: 'Deployment Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Deployment Management.'),
    lo('understand', 'Student can explain the difference between deployment and release.'),
  ],
  sections: [
    sec('itil4-mod7-ch12-s1', 'Purpose', 'Deployment Management moves new or changed hardware, software, documentation, processes, or any other component to live environments. It is the technical execution activity — running pipelines, pushing code, provisioning infrastructure. Modern Deployment Management supports continuous deployment practices where multiple deployments happen daily through automated CI/CD pipelines.'),
    sec('itil4-mod7-ch12-s2', 'Deployment vs Release', 'Deployment is the technical act of moving components to environments. Release is making the service or capability available to users — which requires communication, training, documentation, and support readiness in addition to deployment. A deployment can happen without a user-visible release (e.g., a backend upgrade with no functional change to users). A release always involves one or more deployments.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch12-fc1', 'Deployment Management', 'The practice of moving new or changed hardware, software, documentation, or any other component to live environments — the technical execution of change delivery.'),
    fc('itil4-mod7-ch12-fc2', 'CI/CD pipeline', 'Continuous Integration/Continuous Deployment — an automated pipeline that builds, tests, and deploys code changes to environments without manual intervention. A modern Deployment Management tool.'),
    fc('itil4-mod7-ch12-fc3', 'Deployment vs release distinction', 'Deployment = moving components to environments (technical). Release = making capability available to users (functional). Both are necessary; neither alone is sufficient.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch12-kc1', 'A developer pushes code through an automated pipeline that updates a production database schema. No users notice any change. What practice managed this activity?', ['Release Management', 'Change Enablement', 'Deployment Management', 'Service Configuration Management'], 2, 'Moving components (code, database schema) to live environments = Deployment Management. Release Management would be involved if users were gaining new capabilities. Change Enablement would have authorised the change, but the technical act of deploying is Deployment Management.'),
    kc('itil4-mod7-ch12-kc2', 'Which statement BEST describes the difference between deployment and release?', ['They are the same — deployment and release always happen simultaneously', 'Deployment moves components to environments; release makes a capability available to users', 'Release moves components to environments; deployment makes a capability available to users', 'Deployment requires CAB approval; releases do not'], 1, 'Deployment = technical act (move components). Release = functional act (make available to users). They are related but separable — a backend deployment may not constitute a user-visible release.'),
  ],
  summary: ['Deployment Management moves components to live environments — the technical execution activity.', 'Deployment (technical) is distinct from release (making capability available to users).', 'Modern Deployment Management supports CI/CD pipelines and automated continuous deployment.'],
  examTip: 'Deployment is technical (moving components); Release is functional (making capabilities available to users). A CI/CD pipeline performs deployment; the change window and communication plan govern the release.',
};

const mod7Ch13: Chapter = {
  id: 'itil4-mod7-ch13',
  title: 'Service Catalogue Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of Service Catalogue Management.'),
    lo('understand', 'Student can explain what a service catalogue contains and who uses it.'),
  ],
  sections: [
    sec('itil4-mod7-ch13-s1', 'Purpose', 'Service Catalogue Management provides a single source of consistent, accurate information about all live services and service offerings available from the provider. The catalogue is the customer-facing interface to the service portfolio — it shows what is available, at what cost, and how to request it. An accurate, up-to-date catalogue reduces service desk contacts by enabling self-service.'),
    sec('itil4-mod7-ch13-s2', 'Catalogue Audiences', 'The service catalogue has two perspectives: the customer-facing view lists services in business language that customers and users understand (e.g., "Email Service," "CRM Access"). The technical/support view includes service components, dependencies, and support information for IT staff. Both views are derived from the same catalogue but presented to different audiences. The service catalogue is the live/available subset of the broader service portfolio.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch13-fc1', 'Service catalogue', 'A structured document or database with information about all live IT services available for use — the customer-facing view of the service portfolio, showing what is available and how to request it.'),
    fc('itil4-mod7-ch13-fc2', 'Service Catalogue Management', 'The practice of providing a single source of consistent information on all services and service offerings available from the provider — enabling self-service and reducing unnecessary contacts.'),
    fc('itil4-mod7-ch13-fc3', 'Service portfolio vs service catalogue', 'The service portfolio contains all services: pipeline (in development), live (in the catalogue), and retired. The service catalogue shows only live/available services.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch13-kc1', 'What is the PRIMARY purpose of the service catalogue?', ['To record all incidents and service requests', 'To provide a single source of consistent information about all available services', 'To document the architecture of all IT systems', 'To list all known errors and workarounds'], 1, 'The service catalogue is the authoritative, customer-facing reference for what services are available, at what cost, and how to request them. Incidents = incident register. Architecture = service design documentation. Known errors = known error database.'),
    kc('itil4-mod7-ch13-kc2', 'Which of the following is NOT part of the service catalogue?', ['A description of the email service and how to request access', 'The CRM self-service request form and SLA', 'A new HR system currently being developed and not yet live', 'The helpdesk service and its contact details'], 2, 'The service catalogue contains only live, available services. A system currently in development is in the service pipeline — it will be added to the catalogue when it goes live. All other options describe services available for use.'),
  ],
  summary: ['The service catalogue lists all live services available to consumers — the customer-facing view of the service portfolio.', 'An accurate catalogue reduces service desk contacts by enabling informed self-service.', 'Service portfolio = pipeline + live + retired; service catalogue = live/available only.'],
  examTip: 'The service catalogue shows live/available services. The service pipeline shows planned/in-development services. Both together form the full service portfolio.',
};

const mod7Ch14: Chapter = {
  id: 'itil4-mod7-ch14',
  title: 'Availability Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Availability Management practice.'),
    lo('understand', 'Student can explain the difference between service availability and component availability.'),
  ],
  sections: [
    sec('itil4-mod7-ch14-s1', 'Purpose', 'Availability Management ensures that services deliver the agreed level of availability to meet business needs. It designs, implements, monitors, and improves the availability of IT services and their underlying components. Availability is always measured from the user\'s perspective — a database can be running while the service is unavailable to users if the connecting network is down.'),
    sec('itil4-mod7-ch14-s2', 'Measuring Availability', 'Key availability metrics: percentage uptime (agreed service time minus downtime, divided by agreed service time × 100), MTTR (Mean Time To Restore — how quickly service is restored after failure), and MTBF (Mean Time Between Failures — how long between recoverable failures). Lower MTTR and higher MTBF both improve effective availability. Reliability and maintainability contribute to these metrics.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch14-fc1', 'Availability', 'The ability of an IT service or component to perform its required function at a stated instant or over a stated period of time.'),
    fc('itil4-mod7-ch14-fc2', 'MTTR', 'Mean Time To Restore — the average time taken to restore a service after a failure.'),
    fc('itil4-mod7-ch14-fc3', 'MTBF', 'Mean Time Between Failures — the average time between recoverable failures of a service or component.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch14-kc1', 'An organisation wants to improve service availability. Which metric measures how quickly the service is restored after a failure?', ['MTBF — Mean Time Between Failures', 'MTTR — Mean Time To Restore', 'Percentage uptime over 30 days', 'Number of incidents per month'], 1, 'MTTR measures restoration speed — the lower the MTTR, the faster service is restored after failure, improving effective availability. MTBF measures frequency of failures. Percentage uptime is the overall availability measure. Incident count is a volume metric.'),
    kc('itil4-mod7-ch14-kc2', 'The network connecting users to a database fails for 2 hours. The database server itself remains running. Is the service available?', ['Yes — the database is running so the service is available', 'No — availability is measured from the user\'s perspective; users cannot access the service', 'Partially — component availability is sufficient', 'Yes — MTBF is not exceeded so availability SLA is met'], 1, 'Availability is measured from the user\'s perspective. If users cannot access the service — regardless of which component caused the failure — the service is unavailable. The database being up is irrelevant if users cannot reach it.'),
  ],
  summary: ['Availability Management ensures services deliver agreed availability levels to meet business needs.', 'Availability = (agreed service time - downtime) / agreed service time × 100% — measured from the user\'s perspective.', 'MTTR (restoration speed) and MTBF (failure frequency) are the two key availability improvement levers.'],
  examTip: 'Availability is measured from the user perspective, not the infrastructure perspective. A database being up does not mean the service is available if the network connecting users to it is down.',
};

const mod7Ch15: Chapter = {
  id: 'itil4-mod7-ch15',
  title: 'Supplier Management',
  learningObjectives: [
    lo('remember', 'Student can recall the purpose of the Supplier Management practice.'),
    lo('understand', 'Student can explain how organisations ensure suppliers meet their contracted commitments.'),
  ],
  sections: [
    sec('itil4-mod7-ch15-s1', 'Purpose', 'Supplier Management ensures that the organisation\'s suppliers and their performances are managed appropriately to support the provisioning of seamless, quality products and services. It creates and maintains a supplier database, negotiates and manages supplier contracts, monitors performance, and manages relationships so that supplier failures do not translate into service failures for consumers.'),
    sec('itil4-mod7-ch15-s2', 'Supplier Governance', 'Supplier governance mechanisms include underpinning contracts (defining obligations), supplier scorecards (measuring performance against agreed metrics), regular review meetings (identifying issues before they escalate), and contract renewal/termination management. The Supplier Management practice connects directly to the Partners and Suppliers dimension — it is the operational implementation of that dimension\'s governance requirements.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch15-fc1', 'Supplier Management', 'The practice of ensuring the organisation\'s suppliers and their performances are managed appropriately to support seamless, quality products and services.'),
    fc('itil4-mod7-ch15-fc2', 'Underpinning contract', 'A contract between an IT service provider and a third-party supplier that supports delivery of a customer-facing service — must align with the SLA the customer experiences.'),
    fc('itil4-mod7-ch15-fc3', 'Supplier scorecard', 'A structured tool for measuring and tracking supplier performance against agreed metrics over time — used in supplier reviews to identify trends and address issues proactively.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch15-kc1', 'A cloud provider consistently misses its SLA for storage performance, causing end-user complaints. Which practice should address this situation?', ['Incident Management — raise an incident for each occurrence', 'Problem Management — investigate root cause of the cloud provider\'s failures', 'Supplier Management — manage the cloud provider\'s performance against the contract', 'Change Enablement — submit a change request to the cloud provider'], 2, 'Supplier Management is responsible for monitoring and managing external provider performance against contracted commitments. Repeated SLA misses should be addressed through the supplier relationship, not just individual incident tickets.'),
    kc('itil4-mod7-ch15-kc2', 'Which statement about underpinning contracts is CORRECT?', ['Underpinning contracts are internal agreements between IT teams', 'Underpinning contracts must support the SLAs the service provider has committed to customers', 'Underpinning contracts replace the need for SLAs with customers', 'Underpinning contracts are optional if the supplier is reliable'], 1, 'Underpinning contracts are with external suppliers and must be structured so that the supplier\'s obligations support the customer-facing SLA. If the UC allows slower response than the SLA requires, the SLA cannot be reliably met.'),
  ],
  summary: ['Supplier Management ensures supplier performance is monitored and managed to protect consumer-facing service quality.', 'Underpinning contracts must align with and support the SLAs the organisation has committed to customers.', 'Supplier governance tools: contracts, scorecards, regular reviews, and performance reporting.'],
  examTip: 'Supplier Management ensures third-party performance aligns with service commitments. When a supplier fails, it becomes a problem in Deliver and Support — Supplier Management is the preventive practice.',
};

const module7: Module = {
  id: 'itil4-mod7',
  title: 'ITIL Practices',
  description: 'All 15 ITIL 4 practices tested at Foundation level: 7 key practices (exam-weighted ★) and 8 awareness practices.',
  examWeight: 15,
  chapters: [
    mod7Ch1,
    mod7Ch2,
    mod7Ch3,
    mod7Ch4,
    mod7Ch5,
    mod7Ch6,
    mod7Ch7,
    mod7Ch8,
    mod7Ch9,
    mod7Ch10,
    mod7Ch11,
    mod7Ch12,
    mod7Ch13,
    mod7Ch14,
    mod7Ch15,
  ],
};

// ---------------------------------------------------------------------------
// Module 8 — Exam Prep
// ---------------------------------------------------------------------------

const mod8Ch1: Chapter = {
  id: 'itil4-mod8-ch1',
  title: 'Quick Domain Review',
  learningObjectives: [
    lo('remember', 'Student can recall the key terms and models from all seven content modules.'),
    lo('understand', 'Student can map exam question topics to the correct module and practice.'),
  ],
  sections: [
    sec('itil4-mod8-ch1-s1', 'Module-by-Module Cheat Sheet', 'Common exam traps to avoid: confusing output (a deliverable) with outcome (a result that matters); selecting the most comprehensive answer rather than the most correct one; not reading "which is NOT correct" questions carefully; confusing incident management (restore service) with problem management (find root cause); and choosing answers that optimise a single metric rather than considering holistic system impact. Read every question twice before selecting.'),
    sec('itil4-mod8-ch1-s2', 'High-Value Topics', 'High-value revision areas: the 7 guiding principles (know all 7 names and their core ideas — approximately 7 exam questions), the SVS components (5 components, know the input/output), the SVC activities (6 — know what each produces and consumes), and the 7 key practices (definitions and distinctions — approximately 15 questions). The incident/problem distinction and output/outcome distinction are the two most-tested conceptual pairs.'),
  ],
  flashcards: [
    fc('itil4-mod8-ch1-fc1', 'Incident vs Problem', 'Incident = unplanned interruption → restore service quickly. Problem = root cause of incidents → eliminate recurrence. Different goals, different processes, can run simultaneously.'),
    fc('itil4-mod8-ch1-fc2', 'SLA vs OLA vs UC', 'SLA = agreement with customer. OLA = internal agreement between IT teams. UC = underpinning contract with external supplier. All define performance expectations at different levels.'),
    fc('itil4-mod8-ch1-fc3', 'Standard vs Normal vs Emergency change', 'Standard = pre-approved, low risk, no CAB needed. Normal = CAB review required. Emergency = urgent, expedited approval through ECAB. Know which requires CAB review.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch1-kc1', 'Which statement about the relationship between incident and problem management is CORRECT?', ['Incidents are caused by problems, so incident management must always wait for problem management to find the root cause', 'Problem management restores service; incident management finds root cause', 'Incident management restores service; problem management identifies and removes root cause', 'Incident and problem management are the same practice with different names'], 2, 'Incident management goal = restore service quickly. Problem management goal = find root cause and prevent recurrence. They run in parallel — service is restored while root cause investigation continues separately.'),
    kc('itil4-mod8-ch1-kc2', 'A candidate sees an exam question asking which principle is violated when a team optimises call handling time at the expense of first-contact resolution. What is the correct answer?', ['Focus on value', 'Keep it simple and practical', 'Think and work holistically', 'Optimise and automate'], 2, 'Optimising one metric (call time) at the expense of the whole system (resolution quality, repeat contacts) = violating "Think and work holistically." This is the classic unintended consequence trap question — a local improvement that damages the broader system.'),
  ],
  summary: ['Know all 7 guiding principles by name and core idea — they carry approximately 7 exam questions.', 'The 7 key practices (especially the incident vs problem distinction) carry approximately 15 exam questions.', 'Read "which is NOT" questions very carefully — they test whether you can identify the wrong answer among correct-sounding options.'],
  examTip: 'The exam tests application, not just recall. Spend 70% of revision time on scenario questions that ask "which principle/practice applies?" rather than on definition memorisation.',
};

const mod8Ch2: Chapter = {
  id: 'itil4-mod8-ch2',
  title: 'Common Traps and Trick Questions',
  learningObjectives: [
    lo('remember', 'Student can recall the most frequent ITIL 4 Foundation exam traps.'),
    lo('understand', 'Student can explain why common wrong answers are wrong.'),
  ],
  sections: [
    sec('itil4-mod8-ch2-s1', 'Classic Traps', 'The five most common ITIL 4 Foundation exam traps: (1) Incident vs Problem — "restore" = incident, "root cause" = problem. (2) Output vs Outcome — outputs are deliverables; outcomes are results that matter to stakeholders. (3) Governance vs Management — governance directs and controls; management plans, builds, runs, and improves. (4) Standard vs Emergency change — standard is pre-approved routine; emergency is urgent, not pre-approved. (5) Local optimisation questions — any scenario where one metric improves while another worsens = "Think and work holistically."'),
    sec('itil4-mod8-ch2-s2', 'Distractor Patterns', 'ITIL exam questions use four distractor patterns: (1) the "plausible near-miss" — an answer that sounds right but uses almost-correct terminology; (2) the "too comprehensive" answer — contains true statements but is more than what the question asks; (3) the "absolute language" distractor — uses "always", "never", "all" which ITIL rarely mandates; (4) the "wrong practice" answer — a correct concept but attributed to the wrong practice (e.g., a problem management answer in an incident question).'),
  ],
  flashcards: [
    fc('itil4-mod8-ch2-fc1', 'Utility vs Warranty', 'Utility = what the service does (fit for purpose). Warranty = how reliably it does it (fit for use — available, secure, sufficient capacity). A service needs BOTH for value to be realised.'),
    fc('itil4-mod8-ch2-fc2', 'Workaround', 'A temporary solution that reduces the impact of an incident or problem for which a full resolution is not yet available. Enables service to continue while permanent fix is developed.'),
    fc('itil4-mod8-ch2-fc3', 'Distractor pattern', 'A technique in exam question writing where plausible-sounding wrong answers are constructed to catch candidates who have partial knowledge or confuse similar concepts.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch2-kc1', 'A service desk team resolves 95% of contacts at first contact. However, user satisfaction scores remain low because users feel the desk is unhelpful and impersonal. What does this tell us?', ['The service desk is performing well — 95% FCR is excellent', 'The service desk is delivering outputs (resolved contacts) but not the outcome users value (a helpful experience)', 'The problem lies with users having unrealistic expectations', 'The SLA should be changed to include satisfaction scores'], 1, 'This is the output vs outcome trap. 95% FCR = a strong output metric. Poor satisfaction = poor outcome. The service desk is technically resolving contacts but failing to deliver the user experience that constitutes real value — confirming that outputs alone do not equal outcomes.'),
    kc('itil4-mod8-ch2-kc2', 'An exam question states: "A major incident has been resolved with a workaround. The service is restored but the underlying cause is unknown. What should happen next?" Which answer is CORRECT?', ['Close the incident — service is restored and the user is satisfied', 'Raise a problem record to investigate the root cause', 'Submit a standard change to prevent recurrence', 'Update the SLA to allow for future incidents of this type'], 1, 'A workaround restores service (incident closed or pending closure) but an unknown root cause means a problem record should be raised for root cause investigation. Closing without investigating leaves the cause unresolved and the incident likely to recur.'),
  ],
  summary: ['Five classic traps: incident/problem, output/outcome, governance/management, change types, local optimisation.', 'Eliminate absolute language ("always", "never") and "too comprehensive" answers first.', 'Wrong practice attribution is a common distractor — verify not just that the concept is right but that it is assigned to the correct practice.'],
  examTip: 'Eliminate answers that use absolute language ("always", "never", "all") — ITIL is a flexible framework and rarely mandates absolutes. Also eliminate answers that violate a guiding principle.',
};

const mod8Ch3: Chapter = {
  id: 'itil4-mod8-ch3',
  title: 'Full Mock Exam',
  learningObjectives: [
    lo('remember', 'Student can recall exam conditions: 40 questions, 60 minutes, closed book.'),
    lo('understand', 'Student can interpret their mock exam results to identify remaining weak areas.'),
  ],
  sections: [
    sec('itil4-mod8-ch3-s1', 'Mock Exam Instructions', 'The mock exam contains 40 questions mirroring the real exam format — single-best-answer, 60-minute time limit, 26 out of 40 (65%) to pass. Approach it under real conditions: no notes, no pausing, no checking answers mid-exam. Set a timer and simulate the pressure of the real sitting. After completing, review every question — understand why wrong answers are wrong, not just why correct answers are correct. The review is where the real learning happens.'),
    sec('itil4-mod8-ch3-s2', 'Interpreting Your Score', 'Common weak areas revealed by mock exams: distinguishing SVC activities from practices; knowing which SVS component governs what; the exact ITIL definitions (output vs outcome, utility vs warranty, incident vs problem). Map every wrong answer to its module and track which domains cluster the most errors. If you score below 30 out of 40 (75%), return to the weakest modules before booking the real exam — a 10-point buffer absorbs exam-day performance variance.'),
  ],
  flashcards: [
    fc('itil4-mod8-ch3-fc1', 'Mock exam strategy', 'Complete the mock under real conditions (timed, closed book). Then review every wrong answer to understand the underlying concept — not just the correct answer. Pattern-matching wrong answers to modules reveals study priorities.'),
    fc('itil4-mod8-ch3-fc2', 'Utility vs Warranty', 'Utility = what the service does (fit for purpose). Warranty = how reliably it does it (fit for use). A service needs BOTH for value to be realised — utility without warranty = unreliable service; warranty without utility = reliable but useless service.'),
    fc('itil4-mod8-ch3-fc3', 'Exam-day strategy', 'Answer every question — no negative marking. Flag uncertain answers and return. Read each question twice before answering. Eliminate clearly wrong options first. Choose the most ITIL-specific answer when two options seem correct.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch3-kc1', 'Which of the following BEST describes "warranty" in ITIL 4?', ['The legal guarantee provided with a physical product', 'The assurance that a service will meet agreed requirements — covering availability, capacity, security, and continuity', 'The process of testing a service before release', 'A type of SLA for high-priority services'], 1, 'Warranty in ITIL 4 = fit for use — assurance that the service is available when needed, has sufficient capacity, is secure, and can recover from failures. Combined with utility (fit for purpose), it enables value.'),
    kc('itil4-mod8-ch3-kc2', 'A candidate scores 22 out of 40 on the mock exam. What should they do?', ['Book the real exam immediately — mock results are not predictive', 'Review every wrong answer, identify weak domains, study those modules, then retake the mock', 'Focus only on the questions they got right to build confidence', 'Accept the result — 22 is close to the pass mark of 26'], 1, '22 out of 40 = 55%, below the 65% pass mark. The correct action is to review wrong answers (understand the gaps), study the weak domains, and retake the mock. Booking the real exam before reaching consistent 75%+ on mocks wastes the exam fee.'),
  ],
  summary: ['Take the mock under real exam conditions — timed, closed book, no pausing.', 'Review every wrong answer to understand the concept, not just the correct letter.', 'Aim for 75%+ (30/40) on mocks before booking the real exam to allow for performance variance.'],
  examTip: 'If you score below 70% on the mock, spend 48 hours reviewing the failing domains before booking. If above 70%, book within a week while the material is fresh.',
};

const module8: Module = {
  id: 'itil4-mod8',
  title: 'Exam Prep',
  description: 'Final revision: quick domain review, common traps, exam technique, and a full 40-question timed mock exam.',
  chapters: [mod8Ch1, mod8Ch2, mod8Ch3],
};

// ---------------------------------------------------------------------------
// Course root
// ---------------------------------------------------------------------------

export const itil4Course: Course = {
  id: 'itil4-foundation',
  title: 'ITIL 4 Foundation',
  subtitle: 'Complete preparation for the ITIL 4 Foundation certification exam',
  vendor: 'PeopleCert / Axelos',
  level: 'Foundation',
  examCode: 'ITIL-4-Foundation',
  totalExamQuestions: 40,
  examDuration: 60,
  passScore: 65,
  cost: 'Approx. $350 USD (varies by country and reseller)',
  modules: [
    module0,
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
  ],
  examBank: [],
  mockExam: [],
};
