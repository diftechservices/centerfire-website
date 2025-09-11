import Services from '../components/legacy/Services'

function ServicesPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div className="section-container">
          <h1 className="page-title">Our Capabilities</h1>
          <p className="page-subtitle">
            AI-enhanced solutions for industries that build America
          </p>
        </div>
      </section>
      
      <Services />
      
      <section className="use-cases">
        <div className="section-container">
          <h2 className="section-title">Industry Expertise</h2>
          
          <div className="industry-grid">
            <div className="industry-card">
              <h3>Firearms & Defense</h3>
              <ul>
                <li>Inventory management with AI demand forecasting</li>
                <li>Compliance tracking and reporting automation</li>
                <li>Custom e-commerce with FFL integration</li>
                <li>Manufacturing workflow optimization</li>
              </ul>
            </div>
            
            <div className="industry-card">
              <h3>Manufacturing</h3>
              <ul>
                <li>IoT-enabled production monitoring</li>
                <li>Predictive maintenance systems</li>
                <li>Supply chain optimization</li>
                <li>Quality control automation</li>
              </ul>
            </div>
            
            <div className="industry-card">
              <h3>Agriculture</h3>
              <ul>
                <li>Precision farming data platforms</li>
                <li>Crop yield prediction models</li>
                <li>Equipment management systems</li>
                <li>Market analysis and pricing tools</li>
              </ul>
            </div>
            
            <div className="industry-card">
              <h3>Energy</h3>
              <ul>
                <li>Grid monitoring and optimization</li>
                <li>Resource extraction planning</li>
                <li>Safety compliance systems</li>
                <li>Environmental impact tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="technology-stack">
        <div className="section-container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h4>AI & Machine Learning</h4>
              <p>TensorFlow, PyTorch, Scikit-learn, Custom neural networks</p>
            </div>
            <div className="tech-category">
              <h4>Backend Development</h4>
              <p>Node.js, Python, .NET Core, PostgreSQL, MongoDB</p>
            </div>
            <div className="tech-category">
              <h4>Frontend Development</h4>
              <p>React, Vue.js, TypeScript, Progressive Web Apps</p>
            </div>
            <div className="tech-category">
              <h4>Infrastructure</h4>
              <p>AWS, Azure, Docker, Kubernetes, CI/CD pipelines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage