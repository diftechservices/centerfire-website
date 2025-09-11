import { useWordPressPage } from './useWordPress'

export const useContactInfo = () => {
  const { content, loading, error } = useWordPressPage('acf-contact')

  // Default/fallback contact information
  const defaultContact = {
    company_name: 'Centerfire Digital',
    main_phone: '+1 (555) 247-FIRE',
    main_email: 'contact@centerfiredigital.com',
    support_email: 'support@centerfiredigital.com',
    business_hours: 'Monday - Friday: 8:00 AM - 6:00 PM PST',
    emergency_contact: '+1 (555) 911-FIRE',
    headquarters: null, // No physical address - keep structure for future use
    social_links: {
      linkedin: 'https://linkedin.com/company/centerfire-digital',
      twitter: 'https://twitter.com/centerfiredigital',
      github: 'https://github.com/centerfiredigital'
    }
  }

  if (loading || error || !content || !content.acf) {
    return {
      contactInfo: defaultContact,
      loading,
      error,
      isDefault: true
    }
  }

  // Merge WordPress data with defaults
  const wpContact = content.acf
  const contactInfo = {
    company_name: wpContact.company_name || defaultContact.company_name,
    main_phone: wpContact.main_phone || defaultContact.main_phone,
    main_email: wpContact.main_email || defaultContact.main_email,
    support_email: wpContact.support_email || defaultContact.support_email,
    business_hours: wpContact.business_hours || defaultContact.business_hours,
    emergency_contact: wpContact.emergency_contact || defaultContact.emergency_contact,
    headquarters: {
      ...defaultContact.headquarters,
      ...wpContact.headquarters
    },
    social_links: {
      ...defaultContact.social_links,
      ...wpContact.social_links
    },
    contact_methods: wpContact.contact_methods || []
  }

  return {
    contactInfo,
    loading: false,
    error: null,
    isDefault: false
  }
}

// Helper hook for just phone number (for header, etc.)
export const useMainPhone = () => {
  const { contactInfo } = useContactInfo()
  return contactInfo.main_phone
}

// Helper hook for just email (for footer, etc.)
export const useMainEmail = () => {
  const { contactInfo } = useContactInfo()
  return contactInfo.main_email
}

// Helper hook for formatted address
export const useFormattedAddress = () => {
  const { contactInfo } = useContactInfo()
  const { headquarters } = contactInfo
  
  if (!headquarters) return ''
  
  const parts = [
    headquarters.address_line_1,
    headquarters.address_line_2,
    `${headquarters.city}, ${headquarters.state} ${headquarters.zip_code}`,
    headquarters.country
  ].filter(Boolean)
  
  return parts.join(', ')
}

export default useContactInfo