import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Gavel,
  HeartHandshake,
  Landmark,
  Mail,
  MessageCircle,
  MapPin,
  Network,
  Phone,
  RefreshCcw,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UserStar,
  Users,
  Video,
} from 'lucide-react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'

const SECTION_11_DESKTOP_QUERY = '(min-width: 1025px)'
const PSYLEX_SECTION_PATH = '/forensic#forensic-psylex'

const content = {
  it: {
    brand: 'Studio di Psicoterapia e Psicologia Forense',
    doctor: 'Dott.ssa Laura Cocozza',
    nav: {
      home: 'Home',
      clinical: 'Area Clinica',
      forensic: 'Area Forense',
      psylex: 'PsyLex',
      about: 'Chi Sono',
      contact: 'Contatti',
      book: 'Prenota un Colloquio',
      bookShort: 'Prenota un Colloquio',
      bookSession: 'Prenota una Seduta',
      mobileNavAria: 'Navigazione mobile',
      mainNavAria: 'Navigazione principale',
      openMenuAria: 'Apri menu',
      closeMenuAria: 'Chiudi menu',
    },
    home: {
      eyebrow: 'Psicoterapia clinica e psicologia forense',
      by: 'DI',
      title: 'Uno spazio professionale e umano, dedicato al tuo benessere.',
      description:
        'Percorsi personalizzati per adolescenti, adulti e famiglie, con integrazione clinica-forense e una rete multidisciplinare dedicata al benessere.',
      ctaPrimary: 'Inizia il tuo percorso',
      ctaAriaLabel: 'Inizia il tuo percorso',
      logoAriaLabel: 'Monogramma LC – torna alla home',
      ctaSecondary: 'Scelgo il mio percorso clinico',
      trust: ['Terapia Cognitivo Comportamentale', 'Approccio Integrato', 'Online & in Presenza', 'Supporto Multidisciplinare'],
      trustSection: {
        identityName: 'Dr Laura Cocozza',
        imageAlt: 'Ritratto professionale della Dott.ssa Laura Cocozza',
        identitySubtitle: 'Studio di Psicoterapia e Psicologia Forense',
        positioning:
          'Aiutare le persone a ricostruire il proprio equilibrio emotivo attraverso un supporto psicologico strutturato, fondato sull\'evidenza scientifica e con competenza forense quando necessaria.',
        roleTitle: 'Competenza, Metodo e Cura',
        roleDetails:
          'Psicologa • Psicoterapeuta Cognitivo Comportamentale • Consulente in Psicologia Forense (CTU & CTP)',
        roleDescription:
          'Un approccio clinico-forense integrato, orientato alla chiarezza, alla stabilità emotiva e a un benessere psicologico duraturo.',
        cards: [
          {
            title: 'Psicoterapia Clinica',
            text: 'Trattamento psicologico evidence-based con CBT e ACT per difficoltà emotive e comportamentali.',
          },
          {
            title: 'Psicologia Forense',
            text: 'Valutazioni psicologiche CTU/CTP, consulenze in diritto di famiglia e supporto tecnico in procedimenti civili.',
          },
          {
            title: 'Modello di Cura Integrata',
            text: 'Lavoro multidisciplinare con psichiatri, neuropsichiatri e professionisti legali per un supporto completo.',
          },
          {
            title: 'Trattamento Personalizzato',
            text: 'Percorsi psicologici su misura costruiti sui bisogni emotivi, relazionali e contestuali di ogni persona.',
          },
        ],
      },
      clinicalAreaIntro: {
        eyebrow: 'Ambito Clinico',
        title: 'Psicoterapia cognitivo-comportamentale\nper adolescenti, adulti e famiglie',
        paragraph1:
          'La pratica offre percorsi di psicoterapia, supporto psicologico e accompagnamento rivolti a persone che affrontano difficoltà emotive, relazionali e familiari.',
        paragraph2:
          'Ogni percorso viene costruito attraverso un approccio integrato e multidisciplinare, con l\'obiettivo di offrire un supporto personalizzato, strutturato e profondamente umano.',
        secondary:
          'Uno spazio di ascolto e comprensione, dedicato a costruire un equilibrio psicologico solido e duraturo.',
        highlights: [
          'Valutazione iniziale accurata per definire priorità e obiettivi realistici.',
          'Percorso strutturato con monitoraggio continuo dei progressi clinici.',
          'Intervento personalizzato su bisogni emotivi, relazionali e familiari.',
          'Collaborazione multidisciplinare quando utile al benessere complessivo.',
        ],
        cta: 'Voglio trovare il percorso più adatto a me',
        imageAlt: 'Dott.ssa Laura Cocozza nel suo studio professionale',
      },
      integratedCareProcess: {
        eyebrow: 'Come Funziona',
        title: 'Il Percorso di Cura',
        steps: [
          {
            number: '01',
            title: 'Comprensione della situazione',
            description:
              'Ogni percorso inizia da un\'attenta comprensione della storia personale, delle difficoltà emotive e delle esigenze specifiche della persona.',
          },
          {
            number: '02',
            title: 'Costruzione del percorso',
            description:
              'L\'intervento terapeutico viene strutturato in modo personalizzato, integrando strumenti clinici e strategie orientate agli obiettivi individuali.',
          },
          {
            number: '03',
            title: 'Collaborazione multidisciplinare',
            description:
              'Quando necessario, la pratica collabora con professionisti specializzati in ambito psichiatrico, neuropsichiatrico e legale per offrire un supporto integrato.',
          },
          {
            number: '04',
            title: 'Supporto continuativo',
            description:
              'L\'obiettivo del percorso è favorire stabilità emotiva, consapevolezza e un equilibrio psicologico sostenibile nel tempo.',
          },
        ],
      },
      multidisciplinaryNetwork: {
        eyebrow: 'Rete Multidisciplinare',
        title: 'Supporto integrato attraverso una rete di specialisti',
        intro:
          'La pratica opera attraverso una rete collaborativa di specialisti, permettendo a ogni percorso terapeutico di essere sostenuto da un approccio integrato e multidisciplinare costruito sui bisogni individuali e familiari.',
        centerLabel: 'Modello di Cura Integrata',
        desktopCenterLabel: 'Modello di Cura Integrata',
        desktopSpineTitle: 'Modello di Cura Integrata',
        nodeKicker: 'Nodo di cura specialistica',
        nodes: [
          {
            title: 'Psicoterapeuti dell\'età evolutiva',
            description:
              'Supporto integrato all\'interno delle traiettorie evolutive e delle dinamiche familiari complesse.',
          },
          {
            title: 'Neuropsichiatri',
            description:
              'Coordinamento specialistico nei casi che richiedono integrazione neuropsichiatrica e clinica.',
          },
          {
            title: 'Psichiatri',
            description:
              'Integrazione psichiatrica e psicologica per continuità terapeutica nei percorsi più complessi.',
          },
          {
            title: 'Avvocati di diritto di famiglia',
            description:
              'Collaborazione legale nelle situazioni familiari ad alta complessità e nei passaggi decisionali delicati.',
          },
          {
            title: 'Professionisti di psicologia forense',
            description:
              'Supporto interdisciplinare per valutazioni tecniche, contesti giudiziari e lavoro psicologico-forense.',
          },
        ],
        cta: {
          clinical: {
            title: 'Psicologia Clinica',
            text: 'Esplora percorsi terapeutici, servizi di supporto emotivo, cura familiare e approcci di trattamento personalizzati.',
            button: 'Voglio il supporto clinico giusto per me',
          },
          forensic: {
            title: 'Psicologia Forense',
            text: 'Scopri servizi forensi, supporto in psicologia giuridica, expertise giudiziaria e il progetto PsyLex.',
            button: 'Voglio chiarezza nel mio percorso forense',
          },
        },
      },
      therapeuticApproach: {
        eyebrow: 'Il processo terapeutico',
        title: 'Approccio terapeutico',
        subheading: 'Metodi terapeutici basati sull\'evidenza,\nintegrati con strumenti innovativi\ne approcci multidisciplinari.',
        editorial: 'Ogni percorso si fonda su metodi scientificamente validati, adattati alle esigenze di ciascuno.',
        cta: 'Voglio capire quale metodo mi aiuta davvero',
        panels: [
          {
            label: 'TCC / CBT',
            title: 'Psicoterapia Cognitivo-Comportamentale (TCC)',
            description: 'Un approccio terapeutico basato sull\'evidenza, orientato alla comprensione della relazione tra pensieri, emozioni e comportamenti.',
          },
          {
            label: 'ACT',
            title: 'Acceptance and Commitment Therapy (ACT)',
            description: 'Un approccio focalizzato sullo sviluppo della flessibilità psicologica e dell\'equilibrio emotivo.',
          },
          {
            label: 'VR',
            title: 'Realtà Virtuale',
            description: 'Tecnologie immersive che affiancano i percorsi terapeutici e aiutano nella gestione di difficoltà emotive e comportamentali.',
          },
        ],
      },
      editorialQuote: {
        quote: 'La psicoterapia non consiste nel cambiare chi siamo, ma nel comprendere con maggiore chiarezza il modo in cui viviamo emozioni, relazioni ed esperienze.',
        attribution: '— Dott.ssa Laura Cocozza',
        ariaLabel: 'Citazione editoriale',
      },
      quietEditorial: {
        ariaLabel: 'Pausa editoriale',
        text: 'Ogni percorso terapeutico inizia dal sentirsi accolti, ascoltati e rispettati nella propria unicità.',
        note: 'Uno spazio professionale, riservato e costruito con cura.',
      },
      whoIsItFor: {
        eyebrow: 'Per chi è pensato',
        title: 'Percorsi pensati per ogni fase della vita\ne per le esigenze di ciascuno',
        subtext: 'Ogni percorso terapeutico viene sviluppato considerando il contesto personale, relazionale ed emotivo di ciascuna persona.',
        cta: 'Voglio il percorso più adatto alla mia fase di vita',
        panels: [
          {
            key: 'adolescents',
            icon: '/youth.png',
            title: 'Adolescenti',
            description: 'Percorsi dedicati agli adolescenti che affrontano cambiamenti emotivi, difficoltà relazionali, ansia, stress o fasi di crescita complesse.',
          },
          {
            key: 'adults',
            icon: '/plus-18-movie.png',
            title: 'Adulti',
            description: 'Supporto psicologico e psicoterapia per affrontare stress, ansia, difficoltà emotive, relazionali e momenti di transizione personale.',
          },
          {
            key: 'families',
            icon: '/family.png',
            title: 'Famiglie',
            description: 'Consulenze e percorsi di supporto per dinamiche familiari complesse, genitorialità e momenti di cambiamento.',
          },
        ],
      },
      clinicalAreaTransition: {
        eyebrow: 'Percorso Clinico',
        title: 'Un percorso terapeutico\ncostruito attorno\nalla persona',
        paragraph:
          'Approfondisci le aree di supporto,\ngli approcci terapeutici\ne le modalità di intervento\ndella pratica clinica.',
        cta: 'Voglio iniziare con un percorso clinico su misura',
      },
      supportAreas: {
        eyebrow: 'Aree di supporto',
        title: 'Supporto terapeutico\nper difficoltà emotive,\nrelazionali e personali',
        subtext:
          'Ogni percorso viene adattato alle esigenze specifiche della persona, attraverso un approccio strutturato, graduale e personalizzato.',
        panels: [
          {
            key: 'anxiety',
            icon: '/anxiety.png',
            title: 'Ansia e gestione dello stress',
            description:
              'Percorsi di supporto dedicati alla gestione dell\'ansia, dello stress emotivo, delle paure persistenti e del sovraccarico mentale.',
          },
          {
            key: 'mood',
            icon: '/emotion.png',
            title: 'Difficoltà emotive e dell\'umore',
            description:
              'Supporto psicologico per periodi di vulnerabilità emotiva, demotivazione, tristezza persistente e difficoltà nel mantenere equilibrio emotivo.',
          },
          {
            key: 'ocd',
            icon: '/ocd.png',
            title: 'Pensieri intrusivi e comportamenti compulsivi',
            description:
              'Interventi orientati alla gestione di pensieri ricorrenti, compulsioni, controllo dell\'ansia e rigidità cognitive.',
          },
          {
            key: 'regulation',
            icon: '/fear.png',
            title: 'Regolazione emotiva',
            description:
              'Percorsi focalizzati sullo sviluppo della consapevolezza emotiva, della gestione dello stress e dell\'equilibrio psicologico quotidiano.',
          },
          {
            key: 'relational',
            icon: '/conflict.png',
            title: 'Difficoltà relazionali',
            description:
              'Supporto psicologico per dinamiche relazionali complesse, conflitti emotivi, difficoltà comunicative e relazioni personali difficili.',
          },
        ],
      },
      familySupport: {
        eyebrow: 'Dove le relazioni ritrovano equilibrio',
        title: 'Supporto per coppie e famiglie',
        intro:
          'Una sezione dedicata a coppie, genitori e famiglie che cercano un supporto psicologico strutturato nelle fasi di conflitto, transizione e cambiamento relazionale.',
        sectionCta: 'Voglio ricostruire equilibrio nelle mie relazioni',
        panels: [
          {
            icon: '/relationship.png',
            title: 'Percorsi di Coppia',
            intro: 'Percorsi dedicati a migliorare la comunicazione, affrontare i conflitti e ritrovare la comprensione emotiva.',
            cta: 'Voglio migliorare la comunicazione di coppia',
            highlights: [
              'Difficoltà comunicative',
              'Riconnessione emotiva',
              'Gestione dei conflitti',
              'Transizioni nella relazione',
              'Recupero dell\'equilibrio di coppia',
            ],
          },
          {
            icon: '/separated.png',
            title: 'Supporto nella Separazione',
            intro: 'Sostegno psicologico nei momenti emotivamente complessi di separazione e transizione familiare.',
            cta: 'Voglio supporto per affrontare la separazione',
            highlights: [
              'Stabilizzazione emotiva',
              'Supporto durante la separazione',
              'Orientamento alla genitorialità',
              'Riorganizzazione familiare',
              'Accompagnamento nel cambiamento',
            ],
          },
          {
            icon: '/parental-guidance.png',
            title: 'Sostegno alla Genitorialità',
            intro: 'Percorsi dedicati ai genitori che affrontano sfide educative, emotive e relazionali.',
            cta: 'Voglio una guida per la mia genitorialità',
            highlights: [
              'Guida alla genitorialità',
              'Criticità educative',
              'Dinamiche emotive familiari',
              'Comunicazione genitori-figli',
              'Supporto relazionale continuativo',
            ],
          },
          {
            icon: '/family-consultation.png',
            title: 'Consulenze Familiari',
            intro: 'Interventi di supporto per situazioni familiari complesse, gestione dei conflitti ed equilibrio relazionale.',
            cta: 'Voglio orientamento per la mia situazione familiare',
            highlights: [
              'Situazioni familiari complesse',
              'Mediazione dei conflitti',
              'Regolazione emotiva',
              'Lettura delle dinamiche familiari',
              'Supporto multidisciplinare integrato',
            ],
          },
        ],
      },
      aboutSection: {
        eyebrow: 'PROFILO PROFESSIONALE',
        title: 'Un approccio multidisciplinare fondato sulla psicologia clinica e forense',
        badge: 'Psicologa • Psicoterapeuta Cognitivo-Comportamentale • Psicologa Forense',
        paragraph:
          "La Dott.ssa Laura Cocozza è psicologa, psicoterapeuta cognitivo-comportamentale e psicologa forense. La sua pratica professionale integra la psicoterapia clinica con la consulenza forense, offrendo un modello di cura che risponde con precisione alle esigenze emotive, relazionali e legali di ogni persona. Attraverso l'uso della Terapia Cognitivo-Comportamentale (TCC), dell'Acceptance and Commitment Therapy (ACT) e di tecnologie innovative come la realtà virtuale, ogni percorso viene costruito attorno alla specificità dell'individuo. In ambito forense, collabora con tribunali e professionisti legali in qualità di CTU e CTP, occupandosi di valutazioni psicologiche, diritto di famiglia e supporto in procedimenti civili. Un approccio integrato, multidisciplinare e profondamente umano.",
        ctaButton: 'Voglio prenotare la mia seduta',
        ctaSubtext: 'Consulenze online e in presenza disponibili',
        portraitAlt: 'Dott.ssa Laura Cocozza — ritratto professionale',
      },
      faqSection: {
        eyebrow: 'DOMANDE FREQUENTI',
        title: 'Informazioni su consulenze, percorsi terapeutici e attività forense',
        intro: 'Una selezione di domande frequenti sui percorsi clinici, sulle consulenze e sul supporto psicologico.',
        faqs: [
          { q: 'Che tipo di supporto psicologico offre?', a: 'Lo studio offre psicoterapia individuale, supporto psicologico, consulenze familiari e servizi di psicologia forense. I percorsi vengono costruiti in modo personalizzato sulla base delle esigenze emotive, relazionali e contestuali di ogni persona.' },
          { q: 'A chi sono destinati i percorsi terapeutici?', a: "I percorsi sono rivolti ad adolescenti, adulti e famiglie che affrontano difficoltà emotive, relazionali, comportamentali o momenti di cambiamento significativo. L'approccio è sempre adattato al contesto e alla storia individuale." },
          { q: 'Sono disponibili colloqui online?', a: 'Sì. Lo studio offre colloqui sia in presenza, presso la sede di Udine, sia online, attraverso piattaforme sicure e riservate. La modalità viene concordata in base alle esigenze della persona.' },
          { q: 'Quanto dura di solito un percorso di psicoterapia?', a: 'La durata varia in base agli obiettivi terapeutici, alla natura delle difficoltà e alla evoluzione del percorso. Viene sempre definita in modo condiviso, con regolari momenti di verifica e revisione degli obiettivi.' },
          { q: "Cos'è la psicoterapia cognitivo-comportamentale?", a: "La Terapia Cognitivo-Comportamentale (TCC) è un approccio evidence-based orientato alla comprensione della relazione tra pensieri, emozioni e comportamenti. Viene utilizzata per trattare ansia, umore, OCD, difficoltà relazionali e molte altre problematiche psicologiche." },
          { q: "Cos'è l'Acceptance and Commitment Therapy (ACT)?", a: "L'ACT è un approccio terapeutico focalizzato sullo sviluppo della flessibilità psicologica, dell'accettazione e dell'azione orientata ai valori personali. È particolarmente efficace nei percorsi di regolazione emotiva e gestione dello stress." },
          { q: 'Come si svolgono le consulenze in psicologia forense?', a: 'Le consulenze forensi possono essere richieste da privati, avvocati o tribunali. Includono valutazioni psicologiche, redazione di perizie, attività di CTU/CTP e supporto in procedimenti di diritto di famiglia.' },
          { q: 'Collabora con altri professionisti?', a: 'Sì. Lo studio opera attraverso una rete multidisciplinare che include psichiatri, neuropsichiatri infantili, psicoterapeuti dell\'età evolutiva e avvocati specializzati in diritto di famiglia, per offrire un supporto integrato e continuativo.' },
          { q: 'Posso richiedere supporto durante processi di separazione o affidamento?', a: 'Sì. Lo studio offre consulenze specifiche per famiglie in fase di separazione, con attenzione alla genitorialità, al benessere dei figli e alla gestione emotiva dei passaggi più delicati.' },
          { q: 'Come posso prenotare un appuntamento o richiedere informazioni?', a: 'È possibile contattare lo studio via email a laura.cocozza.893@psypec.it o info@psylexitalia.com, oppure telefonicamente al +39 339 366 980. Il primo contatto avviene solitamente tramite una breve call conoscitiva.' },
        ],
      },
      contactSection: {
        eyebrow: 'CONTATTI',
        title: 'Richiedi informazioni o prenota una consulenza',
        intro:
          'Puoi richiedere informazioni sui percorsi clinici, sulle consulenze familiari o sui servizi di psicologia forense attraverso i contatti dello studio. Il primo contatto avviene in modo semplice, professionale e riservato.',
        form: {
          fullName: 'Nome e Cognome',
          email: 'Email',
          phone: 'Telefono (facoltativo)',
          subject: 'Oggetto',
          message: 'Messaggio',
          send: 'Voglio ricevere una risposta dedicata →',
          mailtoName: 'Nome',
          mailtoEmail: 'Email',
          mailtoPhone: 'Telefono',
          mailtoMessage: 'Messaggio',
        },
        info: {
          emailTitle: 'Email',
          phoneTitle: 'Telefono',
          locationTitle: 'Sede',
          consultationsTitle: 'Consulenze',
          emails: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
          phone: '+39 339 366 980',
          whatsapp: 'https://wa.me/39339366980',
          whatsappLabel: 'Scrivici su WhatsApp',
          address: 'Via Generale Baldissera 14 — Udine',
          consultations: 'Colloqui online e in presenza',
        },
      },
    },
    sections: {
      clinicalPreview: 'Area Clinica',
      forensicPreview: 'Area Forense',
      psylexPreview: 'PsyLex Preview',
      aboutPreview: 'La Dott.ssa Laura Cocozza',
      philosophy: 'Filosofia Terapeutica',
      process: 'Come Funziona',
      network: 'Rete e Collaborazioni',
      testimonials: '"Un approccio capace di coniugare ascolto, metodo e direzione concreta."',
      contactCta: 'Inizia oggi un percorso fondato su fiducia, chiarezza e competenza.',
    },
    pages: {
      clinicalHero: 'Area Clinica',
      forensicHero: 'Area Forense',
      aboutHero: 'Chi Sono',
      contactHero: 'Contatti',
    },
    footer: {
      brand: 'Studio di Psicoterapia e Psicologia Forense',
      doctor: 'Dott.ssa Laura Cocozza',
      tagline: 'Consulenze online e in presenza disponibili.',
      nav: ['Home', 'Area Clinica', 'Psicologia Forense', 'Contatti', 'FAQ'],
      navLinks: ['/home', '/clinical', '/forensic', '/contact', '/home'],
      logoAriaLabel: 'Home — Laura Cocozza',
      navAriaLabel: 'Navigazione footer',
      copyright: '© 2026 Laura Cocozza — Tutti i diritti riservati.',
      email: 'laura.cocozza.893@psypec.it',
      phone: '+39 339 366 980',
      address: 'Via Generale Baldissera 14 — Udine',
    },
    clinicalPage: {
      hero: {
        eyebrow: 'Area Clinica',
        title: 'Psicoterapia strutturata,\npersonalizzata e fondata\nsull\'evidenza scientifica',
        subtitle: 'Un sistema clinico integrato per adolescenti, adulti e famiglie, costruito attorno alla persona e orientato al benessere psicologico duraturo.',
      },
      overview: {
        eyebrow: 'Panoramica Clinica',
        title: 'Un approccio clinico che integra\nmetodo, ascolto e cura della persona',
        intro: 'La pratica clinica offre percorsi di psicoterapia evidence-based costruiti sulla comprensione profonda della storia individuale, delle difficoltà emotive e del contesto relazionale di ciascuna persona. L\'approccio integra strumenti clinici validati con una presenza umana autentica.',
        blocks: [
          {
            title: 'Valutazione clinica iniziale',
            text: 'Ogni percorso inizia da una valutazione accurata della situazione presentata: storia emotiva, difficoltà attuali, risorse personali e obiettivi terapeutici. Questo consente di definire un piano di intervento mirato e realistico.',
          },
          {
            title: 'Percorso strutturato e monitorato',
            text: 'L\'intervento terapeutico segue una struttura chiara, con obiettivi condivisi e verifiche periodiche dei progressi. Ogni fase viene adattata all\'evoluzione del percorso e ai bisogni emergenti della persona.',
          },
          {
            title: 'Approccio integrato e multidisciplinare',
            text: 'Quando utile al benessere complessivo, il percorso si avvale di una rete di specialisti: psichiatri, neuropsichiatri, psicoterapeuti dell\'età evolutiva e professionisti legali. La collaborazione è sempre coordinata e orientata alla persona.',
          },
          {
            title: 'Orientamento al benessere duraturo',
            text: 'L\'obiettivo non è la gestione dei sintomi ma la costruzione di un equilibrio psicologico stabile e sostenibile nel tempo. I percorsi mirano a sviluppare consapevolezza, risorse interne e strumenti concreti per affrontare le difficoltà della vita.',
          },
        ],
        cta: 'Voglio sapere di più sull\'approccio clinico',
      },
      careProcess: {
        eyebrow: 'Come Funziona',
        title: 'Il Percorso di Cura Integrato',
        intro: 'Ogni percorso terapeutico segue una logica strutturata che si adatta alle esigenze individuali. La chiarezza del metodo non riduce la flessibilità: ogni fase viene ricalibrata in base all\'evoluzione della persona e agli obiettivi condivisi.',
        steps: [
          {
            number: '01',
            title: 'Primo contatto e comprensione della situazione',
            description: 'Il percorso inizia da un incontro conoscitivo nel quale vengono esplorati la storia personale, le difficoltà presentate, il contesto relazionale e familiare e le aspettative della persona. Questo momento serve a costruire un\'alleanza terapeutica autentica.',
            detail: 'La valutazione iniziale non è solo diagnostica: è il fondamento della relazione terapeutica. Si raccoglie una storia clinica completa e si definiscono le priorità insieme alla persona.',
          },
          {
            number: '02',
            title: 'Definizione degli obiettivi e costruzione del percorso',
            description: 'Sulla base della valutazione iniziale, viene costruito un piano terapeutico personalizzato con obiettivi chiari e condivisi. Gli strumenti clinici vengono scelti in base alle esigenze specifiche: CBT, ACT, tecnologie VR o combinazioni integrate.',
            detail: 'Il piano terapeutico è un documento vivo: viene rivisto e aggiornato nel corso del percorso, in base ai progressi e ai cambiamenti nelle esigenze della persona.',
          },
          {
            number: '03',
            title: 'Intervento terapeutico e collaborazione specialistica',
            description: 'L\'intervento si svolge attraverso sedute regolari con tecniche specifiche calibrate sugli obiettivi. Quando necessario, si attiva la rete multidisciplinare: psichiatri, neuropsichiatri, terapisti dell\'età evolutiva o professionisti legali.',
            detail: 'La collaborazione con altri specialisti non sostituisce la relazione terapeutica primaria, ma la arricchisce. Ogni contributo esterno viene integrato in modo coerente con il percorso individuale.',
          },
          {
            number: '04',
            title: 'Consolidamento, verifica e supporto continuativo',
            description: 'Nelle fasi conclusive del percorso, l\'attenzione si sposta sul consolidamento dei progressi, sulla prevenzione della ricaduta e sull\'autonomia emotiva. Il supporto post-terapia rimane disponibile per il mantenimento del benessere.',
            detail: 'Il termine del percorso formale non è una fine: è l\'inizio di un equilibrio autonomo. La persona acquisisce strumenti e consapevolezza che la accompagnano nel tempo.',
          },
        ],
        cta: 'Voglio capire come funziona il percorso',
      },
      therapeuticApproach: {
        eyebrow: 'Approccio Terapeutico',
        title: 'Metodi Clinici Basati sull\'Evidenza',
        intro: 'Ogni approccio terapeutico utilizzato è scientificamente validato e adattato alle esigenze individuali. La scelta del metodo non è rigida: dipende dalla natura delle difficoltà, dalla storia della persona e dagli obiettivi del percorso.',
        mechanismLabel: 'Come funziona',
        applicationLabel: 'Applicazione clinica',
        targetsLabel: 'Indicazioni principali',
        outcomesLabel: 'Risultati attesi',
        approaches: [
          {
            title: 'Psicoterapia Cognitivo-Comportamentale',
            definition: 'La TCC è uno dei modelli psicoterapeutici più studiati e validati. Si basa sulla comprensione della relazione tra pensieri, emozioni e comportamenti: cambiare i pattern cognitivi disfunzionali consente di modificare le risposte emotive e comportamentali.',
            mechanism: 'Il ciclo pensiero–emozione–comportamento è al centro dell\'intervento: identificare i pensieri automatici negativi, comprenderne l\'impatto emotivo e sostituirli con pattern più funzionali è il processo fondamentale del cambiamento terapeutico.',
            application: 'Si lavora attraverso tecniche strutturate: ristrutturazione cognitiva, esposizione graduale, training di rilassamento, problem solving e diari emotivi. Ogni tecnica è adattata al profilo individuale.',
            targets: ['Disturbi d\'ansia e fobie', 'Depressione e umore', 'DOC e pensieri intrusivi', 'Disturbi alimentari', 'Gestione dello stress', 'Difficoltà relazionali'],
            outcomes: 'Riduzione dei sintomi, maggiore consapevolezza emotiva, strumenti concreti per gestire le difficoltà, prevenzione della ricaduta.',
          },
          {
            label: 'ACT',
            title: 'Acceptance and Commitment Therapy',
            definition: 'L\'ACT è un approccio di terza generazione della terapia cognitivo-comportamentale. Non si concentra sull\'eliminazione del dolore o dei pensieri negativi, ma sull\'accettazione dell\'esperienza interiore e sull\'azione orientata ai valori personali.',
            mechanism: 'Il cambiamento avviene attraverso sei processi fondamentali: accettazione, defusione cognitiva, essere presenti nel momento, sé osservante, valori e azione impegnata. La flessibilità psicologica è l\'obiettivo centrale.',
            application: 'Si lavora con esercizi di mindfulness, metafore terapeutiche, chiarificazione dei valori e tecniche di defusione cognitiva. L\'attenzione si sposta dal controllo dei sintomi al vivere una vita ricca e significativa.',
            targets: ['Regolazione emotiva', 'Ansia generalizzata', 'Burnout e stress cronico', 'Dolore cronico', 'Difficoltà esistenziali', 'Transizioni di vita'],
            outcomes: 'Maggiore flessibilità psicologica, riduzione della rigidità cognitiva, capacità di agire in linea con i propri valori nonostante le difficoltà.',
          },
          {
            label: 'VR',
            title: 'Terapia con Realtà Virtuale',
            definition: 'La realtà virtuale viene utilizzata come strumento clinico avanzato all\'interno di protocolli terapeutici strutturati. Non sostituisce la psicoterapia tradizionale, ma ne potenzia l\'efficacia in contesti specifici.',
            mechanism: 'L\'immersione in ambienti virtuali controllati consente di simulare situazioni clinicamente rilevanti in sicurezza: la persona può esporsi gradualmente a stimoli ansiogeni in un contesto protetto, con piena supervisione terapeutica.',
            application: 'Utilizzata principalmente nei protocolli di esposizione graduata per fobie specifiche, disturbi d\'ansia, PTSD e situazioni di elevata attivazione emotiva. Supporta anche tecniche di rilassamento e visualizzazione guidata.',
            targets: ['Fobie specifiche', 'Disturbo d\'ansia sociale', 'PTSD', 'Agorafobia', 'Ansia da prestazione', 'Desensibilizzazione sistematica'],
            outcomes: 'Riduzione rapida dei comportamenti evitanti, desensibilizzazione efficace, trasferimento delle competenze apprese all\'ambiente reale.',
          },
        ],
        cta: 'Voglio esplorare l\'approccio più adatto a me',
      },
      whoItIsFor: {
        eyebrow: 'Per Chi È',
        title: 'Popolazioni Cliniche\ne Focus Terapeutico',
        intro: 'L\'approccio clinico si adatta alle caratteristiche evolutive, emotive e contestuali di ciascun gruppo di persone. La struttura del percorso, le tecniche utilizzate e gli obiettivi variano significativamente in base all\'età e alla natura delle difficoltà presentate.',
        clinicalNeedsLabel: 'Bisogni clinici',
        therapeuticFocusLabel: 'Focus terapeutico',
        approachLabel: 'Approccio',
        presentingIssuesLabel: 'Presentazioni frequenti',
        populations: [
          {
            title: 'Adolescenti',
            age: 'Dai 14 anni',
            clinicalNeeds: 'L\'adolescenza è una fase di profondo cambiamento identitario, relazionale e neurobiologico. Le difficoltà che emergono in questa fase richiedono un approccio che rispetti il processo evolutivo e la costruzione dell\'autonomia.',
            therapeuticFocus: 'Sviluppo dell\'identità e autostima, gestione delle emozioni, navigazione delle relazioni tra pari, difficoltà scolastiche, rapporto con il corpo e l\'immagine di sé.',
            presentingIssues: ['Ansia scolastica e da prestazione', 'Difficoltà relazionali e isolamento', 'Comportamenti autolesivi', 'Disturbi alimentari emergenti', 'Umore depresso e apatia', 'Conflitti familiari e ribellione'],
            approach: 'Approccio direttivo ma rispettoso dell\'autonomia, con forte attenzione alla relazione terapeutica. Tecniche CBT adattate all\'età evolutiva, lavoro sulle emozioni e coinvolgimento familiare quando utile.',
          },
          {
            title: 'Adulti',
            age: 'Dai 18 anni',
            clinicalNeeds: 'Gli adulti portano in terapia una varietà di difficoltà: stress cronico, crisi esistenziali, difficoltà relazionali, sintomi ansiosi o depressivi, traumi passati o presenti. Ogni percorso parte da una valutazione approfondita del contesto di vita.',
            therapeuticFocus: 'Gestione dello stress e del burnout, difficoltà emotive e relazionali, elaborazione di eventi traumatici, transizioni di vita significative, ricerca di maggiore autenticità e benessere.',
            presentingIssues: ['Disturbi d\'ansia e attacchi di panico', 'Depressione e umore depresso', 'Burnout lavorativo', 'Crisi di coppia e separazione', 'Elaborazione del lutto', 'Difficoltà identitarie e di senso'],
            approach: 'Approccio collaborativo e focalizzato sugli obiettivi. Utilizzo flessibile di CBT, ACT e tecniche integrate, con attenzione alla storia personale e al contesto relazionale attuale.',
          },
          {
            title: 'Famiglie',
            age: 'Nuclei familiari',
            clinicalNeeds: 'La famiglia come sistema porta dinamiche complesse che richiedono un approccio capace di leggere le relazioni, i ruoli e i pattern comunicativi. Le difficoltà raramente appartengono a una sola persona: coinvolgono l\'intero sistema familiare.',
            therapeuticFocus: 'Miglioramento della comunicazione, gestione dei conflitti, supporto nelle transizioni familiari (separazione, genitorialità, lutti), ridefinizione dei ruoli e delle dinamiche di potere.',
            presentingIssues: ['Conflitti genitori-figli', 'Difficoltà comunicative cronicizzate', 'Separazione e riorganizzazione familiare', 'Genitorialità complessa', 'Dolore familiare condiviso', 'Dinamiche disfunzionali radicate'],
            approach: 'Approccio sistemico integrato: lettura delle dinamiche relazionali, lavoro sulle regole implicite del sistema familiare, supporto alla costruzione di nuovi pattern comunicativi e relazionali.',
          },
        ],
        cta: 'Voglio trovare il percorso più adatto alla mia situazione',
      },
      individualPsychotherapy: {
        eyebrow: 'Psicoterapia Individuale',
        title: 'Condizioni Cliniche\ne Focus del Trattamento',
        intro: 'La psicoterapia individuale affronta un\'ampia gamma di difficoltà psicologiche con protocolli specifici e approcci calibrati sulla natura del disturbo e sulla storia individuale. Ogni trattamento è costruito attorno alla persona, non alla diagnosi.',
        approachLabel: 'Approccio terapeutico',
        outcomesLabel: 'Risultati attesi',
        conditions: [
          {
            title: 'Disturbi d\'Ansia',
            icon: '/anxiety.png',
            description: 'I disturbi d\'ansia includono ansia generalizzata, disturbo da panico, fobie specifiche, ansia sociale e disturbo ossessivo-compulsivo. Sono tra le condizioni più diffuse e rispondono bene a interventi psicoterapeutici strutturati.',
            approach: 'CBT con tecniche di esposizione graduale, ristrutturazione cognitiva e training di rilassamento. Nei casi più complessi, integrazione con tecnologie VR per l\'esposizione controllata.',
            outcomes: 'Riduzione significativa dei sintomi ansiosi, superamento dei comportamenti evitanti, maggiore capacità di gestire situazioni difficili.',
          },
          {
            title: 'Disturbi dell\'Umore',
            icon: '/emotion.png',
            description: 'La depressione, la distimia e i disturbi dell\'umore sono caratterizzati da tristezza persistente, perdita di interesse, stanchezza e difficoltà cognitive. Richiedono un approccio che combini comprensione emotiva e attivazione comportamentale.',
            approach: 'CBT focalizzata sull\'attivazione comportamentale e la ristrutturazione cognitiva. ACT per sviluppare accettazione e azione orientata ai valori nonostante la sofferenza emotiva.',
            outcomes: 'Riduzione dei sintomi depressivi, recupero della motivazione e del senso di direzione, costruzione di risorse per la prevenzione della ricaduta.',
          },
          {
            title: 'DOC e Pensieri Intrusivi',
            icon: '/ocd.png',
            description: 'Il disturbo ossessivo-compulsivo è caratterizzato da pensieri intrusivi ricorrenti e comportamenti compulsivi che ne riducono temporaneamente l\'ansia. È una condizione trattabile con protocolli specifici basati sull\'evidenza.',
            approach: 'ERP (Esposizione con Prevenzione della Risposta), tecnica gold standard per il DOC. Integrazione con strategie cognitive per ridurre la credenza nei pensieri ossessivi.',
            outcomes: 'Riduzione significativa delle compulsioni, maggiore tolleranza all\'incertezza, autonomia nelle situazioni precedentemente evitate.',
          },
          {
            title: 'Regolazione Emotiva e Stress',
            icon: '/fear.png',
            description: 'Le difficoltà di regolazione emotiva si manifestano con reazioni sproporzionate, difficoltà a calmarsi, impulsività o al contrario eccessiva inibizione emotiva. Il burnout e lo stress cronico rientrano spesso in questa area.',
            approach: 'ACT per sviluppare flessibilità psicologica e consapevolezza emotiva. Tecniche di mindfulness, strategie di defusione cognitiva e lavoro sui valori personali.',
            outcomes: 'Maggiore consapevolezza emotiva, capacità di rispondere invece di reagire, riduzione del burnout e migliore qualità di vita quotidiana.',
          },
          {
            title: 'Difficoltà Relazionali',
            icon: '/conflict.png',
            description: 'Le difficoltà relazionali includono pattern ripetitivi nei rapporti interpersonali, difficoltà comunicative, conflitti ricorrenti, solitudine relazionale e dipendenza emotiva. Spesso riflettono pattern appresi nell\'infanzia.',
            approach: 'CBT con focus sui pattern cognitivi relazionali. Lavoro sullo stile di attaccamento, sulle aspettative implicite nelle relazioni e sullo sviluppo di competenze comunicative assertive.',
            outcomes: 'Maggiore comprensione dei propri pattern relazionali, miglioramento delle competenze comunicative, relazioni più autentiche e soddisfacenti.',
          },
        ],
        cta: 'Voglio iniziare un percorso individuale',
      },
      coupleFamily: {
        eyebrow: 'Supporto per Coppie e Famiglie',
        title: 'Interventi Relazionali\ne Sistemici',
        intro: 'Le difficoltà relazionali e familiari richiedono un approccio che lavori sul sistema nel suo insieme, non solo sugli individui che lo compongono. La terapia interviene a livello della comunicazione, delle dinamiche di potere e dei pattern disfunzionali condivisi.',
        interventionLabel: 'Intervento terapeutico',
        areas: [
          {
            title: 'Rotture Comunicative',
            description: 'La comunicazione disfunzionale è spesso alla radice dei conflitti relazionali: malintesi cronici, schemi di attacco-difesa, silenzi protratti. Il lavoro terapeutico analizza i pattern comunicativi e introduce modalità più funzionali.',
            intervention: 'Si lavora sull\'identificazione dei pattern comunicativi disfunzionali, sulla costruzione di spazi di ascolto autentico e sullo sviluppo di strategie di comunicazione non-violenta e assertiva.',
          },
          {
            title: 'Supporto nella Separazione',
            description: 'La separazione è una delle transizioni più complesse della vita familiare, con impatti profondi su tutti i membri del sistema, specialmente i figli. Il supporto psicologico accompagna questo processo riducendo il conflitto e proteggendo il benessere di tutti.',
            intervention: 'Sostegno emotivo individuale e di coppia durante la separazione. Orientamento sulla genitorialità condivisa, supporto alla comunicazione post-separazione e tutela del benessere dei figli.',
          },
          {
            title: 'Sfide Genitoriali',
            description: 'La genitorialità porta sfide diverse in ogni fase evolutiva del figlio. Comportamenti difficili, difficoltà scolastiche, adolescenza turbolenta, comunicazione interrotta: ogni situazione richiede una lettura contestuale e strategie specifiche.',
            intervention: 'Psicoeducazione sullo sviluppo evolutivo, lavoro sugli stili genitoriali, costruzione di strategie educative coerenti e adeguate all\'età. Coinvolgimento del figlio quando clinicamente indicato.',
          },
          {
            title: 'Conflitti Familiari Sistemici',
            description: 'I conflitti familiari cronicizzati spesso riflettono dinamiche sistemiche profonde: regole implicite, ruoli rigidi, triangolazioni, deleghe invisibili. L\'approccio sistemico lavora sul sistema nel suo complesso per produrre cambiamenti duraturi.',
            intervention: 'Lettura delle dinamiche sistemiche, lavoro sulle regole implicite del sistema familiare, interventi sulle triangolazioni e supporto alla costruzione di nuovi equilibri relazionali.',
          },
        ],
        cta: 'Voglio supporto per la mia situazione relazionale',
      },
      supportAreas: {
        eyebrow: 'Aree di Supporto',
        title: 'Difficoltà Emotive, Relazionali\ne Personali',
        intro: 'Le aree di supporto psicologico coprono uno spettro ampio di difficoltà che le persone portano in terapia. Ogni area ha caratteristiche cliniche specifiche e risponde a interventi mirati e personalizzati.',
        approachLabel: 'Approccio terapeutico',
        outcomesLabel: 'Risultati attesi',
        areas: [
          {
            key: 'anxiety',
            icon: '/anxiety.png',
            title: 'Ansia e Gestione dello Stress',
            clinical: 'L\'ansia è una risposta adattiva che diventa problematica quando è sproporzionata, persistente e interferisce con il funzionamento quotidiano. Include disturbo d\'ansia generalizzata, attacchi di panico, fobie e ansia sociale.',
            approach: 'Protocolli CBT specifici per ogni tipo di disturbo ansioso. Tecniche di esposizione graduale, ristrutturazione cognitiva, training di rilassamento e, dove indicato, integrazione con realtà virtuale.',
            outcomes: 'Riduzione dell\'ansia anticipatoria, superamento dei comportamenti evitanti, recupero della libertà di movimento nelle aree precedentemente bloccate.',
          },
          {
            key: 'mood',
            icon: '/emotion.png',
            title: 'Difficoltà Emotive e dell\'Umore',
            clinical: 'I disturbi dell\'umore comprendono la depressione maggiore, la distimia e i disturbi bipolari. Si manifestano con tristezza pervasiva, perdita di interesse, stanchezza, difficoltà cognitive e, nei casi gravi, ideazione suicidaria.',
            approach: 'CBT con attivazione comportamentale e ristrutturazione cognitiva. ACT per sviluppare accettazione e azione orientata ai valori. Coordinamento con psichiatri quando indicato farmacologicamente.',
            outcomes: 'Riduzione dei sintomi depressivi, recupero dell\'energia e della motivazione, prevenzione della ricaduta attraverso strumenti di self-monitoring.',
          },
          {
            key: 'ocd',
            icon: '/ocd.png',
            title: 'Pensieri Intrusivi e Comportamenti Compulsivi',
            clinical: 'Il disturbo ossessivo-compulsivo è caratterizzato da ossessioni (pensieri intrusivi egodistonici) e compulsioni (comportamenti rituali per ridurre l\'ansia). Cause e meccanismi sono ben noti e il disturbo risponde a trattamenti specifici.',
            approach: 'ERP come tecnica principale, integrata con interventi cognitivi per ridurre le credenze ossessive. Lavoro sulla tolleranza all\'incertezza e sulla prevenzione del rimuginio.',
            outcomes: 'Riduzione drastica del tempo dedicato a ossessioni e compulsioni, miglioramento del funzionamento quotidiano, autonomia nelle situazioni precedentemente evitate.',
          },
          {
            key: 'regulation',
            icon: '/fear.png',
            title: 'Regolazione Emotiva',
            clinical: 'Le difficoltà di regolazione emotiva si manifestano come reattività eccessiva, difficoltà a calmarsi, impulsività, blocco emotivo o iperemotività. Spesso correlano con esperienze di sviluppo precoci e stili di attaccamento insicuri.',
            approach: 'ACT per la flessibilità psicologica. Tecniche di mindfulness per lo sviluppo della consapevolezza emotiva. Strategie DBT-ispirate per la gestione delle emozioni intense.',
            outcomes: 'Maggiore stabilità emotiva, capacità di riconoscere e nominare le emozioni, risposta regolata alle situazioni stressanti.',
          },
          {
            key: 'relational',
            icon: '/conflict.png',
            title: 'Difficoltà Relazionali',
            clinical: 'I problemi relazionali ricorrenti riflettono spesso schemi di attaccamento disadattativi, aspettative implicite non soddisfatte, difficoltà comunicative o scarsa capacità empatica. Colpiscono le relazioni intime, familiari e professionali.',
            approach: 'Lavoro sui pattern cognitivi relazionali, stile di attaccamento e competenze comunicative. Tecniche assertive e role-playing per sviluppare nuove modalità relazionali.',
            outcomes: 'Maggiore comprensione dei propri schemi relazionali, miglioramento delle competenze comunicative, relazioni più autentiche e meno conflittuali.',
          },
        ],
        cta: 'Voglio supporto per le mie difficoltà',
      },
      networkWork: {
        eyebrow: 'Lavoro in Rete',
        title: 'Collaborazione Interdisciplinare\nper una Cura Integrata',
        intro: 'La complessità di alcune situazioni cliniche va oltre le competenze di un singolo professionista. La rete interdisciplinare non è un\'aggiunta opzionale: è parte integrante del modello di cura, attivata con precisione quando il benessere della persona lo richiede.',
        whyLabel: 'Perché è importante',
        roleLabel: 'Ruolo nella rete di cura',
        collaborators: [
          {
            title: 'Psichiatri',
            icon: 'psychiatry',
            why: 'Quando i sintomi hanno una componente biologica rilevante — come nei disturbi depressivi gravi, bipolari o psicotici — la collaborazione con lo psichiatra è fondamentale. Il coordinamento tra psicoterapia e farmacoterapia produce risultati superiori alla sola terapia farmacologica.',
            role: 'Valutazione psichiatrica, prescrizione farmacologica, monitoraggio degli effetti della terapia. La comunicazione tra psicoterapeuta e psichiatra garantisce coerenza e continuità del percorso.',
          },
          {
            title: 'Neuropsichiatri infantili',
            icon: 'child_care',
            why: 'Nei percorsi che coinvolgono adolescenti con difficoltà complesse — ADHD, disturbi del neurosviluppo, disturbi del comportamento — la valutazione neuropsichiatrica fornisce una comprensione più completa delle basi neurologiche delle difficoltà.',
            role: 'Diagnosi differenziale, valutazione neuropsichiatrica, supporto farmacologico quando indicato. Coordinamento con la famiglia e con il contesto scolastico.',
          },
          {
            title: 'Psicoterapeuti dell\'età evolutiva',
            icon: 'escalator_warning',
            why: 'Nelle famiglie in cui un figlio presenta difficoltà significative, la collaborazione con uno psicoterapeuta specializzato nell\'età evolutiva consente di supportare il bambino o l\'adolescente in modo specifico, mantenendo la coerenza con il lavoro familiare.',
            role: 'Psicoterapia individuale del minore, valutazione delle dinamiche evolutive, supporto alla genitorialità in coordinamento con il lavoro familiare.',
          },
          {
            title: 'Avvocati di diritto di famiglia',
            icon: 'gavel',
            why: 'In situazioni di separazione conflittuale, affidamento conteso o situazioni ad alta complessità legale, la comunicazione tra psicologo e avvocato è essenziale per proteggere il benessere dei figli e garantire coerenza tra il piano psicologico e le decisioni legali.',
            role: 'Coordinamento nei casi di separazione, supporto nelle valutazioni di affidamento, comunicazione tecnica per la tutela del minore. La collaborazione segue sempre un codice etico preciso.',
          },
          {
            title: 'Psicologi forensi',
            icon: 'balance',
            why: 'Quando un percorso clinico si intreccia con procedimenti giudiziari — valutazioni di capacità genitoriale, CTU/CTP, perizie psicologiche — la collaborazione con professionisti forensi specializzati garantisce rigore tecnico e coerenza tra i due ambiti.',
            role: 'Valutazioni psicologiche forensi, redazione di perizie, supporto in procedimenti civili. La Dott.ssa Cocozza opera in entrambi i domini, garantendo continuità e integrazione.',
          },
        ],
        cta: 'Voglio sapere di più sulla rete di collaborazione',
      },
      finalCta: {
        eyebrow: 'Naviga i Percorsi',
        title: 'Scegli il tuo\npercorso di cura',
        intro: 'L\'Area Clinica offre percorsi di psicoterapia strutturati e personalizzati. Per le esigenze che si intrecciano con contesti legali e forensi, l\'Area Forense offre competenze specializzate e integrate.',
        primaryButton: 'Prenota un Colloquio Clinico',
        secondaryButton: 'Esplora i Servizi di Psicologia Forense',
        primaryLink: '/contact',
        secondaryLink: '/forensic',
      },
    },
  },
  en: {
    brand: 'Psychotherapy and Forensic Psychology Practice',
    doctor: 'Dr. Laura Cocozza',
    nav: {
      home: 'Home',
      clinical: 'Clinical Area',
      forensic: 'Forensic Area',
      psylex: 'PsyLex',
      about: 'About',
      contact: 'Contact',
      book: 'Book a Consultation',
      bookShort: 'Book a Consultation',
      bookSession: 'Book a Session',
      mobileNavAria: 'Mobile navigation',
      mainNavAria: 'Main navigation',
      openMenuAria: 'Open menu',
      closeMenuAria: 'Close menu',
    },
    home: {
      eyebrow: 'Clinical psychotherapy and forensic psychology',
      by: 'BY',
      title: 'A professional, human, and authoritative space for your wellbeing.',
      description:
        'Tailored pathways for adolescents, adults, and families, integrating clinical and forensic expertise with multidisciplinary support.',
      ctaPrimary: 'I want to start my care journey',
      ctaAriaLabel: 'I want to start my care journey',
      logoAriaLabel: 'LC monogram – back to home',
      ctaSecondary: 'I choose my clinical pathway',
      trust: ['Cognitive Behavioral Therapy', 'Integrated Approach', 'Online & In-Person', 'Multidisciplinary Support'],
      trustSection: {
        identityName: 'Dr Laura Cocozza',
        imageAlt: 'Professional portrait of Dr Laura Cocozza',
        identitySubtitle: 'Psychotherapy and Forensic Psychology Practice',
        positioning:
          'Helping people rebuild emotional balance through structured, evidence-based psychological support and forensic expertise when needed.',
        roleTitle: 'Competence, Method and Care',
        roleDetails:
          'Psychologist • Cognitive-Behavioral Psychotherapist • Court-Appointed Expert (CTU) • Technical Consultant (CTP)',
        roleDescription:
          'An integrative clinical and forensic approach focused on clarity, emotional stability, and long-term psychological well-being.',
        cards: [
          {
            title: 'Clinical Psychotherapy',
            text: 'Evidence-based treatment using CBT and ACT for emotional and behavioral difficulties.',
          },
          {
            title: 'Forensic Psychology',
            text: 'Court-appointed evaluations (CTU/CTP), family law assessments, and legal expert consultancy.',
          },
          {
            title: 'Integrated Care Model',
            text: 'Collaborative multidisciplinary work with psychiatrists, neuropsychiatrists, and legal professionals.',
          },
          {
            title: 'Individualized Treatment',
            text: 'Tailored psychological pathways based on each person\'s emotional, relational, and contextual needs.',
          },
        ],
      },
      clinicalAreaIntro: {
        eyebrow: 'Clinical Area',
        title: 'Cognitive-behavioral psychotherapy\nfor adolescents, adults, and families',
        paragraph1:
          'The practice offers psychotherapy pathways, psychological support and guidance for people navigating emotional, relational, and family difficulties.',
        paragraph2:
          'Each pathway is built through an integrated, multidisciplinary approach, with the goal of providing support that is personalised, structured, and deeply human.',
        secondary:
          'A clinical space oriented toward listening, understanding, and building a sustainable psychological balance over time.',
        highlights: [
          'Accurate initial assessment to define clear priorities and realistic goals.',
          'Structured pathway with ongoing clinical progress monitoring.',
          'Personalized intervention for emotional, relational, and family needs.',
          'Multidisciplinary coordination whenever it improves outcomes.',
        ],
        cta: 'I want to find the right pathway for me',
        imageAlt: 'Dr. Laura Cocozza in her professional practice',
      },
      integratedCareProcess: {
        eyebrow: 'How It Works',
        title: 'The Care Process',
        steps: [
          {
            number: '01',
            title: 'Understanding the situation',
            description:
              "Every pathway begins with careful understanding of the person's personal history, emotional difficulties, and specific needs.",
          },
          {
            number: '02',
            title: 'Building the pathway',
            description:
              'The therapeutic intervention is structured in a personalised way, integrating clinical tools and strategies oriented toward individual goals.',
          },
          {
            number: '03',
            title: 'Multidisciplinary collaboration',
            description:
              'When needed, the practice collaborates with specialists in psychiatry, neuropsychiatry, and law to offer integrated support.',
          },
          {
            number: '04',
            title: 'Ongoing support',
            description:
              'The goal of the pathway is to foster emotional stability, awareness, and a sustainable psychological balance over time.',
          },
        ],
      },
      multidisciplinaryNetwork: {
        eyebrow: 'Multidisciplinary Network',
        title: 'Integrated support through a network of specialists',
        intro:
          'The practice operates through a collaborative network of specialists, allowing each therapeutic pathway to be supported through an integrated and multidisciplinary approach tailored to individual and family needs.',
        centerLabel: 'Integrated Care Model',
        desktopCenterLabel: 'Integrated Care Model',
        desktopSpineTitle: 'Integrated Care Model',
        nodeKicker: 'Specialist care pillar',
        nodes: [
          {
            title: 'Child & Adolescent Psychotherapists',
            description:
              'Integrated support for developmental pathways and complex family dynamics.',
          },
          {
            title: 'Neuropsychiatrists',
            description:
              'Specialist collaboration in cases requiring neuropsychiatric and clinical integration.',
          },
          {
            title: 'Psychiatrists',
            description:
              'Integrated psychiatric and psychological support for continuity in complex care pathways.',
          },
          {
            title: 'Family Law Attorneys',
            description:
              'Legal collaboration within complex family dynamics and high-stakes decision-making contexts.',
          },
          {
            title: 'Forensic Psychology Professionals',
            description:
              'Interdisciplinary support for technical assessments, court-related contexts, and forensic pathways.',
          },
        ],
        cta: {
          clinical: {
            title: 'Clinical Psychology',
            text: 'Explore therapeutic pathways, emotional support services, family care, and individualized treatment approaches.',
            button: 'I want the clinical support that fits me',
          },
          forensic: {
            title: 'Forensic Psychology',
            text: 'Discover forensic services, legal psychology support, court-related expertise, and the PsyLex project.',
            button: 'I want clarity for my forensic case',
          },
        },
      },
      therapeuticApproach: {
        eyebrow: 'About the process',
        title: 'Therapeutic Approach',
        subheading: 'Evidence-based therapeutic methods,\nintegrated with innovative tools\nand multidisciplinary approaches.',
        editorial: 'Every pathway is built on scientifically validated methods, adapted to individual needs.',
        cta: 'I want to discover the method that helps me most',
        panels: [
          {
            label: 'CBT',
            title: 'Cognitive Behavioral Therapy (CBT)',
            description: 'An evidence-based therapeutic approach focused on understanding the relationship between thoughts, emotions, and behaviors.',
          },
          {
            label: 'ACT',
            title: 'Acceptance and Commitment Therapy (ACT)',
            description: 'An approach focused on developing psychological flexibility and emotional equilibrium.',
          },
          {
            label: 'VR',
            title: 'Virtual Reality',
            description: 'Immersive technologies used as support in therapeutic pathways and the management of specific emotional and behavioral difficulties.',
          },
        ],
      },
      editorialQuote: {
        quote: 'Psychotherapy is not about changing who we are, but about understanding with greater clarity how we experience emotions, relationships, and life itself.',
        attribution: '— Dr. Laura Cocozza',
        ariaLabel: 'Editorial quote',
      },
      quietEditorial: {
        ariaLabel: 'Editorial pause',
        text: 'Every therapeutic journey begins with the experience of being welcomed, heard, and respected.',
        note: 'A professional and confidential space, shaped with care.',
      },
      whoIsItFor: {
        eyebrow: 'Who it is for',
        title: 'Pathways built around\nthe different stages of life\nand individual needs',
        subtext: 'Each therapeutic pathway is developed considering the personal, relational, and emotional context of every individual.',
        cta: 'I want a pathway tailored to my life stage',
        panels: [
          {
            key: 'adolescents',
            icon: '/youth.png',
            title: 'Adolescents',
            description: 'Dedicated pathways for adolescents navigating emotional changes, relational difficulties, anxiety, stress, or complex developmental stages.',
          },
          {
            key: 'adults',
            icon: '/plus-18-movie.png',
            title: 'Adults',
            description: 'Psychological support and psychotherapy for managing stress, anxiety, emotional and relational difficulties, and personal life transitions.',
          },
          {
            key: 'families',
            icon: '/family.png',
            title: 'Families',
            description: 'Consultations and support pathways for complex family dynamics, parenthood, and moments of significant change.',
          },
        ],
      },
      clinicalAreaTransition: {
        eyebrow: 'Clinical Pathways',
        title: 'A therapeutic pathway\nbuilt around\nthe person',
        paragraph:
          'Explore the support areas,\ntherapeutic approaches,\nand intervention models\nof the clinical practice.',
        cta: 'I want to begin a tailored clinical pathway',
      },
      supportAreas: {
        eyebrow: 'Support Areas',
        title: 'Therapeutic support\nfor emotional,\nrelational, and personal challenges',
        subtext:
          'Each pathway is adapted to each person\'s specific needs through a structured, gradual, and personalized therapeutic approach.',
        panels: [
          {
            key: 'anxiety',
            icon: '/anxiety.png',
            title: 'Anxiety and stress management',
            description:
              'Support pathways focused on anxiety, emotional stress, persistent fears, and mental overload.',
          },
          {
            key: 'mood',
            icon: '/emotion.png',
            title: 'Emotional and mood difficulties',
            description:
              'Psychological support for periods of emotional vulnerability, low motivation, persistent sadness, and difficulty maintaining emotional balance.',
          },
          {
            key: 'ocd',
            icon: '/ocd.png',
            title: 'Intrusive thoughts and compulsive behaviors',
            description:
              'Interventions focused on recurring thoughts, compulsions, anxiety management, and cognitive rigidity.',
          },
          {
            key: 'regulation',
            icon: '/fear.png',
            title: 'Emotional regulation',
            description:
              'Pathways focused on emotional awareness, stress management, and everyday psychological balance.',
          },
          {
            key: 'relational',
            icon: '/conflict.png',
            title: 'Relational difficulties',
            description:
              'Psychological support for complex relational dynamics, emotional conflict, communication difficulties, and challenging personal relationships.',
          },
        ],
      },
      familySupport: {
        eyebrow: 'Where relationships regain balance',
        title: 'Couple & Family Support',
        intro:
          'A dedicated section for couples, parents, and families seeking structured psychological support through conflict, transition, and relational change.',
        sectionCta: 'I want to rebuild balance in my relationships',
        panels: [
          {
            icon: '/relationship.png',
            title: 'Couple Pathways',
            intro: 'Support spaces designed to improve communication, navigate conflict, and rebuild emotional understanding.',
            cta: 'I want to strengthen communication in my relationship',
            highlights: [
              'Communication difficulties',
              'Emotional reconnection',
              'Conflict navigation',
              'Relationship transitions',
              'Restoring relational balance',
            ],
          },
          {
            icon: '/separated.png',
            title: 'Support During Separation',
            intro: 'Psychological guidance through emotionally complex moments of separation and family transition.',
            cta: 'I want support through separation and transition',
            highlights: [
              'Emotional stabilization',
              'Separation support',
              'Parenting transition guidance',
              'Family restructuring',
              'Psychological support through change',
            ],
          },
          {
            icon: '/parental-guidance.png',
            title: 'Parenting Support',
            intro: 'Dedicated support pathways for parents navigating educational, emotional, and relational challenges.',
            cta: 'I want guidance for my parenting journey',
            highlights: [
              'Parenting guidance',
              'Educational challenges',
              'Emotional family dynamics',
              'Parent-child communication',
              'Relational support pathways',
            ],
          },
          {
            icon: '/family-consultation.png',
            title: 'Family Consultations',
            intro: 'Support interventions for complex family situations, conflict resolution, and relational balance.',
            cta: 'I want clarity for my family dynamics',
            highlights: [
              'Complex family situations',
              'Conflict mediation support',
              'Emotional regulation',
              'Family relational assessment',
              'Integrated multidisciplinary guidance',
            ],
          },
        ],
      },
      aboutSection: {
        eyebrow: 'PROFESSIONAL PROFILE',
        title: 'A multidisciplinary approach grounded in clinical and forensic psychology',
        badge: 'Psychologist • Cognitive-Behavioral Psychotherapist • Forensic Psychologist',
        paragraph:
          "Dr. Laura Cocozza is a psychologist, cognitive-behavioral psychotherapist, and forensic psychologist. Her professional practice integrates clinical psychotherapy with forensic consultancy, offering an integrated care model that responds with precision to the emotional, relational, and legal needs of every individual. Through the use of Cognitive-Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and innovative technologies such as virtual reality, each pathway is built around the specificity of the person. In the forensic domain, she collaborates with courts and legal professionals as a court-appointed expert (CTU/CTP), working on psychological assessments, family law, and civil proceedings. A deeply integrated, multidisciplinary, and human-centered approach.",
        ctaButton: 'I want to book my session',
        ctaSubtext: 'Online and in-person consultations available',
        portraitAlt: 'Dr. Laura Cocozza — professional portrait',
      },
      faqSection: {
        eyebrow: 'FREQUENTLY ASKED QUESTIONS',
        title: 'Information about consultations, therapy pathways, and forensic services',
        intro: 'A selection of common questions regarding clinical pathways, consultations, and psychological support services.',
        faqs: [
          { q: 'What types of psychological support do you offer?', a: 'The practice offers individual psychotherapy, psychological support, family consultations, and forensic psychology services. Pathways are built in a personalised way based on each person\'s emotional, relational, and contextual needs.' },
          { q: 'Who are therapy pathways designed for?', a: 'Pathways are designed for adolescents, adults, and families navigating emotional, relational, or behavioural difficulties, or significant life transitions. The approach is always adapted to individual context and personal history.' },
          { q: 'Are online consultations available?', a: 'Yes. The practice offers consultations both in-person at the Udine office and online through secure, private platforms. The format is agreed upon based on each person\'s needs.' },
          { q: 'How long does a psychotherapy pathway usually last?', a: 'Duration varies according to therapeutic goals, the nature of the difficulties, and the evolution of the process. It is always determined collaboratively, with regular moments of review and objective reassessment.' },
          { q: 'What is cognitive-behavioral psychotherapy?', a: 'Cognitive-Behavioral Therapy (CBT) is an evidence-based approach focused on understanding the relationship between thoughts, emotions, and behaviors. It is used to treat anxiety, mood difficulties, OCD, relational issues, and many other psychological challenges.' },
          { q: 'What is Acceptance and Commitment Therapy (ACT)?', a: 'ACT is a therapeutic approach focused on developing psychological flexibility, acceptance, and values-oriented action. It is particularly effective in pathways for emotional regulation and stress management.' },
          { q: 'How are forensic psychology consultations conducted?', a: 'Forensic consultations can be requested by private individuals, lawyers, or courts. They include psychological assessments, expert reports, CTU/CTP activities, and support in family law proceedings.' },
          { q: 'Do you collaborate with other professionals?', a: 'Yes. The practice works through a multidisciplinary network that includes psychiatrists, child neuropsychiatrists, developmental psychotherapists, and family law attorneys, offering integrated and continuous support.' },
          { q: 'Can I request support during family or separation processes?', a: 'Yes. The practice offers specific consultations for families navigating separation, with attention to parenting, children\'s wellbeing, and emotional management through critical transitions.' },
          { q: 'How can I book an appointment or request information?', a: 'You can contact the practice via email at laura.cocozza.893@psypec.it or info@psylexitalia.com, or by phone at +39 339 366 980. First contact usually takes the form of a brief introductory call.' },
        ],
      },
      contactSection: {
        eyebrow: 'CONTACTS',
        title: 'Request information or schedule a consultation',
        intro: 'It is possible to request information regarding clinical pathways, family consultations, or forensic psychological services through the practice contacts. First contact is simple, private, and frictionless.',
        form: {
          fullName: 'Full Name',
          email: 'Email',
          phone: 'Phone (optional)',
          subject: 'Subject',
          message: 'Message',
          send: 'I want a dedicated response →',
          mailtoName: 'Name',
          mailtoEmail: 'Email',
          mailtoPhone: 'Phone',
          mailtoMessage: 'Message',
        },
        info: {
          emailTitle: 'Email',
          phoneTitle: 'Phone',
          locationTitle: 'Location',
          consultationsTitle: 'Consultations',
          emails: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
          phone: '+39 339 366 980',
          whatsapp: 'https://wa.me/39339366980',
          whatsappLabel: 'Message us on WhatsApp',
          address: 'Via Generale Baldissera 14 — Udine',
          consultations: 'Online and in-person consultations',
        },
      },
    },
    sections: {
      clinicalPreview: 'Clinical Area',
      forensicPreview: 'Forensic Area',
      psylexPreview: 'PsyLex Preview',
      aboutPreview: 'About Laura Cocozza',
      philosophy: 'Therapeutic Philosophy',
      process: 'How It Works',
      network: 'Network & Collaborations',
      testimonials: '"A method that combines empathic listening, structure, and practical direction."',
      contactCta: 'Start today with a path built on trust, clarity, and expertise.',
    },
    pages: {
      clinicalHero: 'Clinical Area',
      forensicHero: 'Forensic Area',
      aboutHero: 'About',
      contactHero: 'Contact',
    },
    footer: {
      brand: 'Psychotherapy and Forensic Psychology Practice',
      doctor: 'Dr. Laura Cocozza',
      tagline: 'Online and in-person consultations available.',
      nav: ['Home', 'Clinical Area', 'Forensic Psychology', 'Contacts', 'FAQ'],
      navLinks: ['/home', '/clinical', '/forensic', '/contact', '/home'],
      logoAriaLabel: 'Home — Laura Cocozza',
      navAriaLabel: 'Footer navigation',
      copyright: '© 2026 Laura Cocozza — All rights reserved.',
      email: 'laura.cocozza.893@psypec.it',
      phone: '+39 339 366 980',
      address: 'Via Generale Baldissera 14 — Udine',
    },
    clinicalPage: {
      hero: {
        eyebrow: 'Clinical Area',
        title: 'Structured, personalised\nand evidence-based\npsychotherapy',
        subtitle: 'An integrated clinical system for adolescents, adults, and families, built around the person and oriented toward lasting psychological wellbeing.',
      },
      overview: {
        eyebrow: 'Clinical Overview',
        title: 'A clinical approach that integrates\nmethod, listening, and human care',
        intro: 'The clinical practice offers evidence-based psychotherapy pathways built on a deep understanding of each person\'s individual history, emotional difficulties, and relational context. The approach integrates validated clinical tools with authentic human presence.',
        blocks: [
          {
            title: 'Initial clinical assessment',
            text: 'Every pathway begins with a thorough assessment of the presenting situation: emotional history, current difficulties, personal resources, and therapeutic goals. This allows the definition of a targeted and realistic intervention plan.',
          },
          {
            title: 'Structured and monitored pathway',
            text: 'The therapeutic intervention follows a clear structure, with shared objectives and regular progress reviews. Each phase is adapted to the evolution of the pathway and to the person\'s emerging needs.',
          },
          {
            title: 'Integrated and multidisciplinary approach',
            text: 'When useful for overall wellbeing, the pathway draws on a network of specialists: psychiatrists, neuropsychiatrists, developmental psychotherapists, and legal professionals. Collaboration is always coordinated and person-centred.',
          },
          {
            title: 'Orientation toward lasting wellbeing',
            text: 'The goal is not symptom management but the construction of a stable and sustainable psychological balance over time. Pathways aim to develop awareness, internal resources, and concrete tools for navigating life\'s difficulties.',
          },
        ],
        cta: 'I want to learn more about the clinical approach',
      },
      careProcess: {
        eyebrow: 'How It Works',
        title: 'The Integrated Care Process',
        intro: 'Every therapeutic pathway follows a structured logic that adapts to individual needs. Methodological clarity does not reduce flexibility: each phase is recalibrated based on the person\'s evolution and shared objectives.',
        steps: [
          {
            number: '01',
            title: 'First contact and situational understanding',
            description: 'The pathway begins with an introductory meeting in which personal history, presenting difficulties, relational and family context, and the person\'s expectations are explored. This moment serves to build an authentic therapeutic alliance.',
            detail: 'The initial assessment is not only diagnostic: it is the foundation of the therapeutic relationship. A complete clinical history is gathered and priorities are defined collaboratively with the person.',
          },
          {
            number: '02',
            title: 'Goal-setting and pathway construction',
            description: 'Based on the initial assessment, a personalised therapeutic plan is built with clear and shared objectives. Clinical tools are selected according to specific needs: CBT, ACT, VR technologies, or integrated combinations.',
            detail: 'The therapeutic plan is a living document: it is reviewed and updated throughout the pathway, in response to progress and shifts in the person\'s needs.',
          },
          {
            number: '03',
            title: 'Therapeutic intervention and specialist collaboration',
            description: 'The intervention takes place through regular sessions using specific techniques calibrated to the objectives. When necessary, the multidisciplinary network is activated: psychiatrists, neuropsychiatrists, developmental therapists, or legal professionals.',
            detail: 'Collaboration with other specialists does not replace the primary therapeutic relationship, but enriches it. Every external contribution is integrated coherently within the individual pathway.',
          },
          {
            number: '04',
            title: 'Consolidation, review and ongoing support',
            description: 'In the concluding phases, attention shifts to consolidating progress, preventing relapse, and building emotional autonomy. Post-therapy support remains available to maintain wellbeing.',
            detail: 'The end of the formal pathway is not a conclusion: it is the beginning of autonomous equilibrium. The person acquires tools and awareness that accompany them over time.',
          },
        ],
        cta: 'I want to understand how the pathway works',
      },
      therapeuticApproach: {
        eyebrow: 'Therapeutic Approach',
        title: 'Evidence-Based Clinical Methods',
        intro: 'Every therapeutic approach used is scientifically validated and adapted to individual needs. The choice of method is not rigid: it depends on the nature of the difficulties, the person\'s history, and the goals of the pathway.',
        mechanismLabel: 'How it works',
        applicationLabel: 'Clinical application',
        targetsLabel: 'Primary indications',
        outcomesLabel: 'Expected outcomes',
        approaches: [
          {
            label: 'CBT',
            title: 'Cognitive Behavioral Therapy',
            definition: 'CBT is one of the most studied and validated psychotherapeutic models. It is based on understanding the relationship between thoughts, emotions, and behaviors: changing dysfunctional cognitive patterns allows emotional and behavioral responses to shift.',
            mechanism: 'The thought–emotion–behavior cycle is at the centre of the intervention: identifying negative automatic thoughts, understanding their emotional impact, and replacing them with more functional patterns is the fundamental process of therapeutic change.',
            application: 'Work proceeds through structured techniques: cognitive restructuring, graded exposure, relaxation training, problem solving, and emotional diaries. Each technique is adapted to the individual profile.',
            targets: ['Anxiety disorders and phobias', 'Depression and mood difficulties', 'OCD and intrusive thoughts', 'Eating disorders', 'Stress management', 'Relational difficulties'],
            outcomes: 'Significant reduction of symptoms, greater emotional awareness, concrete tools for managing difficulties, relapse prevention.',
          },
          {
            label: 'ACT',
            title: 'Acceptance and Commitment Therapy',
            definition: 'ACT is a third-generation cognitive-behavioral approach. It does not focus on eliminating pain or negative thoughts, but on accepting inner experience and taking action oriented toward personal values.',
            mechanism: 'Change occurs through six core processes: acceptance, cognitive defusion, present-moment awareness, the observing self, values, and committed action. Psychological flexibility is the central goal.',
            application: 'Work uses mindfulness exercises, therapeutic metaphors, values clarification, and cognitive defusion techniques. Attention shifts from symptom control to living a rich and meaningful life.',
            targets: ['Emotional regulation', 'Generalised anxiety', 'Burnout and chronic stress', 'Chronic pain', 'Existential difficulties', 'Life transitions'],
            outcomes: 'Greater psychological flexibility, reduced cognitive rigidity, ability to act in line with one\'s values despite difficulties.',
          },
          {
            label: 'VR',
            title: 'Virtual Reality Therapy',
            definition: 'Virtual reality is used as an advanced clinical tool within structured therapeutic protocols. It does not replace traditional psychotherapy, but enhances its effectiveness in specific contexts.',
            mechanism: 'Immersion in controlled virtual environments allows clinically relevant situations to be simulated safely: the person can be gradually exposed to anxiety-provoking stimuli in a protected context, with full therapeutic supervision.',
            application: 'Used primarily in graded exposure protocols for specific phobias, anxiety disorders, PTSD, and situations of high emotional activation. Also supports relaxation techniques and guided visualisation.',
            targets: ['Specific phobias', 'Social anxiety disorder', 'PTSD', 'Agoraphobia', 'Performance anxiety', 'Systematic desensitisation'],
            outcomes: 'Rapid reduction of avoidant behaviors, effective desensitisation, transfer of learned skills to real-world environments.',
          },
        ],
        cta: 'I want to explore the approach that fits me best',
      },
      whoItIsFor: {
        eyebrow: 'Who It Is For',
        title: 'Clinical Populations\nand Therapeutic Focus',
        intro: 'The clinical approach adapts to the developmental, emotional, and contextual characteristics of each group of people. The pathway structure, techniques used, and objectives vary significantly depending on age and the nature of presenting difficulties.',
        clinicalNeedsLabel: 'Clinical needs',
        therapeuticFocusLabel: 'Therapeutic focus',
        approachLabel: 'Approach',
        presentingIssuesLabel: 'Common presenting issues',
        populations: [
          {
            title: 'Adolescents',
            age: 'From 14 years',
            clinicalNeeds: 'Adolescence is a phase of profound identity, relational, and neurobiological change. Difficulties that emerge during this phase require an approach that respects the developmental process and the construction of autonomy.',
            therapeuticFocus: 'Identity development and self-esteem, emotional management, peer relationship navigation, academic difficulties, relationship with body and self-image.',
            presentingIssues: ['Academic and performance anxiety', 'Relational difficulties and isolation', 'Self-harming behaviors', 'Emerging eating disorders', 'Depressed mood and apathy', 'Family conflicts and rebellion'],
            approach: 'Directive yet autonomy-respecting approach, with strong attention to the therapeutic relationship. Age-adapted CBT techniques, emotional work, and family involvement when useful.',
          },
          {
            title: 'Adults',
            age: 'From 18 years',
            clinicalNeeds: 'Adults bring a wide variety of difficulties to therapy: chronic stress, existential crises, relational difficulties, anxious or depressive symptoms, past or present traumas. Every pathway begins with an in-depth assessment of life context.',
            therapeuticFocus: 'Stress and burnout management, emotional and relational difficulties, processing of traumatic events, significant life transitions, search for greater authenticity and wellbeing.',
            presentingIssues: ['Anxiety disorders and panic attacks', 'Depression and depressed mood', 'Occupational burnout', 'Relationship crises and separation', 'Grief processing', 'Identity and meaning difficulties'],
            approach: 'Collaborative, goal-focused approach. Flexible use of CBT, ACT, and integrated techniques, with attention to personal history and current relational context.',
          },
          {
            title: 'Families',
            age: 'Family systems',
            clinicalNeeds: 'The family as a system brings complex dynamics that require an approach capable of reading relationships, roles, and communication patterns. Difficulties rarely belong to a single person: they involve the entire family system.',
            therapeuticFocus: 'Communication improvement, conflict management, support through family transitions (separation, parenthood, bereavement), redefinition of roles and power dynamics.',
            presentingIssues: ['Parent-child conflicts', 'Chronically dysfunctional communication', 'Separation and family reorganisation', 'Complex parenthood', 'Shared family grief', 'Entrenched dysfunctional dynamics'],
            approach: 'Integrated systemic approach: reading relational dynamics, working on the family system\'s implicit rules, supporting the construction of new communication and relational patterns.',
          },
        ],
        cta: 'I want to find the pathway that best fits my situation',
      },
      individualPsychotherapy: {
        eyebrow: 'Individual Psychotherapy',
        title: 'Clinical Conditions\nand Treatment Focus',
        intro: 'Individual psychotherapy addresses a wide range of psychological difficulties with specific protocols and approaches calibrated to the nature of the disorder and individual history. Every treatment is built around the person, not the diagnosis.',
        approachLabel: 'Therapeutic approach',
        outcomesLabel: 'Expected outcomes',
        conditions: [
          {
            title: 'Anxiety Disorders',
            icon: '/anxiety.png',
            description: 'Anxiety disorders include generalised anxiety, panic disorder, specific phobias, social anxiety, and obsessive-compulsive disorder. They are among the most prevalent conditions and respond well to structured psychotherapeutic interventions.',
            approach: 'CBT with graded exposure techniques, cognitive restructuring, and relaxation training. In more complex cases, integration with VR technologies for controlled exposure.',
            outcomes: 'Significant reduction of anxious symptoms, overcoming avoidant behaviors, greater capacity to manage difficult situations.',
          },
          {
            title: 'Mood Disorders',
            icon: '/emotion.png',
            description: 'Depression, dysthymia, and mood disorders are characterised by persistent sadness, loss of interest, fatigue, and cognitive difficulties. They require an approach that combines emotional understanding with behavioral activation.',
            approach: 'CBT focused on behavioral activation and cognitive restructuring. ACT to develop acceptance and values-oriented action despite emotional suffering.',
            outcomes: 'Reduction of depressive symptoms, recovery of motivation and sense of direction, building resources for relapse prevention.',
          },
          {
            title: 'OCD and Intrusive Thoughts',
            icon: '/ocd.png',
            description: 'Obsessive-compulsive disorder is characterised by intrusive, ego-dystonic thoughts and compulsive behaviors that temporarily reduce anxiety. It is a treatable condition with specific evidence-based protocols.',
            approach: 'ERP (Exposure and Response Prevention), the gold standard technique for OCD. Integration with cognitive strategies to reduce belief in obsessive thoughts.',
            outcomes: 'Significant reduction in time spent on obsessions and compulsions, improved daily functioning, autonomy in previously avoided situations.',
          },
          {
            title: 'Emotional Regulation and Stress',
            icon: '/fear.png',
            description: 'Emotional regulation difficulties manifest as disproportionate reactions, difficulty calming down, impulsivity, or conversely excessive emotional inhibition. Burnout and chronic stress frequently fall within this area.',
            approach: 'ACT to develop psychological flexibility and emotional awareness. Mindfulness techniques, cognitive defusion strategies, and work on personal values.',
            outcomes: 'Greater emotional stability, ability to recognise and name emotions, regulated response to stressful situations.',
          },
          {
            title: 'Relational Difficulties',
            icon: '/conflict.png',
            description: 'Recurring relational problems often reflect maladaptive attachment patterns, unmet implicit expectations, communication difficulties, or limited empathic capacity. They affect intimate, family, and professional relationships.',
            approach: 'Work on relational cognitive patterns, attachment style, and communication skills. Assertiveness techniques and role-play to develop new relational modes.',
            outcomes: 'Greater understanding of one\'s own relational patterns, improved communication skills, more authentic and less conflictual relationships.',
          },
        ],
        cta: 'I want to begin an individual pathway',
      },
      coupleFamily: {
        eyebrow: 'Couple & Family Support',
        title: 'Relational and Systemic\nInterventions',
        intro: 'Relational and family difficulties require an approach that works on the system as a whole, not only on the individuals that compose it. Therapy intervenes at the level of communication, power dynamics, and shared dysfunctional patterns.',
        interventionLabel: 'Therapeutic intervention',
        areas: [
          {
            title: 'Communication Breakdowns',
            description: 'Dysfunctional communication is often at the root of relational conflict: chronic misunderstandings, attack-defend patterns, prolonged silences. Therapeutic work analyses communication patterns and introduces more functional modes.',
            intervention: 'Work on identifying dysfunctional communication patterns, building spaces for authentic listening, and developing non-violent and assertive communication strategies.',
          },
          {
            title: 'Separation Support',
            description: 'Separation is one of the most complex family transitions, with deep impacts on all members of the system, especially children. Psychological support accompanies this process by reducing conflict and protecting the wellbeing of all involved.',
            intervention: 'Individual and couple emotional support during separation. Guidance on shared parenting, support for post-separation communication, and safeguarding children\'s wellbeing.',
          },
          {
            title: 'Parenting Challenges',
            description: 'Parenthood brings different challenges at every developmental stage of the child. Difficult behaviors, academic difficulties, turbulent adolescence, broken communication: each situation requires contextual reading and specific strategies.',
            intervention: 'Psychoeducation on developmental stages, work on parenting styles, building consistent and age-appropriate educational strategies. Child involvement when clinically indicated.',
          },
          {
            title: 'Systemic Family Conflicts',
            description: 'Chronically entrenched family conflicts often reflect deep systemic dynamics: implicit rules, rigid roles, triangulations, invisible delegations. The systemic approach works on the system as a whole to produce lasting change.',
            intervention: 'Reading of systemic dynamics, work on the family\'s implicit rules, interventions on triangulations, and support in building new relational equilibria.',
          },
        ],
        cta: 'I want support for my relational situation',
      },
      supportAreas: {
        eyebrow: 'Areas of Support',
        title: 'Emotional, Relational\nand Personal Difficulties',
        intro: 'The areas of psychological support cover a broad spectrum of difficulties that people bring to therapy. Each area has specific clinical characteristics and responds to targeted and personalised interventions.',
        approachLabel: 'Therapeutic approach',
        outcomesLabel: 'Expected outcomes',
        areas: [
          {
            key: 'anxiety',
            icon: '/anxiety.png',
            title: 'Anxiety and Stress Management',
            clinical: 'Anxiety is an adaptive response that becomes problematic when disproportionate, persistent, and interfering with daily functioning. It includes generalised anxiety disorder, panic attacks, phobias, and social anxiety.',
            approach: 'Specific CBT protocols for each type of anxiety disorder. Graded exposure techniques, cognitive restructuring, relaxation training, and where indicated, integration with virtual reality.',
            outcomes: 'Reduction of anticipatory anxiety, overcoming avoidant behaviors, recovery of freedom of movement in previously blocked areas.',
          },
          {
            key: 'mood',
            icon: '/emotion.png',
            title: 'Emotional and Mood Difficulties',
            clinical: 'Mood disorders include major depression, dysthymia, and bipolar disorders. They manifest with pervasive sadness, loss of interest, fatigue, cognitive difficulties, and in severe cases, suicidal ideation.',
            approach: 'CBT with behavioral activation and cognitive restructuring. ACT to develop acceptance and values-oriented action. Coordination with psychiatrists when pharmacological intervention is indicated.',
            outcomes: 'Reduction of depressive symptoms, recovery of energy and motivation, relapse prevention through self-monitoring tools.',
          },
          {
            key: 'ocd',
            icon: '/ocd.png',
            title: 'Intrusive Thoughts and Compulsive Behaviors',
            clinical: 'Obsessive-compulsive disorder is characterised by obsessions (ego-dystonic intrusive thoughts) and compulsions (ritual behaviors to reduce anxiety). Causes and mechanisms are well understood and the disorder responds to specific treatments.',
            approach: 'ERP as the primary technique, integrated with cognitive interventions to reduce obsessive beliefs. Work on uncertainty tolerance and rumination prevention.',
            outcomes: 'Drastic reduction in time spent on obsessions and compulsions, improved daily functioning, autonomy in previously avoided situations.',
          },
          {
            key: 'regulation',
            icon: '/fear.png',
            title: 'Emotional Regulation',
            clinical: 'Emotional regulation difficulties manifest as excessive reactivity, difficulty calming down, impulsivity, emotional blocking, or hyperemotionality. They frequently correlate with early developmental experiences and insecure attachment styles.',
            approach: 'ACT for psychological flexibility. Mindfulness techniques for emotional awareness development. DBT-informed strategies for managing intense emotions.',
            outcomes: 'Greater emotional stability, ability to recognise and name emotions, regulated response to stressful situations.',
          },
          {
            key: 'relational',
            icon: '/conflict.png',
            title: 'Relational Difficulties',
            clinical: 'Recurring relational problems often reflect maladaptive attachment schemas, unmet implicit expectations, communication difficulties, or limited empathic capacity. They affect intimate, family, and professional relationships.',
            approach: 'Work on relational cognitive patterns, attachment style, and communication skills. Assertiveness techniques and role-play to develop new relational modes.',
            outcomes: 'Greater understanding of relational patterns, improved communication skills, more authentic and less conflictual relationships.',
          },
        ],
        cta: 'I want support for my difficulties',
      },
      networkWork: {
        eyebrow: 'Network-Based Work',
        title: 'Interdisciplinary Collaboration\nfor Integrated Care',
        intro: 'The complexity of some clinical situations goes beyond the competencies of a single professional. The interdisciplinary network is not an optional addition: it is an integral part of the care model, activated with precision when the person\'s wellbeing requires it.',
        whyLabel: 'Why it matters clinically',
        roleLabel: 'Role in the care network',
        collaborators: [
          {
            title: 'Psychiatrists',
            icon: 'psychiatry',
            why: 'When symptoms have a significant biological component — as in severe depressive, bipolar, or psychotic disorders — collaboration with the psychiatrist is fundamental. Coordination between psychotherapy and pharmacotherapy produces superior results to pharmacological therapy alone.',
            role: 'Psychiatric assessment, pharmacological prescription, therapy effect monitoring. Communication between psychotherapist and psychiatrist ensures coherence and continuity of the pathway.',
          },
          {
            title: 'Child Neuropsychiatrists',
            icon: 'child_care',
            why: 'In pathways involving adolescents with complex difficulties — ADHD, neurodevelopmental disorders, behavioral disorders — neuropsychiatric assessment provides a more complete understanding of the neurological bases of the difficulties.',
            role: 'Differential diagnosis, neuropsychiatric assessment, pharmacological support when indicated. Coordination with the family and school context.',
          },
          {
            title: 'Developmental Psychotherapists',
            icon: 'escalator_warning',
            why: 'In families where a child presents significant difficulties, collaboration with a developmental specialist allows the child or adolescent to be supported in a specific way, while maintaining coherence with the family work.',
            role: 'Individual psychotherapy of the minor, assessment of developmental dynamics, parenting support coordinated with family work.',
          },
          {
            title: 'Family Law Attorneys',
            icon: 'gavel',
            why: 'In situations of conflictual separation, contested custody, or high legal complexity, communication between psychologist and attorney is essential to protect children\'s wellbeing and ensure coherence between the psychological plan and legal decisions.',
            role: 'Coordination in separation cases, support in custody assessments, technical communication for the protection of the minor. Collaboration always follows a precise ethical code.',
          },
          {
            title: 'Forensic Psychologists',
            icon: 'balance',
            why: 'When a clinical pathway intersects with legal proceedings — parental capacity assessments, CTU/CTP, psychological reports — collaboration with specialised forensic professionals ensures technical rigour and coherence between the two domains.',
            role: 'Forensic psychological assessments, expert report preparation, support in civil proceedings. Dr Cocozza operates in both domains, ensuring continuity and integration.',
          },
        ],
        cta: 'I want to learn more about the collaborative network',
      },
      finalCta: {
        eyebrow: 'Explore Pathways',
        title: 'Choose your\ncare pathway',
        intro: 'The Clinical Area offers structured and personalised psychotherapy pathways. For needs that intersect with legal and forensic contexts, the Forensic Area offers specialised and integrated expertise.',
        primaryButton: 'Book a Clinical Consultation',
        secondaryButton: 'Explore Forensic Psychology Services',
        primaryLink: '/contact',
        secondaryLink: '/forensic',
      },
    },
  },
}

const CLINICAL_PAGE_CONTENT = {
  it: {
    hero: {
      eyebrow: 'Area Clinica',
      title: 'Percorsi Clinici di Psicoterapia',
      subtitle: 'Psicoterapia strutturata per adolescenti, adulti e famiglie',
      supporting:
        'Un percorso clinico guidato, chiaro e personalizzato che integra valutazione, metodo e continuità di cura in presenza e online.',
      primaryCta: 'Prenota un Colloquio Clinico',
      secondaryCta: 'Esplora i Percorsi',
      imageSrc: '/laura-cocozza-hero-image.jpg',
      imageAlt: 'Ambiente clinico calmo e professionale della Dott.ssa Laura Cocozza',
    },
    navigation: [
      { id: 'clinical-pathways', label: 'Percorso' },
      { id: 'clinical-methods', label: 'Metodi' },
      { id: 'clinical-audiences', label: 'Per chi è' },
      { id: 'clinical-conditions', label: 'Condizioni' },
      { id: 'clinical-network', label: 'Rete di cura' },
    ],
    pathway: {
      id: 'clinical-pathways',
      eyebrow: 'Modello Clinico',
      title: 'Un percorso clinico guidato in quattro passaggi',
      intro:
        'Tutte le spiegazioni sul processo clinico convergono qui: una sequenza essenziale, leggibile e orientata alla decisione.',
      steps: [
        {
          iconKey: 'assessment',
          step: '01',
          title: 'Assessment',
          description:
            'Valutazione iniziale accurata per comprendere storia clinica, bisogni attuali e priorità terapeutiche.',
        },
        {
          iconKey: 'goals',
          step: '02',
          title: 'Definizione degli obiettivi',
          description:
            'Obiettivi condivisi, realistici e misurabili per costruire un piano terapeutico realmente personalizzato.',
        },
        {
          iconKey: 'intervention',
          step: '03',
          title: 'Intervento',
          description:
            'Applicazione di strumenti evidence-based scelti in base alla persona, al contesto e alla complessità clinica.',
        },
        {
          iconKey: 'consolidation',
          step: '04',
          title: 'Consolidamento',
          description:
            'Verifica dei progressi, prevenzione della ricaduta e costruzione di un equilibrio psicologico più stabile.',
        },
      ],
    },
    methods: {
      id: 'clinical-methods',
      eyebrow: 'Libreria dei Metodi',
      title: 'Metodi clinici chiari, senza ripetizioni',
      intro:
        'Ogni metodo compare una sola volta: da qui in avanti il resto della pagina fa riferimento a questa libreria, evitando duplicazioni.',
      techniqueLabel: 'Tecniche chiave',
      conditionsLabel: 'Indicazioni',
      cards: [
        {
          code: 'CBT',
          title: 'CBT · Terapia Cognitivo Comportamentale',
          description:
            'Approccio strutturato orientato alla relazione tra pensieri, emozioni e comportamenti, utile quando serve lavorare con obiettivi chiari e strumenti pratici.',
          techniques: ['Ristrutturazione cognitiva', 'Esposizione graduale', 'Problem solving'],
          conditions: ['Ansia', 'Umore', 'Fobie', 'Difficoltà relazionali'],
        },
        {
          code: 'ACT',
          title: 'ACT · Acceptance & Commitment Therapy',
          description:
            'Metodo focalizzato su flessibilità psicologica, valori personali e capacità di restare presenti anche in condizioni emotivamente complesse.',
          techniques: ['Mindfulness', 'Defusione cognitiva', 'Lavoro sui valori'],
          conditions: ['Stress cronico', 'Regolazione emotiva', 'Burnout', 'Transizioni di vita'],
        },
        {
          code: 'VR',
          title: 'VR Therapy',
          description:
            'Supporto immersivo integrato ai protocolli clinici per creare esperienze controllate, graduali e monitorate in sicurezza.',
          techniques: ['Esposizione assistita', 'Simulazioni guidate', 'Desensibilizzazione'],
          conditions: ['Fobie', 'Ansia sociale', 'PTSD', 'Ansia da prestazione'],
        },
        {
          code: 'ERP',
          title: 'ERP · Esposizione con Prevenzione della Risposta',
          description:
            'Protocollo specifico per pensieri intrusivi e compulsioni, centrato sulla riduzione dei rituali e sull’aumento della tolleranza all’incertezza.',
          techniques: ['Esposizione mirata', 'Prevenzione dei rituali', 'Tolleranza all’incertezza'],
          conditions: ['DOC', 'Pensieri intrusivi', 'Compulsioni', 'Evitamento'],
        },
      ],
    },
    audiences: {
      id: 'clinical-audiences',
      eyebrow: 'Per Chi È',
      title: 'Tre percorsi costruiti su fase di vita e sistema relazionale',
      intro:
        'Ogni percorso clinico cambia linguaggio, obiettivi e ritmo in base alla persona o al nucleo familiare coinvolto.',
      focusLabel: 'Aree di focus',
      challengesLabel: 'Sfide frequenti',
      approachLabel: 'Sintesi dell’approccio',
      cards: [
        {
          title: 'Adolescenti',
          age: '14+',
          focus: ['Identità e autostima', 'Regolazione emotiva', 'Relazioni e scuola'],
          challenges: ['Ansia scolastica', 'Ritiro sociale', 'Conflitti familiari'],
          approach:
            'Percorso strutturato ma rispettoso dell’autonomia, con coinvolgimento familiare quando utile alla stabilità del sistema.',
        },
        {
          title: 'Adulti',
          age: '18+',
          focus: ['Stress e burnout', 'Umore e ansia', 'Transizioni personali'],
          challenges: ['Blocchi decisionali', 'Relazioni complesse', 'Sovraccarico emotivo'],
          approach:
            'Intervento focalizzato su chiarezza clinica, strumenti concreti e rilettura dei pattern che mantengono la sofferenza.',
        },
        {
          title: 'Famiglie',
          age: 'Sistema familiare',
          focus: ['Comunicazione', 'Ruoli e confini', 'Momenti di transizione'],
          challenges: ['Genitorialità complessa', 'Separazione', 'Conflitti ricorrenti'],
          approach:
            'Lettura sistemica delle dinamiche familiari per ridefinire equilibrio, collaborazione e continuità di cura.',
        },
      ],
    },
    conditions: {
      id: 'clinical-conditions',
      eyebrow: 'Condizioni e Focus di Trattamento',
      title: 'Le principali aree cliniche, organizzate per priorità di lettura',
      intro:
        'Ogni area mostra subito un orientamento sintetico; il dettaglio si apre solo quando serve, riducendo il carico cognitivo.',
      approachLabel: 'Approccio',
      outcomesLabel: 'Esiti attesi',
      items: [
        {
          title: 'Disturbi d’Ansia',
          summary: 'Percorsi per ansia generalizzata, panico, fobie e vissuti di allerta persistente.',
          approach:
            'CBT e, quando indicato, VR Therapy per esposizione graduale, ristrutturazione cognitiva e recupero della libertà di movimento.',
          outcomes:
            'Riduzione dell’evitamento, maggiore senso di controllo e capacità di affrontare situazioni precedentemente bloccanti.',
        },
        {
          title: 'Disturbi dell’Umore',
          summary: 'Interventi per abbassamento del tono dell’umore, perdita di energia e senso di direzione.',
          approach:
            'CBT e ACT per attivazione comportamentale, lavoro sui pensieri disfunzionali e recupero del contatto con i propri valori.',
          outcomes:
            'Maggiore stabilità emotiva, recupero della motivazione e prevenzione delle ricadute con strumenti concreti.',
        },
        {
          title: 'DOC e Pensieri Intrusivi',
          summary: 'Percorsi mirati per ossessioni, rituali e bisogno di controllo che consumano tempo e risorse mentali.',
          approach:
            'ERP come riferimento centrale, integrata con interventi cognitivi per aumentare tolleranza all’incertezza e flessibilità.',
          outcomes:
            'Riduzione delle compulsioni, minore impatto dei pensieri intrusivi e ritorno a un funzionamento quotidiano più libero.',
        },
        {
          title: 'Regolazione Emotiva',
          summary: 'Supporto per reattività elevata, blocco emotivo, stress cronico e difficoltà nel ritrovare equilibrio.',
          approach:
            'ACT, mindfulness e strategie di regolazione per riconoscere gli stati interni e rispondere con maggiore stabilità.',
          outcomes:
            'Più consapevolezza, meno impulsività e una gestione più sostenibile delle pressioni quotidiane.',
        },
        {
          title: 'Difficoltà Relazionali',
          summary: 'Interventi per conflitti ricorrenti, dipendenze emotive, comunicazione inefficace e schemi relazionali ripetitivi.',
          approach:
            'Lavoro sui pattern cognitivi e comunicativi che mantengono il disagio, con attenzione a confini, attaccamento e assertività.',
          outcomes:
            'Relazioni più leggibili, comunicazione più chiara e maggiore capacità di stare nei legami senza disorganizzazione.',
        },
      ],
    },
    family: {
      id: 'clinical-family',
      eyebrow: 'Coppia e Sistemi Familiari',
      title: 'Quattro aree relazionali affrontate con una struttura dedicata',
      intro:
        'La sezione relazionale è stata ricomposta in un sistema a griglia, più chiaro da leggere e più coerente con bisogni di coppia e famiglia.',
      cards: [
        {
          title: 'Rotture Comunicative',
          text:
            'Si lavora su escalation, silenzi prolungati e pattern attacco-difesa per ristabilire ascolto e comprensione reciproca.',
          points: ['Ascolto strutturato', 'Riduzione dell’escalation', 'Nuovi pattern comunicativi'],
        },
        {
          title: 'Supporto nella Separazione',
          text:
            'Accompagnamento psicologico nelle transizioni familiari ad alta intensità emotiva, con attenzione al benessere dei figli.',
          points: ['Protezione del sistema familiare', 'Gestione dei passaggi', 'Co-genitorialità'],
        },
        {
          title: 'Sfide Genitoriali',
          text:
            'Supporto per definire confini, coerenza educativa e strategie più efficaci nelle diverse fasi evolutive.',
          points: ['Confini e regole', 'Lettura del comportamento', 'Coerenza educativa'],
        },
        {
          title: 'Conflitti Sistemici Familiari',
          text:
            'Intervento sulle regole implicite e sulle dinamiche ricorrenti che mantengono la tensione all’interno del nucleo.',
          points: ['Ruoli e triangolazioni', 'Nuovi equilibri', 'Maggiore stabilità relazionale'],
        },
      ],
    },
    support: {
      id: 'clinical-support',
      eyebrow: 'Aree di Supporto',
      title: 'Supporti mirati che rimandano ai metodi già definiti',
      intro:
        'Qui compaiono le principali aree di supporto in formato compatto: niente spiegazioni duplicate dei metodi, solo orientamento clinico e rinvio alla libreria.',
      methodsLabel: 'Metodi di riferimento',
      cards: [
        {
          title: 'Ansia e Stress',
          summary: 'Percorsi per sovraccarico, anticipazione, evitamento e perdita di libertà nelle attività quotidiane.',
          methods: ['CBT', 'VR Therapy'],
        },
        {
          title: 'Difficoltà dell’Umore',
          summary: 'Supporto quando prevalgono ritiro, demotivazione, tristezza persistente e difficoltà nel riattivarsi.',
          methods: ['CBT', 'ACT'],
        },
        {
          title: 'Pensieri Intrusivi',
          summary: 'Interventi per ridurre rituali, controllo mentale e impatto dei contenuti ossessivi sul funzionamento quotidiano.',
          methods: ['ERP', 'CBT'],
        },
        {
          title: 'Regolazione Emotiva',
          summary: 'Lavoro su intensità emotiva, fatica a calmarsi, impulsività o blocco nelle situazioni di pressione.',
          methods: ['ACT', 'CBT'],
        },
        {
          title: 'Difficoltà Relazionali',
          summary: 'Percorsi per migliorare lettura dei pattern, confini, espressione dei bisogni e qualità delle relazioni.',
          methods: ['CBT', 'ACT'],
        },
      ],
    },
    network: {
      id: 'clinical-network',
      eyebrow: 'Lavoro in Rete',
      title: 'Cura integrata attivata quando la complessità lo richiede',
      intro:
        'La rete multidisciplinare resta chiara, leggibile e distribuita in una griglia visivamente ordinata.',
      whyLabel: 'Perché conta',
      roleLabel: 'Ruolo',
      items: [
        {
          title: 'Psichiatria',
          iconKey: 'psychiatry',
          why: 'Utile quando i sintomi richiedono una valutazione integrata tra psicoterapia e supporto farmacologico.',
          role: 'Valutazione clinica, monitoraggio terapeutico e coordinamento sul piano di cura.',
        },
        {
          title: 'Neuropsichiatria infantile',
          iconKey: 'child',
          why: 'Fondamentale nei quadri evolutivi o adolescenziali che richiedono una lettura neuropsichiatrica dedicata.',
          role: 'Diagnosi differenziale, orientamento clinico e raccordo con famiglia e contesti educativi.',
        },
        {
          title: 'Psicoterapia dell’età evolutiva',
          iconKey: 'developmental',
          why: 'Aiuta a integrare il lavoro con minori e genitori mantenendo coerenza nella traiettoria clinica.',
          role: 'Supporto specialistico su sviluppo, relazione genitore-figlio e bisogni evolutivi.',
        },
        {
          title: 'Diritto di famiglia',
          iconKey: 'law',
          why: 'È rilevante quando il percorso clinico si intreccia con separazioni, affidamento o scelte legali sensibili.',
          role: 'Allineamento tra tutela relazionale, passaggi giuridici e benessere del minore.',
        },
        {
          title: 'Psicologia forense',
          iconKey: 'forensic',
          why: 'Garantisce continuità tecnica quando emergono valutazioni, relazioni o contesti giudiziari collegati.',
          role: 'Interfaccia tra area clinica e forense con rigore metodologico e coerenza documentale.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Prossimo passo',
      title: 'Scegli il tuo percorso',
      intro:
        'Se desideri un primo orientamento clinico, il passo successivo è una consulenza strutturata. Se vuoi esplorare prima le aree di intervento, puoi continuare il percorso dalla sezione servizi.',
      primaryButton: 'Prenota un Colloquio Clinico',
      secondaryButton: 'Esplora i Servizi',
      primaryLink: '/contact',
      secondaryTarget: 'clinical-support',
    },
  },
  en: {
    hero: {
      eyebrow: 'Clinical Area',
      title: 'Clinical Psychotherapy Pathways',
      subtitle: 'Structured psychotherapy for adolescents, adults, and families',
      supporting:
        'A guided clinical pathway that combines assessment, method, and continuity of care through a calm, highly readable experience.',
      primaryCta: 'Book Clinical Consultation',
      secondaryCta: 'Explore Pathways',
      imageSrc: '/laura-cocozza-hero-image.jpg',
      imageAlt: 'Calm and professional therapy environment from Laura Cocozza’s practice',
    },
    navigation: [
      { id: 'clinical-pathways', label: 'Pathway' },
      { id: 'clinical-methods', label: 'Methods' },
      { id: 'clinical-audiences', label: 'Who it is for' },
      { id: 'clinical-conditions', label: 'Conditions' },
      { id: 'clinical-network', label: 'Network care' },
    ],
    pathway: {
      id: 'clinical-pathways',
      eyebrow: 'Clinical Pathway',
      title: 'A guided clinical model in four clear steps',
      intro:
        'All process explanations now live in one place: a lean sequence designed to feel like a guided clinical journey rather than a long article.',
      steps: [
        {
          iconKey: 'assessment',
          step: '01',
          title: 'Assessment',
          description:
            'An initial clinical reading of history, current symptoms, context, and priorities to define the therapeutic starting point.',
        },
        {
          iconKey: 'goals',
          step: '02',
          title: 'Goal Setting',
          description:
            'Shared and realistic goals shape a pathway that is measurable, personalised, and clear from the beginning.',
        },
        {
          iconKey: 'intervention',
          step: '03',
          title: 'Intervention',
          description:
            'Evidence-based methods are selected according to the person, the difficulty presented, and the level of complexity.',
        },
        {
          iconKey: 'consolidation',
          step: '04',
          title: 'Consolidation',
          description:
            'Progress is reviewed, relapse prevention is strengthened, and emotional autonomy becomes more stable over time.',
        },
      ],
    },
    methods: {
      id: 'clinical-methods',
      eyebrow: 'Methods Library',
      title: 'Clinical methods, explained once and referenced clearly',
      intro:
        'Every method appears here only once. The rest of the page references this library instead of repeating the same explanations.',
      techniqueLabel: 'Key techniques',
      conditionsLabel: 'Applied to',
      cards: [
        {
          code: 'CBT',
          title: 'CBT · Cognitive Behavioral Therapy',
          description:
            'A structured approach focused on the relationship between thoughts, emotions, and behaviors, especially useful when a pathway needs clarity and practical tools.',
          techniques: ['Cognitive restructuring', 'Graded exposure', 'Problem solving'],
          conditions: ['Anxiety', 'Mood', 'Phobias', 'Relational difficulties'],
        },
        {
          code: 'ACT',
          title: 'ACT · Acceptance & Commitment Therapy',
          description:
            'A method centred on psychological flexibility, personal values, and the ability to stay present even when emotional intensity remains high.',
          techniques: ['Mindfulness', 'Cognitive defusion', 'Values work'],
          conditions: ['Chronic stress', 'Emotional regulation', 'Burnout', 'Life transitions'],
        },
        {
          code: 'VR',
          title: 'VR Therapy',
          description:
            'An immersive clinical support used within structured protocols to create safe, controlled, and gradual therapeutic experiences.',
          techniques: ['Assisted exposure', 'Guided simulations', 'Desensitisation'],
          conditions: ['Phobias', 'Social anxiety', 'PTSD', 'Performance anxiety'],
        },
        {
          code: 'ERP',
          title: 'ERP · Exposure and Response Prevention',
          description:
            'A dedicated protocol for intrusive thoughts and compulsions, focused on reducing rituals and increasing tolerance of uncertainty.',
          techniques: ['Targeted exposure', 'Ritual prevention', 'Uncertainty tolerance'],
          conditions: ['OCD', 'Intrusive thoughts', 'Compulsions', 'Avoidance'],
        },
      ],
    },
    audiences: {
      id: 'clinical-audiences',
      eyebrow: 'Who It Is For',
      title: 'Three pathways shaped by life stage and relational system',
      intro:
        'The clinical experience changes language, pace, and therapeutic priorities according to the person or family system involved.',
      focusLabel: 'Focus areas',
      challengesLabel: 'Common challenges',
      approachLabel: 'Approach summary',
      cards: [
        {
          title: 'Adolescents',
          age: '14+',
          focus: ['Identity and self-esteem', 'Emotional regulation', 'Peers and school life'],
          challenges: ['School anxiety', 'Social withdrawal', 'Family conflict'],
          approach:
            'A structured pathway that respects autonomy while involving the family whenever system stability benefits from it.',
        },
        {
          title: 'Adults',
          age: '18+',
          focus: ['Stress and burnout', 'Mood and anxiety', 'Life transitions'],
          challenges: ['Decision blocks', 'Complex relationships', 'Emotional overload'],
          approach:
            'Goal-focused work that combines clinical clarity, practical tools, and a deeper reading of patterns that maintain distress.',
        },
        {
          title: 'Families',
          age: 'Family system',
          focus: ['Communication', 'Roles and boundaries', 'Transition periods'],
          challenges: ['Complex parenting', 'Separation', 'Recurring conflict'],
          approach:
            'A systemic reading of family dynamics designed to rebuild balance, collaboration, and continuity of care.',
        },
      ],
    },
    conditions: {
      id: 'clinical-conditions',
      eyebrow: 'Conditions & Treatment Focus',
      title: 'The main clinical priorities, organised for fast reading',
      intro:
        'Each item stays compact by default and opens only when deeper detail is useful, reducing cognitive overload.',
      approachLabel: 'Approach',
      outcomesLabel: 'Outcomes',
      items: [
        {
          title: 'Anxiety Disorders',
          summary: 'Pathways for generalised anxiety, panic, phobias, and persistent states of threat or anticipation.',
          approach:
            'CBT and, where indicated, VR Therapy for graded exposure, cognitive restructuring, and a safer return to feared situations.',
          outcomes:
            'Less avoidance, stronger self-regulation, and greater freedom in situations that previously felt blocked.',
        },
        {
          title: 'Mood Disorders',
          summary: 'Support for low mood, reduced energy, loss of motivation, and emotional heaviness that affects daily life.',
          approach:
            'CBT and ACT to combine behavioural activation, work on unhelpful thought patterns, and reconnection with personal values.',
          outcomes:
            'Greater emotional stability, improved motivation, and stronger relapse prevention through practical tools.',
        },
        {
          title: 'OCD & Intrusive Thoughts',
          summary: 'Targeted work for obsessions, rituals, control strategies, and the mental exhaustion they generate.',
          approach:
            'ERP as the central reference, supported by cognitive work that increases tolerance of uncertainty and flexibility.',
          outcomes:
            'Reduced compulsions, lower impact of intrusive thoughts, and a freer daily rhythm with less time consumed by symptoms.',
        },
        {
          title: 'Emotional Regulation',
          summary: 'Support for high emotional intensity, shutdown responses, chronic stress, and difficulty returning to equilibrium.',
          approach:
            'ACT, mindfulness, and regulation strategies that help recognise internal states and respond more steadily under pressure.',
          outcomes:
            'More awareness, less impulsivity, and a more sustainable way of handling emotionally loaded situations.',
        },
        {
          title: 'Relational Difficulties',
          summary: 'Work for recurring conflict, emotional dependency, ineffective communication, and repetitive relationship patterns.',
          approach:
            'A focus on cognitive and communication patterns that maintain distress, with attention to attachment, boundaries, and assertiveness.',
          outcomes:
            'Clearer relationships, more direct communication, and a stronger ability to stay connected without disorganisation.',
        },
      ],
    },
    family: {
      id: 'clinical-family',
      eyebrow: 'Couple & Family Systems',
      title: 'Four relational themes addressed through a cleaner grid system',
      intro:
        'The relational area has been rebuilt into a clear grid, making couple and family support easier to scan and compare.',
      cards: [
        {
          title: 'Communication Breakdowns',
          text:
            'Work focuses on escalation, prolonged silence, and attack-defend loops to rebuild listening and mutual understanding.',
          points: ['Structured listening', 'De-escalation', 'New communication patterns'],
        },
        {
          title: 'Separation Support',
          text:
            'Psychological support for high-intensity family transitions, with specific attention to children’s emotional protection.',
          points: ['Family system protection', 'Transition guidance', 'Co-parenting support'],
        },
        {
          title: 'Parenting Challenges',
          text:
            'Support for boundaries, educational consistency, and more effective responses across different developmental phases.',
          points: ['Boundaries and rules', 'Behaviour reading', 'Parental alignment'],
        },
        {
          title: 'Systemic Family Conflicts',
          text:
            'Intervention on implicit rules and recurring dynamics that keep tension active inside the family system.',
          points: ['Roles and triangulation', 'New balance', 'Relational stability'],
        },
      ],
    },
    support: {
      id: 'clinical-support',
      eyebrow: 'Support Areas',
      title: 'Targeted support cards that point back to the methods library',
      intro:
        'This section stays intentionally compact: it shows where support is focused without repeating full methodological explanations.',
      methodsLabel: 'Reference methods',
      cards: [
        {
          title: 'Anxiety & Stress',
          summary: 'Support for overload, anticipation, avoidance, and loss of freedom in everyday situations.',
          methods: ['CBT', 'VR Therapy'],
        },
        {
          title: 'Mood Difficulties',
          summary: 'Support when withdrawal, low motivation, and persistent heaviness make activation harder to sustain.',
          methods: ['CBT', 'ACT'],
        },
        {
          title: 'Intrusive Thoughts',
          summary: 'Pathways that reduce rituals, control behaviours, and the impact of obsessive content on daily functioning.',
          methods: ['ERP', 'CBT'],
        },
        {
          title: 'Emotional Regulation',
          summary: 'Work on intensity, difficulty calming down, impulsive reactions, or emotional shutdown under pressure.',
          methods: ['ACT', 'CBT'],
        },
        {
          title: 'Relational Difficulties',
          summary: 'Support to improve pattern awareness, boundaries, expression of needs, and the quality of relationships.',
          methods: ['CBT', 'ACT'],
        },
      ],
    },
    network: {
      id: 'clinical-network',
      eyebrow: 'Network-Based Care',
      title: 'Integrated care activated when complexity requires more than one lens',
      intro:
        'The multidisciplinary network remains central, but now appears as a cleaner icon-grid with a stronger reading hierarchy.',
      whyLabel: 'Why it matters',
      roleLabel: 'Role summary',
      items: [
        {
          title: 'Psychiatry',
          iconKey: 'psychiatry',
          why: 'Useful when psychotherapy benefits from integrated psychiatric assessment and medication review.',
          role: 'Clinical evaluation, treatment monitoring, and coordinated decision-making within the care plan.',
        },
        {
          title: 'Child Neuropsychiatry',
          iconKey: 'child',
          why: 'Important in adolescent or developmental presentations that require a dedicated neuropsychiatric reading.',
          role: 'Differential diagnosis, developmental framing, and coordination with family and educational settings.',
        },
        {
          title: 'Developmental Psychotherapy',
          iconKey: 'developmental',
          why: 'Strengthens work with minors and parents while keeping the overall pathway coherent across professionals.',
          role: 'Specialist support for development, parent-child relationships, and age-specific therapeutic needs.',
        },
        {
          title: 'Family Law',
          iconKey: 'law',
          why: 'Relevant when clinical work intersects with separation, custody, or legally sensitive family decisions.',
          role: 'Alignment between relational protection, legal steps, and the wellbeing of children involved.',
        },
        {
          title: 'Forensic Psychology',
          iconKey: 'forensic',
          why: 'Provides continuity when clinical work overlaps with reports, evaluations, or court-related contexts.',
          role: 'Technical integration between clinical and forensic domains with methodological consistency.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Next step',
      title: 'Choose your pathway',
      intro:
        'If you need a first clinical orientation, the next step is a structured consultation. If you prefer to review the support areas first, continue through the services section.',
      primaryButton: 'Book Clinical Consultation',
      secondaryButton: 'Explore Services',
      primaryLink: '/contact',
      secondaryTarget: 'clinical-support',
    },
  },
}

const CLINICAL_DIVIDER_ICONS = {
  hero: Sparkles,
  pathway: Brain,
  methods: BookOpen,
  audiences: Users,
  conditions: ShieldCheck,
  family: HeartHandshake,
  support: BriefcaseBusiness,
  network: Stethoscope,
  final: ArrowUpRight,
}

const CLINICAL_PATHWAY_ICONS = {
  assessment: Brain,
  goals: Target,
  intervention: RefreshCcw,
  consolidation: UserStar,
}

const CLINICAL_NETWORK_ICONS = {
  psychiatry: Stethoscope,
  child: Brain,
  developmental: UserStar,
  law: Landmark,
  forensic: Scale,
}

function getClinicalPageContent(t) {
  return t.nav.about === 'About' ? CLINICAL_PAGE_CONTENT.en : CLINICAL_PAGE_CONTENT.it
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function IconDivider({ icon, Icon, className = '' }) {
  return (
    <div className={`icon-divider ${className}`} aria-hidden="true">
      <span className="icon-divider__line icon-divider__line--left" />
      <span className="icon-divider__icon">
        {Icon ? <Icon aria-hidden="true" /> : <span className="icon-divider__material material-symbols-rounded">{icon}</span>}
      </span>
      <span className="icon-divider__line icon-divider__line--right" />
    </div>
  )
}

const PRELOADER_DURATION_MS = 4700
const PRELOADER_REDUCED_MOTION_DURATION_MS = 900
const PRELOADER_SESSION_KEY = 'lc-preloader-played'

function shouldShowPreloader() {
  if (typeof window === 'undefined') return true
  try {
    return window.sessionStorage.getItem(PRELOADER_SESSION_KEY) !== 'true'
  } catch {
    return true
  }
}

function markPreloaderAsShown() {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(PRELOADER_SESSION_KEY, 'true')
  } catch {
    // Storage may be unavailable; keep runtime stable.
  }
}

function BalanceWatermark() {
  return <Scale className="balance-watermark" aria-hidden="true" strokeWidth={1.2} />
}

function Preloader({ visible, ariaLabel }) {
  const reduceMotion = useReducedMotion()
  const monogramDrawDuration = reduceMotion ? 0.5 : 3.1
  const monogramHoldDuration = reduceMotion ? 0.1 : 1
  const bgDuration = monogramDrawDuration + monogramHoldDuration + (reduceMotion ? 0.2 : 0.45)
  const preloaderKey = reduceMotion ? 'preloader-reduced' : 'preloader-default'

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={preloaderKey}
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.25 : 0.85, ease: [0.4, 0, 0.2, 1], delay: reduceMotion ? 0 : 0.42 } }}
        >
          <motion.div
            className="preloader-bg"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(9px)' }}
            animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.06, filter: reduceMotion ? 'blur(5px)' : 'blur(2px)' }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.2 : 0.65, delay: reduceMotion ? 0 : 0.24 } }}
            transition={{ duration: bgDuration, ease: [0.33, 1, 0.68, 1] }}
          >
            <BalanceWatermark />
          </motion.div>

          {/* layoutId ties this element to the header LC — framer-motion will fly it there on exit */}
          <motion.div
            className="lc-wrap"
            layoutId="lc-monogram"
            initial={{ opacity: 0, y: 8, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: monogramDrawDuration, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.svg viewBox="0 0 240 200" className="lc-mark" role="img" aria-label={ariaLabel}>
              <motion.text
                x="6"
                y="114"
                fontSize="162"
                fontFamily="'Cinzel', serif"
                fontWeight="500"
                fill="currentColor"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: monogramDrawDuration * 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                L
              </motion.text>
              <motion.text
                x="88"
                y="172"
                fontSize="162"
                fontFamily="'Cinzel', serif"
                fontWeight="500"
                fill="currentColor"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: monogramDrawDuration * 0.75, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.14 }}
              >
                C
              </motion.text>
              <defs>
                <linearGradient id="maskSweep" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="transparent" />
                  <stop offset="0.5" stopColor="var(--color-ivory)" stopOpacity="0.42" />
                  <stop offset="1" stopColor="transparent" />
                </linearGradient>
              </defs>
              {!reduceMotion && (
                <motion.rect
                  x="-120"
                  y="0"
                  width="100"
                  height="200"
                  fill="url(#maskSweep)"
                  animate={{ x: 350, opacity: [0, 0.5, 0.1, 0] }}
                  transition={{ duration: monogramDrawDuration, ease: [0.35, 0, 0.65, 1], delay: 0.18, times: [0, 0.3, 0.75, 1] }}
                />
              )}
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function LanguageSwitch({ lang, setLang, className }) {
  return (
    <button type="button" className={`lang-switch${className ? ` ${className}` : ''}`} onClick={() => setLang(lang === 'it' ? 'en' : 'it')}>
      {lang === 'it' ? 'EN' : 'IT'}
    </button>
  )
}

