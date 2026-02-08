# Brightway Home Care LLC — Website Structure & Page Design

## Overview
Modern, responsive Next.js 14 marketing website with premium UI/UX design. All pages feature consistent dark gradient hero sections, animated backgrounds, and brand-compliant color palette.

---

## Pages (8 Total)

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | Complete |
| `/about` | About Us | Complete |
| `/services` | Services | Complete |
| `/gallery` | Gallery | Complete |
| `/contact` | Contact Us | Complete |
| `/faq` | FAQ | Complete |
| `/privacy` | Privacy Policy | Complete |
| `/terms` | Terms of Service | Complete |

---

## Navigation

### Header (components/Header.tsx)
- Logo + Business Name
- Navigation Links: Home, About, Services, Gallery, Contact
- CTA Buttons: Call/WhatsApp, Contact Us
- Mobile: Hamburger menu with slide-out drawer

### Footer (components/Footer.tsx)
- Business info + Logo
- Quick Links
- Contact Information
- Social Links (placeholder)
- Legal Links (Privacy, Terms)

---

## Page Structures

### HOME PAGE (`/`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient - hero-gradient class)                              |
| - Badge: "Licensed Adult Family Home in Madison, WI"                            |
| - H1: "A Place to Call Home"                                                    |
| - Tagline: "Safe • Supportive • 24/7 Care"                                      |
| - CTAs: [Call/WhatsApp] [Schedule a Tour]                                       |
| - Trust indicators: Licensed, 24/7 Care, Family-Owned                           |
| - Right: Glass card with logo + floating heart icon                             |
| - Wave divider at bottom                                                        |
+--------------------------------------------------------------------------------+
| SERVICES SECTION (Teal accent)                                                  |
| - Badge: "Our Services"                                                         |
| - 4 cards: ADL Support, Meals & Nutrition, Safety Supervision, Medication       |
| - Each card: Gradient icon, numbered (01-04), hover animations                  |
| - CTA: View All Services                                                        |
+--------------------------------------------------------------------------------+
| WHO WE SERVE (Rose accent)                                                      |
| - Badge: "Who We Serve"                                                         |
| - 3 cards: Advanced Age, Physical Disabilities, Developmental Disabilities      |
| - Rose gradient accents, floating icons                                         |
| - Trust statement at bottom                                                     |
+--------------------------------------------------------------------------------+
| WHY CHOOSE US (Teal accent)                                                     |
| - Badge: "Why Choose Us"                                                        |
| - 3 pillars: Clean & Peaceful, Compassionate Team, Person-Centered              |
| - 6 benefit items (alternating teal/rose)                                       |
| - Trust seal badge                                                              |
+--------------------------------------------------------------------------------+
| GALLERY PREVIEW (Bento Grid)                                                    |
| - Badge: "Our Home"                                                             |
| - 4 images: Living Room (featured 2x2), Bedroom, Kitchen, Garden                |
| - Hover: Zoom icon, glass overlays with labels                                  |
| - CTA: View Full Gallery                                                        |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
| - Dark gradient background                                                      |
| - "Ready to Get Started?"                                                       |
| - Email card, phone/WhatsApp options                                            |
+--------------------------------------------------------------------------------+
```

### ABOUT PAGE (`/about`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient)                                                    |
| - Badge: "Licensed Adult Family Home"                                           |
| - H1: "About Brightway"                                                         |
| - CTAs: [Call Us Today] [Schedule a Visit]                                      |
| - Right: Glass card with logo + rose heart icon                                 |
+--------------------------------------------------------------------------------+
| STATS SECTION                                                                   |
| - 3 dark gradient cards: 24/7 Care, 3-4 Residents, 100% Person-Centered         |
+--------------------------------------------------------------------------------+
| WHO WE ARE (Two-column layout)                                                  |
| - Image with floating badges: Heart icon, Madison WI, Since 2024                |
| - Content: Our Story badge, paragraphs, quote callout                           |
| - Trust badges: Licensed, Family-Owned, Community-Focused                       |
+--------------------------------------------------------------------------------+
| OUR VALUES (4 cards)                                                            |
| - Compassion (Rose), Respect (Teal), Safety (Blue), Trust (Teal)                |
| - Numbered 01-04, icon circles, hover animations                                |
+--------------------------------------------------------------------------------+
| OUR COMMITMENT (Two-column layout)                                              |
| - Content: Our Promise badge, commitment cards                                  |
| - Image with floating badges: Shield, Star, 24/7                                |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

### SERVICES PAGE (`/services`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient)                                                    |
| - Badge: "Comprehensive Care Services"                                          |
| - H1: "Our Services"                                                            |
| - CTAs: [Call Us Today] [Schedule a Visit]                                      |
| - Right: Glass card + floating blue heart icon                                  |
+--------------------------------------------------------------------------------+
| STATS SECTION (3 dark cards)                                                    |
| - 24/7 Care, 3-4 Residents, 100% Person-Centered                                |
+--------------------------------------------------------------------------------+
| MAIN SERVICES (6 cards, 3-column grid)                                          |
| - ADL Support (Teal), Meals & Nutrition (Teal)                                  |
| - Medication Reminders (Blue), Safety Supervision (Blue)                        |
| - Mobility & Care (Rose), Respite Care (Rose)                                   |
| - Each: Gradient header, icon, feature checklist                                |
+--------------------------------------------------------------------------------+
| ADDITIONAL SERVICES (6 items, 3-column grid)                                    |
| - Housekeeping, Transportation, Social Activities                               |
| - Family Communication, Health Monitoring, Companionship                        |
+--------------------------------------------------------------------------------+
| PERSON-CENTERED CARE (Two-column layout)                                        |
| - Image with floating badges                                                    |
| - Content: Quote, checklist (alternating teal/rose)                             |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

### GALLERY PAGE (`/gallery`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient)                                                    |
| - Badge: "Our Home in Pictures"                                                 |
| - H1: "Photo Gallery"                                                           |
| - Tagline: "Comfort • Safety • Home"                                            |
| - CTAs: [Schedule a Tour] [Contact Us]                                          |
| - Right: Glass card with Images icon                                            |
+--------------------------------------------------------------------------------+
| GALLERY GRID                                                                    |
| - 5 images, responsive grid (first image 2x2 featured)                          |
| - Click opens lightbox modal                                                    |
| - Lightbox: Full-screen, arrow navigation, keyboard support                     |
+--------------------------------------------------------------------------------+
| PRIVACY NOTE                                                                    |
| - Shield icon + privacy disclaimer                                              |
+--------------------------------------------------------------------------------+
| FEATURES SECTION                                                                |
| - "A Place Designed for Comfort"                                                |
| - 8 feature pills (2x4 grid)                                                    |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

### CONTACT PAGE (`/contact`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient)                                                    |
| - Badge: "Get in Touch"                                                         |
| - H1: "Contact Us"                                                              |
| - CTAs: [Call Now] [WhatsApp]                                                   |
| - Right: Glass card + floating phone icon                                       |
+--------------------------------------------------------------------------------+
| CONTACT INFO CARDS (4 cards)                                                    |
| - Phone (Teal), Email (Blue), Address (Rose), Hours (Amber)                     |
| - Dark gradient backgrounds, clickable                                          |
+--------------------------------------------------------------------------------+
| CONTACT FORM & MAP (Two-column layout)                                          |
| Left: Contact form with validation (react-hook-form + zod)                      |
|   - Fields: Name, Phone, Email, Inquiry Type, Message                           |
|   - EmailJS integration (notification + auto-reply)                             |
|   - Success/error states                                                        |
| Right: Google Maps embed with floating badges                                   |
|   - Quick Actions card: WhatsApp, Call, Email                                   |
+--------------------------------------------------------------------------------+
| WHY CHOOSE US (3 cards)                                                         |
| - Home-Like Setting (Blue), 24/7 Availability (Teal), Person-Centered (Rose)    |
| - Trust indicator badge                                                         |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component with email card)                              |
+--------------------------------------------------------------------------------+
```

