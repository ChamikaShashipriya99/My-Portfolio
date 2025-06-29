import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Home from './pages/Home';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="App bg-dark min-vh-100">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Enhanced Floating Transparent Navbar */}
      <nav
        className={`navbar navbar-expand-lg position-fixed top-0 start-50 translate-middle-x transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-3'
        }`}
        style={{
          zIndex: 1000,
          width: '95%',
          maxWidth: '1200px',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(15px)',
          background: scrolled 
            ? 'rgba(24, 24, 27, 0.85)' 
            : 'rgba(24, 24, 27, 0.75)',
          border: scrolled 
            ? '1px solid rgba(13, 202, 240, 0.3)' 
            : '1px solid rgba(13, 202, 240, 0.2)',
          borderRadius: '2rem',
          boxShadow: scrolled
            ? '0 8px 32px rgba(13, 202, 240, 0.15), 0 4px 16px rgba(0, 0, 0, 0.3)'
            : '0 4px 20px rgba(13, 202, 240, 0.1), 0 2px 8px rgba(0, 0, 0, 0.2)',
          marginTop: '1rem',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="container">
          <a 
            className="navbar-brand fw-bold text-info d-flex align-items-center" 
            href="#home" 
            style={{ 
              letterSpacing: '2px', 
              fontSize: scrolled ? '1.3rem' : '1.5rem',
              transition: 'font-size 0.3s ease-in-out',
              textShadow: '0 0 20px rgba(13, 202, 240, 0.3)'
            }}
          >
            <img src={process.env.PUBLIC_URL + '/mindstack-favicon.png'} alt="MindStack Logo" style={{ width: 38, height: 38, borderRadius: '12px', marginRight: 10, boxShadow: '0 2px 8px 0 rgba(13,202,240,0.10)' }} />
            <span style={{ 
              background: 'linear-gradient(45deg, #0dcaf0, #0d6efd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Chamika Shashipriya
            </span>
          </a>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            style={{
              background: 'rgba(13, 202, 240, 0.1)',
              border: '1px solid rgba(13, 202, 240, 0.3)',
              borderRadius: '0.75rem',
              padding: '0.5rem',
            }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                { href: '#home', text: 'Home' },
                { href: '#about', text: 'About' },
                { href: '#skills', text: 'Skills' },
                { href: '#projects', text: 'Projects' },
                { href: '#resume', text: 'Resume' },
                { href: '#contact', text: 'Contact' }
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a 
                    className="nav-link fw-semibold px-3 mx-1 position-relative" 
                    href={item.href}
                    style={{ 
                      color: '#fff',
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      borderRadius: '1rem',
                      transition: 'all 0.3s ease-in-out',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(13, 202, 240, 0.15)';
                      e.target.style.color = '#0dcaf0';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {item.text}
                    <span 
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #0dcaf0, #0d6efd)',
                        transition: 'width 0.3s ease-in-out',
                        borderRadius: '1px',
                      }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Add top padding to account for floating navbar */}
      <div style={{ paddingTop: '120px' }}>
        {/* Sections */}
        <Home />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
