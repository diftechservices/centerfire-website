# ACF Contact Page Setup

## WordPress Contact Page ACF Fields

Create a page in WordPress with slug `acf-contact` and add these ACF fields:

### Field Group: "Contact Page"
**Location:** Page slug = acf-contact

```
Field Group: Contact Page
├── Page Title (Text) - page_title [Contact Us]
├── Page Subtitle (Textarea) - page_subtitle
├── Company Information (Group) - company_info
│   ├── Company Name (Text) - company_name
│   ├── Main Phone (Text) - main_phone
│   ├── Main Email (Email) - main_email
│   ├── Support Email (Email) - support_email
│   └── Business Hours (Text) - business_hours
├── Emergency Contact (Text) - emergency_contact
├── Headquarters Address (Group) - headquarters
│   ├── Address Line 1 (Text) - address_line_1
│   ├── Address Line 2 (Text) - address_line_2
│   ├── City (Text) - city
│   ├── State (Text) - state
│   ├── ZIP Code (Text) - zip_code
│   └── Country (Text) - country
├── Contact Methods (Repeater) - contact_methods
│   ├── Method Name (Text) - name
│   ├── Icon (Text) - icon [fa-solid fa-phone]
│   ├── Description (Text) - description
│   └── Response Time (Text) - response_time
├── Social Links (Group) - social_links
│   ├── LinkedIn (URL) - linkedin
│   ├── Twitter (URL) - twitter
│   ├── GitHub (URL) - github
│   └── Facebook (URL) - facebook
├── Contact Form Settings (Group) - form_settings
│   ├── Show Contact Form (True/False) - show_contact_form
│   ├── Form Title (Text) - form_title
│   └── Form Subtitle (Textarea) - form_subtitle
```

## Example WordPress Content

### Basic Contact Information:
```
Company Name: Centerfire Digital
Main Phone: +1 (555) 247-FIRE
Main Email: contact@centerfiredigital.com
Support Email: support@centerfiredigital.com
Business Hours: Monday - Friday: 8:00 AM - 6:00 PM PST
Emergency Contact: +1 (555) 911-FIRE
```

### Address:
```
Address Line 1: 1234 Tactical Avenue
Address Line 2: Suite 100
City: San Francisco
State: CA
ZIP Code: 94102
Country: United States
```

### Contact Methods (Repeater):
```
Method 1:
- Name: Email Support
- Icon: fa-solid fa-envelope
- Description: General inquiries and project discussions
- Response Time: Within 4 hours

Method 2:
- Name: Phone Consultation
- Icon: fa-solid fa-phone
- Description: Direct phone consultation with our team
- Response Time: Same day callback

Method 3:
- Name: Emergency Support
- Icon: fa-solid fa-exclamation-triangle
- Description: 24/7 emergency technical support
- Response Time: Within 30 minutes
```

### Social Links:
```
LinkedIn: https://linkedin.com/company/centerfire-digital
Twitter: https://twitter.com/centerfiredigital
GitHub: https://github.com/centerfiredigital
```

## Testing the Setup

1. **Create WordPress page** with slug `acf-contact`
2. **Add ACF fields** as documented above
3. **Fill in your real contact information**
4. **Visit** `/contact-acf` on your headless site
5. **Should show** dynamic contact information

## Fallback Behavior

If WordPress isn't connected or the page doesn't exist, the component will show:
- Yellow warning message
- Default contact information
- Basic contact form

This ensures your contact page always works, even if WordPress is unavailable.

## Integration Points

The contact information can be used in:
- **Contact page** (main usage)
- **Header/Footer** (phone numbers, email)
- **About page** (company address)
- **Error pages** (support contact)

Next: Add contact info hooks for global usage across components!