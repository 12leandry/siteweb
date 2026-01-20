import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { Check } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function AboutUsHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const benefits = [
        language === 'fr'
            ? 'Expertise digitale reconnue'
            : 'Recognized digital expertise',
        language === 'fr'
            ? 'Innovation et technologies de pointe'
            : 'Innovation and cutting-edge technologies',
        language === 'fr'
            ? 'Accompagnement personnalisé 24/7'
            : 'Personalized 24/7 support',
        language === 'fr'
            ? 'Résultats mesurables et durables'
            : 'Measurable and lasting results',
    ];

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text */}
                    <div>
                        <h2
                            className={`text-4xl md:text-5xl font-bold mb-4 ${
                                theme === 'dark'
                                    ? 'text-white'
                                    : 'text-gray-900'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Qui Sommes-Nous ?'
                                : 'Who Are We?'}
                        </h2>
                        <h3
                            className={`text-2xl font-semibold mb-6 text-[#0063b9]`}
                        >
                            {language === 'fr'
                                ? 'Votre Partenaire Digital de Confiance'
                                : 'Your Trusted Digital Partner'}
                        </h3>
                        <p
                            className={`text-lg mb-6 leading-relaxed ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Transformez votre vision digitale en réalité avec notre expertise et notre passion pour l\'innovation. Depuis plus de 10 ans, nous accompagnons les entreprises de toutes tailles dans leur transformation numérique.'
                                : 'Transform your digital vision into reality with our expertise and passion for innovation. For over 10 years, we have been helping businesses of all sizes in their digital transformation.'}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#26d04c]">
                                            <Check
                                                size={16}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`text-sm font-medium ${
                                            theme === 'dark'
                                                ? 'text-gray-300'
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {benefit}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/about">
                                <a
                                    className={`px-6 py-3 rounded-lg font-semibold transition-colors text-center ${
                                        theme === 'dark'
                                            ? 'bg-[#0063b9] hover:bg-[#004a91] text-white'
                                            : 'bg-[#0063b9] hover:bg-[#004a91] text-white'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'En Savoir Plus'
                                        : 'Learn More'}
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a
                                    className={`px-6 py-3 rounded-lg font-semibold transition-colors border text-center ${
                                        theme === 'dark'
                                            ? 'border-[#26d04c] text-[#26d04c] hover:bg-[#26d04c]/10'
                                            : 'border-[#26d04c] text-[#26d04c] hover:bg-[#26d04c]/10'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'Nous Contacter'
                                        : 'Contact Us'}
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className={`rounded-lg overflow-hidden h-64 bg-gradient-to-br from-[#0063b9] to-[#004a91] flex items-center justify-center text-5xl transform hover:scale-105 transition-transform`}
                        >
                            👥
                        </div>
                        <div
                            className={`rounded-lg overflow-hidden h-64 bg-gradient-to-br from-[#26d04c] to-[#22ba41] flex items-center justify-center text-5xl transform hover:scale-105 transition-transform`}
                        >
                            💡
                        </div>
                        <div
                            className={`rounded-lg overflow-hidden h-64 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl transform hover:scale-105 transition-transform`}
                        >
                            🚀
                        </div>
                        <div
                            className={`rounded-lg overflow-hidden h-64 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-5xl transform hover:scale-105 transition-transform`}
                        >
                            📊
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
