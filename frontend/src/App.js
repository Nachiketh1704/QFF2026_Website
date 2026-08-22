import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronDown, Menu, X, MapPin, Linkedin, Instagram } from "lucide-react";
import "./App.css";

const schedule = [
  { day: "Day 1", title: "Agenda to be announced", date: "Coming soon", items: [["TBA", "Session details will be announced closer to the event.", ""]] },
  { day: "Day 2", title: "Agenda to be announced", date: "Coming soon", items: [["TBA", "Session details will be announced closer to the event.", ""]] },
  { day: "Day 3", title: "Agenda to be announced", date: "Coming soon", items: [["TBA", "Session details will be announced closer to the event.", ""]] },
];

const speakers = ["01", "02", "03", "04"];
const team = ["01", "02", "03", "04", "05", "06"];
const faqs = [["Who can attend?", "Everyone is welcome — students, researchers, makers, and curious minds from all disciplines."], ["Is there a fee?", "The event is free to attend. Registration is required as places are limited."], ["Do I need a laptop?", "A laptop is recommended for the hands-on labs and Quantum Sprint."], ["Is Accomodation Provided?", "Please check the registration form for the latest accommodation information."], ["Will certificates be provided?", "Participants who complete the festival activities will receive certificates."]];

const getNextFestivalTarget = () => {
  const now = new Date();
  const target = new Date(Date.UTC(now.getUTCFullYear(), 10, 15, 8, 30));
  if (target <= now) target.setUTCFullYear(target.getUTCFullYear() + 1);
  return target;
};

