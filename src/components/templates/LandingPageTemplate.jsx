import PageLayout from './PageLayout'
import { Badge, Button } from '../ui'

const LandingPageTemplate = ({ 
  pageData,
  items = [],
  showFilters = false
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
          <div className="text-center max-w-4xl mx-auto">
            {/* Page Badge */}
            <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
              <i className={`${pageData.icon} text-${pageData.primaryColor}`}></i>
              <span className="font-display text-sm tracking-wider text-white">{pageData.badge}</span>
            </div>
            
            {/* Page Title */}
            <h1 className="font-display font-black text-5xl lg:text-7xl mb-6">
              <span className="text-white">{pageData.titlePrimary}</span>
              <span className={`text-${pageData.primaryColor}`}> {pageData.titleSecondary}</span>
            </h1>
            
            {/* Page Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {pageData.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                {pageData.primaryCTA}
              </Button>
              <Button variant="secondary" size="lg">
                {pageData.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters (if enabled) */}
      {showFilters && (
        <section className="py-8 bg-tactical-gray border-b border-tactical-light">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="sm">
                All Categories
              </Button>
              {pageData.filters?.map((filter, index) => (
                <Button key={index} variant="outline" size="sm">
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 ${pageData.gridCols} gap-8`}>
            {items.map((item, index) => (
              <div 
                key={index}
                className={`bg-tactical-gray border border-tactical-light rounded-xl overflow-hidden ${item.hoverBorder} transition-all`}
              >
                {/* Item Image/Visual */}
                {item.image && (
                  <div className={`h-64 ${item.gradientBg} flex items-center justify-center`}>
                    <img 
                      className="w-full h-full object-cover" 
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                )}
                
                {/* Item Content */}
                <div className="p-8">
                  {/* Badges */}
                  {item.badges && (
                    <div className="flex items-center space-x-3 mb-4">
                      {item.badges.map((badge, badgeIndex) => (
                        <span 
                          key={badgeIndex}
                          className={`${badge.color} px-3 py-1 rounded-full text-sm font-semibold`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Icon */}
                  {item.icon && !item.image && (
                    <div className={`w-16 h-16 bg-${item.primaryColor}/20 rounded-lg flex items-center justify-center mb-6`}>
                      <i className={`${item.icon} text-${item.primaryColor} text-2xl`}></i>
                    </div>
                  )}
                  
                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-2xl mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {item.description}
                  </p>
                  
                  {/* Statistics (if present) */}
                  {item.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {item.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-2xl font-display font-bold ${stat.color} mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Features List (if present) */}
                  {item.features && (
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <i className={`fa-solid fa-check text-${item.primaryColor} text-sm`}></i>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* CTA Button */}
                  <button 
                    className={`${item.buttonColor || `text-${item.primaryColor}`} hover:text-white font-semibold transition-colors`}
                  >
                    {item.buttonText || 'Learn More →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section (if present) */}
      {pageData.additionalContent && (
        <section className="py-20 bg-tactical-gray">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl mb-6 text-white">
                {pageData.additionalContent.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {pageData.additionalContent.description}
              </p>
              
              {pageData.additionalContent.features && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {pageData.additionalContent.features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 bg-${pageData.primaryColor}/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <i className={`${feature.icon} text-${pageData.primaryColor} text-xl`}></i>
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-6 text-white">
            {pageData.finalCTA?.title || 'Ready to Deploy?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {pageData.finalCTA?.description || 'Contact our tactical team for a comprehensive mission briefing.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              {pageData.finalCTA?.primaryButton || 'Contact Us'}
            </Button>
            <Button variant="secondary" size="lg">
              {pageData.finalCTA?.secondaryButton || 'Learn More'}
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default LandingPageTemplate