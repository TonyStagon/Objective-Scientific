import { FormEvent, useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
  Youtube,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/8770722/pexels-photo-8770722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const detailImage = 'https://images.pexels.com/photos/8442096/pexels-photo-8442096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const services = [
  {
    icon: RadiationIcon,
    number: '01',
    title: 'Nuclear medicine',
    text: 'Practical guidance and specialist training for safer, smarter imaging teams.',
  },
  {
    icon: FlaskConical,
    number: '02',
    title: 'Radiopharmacy',
    text: 'Operational support that helps your facility build reliable production workflows.',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Medical technology',
    text: 'Field support and maintenance expertise for the equipment your people trust.',
  },
];

const capabilities = ['Technical operations', 'Research support', 'Workforce development', 'Equipment advisory'];

function RadiationIcon({ size = 24 }: { size?: number }) {
  return <Atom size={size} strokeWidth={1.7} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span><Sparkles size={14} /> Advancing healthcare through practical science.</span>
          <a href="#contact">Start a conversation <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Objective Scientific home">
            <span className="brand-mark"><Atom size={24} /></span>
            <span className="brand-name">objective<span>scientific</span></span>
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#services" onClick={closeMenu}>Services <ChevronDown size={15} /></a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a consultation <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow light"><span /> Science with purpose</p>
              <h1>Better science.<br /><em>Better care.</em></h1>
              <p className="hero-text">We help healthcare teams turn complex scientific challenges into confident, measurable action.</p>
              <div className="hero-actions">
                <a className="button button-coral" href="#services">Explore our services <ArrowRight size={17} /></a>
                <a className="play-link" href="#approach"><span className="play-button"><Play size={14} fill="currentColor" /></span> See how we work</a>
              </div>
            </div>
            <div className="hero-stat-card">
              <p className="card-label">Our focus</p>
              <strong>Making specialist<br />knowledge useful.</strong>
              <div className="card-line" />
              <p>For the people, systems and communities that healthcare depends on.</p>
            </div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <p>Trusted thinking for ambitious teams</p>
            <div className="trust-items"><span><ShieldCheck size={17} /> Evidence-led</span><span><Activity size={17} /> Outcomes-focused</span><span><Users size={17} /> People-first</span></div>
          </div>
        </section>

        <section className="about-section section-padding" id="about">
          <div className="container about-grid">
            <div className="section-intro">
              <p className="eyebrow"><span /> Who we are</p>
              <h2>Making a complex world <strong>easier to navigate.</strong></h2>
              <p className="muted-copy">Objective Scientific is a South African technical consultancy helping healthcare organisations build capability, improve performance and move innovation forward.</p>
              <a className="text-link" href="#approach">Discover our approach <ArrowUpRight size={17} /></a>
            </div>
            <div className="about-visual">
              <div className="image-frame"><img src={detailImage} alt="Scientist using a microscope in a modern laboratory" /></div>
              <div className="floating-note"><span className="note-icon"><Microscope size={19} /></span><span><b>Deep expertise.</b><small>Practical perspective.</small></span></div>
              <div className="years-badge"><strong>01</strong><span>mission<br />first</span></div>
            </div>
          </div>
        </section>

        <section className="services-section section-padding" id="services">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow"><span /> What we do</p><h2>Expertise that moves<br /><strong>your work forward.</strong></h2></div>
              <p className="heading-side-copy">From day-to-day operations to long-term strategy, we bring the right blend of technical depth and human understanding.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, text }) => (
                <article className="service-card" key={number}>
                  <div className="service-top"><span className="service-icon"><Icon size={25} /></span><span className="service-number">{number}</span></div>
                  <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={19} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-padding" id="approach">
          <div className="container approach-grid">
            <div className="approach-statement"><p className="eyebrow light"><span /> Why Objective Scientific</p><h2>Specialists who see the <em>bigger picture.</em></h2><p>Good science is only valuable when it creates better outcomes. We connect strategy, technical know-how and real-world context to help you make progress that lasts.</p><a className="button button-outline" href="#contact">Meet the team <ArrowRight size={17} /></a></div>
            <div className="capability-panel"><div className="panel-top"><span>Our perspective</span><span>04 areas</span></div>{capabilities.map((capability, index) => <div className="capability-row" key={capability}><span>0{index + 1}</span><strong>{capability}</strong><ArrowUpRight size={18} /></div>)}<div className="panel-foot"><span>01 — 04</span><span className="panel-dots"><i /><i /><i /><i /></span></div></div>
          </div>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="container contact-grid">
            <div><p className="eyebrow"><span /> Let's work together</p><h2>Have a challenge<br /><strong>worth solving?</strong></h2><p className="muted-copy">Tell us a little about what you are working on. We'll be in touch with a thoughtful next step.</p><div className="contact-details"><a href="mailto:hello@objectivescientific.co.za"><Mail size={17} /> hello@objectivescientific.co.za</a><a href="tel:+27120072278"><Phone size={17} /> +27 12 007 2278</a><span><MapPin size={17} /> Pretoria, South Africa</span></div></div>
            <div className="form-card">{submitted ? <div className="success-state"><CheckCircle2 size={42} /><h3>Thank you for reaching out.</h3><p>Your message is on its way. We'll be in touch soon.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <form onSubmit={handleSubmit}><div className="form-heading"><span>01</span><h3>Start a conversation</h3></div><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required name="message" rows={3} placeholder="Tell us about your project or challenge..." /></label><button className="button button-navy" type="submit">Send enquiry <ArrowRight size={17} /></button></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Atom size={24} /></span><span className="brand-name">objective<span>scientific</span></span></a><p>Turning specialist knowledge into meaningful progress.</p><div className="social-links"><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#contact" aria-label="YouTube"><Youtube size={19} /></a><a href="mailto:hello@objectivescientific.co.za" aria-label="Email"><Mail size={18} /></a></div></div><div className="container footer-bottom"><span>© 2024 Objective Scientific. All rights reserved.</span><span>Built for better outcomes.</span></div></footer>
    </div>
  );
}

export default App;
