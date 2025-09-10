import './index.css'
import Header from './components/sections/Header'
import { Button, Badge, Card, StatusIndicator } from './components/ui'

function App() {
  return (
    <div className="bg-tactical-dark text-white min-h-screen">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto p-8">
            <h1 className="font-display text-6xl font-black mb-4">
              <span className="text-fire-orange">CENTER</span>
              <span className="text-white">FIRE</span>
            </h1>
            <p className="font-tactical text-xl text-steel-blue mb-8">DIGITAL OPERATIONS</p>
            
            {/* Button Component Tests */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center mb-8">
              <Button>
                <i className="fa-solid fa-rocket mr-2"></i>
                Primary Button
              </Button>
              <Button variant="secondary">
                Secondary Button
              </Button>
              <Button variant="outline" size="sm">
                Outline Small
              </Button>
              <Button variant="ghost" size="lg">
                Ghost Large
              </Button>
            </div>

            {/* Badge Component Tests */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info" size="lg">Info Large</Badge>
            </div>

            {/* Card Component Test */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <Card.Header>
                  <h3 className="font-tactical text-lg text-steel-blue">SYSTEM STATUS</h3>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-300">All systems operational and ready for deployment.</p>
                </Card.Content>
              </Card>
              
              <Card variant="transparent">
                <Card.Header>
                  <h3 className="font-tactical text-lg text-fire-orange">MISSION CONTROL</h3>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-300">Real-time tactical operations monitoring.</p>
                </Card.Content>
              </Card>
            </div>

            {/* Status Indicator Tests */}
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <StatusIndicator status="operational" showText />
              <StatusIndicator status="warning" size="lg" />
              <StatusIndicator status="critical" />
              <StatusIndicator status="offline" size="sm" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App