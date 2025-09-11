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
        <nav className="flex items-center justify-between py-6">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/images/centerfireweblogo.jpg" 
                alt="Centerfire Digital" 
                className="w-44 h-auto"
              />
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