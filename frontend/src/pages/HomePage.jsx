import ACFHeroSection from '../components/acf/ACFHeroSection'
import ACFMissionControl from '../components/acf/ACFMissionControl'
import ACFAIArsenal from '../components/acf/ACFAIArsenal'
import ACFTechnicalCapabilities from '../components/acf/ACFTechnicalCapabilities'
import ACFMissionPortfolio from '../components/acf/ACFMissionPortfolio'
import IntelligenceHub from '../components/sections/IntelligenceHub'
import TeamSection from '../components/sections/TeamSection'
import ContactSection from '../components/sections/ContactSection'

function HomePage() {
  return (
    <div>
      <ACFHeroSection pageSlug="homepage" />
      <ACFMissionControl pageSlug="homepage" />
      <ACFAIArsenal pageSlug="homepage" />
      <ACFTechnicalCapabilities pageSlug="homepage" />
      <ACFMissionPortfolio pageSlug="homepage" />
      <IntelligenceHub />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default HomePage