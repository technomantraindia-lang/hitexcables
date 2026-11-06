import React from 'react';
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Cog,
  Factory,
  Film,
  Gem,
  Leaf,
  Maximize2,
  Play,
  ShieldCheck,
  Users,
  Video,
  X
} from 'lucide-react';
import './GalleryPage.css';

export default function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedItem, setSelectedItem] = React.useState(null);

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
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const categories = [
    'All',
    'Videos',
    'Photos',
    'Manufacturing',
    'Products',
    'Infrastructure',
    'Quality Testing',
    'Applications'
  ];

  const galleryItems = [
    /* ==========================================================================
       1. FACTORY & PRODUCTION VIDEOS (21 VIDEOS)
       ========================================================================== */
    {
      id: 'v1',
      type: 'video',
      title: 'Cable Extrusion Process - High Speed Modern Line',
      category: 'Manufacturing',
      src: '/assets/videos/video_1.mp4'
    },
    {
      id: 'v2',
      type: 'video',
      title: 'Wire Twisting & Stranding Machinery in Action',
      category: 'Manufacturing',
      src: '/assets/videos/video_2.mp4'
    },
    {
      id: 'v3',
      type: 'video',
      title: 'Multi-Core Cable Jacketing & Sheathing Line',
      category: 'Manufacturing',
      src: '/assets/videos/video_3.mp4'
    },
    {
      id: 'v4',
      type: 'video',
      title: 'Automated Coiling, Cutting & Packaging Unit',
      category: 'Manufacturing',
      src: '/assets/videos/video_4.mp4'
    },
    {
      id: 'v5',
      type: 'video',
      title: 'Comprehensive Hitex Cable Factory Floor Tour',
      category: 'Infrastructure',
      src: '/assets/videos/video_5.mp4'
    },

    {
      id: 'v-clip1',
      type: 'video',
      title: 'Copper Conductor Wire Drawing & Annealing Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_1.mp4'
    },
    {
      id: 'v-clip2',
      type: 'video',
      title: 'Precision High-Speed Wire Bunching Machine',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_2.mp4'
    },
    {
      id: 'v-clip3',
      type: 'video',
      title: 'Continuous High-Speed Extrusion & Cooling Trough',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_3.mp4'
    },
    {
      id: 'v-clip4',
      type: 'video',
      title: 'Multi-Layer Cable Insulation Extruder Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_4.mp4'
    },
    {
      id: 'v-clip5',
      type: 'video',
      title: 'Industrial Cable Armor Stranding & Helical Wire Feed',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_5.mp4'
    },
    {
      id: 'v-clip6',
      type: 'video',
      title: 'Outer PVC Compound Sheathing & Jacketing Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_6.mp4'
    },
    {
      id: 'v-clip7',
      type: 'video',
      title: 'High-Speed Automated Extruder & In-Line Laser Diameter Gauge',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_7.mp4'
    },
    {
      id: 'v-clip8',
      type: 'video',
      title: 'Automatic Cable Length Metering & Inkjet Marking Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_8.mp4'
    },
    {
      id: 'v-clip9',
      type: 'video',
      title: 'Heavy Duty Cable Winding on Industrial Spools',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_9.mp4'
    },
    {
      id: 'v-clip10',
      type: 'video',
      title: 'Heavy Duty Wooden & Steel Drum Winding Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_10.mp4'
    },
    {
      id: 'v-clip11',
      type: 'video',
      title: 'Automated Coil Shrink Wrapping & Packaging Line',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_11.mp4'
    },
    {
      id: 'v-clip12',
      type: 'video',
      title: 'Cable Extruder High Temperature Heat Zone',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_12.mp4'
    },
    {
      id: 'v-clip13',
      type: 'video',
      title: 'Finished Cable Coils Inspection & Final Packaging',
      category: 'Manufacturing',
      src: '/assets/videos/factory_clip_13.mp4'
    },
    {
      id: 'v-clip14',
      type: 'video',
      title: 'Copper Conductor Wire Rod Stockyard & Material Handling',
      category: 'Infrastructure',
      src: '/assets/videos/factory_clip_14.mp4'
    },
    {
      id: 'v-clip15',
      type: 'video',
      title: 'Finished Goods Dispatch Area & Warehouse Staging',
      category: 'Infrastructure',
      src: '/assets/videos/factory_clip_15.mp4'
    },

    /* ==========================================================================
       2. EXCLUSIVE PLANT & PRODUCT GALLERY PHOTOS (NON-HOMEPAGE)
       ========================================================================== */
    {
      id: 'mfg-wire-drawing',
      type: 'photo',
      title: 'High-Speed Copper Conductor Wire Drawing & Annealing Line',
      category: 'Manufacturing',
      src: '/assets/mfg_wire_drawing.jpg'
    },
    {
      id: 'mfg-cable-extrusion',
      type: 'photo',
      title: 'Continuous High-Speed PVC & XLPE Cable Extrusion Line',
      category: 'Manufacturing',
      src: '/assets/mfg_cable_extrusion.jpg'
    },
    {
      id: 'mfg-cable-armoring',
      type: 'photo',
      title: 'Heavy-Duty Steel Wire & Strip Cable Armoring Machine',
      category: 'Manufacturing',
      src: '/assets/mfg_cable_armoring.jpg'
    },
    {
      id: 'mfg-drum-winding',
      type: 'photo',
      title: 'Automated Industrial Cable Drum Take-Up & Spooling Unit',
      category: 'Manufacturing',
      src: '/assets/mfg_drum_winding.jpg'
    },
    {
      id: 'im-1',
      type: 'photo',
      title: 'Heavy Duty PVC & XLPE Industrial Power Cables',
      category: 'Products',
      src: '/assets/image 1.jpeg'
    },
    {
      id: 'im-2',
      type: 'photo',
      title: 'Flame Retardant Household Copper Wires',
      category: 'Products',
      src: '/assets/image 2.jpeg'
    },
    {
      id: 'im-3',
      type: 'photo',
      title: 'Precision High-Speed Wire Stranding System',
      category: 'Manufacturing',
      src: '/assets/image 3.jpeg'
    },
    {
      id: 'im-4',
      type: 'photo',
      title: 'Multi Strand Flexible Copper Cables',
      category: 'Products',
      src: '/assets/image 4.jpeg'
    },
    {
      id: 'im-6',
      type: 'photo',
      title: 'Manufacturing Plant Extrusion Shop Floor',
      category: 'Manufacturing',
      src: '/assets/image 6.jpeg'
    },
    {
      id: 'p-subm',
      type: 'photo',
      title: '3-Core Submersible PVC Flat Water Pump Cables',
      category: 'Products',
      src: '/assets/submersible_pvc_flat_cable.jpg'
    },
        {
      id: 'p-copper-strands',
      type: 'photo',
      title: 'Pure Electrolytic Grade Copper Wire Strands',
      category: 'Products',
      src: '/assets/wire image.png'
    },
    {
      id: 'im-16',
      type: 'photo',
      title: 'Jay Cable Industries Modern Plant Overview',
      category: 'Infrastructure',
      src: '/assets/image 16.jpeg'
    },
    {
      id: 'im-18',
      type: 'photo',
      title: 'High Speed Wire Bunching & Twisting Line',
      category: 'Manufacturing',
      src: '/assets/image 18.jpeg'
    },
    {
      id: 'im-19',
      type: 'photo',
      title: 'Cable Armor Stranding & Helical Wire Feeding',
      category: 'Manufacturing',
      src: '/assets/image 19.jpeg'
    },
    {
      id: 'im-20',
      type: 'photo',
      title: 'Continuous PVC & XLPE Extrusion Line',
      category: 'Manufacturing',
      src: '/assets/image 20.jpeg'
    },
    {
      id: 'im-21',
      type: 'photo',
      title: '3-Core Submersible Flat Cables in Production',
      category: 'Products',
      src: '/assets/image 21.jpeg'
    },
    {
      id: 'im-22',
      type: 'photo',
      title: 'Finished Cable Drums & Spools Staging Area',
      category: 'Infrastructure',
      src: '/assets/image 22.jpeg'
    },
    {
      id: 'im-23',
      type: 'photo',
      title: 'Plant Operations & Extruder Overview',
      category: 'Manufacturing',
      src: '/assets/image 23.jpeg'
    },
            /* ==========================================================================
       3. CABLE APPLICATION SECTORS & PROJECT SITES
       ========================================================================== */
    {
      id: 'app-residential',
      type: 'photo',
      title: 'Residential Complexes & Concealed Home Wiring',
      category: 'Applications',
      src: '/assets/app_crops/app_1.png'
    },
    {
      id: 'app-commercial',
      type: 'photo',
      title: 'Commercial High-Rises, IT Hubs & Shopping Centers',
      category: 'Applications',
      src: '/assets/app_crops/app_2.png'
    },
    {
      id: 'app-industrial',
      type: 'photo',
      title: 'Heavy Industrial Plants & Production Facilities',
      category: 'Applications',
      src: '/assets/app_crops/app_3.png'
    },
    {
      id: 'app-infrastructure',
      type: 'photo',
      title: 'Smart City Power Grids & Infrastructure Projects',
      category: 'Applications',
      src: '/assets/app_crops/app_4.png'
    },
    {
      id: 'app-healthcare',
      type: 'photo',
      title: 'Critical Healthcare Facilities & Hospitals',
      category: 'Applications',
      src: '/assets/app_crops/app_5.png'
    },
    {
      id: 'app-datacenters',
      type: 'photo',
      title: 'High-Density Data Centers & Telecommunications',
      category: 'Applications',
      src: '/assets/app_crops/app_6.png'
    },
    {
      id: 'app-renewable',
      type: 'photo',
      title: 'Utility Scale Solar Parks & Renewable Energy Plants',
      category: 'Applications',
      src: '/assets/app_crops/app_7.png'
    },
    {
      id: 'app-railways',
      type: 'photo',
      title: 'Electric Railways & Overhead Catenary Transmission',
      category: 'Applications',
      src: '/assets/app_crops/app_8.png'
    },
    {
      id: 'app-oilgas',
      type: 'photo',
      title: 'Oil & Gas Refineries & Petrochemical Plants',
      category: 'Applications',
      src: '/assets/app_crops/app_9.png'
    },
    {
      id: 'app-agriculture',
      type: 'photo',
      title: 'Agricultural Irrigation & Solar Submersible Water Pumps',
      category: 'Applications',
      src: '/assets/app_agriculture_irrigation.jpg'
    },
    {
      id: 'app-metro',
      type: 'photo',
      title: 'Urban High-Speed Metro Rail Electrification Transit',
      category: 'Applications',
      src: '/assets/app_metro_rail_transit.jpg'
    },
    {
      id: 'app-sust',
      type: 'photo',
      title: 'Renewable Solar Power & Sustainable Energy',
      category: 'Applications',
      src: '/assets/sustainable.png'
    },

    /* ==========================================================================
       4. ACCREDITED QUALITY TESTING & LABORATORY PROCEDURES
       ========================================================================== */
    {
      id: 'qt-tensile',
      type: 'photo',
      title: 'Computerized Universal Testing Machine (UTM) - Tensile & Elongation',
      category: 'Quality Testing',
      src: '/assets/qt_tensile_testing.jpg'
    },
    {
      id: 'qt-flame',
      type: 'photo',
      title: 'Limiting Oxygen Index (LOI) & Vertical Flammability Chamber',
      category: 'Quality Testing',
      src: '/assets/qt_flammability_test.jpg'
    },
    {
      id: 'qt-resistance',
      type: 'photo',
      title: 'Digital Kelvin Double Bridge Conductor Electrical Resistance Test',
      category: 'Quality Testing',
      src: '/assets/qt_conductor_resistance.jpg'
    },
    {
      id: 'qt-hv-spark',
      type: 'photo',
      title: 'High Voltage Dielectric Breakdown & Spark Withstand Station',
      category: 'Quality Testing',
      src: '/assets/qt_high_voltage_spark.jpg'
    },
    {
      id: 'qt-hv-set',
      type: 'photo',
      title: 'High Voltage Test Transformer Set & Safety Control Console',
      category: 'Quality Testing',
      src: '/assets/infra/test_2.png'
    },
    {
      id: 'qt-ageing',
      type: 'photo',
      title: 'Circulating Air Thermal Degradation & Accelerated Ageing Oven',
      category: 'Quality Testing',
      src: '/assets/infra/test_3.png'
    },
    {
      id: 'qt-chamber',
      type: 'photo',
      title: 'Vertical Fire Resistance & Flame Retardant Burn Chamber',
      category: 'Quality Testing',
      src: '/assets/infra/test_4.png'
    },
    {
      id: 'qt-ir-water',
      type: 'photo',
      title: 'Water Bath Submerged Insulation Resistance (Megger) Tester',
      category: 'Quality Testing',
      src: '/assets/infra/test_5.png'
    },
    {
      id: 'qt-dimensional',
      type: 'photo',
      title: 'Digital Dimensional Measuring System & Optical Profile Projector',
      category: 'Quality Testing',
      src: '/assets/infra/test_7.png'
    },
    {
      id: 'qt-hot-set',
      type: 'photo',
      title: 'XLPE Hot Set Thermal Elongation & Permanent Set Tester',
      category: 'Quality Testing',
      src: '/assets/infra/test_8.png'
    },
    {
      id: 'app-copper',
      type: 'photo',
      title: 'High-Purity Electrolytic Copper Raw Material',
      category: 'Infrastructure',
      src: '/assets/copper.png'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Videos') return item.type === 'video';
    if (activeCategory === 'Photos') return item.type === 'photo';
    return item.category === activeCategory;
  });

  // Modal navigation handlers
  const currentModalIndex = selectedItem
    ? filteredItems.findIndex((it) => it.id === selectedItem.id)
    : -1;

  const handlePrevItem = (e) => {
    e.stopPropagation();
    if (currentModalIndex > 0) {
      setSelectedItem(filteredItems[currentModalIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextItem = (e) => {
    e.stopPropagation();
    if (currentModalIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentModalIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  // Keyboard navigation for lightbox modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowLeft') handlePrevItem(e);
      if (e.key === 'ArrowRight') handleNextItem(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentModalIndex, filteredItems]);

  const totalVideos = galleryItems.filter((it) => it.type === 'video').length;
  const totalPhotos = galleryItems.filter((it) => it.type === 'photo').length;

  return (
    <div className="gal-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1: HERO BANNER                                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-hero-section page-banner">
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

            <h1 className="gal-hero-title">Gallery &amp; Media</h1>
            <p className="gal-hero-subtitle">Visual Tour of Our Facilities, Products &amp; Operations</p>
            <p className="gal-hero-desc">
              Explore our state-of-the-art manufacturing plant, heavy machinery in action, certified wires &amp; cables, and rigorous testing standards that power homes and industries across India.
            </p>

            <div className="gal-hero-badges">
              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Film size={20} />
                </div>
                <span>{totalVideos} Factory<br />Videos</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Camera size={20} />
                </div>
                <span>{totalPhotos} High-Res<br />Photos</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <Factory size={20} />
                </div>
                <span>Modern<br />Infrastructure</span>
              </div>

              <div className="gal-hero-badge-item">
                <div className="gal-badge-icon-wrap">
                  <ShieldCheck size={20} />
                </div>
                <span>Strict<br />Quality Control</span>
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
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? galleryItems.length
                  : cat === 'Videos'
                  ? totalVideos
                  : cat === 'Photos'
                  ? totalPhotos
                  : galleryItems.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`gal-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'Videos' && <Video size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />}
                  {cat === 'Photos' && <Camera size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />}
                  {cat} <span className="gal-tab-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3: MEDIA GALLERY GRID (VIDEOS & PHOTOS)                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="gal-grid-section">
        <div className="gal-container">
          <div className="gal-photos-grid gal-reveal-scale">
            {filteredItems.map((item) => (
              <div
                className={`gal-photo-card ${item.type === 'video' ? 'gal-video-card' : ''} ${item.category === 'Products' ? 'gal-photo-card--product' : ''}`}
                key={item.id}
                onClick={() => setSelectedItem(item)}
              >
                {item.type === 'video' ? (
                  <div className="gal-video-preview-wrapper">
                    <video
                      src={`${item.src}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="gal-video-thumb"
                    />
                    <div className="gal-video-play-btn" title="Play Video">
                      <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                    <span className="gal-video-badge">
                      <Film size={12} style={{ marginRight: '4px' }} /> VIDEO
                    </span>
                  </div>
                ) : (
                  <img src={item.src} alt={item.title} loading="lazy" />
                )}

                <div className="gal-photo-overlay">
                  <div className="gal-zoom-icon">
                    {item.type === 'video' ? <Play size={18} fill="#ffffff" /> : <Maximize2 size={18} />}
                  </div>
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* LIGHTBOX MODAL (SUPPORTS BOTH VIDEOS & PHOTOS)                             */}
      {/* -------------------------------------------------------------------------- */}
      {selectedItem && (
        <div
          className="gal-modal-backdrop"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="gal-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gal-modal-close-btn"
              onClick={() => setSelectedItem(null)}
              title="Close Preview (Esc)"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Navigation Arrows */}
            <button
              className="gal-modal-nav-btn prev"
              onClick={handlePrevItem}
              title="Previous (Left Arrow)"
              aria-label="Previous Item"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="gal-modal-nav-btn next"
              onClick={handleNextItem}
              title="Next (Right Arrow)"
              aria-label="Next Item"
            >
              <ChevronRight size={28} />
            </button>

            {/* Media Display */}
            <div className="gal-modal-media-wrap">
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="gal-modal-video"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="gal-modal-img"
                />
              )}
            </div>

            <div className="gal-modal-caption">
              <div>
                <span className="gal-modal-type-tag">
                  {selectedItem.type === 'video' ? '▶ Factory Video' : '📷 High-Resolution Photo'}
                </span>
                <h3>{selectedItem.title}</h3>
                <p>Category: {selectedItem.category}</p>
              </div>
              <div className="gal-modal-index">
                {currentModalIndex + 1} / {filteredItems.length}
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
