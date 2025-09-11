# ACF AI Arsenal Section Setup

## WordPress AI Arsenal Section ACF Fields

Add these ACF fields to the existing `homepage` page (same page as Hero and Mission Control sections):

### Field Group: "Homepage AI Arsenal"
**Location:** Page slug = homepage

```
Field Group: Homepage AI Arsenal (append to existing homepage fields)
├── AI Arsenal Title Line 1 (Text) - ai_arsenal_title_line1 [ARTIFICIAL INTELLIGENCE]
├── AI Arsenal Title Line 2 (Text) - ai_arsenal_title_line2 [WEAPONS SYSTEMS]
├── AI Arsenal Description (Textarea) - ai_arsenal_description
├── AI Services (Repeater) - ai_services
│   ├── Icon (Text) - icon [fa-solid fa-robot]
│   ├── Icon Color (Text) - icon_color [text-fire-orange]
│   ├── Icon Background (Text) - icon_bg [bg-fire-orange/20]
│   ├── Title (Text) - title
│   ├── Subtitle (Text) - subtitle
│   ├── Description (Textarea) - description
│   ├── Features (Repeater) - features
│   │   └── Feature Text (Text) - feature_text
│   ├── Button Text (Text) - button_text
│   ├── Button Variant (Select) - button_variant [primary, secondary, outline]
│   └── Button Class (Text) - button_class [optional custom CSS]
├── Custom AI Title (Text) - custom_ai_title [Custom AI Development]
├── Custom AI Description (Textarea) - custom_ai_description
├── Custom AI Button Text (Text) - custom_ai_button_text [Request Custom AI]
└── Custom AI Tags (Repeater) - custom_ai_tags
    └── Tag Text (Text) - tag_text
```

## Example WordPress Content

### AI Arsenal Header:
```
AI Arsenal Title Line 1: ARTIFICIAL INTELLIGENCE
AI Arsenal Title Line 2: WEAPONS SYSTEMS (displays in fire-orange)
AI Arsenal Description: Advanced AI technologies deployed with military precision to dominate your competitive landscape and achieve tactical superiority
```

### AI Services (Repeater) - 2x2 Grid Layout:
```
Service 1:
- Icon: fa-solid fa-robot
- Icon Color: text-fire-orange
- Icon Background: bg-fire-orange/20
- Title: Machine Learning Operations
- Subtitle: MLOps Infrastructure
- Description: Deploy sophisticated ML pipelines with automated training, validation, and deployment protocols. Our battle-tested infrastructure ensures your AI models perform with unwavering accuracy.
- Features:
  • Automated Model Training & Validation
  • Real-time Performance Monitoring
  • Scalable Cloud Infrastructure
- Button Text: Deploy MLOps
- Button Variant: primary

Service 2:
- Icon: fa-solid fa-eye
- Icon Color: text-steel-blue
- Icon Background: bg-steel-blue/20
- Title: Computer Vision Systems
- Subtitle: Advanced Visual Intelligence
- Description: Cutting-edge computer vision solutions that process visual data with superhuman precision. From object detection to facial recognition, we deliver surveillance-grade accuracy.
- Features:
  • Object Detection & Tracking
  • Facial Recognition Systems
  • Real-time Video Analysis
- Button Text: Engage Vision AI
- Button Variant: secondary

Service 3:
- Icon: fa-solid fa-comments
- Icon Color: text-tactical-green
- Icon Background: bg-tactical-green/20
- Title: Natural Language Processing
- Subtitle: Linguistic Warfare Systems
- Description: Advanced NLP systems that understand, analyze, and generate human language with tactical precision. Deploy AI that communicates with the sophistication of a seasoned operator.
- Features:
  • Sentiment Analysis & Classification
  • Automated Content Generation
  • Multi-language Support
- Button Text: Launch NLP Systems
- Button Variant: primary
- Button Class: bg-tactical-green hover:bg-tactical-green/90 text-tactical-dark

Service 4:
- Icon: fa-solid fa-chart-line
- Icon Color: text-warning-amber
- Icon Background: bg-warning-amber/20
- Title: Predictive Analytics
- Subtitle: Strategic Forecasting
- Description: Military-grade predictive models that forecast market movements, customer behavior, and operational risks with the accuracy of a sniper's scope.
- Features:
  • Market Trend Forecasting
  • Risk Assessment Models
  • Customer Behavior Prediction
- Button Text: Deploy Analytics
- Button Variant: outline
- Button Class: border-2 border-warning-amber text-warning-amber hover:bg-warning-amber hover:text-tactical-dark
```

