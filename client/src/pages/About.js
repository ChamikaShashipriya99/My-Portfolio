import React from 'react';

const About = () => (
  <section 
    id="about" 
    className="py-20 relative z-10"
    style={{ 
      background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)',
    }}
  >
    <div className="container mx-auto px-6">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="glass-card p-12 mx-auto shadow-2xl">
            <h2 className="font-black text-4xl lg:text-5xl gradient-text mb-6 text-shadow" data-aos="fade-up">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Hello! I'm <span className="font-semibold text-primary-500">Chamika Shashipriya</span>, a passionate Full-Stack Developer dedicated to building modern, scalable, and user-friendly web applications. With a strong foundation in JavaScript, React.js, Node.js, and the MERN stack, I love turning ideas into reality through code.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              My journey in web development began with a curiosity for how things work on the internet. Since then, I've honed my skills in both frontend and backend technologies, always striving to learn and adapt to new trends. I enjoy collaborating with others, solving complex problems, and delivering high-quality solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;