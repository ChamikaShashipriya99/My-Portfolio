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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="flex items-center justify-center min-h-screen relative overflow-hidden"
      id="home"
      style={{
        background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)',
        fontFamily: 'Montserrat, Inter, Arial, sans-serif',
      }}
    >
      {/* Enhanced Animated Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none animate-gradient-shift"
        style={{
          background: 'linear-gradient(120deg, rgba(13,202,240,0.04) 0%, rgba(255,255,255,0.01) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-5/12 text-center lg:text-left mb-10 lg:mb-0 flex flex-col items-center lg:items-start" data-aos="fade-right" data-aos-delay="200">
            <div
              className="relative inline-block transition-all duration-700 ease-out transform-gpu"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
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
                className="absolute -top-5 -left-5 w-[calc(100%+40px)] h-[calc(100%+40px)] rounded-[2.5rem] opacity-80 blur-sm animate-gradient-shift"
                style={{
                  background: 'linear-gradient(45deg, #0dcaf0, #0d6efd, #0dcaf0, #0d6efd)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 3s ease infinite, morphShape 8s ease-in-out infinite',
                }}
              />
              
              {/* Middle holographic layer */}
              <div 
                className="absolute -top-2.5 -left-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] rounded-[2.5rem] backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,202,240,0.3), rgba(13,110,253,0.3), rgba(13,202,240,0.3))',
                  animation: 'holographicShift 4s ease-in-out infinite',
                }}
              />
              
              {/* Main profile container */}
              <div
                className="relative rounded-[2.5rem] p-3 bg-dark-700/90 border-4 border-primary-500/40 backdrop-blur-xl animate-pulse-glow"
                style={{
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
                
                {/* Profile image with enhanced effects */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Chamika Shashipriya"
                    className="w-80 h-96 object-cover rounded-2xl relative z-10 transition-all duration-700 ease-out"
                    style={{
                      filter: isHovered ? 'brightness(1.2) contrast(1.1) saturate(1.2)' : 'brightness(1) contrast(1.05)',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  
                  {/* Overlay effects */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-all duration-400 z-20"
                    style={{
                      background: isHovered 
                        ? 'linear-gradient(135deg, rgba(13,202,240,0.2), rgba(13,110,253,0.1))'
                        : 'transparent',
                    }}
                  />
                  
                  {/* Scanning line effect */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent z-30 animate-pulse"
                    style={{
                      animation: 'scanLine 3s ease-in-out infinite',
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  />
                </div>
                
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-5 h-5 border-2 border-primary-500 border-r-0 border-b-0 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-5 h-5 border-2 border-primary-500 border-l-0 border-b-0 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-2 border-primary-500 border-r-0 border-t-0 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-2 border-primary-500 border-l-0 border-t-0 rounded-br-lg" />
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-8 -right-8 w-15 h-15 bg-primary-500/10 rounded-full flex items-center justify-center animate-float backdrop-blur-md border border-primary-500/30">
                <span className="text-2xl">⚛️</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-secondary-500/10 rounded-full flex items-center justify-center backdrop-blur-md border border-secondary-500/30" style={{ animation: 'float 4s ease-in-out infinite reverse' }}>
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-left" data-aos-delay="400">
            <h1 className="font-black text-5xl lg:text-6xl leading-tight mb-2 text-shadow tracking-wide text-white">
              Chamika <br />
              <span className="gradient-text">Shashipriya</span>
            </h1>
            <h2
              className="font-bold text-3xl lg:text-4xl gradient-text mb-5 min-h-[3.5rem] tracking-wide text-shadow-glow whitespace-pre"
            >
              {typewriterText}
              <span className="blinking-cursor text-primary-500 font-black">|</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg lg:text-xl max-w-md leading-relaxed">
              Building modern web experiences with passion and precision.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-primary-500/20 hover:bg-primary-500/30 text-dark-900 font-bold rounded-2xl text-lg shadow-lg shadow-primary-500/15 border-2 border-primary-500/35 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Home;