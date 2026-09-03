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
    sec('itil4-mod0-ch1-s1', 'About the Exam', 'TODO: Explain the ITIL 4 Foundation exam format (40 MCQ, 60 min, 65% pass, closed book).'),
    sec('itil4-mod0-ch1-s2', 'Question Strategy', 'TODO: Explain how to approach ITIL exam questions — eliminate wrong answers, watch for absolute language.'),
    sec('itil4-mod0-ch1-s3', 'Booking and Logistics', 'TODO: Explain how to book through PeopleCert, online proctoring requirements, ID rules.'),
  ],
  flashcards: [
    fc('itil4-mod0-ch1-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod0-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod0-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod0-ch1-kc1', 'TODO: question about exam format', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod0-ch1-kc2', 'TODO: question about pass mark', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod0-ch2-s1', 'Diagnostic Quiz', 'TODO: Explain how the 2-question-per-domain diagnostic works and what to do with the results.'),
    sec('itil4-mod0-ch2-s2', 'Interpreting Results', 'TODO: Explain how to map weak domains to specific modules for targeted study.'),
  ],
  flashcards: [
    fc('itil4-mod0-ch2-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod0-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod0-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod0-ch2-kc1', 'TODO: diagnostic question 1', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod0-ch2-kc2', 'TODO: diagnostic question 2', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod1-ch1-s1', 'ITIL Definition of Service', 'TODO: Explain the ITIL 4 definition: a means of enabling value co-creation by facilitating outcomes that customers want to achieve.'),
    sec('itil4-mod1-ch1-s2', 'Products vs Services', 'TODO: Explain how ITIL distinguishes products (configurations of resources) from services.'),
    sec('itil4-mod1-ch1-s3', 'Real-World Example', 'TODO: Walk through an example such as email-as-a-service to ground the definitions.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch1-fc1', 'Service', 'A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.'),
    fc('itil4-mod1-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod1-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch1-kc1', 'TODO: question about the ITIL definition of service', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod1-ch1-kc2', 'TODO: question distinguishing product from service', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod1-ch2-s1', 'Value and Co-creation', 'TODO: Explain that value is co-created — the provider enables it but the customer realises it.'),
    sec('itil4-mod1-ch2-s2', 'Outputs vs Outcomes', 'TODO: Explain output (a deliverable) vs outcome (a result for the stakeholder).'),
    sec('itil4-mod1-ch2-s3', 'Costs and Risks', 'TODO: Explain that service providers remove costs/risks from the consumer and absorb or manage them.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch2-fc1', 'Outcome', 'A result for a stakeholder enabled by one or more outputs — the "why" behind using a service.'),
    fc('itil4-mod1-ch2-fc2', 'Output', 'A tangible or intangible deliverable of an activity — the "what" that is produced.'),
    fc('itil4-mod1-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch2-kc1', 'TODO: question about output vs outcome', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod1-ch2-kc2', 'TODO: question about value co-creation', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod1-ch3-s1', 'Provider and Consumer Roles', 'TODO: Explain service provider, service consumer, customer, user, and sponsor roles.'),
    sec('itil4-mod1-ch3-s2', 'Service Relationship Model', 'TODO: Explain the three components: service provisioning, service consumption, service relationship management.'),
    sec('itil4-mod1-ch3-s3', 'Example Relationship Chain', 'TODO: Walk through a scenario where the same org is both provider and consumer in a supply chain.'),
  ],
  flashcards: [
    fc('itil4-mod1-ch3-fc1', 'Service Provider', 'An organisation that provides services to consumers.'),
    fc('itil4-mod1-ch3-fc2', 'Service Consumer', 'An organisation that consumes services — may include customers, users, and sponsors.'),
    fc('itil4-mod1-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod1-ch3-kc1', 'TODO: question about service relationship roles', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod1-ch3-kc2', 'TODO: question about the service relationship model', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod2-ch1-s1', 'ITIL Origins', 'TODO: Explain ITIL origins in the UK CCTA in the 1980s and its initial focus on IT operations.'),
    sec('itil4-mod2-ch1-s2', 'ITIL v2, v3, and 2011', 'TODO: Summarise key changes across versions: process library, service lifecycle, consolidated update.'),
    sec('itil4-mod2-ch1-s3', 'Why ITIL 4?', 'TODO: Explain the drivers for ITIL 4: Agile, DevOps, cloud, digital transformation.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch1-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod2-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod2-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch1-kc1', 'TODO: question about ITIL history', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod2-ch1-kc2', 'TODO: question about ITIL 4 drivers', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod2-ch2-s1', 'Defining ITSM', 'TODO: Explain ITSM as the set of specialised organisational capabilities for enabling value via services.'),
    sec('itil4-mod2-ch2-s2', 'ITSM in a Digital World', 'TODO: Explain how cloud, APIs, and continuous delivery have changed service management demands.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch2-fc1', 'ITSM', 'IT Service Management — the implementation and management of quality IT services that meet business needs.'),
    fc('itil4-mod2-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod2-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch2-kc1', 'TODO: question about ITSM definition', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod2-ch2-kc2', 'TODO: question about ITSM scope', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod2-ch3-s1', 'ITIL 4 Components Overview', 'TODO: Introduce the Service Value System, Four Dimensions Model, Guiding Principles, and practices as the main pillars.'),
    sec('itil4-mod2-ch3-s2', 'Integration with Other Frameworks', 'TODO: Explain how ITIL 4 is designed to be complementary to Agile, DevOps, Lean, and COBIT.'),
  ],
  flashcards: [
    fc('itil4-mod2-ch3-fc1', 'Service Value System (SVS)', 'The ITIL 4 model showing how all components and activities of an organisation work together to facilitate value creation.'),
    fc('itil4-mod2-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod2-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod2-ch3-kc1', 'TODO: question about ITIL 4 structural components', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod2-ch3-kc2', 'TODO: question about ITIL 4 and other frameworks', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod3-ch1-s1', 'Roles and Responsibilities', 'TODO: Explain how clear roles, decision rights, and accountability enable effective service management.'),
    sec('itil4-mod3-ch1-s2', 'Culture and Communication', 'TODO: Explain why organisational culture, collaboration styles, and communication patterns matter.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch1-fc1', 'Four Dimensions Model', 'The ITIL 4 model identifying four perspectives that must all be considered for effective service management: Organizations and People, Information and Technology, Partners and Suppliers, Value Streams and Processes.'),
    fc('itil4-mod3-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch1-kc1', 'TODO: question about the Organizations and People dimension', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod3-ch1-kc2', 'TODO: question identifying which of the four dimensions a scenario involves', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod3-ch2-s1', 'Information as a Service Asset', 'TODO: Explain how information (data, knowledge, records) is a critical enabler of ITSM.'),
    sec('itil4-mod3-ch2-s2', 'Technology Considerations', 'TODO: Explain the role of automation, AI, cloud, and integration technologies in modern service management.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch2-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch2-kc1', 'TODO: question about Information and Technology dimension', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod3-ch2-kc2', 'TODO: question about technology role in service management', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod3-ch3-s1', 'Third-Party Relationships', 'TODO: Explain how vendors, partners, and outsourced suppliers fit into the service delivery chain.'),
    sec('itil4-mod3-ch3-s2', 'Contracts and Agreements', 'TODO: Explain the role of contracts, SLAs, and underpinning contracts in managing supplier performance.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch3-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch3-kc1', 'TODO: question about Partners and Suppliers dimension', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod3-ch3-kc2', 'TODO: question about managing supplier relationships', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod3-ch4-s1', 'Value Streams', 'TODO: Explain a value stream as the series of steps used to create and deliver a product or service to a consumer.'),
    sec('itil4-mod3-ch4-s2', 'Processes and Procedures', 'TODO: Explain how processes (what to do), procedures (how to do it), and work instructions relate.'),
  ],
  flashcards: [
    fc('itil4-mod3-ch4-fc1', 'Value Stream', 'A series of steps an organisation undertakes to create and deliver products and services to consumers.'),
    fc('itil4-mod3-ch4-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod3-ch4-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod3-ch4-kc1', 'TODO: question about value streams and processes dimension', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod3-ch4-kc2', 'TODO: question about process vs procedure', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod4-ch1-s1', 'What the Principle Means', 'TODO: Explain that everything must link back to value for the consumer — not just cost reduction or technical excellence.'),
    sec('itil4-mod4-ch1-s2', 'Applying the Principle', 'TODO: Provide examples of asking "how does this create value?" before starting any initiative or process.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch1-fc1', 'Guiding Principles', 'Recommendations that guide an organisation in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure.'),
    fc('itil4-mod4-ch1-fc2', 'Focus on Value', 'Guiding principle: everything the organisation does must link, directly or indirectly, to value for itself, its customers, and other stakeholders.'),
    fc('itil4-mod4-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch1-kc1', 'TODO: scenario question applying Focus on Value', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch1-kc2', 'TODO: question identifying Focus on Value in context', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'The seven guiding principles each appear in exam scenarios. "Focus on Value" answers are usually the ones that tie an action back to customer benefit rather than internal efficiency alone.',
};

const mod4Ch2: Chapter = {
  id: 'itil4-mod4-ch2',
  title: 'Start Where You Are',
  learningObjectives: [
    lo('remember', 'Student can recall the "Start Where You Are" guiding principle.'),
    lo('understand', 'Student can explain why assessing the current state before redesigning processes saves time and waste.'),
  ],
  sections: [
    sec('itil4-mod4-ch2-s1', 'Assess Before Redesigning', 'TODO: Explain why existing capabilities, processes, and tools should be evaluated before discarding them.'),
    sec('itil4-mod4-ch2-s2', 'Measurement and Observation', 'TODO: Explain the role of direct observation and measurement in understanding the current state.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch2-fc1', 'Start Where You Are', 'Guiding principle: do not start from scratch; build on existing services, processes, programmes, and capabilities where possible.'),
    fc('itil4-mod4-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch2-kc1', 'TODO: scenario question about Start Where You Are', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch2-kc2', 'TODO: question identifying this principle in a scenario', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'Exam scenarios that describe scrapping everything and starting fresh are usually violating "Start Where You Are." The correct answer typically involves assessing what is already working.',
};

const mod4Ch3: Chapter = {
  id: 'itil4-mod4-ch3',
  title: 'Progress Iteratively with Feedback',
  learningObjectives: [
    lo('remember', 'Student can recall the "Progress Iteratively with Feedback" guiding principle.'),
    lo('understand', 'Student can explain how iterative delivery and feedback loops reduce risk in service improvement.'),
  ],
  sections: [
    sec('itil4-mod4-ch3-s1', 'Iteration Over Big Bang', 'TODO: Explain why small, frequent improvements with review checkpoints outperform large one-shot rollouts.'),
    sec('itil4-mod4-ch3-s2', 'Feedback Mechanisms', 'TODO: Explain how to gather and act on feedback within and between iterations.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch3-fc1', 'Progress Iteratively with Feedback', 'Guiding principle: resist the temptation to do everything at once; use timeboxed iterations and feedback to guide direction.'),
    fc('itil4-mod4-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch3-kc1', 'TODO: scenario question about iterative progress', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch3-kc2', 'TODO: question about feedback loops', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'This principle aligns ITIL with Agile/Scrum thinking. If a scenario offers a choice between a six-month plan and a pilot-then-iterate approach, the iterative option usually reflects this principle.',
};

const mod4Ch4: Chapter = {
  id: 'itil4-mod4-ch4',
  title: 'Collaborate and Promote Visibility',
  learningObjectives: [
    lo('remember', 'Student can recall the "Collaborate and Promote Visibility" guiding principle.'),
    lo('understand', 'Student can explain why transparency and cross-team collaboration improve service outcomes.'),
  ],
  sections: [
    sec('itil4-mod4-ch4-s1', 'Breaking Down Silos', 'TODO: Explain why collaboration across teams, departments, and suppliers leads to better decisions.'),
    sec('itil4-mod4-ch4-s2', 'Making Work Visible', 'TODO: Explain the value of dashboards, shared backlogs, and open communication channels.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch4-fc1', 'Collaborate and Promote Visibility', 'Guiding principle: involve the right people in the right roles and ensure activities are transparent to create trust and shared understanding.'),
    fc('itil4-mod4-ch4-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch4-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch4-kc1', 'TODO: scenario about collaboration and visibility', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch4-kc2', 'TODO: question identifying this principle in context', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'Scenarios describing hidden work, lack of stakeholder involvement, or siloed decisions are usually problems solved by this principle. Visibility creates trust and surfaces risks early.',
};

const mod4Ch5: Chapter = {
  id: 'itil4-mod4-ch5',
  title: 'Think and Work Holistically',
  learningObjectives: [
    lo('remember', 'Student can recall the "Think and Work Holistically" guiding principle.'),
    lo('understand', 'Student can explain why optimising one part of a system without considering others can cause overall harm.'),
  ],
  sections: [
    sec('itil4-mod4-ch5-s1', 'System Thinking', 'TODO: Explain how services, processes, teams, and tools are interdependent and must be understood as a whole.'),
    sec('itil4-mod4-ch5-s2', 'Avoiding Local Optimisation', 'TODO: Explain the risk of improving one area at the expense of the broader value chain.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch5-fc1', 'Think and Work Holistically', 'Guiding principle: no service, practice, process, or activity stands alone — consider the full system when making decisions.'),
    fc('itil4-mod4-ch5-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch5-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch5-kc1', 'TODO: scenario about holistic thinking', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch5-kc2', 'TODO: question about local vs global optimisation', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'When a scenario shows one team improving their metrics while overall customer satisfaction drops, that is a local optimisation trap — the answer involves "Think and Work Holistically".',
};

const mod4Ch6: Chapter = {
  id: 'itil4-mod4-ch6',
  title: 'Keep It Simple and Practical',
  learningObjectives: [
    lo('remember', 'Student can recall the "Keep It Simple and Practical" guiding principle.'),
    lo('understand', 'Student can explain how complexity in processes and procedures can reduce effectiveness.'),
  ],
  sections: [
    sec('itil4-mod4-ch6-s1', 'Eliminating Waste', 'TODO: Explain how unnecessary steps, approvals, and documentation add cost without adding value.'),
    sec('itil4-mod4-ch6-s2', 'Minimum Viable Process', 'TODO: Explain how to use the minimum number of steps needed to achieve the required outcome.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch6-fc1', 'Keep It Simple and Practical', 'Guiding principle: use the minimum number of steps necessary to accomplish an objective; eliminate anything that does not produce value.'),
    fc('itil4-mod4-ch6-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch6-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch6-kc1', 'TODO: scenario about simplifying a process', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch6-kc2', 'TODO: question identifying process waste', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'ITIL exam questions about overly complex approval chains or bureaucratic processes are usually solved by applying "Keep It Simple and Practical." Less process is better when outcomes are still met.',
};

const mod4Ch7: Chapter = {
  id: 'itil4-mod4-ch7',
  title: 'Optimize and Automate',
  learningObjectives: [
    lo('remember', 'Student can recall the "Optimize and Automate" guiding principle.'),
    lo('understand', 'Student can explain why optimisation must precede automation to avoid automating inefficiency.'),
  ],
  sections: [
    sec('itil4-mod4-ch7-s1', 'Optimise First', 'TODO: Explain that processes must be optimised (simplified, improved) before they are automated.'),
    sec('itil4-mod4-ch7-s2', 'Appropriate Use of Automation', 'TODO: Explain which tasks are good candidates for automation and which require human judgement.'),
  ],
  flashcards: [
    fc('itil4-mod4-ch7-fc1', 'Optimize and Automate', 'Guiding principle: maximise the value of human work by optimising processes first, then automating where it is justified.'),
    fc('itil4-mod4-ch7-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod4-ch7-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod4-ch7-kc1', 'TODO: scenario about automation decisions', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod4-ch7-kc2', 'TODO: question about the order of optimise vs automate', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
  examTip: 'Automating a bad process just makes the bad process faster. The exam tests whether candidates know to optimise first — look for answer options that say "review the process, then automate."',
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
    sec('itil4-mod5-ch1-s1', 'SVS Components', 'TODO: Introduce the five SVS components: Guiding Principles, Governance, Service Value Chain, Practices, Continual Improvement.'),
    sec('itil4-mod5-ch1-s2', 'How the SVS Works', 'TODO: Explain the flow from opportunity/demand input through the SVS to value output.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch1-fc1', 'Service Value System (SVS)', 'The ITIL 4 model representing how all components and activities of an organisation work together to enable value creation through IT-enabled services.'),
    fc('itil4-mod5-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod5-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch1-kc1', 'TODO: question about SVS components', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod5-ch1-kc2', 'TODO: question about SVS inputs and outputs', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod5-ch2-s1', 'Demand as a Trigger', 'TODO: Explain how internal and external demand triggers activity within the SVS.'),
    sec('itil4-mod5-ch2-s2', 'Opportunity', 'TODO: Explain how the SVS also responds to opportunities, not just reactive demand.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch2-fc1', 'Demand', 'The need or desire for products and services that triggers activity within the SVS.'),
    fc('itil4-mod5-ch2-fc2', 'Opportunity', 'Options or possibilities that could add value for stakeholders or otherwise help the organisation improve.'),
    fc('itil4-mod5-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch2-kc1', 'TODO: question about demand vs opportunity', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod5-ch2-kc2', 'TODO: question about SVS inputs', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod5-ch3-s1', 'What Governance Does', 'TODO: Explain that governance sets direction, evaluates performance, and ensures accountability.'),
    sec('itil4-mod5-ch3-s2', 'Governance vs Management', 'TODO: Clarify the distinction: governance directs; management plans, builds, runs, and improves.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch3-fc1', 'Governance', 'The means by which an organisation is directed and controlled — sets direction, evaluates, monitors, and enforces.'),
    fc('itil4-mod5-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod5-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch3-kc1', 'TODO: question about governance in the SVS', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod5-ch3-kc2', 'TODO: question distinguishing governance from management', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod5-ch4-s1', 'The Continual Improvement Model', 'TODO: Walk through the seven steps: What is the vision? Where are we now? Where do we want to be? How do we get there? Take action. Did we get there? How do we keep the momentum going?'),
    sec('itil4-mod5-ch4-s2', 'Embedding Improvement', 'TODO: Explain how improvement should be embedded in everyday work, not treated as a one-time project.'),
  ],
  flashcards: [
    fc('itil4-mod5-ch4-fc1', 'Continual Improvement Model', 'A seven-step ITIL 4 model for guiding improvement initiatives: vision → current state → target state → plan → act → check → sustain.'),
    fc('itil4-mod5-ch4-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod5-ch4-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod5-ch4-kc1', 'TODO: question about the continual improvement model steps', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod5-ch4-kc2', 'TODO: question about where continual improvement applies', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch1-s1', 'Purpose of Plan', 'TODO: Explain that Plan ensures a shared understanding of the vision, current status, and improvement direction.'),
    sec('itil4-mod6-ch1-s2', 'Plan Inputs and Outputs', 'TODO: Describe what flows into and out of the Plan activity in the Service Value Chain.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch1-fc1', 'Service Value Chain', 'An operating model within the ITIL 4 SVS that outlines the key activities required to respond to demand and facilitate value realisation through creation and management of products and services.'),
    fc('itil4-mod6-ch1-fc2', 'Plan (SVC activity)', 'Ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organisation.'),
    fc('itil4-mod6-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch1-kc1', 'TODO: question about the Plan SVC activity purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch1-kc2', 'TODO: question about SVC activity inputs/outputs', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch2-s1', 'Purpose of Improve', 'TODO: Explain that Improve ensures continual improvement of products, services, and practices across all SVC activities.'),
    sec('itil4-mod6-ch2-s2', 'Improvement Inputs', 'TODO: Describe performance data and feedback that feeds into the Improve activity.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch2-fc1', 'Improve (SVC activity)', 'Ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management.'),
    fc('itil4-mod6-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod6-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch2-kc1', 'TODO: question about the Improve SVC activity', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch2-kc2', 'TODO: question about continual improvement in the SVC', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch3-s1', 'Purpose of Engage', 'TODO: Explain that Engage ensures continual understanding of stakeholder needs and fosters good relationships.'),
    sec('itil4-mod6-ch3-s2', 'Engage Inputs and Outputs', 'TODO: Describe stakeholder requirements and feedback flowing in, and requirements for other SVC activities flowing out.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch3-fc1', 'Engage (SVC activity)', 'Provides a good understanding of stakeholder needs, transparency, and continual engagement with all stakeholders.'),
    fc('itil4-mod6-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod6-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch3-kc1', 'TODO: question about the Engage SVC activity purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch3-kc2', 'TODO: question about stakeholder engagement in the SVC', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch4-s1', 'Purpose of Design and Transition', 'TODO: Explain that this activity ensures products and services continually meet stakeholder expectations for quality, cost, and time to market.'),
    sec('itil4-mod6-ch4-s2', 'Design and Transition Outputs', 'TODO: Describe the outputs: requirements for Obtain/Build and Deliver/Support activities.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch4-fc1', 'Design and Transition (SVC activity)', 'Ensures that products and services continually meet stakeholder expectations for quality, costs, and time to market.'),
    fc('itil4-mod6-ch4-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod6-ch4-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch4-kc1', 'TODO: question about Design and Transition activity', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch4-kc2', 'TODO: question about quality and time-to-market in the SVC', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch5-s1', 'Purpose of Obtain/Build', 'TODO: Explain that this activity ensures service components are available when and where they are needed, meeting agreed specifications.'),
    sec('itil4-mod6-ch5-s2', 'Build vs Buy Decisions', 'TODO: Explain how the Obtain/Build activity supports make-or-buy decisions.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch5-fc1', 'Obtain/Build (SVC activity)', 'Ensures that service components are available when and where they are needed, and meet agreed specifications.'),
    fc('itil4-mod6-ch5-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod6-ch5-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch5-kc1', 'TODO: question about Obtain/Build activity purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch5-kc2', 'TODO: question about service component availability', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod6-ch6-s1', 'Purpose of Deliver and Support', 'TODO: Explain that this activity ensures services are delivered and supported according to agreed specifications and stakeholder expectations.'),
    sec('itil4-mod6-ch6-s2', 'Key Outputs', 'TODO: Describe the outputs: services delivered to consumers, performance information for other activities.'),
  ],
  flashcards: [
    fc('itil4-mod6-ch6-fc1', 'Deliver and Support (SVC activity)', 'Ensures that services are delivered and supported according to agreed specifications and stakeholder expectations.'),
    fc('itil4-mod6-ch6-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod6-ch6-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod6-ch6-kc1', 'TODO: question about Deliver and Support activity', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod6-ch6-kc2', 'TODO: question about day-to-day service operations in the SVC', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch1-s1', 'Purpose and Scope', 'TODO: Explain that Incident Management minimises the negative impact of incidents by restoring normal service operation as quickly as possible.'),
    sec('itil4-mod7-ch1-s2', 'Incident Lifecycle', 'TODO: Describe the incident lifecycle: identification, logging, categorisation, prioritisation, diagnosis, resolution, closure.'),
    sec('itil4-mod7-ch1-s3', 'Priority and Escalation', 'TODO: Explain how priority (impact + urgency) drives escalation and SLA target selection.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch1-fc1', 'Incident', 'An unplanned interruption to a service or reduction in the quality of a service.'),
    fc('itil4-mod7-ch1-fc2', 'Incident Management', 'The practice of minimising the negative impact of incidents by restoring normal service operation as quickly as possible.'),
    fc('itil4-mod7-ch1-fc3', 'Priority (Incident)', 'A category used to identify the relative importance of an incident, determined by impact and urgency.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch1-kc1', 'TODO: scenario question about incident prioritisation', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch1-kc2', 'TODO: question about the purpose of Incident Management', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch2-s1', 'Problems, Known Errors, Workarounds', 'TODO: Define problem (unknown cause of incidents), known error (diagnosed but not resolved), and workaround (temporary fix).'),
    sec('itil4-mod7-ch2-s2', 'Problem Management Phases', 'TODO: Explain the three phases: problem identification, problem control (analysis + workarounds), error control (resolution).'),
    sec('itil4-mod7-ch2-s3', 'Reactive vs Proactive Problem Management', 'TODO: Explain reactive (responding to incidents) vs proactive (identifying risks before incidents occur).'),
  ],
  flashcards: [
    fc('itil4-mod7-ch2-fc1', 'Problem', 'A cause, or potential cause, of one or more incidents.'),
    fc('itil4-mod7-ch2-fc2', 'Known Error', 'A problem that has been analysed but has not been resolved — a workaround may exist.'),
    fc('itil4-mod7-ch2-fc3', 'Workaround', 'A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch2-kc1', 'TODO: question distinguishing problem from incident', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch2-kc2', 'TODO: question about the three Problem Management phases', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch3-s1', 'Purpose of Change Enablement', 'TODO: Explain that Change Enablement maximises successful changes by assessing risks properly and enabling speed.'),
    sec('itil4-mod7-ch3-s2', 'Change Types', 'TODO: Define standard changes (pre-authorised, low risk), normal changes (must go through approval), emergency changes (expedited approval for urgent situations).'),
    sec('itil4-mod7-ch3-s3', 'Change Authority', 'TODO: Explain how change authority varies by change type and risk level.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch3-fc1', 'Change', 'The addition, modification, or removal of anything that could have a direct or indirect effect on services.'),
    fc('itil4-mod7-ch3-fc2', 'Standard Change', 'A pre-authorised change that is low risk, relatively common, and follows a procedure or work instruction.'),
    fc('itil4-mod7-ch3-fc3', 'Emergency Change', 'A change that must be introduced as soon as possible, with an expedited risk assessment and authorisation process.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch3-kc1', 'TODO: scenario asking which change type applies', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch3-kc2', 'TODO: question about the purpose of Change Enablement', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch4-s1', 'Purpose and Scope', 'TODO: Explain that Service Request Management handles user requests for information, standard services, or pre-approved changes.'),
    sec('itil4-mod7-ch4-s2', 'Request vs Incident', 'TODO: Clarify that requests are planned, expected events (password reset, new laptop) while incidents are unplanned disruptions.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch4-fc1', 'Service Request', 'A formal request from a user for something to be provided — for example, a request for information, advice, or access to a resource.'),
    fc('itil4-mod7-ch4-fc2', 'Service Request Management', 'The practice of supporting the agreed quality of a service by handling all pre-defined, user-initiated service requests.'),
    fc('itil4-mod7-ch4-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch4-kc1', 'TODO: scenario distinguishing service request from incident', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch4-kc2', 'TODO: question about the purpose of Service Request Management', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch5-s1', 'Purpose of the Service Desk', 'TODO: Explain that the Service Desk captures demand for incident resolution and service requests — the single point of contact for users.'),
    sec('itil4-mod7-ch5-s2', 'Service Desk Channels and Models', 'TODO: Describe channel options (phone, email, chat, portal, walk-in) and structural models (local, centralised, virtual, follow-the-sun).'),
  ],
  flashcards: [
    fc('itil4-mod7-ch5-fc1', 'Service Desk', 'The practice of capturing demand for incident resolution and service requests — acts as the single point of contact for users.'),
    fc('itil4-mod7-ch5-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod7-ch5-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch5-kc1', 'TODO: question about Service Desk purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch5-kc2', 'TODO: question about Service Desk channel models', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch6-s1', 'Purpose of SLM', 'TODO: Explain that SLM sets clear business-based targets for service performance and ensures delivery is assessed, monitored, and managed against them.'),
    sec('itil4-mod7-ch6-s2', 'SLA, OLA, and UC', 'TODO: Define Service Level Agreement (with customer), Operational Level Agreement (internal), and Underpinning Contract (with supplier).'),
  ],
  flashcards: [
    fc('itil4-mod7-ch6-fc1', 'Service Level Agreement (SLA)', 'A documented agreement between a service provider and a customer that identifies both services required and the expected level of service.'),
    fc('itil4-mod7-ch6-fc2', 'Operational Level Agreement (OLA)', 'An agreement between an IT service provider and another part of the same organisation that supports delivery of services to customers.'),
    fc('itil4-mod7-ch6-fc3', 'Service Level Management (SLM)', 'The practice of setting clear business-based targets for service levels and ensuring delivery of services is properly assessed, monitored, and managed.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch6-kc1', 'TODO: question about SLM purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch6-kc2', 'TODO: scenario distinguishing SLA, OLA, and UC', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch7-s1', 'Purpose of the Practice', 'TODO: Explain that the Continual Improvement practice aligns the organisation\'s practices and services with changing business needs through ongoing improvement.'),
    sec('itil4-mod7-ch7-s2', 'The Continual Improvement Register', 'TODO: Explain what a CIR is, what gets logged in it, and how improvements are prioritised and tracked.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch7-fc1', 'Continual Improvement Register (CIR)', 'A database or structured document used to track and manage improvement opportunities and their status.'),
    fc('itil4-mod7-ch7-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod7-ch7-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch7-kc1', 'TODO: question about the Continual Improvement practice vs model', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch7-kc2', 'TODO: question about the Continual Improvement Register', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch8-s1', 'Purpose of ITAM', 'TODO: Explain that IT Asset Management plans and manages the full lifecycle of IT assets to maximise value, control costs, and manage risks.'),
    sec('itil4-mod7-ch8-s2', 'Asset vs Configuration Item', 'TODO: Clarify the relationship between IT assets (things with financial value) and CIs (things that need to be managed to deliver a service).'),
  ],
  flashcards: [
    fc('itil4-mod7-ch8-fc1', 'IT Asset', 'Any financially valuable component that can contribute to delivery of an IT product or service.'),
    fc('itil4-mod7-ch8-fc2', 'IT Asset Management', 'The practice of planning and managing the full lifecycle of all IT assets to help the organisation maximise value, control costs, manage risks, and support decision-making.'),
    fc('itil4-mod7-ch8-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch8-kc1', 'TODO: question about IT Asset Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch8-kc2', 'TODO: question about asset vs CI', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch9-s1', 'Purpose', 'TODO: Explain that this practice systematically observes services and service components, and records and reports selected changes of state called events.'),
    sec('itil4-mod7-ch9-s2', 'Event Types', 'TODO: Define informational (normal operation), warning (approaching threshold), and exception (something has failed or breached a threshold) events.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch9-fc1', 'Event', 'Any change of state that has significance for the management of a service or other configuration item.'),
    fc('itil4-mod7-ch9-fc2', 'Monitoring and Event Management', 'The practice of systematically observing services and recording and reporting selected changes of state (events).'),
    fc('itil4-mod7-ch9-fc3', 'Exception Event', 'An event indicating that a service or CI has breached a threshold or failed — requires immediate action.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch9-kc1', 'TODO: question about event types', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch9-kc2', 'TODO: question about Monitoring and Event Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch10-s1', 'Purpose', 'TODO: Explain that Release Management makes new and changed services and features available for use.'),
    sec('itil4-mod7-ch10-s2', 'Release vs Change', 'TODO: Explain how a release bundles one or more changes and how Release Management relates to Change Enablement.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch10-fc1', 'Release', 'A version of a service or other configuration item, or a collection of configuration items, that is made available for use.'),
    fc('itil4-mod7-ch10-fc2', 'Release Management', 'The practice of making new and changed services and features available for use.'),
    fc('itil4-mod7-ch10-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch10-kc1', 'TODO: question about Release Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch10-kc2', 'TODO: question distinguishing release from change', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch11-s1', 'Purpose', 'TODO: Explain that Service Configuration Management ensures accurate and reliable information about configuration items and their relationships is available.'),
    sec('itil4-mod7-ch11-s2', 'CMDB and CIs', 'TODO: Explain the CMDB as the repository of CI records and their relationships.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch11-fc1', 'Configuration Item (CI)', 'Any component that needs to be managed in order to deliver an IT service.'),
    fc('itil4-mod7-ch11-fc2', 'Configuration Management Database (CMDB)', 'A database used to store configuration records throughout their lifecycle.'),
    fc('itil4-mod7-ch11-fc3', 'Service Configuration Management', 'The practice of ensuring accurate and reliable information about configuration items and their relationships is available when and where it is needed.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch11-kc1', 'TODO: question about Service Configuration Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch11-kc2', 'TODO: question about the CMDB', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch12-s1', 'Purpose', 'TODO: Explain that Deployment Management moves new or changed hardware, software, documentation, processes, or any other component to live environments.'),
    sec('itil4-mod7-ch12-s2', 'Deployment vs Release', 'TODO: Clarify that deployment is the technical act of moving components to environments; release is making services available to users.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch12-fc1', 'Deployment Management', 'The practice of moving new or changed hardware, software, documentation, or any other component to live environments.'),
    fc('itil4-mod7-ch12-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod7-ch12-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch12-kc1', 'TODO: question about Deployment Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch12-kc2', 'TODO: question distinguishing deployment from release', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch13-s1', 'Purpose', 'TODO: Explain that Service Catalogue Management provides a single source of consistent information about all services and service offerings.'),
    sec('itil4-mod7-ch13-s2', 'Catalogue Audiences', 'TODO: Explain the customer-facing (business) view vs the technical (service provider) view of the catalogue.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch13-fc1', 'Service Catalogue', 'A structured document or database with information about all live IT services, including those available for deployment.'),
    fc('itil4-mod7-ch13-fc2', 'Service Catalogue Management', 'The practice of providing a single source of consistent information on all services and service offerings available from the provider.'),
    fc('itil4-mod7-ch13-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch13-kc1', 'TODO: question about Service Catalogue Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch13-kc2', 'TODO: question about service catalogue audience', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch14-s1', 'Purpose', 'TODO: Explain that Availability Management ensures services deliver agreed levels of availability to meet business needs.'),
    sec('itil4-mod7-ch14-s2', 'Measuring Availability', 'TODO: Explain availability metrics: percentage uptime, MTTR (mean time to restore), MTBF (mean time between failures).'),
  ],
  flashcards: [
    fc('itil4-mod7-ch14-fc1', 'Availability', 'The ability of an IT service or component to perform its required function at a stated instant or over a stated period of time.'),
    fc('itil4-mod7-ch14-fc2', 'MTTR', 'Mean Time To Restore — the average time taken to restore a service after a failure.'),
    fc('itil4-mod7-ch14-fc3', 'MTBF', 'Mean Time Between Failures — the average time between recoverable failures of a service or component.'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch14-kc1', 'TODO: question about Availability Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch14-kc2', 'TODO: question about availability metrics', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod7-ch15-s1', 'Purpose', 'TODO: Explain that Supplier Management ensures suppliers and their performance are managed appropriately to support seamless, quality products and services.'),
    sec('itil4-mod7-ch15-s2', 'Supplier Governance', 'TODO: Explain how underpinning contracts, supplier scorecards, and periodic reviews are used to manage supplier performance.'),
  ],
  flashcards: [
    fc('itil4-mod7-ch15-fc1', 'Supplier Management', 'The practice of ensuring the organisation\'s suppliers and their performances are managed appropriately to support seamless, quality products and services.'),
    fc('itil4-mod7-ch15-fc2', 'Underpinning Contract', 'A contract between an IT service provider and a third party that supports delivery of a service to a customer.'),
    fc('itil4-mod7-ch15-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod7-ch15-kc1', 'TODO: question about Supplier Management purpose', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod7-ch15-kc2', 'TODO: question about underpinning contracts', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod8-ch1-s1', 'Module-by-Module Cheat Sheet', 'TODO: Provide a condensed one-page reference for each module\'s key definitions and models.'),
    sec('itil4-mod8-ch1-s2', 'High-Value Topics', 'TODO: Highlight the topics most likely to appear: SVS components, four dimensions, guiding principles, seven key practices.'),
  ],
  flashcards: [
    fc('itil4-mod8-ch1-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch1-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch1-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch1-kc1', 'TODO: mixed-domain review question 1', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod8-ch1-kc2', 'TODO: mixed-domain review question 2', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod8-ch2-s1', 'Classic Traps', 'TODO: List and explain classic traps: incident vs problem, change type selection, output vs outcome, governance vs management, SLA vs OLA.'),
    sec('itil4-mod8-ch2-s2', 'Distractor Patterns', 'TODO: Explain how ITIL questions are written to make plausible-sounding wrong answers tempting.'),
  ],
  flashcards: [
    fc('itil4-mod8-ch2-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch2-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch2-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch2-kc1', 'TODO: trap question about incident vs problem', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod8-ch2-kc2', 'TODO: trap question about output vs outcome', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
    sec('itil4-mod8-ch3-s1', 'Mock Exam Instructions', 'TODO: Explain how to take the timed 40-question mock exam and how to review results.'),
    sec('itil4-mod8-ch3-s2', 'Interpreting Your Score', 'TODO: Guide candidates on mapping wrong answers back to specific modules for targeted last-minute review.'),
  ],
  flashcards: [
    fc('itil4-mod8-ch3-fc1', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch3-fc2', 'TODO: term', 'TODO: definition'),
    fc('itil4-mod8-ch3-fc3', 'TODO: term', 'TODO: definition'),
  ],
  knowledgeChecks: [
    kc('itil4-mod8-ch3-kc1', 'TODO: sample exam-style question 1', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
    kc('itil4-mod8-ch3-kc2', 'TODO: sample exam-style question 2', ['TODO: option A', 'TODO: option B', 'TODO: option C', 'TODO: option D'], 0, 'TODO: explanation'),
  ],
  summary: ['TODO: key point 1', 'TODO: key point 2', 'TODO: key point 3'],
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
