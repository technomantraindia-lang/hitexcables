import React from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  Factory,
  FileText,
  Filter,
  Leaf,
  Phone,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  X
} from 'lucide-react';
import './ProductPage.css';

const A = '/assets/';

const initialProducts = [
  {
    id: 1,
    name: 'House Wires',
    desc: 'Safe & Reliable for Homes',
    category: 'House Wires',
    app: 'Residential',
    cert: 'ISI Certified',
    img: `${A}cable_clean_1.png`,
    details: 'HITEX PLUS House Wires are manufactured with 99.99% pure electrolytic grade copper and high flame-retardant (FR) PVC insulation for maximum safety in residential homes.'
  },
  {
    id: 2,
    name: 'Industrial Cables',
    desc: 'Built for Performance',
    category: 'Industrial Cables',
    app: 'Industrial',
    cert: 'RoHS Compliant',
    img: `${A}cable_clean_2.png`,
    details: 'Heavy duty multi-core PVC/XLPE insulated industrial cables engineered to withstand severe thermal and mechanical stresses in manufacturing plants.'
  },
  {
    id: 3,
    name: 'Control Cables',
    desc: 'Precision & Stability',
    category: 'Control Cables',
    app: 'Industrial',
    cert: 'REACH Compliant',
    img: `${A}cable_clean_3.png`,
    details: 'Designed for control circuits, automation systems, and signal transmission with high shielding efficiency against electromagnetic interference.'
  },
  {
    id: 4,
    name: 'Power Cables',
    desc: 'Strength for Growth',
    category: 'Power Cables',
    app: 'Infrastructure',
    cert: 'CE Certified',
    img: `${A}cable_clean_4.png`,
    details: 'High-voltage armored power cables engineered for underground power distribution, power stations, and heavy utility grid networks.'
  },
  {
    id: 5,
    name: 'Specialty Cables',
    desc: 'For Advanced Needs',
    category: 'Specialty Cables',
    app: 'Commercial',
    cert: 'ISI Certified',
    img: `${A}cable_clean_8.png`,
    details: 'Custom engineered specialty cables designed for extreme temperature, chemical resistance, and special industrial machinery applications.'
  },
  {
    id: 6,
    name: 'Solar Cables',
    desc: 'UV & Weather Resistant',
    category: 'Solar Cables',
    app: 'Renewable Energy',
    cert: 'RoHS Compliant',
    img: `${A}cable_clean_6.png`,
    details: 'Cross-linked solar DC cables engineered for solar PV power systems with high UV, ozone, and extreme weather endurance.'
  },
  {
    id: 7,
    name: 'Submersible Cables',
    desc: 'High Water Resistance',
    category: 'Submersible Cables',
    app: 'Industrial',
    cert: 'ISI Certified',
    img: `${A}cable_clean_7.png`,
    details: '3-Core flat submersible pump cables designed to operate continuously under water in deep tube wells and irrigation pumps.'
  },
  {
    id: 8,
    name: 'Aerial Bunched Cables',
    desc: 'Reliable Distribution',
    category: 'Industrial Cables',
    app: 'Infrastructure',
    cert: 'CE Certified',
    img: `${A}cable_clean_5.png`,
    details: 'Self-supporting insulated aerial bunched cables (ABC) for overhead power lines, eliminating power theft and short circuits.'
  },
  {
    id: 9,
    name: 'Fire Survival Cables',
    desc: 'Safety in Critical Conditions',
    category: 'Specialty Cables',
    app: 'Commercial',
    cert: 'REACH Compliant',
    img: `${A}cable_clean_4.png`,
    details: 'Fire resistant cables designed to maintain electrical circuit integrity during fire hazards in high-rise buildings and hospitals.'
  },
  {
    id: 10,
    name: 'Flexible Cables',
    desc: 'For Dynamic Applications',
    category: 'House Wires',
    app: 'Residential',
    cert: 'ISI Certified',
    img: `${A}cable_clean_3.png`,
    details: 'Multi-strand flexible copper conductors ideal for internal wiring, home appliances, electrical panels, and mobile machinery.'
  },
  {
    id: 11,
    name: 'Instrumentation Cables',
    desc: 'Accurate & Secure',
    category: 'Control Cables',
    app: 'Industrial',
    cert: 'RoHS Compliant',
    img: `${A}cable_clean_2.png`,
    details: 'Pair/Triad instrument cables for precise analog and digital signal communication in process control and oil refineries.'
  },
  {
    id: 12,
    name: 'EV Charging Cables',
    desc: 'Powering a Cleaner Future',
    category: 'Power Cables',
    app: 'Renewable Energy',
    cert: 'CE Certified',
    img: `${A}cable_clean_1.png`,
    details: 'High-current flexible EV charging station cables built with flame retardant compounds and superior thermal stability.'
  }
];

const categories = [
  { name: 'All Products', count: 12 },
  { name: 'House Wires', count: 2 },
  { name: 'Industrial Cables', count: 2 },
  { name: 'Control Cables', count: 2 },
  { name: 'Power Cables', count: 2 },
  { name: 'Specialty Cables', count: 2 },
  { name: 'Solar Cables', count: 1 },
  { name: 'Submersible Cables', count: 1 }
];

