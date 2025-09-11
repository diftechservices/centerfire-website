import { useWordPressPage } from '../../hooks/useWordPress'
import { Button } from '../ui'

const ACFServicesSection = ({ pageSlug = 'services' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading services...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    // Fallback to your existing TechnicalCapabilities component
    return (
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-yellow-400">Using fallback content - WordPress not connected</p>
          </div>
        </div>
      </section>
    )
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    section_title = content.title?.rendered || 'Our Services',
    section_subtitle = 'Professional technology solutions',
    services = [],
    cta_text = 'Get Started',
    cta_link = '/contact'
  } = acf

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-cogs text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">SERVICES</span>
          </div>
          
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{section_title}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {section_subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-8 group hover:border-fire-orange transition-colors">
              {/* Service Icon */}
              <div className="w-16 h-16 bg-fire-orange/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fire-orange/30 transition-colors">
                {service.icon ? (
                  <i className={`${service.icon} text-fire-orange text-2xl`}></i>
                ) : (
                  <span className="text-fire-orange text-2xl">⚡</span>
                )}
              </div>

              {/* Service Content */}
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {service.name || 'Service Name'}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description || 'Service description'}
              </p>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <i className="fa-solid fa-check-circle text-tactical-green"></i>
                      <span className="text-gray-300">{feature.feature_name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing */}
              {service.price && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-fire-orange">
                    {service.price_prefix || 'Starting at'} ${service.price}
                  </span>
                  {service.price_suffix && (
                    <span className="text-gray-400">/{service.price_suffix}</span>
                  )}
                </div>
              )}

              {/* Service CTA */}
              {service.cta_text && (
                <Button 
                  variant="outline" 
                  className="w-full border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-tactical-dark"
                >
                  {service.cta_text}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Section CTA */}
        {cta_text && (
          <div className="text-center">
            <Button size="lg" className="bg-fire-orange hover:bg-fire-orange/90">
              {cta_text}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ACFServicesSection