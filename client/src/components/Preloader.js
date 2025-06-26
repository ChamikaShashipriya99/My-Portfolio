import React, { useEffect, useRef } from 'react';

function ParticleBG() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Particle setup
    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.18,
      dy: (Math.random() - 0.5) * 0.18,
      color: Math.random() > 0.5 ? '#0dcaf0' : '#0d6efd',
      alpha: 0.10 + Math.random() * 0.18,
    }));
    let running = true;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

const Preloader = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(120deg, #0dcaf0, #0d6efd, #18181b, #0dcaf0)',
    backgroundSize: '400% 400%',
    animation: 'gradientBG 7s ease-in-out infinite',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  }}>
    <ParticleBG />
    <div style={{
      position: 'relative',
      width: 170,
      height: 170,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    }}>
      {/* Multi-layered animated gradient border */}
      <div style={{
        position: 'absolute',
        top: -14,
        left: -14,
        width: 'calc(100% + 28px)',
        height: 'calc(100% + 28px)',
        borderRadius: '3rem',
        background: 'conic-gradient(from 90deg at 50% 50%, #0dcaf0, #0d6efd, #0dcaf0 100%)',
        filter: 'blur(10px)',
        opacity: 0.7,
        zIndex: 1,
        animation: 'spin 2.5s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: -24,
        left: -24,
        width: 'calc(100% + 48px)',
        height: 'calc(100% + 48px)',
        borderRadius: '3.5rem',
        background: 'linear-gradient(120deg, rgba(13,202,240,0.10) 0%, rgba(24,24,27,0.0) 100%)',
        filter: 'blur(18px)',
        opacity: 0.5,
        zIndex: 0,
      }} />
      {/* Glassy card */}
      <div style={{
        position: 'relative',
        width: 140,
        height: 140,
        borderRadius: '2.5rem',
        background: 'rgba(24,24,27,0.55)',
        boxShadow: '0 8px 32px 0 rgba(13,202,240,0.13), 0 2px 8px 0 rgba(0,0,0,0.18)',
        border: '1.5px solid rgba(13,202,240,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        backdropFilter: 'blur(8px) saturate(140%)',
        WebkitBackdropFilter: 'blur(8px) saturate(140%)',
      }}>
        <img
          src={process.env.PUBLIC_URL + '/mindstack-favicon.png'}
          alt="MindStack Logo"
          style={{
            width: 100,
            height: 100,
            borderRadius: '2rem',
            boxShadow: '0 2px 16px 0 rgba(13,202,240,0.18)',
            zIndex: 2,
            background: '#fff',
            padding: 10,
            animation: 'pulse 1.6s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 2px 16px 0 rgba(13,202,240,0.18); }
          50% { box-shadow: 0 0 32px 8px #0dcaf0, 0 2px 16px 0 rgba(13,202,240,0.18); }
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
    <div style={{ color: '#0dcaf0', fontWeight: 700, fontSize: '1.2rem', marginTop: 32, letterSpacing: 1, textShadow: '0 2px 16px rgba(13,202,240,0.10)' }}>Loading...</div>
  </div>
);

export default Preloader; 