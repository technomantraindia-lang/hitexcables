import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Flame,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Phone,
  Play,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Sun,
  Users,
  Wrench,
  X,
  Zap
} from 'lucide-react';
import { productsData, getProductById } from './data/productsData.js';
import './ProductDetailsPage.css';

const A = '/assets/';
const P = '/assets/product_details/';

const wireVideos = [
  {
    id: 'extrusion',
    title: 'Cable Extrusion Process',
    desc: 'High-speed continuous copper wire drawing, heating, and precision PVC insulation extrusion.',
    src: '/assets/videos/video_1.mp4',
    poster: '/assets/product_details/thumb_cable_extrusion.webp'
  },
  {
    id: 'stranding',
    title: 'Wire Bunching & Stranding',
    desc: 'Multi-strand electrolytic copper conductor bunching and high-precision twisting line.',
    src: '/assets/videos/video_2.mp4',
    poster: '/assets/product_details/thumb_wire_stranding.webp'
  },
  {
    id: 'coiling',
    title: 'Automated Coiling & Packing',
    desc: 'Automated 90-meter coil winding, length metering, and protective shrink-wrap packaging unit.',
    src: '/assets/videos/video_4.mp4',
    poster: '/assets/product_details/thumb_automated_coiling.webp'
  }
];

function BadgeIcon({ type }) {
  if (type === 'zap') {
    return (
      <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L1 14.5H9.5L7.5 26L19 10.5H10.5L12 0Z" fill="#005f75" />
      </svg>
    );
  }
  if (type === 'shield') {
    return (
      <svg width="24" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1C16.5 1 23 3.5 23 3.5V13.8C23 20.8 16.8 25.8 12 27C7.2 25.8 1 20.8 1 13.8V3.5C1 3.5 7.5 1 12 1Z" fill="#005f75" />
        <path d="M12 20.5L6.5 14.5H9.5V9.5H14.5V14.5H17.5L12 20.5Z" fill="#ffffff" />
      </svg>
    );
  }
  if (type === 'check') {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="13" fill="#005f75" />
        <path d="M7.5 13L11.5 17L18.5 9.5" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="10" height="10" rx="3" fill="#005f75" />
        <rect x="15" y="1" width="10" height="10" rx="3" fill="#005f75" />
        <circle cx="20" cy="6" r="2.3" fill="#ffffff" />
        <rect x="1" y="15" width="10" height="10" rx="3" fill="#005f75" />
        <rect x="15" y="15" width="10" height="10" rx="3" fill="#005f75" />
      </svg>
    );
  }
  if (type === 'sun') {
    return <Sun size={24} color="#005f75" strokeWidth={2.4} />;
  }
  if (type === 'flame') {
    return <Flame size={24} color="#005f75" strokeWidth={2.4} />;
  }
  if (type === 'wrench') {
    return <Wrench size={23} color="#005f75" strokeWidth={2.4} />;
  }
  if (type === 'clock') {
    return <Clock size={24} color="#005f75" strokeWidth={2.4} />;
  }
  return <CheckCircle2 size={24} color="#005f75" strokeWidth={2.4} />;
}

