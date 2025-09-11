# ACF Hero Section Setup (Version 2)

## WordPress Hero Section ACF Fields

Add these ACF fields to the existing `homepage` page (or create if needed):

### Field Group: "Homepage Hero"
**Location:** Page slug = homepage

```
Field Group: Homepage Hero
├── Main Headline Line 1 (Text) - main_headline_line1 [PRECISION]
├── Main Headline Line 2 (Text) - main_headline_line2 [TECHNOLOGY]  
├── Main Headline Line 3 (Text) - main_headline_line3 [WARFARE]
├── Subheadline (Textarea) - subheadline
├── CTA Button 1 Text (Text) - cta_button1_text [Launch Operation]
├── CTA Button 1 URL (URL) - cta_button1_url [/contact]
├── CTA Button 2 Text (Text) - cta_button2_text [Mission Briefing]
├── CTA Button 2 URL (URL) - cta_button2_url [/about]
└── Feature Cards (Repeater) - feature_cards
    ├── Icon (Text) - icon [fa-solid fa-brain]
    ├── Icon Color (Text) - icon_color [text-fire-orange]
    ├── Background Color (Text) - bg_color [bg-fire-orange/20]  
    ├── Title (Text) - title
    ├── Description (Textarea) - description
    ├── Features (Repeater) - features [OPTIONAL - for bullet points]
    │   └── Feature Text (Text) - feature_text
    ├── CTA Text (Text) - cta_text [OPTIONAL - button text]
    └── CTA URL (URL) - cta_url [OPTIONAL - button link]
```

## Example Content (Current Styling):

### Main Headlines (3 Lines with Different Colors):
```
Main Headline Line 1: PRECISION (displays in white)
Main Headline Line 2: TECHNOLOGY (displays in fire-orange)
Main Headline Line 3: WARFARE (displays with steel-blue to tactical-green gradient)

Subheadline: Elite AI-driven solutions engineered for organizations that demand tactical precision, unwavering reliability, and results that cut through the noise of conventional tech consulting.
```

### CTA Buttons (Both Required):
```
CTA Button 1:
- Text: Launch Operation
- URL: /contact
- Style: Primary button with rocket icon

CTA Button 2:
- Text: Mission Briefing  
- URL: /about
- Style: Secondary button with play icon
```

### Feature Cards (Repeater) - Enhanced but Backward Compatible:
```
Card 1 (Basic - maintains exact current appearance):
- Icon: fa-solid fa-brain
- Icon Color: text-fire-orange
- Background Color: bg-fire-orange/20
- Title: AI Arsenal
- Description: Advanced machine learning and AI solutions deployed with surgical precision

Card 2 (Enhanced - with optional features and CTA):
- Icon: fa-solid fa-shield-halved
- Icon Color: text-steel-blue
- Background Color: bg-steel-blue/20
- Title: Secure Operations
- Description: Fortress-grade security protocols protecting your digital assets
- Features (optional):
  • End-to-end Encryption
  • Threat Detection
  • 24/7 Monitoring
- CTA Text: Secure Now
- CTA URL: /services/security

Card 3 (Longer description - expands gracefully):
- Icon: fa-solid fa-crosshairs
- Icon Color: text-tactical-green
- Background Color: bg-tactical-green/20
- Title: Target Acquisition
- Description: Laser-focused solutions that hit objectives with zero compromise. Our precision targeting methodology ensures maximum efficiency and strategic advantage in every engagement.
```

## Important Design Notes:

### Title Formatting:
- **Line 1**: White text (`text-white`)
- **Line 2**: Fire orange text (`text-fire-orange`) 
- **Line 3**: Gradient text (`bg-gradient-to-r from-steel-blue to-tactical-green bg-clip-text text-transparent`)
- **Typography**: `font-display font-black text-6xl lg:text-8xl`

### Layout Preservation:
- Maintains tactical grid background pattern
- Preserves "TACTICAL TECH OPERATIONS" badge with status indicators
- Keeps exact spacing and proportions  
- Two-button CTA layout in flex row on desktop, stacked on mobile

### Enhanced Content Support:
- **Backward Compatible**: Existing content displays exactly the same
- **Flexible Heights**: Cards expand gracefully to accommodate longer content
- **Optional Features**: Bullet point lists appear only when content is added
- **Optional CTAs**: Individual card buttons appear only when configured
- **Equal Heights**: Grid ensures all cards in a row match the tallest card

### Button Behavior:
- Both buttons are configurable via ACF URLs
- Button 1: Primary style with transform hover effect
- Button 2: Secondary style with same hover effect

## Icon Options:
Popular FontAwesome icons you can use:
```
fa-solid fa-brain          - AI/Intelligence
fa-solid fa-shield-halved   - Security
fa-solid fa-crosshairs      - Targeting/Precision
fa-solid fa-rocket          - Speed/Launch
fa-solid fa-bolt            - Power/Energy
fa-solid fa-cog             - Engineering
fa-solid fa-satellite-dish  - Communication
fa-solid fa-lock            - Security
fa-solid fa-chart-line      - Analytics
fa-solid fa-code            - Development
```

## Color Options:
Tactical theme colors:
```
Icon Colors:
- text-fire-orange     - Orange accent
- text-steel-blue      - Blue accent  
- text-tactical-green  - Green accent
- text-white           - White
- text-gray-300        - Light gray

Background Colors:
- bg-fire-orange/20    - Orange background
- bg-steel-blue/20     - Blue background
- bg-tactical-green/20 - Green background
- bg-white/10          - White overlay
```

## Testing the Setup

1. **Add ACF fields** to `homepage` page in WordPress admin
2. **Fill in content** using the examples above
3. **Visit** `/` on your headless site
4. **Should look identical** to the current version
5. **Test both CTA buttons** to ensure they navigate correctly

## Fallback Behavior

If WordPress isn't connected or fields are empty, the component shows:
- Yellow warning message
- Exact copy of current hero content
- Both CTA buttons functional
- All feature cards displayed

This ensures your homepage always works, even if WordPress is unavailable.

## Version Changes from V1:
- Split headline into 3 separate fields to preserve color formatting
- Added second CTA button support
- Maintains exact visual appearance
- No breaking changes to existing styling
- Full backward compatibility

## Next Steps

After setting up the ACF fields:
1. Test that the styling matches perfectly
2. Verify both CTA buttons work
3. Commit the changes with preserved formatting
4. Move to next section conversion