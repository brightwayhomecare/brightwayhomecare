# Brightway Home Care LLC — Theme Guide

## Brand Colors

### Primary Palette (STRICT)
Only these colors should be used across the website:

| Color | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| Blue 800 | `blue-800` | #1e3a8a | Primary: headings, buttons, nav, footer |
| Blue 700 | `blue-700` | #1d4ed8 | Hero gradients |
| Blue 600 | `blue-600` | #2563eb | Secondary accents |
| Teal 400 | `teal-400` | #2dd4bf | Main accent: icons, CTAs, highlights |
| Teal 300 | `teal-300` | #5eead4 | Light accent: hero text glow |
| Rose 400 | `rose-400` | #fb7185 | Warm accent: care-focused elements |
| Rose 500 | `rose-500` | #f43f5e | Warm accent variation |
| White | `white` | #ffffff | Base backgrounds |
| Gray 600 | `gray-600` | #4b5563 | Body text |
| Gray 100 | `gray-100` | #f3f4f6 | Light backgrounds |

### Prohibited Colors
Do NOT use these colors anywhere:
- Violet / Purple
- Emerald / Green (except WhatsApp button)
- Amber / Orange (except Hours card)
- Cyan
- Indigo
- Pink (use Rose instead)
- Red (except form errors)

### Gradient Patterns

```css
/* Hero gradient (dark) */
.hero-gradient {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%);
}

/* Teal accent gradient */
.from-teal-400.to-teal-500 {
  background: linear-gradient(to bottom right, #2dd4bf, #14b8a6);
}

/* Blue accent gradient */
.from-blue-600.to-blue-800 {
  background: linear-gradient(to bottom right, #2563eb, #1e3a8a);
}

/* Rose accent gradient */
.from-rose-400.to-rose-500 {
  background: linear-gradient(to bottom right, #fb7185, #f43f5e);
}
```

### Color Rotation Pattern
When multiple cards/sections need different colors, rotate in this order:
1. Blue (800/600)
2. Teal (400/300)
3. Rose (400/500)

---

## Typography

### Font Families
- **Headings:** Poppins (SemiBold 600, Bold 700, ExtraBold 800)
- **Body:** Inter (Regular 400, Medium 500, SemiBold 600)

### Font Loading
Fonts are loaded via Google Fonts in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
```

### Font Sizing Scale

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| H1 | 54-60px | 36-40px | Bold 700 |
| H2 | 36-40px | 28-32px | Bold 700 |
| H3 | 20-24px | 18-20px | Bold 700 |
| Body | 16-18px | 16px | Regular 400 |
| Small | 14px | 14px | Regular 400 |
| Badge | 12-14px | 12px | Medium 500 |

### Text Colors
- Headings: `text-blue-800`
- Body: `text-gray-600`
- Light/Muted: `text-gray-500`
- Hero text: `text-white`, `text-blue-100`
- Accent text: `text-teal-300`, `text-rose-500`

---

## UI Style

### Design Principles
- Clean and modern aesthetic
- Premium feel with glass morphism
- Generous white space
- Consistent rounded corners
- Subtle shadows and depth
- Micro-interactions on hover

### Spacing
- Section padding: `py-20 md:py-28 px-4 md:px-8 lg:px-16`
- Container max: `max-w-7xl mx-auto`
- Card padding: `p-6` to `p-8`
- Gap between items: `gap-4` to `gap-8`

### Border Radius
| Size | Class | Pixels |
|------|-------|--------|
| Small | `rounded-lg` | 8px |
| Medium | `rounded-xl` | 12px |
| Large | `rounded-2xl` | 16px |
| XL | `rounded-3xl` | 24px |
| Full | `rounded-full` | 9999px |

### Shadows
- Light: `shadow-md`
- Medium: `shadow-lg`
- Heavy: `shadow-xl`
- Intense: `shadow-2xl`
- Colored glow: `shadow-teal-200`, `shadow-rose-200`

---

## Components

### Primary Button
```jsx
<Button className="btn-primary">
  {/* bg-blue-800 text-white px-8 py-4 rounded-full font-semibold
      hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 */}
</Button>
```

### Secondary Button
```jsx
<Button className="btn-secondary">
  {/* bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-full */}
</Button>
```

### Accent Button
```jsx
<Button className="btn-accent">
  {/* bg-teal-400 text-blue-900 px-8 py-4 rounded-full font-semibold
      hover:bg-teal-300 shadow-lg hover:shadow-xl */}
</Button>
```

### Badge
```jsx
<Badge className="bg-teal-100 text-teal-700 border-0 px-4 py-2">
  <Icon className="w-4 h-4 mr-2" />
  Badge Text
</Badge>
```

### Premium Card
```jsx
<Card className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
  <div className="h-1.5 bg-gradient-to-r from-teal-400 to-teal-500" />
  <CardContent className="p-8">
    {/* Card content */}
  </CardContent>
</Card>
```

### Icon Container
```jsx
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500
                flex items-center justify-center shadow-lg">
  <Icon className="w-8 h-8 text-white" />
</div>
```

### Glass Card (Hero)
```jsx
<div className="bg-white/10 backdrop-blur-md border border-white/20
                rounded-3xl shadow-2xl">
  {/* Content */}
</div>
```

---

## Animation Classes

### Defined in globals.css
```css
.animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
.animate-float { animation: float 6s ease-in-out infinite; }
```

### Hover Transitions
- Scale: `hover:scale-105`, `hover:scale-110`
- Lift: `hover:-translate-y-1`, `hover:-translate-y-2`
- Rotate: `hover:rotate-3`
- Shadow: `hover:shadow-xl`, `hover:shadow-2xl`
- All with: `transition-all duration-300` or `duration-500`

---

## Photography Guidelines

### Recommended Images
- Home exterior (bright daylight, welcoming)
- Living room (comfortable, clean)
- Kitchen/dining (homey atmosphere)
- Bedroom (peaceful, private)
- Garden/outdoor space
- Caregiver with resident (professional, with consent)

### Image Style
- Bright, natural lighting
- Warm, inviting atmosphere
- Clean and uncluttered spaces
- Professional quality

### Avoid
- Dark or shadowy images
- Crowded or messy spaces
- Low-quality photos
- Resident faces without documented consent

---

## Tone of Voice

### Communication Style
- Calm and reassuring
- Respectful and dignified
- Professional yet warm
- Trust-building
- Clear and simple

### Good Examples
- "Safe and supportive home environment"
- "24/7 supervision and care"
- "Person-centered approach"
- "Schedule a tour today"
- "Compassionate, reliable care"

### Avoid
- Clinical or institutional language
- Medical claims or promises
- Overly casual language
- Complex jargon
- Pressure tactics
