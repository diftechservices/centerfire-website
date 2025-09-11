# Deployment Strategy - Keeping Existing Site Live

## Current Setup Protection

**IMPORTANT:** The existing WordPress site at `centerfiredigital.com` must remain live and untouched during development.

## Recommended Deployment Approach

### Phase 1: Development (Current)
```
Production: centerfiredigital.com (existing WP site)
Development: new.centerfiredigital.com (this headless app)
API Source: centerfiredigital.com/wp-json (read-only from existing site)
```

### Phase 2: Staging
```
Production: centerfiredigital.com (existing WP site) 
Staging: staging.centerfiredigital.com (headless app)
API Source: centerfiredigital.com/wp-json (still using existing)
```

### Phase 3: Go-Live Options

#### Option A: Subdomain Approach (Safest)
```
Main Site: app.centerfiredigital.com (new headless)
WordPress Admin: admin.centerfiredigital.com (existing WP)
Legacy: centerfiredigital.com (redirect to app. or keep as fallback)
```

#### Option B: Full Replacement (After thorough testing)
```
Main Site: centerfiredigital.com (new headless)
WordPress Admin: centerfiredigital.com/wp-admin (headless CMS)
```

## Current Environment Variables

The app is already configured to read from the existing WordPress site safely:

```env
VITE_WP_API_URL=https://centerfiredigital.com/wp-json/wp/v2
VITE_JWT_AUTH_URL=https://centerfiredigital.com/wp-json/jwt-auth/v1
VITE_WP_BASE_URL=https://centerfiredigital.com
```

## Safety Measures in Place

1. **Read-Only API Access** - We're only reading from the existing WP REST API
2. **Separate Deployment** - This app runs on `new.centerfiredigital.com`
3. **No Database Changes** - The existing WordPress database is untouched
4. **Fallback Ready** - Existing site continues to function normally

## Testing ACF Without Breaking Production

### Option 1: Use Existing Content (Recommended for now)
- Test with existing WordPress pages/posts
- Add ACF fields to existing content safely
- ACF fields won't break the existing site theme

### Option 2: Create Test Environment
- Duplicate existing WordPress to `test.centerfiredigital.com`
- Install ACF and test there
- Point development to test environment

## Go-Live Checklist (When Ready)

- [ ] All routes tested and working
- [ ] ACF fields properly configured
- [ ] Performance benchmarks met
- [ ] SEO redirects planned
- [ ] Database backup taken
- [ ] Rollback plan documented
- [ ] DNS changes planned
- [ ] SSL certificates ready

## Emergency Rollback Plan

If anything goes wrong during deployment:
1. Revert DNS to point to existing WordPress
2. Existing site continues to work unchanged
3. Debug headless app separately
4. No data loss or downtime

This ensures zero risk to the current live site! 🛡️