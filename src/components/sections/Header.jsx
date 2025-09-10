import { Button, StatusIndicator } from '../ui'

const Header = () => {
  const navigationItems = [
    { icon: 'fa-solid fa-brain', label: 'AI Solutions' },
    { icon: 'fa-solid fa-shield-halved', label: 'Capabilities' },
    { icon: 'fa-solid fa-trophy', label: 'Portfolio' },
    { icon: 'fa-solid fa-satellite-dish', label: 'Intel Hub' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tactical-dark/95 backdrop-blur-md border-b border-tactical-light">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-fire-orange rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-crosshairs text-tactical-dark text-lg"></i>
              </div>
              <div className="font-display font-bold text-xl">
                <span className="text-fire-orange">CENTER</span>
                <span className="text-white">FIRE</span>
                <div className="text-xs text-gray-400 font-tactical">DIGITAL</div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <span 
                  key={index}
                  className="text-gray-300 hover:text-fire-orange transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Status and CTA */}
          <div className="flex items-center space-x-4">
            {/* System Status */}
            <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-tactical-gray rounded-lg border border-tactical-light">
              <StatusIndicator status="operational" size="sm" />
              <span className="text-sm text-gray-300">System Status: Operational</span>
            </div>
            
            {/* CTA Button */}
            <Button>
              Deploy Mission
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header