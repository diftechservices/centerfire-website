function About() {
  return (
    <section id="about" className="about military-grid">
      <div className="section-container">
        <div className="about-content">
          <div className="about-text">
            <div className="stencil-text" style={{fontSize: '0.8rem', marginBottom: '0.5rem'}}>
              OPERATIONAL DIRECTIVE: ALPHA-7
            </div>
            <h2 className="section-title">No Compromise</h2>
            <h3 className="section-subtitle">Skill and Values Both Matter</h3>
            <p className="about-description">
              We're a full-service technical solutions provider for businesses that operate in reality. 
              Firearms, manufacturing, agriculture, energy - industries that build America while 
              getting lectured by Silicon Valley. Our team is US-based, experienced, and allergic to corporate virtue signaling.
            </p>
            <p className="about-question">
              Why trust your mission-critical systems to people who despise your business model?
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">US-Based Team</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
              <div className="stat">
                <div className="stat-number">0</div>
                <div className="stat-label">DEI Consultants</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="tactical-command-center">
              <div className="command-interface">
                <div className="hud-elements">
                  <div className="hud-corner top-left"></div>
                  <div className="hud-corner top-right"></div>
                  <div className="hud-corner bottom-left"></div>
                  <div className="hud-corner bottom-right"></div>
                </div>
                <div className="command-display">
                  <div className="status-line">
                    <span className="status-indicator active"></span>
                    <span className="status-text">OPERATIONAL STATUS: ACTIVE</span>
                  </div>
                  <div className="command-grid">
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                  </div>
                  <div className="mission-brief">
                    <div className="stencil-text" style={{fontSize: '0.7rem'}}>MISSION PARAMETERS</div>
                    <div className="mission-stats">
                      <div className="mission-stat">AI SYSTEMS: ONLINE</div>
                      <div className="mission-stat">SECURITY: MAXIMUM</div>
                      <div className="mission-stat">DEPLOYMENT: READY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About