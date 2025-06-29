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

  // Enhanced animation states
  const [isHovered, setIsHovered] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticleCount(prev => (prev + 1) % 8);
    }, 2000);
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
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
        
        @keyframes morphShape {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 80% / 25% 80% 20% 75%; }
          75% { border-radius: 80% 20% 60% 40% / 60% 40% 60% 20%; }
        }
        
        @keyframes holographicShift {
          0% { filter: hue-rotate(0deg) brightness(1) contrast(1.05); }
          25% { filter: hue-rotate(30deg) brightness(1.02) contrast(1.08); }
          50% { filter: hue-rotate(60deg) brightness(1) contrast(1.05); }
          75% { filter: hue-rotate(30deg) brightness(1.02) contrast(1.08); }
          100% { filter: hue-rotate(0deg) brightness(1) contrast(1.05); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0px) translateX(0px) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(var(--x)) scale(1); opacity: 0; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(13,202,240,0.3), 0 0 40px rgba(13,202,240,0.2), 0 0 60px rgba(13,202,240,0.1); }
          50% { box-shadow: 0 0 30px rgba(13,202,240,0.5), 0 0 60px rgba(13,202,240,0.3), 0 0 90px rgba(13,202,240,0.2); }
        }
        
        @keyframes rotate3D {
          0% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
          25% { transform: rotateY(8deg) rotateX(4deg) rotateZ(1deg); }
          50% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
          75% { transform: rotateY(-8deg) rotateX(-4deg) rotateZ(-1deg); }
          100% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
        }
        
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) translateZ(0px) rotateY(0deg); }
          25% { transform: translateY(-8px) translateZ(5px) rotateY(3deg); }
          50% { transform: translateY(-15px) translateZ(10px) rotateY(0deg); }
          75% { transform: translateY(-8px) translateZ(5px) rotateY(-3deg); }
        }
        
        @keyframes tilt3D {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33% { transform: rotateX(2deg) rotateY(3deg) rotateZ(1deg); }
          66% { transform: rotateX(-2deg) rotateY(-3deg) rotateZ(-1deg); }
        }
        
        @keyframes dataStream {
          0% { transform: translateY(100%) scaleY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100%) scaleY(1); opacity: 0; }
        }
        
        .profile-container {
          animation: float3D 6s ease-in-out infinite, tilt3D 8s ease-in-out infinite;
          transform-style: preserve-3d;
          perspective: 1200px;
          transform-origin: center center;
          filter: drop-shadow(0 10px 20px rgba(13,202,240,0.3));
        }
        
        .profile-container:hover {
          animation-play-state: paused;
          transform: scale(1.1) rotateY(15deg) rotateX(5deg);
          filter: drop-shadow(0 20px 40px rgba(13,202,240,0.5));
        }
        
        .morphing-border {
          animation: morphShape 8s ease-in-out infinite;
        }
        
        .holographic-effect {
          animation: holographicShift 4s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #0dcaf0, #0d6efd);
          border-radius: 50%;
          animation: particleFloat 3s ease-out infinite;
          animation-delay: calc(var(--delay) * 0.5s);
        }
        
        .data-stream {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to top, transparent, #0dcaf0, transparent);
          animation: dataStream 2s ease-in-out infinite;
          animation-delay: calc(var(--delay) * 0.3s);
        }
      `}</style>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center flex-column flex-md-row">
          <div className="col-md-5 text-center mb-5 mb-md-0 d-flex flex-column align-items-center" data-aos="fade-right" data-aos-delay="200">
            <div
              className="profile-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                position: 'relative',
                display: 'inline-block',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: isHovered ? 'scale(1.1) rotateY(15deg) rotateX(5deg)' : 'scale(1)',
                transformStyle: 'preserve-3d',
                perspective: '1200px',
                filter: isHovered 
                  ? 'drop-shadow(0 20px 40px rgba(13,202,240,0.5))' 
                  : 'drop-shadow(0 10px 20px rgba(13,202,240,0.3))',
              }}
            >
              {/* Outer morphing border */}
              <div 
                className="morphing-border"
                style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  background: 'linear-gradient(45deg, #0dcaf0, #0d6efd, #0dcaf0, #0d6efd)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 3s ease infinite, morphShape 8s ease-in-out infinite',
                  zIndex: 0,
                  filter: 'blur(8px)',
                  opacity: 0.8,
                }}
              />
              
              {/* Middle holographic layer */}
              <div 
                className="holographic-effect"
                style={{
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  width: 'calc(100% + 20px)',
                  height: 'calc(100% + 20px)',
                  background: 'linear-gradient(135deg, rgba(13,202,240,0.3), rgba(13,110,253,0.3), rgba(13,202,240,0.3))',
                  borderRadius: '2.5rem',
                  zIndex: 1,
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                }}
              />
              
              {/* Main profile container */}
              <div
                className="pulse-glow"
                style={{
                  position: 'relative',
                  borderRadius: '2.5rem',
                  padding: '12px',
                  background: 'rgba(35,39,47,0.9)',
                  border: '3px solid rgba(13,202,240,0.4)',
                  zIndex: 2,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      '--delay': i,
                      '--x': `${(i % 2 === 0 ? 1 : -1) * (Math.random() * 50 + 25)}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
                
                {/* Data streams */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`stream-${i}`}
                    className="data-stream"
                    style={{
                      '--delay': i,
                      left: `${20 + i * 20}%`,
                    }}
                  />
                ))}
                
                {/* Profile image with enhanced effects */}
                <div style={{ position: 'relative', borderRadius: '2rem', overflow: 'hidden' }}>
                  <img
                    src={profileImg}
                    alt="Chamika Shashipriya"
                    style={{
                      width: 320,
                      height: 400,
                      objectFit: 'cover',
                      borderRadius: '2rem',
                      position: 'relative',
                      zIndex: 3,
                      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                      filter: isHovered ? 'brightness(1.2) contrast(1.1) saturate(1.2)' : 'brightness(1) contrast(1.05)',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  
                  {/* Overlay effects */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: isHovered 
                        ? 'linear-gradient(135deg, rgba(13,202,240,0.2), rgba(13,110,253,0.1))'
                        : 'transparent',
                      borderRadius: '2rem',
                      zIndex: 4,
                      transition: 'all 0.4s ease',
                    }}
                  />
                  
                  {/* Scanning line effect */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #0dcaf0, transparent)',
                      zIndex: 5,
                      animation: 'scanLine 3s ease-in-out infinite',
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  />
                </div>
                
                {/* Corner accents */}
                <div style={{
                  position: 'absolute',
                  top: -5,
                  left: -5,
                  width: 20,
                  height: 20,
                  border: '2px solid #0dcaf0',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: '8px 0 0 0',
                  zIndex: 6,
                }} />
                <div style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  width: 20,
                  height: 20,
                  border: '2px solid #0dcaf0',
                  borderLeft: 'none',
                  borderBottom: 'none',
                  borderRadius: '0 8px 0 0',
                  zIndex: 6,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -5,
                  left: -5,
                  width: 20,
                  height: 20,
                  border: '2px solid #0dcaf0',
                  borderRight: 'none',
                  borderTop: 'none',
                  borderRadius: '0 0 0 8px',
                  zIndex: 6,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -5,
                  right: -5,
                  width: 20,
                  height: 20,
                  border: '2px solid #0dcaf0',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 0',
                  zIndex: 6,
                }} />
              </div>
              
              {/* Floating tech icons */}
              <div style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 60,
                height: 60,
                background: 'rgba(13,202,240,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 4s ease-in-out infinite',
                zIndex: 7,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(13,202,240,0.3)',
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚛️</span>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 50,
                height: 50,
                background: 'rgba(13,110,253,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 4s ease-in-out infinite reverse',
                zIndex: 7,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(13,110,253,0.3)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>🚀</span>
              </div>
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