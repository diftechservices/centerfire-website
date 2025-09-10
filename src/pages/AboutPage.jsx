import About from '../components/About'

function AboutPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-title">About Centerfire Digital</h1>
          <p className="page-subtitle">
            American-built technology for businesses that refuse to compromise
          </p>
        </div>
      </section>
      
      <About />
      
      <section className="team-section">
        <div className="section-container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h4>Leadership</h4>
              <p>Marine Corps veterans with decades of technology experience</p>
            </div>
            <div className="team-member">
              <h4>Development</h4>
              <p>Senior engineers who've built systems for defense and enterprise</p>
            </div>
            <div className="team-member">
              <h4>Security</h4>
              <p>Former military cybersecurity specialists</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Competence Over Politics</h4>
              <p>We hire based on skill and character, not quotas or ideology. Results matter more than virtue signaling.</p>
            </div>
            <div className="value-item">
              <h4>American Manufacturing</h4>
              <p>All development happens on US soil by US citizens. No offshore teams, no security risks.</p>
            </div>
            <div className="value-item">
              <h4>Business Reality</h4>
              <p>We work with companies that build things, make things, and defend things. Industries that matter.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage