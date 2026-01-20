# Component Documentation

Complete reference for all landing page components, their props, and usage examples.

## Table of Contents
1. [Layout Components](#layout-components)
2. [Section Components](#section-components)
3. [Form Components](#form-components)
4. [Utility Components](#utility-components)
5. [Hooks](#hooks)
6. [Utilities](#utilities)

---

## Layout Components

### Navbar
**File:** `components/landing/Navbar.tsx`

Sticky navigation bar with mobile menu and scroll-based styling changes.

**Props:** None (self-contained)

**Features:**
- Fixed positioning with scroll detection
- Mobile hamburger menu
- Responsive design
- Smooth transitions

**Usage:**
```tsx
import Navbar from '@/components/landing/Navbar';

<Navbar />
```

---

## Section Components

### Hero
**File:** `components/landing/Hero.tsx`

Full-screen hero section with headline, CTA buttons, and statistics.

**Props:** None

**Features:**
- Full-screen height
- Gradient background
- Animated background elements
- 4 statistics with staggered animations
- Scroll indicator arrow
- Responsive text sizing

**Usage:**
```tsx
import Hero from '@/components/landing/Hero';

<Hero />
```

**Customization:**
```tsx
// Edit headline in component
<h1 className="...">Multipliez vos <span>ventes</span></h1>

// Edit CTA button text
<button>Commencer maintenant</button>

// Edit stats
const stats = [
    { value: '+178%', label: 'Growth' },
    // ...
];
```

---

### Services
**File:** `components/landing/Services.tsx`

Grid of 6 service cards with scroll animations and descriptions.

**Props:** None

**Features:**
- 6 service cards
- Color-coded cards
- Emoji icons
- Scroll animation on each card
- Learn more links
- Responsive grid layout

**Usage:**
```tsx
import Services from '@/components/landing/Services';

<Services />
```

**Customization:**
```tsx
// Edit services array in component
const services = [
    {
        title: 'Web Development',
        category: 'Development',
        description: '...',
        color: 'bg-blue-500',
        icon: '🌐',
    },
    // ...
];
```

---

### Portfolio
**File:** `components/landing/Portfolio.tsx`

Grid of case studies with metrics and results.

**Props:** None

**Features:**
- 6 case studies displayed
- Result/metric highlighting
- Category labels
- Performance metrics (3 per card)
- Scroll-triggered animations
- Gradient colored backgrounds

**Usage:**
```tsx
import Portfolio from '@/components/landing/Portfolio';

<Portfolio />
```

**Case Study Structure:**
```tsx
{
    title: 'Case Study Title',
    company: 'Company Name',
    result: '+320% Sales',
    description: 'Description of work',
    category: 'Category',
    metrics: [
        { label: 'Metric Name', value: 'Value' },
        // ...
    ],
    color: 'from-blue-500 to-cyan-500',
}
```

---

### WhyChooseUs
**File:** `components/landing/WhyChooseUs.tsx`

Split layout section with benefits and feature cards.

**Props:** None

**Features:**
- Split two-column layout
- Left side: Benefits and stats
- Right side: 4 feature cards with icons
- Icon support via lucide-react
- Scroll animations on entry

**Usage:**
```tsx
import WhyChooseUs from '@/components/landing/WhyChooseUs';

<WhyChooseUs />
```

**Features Array:**
```tsx
const features = [
    {
        icon: IconComponent,
        title: 'Feature Title',
        description: 'Feature description',
    },
    // ...
];
```

---

### Stats
**File:** `components/landing/Stats.tsx`

Large statistics section with animated counters.

**Props:** None

**Features:**
- 4 statistics displayed
- Animated counters from 0 to target
- Gradient background
- Icon support
- Scroll-triggered animation start

**Usage:**
```tsx
import Stats from '@/components/landing/Stats';

<Stats />
```

**Customization:**
```tsx
const stats = [
    {
        icon: IconComponent,
        value: `${count}+`,
        label: 'Label',
    },
    // ...
];
```

---

### Testimonials
**File:** `components/landing/Testimonials.tsx`

Carousel of client testimonials with ratings.

**Props:** None

**Features:**
- Carousel navigation
- Star ratings display
- Client avatar and company info
- Pagination dots
- Previous/Next arrows

**Usage:**
```tsx
import Testimonials from '@/components/landing/Testimonials';

<Testimonials />
```

**Testimonial Structure:**
```tsx
{
    quote: 'Client testimonial text',
    rating: 5,
    author: 'Client Name',
    company: 'Company Name',
    avatar: '👩‍💼',
}
```

---

### CTASection
**File:** `components/landing/CTASection.tsx`

Call-to-action section with gradient background.

**Props:** None

**Features:**
- Gradient background (teal to coral)
- Animated background shapes
- Two CTA buttons
- Scroll-triggered entrance animation

**Usage:**
```tsx
import CTASection from '@/components/landing/CTASection';

<CTASection />
```

---

### Footer
**File:** `components/landing/Footer.tsx`

Multi-column footer with links and social icons.

**Props:** None

**Features:**
- Logo and tagline
- 3 link columns (Services, Company, Legal)
- Social media icons (4 icons)
- Copyright information
- Dynamic year calculation

**Usage:**
```tsx
import Footer from '@/components/landing/Footer';

<Footer />
```

---

## Form Components

### ContactForm
**File:** `components/landing/ContactForm.tsx`

Simple contact form with basic validation.

**Props:** None

**Features:**
- 4 fields: Name, Email, Company, Message
- Basic form validation
- Loading state
- Success message
- Error handling

**Usage:**
```tsx
import ContactForm from '@/components/landing/ContactForm';

<ContactForm />
```

---

### ContactFormExtended
**File:** `components/landing/ContactFormExtended.tsx`

Enhanced contact form with additional fields and validation.

**Props:**
```typescript
interface ContactFormExtendedProps {
    showPhoneField?: boolean;      // Show phone input
    showSubjectField?: boolean;    // Show subject input
    submitButtonText?: string;     // Custom button text
}
```

**Features:**
- All ContactForm features
- Optional phone field
- Optional subject field
- Advanced validation
- Per-field error messages
- Sanitized input
- Form data utilities

**Usage:**
```tsx
import ContactFormExtended from '@/components/landing/ContactFormExtended';

<ContactFormExtended 
    showPhoneField={true}
    showSubjectField={true}
    submitButtonText="Submit Inquiry"
/>
```

---

## Utility Components

### ScrollAnimations
**File:** `components/landing/ScrollAnimations.tsx`

Reusable scroll animation wrapper components.

**Components:**

#### ScrollFadeUp
```tsx
<ScrollFadeUp delay={100}>
    <div>Content fades up with 100ms delay</div>
</ScrollFadeUp>
```

#### ScrollScaleIn
```tsx
<ScrollScaleIn delay={200}>
    <div>Content scales in from 95% to 100%</div>
</ScrollScaleIn>
```

#### ScrollSlideLeft
```tsx
<ScrollSlideLeft delay={150}>
    <div>Content slides in from left</div>
</ScrollSlideLeft>
```

#### ScrollSlideRight
```tsx
<ScrollSlideRight delay={150}>
    <div>Content slides in from right</div>
</ScrollSlideRight>
```

**Props:**
```typescript
interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;  // in milliseconds
}
```

---

## Hooks

### useScrollAnimation
**File:** `hooks/useScrollAnimation.ts`

Custom hook for intersection observer-based scroll animations.

**Usage:**
```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function MyComponent() {
    const { ref, isVisible } = useScrollAnimation({
        threshold: 0.1,
        margin: '0px'
    });

    return (
        <div
            ref={ref}
            className={isVisible ? 'opacity-100' : 'opacity-0'}
        >
            Content
        </div>
    );
}
```

**Options:**
```typescript
interface UseScrollAnimationOptions {
    threshold?: number;  // 0-1, default 0.1
    margin?: string;     // CSS root margin, default '0px'
}
```

---

## Utilities

### contactFormUtils
**File:** `utils/contactFormUtils.ts`

Form validation and submission utilities.

**Exported Functions:**

#### validateContactForm
```tsx
const errors = validateContactForm(formData);
if (Object.keys(errors).length > 0) {
    // Handle validation errors
}
```

#### formatPhoneNumber
```tsx
const formatted = formatPhoneNumber('5551234567');
// Output: "(555) 123-4567"
```

#### sanitizeInput
```tsx
const clean = sanitizeInput(userInput);
// Removes angle brackets, limits to 1000 chars
```

#### submitContactForm
```tsx
const result = await submitContactForm(formData);
if (result.success) {
    // Success handling
}
```

**Types:**
```typescript
interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject?: string;
    message: string;
}

interface ValidationError {
    [key: string]: string;
}
```

---

## Integration Example

Complete page combining all components:

```tsx
import CTASection from '@/components/landing/CTASection';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import Portfolio from '@/components/landing/Portfolio';
import Services from '@/components/landing/Services';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import WhyChooseUs from '@/components/landing/WhyChooseUs';

export default function Landing() {
    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Stats />
            <Testimonials />
            <ContactForm />
            <CTASection />
            <Footer />
        </div>
    );
}
```

---

## Styling & Customization

### Available Tailwind Classes
- Text colors: `text-[#006080]`, `text-[#FF4D4D]`
- Background colors: `bg-[#006080]`, `bg-[#FF4D4D]`
- Animations: `animate-fade-up`, `animate-float`, `animate-scale-in`
- Custom delays: `animation-delay-100`, `animation-delay-200`, etc.

### Theming
Edit `tailwind.config.js` to customize:
```javascript
theme: {
    extend: {
        colors: {
            'teal': {
                600: '#006080',
                700: '#004a5f',
            },
            'coral': '#FF4D4D',
        },
    },
}
```

### Animation Timing
Adjust in `resources/css/animations.css`:
```css
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);  /* Adjust distance */
    }
}

.animate-fade-up {
    animation: fadeUp 0.6s ease-out forwards;  /* Adjust duration */
}
```

---

## TypeScript Support

All components are fully typed with TypeScript. Props and data structures are documented with interfaces.

```typescript
// Ensure strict TypeScript checking
// in tsconfig.json
{
    "strict": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
}
```

---

## Performance Tips

1. **Lazy Load Heavy Sections:**
   ```tsx
   const Portfolio = React.lazy(() => import('./Portfolio'));
   ```

2. **Memoize Components:**
   ```tsx
   const OptimizedComponent = React.memo(Component);
   ```

3. **Use CSS Animations Over JS:**
   All animations use CSS for better performance

4. **Defer Non-Critical Images:**
   ```tsx
   <img loading="lazy" src="..." />
   ```

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Version History

- **v1.0** (January 2026) - Initial release with all components

---

## Support

For component-specific issues or enhancements, refer to individual component files for implementation details.
