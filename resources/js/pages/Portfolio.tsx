import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';
import { useEffect, useState } from 'react';

export default function Portfolio() {
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

        document.querySelectorAll('[data-portfolio-card]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const caseStudies = [
        {
            title: language === 'fr' ? 'Croissance Revenus E-Commerce' : 'E-Commerce Revenue Growth',
            company: language === 'fr' ? 'Boutique Mode' : 'Fashion Boutique',
            result: '+320%',
            description:
                language === 'fr'
                    ? 'Refonte de la boutique en ligne et mise en place de stratégies SEO'
                    : 'Redesigned online store and implemented SEO strategies',
            category: 'E-commerce',
            metrics: [
                {
                    label: language === 'fr' ? 'Augmentation Revenus' : 'Revenue Increase',
                    value: '320%',
                },
                {
                    label: language === 'fr' ? 'Croissance Trafic' : 'Traffic Growth',
                    value: '+450%',
                },
                {
                    label: language === 'fr' ? 'Taux Conversion' : 'Conversion Rate',
                    value: '4.2%',
                },
            ],
            color: 'from-pink-500 to-rose-500',
        },
        {
            title: language === 'fr' ? 'Lancement Plateforme SaaS' : 'SaaS Platform Launch',
            company: language === 'fr' ? 'Startup Tech' : 'Tech Startup',
            result: '15K',
            description:
                language === 'fr'
                    ? 'Construction et lancement d\'une plateforme SaaS cloud'
                    : 'Built and launched cloud-based SaaS platform',
            category: language === 'fr' ? 'Développement' : 'Development',
            metrics: [
                {
                    label: language === 'fr' ? 'Utilisateurs Actifs' : 'Active Users',
                    value: '15K',
                },
                {
                    label: language === 'fr' ? 'Disponibilité' : 'Uptime',
                    value: '99.9%',
                },
                {
                    label: language === 'fr' ? 'Vitesse Page' : 'Page Speed',
                    value: '<100ms',
                },
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: language === 'fr' ? 'Campagne Marketing Digital' : 'Digital Marketing Campaign',
            company: language === 'fr' ? 'Services B2B' : 'B2B Services',
            result: '+75%',
            description:
                language === 'fr'
                    ? 'Stratégie marketing complète avec réseaux sociaux'
                    : 'Comprehensive marketing strategy with social media',
            category: language === 'fr' ? 'Marketing' : 'Marketing',
            metrics: [
                {
                    label: language === 'fr' ? 'Génération Leads' : 'Lead Generation',
                    value: '+75%',
                },
                {
                    label: language === 'fr' ? 'Notoriété Marque' : 'Brand Awareness',
                    value: '+220%',
                },
                { label: 'ROI', value: '850%' },
            ],
            color: 'from-purple-500 to-indigo-500',
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
                            {t('portfolio.title')}
                        </h1>
                        <p
                            className={`text-xl max-w-2xl mx-auto ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-600'
                            }`}
                        >
                            {t('portfolio.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <div
                                    key={index}
                                    data-portfolio-card
                                    data-index={index}
                                    className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                                        visibleCards.includes(index)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                    } hover:scale-105`}
                                >
                                    {/* Image/Gradient Background */}
                                    <div
                                        className={`h-56 bg-gradient-to-br ${study.color} flex items-center justify-center relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                                        <div className="relative z-10 text-center text-white">
                                            <p className="text-5xl md:text-6xl font-bold mb-2">
                                                {study.result}
                                            </p>
                                            <p className="text-sm opacity-80">
                                                {study.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`p-6 ${
                                            theme === 'dark'
                                                ? 'bg-gray-800'
                                                : 'bg-white'
                                        }`}
                                    >
                                        <h3
                                            className={`text-2xl font-bold mb-1 ${
                                                theme === 'dark'
                                                    ? 'text-white'
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            {study.title}
                                        </h3>
                                        <p
                                            className={`text-sm mb-4 ${
                                                theme === 'dark'
                                                    ? 'text-gray-400'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {study.company}
                                        </p>
                                        <p
                                            className={`mb-6 ${
                                                theme === 'dark'
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {study.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-3 mb-6">
                                            {study.metrics.map((metric, idx) => (
                                                <div key={idx} className="text-center">
                                                    <p className="text-lg font-bold text-[#006080]">
                                                        {metric.value}
                                                    </p>
                                                    <p
                                                        className={`text-xs ${
                                                            theme === 'dark'
                                                                ? 'text-gray-400'
                                                                : 'text-gray-600'
                                                        }`}
                                                    >
                                                        {metric.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Link */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-[#FF4D4D] font-semibold hover:text-[#E63D3D] transition-colors"
                                        >
                                            {t('portfolio.viewcase')}
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
