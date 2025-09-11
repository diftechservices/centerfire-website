# ACF Mission Control Section Setup

## WordPress Mission Control Section ACF Fields

Add these ACF fields to the existing `homepage` page (same page as Hero section):

### Field Group: "Homepage Mission Control"
**Location:** Page slug = homepage

```
Field Group: Homepage Mission Control (append to existing homepage fields)
├── Mission Control Title Line 1 (Text) - mission_control_title_line1 [OPERATIONAL]
├── Mission Control Title Line 2 (Text) - mission_control_title_line2 [COMMAND CENTER]
└── Mission Control Description (Textarea) - mission_control_description
```

## Example WordPress Content

### Mission Control Header:
```
Mission Control Title Line 1: OPERATIONAL
Mission Control Title Line 2: COMMAND CENTER (displays in fire-orange)
Mission Control Description: Real-time intelligence on our tactical capabilities and deployment readiness across all operational theaters
```

## Important Design Notes:

### Title Formatting:
- **Line 1**: White text (`text-white`)
- **Line 2**: Fire orange text (`text-fire-orange`) with space prefix
- **Typography**: `font-display font-black text-5xl lg:text-6xl`

### Layout Structure:
- **Header Section**: ACF dynamic content (title and description)
- **Badge**: Static "MISSION CONTROL" with satellite icon
- **Data Panels**: Remain completely static as requested:
  - System Analytics (2/3 width) - stats, progress bars
  - Threat Assessment (1/3 width) - status indicators  
  - Active Operations (1/3 width) - animated indicators
- **Command Team Panel**: Removed as requested

### Static Content Preserved:
- All dashboard data remains hardcoded
- Progress bars and animations unchanged
- Status indicators maintain live appearance
- Grid layout and spacing identical

## Testing the Setup

1. **Add ACF fields** to existing `homepage` page in WordPress admin
2. **Fill in Mission Control content** using examples above
3. **Visit** `/` on your headless site
4. **Should look identical** except Command Team panel is removed
5. **Header content** should be editable via WordPress

## Fallback Behavior

If WordPress isn't connected or Mission Control fields are empty, the component shows:
- Yellow warning message
- Default Mission Control header content
- All static data panels remain functional

This ensures your Mission Control section always works, even if WordPress is unavailable.

## Integration Notes

- **Shares same page** as Hero section (homepage slug)
- **Minimal ACF structure** - only header content is dynamic
- **Static dashboard data** maintains tactical appearance
- **Preserved functionality** of all interactive elements
- **Command Team removed** - cleaner sidebar layout

## Version Changes:
- Converted header section to ACF dynamic content
- Removed Command Team panel completely
- Maintained exact styling for all dashboard elements
- Sidebar now contains only 2 panels instead of 3

## Next Steps

After setting up the Mission Control ACF fields:
1. Test that header content is editable
2. Verify dashboard panels remain static and functional
3. Confirm Command Team panel is removed
4. Commit the changes
5. Move to next section conversion