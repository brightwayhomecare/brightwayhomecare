# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brightway Home Care LLC is an Adult Family Home in Madison, Wisconsin. This is a Next.js 14 marketing website with Tailwind CSS.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run lint       # Run ESLint
```

## Architecture

### Key Files
- `app/layout.tsx` - Root layout with Header/Footer, metadata, fonts
- `app/globals.css` - Design system: CSS variables, component classes, background patterns
- `lib/config.ts` - Centralized business info (phone, email, address) with env overrides
- `tailwind.config.ts` - Extended brand colors and fonts

### Pages
All pages use App Router (`app/*/page.tsx`): Home, About, Services, Gallery, Contact, FAQ, Privacy, Terms

### Components
- `components/Header.tsx` - Navigation with mobile menu
- `components/Footer.tsx` - Footer with contact info and links
- `components/CTAPremium.tsx` - Reusable call-to-action section
- `components/ui/*` - shadcn/ui components (Button, Card, Dialog, etc.)

## Brand Colors (STRICT)

Only use these colors across all pages:
- **Blue 800** (#1e3a8a) - Primary: headings, buttons, nav, footer
- **Teal 300/400** (#5eead4/#2dd4bf) - Accent: icons, highlights, dividers
- **Rose 400/500** - Warm accent for care-focused elements
- **White** - Base backgrounds
- **Grays** - Supporting text

**Do NOT use**: violet, purple, emerald, amber, cyan, indigo, pink, red

## CSS Utilities (defined in globals.css)

```css
.btn-primary      /* Blue-800 bg, white text, rounded-full */
.btn-secondary    /* White bg, blue-800 border */
.btn-accent       /* Teal-400 bg */
.section-padding  /* py-20 md:py-28 px-4 md:px-8 lg:px-16 */
.container-max    /* max-w-7xl mx-auto px-4 md:px-6 */
.section-title    /* 4xl/5xl bold blue-800 */
.card-hover       /* Lift + shadow on hover */
.feature-icon     /* Teal gradient icon container */
```

## Environment Variables

Copy `.env.example` to `.env.local`. Key variables:
- `NEXT_PUBLIC_EMAILJS_*` - EmailJS for contact form
- `NEXT_PUBLIC_PHONE/EMAIL/ADDRESS` - Business contact info (overrides lib/config.ts)

## Documentation

Project specs in `docs/markdown/`:
- `theme_guide.md` - Brand colors, typography, UI style
- `project_information.md` - Business summary, audience
- `Project_guidance.md` - Implementation rules, copywriting
