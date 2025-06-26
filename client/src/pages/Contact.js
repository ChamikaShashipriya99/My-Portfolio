import React, { useState } from 'react';

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

const fieldIcons = {
  name: <i className="bi bi-person-fill text-info me-2"></i>,
  email: <i className="bi bi-envelope-fill text-info me-2"></i>,
  message: <i className="bi bi-chat-dots-fill text-info me-2"></i>,
};

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

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
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5" 
      style={{ 
        background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)', 
        color: '#fff',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <style>{`
        .contact-form-dark::placeholder {
          color: #6c757d !important;
          opacity: 1 !important;
        }
        .contact-form-dark:focus::placeholder {
          color: #0dcaf0 !important;
          opacity: 0.7 !important;
        }
        .contact-social-btn {
          background: rgba(13,202,240,0.18);
          color: #fff !important;
          border: 1.5px solid rgba(13,202,240,0.35);
          border-radius: 2rem;
          box-shadow: 0 4px 24px 0 rgba(13,202,240,0.10), 0 2px 8px 0 rgba(0,0,0,0.18);
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.7rem 1.6rem;
          margin: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
          backdrop-filter: blur(2px);
        }
        .contact-social-btn:hover, .contact-send-btn:hover {
          background: rgba(13,202,240,0.32);
          color: #18181b !important;
          box-shadow: 0 6px 32px 0 rgba(13,202,240,0.18), 0 2px 8px 0 rgba(0,0,0,0.22);
          transform: scale(1.06) translateY(-2px);
        }
        .contact-send-btn {
          background: rgba(13,202,240,0.18);
          color: #fff !important;
          border: 1.5px solid rgba(13,202,240,0.35);
          border-radius: 2rem;
          box-shadow: 0 4px 24px 0 rgba(13,202,240,0.10), 0 2px 8px 0 rgba(0,0,0,0.18);
          font-weight: 700;
          font-size: 1.18rem;
          padding: 0.9rem 2.5rem;
          margin: 0.4rem auto 0 auto;
          display: block;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.18s;
          backdrop-filter: blur(2px);
        }
        @media (max-width: 600px) {
          .contact-send-btn {
            width: 100%;
            font-size: 1.05rem;
            padding: 0.8rem 0;
          }
        }
        .contact-error {
          color: #ff4d4f;
          font-size: 0.98rem;
          margin-top: 0.2rem;
          margin-bottom: 0.2rem;
          text-align: left;
        }
      `}</style>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12">
            <div className="p-5 rounded-4 shadow-lg mx-auto" style={{ background: 'rgba(24,24,27,0.4)', maxWidth: 900 }}>
              <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up">Contact</h2>
              <p className="mb-4 text-light" data-aos="fade-up" data-aos-delay="200">Feel free to reach out via the form below or connect with me on social media.</p>
              {/* Social Icons Row */}
              <div className="d-flex justify-content-center align-items-center gap-3 mb-4" data-aos="fade-up" data-aos-delay="250">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'rgba(13,202,240,0.10)',
                      transition: 'background 0.2s',
                      boxShadow: '0 2px 8px 0 rgba(13,202,240,0.08)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,202,240,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,202,240,0.10)')}
                  >
                    <img src={link.icon} alt={link.name} style={{ width: 26, height: 26, borderRadius: 4, background: link.name === 'WhatsApp' ? '#fff' : 'transparent' }} />
                  </a>
                ))}
              </div>
              {/* Success/alert area (placeholder, Formspree will show real message) */}
              <div id="contact-alert" style={{ minHeight: 28 }}></div>
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
                autoComplete="off"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mb-3">
                  <span className="text-info me-2">{fieldIcons.name}</span>
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white border-info ps-5 contact-form-dark" 
                    name="name" 
                    placeholder="Your Name" 
                    value={form.name}
                    onChange={handleChange}
                    required 
                    style={{ height: 48 }} 
                  />
                  {errors.name && <div className="contact-error">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <span className="text-info me-2">{fieldIcons.email}</span>
                  <input 
                    type="email" 
                    className="form-control bg-dark text-white border-info ps-5 contact-form-dark" 
                    name="email" 
                    placeholder="Your Email" 
                    value={form.email}
                    onChange={handleChange}
                    required 
                    style={{ height: 48 }} 
                  />
                  {errors.email && <div className="contact-error">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <span className="text-info me-2">{fieldIcons.message}</span>
                  <textarea 
                    className="form-control bg-dark text-white border-info ps-5 contact-form-dark" 
                    name="message" 
                    rows="4" 
                    placeholder="Your Message" 
                    value={form.message}
                    onChange={handleChange}
                    required 
                    style={{ minHeight: 110 }}
                  ></textarea>
                  {errors.message && <div className="contact-error">{errors.message}</div>}
                </div>
                <button 
                  type="submit"
                  className="contact-send-btn"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 