import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <section className="notfound-section">
    <div className="notfound-container">
      <div className="notfound-emoji" aria-label="Crying Face">😢</div>
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-message">Sorry, the page you are looking for does not exist or has been moved.</p>
      <a href="#home" className="notfound-home-btn">Go to Home</a>
    </div>
  </section>
);

export default NotFound; 