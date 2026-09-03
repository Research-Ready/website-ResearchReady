# Cert Training Course Plan

**Project:** ResearchReady Interactive Cert Training
**Target certs:** ITIL 4 Foundation + CompTIA Security+ SY0-701
**Date:** 2026-09-03
**Pedagogy:** Conscious Competence model (4 stages)

---

## Architecture Decision

Content lives in **two places** with distinct roles:

```
BookStack (node-2)              Astro site (website-ResearchReady)
─────────────────               ────────────────────────────────────
Course prose content            Course skeleton (metadata, structure)
  - Lesson explanations         Exercise engine (quiz, flashcards)
  - Examples + scenarios        Progress tracking (localStorage)
  - Study guides                Lab links (→ containers)
  - Instructor notes            Exam simulation (timed, scored)

Gitea (node-2)                  passwords.kdbx (InstallLocalAiPackage)
──────────────                  ─────────────────────────────────────
Version control                 API tokens, lab credentials
for course content              group: CertTraining/
```

**Why split?** BookStack is the right tool for rich text content (tables, code, images, formatting). Astro handles the interactive, scored, timed parts. Gitea keeps course content versioned and safe. KeePass keeps credentials out of source.

---

## Stage Map (Conscious Competence)

| Stage | Name | What happens | Tools |
|-------|------|-------------|-------|
| 1 | Unconscious Incompetence | Diagnostic quiz — 2 Q/domain | Astro quiz engine |
| 2 | Conscious Incompetence | Domain lessons | BookStack pages |
| 3 | Conscious Competence | Quiz + flashcards + labs | Astro + lab containers |
| 4 | Unconscious Competence | Timed mock exam | Astro exam engine |

---

## ITIL 4 Foundation — Module Structure

**Exam:** 40 Q, 60 min, 65% pass (26/40). Bloom's L1+L2.
**Key weight:** 7 practices carry 17/40 questions.

| Module | Chapters | Exam Q weight |
|--------|----------|--------------|
| 0: Course Intro | Exam format, pre-assessment | — |
| 1: Service Management Foundations | What is a service, value/outcomes/costs/risks, service relationships | ~5 Q |
| 2: Key ITIL Concepts | ITIL history, ITSM today, ITIL 4 as framework | ~3 Q |
| 3: Four Dimensions | Organizations+People, Info+Tech, Partners+Suppliers, Value Streams | ~4 Q |
| 4: Guiding Principles | All 7 principles (one chapter each) | ~7 Q |
| 5: Service Value System | SVS overview, opportunity/demand, governance, continual improvement | ~5 Q |
| 6: Service Value Chain | Plan, Improve, Engage, Design+Transition, Obtain/Build, Deliver+Support | ~5 Q |
| 7: ITIL Practices | 15 practices (7 key ★ + 8 awareness) | ~15 Q |
| 8: Exam Prep | Quick review, common traps, full mock exam | — |

**7 Key Practices (★ — exam-weighted):**
- Incident Management
- Problem Management
- Change Enablement
- Service Request Management
- Service Desk
- Service Level Management
- Continual Improvement

---

## Security+ SY0-701 — Module Structure

**Exam:** 90 Q max, 90 min, 750/900 (83%) pass. Performance-based questions included.
**Hands-on labs needed** for domains 2, 3, 4.

| Module | Chapters | Domain | Weight |
|--------|----------|--------|--------|
| 0: Course Intro | Exam format, pre-assessment | — | — |
| 1: Security Fundamentals | CIA triad, AAA, controls, Zero Trust, physical security | 1 | 12% |
| 2: Cryptography | Symmetric/asymmetric, algorithms, hashing, PKI, attacks | 1 | 12% |
| 3: Identity & Access | Identity, MFA, authorization models, federation, PAM | 1+4 | shared |
| 4: Threats & Attacks | Malware, social engineering, app attacks, network attacks, threat intel | 2 | 22% |
| 5: Vulnerability Management | Scanning, assessment, CVSS, pentest concepts | 2 | 22% |
| 6: Network Security | Architecture, firewalls/IDS/IPS, VPN, wireless, DNS/email | 3 | 18% |
| 7: Cloud & Infrastructure | Cloud models, cloud security, virtualization, IaC | 3 | 18% |
| 8: Endpoint & App Security | EDR, MDM, hardening, SDLC, IoT | 3+4 | shared |
| 9: Security Operations | IR process, forensics, SIEM, threat hunting, DLP, automation | 4 | 28% |
| 10: GRC | Risk management, compliance, policies, privacy, BCDR | 5 | 20% |
| 11: Exam Prep | Domain review, PBQs, full mock, common traps | — | — |