### Custom AI Development Section:
```
Custom AI Title: Custom AI Development
Custom AI Description: Need a specialized AI solution? Our elite development team creates bespoke artificial intelligence systems tailored to your exact specifications and operational requirements.
Custom AI Button Text: Request Custom AI
Custom AI Tags:
- Deep Learning
- Neural Networks
- Reinforcement Learning
- Transfer Learning
```

## Important Design Notes:

### Title Formatting:
- **Line 1**: White text (`text-white`)
- **Line 2**: Fire orange text (`text-fire-orange`) 
- **Typography**: `font-display font-black text-5xl lg:text-6xl`

### Layout Structure:
- **Header Section**: ACF dynamic content (title and description)
- **Badge**: Static "AI ARSENAL" with brain icon
- **Services Grid**: 2x2 grid layout on large screens, single column on mobile
- **Service Cards**: Equal height with flex layout for expandable content
- **Custom AI CTA**: Full-width gradient section with tags

### Service Card Features:
- **Flexible heights**: Cards expand to match content
- **Features lists**: Bullet points with check mark icons
- **Custom buttons**: Support for variants and custom CSS classes
- **Icon customization**: Any FontAwesome icon with custom colors

## Icon Options:
AI-focused FontAwesome icons:
```
fa-solid fa-robot          - Machine Learning/Robotics
fa-solid fa-brain          - AI/Intelligence
fa-solid fa-eye            - Computer Vision
fa-solid fa-comments       - NLP/Communication
fa-solid fa-chart-line     - Analytics/Data
fa-solid fa-microchip      - Processing/Hardware
fa-solid fa-network-wired  - Neural Networks
fa-solid fa-code           - Development
fa-solid fa-bolt           - Speed/Performance
fa-solid fa-cog            - Engineering
```

## Color Themes:
Service color coordination:
```
Fire Orange Theme:
- Icon Color: text-fire-orange
- Background: bg-fire-orange/20
- For: Primary AI services

Steel Blue Theme:
- Icon Color: text-steel-blue
- Background: bg-steel-blue/20
- For: Vision/Security services

Tactical Green Theme:
- Icon Color: text-tactical-green
- Background: bg-tactical-green/20
- For: Communication/Language services

Warning Amber Theme:
- Icon Color: text-warning-amber
- Background: bg-warning-amber/20
- For: Analytics/Forecasting services
```

## Testing the Setup

1. **Add ACF fields** to existing `homepage` page in WordPress admin
2. **Fill in AI Arsenal content** using examples above
3. **Visit** `/` on your headless site
4. **Should look identical** to current AI Arsenal section
5. **Test service cards** expand properly with longer content

## Fallback Behavior

If WordPress isn't connected or AI Arsenal fields are empty, the component shows:
- Yellow warning message
- Default AI Arsenal content with all 4 services
- Custom AI development section
- All styling and functionality preserved

This ensures your AI Arsenal section always works, even if WordPress is unavailable.

## Integration Notes

- **Shares same page** as Hero and Mission Control sections (homepage slug)
- **Service repeater** supports unlimited AI services
- **Features repeater** allows detailed capability lists per service
- **Button flexibility** supports variants and custom styling
- **Tag system** for custom AI development technologies

## Enhanced Content Support:
- **Expandable cards**: Services can have varying amounts of content
- **Feature lists**: Detailed capability breakdowns per service
- **Custom buttons**: Unique styling per service
- **Technology tags**: Customizable skill/technology badges

## Version Changes:
- Converted entire section to ACF dynamic content
- Added support for expandable service cards
- Maintained exact 2x2 grid layout
- Preserved all custom button styling
- Enhanced with feature lists per service

## Next Steps

After setting up the AI Arsenal ACF fields:
1. Test that all 4 service cards display correctly
2. Verify custom AI section is editable
3. Test feature lists and button variants
4. Commit the changes
5. Move to next section conversion