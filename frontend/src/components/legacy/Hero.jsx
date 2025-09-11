function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="tech-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Systems Online</span>
            </div>
            <div className="stencil-text" style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}>
              CLASSIFIED: LEVEL 7 CLEARANCE
            </div>
            <h1 className="hero-title">
              AI-Powered Solutions
              <span className="hero-highlight"> Built Right</span>
            </h1>
            <p className="hero-subtitle">
              Advanced technology built by Americans who understand your business. 
              We choose our clients carefully - no corporate virtue signaling, no political lectures, just exceptional results.
            </p>
            <div className="hero-badges">
              <span className="badge">Veteran-Owned & Operated</span>
              <span className="badge">AI-Enhanced Development</span>
              <span className="badge">Values-Aligned Partners</span>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="cta-primary">Start Your Project</a>
              <a href="#services" className="cta-secondary">View Capabilities</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card tactical-corners">
              <div className="card-circuit-bg"></div>
              <div className="card-content">
                <div className="card-icon tactical-icon">⚡</div>
                <h3>AI-Enhanced Development</h3>
                <p>Machine learning that adapts and evolves with your business</p>
                <div className="card-status">
                  <span className="status-dot"></span>
                  <span className="card-status-text">ACTIVE</span>
                </div>
              </div>
            </div>
            <div className="hero-card tactical-corners">
              <div className="card-circuit-bg"></div>
              <div className="card-content">
                <div className="card-icon tactical-icon">⚔️</div>
                <h3>Enterprise Security</h3>
                <p>Military-grade protection without the bureaucracy</p>
                <div className="card-status">
                  <span className="status-dot"></span>
                  <span className="card-status-text">SECURED</span>
                </div>
              </div>
            </div>
            <div className="hero-card tactical-corners">
              <div className="card-circuit-bg"></div>
              <div className="card-content">
                <div className="card-icon tactical-icon">🎯</div>
                <h3>American-Made</h3>
                <p>US-based team, traditional work ethic, modern results</p>
                <div className="card-status">
                  <span className="status-dot"></span>
                  <span className="card-status-text">DEPLOYED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero