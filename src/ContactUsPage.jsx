import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Cog,
  Globe2,
  Headphones,
  HeartHandshake,
  HelpCircle,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  TrendingUp,
  User,
  Users
} from 'lucide-react';
import './ContactUsPage.css';

export default function ContactUsPage({ onNavigate }) {
  const [mapMode, setMapMode] = React.useState('satellite');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // IntersectionObserver for smooth reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.cnt-reveal, .cnt-reveal-left, .cnt-reveal-right, .cnt-reveal-scale'
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required fields (*).');
      return;
    }
    alert(
      `Thank you ${formData.name}! Your message regarding "${formData.subject || 'General Inquiry'}" has been submitted successfully. Our engineering team will contact you shortly.`
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="cnt-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cnt-hero-section page-banner">
        <div className="cnt-container">
          <div className="cnt-hero-content cnt-reveal-left">
            <nav className="cnt-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="cnt-crumb-sep">&gt;</span>
              <span className="cnt-crumb-current">Contact Us</span>
            </nav>

            <h1 className="cnt-hero-title">
              Contact <span className="cnt-highlight">Us</span>
            </h1>
            <p className="cnt-hero-subtitle">
              Let's Build a Stronger Tomorrow, Together.
            </p>
            <p className="cnt-hero-desc">
              We are here to help! Whether you have a query, need a quotation, want to
              know more about our products, or are looking for a partnership opportunity —
              our team is ready to assist you.
            </p>

            <div className="cnt-hero-badges">
              <div className="cnt-hero-badge-item">
                <div className="cnt-badge-icon-wrap">
                  <Headphones size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Quick<br />Response</span>
              </div>

              <div className="cnt-hero-badge-item">
                <div className="cnt-badge-icon-wrap">
                  <Users size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Expert<br />Support</span>
              </div>

              <div className="cnt-hero-badge-item">
                <div className="cnt-badge-icon-wrap">
                  <ShieldCheck size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>Trusted<br />Partnership</span>
              </div>

              <div className="cnt-hero-badge-item">
                <div className="cnt-badge-icon-wrap">
                  <Globe2 size={22} color="#007a5e" strokeWidth={1.8} />
                </div>
                <span>A Stronger<br />Connected World</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: 4 QUICK CONTACT CARDS ROW                                      */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cnt-cards-section">
        <div className="cnt-container">
          <div className="cnt-cards-row cnt-reveal-scale">
            <div className="cnt-info-card">
              <div className="cnt-card-icon-badge">
                <Phone size={24} strokeWidth={1.8} />
              </div>
              <h3>Call Us</h3>
              <p>+91 70965 67719</p>
              <p>+91 98252 67719</p>
            </div>

            <div className="cnt-info-card">
              <div className="cnt-card-icon-badge">
                <Mail size={24} strokeWidth={1.8} />
              </div>
              <h3>E-Mail Us</h3>
              <p><a href="mailto:info@hitexplus.com" style={{ color: "inherit", textDecoration: "none" }}>info@hitexplus.com</a></p>
              <p><a href="mailto:sales@hitexplus.com" style={{ color: "inherit", textDecoration: "none" }}>sales@hitexplus.com</a></p>
            </div>

            <div className="cnt-info-card">
              <div className="cnt-card-icon-badge">
                <MapPin size={24} strokeWidth={1.8} />
              </div>
              <h3>Our Location</h3>
              <p>Khatano no-234, Survey no-64,</p>
              <p>Chandiyel to Gamji Road, Village-Pasuniya, Ta-Dahegam, Gandhinagar - 382433</p>
            </div>

            <div className="cnt-info-card">
              <div className="cnt-card-icon-badge">
                <Clock size={24} strokeWidth={1.8} />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
              <p>
                <strong>Sunday : Closed</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: MAIN CONTACT & LOCATION GRID (FORM + OFFICE/MAP)                */}
      {/* -------------------------------------------------------------------------- */}
      <section className="cnt-main-section">
        <div className="cnt-container">
          <div className="cnt-main-grid">
            {/* LEFT COLUMN: FORM CARD */}
            <div className="cnt-form-card cnt-reveal-left">
              <div className="cnt-form-header">
                <span className="cnt-kicker">GET IN TOUCH</span>
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and our team will get back to you as soon
                  as possible.
                </p>
              </div>

              <form className="cnt-form-body" onSubmit={handleSubmit}>
                <div className="cnt-input-group">
                  <span className="cnt-input-icon">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="cnt-input-field"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cnt-input-group">
                  <span className="cnt-input-icon">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="cnt-input-field"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cnt-input-group">
                  <span className="cnt-input-icon">
                    <Phone size={18} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="cnt-input-field"
                    placeholder="Your Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cnt-input-group">
                  <span className="cnt-input-icon">
                    <HelpCircle size={18} />
                  </span>
                  <select
                    name="subject"
                    className="cnt-select-field"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject *</option>
                    <option value="Product Quotation">Product Quotation</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Dealership & Partnership">
                      Dealership &amp; Partnership
                    </option>
                    <option value="Custom Cable Specification">
                      Custom Cable Specification
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="cnt-textarea-group">
                  <span className="cnt-textarea-icon">
                    <MessageSquare size={18} />
                  </span>
                  <textarea
                    name="message"
                    className="cnt-textarea-field"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="cnt-btn-submit">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: OFFICE & MAP */}
            <div className="cnt-office-card cnt-reveal-right">
              {/* TOP SPLIT: OFFICE INFO & IMAGE */}
              <div className="cnt-office-top-box">
                <div className="cnt-office-info">
                  <h3>Our Office</h3>
                  <h4>Visit Us</h4>
                  <div className="cnt-office-details">
                    <div className="cnt-office-item" style={{ alignItems: 'flex-start' }}>
                      <MapPin size={18} color="#008fa8" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>
                        Khatano no-234, Survey no-64, Chandiyel to Gamji Road, Village-Pasuniya, Ta-Dahegam, Di-Gandhinagar-382433
                      </span>
                    </div>

                    <div className="cnt-office-item">
                      <Phone size={18} color="#008fa8" />
                      <span>+91 70965 67719 / +91 98252 67719</span>
                    </div>

                    <div className="cnt-office-item">
                      <Mail size={18} color="#008fa8" />
                      <span>info@hitexplus.com / sales@hitexplus.com</span>
                    </div>
                  </div>
                </div>

                <div className="cnt-office-img-box">
                  <img
                    src="/assets/image 14.jpeg"
                    alt="HITEX PLUS Factory Building"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* BOTTOM MAP CONTAINER */}
              <div className="cnt-map-box">
                <div className="cnt-map-header-bar">
                  <div className="cnt-map-header-info">
                    <span className="cnt-map-header-tag">Factory Coordinates &bull; 23&deg;01'31.2"N 72&deg;49'47.1"E</span>
                    <strong>Jay Cable Industries (HITEX PLUS)</strong>
                    <small>Chandiyel to Gamji Road, Village-Pasuniya, Ta-Dahegam, Gandhinagar - 382433</small>
                  </div>
                  <div className="cnt-map-actions-row">
                    <div className="cnt-map-mode-pills">
                      <button
                        type="button"
                        className={`cnt-map-toggle-btn ${mapMode === 'satellite' ? 'active' : ''}`}
                        onClick={() => setMapMode('satellite')}
                      >
                        Satellite
                      </button>
                      <button
                        type="button"
                        className={`cnt-map-toggle-btn ${mapMode === 'roadmap' ? 'active' : ''}`}
                        onClick={() => setMapMode('roadmap')}
                      >
                        Map
                      </button>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Jay+Cable+Industries/@23.0257957,72.8295774,18z/data=!4m6!3m5!1s0x395e870afde59a39:0x98f9c1a758da978f!8m2!3d23.0259873!4d72.8298699!16s%2Fg%2F11g8h51qmp?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cnt-map-directions-link"
                    >
                      <Navigation size={14} /> Open in Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <iframe
                  title="Jay Cable Industries Factory Location Map"
                  src={
                    mapMode === 'satellite'
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.9788!2d72.8295774!3d23.0257957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870afde59a39%3A0x98f9c1a758da978f!2sJay%20Cable%20Industries!5e1!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.9788!2d72.8295774!3d23.0257957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870afde59a39%3A0x98f9c1a758da978f!2sJay%20Cable%20Industries!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  }
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
