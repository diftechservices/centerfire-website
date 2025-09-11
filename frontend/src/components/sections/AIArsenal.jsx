import { Button, Badge } from '../ui'

const AIArsenal = () => {
  const aiServices = [
    {
      icon: 'fa-solid fa-robot',
      iconColor: 'text-fire-orange',
      iconBg: 'bg-fire-orange/20',
      title: 'Machine Learning Operations',
      subtitle: 'MLOps Infrastructure',
      description: 'Deploy sophisticated ML pipelines with automated training, validation, and deployment protocols. Our battle-tested infrastructure ensures your AI models perform with unwavering accuracy.',
      features: [
        'Automated Model Training & Validation',
        'Real-time Performance Monitoring',
        'Scalable Cloud Infrastructure'
      ],
      buttonText: 'Deploy MLOps',
      buttonVariant: 'primary'
    },
    {
      icon: 'fa-solid fa-eye',
      iconColor: 'text-steel-blue',
      iconBg: 'bg-steel-blue/20',
      title: 'Computer Vision Systems',
      subtitle: 'Advanced Visual Intelligence',
      description: 'Cutting-edge computer vision solutions that process visual data with superhuman precision. From object detection to facial recognition, we deliver surveillance-grade accuracy.',
      features: [
        'Object Detection & Tracking',
        'Facial Recognition Systems',
        'Real-time Video Analysis'
      ],
      buttonText: 'Engage Vision AI',
      buttonVariant: 'secondary'
    },
    {
      icon: 'fa-solid fa-comments',
      iconColor: 'text-tactical-green',
      iconBg: 'bg-tactical-green/20',
      title: 'Natural Language Processing',
      subtitle: 'Linguistic Warfare Systems',
      description: 'Advanced NLP systems that understand, analyze, and generate human language with tactical precision. Deploy AI that communicates with the sophistication of a seasoned operator.',
      features: [
        'Sentiment Analysis & Classification',
        'Automated Content Generation',
        'Multi-language Support'
      ],
      buttonText: 'Launch NLP Systems',
      buttonVariant: 'primary',
      buttonClass: 'bg-tactical-green hover:bg-tactical-green/90 text-tactical-dark'
    },
    {
      icon: 'fa-solid fa-chart-line',
      iconColor: 'text-warning-amber',
      iconBg: 'bg-warning-amber/20',
      title: 'Predictive Analytics',
      subtitle: 'Strategic Forecasting',
      description: 'Military-grade predictive models that forecast market movements, customer behavior, and operational risks with the accuracy of a sniper\'s scope.',
      features: [
        'Market Trend Forecasting',
        'Risk Assessment Models',
        'Customer Behavior Prediction'
      ],
      buttonText: 'Deploy Analytics',
      buttonVariant: 'outline',
      buttonClass: 'border-2 border-warning-amber text-warning-amber hover:bg-warning-amber hover:text-tactical-dark'
    }
  ]

  const customAITags = [
    'Deep Learning',
    'Neural Networks', 
    'Reinforcement Learning',
    'Transfer Learning'
  ]

  return (
    <section className="py-20 bg-tactical-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-tactical-gray rounded-full px-6 py-3 mb-6">
            <i className="fa-solid fa-brain text-fire-orange"></i>
            <span className="font-display text-sm tracking-wider text-white">AI ARSENAL</span>
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl mb-6">
            <span className="text-white">ARTIFICIAL INTELLIGENCE</span><br />
            <span className="text-fire-orange">WEAPONS SYSTEMS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced AI technologies deployed with military precision to dominate your competitive landscape and achieve tactical superiority
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-tactical-gray border border-tactical-light rounded-xl p-8">
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                  <i className={`${service.icon} ${service.iconColor} text-2xl`}></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check-circle text-tactical-green"></i>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {service.buttonClass ? (
                <button className={`${service.buttonClass} px-6 py-3 rounded-lg font-semibold transition-all`}>
                  {service.buttonText}
                </button>
              ) : (
                <Button variant={service.buttonVariant}>
                  {service.buttonText}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Custom AI Development CTA */}
        <div className="bg-gradient-to-r from-tactical-gray to-tactical-light border border-tactical-light rounded-xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h3 className="font-display font-bold text-3xl mb-4 text-white">Custom AI Development</h3>
              <p className="text-gray-300 text-lg mb-4">
                Need a specialized AI solution? Our elite development team creates bespoke artificial intelligence 
                systems tailored to your exact specifications and operational requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {customAITags.map((tag, index) => (
                  <Badge key={index} variant="default" className="bg-tactical-dark">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 text-center lg:text-right">
              <Button size="lg">
                Request Custom AI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIArsenal