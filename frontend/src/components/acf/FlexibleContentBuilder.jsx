import { useWordPressPage } from '../../hooks/useWordPress'
import { Button, Badge } from '../ui'

// Individual Component Types
const HeroComponent = ({ component }) => {
  const { headline, subheadline, background_image, cta_button } = component
  
  return (
    <section className="py-20 bg-tactical-dark relative overflow-hidden">
      {background_image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${background_image.url || background_image})` }}
        />
      )}
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="font-display font-black text-6xl lg:text-7xl mb-6">
          <span className="text-white">{headline}</span>
        </h1>
        {subheadline && (
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {subheadline}
          </p>
        )}
        {cta_button && (
          <Button size="lg" className="bg-fire-orange hover:bg-fire-orange/90">
            {cta_button.text || 'Get Started'}
          </Button>
        )}
      </div>
    </section>
  )
}

const ServicesGridComponent = ({ component }) => {
  const { title, services = [] } = component
  
  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl lg:text-6xl text-white">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
              <div className="w-16 h-16 bg-fire-orange/20 rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon || 'fa-solid fa-cog'} text-fire-orange text-2xl`}></i>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                {service.name}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsComponent = ({ component }) => {
  const { title, testimonials = [] } = component
  
  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-5xl lg:text-6xl text-white">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-tactical-gray border border-tactical-light rounded-xl p-8">
              <div className="flex items-center mb-6">
                {testimonial.client_logo && (
                  <img 
                    src={testimonial.client_logo.url || testimonial.client_logo}
                    alt={testimonial.client_name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <h4 className="text-white font-bold">{testimonial.client_name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.client_title}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTAComponent = ({ component }) => {
  const { title, description, button_text, button_link, background_color = 'tactical-gray' } = component
  
  return (
    <section className={`py-20 bg-${background_color}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}
        {button_text && (
          <Button size="lg" className="bg-fire-orange hover:bg-fire-orange/90">
            {button_text}
          </Button>
        )}
      </div>
    </section>
  )
}

const StatsComponent = ({ component }) => {
  const { title, stats = [] } = component
  
  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl lg:text-5xl font-bold text-fire-orange mb-2">
                {stat.number}{stat.suffix || ''}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Component Renderer
const renderComponent = (component, index) => {
  const componentType = component.acf_fc_layout || component.component_type
  
  switch (componentType) {
    case 'hero_section':
      return <HeroComponent key={index} component={component} />
    case 'services_grid':
      return <ServicesGridComponent key={index} component={component} />
    case 'testimonials':
      return <TestimonialsComponent key={index} component={component} />
    case 'cta_section':
      return <CTAComponent key={index} component={component} />
    case 'stats_section':
      return <StatsComponent key={index} component={component} />
    default:
      console.warn(`Unknown component type: ${componentType}`)
      return null
  }
}

// Main Flexible Content Builder
const FlexibleContentBuilder = ({ pageSlug }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <div className="py-20 bg-tactical-gray text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
        <p className="text-gray-300 mt-4">Loading page content...</p>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div className="py-20 bg-tactical-gray text-center">
        <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-red-400 text-xl font-bold mb-2">Content Error</h2>
          <p className="text-gray-300">Unable to load page content from WordPress.</p>
        </div>
      </div>
    )
  }

  // Get flexible content from ACF
  const flexibleContent = content.acf?.page_components || content.acf?.flexible_content || []

  if (!flexibleContent || flexibleContent.length === 0) {
    return (
      <div className="py-20 bg-tactical-gray text-center">
        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-yellow-400 text-xl font-bold mb-2">No Components Found</h2>
          <p className="text-gray-300">
            This page has no flexible content components configured in WordPress.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {flexibleContent.map((component, index) => renderComponent(component, index))}
    </div>
  )
}

export default FlexibleContentBuilder