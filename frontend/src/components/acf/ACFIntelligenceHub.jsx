import { useWordPressPage } from '../../hooks/useWordPress'
import { Button, Badge } from '../ui'

const ACFIntelligenceHub = ({ pageSlug = 'homepage' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <section className="py-20 bg-tactical-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Intelligence Hub section...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    return <FallbackIntelligenceHub />
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    // Intelligence Hub Header
    intelligence_hub_title_line1 = 'TACTICAL',
    intelligence_hub_title_line2 = 'INTELLIGENCE',
    intelligence_hub_description = 'Strategic insights, threat assessments, and technical intelligence to keep your organization ahead of emerging trends and security challenges'
  } = acf

  // Process Intelligence Reports from ACF flat structure
  const processIntelligenceReports = (acfData) => {
    const reports = []
    let reportIndex = 0
    
    while (acfData[`intelligence_reports_${reportIndex}_title`]) {
      const report = {
        id: reportIndex + 1,
        icon: acfData[`intelligence_reports_${reportIndex}_icon`],
        category: acfData[`intelligence_reports_${reportIndex}_category`],
        title: acfData[`intelligence_reports_${reportIndex}_title`],
        excerpt: acfData[`intelligence_reports_${reportIndex}_excerpt`],
        author: acfData[`intelligence_reports_${reportIndex}_author`],
        readTime: acfData[`intelligence_reports_${reportIndex}_read_time`],
        date: acfData[`intelligence_reports_${reportIndex}_date`],
        tags: []
      }
      
      // Process tags for this report
      let tagIndex = 0
      while (acfData[`intelligence_reports_${reportIndex}_tags_${tagIndex}_tag_text`]) {
        report.tags.push(acfData[`intelligence_reports_${reportIndex}_tags_${tagIndex}_tag_text`])
        tagIndex++
      }
      
      reports.push(report)
      reportIndex++
    }
    
    return reports
  }

  // Process Threat Assessment from ACF flat structure
  const processThreatAssessment = (acfData) => {
    const threats = []
    let threatIndex = 0
    
    while (acfData[`threat_assessment_${threatIndex}_threat`]) {
      threats.push({
        threat: acfData[`threat_assessment_${threatIndex}_threat`],
        level: acfData[`threat_assessment_${threatIndex}_level`],
        progress: parseInt(acfData[`threat_assessment_${threatIndex}_progress`]),
        color: acfData[`threat_assessment_${threatIndex}_color`],
        status: acfData[`threat_assessment_${threatIndex}_status`]
      })
      threatIndex++
    }
    
    return threats
  }

  // Process Tech Stack Stats from ACF flat structure
  const processTechStackStats = (acfData) => {
    const stats = []
    let statIndex = 0
    
    while (acfData[`tech_stack_stats_${statIndex}_name`]) {
      stats.push({
        name: acfData[`tech_stack_stats_${statIndex}_name`],
        value: acfData[`tech_stack_stats_${statIndex}_value`],
        trend: acfData[`tech_stack_stats_${statIndex}_trend`]
      })
      statIndex++
    }
    
    return stats
  }

  // Process Mission Status from ACF flat structure
  const processMissionStatus = (acfData) => {
    const status = []
    let statusIndex = 0
    
    while (acfData[`mission_status_${statusIndex}_name`]) {
      status.push({
        name: acfData[`mission_status_${statusIndex}_name`],
        value: acfData[`mission_status_${statusIndex}_value`],
        color: acfData[`mission_status_${statusIndex}_color`]
      })
      statusIndex++
    }
    
    return status
  }

  const acfIntelligenceReports = processIntelligenceReports(acf)
  const acfThreatAssessment = processThreatAssessment(acf)
  const acfTechStackStats = processTechStackStats(acf)
  const acfMissionStatus = processMissionStatus(acf)

  // Default data (exact current content)
  const defaultIntelligenceReports = [
    {
      id: 1,
      icon: 'fa-solid fa-brain',
      category: 'AI INTELLIGENCE',
      title: 'The Future of Autonomous AI Operations',
      excerpt: 'Exploring how autonomous AI systems are revolutionizing enterprise operations with self-healing infrastructure and predictive maintenance protocols.',
      author: 'Sarah Phoenix',
      readTime: '8 min read',
      date: '2024-01-15',
      tags: ['Machine Learning', 'Operations', 'Future Tech']
    },
    {
      id: 2,
      icon: 'fa-solid fa-shield-alt',
      category: 'SECURITY BRIEF',
      title: 'Zero-Trust Architecture Implementation Guide',
      excerpt: 'Complete tactical guide for implementing zero-trust security architecture in enterprise environments with real-world deployment strategies.',
      author: 'Jake Hunter',
      readTime: '12 min read',
      date: '2024-01-12',
      tags: ['Cybersecurity', 'Architecture', 'Enterprise']
    },
    {
      id: 3,
      icon: 'fa-solid fa-chart-line',
      category: 'MARKET ANALYSIS',
      title: 'Cloud Infrastructure Cost Optimization Tactics',
      excerpt: 'Advanced strategies for reducing cloud infrastructure costs by 40% while maintaining performance and security standards.',
      author: 'Alex Rivera',
      readTime: '6 min read',
      date: '2024-01-10',
      tags: ['Cloud', 'Cost Optimization', 'Infrastructure']
    }
  ]

  const defaultThreatAssessment = [
    { 
      threat: 'API Vulnerabilities', 
      level: 'HIGH', 
      progress: 85, 
      color: 'bg-warning-amber',
      status: 'Monitoring'
    },
    { 
      threat: 'Data Exfiltration', 
      level: 'MEDIUM', 
      progress: 60, 
      color: 'bg-steel-blue',
      status: 'Mitigated'
    },
    { 
      threat: 'DDoS Attacks', 
      level: 'LOW', 
      progress: 25, 
      color: 'bg-tactical-green',
      status: 'Protected'
    }
  ]

  const defaultTechStackStats = [
    { name: 'AI Models Deployed', value: '156', trend: '+12%' },
    { name: 'Security Scans', value: '24/7', trend: 'Active' },
    { name: 'Cloud Uptime', value: '99.9%', trend: '+0.1%' },
    { name: 'Response Time', value: '<50ms', trend: 'Optimal' }
  ]

  const defaultMissionStatus = [
    { name: 'Active Deployments', value: '247', color: 'text-tactical-green' },
    { name: 'Success Rate', value: '98.7%', color: 'text-tactical-green' },
    { name: 'Response Time', value: '< 15min', color: 'text-steel-blue' },
    { name: 'Team Status', value: 'Operational', color: 'text-tactical-green' }
  ]

  const displayReports = acfIntelligenceReports.length > 0 ? acfIntelligenceReports : defaultIntelligenceReports
  const displayThreats = acfThreatAssessment.length > 0 ? acfThreatAssessment : defaultThreatAssessment
  const displayTechStats = acfTechStackStats.length > 0 ? acfTechStackStats : defaultTechStackStats
  const displayMissionStatus = acfMissionStatus.length > 0 ? acfMissionStatus : defaultMissionStatus

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite-dish text-steel-blue"></i>
            <span className="font-display text-sm tracking-wider text-white">INTELLIGENCE HUB</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{intelligence_hub_title_line1}</span>
            <span className="text-steel-blue"> {intelligence_hub_title_line2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {intelligence_hub_description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Intelligence Reports */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-8 text-white flex items-center">
              <i className="fa-solid fa-file-alt text-fire-orange mr-3"></i>
              Intelligence Reports
            </h3>
            
            <div className="space-y-8">
              {displayReports.map((report) => (
                <div 
                  key={report.id}
                  className="bg-tactical-dark border border-tactical-light rounded-lg p-6 hover:border-steel-blue transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    {/* Report Icon */}
                    <div className="w-12 h-12 bg-steel-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${report.icon} text-steel-blue`}></i>
                    </div>
                    
                    {/* Report Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-steel-blue/20 text-steel-blue">
                          {report.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">{report.date}</span>
                      </div>
                      
                      <h4 className="font-display font-bold text-xl mb-3 text-white hover:text-steel-blue transition-colors">
                        {report.title}
                      </h4>
                      
                      <p className="text-gray-300 mb-4">
                        {report.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>By {report.author}</span>
                          <span>•</span>
                          <span>{report.readTime}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {report.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-tactical-gray text-gray-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Threat Assessment */}
            <div className="mt-12">
              <h3 className="font-display font-bold text-2xl mb-8 text-white flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-warning-amber mr-3"></i>
                Weekly Threat Assessment
              </h3>
              
              <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-display font-bold text-lg text-white">
                    Current Threat Level: <span className="text-warning-amber">ELEVATED</span>
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning-amber rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Live Monitoring</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {displayThreats.map((threat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-white font-medium">{threat.threat}</div>
                        <Badge className={`${threat.color}/20 text-${threat.color.replace('bg-', '')}`}>
                          {threat.level}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-tactical-gray rounded-full h-2">
                          <div 
                            className={`h-2 ${threat.color} rounded-full transition-all`}
                            style={{ width: `${threat.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-300 text-sm w-20">{threat.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-tactical-gray rounded-lg">
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="fa-solid fa-info-circle text-steel-blue"></i>
                    <span className="text-gray-300">
                      All systems operational. Next assessment: <span className="text-white">Jan 22, 2024</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-envelope text-fire-orange mr-3"></i>
                Intel Briefings
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Get weekly intelligence reports and tactical insights delivered to your secure channel.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Command Email"
                  className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none"
                />
                <Button className="w-full" size="sm">
                  Subscribe to Intel
                </Button>
              </div>
            </div>

            {/* Tech Stack Arsenal */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-cogs text-tactical-green mr-3"></i>
                Tech Stack Arsenal
              </h3>
              <div className="space-y-4">
                {displayTechStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="text-gray-300 text-sm">{stat.name}</div>
                    <div className="text-right">
                      <div className="text-white font-bold">{stat.value}</div>
                      <div className="text-tactical-green text-xs">{stat.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Status */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-tasks text-steel-blue mr-3"></i>
                Mission Status
              </h3>
              <div className="space-y-3">
                {displayMissionStatus.map((status, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{status.name}</span>
                    {status.name === 'Team Status' ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-tactical-green rounded-full"></div>
                        <span className="text-tactical-green text-sm font-bold">{status.value}</span>
                      </div>
                    ) : (
                      <span className={`${status.color} font-bold`}>{status.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Response */}
            <div className="bg-gradient-to-br from-fire-orange/20 to-tactical-dark border border-fire-orange rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-3 text-white flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-fire-orange mr-3"></i>
                Emergency Response
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Critical system issue? Our rapid response team is standing by 24/7.
              </p>
              <Button variant="secondary" size="sm" className="w-full border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-tactical-dark">
                Contact Emergency Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Fallback component when WordPress isn't connected
const FallbackIntelligenceHub = () => {
  const intelligenceReports = [
    {
      id: 1,
      icon: 'fa-solid fa-brain',
      category: 'AI INTELLIGENCE',
      title: 'The Future of Autonomous AI Operations',
      excerpt: 'Exploring how autonomous AI systems are revolutionizing enterprise operations with self-healing infrastructure and predictive maintenance protocols.',
      author: 'Sarah Phoenix',
      readTime: '8 min read',
      date: '2024-01-15',
      tags: ['Machine Learning', 'Operations', 'Future Tech']
    },
    {
      id: 2,
      icon: 'fa-solid fa-shield-alt',
      category: 'SECURITY BRIEF',
      title: 'Zero-Trust Architecture Implementation Guide',
      excerpt: 'Complete tactical guide for implementing zero-trust security architecture in enterprise environments with real-world deployment strategies.',
      author: 'Jake Hunter',
      readTime: '12 min read',
      date: '2024-01-12',
      tags: ['Cybersecurity', 'Architecture', 'Enterprise']
    },
    {
      id: 3,
      icon: 'fa-solid fa-chart-line',
      category: 'MARKET ANALYSIS',
      title: 'Cloud Infrastructure Cost Optimization Tactics',
      excerpt: 'Advanced strategies for reducing cloud infrastructure costs by 40% while maintaining performance and security standards.',
      author: 'Alex Rivera',
      readTime: '6 min read',
      date: '2024-01-10',
      tags: ['Cloud', 'Cost Optimization', 'Infrastructure']
    }
  ]

  const threatAssessment = [
    { 
      threat: 'API Vulnerabilities', 
      level: 'HIGH', 
      progress: 85, 
      color: 'bg-warning-amber',
      status: 'Monitoring'
    },
    { 
      threat: 'Data Exfiltration', 
      level: 'MEDIUM', 
      progress: 60, 
      color: 'bg-steel-blue',
      status: 'Mitigated'
    },
    { 
      threat: 'DDoS Attacks', 
      level: 'LOW', 
      progress: 25, 
      color: 'bg-tactical-green',
      status: 'Protected'
    }
  ]

  const techStackStats = [
    { name: 'AI Models Deployed', value: '156', trend: '+12%' },
    { name: 'Security Scans', value: '24/7', trend: 'Active' },
    { name: 'Cloud Uptime', value: '99.9%', trend: '+0.1%' },
    { name: 'Response Time', value: '<50ms', trend: 'Optimal' }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-yellow-400 text-center text-sm">
            <i className="fa-solid fa-exclamation-triangle mr-2"></i>
            Using fallback Intelligence Hub content - WordPress not connected
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite-dish text-steel-blue"></i>
            <span className="font-display text-sm tracking-wider text-white">INTELLIGENCE HUB</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">TACTICAL</span>
            <span className="text-steel-blue"> INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Strategic insights, threat assessments, and technical intelligence to keep your organization ahead of emerging trends and security challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Intelligence Reports */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-8 text-white flex items-center">
              <i className="fa-solid fa-file-alt text-fire-orange mr-3"></i>
              Intelligence Reports
            </h3>
            
            <div className="space-y-8">
              {intelligenceReports.map((report) => (
                <div 
                  key={report.id}
                  className="bg-tactical-dark border border-tactical-light rounded-lg p-6 hover:border-steel-blue transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    {/* Report Icon */}
                    <div className="w-12 h-12 bg-steel-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${report.icon} text-steel-blue`}></i>
                    </div>
                    
                    {/* Report Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-steel-blue/20 text-steel-blue">
                          {report.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">{report.date}</span>
                      </div>
                      
                      <h4 className="font-display font-bold text-xl mb-3 text-white hover:text-steel-blue transition-colors">
                        {report.title}
                      </h4>
                      
                      <p className="text-gray-300 mb-4">
                        {report.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>By {report.author}</span>
                          <span>•</span>
                          <span>{report.readTime}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {report.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-tactical-gray text-gray-300 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Threat Assessment */}
            <div className="mt-12">
              <h3 className="font-display font-bold text-2xl mb-8 text-white flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-warning-amber mr-3"></i>
                Weekly Threat Assessment
              </h3>
              
              <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-display font-bold text-lg text-white">
                    Current Threat Level: <span className="text-warning-amber">ELEVATED</span>
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning-amber rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Live Monitoring</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {threatAssessment.map((threat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-white font-medium">{threat.threat}</div>
                        <Badge className={`${threat.color}/20 text-${threat.color.replace('bg-', '')}`}>
                          {threat.level}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-tactical-gray rounded-full h-2">
                          <div 
                            className={`h-2 ${threat.color} rounded-full transition-all`}
                            style={{ width: `${threat.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-300 text-sm w-20">{threat.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-tactical-gray rounded-lg">
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="fa-solid fa-info-circle text-steel-blue"></i>
                    <span className="text-gray-300">
                      All systems operational. Next assessment: <span className="text-white">Jan 22, 2024</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-envelope text-fire-orange mr-3"></i>
                Intel Briefings
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Get weekly intelligence reports and tactical insights delivered to your secure channel.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Command Email"
                  className="w-full bg-tactical-gray border border-tactical-light rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-fire-orange focus:outline-none"
                />
                <Button className="w-full" size="sm">
                  Subscribe to Intel
                </Button>
              </div>
            </div>

            {/* Tech Stack Arsenal */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-cogs text-tactical-green mr-3"></i>
                Tech Stack Arsenal
              </h3>
              <div className="space-y-4">
                {techStackStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="text-gray-300 text-sm">{stat.name}</div>
                    <div className="text-right">
                      <div className="text-white font-bold">{stat.value}</div>
                      <div className="text-tactical-green text-xs">{stat.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Status */}
            <div className="bg-tactical-dark border border-tactical-light rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4 text-white flex items-center">
                <i className="fa-solid fa-tasks text-steel-blue mr-3"></i>
                Mission Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Active Deployments</span>
                  <span className="text-tactical-green font-bold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Success Rate</span>
                  <span className="text-tactical-green font-bold">98.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Response Time</span>
                  <span className="text-steel-blue font-bold">&lt; 15min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Team Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-tactical-green rounded-full"></div>
                    <span className="text-tactical-green text-sm font-bold">Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Response */}
            <div className="bg-gradient-to-br from-fire-orange/20 to-tactical-dark border border-fire-orange rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-3 text-white flex items-center">
                <i className="fa-solid fa-exclamation-triangle text-fire-orange mr-3"></i>
                Emergency Response
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Critical system issue? Our rapid response team is standing by 24/7.
              </p>
              <Button variant="secondary" size="sm" className="w-full border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-tactical-dark">
                Contact Emergency Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ACFIntelligenceHub