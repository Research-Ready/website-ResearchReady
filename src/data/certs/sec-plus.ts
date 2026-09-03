import type { CertModule } from './types';

export const secPlus: CertModule = {
  id: 'sec-plus',
  title: 'CompTIA Security+',
  subtitle: 'Breed erkend entry-level security certificaat — vendor-neutraal fundament voor elke security-carrière.',
  vendor: 'CompTIA',
  level: 'Entry',
  examCode: 'SY0-701',
  totalQuestions: 90,
  duration: 90,
  passScore: 83,
  cost: '€392',
  domains: [
    {
      id: 'general-security-concepts',
      title: 'General Security Concepts',
      weight: 12,
      lesson: {
        overview: 'Dit domein legt het fundament voor alle andere security-onderwerpen. Je leert de kernbegrippen van security: het CIA-triad (Confidentiality, Integrity, Availability), het AAA-framework (Authentication, Authorization, Accounting), typen security-controls, en de basisbeginselen van cryptografie en PKI. Zonder dit fundament zijn de andere domeinen moeilijk te begrijpen.',
        keyPoints: [
          'CIA-triad: Confidentiality (alleen bevoegde toegang), Integrity (data ongewijzigd), Availability (systemen beschikbaar wanneer nodig)',
          'AAA: Authentication (wie ben je?), Authorization (wat mag je?), Accounting (wat deed je?)',
          'Security controls: Preventive (voorkom), Detective (detecteer), Corrective (herstel), Compensating (alternatief)',
          'Control categorieën: Technical (firewalls, encryptie), Administrative (beleid), Physical (sloten, camera\'s)',
          'Symmetric encryptie (AES): één sleutel voor en- en ontsleuteling — snel, ideaal voor bulk data',
          'Asymmetric encryptie (RSA, ECC): publieke sleutel versleutelt, private sleutel ontsleutelt — trager, gebruikt voor sleuteluitwisseling en handtekeningen',
          'Hashing (SHA-256, SHA-3): eenrichtingsfunctie voor integriteitsverificatie — geen sleutel, niet omkeerbaar',
          'PKI: Certificate Authority (CA) geeft certificaten uit die publieke sleutels koppelen aan identiteiten',
          'Non-repudiation: zender kan verzending niet ontkennen — implementatie via digitale handtekeningen',
          'Perfect Forward Secrecy (PFS): elke sessie krijgt unieke sleutels — compromittering van langetermijnsleutel lekt geen oude sessies'
        ],
        studyTip: 'Leer het verschil tussen symmetric (één sleutel, snel) en asymmetric (sleutelpaar, traag) encryptie. Examen test dit verschil regelmatig. Onthoud: AES = symmetric, RSA/ECC = asymmetric.'
      },
      questions: [
        {
          id: 'gsc-1',
          domain: 'general-security-concepts',
          question: 'Welke term beschrijft het proces van verifiëren dat een gebruiker is wie hij/zij beweert te zijn?',
          options: ['Authorization', 'Authentication', 'Accounting', 'Access control'],
          correct: 1,
          explanation: 'Authentication verifieert identiteit. Authorization bepaalt wat een geauthenticeerde gebruiker mag doen. Accounting registreert gebruikersactiviteiten.'
        },
        {
          id: 'gsc-2',
          domain: 'general-security-concepts',
          question: 'Welk algoritme is symmetrisch en gebruikt sleutels van 128, 192 of 256 bit?',
          options: ['RSA', 'AES', 'ECC', 'Diffie-Hellman'],
          correct: 1,
          explanation: 'AES (Advanced Encryption Standard) is het meest gebruikte symmetrische cijferalgoritme. RSA, ECC en Diffie-Hellman zijn asymmetrisch.'
        },
        {
          id: 'gsc-3',
          domain: 'general-security-concepts',
          question: 'Een bedrijf installeert beveiligingscamera\'s bij alle ingangen. Dit is een voorbeeld van welk type security-control?',
          options: ['Preventive', 'Corrective', 'Detective', 'Compensating'],
          correct: 2,
          explanation: 'Beveiligingscamera\'s detecteren en registreren gebeurtenissen — het zijn detective controls. Preventive controls stoppen incidenten vooraf; corrective controls herstellen achteraf.'
        },
        {
          id: 'gsc-4',
          domain: 'general-security-concepts',
          question: 'Welk concept zorgt dat een afzender later niet kan ontkennen een bericht te hebben verstuurd?',
          options: ['Confidentiality', 'Integrity', 'Non-repudiation', 'Availability'],
          correct: 2,
          explanation: 'Non-repudiation voorkomt dat partijen acties die ze uitvoerden kunnen ontkennen. Typisch geïmplementeerd via digitale handtekeningen (private sleutel van afzender).'
        },
        {
          id: 'gsc-5',
          domain: 'general-security-concepts',
          question: 'Wat is het primaire doel van een mantrap?',
          options: [
            'Inbraakpogingen detecteren via bewegingssensoren',
            'Fysieke toegang controleren door slechts één persoon tegelijk door te laten',
            'Een DMZ creëren tussen interne en externe netwerken',
            'Tailgating voorkomen uitsluitend via RFID-kaarten'
          ],
          correct: 1,
          explanation: 'Een mantrap is een fysiek security-control met twee vergrendelde deuren — slechts één kan tegelijk open. Dit voorkomt tailgating (meelopers).'
        },
        {
          id: 'gsc-6',
          domain: 'general-security-concepts',
          question: 'Welke hashingalgoritme produceert een 256-bit digest en is aanbevolen voor modern gebruik?',
          options: ['MD5', 'SHA-1', 'SHA-256', 'NTLM'],
          correct: 2,
          explanation: 'SHA-256 (onderdeel van SHA-2 familie) produceert een 256-bit hash en is momenteel aanbevolen. MD5 en SHA-1 zijn verouderd door aangetoonde collision-kwetsbaarheden.'
        },
        {
          id: 'gsc-7',
          domain: 'general-security-concepts',
          question: 'Welke van de volgende beschrijft steganografie het BEST?',
          options: [
            'Data versleutelen zodat alleen bevoegden het kunnen lezen',
            'Data hashen om integriteit te garanderen',
            'Geheime data verbergen binnen gewone, niet-geheime data',
            'Data ondertekenen om authenticiteit te bewijzen'
          ],
          correct: 2,
          explanation: 'Steganografie verbergt geheime informatie in gewone bestanden (afbeeldingen, audio). Het verschilt van encryptie doordat het bestaan van de data wordt verborgen, niet alleen de inhoud.'
        },
        {
          id: 'gsc-8',
          domain: 'general-security-concepts',
          question: 'Een firewall is een voorbeeld van welke categorie security-control?',
          options: ['Administrative', 'Physical', 'Technical', 'Operational'],
          correct: 2,
          explanation: 'Technical (logische) controls gebruiken technologie om security af te dwingen — firewalls, encryptie, access control lists. Administrative controls zijn beleidsmatig; physical controls zijn tastbare barrières.'
        },
        {
          id: 'gsc-9',
          domain: 'general-security-concepts',
          question: 'Perfect Forward Secrecy (PFS) zorgt ervoor dat:',
          options: [
            'Versleutelde data niet ontsleuteld kan worden zonder de CA\'s private key',
            'Sessiesleutels onafhankelijk worden afgeleid zodat vroegere sessies veilig blijven als langetermijnsleutels gecompromitteerd worden',
            'Certificaten geldig blijven na intrekking',
            'Al het verkeer end-to-end versleuteld is met asymmetrische sleutels'
          ],
          correct: 1,
          explanation: 'PFS gebruikt ephemeral sleuteluitwisselingen (bijv. ECDHE) zodat elke sessie een unieke sleutel heeft. Als een langetermijnsleutel later gecompromitteerd wordt, blijven eerdere sessies beschermd.'
        },
        {
          id: 'gsc-10',
          domain: 'general-security-concepts',
          question: 'Welke component van PKI is verantwoordelijk voor het uitgeven en ondertekenen van digitale certificaten?',
          options: [
            'Certificate Revocation List (CRL)',
            'Registration Authority (RA)',
            'Certificate Authority (CA)',
            'Online Certificate Status Protocol (OCSP)'
          ],
          correct: 2,
          explanation: 'De CA is de vertrouwde derde partij die digitale certificaten ondertekent en uitgeeft, waarmee identiteiten aan publieke sleutels worden gekoppeld. De RA verifieert identiteiten namens de CA.'
        }
      ],
      flashcards: [
        { term: 'CIA-triad', definition: 'Confidentiality (alleen bevoegde toegang), Integrity (data ongewijzigd), Availability (systemen beschikbaar) — de drie kernprincipes van informatiebeveiliging' },
        { term: 'Authentication', definition: 'Het verifiëren van de identiteit van een gebruiker, apparaat of systeem' },
        { term: 'Authorization', definition: 'Bepalen wat een geauthenticeerde entiteit mag doen of toegang heeft' },
        { term: 'Accounting (Auditing)', definition: 'Het registreren en bijhouden van gebruikersacties voor controle en audit' },
        { term: 'PKI', definition: 'Public Key Infrastructure — het raamwerk van CA\'s, certificaten en beleid dat asymmetrische cryptografie mogelijk maakt' },
        { term: 'Certificate Authority (CA)', definition: 'Vertrouwde entiteit die digitale certificaten uitgeeft en ondertekent, identiteiten koppelt aan publieke sleutels' },
        { term: 'Symmetric encryptie', definition: 'Gebruikt dezelfde sleutel voor versleuteling en ontsleuteling (bijv. AES, 3DES) — snel, ideaal voor grote hoeveelheden data' },
        { term: 'Asymmetric encryptie', definition: 'Gebruikt een sleutelpaar — publieke sleutel versleutelt, private sleutel ontsleutelt (bijv. RSA, ECC) — trager, gebruikt voor sleuteluitwisseling' },
        { term: 'Hashing', definition: 'Eenrichtings-wiskundige functie die een vaste-lengte digest produceert (bijv. SHA-256, MD5) — voor integriteitsverificatie' },
        { term: 'Non-repudiation', definition: 'Waarborg dat iemand een uitgevoerde actie niet kan ontkennen — geïmplementeerd via digitale handtekeningen' },
        { term: 'Digitale handtekening', definition: 'Aangemaakt door een hash te versleutelen met een private sleutel; bewijst authenticiteit én integriteit' },
        { term: 'Perfect Forward Secrecy (PFS)', definition: 'Sessiesleutels worden per sessie onafhankelijk gegenereerd zodat compromittering van langetermijnsleutels oude sessies niet blootlegt' },
        { term: 'Mantrap', definition: 'Fysiek security-control met twee vergrendelde deuren — slechts één tegelijk open — voorkomt tailgating' },
        { term: 'Preventive control', definition: 'Security-control die incidenten vooraf probeert te voorkomen (bijv. firewalls, toegangscontrole)' },
        { term: 'Detective control', definition: 'Security-control die security-gebeurtenissen identificeert en meldt (bijv. IDS, camera\'s, loganalyse)' },
        { term: 'Corrective control', definition: 'Security-control die schade na een security-event beperkt of herstelt (bijv. back-ups, patchbeheer)' },
        { term: 'Compensating control', definition: 'Alternatieve control die gebruikt wordt als het primaire control niet haalbaar is' },
        { term: 'Administrative control', definition: 'Security-controls gebaseerd op beleid, procedures en richtlijnen (bijv. security-training, acceptable use policy)' },
        { term: 'Steganografie', definition: 'Het verbergen van geheime data in gewone, niet-geheime bestanden of berichten' },
        { term: 'Kerckhoffs\' principe', definition: 'Cryptografisch principe: een systeem moet veilig zijn ook als alles — behalve de sleutel — publiek bekend is' }
      ]
    },
    {
      id: 'threats-vulnerabilities',
      title: 'Threats, Vulnerabilities & Mitigations',
      weight: 22,
      lesson: {
        overview: 'Het zwaarst gewogen domein van Security+. Je leert aanvalstypen (phishing, malware, social engineering), kwetsbaarheden classificeren via CVSS, de OWASP Top 10 webkwetsbaarheden, en hoe aanvallen zoals supply chain attacks en credential stuffing werken. Dit domein is direct toepasbaar in dagelijkse security-werkzaamheden.',
        keyPoints: [
          'Social engineering: phishing (e-mail), spear phishing (gericht), whaling (executives), vishing (telefoon), smishing (sms)',
          'Malware: virus (bestand infects), worm (netwerk zichzelf), ransomware (versleutelt + losgeld), trojan (vermomd), rootkit (verbergt zichzelf), RAT (remote control), logic bomb (trigger-gebaseerd)',
          'Zero-day: kwetsbaarheid onbekend bij vendor — geen patch beschikbaar; zero = dagen die vendor heeft gehad',
          'CVSS base score: meet intrinsieke eigenschappen van kwetsbaarheid onafhankelijk van tijd en omgeving (0-10)',
          'OWASP Top 10: SQL Injection, XSS, IDOR, Broken Auth, SSRF, XXE, Security Misconfiguration, CSRF, etc.',
          'Supply chain attack: aanvaller comprometteert distributiekanaal (update-server, bibliotheek) om eindgebruikers te bereiken',
          'Credential stuffing: eerder gelekte gebruikersnaam/wachtwoord-combinaties geautomatiseerd proberen op andere diensten',
          'Man-in-the-Middle (MitM): aanvaller onderschept én kan communicatie wijzigen tussen twee partijen',
          'Watering hole: legitieme websites gecompromitteerd die door de doelgroep bezocht worden',
          'APT (Advanced Persistent Threat): geavanceerde, langdurige aanval door goed gefinancierde actor (vaak staatsgesponsord)'
        ],
        studyTip: 'Leer social engineering-typen uit je hoofd: phishing → e-mail, vishing → voice, smishing → sms, whaling → executives. Het examen test welk type bij welk scenario past. Ken ook het verschil tussen een incident (gebeurtenis) en een kwetsbaarheid (zwakheid).'
      },
      questions: [
        {
          id: 'tv-1',
          domain: 'threats-vulnerabilities',
          question: 'Een aanvaller stuurt gerichte phishing-e-mails naar de CFO van een groot bedrijf waarbij hij de CEO imiteert. Dit is het BEST omschreven als:',
          options: ['Phishing', 'Smishing', 'Vishing', 'Whaling'],
          correct: 3,
          explanation: 'Whaling is een spear-phishing aanval gericht op hooggeplaatste personen (executives). CEO-fraude richting CFO is het klassieke whaling-scenario.'
        },
        {
          id: 'tv-2',
          domain: 'threats-vulnerabilities',
          question: 'Een zero-day kwetsbaarheid is het BEST omschreven als:',
          options: [
            'Een kwetsbaarheid die gepatcht is maar nog niet uitgerold',
            'Een kwetsbaarheid die onbekend is bij de vendor zonder beschikbare patch',
            'Een kwetsbaarheid die precies om middernacht ontdekt werd',
            'Een kwetsbaarheid die nul technische kennis vereist om te exploiteren'
          ],
          correct: 1,
          explanation: 'Een zero-day is een eerder onbekende kwetsbaarheid. \'Zero days\' verwijst naar het aantal dagen dat de vendor heeft gehad om het te repareren — namelijk nul.'
        },
        {
          id: 'tv-3',
          domain: 'threats-vulnerabilities',
          question: 'Een aanvaller onderschept en wijzigt communicatie tussen twee partijen zonder dat één van hen het weet. Dit heet:',
          options: ['Replay attack', 'Man-in-the-Middle (MitM) attack', 'Eavesdropping', 'Session hijacking'],
          correct: 1,
          explanation: 'MitM-aanvallen positioneren de aanvaller tussen twee communicerende partijen, waardoor zowel onderschepping als wijziging mogelijk is. Eavesdropping is passief (geen wijziging).'
        },
        {
          id: 'tv-4',
          domain: 'threats-vulnerabilities',
          question: 'Welke OWASP Top 10 kwetsbaarheid stelt een aanvaller in staat kwaadaardige SQL-code in een query te injecteren?',
          options: ['Cross-Site Scripting (XSS)', 'Broken Authentication', 'SQL Injection', 'Server-Side Request Forgery (SSRF)'],
          correct: 2,
          explanation: 'SQL Injection voegt kwaadaardige SQL in applicatiequeries in. XSS injecteert client-side scripts. SSRF laat de server verzoeken doen naar interne resources.'
        },
        {
          id: 'tv-5',
          domain: 'threats-vulnerabilities',
          question: 'Malware die bestanden van slachtoffers versleutelt en betaling eist voor de ontsleutelingssleutel heet:',
          options: ['Rootkit', 'Ransomware', 'Trojan', 'Logic bomb'],
          correct: 1,
          explanation: 'Ransomware versleutelt data en eist losgeld. Rootkits bieden persistente onbevoegde toegang. Trojans vermommen kwaadaardige code als legitieme software. Logic bombs voeren acties uit bij een triggersgebeurtenis.'
        },
        {
          id: 'tv-6',
          domain: 'threats-vulnerabilities',
          question: 'Een aanvaller comprometteert een legitieme software-updateserver en verspreidt malware via routineupdates. Dit is:',
          options: ['Zero-day aanval', 'Watering hole aanval', 'Supply chain aanval', 'Insider threat'],
          correct: 2,
          explanation: 'Supply chain attacks compromitteren het distributiekanaal van software (bouwsystemen, updateservers, bibliotheken van derden) om eindgebruikers te bereiken.'
        },
        {
          id: 'tv-7',
          domain: 'threats-vulnerabilities',
          question: 'Credential stuffing maakt gebruik van:',
          options: [
            'Brute force om willekeurige wachtwoorden te raden',
            'Eerder gelekte gebruikersnaam/wachtwoord-combinaties op andere diensten',
            'Rainbow tables om wachtwoord-hashes te kraken',
            'Social engineering om wachtwoorden direct te verkrijgen'
          ],
          correct: 1,
          explanation: 'Credential stuffing automatiseert inlogpogingen met inloggegevens uit eerdere datalekken, waarbij misbruik wordt gemaakt van hergebruik van wachtwoorden.'
        },
        {
          id: 'tv-8',
          domain: 'threats-vulnerabilities',
          question: 'Welke kwetsbaarheid stelt een aanvaller in staat kwaadaardige scripts te injecteren in webpagina\'s die andere gebruikers bekijken?',
          options: ['SQL Injection', 'IDOR', 'CSRF', 'Cross-Site Scripting (XSS)'],
          correct: 3,
          explanation: 'XSS injecteert client-side scripts die in browsers van slachtoffers worden uitgevoerd. IDOR geeft onbevoegde toegang tot objecten. CSRF misleidt gebruikers om onbedoelde verzoeken te doen.'
        },
        {
          id: 'tv-9',
          domain: 'threats-vulnerabilities',
          question: 'Een CVSS base score meet:',
          options: [
            'De kans op exploitatie in de komende 30 dagen',
            'De intrinsieke eigenschappen van een kwetsbaarheid onafhankelijk van tijd en omgeving',
            'De kosten van herstel',
            'Het vaardigheidsniveau dat een aanvaller nodig heeft'
          ],
          correct: 1,
          explanation: 'CVSS base scores meten fundamentele kwetsbaarheidseigenschappen (exploiteerbaarheid, impact) die niet veranderen met de tijd of omgeving. Temporal scores verrekenen tijd; environmental scores verrekenen de specifieke omgeving.'
        },
        {
          id: 'tv-10',
          domain: 'threats-vulnerabilities',
          question: 'Een rootkit is het BEST omschreven als:',
          options: [
            'Malware die zich over netwerken repliceert zonder gebruikersinteractie',
            'Software die zijn aanwezigheid en andere kwaadaardige processen verbergt voor het besturingssysteem',
            'Een programma dat ongewenste advertenties toont',
            'Malware die wordt uitgevoerd wanneer een specifieke conditie wordt bereikt'
          ],
          correct: 1,
          explanation: 'Rootkits bereiken stealth door het OS te ondermijnen om hun aanwezigheid te verbergen — bestanden, processen en netwerkverbindingen worden onzichtbaar voor standaard tools.'
        }
      ],
      flashcards: [
        { term: 'Phishing', definition: 'Massa-e-mail gebaseerde social engineering aanval die gebruikers misleidt om inloggegevens te onthullen of malware te installeren' },
        { term: 'Spear Phishing', definition: 'Gerichte phishing-aanval op maat gemaakt voor een specifiek individu of organisatie' },
        { term: 'Whaling', definition: 'Spear phishing gericht op hooggeplaatste executives (C-suite) — de "grote vis"' },
        { term: 'Vishing', definition: 'Voice phishing — social engineering via telefoongesprek' },
        { term: 'Smishing', definition: 'SMS phishing — social engineering via tekstbericht' },
        { term: 'Zero-Day kwetsbaarheid', definition: 'Een beveiligingsfout die onbekend is bij de vendor — geen patch beschikbaar; zero = dagen die vendor had om te reageren' },
        { term: 'CVE', definition: 'Common Vulnerabilities and Exposures — gestandaardiseerde lijst van publiek bekende cyberkwetsbaarheden' },
        { term: 'CVSS', definition: 'Common Vulnerability Scoring System — raamwerk voor het beoordelen van kwetsbaarheidsernst (schaal 0-10)' },
        { term: 'Ransomware', definition: 'Malware die bestanden van slachtoffers versleutelt en betaling eist voor de ontsleutelingssleutel' },
        { term: 'Rootkit', definition: 'Malware die zijn aanwezigheid en andere kwaadaardige processen verbergt voor het besturingssysteem' },
        { term: 'RAT (Remote Access Trojan)', definition: 'Malware die aanvallers op afstand controle geeft over een geïnfecteerd systeem' },
        { term: 'Logic Bomb', definition: 'Malware die wordt uitgevoerd wanneer een specifieke conditie of triggersgebeurtenis plaatsvindt' },
        { term: 'Worm', definition: 'Zichzelf replicerende malware die zich over netwerken verspreidt zonder gebruikersinteractie' },
        { term: 'Supply Chain Attack', definition: 'Compromittering van een vertrouwde leverancier of distributiekanaal om malware aan eindgebruikers te leveren' },
        { term: 'Credential Stuffing', definition: 'Gebruik van eerder gelekte gebruikersnaam/wachtwoord-paren in geautomatiseerde inlogpogingen op andere diensten' },
        { term: 'SQL Injection', definition: 'Injecteren van kwaadaardige SQL-code in applicatie-input om databasequery\'s te manipuleren' },
        { term: 'Cross-Site Scripting (XSS)', definition: 'Injecteren van kwaadaardige client-side scripts in webpagina\'s die door andere gebruikers worden bekeken' },
        { term: 'CSRF', definition: 'Cross-Site Request Forgery — een geauthenticeerde gebruiker misleiden om een onbedoeld verzoek te doen' },
        { term: 'Man-in-the-Middle (MitM)', definition: 'Aanvaller onderschept en wijzigt in het geheim communicatie tussen twee partijen' },
        { term: 'Watering Hole Attack', definition: 'Compromittering van websites die regelmatig door een doelgroep worden bezocht om bezoekers te infecteren' }
      ]
    },
    {
      id: 'security-architecture',
      title: 'Security Architecture',
      weight: 18,
      lesson: {
        overview: 'Dit domein behandelt het ontwerp van veilige netwerken en systemen. Je leert over netwerksegmentatie (DMZ, VLAN, micro-segmentatie), cloud-beveiligingsmodellen (IaaS, PaaS, SaaS en het shared responsibility model), Zero Trust-architectuur, en hoe VPN-types en firewalls werken. Steeds meer examenonderwerpen zijn cloud-gericht.',
        keyPoints: [
          'DMZ (Demilitarized Zone): netwerksegment tussen internet en intern netwerk voor publieke diensten (webserver, DNS, e-mail)',
          'Zero Trust: "never trust, always verify" — geen impliciete vertrouwen op basis van netwerklocatie',
          'Defense in depth: meerdere overlappende security-lagen zodat falen van één laag geen breach veroorzaakt',
          'IaaS: provider beheert hardware; klant beheert OS, applicaties, data en security daarboven',
          'PaaS: provider beheert hardware + OS + runtime; klant beheert applicaties en data',
          'SaaS: provider beheert alles; klant beheert alleen data en toegang',
          'Micro-segmentatie: fijnmazige segmentatie op workload/VM-niveau om laterale beweging te beperken',
          'Air gap: fysieke of logische isolatie van systemen — geen netwerkverbinding',
          'SASE: convergeert SD-WAN met cloud-geleverde security (CASB, ZTNA, FWaaS, SWG)',
          'Bastion host: geharde publiek-toegankelijke server voor beveiligde toegang tot interne systemen'
        ],
        studyTip: 'Het shared responsibility model is een veelgesteld examenonderwerp. Onthoud: hoe hoger de service laag (IaaS → PaaS → SaaS), hoe meer de provider beheert. In SaaS beheert de klant alleen data en identiteit.'
      },
      questions: [
        {
          id: 'sa-1',
          domain: 'security-architecture',
          question: 'Een DMZ (Demilitarized Zone) dient PRIMAIR om:',
          options: [
            'Interne gebruikers van elkaar te isoleren',
            'Publiek toegankelijke diensten te hosten terwijl het interne netwerk beschermd blijft',
            'VPN-verbindingen te beëindigen voor intern verkeer',
            'Al het inkomende en uitgaande verkeer te monitoren'
          ],
          correct: 1,
          explanation: 'De DMZ is een netwerksegment tussen internet en intern netwerk, voor het hosten van publieke servers (web, e-mail, DNS) terwijl gevoelige interne systemen achter een extra firewall blijven.'
        },
        {
          id: 'sa-2',
          domain: 'security-architecture',
          question: 'Zero Trust-architectuur is gebaseerd op welk kernprincipe?',
          options: [
            'Vertrouw maar verifieer alle interne gebruikers',
            'Nooit vertrouwen, altijd verifiëren — ongeacht netwerklocatie',
            'Vertrouw al het verkeer dat van binnen de bedrijfsperimeter komt',
            'Eenmalig verifiëren bij de perimeter, daarna vertrouwen gedurende de sessie'
          ],
          correct: 1,
          explanation: 'Zero Trust elimineert het concept van een vertrouwde perimeter. Elk verzoek wordt geauthenticeerd, geautoriseerd en continu gevalideerd ongeacht de herkomst.'
        },
        {
          id: 'sa-3',
          domain: 'security-architecture',
          question: 'In het shared responsibility model voor cloudbeveiliging: wie is verantwoordelijk voor het beveiligen van de fysieke datacenterinfrastructuur in IaaS?',
          options: ['De klant', 'Een externe auditor', 'De cloudserviceprovider', 'Zowel klant als provider gelijkelijk'],
          correct: 2,
          explanation: 'In IaaS is de provider verantwoordelijk voor fysieke infrastructuur, hypervisor en netwerkhardware. De klant is verantwoordelijk voor het OS, applicaties en data.'
        },
        {
          id: 'sa-4',
          domain: 'security-architecture',
          question: 'Wat is het doel van netwerk-micro-segmentatie?',
          options: [
            'Het aantal IP-adressen op een netwerk verminderen',
            'Het netwerk in kleinere zones verdelen met individuele security-controls, waardoor laterale beweging wordt beperkt',
            'Netwerkverkeer comprimeren voor betere prestaties',
            'Afzonderlijke VLAN\'s toewijzen uitsluitend aan draadloze apparaten'
          ],
          correct: 1,
          explanation: 'Micro-segmentatie creëert fijnmazige beveiligingszones, vaak op workload/VM-niveau. Als een aanvaller één segment comprometteert, kan hij niet vrij lateraal bewegen naar andere segmenten.'
        },
        {
          id: 'sa-5',
          domain: 'security-architecture',
          question: 'Welke van de volgende beschrijft defense in depth het BEST?',
          options: [
            'Gebruik van één zeer sterke perimeterfirewall',
            'Implementatie van meerdere overlappende security-controls zodat falen van één de beveiliging niet comprometteert',
            'Alle data versleutelen in rust en in transit',
            'Multi-factor authenticatie vereisen voor alle gebruikers'
          ],
          correct: 1,
          explanation: 'Defense in depth laagt security-controls (preventief, detectief, correctief) op meerdere niveaus — perimeter, netwerk, host, applicatie, data — zodat geen enkele mislukking een breach veroorzaakt.'
        },
        {
          id: 'sa-6',
          domain: 'security-architecture',
          question: 'Een organisatie gebruikt aparte netwerken voor IT en OT (Operational Technology) zonder directe connectiviteit. Dit heet:',
          options: ['VPN tunneling', 'Defense in depth', 'Air gapping', 'Network Address Translation'],
          correct: 2,
          explanation: 'Een air gap isoleert gevoelige systemen (OT, geclassificeerde netwerken) fysiek of logisch van andere netwerken door alle connectiviteitspaden te verwijderen.'
        },
        {
          id: 'sa-7',
          domain: 'security-architecture',
          question: 'SASE (Secure Access Service Edge) combineert:',
          options: [
            'SIEM en SOAR-mogelijkheden',
            'Firewall en IDS/IPS',
            'WAN-netwerkmogelijkheden met cloud-geleverde security-diensten',
            'Eindpuntbescherming en mobile device management'
          ],
          correct: 2,
          explanation: 'SASE convergeert SD-WAN met cloud-geleverde security-diensten (CASB, SWG, ZTNA, FWaaS) in één servicemodel — relevant voor gedistribueerde werknemers.'
        },
        {
          id: 'sa-8',
          domain: 'security-architecture',
          question: 'Een bastion host is:',
          options: [
            'Een server voor back-upsystemen',
            'Een geharde publiek-toegankelijke server die beveiligde toegang tot een privénetwerk biedt',
            'Een honeypot ontworpen om aanvallers aan te trekken',
            'Een server met IDS-software'
          ],
          correct: 1,
          explanation: 'Een bastion host is een speciaal geharde publiek-toegankelijke server (vaak een jump server of gateway) waardoor beheerders toegang krijgen tot interne systemen, met minimale blootstelling.'
        },
        {
          id: 'sa-9',
          domain: 'security-architecture',
          question: 'Software-defined networking (SDN) scheidt de:',
          options: [
            'Datalaag van de applicatielaag',
            'Control plane van de data/forwarding plane',
            'Physical layer van de data link layer',
            'Transport layer van de sessielaag'
          ],
          correct: 1,
          explanation: 'SDN ontkoppelt de control plane (routing/beleidsbeslissingen) van de data plane (pakketverzending), centraliseert netwerkbeheer en maakt programmatische controle mogelijk.'
        },
        {
          id: 'sa-10',
          domain: 'security-architecture',
          question: 'Welk VPN-protocol wordt het meest gebruikt voor externe toegang vanwege sterke beveiliging en doorvoer door firewalls?',
          options: ['PPTP', 'L2TP/IPSec', 'SSL/TLS VPN', 'OpenVPN'],
          correct: 2,
          explanation: 'SSL/TLS VPN\'s (zoals Cisco AnyConnect) werken via HTTPS (poort 443) en passeren de meeste firewalls eenvoudig. PPTP is verouderd. SSL VPN = clientless/web-gebaseerde of TLS-getunnelde toegang.'
        }
      ],
      flashcards: [
        { term: 'DMZ (Demilitarized Zone)', definition: 'Netwerksegment tussen internet en intern netwerk voor het hosten van publiek toegankelijke diensten' },
        { term: 'Zero Trust', definition: 'Beveiligingsmodel: nooit vertrouwen, altijd verifiëren — geen impliciete vertrouwen op basis van netwerklocatie' },
        { term: 'Defense in Depth', definition: 'Meerdere overlappende security-lagen toepassen zodat falen van één laag de beveiliging niet comprometteert' },
        { term: 'Air Gap', definition: 'Fysieke of logische isolatie van een systeem door alle netwerkconnectiviteit te verwijderen' },
        { term: 'VLAN', definition: 'Virtual Local Area Network — logische netwerksegmentatie binnen fysieke switch-infrastructuur' },
        { term: 'Micro-segmentatie', definition: 'Fijnmazige netwerksegmentatie op workload/VM-niveau om laterale beweging te beperken' },
        { term: 'Bastion Host', definition: 'Een geharde, doelspecifieke server toegankelijk via internet die beveiligde toegang biedt tot interne systemen' },
        { term: 'IaaS', definition: 'Infrastructure as a Service — provider beheert fysieke infrastructuur; klant beheert OS en alles daarboven' },
        { term: 'PaaS', definition: 'Platform as a Service — provider beheert infrastructuur + OS + runtime; klant beheert applicaties en data' },
        { term: 'SaaS', definition: 'Software as a Service — provider beheert alles; klant beheert alleen data en toegang' },
        { term: 'SASE', definition: 'Secure Access Service Edge — convergeert SD-WAN met cloud-geleverde security (CASB, ZTNA, FWaaS, SWG)' },
        { term: 'VPN', definition: 'Virtual Private Network — versleutelde tunnel over een publiek netwerk voor veilige externe connectiviteit' },
        { term: 'IPSec', definition: 'Internet Protocol Security — protocolsuite voor het authenticeren en versleutelen van IP-pakketten' },
        { term: 'TLS', definition: 'Transport Layer Security — cryptografisch protocol voor veilige communicatie over netwerken (vervangt SSL)' },
        { term: 'WAF (Web Application Firewall)', definition: 'Filtert en monitort HTTP-verkeer tussen webapplicatie en internet, blokkeert webaanvallen' },
        { term: 'NGFW (Next-Generation Firewall)', definition: 'Firewall met deep packet inspection, applicatiebewustzijn, IPS en integratie van threat intelligence' },
        { term: 'Software-Defined Networking (SDN)', definition: 'Ontkoppelt control plane van data plane, maakt gecentraliseerde programmatische netwerkcontrole mogelijk' },
        { term: 'Infrastructure as Code (IaC)', definition: 'Beheer van infrastructuur via machine-leesbare configuratiebestanden (Terraform, Ansible)' },
        { term: 'Netwerksegmentatie', definition: 'Netwerk opsplitsen in subnetwerken om prestaties en beveiliging te verbeteren' },
        { term: 'Proxyserver', definition: 'Intermediair tussen clients en servers — kan verkeer filteren, content cachen en verzoeken anonimiseren' }
      ]
    },
    {
      id: 'security-operations',
      title: 'Security Operations',
      weight: 28,
      lesson: {
        overview: 'Het zwaarst gewogen domein met 28%. Hier draait het om de dagelijkse uitvoering van security: incident response, SIEM, digitale forensics, kwetsbaarhedenbeheer, en tools zoals EDR en SIEM. Je leert de volgorde van incident response (NIST-model), hoe forensisch bewijs correct wordt verzameld (chain of custody, volatility order), en het verschil tussen vulnerability scanning en penetration testing.',
        keyPoints: [
          'NIST incident response lifecycle: Preparation → Detection/Analysis → Containment → Eradication → Recovery → Post-Incident Activity',
          'SIEM: log-aggregatie, correlatie en alertering — detecteert maar handhaaft niet zelf',
          'EDR: continu eindpuntmonitoring met gedragsanalyse en actieve reactiemogelijkheden — verder dan traditionele antivirussoftware',
          'Chain of custody: gedocumenteerde, ongebroken keten van wie bewijs aanraakte, wanneer en wat er gedaan is',
          'Order of volatility: CPU-cache → RAM → Swap → Netwerkstatus → Draaiende processen → Disk → Archief (meest vluchtig eerst verzamelen)',
          'Honeypot: lokvalsysteem om aanvallen te detecteren en te bestuderen; honeynet: netwerk van honeypots',
          'Threat hunting: proactief zoeken naar bedreigingen die automatische detectie hebben omzeild',
          'Penetration testing: geautoriseerde simulatie van aanvallen om kwetsbaarheden te exploiteren en echte impact aan te tonen',
          'Vulnerability scanning: automatisch identificeren en rapporteren van potentiële kwetsbaarheden — geen exploitatie',
          'Tabletop exercise: discussiegebaseerde security-drill zonder echte systemen te testen'
        ],
        studyTip: 'Onthoud de NIST IR-fasen in volgorde. Het examen vraagt regelmatig "welke fase volgt na X?". Na Containment komt Eradication, daarna Recovery. Chain of custody en volatility order zijn ook veelgestelde onderwerpen in forensics-vragen.'
      },
      questions: [
        {
          id: 'so-1',
          domain: 'security-operations',
          question: 'In de NIST incident response lifecycle: welke fase volgt onmiddellijk na Containment?',
          options: ['Identification', 'Eradication', 'Recovery', 'Lessons Learned'],
          correct: 1,
          explanation: 'NIST IR-fasen: Preparation → Detection/Analysis → Containment → Eradication → Recovery → Post-Incident Activity. Eradication verwijdert de bedreiging; Recovery herstelt de operaties.'
        },
        {
          id: 'so-2',
          domain: 'security-operations',
          question: 'Een SIEM-systeem voert PRIMAIR welke functies uit?',
          options: [
            'Eindpunten scannen op malware en netwerkverkeer blokkeren',
            'Logs aggregeren en correleren van meerdere bronnen om alerts te genereren',
            'Kwetsbaarheden patchen en beveiligingsbeleid handhaven',
            'Gebruikersidentiteiten en toegangsrechten beheren'
          ],
          correct: 1,
          explanation: 'SIEM (Security Information and Event Management) centraliseert log-verzameling, correleert events over systemen en genereert alerts op basis van detectieregels — het is een aggregatie- en analysetool, geen handhavingstool.'
        },
        {
          id: 'so-3',
          domain: 'security-operations',
          question: 'Chain of custody in digitale forensics zorgt ervoor dat:',
          options: [
            'Bewijs versleuteld is tijdens analyse',
            'Bewijs verzameld is via de snelste methode',
            'Er een gedocumenteerde, ongebroken registratie is van wie bewijs aanraakte en wanneer',
            'Bewijs alleen door senior onderzoekers geanalyseerd wordt'
          ],
          correct: 2,
          explanation: 'Chain of custody documenteert elke persoon die het bewijs aanraakte, wanneer en wat er gedaan is — dit waarborgt de integriteit van bewijs en juridische toelaatbaarheid.'
        },
        {
          id: 'so-4',
          domain: 'security-operations',
          question: 'Bij het verzamelen van vluchtig digitaal bewijs: welke bron moet EERST worden verzameld volgens de volatility order?',
          options: ['Harde schijf', 'Gearchiveerde logs', 'CPU-cache en registers', 'Swap-ruimte'],
          correct: 2,
          explanation: 'Volatility order (meest vluchtig eerst): CPU-cache/registers → RAM → Swap → Netwerkstatus → Draaiende processen → Schijf → Gearchiveerde logs. Meer vluchtige data verdwijnt sneller.'
        },
        {
          id: 'so-5',
          domain: 'security-operations',
          question: 'EDR (Endpoint Detection and Response) verschilt van traditionele antivirussoftware doordat het:',
          options: [
            'Alleen bestanden scant wanneer ze gedownload worden',
            'Uitsluitend op handtekening-gebaseerde detectie vertrouwt',
            'Continue monitoring, gedragsanalyse en actieve reactiemogelijkheden biedt',
            'De netwerkperimeter beschermt in plaats van individuele eindpunten'
          ],
          correct: 2,
          explanation: 'Traditionele AV gebruikt handtekening-gebaseerde detectie. EDR voegt gedragsmonitoring, threat hunting, incidentonderzoek en geautomatiseerde respons toe — continu, niet scan-gebaseerd.'
        },
        {
          id: 'so-6',
          domain: 'security-operations',
          question: 'Een honeynet is:',
          options: [
            'Één lokvalsserver ontworpen om aanvallers aan te trekken',
            'Een netwerk van honeypots ontworpen om aanvallersgedrag te bestuderen',
            'Een IDS-handtekeningdatabase',
            'Een type firewall-regel die kwaadaardig verkeer opvangt'
          ],
          correct: 1,
          explanation: 'Een honeypot is één lokvalsysteem; een honeynet is een netwerk van honeypots dat een realistische omgeving creëert voor het bestuderen van aanvalstechnieken en verzamelen van threat intelligence.'
        },
        {
          id: 'so-7',
          domain: 'security-operations',
          question: 'Threat hunting is het BEST omschreven als:',
          options: [
            'Geautomatiseerd malware-scannen op een schema',
            'Reageren op alerts gegenereerd door de SIEM',
            'Proactief zoeken naar bedreigingen die automatische detectie hebben omzeild',
            'AI gebruiken om netwerkverkeer in real-time te blokkeren'
          ],
          correct: 2,
          explanation: 'Threat hunting is proactief — hunters formuleren hypothesen en zoeken handmatig naar indicators of compromise die geautomatiseerde tools hebben gemist. Het is niet reactief (alert-respons) of passief (geplande scans).'
        },
        {
          id: 'so-8',
          domain: 'security-operations',
          question: 'Een tabletop exercise is een type:',
          options: [
            'Penetratietest uitgevoerd op een live productieomgeving',
            'Discussiegebaseerde security-drill waarbij deelnemers doorspreken hoe ze op een gesimuleerd scenario reageren',
            'Red team-engagement met volledige aanvalssimulatie',
            'Kwetsbaarhedenscan uitgevoerd door een geautomatiseerd tool'
          ],
          correct: 1,
          explanation: 'Tabletop exercises zijn kosteneffectieve discussiegebaseerde trainingen waarbij teams doorlopen hoe ze op een incidentscenario zouden reageren — geen systemen worden echt getest.'
        },
        {
          id: 'so-9',
          domain: 'security-operations',
          question: 'Het PRIMAIRE verschil tussen een kwetsbaarhedenscan en een penetratietest is:',
          options: [
            'Kwetsbaarheidsscans vereisen meer technische kennis',
            'Penetratietests zijn altijd geautomatiseerd; kwetsbaarheidsscans zijn handmatig',
            'Kwetsbaarheidsscans identificeren potentiële zwakheden; penetratietests proberen actief deze te exploiteren',
            'Alleen penetratietests kunnen bekende kwetsbaarheden detecteren'
          ],
          correct: 2,
          explanation: 'Vulnerability scanning identificeert en rapporteert potentiële kwetsbaarheden. Penetration testing gaat verder — geautoriseerde testers proberen kwetsbaarheden daadwerkelijk te exploiteren om echte impact aan te tonen.'
        },
        {
          id: 'so-10',
          domain: 'security-operations',
          question: 'Welke forensische techniek gebruikt wiskundige functies om te verifiëren dat een bestand niet is gewijzigd na verzameling?',
          options: ['Steganografie', 'Bit-stream imaging', 'Hashing', 'Chain of custody'],
          correct: 2,
          explanation: 'Hashfuncties (MD5, SHA-256) genereren een unieke vingerafdruk van data. Als een bit verandert, verandert de hash — forensisch onderzoekers hashen bewijs bij verzameling en verifiëren dat de hash ongewijzigd blijft gedurende de analyse.'
        }
      ],
      flashcards: [
        { term: 'Incident Response Lifecycle (NIST)', definition: 'Preparation → Detection/Analysis → Containment → Eradication → Recovery → Post-Incident Activity' },
        { term: 'SIEM', definition: 'Security Information and Event Management — log-aggregatie, correlatie en alerteringsplatform' },
        { term: 'SOC', definition: 'Security Operations Center — gecentraliseerd team dat security-events monitort en erop reageert' },
        { term: 'EDR', definition: 'Endpoint Detection and Response — continu eindpuntmonitoring met gedragsanalyse en reactiemogelijkheden' },
        { term: 'XDR', definition: 'Extended Detection and Response — EDR uitgebreid met netwerk, cloud, e-mail en identiteitsdatabronnen' },
        { term: 'Chain of Custody', definition: 'Gedocumenteerde registratie van wie bewijs aanraakte, wanneer en wat er gedaan is — waarborgt forensische integriteit' },
        { term: 'Order of Volatility', definition: 'Volgorde voor het verzamelen van bewijs op basis van hoe snel het verdwijnt: CPU-cache → RAM → Swap → Schijf → Archief' },
        { term: 'Honeypot', definition: 'Een lokvalsysteem ontworpen om aanvallersgedrag te detecteren en bestuderen' },
        { term: 'Honeynet', definition: 'Een netwerk van honeypots dat een realistische misleidende omgeving creëert voor het bestuderen van aanvallen' },
        { term: 'Threat Hunting', definition: 'Proactief zoeken naar bedreigingen die automatische detectietools hebben gemist' },
        { term: 'Indicators of Compromise (IOC)', definition: 'Bewijs van een potentiële inbreuk: kwaadaardige IP\'s, hashes, domeinen, bestandsnamen' },
        { term: 'Threat Intelligence', definition: 'Informatie over bedreigingen, actoren en TTPs gebruikt om verdedigingen te verbeteren' },
        { term: 'Penetration Testing', definition: 'Geautoriseerde gesimuleerde aanval op een systeem om exploiteerbare kwetsbaarheden te identificeren' },
        { term: 'Vulnerability Scanning', definition: 'Geautomatiseerd identificeren en rapporteren van potentiële kwetsbaarheden (geen exploitatie)' },
        { term: 'Tabletop Exercise', definition: 'Discussiegebaseerde security-drill waarbij teams doorpraten hoe ze op een gesimuleerd scenario reageren' },
        { term: 'BCP (Business Continuity Plan)', definition: 'Plan dat kritieke bedrijfsfuncties tijdens en na een verstoring laat doorgaan' },
        { term: 'DRP (Disaster Recovery Plan)', definition: 'Plan voor het herstellen van IT-systemen en data na een ramp' },
        { term: 'Bit-Stream Image', definition: 'Een exacte sector-voor-sector kopie van een opslagapparaat voor forensische analyse' },
        { term: 'Memory Forensics', definition: 'Analyse van het RAM van een systeem om draaiende processen, versleutelingssleutels en netwerkverbindingen te achterhalen' },
        { term: 'Logbeheer', definition: 'Verzameling, bewaring en analyse van systeem- en security-logs' }
      ]
    },
    {
      id: 'program-management',
      title: 'Security Program Management & Oversight',
      weight: 20,
      lesson: {
        overview: 'Dit domein behandelt de organisatorische kant van security: governance, risicobeheer, compliance en data-classificatie. Je leert frameworks zoals NIST CSF en ISO 27001, hoe risico kwantitatief te berekenen (ALE = SLE × ARO), het verschil tussen RTO en RPO, en wat GDPR, PCI-DSS en HIPAA van organisaties vragen. Dit is het "management" domein — minder technisch, maar zwaar gewogen.',
        keyPoints: [
          'NIST CSF 1.1: Identify, Protect, Detect, Respond, Recover (CSF 2.0 voegt Govern toe)',
          'ISO/IEC 27001: internationale standaard voor Information Security Management Systems (ISMS) — certificeerbaar',
          'RTO (Recovery Time Objective): maximale herstel-tijd na verstoring',
          'RPO (Recovery Point Objective): maximale dataverlies gemeten in tijd',
          'BIA (Business Impact Analysis): identificeert kritieke processen en de impact van verstoring — bepaalt RTO en RPO',
          'ALE = SLE × ARO: Annual Loss Expectancy = Single Loss Expectancy × Annual Rate of Occurrence',
          'Risico-strategieën: Accept (aanvaarden), Avoid (vermijden), Mitigate (beperken), Transfer (overdragen — verzekering)',
          'Data-classificatie: Publiek → Intern → Vertrouwelijk → Beperkt/Geheim',
          'GDPR: datalekken melden binnen 72 uur; doelbinding; dataminimalisatie; recht op vergetelheid',
          'SOC 2: auditstandaard voor cloudproviders — beoordeelt controls op security, beschikbaarheid, integriteit, vertrouwelijkheid, privacy'
        ],
        studyTip: 'Ken het verschil tussen RTO en RPO — dit is een klassieker. RTO = hoe lang duurt herstel; RPO = hoeveel dataverlies is acceptabel (tijd). Leer ook de NIST CSF-functies uit je hoofd: Identify, Protect, Detect, Respond, Recover.'
      },
      questions: [
        {
          id: 'pm-1',
          domain: 'program-management',
          question: 'Het NIST Cybersecurity Framework (CSF) bestaat uit vijf kernfuncties. Welke van de volgende is GEEN van hen?',
          options: ['Identify', 'Protect', 'Remediate', 'Respond'],
          correct: 2,
          explanation: 'NIST CSF 1.1 functies: Identify, Protect, Detect, Respond, Recover. \'Remediate\' is geen CSF-functie. CSF 2.0 voegde \'Govern\' toe.'
        },
        {
          id: 'pm-2',
          domain: 'program-management',
          question: 'Een Business Impact Analysis (BIA) wordt uitgevoerd om:',
          options: [
            'Identificeren welke medewerkers het grootste security-risico vormen',
            'De financiële en operationele impact van verstoringen van kritieke bedrijfsprocessen te bepalen',
            'Compliance van leveranciers met security-eisen te auditen',
            'De risicobereidheid van de organisatie vast te stellen'
          ],
          correct: 1,
          explanation: 'Een BIA identificeert kritieke bedrijfsfuncties, bepaalt de impact van verstoringen (financieel, operationeel, reputatie) en stelt RTO\'s en RPO\'s vast — essentieel voor BCP/DR-planning.'
        },
        {
          id: 'pm-3',
          domain: 'program-management',
          question: 'De Recovery Time Objective (RTO) definieert:',
          options: [
            'De maximaal acceptabele hoeveelheid dataverlies gemeten in tijd',
            'De maximaal acceptabele tijd om een systeem of functie na verstoring te herstellen',
            'De tijd die nodig is voor een volledige back-up',
            'De totale tijd dat een systeem jaarlijks offline kan zijn'
          ],
          correct: 1,
          explanation: 'RTO = hoe lang herstel duurt (tijd om te herstellen). RPO = hoeveel dataverlies acceptabel is (gemeten door tijd sinds laatste back-up). Beide worden vastgesteld tijdens de BIA.'
        },
        {
          id: 'pm-4',
          domain: 'program-management',
          question: 'Onder GDPR: binnen hoeveel uur moet een datalek gemeld worden aan de toezichthoudende autoriteit?',
          options: ['24 uur', '72 uur', '7 dagen', '30 dagen'],
          correct: 1,
          explanation: 'GDPR Artikel 33 vereist melding aan de relevante toezichthoudende autoriteit binnen 72 uur na het bekend worden van een datalek (voor zover haalbaar). Hoog-risico lekken vereisen ook melding aan betrokkenen.'
        },
        {
          id: 'pm-5',
          domain: 'program-management',
          question: 'Welk framework regelt specifiek Information Security Management Systems (ISMS) en vereist een risicobeheeraanpak?',
          options: ['NIST SP 800-53', 'ISO/IEC 27001', 'PCI DSS', 'SOC 2'],
          correct: 1,
          explanation: 'ISO/IEC 27001 is de internationale standaard voor ISMS. Organisaties kunnen zich hierop certificeren, wat een systematische aanpak voor het beheren van informatiebeveiligingsrisico\'s aantoont.'
        },
        {
          id: 'pm-6',
          domain: 'program-management',
          question: 'Kwantitatieve risicoanalyse drukt risico uit in termen van:',
          options: [
            'Hoog-, middel- of laagbeoordelingen',
            'Kans en impact op een 5×5-matrix',
            'Monetaire waarden met metrics zoals ALE (Annual Loss Expectancy)',
            'Kleurgecodeerde heat maps'
          ],
          correct: 2,
          explanation: 'Kwantitatieve risicoanalyse gebruikt numerieke waarden. ALE = SLE × ARO (Single Loss Expectancy × Annual Rate of Occurrence). Kwalitatieve analyse gebruikt beschrijvende beoordelingen.'
        },
        {
          id: 'pm-7',
          domain: 'program-management',
          question: 'Een SOC 2-rapport is relevant wanneer:',
          options: [
            'Fysieke security-controls in een datacenter beoordelen',
            'Controls van een cloudserviceprovider evalueren op security, beschikbaarheid, verwerkingsintegriteit, vertrouwelijkheid en privacy',
            'Voldoen aan vereisten voor betaalkaartbeveiliging',
            'Een formeel ISMS implementeren in een organisatie'
          ],
          correct: 1,
          explanation: 'SOC 2 (Service Organization Control 2) is een auditstandaard voor serviceproviders, die controls evalueert aan de hand van de Trust Services Criteria — bijzonder relevant voor cloud/SaaS-providers.'
        },
        {
          id: 'pm-8',
          domain: 'program-management',
          question: 'Security awareness training heeft PRIMAIR als doel:',
          options: [
            'Medewerkers geavanceerde penetratietestvaardigheden leren',
            'Menselijke fouten als aanvalsvector reduceren door gebruikers te informeren over bedreigingen en veilig gedrag',
            'Technische security-controls vervangen',
            'De naleving van medewerkers met wachtwoordbeleid testen'
          ],
          correct: 1,
          explanation: 'Mensen zijn vaak de zwakste schakel — phishing, social engineering en onbedoeld lekken zijn menselijke fouten. Security awareness training vermindert dit risico door een security-bewuste cultuur op te bouwen.'
        },
        {
          id: 'pm-9',
          domain: 'program-management',
          question: 'Risicobereidheid (risk appetite) verwijst naar:',
          options: [
            'Het risico dat overgedragen is naar een derde partij',
            'De hoeveelheid risico die een organisatie bereid is te accepteren in het nastreven van haar doelstellingen',
            'Het resterende risico na het toepassen van controls',
            'Het maximale financiële verlies dat een organisatie kan verdragen'
          ],
          correct: 1,
          explanation: 'Risicobereidheid is een strategisch concept — hoeveel risico een organisatie proactief accepteert. Risicotolerantie is de acceptabele afwijking van die bereidheid. Resterend risico is wat overblijft na controls.'
        },
        {
          id: 'pm-10',
          domain: 'program-management',
          question: 'Data geclassificeerd als "vertrouwelijk" (confidential):',
          options: [
            'Is publiek beschikbare informatie',
            'Is alleen voor intern gebruik met geringe impact bij openbaarmaking',
            'Bevat gevoelige informatie die bij openbaarmaking aanzienlijke schade kan veroorzaken en strikte toegangscontrole vereist',
            'Is zo gevoelig dat alleen overheidsinstanties toegang mogen hebben'
          ],
          correct: 2,
          explanation: 'Typische classificatieniveaus: Publiek → Intern/Privé → Vertrouwelijk → Beperkt/Top Secret. Vertrouwelijke data veroorzaakt aanzienlijke schade bij openbaarmaking — klant-PII, financiële gegevens, handelsgeheimen.'
        }
      ],
      flashcards: [
        { term: 'NIST CSF', definition: 'Cybersecurity Framework met 5 functies: Identify, Protect, Detect, Respond, Recover (CSF 2.0: + Govern)' },
        { term: 'ISO/IEC 27001', definition: 'Internationale standaard voor Information Security Management Systems (ISMS) — certificeerbaar' },
        { term: 'GDPR', definition: 'General Data Protection Regulation — EU-verordening voor het verzamelen en verwerken van persoonsgegevens; 72 uur meldtermijn bij datalekken' },
        { term: 'PCI DSS', definition: 'Payment Card Industry Data Security Standard — eisen voor organisaties die kaartbetalingen verwerken' },
        { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act — Amerikaanse wet die medische informatieprivacy beschermt' },
        { term: 'SOC 2', definition: 'Service Organization Control 2 — auditstandaard voor cloud/serviceproviders\' security controls (Trust Services Criteria)' },
        { term: 'BIA (Business Impact Analysis)', definition: 'Beoordeling die kritieke processen identificeert en de impact van hun verstoring bepaalt — basis voor BCP/DR' },
        { term: 'RTO (Recovery Time Objective)', definition: 'Maximaal acceptabele tijd om een systeem of functie na verstoring te herstellen' },
        { term: 'RPO (Recovery Point Objective)', definition: 'Maximaal acceptabel dataverlies gemeten in tijd (tijd sinds laatste back-up)' },
        { term: 'Risicobereidheid (Risk Appetite)', definition: 'De hoeveelheid risico die een organisatie bereid is te accepteren in het nastreven van haar doelstellingen' },
        { term: 'Resterend risico (Residual Risk)', definition: 'Risico dat overblijft nadat security-controls zijn toegepast' },
        { term: 'Risico-overdracht (Risk Transfer)', definition: 'Financieel risico overdragen aan een derde partij (bijv. cyberverzekering)' },
        { term: 'Risicoaversie (Risk Avoidance)', definition: 'Een risico elimineren door de activiteit die het creëert niet uit te voeren' },
        { term: 'ALE', definition: 'Annual Loss Expectancy = SLE × ARO — kwantitatieve risicometriek' },
        { term: 'SLE', definition: 'Single Loss Expectancy — geschat financieel verlies door één enkel optreden van een risico' },
        { term: 'ARO', definition: 'Annual Rate of Occurrence — geschatte frequentie waarmee een risico zich jaarlijks voordoet' },
        { term: 'Data-classificatie', definition: 'Categoriseren van data op basis van gevoeligheid: Publiek → Intern → Vertrouwelijk → Beperkt' },
        { term: 'MTTR', definition: 'Mean Time to Recover — gemiddelde tijd om een systeem na uitval te herstellen' },
        { term: 'MTBF', definition: 'Mean Time Between Failures — gemiddelde tijd tussen systeemstoringen' },
        { term: 'Security Awareness Training', definition: 'Medewerkers informeren over security-bedreigingen en veilig gedrag om menselijke-fout-risico\'s te verminderen' }
      ]
    }
  ],
  mockExam: [
    {
      id: 'mock-sx-1',
      domain: 'general-security-concepts',
      question: 'Welk protocol wordt gebruikt om de intrekkingsstatus van een digitaal certificaat in real-time te controleren?',
      options: ['CRL', 'LDAP', 'OCSP', 'PKI'],
      correct: 2,
      explanation: 'OCSP (Online Certificate Status Protocol) controleert de intrekkingsstatus in real-time. CRL (Certificate Revocation List) is een periodiek bijgewerkte downloadbare lijst.'
    },
    {
      id: 'mock-sx-2',
      domain: 'general-security-concepts',
      question: 'ECC (Elliptic Curve Cryptography) biedt vergelijkbare beveiliging als RSA met:',
      options: ['Grotere sleutelformaten', 'Symmetrische algoritmen', 'Kleinere sleutelformaten', 'Identieke sleutelformaten'],
      correct: 2,
      explanation: 'ECC bereikt gelijkwaardige beveiliging als RSA met veel kleinere sleutels (bijv. 256-bit ECC ≈ 3072-bit RSA), waardoor het efficiënt is voor mobiel en IoT.'
    },
    {
      id: 'mock-sx-3',
      domain: 'general-security-concepts',
      question: 'Welk access control-model wijst permissies toe op basis van vooraf gedefinieerde regels en labels (bijv. Top Secret, Vertrouwelijk)?',
      options: ['DAC (Discretionary Access Control)', 'RBAC (Role-Based Access Control)', 'MAC (Mandatory Access Control)', 'ABAC (Attribute-Based Access Control)'],
      correct: 2,
      explanation: 'MAC gebruikt beveiligingslabels en een centrale autoriteit wijst toegang toe — gebruikers kunnen permissies niet zelf aanpassen. Gangbaar in overheid/militaire omgevingen.'
    },
    {
      id: 'mock-sx-4',
      domain: 'general-security-concepts',
      question: 'Multi-factor authenticatie (MFA) vereist:',
      options: [
        'Twee wachtwoorden van verschillende systemen',
        'Een gebruikersnaam en een sterk wachtwoord',
        'Authenticatie met factoren uit minimaal twee verschillende categorieën',
        'Alleen biometrische authenticatie'
      ],
      correct: 2,
      explanation: 'MFA-categorieën: iets dat je weet (wachtwoord), iets dat je hebt (token/telefoon), iets dat je bent (biometrie). Twee factoren moeten uit VERSCHILLENDE categorieën komen.'
    },
    {
      id: 'mock-sx-5',
      domain: 'threats-vulnerabilities',
      question: 'Een pharming-aanval leidt gebruikers om van legitieme websites door:',
      options: [
        'Frauduleuze e-mails met kwaadaardige links te sturen',
        'DNS-cache te vergiftigen of het hosts-bestand te wijzigen',
        'Netwerkverkeer te onderscheppen',
        'Keyloggers op doelsystemen te installeren'
      ],
      correct: 1,
      explanation: 'Pharming corrumpeert DNS of hosts-bestanden zodat legitieme domeinnamen naar kwaadaardige IP-adressen verwijzen — slachtoffers typen de juiste URL maar belanden op een nepssite.'
    },
    {
      id: 'mock-sx-6',
      domain: 'threats-vulnerabilities',
      question: 'Een aanvaller maakt gebruik van een kwetsbaarheid in een veelgebruikte open-source bibliotheek die in honderden commerciële producten is ingebed. Dit is het BEST omschreven als:',
      options: ['Een zero-day aanval', 'Een watering hole aanval', 'Een supply chain aanval', 'Een advanced persistent threat'],
      correct: 2,
      explanation: 'Aanvallen via een gedeelde dependency (bibliotheek, component) die vervolgens via legitieme producten wordt gedistribueerd zijn supply chain aanvallen — Log4Shell is een reëel voorbeeld.'
    },
    {
      id: 'mock-sx-7',
      domain: 'threats-vulnerabilities',
      question: 'Een buffer overflow-kwetsbaarheid treedt op wanneer:',
      options: [
        'Twee processen tegelijkertijd toegang proberen te krijgen tot dezelfde resource',
        'Een geheel getal zijn maximale waarde overschrijdt',
        'Meer data naar een buffer wordt geschreven dan het kan bevatten, waardoor aangrenzend geheugen wordt overschreven',
        'Een variabele na vrijgave nog steeds gebruikt wordt'
      ],
      correct: 2,
      explanation: 'Buffer overflow treedt op wanneer meer data naar een buffer wordt geschreven dan het kan bevatten, wat aangrenzend geheugen kan overschrijven — historisch een van de meest geëxploiteerde kwetsbaarheidsklassen.'
    },
    {
      id: 'mock-sx-8',
      domain: 'threats-vulnerabilities',
      question: 'Een APT (Advanced Persistent Threat) wordt gekenmerkt door:',
      options: [
        'Geautomatiseerde, opportunistische aanvallen op niet-gepatchte systemen',
        'Geavanceerde, langdurige aanvallen gericht op specifieke organisaties, vaak staatsgesponsord',
        'Ransomwarecampagnes tegen kritieke infrastructuur',
        'Denial of service aanvallen via botnets'
      ],
      correct: 1,
      explanation: 'APT\'s zijn geduldige, goed gefinancierde actoren (vaak natiestaten) die langdurige toegang tot doelnetwerken handhaven voor spionage of sabotage, waarbij ze detectie vermijden.'
    },
    {
      id: 'mock-sx-9',
      domain: 'threats-vulnerabilities',
      question: 'Welke social engineering techniek houdt in dat een aanvaller een verzonnen scenario creëert om een slachtoffer te manipuleren informatie te onthullen?',
      options: ['Baiting', 'Tailgating', 'Pretexting', 'Quid pro quo'],
      correct: 2,
      explanation: 'Pretexting creëert een valse identiteit of scenario (bijv. doen alsof je IT-support bent) om vertrouwen te winnen en informatie te extraheren. Baiting laat geïnfecteerde fysieke media achter.'
    },
    {
      id: 'mock-sx-10',
      domain: 'threats-vulnerabilities',
      question: 'Indicators of Attack (IoA) verschillen van Indicators of Compromise (IoC) doordat IoA\'s:',
      options: [
        'Hashes zijn van bekende malwarebestanden',
        'Focussen op aanvallersgedrag en -technieken in plaats van artefacten na compromittering',
        'Alleen IP-adressen en domeinnamen bevatten',
        'Alleen relevant zijn nadat een incident heeft plaatsgevonden'
      ],
      correct: 1,
      explanation: 'IoC\'s zijn reactieve artefacten (hashes, IP\'s) gevonden na compromittering. IoA\'s zijn gedragssignalen die een aanval in uitvoering indiceren — bedreigingen eerder in de kill chain opvangen.'
    },
    {
      id: 'mock-sx-11',
      domain: 'security-architecture',
      question: 'Een Cloud Access Security Broker (CASB) biedt PRIMAIR:',
      options: [
        'Fysieke beveiliging voor clouddatacenters',
        'Zichtbaarheid en controle over data die tussen gebruikers en clouddiensten stroomt',
        'Netwerkmonitoring voor on-premises infrastructuur',
        'Certificaatbeheer voor cloudapplicaties'
      ],
      correct: 1,
      explanation: 'CASB zit tussen gebruikers en clouddiensten, handhaaft beveiligingsbeleid, biedt zichtbaarheid in cloudgebruik en voorkomt data-exfiltratie.'
    },
    {
      id: 'mock-sx-12',
      domain: 'security-architecture',
      question: 'Welk protocol werkt op Laag 3 en wordt gebruikt voor het maken van versleutelde tunnels voor site-to-site VPN\'s?',
      options: ['SSL/TLS', 'L2TP', 'IPSec', 'PPTP'],
      correct: 2,
      explanation: 'IPSec is een Laag 3 protocolsuite die veel gebruikt wordt voor site-to-site VPN\'s. Het kan werken in transportmodus (versleutelt payload) of tunnelmodus (versleutelt volledig pakket).'
    },
    {
      id: 'mock-sx-13',
      domain: 'security-architecture',
      question: 'Een bedrijf slaat klantdata op in een publieke cloud maar bewaart encryptiesleutels on-premises. Dit is een voorbeeld van:',
      options: [
        'Hybride cloudarchitectuur met door klant beheerde sleutels',
        'Private cloud implementatie',
        'SaaS met bring-your-own-device',
        'Community cloud model'
      ],
      correct: 0,
      explanation: 'Sleutels on-premises houden terwijl data in de publieke cloud staat geeft de klant controle over data-toegang — zelfs als de cloudprovider gecompromitteerd wordt of wettelijk verplicht wordt toegang te verlenen.'
    },
    {
      id: 'mock-sx-14',
      domain: 'security-architecture',
      question: 'In een PKI: wat is de rol van de Registration Authority (RA)?',
      options: [
        'Certificaten uitgeven en ondertekenen',
        'De Certificate Revocation List publiceren en onderhouden',
        'De identiteit van certificaataanvragers verifiëren voordat verzoeken naar de CA worden gestuurd',
        'Private sleutels veilig opslaan'
      ],
      correct: 2,
      explanation: 'De RA voert identiteitsverificatie uit namens de CA. De CA vertrouwt op de verificatie van de RA en geeft het certificaat uit. Dit verdeelt de werklast van identiteitsvastelling.'
    },
    {
      id: 'mock-sx-15',
      domain: 'security-architecture',
      question: 'Software-Defined Networking (SDN) verbetert beveiliging door:',
      options: [
        'De noodzaak van firewalls te elimineren',
        'Gecentraliseerde, programmatische handhaving van netwerkbeleid en snelle reactie op bedreigingen mogelijk te maken',
        'Alle traditionele netwerkhardware te vervangen',
        'Al het netwerkverkeer automatisch te versleutelen'
      ],
      correct: 1,
      explanation: 'Het gecentraliseerde beheer van SDN maakt snelle updates van beveiligingsbeleid, geautomatiseerde bedreigingsrespons en consistente handhaving over het netwerk mogelijk — cruciaal voor zero-trust implementaties.'
    },
    {
      id: 'mock-sx-16',
      domain: 'security-operations',
      question: 'Een security-analist merkt dat een proces ongebruikelijke uitgaande verbindingen maakt naar IP-adressen in het buitenland met regelmatige intervallen van 5 minuten. Dit is HOOGSTWAARSCHIJNLIJK:',
      options: [
        'Normaal load balancing gedrag',
        'Een command-and-control (C2) beacon',
        'Een legitieme softwareupdate-controle',
        'Een DNS-amplificatieaanval'
      ],
      correct: 1,
      explanation: 'Regelmatige, periodieke uitgaande verbindingen naar ongebruikelijke bestemmingen zijn klassieke tekenen van C2-beaconing — malware die incheckt bij zijn commandoserver voor instructies.'
    },
    {
      id: 'mock-sx-17',
      domain: 'security-operations',
      question: 'Een beveiligingsteam ontvangt een melding dat de inloggegevens van een medewerker tegelijkertijd worden gebruikt vanuit twee geografisch ver van elkaar gelegen landen. Dit heet:',
      options: ['Privilege escalation', 'Impossible travel', 'Account enumeration', 'Session fixation'],
      correct: 1,
      explanation: 'Impossible travel-alerts worden getriggerd wanneer de tijdspanne tussen inloggen vanuit geografisch ver verwijderde locaties fysiek onmogelijk is — een sterke indicator van gecompromitteerde inloggegevens.'
    },
    {
      id: 'mock-sx-18',
      domain: 'security-operations',
      question: 'Het MITRE ATT&CK-framework documenteert:',
      options: [
        'Standaarden voor het scoren van kwetsbaarheden',
        'Aanvallers\' tactieken, technieken en procedures (TTPs) op basis van real-world observaties',
        'Security-controle-eisen voor overheidssystemen',
        'Methoden voor risicoanalyse'
      ],
      correct: 1,
      explanation: 'MITRE ATT&CK is een kennisbank van aanvallersgedrag georganiseerd naar tactieken (wat aanvallers willen bereiken) en technieken (hoe ze dat bereiken) — gebruikt voor detectie, threat hunting en red teaming.'
    },
    {
      id: 'mock-sx-19',
      domain: 'security-operations',
      question: 'Een forensisch onderzoeker maakt een bit-stream image van een harde schijf. De PRIMAIRE reden hiervoor is:',
      options: [
        'Het bewijs te comprimeren voor opslag',
        'Versleutelde partities te ontsleutelen',
        'Het originele bewijs te bewaren en te werken van een exacte kopie',
        'Het analyseproces te versnellen'
      ],
      correct: 2,
      explanation: 'Bit-stream imaging creëert een exacte kopie van elk bit op de schijf. Het originele bewijs wordt onaangeroerd bewaard en analyse wordt uitgevoerd op de image — dit handhaaft de chain of custody.'
    },
    {
      id: 'mock-sx-20',
      domain: 'security-operations',
      question: 'Tijdens incident response: wat houdt de eradicatiefase in?',
      options: [
        'Wetshandhaving notificeren',
        'De bedreiging verwijderen en oorzaken aanpakken',
        'Systemen herstellen vanuit back-up',
        'Lessons learned documenteren'
      ],
      correct: 1,
      explanation: 'Eradicatie verwijdert de oorzaak: malware verwijderen, kwetsbaarheden patchen, ongeautoriseerde accounts verwijderen. Recovery herstelt daarna systemen naar normale werking.'
    },
    {
      id: 'mock-sx-21',
      domain: 'security-operations',
      question: 'Een purple team exercise combineert:',
      options: [
        'Geautomatiseerde kwetsbaarheidsscanning met handmatige penetratietesting',
        'Red team aanvalsactiviteiten met blue team defensieve activiteiten, kennis real-time delend',
        'Fysieke security-testing met cybersecurity-testing',
        'Interne auditors met externe penetratietesters'
      ],
      correct: 1,
      explanation: 'Purple teaming doorbreekt de traditionele tegenstelling tussen red (offensief) en blue (defensief) teams — ze werken samen om zowel aanvals- als verdedigingsmogelijkheden te verbeteren.'
    },
    {
      id: 'mock-sx-22',
      domain: 'security-operations',
      question: 'Welk concept beschrijft de praktijk van het segmenteren van beheerdersbevoegdheden zodat geen enkel account onbeperkte toegang heeft tot alle systemen?',
      options: ['Zero Trust', 'Least Privilege', 'Separation of Duties', 'Need to Know'],
      correct: 2,
      explanation: 'Separation of Duties verdeelt kritieke functies over meerdere mensen/rollen om fraude en fouten te voorkomen. Least Privilege beperkt permissies tot het minimum dat nodig is.'
    },
    {
      id: 'mock-sx-23',
      domain: 'program-management',
      question: 'Een organisatie draagt risico over door:',
      options: [
        'Extra security-controls implementeren',
        'Een niveau van verlies accepteren als onderdeel van zakendoen',
        'Cyberverzekering af te sluiten of een derde partij in te schakelen',
        'Een hoog-risico bedrijfsproces te staken'
      ],
      correct: 2,
      explanation: 'Risico-responsstrategieën: Accepteren, Vermijden, Beperken (controls), Overdragen (financiële impact verschuiven — verzekering, contract). Overdracht elimineert het risico niet.'
    },
    {
      id: 'mock-sx-24',
      domain: 'program-management',
      question: 'Een privacy impact assessment (PIA) wordt uitgevoerd om:',
      options: [
        'Systeemprestaties bij hoge gebruikersbelasting te meten',
        'Privacyrisico\'s te identificeren en te beperken voordat een nieuw systeem of proces wordt ingezet',
        'Of authenticatiecontroles aan compliancevereisten voldoen te testen',
        'De toegang van leveranciers tot gevoelige data te auditen'
      ],
      correct: 1,
      explanation: 'PIA\'s (ook DPIA\'s onder GDPR) beoordelen de impact van nieuwe systemen of processen op individuele privacy, risico\'s identificerend vóór implementatie in plaats van daarna.'
    },
    {
      id: 'mock-sx-25',
      domain: 'program-management',
      question: 'Welk security-framework wordt het meest gebruikt door Amerikaanse federale agentschappen en hun aannemers?',
      options: ['ISO/IEC 27001', 'SOC 2', 'NIST SP 800-53', 'CIS Controls'],
      correct: 2,
      explanation: 'NIST Special Publication 800-53 biedt security- en privacy-controls specifiek voor federale informatiesystemen. Niet-overheidsinstellingen adopteren het ook vrijwillig.'
    },
    {
      id: 'mock-sx-26',
      domain: 'program-management',
      question: 'Het beleid van een bedrijf stelt dat geen enkele medewerker zowel een financiële transactie kan initiëren als goedkeuren. Dit dwingt af:',
      options: ['Least Privilege', 'Need to Know', 'Separation of Duties', 'Job Rotation'],
      correct: 2,
      explanation: 'Separation of Duties voorkomt dat één persoon een gevoelige transactie alleen kan voltooien — twee mensen vereisen voor initiatie en goedkeuring voorkomt fraude en samenspanning.'
    },
    {
      id: 'mock-sx-27',
      domain: 'security-operations',
      question: 'Log-aggregatie verbetert security omdat het:',
      options: [
        'Automatisch kwetsbaarheden patcht die in logs worden gedetecteerd',
        'Logs comprimeert om opslagvereisten te verminderen',
        'Logs van meerdere bronnen centraliseert waardoor correlatie over systemen mogelijk is om bedreigingen te detecteren',
        'Alle logdata versleutelt om ongeautoriseerde toegang te voorkomen'
      ],
      correct: 2,
      explanation: 'Individuele systeemlogsoverzien vaak bedreigingen die meerdere systemen overspannen. Gecentraliseerde aggregatie maakt correlatie mogelijk — dezelfde aanvaller detecteren over firewall-, server- en authenticatielogs.'
    },
    {
      id: 'mock-sx-28',
      domain: 'general-security-concepts',
      question: 'Welk van de volgende is een voorbeeld van iets dat je HEBT (authenticatiefactor)?',
      options: [
        'Wachtwoord',
        'Vingerafdruk',
        'Smartcard',
        'PIN-code'
      ],
      correct: 2,
      explanation: 'MFA-categorieën: iets dat je weet (wachtwoord, PIN), iets dat je hebt (smartcard, hardware-token, telefoon), iets dat je bent (vingerafdruk, gezichtsherkenning). Een smartcard is een bezitsfactor.'
    },
    {
      id: 'mock-sx-29',
      domain: 'threats-vulnerabilities',
      question: 'Welke aanvalstechniek maakt gebruik van het feit dat gebruikers dezelfde inloggegevens op meerdere sites hergebruiken?',
      options: ['Brute force', 'Credential stuffing', 'Password spraying', 'Rainbow table attack'],
      correct: 1,
      explanation: 'Credential stuffing gebruikt eerder gelekte inloggegevens (gebruikersnaam + wachtwoord-paren) uit andere datalekken en probeert deze automatisch op andere diensten, waarbij misbruik gemaakt wordt van wachtwoordhergebruik.'
    },
    {
      id: 'mock-sx-30',
      domain: 'program-management',
      question: 'Het PRIMAIRE doel van security-metrics is:',
      options: [
        'Het security-budget rechtvaardigen tegenover het management',
        'Naleving van regulatoire eisen aantonen',
        'Meetbare data verstrekken om de effectiviteit van security-controls te beoordelen en besluitvorming te sturen',
        'Alle security-incidenten documenteren voor juridische doeleinden'
      ],
      correct: 2,
      explanation: 'Security-metrics vertalen security-activiteiten naar meetbare data — op bewijs gebaseerde beslissingen mogelijk makend over resourcetoewijzing, doeltreffendheid van controls en verbetering van de risicohouding.'
    }
  ]
};
