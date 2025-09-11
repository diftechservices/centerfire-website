import { Link, useLocation } from 'react-router-dom'
import { Button, StatusIndicator } from '../ui'

const Header = () => {
  const location = useLocation()
  
  const navigationItems = [
    { icon: 'fa-solid fa-home', label: 'Home', path: '/' },
    { icon: 'fa-solid fa-shield-halved', label: 'About', path: '/about' },
    { icon: 'fa-solid fa-brain', label: 'Services', path: '/services' },
    { icon: 'fa-solid fa-satellite-dish', label: 'Contact', path: '/contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tactical-dark/95 backdrop-blur-md border-b border-tactical-light">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-6">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img 
                  src="/src/assets/images/centerfireweblogo.jpg" 
                  alt="Centerfire Digital" 
                  className="w-44 h-auto cursor-pointer"
                />
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className={`transition-colors flex items-center space-x-2 ${
                    location.pathname === item.path 
                      ? 'text-fire-orange' 
                      : 'text-gray-300 hover:text-fire-orange'
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </Link>
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