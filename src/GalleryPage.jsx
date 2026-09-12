import React from 'react';
import {
  ArrowRight,
  Camera,
  Cog,
  Factory,
  Gem,
  Leaf,
  Maximize2,
  Users,
  X
} from 'lucide-react';
import './GalleryPage.css';

const A = '/assets/gallery_crops/';

export default function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  // IntersectionObserver for reveal animations
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      '.gal-reveal, .gal-reveal-left, .gal-reveal-right, .gal-reveal-scale'
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

  const categories = [
    'All',
    'Manufacturing',
    'Products',
    'Infrastructure',
    'Quality Testing'
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Jay Cable Industries Factory Building',
      category: 'Infrastructure',
      img: '/assets/image 14.jpeg'
    },
    {
      id: 2,
      title: 'Jay Cable Industries Main Entrance',
      category: 'Infrastructure',
      img: '/assets/image 15.jpeg'
    },
    {
      id: 3,
      title: 'Precision Cable Extrusion Line',
      category: 'Manufacturing',
      img: '/assets/image 17.jpeg'
    },
    {
      id: 4,
      title: 'Heavy Duty PVC & XLPE Power Cables',
      category: 'Products',
      img: '/assets/image 1.jpeg'
    },
    {
      id: 5,
      title: '3-Core Submersible Flat Cables',
      category: 'Products',
      img: '/assets/image 21.jpeg'
    },
    {
      id: 6,
      title: 'Multi Strand Flexible Copper Cables',
      category: 'Products',
      img: '/assets/image 4.jpeg'
    },
    {
      id: 7,
      title: 'Flame Retardant Household Wires',
      category: 'Products',
      img: '/assets/image 2.jpeg'
    },
    {
      id: 8,
      title: 'High-Temperature Flame Resistance Test',
      category: 'Quality Testing',
      img: '/assets/Flame Test.png'
    },
    {
      id: 9,
      title: 'Insulation & Dielectric Withstand Test',
      category: 'Quality Testing',
      img: '/assets/Insulation Test.png'
    },
    {
      id: 10,
      title: 'High Voltage Spark & Conductor Test',
      category: 'Quality Testing',
      img: '/assets/Voltage Test.png'
    },
    {
      id: 11,
      title: 'Pure Electrolytic Copper Conductivity Test',
      category: 'Quality Testing',
      img: '/assets/Conductivity Test.png'
    },
    {
      id: 12,
      title: 'Durability & Bending Flexing Test',
      category: 'Quality Testing',
      img: '/assets/Durability Test.png'
    },
    {
      id: 13,
      title: 'Manufacturing Plant Extrusion Floor',
      category: 'Manufacturing',
      img: '/assets/image 6.jpeg'
    },
    {
      id: 14,
      title: 'Advanced Factory Production Line',
      category: 'Manufacturing',
      img: '/assets/image 7.jpeg'
    },
    {
      id: 15,
      title: 'Cable Winding & Coiling Line',
      category: 'Manufacturing',
      img: '/assets/image 8.jpeg'
    },
    {
      id: 16,
      title: 'State-of-the-Art Factory Machinery',
      category: 'Infrastructure',
      img: '/assets/image 9.jpeg'
    },
    {
      id: 17,
      title: 'High Capacity Production Hall',
      category: 'Infrastructure',
      img: '/assets/image 10.jpeg'
    },
    {
      id: 18,
      title: 'Automatic Wire Extruder Unit',
      category: 'Manufacturing',
      img: '/assets/image 11.jpeg'
    },
    {
      id: 19,
      title: 'Factory Operations & Assembly Area',
      category: 'Manufacturing',
      img: '/assets/image 12.jpeg'
    },
    {
      id: 20,
      title: 'Industrial Plant Storage & Logistics',
      category: 'Infrastructure',
      img: '/assets/image 13.jpeg'
    },
    {
      id: 21,
      title: 'HITEX PLUS Quality Assurance Standard',
      category: 'Quality Testing',
      img: '/assets/quality.png'
    },
    {
      id: 22,
      title: 'Pure Copper Conductor Wire Strands',
      category: 'Products',
      img: '/assets/wire image.png'
    }
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gal-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-hero-section">
        <div className="gal-container">
          <div className="gal-hero-content gal-reveal-left">
            <nav className="gal-breadcrumb" aria-label="Breadcrumb">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                }}
              >
                Home
              </a>
              <span className="gal-crumb-sep">&gt;</span>
              <span className="gal-crumb-current">Gallery</span>
            </nav>

            <h1 className="gal-hero-title">Gallery</h1>
            <p className="gal-hero-subtitle">A Closer Look at Our Journey</p>
            <p className="gal-hero-desc">
              Explore our manufacturing process, infrastructure, products and key
              moments that drive our commitment to quality, innovation and a brighter
              tomorrow.
            </p>

            <div className="gal-hero-badges">
              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Camera size={20} />
                </div>
                <span>Real<br />Moments</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Factory size={20} />
                </div>
                <span>Our<br />Infrastructure</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Cog size={20} />
                </div>
                <span>Advanced<br />Technology</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Users size={20} />
                </div>
                <span>People<br />Behind Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2: FILTER TABS STRIP                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-tabs-section">
        <div className="gal-container">
          <div className="gal-tabs-row gal-reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gal-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: PHOTO GALLERY GRID                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-grid-section">
        <div className="gal-container">
          <div className="gal-photos-grid gal-reveal-scale">
            {filteredPhotos.map((photo) => (
              <div
                className="gal-photo-card"
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img src={photo.img} alt={photo.title} />
                <div className="gal-photo-overlay">
                  <div className="gal-zoom-icon">
                    <Maximize2 size={18} />
                  </div>
                  <span>{photo.category}</span>
                  <h4>{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* LIGHTBOX MODAL                                                             */}
      {/* -------------------------------------------------------------------------- */}
      {selectedPhoto && (
        <div
          className="gal-modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="gal-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gal-modal-close-btn"
              onClick={() => setSelectedPhoto(null)}
              title="Close Preview"
            >
              <X size={22} />
            </button>
            <img
              src={selectedPhoto.img}
              alt={selectedPhoto.title}
              className="gal-modal-img"
            />
            <div className="gal-modal-caption">
              <div>
                <h3>{selectedPhoto.title}</h3>
                <p>Category: {selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4: BOTTOM CTA BANNER ("Together for a Brighter Tomorrow")         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-cta-section">
        <div className="gal-container">
          <div className="gal-cta-inner gal-reveal">
            <div className="gal-cta-left">
              <span className="gal-cta-kicker">
                TOGETHER FOR A BRIGHTER TOMORROW
              </span>
              <h2>Reliable Cables for Every Application</h2>
              <p>
                Partner with HITEX PLUS for high-quality, safe and innovative cable
                solutions tailored to your industry.
              </p>
              <button
                className="gal-btn-green"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                }}
              >
                Enquire Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="gal-cta-right-cards">
              <div className="gal-cta-feature-card">
                <div className="gal-cta-card-icon">
                  <Gem size={32} strokeWidth={1.8} />
                </div>
                <span>High Durability</span>
              </div>

              <div className="gal-cta-feature-card">
                <div className="gal-cta-card-icon">
                  <Cog size={32} strokeWidth={1.8} />
                </div>
                <span>Wide Range</span>
              </div>

              <div className="gal-cta-feature-card">
                <div className="gal-cta-card-icon">
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
