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

  // Flicker effect state
  const [flicker, setFlicker] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        .flicker {
          animation: flicker-anim 0.5s linear;
        }
        @keyframes flicker-anim {
          0%, 100% { opacity: 1; filter: brightness(1); }
          8% { opacity: 0.2; filter: brightness(2.2); }
          15% { opacity: 0.7; filter: brightness(0.5); }
          22% { opacity: 0.1; filter: brightness(2.5); }
          30% { opacity: 0.9; filter: brightness(0.7); }
          38% { opacity: 0.3; filter: brightness(2.8); }
          45% { opacity: 0.8; filter: brightness(0.4); }
          52% { opacity: 0.1; filter: brightness(2.7); }
          60% { opacity: 0.6; filter: brightness(1.7); }
          68% { opacity: 0.2; filter: brightness(2.3); }
          75% { opacity: 0.8; filter: brightness(0.6); }
          82% { opacity: 0.1; filter: brightness(2.6); }
          90% { opacity: 1; filter: brightness(1); }
        }
      `}</style>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center flex-column flex-md-row">
          <div className="col-md-5 text-center mb-5 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-right" data-aos-delay="200">
            <div
              className={`profile-img-wrapper position-relative${flicker ? ' flicker' : ''}`}
              style={{
                display: 'inline-block',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                border: '8px solid #0dcaf0',
                boxShadow: '0 12px 48px 0 rgba(13,202,240,0.25)',
                background: 'rgba(35,39,47,0.7)',
                padding: 0,
                position: 'relative',
                transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 0 48px 8px #0dcaf0, 0 12px 48px 0 rgba(13,202,240,0.25)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 48px 0 rgba(13,202,240,0.25)';
              }}
            >
              {/* Animated gradient border */}
              <div style={{
                position: 'absolute',
                top: -14,
                left: -14,
                width: 'calc(100% + 28px)',
                height: 'calc(100% + 28px)',
                borderRadius: '3rem',
                background: 'conic-gradient(from 90deg at 50% 50%, #0dcaf0, #0d6efd, #0dcaf0 100%)',
                filter: 'blur(12px)',
                opacity: 0.7,
                zIndex: 0,
                animation: 'spin 6s linear infinite',
              }} />
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
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
                style={{ width: 320, height: 400, objectFit: 'cover', borderRadius: '2rem', position: 'relative', zIndex: 1, boxShadow: '0 4px 32px 0 rgba(13,202,240,0.10)' }}
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
              className="btn glassy-btn"
              style={{
                background: 'rgba(13,202,240,0.18)',
                color: '#18181b',
                fontWeight: 700,
                borderRadius: '1rem',
                padding: '0.85rem 2.5rem',
                fontSize: '1.15rem',
                boxShadow: '0 2px 16px 0 rgba(13,202,240,0.15)',
                border: '1.5px solid rgba(13,202,240,0.35)',
                backdropFilter: 'blur(12px) saturate(160%)',
                WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = 'rgba(13,202,240,0.32)';
                e.currentTarget.style.boxShadow = '0 6px 32px 0 rgba(13,202,240,0.18)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(13,202,240,0.18)';
                e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(13,202,240,0.15)';
              }}
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