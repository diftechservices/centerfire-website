import { useWordPressPage } from '../hooks/useWordPress'

function DynamicAboutPage() {
  const { content, loading, error } = useWordPressPage('about')

  if (loading) {
    return (
      <div className="section bg-tactical-gray py-16">
        <div className="section-content text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading content from WordPress...</p>
        </div>
      </div>
    )
  }

  if (error || !content) {
    // Show fallback content instead of error messages
    return <FallbackAboutPage />
  }

  return (
    <div className="section bg-tactical-gray py-16">
      <div className="section-content">
        <div className="max-w-4xl mx-auto">
          {/* WordPress Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-display text-4xl lg:text-5xl text-primary mb-6">
              {content.title?.rendered || 'About Centerfire Digital'}
            </h1>
            {content.excerpt?.rendered && (
              <div 
                className="text-lg text-secondary max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: content.excerpt.rendered }}
              />
            )}
          </div>

          {/* WordPress Page Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: content.content?.rendered || '' }}
            />
          </div>

          {/* Meta Information */}
          {content.modified && (
            <div className="mt-12 pt-8 border-t border-tactical-light text-center">
              <p className="text-sm text-gray-400">
                Last updated: {new Date(content.modified).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Fallback About content when WordPress isn't connected
const FallbackAboutPage = () => (
  <div className="py-20 bg-tactical-gray">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
          <i className="fa-solid fa-shield-halved text-fire-orange"></i>
          <span className="font-display text-sm tracking-wider text-white">COMPANY INTEL</span>
        </div>

        <h1 className="font-display font-black text-5xl lg:text-6xl mb-6">
          <span className="text-white">ABOUT CENTERFIRE</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          American-built technology for businesses that refuse to compromise
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission Section */}
        <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
          <h2 className="font-display font-bold text-2xl text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We deliver precision-engineered AI and technology solutions to American businesses that build,
            make, and defend. No offshore teams, no political agendas, no compromises—just results-driven
            technology built by professionals who understand what's at stake.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-6">
            <div className="text-fire-orange text-2xl mb-4">
              <i className="fa-solid fa-flag-usa"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">American Built</h3>
            <p className="text-gray-300">All development on US soil by US citizens. No offshore risks.</p>
          </div>

          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-6">
            <div className="text-steel-blue text-2xl mb-4">
              <i className="fa-solid fa-medal"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Merit-Based</h3>
            <p className="text-gray-300">We hire on skill and character, not quotas or ideology.</p>
          </div>

          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-6">
            <div className="text-tactical-green text-2xl mb-4">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Real Industries</h3>
            <p className="text-gray-300">We work with companies that build things that matter.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
          <h2 className="font-display font-bold text-2xl text-white mb-6">Elite Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Leadership</h4>
              <p className="text-gray-300">Marine Corps veterans with decades of technology experience</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Engineering</h4>
              <p className="text-gray-300">Senior developers who've built systems for defense and enterprise</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Security</h4>
              <p className="text-gray-300">Former military cybersecurity specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DynamicAboutPage