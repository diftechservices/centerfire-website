import React from 'react';

const OperationsCenter = () => {
  const teamMembers = [
    { name: 'Alex Chen', role: 'Lead Tactician', avatar: '/src/assets/images/team-1.jpg', status: 'online' },
    { name: 'Sarah Mitchell', role: 'Operations Commander', avatar: '/src/assets/images/team-2.jpg', status: 'online' },
    { name: 'Marcus Rodriguez', role: 'Security Specialist', avatar: '/src/assets/images/team-3.jpg', status: 'away' },
    { name: 'Emily Zhang', role: 'Digital Strategist', avatar: '/src/assets/images/team-4.jpg', status: 'online' }
  ];

  const missionStats = [
    { label: 'Active Operations', value: '24', color: 'tactical-green' },
    { label: 'Systems Online', value: '99.9%', color: 'steel' },
    { label: 'Response Time', value: '<2ms', color: 'fire' },
    { label: 'Mission Success', value: '100%', color: 'tactical-green' }
  ];

  const activeProjects = [
    { name: 'Operation Phoenix', progress: 85, status: 'tactical-green' },
    { name: 'Digital Fortress', progress: 92, status: 'tactical-green' },
    { name: 'Storm Protocol', progress: 67, status: 'warning-amber' },
    { name: 'Shadow Network', progress: 43, status: 'steel' }
  ];

  return (
    <section className="section bg-gray py-16">
      <div className="section-content">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-dark bg-opacity-80 backdrop-filter backdrop-blur-sm border border-light rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-steel rounded-full animate-pulse"></div>
            <span className="text-steel text-sm font-medium heading-tactical">MISSION CONTROL ACTIVE</span>
          </div>
          
          <h2 className="heading-display text-xl text-primary mb-6">
            TACTICAL OPERATIONS CENTER
          </h2>
          
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Real-time monitoring and coordination of all digital operations. 
            Our command center ensures mission success through continuous oversight and rapid response capabilities.
          </p>
        </div>

        <div className="card-grid card-grid-1 lg:grid-cols-3 gap-8">
          {/* Main Analytics Panel */}
          <div className="lg:col-span-2">
            <div className="tactical-card">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="heading-tactical text-xl text-primary mb-2">OPERATIONAL ANALYTICS</h3>
                  <p className="text-muted">Real-time system performance and metrics</p>
                </div>
                <div className="status-dot status-online animate-pulse"></div>
              </div>
              
              <div className="card-grid card-grid-2 md:grid-cols-4 gap-6 mb-8">
                {missionStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`heading-display text-2xl text-${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-muted text-sm heading-tactical">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="heading-tactical text-primary mb-4">ACTIVE MISSIONS</h4>
                {activeProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${project.status} rounded-full`}></div>
                      <span className="text-secondary">{project.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-light rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${project.status} rounded-full transition-all duration-300`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-muted text-sm w-12 text-right">{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Panels */}
          <div className="flex flex-col gap-8">
            {/* Team Status */}
            <div className="tactical-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-tactical-green bg-opacity-20 rounded-lg flex items-center justify-center text-tactical-green">
                  👥
                </div>
                <h3 className="heading-tactical text-primary">TEAM STATUS</h3>
              </div>
              
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=1a1a1a&color=ffffff&size=32`;
                      }}
                    />
                    <div className="flex-1">
                      <div className="text-secondary text-sm font-medium">{member.name}</div>
                      <div className="text-muted text-xs">{member.role}</div>
                    </div>
                    <div className={`status-dot status-${member.status === 'online' ? 'online' : 'warning'}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="tactical-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-steel bg-opacity-20 rounded-lg flex items-center justify-center text-steel">
                  ⚡
                </div>
                <h3 className="heading-tactical text-primary">SYSTEM STATUS</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">Primary Server</span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot status-online"></div>
                    <span className="text-tactical-green text-xs">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">Backup Systems</span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot status-online"></div>
                    <span className="text-tactical-green text-xs">READY</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">Security Grid</span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot status-online"></div>
                    <span className="text-tactical-green text-xs">SECURE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">Network Traffic</span>
                  <div className="flex items-center gap-2">
                    <div className="status-dot status-warning"></div>
                    <span className="text-warning-amber text-xs">NOMINAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsCenter;