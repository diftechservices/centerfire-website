function TacticalHero() {
  return (
    <section id="hero" className="tactical-hero">
      <div className="hero-grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="hero-grid-line"></div>
        ))}
      </div>
      
      <div className="hero-content">
        <div className="content-padding">
        <div className="hero-badge">
          <div style={{width: '0.75rem', height: '0.75rem', background: 'var(--fire-orange)', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
          <span className="font-display" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>TACTICAL TECH OPERATIONS</span>
          <div style={{width: '0.75rem', height: '0.75rem', background: 'var(--steel-blue)', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">PRECISION</span>
          <span className="hero-title-line text-fire-orange">TECHNOLOGY</span>
          <span className="hero-title-line gradient-text">WARFARE</span>
        </h1>
        
        <p className="hero-subtitle">
          Elite AI-driven solutions engineered for organizations that demand tactical precision, 
          unwavering reliability, and results that cut through the noise of conventional tech consulting.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
            <i className="fa-solid fa-rocket"></i>
            <span>Launch Operation</span>
          </button>
          <button className="btn-secondary" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
            <i className="fa-solid fa-play"></i>
            <span>Mission Briefing</span>
          </button>
        </div>
        
        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-card-icon" style={{background: 'rgba(255, 107, 53, 0.2)'}}>
              <i className="fa-solid fa-brain text-fire-orange"></i>
            </div>
            <h3 className="hero-card-title">AI Arsenal</h3>
            <p className="text-gray-400">Advanced machine learning and AI solutions deployed with surgical precision</p>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon" style={{background: 'rgba(74, 144, 226, 0.2)'}}>
              <i className="fa-solid fa-shield-halved text-steel-blue"></i>
            </div>
            <h3 className="hero-card-title">Secure Operations</h3>
            <p className="text-gray-400">Fortress-grade security protocols protecting your digital assets</p>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon" style={{background: 'rgba(46, 204, 113, 0.2)'}}>
              <i className="fa-solid fa-crosshairs text-tactical-green"></i>
            </div>
            <h3 className="hero-card-title">Target Acquisition</h3>
            <p className="text-gray-400">Laser-focused solutions that hit objectives with zero compromise</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default TacticalHero