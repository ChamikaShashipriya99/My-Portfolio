import React from 'react';

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
    desc: 'Creating modern Mobile Application Development projects for Android and iOS platforms.'
  },
];

const WhatIDo = () => (
  <section
    id="what-i-do"
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
            <h2 className="fw-bold mb-4 display-5 text-info" data-aos="fade-up">What I Do</h2>
            <div className="row g-4">
              {whatIDo.map((item, idx) => (
                <div className="col-12 col-md-6" key={item.title} data-aos="zoom-in" data-aos-delay={idx * 100}>
                  <div className="card h-100 border-0 shadow-sm" style={{ background: 'rgba(35,39,47,0.7)', borderRadius: '1.5rem' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center">
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                      <h5 className="card-title text-info fw-bold mb-2">{item.title}</h5>
                      <p className="card-text text-light" style={{ fontSize: '1.08rem' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIDo; 