function MobileMenu({ open, onClose, t }) {
  const reduceMotion = useReducedMotion()
  // Language switching is intentionally in the header actions for mobile/tablet.
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          aria-modal="true"
          role="dialog"
        >
          <div className="mobile-menu-inner">
            <motion.nav
              className="mobile-menu-nav"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduceMotion ? 0.03 : 0.07, delayChildren: reduceMotion ? 0 : 0.1 } },
              }}
              aria-label={t.nav.mobileNavAria}
            >
              {[
                { to: '/home', label: t.nav.home },
                { to: '/clinical', label: t.nav.clinical },
                { to: '/forensic', label: t.nav.forensic },
                { to: PSYLEX_SECTION_PATH, label: t.nav.psylex },
                { to: '/about', label: t.nav.about },
                { to: '/contact', label: t.nav.contact },
              ].map(({ to, label }) => (
                <motion.div
                  key={to}
                  variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={to} onClick={onClose}>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SiteHeader({ t, lang, setLang, isLanding, menuOpen, setMenuOpen, preloaderDone }) {
  const headerClass = `site-header ${isLanding ? 'site-header--landing' : 'site-header--default'}`

  return (
    <header className={headerClass}>
      {/* LC logo — layoutId "lc-monogram" only activates after preloader exits,
          so framer-motion can fly the shared element from preloader centre to here */}
      <Link to="/home" className="lc-logo-link" aria-label={t.home.logoAriaLabel}>
        <motion.div
          layoutId={preloaderDone ? 'lc-monogram' : undefined}
          transition={{ layout: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } }}
          className="lc-logo-wrap"
        >
          <svg viewBox="0 0 240 200" className="lc-logo-svg" role="presentation" aria-hidden="true">
            <text x="6" y="114" fontSize="162" fontFamily="'Cinzel', serif" fontWeight="500" fill="currentColor">
              L
            </text>
            <text x="88" y="172" fontSize="162" fontFamily="'Cinzel', serif" fontWeight="500" fill="currentColor">
              C
            </text>
          </svg>
          <span className="lc-logo-icon-holder" aria-hidden="true">
            <img src="/logo-or-icon.png" className="lc-logo-mark-bg" alt="" />
          </span>
        </motion.div>
      </Link>

      {/* Desktop nav — center */}
      <nav className="site-nav-desktop" aria-label={t.nav.mainNavAria}>
        <div className="site-nav-frosted">
          <NavLink to="/home" end>{t.nav.home}</NavLink>
          <NavLink to="/clinical" end>{t.nav.clinical}</NavLink>
          <NavLink to="/forensic" end>{t.nav.forensic}</NavLink>
          <NavLink to={PSYLEX_SECTION_PATH}>{t.nav.psylex}</NavLink>
          <NavLink to="/about" end>{t.nav.about}</NavLink>
          <NavLink to="/contact" end>{t.nav.contact}</NavLink>
        </div>
      </nav>

      {/* Desktop CTA — right */}
      <div className="site-header-end">
        <LanguageSwitch lang={lang} setLang={setLang} />
        <Link to="/contact" className="header-book-btn">
          {t.nav.bookSession}
        </Link>
      </div>

      {/* Mobile / tablet — right */}
      <div className="site-header-mobile">
        <LanguageSwitch lang={lang} setLang={setLang} className="mobile-header-lang-switch" />
        <Link to="/contact" className="header-book-btn">
          {t.nav.bookShort}
        </Link>
        <button
          type="button"
          className={`hamburger-btn${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function WordByWordText({ text, className, as = 'p', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  const Tag = motion[as]
  // Keep whitespace tokens so animated copy preserves natural spacing and wraps.
  const tokens = (text.match(/(\p{White_Space}+|[^\p{White_Space}]+)/gu) ?? []).map((value, index) => ({
    value,
    isWhitespace: /^\p{White_Space}+$/u.test(value),
    key: `${index}-${value.length}`,
  }))

  return (
    <Tag
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.06,
            delayChildren: delay,
          },
        },
      }}
    >
      {tokens.map((token) => (
        <motion.span
          key={token.key}
          className={`word-fade-item${token.isWhitespace ? ' word-fade-space' : ''}`}
          variants={{
            hidden: reduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 8, filter: 'blur(3px)' },
            visible: reduceMotion
              ? { opacity: 1, y: 0, transition: { duration: 0.01 } }
              : { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {token.value}
        </motion.span>
      ))}
    </Tag>
  )
}

function LandingHero({ t }) {
  const reduceMotion = useReducedMotion()

  const textVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.3 : 0.95, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="landing-section" aria-label={t.home.eyebrow}>
      {/* Painterly hero image — right side, bleeds left */}
      <div className="landing-hero-img" role="presentation" aria-hidden="true" />

      <div className="landing-inner">
        {/* Left column — primary identity text, centred within first 100 vh */}
        <motion.div
          className="landing-primary"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0.05 : 0.16, delayChildren: reduceMotion ? 0 : 0.24 } } }}
        >
          <motion.p className="landing-eyebrow" variants={textVariants}>
            {t.home.eyebrow}
          </motion.p>
          <motion.p className="landing-by" variants={textVariants}>
            {t.home.by}
          </motion.p>
          <motion.h1 className="landing-name" variants={textVariants}>
            {t.doctor}
          </motion.h1>
        </motion.div>

        {/* Right column — secondary copy + CTA, positioned below the 100 vh fold */}
        <motion.div
          className="landing-secondary"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0.05 : 0.14, delayChildren: reduceMotion ? 0 : 0.48 } } }}
        >
          <WordByWordText text={t.home.title} className="landing-headline" delay={reduceMotion ? 0 : 0.06} />
          <WordByWordText text={t.home.description} className="landing-desc" delay={reduceMotion ? 0 : 0.24} />
          <motion.div className="landing-cta-row" variants={textVariants}>
            <Link to="/contact" className="book-pill">
              {t.home.ctaPrimary}
              <span className="book-pill-icon" aria-hidden="true">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBuildingSection({ t }) {
  const trustCards = [Brain, Scale, Users, UserStar].map((icon, index) => ({
    icon,
    ...t.home.trustSection.cards[index],
  }))

  return (
    <section className="trust-intro-section">
      <div className="trust-intro-top">
        <div className="trust-intro-identity">
          <div className="trust-intro-photo-wrap">
            <img src="/dr-laura-cocozza-professional-headshot.png" alt={t.home.trustSection.imageAlt} className="trust-intro-photo" />
          </div>
          <div className="trust-intro-identity-copy">
            <p>{t.home.trustSection.identityName}</p>
            <p>{t.home.trustSection.identitySubtitle}</p>
          </div>
        </div>

        <p className="trust-intro-positioning">{t.home.trustSection.positioning}</p>
      </div>

      <div className="trust-intro-role-block">
        <h3 className="trust-intro-role-title">{t.home.trustSection.roleTitle}</h3>
        <div className="icon-divider" aria-hidden="true">
          <span className="icon-divider__line icon-divider__line--left" />
          <span className="icon-divider__icon">
            <HeartHandshake size={20} />
          </span>
          <span className="icon-divider__line icon-divider__line--right" />
        </div>
        <p className="trust-intro-role-badge">{t.home.trustSection.roleDetails}</p>
        <p className="trust-intro-role-description">{t.home.trustSection.roleDescription}</p>
      </div>

      <div className="trust-intro-cards">
        {trustCards.map((item, index) => (
          <article key={item.title} className="trust-intro-card">
            <span className="trust-intro-card-number">{String(index + 1).padStart(2, '0')}</span>
            <item.icon size={30} />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="trust-intro-cta-row">
        <Link to="/contact" className="book-pill">
          {t.home.ctaPrimary}
          <span className="book-pill-icon" aria-hidden="true">
            <ArrowUpRight size={22} />
          </span>
        </Link>
      </div>
    </section>
  )
}

function NeuralVisualization({ reduceMotion }) {
  const nodes = [
    { id: 0, x: 100, y: 18 },
    { id: 1, x: 158, y: 43 },
    { id: 2, x: 182, y: 100 },
    { id: 3, x: 158, y: 157 },
    { id: 4, x: 100, y: 182 },
    { id: 5, x: 42, y: 157 },
    { id: 6, x: 18, y: 100 },
    { id: 7, x: 42, y: 43 },
  ]
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [0, 3], [1, 5], [2, 6], [4, 7],
  ]
  return (
    <div className="neural-vis-wrap" aria-hidden="true">
      <svg className="neural-svg" viewBox="0 0 200 200" fill="none">
        {connections.map(([a, b], i) => (
          <motion.line
            key={`c${i}`}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="rgba(183,244,255,0.22)"
            strokeWidth="0.6"
            strokeDasharray="5 7"
            animate={reduceMotion ? {} : { strokeDashoffset: [0, -60], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3 + (i % 4) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.22 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={`n${n.id}`}
            cx={n.x} cy={n.y} r={3}
            fill="rgba(183,244,255,0.75)"
            animate={reduceMotion ? {} : { r: [2.2, 4, 2.2], opacity: [0.4, 0.95, 0.4] }}
            transition={{ duration: 2.6 + (i % 4) * 0.5, repeat: Infinity, delay: i * 0.34, ease: 'easeInOut' }}
          />
        ))}
      </svg>
      <img src="/brain.png" alt="" className="neural-center-icon" />
      <div className="neural-ring neural-ring--1" />
      <div className="neural-ring neural-ring--2" />
    </div>
  )
}

function CbtAtmosphere({ reduceMotion }) {
  const hub = { x: 100, y: 88 }
  const spokes = [
    { x: 172, y: 32 },
    { x: 196, y: 112 },
    { x: 150, y: 180 },
    { x: 50, y: 180 },
    { x: 4, y: 112 },
    { x: 28, y: 32 },
  ]
  const crosses = [[0, 2], [1, 4], [2, 5], [0, 3]]
  return (
    <div className="panel-atm panel-atm--cbt" aria-hidden="true">
      <img src="/cognitive-behavior.png" alt="" className="panel-atm-bg-icon panel-atm-bg-image" />
      <svg viewBox="0 0 200 200" className="panel-atm-svg" fill="none">
        {spokes.map((sp, i) => (
          <motion.line
            key={`sp${i}`}
            x1={hub.x} y1={hub.y} x2={sp.x} y2={sp.y}
            stroke="rgba(183,244,255,0.28)"
            strokeWidth="0.7"
            strokeDasharray="5 6"
            animate={reduceMotion ? {} : { strokeDashoffset: [0, -88] }}
            transition={{ duration: 2.2 + i * 0.28, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {crosses.map(([a, b], i) => (
          <motion.line
            key={`cx${i}`}
            x1={spokes[a].x} y1={spokes[a].y}
            x2={spokes[b].x} y2={spokes[b].y}
            stroke="rgba(183,244,255,0.1)"
            strokeWidth="0.5"
            strokeDasharray="2 9"
            animate={reduceMotion ? {} : { strokeDashoffset: [0, -44], opacity: [0.1, 0.45, 0.1] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          />
        ))}
        {/* Hub pulse ring */}
        <motion.circle
          cx={hub.x} cy={hub.y} r={10}
          fill="none"
          stroke="rgba(183,244,255,0.28)"
          strokeWidth="0.7"
          animate={reduceMotion ? {} : { r: [8, 18, 8], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
        />
        {/* Hub core */}
        <circle cx={hub.x} cy={hub.y} r={4} fill="rgba(183,244,255,0.7)" />
        <motion.circle
          cx={hub.x} cy={hub.y} r={7}
          fill="rgba(183,244,255,0.06)"
          stroke="rgba(183,244,255,0.35)" strokeWidth="0.6"
          animate={reduceMotion ? {} : { scale: [0.95, 1.18, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Endpoint nodes */}
        {spokes.map((sp, i) => (
          <motion.circle
            key={`en${i}`}
            cx={sp.x} cy={sp.y} r={3}
            fill="rgba(183,244,255,0.45)"
            animate={reduceMotion ? {} : { opacity: [0.2, 0.72, 0.2] }}
            transition={{ duration: 2.4 + i * 0.35, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
      </svg>
    </div>
  )
}

function ActAtmosphere({ reduceMotion }) {
  return (
    <div className="panel-atm panel-atm--act" aria-hidden="true">
      <img src="/self-acceptance.png" alt="" className="panel-atm-bg-icon panel-atm-bg-image" />
      <svg viewBox="0 0 200 200" className="panel-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="act-r1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168,181,162,0)" />
            <stop offset="45%" stopColor="rgba(168,181,162,0.28)" />
            <stop offset="100%" stopColor="rgba(168,181,162,0)" />
          </linearGradient>
          <linearGradient id="act-r2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(183,244,255,0)" />
            <stop offset="50%" stopColor="rgba(183,244,255,0.2)" />
            <stop offset="100%" stopColor="rgba(183,244,255,0)" />
          </linearGradient>
          <linearGradient id="act-r3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(247,243,238,0)" />
            <stop offset="40%" stopColor="rgba(247,243,238,0.12)" />
            <stop offset="100%" stopColor="rgba(247,243,238,0)" />
          </linearGradient>
        </defs>
        {/* Ribbon 1 — sage, upper */}
        <motion.path
          d="M -20 52 C 30 38, 75 78, 120 62 C 158 50, 178 68, 220 55"
          stroke="url(#act-r1)"
          strokeWidth="22"
          animate={reduceMotion ? {} : {
            d: [
              'M -20 52 C 30 38, 75 78, 120 62 C 158 50, 178 68, 220 55',
              'M -20 62 C 28 52, 78 68, 120 75 C 155 82, 182 55, 220 68',
              'M -20 52 C 30 38, 75 78, 120 62 C 158 50, 178 68, 220 55',
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Ribbon 2 — teal, mid */}
        <motion.path
          d="M -20 100 C 45 88, 85 118, 130 100 C 165 86, 190 108, 220 98"
          stroke="url(#act-r2)"
          strokeWidth="16"
          animate={reduceMotion ? {} : {
            d: [
              'M -20 100 C 45 88, 85 118, 130 100 C 165 86, 190 108, 220 98',
              'M -20 108 C 40 100, 90 108, 130 114 C 162 120, 192 95, 220 110',
              'M -20 100 C 45 88, 85 118, 130 100 C 165 86, 190 108, 220 98',
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        {/* Ribbon 3 — ivory, lower */}
        <motion.path
          d="M -20 148 C 35 140, 80 162, 130 148 C 170 137, 188 152, 220 144"
          stroke="url(#act-r3)"
          strokeWidth="11"
          animate={reduceMotion ? {} : {
            d: [
              'M -20 148 C 35 140, 80 162, 130 148 C 170 137, 188 152, 220 144',
              'M -20 155 C 38 148, 82 155, 130 158 C 168 162, 190 146, 220 155',
              'M -20 148 C 35 140, 80 162, 130 148 C 170 137, 188 152, 220 144',
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </svg>
    </div>
  )
}

function VrAtmosphere({ reduceMotion }) {
  return (
    <div className="panel-atm panel-atm--vr" aria-hidden="true">
      <img src="/virtual-reality.png" alt="" className="panel-atm-bg-icon panel-atm-bg-image" />
      {/* Depth planes */}
      <div className="vr-depth-plane vr-depth-plane--1" />
      <div className="vr-depth-plane vr-depth-plane--2" />
      <div className="vr-depth-plane vr-depth-plane--3" />
      {/* Scanning line */}
      {!reduceMotion && (
        <motion.div
          className="vr-scan-line"
          animate={{ y: ['-5%', '105%'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
        />
      )}
      {/* Corner reticle brackets */}
      <div className="vr-bracket vr-bracket--tl" />
      <div className="vr-bracket vr-bracket--tr" />
      <div className="vr-bracket vr-bracket--bl" />
      <div className="vr-bracket vr-bracket--br" />
    </div>
  )
}

function ClinicalAreaIntroductionSection({ t }) {
  const ci = t.home.clinicalAreaIntro

  return (
    <section className="clinical-intro-section">
      {/* Atmospheric floating orbs */}
      <div className="clinical-intro-bg" aria-hidden="true">
        <div className="clinical-intro-orb clinical-intro-orb--1" />
        <div className="clinical-intro-orb clinical-intro-orb--2" />
        <div className="clinical-intro-orb clinical-intro-orb--3" />
      </div>

      <div className="clinical-intro-inner">
        <motion.div
          className="clinical-intro-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="clinical-intro-eyebrow">{ci.eyebrow}</span>
          <h2 className="clinical-intro-title">{ci.title}</h2>
        </motion.div>

        <div className="clinical-intro-split">
          <motion.div
            className="clinical-intro-image-col"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="clinical-intro-image-wrap">
              <img src="/clinical-area-homepage-preview-section.jpeg" alt={ci.imageAlt} className="clinical-intro-image" />
            </div>
          </motion.div>

          {/* Right column — paragraphs */}
          <motion.div
            className="clinical-intro-right"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <p className="clinical-intro-paragraph">{ci.paragraph1}</p>
            <p className="clinical-intro-paragraph">{ci.paragraph2}</p>
            <p className="clinical-intro-secondary">{ci.secondary}</p>
            <ul className="clinical-intro-highlights">
              {ci.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link to="/contact" className="section-cta section-cta--clinical-intro">
              {ci.cta}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Transition cue toward next section */}
      <div className="clinical-intro-divider" aria-hidden="true" />
    </section>
  )
}

function IntegratedCareProcessSection({ t }) {
  const reduceMotion = useReducedMotion()
  const icp = t.home.integratedCareProcess

  return (
    <section className="care-process-section">
      <div className="care-process-inner">
        {/* Section header */}
        <motion.div
          className="care-process-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="care-process-eyebrow">{icp.eyebrow}</span>
          <h2 className="care-process-title">{icp.title}</h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="care-process-steps">
          {icp.steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="care-process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 }}
            >
              {/* Glowing node */}
              <div className="care-process-node-wrap" aria-hidden="true">
                <motion.div
                  className="care-process-node-pulse"
                  animate={reduceMotion ? {} : { scale: [1, 1.55, 1], opacity: [0.35, 0, 0.35] }}
                  transition={{ duration: 2.8 + i * 0.35, repeat: Infinity, ease: 'easeOut', delay: i * 0.55 }}
                />
                <div className="care-process-node">
                  <span>{step.number}</span>
                </div>
              </div>

              {/* Step content */}
              <div className="care-process-step-content">
                <h3 className="care-process-step-title">{step.title}</h3>
                <p className="care-process-step-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient transition toward the therapeutic approach section */}
      <div className="care-process-transition" aria-hidden="true" />
    </section>
  )
}

function MultidisciplinaryNetworkSection({ t }) {
  const reduceMotion = useReducedMotion()
  const network = t.home.multidisciplinaryNetwork
  const leftNodes = network.nodes.filter((_, i) => i % 2 === 0)
  const rightNodes = network.nodes.filter((_, i) => i % 2 !== 0)
  const desktopMediaQuery = useMemo(() => {
    if (typeof window === 'undefined') return null
    return window.matchMedia(SECTION_11_DESKTOP_QUERY)
  }, [])
  const isDesktopViewport = useSyncExternalStore(
    (onStoreChange) => {
      if (!desktopMediaQuery) return () => {}

      desktopMediaQuery.addEventListener('change', onStoreChange)

      return () => desktopMediaQuery.removeEventListener('change', onStoreChange)
    },
    () => desktopMediaQuery?.matches ?? false,
    () => false,
  )

  if (isDesktopViewport) {
    return <MultidisciplinaryNetworkDesktopSection network={network} />
  }

  return (
    <section className="network-collab-section">
      <div className="network-collab-inner">
        <motion.header
          className="network-collab-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="network-collab-eyebrow">{network.eyebrow}</span>
          <h2 className="network-collab-title">{network.title}</h2>
          <IconDivider icon="hub" className="network-collab-divider" />
        </motion.header>

        <div className="network-collab-grid">
          <motion.p
            className="network-collab-intro"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            {network.intro}
          </motion.p>

          <motion.div
            className="network-collab-map"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          >
            <div className="network-collab-spine" aria-hidden="true" />

            <motion.div
              className="network-collab-core"
              animate={reduceMotion ? {} : { scale: [1, 1.02, 1] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {network.centerLabel}
            </motion.div>

            <div className="network-collab-column network-collab-column--left">
              {leftNodes.map((node, i) => (
                <motion.div
                  key={node.title}
                  className="network-collab-node-wrap network-collab-node-wrap--left"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.56, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="network-collab-connector" aria-hidden="true" />
                  <motion.button
                    type="button"
                    className="network-collab-node"
                    aria-label={node.title}
                    animate={reduceMotion ? {} : { y: [0, -1.25, 0] }}
                    transition={{ duration: 8.2 + i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <h3 className="network-collab-node-title">{node.title}</h3>
                    <p className="network-collab-node-desc">{node.description}</p>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            <div className="network-collab-column network-collab-column--right">
              {rightNodes.map((node, i) => (
                <motion.div
                  key={node.title}
                  className="network-collab-node-wrap network-collab-node-wrap--right"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.56, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="network-collab-connector" aria-hidden="true" />
                  <motion.button
                    type="button"
                    className="network-collab-node"
                    aria-label={node.title}
                    animate={reduceMotion ? {} : { y: [0, -1.25, 0] }}
                    transition={{ duration: 8.4 + i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <h3 className="network-collab-node-title">{node.title}</h3>
                    <p className="network-collab-node-desc">{node.description}</p>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <NetworkCtaRow network={network} />
      </div>
    </section>
  )
}

function NetworkCtaRow({ network, className = '' }) {
  return (
    <div className={`network-collab-cta-row${className ? ` ${className}` : ''}`}>
      <div className="network-collab-cta network-collab-cta--clinical">
        <h3 className="network-collab-cta-title">{network.cta.clinical.title}</h3>
        <p className="network-collab-cta-text">{network.cta.clinical.text}</p>
        <Link to="/clinical" className="network-collab-cta-button">
          <span>{network.cta.clinical.button}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="network-collab-cta network-collab-cta--forensic">
        <h3 className="network-collab-cta-title">{network.cta.forensic.title}</h3>
        <p className="network-collab-cta-text">{network.cta.forensic.text}</p>
        <Link to="/forensic" className="network-collab-cta-button">
          <span>{network.cta.forensic.button}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

function MultidisciplinaryNetworkDesktopSection({ network }) {
  const [activeNode, setActiveNode] = useState(null)
  const leftColumnNodes = useMemo(
    () => [network.nodes[0], network.nodes[4]].filter(Boolean),
    [network.nodes],
  )
  const rightColumnNodes = useMemo(
    () => [network.nodes[2], network.nodes[3], network.nodes[1]].filter(Boolean),
    [network.nodes],
  )

  return (
    <section className="network-collab-section network-collab-section--desktop">
      <div className="network-collab-inner network-collab-inner--desktop">
        <div className="network-collab-desktop-grid">
          <motion.div
            className="network-collab-desktop-intro"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="network-collab-eyebrow">{network.eyebrow}</span>
            <h2 className="network-collab-title network-collab-title--desktop">{network.title}</h2>
            <IconDivider icon="hub" className="network-collab-divider network-collab-divider--desktop" />
            <p className="network-collab-intro network-collab-intro--desktop">{network.intro}</p>
          </motion.div>

          <motion.div
            className="network-collab-desktop-visual"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div className="network-collab-desktop-divider-line" aria-hidden="true" />
            <div className="network-collab-desktop-spine-badge">
              <span className="network-collab-desktop-spine-orb" aria-hidden="true" />
              <p className="network-collab-desktop-spine-title">{network.desktopSpineTitle}</p>
            </div>

            <div className="network-collab-desktop-column network-collab-desktop-column--left">
              {leftColumnNodes.map((node) => {
                const isActive = activeNode === node.title

                return (
                  <div
                    key={node.title}
                    className={`network-collab-desktop-node-shell network-collab-desktop-node-shell--left${isActive ? ' is-active' : ''}`}
                  >
                    <span className="network-collab-desktop-card-connector" aria-hidden="true" />
                    <motion.article
                      className={`network-collab-desktop-node${isActive ? ' is-active' : ''}`}
                      tabIndex={0}
                      onMouseEnter={() => setActiveNode(node.title)}
                      onMouseLeave={() => setActiveNode(null)}
                      onFocus={() => setActiveNode(node.title)}
                      onBlur={() => setActiveNode(null)}
                    >
                      <h3 className="network-collab-node-title">{node.title}</h3>
                      <p className="network-collab-node-desc">{node.description}</p>
                    </motion.article>
                  </div>
                )
              })}
            </div>

            <div className="network-collab-desktop-column network-collab-desktop-column--right">
              {rightColumnNodes.map((node) => {
                const isActive = activeNode === node.title

                return (
                  <div
                    key={node.title}
                    className={`network-collab-desktop-node-shell network-collab-desktop-node-shell--right${isActive ? ' is-active' : ''}`}
                  >
                    <span className="network-collab-desktop-card-connector" aria-hidden="true" />
                    <motion.article
                      className={`network-collab-desktop-node${isActive ? ' is-active' : ''}`}
                      tabIndex={0}
                      onMouseEnter={() => setActiveNode(node.title)}
                      onMouseLeave={() => setActiveNode(null)}
                      onFocus={() => setActiveNode(node.title)}
                      onBlur={() => setActiveNode(null)}
                    >
                      <h3 className="network-collab-node-title">{node.title}</h3>
                      <p className="network-collab-node-desc">{node.description}</p>
                    </motion.article>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <NetworkCtaRow network={network} className="network-collab-cta-row--desktop" />
      </div>
    </section>
  )
}

function TherapeuticApproachSection({ t }) {
  const reduceMotion = useReducedMotion()
  const ta = t.home.therapeuticApproach

  const panels = [
    { key: 'cbt', label: ta.panels[0].label, title: ta.panels[0].title, description: ta.panels[0].description },
    { key: 'act', label: ta.panels[1].label, title: ta.panels[1].title, description: ta.panels[1].description },
    { key: 'vr',  label: ta.panels[2].label, title: ta.panels[2].title, description: ta.panels[2].description },
  ]

  return (
    <section className="therapeutic-approach-section">
      <div className="therapeutic-approach-inner">
        <div className="therapeutic-approach-header">
          <motion.p
            className="therapeutic-approach-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {ta.eyebrow}
          </motion.p>

          <motion.h2
            className="therapeutic-approach-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {ta.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconDivider icon="neurology" />
          </motion.div>

          <motion.p
            className="therapeutic-approach-subheading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {ta.subheading}
          </motion.p>

          <motion.p
            className="therapeutic-approach-editorial"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {ta.editorial}
          </motion.p>
        </div>

        <NeuralVisualization reduceMotion={reduceMotion} />

        <div className="therapeutic-panels-grid">
          {panels.flatMap((panel, i) => ([
            <motion.article
              key={`${panel.key}-card`}
              className={`therapeutic-panel therapeutic-panel--${panel.key}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 }}
              whileHover={reduceMotion ? {} : { y: -5, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            >
              {panel.key === 'cbt' && <CbtAtmosphere reduceMotion={reduceMotion} />}
              {panel.key === 'act' && <ActAtmosphere reduceMotion={reduceMotion} />}
              {panel.key === 'vr'  && <VrAtmosphere  reduceMotion={reduceMotion} />}

              <div className="therapeutic-panel-content">
                <span className="therapeutic-panel-label">{panel.label}</span>
                <h3 className="therapeutic-panel-title">{panel.title}</h3>
                <p className="therapeutic-panel-description">{panel.description}</p>
              </div>
            </motion.article>,
            i === 1 ? (
              <div key="therapeutic-desktop-cta" className="therapeutic-cta-slot therapeutic-cta-slot--desktop">
                <Link to="/clinical/approach" className="section-cta section-cta--therapeutic">
                  {ta.cta}
                </Link>
              </div>
            ) : null,
          ]))}
        </div>

        <div className="therapeutic-cta-slot therapeutic-cta-slot--mobile">
          <Link to="/clinical/approach" className="section-cta section-cta--therapeutic">
            {ta.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

function EditorialQuoteStripSection({ t }) {
  const reduceMotion = useReducedMotion()
  const eq = t.home.editorialQuote

  return (
    <section className="editorial-quote-section" aria-label={eq.ariaLabel}>
      {/* Atmospheric background movement */}
      {!reduceMotion && (
        <>
          <motion.div
            className="eq-orb eq-orb--1"
            animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <motion.div
            className="eq-orb eq-orb--2"
            animate={{ x: [0, -10, 0], y: [0, 12, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="eq-inner">
        <motion.blockquote
          className="eq-blockquote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eq-mark" aria-hidden="true">&ldquo;</span>
          <p className="eq-quote-text">{eq.quote}</p>
          <motion.footer
            className="eq-attribution"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {eq.attribution}
          </motion.footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

function QuietEditorialPauseSection({ t }) {
  const quiet = t.home.quietEditorial

  return (
    <section className="quiet-editorial-section" aria-label={quiet.ariaLabel}>
      <div className="quiet-editorial-inner">
        <p className="quiet-editorial-text">{quiet.text}</p>
        <p className="quiet-editorial-note">{quiet.note}</p>
      </div>
    </section>
  )
}

function WhoIsItForSection({ t }) {
  const reduceMotion = useReducedMotion()
  const wf = t.home.whoIsItFor

  return (
    <section className="who-section">
      {/* Subtle atmospheric orbs */}
      <div className="who-bg" aria-hidden="true">
        <div className="who-orb who-orb--1" />
        <div className="who-orb who-orb--2" />
      </div>

      <div className="who-inner">
        {/* Header */}
        <motion.div
          className="who-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="who-eyebrow">{wf.eyebrow}</span>
          <h2 className="who-title">{wf.title}</h2>
          <IconDivider icon="groups_3" />
          <p className="who-subtext">{wf.subtext}</p>
        </motion.div>

        {/* Arrow panels */}
        <div className="who-panels">
          {wf.panels.map((panel, i) => (
            <motion.article
              key={panel.key}
              className={`who-panel who-panel--${panel.key}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              whileHover={reduceMotion ? {} : { y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* Background icon — atmospheric, oversized */}
              <div className="who-panel-icon-bg" aria-hidden="true">
                <img src={panel.icon} alt="" className="who-panel-icon-img" />
              </div>

              {/* Directional arrow shape overlay */}
              <div className="who-panel-arrow" aria-hidden="true" />

              {/* Light sweep on hover */}
              <div className="who-panel-sweep" aria-hidden="true" />

              {/* Content */}
              <div className="who-panel-content">
                <div className="who-panel-icon-inline" aria-hidden="true">
                  <img src={panel.icon} alt="" />
                </div>
                <h3 className="who-panel-title">{panel.title}</h3>
                <p className="who-panel-description">{panel.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="who-cta-wrap">
          <Link to="/contact" className="section-cta section-cta--who">
            {wf.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

function ClinicalAreaTransitionSection({ t }) {
  const reduceMotion = useReducedMotion()
  const transition = t.home.clinicalAreaTransition

  return (
    <section className="clinical-transition-section">
      <div className="clinical-transition-bg" aria-hidden="true">
        <motion.div
          className="clinical-transition-orb clinical-transition-orb--1"
          animate={reduceMotion ? {} : { x: [0, 28, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="clinical-transition-orb clinical-transition-orb--2"
          animate={reduceMotion ? {} : { x: [0, -22, 0], y: [0, 26, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        />
      </div>

      <motion.div
        className="clinical-transition-inner"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="clinical-transition-eyebrow">{transition.eyebrow}</p>
        <h2 className="clinical-transition-title">{transition.title}</h2>
        <p className="clinical-transition-paragraph">{transition.paragraph}</p>
        <Link to="/clinical" className="clinical-transition-cta">
          <span className="clinical-transition-cta-text">{transition.cta}</span>
          <span className="clinical-transition-cta-arrow" aria-hidden="true">
            <ArrowRight size={17} />
          </span>
          <span className="clinical-transition-cta-sweep" aria-hidden="true" />
        </Link>
      </motion.div>

      <div className="clinical-transition-fade" aria-hidden="true" />
    </section>
  )
}

// ─── SUPPORT AREA ATMOSPHERIC BACKGROUNDS ────────────────────────────────────

function AnxietyAtmosphere({ reduceMotion }) {
  return (
    <div className="support-atm support-atm--anxiety" aria-hidden="true">
      <svg viewBox="0 0 900 480" className="support-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="anx-g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(183,244,255,0)" />
            <stop offset="45%" stopColor="rgba(183,244,255,0.22)" />
            <stop offset="100%" stopColor="rgba(183,244,255,0)" />
          </linearGradient>
          <linearGradient id="anx-g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(183,244,255,0)" />
            <stop offset="50%" stopColor="rgba(183,244,255,0.12)" />
            <stop offset="100%" stopColor="rgba(183,244,255,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 240 C200 190 360 290 540 230 C700 175 820 258 900 240"
          stroke="url(#anx-g1)" strokeWidth="1.8" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 240 C200 190 360 290 540 230 C700 175 820 258 900 240',
              'M0 258 C200 228 360 255 540 268 C700 282 820 234 900 258',
              'M0 240 C200 190 360 290 540 230 C700 175 820 258 900 240',
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0 298 C180 258 340 338 540 278 C700 224 830 306 900 288"
          stroke="url(#anx-g2)" strokeWidth="1.2" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 298 C180 258 340 338 540 278 C700 224 830 306 900 288',
              'M0 314 C180 292 340 306 540 318 C700 330 830 288 900 308',
              'M0 298 C180 258 340 338 540 278 C700 224 830 306 900 288',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.path
          d="M0 182 C220 154 380 228 540 184 C680 146 800 198 900 188"
          stroke="rgba(183,244,255,0.06)" strokeWidth="0.9" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 182 C220 154 380 228 540 184 C680 146 800 198 900 188',
              'M0 196 C220 176 380 196 540 200 C680 206 800 184 900 194',
              'M0 182 C220 154 380 228 540 184 C680 146 800 198 900 188',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.circle
          cx="450" cy="240" r="180" fill="none"
          stroke="rgba(183,244,255,0.04)" strokeWidth="1"
          animate={reduceMotion ? {} : { r: [180, 220, 180], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function MoodAtmosphere({ reduceMotion }) {
  return (
    <div className="support-atm support-atm--mood" aria-hidden="true">
      <svg viewBox="0 0 900 480" className="support-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        {[200, 152, 104, 58].map((r, i) => (
          <motion.circle
            key={i} cx="450" cy="240" r={r} fill="none"
            stroke={`rgba(${i % 2 === 0 ? '183,244,255' : '247,243,238'},${0.11 - i * 0.02})`}
            strokeWidth="1"
            animate={reduceMotion ? {} : {
              r: [r, r + 20, r],
              opacity: [0.11 - i * 0.02, (0.11 - i * 0.02) * 1.9, 0.11 - i * 0.02],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
          />
        ))}
        <motion.ellipse
          cx="450" cy="240" rx="300" ry="175" fill="none"
          stroke="rgba(247,243,238,0.05)" strokeWidth="0.8"
          animate={reduceMotion ? {} : { rx: [300, 322, 300], ry: [175, 192, 175] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.circle
          cx="450" cy="240" r="76" fill="rgba(247,243,238,0.03)" stroke="none"
          animate={reduceMotion ? {} : { r: [76, 108, 76] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function OcdAtmosphere({ reduceMotion }) {
  const gridLinesH = Array.from({ length: 7 }, (_, i) => 54 + i * 62)
  const gridLinesV = Array.from({ length: 10 }, (_, i) => 45 + i * 90)
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]]
  return (
    <div className="support-atm support-atm--ocd" aria-hidden="true">
      <svg viewBox="0 0 900 480" className="support-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        {gridLinesH.map((y, i) => (
          <line key={`gh${i}`} x1="0" y1={y} x2="900" y2={y} stroke="rgba(183,244,255,0.045)" strokeWidth="0.7" />
        ))}
        {gridLinesV.map((x, i) => (
          <line key={`gv${i}`} x1={x} y1="0" x2={x} y2="480" stroke="rgba(183,244,255,0.035)" strokeWidth="0.6" />
        ))}
        {[195, 150, 105, 62].map((half, i) => (
          <motion.rect
            key={i} x={450 - half * 2} y={240 - half} width={half * 4} height={half * 2}
            fill="none" stroke={`rgba(183,244,255,${0.14 - i * 0.03})`} strokeWidth="0.9"
            animate={reduceMotion ? {} : { opacity: [0.4 + i * 0.1, 0.85 + i * 0.05, 0.4 + i * 0.1] }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        ))}
        {corners.map(([sx, sy], i) => (
          <motion.path
            key={i}
            d={`M ${450 + sx * 62} ${240 + sy * 62} L ${450 + sx * 62} ${240 + sy * 41} M ${450 + sx * 62} ${240 + sy * 62} L ${450 + sx * 41} ${240 + sy * 62}`}
            stroke="rgba(183,244,255,0.48)" strokeWidth="1.2" fill="none"
            animate={reduceMotion ? {} : { opacity: [0.48, 0.9, 0.48] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

function RegulationAtmosphere({ reduceMotion }) {
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 8
    return { x2: 450 + Math.cos(angle) * 218, y2: 240 + Math.sin(angle) * 218 }
  })
  return (
    <div className="support-atm support-atm--regulation" aria-hidden="true">
      <svg viewBox="0 0 900 480" className="support-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        {[218, 172, 128, 84, 40].map((r, i) => (
          <motion.circle
            key={i} cx="450" cy="240" r={r} fill="none"
            stroke={`rgba(183,244,255,${0.13 - i * 0.02})`} strokeWidth="0.9"
            animate={reduceMotion ? {} : {
              r: [r, r + 14, r],
              opacity: [0.13 - i * 0.02, (0.13 - i * 0.02) * 2, 0.13 - i * 0.02],
            }}
            transition={{ duration: 7 + i * 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.9 }}
          />
        ))}
        {spokes.map((sp, i) => (
          <motion.line
            key={i} x1="450" y1="240" x2={sp.x2} y2={sp.y2}
            stroke="rgba(183,244,255,0.06)" strokeWidth="0.7" strokeDasharray="4 8"
            animate={reduceMotion ? {} : { strokeDashoffset: [0, -36], opacity: [0.06, 0.18, 0.06] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
          />
        ))}
        <motion.circle
          cx="450" cy="240" r="6" fill="rgba(183,244,255,0.44)"
          animate={reduceMotion ? {} : { r: [5, 9, 5], opacity: [0.38, 0.82, 0.38] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function RelationalAtmosphere({ reduceMotion }) {
  return (
    <div className="support-atm support-atm--relational" aria-hidden="true">
      <svg viewBox="0 0 900 480" className="support-atm-svg" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="rel-g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(183,244,255,0)" />
            <stop offset="45%" stopColor="rgba(183,244,255,0.2)" />
            <stop offset="100%" stopColor="rgba(183,244,255,0)" />
          </linearGradient>
          <linearGradient id="rel-g2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(247,243,238,0)" />
            <stop offset="50%" stopColor="rgba(247,243,238,0.14)" />
            <stop offset="100%" stopColor="rgba(247,243,238,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 80 C240 118 480 218 600 298 C720 378 820 398 900 418"
          stroke="url(#rel-g1)" strokeWidth="1.6" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 80 C240 118 480 218 600 298 C720 378 820 398 900 418',
              'M0 98 C222 128 458 208 578 288 C698 366 818 384 900 402',
              'M0 80 C240 118 480 218 600 298 C720 378 820 398 900 418',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0 398 C200 358 380 278 520 198 C660 118 780 88 900 58"
          stroke="url(#rel-g2)" strokeWidth="1.4" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 398 C200 358 380 278 520 198 C660 118 780 88 900 58',
              'M0 413 C200 376 374 294 518 216 C658 138 774 106 900 76',
              'M0 398 C200 358 380 278 520 198 C660 118 780 88 900 58',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
        <motion.circle
          cx="450" cy="240" r="28" fill="rgba(183,244,255,0.06)"
          stroke="rgba(183,244,255,0.14)" strokeWidth="0.8"
          animate={reduceMotion ? {} : { r: [28, 46, 28], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.path
          d="M0 138 C200 158 420 238 558 318 C698 398 818 418 900 438"
          stroke="rgba(183,244,255,0.04)" strokeWidth="0.8" fill="none"
          animate={reduceMotion ? {} : {
            d: [
              'M0 138 C200 158 420 238 558 318 C698 398 818 418 900 438',
              'M0 152 C200 174 416 252 554 330 C694 410 816 428 900 450',
              'M0 138 C200 158 420 238 558 318 C698 398 818 418 900 438',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </svg>
    </div>
  )
}

// ─── SUPPORT AREAS SECTION ────────────────────────────────────────────────────

function SupportAreasSection({ t }) {
  const reduceMotion = useReducedMotion()
  const support = t.home.supportAreas

  const atmosphereMap = useMemo(() => ({
    anxiety:    <AnxietyAtmosphere    reduceMotion={reduceMotion} />,
    mood:       <MoodAtmosphere       reduceMotion={reduceMotion} />,
    ocd:        <OcdAtmosphere        reduceMotion={reduceMotion} />,
    regulation: <RegulationAtmosphere reduceMotion={reduceMotion} />,
    relational: <RelationalAtmosphere reduceMotion={reduceMotion} />,
  }), [reduceMotion])

  return (
    <section className="support-areas-section">
      <div className="support-areas-inner">
        <motion.div
          className="support-areas-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="support-areas-eyebrow">{support.eyebrow}</span>
          <h2 className="support-areas-title">{support.title}</h2>
          <IconDivider icon="psychiatry" />
          <p className="support-areas-subtext">{support.subtext}</p>
        </motion.div>
      </div>

      <div className="support-story-panels">
        {support.panels.map((panel, index) => {
          const isReversed = index % 2 === 1
          return (
            <motion.article
              key={panel.key}
              className={`support-story-panel support-story-panel--${panel.key}${isReversed ? ' support-story-panel--reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Per-panel atmospheric SVG layer */}
              {atmosphereMap[panel.key]}

              {/* Visual zone: large sculptural icon from panel data */}
              <div className="support-story-visual" aria-hidden="true">
                <img src={panel.icon} alt="" className="support-story-icon--blur" />
                <img src={panel.icon} alt="" className="support-story-icon--main" />
                <div className="support-story-icon-glow" />
              </div>

              {/* Editorial content zone */}
              <motion.div
                className="support-story-content"
                initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              >
                <span className="support-story-index" aria-hidden="true">0{index + 1}</span>
                <h3 className="support-story-title">{panel.title}</h3>
                <div className="support-story-rule" aria-hidden="true" />
                <p className="support-story-description">{panel.description}</p>
              </motion.div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

// ─── SECTION 12 — ABOUT DR. LAURA ────────────────────────────────────────────

function AboutDrLauraSection({ t }) {
  const about = t.home.aboutSection

  return (
    <section className="about-section">
      <div className="about-section-bg" aria-hidden="true">
        <div className="about-section-orb about-section-orb--1" />
        <div className="about-section-orb about-section-orb--2" />
      </div>

      <div className="about-section-inner">
        <motion.div
          className="about-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="about-section-eyebrow">{about.eyebrow}</span>
          <h2 className="about-section-title">{about.title}</h2>
          <IconDivider icon="workspace_premium" />
          <div className="about-section-badge">
            <span>{about.badge}</span>
          </div>
        </motion.div>

        <div className="about-section-layout">
          <motion.div
            className="about-section-image-col"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-section-portrait">
              <div className="about-section-portrait-glow" aria-hidden="true" />
              <img
                src="/dr-laura-cocozza-professional-headshot.png"
                alt={about.portraitAlt}
                className="about-section-portrait-img"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-section-content-col"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <div className="about-section-content-card">
              <p className="about-section-paragraph">{about.paragraph}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-section-cta-wrap"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Link to="/contact" className="book-pill">
            {about.ctaButton}
            <span className="book-pill-icon" aria-hidden="true">
              <ArrowUpRight size={22} />
            </span>
          </Link>
          <p className="about-section-cta-subtext">{about.ctaSubtext}</p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── SECTION 13 — FAQ ─────────────────────────────────────────────────────────

function FaqSection({ t }) {
  const faq = t.home.faqSection
  const [openIndex, setOpenIndex] = useState(null)
  const reduceMotion = useReducedMotion()

  const half = Math.ceil(faq.faqs.length / 2)
  const leftFaqs = faq.faqs.slice(0, half)
  const rightFaqs = faq.faqs.slice(half)

  function FaqItem({ item, globalIndex }) {
    const isOpen = openIndex === globalIndex
    return (
      <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
        <button
          type="button"
          className="faq-question"
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          aria-expanded={isOpen}
        >
          <span className="faq-question-text">{item.q}</span>
          <span className="faq-chevron" aria-hidden="true">
            <ChevronDown size={18} />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="faq-answer-text">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section className="faq-section">
      <div className="faq-section-bg" aria-hidden="true">
        <div className="faq-orb faq-orb--1" />
        <div className="faq-orb faq-orb--2" />
      </div>

      <div className="faq-section-inner">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="faq-eyebrow">{faq.eyebrow}</span>
          <h2 className="faq-title">{faq.title}</h2>
          <p className="faq-intro">{faq.intro}</p>
        </motion.div>

        <div className="faq-grid">
          <motion.div
            className="faq-column"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {leftFaqs.map((item, i) => (
              <FaqItem key={i} item={item} globalIndex={i} />
            ))}
          </motion.div>

          <motion.div
            className="faq-column"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {rightFaqs.map((item, i) => (
              <FaqItem key={i} item={item} globalIndex={half + i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 14 — CONTACT ─────────────────────────────────────────────────────

function HomepageContactSection({ t }) {
  const cs = t.home.contactSection
  const [formState, setFormState] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' })

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mailtoBody = encodeURIComponent(
      `${cs.form.mailtoName}: ${formState.fullName}\n${cs.form.mailtoEmail}: ${formState.email}\n${cs.form.mailtoPhone}: ${formState.phone}\n${cs.form.mailtoMessage}:\n${formState.message}`
    )
    window.location.href = `mailto:laura.cocozza.893@psypec.it?subject=${encodeURIComponent(formState.subject || cs.form.subject)}&body=${mailtoBody}`
  }

  return (
    <section className="hp-contact-section" id="contact">
      <div className="hp-contact-bg" aria-hidden="true">
        <div className="hp-contact-orb hp-contact-orb--1" />
        <div className="hp-contact-orb hp-contact-orb--2" />
      </div>

      <div className="hp-contact-inner">
        <motion.div
          className="hp-contact-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hp-contact-eyebrow">{cs.eyebrow}</span>
          <h2 className="hp-contact-title">{cs.title}</h2>
          <IconDivider icon="mail" className="hp-contact-divider" />
          <p className="hp-contact-intro">{cs.intro}</p>
        </motion.div>

        <div className="hp-contact-layout">
          {/* Contact form */}
          <motion.form
            className="hp-contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hp-contact-field">
              <label className="hp-contact-label" htmlFor="hpc-fullname">{cs.form.fullName}</label>
              <input
                id="hpc-fullname"
                name="fullName"
                type="text"
                className="hp-contact-input"
                value={formState.fullName}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="hp-contact-field">
              <label className="hp-contact-label" htmlFor="hpc-email">{cs.form.email}</label>
              <input
                id="hpc-email"
                name="email"
                type="email"
                className="hp-contact-input"
                value={formState.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="hp-contact-field">
              <label className="hp-contact-label" htmlFor="hpc-phone">{cs.form.phone}</label>
              <input
                id="hpc-phone"
                name="phone"
                type="tel"
                className="hp-contact-input"
                value={formState.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
            <div className="hp-contact-field">
              <label className="hp-contact-label" htmlFor="hpc-subject">{cs.form.subject}</label>
              <input
                id="hpc-subject"
                name="subject"
                type="text"
                className="hp-contact-input"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>
            <div className="hp-contact-field hp-contact-field--full">
              <label className="hp-contact-label" htmlFor="hpc-message">{cs.form.message}</label>
              <textarea
                id="hpc-message"
                name="message"
                rows={5}
                className="hp-contact-input hp-contact-textarea"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="hp-contact-send">
              <Send size={16} aria-hidden="true" />
              <span>{cs.form.send}</span>
            </button>
          </motion.form>

          {/* Contact info panel */}
          <motion.div
            className="hp-contact-info-panel"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="hp-contact-info-block">
              <span className="hp-contact-info-icon" aria-hidden="true"><Mail size={18} /></span>
              <div>
                <p className="hp-contact-info-title">{cs.info.emailTitle}</p>
                {cs.info.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="hp-contact-info-value hp-contact-info-link">{email}</a>
                ))}
              </div>
            </div>
            <div className="hp-contact-info-block">
              <span className="hp-contact-info-icon" aria-hidden="true"><Phone size={18} /></span>
              <div>
                <p className="hp-contact-info-title">{cs.info.phoneTitle}</p>
                <a href={`tel:${cs.info.phone.replace(/\s/g, '')}`} className="hp-contact-info-value hp-contact-info-link">{cs.info.phone}</a>
              </div>
            </div>
            {cs.info.whatsapp && (
              <div className="hp-contact-info-block">
                <span className="hp-contact-info-icon" aria-hidden="true"><MessageCircle size={18} /></span>
                <div>
                  <p className="hp-contact-info-title">WhatsApp</p>
                  <a href={cs.info.whatsapp} target="_blank" rel="noopener noreferrer" className="hp-contact-info-value hp-contact-info-link">{cs.info.whatsappLabel}</a>
                </div>
              </div>
            )}
            <div className="hp-contact-info-block">
              <span className="hp-contact-info-icon" aria-hidden="true"><MapPin size={18} /></span>
              <div>
                <p className="hp-contact-info-title">{cs.info.locationTitle}</p>
                <p className="hp-contact-info-value">{cs.info.address}</p>
              </div>
            </div>
            <div className="hp-contact-info-block">
              <span className="hp-contact-info-icon" aria-hidden="true"><Video size={18} /></span>
              <div>
                <p className="hp-contact-info-title">{cs.info.consultationsTitle}</p>
                <p className="hp-contact-info-value">{cs.info.consultations}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 15 — SITE FOOTER ─────────────────────────────────────────────────

function SiteFooter({ t, branding }) {
  const f = t.footer

  return (
    <footer className={`site-footer${branding ? ' site-footer--branded' : ''}`}>
      <div className="site-footer-top-rule" aria-hidden="true" />

      <div className="site-footer-inner">
        {/* Brand column */}
        <div className="site-footer-brand">
          <Link to="/home" className="site-footer-logo-link" aria-label={f.logoAriaLabel}>
            <img src="/logo-or-icon.png" alt="" className="site-footer-logo-img" aria-hidden="true" />
          </Link>
          <div className="site-footer-brand-copy">
            <p className="site-footer-brand-name">{f.doctor}</p>
            <p className="site-footer-brand-subtitle">{f.brand}</p>
            <p className="site-footer-brand-tagline">{f.tagline}</p>
          </div>
        </div>

        {/* Navigation column */}
        <div className="site-footer-nav-col">
          <p className="site-footer-col-heading">{t.nav.about === 'About' ? 'Navigation' : 'Navigazione'}</p>
          <nav className="site-footer-nav" aria-label={f.navAriaLabel}>
            {f.nav.map((label, i) => (
              <Link key={label} to={f.navLinks[i]} className="site-footer-nav-link">{label}</Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div className="site-footer-contact-col">
          <p className="site-footer-col-heading">{t.nav.about === 'About' ? 'Contact' : 'Contatti'}</p>
          <div className="site-footer-contact">
            <a href={`mailto:${f.email}`} className="site-footer-contact-item site-footer-contact-item--link">
              <Mail size={14} aria-hidden="true" />
              <span>{f.email}</span>
            </a>
            <a href={`tel:${f.phone.replace(/\s/g, '')}`} className="site-footer-contact-item site-footer-contact-item--link">
              <Phone size={14} aria-hidden="true" />
              <span>{f.phone}</span>
            </a>
            <a href="https://wa.me/39339366980" target="_blank" rel="noopener noreferrer" className="site-footer-contact-item site-footer-contact-item--link">
              <MessageCircle size={14} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <p className="site-footer-contact-item">
              <MapPin size={14} aria-hidden="true" />
              <span>{f.address}</span>
            </p>
          </div>
        </div>

        {branding && (
          <div className="site-footer-branding">
            <Link to={branding.href} className="site-footer-branding-link">
              <img src="/psylex-italia-logo.png" alt={branding.alt} className="site-footer-branding-logo" />
              <span className="site-footer-branding-label">{branding.label}</span>
            </Link>
          </div>
        )}
      </div>

      <div className="site-footer-bottom">
        <p className="site-footer-copyright">{f.copyright}</p>
      </div>
    </footer>
  )
}

function Section({ title, subtitle, items }) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <motion.article key={item.title} className="card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <item.icon size={18} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.to && (
              <Link to={item.to} className="inline-link">
                <span>→</span>
                <ArrowRight size={14} />
              </Link>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Home({ t }) {
  return (
    <>
      <LandingHero t={t} />

      <div className="app-shell app-shell--home">
        <TrustBuildingSection t={t} />

        <ClinicalAreaIntroductionSection t={t} />
        <IntegratedCareProcessSection t={t} />
        <TherapeuticApproachSection t={t} />
        <EditorialQuoteStripSection t={t} />
        <WhoIsItForSection t={t} />
        <ClinicalAreaTransitionSection t={t} />
        <SupportAreasSection t={t} />
        <ClinicalFamily t={t} />
        <MultidisciplinaryNetworkSection t={t} />
        <AboutDrLauraSection t={t} />
        <QuietEditorialPauseSection t={t} />
        <FaqSection t={t} />
        <HomepageContactSection t={t} />
      </div>

      <SiteFooter t={t} />
    </>
  )
}

/* ── Inner page wrapper ─────────────────────────────────── */

function PageWrapper({ children, t }) {
  return (
    <div className="app-shell">
      <main style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>{children}</main>
      <Footer t={t} />
    </div>
  )
}

function ClinicalPage({ t }) {
  const cp = getClinicalPageContent(t)

  return (
    <>
      <CpHero cp={cp.hero} />
      <div className="cp-page">
        <CpMiniNav items={cp.navigation} />
        <CpPathwaySection cp={cp.pathway} />
        <CpMethodsSection cp={cp.methods} />
        <CpAudiencesSection cp={cp.audiences} />
        <CpConditionsSection cp={cp.conditions} />
        <CpFamilySystemsSection cp={cp.family} />
        <CpSupportAreasSection cp={cp.support} />
        <CpNetworkSection cp={cp.network} />
        <CpFinalCtaSection cp={cp.finalCta} />
      </div>
      <SiteFooter t={t} />
    </>
  )
}

function CpHero({ cp }) {
  return (
    <section className="cp-hero">
      <div className="cp-hero-bg" aria-hidden="true">
        <div className="cp-hero-orb cp-hero-orb--1" />
        <div className="cp-hero-orb cp-hero-orb--2" />
      </div>
      <div className="cp-hero-inner">
        <div className="cp-hero-grid">
          <div className="cp-hero-copy">
            <motion.p
              className="cp-hero-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {cp.eyebrow}
            </motion.p>
            <motion.h1
              className="cp-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {cp.title}
            </motion.h1>
            <IconDivider Icon={CLINICAL_DIVIDER_ICONS.hero} className="cp-hero-divider" />
            <motion.p
              className="cp-hero-subtitle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              {cp.subtitle}
            </motion.p>
            <motion.p
              className="cp-hero-supporting"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              {cp.supporting}
            </motion.p>
            <motion.div
              className="cp-hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            >
              <CpPillButton to="/contact" variant="primary">
                {cp.primaryCta}
              </CpPillButton>
              <CpPillButton variant="secondary" onClick={() => scrollToSection('clinical-pathways')}>
                {cp.secondaryCta}
              </CpPillButton>
            </motion.div>
          </div>
          <motion.div
            className="cp-hero-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="cp-hero-image-frame">
              <img src={cp.imageSrc} alt={cp.imageAlt} className="cp-hero-image" />
              <div className="cp-hero-image-overlay" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="cp-hero-rule" aria-hidden="true" />
    </section>
  )
}

function scrollToSection(id) {
  if (typeof document === 'undefined') return
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function CpMiniNav({ items }) {
  return (
    <div className="cp-mini-nav-shell" aria-label="Clinical page navigation">
      <div className="cp-mini-nav">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="cp-mini-nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function CpSectionHeader({ eyebrow, title, intro, dividerIcon, className = '' }) {
  return (
    <motion.div
      className={`cp-section-header ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="cp-eyebrow">{eyebrow}</span>
      <h2 className="cp-section-title">{title}</h2>
      <IconDivider Icon={dividerIcon} className="cp-section-divider" />
      {intro && <p className="cp-section-intro">{intro}</p>}
    </motion.div>
  )
}

function CpPillArrow() {
  return (
    <span className="cp-pill-arrow" aria-hidden="true">
      <ArrowRight size={17} className="cp-pill-arrow__icon cp-pill-arrow__icon--first" />
      <ArrowRight size={17} className="cp-pill-arrow__icon cp-pill-arrow__icon--second" />
    </span>
  )
}

function CpPillButton({ to, onClick, variant = 'primary', children }) {
  const className = `cp-pill-button cp-pill-button--${variant}`
  const content = (
    <>
      <span>{children}</span>
      <CpPillArrow />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}

function CpPathwaySection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--light">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.pathway}
        />
        <div className="cp-pathway-grid">
          {cp.steps.map((step, i) => {
            const StepIcon = CLINICAL_PATHWAY_ICONS[step.iconKey]

            return (
              <motion.article
                key={step.step}
                className="cp-pathway-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              >
                <div className="cp-pathway-top">
                  <span className="cp-pathway-icon">{StepIcon && <StepIcon aria-hidden="true" />}</span>
                  <span className="cp-pathway-step">{step.step}</span>
                </div>
                <h3 className="cp-pathway-title">{step.title}</h3>
                <p className="cp-pathway-description">{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CpMethodsSection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--dark">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.methods}
        />
        <div className="cp-methods-grid">
          {cp.cards.map((card, i) => (
            <motion.article
              key={card.code}
              className="cp-method-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <span className="cp-method-code">{card.code}</span>
              <h3 className="cp-method-title">{card.title}</h3>
              <p className="cp-method-description">{card.description}</p>
              <div className="cp-method-meta">
                <div>
                  <span className="cp-method-label">{cp.techniqueLabel}</span>
                  <div className="cp-chip-list">
                    {card.techniques.map((technique) => (
                      <span key={technique} className="cp-chip">
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="cp-method-label">{cp.conditionsLabel}</span>
                  <div className="cp-chip-list">
                    {card.conditions.map((condition) => (
                      <span key={condition} className="cp-chip cp-chip--soft">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CpAudiencesSection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--teal">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.audiences}
        />
        <div className="cp-audience-grid">
          {cp.cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="cp-audience-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="cp-audience-head">
                <h3 className="cp-audience-title">{card.title}</h3>
                <span className="cp-audience-age">{card.age}</span>
              </div>
              <div className="cp-audience-block">
                <span className="cp-audience-label">{cp.focusLabel}</span>
                <div className="cp-chip-list">
                  {card.focus.map((item) => (
                    <span key={item} className="cp-chip cp-chip--light">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="cp-audience-block">
                <span className="cp-audience-label">{cp.challengesLabel}</span>
                <div className="cp-chip-list">
                  {card.challenges.map((item) => (
                    <span key={item} className="cp-chip cp-chip--light">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="cp-audience-block">
                <span className="cp-audience-label">{cp.approachLabel}</span>
                <p className="cp-audience-text">{card.approach}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CpConditionsSection({ cp }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id={cp.id} className="cp-section cp-section--light">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.conditions}
        />
        <div className="cp-accordion">
          {cp.items.map((item, i) => {
            const isOpen = i === openIndex

            return (
              <motion.article
                key={item.title}
                className={`cp-accordion-item${isOpen ? ' is-open' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                <button
                  type="button"
                  className="cp-accordion-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="cp-accordion-title">{item.title}</h3>
                    <p className="cp-accordion-summary">{item.summary}</p>
                  </div>
                  <ChevronDown className="cp-accordion-chevron" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="cp-accordion-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="cp-accordion-panel-inner">
                        <div>
                          <span className="cp-accordion-label">{cp.approachLabel}</span>
                          <p>{item.approach}</p>
                        </div>
                        <div>
                          <span className="cp-accordion-label">{cp.outcomesLabel}</span>
                          <p>{item.outcomes}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CpFamilySystemsSection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--dark">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.family}
        />
        <div className="cp-family-grid">
          {cp.cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="cp-family-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <h3 className="cp-family-title">{card.title}</h3>
              <p className="cp-family-text">{card.text}</p>
              <div className="cp-chip-list">
                {card.points.map((point) => (
                  <span key={point} className="cp-chip cp-chip--light">
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CpSupportAreasSection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--light">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.support}
        />
        <div className="cp-support-grid">
          {cp.cards.map((area, i) => (
            <motion.article
              key={area.title}
              className="cp-support-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <h3 className="cp-support-title">{area.title}</h3>
              <p className="cp-support-summary">{area.summary}</p>
              <div className="cp-support-methods">
                <span className="cp-support-methods-label">{cp.methodsLabel}</span>
                <div className="cp-chip-list">
                  {area.methods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      className="cp-chip cp-chip--interactive"
                      onClick={() => scrollToSection('clinical-methods')}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CpNetworkSection({ cp }) {
  return (
    <section id={cp.id} className="cp-section cp-section--teal">
      <div className="cp-section-inner">
        <CpSectionHeader
          eyebrow={cp.eyebrow}
          title={cp.title}
          intro={cp.intro}
          dividerIcon={CLINICAL_DIVIDER_ICONS.network}
        />
        <div className="cp-network-grid">
          {cp.items.map((item, i) => {
            const NetworkIcon = CLINICAL_NETWORK_ICONS[item.iconKey]

            return (
              <motion.article
                key={item.title}
                className="cp-network-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
              >
                <div className="cp-network-head">
                  <span className="cp-network-icon">{NetworkIcon && <NetworkIcon aria-hidden="true" />}</span>
                  <h3 className="cp-network-title">{item.title}</h3>
                </div>
                <div className="cp-network-copy">
                  <div>
                    <span className="cp-network-label">{cp.whyLabel}</span>
                    <p>{item.why}</p>
                  </div>
                  <div>
                    <span className="cp-network-label">{cp.roleLabel}</span>
                    <p>{item.role}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CpFinalCtaSection({ cp }) {
  return (
    <section className="cp-final-cta">
      <div className="cp-final-cta-bg" aria-hidden="true">
        <div className="cp-final-cta-orb cp-final-cta-orb--1" />
        <div className="cp-final-cta-orb cp-final-cta-orb--2" />
      </div>
      <motion.div
        className="cp-final-cta-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="cp-eyebrow cp-eyebrow--light">{cp.eyebrow}</span>
        <h2 className="cp-final-cta-title">{cp.title}</h2>
        <IconDivider Icon={CLINICAL_DIVIDER_ICONS.final} className="cp-final-cta-divider" />
        <p className="cp-final-cta-intro">{cp.intro}</p>
        <div className="cp-final-cta-buttons">
          <CpPillButton to={cp.primaryLink} variant="primary">
            {cp.primaryButton}
          </CpPillButton>
          <CpPillButton variant="secondary" onClick={() => scrollToSection(cp.secondaryTarget)}>
            {cp.secondaryButton}
          </CpPillButton>
        </div>
      </motion.div>
    </section>
  )
}

function Clinical({ t }) {
  return <ClinicalPage t={t} />
}



function ClinicalApproach() {
  return (
    <Section
      title="Therapeutic Approach"
      items={[
        { icon: Brain, title: 'Cognitive Behavioral Therapy', text: 'Evidence-based interventions and measurable outcomes.' },
        { icon: Sparkles, title: 'ACT', text: 'Values-oriented psychological flexibility and mindful action.' },
        { icon: Stethoscope, title: 'Virtual Reality Integration', text: 'Controlled immersive support for targeted therapeutic goals.' },
        { icon: Users, title: 'Personalized + Multidisciplinary', text: 'Integrated plans with allied healthcare and legal professionals.' },
      ]}
    />
  )
}

function ClinicalIndividual() {
  return (
    <Section
      title="Individual Psychotherapy"
      items={[
        { icon: Brain, title: 'Anxiety and Mood Disorders', text: 'Structured protocols for emotional stabilization.' },
        { icon: HeartHandshake, title: 'OCD and Regulation', text: 'Exposure-based and cognitive strategies for daily functioning.' },
        { icon: Sparkles, title: 'Relational Difficulties', text: 'Attachment-informed work and communication skills.' },
        { icon: ShieldCheck, title: 'Stress Management', text: 'Performance, transitions, and life-event support.' },
      ]}
    />
  )
}

function ClinicalFamily({ t }) {
  const fs = t.home.familySupport
  const panels = fs.panels

  return (
    <section className="family-support-section">
      <div className="family-support-shell">
        <motion.header className="family-support-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <p className="family-support-eyebrow">{fs.eyebrow}</p>
          <h1 className="family-support-title">{fs.title}</h1>
          <IconDivider icon="diversity_1" className="family-support-divider" />
          <p className="family-support-intro">{fs.intro}</p>
        </motion.header>

        <div className="family-support-grid">
          {panels.map((panel, index) => (
            <motion.article
              key={panel.title}
              className="family-support-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              tabIndex={0}
            >
              <div className="family-support-card-inner">
                <div className="family-support-face family-support-face--front">
                  <img src={panel.icon} alt="" aria-hidden="true" className="family-support-front-icon" />
                  <h2>{panel.title}</h2>
                  <p>{panel.intro}</p>
                  <span className="family-support-cta">{panel.cta}</span>
                </div>

                <div className="family-support-face family-support-face--back">
                  <img src={panel.icon} alt="" aria-hidden="true" className="family-support-back-icon" />
                  <ul className="family-support-highlights">
                    {panel.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="family-support-cta-wrap">
          <Link to="/contact" className="section-cta section-cta--family-support">
            {fs.sectionCta}
          </Link>
        </div>
      </div>
    </section>
  )
}

function ClinicalNetwork() {
  return (
    <Section
      title="Network-Based Work"
      items={[
        { icon: Stethoscope, title: 'Child Psychotherapists', text: 'Integrated developmental and family support.' },
        { icon: BriefcaseBusiness, title: 'Psychiatrists & Neuropsychiatrists', text: 'Coordinated care where clinically indicated.' },
        { icon: Landmark, title: 'Family Law Attorneys', text: 'Clear communication in legally sensitive pathways.' },
        { icon: Scale, title: 'Forensic Professionals', text: 'Consistent clinical-forensic alignment.' },
      ]}
    />
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FORENSIC PAGE — DATA
// ─────────────────────────────────────────────────────────────────────────────

const FORENSIC_PAGE_CONTENT = {
  it: {
    hero: {
      eyebrow: 'AREA FORENSE',
      title: 'Psicologia Giuridica e Forense',
      subtitle: 'Consulenza tecnica d\'ufficio in procedimenti civili, familiari e di valutazione del danno psicologico.',
      description:
        'Psicologa forense, consulente tecnica d\'ufficio (CTU) e di parte (CTP) con esperienza in psicologia giuridica, procedimenti familiari e valutazione del danno psicologico. Collaborazione con i principali Tribunali del Friuli Venezia Giulia e con studi legali su tutto il territorio nazionale.',
      primaryCta: 'Richiedi Consulenza Forense',
      secondaryCta: 'Esplora i Servizi',
      imageSrc: '/laura-cocozza-hero-image.jpg',
      imageAlt: 'Psicologia forense e consulenza tecnica — Dott.ssa Laura Cocozza',
    },
    navigation: [
      { id: 'forensic-profile', label: 'Profilo' },
      { id: 'forensic-services', label: 'Servizi' },
      { id: 'forensic-domains', label: 'Ambiti' },
      { id: 'forensic-psylex', label: 'PsyLex' },
      { id: 'forensic-contact', label: 'Contatti' },
    ],
    profile: {
      eyebrow: 'PROFILO PROFESSIONALE',
      title: 'Competenza istituzionale al servizio del procedimento',
      intro:
        'Psicologa iscritta all\'Ordine degli Psicologi, specializzata in psicologia forense e giuridica. Esperienza documentata in perizie, valutazioni e consulenze per Tribunali e studi legali del territorio nazionale.',
      credentials: [
        {
          code: 'CTU',
          title: 'Consulente Tecnico d\'Ufficio',
          description:
            'Incarichi giudiziali in procedimenti civili e di diritto di famiglia presso i Tribunali del Friuli Venezia Giulia.',
        },
        {
          code: 'CTP',
          title: 'Consulente Tecnico di Parte',
          description:
            'Supporto tecnico specialistico nell\'interesse di parti private in procedimenti civili e familiari su scala nazionale.',
        },
        {
          code: 'LEG',
          title: 'Psicologia Giuridica',
          description:
            'Specializzazione nell\'intersezione tra psicologia clinica e diritto, con attenzione alla tutela del minore e alla valutazione del danno psicologico.',
        },
      ],
    },
    services: {
      id: 'forensic-services',
      eyebrow: 'SERVIZI FORENSI',
      title: 'Servizi specializzati per il procedimento giudiziario',
      intro:
        'Attività tecniche e consulenziali a supporto di procedimenti civili, familiari e di valutazione del danno psicologico.',
      cards: [
        {
          iconKey: 'scale',
          title: 'CTU e CTP',
          description:
            'Attività di consulenza tecnica d\'ufficio e di parte in procedimenti civili e familiari.',
        },
        {
          iconKey: 'family',
          title: 'Area Familiare',
          description:
            'Consulenze psicologiche forensi in contesti di separazione, affidamento, responsabilità genitoriale e dinamiche familiari complesse.',
        },
        {
          iconKey: 'coordination',
          title: 'Coordinazione Genitoriale',
          description:
            'Interventi dedicati ai genitori in situazioni di alto conflitto, finalizzati al supporto di una gestione più funzionale della co-genitorialità.',
        },
        {
          iconKey: 'damage',
          title: 'Danno Psicologico',
          description:
            'Valutazioni psicologiche nell\'ambito di richieste risarcitorie e di danno psicologico da lavoro.',
        },
        {
          iconKey: 'support',
          title: 'Supporto Tecnico per Avvocati',
          description:
            'Consulenze psicologiche forensi e supporto tecnico specialistico in procedimenti familiari e civili.',
        },
      ],
    },
    domains: {
      id: 'forensic-domains',
      eyebrow: 'AMBITI SPECIALIZZATI',
      title: 'Aree di competenza tecnica approfondita',
      intro:
        'Ogni ambito rappresenta un percorso metodologico strutturato, con procedure codificate e documentazione tecnica certificata.',
      approachLabel: 'Metodologia',
      outcomesLabel: 'Documentazione prodotta',
      items: [
        {
          title: 'Procedure CTU/CTP',
          summary:
            'Il processo tecnico dalla nomina alla deposizione, con garanzie di rigore metodologico.',
          approach:
            'Raccolta documentale, colloqui clinici strutturati, somministrazione di strumenti psicometrici validati, redazione dell\'elaborato peritale secondo gli standard scientifici e normativi vigenti.',
          outcomes:
            'Perizia psicologica, consulenza tecnica scritta, documentazione integrativa per udienza.',
        },
        {
          title: 'Valutazioni Familiari e Affidamento',
          summary:
            'Assessment delle competenze genitoriali e del funzionamento relazionale familiare.',
          approach:
            'Osservazioni strutturate, colloqui con genitori e minori, valutazione delle dinamiche di attaccamento, assessment delle competenze genitoriali con strumenti psicometrici specifici.',
          outcomes:
            'Relazione tecnica sull\'idoneità genitoriale, valutazione del superiore interesse del minore, raccomandazioni su affidamento e frequentazione.',
        },
        {
          title: 'Valutazione del Danno Psicologico',
          summary:
            'Quantificazione e qualificazione del danno psichico in contesti risarcitori e occupazionali.',
          approach:
            'Raccolta anamnestica, diagnosi clinica secondo i sistemi nosografici vigenti (DSM-5/ICD-11), valutazione dell\'impatto sul funzionamento globale, applicazione di criteri medico-legali per la quantificazione del danno.',
          outcomes:
            'Perizia medico-legale psicologica, stima percentuale del danno biologico, documentazione per contenzioso civile e lavorativo.',
        },
        {
          title: 'Metodologia di Consulenza Legale',
          summary: 'Struttura e standard della collaborazione con avvocati e studi legali.',
          approach:
            'Definizione dell\'incarico tecnico, briefing con il difensore, impostazione della strategia peritale di parte, verifica critica delle perizie avversarie, preparazione per la conferenza dei consulenti.',
          outcomes:
            'Note tecniche per il difensore, pareri scritti, supporto alla preparazione dell\'udienza.',
        },
      ],
    },
    psylex: {
      id: 'forensic-psylex',
      eyebrow: 'ECOSISTEMA IN SVILUPPO',
      title: 'PsyLex',
      logoAlt: 'Logo PsyLex Italia',
      subtitle: 'Un ecosistema collaborativo di psicologia giuridica in fase di sviluppo',
      description:
        'PsyLex è una piattaforma professionale emergente che integra psicologia giuridica, consulenza forense e collaborazione interdisciplinare tra psicologi e avvocati.',
      previewImageSrc: '/psylex-italia-image-with-content.jpeg',
      previewImageAlt: 'Anteprima grafica del progetto PsyLex Italia',
      features: [
        'Connessione di professionisti forensi in flussi di lavoro strutturati',
        'Miglioramento del coordinamento in procedimenti familiari e civili',
        'Standardizzazione dei processi di documentazione psicologico-legale',
        'Facilitazione della collaborazione avvocato–psicologo',
      ],
      status: 'In sviluppo — piattaforma concettuale',
      expandTitle: 'Visione del Progetto',
      expandContent:
        'PsyLex nasce dall\'esigenza concreta di strutturare la collaborazione tra il mondo giuridico e quello psicologico. L\'obiettivo è costruire un\'infrastruttura professionale che standardizzi i flussi documentali, migliori la qualità delle comunicazioni tecniche tra consulenti e avvocati, e renda il lavoro forense più efficiente, trasparente e misurabile. Il progetto è attualmente in fase concettuale e di sviluppo architetturale.',
      primaryCta: 'Anteprima Concept PsyLex',
      secondaryCta: 'Collaborazione Forense',
    },
    contact: {
      id: 'forensic-contact',
      eyebrow: 'CONTATTI',
      title: 'Richiedi una consulenza forense',
      intro:
        'Per richieste di consulenza tecnica, supporto in procedimenti forensi o informazioni sui servizi, è possibile contattare lo studio attraverso i canali ufficiali.',
      emails: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
      phone: '+39 339 366 980',
      address: 'Via Generale Baldissera 14 — Udine',
      consultations: 'Colloqui online e in presenza',
      cta: 'Richiedi Informazioni',
    },
    footerBranding: {
      href: PSYLEX_SECTION_PATH,
      alt: 'Logo PsyLex Italia',
      label: 'PsyLex Italia – Emerging Legal Psychology Network',
    },
  },
  en: {
    hero: {
      eyebrow: 'FORENSIC AREA',
      title: 'Legal and Forensic Psychology',
      subtitle:
        'Court-appointed expertise in civil, family, and psychological damage assessment proceedings.',
      description:
        'Forensic psychologist, court-appointed expert (CTU) and party consultant (CTP) with experience in legal psychology, family proceedings, and psychological damage evaluation. Collaboration with Courts of Friuli Venezia Giulia and law firms across Italy.',
      primaryCta: 'Request Forensic Consultation',
      secondaryCta: 'Explore Services',
      imageSrc: '/laura-cocozza-hero-image.jpg',
      imageAlt: 'Forensic psychology and technical consultation — Dr. Laura Cocozza',
    },
    navigation: [
      { id: 'forensic-profile', label: 'Profile' },
      { id: 'forensic-services', label: 'Services' },
      { id: 'forensic-domains', label: 'Domains' },
      { id: 'forensic-psylex', label: 'PsyLex' },
      { id: 'forensic-contact', label: 'Contacts' },
    ],
    profile: {
      eyebrow: 'PROFESSIONAL PROFILE',
      title: 'Institutional expertise in service of the proceeding',
      intro:
        'Registered psychologist specialised in forensic and legal psychology. Documented experience in expert reports, assessments, and consultancy for courts and law firms across Italy.',
      credentials: [
        {
          code: 'CTU',
          title: 'Court-Appointed Expert',
          description:
            'Judicial appointments in civil and family law proceedings at the Courts of Friuli Venezia Giulia.',
        },
        {
          code: 'CTP',
          title: 'Party-Appointed Consultant',
          description:
            'Specialised technical support for private parties in civil and family proceedings across Italy.',
        },
        {
          code: 'LEG',
          title: 'Legal Psychology',
          description:
            'Specialisation at the intersection of clinical psychology and law, with a focus on child protection and psychological damage assessment.',
        },
      ],
    },
    services: {
      id: 'forensic-services',
      eyebrow: 'FORENSIC SERVICES',
      title: 'Specialised services for judicial proceedings',
      intro:
        'Technical and consultancy activities supporting civil, family, and psychological damage assessment proceedings.',
      cards: [
        {
          iconKey: 'scale',
          title: 'CTU and CTP',
          description:
            'Court-appointed and party-appointed psychological consulting activities within civil and family proceedings.',
        },
        {
          iconKey: 'family',
          title: 'Family Area',
          description:
            'Forensic psychological consultations in the context of separation, child custody, parental responsibility, and complex family dynamics.',
        },
        {
          iconKey: 'coordination',
          title: 'Parenting Coordination',
          description:
            'Interventions dedicated to parents experiencing high-conflict situations, aimed at supporting more functional co-parenting management.',
        },
        {
          iconKey: 'damage',
          title: 'Psychological Damage',
          description:
            'Psychological evaluations within the context of compensation claims and work-related psychological damage.',
        },
        {
          iconKey: 'support',
          title: 'Legal Technical Support',
          description:
            'Forensic psychological consultancy and specialised technical support for attorneys in family and civil proceedings.',
        },
      ],
    },
    domains: {
      id: 'forensic-domains',
      eyebrow: 'SPECIALISED DOMAINS',
      title: 'Areas of in-depth technical expertise',
      intro:
        'Each domain represents a structured methodological pathway with codified procedures and certified technical documentation.',
      approachLabel: 'Methodology',
      outcomesLabel: 'Documentation produced',
      items: [
        {
          title: 'CTU/CTP Procedures',
          summary:
            'The technical process from appointment to deposition, with guarantees of methodological rigour.',
          approach:
            'Documentary collection, structured clinical interviews, administration of validated psychometric tools, drafting of the expert report according to current scientific and regulatory standards.',
          outcomes:
            'Psychological expert report, written technical consultation, supplementary documentation for court hearings.',
        },
        {
          title: 'Family and Custody Evaluations',
          summary:
            'Assessment of parental competencies and family relational functioning.',
          approach:
            'Structured observations, interviews with parents and children, attachment dynamics evaluation, parental competency assessment with specific psychometric instruments.',
          outcomes:
            'Technical report on parental suitability, evaluation of the child\'s best interest, recommendations on custody and visitation arrangements.',
        },
        {
          title: 'Psychological Damage Assessment',
          summary:
            'Quantification and qualification of psychological harm in compensation and occupational contexts.',
          approach:
            'Anamnestic collection, clinical diagnosis according to current nosographic systems (DSM-5/ICD-11), assessment of impact on global functioning, application of medico-legal criteria for damage quantification.',
          outcomes:
            'Psychological medico-legal expert report, percentage estimate of biological damage, documentation for civil and employment litigation.',
        },
        {
          title: 'Legal Consultation Methodology',
          summary: 'Structure and standards of collaboration with attorneys and law firms.',
          approach:
            'Technical assignment definition, briefing with counsel, party-expert strategy formulation, critical review of opposing expert reports, preparation for the experts\' conference.',
          outcomes:
            'Technical notes for counsel, written opinions, support for hearing preparation.',
        },
      ],
    },
    psylex: {
      id: 'forensic-psylex',
      eyebrow: 'EMERGING ECOSYSTEM',
      title: 'PsyLex',
      logoAlt: 'PsyLex Italia logo',
      subtitle: 'A collaborative legal-psychology ecosystem under development',
      description:
        'PsyLex is an emerging professional platform integrating legal psychology, forensic consultation, and interdisciplinary collaboration between psychologists and attorneys.',
      previewImageSrc: '/psylex-italia-image-with-content.jpeg',
      previewImageAlt: 'PsyLex Italia project visual preview',
      features: [
        'Connect forensic professionals in structured workflows',
        'Improve coordination in family and civil proceedings',
        'Standardise psychological-legal documentation processes',
        'Facilitate attorney–psychologist collaboration',
      ],
      status: 'Under development — conceptual platform',
      expandTitle: 'Project Vision',
      expandContent:
        'PsyLex arises from the concrete need to structure collaboration between the legal and psychological worlds. The objective is to build a professional infrastructure that standardises documentary workflows, improves the quality of technical communications between consultants and attorneys, and makes forensic work more efficient, transparent, and measurable. The project is currently in the conceptual and architectural design phase.',
      primaryCta: 'Preview PsyLex Concept',
      secondaryCta: 'Forensic Collaboration',
    },
    contact: {
      id: 'forensic-contact',
      eyebrow: 'CONTACTS',
      title: 'Request a forensic consultation',
      intro:
        'For technical consultation requests, support in forensic proceedings, or information about services, the practice can be contacted through the official channels below.',
      emails: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
      phone: '+39 339 366 980',
      address: 'Via Generale Baldissera 14 — Udine',
      consultations: 'Online and in-person consultations',
      cta: 'Request Information',
    },
    footerBranding: {
      href: PSYLEX_SECTION_PATH,
      alt: 'PsyLex Italia logo',
      label: 'PsyLex Italia – Emerging Legal Psychology Network',
    },
  },
}

const ABOUT_PAGE_CONTENT = {
  it: {
    hero: {
      eyebrow: 'CHI SONO',
      title: 'Dott.ssa Laura Cocozza',
      subtitle: 'Psicoterapeuta e Psicologa Forense',
      philosophy:
        'La pratica professionale nasce dall\'integrazione tra competenza clinica, ascolto autentico e responsabilità professionale. Ogni percorso viene costruito con attenzione alla storia personale, al contesto relazionale e alla qualità dell\'alleanza terapeutica.',
      methodology:
        'L\'intervento si fonda su psicoterapia evidence-based, valutazione accurata e obiettivi condivisi. Terapia Cognitivo-Comportamentale, ACT e collaborazione multidisciplinare vengono utilizzate in modo rigoroso e personalizzato, con una doppia competenza clinica e forense.',
      primaryCta: 'Esplora l\'Area Clinica',
      secondaryCta: 'Scopri la Competenza Forense',
      imageSrc: '/dr-laura-cocozza-professional-headshot.png',
      imageAlt: 'Dott.ssa Laura Cocozza ritratto professionale',
    },
    philosophy: {
      eyebrow: 'FILOSOFIA PROFESSIONALE',
      title: 'Un approccio clinico fondato su metodo, cura e chiarezza professionale',
      intro:
        'La relazione terapeutica resta centrale, ma è sempre sostenuta da una struttura di lavoro chiara, monitorabile e scientificamente orientata.',
      cards: [
        {
          iconKey: 'brain',
          title: 'Psicoterapia evidence-based',
          text: 'Ogni intervento è guidato da modelli clinici validati e da strumenti coerenti con la complessità del caso.',
        },
        {
          iconKey: 'heart',
          title: 'Cura integrata e centrata sulla persona',
          text: 'L\'attenzione alla persona, al contesto e alla qualità della relazione rimane il punto di partenza di ogni decisione clinica.',
        },
        {
          iconKey: 'target',
          title: 'Percorsi terapeutici strutturati',
          text: 'La presa in carico procede attraverso valutazione, obiettivi condivisi e verifiche regolari del percorso terapeutico.',
        },
      ],
    },
    profile: {
      eyebrow: 'PROFILO PROFESSIONALE',
      title: 'Profilo professionale',
      intro:
        'Una pratica che unisce psicoterapia clinica, psicologia forense e collaborazione interdisciplinare in un assetto coerente e affidabile.',
      rows: [
        { label: 'Nome', value: 'Dott.ssa Laura Cocozza' },
        { label: 'Titolo', value: 'Psicologa · Psicoterapeuta Cognitivo-Comportamentale · Psicologa Forense' },
        {
          label: 'Specializzazioni',
          value: 'CBT, ACT, supporto familiare, valutazione forense, consulenza CTU/CTP, valutazione del danno psicologico',
        },
        {
          label: 'Doppia competenza clinica + forense',
          value: 'Cura clinica orientata al benessere emotivo, insieme a una competenza forense strutturata per contesti familiari, civili e legali.',
        },
      ],
    },
    values: {
      eyebrow: 'APPROCCIO & VALORI',
      title: 'Valori che orientano ogni percorso',
      cards: [
        {
          iconKey: 'shield',
          title: 'Integrità clinica',
          text: 'Scelte cliniche trasparenti, responsabilità professionale e attenzione costante alla tutela della persona.',
        },
        {
          iconKey: 'target',
          title: 'Metodologia strutturata',
          text: 'Percorsi definiti da valutazione iniziale, obiettivi concreti e lettura continua dell\'evoluzione terapeutica.',
        },
        {
          iconKey: 'users',
          title: 'Collaborazione interdisciplinare',
          text: 'Quando necessario, il lavoro clinico si integra con specialisti in area psichiatrica, neuropsichiatrica e legale.',
        },
        {
          iconKey: 'sparkles',
          title: 'Focus sul benessere duraturo',
          text: 'L\'obiettivo non è la sola gestione del sintomo, ma la costruzione di equilibrio, consapevolezza e continuità nel tempo.',
        },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: 'ABOUT',
      title: 'Dr. Laura Cocozza',
      subtitle: 'Psychotherapist and Forensic Psychologist',
      philosophy:
        'The practice is grounded in the integration of clinical competence, authentic listening, and professional responsibility. Each pathway is shaped with attention to personal history, relational context, and the quality of the therapeutic alliance.',
      methodology:
        'Work is based on evidence-based psychotherapy, careful assessment, and shared goals. Cognitive-Behavioral Therapy, ACT, and multidisciplinary collaboration are used in a rigorous and personalised way, supported by dual clinical and forensic expertise.',
      primaryCta: 'Explore Clinical Area',
      secondaryCta: 'View Forensic Expertise',
      imageSrc: '/dr-laura-cocozza-professional-headshot.png',
      imageAlt: 'Dr. Laura Cocozza professional portrait',
    },
    philosophy: {
      eyebrow: 'PROFESSIONAL PHILOSOPHY',
      title: 'A clinical approach grounded in method, care, and professional clarity',
      intro:
        'The therapeutic relationship remains central, while always supported by a clear, measurable, and scientifically informed structure of care.',
      cards: [
        {
          iconKey: 'brain',
          title: 'Evidence-based psychotherapy',
          text: 'Each intervention is guided by validated clinical models and tools aligned with the complexity of the case.',
        },
        {
          iconKey: 'heart',
          title: 'Integrated human-centred care',
          text: 'Attention to the person, context, and relationship remains the starting point for every clinical decision.',
        },
        {
          iconKey: 'target',
          title: 'Structured therapeutic pathways',
          text: 'Care progresses through assessment, shared goals, and regular review of the therapeutic process.',
        },
      ],
    },
    profile: {
      eyebrow: 'PROFESSIONAL PROFILE',
      title: 'Professional profile',
      intro:
        'A practice that combines clinical psychotherapy, forensic psychology, and interdisciplinary collaboration within a coherent and trustworthy professional setting.',
      rows: [
        { label: 'Name', value: 'Dr. Laura Cocozza' },
        { label: 'Title', value: 'Psychologist · Cognitive-Behavioral Psychotherapist · Forensic Psychologist' },
        {
          label: 'Specializations',
          value: 'CBT, ACT, family support, forensic assessment, CTU/CTP consultation, psychological damage evaluation',
        },
        {
          label: 'Dual clinical + forensic role',
          value: 'Clinical care focused on emotional wellbeing, together with structured forensic expertise for family, civil, and legal contexts.',
        },
      ],
    },
    values: {
      eyebrow: 'APPROACH & VALUES',
      title: 'Values that guide every pathway',
      cards: [
        {
          iconKey: 'shield',
          title: 'Clinical integrity',
          text: 'Transparent clinical judgment, professional accountability, and constant attention to the person\'s protection.',
        },
        {
          iconKey: 'target',
          title: 'Structured methodology',
          text: 'Pathways shaped by initial assessment, concrete objectives, and continuous review of therapeutic progress.',
        },
        {
          iconKey: 'users',
          title: 'Interdisciplinary collaboration',
          text: 'When useful, clinical work is integrated with psychiatric, neuropsychiatric, and legal specialists.',
        },
        {
          iconKey: 'sparkles',
          title: 'Long-term wellbeing focus',
          text: 'The objective is not only symptom management, but durable balance, awareness, and psychological continuity over time.',
        },
      ],
    },
  },
}

const CONTACT_PAGE_CONTENT = {
  it: {
    hero: {
      eyebrow: 'CONTATTI',
      title: 'Richiedi supporto e orientamento',
      subtitle: 'Consulenze cliniche e forensi disponibili',
      intro:
        'Uno spazio di contatto chiaro e riservato per richieste cliniche, consulenze forensi e orientamento familiare o legale.',
    },
    methods: {
      eyebrow: 'MODALITÀ DI CONTATTO',
      title: 'Modalità di contatto e orientamento iniziale',
      cards: [
        {
          iconKey: 'mail',
          title: 'Email',
          items: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
        },
        {
          iconKey: 'phone',
          title: 'Telefono & WhatsApp',
          items: ['+39 339 366 980'],
          phone: '+39 339 366 980',
          whatsapp: 'https://wa.me/39339366980',
        },
        {
          iconKey: 'book',
          title: 'Tipologie di consulenza',
          items: ['Clinica', 'Forense', 'Consulenza familiare/legale'],
        },
        {
          iconKey: 'refresh',
          title: 'Disponibilità & Risposta',
          items: ['Risposta generalmente entro 1–2 giorni lavorativi', 'Primo orientamento via email o breve call conoscitiva'],
        },
      ],
    },
    cta: {
      eyebrow: 'RICHIEDI UNA CONSULENZA',
      title: 'Un punto di accesso semplice, professionale e diretto',
      intro:
        'Se desideri un primo orientamento o vuoi richiedere una consulenza, puoi usare i pulsanti qui sotto oppure inviare direttamente un messaggio.',
      primary: 'Richiedi Consulenza',
      secondary: 'Invia Richiesta',
    },
    form: {
      eyebrow: 'MODULO DI CONTATTO',
      title: 'Invia un messaggio',
      intro: 'Compila il form essenziale qui sotto. Nome, email e messaggio sono sufficienti per un primo contatto.',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Richiesta',
      subject: 'Richiesta di consulenza dal sito web',
      mailtoName: 'Nome',
      mailtoEmail: 'Email',
      mailtoMessage: 'Messaggio',
    },
  },
  en: {
    hero: {
      eyebrow: 'CONTACT',
      title: 'Reach Out for Support',
      subtitle: 'Clinical and forensic consultations available',
      intro:
        'A clear and confidential contact space for clinical requests, forensic consultations, and family or legal guidance.',
    },
    methods: {
      eyebrow: 'CONTACT OPTIONS',
      title: 'Contact pathways and initial guidance',
      cards: [
        {
          iconKey: 'mail',
          title: 'Email',
          items: ['laura.cocozza.893@psypec.it', 'info@psylexitalia.com'],
        },
        {
          iconKey: 'phone',
          title: 'Phone & WhatsApp',
          items: ['+39 339 366 980'],
          phone: '+39 339 366 980',
          whatsapp: 'https://wa.me/39339366980',
        },
        {
          iconKey: 'book',
          title: 'Consultation Types',
          items: ['Clinical', 'Forensic', 'Family/legal consultation'],
        },
        {
          iconKey: 'refresh',
          title: 'Availability / Response',
          items: ['Replies usually within 1–2 working days', 'Initial orientation via email or a short introductory call'],
        },
      ],
    },
    cta: {
      eyebrow: 'REQUEST A CONSULTATION',
      title: 'A simple, professional, and direct access point',
      intro:
        'If you would like initial guidance or want to request a consultation, you can use the buttons below or send a message directly.',
      primary: 'Request Consultation',
      secondary: 'Send Inquiry',
    },
    form: {
      eyebrow: 'FORM',
      title: 'Send a message',
      intro: 'Fill in the essential form below. Name, email, and message are enough for a first contact.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Inquiry',
      subject: 'Consultation request from website',
      mailtoName: 'Name',
      mailtoEmail: 'Email',
      mailtoMessage: 'Message',
    },
  },
}

const FORENSIC_DIVIDER_ICONS = {
  hero: Scale,
  profile: Gavel,
  services: BriefcaseBusiness,
  domains: FileText,
  psylex: Network,
  contact: Mail,
}

const FORENSIC_SERVICE_ICONS = {
  scale: Scale,
  family: Users,
  coordination: RefreshCcw,
  damage: AlertTriangle,
  support: FileText,
}

function getForensicPageContent(t) {
  return t.nav.about === 'About' ? FORENSIC_PAGE_CONTENT.en : FORENSIC_PAGE_CONTENT.it
}

function getAboutPageContent(t) {
  return t.nav.about === 'About' ? ABOUT_PAGE_CONTENT.en : ABOUT_PAGE_CONTENT.it
}

function getContactPageContent(t) {
  return t.nav.about === 'About' ? CONTACT_PAGE_CONTENT.en : CONTACT_PAGE_CONTENT.it
}

// ─────────────────────────────────────────────────────────────────────────────
// FORENSIC PAGE — SHARED HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function FpPillArrow() {
  return (
    <span className="fp-pill-arrow" aria-hidden="true">
      <ArrowRight size={17} className="fp-pill-arrow__icon fp-pill-arrow__icon--first" />
      <ArrowRight size={17} className="fp-pill-arrow__icon fp-pill-arrow__icon--second" />
    </span>
  )
}

function FpPillButton({ to, onClick, variant = 'primary', children }) {
  const cls = `fp-pill-button fp-pill-button--${variant}`
  const inner = (
    <>
      <span>{children}</span>
      <FpPillArrow />
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  )
}

function FpSectionHeader({ eyebrow, title, intro, dividerIcon, className = '' }) {
  return (
    <motion.div
      className={`fp-section-header ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="fp-eyebrow">{eyebrow}</span>
      <h2 className="fp-section-title">{title}</h2>
      <IconDivider Icon={dividerIcon} className="fp-section-divider" />
      {intro && <p className="fp-section-intro">{intro}</p>}
    </motion.div>
  )
}

function FpMiniNav({ items }) {
  return (
    <div className="fp-mini-nav-shell" aria-label="Forensic page navigation">
      <div className="fp-mini-nav">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="fp-mini-nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FORENSIC PAGE — SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

function FpHero({ fp }) {
  return (
    <section className="fp-hero">
      <div className="fp-hero-bg" aria-hidden="true">
        <div className="fp-hero-orb fp-hero-orb--1" />
        <div className="fp-hero-orb fp-hero-orb--2" />
      </div>
      <div className="fp-hero-inner">
        <div className="fp-hero-grid">
          <div className="fp-hero-copy">
            <motion.p
              className="fp-hero-eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {fp.eyebrow}
            </motion.p>
            <motion.h1
              className="fp-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {fp.title}
            </motion.h1>
            <IconDivider Icon={FORENSIC_DIVIDER_ICONS.hero} className="fp-hero-divider" />
            <motion.p
              className="fp-hero-subtitle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              {fp.subtitle}
            </motion.p>
            <motion.p
              className="fp-hero-supporting"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              {fp.description}
            </motion.p>
            <motion.div
              className="fp-hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
            >
              <FpPillButton to="/contact" variant="primary">
                {fp.primaryCta}
              </FpPillButton>
              <FpPillButton variant="secondary" onClick={() => scrollToSection('forensic-services')}>
                {fp.secondaryCta}
              </FpPillButton>
            </motion.div>
          </div>
          <motion.div
            className="fp-hero-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="fp-hero-image-frame">
              <img src={fp.imageSrc} alt={fp.imageAlt} className="fp-hero-image" />
              <div className="fp-hero-image-overlay" aria-hidden="true" />
              <div className="fp-hero-emblem" aria-hidden="true">
                <Scale className="fp-hero-emblem-icon" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="fp-hero-rule" aria-hidden="true" />
    </section>
  )
}

function FpProfileSection({ fp }) {
  return (
    <section id="forensic-profile" className="fp-section fp-section--light">
      <div className="fp-section-inner">
        <FpSectionHeader
          eyebrow={fp.eyebrow}
          title={fp.title}
          intro={fp.intro}
          dividerIcon={FORENSIC_DIVIDER_ICONS.profile}
        />
        <div className="fp-credentials-grid">
          {fp.credentials.map((cred, i) => (
            <motion.article
              key={cred.code}
              className="fp-credential-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <span className="fp-credential-code">{cred.code}</span>
              <h3 className="fp-credential-title">{cred.title}</h3>
              <p className="fp-credential-description">{cred.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FpServicesSection({ fp }) {
  return (
    <section id="forensic-services" className="fp-section fp-section--dark">
      <div className="fp-section-inner">
        <FpSectionHeader
          eyebrow={fp.eyebrow}
          title={fp.title}
          intro={fp.intro}
          dividerIcon={FORENSIC_DIVIDER_ICONS.services}
        />
        <div className="fp-services-grid">
          {fp.cards.map((card, i) => {
            const ServiceIcon = FORENSIC_SERVICE_ICONS[card.iconKey]
            return (
              <motion.article
                key={card.title}
                className="fp-service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
              >
                <div className="fp-service-icon">
                  {ServiceIcon && <ServiceIcon aria-hidden="true" />}
                </div>
                <h3 className="fp-service-title">{card.title}</h3>
                <p className="fp-service-description">{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FpDomainsSection({ fp }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="forensic-domains" className="fp-section fp-section--slate">
      <div className="fp-section-inner">
        <FpSectionHeader
          eyebrow={fp.eyebrow}
          title={fp.title}
          intro={fp.intro}
          dividerIcon={FORENSIC_DIVIDER_ICONS.domains}
        />
        <div className="fp-accordion">
          {fp.items.map((item, i) => {
            const isOpen = i === openIndex
            return (
              <motion.article
                key={item.title}
                className={`fp-accordion-item${isOpen ? ' is-open' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              >
                <button
                  type="button"
                  className="fp-accordion-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="fp-accordion-title">{item.title}</h3>
                    <p className="fp-accordion-summary">{item.summary}</p>
                  </div>
                  <ChevronDown className="fp-accordion-chevron" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="fp-accordion-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="fp-accordion-panel-inner">
                        <div>
                          <span className="fp-accordion-label">{fp.approachLabel}</span>
                          <p>{item.approach}</p>
                        </div>
                        <div>
                          <span className="fp-accordion-label">{fp.outcomesLabel}</span>
                          <p>{item.outcomes}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FpPsyLexSection({ fp }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="forensic-psylex" className="fp-section fp-section--psylex">
      <div className="fp-section-inner">
        <motion.div
          className="fp-psylex-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="fp-eyebrow fp-eyebrow--light">{fp.eyebrow}</span>
          <motion.img
            src="/psylex-italia-logo.png"
            alt={fp.logoAlt}
            className="fp-psylex-logo"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          />
          <h2 className="fp-psylex-title">{fp.title}</h2>
          <IconDivider Icon={FORENSIC_DIVIDER_ICONS.psylex} className="fp-section-divider" />
          <p className="fp-psylex-subtitle">{fp.subtitle}</p>
          <p className="fp-psylex-description">{fp.description}</p>
        </motion.div>

        <motion.ul
          className="fp-psylex-features"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {fp.features.map((feature) => (
            <li key={feature} className="fp-psylex-feature">
              <ArrowRight size={15} aria-hidden="true" className="fp-psylex-feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          className="fp-psylex-status"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {fp.status}
        </motion.p>

        <motion.figure
          className="fp-psylex-preview"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <img src={fp.previewImageSrc} alt={fp.previewImageAlt} className="fp-psylex-preview-image" />
        </motion.figure>

        <motion.div
          className="fp-psylex-actions"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        >
          <FpPillButton variant="primary" onClick={() => setExpanded((v) => !v)}>
            {fp.primaryCta}
          </FpPillButton>
          <FpPillButton variant="secondary" onClick={() => scrollToSection('forensic-contact')}>
            {fp.secondaryCta}
          </FpPillButton>
        </motion.div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="fp-psylex-expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="fp-psylex-expand-inner">
                <h3 className="fp-psylex-expand-title">{fp.expandTitle}</h3>
                <p className="fp-psylex-expand-content">{fp.expandContent}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function FpContactSection({ fp }) {
  return (
    <section id="forensic-contact" className="fp-section fp-section--contact">
      <div className="fp-section-inner">
        <motion.div
          className="fp-contact-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="fp-eyebrow fp-eyebrow--light">{fp.eyebrow}</span>
          <h2 className="fp-contact-title">{fp.title}</h2>
          <IconDivider Icon={FORENSIC_DIVIDER_ICONS.contact} className="fp-section-divider" />
          <p className="fp-contact-intro">{fp.intro}</p>
          <div className="fp-contact-chips">
            {fp.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="fp-contact-chip">
                <Mail size={13} aria-hidden="true" />
                {email}
              </a>
            ))}
            <a href={`tel:${fp.phone.replace(/\s/g, '')}`} className="fp-contact-chip">
              <Phone size={13} aria-hidden="true" />
              {fp.phone}
            </a>
          </div>
          <div className="fp-contact-meta">
            <span className="fp-contact-meta-item">
              <MapPin size={14} aria-hidden="true" />
              {fp.address}
            </span>
            <span className="fp-contact-meta-item">
              <Video size={14} aria-hidden="true" />
              {fp.consultations}
            </span>
          </div>
          <FpPillButton to="/contact" variant="primary">
            {fp.cta}
          </FpPillButton>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FORENSIC PAGE — SHELL
// ─────────────────────────────────────────────────────────────────────────────

function ForensicPage({ t }) {
  const fp = getForensicPageContent(t)

  return (
    <>
      <FpHero fp={fp.hero} />
      <div className="fp-page">
        <FpMiniNav items={fp.navigation} />
        <FpProfileSection fp={fp.profile} />
        <FpServicesSection fp={fp.services} />
        <FpDomainsSection fp={fp.domains} />
        <FpPsyLexSection fp={fp.psylex} />
        <FpContactSection fp={fp.contact} />
      </div>
      <SiteFooter t={t} branding={fp.footerBranding} />
    </>
  )
}

function Forensic({ t }) {
  return <ForensicPage t={t} />
}

function ForensicServices() {
  return (
    <Section
      title="Forensic Services"
      items={[
        { icon: Scale, title: 'CTU / CTP', text: 'Technical assistance and court-appointed consultancy support.' },
        { icon: Users, title: 'Family Proceedings', text: 'Parenting evaluations and family-system analysis.' },
        { icon: HeartHandshake, title: 'Parenting Coordination', text: 'Conflict management and child-focused arrangements.' },
        { icon: ShieldCheck, title: 'Psychological Damage', text: 'Assessment framework for civil and legal contexts.' },
      ]}
    />
  )
}

function PsyLexPreview() {
  return <Navigate to={PSYLEX_SECTION_PATH} replace />
}

const ABOUT_PAGE_ICONS = {
  brain: Brain,
  heart: HeartHandshake,
  target: Target,
  shield: ShieldCheck,
  users: Users,
  sparkles: Sparkles,
}

const CONTACT_PAGE_ICONS = {
  mail: Mail,
  phone: Phone,
  book: BookOpen,
  refresh: RefreshCcw,
}

function AboutPageSectionHeader({ eyebrow, title, intro }) {
  return (
    <motion.div
      className="about-page-section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="about-page-eyebrow">{eyebrow}</span>
      <h2 className="about-page-title">{title}</h2>
      <IconDivider Icon={HeartHandshake} className="about-page-divider" />
      {intro && <p className="about-page-intro">{intro}</p>}
    </motion.div>
  )
}

function AboutPage({ t }) {
  const ap = getAboutPageContent(t)

  return (
    <>
      <section className="about-page-hero">
        <div className="about-page-shell">
          <div className="about-page-hero-grid">
            <motion.div
              className="about-page-hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="about-page-eyebrow">{ap.hero.eyebrow}</span>
              <h1 className="about-page-hero-title">{ap.hero.title}</h1>
              <p className="about-page-hero-subtitle">{ap.hero.subtitle}</p>
              <p className="about-page-hero-paragraph">{ap.hero.philosophy}</p>
              <p className="about-page-hero-paragraph">{ap.hero.methodology}</p>
            </motion.div>

            <motion.div
              className="about-page-hero-visual"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              <div className="about-page-hero-image-shell">
                <img src={ap.hero.imageSrc} alt={ap.hero.imageAlt} className="about-page-hero-image" />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-page-hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            <CpPillButton to="/clinical" variant="primary">
              {ap.hero.primaryCta}
            </CpPillButton>
            <CpPillButton to="/forensic" variant="secondary">
              {ap.hero.secondaryCta}
            </CpPillButton>
          </motion.div>
        </div>
      </section>

      <div className="about-page">
        <section className="about-page-section about-page-section--soft">
          <div className="about-page-shell">
            <AboutPageSectionHeader
              eyebrow={ap.philosophy.eyebrow}
              title={ap.philosophy.title}
              intro={ap.philosophy.intro}
            />
            <div className="about-page-card-grid">
              {ap.philosophy.cards.map((card, index) => {
                const CardIcon = ABOUT_PAGE_ICONS[card.iconKey]

                return (
                  <motion.article
                    key={card.title}
                    className="about-page-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  >
                    <span className="about-page-card-icon">{CardIcon && <CardIcon aria-hidden="true" />}</span>
                    <h3 className="about-page-card-title">{card.title}</h3>
                    <p className="about-page-card-text">{card.text}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="about-page-section about-page-section--profile">
          <div className="about-page-shell">
            <AboutPageSectionHeader
              eyebrow={ap.profile.eyebrow}
              title={ap.profile.title}
              intro={ap.profile.intro}
            />
            <motion.article
              className="about-page-profile-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              {ap.profile.rows.map((row) => (
                <div key={row.label} className="about-page-profile-row">
                  <span className="about-page-profile-label">{row.label}</span>
                  <p className="about-page-profile-value">{row.value}</p>
                </div>
              ))}
            </motion.article>
          </div>
        </section>

        <section className="about-page-section about-page-section--values">
          <div className="about-page-shell">
            <AboutPageSectionHeader eyebrow={ap.values.eyebrow} title={ap.values.title} />
            <div className="about-page-card-grid about-page-card-grid--values">
              {ap.values.cards.map((card, index) => {
                const CardIcon = ABOUT_PAGE_ICONS[card.iconKey]

                return (
                  <motion.article
                    key={card.title}
                    className="about-page-card about-page-card--value"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  >
                    <span className="about-page-card-icon">{CardIcon && <CardIcon aria-hidden="true" />}</span>
                    <h3 className="about-page-card-title">{card.title}</h3>
                    <p className="about-page-card-text">{card.text}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      <SiteFooter t={t} />
    </>
  )
}

function ContactPage({ t }) {
  const cp = getContactPageContent(t)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const mailtoBody = encodeURIComponent(
      `${cp.form.mailtoName}: ${formState.name}\n${cp.form.mailtoEmail}: ${formState.email}\n${cp.form.mailtoMessage}:\n${formState.message}`
    )
    window.location.href = `mailto:laura.cocozza.893@psypec.it?subject=${encodeURIComponent(cp.form.subject)}&body=${mailtoBody}`
  }

  return (
    <>
      <section className="contact-page-hero">
        <div className="contact-page-shell">
          <motion.div
            className="contact-page-hero-copy contact-page-hero-copy--centered"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="contact-page-eyebrow">{cp.hero.eyebrow ?? (t.nav.about === 'About' ? 'CONTACT' : 'CONTATTI')}</span>
            <h1 className="contact-page-hero-title">{cp.hero.title}</h1>
            <p className="contact-page-hero-subtitle">{cp.hero.subtitle}</p>
            <p className="contact-page-hero-intro">{cp.hero.intro}</p>
          </motion.div>
        </div>
      </section>

      <div className="contact-page">
        <section className="contact-page-section">
          <div className="contact-page-shell">
            <AboutPageSectionHeader
              eyebrow={cp.methods.eyebrow}
              title={cp.methods.title}
            />
            <div className="contact-page-card-grid">
              {cp.methods.cards.map((card, index) => {
                const CardIcon = CONTACT_PAGE_ICONS[card.iconKey]

                return (
                  <motion.article
                    key={card.title}
                    className="contact-page-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  >
                    <span className="contact-page-card-icon">{CardIcon && <CardIcon aria-hidden="true" />}</span>
                    <h3 className="contact-page-card-title">{card.title}</h3>
                    <div className="contact-page-card-items">
                      {card.items.map((item) => {
                        if (card.iconKey === 'mail') {
                          return <a key={item} href={`mailto:${item}`} className="contact-page-card-item contact-page-card-item--link">{item}</a>
                        }
                        if (card.iconKey === 'phone') {
                          return (
                            <span key={item} className="contact-page-card-phone-group">
                              <a href={`tel:${item.replace(/\s/g, '')}`} className="contact-page-card-item contact-page-card-item--link">{item}</a>
                              {card.whatsapp && (
                                <a href={card.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-page-card-item contact-page-card-item--link contact-page-card-item--whatsapp">
                                  <MessageCircle size={14} aria-hidden="true" />
                                  {t.nav.about === 'About' ? 'Message on WhatsApp' : 'Scrivici su WhatsApp'}
                                </a>
                              )}
                            </span>
                          )
                        }
                        return <p key={item} className="contact-page-card-item">{item}</p>
                      })}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="contact-page-cta-section">
          <motion.div
            className="contact-page-cta-shell"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="contact-page-eyebrow">{cp.cta.eyebrow}</span>
            <h2 className="contact-page-cta-title">{cp.cta.title}</h2>
            <p className="contact-page-cta-intro">{cp.cta.intro}</p>
            <div className="contact-page-cta-actions">
              <CpPillButton variant="primary" onClick={() => scrollToSection('contact-form-section')}>
                {cp.cta.primary}
              </CpPillButton>
              <a href="mailto:laura.cocozza.893@psypec.it" className="cp-pill-button cp-pill-button--secondary">
                <span>{cp.cta.secondary}</span>
                <CpPillArrow />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="contact-form-section" className="contact-page-section contact-page-section--form">
          <div className="contact-page-shell">
            <AboutPageSectionHeader
              eyebrow={cp.form.eyebrow}
              title={cp.form.title}
              intro={cp.form.intro}
            />
            <motion.form
              className="contact-page-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <label className="contact-page-form-field">
                <span className="contact-page-form-label">{cp.form.name}</span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="contact-page-form-input"
                  required
                />
              </label>

              <label className="contact-page-form-field">
                <span className="contact-page-form-label">{cp.form.email}</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="contact-page-form-input"
                  required
                />
              </label>

              <label className="contact-page-form-field contact-page-form-field--full">
                <span className="contact-page-form-label">{cp.form.message}</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="contact-page-form-input contact-page-form-textarea"
                  required
                />
              </label>

              <button type="submit" className="contact-page-form-submit">
                <span>{cp.form.send}</span>
                <CpPillArrow />
              </button>
            </motion.form>
          </div>
        </section>
      </div>

      <SiteFooter t={t} />
    </>
  )
}

function About({ t }) {
  return <AboutPage t={t} />
}

function Contact({ t }) {
  return <ContactPage t={t} />
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <p>{t.footer.copyright}</p>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/clinical">{t.footer.nav[1]}</Link>
        <Link to="/forensic">{t.footer.nav[2]}</Link>
        <Link to="/about">{t.nav.about}</Link>
        <Link to="/contact">{t.footer.nav[3]}</Link>
      </div>
    </footer>
  )
}

function AppShell() {
  const [lang, setLang] = useState('it')
  const [preloaderVisible, setPreloaderVisible] = useState(() => shouldShowPreloader())
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const t = content[lang]
  const preloaderAriaLabel = lang === 'it' ? 'Monogramma Laura Cocozza' : 'Laura Cocozza monogram'
  const isHome = location.pathname === '/home' || location.pathname === '/'

  // True once the preloader is dismissed — the header logo gets layoutId only at
  // that moment so framer-motion has a single owner during the preloader phase
  // (prevents the "LC stuck at top-left" glitch caused by two elements sharing
  // the same layoutId while both are in the DOM).
  const preloaderDone = !preloaderVisible

  useEffect(() => {
    if (!preloaderVisible) return
    markPreloaderAsShown()
  }, [preloaderVisible])

  useEffect(() => {
    if (!preloaderVisible) return
    const timer = setTimeout(
      () => setPreloaderVisible(false),
      reduceMotion ? PRELOADER_REDUCED_MOTION_DURATION_MS : PRELOADER_DURATION_MS,
    )
    return () => clearTimeout(timer)
  }, [preloaderVisible, reduceMotion])

  return (
    <LayoutGroup id="lc-shared">
      <Preloader visible={preloaderVisible} ariaLabel={preloaderAriaLabel} />

      <motion.div
        className="app-content"
        initial={false}
        animate={preloaderVisible ? 'covered' : 'visible'}
        variants={{
          covered: {
            opacity: 0,
            y: reduceMotion ? 0 : 10,
            filter: reduceMotion ? 'blur(0px)' : 'blur(3px)',
            transition: { duration: reduceMotion ? 0.16 : 0.28, ease: [0.4, 0, 1, 1] },
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            // Start the page reveal earlier so the LC morph and the reveal overlap
            transition: { duration: reduceMotion ? 0.28 : 0.72, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.1 },
          },
        }}
      >
        <SiteHeader
          t={t}
          lang={lang}
          setLang={setLang}
          isLanding={isHome}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          preloaderDone={preloaderDone}
        />

        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          t={t}
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0.18 : 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home t={t} />} />
              <Route path="/clinical" element={<Clinical t={t} />} />
              <Route path="/clinical/approach" element={<PageWrapper t={t}><ClinicalApproach /></PageWrapper>} />
              <Route path="/clinical/individual-psychotherapy" element={<PageWrapper t={t}><ClinicalIndividual /></PageWrapper>} />
              <Route path="/clinical/family-support" element={<PageWrapper t={t}><ClinicalFamily t={t} /></PageWrapper>} />
              <Route path="/clinical/network" element={<PageWrapper t={t}><ClinicalNetwork /></PageWrapper>} />
              <Route path="/forensic" element={<Forensic t={t} />} />
              <Route path="/forensic/services" element={<PageWrapper t={t}><ForensicServices /></PageWrapper>} />
              <Route path="/forensic/psylex" element={<PsyLexPreview />} />
              <Route path="/about" element={<About t={t} />} />
              <Route path="/contact" element={<Contact t={t} />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}

export default App
