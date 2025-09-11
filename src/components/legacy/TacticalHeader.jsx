function TacticalHeader() {
  return (
    <header className="tactical-header">
      <div className="nav-container content-padding">
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          <a href="#hero" className="nav-brand">
            <div className="nav-logo">
              <i className="fa-solid fa-crosshairs"></i>
            </div>
            <div>
              <div className="nav-title">
                <span className="text-fire-orange">CENTER</span>
                <span>FIRE</span>
              </div>
              <div className="nav-subtitle">DIGITAL</div>
            </div>
          </a>
          <nav className="nav-menu">
            <a href="#ai-arsenal" className="nav-link">
              <i className="fa-solid fa-brain"></i>
              <span>AI Solutions</span>
            </a>
            <a href="#capabilities" className="nav-link">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Capabilities</span>
            </a>
            <a href="#portfolio" className="nav-link">
              <i className="fa-solid fa-trophy"></i>
              <span>Portfolio</span>
            </a>
            <a href="#intel-hub" className="nav-link">
              <i className="fa-solid fa-satellite-dish"></i>
              <span>Intel Hub</span>
            </a>
          </nav>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span style={{fontSize: '0.875rem'}}>System Status: Operational</span>
          </div>
          <button className="btn-primary">
            Deploy Mission
          </button>
        </div>
      </div>
    </header>
  )
}

export default TacticalHeader