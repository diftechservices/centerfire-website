function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Technical Solutions
              <span className="hero-highlight"> Built on Values</span>
            </h1>
            <p className="hero-subtitle">
              Full-service technical solutions for firearms businesses and companies that champion freedom. 
              US-based team with aligned values and uncompromising expertise.
            </p>
            <div className="hero-badges">
              <span className="badge">Marine Corps Veteran Owned</span>
              <span className="badge">100% US-Based Team</span>
              <span className="badge">Values-Aligned Partners</span>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="cta-primary">Start Your Project</a>
              <a href="#services" className="cta-secondary">Our Services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">⚡</div>
              <h3>Fast & Secure</h3>
              <p>Modern tech stack with enterprise security</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">🎯</div>
              <h3>Mission-Focused</h3>
              <p>Solutions that fit your business goals</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">🇺🇸</div>
              <h3>American Values</h3>
              <p>Team members who share your principles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero