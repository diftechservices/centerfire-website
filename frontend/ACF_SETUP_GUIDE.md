# ACF Setup Guide for Centerfire Digital Headless WordPress

This guide shows you exactly how to set up Advanced Custom Fields (ACF) in WordPress to work with the React components.

## Required WordPress Plugins

1. **Advanced Custom Fields PRO** (required for Flexible Content)
2. **ACF to REST API** (exposes ACF fields to REST API)

## Field Group Configurations

### 1. Services Page Fields

**Field Group Name:** "Services Page"  
**Location:** Page Template = Services

```
Field Group: Services Page
├── Section Title (Text) - section_title
├── Section Subtitle (Textarea) - section_subtitle  
├── Services (Repeater) - services
│   ├── Service Name (Text) - name
│   ├── Service Icon (Text) - icon [fa-solid fa-brain]
│   ├── Description (Textarea) - description
│   ├── Price (Number) - price
│   ├── Price Prefix (Text) - price_prefix [Starting at]
│   ├── Price Suffix (Text) - price_suffix [month]
│   ├── Features (Repeater) - features
│   │   └── Feature Name (Text) - feature_name
│   └── CTA Text (Text) - cta_text
├── CTA Text (Text) - cta_text
└── CTA Link (Text) - cta_link
```

### 2. Team Page Fields

**Field Group Name:** "Team Page"  
**Location:** Page Template = Team

```
Field Group: Team Page
├── Section Title (Text) - section_title
├── Section Subtitle (Textarea) - section_subtitle
├── Team Members (Repeater) - team_members
│   ├── Name (Text) - name
│   ├── Title/Position (Text) - title
│   ├── Photo (Image) - photo
│   ├── Bio (Textarea) - bio
│   ├── Years Experience (Number) - years_experience
│   ├── Skills (Repeater) - skills
│   │   └── Skill Name (Text) - skill_name
│   └── Social Links (Group) - social_links
│       ├── LinkedIn (URL) - linkedin
│       ├── GitHub (URL) - github
│       └── Twitter (URL) - twitter
├── Show Stats (True/False) - show_stats
└── Company Stats (Repeater) - company_stats
    ├── Number (Text) - number
    ├── Suffix (Text) - suffix [+, k, %]
    └── Label (Text) - label
```

### 3. Flexible Content (Page Builder)

**Field Group Name:** "Page Builder"  
**Location:** Page Template = Flexible

```
Field Group: Page Builder
└── Page Components (Flexible Content) - page_components
    ├── Hero Section - hero_section
    │   ├── Headline (Text) - headline
    │   ├── Subheadline (Textarea) - subheadline
    │   ├── Background Image (Image) - background_image
    │   └── CTA Button (Group) - cta_button
    │       ├── Text (Text) - text
    │       └── Link (Text) - link
    ├── Services Grid - services_grid
    │   ├── Title (Text) - title
    │   └── Services (Repeater) - services
    │       ├── Name (Text) - name
    │       ├── Icon (Text) - icon
    │       └── Description (Textarea) - description
    ├── Testimonials - testimonials
    │   ├── Title (Text) - title
    │   └── Testimonials (Repeater) - testimonials
    │       ├── Client Name (Text) - client_name
    │       ├── Client Title (Text) - client_title
    │       ├── Client Logo (Image) - client_logo
    │       └── Quote (Textarea) - quote
    ├── CTA Section - cta_section
    │   ├── Title (Text) - title
    │   ├── Description (Textarea) - description
    │   ├── Button Text (Text) - button_text
    │   ├── Button Link (Text) - button_link
    │   └── Background Color (Select) - background_color
    │       Options: tactical-dark, tactical-gray, fire-orange
    └── Stats Section - stats_section
        ├── Title (Text) - title
        └── Stats (Repeater) - stats
            ├── Number (Text) - number
            ├── Suffix (Text) - suffix
            └── Label (Text) - label
```

## WordPress REST API Setup

### 1. Install Required Plugins

```bash
# In WordPress Admin
Plugins > Add New > Search for:
- "Advanced Custom Fields PRO" 
- "ACF to REST API"
```

### 2. Enable ACF in REST API

Add to your WordPress `functions.php`:

```php
// Ensure ACF fields appear in REST API
add_filter('acf/settings/rest_api_format', function () {
    return 'standard';
});

// Register custom REST API fields if needed
add_action('rest_api_init', function () {
    register_rest_field('page', 'acf', [
        'get_callback' => function ($post) {
            return get_fields($post['id']);
        }
    ]);
});
```

### 3. Create WordPress Pages

Create these pages in WordPress Admin:

1. **Services** (slug: `services`)
2. **Team** (slug: `team`)  
3. **About** (slug: `about`)
4. **Services Flexible** (slug: `services-flexible`) - for page builder demo

## Testing Your Setup

### 1. Test API Endpoints

Visit these URLs to verify data:

```
https://your-site.com/wp-json/wp/v2/pages?slug=services
https://your-site.com/wp-json/wp/v2/pages?slug=team
```

### 2. Example JSON Response

Your API should return something like:

```json
{
  "id": 123,
  "title": {"rendered": "Our Services"},
  "acf": {
    "section_title": "Professional Services",
    "services": [
      {
        "name": "AI Development",
        "icon": "fa-solid fa-brain",
        "description": "Custom AI solutions",
        "price": 5000,
        "features": [
          {"feature_name": "Machine Learning"},
          {"feature_name": "Computer Vision"}
        ]
      }
    ]
  }
}
```

## React Component Usage

### Individual Components
```jsx
// Use specific ACF components
import ACFServicesSection from '../components/acf/ACFServicesSection'

<ACFServicesSection pageSlug="services" />
```

### Flexible Content
```jsx
// Use page builder approach
import FlexibleContentBuilder from '../components/acf/FlexibleContentBuilder'

<FlexibleContentBuilder pageSlug="services-flexible" />
```

## Routes Available for Testing

- `/services-acf` - ACF Services component demo
- `/about-wp` - Basic WordPress page integration
- Demo flexible content at any route using FlexibleContentBuilder

## Common Issues & Solutions

### 1. ACF Fields Not Showing in API
- Install "ACF to REST API" plugin
- Add the functions.php code above
- Check field group locations are set correctly

### 2. CORS Issues
Add to WordPress `.htaccess`:
```
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET,POST,OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type,Authorization"
```

### 3. Images Not Loading
- Ensure full URLs are returned for images
- Check WordPress media settings
- Verify image field is set to return "Array" not "ID"

This setup gives you maximum flexibility - use individual ACF components for specific pages, or the flexible content builder for full page-builder capabilities!