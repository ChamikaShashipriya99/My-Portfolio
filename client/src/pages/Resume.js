import React from 'react';
import './Resume.css';

const timeline = [
  {
    type: 'Education',
    year: 'July 2023 - Present',
    title: 'BSc (Hons) in Information Technology',
    place: 'Sri Lanka Institute of Information Technology (SLIIT)',
    iconUrl: 'https://img.icons8.com/color/48/000000/graduation-cap.png',
  },
  {
    type: 'Education',
    year: '2019 - 2022',
    title: 'Automobile Motor Mechanic Course',
    place: 'Automobile Engineering Training Institute - Orugodawatta',
    iconUrl: 'https://img.icons8.com/color/48/000000/car--v1.png',
  },
  {
    type: 'Education',
    year: '2016',
    title: 'Information & Communication Technology (MS Office Package) Course',
    place: 'The Open University Sri Lanka, Ambalangoda',
    iconUrl: 'https://img.icons8.com/color/48/000000/laptop--v1.png',
  },
  {
    type: 'Education',
    year: '2022',
    title: 'Short Course in Listening and Speaking',
    place: 'The Open University Sri Lanka, Ambalangoda',
    iconUrl: 'https://img.icons8.com/color/48/000000/microphone.png',
  },
];

const Resume = () => (
  <section id="resume" className="resume-section">
    <div className="resume-container">
      <h2 className="resume-title" data-aos="fade-up">
        <span className="title-accent">My</span> Resume
      </h2>
      <p className="resume-subtitle" data-aos="fade-up" data-aos-delay="100">
        Download my resume or explore my journey below
      </p>
      <div className="resume-card">
        {/* Left: Info & Roadmap */}
        <div className="resume-info">
          <a
            href="https://drive.google.com/file/d/1TyhpkBU6cNPi3uqAojoDZknd57lGbcTz/view?usp=sharing"
            className="resume-download-btn"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="resume-download-icon">⬇️</span> Download Resume (PDF)
          </a>
          <div className="resume-summary" data-aos="fade-up" data-aos-delay="300">
            Passionate about building impactful software and always eager to learn new technologies. Here's a quick look at my journey so far:
          </div>
          <div className="roadmap" data-aos="fade-up" data-aos-delay="400">
            {timeline.map((item, idx) => (
              <div className="roadmap-milestone" key={idx}>
                <div className="roadmap-step-circle">
                  <span className="roadmap-step-number">{idx + 1}</span>
                  <img src={item.iconUrl} alt={item.title + ' icon'} className="roadmap-icon" />
                </div>
                <div className="roadmap-content">
                  <div className="roadmap-type">{item.type}</div>
                  <div className="roadmap-title">{item.title}</div>
                  <div className="roadmap-place">{item.place}</div>
                  <div className="roadmap-year">{item.year}</div>
                  {item.desc && <div className="roadmap-desc">{item.desc}</div>}
                </div>
                {idx !== timeline.length - 1 && <div className="roadmap-connector" />}
              </div>
            ))}
          </div>
        </div>
        {/* Right: PDF Preview */}
        <div className="resume-preview" data-aos="fade-left" data-aos-delay="600">
          <div className="resume-pdf-card">
            <iframe
              src="https://drive.google.com/file/d/1TyhpkBU6cNPi3uqAojoDZknd57lGbcTz/preview"
              title="Resume Preview"
              style={{ width: '100%', height: 420, border: 'none', borderRadius: '1rem' }}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume; 