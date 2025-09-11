import { Link } from 'react-router-dom'
import { useWordPressPage } from '../../hooks/useWordPress'

const ACFFooter = ({ pageSlug = 'homepage' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <footer className="bg-tactical-dark border-t border-tactical-light py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-300">Loading footer...</div>
        </div>
      </footer>
    )
  }

  if (error || !content) {
    return <FallbackFooter />
  }

  // Extract ACF data
  const acf = content?.acf || {}
  const {
    // Footer Branding
    footer_logo_url = '/src/assets/images/centerfireweblogo.jpg',
    footer_company_name = 'Centerfire Digital',
    footer_mission_statement = 'Deploying precision-engineered digital solutions with tactical excellence and strategic innovation.',
    
    // Contact Information
    footer_contact_address = '1234 Tactical Ave, Operations Base, USA 12345',
    footer_contact_phone = '+1 (555) FIRE-OPS',
    footer_contact_email = 'command@centerfiredigital.com',
    
    // Copyright
    footer_copyright_text = '© 2024 Centerfire Digital. All rights reserved. Mission classified.'
  } = acf


  // Process Footer Columns from ACF flat structure  
  const processFooterColumns = (acfData) => {
    const columns = []
    let columnIndex = 0
    
    while (acfData[`footer_column_${columnIndex}_title`]) {
      const column = {
        title: acfData[`footer_column_${columnIndex}_title`],
        links: []
      }
      
      // Process links for this column
      let linkIndex = 0
      while (acfData[`footer_column_${columnIndex}_links_${linkIndex}_text`]) {
        column.links.push({
          text: acfData[`footer_column_${columnIndex}_links_${linkIndex}_text`],
          url: acfData[`footer_column_${columnIndex}_links_${linkIndex}_url`]
        })
        linkIndex++
      }
      
      columns.push(column)
      columnIndex++
    }
    
    return columns
  }

  // Process Social Media Links from ACF flat structure
  const processSocialLinks = (acfData) => {
    const socials = []
    let socialIndex = 0
    
    while (acfData[`footer_social_${socialIndex}_platform`]) {
      const social = {
        platform: acfData[`footer_social_${socialIndex}_platform`],
        url: acfData[`footer_social_${socialIndex}_url`],
        icon: acfData[`footer_social_${socialIndex}_icon`]
      }
      
      socials.push(social)
      socialIndex++
    }
    
    return socials
  }

  // Process Legal Links from ACF flat structure
  const processLegalLinks = (acfData) => {
    const links = []
    let linkIndex = 0
    
    while (acfData[`footer_legal_links_${linkIndex}_text`]) {
      const link = {
        text: acfData[`footer_legal_links_${linkIndex}_text`],
        url: acfData[`footer_legal_links_${linkIndex}_url`]
      }
      
      links.push(link)
      linkIndex++
    }
    
    return links
  }

  const acfColumns = processFooterColumns(acf)
  const acfSocialLinks = processSocialLinks(acf)
  const acfLegalLinks = processLegalLinks(acf)

  const defaultColumns = [
    {
      title: 'Services',
      links: [
        { text: 'AI Arsenal', url: '/services#ai' },
        { text: 'Technical Capabilities', url: '/services#tech' },
        { text: 'Mission Portfolio', url: '/services#portfolio' },
        { text: 'Intelligence Hub', url: '/services#intelligence' }
      ]
    },
    {
      title: 'Resources', 
      links: [
        { text: 'Mission Briefings', url: '/resources/briefings' },
        { text: 'Technical Docs', url: '/resources/docs' },
        { text: 'Case Studies', url: '/resources/cases' },
        { text: 'Support Center', url: '/support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', url: '/about' },
        { text: 'Elite Team', url: '/about#team' },
        { text: 'Careers', url: '/careers' },
        { text: 'News & Updates', url: '/news' }
      ]
    }
  ]

  const defaultSocialLinks = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/centerfire-digital', icon: 'fa-brands fa-linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/centerfiredigital', icon: 'fa-brands fa-twitter' },
    { platform: 'GitHub', url: 'https://github.com/centerfiredigital', icon: 'fa-brands fa-github' },
    { platform: 'YouTube', url: 'https://youtube.com/@centerfiredigital', icon: 'fa-brands fa-youtube' }
  ]

  const defaultLegalLinks = [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Security', url: '/security' }
  ]

  const displayColumns = acfColumns.length > 0 ? acfColumns : defaultColumns
  const displaySocialLinks = acfSocialLinks.length > 0 ? acfSocialLinks : defaultSocialLinks
  const displayLegalLinks = acfLegalLinks.length > 0 ? acfLegalLinks : defaultLegalLinks

  return (
    <footer className="bg-tactical-dark border-t border-tactical-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Single Section - Service Columns & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Service Columns */}
          {displayColumns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="font-display font-bold text-lg text-white mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-tactical-green transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <i className="fa-solid fa-chevron-right text-xs text-tactical-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Column */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Contact Command</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-location-dot text-fire-orange mt-1"></i>
                <span className="text-gray-300 text-sm">{footer_contact_address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-tactical-green"></i>
                <span className="text-gray-300 text-sm">{footer_contact_phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-steel-blue"></i>
                <span className="text-gray-300 text-sm">{footer_contact_email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3">
              {displaySocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-tactical-gray border border-tactical-light rounded-lg flex items-center justify-center hover:bg-fire-orange hover:border-fire-orange transition-all group"
                >
                  <i className={`${social.icon} text-xs text-gray-300 group-hover:text-tactical-dark`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Legal */}
      <div className="border-t border-tactical-light bg-tactical-gray">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">{footer_copyright_text}</p>
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              {displayLegalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Fallback component when WordPress isn't connected
const FallbackFooter = () => {

  const serviceColumns = [
    {
      title: 'Services',
      links: [
        { text: 'AI Arsenal', url: '/services#ai' },
        { text: 'Technical Capabilities', url: '/services#tech' },
        { text: 'Mission Portfolio', url: '/services#portfolio' },
        { text: 'Intelligence Hub', url: '/services#intelligence' }
      ]
    },
    {
      title: 'Resources', 
      links: [
        { text: 'Mission Briefings', url: '/resources/briefings' },
        { text: 'Technical Docs', url: '/resources/docs' },
        { text: 'Case Studies', url: '/resources/cases' },
        { text: 'Support Center', url: '/support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', url: '/about' },
        { text: 'Elite Team', url: '/about#team' },
        { text: 'Careers', url: '/careers' },
        { text: 'News & Updates', url: '/news' }
      ]
    }
  ]

  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/centerfire-digital', icon: 'fa-brands fa-linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/centerfiredigital', icon: 'fa-brands fa-twitter' },
    { platform: 'GitHub', url: 'https://github.com/centerfiredigital', icon: 'fa-brands fa-github' },
    { platform: 'YouTube', url: 'https://youtube.com/@centerfiredigital', icon: 'fa-brands fa-youtube' }
  ]

  const legalLinks = [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Security', url: '/security' }
  ]

  return (
    <footer className="bg-tactical-dark border-t border-tactical-light">
      {/* WordPress disconnected warning */}
      <div className="bg-yellow-900/20 border-b border-yellow-600">
        <div className="container mx-auto px-6 py-3">
          <p className="text-yellow-400 text-center text-sm">
            <i className="fa-solid fa-exclamation-triangle mr-2"></i>
            Using fallback footer content - WordPress not connected
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Single Section - Service Columns & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Service Columns */}
          {serviceColumns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="font-display font-bold text-lg text-white mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-tactical-green transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <i className="fa-solid fa-chevron-right text-xs text-tactical-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Social Column */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Contact Command</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-location-dot text-fire-orange mt-1"></i>
                <span className="text-gray-300 text-sm">1234 Tactical Ave, Operations Base, USA 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-tactical-green"></i>
                <span className="text-gray-300 text-sm">+1 (555) FIRE-OPS</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-steel-blue"></i>
                <span className="text-gray-300 text-sm">command@centerfiredigital.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-tactical-gray border border-tactical-light rounded-lg flex items-center justify-center hover:bg-fire-orange hover:border-fire-orange transition-all group"
                >
                  <i className={`${social.icon} text-xs text-gray-300 group-hover:text-tactical-dark`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Legal */}
      <div className="border-t border-tactical-light bg-tactical-gray">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 Centerfire Digital. All rights reserved. Mission classified.</p>
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ACFFooter