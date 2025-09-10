import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav-fixed">
      <div className="nav-container">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-fire flex items-center justify-center rounded-lg text-tactical-dark font-bold">
              ⊕
            </div>
            <div>
              <h1 className="heading-display text-primary text-lg font-bold">CENTERFIRE</h1>
              <p className="text-muted text-sm">DIGITAL OPERATIONS</p>
            </div>
          </div>
        </div>
        
        <div className="md:flex items-center gap-8 hidden">
          <a href="#operations" className="text-secondary hover:text-fire transition-colors">
            Operations
          </a>
          <a href="#arsenal" className="text-secondary hover:text-fire transition-colors">
            Arsenal
          </a>
          <a href="#intel" className="text-secondary hover:text-fire transition-colors">
            Intel
          </a>
          <a href="#contact" className="text-secondary hover:text-fire transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-gray px-4 py-2 rounded-lg border border-light">
            <div className="status-dot status-online animate-pulse"></div>
            <span className="text-tactical-green text-sm font-medium">SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;