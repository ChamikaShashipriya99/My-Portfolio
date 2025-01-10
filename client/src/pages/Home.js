import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

function useTypewriter(texts, speed = 100, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const currentText = Array.isArray(texts) ? texts[loopNum % texts.length] : texts;

  useEffect(() => {
    let timer;
    const handleType = () => {
      if (!isDeleting) {
        setDisplayed(currentText.substring(0, displayed.length + 1));
        setTypingSpeed(speed);
        if (displayed.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(currentText.substring(0, displayed.length - 1));
        setTypingSpeed(speed / 2);
        if (displayed.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, loopNum, currentText, speed, pause, typingSpeed]);

  return displayed;
}

const Home = () => {
  const typewriterText = useTypewriter([
    'Full-Stack Developer',
    'UI/UX Designer',
    'Mobile Application Developer'
  ], 90, 1200);

  return (
    <section
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative"
      id="home"
      style={{
        background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)',
        color: '#fff',
        fontFamily: 'Montserrat, Inter, Arial, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Enhanced Animated Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(13,202,240,0.04) 0%, rgba(255,255,255,0.01) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
          animation: 'gradientMove 8s ease-in-out infinite alternate',
        }}
      />
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center flex-column flex-md-row">
          <div className="col-md-5 text-center mb-5 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-right" data-aos-delay="200">
            <div
              style={{
                display: 'inline-block',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                border: '8px solid #0dcaf0',
                boxShadow: '0 12px 48px 0 rgba(13,202,240,0.25)',
                background: 'rgba(35,39,47,0.7)',
                padding: 0,
                position: 'relative',
              }}
            >
              {/* Subtle glow/gradient behind image */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: 'calc(100% + 40px)',
                height: 'calc(100% + 40px)',
                background: 'radial-gradient(circle, rgba(13,202,240,0.18) 0%, rgba(24,24,27,0) 80%)',
                zIndex: 0,
                filter: 'blur(8px)',
              }} />
              <img
                src={profileImg}
                alt="Chamika Shashipriya"
                style={{ width: 320, height: 400, objectFit: 'cover', borderRadius: '2rem', position: 'relative', zIndex: 1 }}
                data-aos="zoom-in"
                data-aos-delay="300"
              />
            </div>
          </div>
          <div className="col-md-7 text-center text-md-start d-flex flex-column align-items-center align-items-md-start" data-aos="fade-left" data-aos-delay="400">
            <h1
              style={{
                fontWeight: 900,
                fontSize: '3.2rem',
                lineHeight: 1.1,
                marginBottom: '0.5rem',
                letterSpacing: '1px',
                textShadow: '0 2px 16px rgba(13,202,240,0.08)',
              }}
            >
              Chamika <br />
              <span style={{ color: '#0dcaf0' }}>Shashipriya</span>
            </h1>
            <h2
              style={{
                fontWeight: 700,
                fontSize: '2rem',
                color: '#0dcaf0',
                marginBottom: '1.2rem',
                minHeight: '2.2rem',
                letterSpacing: '1px',
                whiteSpace: 'pre',
                textShadow: '0 2px 16px rgba(13,202,240,0.08)',
              }}
            >
              {typewriterText}
              <span className="blinking-cursor" style={{ color: '#0dcaf0', fontWeight: 900 }}>|</span>
            </h2>
            <p style={{ color: '#e0e0e0', marginBottom: '2.2rem', fontSize: '1.15rem', maxWidth: 420 }}>
              Building modern web experiences.
            </p>
            <a
              href="#projects"
              className="btn"
              style={{
                background: '#0dcaf0',
                color: '#18181b',
                fontWeight: 700,
                borderRadius: '2rem',
                padding: '0.85rem 2.5rem',
                fontSize: '1.15rem',
                boxShadow: '0 2px 8px 0 rgba(13,202,240,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: 'none',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 