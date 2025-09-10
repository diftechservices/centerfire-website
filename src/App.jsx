import './index.css'
import Header from './components/sections/Header'
import HeroSection from './components/sections/HeroSection'
import MissionControl from './components/sections/MissionControl'
import AIArsenal from './components/sections/AIArsenal'
import TechnicalCapabilities from './components/sections/TechnicalCapabilities'
import MissionPortfolio from './components/sections/MissionPortfolio'

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
      </main>
    </div>
  )
}

export default App