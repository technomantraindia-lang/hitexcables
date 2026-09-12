import React from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Beaker,
  CheckCircle2,
  ChevronRight,
  Cog,
  Download,
  Factory,
  FileText,
  FlaskConical,
  Gauge,
  Globe2,
  HardHat,
  HeartHandshake,
  Landmark,
  Leaf,
  Layers,
  PackageCheck,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users
} from 'lucide-react';
import './CertificationsPage.css';

const A = '/assets/';

export default function CertificationsPage({ onNavigate }) {
  // IntersectionObserver for reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.cert-reveal, .cert-reveal-left, .cert-reveal-right, .cert-reveal-scale'
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

  const complianceBadges = [
    {
      title: 'ISO 9001:2015',
      desc: 'Quality Management',
      iconImg: `${A}cert_icons/cert_icon_1.png`
    },
    {
      title: 'IS 694',
      desc: 'House Wires',
      iconImg: `${A}cert_icons/cert_icon_2.png`
    },
    {
      title: 'IS 1554',
      desc: 'Flexible Cables',
      iconImg: `${A}cert_icons/cert_icon_3.png`
    },
    {
      title: 'IS 7098',
      desc: 'Control Cables',
      iconImg: `${A}cert_icons/cert_icon_4.png`
    },
    {
      title: 'CE',
      desc: 'Compliance',
      iconImg: `${A}cert_icons/cert_icon_5.png`
    },
    {
      title: 'RoHS',
      desc: 'Compliant',
      iconImg: `${A}cert_icons/cert_icon_6.png`
    },
    {
      title: 'REACH',
      desc: 'Compliant',
      iconImg: `${A}cert_icons/cert_icon_7.png`
    },
    {
      title: 'Govt. Approved',
      desc: 'Trusted & Recognised',
      iconImg: `${A}cert_icons/cert_icon_8.png`
    }
  ];

  const certificateCards = [
    {
      title: 'ISO 9001:2015',
      desc: 'Quality Management System',
      img: `${A}cert_crops/cert_1.png`
    },
    {
      title: 'IS 694 Certification',
      desc: 'Household Wires',
      img: `${A}cert_crops/cert_2.png`
    },
    {
      title: 'IS 1554 Approval',
      desc: 'Flexible Cables',
      img: `${A}cert_crops/cert_3.png`
    },
    {
      title: 'IS 7098 Approval',
      desc: 'Control Cables',
      img: `${A}cert_crops/cert_4.png`
    },
    {
      title: 'CE Compliance',
      desc: 'European Conformity',
      img: `${A}cert_crops/cert_5.png`
    },
    {
      title: 'Government Approval',
      desc: 'Govt. of India',
      img: `${A}cert_crops/cert_6.png`
    },
    {
      title: 'Quality Management',
      desc: 'Manufacturing & Supply',
      img: `${A}cert_crops/cert_7.png`
    },
    {
      title: 'Testing Report',
      desc: 'Independent Lab Testing',
      img: `${A}cert_crops/cert_8.png`
    }
  ];

  const processSteps = [
    {
      step: '1. Raw Material Check',
      desc: 'Certified and tested raw materials',
      icon: <Factory size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      step: '2. In-Process Testing',
      desc: 'Continuous quality monitoring',
      icon: <Target size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      step: '3. Lab Verification',
      desc: 'Testing in accredited laboratories',
      icon: <FlaskConical size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      step: '4. Final Inspection',
      desc: 'Dimensional and electrical checks',
      icon: <ShieldCheck size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      step: '5. Certified Dispatch',
      desc: 'Approved for safe delivery',
      icon: <PackageCheck size={38} color="#008fa8" strokeWidth={1.8} />
    }
  ];

  const whyChooseCards = [
    {
      title: 'Certified Materials',
      desc: 'Only high-grade, tested raw materials',
      icon: <ShieldCheck size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      title: 'Regular Audits',
      desc: 'Periodic audits and compliance checks',
      icon: <FileText size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      title: 'Compliance Focus',
      desc: 'Meet national & international standards',
      icon: <Cog size={38} color="#008fa8" strokeWidth={1.8} />
    },
    {
      title: 'Nationwide Trust',
      desc: 'Preferred by customers across India',
      icon: <Users size={38} color="#008fa8" strokeWidth={1.8} />
    }
  ];

  return (
    <div className="cert-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-hero-section">
        <div className="cert-container cert-hero-grid">
          <div className="cert-hero-copy cert-reveal-left">
            <nav className="cert-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="cert-crumb-sep">&gt;</span>
              <span className="cert-crumb-current">Certifications</span>
            </nav>

            <h1 className="cert-hero-title">Certifications</h1>
            <p className="cert-hero-subtitle">Trusted. Tested. Certified.</p>
            <p className="cert-hero-desc">
              At HITEX PLUS, quality is not just a promise — it's a standard. Our products
              are manufactured in compliance with national and international standards,
              ensuring safety, reliability and superior performance in every application.
            </p>

            <div className="cert-hero-badges">
              <div className="cert-hero-badge-item">
                <Shield size={20} color="#38bdf8" />
                <span>Safe Products</span>
              </div>
              <div className="cert-hero-badge-item">
                <Cog size={20} color="#38bdf8" />
                <span>Standards Compliance</span>
              </div>
              <div className="cert-hero-badge-item">
                <Users size={20} color="#38bdf8" />
                <span>A Stronger Tomorrow</span>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: 8 COMPLIANCE & CERTIFICATION STRIP                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-strip-section">
        <div className="cert-container">
          <div className="cert-strip-grid cert-reveal">
            {complianceBadges.map((b, idx) => (
              <div className="cert-strip-item" key={idx}>
                <div className="cert-strip-icon">
                  <img src={b.iconImg} alt={b.title} />
                </div>
                <strong>{b.title}</strong>
                <span>{b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: OUR COMMITMENT TO QUALITY                                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-section cert-commitment-section">
        <div className="cert-container">
          <div className="cert-grid-2-qa">
            <div className="cert-copy cert-reveal-left">
              <div className="cert-eyebrow-line">
                <span className="cert-line-bar"></span>
                <span className="cert-eyebrow">OUR COMMITMENT</span>
              </div>
              <h2 className="cert-h2">Our Commitment to Quality</h2>
              <p className="cert-p">
                Jay Cable Industries, operating under the brand <strong>HITEX PLUS</strong>, is an ISO 9001:2015 certified company, engaged in manufacturing a wide range of household wires, flexible multicore cables, submersible flat cables, insulated cables, power and control cables.
              </p>
              <p className="cert-p">
                We follow a policy of quality product and time-bound services, with a strong focus on customer satisfaction, safety and continuous improvement. Our dealer and distributor network motivates us to maintain the highest standards in every product we deliver.
              </p>

              <button
                className="cert-btn-teal"
                onClick={() => alert('Quality Policy Document')}
              >
                Our Quality Policy <ArrowRight size={16} />
              </button>
            </div>

            <div className="cert-qa-combined-card cert-reveal-right">
              <div className="cert-qa-img-wrap">
                <img
                  src={`${A}quality.png`}
                  alt="HITEX PLUS Quality Assurance Standard"
                />
              </div>
              <div className="cert-qa-props-panel">
                <div className="cert-qa-prop-row">
                  <FileText size={44} color="#008fa8" strokeWidth={1.8} />
                  <span>High Quality<br />Raw Materials</span>
                </div>
                <div className="cert-qa-prop-row">
                  <Cog size={44} color="#008fa8" strokeWidth={1.8} />
                  <span>Stringent<br />Testing Process</span>
                </div>
                <div className="cert-qa-prop-row">
                  <ShieldCheck size={44} color="#008fa8" strokeWidth={1.8} />
                  <span>Compliant with<br />National &amp; International<br />Standards</span>
                </div>
                <div className="cert-qa-prop-row">
                  <HeartHandshake size={44} color="#008fa8" strokeWidth={1.8} />
                  <span>Trusted by Customers<br />Across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4: OUR CERTIFICATIONS GRID                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-section cert-grid-section">
        <div className="cert-container">
          <div className="cert-section-header cert-reveal">
            <div>
              <div className="cert-eyebrow-line">
                <span className="cert-line-bar"></span>
                <span className="cert-eyebrow">OUR CERTIFICATIONS</span>
              </div>
              <h2 className="cert-h2" style={{ margin: 0 }}>
                Evidence of our commitment to quality, safety and global standards.
              </h2>
            </div>
            <div className="cert-pill-badge">
              <span>Quality Today. A Safer Tomorrow.</span>
            </div>
          </div>

          <div className="cert-cards-grid cert-reveal-scale">
            {certificateCards.map((c, idx) => (
              <div className="cert-card" key={idx}>
                <div className="cert-card-img-box">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="cert-card-body">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5: TESTING & COMPLIANCE PROCESS                                    */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-section cert-process-section">
        <div className="cert-container">
          <div className="cert-process-box cert-reveal">
            <div className="cert-process-header">
              <div className="cert-process-line-bar"></div>
              <h3 className="cert-process-title">TESTING &amp; COMPLIANCE PROCESS</h3>
              <p className="cert-process-subtitle">
                A multi-stage quality assurance process to ensure every HITEX PLUS cable meets the highest standards.
              </p>
            </div>

            <div className="cert-process-flow">
              {processSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="cert-process-step">
                    <div className="cert-process-icon">{step.icon}</div>
                    <strong>{step.step}</strong>
                    <span>{step.desc}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="cert-process-arrow">
                      <ArrowRight size={20} color="#008fa8" strokeWidth={2.2} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6: WHY CHOOSE HITEX PLUS?                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-section cert-why-section">
        <div className="cert-container">
          <div className="cert-why-header cert-reveal">
            <div className="cert-why-line-bar"></div>
            <h3 className="cert-why-title">WHY CHOOSE HITEX PLUS?</h3>
          </div>

          <div className="cert-why-cards-grid cert-reveal-scale">
            {whyChooseCards.map((item, idx) => (
              <div className="cert-why-card" key={idx}>
                <div className="cert-why-icon">{item.icon}</div>
                <div className="cert-why-info">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7: BOTTOM CTA BANNER                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cert-bottom-cta">
        <div className="cert-bottom-cta-inner cert-reveal">
          <div className="cert-bottom-cta-left">
            <span className="cert-cta-kicker">CERTIFIED FOR A BRIGHTER TOMORROW</span>
            <h2>Need Certified Cable Solutions?</h2>
            <p>
              Partner with HITEX PLUS for safe, reliable and high-performance cables that meet global standards.
            </p>
            <div className="cert-cta-btns">
              <button
                className="cert-btn-outline-white"
                onClick={() => alert('Downloading Catalogue...')}
              >
                <Download size={16} /> Download Catalogue
              </button>
              <button
                className="cert-btn-teal"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                }}
              >
                Contact Us <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="cert-bottom-cta-right">
            <div className="cert-cta-badges-column">
              <div className="cert-cta-badge-pill">
                <Shield size={20} color="#38bdf8" />
                <span>Reliable Quality</span>
              </div>
              <div className="cert-cta-badge-pill">
                <Cog size={20} color="#38bdf8" />
                <span>Proven Performance</span>
              </div>
              <div className="cert-cta-badge-pill">
                <Users size={20} color="#38bdf8" />
                <span>A Safer Tomorrow</span>
              </div>
            </div>
            <div className="cert-cta-img-box">
              <img
                src={`${A}cert_crops/cert_cta_graphic.png`}
                alt="HITEX PLUS Cable Solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
