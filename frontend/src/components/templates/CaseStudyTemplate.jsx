import PageLayout from './PageLayout'
import { Badge, Button } from '../ui'

const CaseStudyTemplate = ({ 
  caseStudy,
  relatedCases = []
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Industry Badge */}
              <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
                <i className={`${caseStudy.industryIcon} text-${caseStudy.primaryColor}`}></i>
                <span className="font-display text-sm tracking-wider text-white">{caseStudy.industry}</span>
              </div>
              
              {/* Project Title */}
              <h1 className="font-display font-black text-4xl lg:text-6xl mb-6">
                <span className="text-white">{caseStudy.titlePrimary}</span>
                <span className={`text-${caseStudy.primaryColor}`}> {caseStudy.titleSecondary}</span>
              </h1>
              
              {/* Project Summary */}
              <p className="text-xl text-gray-300 mb-8">
                {caseStudy.summary}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                {caseStudy.keyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-display font-bold text-${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project Image */}
            <div className={`bg-gradient-to-br from-${caseStudy.primaryColor}/20 to-tactical-dark rounded-xl overflow-hidden h-96`}>
              <img 
                className="w-full h-full object-cover" 
                src={caseStudy.image}
                alt={`${caseStudy.titlePrimary} ${caseStudy.titleSecondary}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Objective */}
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6 text-white">
                Mission Challenge
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {caseStudy.challenge}
              </p>
              
              {/* Challenge Points */}
              <ul className="space-y-3">
                {caseStudy.challengePoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fa-solid fa-exclamation-triangle text-warning-amber text-sm mt-1"></i>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Objective */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-6 text-white">
                Mission Objective
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {caseStudy.objective}
              </p>
              
              {/* Objective Goals */}
              <ul className="space-y-3">
                {caseStudy.objectives.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className={`fa-solid fa-target text-${caseStudy.primaryColor} text-sm mt-1`}></i>
                    <span className="text-gray-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Methodology */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
            Solution Methodology
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {caseStudy.methodology.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-12 h-12 bg-${caseStudy.primaryColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-tactical-dark">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-2 text-white">
                      {step.phase}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {step.description}
                    </p>
                    {step.actions && (
                      <ul className="space-y-2">
                        {step.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-tactical-green text-sm"></i>
                            <span className="text-gray-300 text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
            Implementation Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-6 top-0 bottom-0 w-1 bg-${caseStudy.primaryColor}`}></div>
              
              <div className="space-y-8">
                {caseStudy.timeline.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className={`w-12 h-12 bg-${caseStudy.primaryColor} rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
                      <i className={`${milestone.icon} text-tactical-dark`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-lg text-white">
                          {milestone.title}
                        </h3>
                        <Badge variant="outline" className={`text-${caseStudy.primaryColor}`}>
                          {milestone.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
            Mission Results
          </h2>
          
          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-tactical-gray border border-tactical-light rounded-lg p-6 text-center">
                <div className={`text-4xl font-display font-bold text-${result.color} mb-2`}>
                  {result.value}
                </div>
                <div className="text-gray-300 text-sm">{result.label}</div>
                <div className="text-gray-400 text-xs mt-2">{result.description}</div>
              </div>
            ))}
          </div>
          
          {/* Technology Stack */}
          <div className="bg-tactical-gray border border-tactical-light rounded-lg p-8">
            <h3 className="font-display font-bold text-xl mb-6 text-white text-center">
              Technology Arsenal Deployed
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {caseStudy.techStack.map((tech, index) => (
                <div key={index} className="bg-tactical-dark border border-tactical-light rounded-lg p-4 text-center">
                  <i className={`${tech.icon} text-${tech.color} text-2xl mb-2`}></i>
                  <div className="text-white text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20 bg-tactical-gray">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`text-6xl text-${caseStudy.primaryColor} mb-6`}>
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <blockquote className="text-2xl text-white font-light mb-8">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  className="w-16 h-16 rounded-full border-2 border-tactical-light"
                  src={caseStudy.testimonial.avatar}
                  alt={caseStudy.testimonial.name}
                />
                <div className="text-left">
                  <div className="font-bold text-white">{caseStudy.testimonial.name}</div>
                  <div className="text-gray-300 text-sm">{caseStudy.testimonial.title}</div>
                  <div className={`text-${caseStudy.primaryColor} text-sm`}>{caseStudy.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-tactical-dark">
          <div className="container mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">
              Related Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCases.map((related, index) => (
                <a 
                  key={index}
                  href={related.url}
                  className="bg-tactical-gray border border-tactical-light rounded-lg overflow-hidden hover:border-fire-orange transition-colors"
                >
                  <div className={`h-48 bg-gradient-to-br from-${related.color}/20 to-tactical-dark`}>
                    <img 
                      className="w-full h-full object-cover" 
                      src={related.image}
                      alt={related.title}
                    />
                  </div>
                  <div className="p-6">
                    <Badge className={`bg-${related.color}/20 text-${related.color} mb-3`}>
                      {related.industry}
                    </Badge>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {related.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-6 text-white">
            Ready for Your Next Mission?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your organization with precision-engineered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Launch Your Mission
            </Button>
            <Button variant="secondary" size="lg">
              View All Operations
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default CaseStudyTemplate