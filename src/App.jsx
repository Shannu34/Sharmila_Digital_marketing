import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, CheckCircle2, Mail, MapPin, Linkedin, Download, Search, Megaphone, BarChart3, PenTool, Share2, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './components/SectionHeading'
import { profile, services, skills, experience, certifications, projects, blogTopics, testimonials } from './data/portfolio'

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Experience', '#experience'], ['Insights', '#insights'], ['Contact', '#contact']]
  const closeMenu = () => setMenuOpen(false)

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
          <p className="hero-lede">I'm <strong>{profile.name}</strong>, a {profile.title.toLowerCase()} focused on thoughtful strategy, meaningful content and measurable growth.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#about">More about me <ArrowRight size={16} /></a></div>
          <div className="hero-footnote"><span>01 / STRATEGY</span><span>02 / EXECUTION</span><span>03 / OPTIMISATION</span></div>
        </div>
        <div className="hero-art">
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

      <section className="work-section section-wrap" id="work">
        <div className="section-kicker">03 — SELECTED WORK</div>
        <SectionHeading eyebrow="REAL PROJECT CASE STUDIES" title="The brief. The work. The evidence." description="A clear breakdown of project context, your contribution, execution and outcomes. One experience-based case study is included now; additional case studies are clearly marked until their details are confirmed." />
        <div className="case-study-list">{projects.map((p, i) => <article className={p.featured ? 'case-study featured-case' : 'case-study'} key={p.slug}>
          <div className="case-visual"><div className="case-visual-top"><span>CASE STUDY / 0{i + 1}</span><span>{p.category}</span></div><div className="case-visual-mark">{String(i + 1).padStart(2, '0')}</div><div className="case-visual-bottom">{p.client}</div></div>
          <div className="case-content">
            <div className="case-meta"><span className="case-status">{p.status}</span><span>{p.period}</span></div>
            <h3>{p.name}</h3><p className="case-summary">{p.summary}</p>
            <div className="case-facts">
              <div><b>CONTEXT / CHALLENGE</b><p>{p.challenge}</p></div>
              <div><b>MY ROLE</b><p>{p.role}</p></div>
              <div><b>EXECUTION</b><ul>{p.execution.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div><b>OUTCOME & EVIDENCE</b><p>{p.outcome}</p><p className="case-evidence">{p.evidence}</p></div>
            </div>
            <div className="case-tools"><b>TOOLS / PLATFORMS</b><div>{p.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>
            {p.metrics.length > 0 && <div className="case-metrics">{p.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
          </div>
        </article>)}</div>
        <p className="case-note">Portfolio integrity note: results and metrics will be published only after they are verified and approved for sharing.</p>
      </section>

      <section className="skills-section"><div className="section-wrap skills-grid"><div><div className="section-kicker light-kicker">04 — TOOLKIT</div><SectionHeading light eyebrow="SKILLS & PLATFORMS" title="The tools behind the thinking." description="A working toolkit across digital marketing, creative production, web and analytics. Practical proficiency can be added to each skill as it is verified." /></div><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></section>

      <section className="experience-section section-wrap" id="experience"><div className="section-kicker">05 — EXPERIENCE</div><SectionHeading eyebrow="CAREER JOURNEY" title="Experience across digital and business work." description="Selected experience, with titles and dates to be confirmed before public launch." /><div className="timeline">{experience.map((e, i) => <div className="timeline-item" key={e.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-meta">{e.period}</div><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.description}</p></div></div>)}</div><div className="cert-block"><div><span className="eyebrow">CONTINUOUS LEARNING</span><h3>Certifications & courses</h3></div><div className="cert-list">{certifications.map(c => <div key={c}><CheckCircle2 size={16} />{c}</div>)}</div></div></section>

      <section className="insights-section" id="insights"><div className="section-wrap"><div className="section-kicker">06 — INSIGHTS</div><SectionHeading eyebrow="NOTES FROM THE FIELD" title="Ideas worth sharing." description="An editorial space for practical marketing explainers, lessons and observations." /><div className="blog-grid">{blogTopics.map((b, i) => <article className="blog-card" key={b.title}><div className="blog-top"><span>{b.category}</span><span>0{i + 1}</span></div><h3>{b.title}</h3><p>{b.description}</p><span className="coming-soon">ARTICLE COMING SOON <ArrowUpRight size={14} /></span></article>)}</div></div></section>

      {testimonials.length > 0 && <section className="section-wrap testimonial-section"><SectionHeading eyebrow="KIND WORDS" title="What collaborators say." /><div className="testimonial-grid">{testimonials.map(t => <blockquote key={t.name}><p>“{t.quote}”</p><cite>{t.name} · {t.role}</cite></blockquote>)}</div></section>}

      <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div><div className="section-kicker light-kicker">07 — GET IN TOUCH</div><span className="eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</span><h2>Let's make<br /><em>something meaningful.</em></h2><p>Open to digital marketing roles, collaborations and freelance projects.</p></div><div className="contact-card"><div className="contact-card-label">START A CONVERSATION</div>{profile.email ? <a href={`mailto:${profile.email}`} className="contact-row"><Mail />{profile.email}<ArrowUpRight /></a> : <div className="contact-row muted-row"><Mail />Add your professional email<ArrowUpRight /></div>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row"><Linkedin />LinkedIn profile<ArrowUpRight /></a> : <div className="contact-row muted-row"><Linkedin />Add your LinkedIn URL<ArrowUpRight /></div>}<div className="contact-row"><MapPin />{profile.location}</div><a href={profile.resume} className="btn btn-white"><Download size={17} /> Download resume</a><small>Resume download will work after adding public/resume.pdf.</small></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SHARMILA<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Sharmila Kethavath. Built with intent.</span><a href="#home">Back to top ↑</a></footer>
  </div>
}

export default App
