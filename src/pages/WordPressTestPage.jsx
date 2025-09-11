import { useWordPressContent } from '../hooks/useWordPress'

function WordPressTestPage() {
  const { content: pages, loading, error } = useWordPressContent('page')

  if (loading) {
    return (
      <div className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange"></div>
          <p className="text-gray-300 mt-4">Loading WordPress content...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-20 bg-tactical-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-red-400 text-xl font-bold mb-2">Connection Error</h2>
            <p className="text-gray-300 mb-4">
              Unable to connect to WordPress API at centerfiredigital.com
            </p>
            <p className="text-sm text-gray-400">Error: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-tactical-green/20 border border-tactical-green rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-check-circle text-tactical-green"></i>
            <span className="font-display text-sm tracking-wider text-tactical-green">CONNECTION SUCCESS</span>
          </div>
          
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white mb-6">
            WordPress Headless Test
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Successfully connected to centerfiredigital.com WordPress REST API. 
            Found {pages?.length || 0} pages.
          </p>
        </div>

        {/* API Info */}
        <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">API Connection Details:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">API URL:</span>
              <span className="text-white ml-2">https://centerfiredigital.com/wp-json/wp/v2</span>
            </div>
            <div>
              <span className="text-gray-400">Pages Found:</span>
              <span className="text-tactical-green ml-2">{pages?.length || 0}</span>
            </div>
            <div>
              <span className="text-gray-400">Status:</span>
              <span className="text-tactical-green ml-2">✅ Connected</span>
            </div>
            <div>
              <span className="text-gray-400">Environment:</span>
              <span className="text-white ml-2">Production (Read-Only)</span>
            </div>
          </div>
        </div>

        {/* Pages List */}
        {pages && pages.length > 0 && (
          <div className="bg-tactical-dark border border-tactical-light rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Available WordPress Pages:</h3>
            <div className="space-y-4">
              {pages.map((page) => (
                <div key={page.id} className="bg-tactical-gray border border-tactical-light rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        {page.title?.rendered || 'Untitled'}
                      </h4>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>ID: {page.id}</div>
                        <div>Slug: {page.slug}</div>
                        <div>Modified: {new Date(page.modified).toLocaleDateString()}</div>
                        {page.meta && page.meta._elementor_edit_mode && (
                          <div className="text-yellow-400">⚠️ Uses Elementor</div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <a 
                        href={`/about-wp`} 
                        className="bg-fire-orange hover:bg-fire-orange/90 text-white px-4 py-2 rounded text-sm transition-colors"
                      >
                        Test Load
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-tactical-green/10 border border-tactical-green rounded-xl p-8">
            <h3 className="text-tactical-green text-xl font-bold mb-4">
              ✅ WordPress Connection Working!
            </h3>
            <p className="text-gray-300 mb-6">
              The headless architecture is successfully reading from your existing WordPress site. 
              You can now safely add ACF fields and content without affecting the live site.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="/services-acf" 
                className="bg-fire-orange hover:bg-fire-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Test ACF Components →
              </a>
              <a 
                href="/demo" 
                className="bg-tactical-gray hover:bg-tactical-light text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-tactical-light"
              >
                View Original Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordPressTestPage