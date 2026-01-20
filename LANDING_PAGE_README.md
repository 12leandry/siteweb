# Digital Agency Landing Page

A modern, responsive digital agency landing page built with React, TypeScript, and Tailwind CSS. Features smooth scroll animations, interactive components, and a professional design system.

## Features

### 🎨 Design System
- **Primary Color**: Deep Teal (#006080)
- **Accent Color**: Vibrant Coral (#FF4D4D)
- **Font Family**: Inter
- **Responsive Design**: Mobile-first approach with full responsiveness

### 📦 Components

#### 1. **Navbar** (`components/landing/Navbar.tsx`)
- Fixed navigation with sticky background on scroll
- Mobile hamburger menu
- Navigation links: Services, About, Portfolio, Contact
- CTA button

#### 2. **Hero Section** (`components/landing/Hero.tsx`)
- Full-screen hero with gradient background
- Animated background elements
- Headline: "Multipliez vos ventes"
- Two CTA buttons (Primary + Outline)
- 4 stats row with animations
- Scroll indicator

#### 3. **Services Grid** (`components/landing/Services.tsx`)
- 6 service cards with icons
- Scroll animation on cards
- Services: Web Development, E-commerce, Digital Marketing, SEO, UI/UX, Mobile Apps
- Each card includes description and "Learn more" link

#### 4. **Why Choose Us** (`components/landing/WhyChooseUs.tsx`)
- Split layout design
- Key benefits and stats on left
- 4 feature cards with icons on right
- Features: Expertise, Performance, Support, Transparency

#### 5. **Stats Section** (`components/landing/Stats.tsx`)
- 4 large statistics with animated counters
- Icons from lucide-react
- Auto-incrementing numbers on scroll
- Gradient background

#### 6. **Testimonials** (`components/landing/Testimonials.tsx`)
- Carousel with client quotes
- Star ratings
- Navigation arrows and pagination
- Client avatars and company info

#### 7. **Contact Form** (`components/landing/ContactForm.tsx`)
- Full-featured contact form
- Form validation
- Fields: Name, Email, Company, Message
- Success state with confirmation
- Loading state during submission

#### 8. **CTA Section** (`components/landing/CTASection.tsx`)
- Gradient background with animated elements
- Compelling headline
- Two action buttons
- Animated background shapes

#### 9. **Footer** (`components/landing/Footer.tsx`)
- Logo and tagline
- 3 link columns (Services, Company, Legal)
- Social media icons
- Copyright information

### 🎯 Main Page (`pages/Landing.tsx`)
- Imports and combines all sections
- Single page with smooth scrolling

## 🎬 Animations

### Available Animations
- `animate-fade-up` - Fade in with upward movement
- `animate-float` - Floating effect
- `animate-scale-in` - Scale from 95% to 100%
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-pulse-glow` - Pulsing glow effect

### Scroll Animations
- Automatic fade-in animations when sections enter viewport
- Intersection Observer API for performance
- Staggered animations with delays
- Counter animations in stats section

## 📚 Custom Hooks

### `useScrollAnimation`
```typescript
const { ref, isVisible } = useScrollAnimation({ 
    threshold: 0.1,
    margin: '0px'
});
```

## 🛠 Technical Stack

- **React 19.2** - UI Framework
- **TypeScript 5.7** - Type Safety
- **Tailwind CSS 4.0** - Styling
- **Lucide React 0.475** - Icons
- **Inertia.js 2.3** - Page routing
- **Laravel Vite Plugin** - Build tool integration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

```css
Primary: #006080 (Deep Teal)
Dark Primary: #004a5f
Accent: #FF4D4D (Vibrant Coral)
Dark Accent: #E63D3D
Background: #FFFFFF
Secondary: #F3F4F6 (Gray-50)
Text: #111827 (Gray-900)
```

## 📁 File Structure

```
resources/
├── js/
│   ├── pages/
│   │   └── Landing.tsx
│   ├── components/
│   │   └── landing/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── Stats.tsx
│   │       ├── Testimonials.tsx
│   │       ├── ContactForm.tsx
│   │       ├── CTASection.tsx
│   │       ├── Footer.tsx
│   │       └── ScrollAnimations.tsx
│   └── hooks/
│       └── useScrollAnimation.ts
└── css/
    ├── app.css
    └── animations.css
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Route Configuration
The landing page is set as the home route in `routes/web.php`:
```php
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');
```

### Tailwind Configuration
Custom theme colors and animations are defined in `tailwind.config.js`:
- Extended color palette
- Custom animations
- Font family overrides

### CSS Animations
All animations are defined in `resources/css/animations.css` and imported in `app.css`

## 📊 Performance Features

- **Intersection Observer** for efficient scroll animations
- **Lazy loading** on scroll-triggered animations
- **Optimized SVG icons** with lucide-react
- **CSS animations** instead of JavaScript for better performance
- **Mobile-optimized** images and responsive design

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast text

## 📝 Customization

### Colors
Update colors in `tailwind.config.js` and `resources/css/app.css`

### Content
Edit text content directly in component files

### Images
Replace emoji placeholders with actual images in services grid

### Animation Speed
Adjust animation delays and durations in component files and CSS

## 🐛 Known Issues & Improvements

- [ ] Add real image upload for service cards
- [ ] Implement backend contact form handling
- [ ] Add form validation error messages
- [ ] SEO meta tags optimization
- [ ] Add analytics integration
- [ ] Implement breadcrumb navigation
- [ ] Add loading skeleton screens

## 📄 License

This project is part of a Laravel/Inertia.js application.
