# Multi-Language & Dark Mode Implementation Guide

## Overview

Your website now has full support for:
- **Multi-language**: French (default) and English
- **Dark Mode**: Light and Dark themes
- **Multi-page Navigation**: 5 main pages with seamless navigation
- **Request Quote Button**: Prominent CTA button with language support

## New Features

### 1. Navigation Structure

#### New Navbar (`NavbarMulti.tsx`)
- **Fixed Header**: Sticky navigation that appears on all pages
- **Nav Links**: Accueil, Services, Réalisations, À propos, Contact
- **Right-side Controls**:
  - 🌐 Language Switcher (FR/EN)
  - 🌙 Dark Mode Toggle
  - 📋 "Demander un devis" (Request Quote) button
- **Mobile Responsive**: Hamburger menu on mobile devices
- **Active Link Highlighting**: Current page highlighted in coral (#FF4D4D)

#### New Footer (`FooterMulti.tsx`)
- Multi-language support
- Dark mode compatible
- Social media links
- Footer link categories

### 2. Language & Theme System

#### `useLanguageTheme.tsx` Hook
**Two Main Providers:**

```tsx
// Language Provider
const { language, setLanguage, t } = useLanguage();

// Theme Provider
const { theme, toggleTheme } = useTheme();
```

**Usage in Components:**
```tsx
import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';

export default function MyComponent() {
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    
    return (
        <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
            <h1>{t('nav.home')}</h1>
        </div>
    );
}
```

**Translation Keys Available:**
- `nav.*` - Navigation labels
- `hero.*` - Hero section
- `services.*` - Services section
- `portfolio.*` - Portfolio section
- `about.*` - About page
- `contact.*` - Contact form
- `stats.*` - Statistics
- `why.*` - Why choose us
- `footer.*` - Footer content

### 3. Pages

#### Home (`Home.tsx`)
- Hero section with animated stats
- Scroll indicator
- Call-to-action buttons
- Background animations

#### Services (`Services.tsx`)
- 6 service cards with icons
- Service categories
- Learn more links
- Scroll animations
- Dark mode support

#### Portfolio (`Portfolio.tsx`)
- 6 case studies
- Gradient backgrounds
- Performance metrics
- Results highlighting
- View case study links

#### About (`About.tsx`)
- Company story
- Key statistics
- Multi-column layout
- Dark mode styling

#### Contact (`Contact.tsx`)
- Full contact form
- Form validation
- Success message display
- Loading state
- Responsive design

### 4. Route Configuration

New routes in `routes/web.php`:
```php
GET  /              → Home page
GET  /services      → Services page
GET  /portfolio     → Portfolio page
GET  /about         → About page
GET  /contact       → Contact page
POST /api/contact   → Form submission
```

### 5. Styling & Dark Mode

#### Dark Mode Implementation
- Uses Tailwind's `darkMode: 'class'`
- Toggle stored in `localStorage`
- Applies `dark` class to `<html>` element
- All components support both light and dark themes

#### Color Scheme
- **Primary**: Deep Teal #006080
- **Accent**: Vibrant Coral #FF4D4D
- **Dark BG**: Gray-900 (#111827)
- **Light BG**: White/Gray-50

## Customization Guide

### Adding New Translations

Edit `resources/js/hooks/useLanguageTheme.tsx`:

```tsx
const translations = {
    fr: {
        'mykey.label': 'Valeur Française',
    },
    en: {
        'mykey.label': 'English Value',
    }
};
```

### Using Translations in Components

```tsx
const { t } = useLanguage();

<h1>{t('mykey.label')}</h1>
```

### Conditional Dark Mode Styling

```tsx
const { theme } = useTheme();

<div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
```

### Language-Specific Rendering

```tsx
const { language } = useLanguage();

{language === 'fr' ? 'Texte Français' : 'English Text'}
```

## Default Settings

- **Default Language**: French (FR)
- **Default Theme**: Light mode
- **Storage**: Both preferences stored in `localStorage`
- **Persistence**: Settings saved across page reloads

## File Structure

```
resources/
├── js/
│   ├── hooks/
│   │   └── useLanguageTheme.tsx     (Language & Theme Context)
│   ├── components/
│   │   └── landing/
│   │       ├── NavbarMulti.tsx      (New Multi-language Navbar)
│   │       └── FooterMulti.tsx      (New Multi-language Footer)
│   └── pages/
│       ├── Home.tsx                 (Home page)
│       ├── Services.tsx             (Services page)
│       ├── Portfolio.tsx            (Portfolio page)
│       ├── About.tsx                (About page)
│       └── Contact.tsx              (Contact page)
```

## Browser Support

- Dark mode: All modern browsers
- localStorage: All modern browsers
- Language switching: Requires no special support

## Performance Notes

- Language/theme settings cached in localStorage
- No external API calls for translations
- Minimal re-renders with React Context
- CSS-based dark mode (no JavaScript overhead)

## Troubleshooting

### Dark Mode Not Working
1. Check if `darkMode: 'class'` is in `tailwind.config.js`
2. Verify `<html>` element has `dark` class when dark mode is enabled
3. Clear browser cache and localStorage

### Language Not Changing
1. Check browser console for errors
2. Verify translation keys exist in `useLanguageTheme.tsx`
3. Clear localStorage: `localStorage.clear()`

### Styling Issues
1. Use conditional className with theme: `{theme === 'dark' ? 'dark-class' : 'light-class'}`
2. Don't hardcode colors; use theme variables
3. Test both light and dark modes

## Future Enhancements

Possible additions:
- More languages (Spanish, German, etc.)
- Auto-detect user language from browser
- Custom theme colors
- Font size adjustment
- High contrast mode
- RTL language support

---

Start the dev server with `npm run dev` to see your multi-language, multi-theme website in action!
