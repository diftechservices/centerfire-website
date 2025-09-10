import React from 'react';

const AIArsenal = () => {
  const aiServices = [
    {
      title: 'Machine Learning Operations',
      subtitle: 'MLOps Infrastructure',
      icon: '🤖',
      color: 'fire',
      description: 'Deploy sophisticated ML pipelines with automated training, validation, and deployment protocols. Our battle-tested infrastructure ensures your AI models perform with unwavering accuracy.',
      features: [
        'Automated Model Training & Validation',
        'Real-time Performance Monitoring', 
        'Scalable Cloud Infrastructure'
      ],
      action: 'Deploy MLOps',
      type: 'primary'
    },
    {
      title: 'Computer Vision Systems',
      subtitle: 'Advanced Visual Intelligence',
      icon: '👁️',
      color: 'steel',
      description: 'Cutting-edge computer vision solutions that process visual data with superhuman precision. From object detection to facial recognition, we deliver surveillance-grade accuracy.',
      features: [
        'Object Detection & Tracking',
        'Facial Recognition Systems',
        'Real-time Video Analysis'
      ],
      action: 'Engage Vision AI',
      type: 'secondary'
    }
  ];

  const customAITags = [
    'Deep Learning',
    'Neural Networks', 
    'Reinforcement Learning',
    'Transfer Learning'
  ];

  return (
    <section className="section bg-dark py-16" id="ai-arsenal">
      <div className="section-content">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gray bg-opacity-80 backdrop-filter backdrop-blur-sm border border-light rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-fire rounded-full animate-pulse"></div>
            <span className="text-fire text-sm font-medium heading-tactical">AI ARSENAL</span>
          </div>
          
          <h2 className="heading-display text-xl text-primary mb-6">
            <span className="block">ARTIFICIAL INTELLIGENCE</span>
            <span className="block text-fire">WEAPONS SYSTEMS</span>
          </h2>
          
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Advanced AI technologies deployed with military precision to dominate your competitive landscape and achieve tactical superiority.
          </p>
        </div>

        <div className="card-grid card-grid-1 gap-8 mb-12">
          <div className="card-grid card-grid-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="tactical-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-${service.color} bg-opacity-20 rounded-lg flex items-center justify-center text-${service.color} text-2xl`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="heading-display text-xl text-primary mb-2">{service.title}</h3>
                    <p className="text-muted text-sm">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-secondary mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tactical-green rounded-full"></div>
                      <span className="text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`btn btn-${service.type} w-full`}>
                  {service.action}
                </button>
              </div>
            ))}
          </div>
          
          {/* Custom AI Development */}
          <div className="tactical-card bg-gradient-to-r from-gray to-light border border-light">
            <div className="text-center">
              <h3 className="heading-display text-2xl text-primary mb-6">Custom AI Development</h3>
              <p className="text-secondary text-lg mb-6">
                Need a specialized AI solution? Our elite development team creates bespoke artificial intelligence 
                systems tailored to your exact specifications and operational requirements.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {customAITags.map((tag, index) => (
                  <span key={index} className="bg-dark px-4 py-2 rounded-full text-sm text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="btn btn-primary text-lg px-8 py-4">
                Request Custom AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIArsenal;