import React from 'react';
import './WhatIDo.css';

const whatIDo = [
  {
    title: 'UI/UX Design',
    icon: '🎨',
    desc: 'Designing intuitive and visually appealing user interfaces and experiences for web and mobile applications.'
  },
  {
    title: 'ITP Projects',
    icon: '💡',
    desc: 'Developing innovative Information Technology Projects with a focus on solving real-world problems.'
  },
  {
    title: 'OOP Projects',
    icon: '🧩',
    desc: 'Building robust and maintainable software using Object-Oriented Programming principles.'
  },
  {
    title: 'MAD Projects',
    icon: '📱',
    desc: 'Creating modern Mobile Application Development projects for Android platforms.'
  },
];

const WhatIDo = () => (
  <section id="what-i-do" className="whatido-section">
    <div className="whatido-container">
      <h2 className="whatido-title" data-aos="fade-up">
        <span className="title-accent">What</span> I Do
      </h2>
      <p className="whatido-subtitle" data-aos="fade-up" data-aos-delay="100">
        My main areas of expertise and focus
      </p>
      <div className="whatido-steps">
        {whatIDo.map((item, idx) => (
          <div className="whatido-step" key={item.title} data-aos="zoom-in" data-aos-delay={idx * 120}>
            <div className="whatido-icon">{item.icon}</div>
            <div className="whatido-content">
              <div className="whatido-step-title">{item.title}</div>
              <div className="whatido-step-desc">{item.desc}</div>
            </div>
            {idx !== whatIDo.length - 1 && <div className="whatido-connector" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo; 