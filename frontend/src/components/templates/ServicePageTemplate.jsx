import PageLayout from './PageLayout'
import { Badge, Button } from '../ui'

const ServicePageTemplate = ({ 
  service,
  relatedServices = []
}) => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-tactical-dark relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-tactical-light"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            {/* Service Badge */}
            <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
              <i className={`${service.icon} text-${service.primaryColor}`}></i>
              <span className="font-display text-sm tracking-wider text-white">{service.category}</span>
            </div>
            
            {/* Service Title */}
            <h1 className="font-display font-black text-5xl lg:text-7xl mb-6">
              <span className="text-white">{service.titlePrimary}</span>
              <span className={`text-${service.primaryColor}`}> {service.titleSecondary}</span>
            </h1>
            
            {/* Service Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              {service.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Deploy Solution
              </Button>
              <Button variant="secondary" size="lg">
                Mission Briefing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl mb-6 text-white">
                Mission Overview
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                {service.overview}
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
                    <div className={`w-12 h-12 bg-${service.primaryColor}/20 rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`${benefit.icon} text-${service.primaryColor}`}></i>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-white">
                  Mission Stats
                </h3>
                <div className="space-y-4">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{stat.label}</span>
                      <span className={`font-display font-bold text-${service.primaryColor}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
                  <h3 className="font-display font-bold text-lg mb-4 text-white">
                    Related Operations
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((related, index) => (
                      <a 
                        key={index}
                        href={related.url}
                        className="block p-3 bg-tactical-gray hover:bg-tactical-light rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <i className={`${related.icon} text-${related.color} text-sm`}></i>
                          <span className="text-white text-sm font-medium">{related.title}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
            Technical Specifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.specifications.map((spec, index) => (
              <div key={index} className="bg-tactical-gray border border-tactical-light rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-4 text-white">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <i className={`fa-solid fa-check text-${service.primaryColor} text-sm`}></i>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
            Deployment Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-12 h-12 bg-${service.primaryColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-tactical-dark">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-6 text-white">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our tactical team for a comprehensive mission briefing and deployment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request Mission Brief
            </Button>
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ServicePageTemplate