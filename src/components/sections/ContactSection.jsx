import { Button, Badge } from '../ui'

const ContactSection = () => {
  const contactInfo = {
    headquarters: {
      title: 'Primary Command Center',
      address: '1247 Tactical Avenue, Suite 300',
      city: 'San Francisco, CA 94102',
      coordinates: '37.7749° N, 122.4194° W',
      phone: '+1 (555) 247-FIRE',
      email: 'command@centerfiredigital.com'
    },
    eastCoast: {
      title: 'East Coast Operations',
      address: '892 Strategic Boulevard',
      city: 'New York, NY 10001',
      coordinates: '40.7128° N, 74.0060° W',
      phone: '+1 (555) 892-TECH',
      email: 'eastcoast@centerfiredigital.com'
    }
  }

  const responseCapabilities = [
    {
      icon: 'fa-solid fa-clock',
      title: 'Rapid Response',
      description: 'Mission briefing within 15 minutes',
      metric: '< 15 min',
      color: 'fire-orange'
    },
    {
      icon: 'fa-solid fa-shield-alt',
      title: 'Secure Channels',
      description: 'Encrypted communication protocols',
      metric: 'Military Grade',
      color: 'steel-blue'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Global Coverage',
      description: '24/7 operational readiness worldwide',
      metric: '24/7/365',
      color: 'tactical-green'
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: 'Elite Support',
      description: 'Direct access to senior team members',
      metric: 'C-Level',
      color: 'warning-amber'
    }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-radio text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">CONTACT & DEPLOYMENT</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">MISSION</span>
            <span className="text-fire-orange"> BRIEFING</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to deploy cutting-edge solutions? Contact our tactical command center for immediate response and strategic consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
            <h3 className="font-display font-bold text-2xl mb-6 text-white flex items-center">
              <i className="fa-solid fa-file-alt text-fire-orange mr-3"></i>
              Mission Parameters
            </h3>
            
            <form className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Command Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Organization
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Secure Channel *
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Direct Line
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Mission Type */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Mission Type *
                </label>
                <select className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white focus:border-fire-orange focus:outline-none transition-colors">
                  <option value="">Select operation type</option>
                  <option value="ai-solutions">AI Solutions & Machine Learning</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="cybersecurity">Cybersecurity Operations</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Applications</option>
                  <option value="data-engineering">Data Engineering</option>
                  <option value="consultation">Strategic Consultation</option>
                  <option value="emergency">Emergency Response</option>
                </select>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Mission Budget
                  </label>
                  <select className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white focus:border-fire-orange focus:outline-none transition-colors">
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k+">$500K+</option>
                    <option value="tbd">To Be Determined</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Deployment Timeline
                  </label>
                  <select className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white focus:border-fire-orange focus:outline-none transition-colors">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Emergency)</option>
                    <option value="1-2weeks">1-2 Weeks</option>
                    <option value="1month">1 Month</option>
                    <option value="2-3months">2-3 Months</option>
                    <option value="6months+">6+ Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Mission Details */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Mission Objectives *
                </label>
                <textarea 
                  rows="4"
                  className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none transition-colors resize-none"
                  placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center space-x-4">
                <Button size="lg" className="flex-1">
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Deploy Mission Brief
                </Button>
                <div className="text-gray-400 text-sm">
                  <i className="fa-solid fa-lock mr-1"></i>
                  Secure & Encrypted
                </div>
              </div>
            </form>
          </div>

          {/* Command Center Info */}
          <div className="space-y-8">
            <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-white flex items-center">
                <i className="fa-solid fa-building text-steel-blue mr-3"></i>
                Command Centers
              </h3>
              
              {/* Headquarters */}
              <div className="mb-8">
                <h4 className="font-bold text-lg text-white mb-4 flex items-center">
                  <i className="fa-solid fa-star text-fire-orange mr-2"></i>
                  {contactInfo.headquarters.title}
                </h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <i className="fa-solid fa-map-marker-alt text-fire-orange text-sm mt-1"></i>
                    <div>
                      <div>{contactInfo.headquarters.address}</div>
                      <div>{contactInfo.headquarters.city}</div>
                      <div className="text-sm text-gray-400">{contactInfo.headquarters.coordinates}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-phone text-steel-blue text-sm"></i>
                    <span>{contactInfo.headquarters.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-envelope text-tactical-green text-sm"></i>
                    <span>{contactInfo.headquarters.email}</span>
                  </div>
                </div>
              </div>

              {/* East Coast */}
              <div>
                <h4 className="font-bold text-lg text-white mb-4 flex items-center">
                  <i className="fa-solid fa-building text-steel-blue mr-2"></i>
                  {contactInfo.eastCoast.title}
                </h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <i className="fa-solid fa-map-marker-alt text-steel-blue text-sm mt-1"></i>
                    <div>
                      <div>{contactInfo.eastCoast.address}</div>
                      <div>{contactInfo.eastCoast.city}</div>
                      <div className="text-sm text-gray-400">{contactInfo.eastCoast.coordinates}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-phone text-steel-blue text-sm"></i>
                    <span>{contactInfo.eastCoast.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-envelope text-tactical-green text-sm"></i>
                    <span>{contactInfo.eastCoast.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Capabilities */}
            <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-white flex items-center">
                <i className="fa-solid fa-bolt text-warning-amber mr-3"></i>
                Response Capabilities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {responseCapabilities.map((capability, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-${capability.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${capability.icon} text-${capability.color} text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-white mb-2">{capability.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{capability.description}</p>
                    <Badge className={`bg-${capability.color}/20 text-${capability.color}`}>
                      {capability.metric}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-fire-orange/20 to-tactical-dark border border-fire-orange rounded-xl p-8">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-fire-orange mr-3"></i>
                Emergency Operations
              </h3>
              <p className="text-gray-300 mb-4">
                Critical system failure or security breach? Our emergency response team is standing by 24/7 for immediate deployment.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-fire-orange rounded-full animate-pulse"></div>
                  <span className="text-white font-bold">EMERGENCY HOTLINE</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-fire-orange font-bold text-xl">
                <i className="fa-solid fa-phone"></i>
                <span>+1 (555) 911-FIRE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection