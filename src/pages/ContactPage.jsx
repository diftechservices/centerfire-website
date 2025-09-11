import Contact from '../components/legacy/Contact'

function ContactPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-title">Let's Build Something Exceptional</h1>
          <p className="page-subtitle">
            Ready to work with a team that understands your business and shares your values?
          </p>
        </div>
      </section>
      
      <Contact />
      
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Discovery Call</h4>
              <p>30-minute conversation to understand your challenges and goals. No sales pitch, just intelligent questions.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Technical Assessment</h4>
              <p>We analyze your current systems and identify opportunities for improvement with AI and automation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Custom Proposal</h4>
              <p>Detailed project scope, timeline, and cost breakdown delivered within 48 hours.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Rapid Development</h4>
              <p>Agile development with weekly updates. You see progress immediately, not after months of silence.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="guarantee-section">
        <div className="section-container">
          <div className="guarantee-content">
            <h2>Our Guarantee</h2>
            <p>
              If we don't deliver measurable improvements to your business within 90 days, 
              we'll refund your investment. We're confident because we've done this before.
            </p>
            <div className="guarantee-stats">
              <div className="guarantee-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="guarantee-stat">
                <span className="stat-number">90</span>
                <span className="stat-label">Day Guarantee</span>
              </div>
              <div className="guarantee-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage