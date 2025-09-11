import HeroSection from '../components/sections/HeroSection'
import MissionControl from '../components/sections/MissionControl'
import AIArsenal from '../components/sections/AIArsenal'
import TechnicalCapabilities from '../components/sections/TechnicalCapabilities'
import MissionPortfolio from '../components/sections/MissionPortfolio'
import IntelligenceHub from '../components/sections/IntelligenceHub'
import TeamSection from '../components/sections/TeamSection'
import ContactSection from '../components/sections/ContactSection'

function DemoPage() {
  return (
    <div>
      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-fire-orange/20 to-tactical-green/20 border-b border-fire-orange/30 py-3">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-300">
            🎯 <strong className="text-fire-orange">DEMO MODE</strong> - Original single-page application preserved for reference
          </p>
        </div>
      </div>
      
      {/* Original Single-Page Content */}
      <HeroSection />
      <MissionControl />
      <AIArsenal />
      <TechnicalCapabilities />
      <MissionPortfolio />
      <IntelligenceHub />
      <TeamSection />
      <ContactSection />
    </div>
  )
}

export default DemoPage