import React, { useState } from 'react';
import './Contact.css';
import mindstackImage from '../assets/MindStack.jpg';

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
    display: '@chamika_99_',
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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqabgbpp";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (values) => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required.';
    if (!values.email.trim()) errs.email = 'Email is required.';
    else if (!validateEmail(values.email)) errs.email = 'Enter a valid email.';
    if (!values.message.trim()) errs.message = 'Message is required.';
    else if (values.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitAttempted) setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    setSubmitAttempted(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      e.preventDefault();
    } else {
      setTimeout(() => setSuccess(true), 500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-floating-bg" aria-hidden="true">
        <span className="floating-1"></span>
        <span className="floating-2"></span>
        <span className="floating-3"></span>
        <span className="floating-4"></span>
      </div>
      <div className="contact-container">
        <h2 className="contact-title" data-aos="fade-up">
          <span className="title-accent">Contact</span> Me
        </h2>
        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
          Feel free to reach out via the form or connect with me on social media.
        </p>
        <div className="contact-card">
          {/* Left: Info & Socials */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I'm open to opportunities, collaborations, or just a friendly chat. Drop me a message or connect via social links below!
            </p>
            
            {/* Availability Component */}
            <div className="availability-section">
              <div className="availability-header">
                <div className="availability-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#sparkle)"/>
                    <defs>
                      <linearGradient id="sparkle" x1="12" y1="2" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA500"/>
                        <stop offset="1" stopColor="#FFD700"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h4 className="availability-title">Availability</h4>
              </div>
              <p className="availability-description">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="availability-status">
                <div className="status-dot"></div>
                <span className="status-text">Open to new opportunities</span>
              </div>
            </div>
            
            <div className="contact-socials">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-icon contact-social-${link.name.toLowerCase()}`}
                  title={link.name}
                >
                  <img src={link.icon} alt={link.name} />
                </a>
              ))}
            </div>
            <div className="contact-info-details">
              <div className="contact-info-item">
                <span className="contact-info-label">Email:</span>
                <a href="mailto:chamikashashipriya3@gmail.com" className="contact-info-link">chamikashashipriya3@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">WhatsApp:</span>
                <a href="https://wa.me/94704120358" className="contact-info-link">+94 70 412 0358</a>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <div className="contact-form-wrapper">
            {success ? (
              <div className="contact-success">Thank you! Your message has been sent successfully.</div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="contact-form"
                autoComplete="off"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="contact-message"
                    className={`form-input textarea ${errors.message ? 'has-error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>
                <button type="submit" className="contact-send-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Advertisement Section */}
      <div className="advertisement-section" data-aos="fade-up" data-aos-delay="200">
        <div className="advertisement-container">
          <h3 className="advertisement-title">MindStack Services</h3>
          <div className="advertisement-card">
            <div className="advertisement-content">
              <div className="advertisement-header">
                <div className="advertisement-logo">
                  <div className="logo-icon">⚡</div>
                </div>
                <div className="advertisement-brand">
                  <h4 className="brand-name">MindStack</h4>
                  <p className="brand-owner">Chamika Shashipriya</p>
                </div>
              </div>
              
              <div className="advertisement-main">
                <h2 className="advertisement-heading">Our Services</h2>
                <p className="advertisement-tagline">"Campus Project Help – Fast, Affordable, and Reliable"</p>
                
                <div className="services-list">
                  <div className="service-item">
                    <div className="service-icon">✓</div>
                    <span className="service-name">IWT</span>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">✓</div>
                    <span className="service-name">ITP</span>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">✓</div>
                    <span className="service-name">HCI (Figma)</span>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">✓</div>
                    <span className="service-name">MAD (Lab exam 1, 2, 3)</span>
                  </div>
                </div>
              </div>
              
              <div className="advertisement-actions">
                <a href="https://wa.me/94750471511" className="contact-whatsapp-btn">
                  <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  +94 75 047 1511 (WhatsApp Only)
                </a>
              </div>
            </div>
            
            <div className="advertisement-visual">
              <div className="advertisement-image-container">
                <img 
                  src={mindstackImage} 
                  alt="MindStack Services Advertisement" 
                  className="advertisement-image"
                />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <span className="overlay-title">Project Development</span>
                    <span className="overlay-subtitle">Complete Solution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 