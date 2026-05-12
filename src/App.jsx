import { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  HeartHandshake,
  Landmark,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserStar,
  Users,
} from 'lucide-react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'

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
    },
    home: {
      eyebrow: 'Psicoterapia clinica e psicologia forense',
      by: 'DI',
      title: 'Uno spazio professionale, umano e autorevole per il tuo equilibrio.',
      description:
        'Percorsi personalizzati per adolescenti, adulti e famiglie, con integrazione clinica-forense e una rete multidisciplinare dedicata al benessere.',
      ctaPrimary: 'Prenota una consulenza',
      ctaAriaLabel: 'Prenota una consulenza',
      logoAriaLabel: 'Monogramma LC – torna alla home',
      ctaSecondary: 'Esplora Area Clinica',
      trust: ['Terapia Cognitivo Comportamentale', 'Approccio Integrato', 'Online & in Presenza', 'Supporto Multidisciplinare'],
      trustSection: {
        identityName: 'Dr Laura Cocozza',
        identitySubtitle: 'Studio di Psicoterapia e Psicologia Forense',
        positioning:
          'Helping people rebuild emotional balance through structured, evidence-based psychological support and forensic expertise when needed.',
        roleTitle: 'Competenza, Metodo e Cura',
        roleDetails:
          'Psicologa • Psicoterapeuta Cognitivo Comportamentale • Consulente in Psicologia Forense (CTU & CTP)',
        roleDescription:
          'Un approccio integrato clinico e forense, orientato a chiarezza, stabilità emotiva e benessere psicologico duraturo.',
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
          'Uno spazio clinico orientato all\'ascolto, alla comprensione e alla costruzione di un equilibrio psicologico sostenibile nel tempo.',
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
      therapeuticApproach: {
        eyebrow: 'Il processo terapeutico',
        title: 'Approccio terapeutico',
        subheading: 'Metodi terapeutici basati sull\'evidenza,\nintegrati con strumenti innovativi\ne approcci multidisciplinari.',
        editorial: 'Ogni percorso è costruito su metodi scientificamente validati, adattati alle esigenze individuali.',
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
            description: 'Tecnologie immersive utilizzate come supporto nei percorsi terapeutici e nella gestione di specifiche difficoltà emotive e comportamentali.',
          },
        ],
      },
      editorialQuote: {
        quote: 'La psicoterapia non consiste nel cambiare chi siamo, ma nel comprendere con maggiore chiarezza il modo in cui viviamo emozioni, relazioni ed esperienze.',
        attribution: '— Dott.ssa Laura Cocozza',
      },
      whoIsItFor: {
        eyebrow: 'Per chi è pensato',
        title: 'Percorsi costruiti attorno\nalle diverse fasi della vita\ne alle esigenze individuali',
        subtext: 'Ogni percorso terapeutico viene sviluppato considerando il contesto personale, relazionale ed emotivo di ciascuna persona.',
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
        eyebrow: 'Area Clinica',
        title: 'Un percorso terapeutico\ncostruito attorno\nalla persona',
        paragraph:
          'Approfondisci le aree di supporto,\ngli approcci terapeutici\ne le modalità di intervento\ndella pratica clinica.',
        cta: 'Esplora l’area clinica',
      },
      supportAreas: {
        eyebrow: 'Aree di supporto',
        title: 'Supporto terapeutico\nper difficoltà emotive,\nrelazionali e personali',
        subtext:
          'Ogni percorso viene adattato alle esigenze specifiche della persona, attraverso un approccio strutturato, graduale e personalizzato.',
        panels: [
          {
            key: 'anxiety',
            icon: '/brain.png',
            title: 'Ansia e gestione dello stress',
            description:
              'Percorsi di supporto dedicati alla gestione dell’ansia, dello stress emotivo, delle paure persistenti e del sovraccarico mentale.',
          },
          {
            key: 'mood',
            icon: '/self-acceptance.png',
            title: 'Difficoltà emotive e dell’umore',
            description:
              'Supporto psicologico per periodi di vulnerabilità emotiva, demotivazione, tristezza persistente e difficoltà nel mantenere equilibrio emotivo.',
          },
          {
            key: 'ocd',
            icon: '/cognitive-behavior.png',
            title: 'Pensieri intrusivi e comportamenti compulsivi',
            description:
              'Interventi orientati alla gestione di pensieri ricorrenti, compulsioni, controllo dell’ansia e rigidità cognitive.',
          },
          {
            key: 'regulation',
            icon: '/virtual-reality.png',
            title: 'Regolazione emotiva',
            description:
              'Percorsi focalizzati sullo sviluppo della consapevolezza emotiva, della gestione dello stress e dell’equilibrio psicologico quotidiano.',
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
    footer: '© Studio Laura Cocozza · Psicoterapia e Psicologia Forense',
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
    },
    home: {
      eyebrow: 'Clinical psychotherapy and forensic psychology',
      by: 'BY',
      title: 'A professional, human, and authoritative space for your wellbeing.',
      description:
        'Tailored pathways for adolescents, adults, and families, integrating clinical and forensic expertise with multidisciplinary support.',
      ctaPrimary: 'Book a consultation',
      ctaAriaLabel: 'Book a consultation',
      logoAriaLabel: 'LC monogram – back to home',
      ctaSecondary: 'Explore Clinical Area',
      trust: ['Cognitive Behavioral Therapy', 'Integrated Approach', 'Online & In-Person', 'Multidisciplinary Support'],
      trustSection: {
        identityName: 'Dr Laura Cocozza',
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
            text: 'Tailored psychological pathways based on each person’s emotional, relational, and contextual needs.',
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
      therapeuticApproach: {
        eyebrow: 'About the process',
        title: 'Therapeutic Approach',
        subheading: 'Evidence-based therapeutic methods,\nintegrated with innovative tools\nand multidisciplinary approaches.',
        editorial: 'Every pathway is built on scientifically validated methods, adapted to individual needs.',
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
      },
      whoIsItFor: {
        eyebrow: 'Who it is for',
        title: 'Pathways built around\nthe different stages of life\nand individual needs',
        subtext: 'Each therapeutic pathway is developed considering the personal, relational, and emotional context of every individual.',
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
        eyebrow: 'Clinical Area',
        title: 'A therapeutic pathway\nbuilt around\nthe person',
        paragraph:
          'Explore the support areas,\ntherapeutic approaches,\nand intervention models\nof the clinical practice.',
        cta: 'Explore the clinical area',
      },
      supportAreas: {
        eyebrow: 'Support Areas',
        title: 'Therapeutic support\nfor emotional,\nrelational, and personal challenges',
        subtext:
          'Each pathway is adapted to each person’s specific needs through a structured, gradual, and personalized therapeutic approach.',
        panels: [
          {
            key: 'anxiety',
            icon: '/brain.png',
            title: 'Anxiety and stress management',
            description:
              'Support pathways focused on anxiety, emotional stress, persistent fears, and mental overload.',
          },
          {
            key: 'mood',
            icon: '/self-acceptance.png',
            title: 'Emotional and mood difficulties',
            description:
              'Psychological support for periods of emotional vulnerability, low motivation, persistent sadness, and difficulty maintaining emotional balance.',
          },
          {
            key: 'ocd',
            icon: '/cognitive-behavior.png',
            title: 'Intrusive thoughts and compulsive behaviors',
            description:
              'Interventions focused on recurring thoughts, compulsions, anxiety management, and cognitive rigidity.',
          },
          {
            key: 'regulation',
            icon: '/virtual-reality.png',
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
    footer: '© Laura Cocozza Practice · Psychotherapy and Forensic Psychology',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
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
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
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
              aria-label="Mobile navigation"
            >
              {[
                { to: '/home', label: t.nav.home },
                { to: '/clinical', label: t.nav.clinical },
                { to: '/forensic', label: t.nav.forensic },
                { to: '/forensic/psylex', label: t.nav.psylex },
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
      <nav className="site-nav-desktop" aria-label="Main navigation">
        <div className="site-nav-frosted">
          <NavLink to="/home" end>{t.nav.home}</NavLink>
          <NavLink to="/clinical" end>{t.nav.clinical}</NavLink>
          <NavLink to="/forensic" end>{t.nav.forensic}</NavLink>
          <NavLink to="/forensic/psylex">{t.nav.psylex}</NavLink>
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
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
            staggerChildren: reduceMotion ? 0 : 0.045,
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
              : { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
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
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="landing-section" aria-label="Hero">
      {/* Painterly hero image — right side, bleeds left */}
      <div className="landing-hero-img" role="presentation" aria-hidden="true" />

      <div className="landing-inner">
        {/* Left column — primary identity text, centred within first 100 vh */}
        <motion.div
          className="landing-primary"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0.04 : 0.12, delayChildren: reduceMotion ? 0 : 0.18 } } }}
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
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0.04 : 0.1, delayChildren: reduceMotion ? 0 : 0.38 } } }}
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
            <img src="/dr-laura-cocozza-professional-headshot.png" alt={`${t.home.trustSection.identityName} professional headshot`} className="trust-intro-photo" />
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
        <div className="clinical-intro-split">
          {/* Left column — eyebrow + large editorial title */}
          <motion.div
            className="clinical-intro-left"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="clinical-intro-eyebrow">{ci.eyebrow}</span>
            <h2 className="clinical-intro-title">{ci.title}</h2>
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
            className="icon-divider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-hidden="true"
          >
            <span className="icon-divider__line icon-divider__line--left" />
            <span className="icon-divider__icon"><img src="/brain.png" alt="" className="icon-divider__image" /></span>
            <span className="icon-divider__line icon-divider__line--right" />
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
          {panels.map((panel, i) => (
            <motion.article
              key={panel.key}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EditorialQuoteStripSection({ t }) {
  const reduceMotion = useReducedMotion()
  const eq = t.home.editorialQuote

  return (
    <section className="editorial-quote-section" aria-label="Reflective quote">
      {/* Atmospheric background movement */}
      {!reduceMotion && (
        <>
          <motion.div
            className="eq-orb eq-orb--1"
            animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <motion.div
            className="eq-orb eq-orb--2"
            animate={{ x: [0, -14, 0], y: [0, 16, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
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

function SupportAreasSection({ t }) {
  const reduceMotion = useReducedMotion()
  const support = t.home.supportAreas

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
          <p className="support-areas-subtext">{support.subtext}</p>
        </motion.div>

        <div className="support-areas-panels">
          {support.panels.map((panel, index) => (
            <motion.article
              key={panel.key}
              className={`support-area-panel support-area-panel--${panel.key}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24, y: 22 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              whileHover={reduceMotion ? {} : { y: -4, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
            >
              <div className="support-area-icon-env" aria-hidden="true">
                <img src={panel.icon} alt="" className="support-area-icon-bg" />
                <span className="support-area-light support-area-light--1" />
                <span className="support-area-light support-area-light--2" />
                <span className="support-area-line support-area-line--1" />
                <span className="support-area-line support-area-line--2" />
              </div>

              <div className="support-area-content">
                <h3 className="support-area-title">{panel.title}</h3>
                <p className="support-area-description">{panel.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
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
      </div>
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

function Clinical({ t }) {
  return (
    <Section
      title={t.pages.clinicalHero}
      subtitle="Warm, safe, and elegant pathways for adolescents, adults, families, and couples."
      items={[
        { icon: Brain, title: 'Therapeutic Approach', text: 'CBT, ACT, VR integration, personalized treatments.', to: '/clinical/approach' },
        { icon: Users, title: 'Who It Is For', text: 'Adolescents, adults, families, and relationship support.' },
        { icon: HeartHandshake, title: 'Individual Psychotherapy', text: 'Anxiety, mood, OCD, emotional regulation, stress management.', to: '/clinical/individual-psychotherapy' },
        { icon: Sparkles, title: 'Couple & Family Support', text: 'Counseling, separation support, parenting and consultations.', to: '/clinical/family-support' },
        { icon: Stethoscope, title: 'Network-Based Work', text: 'Coordination with psychiatrists, child psychotherapists, and attorneys.', to: '/clinical/network' },
      ]}
    />
  )
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

function ClinicalFamily() {
  return (
    <Section
      title="Couple & Family Support"
      items={[
        { icon: Users, title: 'Couple Counseling', text: 'Conflict de-escalation and relational restructuring.' },
        { icon: HeartHandshake, title: 'Separation Support', text: 'Emotion-focused guidance in transitions.' },
        { icon: BookOpen, title: 'Parenting Support', text: 'Practical strategies to strengthen parenting alliances.' },
        { icon: Sparkles, title: 'Family Consultations', text: 'Systemic perspective and shared goals.' },
      ]}
    />
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

function Forensic({ t }) {
  return (
    <Section
      title={t.pages.forensicHero}
      subtitle="Structured, credible, legally aligned psychological expertise."
      items={[
        { icon: Scale, title: 'Forensic Services', text: 'CTU, CTP, family proceedings, parenting coordination.', to: '/forensic/services' },
        { icon: Landmark, title: 'Court & Legal Context', text: 'Family law, civil proceedings, expert psychological consultancy.' },
        { icon: BriefcaseBusiness, title: 'PsyLex Integration', text: 'A collaborative legal-psychology ecosystem.', to: '/forensic/psylex' },
        { icon: Phone, title: 'Forensic Contact', text: 'Dedicated request channel for legal professionals and institutions.', to: '/contact' },
      ]}
    />
  )
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
  return (
    <Section
      title="PsyLex Preview"
      subtitle="A future standalone platform connecting psychology and legal expertise."
      items={[
        { icon: BriefcaseBusiness, title: 'Mission', text: 'Bridge mental health and legal practice with rigor and clarity.' },
        { icon: Scale, title: 'Legal Psychology Network', text: 'Collaborations with attorneys and forensic professionals.' },
        { icon: Sparkles, title: 'Platform Preview', text: 'A premium interface for multidisciplinary workflow and referrals.' },
        { icon: ArrowRight, title: 'External Redirect CTA', text: 'Coming soon: dedicated PsyLex platform experience.' },
      ]}
    />
  )
}

function About({ t }) {
  return (
    <Section
      title={t.pages.aboutHero}
      items={[
        { icon: Sparkles, title: 'Biography', text: 'Professional journey grounded in clinical care and forensic competence.' },
        { icon: Brain, title: 'Professional Philosophy', text: 'Trust, readability, and structured transformation.' },
        { icon: BookOpen, title: 'Methodology', text: 'Evidence-based interventions with personalized adaptation.' },
        { icon: BriefcaseBusiness, title: 'Academic and Professional Background', text: 'Continuous education and multidisciplinary practice.' },
        { icon: Scale, title: 'Clinical + Forensic Positioning', text: 'A coherent voice across wellbeing and legal settings.' },
      ]}
    />
  )
}

function Contact({ t }) {
  return (
    <Section
      title={t.pages.contactHero}
      items={[
        { icon: Phone, title: 'Phone', text: 'Available on request · Disponibile su richiesta' },
        { icon: BookOpen, title: 'Email', text: 'info@lauracocozza.it · studio@lauracocozza.it' },
        { icon: Landmark, title: 'Office Address', text: 'Rome, Italy · by appointment' },
        { icon: Users, title: 'Online Consultations', text: 'Secure sessions for national and international clients.' },
      ]}
    />
  )
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <p>{t.footer}</p>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/clinical">Clinical</Link>
        <Link to="/forensic">Forensic</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
              <Route path="/clinical" element={<PageWrapper t={t}><Clinical t={t} /></PageWrapper>} />
              <Route path="/clinical/approach" element={<PageWrapper t={t}><ClinicalApproach /></PageWrapper>} />
              <Route path="/clinical/individual-psychotherapy" element={<PageWrapper t={t}><ClinicalIndividual /></PageWrapper>} />
              <Route path="/clinical/family-support" element={<PageWrapper t={t}><ClinicalFamily /></PageWrapper>} />
              <Route path="/clinical/network" element={<PageWrapper t={t}><ClinicalNetwork /></PageWrapper>} />
              <Route path="/forensic" element={<PageWrapper t={t}><Forensic t={t} /></PageWrapper>} />
              <Route path="/forensic/services" element={<PageWrapper t={t}><ForensicServices /></PageWrapper>} />
              <Route path="/forensic/psylex" element={<PageWrapper t={t}><PsyLexPreview /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper t={t}><About t={t} /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper t={t}><Contact t={t} /></PageWrapper>} />
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
