import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/centerfire-logo.png'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img src={logo} alt="Centerfire Digital" className="nav-logo" />
          <h2>Centerfire Digital</h2>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className={isActive('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation