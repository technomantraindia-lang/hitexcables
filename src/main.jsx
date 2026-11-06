import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  Download,
  ArrowRight,
  Award,
  BadgeCheck,
  BadgePercent,
  Boxes,
  Building2,
  Cable,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  Cpu,
  DollarSign,
  Droplet,
  Droplets,
  Facebook,
  Factory,
  Feather,
  FileText,
  Flame,
  Globe2,
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
import ProductDetailsPage from './ProductDetailsPage.jsx';
import './styles.css';
import './layout-system.css';

const A = '/assets/';
const img = (n) => `${A}image ${n}.jpeg`;

function Logo({ light = false, className = '' }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={`${A}logo tranpect.png`}
      alt="HITEX PLUS Wires & Cables"
      style={light ? { filter: 'brightness(0) invert(1)' } : {}}
    />
  );
}

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-header ${light ? 'light' : ''}`} style={{ textAlign: 'center' }}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      {title && <h2 className="section-title-text" style={{ textAlign: 'center' }}>{title}</h2>}
      <div className="title-divider" style={{ margin: '0 auto 14px' }}></div>
      {description && <p className="section-description" style={{ textAlign: 'center', margin: '0 auto' }}>{description}</p>}
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

function IndustriesSlider({ items }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [cardsToShow, setCardsToShow] = React.useState(4);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const translatePercent = currentIndex * (100 / cardsToShow);
  const translateGap = currentIndex * (20 / cardsToShow);

  return (
    <section className="industries-section" id="applications">
      <div className="industries-container">
        <div className="industries-header-row reveal">
          <div className="industries-header">
            <h2>POWERING WHAT MATTERS MOST</h2>
            <div className="industries-title-line"></div>
          </div>
          <div className="slider-nav-btns">
            <button className="slider-nav-arrow" onClick={handlePrev} aria-label="Previous Slide">
              <ChevronLeft size={22} color="#005f75" />
            </button>
            <button className="slider-nav-arrow" onClick={handleNext} aria-label="Next Slide">
              <ChevronRight size={22} color="#005f75" />
            </button>
          </div>
        </div>

        <div
          className="industries-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="industries-slider-track"
            style={{
              transform: `translateX(calc(-${translatePercent}% - ${translateGap}px))`
            }}
          >
            {items.map(([t, im, IconComp]) => (
              <div
                className="industry-card-item slider-card-item reveal-stagger-item"
                key={t}
                style={{ flex: `0 0 calc(${100 / cardsToShow}% - ${(20 * (cardsToShow - 1)) / cardsToShow}px)` }}
              >
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

        {maxIndex > 0 && (
          <div className="slider-dots-bar">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot-btn ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function GallerySlider({ items, onNavigate }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [cardsToShow, setCardsToShow] = React.useState(4);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const translatePercent = currentIndex * (100 / cardsToShow);
  const translateGap = currentIndex * (20 / cardsToShow);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="industries-header-row reveal">
          <div className="gallery-header" style={{ textAlign: 'left', marginBottom: 0 }}>
            <h2>GALLERY</h2>
            <div className="gallery-title-line" style={{ margin: '6px 0 0 0' }}></div>
          </div>
          <div className="slider-nav-btns">
            <button className="slider-nav-arrow" onClick={handlePrev} aria-label="Previous Gallery Photo">
              <ChevronLeft size={22} color="#005f75" />
            </button>
            <button className="slider-nav-arrow" onClick={handleNext} aria-label="Next Gallery Photo">
              <ChevronRight size={22} color="#005f75" />
            </button>
          </div>
        </div>

        <div
          className="industries-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="industries-slider-track"
            style={{
              transform: `translateX(calc(-${translatePercent}% - ${translateGap}px))`
            }}
          >
            {items.map((n) => (
              <div
                className="gallery-photo-item slider-card-item reveal-stagger-item"
                key={n}
                style={{ flex: `0 0 calc(${100 / cardsToShow}% - ${(20 * (cardsToShow - 1)) / cardsToShow}px)` }}
              >
                <img src={img(n)} alt={`Hitex Cable Facility ${n}`} />
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="slider-dots-bar">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot-btn ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="gallery-cta-wrapper reveal" style={{ marginTop: '28px' }}>
          <button className="gallery-pill-btn" onClick={() => onNavigate('gallery')}>
            View More Photos <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [headerVisible, setHeaderVisible] = React.useState(true);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [selectedProductId, setSelectedProductId] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('product') || params.get('id') || 'house-wires';
    }
    return 'house-wires';
  });
  const [currentView, setCurrentView] = React.useState(() => {
    if (window.location.pathname === '/product-details' || window.location.pathname === '/product-detail') return 'product-details';
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
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentY / totalHeight) * 100);
      }

      if (currentY <= 30) {
        setHeaderVisible(true);
        lastY = currentY;
      } else {
        const diff = currentY - lastY;
        if (Math.abs(diff) > 8) {
          if (diff > 0 && currentY > 100) {
            // Scrolling DOWN -> hide header
            setHeaderVisible(false);
          } else if (diff < 0) {
            // Scrolling UP -> reveal header
            setHeaderVisible(true);
          }
          lastY = currentY;
        }
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
      if (window.location.pathname === '/product-details' || window.location.pathname === '/product-detail') {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('product') || params.get('id');
        if (p) setSelectedProductId(p);
        setCurrentView('product-details');
      } else if (window.location.pathname === '/products') {
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
    setHeaderVisible(true);
    setCurrentView(view);
    if (view === 'product-details') {
      const prodId = targetId || selectedProductId || 'house-wires';
      setSelectedProductId(prodId);
      window.history.pushState({}, '', `/product-details?product=${prodId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'products') {
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
      img: `${A}household_wires.jpeg`,
      stats: [
        { icon: ShieldCheck, text: 'Safety Assured' },
        { icon: Award, text: 'High Durability' },
        { icon: Palette, text: 'Multiple Colours' },
        { icon: CheckCircle2, text: 'Trusted Performance' }
      ],
      features: [
        'Available Sizes: 0.5 sq. mm to 95.0 sq. mm',
        'High Quality Pure Copper Conductor',
        'Flame Retardant (FR) Insulation',
        'Long Service Life & Energy Efficient'
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
      img: `${A}multicore_flexible_cable.jpg`,
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
      img: `${A}pvc_insulated_cable.jpg`,
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
      title: 'XLPE Aluminium/Copper Armoured Cable',
      titleHighlight: 'Armoured Cable',
      subtitle: 'Strength Beneath the Surface',
      tagline: 'Extra Protection. Unstoppable Power.',
      badge: 'BUILT TO WITHSTAND MORE',
      img: `${A}copper_armoured_cable.jpg`,
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
      img: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
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
      title: 'Unarmoured Cables',
      titleHighlight: 'Cables',
      subtitle: 'Built for Every Environment',
      tagline: 'Strength. Safety. Versatility.',
      badge: 'VERSATILE POWER SOLUTIONS',
      img: `${A}unarmoured_cables.jpg`,
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
      num: '07',
      title: 'Cop.Allu Unarm ARM Cables',
      titleHighlight: 'Unarm ARM Cables',
      subtitle: 'Engineered for Higher Performance',
      tagline: 'Advanced Insulation. Maximum Safety.',
      badge: 'ENGINEERED FOR EXCELLENCE',
      img: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
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
      num: '08',
      title: 'Solar DC Cable',
      titleHighlight: 'DC Cable',
      subtitle: 'Powering Renewable Energy',
      tagline: 'UV & Weather Resistant. Maximum Efficiency.',
      badge: 'ENGINEERED FOR SOLAR SYSTEMS',
      img: `${A}solar_cables_dc.jpg`,
      stats: [
        { icon: Sun, text: 'UV & Ozone Proof' },
        { icon: Zap, text: 'Low Power Loss' },
        { icon: ShieldCheck, text: 'Flame Retardant' },
        { icon: Clock, text: '25+ Years Life' }
      ],
      features: [
        'Tinned Copper Conductor for Anti-Corrosion',
        'Cross-Linked (XLPO) Insulation & Sheath',
        'High UV, Ozone & Weather Endurance',
        'Rated for 1.5 kV DC High Efficiency'
      ],
      applications: [
        { icon: Sun, label: 'Solar Rooftop & Farms' },
        { icon: Zap, label: 'Inverter Connections' },
        { icon: Building2, label: 'Commercial Solar' },
        { icon: Landmark, label: 'Renewable Grids' }
      ]
    }
  ];

  const features = [
    ['Shield of Safety', 'Safe & reliable cables for every need', '/icons/Shield of Safety.png'],
    ['Premium Quality', 'Manufactured with best materials & technology', '/icons/Premium Quality.png'],
    ['Advanced Infrastructure', 'Modern plant with latest machinery', '/icons/Advanced Infrastructure.png'],
    ['Customer Satisfaction', 'Committed to quality & service', '/icons/Customer Satisfaction.png'],
    ['Govt. Approved', 'Certified products you can trust', '/icons/GOVT APPROVED.png']
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
      <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${!headerVisible && !open ? 'header-hidden' : 'header-visible'}`}>
        <div className="header-top">
          <div className="header-logo-box">
            <a href="/" onClick={(e) => { e.preventDefault(); setOpen(false); handleNavigate('home'); }}>
              <Logo className="header-brand-logo" />
            </a>
          </div>
          <div className="header-actions">
            <a
              className="header-btn red"
              href="/HITEX_PLUS_Catalogue.pdf"
              download="HITEX_PLUS_Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD BROCHURE <FileText size={16} />
            </a>
            <a className="header-btn outline" href="#contact-us" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'contact-us'); }}>
              PARTNER WITH US <ArrowRight size={16} />
            </a>
          </div>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={26} color="#005f75" /> : <Menu size={26} color="#005f75" />}
          </button>
        </div>
        <div className={`nav ${open ? 'nav-open' : ''}`}>
          <nav className={open ? 'show' : ''}>
            {['Home', 'About Us', 'Products', 'Product Details', 'Technology', 'Applications', 'Certifications', 'Infrastructure', 'Gallery', 'Contact Us'].map(
              (n) => {
                const targetId = n.toLowerCase().replaceAll(' ', '-');
                const isActive = n === 'Product Details' ? currentView === 'product-details' : n === 'About Us' ? currentView === 'about' : n === 'Products' ? currentView === 'products' : n === 'Technology' ? currentView === 'technology' : n === 'Applications' ? currentView === 'applications' : n === 'Certifications' ? currentView === 'certifications' : n === 'Infrastructure' ? currentView === 'infrastructure' : n === 'Gallery' ? currentView === 'gallery' : n === 'Contact Us' ? currentView === 'contact' : (currentView === 'home' && n === 'Home');
                return (
                  <a
                    key={n}
                    className={isActive ? 'active' : ''}
                    href={n === 'Product Details' ? '/product-details' : n === 'About Us' ? '/about' : n === 'Products' ? '/products' : n === 'Technology' ? '/technology' : n === 'Applications' ? '/applications' : n === 'Certifications' ? '/certifications' : n === 'Infrastructure' ? '/infrastructure' : n === 'Gallery' ? '/gallery' : n === 'Contact Us' ? '/contact-us' : '#' + targetId}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      if (n === 'Product Details') {
                        handleNavigate('product-details');
                      } else if (n === 'Products') {
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
                    <span>{n}</span>
                    <ArrowRight size={14} className="mobile-nav-arrow" />
                  </a>
                );
              }
            )}
            <div className="mobile-nav-actions">
              <a
                className="mobile-nav-btn red"
                href="/HITEX_PLUS_Catalogue.pdf"
                download="HITEX_PLUS_Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                DOWNLOAD BROCHURE <FileText size={16} />
              </a>
              <a
                className="mobile-nav-btn outline"
                href="#contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  handleNavigate('contact');
                }}
              >
                PARTNER WITH US <ArrowRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {currentView === 'product-details' ? (
        <ProductDetailsPage
          productId={selectedProductId}
          onNavigate={handleNavigate}
          onSelectProduct={(id) => {
            setSelectedProductId(id);
            window.history.pushState({}, '', `/product-details?product=${id}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentView === 'gallery' ? (
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
          {/* Homepage hero */}
          <section className="hero" id="home">
            <div className="hero-energy" aria-hidden="true">
              <span className="hero-orb hero-orb-1" />
              <span className="hero-orb hero-orb-2" />
              <span className="hero-cable-line" />
            </div>
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

        {/* Certifications & trust */}
        <section className="cert-strip container reveal" id="certificates">
          <div className="cert-header reveal-left">
            <span className="section-eyebrow">CERTIFIED EXCELLENCE</span>
            <h2>Built on Standards. Trusted for Quality.</h2>
            <p>HITEX PLUS is committed to quality, safety and manufacturing standards at every stage.</p>
          </div>
          <div className="cert-marquee">
            <div className="cert-marquee-track">
              {[...certs, ...certs].map(([iconPath, d, title], idx) => (
                <div className="cert-item" key={`${title}-${idx}`}>
                  <img src={iconPath} alt={d} className="cert-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jay Cable / Welcome Section */}
        <section className="about container" id="about-us">
          <div className="about-copy reveal-left">
            <div className="about-eyebrow">ABOUT US</div>
            <h2 className="about-heading">JAY CABLE INDUSTRIES <span>(HITEX PLUS)</span></h2>
            <p className="about-description">
              For over 25 years, Jay Cable Industries has manufactured and exported high-quality electrical cables from our state-of-the-art facility in Kathwada GIDC, Ahmedabad. Our mission has always been simple: deliver dependable products that perform consistently, every time.
            </p>
            <p className="about-description" style={{ marginTop: '8px', marginBottom: '12px' }}>
              Under our <strong>HITEX PLUS</strong> brand, we offer a comprehensive range of LT PVC and XLPE cables in copper and aluminium, including:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '13.5px', color: '#334155', fontWeight: 600 }}>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> LT-PVC/XLPE Armoured/Unarmoured</li>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> Power/Control Cables</li>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> Submersible Flat</li>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> Multi core Flexibles</li>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> House wires (0.5 to 95.0 sq. mm)</li>
              <li><span style={{ color: '#008fa8', marginRight: '6px' }}>✔</span> Solar DC Cable</li>
            </ul>
            <p className="about-description" style={{ marginTop: '10px', fontSize: '14px', lineHeight: 1.6 }}>
              Every product is manufactured to national and international standards and tested for safety, durability, and performance.
            </p>
            <div className="about-stats" style={{ marginTop: '18px' }}>
              <div className="stat-item">
                <b>25+</b>
                <small>Years of experience</small>
              </div>
              <div className="stat-item">
                <b>5000+</b>
                <small>Satisfied customers</small>
              </div>
              <div className="stat-item">
                <b>150+</b>
                <small>Product variants</small>
              </div>
              <div className="stat-item">
                <b>12+</b>
                <small>Countries exported to</small>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '22px' }}>
              <a href="/about" className="about-pill-btn" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>
                Learn More About Us <ArrowRight size={17} />
              </a>
              <a
                href="/HITEX PLUS CATALOG-NEW.pdf"
                download="HITEX_PLUS_Catalogue.pdf"
                className="about-pill-btn secondary"
                style={{ background: 'transparent', color: '#005f75', border: '1.5px solid #005f75', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={16} /> Download Catalogue
              </a>
            </div>
          </div>
          <div className="about-pics reveal-right">
            <img
              src={img(14)}
              alt="Jay Cable Industries factory building"
              className="about-pic-factory"
              loading="lazy"
            />
          </div>
        </section>

        {/* Core capabilities */}
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
                <ArrowRight className="feature-arrow" size={17} aria-hidden="true" />
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
              const mainTitle = card.title.replace(card.titleHighlight, '').trim();
              return (
                <div className="hd-product-card reveal-stagger-item" key={card.num}>
                  <div className="hd-card-header">
                    <div className="hd-card-top-bar">
                      <span className="hd-card-number">{card.num}</span>
                      <span className="hd-card-badge">{card.badge}</span>
                    </div>
                    <h3 className="hd-card-title">
                      {mainTitle}{' '}<span>{card.titleHighlight}</span>
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

                  {(() => {
                    const homeCardSlugMap = {
                      '01': 'house-wires',
                      '02': 'flexible-cables',
                      '03': 'industrial-cables',
                      '04': 'xlpe-armoured-cable',
                      '05': 'specialty-cables',
                      '06': 'industrial-cables',
                      '07': 'fire-survival-cables',
                      '08': 'solar-dc-cable'
                    };
                    const targetProductSlug = homeCardSlugMap[card.num] || 'house-wires';
                    return (
                      <a
                        href={`/product-details?product=${targetProductSlug}`}
                        className="hd-card-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate('product-details', targetProductSlug);
                        }}
                      >
                        VIEW PRODUCT <ArrowRight size={15} />
                      </a>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why choose HITEX PLUS */}
        <section className="why-section" id="why-choose-us">
          <div className="why-container">
            <div className="why-layout">
              <div className="why-visual-column reveal-left">
                <div className="why-visual why-reference-panel">
                  <img src={`${A}home-why-jay-cable-facility.jpeg`} alt="Jay Cable Industries manufacturing facility" loading="lazy" />
                  <div className="why-visual-badge"><Factory size={20} /><span>QUALITY-LED<br />MANUFACTURING</span></div>
                </div>
                <div className="why-presence-panel" aria-label="Product range and nationwide presence">
                  <div className="why-presence-item">
                    <div className="why-presence-icon"><Boxes size={29} strokeWidth={2.1} /></div>
                    <div><strong>Wide</strong><span>Product Range</span></div>
                  </div>
                  <div className="why-presence-divider" aria-hidden="true"></div>
                  <div className="why-presence-item">
                    <div className="why-presence-icon"><Globe2 size={29} strokeWidth={2.1} /></div>
                    <div><strong>Pan India</strong><span>Presence</span></div>
                  </div>
                </div>
              </div>
              <div className="why-content">
                <div className="section-eyebrow">WHY HITEX PLUS</div>
                <h2>Engineered for Reliability.<br />Built to Perform.</h2>
                <p className="why-intro">Built on disciplined processes, dependable materials and a commitment to consistent performance.</p>
                <div className="why-feature-list">
                {whyFeatures.map(([title, desc, IconComp]) => (
                  <div className="why-card reveal-stagger-item" key={title}>
                    <div className="why-card-icon">
                      <IconComp size={21} strokeWidth={2} />
                    </div>
                    <div className="why-card-text">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powering What Matters Most Section - 4 Card Slider */}
        <IndustriesSlider items={industries} />

        {/* Precision Infrastructure Banner */}
        <section className="precision-banner-section" id="infrastructure">
          <div className="precision-banner-header reveal" style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center' }}>BUILT WITH PRECISION</h2>
            <div className="title-divider" style={{ margin: '0 auto 14px' }}></div>
            <p style={{ textAlign: 'center', margin: '0 auto', display: 'block' }}>State-of-the-art manufacturing for superior quality.</p>
          </div>
          <div
            className="precision-banner-hero reveal-scale"
            style={{ backgroundImage: `url("${img(17)}")` }}
          >
            <div className="precision-banner-overlay"></div>
            <div className="precision-banner-copy">
              <span>MANUFACTURING EXCELLENCE</span>
              <h3>Precision in every metre.</h3>
              <p>Modern processes and uncompromising checks shape every HITEX PLUS cable.</p>
            </div>
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

        {/* Gallery 4-Card Slider */}
        <GallerySlider items={gallery} onNavigate={handleNavigate} />

        {/* CTA Banner */}
        <section className="cta-banner-section" id="contact-us">
          <div className="container cta-banner-inner">
            <div className="cta-banner-left reveal-left">
              <div>
                <span className="cta-eyebrow">LET'S BUILD WITH CONFIDENCE</span>
                <h2>Need Reliable Wires &amp; Cables for Your Next Project?</h2>
                <p>Our sales and technical support engineers are available to guide your cable requirements.</p>
              </div>
            </div>
            <div className="cta-banner-right reveal-right">
              <button className="cta-quote-btn" onClick={() => handleNavigate('contact')}>
                Get in Touch <ArrowRight size={17} />
              </button>
              <a href="tel:+917096567719" className="cta-call-btn">
                <Phone size={17} /> Call Us: +91 70965 67719
              </a>
            </div>
          </div>
        </section>
      </main>
    )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main-grid container">
          <div className="footer-col-brand">
            <div className="footer-logo-wrapper">
              <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>
                <Logo />
              </a>
            </div>
            <p>
              HITEX PLUS wires &amp; cables are manufactured to ensure maximum conductivity, flame retardancy &amp; lifelong reliability across every project.
            </p>
            <div className="social-links-row">
              <a
                href="https://www.instagram.com/hitexplus_wires/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558501508095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col-links">
            <h4>QUICK LINKS</h4>
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Home</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About Us</a>
            <a href="/products" onClick={(e) => { e.preventDefault(); handleNavigate('products'); }}>Products</a>
            <a href="/technology" onClick={(e) => { e.preventDefault(); handleNavigate('technology'); }}>Technology</a>
            <a href="/infrastructure" onClick={(e) => { e.preventDefault(); handleNavigate('infrastructure'); }}>Infrastructure</a>
            <a href="/certifications" onClick={(e) => { e.preventDefault(); handleNavigate('certifications'); }}>Certifications</a>
            <a href="/gallery" onClick={(e) => { e.preventDefault(); handleNavigate('gallery'); }}>Gallery</a>
          </div>

          <div className="footer-col-links">
            <h4>OUR PRODUCTS</h4>
            <a href="/product-details?product=industrial-cables" onClick={(e) => { e.preventDefault(); handleNavigate('product-details', 'industrial-cables'); }}>PVC/XLPE Insulated Cables</a>
            <a href="/product-details?product=submersible-cables" onClick={(e) => { e.preventDefault(); handleNavigate('product-details', 'submersible-cables'); }}>3-Core Submersible Flat Cables</a>
            <a href="/product-details?product=flexible-cables" onClick={(e) => { e.preventDefault(); handleNavigate('product-details', 'flexible-cables'); }}>Multi Strand Flexible Cables</a>
            <a href="/product-details?product=house-wires" onClick={(e) => { e.preventDefault(); handleNavigate('product-details', 'house-wires'); }}>House Hold Wires</a>
            <a href="/product-details?product=solar-dc-cable" onClick={(e) => { e.preventDefault(); handleNavigate('product-details', 'solar-dc-cable'); }}>Solar &amp; Custom Cables</a>
          </div>

          <div className="footer-col-contact">
            <h4>CONTACT US</h4>
            <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} /> <span>Jay Cable Industries, Khata no-234, Survey no-64, Chandiyel to Gamji Road, Village-Pasuniya, Ta-Dahegam, Di-Gandhinagar-382433</span></p>
            <p><Phone size={16} /> +91 70965 67719 / 98252 67719</p>
            <p><Mail size={16} /> <a href="mailto:info@hitexplus.com" style={{ color: "inherit", textDecoration: "none" }}>info@hitexplus.com</a></p>
          </div>
        </div>

        <div className="footer-copyright-bar container">
          <span>© {new Date().getFullYear()} HITEX PLUS WIRES &amp; CABLES. All Rights Reserved.</span>
          <span>
            Design By{' '}
            <a
              href="https://technomantra.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Techno Mantra India
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
