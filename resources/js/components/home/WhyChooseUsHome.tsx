import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import {
    Award,
    Zap,
    Headphones,
    Shield,
} from 'lucide-react';

export default function WhyChooseUsHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const benefits = [
        {
            label: language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction',
            value: '97%',
        },
        {
            label: language === 'fr' ? 'Projets Complétés' : 'Projects Completed',
            value: '610+',
        },
        {
            label: language === 'fr' ? 'Années d\'Expérience' : 'Years Experience',
            value: '10+',
        },
        {
            label: language === 'fr' ? 'Équipe Dédiée' : 'Team Members',
            value: '50+',
        },
    ];

    const features = [
        {
            icon: Award,
            title: language === 'fr' ? 'Expertise Reconnue' : 'Recognized Expertise',
            description:
                language === 'fr'
                    ? 'Nos experts sont certifiés et reconnus dans l\'industrie digitale'
                    : 'Our experts are certified and recognized in the digital industry',
        },
        {
            icon: Zap,
            title: language === 'fr' ? 'Performance Garantie' : 'Guaranteed Performance',
            description:
                language === 'fr'
                    ? 'Solutions optimisées pour des résultats mesurables et durables'
                    : 'Optimized solutions for measurable and lasting results',
        },
        {
            icon: Headphones,
            title: language === 'fr' ? 'Support 24/7' : '24/7 Support',
            description:
                language === 'fr'
                    ? 'Notre équipe est toujours disponible pour vous aider'
                    : 'Our team is always available to help you',
        },
        {
            icon: Shield,
            title: language === 'fr' ? 'Transparence Totale' : 'Total Transparency',
            description:
                language === 'fr'
                    ? 'Communication claire et rapports détaillés à chaque étape'
                    : 'Clear communication and detailed reports at every step',
        },
    ];

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Benefits */}
                    <div>
                        <h2
                            className={`text-4xl font-bold mb-6 ${
                                theme === 'dark'
                                    ? 'text-white'
                                    : 'text-gray-900'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Pourquoi Choisir Nous ?'
                                : 'Why Choose Us?'}
                        </h2>
                        <p
                            className={`text-lg mb-8 ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-600'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Nous combinons expertise technique et compréhension profonde des besoins commerciaux pour créer des solutions qui transforment vraiment votre business.'
                                : 'We combine technical expertise with a deep understanding of business needs to create solutions that truly transform your business.'}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-700'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    <div className="text-3xl font-bold text-[#26d04c] mb-2">
                                        {benefit.value}
                                    </div>
                                    <div
                                        className={`text-sm ${
                                            theme === 'dark'
                                                ? 'text-gray-300'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        {benefit.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="text-[#0063b9] mb-4">
                                        <Icon size={32} />
                                    </div>
                                    <h3
                                        className={`text-lg font-bold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${
                                            theme === 'dark'
                                                ? 'text-gray-300'
                                                : 'text-gray-600'
                                        }`}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
