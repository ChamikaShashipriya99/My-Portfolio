import React from 'react';

const Resume = () => (
  <section 
    id="resume" 
    className="py-5" 
    style={{ 
      background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)', 
      color: '#fff',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12">
          <div className="p-5 rounded-4 shadow-lg text-center mx-auto" style={{ background: 'rgba(35,39,47,0.4)', maxWidth: 900 }}>
            <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up" data-aos-delay="200">Resume</h2>
            <p className="mb-4 text-light" data-aos="fade-up" data-aos-delay="400">Download my resume to learn more about my experience and skills.</p>
            <a
              href="https://drive.google.com/uc?export=download&id=11QOzaa3RMH-R-yrSONQXuwm9XsxZ2Epo"
              className="btn btn-info btn-lg shadow fw-bold"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume; 