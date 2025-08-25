import './App.css';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import NotFound from './pages/NotFound';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [availableLanguages, setAvailableLanguages] = useState([]);

  const GITHUB_USERNAME = 'ChamikaShashipriya99';
  const REPO_COUNT = 100;

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

  // Fetch available languages from GitHub
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}`);
        const repos = await response.json();
        
        if (Array.isArray(repos)) {
          const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))].sort();
          setAvailableLanguages(languages);
        }
      } catch (error) {
        console.error('Failed to fetch languages:', error);
        // Fallback to common languages
        setAvailableLanguages(['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'PHP']);
      }
    };

    fetchLanguages();
  }, []);

  const handleProjectFilter = (filter) => {
    setCurrentFilter(filter);
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <Preloader />;

  return (
    <BrowserRouter>
      <div className="App bg-dark-900 min-h-screen">
        {/* 3D Particle Background */}
        <ParticleBackground />
        
        {/* Enhanced Floating Transparent Navbar */}
        <nav
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-3'
          }`}
          style={{
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
          }}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <a 
                className="flex items-center font-bold text-primary-500 transition-all duration-300" 
                href="#home" 
                style={{ 
                  letterSpacing: '2px', 
                  fontSize: scrolled ? '1.3rem' : '1.5rem',
                  textShadow: '0 0 20px rgba(13, 202, 240, 0.3)'
                }}
              >
                <img 
                  src={process.env.PUBLIC_URL + '/mindstack-favicon.png'} 
                  alt="MindStack Logo" 
                  className="w-10 h-10 rounded-xl mr-3 shadow-lg shadow-primary-500/10" 
                />
                <span className="gradient-text">
                  Chamika Shashipriya
                </span>
              </a>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 rounded-xl bg-primary-500/10 border border-primary-500/30"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="hidden lg:flex items-center space-x-1" id="navbarNav">
                {[
                  { href: '#home', text: 'Home' },
                  { href: '#about', text: 'About' },
                  { href: '#skills', text: 'Skills' },
                  { href: '#resume', text: 'Resume' },
                  { href: '#contact', text: 'Contact' }
                ].map((item, index) => (
                  <a 
                    key={index}
                    className="relative px-4 py-2 mx-1 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:bg-primary-500/15 hover:text-primary-500 hover:-translate-y-0.5 group" 
                    href={item.href}
                    style={{ letterSpacing: '0.5px' }}
                  >
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                
                {/* Projects Dropdown */}
                <div className="relative group">
                  <a 
                    className="flex items-center px-4 py-2 mx-1 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:bg-primary-500/15 hover:text-primary-500 hover:-translate-y-0.5 cursor-pointer" 
                    href="#projects"
                    style={{ letterSpacing: '0.5px' }}
                  >
                    Projects
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-dark-800/95 backdrop-blur-xl border border-primary-500/30 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
                    <a 
                      className="block px-4 py-3 text-white text-sm rounded-xl transition-all duration-300 hover:bg-primary-500/20 hover:text-primary-500 hover:translate-x-1"
                      href="#projects"
                      onClick={() => handleProjectFilter('all')}
                    >
                      All Projects
                    </a>
                    {availableLanguages.map((language) => (
                      <a 
                        key={language}
                        className="block px-4 py-3 text-white text-sm rounded-xl transition-all duration-300 hover:bg-primary-500/20 hover:text-primary-500 hover:translate-x-1"
                        href="#projects"
                        onClick={() => handleProjectFilter(language)}
                      >
                        {language}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Add top padding to account for floating navbar */}
        <div className="pt-32">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <WhatIDo />
                <Skills />
                <Projects initialFilter={currentFilter} />
                <Resume />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;