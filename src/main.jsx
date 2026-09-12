import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  BadgePercent,
  Boxes,
  Building2,
  Cable,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cog,
  Cpu,
  DollarSign,
  Droplet,
  Droplets,
  Factory,
  Feather,
  FileText,
  Flame,
  Headphones,
  Hospital,
  House,
  Instagram,
  Landmark,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Palette,
  Phone,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Sliders,
  Sparkles,
  Sprout,
  Store,
  Sun,
  Truck,
  Users,
  Wrench,
  X,
  Zap
} from 'lucide-react';
import AboutPage from './AboutPage.jsx';
import ProductPage from './ProductPage.jsx';
import TechnologyPage from './TechnologyPage.jsx';
import InfrastructurePage from './InfrastructurePage.jsx';
import CertificationsPage from './CertificationsPage.jsx';
import ApplicationsPage from './ApplicationsPage.jsx';
import ContactUsPage from './ContactUsPage.jsx';
import GalleryPage from './GalleryPage.jsx';
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

function AnimatedCounter({ value }) {
  const [displayValue, setDisplayValue] = React.useState(value);
  const ref = React.useRef(null);
  const animatedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numericMatch = String(value).match(/([0-9.]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const suffix = String(value).replace(numericMatch[0], '');
    const isDecimal = numericMatch[0].includes('.');

    setDisplayValue(isDecimal ? (0).toFixed(1) + suffix : '0' + suffix);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let startTime = null;
            const duration = 1600;

            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = easeOut * targetNum;

              if (isDecimal) {
                setDisplayValue(current.toFixed(1) + suffix);
              } else {
                setDisplayValue(Math.floor(current) + suffix);
              }

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };
            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [currentView, setCurrentView] = React.useState(() => {
    if (window.location.pathname === '/products') return 'products';
    if (window.location.pathname === '/technology') return 'technology';
    if (window.location.pathname === '/infrastructure') return 'infrastructure';
    if (window.location.pathname === '/certifications') return 'certifications';
    if (window.location.pathname === '/applications') return 'applications';
    if (window.location.pathname === '/gallery') return 'gallery';
    if (window.location.pathname === '/contact-us' || window.location.pathname === '/contact') return 'contact';
    return window.location.pathname === '/about' || window.location.hash === '#about-us-page' ? 'about' : 'home';
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (currentView !== 'home') return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
      );

      const targets = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger-item'
      );
      targets.forEach((target) => observer.observe(target));

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [currentView]);

  React.useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/products') {
        setCurrentView('products');
      } else if (window.location.pathname === '/technology') {
        setCurrentView('technology');
      } else if (window.location.pathname === '/infrastructure') {
        setCurrentView('infrastructure');
      } else if (window.location.pathname === '/certifications') {
        setCurrentView('certifications');
      } else if (window.location.pathname === '/applications') {
        setCurrentView('applications');
      } else if (window.location.pathname === '/gallery') {
        setCurrentView('gallery');
      } else if (window.location.pathname === '/contact-us' || window.location.pathname === '/contact') {
        setCurrentView('contact');
      } else if (window.location.pathname === '/about' || window.location.hash === '#about-us-page') {
        setCurrentView('about');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view, targetId = null) => {
    setOpen(false);
    setCurrentView(view);
    if (view === 'products') {
      window.history.pushState({}, '', '/products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'technology') {
      window.history.pushState({}, '', '/technology');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'infrastructure') {
      window.history.pushState({}, '', '/infrastructure');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'certifications') {
      window.history.pushState({}, '', '/certifications');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'applications') {
      window.history.pushState({}, '', '/applications');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'gallery') {
      window.history.pushState({}, '', '/gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'contact') {
      window.history.pushState({}, '', '/contact-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'about') {
      window.history.pushState({}, '', '/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const homeProductCards = [
    {
      num: '01',
      title: 'Household Wires',
      titleHighlight: 'Wires',
      subtitle: 'Reliable Wiring for Every Home',
      tagline: 'Safe. Durable. Everyday Use.',
      badge: 'SAFE HOMES BRIGHTER TOMORROW',
      img: `${A}cable_card_1_hd.png`,
      stats: [
        { icon: ShieldCheck, text: 'Safety Assured' },
        { icon: Award, text: 'High Durability' },
        { icon: Palette, text: 'Multiple Colours' },
        { icon: CheckCircle2, text: 'Trusted Performance' }
      ],
      features: [
        'High Quality Conductor',
        'Flame Retardant Insulation',
        'Available in Various Colours',
        'Long Service Life'
      ],
      applications: [
        { icon: House, label: 'Homes' },
        { icon: Building2, label: 'Offices' },
        { icon: Store, label: 'Shops' },
        { icon: Zap, label: 'General Wiring' }
      ]
    },
    {
      num: '02',
      title: 'Multicore Flexible Cables',
      titleHighlight: 'Flexible Cables',
      subtitle: 'Flexibility for Modern Connections',
      tagline: 'Safe. Flexible. Reliable.',
      badge: 'FLEXIBLE SOLUTIONS FOR A SMARTER WORLD',
      img: `${A}cable_card_2_hd.png`,
      stats: [
        { icon: Zap, text: 'Flexible Design' },
        { icon: Settings, text: 'Easy Installation' },
        { icon: Activity, text: 'High Conductivity' },
        { icon: Clock, text: 'Long Life' }
      ],
      features: [
        'Flexible Copper Conductors',
        'Superior Insulation',
        'Available in Multiple Cores',
        'Excellent Mechanical Strength'
      ],
      applications: [
        { icon: Factory, label: 'Industrial' },
        { icon: Cog, label: 'Machinery' },
        { icon: Sliders, label: 'Control Panels' },
        { icon: Cpu, label: 'Automation' }
      ]
    },
    {
      num: '03',
      title: 'PVC Insulated Cable',
      titleHighlight: 'Insulated Cable',
      subtitle: 'Trusted Power for a Safer Tomorrow',
      tagline: 'Strong Insulation. Reliable Performance.',
      badge: 'POWERING A SAFER TOMORROW',
      img: `${A}cable_card_3_hd.png`,
      stats: [
        { icon: Shield, text: 'High Insulation' },
        { icon: Flame, text: 'Fire Resistant' },
        { icon: CheckCircle2, text: 'Durable & Strong' },
        { icon: Zap, text: 'Safe Power Supply' }
      ],
      features: [
        'Premium PVC Insulation',
        'High Electrical Resistance',
        'Available in Various Sizes',
        'Long Lasting Performance'
      ],
      applications: [
        { icon: House, label: 'Residential' },
        { icon: Building2, label: 'Commercial' },
        { icon: Factory, label: 'Industrial' },
        { icon: Truck, label: 'Heavy Equipment' }
      ]
    },
    {
      num: '04',
      title: 'Copper Armoured Cable',
      titleHighlight: 'Armoured Cable',
      subtitle: 'Strength Beneath the Surface',
      tagline: 'Extra Protection. Unstoppable Power.',
      badge: 'BUILT TO WITHSTAND MORE',
      img: `${A}cable_card_4_hd.png`,
      stats: [
        { icon: ShieldCheck, text: 'Extra Protection' },
        { icon: Zap, text: 'High Load Capacity' },
        { icon: Shield, text: 'Corrosion Resistant' },
        { icon: Clock, text: 'Long Life' }
      ],
      features: [
        'Copper Armouring for Extra Strength',
        'High Current Carrying Capacity',
        'Suitable for Underground Installation',
        'Robust and Durable'
      ],
      applications: [
        { icon: Zap, label: 'Power Distribution' },
        { icon: Factory, label: 'Industrial Plants' },
        { icon: Landmark, label: 'Infrastructure' },
        { icon: Layers, label: 'Underground Wiring' }
      ]
    },
    {
      num: '05',
      title: '1000 Sq.mm Single Core Aluminum Cables',
      titleHighlight: 'Aluminum Cables',
      subtitle: 'Powering Big Projects',
      tagline: 'High Capacity. Maximum Reliability.',
      badge: 'BUILT FOR BIGGER TOMORROW',
      img: `${A}cable_card_5_hd.png`,
      stats: [
        { icon: Zap, text: 'High Capacity' },
        { icon: Feather, text: 'Light Weight' },
        { icon: DollarSign, text: 'Cost Effective' },
        { icon: Building2, text: 'Durable Construction' }
      ],
      features: [
        'Single Core Aluminum Conductor',
        '1000 Sq.mm High Capacity',
        'Excellent Electrical Performance',
        'Ideal for Heavy Duty Applications'
      ],
      applications: [
        { icon: Zap, label: 'Power Transmission' },
        { icon: Factory, label: 'Industrial Projects' },
        { icon: Building2, label: 'Utilities' },
        { icon: Landmark, label: 'Large Infrastructure' }
      ]
    },
    {
      num: '06',
      title: 'Xlpe Cop.Allu Unarm ARM Cables',
      titleHighlight: 'Unarm ARM Cables',
      subtitle: 'Engineered for Higher Performance',
      tagline: 'Advanced Insulation. Maximum Safety.',
      badge: 'ENGINEERED FOR EXCELLENCE',
      img: `${A}cable_card_6_hd.png`,
      stats: [
        { icon: Award, text: 'High Performance' },
        { icon: Flame, text: 'Thermal Stability' },
        { icon: Sun, text: 'Weather Resistant' },
        { icon: Clock, text: 'Long Life' }
      ],
      features: [
        'XLPE Insulation',
        'Copper/Aluminium Conductor',
        'Unarmoured/Armoured Options',
        'High Temperature & Load Capacity'
      ],
      applications: [
        { icon: Zap, label: 'Power Distribution' },
        { icon: Factory, label: 'Industrial Use' },
        { icon: Landmark, label: 'Infrastructure' },
        { icon: Server, label: 'Utility Networks' }
      ]
    },
    {
      num: '07',
      title: 'Armoured / Unarmoured Cables',
      titleHighlight: 'Unarmoured Cables',
      subtitle: 'Built for Every Environment',
      tagline: 'Strength. Safety. Versatility.',
      badge: 'VERSATILE POWER SOLUTIONS',
      img: `${A}cable_card_7_hd.png`,
      stats: [
        { icon: Sliders, text: 'Versatile Options' },
        { icon: ShieldCheck, text: 'High Durability' },
        { icon: Sun, text: 'Weather Resistant' },
        { icon: CheckCircle2, text: 'Reliable Performance' }
      ],
      features: [
        'Available in Armoured & Unarmoured',
        'Suitable for Indoor & Outdoor Use',
        'Multiple Core & Size Options',
        'Strong and Flexible'
      ],
      applications: [
        { icon: Factory, label: 'Industrial' },
        { icon: Building2, label: 'Commercial' },
        { icon: Sun, label: 'Outdoor Installations' },
        { icon: Network, label: 'Distribution Networks' }
      ]
    },
    {
      num: '08',
      title: 'Submersible PVC Flat Cables',
      titleHighlight: 'Flat Cables',
      subtitle: 'Reliable Connections Under Water',
      tagline: 'Water Resistant. Stronger Performance.',
      badge: 'DESIGNED FOR TOUGHER ENVIRONMENTS',
      img: `${A}cable_card_8_hd.png`,
      stats: [
        { icon: Droplets, text: 'Water Resistant' },
        { icon: Zap, text: 'Flexible Design' },
        { icon: Clock, text: 'Long Life' },
        { icon: ShieldCheck, text: 'Safe & Reliable' }
      ],
      features: [
        'Specially Designed for Submersible Use',
        'High Quality PVC Insulation',
        'Available in Multiple Cores',
        'Resistant to Moisture & Chemicals'
      ],
      applications: [
        { icon: Droplet, label: 'Borewell Pumps' },
        { icon: Cog, label: 'Submersible Motors' },
        { icon: Sprout, label: 'Irrigation' },
        { icon: Droplets, label: 'Water Supply Systems' }
      ]
    }
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
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      {/* Header */}
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-top">
          <div className="header-logo-box">
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>
              <Logo />
            </a>
          </div>
          <div className="header-actions">
            <a className="header-btn red" href="#certificates" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'certificates'); }}>
              DOWNLOAD BROCHURE <FileText size={16} />
            </a>
            <a className="header-btn outline" href="#contact-us" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'contact-us'); }}>
              PARTNER WITH US <ArrowRight size={16} />
            </a>
          </div>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} color="#005f75" /> : <Menu size={24} color="#005f75" />}
          </button>
        </div>
        <div className="nav">
          <nav className={open ? 'show' : ''}>
            {['Home', 'About Us', 'Products', 'Technology', 'Applications', 'Certifications', 'Infrastructure', 'Gallery', 'Contact Us'].map(
              (n) => {
                const targetId = n.toLowerCase().replaceAll(' ', '-');
                const isActive = n === 'About Us' ? currentView === 'about' : n === 'Products' ? currentView === 'products' : n === 'Technology' ? currentView === 'technology' : n === 'Applications' ? currentView === 'applications' : n === 'Certifications' ? currentView === 'certifications' : n === 'Infrastructure' ? currentView === 'infrastructure' : n === 'Gallery' ? currentView === 'gallery' : n === 'Contact Us' ? currentView === 'contact' : (currentView === 'home' && n === 'Home');
                return (
                  <a
                    key={n}
                    className={isActive ? 'active' : ''}
                    href={n === 'About Us' ? '/about' : n === 'Products' ? '/products' : n === 'Technology' ? '/technology' : n === 'Applications' ? '/applications' : n === 'Certifications' ? '/certifications' : n === 'Infrastructure' ? '/infrastructure' : n === 'Gallery' ? '/gallery' : n === 'Contact Us' ? '/contact-us' : '#' + targetId}
                    onClick={(e) => {
                      e.preventDefault();
                      if (n === 'Products') {
                        handleNavigate('products');
                      } else if (n === 'Technology') {
                        handleNavigate('technology');
                      } else if (n === 'Applications') {
                        handleNavigate('applications');
                      } else if (n === 'Certifications') {
                        handleNavigate('certifications');
                      } else if (n === 'Infrastructure') {
                        handleNavigate('infrastructure');
                      } else if (n === 'Gallery') {
                        handleNavigate('gallery');
                      } else if (n === 'Contact Us') {
                        handleNavigate('contact');
                      } else if (n === 'About Us') {
                        handleNavigate('about');
                      } else if (n === 'Home') {
                        handleNavigate('home');
                      } else {
                        handleNavigate('home', targetId);
                      }
                    }}
                  >
                    {n}
                  </a>
                );
              }
            )}
          </nav>
        </div>
      </header>

      {currentView === 'gallery' ? (
        <GalleryPage onNavigate={handleNavigate} />
      ) : currentView === 'contact' ? (
        <ContactUsPage onNavigate={handleNavigate} />
      ) : currentView === 'applications' ? (
        <ApplicationsPage onNavigate={handleNavigate} />
      ) : currentView === 'certifications' ? (
        <CertificationsPage onNavigate={handleNavigate} />
      ) : currentView === 'infrastructure' ? (
        <InfrastructurePage onNavigate={handleNavigate} />
      ) : currentView === 'technology' ? (
        <TechnologyPage onNavigate={handleNavigate} />
      ) : currentView === 'products' ? (
        <ProductPage onNavigate={handleNavigate} />
      ) : currentView === 'about' ? (
        <AboutPage onNavigate={(targetId) => handleNavigate('home', targetId)} />
      ) : (
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
                <Button onClick={() => handleNavigate('home', 'products')}>Explore Products</Button>
                <Button outline onClick={() => handleNavigate('home', 'contact-us')}>Contact Us</Button>
              </div>
            </div>
            <div className="hero-art">
              <img src={img(5)} alt="Hitex Cable Showcase" />
            </div>
          </section>

        {/* Certifications Bar */}
        <section className="cert-strip container reveal" id="certificates">
          <div className="cert-header reveal-left">
            <h3>CERTIFICATIONS &amp; GOVERNMENT APPROVALS</h3>
          </div>
          <div className="cert-grid">
            {certs.map(([iconPath, d, title]) => (
              <div className="cert-item reveal-stagger-item" key={title}>
                <img src={iconPath} alt={title} className="cert-img" />
              </div>
            ))}
          </div>
        </section>

        {/* Jay Cable / Welcome Section */}
        <section className="about container" id="about-us">
          <div className="about-copy reveal-left">
            <div className="about-eyebrow">WELCOME TO</div>
            <h2 className="about-heading">JAY CABLE INDUSTRIES</h2>
            <p className="about-description">
              With over 18+ years of excellence, Jay Cable Industries is a trusted name in manufacturing high quality wires &amp; cables. Our commitment to quality, innovation &amp; customer satisfaction has made us a preferred choice across industries.
            </p>
            <div className="about-stats">
              {aboutStats.map(([n, d, IconComp, clr]) => (
                <div key={n} className="stat-item">
                  <IconComp size={28} color={clr} strokeWidth={1.8} />
                  <b><AnimatedCounter value={n} /></b>
                  <small>{d}</small>
                </div>
              ))}
            </div>
            <a href="/about" className="about-pill-btn" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>
              Learn More About Us <ArrowRight size={17} />
            </a>
          </div>
          <div className="about-pics reveal-right">
            <img src={img(14)} alt="Jay Cable Industries factory building" />
            <img src={img(15)} alt="Jay Cable Industries entrance gate" />
          </div>
        </section>

        {/* Features Strip */}
        <section className="feature-strip container reveal">
          <div className="feature-grid">
            {features.map(([t, d, iconPath]) => (
              <div className="feature-card reveal-stagger-item" key={t}>
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
          <div className="reveal">
            <SectionHeader
              eyebrow="OUR PRODUCT RANGE"
              title="ENGINEERED FOR SAFETY &amp; EFFICIENCY"
              description="Explore our comprehensive range of high-performance wires and cables crafted for every application."
            />
          </div>
          <div className="product-cards-grid">
            {homeProductCards.map((card) => {
              const mainTitle = card.title.replace(card.titleHighlight, '');
              return (
                <div className="hd-product-card reveal-stagger-item" key={card.num}>
                  <div className="hd-card-header">
                    <div className="hd-card-top-bar">
                      <span className="hd-card-number">{card.num}</span>
                      <span className="hd-card-badge">{card.badge}</span>
                    </div>
                    <h3 className="hd-card-title">
                      {mainTitle}<span>{card.titleHighlight}</span>
                    </h3>
                    <p className="hd-card-subtitle">{card.subtitle}</p>
                    <p className="hd-card-tagline">{card.tagline}</p>
                  </div>

                  <div className="hd-card-img-box">
                    <img src={card.img} alt={card.title} />
                  </div>

                  <div className="hd-stats-grid">
                    {card.stats.map((st, idx) => {
                      const StatIcon = st.icon;
                      return (
                        <div className="hd-stat-pill" key={idx}>
                          <StatIcon size={14} />
                          <span>{st.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="hd-section-block">
                    <div className="hd-block-title">KEY FEATURES</div>
                    <ul className="hd-features-list">
                      {card.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hd-section-block">
                    <div className="hd-block-title">APPLICATIONS</div>
                    <div className="hd-apps-grid">
                      {card.applications.map((app, idx) => {
                        const AppIcon = app.icon;
                        return (
                          <div className="hd-app-item" key={idx}>
                            <AppIcon size={13} />
                            <span>{app.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <a
                    href="/products"
                    className="hd-card-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate('products');
                    }}
                  >
                    VIEW PRODUCT <ArrowRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-section" id="why-choose-us">
          <div className="why-container">
            <div className="why-header reveal">
              <h2>WHY HITEX PLUS CABLE?</h2>
              <div className="why-title-line"></div>
            </div>
            <div className="why-layout">
              <div className="why-spacer"></div>
              <div className="why-cards-row">
                {whyFeatures.map(([title, desc, IconComp]) => (
                  <div className="why-card reveal-stagger-item" key={title}>
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
            <div className="industries-header reveal">
              <h2>POWERING WHAT MATTERS MOST</h2>
              <div className="industries-title-line"></div>
            </div>
            <div className="industries-cards-grid">
              {industries.map(([t, im, IconComp]) => (
                <div className="industry-card-item reveal-stagger-item" key={t}>
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
          <div className="precision-banner-header reveal">
            <h2>BUILT WITH PRECISION</h2>
            <div className="title-divider"></div>
            <p>State-of-the-art manufacturing for superior quality.</p>
          </div>
          <div
            className="precision-banner-hero reveal-scale"
            style={{ backgroundImage: `url("${img(17)}")` }}
          >
            <div className="precision-banner-overlay"></div>
            <div className="precision-banner-stats-grid">
              <div className="precision-banner-stat-card reveal-stagger-item">
                <div className="precision-stat-number"><AnimatedCounter value="18+" /></div>
                <div className="precision-stat-title">YEARS OF TRUST</div>
              </div>
              <div className="precision-banner-stat-card reveal-stagger-item">
                <div className="precision-stat-number"><AnimatedCounter value="100+" /></div>
                <div className="precision-stat-title">PRODUCTS RANGE</div>
              </div>
              <div className="precision-banner-stat-card reveal-stagger-item">
                <div className="precision-stat-number"><AnimatedCounter value="2500+" /></div>
                <div className="precision-stat-title">PROJECTS DELIVERED</div>
              </div>
              <div className="precision-banner-stat-card reveal-stagger-item">
                <div className="precision-stat-number"><AnimatedCounter value="99.9%" /></div>
                <div className="precision-stat-title">QUALITY ASSURED</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tested For Real-World Conditions */}
        <section className="testing-section" id="quality">
          <div className="testing-container">
            <div className="testing-header reveal">
              <h2>TESTED FOR REAL-WORLD CONDITIONS</h2>
              <div className="testing-title-line"></div>
            </div>
            <div className="testing-cards-grid">
              {tests.map(([im, t, d]) => (
                <div className="testing-card-item reveal-stagger-item" key={t}>
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
            <div className="gallery-header reveal">
              <h2>GALLERY</h2>
              <div className="gallery-title-line"></div>
            </div>
            <div className="gallery-photos-grid">
              {gallery.map((n) => (
                <div className="gallery-photo-item reveal-stagger-item" key={n}>
                  <img src={img(n)} alt={`Hitex Cable Facility ${n}`} />
                </div>
              ))}
            </div>
            <div className="gallery-cta-wrapper reveal">
              <button className="gallery-pill-btn" onClick={() => handleNavigate('gallery')}>
                View More Photos <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-banner-section" id="contact-us">
          <div className="container cta-banner-inner">
            <div className="cta-banner-left reveal-left">
              <div className="cta-phone-icon">
                <Phone size={26} color="#005f75" />
              </div>
              <div>
                <h2>Need Assistance or Custom Quotation?</h2>
                <p>Our sales and technical support engineers are available to guide your cable requirements.</p>
              </div>
            </div>
            <div className="cta-banner-right reveal-right">
              <a href="tel:7096567719" className="cta-call-btn">
                Call Us: 7096567719 <Phone size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    )}

      {/* Footer */}
      <footer className="site-footer reveal">
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
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Home</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About Us</a>
            <a href="/products" onClick={(e) => { e.preventDefault(); handleNavigate('products'); }}>Products</a>
            <a href="/technology" onClick={(e) => { e.preventDefault(); handleNavigate('technology'); }}>Technology</a>
            <a href="#infrastructure" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'infrastructure'); }}>Infrastructure</a>
            <a href="#quality" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'quality'); }}>Quality Standards</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'gallery'); }}>Gallery</a>
          </div>

          <div className="footer-col-links">
            <h4>OUR PRODUCTS</h4>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'products'); }}>PVC/XLPE Insulated Cables</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'products'); }}>3-Core Submersible Flat Cables</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'products'); }}>Multi Strand Flexible Cables</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'products'); }}>House Hold Wires</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'products'); }}>Solar &amp; Custom Cables</a>
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
