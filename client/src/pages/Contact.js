import React, { useState } from 'react';
import './Contact.css';

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
    </section>
  );
};

export default Contact; 