const applicationOptions = ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Renewable Energy'];
const certificationOptions = ['ISI Certified', 'RoHS Compliant', 'REACH Compliant', 'CE Certified'];

export default function ProductPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All Products');
  const [selectedApps, setSelectedApps] = React.useState([]);
  const [selectedCerts, setSelectedCerts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('default');
  const [activeModalProduct, setActiveModalProduct] = React.useState(null);

  // IntersectionObserver for reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll('.pp-reveal, .pp-reveal-left, .pp-reveal-right');
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

  const handleAppChange = (app) => {
    setSelectedApps((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const handleCertChange = (cert) => {
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('All Products');
    setSelectedApps([]);
    setSelectedCerts([]);
    setSearchQuery('');
    setSortBy('default');
  };

  // Filter products
  const filteredProducts = initialProducts.filter((p) => {
    // Category filter
    if (selectedCategory !== 'All Products' && p.category !== selectedCategory) {
      return false;
    }
    // Application filter
    if (selectedApps.length > 0 && !selectedApps.includes(p.app)) {
      return false;
    }
    // Certification filter
    if (selectedCerts.length > 0 && !selectedCerts.includes(p.cert)) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return a.id - b.id;
  });

  return (
    <div className="product-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* HERO BANNER SECTION                                                        */}
      {/* -------------------------------------------------------------------------- */}
      <section className="pp-hero-section">
        <div className="pp-container pp-hero-grid">
          <div className="pp-hero-copy pp-reveal-left">
            <nav className="pp-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="pp-crumb-sep">&gt;</span>
              <span className="pp-crumb-current">Products</span>
            </nav>

            <h1 className="pp-hero-title">
              Our <span className="pp-text-cyan">Products</span>
            </h1>
            <h3 className="pp-hero-subtitle">Engineered for Safety. Designed for a Better Tomorrow.</h3>
            <p className="pp-hero-desc">
              Explore our comprehensive range of high-quality wires and cables, designed for residential, commercial, industrial and infrastructure applications.
            </p>

            <div className="pp-hero-badges-strip">
              <div className="pp-hero-badge-item">
                <div className="pp-hero-badge-icon"><Shield size={20} /></div>
                <div className="pp-hero-badge-text">
                  <strong>Superior</strong>
                  <span>Safety</span>
                </div>
              </div>
              <div className="pp-hero-badge-item">
                <div className="pp-hero-badge-icon"><Sparkles size={20} /></div>
                <div className="pp-hero-badge-text">
                  <strong>Advanced</strong>
                  <span>Technology</span>
                </div>
              </div>
              <div className="pp-hero-badge-item">
                <div className="pp-hero-badge-icon"><Award size={20} /></div>
                <div className="pp-hero-badge-text">
                  <strong>Reliable</strong>
                  <span>Performance</span>
                </div>
              </div>
              <div className="pp-hero-badge-item">
                <div className="pp-hero-badge-icon"><Leaf size={20} /></div>
                <div className="pp-hero-badge-text">
                  <strong>Sustainable</strong>
                  <span>Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* MAIN CATALOG & SIDEBAR                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="pp-catalog-section pp-container">
        <aside className="pp-sidebar pp-reveal-left">
          {/* Block 1: Categories */}
          <div className="pp-sidebar-block">
            <h3 className="pp-sidebar-title">Product Categories</h3>
            <div className="pp-categories-list">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    className={`pp-cat-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <span>{cat.name}</span>
                    <span className={`pp-count-badge ${isActive ? 'active' : ''}`}>{cat.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="pp-sidebar-divider" />

          {/* Block 2: Applications */}
          <div className="pp-sidebar-block">
            <h3 className="pp-sidebar-title">Applications</h3>
            <div className="pp-checkbox-group">
              {applicationOptions.map((app) => {
                const checked = selectedApps.includes(app);
                return (
                  <label key={app} className="pp-checkbox-label">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleAppChange(app)}
                    />
                    <span className="pp-custom-box">{checked && <Check size={12} strokeWidth={3} />}</span>
                    <span className="pp-check-text">{app}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <hr className="pp-sidebar-divider" />

          {/* Block 3: Certifications */}
          <div className="pp-sidebar-block">
            <h3 className="pp-sidebar-title">Certifications</h3>
            <div className="pp-checkbox-group">
              {certificationOptions.map((cert) => {
                const checked = selectedCerts.includes(cert);
                return (
                  <label key={cert} className="pp-checkbox-label">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleCertChange(cert)}
                    />
                    <span className="pp-custom-box">{checked && <Check size={12} strokeWidth={3} />}</span>
                    <span className="pp-check-text">{cert}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Reset Button */}
          <button className="pp-reset-btn" onClick={resetFilters}>
            Reset Filters <RotateCcw size={14} />
          </button>
        </aside>

        {/* Right Catalog Stage */}
        <main className="pp-catalog-stage pp-reveal-right">
          {/* Header Bar */}
          <div className="pp-catalog-header-bar">
            <div className="pp-catalog-title-box">
              <span className="pp-eyebrow">OUR PRODUCTS</span>
              <h2 className="pp-catalog-h2">Complete Range of Wires &amp; Cables</h2>
              <div className="pp-title-line"></div>
            </div>

            <div className="pp-catalog-controls">
              {/* Search Box */}
              <div className="pp-search-box">
                <Search size={16} className="pp-search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="pp-clear-search" onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="pp-sort-wrapper">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pp-sort-select"
                >
                  <option value="default">Sort by: Default</option>
                  <option value="name">Sort by: Name (A-Z)</option>
                  <option value="category">Sort by: Category</option>
                </select>
                <ChevronDown size={14} className="pp-select-arrow" />
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          {sortedProducts.length > 0 ? (
            <div className="pp-products-grid">
              {sortedProducts.map((product, idx) => (
                <article
                  key={product.id}
                  className="pp-product-card"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="pp-card-img-box">
                    <img src={product.img} alt={product.name} loading="lazy" />
                  </div>
                  <div className="pp-card-body">
                    <h3 className="pp-card-title">{product.name}</h3>
                    <p className="pp-card-desc">{product.desc}</p>
                    <button
                      className="pp-card-details-btn"
                      onClick={() => setActiveModalProduct(product)}
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="pp-no-results">
              <p>No products match your selected filters.</p>
              <button className="pp-reset-btn-inline" onClick={resetFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* WHY CHOOSE HITEX PLUS SECTION                                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="pp-why-section">
        <div className="pp-container pp-why-grid">
          <div className="pp-why-left pp-reveal-left">
            <span className="pp-eyebrow">WHY CHOOSE HITEX PLUS</span>
            <h2 className="pp-why-h2">Engineered<br />for Every Application</h2>
            <p className="pp-why-desc">
              From homes to industries, from infrastructure to renewable energy — our products are trusted nationwide for their quality, durability, and performance.
            </p>
            <button
              className="pp-download-btn"
              onClick={() => alert('Downloading Product Catalogue...')}
            >
              <Download size={16} /> Download Product Catalogue
            </button>
          </div>

          <div className="pp-why-right pp-reveal-right">
            <div className="pp-benefits-grid">
              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><ShieldCheck size={26} /></div>
                <strong>High Quality<br />Materials</strong>
              </div>

              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><Factory size={26} /></div>
                <strong>Advanced<br />Manufacturing</strong>
              </div>

              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><BadgeCheck size={26} /></div>
                <strong>Strict Quality<br />Control</strong>
              </div>

              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><Shield size={26} /></div>
                <strong>Certified<br />Standards</strong>
              </div>

              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><Boxes size={26} /></div>
                <strong>Wide<br />Product Range</strong>
              </div>

              <div className="pp-benefit-card">
                <div className="pp-benefit-icon"><Clock size={26} /></div>
                <strong>On-Time<br />Delivery</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* NEED ASSISTANCE CTA BANNER                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="pp-cta-section">
        <div className="pp-container pp-cta-inner pp-reveal">
          <div className="pp-cta-left">
            <div className="pp-cta-phone-icon">
              <Phone size={26} color="#005f75" />
            </div>
            <div>
              <h2>Need Assistance or Custom Quotation?</h2>
              <p>Our team is ready to help you find the right cable solution for your needs.</p>
            </div>
          </div>
          <div className="pp-cta-right">
            <a
              href="#contact-us"
              className="pp-cta-touch-btn"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('contact');
              }}
            >
              Get In Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* PRODUCT DETAILS MODAL                                                      */}
      {/* -------------------------------------------------------------------------- */}
      {activeModalProduct && (
        <div className="pp-modal-backdrop" onClick={() => setActiveModalProduct(null)}>
          <div className="pp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pp-modal-close" onClick={() => setActiveModalProduct(null)}>
              <X size={20} />
            </button>

            <div className="pp-modal-grid">
              <div className="pp-modal-img-box">
                <img src={activeModalProduct.img} alt={activeModalProduct.name} />
              </div>
              <div className="pp-modal-content">
                <span className="pp-modal-category">{activeModalProduct.category}</span>
                <h2>{activeModalProduct.name}</h2>
                <p className="pp-modal-desc">{activeModalProduct.details}</p>

                <div className="pp-modal-tags">
                  <div className="pp-modal-tag">
                    <CheckCircle2 size={15} color="#16a34a" /> Application: <strong>{activeModalProduct.app}</strong>
                  </div>
                  <div className="pp-modal-tag">
                    <CheckCircle2 size={15} color="#16a34a" /> Standard: <strong>{activeModalProduct.cert}</strong>
                  </div>
                </div>

                <div className="pp-modal-actions">
                  <a
                    href="#contact-us"
                    className="pp-modal-inquire-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModalProduct(null);
                      if (onNavigate) onNavigate('contact');
                    }}
                  >
                    Inquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
