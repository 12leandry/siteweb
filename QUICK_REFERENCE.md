# Quick Reference Guide

Fast lookup for common tasks and configurations.

## File Locations

| Component | Path |
|-----------|------|
| Landing Page | `resources/js/pages/Landing.tsx` |
| Navbar | `resources/js/components/landing/Navbar.tsx` |
| Hero | `resources/js/components/landing/Hero.tsx` |
| Services | `resources/js/components/landing/Services.tsx` |
| Portfolio | `resources/js/components/landing/Portfolio.tsx` |
| Why Choose Us | `resources/js/components/landing/WhyChooseUs.tsx` |
| Stats | `resources/js/components/landing/Stats.tsx` |
| Testimonials | `resources/js/components/landing/Testimonials.tsx` |
| Contact Form | `resources/js/components/landing/ContactForm.tsx` |
| Contact Form Extended | `resources/js/components/landing/ContactFormExtended.tsx` |
| CTA Section | `resources/js/components/landing/CTASection.tsx` |
| Footer | `resources/js/components/landing/Footer.tsx` |
| Animations | `resources/js/components/landing/ScrollAnimations.tsx` |
| Hooks | `resources/js/hooks/useScrollAnimation.ts` |
| Utils | `resources/js/utils/contactFormUtils.ts` |
| Styles | `resources/css/app.css` |
| Animations CSS | `resources/css/animations.css` |
| Config | `tailwind.config.js` |
| Routes | `routes/web.php` |
| Contact Controller | `app/Http/Controllers/ContactFormController.php` |

## Color System

```
Primary (Teal):
  - Main: #006080
  - Dark: #004a5f

Accent (Coral):
  - Main: #FF4D4D
  - Dark: #E63D3D

Grays:
  - 50: #F9FAFB
  - 100: #F3F4F6
  - 600: #4B5563
  - 900: #111827
```

## Common Tasks

### Change Primary Color
1. Edit `tailwind.config.js`
   ```javascript
   colors: {
       'teal': {
           600: '#NEW_COLOR',
       }
   }
   ```
2. Edit `resources/css/animations.css`
3. Search and replace in components
4. Rebuild: `npm run build`

### Change Accent Color
1. Edit `tailwind.config.js`
   ```javascript
   colors: {
       'coral': '#NEW_COLOR',
   }
   ```
2. Search and replace `#FF4D4D` with new color
3. Rebuild: `npm run build`

### Add New Service
Edit `components/landing/Services.tsx`:
```tsx
const services = [
    {
        title: 'New Service',
        category: 'Category',
        description: 'Description',
        color: 'bg-color-500',
        icon: '📝',
    },
    // ...
];
```

### Add New Testimonial
Edit `components/landing/Testimonials.tsx`:
```tsx
const testimonials = [
    {
        quote: 'Great service!',
        rating: 5,
        author: 'John Doe',
        company: 'Company',
        avatar: '👨‍💼',
    },
    // ...
];
```

### Add New Portfolio Item
Edit `components/landing/Portfolio.tsx`:
```tsx
const caseStudies = [
    {
        title: 'Project Title',
        company: 'Company',
        result: '+300%',
        description: 'Description',
        category: 'Category',
        metrics: [/* ... */],
        color: 'from-color-500 to-color-500',
    },
    // ...
];
```

### Change Navbar Links
Edit `components/landing/Navbar.tsx`:
```tsx
const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    // ...
];
```

### Update Footer Links
Edit `components/landing/Footer.tsx`:
```tsx
const footerLinks = {
    Services: ['Link 1', 'Link 2'],
    Company: ['Link 1', 'Link 2'],
    Legal: ['Link 1', 'Link 2'],
};
```

### Change Animation Speed
Edit `resources/css/animations.css`:
```css
.animate-fade-up {
    animation: fadeUp 0.6s ease-out forwards;
    /* Change 0.6s to your desired duration */
}
```

### Change Animation Delay
In components:
```tsx
style={{ animationDelay: `${index * 100}ms` }}
// Change 100 to adjust delay between items
```

