import React, { useState } from 'react';
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
    <section 
      id="contact" 
      className="py-20 relative z-10 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)',
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-[5vw] w-56 h-56 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute top-22 right-[8vw] w-36 h-36 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-full blur-3xl opacity-30 animate-bounce-slow" />
        <div className="absolute bottom-10 left-[18vw] w-44 h-44 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl opacity-30 animate-float animation-delay-400" />
        <div className="absolute bottom-18 right-[15vw] w-28 h-28 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-full blur-3xl opacity-30 animate-bounce-slow animation-delay-600" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-black text-4xl lg:text-5xl mb-6 text-shadow" data-aos="fade-up">
            <span className="text-white">Contact</span> <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Feel free to reach out via the form or connect with me on social media.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row glass-card overflow-hidden max-w-6xl mx-auto">
          {/* Left: Info & Socials */}
          <div className="lg:w-1/2 p-12 bg-dark-800/55 border-r border-primary-500/20">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Let's Connect</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm open to opportunities, collaborations, or just a friendly chat. Drop me a message or connect via social links below!
            </p>
            
            {/* Availability Component */}
            <div className="glass-card p-6 mb-6 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/15 hover:border-primary-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 flex items-center justify-center animate-pulse">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#sparkle)"/>
                    <defs>
                      <linearGradient id="sparkle" x1="12" y1="2" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA500"/>
                        <stop offset="1" stopColor="#FFD700"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Availability</h4>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-600/30 rounded-2xl px-4 py-3 shadow-lg shadow-green-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-green-600/25 cursor-pointer">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/60 animate-pulse" />
                <span className="text-green-500 text-sm font-semibold">Open to new opportunities</span>
              </div>
            </div>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary-500/25 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20"
                  title={link.name}
                >
                  <img src={link.icon} alt={link.name} className="w-7 h-7" />
                </a>
              ))}
            </div>
            
            <div className="space-y-3">
              <div className="text-lg">
                <span className="text-primary-500 font-semibold">Email:</span>
                <a href="mailto:chamikashashipriya3@gmail.com" className="text-white hover:text-primary-500 transition-colors duration-300 ml-2 underline">
                  chamikashashipriya3@gmail.com
                </a>
              </div>
              <div className="text-lg">
                <span className="text-primary-500 font-semibold">WhatsApp:</span>
                <a href="https://wa.me/94704120358" className="text-white hover:text-primary-500 transition-colors duration-300 ml-2 underline">
                  +94 70 412 0358
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="lg:w-1/2 p-12 flex items-center justify-center">
            {success ? (
              <div className="glass-card p-8 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">Thank You!</h3>
                <p className="text-gray-400 text-lg">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="w-full max-w-md space-y-6"
                autoComplete="off"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    className={`w-full px-4 pt-6 pb-2 bg-dark-700/70 border-2 rounded-2xl text-white text-lg font-medium outline-none transition-all duration-300 backdrop-blur-md ${
                      errors.name ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'
                    } focus:shadow-lg focus:shadow-primary-500/20`}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    htmlFor="contact-name" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      form.name ? 'top-2 text-sm text-primary-500 bg-dark-800/80 px-2 rounded-lg' : 'top-4 text-lg text-gray-400'
                    }`}
                  >
                    Name
                  </label>
                  {errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
                  }
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    className={`w-full px-4 pt-6 pb-2 bg-dark-700/70 border-2 rounded-2xl text-white text-lg font-medium outline-none transition-all duration-300 backdrop-blur-md ${
                      errors.email ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'
                    } focus:shadow-lg focus:shadow-primary-500/20`}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label 
                    htmlFor="contact-email" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      form.email ? 'top-2 text-sm text-primary-500 bg-dark-800/80 px-2 rounded-lg' : 'top-4 text-lg text-gray-400'
                    }`}
                  >
                    Email
                  </label>
                  {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
                  }
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    id="contact-message"
                    className={`w-full px-4 pt-6 pb-2 bg-dark-700/70 border-2 rounded-2xl text-white text-lg font-medium outline-none transition-all duration-300 backdrop-blur-md resize-none min-h-[120px] ${
                      errors.message ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'
                    } focus:shadow-lg focus:shadow-primary-500/20`}
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                  <label 
                    htmlFor="contact-message" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      form.message ? 'top-2 text-sm text-primary-500 bg-dark-800/80 px-2 rounded-lg' : 'top-4 text-lg text-gray-400'
                    }`}
                  >
                    Message
                  </label>
                  {errors.message && <div className="text-red-400 text-sm mt-1">{errors.message}</div>}
                  }
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-primary-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Advertisement Section */}
      <div className="mt-20 relative" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6">
          <h3 className="font-black text-4xl gradient-text text-center mb-12">MindStack Services</h3>
          <div className="flex flex-col lg:flex-row glass-card overflow-hidden max-w-6xl mx-auto">
            <div className="lg:w-1/2 p-12">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-15 h-15 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40">
                  <div className="text-3xl">⚡</div>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">MindStack</h4>
                  <p className="text-lg text-gray-400 italic">Chamika Shashipriya</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Services</h2>
                <p className="text-lg text-gray-400 italic mb-8 leading-relaxed">
                  "Campus Project Help – Fast, Affordable, and Reliable"
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {['ITP', 'IWT', 'HCI (Figma)', 'MAD (Lab exam 1, 2, 3)'].map((service) => (
                    <div key={service} className="flex items-center gap-3 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl transition-all duration-300 hover:bg-primary-500/15 hover:border-primary-500/30 hover:-translate-y-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                      <span className="text-white font-semibold">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <a 
                  href="https://wa.me/94750471511" 
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-600/40"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  +94 75 047 1511 (WhatsApp Only)
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-12 flex items-center justify-center bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img 
                  src={mindstackImage} 
                  alt="MindStack Services Advertisement" 
                  className="w-full h-full object-contain bg-dark-800/80 transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white">Project Development</span>
                    <br />
                    <span className="text-lg text-white/90">Complete Solution</span>
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