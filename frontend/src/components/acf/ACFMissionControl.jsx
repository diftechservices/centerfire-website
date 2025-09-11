import { useWordPressPage } from '../../hooks/useWordPress'
import { Badge, Card, StatusIndicator, ProgressBar } from '../ui'

const ACFMissionControl = ({ pageSlug = 'homepage' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <section className="py-20 bg-tactical-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fire-orange mb-4"></div>
          <p className="text-gray-300">Loading Mission Control section...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    return <FallbackMissionControl />
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    // Mission Control Header
    mission_control_title_line1 = 'OPERATIONAL',
    mission_control_title_line2 = 'COMMAND CENTER',
    mission_control_description = 'Real-time intelligence on our tactical capabilities and deployment readiness across all operational theaters'
  } = acf

  // Static data for the three panels (unchanged as requested)
  const stats = [
    { value: '247', label: 'Active Deployments', color: 'text-fire-orange' },
    { value: '98.7%', label: 'Mission Success', color: 'text-steel-blue' },
    { value: '156', label: 'AI Models Deployed', color: 'text-tactical-green' },
    { value: '24/7', label: 'Ops Support', color: 'text-warning-amber' }
  ]

  const progressBars = [
    { label: 'AI Processing Power', value: 94, color: 'bg-gradient-to-r from-tactical-green to-steel-blue' },
    { label: 'Security Protocols', value: 100, color: 'bg-fire-orange' },
    { label: 'Client Satisfaction', value: 97, color: 'bg-steel-blue' }
  ]

  const threatAssessment = [
    { label: 'Cyber Threats', status: 'Minimal', color: 'text-tactical-green' },
    { label: 'System Integrity', status: 'Secure', color: 'text-tactical-green' },
    { label: 'Data Protection', status: 'Maximum', color: 'text-tactical-green' }
  ]

  const activeOperations = [
    { label: 'AI Model Training', color: 'bg-fire-orange' },
    { label: 'Security Audit', color: 'bg-steel-blue' },
    { label: 'System Deployment', color: 'bg-tactical-green' }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        {/* Section Header - ACF Dynamic */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite-dish text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION CONTROL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{mission_control_title_line1}</span>
            <span className="text-fire-orange"> {mission_control_title_line2}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {mission_control_description}
          </p>
        </div>

        {/* Main Content Grid - Static as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Analytics Panel - 2/3 width */}
          <div className="lg:col-span-2">
            <Card variant="dark" className="p-8">
              {/* Analytics Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display font-bold text-2xl text-white">System Analytics</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <StatusIndicator status="operational" size="default" />
                    <span className="text-sm text-gray-300">Live Feed</span>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-expand"></i>
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-display font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {progressBars.map((bar, index) => (
                  <ProgressBar
                    key={index}
                    label={bar.label}
                    value={bar.value}
                    color={bar.color}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - 1/3 width (Command Team panel removed) */}
          <div className="space-y-8">
            {/* Threat Assessment */}
            <Card variant="dark" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-white">Threat Assessment</h4>
                <StatusIndicator status="operational" size="default" />
              </div>
              <div className="space-y-3">
                {threatAssessment.map((threat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{threat.label}</span>
                    <span className={`text-sm ${threat.color}`}>{threat.status}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Active Operations */}
            <Card variant="dark" className="p-6">
              <h4 className="font-display font-bold mb-4 text-white">Active Operations</h4>
              <div className="space-y-3">
                {activeOperations.map((operation, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${operation.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm text-gray-300">{operation.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Fallback component when WordPress isn't connected
const FallbackMissionControl = () => {
  const stats = [
    { value: '247', label: 'Active Deployments', color: 'text-fire-orange' },
    { value: '98.7%', label: 'Mission Success', color: 'text-steel-blue' },
    { value: '156', label: 'AI Models Deployed', color: 'text-tactical-green' },
    { value: '24/7', label: 'Ops Support', color: 'text-warning-amber' }
  ]

  const progressBars = [
    { label: 'AI Processing Power', value: 94, color: 'bg-gradient-to-r from-tactical-green to-steel-blue' },
    { label: 'Security Protocols', value: 100, color: 'bg-fire-orange' },
    { label: 'Client Satisfaction', value: 97, color: 'bg-steel-blue' }
  ]

  const threatAssessment = [
    { label: 'Cyber Threats', status: 'Minimal', color: 'text-tactical-green' },
    { label: 'System Integrity', status: 'Secure', color: 'text-tactical-green' },
    { label: 'Data Protection', status: 'Maximum', color: 'text-tactical-green' }
  ]

  const activeOperations = [
    { label: 'AI Model Training', color: 'bg-fire-orange' },
    { label: 'Security Audit', color: 'bg-steel-blue' },
    { label: 'System Deployment', color: 'bg-tactical-green' }
  ]

  return (
    <section className="py-20 bg-tactical-gray">
      <div className="container mx-auto px-6">
        <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-yellow-400 text-center text-sm">
            <i className="fa-solid fa-exclamation-triangle mr-2"></i>
            Using fallback Mission Control content - WordPress not connected
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-dark rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-satellite-dish text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">MISSION CONTROL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">OPERATIONAL</span>
            <span className="text-fire-orange"> COMMAND CENTER</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time intelligence on our tactical capabilities and deployment readiness across all operational theaters
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Analytics Panel - 2/3 width */}
          <div className="lg:col-span-2">
            <Card variant="dark" className="p-8">
              {/* Analytics Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display font-bold text-2xl text-white">System Analytics</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <StatusIndicator status="operational" size="default" />
                    <span className="text-sm text-gray-300">Live Feed</span>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-expand"></i>
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-display font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {progressBars.map((bar, index) => (
                  <ProgressBar
                    key={index}
                    label={bar.label}
                    value={bar.value}
                    color={bar.color}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - 1/3 width (Command Team panel removed) */}
          <div className="space-y-8">
            {/* Threat Assessment */}
            <Card variant="dark" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-white">Threat Assessment</h4>
                <StatusIndicator status="operational" size="default" />
              </div>
              <div className="space-y-3">
                {threatAssessment.map((threat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{threat.label}</span>
                    <span className={`text-sm ${threat.color}`}>{threat.status}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Active Operations */}
            <Card variant="dark" className="p-6">
              <h4 className="font-display font-bold mb-4 text-white">Active Operations</h4>
              <div className="space-y-3">
                {activeOperations.map((operation, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${operation.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm text-gray-300">{operation.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ACFMissionControl