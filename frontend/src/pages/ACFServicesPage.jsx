import ACFServicesSection from '../components/acf/ACFServicesSection'
import ACFTeamSection from '../components/acf/ACFTeamSection'
import FlexibleContentBuilder from '../components/acf/FlexibleContentBuilder'

function ACFServicesPage() {
  return (
    <div>
      {/* Option 1: Use individual ACF components */}
      <ACFServicesSection pageSlug="services" />
      
      {/* Option 2: Use flexible content builder */}
      {/* <FlexibleContentBuilder pageSlug="services-flexible" /> */}
      
      {/* You can mix and match */}
      <ACFTeamSection pageSlug="team" />
    </div>
  )
}

export default ACFServicesPage