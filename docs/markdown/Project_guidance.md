# Brightway Home Care LLC — Project Guidance

## Project Type
Static informational marketing website (no backend, no user auth, no booking system).

---

## Implementation Status

### Phase 1 — Core Pages ✅ COMPLETE
- [x] Home page with hero and CTAs
- [x] About page with values and story
- [x] Services page with detailed offerings
- [x] Contact page with form and map
- [x] Gallery page with lightbox
- [x] Mobile responsive design

### Phase 2 — Trust & Legal ✅ COMPLETE
- [x] FAQ page with search and filtering
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Footer with legal links

### Phase 3 — Form & Email ✅ COMPLETE
- [x] Contact form with Zod validation
- [x] EmailJS integration
- [x] Notification email to business
- [x] Auto-reply email to submitter
- [x] Error handling and success states

### Phase 4 — UI Polish ✅ COMPLETE
- [x] Dark gradient hero sections
- [x] Glass morphism effects
- [x] Animated backgrounds
- [x] Hover micro-interactions
- [x] Brand color compliance (Blue 800, Teal, Rose)
- [x] Wave SVG dividers
- [x] Premium card designs

---

## Design System

### Brand Colors (STRICT)
Only use these colors across all pages:

| Color | Hex | Usage |
|-------|-----|-------|
| Blue 800 | #1e3a8a | Primary: headings, buttons, nav, footer |
| Blue 600 | #2563eb | Secondary blue accents |
| Teal 400 | #2dd4bf | Main accent: icons, highlights |
| Teal 300 | #5eead4 | Light accent |
| Rose 400 | #fb7185 | Warm accent: care-focused elements |
| Rose 500 | #f43f5e | Warm accent variation |
| White | #ffffff | Base backgrounds |
| Gray 600 | #4b5563 | Body text |

**Do NOT use:** violet, purple, emerald, amber, cyan, indigo, pink, red

### Typography
- Headings: Poppins (SemiBold/Bold)
- Body: Inter (Regular)
- Font sizes: Tailwind defaults with custom section styles

### Component Patterns
- Cards: Rounded corners (2xl/3xl), gradient top bars, hover lift
- Icons: Lucide React, gradient backgrounds, 2xl rounded
- Buttons: Rounded full, gradient or solid, hover scale
- Sections: Consistent padding (section-padding class)

---

## Contact Page Requirements

### Contact Information
- Phone/WhatsApp: +1 (847) 745-9930 (clickable)
- Email: Brightwayhomecarellc@gmail.com (clickable)
- Address: 3610 Spenser Ln, Madison, WI 53704
- Google Maps embed

### Contact Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | text | Yes | Min 2 chars |
| Phone | tel | Yes | Min 10 digits, phone pattern |
| Email | email | Yes | Valid email format |
| Inquiry Type | select | No | Predefined options |
| Message | textarea | Yes | Min 10 chars, max 1000 |

### EmailJS Setup
- Service ID: `service_8ascix4`
- Notification Template: `template_1cy8tz3`
- Auto-reply Template: `template_uxvs22y`
- Public Key: Environment variable

---

## WhatsApp Link Format
```
https://wa.me/18477459930
```

---

## Copywriting Guidance

### Do:
- Keep sentences short and clear
- Use respectful, calm tone
- Focus on trust-building language
- Emphasize person-centered care
- Mention licensing and certification

### Don't:
- Make medical claims or promises
- Use clinical/institutional language
- Reference specific medical conditions
- Overpromise on services

### Medication Reference
Always use: "Medication reminders/support (as permitted)"

---

## Gallery Guidance

### Recommended Images
- Home exterior (bright, welcoming)
- Living room (comfortable seating)
- Dining/kitchen (clean, homey)
- Bedroom (peaceful, private)
- Garden/outdoor space
- Safety features

### Privacy Rule
- No resident faces without documented written consent
- Use representative/stock images when needed
- Add privacy disclaimer to gallery page

---

## Accessibility Requirements

- [x] Semantic HTML elements
- [x] ARIA labels on forms and interactive elements
- [x] Alt text on all images
- [x] Keyboard navigation support (gallery lightbox)
- [x] Focus indicators on interactive elements
- [x] Color contrast compliance
- [x] Screen reader friendly structure

---

## Performance Optimizations

- [x] Next.js Image optimization
- [x] Lazy loading for below-fold images
- [x] Proper image sizing hints
- [x] Minimal client-side JavaScript
- [x] Tailwind CSS purging

---

## Final Launch Checklist

### Technical
- [x] Domain connected (Vercel)
- [x] SSL active (automatic)
- [x] Mobile-friendly test passed
- [x] All links working
- [x] Forms tested and functional
- [x] EmailJS configured

### Content
- [x] Contact form tested
- [x] Click-to-call tested
- [x] WhatsApp button tested
- [x] Map embed works
- [x] All images loading
- [x] Privacy/Terms content reviewed

### SEO
- [x] Page titles set
- [x] Meta descriptions set
- [x] Open Graph tags
- [x] Sitemap (auto-generated)
- [x] Robots.txt configured

---

## Future Enhancements (Optional)

- [ ] Testimonials section (with consent)
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Live chat widget
- [ ] Virtual tour video
