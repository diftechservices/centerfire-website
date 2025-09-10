export const aiServices = {
  mlops: {
    id: 'mlops',
    category: 'AI SOLUTIONS',
    titlePrimary: 'MACHINE LEARNING',
    titleSecondary: 'OPERATIONS',
    subtitle: 'Deploy, monitor, and scale AI models with precision-engineered MLOps infrastructure that ensures maximum performance and reliability.',
    primaryColor: 'fire-orange',
    icon: 'fa-solid fa-brain',
    overview: 'Our MLOps platform transforms your AI initiatives from experimental prototypes into production-ready, scalable solutions. We build comprehensive pipelines that automate model training, deployment, monitoring, and maintenance while ensuring enterprise-grade security and compliance.',
    benefits: [
      {
        title: 'Automated Pipelines',
        description: 'End-to-end automation from data ingestion to model deployment',
        icon: 'fa-solid fa-robot'
      },
      {
        title: 'Real-time Monitoring',
        description: 'Continuous performance tracking and automated alerting',
        icon: 'fa-solid fa-chart-line'
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Cloud-native architecture that scales with demand',
        icon: 'fa-solid fa-expand-arrows-alt'
      },
      {
        title: 'Model Governance',
        description: 'Version control, compliance, and audit trails',
        icon: 'fa-solid fa-shield-alt'
      }
    ],
    stats: [
      { label: 'Deployment Speed', value: '10x' },
      { label: 'Model Accuracy', value: '99.2%' },
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Cost Reduction', value: '45%' }
    ],
    specifications: [
      {
        category: 'Platforms & Frameworks',
        items: [
          'TensorFlow, PyTorch, Scikit-learn',
          'Kubernetes, Docker containers',
          'Apache Airflow, MLflow',
          'Kubeflow, Amazon SageMaker'
        ]
      },
      {
        category: 'Cloud Infrastructure',
        items: [
          'AWS, Azure, Google Cloud',
          'Auto-scaling compute clusters',
          'GPU-optimized instances',
          'Multi-region deployment'
        ]
      },
      {
        category: 'Monitoring & Security',
        items: [
          'Model drift detection',
          'Performance analytics',
          'Encrypted data pipelines',
          'RBAC and audit logging'
        ]
      }
    ],
    process: [
      {
        title: 'Assessment & Planning',
        description: 'Analyze existing ML workflows and define optimal MLOps architecture for your specific requirements.'
      },
      {
        title: 'Pipeline Development',
        description: 'Build automated CI/CD pipelines for model training, validation, and deployment with proper testing frameworks.'
      },
      {
        title: 'Infrastructure Setup',
        description: 'Deploy scalable cloud infrastructure with monitoring, logging, and security controls in place.'
      },
      {
        title: 'Model Deployment',
        description: 'Seamlessly deploy models to production with automated rollback capabilities and A/B testing.'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring of model performance with automated retraining and optimization workflows.'
      }
    ]
  },
  
  computerVision: {
    id: 'computer-vision',
    category: 'AI SOLUTIONS',
    titlePrimary: 'COMPUTER VISION',
    titleSecondary: 'SYSTEMS',
    subtitle: 'Advanced visual intelligence solutions that process, analyze, and interpret visual data with precision comparable to human experts.',
    primaryColor: 'steel-blue',
    icon: 'fa-solid fa-eye',
    overview: 'Our computer vision systems leverage cutting-edge deep learning algorithms to extract meaningful insights from images and video streams. From real-time object detection to medical image analysis, we deliver solutions that see, understand, and act with superhuman accuracy.',
    benefits: [
      {
        title: 'Real-time Processing',
        description: 'Sub-second analysis of high-resolution images and video streams',
        icon: 'fa-solid fa-bolt'
      },
      {
        title: 'High Accuracy',
        description: 'State-of-the-art models with 99%+ accuracy rates',
        icon: 'fa-solid fa-bullseye'
      },
      {
        title: 'Custom Models',
        description: 'Domain-specific models trained on your unique datasets',
        icon: 'fa-solid fa-cog'
      },
      {
        title: 'Edge Deployment',
        description: 'Optimized models for edge devices and mobile platforms',
        icon: 'fa-solid fa-mobile-alt'
      }
    ],
    stats: [
      { label: 'Processing Speed', value: '<100ms' },
      { label: 'Accuracy Rate', value: '99.1%' },
      { label: 'Models Deployed', value: '500+' },
      { label: 'Industries Served', value: '12' }
    ],
    specifications: [
      {
        category: 'AI Frameworks',
        items: [
          'YOLOv8, R-CNN, U-Net',
          'OpenCV, TensorFlow Vision',
          'PyTorch Vision, Detectron2',
          'Custom CNN architectures'
        ]
      },
      {
        category: 'Deployment Options',
        items: [
          'Cloud APIs (REST/GraphQL)',
          'Edge devices (NVIDIA Jetson)',
          'Mobile SDKs (iOS/Android)',
          'On-premise GPU clusters'
        ]
      },
      {
        category: 'Use Cases',
        items: [
          'Object detection & tracking',
          'Medical image analysis',
          'Quality control inspection',
          'Facial recognition & biometrics'
        ]
      }
    ],
    process: [
      {
        title: 'Data Collection & Annotation',
        description: 'Gather and annotate high-quality training datasets specific to your use case and domain requirements.'
      },
      {
        title: 'Model Architecture Design',
        description: 'Design custom neural network architectures optimized for your specific computer vision tasks.'
      },
      {
        title: 'Training & Optimization',
        description: 'Train models using advanced techniques like transfer learning, data augmentation, and hyperparameter tuning.'
      },
      {
        title: 'Validation & Testing',
        description: 'Rigorous testing across diverse scenarios to ensure robust performance in real-world conditions.'
      },
      {
        title: 'Deployment & Integration',
        description: 'Deploy optimized models to your preferred platform with seamless integration into existing systems.'
      }
    ]
  },

  nlp: {
    id: 'nlp',
    category: 'AI SOLUTIONS',
    titlePrimary: 'NATURAL LANGUAGE',
    titleSecondary: 'PROCESSING',
    subtitle: 'Transform unstructured text data into actionable insights with advanced NLP systems that understand context, sentiment, and intent.',
    primaryColor: 'tactical-green',
    icon: 'fa-solid fa-comments',
    overview: 'Our NLP solutions leverage transformer-based architectures and large language models to build intelligent systems that can understand, process, and generate human language at scale. From chatbots to document analysis, we create systems that communicate naturally.',
    benefits: [
      {
        title: 'Language Understanding',
        description: 'Deep comprehension of context, sentiment, and semantic meaning',
        icon: 'fa-solid fa-brain'
      },
      {
        title: 'Multi-language Support',
        description: 'Process text in 100+ languages with high accuracy',
        icon: 'fa-solid fa-globe'
      },
      {
        title: 'Real-time Processing',
        description: 'Instant analysis of text streams and conversational data',
        icon: 'fa-solid fa-clock'
      },
      {
        title: 'Custom Domains',
        description: 'Fine-tuned models for industry-specific terminology',
        icon: 'fa-solid fa-industry'
      }
    ],
    stats: [
      { label: 'Languages Supported', value: '100+' },
      { label: 'Processing Speed', value: '1M docs/hr' },
      { label: 'Accuracy Rate', value: '96.8%' },
      { label: 'Response Time', value: '<50ms' }
    ],
    specifications: [
      {
        category: 'NLP Models',
        items: [
          'BERT, GPT, T5 transformers',
          'Custom domain-specific models',
          'Multilingual embeddings',
          'Fine-tuned language models'
        ]
      },
      {
        category: 'Applications',
        items: [
          'Chatbots & virtual assistants',
          'Document classification',
          'Sentiment analysis',
          'Named entity recognition'
        ]
      },
      {
        category: 'Integration',
        items: [
          'REST/GraphQL APIs',
          'Webhook integrations',
          'Slack/Teams bot frameworks',
          'CRM system connectors'
        ]
      }
    ],
    process: [
      {
        title: 'Data Preparation',
        description: 'Clean, preprocess, and structure your text data for optimal model training and performance.'
      },
      {
        title: 'Model Selection',
        description: 'Choose the optimal pre-trained models and fine-tuning strategies for your specific use case.'
      },
      {
        title: 'Training & Fine-tuning',
        description: 'Adapt models to your domain with custom training data and specialized optimization techniques.'
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize models for speed and accuracy while maintaining quality and reducing computational costs.'
      },
      {
        title: 'Production Deployment',
        description: 'Deploy scalable NLP services with monitoring, A/B testing, and continuous improvement workflows.'
      }
    ]
  },

  predictiveAnalytics: {
    id: 'predictive-analytics',
    category: 'AI SOLUTIONS',
    titlePrimary: 'PREDICTIVE',
    titleSecondary: 'ANALYTICS',
    subtitle: 'Leverage advanced statistical models and machine learning algorithms to forecast trends, predict outcomes, and optimize business decisions.',
    primaryColor: 'warning-amber',
    icon: 'fa-solid fa-chart-area',
    overview: 'Our predictive analytics platform combines traditional statistical methods with modern machine learning to deliver accurate forecasts and actionable insights. We help organizations anticipate market changes, optimize operations, and make data-driven decisions with confidence.',
    benefits: [
      {
        title: 'Accurate Forecasting',
        description: 'Precision predictions with confidence intervals and uncertainty quantification',
        icon: 'fa-solid fa-target'
      },
      {
        title: 'Real-time Insights',
        description: 'Live dashboards with continuously updated predictions and alerts',
        icon: 'fa-solid fa-tachometer-alt'
      },
      {
        title: 'Automated Modeling',
        description: 'Self-updating models that adapt to changing patterns',
        icon: 'fa-solid fa-magic'
      },
      {
        title: 'Business Integration',
        description: 'Seamless integration with existing business intelligence tools',
        icon: 'fa-solid fa-link'
      }
    ],
    stats: [
      { label: 'Prediction Accuracy', value: '94.5%' },
      { label: 'Models in Production', value: '250+' },
      { label: 'Data Points Processed', value: '1B+' },
      { label: 'ROI Improvement', value: '340%' }
    ],
    specifications: [
      {
        category: 'Algorithms',
        items: [
          'Time series forecasting (ARIMA, Prophet)',
          'Ensemble methods (XGBoost, Random Forest)',
          'Deep learning (LSTM, GRU)',
          'Bayesian optimization'
        ]
      },
      {
        category: 'Data Sources',
        items: [
          'Structured databases (SQL)',
          'Time series data streams',
          'External market data feeds',
          'IoT sensor networks'
        ]
      },
      {
        category: 'Deployment',
        items: [
          'Cloud-native architecture',
          'Real-time streaming pipelines',
          'Interactive dashboards',
          'API-first design'
        ]
      }
    ],
    process: [
      {
        title: 'Data Discovery',
        description: 'Identify and assess available data sources, quality, and predictive potential for your use case.'
      },
      {
        title: 'Feature Engineering',
        description: 'Create meaningful features and transformations that capture patterns in your data.'
      },
      {
        title: 'Model Development',
        description: 'Build and validate multiple models using cross-validation and backtesting methodologies.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Continuous monitoring of model performance with automated retraining and drift detection.'
      },
      {
        title: 'Business Integration',
        description: 'Integrate predictions into business workflows with actionable alerts and decision support.'
      }
    ]
  }
}