function ValueCardIcon({ icon }) {
  if (icon === 'award') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.2 13.8L5.5 22L9.5 20.2L12 22.5L10.5 15.5" fill="#005f75" />
        <path d="M15.8 13.8L18.5 22L14.5 20.2L12 22.5L13.5 15.5" fill="#005f75" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.58 2 4 5.58 4 10C4 14.42 7.58 18 12 18C16.42 18 20 14.42 20 10C20 5.58 16.42 2 12 2ZM12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z" fill="#005f75" />
      </svg>
    );
  }
  if (icon === 'wrench') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#005f75" />
      </svg>
    );
  }
  if (icon === 'clock') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4.6C16.08 4.6 19.4 7.92 19.4 12C19.4 16.08 16.08 19.4 12 19.4C7.92 19.4 4.6 16.08 4.6 12C4.6 7.92 7.92 4.6 12 4.6ZM10.75 6.8V12.6C10.75 13.04 11.11 13.4 11.55 13.4H16.2C16.64 13.4 17 13.04 17 12.6C17 12.16 16.64 11.8 16.2 11.8H12.35V6.8C12.35 6.36 11.99 6 11.55 6C11.11 6 10.75 6.36 10.75 6.8Z" fill="#005f75" />
      </svg>
    );
  }
  if (icon === 'users') {
    return (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6.5" r="3.2" fill="#005f75" />
        <path d="M12 11.2C8.6 11.2 5.8 13.8 5.8 17.2V19.5H18.2V17.2C18.2 13.8 15.4 11.2 12 11.2Z" fill="#005f75" />
        <circle cx="4.8" cy="8.5" r="2.4" fill="#005f75" />
        <path d="M4.8 12.8C3.1 12.8 1.8 14.1 1.8 15.8V17.5H4.2V15.8C4.2 14.5 4.6 13.4 5.3 12.7C5.1 12.75 4.95 12.8 4.8 12.8Z" fill="#005f75" />
        <circle cx="19.2" cy="8.5" r="2.4" fill="#005f75" />
        <path d="M19.2 12.8C19.05 12.8 18.9 12.75 18.7 12.7C19.4 13.4 19.8 14.5 19.8 15.8V17.5H22.2V15.8C22.2 14.1 20.9 12.8 19.2 12.8Z" fill="#005f75" />
      </svg>
    );
  }
  if (icon === 'shield') {
    return <Shield size={23} color="#005f75" strokeWidth={2.4} />;
  }
  if (icon === 'zap') {
    return <Zap size={23} color="#005f75" strokeWidth={2.4} />;
  }
  if (icon === 'sun') {
    return <Sun size={23} color="#005f75" strokeWidth={2.4} />;
  }
  if (icon === 'flame') {
    return <Flame size={23} color="#005f75" strokeWidth={2.4} />;
  }
  return <CheckCircle2 size={23} color="#005f75" strokeWidth={2.4} />;
}

