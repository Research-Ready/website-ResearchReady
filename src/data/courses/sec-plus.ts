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

function sec(id: string, title: string): Section {
  return {
    id,
    title,
    contentPlaceholder: `TODO: Explain ${title}`,
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
        sec('s0-1', 'Exam Structure and Timing'),
        sec('s0-2', 'Domain Weights and Coverage'),
        sec('s0-3', 'Performance-Based Questions (PBQs)'),
      ],
      flashcards: [
        fc('f0-1', 'SY0-701 pass score', 'TODO: Definition of pass score term'),
        fc('f0-2', 'Performance-based question', 'TODO: Definition of PBQ term'),
        fc('f0-3', 'Exam domain', 'TODO: Definition of exam domain term'),
      ],
      knowledgeChecks: [
        kc('k0-1', 'TODO: Question about exam format', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'remember'),
        kc('k0-2', 'TODO: Question about PBQs', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s0-4', 'How to Use the Diagnostic'),
        sec('s0-5', 'Interpreting Your Results'),
      ],
      flashcards: [
        fc('f0-4', 'Diagnostic quiz', 'TODO: Definition of diagnostic quiz term'),
        fc('f0-5', 'Knowledge gap', 'TODO: Definition of knowledge gap term'),
        fc('f0-6', 'Conscious incompetence', 'TODO: Definition of conscious incompetence term'),
      ],
      knowledgeChecks: [
        kc('k0-3', 'TODO: Question about diagnostic purpose', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'understand'),
        kc('k0-4', 'TODO: Question about study prioritization', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s1-1', 'Confidentiality'),
        sec('s1-2', 'Integrity'),
        sec('s1-3', 'Availability'),
        sec('s1-4', 'CIA in Practice: Real-World Scenarios'),
      ],
      flashcards: [
        fc('f1-1', 'Confidentiality', 'TODO: Definition of confidentiality term'),
        fc('f1-2', 'Integrity', 'TODO: Definition of integrity term'),
        fc('f1-3', 'Availability', 'TODO: Definition of availability term'),
      ],
      knowledgeChecks: [
        kc('k1-1', 'TODO: Question about CIA triad component', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k1-2', 'TODO: Scenario question identifying CIA threat', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s1-5', 'Authentication'),
        sec('s1-6', 'Authorization'),
        sec('s1-7', 'Accounting and Auditing'),
      ],
      flashcards: [
        fc('f1-4', 'Authentication', 'TODO: Definition of authentication term'),
        fc('f1-5', 'Authorization', 'TODO: Definition of authorization term'),
        fc('f1-6', 'Accounting', 'TODO: Definition of accounting term'),
      ],
      knowledgeChecks: [
        kc('k1-3', 'TODO: Question distinguishing authentication vs authorization', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k1-4', 'TODO: Scenario applying AAA framework', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s1-8', 'Control Categories'),
        sec('s1-9', 'Control Types'),
        sec('s1-10', 'Selecting the Right Control'),
      ],
      flashcards: [
        fc('f1-7', 'Preventive control', 'TODO: Definition of preventive control term'),
        fc('f1-8', 'Detective control', 'TODO: Definition of detective control term'),
        fc('f1-9', 'Compensating control', 'TODO: Definition of compensating control term'),
      ],
      knowledgeChecks: [
        kc('k1-5', 'TODO: Question classifying a control type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
        kc('k1-6', 'TODO: Scenario selecting correct control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s1-11', 'Zero Trust Principles'),
        sec('s1-12', 'Zero Trust vs Perimeter Security'),
        sec('s1-13', 'Implementing Zero Trust'),
      ],
      flashcards: [
        fc('f1-10', 'Zero Trust', 'TODO: Definition of Zero Trust term'),
        fc('f1-11', 'Microsegmentation', 'TODO: Definition of microsegmentation term'),
        fc('f1-12', 'Implicit trust', 'TODO: Definition of implicit trust term'),
      ],
      knowledgeChecks: [
        kc('k1-7', 'TODO: Question about Zero Trust principle', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k1-8', 'TODO: Scenario comparing Zero Trust to perimeter model', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
        sec('s1-14', 'Physical Access Controls'),
        sec('s1-15', 'Environmental Controls'),
        sec('s1-16', 'Surveillance and Monitoring'),
      ],
      flashcards: [
        fc('f1-13', 'Mantrap', 'TODO: Definition of mantrap term'),
        fc('f1-14', 'Tailgating', 'TODO: Definition of tailgating term'),
        fc('f1-15', 'Faraday cage', 'TODO: Definition of Faraday cage term'),
      ],
      knowledgeChecks: [
        kc('k1-9', 'TODO: Question about physical security control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'remember'),
        kc('k1-10', 'TODO: Scenario selecting physical control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: [
        'TODO: Summary bullet 1',
        'TODO: Summary bullet 2',
        'TODO: Summary bullet 3',
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
    objective: 'TODO: Lab objective',
    tool: 'CyberChef',
    toolUrl: '',
    steps: ['TODO: Step 1', 'TODO: Step 2', 'TODO: Step 3'],
    expectedOutput: 'TODO: Expected output',
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
        sec('s2-1', 'Symmetric Encryption Concepts'),
        sec('s2-2', 'AES and Block Ciphers'),
        sec('s2-3', 'Stream Ciphers and RC4'),
      ],
      flashcards: [
        fc('f2-1', 'AES', 'TODO: Definition of AES term'),
        fc('f2-2', 'Block cipher', 'TODO: Definition of block cipher term'),
        fc('f2-3', 'Stream cipher', 'TODO: Definition of stream cipher term'),
      ],
      knowledgeChecks: [
        kc('k2-1', 'TODO: Question about symmetric algorithm', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'remember'),
        kc('k2-2', 'TODO: Question comparing block vs stream cipher', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: cryptoLab('lab2-1', 'AES Encryption with CyberChef'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s2-4', 'Public and Private Key Pairs'),
        sec('s2-5', 'RSA and ECC'),
        sec('s2-6', 'Diffie-Hellman Key Exchange'),
      ],
      flashcards: [
        fc('f2-4', 'RSA', 'TODO: Definition of RSA term'),
        fc('f2-5', 'ECC', 'TODO: Definition of ECC term'),
        fc('f2-6', 'Diffie-Hellman', 'TODO: Definition of Diffie-Hellman term'),
      ],
      knowledgeChecks: [
        kc('k2-3', 'TODO: Question about asymmetric key roles', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k2-4', 'TODO: Scenario applying asymmetric encryption', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
      ],
      labExercise: cryptoLab('lab2-2', 'RSA Key Generation and Encryption with CyberChef'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s2-7', 'Hash Functions and Properties'),
        sec('s2-8', 'Common Hash Algorithms'),
        sec('s2-9', 'Hash Collisions and Weaknesses'),
      ],
      flashcards: [
        fc('f2-7', 'SHA-256', 'TODO: Definition of SHA-256 term'),
        fc('f2-8', 'Hash collision', 'TODO: Definition of hash collision term'),
        fc('f2-9', 'HMAC', 'TODO: Definition of HMAC term'),
      ],
      knowledgeChecks: [
        kc('k2-5', 'TODO: Question about hash algorithm strength', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
        kc('k2-6', 'TODO: Question about hash use case', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
      ],
      labExercise: cryptoLab('lab2-3', 'Hashing Files and Verifying Integrity with CyberChef'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s2-10', 'Certificate Authorities and Trust'),
        sec('s2-11', 'X.509 Certificates'),
        sec('s2-12', 'Certificate Revocation: CRL and OCSP'),
      ],
      flashcards: [
        fc('f2-10', 'Certificate Authority (CA)', 'TODO: Definition of CA term'),
        fc('f2-11', 'X.509 certificate', 'TODO: Definition of X.509 certificate term'),
        fc('f2-12', 'OCSP', 'TODO: Definition of OCSP term'),
      ],
      knowledgeChecks: [
        kc('k2-7', 'TODO: Question about PKI chain of trust', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k2-8', 'TODO: Scenario applying PKI to HTTPS', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      labExercise: cryptoLab('lab2-4', 'Inspecting X.509 Certificates with CyberChef'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s2-13', 'Brute Force and Dictionary Attacks'),
        sec('s2-14', 'Rainbow Tables and Salting'),
        sec('s2-15', 'Downgrade and Side-Channel Attacks'),
      ],
      flashcards: [
        fc('f2-13', 'Rainbow table attack', 'TODO: Definition of rainbow table attack term'),
        fc('f2-14', 'Salt', 'TODO: Definition of salt term'),
        fc('f2-15', 'Downgrade attack', 'TODO: Definition of downgrade attack term'),
      ],
      knowledgeChecks: [
        kc('k2-9', 'TODO: Question about rainbow table mitigation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
        kc('k2-10', 'TODO: Scenario identifying attack type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: cryptoLab('lab2-5', 'Demonstrating Rainbow Table vs Salted Hash with CyberChef'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s3-1', 'Identity and Account Types'),
        sec('s3-2', 'Principle of Least Privilege'),
        sec('s3-3', 'Identity Lifecycle Management'),
      ],
      flashcards: [
        fc('f3-1', 'Least privilege', 'TODO: Definition of least privilege term'),
        fc('f3-2', 'Service account', 'TODO: Definition of service account term'),
        fc('f3-3', 'Identity proofing', 'TODO: Definition of identity proofing term'),
      ],
      knowledgeChecks: [
        kc('k3-1', 'TODO: Question about least privilege', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k3-2', 'TODO: Question about account types', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'remember'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s3-4', 'Authentication Factors'),
        sec('s3-5', 'MFA Technologies: TOTP, FIDO2, Smartcards'),
        sec('s3-6', 'MFA Attacks and Mitigations'),
      ],
      flashcards: [
        fc('f3-4', 'TOTP', 'TODO: Definition of TOTP term'),
        fc('f3-5', 'FIDO2/WebAuthn', 'TODO: Definition of FIDO2 term'),
        fc('f3-6', 'MFA fatigue attack', 'TODO: Definition of MFA fatigue attack term'),
      ],
      knowledgeChecks: [
        kc('k3-3', 'TODO: Question about authentication factors', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'remember'),
        kc('k3-4', 'TODO: Scenario selecting MFA type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s3-7', 'Discretionary Access Control (DAC)'),
        sec('s3-8', 'Mandatory Access Control (MAC)'),
        sec('s3-9', 'Role-Based and Attribute-Based Access Control'),
      ],
      flashcards: [
        fc('f3-7', 'RBAC', 'TODO: Definition of RBAC term'),
        fc('f3-8', 'MAC', 'TODO: Definition of MAC term'),
        fc('f3-9', 'ABAC', 'TODO: Definition of ABAC term'),
      ],
      knowledgeChecks: [
        kc('k3-5', 'TODO: Question identifying access control model', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
        kc('k3-6', 'TODO: Scenario recommending access model', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s3-10', 'Single Sign-On Concepts'),
        sec('s3-11', 'SAML 2.0'),
        sec('s3-12', 'OAuth 2.0 and OpenID Connect'),
      ],
      flashcards: [
        fc('f3-10', 'SAML', 'TODO: Definition of SAML term'),
        fc('f3-11', 'OAuth 2.0', 'TODO: Definition of OAuth 2.0 term'),
        fc('f3-12', 'OpenID Connect', 'TODO: Definition of OpenID Connect term'),
      ],
      knowledgeChecks: [
        kc('k3-7', 'TODO: Question about SAML vs OAuth', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k3-8', 'TODO: Scenario selecting federation protocol', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s3-13', 'Privileged Accounts and Risks'),
        sec('s3-14', 'PAM Solutions and Password Vaulting'),
        sec('s3-15', 'Just-in-Time Access and Session Recording'),
      ],
      flashcards: [
        fc('f3-13', 'PAM', 'TODO: Definition of PAM term'),
        fc('f3-14', 'Just-in-time access', 'TODO: Definition of just-in-time access term'),
        fc('f3-15', 'Password vaulting', 'TODO: Definition of password vaulting term'),
      ],
      knowledgeChecks: [
        kc('k3-9', 'TODO: Question about PAM controls', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'understand'),
        kc('k3-10', 'TODO: Scenario analyzing insider threat with PAM', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
    objective: 'TODO: Lab objective',
    tool: 'DVWA',
    toolUrl: '',
    steps: ['TODO: Step 1', 'TODO: Step 2', 'TODO: Step 3'],
    expectedOutput: 'TODO: Expected output',
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
        sec('s4-1', 'Viruses, Worms, and Trojans'),
        sec('s4-2', 'Ransomware and Extortionware'),
        sec('s4-3', 'Rootkits, Keyloggers, and Spyware'),
        sec('s4-4', 'Botnets and Logic Bombs'),
      ],
      flashcards: [
        fc('f4-1', 'Ransomware', 'TODO: Definition of ransomware term'),
        fc('f4-2', 'Rootkit', 'TODO: Definition of rootkit term'),
        fc('f4-3', 'Botnet', 'TODO: Definition of botnet term'),
      ],
      knowledgeChecks: [
        kc('k4-1', 'TODO: Scenario identifying malware type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
        kc('k4-2', 'TODO: Question about malware propagation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
      ],
      labExercise: dvwaLab('lab4-1', 'Analyzing Malware Behavior in DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s4-5', 'Phishing, Vishing, and Smishing'),
        sec('s4-6', 'Pretexting, Baiting, and Quid Pro Quo'),
        sec('s4-7', 'Psychological Principles: Urgency, Authority, Scarcity'),
      ],
      flashcards: [
        fc('f4-4', 'Spear phishing', 'TODO: Definition of spear phishing term'),
        fc('f4-5', 'Pretexting', 'TODO: Definition of pretexting term'),
        fc('f4-6', 'Vishing', 'TODO: Definition of vishing term'),
      ],
      knowledgeChecks: [
        kc('k4-3', 'TODO: Scenario identifying phishing type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
        kc('k4-4', 'TODO: Question about psychological manipulation principle', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'understand'),
      ],
      labExercise: dvwaLab('lab4-2', 'Identifying Phishing Indicators in DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s4-8', 'SQL Injection'),
        sec('s4-9', 'Cross-Site Scripting (XSS) and CSRF'),
        sec('s4-10', 'Buffer Overflow and Memory Attacks'),
        sec('s4-11', 'Directory Traversal and Injection Attacks'),
      ],
      flashcards: [
        fc('f4-7', 'SQL injection', 'TODO: Definition of SQL injection term'),
        fc('f4-8', 'XSS', 'TODO: Definition of XSS term'),
        fc('f4-9', 'Buffer overflow', 'TODO: Definition of buffer overflow term'),
      ],
      knowledgeChecks: [
        kc('k4-5', 'TODO: Scenario identifying app attack type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
        kc('k4-6', 'TODO: Question about SQL injection mitigation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      labExercise: dvwaLab('lab4-3', 'SQL Injection and XSS in DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s4-12', 'DoS and DDoS Attacks'),
        sec('s4-13', 'Man-in-the-Middle and Replay Attacks'),
        sec('s4-14', 'ARP and DNS Poisoning'),
        sec('s4-15', 'VLAN Hopping and On-Path Attacks'),
      ],
      flashcards: [
        fc('f4-10', 'DDoS', 'TODO: Definition of DDoS term'),
        fc('f4-11', 'ARP poisoning', 'TODO: Definition of ARP poisoning term'),
        fc('f4-12', 'DNS poisoning', 'TODO: Definition of DNS poisoning term'),
      ],
      knowledgeChecks: [
        kc('k4-7', 'TODO: Scenario identifying network attack', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'analyze'),
        kc('k4-8', 'TODO: Question about DDoS mitigation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      labExercise: dvwaLab('lab4-4', 'Simulating Network Attack Patterns in DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s4-16', 'Threat Intelligence Sources'),
        sec('s4-17', 'Indicators of Compromise (IOCs)'),
        sec('s4-18', 'STIX, TAXII, and Threat Sharing'),
      ],
      flashcards: [
        fc('f4-13', 'IOC', 'TODO: Definition of IOC term'),
        fc('f4-14', 'TTPs', 'TODO: Definition of TTPs term'),
        fc('f4-15', 'STIX/TAXII', 'TODO: Definition of STIX/TAXII term'),
      ],
      knowledgeChecks: [
        kc('k4-9', 'TODO: Question about threat intelligence types', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k4-10', 'TODO: Scenario analyzing IOCs', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: dvwaLab('lab4-5', 'Identifying IOCs in DVWA Logs'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s5-1', 'Scanning Concepts and Types'),
        sec('s5-2', 'Credentialed vs Non-Credentialed Scans'),
        sec('s5-3', 'Scan Scheduling and Frequency'),
      ],
      flashcards: [
        fc('f5-1', 'Credentialed scan', 'TODO: Definition of credentialed scan term'),
        fc('f5-2', 'Passive scanning', 'TODO: Definition of passive scanning term'),
        fc('f5-3', 'Attack surface', 'TODO: Definition of attack surface term'),
      ],
      knowledgeChecks: [
        kc('k5-1', 'TODO: Question about scan type selection', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
        kc('k5-2', 'TODO: Question distinguishing scanning vs pentest', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
      ],
      labExercise: dvwaLab('lab5-1', 'Running a Vulnerability Scan Against DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s5-4', 'Interpreting Scan Results'),
        sec('s5-5', 'False Positives and False Negatives'),
        sec('s5-6', 'Prioritization and Remediation'),
      ],
      flashcards: [
        fc('f5-4', 'False positive', 'TODO: Definition of false positive term'),
        fc('f5-5', 'Vulnerability remediation', 'TODO: Definition of vulnerability remediation term'),
        fc('f5-6', 'Patch management', 'TODO: Definition of patch management term'),
      ],
      knowledgeChecks: [
        kc('k5-3', 'TODO: Scenario identifying false positive', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'analyze'),
        kc('k5-4', 'TODO: Question about remediation prioritization', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
      ],
      labExercise: dvwaLab('lab5-2', 'Analyzing and Triaging Scan Results in DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s5-7', 'CVSS Score Components'),
        sec('s5-8', 'Base Metrics: Attack Vector, Complexity, Privileges'),
        sec('s5-9', 'Environmental and Temporal Metrics'),
      ],
      flashcards: [
        fc('f5-7', 'CVSS', 'TODO: Definition of CVSS term'),
        fc('f5-8', 'CVE', 'TODO: Definition of CVE term'),
        fc('f5-9', 'NVD', 'TODO: Definition of NVD term'),
      ],
      knowledgeChecks: [
        kc('k5-5', 'TODO: Question about CVSS score interpretation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'understand'),
        kc('k5-6', 'TODO: Scenario prioritizing by CVSS', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: dvwaLab('lab5-3', 'Looking Up CVEs and CVSS Scores for DVWA Vulnerabilities'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s5-10', 'Pentest Phases and Methodology'),
        sec('s5-11', 'Black Box, White Box, and Grey Box Testing'),
        sec('s5-12', 'Rules of Engagement and Legal Considerations'),
      ],
      flashcards: [
        fc('f5-10', 'Penetration test', 'TODO: Definition of penetration test term'),
        fc('f5-11', 'Rules of engagement', 'TODO: Definition of rules of engagement term'),
        fc('f5-12', 'Lateral movement', 'TODO: Definition of lateral movement term'),
      ],
      knowledgeChecks: [
        kc('k5-7', 'TODO: Question about pentest box type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k5-8', 'TODO: Scenario applying pentest scope', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      labExercise: dvwaLab('lab5-4', 'Simulating Pentest Reconnaissance Against DVWA'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s6-1', 'Network Zones and DMZ'),
        sec('s6-2', 'Segmentation and Micro-segmentation'),
        sec('s6-3', 'East-West vs North-South Traffic'),
      ],
      flashcards: [
        fc('f6-1', 'DMZ', 'TODO: Definition of DMZ term'),
        fc('f6-2', 'Network segmentation', 'TODO: Definition of network segmentation term'),
        fc('f6-3', 'Jump server', 'TODO: Definition of jump server term'),
      ],
      knowledgeChecks: [
        kc('k6-1', 'TODO: Question about DMZ purpose', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k6-2', 'TODO: Scenario analyzing network design', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s6-4', 'Firewall Types and Evolution'),
        sec('s6-5', 'Intrusion Detection Systems (IDS)'),
        sec('s6-6', 'Intrusion Prevention Systems (IPS)'),
      ],
      flashcards: [
        fc('f6-4', 'NGFW', 'TODO: Definition of NGFW term'),
        fc('f6-5', 'Signature-based detection', 'TODO: Definition of signature-based detection term'),
        fc('f6-6', 'Anomaly-based detection', 'TODO: Definition of anomaly-based detection term'),
      ],
      knowledgeChecks: [
        kc('k6-3', 'TODO: Question about IDS vs IPS', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k6-4', 'TODO: Scenario comparing detection methods', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s6-7', 'VPN Concepts and Types'),
        sec('s6-8', 'IPSec: AH, ESP, Transport, Tunnel Modes'),
        sec('s6-9', 'SSL/TLS VPN and Split Tunneling'),
      ],
      flashcards: [
        fc('f6-7', 'IPSec', 'TODO: Definition of IPSec term'),
        fc('f6-8', 'Split tunneling', 'TODO: Definition of split tunneling term'),
        fc('f6-9', 'SSL VPN', 'TODO: Definition of SSL VPN term'),
      ],
      knowledgeChecks: [
        kc('k6-5', 'TODO: Question about IPSec modes', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k6-6', 'TODO: Scenario selecting VPN type', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s6-10', 'Wireless Standards and Protocols'),
        sec('s6-11', 'WPA2 vs WPA3'),
        sec('s6-12', 'Wireless Attacks: Evil Twin, Deauth, Cracking'),
      ],
      flashcards: [
        fc('f6-10', 'WPA3', 'TODO: Definition of WPA3 term'),
        fc('f6-11', 'Evil twin attack', 'TODO: Definition of evil twin attack term'),
        fc('f6-12', 'RADIUS for wireless', 'TODO: Definition of RADIUS for wireless term'),
      ],
      knowledgeChecks: [
        kc('k6-7', 'TODO: Question about wireless encryption weakness', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'understand'),
        kc('k6-8', 'TODO: Scenario identifying wireless attack', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s6-13', 'DNS Security: DNSSEC'),
        sec('s6-14', 'Email Authentication: SPF and DKIM'),
        sec('s6-15', 'DMARC Policy and Email Security'),
      ],
      flashcards: [
        fc('f6-13', 'SPF', 'TODO: Definition of SPF term'),
        fc('f6-14', 'DKIM', 'TODO: Definition of DKIM term'),
        fc('f6-15', 'DMARC', 'TODO: Definition of DMARC term'),
      ],
      knowledgeChecks: [
        kc('k6-9', 'TODO: Question about email authentication chain', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'understand'),
        kc('k6-10', 'TODO: Scenario recommending email security controls', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s7-1', 'IaaS, PaaS, and SaaS'),
        sec('s7-2', 'Deployment Models: Public, Private, Hybrid'),
        sec('s7-3', 'Shared Responsibility Model'),
      ],
      flashcards: [
        fc('f7-1', 'Shared responsibility model', 'TODO: Definition of shared responsibility model term'),
        fc('f7-2', 'IaaS', 'TODO: Definition of IaaS term'),
        fc('f7-3', 'SaaS', 'TODO: Definition of SaaS term'),
      ],
      knowledgeChecks: [
        kc('k7-1', 'TODO: Question about shared responsibility', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k7-2', 'TODO: Scenario analyzing cloud model choice', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s7-4', 'Cloud Access Security Brokers (CASB)'),
        sec('s7-5', 'Cloud Security Posture Management (CSPM)'),
        sec('s7-6', 'Cloud IAM and Secrets Management'),
      ],
      flashcards: [
        fc('f7-4', 'CASB', 'TODO: Definition of CASB term'),
        fc('f7-5', 'CSPM', 'TODO: Definition of CSPM term'),
        fc('f7-6', 'Cloud IAM', 'TODO: Definition of cloud IAM term'),
      ],
      knowledgeChecks: [
        kc('k7-3', 'TODO: Question about CASB function', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k7-4', 'TODO: Scenario applying cloud security control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s7-7', 'Hypervisor Types and Architecture'),
        sec('s7-8', 'VM Escape and VM Sprawl'),
        sec('s7-9', 'Container Security'),
      ],
      flashcards: [
        fc('f7-7', 'Type 1 hypervisor', 'TODO: Definition of Type 1 hypervisor term'),
        fc('f7-8', 'VM escape', 'TODO: Definition of VM escape term'),
        fc('f7-9', 'Container', 'TODO: Definition of container term'),
      ],
      knowledgeChecks: [
        kc('k7-5', 'TODO: Question about hypervisor types', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k7-6', 'TODO: Scenario evaluating VM security risk', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s7-10', 'IaC Concepts and Tools'),
        sec('s7-11', 'IaC Security Risks: Misconfigurations and Drift'),
        sec('s7-12', 'Secrets Management in IaC'),
      ],
      flashcards: [
        fc('f7-10', 'IaC', 'TODO: Definition of IaC term'),
        fc('f7-11', 'Configuration drift', 'TODO: Definition of configuration drift term'),
        fc('f7-12', 'Immutable infrastructure', 'TODO: Definition of immutable infrastructure term'),
      ],
      knowledgeChecks: [
        kc('k7-7', 'TODO: Question about IaC security risk', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k7-8', 'TODO: Scenario applying IaC security control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s8-1', 'Antivirus and Traditional Endpoint Security'),
        sec('s8-2', 'EDR Capabilities and Benefits'),
        sec('s8-3', 'HIDS and HIPS'),
      ],
      flashcards: [
        fc('f8-1', 'EDR', 'TODO: Definition of EDR term'),
        fc('f8-2', 'HIDS', 'TODO: Definition of HIDS term'),
        fc('f8-3', 'Allow list / deny list', 'TODO: Definition of allow list / deny list term'),
      ],
      knowledgeChecks: [
        kc('k8-1', 'TODO: Question about EDR vs AV', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k8-2', 'TODO: Scenario recommending endpoint control', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s8-4', 'MDM and Mobile Deployment Models'),
        sec('s8-5', 'BYOD, COPE, and CYOD Policies'),
        sec('s8-6', 'Mobile Application Management (MAM)'),
      ],
      flashcards: [
        fc('f8-4', 'MDM', 'TODO: Definition of MDM term'),
        fc('f8-5', 'BYOD', 'TODO: Definition of BYOD term'),
        fc('f8-6', 'Remote wipe', 'TODO: Definition of remote wipe term'),
      ],
      knowledgeChecks: [
        kc('k8-3', 'TODO: Question about BYOD vs COPE security', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'understand'),
        kc('k8-4', 'TODO: Scenario designing MDM policy', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s8-7', 'Hardening Concepts and Attack Surface Reduction'),
        sec('s8-8', 'OS Hardening: Patch, Disable, Configure'),
        sec('s8-9', 'CIS Benchmarks and Security Baselines'),
      ],
      flashcards: [
        fc('f8-7', 'CIS Benchmark', 'TODO: Definition of CIS Benchmark term'),
        fc('f8-8', 'Security baseline', 'TODO: Definition of security baseline term'),
        fc('f8-9', 'Default credentials', 'TODO: Definition of default credentials term'),
      ],
      knowledgeChecks: [
        kc('k8-5', 'TODO: Question about hardening priority', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
        kc('k8-6', 'TODO: Scenario identifying hardening gap', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s8-10', 'SDLC Phases and Security Integration'),
        sec('s8-11', 'SAST, DAST, and Software Composition Analysis'),
        sec('s8-12', 'DevSecOps and Shift-Left Security'),
      ],
      flashcards: [
        fc('f8-10', 'SAST', 'TODO: Definition of SAST term'),
        fc('f8-11', 'DAST', 'TODO: Definition of DAST term'),
        fc('f8-12', 'Shift-left security', 'TODO: Definition of shift-left security term'),
      ],
      knowledgeChecks: [
        kc('k8-7', 'TODO: Question about SAST vs DAST timing', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k8-8', 'TODO: Scenario identifying SDLC security gap', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s8-13', 'IoT Architecture and Vulnerabilities'),
        sec('s8-14', 'IoT Attack Vectors'),
        sec('s8-15', 'Securing IoT Deployments'),
      ],
      flashcards: [
        fc('f8-13', 'IoT', 'TODO: Definition of IoT term'),
        fc('f8-14', 'Embedded system', 'TODO: Definition of embedded system term'),
        fc('f8-15', 'OT/ICS security', 'TODO: Definition of OT/ICS security term'),
      ],
      knowledgeChecks: [
        kc('k8-9', 'TODO: Question about IoT security risk', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k8-10', 'TODO: Scenario applying IoT segmentation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
    objective: 'TODO: Lab objective',
    tool: 'TheHive',
    toolUrl: '',
    steps: ['TODO: Step 1', 'TODO: Step 2', 'TODO: Step 3'],
    expectedOutput: 'TODO: Expected output',
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
        sec('s9-1', 'IR Phases: PICERL Framework'),
        sec('s9-2', 'Containment Strategies'),
        sec('s9-3', 'Eradication and Recovery'),
        sec('s9-4', 'Lessons Learned and Post-Incident Review'),
      ],
      flashcards: [
        fc('f9-1', 'Incident response', 'TODO: Definition of incident response term'),
        fc('f9-2', 'Containment', 'TODO: Definition of containment term'),
        fc('f9-3', 'Chain of custody', 'TODO: Definition of chain of custody term'),
      ],
      knowledgeChecks: [
        kc('k9-1', 'TODO: Question sequencing IR phases', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
        kc('k9-2', 'TODO: Scenario identifying IR phase error', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: hiveLab('lab9-1', 'Creating and Managing an Incident in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s9-5', 'Forensic Principles and Chain of Custody'),
        sec('s9-6', 'Order of Volatility'),
        sec('s9-7', 'Forensic Imaging and Tools'),
      ],
      flashcards: [
        fc('f9-4', 'Order of volatility', 'TODO: Definition of order of volatility term'),
        fc('f9-5', 'Forensic image', 'TODO: Definition of forensic image term'),
        fc('f9-6', 'Legal hold', 'TODO: Definition of legal hold term'),
      ],
      knowledgeChecks: [
        kc('k9-3', 'TODO: Question about order of volatility', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
        kc('k9-4', 'TODO: Scenario identifying chain-of-custody issue', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: hiveLab('lab9-2', 'Documenting Forensic Evidence in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s9-8', 'SIEM Architecture and Components'),
        sec('s9-9', 'Log Sources and Normalization'),
        sec('s9-10', 'Correlation Rules and Alerting'),
      ],
      flashcards: [
        fc('f9-7', 'SIEM', 'TODO: Definition of SIEM term'),
        fc('f9-8', 'SOAR', 'TODO: Definition of SOAR term'),
        fc('f9-9', 'Log correlation', 'TODO: Definition of log correlation term'),
      ],
      knowledgeChecks: [
        kc('k9-5', 'TODO: Question about SIEM function', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k9-6', 'TODO: Scenario analyzing SIEM alert pattern', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
      ],
      labExercise: hiveLab('lab9-3', 'Correlating Alerts and Creating Cases in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s9-11', 'Threat Hunting Concepts and Hypothesis-Driven Approach'),
        sec('s9-12', 'Hunting Techniques: Behavioral Analytics, Stack Counting'),
        sec('s9-13', 'Hunting Tools and Data Sources'),
      ],
      flashcards: [
        fc('f9-10', 'Threat hunting', 'TODO: Definition of threat hunting term'),
        fc('f9-11', 'Hypothesis-driven hunting', 'TODO: Definition of hypothesis-driven hunting term'),
        fc('f9-12', 'Dwell time', 'TODO: Definition of dwell time term'),
      ],
      knowledgeChecks: [
        kc('k9-7', 'TODO: Question about threat hunting vs IR', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k9-8', 'TODO: Scenario applying hunting technique', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'apply'),
      ],
      labExercise: hiveLab('lab9-4', 'Threat Hunting Investigation in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s9-14', 'DLP Concepts: Data States and DLP Types'),
        sec('s9-15', 'DLP Policy Design'),
        sec('s9-16', 'DLP Integration with CASB and SIEM'),
      ],
      flashcards: [
        fc('f9-13', 'DLP', 'TODO: Definition of DLP term'),
        fc('f9-14', 'Data in motion', 'TODO: Definition of data in motion term'),
        fc('f9-15', 'Data exfiltration', 'TODO: Definition of data exfiltration term'),
      ],
      knowledgeChecks: [
        kc('k9-9', 'TODO: Question about DLP data states', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'understand'),
        kc('k9-10', 'TODO: Scenario applying DLP policy', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      labExercise: hiveLab('lab9-5', 'Investigating DLP Alert in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        sec('s9-17', 'SOAR Platforms and Capabilities'),
        sec('s9-18', 'Playbooks and Runbooks'),
        sec('s9-19', 'Automation Use Cases and Limitations'),
      ],
      flashcards: [
        fc('f9-16', 'SOAR', 'TODO: Definition of SOAR term'),
        fc('f9-17', 'Playbook', 'TODO: Definition of playbook term'),
        fc('f9-18', 'MTTD/MTTR', 'TODO: Definition of MTTD/MTTR term'),
      ],
      knowledgeChecks: [
        kc('k9-11', 'TODO: Question about SOAR vs SIEM', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k9-12', 'TODO: Scenario designing automation playbook', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
      ],
      labExercise: hiveLab('lab9-6', 'Building an Automated Response Workflow in TheHive'),
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f10-1', 'Risk appetite', 'TODO: Definition of risk appetite term'),
        fc('f10-2', 'Residual risk', 'TODO: Definition of residual risk term'),
        fc('f10-3', 'Risk transfer', 'TODO: Definition of risk transfer term'),
      ],
      knowledgeChecks: [
        kc('k10-1', 'TODO: Question about risk response strategies', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'understand'),
        kc('k10-2', 'TODO: Scenario prioritizing risk register', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f10-4', 'PCI DSS', 'TODO: Definition of PCI DSS term'),
        fc('f10-5', 'HIPAA', 'TODO: Definition of HIPAA term'),
        fc('f10-6', 'NIST CSF', 'TODO: Definition of NIST CSF term'),
      ],
      knowledgeChecks: [
        kc('k10-3', 'TODO: Question identifying applicable framework', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
        kc('k10-4', 'TODO: Question about GDPR requirement', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'understand'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f10-7', 'AUP', 'TODO: Definition of AUP term'),
        fc('f10-8', 'Data classification', 'TODO: Definition of data classification term'),
        fc('f10-9', 'Change management', 'TODO: Definition of change management term'),
      ],
      knowledgeChecks: [
        kc('k10-5', 'TODO: Question about policy hierarchy', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k10-6', 'TODO: Scenario identifying policy violation', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f10-10', 'PII', 'TODO: Definition of PII term'),
        fc('f10-11', 'Data minimization', 'TODO: Definition of data minimization term'),
        fc('f10-12', 'Privacy by design', 'TODO: Definition of privacy by design term'),
      ],
      knowledgeChecks: [
        kc('k10-7', 'TODO: Question about PII classification', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'remember'),
        kc('k10-8', 'TODO: Scenario applying privacy principle', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f10-13', 'RTO', 'TODO: Definition of RTO term'),
        fc('f10-14', 'RPO', 'TODO: Definition of RPO term'),
        fc('f10-15', 'Hot site', 'TODO: Definition of hot site term'),
      ],
      knowledgeChecks: [
        kc('k10-9', 'TODO: Question about RTO vs RPO', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
        kc('k10-10', 'TODO: Scenario calculating BCDR target', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f11-1', 'Domain 1 key theme', 'TODO: Definition of Domain 1 key theme term'),
        fc('f11-2', 'Domain 2 key theme', 'TODO: Definition of Domain 2 key theme term'),
        fc('f11-3', 'Domain 5 key theme', 'TODO: Definition of Domain 5 key theme term'),
      ],
      knowledgeChecks: [
        kc('k11-1', 'TODO: Cross-domain review question', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'remember'),
        kc('k11-2', 'TODO: Question connecting multiple domain concepts', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'understand'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f11-4', 'Performance-based question', 'TODO: Definition of performance-based question term'),
        fc('f11-5', 'Drag-and-drop question type', 'TODO: Definition of drag-and-drop question type term'),
        fc('f11-6', 'Simulation PBQ', 'TODO: Definition of simulation PBQ term'),
      ],
      knowledgeChecks: [
        kc('k11-3', 'TODO: Question about PBQ time strategy', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
        kc('k11-4', 'TODO: Question about PBQ types', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 3, 'TODO: Explanation', 'understand'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f11-7', 'Distractor answer', 'TODO: Definition of distractor answer term'),
        fc('f11-8', 'Elimination technique', 'TODO: Definition of elimination technique term'),
        fc('f11-9', '"Best answer" principle', 'TODO: Definition of best answer principle term'),
      ],
      knowledgeChecks: [
        kc('k11-5', 'TODO: Commonly confused term question', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 2, 'TODO: Explanation', 'analyze'),
        kc('k11-6', 'TODO: Question applying elimination technique', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'apply'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
        fc('f11-10', 'Timed exam simulation', 'TODO: Definition of timed exam simulation term'),
        fc('f11-11', 'Score analysis', 'TODO: Definition of score analysis term'),
        fc('f11-12', 'Weak domain identification', 'TODO: Definition of weak domain identification term'),
      ],
      knowledgeChecks: [
        kc('k11-7', 'TODO: Question about mock exam strategy', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 0, 'TODO: Explanation', 'apply'),
        kc('k11-8', 'TODO: Question about post-exam analysis', ['TODO option A', 'TODO option B', 'TODO option C', 'TODO option D'], 1, 'TODO: Explanation', 'analyze'),
      ],
      summary: ['TODO: Summary bullet 1', 'TODO: Summary bullet 2', 'TODO: Summary bullet 3'],
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
