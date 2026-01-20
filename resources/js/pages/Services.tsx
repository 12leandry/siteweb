import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(
                            entry.target.getAttribute('data-index') || '0'
                        );
                        setVisibleCards((prev) => [
                            ...new Set([...prev, index]),
                        ]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-service-card]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: language === 'fr' ? 'Développement Web' : 'Web Development',
            category: language === 'fr' ? 'Développement' : 'Development',
            description:
                language === 'fr'
                    ? 'Sites web modernes et performants, construits avec les dernières technologies'
                    : 'Modern and high-performance websites built with the latest technologies',
            color: 'bg-blue-500',
            icon: '🌐',
        },
        {
            title: 'E-commerce',
            category: language === 'fr' ? 'Commerce' : 'Commerce',
            description:
                language === 'fr'
                    ? 'Solutions de vente en ligne optimisées pour convertir et générer des revenus'
                    : 'Online sales solutions optimized for conversions and revenue',
            color: 'bg-purple-500',
            icon: '🛒',
        },
        {
            title: language === 'fr' ? 'Marketing Numérique' : 'Digital Marketing',
            category: language === 'fr' ? 'Marketing' : 'Marketing',
            description:
                language === 'fr'
                    ? 'Stratégies marketing digitales complètes pour augmenter votre visibilité'
                    : 'Complete digital marketing strategies to increase your visibility',
            color: 'bg-pink-500',
            icon: '📱',
        },
        {
            title: language === 'fr' ? 'Optimisation SEO' : 'SEO Optimization',
            category: 'SEO',
            description:
                language === 'fr'
                    ? 'Optimisation pour moteurs de recherche pour dominer Google et Bing'
                    : 'Search engine optimization to dominate Google and Bing',
            color: 'bg-green-500',
            icon: '🔍',
        },
        {
            title: language === 'fr' ? 'Design UI/UX' : 'UI/UX Design',
            category: language === 'fr' ? 'Design' : 'Design',
            description:
                language === 'fr'
                    ? 'Interfaces utilisateur magnifiques et interfaces conviviales'
                    : 'Beautiful and user-friendly interfaces',
            color: 'bg-orange-500',
            icon: '✨',
        },
        {
            title: language === 'fr' ? 'Applications Mobiles' : 'Mobile Apps',
            category: language === 'fr' ? 'Mobile' : 'Mobile',
            description:
                language === 'fr'
                    ? 'Applications mobiles natives et cross-platform pour iOS et Android'
                    : 'Native and cross-platform mobile apps for iOS and Android',
            color: 'bg-red-500',
            icon: '📲',
        },
    ];

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <NavbarMulti />

            <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}>
                {/* Header */}
                <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}>
                            {t('services.title')}
                        </h1>
                        <p
                            className={`text-xl max-w-2xl mx-auto ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-600'
                            }`}
                        >
                            {t('services.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    data-service-card
                                    data-index={index}
                                    className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                                        visibleCards.includes(index)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                    } hover:scale-105 ${
                                        theme === 'dark'
                                            ? 'bg-gray-800'
                                            : 'bg-white'
                                    }`}
                                >
                                    {/* Service Image Placeholder */}
                                    <div
                                        className={`h-48 ${service.color} flex items-center justify-center`}
                                    >
                                        <span className="text-6xl">
                                            {service.icon}
                                        </span>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-[#006080] uppercase tracking-widest mb-2">
                                            {service.category}
                                        </p>
                                        <h3
                                            className={`text-2xl font-bold mb-3 ${
                                                theme === 'dark'
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            {service.title}
                                        </h3>
                                        <p
                                            className={`mb-6 line-clamp-3 ${
                                                theme === 'dark'
                                                    ? 'text-gray-300'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-[#FF4D4D] font-semibold hover:text-[#E63D3D] transition-colors"
                                        >
                                            {t('services.learnmore')}
                                            <ArrowRight
                                                size={20}
                                                className="ml-2"
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FooterMulti />
        </div>
    );
}
