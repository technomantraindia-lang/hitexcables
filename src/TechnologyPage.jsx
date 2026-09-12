import React from 'react';
import {
  ArrowRight,
  Atom,
  Award,
  BadgeCheck,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cog,
  Cpu,
  Factory,
  Flame,
  Globe2,
  HardHat,
  HeartHandshake,
  Layers,
  Leaf,
  Lightbulb,
  Microscope,
  Phone,
  Play,
  Quote,
  Recycle,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Zap
} from 'lucide-react';
import './TechnologyPage.css';

const A = '/assets/';

export default function TechnologyPage({ onNavigate }) {
  // IntersectionObserver for scroll reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.tech-reveal, .tech-reveal-left, .tech-reveal-right, .tech-stagger-container'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="technology-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* HERO BANNER SECTION                                                        */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-hero-section">
        <div className="tech-container tech-hero-grid">
          <div className="tech-hero-copy tech-reveal-left">
            <nav className="tech-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="tech-crumb-sep">&gt;</span>
              <span className="tech-crumb-current">Technology</span>
            </nav>

            <h1 className="tech-hero-title">Technology</h1>
            <h3 className="tech-hero-subtitle">
              Innovation in <span className="tech-text-cyan">Every Connection</span>
            </h3>
            <p className="tech-hero-desc">
              At HITEX PLUS, we combine advanced technology, modern manufacturing processes, and stringent quality control to deliver high-performance wires and cables for a safer, smarter tomorrow.
            </p>

            <div className="tech-hero-chips-row">
              <div className="tech-hero-chip">
                <div className="tech-hero-chip-icon"><Cog size={20} /></div>
                <div className="tech-hero-chip-text">
                  <strong>Advanced</strong>
                  <small>Manufacturing</small>
                </div>
              </div>
              <div className="tech-hero-chip">
                <div className="tech-hero-chip-icon"><ShieldCheck size={20} /></div>
                <div className="tech-hero-chip-text">
                  <strong>Reliable</strong>
                  <small>Performance</small>
                </div>
              </div>
              <div className="tech-hero-chip">
                <div className="tech-hero-chip-icon"><BadgeCheck size={20} /></div>
                <div className="tech-hero-chip-text">
                  <strong>Consistent</strong>
                  <small>Quality</small>
                </div>
              </div>
              <div className="tech-hero-chip">
                <div className="tech-hero-chip-icon"><Lightbulb size={20} /></div>
                <div className="tech-hero-chip-text">
                  <strong>Future-Ready</strong>
                  <small>Innovation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: OUR TECHNOLOGY                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-intro-section">
        <div className="tech-container">
          <div className="tech-grid-2">
            <div className="tech-copy tech-reveal-left">
              <span className="tech-eyebrow">OUR TECHNOLOGY</span>
              <h2 className="tech-h2">Built on Innovation.<br />Driven by Excellence.</h2>
              <div className="tech-title-line"></div>
              <p className="tech-p">
                We adopt the latest technology and modern engineering practices to manufacture wires and cables that meet global standards. Our focus on innovation helps us deliver products with superior safety, durability, and performance across diverse applications.
              </p>
              <button
                className="tech-btn-outline"
                onClick={() => {
                  const el = document.getElementById('tech-mfg-block');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Manufacturing <ArrowRight size={16} />
              </button>
            </div>

            <div className="tech-img-stage tech-reveal-right">
              <img src={`${A}copper.png`} alt="HITEX Modern Manufacturing Line" />
              <div className="tech-img-tag">
                MODERN TECHNOLOGY<br />FOR A SAFER TOMORROW
              </div>
            </div>
          </div>

          {/* 4 Feature Strip Capsule Bar */}
          <div className="tech-strip-grid tech-reveal">
            <div className="tech-strip-card">
              <div className="tech-strip-icon"><Bot size={34} /></div>
              <div className="tech-strip-card-text">
                <strong>Advanced</strong>
                <span>Machinery</span>
              </div>
            </div>

            <div className="tech-strip-card">
              <div className="tech-strip-icon"><Target size={34} /></div>
              <div className="tech-strip-card-text">
                <strong>Precision</strong>
                <span>Engineering</span>
              </div>
            </div>

            <div className="tech-strip-card">
              <div className="tech-strip-icon"><Cog size={34} /></div>
              <div className="tech-strip-card-text">
                <strong>Automated</strong>
                <span>Processes</span>
              </div>
            </div>

            <div className="tech-strip-card">
              <div className="tech-strip-icon"><ShieldCheck size={34} /></div>
              <div className="tech-strip-card-text">
                <strong>Stringent</strong>
                <span>Quality Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: ADVANCED MANUFACTURING                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-mfg-section" id="tech-mfg-block">
        <div className="tech-container">
          <div className="tech-grid-2">
            <div className="tech-img-stage tech-reveal-left">
              <img src={`${A}wire image.png`} alt="World-Class Cable Manufacturing" />
            </div>

            <div className="tech-copy tech-reveal-right">
              <span className="tech-eyebrow">ADVANCED MANUFACTURING</span>
              <h2 className="tech-h2">World-Class Manufacturing Technology</h2>
              <div className="tech-title-line"></div>
              <p className="tech-p">
                Our state-of-the-art manufacturing facilities are equipped with advanced machinery and automated systems to ensure precision, consistency, and efficiency in every product we create.
              </p>

              <ul className="tech-checklist">
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Highly automated production lines</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Precise conductor and insulation processes</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Continuous quality monitoring</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Compliance with national and international standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: RESEARCH & DEVELOPMENT                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-rd-section">
        <div className="tech-container">
          <div className="tech-grid-2">
            <div className="tech-copy tech-reveal-left">
              <span className="tech-eyebrow">RESEARCH &amp; DEVELOPMENT</span>
              <h2 className="tech-h2">Innovating for a Better Future</h2>
              <div className="tech-title-line"></div>
              <p className="tech-p">
                Our R&amp;D team continuously works on developing advanced materials, improved designs, and sustainable solutions. We focus on innovation to meet the evolving needs of our customers and industries.
              </p>
              <button className="tech-btn-outline" onClick={() => alert('R&D Initiatives Details')}>
                R&amp;D Initiatives <ArrowRight size={16} />
              </button>
            </div>

            <div className="tech-img-stage tech-reveal-right">
              <img src={`${A}indo.png`} alt="HITEX Research & Development Lab" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4: QUALITY & TESTING                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-testing-section">
        <div className="tech-container">
          <div className="tech-grid-2">
            <div className="tech-img-stage tech-reveal-left">
              <img src={`${A}tested.png`} alt="Precision Testing & Quality Assurance" />
            </div>

            <div className="tech-copy tech-reveal-right">
              <span className="tech-eyebrow">QUALITY &amp; TESTING</span>
              <h2 className="tech-h2">Precision Testing. Assured Quality.</h2>
              <div className="tech-title-line"></div>
              <p className="tech-p">
                We use advanced testing equipment and strict quality control processes to ensure that every cable meets the highest standards of safety, reliability, and performance.
              </p>

              <ul className="tech-checklist">
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Comprehensive in-house testing facilities</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Electrical, mechanical and environmental testing</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Compliance with IS, IEC and other global standards</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Ensuring long-term reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5: TECHNOLOGY FOR A SUSTAINABLE TOMORROW                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-eco-section">
        <div className="tech-container">
          <div className="tech-grid-2">
            <div className="tech-copy tech-reveal-left">
              <span className="tech-eyebrow">TECHNOLOGY FOR A SUSTAINABLE TOMORROW</span>
              <h2 className="tech-h2">Smarter Solutions. Greener Future.</h2>
              <div className="tech-title-line"></div>
              <p className="tech-p">
                We invest in energy-efficient processes, eco-friendly materials, and sustainable practices to reduce our environmental impact and build a cleaner, greener, stronger tomorrow.
              </p>

              <ul className="tech-checklist">
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Energy-efficient manufacturing</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Environmentally responsible materials</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Waste reduction and recycling initiatives</li>
                <li><CheckCircle2 size={22} className="tech-check-icon" fill="#16a34a" color="#ffffff" /> Supporting a sustainable future</li>
              </ul>
            </div>

            <div className="tech-img-stage tech-reveal-right">
              <img src={`${A}sustainable.png`} alt="Sustainable Technology Green Planet" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6: WHY CHOOSE HITEX PLUS                                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-section tech-why-section">
        <div className="tech-container">
          <div className="tech-why-content-wrapper">
            <div className="tech-why-header-box tech-reveal-left">
              <span className="tech-eyebrow">WHY CHOOSE HITEX PLUS</span>
              <h2 className="tech-h2">Technology That Powers Progress</h2>
            </div>

            <div className="tech-why-row tech-reveal">
              <div className="tech-why-cards-row">
                <div className="tech-why-card">
                  <div className="tech-why-icon"><Building2 size={34} /></div>
                  <strong>Advanced<br />Infrastructure</strong>
                </div>

                <div className="tech-why-card">
                  <div className="tech-why-icon"><Cog size={34} /></div>
                  <strong>Strict Quality<br />Control</strong>
                </div>

                <div className="tech-why-card">
                  <div className="tech-why-icon"><Sparkles size={34} /></div>
                  <strong>Innovative<br />R&amp;D</strong>
                </div>

                <div className="tech-why-card">
                  <div className="tech-why-icon"><Leaf size={34} /></div>
                  <strong>Sustainable<br />Manufacturing</strong>
                </div>
              </div>

              <div className="tech-why-slogan-box">
                <span className="tech-slogan-cyan">MORE THAN</span>
                <span className="tech-slogan-navy">CABLES,</span>
                <span className="tech-slogan-cyan">WE BUILD</span>
                <span className="tech-slogan-green">TRUST.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7: BOTTOM CTA                                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="tech-bottom-cta">
        <div className="tech-bottom-cta-inner tech-reveal">
          <div className="tech-bottom-cta-text">
            <h2>LET'S BUILD A SAFER TOMORROW</h2>
            <p>Partner with HITEX PLUS for reliable, high-quality wires and cables that keep the world connected.</p>
          </div>
          <div className="tech-bottom-cta-btns">
            <button
              className="tech-btn-teal"
              style={{ background: '#16a34a' }}
              onClick={() => alert('Enquiry form modal')}
            >
              Enquire Now <ArrowRight size={16} />
            </button>
            <button
              className="tech-btn-outline-white"
              onClick={() => {
                if (onNavigate) onNavigate('contact');
              }}
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
