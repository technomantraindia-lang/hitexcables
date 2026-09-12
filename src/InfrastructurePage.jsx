import React from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
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
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap
} from 'lucide-react';
import './InfrastructurePage.css';

const A = '/assets/';

export default function InfrastructurePage({ onNavigate }) {
  const [prodIndex, setProdIndex] = React.useState(0);
  const [testIndex, setTestIndex] = React.useState(0);
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  // IntersectionObserver for reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.infra-reveal, .infra-reveal-left, .infra-reveal-right, .infra-stagger-container'
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

  const productionMachines = [
    {
      title: 'Wire Drawing Machine',
      desc: 'Precision wire drawing for equipment conductivity',
      img: `${A}infra/prod_1.png`
    },
    {
      title: 'Bunching Machine',
      desc: 'High-speed bunching for multi-core cables',
      img: `${A}infra/prod_2.png`
    },
    {
      title: 'Extrusion Line',
      desc: 'Advanced insulation & sheathing extrusion systems',
      img: `${A}infra/prod_3.png`
    },
    {
      title: 'Cabling Machine',
      desc: 'Robust cabling for various cable constructions',
      img: `${A}infra/prod_4.png`
    },
    {
      title: 'Armouring Machine',
      desc: 'For durable and protected cables',
      img: `${A}infra/prod_5.png`
    },
    {
      title: 'Take-up & Packaging',
      desc: 'Neat finishing and reliable packaging',
      img: `${A}infra/prod_6.png`
    }
  ];

  const testingEquipment = [
    {
      title: 'Tensile Testing Machine',
      desc: 'Tests mechanical strength and elongation',
      img: `${A}infra/test_1.png`
    },
    {
      title: 'High Voltage Test Set',
      desc: 'Ensures electrical safety and insulation performance',
      img: `${A}infra/test_2.png`
    },
    {
      title: 'Ageing Oven',
      desc: 'Thermal ageing and durability testing',
      img: `${A}infra/test_3.png`
    },
    {
      title: 'Flammability Test Chamber',
      desc: 'Checks fire resistance properties',
      img: `${A}infra/test_4.png`
    },
    {
      title: 'Insulation Resistance Tester',
      desc: 'Measures insulation resistance values',
      img: `${A}infra/test_5.png`
    },
    {
      title: 'Conductor Resistance Bridge',
      desc: 'Accurate measurement of conductor resistance',
      img: `${A}infra/test_6.png`
    },
    {
      title: 'Dimensional Measuring System',
      desc: 'Diameter and thickness measurement',
      img: `${A}infra/test_7.png`
    },
    {
      title: 'Hot Set Test Equipment',
      desc: 'Evaluates thermal stability',
      img: `${A}infra/test_8.png`
    },
    {
      title: 'Oil Resistance Test',
      desc: 'Material resistance in harsh environments',
      img: `${A}infra/test_9.png`
    },
    {
      title: 'Control Panel & Instruments',
      desc: 'Precision monitoring and process control',
      img: `${A}infra/test_10.png`
    }
  ];

  const whyCards = [
    {
      title: 'Higher Efficiency',
      desc: 'Optimized processes for better productivity',
      icon: <Users size={34} strokeWidth={1.8} />
    },
    {
      title: 'Consistent Quality',
      desc: 'Reliable products in every batch',
      icon: <Award size={34} strokeWidth={1.8} />
    },
    {
      title: 'Enhanced Safety',
      desc: 'Safe and compliant manufacturing environment',
      icon: <ShieldCheck size={34} strokeWidth={1.8} />
    },
    {
      title: 'Greater Precision',
      desc: 'Advanced machinery for accurate performance',
      icon: <Target size={34} strokeWidth={1.8} />
    },
    {
      title: 'Scalability',
      desc: 'Ready for future growth and demands',
      icon: <BarChart3 size={34} strokeWidth={1.8} />
    }
  ];

  const galleryImages = [
    `${A}infra/gall_1.png`,
    `${A}infra/gall_2.png`,
    `${A}infra/gall_3.png`,
    `${A}infra/gall_4.png`,
    `${A}infra/gall_5.png`
  ];

  return (
    <div className="infra-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-hero-section">
        <div className="infra-container infra-hero-grid">
          <div className="infra-hero-copy infra-reveal-left">
            <span className="infra-hero-kicker">OUR INFRASTRUCTURE</span>
            <h1 className="infra-hero-title">Infrastructure</h1>
            <p className="infra-hero-desc">
              Advanced facilities. Quality production systems.<br />
              Modern machinery. Testing support. Built for a stronger tomorrow.
            </p>
            <nav className="infra-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="infra-crumb-sep">&gt;</span>
              <span className="infra-crumb-current">Infrastructure</span>
            </nav>
          </div>

          <div className="infra-hero-slogan infra-reveal-right">
            <span>ENGINEERING</span>
            <span>BETTER</span>
            <strong>CONNECTIONS</strong>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: INFRASTRUCTURE BUILT FOR EXCELLENCE                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-intro-section">
        <div className="infra-container">
          <div className="infra-grid-2">
            <div className="infra-copy infra-reveal-left">
              <div className="infra-eyebrow-line">
                <span className="infra-line-bar"></span>
                <span className="infra-eyebrow">BUILT FOR A STRONGER TOMORROW</span>
              </div>
              <h2 className="infra-h2">
                Infrastructure Built<br />for <span className="infra-text-cyan">Excellence</span>
              </h2>
              <p className="infra-p">
                At <strong>HITEX PLUS</strong>, our infrastructure is the backbone of our commitment to quality, innovation and customer satisfaction. Equipped with modern machinery, advanced production systems and a well-supported testing facility, we manufacture a wide range of wires and cables that meet national and international standards.
              </p>
            </div>

            <div className="infra-img-stage infra-reveal-right">
              <img src={`${A}image 16.jpeg`} alt="HITEX Infrastructure Manufacturing Plant" />
              <div className="infra-img-tag">
                MODERN FACILITIES<br />FOR A BRIGHTER<br />CONNECTED WORLD
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------- */}
          {/* SECTION 3: 5 FEATURE BADGES STRIP                                          */}
          {/* -------------------------------------------------------------------------- */}
          <div className="infra-badges-strip infra-reveal">
            <div className="infra-badge-item">
              <div className="infra-badge-icon"><Cog size={36} strokeWidth={1.8} /></div>
              <div className="infra-badge-text">
                <strong>Modern Machinery</strong>
                <span>State-of-the-art production equipment</span>
              </div>
            </div>

            <div className="infra-badge-item">
              <div className="infra-badge-icon"><ShieldCheck size={36} strokeWidth={1.8} /></div>
              <div className="infra-badge-text">
                <strong>Quality Assurance</strong>
                <span>Consistent quality at every stage</span>
              </div>
            </div>

            <div className="infra-badge-item">
              <div className="infra-badge-icon"><BarChart3 size={36} strokeWidth={1.8} /></div>
              <div className="infra-badge-text">
                <strong>Large Production Capacity</strong>
                <span>Built to meet growing demands</span>
              </div>
            </div>

            <div className="infra-badge-item">
              <div className="infra-badge-icon"><Users size={36} strokeWidth={1.8} /></div>
              <div className="infra-badge-text">
                <strong>Skilled Workforce</strong>
                <span>Experienced and dedicated technical team</span>
              </div>
            </div>

            <div className="infra-badge-item">
              <div className="infra-badge-icon"><Factory size={36} strokeWidth={1.8} /></div>
              <div className="infra-badge-text">
                <strong>Reliable Infrastructure</strong>
                <span>Efficient, safe and sustainable operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4: PRODUCTION FACILITIES                                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-production-section">
        <div className="infra-container">
          <div className="infra-section-header infra-reveal">
            <div>
              <h2 className="infra-section-h2">PRODUCTION FACILITIES</h2>
              <p className="infra-section-p">Advanced manufacturing systems for high-performance wires and cables.</p>
            </div>
            <div className="infra-nav-controls">
              <span className="infra-nav-caption">Our Production Setup Reflects Our Commitment to Quality</span>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('prod-facilities-scroll');
                  if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                aria-label="Previous facility"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('prod-facilities-scroll');
                  if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                aria-label="Next facility"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="infra-cards-grid infra-reveal-scale" id="prod-facilities-scroll">
            {productionMachines.map((m, idx) => (
              <div className="infra-card" key={idx}>
                <div className="infra-card-img-box">
                  <img src={m.img} alt={m.title} />
                </div>
                <div className="infra-card-body">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5: LABORATORY & TESTING INFRASTRUCTURE                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-testing-section">
        <div className="infra-container">
          <div className="infra-section-header infra-reveal">
            <div>
              <h2 className="infra-section-h2">LABORATORY &amp; TESTING INFRASTRUCTURE</h2>
              <p className="infra-section-p">Well-equipped in-house laboratory to ensure highest quality and compliance.</p>
            </div>
            <div className="infra-nav-controls">
              <span className="infra-nav-caption">Testing Today for a Safer Tomorrow</span>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('test-facilities-scroll');
                  if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                aria-label="Previous test equipment"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('test-facilities-scroll');
                  if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                aria-label="Next test equipment"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="infra-cards-grid-5 infra-reveal-scale" id="test-facilities-scroll">
            {testingEquipment.map((t, idx) => (
              <div className="infra-card" key={idx}>
                <div className="infra-card-img-box">
                  <img src={t.img} alt={t.title} />
                </div>
                <div className="infra-card-body">
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6: OUR TESTING INFRASTRUCTURE ENSURES TOTAL RELIABILITY            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-reliability-section">
        <div className="infra-container">
          <div className="infra-grid-3-rel">
            <div className="infra-copy infra-reveal-left">
              <div className="infra-eyebrow-line">
                <span className="infra-line-bar"></span>
                <span className="infra-eyebrow">QUALITY AT EVERY STEP</span>
              </div>
              <h2 className="infra-h2">
                Our Testing Infrastructure<br />Ensures Total <span className="infra-text-cyan">Reliability</span>
              </h2>
              <p className="infra-p">
                We follow strict quality control measures backed by advanced testing equipment and industry standards. Our in-house laboratory plays a vital role in maintaining the highest levels of product performance and safety.
              </p>
            </div>

            <div className="infra-checklist-col infra-reveal">
              <ul className="infra-checklist">
                <li><CheckCircle2 size={24} className="infra-check-icon" fill="#008fa8" color="#ffffff" /> In-house testing laboratory</li>
                <li><CheckCircle2 size={24} className="infra-check-icon" fill="#008fa8" color="#ffffff" /> Comprehensive quality checks</li>
                <li><CheckCircle2 size={24} className="infra-check-icon" fill="#008fa8" color="#ffffff" /> Compliance with national &amp; international standards</li>
                <li><CheckCircle2 size={24} className="infra-check-icon" fill="#008fa8" color="#ffffff" /> Precise monitoring and process control</li>
                <li><CheckCircle2 size={24} className="infra-check-icon" fill="#008fa8" color="#ffffff" /> Continuous improvement and innovation</li>
              </ul>
            </div>

            <div className="infra-reliability-box infra-reveal-right">
              <div className="infra-rel-icon-box">
                <ShieldCheck size={40} strokeWidth={1.8} color="#008fa8" />
              </div>
              <h3>TESTED.<br />TRUSTED.<br />FOR A SAFER<br />TOMORROW.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7: FACILITY GALLERY                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-gallery-section">
        <div className="infra-container">
          <div className="infra-section-header infra-reveal">
            <div>
              <h2 className="infra-section-h2">FACILITY GALLERY</h2>
              <p className="infra-section-p">A glimpse into our world-class manufacturing and testing facilities.</p>
            </div>
            <div className="infra-nav-controls">
              <span className="infra-nav-caption">Modern Infrastructure. Superior Capabilities.</span>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('gallery-scroll');
                  if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="infra-arrow-btn"
                onClick={() => {
                  const el = document.getElementById('gallery-scroll');
                  if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                aria-label="Next gallery image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="infra-gallery-grid infra-reveal-scale" id="gallery-scroll">
            {galleryImages.map((src, idx) => (
              <div className="infra-gallery-card" key={idx}>
                <img src={src} alt={`HITEX Facility Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 8: WHY OUR INFRASTRUCTURE MATTERS                                  */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-section infra-why-section">
        <div className="infra-container">
          <div className="infra-why-header infra-reveal">
            <h2 className="infra-why-title">WHY OUR INFRASTRUCTURE MATTERS</h2>
          </div>

          <div className="infra-why-cards-grid infra-reveal-scale">
            {whyCards.map((item, idx) => (
              <div className="infra-why-card" key={idx}>
                <div className="infra-why-icon">{item.icon}</div>
                <div className="infra-why-info">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 9: BOTTOM CTA BANNER                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="infra-bottom-cta">
        <div className="infra-bottom-cta-inner infra-reveal">
          <div className="infra-bottom-cta-text">
            <span>LET'S BUILD A STRONGER TOMORROW</span>
            <h2>Interested in Our Manufacturing Capabilities?</h2>
            <p>Get in touch with our team to know more about our infrastructure, production capacity and customized solutions.</p>
          </div>
          <div className="infra-bottom-cta-btns">
            <button
              className="infra-btn-teal"
              style={{ background: '#16a34a' }}
              onClick={() => alert('Enquiry Form Modal')}
            >
              Enquire Now <ArrowRight size={16} />
            </button>
            <button
              className="infra-btn-outline-white"
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
