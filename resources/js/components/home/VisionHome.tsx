import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';

export default function VisionHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="order-2 lg:order-1">
                        <div
                            className={`rounded-lg overflow-hidden h-96 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-9xl transform hover:scale-105 transition-transform`}
                        >
                            🎯
                        </div>
                    </div>

                    {/* Right - Text */}
                    <div className="order-1 lg:order-2">
                        <h2
                            className={`text-4xl md:text-5xl font-bold mb-4 ${
                                theme === 'dark'
                                    ? 'text-white'
                                    : 'text-gray-900'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Notre Vision'
                                : 'Our Vision'}
                        </h2>
                        <h3
                            className={`text-2xl font-semibold mb-6 text-[#0063b9]`}
                        >
                            {language === 'fr'
                                ? 'Dirigé par l\'excellence et l\'innovation'
                                : 'Driven by Excellence and Innovation'}
                        </h3>
                        <p
                            className={`text-lg leading-relaxed ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                            }`}
                        >
                            {language === 'fr'
                                ? 'Chez MPE DIGITAL SOLUTIONS, nous croyons que chaque projet est une opportunité de créer quelque chose d\'exceptionnel. Notre engagement envers l\'excellence et l\'innovation guide chaque décision que nous prenons. Nous ne cherchons pas simplement à accomplir des tâches, nous aspirons à construire des partenariats durables qui transforment les rêves digitaux en réalité tangible.'
                                : 'At MPE DIGITAL SOLUTIONS, we believe that every project is an opportunity to create something exceptional. Our commitment to excellence and innovation guides every decision we make. We don\'t just aim to complete tasks, we aspire to build lasting partnerships that transform digital dreams into tangible reality.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
