# Brightway Home Care LLC - Website Files

## Overview
This is a complete static website for Brightway Home Care LLC, a licensed Adult Family Home in Madison, Wisconsin.

## Files Included
- `index.html` - Homepage
- `about.html` - About Us page
- `services.html` - Services page
- `gallery.html` - Gallery page
- `contact.html` - Contact Us page
- `styles.css` - Main stylesheet (shared across all pages)
- `script.js` - JavaScript for menu toggle and contact form

## Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Clean, professional healthcare aesthetic
✅ Blue and teal color scheme per brand guidelines
✅ Click-to-call and WhatsApp integration
✅ Contact form with validation
✅ Google Maps embed placeholder
✅ SEO-optimized meta tags
✅ Accessible navigation
✅ Fast loading times

## Contact Information (Pre-configured)
- **Phone/WhatsApp**: +1 (847) 745-9930
- **Email**: Brightwayhomecarellc@gmail.com
- **Address**: 3610 Spenser Ln, Madison, WI 53704

## Setup Instructions

### Option 1: Deploy to Netlify/Vercel (Recommended)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Connect to Netlify or Vercel
4. Deploy (takes 2-3 minutes)
5. Custom domain can be added in platform settings

### Option 2: Deploy to Traditional Web Host
1. Upload all files via FTP to your web hosting
2. Ensure all files are in the root directory or same folder
3. Access via your domain name

### Option 3: Test Locally
1. Download all files to a folder
2. Open `index.html` in a web browser
3. All pages should work (contact form will show success message locally)

## Customization Guide

### Adding Real Photos to Gallery
1. Replace placeholder emoji with actual images:
   ```html
   <!-- Change from: -->
   <div class="gallery-item-page" data-label="Home Exterior">🏠</div>
   
   <!-- To: -->
   <div class="gallery-item-page" data-label="Home Exterior">
       <img src="images/exterior.jpg" alt="Home Exterior">
   </div>
   ```
2. Add images to an `images/` folder
3. Update all 9 gallery items

### Updating Contact Form Backend
The contact form currently shows a success message. To connect to a real backend:

**Option A - Use Formspree (Free)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B - Use Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option C - Custom Backend**
Update the `handleSubmit` function in `script.js` to send data to your API.

### Update Google Maps Embed
1. Go to Google Maps: https://www.google.com/maps
2. Search for "3610 Spenser Ln, Madison, WI 53704"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `contact.html`

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --blue-800: #1e3a8a;  /* Primary color */
    --teal-400: #2dd4bf;  /* Accent color */
    /* etc */
}
```

## Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses modern CSS)

## Performance
- Lightweight design (<100KB total)
- No external dependencies except Google Fonts
- Fast load times
- Mobile-optimized

## SEO Checklist
✅ Meta descriptions on all pages
✅ Proper heading hierarchy
✅ Alt text placeholders ready
✅ Semantic HTML structure
✅ Mobile responsive
✅ Fast loading

### Recommended Next Steps for SEO:
1. Add real photos with descriptive alt text
2. Create a `sitemap.xml`
3. Add Google Analytics tracking code
4. Submit to Google Search Console
5. Get listed on Google My Business

## Support & Maintenance
For questions or assistance:
- The website is fully static HTML/CSS/JS
- No database or server-side code required
- Can be edited in any text editor
- Contact form needs backend integration (see above)

## License
© 2025 Brightway Home Care LLC. All rights reserved.

---

## Quick Start Checklist
1. [ ] Upload all files to web host
2. [ ] Test all pages load correctly
3. [ ] Click all navigation links
4. [ ] Test Call/WhatsApp buttons on mobile
5. [ ] Test contact form submission
6. [ ] Verify map loads correctly
7. [ ] Test responsive design on mobile
8. [ ] Add real photos to gallery
9. [ ] Connect domain name
10. [ ] Set up Google Analytics (optional)

**Website is ready to go live!** 🚀