**Lab containers needed per module:**
- Module 2 Crypto: CyberChef (available)
- Module 4+5 Threats/Vulns: DVWA + Greenbone (requested)
- Module 9 SecOps: TheHive + OpenCTI (available)

---

## Per-Chapter Content Spec

Each chapter must contain:

```
Chapter
├── Learning Objectives (Bloom's level: remember/understand/apply/analyze)
├── Sections (2-4 per chapter)
│   ├── Concept explanation (BookStack page)
│   ├── Real-world example or scenario (BookStack page)
│   └── Key takeaway (1 sentence)
├── Flashcards (5-10 per chapter, key terms)
├── Knowledge Check (3 Q per chapter, immediate feedback)
├── Lab Exercise (optional, Security+ only)
│   ├── Objective
│   ├── Steps
│   ├── Expected output
│   └── Link to lab container
└── Chapter Summary (3-5 bullet points)
```

---

## Sprint Plan

### Sprint A — Foundation (current)
- [x] Research official syllabi and course structures
- [x] Write software request for lab containers
- [ ] Design rich TypeScript course schema (types.ts)
- [ ] Create ITIL4 course skeleton (all modules/chapters, empty content)
- [ ] Create Security+ course skeleton (all modules/chapters, empty content)
- [ ] Create KeePass database for cert training
- [ ] Find Gitea URL, add as git remote

### Sprint B — BookStack Integration
- [ ] Create BookStack API token (store in KeePass CertTraining/)
- [ ] Create ITIL4 book structure via BookStack API
- [ ] Create Security+ book structure via BookStack API
- [ ] Astro: load BookStack chapter URLs into course data

### Sprint C — Lab Infrastructure
- [ ] Deploy DVWA container (after request approved)
- [ ] Deploy Greenbone (after request approved)
- [ ] Configure lab exercise links in Security+ chapters
- [ ] Write CyberChef exercises for crypto chapter

### Sprint D — Content Fill
- [ ] Fill ITIL4 lesson content per chapter in BookStack
- [ ] Fill Security+ lesson content per chapter in BookStack
- [ ] 5 quality flashcards per chapter (ITIL4: ~200, Sec+: ~250)
- [ ] 3 knowledge check questions per chapter

### Sprint E — Exam Bank
- [ ] Build ITIL4 question bank: 10 Q/chapter = ~300 questions
- [ ] Build Security+ question bank: 10 Q/chapter = ~400 questions
- [ ] Performance-based question types for Security+
- [ ] Full mock exams (ITIL4: 40 Q, Security+: 90 Q)

---

## Credentials to Track (KeePass: CertTraining/)

| Entry | What |
|-------|------|
| CertTraining/BookStack-API | API token for reading/writing course content |
| CertTraining/Labs/DVWA | Admin credentials for DVWA lab |
| CertTraining/Labs/Greenbone | Admin credentials for Greenbone |
| CertTraining/Gitea | Gitea repo token for course content sync |

---

## Sources

- [ITIL 4 Foundation Syllabus (PeopleCert)](https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565)
- [Security+ SY0-701 Exam Objectives (CompTIA)](https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf)
- [cambiotraining/quarto-course-template](https://github.com/cambiotraining/quarto-course-template)
- [Shortiquiz Quarto extension](https://github.com/skyfroger/shortiquiz)
