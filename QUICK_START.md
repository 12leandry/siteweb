# 🚀 Quick Start Guide - Multi-Language Dark Mode Website

## Start Your Server (30 seconds)

```bash
cd c:\xampp\htdocs\siteweb
npm run dev
```

Then visit: **http://localhost:8000**

## What You'll See

✅ Website loads in **French** by default
✅ **Light mode** by default
✅ Professional **sticky navbar** with all features
✅ Full **multi-page navigation**
✅ Beautiful **animations and styling**

## Try These Features

### 1. Change Language
- Look for **"FR"** button on top-right of navbar
- Click to switch to English
- Watch all text change instantly
- Setting persists when you reload! 🎯

### 2. Toggle Dark Mode
- Look for **sun/moon icon** next to language button
- Click to switch between light and dark
- All colors adjust automatically
- Setting persists when you reload! 🎯

### 3. Navigate the Site
Click on navbar links:
- **Accueil** → Home page with hero section
- **Services** → 6 service offerings
- **Réalisations** → 6 portfolio case studies
- **À propos** → About company page
- **Contact** → Contact form page

### 4. Request a Quote
- Click **"Demander un devis"** button on navbar
- Goes to contact form page
- Fill out and submit

## Page Overview

### Home (`/`)
- Hero section with animated stats
- Call-to-action buttons
- Scroll indicator

### Services (`/services`)
6 service cards:
1. 🌐 Développement Web
2. 🛒 E-commerce
3. 📱 Marketing Numérique
4. 🔍 Optimisation SEO
5. ✨ Design UI/UX
6. 📲 Applications Mobiles

### Portfolio (`/portfolio`)
3 case studies with metrics:
1. E-Commerce (+320% revenue)
2. SaaS Platform (15K users)
3. Marketing Campaign (+75%)

### About (`/about`)
Company info with stats:
- 10+ years experience
- 610+ projects completed
- 97% client satisfaction

### Contact (`/contact`)
- Full contact form
- Name, Email, Company, Message fields
- Form validation
- Success message

## Customization (2 minutes)

### Change Default Language to English
1. Open: `resources/js/hooks/useLanguageTheme.tsx`
2. Find: `const [language, setLanguage] = useState<Language>('fr');`
3. Change to: `const [language, setLanguage] = useState<Language>('en');`
4. Save and reload

### Change Default Theme to Dark
1. Open: `resources/js/hooks/useLanguageTheme.tsx`
2. Find: `const [theme, setTheme] = useState<Theme>('light');`
3. Change to: `const [theme, setTheme] = useState<Theme>('dark');`
4. Save and reload

### Update Company Name
Search for **"Digital Solutions"** in files and replace with your company name:
- `resources/js/components/landing/NavbarMulti.tsx`
- `resources/js/components/landing/FooterMulti.tsx`
- `resources/js/app.tsx`

### Add Your Services
Edit: `resources/js/pages/Services.tsx`

Find the `services` array and modify:
```tsx
const services = [
    {
        title: 'Your Service Name',
        category: 'Category',
        description: 'Your description',
        color: 'bg-blue-500',
        icon: '🎯',
    },
    // ... add more
];
```

### Update Portfolio
Edit: `resources/js/pages/Portfolio.tsx`

Find the `caseStudies` array and modify:
```tsx
const caseStudies = [
    {
        title: 'Your Project Title',
        company: 'Client Name',
        result: '+320%',
        description: 'What you did',
        category: 'Category',
        metrics: [
            { label: 'Metric 1', value: '123' },
            { label: 'Metric 2', value: '456' },
            { label: 'Metric 3', value: '789' },
        ],
        color: 'from-pink-500 to-rose-500',
    },
    // ... add more
];
```

## File Locations

**New Components:**
- Navbar: `resources/js/components/landing/NavbarMulti.tsx`
- Footer: `resources/js/components/landing/FooterMulti.tsx`

**New Pages:**
- Home: `resources/js/pages/Home.tsx`
- Services: `resources/js/pages/Services.tsx`
- Portfolio: `resources/js/pages/Portfolio.tsx`
- About: `resources/js/pages/About.tsx`
- Contact: `resources/js/pages/Contact.tsx`

**Language & Theme:**
- Hook: `resources/js/hooks/useLanguageTheme.tsx`

**Routes:**
- Web Routes: `routes/web.php`

**Config:**
- Tailwind: `tailwind.config.js`

## Translation Keys

All text is stored in `useLanguageTheme.tsx` translations object:

```tsx
translations = {
    fr: {
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        // ... etc
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        // ... etc
    }
}
```

Add more translations there, then use in components:
```tsx
const { t } = useLanguage();
<h1>{t('nav.home')}</h1>
```

## Colors & Styling

**Theme Colors:**
- Primary Teal: `#006080`
- Accent Coral: `#FF4D4D`
- Dark Background: `#111827` (gray-900)
- Light Background: `#FFFFFF`

**Tailwind Classes:**
- Use `theme === 'dark'` for conditional styling
- Use `t('key')` for language-aware text

## Common Tasks

### Deploy to Production
```bash
npm run build
```

### Check for Errors
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

## Troubleshooting

### Language not changing?
- Check browser console (F12)
- Try clearing localStorage
- Make sure useLanguage() is inside LanguageProvider

### Dark mode not working?
- Check if darkMode: 'class' in tailwind.config.js
- Make sure html element has dark class
- Clear cache and reload

### Pages not loading?
- Check routes in routes/web.php
- Verify page component files exist
- Check browser console for errors

## Browser Developer Tools

Press **F12** to open Developer Tools and:
- Check localStorage: Application → localStorage → see language/theme
- Monitor Network tab for page loads
- Check Console for any errors

## Next Steps

1. ✅ Start dev server: `npm run dev`
2. ✅ Test all features (language, dark mode, navigation)
3. ✅ Customize company information
4. ✅ Update services and portfolio with your data
5. ✅ Add your company logo
6. ✅ Configure contact form email settings
7. ✅ Build: `npm run build`
8. ✅ Deploy to production

## Support & Documentation

For detailed information, see:
- `MULTILANGUAGE_DARKMODE_GUIDE.md` - Full feature guide
- `WHATS_NEW.md` - All changes and features
- `IMPLEMENTATION_COMPLETE.md` - Technical details

## Key Features Summary

✅ **Multi-language**: French (default) + English
✅ **Dark Mode**: Light + Dark themes
✅ **5 Pages**: Home, Services, Portfolio, About, Contact
✅ **Responsive**: Mobile, Tablet, Desktop
✅ **Persistent**: Settings saved locally
✅ **Professional**: Animations, styling, transitions
✅ **Ready to Deploy**: No additional setup needed

---

**Your website is ready to go!** 🎉

Start your dev server with `npm run dev` and enjoy your new multi-language, dark-mode website!
