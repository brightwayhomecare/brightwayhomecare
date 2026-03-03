# 🚀 Deployment Checklist - Brightway Home Care LLC

**Domain**: https://www.brightwayhomecarellc.com  
**Status**: Ready for Production ✅

---

## Pre-Deployment

### 1. Environment Variables

Create `.env.local` file with production values:

```bash
NEXT_PUBLIC_SITE_URL=https://www.brightwayhomecarellc.com
NEXT_PUBLIC_PHONE="+1 (608) 620-5890"
NEXT_PUBLIC_PHONE_RAW="+16086205890"
NEXT_PUBLIC_EMAIL="Brightwayhomecarellc@gmail.com"
NEXT_PUBLIC_ADDRESS="3610 Spenser Ln, Madison, WI 53704"
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/16086205890"

# Get these from EmailJS dashboard
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_template_id

# Tawk.to (already configured)
NEXT_PUBLIC_TAWK_PROPERTY_ID=69a6170c24cf1b1c3d9668f9
NEXT_PUBLIC_TAWK_WIDGET_ID=1jiock2j8

# Get from Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code

# Optional: Get from Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Build & Test Locally

```bash
# Install dependencies
npm install

# Build production version
npm run build

# Test production build locally
npm start

# Visit http://localhost:3000 and test:
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Phone links work (608-620-5890)
- [ ] WhatsApp link works
- [ ] Tawk.to chat appears
- [ ] No console errors
- [ ] Images load properly
```

### 3. Code Quality Checks

```bash
# Run linter
npm run lint

# Fix any issues
npm run lint -- --fix
```

---

## Deployment (Vercel Recommended)

### Option A: Deploy to Vercel (Recommended)

#### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub/GitLab/Bitbucket
3. Import your repository

#### Step 2: Configure Project
1. Framework Preset: **Next.js**
2. Root Directory: `./`
3. Build Command: `npm run build`
4. Output Directory: `.next`

#### Step 3: Add Environment Variables
Add all variables from `.env.local` in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add each variable (without quotes)
- Apply to Production, Preview, Development

#### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Get deployment URL (e.g., `your-project.vercel.app`)

#### Step 5: Add Custom Domain
1. Go to Project Settings → Domains
2. Add `www.brightwayhomecarellc.com`
3. Follow DNS instructions
4. Wait for DNS propagation (5-60 minutes)

**Vercel DNS Configuration:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### Option B: Deploy to Netlify

#### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Sign up and connect repository

#### Step 2: Configure Build
```
Build command: npm run build
Publish directory: .next
```

#### Step 3: Add Environment Variables
- Go to Site Settings → Environment Variables
- Add all variables from `.env.local`

#### Step 4: Add Custom Domain
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

---

## Post-Deployment Verification

### 1. Domain & SSL

- [ ] https://www.brightwayhomecarellc.com loads
- [ ] SSL certificate is valid (green padlock)
- [ ] http:// redirects to https://
- [ ] www and non-www both work

**Test DNS Propagation:**
https://dnschecker.org/#A/www.brightwayhomecarellc.com

### 2. SEO Files

- [ ] Sitemap accessible: https://www.brightwayhomecarellc.com/sitemap.xml
- [ ] Robots.txt accessible: https://www.brightwayhomecarellc.com/robots.txt
- [ ] Favicon loads
- [ ] OG Image loads: https://www.brightwayhomecarellc.com/images/og-image.jpg

### 3. Functionality

- [ ] All pages load without errors
- [ ] Navigation menu works (desktop & mobile)
- [ ] Contact form submits successfully
- [ ] Phone links work: tel:+16086205890
- [ ] WhatsApp link works: https://wa.me/16086205890
- [ ] Tawk.to chat widget appears
- [ ] Footer links work
- [ ] Images load and display correctly

### 4. Performance

**Test at:** https://pagespeed.web.dev

- [ ] Mobile score > 90
- [ ] Desktop score > 95
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No layout shifts (CLS < 0.1)

### 5. Social Media Preview

**Test at:** https://www.opengraph.xyz

- [ ] Title displays correctly
- [ ] Description displays correctly
- [ ] OG image shows (1200x630)
- [ ] Logo appears as icon

**WhatsApp Preview Test:**
1. Share link on WhatsApp
2. Verify preview shows:
   - Brightway Home Care LLC title
   - Description
   - Image/Logo

**Facebook Preview Test:**
https://developers.facebook.com/tools/debug/
- Enter URL and click "Fetch new information"
- Verify all tags are correct

---

## Search Engine Setup

### Google Search Console

1. Visit: https://search.google.com/search-console
2. Add property: `https://www.brightwayhomecarellc.com`
3. Verify ownership:
   - Method 1: HTML tag (add to layout.tsx)
   - Method 2: DNS record
