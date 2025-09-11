import { useWordPressPage } from '../../hooks/useWordPress'
import { Badge } from '../ui'

const ACFTeamSection = ({ pageSlug = 'team' }) => {
  const { content, loading, error } = useWordPressPage(pageSlug)

  if (loading) {
    return (
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-tactical-green"></div>
          <p className="text-gray-300 mt-4">Loading team...</p>
        </div>
      </section>
    )
  }

  if (error || !content) {
    // Fallback to your existing TeamSection component
    return (
      <section className="py-20 bg-tactical-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-yellow-400">Using fallback content - WordPress not connected</p>
          </div>
        </div>
      </section>
    )
  }

  // Extract ACF data
  const acf = content.acf || {}
  const {
    section_title = 'Our Team',
    section_subtitle = 'Meet the tactical experts behind your digital success',
    team_members = [],
    show_stats = true,
    company_stats = []
  } = acf

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-users text-tactical-green"></i>
            <span className="font-display text-sm tracking-wider text-white">TACTICAL TEAM</span>
          </div>
          
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">{section_title}</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {section_subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team_members.map((member, index) => (
            <div key={index} className="bg-tactical-gray border border-tactical-light rounded-xl p-8 text-center group hover:border-tactical-green transition-colors">
              {/* Member Photo */}
              <div className="w-24 h-24 bg-tactical-light rounded-full mx-auto mb-6 overflow-hidden group-hover:ring-4 group-hover:ring-tactical-green/30 transition-all">
                {member.photo ? (
                  <img 
                    src={member.photo.url || member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-tactical-green/20">
                    <i className="fa-solid fa-user text-tactical-green text-2xl"></i>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {member.name || 'Team Member'}
              </h3>
              
              <p className="text-tactical-green font-semibold mb-4">
                {member.title || member.position || 'Team Member'}
              </p>

              {/* Bio */}
              {member.bio && (
                <p className="text-gray-300 text-sm mb-6">
                  {member.bio}
                </p>
              )}

              {/* Skills/Specialties */}
              {member.skills && member.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-tactical-green/20 text-tactical-green"
                    >
                      {skill.skill_name || skill}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Years of Experience */}
              {member.years_experience && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-tactical-green">
                    {member.years_experience}+
                  </span>
                  <span className="text-gray-400 block text-sm">
                    Years Experience
                  </span>
                </div>
              )}

              {/* Social Links */}
              {member.social_links && (
                <div className="flex justify-center space-x-4">
                  {member.social_links.linkedin && (
                    <a 
                      href={member.social_links.linkedin}
                      className="text-gray-400 hover:text-tactical-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                  )}
                  {member.social_links.github && (
                    <a 
                      href={member.social_links.github}
                      className="text-gray-400 hover:text-tactical-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                  )}
                  {member.social_links.twitter && (
                    <a 
                      href={member.social_links.twitter}
                      className="text-gray-400 hover:text-tactical-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Company Stats */}
        {show_stats && company_stats && company_stats.length > 0 && (
          <div className="bg-tactical-gray border border-tactical-light rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {company_stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold text-tactical-green mb-2">
                    {stat.number}{stat.suffix || ''}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ACFTeamSection