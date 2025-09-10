import './index.css'
import Header from './components/sections/Header'
import HeroSection from './components/sections/HeroSection'
import MissionControl from './components/sections/MissionControl'
import AIArsenal from './components/sections/AIArsenal'
import TechnicalCapabilities from './components/sections/TechnicalCapabilities'
import MissionPortfolio from './components/sections/MissionPortfolio'
import IntelligenceHub from './components/sections/IntelligenceHub'
import TeamSection from './components/sections/TeamSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="bg-tactical-dark text-white min-h-screen">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        <HeroSection />
        <MissionControl />
        <AIArsenal />
        <TechnicalCapabilities />
        <MissionPortfolio />
        <IntelligenceHub />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App