4. Submit sitemap: `https://www.brightwayhomecarellc.com/sitemap.xml`
5. Request indexing for main pages

### Bing Webmaster Tools

1. Visit: https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

### Google Business Profile

1. Visit: https://business.google.com
2. Create/claim listing for:
   - **Brightway Home Care LLC**
   - **3610 Spenser Ln, Madison, WI 53704**
   - **Phone: (608) 620-5890**
3. Add photos
4. Add services
5. Verify listing

---

## Analytics Setup (Optional)

### Google Analytics 4

1. Create account: https://analytics.google.com
2. Create property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to Vercel/Netlify environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
5. Redeploy
6. Test tracking (Real-time reports)

### Microsoft Clarity (Free)

1. Visit: https://clarity.microsoft.com
2. Create project
3. Copy tracking code
4. Add to `app/layout.tsx` (optional)

---

## Monitoring Setup

### Uptime Monitoring

**UptimeRobot** (Free):
1. Visit: https://uptimerobot.com
2. Add monitor: `https://www.brightwayhomecarellc.com`
3. Set check interval: 5 minutes
4. Add alert contacts (email/SMS)

### Error Tracking

**Sentry** (Optional):
1. Visit: https://sentry.io
2. Create Next.js project
3. Install: `npm install @sentry/nextjs`
4. Configure error tracking

---

## Final Checklist

### Critical

- [ ] Domain resolves correctly
- [ ] SSL certificate valid
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Phone numbers correct (608-620-5890)
- [ ] No console errors
- [ ] Mobile responsive

### SEO

- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] Google Business Profile created
- [ ] Meta tags verified
- [ ] Structured data validated
- [ ] OG tags working

### Performance

- [ ] PageSpeed score > 90
- [ ] Images optimized
- [ ] No broken links
- [ ] Fast loading times

### Security

- [ ] HTTPS enabled
- [ ] Security headers active
- [ ] No sensitive data exposed
- [ ] Environment variables set

### Functionality

- [ ] Tawk.to chat working
- [ ] All CTAs functional
- [ ] Forms submitting
- [ ] WhatsApp link working
- [ ] Email links working

---

## Ongoing Maintenance

### Daily
- Monitor Tawk.to for chat inquiries
- Respond to contact form submissions

### Weekly
- Check Google Search Console for issues
- Review analytics traffic
- Check uptime monitoring

### Monthly
- Update content if needed
- Check for broken links
- Review PageSpeed scores
- Respond to reviews

### Quarterly
- Update dependencies: `npm update`
- Security audit
- SEO performance review
- Content refresh

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **SEO Guide**: See `SEO_PRODUCTION_GUIDE.md`
- **Tawk.to Guide**: See `TAWK_TO_INTEGRATION.md`

---

## Emergency Contacts

### Hosting Issues
- Vercel Status: https://www.vercel-status.com
- Vercel Support: https://vercel.com/support

### Domain Issues
- Check DNS: https://dnschecker.org
- Domain registrar support

### Email Issues
- EmailJS Status: https://status.emailjs.com
- EmailJS Support: https://www.emailjs.com/support

---

**Deployment Status**: ✅ READY

**Next Steps**: Follow checklist in order → Deploy → Verify → Monitor

**Good luck with your launch! 🎉**
