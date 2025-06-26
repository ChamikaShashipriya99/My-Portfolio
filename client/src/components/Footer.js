import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chamika-shashipriya-722366321',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ChamikaShashipriya99',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chamika_99_?igsh=YWVmc2pmY3A4eGtw',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png',
  },
  {
    name: 'Email',
    url: 'mailto:chamikashashipriya3@gmail.com',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/new-post.png',
    display: 'chamikashashipriya3@gmail.com',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/94704120358',
    icon: 'https://img.icons8.com/ios-filled/50/25D366/whatsapp--v1.png',
    display: '+94 70 412 0358',
  },
];

const quickLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#resume', text: 'Resume' },
  { href: '#contact', text: 'Contact' },
];

const Footer = () => (
  <footer
    className="mt-5 pt-5 pb-3 position-relative w-100"
    style={{
      background: 'rgba(24,24,27,0.25)',
      backdropFilter: 'blur(18px) saturate(160%)',
      WebkitBackdropFilter: 'blur(18px) saturate(160%)',
      borderTop: '2px solid rgba(13,202,240,0.18)',
      borderRadius: '2rem 2rem 0 0',
      boxShadow: '0 -8px 32px 0 rgba(13,202,240,0.10), 0 -2px 8px 0 rgba(0,0,0,0.18)',
      color: '#e0e0e0',
      zIndex: 10,
      overflow: 'hidden',
    }}
  >
    <div className="container">
      <div className="row gy-4 align-items-start justify-content-between">
        {/* About */}
        <div className="col-12 col-md-5 col-lg-4">
          <h5 className="fw-bold text-info mb-3" style={{ letterSpacing: '1px' }}>About This Portfolio</h5>
          <p style={{ color: '#b0b0b0', fontSize: '1rem' }}>
            This is the personal portfolio of <span className="fw-semibold text-info">Chamika Shashipriya</span>, a passionate Full-Stack Developer and UI/UX Designer. Built with the MERN stack and Bootstrap, featuring dynamic GitHub integration and modern glassmorphism design.
          </p>
        </div>
        {/* Quick Links */}
        <div className="col-6 col-md-3 col-lg-2">
          <h6 className="fw-bold text-info mb-3">Quick Links</h6>
          <ul className="list-unstyled mb-0">
            {quickLinks.map(link => (
              <li key={link.text} className="mb-2">
                <a
                  href={link.href}
                  className="text-decoration-none text-light fw-semibold"
                  style={{ fontSize: '1rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#0dcaf0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social & Contact */}
        <div className="col-6 col-md-4 col-lg-3">
          <h6 className="fw-bold text-info mb-3">Connect</h6>
          <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(13,202,240,0.10)',
                  transition: 'background 0.2s',
                  boxShadow: '0 2px 8px 0 rgba(13,202,240,0.08)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,202,240,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,202,240,0.10)')}
              >
                <img src={link.icon} alt={link.name} style={{ width: 22, height: 22, borderRadius: 4, background: link.name === 'WhatsApp' ? '#fff' : 'transparent' }} />
              </a>
            ))}
          </div>
          <div style={{ color: '#b0b0b0', fontSize: '0.97rem' }}>
            {socialLinks.filter(l => l.display).map(link => (
              <div key={link.name} className="d-flex align-items-center gap-2 mb-1">
                <img src={link.icon} alt={link.name} style={{ width: 18, height: 18, borderRadius: 3, background: link.name === 'WhatsApp' ? '#fff' : 'transparent' }} />
                <span>{link.display}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-4" style={{ borderTop: '1.5px solid rgba(13,202,240,0.13)' }}></div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2">
          <img src={process.env.PUBLIC_URL + '/mindstack-favicon.png'} alt="MindStack Logo" style={{ width: 38, height: 38, borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(13,202,240,0.10)' }} />
          <span className="fw-bold text-info" style={{ fontSize: '1.05rem', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} Chamika Shashipriya. All rights reserved.
          </span>
        </div>
        <button
          className="btn btn-outline-info btn-sm fw-bold rounded-pill px-3"
          style={{ boxShadow: '0 2px 8px 0 rgba(13,202,240,0.08)', background: 'rgba(13,202,240,0.08)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to Top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer; 