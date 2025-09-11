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

  if (error) {
    return (
      <div className="section bg-tactical-gray py-16">
        <div className="section-content text-center">
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-red-400 text-xl font-bold mb-2">Connection Error</h2>
            <p className="text-gray-300">
              Unable to load content from WordPress. Using fallback content.
            </p>
            <p className="text-sm text-gray-400 mt-2">Error: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="section bg-tactical-gray py-16">
        <div className="section-content text-center">
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">No Content Found</h2>
            <p className="text-gray-300">
              No 'about' page found in WordPress. Please create an About page with slug 'about'.
            </p>
          </div>
        </div>
      </div>
    )
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

export default DynamicAboutPage