export default function ProductDetailsPage({ productId, onNavigate, onSelectProduct }) {
  const [currentId, setCurrentId] = useState(() => {
    if (productId) return productId;
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('product') ||
                new URLSearchParams(window.location.search).get('id');
      if (p) return p;
    }
    return 'house-wires';
  });

  const product = getProductById(currentId);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    size: 'Standard',
    quantity: '10 Units',
    message: ''
  });

  // Sync when prop changes
  useEffect(() => {
    if (productId && productId !== currentId) {
      setCurrentId(productId);
      setActiveImageIdx(0);
      setActiveTab('overview');
      setIsPlayingVideo(false);
    }
  }, [productId]);

  // Preload all gallery images immediately on product load so thumbnail clicks are instantaneous
  useEffect(() => {
    if (product && product.gallery && Array.isArray(product.gallery)) {
      product.gallery.forEach((item) => {
        if (item.full) {
          const preImg = new Image();
          preImg.src = item.full;
        }
      });
    }
  }, [product]);

  const handleSelectProduct = (newId) => {
    setCurrentId(newId);
    setActiveImageIdx(0);
    setActiveTab('overview');
    setIsPlayingVideo(false);
    if (onSelectProduct) {
      onSelectProduct(newId);
    } else if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `/product-details?product=${newId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/HITEX_PLUS_Catalogue.pdf';
    link.download = 'HITEX_PLUS_Catalogue.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setShowEnquiryModal(false);
    }, 2500);
  };

  const currentGalleryImage = product.gallery[activeImageIdx] || product.gallery[0];

  return (
    <div className="pdp-page-root">
      {/* -------------------------------------------------------------------------- */}
      {/* 1. HERO BANNER                                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="pdp-page-banner page-banner">
        <div className="page-banner-inner">
          <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
              }}
            >
              Home
            </a>
            <span className="pdp-breadcrumb-sep">&gt;</span>
            <a
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('products');
              }}
            >
              Products
            </a>
            <span className="pdp-breadcrumb-sep">&gt;</span>
            <a
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('products');
              }}
            >
              {product.breadcrumbCategory || product.category}
            </a>
            <span className="pdp-breadcrumb-sep">&gt;</span>
            <span className="pdp-breadcrumb-active">{product.name}</span>
          </nav>
          <h1 className="pdp-banner-title">
            {product.bannerTitle ? (
              <>
                {product.bannerTitle.prefix}
                <em>{product.bannerTitle.highlight}</em>
              </>
            ) : (
              product.name
            )}
          </h1>
          <p className="pdp-banner-desc">{product.bannerSubtitle}</p>
        </div>
      </section>

      <div className="pdp-container">
        {/* -------------------------------------------------------------------------- */}
        {/* 2. PRODUCT SWITCHER BAR                                                   */}
        {/* -------------------------------------------------------------------------- */}
        <div className="pdp-product-switcher">
          <div className="pdp-switcher-header">
            <div className="pdp-switcher-label">
              <Layers size={16} className="pdp-switcher-icon" />
              <span>SELECT PRODUCT:</span>
            </div>
            <span className="pdp-switcher-count">({productsData.length} Products Available)</span>
          </div>
          <div className="pdp-switcher-pills" role="tablist" aria-label="All HITEX Products">
            {productsData.map((p) => {
              const isSelected = p.id === product.id;
              return (
                <button
                  key={p.id}
                  className={`pdp-switcher-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectProduct(p.id)}
                  role="tab"
                  aria-selected={isSelected}
                  title={`View details for ${p.name}`}
                >
                  <span className="pdp-pill-dot"></span>
                  <span className="pdp-pill-text">{p.shortName || p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* 3. HERO SHOWCASE GRID                                                     */}
        {/* -------------------------------------------------------------------------- */}
        <section className="pdp-hero-grid">
          {/* Main Product Showcase Card */}
          <div className="pdp-main-image-card">
            <img
              src={currentGalleryImage.full}
              alt={currentGalleryImage.alt || product.name}
              className="pdp-main-img"
              key={currentGalleryImage.full}
              decoding="async"
            />
            {/* Eagerly preload all gallery images in DOM for 0ms instantaneous switching */}
            <div style={{ display: 'none' }} aria-hidden="true">
              {product.gallery.map((img) => (
                <img key={img.id} src={img.full} alt="" loading="eager" decoding="async" />
              ))}
            </div>
          </div>

          {/* Vertical Thumbnail Strip */}
          <div className="pdp-thumbnails-strip" role="tablist" aria-label="Product image thumbnails">
            {product.gallery.map((img, idx) => (
              <button
                key={img.id}
                className={`pdp-thumb-btn ${activeImageIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveImageIdx(idx)}
                aria-label={`View image ${idx + 1}`}
                role="tab"
                aria-selected={activeImageIdx === idx}
              >
                <img src={img.thumb} alt={img.alt || `${product.name} thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>

          {/* Product Info & Actions */}
          <div className="pdp-product-info">
            <div className="pdp-category-eyebrow">
              <span className="pdp-eyebrow-dash"></span>
              <span className="pdp-category-tag">{product.category}</span>
            </div>
            <h1 className="pdp-product-title">{product.name}</h1>
            <p className="pdp-product-tagline">{product.tagline}</p>

            {/* 4 Feature Badges Grid */}
            <div className="pdp-badges-grid">
              {product.badges.map((b, idx) => (
                <div className="pdp-badge-item" key={idx}>
                  <div className="pdp-badge-icon-box">
                    <BadgeIcon type={b.icon} />
                  </div>
                  <div className="pdp-badge-texts">
                    <span className="pdp-badge-line1">{b.line1}</span>
                    <span className="pdp-badge-line2">{b.line2}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pdp-actions-row">
              <button className="pdp-btn-brochure" onClick={handleDownloadBrochure}>
                <div className="pdp-btn-pdf-box">
                  <img
                    src={`${P}icon_pdf_doc.png`}
                    alt="PDF Icon"
                    className="pdp-btn-pdf-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'block';
                      }
                    }}
                  />
                  <FileText size={18} className="pdp-pdf-fallback" style={{ display: 'none', color: '#005f75' }} />
                </div>
                <span>Download Brochure</span>
              </button>

              <button
                className="pdp-btn-enquiry"
                onClick={() => setShowEnquiryModal(true)}
              >
                <span>Send Enquiry</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* 4. VALUE PROPOSITION BAR                                                  */}
        {/* -------------------------------------------------------------------------- */}
        <section className="pdp-value-bar">
          {product.valueCards.map((card, idx) => (
            <div className="pdp-value-card" key={idx}>
              <div className="pdp-value-icon-box">
                <div className="pdp-value-icon-circle">
                  <ValueCardIcon icon={card.icon} />
                </div>
              </div>
              <div className="pdp-value-text">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* 5. INTERACTIVE TABS SECTION                                               */}
        {/* -------------------------------------------------------------------------- */}
        <section className="pdp-tabs-section">
          {/* Tab Header Strip */}
          <div className="pdp-tabs-nav" role="tablist">
            <button
              className={`pdp-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
              role="tab"
              aria-selected={activeTab === 'overview'}
            >
              Overview
            </button>
            <div className="pdp-tab-divider"></div>
            <button
              className={`pdp-tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
              role="tab"
              aria-selected={activeTab === 'applications'}
            >
              Applications
            </button>
            <div className="pdp-tab-divider"></div>
            <button
              className={`pdp-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
              role="tab"
              aria-selected={activeTab === 'features'}
            >
              Key Features
            </button>
            <div className="pdp-tab-divider"></div>
            <button
              className={`pdp-tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
              role="tab"
              aria-selected={activeTab === 'technical'}
            >
              Technical Information
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="pdp-tab-body">
            {activeTab === 'overview' && (
              <div className="pdp-overview-grid">
                <div className="pdp-overview-left">
                  <span className="pdp-overview-eyebrow">{product.overview.eyebrow}</span>
                  <h2>{product.overview.title}</h2>
                  <div className="pdp-overview-divider"></div>
                  <p>{product.overview.desc}</p>
                </div>
                <div className="pdp-overview-right">
                  <img
                    src={product.overview.bannerImg}
                    alt={`${product.name} Banner`}
                    className="pdp-overview-banner-img"
                  />
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="pdp-tab-extra-content">
                <h2>Recommended Applications</h2>
                <p>
                  HITEX PLUS {product.name} is engineered for versatile electrical installations across modern infrastructures:
                </p>
                <div className="pdp-extra-grid">
                  {product.applications.map((app, idx) => (
                    <div className="pdp-extra-card" key={idx}>
                      <h4>{app.title}</h4>
                      <p>{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="pdp-tab-extra-content">
                <h2>Key Product Features</h2>
                <div className="pdp-extra-grid">
                  {product.keyFeatures.map((feat, idx) => (
                    <div className="pdp-extra-card" key={idx}>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="pdp-tab-extra-content">
                <h2>Technical Specifications &amp; Standards</h2>
                <div className="pdp-tech-table-wrapper">
                  <table className="pdp-tech-table">
                    <tbody>
                      {product.technical.map((row, idx) => (
                        <tr key={idx}>
                          <th>{row.label}</th>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* -------------------------------------------------------------------------- */}
        {/* 6. BOTTOM SECTION: MANUFACTURER VIDEO & SPECIFICATIONS                     */}
        {/* -------------------------------------------------------------------------- */}
        <section className="pdp-bottom-grid">
          {/* Left Card: Manufacturer Video */}
          <div className="pdp-bottom-card">
            <div className="pdp-card-heading-box">
              <span className="pdp-card-accent-bar"></span>
              <h2 className="pdp-card-heading">Manufacturer Video</h2>
            </div>

            <div className="pdp-video-container">
              {isPlayingVideo ? (
                <div className="pdp-video-player-box">
                  <video
                    key={wireVideos[activeVideoIdx].src}
                    src={wireVideos[activeVideoIdx].src}
                    poster={wireVideos[activeVideoIdx].poster}
                    controls
                    autoPlay
                    className="pdp-html5-video"
                  />
                  <button
                    className="pdp-video-close-btn"
                    onClick={() => setIsPlayingVideo(false)}
                    title="Close Video"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div
                  className="pdp-video-poster-box"
                  onClick={() => setIsPlayingVideo(true)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${wireVideos[activeVideoIdx].title}`}
                >
                  <img
                    src={wireVideos[activeVideoIdx].poster}
                    alt={wireVideos[activeVideoIdx].title}
                    className="pdp-video-poster-img"
                  />
                  <div className="pdp-video-badge-overlay">
                    <span>{wireVideos[activeVideoIdx].title}</span>
                  </div>
                  <div className="pdp-video-quality-tag">
                    <span>HD 1080p</span>
                  </div>
                  <div className="pdp-play-btn-circle" aria-hidden="true">
                    <Play size={26} className="pdp-play-triangle" fill="#005f75" color="#005f75" />
                  </div>
                </div>
              )}
            </div>

            {/* Wire Making Process Switcher Pills */}
            <div className="pdp-video-switcher-pills">
              {wireVideos.map((vid, idx) => (
                <button
                  key={vid.id}
                  className={`pdp-video-pill ${activeVideoIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveVideoIdx(idx)}
                  title={`View ${vid.title}`}
                >
                  <Play size={12} fill={activeVideoIdx === idx ? '#ffffff' : '#005f75'} />
                  <span>{vid.title}</span>
                </button>
              ))}
            </div>

            <div className="pdp-video-caption">
              <h3>{wireVideos[activeVideoIdx].title}</h3>
              <p>{wireVideos[activeVideoIdx].desc}</p>
            </div>
          </div>

          {/* Right Card: Product Specifications Table */}
          <div className="pdp-bottom-card">
            <div className="pdp-card-heading-box">
              <span className="pdp-card-accent-bar"></span>
              <h2 className="pdp-card-heading">Product Specifications</h2>
            </div>

            <div className="pdp-specs-table-wrapper">
              <table className="pdp-specs-table">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx}>
                      <td className="pdp-spec-label">{spec.label}</td>
                      <td className="pdp-spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/* 7. SEND ENQUIRY MODAL                                                      */}
      {/* -------------------------------------------------------------------------- */}
      {showEnquiryModal && (
        <div className="pdp-modal-backdrop" onClick={() => setShowEnquiryModal(false)}>
          <div className="pdp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="pdp-modal-close-btn"
              onClick={() => setShowEnquiryModal(false)}
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {enquirySent ? (
              <div className="pdp-modal-success">
                <CheckCircle2 size={54} color="#008fa8" />
                <h3>Thank You!</h3>
                <p>
                  Your quotation request for <strong>{product.name}</strong> has been received. Our sales engineer will get in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitEnquiry} className="pdp-modal-form">
                <div className="pdp-modal-header">
                  <span className="pdp-modal-eyebrow">DIRECT FACTORY ENQUIRY</span>
                  <h2>Request a Quote for {product.name}</h2>
                  <p>Get bulk dealer pricing, technical datasheets, and delivery timelines within 2 hours.</p>
                </div>

                <div className="pdp-form-row">
                  <div className="pdp-form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="pdp-form-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pdp-form-row">
                  <div className="pdp-form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="pdp-form-field">
                    <label>Required Size / Spec</label>
                    <input
                      type="text"
                      placeholder="e.g. 1.5 sq. mm / 4 Core"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pdp-form-field">
                  <label>Quantity / Project Scale</label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Cores / 1500 meters"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>

                <div className="pdp-form-field">
                  <label>Project Details / Special Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Mention delivery location, required standard certifications, or customized lengths..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="pdp-form-submit-btn">
                  <span>Submit Inquiry Request</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
