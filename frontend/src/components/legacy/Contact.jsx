function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-header">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="contact-subtitle">
            Let's discuss how we can help strengthen your business with technology that aligns with your values.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>info@centerfiredigital.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div className="contact-details">
                <h4>Business Hours</h4>
                <p>Mon-Fri: 8AM-6PM CST</p>
              </div>
            </div>
            
            <div className="contact-values">
              <h4>Our Commitment</h4>
              <ul>
                <li>✅ Values-aligned team members</li>
                <li>✅ US-based support and development</li>
                <li>✅ Transparent, honest communication</li>
                <li>✅ Solutions that fit YOUR business</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="data">Data Solutions</option>
                  <option value="security">Cyber Security</option>
                  <option value="integration">System Integration</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="ai">AI & Innovation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button type="submit" className="cta-primary">Send Message</button>
            </form>
          </div>
        </div>
        
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Centerfire Digital. Marine Corps Veteran Owned & Operated.</p>
            <p>Proudly serving freedom-loving businesses across America.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact