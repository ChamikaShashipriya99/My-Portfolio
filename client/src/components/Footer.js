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
  <footer className="mt-20 pt-20 pb-8 relative w-full glass-card rounded-t-3xl border-t-2 border-primary-500/20 shadow-2xl shadow-primary-500/10 text-gray-300 z-10 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* About */}
        <div className="lg:col-span-1">
          <h5 className="font-bold text-primary-500 mb-4 text-xl tracking-wide">About This Portfolio</h5>
          <p className="text-gray-400 text-lg leading-relaxed">
            This is the personal portfolio of <span className="font-semibold text-primary-500">Chamika Shashipriya</span>, a passionate Full-Stack Developer and UI/UX Designer. Built with React and Tailwind CSS, featuring dynamic GitHub integration and modern glassmorphism design.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h6 className="font-bold text-primary-500 mb-4 text-lg">Quick Links</h6>
          <ul className="space-y-3">
            {quickLinks.map(link => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="text-gray-300 font-semibold text-lg transition-all duration-300 hover:text-primary-500 hover:translate-x-1 inline-block"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Social & Contact */}
        <div>
          <h6 className="font-bold text-primary-500 mb-4 text-lg">Connect</h6>
          <div className="flex flex-wrap gap-3 mb-4">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary-500/25 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <img src={link.icon} alt={link.name} className="w-6 h-6 rounded" style={{ background: link.name === 'WhatsApp' ? '#fff' : 'transparent' }} />
              </a>
            ))}
          </div>
          <div className="space-y-2 text-gray-400">
            {socialLinks.filter(l => l.display).map(link => (
              <div key={link.name} className="flex items-center gap-3">
                <img src={link.icon} alt={link.name} className="w-5 h-5 rounded" style={{ background: link.name === 'WhatsApp' ? '#fff' : 'transparent' }} />
                <span className="text-sm">{link.display}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={process.env.PUBLIC_URL + '/mindstack-favicon.png'} alt="MindStack Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-primary-500/10" />
          <span className="font-bold text-primary-500 text-lg tracking-wide">
            © {new Date().getFullYear()} Chamika Shashipriya. All rights reserved.
          </span>
        </div>
        <button
          className="glass-button px-6 py-3 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Back to Top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;