import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="grid-bg"></div>
      
      <div className="hero-content">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-gray bg-opacity-50 backdrop-filter backdrop-blur-sm border border-light rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-tactical-green rounded-full animate-pulse"></div>
            <span className="text-tactical-green text-sm font-medium heading-tactical">TACTICAL OPERATIONS ACTIVE</span>
          </div>
        </div>
        
        <h1 className="heading-display text-display text-primary mb-6">
          <span className="block">PRECISION</span>
          <span className="block text-fire">TECHNOLOGY</span>
          <span className="block">WARFARE</span>
        </h1>
        
        <p className="text-lg text-secondary mb-12 max-w-4xl mx-auto">
          Deploy advanced digital solutions with military precision. Our tactical approach 
          combines cutting-edge technology with strategic execution to dominate your market battlefield.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a href="#contact" className="btn btn-primary">
            INITIATE CONTACT
            <span>→</span>
          </a>
          <a href="#arsenal" className="btn btn-secondary">
            VIEW ARSENAL
            <span>⚡</span>
          </a>
        </div>
        
        <div className="card-grid card-grid-3 lg:grid-cols-3">
          <div className="tactical-card">
            <div className="w-12 h-12 bg-fire bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-fire text-xl">
              🎯
            </div>
            <h3 className="heading-tactical text-xl text-primary mb-4">PRECISION TARGETING</h3>
            <p className="text-secondary">Laser-focused strategies that hit your business objectives with military accuracy.</p>
          </div>
          
          <div className="tactical-card">
            <div className="w-12 h-12 bg-steel bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-steel text-xl">
              ⚡
            </div>
            <h3 className="heading-tactical text-xl text-primary mb-4">RAPID DEPLOYMENT</h3>
            <p className="text-secondary">Lightning-fast implementation of digital solutions with zero downtime.</p>
          </div>
          
          <div className="tactical-card">
            <div className="w-12 h-12 bg-tactical-green bg-opacity-20 rounded-lg flex items-center justify-center mb-6 text-tactical-green text-xl">
              🛡️
            </div>
            <h3 className="heading-tactical text-xl text-primary mb-4">FORTIFIED SECURITY</h3>
            <p className="text-secondary">Enterprise-grade security protocols that protect your digital assets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;