const getCountdown = (target) => {
  const remaining = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState(() => getCountdown(getNextFestivalTarget()));
  const timer = window.setInterval(() => setCountdown(getCountdown(getNextFestivalTarget())), 1000);
  useEffect(() => {
    document.title = "Qiskit Fall Fest 2026 · Amrita";
  }, []);
  const go = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="nav-wrap" data-testid="site-navigation">
      <a className="brand" href="#top" onClick={go} data-testid="brand-home-link"><img src="/assets/Pictogram/SVG/qiskit_white.svg" alt="Qiskit" data-testid="qiskit-logo" /><span>FALL<br /><b>FEST</b></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} data-testid="main-navigation">
        {[['About', '#about'], ['Schedule', '#schedule'], ['Speakers', '#speakers'], ['Team', '#team'], ['FAQs', '#faqs']].map(([label, href]) => <a key={label} href={href} onClick={go} data-testid={`nav-${label.toLowerCase()}-link`}>{label}</a>)}
        <a className="nav-register" href="https://forms.cloud.microsoft/r/Z1vAFZ6jcz" target="_blank" rel="noreferrer" data-testid="nav-register-link">Register <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero" data-testid="hero-section">
        <div className="hero-copy">
          <p className="eyebrow" data-testid="hero-eyebrow">Qiskit Fall Fest 2026 <span>///</span> Amrita Vishwa Vidyapeetham, Amritapuri</p>
          <h1 data-testid="hero-title">Quantum<br /><em>starts here.</em></h1>
          <p className="hero-subtitle" data-testid="hero-subtitle">Celebrating a decade of quantum on the cloud.</p>
          <div className="hero-actions"><a className="button button-primary" href="https://forms.cloud.microsoft/r/Z1vAFZ6jcz" target="_blank" rel="noreferrer" data-testid="hero-register-button">Register now <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#event" data-testid="hero-event-button">View event <ArrowUpRight size={17} /></a></div>
        </div>
        <div className="hero-meta" data-testid="hero-event-meta"><div><CalendarDays size={18} /><span>15th – 16th<br /><b>November 2026</b></span></div><div><MapPin size={18} /><span>Amritapuri<br /><b>Campus, Kerala</b></span></div></div>
        <div className="hero-stamp" data-testid="hero-campus-note">OPEN TO ALL<br /><span>DISCIPLINES</span></div>
      </section>

      <section className="intro section" id="event" data-testid="about-section"><div className="section-kicker">01 <span>ABOUT THE FEST</span></div><div className="intro-layout"><h2 data-testid="about-heading">Student-led<br /><span>quantum festival</span><br />powered by Qiskit.</h2><div className="intro-text"><p>Organized by students at Amrita Vishwa Vidyapeetham, Amritapuri Campus. Join workshops and speaker sessions to explore quantum computing with Qiskit through interactive learning activities.</p><div className="tracks"><div data-testid="track-learn"><b>01</b><strong>Learn</strong><span>Intro to quantum computing, Qiskit basics, and guided labs.</span></div><div data-testid="track-build"><b>02</b><strong>Build</strong><span>Hands-on coding sessions using the Qiskit SDK and tools.</span></div><div data-testid="track-compete"><b>03</b><strong>Compete</strong><span>Mini challenges and activities.</span></div></div><div className="partner-row" data-testid="partner-row"><small>In partnership with</small><div className="partner-marks"><img src="/assets/IBM_Quantum/Raster/RGB/IBM_Quantum_logotype_pos_RGB.png" alt="IBM Quantum" data-testid="ibm-quantum-logo" /><img src="/assets/Pictogram/SVG/qiskit_purple-60.svg" alt="Qiskit" data-testid="partner-qiskit-mark" /></div></div></div></div></section>

      <section className="schedule section" id="schedule" data-testid="schedule-section"><div className="section-kicker">02 <span>THE PROGRAM</span></div><div className="section-heading-row"><h2 data-testid="schedule-heading">Event<br /><span>schedule.</span></h2><p>Draft agenda — final timings and rooms will be announced closer to the event.</p></div><div className="day-grid">{schedule.map((day) => <article className="day-card" key={day.day} data-testid={`schedule-${day.day.toLowerCase().replace(' ', '-')}`}><div className="day-top"><div><span>{day.day}</span><h3>{day.title}</h3></div><time>{day.date}</time></div><div className="schedule-list">{day.items.map(([time, title, speaker], i) => <div className="schedule-row" key={i} data-testid={`schedule-item-${day.day}-${i}`}><time>{time}</time><div><strong>{title}</strong>{speaker && <small>{speaker}</small>}</div></div>)}</div></article>)}</div></section>

      <section className="people section" id="speakers" data-testid="speakers-section"><div className="section-kicker">03 <span>PEOPLE</span></div><div className="section-heading-row"><h2 data-testid="speakers-heading">Speakers<br /><span>& mentors.</span></h2><p>Industry professionals, researchers, and student leaders guiding sessions and reviews.</p></div><div className="speaker-grid">{speakers.map((slot) => <article className="person placeholder-person" key={slot} data-testid={`speaker-placeholder-${slot}`}><div className="placeholder-portrait"><img className="portrait-mark" src="/assets/Pictogram/SVG/qiskit_white.svg" alt="" data-testid={`speaker-mark-${slot}`} /><b>Speaker<br />slot {slot}</b></div><h3>Profile coming soon</h3><p>Speaker &amp; mentor</p><small>Details to be announced</small></article>)}</div></section>
      
      <section className="team section" id="team" data-testid="team-section"><div className="section-kicker">04 <span>THE CREW</span></div><div className="section-heading-row"><h2 data-testid="team-heading">Student<br /><span>organizers.</span></h2></div><div className="team-grid">{team.map((slot) => <article className="team-person placeholder-team" key={slot} data-testid={`team-placeholder-${slot}`}><div className="team-placeholder-mark">{slot}</div><div><h3>Organizer profile</h3><p>Role to be announced</p></div><ArrowUpRight size={18} /></article>)}</div></section>

      <section className="faq section" id="faqs" data-testid="faq-section"><div className="section-kicker">05 <span>GOOD TO KNOW</span></div><div className="section-heading-row"><h2 data-testid="faq-heading">Frequently<br /><span>asked questions.</span></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q} data-testid={`faq-item-${i}`}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`faq-question-${i}`} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={20} /></button>{openFaq === i && <p data-testid={`faq-answer-${i}`}>{a}</p>}</div>)}</div></section>

      <section className="venue" data-testid="venue-section"><div className="venue-content"><div className="section-kicker">06 <span>FIND US</span></div><h2 data-testid="venue-heading">See you<br /><em>at Amritapuri.</em></h2><p data-testid="venue-address">Amrita Vishwa Vidyapeetham, Amritapuri Campus<br />Clappana P.O., Vallikavu, Kerala 690525, India</p><a className="button button-primary" href="https://maps.google.com/?q=Amrita+Vishwa+Vidyapeetham+Amritapuri" target="_blank" rel="noreferrer" data-testid="venue-map-button">Open in maps <ArrowUpRight size={17} /></a></div><div className="venue-mark">A<sup>+</sup></div></section>
    </main>
    <footer data-testid="site-footer"><div className="footer-brand"><img src="/assets/Pictogram/SVG/qiskit_white.svg" alt="Qiskit" /><span>FALLFEST<br /><b>AMRITA</b></span></div><div><p>Celebrating a decade of quantum on the cloud</p><p className="footer-contact">Contact us: <a href="mailto:qiskitfallfestamrita@gmail.com">qiskitfallfestamrita@gmail.com</a><br />Phone No: <a href="tel:+919778260669">+91 97782 60669</a></p></div><div className="socials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="instagram-link"><Instagram size={18} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="linkedin-link"><Linkedin size={18} /></a></div><div className="powered-by" data-testid="powered-by"><small>Powered by</small><img src="/assets/IBM_Quantum/Raster/RGB/IBM_Quantum_logotype_rev_RGB.png" alt="IBM Quantum" data-testid="ibm-quantum-footer-logo" /></div><small>© 2026 Qiskit Fall Fest · Amrita Vishwa Vidyapeetham</small></footer>
  </div>;
}

export default App;