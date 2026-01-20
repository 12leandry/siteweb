# Landing Page Component Architecture

## Page Structure

```
Landing (pages/Landing.tsx)
│
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   ├── Mobile Menu Button
│   └── CTA Button
│
├── Hero
│   ├── Background Gradient
│   ├── Headline & Subheadline
│   ├── CTA Buttons (2)
│   ├── Stats Row (4 items)
│   │   ├── Growth
│   │   ├── Reach
│   │   ├── Projects
│   │   └── Retention
│   └── Scroll Indicator
│
├── Services
│   └── Service Cards Grid (6 items)
│       ├── Web Development
│       ├── E-commerce
│       ├── Digital Marketing
│       ├── SEO Optimization
│       ├── UI/UX Design
│       └── Mobile Apps
│           └── Each Card
│               ├── Icon
│               ├── Category
│               ├── Title
│               ├── Description
│               └── Learn More Link
│
├── Portfolio
│   └── Case Study Cards Grid (6 items)
│       ├── E-Commerce Revenue Growth
│       ├── SaaS Platform Launch
│       ├── Digital Marketing Campaign
│       ├── Mobile App Development
│       ├── Content & SEO Strategy
│       └── Brand Redesign & UX
│           └── Each Card
│               ├── Gradient Background
│               ├── Result/Metric
│               ├── Company Name
│               ├── Description
│               ├── 3 Performance Metrics
│               └── View Case Study Link
│
├── WhyChooseUs
│   ├── Left Section
│   │   ├── Headline
│   │   ├── Description
│   │   └── 2 Key Stats
│   │       ├── 97% Satisfaction
│   │       └── 610+ Projects
│   └── Right Section - Feature Cards (4)
│       ├── Expertise Card
│       ├── Performance Card
│       ├── Support Card
│       └── Transparency Card
│           └── Each Card
│               ├── Icon
│               ├── Title
│               └── Description
│
├── Stats
│   └── Statistics Grid (4 items)
│       ├── Experience (with counter animation)
│       ├── Satisfaction (with counter animation)
│       ├── Projects (with counter animation)
│       └── Support (with counter animation)
│           └── Each Stat
│               ├── Icon
│               ├── Number (animated)
│               └── Label
│
├── Testimonials
│   ├── Testimonial Card
│   │   ├── Star Rating
│   │   ├── Quote Text
│   │   ├── Client Avatar
│   │   ├── Client Name
│   │   └── Company Name
│   ├── Navigation Arrows
│   │   ├── Previous Button
│   │   └── Next Button
│   └── Pagination Dots (4)
│
├── ContactForm
│   ├── Headline
│   ├── Form Inputs
│   │   ├── Name (required)
│   │   ├── Email (required)
│   │   ├── Company (optional)
│   │   └── Message (required)
│   ├── Submit Button
│   ├── Success Message (conditional)
│   └── Error Messages (conditional)
│
├── ContactFormExtended (alternative)
│   ├── All ContactForm features plus:
│   ├── Phone Field (optional)
│   ├── Subject Field (optional)
│   ├── Enhanced Validation
│   └── Per-field Error Display
│
├── CTASection
│   ├── Gradient Background
│   ├── Animated Background Shapes
│   ├── Headline
│   ├── Description
│   └── CTA Buttons (2)
│       ├── Primary Button
│       └── Outline Button
│
└── Footer
    ├── Logo & Tagline
    ├── Link Columns (3)
    │   ├── Services Links (6)
    │   ├── Company Links (6)
    │   └── Legal Links (4)
    ├── Social Icons (4)
    │   ├── Facebook
    │   ├── Twitter
    │   ├── LinkedIn
    │   └── Instagram
    ├── Divider
    └── Copyright
```

## Component Hierarchy

```
Landing
├─ Navbar
├─ Hero
├─ Services
├─ Portfolio
├─ WhyChooseUs
├─ Stats
├─ Testimonials
├─ ContactForm (or ContactFormExtended)
├─ CTASection
└─ Footer
```

## Data Flow

```
User Interaction
│
├── Navbar
│   └── onClick → Scroll to section or navigate
│
├── Hero
│   ├── CTA Buttons → Navigate or scroll
│   └── Scroll Indicator → Scroll to next section
│
├── Services
│   └── Learn More Links → Navigate to service details
│
├── Portfolio
│   └── View Case Study → Navigate to case study
│
├── Stats
│   └── Counter Animation → onScroll visibility
│
├── Testimonials
│   ├── Previous/Next → Change testimonial index
│   └── Pagination Dots → Jump to testimonial
│
├── ContactForm
│   ├── Form Inputs → onChange update state
│   ├── Submit Button → onSubmit validation & API call
│   └── Success/Error → Conditional display
│
└── Footer
    └── Links → Navigate to pages
```

## State Management

```
Navbar
├── isOpen (boolean) - Mobile menu state
└── isScrolled (boolean) - Scroll detection

Hero
├── isVisible (boolean) - Animation trigger

Services
└── visibleCards (array) - Which cards are visible

Portfolio
└── visibleCards (array) - Which cards are visible

Stats
├── counts (object) - Counter values
└── isVisible (boolean) - Animation trigger

Testimonials
└── currentIndex (number) - Current slide

ContactForm
├── formData (object) - Form input values
├── submitted (boolean) - Form submitted state
└── loading (boolean) - Submission in progress

ContactFormExtended
├── formData (object) - Form input values
├── errors (object) - Validation errors
├── submitted (boolean) - Form submitted state
└── loading (boolean) - Submission in progress
```

## Styling Layers

