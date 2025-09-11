import avatar8 from '../assets/images/avatar-8.jpg'
import avatar7 from '../assets/images/avatar-7.jpg'
import avatar9 from '../assets/images/avatar-9.jpg'

function MissionControl() {
  return (
    <section className="mission-control">
      <div className="content-padding">
        <div className="section-header">
          <div className="section-badge">
            <i className="fa-solid fa-satellite-dish text-fire-orange"></i>
            <span className="font-display" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>MISSION CONTROL</span>
          </div>
          <h2 className="section-title">
            <span>OPERATIONAL</span>
            <span className="text-fire-orange"> COMMAND CENTER</span>
          </h2>
          <p className="section-subtitle">
            Real-time intelligence on our tactical capabilities and deployment readiness across all operational theaters
          </p>
        </div>
        
        <div className="mission-grid">
          <div style={{gridColumn: 'span 2'}}>
            <div className="analytics-panel">
              <div className="panel-header">
                <h3 className="panel-title">System Analytics</h3>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <div className="status-dot"></div>
                    <span style={{fontSize: '0.875rem', color: '#d1d5db'}}>Live Feed</span>
                  </div>
                  <button style={{color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer'}}>
                    <i className="fa-solid fa-expand"></i>
                  </button>
                </div>
              </div>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number text-fire-orange">247</div>
                  <div className="stat-label">Active Deployments</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number text-steel-blue">98.7%</div>
                  <div className="stat-label">Mission Success</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number text-tactical-green">156</div>
                  <div className="stat-label">AI Models Deployed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number text-warning-amber">24/7</div>
                  <div className="stat-label">Ops Support</div>
                </div>
              </div>
              
              <div className="progress-section">
                <div className="progress-item">
                  <span className="text-gray-300">AI Processing Power</span>
                  <span className="text-tactical-green" style={{fontWeight: '600'}}>94%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{background: 'linear-gradient(90deg, var(--tactical-green), var(--steel-blue))', width: '94%'}}></div>
                </div>
                
                <div className="progress-item">
                  <span className="text-gray-300">Security Protocols</span>
                  <span className="text-fire-orange" style={{fontWeight: '600'}}>100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{background: 'var(--fire-orange)', width: '100%'}}></div>
                </div>
                
                <div className="progress-item">
                  <span className="text-gray-300">Client Satisfaction</span>
                  <span className="text-steel-blue" style={{fontWeight: '600'}}>97%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{background: 'var(--steel-blue)', width: '97%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="sidebar-panels">
            <div className="sidebar-panel">
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                <h4 className="font-display" style={{fontWeight: 'bold'}}>Threat Assessment</h4>
                <div className="status-dot"></div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>Cyber Threats</span>
                  <span className="text-tactical-green" style={{fontSize: '0.875rem'}}>Minimal</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>System Integrity</span>
                  <span className="text-tactical-green" style={{fontSize: '0.875rem'}}>Secure</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>Data Protection</span>
                  <span className="text-tactical-green" style={{fontSize: '0.875rem'}}>Maximum</span>
                </div>
              </div>
            </div>
            
            <div className="sidebar-panel">
              <h4 className="font-display" style={{fontWeight: 'bold', marginBottom: '1rem'}}>Active Operations</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{width: '0.5rem', height: '0.5rem', background: 'var(--fire-orange)', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>AI Model Training</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{width: '0.5rem', height: '0.5rem', background: 'var(--steel-blue)', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>Security Audit</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{width: '0.5rem', height: '0.5rem', background: 'var(--tactical-green)', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
                  <span className="text-gray-300" style={{fontSize: '0.875rem'}}>System Deployment</span>
                </div>
              </div>
            </div>
            
            <div className="sidebar-panel">
              <h4 className="font-display" style={{fontWeight: 'bold', marginBottom: '1rem'}}>Command Team</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                <div className="team-member">
                  <img src={avatar8} alt="Team Lead" className="member-avatar" />
                  <div className="member-info">
                    <div className="member-name">Marcus Steel</div>
                    <div className="member-role">Operations Commander</div>
                  </div>
                  <div className="status-online"></div>
                </div>
                <div className="team-member">
                  <img src={avatar7} alt="AI Lead" className="member-avatar" />
                  <div className="member-info">
                    <div className="member-name">Sarah Phoenix</div>
                    <div className="member-role">AI Division Chief</div>
                  </div>
                  <div className="status-online"></div>
                </div>
                <div className="team-member">
                  <img src={avatar9} alt="Security Lead" className="member-avatar" />
                  <div className="member-info">
                    <div className="member-name">Jake Hunter</div>
                    <div className="member-role">Security Director</div>
                  </div>
                  <div className="status-online"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionControl