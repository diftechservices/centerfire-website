import ACFHeroSection from '../components/acf/ACFHeroSection'
import ACFMissionControl from '../components/acf/ACFMissionControl'
import ACFAIArsenal from '../components/acf/ACFAIArsenal'
import TechnicalCapabilities from '../components/sections/TechnicalCapabilities'
import MissionPortfolio from '../components/sections/MissionPortfolio'
import IntelligenceHub from '../components/sections/IntelligenceHub'
import TeamSection from '../components/sections/TeamSection'
import ContactSection from '../components/sections/ContactSection'

function HomePage() {
  return (
    <div>
      <ACFHeroSection pageSlug="homepage" />
      <ACFMissionControl pageSlug="homepage" />
      <ACFAIArsenal pageSlug="homepage" />
      <TechnicalCapabilities />
      <MissionPortfolio />
      <IntelligenceHub />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default HomePage