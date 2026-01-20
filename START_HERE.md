# ⚡ Quick Start - Landing Page Complete

## 🚀 Start Your Dev Server

```bash
cd c:\xampp\htdocs\siteweb
npm run dev
```

Then visit: **http://localhost:8000**

---

## 📋 What You'll See

### Home Page (`/`)
Scroll down to view all sections in order:

1. **Hero Section** - Eye-catching hero with animated stats
2. **Services Grid** - 6 interactive service cards
3. **Why Choose Us** - Benefits and features
4. **CTA Section** - Call-to-action with gradient
5. **Distinguishes Us** - 4 clickable principle cards
6. **Stats Section** - Key company statistics
7. **About Us** - Company information with images
8. **Portfolio Carousel** - 4 project showcase
9. **Testimonials** - Auto-scrolling client reviews
10. **Blog** - 3 latest articles
11. **Vision** - Company vision statement
12. **Footer** - Links and social media

---

## 🎯 Default Settings

- **Language**: French (FR)
- **Theme**: Light Mode
- **Settings persist** across page reloads

---

## 🔧 Key Features

### Services Grid
- Hover animations (scale + rotate)
- Scroll animations (fade-in)
- Click to navigate to detail page
- 6 services with icons

### Interactions
✅ Service cards scale on hover
✅ Principle cards glow when selected
✅ Carousel navigates through projects
✅ Testimonials scroll infinitely
✅ All buttons have hover effects

### Responsive
✅ Mobile optimized (1 column)
✅ Tablet friendly (2 columns)
✅ Desktop full width (3+ columns)

---

## 🌐 Change Language

1. Look at top-right of navbar
2. Click **FR** or **EN**
3. All content switches instantly
4. Setting saved automatically

---

## 🌙 Toggle Dark Mode

1. Click the **sun/moon icon** on navbar (top-right)
2. All colors adjust automatically
3. Setting saved automatically

---

## 🔗 Service Pages

Each service has its own detail page:

| Service | URL |
|---------|-----|
| Web Development | `/service/web-development` |
| E-commerce | `/service/ecommerce` |
| Digital Marketing | `/service/digital-marketing` |
| SEO | `/service/seo` |
| UI/UX Design | `/service/design` |
| Mobile Apps | `/service/mobile-apps` |

**Access by:**
- Clicking "Learn more" on service cards
- Or visiting URL directly

---

## 📱 Navigation

**Main Pages** (in navbar):
- Accueil (Home) `/`
- Services `/services`
- Réalisations (Portfolio) `/portfolio`
- À propos (About) `/about`
- Contact `/contact`

**Service Details**:
- `/service/web-development`
- `/service/ecommerce`
- `/service/digital-marketing`
- `/service/seo`
- `/service/design`
- `/service/mobile-apps`

---

## 🎨 Colors

**Primary**: Teal #006080
**Accent**: Coral #FF4D4D

Both colors used throughout for:
- Buttons
- Links
- Icons
- Highlights
- Gradients

---

## 📁 File Locations

### Home Page Components
```
resources/js/components/home/
├── ServicesGridHome.tsx
├── WhyChooseUsHome.tsx
├── CTASectionHome.tsx
├── DistinguishesUsHome.tsx
├── StatsHome.tsx
├── AboutUsHome.tsx
├── PortfolioCarouselHome.tsx
├── TestimonialCarouselHome.tsx
├── BlogHome.tsx
└── VisionHome.tsx
```

### Pages
```
resources/js/pages/
├── Home.tsx              ← Main landing page
├── ServiceDetail.tsx     ← Service detail pages
├── Services.tsx
├── Portfolio.tsx
├── About.tsx
└── Contact.tsx
```

### Hooks & Config
```
resources/js/hooks/
└── useLanguageTheme.tsx  ← Language & theme logic

tailwind.config.js        ← Color & animation config
routes/web.php            ← URL routing
```

---

## 🎯 Key Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Service Cards | Fade-up + Scale | Scroll into view |
| Service Cards | Scale 105% | Hover |
| Icon | Rotate + Scale | Hover |
| CTA Buttons | Scale 105% | Hover |
| Testimonials | Infinite scroll | Auto (30s loop) |
| Portfolio | Carousel | Click/Auto |
| Stats Cards | Scale 105% | Hover |
| Hero Stats | Fade-up | Page load |

---

## 🔄 Customization

### Change Service Data
Edit: `resources/js/components/home/ServicesGridHome.tsx`

```tsx
const services: ServiceCard[] = [
    {
        id: 'web-dev',
        title: 'Web Development',
        titleFr: 'Développement Web',
        // ... modify these
    },
    // ... more services
];
```

### Update Testimonials
Edit: `resources/js/components/home/TestimonialCarouselHome.tsx`

```tsx
const testimonials = [
    {
        name: 'Client Name',
        company: 'Company',
        text: 'Their testimonial...',
        rating: 5,
        avatar: '👨‍💼',
    },
    // ... add more
];
```

### Add Blog Articles
Edit: `resources/js/components/home/BlogHome.tsx`

```tsx
const articles = [
    {
        title: 'Article Title',
        description: 'Short description...',
        category: 'Category',
        date: 'Date',
        icon: '🎯',
        // ... modify
    },
    // ... add more
];
```

### Update Portfolio
Edit: `resources/js/components/home/PortfolioCarouselHome.tsx`

```tsx
const projects = [
    {
        title: 'Project Name',
        client: 'Client Name',
        description: 'What was done...',
        result: '+300%',
        icon: '📈',
    },
    // ... add more
];
```

---

## 🐛 Troubleshooting

### Page Not Loading
1. Check dev server is running: `npm run dev`
2. Clear browser cache: Ctrl+Shift+Delete
3. Reload page: Ctrl+F5

### Language Not Changing
1. Open Developer Tools: F12
2. Check localStorage in Application tab
3. Clear if corrupted: `localStorage.clear()`
4. Reload page

### Dark Mode Not Working
1. Verify `darkMode: 'class'` in `tailwind.config.js`
2. Check browser console for errors: F12
3. Clear cache and reload

### Animations Not Showing
1. Check if GPU acceleration is enabled
2. Try different browser
3. Verify CSS is loading: F12 > Elements

---

## 📚 Documentation Files

For more detailed information, see:

1. **LANDING_PAGE_COMPLETE.md** - Full feature breakdown
2. **LANDING_PAGE_VISUAL_GUIDE.md** - Visual structure guide
3. **MULTILANGUAGE_DARKMODE_GUIDE.md** - Language/theme details
4. **QUICK_START.md** - Original quick start guide

---

## ✨ Next Steps

### 1. Explore the Site
- Scroll through home page
- Test dark mode toggle
- Switch between languages
- Click service cards to view detail pages

### 2. Customize Content
- Replace service descriptions
- Update testimonials with real clients
- Add your company information
- Update blog articles

### 3. Add Images
- Replace emoji placeholders
- Add portfolio project images
- Add team photos
- Add logo

### 4. Configure Email
- Set up contact form emails
- Configure SMTP settings
- Test form submission

### 5. Deploy
```bash
npm run build
# Deploy to your hosting
```

---

## 🎉 You're All Set!

Your professional landing page is **fully functional** and ready to:
- ✅ Showcase your services
- ✅ Display client testimonials
- ✅ Highlight portfolio projects
- ✅ Collect inquiries
- ✅ Support multiple languages
- ✅ Work in light and dark modes
- ✅ Adapt to all devices

**Start your dev server and enjoy!** 🚀

```bash
npm run dev
```

---

## 📞 Support

All components are self-contained and well-commented. Each section is in its own file for easy customization.

Questions about specific features? Check the relevant component file or documentation.

**Happy building!** 🎨
