import { Link } from 'react-router-dom'

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="section-container">
        <div className="cta-content">
          <h2 className="section-title">Ready to Build Something Exceptional?</h2>
          <p className="cta-subtitle">
            Stop wasting time with agencies that don't understand your business. 
            Let's discuss how AI-enhanced technology can give you a competitive edge.
          </p>
          <div className="cta-grid">
            <div className="cta-item">
              <h4>Free Consultation</h4>
              <p>30-minute strategy session to identify opportunities</p>
            </div>
            <div className="cta-item">
              <h4>Custom Proposal</h4>
              <p>Detailed project scope and timeline within 48 hours</p>
            </div>
            <div className="cta-item">
              <h4>Proven Results</h4>
              <p>Track record with businesses that operate in reality</p>
            </div>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary">Get Started Today</Link>
            <Link to="/services" className="cta-secondary">View Our Capabilities</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA