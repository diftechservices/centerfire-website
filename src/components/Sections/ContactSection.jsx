import React from 'react';

const ContactSection = () => {
  const whyChooseItems = [
    { text: '100% US-Based Team', color: 'tactical-green' },
    { text: '0 DEI Consultants', color: 'fire' },
    { text: 'Values-Aligned Partners', color: 'steel' },
    { text: 'AI-Enhanced Development', color: 'warning-amber' }
  ];

  return (
    <section className="section bg-gray py-16" id="contact">
      <div className="section-content">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-dark bg-opacity-80 backdrop-filter backdrop-blur-sm border border-light rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-fire rounded-full animate-pulse"></div>
            <span className="text-fire text-sm font-medium heading-tactical">MISSION DEPLOYMENT</span>
          </div>
          
          <h2 className="heading-display text-xl text-primary mb-6">
            <span className="block">INITIATE</span>
            <span className="block text-fire">CONTACT</span>
          </h2>
          
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Ready to deploy tactical technology solutions? Our command center is standing by to discuss 
            your mission parameters and operational requirements.
          </p>
        </div>

        <div className="card-grid card-grid-2 gap-12">
          {/* Contact Form */}
          <div className="tactical-card">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-display text-xl text-primary">Mission Parameters</h3>
              <div className="flex items-center gap-3">
                <div className="status-dot status-online animate-pulse"></div>
                <span className="text-secondary text-sm">Secure Channel</span>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="card-grid card-grid-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Call Sign</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-dark border border-light rounded-lg px-4 py-3 text-primary placeholder-muted focus:border-fire focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Company name" 
                    className="w-full bg-dark border border-light rounded-lg px-4 py-3 text-primary placeholder-muted focus:border-fire focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="card-grid card-grid-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Secure Comm</label>
                  <input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="w-full bg-dark border border-light rounded-lg px-4 py-3 text-primary placeholder-muted focus:border-fire focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Direct Line</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-dark border border-light rounded-lg px-4 py-3 text-primary placeholder-muted focus:border-fire focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Mission Brief</label>
                <textarea 
                  rows="6"
                  placeholder="Describe your operational requirements, objectives, and any specific challenges you're facing..."
                  className="w-full bg-dark border border-light rounded-lg px-4 py-3 text-primary placeholder-muted focus:border-fire focus:outline-none transition-colors resize-vertical min-h-[150px]"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full text-lg py-4">
                <span className="text-xl mr-2">🚀</span>
                Deploy Mission Request
              </button>
            </form>
          </div>

          {/* Command Center Info */}
          <div className="tactical-card">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-display text-xl text-primary">Command Center</h3>
              <div className="flex items-center gap-3">
                <div className="status-dot status-online animate-pulse"></div>
                <span className="text-secondary text-sm">Operational</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fire bg-opacity-20 rounded-lg flex items-center justify-center text-fire flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-2">Tactical Headquarters</h4>
                  <p className="text-secondary">
                    Advanced AI solutions built by Americans who understand your business.<br/>
                    We choose our clients carefully - no corporate virtue signaling, no political lectures, just exceptional results.
                  </p>
                </div>
              </div>
              
              <div className="tactical-card bg-gray border border-light">
                <h4 className="heading-display text-primary font-bold mb-4">Why Choose CenterFire Digital?</h4>
                <div className="space-y-3">
                  {whyChooseItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${item.color} rounded-full`}></div>
                      <span className="text-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;