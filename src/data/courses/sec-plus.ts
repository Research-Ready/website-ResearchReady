import type {
  Course,
  Module,
  Chapter,
  Section,
  Flashcard,
  KnowledgeCheck,
  LabExercise,
  LearningObjective,
} from './types';

// ---------------------------------------------------------------------------
// Helper builders — keep individual chapter objects under 20 lines each
// ---------------------------------------------------------------------------

function sec(id: string, title: string, content?: string): Section {
  return {
    id,
    title,
    contentPlaceholder: content ?? `Content coming soon: ${title}`,
  };
}

function fc(id: string, term: string, definition: string): Flashcard {
  return { id, term, definition };
}

function kc(
  id: string,
  question: string,
  options: [string, string, string, string],
  correct: 0 | 1 | 2 | 3,
  explanation: string,
  bloomsLevel: 'remember' | 'understand' | 'apply' | 'analyze',
): KnowledgeCheck {
  return { id, question, options, correct, explanation, bloomsLevel };
}

function lo(level: 'remember' | 'understand' | 'apply' | 'analyze', text: string): LearningObjective {
  return { level, text };
}

// ---------------------------------------------------------------------------
// Module 0 — Course Intro
// ---------------------------------------------------------------------------

const mod0: Module = {
  id: 'mod0-intro',
  title: 'Module 0: Course Introduction',
  description: 'Exam format overview, scoring, performance-based questions, and a pre-assessment diagnostic.',
  chapters: [
    {
      id: 'ch0-exam-format',
      title: 'Exam Format & Scoring',
      learningObjectives: [
        lo('remember', 'Student can recall the Security+ SY0-701 exam format: 90 questions max, 90 minutes, 750/900 pass score.'),
        lo('understand', 'Student can explain the difference between multiple-choice and performance-based questions.'),
        lo('understand', 'Student can describe how the five exam domains are weighted.'),
      ],
      sections: [
        sec('s0-1', 'Exam Structure and Timing', 'Security+ SY0-701 has up to 90 questions (multiple-choice and performance-based) in 90 minutes. The passing score is 750 on a scale of 100–900. Questions are not all weighted equally — performance-based questions (PBQs) count more. There is no penalty for guessing.'),
        sec('s0-2', 'Domain Weights and Coverage', 'Five domains: General Security Concepts 12%, Threats/Vulnerabilities/Mitigations 22%, Security Architecture 18%, Security Operations 28%, Security Program Management & Oversight 20%. Domain 4 (Security Operations) carries the most weight at 28%.'),
        sec('s0-3', 'Performance-Based Questions (PBQs)', 'PBQs simulate real-world tasks — configuring a firewall, analyzing a pcap, matching terms to a diagram. They appear early in the exam. CompTIA recommends flagging them and returning after answering all multiple-choice questions first, since PBQs consume disproportionate time.'),
      ],
      flashcards: [
        fc('f0-1', 'SY0-701 pass score', '750 on a 100–900 scale — approximately 83% of the maximum score. There is no penalty for guessing; answer every question.'),
        fc('f0-2', 'Performance-based question (PBQ)', 'An interactive exam question that simulates a real-world security task — configuring a device, analyzing logs, or matching concepts to a network diagram. Worth more points than standard MCQs.'),
        fc('f0-3', 'Exam domain', 'A content area of the Security+ exam. SY0-701 has five domains weighted by importance: Security Operations (28%) carries the most exam weight.'),
      ],
      knowledgeChecks: [
        kc('k0-1', 'What is the passing score for the CompTIA Security+ SY0-701 exam?', ['650', '700', '750', '800'], 2, 'The passing score is 750 on a 100–900 scale. This is approximately 83% of the maximum — higher than many candidates expect. Scaled scoring means the raw number of questions answered correctly does not directly map to the score.', 'remember'),
        kc('k0-2', 'Why does CompTIA recommend answering multiple-choice questions before performance-based questions (PBQs)?', ['PBQs are worth fewer points than MCQs', 'PBQs appear at the end of the exam', 'PBQs take more time and should be attempted with remaining time after MCQs are answered', 'MCQs must be answered in order'], 2, 'PBQs simulate real tasks and can take 5–15 minutes each. If tackled first, they consume time that could answer 10–15 MCQs. Flag PBQs, answer all MCQs first, then return to PBQs with remaining time.', 'understand'),
      ],
      summary: [
        'SY0-701: up to 90 questions, 90 minutes, 750/900 passing score, no penalty for guessing.',
        'Five domains weighted by exam importance — Security Operations (28%) is the heaviest.',
        'Flag PBQs and complete all MCQs first — PBQs take much longer per question.',
      ],
      examTip: 'Flag PBQs and return to them last — they take longer and drain time. Answer all multiple-choice questions first, then tackle PBQs with remaining time.',
    },
    {
      id: 'ch0-pre-assessment',
      title: 'Pre-Assessment Diagnostic',
      learningObjectives: [
        lo('remember', 'Student can identify their current knowledge gaps across all five Security+ domains.'),
        lo('understand', 'Student can interpret their diagnostic results to prioritize study effort.'),
      ],
      sections: [
        sec('s0-4', 'How to Use the Diagnostic', 'The diagnostic contains 2 questions per Security+ domain. Complete it without notes — the goal is to reveal what you genuinely know today, not what you can look up. Score each domain separately: 0/2 means critical gap, 2/2 means review only.'),
        sec('s0-5', 'Interpreting Your Results', 'Map your domain scores to this course\'s modules. Security Operations (Domain 4, 28% of exam) has the highest return on study investment — if you scored low there, prioritise Modules 8–9. Domain 1 (General Security Concepts, 12%) is foundational — understand it first even if your score there is decent.'),
      ],
      flashcards: [
        fc('f0-4', 'Diagnostic quiz', 'A short domain-by-domain assessment taken before studying — reveals current knowledge gaps so study time can be allocated to high-impact areas.'),
        fc('f0-5', 'Knowledge gap', 'A domain where current understanding is below exam-passing level — prioritise these for study time over domains where you already score well.'),
        fc('f0-6', 'Conscious incompetence', 'Stage 2 of the Conscious Competence model: knowing that you don\'t know something. The diagnostic moves you from unconscious incompetence (unaware of gaps) to conscious incompetence (aware of gaps, ready to learn).'),
      ],
      knowledgeChecks: [
        kc('k0-3', 'A candidate scores 0/2 on Security Operations and 2/2 on General Security Concepts. What is the BEST use of study time?', ['Study General Security Concepts more deeply since they already know it', 'Allocate the majority of study time to Security Operations since it carries 28% of the exam', 'Study all domains equally regardless of diagnostic scores', 'Skip Security Operations — it is too complex to master quickly'], 1, 'Security Operations carries 28% of exam weight. A 0/2 diagnostic score means a significant gap in the highest-weight domain. This is where study time will have the greatest impact on passing the exam.', 'understand'),
        kc('k0-4', 'What is the PRIMARY purpose of the pre-assessment diagnostic?', ['To measure whether the candidate is ready to sit the exam', 'To provide a final exam preparation experience', 'To reveal current knowledge gaps so study effort can be prioritised', 'To fulfil a course completion requirement before accessing content'], 2, 'The diagnostic surfaces gaps — not readiness. A low diagnostic score is valuable information, not a failure. It tells you exactly where to invest study time to maximise your probability of passing.', 'understand'),
      ],
      summary: [
        'Complete the diagnostic without notes to get an honest snapshot of current knowledge.',
        'Map 0/2 domain scores to the corresponding course modules — those are your priority.',
        'Security Operations (28%) and Threats/Vulnerabilities (22%) together = 50% of the exam — gaps there cost the most.',
      ],
      examTip: 'Use your diagnostic score per domain to weight your study time — spend proportionally more time on domains where you scored below 60%.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 1 — Security Fundamentals (Domain 1, 12%)
// ---------------------------------------------------------------------------

const mod1: Module = {
  id: 'mod1-fundamentals',
  title: 'Module 1: Security Fundamentals',
  description: 'CIA triad, AAA framework, security controls, Zero Trust architecture, and physical security.',
  examWeight: 12,
  chapters: [
    {
      id: 'ch1-cia-triad',
      title: 'CIA Triad',
      learningObjectives: [
        lo('remember', 'Student can define confidentiality, integrity, and availability.'),
        lo('understand', 'Student can explain how each CIA component maps to real security controls.'),
        lo('analyze', 'Student can analyze a security scenario to identify which CIA component is threatened.'),
      ],
      sections: [
        sec('s1-1', 'Confidentiality', 'Confidentiality ensures that information is accessible only to those authorised to see it. Controls that enforce confidentiality include encryption, access controls, data classification, and need-to-know principles. A confidentiality breach occurs when unauthorised parties access data — examples include a data breach, shoulder surfing, or intercepted communications.'),
        sec('s1-2', 'Integrity', 'Integrity ensures that data is accurate, complete, and has not been altered without authorisation. Controls include hashing (MD5, SHA-256), digital signatures, checksums, and version control. An integrity breach occurs when data is altered — examples include SQL injection modifying database records or a man-in-the-middle attack altering network traffic.'),
        sec('s1-3', 'Availability', 'Availability ensures that systems and data are accessible to authorised users when needed. Controls include redundancy, failover systems, backups, DDoS mitigation, and UPS systems. An availability breach is any event preventing legitimate access — DDoS attacks, hardware failures, and ransomware encrypting files all threaten availability.'),
        sec('s1-4', 'CIA in Practice: Real-World Scenarios', 'Security decisions almost always involve CIA trade-offs. Full disk encryption improves confidentiality but adds processing overhead (availability trade-off). A ransomware attack primarily threatens availability (files inaccessible) but may also threaten confidentiality if data is exfiltrated. Exam questions often present a scenario and ask which CIA component is MOST affected.'),
      ],
      flashcards: [
        fc('f1-1', 'Confidentiality', 'Ensuring information is accessible only to authorised parties. Enforced through encryption, access controls, and data classification.'),
        fc('f1-2', 'Integrity', 'Ensuring data is accurate and has not been modified without authorisation. Verified using hashing, digital signatures, and checksums.'),
        fc('f1-3', 'Availability', 'Ensuring systems and data are accessible to authorised users when needed. Protected by redundancy, backups, and DDoS mitigation.'),
      ],
      knowledgeChecks: [
        kc('k1-1', 'An attacker intercepts encrypted emails and decrypts them using a stolen private key. Which CIA component is PRIMARILY violated?', ['Integrity', 'Confidentiality', 'Availability', 'Non-repudiation'], 1, 'Reading private email content without authorisation is a confidentiality violation — the data was accessed by an unauthorised party. Integrity would be violated if the content was altered. Availability would be violated if the email system was taken offline.', 'understand'),
        kc('k1-2', 'A ransomware attack encrypts all files on a file server. Users can no longer access their documents. Which CIA component is PRIMARILY affected?', ['Confidentiality', 'Integrity', 'Availability', 'Authentication'], 2, 'Ransomware makes files inaccessible to legitimate users — this is an availability attack. Note: ransomware may also affect confidentiality if data is exfiltrated before encryption (double extortion), but the PRIMARY impact described here is inaccessibility = availability.', 'analyze'),
      ],
      summary: [
        'CIA Triad: Confidentiality (authorised access only), Integrity (data not altered), Availability (access when needed).',
        'Encryption protects confidentiality. Hashing verifies integrity. Redundancy ensures availability.',
        'Most security incidents affect one CIA component primarily — identify which one the exam question is asking about.',
      ],
      examTip: 'The CIA triad questions often describe a breach scenario — identify the primary impact (data exposed = confidentiality, data altered = integrity, system down = availability).',
    },
    {
      id: 'ch1-aaa',
      title: 'AAA Framework',
      learningObjectives: [
        lo('remember', 'Student can define authentication, authorization, and accounting.'),
        lo('understand', 'Student can distinguish between authentication and authorization.'),
        lo('apply', 'Student can apply AAA concepts to select the correct control for a given scenario.'),
      ],
      sections: [
        sec('s1-5', 'Authentication', 'Authentication verifies the identity of a user, device, or process. Authentication factors: something you know (password), something you have (smart card, OTP), something you are (biometrics), somewhere you are (geolocation), something you do (behavioural). MFA combines two or more factors. Common protocols: RADIUS, LDAP, Kerberos, SAML, OAuth.'),
        sec('s1-6', 'Authorization', 'Authorization determines what an authenticated entity is permitted to do. Models include: DAC (owner grants permissions), MAC (security labels, government/military), RBAC (roles assigned to groups), ABAC (policies based on attributes). Least privilege is the core authorization principle — grant only the permissions needed for the task.'),
        sec('s1-7', 'Accounting and Auditing', 'Accounting (audit logging) records what authenticated, authorised users actually do. Logs capture login times, resource access, commands executed, and changes made. Logs support forensic investigations, compliance audits, and insider threat detection. SIEM systems aggregate and correlate logs. Key principle: logs must be write-once and tamper-evident.'),
      ],
      flashcards: [
        fc('f1-4', 'Authentication', 'Verifying the identity of a user, device, or process. Factors: something you know, have, are, somewhere you are, or something you do.'),
        fc('f1-5', 'Authorization', 'Determining what an authenticated entity is permitted to do. Enforced through access control models (RBAC, MAC, DAC, ABAC) and the principle of least privilege.'),
        fc('f1-6', 'Accounting', 'Recording what authenticated and authorised users actually do — audit logs that support forensic investigation, compliance, and insider threat detection.'),
      ],
      knowledgeChecks: [
        kc('k1-3', 'A user successfully logs into the VPN using a smart card and PIN. The next step verifies what network resources the user may access. Which AAA component handles this second step?', ['Authentication', 'Authorization', 'Accounting', 'Auditing'], 1, 'Login with smart card + PIN = authentication (proving identity). Determining which network resources the user may access = authorization (what they can do). Accounting records what they actually did.', 'understand'),
        kc('k1-4', 'Which access control model uses security labels (e.g., Top Secret, Secret, Unclassified) and is commonly used in military and government environments?', ['DAC (Discretionary Access Control)', 'RBAC (Role-Based Access Control)', 'MAC (Mandatory Access Control)', 'ABAC (Attribute-Based Access Control)'], 2, 'MAC uses security labels assigned to both subjects and objects. Access is granted when the subject\'s clearance meets or exceeds the object\'s classification. This is common in military/government contexts where data sensitivity must be enforced by policy, not user discretion.', 'apply'),
      ],
      summary: [
        'Authentication = who you are, Authorization = what you can do, Accounting = what you did.',
        'MFA requires two or more authentication factors — combining factor types (not two of the same type).',
        'Least privilege applies to authorization — grant only the minimum permissions needed for the task.',
      ],
      examTip: 'Authentication = who you are, Authorization = what you can do, Accounting = what you did. RADIUS and TACACS+ implement AAA — know which protocols are used in each.',
    },
    {
      id: 'ch1-controls',
      title: 'Security Controls',
      learningObjectives: [
        lo('remember', 'Student can list the categories (preventive, detective, corrective, deterrent, compensating) and types (technical, operational, managerial, physical) of security controls.'),
        lo('understand', 'Student can explain the purpose of each control category.'),
        lo('analyze', 'Student can classify a given control by category and type.'),
      ],
      sections: [
        sec('s1-8', 'Control Categories', 'Preventive controls stop threats before they occur (firewalls, locks, access controls). Detective controls identify threats that have occurred (IDS, CCTV, log analysis). Corrective controls restore systems after an incident (backups, patches, incident response). Deterrent controls discourage threats (warning signs, security lighting). Compensating controls substitute for controls that cannot be implemented (encrypted network when physical isolation is not possible).'),
        sec('s1-9', 'Control Types', 'Technical controls use technology (firewalls, encryption, MFA). Operational controls involve people and processes (security awareness training, background checks, separation of duties). Managerial controls focus on governance and policy (risk assessments, security policies, audit programmes). Physical controls protect physical access (locks, gates, guards, CCTV).'),
        sec('s1-10', 'Selecting the Right Control', 'Match the control category and type to the threat. A speed bump is deterrent + physical. A firewall is preventive + technical. CCTV is detective + physical. Security awareness training is preventive + operational. An IDS is detective + technical. Exam questions will describe a scenario and ask you to identify the control type and/or category.'),
      ],
      flashcards: [
        fc('f1-7', 'Preventive control', 'A security control that stops a threat before it occurs — e.g., firewall, access control, encryption, or physical lock.'),
        fc('f1-8', 'Detective control', 'A security control that identifies threats or security incidents after they occur — e.g., IDS, audit logs, CCTV, or security monitoring.'),
        fc('f1-9', 'Compensating control', 'An alternative control used when the preferred control cannot be implemented — e.g., encrypted communications when physical network separation is not feasible.'),
      ],
      knowledgeChecks: [
        kc('k1-5', 'A security camera records all people entering and exiting a data centre. What type of control is this?', ['Preventive, technical', 'Detective, physical', 'Preventive, physical', 'Corrective, operational'], 1, 'CCTV records activity (detective — identifies events after they occur) and is a physical device. It does not prevent entry — it records it. A man-trap or locked door would be preventive + physical.', 'analyze'),
        kc('k1-6', 'An organisation cannot implement network segregation due to cost constraints. They implement full-disk encryption on all endpoints instead. What type of control is encryption acting as in this context?', ['Preventive', 'Detective', 'Corrective', 'Compensating'], 3, 'When encryption substitutes for network segregation (the preferred control that cannot be implemented), it is acting as a compensating control. Encryption is normally categorised as preventive + technical, but its ROLE in this scenario is compensating.', 'apply'),
      ],
      summary: [
        'Control categories: Preventive (stop threats), Detective (identify threats), Corrective (restore), Deterrent (discourage), Compensating (substitute).',
        'Control types: Technical (technology), Operational (people/process), Managerial (governance), Physical (physical barriers).',
        'Know the category AND type for common controls — firewall = preventive + technical, CCTV = detective + physical, training = preventive + operational.',
      ],
      examTip: 'Security+ loves control classification questions. Remember: a speed bump is deterrent + physical, a firewall is preventive + technical, a camera is detective + physical.',
    },
    {
      id: 'ch1-zero-trust',
      title: 'Zero Trust Architecture',
      learningObjectives: [
        lo('understand', 'Student can explain the Zero Trust principle of "never trust, always verify."'),
        lo('apply', 'Student can apply Zero Trust concepts to evaluate a network design scenario.'),
        lo('analyze', 'Student can analyze how Zero Trust differs from perimeter-based security.'),
      ],
      sections: [
        sec('s1-11', 'Zero Trust Principles', 'Zero Trust rejects the perimeter model. Core principle: "never trust, always verify" — every request, regardless of origin (internal or external network), must be authenticated and authorised. No implicit trust is granted based on network location. Key tenets: verify explicitly, use least privilege, assume breach.'),
        sec('s1-12', 'Zero Trust vs Perimeter Security', 'Traditional perimeter security trusts everything inside the firewall. Once inside the perimeter (via VPN, physical access, or lateral movement), an attacker can move freely. Zero Trust eliminates this by requiring continuous verification for every access request. Microsegmentation divides the network so that compromise of one segment does not give access to others.'),
        sec('s1-13', 'Implementing Zero Trust', 'Key components: identity verification (MFA, conditional access), device health checks (endpoint compliance), least-privilege access (RBAC, just-in-time access), network microsegmentation, continuous monitoring and logging. Tools: CASB, SASE, IAM platforms, software-defined perimeter.'),
      ],
      flashcards: [
        fc('f1-10', 'Zero Trust', 'A security model based on "never trust, always verify" — every access request requires authentication and authorisation regardless of network location.'),
        fc('f1-11', 'Microsegmentation', 'Dividing a network into small isolated segments so that compromise of one segment does not automatically grant access to others — a key Zero Trust implementation technique.'),
        fc('f1-12', 'Assume breach', 'A Zero Trust principle that designs security as if the network is already compromised — drives continuous monitoring, least privilege, and blast-radius minimisation.'),
      ],
      knowledgeChecks: [
        kc('k1-7', 'Which Zero Trust principle directly counters lateral movement attacks once an attacker has breached the perimeter?', ['Never trust, always verify', 'Microsegmentation', 'MFA enforcement', 'Continuous logging'], 1, 'Microsegmentation divides the network so that compromising one host does not give access to neighbouring systems. Lateral movement relies on implicit trust between internal systems — microsegmentation eliminates that trust.', 'understand'),
        kc('k1-8', 'A remote employee connects via VPN to the corporate network. Under a traditional perimeter model, what implicit trust is granted?', ['No trust — all traffic is still inspected', 'Full trust — VPN membership implies internal network access', 'Trust only for read operations', 'Trust only for pre-approved applications'], 1, 'Traditional VPN-based perimeter security grants implicit trust once inside the VPN — the employee can access internal resources as if physically in the office. Zero Trust would instead verify each resource request individually, regardless of VPN status.', 'analyze'),
      ],
      summary: [
        'Zero Trust: "never trust, always verify" — no implicit trust based on network location.',
        'Microsegmentation limits blast radius — lateral movement requires re-authentication at each segment boundary.',
        'Zero Trust requires: identity verification (MFA), device health checks, least privilege, and continuous monitoring.',
      ],
      examTip: 'Zero Trust assumes breach — every request is verified regardless of network location. Key components: identity verification, device health, least privilege access, and microsegmentation.',
    },
    {
      id: 'ch1-physical-security',
      title: 'Physical Security',
      learningObjectives: [
        lo('remember', 'Student can identify common physical security controls including mantraps, bollards, and access badges.'),
        lo('understand', 'Student can explain layered physical security (defence in depth).'),
      ],
      sections: [
        sec('s1-14', 'Physical Access Controls', 'Physical security is the first layer of defence. Categories: barriers (fences, bollards, mantrap/airlock), surveillance (CCTV, security guards, motion sensors), access control (badges, biometrics, smart cards), environmental controls (fire suppression, UPS, HVAC). Physical controls protect against theft, physical tampering, and environmental threats.'),
        sec('s1-15', 'Environmental Controls', 'Environmental controls protect hardware from physical damage. UPS (Uninterruptible Power Supply) provides short-term power during outages. HVAC maintains temperature and humidity for equipment. Fire suppression systems (FM-200, CO2, sprinklers) protect against fire — clean-agent systems are preferred in data centres to avoid water damage. Generator backup provides extended power.'),
        sec('s1-16', 'Surveillance and Monitoring', 'Assess physical security using a risk-based approach: identify assets, identify threats (theft, vandalism, natural disaster, insider), assess controls, identify gaps. Considerations include natural disaster risk (flood zones, earthquake), lighting, visitor management, and tailgating prevention. Guards, CCTV, and motion sensors form the surveillance layer.'),
      ],
      flashcards: [
        fc('f1-13', 'Mantrap', 'A physical access control mechanism using two interlocking doors — only one door opens at a time, preventing tailgating. Also called an airlock.'),
        fc('f1-14', 'Tailgating', 'A physical security attack where an unauthorised person follows an authorised person through a secured door without using their own credentials. Also called piggybacking.'),
        fc('f1-15', 'Bollard', 'A short post used to prevent vehicles from entering a protected area — a physical deterrent and preventive control against vehicle-based attacks on buildings.'),
      ],
      knowledgeChecks: [
        kc('k1-9', 'An employee holds the door open for a colleague who forgot their badge. What physical security threat does this create?', ['Shoulder surfing', 'Tailgating', 'Dumpster diving', 'Vishing'], 1, 'Tailgating (or piggybacking) occurs when an unauthorised person gains physical access by following an authorised person through a secured door. Security awareness training and mantraps are the primary controls.', 'remember'),
        kc('k1-10', 'Which physical control is BEST suited to preventing vehicle ramming attacks against a data centre entrance?', ['Security camera', 'Mantrap', 'Bollards', 'Security guard'], 2, 'Bollards are designed specifically to stop vehicles. A security camera (detective) records events but does not stop them. A mantrap controls pedestrian access. A guard can deter but cannot stop a determined vehicle attack.', 'apply'),
      ],
      summary: [
        'Physical security layers: barriers, surveillance, access control, and environmental controls.',
        'Mantrap prevents tailgating by interlocking two doors — only one open at a time.',
        'Physical security must be risk-assessed like logical security — threat type determines the appropriate control.',
      ],
      examTip: 'Physical security is the first line of defence — no technical control compensates for physical access. Layering (fence → guard → badge → mantrap) is the expected answer pattern.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 2 — Cryptography (Domain 1, 12%) — CyberChef labs
// ---------------------------------------------------------------------------

function cryptoLab(id: string, title: string): LabExercise {
  return {
    id,
    title,
    objective: 'Use CyberChef to apply, verify, and analyse cryptographic operations — encryption, hashing, and encoding — on real data inputs.',
    tool: 'CyberChef',
    toolUrl: '',
    steps: [
      'Open CyberChef and locate the operation you need (search in the left panel).',
      'Paste your input data into the Input pane.',
      'Drag the cryptographic operation (e.g., AES Encrypt, SHA-256, Base64) into the Recipe.',
      'Configure parameters (key, IV, mode) as required for the operation.',
      'Observe the Output pane — compare the result to the expected output.',
      'Try changing the key or mode and observe how the output changes.',
    ],
    expectedOutput: 'A correctly transformed output (ciphertext, hash digest, or encoded string) that matches the expected value for the configured parameters.',
    difficulty: 'medium',
  };
}

const mod2: Module = {
  id: 'mod2-cryptography',
  title: 'Module 2: Cryptography',
  description: 'Symmetric and asymmetric encryption, hashing, PKI, digital signatures, and cryptographic attacks.',
  examWeight: 12,
  chapters: [
    {
      id: 'ch2-symmetric',
      title: 'Symmetric Encryption',
      learningObjectives: [
        lo('remember', 'Student can list common symmetric algorithms: AES, 3DES, RC4.'),
        lo('understand', 'Student can explain the symmetric key exchange problem.'),
        lo('analyze', 'Student can compare block ciphers and stream ciphers.'),
      ],
      sections: [
        sec('s2-1', 'Symmetric Encryption Fundamentals', 'Symmetric encryption uses the same key to encrypt and decrypt. It is fast and efficient — suitable for bulk data encryption. The key distribution problem: how do two parties securely share a key before communicating? Modern solutions use asymmetric encryption to exchange symmetric keys (hybrid encryption). Key algorithm: AES (Advanced Encryption Standard) — 128, 192, or 256-bit keys.'),
        sec('s2-2', 'AES and Stream vs Block Ciphers', 'Block ciphers encrypt fixed-size blocks of data (AES: 128-bit blocks). Stream ciphers encrypt one bit/byte at a time (RC4 — now deprecated). AES modes: ECB (weak — identical plaintext produces identical ciphertext), CBC (uses IV for randomness), GCM (authenticated encryption — provides confidentiality AND integrity). Always prefer AES-256-GCM for new implementations.'),
        sec('s2-3', 'Key Management', 'Symmetric key security depends entirely on key secrecy. Key lifecycle: generation (use CSPRNG), distribution (use asymmetric or out-of-band), storage (HSM, key vault), rotation (regular rotation limits exposure), destruction (secure key deletion). Key escrow: storing a copy of keys with a trusted third party for recovery — controversial for law enforcement access.'),
      ],
      flashcards: [
        fc('f2-1', 'Symmetric encryption', 'Encryption using the same key for both encryption and decryption. Fast and efficient for bulk data — AES-256 is the current standard.'),
        fc('f2-2', 'AES (Advanced Encryption Standard)', 'The current standard symmetric encryption algorithm. Uses 128-bit blocks with 128, 192, or 256-bit keys. AES-256 is used for sensitive government data.'),
        fc('f2-3', 'Key escrow', 'Storing a copy of a cryptographic key with a trusted third party so that data can be recovered if the primary key is lost — controversial due to government access implications.'),
      ],
      knowledgeChecks: [
        kc('k2-1', 'Which encryption algorithm is the current US government standard for symmetric encryption?', ['DES', '3DES', 'AES', 'RC4'], 2, 'AES replaced DES and 3DES as the NIST standard symmetric encryption algorithm. DES (56-bit) is broken. 3DES is deprecated. RC4 is a weak stream cipher, also deprecated. AES-128, 192, or 256 are all approved.', 'remember'),
        kc('k2-2', 'A company needs to encrypt 10TB of data at rest. Which approach is MOST appropriate?', ['RSA-2048 encryption for all data', 'AES-256 symmetric encryption', 'Elliptic curve Diffie-Hellman', 'SHA-256 hashing'], 1, 'Symmetric encryption (AES-256) is the right tool for bulk data encryption — it is fast and efficient. RSA and ECDH are asymmetric, much slower, and not designed for bulk data. SHA-256 is a hash function, not encryption.', 'analyze'),
      ],
      labExercise: cryptoLab('lab2-1', 'AES Encryption with CyberChef'),
      summary: ['Symmetric encryption uses one key for both encryption and decryption — fast, efficient, used for bulk data.', 'AES-256-GCM is the current standard — provides confidentiality AND integrity verification.', 'The key distribution problem is solved using asymmetric encryption to exchange symmetric session keys (hybrid encryption).'],
      examTip: 'AES-256 is the gold standard for symmetric encryption. Know that symmetric encryption is fast but has the key distribution problem — this is why asymmetric is used for key exchange.',
    },
    {
      id: 'ch2-asymmetric',
      title: 'Asymmetric Encryption',
      learningObjectives: [
        lo('remember', 'Student can identify RSA, ECC, and Diffie-Hellman as asymmetric algorithms.'),
        lo('understand', 'Student can explain public/private key pairs and their roles.'),
        lo('apply', 'Student can apply asymmetric concepts to explain how TLS handshakes work.'),
      ],
      sections: [
        sec('s2-4', 'Public Key Cryptography', 'Asymmetric encryption uses a key pair: public key (freely shared) and private key (kept secret). Data encrypted with the public key can only be decrypted with the private key. This solves the key distribution problem — anyone can encrypt a message using the recipient\'s public key; only the recipient\'s private key can decrypt it. Algorithms: RSA, ECC (ECDSA, ECDH).'),
        sec('s2-5', 'Digital Signatures', 'Digital signatures use the PRIVATE key to sign and the PUBLIC key to verify. This proves authenticity (who signed) and integrity (not altered). Process: hash the message, then encrypt the hash with the sender\'s private key = signature. Recipient decrypts signature with sender\'s public key and compares hashes. If hashes match: authentic and unaltered.'),
        sec('s2-6', 'Elliptic Curve Cryptography (ECC)', 'ECC provides equivalent security to RSA with much smaller key sizes. A 256-bit ECC key is equivalent in security to a 3072-bit RSA key. Smaller keys mean faster operations and less bandwidth. ECC is preferred for mobile, IoT, and TLS certificates. ECDH is used for key exchange; ECDSA for digital signatures.'),
      ],
      flashcards: [
        fc('f2-4', 'Asymmetric encryption', 'Encryption using a mathematically linked key pair: public key (encrypt/verify) and private key (decrypt/sign). Solves the key distribution problem.'),
        fc('f2-5', 'Digital signature', 'Created by hashing data and encrypting the hash with the sender\'s PRIVATE key. Verified by decrypting with the sender\'s PUBLIC key and comparing hashes — proves authenticity and integrity.'),
        fc('f2-6', 'ECC (Elliptic Curve Cryptography)', 'Asymmetric algorithm providing equivalent security to RSA with much smaller keys. 256-bit ECC ≈ 3072-bit RSA. Used in ECDH (key exchange) and ECDSA (digital signatures).'),
      ],
      knowledgeChecks: [
        kc('k2-3', 'Bob wants to send an encrypted message to Alice that only Alice can read. Which key does Bob use to encrypt?', ['Bob\'s private key', 'Bob\'s public key', 'Alice\'s private key', 'Alice\'s public key'], 3, 'To send a confidential message to Alice, Bob encrypts with ALICE\'S PUBLIC KEY. Only Alice\'s private key can decrypt it. This is the fundamental operation of asymmetric encryption for confidentiality.', 'understand'),
        kc('k2-4', 'A software vendor signs their installer with a digital signature. What does a successful signature verification prove?', ['The installer is free of malware', 'The installer was created by the vendor and has not been modified since signing', 'The installer was encrypted with AES-256', 'The installer has been tested for vulnerabilities'], 1, 'A valid digital signature proves two things: authenticity (the private key owner signed it — the vendor) and integrity (the file has not been modified since signing). It does NOT prove the software is malware-free or securely coded.', 'apply'),
      ],
      labExercise: cryptoLab('lab2-2', 'RSA Key Generation and Encryption with CyberChef'),
      summary: ['Asymmetric encryption: public key encrypts (confidentiality), private key signs (authenticity/integrity).', 'Digital signatures: sign with PRIVATE key, verify with PUBLIC key — proves both authenticity and integrity.', 'ECC provides equivalent security to RSA with smaller keys — preferred for TLS, mobile, and IoT.'],
      examTip: 'Encrypt with the recipient\'s public key (only they can decrypt). Sign with your private key (anyone can verify with your public key). Getting this backwards is a common exam trap.',
    },
    {
      id: 'ch2-hashing',
      title: 'Hashing and Integrity',
      learningObjectives: [
        lo('remember', 'Student can list hashing algorithms: MD5, SHA-1, SHA-256, SHA-3.'),
        lo('understand', 'Student can explain why hashing is one-way and collision-resistant.'),
        lo('analyze', 'Student can evaluate which hashing algorithm is appropriate for a given use case.'),
      ],
      sections: [
        sec('s2-7', 'Hash Functions and Properties', 'A hash function takes variable-length input and produces a fixed-length output (digest). Properties: deterministic (same input always = same output), one-way (cannot reverse the hash to get the input), collision-resistant (two different inputs should not produce the same hash). Common algorithms: MD5 (128-bit, broken), SHA-1 (160-bit, deprecated), SHA-256 (256-bit, secure), SHA-3 (current NIST standard).'),
        sec('s2-8', 'Uses of Hashing', 'Password storage (store the hash, not the password — add salt to prevent rainbow table attacks), file integrity verification (compare hash before and after transfer), digital signatures (sign the hash, not the full message), blockchain (each block contains the hash of the previous block). Salting adds a random value before hashing to ensure identical passwords produce different hashes.'),
        sec('s2-9', 'Hash Collisions and Weaknesses', 'A collision occurs when two different inputs produce the same hash output. MD5 and SHA-1 are vulnerable to collision attacks — discovered vulnerabilities allow attackers to craft colliding inputs in practical time. SHA-256 and SHA-3 are currently collision-resistant. HMAC (Hash-based Message Authentication Code) adds a secret key to a hash, providing both integrity and authentication.'),
      ],
      flashcards: [
        fc('f2-7', 'Hash function', 'A one-way function that produces a fixed-length output (digest) from variable-length input. Used for integrity verification and password storage. Cannot be reversed.'),
        fc('f2-8', 'Salt', 'A random value added to data before hashing — prevents pre-computed rainbow table attacks against password hashes. Every user gets a unique salt.'),
        fc('f2-9', 'SHA-256', 'Secure Hash Algorithm producing a 256-bit (64 hex character) digest. Part of the SHA-2 family. Currently considered cryptographically secure — widely used for TLS certificates, file integrity, and digital signatures.'),
      ],
      knowledgeChecks: [
        kc('k2-5', 'Which hashing algorithm is currently considered BROKEN and should NOT be used for security purposes?', ['SHA-256', 'SHA-3', 'MD5', 'SHA-512'], 2, 'MD5 is cryptographically broken — collisions can be generated in seconds. SHA-1 is also deprecated. Use SHA-256 or SHA-3 for security applications. MD5 can still be used for non-security checksums (file transfer verification where collision attacks are not a concern).', 'analyze'),
        kc('k2-6', 'A user\'s password is stored as a salted SHA-256 hash. What does the SALT prevent?', ['Brute force attacks', 'Rainbow table attacks', 'Phishing attacks', 'SQL injection attacks'], 1, 'A salt is a random value added before hashing, ensuring identical passwords produce different hashes. This prevents rainbow table attacks (pre-computed hash lookup tables). A salt does not prevent brute force (attacker still tries all passwords) but makes rainbow tables computationally infeasible.', 'understand'),
      ],
      labExercise: cryptoLab('lab2-3', 'Hashing Files and Verifying Integrity with CyberChef'),
      summary: ['Hashing is one-way — produces a fixed digest from variable input. Cannot be reversed.', 'SHA-256 is the current minimum standard. MD5 and SHA-1 are broken/deprecated.', 'Salt passwords before hashing — unique salts prevent rainbow table attacks across the user database.'],
      examTip: 'MD5 and SHA-1 are broken for security purposes — still seen in legacy systems. SHA-256 or better is the current standard. HMAC adds a secret key to a hash for authentication.',
    },
    {
      id: 'ch2-pki',
      title: 'PKI and Digital Certificates',
      learningObjectives: [
        lo('remember', 'Student can define Certificate Authority (CA), certificate, CRL, and OCSP.'),
        lo('understand', 'Student can explain the chain of trust in PKI.'),
        lo('apply', 'Student can apply PKI concepts to describe how HTTPS secures web traffic.'),
      ],
      sections: [
        sec('s2-10', 'PKI Structure', 'Public Key Infrastructure (PKI) is the framework for issuing, managing, and revoking digital certificates. Components: Certificate Authority (CA) — issues and signs certificates; Registration Authority (RA) — verifies identity before CA issues cert; Certificate Revocation List (CRL) — list of revoked certificates; OCSP — Online Certificate Status Protocol for real-time revocation checking. Trust chains: Root CA → Intermediate CA → End-entity certificate.'),
        sec('s2-11', 'Certificate Management', 'A digital certificate binds a public key to an identity (domain name, organisation, email). Fields: Subject, Issuer, Public Key, Validity period, Serial number, Signature algorithm. Certificate types: DV (domain validation — cheapest), OV (organisation validation), EV (extended validation — strictest). Wildcard certificates cover *.domain.com. SAN certificates cover multiple domains.'),
        sec('s2-12', 'Certificate Pinning and Transparency', 'Certificate pinning hardcodes a specific certificate or public key into an application — prevents substitution attacks even if a rogue CA issues a fraudulent certificate. Certificate Transparency (CT) requires CAs to log all issued certificates in public, auditable logs — allows detection of misissued certificates.'),
      ],
      flashcards: [
        fc('f2-10', 'Certificate Authority (CA)', 'A trusted entity that issues and signs digital certificates — binding a public key to a verified identity. The trust anchor of the PKI system.'),
        fc('f2-11', 'CRL (Certificate Revocation List)', 'A list of digital certificates that have been revoked before their expiry date. Checked by clients to verify certificate validity. Replaced in real-time contexts by OCSP.'),
        fc('f2-12', 'OCSP (Online Certificate Status Protocol)', 'A protocol for real-time certificate revocation checking — the client queries the CA\'s OCSP responder to check if a specific certificate is still valid, without downloading the full CRL.'),
      ],
      knowledgeChecks: [
        kc('k2-7', 'A user\'s browser shows a certificate warning for a website using a certificate issued by an unknown CA. What is the MOST likely cause?', ['The certificate is self-signed or from a CA not in the browser\'s trust store', 'The certificate has expired', 'The website is using MD5 for hashing', 'The website is using HTTP instead of HTTPS'], 0, 'Browsers trust certificates issued by CAs in their pre-installed trust store. A certificate from an unknown CA (including self-signed certificates, which are their own CA) triggers an "untrusted certificate" warning. Expired certificates give a different, more specific warning.', 'understand'),
        kc('k2-8', 'Which certificate field determines whether a certificate can be used to sign other certificates?', ['Subject Alternative Name', 'Key Usage / Basic Constraints (CA:true)', 'Serial Number', 'Certificate Transparency log entry'], 1, 'The Basic Constraints extension with CA:true indicates a CA certificate that can issue other certificates. Key Usage specifies what cryptographic operations the key can perform. This prevents end-entity certificates from being misused to sign other certificates.', 'apply'),
      ],
      labExercise: cryptoLab('lab2-4', 'Inspecting X.509 Certificates with CyberChef'),
      summary: ['PKI chain of trust: Root CA → Intermediate CA → End-entity certificate.', 'OCSP provides real-time revocation checking; CRL is the older, downloaded list approach.', 'Certificate Transparency requires CAs to log all certificates — enables detection of rogue CA activity.'],
      examTip: 'Know the PKI hierarchy: Root CA → Intermediate CA → End-entity certificate. OCSP is preferred over CRL because it provides real-time revocation status without downloading a large file.',
    },
    {
      id: 'ch2-crypto-attacks',
      title: 'Cryptographic Attacks',
      learningObjectives: [
        lo('remember', 'Student can name cryptographic attacks: birthday, rainbow table, downgrade, side-channel.'),
        lo('analyze', 'Student can analyze which attack applies to a given cryptographic weakness.'),
        lo('apply', 'Student can apply mitigations for common cryptographic attacks.'),
      ],
      sections: [
        sec('s2-13', 'Cryptographic Attacks', 'Brute force — try every possible key (mitigate with longer keys). Birthday attack — exploit hash collision probability (use SHA-256+ with long digests). Downgrade attack — force negotiation to weaker cipher (use TLS 1.3, disable older versions). Pass-the-hash — capture NTLM hash and replay without cracking (mitigate with Kerberos, MFA). Rainbow table — pre-computed hash lookup (mitigate with salted hashes).'),
        sec('s2-14', 'Rainbow Tables and Salting', 'A rainbow table is a pre-computed lookup table mapping common passwords to their hash values. Without salting, an attacker who obtains a hash database can instantly look up weak passwords. Salting adds a unique random value per user before hashing, making pre-computed tables useless. Purpose-built password hashing algorithms (bcrypt, scrypt, Argon2) include salting and are intentionally slow.'),
        sec('s2-15', 'Quantum Threats and Post-Quantum Cryptography', 'Quantum computers using Shor\'s algorithm can break RSA and ECC in polynomial time. NIST is standardising post-quantum cryptographic algorithms: CRYSTALS-Kyber for key exchange, CRYSTALS-Dilithium for signatures. Current advice: use AES-256 (symmetric — quantum-resistant with sufficient key length) and plan migration to post-quantum public key algorithms.'),
      ],
      flashcards: [
        fc('f2-13', 'Birthday attack', 'An attack exploiting the birthday paradox to find hash collisions — the probability of two inputs producing the same hash is higher than expected. Mitigated by using hash functions with long digest sizes (SHA-256+).'),
        fc('f2-14', 'Downgrade attack', 'Forcing a connection to use a weaker cryptographic protocol or cipher suite than the communicating parties would otherwise use. Mitigated by disabling legacy TLS versions and weak cipher suites.'),
        fc('f2-15', 'Post-quantum cryptography', 'Cryptographic algorithms designed to be secure against attacks by quantum computers. NIST standards include CRYSTALS-Kyber (key exchange) and CRYSTALS-Dilithium (signatures).'),
      ],
      knowledgeChecks: [
        kc('k2-9', 'An attacker captures a Windows NTLM authentication hash from network traffic. They use this hash to authenticate to another server without cracking it. This is an example of which attack?', ['Brute force', 'Pass-the-hash', 'Birthday attack', 'Downgrade attack'], 1, 'Pass-the-hash reuses a captured authentication hash without needing to crack it to the underlying password. NTLM\'s design allows hashes to serve as authentication tokens. Mitigations include using Kerberos (which uses tickets, not reusable hashes) and MFA.', 'apply'),
        kc('k2-10', 'A TLS connection is established but the server accepts TLS 1.0 when both parties support TLS 1.3. This is an example of which attack?', ['Birthday attack', 'Certificate spoofing', 'Downgrade attack', 'Pass-the-hash'], 2, 'A downgrade attack forces negotiation to a weaker version (TLS 1.0 instead of TLS 1.3). TLS 1.0 has known vulnerabilities (BEAST, POODLE). Mitigate by disabling TLS 1.0/1.1 and enforcing minimum TLS 1.2 or 1.3.', 'analyze'),
      ],
      labExercise: cryptoLab('lab2-5', 'Demonstrating Rainbow Table vs Salted Hash with CyberChef'),
      summary: ['Key cryptographic attacks: brute force, birthday, downgrade, pass-the-hash, rainbow table.', 'Post-quantum computing threatens RSA and ECC — AES-256 is quantum-resistant; plan PKI migration.', 'Mitigations: long keys (brute force), salts (rainbow table), disable legacy TLS (downgrade), Kerberos/MFA (pass-the-hash).'],
      examTip: 'Salting defeats rainbow tables by making pre-computed hash tables useless. Bcrypt, scrypt, and Argon2 are purpose-built password hashing functions that include salting and are intentionally slow.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 3 — Identity & Access (Domain 1+4)
// ---------------------------------------------------------------------------

const mod3: Module = {
  id: 'mod3-identity-access',
  title: 'Module 3: Identity & Access Management',
  description: 'Identity concepts, MFA, authorization models, federation, and privileged access management.',
  chapters: [
    {
      id: 'ch3-identity',
      title: 'Identity Concepts',
      learningObjectives: [
        lo('remember', 'Student can define identity, account types, and the principle of least privilege.'),
        lo('understand', 'Student can explain the difference between identification, authentication, and authorization.'),
      ],
      sections: [
        sec('s3-1', 'Identity Concepts', 'Digital identity is the set of attributes that uniquely identify a subject in a digital system. Identity proofing verifies that the person claiming an identity is who they say — methods include document verification, credit bureau checks, and in-person validation. Identity federation allows identities from one organisation to be trusted by another using standards like SAML 2.0 and OpenID Connect (OIDC).'),
        sec('s3-2', 'Identity Lifecycle', 'Provisioning (creating an account and assigning initial access), modification (updating permissions as role changes), deprovisioning (removing access when employment ends). The joiner-mover-leaver process governs the full lifecycle. Key risks: orphaned accounts (former employees whose accounts were not disabled) and privilege creep (accumulating excessive permissions through role changes).'),
        sec('s3-3', 'Identity Lifecycle Management', 'Automated identity governance platforms (IGA) enforce the joiner-mover-leaver process at scale. Access recertification campaigns periodically review all user entitlements. Role mining discovers natural access groupings from existing permissions. Separation of duties prevents any single identity from having conflicting access rights that enable fraud.'),
      ],
      flashcards: [
        fc('f3-1', 'Identity federation', 'A trust relationship between identity providers that allows users to authenticate once and access resources across multiple organisations — implemented using SAML 2.0 or OIDC.'),
        fc('f3-2', 'Privilege creep', 'The gradual accumulation of access rights beyond what is needed, typically as a user changes roles — mitigated by regular access reviews and deprovisioning old permissions.'),
        fc('f3-3', 'Orphaned account', 'A user account that remains active after the user has left the organisation — a significant insider threat risk. Requires automated deprovisioning or regular account audits.'),
      ],
      knowledgeChecks: [
        kc('k3-1', 'An employee moves from the Finance team to the IT team. Six months later, an audit finds they still have access to financial systems. What is this an example of?', ['Privilege escalation', 'Privilege creep', 'Account takeover', 'Lateral movement'], 1, 'Privilege creep occurs when users accumulate permissions from previous roles without having old access removed. The employee retains Finance access they no longer need. Mitigate with a formal joiner-mover-leaver process and regular access recertification.', 'understand'),
        kc('k3-2', 'A company wants employees to use their corporate credentials to access a partner organisation\'s systems without creating separate accounts. Which technology enables this?', ['VPN split tunnelling', 'Identity federation (SAML/OIDC)', 'Password manager', 'RADIUS'], 1, 'Identity federation (SAML 2.0 or OIDC) allows the partner to trust the corporate identity provider. Users authenticate once to their own IdP and receive a token accepted by the partner — no separate account creation needed.', 'remember'),
      ],
      summary: ['Identity lifecycle: provision → modify → deprovision. Orphaned accounts and privilege creep are key risks.', 'Identity federation uses SAML 2.0 or OIDC to allow cross-organisation trust without duplicate accounts.', 'Regular access reviews catch privilege creep — deprovisioning automation prevents orphaned accounts.'],
      examTip: 'Least privilege is one of the most tested concepts — every account should have only the permissions needed for its function. Over-privileged accounts are a primary attack vector.',
    },
    {
      id: 'ch3-mfa',
      title: 'Multi-Factor Authentication',
      learningObjectives: [
        lo('remember', 'Student can identify the three authentication factors: something you know, have, and are.'),
        lo('understand', 'Student can explain why MFA is stronger than single-factor authentication.'),
        lo('apply', 'Student can apply MFA concepts to select appropriate controls for a scenario.'),
      ],
      sections: [
        sec('s3-4', 'Multi-Factor Authentication', 'MFA requires two or more different authentication factor types. Factor types: knowledge (password, PIN), possession (smart card, hardware token, OTP app), inherence (fingerprint, face, retina), location (GPS, IP geofencing), behaviour (typing rhythm). Two factors from the SAME category (two passwords) is not true MFA. MFA dramatically reduces account takeover risk — stolen passwords alone are insufficient.'),
        sec('s3-5', 'MFA Technologies: TOTP, FIDO2, Smartcards', 'Methods: TOTP (Time-based OTP — Google Authenticator), HOTP (counter-based), SMS OTP (weakest — SIM swapping), hardware tokens (RSA SecurID), FIDO2/WebAuthn (phishing-resistant). Attacks: SIM swapping (steal phone number to intercept SMS OTP), MFA fatigue (spam approve requests until user accepts), real-time phishing (capture OTP and replay within validity window). FIDO2 hardware keys are phishing-resistant.'),
        sec('s3-6', 'MFA Attacks and Mitigations', 'SIM swapping ports a victim\'s phone number to an attacker-controlled SIM, intercepting SMS OTPs. MFA fatigue floods the user with push notifications until they approve one. Real-time phishing proxies capture OTP codes and replay them instantly. Mitigations: use FIDO2 (phishing-resistant), enable number matching for push MFA, limit push notification attempts, and prefer TOTP apps over SMS.'),
      ],
      flashcards: [
        fc('f3-4', 'TOTP (Time-based One-Time Password)', 'A 6-digit code generated by an authenticator app using a shared secret and current time — valid for 30 seconds. More secure than SMS OTP. HOTP is counter-based (not time-based).'),
        fc('f3-5', 'FIDO2/WebAuthn', 'A phishing-resistant authentication standard using hardware security keys or device biometrics. Credentials are bound to the specific website — cannot be replayed on fake sites.'),
        fc('f3-6', 'MFA fatigue attack', 'Bombarding a user with MFA push notification requests until they approve one out of frustration. Mitigated by number matching (user must enter a code shown on the login screen into the MFA app).'),
      ],
      knowledgeChecks: [
        kc('k3-3', 'A user logs in with a password and a fingerprint scan. Which authentication factor types are being used?', ['Knowledge and inherence', 'Possession and inherence', 'Knowledge and possession', 'Two knowledge factors'], 0, 'Password = knowledge factor (something you know). Fingerprint = inherence factor (something you are). These are two different factor types — true MFA. Two passwords would be two knowledge factors, which is not MFA.', 'remember'),
        kc('k3-4', 'An attacker registers a new SIM card with the victim\'s phone number and intercepts their SMS OTP codes. What attack is this?', ['MFA fatigue', 'TOTP replay', 'SIM swapping', 'Shoulder surfing'], 2, 'SIM swapping ports the victim\'s phone number to an attacker-controlled SIM, intercepting all SMS messages including OTP codes. This is why SMS OTP is the weakest MFA method — TOTP apps and hardware keys are not vulnerable to SIM swapping.', 'apply'),
      ],
      summary: ['True MFA requires factors from different categories — two passwords is NOT MFA.', 'SMS OTP is the weakest MFA method — vulnerable to SIM swapping and real-time phishing.', 'FIDO2/WebAuthn hardware keys are phishing-resistant — credentials are bound to the specific domain.'],
      examTip: 'Two factors must be from different categories — a PIN + password is NOT MFA (both are "something you know"). FIDO2/passkeys are phishing-resistant and the strongest form of MFA.',
    },
    {
      id: 'ch3-authorization-models',
      title: 'Authorization Models',
      learningObjectives: [
        lo('remember', 'Student can define DAC, MAC, RBAC, ABAC, and Rule-Based Access Control.'),
        lo('understand', 'Student can compare DAC, MAC, and RBAC and identify when each is appropriate.'),
        lo('analyze', 'Student can evaluate an access control scenario to recommend the correct model.'),
      ],
      sections: [
        sec('s3-7', 'Access Control Models', 'DAC — object owner grants permissions (flexible, higher risk). MAC — security labels enforced by the OS, not the owner (government/military). RBAC — permissions assigned to roles, users assigned to roles (most common in enterprise). ABAC — policies evaluate multiple attributes (user role, time, location, device health) — most flexible. Rule-based AC — access based on rules (e.g., ACLs on firewalls).'),
        sec('s3-8', 'Privileged Access Management (PAM)', 'PAM controls and monitors access by privileged accounts (admins, service accounts). Key practices: just-in-time (JIT) access (grant elevated privileges only when needed, revoke immediately after), privileged session recording, break-glass accounts (emergency access with strong auditing), separation of duties (no single person can complete a critical function alone).'),
        sec('s3-9', 'Role-Based and Attribute-Based Access Control', 'RBAC assigns permissions to roles rather than individual users — simplifying administration at scale. ABAC extends RBAC by evaluating policies against multiple attributes simultaneously: user role, device compliance status, time of day, and geographic location. ABAC is the foundation of Zero Trust access decisions and conditional access policies in modern IAM systems.'),
      ],
      flashcards: [
        fc('f3-7', 'RBAC (Role-Based Access Control)', 'An access control model where permissions are assigned to roles, and users are assigned to roles. Simplifies administration — changing a role affects all users in that role.'),
        fc('f3-8', 'Just-in-time (JIT) access', 'A PAM practice where privileged access is granted only for the duration of an approved task and automatically revoked — reduces the attack surface of persistent admin accounts.'),
        fc('f3-9', 'Separation of duties', 'Requiring multiple people to complete a critical action — e.g., one person initiates a financial transfer, another approves it. Prevents insider fraud and single points of compromise.'),
      ],
      knowledgeChecks: [
        kc('k3-5', 'A security policy states that users can access files only between 8am and 6pm, only from company-managed devices, and only if their user role is Finance. Which access control model supports all three conditions simultaneously?', ['DAC', 'MAC', 'RBAC', 'ABAC'], 3, 'ABAC (Attribute-Based Access Control) evaluates multiple attributes simultaneously — time, device type, and role are all attributes in a single policy evaluation. RBAC handles the role condition but not time or device. MAC handles sensitivity labels. DAC is owner-controlled.', 'analyze'),
        kc('k3-6', 'Which PAM practice grants admin privileges for 30 minutes to complete a specific task, then automatically revokes them?', ['Separation of duties', 'Just-in-time (JIT) access', 'Privilege creep', 'Break-glass access'], 1, 'JIT access provides temporary, task-scoped elevated privileges that are automatically revoked after use. This eliminates persistent admin accounts that represent a high-value target for attackers. Break-glass is emergency access with strong auditing, not the default time-limited model.', 'apply'),
      ],
      summary: ['RBAC is the enterprise standard. ABAC adds attribute-based conditions (time, device, location). MAC enforces labels.', 'PAM controls privileged accounts: JIT access, session recording, separation of duties.', 'The principle of least privilege applies everywhere — even admins should operate with standard user accounts for non-admin tasks.'],
      examTip: 'MAC is government/military (labels, clearances — user cannot change permissions). DAC is owner-controlled (like NTFS). RBAC is corporate standard (job-based roles). Know which model is most restrictive (MAC).',
    },
    {
      id: 'ch3-federation',
      title: 'Federation and Single Sign-On',
      learningObjectives: [
        lo('remember', 'Student can define SSO, SAML, OAuth 2.0, and OpenID Connect.'),
        lo('understand', 'Student can explain how SAML assertions enable federated identity.'),
        lo('apply', 'Student can apply federation concepts to select the right protocol for a scenario.'),
      ],
      sections: [
        sec('s3-10', 'SAML 2.0', 'Security Assertion Markup Language — XML-based protocol for federated authentication between an Identity Provider (IdP) and a Service Provider (SP). Flow: user attempts to access SP → SP redirects to IdP → user authenticates → IdP issues SAML assertion → SP grants access. Used in enterprise SSO (Okta, Azure AD, ADFS) for SaaS applications.'),
        sec('s3-11', 'OAuth 2.0 and OpenID Connect', 'OAuth 2.0 is an authorization framework — it allows third-party applications to access resources on behalf of a user without sharing passwords (access tokens). OpenID Connect (OIDC) adds authentication on top of OAuth 2.0 — it provides an ID token (JWT) that proves user identity. "Sign in with Google" uses OIDC; Google Drive API access uses OAuth 2.0.'),
        sec('s3-12', 'Single Sign-On Concepts', 'SSO allows users to authenticate once and access multiple systems without re-entering credentials. Enterprise SSO typically uses SAML 2.0 between on-premises IdPs and cloud SaaS. Consumer SSO uses OIDC. SSO reduces password fatigue and centralises authentication auditing, but creates a single point of failure — strong MFA on the IdP is essential.'),
      ],
      flashcards: [
        fc('f3-10', 'SAML 2.0', 'An XML-based federated authentication standard. Identity Provider (IdP) authenticates the user and sends a SAML assertion to the Service Provider (SP) — enables enterprise SSO.'),
        fc('f3-11', 'OAuth 2.0', 'An authorization framework allowing third-party access to resources using access tokens without sharing passwords. Handles resource authorization, not user authentication.'),
        fc('f3-12', 'OpenID Connect (OIDC)', 'An identity layer built on OAuth 2.0 that adds authentication — provides a JWT ID token proving user identity. "Sign in with Google" uses OIDC.'),
      ],
      knowledgeChecks: [
        kc('k3-7', 'A user clicks "Sign in with Google" to access a third-party app. Google authenticates the user and sends an ID token to the app. Which protocol is being used?', ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect (OIDC)', 'RADIUS'], 2, 'OIDC (built on OAuth 2.0) provides authentication via an ID token (JWT). OAuth 2.0 alone handles authorization (access tokens for resources). SAML is XML-based enterprise federation. The "Sign in with [provider]" pattern = OIDC.', 'understand'),
        kc('k3-8', 'In a SAML federation, which party verifies the user\'s identity and issues the SAML assertion?', ['Service Provider (SP)', 'Identity Provider (IdP)', 'Certificate Authority', 'RADIUS server'], 1, 'The Identity Provider (IdP) authenticates the user and issues the SAML assertion. The Service Provider (SP) receives and validates the assertion to grant access. The SP trusts the IdP\'s assertion without needing to authenticate the user directly.', 'apply'),
      ],
      summary: ['SAML 2.0: XML-based enterprise federation. IdP authenticates, sends assertion to SP.', 'OAuth 2.0: authorization framework (access tokens). OIDC: adds authentication (ID tokens as JWTs).', 'Know the difference: SAML = enterprise SSO; OIDC/OAuth = consumer/API authentication.'],
      examTip: 'SAML = authentication and authorization (XML-based, for enterprise SSO). OAuth 2.0 = authorization delegation only. OpenID Connect = identity layer on top of OAuth (adds authentication).',
    },
    {
      id: 'ch3-pam',
      title: 'Privileged Access Management',
      learningObjectives: [
        lo('remember', 'Student can define PAM, just-in-time access, and password vaulting.'),
        lo('understand', 'Student can explain why privileged accounts require additional controls.'),
        lo('analyze', 'Student can analyze an insider threat scenario and identify PAM controls that would mitigate it.'),
      ],
      sections: [
        sec('s3-13', 'Privileged Accounts and Risks', 'Privileged accounts (administrators, service accounts, root) have elevated access and are the highest-value target for attackers. Risks: credential theft, privilege abuse, lateral movement, and insider threat. Service accounts often have non-expiring passwords and excessive permissions — a key attack vector. Shared admin accounts make attribution impossible for audit purposes.'),
        sec('s3-14', 'PAM Solutions and Password Vaulting', 'PAM platforms (CyberArk, BeyondTrust, HashiCorp Vault) centralise management of privileged credentials. Password vaulting stores admin credentials in an encrypted vault — users check out credentials for specific sessions rather than knowing them permanently. Automatic credential rotation after each checkout eliminates persistent credential exposure.'),
        sec('s3-15', 'Just-in-Time Access and Session Recording', 'JIT access grants elevated privileges only for the duration of an approved task, then automatically revokes them. Session recording captures all privileged session activity — keystrokes, commands, screen video — for forensic review and compliance. Break-glass accounts provide emergency access with mandatory auditing and dual-approval workflows.'),
      ],
      flashcards: [
        fc('f3-13', 'PAM (Privileged Access Management)', 'A set of controls and tools for managing, monitoring, and auditing access by privileged accounts — including password vaulting, session recording, JIT access, and least privilege enforcement.'),
        fc('f3-14', 'Password vaulting', 'Storing privileged credentials in an encrypted vault — users check out credentials for specific sessions rather than knowing them directly. Automatic rotation eliminates persistent credential exposure.'),
        fc('f3-15', 'Break-glass account', 'An emergency privileged account used only when normal access paths fail. Access triggers immediate alerts, requires dual approval, and every action is recorded for post-incident review.'),
      ],
      knowledgeChecks: [
        kc('k3-9', 'Which PAM control BEST prevents an insider from using a shared admin password after their role changes?', ['Complexity requirements on the admin password', 'Separation of duties', 'Password vaulting with automatic rotation after each checkout', 'RBAC assignment'], 2, 'Password vaulting with automatic rotation means the insider never knows the current credential after checkout. Even if they memorised the previous password, it has been rotated. This eliminates persistent credential exposure after role changes.', 'understand'),
        kc('k3-10', 'A security audit finds that a terminated employee\'s service account is still active and running scheduled jobs. What is the PRIMARY risk?', ['The jobs may fail without the service account', 'The terminated employee may use the account for unauthorised access', 'The service account will expire automatically', 'The account lacks MFA'], 1, 'An active service account belonging to a terminated employee is an orphaned account — a persistent backdoor. The employee (or anyone who knows the credential) could use it for unauthorised access. Automated deprovisioning and service account inventory prevent this.', 'analyze'),
      ],
      summary: ['PAM controls privileged accounts: password vaulting, JIT access, session recording, break-glass procedures.', 'JIT access eliminates persistent admin accounts — privileges exist only for approved task duration.', 'Session recording makes privileged activity auditable — essential for insider threat detection and compliance.'],
      examTip: 'Privileged accounts are the highest-value target for attackers. PAM controls include password vaulting, session recording, just-in-time elevation, and mandatory MFA — know all four.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 4 — Threats & Attacks (Domain 2, 22%) — DVWA labs
// ---------------------------------------------------------------------------

function dvwaLab(id: string, title: string): LabExercise {
  return {
    id,
    title,
    objective: 'Exploit and understand a real web application vulnerability in DVWA (Damn Vulnerable Web Application) in a safe, isolated lab environment.',
    tool: 'DVWA',
    toolUrl: '',
    steps: [
      'Log in to DVWA with admin credentials and set the security level to Low.',
      'Navigate to the relevant vulnerability module (SQL Injection, XSS, CSRF, etc.).',
      'Read the vulnerability description and identify the attack surface.',
      'Craft a payload to exploit the vulnerability (e.g., \'1 OR 1=1-- for SQLi).',
      'Submit the payload and observe the server response.',
      'Set security to Medium, repeat the exploit — observe how basic defences work.',
      'Document what defence bypassed the Low-security protection and what Medium adds.',
    ],
    expectedOutput: 'Successful exploitation at Low security, understanding of the defence added at Medium security, and ability to explain the underlying vulnerability class.',
    difficulty: 'medium',
  };
}

const mod4: Module = {
  id: 'mod4-threats-attacks',
  title: 'Module 4: Threats & Attacks',
  description: 'Malware types, social engineering, application attacks, network attacks, and threat intelligence.',
  examWeight: 22,
  chapters: [
    {
      id: 'ch4-malware',
      title: 'Malware',
      learningObjectives: [
        lo('remember', 'Student can identify malware types: virus, worm, trojan, ransomware, rootkit, keylogger, spyware, adware, botnet, logic bomb.'),
        lo('understand', 'Student can explain how each malware type propagates and impacts systems.'),
        lo('analyze', 'Student can analyze an incident description to identify the malware type involved.'),
      ],
      sections: [
        sec('s4-1', 'Viruses, Worms, and Trojans', 'A virus attaches to a legitimate file and spreads when that file is shared or executed — requires user action to propagate. A worm is self-replicating across networks with no host file needed — spreads without user interaction (e.g., WannaCry). A trojan disguises itself as legitimate software to trick users into installing it — creates a backdoor without user knowledge. Fileless malware resides only in memory, using legitimate tools like PowerShell.'),
        sec('s4-2', 'Ransomware and Extortionware', 'Ransomware encrypts victim files and demands payment for the decryption key — primarily an availability attack. Modern ransomware (double extortion) also exfiltrates data and threatens to publish it, adding a confidentiality component. Mitigations: offline backups, network segmentation, EDR, patch management. Paying ransom does not guarantee key delivery and funds further attacks.'),
        sec('s4-3', 'Rootkits, Keyloggers, and Spyware', 'A rootkit hides itself and other malware within the OS kernel or firmware — evades detection by standard AV. Removing a rootkit often requires OS reinstall. A keylogger records keystrokes to capture credentials and sensitive data. Spyware monitors user activity (browsing, location) and sends data to the attacker. Adware delivers unwanted advertisements. Detection: heuristic-based EDR, memory scanning, behavioural analysis.'),
        sec('s4-4', 'Botnets and Logic Bombs', 'A botnet is a network of malware-infected systems (bots) controlled by a command-and-control (C2) server — used for DDoS, spam, credential stuffing, and cryptomining. A logic bomb is dormant malicious code triggered by a specific condition (date, user action) — often planted by insiders. Detection of C2 traffic: DNS monitoring, unusual outbound connections, beaconing patterns.'),
      ],
      flashcards: [
        fc('f4-1', 'Ransomware', 'Malware that encrypts victim files and demands payment for decryption. Modern variants also exfiltrate data (double extortion). Best mitigated by offline backups and network segmentation.'),
        fc('f4-2', 'Rootkit', 'Malware that hides itself deep within the OS kernel or firmware, making it invisible to standard antivirus. Often requires full system reinstall to remove. Detected via memory analysis and integrity checking.'),
        fc('f4-3', 'Botnet', 'A network of malware-infected systems controlled by a command-and-control (C2) server. Used for DDoS attacks, spam campaigns, credential stuffing, and cryptomining.'),
      ],
      knowledgeChecks: [
        kc('k4-1', 'A user downloads what appears to be a legitimate video editing tool. After installation, the attacker gains remote access to the system. The video tool still works. What type of malware is this?', ['Virus', 'Worm', 'Trojan', 'Ransomware'], 2, 'A trojan disguises itself as legitimate software (the video editor functions normally) while installing a backdoor for attacker access. A virus needs a host file and spreads on execution. A worm self-propagates across networks. Ransomware would have encrypted files.', 'analyze'),
        kc('k4-2', 'Which malware type spreads across networks WITHOUT requiring user interaction or a host file?', ['Virus', 'Worm', 'Trojan', 'Spyware'], 1, 'Worms self-replicate across networks without requiring user action — they exploit network vulnerabilities (e.g., EternalBlue/WannaCry). Viruses need user action to spread (sharing infected files). Trojans require users to install them. Spyware monitors but does not propagate.', 'understand'),
      ],
      labExercise: dvwaLab('lab4-1', 'Analyzing Malware Behavior in DVWA'),
      summary: ['Virus: needs host file, user action to spread. Worm: self-replicating, no host file. Trojan: disguised as legitimate software.', 'Ransomware = availability attack (encrypts files). Double extortion adds confidentiality threat (data leak).', 'Rootkits hide in the kernel — standard AV cannot detect them. EDR with memory scanning is required.'],
      examTip: 'Fileless malware is a growing exam topic — it lives only in RAM and uses legitimate OS tools (PowerShell, WMI), leaving minimal disk artifacts. EDR with memory scanning is the primary detection control.',
      examTip: 'Know the key distinction: a virus needs a host file, a worm is self-replicating and needs no host. Ransomware encrypts data and demands payment; fileless malware lives in memory only.',
    },
    {
      id: 'ch4-social-engineering',
      title: 'Social Engineering',
      learningObjectives: [
        lo('remember', 'Student can identify social engineering techniques: phishing, vishing, smishing, pretexting, baiting, tailgating, quid pro quo.'),
        lo('understand', 'Student can explain the psychological principles attackers exploit.'),
        lo('apply', 'Student can apply recognition techniques to identify social engineering attempts.'),
      ],
      sections: [
        sec('s4-5', 'Phishing, Vishing, and Smishing', 'Phishing: mass email impersonating a trusted entity to steal credentials or deliver malware. Spear phishing: targeted phishing using personalised information. Whaling: spear phishing targeting executives. Vishing: voice-based phishing via phone calls — attacker impersonates IT support or banks. Smishing: SMS-based phishing with malicious links. Defence: email filtering, SPF/DKIM/DMARC, user training, MFA.'),
        sec('s4-6', 'Pretexting, Baiting, and Quid Pro Quo', 'Pretexting: fabricating a scenario to gain trust and extract information (impersonating an auditor to ask for network passwords). Baiting: leaving malicious USB drives or offering free downloads that install malware. Quid pro quo: offering a service (free IT support) in exchange for credentials or access. Watering hole attack: compromising websites frequented by the target group rather than targeting individuals directly.'),
        sec('s4-7', 'Psychological Principles: Urgency, Authority, Scarcity', 'Social engineering exploits six psychological principles: authority (impersonating someone in power), urgency (creating time pressure to prevent critical thinking), scarcity (limited-time offers), social proof (everyone else is doing it), familiarity (building rapport), and intimidation (threatening consequences). Recognising these triggers is the primary defence — pause, verify, and use out-of-band confirmation.'),
      ],
      flashcards: [
        fc('f4-4', 'Spear phishing', 'A targeted phishing attack using personalised information specific to the victim — name, role, recent activities — to increase credibility. More dangerous than generic phishing.'),
        fc('f4-5', 'Pretexting', 'A social engineering technique where the attacker fabricates a believable scenario (pretext) to manipulate the victim into providing information or access — e.g., impersonating an auditor or IT helpdesk.'),
        fc('f4-6', 'Vishing', 'Voice phishing — social engineering via phone calls. Attackers impersonate IT support, banks, or government officials to extract credentials or authorise fraudulent transactions.'),
      ],
      knowledgeChecks: [
        kc('k4-3', 'An attacker researches a target company\'s CEO name, CFO name, and a recent acquisition, then emails the CFO impersonating the CEO asking for an urgent wire transfer. What type of attack is this?', ['Generic phishing', 'Spear phishing (whaling)', 'Smishing', 'Pretexting via phone'], 1, 'This is whaling — a form of spear phishing targeting executives using personalised information (CEO name, company acquisition details). The financial wire transfer angle is the most common whaling scenario (also called Business Email Compromise or BEC).', 'apply'),
        kc('k4-4', 'A caller impersonating IT support tells an employee their account will be locked in 10 minutes unless they provide their password immediately. Which psychological principle is being exploited?', ['Authority', 'Scarcity', 'Urgency', 'Social proof'], 2, 'Urgency creates artificial time pressure that prevents the victim from stopping to verify the request. Combined with authority (IT support impersonation), this is the most common social engineering combination. Defence: no legitimate IT staff will ever ask for a password.', 'understand'),
      ],
      labExercise: dvwaLab('lab4-2', 'Identifying Phishing Indicators in DVWA'),
      summary: ['Phishing types: generic (mass), spear (targeted), whaling (executives), vishing (voice), smishing (SMS).', 'Pretexting fabricates a scenario; baiting uses physical/digital lures; watering hole compromises sites visited by targets.', 'Key psychological triggers: urgency + authority = most effective combination. Train users to pause and verify out-of-band.'],
      examTip: 'Business Email Compromise (BEC) is a form of whaling where attackers impersonate executives to authorise fraudulent financial transactions — one of the highest-dollar attack types. MFA and out-of-band verification are the primary controls.',
      examTip: 'Spear phishing targets specific individuals with tailored content. Whaling targets executives. Vishing is voice-based. Smishing is SMS-based. The "urgency + authority" combo is the most effective manipulation tactic.',
    },
    {
      id: 'ch4-app-attacks',
      title: 'Application Attacks',
      learningObjectives: [
        lo('remember', 'Student can name common application attacks: SQL injection, XSS, CSRF, buffer overflow, directory traversal.'),
        lo('apply', 'Student can apply knowledge of attack mechanics to select appropriate mitigations.'),
        lo('analyze', 'Student can analyze a vulnerable code or configuration pattern to identify the attack vector.'),
      ],
      sections: [
        sec('s4-8', 'SQL Injection', 'SQL injection inserts malicious SQL code into input fields that are then executed by the database — can expose, modify, or delete data. Example: entering \' OR \'1\'=\'1 into a login field bypasses authentication. Mitigation: parameterised queries (prepared statements) separate SQL code from user input — the most effective fix. Input validation and WAFs are additional layers.'),
        sec('s4-9', 'Cross-Site Scripting (XSS) and CSRF', 'Stored XSS: malicious script is saved to the database and served to all users who view the page. Reflected XSS: script is reflected from a crafted URL — requires the victim to click a malicious link. CSRF (Cross-Site Request Forgery): tricks an authenticated user\'s browser into sending a forged request (e.g., transferring money) to a site they are logged into. Mitigations: XSS → output encoding; CSRF → anti-CSRF tokens, SameSite cookies.'),
        sec('s4-10', 'Buffer Overflow and Other Attacks', 'A buffer overflow writes more data than a buffer can hold, overwriting adjacent memory — can redirect execution to attacker-controlled code. Mitigations: ASLR (randomises memory layout), DEP/NX (marks data regions non-executable), stack canaries (detect overflow before return). IDOR (Insecure Direct Object Reference): manipulating an object ID in a URL to access another user\'s data. Path traversal: using ../ sequences to access files outside the web root.'),
        sec('s4-11', 'Directory Traversal and Injection Attacks', 'Directory (path) traversal uses ../ sequences in URL parameters to navigate outside the intended directory and read sensitive files. Command injection embeds OS commands into input that the server executes. XML External Entity (XXE) attacks exploit poorly-configured XML parsers to read local files or make server-side requests. Mitigation for all: strict input validation, least-privilege application accounts, and parameterised APIs.'),
      ],
      flashcards: [
        fc('f4-7', 'SQL injection', 'An attack inserting malicious SQL into input fields executed by the backend database. Can expose, modify, or delete data. Prevented by parameterised queries (prepared statements).'),
        fc('f4-8', 'XSS (Cross-Site Scripting)', 'An attack injecting malicious scripts into web pages viewed by other users. Stored XSS persists in the database; reflected XSS is in a crafted URL. Mitigated by output encoding.'),
        fc('f4-9', 'Buffer overflow', 'Writing more data than a buffer can hold, overwriting adjacent memory and potentially redirecting code execution. Mitigated by ASLR, DEP/NX bits, and stack canaries.'),
      ],
      knowledgeChecks: [
        kc('k4-5', 'A developer uses string concatenation to build SQL queries from user input. An attacker enters \' OR \'1\'=\'1 and gains access without a valid password. Which attack is this and what is the PRIMARY fix?', ['XSS — implement output encoding', 'SQL injection — use parameterised queries', 'CSRF — implement anti-CSRF tokens', 'Buffer overflow — implement ASLR'], 1, 'SQL injection exploits unsanitised input concatenated directly into SQL queries. The PRIMARY fix is parameterised queries (prepared statements), which separate SQL code from user-supplied data. Input validation and WAFs are secondary controls.', 'analyze'),
        kc('k4-6', 'A malicious script embedded in a forum post is stored in the database and executes in every user\'s browser when they view the post. What type of attack is this?', ['Reflected XSS', 'Stored XSS', 'CSRF', 'DOM-based XSS'], 1, 'Stored (persistent) XSS stores the malicious script in the database — it executes for every user who loads the affected page without requiring them to click a malicious link. Reflected XSS is in a URL that must be clicked. CSRF forges requests, not script injection.', 'apply'),
      ],
      labExercise: dvwaLab('lab4-3', 'SQL Injection and XSS in DVWA'),
      summary: ['SQL injection: parameterised queries are the fix. XSS: output encoding is the fix. CSRF: anti-CSRF tokens + SameSite cookies.', 'Buffer overflow mitigations: ASLR, DEP/NX, stack canaries — implemented at OS and compiler level.', 'OWASP Top 10 is the reference for web application attacks — know the top items for the exam.'],
      examTip: 'The OWASP Top 10 is directly referenced in SY0-701. Key entries: Injection (#1 historically), Broken Access Control (#1 in 2021), Cryptographic Failures, Insecure Design. Know that parameterised queries prevent injection and output encoding prevents XSS.',
      examTip: 'Parameterized queries (prepared statements) prevent SQL injection. XSS is mitigated by output encoding. CSRF is mitigated by anti-CSRF tokens. Input validation prevents most injection attacks.',
    },
    {
      id: 'ch4-network-attacks',
      title: 'Network Attacks',
      learningObjectives: [
        lo('remember', 'Student can identify network attacks: DDoS, MitM, ARP poisoning, DNS poisoning, replay attacks, VLAN hopping.'),
        lo('understand', 'Student can explain how DoS and DDoS attacks consume resources.'),
        lo('analyze', 'Student can analyze network traffic symptoms to identify the attack type.'),
      ],
      sections: [
        sec('s4-12', 'DoS and DDoS Attacks', 'DoS (Denial of Service) overwhelms a target with traffic or requests from a single source. DDoS (Distributed DoS) uses thousands of compromised systems (botnet) simultaneously — much harder to block. Types: volumetric (flood bandwidth — UDP flood, ICMP flood), protocol (exploit protocol weaknesses — SYN flood, Ping of Death), application layer (exhaust server resources — HTTP flood, Slowloris). Mitigations: DDoS scrubbing services (Cloudflare, AWS Shield), rate limiting, anycast diffusion.'),
        sec('s4-13', 'Man-in-the-Middle and Replay Attacks', 'On-path attack (Security+ term for MITM): attacker intercepts and optionally modifies traffic between two parties. ARP poisoning is the primary LAN-based MITM technique — attacker broadcasts fake ARP replies mapping their MAC to the gateway IP. Replay attack: captures a valid authentication token and retransmits it later. Mitigations: TLS (prevents on-path modification), sequence numbers and timestamps (prevent replay), MACsec (encrypts LAN traffic).'),
        sec('s4-14', 'ARP and DNS Poisoning', 'ARP poisoning (ARP spoofing) sends fake ARP replies to associate the attacker\'s MAC with a legitimate IP — enables MITM on the local network. Mitigation: Dynamic ARP Inspection (DAI) on managed switches. DNS poisoning (cache poisoning) injects forged DNS records into a resolver\'s cache — redirects users to attacker-controlled servers. Mitigation: DNSSEC signs DNS records cryptographically. VLAN hopping (double tagging) allows an attacker to send frames to VLANs they should not access.'),
        sec('s4-15', 'VLAN Hopping and On-Path Attacks', 'VLAN hopping uses double-tagging — the attacker adds an extra 802.1Q tag to send frames to a target VLAN across a trunk port. Mitigation: never use VLAN 1 as a native VLAN, disable automatic trunk negotiation (DTP), and explicitly assign all access ports. Session hijacking captures a session cookie or token and reuses it to impersonate an authenticated user. Mitigation: use HTTPS (prevents cookie interception), secure and httpOnly cookie flags.'),
      ],
      flashcards: [
        fc('f4-10', 'DDoS (Distributed Denial of Service)', 'A network availability attack using a botnet of compromised systems to overwhelm a target with traffic. Types: volumetric (bandwidth), protocol (TCP state), and application layer (HTTP). Mitigated by DDoS scrubbing services and rate limiting.'),
        fc('f4-11', 'ARP poisoning', 'Sending fake ARP replies to associate the attacker\'s MAC address with a legitimate IP — enabling MITM on the local network. Mitigated by Dynamic ARP Inspection (DAI) on managed switches.'),
        fc('f4-12', 'DNS poisoning', 'Injecting forged DNS records into a resolver\'s cache to redirect users to attacker-controlled servers. Mitigated by DNSSEC, which cryptographically signs DNS records.'),
      ],
      knowledgeChecks: [
        kc('k4-7', 'An attacker on the local network sends gratuitous ARP replies mapping their MAC address to the default gateway IP. All local hosts update their ARP caches. What attack is this enabling?', ['DNS poisoning', 'On-path (MITM) attack via ARP poisoning', 'VLAN hopping', 'Replay attack'], 1, 'ARP poisoning redirects local traffic through the attacker\'s machine by associating their MAC with the gateway IP. This enables an on-path (MITM) attack where the attacker can inspect and modify traffic. Dynamic ARP Inspection (DAI) on switches prevents this.', 'analyze'),
        kc('k4-8', 'Which mitigation is MOST effective against a volumetric DDoS attack targeting a web application?', ['Firewall ACL rules', 'Intrusion Prevention System (IPS)', 'Cloud-based DDoS scrubbing service', 'Network segmentation'], 2, 'Volumetric DDoS exhausts bandwidth — local controls (firewalls, IPS) are overwhelmed before they can inspect traffic. Cloud-based scrubbing services (Cloudflare, AWS Shield, Akamai) absorb and filter attack traffic upstream before it reaches the organisation\'s network.', 'apply'),
      ],
      labExercise: dvwaLab('lab4-4', 'Simulating Network Attack Patterns in DVWA'),
      summary: ['DDoS types: volumetric (bandwidth), protocol (TCP state tables), application layer (HTTP requests).', 'ARP poisoning → on-path attack on LAN. Mitigation: Dynamic ARP Inspection (DAI).', 'DNS poisoning → redirect to fake sites. Mitigation: DNSSEC. On-path attack = current Security+ term for MITM.'],
      examTip: '"On-path attack" is the current SY0-701 terminology for Man-in-the-Middle. If you see "MitM" in an answer option alongside "on-path attack," select the more current term. ARP poisoning is the mechanism that enables on-path attacks on local networks.',
      examTip: 'On-path attack is the current Security+ terminology for Man-in-the-Middle. ARP poisoning enables on-path attacks on local networks. DNSSEC mitigates DNS poisoning.',
    },
    {
      id: 'ch4-threat-intel',
      title: 'Threat Intelligence',
      learningObjectives: [
        lo('remember', 'Student can define threat intelligence, IOC, TTPs, and STIX/TAXII.'),
        lo('understand', 'Student can explain how threat intelligence is gathered and used.'),
        lo('analyze', 'Student can analyze threat intelligence feeds to identify actionable IOCs.'),
      ],
      sections: [
        sec('s4-16', 'Threat Intelligence Sources', 'Threat intelligence types by level: strategic (high-level trends for executives — attacker motivations, geopolitical threats), tactical (TTPs — Tactics, Techniques, and Procedures used by specific threat actors), operational (specific campaign details — target sectors, infrastructure), technical (IOCs — specific hashes, IPs, domains, URLs for detection rules). Sources: ISACs (sector-specific sharing), government feeds (CISA, US-CERT), commercial TI platforms, open-source (AlienVault OTX, MISP).'),
        sec('s4-17', 'Indicators of Compromise (IOCs)', 'IOCs are forensic artefacts that indicate a system may have been compromised. Types: file hashes (MD5/SHA-256 of known malware), IP addresses (known C2 servers), domain names (malicious infrastructure), URLs (phishing pages), registry keys (persistence mechanisms), mutex names (in-memory malware markers), network signatures (YARA rules). IOCs are reactive — they detect known threats. TTPs detect attacker behaviour regardless of specific tooling.'),
        sec('s4-18', 'STIX, TAXII, and Threat Sharing', 'STIX (Structured Threat Information eXpression) is a standardised language for describing cyber threat intelligence — attack patterns, threat actors, indicators, courses of action. TAXII (Trusted Automated eXchange of Intelligence Information) is the transport protocol for sharing STIX data between organisations. MITRE ATT&CK maps adversary TTPs into a framework of tactics (goals) and techniques (methods) — used for threat hunting and detection engineering.'),
      ],
      flashcards: [
        fc('f4-13', 'IOC (Indicator of Compromise)', 'Forensic evidence indicating a system may be compromised — file hashes, malicious IP addresses, domain names, registry keys, and network signatures. Reactive: detects known threats after the fact.'),
        fc('f4-14', 'TTPs (Tactics, Techniques, and Procedures)', 'The behaviour patterns of a threat actor: WHAT they are trying to achieve (tactic), HOW they achieve it (technique), and the specific tools/steps used (procedure). TTPs are harder to change than IOCs.'),
        fc('f4-15', 'STIX/TAXII', 'STIX is the standard format for describing threat intelligence. TAXII is the transport protocol for sharing it between organisations. Together they enable automated, machine-readable threat intelligence exchange.'),
      ],
      knowledgeChecks: [
        kc('k4-9', 'A security team receives a threat intelligence report about a nation-state actor\'s attack methodology against utilities, including specific techniques for lateral movement and persistence. What type of intelligence is this?', ['Strategic', 'Tactical', 'Operational', 'Technical'], 1, 'Tactical intelligence describes TTPs — the specific methods an actor uses (lateral movement techniques, persistence mechanisms). Strategic intelligence covers high-level trends. Operational covers specific campaigns. Technical intelligence provides IOCs (hashes, IPs).', 'understand'),
        kc('k4-10', 'Which framework maps adversary behaviour into a matrix of tactics and techniques used for threat hunting and detection engineering?', ['STIX/TAXII', 'MITRE ATT&CK', 'Cyber Kill Chain', 'Diamond Model'], 1, 'MITRE ATT&CK is the industry-standard framework mapping adversary TTPs into a matrix of tactics (columns) and techniques (rows). It is used for threat hunting hypothesis generation, detection rule development, and adversary simulation. STIX/TAXII is for sharing TI. Kill Chain is Lockheed Martin\'s linear attack model.', 'analyze'),
      ],
      labExercise: dvwaLab('lab4-5', 'Identifying IOCs in DVWA Logs'),
      summary: ['Intelligence types: strategic (trends), tactical (TTPs), operational (campaigns), technical (IOCs).', 'STIX = TI format, TAXII = TI transport. MITRE ATT&CK = TTP framework for hunting and detection.', 'IOCs detect known threats reactively. TTP-based detection catches behaviour regardless of tooling — more resilient.'],
      examTip: 'MITRE ATT&CK is heavily tested in SY0-701. Know that it organises adversary behaviour into 14 tactics (Reconnaissance through Impact) with hundreds of techniques. It is used for threat hunting, red team planning, and mapping detection coverage.',
      examTip: 'MITRE ATT&CK framework maps adversary TTPs. STIX is the format for sharing threat intel; TAXII is the transport protocol. IOCs include IP addresses, file hashes, domain names, and registry keys.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 5 — Vulnerability Management (Domain 2, 22%) — DVWA labs
// ---------------------------------------------------------------------------

const mod5: Module = {
  id: 'mod5-vulnerability-mgmt',
  title: 'Module 5: Vulnerability Management',
  description: 'Vulnerability scanning, assessment methodologies, CVSS scoring, and penetration testing concepts.',
  examWeight: 22,
  chapters: [
    {
      id: 'ch5-scanning',
      title: 'Vulnerability Scanning',
      learningObjectives: [
        lo('remember', 'Student can identify scanning types: credentialed vs non-credentialed, internal vs external, active vs passive.'),
        lo('understand', 'Student can explain the difference between vulnerability scanning and penetration testing.'),
        lo('apply', 'Student can apply scanning concepts to select the appropriate scan type for a scenario.'),
      ],
      sections: [
        sec('s5-1', 'Vulnerability Scanning Concepts', 'Vulnerability scanning identifies known weaknesses in systems, applications, and configurations by comparing them against vulnerability databases (NVD, vendor advisories). Tools: Nessus, OpenVAS, Qualys. Scanning does NOT exploit vulnerabilities — it only identifies and reports them. Active scanning sends probes to targets; passive scanning observes traffic without sending probes. Internal scans see the environment from inside; external scans see the attacker\'s view from outside.'),
        sec('s5-2', 'Credentialed vs Non-Credentialed Scans', 'Credentialed (authenticated) scans log into target systems using admin credentials — see installed software versions, patch levels, configurations. More accurate, fewer false positives. Non-credentialed scans test from outside without authentication — show what an external attacker can see. Credentialed scans provide the most comprehensive view for internal vulnerability management. Non-credentialed scans are used for external attack surface assessment.'),
        sec('s5-3', 'Scan Scheduling and Frequency', 'Critical systems should be scanned at least monthly; high-risk internet-facing assets weekly or continuously. After any significant change (new system deployed, patch applied, configuration changed), rescan to verify. Continuous monitoring integrates with asset management — new assets are automatically scanned on discovery. Scan windows: balance thoroughness against operational impact — schedule high-intensity scans during maintenance windows.'),
      ],
      flashcards: [
        fc('f5-1', 'Credentialed scan', 'A vulnerability scan that logs into target systems using admin credentials — sees installed software, patch levels, and configurations. More accurate than non-credentialed scans with fewer false positives.'),
        fc('f5-2', 'Passive scanning', 'Vulnerability assessment by observing network traffic without sending active probes — identifies systems and services from captured packets. Stealthy but less comprehensive than active scanning.'),
        fc('f5-3', 'Attack surface', 'The total set of points where an attacker could try to enter or extract data from a system. Includes network services, APIs, user interfaces, physical access points, and third-party integrations.'),
      ],
      knowledgeChecks: [
        kc('k5-1', 'A security team wants to identify all missing patches and misconfigurations on internal Windows servers. Which scan type provides the MOST accurate results?', ['External non-credentialed scan', 'Internal credentialed scan', 'Passive network scan', 'External credentialed scan'], 1, 'An internal credentialed scan logs into the Windows servers with admin credentials and directly reads patch levels, installed software, and registry settings. This provides far more accurate results than non-credentialed scans, which cannot see inside the OS.', 'apply'),
        kc('k5-2', 'What is the PRIMARY difference between a vulnerability scan and a penetration test?', ['Vulnerability scans use credentialed access; penetration tests do not', 'Vulnerability scans identify weaknesses without exploiting them; penetration tests attempt to exploit them', 'Vulnerability scans are performed externally; penetration tests are internal only', 'Vulnerability scans require written authorisation; penetration tests do not'], 1, 'Vulnerability scanning identifies and reports vulnerabilities without exploiting them. Penetration testing goes further — it actively attempts to exploit vulnerabilities to demonstrate real-world impact. Both require written authorisation, but penetration testing is more invasive and disruptive.', 'understand'),
      ],
      labExercise: dvwaLab('lab5-1', 'Running a Vulnerability Scan Against DVWA'),
      summary: ['Credentialed scans see inside the OS (accurate, fewer false positives). Non-credentialed show the attacker\'s external view.', 'Scanning identifies vulnerabilities — it does NOT exploit them. Penetration testing does.', 'Scan frequency: critical assets monthly minimum; internet-facing assets weekly or continuously.'],
      examTip: 'Credentialed vs non-credentialed is a high-frequency exam topic. Remember: credentialed = more accurate (fewer false positives, more false negative reduction). The exam will present scenarios asking which scan type achieves the stated goal.',
      examTip: 'Credentialed scans produce more accurate results (fewer false positives) because the scanner logs in and checks installed software versions. Non-credentialed scans show attacker\'s view from outside.',
    },
    {
      id: 'ch5-assessment',
      title: 'Vulnerability Assessment',
      learningObjectives: [
        lo('remember', 'Student can define false positive, false negative, true positive, and true negative in the context of vulnerability scanning.'),
        lo('understand', 'Student can explain how to prioritize vulnerabilities for remediation.'),
        lo('analyze', 'Student can evaluate scan results to distinguish true vulnerabilities from false positives.'),
      ],
      sections: [
        sec('s5-4', 'Penetration Testing Phases and Methodology', 'Penetration testing phases: Reconnaissance (passive/active information gathering), Scanning (port scanning, vulnerability scanning), Exploitation (attempting to exploit identified vulnerabilities), Post-exploitation (lateral movement, privilege escalation, data access, persistence), Reporting (document findings, evidence, remediation recommendations). Types: black box (no prior knowledge), white box (full knowledge — source code, architecture), grey box (partial knowledge — credentials, network diagrams).'),
        sec('s5-5', 'False Positives and False Negatives', 'False positive: scanner reports a vulnerability that does not exist — wastes remediation time. False negative: a real vulnerability is not detected — far more dangerous, creates false sense of security. Credentialed scans reduce both. After remediation, rescan to confirm the vulnerability is actually fixed (verify, do not trust). Validate critical findings manually before scheduling emergency patches.'),
        sec('s5-6', 'Prioritization and Remediation', 'Prioritise remediation using CVSS score (Critical 9.0–10.0 first), asset criticality (production systems before test systems), exploitability (public exploit available vs theoretical), and exposure (internet-facing vs internal). Remediation options: patch (apply vendor fix), workaround/compensating control (temporary mitigation), risk acceptance (documented management decision for low-risk findings). Track all findings in a vulnerability register with target remediation dates.'),
      ],
      flashcards: [
        fc('f5-4', 'False positive', 'A vulnerability reported by a scanner that does not actually exist on the target system. Wastes analyst time during triage. Credentialed scans and manual validation reduce false positives.'),
        fc('f5-5', 'Penetration test', 'An authorised, simulated attack that exploits vulnerabilities to demonstrate real-world impact. Requires written rules of engagement defining scope, timing, and out-of-bounds systems.'),
        fc('f5-6', 'Rules of engagement', 'A written agreement defining the scope, timing, authorised techniques, and out-of-bounds systems for a penetration test. Required before any offensive testing begins — protects both tester and organisation.'),
      ],
      knowledgeChecks: [
        kc('k5-3', 'A vulnerability scanner reports that a web server is running a vulnerable version of Apache. The admin checks and confirms the server runs a fully patched newer version. What is this?', ['True positive', 'False negative', 'True negative', 'False positive'], 3, 'A false positive is a vulnerability reported that does not actually exist. The scanner detected an old banner or fingerprint but the software is actually patched. Validate critical findings manually before emergency remediation — false positives waste time and resources.', 'analyze'),
        kc('k5-4', 'A penetration tester has been given network diagrams, system documentation, and read-only credentials before starting the engagement. Which type of penetration test is this?', ['Black box', 'Red team', 'Grey box', 'White box'], 2, 'Grey box testing provides partial knowledge — in this case, network diagrams, documentation, and credentials. Black box provides no prior knowledge (simulates external attacker). White box provides full knowledge including source code. Grey box is the most common enterprise penetration test model.', 'understand'),
      ],
      labExercise: dvwaLab('lab5-2', 'Analyzing and Triaging Scan Results in DVWA'),
      summary: ['False positive = vulnerability reported that does not exist. False negative = real vulnerability not detected (more dangerous).', 'Penetration test phases: Reconnaissance, Scanning, Exploitation, Post-exploitation, Reporting.', 'Prioritise remediation: CVSS score + asset criticality + exploitability + exposure level.'],
      examTip: 'Written authorisation (rules of engagement) is MANDATORY before a penetration test. The exam will present scenarios where a tester "finds out they tested the wrong IP range" — the correct answer always involves pre-test scoping and written authorisation to prevent this.',
      examTip: 'A false positive is a reported vulnerability that does not exist — wastes time. A false negative is a real vulnerability not detected — far more dangerous. Credentialed scans reduce both.',
    },
    {
      id: 'ch5-cvss',
      title: 'CVSS and Risk Scoring',
      learningObjectives: [
        lo('remember', 'Student can define CVSS and its score range (0-10) and severity categories.'),
        lo('understand', 'Student can explain the base, temporal, and environmental CVSS metric groups.'),
        lo('analyze', 'Student can analyze CVSS scores to prioritize remediation in an environment.'),
      ],
      sections: [
        sec('s5-7', 'CVSS Score Components', 'CVSS (Common Vulnerability Scoring System) scores vulnerabilities 0.0–10.0. Severity bands: Critical (9.0–10.0), High (7.0–8.9), Medium (4.0–6.9), Low (0.1–3.9). The Base score uses: Attack Vector (Network/Adjacent/Local/Physical), Attack Complexity (Low/High), Privileges Required (None/Low/High), User Interaction (None/Required), Scope (Unchanged/Changed), and CIA Impact (None/Low/High).'),
        sec('s5-8', 'Temporal and Environmental Metrics', 'Temporal metrics adjust the Base score for current exploitability: Exploit Code Maturity (how mature/available exploit code is), Remediation Level (official fix vs workaround), Report Confidence (confirmed vs unconfirmed). Environmental metrics adjust for your specific context: asset criticality and existing security controls. A CVSS 10.0 vulnerability in software your organisation does not run is effectively zero risk.'),
        sec('s5-9', 'CVE, NVD, and Vulnerability Databases', 'CVE (Common Vulnerabilities and Exposures) is the standardised naming system for publicly known vulnerabilities — format: CVE-YEAR-NUMBER. NVD (National Vulnerability Database) publishes CVSS scores and additional metadata for each CVE. EPSS (Exploit Prediction Scoring System) predicts the probability a vulnerability will be exploited in the next 30 days — complements CVSS for prioritisation.'),
      ],
      flashcards: [
        fc('f5-7', 'CVSS (Common Vulnerability Scoring System)', 'A 0.0–10.0 scoring system for vulnerability severity. Critical = 9.0–10.0, High = 7.0–8.9, Medium = 4.0–6.9, Low = 0.1–3.9. Environmental score adjusts for organisational context.'),
        fc('f5-8', 'CVE (Common Vulnerabilities and Exposures)', 'A standardised identifier for publicly known vulnerabilities — format CVE-YEAR-NUMBER. Each CVE has a unique ID, description, and associated CVSS score published in the NVD.'),
        fc('f5-9', 'NVD (National Vulnerability Database)', 'NIST\'s public database of CVEs with CVSS scores, affected software versions, and remediation information. The authoritative source for vulnerability metadata used by scanning tools.'),
      ],
      knowledgeChecks: [
        kc('k5-5', 'A vulnerability has a CVSS Base score of 9.8 (Critical) but only affects a software package not present in your environment. An organisation also has a CVSS 7.2 (High) vulnerability in their public-facing web server with a known public exploit. Which should be remediated FIRST?', ['The 9.8 Critical vulnerability because it has a higher CVSS score', 'The 7.2 High vulnerability because it is in a deployed, exposed system with a known exploit', 'Both simultaneously', 'Neither — both require management approval first'], 1, 'CVSS Base score alone does not determine priority. The 7.2 vulnerability exists in your environment, is internet-facing, and has a public exploit — real and immediate risk. The 9.8 vulnerability in software you don\'t run presents zero risk. Environmental score and exploitability context are critical for remediation prioritisation.', 'understand'),
        kc('k5-6', 'Which CVSS metric describes whether an attacker can exploit a vulnerability without any user interaction?', ['Attack Vector', 'Attack Complexity', 'Privileges Required', 'User Interaction'], 3, 'The User Interaction metric indicates whether exploitation requires action by a legitimate user (e.g., clicking a link). None = no user interaction needed (worse). Required = a user must perform an action. This distinguishes drive-by exploits from phishing-dependent vulnerabilities.', 'analyze'),
      ],
      labExercise: dvwaLab('lab5-3', 'Looking Up CVEs and CVSS Scores for DVWA Vulnerabilities'),
      summary: ['CVSS 9.0–10.0 = Critical, 7.0–8.9 = High, 4.0–6.9 = Medium, 0.1–3.9 = Low.', 'Environmental score adjusts Base score for your context — a Critical in software you don\'t run is zero risk.', 'CVE = vulnerability ID, NVD = database with CVSS scores, EPSS = probability of exploitation in 30 days.'],
      examTip: 'Do not use CVSS Base score alone to prioritise — always factor in: is it in your environment? Is it internet-facing? Is there a public exploit? The exam presents scenarios requiring you to apply this contextual thinking rather than defaulting to the highest CVSS score.',
      examTip: 'CVSS 9.0-10.0 = Critical, 7.0-8.9 = High, 4.0-6.9 = Medium, 0.1-3.9 = Low. Environmental score adjusts for your specific context — a critical score for software you don\'t run is effectively zero risk.',
    },
    {
      id: 'ch5-pentest',
      title: 'Penetration Testing Concepts',
      learningObjectives: [
        lo('remember', 'Student can define pentest phases: reconnaissance, scanning, exploitation, post-exploitation, reporting.'),
        lo('understand', 'Student can explain the difference between black box, white box, and grey box testing.'),
        lo('apply', 'Student can apply pentest concepts to design a test scope for a given environment.'),
      ],
      sections: [
        sec('s5-10', 'Pentest Phases and Methodology', 'Penetration test phases (PTES/NIST): Reconnaissance (OSINT, passive scanning — Shodan, LinkedIn, DNS enumeration), Scanning/Enumeration (Nmap port scan, Nessus vulnerability scan, service fingerprinting), Exploitation (Metasploit, manual exploit — gaining initial access), Post-exploitation (lateral movement, privilege escalation, data access, persistence, pivoting), Reporting (executive summary, technical findings with evidence, remediation recommendations, risk rating).'),
        sec('s5-11', 'Black Box, White Box, and Grey Box Testing', 'Black box: tester has no prior knowledge — simulates external attacker. Most realistic external threat simulation but least efficient (more time on reconnaissance). White box: full knowledge (source code, architecture, credentials) — most comprehensive coverage, used for code reviews and internal security testing. Grey box: partial knowledge (credentials, network diagrams) — balances realism with efficiency. Most common for enterprise penetration tests. Bug bounty programs use black box methodology.'),
        sec('s5-12', 'Rules of Engagement and Legal Considerations', 'Rules of engagement (ROE) define: scope (IP ranges, URLs, systems in scope), out-of-bounds systems (production databases, life-safety systems), authorised techniques (social engineering, physical access), timing (business hours vs off-hours), emergency contacts, and notification procedures. Without ROE and written authorisation, penetration testing is illegal — the Computer Fraud and Abuse Act (CFAA) criminalises unauthorised system access regardless of intent.'),
      ],
      flashcards: [
        fc('f5-10', 'Penetration test', 'An authorised, simulated cyberattack that attempts to exploit vulnerabilities to demonstrate real-world impact. Phases: Reconnaissance, Scanning, Exploitation, Post-exploitation, Reporting. Requires written authorisation.'),
        fc('f5-11', 'Rules of engagement', 'A written document defining the scope, timing, authorised techniques, and out-of-bounds systems for a penetration test. Required before any offensive testing begins.'),
        fc('f5-12', 'Lateral movement', 'Post-exploitation technique where an attacker moves from an initially compromised system to other systems in the network — using harvested credentials, pass-the-hash, or exploiting trust relationships.'),
      ],
      knowledgeChecks: [
        kc('k5-7', 'A company hires a penetration tester and provides them with all internal network diagrams, a list of all servers, and domain admin credentials before the test. Which type of test is this?', ['Black box', 'Grey box', 'White box', 'Red team exercise'], 2, 'White box testing provides full knowledge — network diagrams, server inventory, and credentials. This enables the most comprehensive testing (e.g., checking all code paths) but does not simulate an external attacker. Grey box would provide some credentials but not full access. Black box provides nothing.', 'understand'),
        kc('k5-8', 'A penetration tester discovers a critical vulnerability in a system that was NOT included in the scope of the rules of engagement. What should the tester do FIRST?', ['Exploit it to demonstrate the full impact', 'Document the finding and report it to the client immediately without exploiting it', 'Expand the scope and continue testing', 'Ignore it since it is out of scope'], 1, 'Out-of-scope systems must not be tested — doing so exposes the tester to legal liability. The correct action is to document the discovered vulnerability and immediately notify the client through the established communication channel so they can decide how to address it.', 'apply'),
      ],
      labExercise: dvwaLab('lab5-4', 'Simulating Pentest Reconnaissance Against DVWA'),
      summary: ['Pentest phases: Reconnaissance, Scanning, Exploitation, Post-exploitation, Reporting.', 'Black box = no knowledge, White box = full knowledge, Grey box = partial knowledge (most common enterprise model).', 'Written authorisation and rules of engagement are mandatory — testing without them is illegal.'],
      examTip: 'Bug bounty programs are an extension of black box penetration testing — external researchers test public-facing assets within defined scope. The exam may contrast bug bounty (ongoing, crowdsourced) with penetration testing (time-bounded, scoped engagement). Both require authorisation.',
      examTip: 'Always get written authorization before starting a pentest — verbal permission is not enough. Rules of engagement define scope, timing, and out-of-bounds systems. Pentest ≠ vulnerability scan (pentest exploits, scan only identifies).',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 6 — Network Security (Domain 3, 18%)
// ---------------------------------------------------------------------------

const mod6: Module = {
  id: 'mod6-network-security',
  title: 'Module 6: Network Security',
  description: 'Network architecture, firewalls, IDS/IPS, VPN technologies, wireless security, and DNS/email security.',
  examWeight: 18,
  chapters: [
    {
      id: 'ch6-architecture',
      title: 'Secure Network Architecture',
      learningObjectives: [
        lo('remember', 'Student can identify network zones: DMZ, intranet, extranet, and their purposes.'),
        lo('understand', 'Student can explain network segmentation and its security benefits.'),
        lo('analyze', 'Student can analyze a network diagram to identify segmentation weaknesses.'),
      ],
      sections: [
        sec('s6-1', 'Network Zones and DMZ', 'Network zones separate traffic by trust level. DMZ (Demilitarised Zone): a screened subnet between the internet and internal network hosting public-facing services (web servers, mail servers, DNS). Protected by firewalls on both sides — external firewall faces internet, internal firewall faces corporate network. Compromise of a DMZ host does not directly expose internal systems. Internet → External FW → DMZ → Internal FW → Internal network is the standard architecture.'),
        sec('s6-2', 'Segmentation and Micro-segmentation', 'Network segmentation uses VLANs to separate broadcast domains — HR, Finance, IT, IoT each in separate VLANs with firewall rules controlling inter-VLAN traffic. NAC (Network Access Control) checks device posture before allowing network access — verifies OS patch level, AV status, and compliance before granting VLAN assignment. Micro-segmentation (Software-Defined Networking) applies firewall rules at the individual workload level rather than network perimeter.'),
        sec('s6-3', 'East-West vs North-South Traffic', 'North-South traffic flows between internal network and the internet (perimeter). East-West traffic flows laterally between systems within the same network — the primary attack path for lateral movement. Traditional perimeter firewalls only inspect North-South traffic. Zero Trust and micro-segmentation also inspect East-West traffic. Jump servers (bastion hosts) provide a single, audited access point into sensitive network segments — all admin traffic routes through them.'),
      ],
      flashcards: [
        fc('f6-1', 'DMZ (Demilitarised Zone)', 'A screened subnet between the internet and internal network hosting public-facing services. Protected by external and internal firewalls — compromise of DMZ hosts does not directly expose internal systems.'),
        fc('f6-2', 'Network segmentation', 'Dividing a network into separate zones (VLANs, subnets) with controlled traffic between them. Limits lateral movement — an attacker who compromises one segment cannot freely access others.'),
        fc('f6-3', 'Jump server (bastion host)', 'A hardened, single-purpose server that serves as the only authorised entry point for administrative access to a sensitive network segment. All admin sessions are logged through the jump server.'),
      ],
      knowledgeChecks: [
        kc('k6-1', 'A company places its public web server between two firewalls — one facing the internet and one facing the internal corporate network. What network zone is the web server in?', ['Internal network', 'DMZ (screened subnet)', 'Extranet', 'Intranet'], 1, 'The DMZ (Demilitarised Zone) is a network segment between two firewalls — the external firewall faces the internet, the internal firewall faces the corporate network. Public-facing servers (web, mail, DNS) are placed here so that compromise does not directly expose internal systems.', 'understand'),
        kc('k6-2', 'An organisation wants to ensure that administrators can only access production servers through a single hardened system that logs all sessions. Which control achieves this?', ['NAC (Network Access Control)', 'VLAN segmentation', 'Jump server (bastion host)', 'DMZ placement'], 2, 'A jump server (bastion host) is the single authorised access point for administrative sessions into sensitive environments. All traffic is routed through it, enabling session recording, MFA enforcement, and complete audit trails of admin activity.', 'analyze'),
      ],
      summary: ['DMZ: screened subnet between two firewalls for public-facing services — compromise does not expose internal network.', 'VLANs segment the network; NAC checks device posture before granting VLAN access.', 'Jump servers are the single authorised admin access point — all sessions are logged through them.'],
      examTip: 'DMZ architecture always has firewalls on BOTH sides — not just the external side. A single firewall with separate interfaces is a screened host architecture, less secure than a true dual-firewall DMZ. Know this distinction for architecture questions.',
      examTip: 'A DMZ sits between the internet and internal network, hosting public-facing services. Both external and internal firewalls protect it. Jump servers (bastion hosts) provide controlled access to sensitive network segments.',
    },
    {
      id: 'ch6-firewalls-ids-ips',
      title: 'Firewalls, IDS, and IPS',
      learningObjectives: [
        lo('remember', 'Student can define packet filtering, stateful, NGFW, IDS, and IPS.'),
        lo('understand', 'Student can explain the difference between IDS (detect/alert) and IPS (detect/block).'),
        lo('analyze', 'Student can compare signature-based, anomaly-based, and heuristic detection methods.'),
      ],
      sections: [
        sec('s6-4', 'Firewall Types and Evolution', 'Packet filtering (stateless): inspects individual packets by header (source/destination IP, port) — fast but cannot track connection state. Stateful firewall: tracks connection state tables, allows return traffic for established connections. NGFW (Next-Generation Firewall): adds application awareness, user identity, SSL/TLS inspection, and integrated IPS. WAF (Web Application Firewall): inspects HTTP/HTTPS traffic for application-layer attacks (SQLi, XSS) — deployed in front of web applications.'),
        sec('s6-5', 'Intrusion Detection Systems (IDS)', 'IDS monitors traffic and generates alerts when suspicious activity is detected — it does NOT block traffic. Placement: network IDS (NIDS) is out-of-band (connected to a tap or SPAN port — sees a copy of traffic), host IDS (HIDS) monitors a single system. Detection methods: signature-based (compares to known attack signatures — low false positive, misses zero-days), anomaly-based (establishes baseline, alerts on deviations — detects zero-days but higher false positive rate), heuristic (behaviour-based rules).'),
        sec('s6-6', 'Intrusion Prevention Systems (IPS)', 'IPS is inline — traffic passes through it before reaching the destination. It can block, drop, or reset connections in real time. Higher risk than IDS: misconfigured rules can block legitimate traffic (false positive = outage). NIPS sits between network segments. HIPS runs on individual hosts. Most NGFWs include IPS functionality. SIEM aggregates alerts from IDS, IPS, firewalls, and endpoints to correlate events across the environment.'),
      ],
      flashcards: [
        fc('f6-4', 'NGFW (Next-Generation Firewall)', 'A firewall with application-layer awareness, user identity integration, SSL/TLS inspection, and built-in IPS. Inspects traffic by application, not just port/protocol — can block Tor or BitTorrent regardless of port.'),
        fc('f6-5', 'Signature-based detection', 'Compares traffic or files against a database of known attack signatures. Low false positive rate but cannot detect unknown (zero-day) threats — requires regular signature updates.'),
        fc('f6-6', 'Anomaly-based detection', 'Establishes a baseline of normal behaviour, then alerts on deviations. Can detect zero-day threats and novel attacks but has a higher false positive rate than signature-based detection.'),
      ],
      knowledgeChecks: [
        kc('k6-3', 'A security device monitors network traffic and generates alerts for suspicious activity but does NOT block any traffic. What is this device?', ['Intrusion Prevention System (IPS)', 'Intrusion Detection System (IDS)', 'Next-Generation Firewall (NGFW)', 'Web Application Firewall (WAF)'], 1, 'IDS is passive — it generates alerts (detect only) but does not block traffic. IPS is inline and actively blocks malicious traffic. NGFW has IPS capability and can block. The key differentiator: IDS = alert only, IPS = alert + block.', 'understand'),
        kc('k6-4', 'Which detection method is MOST likely to identify a previously unknown zero-day attack that has no existing signature?', ['Signature-based detection', 'Anomaly-based detection', 'Heuristic detection', 'All three are equally effective against zero-days'], 1, 'Anomaly-based detection identifies zero-days by detecting deviations from the established baseline behaviour — even if the specific attack has no signature. Signature-based detection completely misses zero-days since no signature exists. Anomaly-based has higher false positives but is the only method that can catch truly novel attacks.', 'analyze'),
      ],
      summary: ['IDS = detect + alert only (out-of-band/passive). IPS = detect + block (inline, active).', 'Signature-based: low false positives, misses zero-days. Anomaly-based: detects zero-days, higher false positives.', 'NGFW adds application awareness and integrated IPS to stateful firewalling. WAF specifically protects web applications.'],
      examTip: 'IDS vs IPS is one of the most tested distinctions in Security+. IDS is always OUT-OF-BAND (passive mirror/tap) — it cannot block. IPS is always INLINE — traffic passes through it. If a question says the device "blocks" traffic, it is an IPS. If it only "alerts," it is an IDS.',
      examTip: 'IDS is out-of-band (passive, alerts only). IPS is inline (active, blocks traffic). Signature-based = known threats only. Anomaly-based = detects zero-days but has higher false positive rate.',
    },
    {
      id: 'ch6-vpn',
      title: 'VPN Technologies',
      learningObjectives: [
        lo('remember', 'Student can identify VPN types: site-to-site, remote access, split tunnel, full tunnel, SSL/TLS VPN, IPSec.'),
        lo('understand', 'Student can explain IPSec modes: transport vs tunnel.'),
        lo('apply', 'Student can apply VPN concepts to select the appropriate solution for a scenario.'),
      ],
      sections: [
        sec('s6-7', 'VPN Concepts and Types', 'VPN creates an encrypted tunnel over an untrusted network. Site-to-site VPN: permanently connects two networks (branch office to HQ) — both sides have VPN gateways. Remote access VPN: individual users connect to the corporate network. Always-on VPN forces all traffic through VPN regardless of location. Split tunneling: only internal traffic routes through VPN; internet traffic goes directly — reduces latency but creates security risk (bypasses corporate filtering).'),
        sec('s6-8', 'IPSec: AH, ESP, Transport, Tunnel Modes', 'IPSec operates at Layer 3 (Network). AH (Authentication Header): provides integrity and authentication but NOT encryption. ESP (Encapsulating Security Payload): provides integrity, authentication, AND encryption — use ESP. Modes: Transport mode encrypts only the payload (IP header unchanged — used between hosts). Tunnel mode encrypts the entire packet and adds a new IP header (used for site-to-site VPN gateways). IKE (Internet Key Exchange) establishes the IPSec session.'),
        sec('s6-9', 'SSL/TLS VPN and WireGuard', 'SSL/TLS VPN (e.g., OpenVPN, Cisco AnyConnect) uses TLS on port 443 — works through most firewalls without special configuration. Clientless SSL VPN: browser-based, no client software needed — suitable for guest/contractor access to specific web applications. Full client SSL VPN: installs a client and tunnels all traffic. WireGuard: modern VPN protocol using state-of-the-art cryptography (ChaCha20, Curve25519) — simpler, faster, and smaller codebase than IPSec or OpenVPN.'),
      ],
      flashcards: [
        fc('f6-7', 'IPSec', 'A Layer 3 VPN protocol suite. ESP (Encapsulating Security Payload) provides encryption, integrity, and authentication. Transport mode encrypts payload only (host-to-host); tunnel mode encrypts entire packet (site-to-site).'),
        fc('f6-8', 'Split tunneling', 'A VPN configuration where only traffic destined for internal networks routes through the VPN tunnel; internet traffic goes directly from the client. Reduces bandwidth but bypasses corporate security controls for internet traffic.'),
        fc('f6-9', 'SSL/TLS VPN', 'A VPN that uses TLS on port 443 to create an encrypted tunnel. Works through most firewalls. Can be clientless (browser-based) or full-client. More flexible than IPSec for remote access scenarios.'),
      ],
      knowledgeChecks: [
        kc('k6-5', 'Which IPSec mode should be used for a site-to-site VPN between two corporate offices?', ['Transport mode — encrypts payload only between hosts', 'Tunnel mode — encrypts the entire packet and adds a new IP header', 'AH mode — provides authentication without encryption', 'ESP transport mode between gateways'], 1, 'Tunnel mode encrypts the entire original packet (including IP header) and wraps it in a new packet with the VPN gateway IP addresses. This is used for site-to-site VPNs where the gateways encapsulate traffic from their local networks. Transport mode is for host-to-host connections.', 'understand'),
        kc('k6-6', 'A company security policy requires that ALL employee internet traffic be inspected by corporate security controls, even when working remotely. Which VPN configuration achieves this?', ['Split tunneling', 'Full tunnel VPN', 'Clientless SSL VPN', 'Site-to-site VPN'], 1, 'Full tunnel VPN routes ALL traffic through the corporate VPN — internet traffic is inspected by corporate proxies and security tools before reaching the internet. Split tunneling routes only internal traffic through VPN, allowing internet traffic to bypass controls — the opposite of what the policy requires.', 'apply'),
      ],
      summary: ['Site-to-site VPN: connects two networks. Remote access: individual users. Full tunnel: all traffic via VPN.', 'IPSec tunnel mode (site-to-site) encrypts entire packet. Transport mode (host-to-host) encrypts payload only.', 'Split tunneling = security risk — internet traffic bypasses corporate controls. Full tunnel = more secure, more latency.'],
      examTip: 'IPSec uses two protocols: AH (authentication + integrity only, no encryption) and ESP (authentication + integrity + encryption). Always use ESP for VPNs where confidentiality is required — which is virtually all real-world cases. AH alone is essentially useless for most VPN scenarios.',
      examTip: 'IPSec tunnel mode encrypts the entire packet (used for site-to-site VPNs). Transport mode encrypts only the payload (used between hosts). Full tunnel routes all traffic through VPN; split tunnel only routes internal traffic.',
    },
    {
      id: 'ch6-wireless',
      title: 'Wireless Security',
      learningObjectives: [
        lo('remember', 'Student can identify wireless protocols: WEP, WPA, WPA2, WPA3, and their security properties.'),
        lo('understand', 'Student can explain why WEP is broken and WPA3 is preferred.'),
        lo('analyze', 'Student can analyze a wireless attack scenario to identify the attack and recommend mitigation.'),
      ],
      sections: [
        sec('s6-10', 'Wireless Standards and Security Protocols', 'WEP: broken — RC4-based, crackable in minutes using tools like Aircrack-ng. WPA: uses TKIP (still RC4-based, deprecated). WPA2: uses AES-CCMP — current minimum standard. WPA2-Personal uses a pre-shared key (PSK); WPA2-Enterprise uses 802.1X with RADIUS for per-user authentication. WPA3: uses SAE (Simultaneous Authentication of Equals) — replaces PSK handshake, resistant to offline dictionary attacks and provides forward secrecy.'),
        sec('s6-11', 'WPA2 Enterprise and 802.1X', 'WPA2-Enterprise (802.1X) authenticates each user individually against a RADIUS server — no shared password. EAP variants: EAP-TLS (certificate-based authentication on both client and server — strongest), PEAP (Protected EAP — wraps EAP in a TLS tunnel, password-based authentication inside — no client certificate required), EAP-TTLS, LEAP (deprecated). 802.1X applies to wired networks too — port-based authentication prevents unauthorised LAN access.'),
        sec('s6-12', 'Wireless Attacks: Evil Twin, Deauth, Cracking', 'Evil twin: attacker sets up a rogue AP with the same SSID as the legitimate network — clients connect to the attacker. Deauthentication attack: sends spoofed 802.11 deauth frames to disconnect clients — forces them to reconnect (used with evil twin). WPA2-Personal handshake capture: capture the 4-way handshake then brute-force offline. WPA3 prevents offline brute force via SAE. Rogue AP: any unauthorised AP on the network — detected by wireless intrusion detection systems (WIDS).'),
      ],
      flashcards: [
        fc('f6-10', 'WPA3', 'The current WiFi security standard using SAE (Simultaneous Authentication of Equals) — replaces the WPA2 PSK handshake and provides resistance to offline dictionary attacks and forward secrecy.'),
        fc('f6-11', 'Evil twin attack', 'A rogue wireless access point mimicking the SSID of a legitimate network — clients connect to the attacker\'s AP and their traffic is intercepted. Deauthentication attacks are often used to force reconnection.'),
        fc('f6-12', 'RADIUS for wireless (802.1X)', 'RADIUS provides per-user authentication for WPA2-Enterprise and wired 802.1X networks. Each user authenticates with their own credentials — no shared password. EAP-TLS is the strongest variant using client certificates.'),
      ],
      knowledgeChecks: [
        kc('k6-7', 'A company uses WPA2-Personal with a shared passphrase for their corporate WiFi. What is the PRIMARY security weakness of this approach?', ['WPA2 uses RC4 encryption which is broken', 'All users share the same key — compromise of one device exposes all traffic', 'WPA2 does not support AES encryption', 'PSK authentication does not work with enterprise devices'], 1, 'WPA2-Personal uses a shared pre-shared key (PSK) — if one device is compromised or an employee leaves, the key must be changed on every device. WPA2-Enterprise (802.1X) provides per-user authentication with individual credentials, eliminating this risk. WPA2 uses AES-CCMP, not RC4.', 'understand'),
        kc('k6-8', 'Users at a coffee shop report their devices connect to "CoffeeShop_WiFi" but their banking passwords are being stolen. They were previously connected to the legitimate "CoffeeShop_WiFi" network. What attack is occurring?', ['Deauthentication flood', 'Evil twin attack', 'WPA handshake capture', 'DNS poisoning'], 1, 'An evil twin attack creates a rogue AP with the same SSID — clients connect automatically (especially after being forced off the legitimate network via deauth). The attacker intercepts credentials on the fake network. HTTPS and certificate validation protect against credential theft even on evil twin networks.', 'analyze'),
      ],
      summary: ['WEP = broken. WPA/TKIP = deprecated. WPA2-AES = current minimum. WPA3-SAE = preferred (forward secrecy).', 'WPA2-Enterprise + 802.1X + RADIUS = per-user authentication, no shared password. EAP-TLS = strongest.', 'Evil twin = rogue AP with same SSID. Deauth forces clients to reconnect. WPA3 resists offline dictionary attacks.'],
      examTip: 'WPA2-Enterprise is ALWAYS better than WPA2-Personal for corporate environments — it provides individual user credentials and eliminates the shared key problem. The exam will present scenarios asking for the MOST secure wireless implementation — always choose WPA3-Enterprise or WPA2-Enterprise over any PSK option.',
      examTip: 'WEP is completely broken — crackable in minutes. WPA2-Enterprise uses 802.1X and RADIUS for per-user authentication. WPA3 uses SAE (Simultaneous Authentication of Equals) which resists offline dictionary attacks.',
    },
    {
      id: 'ch6-dns-email',
      title: 'DNS and Email Security',
      learningObjectives: [
        lo('remember', 'Student can define DNSSEC, SPF, DKIM, DMARC and their purpose.'),
        lo('understand', 'Student can explain how SPF, DKIM, and DMARC together prevent email spoofing.'),
        lo('apply', 'Student can apply email security concepts to recommend controls for an organization.'),
      ],
      sections: [
        sec('s6-13', 'DNS Security: DNSSEC and DNS Attacks', 'DNS poisoning (cache poisoning): injects forged DNS records to redirect users to attacker servers. DNS hijacking: modifies DNS settings at the registrar or resolver level. DNS tunnelling: encodes data in DNS queries/responses for covert C2 communication or data exfiltration. DNSSEC: digitally signs DNS records with asymmetric cryptography — receivers can verify the signature to detect tampered responses. DNS over HTTPS (DoH) encrypts DNS queries to prevent eavesdropping.'),
        sec('s6-14', 'Email Authentication: SPF and DKIM', 'SPF (Sender Policy Framework): a DNS TXT record listing all servers authorised to send email for a domain. Receiving servers check SPF to verify the sending server is authorised. Does not protect the From header visible to users. DKIM (DomainKeys Identified Mail): adds a cryptographic signature to email headers using the sending domain\'s private key. Receiving servers verify the signature with the public key published in DNS — proves the email was sent by the domain and was not modified in transit.'),
        sec('s6-15', 'DMARC Policy and Email Security', 'DMARC (Domain-based Message Authentication, Reporting, and Conformance): a DNS record that tells receiving servers what to do when SPF and/or DKIM checks fail. Policy values: none (report only — monitoring mode), quarantine (send to spam), reject (reject the message). DMARC also sends aggregate reports to the domain owner showing who is sending email claiming to be from their domain — essential for detecting impersonation. All three (SPF + DKIM + DMARC=reject) are needed for full protection.'),
      ],
      flashcards: [
        fc('f6-13', 'SPF (Sender Policy Framework)', 'A DNS TXT record listing authorised sending servers for a domain. Receiving mail servers check SPF to verify the sending server is authorised. Prevents IP spoofing of the sending server.'),
        fc('f6-14', 'DKIM (DomainKeys Identified Mail)', 'Adds a cryptographic signature to email headers using the domain\'s private key. Receiving servers verify with the public key in DNS — proves authenticity and detects in-transit modification.'),
        fc('f6-15', 'DMARC', 'A DNS policy specifying what to do when SPF/DKIM fail: none (monitor), quarantine (spam folder), or reject (block). Also provides aggregate reports of who is sending email claiming to be from your domain.'),
      ],
      knowledgeChecks: [
        kc('k6-9', 'What does the DMARC "reject" policy do when an email fails both SPF and DKIM checks?', ['Delivers the email to the inbox with a warning', 'Moves the email to the spam/quarantine folder', 'Rejects the email at the server level — it is not delivered', 'Forwards the email to the domain security team'], 2, 'DMARC reject instructs receiving mail servers to refuse delivery entirely when both SPF and DKIM checks fail. This is the strongest protection against email spoofing. Quarantine sends to spam. None only sends reports. DMARC reject is the end goal after monitoring with "none" first.', 'understand'),
        kc('k6-10', 'An attacker sends phishing emails that appear to come from a company\'s own domain. The company has SPF configured but no DKIM or DMARC. Which control would BEST close this gap?', ['Add DMARC with reject policy and configure DKIM signing', 'Implement email encryption (S/MIME)', 'Deploy a WAF in front of the mail server', 'Enable MFA for all email accounts'], 0, 'DKIM adds a cryptographic signature that SPF cannot provide, and DMARC with reject tells receivers to block emails that fail authentication checks. SPF alone only validates the sending server, not the From header — attackers can still spoof the visible From address. DKIM + DMARC close this gap.', 'apply'),
      ],
      summary: ['SPF: authorises sending servers (DNS TXT). DKIM: cryptographic signature on email. DMARC: policy on failure (none/quarantine/reject).', 'All three are required for full anti-spoofing protection — SPF and DKIM alone are insufficient without DMARC.', 'DNSSEC signs DNS records cryptographically. DNS tunnelling is a covert channel through DNS — detected by monitoring query volume and entropy.'],
      examTip: 'SPF stops IP spoofing of the sending server. DKIM stops header tampering and validates domain ownership. DMARC ties them together and enforces policy. The order of protection: SPF → DKIM → DMARC reject. Configure in that order and start with DMARC=none before moving to reject.',
      examTip: 'SPF authorizes sending mail servers (DNS TXT record). DKIM adds a cryptographic signature to email headers. DMARC tells receivers what to do when SPF/DKIM fail (none/quarantine/reject). You need all three for full protection.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 7 — Cloud & Infrastructure (Domain 3, 18%)
// ---------------------------------------------------------------------------

const mod7: Module = {
  id: 'mod7-cloud-infrastructure',
  title: 'Module 7: Cloud & Infrastructure Security',
  description: 'Cloud service and deployment models, cloud-native security, virtualization, and infrastructure as code.',
  examWeight: 18,
  chapters: [
    {
      id: 'ch7-cloud-models',
      title: 'Cloud Service and Deployment Models',
      learningObjectives: [
        lo('remember', 'Student can define IaaS, PaaS, SaaS and public, private, hybrid, community cloud.'),
        lo('understand', 'Student can explain the shared responsibility model for each service type.'),
        lo('analyze', 'Student can analyze cloud deployment options to recommend the right model for a security requirement.'),
      ],
      sections: [
        sec('s7-1', 'Cloud Service Models', 'IaaS (Infrastructure as a Service): provider manages physical hardware, network, hypervisor. Customer manages OS, middleware, applications, data (AWS EC2, Azure VMs). PaaS (Platform as a Service): provider additionally manages OS and middleware. Customer manages only applications and data (AWS Elastic Beanstalk, Azure App Service). SaaS (Software as a Service): provider manages everything including the application. Customer manages only data and user access (Office 365, Salesforce, Google Workspace). Security responsibility shifts up the stack with each model.'),
        sec('s7-2', 'Cloud Deployment Models', 'Public cloud: resources shared across multiple customers (multi-tenant) on provider infrastructure. Private cloud: dedicated infrastructure for one organisation — on-premises or hosted. Higher cost, more control. Hybrid cloud: combination of public and private cloud with connectivity between them. Community cloud: shared infrastructure for a specific industry (healthcare, government). Key risks across all models: misconfigured storage buckets (public S3 objects), insecure APIs, insufficient identity controls, and over-permissive IAM roles.'),
        sec('s7-3', 'Shared Responsibility Model', 'The shared responsibility model defines what the cloud provider secures vs what the customer secures. Provider always secures: physical hardware, datacentre, hypervisor, network infrastructure. IaaS customer secures: OS, patches, applications, data, network configuration, identity. PaaS customer secures: applications, data, identity. SaaS customer secures: data, user access, and MFA configuration. Misunderstanding this model (believing the provider secures everything) is the source of most cloud security breaches.'),
      ],
      flashcards: [
        fc('f7-1', 'Shared responsibility model', 'The division of security responsibilities between cloud provider and customer. Provider always secures physical infrastructure. Customer responsibility increases as you move from SaaS to PaaS to IaaS.'),
        fc('f7-2', 'IaaS (Infrastructure as a Service)', 'Cloud model where the provider manages physical hardware, network, and hypervisor. The customer manages OS, middleware, applications, and data. Most flexibility, most customer security responsibility.'),
        fc('f7-3', 'SaaS (Software as a Service)', 'Cloud model where the provider manages everything including the application. Customer is responsible only for data protection, user access management, and MFA configuration.'),
      ],
      knowledgeChecks: [
        kc('k7-1', 'A company uses a SaaS email platform. A data breach occurs due to weak passwords and no MFA on user accounts. Who is responsible for this security failure?', ['The cloud provider — they manage the application', 'The customer — user access and MFA are customer responsibilities in SaaS', 'Both equally share responsibility', 'Neither — SaaS providers handle all security'], 1, 'In SaaS, the customer is responsible for user access management, including enforcing MFA and strong passwords. The provider manages the application infrastructure. Misconfigured user access and missing MFA are customer-side failures under the shared responsibility model.', 'understand'),
        kc('k7-2', 'A healthcare organisation needs to store patient data in the cloud but must maintain complete control over the OS, database software, and encryption keys. Which service model is MOST appropriate?', ['SaaS', 'PaaS', 'IaaS', 'FaaS (Serverless)'], 2, 'IaaS gives the customer control over the OS, database, encryption configuration, and all application-level security. PaaS abstracts the OS away. SaaS abstracts the entire application. For regulated data requiring full control of the stack, IaaS provides maximum flexibility.', 'analyze'),
      ],
      summary: ['IaaS: customer manages OS up. PaaS: customer manages apps up. SaaS: customer manages data and users only.', 'Shared responsibility: provider always secures physical infrastructure; everything above depends on service model.', 'Biggest cloud risks: misconfigured storage, overpermissive IAM, missing MFA, insecure APIs.'],
      examTip: 'The shared responsibility model is the most important cloud security concept on the exam. Draw a stack: physical → hypervisor → OS → middleware → application → data → users. The dividing line between provider and customer responsibility moves down the stack from SaaS to PaaS to IaaS.',
      examTip: 'In IaaS, the customer manages OS, middleware, and applications. In PaaS, the provider manages those layers. In SaaS, the provider manages everything except data and user access. Security responsibility shifts up the stack.',
    },
    {
      id: 'ch7-cloud-security',
      title: 'Cloud Security Controls',
      learningObjectives: [
        lo('remember', 'Student can identify cloud security controls: CASB, CSPM, CWPP, and cloud-native IAM.'),
        lo('understand', 'Student can explain how a CASB enforces security policies for cloud services.'),
        lo('apply', 'Student can apply cloud security controls to address a specific cloud risk scenario.'),
      ],
      sections: [
        sec('s7-4', 'Cloud Access Security Brokers (CASB)', 'CASB sits between users and cloud services to enforce security policies. Functions: visibility (discover all SaaS in use — shadow IT), data security (DLP for cloud uploads), threat protection (detect compromised accounts, malware), compliance (enforce policies). Deployment: forward proxy (inline, intercepts traffic — requires client configuration or PAC file), reverse proxy (sits in front of cloud service — no client configuration needed), API-based (integrates with SaaS APIs — sees data at rest but not in transit). SASE (Secure Access Service Edge) combines CASB, SWG, ZTNA, and SD-WAN.'),
        sec('s7-5', 'Cloud Security Posture Management (CSPM)', 'CSPM continuously monitors cloud environments for misconfigurations — publicly accessible S3 buckets, overpermissive security groups, unencrypted databases, missing MFA on root accounts. Automated remediation can fix misconfigurations immediately or create tickets for manual review. CWPP (Cloud Workload Protection Platform) provides runtime protection for cloud workloads — detecting threats in running containers and VMs. Together: CSPM fixes configuration, CWPP protects running workloads.'),
        sec('s7-6', 'Cloud IAM and Secrets Management', 'Cloud IAM controls access to cloud resources. Key risks: over-permissive roles (granting Admin when ReadOnly is sufficient), unused access keys (long-lived credentials not rotated), public-facing roles (IMDS exploitation on EC2). Best practices: principle of least privilege for all IAM roles, use temporary credentials (IAM roles) instead of static access keys, enable CloudTrail/Activity Log for all API calls. Secrets management: never store API keys in code — use AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault.'),
      ],
      flashcards: [
        fc('f7-4', 'CASB (Cloud Access Security Broker)', 'A security control point between users and cloud services enforcing visibility, data security, threat protection, and compliance policies. Can be deployed as forward proxy, reverse proxy, or API-based.'),
        fc('f7-5', 'CSPM (Cloud Security Posture Management)', 'A tool that continuously scans cloud environments for misconfigurations — public storage buckets, overpermissive IAM, unencrypted databases. Provides automated remediation and compliance reporting.'),
        fc('f7-6', 'Cloud IAM', 'Identity and access management for cloud resources — controls what users and services can do in the cloud environment. Key risks: over-permissive roles, unused static access keys, and missing MFA on privileged accounts.'),
      ],
      knowledgeChecks: [
        kc('k7-3', 'A security team discovers employees are uploading sensitive customer data to personal Dropbox accounts without IT approval. Which cloud security control would BEST prevent this?', ['CSPM', 'CASB with DLP policy', 'Cloud IAM', 'CWPP'], 1, 'CASB with DLP (Data Loss Prevention) policies can inspect outbound traffic to cloud services and block uploads of sensitive data to unauthorised destinations (personal Dropbox). CSPM monitors your own cloud environment for misconfigurations. CWPP protects cloud workloads. Cloud IAM manages your own cloud access.', 'understand'),
        kc('k7-4', 'A security audit finds an S3 bucket containing customer PII is publicly accessible. A CSPM tool detected this an hour after it was created. Which type of cloud risk does this represent?', ['Insider threat', 'Cloud misconfiguration', 'Supply chain attack', 'Credential theft'], 1, 'Publicly accessible cloud storage containing sensitive data is a cloud misconfiguration — one of the most common and impactful cloud security failures. CSPM is specifically designed to detect these misconfigurations. The key insight: it was PUBLIC by misconfiguration, not by attack.', 'apply'),
      ],
      summary: ['CASB: visibility and DLP for SaaS usage. CSPM: detect cloud misconfigurations. CWPP: runtime workload protection.', 'Cloud IAM: use least privilege roles, temporary credentials, MFA on privileged accounts.', 'Never store secrets in code or IaC — use dedicated secrets managers (AWS Secrets Manager, Azure Key Vault).'],
      examTip: 'CASB, CSPM, and CWPP are frequently confused. CASB = controls access to EXTERNAL cloud services (SaaS). CSPM = monitors YOUR OWN cloud environment for misconfigurations. CWPP = protects running workloads (containers, VMs). Know which problem each tool solves.',
      examTip: 'CASB sits between users and cloud services and can enforce DLP, access control, and threat protection. It can be deployed as a proxy (inline) or API-based. Both modes have different capabilities.',
    },
    {
      id: 'ch7-virtualization',
      title: 'Virtualization Security',
      learningObjectives: [
        lo('remember', 'Student can define hypervisor types (Type 1 and Type 2) and virtual machine escape.'),
        lo('understand', 'Student can explain how VM sprawl increases attack surface.'),
        lo('analyze', 'Student can evaluate virtualization security risks in a given scenario.'),
      ],
      sections: [
        sec('s7-7', 'Hypervisor Types and Architecture', 'Type 1 hypervisor (bare-metal): runs directly on hardware — no host OS (VMware ESXi, Microsoft Hyper-V, Xen). More secure and performant — attack surface is limited to the hypervisor itself. Type 2 hypervisor (hosted): runs on top of a host OS (VMware Workstation, VirtualBox, Parallels). Less secure — the host OS is an additional attack surface. Cloud providers use Type 1 hypervisors. Snapshots capture VM state — security risk if snapshots contain sensitive data or outdated patched states.'),
        sec('s7-8', 'VM Escape and VM Sprawl', 'VM escape: an attacker breaks out of a guest VM to access the hypervisor or other VMs on the same host — the most severe virtualisation attack. Mitigations: keep hypervisor patched, enable Secure Boot, restrict VM-to-host interactions. VM sprawl: uncontrolled proliferation of VMs — old, unpatched VMs accumulate vulnerabilities. Mitigations: VM lifecycle management, automated decommissioning, mandatory patching policy for all VMs including powered-off ones.'),
        sec('s7-9', 'Container Security', 'Containers share the host OS kernel — lighter than VMs but less isolated. A compromised container could break out to the host or other containers. Docker containers are image-based — images should be scanned for vulnerabilities before deployment. Kubernetes (K8s) orchestrates containers — RBAC controls access to the K8s API. Best practices: use minimal base images, run as non-root, scan images with Trivy or Clair, use network policies for pod-to-pod traffic control, secrets management for environment variables.'),
      ],
      flashcards: [
        fc('f7-7', 'Type 1 hypervisor', 'A bare-metal hypervisor running directly on hardware without a host OS — e.g., VMware ESXi, Microsoft Hyper-V. More secure than Type 2 (hosted) hypervisors used by cloud providers.'),
        fc('f7-8', 'VM escape', 'A critical vulnerability where an attacker breaks out of a guest virtual machine to access the hypervisor or other VMs on the same physical host. Kept patched hypervisors are the primary mitigation.'),
        fc('f7-9', 'Container', 'An isolated application environment sharing the host OS kernel — lighter than VMs but less isolated. Containers use images; Kubernetes orchestrates multiple containers. Scan images for vulnerabilities before deployment.'),
      ],
      knowledgeChecks: [
        kc('k7-5', 'A cloud service provider deploys thousands of customer VMs on their infrastructure. Which hypervisor type should they use for BEST security and performance?', ['Type 2 — hosted on a general-purpose OS for flexibility', 'Type 1 — bare-metal, runs directly on hardware', 'Both types equally depending on workload', 'Neither — containers are more appropriate than VMs'], 1, 'Type 1 (bare-metal) hypervisors run directly on hardware without a host OS attack surface. Cloud providers use Type 1 (ESXi, Hyper-V) for all production workloads. Type 2 hypervisors are used for development desktops (VirtualBox, VMware Workstation) — not appropriate for production cloud infrastructure.', 'understand'),
        kc('k7-6', 'A container running in a Kubernetes cluster exploits a kernel vulnerability and gains access to the host OS and other containers. What type of attack is this?', ['VM escape', 'Container escape', 'Hypervisor injection', 'Privilege escalation within the container'], 1, 'Container escape (similar to VM escape) occurs when an attacker breaks out of the container\'s isolation boundary to access the host OS or other containers. Containers share the kernel — a kernel exploit can break container isolation. VMs have stronger isolation via the hypervisor hardware boundary.', 'analyze'),
      ],
      summary: ['Type 1 (bare-metal) hypervisors are more secure than Type 2 (hosted). Cloud providers use Type 1.', 'VM escape = attacker breaks out of guest VM to hypervisor — critical vulnerability. Keep hypervisor patched.', 'Containers are lighter than VMs but share the OS kernel — less isolation. Scan images, run non-root, use network policies.'],
      examTip: 'Know the security trade-off: VMs have stronger isolation (full hypervisor boundary) but are heavier. Containers are lightweight but share the kernel — if the kernel is exploited, all containers on the host are at risk. The exam will test whether you can identify which isolation model is more appropriate for a given security requirement.',
      examTip: 'Type 1 hypervisors (bare-metal: ESXi, Hyper-V) are more secure because they run directly on hardware. Type 2 (hosted: VirtualBox, VMware Workstation) share the host OS. VM escape is a critical vulnerability where a VM breaks containment.',
    },
    {
      id: 'ch7-iac',
      title: 'Infrastructure as Code Security',
      learningObjectives: [
        lo('remember', 'Student can define IaC and identify tools: Terraform, Ansible, CloudFormation.'),
        lo('understand', 'Student can explain security risks specific to IaC (misconfiguration, secrets in code).'),
        lo('apply', 'Student can apply IaC security practices to harden a deployment pipeline.'),
      ],
      sections: [
        sec('s7-10', 'Infrastructure as Code Concepts', 'IaC defines infrastructure in code files rather than manual configuration — Terraform (multi-cloud), AWS CloudFormation (AWS-specific), Ansible (configuration management), Puppet, Chef. Benefits: reproducible deployments, version-controlled changes, peer-reviewed configurations, automated testing. IaC files are stored in Git — the same security practices as application code apply: code review, secret scanning, and access controls.'),
        sec('s7-11', 'IaC Security Risks: Misconfigurations and Drift', 'Configuration drift: over time, manually applied changes cause infrastructure to deviate from the IaC definition — security controls may be weakened. Immutable infrastructure: rather than patching running systems, replace them entirely with new instances built from the latest IaC — eliminates configuration drift. Policy-as-code (OPA — Open Policy Agent, Checkov, tfsec) validates IaC templates for security misconfigurations before deployment, preventing vulnerable configurations from reaching production.'),
        sec('s7-12', 'Secrets Management in IaC', 'Hardcoded secrets (API keys, passwords, database credentials) in IaC files are a critical risk — IaC is stored in version control, and credentials committed to Git may be exposed publicly or to all developers. Prevention: use secrets managers (HashiCorp Vault, AWS Secrets Manager) and reference secrets by ARN/path rather than value. Automated secret scanning (git-secrets, Gitleaks, TruffleHog) detects accidental commits. Rotate any secret that was ever committed to version control.'),
      ],
      flashcards: [
        fc('f7-10', 'IaC (Infrastructure as Code)', 'Defining and managing infrastructure through code files (Terraform, CloudFormation, Ansible) rather than manual configuration. Enables reproducible, version-controlled, peer-reviewed infrastructure deployments.'),
        fc('f7-11', 'Configuration drift', 'The gradual divergence of running infrastructure from its desired state (IaC definition) due to manual changes. Creates security risks as controls are weakened over time. Immutable infrastructure prevents drift.'),
        fc('f7-12', 'Immutable infrastructure', 'An approach where running systems are never modified — instead, updated versions are deployed from the latest IaC definition and old instances are terminated. Eliminates configuration drift.'),
      ],
      knowledgeChecks: [
        kc('k7-7', 'A developer commits a Terraform file to GitHub containing an AWS access key and secret. The repository is public. What is the FIRST action to take?', ['Rotate the AWS access key immediately', 'Delete the commit from Git history', 'Notify the developer of the policy violation', 'Enable MFA on the AWS account'], 0, 'When a secret is exposed in a public repository, it must be considered fully compromised. The FIRST action is to rotate (invalidate and replace) the exposed credential immediately — it may already be scraped by automated tools. After rotation: remove from Git history, scan for other secrets, and investigate for unauthorised usage.', 'understand'),
        kc('k7-8', 'A security team wants to prevent insecure IaC configurations (open security groups, public S3 buckets) from being deployed to production. What control achieves this?', ['CSPM scanning after deployment', 'Policy-as-code scanning in the CI/CD pipeline', 'Manual review of deployed resources', 'SIEM alerting on misconfigurations'], 1, 'Policy-as-code (Checkov, tfsec, OPA) scans IaC templates in the CI/CD pipeline BEFORE deployment and fails the pipeline if misconfigurations are detected. This is "shift-left" security for infrastructure — catch issues before they reach production. CSPM detects issues after deployment (reactive); policy-as-code is proactive.', 'apply'),
      ],
      summary: ['IaC stores infrastructure as code (Terraform, CloudFormation, Ansible) — version-controlled, reproducible.', 'Never store secrets in IaC files — use secrets managers. Scan with git-secrets/Gitleaks for accidental commits.', 'Policy-as-code (Checkov, tfsec) validates IaC before deployment. Immutable infrastructure prevents configuration drift.'],
      examTip: 'IaC introduces a new attack vector: the CI/CD pipeline. Compromise of the build system allows an attacker to inject malicious infrastructure changes. Protect build systems like production systems: access controls, audit logging, secrets management, and code signing for deployment artefacts.',
      examTip: 'Never store secrets (passwords, API keys) in IaC files or version control. Use a secrets manager (HashiCorp Vault, AWS Secrets Manager). Scan IaC templates with tools like Checkov or tfsec before deployment.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 8 — Endpoint & App Security (Domain 3+4)
// ---------------------------------------------------------------------------

const mod8: Module = {
  id: 'mod8-endpoint-app-security',
  title: 'Module 8: Endpoint & Application Security',
  description: 'EDR, mobile device management, system hardening, SDLC security, and IoT security.',
  chapters: [
    {
      id: 'ch8-edr',
      title: 'Endpoint Detection and Response',
      learningObjectives: [
        lo('remember', 'Student can define EDR, AV, HIDS, and HIPS and their deployment models.'),
        lo('understand', 'Student can explain how EDR improves on traditional antivirus.'),
        lo('analyze', 'Student can analyze an endpoint security scenario to recommend the appropriate control.'),
      ],
      sections: [
        sec('s8-1', 'Antivirus and Traditional Endpoint Security', 'Traditional antivirus uses signature-based detection — compares files against a database of known malware hashes and patterns. Effective against known threats but completely blind to zero-days, polymorphic malware (changes its signature), and fileless malware. HIDS (Host-based IDS): monitors a single host for suspicious activity — log analysis, file integrity monitoring, registry monitoring. HIPS (Host-based IPS): same as HIDS but can actively block suspicious activity. Allow list (whitelist): only listed applications can run. Deny list (blacklist): listed applications are blocked.'),
        sec('s8-2', 'EDR Capabilities and Benefits', 'EDR (Endpoint Detection and Response) goes beyond signatures. Capabilities: behavioural detection (detects malicious behaviour patterns regardless of signature), process monitoring (parent-child process relationships, unusual spawning), network connection monitoring (unexpected outbound connections), memory analysis (detects fileless malware), file system monitoring (tracks creation/modification of executables), automated response (isolate the endpoint, kill the process, quarantine the file). Vendors: CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint.'),
        sec('s8-3', 'HIDS and HIPS', 'HIDS monitors host activity and generates alerts — file integrity monitoring (FIM) detects unauthorised changes to critical OS files. Tools: OSSEC, Wazuh. HIPS blocks suspicious activity in real time on the host — can prevent buffer overflows, code injection, and unauthorised registry changes. XDR (Extended Detection and Response) extends EDR by correlating endpoint telemetry with network, email, cloud, and identity data — provides a unified view across the attack surface.'),
      ],
      flashcards: [
        fc('f8-1', 'EDR (Endpoint Detection and Response)', 'Next-generation endpoint security using behavioural detection, memory analysis, and automated response. Detects fileless malware, zero-days, and advanced threats that traditional AV misses.'),
        fc('f8-2', 'HIDS (Host-based Intrusion Detection System)', 'A security agent on an individual host that monitors for suspicious activity — log analysis, file integrity monitoring, and registry changes. Generates alerts but does not block (detection only).'),
        fc('f8-3', 'Allow list / deny list', 'Allow list (whitelist): only explicitly listed applications may run — most restrictive, prevents all unauthorised software. Deny list (blacklist): explicitly listed applications are blocked — all others are permitted by default.'),
      ],
      knowledgeChecks: [
        kc('k8-1', 'A malware sample uses only built-in Windows tools (PowerShell, WMI) and lives entirely in memory with no files on disk. Traditional AV does not detect it. Which endpoint control is BEST suited to detecting this threat?', ['Antivirus with updated signatures', 'EDR with behavioural detection and memory analysis', 'Host-based IDS (HIDS)', 'Application deny list'], 1, 'Fileless malware has no disk-based signatures for AV to detect. EDR\'s behavioural detection identifies malicious process chains (PowerShell spawned by Word → network connection) and memory analysis detects injected code — both catch fileless attacks that AV misses.', 'understand'),
        kc('k8-2', 'An organisation wants to prevent all non-approved applications from running on employee workstations. Which control achieves this MOST effectively?', ['EDR with deny list', 'Application allow list (whitelist)', 'Antivirus with heuristic detection', 'HIPS with behavioural rules'], 1, 'An application allow list (whitelist) only permits explicitly approved applications — all others are blocked by default. This is the most restrictive approach and prevents execution of ANY unauthorised software, including malware. Deny lists block known bad software but permit anything not listed — an unknown malware binary would not be blocked.', 'analyze'),
      ],
      summary: ['Traditional AV: signature-based — misses zero-days, fileless malware, and polymorphic threats.', 'EDR: behavioural detection + memory analysis + automated response — detects what AV misses.', 'Allow list = only approved apps run (most restrictive). Deny list = known bad apps blocked (everything else permitted).'],
      examTip: 'XDR (Extended Detection and Response) is the evolution of EDR — it correlates data across endpoints, network, email, cloud, and identity for a unified attack view. The exam may ask about the difference: EDR = endpoint only, XDR = cross-domain correlation. Both are threat detection and response platforms.',
      examTip: 'EDR provides behavioral analysis, threat hunting, and forensic capabilities beyond signature-based AV. XDR (Extended Detection and Response) adds network, email, and cloud telemetry to endpoint data.',
    },
    {
      id: 'ch8-mdm',
      title: 'Mobile Device Management',
      learningObjectives: [
        lo('remember', 'Student can define MDM, MAM, EMM, BYOD, COPE, and CYOD deployment models.'),
        lo('understand', 'Student can explain the trade-offs between BYOD and COPE from a security perspective.'),
        lo('apply', 'Student can apply MDM concepts to design a mobile security policy.'),
      ],
      sections: [
        sec('s8-4', 'MDM and Mobile Deployment Models', 'MDM (Mobile Device Management) provides centralised management and policy enforcement for mobile devices. Policies: enforce screen lock (PIN/biometric), enforce encryption, remote wipe (full device), selective wipe (corporate data only), control app installation, enforce OS version. Deployment models: BYOD (Bring Your Own Device — user-owned), COPE (Corporate-Owned, Personally Enabled — corporate owns, personal use allowed), CYOD (Choose Your Own Device — user selects from approved list), COBO (Corporate-Owned, Business Only).'),
        sec('s8-5', 'BYOD, COPE, and CYOD Security Trade-offs', 'BYOD: lowest cost, highest user acceptance, but lowest IT control. Full MDM enrollment on BYOD may violate employee privacy. Selective wipe removes only corporate data. Privacy concerns arise from location tracking and personal app monitoring. COPE: corporate owns the device — IT has full control, can enforce full disk encryption, full MDM, and remote wipe without privacy concerns. Higher cost. CYOD: balances user preference with IT control — approved device list maintains compatibility and security baseline.'),
        sec('s8-6', 'Mobile Application Management (MAM)', 'MAM manages only the applications and corporate data on a device rather than the full device — better for BYOD where full device control is not acceptable. Creates a containerised corporate workspace on the device: corporate apps and data are encrypted and isolated from personal apps. Selective wipe removes only the corporate container when an employee leaves. UEM (Unified Endpoint Management) combines MDM + MAM + PC management in a single platform (Microsoft Intune, VMware Workspace ONE).'),
      ],
      flashcards: [
        fc('f8-4', 'MDM (Mobile Device Management)', 'Centralised management of mobile devices enforcing policies: screen lock, encryption, remote wipe, app control, and OS version compliance. Full control over corporate-owned or enrolled BYOD devices.'),
        fc('f8-5', 'BYOD (Bring Your Own Device)', 'A mobile deployment model where employees use personally-owned devices for work. Lowest cost, highest user acceptance, but lowest IT control. MAM is preferred over full MDM for privacy.'),
        fc('f8-6', 'Remote wipe', 'The ability to erase all data on a lost or stolen device remotely. Full wipe erases everything (including personal data). Selective wipe removes only corporate data — preferred for BYOD to protect personal content.'),
      ],
      knowledgeChecks: [
        kc('k8-3', 'A company allows employees to use personal iPhones for work email and calendar. They want to protect corporate data without monitoring personal apps or data. Which mobile management approach is MOST appropriate?', ['Full MDM enrollment with remote wipe capability', 'COPE deployment model', 'MAM with containerised corporate workspace', 'COBO policy for all employees'], 2, 'MAM (Mobile Application Management) creates an encrypted corporate container on the personal device — only corporate apps and data are managed. Personal apps and data are not monitored. Selective wipe removes only the corporate container. This balances security with employee privacy — appropriate for BYOD.', 'understand'),
        kc('k8-4', 'An employee\'s company-issued laptop is reported stolen. The MDM policy includes full remote wipe. What is the PRIMARY security concern that remote wipe addresses?', ['Performance degradation from lost hardware', 'Unauthorised access to corporate data on the stolen device', 'Violation of software licensing agreements', 'Inability to provision a replacement device'], 1, 'Remote wipe protects corporate data on the stolen device from unauthorised access. Without remote wipe, the attacker physically possesses the device and can attempt to bypass local authentication to access stored data, cached credentials, and offline email.', 'apply'),
      ],
      summary: ['BYOD = user device, lowest control. COPE = corporate device, full control. CYOD = user choice from approved list.', 'MDM = full device management. MAM = manage only corporate apps/data — preferred for BYOD privacy.', 'Selective wipe removes only corporate data (BYOD). Full wipe erases everything (appropriate for corporate-owned devices).'],
      examTip: 'BYOD security trade-off question pattern: "company wants to protect corporate data on employee personal phones WITHOUT monitoring personal usage." The answer is always MAM (containerisation) — not full MDM, not remote wipe of the entire device, not COPE.',
      examTip: 'BYOD gives users freedom but limits corporate control. COPE (Corporate-Owned, Personally Enabled) gives IT full control. MDM can enforce encryption, remote wipe, and screen lock. MAM manages only corporate apps, not the whole device.',
    },
    {
      id: 'ch8-hardening',
      title: 'System Hardening',
      learningObjectives: [
        lo('remember', 'Student can list hardening techniques: patch management, service disabling, default credential changes, configuration baselines.'),
        lo('understand', 'Student can explain the concept of reducing attack surface through hardening.'),
        lo('apply', 'Student can apply hardening guidelines (CIS Benchmarks) to a specific OS or application.'),
      ],
      sections: [
        sec('s8-7', 'Hardening Concepts and Attack Surface Reduction', 'System hardening reduces the attack surface by eliminating unnecessary features, services, and access paths. Core principles: disable all unnecessary services and ports (if a service is not needed, it should not be running), remove unnecessary software (every installed package is a potential vulnerability), change default credentials (default admin/admin is the first thing attackers try), apply the principle of least privilege (accounts and services should have minimum necessary permissions), enable logging for all security-relevant events.'),
        sec('s8-8', 'OS Hardening: Patch, Disable, Configure', 'Windows hardening: enable BitLocker (full disk encryption), disable SMBv1 (vulnerable to EternalBlue/WannaCry), enable Windows Defender Firewall, use AppLocker or Windows Defender Application Control, disable unnecessary services (Telnet, FTP, Remote Registry), enforce NTLMv2 or Kerberos, apply STIG or CIS Benchmark. Linux hardening: disable root SSH login, use SSH keys instead of passwords, enable SELinux/AppArmor, configure iptables/nftables, restrict sudo with sudoers, disable unnecessary services (avahi, cups, bluetooth if not needed).'),
        sec('s8-9', 'CIS Benchmarks and Security Baselines', 'CIS (Center for Internet Security) Benchmarks provide prescriptive OS-specific hardening guides — Windows, Linux, AWS, Docker, Kubernetes. Two levels: Level 1 (basic security, minimal operational impact) and Level 2 (defence-in-depth, may impact functionality). Security baselines define the minimum security configuration for a system type — all new deployments must meet the baseline before going live. Automated compliance tools (OpenSCAP, Ansible hardening roles) apply and verify baseline configurations at scale.'),
      ],
      flashcards: [
        fc('f8-7', 'CIS Benchmark', 'Prescriptive OS-specific hardening guidelines from the Center for Internet Security. Level 1 = basic security with minimal operational impact. Level 2 = defence-in-depth. Available for Windows, Linux, cloud platforms, containers.'),
        fc('f8-8', 'Security baseline', 'The minimum security configuration required before a system goes into production. All new deployments are measured against the baseline. Automated tools enforce and verify baseline compliance continuously.'),
        fc('f8-9', 'Default credentials', 'Factory-set usernames and passwords on devices and software (admin/admin, admin/password). Must be changed immediately on deployment — default credentials are publicly documented and the first thing attackers try.'),
      ],
      knowledgeChecks: [
        kc('k8-5', 'A new Windows server is being deployed to the DMZ. What is the FIRST hardening action to take?', ['Install antivirus software', 'Apply all available security patches', 'Disable unnecessary services and change default credentials', 'Enable full disk encryption'], 2, 'The very first hardening steps are to disable unnecessary services/ports and change default credentials — these are the most commonly exploited misconfigurations and require no additional tooling. Apply patches next (second priority), then add security tools. "Change defaults first" is the canonical hardening answer.', 'apply'),
        kc('k8-6', 'A vulnerability scan reveals a server is running SMBv1. The server is on an internal network with no internet access. What is the risk and appropriate response?', ['No risk — it is not internet-facing. No action needed', 'Low risk — SMBv1 should be disabled but it is not urgent', 'High risk — SMBv1 enabled EternalBlue/WannaCry ransomware spread internally. Disable immediately', 'SMBv1 is a detection tool — it should remain enabled for monitoring'], 2, 'SMBv1 was the vulnerability exploited by EternalBlue to enable WannaCry to spread laterally across internal networks. Internal-only does not mean safe — attackers who breach the perimeter use internal SMBv1 for ransomware propagation. Disable SMBv1 immediately on all Windows systems.', 'analyze'),
      ],
      summary: ['Hardening: disable unnecessary services, change default credentials, patch, apply least privilege, enable logging.', 'CIS Benchmarks provide OS-specific hardening checklists — Level 1 (basic) and Level 2 (defence-in-depth).', 'Disable SMBv1 on all Windows systems — it enabled WannaCry ransomware lateral spread.'],
      examTip: 'Hardening questions often ask for the FIRST or MOST important action. The answer hierarchy: (1) change default credentials, (2) disable unnecessary services and ports, (3) patch, (4) configure security settings. CompTIA treats credential hygiene as the most foundational hardening step.',
      examTip: 'First hardening step: change default credentials. Disable all unnecessary services and ports. Apply patches immediately for critical vulnerabilities. CIS Benchmarks provide OS-specific hardening checklists.',
    },
    {
      id: 'ch8-sdlc',
      title: 'Secure Software Development Lifecycle',
      learningObjectives: [
        lo('remember', 'Student can identify SDLC phases and where security activities belong in each phase.'),
        lo('understand', 'Student can explain SAST, DAST, and SCA and when each is used.'),
        lo('analyze', 'Student can analyze a development process to identify where security is missing.'),
      ],
      sections: [
        sec('s8-10', 'Secure SDLC Phases', 'Secure SDLC integrates security at every phase. Requirements: define security requirements alongside functional requirements. Design: threat modelling (STRIDE — Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege — identify threats to architecture). Implementation: secure coding standards, code review. Testing: SAST, DAST, penetration testing. Deployment: secure configuration, secrets management. Maintenance: vulnerability management, patch management, ongoing monitoring.'),
        sec('s8-11', 'SAST, DAST, and Software Composition Analysis', 'SAST (Static Application Security Testing): analyses source code or compiled binaries without executing — finds vulnerabilities in code before runtime. Run during development/CI pipeline. Can find: SQL injection patterns, hardcoded credentials, buffer overflow risks. DAST (Dynamic Application Security Testing): tests the running application by sending malicious inputs — finds runtime vulnerabilities. Run against test/staging environments. SCA (Software Composition Analysis): identifies known vulnerabilities in third-party libraries and dependencies (CVEs in npm packages, Maven dependencies).'),
        sec('s8-12', 'DevSecOps and Shift-Left Security', 'Shift-left: move security earlier in the SDLC — finding a bug in development costs 6x less than in testing and 100x less than in production. DevSecOps integrates security tools into CI/CD pipelines: SAST runs on every commit, SCA scans every dependency update, container image scanning on every build, secrets scanning before every push. Developer security training reduces vulnerabilities at the source — the cheapest fix is the one never written.'),
      ],
      flashcards: [
        fc('f8-10', 'SAST (Static Application Security Testing)', 'Analyses source code or compiled binaries without executing the application — finds security vulnerabilities during development. Run in CI pipelines. Cannot find runtime-only issues (requires DAST).'),
        fc('f8-11', 'DAST (Dynamic Application Security Testing)', 'Tests a running application by injecting malicious inputs and observing responses — finds runtime vulnerabilities. Run against test/staging environments. Cannot find source-code-only issues (requires SAST).'),
        fc('f8-12', 'Shift-left security', 'Moving security activities earlier in the SDLC — integrating security testing into development rather than adding it at the end. Finding vulnerabilities earlier dramatically reduces cost and risk.'),
      ],
      knowledgeChecks: [
        kc('k8-7', 'A development team wants to scan their application for SQL injection vulnerabilities in source code BEFORE the application is deployed to any environment. Which tool is MOST appropriate?', ['DAST tool targeting the staging environment', 'SAST tool integrated into the IDE or CI pipeline', 'Penetration testing engagement', 'SCA scanning of dependencies'], 1, 'SAST analyses source code without executing the application — it can find SQL injection patterns in code before the app is deployed anywhere. DAST requires a running application. Penetration testing is post-deployment. SCA analyses third-party libraries, not application code logic.', 'understand'),
        kc('k8-8', 'A security review finds that a web application uses a third-party logging library with a known critical vulnerability (similar to Log4Shell). The application code itself has no known vulnerabilities. Which tool would have detected this risk BEFORE deployment?', ['SAST — static analysis of application code', 'DAST — dynamic testing of the running application', 'SCA — software composition analysis of dependencies', 'Penetration test'], 2, 'SCA (Software Composition Analysis) specifically scans third-party libraries and dependencies against CVE databases. Log4Shell (CVE-2021-44228) is a vulnerability in the Log4j library — an SCA tool would identify that the project includes a vulnerable Log4j version. SAST analyses your code, not library code.', 'analyze'),
      ],
      summary: ['Secure SDLC: security at every phase — requirements, threat modelling, secure code, testing, secure deployment, monitoring.', 'SAST: static code analysis (no execution). DAST: dynamic testing (running app). SCA: third-party dependency CVEs.', 'Shift-left: security in development is 6-100x cheaper to fix than in production.'],
      examTip: 'SAST vs DAST timing: SAST = during development (code not yet running). DAST = after deployment to a test environment (app is running). They are complementary — use both. SCA is the third tool that addresses third-party library vulnerabilities like Log4Shell.',
      examTip: 'SAST = static analysis (source code, before runtime — finds issues early). DAST = dynamic analysis (running application — finds runtime issues). Shift-left means moving security earlier in SDLC (cheaper to fix bugs in development than production).',
    },
    {
      id: 'ch8-iot',
      title: 'IoT Security',
      learningObjectives: [
        lo('remember', 'Student can identify IoT security challenges: default credentials, limited patching, network exposure.'),
        lo('understand', 'Student can explain why IoT devices are high-value attack targets.'),
        lo('apply', 'Student can apply network segmentation to isolate IoT devices from critical systems.'),
      ],
      sections: [
        sec('s8-13', 'IoT Architecture and Vulnerabilities', 'IoT (Internet of Things) devices have limited compute resources and cannot run traditional security agents. Common vulnerabilities: default credentials (factory-set, often not changeable), irregular/no patch cycles (firmware rarely updated), insecure communications (plain HTTP, unencrypted telemetry), weak encryption (limited CPU for AES), and physical exposure (devices deployed in accessible locations). IoT devices are frequently compromised and used in botnets (Mirai botnet used IoT cameras and routers for DDoS).'),
        sec('s8-14', 'IoT Attack Vectors', 'IoT attack vectors: default credential brute force (most common), firmware extraction and reverse engineering, insecure update mechanisms (unsigned firmware — attacker pushes malicious firmware), physical tampering (JTAG/UART debug interfaces), side-channel attacks (power analysis, timing attacks on embedded crypto). ICS/SCADA (Industrial Control Systems/Supervisory Control and Data Acquisition): control physical processes in utilities, manufacturing, and healthcare. Attacks on ICS can cause physical harm — the Purdue Model provides a reference architecture with air-gapping between IT and OT networks.'),
        sec('s8-15', 'Securing IoT Deployments', 'IoT security controls: network segmentation (IoT VLAN separated from corporate network — even if a device is compromised, it cannot reach corporate systems), change default credentials (first action on any new device), disable unused services/ports (disable Telnet, unused APIs), firmware updates (enable automatic updates where available), inventory management (know what devices are deployed), monitoring (anomaly detection for unusual traffic volumes or destinations). OT security adds: air gaps between IT and OT, OT-specific IDS (Claroty, Dragos, Nozomi), and change control for all OT system modifications.'),
      ],
      flashcards: [
        fc('f8-13', 'IoT (Internet of Things)', 'Network-connected embedded devices with limited compute resources — cannot run traditional security agents. Common vulnerabilities: default credentials, no patches, insecure communications. Used in botnets (Mirai) for DDoS.'),
        fc('f8-14', 'Embedded system', 'A computer system with a dedicated function within a larger device — limited CPU, memory, and storage. Examples: industrial controllers, medical devices, smart cameras. Cannot run traditional endpoint security software.'),
        fc('f8-15', 'OT/ICS security', 'Security for Operational Technology (OT) and Industrial Control Systems (ICS/SCADA) that control physical processes. Attacks can cause physical harm. Mitigated by Purdue Model network segmentation, air gapping, and OT-specific monitoring tools.'),
      ],
      knowledgeChecks: [
        kc('k8-9', 'An organisation deploys 500 IP-connected security cameras. What is the MOST significant security risk if these cameras are not properly secured?', ['The cameras may record low-quality video', 'The cameras could be compromised and used as botnet nodes for DDoS attacks', 'The cameras will generate excessive network traffic', 'The cameras may miss recording events due to storage limits'], 1, 'Unsecured IoT cameras with default credentials are a classic botnet recruitment target — the Mirai botnet used millions of IoT cameras and routers for massive DDoS attacks. The risk is not just to the cameras themselves but to the internet infrastructure they can be weaponised against.', 'understand'),
        kc('k8-10', 'A hospital deploys medical IoT devices that transmit patient data over WiFi. The hospital wants to prevent a compromised IoT device from accessing the electronic health records (EHR) system. Which control is MOST effective?', ['Apply firmware updates to all IoT devices', 'Place all IoT devices in a dedicated VLAN with firewall rules preventing access to EHR systems', 'Require MFA for all IoT device management interfaces', 'Deploy EDR agents on all IoT devices'], 1, 'Network segmentation (dedicated IoT VLAN) with firewall rules prevents a compromised IoT device from reaching the EHR system even if fully compromised. This limits the blast radius. IoT devices cannot run EDR agents. MFA helps management plane security but does not prevent lateral movement from a compromised device. Firmware updates reduce vulnerabilities but cannot eliminate all risk.', 'apply'),
      ],
      summary: ['IoT risks: default credentials, no patch cycles, insecure comms, limited compute for security agents.', 'Network segmentation (IoT VLAN) is the primary IoT security control — contains blast radius of compromised devices.', 'OT/ICS security uses Purdue Model, air gaps, and OT-specific monitoring — attacks can cause physical harm.'],
      examTip: 'IoT security questions almost always have "network segmentation" as the best answer for containment. The secondary answer for device-level security is "change default credentials." Firmware updates are important but IoT devices often cannot be updated — segmentation protects even unpatched devices.',
      examTip: 'IoT devices rarely receive security patches and often ship with default credentials. Best practice: network segmentation (IoT VLAN), change default credentials, disable unnecessary services, and monitor traffic.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 9 — Security Operations (Domain 4, 28%) — TheHive labs
// ---------------------------------------------------------------------------

function hiveLab(id: string, title: string): LabExercise {
  return {
    id,
    title,
    objective: 'Use TheHive to manage a simulated security incident — create a case, add observables (IOCs), run analysers, and document response actions.',
    tool: 'TheHive',
    toolUrl: '',
    steps: [
      'Log in to TheHive and create a new case with the given incident title and severity.',
      'Add the provided indicators of compromise (IOCs) as observables — IP addresses, hashes, domain names.',
      'Run available analysers on the observables (Cortex integration if available).',
      'Add tasks to the case: Contain, Eradicate, Recover, and Post-incident review.',
      'Document findings and actions in task logs, marking each task complete.',
      'Review the completed case timeline and export the case summary.',
    ],
    expectedOutput: 'A completed TheHive case with all observables tagged, tasks marked complete, and a case timeline showing the full incident response workflow.',
    difficulty: 'hard',
  };
}

const mod9: Module = {
  id: 'mod9-security-operations',
  title: 'Module 9: Security Operations',
  description: 'Incident response process, digital forensics, SIEM, threat hunting, DLP, and security automation.',
  examWeight: 28,
  chapters: [
    {
      id: 'ch9-ir-process',
      title: 'Incident Response Process',
      learningObjectives: [
        lo('remember', 'Student can list the IR phases: preparation, detection, containment, eradication, recovery, lessons learned.'),
        lo('understand', 'Student can explain the purpose of each IR phase.'),
        lo('apply', 'Student can apply IR phases to sequence the correct response to an incident scenario.'),
        lo('analyze', 'Student can analyze an incident timeline and identify which phase was skipped or performed incorrectly.'),
      ],
      sections: [
        sec('s9-1', 'IR Phases: PICERL Framework', 'NIST SP 800-61 defines six IR phases: Preparation (IR plan, playbooks, tools, team training before any incident), Identification/Detection (determine whether an event is actually an incident — classify severity), Containment (stop further damage — short-term isolation vs long-term containment), Eradication (remove the threat — malware, backdoors, compromised accounts), Recovery (restore systems to production, verify normal operation, monitor for recurrence), Lessons Learned (post-incident review within 2 weeks — document what worked, what did not, update IR plan). Mnemonic: PICERL.'),
        sec('s9-2', 'Containment Strategies', 'Short-term containment: immediate isolation of affected systems — take offline, disconnect from network, block at firewall. This preserves evidence (memory, logs) while stopping spread. Long-term containment: temporary fix allowing business operations to continue while full eradication is prepared (e.g., patching a vulnerability without taking the system offline). Decisions: isolate vs monitor (monitoring reveals attacker TTPs but risks further damage). Preserve forensic evidence before containment changes the system state.'),
        sec('s9-3', 'Eradication, Recovery, and Lessons Learned', 'Eradication: remove all traces of the attacker — malware, persistence mechanisms (scheduled tasks, registry run keys, cron jobs, backdoors), compromised accounts, rogue certificates. Verify eradication before recovery. Recovery: restore from clean backups, rebuild compromised systems, reset all credentials, re-enable systems incrementally with monitoring. Lessons learned: analyse root cause, identify control gaps, update playbooks, provide targeted training. Timing: within 2 weeks while details are fresh.'),
        sec('s9-4', 'Lessons Learned and Post-Incident Review', 'The post-incident review (lessons learned meeting) should include all IR team members and stakeholders. Document: what happened, timeline of events, how it was detected, what worked, what did not, root cause analysis, and recommendations. Update the IR plan, detection rules (SIEM), playbooks, and training materials. Report to leadership with business impact, cost of response, and investment needed to prevent recurrence.'),
      ],
      flashcards: [
        fc('f9-1', 'Incident response', 'An organised approach to addressing and managing the aftermath of a security breach. NIST SP 800-61 defines six phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned (PICERL).'),
        fc('f9-2', 'Containment', 'The IR phase where spread of the incident is stopped — systems are isolated, network connections blocked, or credentials reset. Containment precedes eradication and preserves forensic evidence.'),
        fc('f9-3', 'Incident classification', 'Determining the type, scope, and severity of a security incident during the Identification phase. Categories include true positive (real incident), false positive (benign event flagged as incident), and false negative (real incident not detected).'),
      ],
      knowledgeChecks: [
        kc('k9-1', 'During incident response, a team discovers a ransomware infection. They immediately rebuild all affected servers from backup without capturing memory or log evidence. Which IR phase was skipped?', ['Preparation', 'Containment', 'Eradication', 'Recovery was performed before Eradication'], 1, 'The team went straight from Detection to Recovery (rebuild), skipping Containment (isolate affected systems to prevent spread) and proper Eradication (remove all persistence mechanisms). Without containment, the ransomware may spread to the backup systems being restored. Without complete eradication, the infection will likely recur.', 'apply'),
        kc('k9-2', 'A security analyst investigates an alert and determines that the event was caused by a legitimate administrator performing authorised maintenance. What is the correct classification?', ['True positive — incident confirmed, begin IR', 'False positive — no incident, close the alert', 'True negative — no attack and no alert', 'False negative — incident missed by detection'], 1, 'A false positive is an alert triggered by a legitimate, benign activity. The analyst investigated and determined no actual incident occurred — the alert should be closed, and the detection rule should be tuned to reduce future false positives from this legitimate activity.', 'analyze'),
      ],
      labExercise: hiveLab('lab9-1', 'Creating and Managing an Incident in TheHive'),
      summary: ['PICERL: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned (NIST SP 800-61).', 'Containment BEFORE eradication — stop the spread first, then remove the threat.', 'Lessons learned must be held within 2 weeks — update IR plan, playbooks, and detection rules from every incident.'],
      examTip: 'The most common IR sequencing trap: candidates want to jump to Eradication (removing malware) before Containment (stopping spread). The correct order is always Containment → Eradication → Recovery. Also: Preparation happens BEFORE any incident — it is not a reactive phase.',
      examTip: 'PICERL: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned. Containment comes before eradication — stop the bleeding before removing the cause. Never skip lessons learned.',
    },
    {
      id: 'ch9-forensics',
      title: 'Digital Forensics',
      learningObjectives: [
        lo('remember', 'Student can define digital forensics, chain of custody, order of volatility, and forensic imaging.'),
        lo('understand', 'Student can explain the order of volatility and why it matters for evidence collection.'),
        lo('apply', 'Student can apply forensic principles to plan evidence collection for a given scenario.'),
        lo('analyze', 'Student can analyze a forensic collection process to identify chain-of-custody violations.'),
      ],
      sections: [
        sec('s9-5', 'Forensic Principles and Chain of Custody', 'Digital forensics is the collection, preservation, analysis, and reporting of digital evidence for legal or investigative purposes. Core principles: preserve original evidence (work on forensic copies — never the original), maintain chain of custody (document every person who handled evidence, when, and why), write-protect media (hardware write blockers prevent modification of evidence drives). Chain of custody documentation: evidence tag, date/time collected, collected by, transfers, storage location, hash values before and after.'),
        sec('s9-6', 'Order of Volatility', 'Collect evidence in order of most to least volatile — data that disappears first must be collected first. Order: (1) CPU registers and cache (lost immediately on power off), (2) RAM/memory (lost on reboot — contains running processes, encryption keys, passwords in plaintext, network connections), (3) Swap/pagefile, (4) Hard disk / SSD (persists), (5) Remote logs and monitoring data, (6) Archival/backup media. RAM collection (memory forensics) with tools like Volatility reveals malware that exists only in memory.'),
        sec('s9-7', 'Forensic Imaging and Tools', 'Forensic imaging creates a bit-for-bit copy (image) of storage media — every bit is copied including deleted files and slack space. Tools: dd (Linux command-line), FTK Imager (Windows GUI), Autopsy (open-source analysis). Hash the original before imaging and the image after — compare hashes to verify integrity (no modification during imaging). Memory forensics: Volatility Framework analyses RAM images. Network forensics: Wireshark, tcpdump. Legal hold: organisation must preserve all potentially relevant data once litigation is anticipated.'),
      ],
      flashcards: [
        fc('f9-4', 'Order of volatility', 'The sequence for collecting digital evidence from most to least volatile. Order: CPU registers → RAM → swap/pagefile → disk → remote logs → backups. Collect most volatile first — RAM is lost on reboot.'),
        fc('f9-5', 'Forensic image', 'A bit-for-bit copy of storage media that includes deleted files and slack space. Hashed before and after to verify integrity. All analysis is performed on the copy — never the original evidence.'),
        fc('f9-6', 'Legal hold', 'A directive to preserve all potentially relevant data once litigation is anticipated. Suspends normal data retention/deletion schedules. Violations can result in spoliation sanctions in legal proceedings.'),
      ],
      knowledgeChecks: [
        kc('k9-3', 'A forensic investigator arrives at a scene where a suspect\'s workstation is running. What should the investigator collect FIRST?', ['Hard drive — it contains the most evidence', 'RAM/memory — it contains volatile data lost on shutdown', 'Network logs from the router', 'Backup tapes from the server room'], 1, 'RAM is the most volatile evidence — it is completely lost when the system is powered off. RAM may contain: running malware processes, encryption keys, plaintext passwords, network connection state, and recently accessed files. Hard drives and backups persist and can be collected later. RAM must be captured first.', 'apply'),
        kc('k9-4', 'A forensic investigator copies a suspect hard drive, analyses the copy, and then loans the original drive to a colleague without documenting the transfer. What forensic principle is violated?', ['Order of volatility', 'Chain of custody', 'Legal hold', 'Write protection'], 1, 'Chain of custody requires documenting every transfer, access, and handling of evidence. An undocumented transfer creates a gap in the chain — the defence can argue the evidence was tampered with during the undocumented period, potentially making the evidence inadmissible in legal proceedings.', 'analyze'),
      ],
      labExercise: hiveLab('lab9-2', 'Documenting Forensic Evidence in TheHive'),
      summary: ['Order of volatility: CPU → RAM → swap → disk → remote logs → backups. Collect most volatile first.', 'Forensic image = bit-for-bit copy. Hash before and after to verify integrity. Analyse the copy, never the original.', 'Chain of custody: document every person who touched evidence. Gaps make evidence inadmissible in court.'],
      examTip: 'Order of volatility is a top exam topic. Memorise the sequence: registers/cache → RAM → swap → disk → remote logs → backups. The exam will present a scenario and ask which data should be collected FIRST — always RAM (most volatile, lost on power off).',
      examTip: 'Order of volatility (most volatile first): CPU registers/cache → RAM → swap/pagefile → disk → remote logs → archive/backups. Collect most volatile evidence first before it disappears.',
    },
    {
      id: 'ch9-siem',
      title: 'SIEM and Log Management',
      learningObjectives: [
        lo('remember', 'Student can define SIEM, SOAR, log aggregation, and correlation rules.'),
        lo('understand', 'Student can explain how a SIEM correlates events to detect threats.'),
        lo('analyze', 'Student can analyze SIEM alert patterns to identify a multi-stage attack.'),
      ],
      sections: [
        sec('s9-8', 'SIEM Architecture and Components', 'SIEM (Security Information and Event Management) aggregates logs from multiple sources and correlates events to detect threats. Architecture: log collectors (agents or syslog forwarders on endpoints, firewalls, servers), central ingestion pipeline (parsing, normalisation, enrichment), indexed storage (searchable log database), correlation engine (applies rules to detect attack patterns), alerting (notifies analysts), and dashboards. Vendors: Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM.'),
        sec('s9-9', 'Log Sources and Normalization', 'Critical log sources: Windows Event Logs (authentication, process creation — Event ID 4625 failed login, 4688 process creation), Linux syslog/auditd, firewall logs (allow/deny with source/destination), IDS/IPS alerts, DNS logs (queries to malicious domains), web proxy logs (URLs accessed), EDR telemetry, cloud activity logs (CloudTrail, Azure Activity Log). Normalisation converts different log formats into a common schema (CEF — Common Event Format, or vendor-specific ECS). Enrichment adds context: IP geolocation, threat intelligence, user context.'),
        sec('s9-10', 'Correlation Rules and UEBA', 'Correlation rules detect multi-event attack patterns that individual log sources cannot see alone. Example rule: "user account authenticates from three different countries within 1 hour = impossible travel alert." UEBA (User and Entity Behaviour Analytics) establishes a behavioural baseline per user/entity and alerts on statistically significant deviations — detects insider threats and compromised accounts that do not match known attack signatures. SIEM + UEBA together provide both rule-based and behavioural detection.'),
      ],
      flashcards: [
        fc('f9-7', 'SIEM (Security Information and Event Management)', 'A platform that aggregates logs from multiple sources, normalises them, correlates events, and generates alerts for detected threats. Provides centralised visibility across the security environment.'),
        fc('f9-8', 'SOAR (Security Orchestration, Automation, and Response)', 'A platform that automates repetitive analyst tasks (alert triage, IOC enrichment, ticket creation) and orchestrates response playbooks. Reduces MTTD (Mean Time to Detect) and MTTR (Mean Time to Respond).'),
        fc('f9-9', 'UEBA (User and Entity Behaviour Analytics)', 'Machine learning-based detection that establishes behavioural baselines for users and entities, then alerts on statistically significant deviations. Detects insider threats and compromised accounts that evade rule-based detection.'),
      ],
      knowledgeChecks: [
        kc('k9-5', 'A SIEM correlation rule fires when the same user account attempts to login from New York and Tokyo within 30 minutes. What type of detection is this?', ['Signature-based detection of a known attack', 'Anomaly-based behavioural detection (impossible travel)', 'Vulnerability scanning alert', 'DLP policy violation'], 1, 'Impossible travel is an anomaly-based detection rule — the same account cannot physically be in two distant locations within a short time. This indicates either a compromised account (attacker in a different country) or credential sharing. SIEM correlation identifies this pattern by comparing login events across time and geolocation.', 'understand'),
        kc('k9-6', 'Which capability does SOAR add to SIEM that SIEM alone cannot provide?', ['Log aggregation from multiple sources', 'Automated response playbooks (alert enrichment, ticket creation, automated containment)', 'Correlation rules for detecting multi-stage attacks', 'Long-term log retention and search'], 1, 'SIEM detects and alerts — it is a detection and visibility platform. SOAR automates the RESPONSE to those alerts: enriching IOCs with threat intelligence, creating incident tickets, notifying the analyst, isolating endpoints, and blocking IPs automatically. SIEM provides the signal; SOAR automates the reaction.', 'analyze'),
      ],
      labExercise: hiveLab('lab9-3', 'Correlating Alerts and Creating Cases in TheHive'),
      summary: ['SIEM: aggregates and correlates logs from across the environment — rule-based threat detection and alerting.', 'SOAR: automates analyst response workflows — reduces MTTD and MTTR.', 'UEBA: behavioural baseline + deviation detection — catches insider threats and compromised accounts.'],
      examTip: 'SIEM vs SOAR: SIEM = detect + alert (reactive visibility). SOAR = automate + respond (workflow automation). They are complementary: SIEM generates alerts that SOAR responds to automatically. The exam will test whether you can identify which tool is appropriate for detection vs automated response.',
      examTip: 'SIEM aggregates and correlates logs (detection focus). SOAR adds orchestration and automated response (response focus). Together they close the loop: detect → investigate → respond. Know the difference for exam scenarios.',
    },
    {
      id: 'ch9-threat-hunting',
      title: 'Threat Hunting',
      learningObjectives: [
        lo('understand', 'Student can explain how threat hunting differs from reactive incident response.'),
        lo('apply', 'Student can apply threat hunting techniques using hypotheses based on threat intelligence.'),
        lo('analyze', 'Student can analyze endpoint and network data to identify signs of adversary presence.'),
      ],
      sections: [
        sec('s9-11', 'Threat Hunting Concepts', 'Threat hunting is the proactive, human-led search for threats that automated tools have not detected. Unlike incident response (triggered by an alert) or monitoring (alert-waiting), hunting assumes compromise has already occurred and actively looks for evidence. Goals: reduce dwell time (average time an attacker is present undetected — industry average is 21+ days), discover advanced persistent threats (APTs), improve detection capabilities by finding gaps in existing rules.'),
        sec('s9-12', 'Hypothesis-Driven Hunting', 'Hunting begins with a hypothesis: a specific, testable statement about attacker presence. Sources for hypotheses: threat intelligence (APT group is known to target your sector), MITRE ATT&CK technique (hunt for T1055 — Process Injection on all Windows endpoints), anomalies in logs (unusual process spawning PowerShell.exe from Word.exe), and security team intuition. Process: form hypothesis → collect relevant data → analyse for indicators → investigate findings → document results and update detections.'),
        sec('s9-13', 'Hunting Techniques and Data Sources', 'TTP-based hunting: search for specific MITRE ATT&CK techniques (hunt for encoded PowerShell commands = T1059.001, scheduled tasks = T1053, LSASS memory access = T1003). IOC-based hunting: search for known malicious hashes, IPs, domains in logs. Stack counting: count all instances of a value (e.g., all parent processes of cmd.exe) — rare values are suspicious. Data sources: EDR telemetry (process trees, network connections), SIEM logs (authentication, DNS), memory dumps. Tools: MITRE ATT&CK Navigator, Sigma rules, OSQuery.'),
      ],
      flashcards: [
        fc('f9-10', 'Threat hunting', 'Proactive, human-led search for threats not detected by automated tools. Assumes compromise has occurred and actively looks for evidence of attacker presence. Goal: reduce dwell time.'),
        fc('f9-11', 'Hypothesis-driven hunting', 'A structured threat hunting approach starting with a testable hypothesis (e.g., "attackers are using PowerShell for lateral movement") derived from threat intelligence or MITRE ATT&CK. Guides data collection and analysis.'),
        fc('f9-12', 'Dwell time', 'The time an attacker spends inside a network before detection. Industry average exceeds 21 days. Threat hunting specifically aims to reduce dwell time by proactively finding attackers before they achieve their objectives.'),
      ],
      knowledgeChecks: [
        kc('k9-7', 'What is the PRIMARY difference between threat hunting and traditional security monitoring?', ['Threat hunting uses more expensive tools', 'Threat hunting is proactive — it searches for threats without waiting for an alert to trigger', 'Traditional monitoring detects more threats than threat hunting', 'Threat hunting is only appropriate after a confirmed breach'], 1, 'Traditional monitoring waits for automated tools to generate alerts (reactive). Threat hunting is proactive — analysts actively search for evidence of attacker presence using hypotheses, even when no alert has fired. Hunting finds threats that automated tools miss, particularly advanced attackers who evade signature-based detection.', 'understand'),
        kc('k9-8', 'A threat hunter hypothesises that an APT group is using PowerShell for command-and-control based on recent threat intelligence. Which data source is MOST valuable for this hunt?', ['Network firewall logs', 'EDR telemetry showing process command-line arguments and parent-child process relationships', 'Email gateway logs', 'Physical access logs'], 1, 'EDR telemetry provides process-level visibility: which process spawned PowerShell, what command-line arguments were used, what network connections PowerShell made, and what files it accessed. This is exactly the data needed to detect malicious PowerShell usage. Firewall logs show network connections but not the process context.', 'apply'),
      ],
      labExercise: hiveLab('lab9-4', 'Threat Hunting Investigation in TheHive'),
      summary: ['Threat hunting is proactive — assumes compromise and actively searches. Monitoring is reactive (alert-driven).', 'Hypothesis sources: threat intelligence, MITRE ATT&CK, log anomalies. Process: hypothesise → hunt → analyse → respond.', 'Reducing dwell time is the primary goal — average is 21+ days. Earlier detection = less damage.'],
      examTip: 'Threat hunting and incident response are frequently confused. IR is REACTIVE — triggered by an alert or reported incident. Threat hunting is PROACTIVE — assumes the attacker is already present and looks for them without a prior alert. Hunting findings that confirm compromise then trigger the IR process.',
      examTip: 'Threat hunting is proactive — you assume adversaries are already inside and go looking. Unlike IR (triggered by an alert), hunting starts with a hypothesis. Reducing dwell time (attacker\'s time undetected) is the primary goal.',
    },
    {
      id: 'ch9-dlp',
      title: 'Data Loss Prevention',
      learningObjectives: [
        lo('remember', 'Student can define DLP and identify DLP deployment types: network, endpoint, cloud.'),
        lo('understand', 'Student can explain how DLP inspects and controls data in motion, at rest, and in use.'),
        lo('apply', 'Student can apply DLP policies to address a data exfiltration scenario.'),
      ],
      sections: [
        sec('s9-14', 'DLP Concepts: Data States and DLP Types', 'DLP (Data Loss Prevention) prevents unauthorised exfiltration of sensitive data. Three data states: data in motion (travelling across the network — email, web uploads, FTP), data at rest (stored on disk, in databases, in cloud storage), data in use (actively being processed — clipboard, screen capture, print). DLP deployment types: network DLP (inspects outbound network traffic), endpoint DLP (monitors file operations on the endpoint — USB copy, print, clipboard), cloud DLP (CASB monitors uploads to cloud services).'),
        sec('s9-15', 'DLP Policy Design', 'DLP policies define what data is sensitive and what actions are permitted. Data classification is the prerequisite — data must be classified before DLP can protect it. Detection methods: pattern matching (regex for SSN: \\d{3}-\\d{2}-\\d{4}, credit card: 16-digit Luhn), keywords (Confidential, HIPAA, PII), file properties (classified document headers), fingerprinting (exact match of sensitive document content). Actions: block (prevent transmission), quarantine (hold for review), alert (notify analyst and/or user), encrypt (force encryption before sending), log (record for audit).'),
        sec('s9-16', 'DLP Integration with CASB and SIEM', 'Network DLP inspects email attachments and web uploads — can block before data leaves the organisation. Endpoint DLP controls USB drives, printing, clipboard, and screen capture — prevents data exfiltration by insiders with physical access. CASB extends DLP to cloud services — inspects what users upload to SharePoint, OneDrive, Dropbox. SIEM correlates DLP alerts with other signals (after-hours access, large file access before DLP alert) to identify insider threat patterns. DLP does not replace data classification — it enforces it.'),
      ],
      flashcards: [
        fc('f9-13', 'DLP (Data Loss Prevention)', 'A security control that detects and prevents unauthorised exfiltration of sensitive data. Protects data in motion (network), at rest (storage), and in use (endpoint). Requires data classification as a prerequisite.'),
        fc('f9-14', 'Data in motion', 'Data actively travelling across a network — email, web uploads, FTP transfers. Monitored and controlled by network DLP, email security gateways, and web proxies.'),
        fc('f9-15', 'Data exfiltration', 'Unauthorised transfer of sensitive data from an organisation — whether by an insider (USB, email) or attacker (C2 channel, DNS tunnelling). DLP is the primary technical control; monitoring and access control reduce the opportunity.'),
      ],
      knowledgeChecks: [
        kc('k9-9', 'An employee emails a spreadsheet containing 50,000 credit card numbers to their personal Gmail account. Which DLP deployment would MOST effectively prevent this?', ['Endpoint DLP monitoring clipboard operations', 'Network DLP inspecting outbound email for PAN (Primary Account Number) patterns', 'Cloud DLP monitoring SharePoint uploads', 'Physical security preventing USB access'], 1, 'Network DLP inspects outbound email traffic for sensitive data patterns. Credit card numbers have a recognisable format (16 digits passing the Luhn algorithm) that DLP can detect and block before the email is delivered. Endpoint DLP controls local operations; this is a network-level email exfiltration.', 'understand'),
        kc('k9-10', 'Which prerequisite must be completed BEFORE deploying DLP controls?', ['Deploy SIEM for alert correlation', 'Classify all sensitive data so DLP policies can identify what to protect', 'Deploy endpoint agents on all workstations', 'Enable full SSL inspection on the network gateway'], 1, 'DLP cannot protect data it cannot identify. Data classification establishes what is sensitive (PII, PHI, financial data, intellectual property) and at what level — DLP policies then enforce handling rules based on classification. Without classification, DLP generates excessive false positives or misses sensitive data entirely.', 'apply'),
      ],
      labExercise: hiveLab('lab9-5', 'Investigating DLP Alert in TheHive'),
      summary: ['DLP data states: in motion (network), at rest (storage), in use (endpoint/clipboard).', 'DLP types: network (email/web), endpoint (USB/print/clipboard), cloud (CASB for SaaS uploads).', 'Data classification is required before DLP — DLP enforces classification labels, it does not create them.'],
      examTip: 'DLP requires data classification as a prerequisite — a common exam scenario asks what must be done BEFORE implementing DLP. The answer is always data classification. Without knowing what is sensitive, DLP cannot identify what to protect or generate meaningful policies.',
      examTip: 'DLP monitors three data states: in motion (network), at rest (storage), in use (endpoint/clipboard). Network DLP can inspect and block email/web uploads. Endpoint DLP controls USB and clipboard. CASB extends DLP to cloud.',
    },
    {
      id: 'ch9-automation',
      title: 'Security Automation and Orchestration',
      learningObjectives: [
        lo('remember', 'Student can define SOAR, playbook, and runbook.'),
        lo('understand', 'Student can explain how automation reduces MTTD and MTTR.'),
        lo('apply', 'Student can apply automation concepts to design a response playbook for a common incident type.'),
      ],
      sections: [
        sec('s9-17', 'SOAR Platforms and Capabilities', 'SOAR (Security Orchestration, Automation, and Response) connects security tools and automates analyst workflows. Capabilities: alert ingestion from SIEM/EDR, automated IOC enrichment (query VirusTotal for file hash reputation, query threat intel for IP geolocation), case management (create tickets automatically), automated containment (isolate endpoint via EDR API, block IP in firewall), notification (page analyst via PagerDuty), and reporting. Platforms: Splunk SOAR (Phantom), Palo Alto XSOAR, ServiceNow SecOps.'),
        sec('s9-18', 'Playbooks and Runbooks', 'A playbook is an automated, predefined response workflow for a specific incident type — executed by the SOAR platform. Example phishing playbook: receive alert → extract indicators (URL, sender IP, attachment hash) → query threat intel → quarantine email → block URL in proxy → notify user → escalate if payload found. A runbook is a manual, step-by-step procedure document — executed by a human analyst. Both serve as incident response guides: playbooks automate, runbooks document manual processes for situations automation cannot handle.'),
        sec('s9-19', 'Automation Use Cases and Limitations', 'Best automation use cases: high-volume, repetitive, well-understood tasks (phishing triage, IOC enrichment, user account lockout on impossible travel). Automation reduces MTTD (Mean Time to Detect — time from attack to detection) and MTTR (Mean Time to Respond — time from detection to containment). Limitations: automation cannot replace human judgment for novel incidents, complex business decisions, or situations requiring contextual understanding. Over-automation can cause outages (automated blocking of false positives). Require human approval for high-impact actions (account deletion, production system isolation).'),
      ],
      flashcards: [
        fc('f9-16', 'SOAR (Security Orchestration, Automation, and Response)', 'A platform connecting security tools and automating analyst response workflows. Executes playbooks in response to SIEM alerts — enriches IOCs, creates tickets, isolates endpoints, and notifies analysts automatically.'),
        fc('f9-17', 'Playbook', 'An automated, predefined response workflow for a specific incident type executed by a SOAR platform. Example: phishing playbook automatically extracts indicators, queries threat intel, quarantines email, and blocks malicious URLs.'),
        fc('f9-18', 'MTTD/MTTR', 'Mean Time to Detect (MTTD): average time from attack to detection. Mean Time to Respond (MTTR): average time from detection to containment. SOAR automation reduces both by eliminating manual steps in the alert triage and response process.'),
      ],
      knowledgeChecks: [
        kc('k9-11', 'A SOC receives 500 phishing alert per day. Analysts spend 10 minutes triaging each alert manually. Which technology would MOST reduce analyst time on phishing triage?', ['Deploy additional SIEM correlation rules', 'Implement SOAR with automated phishing playbook', 'Upgrade to a newer EDR platform', 'Add more SOC analysts'], 1, 'SOAR automates the repetitive steps of phishing triage: extract indicators, query threat intel, check sandbox, quarantine email, block URL. This reduces 10 minutes of manual work to seconds of automated processing. Adding analysts scales linearly with alert volume; SOAR scales without additional headcount.', 'understand'),
        kc('k9-12', 'An automated SOAR playbook blocks all network traffic from a flagged IP address. 30 minutes later, it is discovered the IP belongs to a critical business partner. What security principle was violated?', ['The playbook lacked proper logging', 'High-impact automated actions require human approval before execution', 'SOAR platforms should not integrate with firewalls', 'The SIEM correlation rule was incorrect'], 1, 'High-impact automated actions (blocking IPs, isolating systems, deleting accounts) should require human approval before execution — the business context cannot always be determined by automation. Low-impact actions (enrichment, quarantine, notify) can be fully automated. The principle: automate investigation, require approval for remediation.', 'apply'),
      ],
      labExercise: hiveLab('lab9-6', 'Building an Automated Response Workflow in TheHive'),
      summary: ['SOAR automates repetitive analyst tasks — alert enrichment, IOC lookup, ticket creation, endpoint isolation.', 'Playbooks = automated SOAR workflows. Runbooks = manual human procedure documents.', 'Automation reduces MTTD and MTTR. Require human approval for high-impact actions (production system changes).'],
      examTip: 'SOAR and SIEM together form the detection-to-response pipeline. SIEM = detection engine (generates alerts). SOAR = response engine (automates reaction to alerts). The exam will describe a scenario and ask whether SIEM or SOAR is the appropriate tool — SIEM for correlation/detection, SOAR for automated response.',
      examTip: 'SOAR automates repetitive analyst tasks (alert triage, IOC enrichment, ticket creation). Playbooks define the automated steps for specific incident types. Automation reduces MTTR (Mean Time to Respond) — a key security metric.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 10 — GRC (Domain 5, 20%)
// ---------------------------------------------------------------------------

const mod10: Module = {
  id: 'mod10-grc',
  title: 'Module 10: Governance, Risk, and Compliance',
  description: 'Risk management, compliance frameworks, security policies, privacy regulations, and BCDR.',
  examWeight: 20,
  chapters: [
    {
      id: 'ch10-risk-management',
      title: 'Risk Management',
      learningObjectives: [
        lo('remember', 'Student can define risk, threat, vulnerability, likelihood, impact, and residual risk.'),
        lo('understand', 'Student can explain the four risk responses: accept, avoid, transfer, mitigate.'),
        lo('analyze', 'Student can calculate risk using the formula Risk = Likelihood × Impact and prioritize a risk register.'),
      ],
      sections: [
        sec('s10-1', 'Risk Terminology and Components'),
        sec('s10-2', 'Risk Assessment and Quantitative vs Qualitative'),
        sec('s10-3', 'Risk Response Strategies'),
      ],
      flashcards: [
        fc('f10-1', 'Risk appetite', 'The amount of risk an organisation is willing to accept in pursuit of its objectives. Determines which risks are accepted vs mitigated.'),
        fc('f10-2', 'Residual risk', 'The risk that remains after applying controls. No control eliminates risk entirely — residual risk must be accepted or further mitigated.'),
        fc('f10-3', 'Risk transfer', 'Shifting financial liability for a risk to a third party — e.g., purchasing cyber insurance. The technical risk remains; only the financial impact is transferred.'),
      ],
      knowledgeChecks: [
        kc('k10-1', 'A company determines that patching a legacy system would cost $500k but the maximum loss from exploitation is $50k. Which risk response is MOST appropriate?', [
          'Mitigate — apply all available patches immediately',
          'Avoid — shut down the legacy system',
          'Accept — document the risk formally, as patching cost exceeds potential loss',
          'Transfer — purchase cyber insurance for the full $500k patching cost',
        ], 2, 'Risk acceptance is appropriate when the cost of mitigation exceeds the potential loss. The organisation formally accepts and documents the $50k risk. Transfer (insurance) covers loss after the fact but is a separate decision. Avoid would require shutting down the system.', 'understand'),
        kc('k10-2', 'Which metric is used in quantitative risk analysis to express the expected annual financial loss from a specific risk?', [
          'RTO (Recovery Time Objective)',
          'ALE (Annual Loss Expectancy)',
          'CVSS score',
          'RPO (Recovery Point Objective)',
        ], 1, 'ALE = SLE (Single Loss Expectancy) × ARO (Annual Rate of Occurrence). It expresses expected annual loss in dollars — the foundation of quantitative risk decisions. CVSS scores vulnerabilities but does not produce financial figures. RTO and RPO are recovery targets.', 'analyze'),
      ],
      summary: [
        'Risk = Likelihood × Impact. Quantitative uses dollars (ALE = SLE × ARO); qualitative uses High/Medium/Low ratings.',
        'Four risk responses: Avoid (eliminate the activity), Mitigate (reduce likelihood/impact), Transfer (insurance, contracts), Accept (document formally).',
        'Residual risk remains after controls — it must be accepted or further treated. Formal acceptance requires management sign-off.',
      ],
      examTip: 'Risk transfer (buying cyber insurance) does not eliminate risk — it shifts financial liability. Residual risk is what remains after applying controls. Risk acceptance must be formally documented by management.',
    },
    {
      id: 'ch10-compliance',
      title: 'Compliance Frameworks',
      learningObjectives: [
        lo('remember', 'Student can identify major compliance frameworks: PCI DSS, HIPAA, GDPR, SOC 2, ISO 27001, NIST CSF.'),
        lo('understand', 'Student can explain what each framework requires and who it applies to.'),
        lo('analyze', 'Student can analyze a business scenario to determine which compliance framework applies.'),
      ],
      sections: [
        sec('s10-4', 'PCI DSS and Payment Card Security'),
        sec('s10-5', 'HIPAA and Healthcare Security'),
        sec('s10-6', 'GDPR, ISO 27001, and NIST CSF'),
      ],
      flashcards: [
        fc('f10-4', 'PCI DSS', 'Payment Card Industry Data Security Standard — mandatory framework for any organisation that stores, processes, or transmits payment card data. Requires network segmentation, strong access control, encryption, and quarterly vulnerability scans.'),
        fc('f10-5', 'HIPAA', 'Health Insurance Portability and Accountability Act — US federal law protecting PHI (Protected Health Information). Security Rule requires administrative, physical, and technical safeguards. Privacy Rule controls who can access PHI.'),
        fc('f10-6', 'NIST CSF', 'NIST Cybersecurity Framework — voluntary, risk-based framework with five functions: Identify, Protect, Detect, Respond, Recover. Widely adopted across industries and forms the basis of many organisational security programmes.'),
      ],
      knowledgeChecks: [
        kc('k10-3', 'An e-commerce company processes Visa and Mastercard payments and stores cardholder names and card numbers in its database. Which compliance framework is MOST directly applicable?', ['HIPAA', 'GDPR', 'NIST CSF', 'PCI DSS'], 3, 'PCI DSS applies to any entity that stores, processes, or transmits payment card data. HIPAA covers healthcare data, GDPR covers EU personal data broadly, and NIST CSF is voluntary — PCI DSS is the mandatory standard for payment cards.', 'analyze'),
        kc('k10-4', 'Under GDPR, a data subject requests deletion of all personal data held about them. The organisation determines it must retain some data for a legal obligation. Which principle allows this exception?', ['Data minimisation', 'Purpose limitation', 'Right to erasure', 'Lawful basis for processing'], 3, 'The right to erasure (right to be forgotten) is not absolute — GDPR Article 17 permits retention where processing is necessary for legal obligations. The lawful basis for processing overrides the erasure request in that specific context.', 'understand'),
      ],
      summary: [
        'PCI DSS is mandatory for payment card data; requires encryption, segmentation, access control, and quarterly scans. Non-compliance risks fines and loss of ability to process cards.',
        'HIPAA protects US healthcare PHI through administrative, physical, and technical safeguards. Breaches affecting 500+ individuals must be reported to HHS and the media.',
        'NIST CSF (Identify, Protect, Detect, Respond, Recover) is voluntary but widely referenced. GDPR applies globally to EU resident data and requires explicit consent, breach notification within 72 hours, and data subject rights.',
      ],
      examTip: 'PCI DSS = payment card data. HIPAA = US healthcare data. GDPR = EU personal data (applies to any organization processing EU resident data). NIST CSF is voluntary but widely used. Know which framework is mandatory vs voluntary.',
    },
    {
      id: 'ch10-policies',
      title: 'Security Policies and Procedures',
      learningObjectives: [
        lo('remember', 'Student can define AUP, data classification policy, password policy, and change management policy.'),
        lo('understand', 'Student can explain the hierarchy: policy → standard → guideline → procedure.'),
        lo('apply', 'Student can apply policy concepts to identify which policy is violated in a given scenario.'),
      ],
      sections: [
        sec('s10-7', 'Policy Hierarchy: Policy, Standard, Guideline, Procedure'),
        sec('s10-8', 'Acceptable Use Policy and Data Classification'),
        sec('s10-9', 'Change Management and Configuration Policy'),
      ],
      flashcards: [
        fc('f10-7', 'AUP', 'Acceptable Use Policy — a document that defines the permitted uses of an organisation\'s IT resources, including internet, email, and device usage. Violations can result in disciplinary action or termination. Often the first policy employees sign.'),
        fc('f10-8', 'Data classification', 'Scheme for labelling data by sensitivity: Public, Internal, Confidential, Restricted (or similar). Drives access control, encryption, and handling decisions. Government uses Unclassified, CUI, Secret, Top Secret.'),
        fc('f10-9', 'Change management', 'Formal process to request, review, approve, implement, and document changes to IT systems. Prevents unauthorised or uncoordinated changes that could introduce vulnerabilities or downtime. Includes CAB (Change Advisory Board) review.'),
      ],
      knowledgeChecks: [
        kc('k10-5', 'A security administrator is creating a document that specifies minimum password length, complexity, and rotation period. Which level of the policy hierarchy BEST describes this document?', ['Policy', 'Standard', 'Guideline', 'Procedure'], 1, 'A standard defines specific, measurable, mandatory requirements that implement a policy. Password length and complexity numbers are specific requirements — that is a standard. A policy states intent (e.g., "passwords must be strong"); a guideline is a recommendation; a procedure is step-by-step.', 'understand'),
        kc('k10-6', 'An employee installs unapproved software on a company laptop to increase personal productivity. Which policy has MOST likely been violated?', ['Data classification policy', 'Acceptable Use Policy', 'Change management policy', 'Password policy'], 1, 'The Acceptable Use Policy (AUP) defines what employees may and may not do with company IT resources, including software installation. Installing unapproved software violates the AUP. Change management covers system-level changes; data classification covers data labelling; password policy covers authentication.', 'apply'),
      ],
      summary: [
        'Policy hierarchy (top to bottom): Policy (mandatory intent) → Standard (mandatory specifics) → Guideline (recommended) → Procedure (step-by-step). Security+ tests whether you can place a document at the right level.',
        'AUP defines permitted use of IT resources. All employees must sign it. Violations are typically a disciplinary matter. It covers internet, email, social media, BYOD, and software installation.',
        'Change management prevents uncoordinated changes via a formal request → review → approval → implement → document cycle. Emergency changes may skip CAB but still require post-implementation review.',
      ],
      examTip: 'Policies are mandatory and set direction. Standards are mandatory and define specific requirements. Guidelines are recommendations. Procedures are step-by-step instructions. Security+ often tests whether you can identify the right level.',
    },
    {
      id: 'ch10-privacy',
      title: 'Privacy and Data Protection',
      learningObjectives: [
        lo('remember', 'Student can define PII, PHI, data sovereignty, data residency, and privacy by design.'),
        lo('understand', 'Student can explain data minimization and purpose limitation principles.'),
        lo('apply', 'Student can apply privacy principles to evaluate a data handling practice.'),
      ],
      sections: [
        sec('s10-10', 'PII and PHI: Classification and Protection'),
        sec('s10-11', 'Data Sovereignty and Residency'),
        sec('s10-12', 'Privacy by Design'),
      ],
      flashcards: [
        fc('f10-10', 'PII', 'Personally Identifiable Information — any data that can identify an individual, alone or combined. Examples: name + address, SSN, email, biometrics, IP address. PHI is PII in a healthcare context. Both require strict protection under HIPAA, GDPR, and other regulations.'),
        fc('f10-11', 'Data minimisation', 'GDPR principle requiring organisations to collect only the minimum personal data necessary for the specified purpose. Reduces attack surface: less data stored = less data exposed in a breach. Pair with purpose limitation — use data only for the stated reason.'),
        fc('f10-12', 'Privacy by design', 'Proactive approach embedding privacy controls into systems from inception, not as an afterthought. Seven principles include: proactive not reactive, privacy as default, privacy embedded into design. Required by GDPR for new systems processing personal data.'),
      ],
      knowledgeChecks: [
        kc('k10-7', 'Which of the following is MOST likely to be classified as PII?', ['An employee badge number used only internally', 'A customer\'s name combined with their home address', 'Anonymised aggregate website traffic statistics', 'Encrypted database records with no decryption key available'], 1, 'PII is data that can identify an individual. A name combined with a home address directly identifies a person. A badge number used only internally may not identify externally. Anonymised aggregates are not PII by definition. Encrypted records without a key are practically non-identifiable.', 'remember'),
        kc('k10-8', 'A developer is building a marketing analytics platform that collects user location data to serve local ads. Under privacy by design, which action is MOST appropriate?', ['Collect precise GPS coordinates and retain indefinitely for future analytics', 'Collect full location history and encrypt it at rest', 'Collect only the city-level location required for ad targeting and delete after 30 days', 'Disclose the location data collection in the privacy policy and proceed as planned'], 2, 'Privacy by design requires collecting only what is necessary (data minimisation) and for only as long as needed (storage limitation). City-level precision is sufficient for local ads — precise GPS is excessive. Encryption helps but does not reduce scope. Disclosure alone is insufficient; privacy must be built in.', 'apply'),
      ],
      summary: [
        'PII identifies individuals directly (name, SSN, email) or in combination. PHI is PII in healthcare. Breach notification timelines differ by regulation: GDPR 72 hours, HIPAA 60 days for breaches affecting 500+.',
        'Data minimisation: collect only what you need. Purpose limitation: use it only for the stated reason. Storage limitation: delete it when no longer needed. These three GDPR principles work together.',
        'Privacy by design means building privacy in from day one. For Security+, remember: privacy controls are proactive, privacy is the default state, and privacy is embedded — not bolted on afterwards.',
      ],
      examTip: 'Data minimization = collect only what you need. Purpose limitation = use data only for the stated purpose. Privacy by design = build privacy in from the start, not as an afterthought. These are core GDPR principles.',
    },
    {
      id: 'ch10-bcdr',
      title: 'Business Continuity and Disaster Recovery',
      learningObjectives: [
        lo('remember', 'Student can define BCP, DRP, RTO, RPO, MTTR, and MTBF.'),
        lo('understand', 'Student can explain the difference between BCP (keeping operations going) and DRP (recovering from disaster).'),
        lo('analyze', 'Student can analyze a BCDR scenario to calculate whether RTO and RPO targets are met.'),
      ],
      sections: [
        sec('s10-13', 'BCP and DRP Concepts'),
        sec('s10-14', 'RTO, RPO, MTTR, and MTBF'),
        sec('s10-15', 'Backup Strategies: Hot, Warm, Cold Sites'),
      ],
      flashcards: [
        fc('f10-13', 'RTO', 'Recovery Time Objective — the maximum acceptable time to restore a system or service after a disruption. Example: RTO of 4 hours means the system must be operational within 4 hours. Drives backup strategy and site selection (hot vs warm vs cold).'),
        fc('f10-14', 'RPO', 'Recovery Point Objective — the maximum acceptable amount of data loss measured in time. Example: RPO of 1 hour means backups must occur at least hourly; up to 1 hour of data loss is acceptable. Drives backup frequency decisions.'),
        fc('f10-15', 'Hot site', 'A fully equipped, fully operational alternate data centre that mirrors the primary site in near-real-time. Enables fastest recovery (minutes to hours) but is the most expensive option. Contrast: warm site (equipment ready, data not current) and cold site (space only, cheapest, slowest).'),
      ],
      knowledgeChecks: [
        kc('k10-9', 'An organisation experiences a server failure at 3:00 PM. Backups run every 6 hours, with the last backup completed at 12:00 PM. The system is restored and operational at 6:00 PM. Which statement correctly evaluates the organisation\'s RTO and RPO performance?', ['RTO = 3 hours, RPO = 6 hours; both met if targets are 4 hours and 8 hours respectively', 'RTO = 3 hours, RPO = 3 hours; both met if targets are 4 hours and 8 hours respectively', 'RTO = 6 hours, RPO = 3 hours; RTO violated if target is 4 hours', 'RTO = 3 hours, RPO = 3 hours; RPO violated if target is 2 hours'], 3, 'RTO = time from failure to recovery = 6:00 PM − 3:00 PM = 3 hours. RPO = data loss window = time from last backup to failure = 3:00 PM − 12:00 PM = 3 hours. If the RPO target is 2 hours, losing 3 hours of data violates it. If RTO target is 4 hours, 3 hours of downtime meets it.', 'understand'),
        kc('k10-10', 'A financial services firm requires its trading systems to be recoverable within 15 minutes of failure with no more than 5 minutes of data loss. Which disaster recovery solution BEST meets these requirements?', ['Cold site with weekly tape backups', 'Warm site with daily incremental backups', 'Hot site with continuous synchronous replication', 'Cloud backup with 4-hour restore SLA'], 2, 'A 15-minute RTO and 5-minute RPO require near-instant failover and near-real-time data synchronisation. A hot site with synchronous replication meets both. Cold sites take days; warm sites take hours; cloud backup with a 4-hour SLA far exceeds the 15-minute RTO.', 'analyze'),
      ],
      summary: [
        'RTO = how long the system can be down. RPO = how much data can be lost (in time). Calculate both from the scenario: RTO = restore time − failure time; RPO = failure time − last backup time.',
        'Site recovery options by cost/speed: Hot site (most expensive, minutes), Warm site (moderate, hours), Cold site (cheapest, days). Match site type to RTO target.',
        'MTTR (Mean Time To Repair) = average repair time. MTBF (Mean Time Between Failures) = average uptime between failures. Higher MTBF and lower MTTR = higher availability.',
      ],
      examTip: 'RTO = how long until systems must be back up. RPO = how much data loss is acceptable (measured in time). Hot site has all equipment running — most expensive but fastest recovery. Cold site is cheapest but slowest.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Module 11 — Exam Prep
// ---------------------------------------------------------------------------

const mod11: Module = {
  id: 'mod11-exam-prep',
  title: 'Module 11: Exam Preparation',
  description: 'Domain-by-domain review, performance-based question strategies, full mock exam, and common exam traps.',
  chapters: [
    {
      id: 'ch11-domain-review',
      title: 'Domain Review',
      learningObjectives: [
        lo('remember', 'Student can recall key terms and concepts from all five Security+ SY0-701 domains.'),
        lo('understand', 'Student can explain the relationships between domains and how topics interconnect.'),
      ],
      sections: [
        sec('s11-1', 'Domain 1 Review: General Security Concepts'),
        sec('s11-2', 'Domain 2 Review: Threats, Vulnerabilities, and Mitigations'),
        sec('s11-3', 'Domain 3 Review: Security Architecture'),
        sec('s11-4', 'Domain 4 Review: Security Operations'),
        sec('s11-5', 'Domain 5 Review: Security Program Management and Oversight'),
      ],
      flashcards: [
        fc('f11-1', 'Domain 1 key theme', 'Domain 1 — General Security Concepts (12%): Covers foundational terminology, security controls (technical/managerial/operational/physical), cryptography basics, authentication, and PKI. The vocabulary domain — know every term cold.'),
        fc('f11-2', 'Domain 2 key theme', 'Domain 2 — Threats, Vulnerabilities, and Mitigations (22%): Malware types, social engineering, application attacks (injection, XSS, buffer overflow), network attacks (DoS, MitM), threat intelligence, and vulnerability scanning. High weight — expect scenario questions.'),
        fc('f11-3', 'Domain 5 key theme', 'Domain 5 — Security Program Management and Oversight (20%): GRC, risk management, compliance frameworks (PCI DSS, HIPAA, GDPR), data privacy, security policies, BCDR, and third-party risk. Conceptual — scenario questions test which framework or policy applies.'),
      ],
      knowledgeChecks: [
        kc('k11-1', 'Which Security+ SY0-701 domain has the HIGHEST exam weight?', ['Domain 1 — General Security Concepts', 'Domain 2 — Threats, Vulnerabilities, and Mitigations', 'Domain 3 — Security Architecture', 'Domain 4 — Security Operations'], 3, 'Domain 4 (Security Operations) carries 28% of the exam — the highest of all five domains. Domain 2 is second at 22%. Prioritise Domain 4 if pressed for study time.', 'remember'),
        kc('k11-2', 'A company detects malware exfiltrating data via encrypted HTTPS traffic, evading the perimeter firewall. An analyst correlates logs and applies threat intelligence to identify the C2 server. Which TWO domains are MOST directly tested by this scenario?', ['Domain 1 and Domain 3', 'Domain 2 and Domain 4', 'Domain 3 and Domain 5', 'Domain 1 and Domain 5'], 1, 'Malware, C2 communication, and threat intelligence are Domain 2 (Threats, Vulnerabilities, Mitigations) topics. Log correlation, incident response, and security monitoring are Domain 4 (Security Operations) topics. This scenario tests cross-domain integration — common in Security+ scenario questions.', 'understand'),
      ],
      summary: [
        'Five domains: D1 General Concepts (12%), D2 Threats & Vulns (22%), D3 Architecture (18%), D4 Operations (28%), D5 Program Management (20%). D4 > D2 > D5 by weight.',
        'Domain questions are scenario-heavy. Read carefully for clue words: "MOST likely", "BEST", "FIRST". These signal the need to pick the most complete or prioritised answer, not just any correct one.',
        'Cross-domain questions are common. A single scenario may test threat knowledge (D2) + incident response (D4) + risk management (D5). Build connections between domains as you study.',
      ],
      examTip: 'The highest-weighted domain is Domain 4 (Security Operations) at 28%. If short on study time, prioritize Domain 4 then Domain 2 (Threats, 22%) for the best ROI on exam score.',
    },
    {
      id: 'ch11-pbqs',
      title: 'Performance-Based Questions',
      learningObjectives: [
        lo('understand', 'Student can explain the types of PBQs: drag-and-drop, simulations, command-line, network diagrams.'),
        lo('apply', 'Student can apply a time-management strategy for PBQs during the exam.'),
      ],
      sections: [
        sec('s11-6', 'PBQ Types and Formats'),
        sec('s11-7', 'PBQ Strategy: Flag and Return'),
        sec('s11-8', 'Common PBQ Scenarios'),
      ],
      flashcards: [
        fc('f11-4', 'Performance-based question', 'PBQ — a non-multiple-choice exam item requiring hands-on interaction. Types include drag-and-drop, simulations, fill-in-the-blank, and network diagram tasks. PBQs appear at the beginning of the exam. They test applied knowledge rather than memorisation.'),
        fc('f11-5', 'Drag-and-drop question type', 'A PBQ format where candidates drag terms, controls, or labels to match categories, network diagrams, or process flows. Example: drag firewall, IDS, WAF to correct positions in a network topology. Tests conceptual placement and understanding of tool roles.'),
        fc('f11-6', 'Simulation PBQ', 'A PBQ that simulates a real tool interface — e.g., a command-line terminal, firewall rule editor, or SIEM dashboard. Candidates must perform tasks such as configuring ACLs, running nmap, or analysing log entries. Partial credit is usually awarded.'),
      ],
      knowledgeChecks: [
        kc('k11-3', 'A candidate encounters a complex PBQ simulation at the start of the Security+ exam and is unsure how to proceed. What is the BEST time-management strategy?', ['Flag the PBQ and skip it, returning with remaining time after completing all multiple-choice questions', 'Spend as much time as needed on the PBQ before moving on, as it is worth more points', 'Skip the PBQ entirely and do not return — multiple-choice questions carry more total weight', 'Answer the PBQ partially, submit, and move on without flagging'], 0, 'The recommended strategy is to flag difficult PBQs and skip them initially, completing multiple-choice questions first. Return to PBQs with remaining time. PBQs do not necessarily carry more points per item, and spending 20 minutes on one PBQ risks running out of time on easier multiple-choice items.', 'apply'),
        kc('k11-4', 'Which of the following BEST describes a drag-and-drop PBQ format?', ['A question requiring the candidate to type a command in a simulated terminal', 'A question requiring the candidate to configure a firewall rule in a graphical interface', 'A question requiring the candidate to match terms or objects to correct categories or positions', 'A question requiring the candidate to analyse a packet capture and identify an attack'], 2, 'Drag-and-drop PBQs require matching — dragging items to categories, positions in a diagram, or sequence steps. Terminal simulation is a command-line PBQ. Configuring a firewall is a simulation PBQ. Analysing a packet capture is typically a scenario-based multiple-choice or simulation PBQ.', 'understand'),
      ],
      summary: [
        'PBQ types: drag-and-drop (match/sort), simulation (tool interface), fill-in-blank, diagram (place components). All appear at exam start. Most offer partial credit — always attempt.',
        'Strategy: flag PBQs early, complete all multiple-choice questions, return to PBQs with remaining time. Do not let one hard PBQ consume disproportionate time.',
        'Partial credit on PBQs means every correct element placed or configured earns something. Never leave a PBQ completely blank — even a partially correct answer beats zero.',
      ],
      examTip: 'PBQs appear first in the exam but skip them initially if they\'re taking too long. Come back with remaining time. Many PBQs have partial credit — always attempt an answer, never leave blank.',
    },
    {
      id: 'ch11-common-traps',
      title: 'Common Exam Traps and Tricky Topics',
      learningObjectives: [
        lo('analyze', 'Student can analyze commonly missed Security+ question patterns and identify the distractor strategies used.'),
        lo('apply', 'Student can apply elimination techniques to select the best answer on ambiguous questions.'),
      ],
      sections: [
        sec('s11-9', 'Commonly Confused Terms'),
        sec('s11-10', 'Distractor Strategies and How to Spot Them'),
        sec('s11-11', 'Process of Elimination for Ambiguous Questions'),
      ],
      flashcards: [
        fc('f11-7', 'Distractor answer', 'A plausible but incorrect answer choice designed to mislead. Distractors often use related terms, partially correct facts, or common misconceptions. Example: offering "symmetric encryption" as a distractor when the question asks about key exchange (asymmetric). Spot distractors by reading every option carefully before choosing.'),
        fc('f11-8', 'Elimination technique', 'Test-taking strategy: eliminate clearly wrong answers first, then choose from remaining options. Reduces a 4-option question to 2 options if two can be eliminated — flips guessing odds from 25% to 50%. Most effective when combined with reading the question stem carefully to identify the key requirement.'),
        fc('f11-9', '"Best answer" principle', 'CompTIA questions often have multiple technically correct answers but require the BEST or MOST appropriate one. The best answer is usually the one that most completely addresses the scenario. When two answers seem correct, pick the broader, more complete, or more preventive option.'),
      ],
      knowledgeChecks: [
        kc('k11-5', 'A Security+ question asks: "Which protocol provides BOTH authentication AND encryption for remote access?" A candidate is deciding between SSH and HTTPS. Which reasoning BEST applies the best-answer principle?', ['Choose HTTPS because it is more widely deployed', 'Choose SSH because the question specifies remote access CLI management, making SSH the more specific and complete answer', 'Choose either — both are equally correct for this question', 'Choose HTTPS because TLS provides stronger encryption than SSH'], 1, 'The best-answer principle requires selecting the most complete answer for the specific scenario. Remote access CLI management is SSH\'s primary use case; HTTPS is used for web traffic. Both provide auth + encryption, but SSH is the more precise answer for remote access management. Completeness and specificity win over general correctness.', 'analyze'),
        kc('k11-6', 'A candidate sees a question with four options. Option A mentions "IDS", option B mentions "IPS", options C and D mention unrelated controls. The candidate knows IDS detects but does not prevent. The question asks which control would PREVENT the attack. Which elimination approach is MOST effective?', ['Eliminate C and D first (unrelated), then eliminate A (detection only, not prevention) — answer is B', 'Eliminate A first because IDS is older technology', 'Eliminate B because IPS is more complex to configure', 'Choose A because detection is the first step before prevention'], 0, 'Effective elimination: remove clearly unrelated options first (C, D), then use domain knowledge to eliminate A (IDS detects but does not prevent). This leaves B (IPS), which actively blocks — matching "PREVENT" in the question stem. Always key on action words in the question: prevent, detect, respond, correct.', 'apply'),
      ],
      summary: [
        'Distractors exploit related-but-wrong terms (IDS vs IPS), partial correctness, and common confusions. Slow down and re-read the question stem before selecting — the stem usually contains the key discriminator.',
        'Elimination: cross out clearly wrong answers first. Two eliminations convert 25% guessing odds to 50%. Never choose an answer you cannot connect to the question stem.',
        '"Best answer" beats "correct answer" on CompTIA exams. When two options are both true, the best answer is more complete, more specific to the scenario, or more preventive in scope.',
      ],
      examTip: 'When two answers look correct, pick the one that is broader in scope or more complete. CompTIA favors "best" answers — a technically correct answer that doesn\'t fully address the scenario is still wrong.',
    },
    {
      id: 'ch11-mock-exam',
      title: 'Full Mock Exam',
      learningObjectives: [
        lo('apply', 'Student can complete a timed 90-question mock exam under simulated conditions.'),
        lo('analyze', 'Student can analyze mock exam results to identify remaining weak areas before the real exam.'),
      ],
      sections: [
        sec('s11-12', 'Mock Exam Instructions and Timing'),
        sec('s11-13', 'Post-Exam Score Analysis'),
        sec('s11-14', 'Final Review Based on Mock Results'),
      ],
      flashcards: [
        fc('f11-10', 'Timed exam simulation', 'A practice exam taken under real exam conditions: 90 questions, 90 minutes, no notes, no pausing. Builds time management skills (60 seconds per question average) and identifies weak areas under pressure. Score above 750/900 consistently before scheduling the real exam.'),
        fc('f11-11', 'Score analysis', 'Post-exam review of results by domain to identify weak areas. Do not just note which questions were wrong — understand WHY. Was it a knowledge gap, misread question, or distractor confusion? Each error type requires a different remediation strategy.'),
        fc('f11-12', 'Weak domain identification', 'Using mock exam domain scores to prioritise remaining study time. If Domain 4 (Operations, 28% of exam) is below 70%, it deserves more study time than a domain scored at 85%. Weight your remediation effort proportionally to both your score gap and the domain\'s exam weight.'),
      ],
      knowledgeChecks: [
        kc('k11-7', 'Which mock exam practice approach BEST prepares a candidate for the real Security+ exam?', ['Complete multiple 20-question topic quizzes spread across several days', 'Take one full 90-question timed mock exam in a single uninterrupted sitting', 'Review flashcards for 2 hours the day before the exam', 'Read through exam objectives one final time without taking a practice test'], 1, 'A full 90-question timed mock in a single sitting most closely simulates real exam conditions, building stamina, time management, and identifying weak areas. Topic quizzes test knowledge in isolation but do not simulate the full exam experience. Last-minute review without practice testing is less effective for identifying gaps.', 'apply'),
        kc('k11-8', 'A candidate scores 680/900 on a mock exam. Domain 4 (Security Operations) scores 55% while Domain 1 (General Concepts) scores 90%. How should the candidate BEST prioritise remaining study time?', ['Spend equal time on all domains to ensure balanced coverage', 'Focus primarily on Domain 1 to maintain the high score already achieved', 'Prioritise Domain 4 heavily, given its high exam weight (28%) and low score (55%)', 'Skip further study — 680/900 is close enough to the 750/900 passing score'], 2, 'Domain 4 at 55% is significantly below the passing threshold AND carries the highest exam weight (28%). Improving a weak high-weight domain yields the greatest score improvement. Domain 1 at 90% already exceeds the threshold — marginal study time there has diminishing returns. 680 < 750 passing score, so more study is needed.', 'analyze'),
      ],
      summary: [
        'Take the mock exam under real conditions: 90 min, no notes, one sitting. If scoring below 750/900 consistently, do not schedule the real exam — identify and address weak domains first.',
        'Post-exam: review every wrong answer. Categorise errors as knowledge gaps (study more), misreads (practice reading stems carefully), or distractor traps (strengthen elimination technique).',
        'Prioritise study time by: domain weight × score gap. Domain 4 (28%) at 55% deserves more attention than Domain 1 (12%) at 90%. Make a study plan from data, not feeling.',
      ],
      examTip: 'Take the mock exam in one sitting under real conditions: 90 minutes, no notes, no breaks. Score below 750/900 on the mock means more study time needed. Review every wrong answer — understand why, not just what the right answer is.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Assembled Course
// ---------------------------------------------------------------------------

export const secPlusCourse: Course = {
  id: 'comptia-security-plus-sy0-701',
  title: 'CompTIA Security+',
  subtitle: 'Complete SY0-701 Exam Preparation',
  vendor: 'CompTIA',
  level: 'Intermediate',
  examCode: 'SY0-701',
  totalExamQuestions: 90,
  examDuration: 90,
  passScore: 83,
  cost: '$392 USD',
  modules: [mod0, mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11],
  examBank: [],
  mockExam: [],
};