### Enable Form Email Notifications
1. Configure `.env` with mail settings
2. Edit `app/Http/Controllers/ContactFormController.php`
3. Uncomment Mail::send() calls
4. Create email templates in `resources/views/emails/`

## Build & Deployment Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# TypeScript check
npm run types

# Lint code
npm run lint

# Format code
npm run format

# Start Laravel server
php artisan serve

# Run migrations
php artisan migrate
```

## Key Imports

```typescript
// Components
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';

// Icons (lucide-react)
import { ChevronDown, Menu, X } from 'lucide-react';

// Hooks
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Utilities
import { validateContactForm } from '@/utils/contactFormUtils';
```

## Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px
```

Use in Tailwind:
```tsx
className="hidden md:block"  // Hidden on mobile, shown on tablet+
className="md:grid-cols-2"    // 1 col on mobile, 2 on tablet+
className="text-sm md:text-lg" // Responsive text size
```

## Animation Classes

```css
.animate-fade-up       /* Fade in with upward movement */
.animate-float         /* Floating effect */
.animate-scale-in      /* Scale from 95% to 100% */
.animate-slide-in-left /* Slide in from left */
.animate-slide-in-right /* Slide in from right */
.animate-pulse-glow    /* Pulsing glow effect */
```

## CSS Classes for Colors

```tsx
// Text
text-[#006080]    // Primary text
text-[#FF4D4D]    // Accent text

// Background
bg-[#006080]      // Primary background
bg-[#FF4D4D]      // Accent background
bg-gray-50        // Light background

// Borders
border-gray-300   // Light border

// Hover states
hover:bg-[#004a5f]  // Hover primary
hover:bg-[#E63D3D]  // Hover accent
hover:text-[#FF4D4D] // Hover text
```

## Contact Form Validation Rules

```
name:
  - Required
  - Min 2 characters
  - Max 255 characters

email:
  - Required
  - Valid email format

company:
  - Optional
  - Max 255 characters

phone:
  - Optional
  - Valid phone format

message:
  - Required
  - Min 10 characters
  - Max 5000 characters
```

## TypeScript Interfaces

```typescript
// Contact Form
interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject?: string;
    message: string;
}

// Scroll Animation Options
interface UseScrollAnimationOptions {
    threshold?: number;
    margin?: string;
}

// Service
interface Service {
    title: string;
    category: string;
    description: string;
    color: string;
    icon: string;
}
```

## Environment Variables

```
VITE_APP_NAME=Laravel
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=465
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
```

## Port Configuration

```
Development: http://localhost:5173
Laravel: http://localhost:8000
Production: www.yourdomain.com
```

## Troubleshooting Quick Fixes

| Issue | Solution |
|-------|----------|
| Styles not applying | Run `npm run build` |
| Animations not working | Check `animations.css` is imported |
| Form not submitting | Check `ContactFormController.php` exists |
| Images not loading | Verify path is relative to `public/` |
| TypeScript errors | Run `npm run types` |
| Build fails | Clear `node_modules/.vite` and rebuild |

## Performance Checklist

- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive tested
- [ ] Form validation working
- [ ] Contact email configured
- [ ] Meta tags added
- [ ] Favicons configured

## Security Checklist

- [ ] CSRF token configured
- [ ] Form validation server-side
- [ ] Input sanitization enabled
- [ ] SQL injection prevention
- [ ] XSS prevention enabled
- [ ] CORS configured properly
- [ ] Sensitive data not exposed
- [ ] Passwords hashed

## Browser Testing Checklist

- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile Chrome
- [ ] Mobile Safari
- [ ] Mobile Firefox

## Useful Links

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Laravel Docs](https://laravel.com/docs)
- [Inertia.js](https://inertiajs.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

---

## Next Steps

1. [ ] Customize colors for your brand
2. [ ] Update content (text, services, testimonials)
3. [ ] Add real images
4. [ ] Configure contact form emails
5. [ ] Set up Google Analytics
6. [ ] Test on all browsers
7. [ ] Deploy to production
8. [ ] Monitor performance
9. [ ] Gather feedback
10. [ ] Iterate and improve

---

**Last Updated:** January 20, 2026
