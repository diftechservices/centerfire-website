import { useWordPressPage } from '../../hooks/useWordPress'
import { Button, Badge } from '../ui'

const ACFMissionPortfolio = ({ pageSlug = 'homepage' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <section className="py-20 bg-tactical-dark flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Mission Portfolio section...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    return <FallbackMissionPortfolio />
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    // Mission Portfolio Header
    mission_portfolio_title_line1 = 'SUCCESSFUL',
    mission_portfolio_title_line2 = 'OPERATIONS',
    mission_portfolio_description = 'Battle-tested solutions deployed across diverse operational theaters, delivering decisive results for organizations that demand excellence',
    mission_portfolio_cta_button_text = 'View Complete Arsenal'
  } = acf

  // Process Portfolio Projects from ACF flat structure
  const processPortfolioProjects = (acfData) => {
    const projects = []
    let projectIndex = 0
    
    while (acfData[`portfolio_projects_${projectIndex}_title`]) {
      const project = {
        id: projectIndex + 1,
        image: acfData[`portfolio_projects_${projectIndex}_image`],
        hoverBorder: acfData[`portfolio_projects_${projectIndex}_hover_border`],
        gradientBg: acfData[`portfolio_projects_${projectIndex}_gradient_bg`],
        title: acfData[`portfolio_projects_${projectIndex}_title`],
        description: acfData[`portfolio_projects_${projectIndex}_description`],
        buttonText: acfData[`portfolio_projects_${projectIndex}_button_text`],
        buttonColor: acfData[`portfolio_projects_${projectIndex}_button_color`],
        badges: [],
        stats: []
      }
      
      // Process badges for this project
      let badgeIndex = 0
      while (acfData[`portfolio_projects_${projectIndex}_badges_${badgeIndex}_text`]) {
        project.badges.push({
          text: acfData[`portfolio_projects_${projectIndex}_badges_${badgeIndex}_text`],
          color: acfData[`portfolio_projects_${projectIndex}_badges_${badgeIndex}_color`]
        })
        badgeIndex++
      }
      
      // Process stats for this project
      let statIndex = 0
      while (acfData[`portfolio_projects_${projectIndex}_stats_${statIndex}_value`]) {
        project.stats.push({
          value: acfData[`portfolio_projects_${projectIndex}_stats_${statIndex}_value`],
          label: acfData[`portfolio_projects_${projectIndex}_stats_${statIndex}_label`],
          color: acfData[`portfolio_projects_${projectIndex}_stats_${statIndex}_color`]
        })
        statIndex++
      }
      
      projects.push(project)
      projectIndex++
    }
    
    return projects
  }

  const acfPortfolioProjects = processPortfolioProjects(acf)

  // Default projects (exact current content)
  const defaultPortfolioProjects = [
    {
      id: 1,
      image: '/src/assets/images/tactical-trading.png',
      hoverBorder: 'hover:border-fire-orange',
      gradientBg: 'bg-gradient-to-br from-fire-orange/20 to-tactical-dark',
      badges: [
        { text: 'FINTECH', color: 'bg-fire-orange/20 text-fire-orange' },
        { text: 'AI-POWERED', color: 'bg-tactical-green/20 text-tactical-green' }
      ],
      title: 'Tactical Trading Platform',
      description: 'Deployed an advanced AI-driven trading platform that processes millions of market data points in real-time, delivering 340% ROI increase for our client within the first quarter.',
      stats: [
        { value: '340%', label: 'ROI Increase', color: 'text-fire-orange' },
        { value: '0.2s', label: 'Response Time', color: 'text-tactical-green' },
        { value: '24/7', label: 'Operations', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-fire-orange'
    },
    {
      id: 2,
      image: '/src/assets/images/cybersecurity-command.png',
      hoverBorder: 'hover:border-steel-blue',
      gradientBg: 'bg-gradient-to-br from-steel-blue/20 to-tactical-dark',
      badges: [
        { text: 'CYBERSECURITY', color: 'bg-steel-blue/20 text-steel-blue' },
        { text: 'ENTERPRISE', color: 'bg-warning-amber/20 text-warning-amber' }
      ],
      title: 'Fortress Security Suite',
      description: 'Engineered a comprehensive cybersecurity framework that neutralized 99.9% of threats while maintaining zero downtime across a Fortune 500 client\'s global infrastructure.',
      stats: [
        { value: '99.9%', label: 'Threat Blocked', color: 'text-steel-blue' },
        { value: '0', label: 'Downtime', color: 'text-tactical-green' },
        { value: '24/7', label: 'Monitoring', color: 'text-warning-amber' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-steel-blue'
    },
    {
      id: 3,
      image: '/src/assets/images/supply-chain.png',
      hoverBorder: 'hover:border-tactical-green',
      gradientBg: 'bg-gradient-to-br from-tactical-green/20 to-tactical-dark',
      badges: [
        { text: 'LOGISTICS', color: 'bg-tactical-green/20 text-tactical-green' },
        { text: 'AI-OPTIMIZATION', color: 'bg-purple-500/20 text-purple-500' }
      ],
      title: 'Supply Chain Command',
      description: 'Deployed AI-powered supply chain optimization that reduced operational costs by 45% while improving delivery times by 60% across a multi-billion dollar logistics network.',
      stats: [
        { value: '45%', label: 'Cost Reduction', color: 'text-tactical-green' },
        { value: '60%', label: 'Faster Delivery', color: 'text-fire-orange' },
        { value: '$50M', label: 'Savings', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-tactical-green'
    },
    {
      id: 4,
      image: '/src/assets/images/medical-ai.png',
      hoverBorder: 'hover:border-warning-amber',
      gradientBg: 'bg-gradient-to-br from-warning-amber/20 to-tactical-dark',
      badges: [
        { text: 'HEALTHCARE', color: 'bg-warning-amber/20 text-warning-amber' },
        { text: 'DIAGNOSTIC AI', color: 'bg-tactical-green/20 text-tactical-green' }
      ],
      title: 'Medical Intelligence System',
      description: 'Engineered an AI diagnostic platform that achieved 98.5% accuracy in early disease detection, processing over 10,000 medical images daily with precision that surpasses human specialists.',
      stats: [
        { value: '98.5%', label: 'Accuracy Rate', color: 'text-warning-amber' },
        { value: '10K+', label: 'Daily Scans', color: 'text-tactical-green' },
        { value: '75%', label: 'Time Saved', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-warning-amber'
    }
  ]

  const displayProjects = acfPortfolioProjects.length > 0 ? acfPortfolioProjects : defaultPortfolioProjects

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-trophy text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION PORTFOLIO</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{mission_portfolio_title_line1}</span>
            <span className="text-fire-orange"> {mission_portfolio_title_line2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {mission_portfolio_description}
          </p>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {displayProjects.map((project) => (
            <div 
              key={project.id}
              className={`bg-tactical-gray border border-tactical-light rounded-xl overflow-hidden ${project.hoverBorder} transition-all`}
            >
              {/* Project Image */}
              <div className={`h-64 ${project.gradientBg} flex items-center justify-center`}>
                <img 
                  className="w-full h-full object-cover" 
                  src={project.image}
                  alt={project.title}
                />
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                {/* Badges */}
                <div className="flex items-center space-x-3 mb-4">
                  {project.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`${badge.color} px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
                
                {/* Title & Description */}
                <h3 className="font-display font-bold text-2xl mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-display font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`${project.buttonColor} hover:text-white font-semibold transition-colors`}>
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button size="lg">
            {mission_portfolio_cta_button_text}
          </Button>
        </div>
      </div>
    </section>
  )
}

// Fallback component when WordPress isn't connected
const FallbackMissionPortfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      image: '/src/assets/images/tactical-trading.png',
      hoverBorder: 'hover:border-fire-orange',
      gradientBg: 'bg-gradient-to-br from-fire-orange/20 to-tactical-dark',
      badges: [
        { text: 'FINTECH', color: 'bg-fire-orange/20 text-fire-orange' },
        { text: 'AI-POWERED', color: 'bg-tactical-green/20 text-tactical-green' }
      ],
      title: 'Tactical Trading Platform',
      description: 'Deployed an advanced AI-driven trading platform that processes millions of market data points in real-time, delivering 340% ROI increase for our client within the first quarter.',
      stats: [
        { value: '340%', label: 'ROI Increase', color: 'text-fire-orange' },
        { value: '0.2s', label: 'Response Time', color: 'text-tactical-green' },
        { value: '24/7', label: 'Operations', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-fire-orange'
    },
    {
      id: 2,
      image: '/src/assets/images/cybersecurity-command.png',
      hoverBorder: 'hover:border-steel-blue',
      gradientBg: 'bg-gradient-to-br from-steel-blue/20 to-tactical-dark',
      badges: [
        { text: 'CYBERSECURITY', color: 'bg-steel-blue/20 text-steel-blue' },
        { text: 'ENTERPRISE', color: 'bg-warning-amber/20 text-warning-amber' }
      ],
      title: 'Fortress Security Suite',
      description: 'Engineered a comprehensive cybersecurity framework that neutralized 99.9% of threats while maintaining zero downtime across a Fortune 500 client\'s global infrastructure.',
      stats: [
        { value: '99.9%', label: 'Threat Blocked', color: 'text-steel-blue' },
        { value: '0', label: 'Downtime', color: 'text-tactical-green' },
        { value: '24/7', label: 'Monitoring', color: 'text-warning-amber' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-steel-blue'
    },
    {
      id: 3,
      image: '/src/assets/images/supply-chain.png',
      hoverBorder: 'hover:border-tactical-green',
      gradientBg: 'bg-gradient-to-br from-tactical-green/20 to-tactical-dark',
      badges: [
        { text: 'LOGISTICS', color: 'bg-tactical-green/20 text-tactical-green' },
        { text: 'AI-OPTIMIZATION', color: 'bg-purple-500/20 text-purple-500' }
      ],
      title: 'Supply Chain Command',
      description: 'Deployed AI-powered supply chain optimization that reduced operational costs by 45% while improving delivery times by 60% across a multi-billion dollar logistics network.',
      stats: [
        { value: '45%', label: 'Cost Reduction', color: 'text-tactical-green' },
        { value: '60%', label: 'Faster Delivery', color: 'text-fire-orange' },
        { value: '$50M', label: 'Savings', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-tactical-green'
    },
    {
      id: 4,
      image: '/src/assets/images/medical-ai.png',
      hoverBorder: 'hover:border-warning-amber',
      gradientBg: 'bg-gradient-to-br from-warning-amber/20 to-tactical-dark',
      badges: [
        { text: 'HEALTHCARE', color: 'bg-warning-amber/20 text-warning-amber' },
        { text: 'DIAGNOSTIC AI', color: 'bg-tactical-green/20 text-tactical-green' }
      ],
      title: 'Medical Intelligence System',
      description: 'Engineered an AI diagnostic platform that achieved 98.5% accuracy in early disease detection, processing over 10,000 medical images daily with precision that surpasses human specialists.',
      stats: [
        { value: '98.5%', label: 'Accuracy Rate', color: 'text-warning-amber' },
        { value: '10K+', label: 'Daily Scans', color: 'text-tactical-green' },
        { value: '75%', label: 'Time Saved', color: 'text-steel-blue' }
      ],
      buttonText: 'View Mission Details →',
      buttonColor: 'text-warning-amber'
    }
  ]

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-yellow-400 text-center text-sm">
            <i className="fa-solid fa-exclamation-triangle mr-2"></i>
            Using fallback Mission Portfolio content - WordPress not connected
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-trophy text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION PORTFOLIO</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">SUCCESSFUL</span>
            <span className="text-fire-orange"> OPERATIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Battle-tested solutions deployed across diverse operational theaters, delivering decisive results for organizations that demand excellence
          </p>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {portfolioProjects.map((project) => (
            <div 
              key={project.id}
              className={`bg-tactical-gray border border-tactical-light rounded-xl overflow-hidden ${project.hoverBorder} transition-all`}
            >
              {/* Project Image */}
              <div className={`h-64 ${project.gradientBg} flex items-center justify-center`}>
                <img 
                  className="w-full h-full object-cover" 
                  src={project.image}
                  alt={project.title}
                />
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                {/* Badges */}
                <div className="flex items-center space-x-3 mb-4">
                  {project.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`${badge.color} px-3 py-1 rounded-full text-sm font-semibold`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
                
                {/* Title & Description */}
                <h3 className="font-display font-bold text-2xl mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-display font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`${project.buttonColor} hover:text-white font-semibold transition-colors`}>
                  {project.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button size="lg">
            View Complete Arsenal
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ACFMissionPortfolio