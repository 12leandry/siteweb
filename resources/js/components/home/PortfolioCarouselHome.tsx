import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioCarouselHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: language === 'fr' ? 'Augmentation des Ventes E-commerce' : 'E-Commerce Sales Boost',
            client:
                language === 'fr'
                    ? 'Boutique Mode'
                    : 'Fashion Store',
            description:
                language === 'fr'
                    ? 'Refonte complète du site e-commerce avec optimisation SEO et stratégie marketing. Résultat : +320% de chiffre d\'affaires en 6 mois.'
                    : 'Complete redesign of e-commerce site with SEO optimization and marketing strategy. Result: +320% revenue in 6 months.',
            result: '+320%',
            icon: '🛒',
        },
        {
            title: language === 'fr' ? 'Plateforme SaaS Innovante' : 'Innovative SaaS Platform',
            client: language === 'fr' ? 'Tech Startup' : 'Tech Startup',
            description:
                language === 'fr'
                    ? 'Développement d\'une plateforme cloud scalable avec 15 000 utilisateurs actifs. Infrastructure sécurisée et performante.'
                    : 'Development of scalable cloud platform with 15,000 active users. Secure and high-performing infrastructure.',
            result: '15K',
            icon: '💻',
        },
        {
            title: language === 'fr' ? 'Campagne Marketing Digital' : 'Digital Marketing Campaign',
            client: language === 'fr' ? 'Services B2B' : 'B2B Services',
            description:
                language === 'fr'
                    ? 'Stratégie marketing complète incluant réseaux sociaux, email marketing et publicités ciblées. Génération de 150+ leads.'
                    : 'Complete marketing strategy including social media, email marketing and targeted ads. Generated 150+ leads.',
            result: '150+',
            icon: '📈',
        },
        {
            title: language === 'fr' ? 'Application Mobile Croisée' : 'Cross-Platform Mobile App',
            client: language === 'fr' ? 'Startup Mobile' : 'Mobile Startup',
            description:
                language === 'fr'
                    ? 'Développement d\'une application mobile native pour iOS et Android. Téléchargée plus de 50 000 fois.'
                    : 'Development of native mobile app for iOS and Android. Downloaded over 50,000 times.',
            result: '50K+',
            icon: '📱',
        },
    ];

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}
                    >
                        {language === 'fr'
                            ? 'Nos Réalisations'
                            : 'Our Portfolio'}
                    </h2>
                    <p
                        className={`text-lg max-w-2xl mx-auto ${
                            theme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                        }`}
                    >
                        {language === 'fr'
                            ? 'Découvrez notre portfolio de projets réussis et voyez comment nous avons aidé les entreprises à atteindre leurs objectifs numériques.'
                            : 'Discover our portfolio of successful projects and see how we\'ve helped businesses achieve their digital goals.'}
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className={`rounded-lg overflow-hidden shadow-2xl ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left - Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="text-5xl mb-6">
                                {projects[currentIndex].icon}
                            </div>
                            <h3
                                className={`text-3xl font-bold mb-4 ${
                                    theme === 'dark'
                                        ? 'text-white'
                                        : 'text-gray-900'
                                }`}
                            >
                                {projects[currentIndex].title}
                            </h3>
                            <p
                                className={`text-sm mb-4 ${
                                    theme === 'dark'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                                }`}
                            >
                                {projects[currentIndex].client}
                            </p>
                            <p
                                className={`text-lg mb-8 leading-relaxed ${
                                    theme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                }`}
                            >
                                {projects[currentIndex].description}
                            </p>
                            <div className="mb-8">
                                <p
                                    className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                                        theme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'Résultat'
                                        : 'Result'}
                                </p>
                                <p className="text-4xl font-bold text-[#26d04c]">
                                    {projects[currentIndex].result}
                                </p>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={prevProject}
                                    className={`p-3 rounded-full transition-colors ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                    }`}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <div
                                    className={`flex gap-2`}
                                >
                                    {projects.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                            className={`h-2 rounded-full transition-all ${
                                                index === currentIndex
                                                    ? 'w-8 bg-[#26d04c]'
                                                    : 'w-2 bg-gray-400'
                                            }`}
                                        ></button>
                                    ))}
                                </div>
                                <button
                                    onClick={nextProject}
                                    className={`p-3 rounded-full transition-colors ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                    }`}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-[#0063b9] to-[#26d04c]">
                            <div className="text-8xl opacity-50">
                                {projects[currentIndex].icon}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter */}
                <div className="text-center mt-8">
                    <p
                        className={`text-sm font-semibold ${
                            theme === 'dark'
                                ? 'text-gray-400'
                                : 'text-gray-600'
                        }`}
                    >
                        {currentIndex + 1} / {projects.length}
                    </p>
                </div>
            </div>
        </section>
    );
}
