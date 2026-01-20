import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Translations
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.services': 'Services',
        'nav.portfolio': 'Nos Réalisations',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        'nav.quote': 'Demander un devis',

        // Hero
        'hero.title': 'Multipliez vos ventes',
        'hero.subtitle':
            'Transformez votre présence digitale avec nos solutions innovantes et orientées résultats',
        'hero.cta1': 'Commencer maintenant',
        'hero.cta2': 'En savoir plus',

        // Stats
        'stats.growth': 'Croissance',
        'stats.reach': 'Portée',
        'stats.projects': 'Projets',
        'stats.retention': 'Rétention',

        // Services
        'services.title': 'Nos Services',
        'services.subtitle':
            'Une gamme complète de solutions digitales pour transformer votre business',
        'services.web': 'Développement Web',
        'services.ecommerce': 'E-commerce',
        'services.marketing': 'Marketing Numérique',
        'services.seo': 'Optimisation SEO',
        'services.design': 'Design UI/UX',
        'services.mobile': 'Applications Mobiles',
        'services.learnmore': 'En savoir plus',

        // Portfolio
        'portfolio.title': 'Nos Réalisations',
        'portfolio.subtitle':
            'Découvrez nos projets les plus réussis et comment nous avons aidé les entreprises à croître',
        'portfolio.viewcase': 'Voir l\'étude de cas',
        'portfolio.viewall': 'Voir tous les projets',

        // Why Choose Us
        'why.title': 'Pourquoi choisir nous',
        'why.subtitle':
            'Nous combinons l\'expertise technique avec une compréhension approfondie des besoins commerciaux',

        // About
        'about.title': 'À Propos',
        'about.subtitle': 'Découvrez notre histoire et notre vision',

        // Contact
        'contact.title': 'Nous Contacter',
        'contact.subtitle':
            'Prêt à transformer votre business? Prenez contact avec nous',
        'contact.name': 'Nom complet',
        'contact.email': 'Adresse email',
        'contact.company': 'Nom de l\'entreprise',
        'contact.phone': 'Numéro de téléphone',
        'contact.subject': 'Sujet',
        'contact.message': 'Message',
        'contact.send': 'Envoyer',
        'contact.sending': 'Envoi en cours...',
        'contact.success': 'Merci! Nous vous répondrons bientôt.',
        'contact.error': 'Une erreur est survenue. Veuillez réessayer.',

        // Footer
        'footer.services': 'Services',
        'footer.company': 'Entreprise',
        'footer.legal': 'Légal',
        'footer.copyright': 'Tous droits réservés',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.quote': 'Request a Quote',

        // Hero
        'hero.title': 'Multiply Your Sales',
        'hero.subtitle':
            'Transform your digital presence with our innovative, results-oriented solutions',
        'hero.cta1': 'Get Started',
        'hero.cta2': 'Learn More',

        // Stats
        'stats.growth': 'Growth',
        'stats.reach': 'Reach',
        'stats.projects': 'Projects',
        'stats.retention': 'Retention',

        // Services
        'services.title': 'Our Services',
        'services.subtitle':
            'A complete range of digital solutions to transform your business',
        'services.web': 'Web Development',
        'services.ecommerce': 'E-commerce',
        'services.marketing': 'Digital Marketing',
        'services.seo': 'SEO Optimization',
        'services.design': 'UI/UX Design',
        'services.mobile': 'Mobile Apps',
        'services.learnmore': 'Learn More',

        // Portfolio
        'portfolio.title': 'Our Work',
        'portfolio.subtitle':
            'Explore our most successful projects and see how we\'ve helped businesses grow',
        'portfolio.viewcase': 'View Case Study',
        'portfolio.viewall': 'View All Projects',

        // Why Choose Us
        'why.title': 'Why Choose Us',
        'why.subtitle':
            'We combine technical expertise with a deep understanding of business needs',

        // About
        'about.title': 'About Us',
        'about.subtitle': 'Discover our story and vision',

        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Ready to transform your business? Get in touch with us',
        'contact.name': 'Full Name',
        'contact.email': 'Email Address',
        'contact.company': 'Company Name',
        'contact.phone': 'Phone Number',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send',
        'contact.sending': 'Sending...',
        'contact.success': 'Thank you! We\'ll be in touch soon.',
        'contact.error': 'An error occurred. Please try again.',

        // Footer
        'footer.services': 'Services',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.copyright': 'All rights reserved',
    },
};

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguage] = useState<Language>('fr');

    useEffect(() => {
        const stored = localStorage.getItem('language') as Language | null;
        if (stored) {
            setLanguage(stored);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key: string): string => {
        return (translations[language][key as keyof (typeof translations)[typeof language]] as string) ||
            key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme | null;
        if (stored) {
            setTheme(stored);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
