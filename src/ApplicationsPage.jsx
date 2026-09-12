import React from 'react';
import {
  ArrowRight,
  Building,
  Building2,
  CheckCircle2,
  Cog,
  Cpu,
  Cross,
  Database,
  Factory,
  Flame,
  Gem,
  HardHat,
  HeartHandshake,
  Home,
  Layers,
  Leaf,
  ShieldCheck,
  Train,
  Truck,
  Users,
  Zap
} from 'lucide-react';
import './ApplicationsPage.css';

const A = '/assets/app_crops/';

export default function ApplicationsPage({ onNavigate }) {
  // IntersectionObserver for smooth reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.app-reveal, .app-reveal-left, .app-reveal-right, .app-reveal-scale'
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
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const applicationsList = [
    {
      title: 'Residential',
      desc: 'Safe and reliable wiring solutions for modern homes.',
      img: `${A}app_1.png`,
      icon: <Home size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Commercial',
      desc: 'Powering offices, malls, IT parks and commercial complexes.',
      img: `${A}app_2.png`,
      icon: <Building2 size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Industrial',
      desc: 'Rugged cables for heavy-duty industrial applications.',
      img: `${A}app_3.png`,
      icon: <Factory size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Infrastructure',
      desc: 'Building stronger cities with reliable connectivity.',
      img: `${A}app_4.png`,
      icon: <HardHat size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Hospitals',
      desc: 'Ensuring uninterrupted power for critical healthcare facilities.',
      img: `${A}app_5.png`,
      icon: <ShieldCheck size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Data Centers',
      desc: 'High-performance cables for uninterrupted digital infrastructure.',
      img: `${A}app_6.png`,
      icon: <Database size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Renewable Energy',
      desc: 'Cabling solutions for a cleaner and greener tomorrow.',
      img: `${A}app_7.png`,
      icon: <Leaf size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Railways',
      desc: 'Trusted cables for safe and efficient railway networks.',
      img: `${A}app_8.png`,
      icon: <Truck size={22} color="#00a884" strokeWidth={2} />
    },
    {
      title: 'Oil & Gas',
      desc: 'Durable solutions for challenging environments.',
      img: `${A}app_9.png`,
      icon: <Flame size={22} color="#00a884" strokeWidth={2} />
    }
  ];

  return (
    <div className="app-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="app-hero-section">
        <div className="app-container">
          <div className="app-hero-content app-reveal-left">
            <nav className="app-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="app-crumb-sep">&gt;</span>
              <span className="app-crumb-current">Applications</span>
            </nav>

            <h1 className="app-hero-title">Applications</h1>
            <p className="app-hero-subtitle">
              Powering Every Sector. Enabling a Better Tomorrow.
            </p>
            <p className="app-hero-desc">
              Our high-quality wires and cables are trusted across diverse industries
              and environments, delivering safe, reliable and efficient performance
              wherever they are used.
            </p>

            <div className="app-hero-badges">
              <div className="app-hero-badge-item">
                <div className="app-badge-icon-wrap">
                  <ShieldCheck size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Reliable<br />Performance</span>
              </div>

              <div className="app-hero-badge-item">
                <div className="app-badge-icon-wrap">
                  <Cog size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Wide<br />Applications</span>
              </div>

              <div className="app-hero-badge-item">
                <div className="app-badge-icon-wrap">
                  <Users size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Trusted<br />Across Industries</span>
              </div>

              <div className="app-hero-badge-item">
                <div className="app-badge-icon-wrap">
                  <Leaf size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Building a<br />Sustainable Future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: OUR APPLICATIONS GRID (3x3 = 9 CARDS)                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="app-grid-section">
        <div className="app-container">
          <div className="app-section-header app-reveal">
            <div className="app-eyebrow-line">
              <span className="app-line-bar"></span>
              <span className="app-eyebrow">OUR APPLICATIONS</span>
            </div>
            <h2 className="app-h2">Where Our Cables Make a Difference</h2>
            <p className="app-p">
              From homes to industries, from infrastructure to renewable energy — HITEX
              PLUS cables are designed to perform in the most demanding environments,
              keeping the world connected and powered.
            </p>
          </div>

          <div className="app-cards-grid app-reveal-scale">
            {applicationsList.map((item, idx) => (
              <div className="app-card" key={idx}>
                <div className="app-card-img-wrap">
                  <div className="app-card-img-box">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="app-card-badge-icon">{item.icon}</div>
                </div>

                <div className="app-card-body">
                  <div className="app-card-top-row">
                    <h3>{item.title}</h3>
                    <button
                      className="app-card-arrow-btn"
                      onClick={() => {
                        if (onNavigate) onNavigate('products');
                      }}
                      title={`Explore ${item.title} Cables`}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: BOTTOM CTA SECTION ("Together for a Brighter Tomorrow")         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="app-cta-section">
        <div className="app-container">
          <div className="app-cta-inner app-reveal">
            <div className="app-cta-left">
              <span className="app-cta-kicker">
                TOGETHER FOR A BRIGHTER TOMORROW
              </span>
              <h2>Reliable Cables for Every Application</h2>
              <p>
                Partner with HITEX PLUS for high-quality, safe and innovative cable
                solutions tailored to your industry.
              </p>
              <button
                className="app-btn-green"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                }}
              >
                Enquire Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="app-cta-right-cards">
              <div className="app-cta-feature-card">
                <div className="app-cta-card-icon">
                  <Gem size={32} strokeWidth={1.8} />
                </div>
                <span>High Durability</span>
              </div>

              <div className="app-cta-feature-card">
                <div className="app-cta-card-icon">
                  <Cog size={32} strokeWidth={1.8} />
                </div>
                <span>Wide Range</span>
              </div>

              <div className="app-cta-feature-card">
                <div className="app-cta-card-icon">
                  <Leaf size={32} strokeWidth={1.8} />
                </div>
                <span>Sustainable Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
