# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brightway Home Care LLC is an Adult Family Home in Madison, Wisconsin. This repository contains:
1. **Marketing Brochure** (`brochure.html`) - Static HTML tri-fold print brochure
2. **Website** (`website/`) - Next.js + Tailwind CSS static website

## Website (Next.js)

### Commands
```bash
cd website
npm install        # Install dependencies
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Structure
```
website/
├── app/
│   ├── layout.tsx        # Root layout with Header/Footer
│   ├── page.tsx          # Home page
│   ├── about/page.tsx    # About page
│   ├── services/page.tsx # Services page
│   ├── gallery/page.tsx  # Gallery page
│   └── contact/page.tsx  # Contact page with form
├── components/
│   ├── Header.tsx        # Navigation with mobile menu
│   └── Footer.tsx        # Footer with contact info
└── tailwind.config.ts    # Brand colors defined here
```

### Brand Colors (Tailwind)
- `blue-800`: #1e40af (primary)
- `teal-300`: #5eead4 (accent)

### CSS Utilities
- `.btn-primary` / `.btn-secondary` - Button styles
- `.section-padding` - Consistent section spacing
- `.container-max` - Max-width container

## Brochure (Static HTML)

**File:** `brochure.html`

**To view:** Open in browser | **To print:** Ctrl+P / Cmd+P (outside first, flip on long edge)

**Layout:** Tri-fold, 11" x 8.5" landscape, CSS variables in `:root` for theming

## Documentation

Project specs are in `docs/markdown/`:
- `ascii_and_pages_design.md` - Page wireframes
- `theme_guide.md` - Brand colors, typography, UI style
- `project_information.md` - Business summary, audience, features
- `Project_guidance.md` - Implementation rules, copywriting, checklist
