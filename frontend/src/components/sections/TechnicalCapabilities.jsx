import { Button } from '../ui'

const TechnicalCapabilities = () => {
  const coreCapabilities = [
    {
      icon: 'fa-solid fa-cloud',
      iconColor: 'text-fire-orange',
      iconBg: 'bg-fire-orange/20',
      hoverBorder: 'hover:border-fire-orange',
      title: 'Cloud Infrastructure',
      description: 'Military-grade cloud architecture designed for maximum uptime, scalability, and security. Deploy with confidence knowing your infrastructure can handle any mission.',
      features: [
        { icon: 'fa-solid fa-shield-alt', text: '99.99% Uptime SLA' },
        { icon: 'fa-solid fa-shield-alt', text: 'Auto-scaling Infrastructure' },
        { icon: 'fa-solid fa-shield-alt', text: 'Multi-region Deployment' },
        { icon: 'fa-solid fa-shield-alt', text: 'Disaster Recovery' }
      ],
      buttonText: 'Deploy Infrastructure →',
      buttonClass: 'text-fire-orange hover:text-white'
    },
    {
      icon: 'fa-solid fa-mobile-alt',
      iconColor: 'text-steel-blue',
      iconBg: 'bg-steel-blue/20',
      hoverBorder: 'hover:border-steel-blue',
      title: 'Mobile Applications',
      description: 'High-performance mobile applications built with precision engineering. Native iOS and Android development that delivers exceptional user experiences.',
      features: [
        { icon: 'fa-solid fa-mobile', text: 'Native iOS & Android' },
        { icon: 'fa-solid fa-mobile', text: 'Cross-platform Solutions' },
        { icon: 'fa-solid fa-mobile', text: 'Progressive Web Apps' },
        { icon: 'fa-solid fa-mobile', text: 'App Store Optimization' }
      ],
      buttonText: 'Launch Mobile Ops →',
      buttonClass: 'text-steel-blue hover:text-white'
    },
    {
      icon: 'fa-solid fa-globe',
      iconColor: 'text-tactical-green',
      iconBg: 'bg-tactical-green/20',
      hoverBorder: 'hover:border-tactical-green',
      title: 'Web Development',
      description: 'Custom web applications engineered for performance, security, and scalability. From corporate websites to complex web platforms.',
      features: [
        { icon: 'fa-solid fa-code', text: 'Full-stack Development' },
        { icon: 'fa-solid fa-code', text: 'E-commerce Platforms' },
        { icon: 'fa-solid fa-code', text: 'API Development' },
        { icon: 'fa-solid fa-code', text: 'Performance Optimization' }
      ],
      buttonText: 'Execute Web Ops →',
      buttonClass: 'text-tactical-green hover:text-white'
    }
  ]

  const specializedServices = [
    {
      icon: 'fa-solid fa-lock',
      iconColor: 'text-warning-amber',
      iconBg: 'bg-warning-amber/20',
      title: 'Cybersecurity Operations',
      subtitle: 'Fortress-grade Protection',
      description: 'Comprehensive cybersecurity solutions that protect your digital assets with military-precision. From penetration testing to 24/7 monitoring, we maintain your security perimeter.',
      stats: [
        { value: '100%', label: 'Threat Detection', color: 'text-warning-amber' },
        { value: '24/7', label: 'Monitoring', color: 'text-warning-amber' }
      ],
      buttonText: 'Secure Perimeter',
      buttonClass: 'bg-warning-amber hover:bg-warning-amber/90 text-tactical-dark px-6 py-3 rounded-lg font-semibold transition-all w-full'
    },
    {
      icon: 'fa-solid fa-database',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-500/20',
      title: 'Data Engineering',
      subtitle: 'Intelligence Processing',
      description: 'Transform raw data into actionable intelligence with our advanced data engineering solutions. Build robust data pipelines that fuel your decision-making processes.',
      stats: [
        { value: 'TB+', label: 'Data Processed', color: 'text-purple-500' },
        { value: 'Real-time', label: 'Processing', color: 'text-purple-500' }
      ],
      buttonText: 'Process Intelligence',
      buttonClass: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-tactical-dark px-6 py-3 rounded-lg font-semibold transition-all w-full'
    }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-cogs text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">OPERATIONAL</span>
            <span className="text-fire-orange"> CAPABILITIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Full-spectrum technology services engineered for organizations that demand excellence, reliability, and results that exceed expectations
          </p>
        </div>

        {/* Core Capabilities - 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className={`bg-tactical-dark border border-tactical-light rounded-xl p-8 ${capability.hoverBorder} transition-all`}>
              {/* Icon */}
              <div className={`w-16 h-16 ${capability.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${capability.icon} ${capability.iconColor} text-2xl`}></i>
              </div>
              
              {/* Title & Description */}
              <h3 className="font-display font-bold text-2xl mb-4 text-white">{capability.title}</h3>
              <p className="text-gray-300 mb-6">{capability.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <i className={`${feature.icon} text-tactical-green text-sm`}></i>
                    <span className="text-gray-300">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className={`${capability.buttonClass} font-semibold transition-colors`}>
                {capability.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Specialized Services - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                  <i className={`${service.icon} ${service.iconColor} text-2xl`}></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{service.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center p-4 bg-tactical-gray rounded-lg">
                    <div className={`text-2xl font-display font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={service.buttonClass}>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalCapabilities