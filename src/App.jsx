import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, CheckCircle2, Mail, MapPin, Linkedin, Search, Megaphone, BarChart3, PenTool, Share2, Menu, X, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from './components/SectionHeading'
import { profile, services, skillGroups, processSteps, experience, certifications, projects, blogTopics, testimonials } from './data/portfolio'

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } }

function CaseStudyPage({ project, onBack }) {
  useEffect(() => { document.title = project.name + ' | Sharmila Kethavath'; return () => { document.title = 'Sharmila Kethavath | Digital Marketing Strategist' } }, [project])
  return <main className="case-page">
    <section className="case-page-hero">
      <img src={project.image} alt={project.name} />
      <div className="case-page-shade" />
      <div className="case-page-hero-content">
        <button className="back-link" onClick={onBack}>← Back to portfolio</button>
        <span>{project.category} · CASE STUDY</span>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </div>
    </section>
    <section className="case-page-body">
      <div className="case-page-meta"><div><small>CLIENT / ORGANISATION</small><strong>{project.client}</strong></div><div><small>PERIOD</small><strong>{project.period}</strong></div><div><small>PROJECT STATUS</small><strong>{project.status}</strong></div></div>
      <div className="case-page-grid">
        <article><span className="eyebrow">01 / THE CHALLENGE</span><h2>Understanding the brief</h2><p>{project.challenge}</p></article>
        <article><span className="eyebrow">02 / MY CONTRIBUTION</span><h2>My role</h2><p>{project.role}</p></article>
        <article><span className="eyebrow">03 / EXECUTION</span><h2>How the work moved forward</h2><ul>{project.execution.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article><span className="eyebrow">04 / OUTCOME</span><h2>What came out of it</h2><p>{project.outcome}</p><p className="case-evidence-note">{project.evidence}</p></article>
      </div>
      <div className="case-page-tools"><span className="eyebrow">TOOLS & PLATFORMS</span><div>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>
      <div className="case-page-cta"><div><span className="eyebrow">LET'S CONNECT</span><h2>Have a project in mind?</h2><p>Let's discuss how thoughtful digital marketing can support your goals.</p></div><a className="btn btn-primary" href="mailto:kethavathsharmila@gmail.com">Start a conversation ↗</a></div>
    </section>
  </main>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')
  const [activeCase, setActiveCase] = useState(() => projects.find(p => window.location.hash === '#case/' + p.slug)?.slug || '')
  useEffect(() => {
    const syncRoute = () => setActiveCase(projects.find(p => window.location.hash === '#case/' + p.slug)?.slug || '')
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])
  const openCase = (slug) => { window.location.hash = 'case/' + slug; setActiveCase(slug); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const backToPortfolio = () => { window.location.hash = 'work'; setActiveCase(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const selectedCase = projects.find(p => p.slug === activeCase)
  const filters = ['All', 'Digital Experience', 'Social Media & Content', 'Creative Content']
  const visibleProjects = projectFilter === 'All' ? projects : projects.filter(project => project.category === projectFilter)
  const nav = [['About', '#about'], ['Services', '#services'], ['Process', '#process'], ['Work', '#work'], ['Experience', '#experience'], ['Insights', '#insights'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  if (selectedCase) return <div className="site-shell detail-shell"><header className="site-header"><a className="brand" href="/#home"><span className="brand-mark">S</span><span>SHARMILA<span className="brand-dot">.</span></span></a><a className="header-cta" href="/#contact">Let's talk <ArrowUpRight size={16} /></a></header><CaseStudyPage project={selectedCase} onBack={backToPortfolio} /><footer className="footer"><a className="brand" href="/#home"><span className="brand-mark">S</span><span>SHARMILA<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Sharmila Kethavath</span><a href="/#home">Back to top ↑</a></footer></div>
  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Sharmila Kethavath home"><span className="brand-mark">S</span><span>SHARMILA<span className="brand-dot">.</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES <span className="availability-divider">/</span> HYDERABAD, INDIA</div>
          <motion.h1 initial="hidden" animate="show" variants={fade}>Building digital<br /><span>presence</span> with<br />purpose.</motion.h1>
          <p className="hero-lede">I'm <strong>{profile.name}</strong>, a {profile.title.toLowerCase()} bringing together search, social content, creative execution and analytics to build purposeful digital experiences.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#about">More about me <ArrowRight size={16} /></a><a className="hero-social" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div>
          <div className="hero-footnote"><span>01 / STRATEGY</span><span>02 / EXECUTION</span><span>03 / OPTIMISATION</span></div>
        </div>
        <div className="hero-art"><img className="hero-photo" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85" alt="Colourful creative marketing workspace" />
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card art-main"><div className="art-top"><span>MARKETING<br />MINDSET</span><span className="art-index">01—06</span></div><div className="art-shape"><div className="shape-ring ring-a" /><div className="shape-ring ring-b" /><div className="shape-core"><Sparkles size={31} /></div></div><div className="art-bottom"><span>INSIGHT → ACTION</span><span>GROW WITH INTENT</span></div></div>
          <div className="float-card float-top"><Search size={17} /><span>Search visibility</span><b>SEO</b></div>
          <div className="float-card float-bottom"><BarChart3 size={17} /><span>Performance</span><b>Growth</b></div>
          <div className="hero-stamp">STRATEGY<br />MEETS<br />CREATIVITY</div>
        </div>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span>FOCUSED ON</span><b>SEARCH</b><i /><b>CONTENT</b><i /><b>CAMPAIGNS</b><i /><b>ANALYTICS</b><i /><b>GROWTH</b></div></section>

      <section className="section-wrap about-section" id="about">
        <div className="section-kicker">01 — ABOUT</div>
        <div className="about-grid"><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity-led. Strategy-minded. Always learning." description={profile.about} /><div className="about-note"><div className="note-icon"><Sparkles /></div><h3>Good marketing starts with understanding people.</h3><p>I value clear communication, useful creative work and decisions informed by evidence. My approach connects audience needs with business goals.</p><a href="#contact" className="inline-link">Let's connect <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap"><div className="section-kicker">02 — WHAT I DO</div><SectionHeading eyebrow="AREAS OF FOCUS" title="Strategy that connects every touchpoint." description="A practical mix of creative thinking, audience understanding and performance measurement." /><div className="service-grid">{services.map((s, i) => { const icons = [Search, Share2, Megaphone, BarChart3, PenTool, CheckCircle2]; const Icon = icons[i]; return <motion.article className="service-card" key={s.title} whileHover={{ y: -5 }}><div className="service-top"><span>0{i + 1}</span><Icon size={22} /></div><h3>{s.title}</h3><p>{s.description}</p><span className="service-arrow"><ArrowUpRight size={18} /></span></motion.article> })}</div></div></section>

      <section className="process-section" id="process"><div className="section-wrap"><div className="section-kicker">03 — MY APPROACH</div><SectionHeading eyebrow="FROM INSIGHT TO IMPACT" title="A clear process. Thoughtful execution." description="A practical workflow that keeps marketing connected to the audience, the business objective and the evidence." /><div className="process-grid">{processSteps.map((step, i) => <motion.article className="process-card" key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .08 }}><span>{step.number}</span><div className="process-icon">{[<Search />, <PenTool />, <Megaphone />, <BarChart3 />][i]}</div><h3>{step.title}</h3><p>{step.description}</p></motion.article>)}</div></div></section>

      <section className="work-section section-wrap" id="work">
        <div className="section-kicker">03 — SELECTED WORK</div>
        <SectionHeading eyebrow="REAL PROJECT CASE STUDIES" title="The brief. The work. The evidence." description="Explore experience-based work, a self-initiated social content project and creative promotional concepts. Each page separates completed work from outcomes that still need verified evidence." /><div className="project-filters" aria-label="Filter projects">{filters.map(filter => <button key={filter} className={projectFilter === filter ? "filter-chip active" : "filter-chip"} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div>
        <div className="case-study-list">{visibleProjects.map((p, i) => <article className={p.featured ? 'case-study featured-case' : 'case-study'} key={p.slug}>
          <div className="case-visual"><img className="case-card-image" src={p.image} alt="" loading="lazy" /><div className="case-image-overlay" /><div className="case-visual-top"><span>CASE STUDY / 0{i + 1}</span><span>{p.category}</span></div><div className="case-visual-mark">{String(i + 1).padStart(2, '0')}</div><div className="case-visual-bottom">{p.client}</div></div>
          <div className="case-content">
            <div className="case-meta"><span className="case-status">{p.status}</span><span>{p.period}</span></div>
            <h3>{p.name}</h3><p className="case-summary">{p.summary}</p>
            <div className="case-facts">
              <div><b>CONTEXT / CHALLENGE</b><p>{p.challenge}</p></div>
              <div><b>MY ROLE</b><p>{p.role}</p></div>
              <div><b>EXECUTION</b><ul>{p.execution.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div><b>OUTCOME & EVIDENCE</b><p>{p.outcome}</p><p className="case-evidence">{p.evidence}</p></div>
            </div>
            <div className="case-tools"><b>TOOLS / PLATFORMS</b><div>{p.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div><button className="case-open-link" onClick={() => openCase(p.slug)}>Explore full case study <ArrowUpRight size={16} /></button>
            {p.metrics.length > 0 && <div className="case-metrics">{p.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
          </div>
        </article>)}</div>
        <p className="case-note">Portfolio integrity note: results and metrics will be published only after they are verified and approved for sharing.</p>
      </section>

      <section className="skills-section"><div className="section-wrap"><div className="section-kicker light-kicker">05 — TOOLKIT</div><SectionHeading light eyebrow="SKILLS & PLATFORMS" title="A versatile digital toolkit." description="Marketing, creative and analytics skills that help connect strategy with execution. Platform proficiency can be discussed in detail during an interview." /><div className="skill-groups">{skillGroups.map((group, i) => <article className={"skill-group " + group.color} key={group.title}><span className="skill-group-index">0{i + 1}</span><h3>{group.title}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section className="experience-section section-wrap" id="experience"><div className="section-kicker">06 — EXPERIENCE</div><SectionHeading eyebrow="CAREER JOURNEY" title="Experience across digital and business work." description="Selected experience, with titles and dates to be confirmed before public launch." /><div className="timeline">{experience.map((e, i) => <div className="timeline-item" key={e.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-meta">{e.period}</div><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.description}</p></div></div>)}</div><div className="cert-block"><div><span className="eyebrow">CONTINUOUS LEARNING</span><h3>Certifications & courses</h3></div><div className="cert-list">{certifications.map(c => <div key={c}><CheckCircle2 size={16} />{c}</div>)}</div></div></section>

      <section className="insights-section" id="insights"><div className="section-wrap"><div className="section-kicker">07 — INSIGHTS</div><SectionHeading eyebrow="NOTES FROM THE FIELD" title="Ideas worth sharing." description="An editorial space for practical marketing explainers, lessons and observations." /><div className="blog-grid">{blogTopics.map((b, i) => <article className="blog-card" key={b.title}><div className="blog-top"><span>{b.category}</span><span>0{i + 1}</span></div><h3>{b.title}</h3><p>{b.description}</p><span className="coming-soon">ARTICLE COMING SOON <ArrowUpRight size={14} /></span></article>)}</div></div></section>

      {testimonials.length > 0 && <section className="section-wrap testimonial-section"><SectionHeading eyebrow="KIND WORDS" title="What collaborators say." /><div className="testimonial-grid">{testimonials.map(t => <blockquote key={t.name}><p>“{t.quote}”</p><cite>{t.name} · {t.role}</cite></blockquote>)}</div></section>}

      <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div><div className="section-kicker light-kicker">08 — GET IN TOUCH</div><span className="eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</span><h2>Let's make<br /><em>something meaningful.</em></h2><p>Open to digital marketing roles, collaborations and freelance projects.</p></div><div className="contact-card"><div className="contact-card-label">START A CONVERSATION</div>{profile.email ? <a href={`mailto:${profile.email}`} className="contact-row"><Mail />{profile.email}<ArrowUpRight /></a> : <div className="contact-row muted-row"><Mail />Add your professional email<ArrowUpRight /></div>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row"><Linkedin />View LinkedIn profile<ArrowUpRight /></a> : null}<div className="contact-row"><MapPin />{profile.location}</div><a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-white"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a><small>For a resume copy or detailed project discussion, please get in touch by email.</small></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SHARMILA<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Sharmila Kethavath. Built with intent.</span><a href="#home">Back to top ↑</a></footer>
  </div>
}

export default App
