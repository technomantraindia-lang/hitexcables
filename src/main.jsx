import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  Building2,
  Cable,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Factory,
  Headphones,
  House,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  FileText,
  Zap,
  Shield,
  Hospital,
  Landmark,
  Server
} from 'lucide-react';
import './styles.css';

const A = '/assets/';
const img = (n) => `${A}image ${n}.jpeg`;

function Logo({ light = false }) {
  return (
    <img
      className="brand-logo"
      src={`${A}logo tranpect.png`}
      alt="HITEX PLUS Wires & Cables"
      style={light ? { filter: 'brightness(0) invert(1)' } : {}}
    />
  );
}

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-header ${light ? 'light' : ''}`}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      {title && <h2 className="section-title-text">{title}</h2>}
      <div className="title-divider"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Button({ children, outline = false, className = '', ...props }) {
  return (
    <button className={`btn ${outline ? 'outline' : ''} ${className}`} {...props}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);

  const products = [
    ['image 1.jpeg', 'PVC/XLPE Insulated Cables', 'Industrial & Heavy Duty', 'High Thermal Resistance'],
    ['image 21.jpeg', '3 - Core Submersible Flat Cables', 'Submersible Pumps', '100% Water Resistant'],
    ['image 4.jpeg', 'Multi Strand - Multi Core Flexible Cables', 'Wiring & Automation', 'High Flexibility'],
    ['image 2.jpeg', 'House Hold Wires', 'Residential Wiring', 'Flame Retardant (FR)'],
    ['image 21.jpeg', 'Solar Cables', 'Renewable Energy Systems', 'UV & Weather Proof'],
    ['image 3.jpeg', 'As per Specification Cables', 'Custom Applications', 'Engineered to Order']
  ];

  const features = [
    ['Shield of Safety', 'Safe & reliable cables for every need', '/icons/Shield of Safety.png'],
    ['Premium Quality', 'Manufactured with best materials & technology', '/icons/Premium Quality.png'],
    ['Advanced Infrastructure', 'Modern plant with latest machinery', '/icons/Advanced Infrastructure.png'],
    ['Customer Satisfaction', 'Committed to quality & service', '/icons/Customer Satisfaction.png'],
    ['Govt. Approved', 'Certified products that you can trust', '/icons/GOVT APPROVED.png'],
    ['24/7 Support', 'Dedicated expert support always available', '/icons/Support.png']
  ];

  const certs = [
    ['/icons/GEM.png', 'Government eMarketplace', 'GeM'],
    ['/icons/ISO.png', 'ISO 9001:2001 Certified', 'ISO 9001'],
    ['/icons/isi 1.png', 'IS 694 Licence No. 7576290', 'IS 694'],
    ['/icons/isi 2.png', 'IS 1554 Licence No. 7556569', 'IS 1554'],
    ['/icons/isi 3.png', 'IS 7098 Licence No. 3656874', 'IS 7098'],
    ['/icons/GOVT APPROVED.png', 'Govt Approved R. & E Approval', 'GOVT APPROVED']
  ];

  const aboutStats = [
    ['18+', 'Years Experience', CalendarDays, '#16a34a'],
    ['1000+', 'Happy Clients', Users, '#0284c7'],
    ['100+', 'Products', Boxes, '#16a34a'],
    ['Certified', 'Quality', Award, '#0284c7']
  ];

  const whyFeatures = [
    ['High Quality Raw Materials', 'We use 99.99% pure electrolytic grade copper & top virgin PVC compound.', ShieldCheck],
    ['Advanced Technology', 'Manufactured with state-of-the-art German machinery & continuous extrusion lines.', Factory],
    ['Strict Quality Control', 'Every coil undergoes multi-stage electrical & mechanical testing.', CheckCircle2],
    ['Superior Conductivity', 'Low conductor resistance ensures maximum power saving and thermal stability.', Zap],
    ['High Durability & Safety', 'Flame retardant, anti-termite, moisture resistant & long operational life.', Shield]
  ];

  const industries = [
    ['Residential', `${A}residential.png`, House],
    ['Commercial', `${A}Commercial.png`, Building2],
    ['Industrial', `${A}industial.png`, Factory],
    ['Hospitals', `${A}Hospitals.png`, Hospital],
    ['Infrastructure', `${A}Infrastructure.png`, Landmark],
    ['Data Centers', `${A}data centre.png`, Server]
  ];

  const tests = [
    [`${A}Flame Test.png`, 'Flame Test', 'Fire resistance verified.'],
    [`${A}Insulation Test.png`, 'Insulation Test', 'Insulation strength ensured.'],
    [`${A}Voltage Test.png`, 'Voltage Test', 'High voltage withstand check.'],
    [`${A}Conductivity Test.png`, 'Conductivity Test', 'Ensures maximum copper purity.'],
    [`${A}Durability Test.png`, 'Durability Test', 'Built to perform in tough conditions.']
  ];

  const gallery = [7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="app-root">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="header-logo-box">
            <a href="#home">
              <Logo />
            </a>
          </div>
          <div className="header-actions">
            <a className="header-btn red" href="#certificates">
              DOWNLOAD BROCHURE <FileText size={16} />
            </a>
            <a className="header-btn outline" href="#contact-us">
              PARTNER WITH US <ArrowRight size={16} />
            </a>
          </div>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} color="#005f75" /> : <Menu size={24} color="#005f75" />}
          </button>
        </div>
        <div className="nav">
          <nav className={open ? 'show' : ''}>
            {['Home', 'About Us', 'Products', 'Why Choose Us', 'Infrastructure', 'Quality', 'Gallery', 'Contact Us'].map(
              (n, i) => (
                <a
                  key={n}
                  className={i === 0 ? 'active' : ''}
                  href={'#' + n.toLowerCase().replaceAll(' ', '-')}
                  onClick={() => setOpen(false)}
                >
                  {n}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <main>
        {/* Banner Section (Preserved as requested) */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="kicker">SHIELD OF SAFETY</p>
            <h1>
              HITEX PLUS<br />
              <em>WIRES &amp; CABLES</em>
            </h1>
            <p>
              Manufacturing high quality PVC/XLPE insulated wires &amp; cables with latest technology for your homes, industries, agriculture &amp; infrastructure.
            </p>
            <div className="actions">
              <Button>Explore Products</Button>
              <Button outline>Contact Us</Button>
            </div>
          </div>
          <div className="hero-art">
            <img src={img(5)} alt="Hitex Cable Showcase" />
          </div>
        </section>

        {/* Certifications Bar */}
        <section className="cert-strip container" id="certificates">
          <div className="cert-header">
            <h3>CERTIFICATIONS &amp; GOVERNMENT APPROVALS</h3>
          </div>
          <div className="cert-grid">
            {certs.map(([iconPath, d, title]) => (
              <div className="cert-item" key={title}>
                <img src={iconPath} alt={title} className="cert-img" />
              </div>
            ))}
          </div>
        </section>

        {/* Jay Cable / Welcome Section */}
        <section className="about container" id="about-us">
          <div className="about-copy">
            <div className="about-eyebrow">WELCOME TO</div>
            <h2 className="about-heading">JAY CABLE INDUSTRIES</h2>
            <p className="about-description">
              With over 18+ years of excellence, Jay Cable Industries is a trusted name in manufacturing high quality wires &amp; cables. Our commitment to quality, innovation &amp; customer satisfaction has made us a preferred choice across industries.
            </p>
            <div className="about-stats">
              {aboutStats.map(([n, d, IconComp, clr]) => (
                <div key={n} className="stat-item">
                  <IconComp size={28} color={clr} strokeWidth={1.8} />
                  <b>{n}</b>
                  <small>{d}</small>
                </div>
              ))}
            </div>
            <a href="#about-us" className="about-pill-btn">
              Learn More About Us <ArrowRight size={17} />
            </a>
          </div>
          <div className="about-pics">
            <img src={img(14)} alt="Jay Cable Industries factory building" />
            <img src={img(15)} alt="Jay Cable Industries entrance gate" />
          </div>
        </section>

        {/* Features Strip */}
        <section className="feature-strip container">
          <div className="feature-grid">
            {features.map(([t, d, iconPath]) => (
              <div className="feature-card" key={t}>
                <div className="feature-icon-wrapper">
                  <img src={iconPath} alt={t} />
                </div>
                <div className="feature-info">
                  <b>{t}</b>
                  <small>{d}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section container" id="products">
          <SectionHeader
            eyebrow="OUR PRODUCT RANGE"
            title="ENGINEERED FOR SAFETY &amp; EFFICIENCY"
            description="Explore our comprehensive range of high-performance wires and cables crafted for every application."
          />
          <div className="product-cards-grid">
            {products.map(([im, title, category, feature]) => (
              <div className="product-card-item" key={title}>
                <div className="product-badge-tag">{category}</div>
                <div className="product-img-box">
                  <img src={img(im.match(/\d+/)[0])} alt={title} />
                </div>
                <div className="product-info-box">
                  <h3>{title}</h3>
                  <p className="product-feature-tag">
                    <CheckCircle2 size={15} color="#10b981" /> {feature}
                  </p>
                  <a href="#contact-us" className="product-inquire-btn">
                    Inquire Now <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-section" id="why-choose-us">
          <div className="why-container">
            <div className="why-header">
              <h2>WHY HITEX PLUS CABLE?</h2>
              <div className="why-title-line"></div>
            </div>
            <div className="why-layout">
              <div className="why-spacer"></div>
              <div className="why-cards-row">
                {whyFeatures.map(([title, desc, IconComp]) => (
                  <div className="why-card" key={title}>
                    <div className="why-card-icon">
                      <IconComp size={44} strokeWidth={2} />
                    </div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Powering What Matters Most Section */}
        <section className="industries-section" id="applications">
          <div className="industries-container">
            <div className="industries-header">
              <h2>POWERING WHAT MATTERS MOST</h2>
              <div className="industries-title-line"></div>
            </div>
            <div className="industries-cards-grid">
              {industries.map(([t, im, IconComp]) => (
                <div className="industry-card-item" key={t}>
                  <div
                    className="industry-card-bg"
                    style={{ backgroundImage: `url("${im}")` }}
                  ></div>
                  <div className="industry-overlay"></div>
                  <div className="industry-card-content">
                    <div className="industry-icon-badge">
                      <IconComp size={22} strokeWidth={2} />
                    </div>
                    <span className="industry-card-title">{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precision Infrastructure Banner */}
        <section className="precision-banner-section" id="infrastructure">
          <div className="precision-banner-header">
            <h2>BUILT WITH PRECISION</h2>
            <div className="title-divider"></div>
            <p>State-of-the-art manufacturing for superior quality.</p>
          </div>
          <div
            className="precision-banner-hero"
            style={{ backgroundImage: `url("${img(17)}")` }}
          >
            <div className="precision-banner-overlay"></div>
            <div className="precision-banner-stats-grid">
              <div className="precision-banner-stat-card">
                <div className="precision-stat-number">18+</div>
                <div className="precision-stat-title">YEARS OF TRUST</div>
              </div>
              <div className="precision-banner-stat-card">
                <div className="precision-stat-number">100+</div>
                <div className="precision-stat-title">PRODUCTS RANGE</div>
              </div>
              <div className="precision-banner-stat-card">
                <div className="precision-stat-number">2500+</div>
                <div className="precision-stat-title">PROJECTS DELIVERED</div>
              </div>
              <div className="precision-banner-stat-card">
                <div className="precision-stat-number">99.9%</div>
                <div className="precision-stat-title">QUALITY ASSURED</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tested For Real-World Conditions */}
        <section className="testing-section" id="quality">
          <div className="testing-container">
            <div className="testing-header">
              <h2>TESTED FOR REAL-WORLD CONDITIONS</h2>
              <div className="testing-title-line"></div>
            </div>
            <div className="testing-cards-grid">
              {tests.map(([im, t, d]) => (
                <div className="testing-card-item" key={t}>
                  <div className="testing-img-wrapper">
                    <img src={im} alt={t} />
                  </div>
                  <div className="testing-card-body">
                    <h4>{t}</h4>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section" id="gallery">
          <div className="gallery-container">
            <div className="gallery-header">
              <h2>GALLERY</h2>
              <div className="gallery-title-line"></div>
            </div>
            <div className="gallery-photos-grid">
              {gallery.map((n) => (
                <div className="gallery-photo-item" key={n}>
                  <img src={img(n)} alt={`Hitex Cable Facility ${n}`} />
                </div>
              ))}
            </div>
            <div className="gallery-cta-wrapper">
              <button className="gallery-pill-btn">
                View More Photos <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section className="cta-banner-section" id="contact-us">
        <div className="container cta-banner-inner">
          <div className="cta-banner-left">
            <div className="cta-phone-icon">
              <Phone size={26} color="#005f75" />
            </div>
            <div>
              <h2>Need Assistance or Custom Quotation?</h2>
              <p>Our sales and technical support engineers are available to guide your cable requirements.</p>
            </div>
          </div>
          <div className="cta-banner-right">
            <a href="tel:7096567719" className="cta-call-btn">
              Call Us: 7096567719 <Phone size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main-grid container">
          <div className="footer-col-brand">
            <div className="footer-logo-wrapper">
              <img
                className="footer-brand-logo"
                src={`${A}logo tranpect.png`}
                alt="HITEX PLUS Wires & Cables"
              />
            </div>
            <p>
              HITEX PLUS wires &amp; cables are manufactured to ensure maximum conductivity, flame retardancy &amp; lifelong reliability across every project.
            </p>
            <div className="social-links-row">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:jaycableind21@gmail.com" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-col-links">
            <h4>QUICK LINKS</h4>
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#products">Products</a>
            <a href="#infrastructure">Infrastructure</a>
            <a href="#quality">Quality Standards</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-col-links">
            <h4>OUR PRODUCTS</h4>
            <a href="#products">PVC/XLPE Insulated Cables</a>
            <a href="#products">3-Core Submersible Flat Cables</a>
            <a href="#products">Multi Strand Flexible Cables</a>
            <a href="#products">House Hold Wires</a>
            <a href="#products">Solar &amp; Custom Cables</a>
          </div>

          <div className="footer-col-contact">
            <h4>CONTACT US</h4>
            <p><MapPin size={16} /> Khatano no-234, Survey no-64, Chandiyel to Gamji Road, Village-Pasuniya, Ta-Dahegam, Di-Gandhinagar-382433</p>
            <p><Phone size={16} /> +91 70965 67719 / 98252 67719</p>
            <p><Mail size={16} /> jaycableind21@gmail.com</p>
          </div>
        </div>

        <div className="footer-copyright-bar container">
          <span>© 2026 HITEX PLUS WIRES &amp; CABLES. All Rights Reserved.</span>
          <span>Jay Cable Industries • Engineered for Excellence</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
