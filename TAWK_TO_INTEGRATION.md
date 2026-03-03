# Tawk.to Live Chat Integration

This document provides information about the Tawk.to live chat integration in Brightway Home Care.

## Overview

Tawk.to is a free live chat application that allows you to monitor and chat with visitors on your website. The integration has been implemented following Next.js 14 App Router best practices.

## Configuration

### Default Configuration

- **Property ID**: `69a6170c24cf1b1c3d9668f9`
- **Widget ID**: `1jiock2j8`
- **Organization**: BRIGHTWAY HOME CARE

### Environment Variables (Optional)

You can override the default configuration using environment variables in your `.env.local` file:

```env
NEXT_PUBLIC_TAWK_PROPERTY_ID=69a6170c24cf1b1c3d9668f9
NEXT_PUBLIC_TAWK_WIDGET_ID=1jiock2j8
```

## Implementation Details

### Files Created/Modified

1. **`components/TawkToChat.tsx`** (NEW)
   - Client-side component that loads Tawk.to widget
   - Uses React hooks for lifecycle management
   - Async loading for optimal performance
   - TypeScript support with proper type declarations

2. **`app/layout.tsx`** (MODIFIED)
   - Added TawkToChat component to the root layout
   - Ensures chat widget is available on all pages

3. **`.env.example`** (MODIFIED)
   - Added Tawk.to configuration variables

## Features

- ✅ Async loading (doesn't block page rendering)
- ✅ Mobile responsive
- ✅ Customizable widget position (bottom-right)
- ✅ TypeScript support
- ✅ Environment variable configuration
- ✅ Console logging for debugging
- ✅ Pre-chat form support (optional)
- ✅ Visitor attribute tracking (optional)

## Widget Customization

### Position & Appearance

The widget is configured to appear at the bottom-right corner with custom offsets:

```typescript
// Desktop: 20px from bottom and right
// Mobile: 10px from bottom and right
```

### Advanced Customization

To customize the widget further, edit `components/TawkToChat.tsx`:

```typescript
window.Tawk_API.customStyle = {
  visibility: {
    desktop: {
      position: 'br', // 'br' | 'bl' | 'tr' | 'tl'
      xOffset: 20,
      yOffset: 20,
    },
    mobile: {
      position: 'br',
      xOffset: 10,
      yOffset: 10,
    },
  },
}
```

### Setting Visitor Attributes

Uncomment and modify the following code in `TawkToChat.tsx` to set visitor information:

```typescript
window.Tawk_API.onLoad = function () {
  window.Tawk_API.setAttributes({
    name: 'John Doe',
    email: 'john@example.com',
    hash: 'hash-value', // For secure mode
  }, function(error) {
    if (error) console.error('Error setting attributes:', error)
  })
}
```

## Dashboard Access

Access your Tawk.to dashboard at: [https://dashboard.tawk.to](https://dashboard.tawk.to)

### Dashboard Features:
- Real-time chat monitoring
- Visitor tracking
- Chat history
- Analytics and reports
- Widget customization
- Automated responses
- Mobile app (iOS/Android)

## Testing

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. The Tawk.to widget should appear in the bottom-right corner

4. Check browser console for success message:
   ```
   Tawk.to Live Chat loaded successfully
   ```

### Production Testing

After deployment, test the chat widget on your live site to ensure it's working correctly.

## Troubleshooting

### Widget Not Appearing

1. **Check Console Errors**
   - Open browser DevTools (F12)
   - Look for errors in the Console tab

2. **Verify Property ID and Widget ID**
   - Ensure the IDs are correct in `TawkToChat.tsx` or `.env.local`

3. **Check Network Tab**
   - Verify the Tawk.to script is loading
   - Look for `https://embed.tawk.to/...` request

4. **Clear Browser Cache**
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Clear cache and reload

### Script Loading Issues

If the script fails to load:

```typescript
// Check if script is blocked by ad blockers
// Try disabling ad blockers temporarily
// Verify CORS settings
```

## Performance Considerations

- ✅ Widget loads asynchronously (doesn't block page load)
- ✅ Script is loaded only once per session
- ✅ Minimal impact on Core Web Vitals
- ✅ Mobile-optimized

## Security

- The widget uses secure HTTPS connections
- CrossOrigin attribute is set to `*` for proper loading
- No sensitive data is transmitted by default
- Optional: Enable Tawk.to secure mode for visitor verification

## Support

For Tawk.to specific issues:
- Documentation: [https://help.tawk.to](https://help.tawk.to)
- Support: [https://www.tawk.to/support](https://www.tawk.to/support)

For implementation issues:
- Contact your development team
- Check this documentation
- Review browser console logs

## Future Enhancements

Potential improvements to consider:

1. **User Authentication Integration**
   - Auto-populate visitor name/email for logged-in users
   - Secure mode with hash verification

2. **Custom Triggers**
   - Show chat based on user behavior
   - Page-specific greetings

3. **Analytics Integration**
   - Track chat interactions in Google Analytics
   - Monitor conversion rates

4. **Conditional Loading**
   - Load only on specific pages
   - A/B testing for chat placement

---

**Last Updated**: 2026-03-03
**Integration Version**: 1.0.0
**Next.js Version**: 14.x
**Tawk.to Version**: Latest (auto-updated)
