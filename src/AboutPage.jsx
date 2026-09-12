import React from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  Cpu,
  Factory,
  Globe,
  Globe2,
  HardHat,
  HeartHandshake,
  House,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Play,
  Quote,
  Recycle,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  Users,
  Zap
} from 'lucide-react';
import './AboutPage.css';

const A = '/assets/';

// CountUpNumber Component for Stats
function CountUpNumber({ end, duration = 1800, suffix = '' }) {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  React.useEffect(() => {
    if (!started) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function AboutIndustriesSlider() {
  const items = [
    ['Residential', `${A}residential.png`],
    ['Commercial', `${A}Commercial.png`],
    ['Industrial', `${A}industial.png`],
    ['Hospitals', `${A}Hospitals.png`],
    ['Infrastructure', `${A}Infrastructure.png`],
    ['Data Centers', `${A}data centre.png`]
  ];

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
    <section className="ab-industries-section" id="industries">
      <div className="ab-industries-container">
        <div className="ab-why-header ab-reveal" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="ab-eyebrow" style={{ color: '#008fa8' }}>INDUSTRIES WE SERVE</span>
          <h2 className="ab-title" style={{ margin: '4px 0 0 0' }}>Powering Progress Across Every Sector</h2>
        </div>

        <div
          className="ab-ind-carousel-wrapper ab-reveal-scale"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="ab-ind-arrow prev" onClick={handlePrev} aria-label="Previous sector">
            <ChevronLeft size={22} />
          </button>

          <div className="ab-ind-slider-viewport">
            <div
              className="ab-ind-slider-track"
              style={{
                transform: `translateX(calc(-${translatePercent}% - ${translateGap}px))`
              }}
            >
              {items.map(([t, imgPath]) => (
                <div
                  className="ab-ind-card slider-card-item ab-stagger-item"
                  style={{ flex: `0 0 calc(${100 / cardsToShow}% - ${(20 * (cardsToShow - 1)) / cardsToShow}px)` }}
                  key={t}
                >
                  <img src={imgPath} alt={t} className="ab-ind-card-img" />
                  <div className="ab-ind-card-overlay">
                    <span>{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="ab-ind-arrow next" onClick={handleNext} aria-label="Next sector">
            <ChevronRight size={22} />
          </button>
        </div>

        {maxIndex > 0 && (
          <div className="slider-dots-bar" style={{ marginTop: '28px' }}>
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

export default function AboutPage({ onNavigate }) {
  const [isPlayingIntroVideo, setIsPlayingIntroVideo] = React.useState(false);
  const [isPlayingMfgVideo, setIsPlayingMfgVideo] = React.useState(false);
  const [activeProductIndex, setActiveProductIndex] = React.useState(0);

  // IntersectionObserver for scroll animations (runs ONCE per element)
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.ab-reveal, .ab-reveal-left, .ab-reveal-right, .ab-reveal-scale, .ab-stagger-container'
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

  // Desktop Magnetic Button Effect (max 4px movement)
  React.useEffect(() => {
    if (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches) return;
    const magBtns = document.querySelectorAll('.ab-magnetic-btn');

    const handleMouseMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 0)`;
    };

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
    };

    magBtns.forEach((btn) => {
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      magBtns.forEach((btn) => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="about-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-hero-section">
        <div className="about-container ab-hero-grid">
          <div className="ab-hero-copy">
            <div className="ab-hero-kicker ab-reveal" style={{ transitionDelay: '0ms' }}>RELIABLE TODAY</div>
            <h1 className="ab-hero-h1 ab-reveal" style={{ transitionDelay: '100ms' }}>
              POWERING<br />
              A <span className="ab-text-green">SAFER</span> <span className="ab-text-cyan">TOMORROW</span>
            </h1>
            <p className="ab-hero-desc ab-reveal" style={{ transitionDelay: '200ms' }}>
              High-quality wires and cables engineered for a stronger, safer and more connected world.
            </p>
            <div className="ab-hero-actions ab-reveal" style={{ transitionDelay: '300ms' }}>
              <a
                href="#products"
                className="ab-btn-teal ab-magnetic-btn"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('products');
                }}
              >
                Explore Our Products <ArrowRight size={16} />
              </a>
              <button className="ab-hero-watch-btn" onClick={() => setIsPlayingIntroVideo(true)}>
                <Play size={16} fill="#00b4d8" color="#00b4d8" /> Watch Our Story
              </button>
            </div>

            <div className="ab-hero-chips-row ab-stagger-container">
              <div className="ab-hero-chip ab-stagger-item" style={{ '--stagger-index': 0 }}>
                <div className="ab-hero-chip-icon"><Shield size={20} /></div>
                <div className="ab-hero-chip-text">
                  <strong>Safety First</strong>
                  <small>In Every Connection</small>
                </div>
              </div>
              <div className="ab-hero-chip ab-stagger-item" style={{ '--stagger-index': 1 }}>
                <div className="ab-hero-chip-icon"><Award size={20} /></div>
                <div className="ab-hero-chip-text">
                  <strong>Premium Quality</strong>
                  <small>You Can Trust</small>
                </div>
              </div>
              <div className="ab-hero-chip ab-stagger-item" style={{ '--stagger-index': 2 }}>
                <div className="ab-hero-chip-icon"><Zap size={20} /></div>
                <div className="ab-hero-chip-text">
                  <strong>Advanced Technology</strong>
                  <small>For a Better Tomorrow</small>
                </div>
              </div>
              <div className="ab-hero-chip ab-stagger-item" style={{ '--stagger-index': 3 }}>
                <div className="ab-hero-chip-icon"><Users size={20} /></div>
                <div className="ab-hero-chip-text">
                  <strong>Customer Centric</strong>
                  <small>Always</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. ABOUT US INTRO                                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-intro-section" id="about-intro">
        <div className="about-container">
          <div className="ab-intro-grid">
            <div className="ab-intro-copy ab-reveal-left">
              <span className="ab-eyebrow">ABOUT US</span>
              <h2 className="ab-title">Committed to Quality. <span>Driven by Innovation.</span></h2>
              <div className="ab-line"></div>
              <p className="ab-desc">
                HITEX PLUS is a leading manufacturer of high-quality wires and cables, known for its commitment to safety, reliability and performance. With modern manufacturing facilities and a strong focus on quality control, we deliver products that meet national and international standards.
              </p>
              <button className="ab-btn-outline" onClick={() => { if (onNavigate) onNavigate('intro'); }}>
                Learn More About Us <ArrowRight size={16} />
              </button>
            </div>

            <div className="ab-intro-img-stage ab-reveal-right">
              {isPlayingIntroVideo ? (
                <video
                  src={`${A}factory_tour_video.mp4`}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="ab-intro-video"
                />
              ) : (
                <>
                  <img src={`${A}image 14.jpeg`} alt="HITEX PLUS Manufacturing Plant" />
                  <button className="ab-intro-tour-btn" onClick={() => setIsPlayingIntroVideo(true)}>
                    <Play size={18} fill="#005f75" /> Take a Virtual Tour
                  </button>
                  <div className="ab-intro-vertical-tag">
                    BUILDING CONNECTIONS<br />FOR A BRIGHTER TOMORROW
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className="ab-stats-grid ab-reveal-scale ab-stagger-container">
            <div className="ab-stat-card ab-stagger-item" style={{ '--stagger-index': 0 }}>
              <div className="ab-stat-icon"><CalendarDays size={24} /></div>
              <div className="ab-stat-info">
                <strong><CountUpNumber end={20} suffix="+" /></strong>
                <span>Years of Excellence</span>
              </div>
            </div>
            <div className="ab-stat-card ab-stagger-item" style={{ '--stagger-index': 1 }}>
              <div className="ab-stat-icon"><Users size={24} /></div>
              <div className="ab-stat-info">
                <strong><CountUpNumber end={1000} suffix="+" /></strong>
                <span>Happy Customers</span>
              </div>
            </div>
            <div className="ab-stat-card ab-stagger-item" style={{ '--stagger-index': 2 }}>
              <div className="ab-stat-icon"><Boxes size={24} /></div>
              <div className="ab-stat-info">
                <strong>Wide</strong>
                <span>Product Range</span>
              </div>
            </div>
            <div className="ab-stat-card ab-stagger-item" style={{ '--stagger-index': 3 }}>
              <div className="ab-stat-icon"><Globe size={24} /></div>
              <div className="ab-stat-info">
                <strong>Pan India</strong>
                <span>Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 3. VISION & MISSION SECTION                                                */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-vm-section">
        <div className="ab-vm-grid">
          {/* Left Column: OUR VISION */}
          <div className="ab-vision-col ab-reveal-left">
            <span className="ab-vm-eyebrow">OUR VISION</span>
            <h2 className="ab-vm-h2">
              To Be a Global Leader<br />in Wires &amp; Cables
            </h2>
            <div className="ab-vm-green-line"></div>
            <p className="ab-vm-p">
              To deliver innovative, reliable and sustainable cable solutions that empower progress and create a safer, smarter and more connected world.
            </p>
            <button className="ab-vm-pill-btn" onClick={() => alert('Our Vision Statement')}>
              Our Vision <ArrowRight size={16} />
            </button>
          </div>

          {/* Center Column: Earth Text Overlay with Pulse Glow */}
          <div className="ab-globe-center ab-reveal">
            <div className="ab-globe-glow-aura" />
            <div className="ab-center-earth-text">
              <span className="ab-cet-light">CONNECTING</span>
              <span className="ab-cet-bold">A BRIGHTER</span>
              <span className="ab-cet-bold">TOMORROW</span>
            </div>
          </div>

          {/* Right Column: OUR MISSION */}
          <div className="ab-mission-col ab-reveal-right">
            <span className="ab-vm-eyebrow">OUR MISSION</span>
            <div className="ab-mission-grid ab-stagger-container">
              <div className="ab-mission-col-item ab-stagger-item" style={{ '--stagger-index': 0 }}>
                <div className="ab-mission-icon-circle">
                  <ShieldCheck size={26} strokeWidth={1.8} />
                </div>
                <h4>Ensure Safety</h4>
                <p>Deliver products that<br />meet the highest safety<br />standards.</p>
              </div>
              <div className="ab-mission-col-item ab-stagger-item" style={{ '--stagger-index': 1 }}>
                <div className="ab-mission-icon-circle">
                  <Cog size={26} strokeWidth={1.8} />
                </div>
                <h4>Drive Innovation</h4>
                <p>Adopt advanced<br />technology for superior<br />performance.</p>
              </div>
              <div className="ab-mission-col-item ab-stagger-item" style={{ '--stagger-index': 2 }}>
                <div className="ab-mission-icon-circle">
                  <Layers size={26} strokeWidth={1.8} />
                </div>
                <h4>Create Sustainable<br />Growth</h4>
                <p>Build long-term value<br />for all of our<br />stakeholders.</p>
              </div>
              <div className="ab-mission-col-item ab-stagger-item" style={{ '--stagger-index': 3 }}>
                <div className="ab-mission-icon-circle">
                  <HeartHandshake size={26} strokeWidth={1.8} />
                </div>
                <h4>Customer Focus</h4>
                <p>Deliver excellence<br />through complete trust<br />and service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 4. OUR PRODUCTS RANGE (SIDE-BY-SIDE CAROUSEL)                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-products-section" id="products">
        <div className="ab-products-container">
          <div className="ab-products-carousel-layout">
            {/* Left Column: Heading & CTA */}
            <div className="ab-products-left-col ab-reveal-left">
              <span className="ab-eyebrow">OUR PRODUCTS</span>
              <h2 className="ab-products-h2">
                Engineered for<br />Every Need
              </h2>
              <div className="ab-vm-green-line"></div>
              <p className="ab-products-desc">
                A comprehensive range of wires and cables for residential, commercial, industrial and infrastructure applications.
              </p>
              <button className="ab-products-pill-btn" onClick={() => { if (onNavigate) onNavigate('products'); }}>
                View All Products <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Stage: Carousel Slider */}
            <div className="ab-products-right-stage ab-reveal-right">
              <div className="ab-carousel-wrapper">
                <button
                  className="ab-carousel-arrow prev"
                  onClick={() => setActiveProductIndex((prev) => (prev > 0 ? prev - 1 : 4))}
                  aria-label="Previous product"
                >
                  <ChevronLeft size={22} />
                </button>

                <div className="ab-carousel-cards-grid ab-stagger-container">
                  <div
                    className={`ab-product-card ab-stagger-item ${activeProductIndex === 0 ? 'active-card' : ''}`}
                    style={{ '--stagger-index': 0 }}
                    onClick={() => setActiveProductIndex(0)}
                  >
                    <div className="ab-product-img-box">
                      <img src={`${A}cable_trans_1.png`} alt="House Wires" />
                    </div>
                    <div className="ab-product-card-body">
                      <h4>House Wires</h4>
                      <small>Safe &amp; Reliable</small>
                    </div>
                  </div>

                  <div
                    className={`ab-product-card ab-stagger-item ${activeProductIndex === 1 ? 'active-card' : ''}`}
                    style={{ '--stagger-index': 1 }}
                    onClick={() => setActiveProductIndex(1)}
                  >
                    <div className="ab-product-img-box">
                      <img src={`${A}cable_trans_2.png`} alt="Industrial Cables" />
                    </div>
                    <div className="ab-product-card-body">
                      <h4>Industrial Cables</h4>
                      <small>Built for Performance</small>
                    </div>
                  </div>

                  <div
                    className={`ab-product-card ab-stagger-item ${activeProductIndex === 2 ? 'active-card' : ''}`}
                    style={{ '--stagger-index': 2 }}
                    onClick={() => setActiveProductIndex(2)}
                  >
                    <div className="ab-product-img-box">
                      <img src={`${A}cable_trans_3.png`} alt="Control Cables" />
                    </div>
                    <div className="ab-product-card-body">
                      <h4>Control Cables</h4>
                      <small>Precision &amp; Stability</small>
                    </div>
                  </div>

                  <div
                    className={`ab-product-card ab-stagger-item ${activeProductIndex === 3 ? 'active-card' : ''}`}
                    style={{ '--stagger-index': 3 }}
                    onClick={() => setActiveProductIndex(3)}
                  >
                    <div className="ab-product-img-box">
                      <img src={`${A}cable_trans_4.png`} alt="Power Cables" />
                    </div>
                    <div className="ab-product-card-body">
                      <h4>Power Cables</h4>
                      <small>Strength for Growth</small>
                    </div>
                  </div>

                  <div
                    className={`ab-product-card ab-stagger-item ${activeProductIndex === 4 ? 'active-card' : ''}`}
                    style={{ '--stagger-index': 4 }}
                    onClick={() => setActiveProductIndex(4)}
                  >
                    <div className="ab-product-img-box">
                      <img src={`${A}cable_trans_8.png`} alt="Specialty Cables" />
                    </div>
                    <div className="ab-product-card-body">
                      <h4>Specialty Cables</h4>
                      <small>For Advanced Needs</small>
                    </div>
                  </div>
                </div>

                <button
                  className="ab-carousel-arrow next"
                  onClick={() => setActiveProductIndex((prev) => (prev < 4 ? prev + 1 : 0))}
                  aria-label="Next product"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Carousel Pagination Dots */}
              <div className="ab-carousel-dots">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`ab-dot ${i === activeProductIndex ? 'active' : ''}`}
                    onClick={() => setActiveProductIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 5. WHY CHOOSE HITEX PLUS                                                   */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-why-section" id="why-choose-us">
        <div className="ab-why-container">
          <div className="ab-why-content-wrapper">
            {/* Left Area: Header & 6 Cards Row */}
            <div className="ab-why-left-area ab-reveal-left">
              <div className="ab-why-header-box">
                <span className="ab-why-eyebrow">WHY CHOOSE HITEX PLUS</span>
                <h2 className="ab-why-h2">The Strength Behind Every Connection</h2>
                <div className="ab-why-green-line"></div>
              </div>

              <div className="ab-why-cards-row ab-stagger-container">
                <div className="ab-why-card active ab-stagger-item" style={{ '--stagger-index': 0 }}>
                  <div className="ab-why-card-icon">
                    <Boxes size={28} strokeWidth={1.8} />
                  </div>
                  <span>Premium<br />Raw Materials</span>
                </div>

                <div className="ab-why-card active ab-stagger-item" style={{ '--stagger-index': 1 }}>
                  <div className="ab-why-card-icon">
                    <Factory size={28} strokeWidth={1.8} />
                  </div>
                  <span>Advanced<br />Manufacturing</span>
                </div>

                <div className="ab-why-card ab-stagger-item" style={{ '--stagger-index': 2 }}>
                  <div className="ab-why-card-icon">
                    <ShieldCheck size={28} strokeWidth={1.8} />
                  </div>
                  <span>Strict Quality<br />Control</span>
                </div>

                <div className="ab-why-card ab-stagger-item" style={{ '--stagger-index': 3 }}>
                  <div className="ab-why-card-icon">
                    <BadgeCheck size={28} strokeWidth={1.8} />
                  </div>
                  <span>Certified<br />Standards</span>
                </div>

                <div className="ab-why-card ab-stagger-item" style={{ '--stagger-index': 4 }}>
                  <div className="ab-why-card-icon">
                    <Clock size={28} strokeWidth={1.8} />
                  </div>
                  <span>On-Time<br />Delivery</span>
                </div>

                <div className="ab-why-card ab-stagger-item" style={{ '--stagger-index': 5 }}>
                  <div className="ab-why-card-icon">
                    <Globe size={28} strokeWidth={1.8} />
                  </div>
                  <span>Trusted<br />Nationwide</span>
                </div>
              </div>
            </div>

            {/* Right Area: Slogan Overlay */}
            <div className="ab-why-right-slogan ab-reveal-right">
              <div className="ab-why-slogan-box">
                <div className="ab-slogan-line1">
                  <span className="ab-slogan-navy">MORE </span>
                  <span className="ab-slogan-green">THAN</span>
                </div>
                <div className="ab-slogan-line2">CABLES,</div>
                <div className="ab-slogan-line3">WE BUILD</div>
                <div className="ab-slogan-line4">TRUST.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6. OUR MANUFACTURING                                                       */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-mfg-section" id="infrastructure">
        <div className="about-container ab-mfg-grid">
          <div className="ab-mfg-video-box ab-reveal-left">
            {isPlayingMfgVideo ? (
              <video
                src={`${A}factory_tour_video.mp4`}
                controls
                autoPlay
                loop
                playsInline
                className="ab-mfg-video"
              />
            ) : (
              <>
                <img src={`${A}image 15.jpeg`} alt="HITEX Manufacturing Facility" />
                <button className="ab-mfg-play-btn" onClick={() => setIsPlayingMfgVideo(true)}>
                  <Play size={24} fill="currentColor" />
                </button>
              </>
            )}
          </div>

          <div className="ab-mfg-copy ab-reveal-right">
            <span className="ab-eyebrow">OUR MANUFACTURING</span>
            <h2 className="ab-title">Advanced Facilities <span>for Superior Quality</span></h2>
            <div className="ab-line"></div>
            <p className="ab-desc">
              Our state-of-the-art manufacturing units are equipped with modern machinery and stringent quality testing systems. From raw material selection to final product testing, every step is monitored to ensure excellence.
            </p>
            <ul className="ab-mfg-list ab-stagger-container">
              <li className="ab-stagger-item" style={{ '--stagger-index': 0 }}><CheckCircle2 size={20} className="ab-mfg-check-icon" /> Modern production lines</li>
              <li className="ab-stagger-item" style={{ '--stagger-index': 1 }}><CheckCircle2 size={20} className="ab-mfg-check-icon" /> In-house testing laboratory</li>
              <li className="ab-stagger-item" style={{ '--stagger-index': 2 }}><CheckCircle2 size={20} className="ab-mfg-check-icon" /> Skilled and experienced team</li>
              <li className="ab-stagger-item" style={{ '--stagger-index': 3 }}><CheckCircle2 size={20} className="ab-mfg-check-icon" /> Products as per national &amp; international standards</li>
            </ul>
            <button className="ab-btn-teal" onClick={() => alert('Exploring Infrastructure')}>
              Explore Our Infrastructure <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 6.5 INDUSTRIES WE SERVE - 4 CARD SLIDER                                   */}
      {/* -------------------------------------------------------------------------- */}
      <AboutIndustriesSlider />

      {/* -------------------------------------------------------------------------- */}
      {/* 7. SUSTAINABILITY                                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-eco-section">
        <div className="ab-eco-container">
          <div className="ab-eco-content-grid">
            {/* Left Area: Copy & Badges */}
            <div className="ab-eco-left-area ab-reveal-left">
              <span className="ab-eco-eyebrow">SUSTAINABILITY</span>
              <h2 className="ab-eco-h2">Building a Cleaner,<br />Greener Tomorrow</h2>
              <p className="ab-eco-desc">
                We are committed to sustainable manufacturing practices that reduce environmental impact and conserve resources for future generations.
              </p>

              <div className="ab-eco-badges-row ab-stagger-container">
                <div className="ab-eco-badge-card ab-stagger-item" style={{ '--stagger-index': 0 }}>
                  <div className="ab-eco-badge-circle">
                    <Leaf size={26} color="#16a34a" />
                  </div>
                  <strong>Eco-Friendly</strong>
                  <small>Processes</small>
                </div>

                <div className="ab-eco-badge-card ab-stagger-item" style={{ '--stagger-index': 1 }}>
                  <div className="ab-eco-badge-circle">
                    <Recycle size={26} color="#16a34a" />
                  </div>
                  <strong>Responsible</strong>
                  <small>Resource Use</small>
                </div>

                <div className="ab-eco-badge-card ab-stagger-item" style={{ '--stagger-index': 2 }}>
                  <div className="ab-eco-badge-circle">
                    <Sparkles size={26} color="#16a34a" />
                  </div>
                  <strong>Sustainable</strong>
                  <small>Products</small>
                </div>

                <div className="ab-eco-badge-card ab-stagger-item" style={{ '--stagger-index': 3 }}>
                  <div className="ab-eco-badge-circle">
                    <Globe2 size={26} color="#16a34a" />
                  </div>
                  <strong>A Better</strong>
                  <small>Tomorrow</small>
                </div>
              </div>
            </div>

            {/* Right Area: Slogan */}
            <div className="ab-eco-right-quote ab-reveal-right">
              <span className="ab-quote-light ab-stagger-item" style={{ '--stagger-index': 0 }}>Cleaner</span>
              <span className="ab-quote-bold ab-stagger-item" style={{ '--stagger-index': 1 }}>Greener</span>
              <span className="ab-quote-bold ab-stagger-item" style={{ '--stagger-index': 2 }}>Stronger</span>
              <span className="ab-quote-bold ab-stagger-item" style={{ '--stagger-index': 3 }}>Together</span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 8. CERTIFICATIONS BAR                                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-cert-section">
        <div className="ab-cert-container">
          <div className="ab-cert-bar-grid ab-stagger-container">
            {[
              ['/icons/GEM.png', 'Government eMarketplace'],
              ['/icons/ISO.png', 'ISO 9001'],
              ['/icons/isi 1.png', 'IS 694 licence 7576290'],
              ['/icons/isi 2.png', 'IS 1554 licence 7556589'],
              ['/icons/isi 3.png', 'IS 7098 licence 3656874'],
              ['/icons/GOVT APPROVED.png', 'Government approved'],
            ].map(([src, alt], index) => (
              <React.Fragment key={src}>
                <div className="ab-cert-logo-item ab-stagger-item" style={{ '--stagger-index': index }}>
                  <img className="ab-cert-logo" src={src} alt={alt} />
                </div>
                {index < 5 && <div className="ab-cert-divider" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 9. TESTIMONIALS                                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-testi-section">
        <div className="about-container ab-testi-layout">
          <div className="ab-testi-intro ab-reveal-left">
            <span className="ab-eyebrow">WHAT OUR CLIENTS SAY</span>
            <h2>Trusted by Industries. <span>Valued by Customers.</span></h2>
          </div>

          <article className="ab-testi-card ab-reveal-right">
            <Quote className="ab-testi-quote-mark" size={30} aria-hidden="true" />
            <div className="ab-testi-avatar" aria-hidden="true">
              <HardHat size={42} strokeWidth={1.7} />
            </div>
            <div className="ab-testi-content">
              <p className="ab-testi-quote">
                "HITEX PLUS has been our trusted partner for years. Their product quality, service and commitment to safety are truly commendable."
              </p>
              <div className="ab-testi-author">
                <strong>— Project Head</strong>
                <small>Leading Infrastructure Company</small>
              </div>
            </div>
            <div className="ab-testi-dots" aria-label="Testimonial 1 of 3">
              <span className="active"></span><span></span><span></span>
            </div>
          </article>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 10. BOTTOM CTA                                                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="ab-bottom-cta">
        <div className="ab-bottom-cta-inner ab-reveal">
          <div className="ab-bottom-cta-text ab-reveal-left">
            <h2>LET'S BUILD A SAFER TOMORROW</h2>
            <p>Partner with HITEX PLUS for reliable, high quality wires &amp; cables that keep the world connected.</p>
          </div>
          <div className="ab-bottom-cta-btns ab-reveal-right">
            <button
              className="ab-btn-teal ab-magnetic-btn ab-cta-enquire-btn"
              style={{ background: '#16a34a' }}
              onClick={() => alert('Enquiry form modal')}
            >
              Enquire Now <ArrowRight size={16} />
            </button>
            <button
              className="ab-btn-outline ab-magnetic-btn ab-cta-contact-btn"
              style={{ color: '#ffffff', borderColor: '#ffffff' }}
              onClick={() => { if (onNavigate) onNavigate('contact'); }}
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
