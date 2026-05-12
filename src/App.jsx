import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
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
  Users,
} from 'lucide-react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

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
    },
    home: {
      eyebrow: 'Psicoterapia clinica e psicologia forense',
      title: 'Uno spazio professionale, umano e autorevole per il tuo equilibrio.',
      description:
        'Percorsi personalizzati per adolescenti, adulti e famiglie, con integrazione clinica-forense e una rete multidisciplinare dedicata al benessere.',
      ctaPrimary: 'Prenota una consulenza',
      ctaSecondary: 'Esplora Area Clinica',
      trust: ['Terapia Cognitivo Comportamentale', 'Approccio Integrato', 'Online & in Presenza', 'Supporto Multidisciplinare'],
    },
    sections: {
      clinicalPreview: 'Area Clinica',
      forensicPreview: 'Area Forense',
      psylexPreview: 'PsyLex Preview',
      aboutPreview: 'La Dott.ssa Laura Cocozza',
      philosophy: 'Filosofia Terapeutica',
      process: 'Come Funziona',
      network: 'Rete e Collaborazioni',
      testimonials: '“Un approccio capace di coniugare ascolto, metodo e direzione concreta.”',
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
    },
    home: {
      eyebrow: 'Clinical psychotherapy and forensic psychology',
      title: 'A professional, human, and authoritative space for your wellbeing.',
      description:
        'Tailored pathways for adolescents, adults, and families, integrating clinical and forensic expertise with multidisciplinary support.',
      ctaPrimary: 'Book a consultation',
      ctaSecondary: 'Explore Clinical Area',
      trust: ['Cognitive Behavioral Therapy', 'Integrated Approach', 'Online & In-Person', 'Multidisciplinary Support'],
    },
    sections: {
      clinicalPreview: 'Clinical Area',
      forensicPreview: 'Forensic Area',
      psylexPreview: 'PsyLex Preview',
      aboutPreview: 'About Laura Cocozza',
      philosophy: 'Therapeutic Philosophy',
      process: 'How It Works',
      network: 'Network & Collaborations',
      testimonials: '“A method that combines empathic listening, structure, and practical direction.”',
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

const PRELOADER_DURATION_MS = 2400
const ROUTE_PRELOADER_DURATION_MS = 1700

function LibraWatermark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="libra-icon">
      <path d="M25 34h70M60 34v52M44 86h32M22 48h20l-10 18-10-18Zm56 0h20L88 66 78 48Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Preloader({ visible, mode, cycle }) {
  const reduceMotion = useReducedMotion()
  const drawDuration = reduceMotion ? 0.6 : mode === 'route' ? 1.55 : 2.15
  const bgDuration = reduceMotion ? 0.8 : mode === 'route' ? 1.7 : 2.35

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={`preloader-${mode}-${cycle}`}
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.3 : 0.7, ease: [0.4, 0, 0.2, 1], delay: reduceMotion ? 0.05 : 0.16 } }}
        >
          <motion.div
            className="preloader-bg"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: [1, 1.08, 1.08], filter: ['blur(8px)', 'blur(3px)', 'blur(3px)'] }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.25 : 0.45, delay: reduceMotion ? 0.02 : 0.16 } }}
            transition={{ duration: bgDuration, ease: [0.33, 1, 0.68, 1] }}
          >
            <LibraWatermark />
          </motion.div>

          <motion.div
            className="lc-wrap"
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: [0.82, 1, 0.96], y: [4, 0, -1], filter: ['blur(5px)', 'blur(0px)', 'blur(0px)'] }}
            transition={{ duration: drawDuration, ease: [0.22, 1, 0.36, 1] }}
            exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.2 : 0.36, ease: [0.4, 0, 1, 1] } }}
          >
            <motion.svg viewBox="0 0 220 220" className="lc-mark" aria-label="Monogramma Laura Cocozza">
              <motion.path
                className="lc-mark-stroke"
                d="M150 66a56 56 0 1 0 0 112"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: 352, strokeDashoffset: 352 }}
                animate={{ strokeDasharray: 352, strokeDashoffset: 0 }}
                transition={{ duration: drawDuration, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                className="lc-mark-stroke"
                d="M90 42v108h50"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: 320, strokeDashoffset: 320 }}
                animate={{ strokeDasharray: 320, strokeDashoffset: 0 }}
                transition={{ duration: reduceMotion ? drawDuration : drawDuration * 0.88, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.08 }}
              />
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
                  height="220"
                  fill="url(#maskSweep)"
                  animate={{ x: [0, 330] }}
                  transition={{ duration: drawDuration, ease: [0.35, 0, 0.65, 1], delay: 0.15 }}
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

function LanguageSwitch({ lang, setLang }) {
  return (
    <button type="button" className="lang-switch" onClick={() => setLang(lang === 'it' ? 'en' : 'it')}>
      {lang === 'it' ? 'EN' : 'IT'}
    </button>
  )
}

function Header({ t, lang, setLang }) {
  return (
    <header className="topbar glass">
      <Link to="/home" className="brand">
        <span>{t.brand}</span>
        <strong>{t.doctor}</strong>
      </Link>
      <nav>
        <Link to="/home">{t.nav.home}</Link>
        <Link to="/clinical">{t.nav.clinical}</Link>
        <Link to="/forensic">{t.nav.forensic}</Link>
        <Link to="/forensic/psylex">{t.nav.psylex}</Link>
        <Link to="/about">{t.nav.about}</Link>
        <Link to="/contact">{t.nav.contact}</Link>
      </nav>
      <div className="actions">
        <LanguageSwitch lang={lang} setLang={setLang} />
        <Link to="/contact" className="btn btn-primary">{t.nav.book}</Link>
      </div>
    </header>
  )
}

function Hero({ t }) {
  const reduceMotion = useReducedMotion()
  const heroStagger = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.3 : 0.62,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="hero-section">
      <motion.div
        className="hero-copy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reduceMotion ? 0.04 : 0.09,
              delayChildren: reduceMotion ? 0 : 0.06,
            },
          },
        }}
      >
        <motion.p className="eyebrow" variants={heroStagger}>{t.home.eyebrow}</motion.p>
        <motion.h1 variants={heroStagger}>{t.home.title}</motion.h1>
        <motion.p className="lede" variants={heroStagger}>{t.home.description}</motion.p>
        <motion.div className="cta-row" variants={heroStagger}>
          <Link className="btn btn-primary" to="/contact">{t.home.ctaPrimary}</Link>
          <Link className="btn btn-ghost" to="/clinical">{t.home.ctaSecondary}</Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-visual card"
        initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0.3 : 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="hero-visual-mask"
          initial={{ clipPath: reduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.08 }}
        >
          <motion.div className="hero-orb" animate={{ y: reduceMotion ? 0 : [-4, -18, -4] }} transition={{ duration: reduceMotion ? 0.01 : 4, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }} />
          <div className="hero-points">
            <p><ShieldCheck size={16} />Clinical and forensic integration</p>
            <p><HeartHandshake size={16} />Empathic and evidence-based care</p>
            <p><Landmark size={16} />Court-aligned professional support</p>
          </div>
        </motion.div>
      </motion.div>
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
  const previews = useMemo(
    () => [
      { icon: Brain, title: t.sections.clinicalPreview, text: 'CBT, ACT, VR support, individual and family pathways.', to: '/clinical' },
      { icon: Scale, title: t.sections.forensicPreview, text: 'CTU, CTP, family proceedings and legal technical support.', to: '/forensic' },
      { icon: BriefcaseBusiness, title: t.sections.psylexPreview, text: 'A legal-psychology collaboration network and platform vision.', to: '/forensic/psylex' },
      { icon: Sparkles, title: t.sections.aboutPreview, text: 'A trust-oriented, warm, and rigorous therapeutic identity.', to: '/about' },
    ],
    [t],
  )

  return (
    <>
      <Hero t={t} />

      <section className="trust-bar glass">
        {t.home.trust.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>

      <Section title={t.sections.clinicalPreview} items={previews.slice(0, 2)} />
      <Section title={t.sections.psylexPreview} items={previews.slice(2, 4)} />
      <Section
        title={t.sections.philosophy}
        items={[
          { icon: Brain, title: 'CBT', text: 'Structured cognitive work for practical change.' },
          { icon: Sparkles, title: 'ACT', text: 'Acceptance, values, and psychological flexibility.' },
          { icon: Stethoscope, title: 'Virtual Reality Support', text: 'Innovative protocols for graded exposure and emotional regulation.' },
          { icon: Users, title: 'Integrated Care', text: 'Shared planning with psychiatrists, neuropsychiatrists, and legal professionals.' },
        ]}
      />
      <Section
        title={t.sections.process}
        items={[
          { icon: Phone, title: 'First Contact', text: 'An initial listening phase with clear objectives.' },
          { icon: BookOpen, title: 'Evaluation', text: 'A clinical or forensic assessment tailored to context.' },
          { icon: HeartHandshake, title: 'Personalized Pathway', text: 'A bespoke plan balancing evidence and person-centered care.' },
          { icon: ShieldCheck, title: 'Ongoing Support', text: 'Progress review, adaptations, and continuity.' },
        ]}
      />

      <blockquote className="quote">{t.sections.testimonials}</blockquote>
      <section className="contact-strip card">
        <p>{t.sections.contactCta}</p>
        <Link to="/contact" className="btn btn-primary">{t.nav.book}</Link>
      </section>
    </>
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
  const [preloaderVisible, setPreloaderVisible] = useState(true)
  const [preloaderMode, setPreloaderMode] = useState('initial')
  const [preloaderCycle, setPreloaderCycle] = useState(0)
  const firstRouteRender = useRef(true)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const t = content[lang]

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderVisible(false), reduceMotion ? 500 : PRELOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  useEffect(() => {
    if (firstRouteRender.current) {
      firstRouteRender.current = false
      return
    }
    setPreloaderMode('route')
    setPreloaderCycle((prev) => prev + 1)
    setPreloaderVisible(true)
    const timer = setTimeout(() => setPreloaderVisible(false), reduceMotion ? 280 : ROUTE_PRELOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [location.pathname, reduceMotion])

  return (
    <>
      <Preloader visible={preloaderVisible} mode={preloaderMode} cycle={preloaderCycle} />
      <motion.div
        className="app-shell app-content"
        initial={false}
        animate={preloaderVisible ? 'covered' : 'visible'}
        variants={{
          covered: {
            opacity: 0,
            y: reduceMotion ? 0 : 10,
            filter: reduceMotion ? 'none' : 'blur(3px)',
            transition: { duration: reduceMotion ? 0.16 : 0.28, ease: [0.4, 0, 1, 1] },
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: reduceMotion ? 0.28 : 0.72, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.2 },
          },
        }}
      >
        <Header t={t} lang={lang} setLang={setLang} />
        <main>
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
                <Route path="/clinical/approach" element={<ClinicalApproach />} />
                <Route path="/clinical/individual-psychotherapy" element={<ClinicalIndividual />} />
                <Route path="/clinical/family-support" element={<ClinicalFamily />} />
                <Route path="/clinical/network" element={<ClinicalNetwork />} />
                <Route path="/forensic" element={<Forensic t={t} />} />
                <Route path="/forensic/services" element={<ForensicServices />} />
                <Route path="/forensic/psylex" element={<PsyLexPreview />} />
                <Route path="/about" element={<About t={t} />} />
                <Route path="/contact" element={<Contact t={t} />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer t={t} />
      </motion.div>
    </>
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
