import React from 'react';

const About = () => (
  <section 
    id="about" 
    className="py-5" 
    style={{ 
      background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)', 
      color: '#fff',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12">
          <div className="p-5 rounded-4 shadow-lg mx-auto" style={{ background: 'rgba(24,24,27,0.4)', maxWidth: 900 }}>
            <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up">About Me</h2>
            <p className="lead mb-3" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '1.2rem', color: '#e0e0e0' }}>
              Hello! I'm <span className="fw-semibold text-info">Chamika Shashipriya</span>, a passionate Full-Stack Developer dedicated to building modern, scalable, and user-friendly web applications. With a strong foundation in JavaScript, React.js, Node.js, and the MERN stack, I love turning ideas into reality through code.
            </p>
            <p data-aos="fade-up" data-aos-delay="300" style={{ color: '#b0b0b0', fontSize: '1.08rem' }}>
              My journey in web development began with a curiosity for how things work on the internet. Since then, I've honed my skills in both frontend and backend technologies, always striving to learn and adapt to new trends. I enjoy collaborating with others, solving complex problems, and delivering high-quality solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 