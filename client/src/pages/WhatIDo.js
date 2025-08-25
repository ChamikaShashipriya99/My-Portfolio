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
    desc: 'Creating modern Mobile Application Development projects for Android platforms.'
  },
];

const WhatIDo = () => (
  <section 
    id="what-i-do" 
    className="py-20 relative z-10"
    style={{ 
      background: 'linear-gradient(135deg, rgba(35,39,47,0.2) 60%, rgba(24,24,27,0.3) 100%)',
    }}
  >
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-black text-4xl lg:text-5xl gradient-text mb-6 text-shadow" data-aos="fade-up">
          What I Do
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          My main areas of expertise and focus
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {whatIDo.map((item, idx) => (
          <div 
            key={item.title} 
            className="glass-card p-8 text-center floating-card group relative overflow-hidden"
            data-aos="zoom-in" 
            data-aos-delay={idx * 120}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 gradient-text text-shadow-glow">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            {/* Connecting line for desktop */}
            {idx !== whatIDo.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;