```
Base Styles (Tailwind CSS)
│
├── Colors
│   ├── text-[#006080] (Primary text)
│   ├── text-[#FF4D4D] (Accent text)
│   ├── bg-[#006080] (Primary background)
│   ├── bg-[#FF4D4D] (Accent background)
│   └── Gray scale (text, borders, backgrounds)
│
├── Layout
│   ├── Responsive grid (grid-cols-1, md:grid-cols-2, lg:grid-cols-3)
│   ├── Flexbox (flex, justify-between, items-center)
│   ├── Spacing (px, py, mb, mt, etc.)
│   └── Max-width containers (max-w-7xl, max-w-4xl)
│
├── Typography
│   ├── Font family (Inter)
│   ├── Font size (text-sm, text-lg, text-5xl, etc.)
│   ├── Font weight (font-bold, font-semibold, font-normal)
│   └── Line height (leading-tight, leading-relaxed)
│
├── Effects
│   ├── Shadows (shadow-lg, shadow-2xl)
│   ├── Borders (border, rounded-lg, etc.)
│   ├── Opacity (opacity-50, opacity-0)
│   └── Transforms (transform, hover:scale-105, etc.)
│
└── Animations (CSS in animations.css)
    ├── fadeUp
    ├── float
    ├── scaleIn
    ├── slideInLeft
    ├── slideInRight
    └── pulseGlow
```

## Responsive Design Breakpoints

```
Mobile (< 768px)
│
├── Navbar
│   └── Hamburger menu visible
│       └── Mobile navigation menu
│
├── Hero
│   ├── Single column
│   ├── Smaller text
│   └── 2x2 stats grid
│
├── Services
│   └── Single column cards
│
├── Portfolio
│   └── Single column cards
│
├── WhyChooseUs
│   └── Stacked (left above right)
│
├── Stats
│   └── 2x2 grid
│
├── Testimonials
│   └── Full-width card
│
├── ContactForm
│   └── Single column form
│
└── Footer
    └── Single column layout

Tablet (768px - 1024px)
│
├── Navbar
│   └── Full navigation visible
│
├── Services
│   └── 2 column grid
│
├── Portfolio
│   └── 2 column grid
│
├── WhyChooseUs
│   └── Two columns side-by-side
│
├── Stats
│   └── 2x2 grid
│
├── ContactForm
│   └── 2 column form
│
└── Footer
    └── 3 column layout

Desktop (> 1024px)
│
├── Navbar
│   └── Full features
│
├── Services
│   └── 3 column grid
│
├── Portfolio
│   └── 3 column grid
│
├── WhyChooseUs
│   └── 50/50 split
│
├── Stats
│   └── 4 column layout
│
├── Footer
│   └── 5 column layout
```

## Animation Flow

```
Page Load
│
├── Hero
│   └── On mount: fade-in animations
│       ├── Headline (immediate)
│       ├── Subheadline (100ms delay)
│       ├── CTA Buttons (200ms delay)
│       └── Stats (staggered 100ms each)
│
├── Services
│   └── On scroll: fade-up animations
│       └── Cards stagger in order
│
├── Portfolio
│   └── On scroll: fade-up animations
│       └── Cards stagger in order
│
├── Stats
│   └── On scroll: counter animations
│       ├── Experience (50ms interval)
│       ├── Satisfaction (20ms interval)
│       ├── Projects (5ms interval)
│       └── Support (50ms interval)
│
├── Continuous Animations
│   ├── Hero background shapes (float animation)
│   ├── CTA section shapes (float animation)
│   └── Scroll indicator arrow (bounce animation)
│
└── Hover Animations
    ├── Cards (scale-up on hover)
    ├── Buttons (scale-up on hover)
    ├── Links (color change on hover)
    └── Icons (smooth transitions)
```

## Form Validation Flow

```
User Input
│
├── onChange Handler
│   ├── Update formData state
│   └── Clear error for that field
│
└── On Submit
    │
    ├── Client-Side Validation
    │   ├── validateContactForm()
    │   ├── Check required fields
    │   ├── Check email format
    │   ├── Check message length
    │   ├── Check phone format (if provided)
    │   └── If errors: Display per-field messages
    │
    └── If Valid: API Submission
        │
        ├── sanitizeInput() for each field
        ├── submitContactForm()
        │   ├── POST to /api/contact
        │   ├── Include CSRF token
        │   └── Handle response
        │
        ├── Success Path
        │   ├── Show success message
        │   ├── Reset form
        │   └── Auto-hide message (5s)
        │
        └── Error Path
            ├── Show error message
            ├── Keep form data
            └── Allow retry
```

## Performance Optimizations

```
Code Splitting
└── Each component is separate

Lazy Loading
├── Intersection Observer for animations
└── Images with loading="lazy"

CSS Animations
├── No JavaScript animations
├── Hardware accelerated
└── 60fps performance

Event Delegation
├── Single scroll listener
└── Multiple animation triggers

Memory Management
├── Cleanup observers on unmount
├── Remove event listeners
└── Clear timeouts
```

## Security Flow

```
User Input (ContactForm)
│
├── Client-Side
│   ├── Type validation (TypeScript)
│   ├── Format validation (email, phone)
│   ├── Input sanitization (remove HTML tags)
│   └── Length limits
│
└── Server-Side
    ├── CSRF token validation
    ├── Laravel validation rules
    ├── Input sanitization
    ├── XSS prevention
    └── SQL injection prevention
```

---

This architecture provides:
- ✅ Modular components
- ✅ Clear data flow
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Form validation
- ✅ Security
- ✅ Performance
- ✅ Accessibility