### FAQ PAGE (`/faq`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient, shorter height)                                    |
| - Badge: "Got Questions? We Have Answers"                                       |
| - H1: "Frequently Asked Questions"                                              |
| - Search bar with clear button                                                  |
+--------------------------------------------------------------------------------+
| CATEGORY FILTER                                                                 |
| - Pills: All, General, Services, Admission, Costs                               |
| - Active state: Teal gradient                                                   |
+--------------------------------------------------------------------------------+
| FAQ ACCORDION (10 questions)                                                    |
| - Each card: Numbered badge, category pill, question                            |
| - Expand/collapse with smooth animation                                         |
| - Colors rotate: Blue, Teal, Rose                                               |
| - Search filters in real-time                                                   |
+--------------------------------------------------------------------------------+
| STILL HAVE QUESTIONS CTA                                                        |
| - Dark gradient card                                                            |
| - CTAs: [Call Us Now] [Contact Form]                                            |
| - Decorative floating icons                                                     |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

### PRIVACY PAGE (`/privacy`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient, shorter height)                                    |
| - Badge: "Your Privacy Matters"                                                 |
| - H1: "Privacy Policy"                                                          |
| - Trust badges: Encrypted, Protected, Secure                                    |
+--------------------------------------------------------------------------------+
| SIDEBAR + CONTENT LAYOUT                                                        |
| Left Sidebar (sticky):                                                          |
|   - Table of contents with active state highlighting                            |
|   - Scroll-to-section navigation                                                |
| Right Content:                                                                  |
|   - 6 sections with cards                                                       |
|   - Each section: Icon, title, content list                                     |
|   - Colors: Blue, Teal, Rose (rotating)                                         |
+--------------------------------------------------------------------------------+
| SCROLL TO TOP BUTTON (floating)                                                 |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

### TERMS PAGE (`/terms`)

```
+--------------------------------------------------------------------------------+
| HERO SECTION (Dark Gradient, shorter height)                                    |
| - Badge: "Legal Documentation"                                                  |
| - H1: "Terms of Service"                                                        |
| - Trust badges                                                                  |
+--------------------------------------------------------------------------------+
| SIDEBAR + CONTENT LAYOUT                                                        |
| Left Sidebar (sticky):                                                          |
|   - 10 section links with active state                                          |
| Right Content:                                                                  |
|   - 10 legal sections                                                           |
|   - Acceptance, Services, Use, IP, Disclaimer, Liability                        |
|   - Links, Changes, Governing Law, Contact                                      |
|   - Colors: Blue, Teal, Rose (rotating)                                         |
+--------------------------------------------------------------------------------+
| SCROLL TO TOP BUTTON (floating)                                                 |
+--------------------------------------------------------------------------------+
| CTA SECTION (CTAPremium component)                                              |
+--------------------------------------------------------------------------------+
```

---

## Shared Components

### CTAPremium (`components/CTAPremium.tsx`)
- Dark gradient background with decorative blurs
- Customizable title with highlight word
- Phone/WhatsApp CTA buttons
- Optional email card
- Trust indicators

### Hero Pattern
All pages use consistent hero design:
- `hero-gradient` class (dark blue gradient)
- Animated blur circles
- Floating particles
- Glass morphism cards
- Wave SVG divider

### Card Patterns
- Premium cards with gradient top bars
- Hover animations (lift, shadow, glow)
- Floating icon badges
- Numbered variants
