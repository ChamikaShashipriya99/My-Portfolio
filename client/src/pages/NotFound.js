import React from 'react';

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center relative z-10" style={{ background: 'linear-gradient(135deg, rgba(24,24,27,0.3) 60%, rgba(35,39,47,0.2) 100%)' }}>
    <div className="glass-card p-12 text-center max-w-md mx-auto">
      <div className="text-7xl mb-6 filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 2px 16px #0dcaf0)' }}>😢</div>
      <h1 className="font-black text-6xl gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-bold text-primary-500 mb-4">Page Not Found</h2>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a 
        href="#home" 
        className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg px-8 py-4 rounded-3xl shadow-lg shadow-primary-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/30"
      >
        Go to Home
      </a>
    </div>
  </section>
);

export default NotFound;