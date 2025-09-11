function Services() {
  const services = [
    {
      icon: "📱",
      title: "Custom Mobile Apps",
      description: "Real-time information when and where you need it most. Pre-loaded data for low-service areas. Sync up later.",
      features: ["iOS & Android", "Offline Capability", "Real-time Sync", "Enterprise Security"]
    },
    {
      icon: "🗄️",
      title: "Data Solutions",
      description: "It's all about the data. Make the most of your data across your entire infrastructure.",
      features: ["Database Design", "Data Migration", "Analytics", "Reporting Dashboards"]
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
      description: "The 2nd Amendment won't protect you from cyber threats. Let us help you fortify and monitor your defenses.",
      features: ["Security Audits", "Threat Monitoring", "Compliance", "Incident Response"]
    },
    {
      icon: "🔗",
      title: "System Integration",
      description: "Your systems need to talk to each other. Reduce errors, get real-time reporting and more efficient decision making.",
      features: ["API Development", "Microservices", "Cloud Migration", "Automation"]
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Make the most of your online sales. We provide custom functionality that plays nice with your other systems.",
      features: ["Custom Storefronts", "Payment Processing", "Inventory Management", "Order Fulfillment"]
    },
    {
      icon: "🚀",
      title: "Innovation & AI",
      description: "API Integration, AI, Machine Learning, and Microservices to keep you ahead of the competition.",
      features: ["Machine Learning", "Process Automation", "Predictive Analytics", "Custom AI Solutions"]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="services-header">
          <h2 className="section-title">What We Do</h2>
          <h3 className="section-subtitle">Tech Solutions Should Fit Your Business Goals</h3>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Cost Effectiveness</h3>
            <p>
              Your tech must be making you money, saving you money, or both. Let us help you figure out what you need. 
              We provide technical solutions that fit your business. We don't try to squeeze your business into a technical solution.
            </p>
            <a href="#contact" className="cta-primary">Get Started Today</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services