export const technicalServices = {
  cloudInfrastructure: {
    id: 'cloud-infrastructure',
    category: 'TECHNICAL CAPABILITIES',
    titlePrimary: 'CLOUD',
    titleSecondary: 'INFRASTRUCTURE',
    subtitle: 'Enterprise-grade cloud solutions built for scale, security, and performance across AWS, Azure, and Google Cloud platforms.',
    primaryColor: 'steel-blue',
    icon: 'fa-solid fa-cloud',
    overview: 'Our cloud infrastructure services provide the foundation for modern, scalable applications. We design and implement robust, secure, and cost-effective cloud architectures that grow with your business while maintaining optimal performance and compliance.',
    benefits: [
      {
        title: 'Auto-scaling',
        description: 'Dynamically adjust resources based on demand patterns',
        icon: 'fa-solid fa-expand-arrows-alt'
      },
      {
        title: 'High Availability',
        description: '99.99% uptime with multi-region disaster recovery',
        icon: 'fa-solid fa-shield-alt'
      },
      {
        title: 'Cost Optimization',
        description: 'Intelligent resource management reducing costs by 40%',
        icon: 'fa-solid fa-dollar-sign'
      },
      {
        title: 'Security First',
        description: 'Zero-trust architecture with encryption at all levels',
        icon: 'fa-solid fa-lock'
      }
    ],
    stats: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Deployment Speed', value: '75%' },
      { label: 'Security Score', value: 'A+' }
    ]
  },

  mobileApplications: {
    id: 'mobile-applications',
    category: 'TECHNICAL CAPABILITIES',
    titlePrimary: 'MOBILE',
    titleSecondary: 'APPLICATIONS',
    subtitle: 'Native and cross-platform mobile solutions engineered for performance, security, and exceptional user experiences.',
    primaryColor: 'fire-orange',
    icon: 'fa-solid fa-mobile-alt',
    overview: 'We build mobile applications that users love and businesses depend on. Our mobile development expertise spans native iOS and Android development as well as cross-platform solutions using React Native and Flutter.',
    benefits: [
      {
        title: 'Cross-platform',
        description: 'Single codebase deployment to iOS and Android',
        icon: 'fa-solid fa-sync'
      },
      {
        title: 'Native Performance',
        description: 'Optimized for speed and platform-specific features',
        icon: 'fa-solid fa-rocket'
      },
      {
        title: 'Offline Capability',
        description: 'Full functionality without internet connectivity',
        icon: 'fa-solid fa-wifi'
      },
      {
        title: 'Push Notifications',
        description: 'Real-time engagement with intelligent targeting',
        icon: 'fa-solid fa-bell'
      }
    ],
    stats: [
      { label: 'App Store Rating', value: '4.8/5' },
      { label: 'Load Time', value: '<2s' },
      { label: 'Crash Rate', value: '<0.1%' },
      { label: 'User Retention', value: '85%' }
    ]
  },

  webDevelopment: {
    id: 'web-development',
    category: 'TECHNICAL CAPABILITIES',
    titlePrimary: 'WEB',
    titleSecondary: 'DEVELOPMENT',
    subtitle: 'Modern web applications built with cutting-edge technologies for optimal performance, scalability, and user experience.',
    primaryColor: 'tactical-green',
    icon: 'fa-solid fa-code',
    overview: 'Our web development services combine modern frameworks, best practices, and performance optimization to create web applications that deliver exceptional user experiences while maintaining security and scalability.',
    benefits: [
      {
        title: 'Modern Frameworks',
        description: 'React, Vue, Angular with server-side rendering',
        icon: 'fa-solid fa-layer-group'
      },
      {
        title: 'Performance Optimized',
        description: 'Sub-second load times with PWA capabilities',
        icon: 'fa-solid fa-tachometer-alt'
      },
      {
        title: 'Responsive Design',
        description: 'Perfect experience across all devices and screen sizes',
        icon: 'fa-solid fa-mobile-alt'
      },
      {
        title: 'SEO Optimized',
        description: 'Search engine friendly with advanced meta optimization',
        icon: 'fa-solid fa-search'
      }
    ],
    stats: [
      { label: 'Page Speed Score', value: '98/100' },
      { label: 'SEO Score', value: '95/100' },
      { label: 'Accessibility', value: 'AAA' },
      { label: 'Conversion Rate', value: '+125%' }
    ]
  },

  cybersecurity: {
    id: 'cybersecurity',
    category: 'TECHNICAL CAPABILITIES',
    titlePrimary: 'CYBERSECURITY',
    titleSecondary: 'OPERATIONS',
    subtitle: 'Comprehensive security solutions protecting your digital assets with advanced threat detection and prevention systems.',
    primaryColor: 'warning-amber',
    icon: 'fa-solid fa-shield-virus',
    overview: 'Our cybersecurity services provide multi-layered protection against evolving threats. We implement zero-trust architectures, advanced threat detection, and incident response capabilities to safeguard your organization.',
    benefits: [
      {
        title: 'Threat Detection',
        description: 'AI-powered threat hunting and behavioral analysis',
        icon: 'fa-solid fa-search'
      },
      {
        title: 'Zero Trust',
        description: 'Never trust, always verify security architecture',
        icon: 'fa-solid fa-user-shield'
      },
      {
        title: '24/7 Monitoring',
        description: 'Continuous security operations center oversight',
        icon: 'fa-solid fa-eye'
      },
      {
        title: 'Compliance',
        description: 'SOC 2, HIPAA, PCI DSS compliance frameworks',
        icon: 'fa-solid fa-certificate'
      }
    ],
    stats: [
      { label: 'Threats Blocked', value: '99.9%' },
      { label: 'Response Time', value: '<15min' },
      { label: 'Zero Breaches', value: '36mo' },
      { label: 'Compliance Score', value: '100%' }
    ]
  },

  dataEngineering: {
    id: 'data-engineering',
    category: 'TECHNICAL CAPABILITIES',
    titlePrimary: 'DATA',
    titleSecondary: 'ENGINEERING',
    subtitle: 'Scalable data pipelines and analytics infrastructure that transform raw data into actionable business intelligence.',
    primaryColor: 'purple-500',
    icon: 'fa-solid fa-database',
    overview: 'Our data engineering services build the foundation for data-driven decision making. We create robust pipelines that collect, process, and analyze data at scale while ensuring quality, security, and compliance.',
    benefits: [
      {
        title: 'Real-time Processing',
        description: 'Stream processing for immediate insights and actions',
        icon: 'fa-solid fa-stream'
      },
      {
        title: 'Data Quality',
        description: 'Automated validation and cleansing workflows',
        icon: 'fa-solid fa-check-circle'
      },
      {
        title: 'Scalable Architecture',
        description: 'Handle petabytes of data with elastic scaling',
        icon: 'fa-solid fa-expand'
      },
      {
        title: 'Analytics Ready',
        description: 'Optimized data models for BI and ML workloads',
        icon: 'fa-solid fa-chart-bar'
      }
    ],
    stats: [
      { label: 'Data Processed', value: '10PB+' },
      { label: 'Pipeline Uptime', value: '99.95%' },
      { label: 'Query Performance', value: '50x' },
      { label: 'Cost Reduction', value: '60%' }
    ]
  }
}

export const allServices = {
  ...aiServices,
  ...technicalServices
}